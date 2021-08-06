










<!DOCTYPE html>
<html lang="en">
	












<head>
		
	<meta charset="utf-8" />
	<title>TechHive - News, reviews and tips about smart homes, home security, and home entertainment</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	
	<script>
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	}
	</script>
	
	<!-- ad-related js -->
	
	<script src="/www/js/jquery/jquery-1.10.2.min.js"></script>
	
	<script type="text/javascript" src="/www/js/jquery/jquery_cookie.js"></script>
	<script>
	var amazonAPSEnabled = false;
	</script>
	
	
		<script>
		amazonAPSEnabled = true;
		</script>
		<script src="/www/js/ads/aps.js?v=20210728121044"></script>
	
	
	
	<script type="text/javascript" src="/www/js/apollo-locales.js"></script>
	
	












<script src="//d2zv5rkii46miq.cloudfront.net/0/latest/cmp_shim.js"></script>

<script>
//is from EU?
var isEU = null;

var dataLayer = window.dataLayer = window.dataLayer || [];
</script>





<style type="text/css">
#sp_privacy_manager_container {
	z-index: 10000000 !important;
}
</style>



<script type="text/javascript">
//GDPR Stub file
	!function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break; } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();
</script>

<script type="text/javascript">
//CCPA Stub file
      (function () { var e = false; var c = window; var t = document; function r() { if (!c.frames["__uspapiLocator"]) { if (t.body) { var a = t.body; var e = t.createElement("iframe"); e.style.cssText = "display:none"; e.name = "__uspapiLocator"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __uspapi.a = __uspapi.a || []; if (!a.length) { return __uspapi.a } else if (a[0] === "ping") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __uspapi.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === "string"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__uspapi(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, "*") }) } } catch (a) { } } if (typeof __uspapi !== "function") { c.__uspapi = p; __uspapi.msgHandler = l; c.addEventListener("message", l, false) } })();
</script>




<script  type="text/javascript">
window._sp_ = {
      config: {
    	  accountId: 146,
          baseEndpoint: "https://cmpv2.techhive.com",
          targetingParams: {
            type: "GDPR"
         }
      }
}
window._sp_ccpa = {
   config: {
         mmsDomain: "https://cmp.techhive.com",
         ccpaOrigin: "https://ccpa-service.sp-prod.net",
         accountId: 146,
         getDnsMsgMms: true,
         alwaysDisplayDns: false,
         targetingParams: {
         	type: "CCPA"
         }
   }
}
</script>

<script src="https://cmpv2.techhive.com/wrapperMessagingWithoutDetection.js"></script>
<script src="https://ccpa.sp-prod.net/ccpa.js"></script>


 
<script>
	var debug = false;
</script>
 
 


<script>
if (typeof Promise === 'undefined') {
	//yuk but IE 11 etc only
	document.write('<script src="https://www.promisejs.org/polyfills/promise-7.0.4.min.js"></scr' + 'ipt>');
}

try {
	(function () {
		var idgus = window.idgus || {}; //if it's already set use that instead
		/*
		the cmp is code is usually first on the page so run this here to
		never let anything redefine window.idgus
		*/
		Object.defineProperty(window, 'idgus', {
			enumerable: false,
			configurable: false,
			get: function () {
				return idgus;
			},
			set: function () {
				//do nothing
			}
		});
	})();
} catch (ex) {};

window.idgus = window.idgus || {};
window.idgus.cmp = (function () {

	const PRIVACY_MANAGER_IDENT = 165662;

	//standard purps
	const STORE_ACCESS_ON_DEVICE = '5ea7dfd36ede87504f7dedc5',
		SELECT_PERSONSALISED_CONTENT_ID = '5ea7dfd36ede87504f7df18d',
		SELECT_PERSONSALISED_ADS_ID = '5ea7dfd36ede87504f7df04e',
		SELECT_BASIC_ADS_ID = '5ea7dfd36ede87504f7deeaf',
		CREATE_PERSONALISED_ADS_PROFILE_ID = '5ea7dfd36ede87504f7def8d',
		CREATE_PERSONALISED_CONTENT_PROFILE_ID = '5ea7dfd36ede87504f7df117',
		MEASURE_ADS_PERFORMANCE_ID = '5ea7dfd36ede87504f7df1f7',
		MEASURE_CONTENT_PERFORMANCE_ID = '5ea7dfd36ede87504f7df2f3',
		APPLY_MARKET_RESEARCH_ID = '5ea7dfd36ede87504f7df378',
		DEVELOP_AND_IMPROVE_PRODUCTS_ID = '5ea7dfd36ede87504f7df425';
	//custom pur and vend
	const SOCIAL_MEDIA_CONSENTS_PURPOSE_ID = '5f1019609c10086dcb659fba',
		GOOGLE_AD_MANAGER_VENDOR_ID = '5e74df5ff443bb795772df9c',
		GOOGLE_ANALYTICS_VENDOR_ID = '5e542b3a4cd8884eb41b5a72',
		TWITTER_VENDOR_ID = '5e71760b69966540e4554f01',
		FACEBOOK_VENDOR_ID = '5e716fc09a0b5040d575080f',
		LINKEDIN_VENDOR_ID = '5e777e669cb08971eb078d71',
		BLUECONIC_VENDOR_ID = '5eb32dea09c3f947e75e6f02';
	//const lang = (siteLang in LANG) ? LANG[siteLang] : LANG['en'];
	
	var bindReshowCmp = function () {
		var url = document.location.pathname;
		if (url.indexOf("/about/member-preferences") > -1) {
			if (debug) console.log('*****GDPR reshowLink executing ', url);
			$(document).ready(function() {
				$(".cmpSettings").show();
				$(".reshowLink").on("click", function(e) {
					e.preventDefault();
					window._sp_.loadPrivacyManagerModal(PRIVACY_MANAGER_IDENT);
				});
			});
		}
	}
	
	//sitepoint.com/jquery-document-ready-plain-javascript/ - wanted to avoid jquery
	if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
		bindReshowCmp();
	}
	else {
		document.addEventListener("DOMContentLoaded", bindReshowCmp);
	}
	
	let consentedCustomVendors = []; //todo - not needed anymore
	let consentedPurposes = [];
	let vendorGrants = {};
	var checkIfInEU = new Promise(function (resolve, reject) {
		__tcfapi('addEventListener', 2, function (tcData, success) {
			if (debug) { console.log('GDPR addEventListener() tcData: ', tcData); }
			if (debug) { console.log('GDPR addEventListener() gdprApplies:', tcData.gdprApplies, 'eventStatus', tcData.eventStatus, 'success', success); }	
						
			isEU = tcData.gdprApplies;
			if (typeof isEU === 'undefined') {
				isEU = true;
			}
			if (debug) { console.log("GDPR in cmp-tcfv2-sp tcData.gdprApplies: " + isEU); }
			//if(promiseResolved)return;//timeout reached	
			//promiseResolved = true;
			if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
				let isEuVisitor = tcData.gdprApplies || false;
				if (isEuVisitor) {
					__tcfapi('getCustomVendorConsents', 2, (vendorConsents, success) => {
						consentedPurposes = vendorConsents.consentedPurposes || [];
						consentedCustomVendors = vendorConsents.consentedVendors || [];
						vendorGrants = vendorConsents.grants;
		
						if (debug) { console.log('GDPR addEventListener vendorConsents:', vendorConsents); }
						if (debug) { console.log('GDPR addEventListener consentedPurposes:', consentedPurposes, 'consentedCustomVendors', consentedCustomVendors, 'vendorGrants', vendorGrants); }
						
						resolve();
					});
				}
				else reject();
				// remove the ourself to not get called more than once
				//todo - needed?
				__tcfapi('removeEventListener', 2, function (success) {
					if (success) {
						console.log('addEventListener removeEventListener: ' + tcData.listenerId);
					}
				}, tcData.listenerId);
			}
		}); //addEventListener
	});
	
	//checkCCPAOptOut Promise
	var checkCCPAOptOut = new Promise(function(resolve, reject) {
		if (debug) { console.log("GDPR checkCCPAOptOut Promise"); }
	var promiseResolved = false;
	    setTimeout(function() {
	        if (debug) { console.log('GDPR checkCCPAOptOut timeout reached promiseResolved', promiseResolved); }
	        if (!promiseResolved) {
	            promiseResolved = true;
	            //assume opt out for safety
	            resolve();
	        }
	    }, 20000);
	    __uspapi('getUSPData', 1, function(uspData, success) {
	    if (promiseResolved)
	            return;
	        //timeout reached
	        promiseResolved = true;
	        if(success) {
	try {
	if (debug) { console.log('uspapi success: ', uspData); }
	var uspDataString = uspData.uspString;
	var uspDataArray = [];
	uspDataArray = uspDataString.split("");
	if (typeof uspDataArray[2] !== "undefined" && uspDataArray[2] !== "Y") {
	//user is still opted in
	reject('CCPA opted in');
	}
	else {
	//user opted out
	resolve();
	}
	}
	catch(e) {
	if (debug){ console.log('error with uspData retrieval: ', e); }
	//assume opt out for safety
	resolve();
	}
	
	} else {
	if (debug) { console.log('uspapi fail: ', uspData); }
	//assume opt out for safety
	resolve();
	}
	
	});
	});
	
	const checkConsent = function (ident) {
		if (debug) { console.log('GDPR', 'checkConsent() for ', ident); }
		let ok = false;
		if (ident in vendorGrants) {
			//has to have grant on vendor and on all associated puposes, advantage of this is we dont need to keep track of what purps a vendor is assoc with and check independetly
			const vendor = vendorGrants[ident];
			if (debug) { console.log('GDPR', 'checkConsent() is vendor true - grants ', vendor); }
			ok = vendor.vendorGrant; //has this vendor been granted at vendor level	
			if (debug) { console.log('GDPR', 'checkConsent() vendor has grant at vendor level', ok); }
			if (ok) { //if so check all purposes have been granted
				for (let purpIdent in vendor.purposeGrants) {
					ok = vendor.purposeGrants[purpIdent];
					if (debug) { console.log('GDPR', 'checkConsent() vendor has purpose ' + purpIdent + ' grant ', ok); }
					if (!ok) break;
				}
			}
			if (debug) { console.log('GDPR', 'checkConsent() vendor has ultimate grant', ok); }
			return ok;
		}
		
		//not vendor so check if purpose
		ok = consentedPurposes.some(obj => obj[__id] == ident); //not vendor just pupose
		if (debug) { console.log('GDPR', 'checkConsent() purpose has grant ', ok); }
		return ok;
	};
	
	
	return {
		isDebug: function () {
			return debug;
		},
		hold: new Promise(function (resolve, reject) { //hold till user has made or choice or doesnt need to 
			checkIfInEU.then(function () {
				if (debug) { console.log('GDPR', 'hold() ok resolved - return true'); }
				resolve(true);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'hold() not in eu - return true'); }
				resolve(true);
			});
		}),
		adsense: new Promise(function (resolve, reject) { //same as hold effectively
			checkIfInEU.then(function () {
				//const ok = checkConsent(GOOGLE_AD_MANAGER_VENDOR_ID);
				const ok = true;
				if (debug) { console.log('GDPR', 'adsense ok ', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'adsense not in eu'); }
				resolve(true);
			});
		}),
		blueconic: new Promise(function (resolve, reject) {
			checkIfInEU.then(function () {
				const ok = checkConsent(BLUECONIC_VENDOR_ID);
				if (debug) { console.log('GDPR', 'blueconic ok', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, check CCPA
				if (debug) { console.log('GDPR', 'blueconic not in eu'); }
				checkCCPAOptOut.then(function() {
					if (debug) { console.log('CCPA', 'user has opted out of Blueconic'); }
					resolve(false);
				}).catch(function(){
					if (debug) { console.log('CCPA', 'user has not opted out of Blueconic'); }
					resolve(true);
				});
				
			});
		}),
		gpt: new Promise(function (resolve, reject) { //same as hold effectively
			checkIfInEU.then(function () {
				//const ok = checkConsent(GOOGLE_AD_MANAGER_VENDOR_ID);
				const ok = true;
				if (debug) { console.log('GDPR', 'gpt ok', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'gpt not in eu'); }
				resolve(true);
			});
		}),
		gaTrack: new Promise(function (resolve, reject) {
			checkIfInEU.then(function () {
				const ok = checkConsent(GOOGLE_ANALYTICS_VENDOR_ID);
				if (debug) { console.log('GDPR', 'gaTrack ok ', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'gaTrack not in eu, arguments', arguments); }
				resolve(true);
			});
		}),
		adrian: new Promise(function (resolve, reject) {
			checkIfInEU.then(function () {
				const ok = checkConsent(STORE_ACCESS_ON_DEVICE);
				if (debug) { console.log('GDPR', 'adrian ok ', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'adrian not in eu'); }
				resolve(true);
			});
		}),
		twitter: new Promise(function (resolve, reject) {
			checkIfInEU.then(function () {
				const ok = checkConsent(TWITTER_VENDOR_ID);
				if (debug) { console.log('GDPR', 'twitter ok ', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'twitter not in eu'); }
				resolve(true);
			});
		}),
		linkedin: new Promise(function (resolve, reject) {
			checkIfInEU.then(function () {
				const ok = checkConsent(LINKEDIN_VENDOR_ID);
				if (debug) { console.log('GDPR', 'linkedin ok ', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'linkedin not in eu'); }
				resolve(true);
			});
		}),
		facebook: new Promise(function (resolve, reject) {
			checkIfInEU.then(function () {
				const ok = checkConsent(FACEBOOK_VENDOR_ID);
				if (debug) { console.log('GDPR', 'facebook ok ', ok); }
				resolve(ok);
			}).catch(function () { //not in eu, return ok
				if (debug) { console.log('GDPR', 'facebook not in eu'); }
				resolve(true);
			});
		}),
		consentKnown: new Promise (function (resolve, reject) {
			checkIfInEU.then(function() { 
				//EU visitors
				dataLayer.push({
					'event': 'consentKnown',
					'ccpaOptedOut': false
				});
				resolve(true);
			}).catch(function(){
				//check for CCPA
				checkCCPAOptOut.then(function() {
					//CCPA applies and user has opted out
					dataLayer.push({
						'event': 'consentKnown',
						'ccpaOptedOut': true
					});
					resolve(true);
				}).catch(function(){					
					dataLayer.push({
						'event': 'consentKnown',
						'ccpaOptedOut': false
					});
					resolve(true);
				})

			});
		})
	}; // end return
	

	
	
})();



