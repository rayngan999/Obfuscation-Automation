function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,n){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self,t.LazyLoad=n())}(this,function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),a=n&&window.devicePixelRatio>1,r={elements_selector:"IMG",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!1,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},r,n)},l=function(t,n){var e,i=new t(n);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(e)},u=function(t,n){return t.getAttribute("data-"+n)},s=function(t,n,e){var i="data-"+n;null!==e?t.setAttribute(i,e):t.removeAttribute(i)},f=function(t){return u(t,"ll-status")},d=function(t,n){return s(t,"ll-status",n)},_=function(t){return d(t,null)},g=function(t){return null===f(t)},p=function(t){return"loading"===f(t)},b=function(t){return"error"===f(t)},v=function(t){return"native"===f(t)},m=function(t){return!g(t)},h=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},y=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},E=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},I=function(t){t.llTempImage=document.createElement("IMG")},A=function(t){delete t.llTempImage},L=function(t){return t.llTempImage},w=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},k=function(t){t.disconnect()},z=function(t,n,e){n.unobserve_entered&&w(t,e)},O=function(t,n){t&&(t.loadingCount+=n)},C=function(t){t&&(t.toLoadCount-=1)},M=function(t,n){t&&(t.toLoadCount=n)},N=function(t){return t.loadingCount>0},x=function(t){return t.toLoadCount>0},R=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},S=function(t,n,e){e&&t.setAttribute(n,e)},G=function(t,n){t.removeAttribute(n)},T=function(t){return!!t.llOriginalAttrs},D=function(t){if(!T(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},F=function(t){if(T(t)){var n=t.llOriginalAttrs;S(t,"src",n.src),S(t,"srcset",n.srcset),S(t,"sizes",n.sizes)}},V=function(t,n){S(t,"sizes",u(t,n.data_sizes)),S(t,"srcset",u(t,n.data_srcset)),S(t,"src",u(t,n.data_src))},j=function(t){G(t,"src"),G(t,"srcset"),G(t,"sizes")},P=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&R(e).forEach(n)},U=function(t,n){R(t).forEach(n)},$=function(t){P(t,function(t){F(t)}),F(t)},q=function(t){P(t,function(t){j(t)}),j(t)},H={IMG:function(t,n){P(t,function(t){D(t),V(t,n)}),D(t),V(t,n)},IFRAME:function(t,n){S(t,"src",u(t,n.data_src))},VIDEO:function(t,n){U(t,function(t){S(t,"src",u(t,n.data_src))}),S(t,"poster",u(t,n.data_poster)),S(t,"src",u(t,n.data_src)),t.load()}},B=function(t,n,e){var i=u(t,n.data_bg),o=u(t,n.data_bg_hidpi),r=a&&o?o:i;r&&(t.style.backgroundImage='url("'.concat(r,'")'),L(t).setAttribute("src",r),W(t,n,e))},J=function(t,n,e){var i=u(t,n.data_bg_multi),o=u(t,n.data_bg_multi_hidpi),r=a&&o?o:i;r&&(t.style.backgroundImage=r,Q(t,n,e))},K=function(t,n){var e=H[t.tagName];e&&e(t,n)},Q=function(t,n,e){y(t,n.class_applied),d(t,"applied"),Z(t,n),n.unobserve_completed&&w(t,n),h(n.callback_applied,t,e)},W=function(t,n,e){O(e,1),y(t,n.class_loading),d(t,"loading"),h(n.callback_loading,t,e)},X={IMG:function(t,n){s(t,n.data_src,null),s(t,n.data_srcset,null),s(t,n.data_sizes,null),P(t,function(t){s(t,n.data_srcset,null),s(t,n.data_sizes,null)})},IFRAME:function(t,n){s(t,n.data_src,null)},VIDEO:function(t,n){s(t,n.data_src,null),s(t,n.data_poster,null),U(t,function(t){s(t,n.data_src,null)})}},Y=function(t,n){s(t,n.data_bg,null),s(t,n.data_bg_hidpi,null)},Z=function(t,n){s(t,n.data_bg_multi,null),s(t,n.data_bg_multi_hidpi,null)},tt=function(t,n){var e=X[t.tagName];e?e(t,n):Y(t,n)},nt=["IMG","IFRAME","VIDEO"],et=function(t){return nt.indexOf(t.tagName)>-1},it=function(t,n){!n||N(n)||x(n)||h(t.callback_finish,n)},ot=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},at=function(t,n,e){t.removeEventListener(n,e)},rt=function(t){return!!t.llEvLisnrs},ct=function(t,n,e){rt(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";ot(t,i,n),ot(t,"error",e)},lt=function(t){if(rt(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];at(t,e,i)}delete t.llEvLisnrs}},ut=function(t,n,e){A(t),O(e,-1),C(e),E(t,n.class_loading),n.unobserve_completed&&w(t,e)},st=function(t,n,e,i){var o=v(n);ut(n,e,i),y(n,e.class_loaded),d(n,"loaded"),tt(n,e),h(e.callback_loaded,n,i),o||it(e,i)},ft=function(t,n,e,i){var o=v(n);ut(n,e,i),y(n,e.class_error),d(n,"error"),h(e.callback_error,n,i),o||it(e,i)},dt=function(t,n,e){var i=L(t)||t;if(!rt(i)){ct(i,function(o){st(0,t,n,e),lt(i)},function(o){ft(0,t,n,e),lt(i)})}},_t=function(t,n,e){I(t),dt(t,n,e),B(t,n,e),J(t,n,e)},gt=function(t,n,e){dt(t,n,e),K(t,n),W(t,n,e)},pt=function(t,n,e){et(t)?gt(t,n,e):_t(t,n,e)},bt=function(t,n,e){dt(t,n,e),K(t,n),tt(t,n),d(t,"native")},vt=function(t,n,e,i){e.cancel_on_exit&&p(t)&&"IMG"===t.tagName&&(lt(t),q(t),$(t),E(t,e.class_loading),O(i,-1),_(t),h(e.callback_cancel,t,n,i))},mt=function(t,n,e,i){h(e.callback_enter,t,n,i),z(t,e,i),m(t)||pt(t,e,i)},ht=function(t,n,e,i){g(t)||(vt(t,n,e,i),h(e.callback_exit,t,n,i))},yt=["IMG","IFRAME"],Et=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},It=function(t,n,e){t.forEach(function(t){-1!==yt.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),bt(t,n,e))}),M(e,0)},At=function(t){return t.isIntersecting||t.intersectionRatio>0},Lt=function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}},wt=function(t,n,e){t.forEach(function(t){return At(t)?mt(t.target,t,n,e):ht(t.target,t,n,e)})},kt=function(t,n){n.forEach(function(n){t.observe(n)})},zt=function(t,n){k(t),kt(t,n)},Ot=function(t,n){i&&!Et(t)&&(n._observer=new IntersectionObserver(function(e){wt(e,t,n)},Lt(t)))},Ct=function(t){return Array.prototype.slice.call(t)},Mt=function(t){return t.container.querySelectorAll(t.elements_selector)},Nt=function(t){return Ct(t).filter(g)},xt=function(t){return b(t)},Rt=function(t){return Ct(t).filter(xt)},St=function(t,n){return Nt(t||Mt(n))},Gt=function(t,n){Rt(Mt(t)).forEach(function(n){E(n,t.class_error),_(n)}),n.update()},Tt=function(t,e){n&&window.addEventListener("online",function(){Gt(t,e)})},Dt=function(t,n){var e=c(t);this._settings=e,this.loadingCount=0,Ot(e,this),Tt(e,this),this.update(n)};return Dt.prototype={update:function(t){var n=this._settings,o=St(t,n);M(this,o.length),!e&&i?Et(n)?It(o,n,this):zt(this._observer,o):this.loadAll(o)},destroy:function(){this._observer&&this._observer.disconnect(),Mt(this._settings).forEach(function(t){delete t.llOriginalAttrs}),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;St(t,e).forEach(function(t){pt(t,e,n)})}},Dt.load=function(t,n){var e=c(n);pt(t,e)},Dt.resetStatus=function(t){_(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)l(t,e);else l(t,n)}(Dt,window.lazyLoadOptions),Dt});