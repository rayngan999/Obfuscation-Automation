/*
 * tagContainer Generator v58
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2021-03-11 10:22:20 Europe/Paris
 * ---
 * Version	: 3.12
 * IDTC 	: 2
 * IDS		: 5091
 */
/*!compressed by terser*/ "undefined"==typeof tC&&(void 0!==document.domain&&void 0!==document.referrer||(document=window.document),function(t,e){var n,i=t.document,r=t.location,a=(t.navigator,t.tC,t.$,Array.prototype.push,Array.prototype.slice,Array.prototype.indexOf,Object.prototype.toString),o=(Object.prototype.hasOwnProperty,String.prototype.trim,function(t,e){return new o.fn.init(t,e,n)}),c=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,s=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d={};o.fn=o.prototype={constructor:o,init:function(t,e,n){var r,a,d;if(!t)return this;if(t.nodeType)return this.context=this[0]=t,this.length=1,this;if("string"==typeof t){if(!(r="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:c.exec(t))||!r[1]&&e)return!e||e.tC?(e||n).find(t):this.constructor(e).find(t);if(r[1])return d=(e=e instanceof o?e[0]:e)&&e.nodeType?e.ownerDocument||e:i,t=o.parseHTML(r[1],d,!0),s.test(r[1])&&o.isPlainObject(e)&&this.attr.call(t,e,!0),o.merge(this,t);if((a=i.getElementById(r[2]))&&a.parentNode){if(a.id!==r[2])return n.find(t);this.length=1,this[0]=a}return this.context=i,this.selector=t,this}return o.isFunction(t)?n.ready(t):(undefined!==t.selector&&(this.selector=t.selector,this.context=t.context),o.makeArray(t,this))},each:function(t,e){return o.each(this,t,e)},ready:function(t){return o.ready.promise(t),this}},o.fn.init.prototype=o.fn,o.extend=o.fn.extend=function(){var t,e,n,i,r,a,c=arguments[0]||{},s=1,d=arguments.length,p=!1;for("boolean"==typeof c&&(p=c,c=arguments[1]||{},s=2),"object"==typeof c||o.isFunction(c)||(c={}),d===s&&(c=this,--s);s<d;s++)if(null!=(t=arguments[s]))for(e in t)n=c[e],c!==(i=t[e])&&(p&&i&&(o.isPlainObject(i)||(r=o.isArray(i)))?(r?(r=!1,a=n&&o.isArray(n)?n:[]):a=n&&o.isPlainObject(n)?n:{},c[e]=o.extend(p,a,i)):undefined!==i&&(c[e]=i));return c},o.extend({ssl:"https://manager.",randOrd:function(){return Math.round(Math.random())-.5},nodeNames:"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rnocache:/<(?:script|object|embed|option|style)/i,rnoshimcache:new RegExp("<(?:"+o.nodeNames+")[\\s/>]","i"),rchecked:/checked\s*(?:[^=]|=\s*.checked.)/i,containersLaunched:{}}),o.extend({inArray:function(t,e,n){var i,r=Array.prototype.indexOf;if(e){if(r)return r.call(e,t,n);for(i=e.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in e&&e[n]===t)return n}return-1},isFunction:function(t){return"function"===o.type(t)},isArray:Array.isArray||function(t){return"array"===o.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},type:function(t){return null==t?String(t):d[a.call(t)]||"object"},each:function(t,e,n){var i,r=0,a=t.length,c=undefined===a||o.isFunction(t);if(n)if(c){for(i in t)if(!1===e.apply(t[i],n))break}else for(;r<a&&!1!==e.apply(t[r++],n););else if(c){for(i in t)if(!1===e.call(t[i],i,t[i]))break}else for(;r<a&&!1!==e.call(t[r],r,t[r++]););return t},log:function(t,e){try{o.getCookie("tCdebugLib")&&console&&console[e||"log"](t)}catch(t){}}}),o.each("Boolean Number String Function Array Date RegExp Object".split(" "),(function(t,e){d["[object "+e+"]"]=e.toLowerCase()})),n=o(i);o.buildFragment=function(t,e,n){var r,a,c,s=t[0];return e=(e=!(e=e||i).nodeType&&e[0]||e).ownerDocument||e,!(1===t.length&&"string"==typeof s&&s.length<512&&e===i&&"<"===s.charAt(0))||o.rnocache.test(s)||!o.support.checkClone&&o.rchecked.test(s)||!o.support.html5Clone&&o.rnoshimcache.test(s)||(a=!0,c=undefined!==(r=jQuery.fragments[s])),r||(r=e.createDocumentFragment(),o.clean(t,e,r,n),a&&(o.fragments[s]=c&&r)),{fragment:r,cacheable:a}};var p=r.hostname,C=p.split(".");C.length<2||p.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")?o.maindomain=p:o.maindomain=C[C.length-2]+"."+C[C.length-1],t.tC=o}(window)),tC.extend({internalvars:void 0!==tC.internalvars?tC.internalvars:{},internalFunctions:void 0!==tC.internalFunctions?tC.internalFunctions:{},privacyVersion:tC.privacyVersion||"",containerVersion:String(3.12),id_container:String(2),id_site:String(5091),generatorVersion:"1.0.0",dedup_done:void 0!==tC.dedup_done&&tC.dedup_done}),function(){var t={};t.internalvars_5091=void 0!==tC.internalvars_5091?tC.internalvars_5091:{},tC.extend(t)}(),window.tC_5091_2={id_container:String(2),id_site:String(5091),frequency:String(510),containerVersion:String(3.12),generatorVersion:58},tC.extend({launchTag:function(t,e,n,i,r,a){void 0===a&&(a=0),tC.array_launched_tags.push(e),tC.array_launched_tags_keys.push(t),tC.containersLaunched[i][r].t.push({id:t,label:e,idTpl:n}),window.top.postMessage('TC.EX:{"id":"'+t+'","idc":"'+r+'","idt":"'+n+'","ids":"'+i+'","lb":"'+e.replace(/"/g,'\\"')+'","idtr":"'+a+'"}',"*")}}),void 0===tC.containersLaunched&&(tC.containersLaunched={}),void 0===tC.containersLaunched[5091]&&(tC.containersLaunched[5091]={}),tC.containersLaunched[5091][2]={v:String(3.12),t:[],g:58},tC.coreReadyStandalone=!0,tC.isDOMReady&&(tC.coreReadyStandalone=!1),tC.domReady=tC.domReady||!1,tC.isDOMReady=tC.isDOMReady||function(){if("complete"==document.readyState||"loaded"==document.readyState)return!0;if("interactive"!=document.readyState)return!1;if(!document.documentElement.doScroll)return!0;try{return document.documentElement.doScroll("left"),!0}catch(t){return!1}},tC.waitingOnDomReadyCallBacks=tC.waitingOnDomReadyCallBacks||[],tC.excuteOnDomReadyCallBacks=tC.excuteOnDomReadyCallBacks||function(){for(var t=0;t<tC.waitingOnDomReadyCallBacks.length;t++)tC.waitingOnDomReadyCallBacks[t]();tC.waitingOnDomReadyCallBacks=[]},tC.onDomReady=tC.onDomReady||function(t){if(this.domReady)t();else{tC.waitingOnDomReadyCallBacks.push(t);var e=!1;document.addEventListener?(e=!0,document.addEventListener("DOMContentLoaded",(function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),tC.excuteOnDomReadyCallBacks()}),!1)):document.attachEvent&&(e=!0,document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),tC.excuteOnDomReadyCallBacks())})),document.documentElement.doScroll&&window==window.top&&function(){if(!tC.domReady){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}tC.excuteOnDomReadyCallBacks()}}()),e||(window.onload=tC.excuteOnDomReadyCallBacks)}},!0===tC.coreReadyStandalone&&(tC.isDOMReady()?tC.domReady=!0:tC.onDomReady((function(){tC.domReady=!0}))),function(){"use strict";var t=window.tC;if(null!=t&&!t.cact){window.caReady=window.caReady||[],window.cact=window.cact||function(){window.caReady.push(arguments)},t.cact={};var e=function(t){return"[object Arguments]"===t.toString()||Array.isArray(t)},n=function(){},i=function(e){var i=e.event;if(null!=t.cact[i]){var r=e.callback||n;e._done=!0,t.cact[i](e,r)}else null==i&&(e._done=!0)},r=function(t){var e,n;return"object"==typeof t[1]?(e=t[1],n=t[2]):"function"==typeof t[1]?(e={},n=t[1]):e={},e.event=t[0],null!=n&&(e.callback=n),e};Object.defineProperty(window.caReady,"push",{value:function(t){e(t)&&(t=r(t)),null!=t.event&&(Array.prototype.push.call(window.caReady,t),i(t))}}),t.cact.exec=function(){for(var t=0;t<window.caReady.length;++t){var n=window.caReady[t];n._done||(e(n)&&(n=r(n),window.caReady[t]=n),i(n))}},t.cact.exec()}}(),tC.extend({isCurrentVersion:function(){if(1==tC.bypassBookmarklet)return!0;var t=tC.getCookie("tc_mode_test");return"1"!=t||"1"==t&&!1}}),tC.pixelTrack=tC.pixelTrack||{add:function(t,e){t=t||0,e=e||"img",tC.onDomReady((function(){var n;"iframe"==e?((n=document.createElement(e)).src=t,n.width=1,n.height=1,n.style.display="none",document.body.appendChild(n)):(n=new Image).src=t}))}},tC.tc_hdoc=tC.tc_hdoc||!1,tC.domain||(tC.domain=function(t){t=t>2?t:2;try{this.tc_hdoc=tC.isCrossDomainContext()?window.document:window.top.document;var e=void 0!==this.tc_hdoc.domain&&this.tc_hdoc.domain.toLowerCase().split("."),n=e.length;return n<2||this.tc_hdoc.domain.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")?"":(-1!==["co","com"].indexOf(e[n-2])&&(t+=1),t>n?"":"."+e.slice(n-t,n).join("."))}catch(t){tC.log(["tC.domain error : ",t],"warn")}},tC.isSubdomain=function(t){return t&&"."===t[0]&&(t=t.substr(1,t.length-1)),new RegExp(t+"$").test(tC.tc_hdoc.domain)},tC.isCrossDomainContext=function(){try{return window.top.document,!1}catch(t){return!0}},tC.domain()),tC.setCookie=function(t,e,n,i,r,a,o){var c=!1;r||(c=!0,r=tC.domain());var s=tC.isSubdomain(r);o||(o=s?"Lax":"None"),tC.isCrossDomainContext()&&(o="None"),"none"===o.toLowerCase()&&(a=!0);var d=new Date;d.setTime(d.getTime()),n&&(n=1e3*n*60*60*24);var p=new Date(d.getTime()+n),C=!0,u=3;do{var v=t+"="+escape(e)+(n?";expires="+p.toGMTString():"")+(i?";path="+i:";path=/")+(r?";domain="+r:"")+(a?";secure":"")+";SameSite="+o;document.cookie=v,C=-1===document.cookie.indexOf(t+"="),r=tC.domain(u++)}while(c&&C&&r&&s)},tC.getCookie=function(t){var e=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie);return e?unescape(e[1]):""},tC.isCookieEnabled=function(){if(navigator.cookieEnabled&&-1===window.navigator.userAgent.indexOf("MSIE"))return!0;document.cookie="tc_cookietest=1;";var t=-1!==document.cookie.indexOf("tc_cookietest=");return document.cookie="tc_cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",t},tC.removeCookie=function(t,e){this.setCookie(t,"",-1,"/",e)},function(){"use strict";var t=window.tC;t.eventTarget=t.eventTarget||{_eventTarget:document.createElement("null"),addEventListener:function(t,e,n){this._eventTarget.addEventListener(t,e,n)},removeEventListener:function(t,e){this._eventTarget.removeEventListener(t,e)},dispatchEvent:function(t){var e;"string"!=typeof t?e=t:(e=document.createEvent("Event")).initEvent(t,!0,!0),this._eventTarget.dispatchEvent(e)}}}(),tC.storage={has:function(){try{return"localStorage"in window&&null!=window.localStorage&&(window.localStorage.setItem("TC_CHECK","1"),window.localStorage.removeItem("TC_CHECK"),!0)}catch(t){return!1}},isAvailable:function(){try{return window.localStorage,!0}catch(t){return!1}},get:function(t){if(this.isAvailable())return window.localStorage.getItem(t)},set:function(t,e){if(this.isAvailable())try{return window.localStorage.setItem(t,e)||!0}catch(t){return!1}},remove:function(t){if(this.isAvailable())return window.localStorage.removeItem(t)||!0},setWithExpiry:function(t,e,n){if(this.isAvailable()){var i=(new Date).getTime(),r=1e3*n*60*60*24,a=JSON.stringify({value:e,expires:i+r});try{window.localStorage.setItem(t,a)}catch(t){}}},getWithExpiry:function(t){if(this.isAvailable()){var e=window.localStorage.getItem(t);if(null==e)return null;var n=(new Date).getTime();return(e=JSON.parse(e)).expires<n?(this.remove(t),null):e.value}}},function(){var t={};t.hitCounter_5091_2=function(){var t=window.tC_5091_2;0==Math.floor(Math.random()*parseInt(t.frequency))&&tC.pixelTrack.add("https://manager.tagcommander.com/utils/hit.php?id="+t.id_container+"&site="+t.id_site+"&version="+t.containerVersion+"&frequency="+t.frequency+"&position="+tC.container_position+"&rand="+Math.random())},tC.extend(t),tC.container_position="undefined"!=typeof tc_container_position?tc_container_position:void 0!==tC.container_position?tC.container_position:0,tC.container_position++,"undefined"!=typeof tc_container_position&&tc_container_position++,tC.hitCounter_5091_2()}(),tC.script={add:function(t,e,n){var i=document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode,r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.charset="utf-8",r.id="tc_script_"+Math.random(),i?(e&&(r.addEventListener?r.addEventListener("load",(function(){e()}),!1):r.onreadystatechange=function(){r.readyState in{loaded:1,complete:1}&&(r.onreadystatechange=null,e())}),n&&"number"==typeof n&&setTimeout((function(){i&&r.parentNode&&i.removeChild(r)}),n),i.insertBefore(r,i.firstChild)):tC.log("tC.script error : the element <script> or <body> is not found ! the file "+t+" is not implemented !","warn")}},tC.bypassBookmarklet=!0,function(){"use strict";if(window.tC=window.tC||{},null==window.tC.Bitfield){var t=function(t,e){if(isNaN(t)||t<0||t>=e)throw new RangeError("Bitfield: invalid index");return t>>3},e=function(t){return 1<<t%8},n=function(t){if(isNaN(t)||t<=0)throw new Error("Bitfield: size must be greater than zero");var e=Math.ceil(t/8);this.buffer=new Uint8Array(e),this.length=t};n.fromBase64URL=function(t){var e=t.replace(/\-/g,"+").replace(/_/g,"/"),i=atob(e),r=new n(8*i.length);for(var a in i)i.hasOwnProperty(a)&&(r.buffer[a]=i.charCodeAt(a));return r},n.prototype.toBase64URL=function(){var t=String.fromCharCode.apply(null,this.buffer);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_")},n.fromArray=function(t){for(var e=new n(t.length),i=0;i<t.length;++i)t[i]&&e.set(i);return e},n.prototype.toArray=function(){for(var t=Array(this.length),e=0;e<this.length;++e)t[e]=this.get(e);return t},n.prototype.get=function(n){var i=t(n,this.length),r=e(n);return Boolean(this.buffer[i]&r)},n.prototype.set=function(n){var i=t(n,this.length),r=e(n);return this.buffer[i]|=r,this},n.prototype.unset=function(n){var i=t(n,this.length),r=e(n);return this.buffer[i]&=~r,this},window.tC.Bitfield=n}}(),tC.fn.css=function(t){try{this.each((function(e,n){for(var i in t){var r="";if(/-/.test(i)){var a=i.split("-");for(var e in a)if(0==e)r=a[e];else{var o=a[e].split("");r+=o.shift().toUpperCase()+o.join("")}}else r=i;n.style[r]=t[i]}}))}catch(t){tC.log(["tC.fn.css->error",t.message],"warn")}return this},tC.fn.resetCss=function(){return this.each((function(t,e){tC(e).css({border:"none",background:"none",font:"none",margin:"none",padding:"none",top:"none",left:"none",buttom:"none",right:"none",width:"none",height:"none"})})),this},tC.arrayUniqueFilter=function(t,e,n){return n.indexOf(t)===e},tC.privacy=tC.privacy||{reactived:null,id:null,version:null,categories:null,vendorsDisabled:null,optinVendors:[],cookieData:null,init:function(){var t=tC.getCookie(tC.privacy.getCN());tC.privacy.cookieData=t?t.indexOf("@")>=0?t.split("@"):t.split(tC.privacy.getCS()):[],tC.privacy.vendorsDisabled=tC.getCookie(this.getVCN()).split(","),tC.privacy.optinVendors=[];var e=tC.privacy.cookieData[5]||"";if(""!==String(e)&&(e=tC.Bitfield.fromBase64URL(e).toArray()).forEach((function(t,e){!0===t&&tC.privacy.optinVendors.push(String(e))})),null!=tC.privacy.isIabGoogleAcmEnabled&&tC.privacy.isIabGoogleAcmEnabled()){var n=tC.storage.getWithExpiry(this.getCN()+"_ACM");null!=n&&""!==String(n)&&(n=tC.Bitfield.fromBase64URL(n).toArray()).forEach((function(t,e){!0===t&&tC.privacy.optinVendors.push("acm_"+e)}))}if(tC.privacy.categories=tC.privacy.cookieData[2]||"","ALL"===tC.privacy.categories){var i=parseInt(tC.privacy.cookieData[0]||0);tC.privacy.categories=1===i?[]:tC.privacy.allSelectableCategoriesId||[]}else tC.privacy.categories=""!==tC.privacy.categories?tC.privacy.categories.split(","):[];var r=(tC.privacy.cookieData[4]||"").split(",");tC.privacy.consentDates={updatedAt:Number(r[0])||null,createdAt:Number(r[1])||null,expiresAt:Number(r[2])||null}}},tC.privacy.saveConsent=function(t){var e=t.optin;if(null==tC.isCookieEnabledBool&&(tC.isCookieEnabledBool=tC.isCookieEnabled()),!1!==tC.isCookieEnabledBool){var n=t.categoryList||"",i=t.vendorList||"",r=t.privacyVersion||tC.privacy.getVersion(),a=t.privacyId||tC.privacy.getId(),o=t.action||"banner_button",c={};null!=t.acmVendorList&&(c.acmVendorList=t.acmVendorList),tC.privacy.cok(Number(!e),r,n,i,c),tC.privacy.hit(Number(e),r,a,o),window.tCPrivacyTagManager&&tC.privacy.sendDataOtherTMS(),tC.eventTarget.dispatchEvent("consent-update")}},tC.privacy.In=tC.privacy.In||function(t,e,n,i,r,a,o){o=o||{},tC.privacy.saveConsent({optin:!0,privacyId:t,privacyVersion:e,action:r,categoryList:i,vendorList:a,acmVendorList:o.acmVendorList})},tC.privacy.Out=tC.privacy.Out||function(t,e,n,i,r,a,o){o=o||{},"ALL"===i&&(i=""),tC.privacy.saveConsent({optin:!1,privacyId:t,privacyVersion:e,action:r,categoryList:i,vendorList:a,acmVendorList:o.acmVendorList})},tC.privacy.encodeVendorList=function(t){if(t.length>0){var e=(t=t.map(Number).sort((function(t,e){return t-e})))[t.length-1],n=new tC.Bitfield(e+1);return t.forEach((function(t){n.set(t)})),n.toBase64URL()}return""};var prepareAcmVendorConsent=function(t){var e=t.filter((function(t){return/acm_/.test(t)})).map((function(t){return t.split("_")[1]}));return e.length>0&&(t=t.filter((function(t){return t>0}))),{nonAcmVendors:t,acmVendors:e}};tC.privacy.optinAll=function(t){t=t||"banner_button";var e,n=tC.privacy.getCategoryIdList().join(","),i=tC.privacy.getVendorIdList();if(null!=tC.privacy.isIabGoogleAcmEnabled&&tC.privacy.isIabGoogleAcmEnabled()){var r=prepareAcmVendorConsent(i);i=r.nonAcmVendors,e=tC.privacy.encodeVendorList(r.acmVendors)}i=tC.privacy.encodeVendorList(i),tC.privacy.saveConsent({optin:!0,action:t,categoryList:n,vendorList:i,acmVendorList:e})};var prepareConsent=function(t){var e=((t=t||{}).categories||[]).map(String),n=(t.vendors||[]).map(String);if(tC.privacy.iabCategoriesToPublicCategories){var i=tC.privacy.iabCategoriesToPublicCategories({purposes:(t.iabPurposes||[]).map(String),legIntPurposes:(t.iabPurposes||[]).map(String).filter((function(t){return 1!==t})),specialFeatures:(t.iabSpecialFeatures||[]).map(String)});e=e.concat(i)}if(tC.privacy.iabVendorsToPublicVendors){var r=tC.privacy.iabVendorsToPublicVendors({vendors:(t.iabVendors||[]).map(String),legIntVendors:(t.iabVendors||[]).map(String)});n=n.concat(r)}return{vendors:n,categories:e}};tC.privacy.optin=function(t,e){t=t||"banner_button";var n=prepareConsent(e=e||{}),i=n.categories,r=n.vendors;if(0!==i.length||0!==r.length){var a;if(i=i.concat(e.reset?[]:tC.privacy.getOptinCategories()).filter(tC.arrayUniqueFilter),r=r.concat(e.reset?[]:tC.privacy.getOptinVendors()).filter(tC.arrayUniqueFilter),null!=tC.privacy.isIabGoogleAcmEnabled&&tC.privacy.isIabGoogleAcmEnabled()){var o=prepareAcmVendorConsent(r);r=o.nonAcmVendors,a=tC.privacy.encodeVendorList(o.acmVendors)}r=tC.privacy.encodeVendorList(r),tC.privacy.saveConsent({optin:!0,action:t,categoryList:i,vendorList:r,acmVendorList:a})}},tC.privacy.optoutAll=function(t){var e;t=t||"banner_button",null!=tC.privacy.isIabGoogleAcmEnabled&&tC.privacy.isIabGoogleAcmEnabled()&&(e=""),tC.privacy.saveConsent({optin:!1,action:t,categoryList:"",vendorList:"",acmVendorList:e})},tC.privacy.optout=function(t,e){t=t||"banner_button";var n=prepareConsent(e),i=n.categories,r=n.vendors;if(0!==i.length||0!==r.length){var a=tC.privacy.getOptinCategories(),o=tC.privacy.getOptinVendors();if(i=a.filter((function(t){return-1===i.indexOf(t)})),r=o.filter((function(t){return-1===r.indexOf(t)})),0!==i.length||0!==r.length){var c;if(null!=tC.privacy.isIabGoogleAcmEnabled&&tC.privacy.isIabGoogleAcmEnabled()){var s=prepareAcmVendorConsent(r);r=s.nonAcmVendors,c=tC.privacy.encodeVendorList(s.acmVendors)}r=tC.privacy.encodeVendorList(r),tC.privacy.saveConsent({optin:!0,action:t,categoryList:i,vendorList:r,acmVendorList:c})}else tC.privacy.optoutAll(t)}},tC.privacy.getCategoryIdList=function(){var t=tC.privacy.privacySelectableUnblockedCategoriesId||[];return tC.privacy.getIabCategoryIdList&&(t=t.concat(tC.privacy.getIabCategoryIdList())),t},tC.privacy.getVendorIdList=function(){var t=tC.privacy.includedVendorIds||[];return t=null!=tC.privacy.isIabGoogleAcmEnabled&&tC.privacy.isIabGoogleAcmEnabled()?t.filter((function(t){return!(t>1e3)})):t.filter((function(t){return t<1e3})),tC.privacy.getIabVendorIdList&&(t=t.concat(tC.privacy.getIabVendorIdList())),t},tC.privacy.getId=tC.privacy.getId||function(){return""},tC.privacy.getVersion=tC.privacy.getVersion||function(){return""},tC.privacy.getConsent=function(t){var e=(t=t||{}).pretty,n=!!e&&"off",i=null;0===tC.privacy.cookieData.length?(n=e?"unset":null,i="unset"):1===Number(tC.privacy.cookieData[0])&&(i="all-off");var r=!e||"on",a=tC.privacy.getOptinCategories().reduce((function(t,e){return t[e]=r,t}),{}),o=tC.privacy.getCategoryIdList();o=o.reduce((function(t,e){var o=e,c="status";e>1e4&&e<13e3?(o="tcf2_"+Math.ceil((e-1e4)/2),e%2==0&&(c="legIntStatus")):e>13e3&&(o="tcf2_sf_"+(e-13e3));return t[o]=t[o]||{},t[o][c]=a[e]||n,null==i&&t[o][c]!==r&&(i="mixed"),t}),{}),tC.privacy.blockedOnCategories.forEach((function(t){o[t]={status:r,required:!0}}));var c=tC.privacy.getVendorIdList(),s=tC.privacy.getOptinVendors().reduce((function(t,e){return t[e]=r,t}),{});c=c.reduce((function(t,e){var a=e,o="status";e>1e3&&(a="tcf2_"+Math.ceil((e-1e3)/2),e%2==0&&(o="legIntStatus"));return t[a]=t[a]||{},t[a][o]=s[e]||n,null==i&&t[a][o]!==r&&(i="mixed"),t}),{}),i=i||"all-on";var d={version:"1.0",siteId:tC.id_site,consentId:tC.getCookie("TCPID")||null,bannerId:String(tC.privacy.getId()),bannerVersion:tC.privacy.getVersion()};return tC.privacy.iabVendorList&&(d.tcfPolicyVersion=String(tC.privacy.iabVendorList.tcfPolicyVersion)),tC.privacy.consentDates&&(d.dateCreated=tC.privacy.consentDates.createdAt,d.dateUpdated=tC.privacy.consentDates.updatedAt,d.dateExpires=tC.privacy.consentDates.expiresAt),{meta:d,consent:{status:i,categories:o,vendors:c}}},tC.privacy.updateConsent=function(t){if("all-on"!==(t=t||{}).status)if("all-off"!==t.status){t.categories=t.categories||{},t.vendors=t.vendors||{};var e=!t.pretty||"on",n=!!t.pretty&&"off",i={categories:[],vendors:[]},r={categories:[],vendors:[]},a=null!=window.__tcfapi;Object.keys(t.categories).forEach((function(o){var c=o,s=t.categories[o];if(a){var d=String(o).match(/tcf2_(\d*)/),p=d?String(o).match(/tcf2_sf_(\d*)/):null;p?c=13e3+Number(p[1]):d&&(c=2*Number(d[1])-1+1e4,s.legIntStatus===e?i.categories.push(c+1):s.legIntStatus===n&&r.categories.push(c+1))}s.status===e?i.categories.push(c):s.status===n&&r.categories.push(c)})),Object.keys(t.vendors).forEach((function(o){var c=o,s=t.vendors[o];if(a){var d=String(o).match(/tcf2_(\d*)/);d&&(c=2*Number(d[1])-1+1e3,s.legIntStatus===e?i.vendors.push(c+1):s.legIntStatus===n&&r.vendors.push(c+1))}s.status===e?i.vendors.push(c):s.status===n&&r.vendors.push(c)})),tC.privacy.optin(t.action,i),tC.privacy.optout(t.action,r)}else tC.privacy.optoutAll(t.action);else tC.privacy.optinAll(t.action)},tC.privacy.revokeConsent=function(){tC.privacy.optoutAll(),tC.removeCookie(tC.privacy.getCN(),window.tc_privacy_force_domain),tC.removeCookie(tC.privacy.getPCCN(),window.tc_privacy_force_domain),tC.privacy.cookieData=[],tC.storage&&(tC.storage.remove(tC.privacy.getCN()+"_TCF"),tC.storage.remove(tC.privacy.getCN()+"_ACM")),tC.removeCookie("TCPID",window.tc_privacy_force_domain),tC.privacy.createConsentId(),tC.eventTarget.dispatchEvent("consent-revoke")},tC.privacy.cok=tC.privacy.cok||function(t,e,n,i,r){r=r||{},n=n||"",i=i||"";var a=tC.privacy.consentDuration||13;a=30*parseInt(a);var o=void 0!==window.tc_privacy_force_domain?window.tc_privacy_force_domain:null;tC.privacy.iabVendorList&&(e=e+"|"+tC.privacy.iabVendorList.gvlSpecificationVersion+"|"+tC.privacy.iabVendorList.tcfPolicyVersion+"|"+tC.privacy.iabVendorList.vendorListVersion);var c=(new Date).getTime(),s=c;if(tC.privacy.consentDates){var d=c+1e3*a*60*60*24;tC.privacy.consentDates.updatedAt=c,tC.privacy.consentDates.createdAt=tC.privacy.consentDates.createdAt||c,tC.privacy.consentDates.expiresAt=d,s=[tC.privacy.consentDates.updatedAt,tC.privacy.consentDates.createdAt,tC.privacy.consentDates.expiresAt].join(",")}var p=t+tC.privacy.getCS()+e+tC.privacy.getCS()+n+tC.privacy.getCS()+(tC.privacy.blockedOnCategories||"")+tC.privacy.getCS()+s+tC.privacy.getCS()+i;if(tC.setCookie(tC.privacy.getCN(),p,a,"/",o),tC.setCookie(tC.privacy.getPCCN(),n,a,"/",o),null!=r.acmVendorList&&tC.storage.setWithExpiry(tC.privacy.getCN()+"_ACM",r.acmVendorList,a),null!=window.__tcfapi){var C=tC.privacy.getCN()+"_TCF";tC.storage.remove(C),window.__tcfapi("getTCData",2,(function(t,e){e&&(t.vendorListVersion=tC.privacy.iabVendorList.vendorListVersion,tC.storage.setWithExpiry(C,t,a))}))}},tC.privacy.checkOptinAllVendors=function(){var t=tC.privacy.getOptinVendors().map(String);return tC.privacy.getVendorIdList().map(String).every((function(e){return-1!==t.indexOf(e)}))},tC.privacy.hit=tC.privacy.hit||function(t,e,n,i){tC.privacy.categories;var r=tC.privacy.privacySelectableUnblockedCategoriesId||["1","2","5","3","4"],a=r.slice(),o=tC.privacy.getOptinCategories(),c=0;if(o.length>=r.length&&(r.forEach((function(t){o.indexOf(String(t))>-1&&a.splice(a.indexOf(t),1)})),c=0==a.length?1:0),0===t)var s=1;else if(1===t)s=0;else s=parseInt(tC.privacy.cookieData[0]||1);var d=tC.privacy.getHitDomain(s)+"/privacy-consent/",p={privacyBeacon:{id_tc:2,site:5091,version:e,id_privacy:n,type_action:i,privacy_action:t.toString(),list_categories:tC.privacy.getOptinCategories(),optin_to_all:c,tcpid:tC.getCookie("TCPID"),tc_optout:s}};1===t&&(p.privacyBeacon.list_vendors=tC.privacy.getOptinVendors().join(","),p.privacyBeacon.optin_to_all_vendors=Number(tC.privacy.checkOptinAllVendors())),navigator.sendBeacon&&navigator.sendBeacon(d,JSON.stringify(p))||(p=Object.keys(p.privacyBeacon).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(p.privacyBeacon[t])})).join("&"),tC.pixelTrack.add(d+"?"+p+"&rand="+Math.random()))},tC.privacy.rand=tC.privacy.rand||function(){var t=new Date;return String()+t.getYear()+(t.getMonth()+1)+t.getDay()+t.getHours()+t.getMinutes()+t.getSeconds()+parseInt(12345678942*Math.random())},tC.privacy.set=tC.privacy.set||function(t){tC.privacy.settings=t},tC.privacy.getCN=tC.privacy.getCN||function(){return void 0!==window.tc_privacy_cookie_name?window.tc_privacy_cookie_name:"TC_PRIVACY"},tC.privacy.getPCCN=tC.privacy.getPCCN||function(){return tC.privacy.getCN()+"_CENTER"},tC.privacy.getVCN=function(){return tC.privacy.getCN()+"_VENDOR"},tC.privacy.isEnable=tC.privacy.isEnable||function(){return null===tC.privacy.cookieData&&tC.privacy.init(),tC.privacy.cookieData.length<=2||""!==String(tC.privacy.reactivate)&&String(tC.privacy.cookieData[1])===String(tC.privacy.reactivate)},tC.privacy.getContainer=tC.privacy.getContainer||function(t){return t.getElementById("tc_div_preview")||t.body};var privacyForceHitDomain=null;tC.privacy.getHitDomain=function(t){var e=0===Number(t)?"https://privacy.commander1.com":"https://privacy.trustcommander.net";return privacyForceHitDomain&&(e=privacyForceHitDomain),e},tC.privacy.hitCounter=function(t,e){e=e||"banner",tC.privacy.init();var n=parseInt(tC.privacy.cookieData[0]||1);n=null!=tC.privacy.cookieData[2]&&""===String(tC.privacy.cookieData[2])?Number(!n):n;var i=tC.privacy.getHitDomain(n)+"/privacy-consent/",r={privacyBeacon:{id_tc:2,site:5091,version:tC.privacyVersion,id_privacy:t,type_action:e,privacy_action:"V",tcpid:tC.getCookie("TCPID"),tc_optout:n}};navigator.sendBeacon&&navigator.sendBeacon(i,JSON.stringify(r))||(r=Object.keys(r.privacyBeacon).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(r.privacyBeacon[t])})).join("&"),tC.pixelTrack.add(i+"?"+r+"&rand="+Math.random()))},tC.privacy.getOptinCategories=function(){tC.privacy.init();var t=parseInt(tC.privacy.cookieData[0]||0);return tC.privacy.categories&&tC.privacy.categories.length&&""===tC.privacy.categories[0]?[]:0===t&&null!=tC.privacy.categories&&"undefined"!==tC.privacy.categories&&-1!==Number(tC.privacy.categories)?tC.privacy.categories:[]},tC.privacy.getOptinVendors=function(){return tC.privacy.init(),tC.privacy.optinVendors||[]},tC.privacy.getOptoutVendors=function(){var t=[],e=tC.getCookie(tC.privacy.getVCN());return e&&(t=e.split(",")),t},tC.privacy.getBlockedOnCategories=function(){return tC.privacy.blockedOnCategories.map(String)},tC.privacy.getValidCategories=function(){return tC.privacy.getOptinCategories().concat(tC.privacy.getBlockedOnCategories())},tC.privacy.getValidVendors=function(){var t=tC.privacy.getValidCategories();return tC.privacy.getOptinVendors().filter((function(e){var n=tC.privacy.includedVendors[e];return!!n&&(null==n.categories||n.categories.every((function(e){return-1!==t.indexOf(String(e))})))}))},tC.privacy.getCS=tC.privacy.getCS||function(){return void 0!==tC.privacyCookieSeparator?tC.privacyCookieSeparator:"@"},tC.privacy.validRules=tC.privacy.validRules||function(t){if(null===tC.privacy.cookieData&&tC.privacy.init(),!tC.privacy.cookieData.length||1===tC.privacy.cookieData.length&&""===tC.privacy.cookieData[0])return!0;var e=0===parseInt(tC.privacy.cookieData[0]||0),n=tC.privacy.cookieData[1]?tC.privacy.cookieData[1].split(","):[0],i=parseInt(n[0]),r=n.length>1?parseInt(n[1]):0,a=(tC.privacy.cookieData[2]||"").split(","),o=tC.privacy.cookieData[3]?tC.privacy.cookieData[3].split(","):[],c=tC.privacy.optinVendors,s=tC.privacy.tagsCategoriesAssignation&&tC.privacy.tagsCategoriesAssignation[t]?tC.privacy.tagsCategoriesAssignation[t]:0,d=tC.privacy.tagsVendorsAssignation&&tC.privacy.tagsVendorsAssignation[t]?tC.privacy.tagsVendorsAssignation[t]:0,p=-1!==tC.inArray(s.toString(),o),C=-1!==tC.inArray(s.toString(),a)||-1!==tC.inArray("ALL",a),u=-1!==tC.inArray(d.toString(),c),v=-1!==tC.inArray(d,tC.privacy.minorTags),l=tC.privacy.includedVendors&&tC.privacy.includedVendors[d]?parseInt(tC.privacy.includedVendors[d].privacyVersion[r]):0;return(p||e&&C)&&(!d||u||v&&l>i)},tC.privacy.sendDataOtherTMS=tC.privacy.sendDataOtherTMS||function(){var t=tC.privacy.getListCategoryConsent();if(window.tCPrivacyTagManager)switch(window.tCPrivacyTagManager){case"gtm":window.dataLayer&&"function"==typeof window.dataLayer.push&&window.dataLayer.push({tcVendorsConsent:"",tcCategoriesConsent:t,event:"tcConsentChanged"});break;case"adobe":window.digitalData&&window.digitalData.user&&(window.digitalData.user.tcVendorsConsent="",window.digitalData.user.tcCategoriesConsent=t)}window.tcVendorsConsent="",window.tcCategoriesConsent=t},tC.privacy.getListCategoryConsent=tC.privacy.getListCategoryConsent||function(){var t=tC.privacy.getOptinCategories();return Array.isArray(t)&&(0===t.length||1===t.length&&""===String(t[0]))?""===tC.getCookie(tC.privacy.getCN())?"no_consent":"optout":t.join()},tC.privacy.getEmbeddedCategories=function(){return tC.privacy.allSelectableCategoriesId.map((function(t){return parseInt(t)}))};var tagCategories=tC.privacy.tagsCategoriesAssignation||{};tC.privacy.tagsCategoriesAssignation=[tagCategories,{2:1,TH1:1,4:1,6:1,8:1,10:1,12:1,14:1,16:1,18:1,20:1,22:1,26:1,28:1,30:1,32:1,34:1,36:1,TH3:1}].reduce((function(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t}),{});var tagVendors=tC.privacy.tagsVendorsAssignation||{};tC.privacy.tagsVendorsAssignation=[tagVendors,[]].reduce((function(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t}),{}),tC.privacy.allCategories=tC.privacy.allCategories||[{id:1,label:"VÅ¡etky cookies",categoryParent:-1,description:"akceptovaÅ¥ vÅ¡etky cookies",isUsedInTarget:"",subCategories:null,tagsId:[2,"TH1",4,6,8,10,12,14,16,18,20,22,26,28,30,32,34,36,"TH3"]},{id:2,label:"NevyhnutnÃ© cookies",categoryParent:-1,description:"tieto cookies slÃºÅ¾ia na zabezpeÄenie prevÃ¡dzky tejto webovej strÃ¡nky",isUsedInTarget:"",subCategories:null,tagsId:[]},{id:5,label:"MarketingovÃ© cookies",categoryParent:-1,description:"tieto cookies slÃºÅ¾ia na zÃ­skavania informÃ¡ciÃ­ o navÅ¡tevovanÃ­ jednotlivÃ½ch webovÃ½ch strÃ¡nok s cieÄ¾om zobraziÅ¥ reklamu, ktorÃ¡ je relevatnÃ¡ a zaujÃ­mavÃ¡ a tÃ½m pÃ¡dom aj hodnotnejÅ¡ia pre konkrÃ©tneho uÅ¾Ã­vateÄ¾a",isUsedInTarget:"",subCategories:null,tagsId:[]},{id:3,label:"Å tatistickÃ© cookies",categoryParent:-1,description:"tieto cookies slÃºÅ¾ia na anonymnÃ© zÃ­skavanie informÃ¡ciÃ­ o nÃ¡vÅ¡tevnosti tejto webovej strÃ¡nky",isUsedInTarget:"",subCategories:null,tagsId:[]},{id:4,label:"NeklasifikovanÃ©",categoryParent:-1,description:"tieto cookies slÃºÅ¾ia na anonymnÃ© zÃ­skavanie informÃ¡ciÃ­ o nÃ¡vÅ¡tevnosti tejto webovej strÃ¡nky",isUsedInTarget:"",subCategories:null,tagsId:[]}],tC.privacy.includedVendors=tC.privacy.includedVendors||{},tC.privacy.setLocale=function(t){tC.privacy.lang=t},tC.extend({container:{reload:function(){var t=arguments[0];tC.reload_events=!0,tC.container_position=0,tC.containerList&&tC.each(tC.containerList,(function(e,n){"object"==typeof tC["container_"+n]&&"function"==typeof tC["container_"+n].reload&&(tC["container_"+n].reload(t,!0),tC.reload_events=!1)}))}}}),function(){var t={};t.container_5091_2={load:function(t,e){tC.container_position++,tC.hitCounter_5091_2(),this.datalayer(),tC.array_launched_tags=[],tC.array_launched_tags_keys=[],"object"!=typeof t&&(t={}),"boolean"!=typeof e&&(e=!1),void 0===t.exclusions&&(t.exclusions=[]),-1==t.exclusions.indexOf("datastorage")&&this.datastorage(),-1==t.exclusions.indexOf("deduplication")&&this.deduplication(),-1==t.exclusions.indexOf("internalvars")&&this.internalvars(),-1==t.exclusions.indexOf("privacy")&&this.privacy(),-1==t.exclusions.indexOf("eventlisteners")&&this.eventlisteners(),!1!==tC.reload_events&&void 0!==t.events||(t.events={}),tC.each(t.events,(function(t,e){tC.event&&"function"==typeof tC.event[t]&&e.length>0&&(void 0===e[1]?tC.event[t](e[0]):tC.event[t](e[0],e[1]))}))},reload:function(t,e){"boolean"!=typeof e&&(e=!1),e||(tC.container_position=0,tC.reload_events=!0),this.load(arguments[0],!0)},datalayer:function(){"undefined"==typeof tc_vars&&(window.tc_vars=[]);var t="".split("|");for(var e in t)tc_vars.hasOwnProperty(t[e])||(tc_vars[t[e]]="");window.top.postMessage("TC.EX.EXT_VARS.RELOAD","*")},datastorage:function(){window.top.postMessage("TC.EX.DATASTORAGE.RELOAD","*")},deduplication:function(){tC.dedup&&(tC.dedup.LeA=!1,tC.dedup.LeAD=!1,tC.dedup.LeC=!1,tC.dedup.LeCD=!1,tC.dedup.LeV=!1,tC.dedup.LeVD=!1,tC.dedup.FeA=!1,tC.dedup.FeAD=!1,tC.dedup.FeC=!1,tC.dedup.FeCD=!1,tC.dedup.FeV=!1,tC.dedup.FeVD=!1,tC.dedup.AeA=[],tC.dedup.AeC=[],tC.dedup.AeV=[],tC.dedup.init(),tC.dedup.setEventList())},eventlisteners:function(){},internalvars:function(){var t=tC.internalvars_5091_2.listVar;if(t.length>0)for(var e=0;e<t.length;e++)tC.internalvars_5091.initiators["var"+t[e]]();window.top.postMessage("TC.EX.INT_VARS.RELOAD","*")},privacy:function(){tC.privacy&&tC.privacy.init()},init_tc_array_events:function(t){void 0===t&&(t={});var e="".split("|");for(var n in e)t.hasOwnProperty(e[n])||(t[e[n]]="");return t}},tC.extend(t),void 0===tC.containerList&&(tC.containerList=[]),tC.containerList.push("5091_2"),window.tc_array_events=tC.container_5091_2.init_tc_array_events([])}(),window.tC5091_2=tC,window.postMessage('TC.EX.CONTAINER:{"id":2,"ids":5091,"v":"3.12","g":58,"p":'+tC.container_position+',"url":"'+(document.currentScript?document.currentScript.src:"")+'"}',"*");
tC.container_5091_2.datalayer();tC.array_launched_tags=[];tC.array_launched_tags_keys=[];

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
if(tC.privacyCookieDisallowed){tC.setCookie('TCPID','',-1,'',tC.domain());}
tC.id_site='5091';
/*VARIABLES_BLOCK*/
tC.internalvars_5091.initiators=tC.internalvars_5091.initiators||{};tC.internalvars_5091_2={listVar:[]}

/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_5091_2.datastorage();

//----------------------------------------------------




//----

tC.launchTag(24,'Free input (custom)',26,5091,2,2);var tc_privacy_used=0;var tc_privacy_display_2=function(){if((document.location).toString().toLowerCase().match(new RegExp(('(?=^.*slsp\.sk\/en)(?!^.*use-of-cookies).*').replace(new RegExp("\\*","g"),".*"),"gi"))){if(tC.isCurrentVersion()&&tC.isCookieEnabled()){tC.privacy.containerId=2;tC.script.add('https://cdn.trustcommander.net/privacy/5091/privacy_v2_24.js');}}
if((document.location).toString().toLowerCase().match(new RegExp(('(?=^.*slsp\.sk\/sk)(?!^.*vyuzivanie-suborov-cookies).*').replace(new RegExp("\\*","g"),".*"),"gi"))){if(tC.isCurrentVersion()&&tC.isCookieEnabled()){tC.privacy.containerId=2;tC.script.add('https://cdn.trustcommander.net/privacy/5091/privacy_v2_22.js');}}}
var tc_privacy_cpt=0;function tc_privacy_wait_body_2(){if(document.body!=null){tc_privacy_display_2();}else{tc_privacy_cpt++;if(tc_privacy_cpt<20){setTimeout('tc_privacy_wait_body_2()',100);}}}
tc_privacy_wait_body_2();tC.onDomReady(function(){tC.container_5091_2.eventlisteners();});