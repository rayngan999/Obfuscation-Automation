window.googletag&&typeof googletag._gpt_js_load_2_=='function'&&googletag._gpt_js_load_2_(function(_){var VG=function(a){if(a instanceof _.Yl)if(a instanceof _.Zl)a=a.j;else throw Error("wrong type");else a=_.pk(a);return a},WG=function(a){var b=a.ownerDocument,c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","18");c.setAttribute("x2","28");c.setAttribute("y2","12");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","12");b.setAttribute("x2","34");b.setAttribute("y2","18");a.appendChild(b)},XG=function(a){var b=a.ownerDocument,c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","12");c.setAttribute("x2","28");c.setAttribute("y2","18");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","18");b.setAttribute("x2","34");b.setAttribute("y2","12");a.appendChild(b)},YG=function(a,b,c,d){try{var e=c()}catch(f){if(!a.m(b,f,a.j,d,"gpt_exception"))throw f;}return e},ZG=function(a,b,c){return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return YG(a,b,function(){return c.apply(void 0,e)},void 0)}},$G=function(a,b){if((0,_.Dk)())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=_.Bk(b)},aH={capture:!0},bH=function(a,b){return new _.Xd(a.x-b.x,a.y-b.y)},cH=function(a){var b=a.document,c=0;if(b){c=b.body;var d=b.documentElement;if(!d||!c)return 0;a=_.km(a).height;if(_.jm(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}}return c},dH=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},eH=function(a,b){a&&(a=a.parentNode);for(var c=0;a&&20>=c;){if(b(a))return a;a=a.parentNode;c++}return null},fH=function(a,b){for(a=[a];a.length;){var c=a.shift();!1!==b(c)&&(c=_.mf(c.children||c.childNodes||[],function(d){return 1===d.nodeType}),c.length&&a.unshift.apply(a,_.$c(c)))}},gH=function(a,b){if("length"in a.style){a=a.style;for(var c=a.length,d=0;d<c;d++){var e=a[d];b.call(void 0,a[e],e,a)}}else a=_.Xm(a.style.cssText),_.Rc(a,b,void 0)},hH=function(a,b){b=void 0===b?function(){return!0}:b;var c={},d=/!\s*important/i;gH(a,function(e,f){!d.test(e)&&b(f,e)&&(e+=" !important");c[f]=e});a.style.cssText=_.Vm(c)},iH=/\.proxy\.googleprod\.com(:\d+)?$/,jH=/.*domain\.test$/,kH=/\.prod\.google\.com(:\d+)?$/,lH=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},mH=function(a){if(1==a.nodeType)return _.Rn(a);a=a.changedTouches?a.changedTouches[0]:a;return new _.Xd(a.clientX,a.clientY)},nH=function(a,b){if(b instanceof _.dm){var c=b.height;b=b.width}else throw Error("missing height argument");a.style.width=_.Tn(b,!0);a.style.height=_.Tn(c,!0)},oH=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;if(c)if(/^\d+px?$/.test(c))a=parseInt(c,10);else{b=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=b;a.runtimeStyle.left=d;a=+c}else a=0;return a},pH=function(a,b){if(_.Vk){var c=oH(a,b+"Left"),d=oH(a,b+"Right"),e=oH(a,b+"Top");a=oH(a,b+"Bottom");return new _.un(e,d,a,c)}c=_.Mn(a,b+"Left");d=_.Mn(a,b+"Right");e=_.Mn(a,b+"Top");a=_.Mn(a,b+"Bottom");return new _.un(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))},rH=function(a,b,c,d,e){var f=[];_.Rc(a,function(g,h){(g=qH(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)},qH=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(qH(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(rH(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},sH=function(){this.o="&";this.m={};this.l=0;this.j=[]},uH=function(a,b){var c="https://pagead2.googlesyndication.com"+b,d=tH(a)-b.length;if(0>d)return"";a.j.sort(function(m,n){return m-n});b=null;for(var e="",f=0;f<a.j.length;f++)for(var g=a.j[f],h=a.m[g],k=0;k<h.length;k++){if(!d){b=null==b?g:b;break}var l=rH(h[k],a.o,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.o;break}b=null==b?g:b}}a="";null!=b&&(a=e+"trn="+b);return c+a},tH=function(a){var b=1,c;for(c in a.m)b=c.length>b?c.length:b;return 3997-b-a.o.length-1},vH=function(){this.m=_.Oc(23);this.o=Math.random()};vH.prototype.j=function(a,b,c){if(this.o<(c||this.m))try{if(b instanceof sH)var d=b;else d=new sH,_.Rc(b,function(f,g){var h=d,k=h.l++,l={};l[g]=f;f=[l];h.j.push(k);h.m[k]=f});var e=uH(d,"/pagead/gen_204?id="+a+"&");e&&_.En(_.I,e)}catch(f){}};var wH=function(a,b,c){c=void 0===c?null:c;var d=function(f){try{var g=JSON.parse(f.data)}catch(h){return}!g||"sth"!==g.googMsgType||c&&/[:|%3A]javascript\(/i.test(f.data)&&!c(g,f)||b(g,f)};_.re(a,"message",d);var e=!1;return function(){var f=!1;e||(e=!0,f=_.Se(a,"message",d));return f}},xH=/^(true|false)$/i,yH=function(a,b,c,d,e){if(!(0>=e)&&(c.googMsgType=b,a.postMessage(JSON.stringify(c),d),a=a.frames))for(var f=0;f<a.length;++f)1<e&&yH(a[f],b,c,d,--e)},zH=function(a){return.05>Math.abs(_.fv(a)-1)},AH=function(a){return{name:a,$f:{predicate:xH,nullOnInvalid:!0}}},BH=function(a){var b={bottom:"auto",clear:"none",display:"inline","float":"none",height:"auto",left:"auto",margin:0,"margin-bottom":0,"margin-left":0,"margin-right":"0","margin-top":0,"max-height":"none","max-width":"none",opacity:1,overflow:"visible",padding:0,"padding-bottom":0,"padding-left":0,"padding-right":0,"padding-top":0,position:"static",right:"auto",top:"auto","vertical-align":"baseline",visibility:"visible",width:"auto","z-index":"auto"};_.Jj(_.x(Object,"keys").call(Object,b),function(c){var d=a.style[_.Lk(c)];("undefined"!==typeof d?d:a.style[_.Jn(a,c)])||_.Kn(a,c,b[c])});hH(a)},CH=function(a){var b=812==a.screen.height&&375==a.screen.width||812==a.screen.width&&375==a.screen.height||414==a.screen.width&&896==a.screen.height||896==a.screen.width&&414==a.screen.height;return null!=(a.navigator&&a.navigator.userAgent&&a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/))&&b},DH={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1,NOSCRIPT:1},EH={IMG:" ",BR:"\n"},FH=function(a,b,c,d){if(!(a.nodeName in DH))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in EH)d&&"IMG"==a.nodeName&&a.hasAttribute("alt")&&b.push(" "+a.getAttribute("alt")),b.push(EH[a.nodeName]);else for(a=a.firstChild;a;)FH(a,b,c,d),a=a.nextSibling},GH=/ \xAD /g,HH=/\xAD/g,IH=/\u200B/g,JH=/ +/g,KH=/^\s*/;var NH=function(a){var b=LH(_.mm(_.fm(a)))||[];return!!eH(a,function(c){if(!_.ja(c)||1!=c.nodeType)return!1;var d=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector;return!d||0<=_.ea(b,c)||_.Lj(_.Em(MH),function(e){return d.call(c,e)})})},LH=function(a){try{return _.mf(_.kf(a.googletag.pubads().getSlots(),function(b){return a.document.getElementById(b.getSlotElementId())}),function(b){return null!=b})}catch(b){}return null},MH={Me:"ins.adsbygoogle-ablated-ad-slot",Oe:"ins.adsbygoogle",Ne:"iframe[id^=aswift_],iframe[id^=google_ads_frame]",$e:".google-auto-placed",af:'ins.adsbygoogle[data-anchor-shown="true"]',cf:"iframe[id^=google_ads_iframe]",ef:"div[id^=div-gpt-ad]",hf:"ins.adsbygoogle[data-ad-format=autorelaxed]",jf:"div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",df:"div.googlepublisherpluginad"};var QH=function(a,b){var c=this;this.o=a;this.j=!1;this.l=b;this.m=ZG(this.l,264,function(d){c.j&&(OH||(d=Date.now()),c.o(d),OH?PH.call(_.I,c.m):_.I.setTimeout(c.m,17))})};QH.prototype.start=function(){this.j||(this.j=!0,OH?PH.call(_.I,this.m):this.m(0))};QH.prototype.stop=function(){this.j=!1};var PH=_.I.requestAnimationFrame||_.I.webkitRequestAnimationFrame,OH=!!PH&&!/'iPhone'/.test(_.I.navigator.userAgent);var RH=function(a,b,c,d){this.j=a;this.A=b;this.J=c;this.progress=0;this.m=null;this.o=!1;this.G=[];this.C=null;this.l=new QH((0,_.zj)(this.hd,this),d)};_.q=RH.prototype;_.q.hd=function(a){if(this.o)this.l.stop();else{null===this.m&&(this.m=a);this.progress=(a-this.m)/this.J;1<=this.progress&&(this.progress=1);a=this.C?this.C(this.progress):this.progress;this.G=[];for(var b=0;b<this.j.length;b++)this.G.push((this.A[b]-this.j[b])*a+this.j[b]);this.Pc();1==this.progress&&(this.l.stop(),this.Oc())}};_.q.Oc=function(){};_.q.Pc=function(){};_.q.stop=function(){this.o=!0};_.q.reset=function(a,b,c){this.m=null;this.j=a;this.A=b;this.J=c;this.progress=0};var TH=function(a){return a*a*a},UH=function(a){a=1-a;return 1-a*a*a};var VH=function(a,b,c,d,e,f,g,h){RH.call(this,[b],[c],d,f);this.Y=a;this.F=e;this.B=g?g:null;this.C=h||null};_.P(VH,RH);VH.prototype.Pc=function(){var a={};a[this.F]=this.G[0]+"px";_.Kn(this.Y,a)};VH.prototype.Oc=function(){this.B&&this.B()};var XH=function(a,b,c,d){_.is.call(this);var e=this;this.j=a;this.o=b;this.C=c;this.l=d?aH:{};_.re(this.j,this.o,this.C,this.l);_.Eh(this,function(){return void WH(e)})};_.P(XH,_.is);var WH=function(a){a.j&&_.Se(a.j,a.o,a.C,a.l)},YH=function(a){this.o=a;this.reset()};YH.prototype.add=function(a){var b=Date.now();this.j.push({time:b,coords:a});for(a=this.m;a<this.j.length;++a)if(b-this.j[a].time>=this.o)delete this.j[a];else break;this.m=a;a>=this.j.length&&this.reset()};YH.prototype.reset=function(){this.j=[];this.m=0};var $H=function(a,b,c,d){_.is.call(this);var e=this;this.C=a;this.target=b;this.W=c||b;this.oa=d||100;this.J=this.B=this.ca=!1;this.A=this.j=this.o=this.l=this.V=this.F=this.K=this.U=null;this.sa=new XH(this.W,"mousedown",function(f){0==f.button&&ZH(e,f)},!0);_.js(this,this.sa);this.ya=new XH(this.W,"touchstart",function(f){return ZH(e,f)},!0);_.js(this,this.ya);this.ta=new XH(this.W,"click",function(f){e.ca?e.ca=!1:f.stopPropagation()},!0);_.js(this,this.ta)};_.P($H,_.is);var aI=function(a){a=a.touches&&a.touches[0]||a;return new _.Xd(a.clientX,a.clientY)};$H.prototype.$=function(){if(this.l&&this.o&&this.j){var a=this.l,b=bH(this.j,this.o);var c=new _.Xd(a.x+b.x,a.y+b.y);a=this.target;c instanceof _.Xd?(b=c.x,c=c.y):(b=c,c=void 0);a.style.left=_.Tn(b,!1);a.style.top=_.Tn(c,!1)}};$H.prototype.ba=function(){};$H.prototype.R=function(){var a=this.target,b=_.qm(a),c=mH(a);b=mH(b);c=new _.Xd(c.x-b.x,c.y-b.y);a=pH(a,"margin");return bH(c,new _.Xd(a.left,a.top))};var ZH=function(a,b){a.B&&bI(a);a.B=!0;a.l=a.R();a.o=aI(b);a.j=a.o;a.A=new YH(a.oa);a.A.add(a.o);a.U=new XH(a.C,"mousemove",(0,_.zj)(a.ka,a),!0);_.js(a,a.U);a.K=new XH(a.C,"touchmove",(0,_.zj)(a.ka,a),!0);_.js(a,a.K);a.F=new XH(a.C,"mouseup",(0,_.zj)(a.na,a),!0);_.js(a,a.F);a.V=new XH(a.C,"touchend",(0,_.zj)(a.na,a),!0);_.js(a,a.V)};$H.prototype.ka=function(a){if(this.B)if(a.preventDefault(),this.j=aI(a),this.A.add(this.j),this.J)this.$();else{var b=this.o,c=this.j;a=b.x-c.x;b=b.y-c.y;10<=Math.sqrt(a*a+b*b)&&(this.$(),this.J=!0)}};$H.prototype.na=function(a){this.J?(a.preventDefault(),this.j=aI(a),this.ba()):this.ca=!0;bI(this)};var bI=function(a){a.B=!1;a.J=!1;a.l=null;a.o=null;a.j=null;a.A=null;a.U&&WH(a.U);a.K&&WH(a.K);a.F&&WH(a.F);a.V&&WH(a.V)};var fI=function(a,b,c,d,e,f,g,h,k,l,m){_.is.call(this);var n=this;this.F=a;this.o=b;this.ca=c;this.J=d;this.pa=f||function(){};this.ga=g||function(){};this.U=h;this.oa=k;this.ka=l;this.na=m;_.Eh(this,function(){return cI(n,!0)});this.C=b.document.createElement("ins");_.Eh(this,function(){return n.C=null});this.V=this.A=this.B=!1;this.R=0;this.j=e;this.W=!1;this.l=this.ba=null;this.$=b.innerHeight;this.da="true"===this.F.scroll_detached;this.K="true"===this.F.dismissable;this.Ha="true"===this.F.draggable||"top"!=this.j;this.sa=this.F.expId||"";this.ta=this.F.qemId||"";a=parseInt(this.F.z_index_override,10);this.ia=isNaN(a)?null:a;this.ya=new _.hA(b);!this.K&&_.I.navigator.userAgent.match(/iPhone OS 7/)&&b.setInterval(function(){var p=n.o.innerHeight;if(2>Math.abs(p-460)||2>Math.abs(p-529))p<n.$&&2>Math.abs(_.gv(n.o)-n.R-68)&&(n.W=!0,n.A&&dI(n)),n.$=p},300);eI(this,this.C)};_.P(fI,_.is);var eI=function(a,b){BH(b);var c={"background-color":"#FAFAFA",display:"block",position:"relative","z-index":1,height:"5px","box-shadow":"top"==a.j?"rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px":"rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"};"top"==a.j&&(c.position="absolute",c.top=a.J.height+"px",c.width="100%");_.Zm(b,c);var d=a.o.document.createElement("span");_.z(_.mq)?d.appendChild(gI(a)):$G(d,_.Hn("top"==a.j?hI('<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>',!0):hI('<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>',!1)));var e=function(f){f.target===d&&(f.preventDefault&&f.preventDefault(),f.stopImmediatePropagation&&f.stopImmediatePropagation(),f.stopPropagation&&f.stopPropagation())};_.re(d,"click",e);_.Eh(a,function(){return _.Se(d,"click",e)});iI(a,d);b.className="ee";b.appendChild(d)},iI=function(a,b){var c={};a=(c.display="block",c.width="80px",c.height="45px",c[a.j]="0",c.left="0%",c.marginLeft="0px",c["pointer-events"]="none",c);c=b.getElementsByTagName("svg")[0];_.Zm(b,a);hH(c)},gI=function(a){switch(a.j){case "top":var b="dropShadowBottom";var c="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";var d="0";var e="up";var f=WG;break;case "bottom":b="dropShadowTop",c="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",d="25",e="down",f=XG}var g=a.o.document,h=g.createElementNS("http://www.w3.org/2000/svg","svg");h.style.setProperty("margin","0 0 0 0px","important");h.style.setProperty("position","absolute","important");h.style.setProperty(a.j,"0","important");h.style.setProperty("left","0%","important");h.style.setProperty("display","block","important");h.style.setProperty("width","80px","important");h.style.setProperty("height","30px","important");h.style.setProperty("transform","none","important");h.style.setProperty("pointer-events","initial","important");a=g.createElementNS("http://www.w3.org/2000/svg","defs");var k=g.createElementNS("http://www.w3.org/2000/svg","filter");k.setAttribute("id",b);k.setAttribute("filterUnits","userSpaceOnUse");k.setAttribute("color-interpolation-filters","sRGB");var l=g.createElementNS("http://www.w3.org/2000/svg","feComponentTransfer");l.setAttribute("in","SourceAlpha");l.setAttribute("result","TransferredAlpha");var m=g.createElementNS("http://www.w3.org/2000/svg","feFuncR");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncG");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncB");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");l.setAttribute("in","TransferredAlpha");l.setAttribute("stdDeviation","2");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feOffset");l.setAttribute("dx","0");l.setAttribute("dy","0");l.setAttribute("result","offsetblur");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feMerge");l.appendChild(g.createElementNS("http://www.w3.org/2000/svg","feMergeNode"));m=g.createElementNS("http://www.w3.org/2000/svg","feMergeNode");m.setAttribute("in","SourceGraphic");l.appendChild(m);k.appendChild(l);a.appendChild(k);h.appendChild(a);a=g.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",c);a.setAttribute("stroke","#FAFAFA");a.setAttribute("stroke-width","1");a.setAttribute("fill","#FAFAFA");a.style.setProperty("filter","url(#"+b+")");h.appendChild(a);b=g.createElementNS("http://www.w3.org/2000/svg","rect");b.setAttribute("x","0");b.setAttribute("y",d);b.setAttribute("width","80");b.setAttribute("height","5");b.style.setProperty("fill","#FAFAFA");h.appendChild(b);d=g.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("class",e);d.setAttribute("stroke","#616161");d.setAttribute("stroke-width","2px");d.setAttribute("stroke-linecap","square");f(d);h.appendChild(d);return h},hI=function(a,b){return b?'\n<svg style="margin: 0 0 0 0px; position: absolute; top:0;\nleft:0%; display: block; width: 80px;\nheight: 30px; transform: none;pointer-events: initial"\nxmlns="http://www.w3.org/2000/svg">\n<defs>\n<filter id="dropShadowBottom" filterUnits="userSpaceOnUse"\ncolor-interpolation-filters="sRGB">\n<feComponentTransfer in="SourceAlpha" result="TransferredAlpha">\n  <feFuncR type="discrete" tableValues="0.5"/>\n  <feFuncG type="discrete" tableValues="0.5"/>\n  <feFuncB type="discrete" tableValues="0.5"/>\n</feComponentTransfer>\n<feGaussianBlur in="TransferredAlpha" stdDeviation="2"/>\n<feOffset dx="0" dy="0" result="offsetblur"/>\n<feMerge>\n  <feMergeNode/>\n  <feMergeNode in="SourceGraphic"/>\n</feMerge>\n</filter>\n</defs>\n<path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z"\nstroke="#FAFAFA" stroke-width="1" fill="#FAFAFA"\nstyle="filter:url(#dropShadowBottom)"/>\n<rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"/>\n<g class="up" stroke="#616161" stroke-width="2px"\nstroke-linecap="square">'+a+"</g></svg>":'\n\n<svg style="margin: 0 0 0 0px; position: absolute; bottom:0;\nleft:0%; display: block; width: 80px;\nheight: 30px; transform: none; pointer-events: initial"\nxmlns="http://www.w3.org/2000/svg">\n<defs>\n<filter id="dropShadowTop" filterUnits="userSpaceOnUse"\ncolor-interpolation-filters="sRGB">\n<feComponentTransfer in="SourceAlpha" result="TransferredAlpha">\n  <feFuncR type="discrete" tableValues="0.5"/>\n  <feFuncG type="discrete" tableValues="0.5"/>\n  <feFuncB type="discrete" tableValues="0.5"/>\n</feComponentTransfer>\n<feGaussianBlur in="TransferredAlpha" stdDeviation="2"/>\n<feOffset dx="0" dy="0" result="offsetblur"/>\n  <feMerge>\n  <feMergeNode/>\n<feMergeNode in="SourceGraphic"/>\n</feMerge>\n</filter>\n</defs>\n<path d="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z"\nstroke="#FAFAFA" stroke-width="1" fill="#FAFAFA"\nstyle="filter:url(#dropShadowTop)"/>\n<rect x="0" y="25" width="80" height="5" style="fill:#FAFAFA"/>\n<g class="down" stroke="#616161" stroke-width="2px"\nstroke-linecap="square">'+a+"</g></svg>"},jI=function(a,b){if(_.z(_.mq)){for(var c=a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0],d;d=c.firstChild;)c.removeChild(d);switch(a.j){case "top":(b?XG:WG)(c);break;case "bottom":(b?WG:XG)(c)}}else a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0].innerHTML="top"==a.j?b?'<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>':'<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>':b?'<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>':'<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>'},kI=function(a,b,c,d){a.oa.j("flgr",{i:b,dc:a.A?"1":"0",fdc:c?"1":"0",ds:a.K?"1":"0",expId:a.sa,sc:a.da?"1":"0",off:d,vw:_.ae(a.o).clientWidth,req:a.ca.src,tp:a.j,h:a.J.height,w:a.J.width,qemId:a.ta},1)},dI=function(a){if(!a.B){var b=parseInt(a.l.style[a.j],10);if(b){a.B=!0;var c=-b/.1;"bottom"==a.j&&CH(a.o)&&YG(a.U,404,function(){return lI(a,"0px",c,"ease-out")});jI(a,!1);b=new VH(a.l,b,0,c,a.j,a.U,function(){a.B=!1;a.A=!1;a.V=!1;mI(a);a.l.setAttribute("data-anchor-status","displayed");a.l.setAttribute("data-anchor-shown",!0);jI(a,!1)},UH);a.na();b.o=!1;b.l.start()}else a.A=!1,a.V=!1}},cI=function(a,b){if(!a.B&&a.l){var c=parseInt(a.l.style[a.j],10),d=-a.J.height-(b?30:0),e=(c-d)/.1;"bottom"==a.j&&CH(a.o)&&YG(a.U,405,function(){return lI(a,"21px",e,"ease-in")});b||jI(a,!0);c===d?(a.A=!b,a.V=b):(a.B=!0,c=new VH(a.l,c,d,e,a.j,a.U,function(){a.B=!1;a.A=!b;(a.V=b)||jI(a,!0);b&&a.pa();a.l.setAttribute("data-anchor-status","dismissed")},TH),a.ka(),c.o=!1,c.l.start())}},pI=function(a,b){if("bottom"!==a.j&&"top"!==a.j)throw Error("unsupported reactive type");var c=function(f){f.preventDefault();a.B||(a.W=!0,a.A?dI(a):cI(a,a.K),kI(a,"c",!a.A,0))},d=a.C;_.re(d,"click",c);_.Eh(a,function(){return _.Se(d,"click",c)});_.Kn(b,{opacity:1});var e=a.o.document;e&&(a.l=b,a.Ha&&(a.ba=new ("top"==a.j?nI:oI)(a,e,a.J.height,b,a.C),_.js(a,a.ba)),e={position:"fixed",left:"0px"},e[a.j]=-a.J.height-30+"px",_.Kn(b,e),_.Zm(b,{overflow:"visible",background:"#FAFAFA"}),a.ya.addListener(function(f){var g=null==a.ia?2147483647:a.ia;_.Kn(b,{zIndex:null==f?g:Math.min(f,g)})}),dI(a))},lI=function(a,b,c,d){_.Kn(a.ca,{transition:c/1E3+"s","transition-timing-function":d,"margin-top":b})},mI=function(a){a.ga();a.ga=function(){}},qI=function(a,b,c,d,e){$H.call(this,b,d,e);this.pa=a;this.ia=c};_.P(qI,$H);qI.prototype.ba=function(){var a=this.pa;if(!a.B){var b=parseInt(a.l.style[a.j],10);b>=-(a.J.height/2)?(dI(a),kI(a,"d",!1,b)):(cI(a,a.K),kI(a,"d",!0,b))}};qI.prototype.$=function(){if(null!==this.l&&null!==this.o&&null!==this.j){var a=this.ga(this.l.y,bH(this.j,this.o).y);0<a&&(a=0);a<-this.ia&&(a=-this.ia);var b={};b[this.da()]=a+"px";_.Kn(this.target,b)}};var nI=function(a,b,c,d,e){qI.call(this,a,b,c,d,e)};_.P(nI,qI);nI.prototype.R=function(){return new _.Xd(0,parseInt(this.target.style.top,10))};nI.prototype.ga=function(a,b){return b-a};nI.prototype.da=function(){return"top"};var oI=function(a,b,c,d,e){qI.call(this,a,b,c,d,e)};_.P(oI,qI);oI.prototype.R=function(){return new _.Xd(0,parseInt(this.target.style.bottom,10))};oI.prototype.ga=function(a,b){return a-b};oI.prototype.da=function(){return"bottom"};var rI=function(a,b,c){_.is.call(this);var d=this;this.o=a;this.j=b;this.R=null;_.Eh(this,function(){return d.R=null});this.l=c};_.P(rI,_.is);var sI=function(a,b,c,d){if(!a.R){a.R=[];for(var e=a.o.parentElement;e;){a.R.push(e);if(a.l===e)break;e=e.parentNode&&1===e.parentNode.nodeType?e.parentNode:null}}e=a.R.slice();!c&&a.l===e[e.length-1]&&e.pop();var f;if(d)for(c=e.length-1;0<=c;--c)(f=e[c])&&b.call(a,f,c,e);else for(c=0;c<e.length;++c)(f=e[c])&&b.call(a,f,c,e)};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var tI=function(a,b,c){null!==b&&null!==_.kh(a.getAttribute("width"))&&a.setAttribute("width",b);null!==c&&null!==_.kh(a.getAttribute("height"))&&a.setAttribute("height",c);null!==b&&(a.style.width=b+"px");null!==c&&(a.style.height=c+"px")};var AI=function(a,b,c,d,e,f){rI.call(this,a,b,f);var g=this;this.B=d;this.qc=e;this.K=this.oa=this.da=0;this.wb=!1;this.ga=0;this.na=!1;this.C=null;this.W=this.$=!1;this.U=null;this.uc=pH(b.document.body,"padding");this.V=0;this.gb=this.F=!1;this.ba=!0;this.A=c;this.J=uI(this);this.ca=null;this.sa=this.ka=this.ia=this.fb=this.Rb=this.Tb=!1;this.yc=_.km(b||window).height/2;this.Ub=_.km(b||window).height;this.Ha=cH(b);this.pa=!1;vI(this);this.ib=ZG(this.B,266,function(){wI(g)});this.kb=ZG(this.B,267,function(){wI(g)});this.mb=ZG(this.B,268,function(){if(g.F&&g.l&&g.C){var h=g.C;h.R=_.gv(h.o)}h=_.gv(g.j);var k=h-g.da;xI(g,k);g.sa&&(0<k&&(g.K+=k),g.pa=g.Ha-h<=g.Ub,g.da=h);wI(g)});this.ob=ZG(this.B,269,function(){yI(g)});this.qb=ZG(this.B,270,function(h){zI(g,h)});this.tb=ZG(this.B,271,function(h){if(h&&h.touches){g.U="touchmove";g.V=h.touches.length;g.W=!0;wI(g);if(!g.wb&&h.touches&&0!=h.touches.length&&h.touches[0]){h=h.touches[0].pageY;var k=h-g.oa;g.oa=h;h=k}else h=0;0<h&&(g.K+=h);xI(g,h)}});this.vb=ZG(this.B,272,function(h){h&&h.touches&&h.touches[0]&&(g.U="touchstart",g.V=h.touches.length,g.W=!1,wI(g),g.oa=h.touches[0].pageY,h=h.target,g.wb=h&&"top"==g.A&&g.$&&g.C&&g.C.C&&1===h.nodeType?dH(g.C.C,h):!1)});this.ta=ZG(this.B,273,function(){g.ia||(g.ia=!0,_.Se(g.o,"load",g.ta),g.ka&&!g.gb||wI(g))});_.re(a,"load",this.ta);_.Eh(this,function(){return _.Se(a,"load",g.ta)})};_.P(AI,rI);var CI=function(a){var b=a.j;_.re(b,"orientationchange",a.ib);_.re(b,"resize",a.kb);_.re(b,"scroll",a.mb);_.re(b,"touchcancel",a.ob);_.re(b,"touchend",a.qb);_.re(b,"touchmove",a.tb);_.re(b,"touchstart",a.vb);_.Eh(a,function(){return BI(a)})},BI=function(a){var b=a.j;_.Se(b,"orientationchange",a.ib);_.Se(b,"resize",a.kb);_.Se(b,"scroll",a.mb);_.Se(b,"touchcancel",a.ob);_.Se(b,"touchend",a.qb);_.Se(b,"touchmove",a.tb);_.Se(b,"touchstart",a.vb)};AI.prototype.Cc=function(a){var b=this.l;if(b&&!this.C){for(var c in DI)!DI.hasOwnProperty(c)||c in a||(a[c]=DI[c]);this.Tb="true"===a[EI.name]||"top"===this.A||!!_.ke(this.j).wasReactiveAdConfigReceived[2];this.Rb="true"===a[FI.name];if(c=a[GI.name])this.ka="true"===c;this.sa="true"===a[HI.name]||"top"==this.A;II(this,a);this.C=JI(this,a);a=this.J.height+5;"bottom"==this.A&&CH(this.j)&&(a+=20);this.ca=new _.dm(this.J.width,a);this.pa=this.Ub>=this.Ha;a=this.l;c=this.C&&this.C.C;a&&c&&("top"==this.A?a.appendChild(c):a.insertBefore(c,a.firstChild));CI(this);this.$=!0;b.setAttribute("data-anchor-status","ready-to-display")}};var II=function(a,b){var c=parseInt(b[KI.name],10),d=0<c?c:null;b=parseInt(b[LI.name],10);var e=0<b?b:null;null!=d&&(a.J.height=d);null!=e&&(a.J.width=e);sI(a,function(f){tI(f,e,d)},!1,!0);tI(a.o,e,d)},JI=function(a,b){b=new fI(b,a.j,a.o,a.J,a.A,function(){if(!a.na){a.na=!0;BI(a);var c=a.l;_.pm(c);MI(a);c&&(c.style.display="none")}},function(){return void NI(a)},a.B,a.qc,function(){_.Dv(a.T,a.slotId)},function(){a.tc&&_.Ev(a.T,a.slotId)});_.js(a,b);return b},vI=function(a){if(a.ba){var b=a.l;b&&(b.style.display="none");MI(a);a.ba=!1}};AI.prototype.ya=function(){this.gb=!0;if(!this.F&&OI(this)&&(this.ia||!this.ka)){var a=this.l;a&&(PI(this),sI(this,function(b){BH(b)},!0),pI(this.C,a),QI(this),this.F=!0,(a=this.o.contentWindow)&&yH(a,"ig",{rr:"vis-aa"},"*",2))}};var QI=function(a){var b=a.l;if(b){var c=a.C,d=c.o,e=_.gv(d);10>Math.abs(e-c.R)||(d=e+10+_.ae(d).clientHeight>_.ae(d).offsetHeight,d=10>e||d,c.da||c.W||c.B||(c.A||d?c.A&&d&&dI(c):cI(c,!1)),c.R=e);c=a.C;e=_.z(_.jq)?parseInt(a.j.getComputedStyle(a.o)["margin-left"],0):0;_.Kn(c.C.getElementsByTagName("svg")[0],{left:e+"px"});a.ba||(a.j.document.body&&(c=a.j.document.body,RI(a),e=pH(a.j.document.body,"padding"),"bottom"==a.A&&(e.bottom+=a.ca.height+25),SI(c,e)),b.style.display="block",a.ba=!0)}},PI=function(a){var b=a.l;if(b&&a.o.parentElement){nH(b,a.ca);var c=a.j.innerWidth;_.ae(a.j).scrollWidth>c?b.style.width=c:b.style.width="100%";TI(a)}},TI=function(a){sI(a,function(c){nH(c,a.J);c.style.width="100%"},!1,!0);a.o.style.display="block";a.o.style.margin="0 auto";if(a.Rb){var b=a.l;fH(b,function(c){hH(c,function(d){return c===b&&/display|bottom/i.test(d)?!1:!0});if("svg"===c.nodeName)return!1})}},RI=function(a){if("bottom"!==a.A&&"top"!==a.A)throw Error("Unexpected position: "+a.A);},uI=function(a){RI(a);var b=a.j.innerWidth;a=_.Un(_.Vn,a.o).height||+a.o.height||0;return new _.dm(b,a)},yI=function(a){a.U="touchcancel";_.I.setTimeout(ZG(a.B,274,function(){"touchcancel"===a.U&&(a.V=0,a.W=!1,wI(a))}),1E3)},zI=function(a,b){if(b&&b.touches){a.U="touchend";var c=b.touches.length;2>c?_.I.setTimeout(ZG(a.B,256,function(){"touchend"===a.U&&(a.V=c,a.W=!1,wI(a))}),1E3):(a.V=c,wI(a));a.F&&!zH(a.j)&&cI(a.C,!0)}},xI=function(a,b){if("top"==a.A&&a.$&&a.C&&a.F&&0>b){var c=a.ca.height+30-5;a.ga<c&&(a.ga=Math.min(Math.floor(a.ga-b),c),a.j.document.body.style.paddingTop=a.ga+"px")}},MI=function(a){a.da=_.gv(a.j);if(a.j.document.body){var b=pH(a.j.document.body,"padding");SI(a.j.document.body,a.uc)}"top"==a.A&&b&&0<b.top&&a.j.scrollTo(0,a.da-b.top)},wI=function(a){!a.$||a.na||2<=a.V&&a.W||!OI(a)?vI(a):(a.ya(),QI(a))},OI=function(a){if(!_.me(a.j))return!1;if(!a.F&&a.sa)switch(a.A){case "bottom":return a.K>=a.yc||a.pa;case "top":return a.K>a.ca.height+30-5}return zH(a.j)},SI=function(a,b){a.style.paddingTop=b.top+"px";a.style.paddingRight=b.right+"px";a.style.paddingBottom=b.bottom+"px";a.style.paddingLeft=b.left+"px"},NI=function(a){a.Tb&&!a.fb&&(a.fb=!0,YG(a.B,257,function(){var b={msg_type:"manual-send-view"},c=a.o.contentWindow;c&&c.postMessage(a.j.JSON.stringify(b),"*")}))};AI.prototype.Ac=function(a){this.o=a;TI(this)};var LI=AH("wd"),KI=AH("ht"),EI=AH("use_manual_view"),FI=AH("use_important"),GI=AH("af_l"),HI=AH("wait_for_scroll"),DI={ui:"gr",gvar:"ar",scroll_detached:"true",dismissable:"false"};var VI=function(a){this.j=null;this.o=a.match(_.tm)[3]||"";this.l=UI(a);this.m=!1},WI=function(a,b){b?a.j=new RegExp("\\b("+b.join("|").toLowerCase()+")\\b","ig"):a.j=null},ZI=function(a,b,c){if(_.Lj(["data-google-vignette","data-google-interstitial"],function(f){return"false"===b.getAttribute(f)||b.closest&&!!b.closest("["+f+'="false"]')}))return!1;var d=b.href,e=d&&(d.match(_.tm)[3]||null);if(!XI(a,b,d,e,c))return!1;a.m=!!e&&YI(a,e);return a.m||!c&&!NH(b)&&/^https?:\/\//i.test(d)&&!/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)},XI=function(a,b,c,d,e){if(!c)return!1;switch(b.target){case "_top":case "_parent":break;case "":case "_self":if(e)return!1;break;default:return!1}return!d||YI(a,d)&&UI(c)==a.l?!1:!0},$I=function(a,b){if(!b||!a.j)return[];var c=[];FH(b,c,!0,!0);b=c.join("");b=b.replace(GH," ").replace(HH,"");b=b.replace(IH,"");b=b.replace(JH," ");" "!=b&&(b=b.replace(KH,""));if(!b)return[];a=b.match(a.j);b=[];for(c=0;a&&c<a.length;c++){var d=a[c].toLowerCase();0<=_.ea(b,d)||b.push(d)}return b},YI=function(a,b){return b.replace(aJ,"")==a.o.replace(aJ,"")},UI=function(a){a=a.match(_.tm);var b=a[6];return(a[5]||"")+(b?"?"+b:"")||"/"},aJ=/^(www\.|m\.|mobile\.)*/i;var bJ=function(a,b,c){rI.call(this,a,b,c);this.B=!1;this.A=null;this.C=b.document};_.P(bJ,rI);var cJ=function(a){for(var b=a.l,c=0;b&&25>c;++c){if(b.nodeName&&"body"==b.nodeName.toString().toLowerCase())return;b=b.parentElement}a.B=!0},dJ=function(a){if(a=a.l)a.style.backgroundColor="transparent"},fJ=function(a){var b=a.l;b&&(_.Zm(b,{width:"100%",height:"50%",top:"auto",bottom:"0px"}),_.Kn(a.o,eJ))},kJ=function(a){gJ(a,!1);var b=a.l;b&&(sI(a,function(c){_.Zm(c,hJ);BH(c)},!0),a.o.setAttribute("width",""),a.o.setAttribute("height",""),_.Kn(a.o,hJ),_.Kn(a.o,iJ),_.Kn(b,jJ),_.z(_.qq)&&_.Kn(b,{background:"transparent"}),_.Zm(b,{display:"none",position:"fixed"}),BH(b),BH(a.o))},gJ=function(a,b){var c=a.l;c&&(b?(_.Zm(c,{display:"block"}),a.C.body&&!a.A&&(a.A=_.nA(a.C,a.j),a.A&&a.B&&_.Kn(a.C.body,lJ)),c.setAttribute("tabindex","0"),c.setAttribute("aria-hidden","false"),a.C.body.setAttribute("aria-hidden","true")):(_.Zm(c,{display:"none"}),a.A&&(a.A(),a.A=null),a.C.body.setAttribute("aria-hidden","false"),c.setAttribute("aria-hidden","true")))},eJ={width:"100%",height:"100%",top:"auto",bottom:"0px"},mJ={"animation-name":"ggl-vgn-slideup","-webkit-animation-name":"ggl-vgn-slideup","animation-duration":"1s","-webkit-animation-duration":"1s","animation-timing-function":"ease","-webkit-animation-timing-function":"ease"},jJ={backgroundColor:"white",opacity:"1",position:"fixed",left:"0px",top:"0px",margin:"0px",padding:"0px",display:"none",zIndex:"2147483647"},hJ={width:"100vw",height:"100vh"},iJ={left:"0",position:"absolute",top:"0"},lJ={filter:"blur(5px)",webkitFilter:"blur(5px)"};var pJ=function(a,b,c){_.is.call(this);var d=this;this.j=a;this.B=b;this.ta=c;this.ob={};this.Ac=ZG(this.B,168,function(e,f){return void nJ(d,e,f)});this.Le=ZG(this.B,169,function(e,f){d.ta.j("ras::xsf",{c:f.data.substring(0,500),u:d.j.location.href.substring(0,500)},.1);return!0});this.ia=[];oJ(this,this.ob);this.ia.push(wH(this.j,this.Ac,this.Le))};_.P(pJ,_.is);var nJ=function(a,b,c){try{if(!a.mb(c.origin))return}catch(f){return}var d=b.msg_type,e;"string"===typeof d&&(e=a.ob[d])&&YG(a.B,168,function(){e.call(a,b,c)},function(f){f.msg_type=d})};pJ.prototype.mb=function(a){return!!_.fn[a]||iH.test(a)||jH.test(a)||kH.test(a)};pJ.prototype.G=function(){for(var a=_.r(this.ia),b=a.next();!b.done;b=a.next())b=b.value,b();this.ia.length=0;_.is.prototype.G.call(this)};var uJ=function(a,b,c,d,e,f,g){pJ.call(this,a,c,e);var h=this;this.J=NaN;this.sa=b;this.Ha=!1;this.o=null;this.R=!1;var k;this.gb=null!=(k=g.i_expid)?k:null;this.ca=_.ud();this.$=!0;this.ib=!1;this.Ub="true"===g["i-fvs"];this.da=!0;this.ga=null;this.A=0;var l;this.tb=null!=(l=g.qid)?l:null;this.l=this.U=this.F=null;this.W=void 0;this.oa=null;this.C=d;this.na=!1;this.qb=0;this.Ke="true"===g.switch_back_vignette;this.Fe=!!g.switch_back_vignette_animation;var m;this.Ie=null!=(m=g.switch_back_vignette_animation)?m:"";this.vb=!1;this.V=new VI(a.location.href);this.K=f;this.Tb="true"===g.check_screen_change;this.wb=_.x(Number,"isNaN").call(Number,Number(g.screen_size_threshold))?0:Number(g.screen_size_threshold);this.fb=_.Tc(_.jo)||864E5;this.kb="true"===g.iobs&&!!this.j.IntersectionObserver;this.Cc=_.Hj(function(){return void qJ(h,{tth:Date.now()-h.A,iswbv:h.vb})});this.ba="true"===g.click_bubble;"true"!=g.translucent_bkg_vignette||_.z(_.qq)||dJ(this.C);"true"==g.bottom_half_trans_bkg_vignette&&fJ(this.C);"true"==g.i_blur_bg&&cJ(this.C);var n,p;WI(this.V,null!=(p=null==(n=g.stop_word)?void 0:n.split(";"))?p:null);if(!this.ba||g.imm_load)rJ(this),sJ(this);tJ(this)};_.P(uJ,pJ);var oJ=function(a,b){b["i-adframe-load"]=function(){a.J||(a.J=_.ud(),tJ(a))};b["i-blur"]=function(){a.R=!0;a.W&&(a.da=!0)};b["i-dismiss"]=function(){vJ(a)};b["i-no"]=function(c){a.$=!1;a.oa=c.i_tslv?c.i_tslv:null};b.i_iif=function(){return void a.ka()}};uJ.prototype.ya=function(){this.J||(this.J=_.ud(),tJ(this))};var vJ=function(a){qJ(a,{dis:Date.now()-a.A,dha:Number(a.R)});if(a.R)wJ(a)?a.j.history.back():xJ(a);else if(a.o){var b=Date.now();a.j.addEventListener("pagehide",function(){qJ(a,{pg_hid:Date.now()-b})});a.W&&(a.da=!1);yJ(a,a.o.href)}},tJ=function(a){a.J&&(a.ba&&(rJ(a),sJ(a)),(a=a.C.l)&&a.setAttribute("data-vignette-loaded","true"))};uJ.prototype.ka=function(){this.ib=!0};var zJ=function(a){wJ(a)||(a.j.location.hash="google_vignette");a.W=ZG(a.B,526,(0,_.zj)(a.qc,a));_.I.setTimeout(_.Aj(_.re,a.j,"hashchange",a.W),0)},BJ=function(a,b){return _.ud()-a.ca<a.fb&&a.$&&!a.ib&&!wJ(a)&&!!a.J&&(a.Ub||!_.ke(a.j).wasReactiveAdVisible[9])&&!$I(a.V,b).length&&zH(a.j)&&AJ(a)},CJ=function(a,b,c){a=a.j.document.createElement("link");a.setAttribute("rel",c);a.setAttribute("href",b);return a},DJ=function(a,b){for(b=b.target;b;){if("A"==b.nodeName){if(ZI(a.V,b,b.ownerDocument!=a.j.document))return b;break}b=b.parentElement}return null};uJ.prototype.qc=function(){this.da&&(wJ(this)?(qJ(this,{fnv:1}),yJ(this,this.o.href)):(this.Cc(),xJ(this)))};uJ.prototype.G=function(){pJ.prototype.G.call(this);wJ(this)&&yJ(this,this.o.href);this.l&&(_.Se(this.j.document,"click",this.l),this.l=null)};var xJ=function(a){a.A&&(a.Ha=!0,a.l&&(_.Se(a.j.document,"click",a.l),a.l=null),a.U&&a.U.parentNode&&(a.U.parentNode.removeChild(a.U),a.U=null),a.F&&a.F.parentNode&&(a.F.parentNode.removeChild(a.F),a.F=null),gJ(a.C,!1))},rJ=function(a){if(!a.l){a.l=ZG(a.B,527,function(e){return EJ(a,e)});var b=a.ba?{}:aH;_.re(a.j.document,"click",a.l,b);for(var c=a.j.frames,d=0;d<c.length;d++)try{_.re(c[d].document,"click",a.l,b)}catch(e){}}},qJ=function(a,b){a.tb&&(b.qid=a.tb);a.gb&&(b.eid=a.gb);a.ga&&(b.lnk=a.ga.substr(0,100),a.V.m||(b.inter="1"));var c=_.Lg();c&&(b.ns=String(c));b.fs=String(_.ud()-a.ca);b.req=a.sa.src;a.ta.j("ia_evt",b,.01)},yJ=function(a,b){a=a.j.location;var c=void 0===c?_.Fn:c;a:{c=void 0===c?_.Fn:c;for(var d=0;d<c.length;++d){var e=c[d];if(e instanceof _.pb&&e.Zd(b)){b=new _.Zl(b,_.Ra);break a}}b=void 0}a.replace(VG(b||_.$l))};uJ.prototype.tc=function(a){this.A||!this.o||this.m||(a=a.preventDefaultTriggered_,!a&&ZI(this.V,this.o,this.o.ownerDocument!=this.j.document)&&BJ(this,this.o)?this.pa()?(this.A=Date.now(),_.ke(this.j).wasReactiveAdVisible[8]=!0,this.ga=this.o.href.substr(0,100),this.kb||FJ(this),a=this.o.href,this.U=CJ(this,a,"prerender"),this.F=CJ(this,a,"prefetch"),this.j.document.body.appendChild(this.U),this.j.document.body.appendChild(this.F),zJ(this),a=ZG(this.B,528,(0,_.zj)(this.yc,this)),_.re(this.j,"pagehide",a),gJ(this.C,!0),this.na&&qJ(this,{vsbl:2})):yJ(this,this.o.href):(GJ(this,this.o,a),a?this.o=null:yJ(this,this.o.href)))};uJ.prototype.pa=function(){return!0};var EJ=function(a,b){if(b&&!b.defaultPrevented&&!a.A&&!a.m&&!a.o){var c=DJ(a,b);c&&(BJ(a,c)?(a.o=c,lH(b),b.preventDefault=function(){return b&&(b.preventDefaultTriggered_=!0)},_.I.setTimeout((0,_.zj)(a.tc,a,b),0)):GJ(a,c,!1))}},wJ=function(a){return-1!=a.j.location.hash.indexOf("google_vignette")};uJ.prototype.yc=function(){this.Ha||qJ(this,{Xf:Date.now()-this.A});xJ(this)};var GJ=function(a,b,c){var d=a.j,e=_.ke(d),f=!AJ(a);e={zm:Number(zH(d)),sz:Number(f),fc:Number(a.$),vp:Number(wJ(a)),al:Number(!!a.J),fsi:Number(!!e.wasReactiveAdVisible[9]),ag:Number(_.ud()-a.ca<a.fb)};c&&(e.wsdojl=!0);f&&(e.rs_sz=a.K.width+"x"+a.K.height,e.cr_sz=d.innerWidth+"x"+d.innerHeight);b=$I(a.V,b);b.length&&(e.sw=b.join());a.oa&&(e.ts=a.oa);qJ(a,e)},FJ=function(a){var b={};b=(b.msg_type="i-view",b);a.sa.contentWindow.postMessage(JSON.stringify(b),"*")},sJ=function(a){var b=a.j.document;1===_.Ku(b)&&_.re(b,"visibilitychange",ZG(a.B,342,function(){if(!a.na)if(1===_.Ku(b)){var c=(new Date).getTime()-a.qb;a.na=!0;qJ(a,{vsbl:1,dur_hid:c});if(a.Ke&&a.pa()){a.A=Date.now();a.R=!0;a.kb||FJ(a);zJ(a);dJ(a.C);if(a.Fe){c=a.C;var d=c.l;if(d&&"ggl-vgn-slideup"===a.Ie){var e=_.om(document,"STYLE");e.type="text/css";e.appendChild(c.C.createTextNode("@keyframes ggl-vgn-slideup {0% { transform: translateY(100%); opacity: 0.5; }100% { transform: translateY(0); opacity: 1; }  }@-webkit-keyframes ggl-vgn-slideup { 0% { transform: translateY(100%); opacity: 0.5; } 100% { transform: translateY(0); opacity: 1; } }"));_.Zm(d,mJ);c.C.body.appendChild(e)}}a.vb=!0;gJ(a.C,!0)}}else a.qb=(new Date).getTime()}))},AJ=function(a){if(a.Tb){var b=a.j.innerWidth/a.K.width-1;if(0>b&&Math.abs(b)>a.wb)return!1;b=a.j.innerHeight/a.K.height-1;return 0>b&&Math.abs(b)>a.wb?!1:!0}return a.K.width<a.K.height===_.me(a.j)};var HJ=function(){this.j=null};var IJ=function(a,b,c,d,e,f){AI.call(this,b,c,2===a?"top":"bottom",new _.aA,new vH,d);this.T=e;this.slotId=f;this.tc=_.Cv(this.T,this.slotId);2===a&&_.Dv(this.T,this.slotId)};_.P(IJ,AI);var JJ=function(a,b,c){bJ.call(this,b,a,c);kJ(this)};_.P(JJ,bJ);var KJ=function(a,b,c,d,e,f,g,h,k){k=void 0===k?null:k;uJ.call(this,a,b,d,new JJ(a,b,c),new vH,e,f);this.Rb=g;this.uc=h;this.localStorage=k;_.js(this,this.C)};_.P(KJ,uJ);KJ.prototype.pa=function(){var a;if(!(a=this.Rb)){var b=_.O(HJ),c=this.localStorage;try{var d;(d=!c)||(b.j=_.de(c),d=!(b.j&&_.ce(b.j)));if(d)a=!1;else{b.j.push(Date.now());var e=JSON.stringify(b.j);c.setItem("__lsv__",e);a=c.getItem("__lsv__")==e}}catch(f){a=!1}}return a};KJ.prototype.mb=function(){return!0};KJ.prototype.ka=function(){uJ.prototype.ka.call(this);this.uc()};var LJ=_.kD.L(),MJ={Jd:IJ,Rd:KJ};_.lD(LJ,_.rD).resolve(MJ);})
