!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("_1yz6ewa2mfs",[],t):"object"==typeof exports?exports._1yz6ewa2mfs=t():e._1yz6ewa2mfs=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/home/jasson/dev/js-ads-for-publishers/dist/popunder",n(n.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.General=void 0;var r=n(4),o=function(){function e(){}return e.getDefaultBehaviourSettings=function(t){return{browser:e.getBrowserInfos(),defaultBehavior:r.DefaultBehavior.popUnder,links:t}},e.getModalSettings=function(t,n){var r=window.screenLeft?window.screenLeft:window.screenX,o=window.screenTop?window.screenTop:window.screenY,i=e.getDimension(),a=i.width/window.screen.availWidth,c=(i.width-n)/2/a+r,s=(i.height-t)/2/a+o,u="directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,";return u+="width="+n+",height="+t+",screenX="+c+",screenY="+s+",left="+c+",top="+s,u+=",index=0,total=1"},e.getDimension=function(){var e=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;return{height:window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,width:e}},e.getRandomString=function(){return Math.floor(1e3*Math.random()+1).toString()},e.hasClass=function(e,t){if(!e)return!1;try{return e.classList.contains(t)}catch(r){var n=" "+t+" ";return e.className.indexOf(n)>-1}},e.stopDefaultEvents=function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()},e.getBrowserInfos=function(){var e=null,t=0;if(navigator.userAgent.search("YaBrowser/")>=0||navigator.userAgent.indexOf("Yowser/")>=0)e="YANDEX";else if(navigator.userAgent.search("Vivaldi/")>=0)e="VIVALDI";else if(navigator.userAgent.search("SamsungBrowser/")>=0||navigator.userAgent.toLowerCase().search("samsung")>=0)e="SAMSUNG BROWSER";else if(navigator.userAgent.search("Opera")>=0||navigator.userAgent.indexOf(" OPR/")>=0)e="OPERA";else if(navigator.userAgent.search("Edge/")>=0||navigator.userAgent.indexOf("Edg/")>=0||navigator.userAgent.search("EdgA/")>=0||navigator.userAgent.search("EdgiOS/")>=0)e="EDGE";else if(navigator.userAgent.search("MSIE")>=0)e="IE";else if(navigator.userAgent.search("Chrome")>=0||navigator.userAgent.search("CriOS/")>=0)e="CHROME";else if(navigator.userAgent.search("Firefox")>=0){var n=navigator.userAgent.match(/Firefox\/([0-9]+)\./);t=n?parseInt(n[1]):0,e="FIREFOX"}else navigator.userAgent.search("Safari")>=0&&-1===navigator.userAgent.search("Chrome")&&(e="SAFARI");return{name:e,version:t}},e.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e.needsFixedTabUnder=function(){var t=e.getBrowserInfos();return e.isMobile()&&"CHROME"===t.name},e}();t.General=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configuration=void 0;var r={adId:"popsByTrafficJunky",appearance:{clicks:1,expiry:288e5,noPopsOn:""},cookies:{clicks:"_v9noffuef3",history:"trafficJunkyPopsBackUrl",shown:"_suo7zh32kk"},elements:{additional:"img fade",depth:9,not:"removeAdLink",parents:["js-pop","js-popUnder","js-popPage","js_pop_page"]},linkProxyUrl:"http://z.ilovejuju.be/_x/",modalSettings:n(0).General.getModalSettings(768,1024)};t.configuration=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommonPopBehaviors=void 0;var r=n(0),o=n(5),i=n(7),a=n(1),c=n(8),s=n(3),u=function(){function e(e){var t=this;this.afterPopUnder=function(e){if(o.Storage.setShown(),s.Helpers.dispatchTjEvent(c.TjEvents.popunderTriggered),r.General.needsFixedTabUnder()){var t=!1;document.onvisibilitychange=window.onfocus=function(){document.hidden||document.hidden||t||(t=!0,setTimeout((function(){window.location.href=e}),500))}}else setTimeout((function(){window.location.href=e}),50)},this.popUnder=function(){var e,n=t.behaviorSettings.browser.name;"IE"===n||"EDGE"===n?(e=window.open("",r.General.getRandomString(),a.configuration.modalSettings))&&(e.location.href=t.behaviorSettings.links.adLink):e=window.open(t.behaviorSettings.links.adLink,r.General.getRandomString(),a.configuration.modalSettings);try{e&&(e.blur(),e.opener.window.focus()),window.self.window.focus(),window.focus()}catch(e){}if("FIREFOX"===n||"SAFARI"===n){var o=window.open("about:blank");o&&(o.focus(),o.close())}else"IE"!==n&&"EDGE"!==n||self.focus();t.afterPopUnder(t.getGoto())},this.tabUnder=function(){o.Storage.setHistoryBackUrl(),window.open(t.behaviorSettings.links.clickedLink),t.afterPopUnder(t.behaviorSettings.links.adLink)},this.fixedTabUnder=function(){o.Storage.setHistoryBackUrl(),setTimeout((function(){i.AdLink.fixTabUnderAfterClick()}),300),t.afterPopUnder(t.behaviorSettings.links.adLink)},this.getGoto=function(){return t.behaviorSettings.links.clickedLink},this.behaviorSettings=e}return e.prototype.popUp=function(){window.open(this.behaviorSettings.links.adLink,r.General.getRandomString(),a.configuration.modalSettings),this.afterPopUnder(this.getGoto())},e}();t.CommonPopBehaviors=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=void 0;var r=n(8),o=n(9),i=function(){function e(){}return e.createDOMElement=function(e,t){void 0===t&&(t={});var n=document.createElement(e);for(var r in t)n.setAttribute(r,t[r]);return n},e.getDataAttributes=function(e){var t,n,r=[].filter.call(e.attributes,(function(e){return/^data-/.test(e.name)})),o={};for(var i in r){var a=null===(t=r[i].name)||void 0===t?void 0:t.replace("data-","").replace(/-/g,"_"),c=null===(n=r[i].value)||void 0===n?void 0:n.trim();c&&a&&(o[a]=c)}return o},e.isLeftButton=function(e){return 1===(e.which||e.button)},e.isAdBlock=function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},e.dispatchTjEvent=function(t,n){var o=document.createEvent("Event");o.initEvent(t,!1,!0),n&&(o.detail=n),document.dispatchEvent(o),t===r.TjEvents.embeddedAdsSpotFailed&&e.sendFailEvent(n)},e.sendFailEvent=function(e){var t,n=(new o.AdService).getAdContextAttributes();if(n&&n.fail_url&&0!==e.status){var r=new XMLHttpRequest;r.open("POST",n.fail_url),r.send(JSON.stringify({pageUrl:window.location.href,retryCounter:e.retried,tjAdData:null!==(t=e.response)&&void 0!==t?t:"",tjAdRequestUrl:e.url,tjResponseCode:e.status,tjResponseTime:e.duration,tjZoneID:e.spotId}))}},e}();t.Helpers=i},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultBehavior=void 0,function(e){e[e.popUnder=0]="popUnder",e[e.tabUnder=1]="tabUnder",e[e.fixedTabUnder=2]="fixedTabUnder"}(r||(r={})),t.DefaultBehavior=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Storage=void 0;var r=n(1),o=n(6),i=document.location.href,a=function(){function e(){}return e.hasShown=function(){return Boolean(o.get(r.configuration.cookies.shown))},e.setShown=function(){var e=new Date(Date.now()+r.configuration.appearance.expiry);o.set(r.configuration.cookies.shown,"1",{expires:e,secure:!0})},e.getClicks=function(){var e=o.get(r.configuration.cookies.clicks);return Number(e)||0},e.updateClicks=function(e){var t=new Date(Date.now()+r.configuration.appearance.expiry);o.set(r.configuration.cookies.clicks,e.toString(),{expires:t,secure:!0})},e.setHistoryBackUrl=function(){o.set(r.configuration.cookies.history,i,{secure:!0})},e.getHistoryBackUrl=function(){var e=o.get(r.configuration.cookies.history);return o.remove(r.configuration.cookies.history),e},e}();t.Storage=a},function(e,t,n){var r,o;!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in i)i[s]&&(c+="; "+s,!0!==i[s]&&(c+="="+i[s].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=t(c[0]);if(s=(r.read||r)(s,u)||t(s),n)try{s=JSON.parse(s)}catch(e){}if(o[u]=s,e===u)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdLink=void 0;var r=n(1),o=n(0),i=n(5),a=n(16),c=function(){function e(){}return e.prepare=function(){var t;(a.Invocation.run(),r.configuration.appearance.noPopsOn&&r.configuration.appearance.noPopsOn.toUpperCase()===o.General.getBrowserInfos().name)?r.configuration.adLink="":o.General.needsFixedTabUnder()&&(e.fixTabUnders(),t=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.send=function(n){this.addEventListener("load",(function(){setTimeout((function(){e.fixTabUnders()}),100)}),!1),t.call(this,n)})},e.verifyLink=function(e){if(!e)return!1;var t=e.getAttribute("href");return!!t&&-1===t.indexOf("javascript:")},e.fixTabUnderAfterClick=function(){for(var e=document.querySelectorAll("a[data-popunder]"),t=0;t<e.length;t++)e[t]&&(e[t].removeAttribute("data-popunder"),e[t].removeAttribute("target"),e[t].removeAttribute("rel"))},e.fixTabUnders=function(){if(!(i.Storage.hasShown()||i.Storage.getClicks()+1<r.configuration.appearance.clicks))for(var t=document.querySelectorAll("a"),n=0;n<t.length;n++)e.verifyLink(t[n])&&(t[n].setAttribute("data-popunder","true"),t[n].setAttribute("target","_blank"),t[n].setAttribute("rel","noopener noreferrer"))},e.fixHistory=function(){var e=i.Storage.getHistoryBackUrl(),t=document.location.href;if(e){if(window.addEventListener("popstate",(function(){window.location.reload()}),!1),!o.General.needsFixedTabUnder())return window.history.replaceState({},"",e),void window.history.pushState({popState:1},"",t+"#1");var n=0;document.addEventListener("touchend",(function(){n>=1||(window.history.replaceState({},"",e),window.history.pushState({popState:n},"title "+n,t+"#"+ ++n))}),!0)}},e}();t.AdLink=c},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.TjEvents=void 0,function(e){e.popunderTriggered="popunderTriggered",e.embeddedAdsLoaded="embeddedAdsLoaded",e.embeddedAdsError="embeddedAdsError",e.embeddedAdsSpotLoaded="embeddedAdsSpotLoaded",e.embeddedAdsSpotFailed="embeddedAdsSpotFailed",e.embeddedAdsSpotDefaultLoaded="embeddedAdsSpotDefaultLoaded"}(r||(r={})),t.TjEvents=r},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.AdService=void 0;var o=n(3),i=n(17),a=n(18),c=n(19),s=n(10),u=function(){function e(){}return e.prototype.createURL=function(e,t){void 0===t&&(t=!1);var n=e.specificParams.domain_rewrite,r="";return t?(r=s.configuration.popUnderURL.replace("{ENV}",c.Storage.getEnv(n)),r+="?zone_id="+e.spotId+"&redirect=1&format=popunder",r+="&clientType="+encodeURIComponent(String(e.specificParams.platform))):(r=s.configuration.adBaseURL.replace("{ENV}",c.Storage.getEnv(n)),r+="?data="+encodeURIComponent('[{"spots":[{"zone":'+e.spotId+"}]}]"),r+="&clientType=mobile"),r+=this.getChannelsParameters(e.channelParams),r+=this.getSpecificParameters(e.specificParams,t),r+="&_="+Date.now()},e.prototype.getSpecificParams=function(e,t){var n=r(r({},t),e),o={};for(var i in n)i in a.SpecificType&&(o[i]=n[i]);return o},e.prototype.getChannelParams=function(e,t){var n=r(r({},t),e),o={};for(var a in n)a in i.ChannelType&&(o[a]=n[a]);return o},e.prototype.getAdContextAttributes=function(){var e=document.querySelector('meta[name="'+s.configuration.adClassNameContext+'"]');return e?o.Helpers.getDataAttributes(e):null},e.prototype.getChannelsParameters=function(e){var t="";if(!e)return t;for(var n in e)i.ChannelType[n]&&e[n]&&(t+="&channel["+n+"]="+encodeURIComponent(e[n]));return t},e.prototype.getSpecificParameters=function(e,t){var n="";for(var r in e)if(a.SpecificType[r]&&e[r]){var o=this.getSpecificParameterValue(e,t,r);n+="&"+a.SpecificType[r]+"="+encodeURIComponent(o)}return n},e.prototype.getSpecificParameterValue=function(e,t,n){return"platform"!==n||t||"pc"!==e[n]?e[n]:"tablet"},e}();t.AdService=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configuration=void 0;var r={adBaseURL:location.protocol+"//{ENV}/ads_batch",adClassNameContext:"adsbytrafficjunkycontext",cookies:{env:{name:"TJAdsUrl"}},popUnderURL:location.protocol+"//{ENV}/ads"};t.configuration=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);"loading"!==document.readyState?new r._1yz6ewa2mfsService:document.addEventListener("DOMContentLoaded",(function(){new r._1yz6ewa2mfsService}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._1yz6ewa2mfsService=void 0;var r=n(13),o=n(0),i=n(14),a=n(1),c=n(7),s=n(5),u=n(3),d=function(){var e=this;this.onClick=function(t){var n=r.Links.getTargetLinks(t.target),a=o.General.getDefaultBehaviourSettings(n);e.canRun(n,t)&&(o.General.needsFixedTabUnder()||o.General.stopDefaultEvents(t),(new i.PopMethodFactory).create(a).run())},this.onBeforeMouseDown=function(t){var n=r.Links.getTargetLinks(t.target);e.canRun(n,t)&&(o.General.needsFixedTabUnder()||o.General.stopDefaultEvents(t))},this.canRun=function(t,n){if(!t.currentTarget||!u.Helpers.isLeftButton(n))return!1;var r=t.currentTarget.getAttribute("href");if(!r||-1!==r.indexOf("javascript:"))return!1;var o=!s.Storage.hasShown(),i=e.countClicks(n);return o&&i>=a.configuration.appearance.clicks},this.countClicks=function(e){var t=s.Storage.getClicks()+1;return"click"===e.type&&s.Storage.updateClicks(t),t},void 0===window.tjPopLoaded&&(window.tjPopLoaded=!0,c.AdLink.fixHistory(),c.AdLink.prepare(),a.configuration.adLink&&(document.addEventListener("click",this.onClick,!1),document.addEventListener("mousedown",this.onBeforeMouseDown,!0)))};t._1yz6ewa2mfsService=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Links=void 0;var r=n(0),o=n(1),i=function(){function e(){}return e.verifyParent=function(e){for(var t in o.configuration.elements.parents)if(r.General.hasClass(e,o.configuration.elements.parents[t]))return!0;return!1},e.getTargetLinks=function(t){var n=e.get(t);return{adLink:o.configuration.adLink,clickedLink:n?n.href:null,currentTarget:n}},e.get=function(t){if(!t)return null;var n=t,i=e.findLink(n);return e.findElement(n,e.verifyParent)&&i&&"A"===i.tagName&&!r.General.hasClass(i,o.configuration.elements.not)?i:null},e.findLink=function(t){if(-1!==t.className.indexOf(o.configuration.elements.additional)&&(t=t.getElementsByTagName("A")[0]),"A"===t.tagName)return t;return e.findElement(t,(function(e){return"A"===e.tagName}))},e.findElement=function(e,t){for(var n=e,r=0;r<o.configuration.elements.depth;r++){if(t(n))return n;if(!(n=n.parentNode)||!("tagName"in n)||"HTML"===n.tagName)break}return null},e}();t.Links=i},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.PopMethodFactory=void 0;var o=n(15),i=n(21),a=n(22),c=n(23),s=n(24),u=n(4),d=n(0),f=function(){var e=this;this.create=function(t){return d.General.isMobile()?e.mobileBehavior(t):e.desktopBehavior(t)},this.desktopBehavior=function(e){switch(e.browser.name){case"SAFARI":return new s.SafariPopBehavior(e);case"CHROME":return new o.ChromePopBehavior(e);case"FIREFOX":return new a.FirefoxPopBehavior(e);case"OPERA":return new c.OperaPopBehavior(e)}return new i.DefaultPopBehavior(e)},this.mobileBehavior=function(e){var t=d.General.needsFixedTabUnder()?u.DefaultBehavior.fixedTabUnder:u.DefaultBehavior.tabUnder;return new i.DefaultPopBehavior(r(r({},e),{defaultBehavior:t}))}};t.PopMethodFactory=f},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.ChromePopBehavior=void 0;var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.run=function(){t.popUp()},t}return o(t,e),t}(n(2).CommonPopBehaviors);t.ChromePopBehavior=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Invocation=void 0;var r=n(3),o=n(1),i=n(20),a=function(){function e(){}return e.setUpUrl=function(e){var t=Number(e.spot_id),n=Number(e.adblock_spot_id);if(r.Helpers.isAdBlock()&&n&&(t=n),t){var a=i.Ads.getAdContextAttributes(),c=i.Ads.getSpecificParams(e,a),s=i.Ads.getChannelParams(e,a);o.configuration.adLink=i.Ads.createURL({channelParams:s,specificParams:c,spotId:t},!0),r.Helpers.isAdBlock()&&o.configuration.adLink&&(o.configuration.adLink=o.configuration.linkProxyUrl+btoa(o.configuration.adLink))}else console.log("TJ _1yz6ewa2mfs init failed: the parameter zone is missing or invalid.")},e.run=function(){var t=document.getElementById(o.configuration.adId);if(t){var n=r.Helpers.getDataAttributes(t);e.setUpUrl(n),e.setUpAppearance(n)}else console.log("TJ _1yz6ewa2mfs init failed: cannot find an invocation code with id '"+o.configuration.adId+"' in the DOM.")},e.setUpAppearance=function(e){o.configuration.appearance.expiry=Number(e.expiry)||o.configuration.appearance.expiry,o.configuration.appearance.clicks=Number(e.clicks)||o.configuration.appearance.clicks,o.configuration.appearance.noPopsOn=e.no_pops_on||""},e}();t.Invocation=a},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ChannelType=void 0,function(e){e.context_pornstar="context_pornstar",e.context_category="context_category",e.context_tag="context_tag",e.context_page_type="context_page_type",e.category="category",e.search="search",e.site="site"}(r||(r={})),t.ChannelType=r},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SpecificType=void 0,function(e){e.site_id="site_id",e.hb_guid="hc",e.version="t_version",e.platform="device_type",e.client_ip="clientIP",e.segment="segment",e.refresh_times="",e.refresh_delay="",e.retry="",e.bg_color="",e.default_image="",e.default_url="",e.domain_rewrite=""}(r||(r={})),t.SpecificType=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Storage=void 0;var r=n(6),o=n(10),i=function(){function e(){}return e.getEnv=function(e){var t=r.get(o.configuration.cookies.env.name);return t?t+".trafficjunky.net":e||"ads.trafficjunky.net"},e}();t.Storage=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Ads=void 0;var r=n(9),o=function(){function e(){}return e.createURL=function(t,n){return void 0===n&&(n=!1),e.adService.createURL(t,n)},e.getSpecificParams=function(t,n){return e.adService.getSpecificParams(t,n)},e.getChannelParams=function(t,n){return e.adService.getChannelParams(t,n)},e.getAdContextAttributes=function(){return e.adService.getAdContextAttributes()},e.adService=new r.AdService,e}();t.Ads=o},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultPopBehavior=void 0;var i=n(4),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.run=function(){switch(t.behaviorSettings.defaultBehavior){case i.DefaultBehavior.tabUnder:t.tabUnder();break;case i.DefaultBehavior.fixedTabUnder:t.fixedTabUnder();break;default:t.popUnder()}},t}return o(t,e),t}(n(2).CommonPopBehaviors);t.DefaultPopBehavior=a},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.FirefoxPopBehavior=void 0;var i=n(2),a=n(0),c=n(1),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.run=function(){var e=t.behaviorSettings.browser.version;e>=65?t.popUnderFirefox65(t.behaviorSettings.links):e<53?t.popUnderFirefox53(t.behaviorSettings.links):t.popUnder()},t.popUnderFirefox65=function(e){setTimeout((function(){window.open(e.adLink,a.General.getRandomString(),c.configuration.modalSettings)}),0),setTimeout((function(){var e=window.open("","_self","");e&&e.focus()}),0),t.afterPopUnder(t.getGoto())},t.popUnderFirefox53=function(e){var n=window.open("about:blank");n&&(n.open(e.adLink,a.General.getRandomString(),c.configuration.modalSettings),setTimeout((function(){n.focus(),n.close()}),100),t.afterPopUnder(t.getGoto()))},t}return o(t,e),t}(i.CommonPopBehaviors);t.FirefoxPopBehavior=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.OperaPopBehavior=void 0;var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.run=function(){t.tabUnder()},t}return o(t,e),t}(n(2).CommonPopBehaviors);t.OperaPopBehavior=i},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.SafariPopBehavior=void 0;var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.run=function(){t.tabUnder()},t}return o(t,e),t}(n(2).CommonPopBehaviors);t.SafariPopBehavior=i}])}));