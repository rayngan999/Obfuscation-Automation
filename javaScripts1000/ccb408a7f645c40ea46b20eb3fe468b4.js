
/* <![CDATA[ */
;!function(a,b){function c(a,b){function c(a,c,d){var e=this;e.invalidate=function(){a=f},e.isInvalidated=function(){return a===f},e.getTimestamp=function(){return c},e.getExpires=function(){return new b.time(d)},e.setExpires=function(a){d=a.roundToMidnight().getTime()},e.toString=function(){return"BBID-"+a+"-"+b.formatNumber(c,17)+"-"+b.formatNumber(d,8)}}var d=/BBID-([\d]{2})-([\d]{17})-?(\d{8})?/,e="01",f="10",g=b.date(2018,4,25).addDays(90).roundToMidnight().getTime();return c.parse=function(a){var b=d.exec(a);return b?new c(b[1]===f?f:e,parseInt(b[2],10),b[3]?1e5*parseInt(b[3],10):g):null},c}var d=function(a){var b=(a.location&&"https:"==a.location.protocol?"https:":"http:")+"//";return{bn002:"ibbid",CPEX_KEY:"cpex2ibb",bn003:"BBID-00-00000000000000000",bn004:b+"bbcdn-bbnaut.ibillboard.com/library/bbnaut-lib-latest.min.js",bn005:[],bn006:"bbnaut_debug",OBSOLETE_TIMESTAMP:47e13}},e=function(a,b){return{bn007:function(a,b){if("string"==typeof b)for(var c=a+"=",d=b.split(/[;&]/),e=0;e<d.length;e++){for(var f=d[e];" "==f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(c))return f.substring(c.length,f.length)}},bn008:function(a){b.write('\x3Cscript type="text/javascript" src="'+a+'">\x3C/script>')},bn017:function(a){var c=b.createElement("script");c.type="text/javascript",c.async=!0,c.src=a;var d=b.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)},bn009:function(b){a.console&&a.console.info(b)},formatNumber:function(a,b){for(var c=a.toString();c.length<b;)c="0"+c;return c.length>b&&(c=c.substr(0,b)),c},time:function(a){var b=this,c=new Date(a);b.addDays=function(a){return c.setDate(c.getDate()+a),b},b.roundToMidnight=function(){return c.setHours(0,0,0,0),b},b.isInFuture=function(){return c.getTime()>(new Date).getTime()},b.getTime=function(){return c.getTime()}},date:function(a,b,c){return new this.time(new Date(a,b,c).getTime())}}},f=function(a,b,c,d,e){function f(a,b){return e.parse(d.bn007(a,b))}return{bn011:function(){return f(c.bn002,b.cookie)},bn016:function(a){return d.bn007(a,b.cookie)},bn012:function(){try{if(a.localStorage)return e.parse(a.localStorage.getItem(c.bn002))}catch(b){}},bn013:function(){try{if(a.sessionStorage)return e.parse(a.sessionStorage.getItem(c.bn002))}catch(b){}},bn014:function(){try{return f(c.bn002,a.name)}catch(b){}}}},g=function(a,b,c,d){function e(a,b){function c(){return!a.isInvalidated()&&!b.isInvalidated()}function d(){return a.isInvalidated()&&b.isInvalidated()}function e(){return a.isInvalidated()?a:b}function f(){return a.getTimestamp()<b.getTimestamp()?a:b}function g(){return a.getTimestamp()>b.getTimestamp()?a:b}return a?c()?f():d()?g():e():b}function f(a){return a.filter(function(a){return a&&a.getExpires().isInFuture()}).reduce(e,null)}return{bn015:function(){if(!a.bbnautLib||!a.bbnautLib.getId){for(var e=!0,g=0;g<b.bn005.length;++g)if(a.location.host.indexOf(b.bn005[g])>=0){e=!1;break}e&&c.bn017(b.bn004);var h=f([d.bn011(),d.bn012(),d.bn013(),d.bn014()]),i=d.bn016(b.CPEX_KEY);a.bbnautLib=a.bbnautLib||{},a.bbnautLib.prtos=a.bbnautLib.prtos||{},a.bbnautLib.getId=function(){return h?h.toString():null},a.bbnautLib.getCpexProfile=function(){return i},a.bbnautLib.storeSRAProfile=function(b){"function"==typeof a.bbnautLib.storeProfile?a.bbnautLib.storeProfile(b):a.bbnautLib.prtos.srapr=b}}}}},h=d(b),i=e(b,a),j=c(h,i),k=f(b,a,h,i,j),l=g(b,h,i,k);l.bn015()}(document,window);
var bbs=screen,bbn=navigator,bbh;bbh='&ubl='+bbn.language+'&ucd='+1*bbs.colorDepth+'&uce='+1*bbn.cookieEnabled+'&uje='+1*bbn.javaEnabled()+'&uah='+1*bbs.availHeight+'&uaw='+1*bbs.availWidth+'&uhe='+1*bbs.height+'&uwi='+1*bbs.width+'&uto='+(new Date()).getTimezoneOffset()+'&uti='+(new Date()).getTime();

