
function piResponse() {
		piSetCookie('visitor_id302391', '257331596', 3650);
			piSetCookie('visitor_id302391-hash', '78bf83e84f4996ee58fe619081255d8e0241da3ba73bb7fcabc2773020db031c40ae318db22d2fc9d7cae8561910c28aca9fc911', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331596';

				pi.tracker.visitor_id_sign='78bf83e84f4996ee58fe619081255d8e0241da3ba73bb7fcabc2773020db031c40ae318db22d2fc9d7cae8561910c28aca9fc911';
		
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




