
var TWAGORAINARTICLE=TWAGORAINARTICLE||function(){
			
	var getHTScriptElement = function(){
		var hTClass = 'pa-ht-class';
		if (document.currentScript)
			return document.currentScript;
		else {
			
			var scripts = document.getElementsByTagName('script');
			var currentHTag = 'paht.tech/c/uaenews.net.js'; 
			var sl = scripts.length;
			for (var s=0; s<sl; s++){
				if ( (scripts[s].src.indexOf(currentHTag) !== -1) && !scripts[s].classList.contains(hTClass)){
					scripts[s].classList.add(hTClass);
					break;
				}
			}

			return scripts[s];
		}
	}
    
	var getQueryString = function(script){
		var queryString = script.src.replace(/^[^\?]+\??/,'');
		return '?'+queryString;
	}
    
	var getParameterByName = function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		try {
			return decodeURIComponent(results[2].replace(/\+/g, ' '));
		}catch(err){
			return null;
		}
	}
            
	var getPartnerSCOfromHTUrl = function(currentScript){
		var schain = null;
		var currentHTScript = currentScript;
		var qS = getQueryString(currentHTScript);
		if (qS) schain = getParameterByName('schain',qS);
		
		return schain;

	}
			
			
	var config = {"site_name":"uaenews.net","rules":[{"name":"taboola widget","priority":3,"type":"Taboola","product":{"Taboola":{"name":"uaenewsmena-p18769491","tags":[{"selector":"div.large-12.medium-12.columns.share_icon","position":"after","widgets":[{"widgetType":"hybrid","mode":"alternating-uaenews","containerId":"taboola-alternating-below-article","placement":"Alternating Below Article"}]}],"pageLevelTracking":{"enabled":true}}}},{"name":"inarticle pages desktop","priority":3,"type":"Magic","product":{"magic":{"enabled":true,"formats":{"inarticle":{"pmp":{"paragraphLimit":4,"placementId":"18769490","probability":0,"tagNames":["p","br","div"],"selectorType":"querySelector","selectorName":"div:nth-child(1) > div.detail_text > div","isLight":true,"flipQuizEnabled":true},"direct":{"paragraphLimit":4,"placementId":"","probability":0,"tagNames":["p","br","div"],"selectorType":"querySelector","selectorName":"div:nth-child(1) > div.detail_text > div"}},"vast":{"pmp":{"paragraphLimit":4,"placementId":"\/\/ads.stickyadstv.com\/vast\/vpaid-adapter\/11073569","probability":100,"tagNames":["p","br","div"],"selectorType":"querySelector","selectorName":"div:nth-child(1) > div.detail_text > div"},"direct":{"paragraphLimit":4,"placementId":"","probability":0,"tagNames":["p","br","div"],"selectorType":"class","selectorName":"SELECTOR"}}},"rulePassback":"<!-- PA Ad Tag - uaenews.net_inarticle-adtag_300x250 <- DO NOT MODIFY --><script src=\"\/\/ads.projectagoraservices.com\/?id=9735\" type=\"text\/javascript\"><\/script><!-- End PA Ad Tag -->"}},"targeting":{"device_targeting":"desktop"}},{"name":"inarticle pages mobile","priority":3,"type":"Magic","product":{"magic":{"enabled":true,"formats":{"inarticle":{"pmp":{"paragraphLimit":3,"placementId":"18769490","probability":0,"tagNames":["p","br","div"],"selectorType":"querySelector","selectorName":"div:nth-child(1) > div.detail_text > div","isLight":true,"socialCardsEnabled":true,"flipQuizEnabled":true},"direct":{"paragraphLimit":3,"placementId":"","probability":0,"tagNames":["p","br","div"],"selectorType":"class","selectorName":"SELECTOR"}},"vast":{"pmp":{"paragraphLimit":3,"placementId":"\/\/ads.stickyadstv.com\/vast\/vpaid-adapter\/11073569","probability":100,"tagNames":["p","br","div"],"selectorType":"querySelector","selectorName":"div:nth-child(1) > div.detail_text > div"},"direct":{"paragraphLimit":3,"placementId":"","probability":0,"tagNames":["p","br","div"],"selectorType":"class","selectorName":"SELECTOR"}}},"rulePassback":"<!-- PA Ad Tag - uaenews.net_inarticle-adtag_300x250 <- DO NOT MODIFY --><script src=\"\/\/ads.projectagoraservices.com\/?id=9735\" type=\"text\/javascript\"><\/script><!-- End PA Ad Tag -->"}},"targeting":{"device_targeting":"mobile"}}],"sco":{"paSellerId":"104791","paOwns":"Operated Only"}};

	var currentHTScript = getHTScriptElement();

	return {
		getConfig:function(){return config;},
		getPartnersSCO: function(){return getPartnerSCOfromHTUrl(currentHTScript);}
	}

}();

!function(e,t,a){var n,r=e.getElementsByTagName(t)[0];e.getElementById("pa-tag")||((n=e.createElement(t)).id="pa-tag",n.src="//aghtag.tech/libs/projectagora.min.js",r.parentNode.insertBefore(n,r))}(document,"script");
			