var mistats = mistats || {};

mistats.dataLayer = mistats.dataLayer || function ()
{
   if (!window.digitalData)
   !function(n){var r={};function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=159)}([function(t,e,n){"use strict";function r(t){window.performance.mark&&performance.mark(t)}function a(t){r("DEPENDENCY: ".concat(t))}function c(t,e){var n="DEPRECATED: Use of ".concat(t," has been deprecated");r(e?"".concat(n,", use ").concat(e," instead."):"".concat(n,"."))}n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),e.a=r},function(t,e,n){"use strict";e.a={}},function(t,e,n){"use strict";e.a=function(t){var e=t.split("."),n=window.mistats?window.mistats:void 0,r="";if(n){r=n;for(var a=0;a<e.length;a+=1)void 0!==r?r=r[e[a]]:(r="",a=e.length)}return r}},function(t,e,n){"use strict";var o=n(1);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function(t,e){var n,r,a,c=e;t.compact&&"object"===u(e)?(r=n=e,a=Object.entries(n),r="",a.forEach(function(t,e){a[e]="".concat(t[0],":").concat(t[1]),r=a.join("&")}),c=r):"string"!=typeof e&&(c=JSON.stringify(e));var i="".concat(t.name,"=").concat(encodeURIComponent(c));t.path&&"string"==typeof t.path&&(i+="; path=".concat(t.path)),t.domain&&"string"==typeof t.domain&&(i+="; domain=".concat(t.domain)),t["max-age"]&&"number"==typeof t["max-age"]&&(i+="; max-age=".concat(t["max-age"])),t.secure&&"boolean"==typeof t.secure&&(i+="; secure"),t.expires&&new Date(t.expires).toUTCString()===t.expires&&(i+="; expires=".concat(t.expires)),o.a[t.name]=c,window.document.cookie=i}},function(t,e,n){"use strict";function r(t){return t?"string"==typeof t?t:JSON.stringify(t):""}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";var r=window.pageInfo||{};e.a=function(t){return!r[t]&&window.mi&&window.mi.pageInfo?window.mi.pageInfo.getConf(t)||"":r[t]||""}},,function(t,e,n){"use strict";var i=n(1);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t,e){var n=t;return e?n=function(t){if(-1===t.indexOf(":"))return t;var e=t.split("&"),a={};return e.forEach(function(t){var e=o(t.split(":"),2),n=e[0],r=e[1];a[n]=r}),a}(t):t.match(/^[[{].*[\]}]$/)&&(n=JSON.parse(t)),n}e.a=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=function(t){if(0===Object.keys(i.a).length)window.document.cookie.split("; ").forEach(function(t){var e=o(t.split("="),2),n=e[0],r=e[1];i.a[n]=r});else if(void 0===i.a[t])for(var e=window.document.cookie.split("; "),n=0;n<e.length;n++)if(0===e[n].indexOf("".concat(t,"="))){var r=o(e[n].split("="),2),a=r[0],c=r[1];i.a[a]=c;break}return i.a[t]?decodeURIComponent(i.a[t]):null}(t);return n?r(n,e):n}},,,,function(t,e,n){"use strict";var r=n(7),a=n(3);e.a=function(){var e=Object(r.a)("mi_sub",!0);if(e&&e.e&&e.e<Date.now()){e.s="ex",delete e.e;var t=window.location.host.split(".");t=t.slice(t.length-2,t.length).join("."),Object(a.a)({name:"mi_sub",compact:!0,path:"/",domain:t,expires:new Date(Date.now()+31536e7).toUTCString()},{s:"ex"})}var n={status:"na",subscribed:!1};null!==e&&([["s","status"],["e","expires"]].forEach(function(t){e[t[0]]&&(n[t[1]]=e[t[0]])}),n.subscribed=-1<n.status.indexOf("sub_"));return n}},,function(t,e,n){"use strict";var r=n(2),a=n(5);e.a=function(){var t="custom",e=Object(a.a)("marketInfo.pagelevel");if(e)t=e;else{var n=Object(r.a)("pagelevel");n&&(t=n.toLowerCase())}return t}},function(t,e,n){"use strict";var o=n(5),u=n(17),s=n(15);e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.referrer,n=Object(o.a)("marketInfo.allow_ads"),r=Object(s.a)(t),a=Object(s.a)(e),c=Object(u.a)(t),i=c&&void 0!==c.token;return"true"===n&&!i&&r&&a}},function(t,e,n){"use strict";e.a=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href).split("?")[1],e=!0;t&&(e=!t.match(/[&=]*[^&=]+(@|(%40))[^&=]+/));return e}},function(t,e,n){"use strict";var r=n(40),a=n(4),c=n(52),i=n(64),o=n(65),u=n(66),s=n(67),f=n(68),b=n(69),l=n(13),d=n(70),v=n(21),O=n(71),j=n(28),p=n(48),g=n(35),h={};e.a=h,Object.defineProperties(h,{ads:{value:r.a},authors:{get:function(){return Object(a.a)(Object(u.a)())}},content_source:{get:function(){return Object(a.a)(Object(i.a)())}},id:{get:function(){return Object(a.a)(Object(c.a)())}},keywords:{get:function(){return Object(a.a)(Object(s.a)())}},layout:{get:function(){return Object(a.a)(Object(f.a)())}},modification_date:{get:function(){return Object(a.a)(Object(o.a)())}},name:{get:function(){return Object(a.a)(Object(b.a)())}},publication_date:{get:function(){return Object(a.a)(Object(d.a)())}},referrer:{value:p.a},section:{value:O.a},site_name:{get:function(){return Object(v.a)("site")}},taxonomy:{value:g.a},third_parties:{value:j.a},type:{get:function(){return Object(a.a)(Object(l.a)())}}})},function(t,e,n){"use strict";e.a=function(){var n,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.location.search.substr(1),r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:["&","="];return t.split(r[0]).forEach(function(t){var e=t.split(r[1]);""!==e[0]&&((n=n||{})[e[0]]=e[1]||!0)}),n}},function(t,e,n){"use strict";e.a=function(t){var e=window.s?window.s:void 0;return e&&e[t]?e[t]:""}},,,function(t,e,n){"use strict";var a=n(2);e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"site",e={"Bellingham Herald":"The Bellingham Herald","Bellville News Democrat":"Belleville News-Democrat","Centre Daily":"Centre Daily Times","Charlotte Observer":"The Charlotte Observer","Durham Herald Sun":"The Herald-Sun","El Nuevo Herald":"el Nuevo Herald","Fresno Bee":"The Fresno Bee","Herald Online":"The Herald","Island Packet":"The Island Packet","Kansas City Star":"The Kansas City Star","Macon Telegraph":"The Telegraph",McClatchyDC:"McClatchy DC","News and Observer":"The News &amp; Observer","Sacramento Bee":"The Sacramento Bee","San Luis Obispo":"The Tribune"},n={"Myrtle Beach Online":"The Sun News"},r=Object(a.a)("sitename");return"site"===t?r in e&&(r=e[r]):"publisher"===t?(r in e&&(r=e[r]),r in n&&(r=n[r])):r=void 0,r}},,function(t,e,n){"use strict";var r=n(2);e.a=function(t){var e=Object(r.a)("taxonomy").split("|"),n="";return e.length>=t+1&&(n=e[t]),n}},function(t,e,n){"use strict";var r=n(4),a=n(21),c=n(78),i=n(79),o=n(80),u=n(81),s=n(82),f=n(83),b={};e.a=b,Object.defineProperties(b,{code:{get:function(){return Object(r.a)(Object(c.a)())}},county:{get:function(){return Object(r.a)(Object(i.a)())}},name:{get:function(){return Object(a.a)("publisher")}},phone:{get:function(){return Object(r.a)(Object(u.a)())}},state:{get:function(){return Object(r.a)(Object(s.a)())}},state_abbreviation:{get:function(){return Object(r.a)(Object(o.a)())}},zip_code:{get:function(){return Object(r.a)(Object(f.a)())}}})},function(t,e,n){"use strict";var r=n(4),a=n(29),c=n(84),i=n(46),o=n(53),u=n(54),s={};e.a=s;var f={};Object.defineProperties(f,{status:{get:function(){return Object(c.a)()}},expires:{get:function(){return Object(r.a)(Object(i.a)())}}}),Object.defineProperties(s,{id:{get:function(){return Object(o.a)()||""}},logged_in:{get:function(){return Object(r.a)(Object(u.a)())}},segments:{get:function(){return JSON.stringify(Object(a.a)())}},subscription:{value:f}})},function(t,e,n){"use strict";function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.a=function(t){var e,n=0,r=t;if("string"==typeof t){if(-1<t.indexOf(" H")){var a=s(t.split(" H"),2);r=a[0],n=a[1]}var c=s(r.split("/"),3),i=c[0],o=c[1],u=c[2];e=new Date(i,o-1,u,n)}return e}},,function(t,e,n){"use strict";var r=n(0),a=n(4),c=n(73),i=n(74),o={};e.a=o;var u={};Object.defineProperties(u,{dev:{get:function(){return Object(r.c)("third_parties.accuweather in the data layer"),""}},location_keys:{get:function(){return Object(r.c)("third_parties.accuweather in the data layer"),""}},location_strings:{get:function(){return Object(r.c)("third_parties.accuweather in the data layer"),""}}});var s={};Object.defineProperties(s,{id:{get:function(){return Object(r.c)("third_parties.chartbeat in the data layer"),""}},loaded:{get:function(){return Object(r.c)("third_parties.chartbeat in the data layer"),""}}});var f={};Object.defineProperties(f,{liveconnect_id:{get:function(){return Object(a.a)(Object(c.a)())}}});var b={};Object.defineProperties(b,{id:{get:function(){return Object(a.a)(Object(i.a)())}}}),Object.defineProperties(o,{accuweather:{value:u},chartbeat:{value:s},liveintent:{value:f},mather:{value:b}})},function(t,e,n){"use strict";var r=n(7);e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"aam_segment",e=Object(r.a)(t);return e?e.replace(/segID=(\d+)[^,]*/g,"$1").split(","):[]}},,,function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.adsizes")}},,,function(t,e,n){"use strict";var r=n(4),a=n(23),c=n(77),i={};e.a=i,Object.defineProperties(i,{full:{get:function(){return Object(r.a)(Object(c.a)())}},level0:{get:function(){return Object(a.a)(0)}},level1:{get:function(){return Object(a.a)(1)}},level2:{get:function(){return Object(a.a)(2)}},level3:{get:function(){return Object(a.a)(3)}},level4:{get:function(){return Object(a.a)(4)}}})},,,,function(t,e,n){"use strict";var r=n(4),a=n(58),c=n(59),i=n(60),o=n(61),u={},s={};e.a=s,Object.defineProperties(u,{name:{get:function(){return Object(r.a)(Object(o.a)())}},private:{get:function(){return Object(r.a)(Object(c.a)())}}}),Object.defineProperties(s,{client:{value:u},orientation:{get:function(){return Object(r.a)(Object(i.a)())}},type:{get:function(){return Object(r.a)(Object(a.a)())}}})},function(t,e,n){"use strict";var r=n(4),a=n(14),c=n(62),i=n(63),o=n(5);var u=function(){return Object(o.a)("prebiddingAdMap")},s=n(32),f={};e.a=f;Object.defineProperties(f,{allow:{get:function(){return Object(r.a)(Object(a.a)())}},blocked:{get:function(){return Object(r.a)(Object(c.a)())}},market_code:{get:function(){return Object(r.a)(Object(i.a)())}},prebidding_map:{get:function(){return Object(r.a)(u())}},sizes:{get:function(){return Object(r.a)(Object(s.a)())}}})},,,,,,function(t,e,n){"use strict";var r=n(11);e.a=function(){var t=Object(r.a)().expires;return parseInt(t,10)||void 0}},,function(t,e,n){"use strict";var r=n(4),a=n(75),c=n(0);var i=function(){return Object(c.c)("prevPageLevel"),""},o=n(76),u={};e.a=u;Object.defineProperties(u,{name:{get:function(){return Object(r.a)(Object(a.a)())}},type:{get:function(){return Object(r.a)(i())}},url:{get:function(){return Object(r.a)(Object(o.a)())}}})},,,,function(t,e,n){"use strict";var r=n(2),a=n(13);e.a=function(){var t;return-1===["custom","homepage","sectfront"].indexOf(Object(a.a)())&&(t=Object(r.a)("escenicId")),t}},function(t,e,n){"use strict";var r=n(7);e.a=function(){var t=Object(r.a)("MPPUser");return t?t.ucid:void 0}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Boolean(Object(r.a)("subscriptions.loggedIn"))}},,,function(t,e,n){"use strict";var r=n(39),a=n(16),c=n(24),i=n(25);e.a=function(){var t={},n=window.mi?window.mi.pageInfo:void 0;function e(){return[c.a.publication_code?c.a.publication_code:"McClatchy","homepage"===a.a.type?a.a.type:"".concat(a.a.type," ").concat(a.a.id?a.a.id:a.a.section.name),function(){var t=n?n.getConf("environment"):void 0,e="";switch(window.location.host.split(".")[0]){case"localhost":e="development";break;case"qa1":case"qa2":e="qa";break;default:e="production"}return t||e}()].join(" ")}return Object.defineProperties(t,{device:{value:r.a},page:{value:a.a},page_instance_id:{get:function(){return e()}},publisher:{value:c.a},user:{value:i.a},version:{value:"1.1.1"}}),t}},function(t,e,n){"use strict";var r=n(18);e.a=function(){var t=Object(r.a)("prop2").match(/tablet|phone|other/g);return t?t[0]:void 0}},function(t,e,n){"use strict";var r=n(18);e.a=function(){return Object(r.a)("prop2").match(/private/g)?"true":void 0}},function(t,e,n){"use strict";var r=n(18);e.a=function(){var t=Object(r.a)("prop2").match(/landscape|portrait|unsupported/g);return t?t[0]:void 0}},function(t,e,n){"use strict";var r=n(18);e.a=function(){var t=Object(r.a)("prop2").match(/in-app\sbrowser|in-fb\sbrowser/g);return t?t[0]:void 0}},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(2);function a(){return Object(r.a)("adblock")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.code")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("contentsource")}},function(t,e,n){"use strict";var r=n(2),a=n(26);e.a=function(){return Object(a.a)(Object(r.a)("moddate"))}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("authors")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("keywords")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("escenicLayout")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("pagename")}},function(t,e,n){"use strict";var r=n(2),a=n(26);e.a=function(){return Object(a.a)(Object(r.a)("pubdate"))}},function(t,e,n){"use strict";var r=n(4),a=n(72),c={};e.a=c,Object.defineProperties(c,{name:{get:function(){return Object(r.a)(Object(a.a)())}}})},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("channel")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.LiveConnectTag")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("listenerMarket")}},function(t,e,n){"use strict";var r=n(18);e.a=function(){return Object(r.a)("eVar12")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("referrer")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("taxonomy")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("bizunit")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.county")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.state_abbreviation")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.phone")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.state")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.zipcode")}},function(t,e,n){"use strict";var r=n(11);e.a=function(){return Object(r.a)().status}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(57);Object.defineProperty(window,"digitalData",{value:Object(r.a)()}),e.default=window.digitalData}]);
};

mistats.windowEvent = function (pName)
{
   var evt;

   try
   {
      window.dispatchEvent((new Event(pName)));
   } catch (evtErr)
   {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(pName, false, false, undefined);
      window.dispatchEvent(evt);
   }
};

mistats.hasCore = (function ()
{
   var i;
   var objs;

   objs = document.getElementsByTagName('script');
   for (i = 0; i < objs.length; i++)
      if ((objs[i].src || '').match(/static\/yozons-lib\/core\.js/))
         return true;

   return false;
})();

mistats.setCookie = function (pKey, pVal, pExp)
{
   var cd;
   var exp;

   if (!pKey)
      return;

   cd = (location.hostname || '').split('.');
   while (cd.length > 2)
      cd.shift();
   cd = 'domain=' + cd.join('.');

   exp = new Date();
   exp.setTime(exp.getTime() + (pVal ? (pExp || 63072000000) : -60000));
   exp = 'expires=' + exp.toUTCString();

   document.cookie = [encodeURIComponent(pKey) + '=' + encodeURIComponent(pVal || ''), exp, 'path=/', cd].join('; ');
};

