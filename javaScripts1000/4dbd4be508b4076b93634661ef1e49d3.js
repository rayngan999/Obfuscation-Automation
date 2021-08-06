
function piResponse() {
		piSetCookie('visitor_id302391', '257331590', 3650);
			piSetCookie('visitor_id302391-hash', '02e5d4c6962812b921a7f3b2563c0ec7ef49ec6d15ad970107440a38159300c242f8f5e3bfa23bc4c0b22e332c3b5d2def43e0f1', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331590';

				pi.tracker.visitor_id_sign='02e5d4c6962812b921a7f3b2563c0ec7ef49ec6d15ad970107440a38159300c242f8f5e3bfa23bc4c0b22e332c3b5d2def43e0f1';
		
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




