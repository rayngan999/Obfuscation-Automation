window.cre_client=function(){var e=function(){function e(e,n){var a=document.getElementById("jsonp_"+n);a&&a.parentNode&&a.parentNode.removeChild(a),window[e]=void 0}function n(e){for(var n=e+"=",a=document.cookie.split(";"),t=0;a.length>t;t++){for(var i=a[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null}function a(e,n){return s.debug?(console.log("[DEBUG] "+e+": "+JSON.stringify(n)),void 0):null}function t(e,n){var t=document.createElement("script");t.async=!0,t.src=e,t.id="jsonp_"+n,a("Requested script",t.src);var i=document.head||document.getElementsByTagName("head")[0];i?i.appendChild(t):document.body.appendChild(t)}function i(e){if(!g||s.debug){var n=f;f=[],h={};for(var t=0;n.length>t;t++)try{n[t](e)}catch(i){console.error(i)}a("Requesting offer for",e)}}function r(e){var n={};s.getParams().replace(RegExp("([^?=&]+)(=([^&]*))?","g"),function(e,a,t,i){n[a]=i});var a=n[e];return null!=a?a:""}function o(){return"true"===n("CREOptOut")}function d(){var e=[];for(var n in h)if(h.hasOwnProperty(n)){var a=encodeURIComponent(h[n]);(""!==a||"_r"===n)&&e.push(n+"="+a)}return"?"+e.join("&")}function m(){for(var e=[{name:"service_id",internalName:"serviceid"},{name:"referrer",internalName:"_r"},{name:"origin",internalName:"origin"},{name:"doc_type",internalName:"doctype"},{name:"content_id",internalName:"contentid"},{name:"cms_id",internalName:"cms_id"},{name:"channel",internalName:"channel"},{name:"sub_channel",internalName:"subchannel"},{name:"sub_sub_channel",internalName:"subsubchannel"},{name:"heading",internalName:"heading"},{name:"kicker",internalName:"kicker"},{name:"video_length",internalName:"length"},{name:"video_auto_play",internalName:"autoplay"},{name:"video_position",internalName:"position"},{name:"site",internalName:"site"},{name:"tag",internalName:"tag"},{name:"entitlement",internalName:"entitlement"},{name:"offer_ids",internalName:"offerids"},{name:"variant_ids",internalName:"variantids"},{name:"disrupter_ids",internalName:"disrupterids"},{name:"global_variant_id",internalName:"globalvariant"},{name:"payment_method",internalName:"paymenttype"},{name:"entitlement_id",internalName:"entitlementid"},{name:"element_id",internalName:"elementid"},{name:"store_id",internalName:"storeid"},{name:"ab_test_id",internalName:"abtestid"},{name:"ab_test_variant_id",internalName:"abtestvariantid"},{name:"adblocker",internalName:"adblocker"},{name:"amp_reader_id",internalName:"_creid"},{name:"page_view",internalName:"pageview",key:"action"},{name:"page_complete",internalName:"pagecomplete",key:"action"},{name:"video_start",internalName:"videostart",key:"action"},{name:"video_content_start",internalName:"videostart",key:"action"},{name:"video_ping",internalName:"videoposition",key:"action"},{name:"video_end",internalName:"videoend",key:"action"},{name:"app_start",internalName:"app_start",key:"action"},{name:"app_stop",internalName:"app_stop",key:"action"},{name:"app_background",internalName:"app_background",key:"action"},{name:"app_foreground",internalName:"app_foreground",key:"action"}],n=0,a=e.length;a>n;n++)(function(e){var n=e.name,a=e.internalName;s["set_"+n]=function(n){e.key?h[e.key]=a:h[a]=n}})(e[n])}function l(e){document.getElementsByTagName("body")[0]?c(e):document.addEventListener&&document.addEventListener("DOMContentLoaded",function(){c(e)},!1)}function c(n){if(n&&n.data){var a=n.data;if("created"===a.stream_status||"inactive"===a.stream_status||"unknown_device"===a.stream_status){var i=window.screen;h.width=i.width,h.height=i.height,h.dpi_x=u("width"),h.dpi_y=u("height"),!h.tracking_id&&a.tracking_id&&(h.tracking_id=a.tracking_id);var r=Math.floor(1e5*Math.random()),o="cre_callback_"+r;h._c=o;var m=d();t(p+m,o),window[o]=function(){e(o,r)}}}}function u(e){var n=document.createElement("div");n.style[e]="1in";var a=document.getElementsByTagName("body")[0];a.appendChild(n);var t=document.defaultView.getComputedStyle(n,null).getPropertyValue(e);return a.removeChild(n),parseFloat(t)}var s=this,_="//www.zeit.de/cre-1.0/tracking/call.js",p="//www.zeit.de/cre-1.0/tracking/device.js",v="false",g="true"==v,f=[];this.debug=-1!==document.cookie.indexOf("cre_debug=1");var h={};m(),this.request=function(){if(!o()){h._u=window.location.href;var n=""===h._r;h._r=n?"":h._r||document.referrer;var a=Math.floor(1e5*Math.random()),m="cre_callback_"+a;window[m]=function(n){i(n),e(m,a),l(n)},h._c=m,h._kid=r("kid"),h._wid=r("wid"),window.oldbrowser===!0&&(h.oldbrowser="true");var c=d();return t(_+c,a),!0}},this.addListener=function(e){f.push(e)},this.getParams=function(){return window.location.search}};return new e}();