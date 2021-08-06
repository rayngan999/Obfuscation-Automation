ï»¿ï»¿ï»¿ï»¿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<script type="text/javascript">top.document.title="ì¸êµ­ì¸ ê³ ì© ê´ë¦¬ìì¤í";</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
































<title>ì¸êµ­ì¸ ê³ ì© ê´ë¦¬ìì¤í</title>
<link rel="stylesheet" type="text/css" href="/comm/css/kr/newcss/common.css" />
<link rel="stylesheet" type="text/css" href="/comm/css/kr/newcss/layout.css" />
<link rel="stylesheet" type="text/css" href="/comm/css/kr/newcss/main.css" />
<script type="text/javascript" charset="utf-8" src="/comm/js/jquery.jui.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/comm/js/kr/main_new.js"></script>
<script type="text/javascript" charset="utf-8" src="/comm/js/kr/menu_new.js"></script>
<script type="text/javascript" src="/comm/js/string.js"></script>
<script type="text/javascript" src="/comm/js/message.js"></script>
<script type="text/javascript" src="/comm/js/common.js"></script>
<script type="text/javascript" src="/comm/js/makePCookie.js"></script>
<script type="text/javascript" src="/comm/js/kr/common.js"></script>
<script type="text/javascript" src="/comm/js/siteoverlay.js"></script> <!-- ì¬ì´í¸ì¤ë²ë ì´ ìì­ë¶ì ì¶ê° 20170109 -->

<!-- AnySign4PC ì¸ì¦ì êµì²´ -->
<!--
************************************************************************************
* @source      : cert_request.jsp
* @description : ì ìì¸ì¦ìì²­
************************************************************************************
* DATE         AUTHOR    DESCRIPTION
*==========================================================================
* 2008-12-29  ê¶ìì£¼       ìì±
* 2013-03-15  ë°ìë       ìí¬ë· íµí©ì¸ì¦
* 2019-04-03  ìµë¯¼ì       AnySign4PCì¸ì¦ì êµì²´
************************************************************************************
-->





<script lang = "javascript">
var srvcert = '';
srvcert += '-----BEGIN CERTIFICATE-----\n';
srvcert += 'MIIDqTCCApGgAwIBAgICC9gwDQYJKoZIhvcNAQEFBQAwgZIxCzAJBgNVBAYTAktS\n';
srvcert += 'MR4wHAYDVQQKExVTb2Z0Zm9ydW0gQ29ycG9yYXRpb24xHjAcBgNVBAsTFVNlY3Vy\n';
srvcert += 'aXR5IFJORCBEaXZpc2lvbjEcMBoGA1UEAxMTU29mdGZvcnVtIFB1YmxpYyBDQTEl\n';
srvcert += 'MCMGCSqGSIb3DQEJARYWY2FtYXN0ZXJAc29mdGZvcnVtLmNvbTAeFw0xNjA2MTcw\n';
srvcert += 'MzU5NDJaFw0yMTA2MTYwMzU5NDJaMFUxCzAJBgNVBAYTAktSMQswCQYDVQQKDAJl\n';
srvcert += 'aTELMAkGA1UECwwCZWkxCzAJBgNVBAMMAmVpMR8wHQYJKoZIhvcNAQkBFhBhZG1p\n';
srvcert += 'bkBrZWlzLmdvLmtyMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCya6a0X6Df\n';
srvcert += '/qR4AZd88guJarXLRMs3SH2CaS8OPDyWrNwVDvD4xxshLhl0woZhOYcAzComg7g4\n';
srvcert += 'nBaFybYby5zZzhTHet4s0bScUW1fDhuRr2WNzGKmo2g9KM1l2tGajpA498HblSn8\n';
srvcert += 'LHjgLc5VzYk0SIMC0iEY8wg0KGdN9I79IQIDAQABo4HIMIHFMB8GA1UdIwQYMBaA\n';
srvcert += 'FC5JqyeK6Mivl3U33ot0uyQODSdfMB0GA1UdDgQWBBRo58IYrBUabJ+U9B91KD4e\n';
srvcert += 'yPg+OTALBgNVHQ8EBAMCBLAwDAYDVR0TAQH/BAIwADBoBgNVHR8EYTBfMF2gW6BZ\n';
srvcert += 'hldsZGFwOi8vbGRhcC5zb2Z0Zm9ydW0uY28ua3I6Mzg5L2NuPXNlLG89c29mdGZv\n';
srvcert += 'cnVtLGM9a3I/Y2VydGlmaWNhdGVSZXZvY2F0aW9ubGlzdDtiaW5hcnkwDQYJKoZI\n';
srvcert += 'hvcNAQEFBQADggEBABvnKF6PyA7tUHRWazBPxXehxpz0AVyoSVyCAHwVxNVBxJbU\n';
srvcert += 'DU7taNkfsor4ycPxXmjtmzeqQOywDr/NitZByQhdUWZMRSUiktfoOYOKeCVb59V9\n';
srvcert += '1AfgKKB7LeGHAx7tbntH7pCnp1KdG9y0U+Ia1cVvtgSzMbIXukiRB/lmIGexFKF8\n';
srvcert += 'cYvhuE52e6qvR11ytD+POS5Qnun2VBuF4+cPNeEvJGJOMGLCp5GKr68XN86lVr4Z\n';
srvcert += 'rQnaowmU0st0OLf0vI5Mim5sCR8kFJtQ5uy9mvR+DeCLO8l4u80WbF4nhI4zwx9G\n';
srvcert += 'o4vcnP+mPqXpvOFPHtIY7BM6zZCWs5ZFA7Thht0=\n';
srvcert += '-----END CERTIFICATE-----\n';
srvcert += '';


</script>
<script type="text/javascript" src="/AnySign4PC/AnySign4PC/ext/anySignjQuery-1.11.1.js"></script>

<!-- Anysign -->
<script type="text/javascript">
	document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/anySign4PCInterface.js" + "?version=" + new Date().getTime() + "\"></scr"+"ipt>");
</script>

<script type="text/javascript">

	function fncCert(){
		var form = document.signForm;
	 	var aOption = 0; // ìµìê°, 0: form ìì ìë ¥ ë°ì, 8: ì£¼ë¯¼ë²í¸ ìë ¥ ë°ì§ ìì
	 	var aPlain = "ì´ ë´ì©ì´ ì ììëªë©ëë¤.";  // ì ììëª ìë¬¸
	 	var aIdn = form.userBirth.value + form.userIdn.value;  // ìë ¥ë°ì ì£¼ë¯¼ë²í¸
	 	var aCert = srvcert; // ìë²ì¸ì¦ì ê° : ìê¸° 1ë² í¨ì í¸ì¶ì s ë³ìë¡ ê°ì´ ì ì¥ë¨
		if(aIdn == "")    // ìë ¥í ì£¼ë¯¼ë²í¸ê° ìì ê²½ì°
			aOption = 8;  // ì£¼ë¯¼ë²í¸ë¥¼ ìë ¥ë°ì§ ìë ìµìì¸ 8ë¡ ê° ë³ê²½

		/* 4. SignMsg ë° VidMsg ìì± í¨ì í¸ì¶ */
		Sign_with_vid_web (aOption, aPlain, aIdn, aCert, Sign_Callback);
// 		form.submit();
	}

	/* 5. SignMsg ìì± Callback í¨ì í¸ì¶ */
	function Sign_Callback(aResult) {
		// aResult : SignMsg ê°
		document.getElementById("signedMsg").value = aResult;
		send_vid_info(Vid_Callback);
	}

	/* 6. VidMsg ìì± Callback í¨ì í¸ì¶ */
	function Vid_Callback(aResultVid) {
		// aResultVid : VidMsg ê°
		document.getElementById("vidMsg").value = aResultVid;
//  	}

//  	function form_Submit( ) {
		document.getElementById("signForm").submit();
	}
</script>

<form name="signForm" id="signForm" method="post" action="/eo/SignCertR.eo">
	<input type="hidden" name="signUrl" value="https://job.ei.go.kr/et/log" /><!-- ê³ ì©ë³´íìì¤í ì¸ì¦ìë² URL -->
	<input type="hidden" name="returnUrl" value="https://www.eps.go.kr:443" /><!-- ìë² URL -->
	<input type="hidden" name="returnSubUrl" value="/eo/UserLoginR.eo" /><!-- í¸ì¶ë  URL -->
	<input type="hidden" name="userJuminNoYn" value="N"/>
	<input type="hidden" id="natNm" name="natNm" />
	<input type="hidden" name="recvBplcNo" />
	<input type="hidden" name="resBusirNo" />
	<input type="hidden" name="orgCd" />
	<input type="hidden" name="callBackFunc" value="" />

	<input type="hidden" size="10" id="userBirth" name="userBirth">
	<input type="hidden" size="10" id="userIdn" name="userIdn">
	<input type="hidden" id="signedMsg" name="signedMsg">
	<input type="hidden" id="vidMsg" name="vidMsg">
	<input type="hidden" id="certYn" name="certYn" value="N">
</form>





<script type="text/javascript">
n_so_pid(1); // ì¬ì´í¸ ì¤ë¸ë ì´ ìì­ë¶ì ì¶ê° 20170109

$(document).ready(function(){
  
  
  
});

//ê¸ì í¬ê¸° ë³ê²½
function setFontSize(){
  var sizeP = document.getElementById("sizeP");
  var sizeR = document.getElementById("sizeR");
  var sizeM = document.getElementById("sizeM");
  var bodyObj = document.getElementsByTagName('body')[0];
  var maxSize = 12;

  sizeP.onclick=function(){
    if(maxSize == 20){
      alert('íë ê°ë¥í ê¸ì ìµë í¬ê¸°ë 20pxìëë¤. ë í° íëë¥¼ ìíì¤ ê²½ì° ë¸ë¼ì°ì ì íë/ì¶ì ê¸°ë¥ì ì¬ì© ë°ëëë¤. ì¬ì©í¤ : ctrl +/-');
      return;
    }
    maxSize++;
    bodyObj.style.fontSize = maxSize+"px";
  }

  sizeR.onclick=function(){
    maxSize = 12;
    bodyObj.style.fontSize = maxSize+"px";
  }

  sizeM.onclick=function(){
    if(maxSize == 9){
      alert('ì¶ì ê°ë¥í ê¸ì ìµì í¬ê¸°ë 9pxìëë¤. ë í° íëë¥¼ ìíì¤ ê²½ì° ë¸ë¼ì°ì ì íë/ì¶ì ê¸°ë¥ì ì¬ì© ë°ëëë¤. ì¬ì©í¤ : ctrl +/-');
      return;
    }
    maxSize--;
    bodyObj.style.fontSize = maxSize+"px";
  }
}
if(window.addEventListener){
  window.addEventListener("load", setFontSize, false);
}else if(window.attachEvent){
  window.attachEvent("onload", setFontSize);
}

function fncBookMark() {
  var title = document.title;
  var url = window.location.href;
  //íì´ì´í­ì¤~!
  if (window.sidebar) {
    window.sidebar.addPanel(title, url,"");
  }
  //ìµì¤íë¡ì´
  else if( window.external ) {
    window.external.AddFavorite( url, title);
  }
}

function openPopup(){
  var noticeCookie=getCookie("CookieName");  // ì¿ í¤ë¤ì ì§ì 
  if (noticeCookie != "no")
    cfOpen("280", "400", "3", "/kr/popup2.jsp", "pop", "status=0, menubar=0, toolbar=0, scrollbars=0");
}

function openPopup2(){
  var noticeCookie=getCookie("CookieName");  // ì¿ í¤ë¤ì ì§ì 
  if (noticeCookie != "no")
    cfOpen("780", "720", "3", "/eo/VirLginAgreeHistM.eo", "pop", "status=0, menubar=0, toolbar=0, scrollbars=0");
}

function insInfoPopup(){
  cfOpen("550", "400", "1", "/eo/InsInfoPopupR.eo", "pop", "status=0, menubar=0, toolbar=0, scrollbars=0");
}

