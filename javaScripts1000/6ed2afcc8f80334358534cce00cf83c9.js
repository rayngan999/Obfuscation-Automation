!function(){var h,l=null,o=1e3,s=30,c=50,u=242500,m="https://s.yimg.com/rq/iv/",r="hidden",a="visible",d=1,f=5,p="",g="x_vi_di",v="x_vi_di_exp",w="data-vwb",T=[1,5,20],y=10,i="x_vi_di_processed",b="getAttribute",V=1,I="1.0.259",C="inViewPercentage",k="resize",x="unload",E="beforeunload",P=20,A=20,e=5,n=5,S=10,M=.9,H="data-request-id",L="["+H+"]",W=250,D=1e4;function t(t,e,i){var n=i||"";try{n=t&&e in t?t[e]:n}catch(r){}return n}function R(t){return parseFloat(t,10)}function B(t){return t===+t&&t===(0|t)}h=navigator.sendBeacon?function(t,e){navigator.sendBeacon(t,e)}:function(t,e){e=e||"",(new Image).src=t+e};var O,N,F,Y,$,_,z,q,X,U,j,G=window,K=document,J=(t(G,"screen",l),t(G,"navigator",l)),Q=(t(G,"location",l),t(J,"language",""),t(J,"platform",""),t(J,"userAgent","")),Z=Q.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i),tt=RegExp.$1.toLowerCase(),et=parseFloat(Q.match(/version\/([\d]+)/i)&&RegExp.$1||Z&&Z[2]||""),it=(Q.match(/((ip)(hone|ad|od)|playbook|hp-tablet)/i)&&RegExp.$1.toLowerCase(),Q.match(/(android|blackberry|bb10|macintosh|webos|windows)/i)&&RegExp.$1.toLowerCase(),!1),nt=!1,rt=!1,at=!1,ot=!1,st=(new Date).getTime();function ct(t){var e=1;try{""===(e=(G.getComputedStyle&&G.getComputedStyle(t,l)||t.currentStyle).opacity)&&(e=1)}catch(i){}return e}function ut(t,e){return ct(t)<=e}function ht(t){var e={width:0,height:0,valid:!0};try{var i=G.getComputedStyle&&G.getComputedStyle(t,l)||t.currentStyle;e.width=R(i.width)||0,e.height=R(i.height)||0}catch(n){e.width=0,e.height=0,e.valid=!1}return e}function lt(t,e,i){var n=ht(t);return n.width<=e||n.height<=i}function mt(t,e,i,n,r){if(r=r||function(){return!0},!lt(t,i,n))return t;for(var a=0;a<e.length;a++)for(var o=t.getElementsByTagName(e[a]),s=0;s<o.length;s++)if(!lt(o[s],i,n)&&r(o[s]))return o[s];return undefined}function dt(t,e){if(0<arguments.length&&B(t)&&B(e))_=t,$=e;else{var i=function r(){var t,e;if(rt)try{t=K.documentElement&&Math.max(K.documentElement.clientWidth,K.documentElement.scrollWidth)||G.frameElement&&G.frameElement.width||l,e=K.documentElement&&Math.max(K.documentElement.clientHeight,K.documentElement.scrollHeight)||G.frameElement&&G.frameElement.height||l}catch(n){t=G.innerWidth||K.body&&K.body.clientWidth||l,e=G.innerHeight||K.body&&K.body.clientHeight||l}else{var i=ht(U);t=i.width||l,e=i.height||l}return[t,e]}();_=i[0],$=i[1]}q=(z=u<=_*$)?s:c}function ft(t,e){for(var i=e&&e.parentNode;null!==i;){if(i===t)return!0;i=i.parentNode}return!1}function pt(t,e){if("IFRAME"!==t.nodeName||"IFRAME"!==e.nodeName)return!1;for(var i=t.contentWindow;i!==G.top;)if((i=i.parent).frameElement===e)return!0;return!1}function gt(t){var e=G.top.getComputedStyle?G.top.getComputedStyle(t,null):t.currentStyle;if("none"===e.display||"hidden"===e.visibility)return!0;if("img"===t.tagName.toLowerCase()||"video"===t.tagName.toLowerCase())return!1;if("transparent"!==e.backgroundColor&&0!==parseFloat(e.backgroundColor.split(",")[3]))return!1;for(var i=0;i<t.childNodes.length;i++){if(!gt(t.childNodes[i]))return!1}return!0}function vt(t){if("img"===t.tagName.toLowerCase()||"video"===t.tagName.toLowerCase())return!0;for(var e=0;e<t.childNodes.length;e++){if(vt(t.childNodes[e]))return!0}return!1}function wt(t,e,i,n,r,a){if(i<P||n<A)return!1;for(var o=function d(t,e,i,n){for(var r=[],a=Math.floor(e/n),o=Math.floor(i/n),s=Math.max(0,t.left),c=t.top,u=1;u<n;u++)for(var h=s+a*u,l=1;l<n;l++){var m=c+o*l;r[r.length]=[h,m]}return r}(e,i,n,S),s=0,c=0,u=o.length;c<u;c++){var h=o[c][0],l=o[c][1],m=a&&a.elementFromPoint&&a.elementFromPoint(h,l);m&&m!==t&&!ft(t,m)&&!pt(t,m)&&ct(m)>M&&!gt(m)&&s++}return 100-s/o.length*100<r}function Tt(t,e){if(e=void 0===e?{top:0,left:0}:e,t!==t.top){var i=t.frameElement.getBoundingClientRect();e.left+=i.left,e.top+=i.top,e=Tt(t.parent,e)}return e}function yt(){try{var t=function s(){var t,e;try{if(rt){if(!at)return l;t=G.top.document,e=G.top}else t=K,e=G;return{height:e.innerHeight||t.documentElement.clientHeight||t.body&&t.body.clientHeight,width:e.innerWidth||t.documentElement.clientWidth||t.body&&t.body.clientWidth}}catch(i){return l}}();if(rt&&t)for(var e=["div","video","iframe"],i=0;i<e.length;i++)for(var n=K.body.getElementsByTagName(e[i]),r=0;r<n.length;r++)if(vt(n[r])&&!lt(n[r],P,A)){var a=n[r].getBoundingClientRect(),o=Tt(G,{top:a.top,left:a.left});if(o&&(o.left>=t.width||o.left+a.width<=0||o.top>=t.height||o.top+a.height<=0))return 1}}catch(c){}return 0}function bt(){return(Vt(P,A)<<1)+(Vt(e,n)<<2)+(function t(){return function s(t,e,i,n){if(n=n||function(){return!0},!ut(t,e))return t;for(var r=0;r<i.length;r++)for(var a=t.getElementsByTagName(i[r]),o=0;o<a.length;o++)if(!ut(a[o],e)&&n(a[o]))return a[o];return undefined}(U,0,["div","iframe"])?0:1}()<<3)}function Vt(t,e){var i;try{i=mt(U,["div","video","iframe","ins"],t,e)}catch(n){}return i?0:1}function It(t,e){if(X=t,function n(){try{at=!!G.top.document}catch(t){}}(),function r(){O=at&&nt?G.parent:G}(),function a(){ot=G.$sf&&G.$sf.ext&&"function"==typeof G.$sf.ext[C]||!1}(),function o(){try{it=/((iPhone|iPod|iPad).*AppleWebKit(?!.*(Safari|CriOS)))/i.test(Q)||"chrome"===tt&&(/wv\).* Chrome.* Mobile/i.test(Q)||/Version\/\d*\.\d* (?:Chrome.* Mobile)?/i.test(Q))||/(MSAppHost\/.*|WebView)/.test(Q)}catch(t){}}(),function s(){N=-1!==Q.indexOf("Chrome/")?1:-1!==Q.indexOf("Firefox/")?2:-1!==Q.indexOf("; MSIE")?3:-1!==Q.indexOf("Safari/")?4:-1!==Q.indexOf("WebKit")?5:-1!==Q.indexOf("Gecko")?6:7}(),function c(){"undefined"!=typeof K.hidden?(F="hidden",Y="visibilitychange"):"undefined"!=typeof K.mozHidden?(F="mozHidden",Y="mozvisibilitychange"):"undefined"!=typeof K.webkitHidden?(F="webkitHidden",Y="webkitvisibilitychange"):"undefined"!=typeof K.msHidden&&(F="msHidden",Y="msvisibilitychange")}(),e)U=e;else if(rt)if(at)try{U=G.frameElement}catch(u){U=l}else{var i=mt(U=K.body||l,["div","video"],P,A);i&&(U=i)}else U=X&&(X.parentElement||X.parentNode)||l;return function h(){if(0!==bt()){var t=setInterval(function(){0===bt()&&clearInterval(t)},1e3);setTimeout(function(){t&&clearInterval(t)},1e4)}}(),X!==l&&X!==undefined&&U!==l&&U!==undefined}function Ct(t,e){return Math.floor((e-t)/1e3)}function kt(t,e,i){(i=i||G).addEventListener?i.addEventListener(t,e):i.attachEvent&&i.attachEvent("on"+t,e)}function xt(t,e,i){(i=i||G).removeEventListener?i.removeEventListener(t,e):i.detachEvent&&i.detachEvent("on"+t,e)}function Et(t,e){var i,n,r,a,o=d<t?t-d:0,s=d<e?e-d:0,c=[],u={};for(i=.5;i<f;i+=1)for(r=Math.round(i*o/f),n=.5;n<f;n+=1)u[a=r+"_"+Math.round(n*s/f)]||(c.push(a),u[a]=1);return c}function Pt(t){var e=(new Date).getTime();t.scr=1,t.sct||(t.sct=Ct(st,e)),t.scrollStartTime&&0!==t.scrollStartTime||(t.scrollStartTime=e,t.scrollStartY=O.scrollY),j||clearTimeout(j),j=setTimeout(function(){!function o(t){var e,i=(new Date).getTime(),n=Ct(t.scrollStartTime,i),r=O.scrollY-t.scrollStartY,a=O.document.body.clientHeight;a=a||O.document.body.height,(e=Math.round(O.scrollY/a*100))>t.scd&&(t.scd=e),0<r?(t.scrolledDownPixels+=r,t.scrolledDownTime+=n):(t.scrolledUpPixels-=r,t.scrolledUpTime+=n),t.scrollStartTime=0}(t)},250)}function At(t){kt("mouseover",function(){!function i(t){var e=(new Date).getTime();t.hov=1,t.tth||(t.tth=Ct(st,e)),t.hoverStartTime=e}(t)}),kt("mouseout",function(){!function i(t){var e=(new Date).getTime();500<Ct(t.hoverStartTime,e)&&(t.intt=1,t.intl=e,t.tti=Ct(st,e))}(t)})}function St(t){var e=(new Date).getTime();K[F]&&0<t.dwellStartTime?t.adt+=Ct(t.dwellStartTime,e):(t.foc=1,t.dwellStartTime=e)}!function ke(){try{var t=G.parent,e=G.top;nt=!(!e||!t||e!=t||e==G),rt=!(!t||t==G)}catch(i){}}();var Mt={w:0,h:0,mw:-1,mh:-1,bl:-1,bt:-1,ew:-1,eh:-1,ex:-1,ey:-1,vw:-1,vh:-1,sx:-1,sy:-1,ivp:-1,ivd:-1,pt:-1,mi:-1,b:-1,gm0:0,gm1:0,m:-1,tivt:0,hov:2,tth:0,intt:2,intl:0,tti:0,st:0,foc:2,adt:0,scr:2,scd:0,svd:0,svu:0,sct:0,mivp:0,mivt:0,ls:0,winl:"",winr:"",lvl:0,al:3,ae:0,bct:2,ph:-1,dwellStartTime:0,scrolledUpPixels:0,scrolledUpTime:0,scrolledDownPixels:0,scrolledDownTime:0,avoc:0,avoc_debug:0,firstInViewTime:Number.MAX_SAFE_INTEGER};function Ht(){rt&&At(Mt),function e(t){K[F]||St(t),kt(Y,function(){St(t)},K)}(Mt),(!rt||at&&nt)&&function i(t){kt("scroll",function(){Pt(t)},O)}(Mt),function t(){var a;a=G.onerror,G.onerror=function(t,e,i,n,r){return Mt.ae+=1,!!a&&a(t,e,i,n,r)}}()}var Lt,Wt,Dt=(Lt=(new Date).getTime()-Rt(1e5),Wt=Rt(100),function xe(t){var e=Lt;Lt+=Wt,Wt=Rt(100);try{t=t&&String(t)}catch(i){t=""}return e=(t=t||"$yinsideIV")+"_"+e});function Rt(t){return Math.floor(Math.random()*(10*t))}function Bt(t,e,i,n){for(var r=!1,a=0;a<e.length;a++)-1<t.indexOf(e[a])&&(t=t.replace(new RegExp(e[a],"g"),n),r=!0);return r||(t+="&"+i+"="+n),t}function Ot(t,e,i,n,r,a,o){var s=(new Date).getTime();if(t)try{t=Bt(t=Bt(t=Bt(t=Bt(t=Bt(t=Bt(t=Bt(t,["%InViewPercentage%","{pctview}"],"iv",r.getAverageInViewPercentage()),["%Viewable%","{initview}"],"v",i?"1":"2"),["%Measurable%","{Measurable}"],"im",n?"1":"2"),["%MeasurementType%","{MeasurementType}"],"m",e),["%Timestamp%","{Timestamp}"],"r",s),["%BucketId%","{BucketId}"],"b",V),["%AdditionalData%","{AdditionalData}"],"ad","jv="+I+(o&&""!==o?":"+o:"")+":"+function c(t){var e="tp="+(z?"2":"1");return e+=":mt="+t.measurementBucket}(r)),a&&(t+="&"+a),h(t)}catch(u){}}var Nt=function(t){this.adWidth=t.adWidth,this.adHeight=t.adHeight,this.inViewCallback=t.inViewCallback,this.outOfViewCallback=t.outOfViewCallback,this.thresholdPercentage=t.thresholdPercentage||q,this.inViewPercentage=0,this.inViewPercentages=[],this.maxInViewPercentage=0,this.inView=!1,this.isMeasurable=!0,this.isCurrentlyInView=!1,this.currentTimestamp=0,this.lastTimestamp=0,this.nextTimestamp=0,this.totalInViewTime=0,this.lastTotalInViewTime=0,this.maxInViewTime=0,this.totalInView100Time=0,this.inView100StartTime=0,this.lastInView100Timestamp=0,this.inView100For0Sec=0,this.inView100For1Sec=0,this.stopCallbacks=!1,this.adLoaded=t.adLoaded,this.playerId=t.playerId,this.adUnit=t.adUnit,this.adSizeChanged=t.adSizeChanged,this.adVideoComplete=t.adVideoComplete,this.adIsVideo=!1,this.adVideoIsPlayingInView=!1,this.flashNotSupported=0,this.trackedElement=U};Nt.prototype.beaconTimeout=o,Nt.prototype.measurementBucket="2",Nt.prototype.aihv=0,Nt.prototype.adStackedInView=0,Nt.prototype.hasCheckedAdStacked=!1,Nt.prototype.adStuffedInView=0,Nt.prototype.hasCheckedAdStuffed=!1,Nt.prototype.init=function(){var t=this;try{kt(Y,function(){t.currentEntry&&t.inViewListenerCallback({time:(new Date).getTime(),intersectionRatio:t.currentEntry.intersectionRatio})},K)}catch(e){}this.registerInViewListener()},Nt.prototype.canApplyMethod=function(){return!1},Nt.prototype.registerInViewListener=function(){},Nt.prototype.inViewListenerCallback=function(t){this.currentEntry=t,this.currentTimestamp=t.time,this.updateInViewPercentages(t),this.isInView()&&!K[F]?(this.updateTimestamps(),this.isCurrentlyInView,this.isCurrentlyInView=!0,this.stopCallbacks||this.inViewCallback(),this.isInView100()?this.updateTimestamps100():this.resetTimestamps100(),this.aihv=bt(),this.hasCheckedAdStacked&&1!==this.adStackedInView||(this.adStackedInView=function a(){var t;try{if(rt){if(!at)return 0;t=G.top.document}else t=K;var e,i=U.getBoundingClientRect(),n=i.width*i.height>=u?s:c;return e=rt?Tt(G):{top:i.top,left:i.left},wt(U,e,i.width,i.height,n,t)?1:0}catch(r){return 0}}(),this.hasCheckedAdStacked=!0),this.hasCheckedAdStuffed&&1!==this.adStuffedInView||(this.adStuffedInView=yt(),this.hasCheckedAdStuffed=!0),this.adIsVideo&&(this.aihv=this.adVideoIsPlayingInView?this.aihv:0,this.adStackedInView=this.adStackedInView&&this.adVideoIsPlayingInView?1:0,this.adStuffedInView=this.adStuffedInView&&this.adVideoIsPlayingInView?1:0)):(this.isCurrentlyInView,this.resetTimestamps(),this.resetTimestamps100(),this.isCurrentlyInView=!1,this.inView=!1,this.stopCallbacks||this.outOfViewCallback())},Nt.prototype.metViewableStandard=function(){this.inView=this.isCurrentlyInView,this.stopCallbacks=!0,this.currentTimestamp=(new Date).getTime(),this.isCurrentlyInView?this.updateTimestamps():this.resetTimestamps(),this.lastTotalInViewTime=this.totalInViewTime},Nt.prototype.updateInViewPercentages=function(t){this.inViewPercentage=t.intersectionRatio,this.maxInViewPercentage<this.inViewPercentage&&(this.maxInViewPercentage=this.inViewPercentage),this.inViewPercentages.push(this.inViewPercentage)},Nt.prototype.updateTimestamps=function(){return 0<this.lastTimestamp&&(this.totalInViewTime+=this.currentTimestamp-this.lastTimestamp,this.maxInViewTime<this.totalInViewTime&&(this.maxInViewTime=this.totalInViewTime),this.lastTotalInViewTime=this.totalInViewTime),this.lastTimestamp=this.currentTimestamp,this.lastTimestamp},Nt.prototype.isInView=function(){return this.inViewPercentage>=this.thresholdPercentage},Nt.prototype.isSufficientlyInView=function(){return this.totalInViewTime>=this.beaconTimeout},Nt.prototype.resetTimestamps=function(){this.updateTimestamps(),this.lastTimestamp=this.nextTimestamp=this.totalInViewTime=0,this.inViewPercentages=[]},Nt.prototype.updateTimestamps100=function(){this.inView100For0Sec=1,0<this.lastInView100Timestamp?this.totalInView100Time+=this.currentTimestamp-this.lastInView100Timestamp:this.inView100StartTime=this.currentTimestamp,this.lastInView100Timestamp=this.currentTimestamp,this.totalInView100Time>this.beaconTimeout&&(this.inView100For1Sec=1)},Nt.prototype.isInView100=function(){return 99<this.inViewPercentage},Nt.prototype.resetTimestamps100=function(){this.lastInView100Timestamp=this.totalInView100Time=this.inView100StartTime=0},Nt.prototype.cleanup=function(){},Nt.prototype.reset=function(){},Nt.extend=function(){var e=function(t){e.parent.call(this,t)};e.prototype=Object.create!==undefined?Object.create(this.prototype):new this({}),(e.prototype.constructor=e).parent=this,e.extend=this.extend;for(var t=0;t<arguments.length;t++){var i=arguments[t];for(var n in undefined!==i.prototype&&(i=i.prototype),i)i.hasOwnProperty(n)&&(e.prototype[n]=i[n])}return e},Nt.prototype.getAverageInViewPercentage=function(){var t,e=this.inViewPercentages.length,i=0;for(t=0;t<e;t++)i+=this.inViewPercentages[t];return e?Math.round(i/e):0},Nt.prototype.updateTrackingElement=function(t){this.markAsNotMeasurable()},Nt.prototype.markAsNotMeasurable=function(){this.isMeasurable=!1,this.cleanup(),this.stopCallbacks||(this.stopCallbacks=!0,this.outOfViewCallback(!0))};var Ft,Yt=Nt.extend({fineTimeout:100,coarseTimeout:750,registerInViewListener:function(){var t=this;this.timeout=this.notInViewTimerWrapper(function(){t.fireInViewListenerCallback()})},fireInViewListenerCallback:function(){var t={intersectionRatio:this.getInViewPercentage(),time:(new Date).getTime()},e=this;this.inViewListenerCallback(t),this.timeout=this[this.isCurrentlyInView?"inViewTimerWrapper":"notInViewTimerWrapper"](function(){e.fireInViewListenerCallback()})},getInViewPercentage:function(){return 0},notInViewTimerWrapper:function(t){return setTimeout(t,this.coarseTimeout)},inViewTimerWrapper:function(t){return setTimeout(t,this.fineTimeout)},cleanup:function(){clearTimeout(this.timeout)},measurementBucket:"0"});function $t(t){var e={x:0,y:0};return t.x>=t.scrlX&&t.x+t.halfWidth<t.scrlX+t.viewportWidth?e.x=t.scrlX+t.viewportWidth-t.x:t.x+t.halfWidth>t.scrlX&&t.x+t.adWidth<=t.scrlX+t.viewportWidth?e.x=t.x+t.adWidth-t.scrlX:t.x<t.scrlX&&t.x+t.adWidth>t.scrlX+t.viewportWidth&&t.viewportWidth>=t.halfWidth&&(e.x=t.viewportWidth),t.y>=t.scrlY&&t.y+t.halfHeight<t.scrlY+t.viewportHeight?e.y=t.scrlY+t.viewportHeight-t.y:t.y+t.halfHeight>t.scrlY&&t.y+t.adHeight<=t.scrlY+t.viewportHeight?e.y=t.y+t.adHeight-t.scrlY:t.y<t.scrlY&&t.y+t.adHeight>t.scrlY+t.viewportHeight&&t.viewportHeight>=t.halfHeight&&(e.y=t.viewportHeight),e}function _t(t){return t.scrlX=0,t.scrlY=0,$t(t)}var zt=Yt.extend({init:function(){!function t(){1===N||4===N||5===N||7===N?Ft=$t:2!==N&&3!==N&&6!==N||(Ft=_t)}(),this.registerInViewListener()},getBoundingClientRect:function(){return this.trackedElement.getBoundingClientRect()},getInViewPercentage:function(){try{return function h(t){var e,i=t.bcr,n=t.adWidth,r=t.adHeight,a=n&&r?n*r:0,o=G.parent,s=o.document,c=s.body,u={};return u.x=Math.round(i.left+c.scrollLeft),u.y=Math.round(i.top+c.scrollTop),u.adWidth=n,u.adHeight=r,u.halfWidth=Math.floor(n/2),u.halfHeight=Math.floor(r/2),u.viewportWidth=Math.max(s.documentElement.clientWidth,G.innerWidth||0),u.viewportHeight=Math.max(s.documentElement.clientHeight,G.innerHeight||0),u.scrlX=o.scrollX,u.scrlY=o.scrollY,(e=Ft(u)).x>n&&(e.x=n),e.y>r&&(e.y=r),a?Math.round(100*e.x*e.y/a):0}({bcr:this.getBoundingClientRect(),adWidth:_,adHeight:$})}catch(t){}return 0},updateTrackingElement:function(t){this.trackedElement=t}}),qt=zt.extend({canApplyMethod:function(){return!it&&!rt},measurementBucket:"6"}),Xt=zt.extend({canApplyMethod:function(){return!it&&at&&nt},getBoundingClientRect:function(){if(this.trackedElement.ownerDocument!==K)return this.trackedElement.getBoundingClientRect();var t=this.trackedElement.getBoundingClientRect(),e={left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width,height:t.height};try{if(G.frameElement!==this.trackedElement){var i=G.frameElement.getBoundingClientRect();e.left+=i.left,e.right+=i.left,e.top+=i.top,e.bottom+=i.top}}catch(n){}return e},measurementBucket:"2"}),Ut=Yt.extend({coarseTimeout:100,canApplyMethod:function(){return!it&&ot},getInViewPercentage:function(){return G.$sf.ext[C]()},getGeometrics:function(){return G.$sf.ext.geom()},measurementBucket:"1"});function jt(t){var e,i,n,r,a;for(t.tags=Et(_,$),t.numTag=t.tags.length,t.tagArray=[],e=0;e<t.numTag;e++)t.tagArray.push((n=(i=t).tags[e],r=void 0,2===(a=n.split("_")).length&&((r=K.createElement("iframe")).style.cssText="width:"+d+"px;height:"+d+"px;left:"+a[0]+"px;top:"+a[1]+"px;position:absolute;background-color:transparent;",r.scrolling="no",r.allowtransparency="true",r.hidefocus="true",r.setAttribute("frameBorder","0"),r.id=n,i.lastMozPaintCounts[n]=0,i.paintCounts[n]=0,i.paintTimestamps[n]=0,i.lastPaintCounts[n]=0,i.lastPaintTimestamps[n]=0),r));for(e=0;e<t.numTag;e++)K.body.appendChild(t.tagArray[e])}function Gt(e,i){var t=G.requestAnimationFrame||G.mozRequestAnimationFrame||l;!function n(t,e){var i=K.getElementById(e);i&&(i.style.visibility=i.style.visibility===r?a:r)}(0,i),t&&t(function(t){!function o(t,e,i){var n,r;if((t.paintTimestamps[i]=e)>t.lastPaintTimestamps[i]&&(r=K.getElementById(i))){try{(n=r.contentWindow).document||(n=l)}catch(a){n=l}n&&n.mozPaintCount>t.lastMozPaintCounts[i]&&(t.paintCounts[i]+=1,t.lastMozPaintCounts[i]=n.mozPaintCount)}}(e,t,i)})}function Kt(t){var e;for(e=0;e<t.numTag;e++)Gt(t,t.tags[e])}var Jt=Yt.extend({canApplyMethod:function(){return!it&&"mozPaintCount"in G},init:function(){this.lastMozPaintCounts={},this.paintCounts={},this.paintTimestamps={},this.lastPaintCounts={},this.lastPaintTimestamps={},jt(this),Kt(this),this.registerInViewListener()},getInViewPercentage:function(){var t=function r(t){var e,i,n=0;for(e=0;e<t.numTag;e++)i=t.tags[e],t.paintTimestamps[i]>t.lastPaintTimestamps[i]&&(t.paintCounts[i]>t.lastPaintCounts[i]&&(n+=1),t.lastPaintCounts[i]=t.paintCounts[i],t.lastPaintTimestamps[i]=t.paintTimestamps[i]);return n}(this);return Kt(this),this.numTag?100*t/this.numTag:0},notInViewTimerWrapper:function(t){var e=this;return setTimeout(function(){Kt(e),e.timeout=setTimeout(t,.5*e.coarseTimeout)},.5*this.coarseTimeout)},inViewTimerWrapper:function(t){var e=this;return setTimeout(function(){Kt(e),e.timeout=setTimeout(t,.5*e.fineTimeout)},.5*this.fineTimeout)},removeTags:function(){for(var t=0;t<this.numTag;t++)K.body.removeChild(this.tagArray[t])},cleanup:function(){this.constructor.parent.prototype.cleanup.call(this),this.removeTags()},reset:function(){this.removeTags(),jt(this)},measurementBucket:"3"}),Qt=Nt.extend({canApplyMethod:function(){return!it&&(at&&!!G.top.IntersectionObserver||!at&&!!G.IntersectionObserver)&&!ot},registerInViewListener:function(){for(var n=this,t=[],e=this.thresholdPercentage/100;e<1;e+=.05)t.push(e);t.push(1);var i=G.IntersectionObserver;at&&(i=G.top.IntersectionObserver),this.io=new i(function(t){for(var e,i=0;i<t.length;i++)if(t[i].target===n.trackedElement){e=t[i];break}e&&n.inViewListenerCallback({intersectionRatio:100*t[0].intersectionRatio,time:(new Date).getTime()})},{threshold:t}),this.io.observe(this.trackedElement)},cleanup:function(){this.io&&this.io.disconnect()},updateTrackingElement:function(t){this.io.unobserve(this.trackedElement),this.io.observe(t),this.trackedElement=t},measurementBucket:"7"}),Zt=Nt.extend({canApplyMethod:function(){return it&&undefined!==G.mraid},registerInViewListener:function(){var e=this;e.mraidVersion=G.mraid.getVersion&&G.mraid.getVersion(),"3.0"===e.mraidVersion?(this.viewableChangeEventListener=function(t){e.inViewListenerCallback({time:(new Date).getTime(),intersectionRatio:t})},G.mraid.addEventListener("exposureChange",this.viewableChangeEventListener)):(this.viewableChangeEventListener=function(){e.inViewListenerCallback({time:(new Date).getTime(),intersectionRatio:G.mraid.isViewable()?100:0})},G.mraid.addEventListener("viewableChange",this.viewableChangeEventListener))},cleanup:function(){"3.0"===this.mraidVersion?G.mraid.removeEventListener("exposureChange",this.viewableChangeEventListener):G.mraid.removeEventListener("viewableChange",this.viewableChangeEventListener)},measurementBucket:"8"}),te=Nt.extend({canApplyMethod:function(){return!it&&!ot&&undefined!==G.context&&undefined!==G.context.observeIntersection},registerInViewListener:function(){var e=this;e.cleanup=G.context.observeIntersection(function(t){t.sort(function(t,e){return t.time>e.time}).forEach(function(t){e.inViewListenerCallback({time:t.time,intersectionRatio:100*t.intersectionRatio})})})},measurementBucket:"9"});function ee(t){var e,i,n,r,a;for(t.tags=Et(_,$),t.numTag=t.tags.length,t.tagArray=[],e=0;e<t.numTag;e++)t.tagArray.push((n=(i=t).tags[e],r=void 0,2===(a=n.split("_")).length&&((r=K.createElement("iframe")).style.cssText="width:"+d+"px;height:"+d+"px;left:"+a[0]+"px;top:"+a[1]+"px;position:absolute;background-color:transparent;",r.scrolling="no",r.allowtransparency="true",r.hidefocus="true",r.setAttribute("frameBorder","0"),r.id=n,i.painted[n]=0),r));for(e=0;e<t.numTag;e++)K.body.appendChild(t.tagArray[e])}var ie=Yt.extend({canApplyMethod:function(){return!it&&"requestAnimationFrame"in G&&"cancelAnimationFrame"in G&&"safari"===tt&&10<=Number(et)},setupHandlerPerTag:function(e){var i=this.tagArray[e].contentWindow,n=this;i&&(i.prevTimestamp=(new Date).getTime(),i.animationFrameRequest&&(i.cancelAnimationFrame(i.animationFrameRequest),this.painted[e]=0),i.animationFrameRequest=i.requestAnimationFrame(function(){var t=(new Date).getTime();t-i.prevTimestamp<n.fineTimeout/2?n.painted[e]=1:n.painted[e]=0,i.prevTimestamp=t}))},setupHandlers:function(){for(var t=0;t<this.numTag;t++)this.setupHandlerPerTag(t)},init:function(){this.painted={},ee(this),this.setupHandlers(),this.registerInViewListener()},getInViewPercentage:function(){for(var t=0,e=0;e<this.numTag;e++)t+=this.painted[e],this.painted[e]=0;return this.setupHandlers(),this.numTag?100*t/this.numTag:0},notInViewTimerWrapper:function(t){var e=this;return setTimeout(function(){e.setupHandlers(),e.timeout=setTimeout(t,.5*e.coarseTimeout)},.5*this.coarseTimeout)},inViewTimerWrapper:function(t){var e=this;return setTimeout(function(){e.setupHandlers(),e.timeout=setTimeout(t,.5*e.fineTimeout)},.5*this.fineTimeout)},removeTags:function(){for(var t=0;t<this.numTag;t++)K.body.removeChild(this.tagArray[t])},cleanup:function(){this.constructor.parent.prototype.cleanup.call(this),this.removeTags()},reset:function(){this.removeTags(),ee(this)},measurementBucket:"10"}),ne=Nt.extend({canApplyMethod:function(){return!0},init:function(){this.isMeasurable=!1;var t=this;setTimeout(function(){t.outOfViewCallback(!0)})},measurementBucket:"5"}),re={moat:"https://z.moatads.com/yahoodisplay873773666324/moatad.js#moatClientLevel1=Yahoo!&moatClientLevel2=$[campaignID]&moatClientLevel3=$[lineItemID]&moatClientLevel4=$[creativeID]&moatClientSlicer1=$[publisherID]&moatClientSlicer2=$[sitePlacementID]&zMoatAuctionID=$[auctionID]&zMoatAdReqDomain=$[adRequestDomainName]$[additionaParams]"};function ae(t,e){if(t.vendorParams){t.vendorParams.publisherID=t.vendorParams.publisherID||t.publisherID;var i=t.vendor,n=t.vendorParams.publisherID,r={};return e[i]&&e[i][n]&&(r=e[i][n]),function s(t,i,n,r){if(re[t])try{var e=K.createElement("script"),a=re[t];return a=a.replace(/\$\[(.*?)\]/g,function(t,e){return i[e]||n[e]||r[e]||""}),e.src=a,e.type="text/javascript",U.appendChild(e),!0}catch(o){}return!1}(i,t.vendorParams,r,t)}return!1}function oe(t,e){this.timeout=t,this.callback=e,this.timeoutRef=0}function se(i,r){try{if(rt&&at&&G.top.document.querySelectorAll)var a=setInterval(function(){try{var t=function n(t){var e=G.top.document.querySelectorAll(L);if(e)for(var i=0;i<e.length;i++)if(e[i].getAttribute(H)===t)return e[i].setAttribute(H,""),e[i]}(r);(t||(new Date).getTime()-st>D)&&(t&&i.updateTrackingElement(t),clearInterval(a))}catch(e){clearInterval(a)}},W)}catch(t){}}oe.prototype.startTimer=function(t){var e=this;t?this.callback(t):this.timeoutRef||(this.timeoutRef=setTimeout(function(){e.callback(t)},this.timeout))};var ce,ue,he,le=[Zt,Qt,te,qt,Xt,Ut,Jt,ie,ne],me="",de=!(oe.prototype.stopTimer=function(t){clearTimeout(this.timeoutRef),this.timeoutRef=0,t&&this.callback(t)}),fe=!1,pe=!1,ge="",ve=!1;function we(){de||(ue.metViewableStandard(),Ot(me,"2",ue.inView,ue.isMeasurable,ue,"",function t(){return"vd=0:na="+(ve?"1":"0")+":ed="+(pe?"1":"0")+":tpv="+(ge||"")}())),de=!0}function Te(){fe||ue.cleanup(),fe=!0}function ye(){we(),Te(),xt(x,ye)}function be(){we(),Te(),xt(E,be)}function Ve(t,e,i){if((me=t&&t.beaconUrl)&&""!==me){if(ce=t&&t.sek||function a(t){var e,i,n="sek=";return t&&-1!==(e=t.indexOf(n))?(-1===(i=t.indexOf("&",e+n.length))&&(i=t.length),t.substring(e+n.length,i)):p}(me),ve=t.isNative,pe=It(e,i),dt(t.adWidth,t.adHeight),ae(t,t.vendorPublisherParams),ge=t.vendor,pe){for(var n=new oe(o,we),r=0;r<le.length&&!le[r].prototype.canApplyMethod(t);r++);ue=new le[r]({adWidth:_,adHeight:$,inViewCallback:function(t){n.startTimer(t)},outOfViewCallback:function(t){n.stopTimer(t)}})}else ue=new ne({adWidth:_,adHeight:$,inViewCallback:function(){},outOfViewCallback:we});kt(k,function(){dt(),ue.reset()}),ue.init(),kt(x,ye),kt(E,be),Ht(),se(ue,ce)}}var Ie={};function Ce(t){if(!he){he=Dt(i);try{t.setAttribute("id",he),t.id=he}catch(e){}if(t=K.getElementById(he))return t}return null}!function Ee(){var t,e=G.YAHOO&&G.YAHOO.Viewability&&G.YAHOO.Viewability.Display&&G.YAHOO.Viewability.Display.data&&G.YAHOO.Viewability.Display.data.pop();if(e)t=K.getElementById(e.view_id);else if(e={},t=function o(){var t=100!==V?K.getElementById(v+"1_"+V):null;if(t)return Ce(t);if(t=K.getElementById(g+"1")){var e=parseFloat(t[b](w),10);if(e){e=Math.floor(e/y);for(var i=0,n=0;i<T.length;n+=T[i],i++)if(e<n+T[i]){t.setAttribute("id",v+"1_"+T[i]);var r=K.getElementsByTagName("body")[0],a=K.createElement("script");return a.setAttribute("src",m+"inside-"+T[i]+".js"),r.appendChild(a),""}}return Ce(t)}return""}()){e.beaconUrl=t.text||t.innerHTML||t.innerText||"";var i=Number(t[b]("data-ad-width")),n=Number(t[b]("data-ad-height"));i&&n&&(e.adWidth=i,e.adHeight=n)}e.isNative=!1,e.vendorPublisherParams=Ie,Ve(e,t)}()}();
