(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{13:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n(12),o=n(3),r=n(4);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,i,a=u(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),_(d(e=a.call(this)),"player",void 0),_(d(e),"_container",void 0),_(d(e),"isOpen",!1),d(e).player=t,window.PlayerView.addEventListener(o.a.UI.Event.APPEARANCE_SETTINGS_CHANGED,(function(){e.updateAppearance()}),d(e)),e}return e=s,(n=[{key:"init",value:function(){}},{key:"invalidate",value:function(){}},{key:"updateAppearance",value:function(){}},{key:"open",value:function(t){this.isOpen||(this._container&&Object(r.f)(this._container),this.isOpen=!0,"function"==typeof t&&t.call())}},{key:"close",value:function(t){!1!==this.isOpen&&(this._container&&Object(r.b)(this._container),this.isOpen=!1,"function"==typeof t&&t.call())}}])&&l(e.prototype,n),i&&l(e,i),s}(i.a)},32:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));n(2);var i=n(1),o=n(4),r=n(3),a=n(13);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}var b=function(){function t(e,n){p(this,t),this.id=e.videoId,this.title=e.title,this.thumbnailUrl=e.thumb,this._onClick=n,this.element=this._buildElement(),this.titleElement=this._buildTitleElement(),this.container=this._buildContainer()}return y(t,[{key:"_buildContainer",value:function(){var t=document.createElement("div");return t.setAttribute("class","bolt-related-video-container"),t.setAttribute("style","min-width: ".concat(128,"px;")),t.appendChild(this.element),t.appendChild(this.titleElement),t}},{key:"_buildElement",value:function(){var t=document.createElement("div");return t.setAttribute("class","bolt-related-video bolt-border-hover-highlight"),t.setAttribute("data-video-id",this.id),t.addEventListener("click",this._onClick),t.style.backgroundImage="url(".concat(this.thumbnailUrl,")"),t}},{key:"_buildTitleElement",value:function(){var t=document.createElement("div");return t.setAttribute("class","bolt-related-title bolt-foreground bolt-custom-font bolt-custom-text-color"),t.setAttribute("data-video-id",this.id),t.textContent=this.title,t}}]),t}(),v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=u(n);function n(t){var a;return p(this,n),_(d(a=e.call(this,t)),"_layer",void 0),_(d(a),"_autoplayerPane",void 0),_(d(a),"_autoplayer",void 0),_(d(a),"_firstGridPane",void 0),_(d(a),"_firstGrid",void 0),_(d(a),"_secondGridPane",void 0),_(d(a),"_secondGrid",void 0),_(d(a),"_cancelLink",void 0),_(d(a),"_playNextButton",void 0),_(d(a),"_videos",[]),_(d(a),"_firstGridVideos",[]),_(d(a),"_nextVideo",null),_(d(a),"_timeoutId",null),_(d(a),"_autoplayState",null),_(d(a),"_onPlayerStateChange",(function(){var t=window.PlayerState;switch(t.state){case t.PLAY:case t.PLAYING:a._clearAutoplayTimer(),a.close()}})),_(d(a),"_cancelAutoplay",(function(){a._autoplayState="cancelled",a._clearAutoplayTimer(),Object(i.d)(a._autoplayer,"bolt-related-autoplayer-active"),a._nextVideo.element.removeChild(a._playNextButton),a.invalidate()})),_(d(a),"_playNext",(function(){a._play(a._nextVideo.id)})),_(d(a),"_onRelatedVideoClicked",(function(t){t.stopPropagation();var e=t.currentTarget.getAttribute("data-video-id");a._clearAutoplayTimer(),a._play(window.parseInt(e,10)),window.PlayerView.setRelatedVideosFetched(!1)})),a._layer=Object(o.a)(r.a.UI.RELATED_VIDEOS),a._container=Object(o.a)(r.a.UI.RELATED_CONTAINER),a._autoplayerPane=Object(o.a)(r.a.UI.RELATED_AUTOPLAYER_PANE),a._autoplayer=Object(o.a)(r.a.UI.RELATED_AUTOPLAYER),a._firstGridPane=Object(o.a)(r.a.UI.RELATED_FIRST_GRID_PANE),a._firstGrid=Object(o.a)(r.a.UI.RELATED_FIRST_GRID),a._secondGridPane=Object(o.a)(r.a.UI.RELATED_SECOND_GRID_PANE),a._secondGrid=Object(o.a)(r.a.UI.RELATED_SECOND_GRID),a._playNextButton=Object(o.a)(r.a.UI.RELATED_PLAY_NEXT_BUTTON),a._cancelLink=Object(o.a)(r.a.UI.RELATED_CANCEL_LINK),a._cancelLink.addEventListener("click",a._cancelAutoplay),a}return y(n,[{key:"init",value:function(t){var e=window.PlayerState;this._videos=this._buildVideos(t),this._nextVideo=this._videos[0],this._firstGridVideos=[],this._autoplayState="inactive",e.on(e.STATE_CHANGED,this._onPlayerStateChange)}},{key:"_buildVideos",value:function(t){var e,n=[];if(t)for(var i=0,o=t.length;i<o;i++)e=new b(t[i],this._onRelatedVideoClicked),n.push(e),(new Image).src=t[i].thumb;return n}},{key:"_invalidateAutoplayer",value:function(){var t=this._cancelLink.previousSibling;try{t&&this._autoplayer.removeChild(t),this._autoplayer.insertBefore(this._nextVideo.container,this._cancelLink)}catch(t){}}},{key:"_activateAutoplay",value:function(){this._autoplayState="active",this._timeoutId=setTimeout(this._playNext,1e4),Object(i.a)(this._autoplayer,"bolt-related-autoplayer-active"),this._nextVideo.element.appendChild(this._playNextButton),this.invalidate()}},{key:"_clearAutoplayTimer",value:function(){clearTimeout(this._timeoutId),this._timeoutId=null}},{key:"_updateGrid",value:function(t,e){for(var n,i,o,r,a=this._gridColumnsCount(t),l=a*this._gridRowsCount(t),c=this._videos.slice(e,e+l),u=c.length;t.firstChild;)t.removeChild(t.firstChild);for(r=0;r<u;r++)o=c[r],r%a==0&&((n=document.createElement("div")).setAttribute("class","row"),t.appendChild(n)),(i=document.createElement("div")).setAttribute("class","cell"),i.appendChild(o.container),n.appendChild(i);return c}},{key:"_gridColumnsCount",value:function(t){for(var e=t.clientWidth,n=1,i=e-128,o=128+.02*e;i>=o;)n++,i-=o;return Math.min(n,2)}},{key:"_gridRowsCount",value:function(t){for(var e=t.clientHeight,n=1,i=e-72,o=72+.02*e;i>=o;)n++,i-=o;return Math.min(n,3)}},{key:"_play",value:function(t){this._dispatchEvent(r.a.UI.Event.RELATED_VIDEO_SELECTED,t),this.close()}},{key:"_invalidateAutoplayerPane",value:function(){"inactive"===this._autoplayState?(Object(o.f)(this._autoplayerPane),this._invalidateAutoplayer()):"active"===this._autoplayState||"cancelled"===this._autoplayState&&Object(o.b)(this._autoplayerPane)}},{key:"_invalidateFirstGridPane",value:function(){"cancelled"!==this._autoplayState?this._canDisplayTwoPanes()?(Object(o.f)(this._firstGridPane),this._firstGridVideos=this._updateGrid(this._firstGrid,1)):Object(o.b)(this._firstGridPane):(Object(o.f)(this._firstGridPane),this._firstGridVideos=this._updateGrid(this._firstGrid,0))}},{key:"_invalidateSecondGridPane",value:function(){"cancelled"===this._autoplayState&&this._canDisplayTwoPanes()?(Object(o.f)(this._secondGridPane),this._updateGrid(this._secondGrid,this._firstGridVideos.length)):Object(o.b)(this._secondGridPane)}},{key:"_canDisplayTwoPanes",value:function(){return this._layer.clientWidth>=600&&this._layer.clientHeight>=337}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,Object(o.f)(this._layer),window.PlayerView._prerollScreen&&window.PlayerView._prerollScreen.close(),this.invalidate(),this._activateAutoplay())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,Object(o.b)(this._layer))}},{key:"invalidate",value:function(){this._canDisplayTwoPanes()?Object(i.d)(this._container,"bolt-related-one-pane-layout"):Object(i.a)(this._container,"bolt-related-one-pane-layout"),this._invalidateAutoplayerPane(),this._invalidateFirstGridPane(),this._invalidateSecondGridPane()}}]),n}(a.a)}}]);