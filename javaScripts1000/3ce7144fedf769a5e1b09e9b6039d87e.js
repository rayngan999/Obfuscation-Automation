!function(e){e.extend(e.util,{cookie:function(e,n,t){null!==n&&"object"==typeof n&&(t=n),t=t||{};var o,i=t.raw?function(e){return e}:escape,r=t.raw?function(e){return e}:unescape;if(arguments.length>1&&(null===n||"object"!=typeof n)){if(t=jQuery.extend({},t),null===n&&(t.expires=-1),"number"==typeof t.expires){var a=t.expires,u=t.expires=new Date;u.setDate(u.getDate()+a)}return/\b1688\.com$/.test(window.location.hostname)&&t&&"alibaba.com"==t.domain&&(t.domain="1688.com"),document.cookie=[i(e),"=",t.raw?String(n):i(String(n)),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")}return(o=new RegExp("(?:^|; )"+escape(e)+"=([^;]*)").exec(document.cookie))?r(o[1]):null}}),e.add("util-cookie")}(jQuery);;