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
		bouncex.website = {"id":3211,"name":"Informa/UBM â Infrastructure","cookie_name":"bounceClientVisit3211","domain":"informa.com","ct":"multi_cookie","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":1,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":2,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"gbi_enabled":0,"gbi":{"rblocks":null},"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.main-articles-container').length > 0;"}],[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.start-slideshow-button').length === 0;"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.category-header').length > 0;"}]]},"gallery":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.start-slideshow-button').length > 0;"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.home-featured-media-wrapper').length > 0;"}]]},"search":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('#section-input-search').length > 0;"}]]}},"els":{"NavigationBar":"header"},"vars":[{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n  if (jQuery('.main-articles-container').length > 0) {\n    return 'article';\n  } else if (jQuery('.category-header').length > 0) {\n    return 'category';\n  } else if (jQuery('#section-input-search').length > 0) {\n    return 'search';\n  } else if (jQuery('.start-slideshow-button').length > 0) {\n    return 'gallery';\n  } else if (jQuery('.home-featured-media-wrapper').length > 0) {\n    return 'home';\n  }\n})();","trigger":"pageload"},{"name":"logged_in","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.username-container-wrapper').length > 0;","trigger":"pageload"},{"name":"ever_logged_in","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.logged_in || null;","trigger":"pageload"},{"name":"modal_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.ctools-modal-wrapper').length > 0;","trigger":"pageload"},{"name":"ad_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"Number(jQuery('div[id*=google_ads_iframe]:eq(0) iframe').css('width').replace(/[^0-9]/g, '')) > 1;","trigger":"pageload"},{"name":"submitted_onsite","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"jQuery('.ctools-modal-wrapper').text().indexOf('Thanks for subscribing') > -1 || null;","trigger":"pageload"},{"name":"article_name","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.big-article__top h1[itemprop=headline]:eq(0)').text() || false;","trigger":"pageload"},{"name":"sponsored_content","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('article.sponsored-article').length > 0;","trigger":"pageload"},{"name":"article_type_gallery","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.start-slideshow-button').length > 0;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":1,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":""},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"spa":0,"spatm":1,"preinit_cjs":"","mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":""},"pde":true,"fme":false,"fmx":"","sdk":{"android":false,"ios":false,"javascript":false}}
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

		var scriptAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"}];
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