function covid(){
// 	var covidCookie=getCookie("covid1");
// 	if (covidCookie != "no"){
// 		cfOpen("820", "700", "3", "/kr/covid1.jsp", "covid1", "status=0, menubar=0, toolbar=0, scrollbars=1");
// 	}

// 	var covidCookie=getCookie("covid2");
// 	if (covidCookie != "no"){
// 		cfOpen("656", "700", "3", "/kr/covid2.jsp", "covid2", "status=0, menubar=0, toolbar=0, scrollbars=1");
// 	}

// 	var covidCookie=getCookie("covid3");
// 	if (covidCookie != "no"){
// 		cfOpen("600", "572", "3", "/kr/covid3.jsp", "covid3", "status=0, menubar=0, toolbar=0, scrollbars=0");
// 	}

// 	var covidCookie=getCookie("covid4");
// 	if (covidCookie != "no"){
// 		cfOpen("420", "522", "3", "/kr/covid4.jsp", "covid4", "status=0, menubar=0, toolbar=0, scrollbars=0");
// 	}

	var covidCookie=getCookie("covid0323");
	if (covidCookie != "no"){
		cfOpen("607", "883", "3", "/kr/covid0323.jsp", "covid0323", "status=0, menubar=0, toolbar=0, scrollbars=0");
	}

	var covidCookie=getCookie("covid030201");
	if (covidCookie != "no"){
		cfOpen("597", "679", "3", "/kr/covid030201.jsp", "covid030201", "status=0, menubar=0, toolbar=0, scrollbars=0");
	}

	var covidCookie=getCookie("covid0302");
	if (covidCookie != "no"){
		cfOpen("547", "828", "3", "/kr/covid0302.jsp", "covid0302", "status=0, menubar=0, toolbar=0, scrollbars=0");
	}

	var covidCookie=getCookie("covid");
	if (covidCookie != "no"){
		cfOpen("500", "780", "3", "/kr/covid.jsp", "covid", "status=0, menubar=0, toolbar=0, scrollbars=0");
	}
}

//ê³ ì©ë³´íë²_íì 2020.11.26
function openPop(){
	var covidCookie=getCookie("pop1125");
	if (covidCookie != "no"){
		cfOpen("337", "426", "3", "/kr/pop1125.jsp", "pop1125", "status=0, menubar=0, toolbar=0, scrollbars=0");
	}

	var covidCookie=getCookie("pop0826");
	if (covidCookie != "no"){
		cfOpen("680", "367", "3", "/kr/pop0826.jsp", "pop0826", "status=0, menubar=0, toolbar=0, scrollbars=0");
	}

// 	var popCookie=getCookie("pop0702");
// 	if (popCookie != "no"){
// 		cfOpen("680", "328", "3", "/kr/pop0702.jsp", "pop0702", "status=0, menubar=0, toolbar=0, scrollbars=0");
// 	}
}

//ê³ ì©ì¼í° ì°¾ê¸°
function fncSearchCenter() {
  if(cfValidate(document.getElementById('searchCenterBox'))) {
    var frm = document.mainForm;
    frm.action = "/eo/OrgInfoLst.eo";
    frm.target = "_self";
    frm.submit();
  }
}

function fncSearchCenter2() {
  var frm = document.mainForm;
  frm.action = "/eo/CertifyInfo.eo";
  frm.target = "_self";
  frm.submit();
}

//ë¡ê·¸ì¸
function fncLogin() {
  var frm = document.mainForm;
  if('' == frm.lginId.value || null == frm.lginId.value) {
    alert('ìì´ëì(ë) íì ìë ¥ í­ëª©ìëë¤.');
    frm.lginId.focus();
    return false;
  } else if('' == frm.pwdNo.value || null == frm.pwdNo.value) {
    alert('ë¹ë°ë²í¸ì(ë) íì ìë ¥ í­ëª©ìëë¤.');
    frm.pwdNo.focus();
    return false;
  }

  if(cfValidate(document.getElementById('loginCheck'))) {
    frm.action = "/eo/UserLoginR.eo";
    frm.target = "_self";
    frm.submit();
  }
}

//ë¡ê·¸ìì
function fncLogout() {
  if(confirm('ë¡ê·¸ìì íìê² ìµëê¹?')) {
    location.href = '/eo/UserLogoutU.eo';
  }
}

//ë§ì´íì´ì§ë¡ ì´ë
function fncMoveMyPage() {
  var frm = document.mainForm;
  frm.action = '/eo/UserPwdCheck.eo?numberCheck=2';
  frm.target = "_self";
  frm.submit();
}

//ì ìë²í¸/ì¬ìì¥ë²í¸ë¥¼ ë³ê²½íì¬ ì¸ìì ì ì¥
function fncChangeRecvBplcNo() {
  var frm = document.mainForm;

  frm.action = "/eo/UserChangeNo.eo";
  frm.target = "_self";
  frm.submit();
}

//ìì´ë/ë¹ë°ë²í¸ ì°¾ê¸° íì´ì§ë¡ ì´ë
function fncMoveFindIdPwdPage() {
  location.href = '/eo/IdPasswordSrchRM.eo';
}

//íìê°ì íì´ì§ë¡ ì´ë
function fncMoveJoinMemberPage() {
  location.href = '/eo/UserAuthYnRM.eo';
}

//íìíí´ íì´ì§ë¡ ì´ë
function fncMoveDropMemberPage() {
  
      alert("ë¡ê·¸ì¸ í íìíí´ í ì ììµëë¤. ë¡ê·¸ì¸í´ ì£¼ì­ìì¤.");
      location.href = '/eo/UserLoginM.eo';
  
}

//ë¡ê·¸ì¸ íì´ì§ë¡ ì´ë
function fncMoveLoginPage() {
  location.href = '/eo/UserLoginM.eo';
}

//íë©´ì´ë
function fncGoURL(url) {
    location.href = url;
}

//ìì´ë ì ì¥
function fncSaveId(form) {
    var expdate = new Date();
    // ê¸°ë³¸ì ì¼ë¡ 90ì¼ëì ê¸°ìµíê² í¨. ì¼ìë¥¼ ì¡°ì íë ¤ë©´ *  90ìì ì«ìë¥¼ ì¡°ì íë©´ ë¨
    if (form.checkSaveId.checked){
        expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 90); // 90ì¼
    }else{
        expdate.setTime(expdate.getTime() - 1); // ì¿ í¤ ì­ì ì¡°ê±´
    }
    fncSetCookie("epsLginId", form.lginId.value, expdate);
}

function fncSetCookie(name, value, expires){
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expires.toGMTString();
}

function fncGetCookie(Name) {
    var cook = document.cookie + ";";
    var idx = cook.indexOf(Name, 0);
    var val = "";

    if(idx != -1){
        cook = cook.substring(idx, cook.length);
        begin = cook.indexOf("=", 0) + 1;
        end = cook.indexOf(";", begin);
        val = unescape( cook.substring(begin, end) );
    }
    return val;
}

function fncGetId(form) {
    //ì¿ í¤ìì  loginID ê°ì ê°ì ¸ì¨ë¤.
    var id = fncGetCookie("epsLginId");
    //ê°ì ¸ì¨ ì¿ í¤ê°ì´ ìì¼ë©´
    if(id != ""){
        form.lginId.value = id;
        form.checkSaveId.checked = true;
    }
}

//ìë´ì¬ ë¡ê·¸ì¸ ëì íìíì
function fncHelpLoginYn(){
  var cslLoginYn = "Y";
  cfOpen("500", "310", 2, "/kr/helpLoginYnPop.jsp", "HelpLoginYnPop", "scrollbars=no, toobar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no", "");
}

// ì¬ìì¥ë³ ìì  ì¸ì ë¦¬ì¤í¸ toggle
function toggleGofiCntLst() {

  ResultMenu.Clear();
  ResultMenu.ExeFunc = "fncChangeRecvBplcNoCallBack";

  ResultMenu.PopUp();
}
// í´ë¦­í ì¬ìì¥ì¼ë¡ ì¸ì ë³ê²½ í ì¬ìì¥ë³ ìì  ë¦¬ì¤í íì´ì§ë¡ ì´ë íë í¨ì í¸ì¶
function fncChangeRecvBplcNoCallBack(bplcInfo){

  var frm = document.mainForm;

}
//ì ì²´ ì¬ìì¥ ìì ì¸ì 1ëª ì´ìì¸ ê²½ì° í´ë¦­íì ë íì´ì§ ì´ë
function fncMoveGofiSuitrListRPage(){

  var frm = document.mainForm;

  frm.action = "/eo/GofiSuitrListR.eo";
  frm.target = "_self";
  frm.submit();
}

// ì¬ìì¥ ì¡°í íì íì
function fncBplcSrch(lginId){
  cfOpen(700, 550, 3, "/eo/BplcSrchPopR.eo", "BplcSrchPop", "", "", "");
}

function mainPop(popId, popNm, popTitl, width ,heigth){
  //ì´ë¯¸ì§ ì¬ì´ì¦ + ì¢ì¸¡ íë¨ ì¤í¬ë¡¤ ì¬ì´ì¦ ì¶ê°
  width =  parseInt(width) +25;
  heigth = parseInt(heigth) + 25;
  window.open('/eo/mainPopZoneRM.eo?sElementid='+popId+'&sFimgileNm='+popNm+'&titleNm='+popTitl,'ìì°½ì´ë¦¼', 'width='+ width +',height='+ heigth +',scrollbars=yes', 'true');

}

function searchMap(h1,h2){
  var frm = document.mainForm;
  //sOrgSeCd  ê¸°ê´ ì½ë
  //sZipHanAd ì§ì­ ì´ë¦
  frm.action = "/eo/OrgInfoLst.eo?sOrgSeCd=" + h1 + "&sZipHanAd=" + h2 + "&sOrgSe=all";
  frm.target = "_self";
  frm.submit();
}

//ì´ë¶ë¶ë¶í°  ìì í  íì ììµëë¤.
function getCookie(name) {
  var Found = false
  var start, end
  var i = 0
  while(i <= document.cookie.length) {
    start = i
    end = start + name.length

    if(document.cookie.substring(start, end) == name) {
      Found = true;
      break;
    }
    i++
  }

  if(Found == true) {
    start = end + 1;
    end = document.cookie.indexOf(";", start);
    if(end < start) end = document.cookie.length;
    return document.cookie.substring(start, end);
  }
  return "";
}

//WAë§í¬
function fncWAPop() {
  var w = 555;
  var h = 810;
  var leftPosition = (screen.width - w) / 2;
  var topPosition = (screen.height - h) / 2;
  var win = window.open("/kr/wamark_2021.html", "new", "width=" + w + ", height=" + h + ", left=" + leftPosition + ", top=" + topPosition + ", resizable=no, scrollbars=no;");
  win.focus();
}

//ë©ì¸ì¼ë¡ì´ë
function fncMoveIndexPage() {
  var frm = document.mainForm;
  frm.natNm.value = 'kr';
  frm.action = "/eo/main.eo";
  frm.target = "_self";
  frm.submit();
}


// ë©ìì§ë¥¼ ë³´ì¬ì¤ë¤.


function getCookie(name) {
  var Found = false;
  var start, end;
  var i = 0;

  while(i <= document.cookie.length) {
    start = i;
    end = start + name.length;

    if(document.cookie.substring(start, end) == name) {
      Found = true;
      break;
    }

    i++;
  }

  if(Found == true){
    start = end + 1;
    end = document.cookie.indexOf(";", start);
    if(end < start)
    end = document.cookie.length;
    return document.cookie.substring(start, end);
  }
  return "";
}

//ë©ì¸íë©´ í­
function fnMainTap(val) {
  if(val == "1"){
    $("#biz").addClass("on");
    $("#e9").removeClass("on");
    $("#h2").removeClass("on");
  }else if(val == "2"){
    $("#biz").removeClass("on");
    $("#e9").addClass("on");
    $("#h2").removeClass("on");
  }else{
    $("#biz").removeClass("on");
    $("#e9").removeClass("on");
    $("#h2").addClass("on");
  };
};
//Link full
function fnLink(val){
  /* for(var i = 1; i < 10; i++){
    if(val == i){
      $("#link"+i).addClass("full");
      document.getElementById('link'+i).style.display = 'block';
    }else if(val == "0"){
      document.getElementById('link'+i).style.display = 'none';
    }
  };
 */
}


