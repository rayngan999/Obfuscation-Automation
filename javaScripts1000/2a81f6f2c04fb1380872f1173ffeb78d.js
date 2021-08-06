checkCookiePolicy();

function getCookie(a){
	var b = document.cookie.split(";");
	if( null !=b & 0 < b.length)
		for(var c=0; c< b.length; c++)
			if(-1 != b[c].indexOf(a)) return b[c].split("\x3d")[1];
	return null;
}

function checkCookiePolicy(){
	var a = getCookie("agreeXactwareCookies");
	if("true" != a){
		jQuery("#cookie-policy").removeClass("hidden");
	}
 }
 
 jQuery("#acceptCookies").click(function(){
	 	s.events = "event45";
		s.linkTrackEvents = "event45";
		s.tl();
		var a = new Date;
		a.setTime(a.getTime() + 2592E6);
		a = "expires\x3d" + a.toGMTString();
		document.cookie = "agreeXactwareCookies\x3dtrue;path\x3d/;" + a;
		jQuery('#cookie-policy').addClass("hidden");
		return !1;
 })
 