</script>



	
	
		











<script>
//if no cmp then execute as normal.
window.idgus = window.idgus || {};
window.idgus.cmp = window.idgus.cmp || {};
(function (promise) {
	promise.then(function (consentOk) {
		var isDebug = !!window.idgus.cmp.isDebug ? window.idgus.cmp.isDebug() : false;
		if (isDebug) console.log('GDPR', 'blueconic - consentOk', consentOk);
		if (!consentOk) return;
		var bcscript = document.createElement("script");
		bcscript.async = true;
		bcscript.type = "text/javascript";
	    var useSSL = "https:" == document.location.protocol;
	    bcscript.src = (useSSL ? "https:" : "http:") + "//cdn.blueconic.net/idg.js";
	    var node=document.getElementsByTagName("script")[0];
	    node.parentNode.insertBefore(bcscript, node);
	});
})(!!window.idgus.cmp.blueconic ? window.idgus.cmp.blueconic : {
	then: function (f) {
		f(true);
	}
});
</script>
	
	
	
	
		










<script>
// this javascript is for retrieving locale-specific ad units for DFP - see mapping in apollo-locales.js
// getting locale and editions for the site the reader is viewing
let brandAbbrev = "th";
let brandConfigBrandId = "4";
//let myLocale = getLocale(); // getting locale on page load from URL, IP, geolocation - this will always be something. If 0, it's the global/default/core view.
let countryCode = "";
let getSlugFromId = getApolloLocaleIdMap();
let getIdFromSlug = getApolloLocaleSlugMap();

// if selectedLocale cookie exists, get locale
if (typeof getSelectedLocale() !== 'undefined'  && getSelectedLocale() === getLocale()) { // get locale from cookie if available otherwise, use another locale source (from geolocation, url slug, etc.)
 	countryCode = getSlugFromId[getSelectedLocale()];
} else {
	countryCode = getSlugFromId[getLocale()];
}
//console.log("+++ 1) in locales.editions.jsp - COUNTRY CODE IS DEFINED AS: "+countryCode+"+++");
// if countryCode is empty string at this point, it means localeId = 0 which is global (default/core)...
if (countryCode == "") {
	countryCode = "us"; // country code for default global is currently US
}
//console.log("====INSIDE locales-editions.jsp - getSelectedLocale() = " + getSelectedLocale() + " and getLocale() = " + getLocale() + " and countryCode = " + countryCode);
//US social media accounts are the default if locale cannot be determined
var twitterUrl = "https://twitter.com/TechHive";
var linkedInUrl = "";
var facebookUrl = "http://www.facebook.com/techhivemedia";
var youTubeUrl = "";
var twitterHandle = "TechHive";

if (countryCode === 'asean') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
}
if (countryCode === 'middle-east') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
}
if (countryCode === 'uk') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
}
if (countryCode === 'in') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
	youTubeUrl = "";
}
if (countryCode === 'africa') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
	youTubeUrl = "";
}
if (countryCode === 'au') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
}
if (countryCode === 'nz') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
}
if (countryCode === 'nl') {
	twitterUrl = "";
	linkedInUrl = "";
	facebookUrl = "";
	twitterHandle = "";
}

//US business unit is the default if locale cannot be determined
var busUnit = "";
//cookie policy page
var localeEdition = "";
var busUnitAddress = "";
if (countryCode === 'asean') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'middle-east') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'uk') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'in') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'africa') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'au') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'nz') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
if (countryCode === 'nl') {
	busUnit = "";
	localeEdition = "";
	busUnitAddress = "";
}
</script>

	

	
    <script src="/www/js/init_device.js"></script>    
    
    	
    
    
   	
   	
		
			



















	<script async="async" src="//cdn.adsafeprotected.com/iasPET.1.js"></script>




	<script async src="//js-sec.indexww.com/ht/p/183980-58723449634151.js"></script>

	
<script type="text/javascript" src="/www/js/ads/gpt_includes.js?v=20210728121044"></script>


	












<script>

function refreshCountdown(slotName) {
	IDG.GPT.log(slotName + " refresh countdown: " + IDG.GPT.refreshCountdown[slotName].timeRemaining);
	IDG.GPT.refreshCountdown[slotName].timeRemaining -= 1;
	
	if (IDG.GPT.refreshCountdown[slotName].timeRemaining == 0) {
		clearInterval(IDG.GPT.refreshCountdown[slotName].interval);
		IDG.GPT.log(slotName + ' - time to refresh ad!');
		
		//perform ad refresh
		IDG.GPT.refreshAd(slotName);		
	}
}

var refreshInterval = 30;

var testRefreshInterval = IDG.GPT.getUrlParameter("interval");
if (typeof testRefreshInterval !== "undefined" && typeof parseInt(testRefreshInterval) === "number") {
	refreshInterval = parseInt(testRefreshInterval);
}

IDG.GPT.log("Ad refreshing ON - every " + refreshInterval + " seconds");

IDG.GPT.viewable = {};
IDG.GPT.visibility = {};
IDG.GPT.refreshCountdown = {};

IDG.GPT.impressionViewable = function (){
	googletag.pubads().addEventListener('impressionViewable', function (event) {
		var currentSlot = event.slot.getSlotElementId();
		if (currentSlot !== 'inread' && currentSlot !== 'gpt-skin' && currentSlot !== 'gpt-superstitial' && currentSlot !== 'gpt-overlay' ) {
			IDG.GPT.viewable[currentSlot] = true;
			IDG.GPT.log("The ad in " + currentSlot + " counts as a viewable impression.");
			
			IDG.GPT.refreshCountdown[currentSlot] = {};
			//if slot visibility > 50, start countdown timer
			if (IDG.GPT.visibility[currentSlot] >= 50) {
				IDG.GPT.refreshCountdown[currentSlot].timeRemaining = refreshInterval;
				IDG.GPT.refreshCountdown[currentSlot].interval = setInterval(function(){
					refreshCountdown(currentSlot);
				}, 1000)			
				IDG.GPT.log('Impression viewable - starting countdown for ' + currentSlot);
			}
		}
	});
};



IDG.GPT.visibilityChanged = function() {
	googletag.pubads().addEventListener('slotVisibilityChanged', function (event) {
		var currentSlot = event.slot.getSlotElementId();
		var currentVisibility = event.inViewPercentage;
		
		if (currentSlot !== 'inread' && currentSlot !== 'gpt-skin' && currentSlot !== 'gpt-superstitial' && currentSlot !== 'gpt-overlay' ) {
			if (typeof IDG.GPT.visibility[currentSlot] !== "undefined") {
				//if this slot has a viewable impression...
				if (typeof IDG.GPT.viewable[currentSlot] === "boolean" && IDG.GPT.viewable[currentSlot] == true) {
					//if stored value < 50 and current value >=50, start countdown timer
					if (IDG.GPT.visibility[currentSlot] < 50 && currentVisibility >= 50) {
						IDG.GPT.refreshCountdown[currentSlot].timeRemaining = refreshInterval;
						IDG.GPT.refreshCountdown[currentSlot].interval = setInterval(function(){
							refreshCountdown(currentSlot);
						}, 1000)
						IDG.GPT.log('Came into view - restarting countdown for ' + currentSlot);
					}
					//else if stored value >= 50 and current value < 50, stop countdown timer (if exists)
					else if (IDG.GPT.visibility[currentSlot] >= 50 && currentVisibility < 50) {
						clearInterval(IDG.GPT.refreshCountdown[currentSlot].interval);
						IDG.GPT.log('Went out of view - stopping countdown for ' + currentSlot);
					}
				}
				//update visibility
				IDG.GPT.visibility[currentSlot] = currentVisibility;
			}
			else {
				//set initial visibility
				IDG.GPT.visibility[currentSlot] = currentVisibility;
			}
			
			IDG.GPT.log(currentSlot + " visibility: " + currentVisibility);
		}
	});
};

IDG.GPT.googleCommandPush(IDG.GPT.impressionViewable);
IDG.GPT.googleCommandPush(IDG.GPT.visibilityChanged);



</script>


<script type="text/javascript">
	if (adLayer==null || adLayer=='undefined') {
		var adLayer=[];
	}
	
		
			adLayer["itemType"]="homepage";
		
		
	
</script>
	
<script type="text/javascript">
	// Set up ad related variables
	try {
		IDG.GPT.unitName = "/8456/IDG.US_CSMB_TechHive.com";
	}
	catch (exception) {
		console.log ("google_dfp can't use IDG.GPT "+ exception);
	}

	try {
		IDG.GPT.unitName = IDG.GPT.unitName + "/" + "homepage_door";
	}
	catch (exception) {
		console.log ("google_dfp can't use IDG.GPT "+ exception);
	}
	// global variables
	var global_ShowSuper = true;
	var global_ShowHero = true;
	
	//XFP global targeting, more targeting thm_pre
	var url = window.location.href;
	if(url.indexOf("?")>1){
		url=url.split('?')[0];
	}
	

	try {
		IDG.GPT.addTarget("URL", encodeURIComponent(url));
	}
	catch (exception) {
		console.log ("google_dfp can't use IDG.GPT "+ exception);
	}
	try {IDG.GPT.addTarget("zone", 'index-home');}	catch (exception) {console.log ("google_dfp can't use IDG.GPT "+ exception);}
	
	
	
	
	
	try {
		if (null != IDG.GPT.getQsVal("env")) {		
			IDG.GPT.addTarget("env", IDG.GPT.getQsVal("env").replace(/\W/g, "") );
		}
	}
	catch (exception) {
		console.log ("google_dfp can't use IDG.GPT "+ exception);
	}	
	
	
	
		

	try {
		IDG.GPT.addTarget("page_type", '');
	}
	catch (exception) {
		console.log ("google_dfp can't use IDG.GPT "+ exception);
	}	

	
	
	
	
	
	
	
	
	
	
	//k/v for Inskin partner
	/* var fn_pageskin = screen.width >= 1330 ? "true" : "false";
	try {
		IDG.GPT.addTarget("inskin_yes", fn_pageskin);
        IDG.GPT.log("Inskin: added k/v pair inskin_yes : "+fn_pageskin);
	} catch (exception) {
		console.log("Inskin: google_dfp can't use IDG.GPT " + exception);
	} */
	
	
