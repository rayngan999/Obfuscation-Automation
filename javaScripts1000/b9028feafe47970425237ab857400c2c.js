
function piResponse() {
		piSetCookie('visitor_id519011', '423581072', 3650);
			piSetCookie('visitor_id519011-hash', 'e2670f1b64c495238cfaf41a932f981de181ad47117d7af9c7bad8cbd414c95b09484930635c78528e1565463a5a0fb6b67c4e91', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581072';

				pi.tracker.visitor_id_sign='e2670f1b64c495238cfaf41a932f981de181ad47117d7af9c7bad8cbd414c95b09484930635c78528e1565463a5a0fb6b67c4e91';
		
				pi.tracker.campaign_id='27610';
		
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




