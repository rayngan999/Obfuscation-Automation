<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>ì¸êµ­ì¸ê·¼ë¡ì ê³ì ê·¼ë¡ ì ì²­ìë´(Notice of Seasonal worker application)</title>
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
			setCookie("pop0826", "no" , 1);
			self.close();
		}
	}

	function urlMv(obj){
		self.close();
		var url = "/eo/NotiR.eo?bbswSn=3012";
		if (obj == "apply"){
			//url = "/eo/SeasWrkMain.eo?frnr=20101&mode=C";
			
				url = "/eo/SeasWrkMain.eo?frnr=20101&mode=C";
			
		}
		opener.location.href = url;
	}
-->
</script>
</head>
<body>
<form name="myform">
	<img src="/comm/images/pop/pop0826.jpg" width="680" border="0" alt="ì¸êµ­ì¸ê·¼ë¡ì ê³ì ê·¼ë¡ ì ì²­ìë´(Notice of Seasonal worker application)" usemap="#map1" />
	<map name="map1">
		<area shape="rect" coords="85,233,326,294" href="javascript:urlMv('notice');" target="_self" alt="ê³µì§ì¬í­(Notice)">
		<area shape="rect" coords="353,232,595,295" href="javascript:urlMv('apply');" target="_self" alt="ì ì²­(Apply)">
	</map>
	<div align="right">
	<input type="checkbox" name="notice" id="notice" onclick="closeWin()" onkeypress="closeWin()"><label for="notice">íë£¨ëì ì´ì§ ìê¸°</label>
	</div>
</form>
</body>
</html>

