// app specific configuration
var snowplow_js_file = $('#snowplow_js_file').first().text();
var snowplow_wos_appid = $('#snowplow_appid').first().text();
var snowplow_host_name = $('#snowplow_host').first().text();

var appProtocal = document.location.protocol;
var snowplow_host_url_full = appProtocal + "//" + snowplow_host_name + "/i";

if(snowplow_js_file == undefined || snowplow_js_file == null || snowplow_js_file == '') snowplow_js_file='';
if(snowplow_wos_appid == undefined || snowplow_wos_appid == null || snowplow_wos_appid == '') snowplow_wos_appid='';
if(snowplow_host_name == undefined || snowplow_host_name == null || snowplow_host_name == '') {
	snowplow_host_name='';
	snowplow_host_url_full='';
	snowplow_js_file='';
}

var ANALYTICS_CONFIG = {
  SNOWPLOW_JS_FILE: snowplow_js_file,
  APP_ID: snowplow_wos_appid,  
  SNOWPLOW_HOST_NAME: snowplow_host_name,
  SNOWPLOW_HOST_URL_FULL: snowplow_host_url_full
};

// Snowplow starts plowing 
(function (p, l, o, w, i, n, g) {
  if (!p[i]) {
    p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
    p.GlobalSnowplowNamespace.push(i);

    p[i] = function () {
      (p[i].q = p[i].q || []).push(arguments);
    };

    p[i].q = p[i].q || [];
    n = l.createElement(o);
    g = l.getElementsByTagName(o)[0];
    n.async = 1;
    n.src = w;
    g.parentNode.insertBefore(n, g);
  }
})(window, document, 'script', ANALYTICS_CONFIG.SNOWPLOW_JS_FILE, 'snowplow');

//calling snowplow tracker
function snowplow_tracker_action(eventType,category, action, label, property, value) {	
	window.snowplow('newTracker', 'cf', ANALYTICS_CONFIG.SNOWPLOW_HOST_NAME, {
		  encodeBase64: false, 
		  appId: ANALYTICS_CONFIG.APP_ID,
		  platform: 'web',
		  discoverRootDomain: true,
		  contexts: {
		    gaCookies: true,
		    performanceTiming: true
		  }
	});
	if (eventType == 'trackPageView'){
		if(property != undefined && property != null && property != ''){
			window.snowplow('trackPageView', property);
		}
	} else if (eventType == 'trackStructEvent'){
		window.snowplow('trackStructEvent', category, action, '', property, '', '');
	}
}
//Snowplow stops plowing

// track page view
function trackPage(pageName) {
	//calling end point host asynchronously to check for connection response
	if(ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL != undefined && ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL != '' && ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL != null){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL, true);
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState == 4) {
				if (xhr.status == 200 || xhr.status == 0) {					
					snowplow_tracker_action('trackPageView', '', '', '', pageName, '');
				} else {
					console.error(xhr.statusText);
				}
			}
		};
		xhr.onerror = function (e) {
			console.error(xhr.statusText);
		};
		xhr.send();
	}
}

// track full Structured event
function trackEventFull(category, action, label, property, value) {
	//calling end point host asynchronously to check for connection response
	if(ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL != undefined && ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL != '' && ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL != null){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', ANALYTICS_CONFIG.SNOWPLOW_HOST_URL_FULL, true);
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState == 4) {
				if (xhr.status == 200 || xhr.status == 0) {					
					snowplow_tracker_action('trackStructEvent',category,action,'',property,'');
				} else {
					console.error(xhr.statusText);
				}
			}
		};
		xhr.onerror = function (e) {
			console.error(xhr.statusText);
		};
		xhr.send();
	}	
}



