(function () {
	"use strict";

	//Copied this from remspect so we could make remspect decisions in here.
	var isInControlOfTest = function(factorName) {
		var variationForFactor = getVariationForFactor(factorName);
		return !variationForFactor || variationForFactor === 'control';
	};
	
	var getVariationForFactor = function(factorName) {
		var factorsToVariations = {};

		var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)ssoe_debug\s*=\s*([^;]*).*$)|^.*$/, "$1");
		var ssoeRegex = /([^-]+)-([^\.]+)\.?/g;
		var match = ssoeRegex.exec(cookieValue);
		while (match !== null) {

			var factor = match[1];
			var variation = match[2];

			factorsToVariations[factor] = variation;

			match = ssoeRegex.exec(cookieValue);
		}
		return factorsToVariations[factorName];
	};
	
	//'abc/def/ghi.controller': 'd646a69d4b' -> 'abc/def/ghi.controller': '/js/abc/def/ghi-d646a69d4b.controller'
	function convertAndAddPathEntries(encodedMap, destinationMap, hostPrefix) {
		if (hostPrefix.indexOf("/js/") > -1) {
			hostPrefix = hostPrefix.substring(0, hostPrefix.indexOf("/js/"));
		}
		
		var keys = Object.keys(encodedMap);
		for (var i=0; i < keys.length; i++) {
			var key = keys[i];
			var hash = encodedMap[key];
			var mappedPath = null;
			var dotIndex = key.indexOf(".");
			if (dotIndex === -1) {
				//util/abc -> /js/util/abc-123123
				mappedPath = hostPrefix + "/js/" + key + "-" + hash;
			}
			else {
				//util/abc.directive -> /js/util/abc-123123.directive
				var firstPartOfLookupKey = key.substring(0, dotIndex);
				var lastPartOfLookupKey = key.substring(dotIndex);
				
				mappedPath = hostPrefix + "/js/" + firstPartOfLookupKey + "-" + hash + lastPartOfLookupKey;
			}
			destinationMap[key] = mappedPath;
		}
	}
	
	//files that do not return the access-control-allow-origin header will freak out if you add crossorigin=anonymous attr
	var libsWithoutAccessControlHeader = [
		"lib/braintree/apple-pay",
		"lib/braintree/client",
		"lib/braintree/google-pay",
		"lib/freshchat",
		"lib/listrak",
		"lib/google/api",
		"lib/google/pay",
		"lib/google/translate",
		"lib/stripe", //probably not used now
		"stripe"
	];
	
	var element = document.querySelector("[data-remilon-env]");
	var env = element ? element.getAttribute("data-remilon-env") : "prod";

	requirejs.onError = function(err) {
		if (err.message) {
			err.message = "requireOnError: " + err.message;
		}
		else {
			err.message = "requireOnError";
		}
		throw err;
	};
	
	var paths = {
		"angularDependency": [
			"//ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min"
		],
		"bootstrap": [
			"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min"
		],
		"jquery": [
			"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
		 	"cdnFallbacks/jquery-1.11.1.min"
		],
		"react": [
		 	"//unpkg.com/react@17/umd/react.production.min"
		],
		"react-dom": [
		 	"//unpkg.com/react-dom@17/umd/react-dom.production.min"
		],
		"mobx": [
		 	"//cdn.jsdelivr.net/npm/mobx@6.0.5/dist/mobx.umd.production.min"
		],
		"mobx-react": [
			"//cdn.jsdelivr.net/npm/mobx-react@7.0.6/dist/mobxreact.umd.production.min"
		],
		//required dependency for mobx-react
		"mobx-react-lite": [
			"//cdn.jsdelivr.net/npm/mobx-react-lite@3.1.7/dist/mobxreactlite.umd.production.min"
		],
		"core-js": [
		    "//cdnjs.cloudflare.com/ajax/libs/core-js/3.9.1/minified"
		],
		"lib/Q": [
			"lib/Q/q-2.0.2.min"
		],
		"lib/angular-sanitize": [
			"lib/angular/angular-sanitize-1.7.8.min"
		],
		"lib/angular-storage": [
			"lib/angular/angular-storage-0.0.13.min"
		],
		"lib/angular/animate": [
			"//ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-animate.min"
		],
		"lib/angular/cookie": [
			"//ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-cookies.min"
		],
		"lib/angular/drag-and-drop-lists": [
			"lib/angular/angular-drag-and-drop-lists-1.3.0.min"
		],
		"lib/angular/draganddrop": [
			"lib/angular/draganddrop.min"
		],
		"lib/angular/loading-bar": [
			"//cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.7.1/loading-bar.min",
			"lib/angular/angular-loading-bar-0.7.1.min"
		],
		"lib/angular/resource": [
			"//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.21/angular-resource.min"
		],
		"lib/angular/rzslider": [
			"lib/angular/rzslider.min"
		],
		"lib/angular/touch": [
			"lib/angular/angular-touch-1.3.13.min"
		],
		"lib/angular/ui-bootstrap": [
			"lib/angular/ui-bootstrap-tpls-0.14.3"
		],
		"lib/angular/ui-router": [
			"//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.22/angular-ui-router.min"
		],
		"lib/angular/ui-utils": [
			"//cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min"
		],
		"lib/bluebird": [
			"//cdn.jsdelivr.net/bluebird/3.5.0/bluebird.core.min",
			"lib/bluebird/bluebird.core-3.5.0.min"
		],
		"lib/braintree/client":[
			"//js.braintreegateway.com/web/3.76.4/js/client"
		],
        "lib/braintree/apple-pay":[
            "//js.braintreegateway.com/web/3.76.4/js/apple-pay"
        ],
        "lib/braintree/google-pay":[
            "//js.braintreegateway.com/web/3.76.4/js/google-payment"
        ],
        "lib/google/pay":[
            "//pay.google.com/gp/p/js/pay"
        ],
		"lib/code-prettify": [
			"//cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify"
		],
		"lib/code-prettify-r": [
			"//cdn.jsdelivr.net/gh/google/code-prettify@master/loader/lang-r"
		],
		"lib/freshchat": [
			"https://wchat.freshchat.com/js/widget"
		],
		"lib/freshWidget": [
			"//s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget"
		],
		"lib/google/api": [
			"https://apis.google.com/js/platform" // must be loaded from google over ssl
		],
		"lib/google/translate": [
		 	"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
		],
		"lib/humane": [
			"lib/humane/humane-3.2.0.min"
		],
		"lib/jquery/bootstrap": [
			"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
			"cdnFallbacks/bootstrap/3.2.0/js/bootstrap.min"
		],
		"lib/jquery/bootstrap/datetimepicker": [
			"lib/jquery/bootstrap-datetimepicker.min"
		],
		"lib/jquery/bootstrap/jasny": [
			"//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min"
		],
		"lib/jquery/cookie": [
			"//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min",
		   "lib/jquery.cookie-1.4.1.min"
		],
		"lib/jquery/jqplot": [
			"lib/jquery/graphing/jquery.jqplot.min"
		],
		"lib/jquery/jqplot/bars": [
			"lib/jquery/graphing/jqplot.barRenderer.min"
		],
		"lib/jquery/lazyload": [
			"lib/jquery/lazyload"
		],
		"lib/jquery/purl": [
			"//cdnjs.cloudflare.com/ajax/libs/purl/2.3.1/purl.min"
		],
		"lib/jstz": [
			"lib/jstz/jstz.min"
		],
		"lib/listrak": [
		 	"//cdn.listrakbi.com/scripts/script.js?m=z6wSBMxAURie&v=1"
		],
		"lib/modernizr": [
			"lib/modernizr/modernizr-3.3.1-custom"
		],
		"lib/ngMask": [
			"lib/angular/ngMask.min"
		],
		"lib/raphael": [
			"lib/raphael/raphael"
		],
		"stripe": [
			"https://js.stripe.com/v2?noext" //stripe's url doesn't end in .js, so we stick a query param on the end.
		],
		"lib/tinymce": [
			"//cdnjs.cloudflare.com/ajax/libs/tinymce/4.4.3/tinymce.min"
		],
		"lib/tinymceui": [
			"lib/tinymce/tinymce-ui.min"
		],
		"lib/toastr": [
			"lib/toastr/toastr-2.1.1.min"
		],
		"lib/usmap": [
			"lib/usmap/jquery.usmap"
		],
		"lib/wistia": [
			"//fast.wistia.com/assets/external/E-v1"
		],
		"lscache": [
			"lib/lscache/lscache.min"
		],
		"mathjax": [
			"//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML"
		],
		"moment": [
			"lib/moment/moment.min"
		],
		"underscore": [
			"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
			"lib/underscore/underscore-1.8.3.min"
		],
		"lib/jquery/guid": [
			"lib/jquery/guid"
		],
		// legacy "jquery tools" used for the leadforms (almost all of this is bootstrap, and you shouldn't use these
		"lib/jquery/legacy/hint": [
			"lib/jquery/legacy/hint.jquery"
		],
		"lib/jquery/legacy/migrate": [
			"//code.jquery.com/jquery-migrate-1.2.1.min"
		],
		"lib/jquery/legacy/tools": [
			"lib/jquery/legacy/jquery.tools.min"
		],
		"lib/jquery/legacy/tools/tooltip": [
			"lib/jquery/legacy/jquery.tools.tooltip.1.2.3"
		],
		"lib/jquery/ui": [
			"lib/jquery/jquery-ui-1.12.1-custom.min"
		],
		"lib/jquery-mask": [
			"lib/jquery-mask/jquery.mask.min"
		],
	};
	
	if (window.studyJsMappings) {
		convertAndAddPathEntries(window.studyJsMappings, paths, "");
	}
	else if (window.studyJsMappings == null) {
		console.error("js mappings not available. versioned files will not be used");
		var error = new Error("js mappings not available. any files required via js will fail.");
		window.globalUtils.logError(error, "jsMappingsFailedToLoad");
		window.globalUtils.logLimit = 2; //Prevent ourselves from logging every single required js module
	}

	define('mobx-compatibility', ['mobx'], function(mobx) {
		if (typeof Proxy === 'undefined') {
			mobx.configure({useProxies: "never"});
		}

		return mobx;
	});

	var reactCompatibility = ['react'];
	if (typeof Map === "undefined" || typeof Set === "undefined") {
		reactCompatibility.push('core-js');
	}
	define('react-compatibility', reactCompatibility, function(React) {
		return React;
	});
	
	requirejs.config({
		onNodeCreated: function (node, config, module, path) {
			if ((node.src != null)
			 && !(node.src.indexOf(window.location.origin) === 0) //startsWith
			 && libsWithoutAccessControlHeader.indexOf(module) === -1) {
				node.setAttribute('crossorigin', 'anonymous');
			}
		},
		baseUrl: "/js",
		waitSeconds: 30,
		//BUNDLE_GO_HERE
		paths: paths,
		map: {
			//These modules have common names used by other modules, so we need a mapping from the study.com "lib/" convention to the module's AMD name.
			'*': {
				'angularDependency': 'angular/util/angularExceptionLogger',
				"eventLogging": "logging/eventLogging",
				'lib/lscache': 'lscache',
				'lib/moment': 'moment',
				'lib/stripe': 'wrappers/stripe-and-config',
				'lib/underscore': 'underscore',
				'util/value-proxy': 'util/value-pro',
				'mobx': 'mobx-compatibility',
				'react': 'react-compatibility'
			},
			'lib': {
				'angularDependency': 'angularDependency'
			},
			'angular/util/angularExceptionLogger': {
				'angularDependency': 'angularDependency'
			},
			'lib/angular/rzslider': {
				'angular': 'angularDependency'
			},
			'lib/angular/ui-router': {
				'angular': 'angularDependency'
			},
			'wrappers/stripe-and-config': {
				'lib/stripe': 'stripe'
			},
			'mobx-compatibility': {
				'mobx': 'mobx'
			},
			'react-compatibility': {
				'react': 'react'
			}
		},
		shim: {
			//angular doesn't require jquery, as it has it's own jQLite when jquery is missing. Our code assumes it has access to full jquery, though .
			"angularDependency": {
				deps: ["jquery"],
				exports: "angular"
			},
			"bootstrap": ["jquery"],
			
			"lib/angular-sanitize": ["angularDependency"],
			"lib/angular-storage": ["angularDependency"],
			"lib/angular/animate": ["angularDependency"],
			"lib/angular/cookie": ["angularDependency"],
			"lib/angular/drag-and-drop-lists": ["angularDependency"],
			"lib/angular/draganddrop": ["angularDependency"],
			"lib/angular/loading-bar": ["angularDependency"],
			"lib/angular/resource": ["angularDependency"],
			"lib/angular/touch": ["angularDependency"],
			"lib/angular/ui-bootstrap": ["angularDependency", "lib/angular/animate", "lib/angular/touch", "lib/jquery/bootstrap"],
			"lib/angular/ui-router": ["angularDependency"],
			"lib/angular/ui-utils": ["angularDependency"],
			"lib/braintree/google-pay":["lib/google/pay"],
			"lib/code-prettify": {
				exports: "PR"
			},
			"lib/code-prettify-r": {
				deps: ["lib/code-prettify"]
			},
			"lib/freshWidget": {
				exports: "FreshWidget"
			},
			"lib/freshchat": {
				exports: "fcWidget"
			},
			"lib/google/api": ["google/google-parse-tags-config"],
			"lib/jquery/bootstrap": ["jquery"],
			"lib/jquery/bootstrap/jasny": ["lib/jquery/bootstrap"],
			"lib/jquery/jqplot": ["jquery"],
			"lib/jquery/jqplot/bars": ["lib/jquery/jqplot"],
			"lib/jquery/lazyload": ["jquery"],
			"lib/jquery/mask/jquery.mask": ["jquery"],
			"lib/jquery/legacy/hint": ["jquery"],
			"lib/jquery/legacy/migrate": ["jquery"],
			"lib/jquery/legacy/tools": ["jquery", "lib/jquery/legacy/migrate"],
			"lib/jquery/legacy/tools/tooltip": ["lib/jquery/legacy/tools"],
			"lib/jquery/purl": ["jquery"],
			"lib/jquery/ui": ["jquery"],
			"lib/jquery-mask": ["jquery"],
			"lib/google/pay": {
				exports: "google"
			},
			"lib/google/translate": {
				exports: "google"
			},
			"lib/modernizr": {
				exports: "Modernizr"
			},
			"lib/ngMask": ["angularDependency"],
			"lib/Q": {
				exports: "Q"
			},
			"lib/tinymceui": ["angularDependency", "lib/tinymce"],
			"lib/toastr": ["jquery"],
			"lib/usmap": ["jquery", "lib/raphael"],
			"lib/wistia": {
				deps: ["jquery"],
				exports: "Wistia"
			},
			
			/*importantÃ©: inlineMath and displayMath are the delimiters. they have to match whats being used in the CMS. so if you change here, change in CMS as well*/
			"mathjax": {
				exports: "MathJax",
				init: function () {
					MathJax.Hub.Config(
					 {
						 jax: ["input/TeX", "output/CommonHTML"],
						 extensions: ["tex2jax.js"],
						 TeX: {extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"]},
						 asciimath2jax: {
							 delimiters: [["{am}", "{/am}"]]
						 },
						 tex2jax: {
							 displayMath: [["$$", "$$"]],
							 inlineMath: [["{eq}", "{/eq}"]],
							 processEnvironments: false,
							 skipTags: ["script", "noscript", "style", "textarea", "pre", "code"]
						 },
						 messageStyle: "none",
						 showMathMenu: false,
						 showMathMenuMSIE: false
					 }
					);
					MathJax.Hub.Startup.onload();
					return MathJax;
				}
			}
		}
	});
})();
