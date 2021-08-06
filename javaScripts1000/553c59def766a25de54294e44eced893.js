
function piResponse() {
		piSetCookie('visitor_id519011', '423581068', 3650);
			piSetCookie('visitor_id519011-hash', 'd1eda63689148a88c97a72c083e49fbe676e1ee65a9cb152cd9a7fee31c8c2521fed252135aeba3ba0b47eac12ca36f3242f173a', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581068';

				pi.tracker.visitor_id_sign='d1eda63689148a88c97a72c083e49fbe676e1ee65a9cb152cd9a7fee31c8c2521fed252135aeba3ba0b47eac12ca36f3242f173a';
		
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




