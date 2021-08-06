<!DOCTYPE html>
<html>
<head>
    <script>
        //
/* Version a5c406ae5697070ded3eee8312968928 v:20.6.0.3177, c:1f7616c1509e51afcdd354781bdafc424f33daaa, b:20.6.0.3177 */var g;
(function(e){(function(e){(function(e){var f=function(){function b(){}b.addEventListener=function(a,b,d){function h(){try{return d.apply(this,Array.prototype.slice.call(arguments))}catch(a){}}a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent&&a.attachEvent("on"+b,h)};b.e=function(){var a=b.b(window.crypto)&&b.c(window.crypto.getRandomValues)?window.crypto:b.b(window.msCrypto)&&b.c(window.msCrypto.getRandomValues)&&window.msCrypto;if(a){var c=new Uint16Array(8);a.getRandomValues(c);a=function(a){a=
a.toString(16);return"0000".substr(a.length)+a};return a(c[0])+a(c[1])+"_"+a(c[2])+"_"+a(c[3])+"_"+a(c[4])+"_"+a(c[5])+a(c[6])+a(c[7])}return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};b.b=function(a){return"undefined"!==typeof a&&null!==a};b.c=function(a){return"function"==typeof a||!1};b.d=function(a){var c={a:[1,2,3,"str"]};if(b.b(JSON)&&b.c(JSON.stringify)&&'{"a":[1,2,3,"str"]}'===(0,JSON.stringify)(c).replace(/\s/g,
""))return JSON.stringify(a);var d=Object.toJSON;return b.c(d)&&'{"a":[1,2,3,"str"]}'===d(c).replace(/\s/g,"")?d(a):null};b.prototype.f=function(a){var c=a.source,d;try{if(d=JSON.parse(a.data),"generateGUID"===d.action){var e=localStorage.getItem(d.key);e||(e="XD_"+b.e(),localStorage.setItem(d.key,e));this.send(c,d.id,e)}}catch(f){}};b.prototype.g=function(){this.send(parent,-1,"iframe-ready")};b.prototype.send=function(a,c,d){c={name:"ADRUM_XD",success:!0,id:c,data:d};d=b.d(c);b.b(d)&&a.postMessage(b.d(c),
"*")};return b}();e.j=f;var k=new f;f.addEventListener(window,"message",function(b){k.f(b)});k.g()})(e.h||(e.h={}))})(e.i||(e.i={}))})(g||(g={}));

    </script>
</head>
<body>
Ready
</body>
</html>