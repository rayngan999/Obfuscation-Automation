<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="description" content="">
	<title>ShareThis</title>
	<script type="text/javascript">
		var glo_initFrag=document.location.hash;
	</script>
	<!-- <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" media="screen">
	<link href="css/styles.css" rel="stylesheet" media="screen"> -->
</head>
<body>
<div id="borderContainer" class="st4xM">
	<div id="outercontainer" class="qsbMpad">
		<div id="loadingPage" style='display:none;'>
			<div class="loading_box" id="loading_box">&nbsp;</div>
			<div class="clearFloats"></div>
		</div>	
		<div class="errorMessage" id="errorMsg"></div>
		<div class="errorBottom" id="errorBottom"></div>
		<div class="qsbMhead">
			<span class="userName">
				<a id="btnShareAgain" class="backToDefault" href="javascript:void(0);"></a>
				<a id="btnClose" class="backToDefault" href="javascript:void(0);"></a>
				<a id="btnBack" class="backToDefault" href="javascript:void(0);"></a>
			</span>
			<em class="popular" id="popular">Header</em>
			<div class="clearFloats"></div>
		</div>
		<div id="main">
			<div id="mainPage" style='display:none;'>
				<div class="qsbMselect qsbMselectNoBorder">
					<div id="chicklet_search" class="findAservice findAserviceAlt">
						<i class="fa fa-search"></i>
						<input class="initialTxt commentTxt" type="text" placeholder="Search for services..." value="Search for services..." id="chicklet_search_field"/>
					</div>
					<div id='all_chicklets' class="qsbMselectTop socSvcs">
						<ul id="top_chicklets"></ul>
					</div>
					<div class="clearFloats"></div>
				</div>
			</div>
			<div id="emailPage" style='display:none;'>
				<div class="qsbMselect qsbMselectNoBorder">
					<div id="email_main" class="qsbMpad5 flL">
						<a href="javascript:void(0);" data-value="gmail" class="extEmail gmail" title="GMail">&nbsp;</a>
						<a href="javascript:void(0);" data-value="yahoo" class="extEmail yahoo" title="Yahoo!">&nbsp;</a>
						<a href="javascript:void(0);" data-value="mailto" class="extEmail mailto" title="Email">&nbsp;</a>
						<a href="javascript:void(0);" data-value="outlook" class="extEmail outlook" title="Outlook">&nbsp;</a>
					</div>
					<div class="clearFloats"></div>
				</div>
			</div>
			<div id="donePage" style='display:none;'>
				<div class="qsbMselect qsbMselectNoBorder altBGcta">
					<div class="qsbMpad5">
						<img id="imgDoneScreenMonitor" src="" alt="Share from Anywhere">
						<!-- <div id="imgDoneScreenMonitorText">Want to share from Anywhere?</div> -->
					</div>
					<div class="clearFloats"></div>
				</div>
			</div>
			<div id="posterPage" style='display:none;'>
				<div id="poster_main" class="qsbMselect qsbMselectNoBorder">
					<div id="comment_box" class="qsbMselectTop">
						<div id="poster_message">Message:</div>
						<textarea class="initialTxt commentTxt" id="poster_textArea" name="poster_textArea" cols="10" rows="3"></textarea>
					</div>
					<div id="poster_input_div">
						<div id="poster_message2">Blog URL:</div>
						<div class="poster_inputBoxDiv"><input id="poster_inputBox" type="text" autocomplete="off" /></div>
					</div>
					<div class="clear"></div>
					<div id="poster_message_counter"><span id="counter">117</span> Characters Left</div>

					<div class="socVertSp"></div>
					<button id="posterCancel" class="qsbMclose cancelBtn btnR" type="submit" onclick="poster.cancel()">Cancel</button>
					<button id="posterSubmit" class="completeShare2 sendBtn btnR" type="submit" onclick="poster.post()">Submit</button>		
					<div class="socVertSp"></div>
					<div class="clearFloats"></div>
				</div>
				<div class="clearFloats"></div>
			</div>
			<div class="clearFloats"></div>
		</div>
		<div class="st4xMfoot"><div id="footer" class="qsbMpad">
			<div class="footBgColor">
				<a href="javascript:void(0);"><button id="btnBookmark" class="stBtnChrome" type="submit">Share Again &raquo;</button></a>
			</div>
			<div class="footBotRow">
				<div class="flL"><span id='powered_text'>Powered&nbsp;by&nbsp;&nbsp;</span><a class="st-logo-foot flR" target="_blank" href="http://www.sharethis.com/" title="ShareThis">ShareThis</a></div>
				<div class="flR">
					<span id='doNotTrack'><a id="doNotTrack_text" href="http://www.sharethis.com/privacy" target="_blank">Opt out</a></span>
				</div>
				<div class="clearFloats"></div>
			</div>
			<div class="clearFloats"></div>
		</div></div>
		<div class="clearFloats"></div>
	</div>
</div>
<div id="segmentDiv" style="display:none;"></div>	

<!-- end of body add js here -->
<script src="https://ws.sharethis.com/secure/js/st.a9c2f47cfbd1f141fb724cef861110d7.js" type="text/javascript"></script>

<script type="text/javascript">
	//array of language supported by application
	var langArray=new Array("es","fr","de","it");
	//default langauge
	//var lang='en';
	
	var navigatorLanguage = (navigator.language) ? navigator.language: navigator.browserLanguage;
	
	var languageVar = navigatorLanguage.substr(0,2).toLowerCase();
	
	var subLanguageVar = navigatorLanguage.substr(3,2).toLowerCase();

	if(languageVar!='en')
	{
		var jsFile = null;
		//check for language
		switch (languageVar) {
		case "zh":
			jsFile="https://ws.sharethis.com/secure/js/local/cn/message.js";
			if ("tw" == subLanguageVar) {
				jsFile="https://ws.sharethis.com/secure/js/local/tw/message.js";
			}
			break;
		case "es":
			jsFile="https://ws.sharethis.com/secure/js/local/es/message.e5cdbb7671ab474b46221772dfb45ce3.js";
			break;
		case "fr":
			jsFile="https://ws.sharethis.com/secure/js/local/fr/message.aa62a365cfe8afe4816e26a3e24a6f15.js";
			break;					
		case "de":
			jsFile="https://ws.sharethis.com/secure/js/local/de/message.73f25a1bc8ca75a47317635afd4124f4.js";
			break;
		case "it":
			jsFile="https://ws.sharethis.com/secure/js/local/it/message.3b41efd9228f109db72042a16b4b648c.js";
			break;
		case "ja":
			jsFile="https://ws.sharethis.com/secure/js/local/jp/message.js";
			break;	
		case "nl":
			jsFile="https://ws.sharethis.com/secure/js/local/nl/message.js";
			break;	
		case "pt":
			jsFile="https://ws.sharethis.com/secure/js/local/pt/message.js";
			break;
		case "ru":
			jsFile="https://ws.sharethis.com/secure/js/local/ru/message.js";
			break;
		case "tr":
			jsFile="https://ws.sharethis.com/secure/js/local/tr/message.js";
			break;	
		case "ua":
			jsFile="https://ws.sharethis.com/secure/js/local/ua/message.js";
			break;	
		case "vn":
			jsFile="https://ws.sharethis.com/secure/js/local/vn/message.js";
			break;	
		default: 
		}
		//message file to include
		if (jsFile != null) {
			document.write('<script type="text/javascript" src="'+ jsFile +'"><\/script>');
		}
	}
</script>

</body>
</html>
