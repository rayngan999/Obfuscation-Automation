(function() {
var FIELDS = {"isUsingCxense":true,"isUsingEnreach":false,"useCxCintCync":true,"allowDebugRedirect":false,"syncTimeout":0,"syncs":{"adform":true,"ddp":true,"appnexus":true,"smart":true,"pubmatic":"30600"},"publisherJs":"","siteJs":"","cintCampId":""};
var SITE = {"cxSiteId":"1136305141024894320"};
function loadScript(src) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = 'async';
	script.src = src;
	var firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
}

function loadCx() {
    function doSync() {
    	var syncArr = ['sync'];
    	for(var name in FIELDS.syncs) {
    	    var val = FIELDS.syncs[name];
    		if(val) {
    			syncArr.push(typeof val === 'string' ? { partner: name, customerId: val} : name);
    		}
    	}
    	if(syncArr.length > 1) {
    		cX.callQueue.push(syncArr);
    	}
    	if(FIELDS.useCxCintCync) {
    	    var campId = FIELDS.cintCampId;
    	    if(!campId) {
    	        campId = location.hostname.slice(-3) === '.gr' ? '502520001' : '502520002';
    	    }
    	    cX.callQueue.push(['cint','0037', campId]);
    	}
    }
    
	window.cX = window.cX || {};
	cX.callQueue = cX.callQueue || [];
	cX.callQueue.push(['setSiteId', SITE.cxSiteId]);
	cX.callQueue.push(['sendPageViewEvent']);
	if(FIELDS.syncTimeout) {
	    setTimeout(doSync, FIELDS.syncTimeout);
	} else {
	    doSync();
	}
	loadScript('//cdn.cxense.com/cx.js');
}

function loadEnreach() {
	loadScript('//code3.adtlgc.com/js/relevant_init.js');
}

var redirectTo;

if(FIELDS.allowDebugRedirect) {
	redirectTo = (/relevant-debug-redirect=(.*)/.exec(location.toString()) || [])[1];
}
if(redirectTo) {
	loadScript(redirectTo);
} else {
	if (FIELDS.publisherJs) {
		eval(FIELDS.publisherJs);
	}
	if (FIELDS.siteJs) {
		eval(FIELDS.siteJs);
	}
	if (FIELDS.isUsingCxense) {
		loadCx();
	}
	if (FIELDS.isUsingEnreach) {
		loadEnreach();
	}
}
})();