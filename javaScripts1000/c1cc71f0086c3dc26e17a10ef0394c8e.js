
function piResponse() {
		piSetCookie('visitor_id302391', '257331584', 3650);
			piSetCookie('visitor_id302391-hash', '7d09ce6659729c32dfaaf7ce22ca69b58ed747fc18c24f2dce85fe1767223968916a3b7aba32cecfc6490fb39316ace9b0426fcc', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331584';

				pi.tracker.visitor_id_sign='7d09ce6659729c32dfaaf7ce22ca69b58ed747fc18c24f2dce85fe1767223968916a3b7aba32cecfc6490fb39316ace9b0426fcc';
		
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




