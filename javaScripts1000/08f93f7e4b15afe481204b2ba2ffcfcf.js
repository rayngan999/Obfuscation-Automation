
(function() {
	function autoResize(mainDoc, id){
	    var newheight;
	    var newwidth;

	    if(document.getElementById){
	        newheight = mainDoc.getElementById(id).contentWindow.document.body.scrollHeight;
	        newwidth = mainDoc.getElementById(id).contentWindow.document.body.scrollWidth;
	    }

	    document.getElementById(id).height = (newheight) + "px";
	    document.getElementById(id).width = (newwidth) + "px";
	}
	var runIFrameScripts = function(code, containerEl, adPositionId) {
	  var b = document.createElement('iframe');
	  var mainDoc = document;
	  b.id = "pub_ad_iframe_pos_" + adPositionId;
	  b.width = "0px";
	  b.height = "0px";
	  b.calledBefore = false;
	  b.onload = function() {
		  if(b.calledBefore == true) {
			b.onload = null;
			return;
		  }
		  b.calledBefore = true;
		  b.contentWindow.document.open('text/html');
		  b.contentWindow.document.write('<html><head></head><body style="margin:0px">');
		  b.contentWindow.document.write(code);
		  b.contentWindow.document.write('</body></html>');
		  b.contentWindow.document.close();
		  b.contentWindow.document.onreadystatechange = function(e) {
			autoResize(mainDoc, b.id);
		};
	  };
	  containerEl.appendChild(b);
	};
	var runScripts = function(code, containerEl, adPositionId) {
	  containerEl.innerHTML = "";
	  var b = document.createElement('div');
	  b.id = 'scripts' + adPositionId;
	  b.innerHTML = code; // this can include stray <div>s and stuff
	  containerEl.appendChild(b);
	  var c = document.querySelectorAll('div#' + b.id + ' > script');
	  for (var i=0; i<c.length; i++) (function(ii) {
	    if (c[ii].innerHTML === '' && c[ii].src !== '') {
	      var s = document.createElement('script');
	      s.src = c[ii].src;
	      c[ii].parentNode.appendChild(s);
	    }
	    eval(c[ii].innerHTML);
	  })(i);
	};
	var func = function() {
		var pubAdData = [{"AdPositionId":101,"AdCode":"\u003cscript id=\"mNCC\" language=\"javascript\"\u003e\r\n    medianet_width = \"300\";\r\n    medianet_height = \"250\";\r\n    medianet_crid = \"990521347\";\r\n    medianet_versionId = \"3111299\"; \r\n  \u003c/script\u003e\r\n\u003cscript src=\"//contextual.media.net/nmedianet.js?cid=8CULH55V2\"\u003e\u003c/script\u003e"},{"AdPositionId":102,"AdCode":"\u003cscript id=\"mNCC\" language=\"javascript\"\u003e\r\n    medianet_width = \"300\";\r\n    medianet_height = \"250\";\r\n    medianet_crid = \"990521347\";\r\n    medianet_versionId = \"3111299\"; \r\n  \u003c/script\u003e\r\n\u003cscript src=\"//contextual.media.net/nmedianet.js?cid=8CULH55V2\"\u003e\u003c/script\u003e"}];

		for (var i=0; i<pubAdData.length; i++) {
			var el = document.getElementById("ezoic-pub-ad-placeholder-"+pubAdData[i].AdPositionId);
			if (el !== null) {
				if (pubAdData[i].AdCode.indexOf("show_ads.js") > -1) {
					runIFrameScripts(pubAdData[i].AdCode, el, pubAdData[i].AdPositionId);
				} else {
					runScripts(pubAdData[i].AdCode, el, pubAdData[i].AdPositionId);
				}

			}
		}
	}
	if(typeof ezpaq == "undefined") {
		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			typeof(func) === 'function' && func();
		} else {
			document.onreadystatechange = function() {
				if (document.readyState === 'interactive') {
					typeof(func) === 'function' && func();
				}
			};
		}
	}
})();
