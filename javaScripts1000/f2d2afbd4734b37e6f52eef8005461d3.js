(function(){var Xi=function(a){return(a=a.style[OBR._jsc.D])&&10<a.length?(a=a.substring(10,a.length-1).split(",")[0],(0,window.parseFloat)(a)):0},X=function(a,b){a.style[OBR._jsc.D]="translate("+b+"px,0)"},Yi=function(a){a.classList.remove("ob-timeline-hidden")},Zi=function(a){a.scrollLeft=a.scrollLeft},$i=function(a,b){if(!a.start){var c=Xi(a.ra);a.start=b-c*a.direction*1E3/15;return c}return 15*a.direction*(b-a.start)/1E3},aj=function(a,b,c){return 1===c?a>=b:a<=c*b},bj=function(){},dj=function(a){if(a.ra){this.options=
a;a=this.options.ra;var b=a.parentElement,c=b.querySelectorAll(".ob-timeline-controls .ob-timeline-arrow");this.elements={root:b,track:a,controls:b.querySelector(".ob-timeline-controls"),dr:c[0],Fq:c[1]};this.data={tc:this.elements.track.children.length,Xr:this.elements.track.children[0].scrollWidth,sE:this.elements.track.clientWidth,FG:this.elements.track.clientWidth/2,GG:this.elements.track.scrollWidth,Bi:!1,er:!0,Nj:(this.elements.track.clientWidth-this.options.cE-this.elements.track.children[0].clientWidth)/
2};this.data.EG=this.data.tc*this.data.Xr;this.options.rp||(this.elements.controls.style.top=(this.elements.track.offsetTop+this.elements.track.clientHeight)/2+"px");Yi(this.elements.controls);cj(this)}},cj=function(a){function b(b){return function(c){a.options.Uf&&a.options.Uf();ej(a,!0);var d=b,f=Math.round(Math.abs(Xi(a.elements.track))/a.data.Xr);d*=-a.options.direction;-1===d&&1===f?(ej(a,!1),Zi(a.elements.track),X(a.elements.track,a.options.direction*(a.options.Vb[a.data.tc-1]-(a.data.sE-a.options.Vb[1]))),
Zi(a.elements.track),ej(a,!0),X(a.elements.track,a.options.direction*(a.options.Vb[a.data.tc-2]-a.data.Nj))):1===d&&f===a.data.tc-2?(ej(a,!1),Zi(a.elements.track),X(a.elements.track,0),Zi(a.elements.track),ej(a,!0),X(a.elements.track,a.options.direction*(a.options.Vb[1]-a.data.Nj))):X(a.elements.track,a.options.direction*(a.options.Vb[f+d]-a.data.Nj));a.data.er&&(Yi(-1===a.options.direction?a.elements.dr:a.elements.Fq),a.data.er=!1);c.preventDefault();return!1}}a.elements.Fq.addEventListener("click",
b(1));a.elements.dr.addEventListener("click",b(-1))},ej=function(a,b){b?a.data.Bi||(a.elements.track.classList.add("ob-timeline-trans"),a.data.Bi=!0):a.data.Bi&&(a.elements.track.classList.remove("ob-timeline-trans"),a.data.Bi=!1)},fj=function(){},gj=function(a){var b=this;if(a.ra){var c=a.ra,d=a.cx,e=a.Uf,f=a.Ph,g=a.Vb;this.options=a;this.ra=c;this.Vb=g;this.c=d.end;this.g=d.start;this.Uf=e||fj;this.Ph=f||fj;this.state={Le:0,Sc:0,Kd:0,offset:0,timestamp:null,xi:null,Vj:0,ff:null,pressed:!1};"undefined"!==
typeof window.ontouchstart&&(this.ra.addEventListener("touchmove",function(a){return b.Rh(a)}),this.ra.addEventListener("touchstart",function(a){return b.Sh(a)}),this.ra.addEventListener("touchend",function(a){return b.Qh(a)}));this.ra.addEventListener("mousedown",function(a){return b.Sh(a)});this.ra.addEventListener("mousemove",function(a){return b.Rh(a)});this.ra.addEventListener("mouseup",function(a){return b.Qh(a)})}},hj=function(a,b){a.state.Sc&&(a.state.ff=a.state.offset+(a.state.Sc-(b-(a.state.ff-
a.state.Sc))))},ij=function(a){if(a.state.Sc){var b=Date.now()-a.state.timestamp;b=-a.state.Sc*Math.exp(-b/325);.5<b||-.5>b?(a.scroll(a.state.ff+b),(0,window.requestAnimationFrame)(function(){return ij(a)})):(a.scroll(a.state.ff),a.Ph())}},jj=function(a){return a.ss||a.rp?new dj(a):new gj(a)},kj=function(a,b){b.style.maxWidth=a.clientWidth+"px";b.style.width=a.clientWidth+"px";b.style.maxHeight=a.clientHeight+"px";b.style.height=a.clientHeight+"px"},lj=function(a,b){var c=void 0===c?"":c;return a&&
b&&a.hasOwnProperty(b)?a[b]||c:c},nj=function(a,b,c){this.l=a;this.W=this.l.h("weeklyHighlightsDisablePopup",!1);this.vg=this.l.h("customClicks",!1);this.Oe=b;this.u=c;this.W||(this.c=this.Oe.querySelector(".ob-timeline-popup-container"),this.j=this.c.querySelector(".ob-timeline-popup"),this.Sa=this.c.querySelector(".ob-timeline-popup-title"),this.g=this.c.querySelector(".ob-timeline-img"),this.nu=this.c.querySelector(".ob-timeline-popup-date span"),this.F=this.c.querySelector(".ob-timeline-popup-daily"),
this.N=this.c.querySelector(".ob-timeline-popup-desc"),this.B=this.c.querySelector(".ob-timeline-popup-close"),this.Um=this.c.querySelector(".ob-timeline-popup-popular"),this.xg=[this.g.parentElement,this.Sa,this.N.querySelector("a")]);this.wg="";this.$m={};this.cn={};mj(this)},mj=function(a){if(!a.W){a.B.addEventListener("click",function(){return oj(a)});a.wg="transform:translate("+(pj?12*qj/qj+"px":12/qj*100+"%")+", "+(pj?.085*rj+"px":"8.5%")+")";for(var b in a.u)a.u.hasOwnProperty(b)&&a.u[b].forEach(function(a){var b=
a.description;if(b&&b.length)for(;"."===b[b.length-1];)b=b.substring(0,b.length-1);return a.description=b});a.pu=qj-24;a.Kb=function(b){var c=b.composedPath().includes(a.j),e=0<b.targetTouches[0].clientY-a.clientY?1:0;(c=!c)||(c=a.j,c=1===e?0===c.scrollTop:c.scrollTop>=c.scrollHeight-c.clientHeight);if(c)return b.preventDefault(),b.stopPropagation(),!1}}},oj=function(a){var b=a.ka.querySelector("img");sj(a,a.ka.querySelector(".ob-timeline-img-container"));kj(b,a.g);a.c.style.background="transparent";
a.B.style.display="none";a.j.scrollTo(0,0);tj(a);(0,window.setTimeout)(function(){a.j.style.opacity="0"},250);(0,window.setTimeout)(function(){a.c.setAttribute("style","");a.j.setAttribute("style","");a.F.setAttribute("style","");a.B.style.top="";a.B.style.opacity="";a.B.style.display=""},450)},uj=function(a,b){var c=b.parentElement.getAttribute("ob-data-date"),d=b.getAttribute("data-pos");return a.u[c].find(function(a){return a.pos===d})},wj=function(a,b){a.ka=b;b=a.ka.parentElement.getAttribute("ob-data-date");
var c=uj(a,a.ka),d=lj(c,"image"),e=lj(c,"title"),f=lj(c,"description"),g=lj(c,"date"),h=lj(c,"pos"),k=lj(c,"url");c=lj(c,"origUrl");a.g.setAttribute("src",d);a.g.setAttribute("alt",e);a.Sa.innerText=e;a.Sa.setAttribute("data-pos",h);a.N.children[0].innerText=f;a.nu.innerText=g.split(" ")[0];a.N.style.display=f&&0<f.length?"block":"none";a.Fa=a.$m[b].cloneNode(!0);a.Fa.querySelector('[data-pos="'+h+'"]').remove();a.Um.innerHTML="";a.vg?vj(a,k,{orgUrl:c}):a.xg.forEach(function(a){return a.href=k})},
xj=function(a){[a.j,a.g,a.F].forEach(function(a){a.classList.add("ob-timeline-exit-animation")})},yj=function(a){[a.j,a.g,a.F].forEach(function(a){a.classList.remove("ob-timeline-exit-animation")})},sj=function(a,b){b=b.getBoundingClientRect();a.j.setAttribute("style","width:"+b.width+"px;height:"+b.height+"px;transform:translate("+b.left+"px,"+b.top+"px);display:block;")},zj=function(a){(0,window.setTimeout)(function(){a.F.style.transform="translate(0,0)";a.F.style.opacity=1;a.F.style.width=a.pu+
"px"},60)},Aj=function(a){(0,window.setTimeout)(function(){a.B.style.opacity=1;a.B.style.top=pj?.085*rj+"px":"7.2%"},170)},Bj=function(a){var b=window.document.createDocumentFragment();a.forEach(function(a){var c=window.document.createElement("span"),e=window.document.createElement("img"),f=window.document.createElement("span"),g=window.document.createElement("a");f.appendChild(e);g.appendChild(f);g.appendChild(c);b.appendChild(g);c.innerText=a.title;c.className="ob-timeline-popup-rec-title";f.className=
"ob-timeline-popup-rec-img";e.src=a.image;g.href=a.url;g.className="ob-timeline-popup-rec";g.setAttribute("data-pos",a.pos)});return b},Cj=function(a){var b=[],c;for(c in a.u)a.u[c].forEach(function(a){var c=new window.Image;c.src=a.image;b.push(c)})},Dj=function(a,b){b=window.OBR.b.J(b).querySelectorAll("[data-pos]");(b=[].slice.call(b).filter(function(b){return!a.cn[b.getAttribute("data-pos")]}))&&b.length&&window.OBR.Ma.qc(a.l,b)},Ej=function(a){window.document.addEventListener("touchstart",function(b){a.clientY=
b.targetTouches[0].clientY});a.c.addEventListener("touchmove",a.Kb,{passive:!1})},tj=function(a){window.document.removeEventListener("touchstart",function(b){a.clientY=b.targetTouches[0].clientY});a.c.removeEventListener("touchmove",a.Kb,{passive:!1})},Fj=function(a,b,c){b=uj(a,b);var d=a.l.yy();a.vg?(a=window.document.createElement("a"),a.setAttribute("href",b.url),d&&a.setAttribute("target",d),b=(b=lj(b,"origUrl"))?JSON.stringify({orgUrl:b}):null,window.OBR.extern.customClickHandler(a,c,"organic-rec",
b)):d&&"_self"!==d?window.open(b.url,d||"_self"):window.location.href=b.url},vj=function(a,b,c){var d=c?JSON.stringify(c):null;a.xg.forEach(function(c){c.href=b;c.addEventListener("click",function(b){window.OBR.extern.customClickHandler.call(a,c,b,"organic-rec",d);return!1})});a.Fa.childNodes.forEach(function(b){b.addEventListener("click",function(c){return window.OBR.extern.customClickHandler.call(a,b,c,"organic-rec",d)})})},Gj=function(a,b,c){a.W?Fj(a,b,c):(a.ka!==b&&(wj(a,b),a.Um.appendChild(a.Fa),
Dj(a,a.c)),c=b.querySelector("img"),b=b.querySelector(".ob-timeline-img-container"),a.c.style.background="",kj(c,a.g),a.c.style.display="block",yj(a),sj(a,b),zj(a),Aj(a),Ej(a),(0,window.setTimeout)(function(){a.j.setAttribute("style","opacity:1;"+a.wg+";display:block");a.g.style.maxWidth="";a.g.style.width="";a.g.style.maxHeight="";a.g.style.height=""},0),(0,window.setTimeout)(function(){xj(a);var b=a.N.children[0],c=b.innerText.split(" ");if(c&&c.length)for(;a.N.scrollHeight>a.N.clientHeight;)c.pop(),
b.innerText=c.join(" ")},350))},Hj=function(a){window.OBR.Ma.Ub(a.l,{Qf:!0,Th:function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return a.$t.apply(a,OBR._jsc.x(c))}});a.W&&Dj(a,a.Oe)},Ij=function(){},Kj=function(a,b,c,d,e){a=Jj.create(a,b,c,null,e);a.vB(d);return a},Lj=function(a){var b={browser:""};(a=a.o("fCard",""))&&(b.fCard=a);return b},Mj=function(a,b){var c=a.firstElementChild.cloneNode(!0),d=a.lastElementChild.cloneNode(!0);c.setAttribute("ob-data-clone",!0);d.setAttribute("ob-data-clone",
!0);a.appendChild(c);a.insertBefore(d,a.firstChild);X(a,b*d.clientWidth)},Nj=function(a,b){window.document.addEventListener("visibilitychange",function(){window.document.hidden?b.stop():b.play()});(new window.OBR.IntersectionObserver({callback:function(a){a.intersectionRatio?b.play():b.stop()},element:a,threshold:0,intersectPercentage:-1,unobserve:!1})).observe()},Oj=function(a,b){if(!a||!a.length)return[];var c=-1===b?0:a[0].parentElement.clientWidth-a[0].clientWidth-12;return[].slice.call(a).map(function(a){return-1===
b?a.offsetLeft:c-a.offsetLeft})};bj.prototype.create=function(a,b,c,d,e){var f={ra:a,direction:b,ho:c,Zj:d,Ra:!0,start:void 0,Yf:null};return{play:function(){function a(b){if(f.Ra&&!e){var c=$i(f,b);X(f.ra,c);f.Zj&&aj(c,f.ho,f.direction)?(f.Ra=!1,f.Yf=(0,window.requestAnimationFrame)(function(){return f.Zj(c-f.direction*f.ho)})):(0,window.requestAnimationFrame)(a)}}f.Ra=!0;f.start=null;f.Yf=(0,window.requestAnimationFrame)(a)},stop:function(){f.Ra=!1;f.Yf&&((0,window.cancelAnimationFrame)(f.Yf),f.Yf=null)},vB:function(a){return f.Zj=
a}}};var Jj=new bj;var Pj=window.innerWidth;OBR._jsc.n=gj.prototype;
OBR._jsc.n.scroll=function(a){(-1===this.options.direction?a>this.c&&1===this.state.direction:a>this.c&&-1===this.state.direction)?(this.state.offset=this.Vb[0]+(a-this.c),this.state.Kd=this.state.offset-(a-this.state.Kd),hj(this,a)):(-1===this.options.direction?a<this.g&&-1===this.state.direction:a<this.g&&1===this.state.direction)?(this.state.offset=this.Vb[this.Vb.length-1]-(this.Vb[1]-a),this.state.Kd=this.state.offset-(a-this.state.Kd),hj(this,a)):this.state.offset=a;X(this.ra,this.options.direction*
this.state.offset)};OBR._jsc.n.track=function(){var a=Date.now(),b=(this.state.offset-this.state.Kd)/(1+(a-this.state.timestamp))*1E3;this.state.timestamp=a;this.state.Kd=this.state.offset;this.state.Le=.8*b+.2*this.state.Le};
OBR._jsc.n.Rh=function(a){if(this.state.pressed){a=Math.min(Math.max(0,a.targetTouches&&1<=a.targetTouches.length?a.targetTouches[0].clientX:a.clientX),Pj);var b=this.state.Vj-a;if(2<b||-2>b)this.state.direction=0>b?-1:1,this.state.Vj=a,this.scroll(this.state.offset-this.options.direction*b)}};
OBR._jsc.n.Sh=function(a){var b=this;this.state.Vj=a.targetTouches&&1<=a.targetTouches.length?a.targetTouches[0].clientX:a.clientX;this.state.Le=0;this.state.Sc=0;this.state.Kd=this.state.offset=this.options.direction*Xi(this.ra);this.state.timestamp=Date.now();this.state.xi&&(0,window.clearInterval)(this.state.xi);this.state.xi=(0,window.setInterval)(function(a){return b.track(a)},50);this.state.pressed=!0;this.Uf()};
OBR._jsc.n.Qh=function(){var a=this;this.state.pressed=!1;(0,window.clearInterval)(this.state.xi);10<this.state.Le||-10>this.state.Le?(this.state.Sc=.6*this.state.Le,this.state.ff=Math.round(this.state.offset+this.state.Sc),this.state.timestamp=Date.now(),(0,window.requestAnimationFrame)(function(){return ij(a)})):this.Ph()};var pj=window.navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&window.navigator.userAgent.match(/AppleWebKit/),qj=window.document.documentElement.clientWidth,rj=window.document.documentElement.clientHeight;nj.prototype.$t=function(a,b){this.W||(a=b.getAttribute("data-pos"),this.cn[a]=!0)};Ij.prototype.uj=function(a,b,c,d){(new window.OBR.IntersectionObserver({callback:this.Qu.bind(this),callbackParams:[b,c,d],element:a,threshold:[.5],intersectPercentage:.5,unobserve:!0})).observe()};Ij.prototype.tj=function(a,b){a.querySelectorAll(".ob-timeline-item").forEach(function(a){a.addEventListener("click",function(c){b.forEach(function(b){return b(c,a)})})})};Ij.prototype.Qu=function(a,b,c){c.options.ss||a.play();if(!b.W){Cj(b);for(var d in b.u)b.$m[d]=Bj(b.u[d])}};
Ij.prototype.A=function(a){var b=a.pb("timeline",null);if(b){var c=a.Fd()?1:-1,d=Lj(a),e=new window.OBR.G(a,function(a){return a.$e}),f=a.h("isWeeklyHighlightsDatePanel",!1),g=a.h("disableAutoScroll",!1)||f,h=a.v();if(h){var k=window.OBR.b.J(h).querySelector(".ob-timeline-track");if(k){Mj(k,c);var l=Oj(k.children,c),m=l[k.children.length-2],q=-l[0],p=k.clientWidth-l[1],r=Kj(k,c,m,function(a){X(k,q+a);r.play()},g),t=function(){return Array.from(k.querySelectorAll(".ob-timeline-grid")).find(function(a){return window.OBR.ha.Cd(a,
80)}).getAttribute("ob-data-date")};c=jj({cx:{start:l[1]-p-12,end:m},direction:c,Uf:function(){r.stop();f&&(0,window.setTimeout)(function(){var a=t(),b=window.OBR.b.J(h).querySelector(".ob-timeline-date-panel-content");b&&(b.innerHTML=a)},300)},rp:f,Vb:l,ss:a.h("weeklyHighlightsEnableArrows",!1),ra:k,Ph:r.play,cE:f?0:12});var y=new nj(a,h,b),B={};this.tj(k,[function(a,b){r.stop();(0,window.requestAnimationFrame)(function(){Gj(y,b,a)})},function(a,b){a=b.getAttribute("data-did");B[a]||(B[a]=!0,b=Object.assign({},
d),a&&(b.recDocId=a),e.I.eu.C(b))}]);this.uj(h,r,y,c);Hj(y);Nj(h,r)}}}};window.OBR.js||(window.OBR.js=new Ij,window.OBR.i.T(window.OBR.i.s.$e));}).call(window);