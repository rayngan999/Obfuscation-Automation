"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e,t,r){(e.Kustomer=r).q=[];var n=t.querySelectorAll("[data-kustomer-api-key]")[0];if(n&&n.parentNode){for(var o=n.getAttribute("data-kustomer-api-key"),a=["start"],i=0;i<a.length;i++)!function(e,t){e[t]=function(){e.q.push(_defineProperty({},t,Array.prototype.slice.call(arguments,0)))}}(r,a[i]);r.a=o;var u,o=t.createElement("script");o.src="https://cdn.kustomerapp.com/chat-web/release-v0.1.174/widget-api.330217f1d5e229f78941.js",n.parentNode.insertBefore(o,n),"function"==typeof Event?u=new Event("kustomerLoaded"):(u=t.createEvent("Event")).initEvent("kustomerLoaded",!0,!0),e.dispatchEvent(u)}}(window,document,window.Kustomer||{});