//ë¤êµ­ì´íì´ì§ì´ë
function fncMoveServiceMain(val){
  var natNm = val;

  document.location.href = "/eo/main.eo?natNm="+val+"&natClass="+val+"&mainTap=2";    //ë¤êµ­ì´

};
//ëª¨êµ­ì´ ì¬ì´í¸ ìì°½ì´ê¸°
function fnNatSite(){
  var val = $("select[name=natSiteVal]").val();
  window.open('/eo/'+val+'Main.eo?natNm='+val,'ìì°½','');
}

//ëª¨êµ­ì´ ì¹í° íì´ì§ ì´ë
function fncMovePage(pageGb){
  var natNm   =  "kr";

  if(natNm == "" || natNm == null){
    natNm = "kr";
  }
  document.location.href = "/eo/BusiPsttOutInfoM.eo?natNm="+natNm+"&pageGb="+pageGb;
}

function fnIdCertificateChange(val){
  if(val == "1"){
    document.getElementById('loginCheck').style.display = 'block';
    document.getElementById('certiLgin').style.display = 'none';
  }else{
    document.getElementById('loginCheck').style.display = 'none';
    document.getElementById('certiLgin').style.display = 'block';
  };
}
function fncCertLogin() {
	fncCert();
//    var frm = document.mainForm;
//    frm.action = "/eo/UserAuthYnR.eo";
//    frm.target = "signFrame";
//    frm.submit();
}


/* 2017.07.10 ì¹ì ê·¼ì± ì¡°ì¹*/
// jQuery object ê° ìë¤ë©´ headì script ìì±
if( typeof jQuery == 'undefined'){
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "/comm/js/jquery-1.4.2.js";
  document.getElementsByTagName('head')[0].appendChild(script);
}

// íë©´ onload
$(function(){

  // ìë¨ ë©ë´ì li íê·¸ë¤ì ì í
  var topMenuListArr = $("div#top > div#gnb > ul > li");

  // array ë¥¼ ìííë¤.
  for(var i = 0; i < topMenuListArr.length; i++){

    // ëª©ì ì´ ë  file ëª
    var trgetImgFileName = "";
    // hover event ë¥¼ ì ì©í  li ë°ì íì img íê·¸ ì í
    var trgetImgTag = $(topMenuListArr[i]).find("img");

    // í´ëì¤ ëªì¼ë¡ ë¶ê¸°
    if($(topMenuListArr[i]).hasClass('first')){// ì¬ìì£¼ìë¹ì¤
      trgetImgFileName = "menu01.gif";
    }else if($(topMenuListArr[i]).hasClass('second')){// ì¼ë°ì¸êµ­ì¸ìë¹ì¤
      trgetImgFileName = "menu02.gif";
    }else if($(topMenuListArr[i]).hasClass('third')){// í¹ë¡ì¸êµ­ì¸ìë¹ì¤
      trgetImgFileName = "menu03.gif";
    }else if($(topMenuListArr[i]).hasClass('fourth')){// ê³ ì©íê°ì ì ë³´
      trgetImgFileName = "menu04.gif";
    }else if($(topMenuListArr[i]).hasClass('fifth')){// ìë£ì¤
      trgetImgFileName = "menu05.gif";
    }else if($(topMenuListArr[i]).hasClass('sixth')){// ê³ ê°ì¼í°
      trgetImgFileName = "menu06.gif";
    }

    // í´ë¹ img íê·¸ì hover event ì ì©
    setHoverEventToTopMenu(trgetImgTag, trgetImgFileName);
  }
});
/*
 ëª©ì  íê·¸ì hover event ì ì©
 param1 : ì ì©í  img íê·¸
 param2 : ì ì©í  img file ëª
*/
function setHoverEventToTopMenu(obj, imgFileName){

  var imgPath = "/comm/img/kr/main_new/";

  $(obj).hover(
    function(){// hover
      $(this).attr("src", imgPath + imgFileName);
    }
    ,function(){// out
      $(this).attr("src", imgPath + "w_" + imgFileName);
    }
  );
}


</script>
</head>


    <body onload="openPop();">