mistats.isEscenic = mistats.isEscenic || function ()
{
   return mistats.hasCore || !!(location.hostname || '').match(/^qa\d+\./) || !!(window.pageInfo && (location.hostname || '').match(/^www\./) && (mistats.pagelevel || '').match(/Home|Section|Story|Gallery|Video/));
}();

mistats.sendToSubOpts = function (pObj, pThen)
{
   var gads;
   var hn;
   var info;
   var req;
   var xr;

   hn = ((location.hostname || '').match(/(www|account|checkout|qa\d)\.(bnd|bellinghamherald|sunherald|idahostatesman|bradenton|charlotteobserver|thestate|ledger-enquirer|elnuevoherald|fresnobee|star-telegram|islandpacket|kansascity|kentucky|macon|mercedsunstar|miamiherald|modbee|myrtlebeachonline|theolympian|newsobserver|heraldsun|heraldonline|sacbee|sanluisobispo|centredaily|thenewstribune|tri-cityherald|kansas|mcclatchydc)\.com/) || [''])[0];

   if (!(hn && pObj && pObj.name))
      return false;

   !pObj.endPoint && (pObj.endPoint = 'data');

   info = 'null';
   if (pObj.info)
      try
      {
         info = JSON.stringify(pObj.info);
      } catch (err)
      {
      }

   req = ['https://' + 'pu' + 'ba' + 'ds.g.do' + 'ubl' + 'ec' + 'lic' + 'k.net/subopt/' + pObj.endPoint + '?' + pObj.name + '=' + encodeURIComponent((location.hostname || '').replace(/^(www|account|checkout)\.|qa\d\./gi, '') + (pObj.value ? (':' + pObj.value) : ''))];
   pObj.type && (req[req.length] = 'type=' + encodeURIComponent(pObj.type));
   document.referrer && (req[req.length] = 'ref=' + encodeURIComponent(document.referrer));
   req = req.concat(['extrainfo=' + encodeURIComponent(info), 'u_tz=' + (new Date()).getTimezoneOffset(), 'v=1']);
   gads = (decodeURIComponent(document.cookie || '').match(/__gads=[^;]+/) || [''])[0].substr(7);
   gads && (req[req.length] = 'cookie=' + encodeURIComponent(gads));
   req = req.concat(['cdm=' + location.hostname, 'c=' + Math.round(Math.random() * 1000000)]);

   xr = new XMLHttpRequest();
   xr.open('get', req.join('&'));
   if (typeof pThen === 'function')
   {
      xr.onreadystatechange = function ()
      {
         if (xr.readyState != 4)
            return;
         pThen(xr.response, xr.status);
      };
      xr.onerror = function ()
      {
         pThen(xr.response, '-1');
      };
   }
   xr.send(null);

   return true;
};

mistats.Propensity = function ()
{
   var gps;
   var waiting;

   function isWaiting()
   {
      return waiting;
   };

   function done()
   {
      waiting = false;
      mistats.propScore = gps;
      gps && !isNaN(gps) && (mistats.setCookie('mi_gps', gps, 1800000));
      console.log('mistats_gpscore: ' + mistats.propScore);
      mistats.windowEvent('mistats_propensity');
   };

   function getScore()
   {
      return gps;
   };

   function fetch()
   {
      if (!mistats.sendToSubOpts(
      {
         name:'products',
         type:'general',
         endPoint:'pts'
      }, function (pResp, pStat)
      {
         var data;
         if (!pResp || pStat != 200 || pStat === '-1')
         {
            gps = 'request error';
            return done();
         }

         try
         {
            data = JSON.parse(pResp);
         } catch (err)
         {
            gps = 'parsing error';
            return done();
         }

         if (data && data.header && data.header.ok && data.scores && data.scores.length)
            for (i = 0; !gps && i < data.scores.length; i++)
               gps = data.scores[i].score + '';

         gps = gps || 'na';
         done();
      }))
      {
         gps = 'site-omitted';
         done();
      }
   };

   function init()
   {
      waiting = true;

      mistats.propScore = ((document.cookie || '').match(/mi_gps=-?\d+/) || [''])[0].substr(7).replace(/mi_gps=/g, '');

      gps = mistats.propScore;
      gps && parseInt(gps) < 101 && (done());
      fetch();
   };

   init();

   this.getScore = getScore;
   this.isWaiting = isWaiting;
};

mistats.propensity = new mistats.Propensity();

mistats.SubData = function ()
{
   var digiScore;
   var expires;
   var miSub;
   var mppId;
   var now;
   var prntScore;
   var rate;
   var service;
   var simpleStatus;
   var status;
   var statuses;
   var suboptsSent;
   var table;
   var timer;
   var titles;
   var waiting;

   function formatDate(pDate)
   {
      var date;
      var tmp;

      pDate && (date = [pDate.getFullYear()]);
      if (isNaN(date[0]))
         return '';
      tmp = (parseInt(pDate.getMonth()) + 1) + '';
      tmp.length === 1 && (tmp = '0' + tmp);
      date[1] = tmp;
      tmp = parseInt(pDate.getDate()) + '';
      tmp.length === 1 && (tmp = '0' + tmp);
      date[2] = tmp;

      return date.join('-');
   };

   function done()
   {
      var gst;
      var obj;
      var sdst;
      var sdsv;

      timer && (clearTimeout(timer));
      console.log('mistats_subdata ready');
      waiting = false;
      mistats.windowEvent('mistats_subdata');

      if (suboptsSent || !mistats.isEscenic || !mistats.sendToSubOpts)
         return;

      try
      {
         sdst = getStatus() || '';
         sdsv = getService() || '';
         if (!sdst)
            gst = 'unknown';
         else if (sdst.match(/Active|Failure Retry/i))
            gst = 'subscriber';
         else if (sdst === 'Expired')
            gst = 'past_subscriber';
         else
            gst = 'non_subscriber';

         obj =
         {
            name: 'states',
            value: gst
         };

         sdsv && (obj.info = {'product': [sdsv.match(/sports/i) ? 'sports' : 'basic']});
         suboptsSent = true;
         mistats.sendToSubOpts(obj);
      } catch (err)
      {
      }
   };

   function parse(pObj, pFresh)
   {
      var stale;
      var tmp;

      pObj = pObj || {};

      if (miSub)
      {
         miSub.indexOf('s:sub_') === 0 && (pObj.st = 1);
         pObj.xp = parseInt((miSub.match(/e:\d+/) || [''])[0].substr(2) || (Date.now() + 86400000));
      }

      tmp = parseInt(pObj.st || 0) - 1;
      status = !isNaN(tmp) && statuses[tmp] ? statuses[tmp] : '';
      pObj.xp > 0 && pObj.xp <= now && !status && (status = 'Expired By Date');

      if (!status)
         simpleStatus = 'Unknown';
      else if (status === 'Active' || (status.indexOf('Expired')  !== 0 && pObj.xp < now))
         simpleStatus = 'Active';
      else
         simpleStatus = 'Expired';

//      if (((pObj.xp <= now || status.match(/Expired|Pending|Failure Retry/)) && pObj.ts > now + 86400000) || pObj.ts > now + 604800000)
      if (!pFresh && (((pObj.xp <= now || status.match(/Expired|Pending|Failure Retry|Cancel/)) && pObj.ts + 3600000 < now) || pObj.ts + 1800000 < now))
      {
         stale = true;
         getInfo();
      }

      try
      {
         service = atob(pObj.sv);
      } catch (err)
      {
         service = '';
      };
      expires = formatDate(new Date(pObj.xp));
      rate = pObj.rt || 'na';
      digiScore = pObj.ds || 'na';
      prntScore = pObj.ps || 'na';

      done();

      try
      {
         tmp = btoa(JSON.stringify(pObj));
      } catch (err)
      {
         tmp = null;
      }

      if (!tmp || stale)
         return;

      window.localStorage && (window.localStorage.setItem('mistats_mppinf', tmp));
      mistats.setCookie('mi_mppinf', tmp, 1800000);
   };

   function callback(pObj)
   {
      var id;
      var idx;
      var obj;
      var rev;
      var svcs;
      var val;

      if (!(pObj && (pObj.table || pObj.titles)))
         return;

      !table && pObj.table && (table = pObj.table);
      !titles && pObj.titles && (titles = pObj.titles);

      if (!(table && titles))
         return;

      try
      {
         rev = titles.split('');
         rev.reverse();
         svcs = JSON.parse(atob(rev.join('')));
      } catch (err)
      {
         svcs = [];
      };

      id = parseInt(mppId);

      try
      {
         idx = id - parseInt(table.x, 16);
      } catch (err)
      {
      }

      if (!idx || isNaN(idx))
         return done();

      table.v && (val = table.v[idx]);

      if (!Array.isArray(val))
         return done();

      obj =
      {
         ds: val.length === 6 ? val[4] : 'na',
         id: id,
         ps: val.length === 6 ? val[5] : 'na',
         rt: val.length > 3 ? val[3] : 'na',
         st: val[0] || 0,
         sv: '',
         xp: val[1] * 3600000,
         ts: now
      };

      try
      {
         svcs[val[2]] && (obj.sv = btoa(svcs[val[2]]));
      } catch (err)
      {
      }

      parse(obj, true);
   };

   function isWaiting()
   {
      return !!waiting;
   };

   function getExpires()
   {
      return expires;
   }

   function getService()
   {
      return service || (miSub === 's:no' ? 'Registered User' : '');
   };

   function getSimpleStatus()
   {
      return simpleStatus || (miSub === 's:no' ? 'Registered' : 'Unknown');
   };

   function getStatus()
   {
      return status || (miSub === 's:no' ? 'Registered' : '');
   };

   function getRate()
   {
      return rate;
   };

   function getDigiScore()
   {
      return digiScore;
   };

   function getPrntScore()
   {
      return prntScore;
   };

   function getInfo()
   {
      mistats.jsLoader(mistats.mediaHost + '/mistats/mccaud/table_' + Math.floor(mppId / 5000).toString(16) + '.js?cb=' + Math.round(Date.now() / 900000));
      mistats.jsLoader(mistats.mediaHost + '/mistats/mccaud/titles.js?cb=' + Math.round(Date.now() / 900000));
      timer = setTimeout(function ()
      {
         waiting === true && (done());
      }, 5000);

   };

   function init()
   {
      var mppInfo;

      expires = '';
      service = '';
      status = '';

      mppId = decodeURIComponent(document.cookie || '').match(/MPPAccountId=\d+/);
      !mppId && (mppId = decodeURIComponent(document.cookie || '').match(/mi_mppaid=\d+/));

      if (!mppId)
         return done();

      statuses = JSON.parse(atob('WyJBY3RpdmUiLCJFeHBpcmVkIiwiUGVuZGluZyIsIkZhaWx1cmUgUmV0cnkiLCJDYW5jZWxsZWQgQnkgQXV0b3JlbmV3IiwiQ2FuY2VsbGVkIEJ5IFN1cHBvcnQiLCJDYW5jZWxsZWQgQnkgVXNlciJd'));

      mppId = mppId[0].match(/\d+/)[0];
      mistats.setCookie('mi_mppaid', mppId);

//      window.localStorage && (mppInfo = window.localStorage.getItem('mistats_mppinf'));

      if (!mppInfo)
      {
         mppInfo = decodeURIComponent(document.cookie || '').match(/mi_mppinf=[^;]+/);
         mppInfo && (mppInfo = mppInfo[0].substr(10));
      }

      if (mppInfo)
         try
         {
            mppInfo = JSON.parse(atob(mppInfo));
         } catch (infErr)
         {
            mppInfo = null;
         };

      now = Date.now();
      waiting = true;

      if (mppId == 5 && mppInfo && mppInfo.id && mppInfo.id != 5)
      {
         mppId = mppInfo.id;
         mistats.setCookie('mi_mppaid', mppId);
      }

      miSub = (decodeURIComponent(document.cookie || '').match(/mi_sub=s:(no|na|ex|sub_[0-z]+)(&e:\d{13,})?/) || [''])[0].substr(7);

      if (mppInfo && mppInfo.id == mppId)
         parse(mppInfo);
      else
         getInfo();
   };

   init();

   this.callback        = callback;
   this.getDigiScore    = getDigiScore;
   this.getExpires      = getExpires;
   this.getPrntScore    = getPrntScore;
   this.getRate         = getRate;
   this.getService      = getService;
   this.getSimpleStatus = getSimpleStatus;
   this.getStatus       = getStatus;
   this.isWaiting       = isWaiting;
};

