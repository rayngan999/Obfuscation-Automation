
function piResponse() {
		piSetCookie('visitor_id302391', '257331600', 3650);
			piSetCookie('visitor_id302391-hash', '2ed8635c2a6122f33114b0e5937d5a9a7b730d9f6a683afaab0b8d3a280c9441d60fb41e84de1b249f68e8f018d092e5e0f86490', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331600';

				pi.tracker.visitor_id_sign='2ed8635c2a6122f33114b0e5937d5a9a7b730d9f6a683afaab0b8d3a280c9441d60fb41e84de1b249f68e8f018d092e5e0f86490';
		
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




