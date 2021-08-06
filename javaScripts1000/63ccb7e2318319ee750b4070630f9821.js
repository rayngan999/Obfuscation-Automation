<!DOCTYPE html>
<html>
<head>
    <script>
        //
/* Version 99c2fcc5ccc30ea4d38a1a74eeb7a6a6 v:4.4.3.717, c:5c3e437ceccf10c13fd31ac6cf85f973af201f88, b:4.4.3.717 n:INTERNAL-BUILD */var f,h=f||(f={}),k=h.c||(h.c={});k.b||(k.b={});var l=f||(f={}),m=l.c||(l.c={});m.b||(m.b={});
(function(e){(function(e){(function(e){var g=function(){function b(){}b.addEventListener=function(a,b,d){function n(){try{return d.apply(this,Array.prototype.slice.call(arguments))}catch(a){}}a.addEventListener?a.addEventListener(b,n,!1):a.attachEvent&&a.attachEvent("on"+b,n)};b.g=function(){var a=b.d(window.crypto)&&b.e(window.crypto.getRandomValues)?window.crypto:b.d(window.msCrypto)&&b.e(window.msCrypto.getRandomValues)&&window.msCrypto;if(a){var c=new Uint16Array(8);a.getRandomValues(c);a=function(a){a=
a.toString(16);return"0000".substr(a.length)+a};return a(c[0])+a(c[1])+"_"+a(c[2])+"_"+a(c[3])+"_"+a(c[4])+"_"+a(c[5])+a(c[6])+a(c[7])}return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};b.d=function(a){return"undefined"!==typeof a&&null!==a};b.e=function(a){return"function"==typeof a||!1};b.f=function(a){var c={a:[1,2,3,"str"]};if(b.d(JSON)&&b.e(JSON.stringify)&&'{"a":[1,2,3,"str"]}'===(0,JSON.stringify)(c).replace(/\s/g,
""))return JSON.stringify(a);var d=Object.toJSON;return b.e(d)&&'{"a":[1,2,3,"str"]}'===d(c).replace(/\s/g,"")?d(a):null};b.prototype.h=function(a){var c=a.source,d;try{if(d=JSON.parse(a.data),"generateGUID"===d.action){var e=localStorage.getItem(d.key);e||(e="XD_"+b.g(),localStorage.setItem(d.key,e));this.send(c,{id:d.id,success:!0,data:e})}}catch(g){}};b.prototype.i=function(){this.send(parent,{id:-1,success:!0,data:"iframe-ready"})};b.prototype.send=function(a,c){var d=b.f(c);b.d(d)&&a.postMessage(b.f(c),
"*")};return b}();e.j=g;var p=new g;g.addEventListener(window,"message",function(b){p.h(b)});p.i()})(e.b||(e.b={}))})(e.c||(e.c={}))})(f||(f={}));

    </script>
</head>
<body>
Ready
</body>
</html>