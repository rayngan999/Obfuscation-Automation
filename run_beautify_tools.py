from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
import os
import sys
import shutil
import os.path
from os import path


#path = "./chromedriver"
#file_location = "./Scripts_beautifyTools"
#e_list = "./beautifyTools.txt"
input_dir = "/home/c2/Documents/rayngan/Obfuscation-Automation/obfus_prep"
output_dir = "/home/c2/Documents/rayngan/Obfuscation-Automation/obfuscated/beautify_tools"
def run_beautify_tools(input_dir,output_dir):
    files =[]
    files_name = []
    for f in os.scandir(input_dir):
        file = open(f.path, 'r',encoding='ISO-8859-1')
        files_name.append(f.name[:len(f.name)-3])
        contents = file.read()
        files.append(contents)

    driver = webdriver.Firefox(executable_path='/home/c2/Documents/rayngan/Obfuscation-Automation/geckodriver')
    #err_list = open(e_list, 'a')

    

    parent_dir = output_dir.split("/")[0]
    

    driver.get("http://beautifytools.com/javascript-obfuscator.php#")

    input_box = driver.find_element_by_id("src")

    count = 90
    contains = False
    k = 0
    for num in files:
    	
        try:
            filename = files_name[count]+".js"
            long_string= files[count]
            driver.execute_script('document.getElementById("src").value=arguments[0]', long_string)
            button = driver.find_element_by_id("obfuscate")
            button.click()

            # Give time so the script can be obfuscated
            # Also keeps the website from being overloaded
            time.sleep(5) 

            output = driver.find_element_by_id("out")
            text = output.get_attribute('value')
            if text != "":
                contains = True
                print("True")
                k+=1
        except:
            contains = False
            print("False")
            driver.close()
            driver = webdriver.Firefox(executable_path='/home/c2/Documents/rayngan/Obfuscation-Automation/geckodriver')
            driver.get("http://beautifytools.com/javascript-obfuscator.php#")
            continue
        finally:
            if k == 3250:
                break
            if(contains and text.startswith("eval")):
                outpath = os.path.join(output_dir, filename)
                f = open(outpath, "w")
                f.write(text)
                f.close()
                
         
                
                

            driver.execute_script('document.getElementById("src").value="";')
            count = count + 1
            print(count)
            


    driver.quit()

run_beautify_tools(input_dir,output_dir)
