(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":2756,"name":"Consequence Media | The Hard Times","cookie_name":"bounceClientVisit2756","domain":"thehardtimes.net","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":0,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"gbi_enabled":1,"gbi":{"rblocks":null},"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains"}]]},"category":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"exactly","prop2":"","prop3":"","val":""}]]},"gallery":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains"}]]},"home":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"exactly","prop2":"","prop3":"","val":"thehardtimes.net"}]]}},"els":{"encore":".post-content, div#overflow-container.overflow-container","encoretest":".content-container","endcap":"div.post-content","masthead":"#above-main, div#overflow-container.overflow-container"},"vars":[{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    function check() {\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\n        var slots = window.googletag && typeof googletag.pubads == 'function' && typeof googletag.pubads().getSlots == 'function'? googletag.pubads().getSlots() : [];\n        var numSlots = slots.length;\n        for (var i = 0; i < numSlots; i++) {\n            var slotInfo = slots[i] && typeof slots[i].getResponseInformation == 'function'? slots[i].getResponseInformation() : false;\n            if (slotInfo && slotInfo.lineItemId) {\n                bouncex.dfp_loaded = true;\n                if (bouncex.website.gbi.rblocks && bouncex.website.gbi.rblocks.indexOf(slotInfo.lineItemId) > -1) {\n                    return 'sponsor';\n                }\n            }\n        }\n        if (bouncex.dfp_loaded) {\n            return 'allow';\n        }\n        return 'not_ready';\n    }\n    if (!bouncex.website.gbi_enabled) {\n        return 'disabled';\n    } else if (bouncex.dfp_loaded) {\n        return null;\n    } else if (window.googletag && googletag.apiReady && googletag.pubadsReady) {\n        return check();\n    }\n    return 'fallback';\n})()","trigger":"pageload"},{"name":"video_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"document.querySelectorAll('.cm_video_content_video_element').length > 0;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":""},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"spa":0,"spatm":1,"preinit_cjs":"","mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":""},"pde":true,"fme":false,"fmx":"","sdk":{"android":false,"ios":false,"javascript":false}}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.assets = {"creativesBaseStyles":"d63dbc50"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/ijs_all_modules_cjs_min_f0af7f2eb5df5e03c3dd565f9ccccd5a.js');

		var scriptAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-adcb","Value":"bouncex.dg.getAdsOptStatus"}];
		if (scriptAttrs) {
			for (var i = 0; i < scriptAttrs.length; i++) {
				script.setAttribute(scriptAttrs[i].Key, scriptAttrs[i].Value);
			}
		}

		document.body.appendChild(script);
	}

  
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();