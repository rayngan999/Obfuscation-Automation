(window.klaviyoOnsiteJSONP=window.klaviyoOnsiteJSONP||[]).push([[14],{"../../node_modules/core-js/modules/_object-assign.js":function(e,t,n){"use strict";var i=n("../../node_modules/core-js/modules/_object-keys.js"),o=n("../../node_modules/core-js/modules/_object-gops.js"),r=n("../../node_modules/core-js/modules/_object-pie.js"),s=n("../../node_modules/core-js/modules/_to-object.js"),a=n("../../node_modules/core-js/modules/_iobject.js"),c=Object.assign;e.exports=!c||n("../../node_modules/core-js/modules/_fails.js")((function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=i}))?function(e,t){for(var n=s(e),c=arguments.length,d=1,u=o.f,l=r.f;c>d;)for(var h,f=a(arguments[d++]),_=u?i(f).concat(u(f)):i(f),g=_.length,p=0;g>p;)l.call(f,h=_[p++])&&(n[h]=f[h]);return n}:c},"../../node_modules/core-js/modules/_object-gops.js":function(e,t){t.f=Object.getOwnPropertySymbols},"../../node_modules/core-js/modules/_object-keys.js":function(e,t,n){var i=n("../../node_modules/core-js/modules/_object-keys-internal.js"),o=n("../../node_modules/core-js/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return i(e,o)}},"../../node_modules/core-js/modules/_same-value.js":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},"../../node_modules/core-js/modules/es6.object.assign.js":function(e,t,n){var i=n("../../node_modules/core-js/modules/_export.js");i(i.S+i.F,"Object",{assign:n("../../node_modules/core-js/modules/_object-assign.js")})},"../../node_modules/core-js/modules/es6.regexp.flags.js":function(e,t,n){n("../../node_modules/core-js/modules/_descriptors.js")&&"g"!=/./g.flags&&n("../../node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype,"flags",{configurable:!0,get:n("../../node_modules/core-js/modules/_flags.js")})},"../../node_modules/core-js/modules/es6.regexp.match.js":function(e,t,n){"use strict";var i=n("../../node_modules/core-js/modules/_an-object.js"),o=n("../../node_modules/core-js/modules/_to-length.js"),r=n("../../node_modules/core-js/modules/_advance-string-index.js"),s=n("../../node_modules/core-js/modules/_regexp-exec-abstract.js");n("../../node_modules/core-js/modules/_fix-re-wks.js")("match",1,(function(e,t,n,a){return[function(n){var i=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=a(n,e,this);if(t.done)return t.value;var c=i(e),d=String(this);if(!c.global)return s(c,d);var u=c.unicode;c.lastIndex=0;for(var l,h=[],f=0;null!==(l=s(c,d));){var _=String(l[0]);h[f]=_,""===_&&(c.lastIndex=r(d,o(c.lastIndex),u)),f++}return 0===f?null:h}]}))},"../../node_modules/core-js/modules/es6.regexp.search.js":function(e,t,n){"use strict";var i=n("../../node_modules/core-js/modules/_an-object.js"),o=n("../../node_modules/core-js/modules/_same-value.js"),r=n("../../node_modules/core-js/modules/_regexp-exec-abstract.js");n("../../node_modules/core-js/modules/_fix-re-wks.js")("search",1,(function(e,t,n,s){return[function(n){var i=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=s(n,e,this);if(t.done)return t.value;var a=i(e),c=String(this),d=a.lastIndex;o(d,0)||(a.lastIndex=0);var u=r(a,c);return o(a.lastIndex,d)||(a.lastIndex=d),null===u?-1:u.index}]}))},"../../node_modules/core-js/modules/es6.regexp.split.js":function(e,t,n){"use strict";var i=n("../../node_modules/core-js/modules/_is-regexp.js"),o=n("../../node_modules/core-js/modules/_an-object.js"),r=n("../../node_modules/core-js/modules/_species-constructor.js"),s=n("../../node_modules/core-js/modules/_advance-string-index.js"),a=n("../../node_modules/core-js/modules/_to-length.js"),c=n("../../node_modules/core-js/modules/_regexp-exec-abstract.js"),d=n("../../node_modules/core-js/modules/_regexp-exec.js"),u=n("../../node_modules/core-js/modules/_fails.js"),l=Math.min,h=[].push,f="length",_=!u((function(){RegExp(4294967295,"y")}));n("../../node_modules/core-js/modules/_fix-re-wks.js")("split",2,(function(e,t,n,u){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[f]||2!="ab".split(/(?:ab)*/)[f]||4!=".".split(/(.?)(.?)/)[f]||".".split(/()()/)[f]>1||"".split(/.?/)[f]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(o,e,t);for(var r,s,a,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,_=void 0===t?4294967295:t>>>0,g=new RegExp(e.source,u+"g");(r=d.call(g,o))&&!((s=g.lastIndex)>l&&(c.push(o.slice(l,r.index)),r[f]>1&&r.index<o[f]&&h.apply(c,r.slice(1)),a=r[0][f],l=s,c[f]>=_));)g.lastIndex===r.index&&g.lastIndex++;return l===o[f]?!a&&g.test("")||c.push(""):c.push(o.slice(l)),c[f]>_?c.slice(0,_):c}:"0".split(void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var o=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,o,i):g.call(String(o),n,i)},function(e,t){var i=u(g,e,this,t,g!==n);if(i.done)return i.value;var d=o(e),h=String(this),f=r(d,RegExp),p=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(_?"y":"g"),y=new f(_?d:"^(?:"+d.source+")",m),v=void 0===t?4294967295:t>>>0;if(0===v)return[];if(0===h.length)return null===c(y,h)?[h]:[];for(var j=0,x=0,b=[];x<h.length;){y.lastIndex=_?x:0;var S,k=c(y,_?h:h.slice(x));if(null===k||(S=l(a(y.lastIndex+(_?0:x)),h.length))===j)x=s(h,x,p);else{if(b.push(h.slice(j,x)),b.length===v)return b;for(var I=1;I<=k.length-1;I++)if(b.push(k[I]),b.length===v)return b;x=j=S}}return b.push(h.slice(j)),b}]}))},"../../node_modules/core-js/modules/es6.regexp.to-string.js":function(e,t,n){"use strict";n("../../node_modules/core-js/modules/es6.regexp.flags.js");var i=n("../../node_modules/core-js/modules/_an-object.js"),o=n("../../node_modules/core-js/modules/_flags.js"),r=n("../../node_modules/core-js/modules/_descriptors.js"),s=/./.toString,a=function(e){n("../../node_modules/core-js/modules/_redefine.js")(RegExp.prototype,"toString",e,!0)};n("../../node_modules/core-js/modules/_fails.js")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?a((function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?o.call(e):void 0)})):"toString"!=s.name&&a((function(){return s.call(this)}))},"../onsite-analytics/src/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));n("../../node_modules/core-js/modules/es6.regexp.constructor.js"),n("../../node_modules/core-js/modules/es6.regexp.match.js");function i(e,t,n,i,o,r,s){this.doc=e||document,this.nav=t||navigator,this.scr=n||window.screen,this.win=i||window,this.loc=o||this.doc.location,this.top=r||window.top,this.parent=s||window.parent}function o(e){var t=(e||new i).getNavigator(),n=t.userAgent.toLowerCase(),o={init:function(){this.browser=this.searchString(this.dataBrowser)||"",this.version=this.searchVersion(t.userAgent)||this.searchVersion(t.appVersion)||"",this.OS=this.searchString(this.dataOS)||""},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string,i=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,n){if(-1!==n.indexOf(e[t].subString))return e[t].identity}else if(i)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(-1!==t)return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:t.userAgent,subString:"Chrome",identity:"Chrome"},{string:t.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:t.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:t.vendor,subString:"iCab",identity:"iCab"},{string:t.vendor,subString:"KDE",identity:"Konqueror"},{string:t.userAgent,subString:"Firefox",identity:"Firefox"},{string:t.vendor,subString:"Camino",identity:"Camino"},{string:t.userAgent,subString:"Netscape",identity:"Netscape"},{string:t.userAgent,subString:"MSIE",identity:"Internet Explorer",versionSearch:"MSIE"},{string:t.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:t.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:t.platform,subString:"Win",identity:"Windows"},{string:t.platform,subString:"Mac",identity:"Mac"},{string:t.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:t.platform,subString:"Linux",identity:"Linux"}]};o.init(),this.version=(n.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],this.os=o.OS,this.browser=o.browser}i.prototype.getDocument=function(){return this.doc},i.prototype.getNavigator=function(){return this.nav},i.prototype.getScreen=function(){return this.scr},i.prototype.getWindow=function(){return this.win},i.prototype.getLocation=function(){return this.loc},i.prototype.getProtocol=function(){return"https:"===this.loc.protocol?"https://":"http://"},i.prototype.getHostName=function(){return this.loc.hostname},i.prototype.getTop=function(){return this.top},i.prototype.getParent=function(){return this.parent},i.prototype.getReferrer=function(){var e="";try{e=this.top.document.referrer}catch(t){if(window.parent)try{e=this.parent.document.referrer}catch(t){e=""}}return""===e&&(e=this.doc.referrer),e},i.prototype.getCharacterSet=function(){return this.doc.characterSet?this.doc.characterSet:this.doc.charset?this.doc.charset:""},i.prototype.getLanguage=function(){return this.nav.language?this.nav.language:this.nav.browserLanguage?this.nav.browserLanguage:""};n("../../node_modules/core-js/modules/es6.regexp.to-string.js"),n("../../node_modules/core-js/modules/es6.object.to-string.js"),n("../../node_modules/core-js/modules/es6.regexp.split.js"),n("../../node_modules/core-js/modules/es6.regexp.replace.js");var r=n("../config/lib/client.json"),s={};function a(e){return void 0===e}function c(e,t){return hasOwnProperty.call(e,t)}function d(e,t,n){if(null!=e)if(e.forEach)e.forEach(t,n);else if(e.length===+e.length){for(var i=0,o=e.length;i<o;i++)if(i in e&&t.call(n,e[i],i,e)===s)return}else for(var r in e)if(c(e,r)&&t.call(n,e[r],r,e)===s)return}function u(e){return e}function l(e,t){return function e(t,n,i){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;var o=toString.call(t);if(o!=toString.call(n))return!1;switch(o){case"[object String]":return t==String(n);case"[object Number]":return t!=+t?n!=+n:0==t?1/t==1/n:t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object RegExp]":return t.source==n.source&&t.global==n.global&&t.multiline==n.multiline&&t.ignoreCase==n.ignoreCase}if("object"!=typeof t||"object"!=typeof n)return!1;for(var r=i.length;r--;)if(i[r]==t)return!0;i.push(t);var s=0,a=!0;if("[object Array]"==o){if(a=(s=t.length)==n.length)for(;s--&&(a=s in t==s in n&&e(t[s],n[s],i)););}else{if("constructor"in t!="constructor"in n||t.constructor!=n.constructor)return!1;for(var d in t)if(c(t,d)&&(s++,!(a=c(n,d)&&e(t[d],n[d],i))))break;if(a){for(d in n)if(c(n,d)&&!s--)break;a=!s}}return i.pop(),a}(e,t,[])}function h(e,t){return null==e?found:e.indexOf?-1!==e.indexOf(t):function(e,t,n){t||(t=u);var i=!1;return null==e?i:nativeSome&&e.some===nativeSome?e.some(t,n):(d(e,(function(e,o,r){if(i||(i=t.call(n,e,o,r)))return s})),!!i)}(e,(function(e){return e===t}))}function f(e){return(r.onsiteAnalytics.settings.debug?"http://":(new i).getProtocol())+r.onsiteAnalytics.settings.analyticsAPIHost+"/"+e}function _(e,t){var n=encodeURIComponent;return n instanceof Function?t?encodeURI(e):n(e):escape(e)}function g(){return Math.round(new Date/1e3)}function p(e){this.context=e||new i,this.cookies=[]}function m(e){this.context=e||new i,this.is_available=!1;var t="_kla_test";try{return localStorage.setItem(t,t),localStorage.removeItem(t),this.is_available=!0,this.is_available}catch(e){}}p.prototype.set=function(e,t,n){var i;void 0===n&&(n={}),n.minsToExpire?(i=new Date).setTime(i.getTime()+1e3*n.minsToExpire*60):n.daysToExpire&&(i=new Date).setTime(i.getTime()+864e5*n.daysToExpire),this._set(e,n.alreadyEncoded?t:_(t,!0),(a(i)?"":";expires="+i.toGMTString())+";path="+(n.path?n.path:"/")+(n.domain?";domain="+n.domain:"")+(n.secure?";secure":""))},p.prototype._set=function(e,t,n){this.context.getDocument().cookie=e+"="+t+n,this.cookies.push({name:e,value:t,extras:n})},p.prototype.get=function(e){var t=new RegExp("(^|;)[ ]*"+e+"=([^;]*)").exec(this.context.getDocument().cookie);return t?function(e,t){var n,i=decodeURIComponent;if(e=e.split("+").join(" "),i instanceof Function)try{n=t?decodeURI(e):i(e)}catch(t){n=unescape(e)}else n=unescape(e);return n}(t[2],!0):""},p.prototype.del=function(e,t){void 0===t&&(t={}),t.daysToExpire=-1,this.get(e)&&this.set(e,"",t)},p.prototype.has=function(){return a(this.context.getNavigator().cookieEnabled)?this.context.getNavigator().cookieEnabled?"1":"0":(this.set("__l_testcookie","1"),"1"===this.get("__l_testcookie")?"1":"0")},m.prototype.set=function(e,t){return!!this.is_available&&(localStorage.setItem(e,t),!0)},m.prototype.get=function(e){if(this.is_available)return localStorage.getItem(e)},m.prototype.del=function(e){return!!this.is_available&&(localStorage.removeItem(e),!0)};n("../../node_modules/core-js/modules/es6.regexp.search.js"),n("../../node_modules/core-js/modules/es6.array.sort.js"),n("../../node_modules/core-js/modules/es6.object.assign.js");var y=n("../../node_modules/unfetch/dist/unfetch.mjs"),v={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,i,o,r,s,a,c="",d=0;for(e=v._utf8_encode(e);d<e.length;)o=(t=e.charCodeAt(d++))>>2,r=(3&t)<<4|(n=e.charCodeAt(d++))>>4,s=(15&n)<<2|(i=e.charCodeAt(d++))>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),c=c+this._keyStr.charAt(o)+this._keyStr.charAt(r)+this._keyStr.charAt(s)+this._keyStr.charAt(a);return c},decode:function(e){var t,n,i,o,r,s,a="",c=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<e.length;)t=this._keyStr.indexOf(e.charAt(c++))<<2|(o=this._keyStr.indexOf(e.charAt(c++)))>>4,n=(15&o)<<4|(r=this._keyStr.indexOf(e.charAt(c++)))>>2,i=(3&r)<<6|(s=this._keyStr.indexOf(e.charAt(c++))),a+=String.fromCharCode(t),64!=r&&(a+=String.fromCharCode(n)),64!=s&&(a+=String.fromCharCode(i));return a=v._utf8_decode(a)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t+=String.fromCharCode(i):i>127&&i<2048?(t+=String.fromCharCode(i>>6|192),t+=String.fromCharCode(63&i|128)):(t+=String.fromCharCode(i>>12|224),t+=String.fromCharCode(i>>6&63|128),t+=String.fromCharCode(63&i|128))}return t},_utf8_decode:function(e){for(var t="",n=0,i=0,o=i;n<e.length;)(i=e.charCodeAt(n))<128?(t+=String.fromCharCode(i),n++):i>191&&i<224?(o=e.charCodeAt(n+1),t+=String.fromCharCode((31&i)<<6|63&o),n+=2):(o=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&i)<<12|(63&o)<<6|63&c3),n+=3);return t}},j=v,x=/^([\w\-_=]+)\.(\w+)$/,b=function(e){var t=e.match(x);return t?{encryptedString:t[1],companyId:t[2]}:{}},S=function(e){return void 0===e&&(e={}),!!(e.$exchange_id||e.email||e.id||e.$email||e.$id||e.$anonymous||e.$phone_number)};function k(e){this.context=e.context,this.cookie=e.cookie,this.local_storage=e.local_storage,this.account_id=null,this.cookie_domain=null,this.identity=null,this.has_tracked_activity=!1,this.has_tracked_interests=!1,this.is_tracking_on=!this.cookie.get("__kla_off"),this._loadIdentityFromCookie()}k.prototype._loadIdentityFromCookie=function(){var e=this.cookie.get("__kla_id");if(e)try{if(this.identity=JSON.parse(j.decode(e)),this.identity&&this.identity.$email)try{var t=JSON.parse(this.identity.$email);this.identity=this._getIdentityFromKLObject(t),this._saveIdentity(this.identity)}catch(e){}}catch(e){}},k.prototype.account=function(e){return this.is_tracking_on&&!a(e)&&(this.account_id=e),this.account_id},k.prototype.cookieDomain=function(e){return this.is_tracking_on&&!a(e)&&(this.cookie_domain=e),this.cookie_domain},k.prototype.isIdentified=function(){return S(this.identity)},k.prototype._getIdentifiers=function(){var e={};return this.isIdentified()?(this.identity.$exchange_id&&(e.$exchange_id=this.identity.$exchange_id),this.identity.$email&&(e.$email=this.identity.$email),this.identity.email&&(e.email=this.identity.email),this.identity.$id&&(e.$id=this.identity.$id),this.identity.id&&(e.id=this.identity.id),this.identity.$phone_number&&(e.$phone_number=this.identity.$phone_number),this.identity.$anonymous&&(e.$anonymous=this.identity.$anonymous),e):e},k.prototype._hasMismatchedExchangeToken=function(e){if(void 0===e)return!1;var t=b(e).companyId;return!(!this.account_id||!t||this.account_id===t)},k.prototype.identify=function(e,t,n,i){var o=this;if(this._shouldClearIdentity(e)&&this.clearIdentity(),!1===t&&this.identity)return this._getIdentityToReturn(this.identity,i);if(!this._identityNeedsUpdate(e)||!this.account_id)return this._getIdentityToReturn(this.identity,i);var r=null==e?void 0:e._kx,s=Object.assign({},this.identity,e);return delete s._kx,S(s)||r?this._sendNewIdentifyRequest(s,{_kx:r}).then((function(t){var r=void 0===t?{}:t,a=r.$exchange_id,c=r.should_clear_cookie;if(c&&o.clearIdentity(),!1!==n){var d;delete(d=c?Object.assign({},e,{$exchange_id:a}):Object.assign({},s,{$exchange_id:a})).$email,delete d.$phone_number,o._removeSpecialKeysPostIdentify(d),o._setIdentity(d)}else{var u=Object.assign({},o.identity,{$exchange_id:a});o._setIdentity(u)}o.trackActivity(),void 0!==i&&i()})):(this._setIdentity(s),void 0!==i&&i()),this._getIdentityToReturn(s)},k.prototype._getIdentityToReturn=function(e,t){var n=Object.assign({},e);return delete n.$exchange_id,delete n._kx,void 0!==t&&t(),n},k.prototype._removeSpecialKeysPostIdentify=function(e){return d(["$append","$unappend","$unset"],(function(t){c(e,t)&&(d(e[t],(function(n,i){"$unset"===t&&(i=n),c(e,i)&&delete e[i]})),delete e[t])})),e},k.prototype.clearIdentity=function(){this.cookie.del("__kla_id"),this.identity=null,this.clearViewedItems()},k.prototype.enableAnonymousTracking=function(){var e,t;this.identity&&this.identity.$anonymous||this.identify({$anonymous:(e=(new Date).getTime(),t=(new i).getWindow(),t.performance&&"function"==typeof t.performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})))})},k.prototype.clearViewedItems=function(){this.local_storage.del("__kla_viewed")},k.prototype.trackActivity=function(e){var t=this;if(!this.has_tracked_activity){this._saveReferrer(),this._saveLastReferrer();var n=this.context,i=new o(n),r={page:n.getLocation().href,browser:i.browser,os:i.os};this._parseInitialUrl((function(){t.track("__activity__",r)&&(t.has_tracked_activity=!0),void 0!==e&&e()}))}},k.prototype.trackViewedItem=function(e){if(this.local_storage.is_available){var t=g(),n=this.local_storage.get("__kla_viewed");try{n=JSON.parse(n)||[]}catch(e){n=[]}if(n.length){var i=n.reduce((function(e,t){return t[0].LastViewedDate&&(!e||t[0].LastViewedDate>e)?t[0].LastViewedDate:e}),0);(!i||i+2592e3<t)&&(n=[])}n.some((function(n){return e.ItemId===n[0].ItemId&&(n[1]+=1,n[0].LastViewedDate=t,!0)}))||(e.LastViewedDate=t,n.unshift([e,1]),n=n.splice(0,20)),n.sort((function(t,n){return t[1]!==n[1]?n[1]-t[1]:t[0].ItemId===e.ItemId?-1:n[0].ItemId===e.ItemId?1:0})),this.local_storage.set("__kla_viewed",JSON.stringify(n));var o={},r=n.map((function(e){return Object.assign({},e[0],{Views:e[1]})}));o.$viewed_items=r,this.identify(o,!0,!1)}},k.prototype.track=function(e,t){void 0===t&&(t={});var n=this.account_id,i=this.identity||{},o=!S(i);return!(!n||o)&&(t.$use_ip=!0,t.$is_session_activity=!0,this._sendRequest({url:"api/track",data:{data:j.encode(JSON.stringify({event:e,token:n,properties:t,customer_properties:i})),company_id:n}}),!0)},k.prototype.trackOnce=function(e,t){var n={__track_once__:!0};return t=Object.assign(n,t),this.track(e,t)},k.prototype._identityNeedsUpdate=function(e){var t=this.identity,n=Object.assign({},t,e);return!t||!l(t,n)},k.prototype._setIdentity=function(e){var t=e;delete t._kx,this.identity=t,this._saveIdentity(t)},k.prototype._saveIdentity=function(e){this.cookie.set("__kla_id",j.encode(JSON.stringify(e)),{daysToExpire:730,domain:this.cookie_domain})},k.prototype._saveReferrer=function(){var e=Object.assign({},this.identity);e.$referrer||(e.$referrer={ts:g(),value:this.context.getReferrer(),first_page:this.context.getLocation().href},this._setIdentity(e))},k.prototype._saveLastReferrer=function(){var e=Object.assign({},this.identity),t=g();(!e.$last_referrer||e.$last_referrer.ts+1800<t)&&(e.$last_referrer={ts:t,value:this.context.getReferrer(),first_page:this.context.getLocation().href}),e.$last_referrer.ts=t,this._setIdentity(e)},k.prototype._parseInitialUrl=function(e){var t=this.context.getLocation(),n=t.search.match(/utm_email=([^#&]+)/i);n&&this.identify({$email:decodeURIComponent(n[1])}),n=t.search.match(/_ke=([^#&]+)/i);var i,o=t.search.match(/_kx=([^#&]+)/i);if(o){var r=decodeURIComponent(o[1]);i=this._hasMismatchedExchangeToken(r)?{}:Object.assign({},{_kx:r})}else if(n){var s=j.decode(decodeURIComponent(n[1]));try{var a=JSON.parse(s);a.kl_company_id===this.account_id&&(i=Object.assign({},this._getIdentityFromKLObject(a)))}catch(e){i=Object.assign({},{$email:s})}}this.identify(i,void 0,void 0,e)},k.prototype._getIdentityFromKLObject=function(e){var t={};return a(e.kl_email)||(t.$email=e.kl_email),a(e.kl_phone_number)||(t.$phone_number=e.kl_phone_number),t},k.prototype._sendNewIdentifyRequest=function(e,t){void 0===t&&(t={});var n=JSON.stringify({$exchange_id:e.$exchange_id,token:this.account_id,properties:e,_kx:t._kx});return Object(y.a)(f("api/onsite/identify?c="+this.account_id),{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then((function(e){if(e.ok)return e.json();throw new Error("Failed with status "+e.status)}))},k.prototype._sendRequest=function(e,t){e.data.i=1;var n=f(e.url);n=n+"?"+function(e,t){void 0===t&&(t="&");var n=[];function i(e,t){n[n.length]=_(e)+"="+_(t)}return d(e,(function(e,t){Array.isArray(e)?d(e,(function(e){i(t,e)})):i(t,e)})),n.join(t).replace(/%20/g,"+")}(e.data);var i=new Image(1,1);t&&(i.onload=function(){t()}),i.src=n},k.prototype._shouldClearIdentity=function(e){return!(!e||!this.identity)&&(this._hasCachedIdAndNewIdDiffers(e)||!this._hasCachedId()&&this._hasCachedEmailAndNewEmailDiffers(e)||this._hasExchangeIdAndCompanyIdDiffers())},k.prototype._hasCachedEmailAndNewEmailDiffers=function(e){return this.identity.$email&&e.$email&&this.identity.$email!==e.$email},k.prototype._hasCachedIdAndNewIdDiffers=function(e){return this._hasCachedId()&&!a(e.$id)&&e.$id!==this.identity.$id},k.prototype._hasCachedId=function(){return!a(this.identity.$id)},k.prototype._hasExchangeId=function(){return!a(this.identity.$exchange_id)},k.prototype._hasExchangeIdAndCompanyIdDiffers=function(){if(!this._hasExchangeId())return!1;var e=b(this.identity.$exchange_id).companyId;return this.account_id&&e&&this.account_id!==e};function I(){Array.prototype.toJSON&&delete Array.prototype.toJSON;var e=new i,t=e.getWindow(),n=t._learnq,o=new k({cookie:new p(e),local_storage:new m(e),context:e});if(!n||!n._loaded){var r=function(e){if("function"==typeof e)e(o);else if(Array.isArray(e)&&e&&o[e[0]])return o[e[0]].apply(o,e.slice(1))};for(Array.isArray(n)||(t._learnq=[],n=t._learnq),d(n,(function(e){Array.isArray(e)&&e&&h(["account","cookieDomain","identify"],e[0])&&r(e)}));n.length;)r(n.shift());n.push=r,["account","cookieDomain","identify","track","isIdentified"].forEach((function(e){o[e]&&(n[e]=function(){return o[e].apply(o,arguments)})})),n._loaded=!0,n.push(["trackActivity"])}}}}]);
