
<script>

var allowedOrigins = [["^wikibuy\\.com\\/onboarding$", ""], ["^127\\.0\\.0\\.1\\/onboarding$", ""]];
var blockedOrigins = [];

!function(){"use strict";var d,l,r,c;try{d=window.localStorage}catch(e){l=e}function u(e){return!c||0!==e.indexOf(c.origin)}function v(e,i){return new RegExp(i[0],i[1]).test(e)}function p(e){if(!r){var i={id:"iframeerror",type:"ERROR",response:"Error accessing localStorage: "+(r=e?e.toString():"Localstorage is undefined")};0,event.source.postMessage(JSON.stringify(i),event.origin)}}window.addEventListener("message",function(e){var i,r,t,n,o,s=!1;for(o=0;o<allowedOrigins.length;o++)if(v(e.origin,allowedOrigins[o])){s=!0;break}if(s)for(o=0;o<blockedOrigins.length;o++)if(v(e.origin,blockedOrigins[o])){0,s=!1;break}if(s){c=e;try{i=JSON.parse(e.data)}catch(e){return void 0}if(t=e.origin+"_"+i.key,!d)return p(l);if("GET"===i.type)r=d.getItem(t);else if("PUT"===i.type)try{r=d.setItem(t,i.value)}catch(e){return p(e)}else if("GETALL"===i.type)for(var a in r={},d)d.hasOwnProperty(a)&&u(a)&&(r[a]=d.getItem(a));else{if("DELETE"!==i.type)return void 0;for(var a in d)if(d.hasOwnProperty(a)&&!u(a)){var g=(void 0,1===(f=a.split("$$")).length?null:f[0].split("_")[1]);g&&g!==i.visitorId&&d.removeItem(a)}}var f;void 0!==i.id&&(n={id:i.id,response:r},e.source.postMessage(JSON.stringify(n),e.origin))}},!0),window.addEventListener("storage",function(e){c&&u(e.key)&&c.source.postMessage(JSON.stringify({type:"SYNC",response:{key:e.key,value:e.newValue}}),c.origin)},!0)}();
</script>