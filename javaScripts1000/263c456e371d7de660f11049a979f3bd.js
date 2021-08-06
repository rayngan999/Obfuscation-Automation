var innity_adZoneAsync = innity_adZoneAsync || {};
innity_adZoneAsync.q = innity_adZoneAsync.q || [];
/**
* Command queue that functions will execute once library is loaded
* @param {function} cmd Annoymous function to execute
* @alias module: innity_adZoneAsync.q.push
*/
innity_adZoneAsync.q.push = function (cmd) {
	if ((typeof cmd === "undefined" ? "undefined" : typeof cmd === "function")) {
		try {
			cmd.call();
		} catch (e) {
			this.logger(e.message);
		}
	}
}
// Function: build ad zone into friendly iframe
innity_adZoneAsync.display = function (pub, zone, settings) {
	var data = {}, html = "";
	data.width = data.height = 1;
	settings.width && "*" != settings.width && (data.width = settings.width);
	settings.height && "*" != settings.height && (data.height = settings.height);
	html = "%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Ctitle%3E%3C%2Ftitle%3E%3Cstyle%3Ebody%7Bmargin%3A0px%3B%7D%3C%2Fstyle%3E%3Cscript%20type%3D%22text%2Fjavascript%22%20charset%3D%22UTF-8%22%20src%3D%22%2F%2Fcdn.innity.net%2Fadmanager.js%22%3E%3C%2Fscript%3E%3C%2Fhead%3E%3Cbody%3E";
	if(typeof settings.custom_script != "undefined"){
		for(i = 0; i < settings.custom_script.length; i++){
			html += encodeURIComponent("<script src=\"" + settings.custom_script[i] + "\"></script>");
		}
	}
	html += "%3Cscript%20type%3D%22text%2Fjavascript%22%20charset%3D%22UTF-8%22%3E";
	html += settings.innity_pvu ? "innity_pvu%20%3D%20%22" + encodeURIComponent(settings.innity_pvu) + "%22%3B" : "";
	html += settings.innity_pcu ? "innity_pcu%20%3D%20%22" + encodeURIComponent(settings.innity_pcu) + "%22%3B" : "";
	html += settings.innity_peu ? "innity_peu%20%3D%20%22" + encodeURIComponent(settings.innity_peu) + "%22%3B" : "";
	html += settings.innity_mode ? "innity_mode%20%3D%20%22" + encodeURIComponent(settings.innity_mode) + "%22%3B" : "";
	html += settings.innity_balloon_pos ? "innity_balloon_pos%20%3D%20%22" + encodeURIComponent(settings.innity_balloon_pos) + "%22%3B" : "";
	html += "new%20innity_adZone(%22" + pub + "%22%2C%20%22" + zone + "%22%2C%20%7B%22async%22%3A%20true";
	html += settings.origin ? "%2C%20%22origin%22%3A%20%22" + settings.origin + "%22" : "";
	html += settings.channel ? "%2C%20%22channel%22%3A%20%22" + settings.channel + "%22" : "";
	html += settings.width ? "%2C%20%22width%22%3A%20%22" + settings.width + "%22" : "";
	html += settings.height ? "%2C%20%22height%22%3A%20%22" + settings.height + "%22" : "";
	html += "%7D)%3B%3C%2Fscript%3E";
	html += "%3C%2Fbody%3E%3C%2Fhtml%3E";
	data.src = html;
	data.el = settings.target;
	innity_append_iframe(data);
}
// Function: append friendly iframe, used by ad script
function innity_append_iframe(data) {
	/*	
		src: encoded (encodeURIComponent) HTML content
		id: iFrame ID
		width: iFrame width
		height: iFrame height
		el: element to append
	*/
	if (typeof data == "object" && data.src) {
		var iframe = document.createElement("iframe");
		iframe.id = data.zone ? "frame-innity-" + Math.random().toString(16).substr(2) + "/" + data.zone : "frame-innity-" + Math.random().toString(16).substr(2);
		iframe.src = "javascript:'<html><body style=\"background:transparent\"></body></html>'";
		iframe.width = data.width ? data.width : 0;
		iframe.height = data.height ? data.height : 0;
		iframe.style.width = data.width ? data.width + "px" : "0px";
		iframe.style.height = data.height ? data.height + "px" : "0px";
		iframe.frameBorder = iframe.marginWidth = iframe.marginHeight = 0;
		iframe.scrolling = "no";
		iframe.style.border = "0px none";
		iframe.style.display = "block";
		try {
			if (data.el) {
				document.getElementById(data.el).appendChild(iframe);
			} else {
				document.getElementsByTagName("body")[0].appendChild(iframe);
			}
			var doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
			doc.open();
			doc.write(decodeURIComponent(data.src));
			doc.close();
			return iframe;
		} catch (e) {}
	}
	return false;
}
// Function: write an iframe, used by ad script
function innity_write_iframe(url, settings) {
	document.write('<ifr' + 'ame' + ' id="frame-innity-' + Math.random().toString(16).substr(2) + '"' + ' width="' + settings.width + '" height="' + settings.height + '" frameborder="0" src="' + url + '" marginwidth="0" marginheight="0" vspace="0" hspace="0"' + ' allowtransparency="true" scrolling="no"></ifr' + 'ame>');
}
// Run queue
for (var i = 0; i < innity_adZoneAsync.q.length; i++) {
	if (typeof innity_adZoneAsync.q[i].called === "undefined") {
		try {
			innity_adZoneAsync.q[i].call();
			innity_adZoneAsync.q[i].called = true;
		} catch (e) {}
	}
}