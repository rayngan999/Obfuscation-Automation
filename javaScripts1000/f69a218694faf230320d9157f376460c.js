window.hotlobj.config = { CONSOLE_DEBUG: 0, VISUAL_DEBUG: 0, HOTID: 'hotid', COOKIE_AGE_MINUTES: 25920000, DOMAIN: '.hotmart.com', IDENTIFICATION_PIXEL_URL: 'https://identification.hotmart.com/id.gif', TRACKING_REST_URL: 'https://tracking-api.hotmart.com/rest/track'};
var idhotobj=window.hotlobj;
idhotobj.util={setCookie:function(a,b,c,d){var e=new Date;e.setTime(e.getTime()+6E4*c);c="expires\x3d"+e.toUTCString();try{document.cookie=a+"\x3d"+b+";"+c+";"+("domain\x3d"+d)+";path\x3d/;Secure;SameSite\x3dNone"}catch(f){idhotobj.util.log(f.message)}},getCookie:function(a){a+="\x3d";try{for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=idhotobj.util.trim(b[c]);if(0==d.indexOf(a))return ck=d.substring(a.length,d.length)}}catch(e){idhotobj.util.log(e.message)}return null},setLocalStorage:function(a,
b){if("undefined"!==typeof Storage)try{localStorage.setItem(a,b)}catch(c){idhotobj.util.log(c.message)}},getLocalStorage:function(a){if("undefined"!==typeof Storage)try{return localStorage.getItem(a)}catch(b){idhotobj.util.log(b.message)}return null},sendRequest:window.hotlobj.sendRequest||function(a,b,c,d,e){var f;f=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");"GET"==b&&(a=a+"?"+d,d="");e&&(f.onreadystatechange=e);f.open(b,a,c);f.setRequestHeader("Content-type",
"application/json");"GET"==b&&f.send(d)},sendPost:function(a){try{idhotobj.util.sendRequest(idhotobj.config.TRACKING_REST_URL,"POST",!0,a,null)}catch(b){idhotobj.util.log(b.message)}},sendGet:function(a){try{idhotobj.util.sendRequest(idhotobj.config.TRACKING_REST_URL,"GET",!0,a,null)}catch(b){idhotobj.util.log(b.message)}},log:function(a){1==idhotobj.config.CONSOLE_DEBUG&&"undefined"!=typeof console&&("object"==typeof a?console.log(JSON.stringify(a)):console.log(a));if(1==idhotobj.config.VISUAL_DEBUG&&
idhotobj.util.visualConsole){var b="\x3cbr/\x3e",b="object"==typeof a?b+"object "+JSON.stringify(a):b+a;idhotobj.util.visualConsole.innerHTML+=b}},visualConsole:null,test:function(a){1==idhotobj.config.VISUAL_DEBUG&&null==idhotobj.util.visualConsole&&(idhotobj.util.visualConsole=document.createElement("span"),document.body.appendChild(idhotobj.util.visualConsole))},trim:function(a){return"undefined"==typeof a.trim?a:a.trim()},appendToQueryString:function(a,b){a||(a="");if(b)for(var c in b)b.hasOwnProperty(c)&&
(0<a.length&&(a+="\x26"),a=a+c+"\x3d"+b[c]);return a}};
idhotobj.identify={obj:null,init:function(){idhotobj.identify.createProxy();idhotobj.util.test("");idhotobj.identify.obj=this.read();this.gen()},createProxy:function(){if(!idhotobj.identify.hotproxy){idhotobj.identify.hotproxy=window.hot;var a=window.hot.q;window.hot=function(){idhotobj.identify.hotproxy.apply(this,Array.prototype.slice.call(arguments));idhotobj.identify.send.interval&&clearInterval(idhotobj.identify.send.interval);var a=!1;if(window.hot.q)for(var c=0;c<window.hot.q.length;++c){var d=
window.hot.q[c];"send"==d["0"]&&(d["0"]="trackingType",a=!0)}a&&idhotobj.identify.send.result&&idhotobj.identify.writeServer(idhotobj.identify.send.result)};window.hot.q=a}},read:function(){var a=null,b=null;idhotobj.util.getLocalStorage(idhotobj.config.HOTID)&&(a=idhotobj.util.getLocalStorage(idhotobj.config.HOTID),a="{"===a[0]?JSON.parse(a):JSON.parse(window.atob(a)));idhotobj.util.getCookie(idhotobj.config.HOTID)&&(b=idhotobj.util.getCookie(idhotobj.config.HOTID),b="{"===b[0]?JSON.parse(b):JSON.parse(window.atob(b)));
var c=null;if(a||b)c={};a||(a={});b||(b={});if(a.cid||b.cid)c.cid=b.cid||a.cid;if(a.bid||b.bid)c.bid=b.bid||a.bid;if(a.sid||b.sid)c.sid=b.sid||a.sid;return c},gen:function(){this.cbgen()},cbgen:function(){var a=idhotobj.identify.obj;a||(a={});if(!a.cid){var b=(""+(new Date).getTime()).substring(0,13),c=(""+Math.floor(1E18*Math.random())).substring(0,19);a.cid=b+c}a.bid=a.cid;idhotobj.identify.obj=a;idhotobj.identify.obj.locationHref=encodeURIComponent(location.href);idhotobj.identify.write(idhotobj.identify.obj)},
write:function(a){if(a){var b=JSON.stringify(a),b=window.btoa(b);idhotobj.util.setCookie(idhotobj.config.HOTID,b,idhotobj.config.COOKIE_AGE_MINUTES,idhotobj.getDomainToHotId());idhotobj.util.setLocalStorage(idhotobj.config.HOTID,b);idhotobj.identify.writeServer(a);idhotobj.identify.writePixel(a);idhotobj.identify.send.result=a;idhotobj.identify.send.interval=setInterval(idhotobj.identify.send.verify,1E3)}},writeServer:function(a){if(window.hot.q)for(var b=0;b<window.hot.q.length;++b){var c=window.hot.q[b];
c["0"]&&""!=c["0"]&&c["1"]&&""!=c["1"]&&(a[c["0"]]=encodeURIComponent(c["1"]))}b="";document.referrer&&(b="previous\x3d"+encodeURIComponent(document.referrer));a=idhotobj.util.appendToQueryString(b,a);idhotobj.util.sendGet(a)},writePixel:function(a){var b=document.createElement("img");b.id="px_img";b.src=idhotobj.config.IDENTIFICATION_PIXEL_URL+"?cid\x3d"+a.cid+"\x26bid\x3d"+a.bid;b.style.display="none";b.width="1px";b.height="1px";document.body.appendChild(b)}};
idhotobj.identify.send={result:null,interval:null,timeout:10,verify:function(){idhotobj.identify.send.timeout--;var a=!1;0>=idhotobj.identify.send.timeout&&(a=!0);var b=!1;if(window.hot.q)for(var c=0;c<window.hot.q.length;++c){var d=window.hot.q[c];"send"==d["0"]&&(d["0"]="trackingType",b=!0)}b&&idhotobj.identify.send.result&&(idhotobj.identify.writeServer(idhotobj.identify.send.result),a=!0);a&&clearInterval(idhotobj.identify.send.interval)}};idhotobj.identify.init();