<noscript>ì¤í¬ë¦½í¸ê° ì ê³µëì§ ìë íê²½ìì ì¼ë¶ ìëì´ ëì§ ììµëë¤.</noscript>
<!-- wrap -->
<div id="wrap">
  <form name="mainForm" method="post" action="/eo/main.eo" onsubmit="return false" onload="popupChk();">
  <input type="hidden" name="signUrl" value="https://job.ei.go.kr/et/log" /><!-- ê³ ì©ë³´íìì¤í ì¸ì¦ìë² URL -->
  <input type="hidden" name="returnUrl" value="https://www.eps.go.kr:443" /><!-- ìë² URL -->
  <input type="hidden" name="returnSubUrl" value="/eo/UserLoginR.eo" /><!-- í¸ì¶ë  URL -->
  <input type="hidden" name="userJuminNoYn" value="N"/>
  <input type="hidden" id="natNm" name="natNm" />
  <input type="hidden" name="recvBplcNo" />
  <input type="hidden" name="resBusirNo" />
  <input type="hidden" name="orgCd" />
  <input type="hidden" name="callBackFunc" value=""/>

  
  <a href="#container" class="btn_goContent">ë³¸ë¬¸ ë°ë¡ê°ê¸°</a>

  
  <!--skipnav-->
  <!-- <div id="skipnav">
    <ul>
      <li><a href="#contents">ë³¸ë¬¸ ë°ë¡ê°ê¸°</a></li>
      <li><a href="#company_sch">ê¸°ê´ì°¾ê¸° ë°ë¡ê°ê¸°</a></li>
      <li><a href="#quick">íµë©ë´ ë°ë¡ê°ê¸°</a></li>
    </ul>
  </div> -->
  <!--//skipnav-->

  <!-- top -->
  <div id="top">
        <h1><a  href="#main" onclick = "fncMoveIndexPage()"><img src="/comm/img/kr/main_new/h1_logo.gif" alt="EPS(Employment Permit System)" /></a></h1>

    <!--unb-->
    <div id="unb">
      <h2>ì ì©í ë§í¬</h2>
      <ul>

        <li class="first"><a href="/eo/UserAuthYnRM.eo" onclick="javascript:fncMoveJoinMemberPage();">íìê°ì (sign up)</a></li>
        <li><a href="/eo/UserLoginM.eo" onclick="javascript:fncMoveLoginPage();">ë¡ê·¸ì¸</a></li>
        <li><a href="#main" onclick = "fncMoveIndexPage()">í</a></li>
        <li><a href="/kr/sitemap.jsp">ì¬ì´í¸ë§µ</a></li>
        <li><a href="#wrap" onclick="javascript:bookmarksite('EPS', 'https://www.eps.go.kr')" rel="sidebar">ì¦ê²¨ì°¾ê¸°ì¶ê°</a></li>

      </ul>
      <button class="zoomin" type="button" id="sizeP" title="ê¸ìí¬ê¸° íë">ê¸ìí¬ê¸° íë</button>
      <button class="zoomout" type="button" id="sizeM" title="ê¸ìí¬ê¸° ì¶ì">ê¸ìí¬ê¸° ì¶ì</button>
      <button class="zoomreset" type="button" id="sizeR" title="ê¸ìí¬ê¸° ì´ê¸°í">ê¸ìí¬ê¸° ì´ê¸°í</button>
    </div>
    <!--//unb-->
    <!-- gnb -->
    <div id="gnb">
      <h2>ë©ì¸ë©ë´</h2>
      <ul>
        <li class="first">
          <a href="/kr/busi/index.jsp" class="active"><img src="/comm/img/kr/main_new/w_menu01.gif" alt="ì¬ìì£¼ìë¹ì¤" /></a>
          <ul>
            <li><a href="/eo/CappAdmsGuidR.eo">ë¯¼ìì ì²­/ìë´</a></li>
            <li><a href="/eo/BusiPsttR.eo">ì¬ìì¥íí©</a></li>
            <li><a href="/eo/BusiCappApplPrgCircR.eo">ë¯¼ìì ì²­íí©</a></li>
            
            <li><a href="/eo/SjobrLstR.eo">í¹ë¡ìêµ¬ì§ì¡°í</a></li>
            <li><a href="/eo/BusiEppPrgCircR.eo">ëììíì ì²­</a></li>
            <li><a href="/eo/BusiEmptEduSchdGuidR.eo">ì·¨ìêµì¡ìë´</a></li>
            <li><a href="/eo/GofiSuitrListR.eo">ìì /ì ê²©ìì ì </a></li>
            <li><a href="/eo/AgnyChgApplLstR.eo">ëì²´/í¬ê¸°/íë¶ê´ë¦¬</a></li>
            <li><a href="/eo/MypgResvPageR.eo">ë°©ë¬¸ìì½ì ì²­íí©</a></li>
            <li><a href="/eo/ScorAsgnMethLst.eo">ì ìì ì§íìí©</a></li>
            <li><a href="http://eps.hrdkorea.or.kr/e9/user/language/language.do?method=languageGuide" target="_blank" title="ìì°½ì´ë¦¼">ìì£¼ì°ëì¸êµ­ì´ê²ì</a></li>
            <li><a href="/eo/InsExptRocAmtR.eo">í´ì§ê¸ì°¨ì¡ì°ì ì§ì</a></li>
          </ul>
        </li>
        <li class="second">
          <a href="/kr/frnr/index.jsp"><img src="/comm/img/kr/main_new/w_menu02.gif" alt="ì¼ë°ì¸êµ­ì¸ìë¹ì¤" /></a>
          <ul>
            <li><a href="/eo/EmptEduHistR.eo?frnr=20101">ì·¨ìêµì¡ì´ë ¥ì¡°í&nbsp;</a></li>
            <li><a href="/eo/FrnwCappLstR.eo?frnr=20101">ë¯¼ìì ì²­ì§ííí©&nbsp;</a></li>
            <li><a href="/eo/BplcChgHistR.eo?frnr=20101">ì¬ìì¥ë³ëì´ë ¥ì¡°í&nbsp;</a></li>
            <li><a href="http:eps.hrdkorea.or.kr/epstopik/home/main/mainPage.do?lang=ko" target="_blank" title="ìì°½ì´ë¦¼">íêµ­ì´ë¥ë ¥ìí&nbsp;</a></li>
            <li><a href="http://eps.hrdkorea.or.kr/e9/user/jobMatching/jobRecruit.do?method=recruitList" target="_blank" title="ìì°½ì´ë¦¼">ê·êµ­ê·¼ë¡ì ì·¨ììì &nbsp;</a></li>
            <li><a href="/eo/FrnwInsExptRocAmtR.eo?frnr=20101">í´ì§ê¸ì°¨ì¡ì°ì ì§ì&nbsp;</a></li>
            <li><a href="/eo/FrnrCarrWcrtIssuR.eo?frnr=20101">ê²½ë ¥ì¦ëªìë°ê¸ì ì²­&nbsp;</a></li>

            <!-- [REQ-PD-F-0005] ë©ë´ ì¸êµ­ì¸ê·¼ë¡ìë¥¼ ìí ì ë³´ì¡°í ADD -->
	 		<li><a href="/eo/InsJoinPsttLstR.eo?frnr=20101">ë³´íê°ì ë´ì­</a></li>
		    <li><a href="/eo/WrkConPsttLstR.eo?frnr=20101">ê·¼ë¡ê³ì½ íí©</a></li>
		    
			            <li><a href="/eo/SeasWrkMain.eo?frnr=20101&mode=C">ê³ì ê·¼ë¡ì ì²­</a></li>
			
		    <li><a href="/eo/BplcChgApplR.eo?frnr=20101">ì¬ìì¥ë³ê²½ì ì²­ </a></li>
		    <li><a href="/eo/DepartureReportR.eo?frnr=20101">ì¶êµ­ìì ì ê³  </a></li>
          </ul>
        </li>
        <li class="third">
          <a href="/kr/frnr/index02.jsp"><img src="/comm/img/kr/main_new/w_menu03.gif" alt="í¹ë¡ì¸êµ­ì¸ìë¹ì¤" /></a>
          <ul>
            <li><a href="/eo/EmptEduHistR.eo?frnr=20102">ì·¨ìêµì¡ì´ë ¥ì¡°í&nbsp;</a></li>
            <li><a href="/eo/FrnwCappLstR.eo?frnr=20102">ë¯¼ìì ì²­ì§ííí©&nbsp;</a></li>
            <li><a href="/eo/BplcChgHistR.eo?frnr=20102">ì¬ìì¥ë³ëì´ë ¥ì¡°í&nbsp;</a></li>
            <li><a href="/eo/SwkBplcLstR.eo">í¹ë¡êµ¬ì¸ì¬ìì¥ì¡°í&nbsp;</a></li>
            <li><a href="/eo/SeekCondBplcLstR.eo">ìì ì¥ì¶ë ¥ìì²­&nbsp;</a></li>
            <li><a href="/eo/EmptEduH2RsltLstR.eo">ê±´ì¤ìì·¨ìì¦ëªìì¡°í&nbsp;</a></li>
            <li><a href="http://eps.hrdkorea.or.kr/h2/empProcess/empEdu.do" target="_blank" title="ìì°½ì´ë¦¼">ì·¨ìêµì¡ì ì²­&nbsp;</a></li>
            <li><a href="/eo/FrnwInsExptRocAmtR.eo?frnr=20102">í´ì§ê¸ì°¨ì¡ì°ì ì§ì&nbsp;</a></li>

            <!-- [REQ-PD-F-0005] ë©ë´ ì¸êµ­ì¸ê·¼ë¡ìë¥¼ ìí ì ë³´ì¡°í ADD -->
	 		<li><a href="/eo/InsJoinPsttLstR.eo?frnr=20102">ë³´íê°ì ë´ì­</a></li>
		    <li><a href="/eo/WrkConPsttLstR.eo?frnr=20102">ê·¼ë¡ê³ì½ íí©</a></li>
          </ul>
        </li>
        <li class="fourth">
          <a href="/eo/EmployPerSystem.eo"><img src="/comm/img/kr/main_new/w_menu04.gif" alt="ê³ ì©íê°ì ì ë³´" /></a>
          <ul>
            <li><a href="/eo/EmployPerSystem.eo?tabGb=01">ê³ ì©íê°ì &nbsp;</a></li>
            <li><a href="/eo/EmployJobProc.eo?tabGb=01">ê³ ì©ì·¨ìì ì°¨&nbsp;</a></li>
            <li><a href="/kr/plan/sam/sam01_01.jsp">ì ìì &nbsp;</a></li>
            <li><a href="/eo/BusiPsttOutInfoM.eo">ì¸êµ­ì¸ ê·¼ë¡ì ì¶êµ­ ì¤ë¹ ìë´&nbsp;</a></li>
          </ul>
        </li>
        <li class="fifth">
          <a href="/kr/bbs/index.jsp"><img src="/comm/img/kr/main_new/w_menu05.gif" alt="ìë£ì¤" /></a>
          <ul>
            <li><a href="/FormDataLst.eo">ìë¬´ë³ ìì&nbsp;</a></li>
            <li><a href="/LawDataLst.eo">ë²ë ¹ìë£ì¤&nbsp;</a></li>
            <li><a href="/VocaDicLstR.eo">ì©ì´ì¬ì &nbsp;</a></li>
            <li><a href="/PolDataLst.eo">ì ì±ìë£&nbsp;</a></li>
          </ul>
        </li>
        <li class="sixth">
          <a href="/eo/voc/CustCentLst.eo"><img src="/comm/img/kr/main_new/w_menu06.gif" alt="ê³ ê°ì¼í°" /></a>
          <ul>
            <li><a href="/eo/voc/NotiLst.eo">ê³µì§ì¬í­&nbsp;</a></li>
            <li><a href="/eo/voc/MyConsultLst.eo">ëììë´ë´ì­&nbsp;</a></li>
            <li><a href="/eo/voc/VocImpProLst.eo">ê°ì ë°ì ì&nbsp;</a></li>
            <li><a href="/eo/voc/VocQnaRecentlyLst.eo?gubun=recently">ì§ë¬¸ë°ëµë³&nbsp;</a></li>
            <li><a href="/eo/voc/VocFaqLst.eo">ìì£¼ë¬»ëì§ë¬¸&nbsp;</a></li>
            <li><a href="/eo/voc/IdPasswordSrchRM.eo">ID/PW ì°¾ê¸°&nbsp;</a></li>
            <li><a href="/eo/voc/OrgInfoLst.eo">ì ê´ê¸°ê´ ì°¾ê¸°&nbsp;</a></li>
            <!-- <li><a href="http://www.keis.or.kr/user/bbs/main/indivInfo/759/indivInfoForm.do?service=EPS" target="_blank">ê°ì¸ì ë³´ ì²ë¦¬ìêµ¬</a></li> -->

            
            
            <li><a href="/eo/voc/VocIndivInfoLstR.eo">ê°ì¸ì ë³´ ì²ë¦¬ìêµ¬</a></li>
            
			<li><a href="/eo/CovidGuide.eo">êµ¬ì§íëìëì°ì¥ ìë´</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- //gnb -->
  </div>
  <!-- //top -->

  <hr />

  <!-- container(20161013) -->
  <div id="container">
    <div class="cont01">
      <div class="mbr_wrap">
        <!-- ì¬ìì£¼ -->
        <!-- ì íë ë©¤ë²ì ì»¨íì¸  ë³´ì¬ì§ ê²½ì° class="on" ì¶ê° -->
        <div id="biz" class="mbr_type biz on">
          <h3><a href="#" onclick="fnMainTap('1')">ì¬ìì£¼</a></h3>
          <div class="intro">
            <h4>ì¬ìì£¼</h4>
            <img src="/comm/img/kr/main_new/bg_biz.gif" alt="" />
            <strong class="tit_eps"><em>ì¸êµ­ì¸ê³ ì©ê´ë¦¬ìì¤í</em>êµ­ë´ ê¸°ìì ê³ ì©ì ìí ì¬ìì£¼ìë¹ì¤ìëë¤.</strong>
            <p>ì¬ìì¥ íí© ì¡°í, ë¯¼ìì ì²­ ë° ì§í ì¡°í,<br/> ìì íí© ì¡°í ë° ì ê²©ì ì ì  ë± ìë¹ì¤ë¥¼ ì ê³µí©ëë¤.</p>
            <span class="btn_detail"><a href="/kr/busi/index.jsp">ìì¸í ë³´ê¸°</a></span>
          </div>
          <div class="list_cont">
            <div class="service" style="padding: 13px 10px 0px 31px">
              <h5>íììë¹ì¤</h5>
              <ul>
                <li><a href="/eo/BusiPsttOutR.eo">ì¶êµ­ìì ì ëª©ë¡ì¡°í</a></li>
                <li><a href="/eo/SjobrLstR.eo">í¹ë¡ìêµ¬ì§ì¡°í</a></li>
                <li><a href="/eo/InsExptRocAmtR.eo">í´ì§ê¸ì°¨ì¡ ì°ì ì§ì</a></li>
                <li><a href="/eo/BusiPsttR.eo">ì¬ìì¥íí©</a></li>
                <li><a href="http://eps.hrdkorea.or.kr/e9/user/language/language.do?method=languageGuide" target="_blank" title="ìì°½">ìì£¼ ì°ë ì¸êµ­ì´ ê²ì<span class="newpage">ìì°½</span></a></li>
                <li><a href="/eo/CappAdmsGuidR.eo">ë¯¼ìì ì²­/ìë´</a></li>
                <li><a href="http://eps.hrdkorea.or.kr/e9/user/interpret/interpret.do?method=interpretGuide" target="_blank" title="ìì°½">íµì­ìë¹ì¤ ì ì²­<span class="newpage">ìì°½</span></a></li>
                <li><a href="/eo/BusiCappApplPrgCircR.eo">ë¯¼ìì ì²­íí©</a></li>
                <li><a href="/eo/GofiSuitrListR.eo">ìì /ì ê²©ìì ì²­</a></li>
                 <li><a href="/eo/BusiEduLstR.eo">ì¬ìì£¼êµì¡</a></li>
				
              </ul>
            </div>
            <div class="system">
              <h5>ê´ë ¨ì ë ìê°</h5>
              <ul>
                <li><a href="/eo/EmployPerSystem.eo">ê³ ì©íê°ì  ìê°</a></li>
                <li><a href="/eo/EmployJobProc.eo?tabGb=01">ê³ ì©ì ì°¨ ìë´</a></li>
                <li><a href="/eo/EmployPerSystem.eo?tabGb=04">íì©ìì¢ ìê°</a></li>
                <li><a href="/eo/EmployPerSystem.eo?tabGb=02">ëìì¿¼í° ìë´</a></li>
                <li><a href="/eo/ScoreInfo.eo?tabGb=01">ì ìì  ë°°ì ê³í</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- //ì¬ìì£¼ -->

        <!-- ì¼ë°ì¸êµ­ì¸ -->
        <!-- ì íë ë©¤ë²ì ì»¨íì¸  ë³´ì¬ì§ ê²½ì° class="on" ì¶ê° -->

        <div id="e9" class="f_ca mbr_type e9">
          <h3><a href="#" onclick="fnMainTap('2')">ì¼ë°ì¸êµ­ì¸<span>E-9</span></a></h3>
          <h4>ì¼ë°ì¸êµ­ì¸</h4>
          <div class="country_cont">
            <div class="flag">
              <strong class="title">Choose country</strong>
              <ul>
                <li><a href="#tmp" class=" active" id="flag_kr" onclick="fncMoveServiceMain('kr');"><img src="/comm/img/kr/main_new/ico_kr.png" alt="íêµ­" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('bd');"><img src="/comm/img/kr/main_new/ico_bd.png" alt="ë°©ê¸ë¼ë°ì" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('ca');"><img src="/comm/img/kr/main_new/ico_ca.png" alt="ìºë³´ëì" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('cht');"><img src="/comm/img/kr/main_new/ico_cht.png" alt="ì¤êµ­(ë²ì²´)" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('chs');"><img src="/comm/img/kr/main_new/ico_chs.png" alt="ì¤êµ­(ê°ì²´)" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('in');"><img src="/comm/img/kr/main_new/ico_in.png" alt="ì¸ëë¤ìì" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('kz');"><img src="/comm/img/kr/main_new/ico_kz.png" alt="í¤ë¥´í¤ì¦ì¤í" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('mo');"><img src="/comm/img/kr/main_new/ico_mo.png" alt="ëª½ê³¨" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('my');"><img src="/comm/img/kr/main_new/ico_my.png" alt="ë¯¸ìë§" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('do');"><img src="/comm/img/kr/main_new/ico_do.png" alt="ëí°ëª¨ë¥´" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('uz');"><img src="/comm/img/kr/main_new/ico_uz.png" alt="ì°ì¦ë² í¤ì¤í" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('ph');"><img src="/comm/img/kr/main_new/ico_ph.png" alt="íë¦¬í" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('sl');"><img src="/comm/img/kr/main_new/ico_sl.png" alt="ì¤ë¦¬ëì¹´" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('th');"><img src="/comm/img/kr/main_new/ico_th.png" alt="íêµ­" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('np');"><img src="/comm/img/kr/main_new/ico_np.png" alt="ë¤í" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('pa');"><img src="/comm/img/kr/main_new/ico_pa.png" alt="íí¤ì¤í" /></a></li>
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('vi');"><img src="/comm/img/kr/main_new/ico_vi.png" alt="ë² í¸ë¨" /></a></li>
				<!-- [REQ-PD-F-0003] 2017-11-24 ë¼ì¤ì¤ì´ ì¶ê° -->
                <li><a href="#tmp" class="" onclick="fncMoveServiceMain('lo');"><img src="/comm/img/kr/main_new/ico_la.png" alt="ë¼ì¤ì¤" /></a></li>
              </ul>
            </div>
            <div class="list_cont">
              <div class="service" style="width:160px;">
                <h5>íììë¹ì¤</h5>
                <ul>
                  <li class="w100" onmouseover="fnLink('1');" onmouseout="fnLink('0');">
                    <a href="/eo/BplcChgHistR.eo?frnr=20101">ì¬ìì¥ ë³ëì´ë ¥</a>
                    <!-- tool tip -->
                    <span id="link1" class="" style="display: none;"><em>ì¬ìì¥ ë³ëì´ë ¥</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('2');" onmouseout="fnLink('0');">
                    <a href="/eo/FrnwInsExptRocAmtR.eo?frnr=20101">EPSí´ì§ê¸ëª¨ìê³ì°</a>
                    <!-- tool tip -->
                    <span id="link2" class="" style="display: none;"><em>EPSí´ì§ê¸ëª¨ìê³ì°</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('3');" onmouseout="fnLink('0');">
                    <a href="/eo/EmptEduHistR.eo?frnr=20101">ì·¨ìêµì¡ì´ë ¥</a>
                    <!-- tool tip -->
                    <span id="link3" class="" style="display: none;"><em>ì·¨ìêµì¡ì´ë ¥</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('4');" onmouseout="fnLink('0');">
                    <a href="/eo/FrnwCappLstR.eo?frnr=20101">ë¯¼ìì ì²­íí©</a>
                    <!-- tool tip -->
                    <span id="link4" class="" style="display: none;"><em>ë¯¼ìì ì²­íí©</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('15');" onmouseout="fnLink('0');">
                    <a href="/eo/BplcChgApplR.eo?frnr=20101">ì¬ìì¥ë³ê²½ì ì²­</a>
                    <!-- tool tip -->
                    <span id="link4" class="" style="display: none;"><em>ì¬ìì¥ë³ê²½ì ì²­</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('/eo/DepartureReportR.eo?frnr=20101');" onmouseout="fnLink('0');">
                    <a href="/eo/DepartureReportR.eo?frnr=20101">ì¶êµ­ìì ì ê³ </a>
                    <!-- tool tip -->
                    <span id="link4" class="" style="display: none;"><em>ì¶êµ­ìì ì ê³ </em></span>
                    <!-- //tool tip -->
                  </li>

                </ul>
              </div>
              <div class="general_service">
                <h5>ì¼ë°ìë¹ì¤</h5>
                <ul>
                  <li class="w100" onmouseover="fnLink('5');" onmouseout="fnLink('0');">
                    <a href="/eo/EmployPerSystem.eo">ê³ ì©íê°ì  ìê°</a>
                    <!-- tool tip -->
                    <span id="link5" class="" style="display: none;"><em>ê³ ì©íê°ì  ìê°</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('6');" onmouseout="fnLink('0');">
                    <a href="/eo/EmployJobProc.eo?tabGb=06">ì·¨ìì ì°¨ ìë´</a>
                    <!-- tool tip -->
                    <span id="link6" class="" style="display: none;"><em>ì·¨ìì ì°¨ ìë´</em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100" onmouseover="fnLink('8');" onmouseout="fnLink('0');">
                    <a href="/VocaDicLstR.eo" >ì©ì´ì¬ì </a>
                    <!-- tool tip -->
                    <span id="link8" class="" style="display: none;"><em>ì©ì´ì¬ì </em></span>
                    <!-- //tool tip -->
                  </li>
                  <li class="w100"onmouseover="fnLink('9');" onmouseout="fnLink('0');">
                    <a href="/eo/voc/VocFaqLst.eo">FAQ</a>
                    <!-- tool tip -->
                    <span id="link9" class="" style="display: none;"><em>FAQ</em></span>
                    <!-- //tool tip -->
                  </li>
                </ul>
              </div>
               <div class="departure_preparation">
                <h5  style="font-family:NanumGothic"><a href="#" onclick="fncMovePage('01');">ì¶êµ­ì¤ë¹ ìë´</a></h5>
                <ul>
                  <li class="w100" onmouseover="fnLink('10');" onmouseout="fnLink('0');">
                    <a href="#" style="width: 240px;" onclick="fncMovePage('07');">ìì§ê·êµ­ ê·¼ë¡ì ì¬ìêµ­ ì°ëë°©ì</a>
                    <!-- tool tip -->
                    <span id="link5" class="" style="display: none;"><em>ìì§ê·êµ­ ê·¼ë¡ì ì¬ìêµ­ ì°ëë°©ì</em></span>
                    <!-- //tool tip -->
                </li>
                <li class="w100" onmouseover="fnLink('11');" onmouseout="fnLink('0');">
                  <a href="#"  style="width: 240px;" onclick="fncMovePage('05');">ììëë©´ ì¢ì ìì°¬ ê³ ì©ì ë³´ ì´ì¼ê¸°</a>
                  <!-- tool tip -->
                  <span id="link6" class="" style="display: none;"><em>ììëë©´ ì¢ì ìì°¬ ê³ ì©ì ë³´ ì´ì¼ê¸°</em></span>
                  <!-- //tool tip -->
                </li>
                <li class="w100" onmouseover="fnLink('12');" onmouseout="fnLink('0');">
                  <a href="#"  style="width: 240px;" onclick="fncMovePage('04');">ì ê³ ìë¬´ì¬í­ê³¼ ë³´íì²­êµ¬ ì´ì¼ê¸°</a>
                  <!-- tool tip -->
                  <span id="link8" class="" style="display: none;"><em>ì ê³ ìë¬´ì¬í­ê³¼ ë³´íì²­êµ¬ ì´ì¼ê¸°</em></span>
                  <!-- //tool tip -->
                </li>
                <li class="w100" onmouseover="fnLink('13');" onmouseout="fnLink('0');">
                  <a href="#"  style="width: 240px;" onclick="fncMovePage('08');">ì¶êµ­ë§ê¸°ë³´í ìë´</a>
                  <!-- tool tip -->
                  <span id="link9" class="" style="display: none;"><em>ì¶êµ­ë§ê¸°ë³´í ìë´</em></span>
                  <!-- //tool tip -->
                </li>
                <li class="dropdown" onmouseover="fnLink('14');" onmouseout="fnLink('0');" style="list-style-position: inside; margin-bottom: 0px">
                  <a class="dropBtn" style="width: 240px; text-overflow::ellipsis; text-decoration: none" href="#">ê·êµ­ í íì§ê¸°ì ì·¨ì ì§ì</a>
                    <ul class="dropdown-content">
                      <li><a href="#" onclick="fncMovePage('03');" style="font-size: 12px; text-overflow:ellipsis; white-space:nowrap;">- ê·êµ­ê·¼ë¡ì ë¤í¸ìí¬ ì°¸ê° ìë´</a></li>
                      <li><a href="#" onclick="fncMovePage('02');" style="font-size: 12px; text-overflow:ellipsis; white-space:nowrap;">- ì¸êµ­ì¸ê·¼ë¡ì ë³¸êµ­ íêµ­ê¸°ì ì·¨ììë¥ ìë´</a></li>
                    </ul>
                </li>
              </ul>
            </div>
            </div>
            <div class="mother_site" align="left">

              <div class="guide" style="margin-top: 10px">
                <strong>Mother Tongue Site</strong>
                <p>ê³ ì©íê°ì  ìë´, íêµ­ì´ìíê²°ê³¼ ì¡°í, ê¸°ë¥ìíì ì ë° ê²°ê³¼ ì¡°í, ëìì§í ìí© ì¡°í, ê²½ë ¥ì¦ëªì ì¶ë ¥ ìë¹ì¤ ë±ì ëª¨êµ­ì´ë¡ ì ê³µí©ëë¤.</p>

                <div class="nation">
                  <div class="sel_nation">
                     <select id="natSiteVal" name="natSiteVal" title="Mother Tongue Site">

                      
                      <option value="chs" selected>China(ç®ä½)</option>
                      <option value="cht" >China(å³çµ±)</option>
                      <option value="th" >Thailand</option>
                      <option value="in" >Indonesia</option>
                      <option value="vi" >Vietnam</option>
                      <option value="ph" >Philippines</option>
                      <option value="mo" >Mongolia</option>
                      <option value="ca" >Cambodia</option>
                      <option value="pa" >Pakistan</option>
                      <option value="bd" >Bangladesh</option>
                      <option value="np" >Nepal</option>
                      <option value="my" >Myanmar</option>
                      <option value="uz" >Uzbekistan</option>
                      <option value="sl" >SriLanka</option>
                      <option value="do" >Timor-Leste</option>
                      <option value="kz" >Kyrgyzstan</option>
                      <option value="lo" >Laos</option>
                      <option value="krNat" >Korea</option>
                     </select>
                  </div>
                  <a href="#" class="btn_go" title="ìì°½" onclick="fnNatSite();">GO</a>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- //ì¼ë°ì¸êµ­ì¸ -->

        <!-- í¹ë¡ì¸êµ­ì¸ -->
        <!-- ì íë ë©¤ë²ì ì»¨íì¸  ë³´ì¬ì§ ê²½ì° class="on" ì¶ê° -->
        <div id="h2" class="mbr_type h2" >
          <h3><a href="#" onclick="fnMainTap('3')">í¹ë¡ì¸êµ­ì¸<span>H-2</span></a></h3>
          <div class="intro">
            <h4>í¹ë¡ì¸êµ­ì¸</h4>
            <img src="/comm/img/kr/main_new/bg_h2.gif" alt="" />
            <strong class="tit_eps"><em>ì¸êµ­ì¸ê³ ì©ê´ë¦¬ìì¤í</em>êµ­ë´ ê±°ì£¼ ì¸êµ­ì¸ê·¼ë¡ì ì¤ í¹ë¡ì¸êµ­ì¸ì ìí<br />ìë¹ì¤ìëë¤.</strong>
            <p>í¹ë¡ì¸êµ­ì¸ì ì·¨ìêµì¡ì´ë ¥ê³¼ ë¯¼ìì ì²­ì§ííí©,<br />í¹ë¡êµ¬ì¸ì¬ìì¥ì¡°í ë± ìë¹ì¤ë¥¼ ì ê³µí©ëë¤</p>
            <span class="btn_detail"><a href="/kr/frnr/index02.jsp">ìì¸í ë³´ê¸°</a></span>
          </div>
          <div class="list_cont">
            <div class="service"  style="padding: 13px 10px 0px 31px">
              <h5>íììë¹ì¤</h5>
              <ul>
                <li><a href="/eo/SwkBplcLstR.eo">í¹ë¡êµ¬ì¸ì¬ìì¥ì¡°í</a></li>
                <li><a href="/eo/EmptEduH2RsltLstR.eo">ê±´ì¤ì ì·¨ìì¦ëªì ì¡°í</a></li>
                <li><a href="/eo/EmptEduHistR.eo?frnr=20102">ì·¨ìêµì¡ì´ë ¥</a></li>
                <!-- <li><a href="http://eps.hrdkorea.or.kr/h2/empProcess/empEdu.do" target="_blank" title="ìì°½">ì·¨ìêµì¡ì ì²­<span class="newpage">ìì°½</span></a></li> -->
                <li class="w100"><a href="/eo/FrnwCappLstR.eo?frnr=20102">ë¯¼ìì ì²­ì§í</a></li>
                <li class="w100"><a href="/eo/BplcChgHistR.eo?frnr=20102">ì¬ìì¥ë³ëì´ë ¥ì¡°í</a></li>
                <li class="w100"><a href="/eo/SeekCondBplcLstR.eo">ìì ì¥ ì¶ë ¥ìì²­</a></li>
              </ul>
            </div>
            <div class="system">
              <h5>ê´ë ¨ì ë ìê°</h5>
              <ul>
                <li><a href="/eo/EmployPerSystem.eo?tabGb=01">ê³ ì©íê°ì  ìê°</a></li>
                <li><a href="/eo/EmployJobProc.eo?tabGb=01">ê³ ì©ì ì°¨ ìë´</a></li>
                <li><a href="http://eps.hrdkorea.or.kr/h2/empProcess/empEdu.do" target="_blank" title="ìì°½">ì·¨ìêµì¡ ìë´<span class="newpage">ìì°½</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- //í¹ë¡ì¸êµ­ì¸ -->

      <div class="cont01_01">

        <!-- id ë¡ê·¸ì¸ -->
        <div class="login" style="display:block" id="loginCheck">
          <h3>ìì´ëë¡ê·¸ì¸</h3>
          <ul class="select_log">
            <!-- ì íëì ê²½ì° a class="on" -->
            <li class="id"><a href="#" class="on" onclick="fnIdCertificateChange('1'); return false;">ìì´ë ë¡ê·¸ì¸</a></li>
            <li><a href="#" onclick="fnIdCertificateChange('2'); return false;">ê³µëì¸ì¦ì ë¡ê·¸ì¸</a></li>
          </ul>
          <dl class="log_info">
            <dt>ìì´ë</dt>
            <dd><input type="text" id="lginId" name="lginId" class="input_text" placeholder="ìì´ë ìë ¥í´ì£¼ì¸ì" title="ìì´ë ìë ¥" maxlength="15" onkeypress="if(event.keyCode == 13){ fncLogin(); return false;}"  style="ime-mode:inactive" /></dd>
            <dt>ë¹ë°ë²í¸</dt>
            <dd><input type="password" id="pwdNo" name="pwdNo" class="input_text" placeholder="ë¹ë°ë²í¸ ìë ¥í´ì£¼ì¸ì" title="ë¹ë°ë²í¸ ìë ¥" onkeypress="if(event.keyCode == 13){ fncLogin(); return false;}" maxlength="20" autocomplete="off" /></dd>
          </dl>
          <button type="button" class="btn_blue" onclick="fncLogin();">ë¡ê·¸ì¸(Login)</button>
          <span class="btn_group">
            <a href="/eo/IdPasswordSrchRM.eo">ID/PW ì°¾ê¸°</a>
            <a href="/eo/UserAuthYnRM.eo">íìê°ì(Sign up)</a>
          </span>
        </div>
        <!-- //id ë¡ê·¸ì¸ -->

        <div id="certiLgin" class="login" style="display:none">
          <h3>ê³µëì¸ì¦ìë¡ê·¸ì¸</h3>
          <ul class="select_log mb25">
            <!-- ì íëì ê²½ì° a class="on" -->
            <li class="id"><a href="#" onclick="fnIdCertificateChange('1'); return false;">ìì´ë ë¡ê·¸ì¸</a></li>
            <li><a href="#" class="on" onclick="fnIdCertificateChange('2'); return false;">ê³µëì¸ì¦ì ë¡ê·¸ì¸</a></li>
          </ul>
          <button type="button" class="btn_blue" onclick="fncCertLogin();">ê³µëì¸ì¦ì ë¡ê·¸ì¸</button>
          <a href="/eo/CertifyInfo.eo" class="btn_green">ê³µëì¸ì¦ì¼í°</a>
          <span class="btn_group">
            <a href="/eo/UserAuthYnRM.eo" class="w100">íìê°ì(Sign up)</a>
          </span>
        </div>


        <!-- //ë¡ê·¸ì¸ -->


        <!-- íìì¡´-->
        <div class="popup">
          <h3>íìì¡´</h3>
          <ul>

                <li id="pop0">
                  <a href="https://www.eps.go.kr/eo/NotiR.eo?bbswSn=3047" ><img src="/ImageView?sElementid=202103251526480" alt="2021ë 4ì ì ê· ì¸êµ­ì¸ë ¥ ë°°ì ìë´ ì ì¡°ì:4,630, ëì¶ì°ì:860, ì´ì:450, ê±´ì¤ì:300, ìë¹ì¤ì:10 ê³ ì©íê°ì ì ì²­ì ì ì: 2021.4.1(ëª©)~2021.4.15(ëª©), ê³ ì©íê°ì ëì ì¬ìì¥ ë°í: 2021.4.30(ê¸) 14ì, 16ì í´ë¦­íì¬ ìì¸íë©´ì¼ë¡ ì´ë..." width="273" height="187"/></a>
                </li>

                <li id="pop1">
                  <a href="https://www.eps.go.kr/eo/NotiR.eo?bbswSn=3095" ><img src="/ImageView?sElementid=202107151057350" alt="ì½ë¡ë19 ë°©ì­ìì¹ ì¤ì ìì¨ì ê²í" width="273" height="187"/></a>
                </li>

                <li id="pop2">
                  <a href="https://www.eps.go.kr/eo/NotiR.eo?bbswSn=3075" ><img src="/ImageView?sElementid=202105031109550" alt="ìì¬ì¦ììë¥¼ íµí ì íì¬ë¡ ë° ì¡°ì¹ íìì¬í­ ê³µì§ì¬í­ìì ë°ë¡ íì¸íê¸°" width="273" height="187"/></a>
                </li>

                <li id="pop3">
                  <a href="https://www.eps.go.kr/eo/NotiR.eo?bbswSn=3005" ><img src="/ImageView?sElementid=202009101401330" alt="ì¬ìì£¼ ì¸êµ­ì¸ ê³ ì©ê´ë¦¬êµì¡(E-ë¬ë) ìë£ ì¬ìì¥ì ê²½ì°, ì°¨ê¸°ëë ì ìì  ê°ì  ë°ì ì¨ë¼ì¸ êµì¡ ì ì²­" width="273" height="187"/></a>
                </li>

                <li id="pop4">
                  <a href="https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=10762" ><img src="/ImageView?sElementid=202008251738590" alt="ì½ë¡ë19 ëì ëì± ê°íë ê³ ì©ë¸ëë¶ ì§ìì¬ì ê³ ì©ë¸ëë¶" width="273" height="187"/></a>
                </li>

                <li id="pop5">
                  <a href="https://www.eps.go.kr/eo/NotiR.eo?bbswSn=2753" ><img src="/ImageView?sElementid=202002281333220" alt="ì ì¢ ì½ë¡ëë°ì´ë¬ì¤ê°ì¼ì¦ ìë°© ìì¹ ê°ì¼ë³ì´ ìì¬ë  ë ê´í ë³´ê±´ì ëë 1339, ì§ì­ë²í¸+120 ìë´ ê°ì¼ë³ ë°ì ì ë³´ íì¸ : í´ì¸ê°ì¼ë³ NOWìì" width="273" height="187"/></a>
                </li>

                <li id="pop6">
                  <a href="https://www.eps.go.kr/eo/NotiR.eo?bbswSn=2782" ><img src="/ImageView?sElementid=202003231751500" alt="ì½ë¡ë19 ìë°©ì ìí ì¬ìì¥ ì¬íì  ê±°ë¦¬ëê¸° ì§ì¹¨" width="273" height="187"/></a>
                </li>

          </ul>
          <div class="control">
            <div class="link">


              <button type="button" class="no1 active">1</button>


              <button type="button" class="no2 ">2</button>


              <button type="button" class="no3 ">3</button>


              <button type="button" class="no4 ">4</button>


              <button type="button" class="no5 ">5</button>


              <button type="button" class="no6 ">6</button>


              <button type="button" class="no7 ">7</button>

            </div>
          <div class="btn_control">
            <button type="button" class="toggle">ì¤í¬ë¡¤ ì¤ì§</button>
          </div>
        </div>
        </div>
        <!-- //íìì¡´-->
      </div>
    </div>

    <hr />

    <div class="cont02">
      <div class="bbs">
        <h3>ê³µì§ì¬í­</h3>
        <ul>

          <li>
            <a href="/eo/NotiR.eo?bbswSn=3034"><font color='red'><strong> [ê³µì§] ì½ë¡ë19 ìë°©ìì¹/ê°ì¼ì¦ì ë°ìì íëìì¹/ì ë³ê²ì¬ ë¹ì© ë° íµë³´ìë¬´ ë©´ì  (ê±°ë¦¬ëê¸° ìë´)</strong></font></a>
            <span>2021-03-09</span>
          </li>

          <li>
            <a href="/eo/NotiR.eo?bbswSn=3090"><font color='red'><strong>[ê³µì§] í¸ìíê³  ìì í ì¬ë¦í´ê°ë¥¼ ìí ë°©ì­ ìì¹(ë²ì­ë³¸ í¬í¨) ìë´</strong></font></a>
            <span>2021-06-22</span>
          </li>

          <li>
            <a href="/eo/NotiR.eo?bbswSn=2991"><font color='red'><strong>[ê³µì§] ì¶ë ¥íë¡ê·¸ë¨ ì¥ì  ë°ìì ì¡°ì¹ ë°©ë²</strong></font></a>
            <span>2021-01-25</span>
          </li>

          <li>
            <a href="/eo/NotiR.eo?bbswSn=3099">[ê³µì§] ê³ ì©íê° ì¬ìì¥ ì¸êµ­ì¸ê·¼ë¡ì ìë°©ì ì¢ ìë´</a>
            <span>2021-07-22</span>
          </li>

          <li>
            <a href="/eo/NotiR.eo?bbswSn=3098">[ê³µì§] ìëê¶ ìë¡ì´ ê±°ë¦¬ëê¸° 4ë¨ê³ ìí ìë´</a>
            <span>2021-07-19</span>
          </li>

        </ul>
        <a href="/eo/NotiLst.eo" title="ê³µì§ì¬í­ ëë³´ê¸°" class="btn_more">ëë³´ê¸°</a>
      </div>

      <div id="company_sch" class="search">
        <h3>ì ê´ê¸°ê´ ì°¾ê¸°</h3>
        <ul>
          <li class="region1"> <!-- li class="active"ì ë§ì°ì¤ ì¤ë²í¨ê³¼ ë° í´ë¹ ì´ë¯¸ì§ ë³´ì -->
            <a href="#search">ì ì²´ì ê´ê¸°ê´</a>
            <img src="/comm/img/kr/main_new/map01.gif" alt="ì ì²´ì ê´ê¸°ê´ì´ íìë ì§ì­ë³ ì§ë" usemap="#regionMap1" class="region" />
            <map id="regionMap1" name="regionMap1">
              <area shape="rect" coords="39,25,56,44" href="#search" alt="ìì¸" onclick="searchMap('','ìì¸');" />
              <area shape="rect" coords="15,33,31,48" href="#search" alt="ì¸ì²" onclick="searchMap('','ì¸ì²');" />
              <area shape="rect" coords="51,47,67,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('','ê²½ê¸°');" />
              <area shape="rect" coords="76,18,96,36" href="#search" alt="ê°ìë" onclick="searchMap('','ê°ì');" />
              <area shape="rect" coords="77,56,95,76" href="#search" alt="ì¶©ì²­ë¶ë" onclick="searchMap('','ì¶©ë¶');" />
              <area shape="rect" coords="35,70,51,87" href="#search" alt="ì¶©ì²­ë¨ë" onclick="searchMap('','ì¶©ë¨');" />
              <area shape="rect" coords="65,75,78,93" href="#search" alt="ëì " onclick="searchMap('','ëì ');" />
              <area shape="rect" coords="100,74,112,94" href="#search" alt="ê²½ìë¶ë" onclick="searchMap('','ê²½ë¶');" />
              <area shape="rect" coords="109,93,120,104" href="#search" alt="ëêµ¬" onclick="searchMap('','ëêµ¬');" />
              <area shape="rect" coords="83,110,98,129" href="#search" alt="ê²½ìë¨ë" onclick="searchMap('','ê²½ë¨');" />
              <area shape="rect" coords="121,101,135,114" href="#search" alt="ì¸ì°" onclick="searchMap('','ì¸ì°');" />
              <area shape="rect" coords="115,116,131,131" href="#search" alt="ë¶ì°" onclick="searchMap('','ë¶ì°');" />
              <area shape="rect" coords="44,98,58,115" href="#search" alt="ì ë¼ë¶ë" onclick="searchMap('','ì ë¶');" />
              <area shape="rect" coords="47,120,61,135" href="#search" alt="ê´ì£¼" onclick="searchMap('','ê´ì£¼');" />
              <area shape="rect" coords="34,133,48,148" href="#search" alt="ì ë¼ë¨ë" onclick="searchMap('','ì ë¨');" />
              <area shape="rect" coords="36,166,53,184" href="#search" alt="ì ì£¼ë" onclick="searchMap('','ì ì£¼');" />
            </map>
          </li>

          <li class="region2 extend">
            <a href="#search">ê³ ì©ë¸ëë¶(ê³ ì©ì¼í°)</a>
            <img src="/comm/img/kr/main_new/map02.gif" alt="ê³ ì©ë¸ëë¶(ê³ ì©ì¼í°)ê° íìë ì§ì­ë³ ì§ë" usemap="#regionMap2" class="region" />
            <map id="regionMap2" name="regionMap2">
              <area shape="rect" coords="39,24,56,43" href="#search" alt="ìì¸" onclick="searchMap('0010','ìì¸');" />
              <area shape="rect" coords="17,34,33,49" href="#search" alt="ì¸ì²" onclick="searchMap('0010','ì¸ì²');" />
              <area shape="rect" coords="51,47,67,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('0010','ê²½ê¸°');" />
              <area shape="rect" coords="75,18,95,36" href="#search" alt="ê°ìë" onclick="searchMap('0010','ê°ì');" />
              <area shape="rect" coords="76,56,94,76" href="#search" alt="ì¶©ì²­ë¶ë" onclick="searchMap('0010','ì¶©ë¶');" />
              <area shape="rect" coords="35,70,51,87" href="#search" alt="ì¶©ì²­ë¨ë" onclick="searchMap('0010','ì¶©ë¨');" />
              <area shape="rect" coords="65,75,78,93" href="#search" alt="ëì " onclick="searchMap('0010','ëì ');" />
              <area shape="rect" coords="101,74,113,94" href="#search" alt="ê²½ìë¶ë" onclick="searchMap('0010','ê²½ë¶');" />
              <area shape="rect" coords="109,94,120,105" href="#search" alt="ëêµ¬" onclick="searchMap('0010','ëêµ¬');" />
              <area shape="rect" coords="84,110,99,129" href="#search" alt="ê²½ìë¨ë" onclick="searchMap('0010','ê²½ë¨');" />
              <area shape="rect" coords="121,101,135,114" href="#search" alt="ì¸ì°" onclick="searchMap('0010','ì¸ì°');" />
              <area shape="rect" coords="115,116,131,131" href="#search" alt="ë¶ì°" onclick="searchMap('0010','ë¶ì°');" />
              <area shape="rect" coords="46,98,60,115" href="#search" alt="ì ë¼ë¶ë" onclick="searchMap('0010','ì ë¶');" />
              <area shape="rect" coords="47,120,61,135" href="#search" alt="ê´ì£¼" onclick="searchMap('0010','ê´ì£¼');" />
              <area shape="rect" coords="34,133,48,148" href="#search" alt="ì ë¼ë¨ë" onclick="searchMap('0010','ì ë¨');" />
              <area shape="rect" coords="36,167,53,185" href="#search" alt="ì ì£¼ë" onclick="searchMap('0010','ì ì£¼');" />
            </map>
          </li>
          <li class="region3 extend">
            <a href="#search">ë¸ì¬ë°ì ì¬ë¨</a>
            <img src="/comm/img/kr/main_new/map03.gif" alt="ë¸ì¬ë°ì ì¬ë¨ì´ íìë ì§ì­ë³ ì§ë" usemap="#regionMap3" class="region" />
            <map id="regionMap3" name="regionMap3">
              <area shape="rect" coords="39,25,56,44" href="#search" alt="ìì¸" onclick="searchMap('0012','ìì¸');" />
              <area shape="rect" coords="17,33,33,48" href="#search" alt="ì¸ì²" onclick="searchMap('0012','ì¸ì²');" />
              <area shape="rect" coords="51,47,67,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('0012','ê²½ê¸°');" />
            </map>
          </li>
          <li class="region4">
            <a href="#search">íêµ­ì°ìì¸ë ¥ê³µë¨</a>
            <img src="/comm/img/kr/main_new/map04.gif" alt="íêµ­ì°ìì¸ë ¥ê³µë¨ì´ íìë ì§ì­ë³ ì§ë" usemap="#regionMap4" class="region" />
            <map id="regionMap4" name="regionMap4">
              <area shape="rect" coords="39,25,56,44" href="#search" alt="ìì¸" onclick="searchMap('0011','ìì¸');" />
              <area shape="rect" coords="16,33,32,48" href="#search" alt="ì¸ì²" onclick="searchMap('0011','ì¸ì²');" />
              <area shape="rect" coords="50,47,66,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('0011','ê²½ê¸°');" />
              <area shape="rect" coords="75,18,95,36" href="#search" alt="ê°ìë" onclick="searchMap('0011','ê°ì');" />
              <area shape="rect" coords="76,56,94,76" href="#search" alt="ì¶©ì²­ë¶ë" onclick="searchMap('0011','ì¶©ë¶');" />
              <area shape="rect" coords="34,70,50,87" href="#search" alt="ì¶©ì²­ë¨ë" onclick="searchMap('0011','ì¶©ë¨');" />
              <area shape="rect" coords="64,75,77,93" href="#search" alt="ëì " onclick="searchMap('0011','ëì ');" />
              <area shape="rect" coords="100,74,112,94" href="#search" alt="ê²½ìë¶ë" onclick="searchMap('0011','ê²½ë¶');" />
              <area shape="rect" coords="108,95,119,106" href="#search" alt="ëêµ¬" onclick="searchMap('0011','ëêµ¬');" />
              <area shape="rect" coords="83,110,98,129" href="#search" alt="ê²½ìë¨ë" onclick="searchMap('0011','ê²½ë¨');" />
              <area shape="rect" coords="122,101,136,114" href="#search" alt="ì¸ì°" onclick="searchMap('0011','ì¸ì°');" />
              <area shape="rect" coords="114,116,130,131" href="#search" alt="ë¶ì°" onclick="searchMap('0011','ë¶ì°');" />
              <area shape="rect" coords="45,99,59,116" href="#search" alt="ì ë¼ë¶ë" onclick="searchMap('0011','ì ë¶');" />
              <area shape="rect" coords="46,120,60,135" href="#search" alt="ê´ì£¼" onclick="searchMap('0011','ê´ì£¼');" />
              <area shape="rect" coords="34,133,48,148" href="#search" alt="ì ë¼ë¨ë" onclick="searchMap('0011','ì ë¨');" />
              <area shape="rect" coords="37,166,54,184" href="#search" alt="ì ì£¼ë" onclick="searchMap('0011','ì ì£¼');" />
            </map>
          </li>
          <li class="region5 active extend">
            <a href="#search">ì¤ìê¸°ìì¤ìí</a>
            <img src="/comm/img/kr/main_new/map05.gif" alt="ì¤ìê¸°ìì¤ìíê° íìë ì§ì­ë³ ì§ë" usemap="#regionMap5" class="region" />
            <map id="regionMap5" name="regionMap5">
              <area shape="rect" coords="40,25,57,44" href="#search" alt="ìì¸" onclick="searchMap('0014','ìì¸');" />
              <area shape="rect" coords="17,33,33,48" href="#search" alt="ì¸ì²" onclick="searchMap('0014','ì¸ì²');" />
              <area shape="rect" coords="50,47,66,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('0014','ê²½ê¸°');" />
              <area shape="rect" coords="75,18,95,36" href="#search" alt="ê°ìë" onclick="searchMap('0014','ê°ì');" />
              <area shape="rect" coords="75,56,93,76" href="#search" alt="ì¶©ì²­ë¶ë" onclick="searchMap('0014','ì¶©ë¶');" />
              <area shape="rect" coords="64,75,77,93" href="#search" alt="ëì " onclick="searchMap('0014','ëì ');" />
              <area shape="rect" coords="106,90,125,108" href="#search" alt="ëêµ¬" onclick="searchMap('0014','ëêµ¬');" />
              <area shape="rect" coords="82,110,97,129" href="#search" alt="ê²½ìë¨ë" onclick="searchMap('0014','ê²½ë¨');" />
              <area shape="rect" coords="114,115,130,130" href="#search" alt="ë¶ì°" onclick="searchMap('0014','ë¶ì°');" />
              <area shape="rect" coords="46,120,60,135" href="#search" alt="ê´ì£¼" onclick="searchMap('0014','ê´ì£¼');" />
              <area shape="rect" coords="36,166,53,184" href="#search" alt="ì ì£¼ë" onclick="searchMap('0014','ì ì£¼');" />
            </map>
          </li>
          <li class="region6 extend">
            <a href="#search">ìì°ìíëì¡°í©</a>
            <img src="/comm/img/kr/main_new/map06.gif" alt="ìì°ìíëì¡°í©ì´ íìë ì§ì­ë³ ì§ë" usemap="#regionMap6" class="region" />
            <map id="regionMap6" name="regionMap6">
              <area shape="rect" coords="39,25,56,44" href="#search" alt="ìì¸" onclick="searchMap('0013','ìì¸');" />
              <area shape="rect" coords="16,33,32,48" href="#search" alt="ì¸ì²" onclick="searchMap('0013','ì¸ì²');" />
              <area shape="rect" coords="50,47,66,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('0013','ê²½ê¸°');" />
              <area shape="rect" coords="75,18,95,36" href="#search" alt="ê°ìë" onclick="searchMap('0013','ê°ì');" />
              <area shape="rect" coords="34,70,50,87" href="#search" alt="ì¶©ì²­ë¨ë" onclick="searchMap('0013','ì¶©ë¨');" />
              <area shape="rect" coords="98,72,114,94" href="#search" alt="ê²½ìë¶ë" onclick="searchMap('0013','ê²½ë¶');" />
              <area shape="rect" coords="82,111,97,130" href="#search" alt="ê²½ìë¨ë" onclick="searchMap('0013','ê²½ë¨');" />
              <area shape="rect" coords="119,101,133,114" href="#search" alt="ì¸ì°" onclick="searchMap('0013','ì¸ì°');" />
              <area shape="rect" coords="115,115,131,130" href="#search" alt="ë¶ì°" onclick="searchMap('0013','ë¶ì°');" />
              <area shape="rect" coords="45,99,59,116" href="#search" alt="ì ë¼ë¶ë" onclick="searchMap('0013','ì ë¶');" />
              <area shape="rect" coords="47,119,61,134" href="#search" alt="ê´ì£¼" onclick="searchMap('0013','ê´ì£¼');" />
              <area shape="rect" coords="33,132,47,147" href="#search" alt="ì ë¼ë¨ë" onclick="searchMap('0013','ì ë¨');" />
              <area shape="rect" coords="35,167,52,185" href="#search" alt="ì ì£¼ë" onclick="searchMap('0013','ì ì£¼');" />
            </map>
          </li>
          <li class="region7 extend">
            <a href="#search">ëíì¤ìí</a>
            <img src="/comm/img/kr/main_new/map07.gif" alt="ëíì¤ìíê° íìë ì§ì­ë³ ì§ë" usemap="#regionMap7" class="region" />
            <map id="regionMap7" name="regionMap7">
              <area shape="rect" coords="39,25,56,44" href="#search" alt="ìì¸" onclick="searchMap('0016','ìì¸');" />
              <area shape="rect" coords="16,33,32,48" href="#search" alt="ì¸ì²" onclick="searchMap('0016','ì¸ì²');" />
              <area shape="rect" coords="50,47,66,63" href="#search" alt="ê²½ê¸°ë" onclick="searchMap('0016','ê²½ê¸°');" />
              <area shape="rect" coords="75,18,95,36" href="#search" alt="ê°ìë" onclick="searchMap('0016','ê°ì');" />
              <area shape="rect" coords="76,56,94,76" href="#search" alt="ì¶©ì²­ë¶ë" onclick="searchMap('0016','ì¶©ë¶');" />
              <area shape="rect" coords="64,76,77,94" href="#search" alt="ëì " onclick="searchMap('0016','ëì ');" />
              <area shape="rect" coords="100,74,112,94" href="#search" alt="ê²½ìë¶ë" onclick="searchMap('0016','ê²½ë¶');" />
              <area shape="rect" coords="107,94,118,105" href="#search" alt="ëêµ¬" onclick="searchMap('0016','ëêµ¬');" />
              <area shape="rect" coords="81,110,96,129" href="#search" alt="ê²½ìë¨ë" onclick="searchMap('0016','ê²½ë¨');" />
              <area shape="rect" coords="119,100,135,114" href="#search" alt="ì¸ì°" onclick="searchMap('0016','ì¸ì°');" />
              <area shape="rect" coords="114,116,130,131" href="#search" alt="ë¶ì°" onclick="searchMap('0016','ë¶ì°');" />
              <area shape="rect" coords="44,98,58,115" href="#search" alt="ì ë¼ë¶ë" onclick="searchMap('0016','ì ë¶');" />
              <area shape="rect" coords="46,121,60,136" href="#search" alt="ê´ì£¼" onclick="searchMap('0016','ê´ì£¼');" />
              <area shape="rect" coords="36,168,53,186" href="#search" alt="ì ì£¼ë" onclick="searchMap('0016','ì ì£¼');" />
            </map>
          </li>
          <li class="region8 extend">
            <a href="#search">ëíê±´ì¤íí</a>
            <img src="/comm/img/kr/main_new/map08.gif" alt="ëíê±´ì¤ííê° íìë ì§ì­ë³ ì§ë" usemap="#regionMap8" class="region" />
            <map id="regionMap8" name="regionMap8">
              <area shape="rect" coords="40,25,57,44" href="#search" alt="ìì¸" onclick="searchMap('0015','ìì¸');" />
              <area shape="rect" coords="15,33,31,48" href="#search" alt="ì¸ì²" onclick="searchMap('0015','ì¸ì²');" />
            </map>
          </li>
        </ul><span class="region" style="display: none; left: 51px; top: 128px; background-image: url(https://www.eps.go.kr/comm/img/kr/main_new/ico_region_undefined.gif);">ì ë¼ë¨ë</span>
      </div>
    </div>

    <div id="familysite" class="familysite">
      <h3>ì ë¶ ë° ì ê´ê¸°ê´</h3>
      <ul>
        <li><a class="slide-display" href="http://www.jobfunds.or.kr" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201802071516210" alt="ì¬ì¥ë, ì¸ê±´ë¹ ê±±ì ì ì¼ìë¦¬ ìì ìê¸ì ë§¡ê¸°ì¸ì. ìµì ìê¸ í´ê²°ì¬ ì¼ìë¦¬ ìì ìê¸" /></a></li>
