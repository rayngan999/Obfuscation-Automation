<!DOCTYPE html>
<html>
<head>
</head>
<body>
<div>
<script type="text/javascript">
window.JSON||(window.JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function b(a){d.lastIndex=0;return d.test(a)?'"'+a.replace(d,function(a){var c=h[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var k,n,e,h,q=g,l,f=d[a];f&&"object"===typeof f&&"function"===typeof f.toJSON&&(f=f.toJSON(a));"function"===typeof m&&(f=m.call(d,a,f));switch(typeof f){case "string":return b(f);case "number":return isFinite(f)?String(f):"null";case "boolean":case "null":return String(f);
case "object":if(!f)return"null";g+=p;l=[];if("[object Array]"===Object.prototype.toString.apply(f)){h=f.length;for(k=0;k<h;k+=1)l[k]=c(k,f)||"null";e=0===l.length?"[]":g?"[\n"+g+l.join(",\n"+g)+"\n"+q+"]":"["+l.join(",")+"]";g=q;return e}if(m&&"object"===typeof m)for(h=m.length,k=0;k<h;k+=1)"string"===typeof m[k]&&(n=m[k],(e=c(n,f))&&l.push(b(n)+(g?": ":":")+e));else for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e=c(n,f))&&l.push(b(n)+(g?": ":":")+e);e=0===l.length?"{}":g?"{\n"+g+l.join(",\n"+
g)+"\n"+q+"}":"{"+l.join(",")+"}";g=q;return e}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(c){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,p,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;"function"!==typeof window.JSON.stringify&&(window.JSON.stringify=function(a,b,e){var d;p=g="";if("number"===typeof e)for(d=0;d<e;d+=1)p+=" ";else"string"===typeof e&&(p=e);if((m=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return c("",
{"":a})});"function"!==typeof window.JSON.parse&&(window.JSON.parse=function(a,c){function b(a,e){var d,g,f=a[e];if(f&&"object"===typeof f)for(d in f)Object.prototype.hasOwnProperty.call(f,d)&&(g=b(f,d),void 0!==g?f[d]=g:delete f[d]);return c.call(a,e,f)}var d;a=String(a);e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof c?b({"":d},""):d;throw new SyntaxError("JSON.parse");})})();window.dp_jsonp={call:function(a,b){var c=document.getElementsByTagName("head")[0],e=document.createElement("script");e.type="text/javascript";e.src=a+(-1==a.indexOf("?")?"?":"\x26")+"callback\x3ddp_jsonp.process";c.appendChild(e)},process:function(a){}};
function base64Encode(a){var b,c,e,d,g=0,p=0,h="",h=[];if(!a)return a;do b=a.charCodeAt(g++),c=a.charCodeAt(g++),e=a.charCodeAt(g++),d=b<<16|c<<8|e,b=d>>18&63,c=d>>12&63,e=d>>6&63,d&=63,h[p++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(b)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(c)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(d);
while(g<a.length);h=h.join("");a=a.length%3;return(a?h.slice(0,a-3):h)+"\x3d\x3d\x3d".slice(a||3)}function setJsuuid(){return new Promise(function(a){try{if(window.localStorage){var b=localStorage.getItem("ml_jsuuid");b&&"undefined"!=typeof Promise?getNextJsuuid(b).then(function(c){c||(c=b);setLocalStorage(b,c);a()}):(setLocalStorage(b,"6a7a2fdd-1218-4e0f-b432-9aefb5c58a01-1627947042932"),a())}}catch(c){window.jsuuid=null,a()}})}
function getNextJsuuid(a){return new Promise(function(b){var c=new XMLHttpRequest;c.responseType="json";c.open("GET","https://www.mercadolibre.com/jms/lgz/background/jsuuid?current\x3d"+a);c.withCredentials=!1;c.onload=function(){200==this.status?b(c.response.jsuuid):b(null)};c.send()})}function setLocalStorage(a,b){if(a==b)window.jsuuid=a;else try{localStorage.setItem("ml_jsuuid",b),window.jsuuid=b}catch(c){window.jsuuid=null}}
function supportIndexedDB(){window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;window.support_idb=!!window.indexedDB;return!!window.indexedDB}function getStoreValue(a,b){return new Promise(function(c){var e=a.target.result,d=e.transaction("dp","readwrite").objectStore("dp").get("uuid");d.onsuccess=function(){"undefined"==typeof d.result?(setStoreValue(e,b),window.idbuuid=b):window.idbuuid=d.result.value;c()};d.onerror=function(a){c()}})}
function setStoreValue(a,b){var c={name:"uuid",value:b};a.transaction("dp","readwrite").objectStore("dp").add(c)}
function setIdbuuid(){return new Promise(function(a){if(supportIndexedDB()){var b=window.indexedDB.open("db",1);b.onsuccess=function(c){getStoreValue(c,"92362b91-fea4-47bd-a16d-8f3a19c557e9-1627947042932").then(function(){a()})};b.onerror=function(c){a()};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("dp",{keyPath:"name"});a.createIndex("name","name",{unique:!0});a.createIndex("value","value",{unique:!0})}}})}
function getUrl(){var a=JSON.stringify({jsuuid:window.jsuuid,support_idb:window.support_idb,idbuuid:window.idbuuid}),a=base64Encode(a),a={msg:a},a=JSON.stringify(a);return a="https://www.mercadolibre.com/jms/lgz/background/session/armor.40c9cad93c07bfa83c5d81fb86c62b129a426fca85e6b1b7c0612f3526a4f4a50c327b74258af42b19b4d78084d36061395a2e688486d1e20f53bb7e71c10f6fd01ae52a1306072daaf678355963cd5f.7b62e4dafa4e6a7c751f1e6777321ebf/cross_domain/jsonp?_method\x3dPUT\x26_body\x3d"+encodeURIComponent(a)}function doProfile(){Promise.all([setIdbuuid(),setJsuuid()]).then(function(){window.dp_jsonp.call(getUrl())})}
"complete"===document.readyState?doProfile():window.addEventListener?window.addEventListener("load",doProfile,!1):window.attachEvent&&window.attachEvent("onload",doProfile); </script>
</div>
</body>
</html>