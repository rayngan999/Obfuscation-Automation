var FR_OTT=function(){var n,o=new window.WeakMap;return n=function(){function n(n,o,e,t){for(t=0,o=o.split?o.split("."):o;n&&t<o.length;)n=n[o[t++]];return void 0===n||t<o.length?e:n}function o(n){switch(n){case"banner_shown":return"Cookie Consent | CCPA | Banner Shown";case"accept_all_cookies":return"Cookie Consent | CCPA | Accept Cookies";case"privacy_policy":return"Cookie Consent | CCPA | Privacy Policy";case"close_banner":return"Cookie Consent | CCPA | Close Banner"}}function e(e,t){var c;c=function(){var t,c;(t=n(window,"analyticsVendors.AdobeAnalytics.componentFunction_Custom"),c=n(window,"digitalData.loadState.pageLoad"),t&&c?function(){var n=arguments;c.then(function(){t.apply(window,n)})}:function(){})({componentTracking:{component:{componentInfo:{componentID:"3rdParty_OneTrust",componentName:"Banner"}}},pev2:o(e)})},window.VRI_AnalyticsLoaded?c():window.addEventListener("VRI_AnalyticsLoaded",function(){c()})}var t=$(document.querySelector("#onetrust-banner-sdk"));t.is(":visible")&&e("banner_shown"),t.on("click","#onetrust-accept-btn-handler",function(){e("accept_all_cookies")}),t.on("click",".onetrust-close-btn-handler",function(){e("close_banner")}),t.on("click","#vr-onetrust-privacy-policy-link-handler",function(){e("privacy_policy")})},function(){o.get(n)||(o.set(n,n),window.setTimeout(function(){n()},1e3))}}();function OptanonWrapper(n,o){FR_OTT()}
//# sourceMappingURL=oneTrustTracking.js.map