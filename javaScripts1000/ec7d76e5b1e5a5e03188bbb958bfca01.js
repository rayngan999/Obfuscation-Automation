/*! lazysizes - v5.2.2 */

!function(e,t){var n=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}(window,function(e,t,d){"use strict";var l={nodeName:""},s=!!e.HTMLPictureElement&&"sizes"in t.createElement("img"),r=e.lazySizes&&d.cfg;r.getNoscriptContent=function(e){return e.textContent||e.innerText},e.addEventListener("lazybeforeunveil",function(e){var t,n;e.detail.instance!=d||e.defaultPrevented||null==e.target.getAttribute("data-noscript")||(t=e.target.querySelector('noscript, script[type*="html"]')||{},(n=r.getNoscriptContent(t))&&(e.target.innerHTML=n,function(t){for(var e,n,r,i,a=t.target.querySelectorAll("img, iframe"),o=0;o<a.length;o++)e=a[o].getAttribute("srcset")||"picture"==(a[o].parentNode||l).nodeName.toLowerCase(),!s&&e&&d.uP(a[o]),a[o].complete||!e&&!a[o].src||(t.detail.firesLoad=!0,r&&i||(i=0,r=function(e){i--,e&&!(i<1)||n||(n=!0,t.detail.firesLoad=!1,d.fire(t.target,"_lazyloaded",{},!1,!0)),e&&e.target&&(e.target.removeEventListener("load",r),e.target.removeEventListener("error",r))},setTimeout(r,3500)),i++,a[o].addEventListener("load",r),a[o].addEventListener("error",r))}(e)))})});