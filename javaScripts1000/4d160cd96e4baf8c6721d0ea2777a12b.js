
function piResponse() {
		piSetCookie('visitor_id302391', '257331598', 3650);
			piSetCookie('visitor_id302391-hash', '8180db2277d2a0aad7857273971b47a2c6015d8770f69ddd264e165216751c33d692714f08adb0f913c1e8b1ca09ccb2933fa7c6', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331598';

				pi.tracker.visitor_id_sign='8180db2277d2a0aad7857273971b47a2c6015d8770f69ddd264e165216751c33d692714f08adb0f913c1e8b1ca09ccb2933fa7c6';
		
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




