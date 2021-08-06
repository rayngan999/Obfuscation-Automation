!function(e,t){"function"==typeof define&&define.amd,"object"==typeof exports,e.PhotoSwipe=t()}(this,function(){"use strict";var e=function(e,t,n,i){var o={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){o.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){o.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(o.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(o.features)return o.features;var e=o.createEl(),t=e.style,n="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var a=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var r=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);r&&r.length>0&&(r=parseInt(r[1],10),r>=1&&8>r&&(i.isOldIOSPhone=!0))}var l=a.match(/Android\s([0-9\.]*)/),s=l?l[1]:0;s=parseFloat(s),s>=1&&(4.4>s&&(i.isOldAndroid=!0),i.androidVersion=s),i.isMobileOpera=/opera mini|opera mobi/i.test(a)}for(var u,c,d=["transform","perspective","animationName"],p=["","webkit","Moz","ms","O"],m=0;4>m;m++){n=p[m];for(var f=0;3>f;f++)u=d[f],c=n+(n?u.charAt(0).toUpperCase()+u.slice(1):u),!i[u]&&c in t&&(i[u]=c);n&&!i.raf&&(n=n.toLowerCase(),i.raf=window[n+"RequestAnimationFrame"],i.raf&&(i.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!i.raf){var h=0;i.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-h)),i=window.setTimeout(function(){e(t+n)},n);return h=t+n,i},i.caf=function(e){clearTimeout(e)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var a=this,r=25,l=3,s={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(s,i);var u,c,d,p,m,f,h,v,y,x,g,w,b,I,C,D,T,M,S,A,E,O,k,R,Z,P,F,L,z,_,N,U,H,Y,W,B,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue,ce,de,pe=function(){return{x:0,y:0}},me=pe(),fe=pe(),he=pe(),ve={},ye=0,xe={},ge=pe(),we=0,be=!0,Ie=[],Ce={},De=!1,Te=function(e,t){o.extend(a,t.publicMethods),Ie.push(e)},Me=function(e){var t=en();return e>t-1?e-t:0>e?t+e:e},Se={},Ae=function(e,t){return Se[e]||(Se[e]=[]),Se[e].push(t)},Ee=function(e){var t=Se[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(a,n)}},Oe=function(){return(new Date).getTime()},ke=function(e){ue=e,a.bg.style.opacity=e*s.bgOpacity},Re=function(e,t,n,i,o){(!De||o&&o!==a.currItem)&&(i/=o?o.fitRatio:a.currItem.fitRatio),e[O]=w+t+"px, "+n+"px"+b+" scale("+i+")"},Ze=function(e){oe&&(e&&(x>a.currItem.fitRatio?De||(mn(a.currItem,!1,!0),De=!0):De&&(mn(a.currItem),De=!1)),Re(oe,he.x,he.y,x))},Pe=function(e){e.container&&Re(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Fe=function(e,t){t[O]=w+e+"px, 0px"+b},Le=function(e,t){if(!s.loop&&t){var n=p+(ge.x*ye-e)/ge.x,i=Math.round(e-gt.x);(0>n&&i>0||n>=en()-1&&0>i)&&(e=gt.x+i*s.mainScrollEndFriction)}gt.x=e,Fe(e,m)},ze=function(e,t){var n=wt[e]-xe[e];return fe[e]+me[e]+n-n*(t/g)},_e=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Ne=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},Ue=null,He=function(){Ue&&(o.unbind(document,"mousemove",He),o.addClass(e,"pswp--has_mouse"),s.mouseUsed=!0,Ee("mouseUsed")),Ue=setTimeout(function(){Ue=null},100)},Ye=function(){o.bind(document,"keydown",a),N.transform&&o.bind(a.scrollWrap,"click",a),s.mouseUsed||o.bind(document,"mousemove",He),o.bind(window,"resize scroll orientationchange",a),Ee("bindEvents")},We=function(){o.unbind(window,"resize scroll orientationchange",a),o.unbind(window,"scroll",y.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",He),N.transform&&o.unbind(a.scrollWrap,"click",a),V&&o.unbind(window,h,a),clearTimeout(U),Ee("unbindEvents")},Be=function(e,t){var n=un(a.currItem,ve,e);return t&&(ie=n),n},Ge=function(e){return e||(e=a.currItem),e.initialZoomLevel},Xe=function(e){return e||(e=a.currItem),e.w>0?s.maxSpreadZoom:1},Ve=function(e,t,n,i){return i===a.currItem.initialZoomLevel?(n[e]=a.currItem.initialPosition[e],!0):(n[e]=ze(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]?(n[e]=t.max[e],!0):!1)},Ke=function(){if(O){var t=N.perspective&&!R;return w="translate"+(t?"3d(":"("),void(b=N.perspective?", 0px)":")")}O="left",o.addClass(e,"pswp--ie"),Fe=function(e,t){t.left=e+"px"},Pe=function(e){var t=e.fitRatio>1?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},Ze=function(){if(oe){var e=oe,t=a.currItem,n=t.fitRatio>1?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=he.x+"px",e.top=he.y+"px"}}},qe=function(e){var t="";s.escKey&&27===e.keyCode?t="close":s.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,a[t]()))},$e=function(e){e&&($||q||ae||G)&&(e.preventDefault(),e.stopPropagation())},je=function(){a.setScrollOffset(0,o.getScrollY())},Je={},Qe=0,et=function(e){Je[e]&&(Je[e].raf&&P(Je[e].raf),Qe--,delete Je[e])},tt=function(e){Je[e]&&et(e),Je[e]||(Qe++,Je[e]={})},nt=function(){for(var e in Je)Je.hasOwnProperty(e)&&et(e)},it=function(e,t,n,i,o,a,r){var l,s=Oe();tt(e);var u=function(){if(Je[e]){if(l=Oe()-s,l>=i)return et(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Je[e].raf=Z(u)}};u()},ot={shout:Ee,listen:Ae,viewportSize:ve,options:s,isMainScrollAnimating:function(){return ae},getZoomLevel:function(){return x},getCurrentIndex:function(){return p},isDragging:function(){return V},isZooming:function(){return ee},setScrollOffset:function(e,t){xe.x=e,_=xe.y=t,Ee("updateScrollOffset",xe)},applyZoomPan:function(e,t,n,i){he.x=t,he.y=n,x=e,Ze(i)},init:function(){if(!u&&!c){var n;a.framework=o,a.template=e,a.bg=o.getChildByClass(e,"pswp__bg"),F=e.className,u=!0,N=o.detectFeatures(),Z=N.raf,P=N.caf,O=N.transform,z=N.oldIE,a.scrollWrap=o.getChildByClass(e,"pswp__scroll-wrap"),a.container=o.getChildByClass(a.scrollWrap,"pswp__container"),m=a.container.style,a.itemHolders=D=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],D[0].el.style.display=D[2].el.style.display="none",Ke(),y={resize:a.updateSize,orientationchange:function(){clearTimeout(U),U=setTimeout(function(){ve.x!==a.scrollWrap.clientWidth&&a.updateSize()},500)},scroll:je,keydown:qe,click:$e};var i=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!i||(s.showAnimationDuration=s.hideAnimationDuration=0),n=0;n<Ie.length;n++)a["init"+Ie[n]]();if(t){var r=a.ui=new t(a,o);r.init()}var d=p;Ee("firstUpdate"),p=d||s.index||0,(isNaN(p)||0>p||p>=en())&&(p=0),a.currItem=Qt(p),(N.isOldIOSPhone||N.isOldAndroid)&&(be=!1),e.setAttribute("aria-hidden","false"),s.modal&&(be?e.style.position="fixed":(e.style.position="absolute",e.style.top=o.getScrollY()+"px")),void 0===_&&(Ee("initialLayout"),_=L=o.getScrollY());var h="pswp--open ";for(s.mainClass&&(h+=s.mainClass+" "),s.showHideOpacity&&(h+="pswp--animate_opacity "),h+=R?"pswp--touch":"pswp--notouch",h+=N.animationName?" pswp--css_animation":"",h+=N.svg?" pswp--svg":"",o.addClass(e,h),a.updateSize(),f=-1,we=null,n=0;l>n;n++)Fe((n+f)*ge.x,D[n].el.style);z||o.bind(a.scrollWrap,v,a),Ae("initialZoomInEnd",function(){a.setContent(D[0],p-1),a.setContent(D[2],p+1),D[0].el.style.display=D[2].el.style.display="block",s.focus&&e.focus(),Ye()}),a.setContent(D[1],p),a.updateCurrItem(),Ee("afterInit"),be||(I=setInterval(function(){Qe||V||ee||x!==a.currItem.initialZoomLevel||a.updateSize()},1e3)),o.addClass(e,"pswp--visible")}},close:function(){u&&(u=!1,c=!0,Ee("close"),We(),nn(a.currItem,null,!0,a.destroy))},destroy:function(){Ee("destroy"),qt&&clearTimeout(qt),e.setAttribute("aria-hidden","true"),e.className=F,I&&clearInterval(I),o.unbind(a.scrollWrap,v,a),o.unbind(window,"scroll",a),Tt(),nt(),Se=null},panTo:function(e,t,n){n||(e>ie.min.x?e=ie.min.x:e<ie.max.x&&(e=ie.max.x),t>ie.min.y?t=ie.min.y:t<ie.max.y&&(t=ie.max.y)),he.x=e,he.y=t,Ze()},handleEvent:function(e){e=e||window.event,y[e.type]&&y[e.type](e)},goTo:function(e){e=Me(e);var t=e-p;we=t,p=e,a.currItem=Qt(p),ye-=t,Le(ge.x*ye),nt(),ae=!1,a.updateCurrItem()},next:function(){a.goTo(p+1)},prev:function(){a.goTo(p-1)},updateCurrZoomItem:function(e){if(e&&Ee("beforeChange",0),D[1].el.children.length){var t=D[1].el.children[0];oe=o.hasClass(t,"pswp__zoom-wrap")?t.style:null}else oe=null;ie=a.currItem.bounds,g=x=a.currItem.initialZoomLevel,he.x=ie.center.x,he.y=ie.center.y,e&&Ee("afterChange")},invalidateCurrItems:function(){C=!0;for(var e=0;l>e;e++)D[e].item&&(D[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==we){var t,n=Math.abs(we);if(!(e&&2>n)){a.currItem=Qt(p),De=!1,Ee("beforeChange",we),n>=l&&(f+=we+(we>0?-l:l),n=l);for(var i=0;n>i;i++)we>0?(t=D.shift(),D[l-1]=t,f++,Fe((f+2)*ge.x,t.el.style),a.setContent(t,p-n+i+1+1)):(t=D.pop(),D.unshift(t),f--,Fe(f*ge.x,t.el.style),a.setContent(t,p+n-i-1-1));if(oe&&1===Math.abs(we)){var o=Qt(T);o.initialZoomLevel!==x&&(un(o,ve),mn(o),Pe(o))}we=0,a.updateCurrZoomItem(),T=p,Ee("afterChange")}}},updateSize:function(t){if(!be&&s.modal){var n=o.getScrollY();if(_!==n&&(e.style.top=n+"px",_=n),!t&&Ce.x===window.innerWidth&&Ce.y===window.innerHeight)return;Ce.x=window.innerWidth,Ce.y=window.innerHeight,e.style.height=Ce.y+"px"}if(ve.x=a.scrollWrap.clientWidth,ve.y=a.scrollWrap.clientHeight,je(),ge.x=ve.x+Math.round(ve.x*s.spacing),ge.y=ve.y,Le(ge.x*ye),Ee("beforeResize"),void 0!==f){for(var i,r,u,c=0;l>c;c++)i=D[c],Fe((c+f)*ge.x,i.el.style),u=p+c-1,s.loop&&en()>2&&(u=Me(u)),r=Qt(u),r&&(C||r.needsUpdate||!r.bounds)?(a.cleanSlide(r),a.setContent(i,u),1===c&&(a.currItem=r,a.updateCurrZoomItem(!0)),r.needsUpdate=!1):-1===i.index&&u>=0&&a.setContent(i,u),r&&r.container&&(un(r,ve),mn(r),Pe(r));C=!1}g=x=a.currItem.initialZoomLevel,ie=a.currItem.bounds,ie&&(he.x=ie.center.x,he.y=ie.center.y,Ze(!0)),Ee("resize")},zoomTo:function(e,t,n,i,a){t&&(g=x,wt.x=Math.abs(t.x)-he.x,wt.y=Math.abs(t.y)-he.y,_e(fe,he));var r=Be(e,!1),l={};Ve("x",r,l,e),Ve("y",r,l,e);var s=x,u={x:he.x,y:he.y};Ne(l);var c=function(t){1===t?(x=e,he.x=l.x,he.y=l.y):(x=(e-s)*t+s,he.x=(l.x-u.x)*t+u.x,he.y=(l.y-u.y)*t+u.y),a&&a(t),Ze(1===t)};n?it("customZoomTo",0,1,n,i||o.easing.sine.inOut,c):c(1)}},at=30,rt=10,lt={},st={},ut={},ct={},dt={},pt=[],mt={},ft=[],ht={},vt=0,yt=pe(),xt=0,gt=pe(),wt=pe(),bt=pe(),It=function(e,t){return e.x===t.x&&e.y===t.y},Ct=function(e,t){return Math.abs(e.x-t.x)<r&&Math.abs(e.y-t.y)<r},Dt=function(e,t){return ht.x=Math.abs(e.x-t.x),ht.y=Math.abs(e.y-t.y),Math.sqrt(ht.x*ht.x+ht.y*ht.y)},Tt=function(){j&&(P(j),j=null)},Mt=function(){V&&(j=Z(Mt),Yt())},St=function(){return!("fit"===s.scaleMode&&x===a.currItem.initialZoomLevel)},At=function(e,t){return e&&e!==document?e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:t(e)?e:At(e.parentNode,t):!1},Et={},Ot=function(e,t){return Et.prevent=!At(e.target,s.isClickableElement),Ee("preventDragEvent",e,t,Et),Et.prevent},kt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Rt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Zt=function(e,t,n){if(e-Y>50){var i=ft.length>2?ft.shift():{};i.x=t,i.y=n,ft.push(i),Y=e}},Pt=function(){var e=he.y-a.currItem.initialPosition.y;return 1-Math.abs(e/(ve.y/2))},Ft={},Lt={},zt=[],_t=function(e){for(;zt.length>0;)zt.pop();return k?(de=0,pt.forEach(function(e){0===de?zt[0]=e:1===de&&(zt[1]=e),de++})):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(zt[0]=kt(e.touches[0],Ft),e.touches.length>1&&(zt[1]=kt(e.touches[1],Lt))):(Ft.x=e.pageX,Ft.y=e.pageY,Ft.id="",zt[0]=Ft),zt},Nt=function(e,t){var n,i,o,r,l=0,u=he[e]+t[e],c=t[e]>0,d=gt.x+t.x,p=gt.x-mt.x;return n=u>ie.min[e]||u<ie.max[e]?s.panEndFriction:1,u=he[e]+t[e]*n,!s.allowPanToNext&&x!==a.currItem.initialZoomLevel||(oe?"h"!==re||"x"!==e||q||(c?(u>ie.min[e]&&(n=s.panEndFriction,l=ie.min[e]-u,i=ie.min[e]-fe[e]),(0>=i||0>p)&&en()>1?(r=d,0>p&&d>mt.x&&(r=mt.x)):ie.min.x!==ie.max.x&&(o=u)):(u<ie.max[e]&&(n=s.panEndFriction,l=u-ie.max[e],i=fe[e]-ie.max[e]),(0>=i||p>0)&&en()>1?(r=d,p>0&&d<mt.x&&(r=mt.x)):ie.min.x!==ie.max.x&&(o=u))):r=d,"x"!==e)?void(ae||J||x>a.currItem.fitRatio&&(he[e]+=t[e]*n)):(void 0!==r&&(Le(r,!0),J=r===mt.x?!1:!0),ie.min.x!==ie.max.x&&(void 0!==o?he.x=o:J||(he.x+=t.x*n)),void 0!==r)},Ut=function(e){if(!("mousedown"===e.type&&e.button>0)){if(Jt)return void e.preventDefault();if(!X||"mousedown"!==e.type){if(Ot(e,!0)&&e.preventDefault(),Ee("pointerDown"),k){var t=o.arraySearch(pt,e.pointerId,"id");0>t&&(t=pt.length),pt[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=_t(e),i=n.length;Q=null,nt(),V&&1!==i||(V=le=!0,o.bind(window,h,a),B=ce=se=G=J=$=K=q=!1,re=null,Ee("firstTouchStart",n),_e(fe,he),me.x=me.y=0,_e(ct,n[0]),_e(dt,ct),mt.x=ge.x*ye,ft=[{x:ct.x,y:ct.y}],Y=H=Oe(),Be(x,!0),Tt(),Mt()),!ee&&i>1&&!ae&&!J&&(g=x,q=!1,ee=K=!0,me.y=me.x=0,_e(fe,he),_e(lt,n[0]),_e(st,n[1]),Rt(lt,st,bt),wt.x=Math.abs(bt.x)-he.x,wt.y=Math.abs(bt.y)-he.y,te=ne=Dt(lt,st))}}},Ht=function(e){if(e.preventDefault(),k){var t=o.arraySearch(pt,e.pointerId,"id");if(t>-1){var n=pt[t];n.x=e.pageX,n.y=e.pageY}}if(V){var i=_t(e);if(re||$||ee)Q=i;else if(gt.x!==ge.x*ye)re="h";else{var a=Math.abs(i[0].x-ct.x)-Math.abs(i[0].y-ct.y);Math.abs(a)>=rt&&(re=a>0?"h":"v",Q=i)}}},Yt=function(){if(Q){var e=Q.length;if(0!==e)if(_e(lt,Q[0]),ut.x=lt.x-ct.x,ut.y=lt.y-ct.y,ee&&e>1){if(ct.x=lt.x,ct.y=lt.y,!ut.x&&!ut.y&&It(Q[1],st))return;_e(st,Q[1]),q||(q=!0,Ee("zoomGestureStarted"));var t=Dt(lt,st),n=Vt(t);n>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(ce=!0);var i=1,o=Ge(),r=Xe();if(o>n)if(s.pinchToClose&&!ce&&g<=a.currItem.initialZoomLevel){var l=o-n,u=1-l/(o/1.2);ke(u),Ee("onPinchClose",u),se=!0}else i=(o-n)/o,i>1&&(i=1),n=o-i*(o/3);else n>r&&(i=(n-r)/(6*o),i>1&&(i=1),n=r+i*o);0>i&&(i=0),te=t,Rt(lt,st,yt),me.x+=yt.x-bt.x,me.y+=yt.y-bt.y,_e(bt,yt),he.x=ze("x",n),he.y=ze("y",n),B=n>x,x=n,Ze()}else{if(!re)return;if(le&&(le=!1,Math.abs(ut.x)>=rt&&(ut.x-=Q[0].x-dt.x),Math.abs(ut.y)>=rt&&(ut.y-=Q[0].y-dt.y)),ct.x=lt.x,ct.y=lt.y,0===ut.x&&0===ut.y)return;if("v"===re&&s.closeOnVerticalDrag&&!St()){me.y+=ut.y,he.y+=ut.y;var c=Pt();return G=!0,Ee("onVerticalDrag",c),ke(c),void Ze()}Zt(Oe(),lt.x,lt.y),$=!0,ie=a.currItem.bounds;var d=Nt("x",ut);d||(Nt("y",ut),Ne(he),Ze())}}},Wt=function(e){if(N.isOldAndroid){if(X&&"mouseup"===e.type)return;e.type.indexOf("touch")>-1&&(clearTimeout(X),X=setTimeout(function(){X=0},600))}Ee("pointerUp"),Ot(e,!1)&&e.preventDefault();var t;if(k){var n=o.arraySearch(pt,e.pointerId,"id");if(n>-1)if(t=pt.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var i={4:"mouse",2:"touch",3:"pen"};t.type=i[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var r,l=_t(e),u=l.length;if("mouseup"===e.type&&(u=0),2===u)return Q=null,!0;1===u&&_e(dt,l[0]),0!==u||re||ae||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Ee("touchRelease",e,t));var c=-1;if(0===u&&(V=!1,o.unbind(window,h,a),Tt(),ee?c=0:-1!==xt&&(c=Oe()-xt)),xt=1===u?Oe():-1,r=-1!==c&&150>c?"zoom":"swipe",ee&&2>u&&(ee=!1,1===u&&(r="zoomPointerUp"),Ee("zoomGestureEnded")),Q=null,$||q||ae||G)if(nt(),W||(W=Bt()),W.calculateSwipeSpeed("x"),G){var d=Pt();if(d<s.verticalDragRange)a.close();else{var p=he.y,m=ue;it("verticalDrag",0,1,300,o.easing.cubic.out,function(e){he.y=(a.currItem.initialPosition.y-p)*e+p,ke((1-m)*e+m),Ze()}),Ee("onVerticalDrag",1)}}else{if((J||ae)&&0===u){var f=Xt(r,W);if(f)return;r="zoomPointerUp"}if(!ae)return"swipe"!==r?void Kt():void(!J&&x>a.currItem.fitRatio&&Gt(W))}},Bt=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(i){ft.length>1?(e=Oe()-Y+50,t=ft[ft.length-2][i]):(e=Oe()-H,t=dt[i]),n.lastFlickOffset[i]=ct[i]-t,n.lastFlickDist[i]=Math.abs(n.lastFlickOffset[i]),n.lastFlickDist[i]>20?n.lastFlickSpeed[i]=n.lastFlickOffset[i]/e:n.lastFlickSpeed[i]=0,Math.abs(n.lastFlickSpeed[i])<.1&&(n.lastFlickSpeed[i]=0),n.slowDownRatio[i]=.95,n.slowDownRatioReverse[i]=1-n.slowDownRatio[i],n.speedDecelerationRatio[i]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(he[e]>ie.min[e]?n.backAnimDestination[e]=ie.min[e]:he[e]<ie.max[e]&&(n.backAnimDestination[e]=ie.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],n.speedDecelerationRatioAbs[e]<.05&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,it("bounceZoomPan"+e,he[e],n.backAnimDestination[e],t||300,o.easing.sine.out,function(t){he[e]=t,Ze()}))))},calculateAnimOffset:function(e){n.backAnimStarted[e]||(n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10),n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]),n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff,he[e]+=n.distanceOffset[e])},panAnimLoop:function(){return Je.zoomPan&&(Je.zoomPan.raf=Z(n.panAnimLoop),n.now=Oe(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),Ze(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05)?(he.x=Math.round(he.x),he.y=Math.round(he.y),Ze(),void et("zoomPan")):void 0}};return n},Gt=function(e){return e.calculateSwipeSpeed("y"),ie=a.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(tt("zoomPan"),e.lastNow=Oe(),void e.panAnimLoop())},Xt=function(e,t){var n;ae||(vt=p);var i;if("swipe"===e){var r=ct.x-dt.x,l=t.lastFlickDist.x<10;r>at&&(l||t.lastFlickOffset.x>20)?i=-1:-at>r&&(l||t.lastFlickOffset.x<-20)&&(i=1)}var u;i&&(p+=i,0>p?(p=s.loop?en()-1:0,u=!0):p>=en()&&(p=s.loop?0:en()-1,u=!0),(!u||s.loop)&&(we+=i,ye-=i,n=!0));var c,d=ge.x*ye,m=Math.abs(d-gt.x);return n||d>gt.x==t.lastFlickSpeed.x>0?(c=Math.abs(t.lastFlickSpeed.x)>0?m/Math.abs(t.lastFlickSpeed.x):333,c=Math.min(c,400),c=Math.max(c,250)):c=333,vt===p&&(n=!1),ae=!0,Ee("mainScrollAnimStart"),it("mainScroll",gt.x,d,c,o.easing.cubic.out,Le,function(){nt(),ae=!1,vt=-1,(n||vt!==p)&&a.updateCurrItem(),Ee("mainScrollAnimComplete")}),n&&a.updateCurrItem(!0),n},Vt=function(e){return 1/ne*e*g},Kt=function(){var e=x,t=Ge(),n=Xe();t>x?e=t:x>n&&(e=n);var i,r=1,l=ue;return se&&!B&&!ce&&t>x?(a.close(),!0):(se&&(i=function(e){ke((r-l)*e+l)}),a.zoomTo(e,0,200,o.easing.cubic.out,i),!0)};Te("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){M=e+t,S=e+n,A=e+i,E=o?e+o:""};k=N.pointerEvent,k&&N.touch&&(N.touch=!1),k?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):N.touch?(e("touch","start","move","end","cancel"),R=!0):e("mouse","down","move","up"),h=S+" "+A+" "+E,v=M,k&&!R&&(R=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=R,y[M]=Ut,y[S]=Ht,y[A]=Wt,E&&(y[E]=y[A]),N.touch&&(v+=" mousedown",h+=" mousemove mouseup",y.mousedown=y[M],y.mousemove=y[S],y.mouseup=y[A]),R||(s.allowPanToNext=!1)}}});var qt,$t,jt,Jt,Qt,en,tn,nn=function(t,n,i,r){qt&&clearTimeout(qt),Jt=!0,jt=!0;var l;t.initialLayout?(l=t.initialLayout,t.initialLayout=null):l=s.getThumbBoundsFn&&s.getThumbBoundsFn(p);var u=i?s.hideAnimationDuration:s.showAnimationDuration,c=function(){et("initialZoom"),i?(a.template.removeAttribute("style"),a.bg.removeAttribute("style")):(ke(1),n&&(n.style.display="block"),o.addClass(e,"pswp--animated-in"),Ee("initialZoom"+(i?"OutEnd":"InEnd"))),r&&r(),Jt=!1};if(!u||!l||void 0===l.x)return Ee("initialZoom"+(i?"Out":"In")),x=t.initialZoomLevel,_e(he,t.initialPosition),Ze(),e.style.opacity=i?0:1,ke(1),void(u?setTimeout(function(){c()},u):c());var m=function(){var n=d,r=!a.currItem.src||a.currItem.loadError||s.showHideOpacity;t.miniImg&&(t.miniImg.style.webkitBackfaceVisibility="hidden"),i||(x=l.w/t.w,he.x=l.x,he.y=l.y-L,a[r?"template":"bg"].style.opacity=.001,Ze()),tt("initialZoom"),i&&!n&&o.removeClass(e,"pswp--animated-in"),r&&(i?o[(n?"remove":"add")+"Class"](e,"pswp--animate_opacity"):setTimeout(function(){o.addClass(e,"pswp--animate_opacity")},30)),qt=setTimeout(function(){if(Ee("initialZoom"+(i?"Out":"In")),i){var a=l.w/t.w,s={x:he.x,y:he.y},d=x,p=ue,m=function(t){1===t?(x=a,he.x=l.x,he.y=l.y-_):(x=(a-d)*t+d,he.x=(l.x-s.x)*t+s.x,he.y=(l.y-_-s.y)*t+s.y),Ze(),r?e.style.opacity=1-t:ke(p-t*p)};n?it("initialZoom",0,1,u,o.easing.cubic.out,m,c):(m(1),qt=setTimeout(c,u+20))}else x=t.initialZoomLevel,_e(he,t.initialPosition),Ze(),ke(1),r?e.style.opacity=1:ke(1),qt=setTimeout(c,u+20)},i?25:90)};m()},on={},an=[],rn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return $t.length}},ln=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},sn=function(e,t,n){var i=e.bounds;i.center.x=Math.round((on.x-t)/2),i.center.y=Math.round((on.y-n)/2)+e.vGap.top,i.max.x=t>on.x?Math.round(on.x-t):i.center.x,i.max.y=n>on.y?Math.round(on.y-n)+e.vGap.top:i.center.y,i.min.x=t>on.x?0:i.center.x,i.min.y=n>on.y?e.vGap.top:i.center.y},un=function(e,t,n){if(e.src&&!e.loadError){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),Ee("parseVerticalMargin",e)),on.x=t.x,on.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=on.x/e.w,a=on.y/e.h;e.fitRatio=a>o?o:a;var r=s.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),n>1&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=ln())}if(!n)return;return sn(e,e.w*n,e.h*n),i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=ln(),e.initialPosition=e.bounds.center,e.bounds},cn=function(e,t,n,i,o,r){t.loadError||i&&(t.imageAppended=!0,mn(t,i,t===a.currItem&&De),n.appendChild(i),r&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},dn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=o.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},pn=function(e,t){return e.src&&e.loadError&&e.container?(t&&(e.container.innerHTML=""),e.container.innerHTML=s.errorMsg.replace("%url%",e.src),!0):void 0},mn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},fn=function(){if(an.length){for(var e,t=0;t<an.length;t++)e=an[t],e.holder.index===e.index&&cn(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);an=[]}};Te("Controller",{publicMethods:{lazyLoadItem:function(e){e=Me(e);var t=Qt(e);t&&(!t.loaded&&!t.loading||C)&&(Ee("gettingData",e,t),t.src&&dn(t))},initController:function(){o.extend(s,rn,!0),a.items=$t=n,Qt=a.getItemAt,en=s.getNumItemsFn,tn=s.loop,en()<3&&(s.loop=!1),Ae("beforeChange",function(e){var t,n=s.preload,i=null===e?!0:e>=0,o=Math.min(n[0],en()),r=Math.min(n[1],en());for(t=1;(i?r:o)>=t;t++)a.lazyLoadItem(p+t);for(t=1;(i?o:r)>=t;t++)a.lazyLoadItem(p-t)}),Ae("initialLayout",function(){a.currItem.initialLayout=s.getThumbBoundsFn&&s.getThumbBoundsFn(p)}),Ae("mainScrollAnimComplete",fn),Ae("initialZoomInEnd",fn),Ae("destroy",function(){for(var e,t=0;t<$t.length;t++)e=$t[t],e.container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);an=null})},getItemAt:function(e){return e>=0&&void 0!==$t[e]?$t[e]:!1},allowProgressiveImg:function(){return s.forceProgressiveLoading||!R||s.mouseUsed||screen.width>1200},setContent:function(e,t){s.loop&&(t=Me(t));var n=a.getItemAt(e.index);n&&(n.container=null);var i,r=a.getItemAt(t);if(!r)return void(e.el.innerHTML="");Ee("gettingData",t,r),e.index=t,e.item=r;var l=r.container=o.createEl("pswp__zoom-wrap");if(!r.src&&r.html&&(r.html.tagName?l.appendChild(r.html):l.innerHTML=r.html),pn(r),un(r,ve),!r.src||r.loadError||r.loaded)r.src&&!r.loadError&&(i=o.createEl("pswp__img","img"),i.style.opacity=1,i.src=r.src,mn(r,i),cn(t,r,l,i,!0));else{if(r.loadComplete=function(n){if(u){if(e&&e.index===t){if(pn(n,!0))return n.loadComplete=n.img=null,un(n,ve),Pe(n),void(e.index===p&&a.updateCurrZoomItem());n.imageAppended?!Jt&&n.placeholder&&(n.placeholder.style.display="none",n.placeholder=null):N.transform&&(ae||Jt)?an.push({item:n,baseDiv:l,img:n.img,index:t,holder:e,clearPlaceholder:!0}):cn(t,n,l,n.img,ae||Jt,!0)}n.loadComplete=null,n.img=null,Ee("imageLoadComplete",t,n)}},o.features.transform){var c="pswp__img pswp__img--placeholder";c+=r.msrc?"":" pswp__img--placeholder--blank";var d=o.createEl(c,r.msrc?"img":"");r.msrc&&(d.src=r.msrc),mn(r,d),l.appendChild(d),r.placeholder=d}r.loading||dn(r),a.allowProgressiveImg()&&(!jt&&N.transform?an.push({item:r,baseDiv:l,img:r.img,index:t,holder:e}):cn(t,r,l,r.img,!0,!0))}jt||t!==p?Pe(r):(oe=l.style,nn(r,i||r.img)),e.el.innerHTML="",e.el.appendChild(l)},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var hn,vn={},yn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)};Te("Tap",{publicMethods:{initTap:function(){Ae("firstTouchStart",a.onTapStart),Ae("touchRelease",a.onTapRelease),Ae("destroy",function(){vn={},hn=null})},onTapStart:function(e){e.length>1&&(clearTimeout(hn),hn=null)},onTapRelease:function(e,t){if(t&&!$&&!K&&!Qe){var n=t;if(hn&&(clearTimeout(hn),hn=null,Ct(n,vn)))return void Ee("doubleTap",n);if("mouse"===t.type)return void yn(e,t,"mouse");var i=e.target.tagName.toUpperCase();if("BUTTON"===i||o.hasClass(e.target,"pswp__single-tap"))return void yn(e,t);_e(vn,n),hn=setTimeout(function(){yn(e,t),hn=null},300)}}}});var xn;Te("DesktopZoom",{publicMethods:{initDesktopZoom:function(){z||(R?Ae("mouseUsed",function(){a.setupDesktopZoom()}):a.setupDesktopZoom(!0))},setupDesktopZoom:function(t){xn={};var n="wheel mousewheel DOMMouseScroll";Ae("bindEvents",function(){o.bind(e,n,a.handleMouseWheel)}),Ae("unbindEvents",function(){xn&&o.unbind(e,n,a.handleMouseWheel)}),a.mouseZoomedIn=!1;var i,r=function(){a.mouseZoomedIn&&(o.removeClass(e,"pswp--zoomed-in"),a.mouseZoomedIn=!1),1>x?o.addClass(e,"pswp--zoom-allowed"):o.removeClass(e,"pswp--zoom-allowed"),l()},l=function(){i&&(o.removeClass(e,"pswp--dragging"),i=!1)};Ae("resize",r),Ae("afterChange",r),Ae("pointerDown",function(){a.mouseZoomedIn&&(i=!0,o.addClass(e,"pswp--dragging"))}),Ae("pointerUp",l),t||r()},handleMouseWheel:function(e){if(x<=a.currItem.fitRatio)return s.modal&&(!s.closeOnScroll||Qe||V?e.preventDefault():O&&Math.abs(e.deltaY)>2&&(d=!0,a.close())),!0;if(e.stopPropagation(),xn.x=0,"deltaX"in e)1===e.deltaMode?(xn.x=18*e.deltaX,xn.y=18*e.deltaY):(xn.x=e.deltaX,xn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(xn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?xn.y=-.16*e.wheelDeltaY:xn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;xn.y=e.detail}Be(x,!0);var t=he.x-xn.x,n=he.y-xn.y;(s.modal||t<=ie.min.x&&t>=ie.max.x&&n<=ie.min.y&&n>=ie.max.y)&&e.preventDefault(),a.panTo(t,n)},toggleDesktopZoom:function(t){t=t||{x:ve.x/2+xe.x,y:ve.y/2+xe.y};var n=s.getDoubleTapZoom(!0,a.currItem),i=x===n;a.mouseZoomedIn=!i,a.zoomTo(i?a.currItem.initialZoomLevel:n,t,333),o[(i?"remove":"add")+"Class"](e,"pswp--zoomed-in")}}});var gn,wn,bn,In,Cn,Dn,Tn,Mn,Sn,An,En,On,kn={history:!0,galleryUID:1},Rn=function(){return En.hash.substring(1)},Zn=function(){gn&&clearTimeout(gn),bn&&clearTimeout(bn)},Pn=function(){var e=Rn(),t={};if(e.length<5)return t;var n,i=e.split("&");for(n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(t[o[0]]=o[1])}if(s.galleryPIDs){var a=t.pid;for(t.pid=0,n=0;n<$t.length;n++)if($t[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},Fn=function(){if(bn&&clearTimeout(bn),Qe||V)return void(bn=setTimeout(Fn,500));In?clearTimeout(wn):In=!0;var e=p+1,t=Qt(p);t.hasOwnProperty("pid")&&(e=t.pid);var n=Tn+"&gid="+s.galleryUID+"&pid="+e;Mn||-1===En.hash.indexOf(n)&&(An=!0);var i=En.href.split("#")[0]+"#"+n;On?"#"+n!==window.location.hash&&history[Mn?"replaceState":"pushState"]("",document.title,i):Mn?En.replace(i):En.hash=n,Mn=!0,wn=setTimeout(function(){In=!1},60)};Te("History",{publicMethods:{initHistory:function(){if(o.extend(s,kn,!0),s.history){En=window.location,An=!1,Sn=!1,Mn=!1,Tn=Rn(),On="pushState"in history,Tn.indexOf("gid=")>-1&&(Tn=Tn.split("&gid=")[0],Tn=Tn.split("?gid=")[0]),Ae("afterChange",a.updateURL),Ae("unbindEvents",function(){o.unbind(window,"hashchange",a.onHashChange)});var e=function(){Dn=!0,Sn||(An?history.back():Tn?En.hash=Tn:On?history.pushState("",document.title,En.pathname+En.search):En.hash=""),Zn()};Ae("unbindEvents",function(){d&&e()}),Ae("destroy",function(){Dn||e()}),Ae("firstUpdate",function(){p=Pn().pid});var t=Tn.indexOf("pid=");t>-1&&(Tn=Tn.substring(0,t),"&"===Tn.slice(-1)&&(Tn=Tn.slice(0,-1))),setTimeout(function(){u&&o.bind(window,"hashchange",a.onHashChange)},40)}},onHashChange:function(){return Rn()===Tn?(Sn=!0,void a.close()):void(In||(Cn=!0,a.goTo(Pn().pid),Cn=!1))},updateURL:function(){Zn(),Cn||(Mn?gn=setTimeout(Fn,800):Fn())}}}),o.extend(a,ot)};return e});
