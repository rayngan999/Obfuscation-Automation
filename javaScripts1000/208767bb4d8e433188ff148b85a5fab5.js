
function piResponse() {
		piSetCookie('visitor_id302391', '257331586', 3650);
			piSetCookie('visitor_id302391-hash', '652a726a12349b2f902a92b3d9796f8f8466829c4dacb2065f6f4f7fa14dc2f6eb1d0035142a9c9e3e4489d1caa6471ec604fa98', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331586';

				pi.tracker.visitor_id_sign='652a726a12349b2f902a92b3d9796f8f8466829c4dacb2065f6f4f7fa14dc2f6eb1d0035142a9c9e3e4489d1caa6471ec604fa98';
		
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




