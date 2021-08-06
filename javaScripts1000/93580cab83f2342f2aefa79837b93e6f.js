<!DOCTYPE html>
<html xmlns="//www.w3.org/1999/xhtml">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Exam Results - Register for Board Results</title>
      <link rel="stylesheet" type="text/css" href="css/registrationform.css" />
      <script language="javascript" type="text/javascript" src="js/jquery.min.js"></script>
      <script language="javascript" type="text/javascript" src="js/registrationform.js"></script>
   </head>
   <body>
      <div id="wrapper">
         <div class="clearfix">
            <div>
              <div class="leadform registrationLeadForm">
                  <div class="regForm_top">
                     <div class="leadFormHeader">Register & Receive Board Updates</div>
                  </div>
                  <div class="regForm_middle">
                     <div class="regFormBody">
                        <form method="POST" name="frm" id="frm" action="genericerform_ty.asp">
                            <input Type="hidden" Value="" tabIndex="20" Name="client"/>
						   <input Type="hidden" Value="submit" tabIndex="40" Name="submit"/>
						    <div class="formRow">
                              <div class="formElement"><input type='text'  name='rollno' placeholder='Roll / Registration Number' style = 'float: left;'></div>
                           </div>
                           <div class="formRow">
                              <div class="formElement j-select">
                                 <Select style="z-index: 10; opacity: 0; filter:alpha(opacity=0);" id="BoardName" Name="boardname">
                                    <Option value="--- Select One ---" Selected="True">--- Select One ---</Option>
                                    <Option value="CBSE Class 12 Results">
                                       <!--1000-->CBSE Class 12 Results
                                    </Option>
                                    <Option value="CBSE Class 10 Results">
                                       <!--1010-->CBSE Class 10 Results
                                    </Option>
                                    <Option value="CISCE ISC Results">
                                       <!--1020-->CISCE ISC Results
                                    </Option>
                                    <Option value="CISCE ICSE Results">
                                       <!--1030-->CISCE ICSE Results
                                    </Option>
                                    <Option value="NIOS Class 12 Results">
                                       <!--1040-->NIOS Class 12 Results
                                    </Option>
                                    <Option value="NIOS Class 10 Results">
                                       <!--1050-->NIOS Class 10 Results
                                    </Option>
                                    <Option value="Andhra Pradesh Inter Results">
                                       <!--1060-->Andhra Pradesh Inter Results
                                    </Option>
                                    <Option value="Andhra Pradesh SSC Results">
                                       <!--1070-->Andhra Pradesh SSC Results
                                    </Option>
                                    <Option value="Assam Class 12 Results">
                                       <!--1080-->Assam Class 12 Results
                                    </Option>
                                    <Option value="Assam Class 10 Results">
                                       <!--1090-->Assam Class 10 Results
                                    </Option>
                                    <Option value="Bihar Class 10 Results">
                                       <!--1100-->Bihar Class 10 Results
                                    </Option>
                                    <Option value="Bihar Class 12 Results">
                                       <!--1110-->Bihar Class 12 Results
                                    </Option>
                                    <Option value="Chhattisgarh Class 10 Results">
                                       <!--1120-->Chhattisgarh Class 10 Results
                                    </Option>
                                    <Option value="Chhattisgarh Class 12 Results">
                                       <!--1130-->Chhattisgarh Class 12 Results
                                    </Option>
                                    <Option value="Goa Class 12 Results">
                                       <!--1140-->Goa Class 12 Results
                                    </Option>
                                    <Option value="Goa Class 10 Results">
                                       <!--1150-->Goa Class 10 Results
                                    </Option>
                                    <Option value="GUJCET Results">
                                       <!--1160-->GUJCET Results
                                    </Option>
                                    <Option value="Gujarat Class 12 Results">
                                       <!--1170-->Gujarat Class 12 Results
                                    </Option>
                                    <Option value="Gujarat Class 10 Results">
                                       <!--1180-->Gujarat Class 10 Results
                                    </Option>
                                    <Option value="Haryana Class 12 Results">
                                       <!--1190-->Haryana Class 12 Results
                                    </Option>
                                    <Option value="Haryana Class 10 Results">
                                       <!--1200-->Haryana Class 10 Results
                                    </Option>
                                    <Option value="Himachal Class 12 Results">
                                       <!--1210-->Himachal Class 12 Results
                                    </Option>
                                    <Option value="Himachal Class 10 Results">
                                       <!--1220-->Himachal Class 10 Results
                                    </Option>
                                    <Option value="Jharkhand Class 12 Results">
                                       <!--1230-->Jharkhand Class 12 Results
                                    </Option>
                                    <Option value="Jharkhand Class 10 Results">
                                       <!--1240-->Jharkhand Class 10 Results
                                    </Option>
                                    <Option value="JK Board Class 12 Results">
                                       <!--1250-->JK Board Class 12 Results
                                    </Option>
                                    <Option value="JK Board Class 10 Results">
                                       <!--1260-->JK Board Class 10 Results
                                    </Option>
                                    <Option value="Karnataka Class 12 Results">
                                       <!--1270-->Karnataka Class 12 Results
                                    </Option>
                                    <Option value="Karnataka Class 10 Results">
                                       <!--1280-->Karnataka Class 10 Results
                                    </Option>
                                    <Option value="Kerala Class 12 Results">
                                       <!--1290-->Kerala Class 12 Results
                                    </Option>
                                    <Option value="Kerala Class 10 Results">
                                       <!--1300-->Kerala Class 10 Results
                                    </Option>
                                    <Option value="Madhya Pradesh Class 12 Results">
                                       <!--1310-->Madhya Pradesh Class 12 Results
                                    </Option>
                                    <Option value="Madhya Pradesh Class 10 Results">
                                       <!--1320-->Madhya Pradesh Class 10 Results
                                    </Option>
                                    <Option value="Maharasthra Class 12 Results">
                                       <!--1330-->Maharasthra Class 12 Results
                                    </Option>
                                    <Option value="Maharasthra Class 10 Results">
                                       <!--1340-->Maharasthra Class 10 Results
                                    </Option>
                                    <Option value="Manipur Class 10 Results">
                                       <!--1350-->Manipur Class 10 Results
                                    </Option>
                                    <Option value="Manipur Class 12 Results">
                                       <!--1360-->Manipur Class 12 Results
                                    </Option>
                                    <Option value="Meghalaya Class 12 Results">
                                       <!--1370-->Meghalaya Class 12 Results
                                    </Option>
                                    <Option value="Meghalaya Class 10 Results">
                                       <!--1380-->Meghalaya Class 10 Results
                                    </Option>
                                    <Option value="Mizoram Class 10 Results">
                                       <!--1390-->Mizoram Class 10 Results
                                    </Option>
                                    <Option value="Mizoram Class 12 Results">
                                       <!--1400-->Mizoram Class 12 Results
                                    </Option>
                                    <Option value="Nagaland Class 12 Results">
                                       <!--1410-->Nagaland Class 12 Results
                                    </Option>
                                    <Option value="Nagaland Class 10 Results">
                                       <!--1420-->Nagaland Class 10 Results
                                    </Option>
                                    <Option value="Orissa Class 12 Results">
                                       <!--1430-->Orissa Class 12 Results
                                    </Option>
                                    <Option value="Orissa Class 10 Results">
                                       <!--1440-->Orissa Class 10 Results
                                    </Option>
                                    <Option value="Punjab Class 12 Results">
                                       <!--1450-->Punjab Class 12 Results
                                    </Option>
                                    <Option value="Punjab Class 10 Results">
                                       <!--1460-->Punjab Class 10 Results
                                    </Option>
                                    <Option value="Rajasthan Class 12 Results">
                                       <!--1470-->Rajasthan Class 12 Results
                                    </Option>
                                    <Option value="Rajasthan Class 10 Results">
                                       <!--1480-->Rajasthan Class 10 Results
                                    </Option>
                                    <Option value="Rajasthan Class 8 Results">
                                       <!--1490-->Rajasthan Class 8 Results
                                    </Option>
                                    <Option value="Tamil Nadu Class 12 Results">
                                       <!--1500-->Tamil Nadu Class 12 Results
                                    </Option>
                                    <Option value="Tamil Nadu Class 10 Results">
                                       <!--1510-->Tamil Nadu Class 10 Results
                                    </Option>
                                    <Option value="Telangana Inter Results">
                                       <!--1520-->Telangana Inter Results
                                    </Option>
                                    <Option value="Telangana SSC Results">
                                       <!--1530-->Telangana SSC Results
                                    </Option>
                                    <Option value="Tripura Class 10 Results">
                                       <!--1540-->Tripura Class 10 Results
                                    </Option>
                                    <Option value="Tripura Class 12 Results">
                                       <!--1550-->Tripura Class 12 Results
                                    </Option>
                                    <Option value="Uttar Pradesh Class 12 Results">
                                       <!--1560-->Uttar Pradesh Class 12 Results
                                    </Option>
                                    <Option value="Uttar Pradesh Class 10 Results">
                                       <!--1570-->Uttar Pradesh Class 10 Results
                                    </Option>
                                    <Option value="Uttarakhand Class 12 Results">
                                       <!--1580-->Uttarakhand Class 12 Results
                                    </Option>
                                    <Option value="Uttarakhand Class 10 Results">
                                       <!--1590-->Uttarakhand Class 10 Results
                                    </Option>
                                    <Option value="West Bengal Class 12 Results">
                                       <!--1600-->West Bengal Class 12 Results
                                    </Option>
                                    <Option value="West Bengal Class 10 Results">
                                       <!--1610-->West Bengal Class 10 Results
                                    </Option>
                                 </Select>
                                 <span class="opt" id="optBoardName">Board Name</span>
                              </div>
                           </div>
                           <div class="formRow">
                              <div class="formElement"><input type='text'  name='name' placeholder='Name' style = 'float: left;'></div>
                           </div>
                           <div class="formRow">
                              <div class="formElement"><input type='tel' name='phoneno1' placeholder='Mobile Number' style = 'float: left;'></div>
                              <div class="formErrorRow">
                                 <div class="error phoneerror"></div>
                              </div>
                           </div>
                           <!-- 		<div class="error" style="color:#1476B7; padding: 0 0 0 104px;"><b>OR</b></div> -->
                           <div class="formRow">
                              <div class="formElement"><input type='email'  name='email' placeholder='E-mail' style = 'float: left;'></div>
                           </div>
                           <div class="formRow">
                              <div class="formElement j-select">
                                 <Select style="z-index: 10; opacity: 0; filter:alpha(opacity=0);" id="CT" Name="city">
                                    <Option value="--- Select One ---" Selected="True">--- Select One ---</Option>
                                    <optgroup label="Metro Cities">
                                       <Option value="METRO:DL:New Delhi">
                                          <!--10010-->New Delhi
                                       </Option>
                                       <Option value="METRO:MH:Mumbai">
                                          <!--10020-->Mumbai
                                       </Option>
                                       <Option value="METRO:KA:Bangalore">
                                          <!--10030-->Bangalore
                                       </Option>
                                       <Option value="METRO:TN:Chennai">
                                          <!--10040-->Chennai
                                       </Option>
                                       <Option value="METRO:AP:Hyderabad">
                                          <!--10050-->Hyderabad
                                       </Option>
                                       <Option value="METRO:WB:Kolkata">
                                          <!--10060-->Kolkata
                                       </Option>
                                       <Option value="METRO:MH:Pune">
                                          <!--10070-->Pune
                                       </Option>
                                       <Option value="METRO:GJ:Ahmedabad">
                                          <!--10080-->Ahmedabad
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Andaman Nicobar Islands">
                                       <Option value="AN:Andaman Island">
                                          <!--10100-->Andaman Island
                                       </Option>
                                       <Option value="AN:Nicobar Islands">
                                          <!--10110-->Nicobar Islands
                                       </Option>
									   <Option value="AN:Port Blair">
                                          <!--10120-->Port Blair
                                       </Option>
                                       <Option value="AN:Other">
                                          <!--10130-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Arunachal Pradesh">
                                       <Option value="AR:Itanagar">
                                          <!--10140-->Itanagar
                                       </Option>
									   <Option value="AR:Doimukh">
                                          <!--10150-->Doimukh
                                       </Option>
                                       <Option value="AR:Other">
                                          <!--10160-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Andhra Pradesh">
                                       <Option value="AP:Vijayawada">
                                          <!--10170-->Vijayawada
                                       </Option>
                                       <Option value="AP:Chitoor">
                                          <!--10190-->Chitoor
                                       </Option>
                                       <Option value="AP:Vizag">
                                          <!--10200-->Vizag
                                       </Option>
                                       <Option value="AP:Medak">
                                          <!--10210-->Medak
                                       </Option>
                                       <Option value="AP:Visakhapatnam">
                                          <!--10220-->Visakhapatnam
                                       </Option>
									   <Option value="AP:Vizianagaram">
                                          Vizianagaram
                                       </Option>
									   <Option value="AP:Tadepalligudem">
                                          Tadepalligudem
                                       </Option>
									   <Option value="AP:Kurnool">
                                          Kurnool
                                       </Option>
									   <Option value="AP:Bhimavaram">
                                          Bhimavaram
                                       </Option>
									   <Option value="AP:Karim Nagar">
                                          Karim Nagar
                                       </Option>
									   <Option value="AP:Guntur">
                                          Guntur
                                       </Option>
									   <Option value="AP:Chuddapah">
                                          Chuddapah
                                       </Option>
									   <Option value="AP:Bapatala">
                                          Bapatala
                                       </Option>
									   <Option value="AP:Anantpur">
                                          Anantpur
                                       </Option>
                                       <Option value="AP:Prakasam">
                                          Prakasam
                                       </Option>
									   <Option value="AP:Nasarpur">
                                          Nasarpur
                                       </Option>
									   <Option value="AP:Mehboob Nagar">
                                          Mehboob Nagar
                                       </Option>
									   <Option value="AP:Gandipet">
                                          Gandipet
                                       </Option>
									   <Option value="AP:Eluru">
                                          Eluru
                                       </Option>
									   <Option value="AP:Nandyal">
                                          Nandyal
                                       </Option>
									   <Option value="AP:Nellore">
                                          Nellore
                                       </Option>
									   <Option value="AP:Bollaram">
                                          Bollaram
                                       </Option>
									   <Option value="AP:Krishna">
                                          Krishna
                                       </Option>
									   <Option value="AP:Miyapur">Miyapur</Option>
									   <Option value="AP:Tirupati">Tirupati</Option>
									   <Option value="AP:Khamman">Khamman</Option>
									   <Option value="AP:Srikakulam">Srikakulam</Option>
									   <Option value="AP:Secunderabad">Secunderabad</Option>
									   <Option value="AP:Kuppam">Kuppam</Option>
									   <Option value="AP:Kadapa">Kadapa</Option>
									   <Option value="AP:Vidyanagar">Vidyanagar</Option>
									   <Option value="AP:Chilakaluripet">Chilakaluripet</Option>
									   <Option value="AP:Kakinada">Kakinada</Option>
									   <Option value="AP:Narasaropeta">Narasaropeta</Option>
									   <Option value="AP:Madanpalli">Madanpalli</Option>
									   <Option value="AP:Vijaywada">Vijaywada</Option>
									   <Option value="AP:Machilipatnam">Machilipatnam</Option>
									   <Option value="AP:Rajampet">Rajampet</Option>
									   <Option value="AP:Ongole">Ongole</Option>
									   <Option value="AP:Waltair">Waltair</Option>
									   <Option value="AP:Rajamundry">Rajamundry</Option>
									   <Option value="AP:RangaReddy">RangaReddy</Option>
									   <Option value="AP:Rajam">Rajam</Option>
									   <Option value="AP:Chirala">Chirala</Option>
									   <Option value="AP:Anaparthi">Anaparthi</Option>
									   <Option value="AP:East Godavari">East Godavari</Option>
									   <Option value="AP:Tanuku">Tanuku</Option>
									   <Option value="AP:Odalarevu">Odalarevu</Option>
									   <Option value="AP:Other">Other</Option>
                                    </optgroup>
                                    <optgroup label="Assam">
                                       <Option value="AS:Guwahati">
                                          <!--10250-->Guwahati
                                       </Option>
                                       <Option value="AS:Dispur">
                                          <!--10260-->Dispur
                                       </Option>
									   <Option value="AS:Johrat">
                                         Johrat
                                       </Option>
									   <Option value="AS:Dibrugarh">
                                         Dibrugarh
                                       </Option>
									   <Option value="AS:Silchar">
                                         Silchar
                                       </Option>
                                       <Option value="AS:Tezpur">
                                          <!--10270-->Tezpur
                                       </Option>
									   <Option value="AS:Tinsukhia">
                                         Tinsukhia
                                       </Option>
                                       <Option value="AS:Other">
                                          <!--10280-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Bihar">
                                       <Option value="BR:Gaya">
                                          <!--10300-->Gaya
                                       </Option>
                                       <Option value="BR:Nalanda">
                                          <!--10310-->Nalanda
                                       </Option>
                                       <Option value="BR:Patna">
                                          <!--10320-->Patna
                                       </Option>
                                       <Option value="BR:Rajgir">
                                          <!--10330-->Rajgir
                                       </Option>
                                       <Option value="BR:Vaishali">
                                          <!--10340-->Vaishali
                                       </Option>
                                       <Option value="BR:Other">
                                          <!--10350-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Chhattisgarh">
                                       <Option value="CT:Raipur">
                                          <!--10370-->Raipur
                                       </Option>
									   <Option value="CT:Rajnandgaon">
                                          Rajnandgaon
                                       </Option>
									   <Option value="CT:Bilaspur">
                                          Bilaspur
                                       </Option>
									   <Option value="CT:Bhilai">
                                         Bhilai
                                       </Option>
									   <Option value="CT:Durg">
                                          Durg
                                       </Option>
                                       <Option value="CT:Other">
                                          <!--10380-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Delhi">
                                       <Option value="DL:Faridabad">
                                          <!--10400-->Faridabad
                                       </Option>
                                       <Option value="DL:Ghaziabad">
                                          <!--10410-->Ghaziabad
                                       </Option>
                                       <Option value="DL:Greater Noida">
                                          <!--10420-->Greater Noida
                                       </Option>
                                       <Option value="DL:Gurgaon">
                                          <!--10430-->Gurgaon
                                       </Option>
                                       <Option value="DL:New Delhi">
                                          <!--10440-->New Delhi
                                       </Option>
                                       <Option value="DL:Noida">
                                          <!--10450-->Noida
                                       </Option>
                                       <Option value="DL:Other">
                                          <!--10460-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Goa">
                                       <Option value="GA:Canacona">
                                          <!--10480-->Canacona
                                       </Option>
                                       <Option value="GA:Mapusa">
                                          <!--10490-->Mapusa
                                       </Option>
                                       <Option value="GA:Margao">
                                          <!--10500-->Margao
                                       </Option>
                                       <Option value="GA:Old Goa">
                                          <!--10510-->Old Goa
                                       </Option>
                                       <Option value="GA:Panaji">
                                          <!--10520-->Panaji
                                       </Option>
                                       <Option value="GA:Ponda">
                                          <!--10530-->Ponda
                                       </Option>
                                       <Option value="GA:Vasco Da Gama">
                                          <!--10540-->Vasco Da Gama
                                       </Option>
                                       <Option value="GA:Other">
                                          <!--10550-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Gujarat">
                                       <Option value="GJ:Ahmedabad">
                                          <!--10570-->Ahmedabad
                                       </Option>
                                       <Option value="GJ:Anand">
                                          <!--10580-->Anand
                                       </Option>
                                       <Option value="GJ:Gandhinagar">
                                          <!--10590-->Gandhinagar
                                       </Option>
                                       <Option value="GJ:Rajkot">
                                          <!--10600-->Rajkot
                                       </Option>
                                       <Option value="GJ:Surat">
                                          <!--10610-->Surat
                                       </Option>
                                       <Option value="GJ:Vadodara">
                                          <!--10620-->Vadodara
                                       </Option>
                                       <Option value="GJ:Other">
                                          <!--10630-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Haryana">
                                       <Option value="HR:Chandigarh">
                                          <!--10650-->Chandigarh
                                       </Option>
                                       <Option value="HR:Faridabad">
                                          <!--10660-->Faridabad
                                       </Option>
                                       <Option value="HR:Gurgaon">
                                          <!--10670-->Gurgaon
                                       </Option>
                                       <Option value="HR:Karnal">
                                          <!--10680-->Karnal
                                       </Option>
                                       <Option value="HR:Other">
                                          <!--10690-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Himachal Pradesh">
                                       <Option value="HP:Dharamsala">
                                          <!--10710-->Dharamsala
                                       </Option>
                                       <Option value="HP:Kullu">
                                          <!--10720-->Kullu
                                       </Option>
                                       <Option value="HP:Manali">
                                          <!--10730-->Manali
                                       </Option>
                                       <Option value="HP:Shimla">
                                          <!--10740-->Shimla
                                       </Option>
                                       <Option value="HP:Other">
                                          <!--10750-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Jammu and Kashmir">
                                       <Option value="JK:Gulmarg">
                                          <!--10770-->Gulmarg
                                       </Option>
                                       <Option value="JK:Jammu">
                                          <!--10780-->Jammu
                                       </Option>
                                       <Option value="JK:Ladakh">
                                          <!--10790-->Ladakh
                                       </Option>
                                       <Option value="JK:Leh">
                                          <!--10800-->Leh
                                       </Option>
                                       <Option value="JK:Pahalgam">
                                          <!--10810-->Pahalgam
                                       </Option>
                                       <Option value="JK:Srinagar">
                                          <!--10820-->Srinagar
                                       </Option>
                                       <Option value="JK:Other">
                                          <!--10830-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Jharkhand">
                                       <Option value="JH:Dhanbad">
                                          <!--10850-->Dhanbad
                                       </Option>
                                       <Option value="JH:Jamshedpur">
                                          <!--10860-->Jamshedpur
                                       </Option>
                                       <Option value="JH:Ranchi">
                                          <!--10870-->Ranchi
                                       </Option>
                                       <Option value="JH:Other">
                                          <!--10880-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Karnataka">
                                       <Option value="KA:Bangalore">
                                          <!--10900-->Bangalore
                                       </Option>
                                       <Option value="KA:Davangere">
                                          <!--10910-->Davangere
                                       </Option>
                                       <Option value="KA:Hampi">
                                          <!--10920-->Hampi
                                       </Option>
                                       <Option value="KA:Hassan">
                                          <!--10930-->Hassan
                                       </Option>
                                       <Option value="KA:Hubli">
                                          <!--10940-->Hubli
                                       </Option>
                                       <Option value="KA:Mangalore">
                                          <!--10950-->Mangalore
                                       </Option>
                                       <Option value="KA:Mysore">
                                          <!--10960-->Mysore
                                       </Option>
                                       <Option value="KA:Udupi">
                                          <!--10970-->Udupi
                                       </Option>
                                       <Option value="KA:Other">
                                          <!--10980-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Kerala">
                                       <Option value="KL:Alleppey">
                                          <!--11000-->Alleppey
                                       </Option>
                                       <Option value="KL:Cochin">
                                          <!--11010-->Cochin
                                       </Option>
                                       <Option value="KL:Kovalam">
                                          <!--11020-->Kovalam
                                       </Option>
                                       <Option value="KL:Kozhikode">
                                          <!--11030-->Kozhikode
                                       </Option>
                                       <Option value="KL:Kumarakom">
                                          <!--11040-->Kumarakom
                                       </Option>
                                       <Option value="KL:Munnar">
                                          <!--11050-->Munnar
                                       </Option>
                                       <Option value="KL:Quilon">
                                          <!--11060-->Quilon
                                       </Option>
                                       <Option value="KL:Thekkady">
                                          <!--11070-->Thekkady
                                       </Option>
                                       <Option value="KL:Trivandrum">
                                          <!--11080-->Trivandrum
                                       </Option>
                                       <Option value="KL:Other">
                                          <!--11090-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Lakshadweep">
                                       <Option value="LD:Lakshadweep">
                                          <!--11110-->Lakshadweep
                                       </Option>
                                       <Option value="LD:Other">
                                          <!--11120-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Madhya Pradesh">
                                       <Option value="MP:Bhopal">
                                          <!--11210-->Bhopal
                                       </Option>
                                       <Option value="MP:Gwalior">
                                          <!--11220-->Gwalior
                                       </Option>
                                       <Option value="MP:Indore">
                                          <!--11230-->Indore
                                       </Option>
                                       <Option value="MP:Khajuraho">
                                          <!--11240-->Khajuraho
                                       </Option>
                                       <Option value="MP:Orchha">
                                          <!--11250-->Orchha
                                       </Option>
                                       <Option value="MP:Ujjain">
                                          <!--11260-->Ujjain
                                       </Option>
                                       <Option value="MP:Other">
                                          <!--11270-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Maharashtra">
                                       <Option value="MH:Amravati">
                                          <!--11290-->Amravati
                                       </Option>
                                       <Option value="MH:Aurangabad">
                                          <!--11300-->Aurangabad
                                       </Option>
                                       <Option value="MH:Mumbai">
                                          <!--11310-->Mumbai
                                       </Option>
                                       <Option value="MH:Nagpur">
                                          <!--11320-->Nagpur
                                       </Option>
                                       <Option value="MH:Nashik">
                                          <!--11330-->Nashik
                                       </Option>
                                       <Option value="MH:Navi Mumbai">
                                          <!--11340-->Navi Mumbai
                                       </Option>
                                       <Option value="MH:Pune">
                                          <!--11350-->Pune
                                       </Option>
                                       <Option value="MH:Thane">
                                          <!--11360-->Thane
                                       </Option>
                                       <Option value="MH:Other">
                                          <!--11370-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Manipur">
                                       <Option value="MN:Imphal">
                                          <!--11390-->Imphal
                                       </Option>
                                       <Option value="MN:Other">
                                          <!--11400-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Meghalaya">
                                       <Option value="ML:Shillong">
                                          <!--11420-->Shillong
                                       </Option>
                                       <Option value="ML:Other">
                                          <!--11430-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Mizoram">
                                       <Option value="MZ:Aizawl">
                                          <!--11450-->Aizawl
                                       </Option>
                                       <Option value="MZ:Other">
                                          <!--11460-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Nagaland">
                                       <Option value="NL:Kohima">
                                          <!--11480-->Kohima
                                       </Option>
                                       <Option value="NL:Other">
                                          <!--11490-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Orissa/Odisha">
                                       <Option value="OR:Bhubaneswar">
                                          <!--11510-->Bhubaneswar
                                       </Option>
                                       <Option value="OR:Cuttack">
                                          <!--11520-->Cuttack
                                       </Option>
                                       <Option value="OR:Konark">
                                          <!--11530-->Konark
                                       </Option>
                                       <Option value="OR:Puri">
                                          <!--11540-->Puri
                                       </Option>
                                       <Option value="OR:Other">
                                          <!--11550-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Pondicherry">
                                       <Option value="PY:Pondicherry">
                                          <!--11570-->Pondicherry
                                       </Option>
                                       <Option value="PY:Other">
                                          <!--11580-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Punjab">
                                       <Option value="PB:Amritsar">
                                          <!--11600-->Amritsar
                                       </Option>
                                       <Option value="PB:Ludhiana">
                                          <!--11610-->Ludhiana
                                       </Option>
                                       <Option value="PB:Patiala">
                                          <!--11620-->Patiala
                                       </Option>
                                       <Option value="PB:Phagwara">
                                          <!--11630-->Phagwara
                                       </Option>
                                       <Option value="PB:Other">
                                          <!--11640-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Rajasthan">
                                       <Option value="RJ:Ajmer">
                                          <!--11660-->Ajmer
                                       </Option>
                                       <Option value="RJ:Alwar">
                                          <!--11670-->Alwar
                                       </Option>
                                       <Option value="RJ:Bhilwara">
                                          <!--11680-->Bhilwara
                                       </Option>
                                       <Option value="RJ:Bikaner">
                                          <!--11690-->Bikaner
                                       </Option>
                                       <Option value="RJ:Bundi">
                                          <!--11700-->Bundi
                                       </Option>
                                       <Option value="RJ:Jaisalmer">
                                          <!--11710-->Jaisalmer
                                       </Option>
                                       <Option value="RJ:Jaipur">
                                          <!--11720-->Jaipur
                                       </Option>
                                       <Option value="RJ:Jodhpur">
                                          <!--11730-->Jodhpur
                                       </Option>
                                       <Option value="RJ:Kota">
                                          <!--11740-->Kota
                                       </Option>
                                       <Option value="RJ:Ranakpur">
                                          <!--11750-->Ranakpur
                                       </Option>
                                       <Option value="RJ:Shekhawati">
                                          <!--11760-->Shekhawati
                                       </Option>
                                       <Option value="RJ:Udaipur">
                                          <!--11770-->Udaipur
                                       </Option>
                                       <Option value="RJ:Other">
                                          <!--11780-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Sikkim">
                                       <Option value="SK:Gangtok">
                                          <!--11800-->Gangtok
                                       </Option>
                                       <Option value="SK:Other">
                                          <!--11810-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Tamil Nadu">
                                       <Option value="TN:Chennai">
                                          <!--11830-->Chennai
                                       </Option>
                                       <Option value="TN:Coimbatore">
                                          <!--11840-->Coimbatore
                                       </Option>
                                       <Option value="TN:Kanyakumari">
                                          <!--11850-->Kanyakumari
                                       </Option>
                                       <Option value="TN:Kodaikanal">
                                          <!--11860-->Kodaikanal
                                       </Option>
                                       <Option value="TN:Madurai">
                                          <!--11870-->Madurai
                                       </Option>
                                       <Option value="TN:Ooty">
                                          <!--11880-->Ooty
                                       </Option>
                                       <Option value="TN:Rameshwaram">
                                          <!--11890-->Rameshwaram
                                       </Option>
                                       <Option value="TN:Thanjavur">
                                          <!--11900-->Thanjavur
                                       </Option>
                                       <Option value="TN:Trichy">
                                          <!--11910-->Trichy
                                       </Option>
                                       <Option value="TN:Other">
                                          <!--11920-->Other
                                       </Option>
                                    </optgroup>
									<optgroup label="Telangana">
                                       <Option value="TS:Nizamabad">
                                          Nizamabad
                                       </Option>
                                       <Option value="TS:Adilabad">
                                          Adilabad
                                       </Option>
                                       <Option value="TS:Nalgonda">
                                          Nalgonda
                                       </Option>
                                       <Option value="TS:Warangal">
                                          Warangal
                                       </Option>
                                       <Option value="TS:Hyderabad">
                                          Hyderabad
                                       </Option>
                                       <Option value="TS:Karimnagar">
                                          Karimnagar
                                       </Option>
									   <Option value="TS:Ramagundam">
                                          Ramagundam
                                       </Option>
									   <Option value="TS:Khammam">
                                          Khammam
                                       </Option>
									   <Option value="TS:Mahbubnagar">
                                          Mahbubnagar
                                       </Option>
									   <Option value="TS:Suryapet">
                                          Suryapet
                                       </Option>
									   <Option value="TS:Miryalaguda">
                                          Miryalaguda
                                       </Option>
                                       <Option value="TS:Other">
                                          Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Tripura">
                                       <Option value="TR:Agartala">
                                          <!--11940-->Agartala
                                       </Option>
                                       <Option value="TR:Other">
                                          <!--11950-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Uttar Pradesh">
                                       <Option value="UP:Agra">
                                          <!--11970-->Agra
                                       </Option>
                                       <Option value="UP:Aligarh">
                                          <!--11980-->Aligarh
                                       </Option>
                                       <Option value="UP:Allahabad">
                                          <!--11990-->Allahabad
                                       </Option>
                                       <Option value="UP:kanpur">
                                          <!--12000-->kanpur
                                       </Option>
                                       <Option value="UP:Lucknow">
                                          <!--12010-->Lucknow
                                       </Option>
                                       <Option value="UP:Meerut">
                                          <!--12020-->Meerut
                                       </Option>
                                       <Option value="UP:Muzaffarnagar">
                                          <!--12030-->Muzaffarnagar
                                       </Option>
                                       <Option value="UP:Varanasi">
                                          <!--12040-->Varanasi
                                       </Option>
                                       <Option value="UP:Other">
                                          <!--12050-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="Uttarakhand/Uttaranchal">
                                       <Option value="UT:Dehradun">
                                          <!--12070-->Dehradun
                                       </Option>
                                       <Option value="UT:Haridwar">
                                          <!--12080-->Haridwar
                                       </Option>
                                       <Option value="UT:Nainital">
                                          <!--12090-->Nainital
                                       </Option>
                                       <Option value="UT:Rishikesh">
                                          <!--12100-->Rishikesh
                                       </Option>
                                       <Option value="UT:Roorkee">
                                          <!--12110-->Roorkee
                                       </Option>
                                       <Option value="UT:Other">
                                          <!--12120-->Other
                                       </Option>
                                    </optgroup>
                                    <optgroup label="West Bengal">
                                    <Option value="WB:Burdwan">
                                       <!--12140-->Burdwan
                                    </Option>
                                    <Option value="WB:Darjeeling">
                                       <!--12150-->Darjeeling
                                    </Option>
                                    <Option value="WB:Durgapur">
                                       <!--12160-->Durgapur
                                    </Option>
                                    <Option value="WB:Kolkata">
                                       <!--12170-->Kolkata
                                    </Option>
                                    <Option value="WB:Murshidabad">
                                       <!--12180-->Murshidabad
                                    </Option>
                                    <Option value="WB:Siliguri">
                                       <!--12190-->Siliguri
                                    </Option>
                                    <Option value="WB:Other">
                                       <!--12200-->Other
                                    </Option>
                                 </Select>
                                 <span class="opt" id="optCT">City:</span>
                              </div>
                           </div>
                           <div class="formRow">
                              <div class="formElement j-select">
                                 <Select style="z-index: 10; opacity: 0; filter:alpha(opacity=0);" id="ProgramOfInterest2" Name="preferredstream">
                                    <Option value="--- Select One ---" Selected="True">--- Select One ---</Option>
                                    <Option value="JEE Advanced">
                                       <!--100-->JEE Advanced
                                    </Option>
                                    <Option value="JEE Mains">
                                       <!--110-->JEE Mains
                                    </Option>
                                    <Option value="NEET">
                                       <!--120-->NEET
                                    </Option>
                                    <Option value="AIIMS">
                                       <!--130-->AIIMS
                                    </Option>
                                    <Option value="Medical - Bachelors">
                                       <!--140-->Medical - Bachelors
                                    </Option>
                                    <Option value="Business - Bachelors">
                                       <!--150-->Management - Bachelors
                                    </Option>
                                    <Option value="Engineering - Bachelors">
                                       <!--160-->Engineering - Bachelors
                                    </Option>
                                    <Option value="Study Abroad">
                                       <!--170-->Study Abroad
                                    </Option>
									<Option value="Arts">
                                       <!--180-->Arts
                                    </Option>
									<Option value="Science">
                                       <!--190-->Science
                                    </Option>
									<Option value="Commerce">
                                       <!--200-->Commerce
                                    </Option>
									<Option value="Vocational">
                                       <!--210-->Vocational
                                    </Option>
                                    <Option value="Others">
                                       <!--220-->Others
                                    </Option>
                                 </Select>
                                 <span class="opt" id="optProgramOfInterest2">Preferred Course</span>
                              </div>
                           </div>
                           <div class="submitButton">
                              <input type="image" class= "submitButtonInput" name="submit" src="images/go.png" alt="Submit Form"/>
                           </div>
                        </form>						
                     </div>
                  </div>
               </div>
			   <div class="footertagline">Don't want to miss out on Board updates? Fill in and register to receive exclusive and reliable board details such as dates, time-table, results, exam pattern, sample papers and much more!</div>
            </div>
         </div>
      </div>
      </div>
      </div>
   </body>
</html>

