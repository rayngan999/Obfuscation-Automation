
function piResponse() {
		piSetCookie('visitor_id519011', '423581066', 3650);
			piSetCookie('visitor_id519011-hash', '67c3bd3dd63e1ba2f2ebd4ccbada090150b48078dc51a111fb9ac4e62c60ce690da8272aa2fc217e51da1400598c38462ab1b397', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581066';

				pi.tracker.visitor_id_sign='67c3bd3dd63e1ba2f2ebd4ccbada090150b48078dc51a111fb9ac4e62c60ce690da8272aa2fc217e51da1400598c38462ab1b397';
		
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




