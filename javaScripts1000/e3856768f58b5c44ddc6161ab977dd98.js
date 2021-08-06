
function piResponse() {
		piSetCookie('visitor_id302391', '257331604', 3650);
			piSetCookie('visitor_id302391-hash', 'cca7858982935fcf28c14bfb243f7d1948b0c0552ff5a70ecb7f1a6af91d2e2af8f5af619f1e07ec192df222a378467311bbc7f4', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331604';

				pi.tracker.visitor_id_sign='cca7858982935fcf28c14bfb243f7d1948b0c0552ff5a70ecb7f1a6af91d2e2af8f5af619f1e07ec192df222a378467311bbc7f4';
		
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