</script>



<script type="text/javascript">
	
	
	
	
		
		
		
		
		
		
		
		
	
	
	
	
	

</script>
  
<script src="/www.idgcsmb/js/thm_pre.js?v=20210728121044"></script>


	
	
		<script>
		// IDGMPM-16419 - moved out of adsel queue for IDGMPM-16933
		googletag.cmd.push(function() {
		  if (googletag.pubads().getTargeting('permutive').length == 0) {
			
			//IDGMPM-18418 - capture paermutive key-values
			window.headertag = window.headertag || {};
			window.headertag.cmd = window.headertag.cmd || [];
			window.headertag.cmd.push(function() {
				try {
					var segs = JSON.parse(localStorage._pdfps || '[]').slice(0,250);
					window.headertag.setUserKeyValueData({ segments: {"permutive": segs} });                
				} catch (e) {}
			});
			
		    var kvs = localStorage.getItem('_pdfps');
		    googletag.pubads().setTargeting('permutive', kvs ? JSON.parse(kvs) : []);
		    console.log('ad targeting permutive kvs: ', kvs);
		  }
		});
		</script>
	

<script type="text/javascript" src="/www/js/ads/gpt_starter.js?1234"></script>
	<script>
		loadGPT();
	</script>

	
		<script type="text/javascript" src="/www/js/ads/ias_gpt_launcher.js?v=20210728121044"></script>
	

	




	<script type="text/javascript" src="/www/js/ads/aps_2.js?v=20210728121044"></script>


		
		
	

	

    <link rel="canonical" href="https://www.techhive.com" />
	
	
	
	
	
	<meta name="description" content="Get the latest news and analysis on smart-home technology. We cover everything from lighting controls to home security; home entertainment to smart appliances and more. " />
	
	
	
		
		
		
		 
	
	<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="http://www.techhive.com/index.rss" />
	

	
		<link rel="stylesheet" href="https://use.typekit.net/azu1qsr.css" />
	
	
	<meta property="twitter:account_id" content="499275959" />
	<meta property="fb:app_id" content="1566936830273000" />
	
		
		
		
			
			
				
			
			
			
		
		
	<meta property="og:type" content="website">	
	<meta property="og:url" content="https://www.techhive.com">
    <meta property="og:site_name" content="TechHive">   
    
    
    <meta property="og:image" content="https://csmb.staticworld.net/images/furniture/techhive/NoPrimaryImage.png">
    
    
    
    
    	<meta property="og:title" content="TechHive - News, reviews and tips about smart homes, home security, and home entertainment"> 
    
    
    <meta property="og:description" content="Get the latest news and analysis on smart-home technology. We cover everything from lighting controls to home security; home entertainment to smart appliances and more. ">
    
    

	
	
	
		<meta name="google-site-verification" content="GHmsZtoU3FlVFNZp6NaQob2y1ZBU9WoIhanodiETb2o" />
	
	
	
		<meta name="msvalidate.01" content="05F49F041AAA61528A0A3329A6C0C02D" />
	
	
	
	
	
		<link id="mobile-size" rel="stylesheet" href="/www.idgcsmb/css/inline-header-mobile.css?v=20210728121044" />
		<script>
			if (window.matchMedia("(min-width: 768px)").matches) {
				document.getElementById('mobile-size').insertAdjacentHTML('afterend', '<link id="desktop-size" rel="stylesheet" href="/www.idgcsmb/css/inline-header.css?v=20210728121044" />');
			}
		</script>
		<link rel="stylesheet" href="/www.idgcsmb.th/css/inline-header.css?v=20210728121044" />
	 
	
	
	    
	
	<link rel="stylesheet" href="/www.idgcsmb/css/print.css" media="print" />
	
	<!-- this must be first -->
	<link href="/www.idgcsmb/css/colorbox.css" rel="stylesheet" />
	<!-- <link href="/www.idgcsmb/css/equalizer.css" rel="stylesheet" /> -->
	
	
	
		
		
			<link href="/www.idgcsmb/css/global-layout.css?v=20210728121044" rel="stylesheet" />
			<link href="/www.idgcsmb.th/css/global-layout.css?v=20210728121044" rel="stylesheet" />
		
	
	
	<link href="/www.idgcsmb/css/global-colors.css?v=20210728121044" rel="stylesheet" />
	<link href="/www.idgcsmb.th/css/global-colors.css?v=20210728121044" rel="stylesheet" />
	<link href="/www.idgcsmb/css/global-typography.css?v=20210728121044" rel="stylesheet" />
	<link href="/www.idgcsmb.th/css/global-typography.css?v=20210728121044" rel="stylesheet" />
	
	
	
	
	
	<link href="/www.idgcsmb/css/video.player.css?v=20210728121044" rel="stylesheet" media="all" />

	
	
	
		
			
			
				<link href="/www.idgcsmb/css/carousel.css?v=20210728121044" rel="stylesheet" />
			
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	<script>
		var	suppressItemsForHoliday = "false";
	</script>
	
	
	
	  
	<!-- this must be last -->
	<link href="/www.idgcsmb/css/helpers.css" rel="stylesheet" />
	
	
		<script>
		try {
			performance.mark("mark_head_css_done_blocking");
		}
		catch(e) {
			console.log("Error saving performance mark -- this function may not be supported in this browser");
		}
		</script>
	
	<!--  fav and touch icons -->
	<link rel="shortcut icon" href="/www.idgcsmb.th/favicon.ico"/>
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://csmb.staticworld.net/images/furniture/techhive/th-apple-touch-icon-precomposed-144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="129x129" href="https://csmb.staticworld.net/images/furniture/techhive/th-apple-touch-icon-precomposed-129.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://csmb.staticworld.net/images/furniture/techhive/th-apple-touch-icon-precomposed-114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://csmb.staticworld.net/images/furniture/techhive/th-apple-touch-icon-precomposed-72.png" />
	<link rel="apple-touch-icon" href="https://csmb.staticworld.net/images/furniture/techhive/th-apple-touch-icon-precomposed.png" />
	

	
		
	
	
	
	
	<script type="text/javascript">
	var _sf_async_config={};
	_sf_async_config.uid = 29363;
	
	
	
		_sf_async_config.useCanonical = true;
	
	
	
		
			
		
			
		
		
		
		
	_sf_async_config.domain = "techhive.com";
	</script>
	
	
	
	
	
	<!-- <link href="/www.idgcsmb/webfonts/ss-social.css" rel="stylesheet" />
	<link href="/www.idgcsmb/webfonts/ss-standard.css" rel="stylesheet" />  -->
	<!--[if lte IE 8]>  
		<link href="/www.idgcsmb/webfonts/ss-ie8.css" rel="stylesheet" />
	<![endif]-->


	
	<!-- Use Twitter Summary Card with Large Image for articles and videos; summary otherwise -->
	
		
		
			<meta name="twitter:card" content="summary">
		
	
	<meta property="twitter:description" content="Get the latest news and analysis on smart-home technology. We cover everything from lighting controls to home security; home entertainment to smart appliances and more. ">
	
	
		
		
			<meta name="twitter:site" content="@TechHive">
			
				
				
					<meta name="twitter:image" content="https://csmb.staticworld.net/images/playthislogo.jpg">
				
						
			
				
				
					<meta name="twitter:title" content="TechHive - News, reviews and tips about smart homes, home security, and home entertainment">
				
				
			
			
				
					<meta name="twitter:url" content="www.techhive.com/">
				
				
			
		
		
		
		
	
	












<script type="application/ld+json">
	{
		"@context": "http://schema.org",
		"@type": "WebSite",
		"url": "https://www.techhive.com/",
		"potentialAction": {
		"@type": "SearchAction",
		"target": "https://www.techhive.com/search?query={search_term}",
		"query-input": "required name=search_term"
		}
	}
