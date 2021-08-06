// Copyright 2008-2021 Monetate, Inc.
// 2021-06-18T17:00:45Z t1624035545 ashleyfurniture_entry.js v1.27.26
(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function k(a,b){if(b){for(var c=ba,e=a.split("."),d=0;d<e.length-1;d++){var f=e[d];f in c||(c[f]={});c=c[f]}e=e[e.length-1];d=c[e];f=b(d);f!=d&&null!=f&&aa(c,e,{configurable:!0,writable:!0,value:f})}}
k("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);for(var b=Math.max(0,Math.min(c|0,this.length)),d=a.length;0<d&&0<b;)if(this[--b]!=a[--d])return!1;return 0>=d}});
function ca(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,d=0;d<e;d++){var f=a[d];if(b.call(c,f,d,a))return{i:d,v:f}}return{i:-1,v:void 0}}k("Array.prototype.find",function(a){return a?a:function(a,c){return ca(this,a,c).v}});k("Array.prototype.findIndex",function(a){return a?a:function(a,c){return ca(this,a,c).i}});k("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});var da=this;
function l(a,b){var c=a.split("."),e=da;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}function ea(a){a=a.split(".");for(var b=da,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function fa(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var m="!!!";m=String(m);var n;a:{for(var p="ashleyfurniture.com".split(m),q=0;q<p.length;q++)if(window.location.host.endsWith(p[q])){n=p[q];break a}n="ashleyfurniture.com"}var ha=n;function t(a,b){return"https:"==document.location.protocol?"https://"+b:"http://"+a}var ia=t("d.monetate.net","d.monetate.net"),ja=t("e.monetate.net","se.monetate.net"),ka=t("b.monetate.net","sb.monetate.net");function la(a){for(var b=(document.cookie||"").split(/\s*;\s*/),c=0;c<b.length;c++){var e=b[c],d=e.indexOf("=");if(-1!=d&&a===e.substring(0,d)){a=e.substring(d+1);try{return decodeURIComponent(a)}catch(f){return unescape(a)}}}return null}function u(){try{var a=JSON.parse(la("mt.sc")||"")}catch(b){a={i:(new Date).getTime(),d:[]}}return a}
function ma(a){var b=u();a=a.replace(/[\[|\\|\^|\$|\.|\||\?|\*|\+|\(|\)|\{|\}]/g,function(a){return"\\"+a});var c=new RegExp("^"+a+";");try{var e=b.d.find(function(a){return c.test(a)})}catch(d){e=null}return e&&e.split(";")[1]}
function na(a,b){var c=u();a=a.replace(/[\[|\\|\^|\$|\.|\||\?|\*|\+|\(|\)|\{|\}]/g,function(a){return"\\"+a});var e=new RegExp("^"+a+";"),d=c.d.findIndex(function(a){return e.test(a)});-1<d?b?c.d[d]=a+";"+b:c.d.splice(d,1):b&&c.d.push(a+";"+b);w("sc",JSON.stringify(c),18E5)}function x(a){return la("mt."+a)||ma(a)}
function w(a,b,c){function e(a,b,c){var d=ha,e="/";d=void 0===d?ha:d;e=void 0===e?"/":e;c=c&&Math.min(c,31536E7);document.cookie="mt."+a+"="+encodeURIComponent(b)+"; domain="+d+"; path="+e+"; "+(c?"expires="+(new Date((new Date).getTime()+c)).toUTCString()+"; ":"")}-1===c&&(e=na);e(a,b,void 0===c?31536E7:c)}try{var y=u(),oa=(new Date).getTime();432E5<oa-y.i&&(y.i=oa,y.d=[]);w("sc",JSON.stringify(y),18E5)}catch(a){};function z(){var a=x("v");if(!a||64<=a.length)a="2."+Math.floor(2147483647*Math.random())+"."+(new Date).getTime(),w("v",a,void 0);return a};var A=[];function B(a,b){var c=C(a,b);l("monetate."+a,c);return c}function C(a,b){var c=ea("monetate."+a)||b;"undefined"==typeof c&&(c={});return c};var D=[];function pa(a){var b=D[D.length-1];return{op:a,actionId:b?b.actionId:void 0,eventId:b?b.eventId:void 0,targetId:b?b.targetId:void 0,selector:b?b.selector:void 0,args:b?b.args:[],is_id:b?b.is_id:void 0,rules:b?b.rules:void 0,actionEvents:b?b.actionEvents:void 0,parentContext:b}};function qa(a){var b=document.createElement("script");b.type="text/javascript";b.src=a;b.charset="utf-8";return b}function ra(a){var b=document.getElementsByTagName("script")[0];a=qa(a);a.async=!0;b.parentNode.insertBefore(a,b);return a};var E=B("p",{c:!1,keys:{},ops:[],admits:{}});
function sa(){var a=ta;return function(b){for(var c=[],e=0;e<arguments.length;++e)c[e]=arguments[e];e=C("preview",-1);var d="",f=document.location.search.match(/(#|\?|&)monetate-preview=(.*?)(&|$)/);f&&f[2]&&(d=decodeURIComponent(f[2].replace(/\+/g," ")));if(d&&!x("p"))w("fp",d,0);else if(d=F("preview","ps"),-1!=e&&d=="cp"+e.cp)a:{e=e.name;for(d=0;d<E.ops.length;d++)if(f=E.ops[d],"ps"==f.cookie&&f.label==e)break a;E.ops.push({cookie:"ps",label:e})}else if(d&&-1==e&&(e=/^([a-z]{1,3})([0-9A-Z]{32})$/.exec(d))&&
3==e.length&&(e=ka+("/js/2/a-77e56a9b/p/ashleyfurniture.com/entry.js?"+e[1]+"="+e[2]),!E.admits["/js/2/a-77e56a9b/p/ashleyfurniture.com/entry.js"])){for(d=0;d<A.length;d++){f=A[d].split(".");var g,h=window;for(g=0;g<f.length-1;g++)h=h[f[g]];delete h[f[g]]}A.length=0;d=qa(e);d.setAttribute("id","monetate-block");f=document.createElement("div");f.appendChild(d);document.write(f.innerHTML);document.getElementById("monetate-block")?d.removeAttribute("id"):d=void 0;if(d||ra(e)){E.admits["/js/2/a-77e56a9b/p/ashleyfurniture.com/entry.js"]=
!0;return}}a.apply(this,c)}}function F(a,b){if(!E.c){var c=window.location,e=c.hash;E.c=!0;if(e&&"#monetate-"==e.substr(0,10)){e=e.slice(10).split(",");for(var d=0;d<e.length;d++){var f=e[d].split("=");E.keys[f[0]]=f[1]||"1"}"pushState"in window.history&&window.history.pushState("",document.title,c.protocol+"//"+c.hostname+c.pathname+c.search)}}a in E.keys&&w(b,E.keys[a],0);return x(b)};var G=null;function H(){null===G&&(G=!!F("diagnostics","diagnostics"))&&(I("a","a-77e56a9b/p/ashleyfurniture.com"),I("ts",ia));return G}var ua=B("dq",[]);function I(a,b){H()&&ua.push({type:a,obj:b})}function va(a,b,c,e,d){I(c?"h":"hi",{name:e||a,timeout:4E3,css:b,selector:e,actionId:d})};var wa=B("rp",[]);l("monetate.rph",function(a,b){wa.push({data:a,callback:b})});function xa(a){var b=C("rph");b&&b(a,void 0)}function ya(a,b){a.e=a.e||[];-1===a.e.indexOf(b)&&a.e.push(b)};var J={},K=(J.UNHANDLED=0,J.reporting=50,J.rollback=51,J.integration=52,J.api=53,J.op=40,J.action=41,J.event=42,J.target=43,J.mask=10,J.context=11,J.INFO=99,J),L={},za=(L[K.UNHANDLED]="ERROR: Unexpected behaviour",L[K.reporting]="ERROR: Internal reporting failed",L[K.rollback]="ERROR: Rollback functionality failed",L[K.integration]="ERROR: Custom integration failed",L[K.api]="ERROR: API integration failed",L[K.op]="WARNING: Operation{{id}} failed",L[K.action]="WARNING: Action{{id}} failed",L[K.event]=
"WARNING: Event{{id}} failed",L[K.target]="WARNING: Target{{id}} failed",L[K.mask]="INFO: Masking failed",L[K.context]="INFO: Context failed",L[K.INFO]="INFO: Unexpected behaviour",L),M={},Aa=(M[0]="unhandled error. Contact a developer",M[1]="invalid script configuration. Contact a developer.",M[2]="invalid parameters. Double check configuration.",M[3]="invalid server response. Contact a developer.",M[4]="invalid environment. Double check configuration and contact a developer.",M[9]="an unforeseen circumstance. Contact a developer",
M),Ba=0;
function Ca(a,b,c){function e(a){return a=a.replace(/{{id}}/g," with id "+g)}for(var d=D[D.length-1],f=[],g,h,r,v;d;){d.op&&f.push(d.op);if(d.actionId||d.eventId||d.targetId)g=d.actionId||d.eventId||d.targetId,h=!!d.actionId,v=!!d.eventId,r=!!d.targetId;d=d.parentContext}d=f.reverse().join(" > ");h?c=c||K.action:v?c=c||K.event:r&&(c=c||K.target);c||(c=K[f[0]]||K.UNHANDLED);f=b||0;b=za[c]+" due to "+Aa[f];b=e(b);a=e(a);f=String(c)+String(f)+": "+za[c].replace(/{{id}}/g,"");return{entry:d,msg:f,xmsg:a,
xname:b,id:g}}function N(a,b,c){a=Ca(a,b,c);3>Ba&&(Ba+=1,I("e",a),(b=D[D.length-1])&&a.id&&I("o",{op:b,ex:a.msg+": "+a.xname+" - "+a.xmsg||!0}),b={},ya(b,"xx"),b.xx=b.xx||[],b.xx.push(a),xa(b))}function O(a,b){var c=pa(a);return function(a){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];D.push(c);try{var g=b.apply(this,d)}catch(h){try{N(h.message,h.reason,h.type)}catch(r){}}D.length&&D.pop();return g}}function P(a,b){return setTimeout(O("timeout",a),b)};/*
 Sizzle CSS Selector Engine v2.3.4-pre
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://js.foundation/

 Date: 2017-09-01
*/
var Q=null;function Da(a,b){var c=window;c.addEventListener?c.addEventListener(a,b,!1):c.attachEvent&&c.attachEvent("on"+a,b);Q||(Q=[]);Q.push({n:c,e:a,f:b})}function Ea(){if(Q){for(var a=0;a<Q.length;++a){var b=Q[a],c=b.n,e=b.e;b=b.f;c.removeEventListener?c.removeEventListener(e,b,!1):c.detachEvent&&c.detachEvent("on"+e,b)}Q=null}}function Fa(a){Da("load",a);Da("unload",Ea);window.attachEvent&&/loaded|complete/.test(document.readyState)&&a()};var R=[],Ga=0,S={},Ha=window.monetateT||(window.monetateT=(new Date).getTime());function Ia(){var a=H();if(!a){var b=z().split(".");b[1]&&(a=1>parseInt(b[1],10)%100)}Ia=function(){return a};return a}function Ja(){if(10>Ga){Ga++;var a={},b=R.splice(0,100);ya(a,"xt");a.xt=b;xa(a);R.length&&P(Ja,750)}}function T(a,b,c){Ia()&&(S[a]=(S[a]||0)+1,a={n:a,s:S[a],t:b-Ha,d:c?c-b:0},I("m",a),R.push(a),1===R.length&&P(Ja,750))}
function Ka(){var a=sa();return function(b){for(var c=[],e=0;e<arguments.length;++e)c[e]=arguments[e];e=(new Date).getTime();try{return a.apply(window,c)}finally{T("entry",e,(new Date).getTime())}}}O("reporting",function(){var a=window.performance&&window.performance.timing;if(a){var b="fetchStart domLoading domInteractive domContentLoadedEventEnd domComplete loadEventEnd".split(" "),c=function(){var c=[];b.forEach(function(b){a[b]?T(b,a[b]):c.push(b)});b=c};c();b.length&&Fa(function(){P(c,50)})}})();function La(a,b){var c=a+"|"+b;for(var e=2166136261,d=0;d<c.length;d++)e^=c.charCodeAt(d),e+=(e<<1)+(e<<4)+(e<<7)+(e<<8)+(e<<24);c=e&4294967295;0>c&&(c+=4294967296);return c}function Ma(a,b,c){return La(c,a)%100<parseInt(b[a].percent,10)};function U(a){for(var b=[],c=0,e=0;e<a.length;e++){var d=a.charCodeAt(e);255<d&&(b[c++]=d&255,d>>=8);b[c++]=d}return b};function Na(){this.blockSize=-1};function Oa(){this.blockSize=64;this.chain_=[];this.buf_=[];this.W_=[];this.pad_=[];this.pad_[0]=128;for(var a=1;a<this.blockSize;++a)this.pad_[a]=0;this.chain_[0]=1732584193;this.chain_[1]=4023233417;this.chain_[2]=2562383102;this.chain_[3]=271733878;this.chain_[4]=3285377520;this.total_=this.inbuf_=0}fa(Oa,Na);
function V(a,b,c){c||(c=0);var e=a.W_;if("string"==typeof b)for(var d=0;16>d;d++)e[d]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(d=0;16>d;d++)e[d]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(d=16;80>d;d++){var f=e[d-3]^e[d-8]^e[d-14]^e[d-16];e[d]=(f<<1|f>>>31)&4294967295}b=a.chain_[0];c=a.chain_[1];var g=a.chain_[2],h=a.chain_[3],r=a.chain_[4];for(d=0;80>d;d++){if(40>d)if(20>d){f=h^c&(g^h);var v=1518500249}else f=c^g^h,v=1859775393;else 60>d?(f=
c&g|h&(c|g),v=2400959708):(f=c^g^h,v=3395469782);f=(b<<5|b>>>27)+f+r+v+e[d]&4294967295;r=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.chain_[0]=a.chain_[0]+b&4294967295;a.chain_[1]=a.chain_[1]+c&4294967295;a.chain_[2]=a.chain_[2]+g&4294967295;a.chain_[3]=a.chain_[3]+h&4294967295;a.chain_[4]=a.chain_[4]+r&4294967295}
function W(a,b,c){if(null!=b){void 0===c&&(c=b.length);for(var e=c-a.blockSize,d=0,f=a.buf_,g=a.inbuf_;d<c;){if(0==g)for(;d<=e;)V(a,b,d),d+=a.blockSize;if("string"==typeof b)for(;d<c;){if(f[g]=b.charCodeAt(d),++g,++d,g==a.blockSize){V(a,f);g=0;break}}else for(;d<c;)if(f[g]=b[d],++g,++d,g==a.blockSize){V(a,f);g=0;break}}a.inbuf_=g;a.total_+=c}};function Pa(a){return(a=document.location.search.match(new RegExp("(#|\\?|&)"+a+"=(.*?)(&|$)","i")))&&a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):null};function X(a){return a.protocol+"//"+a.hostname+a.pathname}function Qa(a){for(var b=0;b<a.length;b++)if(!Ra(a[b]))return!1;return!0}
function Ra(a){try{var b=new RegExp(a.value,"i"),c=window.location;switch(a.op){case "path_iregex":if(!b.test(c.pathname))return!1;break;case "url_iregex":if(!b.test(X(c)))return!1;break;case "full_iregex":if(!b.test(X(c)+c.search))return!1;break;case "not_param_iequals":if(Pa(a.value))return!1;break;default:return N("Unknown rule: "+a.op,2),!1}}catch(e){return N("Invalid regular expression for "+a.op+", value: "+a.value,2),!1}return!0};function Y(a,b,c){a._element[b]=c;b="protocol hostname host port href pathname search hash".split(" ");for(c=0;c<b.length;c++){var e=b[c];a[e]=a._element[e]}"/"!=a.pathname.charAt(0)&&(a.pathname="/"+a.pathname)};var Z=B("em",{masks:{},count:0,tmark:0}),Sa;if(!(Sa=document.getElementById("monetatecss"))){var Ta=document.createElement("style");Ta.id="monetatecss";document.head.appendChild(Ta);Sa=Ta}var Ua=Sa;function Va(a,b){var c=Z.masks;c[a]||(Z.count++,Z.tmark||(Z.tmark=(new Date).getTime()),c[a]={extended:!1,selector:b,key:a},va(a,b+" { visibility: hidden !important; } \n",!0,b,a&&!isNaN(a)?+a:null))}
function Wa(a){var b=void 0;if(a.rules&&Qa(a.rules))for(b||(b=P(function(){var a=[],b=Z.masks,c;for(c in b)if(b.hasOwnProperty(c)){var g=b[c];b[c].extended&&-1===a.indexOf(g.key)&&a.push(g.key)}b=0;for(c=a.length;b<c;b++)N("Extended mask not removed for action with id "+a[b],1,K.mask);a=Z.masks;for(var h in a)a.hasOwnProperty(h)&&(b=Z.masks[h])&&(delete Z.masks[b.key],delete Z.masks[b.selector],Z.count--,Z.tmark&&0===Z.count&&(Z.tmark=Z.tmark.t?Z.tmark.t+window.monetateT:Z.tmark,T("mask",Z.tmark,
(new Date).getTime())));Xa()},4E3)),b=0;b<a.action_ids.length;b++)Va(a.action_ids[b]+"",a.selector);else if(H())for(b=0;b<a.action_ids.length;b++){var c=a.action_ids[b]+"";va(c,a.selector+" { visibility: hidden !important; } \n",!1,a.selector,c&&!isNaN(c)?+c:null)}}function Xa(){var a=Z.masks,b="";Object.keys(a).forEach(function(c){b+=a[c].selector+" { visibility: hidden !important; } \n"});Ua.innerHTML=b}
function Ya(){for(var a=C("masks",[]),b=0,c=a.length;b<c;++b){var e=a[b];O("mask",function(){Wa(e)})();Xa()}};function Za(){var a=$a();return function(b){for(var c=[],e=0;e<arguments.length;++e)c[e]=arguments[e];e=window.location.protocol;"http:"!=e&&"https:"!=e||a.apply(this,c)}}function $a(){var a=Ka();return function(b){for(var c=[],e=0;e<arguments.length;++e)c[e]=arguments[e];a.apply(this,c)}};var ab=!1,bb=!1;
function ta(){var a;if(!(a=!bb)){var b=C("redirect",[]),c=z();if(z()!==c||x("redirect"))a=void 0;else b:{for(var e=0,d=b.length;e<d;e++)if(a=b[e],Qa(a.rules)){c:{b=a.a;e=a.cg;d=new Oa;W(d,U("testeverything"));W(d,U(b));W(d,U(c));W(d,U(e));c=d;b=[];d=8*c.total_;56>c.inbuf_?W(c,c.pad_,56-c.inbuf_):W(c,c.pad_,c.blockSize-(c.inbuf_-56));for(e=c.blockSize-1;56<=e;e--)c.buf_[e]=d&255,d/=256;V(c,c.buf_);for(e=d=0;5>e;e++)for(var f=24;0<=f;f-=8)b[d]=c.chain_[e]>>f&255,++d;c=b;for(e=b=0;6>e;e++)b=256*b+c[e];
c=b/281474976710656;for(b=0;b<a.splits.length;b++)if(e=a.splits[b],c<e.cdf){d:{c=e;w("redirect",[c.o,(new Date).getTime(),0].join(";"),0);if(c.targets.length){a={_element:document.createElement("a")};Y(a,"href",window.location.href);e:{c=c.targets;b=a;for(e=0;e<c.length;e++)switch(d=c[e],f=new RegExp(d.key,"i"),d.op){case "path_iregex":d=b.pathname.replace(f,d.value);Y(b,"pathname",d);break;case "url_iregex":d=X(b).replace(f,d.value);Y(b,"href",d);break;case "full_iregex":d=(X(b)+b.search).replace(f,
d.value);Y(b,"href",d);break;case "not_param_iequals":Y(b,"search",(b.search?b.search+"&":"?")+(d.key+"="+d.value));break;default:c=!1;break e}c=!0}if(c){document.location.replace(X(a)+a.search);if(a=document.documentElement)a.style.display="none";a=!0;break d}}a=void 0}break c}a=void 0}break b}a=void 0}a=!a}a&&(ab&&Ya(),a=C("preview",-1),c=F("preview","ps"),a=-1!=a&&c=="cp"+a.cp?"?cp="+a.cp:"",ra((a?ka:ja)+("/js/3/a-77e56a9b/p/ashleyfurniture.com/t1626766969/4e196142ce84692f/custom.js"+
a)))}B("featureFlag.hash",La);B("featureFlag.isFeatureEnabled",Ma);B("featureFlag.parseFlagsConfig",function(a,b){Object.keys(a).forEach(function(c){a[c].enabled=Ma(c,a,b)})});if("true"!==Pa("sspass")){bb=ab=!0;var cb=O("entry",Za());ea("monetate.entry")||(A.push("monetate.entry"),l("monetate.entry",cb))};}).call(this);
if(this.monetate){monetate.redirect=[];monetate.masks=[];monetate.tgt=[{"args":["User.customerId","",""],"is_collector":false,"is_id":true,"op":"targetJSVar","rules":{"op":"","value":""},"targetId":61642}];monetate.bk=false;monetate.preview=null;monetate.ch="f18e4239f8ece1df";monetate.entry()}