mistats.adobe = mistats.adobe ||
{
   queue: [],
   processing: false,
   ready: false,
   mcId: '3B6E35F15A82BBB00A495D91@AdobeOrg',

   midHash: function (pVal)
   {
      var h;
      var i;

      function mmHash3(e,t){var a,c,h,r,o,d,A,C;for(a=3&e.length,c=e.length-a,h=t,o=3432918353,d=461845907,C=0;C<c;)A=255&e.charCodeAt(C)|(255&e.charCodeAt(++C))<<8|(255&e.charCodeAt(++C))<<16|(255&e.charCodeAt(++C))<<24,++C,h=27492+(65535&(r=5*(65535&(h=(h^=A=(65535&(A=(A=(65535&A)*o+(((A>>>16)*o&65535)<<16)&4294967295)<<15|A>>>17))*d+(((A>>>16)*d&65535)<<16)&4294967295)<<13|h>>>19))+((5*(h>>>16)&65535)<<16)&4294967295))+((58964+(r>>>16)&65535)<<16);switch(A=0,a){case 3:A^=(255&e.charCodeAt(C+2))<<16;case 2:A^=(255&e.charCodeAt(C+1))<<8;case 1:h^=A=(65535&(A=(A=(65535&(A^=255&e.charCodeAt(C)))*o+(((A>>>16)*o&65535)<<16)&4294967295)<<15|A>>>17))*d+(((A>>>16)*d&65535)<<16)&4294967295}return h^=e.length,h=2246822507*(65535&(h^=h>>>16))+((2246822507*(h>>>16)&65535)<<16)&4294967295,h=3266489909*(65535&(h^=h>>>13))+((3266489909*(h>>>16)&65535)<<16)&4294967295,(h^=h>>>16)>>>0}
      h = [];
      for (i = 0; i < 5; i++)
         h[h.length] = mmHash3(pVal, i);
      return h.join('').substr(0, 38);
   },

   amcvInit: function ()
   {
      var a;
      var b;

      if (!window.localStorage)
         return false;
      try
      {
         a = decodeURIComponent(window.localStorage.getItem('mistats_amcv') || '');
      } catch (err)
      {
         return false;
      }

      if ((a || '').match(/MCMID\|\d{38}\|/))
         mistats.setCookie('AMCV_3B6E35F15A82BBB00A495D91@AdobeOrg', a);
      else
         a = null;

      b = (decodeURIComponent(document.cookie || '').match(/AMCV_3B6E35F15A82BBB00A495D91@AdobeOrg=[^;]+/) || [''])[0].replace(/[^=]+=/, '');
      !b.match(/MCMID\|\d{38}\|/) && (b = null);

      try
      {
         (a || b) && (window.localStorage.setItem('mistats_amcv', b || a));
      } catch (err)
      {
         return false;
      }

      return !!(a || b);
   }(),

   adbmc: function ()
   {
      var a;
      a = decodeURIComponent(location.search || '').match(/[\?&]adobe_mc=[^&#]+/),
      a && (mistats.setCookie('mi_mwvs', '1', 1800000));
      return a;
   }(),

   target:
   {
      loaded: false,
      loading: false,

      isWaiting: function ()
      {
         mistats.adobe.target.loaded = !!(window.adobe && window.adobe.target);
         if (mistats.targetLib && (!mistats.atResponse || (mistats.atResponse && mistats.atResponse.type === 'at-request-succeeded' && !mistats.atOffers)))
            return true;
         return false;
      },

      mbox: function (pEvent)
      {
         var devType;
         var mboxParams;
         var mppId;
         var subStatus;

         if (pEvent)
         {
            if (pEvent.type === 'mistats_atloaded')
               window.removeEventListener('mistats_atloaded', mistats.adobe.target.mbox, false);
            else if (pEvent.type === 'mistats_propensity')
               window.removeEventListener('mistats_propensity', mistats.adobe.target.mbox, false);
         }

         if (!mistats.adobe.target.loaded)
            return window.addEventListener('mistats_atloaded', mistats.adobe.target.mbox, false);

//         if (mistats.propensity.isWaiting())
//            return window.addEventListener('mistats_propensity', mistats.adobe.target.mbox, false);

         mistats.adobe.target.loaded = true;

         devType = function ()
         {
            var pw;
            var ua;

            ua = (navigator.userAgent || '').toLowerCase();
            pw = Math.min(screen.width, screen.height) / (window.devicePixelRatio && !isNaN(window.devicePixelRatio) ? parseFloat(window.devicePixelRatio) : 1);

            if ((navigator.platform || ua).match(/ipad/i)
             || ((navigator.platform || '').match(/macintel/i) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
             || (ua.match(/windows\snt\s/i) && !ua.match(/windows\sphone/i) && ua.match(/\sarm;/i))
             || (ua.match(/android/i) && pw > 800)
             || ua.match(/android\s3/i)
             || ua.match(/rim\stablet/i)
             || ua.match(/silk/i))
               return 'tablet';

            if ((navigator.platform || ua).match(/iphone|ipod/i)
             || (ua.match(/android/i) && !ua.match(/android\s3/i) && pw <= 800)
             || (ua.match(/blackberry/i) && ua.match(/mobile/i))
             || ua.match(/windows\sphone/i)
             || (pw && pw <= 320))
               return 'phone';

            return 'other';
         }();

         subStatus = window.digitalData && window.digitalData.user && window.digitalData.user.subscription && window.digitalData.user.subscription.status ? window.digitalData.user.subscription.status : '';
         mboxParams =
         {
            'pageName': mistats.pagename,
            'pageType': mistats.pagelevel,
            'keywords': (mistats.keywords || '').replace(/,+/g, ',').replace(/^,/, '').replace(/,$/, '').replace(/\s+/g, ',').toLowerCase(),
            'loggedIn': ((document.cookie || '').match(/MPPUser=/) ? 'yes' : 'no'),
            'fromApp': (mistats.adobe.adbmc || (document.cookie || '').match(/mi_mwvs=/)) ? 'yes' : 'no',
            'devType': devType,
            'profile.subscriptionStatus': subStatus,
            'profile.propScore': mistats.propScore || '',
            'profile.rtp': window.GoogleSWG && window.GoogleSWG.isReadyToPay ? '1' : '',
            'user.categoryId': mistats.channel
         };

         if (window.digitalData && window.digitalData.page && window.digitalData.page.publicationDate)
            mboxParams['pubDate'] = window.digitalData.page.publicationDate;

         mppId = ((document.cookie || '').match(/(MPPAccountId|mi_mppaid)=\d+/) || [''])[0].replace(/.+=/, '');
         mppId && (mboxParams['mbox3rdPartyId'] = mppId);

         if (mistats.subData)
         {
            mboxParams['profile.subdataStatus'] = mistats.subData.getStatus();
            mboxParams['subdataStatus'] = mboxParams['profile.subdataStatus'];
         }
         window.digitalData && window.digitalData.user && window.digitalData.user.adFree && (mboxParams['profile.scroll'] = 'yes');
         (function ()
         {
            var exp;
            var miSub;
            var st;
            miSub = (decodeURIComponent(document.cookie || '').match(/mi_sub=s:(no|na|ex|sub_[0-z]+(&e:\d+)?)/) || [''])[0].replace(/=/, ':');
            if (!miSub)
               return;
            st = {'sub_0': 1, 'no': 8}[miSub.replace(/mi_sub:s:/, '').replace(/&e:.+/, '')] || '';
            st && (mboxParams['profile.subStatus'] = st);
            st === 8 && (mboxParams['profile.subTitle'] = 'Registered User');
            exp = parseInt((miSub.match(/&e:\d+/) || [''])[0].substr(3));
            !isNaN(exp) && (mboxParams['profile.subExpires'] = exp / 1000);
         })();
         window.adobe && window.adobe.target && (window.adobe.target.getOffer(
         {
            mbox: 'target-global-mbox',
            params: mboxParams,
            success: function (pOffer)
            {
               mistats.atOffers = pOffer;
               mistats.windowEvent('mistats_target');
               window.adobe.target.applyOffer(
               {
                  mbox: 'target-global-mbox',
                  offer: pOffer
               });
            },
            error: function(pStatus, pError)
            {
               console.log('adobe.target error:', pStatus, pError);
            }
         }));
      },

      init: function ()
      {
         if (mistats.adobe.target.loaded || (window.adobe && window.adobe.target))
         {
            mistats.adobe.target.loaded = true;
            return;
         }

         mistats.adobe.target.loading = true;
         mistats.jsLoader((mistats.targetLib || '').length ? mistats.targetLib : (mistats.mediaHost + '/mistats/at.js'), false, function ()
         {
            mistats.adobe.target.loaded = true;
         });
      }
   },

   validHost: function ()
   {
      var hostList;
      var i;

      if (mistats.hasCore)
         return true;

      if ((location.pathname || '').match(/\/video-embed/))
         return false;

      if (!mistats.isEscenic && (location.hostname || '').indexOf('www') === 0)
         return false;

      hostList =
      [
         'www.bnd.com',
         'www.bellinghamherald.com',
         'www.sunherald.com',
         'www.idahostatesman.com',
         'www.bradenton.com',
         'www.charlotteobserver.com',
         'www.thestate.com',
         'www.ledger-enquirer.com',
         'www.elnuevoherald.com',
         'www.fresnobee.com',
         'www.star-telegram.com',
         'www.islandpacket.com',
         'www.kansascity.com',
         'www.kentucky.com',
         'www.macon.com',
         'www.mercedsunstar.com',
         'www.miamiherald.com',
         'www.modbee.com',
         'www.myrtlebeachonline.com',
         'www.theolympian.com',
         'www.newsobserver.com',
         'www.heraldsun.com',
         'www.heraldonline.com',
         'www.sacbee.com',
         'www.sanluisobispo.com',
         'www.centredaily.com',
         'www.thenewstribune.com',
         'www.tri-cityherald.com',
         'www.kansas.com',
         'www.mcclatchydc.com',
         'www.flkeysnews.com',
         'www.vidaenelvalle.com',
         'www.sierrastar.com',
         'www.losbanosenterprise.com',
         /^qa\d+\.[^\.]+\.com$/
      ];

      for (i = 0; i < hostList.length; i++)
         if ((location.hostname || '').toLowerCase().match(hostList[i]))
            return true;

      return false;
   }(),

   setCookie: mistats.setCookie,

   hasECID: function ()
   {
      return !mistats.adobe.adbmc && !!decodeURIComponent(document.cookie || '').match(new RegExp('AMCV_' + mistats.adobe.mcId + '=[^;]*MCMID\\|[^;]+'));
   },

   ecidEnd: function (pObj)
   {
      mistats.adobe.adbmc && history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(/&?adobe_mc=[^&]+/g, '').replace(/^\?+$/, '') + (location.hash || '')));
      typeof pObj === 'object' && pObj.reason && mistats.adobe.queue.length && (mistats[pObj.reason] = true);
      mistats.adobe.ready = true;
      mistats.adobe.processQueue(true);
   },

   initECID: function ()
   {
      if (!(typeof Promise === 'function' && mistats.hasCore && mistats.adobe.validHost && mistats.bizunit === 'TNT'))
         return;
      mistats.adobe.cphon = ((document.cookie || '').match(/mi_cph=\d{38}/) || [''])[0].substr(7);
      !mistats.adobe.cphon && window.localStorage && (mistats.adobe.cphon = ((window.localStorage.getItem('mistats_cphon') || '').match(/\d{38}/) || [''])[0]);
      if (mistats.adobe.cphon)
         return;
      (function ()
      {
         var CPhon;
         CPhon=function(e){'use strict';function t(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function n(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function r(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function o(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function i(e,t){return[e[0]^t[0],e[1]^t[1]]}function a(e){return e=i(e,[0,e[0]>>>1]),e=i(e=n(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=i(e=n(e,[3301882366,444984403]),[0,e[0]>>>1])}function c(e,c){c=c||0;var u,s=(e=e||'').length%16,l=e.length-s,f=[0,c],d=[0,c],h=[0,0],v=[0,0],g=[2277735313,289559509],m=[1291169091,658871167];for(u=0;u<l;u+=16)h=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],v=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],h=r(h=n(h,g),31),f=t(f=r(f=i(f,h=n(h,m)),27),d),f=t(n(f,[0,5]),[0,1390208809]),v=r(v=n(v,m),33),d=t(d=r(d=i(d,v=n(v,g)),31),f),d=t(n(d,[0,5]),[0,944331445]);switch(h=[0,0],v=[0,0],s){case 15:v=i(v,o([0,e.charCodeAt(u+14)],48));case 14:v=i(v,o([0,e.charCodeAt(u+13)],40));case 13:v=i(v,o([0,e.charCodeAt(u+12)],32));case 12:v=i(v,o([0,e.charCodeAt(u+11)],24));case 11:v=i(v,o([0,e.charCodeAt(u+10)],16));case 10:v=i(v,o([0,e.charCodeAt(u+9)],8));case 9:v=n(v=i(v,[0,e.charCodeAt(u+8)]),m),d=i(d,v=n(v=r(v,33),g));case 8:h=i(h,o([0,e.charCodeAt(u+7)],56));case 7:h=i(h,o([0,e.charCodeAt(u+6)],48));case 6:h=i(h,o([0,e.charCodeAt(u+5)],40));case 5:h=i(h,o([0,e.charCodeAt(u+4)],32));case 4:h=i(h,o([0,e.charCodeAt(u+3)],24));case 3:h=i(h,o([0,e.charCodeAt(u+2)],16));case 2:h=i(h,o([0,e.charCodeAt(u+1)],8));case 1:h=n(h=i(h,[0,e.charCodeAt(u)]),g),f=i(f,h=n(h=r(h,31),m))}return f=t(f=i(f,[0,e.length]),d=i(d,[0,e.length])),d=t(d,f),f=t(f=a(f),d=a(d)),d=t(d,f),('00000000'+(f[0]>>>0).toString(10)).slice(-10)+('00000000'+(f[1]>>>0).toString(10)).slice(-10)+('00000000'+(d[0]>>>0).toString(10)).slice(-10)+('00000000'+(d[1]>>>0).toString(10)).slice(-8)}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},'function'==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw '';for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function f(e){return parseInt(e)}function d(e){return parseFloat(e)}function h(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function v(){var e=window,t=navigator;return h(['MSCSSMatrix'in e,'msSetImmediate'in e,'msIndexedDB'in e,'msMaxTouchPoints'in t,'msPointerEnabled'in t])>=4}function g(){var e=window,t=navigator;return h(['msWriteProfilerMark'in e,'MSStream'in e,'msLaunchUri'in t,'msSaveBlob'in t])>=3&&!v()}function m(){var e=window,t=navigator;return h(['webkitPersistentStorage'in t,'webkitTemporaryStorage'in t,0===t.vendor.indexOf('Google'),'webkitResolveLocalFileSystemURL'in e,'BatteryManager'in e,'webkitMediaStream'in e,'webkitSpeechGrammar'in e])>=5}function p(){var e=window,t=navigator;return h(['ApplePayError'in e,'CSSPrimitiveValue'in e,'Counter'in e,0===t.vendor.indexOf('Apple'),'getStorageUpdates'in t,'WebKitMediaKeys'in e])>=4}function w(){var e=window;return h(['safari'in e,!('DeviceMotionEvent'in e),!('ongestureend'in e),!('standalone'in navigator)])>=3}function y(e,t,n){(function(e){return e&&'function'==typeof e.setValueAtTime})(t)&&t.setValueAtTime(n,e.currentTime)}function S(e){return new Promise((function(t,n){e.oncomplete=function(e){return t(e.renderedBuffer)};var r=3,o=function(){switch(e.startRendering(),e.state){case'running':setTimeout((function(){return n(C('timeout'))}),1e3);break;case'suspended':document.hidden||r--,r>0?setTimeout(o,500):n(C('suspended'))}};o()}))}function b(e){for(var t=0,n=4500;n<5e3;++n)t+=Math.abs(e[n]);return t}function C(e){var t=new Error(e);return t.name=e,t}var A=['monospace','sans-serif','serif'],M=['sans-serif-thin','ARNO PRO','Agency FB','Arabic Typesetting','Arial Unicode MS','AvantGarde Bk BT','BankGothic Md BT','Batang','Bitstream Vera Sans Mono','Calibri','Century','Century Gothic','Clarendon','EUROSTILE','Franklin Gothic','Futura Bk BT','Futura Md BT','GOTHAM','Gill Sans','HELV','Haettenschweiler','Helvetica Neue','Humanst521 BT','Leelawadee','Letter Gothic','Levenim MT','Lucida Bright','Lucida Sans','Menlo','MS Mincho','MS Outlook','MS Reference Specialty','MS UI Gothic','MT Extra','MYRIAD PRO','Marlett','Meiryo UI','Microsoft Uighur','Minion Pro','Monotype Corsiva','PMingLiU','Pristina','SCRIPTINA','Segoe UI Light','Serifa','SimHei','Small Fonts','Staccato222 BT','TRAJAN PRO','Univers CE 55 Medium','Vrinda','ZWAdobeF'],T={fontStyle:'normal',fontWeight:'normal',letterSpacing:'normal',lineBreak:'auto',lineHeight:'normal',textTransform:'none',textAlign:'left',textDecoration:'none',textShadow:'none',whiteSpace:'normal',wordBreak:'normal',wordSpacing:'normal',position:'absolute',left:'-9999px',fontSize:'48px'};function k(e){return e.toDataURL()}var x={osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))m()&&h([!('MediaSettingsRange'in(e=window)),'RTCEncodedAudioFrame'in e,''+e.Intl=='[object Intl]',''+e.Reflect=='[object Reflect]'])>=3||n.push(t.languages);else if('string'==typeof t.languages){var o=t.languages;o&&n.push(o.split(','))}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return e=d(navigator.deviceMemory),t=void 0,'number'==typeof e&&isNaN(e)?t:e;var e,t},screenResolution:function(){var e=screen,t=[f(e.width),f(e.height)];return t.sort().reverse(),t},availableScreenResolution:function(){var e=screen;if(e.availWidth&&e.availHeight){var t=[f(e.availWidth),f(e.availHeight)];return t.sort().reverse(),t}},hardwareConcurrency:function(){try{var e=f(navigator.hardwareConcurrency);return isNaN(e)?1:e}catch(t){return 1}},timezoneOffset:function(){var e=(new Date).getFullYear();return Math.max(d(new Date(e,0,1).getTimezoneOffset()),d(new Date(e,6,1).getTimezoneOffset()))},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t)return(new t).resolvedOptions().timeZone},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!v()&&!g())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){return navigator.platform},plugins:function(){if(v())return[];if(navigator.plugins){for(var e=[],t=0;t<navigator.plugins.length;++t){var n=navigator.plugins[t];if(n){for(var r=[],o=0;o<n.length;++o){var i=n[o];r.push({type:i.type,suffixes:i.suffixes})}e.push({name:n.name,description:n.description,mimeTypes:r})}}return e}},canvas:function(){var e=function(){var e=document.createElement('canvas');return e.width=240,e.height=140,e.style.display='inline',[e,e.getContext('2d')]}(),t=e[0],n=e[1];if(!function(e,t){return!(!t||!e.toDataURL)}(t,n))return{winding:!1,data:''};n.rect(0,0,10,10),n.rect(2,2,6,6);var r=!n.isPointInPath(5,5,'evenodd');n.textBaseline='alphabetic',n.fillStyle='#f60',n.fillRect(125,1,62,20),n.fillStyle='#069',n.font='11pt no-real-font-123';var o='Cwm fjordbank'+unescape('%20%uD83D%uDE03%20')+'gly';return n.fillText(o,2,15),n.fillStyle='rgba(102, 204, 0, 0.2)',n.font='18pt Arial',n.fillText(o,4,45),n.globalCompositeOperation='multiply',n.fillStyle='rgb(255,0,255)',n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle='rgb(0,255,255)',n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle='rgb(255,255,0)',n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle='rgb(255,0,255)',n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill('evenodd'),{winding:r,data:k(t)}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=f(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent('TouchEvent'),e=!0}catch(r){e=!1}return{maxTouchPoints:n,touchEvent:e,touchStart:'ontouchstart'in window}},fonts:function(){var e=document,t=e.body,n=e.createElement('div'),r=e.createElement('div'),o={},i={},a=function(){var t=e.createElement('span');t.textContent='mmMwWLliI0O&1';for(var n=0,r=Object.keys(T);n<r.length;n++){var o=r[n];t.style[o]=T[o]}return t},c=function(e){return A.some((function(t,n){return e[n].offsetWidth!==o[t]||e[n].offsetHeight!==i[t]}))},u=A.map((function(e){var t=a();return t.style.fontFamily=e,n.appendChild(t),t}));t.appendChild(n);for(var s=0,l=A.length;s<l;s++)o[A[s]]=u[s].offsetWidth,i[A[s]]=u[s].offsetHeight;var f=function(){for(var e={},t=function(t){e[t]=A.map((function(e){var n=function(e,t){var n=a();return n.style.fontFamily='\''+e+'\','+t,n}(t,e);return r.appendChild(n),n}))},n=0,o=M;n<o.length;n++){t(o[n])}return e}();t.appendChild(r);for(var d=[],h=0,v=M.length;h<v;h++)c(f[M[h]])&&d.push(M[h]);return t.removeChild(r),t.removeChild(n),d},audio:function(){return s(this,void 0,void 0,(function(){var e,t,n,r,o,i,a;return l(this,(function(c){switch(c.label){case 0:if(e=window,!(t=e.OfflineAudioContext||e.webkitOfflineAudioContext))return[2,-2];if(p()&&!w()&&!function(){var e=window;return h(['DOMRectList'in e,'RTCPeerConnectionIceEvent'in e,'SVGGeometryElement'in e,'ontransitioncancel'in e])>=3}())return[2,-1];n=new t(1,44100,44100),(r=n.createOscillator()).type='triangle',y(n,r.frequency,1e4),o=n.createDynamicsCompressor(),y(n,o.threshold,-50),y(n,o.knee,40),y(n,o.ratio,12),y(n,o.reduction,-20),y(n,o.attack,0),y(n,o.release,.25),r.connect(o),o.connect(n.destination),r.start(0),c.label=1;case 1:return c.trys.push([1,3,4,5]),[4,S(n)];case 2:return i=c.sent(),[3,5];case 3:if('timeout'===(a=c.sent()).name||'suspended'===a.name)return[2,-3];throw a;case 4:return r.disconnect(),o.disconnect(),[7];case 5:return[2,b(i.getChannelData(0))]}}))}))},pluginsSupport:function(){return void 0!==navigator.plugins},productSub:function(){return navigator.productSub},emptyEvalLength:function(){return eval.toString().length},errorFF:function(){try{throw'a'}catch(e){try{return e.toSource(),!0}catch(t){return!1}}},vendor:function(){return navigator.vendor},chrome:function(){return void 0!==window.chrome},cookiesEnabled:function(){var e=document;try{e.cookie='mi_ct=1; SameSite=Strict;';var t=-1!==e.cookie.indexOf('mi_ct=');return e.cookie='mi_ct=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT',t}catch(n){return!1}}};function P(e,t,n){return s(this,void 0,void 0,(function(){var r,o,i,a,c,s,f,d,h;return l(this,(function(l){switch(l.label){case 0:r=Date.now(),o={},i=0,a=Object.keys(e),l.label=1;case 1:if(!(i<a.length))return[3,7];if(c=a[i],function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return!0;return!1}(n,c))return[3,6];s=void 0,l.label=2;case 2:return l.trys.push([2,4,,5]),h={},[4,e[c](t)];case 3:return h.value=l.sent(),s=h,[3,5];case 4:return f=l.sent(),s=f&&'object'==typeof f&&'message'in f?{error:f}:{error:{message:f}},[3,5];case 5:d=Date.now(),o[c]=u(u({},s),{duration:d-r}),r=d,l.label=6;case 6:return i++,[3,1];case 7:return[2,o]}}))}))}function O(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?u({name:(n=t).name,message:n.message,stack:null===(r=n.stack)||void 0===r?void 0:r.split('\n')},n):t;var n,r}),2)}function I(e){return c(function(e){for(var t='',n=0,r=Object.keys(e);n<r.length;n++){var o=r[n],i=e[o],a=i.error?'error':JSON.stringify(i.value);t+=(t?'|':'')+o.replace(new RegExp('([:|\])','g'),'\$1')+':'+a}return t}(e))}var E=function(){function e(){}return e.prototype.get=function(e){return void 0===e&&(e={}),s(this,void 0,void 0,(function(){var t,n;return l(this,(function(r){switch(r.label){case 0:return[4,P(x,void 0,[])];case 1:return t=r.sent(),n=function(e){var t;return{components:e,get cphon(){return void 0===t&&(t=I(this.components)),t},set cphon(e){t=e}}}(t),[2,n]}}))}))},e}();function D(e){var t=(void 0===e?{}:e).delayFallback,n=void 0===t?50:t;return s(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,(t=n,r=2*n,void 0===r&&(r=1/0),new Promise((function(e){var n=window.requestIdleCallback;n?n((function(){return e()}),{timeout:r}):setTimeout(e,Math.min(t,r))})))];case 1:return e.sent(),[2,new E]}var t,r}))}))};return e.load=D,e}({});
         CPhon.load().then(function (pLoadRes)
         {
            pLoadRes.get().then(function (pGetRes)
            {
               mistats.adobe.cphon = (pGetRes ? pGetRes.cphon : '') || '';
               if (!mistats.adobe.cphon)
                  return;
               mistats.setCookie('mi_cph', mistats.adobe.cphon);
               window.localStorage && (window.localStorage.setItem('mistats_cphon', mistats.adobe.cphon));
            });
         });
      })();         
   },

   getECID: function ()
   {
      var aid;
      var mcc;
      var opts;
      var ri;

      if ((location.pathname || '').match(/\/amp.html/) && window != top)
         ri = ((location.search || '').match(/&ri=[^&]+/) || [''])[0].substr(4) || '';
      else if ((location.hostname || '').match(/account\.|checkout\./))
         ri = (((location.search || '').match(/(\?|&)rid=[^&]+/) || [''])[0].substr(5) || (((location.pathname || '').match(/^\/amp\/signin\/[^\?#]+/) || ['']))[0].substr(12)) || '';

      var e=function(){"use strict";function e(t){"@babel/helpers - typeof";return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,i=this;return function(){i.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!U.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function i(e,t,n){var i=null==e?void 0:e[t];return void 0===i?n:i}function r(e){for(var t=/^\d+$/,n=0,i=e.length;n<i;n++)if(!t.test(e[n]))return!1;return!0}function a(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),r=parseInt(t[n],10);if(i>r)return 1;if(r>i)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),i=t.toString().split(".");return r(n.concat(i))?(a(n,i),o(n,i)):NaN}function c(e){return e===Object(e)&&0===Object.keys(e).length}function u(e){return"function"==typeof e||e instanceof Array&&e.length}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=Ie("log",e,t),this.warn=Ie("warn",e,t),this.error=Ie("error",e,t)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cookieName,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.cookies;if(!t||!i)return{get:Ne,set:Ne,remove:Ne};var r={remove:function(){i.remove(t)},get:function(){var e=i.get(t),n={};try{n=JSON.parse(e)}catch(e){n={}}return n},set:function(e,n){n=n||{};var a=r.get(),o=Object.assign(a,e);i.set(t,JSON.stringify(o),{domain:n.optInCookieDomain||"",cookieLifetime:n.optInStorageExpiry||3419e4,expires:!0})}};return r}function f(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function p(){function e(e,t){var n=Ae(e);return n.length?n.every(function(e){return!!t[e]}):Oe(t)}function t(){M(A),O(de.COMPLETE),_(h.status,h.permissions),s&&m.set(h.permissions,{optInCookieDomain:c,optInStorageExpiry:u}),C.execute(He)}function n(e){return function(n,i){if(!Me(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return O(de.CHANGED),Object.assign(A,ke(Ae(n),e)),i||t(),h}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s=i.isOptInStorageEnabled,c=i.optInCookieDomain,u=i.optInStorageExpiry,l=i.isIabContext,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=f.cookies,g=xe(a);Fe(g,"Invalid `previousPermissions`!"),Fe(o,"Invalid `preOptInApprovals`!");var m=d({cookieName:"adobeujs-optin"},{cookies:p}),h=this,_=le(h),C=_e(),S=Le(g),I=Le(o),v=s?m.get():{},D={},y=function(e,t){return Pe(e)||t&&Pe(t)?de.COMPLETE:de.PENDING}(S,v),b=function(e,t,n){var i=ke(he,!r);return r?Object.assign({},i,e,t,n):i}(I,S,v),A=Ee(b),O=function(e){return y=e},M=function(e){return b=e};h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,he),h.approveAll=h.approve.bind(h,he),h.isApproved=function(t){return e(t,h.permissions)},h.isPreApproved=function(t){return e(t,I)},h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(de.COMPLETE,e):Ne;return!r||r&&h.isComplete||!!o?e(h.permissions):t||C.add(He,function(){return e(h.permissions)}),n},h.complete=function(){h.status===de.CHANGED&&t()},h.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(Be);D[e.name]||(D[e.name]=e,e.onRegister.call(e,h))},h.execute=Ue(D),h.memoizeContent=function(e){we(e)&&m.set(e,{optInCookieDomain:c,optInStorageExpiry:u})},h.getMemoizedContent=function(e){var t=m.get();if(t)return t[e]},Object.defineProperties(h,{permissions:{get:function(){return b}},status:{get:function(){return y}},Categories:{get:function(){return fe}},doesOptInApply:{get:function(){return!!r}},isPending:{get:function(){return h.status===de.PENDING}},isComplete:{get:function(){return h.status===de.COMPLETE}},__plugins:{get:function(){return Object.keys(D)}},isIabContext:{get:function(){return l}}})}function g(e,t){function n(){r=null,e.call(e,new f("The call took longer than you wanted!"))}function i(){r&&(clearTimeout(r),e.apply(e,arguments))}if(void 0===t)return e;var r=setTimeout(n,t);return i}function m(){if(window.__tcfapi)return window.__tcfapi;var e=window;if(e===window.top)return void ye.error("__tcfapi not found");for(var t;!t;){e=e.parent;try{e.frames.__tcfapiLocator&&(t=e)}catch(e){}if(e===window.top)break}if(!t)return void ye.error("__tcfapi not found");var n={};return window.__tcfapi=function(e,i,r,a){var o=Math.random()+"",s={__tcfapiCall:{command:e,parameter:a,version:i,callId:o}};n[o]=r,t.postMessage(s,"*")},window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__tcfapiReturn){var i=t.__tcfapiReturn;"function"==typeof n[i.callId]&&(n[i.callId](i.returnValue,i.success),delete n[i.callId])}},!1),window.__tcfapi}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=!0===e.vendor.consents[t],r=n.every(function(t){return!0===e.purpose.consents[t]});return i&&r}function _(){var e=this;e.name="iabPlugin",e.version="0.0.2";var t,n=_e(),i={transparencyAndConsentData:null},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i[e]=t};e.fetchConsentData=function(e){var t=e.callback,n=e.timeout,i=g(t,n);a({callback:i})},e.isApproved=function(e){var t=e.callback,n=e.category,r=e.timeout;if(i.transparencyAndConsentData)return t(null,h(i.transparencyAndConsentData,pe[n],ge[n]));var o=g(function(e,i){t(e,h(i,pe[n],ge[n]))},r);a({category:n,callback:o})},e.onRegister=function(n){t=n;var i=Object.keys(pe),r=function(e,t){!e&&t&&(i.forEach(function(e){var i=h(t,pe[e],ge[e]);n[i?"approve":"deny"](e,!0)}),n.complete())};e.fetchConsentData({callback:r})};var a=function(e){var a=e.callback;if(i.transparencyAndConsentData)return a(null,i.transparencyAndConsentData);n.add("FETCH_CONSENT_DATA",a),o(function(e,a){if(a){var o=Ee(e),s=t.getMemoizedContent("iabConsentHash"),c=De(o.tcString).toString(32);o.consentString=e.tcString,o.hasConsentChangedSinceLastCmpPull=s!==c,r("transparencyAndConsentData",o),t.memoizeContent({iabConsentHash:c})}n.execute("FETCH_CONSENT_DATA",[null,i.transparencyAndConsentData])})},o=function(e){var t=Ve(pe),n=m();"function"==typeof n&&n("getTCData",2,e,t)}}var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i){n=arguments[i];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var S,I,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},D={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},y={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},b={CUSTOMERIDS:"getCustomerIDs"},A={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},O={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},M={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},k={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},E={GLOBAL:"global"},T={LAX:"Lax",STRICT:"Strict",NONE:"None"},L={MESSAGES:v,STATE_KEYS_MAP:D,ASYNC_API_MAP:y,SYNC_API_MAP:b,ALL_APIS:A,FIELDGROUP_TO_FIELD:O,FIELDS:M,AUTH_STATE:k,OPT_OUT:E,SAME_SITE_VALUES:T},P=L.STATE_KEYS_MAP,R=function(e){function t(){}function n(t,n){var i=this;return function(){var r=e(0,t),a={};return a[t]=r,i.setStateAndPublish(a),n(r),r}}this.getMarketingCloudVisitorID=function(e){e=e||t;var i=this.findField(P.MCMID,e),r=n.call(this,P.MCMID,e);return void 0!==i?i:r()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID(function(t){e({MCMID:t})})}},w=L.MESSAGES,N=L.ASYNC_API_MAP,x=L.SYNC_API_MAP,F=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(w.GETSTATE),""}}function n(n){this[N[n]]=function(i){i=i||e;var r=this.findField(n,i),a=t.call(this,n,i);return void 0!==r?r:a()}}function i(t){this[x[t]]=function(){return this.findField(t,e)||{}}}Object.keys(N).forEach(n,this),Object.keys(x).forEach(i,this)},j=L.ASYNC_API_MAP,V=function(){Object.keys(j).forEach(function(e){this[j[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},U=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)};var i=function(){var e=navigator.appName,t=navigator.userAgent;return"Microsoft Internet Explorer"===e||t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0&&t.indexOf("Windows NT 6")>=0};n.getIeVersion=function(){return document.documentMode?document.documentMode:i()?7:null},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce(function(t,n){return e[n]&&(t[n]=e[n]),t},Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var i=parseInt(e.d_ottl,10);return isNaN(i)&&(i=7200),{optOut:t,d_ottl:i}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}}),H=(U.isObjectEmpty,U.isValueEmpty,U.getIeVersion,U.encodeAndBuildRequest,U.isObject,U.defineGlobalNamespace,U.pluck,U.parseOptOut,U.normalizeBoolean,n),B=L.MESSAGES,G={0:"prefix",1:"orgID",2:"state"},Y=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){if(void 0!==e){t[G[n]]=2!==n?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(n){var i=this.parse(n);if(!i||Object.keys(i).length<2)return!0;var r=e!==i.orgID,a=!t||n.origin!==t,o=-1===Object.keys(B).indexOf(i.prefix);return r||a||o},this.send=function(n,i,r){var a=i+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{n.postMessage(a,t)}catch(e){}}},q=L.MESSAGES,X=function(e,t,n,i){function r(e){Object.assign(p,e)}function a(e){Object.assign(p.state,e),Object.assign(p.state.ALLFIELDS,e),p.callbackRegistry.executeAll(p.state)}function o(e){if(!h.isInvalid(e)){m=!1;var t=h.parse(e);p.setStateAndPublish(t.state)}}function s(e){!m&&g&&(m=!0,h.send(i,e))}function c(){r(new R(n._generateID)),p.getMarketingCloudVisitorID(),p.callbackRegistry.executeAll(p.state,!0),C.removeEventListener("message",u)}function u(e){if(!h.isInvalid(e)){var t=h.parse(e);m=!1,C.clearTimeout(p._handshakeTimeout),C.removeEventListener("message",u),r(new F(p)),C.addEventListener("message",o),p.setStateAndPublish(t.state),p.callbackRegistry.hasCallbacks()&&s(q.GETSTATE)}}function l(){g&&postMessage?(C.addEventListener("message",u),s(q.HANDSHAKE),p._handshakeTimeout=setTimeout(c,250)):c()}function d(){C.s_c_in||(C.s_c_il=[],C.s_c_in=0),p._c="Visitor",p._il=C.s_c_il,p._in=C.s_c_in,p._il[p._in]=p,C.s_c_in++}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(p[e]=function(){})}Object.keys(n).forEach(e),p.getSupplementalDataID=n.getSupplementalDataID,p.isAllowed=function(){return!0}}var p=this,g=t.whitelistParentDomain;p.state={ALLFIELDS:{}},p.version=n.version,p.marketingCloudOrgID=e,p.cookieDomain=n.cookieDomain||"",p._instanceType="child";var m=!1,h=new Y(e,g);p.callbackRegistry=H(),p.init=function(){d(),f(),r(new V(p)),l()},p.findField=function(e,t){if(void 0!==p.state[e])return t(p.state[e]),p.state[e]},p.messageParent=s,p.setStateAndPublish=a},W=L.MESSAGES,K=L.ALL_APIS,J=L.ASYNC_API_MAP,z=L.FIELDGROUP_TO_FIELD,Q=function(e,t){function n(){var t={};return Object.keys(K).forEach(function(n){var i=K[n],r=e[i]();U.isValueEmpty(r)||(t[n]=r)}),t}function i(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var i=z[n];t.push(i)}}),t.length?t:null}function r(t){return function n(r){var a=i();if(a){var o=J[a[0]];e[o](n,!0)}else t()}}function a(e,i){var r=n();t.send(e,i,r)}function o(e){c(e),a(e,W.HANDSHAKE)}function s(e){r(function(){a(e,W.PARENTSTATE)})()}function c(n){function i(i){r.call(e,i),t.send(n,W.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===W.HANDSHAKE?o:s)(e.source)}}},$=function(e,t){function n(e){return function(n){i[e]=n,r++,r===a&&t(i)}}var i={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var i=e[t];if(i.fn){var r=i.args||[];r.unshift(n(t)),i.fn.apply(i.context||null,r)}})},Z={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},set:function(e,t,n){var r=i(n,"cookieLifetime"),a=i(n,"expires"),o=i(n,"domain"),s=i(n,"secure"),c=i(n,"sameSite"),u=s?"Secure":"",l=c?"SameSite="+c+";":"";if(a&&"SESSION"!==r&&"NONE"!==r){var d=""!==t?parseInt(r||0,10):-60;if(d)a=new Date,a.setTime(a.getTime()+1e3*d);else if(1===a){a=new Date;var f=a.getYear();a.setYear(f+2+(f<1900?1900:0))}}else a=0;return e&&"NONE"!==r?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(o?" domain="+o+";":"")+l+u,this.get(e)===t):0},remove:function(e,t){var n=i(t,"domain");n=n?" domain="+n+";":"";var r=i(t,"secure"),a=i(t,"sameSite"),o=r?"Secure":"",s=a?"SameSite="+a+";":"";document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n+s+o}},ee=function(e,t){var n;!e&&C.location&&(e=C.location.hostname),n=e;var i,r=n.split("."),a=t||{};for(i=r.length-2;i>=0;i--)if(a.domain=r.slice(i).join("."),Z.set("test","cookie",a))return Z.remove("test",a),a.domain;return""},te={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},ne=!!C.postMessage,ie={postMessage:function(e,t,n){var i=1;t&&(ne?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{ne&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),C.addEventListener?C[e?"addEventListener":"removeEventListener"]("message",n):C[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},re=function(e){var t,n,i="0123456789",r="",a="",o=8,s=10,c=10;if(1==e){for(i+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),r+=i.substring(n,n+1),n=Math.floor(Math.random()*o),a+=i.substring(n,n+1),o=16;return r+"-"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),r+=i.substring(n,n+1),0===t&&9==n?s=3:(1==t||2==t)&&10!=s&&2>n?s=10:2<t&&(s=10),n=Math.floor(Math.random()*c),a+=i.substring(n,n+1),0===t&&9==n?c=3:(1==t||2==t)&&10!=c&&2>n?c=10:2<t&&(c=10);return r+a},ae=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(C.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new C[this.corsMetadata.corsType]},fireCORS:function(t,n,i){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var i=t.callback,r=C,o=0;o<i.length;o++)r=r[i[o]];r(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){a.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){a.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,i){e.CORSErrors.push({corsData:t,error:n,description:i}),t.loadErrorHandler&&("ontimeout"===i?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},oe={POST_MESSAGE_ENABLED:!!C.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},se=function(e,t){var n=C.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:oe.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=n.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=i.id,r.name=i.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=i.url,i.newIframeCreated=!0,t(),n.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.fireIframeLoadedCallbacks(e),i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,r=n.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var i,r=this;if(t===Object(t)&&t.ibs)if(i=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,c=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],i===JSON.stringify(s.ibs||[])){c=!0;break}c?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!oe.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=oe.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var i=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return i?r&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r),parseInt(i,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),i=r)):(i=r)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i)),i||(i=""),i},processSyncOnPage:function(e){var t,n,i,r;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)r=t[i],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,n,i,r,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,i=0;i<n;i++)r=t[i],a=[o("ibs"),o(r.id||""),o(r.tag||""),U.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,i){var r="syncOnPage"===i,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,c=e._getField(a),u=!1,l=!1,d=Math.ceil((new Date).getTime()/oe.MILLIS_PER_DAY);c?(o=c.split("*"),s=this.pruneSyncData(o,t.id,d),u=s.dataPresent,l=s.dataValid,u&&l||this.fireSync(r,t,n,o,a,d)):(o=[],this.fireSync(r,t,n,o,a,d))},pruneSyncData:function(e,t,n){var i,r,a,o=!1,s=!1;for(r=0;r<e.length;r++)i=e[r],a=parseInt(i.split("-")[1],10),i.match("^"+t+"-")?(o=!0,n<a?s=!0:(e.splice(r,1),r--)):n>=a&&(e.splice(r,1),r--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,i,r,a,o){var s=this;if(t){if("img"===n.tag){var c,u,l,d,f=n.url,p=e.loadSSL?"https:":"http:";for(c=0,u=f.length;c<u;c++){l=f[c],d=/^\/\//.test(l);var g=new Image;g.addEventListener("load",function(t,n,i,r){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,c=e._getField(a),u=[];if(c){o=c.split("*");var l,d,f;for(l=0,d=o.length;l<d;l++)f=o[l],f.match("^"+n.id+"-")||u.push(f)}s.setSyncTrackingData(u,n,i,r)}}(this.onPagePixels.length,n,a,o)),g.src=(d?p:"")+l,this.onPagePixels.push(g)}}}else this.addMessage(i),this.setSyncTrackingData(r,n,a,o)},addMessage:function(t){var n=encodeURIComponent,i=n(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((oe.POST_MESSAGE_ENABLED?"":i)+t)},setSyncTrackingData:function(t,n,i,r){t.push(n.id+"-"+(r+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(i,t.join("*"))},sendMessages:function(){var e,t=this,n="",i=encodeURIComponent;this.regionChanged&&(n=i("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?oe.POST_MESSAGE_ENABLED?(e=n+i("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){ie.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&(t=e.replace(n,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>oe.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},ce={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{type:"boolean"},disableThirdPartyCalls:{type:"boolean"},discardTrackingServerECID:{type:"boolean"},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{type:"boolean"},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{type:"boolean"},disableThirdPartyCookies:{type:"boolean"},idSyncDisableSyncs:{type:"boolean"},disableIdSyncs:{type:"boolean"},idSyncIDCallResult:{},idSyncSSLUseAkamai:{type:"boolean"},isCoopSafe:{type:"boolean"},isIabContext:{type:"boolean"},isOptInStorageEnabled:{type:"boolean"},loadSSL:{type:"boolean"},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{type:"boolean"},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{type:"boolean"},sameSiteCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},useLocalStorage:{type:"boolean"},whitelistIframeDomains:{},whitelistParentDomain:{}},ue={getConfigNames:function(){return Object.keys(ce)},getConfigs:function(){return ce},normalizeConfig:function(e,t){return ce[e]&&"boolean"===ce[e].type?"function"!=typeof t?t:t():t}},le=function(e){var t={};return e.on=function(e,n,i){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].push({callback:n,context:i})-1;return function(){t[e].splice(r,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter(function(e){if(e.callback!==n)return e}))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach(function(e){e.callback.apply(e.context,n)})}},e.publish},de={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},fe={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",MEDIA_ANALYTICS:"mediaaa"},pe=(S={},t(S,fe.AAM,565),t(S,fe.ECID,565),S),ge=(I={},t(I,fe.AAM,[1,10]),t(I,fe.ECID,[1,10]),I),me=["videoaa","iabConsentHash"],he=function(e){return Object.keys(e).map(function(t){return e[t]})}(fe),_e=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!u(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var i=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(i,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=void 0===n?[]:n,n=n instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var i=e.callbacks[t].shift();"function"==typeof i?i.apply(null,n):i instanceof Array&&i[1].apply(i[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!c(t))&&Object.keys(e.callbacks).forEach(function(n){var i=void 0!==t[n]?t[n]:"";e.execute(n,i)},e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},Ce=function(){},Se=function(e){var t=window,n=t.console;return!!n&&"function"==typeof n[e]},Ie=function(e,t,n){return n()?function(){if(Se(e)){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];console[e].apply(console,[t].concat(i))}}:Ce},ve=l,De=function(){for(var e=[],t=0;t<256;t++){for(var n=t,i=0;i<8;i++)n=1&n?3988292384^n>>>1:n>>>1;e.push(n)}return function(t,n){t=unescape(encodeURIComponent(t)),n||(n=0),n^=-1;for(var i=0;i<t.length;i++){var r=255&(n^t.charCodeAt(i));n=n>>>8^e[r]}return(n^=-1)>>>0}}(),ye=new ve("[ADOBE OPT-IN]"),be=function(t,n){return e(t)===n},Ae=function(e,t){return e instanceof Array?e:be(e,"string")?[e]:t||[]},Oe=function(e){var t=Object.keys(e);return!!t.length&&t.every(function(t){return!0===e[t]})},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!e||Te(e))&&Ae(e).every(function(e){return he.indexOf(e)>-1||t&&me.indexOf(e)>-1})},ke=function(e,t){return e.reduce(function(e,n){return e[n]=t,e},{})},Ee=function(e){return JSON.parse(JSON.stringify(e))},Te=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Le=function(e){if(we(e))return e;try{return JSON.parse(e)}catch(e){return{}}},Pe=function(e){return void 0===e||(we(e)?Me(Object.keys(e),!0):Re(e))},Re=function(e){try{var t=JSON.parse(e);return!!e&&be(e,"string")&&Me(Object.keys(t),!0)}catch(e){return!1}},we=function(e){return null!==e&&be(e,"object")&&!1===Array.isArray(e)},Ne=function(){},xe=function(e){return be(e,"function")?e():e},Fe=function(e,t){Pe(e)||ye.error("".concat(t))},je=function(e){return Object.keys(e).map(function(t){return e[t]})},Ve=function(e){return je(e).filter(function(e,t,n){return n.indexOf(e)===t})},Ue=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,i=t.params,r=void 0===i?{}:i,a=t.callback,o=void 0===a?Ne:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),c=e[s[0]],u=s[1];if(!c||"function"!=typeof c[u])throw new Error("Make sure the plugin and API name exist.");var l=Object.assign(r,{callback:o});c[u].call(c,l)}catch(e){ye.error("[execute] Something went wrong: "+e.message)}}};f.prototype=Object.create(Error.prototype),f.prototype.constructor=f;var He="fetchPermissions",Be="[OptIn#registerPlugin] Plugin is invalid.";p.Categories=fe,p.TimeoutError=f;var Ge=Object.freeze({OptIn:p,IabPlugin:_}),Ye=function(e,t){e.publishDestinations=function(n){var i=arguments[1],r=arguments[2];try{r="function"==typeof r?r:n.callback}catch(e){r=function(){}}var a=t;if(!a.readyToAttachIframePreliminary())return void r({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof n){if(!n.length)return void r({error:"subdomain is not a populated string."});if(!(i instanceof Array&&i.length))return void r({error:"messages is not a populated array."});var o=!1;if(i.forEach(function(e){"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)}),!o)return void r({error:"None of the messages are populated strings."})}else{if(!U.isObject(n))return void r({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void r({error:"config.subdomain is not a populated string."});var c=s.urlDestinations;if(!(c instanceof Array&&c.length))return void r({error:"config.urlDestinations is not a populated array."});var u=[];c.forEach(function(e){U.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):u.push(e))});!function e(){u.length&&setTimeout(function(){var t=new Image,n=u.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()},100)}()}a.iframe?(r({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIframe=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),a.attachIframe()):r({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})}},qe=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var i,r,a=Math.pow,o=a(2,32),s="",c=[],u=8*t.length,l=e.h=e.h||[],d=e.k=e.k||[],f=d.length,p={},g=2;f<64;g++)if(!p[g]){for(i=0;i<313;i+=g)p[i]=g;l[f]=a(g,.5)*o|0,d[f++]=a(g,1/3)*o|0}for(t+="Â";t.length%64-56;)t+="\0";for(i=0;i<t.length;i++){if((r=t.charCodeAt(i))>>8)return;c[i>>2]|=r<<(3-i)%4*8}for(c[c.length]=u/o|0,c[c.length]=u,r=0;r<c.length;){var m=c.slice(r,r+=16),h=l;for(l=l.slice(0,8),i=0;i<64;i++){var _=m[i-15],C=m[i-2],S=l[0],I=l[4],v=l[7]+(n(I,6)^n(I,11)^n(I,25))+(I&l[5]^~I&l[6])+d[i]+(m[i]=i<16?m[i]:m[i-16]+(n(_,7)^n(_,18)^_>>>3)+m[i-7]+(n(C,17)^n(C,19)^C>>>10)|0);l=[v+((n(S,2)^n(S,13)^n(S,22))+(S&l[1]^S&l[2]^l[1]&l[2]))|0].concat(l),l[4]=l[4]+v|0}for(i=0;i<8;i++)l[i]=l[i]+h[i]|0}for(i=0;i<8;i++)for(r=3;r+1;r--){var D=l[i]>>8*r&255;s+=(D<16?0:"")+D.toString(16)}return s},Xe=function(e,t){return"SHA-256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=qe(e)),e},We=function(e){return String(e).trim().toLowerCase()},Ke=Ge.OptIn;U.defineGlobalNamespace(),window.adobe.OptInCategories=Ke.Categories;var Je=function(t,n,i){function r(){S._customerIDsHashChanged=!1}function a(e){var t=e;return function(e){var n=e||A.location.href;try{var i=S._extractParamFromUri(n,t);if(i)return q.parsePipeDelimetedKeyValues(i)}catch(e){}}}function o(e){function t(e,t,n){e&&e.match(oe.VALID_VISITOR_ID_REGEX)&&(n===T&&(b=!0),t(e))}t(e[T],S.setMarketingCloudVisitorID,T),S._setFieldExpire(x,-1),t(e[w],S.setAnalyticsVisitorID)}function s(e){e=e||{},S._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",S._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},S._supplementalDataIDLast=e.supplementalDataIDLast||"",S._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function c(e){function t(e,t,n){return n=n?n+="|":n,n+=e+"="+encodeURIComponent(t)}function n(e,n){var i=n[0],r=n[1];return null!=r&&r!==F&&(e=t(i,r,e)),e}var i=e.reduce(n,"");return function(e){var t=q.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(i)}function u(e){var t=e.minutesToLive,n="";return(S.idSyncDisableSyncs||S.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function l(){return!!S.configs.doesOptInApply&&!(I.optIn.isComplete&&d())}function d(){return S.configs.doesOptInApply&&S.configs.isIabContext?I.optIn.isApproved(I.optIn.Categories.ECID)&&y:I.optIn.isApproved(I.optIn.Categories.ECID)}function f(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["syncIdentity",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach(function(e){var t=e[0],n=2===e.length?e[1]:"",i=S[t];S[t]=function(e){return d()&&S.isAllowed()?i.apply(S,arguments):("function"==typeof e&&S._callCallback(e,[n]),n)}})}function p(){var e=S._getAudienceManagerURLData(),t=e.url;return S._loadData(E,t,null,e)}function g(e,t){if(y=!0,e)throw new Error("[IAB plugin] : "+e);t&&t.gdprApplies&&(v=t.consentString,D=t.hasConsentChangedSinceLastCmpPull?1:0),p(),_()}function m(e,t){if(y=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(v=t.consentString,D=t.hasConsentChangedSinceLastCmpPull?1:0),S.init(),_()}function h(){I.optIn.isComplete&&(I.optIn.isApproved(I.optIn.Categories.ECID)?S.configs.isIabContext?I.optIn.execute({command:"iabPlugin.fetchConsentData",callback:m}):(S.init(),_()):S.configs.isIabContext?I.optIn.execute({command:"iabPlugin.fetchConsentData",callback:g}):(f(),_()))}function _(){I.optIn.off("complete",h)}if(!i||i.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this,I=window.adobe,v="",D=0,y=!1,b=!1;S.version="5.2.0";var A=C,O=A.Visitor;O.version=S.version,O.AuthState=L.AUTH_STATE,O.OptOut=L.OPT_OUT,A.s_c_in||(A.s_c_il=[],A.s_c_in=0),S._c="Visitor",S._il=A.s_c_il,S._in=A.s_c_in,S._il[S._in]=S,A.s_c_in++,S._instanceType="regular",S._log={requests:[]},S.marketingCloudOrgID=t,S.cookieName="AMCV_"+t,S.sessionCookieName="AMCVS_"+t;var M={};n&&n.secureCookie&&n.sameSiteCookie&&(M={sameSite:n.sameSiteCookie,secure:n.secureCookie}),S.cookieDomain=S.useLocalStorage?"":ee(null,M),S.loadSSL=!0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var k=null,E="MC",T="MCMID",P="MCIDTS",R="A",w="MCAID",N="AAM",x="MCAAMB",F="NONE",j=function(e){return!Object.prototype[e]},V=ae(S);S.FIELDS=L.FIELDS,S.cookieRead=function(e){return S.useLocalStorage?e===S.sessionCookieName?sessionStorage.getItem(e):localStorage.getItem(e):Z.get(e)},S.cookieWrite=function(e,t,n){var i=""+t;if(S.useLocalStorage)return e===S.sessionCookieName?sessionStorage.setItem(e,i):localStorage.setItem(e,i);var r=S.cookieLifetime?(""+S.cookieLifetime).toUpperCase():"",a={expires:n,domain:S.cookieDomain,cookieLifetime:r};return S.configs&&S.configs.secureCookie&&"https:"===location.protocol&&(a.secure=!0),S.configs&&S.configs.sameSiteCookie&&"https:"===location.protocol&&(a.sameSite=L.SAME_SITE_VALUES[S.configs.sameSiteCookie.toUpperCase()]||"Lax"),Z.set(e,i,a)},S.removeCookie=function(e){if(S.useLocalStorage)return e===S.sessionCookieName?sessionStorage.removeItem(e):localStorage.removeItem(e);var t={domain:S.cookieDomain};return S.configs&&S.configs.secureCookie&&"https:"===location.protocol&&(t.secure=!0),S.configs&&S.configs.sameSiteCookie&&"https:"===location.protocol&&(t.sameSite=L.SAME_SITE_VALUES[S.configs.sameSiteCookie.toUpperCase()]||"Lax"),Z.remove(e,t)},S.resetState=function(e){e?S._mergeServerState(e):s()},S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=function(){return S._isAllowedDone||(S._isAllowedDone=!0,(S.cookieRead(S.cookieName)||S.cookieWrite(S.cookieName,"T",1))&&(S._isAllowedFlag=!0)),"T"===S.cookieRead(S.cookieName)&&S.removeCookie(S.cookieName),S._isAllowedFlag},S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=function(e,t){S.marketingCloudServer&&S.marketingCloudServer.indexOf(".demdex.net")<0&&(S._use1stPartyMarketingCloudServer=!0);var n=S._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return S._getRemoteField(T,i,e,t,n)};var H=function(e,t){var n={};S.getMarketingCloudVisitorID(function(){t.forEach(function(e){n[e]=S._getField(e,!0)}),-1!==t.indexOf("MCOPTOUT")?S.isOptedOut(function(t){n.MCOPTOUT=t,e(n)},null,!0):e(n)},!0)};S.getVisitorValues=function(e,t){var n={MCMID:{fn:S.getMarketingCloudVisitorID,args:[!0],context:S},MCOPTOUT:{fn:S.isOptedOut,args:[void 0,!0],context:S},MCAID:{fn:S.getAnalyticsVisitorID,args:[!0],context:S},MCAAMLH:{fn:S.getAudienceManagerLocationHint,args:[!0],context:S},MCAAMB:{fn:S.getAudienceManagerBlob,args:[!0],context:S}},i=t&&t.length?U.pluck(n,t):n;t&&-1===t.indexOf("MCAID")?H(e,t):$(i,e)},S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=function(t,n){if(!S.isOptedOut()&&t){if(!U.isObject(t)||U.isObjectEmpty(t))return!1;S._readVisitor();var i,a,o,s;for(i in t)if(j(i)&&(S._currentCustomerIDs.dataSources=S._currentCustomerIDs.dataSources||{},a=t[i],n=a.hasOwnProperty("hashType")?a.hashType:n,a))if("object"===e(a)){var c={};if(a.id){if(n){if(!(s=Xe(We(a.id),n)))return;a.id=s,c.hashType=n}c.id=a.id}void 0!=a.authState&&(c.authState=a.authState),S._currentCustomerIDs.dataSources[i]=c}else if(n){if(!(s=Xe(We(a),n)))return;S._currentCustomerIDs.dataSources[i]={id:s,hashType:n}}else S._currentCustomerIDs.dataSources[i]={id:a};var u=S.getCustomerIDs(!0),l=S._getField("MCCIDH"),d="";l||(l=0);for(o in u){var f=u[o];if(!U.isObjectEmpty(f))for(i in f)j(i)&&(a=f[i],d+=(d?"|":"")+i+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))}S._newCustomerIDsHash=String(S._hash(d)),S._newCustomerIDsHash!==l&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(r))}},S.syncIdentity=function(t,n){if(!S.isOptedOut()&&t){if(!U.isObject(t)||U.isObjectEmpty(t))return!1;S._readVisitor();var i,a,o,s,c;for(i in t)if(j(i)&&(S._currentCustomerIDs.nameSpaces=S._currentCustomerIDs.nameSpaces||{},a=t[i],n=a.hasOwnProperty("hashType")?a.hashType:n,a&&"object"===e(a))){var u={};if(a.id){if(n){if(!(o=Xe(We(a.id),n)))return;a.id=o,u.hashType=n}u.id=a.id}void 0!=a.authState&&(u.authState=a.authState),a.dataSource&&(S._currentCustomerIDs.dataSources=S._currentCustomerIDs.dataSources||{},s=a.dataSource,S._currentCustomerIDs.dataSources[s]=u),S._currentCustomerIDs.nameSpaces[i]=u}var l=S.getCustomerIDs(!0),d=S._getField("MCCIDH"),f="";d||(d="0");for(c in l){var p=l[c];if(!U.isObjectEmpty(p))for(i in p)j(i)&&(a=p[i],f+=(f?"|":"")+i+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))}S._newCustomerIDsHash=String(S._hash(f)),S._newCustomerIDsHash!==d&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(r))}},S.getCustomerIDs=function(e){S._readVisitor();var t,n,i={dataSources:{},nameSpaces:{}},r=S._currentCustomerIDs.dataSources;for(t in r)j(t)&&(n=r[t],n.id&&(i.dataSources[t]||(i.dataSources[t]={}),i.dataSources[t].id=n.id,void 0!=n.authState?i.dataSources[t].authState=n.authState:i.dataSources[t].authState=O.AuthState.UNKNOWN,n.hashType&&(i.dataSources[t].hashType=n.hashType)));var a=S._currentCustomerIDs.nameSpaces;for(t in a)j(t)&&(n=a[t],n.id&&(i.nameSpaces[t]||(i.nameSpaces[t]={}),i.nameSpaces[t].id=n.id,void 0!=n.authState?i.nameSpaces[t].authState=n.authState:i.nameSpaces[t].authState=O.AuthState.UNKNOWN,n.hashType&&(i.nameSpaces[t].hashType=n.hashType)));return e?i:i.dataSources},S.setAnalyticsVisitorID=function(e){S._setAnalyticsFields(e)},S.getAnalyticsVisitorID=function(e,t,n){if(!q.isTrackingServerPopulated()&&!n)return S._callCallback(e,[""]),"";var i="";if(n||(i=S.getMarketingCloudVisitorID(function(t){S.getAnalyticsVisitorID(e,!0)})),i||n){var r=n?S.marketingCloudServer:S.trackingServer,a="";S.loadSSL&&(n?S.marketingCloudServerSecure&&(r=S.marketingCloudServerSecure):S.trackingServerSecure&&(r=S.trackingServerSecure));var o={};if(r){var s="http"+(S.loadSSL?"s":"")+"://"+r+"/id",c="d_visid_ver="+S.version+"&mcorgid="+encodeURIComponent(S.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",S._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];a=s+"?"+c+"&callback=s_c_il%5B"+S._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+c,o.callback=u}return o.url=a,S._getRemoteField(n?T:w,a,e,t,o)}return""},S.getAudienceManagerLocationHint=function(e,t){if(S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})){var n=S._getField(w);if(!n&&q.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})),n||!q.isTrackingServerPopulated()){var i=S._getAudienceManagerURLData(),r=i.url;return S._getRemoteField("MCAAMLH",r,e,t,i)}}return""},S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=function(e,t){if(S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})){var n=S._getField(w);if(!n&&q.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})),n||!q.isTrackingServerPopulated()){var i=S._getAudienceManagerURLData(),r=i.url;return S._customerIDsHashChanged&&S._setFieldExpire(x,-1),S._getRemoteField(x,r,e,t,i)}}return""},S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=function(e,t){S._supplementalDataIDCurrent||t||(S._supplementalDataIDCurrent=S._generateID(1));var n=S._supplementalDataIDCurrent;return S._supplementalDataIDLast&&!S._supplementalDataIDLastConsumed[e]?(n=S._supplementalDataIDLast,S._supplementalDataIDLastConsumed[e]=!0):n&&(S._supplementalDataIDCurrentConsumed[e]&&(S._supplementalDataIDLast=S._supplementalDataIDCurrent,S._supplementalDataIDLastConsumed=S._supplementalDataIDCurrentConsumed,S._supplementalDataIDCurrent=n=t?"":S._generateID(1),S._supplementalDataIDCurrentConsumed={}),n&&(S._supplementalDataIDCurrentConsumed[e]=!0)),n};var B=!1;S._liberatedOptOut=null,S.getOptOut=function(e,t){var n=S._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;if(d())return S._getRemoteField("MCOPTOUT",i,e,t,n);if(S._registerCallback("liberatedOptOut",e),null!==S._liberatedOptOut)return S._callAllCallbacks("liberatedOptOut",[S._liberatedOptOut]),B=!1,S._liberatedOptOut;if(B)return null;B=!0;var r="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/\.demdex\.net\/id\?/,".demdex.net/optOutStatus?"),n.callback=[r],C[r]=function(e){if(e===Object(e)){var t,n,i=U.parseOptOut(e,t,F);t=i.optOut,n=1e3*i.d_ottl,S._liberatedOptOut=t,setTimeout(function(){S._liberatedOptOut=null},n)}S._callAllCallbacks("liberatedOptOut",[t]),B=!1},V.fireCORS(n),null},S.isOptedOut=function(e,t,n){t||(t=O.OptOut.GLOBAL);var i=S.getOptOut(function(n){var i=n===O.OptOut.GLOBAL||n.indexOf(t)>=0;S._callCallback(e,[i])},n);return i?i===O.OptOut.GLOBAL||i.indexOf(t)>=0:null};var G={subscribed:!1,callbacks:[]};S.onReceiveEcid=function(e){if(d())return S.getMarketingCloudVisitorID(e,!0);G.subscribed=!0,e&&"function"==typeof e&&G.callbacks.push(e)},S._fields=null,S._fieldsExpired=null,S._hash=function(e){var t,n,i=0;if(e)for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i&=i;return i},S._generateID=re,S._generateLocalMID=function(){var e=S._generateID(0);return W.isClientSideMarketingCloudVisitorID=!0,e},S._callbackList=null,S._callCallback=function(e,t){try{"function"==typeof e?e.apply(A,t):e[1].apply(e[0],t)}catch(e){}},S._registerCallback=function(e,t){t&&(null==S._callbackList&&(S._callbackList={}),void 0==S._callbackList[e]&&(S._callbackList[e]=[]),S._callbackList[e].push(t))},S._callAllCallbacks=function(e,t){if(null!=S._callbackList){var n=S._callbackList[e];if(n)for(;n.length>0;)S._callCallback(n.shift(),t)}},S._addQuerystringParam=function(e,t,n,i){var r=encodeURIComponent(t)+"="+encodeURIComponent(n),a=q.parseHash(e),o=q.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+r+a;var s=o.split("?"),c=s[0]+"?",u=s[1];return c+q.addQueryParamAtLocation(u,r,i)+a},S._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)"),i=n.exec(e);if(i&&i.length)return decodeURIComponent(i[1])},S._parseAdobeMcFromUrl=a(oe.ADOBE_MC),S._parseAdobeMcSdidFromUrl=a(oe.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=function(e){var n=S._parseAdobeMcSdidFromUrl(e),i=1e9;n&&n.TS&&(i=q.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&i<S.sdidParamExpiry&&(S._supplementalDataIDCurrent=n.SDID,S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},S._attemptToPopulateIdsFromUrl=function(){var e=S._parseAdobeMcFromUrl();if(e&&e.TS){var n=q.getTimestampInSeconds(),i=n-e.TS;if(Math.floor(i/60)>oe.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;o(e)}},S._mergeServerState=function(e){if(e)try{if(e=function(e){return q.isObject(e)?e:JSON.parse(e)}(e),e[S.marketingCloudOrgID]){var t=e[S.marketingCloudOrgID];!function(e){q.isObject(e)&&S.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},S._timeout=null,S._loadData=function(e,t,n,i){t=S._addQuerystringParam(t,"d_fieldgroup",e,1),i.url=S._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=S._addQuerystringParam(i.corsUrl,"d_fieldgroup",e,1),W.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===V.corsMetadata.corsType&&V.fireCORS(i,n,e)},S._clearTimeout=function(e){null!=S._timeout&&S._timeout[e]&&(clearTimeout(S._timeout[e]),S._timeout[e]=0)},S._settingsDigest=0,S._getSettingsDigest=function(){if(!S._settingsDigest){var e=S.version;S.audienceManagerServer&&(e+="|"+S.audienceManagerServer),S.audienceManagerServerSecure&&(e+="|"+S.audienceManagerServerSecure),S._settingsDigest=S._hash(e)}return S._settingsDigest},S._readVisitorDone=!1,S._readVisitor=function(){if(!S._readVisitorDone){S._readVisitorDone=!0;var e,t,n,i,r,a,o=S._getSettingsDigest(),s=!1,c=S.cookieRead(S.cookieName),u=new Date;if(c||b||S.discardTrackingServerECID||(c=S.cookieRead(oe.FIRST_PARTY_SERVER_COOKIE)),null==S._fields&&(S._fields={}),c&&"T"!==c)for(c=c.split("|"),c[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!==o&&(s=!0),c.shift()),c.length%2==1&&c.pop(),e=0;e<c.length;e+=2)t=c[e].split("-"),n=t[0],i=c[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),s&&("MCCIDH"===n&&(i=""),r>0&&(r=u.getTime()/1e3-60)),n&&i&&(S._setField(n,i,1),r>0&&(S._fields["expire"+n]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!S.cookieRead(S.sessionCookieName))&&(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[n]=!0)));!S._getField(w)&&q.isTrackingServerPopulated()&&(c=S.cookieRead("s_vi"))&&(c=c.split("|"),c.length>1&&c[0].indexOf("v1")>=0&&(i=c[1],e=i.indexOf("["),e>=0&&(i=i.substring(0,e)),i&&i.match(oe.VALID_VISITOR_ID_REGEX)&&S._setField(w,i)))}},S._appendVersionTo=function(e){var t="vVersion|"+S.version,n=e?S._getCookieVersion(e):null;return n?te.areVersionsDifferent(n,S.version)&&(e=e.replace(oe.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},S._writeVisitor=function(){var e,t,n=S._getSettingsDigest();for(e in S._fields)j(e)&&S._fields[e]&&"expire"!==e.substring(0,6)&&(t=S._fields[e],n+=(n?"|":"")+e+(S._fields["expire"+e]?"-"+S._fields["expire"+e]:"")+"|"+t);n=S._appendVersionTo(n),S.cookieWrite(S.cookieName,n,1)},S._getField=function(e,t){return null==S._fields||!t&&S._fieldsExpired&&S._fieldsExpired[e]?null:S._fields[e]},S._setField=function(e,t,n){null==S._fields&&(S._fields={}),S._fields[e]=t,n||S._writeVisitor()},S._getFieldList=function(e,t){var n=S._getField(e,t);return n?n.split("*"):null},S._setFieldList=function(e,t,n){S._setField(e,t?t.join("*"):"",n)},S._getFieldMap=function(e,t){var n=S._getFieldList(e,t);if(n){var i,r={};for(i=0;i<n.length;i+=2)r[n[i]]=n[i+1];return r}return null},S._setFieldMap=function(e,t,n){var i,r=null;if(t){r=[];for(i in t)j(i)&&(r.push(i),r.push(t[i]))}S._setFieldList(e,r,n)},S._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==S._fields&&(S._fields={}),S._fields["expire"+e]=Math.floor(i.getTime()/1e3)+(n?"s":""),t<0?(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[e]=!0):S._fieldsExpired&&(S._fieldsExpired[e]=!1),n&&(S.cookieRead(S.sessionCookieName)||S.cookieWrite(S.sessionCookieName,"1"))},S._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=F),t&&(t===F||t.match(oe.VALID_VISITOR_ID_REGEX))||(t="")),t},S._setFields=function(t,n){if(S._clearTimeout(t),null!=S._loading&&(S._loading[t]=!1),W.fieldGroupObj[t]&&W.setState(t,!1),t===E){!0!==W.isClientSideMarketingCloudVisitorID&&(W.isClientSideMarketingCloudVisitorID=!1);var i=S._getField(T);if(!i||S.overwriteCrossDomainMCIDAndAID){if(!(i="object"===e(n)&&n.mid?n.mid:S._findVisitorID(n))){if(S._use1stPartyMarketingCloudServer&&!S.tried1stPartyMarketingCloudServer)return S.tried1stPartyMarketingCloudServer=!0,void S.getAnalyticsVisitorID(null,!1,!0);i=S._generateLocalMID()}S._setField(T,i)}i&&i!==F||(i=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&S._setFields(N,n),S._use1stPartyMarketingCloudServer&&n.mid&&S._setFields(R,{id:n.id})),S._callAllCallbacks(T,[i])}if(t===N&&"object"===e(n)){var r=604800;void 0!=n.id_sync_ttl&&n.id_sync_ttl&&(r=parseInt(n.id_sync_ttl,10));var a=X.getRegionAndCheckIfChanged(n,r);S._callAllCallbacks("MCAAMLH",[a]);var o=S._getField(x);(n.d_blob||n.blob)&&(o=n.d_blob,o||(o=n.blob),S._setFieldExpire(x,r),S._setField(x,o)),o||(o=""),S._callAllCallbacks(x,[o]),!n.error_msg&&S._newCustomerIDsHash&&S._setField("MCCIDH",S._newCustomerIDsHash)}if(t===R){var s=S._getField(w);s&&!S.overwriteCrossDomainMCIDAndAID||(s=S._findVisitorID(n),s?s!==F&&S._setFieldExpire(x,-1):s=F,S._setField(w,s)),s&&s!==F||(s=""),S._callAllCallbacks(w,[s])}if(S.idSyncDisableSyncs||S.disableIdSyncs)X.idCallNotProcesssed=!0;else{X.idCallNotProcesssed=!1;var c={};c.ibs=n.ibs,c.subdomain=n.subdomain,X.processIDCallData(c)}if(n===Object(n)){var u,l;d()&&S.isAllowed()&&(u=S._getField("MCOPTOUT"));var f=U.parseOptOut(n,u,F);u=f.optOut,l=f.d_ottl,S._setFieldExpire("MCOPTOUT",l,!0),S._setField("MCOPTOUT",u),S._callAllCallbacks("MCOPTOUT",[u])}},S._loading=null,S._getRemoteField=function(e,t,n,i,r){var a,o="",s=q.isFirstPartyAnalyticsVisitorIDCall(e),c={MCAAMLH:!0,MCAAMB:!0};if(d()&&S.isAllowed()){S._readVisitor(),o=S._getField(e,!0===c[e]);if(function(){return(!o||S._fieldsExpired&&S._fieldsExpired[e])&&(!S.disableThirdPartyCalls||s)}()){if(e===T||"MCOPTOUT"===e?a=E:"MCAAMLH"===e||e===x?a=N:e===w&&(a=R),a)return!t||null!=S._loading&&S._loading[a]||(null==S._loading&&(S._loading={}),S._loading[a]=!0,a===N&&(D=0),S._loadData(a,t,function(t){if(!S._getField(e)){t&&W.setState(a,!0);var n="";e===T?n=S._generateLocalMID():a===N&&(n={error_msg:"timeout"}),S._setFields(a,n)}},r)),S._registerCallback(e,n),o||(t||S._setFields(a,{id:F}),"")}else o||(e===T?(S._registerCallback(e,n),o=S._generateLocalMID(),S.setMarketingCloudVisitorID(o)):e===w?(S._registerCallback(e,n),o="",S.setAnalyticsVisitorID(o)):(o="",i=!0))}return e!==T&&e!==w||o!==F||(o="",i=!0),n&&i&&S._callCallback(n,[o]),e===T&&G.subscribed&&(G.callbacks&&G.callbacks.length&&G.callbacks.forEach(function(e){S._callCallback(e,[o])}),G.subscribed=!1,G.callbacks.length=0),o},S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields(E,e)},S._mapCustomerIDs=function(e){S.getAudienceManagerBlob(e,!0)},S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(R,e)},S._setAudienceManagerFields=function(e){S._readVisitor(),S._setFields(N,e)},S._getAudienceManagerURLData=function(e){var t=S.audienceManagerServer,n="",i=S._getField(T),r=S._getField(x,!0),a=S._getField(w),o=a&&a!==F?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(S.loadSSL&&S.audienceManagerServerSecure&&(t=S.audienceManagerServerSecure),t){var s,c,u,l=S.getCustomerIDs(!0);if(l)for(c in l){var d=l[c];if(!U.isObjectEmpty(d)){var f="nameSpaces"===c?"&d_cid_ns=":"&d_cid_ic=";for(s in d)j(s)&&(u=d[s],o+=f+encodeURIComponent(s)+"%01"+encodeURIComponent(u.id?u.id:"")+(u.authState?"%01"+u.authState:""))}}e||(e="_setAudienceManagerFields");var p="http"+(S.loadSSL?"s":"")+"://"+t+"/id",g="d_visid_ver="+S.version+(v&&-1!==p.indexOf("demdex.net")?"&gdpr=1&gdpr_consent="+v:"")+(D&&-1!==p.indexOf("demdex.net")?"&d_cf="+D:"")+"&d_rtbd=json&d_ver=2"+(!i&&S._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(S.marketingCloudOrgID)+"&d_nsid="+(S.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===k?"&d_coop_safe=1":!1===k?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+o,m=["s_c_il",S._in,e];return n=p+"?"+g+"&d_cb=s_c_il%5B"+S._in+"%5D."+e,{url:n,corsUrl:p+"?"+g,callback:m}}return{url:n}},S.appendVisitorIDsTo=function(e){try{var t=[[T,S._getField(T)],[w,S._getField(w)],["MCORGID",S.marketingCloudOrgID]];return S._addQuerystringParam(e,oe.ADOBE_MC,c(t))}catch(t){return e}},S.appendSupplementalDataIDTo=function(e,t){if(!(t=t||S.getSupplementalDataID(q.generateRandomString(),!0)))return e;try{var n=c([["SDID",t],["MCORGID",S.marketingCloudOrgID]]);return S._addQuerystringParam(e,oe.ADOBE_MC_SDID,n)}catch(t){return e}};var q={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){if(e!==w)return!1;var i;return t||(t=S.trackingServer),n||(n=S.trackingServerSecure),!("string"!=typeof(i=S.loadSSL?n:t)||!i.length)&&(i.indexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){Z.remove(e,{domain:S.cookieDomain})},isTrackingServerPopulated:function(){return!!S.trackingServer||!!S.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};S._helpers=q;var X=se(S,O);S._destinationPublishing=X,S.timeoutMetricsLog=[];var W={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case E:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case R:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case N:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};S.isClientSideMarketingCloudVisitorID=function(){return W.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return W.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return W.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=function(){return W.AAMIDCallTimedOut},S.idSyncGetOnPageSyncInfo=function(){return S._readVisitor(),S._getField("MCSYNCSOP")},S.idSyncByURL=function(e){if(!S.isOptedOut()){var t=u(e||{});if(t.error)return t.error;var n,i,r=e.url,a=encodeURIComponent,o=X;return r=r.replace(/^https:/,"").replace(/^http:/,""),n=U.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i=["ibs",a(e.dpid),"img",a(r),t.ttl,"",n],o.addMessage(i.join("|")),o.requestToProcess(),"Successfully queued"}},S.idSyncByDataSource=function(e){if(!S.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,S.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},Ye(S,X),S._getCookieVersion=function(e){e=e||S.cookieRead(S.cookieName);var t=oe.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},S._resetAmcvCookie=function(e){var t=S._getCookieVersion();t&&!te.isLessThan(t,e)||S.removeCookie(S.cookieName)},S.setAsCoopSafe=function(){k=!0},S.setAsCoopUnsafe=function(){k=!1},function(){if(S.configs=Object.create(null),q.isObject(n))for(var e in n)j(e)&&(S[e]=n[e],S.configs[e]=n[e])}(),f();var K;S.init=function(){l()&&(I.optIn.fetchPermissions(h,!0),!I.optIn.isApproved(I.optIn.Categories.ECID))||K||(K=!0,function(){if(q.isObject(n)){S.idSyncContainerID=S.idSyncContainerID||0,k="boolean"==typeof S.isCoopSafe?S.isCoopSafe:q.parseBoolean(S.isCoopSafe),S.resetBeforeVersion&&S._resetAmcvCookie(S.resetBeforeVersion),S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl(),S._readVisitor();var e=S._getField(P),t=Math.ceil((new Date).getTime()/oe.MILLIS_PER_DAY);S.idSyncDisableSyncs||S.disableIdSyncs||!X.canMakeSyncIDCall(e,t)||(S._setFieldExpire(x,-1),S._setField(P,t)),S.getMarketingCloudVisitorID(),S.getAudienceManagerLocationHint(),S.getAudienceManagerBlob(),S._mergeServerState(S.serverState)}else S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl()}(),function(){if(!S.idSyncDisableSyncs&&!S.disableIdSyncs){X.checkDPIframeSrc();var e=function(){var e=X;e.readyToAttachIframe()&&e.attachIframe()};A.addEventListener("load",function(){O.windowLoaded=!0,e()});try{ie.receiveMessage(function(e){X.receiveMessage(e.data)},X.iframeHost)}catch(e){}}}(),function(){S.whitelistIframeDomains&&oe.POST_MESSAGE_ENABLED&&(S.whitelistIframeDomains=S.whitelistIframeDomains instanceof Array?S.whitelistIframeDomains:[S.whitelistIframeDomains],S.whitelistIframeDomains.forEach(function(e){var n=new Y(t,e),i=Q(S,n);ie.receiveMessage(i,e)}))}())}};Je.config=ue,C.Visitor=Je;var ze=Je,Qe=function(e){if(U.isObject(e))return Object.keys(e).filter(function(t){return""!==e[t]&&ue.getConfigs()[t]}).reduce(function(t,n){var i=ue.normalizeConfig(n,e[n]),r=U.normalizeBoolean(i);return t[n]=r,t},Object.create(null))},$e=Ge.OptIn,Ze=Ge.IabPlugin;return ze.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=C.s_c_il;if(t)for(var n=0;n<t.length;n++){var i=t[n];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===e)return i}}();if(n)return n;var i=Qe(t)||{};!function(e){C.adobe.optIn=C.adobe.optIn||function(){var t=U.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=n||ee(),n=n===window.location.hostname?"":n,t.optInCookieDomain=n;var i=new $e(t,{cookies:Z});if(t.isIabContext&&t.doesOptInApply){var r=new Ze;i.registerPlugin(r)}return i}()}(i||{});var r=e,a=r.split("").reverse().join(""),o=new ze(e,null,a);i.cookieDomain&&(o.cookieDomain=i.cookieDomain),i.sameSiteCookie&&i.secureCookie&&(o.configs={sameSiteCookie:i.sameSiteCookie,secureCookie:i.secureCookie}),function(){C.s_c_il.splice(--C.s_c_in,1)}();var s=U.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var c=function(){try{return C.self!==C.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e.removeCookie("TEST_AMCV_COOKIE"),!0)}(o)&&C.parent?new X(e,i,o,C.parent):new ze(e,i,a);return o=null,c.init(),c},function(){function e(){ze.windowLoaded=!0}C.addEventListener?C.addEventListener("load",e):C.attachEvent&&C.attachEvent("onload",e),ze.codeLoadEnd=(new Date).getTime()}(),ze}();

      opts =
      {
         trackingServer: 'mcclatchy.sc.omtrdc.net',
         trackingServerSecure: 'mcclatchy.sc.omtrdc.net',
         isCoopSafe: true,
         secureCookie: true,
         sameSiteCookie: 'None'
      };

      ri && (opts.overwriteCrossDomainMCIDAndAID = true);
      if (mistats.adobe.adbmc && decodeURIComponent(mistats.adobe.adbmc[0]).indexOf(mistats.adobe.mcId) > -1)
      {
         opts.overwriteCrossDomainMCIDAndAID = true;
         mistats.appvid = mistats.adobe.adbmc[0].substr(10);
      }

      mistats.visitor = Visitor.getInstance(mistats.adobe.mcId, opts);
      if (ri)
      {
         mistats.visitor.setMarketingCloudVisitorID(mistats.adobe.midHash(ri));
         console.log('mistats mcvisid: ' + mistats.visitor.getMarketingCloudVisitorID());
      }

      if (!mistats.appvid)
      {
         aid = decodeURIComponent(location.search || '').match(/[\?&]appvid=[0-9a-z]{16}-[0-9a-z]{16}|[\?&]appvid=[0-9a-z]{36}/i);
         if (aid)
         {
            history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(/[\?&]appvid=[^&]+/i, '') + (location.hash || '')));

            mistats.appvid = aid[0].substr(8).toUpperCase();
            mistats.adobe.setCookie('mi_avid', mistats.appvid);
            mcc = decodeURIComponent(document.cookie || '').match(new RegExp('AMCV_' + mistats.adobe.mcId + '=[^;]+'));
            if (mcc)
            {
               mistats.visitor._fields = mistats.visitor._fields || {};
               mistats.visitor._fields['MCAID'] = mistats.appvid;

               mcc = mcc[0].match(/\|MCAID\|/) ? mcc[0].replace(/\|MCAID\|[^\|]+/, '|MCAID|' + mistats.appvid) : mcc[0].replace(/\|vVersion/, '|MCAID|' + mistats.appvid + '|vVersion');
               mcc = mcc.replace(/[^=]+=/, '');

               mistats.adobe.setCookie('AMCV_' + mistats.adobe.mcId, mcc);
            }
         }
      }

      mistats.visitor.onReceiveEcid(mistats.adobe.ecidEnd);

      if (!(mistats.visitor.isAllowed && mistats.visitor.isAllowed()) && mistats.cookiesDisabled)
         mistats.adobe.ecidEnd({reason: 'ecidFailed'});
      else
         setTimeout(function ()
         {
            !mistats.adobe.ready && (mistats.adobe.ecidEnd({reason: 'ecidTimeout'}));
         }, 5000);
   },

   processQueue: function (pReady)
   {
      pReady && (mistats.adobe.ready = true);

      if (!mistats.adobe.ready || mistats.adobe.queue.processing)
         return;

      if (!mistats.adobe.queue.length)
      {
         mistats.adobe.queue.processing = false;
         return;
      }

      (function ()
      {
         mistats.adobe.queue.processing = true;
         mistats.adobe.queue.shift()();
         mistats.adobe.queue.processing = false;
         mistats.adobe.processQueue(pReady);
      })();
   },

   addToQueue: function (pFunc)
   {
      if (!pFunc)
         return;

      mistats.adobe.queue[mistats.adobe.queue.length] = pFunc;
      mistats.adobe.processQueue();
   }
}

mistats.adobe.getECID();
!mistats.subData && mistats.SubData && (mistats.adobe.validHost || (location.hostname || '').indexOf('eedition') === 0) && (mistats.subData = mistats.subData || (new mistats.SubData()));

if (mistats.adobe.validHost || (location.hostname || '').match(/eedition/))
{
   mistats.targetLib = 'https://media.mcclatchyinteractive.com/mistats/at_2.3.js';
   mistats.adobe.target.init();
   mistats.adobe.target.mbox();
}

window.addEventListener && (window.addEventListener('cta_widget', function (pEvent)
{
   mistats.ctaWidget = true;
}, false));

document.addEventListener && (document.addEventListener('at-request-succeeded', function (pEvent)
{
   var resp;
   resp = pEvent && pEvent.detail ? pEvent.detail : {};
   (!mistats.atResponse || resp.responseTokens) && (mistats.atResponse = resp);
   mistats.windowEvent('mistats_target');
}, false));

document.addEventListener && (document.addEventListener('at-request-failed', function (pEvent)
{
   var resp;
   resp = pEvent && pEvent.detail ? pEvent.detail : {};
   (!mistats.atResponse || resp.responseTokens) && (mistats.atResponse = resp);
   mistats.windowEvent('mistats_target');
}, false));

document.addEventListener && (document.addEventListener('at-library-loaded', function (pEvent)
{
   mistats.adobe.target.loaded = true;
   mistats.windowEvent('mistats_atloaded');
}, false));

mistats.BrowserMode = function ()
{
   var priv;

   function isPrivate()
   {
      return priv;
   };

   function store()
   {
      var date;
      var domain;

      priv = true;
      domain = (location.hostname || '').match(/[^\.]+(\.com)?$/);

      date = new Date();
      date.setTime(date.getTime() + 1209600000);
      document.cookie = ['mi_pbm=1', 'expires=' + date.toUTCString(), 'path=/', 'domain=' + (domain ? domain[0] : location.hostname)].join('; ');
   };

   function detect()
   {
      var test;

      if ((document.cookie || '').match(/mi_pbm=1/))
         return store();

      if (window.RequestFileSystem || window.webkitRequestFileSystem)
      {
         try
         {
            test = window.RequestFileSystem || window.webkitRequestFileSystem;
            test(window.TEMPORARY, 1, function ()
            {
            }, function ()
            {
               store();
            });
         } catch (pError)
         {
            store();
         }
      } else if ('MozAppearance' in document.documentElement.style && navigator.userAgent.match(/Firefox/) && !navigator.serviceWorker)
      {
         store();
      } else if (navigator.userAgent.match(/.Trident\/\d/) && navigator.userAgent.match(/.MSIE\s1\d\.\d|.rv:1\d\.\d/))
      {
         try
         {
            !window.msIndexedDB && (store());
         } catch (pError)
         {
            store();
         }
      } else if (window.localStorage && navigator.userAgent.match(/Safari/))
      {
         try
         {
            window.localStorage.setItem('mi_test', 1);
         } catch (pError)
         {
            store();
         }
         !priv && (window.localStorage.removeItem('mi_test'));
      }
   };

   this.isPrivate = isPrivate;
   detect();
};

mistats.browserMode = mistats.browserMode || (new mistats.BrowserMode());

mistats.Z_AdSlots = function ()
{
   var adlist;
   var count;
   var lineItems;
   var ready;
   var tid;
   var timer;
   var total;

   function track(pObj)
   {
      var i;
      var qs;
      var req;
      var res;

      if (!pObj)
         return;

      pObj.ti = getTransactionId();
      pObj.ns = window.digitalData && window.digitalData.user && window.digitalData.user.adFree ? 'af' : !!mistats.noSlots;

      if (window.performance && window.performance.getEntriesByType)
      {
         res = window.performance.getEntriesByType('resource');
         for (i = 0; !pObj.l && i < res.length; i++)
            (res[i].name || '').match(/doubleclick\.net[^?]+\/ads\?/) && (pObj.l = (res[i].name || '').length);
      }

      qs = btoa(JSON.stringify(pObj)).split('');
      qs.reverse();

      req = new Image();
      req.width = 1;
      req.height = 1;
      req.src = (mistats.bizunit === 'DUR' ? '//www.newsobserver.com' : '') + '/static/img/placeholder/FREE.gif?mias=' + qs.join('');
   };

   function send(pEvent)
   {
      var ac;
      var ad;
      var gaf;
      var gpt;
      var i;
      var objs;

      if (!pEvent)
         window.removeEventListener('load', send, false);

      if (!lineItems)
      {
         console.log('mistats_as queue empty');
         if (pEvent && pEvent.type !== 'load')
            return;
      }

      ids = lineItems ? Object.assign({}, lineItems) : {};
      lineItems = null;

      console.log('mistats_as send');

      if (count === 0)
      {
         objs = document.getElementsByTagName('script');
         for (i = 0; !gpt && i < objs.length; i++)
            (objs[i].src || '').match(/\/gpt\.js/i) && (gpt = true);
         if (gpt)
         {
            if (!(window.googletag && window.googletag.pubads))
               mistats.noSlots = true;
            else
            {
               objs = document.getElementsByTagName('iframe');
               for (ac = 0, gaf = 0, i = 0; i < objs.length; i++)
                  if ((objs[i].id || '').match(/^google_ads_iframe_/))
                  {
                     gaf++;
                     try
                     {
                        objs[i].contentWindow.document.body.innerHTML && (ac++);
                     } catch (err)
                     {
                        ac++;
                     }
                  }
               (gaf === 0 || ac === 0) && (mistats.noSlots = true);
            }
         }
      } else
         mistats.noSlots = false;

      track({ids: ids});
   };

   function slotRendered(pEvent)
   {
      var obj;

      mistats.noSlots = false;
      count++;

      if (pEvent && !isNaN(parseInt(pEvent.sourceAgnosticLineItemId)))
      {
         lineItems = lineItems || {};
         lineItems[pEvent.sourceAgnosticLineItemId] = (lineItems[pEvent.sourceAgnosticLineItemId] || 0) + 1;
      }

      if (!ready && count >= total)
      {
         ready = true;
         send();
      }

      try
      {
         obj = document.getElementById('google_ads_iframe_' + pEvent.slot.getSlotId().getId());
      } catch (err)
      {
      }

      if (!(obj && mistats.iframeTracker))
         return;

      mistats.iframeTracker.stop(obj);
      adlist[obj.id] =
      {
         iframe: obj,
         event: pEvent
      };
      mistats.iframeTracker.start(obj, function (pIframe)
      {
         var obj;

         pIframe && pIframe.id && (obj = adlist[pIframe.id]);
         if (!obj)
            return;

         obj.event.sourceAgnosticLineItemId && (track(
         {
            v3: obj.event.slot && obj.event.slot.getSlotElementId ? obj.event.slot.getSlotElementId() : '',
            v46: obj.event.sourceAgnosticLineItemId,
            v47: obj.event.size && obj.event.size.join ? obj.event.size.join('x') : 'oop'
         }));

         mistats.iframeTracker.stop(pIframe);
      });
   };

   function createTransactionId()
   {
      var mid;

      if (tid)
         return;

      mistats.visitor && mistats.visitor.getMarketingCloudVisitorID && (mid = mistats.visitor.getMarketingCloudVisitorID());
      tid = ['mi', 'as', (mistats.bizunit || '').toLowerCase(), (mid || Math.round(Math.random() * 1000000000)), ((document.cookie || '').match(/(MPPAccountId|mi_mppaid)=\d+/) || [''])[0].replace(/.+=/, '') || '1', {sub_0: 1, ex: 2, no: 3, na: 4}[(decodeURIComponent(document.cookie || '').match(/mi_sub=s:(sub_0|ex|no|na)/) || ['na']).pop() || 'na'], Date.now()].join('_');
   };

   function getTransactionId()
   {
      !tid && (createTransactionId());
      return tid || '';
   };

   function init()
   {
      adlist = {};
      count = 0;
      total = 0;

      mistats.adobe.addToQueue(createTransactionId);

      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function ()
      {
         window.googletag.pubads().addEventListener('slotRequested', function ()
         {
            total++;
         });
         window.googletag.pubads().addEventListener('slotRenderEnded', slotRendered);
      });
      window.addEventListener('load', send, false);
      window.addEventListener('blur', send, false);
      window.addEventListener('onpagehide' in window ? 'pagehide' : 'beforeunload', send, false);
   };

   this.getTransactionId = getTransactionId;
   !(location.pathname || '').match(/\/video-embed/) && (init());
};

