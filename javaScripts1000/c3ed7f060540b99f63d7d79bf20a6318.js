window.oiq_v = "mast-TAG-115";function oiq_addPageMfg(s) { window.oiq_pMfg = oiq_ddPush(window.oiq_pMfg, s); }function oiq_addPageBrand(s) { window.oiq_pMfg = oiq_ddPush(window.oiq_pMfg, s); }function oiq_addPageDT(s) { window.oiq_pDT = oiq_ddPush(window.oiq_pDT, s); }function oiq_addPageCat(s) { window.oiq_pDT = oiq_ddPush(window.oiq_pDT, s); }function oiq_addPageProduct(s) { window.oiq_pProduct = oiq_ddPush(window.oiq_pProduct, s); }function oiq_addPageSource(s) { window.oiq_pSource = oiq_ddPush(window.oiq_pSource, s); }function oiq_addPageLifecycle(s) { window.oiq_pSource = oiq_ddPush(window.oiq_pSource, s); }function oiq_addUserId(s) { window.oiq_pUser = s; }function oiq_addCustomKVP(s) { window.oiq_pCust = oiq_ddPush(window.oiq_pCust, s); }function oiq_pushDCT(s) { window.oiq_pCust = oiq_ddPush(window.oiq_pCust, s); }oiq_ii = function(src) {  if (!src || src === 'ep' || src === 'undefined') {    return;  }var oiq_img = new Image();oiq_img.src = src;};function oiq_ddPush(arr, val) {if (Object.prototype.toString.call(arr) === "[object Array]") {for (var i=0;i<arr.length;i++) {if (arr[i]==val) {return arr;}}arr.push(val);return arr;} else {return new Array(val);}}function oiq_is (req) {var stags=document.getElementsByTagName("script");var ltag = stags[stags.length-1];if (ltag == null) { return; }var s=document.createElement("script");s.type = "text/javascript";s.async = true;ltag.parentNode.insertBefore(s,ltag);s.src = req;setTimeout(function() {s.remove()}, 10000);}function oiq_iifr(req) {var btags=document.getElementsByTagName("body");var btag = btags[btags.length-1];if (btag == null) { return; }var ifr=document.createElement("iframe");ifr.style.display = "none";        ifr.title = "no content javascript process";btag.appendChild(ifr);ifr.src = req;setTimeout(function() {ifr.remove();}, 10000);}function oiq_sha256(r){function o(r,o){return r>>>o|r<<32-o}for(var f,t,n=Math.pow,a=n(2,32),i="length",c="",e=[],u=8*r[i],h=[],v=[],l=0,s={},g=2;64>l;g++)if(!s[g]){for(f=0;313>f;f+=g)s[f]=g;h[l]=n(g,.5)*a|0,v[l++]=n(g,1/3)*a|0}for(r+="\x80";r[i]%64-56;)r+="\x00";for(f=0;f<r[i];f++){if(t=r.charCodeAt(f),t>>8)return;e[f>>2]|=t<<(3-f)%4*8}for(e[e[i]]=u/a|0,e[e[i]]=u,t=0;t<e[i];){var d=e.slice(t,t+=16),p=h;for(h=h.slice(0,8),f=0;64>f;f++){var q=d[f-15],w=d[f-2],x=h[0],A=h[4],C=h[7]+(o(A,6)^o(A,11)^o(A,25))+(A&h[5]^~A&h[6])+v[f]+(d[f]=16>f?d[f]:d[f-16]+(o(q,7)^o(q,18)^q>>>3)+d[f-7]+(o(w,17)^o(w,19)^w>>>10)|0),M=(o(x,2)^o(x,13)^o(x,22))+(x&h[1]^x&h[2]^h[1]&h[2]);h=[C+M|0].concat(h),h[4]=h[4]+C|0}for(f=0;8>f;f++)h[f]=h[f]+p[f]|0}for(f=0;8>f;f++)for(t=3;t+1;t--){var S=h[f]>>8*t&255;c+=(16>S?0:"")+S.toString(16)}return c}function oiq_md5(r){function n(r,n){return r<<n|r>>>32-n}function t(r,n){var t,o,e,u,a;return e=2147483648&r,u=2147483648&n,a=(1073741823&r)+(1073741823&n),(t=1073741824&r)&(o=1073741824&n)?2147483648^a^e^u:t|o?1073741824&a?3221225472^a^e^u:1073741824^a^e^u:a^e^u}function o(r,o,e,u,a,f,i){var C;return t(n(r=t(r,t(t((C=o)&e|~C&u,a),i)),f),o)}function e(r,o,e,u,a,f,i){var C;return t(n(r=t(r,t(t(o&(C=u)|e&~C,a),i)),f),o)}function u(r,o,e,u,a,f,i){return t(n(r=t(r,t(t(o^e^u,a),i)),f),o)}function a(r,o,e,u,a,f,i){return t(n(r=t(r,t(t(e^(o|~u),a),i)),f),o)}function f(r){var n,t="",o="";for(n=0;n<=3;n++)t+=(o="0"+(r>>>8*n&255).toString(16)).substr(o.length-2,2);return t}var i,C,c,g,h,d,v,m,S,l=Array();for(l=function(r){for(var n,t=r.length,o=t+8,e=16*((o-o%64)/64+1),u=Array(e-1),a=0,f=0;f<t;)a=f%4*8,u[n=(f-f%4)/4]=u[n]|r.charCodeAt(f)<<a,f++;return a=f%4*8,u[n=(f-f%4)/4]=u[n]|128<<a,u[e-2]=t<<3,u[e-1]=t>>>29,u}(r=function(r){r=r.replace(/rn/g,"n");for(var n="",t=0;t<r.length;t++){var o=r.charCodeAt(t);o<128?n+=String.fromCharCode(o):o>127&&o<2048?(n+=String.fromCharCode(o>>6|192),n+=String.fromCharCode(63&o|128)):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128),n+=String.fromCharCode(63&o|128))}return n}(r)),d=1732584193,v=4023233417,m=2562383102,S=271733878,i=0;i<l.length;i+=16)C=d,c=v,g=m,h=S,v=a(v=a(v=a(v=a(v=u(v=u(v=u(v=u(v=e(v=e(v=e(v=e(v=o(v=o(v=o(v=o(v,m=o(m,S=o(S,d=o(d,v,m,S,l[i+0],7,3614090360),v,m,l[i+1],12,3905402710),d,v,l[i+2],17,606105819),S,d,l[i+3],22,3250441966),m=o(m,S=o(S,d=o(d,v,m,S,l[i+4],7,4118548399),v,m,l[i+5],12,1200080426),d,v,l[i+6],17,2821735955),S,d,l[i+7],22,4249261313),m=o(m,S=o(S,d=o(d,v,m,S,l[i+8],7,1770035416),v,m,l[i+9],12,2336552879),d,v,l[i+10],17,4294925233),S,d,l[i+11],22,2304563134),m=o(m,S=o(S,d=o(d,v,m,S,l[i+12],7,1804603682),v,m,l[i+13],12,4254626195),d,v,l[i+14],17,2792965006),S,d,l[i+15],22,1236535329),m=e(m,S=e(S,d=e(d,v,m,S,l[i+1],5,4129170786),v,m,l[i+6],9,3225465664),d,v,l[i+11],14,643717713),S,d,l[i+0],20,3921069994),m=e(m,S=e(S,d=e(d,v,m,S,l[i+5],5,3593408605),v,m,l[i+10],9,38016083),d,v,l[i+15],14,3634488961),S,d,l[i+4],20,3889429448),m=e(m,S=e(S,d=e(d,v,m,S,l[i+9],5,568446438),v,m,l[i+14],9,3275163606),d,v,l[i+3],14,4107603335),S,d,l[i+8],20,1163531501),m=e(m,S=e(S,d=e(d,v,m,S,l[i+13],5,2850285829),v,m,l[i+2],9,4243563512),d,v,l[i+7],14,1735328473),S,d,l[i+12],20,2368359562),m=u(m,S=u(S,d=u(d,v,m,S,l[i+5],4,4294588738),v,m,l[i+8],11,2272392833),d,v,l[i+11],16,1839030562),S,d,l[i+14],23,4259657740),m=u(m,S=u(S,d=u(d,v,m,S,l[i+1],4,2763975236),v,m,l[i+4],11,1272893353),d,v,l[i+7],16,4139469664),S,d,l[i+10],23,3200236656),m=u(m,S=u(S,d=u(d,v,m,S,l[i+13],4,681279174),v,m,l[i+0],11,3936430074),d,v,l[i+3],16,3572445317),S,d,l[i+6],23,76029189),m=u(m,S=u(S,d=u(d,v,m,S,l[i+9],4,3654602809),v,m,l[i+12],11,3873151461),d,v,l[i+15],16,530742520),S,d,l[i+2],23,3299628645),m=a(m,S=a(S,d=a(d,v,m,S,l[i+0],6,4096336452),v,m,l[i+7],10,1126891415),d,v,l[i+14],15,2878612391),S,d,l[i+5],21,4237533241),m=a(m,S=a(S,d=a(d,v,m,S,l[i+12],6,1700485571),v,m,l[i+3],10,2399980690),d,v,l[i+10],15,4293915773),S,d,l[i+1],21,2240044497),m=a(m,S=a(S,d=a(d,v,m,S,l[i+8],6,1873313359),v,m,l[i+15],10,4264355552),d,v,l[i+6],15,2734768916),S,d,l[i+13],21,1309151649),m=a(m,S=a(S,d=a(d,v,m,S,l[i+4],6,4149444226),v,m,l[i+11],10,3174756917),d,v,l[i+2],15,718787259),S,d,l[i+9],21,3951481745),d=t(d,C),v=t(v,c),m=t(m,g),S=t(S,h);return(f(d)+f(v)+f(m)+f(S)).toLowerCase()}function oiq_checkSpaChanged(){if (!window.oiq_oldTitles) {window.oiq_oldTitles = new Array();}if (!window.oiq_oldTitles.includes(document.title)) {window.oiq_oldTitles.push(document.title);return true;}return false;}function oiq_setUid() {window.oiq_uid = window.oiq_uid || 'Q' + ((Date.now() / 1000 | 0) - 946713600) + Math.floor(((Math.random() * 1147483647) + 1000000000)) + 'J';oiq_handleCcpaSetup();}function oiq_handleCcpaSetup(){if (typeof window.oiq_ccpaDoNotSell === "undefined") {if (typeof __uspapi === "function") {setTimeout(function() {if (typeof window.oiq_ccpaDoNotSell === "undefined") {window.oiq_ccpaDoNotSell = false;}}, 1000);__uspapi('getUSPData', 1, function(uspData, success) {if (success && typeof uspData === "object" && typeof uspData.uspString != "undefined") {var optOutSale = uspData.uspString.substr(2,1);if (optOutSale === "Y" || optOutSale === 'y') {window.oiq_ccpaDoNotSell = true;oiq_ii('https://px.owneriq.net/eccpa?action=DO_NOT_SELL&pt=eaza06&uid=' + window.oiq_uid);} else {window.oiq_ccpaDoNotSell = false;}} else {window.oiq_ccpaDoNotSell = false;}});__uspapi('registerDeletion', 1, function(identifiers) {oiq_ii('https://px.owneriq.net/eccpa?action=DELETE&pt=eaza06&uid=' + window.oiq_uid);});} else {window.oiq_ccpaDoNotSell = false;}}}function oiq_doTag(){if (typeof window.oiq_ccpaDoNotSell === "undefined") {setTimeout(function() {oiq_doTag();}, 250);return;}if (window.oiq_ccpaDoNotSell) {return;}var t = new Array();if(!window.oiq_pMfg && !window.oiq_pDT && !window.oiq_pProduct && !window.oiq_isDynamic){if (oiq_checkSpaChanged()) {t.push('f|"'+encodeURIComponent(document.title)+'"');}}else{window.oiq_isDynamic = true;var i;if (window.oiq_pMfg){ for(i=0; i < window.oiq_pMfg.length; i++){t.push('m|"'+encodeURIComponent(window.oiq_pMfg[i])+'"')}delete window.oiq_pMfg;}if (window.oiq_pDT){ for(i=0; i < window.oiq_pDT.length; i++){t.push('d|"'+encodeURIComponent(window.oiq_pDT[i])+'"')}delete window.oiq_pDT;}if (window.oiq_pProduct){for(i=0; i < window.oiq_pProduct.length; i++){ t.push('p|"'+encodeURIComponent(window.oiq_pProduct[i])+'"')}delete window.oiq_pProduct;}}if(window.oiq_pCust){for(i=0; i < window.oiq_pCust.length; i++){var k = window.oiq_pCust[i][0],v = window.oiq_pCust[i][1],kvp; if(k === "email"){v=String(v).trim().toLowerCase();if(v !== "" && v.match(/[a-z0-9]+@[a-z0-9]+[.][a-z0-9]{2,}/g)){t.push('email|'+encodeURIComponent(oiq_sha256(v)));t.push('email_sha256|'+encodeURIComponent(oiq_sha256(v))); t.push('email_md5|'+encodeURIComponent(oiq_md5(v)));}}else{t.push(encodeURIComponent(k)+'|'+encodeURIComponent(v));}}delete window.oiq_pCust;window.oiq_as = 'true';}if(t.length > 0){var pageUrl=document.location.origin+document.location.pathname+document.location.search;var req='https://px.owneriq.net/j/'+'?ref='+encodeURI(pageUrl)+'&pt='+window.oiq_pt.join()+'&t='+encodeURI(t.join());if (window.oiq_pSource) req+='&s='+window.oiq_pSource.join();if (window.oiq_as) {req+='&as='+window.oiq_as;}oiq_is(req);} else {setTimeout(function() {oiq_doTag();}, 500);return;}if (window.oiq_pUser) {var oiq_user_img = new Image();oiq_user_img.src = "https://px.owneriq.net/euid?pt=eaza06&uid="+encodeURIComponent(window.oiq_pUser);}var imgURL = oiq_getRefererImgURL();if(imgURL != null){var referer_img = new Image();referer_img.src = imgURL;}setTimeout(function() {oiq_doTag();}, 500);}try {window.oiq_pt = oiq_ddPush(window.oiq_pt, "eaza06");oiq_setUid();if (!window.oiq_ccpaDoNotSell) {var _oiq_fps_js = true;if(_oiq_fps_js === true) {oiq_iifr('https://px.owneriq.net/eps?pt=eaza06&pid=8317&uid=' + window.oiq_uid + "&l=true");}}} catch(oiq_error_message) {oiq_error_message = oiq_error_message || { "message" : "couldn't find error" };console.log(oiq_error_message);}try {if (typeof(_oiqq) != "undefined") {    if (typeof(window._oiqSC) == "undefined" || window._oiqSC == 0) {if(window._oiqSC == 0) {delete window.oiq_pSource;delete window.oiq_pMfg;delete window.oiq_pDT;delete window.oiq_pProduct;}window._oiqSC=0;for (var i=0; i<_oiqq.length; i++) {if (_oiqq[i] == "oiq_doTag") window._oiqSC++;}}window._oiqSC--;while (_oiqq.length != 0) {var t = _oiqq.shift();var f = window[t[0]];if (t != "oiq_doTag" && typeof(f) == "function") {if (typeof(t[1]) != "undefined") {f(t[1]);} else {f();}}}if (window._oiqSC == 0) {      oiq_doTag();}}} catch(oiq_error_message) {oiq_error_message = oiq_error_message || { "message" : "couldn't find error" };console.log(oiq_error_message);}function oiq_getRefererImgURL() {var oiq_refererURL = '';var oiq_title = '';if (typeof document != 'undefined' && document) { if (document.title && document.title!='') {oiq_title = document.title; }if (document.referrer && document.referrer!='') {oiq_refererURL = document.referrer; }}if(oiq_refererURL == '')return null;oiq_refererURL = oiq_refererURL.replace("#","?");oiq_refererURL = decodeURIComponent(oiq_refererURL);var oiq_parsedReferer = oiq_parseURL(oiq_refererURL);if(oiq_parsedReferer) {if(oiq_parsedReferer.host && oiq_parsedReferer.protocol && oiq_parsedReferer.query) {if(oiq_parsedReferer.host.match(/google|bing|ask|aol/gi)){var oiq_searchString = oiq_findQueryArgument(oiq_parsedReferer.query, 'q');if(oiq_searchString) {var oiq_searchTagURL = 'https://px.owneriq.net/esq?pt=eaza06&URL=';var oiq_URL = oiq_parsedReferer.protocol+'//'+oiq_parsedReferer.host+"/?q="+oiq_searchString;return oiq_searchTagURL+encodeURIComponent(oiq_URL)+"&title="+oiq_title+"&sq="+oiq_searchString;}}}}return null;}function oiq_parseURL(oiq_url) {if(oiq_url) {var oiq_loc = { 'href' : oiq_url };var oiq_protocolNHost = oiq_url.replace('//', '/').split('/');oiq_loc.protocol = typeof(oiq_protocolNHost[0])!='undefined' ? oiq_protocolNHost[0] : '';oiq_loc.host = typeof(oiq_protocolNHost[1])!='undefined' ? oiq_protocolNHost[1] : '';var oiq_params = oiq_url.split('?');oiq_loc.query = oiq_params[1] != null ? oiq_params[1] : '';return oiq_loc;}return null;}function oiq_findQueryArgument (oiq_strQuery, oiq_strArgumentName) {if (oiq_strQuery) {var oiq_arrParameters = oiq_strQuery.split("&");for (var i = 0; i < oiq_arrParameters.length; i++) {var oiq_arrPair = oiq_arrParameters[i].split("=");if (oiq_arrPair[0] == oiq_strArgumentName) {if (oiq_arrPair.length > 1) {return oiq_arrPair[1];}break;}}}return null;}