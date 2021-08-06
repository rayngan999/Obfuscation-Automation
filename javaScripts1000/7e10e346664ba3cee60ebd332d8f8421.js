
(function() {
	if(navigator.webdriver) { return; }
	if(!navigator.cookieEnabled) { return; }
var ref = encodeURIComponent((parent !== window) ? document.referrer : document.location);


var l = document.createElement("img");
l.src = "https://idsync.rlcdn.com/425276.gif?partner_uid=2c3f2bed754c11a13e45cbbdbf2ff250"
l.height=0;l.width=0;l.style="display:none; visibility: hidden";
document.body.appendChild(l);


var r = new XMLHttpRequest();
r.withCredentials = true;
var s ="r=" + ref;
if (!(typeof dianomi_tag_params_0x7DC36D8500CC44F28E9647DEEFD3B551 === "undefined")) {
	
	if (dianomi_tag_params_0x7DC36D8500CC44F28E9647DEEFD3B551["can_programmatic"]) {
		var b = document.createElement("img");
		b.src = "https://x.bidswitch.net/check_uuid/https:%2F%2Fdata.dianomi.com%2Ffrontend%2Fbidswitch%3Fgdpr=$%7BGDPR%7D&gdpr_consent=$%7BGDPR_CONSENT%7D&us_privacy=$%7BUS_PRIVACY%7D&uid=$%7BBSW_UUID%7D&cookie_age=$%7BCOOKIE_AGE%7D&username=2c3f2bed754c11a13e45cbbdbf2ff250";
		b.height=0;b.width=0;b.style="display:none; visibility: hidden";
		document.body.appendChild(b);
	}
	

	for (var property in dianomi_tag_params_0x7DC36D8500CC44F28E9647DEEFD3B551) {
		if (dianomi_tag_params_0x7DC36D8500CC44F28E9647DEEFD3B551.hasOwnProperty(property)  && dianomi_tag_params_0x7DC36D8500CC44F28E9647DEEFD3B551[property] !== null) {
			s += "&" + property + "=" + encodeURIComponent(dianomi_tag_params_0x7DC36D8500CC44F28E9647DEEFD3B551[property]);
		}
	}
}

r.open("GET", "https://data.dianomi.com/frontend/pixel?" + s, true);
r.send();
})();
