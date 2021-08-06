/*! For license information please see 720.min.js.LICENSE.txt */
(self.webpackChunkpunchng=self.webpackChunkpunchng||[]).push([[720],{594:function(e){e.exports=function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}},973:function(e,t,n){"use strict";n(594),n(575),n(913),n(931)},720:function(e,t,n){"use strict";n.r(t);var i=n(594),r=n.n(i),a=n(575),s=n.n(a),o=n(913),c=n.n(o),l=n(732),d=n.n(l),u=(n(973),function(){function e(){var t=this;s()(this,e),this.currentGallery=0,this.totalGalleries=0,this.articleNum=1,this.loadedArticles=[],this.has_sent=!1,this.lastSlideEventFired=!1,this.timeMiliseconds=(new Date).getTime(),this.isDebouncedPinterest=!1,this.adManagerDefined=!0,this.AdsObserverTriggered=!1,this.mainImgObserver=new(d())({unobserve_entered:!0,callback_enter:function(e){r()(this,t),e.src=e.getAttribute("data-src"),e.srcset=e.getAttribute("data-srcset")}.bind(this),elements_selector:".img-lazy-load",thresholds:"30% 0%",use_native:!0}),this.initializeAdsObserver(),this.cleanupDesktopElements(),this.lazy()}return c()(e,[{key:"initializeAdsObserver",value:function(){var e=this;window.addEventListener("scroll",function(){var t=this;r()(this,e),this.AdsObserverTriggered||(this.sectionObserver=new(d())({unobserve_entered:!0,callback_enter:function(e){r()(this,t),this.loadAds(e)}.bind(this),class_loaded:"loaded",elements_selector:".ad-wrapper",thresholds:"150% 0%"}),this.AdsObserverTriggered=!0)}.bind(this),{passive:!0})}},{key:"lazy",value:function(){window.lazyFunctions={}}},{key:"ensureAdManagerIsLoaded",value:function(e){var t=Date.now();return new Promise((function n(i,r){"undefined"!=typeof adManager?i(adManager):e&&Date.now()-t>=e?r(new Error("AD MANAGER LOAD - TIMEOUT")):setTimeout(n.bind(this,i,r),30)}))}},{key:"cleanupDesktopElements",value:function(){var e=this;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&document.querySelectorAll(".show-on-desktop").forEach(function(t){return r()(this,e),t.parentNode.removeChild(t)}.bind(this))}},{key:"loadAds",value:function(e){var t=this;e&&"ad_placement_mobile_adhesion"!==e.querySelector(".dx-ad").getAttribute("id")&&this.ensureAdManagerIsLoaded(2e3).then(function(){r()(this,t);var n=e.querySelector(".dx-ad"),i="true"===n.getAttribute("data-processed");if(null!==n&&!i){var a=n.getAttribute("id");console.log("debug: currentAdId",a),console.log("debug: currentAd.getAttribute(data-ad)",n.getAttribute("data-ad")),adManager.defineInContentSlot(a,n.getAttribute("data-ad")),adManager.fetchAds(adManager._config,!1,a)}var s=e.nextElementSibling;if(this.currentGallery>1&&s){var o=s.querySelector(".dx-ad"),c="true"===o.getAttribute("data-processed");if(null!==o&&!c){var l=o.getAttribute("id");adManager.defineInContentSlot(l,o.getAttribute("data-ad")),adManager.fetchAds(adManager._config,!1,l)}}}.bind(this))}},{key:"loadImages",value:function(e){if(e){var t=e.nextElementSibling,n=e.querySelector(".image-img-lazy-load"),i=e.querySelector(".image-source-webp-lazy-load"),r=e.querySelector(".image-source-jpeg-lazy-load");if(i&&(i.srcset=i.dataset.srcset),r&&(r.srcset=r.dataset.srcset),n&&(n.src=n.dataset.src,n.srcset=n.dataset.srcset),t){var a=t.querySelector(".image-img-lazy-load"),s=t.querySelector(".image-source-webp-lazy-load"),o=t.querySelector(".image-source-jpeg-lazy-load");o&&(o.srcset=o.dataset.srcset),s&&(s.srcset=s.dataset.srcset),a&&(a.src=a.dataset.src,a.srcset=a.dataset.srcset)}}}},{key:"loadEmbeds",value:function(e){var t=e.querySelector(".embed");if(t&&(e=t.getAttribute("data-embed-number"),!t.hasAttribute("data-fetched")||"true"!==t.getAttribute("data-fetched"))){var n=window.embeds["embed-"+e];if(void 0===n)return;var i=document.createElement("html");i.innerHTML=n;var r=i.getElementsByTagName("body")[0],a=r.firstChild;t.innerHTML="",t.appendChild(a);var s=r.getElementsByTagName("script")[0];if(-1!==a.outerHTML.search("embedPin")){if(!this.isDebouncedPinterest){this.isDebouncedPinterest=!0;var o=this;setTimeout((function(){o.isDebouncedPinterest=!1}),500),this.loadPinterestScript()}}else if(void 0!==s){var c=-1!==s.src.indexOf("instagram"),l=-1!==s.src.indexOf("twitter"),d=-1!==s.src.indexOf("redditmedia"),u=-1!==s.src.indexOf("imgur"),f=this.createNewScript(s.src);if(this.scriptExist(s.src)){if(d&&this.scriptExist(s.src)){var g=document.querySelector('script[src="'+s.src+'"]');g&&g.remove(),document.body.appendChild(f)}}else document.body.appendChild(f);c&&void 0!==window.instgrm&&window.instgrm.Embeds.process(),l&&void 0!==window.twttr&&twttr.widgets.load(),u&&void 0!==window.imgurEmbed&&window.imgurEmbed.createIframe()}t.setAttribute("data-fetched","true")}}},{key:"loadPinterestScript",value:function(){var e="https://assets.pinterest.com/js/pinit_main.js?"+this.timeMiliseconds,t=document.querySelector('script[src="'+e+'"]');t&&t.remove();var n=this.createNewScript(e);document.body.appendChild(n)}},{key:"createNewScript",value:function(e){var t=document.createElement("script");return t.src=e,t.async=!0,t.type="text/javascript",t}},{key:"scriptExist",value:function(e){if(e){for(var t=document.getElementsByTagName("script"),n=t.length;n--;)if(t[n].src==e)return!0;return!1}}}]),e}());window.page_layout=new u,window.page_layout.lazy()},931:function(e,t,n){"use strict";n(575),n(913)},732:function(e){e.exports=function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var t="undefined"!=typeof window,n=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,s={elements_selector:".lazy",container:n||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},o=function(t){return e({},s,t)},c=function(e,t){var n,i="LazyLoad::Initialized",r=new e(t);try{n=new CustomEvent(i,{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:r})}window.dispatchEvent(n)},l="loading",d="loaded",u="applied",f="error",g="native",m=function(e,t){return e.getAttribute("data-"+t)},p=function(e){return m(e,"ll-status")},h=function(e,t){return function(e,t,n){var i="data-ll-status";null!==n?e.setAttribute(i,n):e.removeAttribute(i)}(e,0,t)},v=function(e){return h(e,null)},b=function(e){return null===p(e)},_=function(e){return p(e)===g},w=[l,d,u,f],y=function(e,t,n,i){e&&(void 0===i?void 0===n?e(t):e(t,n):e(t,n,i))},k=function(e,t){r?e.classList.add(t):e.className+=(e.className?" ":"")+t},A=function(e,t){r?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},E=function(e){return e.llTempImage},x=function(e,t){if(t){var n=t._observer;n&&n.unobserve(e)}},z=function(e,t){e&&(e.loadingCount+=t)},I=function(e,t){e&&(e.toLoadCount=t)},O=function(e){for(var t,n=[],i=0;t=e.children[i];i+=1)"SOURCE"===t.tagName&&n.push(t);return n},M=function(e,t,n){n&&e.setAttribute(t,n)},S=function(e,t){e.removeAttribute(t)},L=function(e){return!!e.llOriginalAttrs},C=function(e){if(!L(e)){var t={};t.src=e.getAttribute("src"),t.srcset=e.getAttribute("srcset"),t.sizes=e.getAttribute("sizes"),e.llOriginalAttrs=t}},N=function(e){if(L(e)){var t=e.llOriginalAttrs;M(e,"src",t.src),M(e,"srcset",t.srcset),M(e,"sizes",t.sizes)}},T=function(e,t){M(e,"sizes",m(e,t.data_sizes)),M(e,"srcset",m(e,t.data_srcset)),M(e,"src",m(e,t.data_src))},q=function(e){S(e,"src"),S(e,"srcset"),S(e,"sizes")},D=function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&O(n).forEach(t)},j={IMG:function(e,t){D(e,(function(e){C(e),T(e,t)})),C(e),T(e,t)},IFRAME:function(e,t){M(e,"src",m(e,t.data_src))},VIDEO:function(e,t){!function(e,n){O(e).forEach((function(e){M(e,"src",m(e,t.data_src))}))}(e),M(e,"poster",m(e,t.data_poster)),M(e,"src",m(e,t.data_src)),e.load()}},P=function(e,t){var n=j[e.tagName];n&&n(e,t)},G=function(e,t,n){z(n,1),k(e,t.class_loading),h(e,l),y(t.callback_loading,e,n)},R=["IMG","IFRAME","VIDEO"],F=function(e,t){!t||function(e){return e.loadingCount>0}(t)||function(e){return e.toLoadCount>0}(t)||y(e.callback_finish,t)},H=function(e,t,n){e.addEventListener(t,n),e.llEvLisnrs[t]=n},B=function(e,t,n){e.removeEventListener(t,n)},U=function(e){return!!e.llEvLisnrs},V=function(e){if(U(e)){var t=e.llEvLisnrs;for(var n in t){var i=t[n];B(e,n,i)}delete e.llEvLisnrs}},$=function(e,t,n){!function(e){delete e.llTempImage}(e),z(n,-1),function(e){e&&(e.toLoadCount-=1)}(n),A(e,t.class_loading),t.unobserve_completed&&x(e,n)},J=function(e,t,n){var i=E(e)||e;U(i)||function(e,t,n){U(e)||(e.llEvLisnrs={});var i="VIDEO"===e.tagName?"loadeddata":"load";H(e,i,t),H(e,"error",n)}(i,(function(r){!function(e,t,n,i){var r=_(t);$(t,n,i),k(t,n.class_loaded),h(t,d),y(n.callback_loaded,t,i),r||F(n,i)}(0,e,t,n),V(i)}),(function(r){!function(e,t,n,i){var r=_(t);$(t,n,i),k(t,n.class_error),h(t,f),y(n.callback_error,t,i),r||F(n,i)}(0,e,t,n),V(i)}))},K=function(e,t,n){!function(e){return R.indexOf(e.tagName)>-1}(e)?function(e,t,n){!function(e){e.llTempImage=document.createElement("IMG")}(e),J(e,t,n),function(e,t,n){var i=m(e,t.data_bg),r=m(e,t.data_bg_hidpi),s=a&&r?r:i;s&&(e.style.backgroundImage='url("'.concat(s,'")'),E(e).setAttribute("src",s),G(e,t,n))}(e,t,n),function(e,t,n){var i=m(e,t.data_bg_multi),r=m(e,t.data_bg_multi_hidpi),s=a&&r?r:i;s&&(e.style.backgroundImage=s,function(e,t,n){k(e,t.class_applied),h(e,u),t.unobserve_completed&&x(e,t),y(t.callback_applied,e,n)}(e,t,n))}(e,t,n)}(e,t,n):function(e,t,n){J(e,t,n),P(e,t),G(e,t,n)}(e,t,n)},Q=["IMG","IFRAME"],W=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},X=function(e){return Array.prototype.slice.call(e)},Y=function(e){return e.container.querySelectorAll(e.elements_selector)},Z=function(e){return function(e){return p(e)===f}(e)},ee=function(e,t){return function(e){return X(e).filter(b)}(e||Y(t))},te=function(e,n){var r=o(e);this._settings=r,this.loadingCount=0,function(e,t){i&&!W(e)&&(t._observer=new IntersectionObserver((function(n){!function(e,t,n){e.forEach((function(e){return function(e){return e.isIntersecting||e.intersectionRatio>0}(e)?function(e,t,n,i){h(e,"entered"),k(e,n.class_entered),A(e,n.class_exited),function(e,t,n){t.unobserve_entered&&x(e,n)}(e,n,i),y(n.callback_enter,e,t,i),function(e){return w.indexOf(p(e))>=0}(e)||K(e,n,i)}(e.target,e,t,n):function(e,t,n,i){b(e)||(k(e,n.class_exited),function(e,t,n,i){n.cancel_on_exit&&function(e){return p(e)===l}(e)&&"IMG"===e.tagName&&(V(e),function(e){D(e,(function(e){q(e)})),q(e)}(e),function(e){D(e,(function(e){N(e)})),N(e)}(e),A(e,n.class_loading),z(i,-1),v(e),y(n.callback_cancel,e,t,i))}(e,t,n,i),y(n.callback_exit,e,t,i))}(e.target,e,t,n)}))}(n,e,t)}),function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}}(e)))}(r,this),function(e,n){t&&window.addEventListener("online",(function(){!function(e,t){var n;(n=Y(e),X(n).filter(Z)).forEach((function(t){A(t,e.class_error),v(t)})),t.update()}(e,n)}))}(r,this),this.update(n)};return te.prototype={update:function(e){var t,r,a=this._settings,s=ee(e,a);I(this,s.length),!n&&i?W(a)?function(e,t,n){e.forEach((function(e){-1!==Q.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),function(e,t,n){J(e,t,n),P(e,t),h(e,g)}(e,t,n))})),I(n,0)}(s,a,this):(r=s,function(e){e.disconnect()}(t=this._observer),function(e,t){t.forEach((function(t){e.observe(t)}))}(t,r)):this.loadAll(s)},destroy:function(){this._observer&&this._observer.disconnect(),Y(this._settings).forEach((function(e){delete e.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var t=this,n=this._settings;ee(e,n).forEach((function(e){x(e,t),K(e,n,t)}))}},te.load=function(e,t){var n=o(t);K(e,n)},te.resetStatus=function(e){v(e)},t&&function(e,t){if(t)if(t.length)for(var n,i=0;n=t[i];i+=1)c(e,n);else c(e,t)}(te,window.lazyLoadOptions),te}()}}]);