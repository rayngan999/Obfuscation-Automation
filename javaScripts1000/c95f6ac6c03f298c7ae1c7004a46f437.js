
function piResponse() {
		piSetCookie('visitor_id519011', '423581064', 3650);
			piSetCookie('visitor_id519011-hash', '29132668c9c699213b1efaeb41d30df7093162b46949b04e8a6def20e2ae795e1b39c95d29b8ae51095bf02f4b57ae2fdd5efe9f', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581064';

				pi.tracker.visitor_id_sign='29132668c9c699213b1efaeb41d30df7093162b46949b04e8a6def20e2ae795e1b39c95d29b8ae51095bf02f4b57ae2fdd5efe9f';
		
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




