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

if len(sys.argv) < 4:
    sys.exit("Usage: python3 run_beautify_tools.py <input_dir> <output_dir> <driver>")

print("BEAUTIFY TOOLS")
input_dir = sys.argv[1]
output_dir = sys.argv[2]
driver_path = sys.argv[3]



#path = "./chromedriver"
#file_location = "./Scripts_beautifyTools"
#e_list = "./beautifyTools.txt"

def run_beautify_tools(input_dir,output_dir,driver_path):
    try:
        os.makedirs(output_dir, exist_ok = True)
    except OSError as err:
        sys.exit("Error: " + str(err) + ", output directory '" + output_dir + "' cannot be created")
    files =[]
    files_name = []
    for f in os.scandir(input_dir):
        file = open(f.path, 'r',encoding='ISO-8859-1')
        files_name.append(f.name[:len(f.name)-3])
        contents = file.read()
        files.append(contents)

    driver = webdriver.Chrome(driver_path)
    #err_list = open(e_list, 'a')

    success_list = "./logs/beautify_tools_successes.txt"
    failure_list = "./logs/beautify_tools__failures.txt"

    parent_dir = output_dir.split("/")[0]
    try:
        # 'w' mode will replace file if it already exists
        succ_file = open(os.path.join(parent_dir, success_list), 'w')
        fail_file = open(os.path.join(parent_dir, failure_list), 'w')
    except IOError:
        sys.exit("Could not open log files")

    driver.get("http://beautifytools.com/javascript-obfuscator.php#")

    input_box = driver.find_element_by_id("src")

    count = 12
    contains = False

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
        except:
            contains = False
            print("False")
            driver.close()
            driver = webdriver.Chrome(driver_path)
            driver.get("http://beautifytools.com/javascript-obfuscator.php#")
            continue
        finally:
            if(contains and text.startswith("eval")):
                outpath = os.path.join(output_dir, filename)
                f = open(outpath, "w")
                f.write(text)
                f.close()
                succ_file.write(filename + "\n")
            else:
                fail_file.write(filename + "\n")
                count = count + 1
                continue

            driver.execute_script('document.getElementById("src").value="";')
            count = count + 1
            print(count)
            continue

    succ_file.close()
    fail_file.close()
    driver.quit()

#textbox solver https://stackoverflow.com/questions/50679605/how-to-send-entire-text-into-a-text-area-using-selenium-in-python-instead-of-sen/50680286#50680286