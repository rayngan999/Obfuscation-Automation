/**
 * iFrame Handler Version 1
 * - control iFrame height
 * - scroll to iFrame top position
 * - submit iFrame parent
 * This script must embedded in the parent website
 * @author DRID <development@drid.de>
 * @copyright 2019-2020 DRID Kommunikation und Design GmbH
 */

if (!window.cmpiFrameWatcher) {

	window.cmpiFrameParent = function() {
		'use strict';

		// Declare vars
		var iFrames = [];

		// Declare public methods
		this.updateIFrames = getIFrames;

		init();

		/**
		 * Init
		 */
		function init() {
			getIFrames();

			// Add event listeners
			window.addEventListener('message', processPostMessage);
			window.addEventListener('scroll', watchIFrames);

			watchIFrames();
		}

		/**
		 * Get list or extend of all campaign iFrames
		 */
		function getIFrames() {
			var objs = document.getElementsByTagName('iframe');
			var id;
			for (var i=0, len=objs.length; i<len; i++) {
				id = objs[i].getAttribute('id');
				if (id && (id.indexOf('rndIfrSurvey') > -1 || id.indexOf('cmpIframe') > -1)) {
					var found = false;
					for (var j=0; j<iFrames.length; j++) {
						if (iFrames[j].obj === objs[i]) {
							found = true;
							break;
						}
					}

					if (!found) {
						// iFrame is not in list: add it to the list
						iFrames.push({
							obj: objs[i],
							registered: false,
							loaded: false
						});
					}
				}
			}
		}

		/**
		 * Process iFrame post message
		 * @param object event
		 */
		 function processPostMessage(event) {
			// Check if sender is a valid campaign iFrame
  			var iFrame;
  			for (var i=0, len=iFrames.length; i<len; i++) {
  				if (iFrames[i].obj.contentWindow === event.source) {
  					iFrame = iFrames[i];
  					break;
  				}
  			}
  			if (!iFrame) {
 				// Sender is invalid
  	 			return;
  	 		}
			if (typeof(event.data) !== 'string') {
				// Invalid data format
				return;
			}

 	 		var data = JSON.parse(event.data);

			// Register iFrame (iFrame is ready to receive messages)
			// Registration is only needed when iFrame content should be loaded when it is in visible area
			// Otherwise the iFrame inits itself
			if (data.type === 'registerIFrame') {
				iFrame.registered = true;
				// Tell Iframe that registration was successful
				iFrame.obj.contentWindow.postMessage(JSON.stringify({
					type: 'registerIFrameHandshake'
				}), '*');

			// Set tracking parameters
			} else if (data.type === 'trakkFrame') {
	 			if (typeof(window.dataLayer) !== 'undefined') {
	 				window.dataLayer.push(data.message);
	 			}

			// Update iFrame height
	 		} else if (data.type === 'updateFrameHeight') {
	 			iFrame.obj.style.height = data.height + 'px';
	 			iFrame.obj.style.overflow = 'hidden';

			// Scroll to iFrame top
	 		} else if (data.type === 'scrollToIFrameTop') {
	 			window.scrollTo(0, getOffsetTop(iFrame.obj));

			// Scroll to position (top = iFrameTop)
	 		} else if (data.type === 'scrollTo') {
	 			scrollIFrameTo(getOffsetTop(iFrame.obj) + data.scrollTop, 250);

			// Store iFrame's parent URL
	 		} else if (data.type === 'setIframeParent') {
	 			var xhttp = new XMLHttpRequest();
	 			xhttp.open('GET', data.apiUrl + '?id=' + data.iFrameId + '&url=' + encodeURIComponent(top.location.href), true);
	 			xhttp.send();

			// Remove AMP on non-AMP sites
	 		} else if (data.type === 'removeAMP') {
	 			var p = iFrame.obj.parentNode;
	 			if (p.nodeName === 'P') {
	 				p = p.parentNode;
	 			}
	 			var ampButtonMore = p.querySelector('div[aria-label="Mehr anzeigen"]');
	 			if (ampButtonMore !== null) {
	 				ampButtonMore.parentNode.removeChild(ampButtonMore);
	 			}
	 		}
	 	}

		/**
		 * Scroll body animated to passed position
		 * @param number yPos - position
		 * @param number speed - scroll speed
		 */
		function scrollIFrameTo(yPos, speed) {
			var scrollY = window.pageYOffset;
		    var currentTime	= 0;

		    // Min time 0.1, max time 0.8 seconds
		    var time = Math.max(0.1, Math.min(Math.abs(scrollY - yPos) / speed, 0.8));

		    // Add animation loop
		    function tick() {
		        currentTime += 1 / 60;

		        var p = currentTime / time;
		        var t = (-0.5 * (Math.cos(Math.PI * p) - 1));

		        if (p < 1) {
					window.scrollTo(0, scrollY + ((yPos - scrollY) * t));
		            window.requestAnimationFrame(tick);
		        } else {
		            window.scrollTo(0, yPos);
					window.cancelAnimationFrame(tick);
		        }
		    }

		    // Call it once to get started
		    tick();
		}

		/**
		 * Watch all iFrames if they are in visible area
		 */
		function watchIFrames() {
			var windowTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
			var windowBottom = windowTop + window.innerHeight;
			var iFrameTop;
			var loadedIFrames = 0;

			for (var i=0, len=iFrames.length; i<len; i++) {
				// Init iFrame only if it has registered here by postMessage
				if (iFrames[i].registered && !iFrames[i].loaded) {
					iFrameTop = getOffsetTop(iFrames[i].obj);

					if (iFrameTop < windowBottom) {
						// iFrame is in visible area: Init iFrame
						iFrames[i].obj.contentWindow.postMessage(JSON.stringify({
							type: 'init'
						}), '*');
						iFrames[i].loaded = true;
					}
				}
				if (iFrames[i].loaded) {
					loadedIFrames ++;
				}
			}

			if (loadedIFrames >= iFrames.length) {
				// No iFrames to watch
				window.removeEventListener('scroll', watchIFrames);
			}
		}

		/**
		 * Get top position of element
		 * @param object obj
		 * @return int
		 */
		function getOffsetTop(obj) {
			var y = 0;
			do {
				y += obj.offsetTop || 0;
				obj = obj.offsetParent;
			} while(obj);
			return y;
		}
	};

	window.cmpiFrameWatcher = new window.cmpiFrameParent();
} else {
	window.cmpiFrameWatcher.updateIFrames();
}
