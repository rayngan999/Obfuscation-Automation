


<html>
<head>
	<meta name="ius-session" content="31DE71737D90451E88D777B23790BD8F">
	<meta name="robots" content="noindex">
	<script type="text/javascript" src="scripts/ius.xdr.min.js?v=1.70.0.362"></script>
	
	
	
	<script type="text/javascript">

	// Polyfill Date.now for IE
	Date.now = (Date.now || function () {
		return new Date().getTime();
	});

    var intuitFlowId = '';
    var xdrReady = null;
    var receiveMessage = null;
    var metaSessionId = $ ? $("meta[name='ius-session']").attr('content') : '';
    var logger = null;
    try {
      logger = parent && parent.intuit && parent.intuit.ius && parent.intuit.ius.logger ? parent.intuit.ius.logger : null;  
    } catch (err) {}
		
	var getSessionId = function() {
		var _sessionId = '';
		try {
			if($ && $.cookie) {
				_sessionId = $.cookie('ius_session');
			}
			
			if(!_sessionId) {
				_sessionId = metaSessionId || "31DE71737D90451E88D777B23790BD8F";
			}	
		} catch(err) {
			
		}			
		
		return _sessionId;
	}
	
	var receiveMessage = function(event) {
		var data = event.data ? event.data : event.message;
		if (data && (typeof data === 'string') && (data.indexOf("doProfiling=") != -1)) {
			var metaDataStr = data.split("=")[1];
			if(metaDataStr) {
				var obj = JSON.parse(metaDataStr);
				rsProfiling(obj.offeringId, obj.eventType);
			} else {
				rsProfiling(); // rsProfiling should be in scope since parent will only post after the xdrReady postMessage from this frame	
			}			  
	  	}
	};
	
	xdrReady = function() {
		if(parent) {
			// this is a harmless message, thus wildcard allow origin
			parent.postMessage("xdrIframeLoaded", "*");
		}
	};
	
	if (window.addEventListener) {
		window.addEventListener("message", receiveMessage, false);
    } else if (window.attachEvent) {
    	window.attachEvent("onmessage", receiveMessage);
    }
				
	</script>
</head>
<body>
	<script type="text/javascript">
		try {
			if(logger) {
				window.onerror = function xdrErrorHandler(err, url, lineNumber) {
					var errObj = {
						message: err && err.stack || err.message || err,
						name: 'xdr-window-onerror'
					};
					
					var offeringId = (parent && parent.intuit && parent.intuit.ius && parent.intuit.ius.offeringId) || null;
					if (offeringId === 'Intuit.platform.ttdcommerce' && (errObj.message || '').toLowerCase() === 'script error.') {
						// This fires 6000x/hour harmlessly.  See https://github.intuit.com/identity-authn/iux-web/pull/2546
						return;
					}
					var parentWindow = parent.window;
					var parentUrl = '';
					if(parentWindow) { parentUrl = parentWindow.location.href; }
					logger.logError(errObj, offeringId ,'xdr lineNumber=' + lineNumber + ' parentUrl=' + parentUrl);
				}
			}
		}catch(err) {
			// fail silently
		}
	</script>

	
	<script>
		
		var rsProfiling = function(){}
	</script>
	
	
		
		
			
			<iframe id="tm_frame" title="" src="https://pf.intuit.com/fp/tags?js=1&org_id=v60nf4oj&session_id=31DE71737D90451E88D777B23790BD8F&page_id=2&pageid=2"></iframe>
		
	

	<script type="text/javascript">
		$(function() {
			var reProfilingInterval = parseInt('43200000') || 43200000; //12 * 60 * 60  * 1000 =  12 hours in ms

			var offeringId = '';

			try {
				offeringId = parent && parent.intuit && parent.intuit.ius && parent.intuit.ius.offeringId ? parent.intuit.ius.offeringId : null;
			} catch(err) {
				// ignore failure
			}

			setInterval(function() {

				$("#tm_frame").attr("src", $("#tm_frame").attr("src")); // reload iframe

				if(logger) {
					logger.logMessage("Re-profiling device", offeringId, "xdr.html");
				}
			}, reProfilingInterval);
		});
	</script>

	
	
		
			<script>
			
				function updateOrCreateDeviceIdCookie(value) {
					var params;
					if (value == undefined || value === '') {
						params = {a2: true};
					}
					else {
						params = {a1: true, a3: value};
					}
					
					$.getJSON(
						"/ius_did",
						params,
						function(json) {
							if (json != undefined && json.did != undefined) {
								// allow http header to set the cookie, to preserve correct expiry
								try { // try to use rdt to save copies elsewhere
									var rdto = new rdt();	
									rdto.set('did', json.did); 
								} catch(e) {
								}
								xdrReady();
							}
						}
					);
				}
				
				if (typeof window.jQuery === "function") {
					$(document).ready(function() {
						try {
							var rdto = new rdt();
							// retrieve did if available.  set cookie via http in callback
							rdto.get('did', updateOrCreateDeviceIdCookie, 1);
						} catch(err) {
							xdrReady();
						}
					});
				} 
			</script>
		
		
	
	
	
</body>
</html>
