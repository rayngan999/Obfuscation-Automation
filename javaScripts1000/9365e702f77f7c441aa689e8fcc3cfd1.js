<html>
  <head>
    <title>GDPR Consent Management</title>
    <script></script>
  </head>
  <body>
    <script type="text/javascript">
      !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=207)}({207:function(e,t){var n=(window&&window.location&&window.location.hostname||"").split("."),o=n.length>1?";domain=.".concat(n.slice(-2).join(".")):"",r=33696e3,c="euconsent-v2";function a(e){var t=("; "+document.cookie).split("; "+e+"="),n=null;return 2===t.length&&(n=t.pop().split(";").shift()),n}var i=!1;try{document.cookie="st_samesite=1;SameSite=None;Secure",a("st_samesite")&&(i=!0,document.cookie="st_samesite=1;max-age=0;SameSite=None;Secure")}catch(e){i=!1}window.addEventListener("message",function(e){var t=e.data;if(t.command){var n;switch(t.command){case"readAllCookies":n={v1:a("euconsent"),v2:a(c)};break;case"readCookie":n={euconsent:a(c)};break;case"writeCookie":n={success:function(e){var t="";return i&&(t=";SameSite=None;Secure"),document.cookie="".concat(c,"=").concat(e).concat(o,";path=/;max-age=").concat(r).concat(t),!!document.cookie}(t.euconsent)}}n&&(n.command=t.command,n.supports_samesite=i,e.source.postMessage(n,e.origin))}}),window.parent.postMessage({command:"isLoaded",supports_samesite:i,v1:a("euconsent"),v2:a(c)},"*")}});
    </script>
  </body>
</html>
