


<html>
<head>
	<meta name="ius-session" content="49C3904BE4BE4556807A589EF6328022">
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
				_sessionId = metaSessionId || "49C3904BE4BE4556807A589EF6328022";
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
	
	
		
			<script>
				var threatmetrix=threatmetrix||{};threatmetrix.version=3,threatmetrix.create_url=function(t,e,r,n,a){function i(){return Math.floor(2742745743359*Math.random())}function c(){return o(i())}function o(t){return(t+78364164096).toString(36)}var m=i(),u=i(),l=885187064159;u=((u=u-u%256+threatmetrix.version)+m)%2742745743359,l=(l+m)%2742745743359;var s="https://"+t+"/"+(m=c()+o(m))+e,h=[(u=o(l)+o(u))+"="+r,c()+c()+"="+n];return void 0!==a&&a.length>0&&h.push(c()+c()+"="+a),s+"?"+h.join("&")},threatmetrix.beacon=function(t,e,r,n){var a="turn:aa.online-metrix.net?transport=",i="1:"+e+":"+r,c={iceServers:[{urls:a+"tcp",username:i,credential:r},{urls:a+"udp",username:i,credential:r}]};try{var o=new RTCPeerConnection(c);o.createDataChannel(Math.random().toString());var m=function(){},u=function(t){o.setLocalDescription(t,m,m)};"undefined"==typeof Promise||o.createOffer.length>0?o.createOffer(u,m):o.createOffer().then(u,m)}catch(t){}},threatmetrix.load_tags=function(t,e,r,n){threatmetrix.beacon(t,e,r,n);var a=document.getElementsByTagName("head").item(0),i=document.createElement("script");i.id="tmx_tags_js",i.setAttribute("type","text/javascript");var c=threatmetrix.create_url(t,".js",e,r,n);i.setAttribute("src",c),threatmetrix.set_csp_nonce(i),a.appendChild(i)},threatmetrix.load_iframe_tags=function(t,e,r,n){threatmetrix.beacon(t,e,r,n);var a=threatmetrix.create_url(t,".htm",e,r,n),i=document.createElement("iframe");i.title="empty",i.setAttribute("aria-disabled","true"),i.width="0",i.height="0",i.setAttribute("style","color:rgba(0,0,0,0); float:left; position:absolute; top:-200; left:-200; border:0px"),i.setAttribute("src",a),document.body.appendChild(i)},threatmetrix.csp_nonce=null,threatmetrix.register_csp_nonce=function(t){if(void 0!==t.currentScript&&null!==t.currentScript){var e=t.currentScript.getAttribute("nonce");void 0!==e&&null!==e&&""!==e?threatmetrix.csp_nonce=e:void 0!==t.currentScript.nonce&&null!==t.currentScript.nonce&&""!==t.currentScript.nonce&&(threatmetrix.csp_nonce=t.currentScript.nonce)}},threatmetrix.set_csp_nonce=function(t){null!==threatmetrix.csp_nonce&&(t.setAttribute("nonce",threatmetrix.csp_nonce),t.getAttribute("nonce")!==threatmetrix.csp_nonce&&(t.nonce=threatmetrix.csp_nonce))},threatmetrix.cleanup=function(){for(;null!==(hp_frame=document.getElementById("tdz_ifrm"));)hp_frame.parentElement.removeChild(hp_frame);for(;null!==(tmx_frame=document.getElementById("tmx_tags_iframe"));)tmx_frame.parentElement.removeChild(tmx_frame);for(;null!==(tmx_script=document.getElementById("tmx_tags_js"));)tmx_script.parentElement.removeChild(tmx_script)},threatmetrix.profile=function(t,e,r,n){threatmetrix.cleanup(),threatmetrix.register_csp_nonce(document),threatmetrix.load_tags(t,e,r,n)},threatmetrix.profile_iframe=function(t,e,r,n){threatmetrix.cleanup(),threatmetrix.register_csp_nonce(document),threatmetrix.load_iframe_tags(t,e,r,n)};
				function tmx_profiling_complete(session_id) {
					// FIXME: remove unless in debug mode
					console.log("tmx session_id "+session_id); 
				}
				var pageId = "3"; // this tells TMX/RSS which script version we're using
				threatmetrix.profile("pf.intuit.com", "v60nf4oj", "49C3904BE4BE4556807A589EF6328022", pageId);
			</script>
		
		
	

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
