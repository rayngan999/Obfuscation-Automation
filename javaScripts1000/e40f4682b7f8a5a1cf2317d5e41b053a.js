!function(e){"use strict";"function"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n})}(window),function(){"use strict";var o="1.1.0p",t=!1,a=0,c=0,s=1e3;function i(e){t&&console.log(e)}function u(e){var t,n,r,o,a,c,s,i="",u=0,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(e=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):(127<r&&r<2048?t+=String.fromCharCode(r>>6|192):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128)),t+=String.fromCharCode(63&r|128))}return t}(e);u<e.length;)o=(t=e.charCodeAt(u++))>>2,a=(3&t)<<4|(n=e.charCodeAt(u++))>>4,c=(15&n)<<2|(r=e.charCodeAt(u++))>>6,s=63&r,isNaN(n)?c=s=64:isNaN(r)&&(s=64),i=i+d.charAt(o)+d.charAt(a)+d.charAt(c)+d.charAt(s);return i}function d(e,t){var n=t?"success":"failure";i("Finished - "+n),window._ST_PING={status:n,sessionId:e.sessionId}}function f(n,r){var e=JSON.stringify({pingVersion:o,appId:r.appId,appSessionId:r.sessionId}),t=document.createElement("script");t.src="https://static.securedtouch.com/sdk/pong.js?body="+encodeURIComponent(u(e)),n.parentNode.insertBefore(t,n),t.onload=function(){d(r,!0)},t.onerror=function(){var e,t;e=n,t=r,i("Failed!"),++a<c?(i("retry "+(a+1)+"..."),setTimeout(function(){f(e,t)},s)):d(t,!1)}}var e=document.getElementById("cc091bb3a3e3bef61d49e360dcfdbc84");e?f(e,function(e){var t,n,r,o=document.createElement("a"),a={};for(o.href=e,t=o.search.replace(/^\?/,"").split("&"),r=0;r<t.length;r++)a[(n=t[r].split("="))[0]]=n[1];return{protocol:o.protocol,host:o.host,params:a}}(e.src).params):window._ST_PING={status:"failure"}}();