var adalyserModules=trackerCore;adalyserModules.AdalyserTracker=function(e,r){var t=window;mutState={outQueues:[],bufferFlushers:[],expireDateTime:null,hasLoaded:false,registeredOnLoadHandlers:[]};function n(){var e;adalyserModules.helpers.forEach(mutState.bufferFlushers,function(e){e()});if(mutState.expireDateTime){do{e=new Date;if(adalyserModules.helpers.filter(mutState.outQueues,function(e){return e.length>0}).length===0){break}}while(e.getTime()<mutState.expireDateTime)}}t.AdalyserTracker={};adalyserModules.helpers.addEventListener(t,"beforeunload",n,false);return new adalyserModules.InQueueManager(e,mutState,r)};adalyserModules.InQueueManager=function(e,r,t){var n;function a(){if(adalyserModules.isBot(navigator.userAgent)){return}for(var e=0;e<arguments.length;e+=1){var r=arguments[e];var t=Array.prototype.shift.call(r);if(typeof t=="function"){t.apply(r);continue}if(t==="create"){o(r[0]);continue}n[t].apply(n[t],r)}}function o(e){e=e||{};if(!n){n=new adalyserModules.Tracker(t,r,e);n.setSilo("c0.adalyser.com")}else{console.log("Tracker already exists.")}}for(var i=0;i<e.length;i++){a(e[i])}return{push:a}};adalyserModules.OutQueueManager=function(e,r,t,n,a,o){var i,s=false,u,l;n=n&&window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;var c=n?"/tracking/track/v3/x":"/tracking/track/v3/p";a=adalyserModules.detectors.localStorageAccessible()&&t&&n&&a||1;i=["adal_out_queue",e,n?"post":"get"].join("_");if(t){try{l=JSON.parse(localStorage.getItem(i))}catch(v){}}if(!adalyserModules.libs.lodash.isArray(l)){l=[]}r.outQueues.push(l);if(n&&a>1){r.bufferFlushers.push(function(){if(!s){y()}})}if(n&&a>1){r.bufferFlushers.push(function(){if(!s){y()}})}function f(e){var r="?",t={co:true,cx:true},n=true;for(var a in e){if(e.hasOwnProperty(a)&&!t.hasOwnProperty(a)){if(!n){r+="&"}else{n=false}r+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])}}for(var o in t){if(e.hasOwnProperty(o)&&t.hasOwnProperty(o)){r+="&"+o+"="+encodeURIComponent(e[o])}}return r}function d(e){var r=adalyserModules.libs.lodash.mapValues(e,function(e){return e.toString()});return{evt:r,bytes:p(JSON.stringify(r))}}function p(e){var r=0;for(var t=0;t<e.length;t++){var n=e.charCodeAt(t);if(n<=127){r+=1}else if(n<=2047){r+=2}else if(n>=55296&&n<=57343){r+=4;t++}else if(n<65535){r+=3}else{r+=4}}return r}function g(e,r){u=r+c;if(n){var p=d(e);if(p.bytes>=o){adalyserModules.helpers.warn("Event too large: size "+p.bytes+"exceeds maximum of "+o);var g=m(configCollectorUrl);g.send(encloseInPayloadDataEnvelope(h([p.evt])));return}else{l.push(p)}}else{l.push(f(e))}var v=false;if(t){v=adalyserModules.helpers.attemptWriteLocalStorage(i,JSON.stringify(l))}if(!s&&(!v||l.length>=a)){y()}}function y(){while(l.length&&typeof l[0]!=="string"&&typeof l[0]!=="object"){l.shift()}if(l.length<1){s=false;return}if(!adalyserModules.libs.lodash.isString(u)){throw"No silo configured, cannot track"}s=true;var e=l[0];if(n){var r=m(u);var a=setTimeout(function(){r.abort();s=false},5e3);function c(e){var r=0;var t=0;while(r<e.length){t+=e[r].bytes;if(t>=o){break}else{r+=1}}return r}var f=c(l);r.onreadystatechange=function(){if(r.readyState===4&&r.status>=200&&r.status<400){for(var e=0;e<f;e++){l.shift()}if(t){adalyserModules.helpers.attemptWriteLocalStorage(i,JSON.stringify(l))}clearTimeout(a);y()}else if(r.readyState===4&&r.status>=400){clearTimeout(a);s=false}};var d=adalyserModules.libs.lodash.map(l.slice(0,f),function(e){return e.evt});if(d.length>0){r.send(JSON.stringify(h(d)))}}else{var p=new Image(1,1);p.onload=function(){l.shift();if(t){adalyserModules.helpers.attemptWriteLocalStorage(i,JSON.stringify(l))}y()};p.onerror=function(){s=false};p.src=u+e.replace("?","?stm="+(new Date).getTime()+"&")}}function m(e){var r=new XMLHttpRequest;r.open("POST",e,true);r.withCredentials=true;r.setRequestHeader("Content-Type","application/json; charset=UTF-8");return r}function h(e){var r=(new Date).getTime().toString();for(var t=0;t<e.length;t++){e[t]["stm"]=r}return e}return{enqueueRequest:g,executeQueue:y}};adalyserModules.Payload=function(e){var r={};r.isJson=function(e){return typeof e!=="undefined"&&e!==null&&(e.constructor==={}.constructor||e.constructor===[].constructor)};r.isNonEmptyJson=function(e){if(!adalyserModules.Payload.isJson(e)){return false}for(var r in e){if(e.hasOwnProperty(r)){return true}}return false};r.payloadBuilder=function(e){var r={};var t=function(e,t){if(t!==undefined&&t!==null&&t!==""){r[e]=t}};var n=function(e){for(var r in e){if(e.hasOwnProperty(r)){t(r,e[r])}}};var a=function(e,r){if(adalyserModules.Payload.isNonEmptyJson(r)){var n=JSON.stringify(r);t(e,n)}};return{add:t,addDict:n,addJson:a,build:function(){return r}}};return r}();function trackerCore(e){var r={};function t(e,t){r[e]=t}function n(r,t,n,a){r.et=n||(new Date).getTime();if(t){r.addJson("co",t)}if(typeof e==="function"){e(r,a)}return r}function a(e,r,t,a){var o=adalyserModules.Payload.payloadBuilder();o.add("e",e);o.eventData=r;return n(o,t,a)}return{addPayloadPair:t,addPayloadDict:function(e){for(var t in e){if(e.hasOwnProperty(t)){r[t]=e[t]}}},resetPayloadPairs:function(e){r=payload.isJson(e)?e:{}},setScreenResolution:function(e,r){t("res",e+"x"+r)},setViewport:function(e,r){t("vp",e+"x"+r)},setColorDepth:function(e){t("cd",e)},setTimezone:function(e){t("tz",e)},setLang:function(e){t("lang",e)},setIpAddress:function(e){t("ip",e)},trackPageView:function(e,r,t,a,o){var i=adalyserModules.Payload.payloadBuilder();i.add("e","pv");i.add("url",e);i.add("page",r);i.add("refr",t);return n(i,a,o)},trackSession:function(e,r,t,a,o,i){var s=adalyserModules.Payload.payloadBuilder();s.add("e",e);s.eventData=r;s.add("url",t);s.add("refr",a);return n(s,o,i,"ses")},trackEvent:a}}adalyserModules.helpers=function(){var e={};e.determineDeviceType=function(e){if(e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Kindle|KFOT|KFTT/i)){return"mobile"}return"desktop"};e.attemptGetLocalStorage=function(e){try{return localStorage.getItem(e)}catch(r){}};e.attemptWriteLocalStorage=function(e,r){try{localStorage.setItem(e,r);return true}catch(t){return false}};e.findRootDomain=function(){var r="__adal_root_domain_test_";var t=r+(new Date).getTime();var n="_test_value_"+(new Date).getTime();var a=window.location.hostname.split(".");var o=a.length-1;while(o>=0){var i=a.slice(o,a.length).join(".");cookie(t,n,0,"/",i);if(cookie(t)===n){e.deleteCookie(t,i);var s=e.getCookiesWithPrefix(r);for(var u=0;u<s.length;u++){e.deleteCookie(s[u],i)}return i}o-=1}return window.location.hostname};e.strEndsWith=function(e,r){if(typeof String.prototype.endsWith=="function"){return String.prototype.endsWith.call(e,r)}return e.indexOf(r,e.length-r.length)!==-1};e.getCookiesWithPrefix=function(e){var r=document.cookie.split("; ");var t=[];for(var n=0;n<r.length;n++){if(r[n].substring(0,e.length)===e){t.push(r[n])}}return t};e.deleteCookie=function(e,r){cookie(e,"",-1,"/",r)};e.getReferrer=function(r){var t="";var n=e.fromQuerystring("referrer",window.location.href)||e.fromQuerystring("referer",window.location.href);if(n){return n}if(r){return r}try{t=window.top.document.referrer}catch(a){if(window.parent){try{t=window.parent.document.referrer}catch(o){t=""}}}if(t===""){t=document.referrer}return t};e.addEventListener=function(e,r,t,n){if(e.addEventListener){e.addEventListener(r,t,n);return true}if(e.attachEvent){return e.attachEvent("on"+r,t)}e["on"+r]=t};e.fromQuerystring=function(e,r){var t=new RegExp("^[^#]*[?&]"+e+"=([^&#]*)").exec(r);if(!t){return null}return decodeURIComponent(t[1].replace(/\+/g," "))};e.fixupDomain=function(e){var r=e.length;if(e.charAt(--r)==="."){e=e.slice(0,r)}if(e.slice(0,2)==="*."){e=e.slice(1)}return e};e.decorateQuerystring=function(e,r,t){var n=r+"="+t;var a=e.split("#");var o=a[0].split("?");var i=o.shift();var s=o.join("?");if(!s){s=n}else{var u=true;var l=s.split("&");for(var c=0;c<l.length;c++){if(l[c].substr(0,r.length+1)===r+"="){u=false;l[c]=n;s=l.join("&");break}}if(u){s=n+"&"+s}}a[0]=i+"?"+s;return a.join("#")};function r(e){return Object.prototype.toString.call(e)=="[object Array]"}function t(e){return Object.prototype.toString.call(e)=="[object String]"}function n(e){return e===undefined}function a(e,t,n){var a=-1,o=e?e.length:0,i=Array(typeof o=="number"?o:0);t=l(t,n);if(r(e)){while(++a<o){i[a]=t(e[a],a,e)}}else{c(e,function(e,r,n){i[++a]=t(e,r,n)})}return i}function o(e,r,t){var n={};r=l(r,t);c(e,function(e,t,a){n[t]=r(e,t,a)});return n}function i(e,t,n){var a=r(e)?u:s;t=l(t,n);return a(e,t)}e.filter=i;function s(e,r){var t=[];c(e,function(e,n,a){if(r(e,n,a)){t.push(e)}});return t}function u(e,r){var t=[],n=e.length,a=-1,o=-1;while(++a<n){var i=e[a];if(r(i,a,e)){t[++o]=i}}return t}function l(e,r){if(!e){return identity}if(typeof e!="function"){return function(r){return r[e]}}if(r!==undefined){return function(t,n,a){return e.call(r,t,n,a)}}return e}function c(e,r){for(var t in e){if(e.hasOwnProperty(t)){r.apply(e[t],[e[t],t,e])}}}e.forEach=c;var f={bin:{stringToBytes:function(e){for(var r=[],t=0;t<e.length;t++)r.push(e.charCodeAt(t)&255);return r},bytesToString:function(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")}}};adalyserModules.libs||(adalyserModules.libs={});adalyserModules.libs.lodash={isArray:r,isUndefined:n,isString:t,map:a,mapValues:o};var d=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,r){return e<<r|e>>>32-r},rotr:function(e,r){return e<<32-r|e>>>r},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var r=[];e>0;e--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(e){for(var r=[],t=0,n=0;t<e.length;t++,n+=8)r[n>>>5]|=e[t]<<24-n%32;return r},wordsToBytes:function(e){for(var r=[],t=0;t<32*e.length;t+=8)r.push(e[t>>>5]>>>24-t%32&255);return r},bytesToHex:function(e){for(var r=[],t=0;t<e.length;t++)r.push((e[t]>>>4).toString(16)),r.push((15&e[t]).toString(16));return r.join("")},hexToBytes:function(e){for(var r=[],t=0;t<e.length;t+=2)r.push(parseInt(e.substr(t,2),16));return r},bytesToBase64:function(r){for(var t=[],n=0;n<r.length;n+=3)for(var a=r[n]<<16|r[n+1]<<8|r[n+2],o=0;o<4;o++)8*n+6*o<=8*r.length?t.push(e.charAt(a>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(r){r=r.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,a=0;n<r.length;a=++n%4)0!=a&&t.push((e.indexOf(r.charAt(n-1))&Math.pow(2,-2*a+8)-1)<<2*a|e.indexOf(r.charAt(n))>>>6-2*a);return t}};return r}(),f={utf8:{stringToBytes:function(e){return f.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(f.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var r=[],t=0;t<e.length;t++)r.push(255&e.charCodeAt(t));return r},bytesToString:function(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")}}};!function(){var e=f.utf8,r=f.bin;return sha1=function(r){r.constructor==String&&(r=e.stringToBytes(r));var t=d.bytesToWords(r),n=8*r.length,a=[],o=1732584193,i=-271733879,s=-1732584194,u=271733878,l=-1009589776;t[n>>5]|=128<<24-n%32,t[(n+64>>>9<<4)+15]=n;for(var c=0;c<t.length;c+=16){for(var f=o,p=i,g=s,y=u,m=l,h=0;h<80;h++){if(h<16)a[h]=t[c+h];else{var v=a[h-3]^a[h-8]^a[h-14]^a[h-16];a[h]=v<<1|v>>>31}var w=(o<<5|o>>>27)+l+(a[h]>>>0)+(h<20?(i&s|~i&u)+1518500249:h<40?(i^s^u)+1859775393:h<60?(i&s|i&u|s&u)-1894007588:(i^s^u)-899497514);l=u,u=s,s=i<<30|i>>>2,i=o,o=w}o+=f,i+=p,s+=g,u+=y,l+=m}return[o,i,s,u,l]},api=function(e,t){var n=d.wordsToBytes(sha1(e));return t&&t.asBytes?n:t&&t.asString?r.bytesToString(n):d.bytesToHex(n)},api._blocksize=16,api._digestsize=20,api}();return e}();adalyserModules.detectors=function(e){var r=window,t={};t.hasLocalStorage=function(){try{return!!r.localStorage}catch(e){return true}};t.localStorageAccessible=function(){var e="modernizr";if(!t.hasLocalStorage()){return false}try{r.localStorage.setItem(e,e);r.localStorage.removeItem(e);return true}catch(n){return false}};t.detectTimezone=function(){return""};return t}();(function(){function e(e){var r=new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");return r.test(e)}function r(r){var t,n;if(e(r)){try{t=document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML;n="You have reached the cached page for";return t.slice(0,n.length)===n}catch(a){return false}}}adalyserModules.isBot=function(e){return/sitecon|phantom|googlebot|mediapartners-google|adsbot-google|slurp|bingbot|adidxbot|msnbot|mj12|bingpreview|baiduspider|aihitbot|pingdom/i.test(navigator.userAgent.toLowerCase())};function t(e,r){var t=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)"),n=t.exec(e);if(n){return adalyserModules.helpers.fromQuerystring(r,n[1])}return null}adalyserModules.fixupUrl=function(e,n,a){if(e==="translate.googleusercontent.com"){if(a===""){a=n}n=t(n,"u");e=adalyserModules.getHostName(n)}else if(e==="cc.bingj.com"||e==="webcache.googleusercontent.com"||r(e)){n=document.links[0].href;e=adalyserModules.getHostName(n)}return[e,n,a]};adalyserModules.getParameter=t;adalyserModules.fixupTitle=function(e){if(!adalyserModules.libs.lodash.isString(e)){e=e.text||"";var r=document.getElementsByTagName("title");if(r&&!adalyserModules.helpers.lodash.isUndefined(r[0])){e=r[0].text}}return e}})();adalyserModules.trafficSource=function(){var e={},r=document,t=window,n=r.domain;e.searchEngines={"^www\\.daum\\.net$":{name:"Daum",queryStrings:["q"]},"^www\\.eniro\\.se$":{name:"Eniro",queryStrings:["search_word"]},"^www\\.naver\\.com$":{name:"Naver",queryStrings:["query"]},"^www\\.google\\..*$":{name:"Google",queryStrings:["q"]},"^images\\.google\\.com$":{name:"Google",queryStrings:["q"]},"^cse\\.google\\..*$":{name:"Google",queryStrings:["q"]},"com.google.android.googlequicksearchbox":{name:"Google",queryStrings:["q"]},"^www\\.yahoo\\.com$":{name:"Yahoo",queryStrings:["p"]},"^www\\.msn\\.com$":{name:"MSN",queryStrings:["q"]},"^www\\.bing\\.com$":{name:"Bing",queryStrings:["q"]},"^www\\.aol\\.com$":{name:"AOL",queryStrings:["query","encquery","q"]},"^www\\.lycos\\.com$":{name:"Lycos",queryStrings:["query"]},"^www\\.ask\\.com$":{name:"Ask",queryStrings:["q"]},"^www\\.altavista\\.com$":{name:"Altavista",queryStrings:["q"]},"^search\\.netscape\\.com$":{name:"Netscape",queryStrings:["query"]},"^www\\.cnn\\.com$":{name:"CNN",queryStrings:["query"]},"^www\\.about\\.com$":{name:"About",queryStrings:["terms"]},"^www\\.mamma\\.com$":{name:"Mamma",queryStrings:["query"]},"^www\\.alltheweb\\.com$":{name:"Alltheweb",queryStrings:["q"]},"^www\\.voila\\.fr$":{name:"Voila",queryStrings:["rdata"]},"^search\\.virgilio\\.it$":{name:"Virgilio",queryStrings:["qs"]},"^www\\.bing\\.com$":{name:"Live",queryStrings:["q"]},"^www\\.baidu\\.com$":{name:"Baidu",queryStrings:["wd"]},"^www\\.alice\\.com$":{name:"Alice",queryStrings:["qs"]},"^www\\.yandex\\.com$":{name:"Yandex",queryStrings:["text"]},"^www\\.najdi\\.org\\.mk$":{name:"Najdi",queryStrings:["q"]},"^www\\.mamma\\.com$":{name:"Mama",queryStrings:["query"]},"^www\\.seznam\\.cz$":{name:"Seznam",queryStrings:["q"]},"^www\\.search\\.com$":{name:"Search",queryStrings:["q"]},"^www\\.wp\\.pl$":{name:"Wirtulana Polska",queryStrings:["szukaj"]},"^online\\.onetcenter\\.org$":{name:"O*NET",queryStrings:["qt"]},"^www\\.szukacz\\.pl$":{name:"Szukacz",queryStrings:["q"]},"^www\\.yam\\.com$":{name:"Yam",queryStrings:["k"]},"^www\\.pchome\\.com$":{name:"PCHome",queryStrings:["q"]},"^www\\.kvasir\\.no$":{name:"Kvasir",queryStrings:["q"]},"^sesam\\.no$":{name:"Sesam",queryStrings:["q"]},"^www\\.ozu\\.es$":{name:"Ozu",queryStrings:["q"]},"^www\\.terra\\.com$":{name:"Terra",queryStrings:["query"]},"^www\\.mynet\\.com$":{name:"Mynet",queryStrings:["q"]},"^www\\.ekolay\\.net$":{name:"Ekolay",queryStrings:["q"]},"^www\\.rambler\\.ru$":{name:"Rambler",queryStrings:["words"]}};e.socialNetworks={"^(.*\\.)?facebook\\.com$":"Facebook","^(.*\\.)?fb\\.me$":"Facebook","^(.*\\.)?twitter\\.com$":"Twitter","^(.*\\.)?linkedin\\.com$":"LinkedIn","^(.*\\.)?lnkd\\.in$":"LinkedIn","^(.*\\.)?pinterest\\.com$":"Pinterest","^(.*\\.)?blogger\\.com$":"Blogger","^(.*\\.)?blogspot\\.com$":"Blogger","^(.*\\.)?weebly\\.com$":"Weebly","^(.*\\.)?livejournal\\.com$":"LiveJournal","^(.*\\.)?plus\\.google\\.com$":"Google+","^(.*\\.)?youtube\\.com$":"YouTube"};e.referrerBlacklist=["^(.*\\.)?securesuite\\.co\\.uk.*$","^(.*\\.)?clicksafe\\.lloydstsb\\.com.*$","^(.*\\.)?arcot.com.*$","^(.*\\.)?barclaycard\\.co\\.uk.*$","^(.*\\.)?paypal\\.com.*$","^(.*\\.)?stripe.com.*$","^(.*\\.)?barclaycard\\.co\\.uk.*$","^(.*\\.)?mycardsecure\\.com.*$","^(.*\\.)?live\\.barclaycardsmartpay\\.com.*$","^(.*\\.)?verifiedbyvisa.barclays\\.co\\.uk.*$","^(.*\\.)?cap\\.attempts\\.securecode\\.com.*$","^(.*\\.)?customer.cc.at.paysafecard.com.*$","^(.*\\.)?acs4\\.3dsecure\\.no.*$","^(.*\\.)?securesuite\\.net.*$","^(.*\\.)?vcas2\\.visa\\.com.*$","^(.*\\.)?acs\\.sia\\.eu.*$","^(.*\\.)?hpp\\.realexpayments\\.com.*$","^(.*\\.)?pay\\.realexpayments\\.com.*$","^(.*\\.)?secure\\.worldpay\\.com.*$"];function a(r){if(typeof r==="undefined"){return false}for(var t in e.searchEngines){if(r.search(t)>-1){return e.searchEngines[t]}}return false}function o(r){if(typeof r==="undefined"){return false}for(var t in e.socialNetworks){if(r.search(t)>-1){return e.socialNetworks[t]}}return false}function i(e,r){if(e==n){return false}if(typeof e==="undefined"){return false}for(var t in r){if(e.search(r[t])>-1){return false}}return true}function s(e){var r=e.split("&"),t={};for(var n=0;n<r.length;n++){var a=r[n].split("=");t[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return t}e.getCampaignData=function(e,u,l){var c=n,f=s(t.location.search.substring(1)),d=r.referrer.split("?"),p=d[0],g=p.split("/")[0],y=p.split("/")[2],m;if(d.length==2){m=s(d[1])}var h={};var v,w;var S={setFromPrevious:false};if(f["gclid"]||f["gclsrc"]){h.so="google";h.me="cpc";h.gclid=f["gclid"]}else if(f["utm_source"]){if(l){var b=false;var _=f["utm_source"];for(var k=0;k<l.length;k++){if(_==l[k]){if(_=="facebook"&&"video"!=f["utm_medium"]){break}b=true;break}}S.isClickThrough=b}var T={so:"utm_source",me:"utm_medium",ca:"utm_campaign",co:"utm_content",ke:"utm_term"};adalyserModules.helpers.forEach(T,function(e,r,t){if(f[e]){h[r]=f[e]}else{h[r]="(not set)"}})}else if((v=a(y))!==false){h.so=v.name;h.me="organic";h.ca="(not set)";h.co="(not set)";h.ke="(not set)";if("https:"!=g&&typeof m!="undefined"){for(var M=0;M<v.queryStrings.length;M++){var q=m[v.queryStrings[M]];if(typeof q!="undefined"){h.ke=q}}}}else if((w=o(y))!==false){h.so=w;h.me="social";h.ca="(not set)";h.co="(not set)";h.ke="(not set)"}else if(i(y,u)){h.so=y;h.me="referral";h.ca="referral";h.co=p;h.ke="(not set)"}if(typeof h.so=="undefined"){if(e){h=e;S["setFromPrevious"]=true}else{h.so="direct";h.me="none";h.ca="direct";h.co="(not set)";h.ke="(not set)"}}S["campaignParams"]=h;return S};e.getChannelGrouping=function(e,r,n){var a=e.so,o=e.me;if(!a||!o){return"Unknown"}if(o=="organic"){return"Organic"}if(o=="referral"){return"Referral"}if(o=="email"){return"Email"}if(a=="direct"&&/^(\(not set\)|none)$/.test(o)){return"Direct"}if(/^(cpc|ppc|paidsearch)$/.test(o)){if(r){var i=s(t.location.search.substring(1));if(i[r]){for(var u in n){if(i[r].search(n[u])>-1){return"Paid Search (Brand)"}}return"Paid Search (Generic)"}}return"Paid Search"}if(/^(cpv|cpa|cpp|content-text)$/.test(o)){return"Other Advertising"}if(/^(social|social-network|social-media|sm|social network|social media)$/.test(o)){return"Social"}if(/^(display|cpm|banner)$/.test(o)){return"Display"}return"Unknown"};return e}();adalyserModules.Tracker=function(e,r,t){var n=t.hasOwnProperty("clientId")?t.clientId:0,a={68856412500:{campaignCookieTimeout:1209600}};if(n&&a.hasOwnProperty(n)){var o=a[n];for(var i in o){if(o.hasOwnProperty(i)){t[i]=o[i]}}}var s=adalyserModules(function(e,r){Ie(e);if(r=="ses"){if(Q){var t=qe();if(!t){Pe(e.et)}se(e,h)}Q=false}else{se(e,h)}}),u=document,l=window,c=navigator,f=adalyserModules.fixupUrl(u.domain,l.location.href,adalyserModules.helpers.getReferrer()),d=adalyserModules.helpers.fixupDomain(f[0]),p=f[1],g=f[2],y,m=u.title,h=t.hasOwnProperty("pageUnloadTimer")?t.pageUnloadTimer:500,v,w="_adal_",S=t.hasOwnProperty("cookieDomain")?t.cookieDomain:null,b="/",_,k=63072e3,T=t.hasOwnProperty("campaignCookieTimeout")?t.campaignCookieTimeout:15552e3,M=t.hasOwnProperty("viewThroughCookieTimeout")?t.viewThroughCookieTimeout:2592e3,q=t.hasOwnProperty("conversionCookieTimeout")?t.conversionCookieTimeout:2592e3,P=t.hasOwnProperty("useLandingPageCookie")?t.useLandingPageCookie===true:false,O=t.hasOwnProperty("landingPageCookieTimeout")?t.landingPageCookieTimeout:2592e3,C=t.hasOwnProperty("sessionCookieTimeout")?t.sessionCookieTimeout:1800,x=adalyserModules.trafficSource.referrerBlacklist.concat(t.hasOwnProperty("trafficSourceInternalReferrers")?t.trafficSourceInternalReferrers:[]),$=u.characterSet||u.charset,N=t.hasOwnProperty("forceSecureTracker")?t.forceSecureTracker===true:false,D=t.hasOwnProperty("useLocalStorage")?t.useLocalStorage:true,E=t.hasOwnProperty("vodUtmSources")?t.vodUtmSources:[],A=t.hasOwnProperty("useCookies")?t.useCookies:true,I=c.userLanguage||c.language,R,L=(new Date).getTime(),j=sha1,B,U,J,z=1,Q=false,F=[],H=t.hasOwnProperty("useLinkerParams")?t.useLinkerParams:false,W=t.hasOwnProperty("linkerExpirationThreshold")?t.linkerExpirationThreshold:12e4,G=t.hasOwnProperty("brandGenericProp")?t.brandGenericProp:false,V=t.hasOwnProperty("brandPatterns")?t.brandPatterns:[],Y=t.hasOwnProperty("anonymiseIP")?t.anonymiseIP:false,K=new adalyserModules.OutQueueManager(e,r,D,t.post,t.bufferSize,t.maxPostBytes||4e4),X=[];if(!t.hasOwnProperty("discoverRootDomain")||t.discoverRootDomain){S=adalyserModules.helpers.findRootDomain()}s.setTimezone(adalyserModules.detectors.detectTimezone());s.addPayloadPair("lang",I);s.addPayloadPair("cs",$);function Z(e){var r=qe();var t=(new Date).getTime();if(this.href){this.href=adalyserModules.helpers.decorateQuerystring(this.href,"_adal_id",encodeURIComponent(cookie("__adal_id"))+"."+t);this.href=adalyserModules.helpers.decorateQuerystring(this.href,"_adal_cw",r+"."+t);var n=cookie("__adal_ca");if(n){this.href=adalyserModules.helpers.decorateQuerystring(this.href,"_adal_ca",encodeURIComponent(n)+"."+t)}this.href=adalyserModules.helpers.decorateQuerystring(this.href,"_adal_sd",encodeURIComponent(u.domain)+"."+t)}}function ee(e){if(this.action){var r=qe();var t=(new Date).getTime();if("post"==this.method.toLowerCase()){this.action=adalyserModules.helpers.decorateQuerystring(this.action,"_adal_cw",r+"."+t);var n=cookie("__adal_ca");if(n){this.action=adalyserModules.helpers.decorateQuerystring(this.action,"_adal_ca",encodeURIComponent(n)+"."+t)}}else if("get"==this.method.toLowerCase()){var a,o;for(var i=0;i<this.childNodes.length;i++){if("_adal_cw"==this.childNodes[i].name){a=this.childNodes[i]}else if("_adal_ca"==this.childNodes[i].name){o=this.childNodes[i]}}if(!a){a=u.createElement("input");a.setAttribute("type","hidden");a.setAttribute("name","_adal_cw");this.appendChild(a)}a.setAttribute("value",r+"."+t);if(n){if(!o){o=u.createElement("input");o.setAttribute("type","hidden");o.setAttribute("name","_adal_ca");this.appendChild(o)}o.setAttribute("value",encodeURIComponent(n)+"."+t)}}}}function re(e){return function(){Z.call(e)}}function te(e){return function(){ee.call(e)}}function ne(e,r){if(typeof e=="function"){return e}else if(adalyserModules.libs.lodash.isArray(e)){var t=new RegExp(/^https?:\/\/([^\/:]+)/);return function(n){var a=n[r],o=a.match(t),i;if(o){i=o[1]}if(!i||i==u.location.hostname){return false}for(var s=0;s<e.length;s++){if(e[s]instanceof RegExp){if(e[s].test(i))return true}else if(i.indexOf(e[s])>=0){return true}}return false}}}function ae(e){var r=ne(e,"href");for(var t=0;t<document.links.length;t++){var n=document.links[t];if(!n.adalDecorationEnabled&&r(n)){adalyserModules.helpers.addEventListener(n,"click",re(n));adalyserModules.helpers.addEventListener(n,"mousedown",re(n));n.adalDecorationEnabled=true}}}function oe(e){var r=ne(e,"action");for(var t=0;t<document.forms.length;t++){var n=document.forms[t];if(!n.adalDecorationEnabled&&r(n)){adalyserModules.helpers.addEventListener(n,"submit",te(n));n.adalDecorationEnabled=true}}}function ie(e){var r=adalyserModules.getParameter(e,"_adal_id");if(r){var t=r.split(".");var n=t.pop();if((new Date).getTime()-parseInt(n)<W){we.apply(null,t)}}var a=adalyserModules.getParameter(e,"_adal_cw");if(a){var o=a.split(".");var i=o.pop();if((new Date).getTime()-parseInt(i)<W){ve();Pe(o.join("."))}}var s=adalyserModules.getParameter(e,"_adal_ca");if(s){var u=s.split(".");var l=u.pop();if((new Date).getTime()-parseInt(l)<W){ve();cookie("__adal_ca",u.join("."),T,b,S)}}var c=adalyserModules.getParameter(e,"_adal_sd");if(c){var f=c.split(".");var d=f.pop();if((new Date).getTime()-parseInt(d)<W){xe(f.join("."))}}}function se(e,t){var n=new Date;K.enqueueRequest(e.build(),y);r.expireDateTime=n.getTime()+t}function ue(e){var r;r=new RegExp("#.*");return e.replace(r,"")}function le(){ce();B=j((S||d)+(b||"/")).slice(0,4)}function ce(){f=adalyserModules.fixupUrl(u.domain,l.location.href,adalyserModules.helpers.getReferrer());if(f[1]!==p){g=adalyserModules.helpers.getReferrer(p)}d=adalyserModules.helpers.fixupDomain(f[0]);p=f[1]}function fe(e){var r,t,n=["","webkit","ms","moz"],a;if(!_){for(t=0;t<n.length;t++){a=n[t];if(u[he(a,"hidden")]){if(u[he(a,"visibilityState")]==="prerender"){r=true}break}}}if(r){adalyserModules.helpers.addEventListener(u,a+"visibilitychange",function o(){u.removeEventListener(a+"visibilitychange",o,false);e()});return}e()}function de(e){return X.concat(e||[])}function pe(e,r){return(e||[]).concat(r?r():[])}function ge(e,r,t){ce();m=u.title;lastConfigTitle=e;var n=adalyserModules.fixupTitle(lastConfigTitle||m);s.trackPageView(ue(p),n,ue(g),de(pe(r,t)))}function ye(e,r,t,n){ce();s.trackSession(e,r,ue(p),ue(g),de(pe(t,n)))}function me(){if(!geolocationContextAdded&&c.geolocation&&c.geolocation.getCurrentPosition){geolocationContextAdded=true;navigator.geolocation.getCurrentPosition(function(e){var r=e.coords;var t={latitude:r.latitude,longitude:r.longitude,latitudeLongitudeAccuracy:r.accuracy,altitude:r.altitude,altitudeAccuracy:r.altitudeAccuracy,bearing:r.heading,speed:r.speed,timestamp:e.timestamp};X.push(t)})}}function he(e,r){if(e!==""){return e+r.charAt(0).toUpperCase()+r.slice(1)}return r}function ve(){if(F.length>0){cookie("__adal_ses",F.join("_"),C,b,S)}else{cookie("__adal_ses","*",C,b,S)}}function we(e,r,t,n,a,o){cookie("__adal_id",e+"."+r+"."+t+"."+n+"."+a+"."+o,k,b,S)}function Se(){var e=cookie("__adal_ca");if(!e){return null}return _e(e)}function be(){var e=cookie("__adal_vt");if(!e){return null}return _e(e)}function _e(e){var r={},t=e.split("&");for(var n=0;n<t.length;n++){var a=t[n].split("=");if(a.length>1){r[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}}if(!adalyserModules.Payload.isNonEmptyJson(r)){return null}return r}function ke(e){cookie("__adal_ca",Me(e),T,b,S)}function Te(e){cookie("__adal_vt",Me(e),M,b,S)}function Me(e){var r="",t=true;for(var n in e){if(e.hasOwnProperty(n)){if(!t){r+="&"}else{t=false}r+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])}}return r}function qe(){return cookie("__adal_cw")}function Pe(e){cookie("__adal_cw",e,q,b,S)}function Oe(){return cookie("__adal_lp")}function Ce(e){cookie("__adal_lp",e,O,b,S)}function xe(e){cookie("__adal_sd",e,q,b,S)}function $e(){return cookie("__adal_sd")}function Ne(){return uuid.v4()}function De(){var e=A&&Ee();var r=Ae();if(r[1]){U=r[1]}else{U=Ne();r[1]=U}J=r[6];if(e){F=e[0]}else{r[3]++;Q=true;J=uuid.v4();r[6]=J;r[5]=r[4]}if(A){ve();if(P){var t=Oe();if(!t){Ce(p)}}r[4]=Math.round((new Date).getTime()/1e3);r.shift();we.apply(null,r)}}function Ee(){var e=cookie("__adal_ses"),r=[];if(!e){return false}if(e=="*"){r[0]=[]}else{r=e.split(".");if(r[0]){r[0]=r[0].split("_")}}return r}function Ae(){if(!A){return[]}var e=new Date,r=Math.round(e.getTime()/1e3),t=cookie("__adal_id"),n;if(t){n=t.split(".");n.unshift("0")}else{n=["1",U,r,0,r,""]}if(!n[6]){n[6]=uuid.v4()}return n}function Ie(e){var r=Math.round((new Date).getTime()/1e3),t="__adal_id",a=Ee(),o=Ae(),i=o[0],s=o[1],u=o[2],l=o[3],f=o[4],y=o[5],m=o[6];var h=Se();var v={};var w=be();var S=adalyserModules.trafficSource.getCampaignData(h,x,E);var b=S.campaignParams;var _=false;if(b.so!=="direct"){if(h){adalyserModules.helpers.forEach(b,function(e,r,t){if(e!==h[r]){_=true}});adalyserModules.helpers.forEach(h,function(e,r,t){if(e!==b[r]){_=true}})}else{_=true}if(!S.setFromPrevious){ke(b)}}else{if(!h){ke(b)}}var k=e.eventData;if(adalyserModules.libs.lodash.isUndefined(k)){k={}}k["et"]=e.et;if(l>1){k["nr"]="Returning"}else{k["nr"]="New"}k["cg"]=adalyserModules.trafficSource.getChannelGrouping(b,G,V);k["dt"]=adalyserModules.helpers.determineDeviceType(c.userAgent);adalyserModules.helpers.forEach(b,function(e,r,t){k[r]=e});if(S.isClickThrough){v=b;v["ctt"]=e.et;Te(v)}else{v=w}if(v){adalyserModules.helpers.forEach(v,function(e,r,t){k["vt_"+r]=e})}if(i==="0"){J=m;if(!a&&A||_){l++;y=f;J=uuid.v4();Q=true}z=l}else{if((new Date).getTime()-L>C*1e3){J=uuid.v4();z++;Q=true}}if(Y){k["aip"]=1}var T=$e();if(T!=""){k["sd"]=T}k["vid"]=z;k["sid"]=J;k["duid"]=s;ce();var M=qe();if(M){k["cw"]=parseInt(M)}else{k["cw"]=e.et}if(P){var q=Oe();if(q){k["lp"]=q}}e.add("cid",n);e.addJson("p",k);e.add("userAgent",c.userAgent);e.add("domain",d);e.add("url",ue(p));e.add("refr",ue(g));if(A){we(s,u,z,r,y,J);ve()}L=(new Date).getTime()}function Re(e){if(N){return"https"+"://"+e}return("https:"===u.location.protocol?"https":"http")+"://"+e}le();if(t.crossDomainLinker){ae(t.crossDomainLinker);if(t.decorateForms){oe(t.crossDomainLinker)}}if(H){ie(f[1])}De();return{setCountPreRendered:function(e){_=e},setSilo:function(e){y=Re(e)},trackPageView:function(e,r,t){fe(function(){ge(e,r,t)})},trackEvent:function(e,r,t){if(t){if(F.indexOf(e)>-1){return}F.push(e)}s.trackEvent(e,r)},trackSession:function(e,r,t,n){ye(e,r,t,n)}}};(function(){var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var r=meta[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,r){var t,n,a,o,i,s=gap,u=r[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(r,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,t=0;t<o;t+=1)i[t]=str(t,u)||"null";return a=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+s+"]":"["+i.join(",")+"]",gap=s,a}if(rep&&"object"==typeof rep)for(o=rep.length,t=0;t<o;t+=1)"string"==typeof rep[t]&&(n=rep[t],a=str(n,u),a&&i.push(quote(n)+(gap?": ":":")+a));else for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(a=str(n,u),a&&i.push(quote(n)+(gap?": ":":")+a));return a=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+s+"}":"{"+i.join(",")+"}",gap=s,a}}var global=Function("return this")(),JSON=global.JSON;JSON||(JSON={}),"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()})
;var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,r,t){var n;if(gap="",indent="","number"==typeof t)for(n=0;n<t;n+=1)indent+=" ";else"string"==typeof t&&(indent=t);if(rep=r,r&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,r){var t,n,a=e[r];if(a&&"object"==typeof a)for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n=walk(a,t),void 0!==n?a[t]=n:delete a[t]);return reviver.call(e,r,a)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}),global.JSON=JSON}()})();var rng,crypto=window.crypto||window.msCrypto;if(crypto&&crypto.getRandomValues){var _rnds8=new Uint8Array(16);rng=function(){return crypto.getRandomValues(_rnds8),_rnds8}}if(!rng){var _rnds=new Array(16);rng=function(){for(var e,r=0;r<16;r++)0===(3&r)&&(e=4294967296*Math.random()),_rnds[r]=e>>>((3&r)<<3)&255;return _rnds}}function parse(e,r,t){var n=r&&t||0,a=0;for(r=r||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){a<16&&(r[n+a++]=_hexToByte[e])});a<16;)r[n+a++]=0;return r}function unparse(e,r){var t=r||0,n=_byteToHex;return n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]}function v1(e,r,t){var n=r&&t||0,a=r||[];e=e||{};var o=void 0!==e.clockseq?e.clockseq:_clockseq,i=void 0!==e.msecs?e.msecs:(new Date).getTime(),s=void 0!==e.nsecs?e.nsecs:_lastNSecs+1,u=i-_lastMSecs+(s-_lastNSecs)/1e4;if(u<0&&void 0===e.clockseq&&(o=o+1&16383),(u<0||i>_lastMSecs)&&void 0===e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=i,_lastNSecs=s,_clockseq=o,i+=122192928e5;var l=(1e4*(268435455&i)+s)%4294967296;a[n++]=l>>>24&255,a[n++]=l>>>16&255,a[n++]=l>>>8&255,a[n++]=255&l;var c=i/4294967296*1e4&268435455;a[n++]=c>>>8&255,a[n++]=255&c,a[n++]=c>>>24&15|16,a[n++]=c>>>16&255,a[n++]=o>>>8|128,a[n++]=255&o;for(var f=e.node||_nodeId,d=0;d<6;d++)a[n+d]=f[d];return r?r:unparse(a)}function v4(e,r,t){var n=r&&t||0;"string"==typeof e&&(r="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||rng)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r)for(var o=0;o<16;o++)r[n+o]=a[o];return r||unparse(a)}for(var _byteToHex=[],_hexToByte={},i=0;i<256;i++)_byteToHex[i]=(i+256).toString(16).substr(1),_hexToByte[_byteToHex[i]]=i;var _seedBytes=rng(),_nodeId=[1|_seedBytes[0],_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]],_clockseq=16383&(_seedBytes[6]<<8|_seedBytes[7]),_lastMSecs=0,_lastNSecs=0,uuid=v4;uuid.v1=v1,uuid.v4=v4,uuid.parse=parse,uuid.unparse=unparse;var cookie=function(e,r,t,n,a,o){return 1<arguments.length?document.cookie=e+"="+escape(r)+(t?"; expires="+new Date(+new Date+1e3*t).toUTCString():"")+(n?"; path="+n:"")+(a?"; domain="+a:"")+(o?"; secure":""):unescape((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])};var queueName=window.GlobalAdalyserNamespace.shift();var queue=window[queueName];queue.q=new adalyserModules.AdalyserTracker(queue.q,queueName);
