(function(){var g=!0,n=!1,h="",k="",l=function(){if(!n){n=!0;for(var a=document.querySelectorAll("script[data-nativendo-init]"),p=a.length,f=0;p>f;f++){var c=a[f].getAttribute("data-nativendo-init");if(c&&window["nativendo_"+c+"_init"]){var d=[window["nativendo_"+c+"_init"].q],b=[];c=window["nativendo_"+c+"_init"].s;b.push("gdpr/"+h);b.push("gdpr_consent/"+k);c+=b.join("/")+"?"+d.join("&");try{var e=document.createElement("link");e.href=c;e.rel="preload";e.as="script";document.head.appendChild(e)}catch(q){}d=document.createElement("script");d.type="text/javascript";d.async=!0;d.src=c;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(d,b)}}}};try{if("undefined"!==typeof window.context&&"AMP-AD"==window.context.tagName)h="undefined"!==typeof window.context.initialConsentState&&null!==window.context.initialConsentState&&2>=window.context.initialConsentState?"1":"",k="undefined"!==typeof window.context.initialConsentValue&&null!==window.context.initialConsentValue?window.context.initialConsentValue:"";else{if(window!==parent&&"undefined"==typeof __tcfapi){for(var b=window,m,e={};b;){try{if(b.frames.__tcfapiLocator){m=b;break}}catch(a){}if(b===window.top)break;b=b.parent}window.__tcfapi=function(a,b,f,c){if(m){var d=Math.random()+"";a={__tcfapiCall:{command:a,parameter:c,version:b,callId:d}};e[d]=f;m.postMessage(a,"*")}else l()};window.addEventListener("message",function(a){var b={};try{b="string"===typeof a.data?JSON.parse(a.data):a.data}catch(f){}(a=b.__tcfapiReturn)&&"function"===typeof e[a.callId]&&(e[a.callId](a.returnValue,a.success),e[a.callId]=null)},!1)}"undefined"!=typeof __tcfapi&&(g=!1,__tcfapi("addEventListener",2,function(a,b){!b||"useractioncomplete"!==a.eventStatus&&"tcloaded"!==a.eventStatus||(__tcfapi("removeEventListener",2,function(a){},a.listenerId),"undefined"!=typeof a.gdprApplies&&(h=a.gdprApplies?1:0),"undefined"!=typeof a.tcString&&(k=a.tcString),l())}))}}catch(a){g=!0}g&&l()})();