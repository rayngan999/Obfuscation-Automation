
function piResponse() {
		piSetCookie('visitor_id302391', '257331602', 3650);
			piSetCookie('visitor_id302391-hash', '659fea2756968a949ec6b1f7fccb76f3910bb2cfe675b1d593495d4a7ec62c4cd2bcae2d5157a12c6e855be95be02cbea8763779', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "mail.h-t.co.jp/analytics?";
		pi.tracker.visitor_id='257331602';

				pi.tracker.visitor_id_sign='659fea2756968a949ec6b1f7fccb76f3910bb2cfe675b1d593495d4a7ec62c4cd2bcae2d5157a12c6e855be95be02cbea8763779';
		
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




