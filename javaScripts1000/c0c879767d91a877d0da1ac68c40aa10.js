!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e=a("./config").settings;if("undefined"!=typeof window){var f=function(a){function b(a){var b=new Treasure({host:e.td.host,writeKey:e.td.key,database:e.td.database});c(a,b)}function c(b,c){if("object"===("undefined"==typeof b?"undefined":d(b))){var f=b.aid;if("undefined"==typeof f&&(f=null),c){var g={};g[e.td.microadAudienceIdColumn]=f,Object.keys(a).forEach(function(b){g[b]=a[b]}),c.set(e.td.table,g),c.set("$global","td_global_id","td_global_id")}else console.log("table = "+e.td.table),console.log(e.td.microadAudienceIdColumn+" = "+f),Object.keys(a).forEach(function(b){console.log(b+" = "+a[b])})}c&&c.trackPageview(e.td.table)}window.microadBlade[e.callbackKey].sync=window.microadBlade[e.callbackKey].sync||b,e.debug&&(window.microadBlade[e.callbackKey].sync=c);var f=i();document.body.appendChild(f),f.text='!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","trackClicks","ready"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/1.7.2/td.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("Treasure",this);';var j=i();document.body.appendChild(j),j.src=g+"//"+h(e)};window.microadBlade=window.microadBlade||{},window.microadBlade[e.callbackKey]=window.microadBlade[e.callbackKey]||{},window.microadBlade[e.callbackKey].start=window.microadBlade[e.callbackKey].start||f;var g=location.protocol,h=function(a){var b=a.api.encryption.url,c=a.api.encryption.code,d=a.api.encryption.version,e=a.api.encryption.callback;return b+"?code="+c+"&v="+d+"&cb="+e},i=function(){var a=document.createElement("script");return a.type="text/javascript",a.charset="UTF-8",a}}},{"./config":3}],2:[function(a,b,c){"use strict";var d=b.exports={};d.apiVersion="v1",d.tdHost="in.treasuredata.com"},{}],3:[function(a,b,c){"use strict";var d=a("./config.global"),e="TD",f="wAfDYNqni1s",g={host:d.tdHost,key:"7474/c57f51cb7b724647cb49812cc46034d31cbf1f4b",database:"treasuredata_dmp_db",table:"td_user_mapping_log",microadAudienceIdColumn:"audience_id"};d.settings={callbackKey:e,api:{encryption:{code:f,url:"aid.send.microad.jp/aid",version:d.apiVersion,callback:"microadBlade."+e+".sync"}},td:g,debug:!1},b.exports=d},{"./config.global":2}]},{},[1,2,3]);