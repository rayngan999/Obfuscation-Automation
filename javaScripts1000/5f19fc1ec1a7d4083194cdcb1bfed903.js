
function piResponse() {
		piSetCookie('visitor_id519011', '423581054', 3650);
			piSetCookie('visitor_id519011-hash', '10be1b109132165682b572e22999409b3990a729544145aca19a3de5592c9556c4d3562b62cb9ba3103241747ae9b1794ed7cd36', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581054';

				pi.tracker.visitor_id_sign='10be1b109132165682b572e22999409b3990a729544145aca19a3de5592c9556c4d3562b62cb9ba3103241747ae9b1794ed7cd36';
		
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