!mistats.subData && mistats.SubData && (mistats.adobe.validHost || (location.hostname || '').indexOf('eedition') === 0) && (mistats.subData = mistats.subData || (new mistats.SubData()));

if ((document.cookie || '').match(/mi_nas=1/))
   mistats.noSlots = true;
if (window.pageInfo && (window.pageInfo.adPlatform || '').match(/zeus/i))
   mistats.adSlots = mistats.adSlots || (new mistats.Z_AdSlots());

if (!mistats.micbLoaded)
{
   mistats.micbLoaded = true;
   mistats.windowEvent('mi_micb_loaded');
}

(function ()
{
   var bxs;

   function bxEvent(pEvent)
   {
      var i;
      var name;
      var objs;

      if (!(pEvent && pEvent.type && mistats.interactions && mistats.setOnce))
         return;

      name = (pEvent.data && pEvent.data.campaignName ? pEvent.data.campaignName : '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ');

      switch (pEvent.type || '')
      {
         case 'bxImpression':
            mistats.interactions.custom(
            {
               name: 'BX Modal Impression',
               type: null,
               count: 1,
               sendNow: false
            });
            name && (mistats.setOnce('eVar77', name));
            bxs = false;
            break;
         case 'bxSubmission':
            objs = document.getElementsByTagName('input');
            if (typeof btoa !== 'undefined')
               for (i = 0; i < objs.length; i++)
                  (objs[i].id || '').match(/bx-element-/) && objs[i].getAttribute('type') === 'email' && (objs[i].value || '').match(/[^@]+@[^\.@]+\.[^\.]+/) && (s.eVar16 = btoa(objs[i].value.replace(/\s+/g, '').toLowerCase()));
            s.eVar16 && mistats.events && (mistats.events.add('event70'));
            mistats.interactions.custom(
            {
               name: 'BX Modal Submission',
               type: null,
               count: 1,
               sendNow: s.eVar16 ? true : false
            });
            bxs = true;
            name && (mistats.setOnce('eVar77', name));
            break;
         case 'bxClose':
            !bxs && (mistats.interactions.custom(
            {
               name: 'BX Modal Close',
               type: null,
               count: 1,
               sendNow: false
            }));
            name && (mistats.setOnce('eVar77', name));
            break;
      }
   };

   function bxLoader(pEvent)
   {
      var id;
      var n;
      var t;

      id =
      {
         'NAO': '3581',
         'SAC': '3054',
         'DFW': '3361',
         'CLT': '3362',
         'KSC': '3241',
         'MIA': '3360',
         'FRS': '3760',
         'WIC': '3641',
         'STA': '3639',
         'SLO': '3751',
         'TNT': '3749',
         'MBO': '3752',
         'MOD': '3753',
         'MAC': '3755',
         'KEN': '3640',
         'IDA': '3642'
      }[mistats.bizunit || ''];

      if (mistats.bouncexLoaded || window.bouncex)
         return console.log('mistats bx_already_loaded');

      if (window._disablebx 
       || !(location.hostname || '').match(/(newsobserver|sacbee|star-telegram|charlotteobserver|kansascity|miamiherald|fresnobee|kansas|thestate|sanluisobispo|thenewstribune|myrtlebeachonline|modbee|macon|kentucky|idahostatesman)\.com/)
       || (location.hostname || '').match(/eedition/i)
       || (location.hostname || '').match(/^t\.news\./i)
       || (window.digitalData && window.digitalData.page && window.digitalData.page.ads && window.digitalData.page.ads.allow !== 'true')
       || !id
       || (location.hostname || '').match(/ceros\./)
       || (!(location.hostname || '').match(/qa\d\./) && ((location.pathname || '').match(/\/signin|\/redirect-pixel|\/freetrial|advertise\/sponsored-content|\/my-account|\/confirmation|\/lost-entitlement|\/digital-access/)))
       || window != top)
         if (!(location.href || '').match(/(bxdev|bxtest)\d+/))
            return console.log('mistats bx_inactive');

      pEvent = pEvent || {};
      if (pEvent.type === 'mistats_target')
         window.removeEventListener('mistats_target', bxLoader, false);

      if (((mistats.targetLib || window.adobe.target) && !mistats.atResponse) || mistats.adobe.target.isWaiting())
      {
         console.log('mistats bx_waiting');
         return window.addEventListener('mistats_target', bxLoader, false);
      }

      if (pEvent.type !== 'optanon' && !(document.cookie || '').match(/OptanonAlertBoxClosed/) && (window.Optanon && window.Optanon.IsAlertBoxClosed && !window.Optanon.IsAlertBoxClosed()))
            return (function ()
            {
               var pc;
               var pp;
               pc = 0;
               pp = setInterval(function ()
               {
                  if (pc++ < 60 && (window.Optanon && window.Optanon.IsAlertBoxClosed && !window.Optanon.IsAlertBoxClosed()))
                     return;
                  pp && (clearInterval(pp));
                  bxLoader({type: 'optanon'});
               }, 1000)
            })();

      mistats.bouncexLoaded = true;
      console.log('mistats bx_init');

      n = document.getElementsByTagName('head');
      n = n ? n[0] : document.body;
      if (!n)
         return;

      t = document.createElement('script');
      t.async = true;
      t.src = 'https://tag.wknd.ai/' + id + '/i.js';
      t.onload = function ()
      {
         mistats.windowEvent && (mistats.windowEvent('mistats_bxloaded'));
      };
      n.appendChild(t);

      window.addEventListener('bxImpression', bxEvent, false);
      window.addEventListener('bxSubmission', bxEvent, false);
      window.addEventListener('bxClose', bxEvent, false);
      window.addEventListener('bxClick', bxEvent, false);
   };

   if ((document.cookie || '').match(/OptanonAlertBoxClosed/) || (window.Optanon && window.Optanon.IsAlertBoxClosed && window.Optanon.IsAlertBoxClosed()) || document.readyState === 'complete')
      bxLoader();
   else
      window.addEventListener('load', bxLoader, false);
})();