<li><a class="slide-display" href="http://www.work.go.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201109051122110" alt="ìí¬ë·(worknet) www.work.go.kr" /></a></li>
<li><a class="slide-display" href="http://www.hrdkorea.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202005151634250" alt="íêµ­ì°ìì¸ë ¥ê³µë¨ human resources development service of korea" /></a></li>
<li><a class="slide-display" href="http://www.hrd.go.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201109051124390" alt="HRD-Net (hrd.go.kr)" /></a></li>
<li><a class="slide-display" href="http://www.ei.go.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201109051125220" alt="ê³ ì©ë³´í EMPLOYMENT INSURANCE (www.ei.go.kr)" /></a></li>
<li><a class="slide-display" href="http://epstopik.hrdkorea.or.kr" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201601181304320" alt="íêµ­ì´ë¥ë ¥ìí ííì´ì§" /></a></li>
<li><a class="slide-display" href="http://www.hikorea.go.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201109051143580" alt="Hi Korea ì¸êµ­ì¸ì ìí ì ì ì ë¶" /></a></li>
<li><a class="slide-display" href="http://eps.hrdkorea.or.kr/h2/main.do" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201109051145380" alt="ì¸êµ­êµ­ì ëí¬ê³ ì©ì ë³´ì ê³µìë¹ì¤" /></a></li>
<li><a class="slide-display" href="http://www.hugkorea.or.kr" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211440040" alt="ì¸êµ­ì¸ë ¥ìë´ì¼í° HUG Korea" /></a></li>
<li><a class="slide-display" href="https://kosha.or.kr/kosha/data/trForeignNew3.do" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201806081517010" alt="ì¸êµ­ì¸ ìì ë³´ê±´ ìë£ì¤

