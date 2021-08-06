
function piResponse() {
		piSetCookie('visitor_id302391', '257331592', 3650);
			piSetCookie('visitor_id302391-hash', '38b2fa4c4e66bc8c59f88927cad0555b0994ffae006db4dee499e4c88abf54e1f8aa8e9da90844b217dd164e710b989c1354268c', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331592';

				pi.tracker.visitor_id_sign='38b2fa4c4e66bc8c59f88927cad0555b0994ffae006db4dee499e4c88abf54e1f8aa8e9da90844b217dd164e710b989c1354268c';
		
				pi.tracker.campaign_id='2207';
		
		var variables = 'conly=true';
		for (property in pi.tracker) {
					variables += "&" + property + "=" + encodeURIComponent(pi.tracker[property]);
				}
		var headID = document.getElementsByTagName("head")[0];
		piScriptObj[piScriptNum] = document.createElement('script');
		piScriptObj[piScriptNum].type = 'text/javascript';
		piScriptObj[piScriptNum].src = analytics_link + variables;
		headID.appendChild(piScriptObj[piScriptNum]);
		piScriptObj[piScriptNum].onload = function() { return; }
	}
	}
piResponse();




