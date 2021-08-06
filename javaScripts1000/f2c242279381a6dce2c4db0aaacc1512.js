"use strict";this.default_VerifiedReviewsBadgeUi=this.default_VerifiedReviewsBadgeUi||{};(function(_){var window=this;
try{
_.dB=function(){return _.yj(_.Aj("w2btAe"),_.Cj,new _.Cj)};_.eB=function(){var a=_.dB();return _.Lh(a,3,"0")};_.q("sy1g");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var gB;_.fB=function(a){this.g=a||{cookie:""}};_.k=_.fB.prototype;_.k.isEnabled=function(){if(!_.p.navigator.cookieEnabled)return!1;if(!this.Ma())return!0;this.set("TESTCOOKIESENABLED","1",{vj:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
_.k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.vy;d=c.As||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.vj}if(/[;=\s]/.test(a))throw Error("fb`"+a);if(/[;\r\n]/.test(b))throw Error("gb`"+b);void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:"")};
_.k.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,_.ze)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};_.k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{vj:0,path:b,domain:c});return d};_.k.kb=function(){return gB(this).keys};_.k.Ra=function(){return gB(this).values};_.k.Ma=function(){return!this.g.cookie};_.k.cb=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0};
_.k.Vd=function(a){for(var b=gB(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};gB=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,_.ze)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};_.hB=new _.fB("undefined"==typeof document?null:document);

_.t();

_.q("sy1q");
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/

_.t();

var VH=function(){var a=_.dB();return _.L(a,1)};_.q("Wt6vjf");
var WH=function(a){_.z.call(this,a)};_.E(WH,_.z);WH.prototype.fa=function(){return _.Dh(this)};WH.qa="f.bo";
var XH=function(){_.qi.call(this)};_.E(XH,_.qi);XH.prototype.X=function(){this.kj=!1;YH(this);_.qi.prototype.X.call(this)};XH.prototype.g=function(){ZH(this);if(this.qf)return $H(this),!1;if(!this.Oj)return aI(this),!0;_.M(this,"q");if(!this.hi)return aI(this),!0;this.mh?(_.M(this,"s"),aI(this)):$H(this);return!1};
var bI=function(a){var b=new _.Vs(a.Gn);null!=a.Bi&&b.g.set("authuser",a.Bi);return b},$H=function(a){a.qf=!0;var b=bI(a),c="rt=r&f_uid="+encodeURIComponent(String(a.hi));_.up(b,(0,_.r)(a.h,a),"POST",c)};
XH.prototype.h=function(a){a=a.target;ZH(this);if(_.Cp(a)){this.Ig=0;if(this.mh)this.qf=!1,_.M(this,"s");else if(this.Oj)_.M(this,"t");else{try{var b=_.Dp(a),c=JSON.parse(b.substring(b.indexOf("\n")));var d=(new WH(c[0])).fa()}catch(e){_.oc(null,e);_.M(this,"u");cI(this);return}this.qf=!1;d?_.M(this,"r"):_.M(this,"s")}aI(this)}else{if(0!=a.lc()){d="";try{d=_.Dp(a)}catch(e){}a=Error("wb`"+a.lc()+"`"+bI(this).toString()+"`"+String(a.s)+"`"+d);_.oc(null,a);_.M(this,"u")}cI(this)}};
var ZH=function(a){var b=_.hB.get("https:"==window.location.protocol?"SAPISID":"APISID","");a.mh=""!==a.Hg&&""===b;a.Oj=a.Hg!=b;a.Hg=b},cI=function(a){a.mh||(a.qf=!0,a.Ig=Math.min(2*(a.Ig||3),60),aI(a))},aI=function(a){if(a.kj||a.qf)YH(a),a.Eh=window.setTimeout((0,_.r)(a.g,a),1E3*Math.max(3,a.Ig))},YH=function(a){a.Eh&&(window.clearTimeout(a.Eh),a.Eh=0)};_.k=XH.prototype;_.k.W=null;_.k.Ig=0;_.k.Eh=0;_.k.Hg=null;_.k.mh=!1;_.k.Oj=!1;_.k.Bi=null;_.k.Gn="/_/idv/";_.k.hi="";_.k.kj=!1;_.k.qf=!1;
_.vb(_.Jk,XH);
_.na().fb(function(a){var b=new XH;_.Oo(a,_.Jk,b);if(VH()){a=VH();var c=_.Aj("WZsZ1e").oa(null);b.hi=a;void 0!==c&&(b.Hg=c);a=_.Us();0==a.lastIndexOf("/",0)||(a="/"+a);b.Gn=a+"/idv/";(a=_.eB())&&_.Aj("gGcLoe").Ba(!1)&&(b.Bi=a);b.kj=!0;b.g()}});

_.t();

_.ws=function(a,b){var c=[],d=_.Zi(b),e=function(f){return _.Yf(f)&&d(f)};a.Ga(function(f){(f=_.ag(f,e,!0))&&!_.ya(c,f)&&c.push(f)});return new _.pj(c)};_.q("syb");
_.xs=1;_.ys=16;_.zs=!1;

_.t();