</script>
	
	
	
	
	<script src="/www/js/ads/ad.js"></script>
	
	<script>var oneRegPlacementID = "";</script>
	
	
	
	
	
		
		
		
	
	
	
		
		
		
		
		  
		
	
	
	
	
	
	
	
	 
	
	
	
	
	
	
	
	
		
		
		
	
	
	<script>
	var supMontMods = false;
	</script>
	


	
	
			
			
			
			
	
	
	
	
	






	
	
	
	
	
	
		
		
		
			
		
	
	
	
		
	
	
	
	
	
	
	
 
		 
	 
		<script>	
		{	
			let categorySlug = '';
			
			const stripOutIllegal = s => s.replace(/[~'"=!+#;^()<>&[]]/g,'');
			
			window.ntvConfig = window.ntvConfig || {} ;
			window.ntvConfig.keyValues = window.ntvConfig.keyValues || {};
			const segs = localStorage.getItem('_pnativo');
			if (segs) {
				window.ntvConfig.keyValues.permutive = JSON.parse(segs).join(",");
			}
			
			const metaKeywordsTag = document.querySelector("meta[name='keywords']");
			if ( metaKeywordsTag && (metaKeywordsTag.hasAttribute('content')) ) {
				const kwds = metaKeywordsTag.content.split(',').filter(kw => kw.length <= 40);
				window.ntvConfig.keyValues.contextual = stripOutIllegal(kwds.join(','));
			}
			[categorySlug].forEach(function(val) {
				if (val.length !== 0) {
					window.ntvConfig.keyValues.channel = stripOutIllegal(val);
				}
			});
			if (typeof(window.ntvConfig.keyValues.channel) === "undefined") {
				window.ntvConfig.keyValues.channel = "";
			}
		}
		</script>
	
	 
	 
	
		<script type="text/javascript" src="//s.ntv.io/serve/load.js" async></script>
	
	
	
	<script type="text/javascript">
		var prodNames = '';
		var prodManufacturers = '';
		var prodCategories = '';
		var prodVendors = '';
	</script>
		
	
	
	<script>
	var idg_uuid = $.cookie('idg_uuid') || "";
	
	//get edition from countryCode
	var edition = '';
	if (typeof countryCode !== 'undefined') {//should be defined in locales-editions.jsp if brand has editions
		edition = countryCode;
	}

	var dlJobFunction = '';
	var dlJobPosition = '';
	var dlIndustry = '';
	
	var catIdList = '';
	var goldenTaxList = '';
	var primaryCatList = '';
	
	// if huid parameter from email link query string is available and no reg cookie defined, assign huid to idg_uuid cookie
	if (getQueryVariable("huid") !== false && idg_uuid === '') {
		idg_uuid = getQueryVariable("huid");
		$.cookie('idg_uuid', idg_uuid, {path:'/', domain: ".techhive.com", expires: 90/*,secure:true*/});
	}
	
	dataLayer.push({
		'ancestorGoldenCategories': '',
		'articleId': '',
		'articleDisplayId':'',
		'articleHasVideo':'',
		'articleLocale': '',
		'articleTitle': '',
		'articleType': '',
		'audience':'consumer',
		'author':'',
		'blogName':'',
		'brandpost': 'false',
		'categoryIdAll': (catIdList.length > 0 ? catIdList.split(',') : []),
		'categoryIdList':catIdList,
		'categoryIdPrimary': '',
		'contentStrategy': '',
		'contentType':'home page',
		'datePublished':'',
		'dateUpdated':'',
		'daysSincePublished':'',
		'daysSinceUpdated':'',
		'displayType':'home page',
		'edition':edition,
		'environment':'production',
		'ga_enabled':'true',
		'gaTrackingId':'UA-30870572-1',
		'geolocEnabled':'true',
		'goldenTaxArray': (goldenTaxList.length > 0 ? goldenTaxList.split(',') : []),
		'goldenTaxonomyIdAll': ', ',
		'goldenTaxonomyIdList': '',
		'goldenTaxonomyIdPrimary': '',
		'isBlog':'false',
		'isInsiderContent':'',
		'isICN': 'false',
		'oneRegPlacementID':oneRegPlacementID,
		'pageNumber':'',
		'platform':'Web',
		'podcastSponsored': 'false',
		'primaryCatArray': (primaryCatList.length > 0 ? primaryCatList.split(',') : []),
		'primaryCategory': '',
		'primaryCategoryAll': ', ',
		'primaryCategoryList': '',
		'primaryAncestorCategoryList': '',
		'prodCategories':prodCategories.slice('|', -1),
		'prodManufacturers':prodManufacturers.slice('|', -1),
		'prodNames':prodNames.slice('|', -1),
		'prodVendors':prodVendors.slice('|', -1),
		'property': 'techhive',
		'propertyCountry':'US',
		'purchaseIntent':'',
		'skimlinksId':'111346X1569484',
		'source':'',
		'sponsorName':'',
		'suppressForHoliday':'false',
		'suppressMonetization': supMontMods.toString(),
		'tags': '',
		'userId':idg_uuid,
		'videoAutoplay':'false',
		'youtubeId':''
	});
	</script>
	 
	
	
	










<script>
	var dataLayer = window.dataLayer = window.dataLayer || [];
	var adBlockStatus = 'false';
	
	//look for variable set in ad.js
	if (window.canRunAds === undefined) {
		adBlockStatus = 'true';
	} else {
		adBlockStatus = 'false';
	}
	
	dataLayer.push({
		'adBlockStatus': adBlockStatus
	});
</script>





	<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?GTM-WR6LD2P"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-WR6LD2P');</script>
	<!-- End Google Tag Manager -->

	
		<script>
			try {
				performance.mark("mark_head_js_done_blocking");
			}
			catch(e) {
				console.log("Error saving performance mark -- this function may not be supported in this browser");

			}
		</script>
	
	
	
	
	
	
	
		<script>
			var numberFromDataLayer = function(property) {
			  if (window.dataLayer && dataLayer[0] && typeof dataLayer[0][property] == "number") {
			    return dataLayer[0][property];
			  }
			  return null;
			};
			
			var stringFromDataLayer = function(property) {
			  if (window.dataLayer && dataLayer[0] && typeof dataLayer[0][property] == "string") {
			    return dataLayer[0][property];
			  }
			  return "";
			};
		</script>
	
	
	
	

	
		










<script>
// IDGMPM-16419 - updated in IDGMPM-16933
	!function(n,e,o,r,i){if(!e){e=e||{},window.permutive=e,e.q=[],e.config=i||{},e.config.projectId=o,e.config.apiKey=r,e.config.environment=e.config.environment||"production";for(var t=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],c=0;c<t.length;c++){var f=t[c];e[f]=function(n){return function(){var o=Array.prototype.slice.call(arguments,0);e.q.push({functionName:n,arguments:o})}}(f)}}}(document,window.permutive,"f5b3be27-f789-4ef1-8867-37c67da5b361","84c7e805-5ce9-41f4-b988-3529488bab1c",{});
	  permutive.addon('web', {
	    page: {
	      type: stringFromDataLayer('displayType'),
	      language: 'en',
	      tags: stringFromDataLayer('tags').split(","),
	      audience: stringFromDataLayer('audience'),
	      description: 'Get the latest news and analysis on smart-home technology. We cover everything from lighting controls to home security; home entertainment to smart appliances and more. ',
	      
 		  
	      ads: {
	        adblocker: (adBlockStatus == "true"), //detected further up the page
	        enabled: true
	      }	     
	    }
	  });

	  dlJobPosition = dlJobPosition || null;
	  dlIndustry = dlIndustry || null;

	  if (dlJobPosition !== '' || dlIndustry !== '' || stringFromDataLayer('userId') !== '') {
		  if (stringFromDataLayer('userId') !== '') {
				var userData = {};

				var hermesAttrs = {
					"companySize" : "543ea0bd-604a-4011-99e7-806fc8979b5e",
					"country" : "ea76d652-29bd-4a6c-ae50-a5d08ea28c5e",
				};
				var userKeys = Object.keys(hermesAttrs);

				$.ajax({
					type: "get",
				    crossDomain: true,
					url: "https://lqxgcyk808.execute-api.us-east-1.amazonaws.com/prod_h2/api/v1/profiles/" + idg_uuid,
					dataType: "json",
					data: {}, 
					headers : {
						"Content-Type": "application/x-www-form-urlencoded",
						"x-api-key":"HLyMXLISSW7HAYGgbx2Vb1Gf1OLcGmMG5BcwZ4Vb"
					}
				}).done(function(responseData){ 
					userKeys.forEach(function(key) {
						if (typeof(responseData.attrs[hermesAttrs[key]].option_label) !== "undefined") { 
							userData[key] = responseData.attrs[hermesAttrs[key]].option_label;
						}
						else { 
							userData[key] = responseData.attrs[hermesAttrs[key]].value;
						}
					});

					window.permutive.track('User', {
					  companySize: userData['companySize'],
					  country: userData['country'],
					  id: (stringFromDataLayer('userId') !== "" ? stringFromDataLayer('userId') : null),
					  jobIndustry: (dlIndustry !== "" ? dlIndustry : null),
					  jobPosition: (dlJobPosition !== "" ? dlJobPosition : null),
					  loggedIn: (stringFromDataLayer('insiderSignedIn') == 'true')
					})
					
					
				}).fail(function(data){
					//console.log("Error retrieving data: " + data.responseJSON.error);
				});  

			}
			else {
				window.permutive.track('User', {
				  companySize: null,
				  country: null,
				  id: (stringFromDataLayer('userId') !== "" ? stringFromDataLayer('userId') : null),
				  jobIndustry: (dlIndustry !== "" ? dlIndustry : null),
				  jobPosition: (dlJobPosition !== "" ? dlJobPosition : null),
				  loggedIn: (stringFromDataLayer('insiderSignedIn') == 'true')
				});
			}
	  }
	
	  //product js vars defined in document-head	  
	  if (prodNames !== '' || prodManufacturers !== '' || prodCategories !== '' || prodVendors !== '') {
		  window.permutive.track('Product', {
			  names: stringFromDataLayer('prodNames').split("|"),
			  categories: stringFromDataLayer('prodCategories').split("|"),
			  manufacturers: stringFromDataLayer('prodManufacturers').split("|"),
			  vendors: stringFromDataLayer('prodVendors').split("|")
		});

	  }
		 

</script>

<script>
	$.ajax({
		url: "https://cdn.permutive.com/f5b3be27-f789-4ef1-8867-37c67da5b361-web.js",
	  	dataType: "script",
	  	cache: true, // default is false
	  	async: true // default is true
	});
</script>
	
	
	
		










<script async src="https://cdn.onthe.io/io.js/Nrv0WQMn2aTr"></script>




	
    	 
    
    




	
		
		
			
		
	
	
	



<script>
	
    
	window._io_config = window._io_config || {};
    window._io_config["0.2.0"] = window._io_config["0.2.0"] || [];
    window._io_config["0.2.0"].push({
        page_url: window.location.href,
        page_url_canonical: "https://www.techhive.com",
        page_title: "TechHive - News, reviews and tips about smart homes, home security, and home entertainment",
        page_type: "main",
        page_language: "en",
        
    });
</script>
	
	
	
	
	
	
	
		
		
			
			
		
		
	
	
	
		<script type="text/javascript">
			window._sp_analytics = {
		    	config: {
		  			accountId: 146,
			        events: {
			          onDetectionComplete: function () {
			         	console.log('onMessageReady')
			        }
			      },  
			    }
			}
		</script>
	
	
</head>

	<body id="homepage" class="home techhive">
		 
		
			<div id="skinAdTarget"></div>
		
		
			<div id="superadunit" class="hidden">
			    <div class="ad">
			    	<div class="ad-header">
						<div class="brand-logo"></div>
								<a href="javascript:unhide('superadunit');" id="superstitial-text">Close Ad</a>
					</div>
					
						
						
						
					




















	
		
		
		
		
			<div id="gpt-superstitial" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-superstitial", "true");
	    			$('#gpt-superstitial').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-superstitial [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	
			    </div><!-- / ad -->
			</div><!-- / super -->		
		

		











		<div id="page-wrapper" class="page-wrapper">

			











	
	
			
		
			
			 
				
				
				
				
				
			
			 
			 
			 
			 
			  
			  
			 
			 
		











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


		
		
		
		
		
		
			<div id="page-top">
				<div class="page-top-inner" itemscope itemtype="http://schema.org/Organization">
				<link itemprop="url" href="http://www.techhive.com"> 
				
					<header id="banner">
						<a id="mobile-offscreen-toggle" class="ss-standard ss-rows" href="javascript://"></a>
						
						<div id="logo">
							<a href="/" class="ir banner-logo" id="logoImage">Home</a>
						</div>
						
						<div id="mobile-search-toggle" class="ss-standard ss-search"></div>
						
					</header>
		
					













		<ul id="th-nav">
			<li class="newsNav"><a href="/news/" id="newsNav">News</a></li>
			<li class="reviewsNav"><a href="/reviews/" id="reviewsNav">Reviews</a></li>
			<li class="th-category-nav"><a href="/category/smart-home/">Smart Home<span class="ss-navigatedown right"></span></a>
				<ul class="th-sub-nav">
					<li><a href="/category/smart-appliance/">Smart Appliances</a></li>
					<li><a href="/tag/gardengarage/">Garden &amp; Garage</a></li>
					<li><a href="/category/network-router/">Routers</a></li>				
					<li><a href="/category/home-security/">Home Security</a></li>
					<li><a href="/category/hubs-controllers/">Hubs &amp; Controllers</a></li>
					<li><a href="/category/internet-of-things/">Internet of Things</a></li>
					<li><a href="/tag/kitchen/">Kitchen</a></li>	            		
					<li><a href="/category/lighting/">Lighting</a></li>
					<li><a href="/category/security-cameras/">Security Cameras</a></li>
					<li><a href="/category/thermostats/">Thermostats</a></li>
				</ul>
			</li>
			<li class="th-category-nav"><a href="/category/media-and-entertainment-industry/">Entertainment<span class="ss-navigatedown right"></span></a>
				<ul class="th-sub-nav">
					<li><a href="/category/cord-cutting/">Cord Cutting</a></li>						
					<li><a href="/category/home-audio/">Home audio</a></li>
					<li><a href="/category/speakers/">Speakers</a></li>
					<li><a href="/category/headphones/">Headphones</a></li>
					<li><a href="/category/tv/">TVs</a></li>
					<li><a href="/category/streaming-devices/">Streaming Hardware</a></li>
					<li><a href="/category/streaming-media/">Streaming Media</a></li>   
				</ul>
			</li>		
			<li class="th-category-nav"><a href="/deals">Deals</a></li>
			<li class="th-category-nav"><a href="/resources/" id="resourcesNav">Resources</a></li>
		</ul><!-- /.th-nav -->





						
		
					<div id="th-social">
						<a href="http://www.facebook.com/techhivemedia" class="network-fb ss-icon ss-social-circle banner-social banner-fb" alt="Facebook" itemprop="sameAs" rel="nofollow">
							&#xF610;
						</a>
						<a href="https://twitter.com/TechHive" class="network-tw ss-icon ss-social-circle banner-social banner-tw" alt="Twitter" itemprop="sameAs" rel="nofollow">
							&#xF611;
						</a>
						
						
					</div><!-- /#th-social -->
					<div id="th-search">
						
							  
								










<div class="gcse-searchbox" >
    <script>
		(function() {
			var cx = '011881588825642368632:peponeqfeou';
			var gcse = document.createElement('script');
			gcse.type = 'text/javascript';
			gcse.async = true;
			gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(gcse, s);
		})();
	</script>
	<gcse:searchbox-only resultsUrl="/search"></gcse:searchbox-only>
	<script>
		$(window).load(function(){
			const hdrSearchBox = document.querySelector(".gcse-searchbox input.gsc-input");
			hdrSearchBox.setAttribute("placeholder", "Start Searching");
		});
	</script>
</div>
							
							
						
					</div>
						
					<div id="saved-comparisons"></div>				
						
						
				</div> 
			</div> 
		
		
		
		
		
		
		<!-- Events Header -->	
		
			
		











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


				
		
		
		<div id="homepageLeaderboardWrapper">
			<div id="homepageLeaderboardInner">
				
					
				




















	
		
		
		
		
			<div id="gpt-leaderboard" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-leaderboard", "true");
	    			$('#gpt-leaderboard').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-leaderboard [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	 
			</div>
		</div>
		
		
		
			
		

























<style>
.home-hero{height:324px;}
.home-hero-split .home-hero-one .home-hero-image { background:url(https://images.idgesg.net/images/article/2021/07/t5-ii-true-wireless-anc-gun-metal-angle-100897169-hero-2up.jpeg) 0 0 no-repeat;background-size:100%; }
.home-hero-split .home-hero-two .home-hero-image { background:url(https://images.idgesg.net/images/article/2021/08/audeze-crbn-opener-100897623-hero-2up.jpg) 0 0 no-repeat;background-size:100%; }
.home-hero-one, .home-hero-two { position:relative; }

.home-hero-split .home-hero-text h2{ margin-top:0; margin-bottom:0.2;}

.home-hero-split .home-hero-one .home-hero-text{left:41px;top:28px;
	width:233px; position:absolute;}

.home-hero-split .home-hero-two .home-hero-text{left:16px;top:166px;
	width:260px; position:absolute;}

.home-hero-text.lightTheme { background: url(//csmb.staticworld.net/images/furniture/techhive/white-background70.png) 0 0 repeat;padding:5px 15px 6px; }
.home-hero-text.darkTheme { background: url(//csmb.staticworld.net/images/furniture/techhive/black-background70.png) 0 0 repeat;padding:5px 15px 6px; }
	
	
.home-hero-split .home-hero-one .home-hero-text a h2{color:#000000;font-size:29px}
.home-hero-split .home-hero-two .home-hero-text a h2{color:#FFFFFF;font-size:31px}
.home-hero-split .home-hero-one .home-hero-text a h2, .home-hero-split .home-hero-two .home-hero-text a h2{ line-height:1.2}
.home-hero-split .home-hero-one .home-hero-text a h2:hover, .home-hero-split .home-hero-two .home-hero-text a h2:hover{ opacity:.8; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2); }


.home-hero-split .home-hero-one .home-hero-text p{color:#000000;}
.home-hero-split .home-hero-two .home-hero-text p{color:#FFFFFF;}

@media only screen and (min-width:581px) and (max-width:768px) {	
	.home-hero-image img { display:block; width:100%; }	
  	.home-hero { background:#f7f7f7; height:auto; display:block; position:relative; width:100%; overflow:hidden; }  	
  	.home-hero-split .home-hero-one { float:left; height: auto; width: 50%; }
  	.home-hero-split .home-hero-two{ float:left; height: auto; width: 50%; }
	.home-hero-split .home-hero-one .home-hero-image, .home-hero-split .home-hero-two .home-hero-image  { background:none; height:auto; max-height:194px; width:100%; display:block; clear:both; overflow:hidden; position:relative; }
	.home-hero-split .home-hero-one .home-hero-text, .home-hero-split .home-hero-two .home-hero-text{left:0px; width:100%; background-color:#494949; padding:5px 15px 6px; top:0; bottom:0; margin-top:0; display:block; clear:both; position:relative; overflow:hidden; text-align:left;  }
	.home-hero-split .home-hero-one .home-hero-text a h2, .home-hero-split .home-hero-two .home-hero-text a h2{color:#fff;font-size:20px; text-align:left; line-height:1;}
	.home-hero-split .home-hero-one .home-hero-text p, .home-hero-split .home-hero-two .home-hero-text p{ display:none; }	
	.home-hero-split .home-hero-text h2{ line-height:1.25;}
}
@media only screen and (min-width:601px) and (max-width:768px) {	
	.home-hero-split .home-hero-one .home-hero-image, .home-hero-split .home-hero-two .home-hero-image  { max-height:250px;}

}

@media only screen and (min-width:1px) and (max-width:580px) {
	.home-hero-two{ display:none;}	
	.home-hero-image img { display:block; width:100%; }	
  	.home-hero { background:#f7f7f7; height:auto; display:block; position:relative; width:100%; }  	
  	.home-hero-split .home-hero-one, .home-hero-split .home-hero-two { float:none; height: auto; width: 100%; }
	.home-hero-split .home-hero-one .home-hero-image, .home-hero-split .home-hero-two .home-hero-image { background:none; height:auto; width:100%; display:block; clear:both; overflow:hidden; position:relative; }
	.home-hero-split .home-hero-one .home-hero-text, .home-hero-split .home-hero-two .home-hero-text{left:0px; width:100%; background-color:#494949; padding:5px 15px 6px; top:0; bottom:0; margin-top:0; display:block; clear:both; position:relative; overflow:hidden; text-align:left;  }
	.home-hero-split .home-hero-one .home-hero-text  a h2, .home-hero-split .home-hero-two .home-hero-text  a h2{color:#fff;font-size:22px; text-align:left;}	
	.home-hero-split .home-hero-text h2{ line-height:1.30;}
	.home-hero-inner{position:relative;}
	.dots{
	position:absolute;
	top:20px;
	right:20px;
	font-size:10px;
	opacity:.8;
	background: url(//csmb.staticworld.net/images/furniture/techhive/black-background70.png) 0 0 repeat;
	border-radius:7px;
	padding:6px 4px 4px 8px;
	}
	.dots .ss-record{
	display:inline;
	margin-right:5px;
	color:#333;
	}
	.dots .ss-record:before{
	font-size:10px;
	}	
	.dots .ss-record.dotone{
	color:#fff;
	}
}

@media only screen and (min-width:769px) {
	.home-hero-image img { display:none; }
}


</style>

<div class="home-hero home-hero-split">
	<div class="home-hero-inner">
		<div class="home-hero-one">
			<a href="/article/3627231/klipsch-true-wireless-anc-earphones-available-now.html"><div class="home-hero-image"><img src="https://images.idgesg.net/images/article/2021/07/t5-ii-true-wireless-anc-gun-metal-angle-100897169-large.jpg" /></div></a>
			<div class="home-hero-text ">
				<a href="/article/3627231/klipsch-true-wireless-anc-earphones-available-now.html"><h2>Klipschâs first true wireless ANC earphones are finally available</h2></a>
				<p></p>
			</div>
		</div>
		<div class="home-hero-two">
			<a href="/article/3627333/audeze-crbn-electrostatic-headphone.html"><div class="home-hero-image"><img src="https://images.idgesg.net/images/article/2021/08/audeze-crbn-opener-100897623-large.jpg" /></div></a>
			<div class="home-hero-text ">
				<a href="/article/3627333/audeze-crbn-electrostatic-headphone.html"><h2>Audeze debuts its CRBN electrostatic headphone</h2></a>
				<p></p>
			</div>
		</div>
	</div><!--/home-hero-inner-->
</div><!--/home-hero-->







			
		
		
			
		













<style>
.home-features-wrap .iPadOverlay{
	background:url(//csmb.staticworld.net/images/furniture/techhive/iPadScrollPrompt.png) 50% 50% no-repeat;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	z-index:5000;
	display:none;
}

@media only screen and (min-width:768px) and (max-width:768px) {
.home-features-wrap .iPadOverlay{ width:420px; }
}
@media only screen and (min-width:1024px) and (max-width:1024px) {
	.home-features-wrap .iPadOverlay{ width:630px; }
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (min-resolution: 240dpi){
.home-features-wrap .iPadOverlay{ background-size:200px 75px; }
}
</style>





<div class="home-features-wrap">
	<div class="home-features clearfix">
		<!-- <div class="features-fade left"></div> -->
		<!-- <a class="prev browse left"></a> -->
			<div class="home-features-carousel">
				<!-- <div class="iPadOverlay"></div> -->
				<!-- removed .items wrapper div since it interfered with slick scrolling functionality -->
					
						
							
							<div class="home-feature">
								<a href="/article/3627309/best-movies-and-shows-on-disney-right-now.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100897242 " src="https://images.idgesg.net/images/article/2021/07/black-widow-100897242-medium.3x2.jpg" alt="black widow" /></div>
											<p>Black Widow is one of the 15 best movies & shows on Disney+ right now</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3627330/philips-hue-dimmer-switch-2021-review.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100897377 " src="https://images.idgesg.net/images/article/2021/07/philips-hue-dimmer-switch-v2-main-100897377-medium.3x2.jpg" alt="philips hue dimmer switch v2 main" /></div>
											<p>The aging Hue dimmer switch gets a welcome revamp</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3627310/best-new-tv-shows-getting-harder-for-cord-cutters-to-buy.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100897235 " src="https://images.idgesg.net/images/article/2021/07/itunesshows-100897235-medium.3x2.jpg" alt="itunesshows" /></div>
											<p>The best new TV shows are getting harder for cord-cutters to buy</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3627269/bang-olufsen-beoplay-eq-true-wireless-headphones.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100897267 " src="https://images.idgesg.net/images/article/2021/07/bang-olufsen-beoplay-eq-100897267-medium.3x2.jpg" alt="Bang and Olufsen's new Beoplay EQ with Adaptive ANC." /></div>
											<p>Bang & Olufsen's new wireless earphones promise total immersion</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3625251/best-movies-to-watch-on-netflix-now.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100897008 " src="https://images.idgesg.net/images/article/2021/07/23-netflix2021-privatelife-jma-100897008-medium.3x2.jpg" alt="Private Life" /></div>
											<p>In a Netflix rut? Try Private Life, plus these 26 other great movies</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3626395/how-to-add-multiple-voice-commands-to-a-single-alexa-routine.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100868036 " src="https://images.idgesg.net/images/article/2020/11/amazon-echo-100868036-medium.3x2.jpg" alt="amazon echo" /></div>
											<p>You can now assign multiple voice commands to one Alexa routine</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3623206/anker-soundcore-motion-boom-speaker-review.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100896800 " src="https://images.idgesg.net/images/article/2021/07/anker-soundcore-motion-boom-main-100896800-medium.3x2.jpg" alt="anker soundcore motion boom main" /></div>
											<p>Anker Soundcore Motion Boom: Bluetooth speaker for the beach</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3318241/best-smart-plugs.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100778948 " src="https://images.idgesg.net/images/article/2018/11/smartplug-hub-100778948-medium.3x2.jpg" alt="smartplug hub" /></div>
											<p>Turn any power outlet into a smart socket with our favorite smart plugs</p>
									</div>
								</a>
							</div>
						
					
						
							
							<div class="home-feature">
								<a href="/article/3625522/vilos-20-mesh-network-router-hands-on-report.html">										
									<div class="feature-inner">	
										<div class="imageContainer295x197">
										
										<img  class="medium.3x2Image  imgId100896533 " src="https://images.idgesg.net/images/article/2021/07/vilo-primary-small-100896533-medium.3x2.jpg" alt="Vilo Mesh Wi-Fi System primary small" /></div>
											<p>Vilo's mesh router is just $20 a node. Is there a catch? We go hands-on</p>
									</div>
								</a>
							</div>
						
					
				
			</div><!--inner//scrollable-->
		<!--  <div class="features-fade right"></div> -->
		<!-- <a class="next browse right" style="z-index:10;"></a> -->
	
	
		
		
	




















	
		
		
		
		
			<div id="gpt-showcase" class="home-features-ad ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-showcase", "true");
	    			$('#gpt-showcase').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-showcase [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	
	
	</div><!--slider-->
	
</div> <!-- end .home-features-wrap -->





		
		<script>
		$(document).ready(function(){
			$('.searchbox-input-class').each(function(){
			    $(this).change(function(){
			    	var qStr=$(this).val();
			    	if($(this).val().indexOf('@')!=-1){
			    		qStr=qStr.replace(/@/g,' ');
			    		$(this).val(qStr);
			    	}
			    });
			});
		});
		</script>
	


			<div class="container clearfix" id="main-content">

				
					
					
						










						











	





















	
		
		
		
		
			<div id="gpt-leaderboardmobile" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-leaderboardmobile", "true");
	    			$('#gpt-leaderboardmobile').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-leaderboardmobile [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	


	
	
	
	
	
	
	
	

















	<link href="/www/css/homepage-video.css?v=20210728121044" rel="stylesheet" />
	<link href="/www.idgcsmb.th/css/homepage-video.css?v=20210728121044" rel="stylesheet" />


<div class="video-module" id="homepage-video-module">
	<div class="module-header">
		<h3>Latest Video</h3>
		<div class="all-videos"><a href="/video/">See All Video</a></div>
	</div><!-- end .module-header -->
	<div class="video-module-lead">
		<div class="title-wrap">
			<a  href="/video/108719/best-smart-speaker-for-50-echo-dot-vs-nest-mini">Best smart speaker for $50: Echo Dot vs Nest Mini</a>
			<div class="title-rule"></div>
		</div>
		<img  class="poster-wide-largeImage  imgId100886350 " src="https://images.idgesg.net/images/article/2021/04/trv21_014_bestsmartspeaker50_v2-100886350-poster-wide-large.jpg" alt="trv21 014 bestsmartspeaker50 v2" />
		
	</div>
	<div class="video-module-carousel">
		
			<div class="item">
				<div class="img-wrap">
					<a  href="/video/108120/google-nest-hub-2nd-gen-unboxing-and-setup">
						<img  class="poster-wide-smallImage  imgId100882670 " src="https://images.idgesg.net/images/article/2021/03/thu21_004_googlenesthub_v1-100882670-poster-wide-small.jpg" alt="Google Nest Hub (2nd Gen)" />
					</a>
				</div>
				
				<a  href="/video/108120/google-nest-hub-2nd-gen-unboxing-and-setup">Google Nest Hub (2nd Gen) unboxing & setup</a>
			</div>
		
			<div class="item">
				<div class="img-wrap">
					<a  href="/video/106440/best-smart-speakers-for-the-price">
						<img  class="poster-wide-smallImage  imgId100871022 " src="https://images.idgesg.net/images/article/2020/12/thl20_001_bestsmartspeakerforprice_v2-100871022-poster-wide-small.jpg" alt="thl20 001 bestsmartspeakerforprice v2" />
					</a>
				</div>
				
				<a  href="/video/106440/best-smart-speakers-for-the-price">Best smart speakers for the price</a>
			</div>
		
			<div class="item">
				<div class="img-wrap">
					<a  href="/video/101182/google-nest-hub-max-vs-amazon-echo-show-which-10-inch-smart-display-should-you-buy">
						<img  class="poster-wide-smallImage  imgId100832655 " src="https://images.idgesg.net/images/article/2020/02/trv20_013_googlenesthubmaxvsamazonechoshow-100832655-poster-wide-small.jpg" alt="Nest Hub Max vs Echo Show" />
					</a>
				</div>
				
				<a  href="/video/101182/google-nest-hub-max-vs-amazon-echo-show-which-10-inch-smart-display-should-you-buy">Google Nest Hub Max vs. Amazon Echo Show: Which 10-inch smart display should you buy?</a>
			</div>
		
			<div class="item">
				<div class="img-wrap">
					<a  href="/video/108319/amazon-echo-show-10-3rd-gen-unboxing-and-setup">
						<img  class="poster-wide-smallImage  imgId100883795 " src="https://images.idgesg.net/images/article/2021/04/thu21_003_echoshow10_v1-100883795-poster-wide-small.jpg" alt="thu21 003 echoshow10 v1" />
					</a>
				</div>
				
				<a  href="/video/108319/amazon-echo-show-10-3rd-gen-unboxing-and-setup">Amazon Echo Show 10 (3rd Gen) unboxing & setup</a>
			</div>
		
			<div class="item">
				<div class="img-wrap">
					<a  href="/video/106879/kohler-ces-2021-smart-home-tour">
						<img  class="poster-wide-smallImage  imgId100872669 " src="https://images.idgesg.net/images/article/2021/01/ces21_tho_001_kohlervirtualtour_v5-100872669-poster-wide-small.jpg" alt="ces21 tho 001 kohlervirtualtour v5" />
					</a>
				</div>
				
				<a  href="/video/106879/kohler-ces-2021-smart-home-tour">Kohler CES 2021 Smart Home Tour</a>
			</div>
		
			<div class="item">
				<div class="img-wrap">
					<a  href="/video/105179/ring-always-home-cam">
						<img  class="mediumImage  imgId100859579 " src="https://images.idgesg.net/images/article/2020/09/ring-always-on-home-cam-100859579-medium.jpg" alt="ring always on home cam" />
					</a>
				</div>
				
				<a  href="/video/105179/ring-always-home-cam">Ring Always Home Cam</a>
			</div>
		
	</div>
</div><!--  end .video-module -->

<!--  interscroller on CSMB sites only -->
 
	
		
	




















	
		
		
		
		
			<div id="interscroller" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("interscroller", "true");
	    			$('#interscroller').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: interscroller [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	




	<script>
		// check to see if the slick function already exists on the page
		if (typeof($.fn.slick) != 'function') {
			// if not, call in the slick plugin, then call the carousel initialization as the callback function after the plugin loads
			$.getScript("/www/js/utils/slick/slick.min.js", slickVideoInit)
		} else {
			// otherwise, just initialize the carousel
			slickVideoInit();
		}
		
		function slickVideoInit() {
			$('.video-module-carousel').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				
				responsive: [
					{
						breakpoint: 768,
						settings: "unslick"
					}
				]
		
			});
		}
	</script>


	

	
	
			
	

<div id="main" role="main">
	<div id="home-main-primary">
		<h2>Latest Stories</h2>
		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3934 s7">
		
		<a  href="/article/3627282/amazons-smart-soap-dispenser-pairs-with-echo-speakers.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897740 " src="https://images.idgesg.net/images/article/2021/08/amazon-smart-soap-dispenser-100897740-medium.jpg" alt="amazon smart soap dispenser" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-08-02T10:05-0700" content="2021-08-02T10:05-0700">Aug 2, 2021 10:05 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ben-Patterson/"><span itemprop="name">Ben Patterson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627282/amazons-smart-soap-dispenser-pairs-with-echo-speakers.html">
				Amazon's new smart soap dispenser pairs with Echo speakers
				</a>
			</p>
			<p class="crawl-summary">
				Once you pair it with an Echo device, the Amazon Smart Soap Dispenser can trigger Alexa routines whenever you lather up.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3498 s7">
		
		<a  href="/article/3627591/supercharge-your-home-wi-fi-speeds-with-this-today-only-netgear-sale.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897649 " src="https://images.idgesg.net/images/article/2021/08/netgearorbi-100897649-medium.jpg" alt="netgearorbi" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-08-02T07:06-0700" content="2021-08-02T07:06-0700">Aug 2, 2021 7:06 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ian-Paul/"><span itemprop="name">Ian Paul</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627591/supercharge-your-home-wi-fi-speeds-with-this-today-only-netgear-sale.html">
				Supercharge your home Wi-Fi speeds with this 24-hour Netgear sale
				</a>
			</p>
			<p class="crawl-summary">
				Amazon is throwing a one-day sale on Netgear routers, mesh systems, Powerline adapters, and more.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c4249 s2 sistersite">
		
		<a  href="https://www.pcworld.com/article/3627279/protect-your-family-s-passwords-for-cheap-with-lastpass-25-off-sale.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100887466 " src="https://images.idgesg.net/images/article/2021/05/lastpasslogo-100887466-medium.jpg" alt="lastpasslogo" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-08-02T06:44-0700" content="2021-08-02T06:44-0700">Aug 2, 2021 6:44 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Alaina-Yee/"><span itemprop="name">Alaina Yee</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="https://www.pcworld.com/article/3627279/protect-your-family-s-passwords-for-cheap-with-lastpass-25-off-sale.html">
				Protect your familyâs passwords for cheap with LastPassâs 25% off sale
				</a>
			</p>
			<p class="crawl-summary">
				This juicy back-to-school discount on our favorite password managerâs Families plan is a steal.
			</p>
					
			<p class="offsite">
				<span class="ss-right right"><a  href="https://www.pcworld.com/article/3627279/protect-your-family-s-passwords-for-cheap-with-lastpass-25-off-sale.html">on pcworld.com</a></span>
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3019 s7">
		
		<a  href="/article/3627333/audeze-crbn-electrostatic-headphone.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897623 " src="https://images.idgesg.net/images/article/2021/08/audeze-crbn-opener-100897623-medium.jpg" alt="audeze crbn opener" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-08-02T06:00-0700" content="2021-08-02T06:00-0700">Aug 2, 2021 6:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Scott-Wilkinson/"><span itemprop="name">Scott Wilkinson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627333/audeze-crbn-electrostatic-headphone.html">
				Audeze debuts its CRBN electrostatic headphone
				</a>
			</p>
			<p class="crawl-summary">
				The audio company's first electrostatic model employs patented carbon-nanotube technology originally developed for medical applications.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3019 s7">
		
		<a  href="/article/3627231/klipsch-true-wireless-anc-earphones-available-now.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897169 " src="https://images.idgesg.net/images/article/2021/07/t5-ii-true-wireless-anc-gun-metal-angle-100897169-medium.jpg" alt="t5 ii true wireless anc gun metal angle" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-08-02T06:00-0700" content="2021-08-02T06:00-0700">Aug 2, 2021 6:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ben-Patterson/"><span itemprop="name">Ben Patterson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627231/klipsch-true-wireless-anc-earphones-available-now.html">
				Klipschâs first true wireless ANC earphones are finally available
				</a>
			</p>
			<p class="crawl-summary">
				The T5 II True Wireless ANC earbuds are the first to offer Dirac HD sound correction, as well as Bragiâs AI-enabled operating system.
			</p>
				

		</div>
	</div>


		
			
			    
					
				




















	
		
		
		
		
			<div id="gpt-crawl" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-crawl", "true");
	    			$('#gpt-crawl').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-crawl [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	 
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c4934 s7">
		
		<a  href="/article/3627309/best-movies-and-shows-on-disney-right-now.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897249 " src="https://images.idgesg.net/images/article/2021/07/monsters-at-work-100897249-medium.jpg" alt="monsters at work" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-30T03:00-0700" content="2021-07-30T03:00-0700">Jul 30, 2021 3:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Matt-Elliott/"><span itemprop="name">Matt Elliott</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627309/best-movies-and-shows-on-disney-right-now.html">
				The best movies and shows on Disney+ right now 
				</a>
			</p>
			<p class="crawl-summary">
				You don't need to be a kidâor a cord-cutterâto dig the entertainment streaming on Disney+. 
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3938 s7">
		
		<a  href="/article/3627330/philips-hue-dimmer-switch-2021-review.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897377 " src="https://images.idgesg.net/images/article/2021/07/philips-hue-dimmer-switch-v2-main-100897377-medium.jpg" alt="philips hue dimmer switch v2 main" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-30T03:00-0700" content="2021-07-30T03:00-0700">Jul 30, 2021 3:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ben-Patterson/"><span itemprop="name">Ben Patterson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627330/philips-hue-dimmer-switch-2021-review.html">
				Philips Hue Dimmer Switch (2021) review: The aging Hue dimmer switch gets a welcome revamp
				</a>
			</p>
			<p class="crawl-summary">
				Equipped with a new button, a much improved wall plate, and greater configurability, the new Hue Dimmer Switch is better in every way.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3941 s7">
		
		<a  href="/article/3627488/amazons-second-gen-fire-tv-cube-now-lets-you-make-zoom-calls.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897354 " src="https://images.idgesg.net/images/article/2021/07/amazon-fire-tv-cube-zoom-calling-100897354-medium.jpg" alt="amazon fire tv cube zoom calling" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-29T10:06-0700" content="2021-07-29T10:06-0700">Jul 29, 2021 10:06 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ben-Patterson/"><span itemprop="name">Ben Patterson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627488/amazons-second-gen-fire-tv-cube-now-lets-you-make-zoom-calls.html">
				Amazonâs second-gen Fire TV Cube now lets you make Zoom calls
				</a>
			</p>
			<p class="crawl-summary">
				Just add a compatible webcam, and the latest Fire TV Cube will let you make two-way video calls using the Zoom app for Fire TV.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c5054 s7">
		
		<a  href="/article/3627391/today-only-get-the-ring-video-doorbell-wired-and-the-echo-show-5-for-a-crazy-65.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897317 " src="https://images.idgesg.net/images/article/2021/07/ringandshow-100897317-medium.jpg" alt="ringandshow" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-29T06:47-0700" content="2021-07-29T06:47-0700">Jul 29, 2021 6:47 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ian-Paul/"><span itemprop="name">Ian Paul</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627391/today-only-get-the-ring-video-doorbell-wired-and-the-echo-show-5-for-a-crazy-65.html">
				Today only, get the Ring Video Doorbell Wired and the Echo Show 5 for a crazy $65
				</a>
			</p>
			<p class="crawl-summary">
				Ring has a steal of deal with its new budget video doorbell and an Echo Show 5 for well under $100. 
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c3938 s7">
		
		<a  href="/article/3624619/wyze-night-light-review.html">
		<div class="excerpt-img imageContainer200x126
														
														 bug updated
													">
			
			<img  class="mediumImage  imgId100895377 " src="https://images.idgesg.net/images/article/2021/07/wyze-night-light-main-100895377-medium.jpg" alt="wyze night light main" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
				<span  class="eyebrow bug updated">updated</span> 
			
			
			
				
				
					<span class="timeago" title="2021-07-29T03:00-0700" content="2021-07-29T03:00-0700">Jul 29, 2021 3:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ben-Patterson/"><span itemprop="name">Ben Patterson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3624619/wyze-night-light-review.html">
				Wyze Night Light review: These affordable, groupable, motion-sensing lights have some issues
				</a>
			</p>
			<p class="crawl-summary">
				You can group up to 10 of Wyzeâs inexpensive night lights, which boast motion and ambient light sensors. But we had trouble with the magnetic mounts, and battery life was disappointingly brief.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c4934 s7">
		
		<a  href="/article/3627310/best-new-tv-shows-getting-harder-for-cord-cutters-to-buy.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897235 " src="https://images.idgesg.net/images/article/2021/07/itunesshows-100897235-medium.jpg" alt="itunesshows" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-29T03:00-0700" content="2021-07-29T03:00-0700">Jul 29, 2021 3:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Jared-Newman/"><span itemprop="name">Jared Newman</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627310/best-new-tv-shows-getting-harder-for-cord-cutters-to-buy.html">
				The best new TV shows are getting harder for cord-cutters to buy
				</a>
			</p>
			<p class="crawl-summary">
				To win over cord cutters, streaming exclusives are crowding out a la carte purchase options.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c5052 s7">
		
		<a  href="/article/3627269/bang-olufsen-beoplay-eq-true-wireless-headphones.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100897267 " src="https://images.idgesg.net/images/article/2021/07/bang-olufsen-beoplay-eq-100897267-medium.jpg" alt="Bang and Olufsen's new Beoplay EQ with Adaptive ANC." />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-29T00:00-0700" content="2021-07-29T00:00-0700">Jul 29, 2021 12:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Theo-Nicolakis/"><span itemprop="name">Theo Nicolakis</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3627269/bang-olufsen-beoplay-eq-true-wireless-headphones.html">
				Bang & Olufsen launches Beoplay EQ true wireless headphones with active adaptive noise cancellation
				</a>
			</p>
			<p class="crawl-summary">
				These true wireless earphones with adaptive active noise cancellation promise to eliminate surrounding noise and allow total immersion in B&O's signature sound.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c5256 s7">
		
		<a  href="/article/3626704/get-two-echo-dot-smart-speakers-for-the-price-of-one-just-50.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100862962 " src="https://images.idgesg.net/images/article/2020/10/amazon-echo-dot-fourth-gen-main-100862962-medium.jpg" alt="amazon echo dot fourth gen main" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-28T07:36-0700" content="2021-07-28T07:36-0700">Jul 28, 2021 7:36 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ian-Paul/"><span itemprop="name">Ian Paul</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3626704/get-two-echo-dot-smart-speakers-for-the-price-of-one-just-50.html">
				Get two Echo Dot smart speakers for the price of one: Just $50
				</a>
			</p>
			<p class="crawl-summary">
				Target is offering two fourth-generation Echo Dot smart speakers for $50.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c5054 s7">
		
		<a  href="/article/3626818/today-only-bump-up-home-security-with-eufy-security-gear-at-all-time-low-prices.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100890755 " src="https://images.idgesg.net/images/article/2021/06/solocam-e40-100890755-medium.jpg" alt="solocam e40" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-28T06:56-0700" content="2021-07-28T06:56-0700">Jul 28, 2021 6:56 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ian-Paul/"><span itemprop="name">Ian Paul</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3626818/today-only-bump-up-home-security-with-eufy-security-gear-at-all-time-low-prices.html">
				Today only: Bump up home security with Eufy Security gear at all-time low prices
				</a>
			</p>
			<p class="crawl-summary">
				Amazon has a one-day sale on three solid Eufy Security items, including a four-camera kit and a camera-charging solar panel.
			</p>
				

		</div>
	</div>


		
			
			
				
			













	
		
		
		
		
		
	
	
	






	<div class="excerpt c5056 s7">
		
		<a  href="/article/3626395/how-to-add-multiple-voice-commands-to-a-single-alexa-routine.html">
		<div class="excerpt-img imageContainer200x126
														
														
													">
			
			<img  class="mediumImage  imgId100868036 " src="https://images.idgesg.net/images/article/2020/11/amazon-echo-100868036-medium.jpg" alt="amazon echo" />
		</div>
		</a>
		
		<div class="excerpt-text">

			<p class="post-meta">
			
			
			
				
				
					<span class="timeago" title="2021-07-28T03:00-0700" content="2021-07-28T03:00-0700">Jul 28, 2021 3:00 AM</span> <span class="post-byline">
						
						
							
				        	
				        	<span class="byline"><span> | </span>
					        	By <a rel="author" itemprop="url" href="/author/Ben-Patterson/"><span itemprop="name">Ben Patterson</span></a>
							</span>
				        	
				        	
				        	
			        			        		
					</span>
				
			
			</p>
			
			<p class="crawl-headline">							
				<a  href="/article/3626395/how-to-add-multiple-voice-commands-to-a-single-alexa-routine.html">
				How to assign more than one voice command to a single Alexa routine
				</a>
			</p>
			<p class="crawl-summary">
				Having trouble remembering the exact voice commands for your Alexa routines? Now you can add multiple phrases to a single routine.
			</p>
				

		</div>
	</div>


		
		<p class="listing-footer">
			<a href="/browse?start=15">Older stories &raquo;</a>
		</p>
	</div>
</div><!--/#main-->
						










<div id="side" role="secondary">
	

	
			
		       
		       
		        
			












<div id="nlmod">


<div id="touts" class="module">


<div id="newsletters" class="module radius_5">
	<span>TechHive <strong>Newsletter</strong></span>
		<p class="newsletterTitle">Get our Best of TechHive Newsletter </p>
		
		
			<p class="desc">Sign up to receive the top connected-home and home-entertainment news and reviews of the week.</p>
		
		
	
	
	<a class="subscribeLink" href="/newsletters/signup.html" rel="nofollow">Subscribe Now</a>

</div> <!--  END #newsletters --><!-- function(data) { $.globalEval(data); }); -->



</div>

</div>
	


	
		
		
	




















	
		
		
		
		
			<div id="gpt-showcasemobile" class="side-promo side-module side-ad mobile-only ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-showcasemobile", "true");
	    			$('#gpt-showcasemobile').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-showcasemobile [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	



	



	
	



	
	












	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		<!-- blx4 #183 blox4.html  -->
			

		
			
				
					
					
					
						
							
					
						
					
					
					
					
					
					
						
					
				
				
			
		
















	
		
		
			<div id="" class="blx blxPedithomepagepromoprimary blxM183  blox4_html  blxC1603"><div class="home-split"> <a href="https://www.techhive.com/article/3187462/best-media-streaming-device.html"><img src="https://images.idgesg.net/promoimages/2020/01/th-media-streamer-promo-left-100826007-orig.png"></a> </div>       </div>
		
	

	



	
	












	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		<!-- blx4 #312 blox4.html  -->
			

		
			
				
					
					
					
						
							
					
						
					
					
					
					
					
					
						
					
				
				
			
		
















	
		
		
			<div id="" class="blx blxPbizdevhomepageprimary blxM312  blox4_html  blxC40132"> <div class="home-split"> <a href="https://www.techhive.com/article/3187462/best-media-streaming-device.html"><img src="https://images.idgesg.net/promoimages/2020/01/th-media-streamer-promo-right-100826006-orig.png"></a> </div>                 </div>
		
	

	



	
	
	
	
				
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	



























	

		
	
	

	   
    
    
    	
    























	



	
		

	

 

	 
	
		
	











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		<!-- blx4 #180 blox4.html  -->
			

		
			
				
					
					
					
						
							
					
						
					
					
					
					
					
					
						
					
				
				
			
		
















	
		
		
			<div id="" class="blx blxPedithomepagepromosecondary blxM180  blox4_html  blxC229"><div class="home-split"> <a href="http://www.pcworld.com/magazines#tk.PW_DAP_HPMR"><img src="//csmb.staticworld.net/images/modules/pcw/PCW_10142014_HPM-L.png"></a> </div>     </div>
		
	

	


	
		
	











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		<!-- blx4 #186 blox4.html  -->
			

		
			
				
					
					
					
						
							
					
						
					
					
					
					
					
					
						
					
				
				
			
		
















	
		
		
			<div id="" class="blx blxPbizdevhomepagesecondary blxM186  blox4_html  blxC235"><div class="home-split"> <a href="http://www.pcworld.com/magazines#tk.PW_DAP_HPMR"><img src="//csmb.staticworld.net/images/modules/pcw/PCW_10142014_HPM-R.png"></a> </div>    </div>
		
	

	


	

	
			
			
	











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



    
    
		
		
	




















	
		
		
		
		
			<div id="gpt-custom-promo" class="side-promo side-module side-ad ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-custom-promo", "true");
	    			$('#gpt-custom-promo').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-custom-promo [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	 


</div>



						
						

















					
				


		   	</div>

			












 





<div id="panel-loader"></div>
<!-- IDGMPM-11812, category.getCategoryType() returns an integer, and 9 stands for tentpole-->
 



	
		










<link rel="stylesheet" href="/www.idgcsmb/css/tso-links.css?v=20210728121044" />

	<div id="tso-wrapper"><div id="tso" style="display:none"></div></div>
	<script type="text/javascript">
	function renderTSO(ads, requireHttps) {
		$thm.debug("renderTSO:"+ads.length);
		if (ads && ads.length > 0) {
			var selectedAds = selectTSOAds(ads,10);
			if (null != selectedAds && selectedAds.length > 0) {
				var html = "<h3>Sponsored Links</h3>";
				html += "<ul>";
				for (var i=0; i<selectedAds.length;i++) {
					html += "<li>";
					html += "<a href='"+selectedAds[i].url+"'> "+selectedAds[i].title+"</a>";
					if (null != selectedAds[i].pixel && selectedAds[i].pixel.length > 0) {
						html += selectedAds[i].pixel;
					}
					html += "</li>";
				}
				html += "</ul>";
				$("#tso").html(html).show();
			}
		}
	}
	function selectTSOAds(ads,max) {
		if (ads.length <= max) {
			return ads;
		} else {
			var uniq = {};
			var found = 0;
			var selectedAds = [];
			while (found < max) {
				var ad = ads[Math.floor(Math.random()*ads.length)];
				if (uniq[ad.id] != null) {
					continue;
				} else {
					uniq[ad.id] = true;
					found++;
					selectedAds.push(ad);
				}
			}
			return selectedAds;
		}
		return null;
	}
	</script>
	

	





		</div>
	
		










<link rel="stylesheet" href="/www.idgcsmb/css/footer.css?v=20210728121044" />
<link rel="stylesheet" href="/www.idgcsmb.th/css/footer.css?v=20210728121044" />
<div id="network"></div>

	












<footer id="footer" class="clearfix">
    <div class="container clearfix">
    	<div class="footer-col">
    		<a href="#" id="footer-logo" class="ir">TechHive</a>
    		<p>TechHive helps you find your tech sweet spot. We steer you to products you'll love and show you how to get the most out of them.</p>
    		<ul>
    			<li><a href="/about/about.html">About Us</a></li>
				<li><a href="/about/contact.html">Contact Us</a></li>
				<li><a href="/newsletters/signup.html">Newsletters</a></li>
				<li><a href="/about/member-preferences.html">Member Preferences</a></li>
				<li><a href="/about/cookie-policy.html">Cookie Policy</a></li>
				<li><a href="/index.rss">RSS</a></li>
				<li><a href="https://www.idg.com/idg-ad-choices/" rel="nofollow">Ad Choices</a></li>
				<li><a href="/about/privacy.html" rel="nofollow">Privacy Policy</a></li>
				<li><a href="https://www.idg.com/terms-of-service-agreement/" rel="nofollow">Terms of Service Agreement</a></li>
				<li><a href="/about/ccpa.html">California: Do Not Sell My Personal Info</a></li>
			</ul>
			
			<ul class="right">	
				<li><a href="https://shop.techhive.com">Shop</a></li>
				
				<li><a href="https://www.pcworld.com/couponcodes">Coupon Codes</a>
					<ul>
						<li><a href="https://www.pcworld.com/couponcodes/aliexpress">Aliexpress</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/ebay">Ebay</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/home-depot">Home Depot</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/hp">HP</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/jcpenney">jcpenney</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/oneplus">OnePlus</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/walmart">Walmart</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/target">Target</a></li>
						<li><a href="https://www.pcworld.com/couponcodes/6pm-com">6PM</a></li>
					</ul>
				</li>
				<li><a href="/about/affiliates.html">E-commerce Affiliate Relationships</a></li>
				
			</ul>
    	</div>
    	<div class="footer-col">
    		<h2>TechHive Categories</h2>
    		<ul>
    			
				<li><a href="/category/smart-home/">Smart Home</a></li>
				<li><a href="/category/cord-cutting/">Cord Cutting</a></li>
				<li><a href="/category/home-audio/">Home Audio</a></li>
				<li><a href="/category/network-router/">Routers</a></li>
				<li><a href="/category/home-security/">Home Security</a></li>
				<li><a href="/category/hubs-controllers/">Hubs &amp; Controllers</a></li>
			</ul>
			<ul class="right">
				
				<li><a href="/category/internet-of-things/">Internet of Things</a></li>
				<li><a href="/category/lighting/">Lighting</a></li>
				<li><a href="/category/smart-appliance/">Smart Appliances</a></li>
				<li><a href="/category/streaming-media/">Streaming Media</a></li>
				<li><a href="/category/thermostats/">Thermostats</a></li>
				<li><a href="/deals">Deals</a></li>
			</ul>



			<h3>IDG Network Sites</h3>
			<ul>
				<li><a href="https://www.idg.com/our-brands/techhive/" rel="nofollow">Advertise</a></li>
				<li><a href="https://www.idg.com/technetwork/technetwork-permissions-guildelines/" rel="nofollow">Permissions</a></li>
				<li><a href="http://www.macworld.com/" rel="nofollow">Macworld</a></li>
				<li><a href="http://www.pcworld.com/" rel="nofollow">PCWorld</a></li>
				<li><a href="http://www.techadvisor.co.uk/">Tech Advisor</a></li>
			</ul>
			<ul class="right">
				<li><a href="https://www.idg.com/technetwork/" rel="nofollow">IDG TechNetwork</a></li>
				<li><a href="https://www.idg.com/" rel="nofollow">IDG</a></li>
				<li><a href="http://blog.idg.com/" rel="nofollow">IDG Blog</a></li>
				<li><a href="https://www.idg.com/work-here/" rel="nofollow">Careers at IDG</a></li>
			</ul>
    	</div>
    	<div class="footer-col">
    		<div id="footer-social">
    			<span>Follow us</span> 
    			<a href="http://www.facebook.com/techhivemedia" class="network-fb ss-icon ss-social-circle banner-social banner-fb" alt="Facebook" itemprop="sameAs" rel="nofollow">
					&#xF610;
				</a>
				<a href="https://twitter.com/TechHive" class="network-tw ss-icon ss-social-circle banner-social banner-tw" alt="Twitter" itemprop="sameAs" rel="nofollow">
					&#xF611;
				</a>
				
    		</div>
    		
    		
		    <p>Visit other IDG sites:</p>
    		
    		<div id="idgInfo" class="styled-select">		
		            <select onchange="location = this.options[this.selectedIndex].value;" id="jumpMenu" name="jumpMenu" d30tagged="1" style="visibility: visible;">
		                <option value="">Select One</option>
						
							
						













	
		<option value="https://www.greenbot.com">Greenbot</option>
	
		<option value="https://www.macworld.com">Macworld</option>
	
		<option value="https://www.pcworld.com">PCWorld</option>
	
		<option value="https://www.techconnect.com">TechConnect</option>
	
		<option value="https://www.techhive.com">TechHive</option>
	

		            </select>
		    </div>
		    
		        <p><small><a href="http://idgcsmb.com/terms-of-service-agreement/">Copyright</a> &copy; 2021 IDG Communications, Inc.</small></p>
    	</div>
    </div>
</footer>



	<script type="text/javascript" src="/www/js/analytics/sp_analytics.js"></script>



		
				
		
			
				
			




















	
		
		
		
		
			<div id="gpt-infunnel" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt-infunnel", "true");
	    			$('#gpt-infunnel').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt-infunnel [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	
		
		
			
		
















<script type="text/javascript" src="/www/js/jquery/jquery_cookie.js"></script> 

<script src="/www.idgcsmb/js/jquery/jquery-ui-tools.js?v=20201201"></script>


<script src="/www.idgcsmb/js/thm_post.js?v=20210728121044"></script>

<script src="/www.idgcsmb/js/jquery/plug-ins/jquery.md5.js"></script>


<!-- <script src="/www.idgcsmb/js/autocomplete.js"></script>
 -->



	<script src="/www/js/jquery/jquery.timeago.js"></script>
	
	<script>
	$(document).ready(function(){
		$(".timeago").timeago();
	});
	</script>









<script type='text/javascript'>

if ($(window).width() < 581){
$("html.touch .home-hero-inner").append( "<div class='dots'><div class='ss-record dotone'></div><div class='ss-record dottwo'></div></div>" );

$("html.touch .home-hero-one").on("touchstart", function(e) {
 var touchStart = touchEnd = e.originalEvent.touches[0].pageX;
 var touchExceeded = false;

 $(this).on("touchmove", function(e) {
  touchEnd = e.originalEvent.touches[0].pageX;

  if(touchExceeded || touchStart - touchEnd > 50 || touchEnd - touchStart > 50) {
   e.preventDefault();
   touchExceeded = true;
	$(".home-hero-two").css({ 'display':'block'});	    
	$(".home-hero-one").css({ 'display':'none'});
	$(".dottwo").css({ 'color':'#ffffff'});  
	$(".dotone").css({ 'color':'#333333'});  
  }
 });

 $(this).on("touchend", function(e) {
  $(this).off("touchmove touchend");
 });
});


$("html.touch .home-hero-two").on("touchstart", function(e) {
 var touchStart = touchEnd = e.originalEvent.touches[0].pageX;
 var touchExceeded = false;
 $(this).on("touchmove", function(e) {
  touchEnd = e.originalEvent.touches[0].pageX;

  if(touchExceeded || touchStart - touchEnd > 50 || touchEnd - touchStart > 50) {
   e.preventDefault();

   touchExceeded = true;

	$(".home-hero-one").css({ 'display':'block'});	    
	$(".home-hero-two").css({ 'display':'none'});
	$(".dotone").css({ 'color':'#ffffff'});  
	$(".dottwo").css({ 'color':'#333333'});  

  }
 });

 $(this).on("touchend", function(e) {
  $(this).off("touchmove touchend");
 });
});

}


$(window).load(function(){
	IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
	if (IS_IPAD) {
		$('.iPadOverlay').fadeIn('fast').delay(4200).fadeOut('fast');
	}

	/*$("#gpt-showcase div").each(
	function() {
			var h = ($(this).parent().innerHeight() - $(this).outerHeight()) / 2;
			$(this).css("margin-top", h);
		});
	});*/
});


	// check to see if the slick function already exists on the page
	if (typeof($.fn.slick) != 'function') {
		// if not, call in the slick plugin, then call the carousel initialization as the callback function after the plugin loads
		$.getScript("/www/js/utils/slick/slick.min.js", slickCarouselInit)
	} else {
		// otherwise, just initialize the carousel
		slickCarouselInit();
	}
	
	function slickCarouselInit() {
		$('.home-features-carousel').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			
			responsive: [
				{
					breakpoint: 969,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		});
	}


      $(document).ready(function() {
        $(".learn-more, #learn-more-close").click(function() {
          $("#learn-more-popup").toggle();
          return false;
        });
      });


	g_bRequireHttps = true;
	 	var localeId = getLocale();
		$.ajax('/ads/tso?localeId=' + localeId,{
			dataType: 'json',
			success: function(data){
				renderTSO(data.tsoLinks, g_bRequireHttps);
			},
			error: function(jqXHR,error,thrown){
				$thm.debug("TSO AJAX Status: "+error+": "+thrown,true);
			}
		});
	
</script>

		
	<script type="text/javascript">
		var subscribersSiteId = "fbaf0d7e-da03-4205-a3e0-d0e8d979a55b"; 
	</script>
	<script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>


		
		<script type="text/javascript">
			a=top;f=self;
			var acceptedDomains = ["lookbookhq.com"];
			var cleanedHost = a.location.hostname.split(".").slice(-2).join(".");
			if(a!=f && acceptedDomains.indexOf(cleanedHost) < 0) {
				a.location=f.location;
			}
		</script>	

		














	
	
	    
	    
    	
    	
	    
	












	
	
	
	
	
	
	
	
	
	
	
	
	
	
	




 		
		










<script type="text/javascript">
//consent.digitalelement.queue.push(function(){
	$thm.logPlEvent({"b":"th","e":"view","t":"article","id":""});
//});
</script>

		
		
		
		











<!-- Begin comScore Tag -->
<script>
var _comscore = _comscore || [];
_comscore.push(
{ c1: "2", c2: "6035308", c3: "" });
(function()
{
	var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
	s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
	el.parentNode.insertBefore(s, el);
})();
</script>
<noscript>
<img src="https://sb.scorecardresearch.com/p?c1=2&c2=6035308&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->
	
		<div id="loginModal"></div>
		<div id="logoffModal"></div>
		<div id="abuseModal"></div>

		
			<!-- rev: 20210728121044  -->
		
		
		
		
			
				
			




















	
		
			<div id="gpt-skin" class=" ad-container"></div>
    			<script type="text/javascript">
    				try {
	    				IDG.GPT.addDisplayedAd("gpt-skin", "true");
	    				IDG.GPT.displayGoogleTagSlot('gpt-skin');
	    			}
	    			catch (exception) {
	    				console.log("Error with IDG.GPT: " + exception);
	    			}
    			</script>
		
		
		
		
	
 
 
			
		
		
		
			
		




















	
		
		
		
		
			<div id="gpt_custom_promo_2" class=" ad-container"></div>
    		<script type="text/javascript">
    			try {
	    			IDG.GPT.addDisplayedAd("gpt_custom_promo_2", "true");
	    			$('#gpt_custom_promo_2').responsiveAd({screenSize:'971 1115', scriptTags: []});
	    			IDG.GPT.log("Creating ad: gpt_custom_promo_2 [971 1115]");
	    		}
				catch (exception) {
					console.log("Error with IDG.GPT: " + exception);
				}
    		</script>
    	
	
 
 
	
		
		













	</body>
</html>
