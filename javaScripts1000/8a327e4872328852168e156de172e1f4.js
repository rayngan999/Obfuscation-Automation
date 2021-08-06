(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},ca=ba(this),da=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var e=0;e<
a.length-1;e++){var d=a[e];if(!(d in c))break a;c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},f;
if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var m;a:{var fa={a:!0},n={};try{n.__proto__=fa;m=n.a;break a}catch(a){}m=!1}f=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=f;
da("Array.from",function(a){return a?a:function(b,c,e){c=null!=c?c:function(h){return h};var d=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var k=0;!(g=b.next()).done;)d.push(c.call(e,g.value,k++))}else for(g=b.length,k=0;k<g;k++)d.push(c.call(e,b[k],k));return d}});var q=this||self,r=function(a){return a};var ha=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,d=0;d<c;d++)if(d in e&&b.call(void 0,e[d],d,a))return!0;return!1};var t,u=function(){if(void 0===t){var a=null,b=q.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch(c){q.console&&q.console.error(c.message)}t=a}else t=a}return t};var w=function(a,b){this.g=b===v?a:""};w.prototype.toString=function(){return this.g+""};var v={};var x;a:{var y=q.navigator;if(y){var ia=y.userAgent;if(ia){x=ia;break a}}x=""};var ja={},z=function(a,b,c){this.g=c===ja?a:""};z.prototype.toString=function(){return this.g.toString()};var ka={},A=null,la=function(a){var b;void 0===b&&(b=0);if(!A){A={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var g=c.concat(e[d].split(""));ka[d]=g;for(var k=0;k<g.length;k++){var h=g[k];void 0===A[h]&&(A[h]=k)}}}b=ka[b];c=Array(Math.floor(a.length/3));e=b[64]||"";for(d=g=0;g<a.length-2;g+=3){var l=a[g],C=a[g+1];h=a[g+2];k=b[l>>2];l=b[(l&3)<<4|C>>4];C=b[(C&15)<<2|h>>6];h=b[h&63];c[d++]=k+l+C+h}k=0;h=e;switch(a.length-
g){case 2:k=a[g+1],h=b[(k&15)<<2]||e;case 1:a=a[g],c[d]=b[a>>2]+b[(a&3)<<4|k>>4]+h+e}return c.join("")};var B="function"===typeof Uint8Array;function ma(a,b,c){return"object"===typeof a?B&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):na(a,b,c):b(a)}function na(a,b,c){if(Array.isArray(a)){for(var e=Array(a.length),d=0;d<a.length;d++){var g=a[d];null!=g&&(e[d]=ma(g,b,c))}Array.isArray(a)&&a.o&&D(e);return e}e={};for(d in a)g=a[d],null!=g&&(e[d]=ma(g,b,c));return e}function oa(a){return na(a,function(b){return"number"===typeof b?isFinite(b)?b:String(b):b},function(b){return la(b)})}
var pa={o:{value:!0,configurable:!0}},D=function(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,pa);return a},E;var qa;var H=function(a,b,c,e){var d=qa;qa=null;a||(a=d);d=this.constructor.F;a||(a=d?[d]:[]);this.i=d?0:-1;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],!(null===d||"object"!=typeof d||Array.isArray(d)||B&&d instanceof Uint8Array))){this.j=a-this.i;this.h=d;break a}void 0!==b&&-1<b?(this.j=Math.max(b,a+1-this.i),this.h=null):this.j=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.j?(a+=this.i,(d=this.g[a])?D(d):this.g[a]=F):(ra(this),(d=this.h[a])?D(d):this.h[a]=F);if(e&&e.length)for(c=
0;c<e.length;c++){a=b=void 0;d=e[c];for(var g=0;g<d.length;g++){var k=d[g];var h=k;if(h<this.j){h+=this.i;var l=this.g[h];h=l!==F?l:this.g[h]=D([])}else this.h?(l=this.h[h],h=l!==F?l:this.h[h]=D([])):h=void 0;null!=h&&(a=k,b=h,G(this,k,void 0))}a&&G(this,a,b)}},F=Object.freeze(D([])),ra=function(a){var b=a.j+a.i;a.g[b]||(a.h=a.g[b]={})},G=function(a,b,c){b<a.j?a.g[b+a.i]=c:(ra(a),a.h[b]=c);return a};H.prototype.toJSON=function(){var a=this.g;return E?a:oa(a)};
var sa=function(a,b){switch(typeof b){case "number":return isFinite(b)?b:String(b);case "object":if(B&&null!=b&&b instanceof Uint8Array)return la(b)}return b};H.prototype.toString=function(){return this.g.toString()};var I=function(a){H.call(this,a,-1,ta)};I.prototype=ea(H.prototype);I.prototype.constructor=I;if(p)p(I,H);else for(var J in H)if("prototype"!=J)if(Object.defineProperties){var ua=Object.getOwnPropertyDescriptor(H,J);ua&&Object.defineProperty(I,J,ua)}else I[J]=H[J];var ta=[6];var xa=function(a,b){if(!va()){var c=Math.random();if(c<b)return c=wa(),a[Math.floor(c*a.length)]}return null},wa=function(){if(!q.crypto)return Math.random();try{var a=new Uint32Array(1);q.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},va=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return ha(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],ya)||1E-4>Math.random()}),ya=function(a){return-1!=x.indexOf(a)};var za="platform platformVersion architecture model uaFullVersion bitness".split(" "),Aa=function(){return q.navigator&&q.navigator.userAgentData&&"function"===typeof q.navigator.userAgentData.getHighEntropyValues?q.navigator.userAgentData.getHighEntropyValues(za).then(function(a){var b=new I;b=G(b,1,a.platform);b=G(b,2,a.platformVersion);b=G(b,3,a.architecture);b=G(b,4,a.model);b=G(b,5,a.uaFullVersion);return G(b,9,a.bitness)}):null};var Ba=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(e){}return!0}(q,!1)?"https:":"http:";var Ca={D:1,u:4,v:5,s:7,A:9,B:10,C:11},K={m:"40004006",l:"40004007"};function Da(){return{1:.5,4:.02,5:.001,7:.5,9:.05,10:.2,11:0}}function Ea(){var a=Fa,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in Ca)if(b=a[Ca[c]],"number"!==typeof b||0>b||1<b)return!1;return!0};function Ga(){var a=q.dcmads;if(null!=a.eids)return a.eids;var b=q.navigator;return b.connection&&b.connection.saveData?(a=xa([K.m,K.l],a.expts[4]))?"4|"+a:"":""}function Ha(){if(!q.dcmads.uach){var a=Aa();a&&a.then(function(b){var c=q.dcmads;a:{E=!0;try{var e=JSON.stringify(b.toJSON(),sa);break a}finally{E=!1}e=void 0}c.uach=e})}};try{q.dcmads=q.dcmads||{};q.dcmads.startTime=(new Date).getTime();var Ia=q.dcmads,L=q.dcmads.version,M={loader:224};if(L)if(M.experiment=L.experiment,77==L.number||"p"==L.number)M.number=77;else if(78==L.number||"c"==L.number)M.number=78;if(!M.number){var Ja=xa([77,78],.01);M.experiment=!!Ja;M.number=Ja||77}Ia.version=M;var Ka=q.dcmads,La,Fa=q.dcmads.expts,N;N=void 0===N?Da:N;La=Ea()?Fa:N();Ka.expts=La;q.dcmads.eids=Ga();Ha();var Ma="4|"+K.l,Na=q.dcmads.version,Oa=Na.number,Pa="";Na.experiment&&77==
Oa&&(Pa="?rxp=77x78");var Qa="impl_v"+Oa+".js"+Pa,Ra=q.document,Sa=Ra.currentScript||Array.from(Ra.getElementsByTagName("script")).pop(),O=(0==(Sa&&Sa.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+Qa;if(q.dcmads.eids===Ma){var Ta=q.document,Ua=u(),Va=Ua?Ua.createScriptURL(O):O,P=Ta.createElement("script"),Q=new w(Va,v);P.src=Q instanceof w&&Q.constructor===w?Q.g:"type_error:TrustedResourceUrl";var Wa,R,Xa=(P.ownerDocument&&P.ownerDocument.defaultView||window).document,
S=null===(R=Xa.querySelector)||void 0===R?void 0:R.call(Xa,"script[nonce]");(Wa=S?S.nonce||S.getAttribute("nonce")||"":"")&&P.setAttribute("nonce",Wa);var T=Ta.getElementsByTagName("script")[0];T&&T.parentNode&&T.parentNode.insertBefore(P,T)}else{var Ya=q.document,U,Za='<script src="'+O+'">\x3c/script>',$a=u(),ab=$a?$a.createHTML(Za):Za;U=new z(ab,null,ja);Ya.write(U instanceof z&&U.constructor===z?U.g:"type_error:SafeHtml")}}catch(a){if(.01>Math.random()){var V="";try{var W,X=a.toString();a.name&&
-1==X.indexOf(a.name)&&(X+=": "+a.name);a.message&&-1==X.indexOf(a.message)&&(X+=": "+a.message);if(a.stack){var Y=a.stack,Z=X;try{-1==Y.indexOf(Z)&&(Y=Z+"\n"+Y);for(var bb;Y!=bb;)bb=Y,Y=Y.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");X=Y.replace(/\n */g,"\n")}catch(b){X=Z}}W=X;W=W.substring(0,1024);V=encodeURIComponent(W)}catch(b){V="extr"}var cb=q.dcmads.eids,db=document.createElement("img");db.src=Ba+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=224&context=554"+
((cb?"&eids="+cb:"")+"&msg="+V);(q.google_image_requests=q.google_image_requests||[]).push(db)}};}).call(this);
