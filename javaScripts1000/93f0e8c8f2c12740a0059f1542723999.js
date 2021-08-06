(function e(t,n,a){function i(s,r){if(!n[s]){if(!t[s]){var d="function"==typeof require&&require
if(!r&&d)return d(s,!0)
if(o)return o(s,!0)
var u=new Error("Cannot find module '"+s+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}}
t[s][0].call(l.exports,(function(e){return i(t[s][1][e]||e)}),l,l.exports,e,t,n,a)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<a.length;s++)i(a[s])
return i})({1:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./../obj/constants")),i=o(e("./../utils/common/dom"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=function(e){27===e.keyCode&&this.destroy()}
return{create:function(t){var n=document,i=n.body,o=n.createElement("DIV"),s=n.createElement("IMG"),r=n.createElement("DIV"),d=n.createElement("DIV")
o.setAttribute("id",a.default.modalDivId),o.onclick=this.destroy,s.setAttribute("src",t),s.onclick=this.destory,d.appendChild(s),d.className="image-cell",r.appendChild(d),r.className="image-wrapper",o.appendChild(r),i.appendChild(o),window.addEventListener?window.addEventListener("keydown",e.bind(this),!1):window.attachEvent("keydown",e.bind(this),!1)},destroy:function(){var t=document,n=t.body,o=t.getElementById(a.default.modalDivId)
o&&(i.default.purge(o),n.removeChild(o)),window.removeEventListener?window.removeEventListener("keydown",e.bind(this)):window.detachEvent("keydown",e.bind(this))}}}.bind(void 0)()
n.default=s},{"./../obj/constants":8,"./../utils/common/dom":12}],2:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./omni/transition")),i=o(e("./omni/activity"))
function o(e){return e&&e.__esModule?e:{default:e}}var s={init:function(){a.default.start(),i.default.start()},destroy:function(){a.default.stop(),i.default.stop()}}
n.default=s},{"./omni/activity":3,"./omni/transition":6}],3:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./../../utils/frame")),i=o(e("./../../utils/common/dom"))
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var r=function(){s(this,this)
var e=null,t=null,n=null,o=function(){s(this,this),a.default.postMessage({action:"track_activity",payload:{seen:t}})}.bind(this),r=function(){s(this,this),t=(new Date).getTime()}.bind(this),d=function(e){s(this,this),i.default.unbindEvent("keypress",r),i.default.unbindEvent("mousemove",r),i.default.unbindEvent("click",r),e&&(i.default.bindEvent("keypress",r),i.default.bindEvent("mousemove",r),i.default.bindEvent("click",r))}.bind(this),u=function(){s(this,this)
var a=(new Date).getTime()
null===n||null===t||e&&(a<e||t<e||a-e<59e3||t>e&&t<a&&o()),e=a}.bind(this),l=function(){s(this,this),n&&clearInterval(n),n=null,t=null,e=null}.bind(this),c=function(){s(this,this),l(),d(!0),e=(new Date).getTime(),n=setInterval(u,6e4)}.bind(this),f=function(){s(this,this),t=(new Date).getTime(),o(),l(),d(!1)}.bind(this),h=function(){s(this,this),"hidden"===document.visibilityState&&f()}.bind(this)
return{start:function(){c(),i.default.bindEvent("focus",c),i.default.bindEvent("blur",f),i.default.bindEvent("beforeunload",f),i.default.bindEvent("visibilitychange",h)},stop:function(){f(),i.default.unbindEvent("focus",c),i.default.unbindEvent("blur",f),i.default.unbindEvent("beforeunload",f),i.default.unbindEvent("visibilitychange",h)}}}.bind(void 0)()
n.default=r},{"./../../utils/common/dom":12,"./../../utils/frame":16}],4:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./../../utils/msg_handler"))&&a.__esModule?a:{default:a}
var o={track:function(e,t){i.default.subscribe("track_event",{eventName:e,data:t})}}
n.default=o},{"./../../utils/msg_handler":19}],5:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a={setCookie:function(e,t,n){var a=n||31536e6,i=new Date(+new Date+a),o=t||"_fw_crm_v"
return document.cookie=o+"="+e+";domain=."+location.hostname+";path=/;expires="+i.toUTCString()+";SameSite=Lax;",e},removeCookie:function(e){var t=e||"_fw_crm_v"
document.cookie=t+"=;domain=."+location.hostname+";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax;"},getCookie:function(){if(document.cookie){for(var e,t,n,a="freshworks-s360-vid",i={},o=document.cookie.split(";"),s=0,r=o.length;s<r;s++)(e=o[s]&&o[s].split("="))&&e.length&&(i[e[0].trim()]=e[1])
return i[a]?(n=i[a],this.removeCookie(a)):n=i._fw_crm_v,t=n||this.generateUUID(),this.setCookie(t)}},generateUUID:function(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var a=16*Math.random()
return e>0?(a=(e+a)%16|0,e=Math.floor(e/16)):(a=(t+a)%16|0,t=Math.floor(t/16)),("x"==n?a:7&a|8).toString(16)}))}}
n.default=a},{}],6:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./../../utils/common/observe")),i=o(e("./../../utils/frame"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e,t,n,o=function(a){e=a.oldValue,t=a.newValue,n=a.title,i.default.postMessage({action:"track_location",payload:{pageUrl:a}})},s=function(){var a=window.location.href
t!==a&&(e=t,t=a,n=document.title,o({oldValue:e,newValue:t,title:n}))}
return{start:function(){t=window.location.href,o({newValue:t,title:document.title}),a.default.attach(window.history,"pushState",s),a.default.attach(window.history,"replaceState",s),window.addEventListener?(window.addEventListener("hashchange",s,!1),window.addEventListener("popstate",s,!1)):(window.attachEvent("hashchange",s,!1),window.attachEvent("popstate",s,!1))},stop:function(){e=t=void 0,a.default.detach(window.history,"pushState"),a.default.detach(window.history,"replaceState"),window.removeEventListener?(window.removeEventListener("hashchange",s),window.removeEventListener("popstate",s)):(window.detachEvent("hashchange",s),window.detachEvent("popstate",s))},track:o}}.bind(void 0)()
n.default=s},{"./../../utils/common/observe":14,"./../../utils/frame":16}],7:[function(e,t,n){"use strict"
var a,i,o=(a=e("./widget"))&&a.__esModule?a:{default:a}
if(window.fcWidget||(window.fcWidget=o.default),window.fcSettings)if("complete"===document.readyState){var s=window.fcSettings.onInit
s&&"function"==typeof s&&s(),o.default.init(window.fcSettings)}else document.onreadystatechange=(i=o.default,function(){if("complete"===document.readyState){var e=window.fcSettings.onInit
e&&"function"==typeof e&&e(),i.init(window.fcSettings)}})},{"./widget":24}],8:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
n.default={SAMPLE_TOKEN:"WEB_CHAT_TOKEN",frameDivId:"fc_frame",frameId:"fc_widget",pushFrameDivId:"fc_push_frame",pushFrameId:"fc_push",modalDivId:"fc_web_modal",classes:{fullscreenClass:"fc-widget-fullscreen"},AJAX_URL:{canary:"/app/services/app/webchat/{token}/canary"},canaryRoutes:{feature:"canary",rts:"rtscanary"}}},{}],9:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=!1,t=!1,n=!1,a=!1,i=[],o={}
return{isLoaded:function(){return e},loaded:function(t){e=t},isInitialized:function(){return t},initialized:function(e){t=e},isOpened:function(){return n},opened:function(e){n=e},doOpen:function(){return a},openOnLoad:function(e){a=e},getTags:function(){return i},setTags:function(e){i=e},getFaqTags:function(){return o},setFaqTags:function(e){o=e},reset:function(){e=!1,t=!1,n=!1,a=!1,i=[],o={}}}}.bind(void 0)()
n.default=a},{}],10:[function(e,t,n){"use strict"
function a(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=function(){a(this,this)
var e=null,t=null,n=null,i=null,o=null,s=!1,r={},d={},u=["firstName","lastName","email","phone","phoneCountry","locale"]
return{getFlowId:function(){return n},setFlowId:function(e){n=e},getFlowVersionId:function(){return i},setFlowVersionId:function(e){i=e},getPreviewMode:function(){return o},setPreviewMode:function(e){o=e},getExternalId:function(){return e},setExternalId:function(t){e=t},getRestoreId:function(){return t},setRestoreId:function(e){t=e},setIdentifyByReferenceId:function(e){s=e},getIdentifyByReferenceId:function(){return s},getConfig:function(){return r},setConfig:function(e){r=e},getProperties:function(){return d},setProperties:function(e){e&&(u.forEach(function(t){a(this,this),e[t]&&(d[t]=e[t])}.bind(this)),e.meta&&this.setUserMeta(e.meta))},setFirstName:function(e){d.firstName=e},setLastName:function(e){d.lastName=e},setEmail:function(e){d.email=e},setPhone:function(e){d.phone=e},setPhoneCountry:function(e){d.phoneCountry=e},setUserMeta:function(e){if(d.meta=d.meta||{},e)for(var t in e)e.hasOwnProperty(t)&&(d.meta[t]=e[t])},setLocale:function(e){d.locale=e},reset:function(){e=null,t=null,r={},d={}},getJSON:function(){return{externalId:e,restoreId:t,customConfig:r,properties:d}}}}.bind(void 0)()
n.default=i},{}],11:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./common/dom"))&&a.__esModule?a:{default:a}
var o=function(){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{init:function(e){var t=document.createElement("script"),n=i.default.cdn_url()?i.default.cdn_url():e.host
t.type="text/javascript",t.src=n+"/js/co-browsing.js",(document.body?document.body:document.getElementsByTagName("head")[0]).appendChild(t),window.fc_cobrowse={host:e.host,locale:e.locale}}}}.bind(void 0)()
n.default=o},{"./common/dom":12}],12:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("../../../config/cb_environment"))&&a.__esModule?a:{default:a}
var o,s,r,d,u,l,c,f,h,m={url_domain:function(e){var t=document.createElement("a")
return t.href=e,t.origin},getElementStyle:function(e,t){return window.getComputedStyle(e)[t]},setAttr:function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])
return e},remove:function(e){var t=document,n=t.body,a=t.getElementById(e)
a&&(this.purge(a),n.removeChild(a))},purge:function(e){var t,n,a,i=e.attributes
if(i)for(t=i.length-1;t>=0;t-=1)"function"==typeof e[a=i[t].name]&&(e[a]=null)
if(i=e.childNodes)for(n=i.length,t=0;t<n;t+=1)this.purge(e.childNodes[t])},cdn_url:function(){if(i.default&&i.default.config){var e=i.default.config.type,t=i.default.config.cdn
return t.protocol[e]+(t.enabled.forAssets?t.assets:"")+t.domain[e]}},bindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.addEventListener?window.addEventListener(e,t,n):window.attachEvent(e,t,n)},unbindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent(e,t,n)},parseJSON:function(e){var t
if(e){try{t=JSON.parse(e)}catch(n){}return t}},stringifyJSON:function(e){var t=null
if(e){try{var n=window.ItilUtil&&window.ItilUtil.jsonStringifyWrapper
t=n&&"function"==typeof n&&n(e)||JSON.stringify(e)}catch(a){}return t}},storageAvailable:function(e){var t
try{var n="__storage_test__"
return(t=window.localStorage).setItem(n,n),t.removeItem(n),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==t.length}}(),isPushSupportedByBrowser:function(){var e,t,n,a,i,o,s,r,d=!1,u=!1
a=window.chrome,i=window.navigator,o=i.vendor,s=i.userAgent.indexOf("OPR")>-1,r=i.userAgent.indexOf("Edge")>-1,null!=a&&"Google Inc."===o&&!1===s&&!1===r&&(e=!!(n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(n[2],10))&&(d=e>=50),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(t=function(){var e=navigator.userAgent,t=e.indexOf("Firefox"),n=e.substring(t+8).split(".")
return!(!n||!n.length)&&parseInt(n[0],10)}())&&(u=t>=44)
var l="serviceWorker"in navigator,c=function(){var e=!1
try{ServiceWorkerRegistration&&"showNotification"in ServiceWorkerRegistration.prototype&&(e=!0)}catch(t){}return e}(),f="PushManager"in window
return l&&c&&f&&(d||u)},getAgent:(u=navigator.appVersion,l=navigator.userAgent,c=navigator.appName,f=""+parseFloat(u),h=parseInt(u,10),-1!==l.indexOf("Station")&&(d="Station"),-1!==(s=l.indexOf("Opera"))?(c="Opera",f=l.substring(s+6),-1!==(s=l.indexOf("Version"))&&(f=l.substring(s+8))):-1!==(s=l.indexOf("MSIE"))?(c="Microsoft Internet Explorer",f=l.substring(s+5)):-1!==(s=l.indexOf("Edge"))?(c="Edge",f=l.substring(s+5)):-1!==(s=l.indexOf("Trident"))?(c="Trident",f=l.substring(s+8)):-1!==(s=l.indexOf("Chrome"))?(c="Chrome",f=l.substring(s+7)):-1!==(s=l.indexOf("Safari"))?(c="Safari",f=l.substring(s+7),-1!==(s=l.indexOf("Version"))&&(f=l.substring(s+8))):-1!==(s=l.indexOf("Firefox"))?(c="Firefox",f=l.substring(s+8)):-1===(s=l.indexOf("Mobile"))||-1===l.indexOf("iPad")&&-1===l.indexOf("iPhone")&&-1===l.indexOf("iPod")&&-1===l.indexOf("wv")?(o=l.lastIndexOf(" ")+1)<(s=l.lastIndexOf("/"))&&(c=l.substring(o,s),f=l.substring(s+1),c.toLowerCase()===c.toUpperCase()&&(c=navigator.appName)):(c="WebView",f=l.substring(s+8)),-1!==(r=f.indexOf(";"))&&(f=f.substring(0,r)),-1!==(r=f.indexOf(" "))&&(f=f.substring(0,r)),h=parseInt(""+f,10),isNaN(h)&&(f=""+parseFloat(u),h=parseInt(u,10)),{name:c,appName:d,version:h,versionx:f,os:navigator.platform}),isSafariBrowser:function(){return!(!this.getAgent||"Safari"!==this.getAgent.name)}}
n.default=m},{"../../../config/cb_environment":25}],13:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
n.default={isFunction:function(e){return!(!e||"function"!=typeof e)}}},{}],14:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={},t="_fc_observer"
return{attach:function(n,a,i){var o="".concat(a).concat(t)
n[a]&&i&&(void 0===n[o]||n[o]!==i)&&(n[o]=i,function(n,a){e[a]=n[a],n[a]=function(){var i=e[a].apply(n,arguments),o=n["".concat(a).concat(t)]
return"function"==typeof o&&o(),i}}(n,a))},detach:function(n,a){var i="".concat(a).concat(t)
n[a]&&n[i]&&(n[i]=void 0,function(t,n){e[n]&&(delete t[n],t[n]=e[n],delete e[n])}(n,a))}}}.bind(void 0)()
n.default=a},{}],15:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./common/js_util"))&&a.__esModule?a:{default:a}
var o=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={},t=["widget:opened","widget:closed","widget:loaded","dialog:opened","dialog:closed","widget:destroyed","frame:statechange","user:statechange","user:created","user:cleared","user:authenticated","message:sent","message:received","unreadCount:notify","push:subscribed","readReceipts:update","csat:received","csat:updated","csat:show","anchorLink:clicked","faq:clicked","download:file","rts:connected","rts:disconnected"]
return{clear:function(){e={}},valid:function(e){return!(!e||!t)&&-1!==t.indexOf(e)},subscribe:function(t,n){this.valid(t)&&(void 0===e[t]&&(e[t]=[]),e[t].push(n))},unsubscribe:function(t,n){if(this.valid(t)){var a,o=e&&e[t]
if(o)for(var s=0,r=o.length;s<r;s++)if(a=o[s],i.default.isFunction(a)&&(!n||a.name===n.name)){e[t].splice(s,1)
break}}},publish:function(t,n,a){if(this.valid(t)){var i=e&&e[t]
if(i)for(var o=function(e){return function(){n?e(n):e()}},s=0,r=i.length;s<r;s++){var d=o(i[s])
a?setTimeout(d,0):d()}if("function"==typeof window.CustomEvent){var u=new CustomEvent("fwcrm_event_consume",{detail:{name:t,origin:window.origin,args:n}})
window.dispatchEvent(u)}}}}}.bind(void 0)()
n.default=o},{"./common/js_util":13}],16:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=s(e("./../obj/constants")),i=s(e("./../obj/user")),o=s(e("./common/dom"))
function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var d=function(){r(this,this)
var e=null,t=null,n=null,s=null,d=null,u=null,l=!1,c=!1,f=null,h=!1,m=null,p=null,g=null,v=null,w=null,b=["get_user_uuid"]
return{getHost:function(){return d},getToken:function(){return t},getReferrer:function(){return n},getSiteId:function(){return s},getSettings:function(){return u},setSettings:function(e){l=!!((u=e).userAuthConfig&&u.userAuthConfig.jwtAuthEnabled&&u.userAuthConfig.strictModeEnabled),c=!(!u.userAuthConfig||!u.userAuthConfig.jwtAuthEnabled)},isJWTStrictMode:function(){return l},isJWTEnabled:function(){return c},getJWTAuthToken:function(){return f},setJWTAuthToken:function(e){f=e},isLoaded:function(){return h},loaded:function(e){h=e},loadingActions:function(){return b},init:function(e){t=e.token,n=e.referrer,d=e.host,s=e.siteId,l=!1,c=!1,f=e.jwtAuthToken,h=!1,m=e.flowId,p=e.flowVersionId,g=e.previewMode,v=e.cspNonce,w=e.omniCookie},reset:function(){t=n=d=s=l=c=f=h=m=p=g=w=void 0},getJSON:function(){return{token:t,flowId:m,flowVersionId:p,previewMode:g,referrer:n,host:d,siteId:s,jwtStrictMode:l,jwtEnabled:c,jwtAuthToken:f,loaded:h,omniCookie:w}},load:function(t,n,a){if(o.default.isSafariBrowser()&&v){var i=document.createElement("script")
i.nonce=v,i.textContent='window.location = "'.concat(t,'"'),e=a.contentWindow,a.contentDocument.body.appendChild(i)}else e=window.open(t,n)},postMessage:function(t){e&&e.postMessage(t,d)},dispatch:function(e,t){e&&t&&"function"==typeof e&&e(t)},unload:function(){this.postMessage({action:"push_subscribe_destroy"})},add:function(){var e=document,t=e.body,n=e.getElementById(a.default.frameDivId),s=e.createElement("IFRAME"),r=i.default.getConfig(),d=r&&r.cssNames
n&&"DIV"===n.tagName||(n=e.createElement("DIV"),t.appendChild(n)),o.default.setAttr(n,{id:a.default.frameDivId,class:d&&d.widget||""}),n.classList.add("fc_dn"),r&&r.headerProperty?("ltr"===r.headerProperty.direction&&n.classList.add("fc_l2r"),r.headerProperty.hideChatButton||n.classList.remove("fc_dn")):n.classList.remove("fc_dn"),o.default.setAttr(s,{id:a.default.frameId,name:a.default.frameId,title:"Chat",frameborder:"0",allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}),n.appendChild(s),this.loadCanaryWidget("",s)},loadRTSCanaryWidget:function(e){var n=new XMLHttpRequest,i=a.default.AJAX_URL.canary.replace("{token}",t)
i=d+i,n.open("GET",i,!0),n.onreadystatechange=function(){if(r(this,this),4===n.readyState){var t=o.default.parseJSON(n.response),i=t&&t.canary_enabled?a.default.canaryRoutes.rts:""
this.loadCanaryWidget(i,e)}}.bind(this),n.send()},loadCanaryWidget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0
!g||"botflow"!==g&&"autofaq"!==g?this.load("".concat(d,"/widget/").concat(e,"?token=").concat(t,"&referrer=").concat(n),a.default.frameId,i):this.load("".concat(d,"/widget/").concat(e,"?token=").concat(t,"&referrer=").concat(n,"&previewMode=").concat(g),a.default.frameId,i)},remove:function(t){o.default.remove(t),e=null},setFrameSize:function(){var e=this.getSettings(),t=i.default.getConfig()
if(null===e)return""
var n=e.widgetSize,o=!(!t||!t.fullscreen)&&t.fullscreen,s="fc-widget-normal",r=document.getElementById(a.default.frameDivId)
!0===o&&r.classList.add(a.default.classes.fullscreenClass),n&&n.length>0&&(s="fc-widget-"+n.toLowerCase()),r.classList.add(s)},setWidgetDisplayStyle:function(){var e=document.body,t=document.getElementById(a.default.frameDivId),n=o.default.getElementStyle(e,"display")
n&&-1!==["flex"].indexOf(n)&&o.default.setAttr(t,{style:"display: ".concat(n)})}}}.bind(void 0)()
n.default=d},{"./../obj/constants":8,"./../obj/user":10,"./common/dom":12}],17:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=g(e("./common/dom")),i=g(e("./frame")),o=g(e("./events")),s=g(e("../obj/constants")),r=g(e("../obj/state")),d=g(e("../obj/user")),u=g(e("./msg_handler")),l=g(e("./push_frame")),c=g(e("../helpers/modal")),f=g(e("../helpers/omni")),h=g(e("./msg_processor")),m=g(e("./cb")),p=g(e("./../helpers/omni/omni-cookie"))
function g(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b,_={onMessageCB:function(){return b||(b=this.onMessage.bind(this))},onCustomEventCB:function(){var e
return function(){return e||(e=this.onCustomMessage.bind(this))}}(),onVisibilityChangeCB:function(){var e
return function(){return e||(e=this.onVisibilityChange.bind(this))}}(),subscribe:function(){window.addEventListener?(window.addEventListener("message",this.onMessageCB(),!1),window.addEventListener("focus",this.onVisibilityChangeCB(),!1),window.addEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.attachEvent("onmessage",this.onMessageCB()),window.attachEvent("focus",this.onVisibilityChangeCB()),window.attachEvent("blur",this.onVisibilityChangeCB())),this.subscribeSales360Event()},unsubscribe:function(){window.removeEventListener?(window.removeEventListener("message",this.onMessageCB(),!1),window.removeEventListener("focus",this.onVisibilityChangeCB(),!1),window.removeEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.detachEvent("onmessage",this.onMessageCB()),window.detachEvent("focus",this.onVisibilityChangeCB()),window.detachEvent("blur",this.onVisibilityChangeCB())),this.unsubscribeSales360Event()},subscribeSales360Event:function(){window.addEventListener?window.addEventListener("fwcrm_event",this.onCustomEventCB(),!1):window.attachEvent("fwcrm_event",this.onCustomEventCB())},unsubscribeSales360Event:function(){window.removeEventListener?window.removeEventListener("fwcrm_event",this.onCustomEventCB(),!1):window.detachEvent("fwcrm_event",this.onCustomEventCB())},onVisibilityChange:function(e){switch(e.type){case"focus":i.default.postMessage({action:"widget_focus"})
break
case"blur":i.default.postMessage({action:"widget_blur",payload:{title:document.title,location:window.location.href}}),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href})}},onUserCreate:function(e){o.default.publish("user:created",e)},loadWidget:function(){if(!1===r.default.isInitialized()){r.default.initialized(!0)
var e=i.default.getJSON(),t=d.default.getProperties(),n=d.default.getConfig(),o=r.default.getTags(),s=r.default.getFaqTags()
if(e.externalId=d.default.getExternalId(),e.restoreId=d.default.getRestoreId(),e.flowId=d.default.getFlowId(),e.flowVersionId=d.default.getFlowVersionId(),e.previewMode=d.default.getPreviewMode(),e.identifyByReferenceId=d.default.getIdentifyByReferenceId(),t&&(e.properties=t),n&&(e.config=n),o&&(e.tags=o),s&&(e.faqTags=s),e.userAgent=a.default.getAgent,a.default.storageAvailable){var u=e.token,l=localStorage.getItem(u),c=e.siteId?"".concat(e.token,"_").concat(e.siteId):null,f=c?localStorage.getItem(c):null
if((l||c&&f)&&(e.storage={},e.storage[u]=l||JSON.stringify({}),c&&(e.storage[c]=f||JSON.stringify({}))),n&&n.overrideDS){var h="lsds_".concat(c||u),m=localStorage.getItem(h)
m?e.lsds=w({},h,m):(e.lsds=w({},h,JSON.stringify({})),e.migrateLFDS=!0)}}i.default.setFrameSize(),i.default.setWidgetDisplayStyle(),i.default.postMessage({action:"load_widget",payload:e})}},unloadWidget:function(){l.default.isLoaded()&&l.default.unload(),r.default.reset(),d.default.reset(),f.default.destroy(),i.default.reset(),i.default.remove(s.default.frameDivId),this.unsubscribe(),o.default.publish("widget:destroyed",null,!0),o.default.clear()},updateFrameSettings:function(e){if(null!==i.default.getSettings()||void 0===e)return!1
i.default.setSettings(e)},onCustomMessage:function(e){},onMessage:function(e){var t=e.origin||e.originalEvent.origin,n=d.default.getConfig(),g=n&&n.cssNames
if(t===i.default.getHost()||t===l.default.getHostOrigin()){var w=e.data,b=w&&w.action
if(this.updateFrameSettings(w.settingsPayload),b){var _=document.getElementById(s.default.frameDivId),y=g&&g.expanded||"expanded"
switch(b){case"push_subscribe_destroy_response":this.unloadWidget()
break
case"push_user_meta":o.default.publish("push:subscribed",w.data),i.default.postMessage(w)
break
case"toggle_dialog":w.data?o.default.publish("dialog:opened"):o.default.publish("dialog:closed")
break
case"reset_user_cookie":p.default.removeCookie(),i.default.postMessage({action:"update_cookie",payload:{omniCookie:p.default.getCookie()}})
break
case"restore_user_cookie":p.default.removeCookie(),p.default.setCookie(w.alias),i.default.postMessage({action:"restore_cookie",payload:{alias:w.alias}})
break
case"notify_frame":var E=w.data,I=document.getElementById(s.default.frameDivId),k=g&&g.open||"fc-open"
"expand"===E?(I.removeAttribute("style"),I.classList.add("h-open-notify"),I.classList.add(k),I.classList.add(E)):"close"===E?(I.removeAttribute("style"),I.classList.remove("h-open-notify"),I.classList.remove(k),I.classList.remove("expand")):"mobile-view"===E?I.classList.add("fc-mobile-view"):(I.classList.add("h-open-notify"),I.classList.add(k))
break
case"resize_frame":var C=document.getElementsByTagName("BODY")[0],L=g&&g.open||"fc-open"
r.default.opened(w.isOpen),r.default.isOpened()?(_.classList.add("h-open-container"),_.classList.add(L),_.classList.add("widget-open-animate"),o.default.publish("widget:opened"),setTimeout(function(){v(this,this),_.classList.remove("widget-open-animate")}.bind(this),1e3),C&&C.classList.add("fc-widget-open")):(_.removeAttribute("style"),_.classList.remove("h-open-container"),_.classList.remove(L),o.default.publish("widget:closed"),C&&C.classList.remove("fc-widget-open"))
break
case"toggle_frame":w.show?_.classList.remove("hide"):-1===_.className.trim().indexOf("hide")&&_.classList.add("hide")
break
case"push_frame_loaded":l.default.loaded(!0),l.default.setSource(e&&e.source),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href}),i.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"frame_state_change":var x=document.getElementById(s.default.frameDivId),M=w&&w.data,O=M&&M.frameState,S=i.default.getSettings()&&i.default.getSettings().enabledFeatures
o.default.publish("frame:statechange",w),"initialized"===O&&(i.default.isJWTEnabled()&&i.default.isJWTStrictMode()&&x.classList.add("fc_dn"),this.loadWidget(),S&&-1!==S.indexOf("COBROWSING")&&m.default.init({host:i.default.getHost(),locale:d.default.getProperties().locale})),"loaded"===O&&i.default.loaded(!0),"authenticated"!==O&&"not_authenticated"!==O||i.default.isJWTEnabled()&&i.default.isJWTStrictMode()&&(w.success?x.classList.remove("fc_dn"):304!==w.status&&this.unloadWidget())
break
case"widget_loaded":r.default.loaded(!0),o.default.publish("widget:loaded"),l.default.isLoaded()||l.default.init({host:w.pushDomain+"?ref="+btoa(window.location.origin),hostOrigin:a.default.url_domain(w.pushDomain),appLogoPath:w.appLogoPath,locale:w.locale,sales360App:w.sales360App}),r.default.doOpen()&&i.default.postMessage({action:"open_chat"}),i.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"datastore_loaded":i.default.postMessage({action:"load_rules"})
break
case"rules_loaded":f.default.init(),h.default.start()
break
case"enlarge_image":c.default.create(w.picUrl)
break
case"expand_all":document.getElementById(s.default.frameDivId).classList.add("expanded-modal"),document.getElementById(s.default.frameDivId).classList.add(y)
break
case"expand_article_view":document.getElementById(s.default.frameDivId).classList.add("expanded-article_view"),document.getElementById(s.default.frameDivId).classList.remove("collapsed-article_view")
break
case"collapse_article_view":document.getElementById(s.default.frameDivId).classList.remove("expanded-article_view"),document.getElementById(s.default.frameDivId).classList.add("collapsed-article_view")
break
case"collapse_all_article_view":document.getElementById(s.default.frameDivId).classList.remove("expanded-article_view"),document.getElementById(s.default.frameDivId).classList.remove("collapsed-article_view")
break
case"set_bubble_height":document.getElementById(s.default.frameDivId).style.height=w.height+"px"
break
case"collapse_all":document.getElementById(s.default.frameDivId).classList.remove("expanded-modal"),document.getElementById(s.default.frameDivId).classList.remove(y),document.getElementById(s.default.frameDivId).classList.add("avoid-jitter"),setTimeout(function(){v(this,this),document.getElementById(s.default.frameDivId).classList.remove("avoid-jitter")}.bind(this),300)
break
case"user_state_change":o.default.publish("user:statechange",w)
break
case"user_authenticated":o.default.publish("user:authenticated",w)
break
case"user_created":var P=w.data
if(r.default.isLoaded())P&&d.default.setRestoreId(P.restoreId),this.onUserCreate(w)
else if(w.success){var T=P&&P.externalId,A=P&&P.restoreId,N=d.default.getExternalId()
N?N===T&&(d.default.setRestoreId(A),this.onUserCreate(w)):this.onUserCreate(w)}else this.onUserCreate(w)
break
case"user_cleared":o.default.publish("user:cleared"),l.default.postMessage({action:"clear:subscription",openWindow:!1}),d.default.reset()
break
case"message_sent":o.default.publish("message:sent",w)
break
case"message_received":o.default.publish("message:received",w)
break
case"read_receipts_update":o.default.publish("readReceipts:update",w)
break
case"csat_updated":o.default.publish("csat:updated",w)
break
case"csat_received":o.default.publish("csat:received",w)
break
case"anchor_link_clicked":o.default.publish("anchorLink:clicked",w)
break
case"faq_clicked":o.default.publish("faq:clicked",w)
break
case"download_file":o.default.publish("download:file",w)
break
case"ask_permission":l.default.postMessage({action:"ask:permission",openWindow:!0})
break
case"clear_subscription":l.default.postMessage({action:"clear:subscription",openWindow:!1})
break
case"unread_count_notify":o.default.publish("unreadCount:notify",w.data)
break
case"message_from_agent":o.default.publish("message:received",w.data)
break
case"message_from_user":o.default.publish("message:sent",w.data)
break
case"set_storage_item":if(a.default.storageAvailable){var j=w.data
j&&j.key&&j.value&&localStorage.setItem(j.key,JSON.stringify(j.value))}break
case"remove_storage_item":if(a.default.storageAvailable){var B=w.data
B&&B.key&&localStorage.removeItem(B.key)}break
case"startScreenShare":window.fc_cobrowse&&window.fc_cobrowse.allowScreenShare(e)
break
case"set_lsds_item":if(a.default.storageAvailable){var D=w.data,F=D&&D.key
if(F){var V=D&&D.value
localStorage.setItem(F,a.default.stringifyJSON(V))}}break
case"get_lsds_item":if(a.default.storageAvailable){var W=w.data,q=W&&W.key
q&&localStorage.getItem(q)}break
case"remove_lsds_item":if(a.default.storageAvailable){var R=w.data,J=R&&R.key
J&&localStorage.removeItem(J)}break
case"requestForAudioCall":window.fc_cobrowse&&window.fc_cobrowse.requestForAudioCall(e)
break
case"rts_connected":o.default.publish("rts:connected",w.data)
break
case"rts_disconnected":o.default.publish("rts:disconnected",w.data)
break
case"stack_max_height":var U=screen.height<=568?screen.height:screen.height-250
document.getElementById(s.default.frameDivId).style.maxHeight=U+"px",i.default.postMessage({action:"stacked_max_height",payload:{height:U}})
break
default:u.default.publish(b,w)}}}},syncResponse:function(e,t){var n=e&&e.status
n?i.default.dispatch(t,{success:200===n,status:n}):i.default.dispatch(t,{success:!1,status:400})}}
n.default=_},{"../helpers/modal":1,"../helpers/omni":2,"../obj/constants":8,"../obj/state":9,"../obj/user":10,"./../helpers/omni/omni-cookie":5,"./cb":11,"./common/dom":12,"./events":15,"./frame":16,"./msg_handler":19,"./msg_processor":20,"./push_frame":22}],18:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./msg_handler"))&&a.__esModule?a:{default:a}
var o={send:function(e,t,n){t&&"function"==typeof t&&(n=t,t=null),i.default.subscribe(e,t,n)}}
n.default=o},{"./msg_handler":19}],19:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=s(e("./frame")),i=s(e("./../obj/state")),o=s(e("./queue"))
function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={}
return{subscribe:function(t,n,s){i.default.isLoaded()||a.default.isLoaded()&&-1!==a.default.loadingActions().indexOf("get_user_uuid")?(e[t+"_ack"]=s,a.default.postMessage({action:t,payload:n})):o.default.enque({action:t,payload:n,handler:s})},publish:function(t,n){a.default.dispatch(e[t],{success:n.success,status:n.status,data:n.data})}}}.bind(void 0)()
n.default=r},{"./../obj/state":9,"./frame":16,"./queue":23}],20:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./queue")),i=o(e("./msg_handler"))
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var r={start:function(){a.default.isEmpty()||a.default.isLocked()||(a.default.toggleLock(!0),this.run())},run:function(){var e=a.default.deque()
e?this.process(e):a.default.toggleLock(!1)},process:function(e){e.handler?i.default.subscribe(e.action,e.payload,function(t){s(this,this),"function"==typeof e.handler&&e.handler(t),this.run()}.bind(this)):(i.default.subscribe(e.action,e.payload),setTimeout(function(){s(this,this),this.run()}.bind(this),0))}}
n.default=r},{"./msg_handler":19,"./queue":23}],21:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./msg_handler"))&&a.__esModule?a:{default:a}
var o={send:function(e,t){return new Promise((function(n,a){i.default.subscribe(e,t,(function(e){var t=e&&e.status,i=e&&e.success
200===t||i?n(e):a(e)}))}))}}
n.default=o},{"./msg_handler":19}],22:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./common/dom")),i=o(e("../obj/constants"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=null,t=null,n=null,o=!1,s=null,r=null,d=null
return{isLoaded:function(){return o},loaded:function(e){o=e},getSource:function(){return d},setSource:function(e){d=e},getHost:function(){return e},getHostOrigin:function(){return t},getLogoPath:function(){return n},init:function(a){e=a.host,t=a.hostOrigin,n=a.appLogoPath,s=a.locale,r=a.sales360App,this.load()},reset:function(){e=null,t=null,n=null,s=null,r=null,o=!1,d=null},postMessage:function(t){t.openWindow?window.open(e+"&action="+btoa(t.action)+"&appLogoPath="+btoa(n)+"&locale="+btoa(s)+"&sales360App="+btoa(r),"_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"):o&&this.post({action:t.action,payload:t.payload})},post:function(e){d.postMessage(e,t)},add:function(){var t=document,n=t.body,o=t.getElementById(i.default.pushFrameDivId),s=t.createElement("IFRAME")
o&&"DIV"===o.tagName||(o=t.createElement("DIV"),n.appendChild(o)),o.setAttribute("id",i.default.pushFrameDivId),a.default.setAttr(s,{id:i.default.pushFrameId,src:e,title:"Chat",frameborder:"0"}),o.appendChild(s)},load:function(){a.default.isPushSupportedByBrowser()&&this.add()},unload:function(){a.default.remove(i.default.pushFrameDivId),this.reset()}}}.bind(void 0)()
n.default=s},{"../obj/constants":8,"./common/dom":12}],23:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=[],t=!1
return{enque:function(n){t||(void 0===e&&(e=[]),e.push(n))},deque:function(){if(e&&e.length)return e.shift()},toggleLock:function(e){t=e},isLocked:function(){return t},isEmpty:function(){return!e||!e.length}}}.bind(void 0)()
n.default=a},{}],24:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=w(e("./obj/constants")),i=w(e("./obj/state")),o=w(e("./obj/user")),s=w(e("./utils/msg_promise")),r=w(e("./utils/msg_callback")),d=w(e("./utils/msg_handler")),u=w(e("./utils/common/dom")),l=w(e("./utils/frame")),c=w(e("./utils/message")),f=w(e("./utils/events")),h=w(e("./utils/push_frame")),m=w(e("./helpers/omni/analytics")),p=w(e("./helpers/omni/transition")),g=w(e("./helpers/omni")),v=w(e("./helpers/omni/omni-cookie"))
function w(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var _=function(){b(this,this)
return{init:function(e){var t,n,s,r,d=-1!==["Chrome","Firefox","Safari","Edge","Trident","WebView"].indexOf(u.default.getAgent.name),h=-1!==["Station"].indexOf(u.default.getAgent.appName)
if(d&&!h&&!this.isInitialized()){var m=e&&e.token
m&&m.toUpperCase()!==a.default.SAMPLE_TOKEN&&(window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),e.referrer=btoa(window.location.origin),void 0===e.open&&(e.open=!1),r=e,i.default.reset(),o.default.reset(),g.default.destroy(),c.default.unsubscribe(),l.default.init({host:r.host.trim(),token:r.token.trim(),referrer:r.referrer,siteId:r.siteId,flowId:r.flowId,flowVersionId:r.flowVersionId,previewMode:r.previewMode,jwtAuthToken:r.jwtAuthToken,cspNonce:r.cspNonce,omniCookie:v.default.getCookie()}),i.default.openOnLoad(r.open),r.identifyByReferenceId&&o.default.setIdentifyByReferenceId(!0),r.flowId&&o.default.setFlowId(r.flowId),r.flowVersionId&&o.default.setFlowVersionId(r.flowVersionId),r.previewMode&&o.default.setPreviewMode(r.previewMode),r.externalId&&(o.default.setExternalId(r.externalId),o.default.setRestoreId(r.restoreId)),r.tags&&r.tags.length&&i.default.setTags(r.tags),r.faqTags&&i.default.setFaqTags(r.faqTags),o.default.setProperties({firstName:r.firstName,lastName:r.lastName,email:r.email,phone:r.phone,phoneCountry:r.phoneCountryCode,locale:r.locale,meta:r.meta}),o.default.setConfig(r.config),r.onLoad&&f.default.subscribe("widget:loaded",r.onLoad),l.default.add(),c.default.subscribe(),t=document,n=t.createElement("link"),s=u.default.cdn_url()?u.default.cdn_url():l.default.getHost(),n.href=s+"/css/widget.css?t="+(new Date).getTime(),n.rel="stylesheet",t.getElementsByTagName("head")[0].appendChild(n))}},destroy:function(){h.default.unload(),l.default.unload()},isOpen:function(){return i.default.isOpened()},isInitialized:function(){return!!l.default.getToken()},isLoaded:function(){return i.default.isLoaded()},on:function(e,t){f.default.subscribe(e,t)},off:function(e,t){f.default.unsubscribe(e,t)},open:function(e){e?d.default.subscribe("open_channel",e):d.default.subscribe("open_chat")},close:function(){d.default.subscribe("close_chat")},show:function(){d.default.subscribe("show_chat")},hide:function(){d.default.subscribe("hide_chat")},setTags:function(e){i.default.isLoaded()&&(e&&e.length?i.default.setTags(e):i.default.setTags([]),d.default.subscribe("set_tags",{tags:i.default.getTags(),force:!0}))},setFaqTags:function(e){i.default.isLoaded()&&(e?i.default.setFaqTags(e):i.default.setFaqTags({}),d.default.subscribe("set_faq_tags",{faqTags:i.default.getFaqTags(),force:!0}))},setExternalId:function(e,t){var n={}
if(e){if("string"==typeof e?n.externalId=e:n=e,!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_external_id",n)
r.default.send("set_external_id",n,t)}},setConfig:function(e){var t=document.getElementById(a.default.frameDivId)
t&&e&&(void 0!==e.fullscreen&&(t.classList.remove(a.default.classes.fullscreenClass),!0===e.fullscreen&&t.classList.add(a.default.classes.fullscreenClass)),e.headerProperty&&(void 0!==e.headerProperty.direction&&(t.classList.remove("fc_l2r"),"ltr"===e.headerProperty.direction&&t.classList.add("fc_l2r")),void 0!==e.headerProperty.hideChatButton&&(t.classList.remove("fc_dn"),e.headerProperty.hideChatButton&&t.classList.add("fc_dn")))),d.default.subscribe("set_custom_config",e)},user:{get:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user")
r.default.send("get_user",e)},isExists:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("user_exists")
r.default.send("user_exists",e)},update:function(e,t){if(e.jwtAuthToken?l.default.setJWTAuthToken(e.jwtAuthToken):(e.firstName&&o.default.setFirstName(e.firstName),e.lastName&&o.default.setLastName(e.lastName),e.email&&o.default.setEmail(e.email),e.phone&&o.default.setPhone(e.phone),e.phoneCountry&&o.default.setPhoneCountry(e.phoneCountry),e.meta&&o.default.setUserMeta(e.meta)),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("update_user",e)
r.default.send("update_user",e,t)},setProperties:function(e,t){var n={}
if(e.jwtAuthToken?(l.default.setJWTAuthToken(e.jwtAuthToken),n=e):(e.firstName&&(n.firstName=e.firstName,delete e.firstName),e.lastName&&(n.lastName=e.lastName,delete e.lastName),e.email&&(n.email=e.email,delete e.email),e.phone&&(n.phone=e.phone,delete e.phone),e.phoneCountryCode&&(n.phoneCountry=e.phoneCountryCode,delete e.phoneCountryCode),e.locale&&(n.locale=e.locale,delete e.locale),n.meta=e,o.default.setProperties(n)),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_user_properties",n)
r.default.send("set_user_properties",n,t)},setFirstName:function(e,t){var n={}
if(e){if("string"==typeof e?n.firstName=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setLastName:function(e,t){var n={}
if(e){if("string"==typeof e?n.lastName=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setEmail:function(e,t){var n={}
if(e){if("string"==typeof e?n.email=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setPhone:function(e,t){var n={}
if(e){if("string"==typeof e?n.phone=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setPhoneCountryCode:function(e,t){var n={}
if(e){if("string"==typeof e?n.phoneCountryCode=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setMeta:function(e,t){if(!t)return this.setProperties(e)
this.setProperties(e,t)},setLocale:function(e,t){var n={}
if(e){if("string"==typeof e?n.locale=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},clear:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("reset_user")
r.default.send("reset_user",e)},create:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("create_user",e)
r.default.send("create_user",e,t)},clone:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("clone_user",e)
r.default.send("clone_user",e,t)},getUUID:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user_uuid")
r.default.send("get_user_uuid",e)},generateUUID:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("generate_user_uuid")
r.default.send("generate_user_uuid",e)}},track:m.default.track,trackPage:function(e,t){p.default.track({newValue:e,title:t,force:!0})},authenticate:function(e){if(l.default.isJWTEnabled()){var t=function(){b(this,this),l.default.setJWTAuthToken(e),l.default.postMessage({action:"authenticate_user",payload:e})}.bind(this),n=function(n){b(this,this),n&&200===n.status?this.user.update({jwtAuthToken:e}):t()}.bind(this)
this.isLoaded()?void 0===window.Promise?this.user.get(n):this.user.get().then(n,n):t()}}}}.bind(void 0)()
n.default=_},{"./helpers/omni":2,"./helpers/omni/analytics":4,"./helpers/omni/omni-cookie":5,"./helpers/omni/transition":6,"./obj/constants":8,"./obj/state":9,"./obj/user":10,"./utils/common/dom":12,"./utils/events":15,"./utils/frame":16,"./utils/message":17,"./utils/msg_callback":18,"./utils/msg_handler":19,"./utils/msg_promise":21,"./utils/push_frame":22}],25:[function(e,t,n){n.config={type:"production",cdn:{enabled:{forAssets:!1,forApi:!1},assets:"assetscdn-",api:"apicdn-",domain:{production:"wchat.freshchat.com",staging:"webchat-msgreen.freshpori.com",local:"localhost:8580"},subDomain:"",protocol:{local:"http://",production:"https://",staging:"https://"}}}},{}]},{},[7])