*ì´ì  ì£¼ì íì´ì§(http://www.kosha.or.kr/kosha/data/foreigndata.do) ë¹íì±íë¡ URL ì£¼ì ë³ê²½" /></a></li>
<li><a class="slide-display" href="http://www.ncs.go.kr" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=201305271013190" alt="êµ­ê°ì§ë¬´ë¥ë ¥íì¤ National Competency Standards" /></a></li>
<li><a class="slide-display" href="http://www.migrantok.org/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211442390" alt="íêµ­ì¸êµ­ì¸ë ¥ì§ìì¼í° > ì¸êµ­ì¸ë¸ëìì§ìì¼í°" /></a></li>
<li><a class="slide-display" href="http://www.ufwc.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211440230" alt="ìì ë¶ì¸êµ­ì¸ë ¥ì§ìì¼í° > ìì ë¶ì¸êµ­ì¸ë¸ëìì§ìì¼í° ë³ê²½" /></a></li>
<li><a class="slide-display" href="http://www.gimhaekorea.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211436340" alt="ê¹í´ì¸êµ­ì¸ë ¥ì§ìì¼í° > ê¹í´ì¸êµ­ì¸ë¸ëìì§ìì¼í° ë³ê²½" /></a></li>
<li><a class="slide-display" href="http://dfwc.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211439050" alt="ëêµ¬ì¸êµ­ì¸ë ¥ì§ìì¼í° > ëêµ¬ì¸êµ­ì¸ë¸ëìì§ìì¼í° ë³ê²½" /></a></li>
<li><a class="slide-display" href="http://www.infc.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211440430" alt="ì¸ì²ì¸êµ­ì¸ë ¥ì§ìì¼í° > ì¸ì²ì¸êµ­ì¸ë¸ëìì§ìì¼í° ë³ê²½" /></a></li>
<li><a class="slide-display" href="http://www.cfwc.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211441330" alt="ì²ìì¸êµ­ì¸ë ¥ì§ìì¼í° > ì²ìì¸êµ­ì¸ë¸ëìì§ìì¼í° ë³ê²½" /></a></li>
<li><a class="slide-display" href="http://www.mfwc.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211441000" alt="ì°½ìì¸êµ­ì¸ë ¥ì§ìì¼í° > ì°½ìì¸êµ­ì¸ë¸ëìì§ìì¼í° ë³ê²½" /></a></li>
<li><a class="slide-display" href="https://eis.work.go.kr" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202007221925580" alt="EISê³ ì©íì íµê³" /></a></li>
<li><a class="slide-display" href="http://www.gjfc119.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211552570" alt="ê´ì£¼ì¸êµ­ì¸ë¸ëìì§ìì¼í°" /></a></li>
<li><a class="slide-display" href="https://ysfc.or.kr/" target="_blank" title="ìì°½ì´ë¦¼"><img src="/ImageView?sElementid=202106211549450" alt="ìì°ì¸êµ­ì¸ë¸ëìì§ìì¼í°" /></a></li>

      </ul>
      <div class="control">
        <button type="button" class="prev">í¨ë°ë¦¬ì¬ì´í¸ ì´ì íë©´</button>
        <button type="button" class="next">í¨ë°ë¦¬ì¬ì´í¸ ë¤ìíë©´</button>
      </div>
    </div>
  </div>
  <!-- //container(20161013) -->
  </form>
</div>
<!-- //wrap -->

<!-- footer -->
<div id="footer">
  <h2>íë¨ìì­</h2>
  <div class="footin">
    <div class="bnb">
      <h3>
        <a href="http://www.moel.go.kr" target="_blank" title="ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/foot_logo01.gif" alt="ê³ ì©ë¸ëë¶" /></a>
        <a href="http://www.keis.or.kr" target="_blank" title="ìì°½ì´ë¦¼" class="keis"><img src="/comm/img/kr/main_new/foot_logo02.gif" alt="íêµ­ê³ ì©ì ë³´ì" /></a>
      </h3>
      <ul>
        <li><a href="/kr/privacy_3.9.jsp" class="active"><strong>ê°ì¸ì ë³´ì²ë¦¬ë°©ì¹¨</strong></a></li>
        <li><a href="/kr/eps_intro.jsp">EPSìê°</a></li>
        <li class="viewer">
          ë·°ì´ë¤ì´ë¡ë
          <a href="http://www.hancom.com/downLoad.downPU.do?mcd=002" target="_blank" title="íê¸ë·°ì´ë¤ì´ë¡ë ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/ico_hwp.gif" alt="íê¸ë·°ì´ë¤ì´ë¡ë" /></a>
          <a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=3657ce88-7cfa-457a-9aec-f4f827f20cac&amp;DisplayLang=ko" target="_blank" title="ìëë·°ì´ë¤ì´ë¡ë ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/ico_word.gif" alt="ìëë·°ì´ë¤ì´ë¡ë" /></a>
          <a href="http://www.microsoft.com/ko-kr/download/details.aspx?id=10" target="_blank" title="ììë·°ì´ë¤ì´ë¡ë ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/ico_xlsx.gif" alt="ììë·°ì´ë¤ì´ë¡ë" /></a>
          <a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=048dc840-14e1-467d-8dca-19d2a8fd7485&amp;DisplayLang=ko" target="_blank" title="íìí¬ì¸í¸ë·°ì´ë¤ì´ë¡ë ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/ico_pptx.gif" alt="íìí¬ì¸í¸ë·°ì´ë¤ì´ë¡ë" /></a>
          <a href="http://get.adobe.com/kr/reader/" target="_blank" title="PDFë·°ì´ë¤ì´ë¡ë ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/ico_pdf.gif" alt="PDFë·°ì´ë¤ì´ë¡ë" /></a>
        </li>
      </ul>
      <address>
        369-811 ì¶©ì²­ë¶ë ìì±êµ° ë§¹ëë©´ íì ë¡6  íêµ­ê³ ì©ì ë³´ì<br />
        <span class="system"><strong>ìì¤íê´ë ¨ë¬¸ì.&nbsp;</strong></span>&nbsp;<span class="tel"><strong>Tel.&nbsp;</strong>1577-7114(ì ë£)</span>&nbsp;&nbsp;
      </address>
      <p class="copyright">Copyright Â© 2013 ê³ ì©ë¸ëë¶ All Rights Reserved.</p>
      <div class="center">
        <h3>ì¼í°ìë´</h3>
        <a href="http://minwon.moel.go.kr/minwon2008/index_new.jsp" target="_blank" title="ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/foot_center03.gif" alt="ê³ ì©ë¸ëë¶ ì¢í©ìë´ì¼í° 1350(ì ë£)" /></a>
      </div>
	  <span class="accessibiliy1">
	  <img src="https://www.eprivacy.or.kr/images/mng/sub/mark1_eprivacy.png" style="cursor:pointer;" onclick="window.open('https://www.eprivacy.or.kr/front/certifiedSiteMark/certifiedSiteMarkPopup.do?certCmd=E&certNum=2021-E-R002','seal','width=527,height=720,location=no,status=no,scrollbars=no')" />
	  </span>
      <span class="accessibiliy"><a href="javascript:fncWAPop();" title="êµ­ê° ê³µì¸ ì¸ì¦ê¸°ê´ : ì¹ìì¹(ìì°½ì´ê¸°)"><img src="/comm/img/kr/main_new/wamark2021.png" alt="ê³¼íê¸°ì ì ë³´íµì ë¶ WEB ACCESSIBILITY ë§í¬(ì¹ ì ê·¼ì± íì§ì¸ì¦ ë§í¬)" /></a></span>
      <span class="qrCode">
        <a href="https://itunes.apple.com/kr/app/id702045889" target="_blank" title="ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/qr_iphone.gif" alt="ì¸êµ­ì¸ê³ ì©ê´ë¦¬APP(ì± ì¤í ì´)ë¤ì´ë¡ë QR ì½ë - ìì´í°" /></a>
        <a href="http://m.site.naver.com/jsp/incompatibleData.jsp" target="_blank" title="ìì°½ì´ë¦¼"><img src="/comm/img/kr/main_new/qr_android.gif" alt="ì¸êµ­ì¸ê³ ì©ê´ë¦¬APP(êµ¬ê¸íë ì´ì¤í ì´)ë¤ì´ë¡ë QR ì½ë - ìëë¡ì´ë" /></a>
      </span>
    </div>
    <!-- /bnb -->
  </div>
  <!-- //footin -->
</div>
<!-- //footer -->
<iframe name="signFrame" width="0" height="0" frameborder="0" title="ë¹íë ì"></iframe>
</body>
</html>