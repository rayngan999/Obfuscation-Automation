
function piResponse() {
		piSetCookie('visitor_id519011', '423581056', 3650);
			piSetCookie('visitor_id519011-hash', '412247d75ac9314607e8ab7e5d4ca6f7834262ffe52d28171e0b6237cbeb568e7efbbe17aa5725ef68c4519457aa4ee450f5851c', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581056';

				pi.tracker.visitor_id_sign='412247d75ac9314607e8ab7e5d4ca6f7834262ffe52d28171e0b6237cbeb568e7efbbe17aa5725ef68c4519457aa4ee450f5851c';
		
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




