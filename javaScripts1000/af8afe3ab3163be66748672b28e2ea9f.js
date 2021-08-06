/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* Removed   if (typeof define === 'function' && define.amd) {
    define(function () {
      return md5
    })
  } from original file and minified using http://jscompress.com
  */
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t),e=(n>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;var e,i,h,a,l,d=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=d,h=g,a=v,l=m,d=o(d,g,v,m,n[e],7,-680876936),m=o(m,d,g,v,n[e+1],12,-389564586),v=o(v,m,d,g,n[e+2],17,606105819),g=o(g,v,m,d,n[e+3],22,-1044525330),d=o(d,g,v,m,n[e+4],7,-176418897),m=o(m,d,g,v,n[e+5],12,1200080426),v=o(v,m,d,g,n[e+6],17,-1473231341),g=o(g,v,m,d,n[e+7],22,-45705983),d=o(d,g,v,m,n[e+8],7,1770035416),m=o(m,d,g,v,n[e+9],12,-1958414417),v=o(v,m,d,g,n[e+10],17,-42063),g=o(g,v,m,d,n[e+11],22,-1990404162),d=o(d,g,v,m,n[e+12],7,1804603682),m=o(m,d,g,v,n[e+13],12,-40341101),v=o(v,m,d,g,n[e+14],17,-1502002290),g=o(g,v,m,d,n[e+15],22,1236535329),d=u(d,g,v,m,n[e+1],5,-165796510),m=u(m,d,g,v,n[e+6],9,-1069501632),v=u(v,m,d,g,n[e+11],14,643717713),g=u(g,v,m,d,n[e],20,-373897302),d=u(d,g,v,m,n[e+5],5,-701558691),m=u(m,d,g,v,n[e+10],9,38016083),v=u(v,m,d,g,n[e+15],14,-660478335),g=u(g,v,m,d,n[e+4],20,-405537848),d=u(d,g,v,m,n[e+9],5,568446438),m=u(m,d,g,v,n[e+14],9,-1019803690),v=u(v,m,d,g,n[e+3],14,-187363961),g=u(g,v,m,d,n[e+8],20,1163531501),d=u(d,g,v,m,n[e+13],5,-1444681467),m=u(m,d,g,v,n[e+2],9,-51403784),v=u(v,m,d,g,n[e+7],14,1735328473),g=u(g,v,m,d,n[e+12],20,-1926607734),d=c(d,g,v,m,n[e+5],4,-378558),m=c(m,d,g,v,n[e+8],11,-2022574463),v=c(v,m,d,g,n[e+11],16,1839030562),g=c(g,v,m,d,n[e+14],23,-35309556),d=c(d,g,v,m,n[e+1],4,-1530992060),m=c(m,d,g,v,n[e+4],11,1272893353),v=c(v,m,d,g,n[e+7],16,-155497632),g=c(g,v,m,d,n[e+10],23,-1094730640),d=c(d,g,v,m,n[e+13],4,681279174),m=c(m,d,g,v,n[e],11,-358537222),v=c(v,m,d,g,n[e+3],16,-722521979),g=c(g,v,m,d,n[e+6],23,76029189),d=c(d,g,v,m,n[e+9],4,-640364487),m=c(m,d,g,v,n[e+12],11,-421815835),v=c(v,m,d,g,n[e+15],16,530742520),g=c(g,v,m,d,n[e+2],23,-995338651),d=f(d,g,v,m,n[e],6,-198630844),m=f(m,d,g,v,n[e+7],10,1126891415),v=f(v,m,d,g,n[e+14],15,-1416354905),g=f(g,v,m,d,n[e+5],21,-57434055),d=f(d,g,v,m,n[e+12],6,1700485571),m=f(m,d,g,v,n[e+3],10,-1894986606),v=f(v,m,d,g,n[e+10],15,-1051523),g=f(g,v,m,d,n[e+1],21,-2054922799),d=f(d,g,v,m,n[e+8],6,1873313359),m=f(m,d,g,v,n[e+15],10,-30611744),v=f(v,m,d,g,n[e+6],15,-1560198380),g=f(g,v,m,d,n[e+13],21,1309151649),d=f(d,g,v,m,n[e+4],6,-145523070),m=f(m,d,g,v,n[e+11],10,-1120210379),v=f(v,m,d,g,n[e+2],15,718787259),g=f(g,v,m,d,n[e+9],21,-343485551),d=t(d,i),g=t(g,h),v=t(v,a),m=t(m,l);return[d,g,v,m]}function h(n){var t,r="";for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function l(n){return h(i(a(n),8*n.length))}function d(n,t){var r,e,o=a(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;16>r;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(a(t)),512+8*t.length),h(i(c.concat(e),640))}function g(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function v(n){return unescape(encodeURIComponent(n))}function m(n){return l(v(n))}function s(n){return g(m(n))}function p(n,t){return d(v(n),v(t))}function C(n,t){return g(p(n,t))}function A(n,t,r){return t?r?p(t,n):C(t,n):r?m(n):s(n)}"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);