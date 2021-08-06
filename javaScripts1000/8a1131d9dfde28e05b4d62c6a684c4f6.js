/*! For license information please see widgetClient.js.LICENSE.txt */
(()=>{var e={805:e=>{"use strict";e.exports=r,e.exports.isMobile=r,e.exports.default=r;var t=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function r(e){e||(e={});var r=e.ua;if(r||"undefined"==typeof navigator||(r=navigator.userAgent),r&&r.headers&&"string"==typeof r.headers["user-agent"]&&(r=r.headers["user-agent"]),"string"!=typeof r)return!1;var o=e.tablet?n.test(r):t.test(r);return!o&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==r.indexOf("Macintosh")&&-1!==r.indexOf("Safari")&&(o=!0),o}},808:(e,t,n)=>{var r,o;!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var l=t(c[0]);if(u=(r.read||r)(u,l)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(o[l]=u,e===l)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t=n(805),r=n.n(t),o=n(808),i=n.n(o),a="MAAC_Widget_displayed_date",c={1:"all",2:"matchPathname",3:"excludeMatchPathname",4:"includeUrl",5:"excludeUrl"};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(){var e,t=document.querySelectorAll("*"),n=t.length,r=0;if(n)for(var o=0;o<n;o++)(e=document.defaultView.getComputedStyle(t[o],null).getPropertyValue("z-index"))>r&&"auto"!==e&&(r=e);return+r},s=(u(e={},c[1],(function(e){return!0})),u(e,c[2],(function(e){var t=window.location.pathname;return t&&e&&e.includes(t)})),u(e,c[3],(function(e){var t=window.location.pathname;return t&&e&&!e.includes(t)})),u(e,c[4],(function(e){var t=window.location.href;return t&&e&&e.some((function(e){return t.indexOf(e)>-1&&""!==e}))})),u(e,c[5],(function(e){var t=window.location.href;return t&&e&&e.every((function(e){return-1===t.indexOf(e)||""===e}))})),e),f=function(e){if(null==(t=e)||"object"!==l(t)||!1!==Array.isArray(t))throw new Error("You might pass a non-object parameter");var t;return"?"+Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")},d=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return Number("".concat(t).concat(n<10?"0"+n:n).concat(r<10?"0"+r:r))};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={Widget:{queue:[],frames:[],options:null,init:function(e){var t=this;if(!Array.isArray(e))throw new TypeError("Options must be a valid Array");return this.options=e,this.options.forEach((function(e){s[c[e.url_filter_type]](e.url_filter_strings)&&function(e,t){if(1===e)return!0;if(2===e){var n=d(),r=Number(i().get("".concat(a,"_").concat(t)));return!r||n>r}return!1}(e.trigger_frequency_type,e.id)&&t.queue.push(e)})),this},mount:function(e,t){var n,r,o=e.isMobile,i=e.botId,a=e.widgetId,c=e.link,u=e.imageUrl,l=e.imageWidth,s=e.imageHeight,d=e.position,g=document.createElement("iframe"),h={position:"fixed",zIndex:p()+1,border:"none",display:"block",opacity:1,visibility:"visible"},y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({right:"auto",bottom:d.bottom+"px",left:"50%",width:"90%",height:"calc(".concat(s/l," * 90vw)")},(n="Transform",r="translate(-50%, 0)",["webkit","ms"].reduce((function(e,t){return e[t+n]=r,e}),{}))),v={right:Number.isInteger(d.right)?d.right+"px":"auto",bottom:d.bottom+"px",left:Number.isInteger(d.left)?d.left+"px":"auto",width:l/2+"px",height:s/2+"px"},w="/widget/".concat(f({link:c,imageUrl:u,isMobile:o,botId:i,widgetId:a}));for(var x in h)g.style[x]=h[x];if(o)for(var O in y)g.style[O]=y[O];else for(var _ in v)g.style[_]=v[_];g.id=a,g.src="https://".concat("plugin.cresclab.com").concat(w),document.body.appendChild(g);try{t(g)}catch(e){}this.frames.push(g)},show:function(){var e=this;this.queue.forEach((function(t){var n=t.desktop_setting,o=n.enable,c=n.image_url,u=n.image_size,l=u.width,p=u.height,s=n.position,f=s.type,m=s.horizontal_pixel,b=s.bottom_pixel,g=t.mobile_setting,h=g.enable,y=g.image_url,v=g.image_size,w=v.width,x=v.height,O=g.position.bottom_pixel,_=r()(),k=!_&&o,j=_&&h,C=k?c:j?y:null,I=k?l:j?w:0,S=k?p:j?x:0,P={right:"right"===f?m:null,bottom:k?b:j?O:null,left:"left"===f?m:null};"sec"===t.trigger_setting.type&&setTimeout((function(){C&&e.mount({isMobile:_,botId:t.bot_id,widgetId:t.id,link:t.link,imageUrl:C,imageWidth:I,imageHeight:S,position:P},(function(){if(2===t.trigger_frequency_type){var e=d();i().set("".concat(a,"_").concat(t.id),e,{expires:2,path:1===t.url_filter_type?"/":window.location.pathname})}}))}),1e3*t.trigger_setting.value)}))},hide:function(e){var t=this.frames.find((function(t){return t.id===e}));t&&(t.remove(),this.frames.filter((function(t){return t.id===e})))}}}.Widget.init([{"id": 196, "bot": 916, "link_type": 1, "link": "https://maac.io/1sbpt", "url_filter_type": 1, "url_filter_strings": ["https://www.pressplay.cc"], "trigger_setting": {"type": "sec", "value": 30}, "trigger_frequency_type": 2, "desktop_setting": {"enable": true, "image_url": "https://cdn.maac.app/production/org_1051/line/bot_916/Widget/image/ab4b518d6af14f1cbb8aa6817c30b83a.gif?alt=media", "image_size": {"width": 640, "height": 288}, "position": {"type": "left", "bottom_pixel": 60, "horizontal_pixel": 10}}, "mobile_setting": {"enable": false, "image_url": "https://cdn.maac.app/production/org_1051/line/bot_916/Widget/image/b33626fdf1f74d55b1d65ad41806af6f.gif?alt=media", "image_size": {"width": 700, "height": 300}, "position": {"bottom_pixel": 0}}}]);g.show(),window.addEventListener("message",(function(e){e.origin==="https://".concat("plugin.cresclab.com")&&e.data&&"CLOSE_FRAME"===e.data.type&&g.hide(e.data.payload.widgetId)}))})()})();