var iB,lB,mB,nB;
iB=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}function b(v){for(var y=g,x=0;64>x;x+=4)y[x/4]=v[x]<<24|v[x+1]<<16|v[x+2]<<8|v[x+3];for(x=16;80>x;x++)v=y[x-3]^y[x-8]^y[x-14]^y[x-16],y[x]=(v<<1|v>>>31)&4294967295;v=e[0];var C=e[1],A=e[2],G=e[3],fa=e[4];for(x=0;80>x;x++){if(40>x)if(20>x){var ma=G^C&(A^G);var Wb=1518500249}else ma=C^A^G,Wb=1859775393;else 60>x?(ma=C&A|G&(C|A),Wb=2400959708):(ma=C^A^G,Wb=3395469782);ma=((v<<5|v>>>27)&4294967295)+
ma+fa+Wb+y[x]&4294967295;fa=G;G=A;A=(C<<30|C>>>2)&4294967295;C=v;v=ma}e[0]=e[0]+v&4294967295;e[1]=e[1]+C&4294967295;e[2]=e[2]+A&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+fa&4294967295}function c(v,y){if("string"===typeof v){v=unescape(encodeURIComponent(v));for(var x=[],C=0,A=v.length;C<A;++C)x.push(v.charCodeAt(C));v=x}y||(y=v.length);x=0;if(0==m)for(;x+64<y;)b(v.slice(x,x+64)),x+=64,n+=64;for(;x<y;)if(f[m++]=v[x++],n++,64==m)for(m=0,b(f);x+64<y;)b(v.slice(x,x+64)),x+=64,n+=64}function d(){var v=
[],y=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var x=63;56<=x;x--)f[x]=y&255,y>>>=8;b(f);for(x=y=0;5>x;x++)for(var C=24;0<=C;C-=8)v[y++]=e[x]>>C&255;return v}for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,n;a();return{reset:a,update:c,digest:d,digestString:function(){for(var v=d(),y="",x=0;x<v.length;x++)y+="0123456789ABCDEF".charAt(Math.floor(v[x]/16))+"0123456789ABCDEF".charAt(v[x]%16);return y}}};
_.jB=function(a,b,c){_.up(a.url,function(d){d=d.target;_.Cp(d)?b(_.Dp(d)):c(d.lc())},a.gn,a.body,a.Mj,a.Zj,a.withCredentials)};_.kB=function(a,b,c){a.g||(a.g={});if(!a.g[c]){for(var d=_.Ch(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]),_.$a(a)&&_.ab(e[f]);_.$a(a)&&_.ab(e);a.g[c]=e}return a.g[c]};lB=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
mB=function(){var a=_.Ke;if(_.I("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else _.rf()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b.exec(a)):_.I("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b.exec(a)):_.Oc(_.Ke.toLowerCase(),"kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):_.I("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):_.I("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))};nB=function(a,b){return a+Math.random()*(b-a)};_.q("sy1b");
_.pB=function(a){_.z.call(this,a,-1,oB)};_.E(_.pB,_.z);var oB=[2];
var qB=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("hb`"+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&
"devtools"!==c)throw Error("ib`"+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a};
var sB=function(a,b,c){var d=String(_.p.location.href);return d&&a&&b?[b,rB(qB(d),a,c||null)].join(" "):null},rB=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],_.u(d,function(h){e.push(h)}),tB(e.join(" "));var f=[],g=[];_.u(c,function(h){g.push(h.key);f.push(h.value)});c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];_.u(d,function(h){e.push(h)});a=tB(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")},tB=function(a){var b=
iB();b.update(a);return b.digestString().toLowerCase()};
var uB={};
var vB,wB;vB=function(a){return!!uB.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};wB=function(a,b,c,d){(a=_.p[a])||(a=(new _.fB(document)).get(b));return a?sB(a,c,d):null};
_.xB=function(a,b){b=void 0===b?!1:b;var c=qB(String(_.p.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=_.p.__SAPISID||_.p.__APISID||_.p.__3PSAPISID||_.p.__OVERRIDE_SID;vB(e)&&(f=f||_.p.__1PSAPISID);if(f)e=!0;else{var g=new _.fB(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");vB(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?_.p.__SAPISID:_.p.__APISID,e||(e=
new _.fB(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?sB(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&vB(b)&&((b=wB("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=wB("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var yB=function(a){this.g=this.h=this.i=a};yB.prototype.reset=function(){this.g=this.h=this.i};yB.prototype.fa=function(){return this.h};
_.zB=function(a){_.z.call(this,a)};_.E(_.zB,_.z);var AB=function(){var a=new _.zB,b=document.documentElement.getAttribute("lang");return _.D(a,5,b)};
_.BB=function(a){_.z.call(this,a)};_.E(_.BB,_.z);
_.DB=function(a){_.z.call(this,a,31,CB)};_.E(_.DB,_.z);var CB=[3,20,27];
var FB=function(a){_.z.call(this,a,17,EB)};_.E(FB,_.z);var GB=function(a){var b=Date.now().toString();return _.D(a,4,b)},HB=function(a,b){return _.Nb(a,3,b)},IB=function(a,b){return _.D(a,14,b)},EB=[3,5];
var KB=function(a){_.z.call(this,a,6,JB)};_.E(KB,_.z);var JB=[5];
var LB=function(a){_.z.call(this,a)};_.E(LB,_.z);
var MB=new _.Hj(175237375,LB);
var PB;
_.OB=function(a,b,c,d,e,f,g,h,l,m,n){_.qi.call(this);var v=this;this.h=[];this.ib="";this.U=!1;this.vb=this.ha=-1;this.Ta=!1;this.G=this.i=null;this.u=0;this.ui=1;this.Zj=0;this.da=!1;_.qi.call(this);this.Zb=a;this.hb=b||_.wd;this.l=new FB;this.$b=d;this.ma=n;this.vi=_.yc(nB,0,1);this.N=e||null;this.B=c||null;this.R=g||!1;this.V=l||null;this.withCredentials=!h;this.Ia=f||!1;!this.Ia&&(_.K.nd&&_.Hc(65)||_.K.yk&&_.Hc(45)||_.K.ri&&_.Hc(12)||_.rf()&&mB());a=_.D(new _.BB,1,1);f||(f=AB(),_.Hh(a,11,f));
_.Hh(this.l,1,a);_.D(this.l,2,this.Zb);this.o=new yB(1E4);this.g=new _.si(this.o.fa());_.Id(this,this.g);_.gi(this.g,"tick",lB(NB(this,m)),!1,this);this.M=new _.si(6E5);_.Id(this,this.M);_.gi(this.M,"tick",lB(NB(this,m)),!1,this);this.R||this.M.start();this.Ia||(_.gi(_.Uf(),"beforeunload",this.s,!1,this),_.gi(_.Uf(),"unload",this.s,!1,this),_.gi(document,"visibilitychange",function(){"hidden"===document.visibilityState&&v.s()}),_.gi(document,"pagehide",this.s,!1,this))};_.E(_.OB,_.qi);
var NB=function(a,b){return b?function(){b().then(a.flush.bind(a))}:a.flush};_.OB.prototype.X=function(){this.s();_.qi.prototype.X.call(this)};PB=function(a){a.N||(a.N=.01>a.vi()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.N};_.QB=function(a,b){_.L(b,1)||_.D(b,1,1);_.Hh(a.l,1,b)};_.RB=function(a,b){b?(a.i||(a.i=new _.pB),b=b.mb(),_.D(a.i,4,b)):a.i&&_.D(a.i,4,void 0)};_.SB=function(a,b){a.o=new yB(1>b?1:b);a.g.setInterval(a.o.fa())};
_.OB.prototype.log=function(a){a=a.clone();var b=this.ui++;_.D(a,21,b);if(!_.L(a,1)){b=a;var c=Date.now().toString();_.D(b,1,c)}null!=_.L(a,15)||_.D(a,15,60*(new Date).getTimezoneOffset());this.i&&(b=this.i.clone(),_.Hh(a,16,b));for(;1E3<=this.h.length;)this.h.shift(),++this.u;this.h.push(a);_.M(this,new TB(a));this.R||this.g.Pc||this.g.start()};
_.OB.prototype.flush=function(a,b){var c=this;if(0===this.h.length)a&&a();else if(this.da)UB(this);else{var d=Date.now();if(this.vb>d&&this.ha<d)b&&b("throttled");else{var e=IB(HB(GB(this.l.clone()),this.h),this.u);d={};var f=this.hb();f&&(d.Authorization=f);var g=PB(this);this.B&&(d["X-Goog-AuthUser"]=this.B,g=_.um(g,"authuser",this.B));this.V&&(d["X-Goog-PageId"]=this.V,g=_.um(g,"pageId",this.V));if(f&&this.ib===f)b&&b("stale-auth-token");else if(this.h=[],this.g.Pc&&_.ti(this.g),this.u=0,this.U)a&&
a();else{var h=e.mb(),l;this.G&&this.G.lh(h.length)&&(l=this.G.ex(h));var m={url:g,body:h,np:1,Mj:d,gn:"POST",withCredentials:this.withCredentials,Zj:this.Zj},n=function(x){c.o.reset();c.g.setInterval(c.o.fa());if(x){var C=null;try{var A=JSON.parse(x.replace(")]}'\n",""));C=new KB(A)}catch(G){}C&&(x=Number(_.Eh(C,1,"-1")),0<x&&(c.ha=Date.now(),c.vb=c.ha+x),C=_.Jh(C,MB))&&(C=_.Kh(C,-1),-1!=C&&(c.Ta||_.SB(c,C)))}a&&a()},v=function(x){var C=_.kB(e,_.DB,3),A=c.o;A.g=Math.min(3E5,2*A.g);A.h=Math.min(3E5,
A.g+Math.round(.2*(Math.random()-.5)*A.g));c.g.setInterval(c.o.fa());401===x&&f&&(c.ib=f);if(500<=x&&600>x||401===x||0===x)c.h=C.concat(c.h),c.R||c.g.Pc||c.g.start();b&&b("net-send-failed",x)},y=function(){c.ma?c.ma.send(m,n,v):c.$b(m,n,v)};l?l.then(function(x){m.Mj["Content-Encoding"]="gzip";m.Mj["Content-Type"]="application/binary";m.body=x;m.np=2;y()},function(){y()}):y()}}}};_.OB.prototype.s=function(){this.U||this.flush()};
var UB=function(a){VB(a,function(b,c){b=_.um(b,"format","json");b=_.Uf().navigator.sendBeacon(b,c.mb());a.da&&!b&&(a.da=!1);return b})},VB=function(a,b){if(0!==a.h.length){var c=_.zm(PB(a),"format");c=_.tm(c,"auth",a.hb(),"authuser",a.B||"0");for(var d=0;10>d&&a.h.length;++d){var e=a.h.slice(0,32),f=HB(GB(a.l.clone()),e);0===d&&IB(f,a.u);if(!b(c,f))break;a.h=a.h.slice(e.length)}a.g.Pc&&_.ti(a.g);a.u=0}},TB=function(){_.Sh.call(this,"event-logged",void 0)};_.E(TB,_.Sh);

_.t();

var WB,W,YB,kC,pC;WB=function(){return!(!window.performance||!window.performance.now)};W=function(a,b){a in XB||(XB[a]=b)};YB=function(a){return XB[a]};_.ZB=function(){return WB()?window.performance.now():_.Cd()};
_.fC=function(){if(!$B){$B=!0;W("aboveFoldResourceAverageLoadTime","15768337714740149157");W("aboveFoldResourceCacheHitCount","7099598553576769501");W("aboveFoldResourceCount","9797767207516844257");W("aboveFoldResourceLoadTime","4553553160178503526");W("allResourceAverageLoadTime","15605813632677093659");W("allResourceCacheHitCount","17914751415692637656");W("allResourceCount","7094487270460551484");W("allResourceLoadTime","12563104964214410683");W("animFps","14113926844082461540");W("averageInputDelay",
"8359544496734816350");W("badStatNsfsNeg","13872498202689960064");W("badStatNtplt0Neg","354216789093826216");W("badStatPageLoadMax","3847706865871909365");W("badStatRcvNeg","16524297656573436470");W("badStatRenderDoneMax","3971493379259425170");W("badStatRqtNeg","13881028373313035890");W("badStatSrtNeg","17963189982512678884");W("badStatUnknown","13370756392768907763");W("bl","16147638372540442232");W("cls","522022639063469804");W("con","16829267986558572790");W("cssResourceAverageLoadTime","14307859671070593733");
W("cssResourceCacheHitCount","7494582641517049914");W("cssResourceCount","14906952326733574741");W("cssResourceLoadTime","4891744519482609478");W("cssSize","10652791942255425261");W("cssl","2397168675742140944");W("dataCacheHitCount","6081458428798455447");W("dataCacheMissCount","7842746373913139455");W("dns","5790177495296899286");W("fcp","16254156456118481799");W("firstInputCodeLoadingDelay","7355862829888568636");W("firstInputDelay","16057581369328409502");W("fp","12542193546769209995");W("heapSize",
"1757184925777806825");W("heapSizeLimit","4950535922500196698");W("heapUsed","3079121564595244695");W("imgResourceAverageLoadTime","13378126313938116970");W("imgResourceCacheHitCount","8519598536373642887");W("imgResourceCount","6667106912793420619");W("imgResourceLoadTime","8147743178319688099");W("jsl","14719340685975485085");W("jsreq","390095353588474974");W("lateCssSize","4132870161583308123");W("lcp","13622174389243279923");W("linkResourceAverageLoadTime","476083397694989718");W("linkResourceCacheHitCount",
"8791060314450143495");W("linkResourceCount","10118692516388306266");W("linkResourceLoadTime","408159237941253787");W("n2h","2917163396991171123");W("nativeFirstInputDelay","3328225046418674513");W("nsfs","17276521865292187132");W("ntplt0","8257051839445688306");W("ntplt1","7792735449360349632");W("ntsrt","15419336178855610526");W("ol","17077408715954654437");W("prt","3318688667027929436");W("rcv","749851692583976763");W("renderDone","2590352547652502501");W("renderReady","1329135419338222217");W("req",
"16339156775003354937");W("scriptResourceAverageLoadTime","2107494750385856652");W("scriptResourceCacheHitCount","1309831198388189068");W("scriptResourceCount","6342145065879578001");W("scriptResourceLoadTime","13596961294000664596");W("v2ff","13141743767448786909");W("v2lf","892786264899828735");var a=_.Aj("zChJod");if(null==a.g)throw Error("M`"+a.h);a=a.oa();a=_.Mh(a,aC);var b=void 0;_.L(a,2)?b=_.L(a,2):bC.eq&&(b="https://www.google.com/log?format=json&hasfast=true");b=new cC(bC.xr,_.eB(),b,void 0,
!0);a=_.Dh(a)||!1;b.U=a;_.dC=new eC(b)}};_.iC=function(a){if(_.p.performance&&_.p.performance.memory){var b=_.p.performance.memory,c={};0==b.totalJSHeapSize||isNaN(b.totalJSHeapSize)||[["heapSizeLimit",b.jsHeapSizeLimit],["heapSize",b.totalJSHeapSize],["heapUsed",b.usedJSHeapSize]].forEach(function(d){isNaN(d[1])||(c[d[0]]=Math.round(d[1]/gC))});_.hC(a,[c])}};
_.lC=function(a){var b=document,c={};if(a.g==_.jC){var d=kC(b,"style[data-href]");c.cssSize=d}d=_.p.css_size||0;b=kC(b,"style[data-late-css]");c.lateCssSize=b-d;_.p.css_size=b;_.hC(a,[c])};kC=function(a,b){var c=0;_.u(a.querySelectorAll(b),function(d){c+=d.textContent.length});return isNaN(c)?0:c};
_.rC=function(a,b){var c={};for(d in mC)c[d]=new nC(mC[d]);_.p.performance&&_.p.performance.getEntriesByType&&_.p.performance.now&&_.p.performance.getEntriesByType("resource").forEach(function(g){var h=g.initiatorType;h&&h in mC&&"img"!=h&&(oC(c.all,g,b),oC(c[h],g,b))});pC(c);var d=[];for(var e in c){var f=qC(c[e],a,e);f&&d.push(f)}_.hC(a,d)};
pC=function(a){var b=_.dC;b=_.sC?_.p.iml_start:_.tC(b);for(var c=_.B(document.getElementsByTagName("img")),d=c.next();!d.done;d=c.next())if(d=d.value,d.hasAttribute("data-iml")){var e=Number(d.getAttribute("data-iml")),f=Math.max(e-b,0);uC(a.all,b,e,f,null);uC(a.img,b,e,f,null);"true"===d.getAttribute("data-atf")&&uC(a.aboveFold,b,e,f,null)}};_.q("sy1c");
var aC=function(a){_.z.call(this,a)};_.E(aC,_.z);
var XB={};
var bC={xr:241,eq:!1};
var cC=function(a,b,c,d,e,f,g){_.OB.call(this,a,_.xB,b,_.jB,c,d,e,void 0,f,g)};_.E(cC,_.OB);
var wC;wC=new _.pg(function(a){_.vC=a});
_.xC=function(a){_.z.call(this,a)};_.E(_.xC,_.z);
var yC=function(a){_.z.call(this,a)};_.E(yC,_.z);yC.prototype.cb=function(){return _.L(this,2)};
var BC=function(a){_.z.call(this,a,-1,zC,AC)};_.E(BC,_.z);var zC=[3],AC=[[1,4]];
var DC=function(a){_.z.call(this,a,-1,CC)};_.E(DC,_.z);var EC=function(a,b){_.Nb(a,2,b)},CC=[2];
var FC,GC;FC=function(a){this.g={};this.o=YB;this.l=a?a:new _.DB;this.j="";this.i=null;this.reset()};GC=function(a,b){b=b?b.mb():"";_.Ta(a.g,b)||(a.g[b]={});a.h=a.g[b];a.j=b};_.IC=function(a){a.i=1+Math.round(Math.random()*(HC-1))};FC.prototype.reset=function(){this.g={};this.h={};this.g[this.j]=this.h;this.s=Date.now()};
FC.prototype.flush=function(a){_.Oa(this.g,function(b,c){b=JC(this,b);0<_.kB(b,BC,2).length&&(c&&_.D(b,5,c),c=this.l.clone(),null!=this.i&&_.D(c,12,this.i),b=b.mb(),_.D(c,8,b),a.log(c))},this);this.reset()};
var JC=function(a,b){var c=new DC;if(_.Ua(b))return c;var d=function(f){var g=[];_.Oa(f,function(h,l){var m=new yC;l=_.D(m,1,Number(l));h=_.D(l,2,h);g.push(h)});return g},e=a.o;_.D(c,1,a.s);EC(c,function(f){var g=[];_.Oa(f,function(h,l){var m=new BC;l=e(l);var n=AC[0];_.Fh(m);(n=_.Bh(m,n))&&1!==n&&void 0!==l&&(m.g&&n in m.g&&(m.g[n]=void 0),_.D(m,n,void 0));m=_.D(m,1,l);h=d(h);h=_.Nb(m,3,h);g.push(h)});return g}(b));return c},KC=function(a,b,c){var d=a.h;d=null!==d&&b in d?d[b]:void 0;d||(d={},a.h[b]=
d);a=String(c);b=null!==d&&a in d?d[a]:void 0;d[a]=b?b+1:1};
var LC=function(a,b){this.h=a;this.g=new FC(b)};LC.prototype.flush=function(){this.g.flush(this.h)};var MC=function(a,b){this.h=a;this.g=b},NC=function(a,b){this.h=a;this.g=b};
var HC,OC,UC,XC,VC,eC;HC=Math.pow(2,31)-1;OC=function(a,b){this.h=a;this.g=b};_.jC=new OC("PL",1);_.PC=new OC("MS",2);_.QC=new OC("VT",3);_.RC=function(a,b,c,d,e,f){b.forEach(function(){});this.u=!1;this.h=[];this.s=[];this.J=[];this.O=a;this.i=[b];this.l=[];this.j=!1;this.g=d;this.W=new LC(a,f);a=this.o(c);e&&_.D(a,3,e);GC(this.W.g,a)};_.RC.prototype.o=function(a){var b=new _.xC;a=_.D(b,2,a+"_"+this.g.h);return _.D(a,1,this.g.g)};_.hC=function(a,b){_.Ea(a.l,b)};
_.SC=function(a,b,c){var d={};d[b]=c;_.hC(a,[d])};UC=function(a){a.i.forEach(function(b){var c=b[0];c=c[Object.keys(c)[0]];for(var d=1;d<b.length;d++){var e=b[d],f;for(f in e){var g=Math.round(e[f]-c);if(_.TC(a,f,g)){if(f in XB&&XB[f]){var h=new NC(f,a.W.g);KC(h.g,h.h,g)}}else 0>g&&(a.u=!0)}}});a.l.forEach(function(b){for(var c in b)if(c in XB&&XB[c]){var d=new MC(c,a.W.g);KC(d.g,d.h,Math.round(b[c]))}})};
_.WC=function(a){wC.then(function(){if(!a.j){UC(a);if(0<a.h.length&&(!a.u||WB())){for(var b={},c=_.B(a.h),d=c.next();!d.done;d=c.next()){var e=_.B(d.value);d=e.next().value;e.next();e=e.next().value;d="(< 0)"===e&&"ntsrt"===d?"badStatSrtNeg":"(< 0)"===e&&"req"===d?"badStatRqtNeg":"(< 0)"===e&&"rcv"===d?"badStatRcvNeg":"(< 0)"===e&&"nsfs"===d?"badStatNsfsNeg":"(< 0)"===e&&"ntplt0"===d?"badStatNtplt0Neg":"(> max)"===e&&"ol"===d?"badStatPageLoadMax":"(> max)"===e&&"renderDone"===d?"badStatRenderDoneMax":
"badStatUnknown";b[d]=d in b?b[d]+1:1}for(var f in b)c=new MC(f,a.W.g),KC(c.g,c.h,b[f]);"badStatUnknown"in b&&!("badStatPageLoadMax"in b)&&(b=VC(a),_.oc(b,Error("jb`bad_clearcut_stat")))}a.W.flush();a.O.flush(void 0,(0,_.r)(a.G,a));a.j=!0}})};_.RC.prototype.G=function(a,b){var c=["cc-failure: "+a];b&&c.push(", "+b);XC(this,c.join(""));"net-send-failed"!=a&&(a=VC(this),_.oc(a,Error("jb`bad_clearcut_submit")))};
_.TC=function(a,b,c){return 0>c?(a.h.push([b,String(c),"(< 0)"]),!1):6E5<c?(a.h.push([b,String(c),"(> max)"]),!1):!0};XC=function(a,b){a.s.push(b)};
VC=function(a){function b(h,l){return h+"="+JSON.stringify(l)}var c="reportType="+a.g.h,d=b("invalid_metrics",a.h.map(function(h){var l=_.B(h);h=l.next().value;var m=l.next().value;l=l.next().value;return h+"="+m+" "+l})),e=b("stats",a.l),f=b("timelines",a.i),g=b("extra",a.s);a="timings=["+a.J.map(function(h){return[h.label,JSON.stringify(h.timing)].join(": ")}).join(", ")+"]";return["",c,d,e,f,g,a].join("\n")};
eC=function(a){var b=bC.wy,c=bC.Qx,d=bC.Tx,e=bC.py,f=_.Gh(a.l,_.BB,1);var g=_.Gh(f,_.zB,11)||new _.zB;var h=_.Aj("cfb2h").oa();g=_.D(g,7,h);_.Hh(f,11,g);_.QB(a,f);this.i=a;this.o=b;this.j=c;this.g=null;this.h=d;this.l=e};_.tC=function(a){null!=a.h?(a=a.h,a=WB()?a-window.performance.timing.navigationStart:a):a=window.cc_latency_start_time;return a};_.YC=function(a,b){var c=_.dC,d=[{"":_.ZB()}];return new _.RC(c.i,d,a,b,c.o,c.j)};
var $B=!1;
var gC,ZC,$C,nC,oC,uC,qC,mC;gC=Math.pow(2,20);_.sC=!1;ZC=function(a,b,c,d){this.g=a;this.j=b;this.h=c;this.i=d};$C=function(a,b,c,d){this.start=a;this.end=b;this.duration=c;this.g=d};nC=function(a){this.type=a;this.entries=[];this.start=Infinity;this.end=-Infinity;this.g=0};oC=function(a,b,c){b.responseEnd>c||uC(a,b.startTime,b.responseEnd,b.duration,"transferSize"in b?b.transferSize:null)};uC=function(a,b,c,d,e){b=new $C(b,c,d,e);0>=b.end||0>b.duration||a.entries.push(b)};
qC=function(a,b,c){if(0==a.entries.length){var d={};return d[a.type.g]=0,d}var e=0;a.entries.forEach(function(v){a.start=Math.min(a.start,v.start);a.end=Math.max(a.end,v.end);a.g+=v.duration;0===v.g&&(e+=1)});d=a.entries.length;for(var f=a.end-a.start,g=a.g/a.entries.length,h=!1,l=_.B([[c+"ResourceLoadTime",f],[c+"AverageResourceLoadTime",g]]),m=l.next();!m.done;m=l.next()){var n=_.B(m.value);m=n.next().value;n=n.next().value;h=!_.TC(b,m,n)||h}if(h)return XC(b,a.entries.reduce(function(v,y){return v+
["{start: "+y.start,"end: "+y.end,"duration: "+y.duration,"transferSize: "+y.g+"},"].join(", ")},c+" entries: ")),null;b={};b[a.type.g]=d;b[a.type.j]=f;b[a.type.h]=g;b[a.type.i]=e;return b};mC={};mC.all=new ZC("allResourceCount","allResourceLoadTime","allResourceAverageLoadTime","allResourceCacheHitCount");mC.aboveFold=new ZC("aboveFoldResourceCount","aboveFoldResourceLoadTime","aboveFoldResourceAverageLoadTime","aboveFoldResourceCacheHitCount");
mC.css=new ZC("cssResourceCount","cssResourceLoadTime","cssResourceAverageLoadTime","cssResourceCacheHitCount");mC.img=new ZC("imgResourceCount","imgResourceLoadTime","imgResourceAverageLoadTime","imgResourceCacheHitCount");mC.link=new ZC("linkResourceCount","linkResourceLoadTime","linkResourceAverageLoadTime","linkResourceCacheHitCount");mC.script=new ZC("scriptResourceCount","scriptResourceLoadTime","scriptResourceAverageLoadTime","scriptResourceCacheHitCount");

_.t();

var hH=function(){return!(!window.performance||!window.performance.timing)},jH=function(a,b,c,d,e){0>=c||0>=d||_.TC(a,b,d-c)&&(e||iH(a,c))(b,d)},kH=function(a){if(hH()){var b=_.dC,c=window.performance.timing;var d=null!=b.h?b.h:hH()?window.performance.timing.navigationStart:void 0;b=null!=b.l?b.l:hH()?window.performance.timing.responseStart:void 0;a.J.push({label:"addNavigationTimings",timing:c});jH(a,"dns",c.domainLookupStart,c.domainLookupEnd);jH(a,"con",c.connectStart,c.connectEnd);jH(a,"req",
c.requestStart,b);jH(a,"rcv",b,c.responseEnd);if(0<d){var e=iH(a,d);jH(a,"ntsrt",d,b,e);jH(a,"nsfs",d,c.fetchStart,e);jH(a,"ntplt0",d,c.loadEventStart,e);jH(a,"ntplt1",d,c.loadEventEnd,e)}}},lH=function(a){if(_.p.performance&&_.p.performance.getEntriesByType&&0!=_.p.performance.getEntriesByType("paint").length){a=iH(a,0);var b=_.p.performance.getEntriesByType("paint");b=_.B(b);for(var c=b.next();!c.done;c=b.next())switch(c=c.value,c.name){case "first-paint":a("fp",c.startTime+c.duration);break;case "first-contentful-paint":a("fcp",
c.startTime+c.duration)}}},mH=function(a){var b;return _.p.PerformanceObserver&&_.p.PerformanceObserver.prototype.takeRecords&&(null==(b=_.p.PerformanceObserver.supportedEntryTypes)?void 0:b.includes(a))},nH=function(a){if(!mH(a))return[];var b=new PerformanceObserver(function(){});b.observe({type:a,buffered:!0});a=b.takeRecords();b.disconnect();return a},pH=function(a){if(!oH){var b=nH("first-input");0!==b.length&&(b=b[0].processingStart-b[0].startTime,0<=b&&6E5>=b&&(_.hC(a,[{nativeFirstInputDelay:b}]),
oH=!0))}},qH=function(a){var b=nH("largest-contentful-paint");0<b.length&&(b=b[b.length-1].startTime,iH(a,0)("lcp",b));pH(a);if(mH("layout-shift")){b=nH("layout-shift").filter(function(d){return!d.hadRecentInput}).map(function(d){return d.value}).reduce(function(d,e){return d+e},0);var c={};c.cls=Math.floor(1E3*b);_.hC(a,[c])}},rH=function(){var a=_.YC("dR8Q2",_.PC);_.IC(a.W.g);_.iC(a);_.zs&&_.SC(a,"animFps",1E3/(_.ys/_.xs));var b=[];if(!_.un.o&&null!=_.un.i){var c={};c.firstInputDelay=_.un.i;b.push(c);
_.un.o=!0}null!=_.un.g&&(c={},c.averageInputDelay=_.un.g,b.push(c));_.un.l||null==_.un.h||(c={},c.firstInputCodeLoadingDelay=_.un.h,b.push(c),_.un.l=!0);_.un.j=0;_.un.g=null;_.hC(a,b);pH(a);_.WC(a);(_.p.performance&&_.p.performance.memory||_.zs||mH("first-input"))&&setTimeout(rH,18E5)},tH=function(){var a=sH(_.dC).find(function(b){return"ol"in b});return a?a.ol:Infinity},uH=[1,2,3,4],vH=function(a){_.z.call(this,a,-1,uH)};_.E(vH,_.z);
var iH=function(a,b){var c=[{"":b}];a.i.push(c);return function(d,e){var f={};f[d]=e||_.ZB();c.push(f)}},wH=function(a,b){var c=new vH;b=_.D(c,3,_.gb(b||[]));_.RB(a.i,b)},sH=function(a){return[{"":_.tC(a)}].concat(_.Zc(window.cc_latency))},xH=function(){var a=_.dC;if(!a.g){var b=window.prt;if(0<b){var c={};window.cc_latency.push((c.prt=b,c))}b=sH(a);a.g=new _.RC(a.i,b,window.cc_aid,_.jC,a.o,a.j)}return a.g.j?null:a.g},oH=!1;_.q("_latency");
_.fC();_.na().fb(function(){var a=_.Aj("fPDxwd");a.mc()&&wH(_.dC,a.i().map(function(b){return b.number()}));(0,_.vC)();if(a=xH())_.IC(a.W.g),_.rC(a,tH()),kH(a),lH(a),qH(a),_.iC(a),_.lC(a),_.WC(a);setTimeout(rH,3E5)});

_.t();

_.q("FCpbqb");
_.na().fb(function(a){_.Xb(_.Iq,a)});

_.t();

_.q("WhJNk");
var bH=new Date(1262304E6),cH=new Date(12779424E5),dH=new Date(129384E7),eH=function(a,b){b?a.push(Math.round((b-bH.getTime())/6E4)):a.push(null)},fH=function(a,b,c){a.push(b.getTimezoneOffset()/15+56);a:{var d=b.getTimezoneOffset();var e=c.getTimezoneOffset();if(d!=e)for(b=b.getTime()/6E4,c=c.getTime()/6E4;b<=c;){var f=(b>>1)+(c>>1),g=6E4*f,h=(new Date(g+3E4)).getTimezoneOffset();if((new Date(g-3E4)).getTimezoneOffset()!=h){d=g;break a}if(h==d)b=f+1;else if(h==e)c=f-1;else break}d=null}eH(a,d)};
var gH=function(a){_.R.call(this,a.I);this.g=a.C.window;var b=void 0===b?!1:b;if(_.hB.isEnabled()&&(void 0===_.hB.get("OTZ")||b)){a=_.hB.set;b=[];var c=new Date;eH(b,c.getTime());b.push(c.getTimezoneOffset()/15+56);fH(b,bH,cH);fH(b,cH,dH);a.call(_.hB,"OTZ",b.join("_"),{vj:2592E3,path:"/",domain:void 0,As:"https:"===this.g.get().location.protocol})}};_.E(gH,_.R);gH.F=_.R.F;gH.D=function(){return{C:{window:_.yk}}};_.S(_.Iq,gH);

_.t();

_.As=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};_.k=_.As.prototype;_.k.clone=function(){return new _.As(this.x,this.y)};_.k.Ka=function(a){return a instanceof _.As&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};_.k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};_.k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};_.k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
_.Bs=function(a){if(1==a.nodeType){try{var b=a.getBoundingClientRect()}catch(c){b={left:0,top:0,right:0,bottom:0}}return new _.As(b.left,b.top)}a=a.changedTouches?a.changedTouches[0]:a;return new _.As(a.clientX,a.clientY)};_.Cs=function(a,b){a=_.Bs(a);b=_.Bs(b);return new _.As(a.x-b.x,a.y-b.y)};_.q("sya");
var Es,Fs,Gs,Hs,Is,Js,Ks,Ms,Ns,Os,Ss,Rs;
(function(){for(var a=["ms","moz","webkit","o"],b=0;b<a.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame=window[a[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[b]+"CancelAnimationFrame"]||window[a[b]+"CancelRequestAnimationFrame"];if(!window.requestAnimationFrame){var c=0;window.requestAnimationFrame=function(d){var e=(new Date).getTime(),f=Math.max(0,16-(e-c));c=e+f;return window.setTimeout(function(){d(e+f)},f)};window.cancelAnimationFrame||(window.cancelAnimationFrame=
function(d){clearTimeout(d)})}})();_.Ds=function(){};Es=[[],[]];Fs=0;Gs=!1;Hs=null;Is=0;Js=0;Ks=0;_.Ls=0;Ms=0;Ns=function(a){this.g=this.h=void 0;this.i=!1;this.j=a;this.l=_.Ds};Ns.prototype.measure=function(a){this.h=a;return this};Ns.prototype.ya=function(a){this.g=a;return this};Ns.prototype.Da=function(){this.i=!0;return this};_.Ps=function(a){var b={measure:a.h,ya:a.g,Yj:a.l,Da:a.i};a=a.j;b.Yj||(b.Yj=_.Ds);return Os(b,a)};_.Qs=function(a){return new Ns(a)};
Os=function(a,b){var c=Ms++,d=Math.max(a.measure?a.measure.length:0,a.ya?a.ya.length:0),e={id:c,vm:a.measure,xm:a.ya,context:b,nb:[]},f=e;return function(){var g=0!==f.P;g&&(f=Object.assign({P:0},e));b||(f.context=this);f.nb=Array.prototype.slice.call(arguments);d>arguments.length&&f.nb.push(new a.Yj);g&&(g=Fs,!a.Da||0==_.Ls||a.measure&&1!=_.Ls||(g=(g+1)%2),Es[g].push(f));return Rs()}};
Ss=function(a,b){Gs=!1;var c={};_.Ls=1;for(var d=0;d<a.length;++d){var e=a[d];e.nb[e.nb.length-1]&&(e.nb[e.nb.length-1].now=b);if(e.vm){e.P=1;try{e.vm.apply(e.context,e.nb)}catch(f){c[d]=!0,_.ea(f)}}}_.Ls=2;for(d=0;d<a.length;++d)if(e=a[d],e.nb[e.nb.length-1]&&(e.nb[e.nb.length-1].now=b),!c[d]&&e.xm){e.P=2;try{e.xm.apply(e.context,e.nb)}catch(f){_.ea(f)}}0<Is&&1<b&&(a=b-Is,500>a&&(_.ys+=a,_.xs++,_.zs=!0,100<a&&Js++,Ks<a&&(Ks=a)));Is=Gs&&1<b?b:0};
Rs=function(){Gs||(Gs=!0,Hs=new Promise(function(a){window.requestAnimationFrame(function(b){var c=Es[Fs];Fs=(Fs+1)%2;try{Ss(c,b)}finally{_.Ls=0,c.length=0}a()})}));return Hs};

_.t();

_.q("lwddkf");
_.zK=function(a){_.R.call(this,a.I);this.o=a.ba.request;this.u=yK(this);this.g=a.C.window.get();this.s=_.Qy(this.g);this.W=this.j=null;this.l=this.g!=this.g.parent;this.l||(this.i=0,this.s.listen("resize",this.h,!1,this),this.h())};_.E(_.zK,_.R);_.zK.F=_.R.F;_.zK.D=function(){return{ba:{request:_.nx},C:{window:_.yk}}};_.zK.prototype.h=function(){this.l||(this.i&&clearTimeout(this.i),this.i=setTimeout(this.u,3E3))};
var yK=function(a){return _.Ps(_.Qs().measure(function(){var b=_.RH(a.g,!0),c=b.mb();a.j&&b==a.j||(a.j=c,b=_.kx(a.o,_.Us()+"/browserinfo",b),_.sw(b.g,"FAIL"),b.send().then(function(){},function(d){throw d;}))}))};_.S(_.Mm,_.zK);

_.t();

_.q("EFQ78c");
var AK=function(a){_.z.call(this,a)};_.E(AK,_.z);AK.qa="af.httprm";
var BK=function(a){_.R.call(this,a.I);this.s=a.ba.request;this.u=a.C.pp;this.h=this.g=-1;this.o=this.l=this.j=null;a=this.s.g;_.gi(a,"j",this.Vq,!1,this);_.gi(a,"data:af.httprm",this.ar,!1,this);_.PH=this;this.i=new _.si(6E4);_.gi(this.i,"tick",this.bt,!1,this);this.start()};_.E(BK,_.R);BK.F=_.R.F;BK.D=function(){return{ba:{request:_.nx},C:{pp:_.zK}}};_.k=BK.prototype;_.k.start=function(){this.i.start()};_.k.Is=function(){var a=this.Kf(),b=this.Lf();return 1==a||1==b||!1};
_.k.Kf=function(){return-1==this.g?0:250<this.g?1:2};_.k.Lf=function(){return-1==this.h?0:5E-4>this.h?1:2};_.k.bt=function(){var a=this.Kf(),b=this.Lf();if(a!=this.j||b!=this.l||0!=this.o)this.u.h(),this.j=a,this.l=b,this.o=0;if(.2>Math.random()){a=_.Us()+"/gen204/?tmambps="+this.h+"&rtembps=-1&rttms="+this.g;if(b=navigator.connection||navigator.mozConnection||navigator.webkitConnection)a+="&ct="+b.type,"downlinkMax"in b&&(a+="&dm="+b.downlinkMax);_.mv(new Image,a)}};
_.k.Vq=function(a){if(a=a.g){var b=a.ql-a.zn,c=b-a.Bh.g;0<b&&0<c&&(a=a.R/1E3/c,this.h=-1==this.h?a:.3*a+.7*this.h)}};_.k.ar=function(a){a=_.L(new AK(a.data),3)||-1;0<a&&(this.g=-1==this.g?a:.3*a+.7*this.g)};_.S(_.Nm,BK);

_.t();

}catch(e){_._DumpException(e)}
}).call(this,this.default_VerifiedReviewsBadgeUi);
// Google Inc.
