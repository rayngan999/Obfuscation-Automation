
function piResponse() {
		piSetCookie('visitor_id519011', '423581074', 3650);
			piSetCookie('visitor_id519011-hash', '0c1dcfe191076c80a82428521030e7c2cc4d68f582a1e3dbc4d44572ae65e41b1e134a4bc14923116a988d4cf29dc97000073ad9', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "engage.valley.com/analytics?";
		pi.tracker.visitor_id='423581074';

				pi.tracker.visitor_id_sign='0c1dcfe191076c80a82428521030e7c2cc4d68f582a1e3dbc4d44572ae65e41b1e134a4bc14923116a988d4cf29dc97000073ad9';
		
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




