
function piResponse() {
		piSetCookie('visitor_id302391', '257331594', 3650);
			piSetCookie('visitor_id302391-hash', 'f8cc9cd82e2c50079f185b796fa9510568c79cc639a257eace2a9ae1393eeadf1302da886c5de50c5b251177cb174a6e860e06b3', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331594';

				pi.tracker.visitor_id_sign='f8cc9cd82e2c50079f185b796fa9510568c79cc639a257eace2a9ae1393eeadf1302da886c5de50c5b251177cb174a6e860e06b3';
		
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




