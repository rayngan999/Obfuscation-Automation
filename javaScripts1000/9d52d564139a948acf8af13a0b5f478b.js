
function piResponse() {
		piSetCookie('visitor_id519011', '423581070', 3650);
			piSetCookie('visitor_id519011-hash', 'c738a26cd01c348d0baecdf8adc104e4a2043530122404778131f5bf65b02a6eaeb98e7af899ea7833cbdc788bd19335a1e6758b', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581070';

				pi.tracker.visitor_id_sign='c738a26cd01c348d0baecdf8adc104e4a2043530122404778131f5bf65b02a6eaeb98e7af899ea7833cbdc788bd19335a1e6758b';
		
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