!function(t){var n="ibb_euconsent",e=90,r=t.document,a=3,o=500,c=0;function i(t){var a;!function(t){var a=new Date;a.setTime(a.getTime()+24*e*60*60*1e3);var o="; expires="+a.toUTCString();r.cookie=n+"="+(t||"")+o+"; path=/"}(t),a=t,localStorage&&localStorage.setItem(n,a)}function u(){var n=function t(n){try{if(n.__tcfapi)return n.__tcfapi;if(n.parent&&n!==n.parent)return t(n.parent)}catch(t){return!1}return!1}(t);if(n)n("getTCData",2,function(t,n){n&&i((t||{}).tcString)});else{var e=function t(n){try{if(n.__cmp)return n.__cmp;if(n.parent&&n!==n.parent)return t(n.parent)}catch(t){return!1}return!1}(t);e?e("getConsentData",null,function(t,n){n&&i((t||{}).consentData)}):c<a&&(setTimeout(function(){u()},o),c++)}}u(),t.ibbCmpConsent=function(){return localStorage&&localStorage.getItem(n)||(t=new RegExp("(^|; )"+n+"=([^;]*)(; |$)"),((r.cookie||"").match(t)||[])[2]||null)||null;var t}}(window);
var bbpr=location.protocol;
if (bbpr.substring(0,2) != 'ht') { bbpr='http:';}
if( window.bbnautLib) {
if( typeof bbnautLib.getId == 'function') {
var ibbId = bbnautLib.getId();
if (ibbId) {
bbh += '&ibbid=' + ibbId;
}
}
if( typeof bbnautLib.getCpexProfile == 'function') {
var cpexProfile = bbnautLib.getCpexProfile();
if (cpexProfile) {
bbh += '&' + decodeURIComponent(cpexProfile);
}
}
}


var ibb_euconsent = null;
if (typeof ibbCmpConsent === 'function') {ibb_euconsent = ibbCmpConsent();}
ibb_euconsent = (ibb_euconsent ? '&euconsent=' + ibb_euconsent : '');

if(typeof(bbkeywords)=='string') { bbh+='&keywords='+encodeURIComponent(bbkeywords); }
if(typeof(bbprbanner)=='string') { bbh+=bbprbanner; }
if(typeof(bburlparam)=='string') { bbh+='&'+bburlparam; }
bbh+='&href='+escape(location.href.substr(0,999));
/* <![CDATA[ */
document.write("<scr"+"ipt type='text/javascript' src='"+bbpr+"//go.eu.bbelements.com/please/showit/21783/2/1/16/?typkodu=js"+bbh+"&bust="+Math.random()+ibb_euconsent+"&target=_blank'><"+"\/scr"+"ipt>");
var bbkeywords=0,bbprbanner=0,bbtitle=0,bburlparam=0;
/* ]]> */
