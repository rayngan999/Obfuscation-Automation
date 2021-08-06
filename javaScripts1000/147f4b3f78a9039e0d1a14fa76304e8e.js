<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>ê³ ì©ë¸ëë¶ ìë´</title>
<!--
****************************************************************************************************
* @source      : common.jsp
* @description : session ë° ê¶í  ì²´í¬
*								 ê³µíµ ìë°ì¤í¬ë¦½í¸, CSS ê´ë¦¬
****************************************************************************************************
* DATE         AUTHOR    DESCRIPTION
*===================================================================================================
* 2009-10-13   ê¶ìì£¼     ìµì´ìì±
****************************************************************************************************
-->

















<!-- ê³µíµ Script include -->
<script type="text/javascript" src='/comm/js/string.js'></script>
<script type="text/javascript" src='/comm/js/gVariable.js'></script>
<script type="text/javascript" src='/comm/js/message.js'></script>
<script type="text/javascript" src="/comm/js/jquery.jui.min.js" charset="utf-8" ></script>
<script type="text/javascript" src='/comm/js/common.js' charset="utf-8" ></script>
<script type="text/javascript" src='/comm/js/calendar.js'></script>
<script type="text/javascript" >
<!--
	// ë©ìì§ë¥¼ ë³´ì¬ì¤ë¤.
	
-->
</script>

<script type="text/javascript" >
$(document).ready(function(){
	document.oncontextmenu = function(){
		return false;
	}
});
</script>

<link rel="stylesheet" type="text/css" href="/comm/css/layout07.css" />
<link rel="stylesheet" type="text/css" href="/comm/css/layout.css"   />
<script type="text/javascript" src='/comm/js/layer.js'></script>

<script language="JavaScript">
<!--
   function resize(){
        var g_fIsSP2 = false;
        g_fIsSP2 = (window.navigator.userAgent.indexOf("SV1") != -1);

        var oBody = document.body;
        var p_height, p_width;
        p_width  = oBody.scrollWidth + (oBody.offsetWidth-oBody.clientWidth)+8;
        p_height =  oBody.scrollHeight + (oBody.offsetHeight-oBody.clientHeight)+8;

		if(g_fIsSP2){
        // XP SP2 ë¸ë¼ì°ì ì..
            self.resizeTo(p_width - 2, p_height + 38);
        }else{
        //XP SP2 ë¸ë¼ì°ì ê° ìë.
            self.resizeTo(p_width - 2, p_height + 13);
        }
    }

	function setCookie(name, value, expiredays){
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	}

	function closeWin(){
		if ( document.myform.notice.checked ){
			setCookie("pop1125", "no" , 1);
			self.close();
		}
	}

	function urlMv(){
		self.close();
		var url = "https://www.eps.go.kr/eo/NotiR.eo?bbswSn=2941";
		opener.location.href = url;
	}
-->
</script>
</head>
<body>
<form name="myform">
	<a href="javascript:urlMv();"><img src="/comm/images/pop/pop1125.jpg"  border="0" alt="21.1.1~ ê³ ì©ë¸ëë¶ ìë´. ê³ ì©ë³´íë² ê°ì ì ë°ë¥¸ ì¸êµ­ì¸ê·¼ë¡ì(E-9, H-2) ê³ ì©ë³´í ì ì© ìë´(21ë1ì1ì¼ë¶í°) ë¬¸ì: ê´í ê·¼ë¡ë³µì§ê³µë¨ì§ì¬, ëíë²í¸:1588-0075" /></a>

	<div align="right">
		<input type="checkbox" name="notice" id="notice" onclick="closeWin()" onkeypress="closeWin()"><label for="notice">íë£¨ëì ì´ì§ ìê¸°</label>
	</div>
</form>
</body>
</html>