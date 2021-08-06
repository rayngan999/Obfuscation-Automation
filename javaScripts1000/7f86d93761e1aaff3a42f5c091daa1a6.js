function BOOMR_check_doc_domain(e){var t;if(!e){if(window.parent===window||!document.getElementById("boomr-if-as"))return!0;e=document.domain}if(-1===e.indexOf("."))return!1;try{return t=window.parent.document,void 0!==t}catch(n){document.domain=e}try{return t=window.parent.document,void 0!==t}catch(n){e=e.replace(/^[\w\-]+\./,"")}return BOOMR_check_doc_domain(e)}BOOMR_start=(new Date).getTime(),BOOMR_check_doc_domain(),function(e){function t(e,t){var n=a(e,{detail:t});n&&BOOMR.setImmediate(function(){r.dispatchEvent?r.dispatchEvent(n):r.fireEvent&&r.fireEvent("onpropertychange",n)})}var n,i,r,o,a;e.parent!==e&&document.getElementById("boomr-if-as")&&"script"===document.getElementById("boomr-if-as").nodeName.toLowerCase()&&(e=e.parent,o=document.getElementById("boomr-if-as").src),r=e.document,void 0===e.BOOMR&&(e.BOOMR={}),BOOMR=e.BOOMR,BOOMR.version||(BOOMR.version="0.9",BOOMR.window=e,function(){try{void 0!==new e.CustomEvent("CustomEvent")&&(a=function(t,n){return new e.CustomEvent(t,n)})}catch(t){r.createEvent?a=function(e,t){var n=r.createEvent("CustomEvent");return t=t||{cancelable:!1,bubbles:!1},n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}:r.createEventObject&&(a=function(e,t){var n=r.createEventObject();return n.type=n.propertyName=e,n.detail=t.detail,n})}a||(a=function(){return void 0})}(),n={beacon_url:"",beacon_type:"AUTO",site_domain:e.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase(),user_ip:"",strip_query_string:!1,onloadfired:!1,handlers_attached:!1,events:{page_ready:[],page_unload:[],dom_loaded:[],visibility_changed:[],before_beacon:[],onbeacon:[],xhr_load:[],click:[],form_submit:[]},public_events:{before_beacon:"onBeforeBoomerangBeacon",onbeacon:"onBoomerangBeacon",onboomerangloaded:"onBoomerangLoaded"},vars:{},errors:{},disabled_plugins:{},onclick_handler:function(t){var i;t||(t=e.event),t.target?i=t.target:t.srcElement&&(i=t.srcElement),3===i.nodeType&&(i=i.parentNode),i&&"OBJECT"===i.nodeName.toUpperCase()&&"application/x-shockwave-flash"===i.type||n.fireEvent("click",i)},onsubmit_handler:function(t){var i;t||(t=e.event),t.target?i=t.target:t.srcElement&&(i=t.srcElement),3===i.nodeType&&(i=i.parentNode),n.fireEvent("form_submit",i)},fireEvent:function(e,n){var i,r,o;if(e=e.toLowerCase(),!this.events.hasOwnProperty(e))return!1;for(o=this.events[e],i=0;i<o.length;i++)try{r=o[i],r.fn.call(r.scope,n,r.cb_data)}catch(a){BOOMR.addError(a,"fireEvent")}return this.public_events.hasOwnProperty(e)&&t(this.public_events[e],n),!0}},i={t_lstart:null,t_start:BOOMR_start,t_end:null,url:o,utils:{objectToString:function(e,t,n){var i,r=[];if(!e||"object"!=typeof e)return e;if(void 0===t&&(t="\n	"),n||(n=0),"[object Array]"===Object.prototype.toString.call(e)){for(i=0;i<e.length;i++)r.push(n>0&&null!==e[i]&&"object"==typeof e[i]?this.objectToString(e[i],t+("\n	"===t?"	":""),n-1):encodeURIComponent(e[i]));t=","}else for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.push(n>0&&null!==e[i]&&"object"==typeof e[i]?encodeURIComponent(i)+"="+this.objectToString(e[i],t+("\n	"===t?"	":""),n-1):encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return r.join(t)},getCookie:function(e){if(!e)return null;e=" "+e+"=";var t,n;return n=" "+r.cookie+";",(t=n.indexOf(e))>=0?(t+=e.length,n=n.substring(t,n.indexOf(";",t))):null},setCookie:function(e,t,i){var o,a,s,d,l;if(!e||!n.site_domain)return BOOMR.debug("No cookie name or site domain: "+e+"/"+n.site_domain),!1;if(o=this.objectToString(t,"&"),a=e+"="+o,d=[a,"path=/","domain="+n.site_domain],i&&(l=new Date,l.setTime(l.getTime()+1e3*i),l=l.toGMTString(),d.push("expires="+l)),a.length<500){if(r.cookie=d.join("; "),s=this.getCookie(e),o===s)return!0;BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n"+o+"\n"+s)}else BOOMR.warn("Cookie too long: "+a.length+" "+a);return!1},getSubCookies:function(e){var t,n,i,r,o=!1,a={};if(!e)return null;if("string"!=typeof e)return BOOMR.debug("TypeError: cookie is not a string: "+typeof e),null;for(t=e.split("&"),n=0,i=t.length;i>n;n++)r=t[n].split("="),r[0]&&(r.push(""),a[decodeURIComponent(r[0])]=decodeURIComponent(r[1]),o=!0);return o?a:null},removeCookie:function(e){return this.setCookie(e,{},-86400)},cleanupURL:function(e){return e?n.strip_query_string?e.replace(/\?.*/,"?qs-redacted"):e:""},hashQueryString:function(e,t){return e?(e.match(/^\/\//)&&(e=location.protocol+e),e.match(/^(https?|file):/)?(t&&(e=e.replace(/#.*/,"")),BOOMR.utils.MD5?e.replace(/\?([^#]*)/,function(e,t){return"?"+(t.length>10?BOOMR.utils.MD5(t):t)}):e):(BOOMR.error("Passed in URL is invalid: "+e),"")):e},pluginConfig:function(e,t,n,i){var r,o=0;if(!t||!t[n])return!1;for(r=0;r<i.length;r++)void 0!==t[n][i[r]]&&(e[i[r]]=t[n][i[r]],o++);return o>0},addListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},removeListener:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},pushVars:function(e,t,n){var i,r,o=0;for(i in t)if(t.hasOwnProperty(i))if("[object Array]"===Object.prototype.toString.call(t[i]))for(r=0;r<t[i].length;++r)o+=BOOMR.utils.pushVars(e,t[i][r],i+"["+r+"]");else++o,e.push(encodeURIComponent(n?n+"["+i+"]":i)+"="+(void 0===t[i]||null===t[i]?"":encodeURIComponent(t[i])));return o},postData:function(e){var t=e.split("/log?")[1]?e.split("/log?")[1]:e,i=new XMLHttpRequest;i.open("POST",n.beacon_url,!0),i.setRequestHeader("x-payload",t),i.send(null),BOOMR.debug("Sending data: "+t.replace(/&/g,"\n	"))}},init:function(t){var o,a,s=["beacon_url","beacon_type","site_domain","user_ip","strip_query_string"];for(BOOMR_check_doc_domain(),t||(t={}),o=0;o<s.length;o++)void 0!==t[s[o]]&&(n[s[o]]=t[s[o]]);void 0!==t.log&&(this.log=t.log),this.log||(this.log=function(){});for(a in this.plugins)if(this.plugins.hasOwnProperty(a)){if(t[a]&&t[a].hasOwnProperty("enabled")&&t[a].enabled===!1){n.disabled_plugins[a]=1;continue}if(n.disabled_plugins[a]&&delete n.disabled_plugins[a],"function"==typeof this.plugins[a].init)try{this.plugins[a].init(t)}catch(d){BOOMR.addError(d,this.plugins[a]+".init")}}return n.handlers_attached?this:(n.onloadfired||void 0!==t.autorun&&t.autorun===!1||(r.readyState&&"complete"===r.readyState?this.setImmediate(BOOMR.page_ready,null,null,BOOMR):e.onpagehide||null===e.onpagehide?i.utils.addListener(e,"pageshow",BOOMR.page_ready):i.utils.addListener(e,"load",BOOMR.page_ready)),i.utils.addListener(e,"DOMContentLoaded",function(){n.fireEvent("dom_loaded")}),function(){var t,o,a;for(t=function(){n.fireEvent("visibility_changed")},r.webkitVisibilityState?i.utils.addListener(r,"webkitvisibilitychange",t):r.msVisibilityState?i.utils.addListener(r,"msvisibilitychange",t):r.visibilityState&&i.utils.addListener(r,"visibilitychange",t),i.utils.addListener(r,"mouseup",n.onclick_handler),o=r.getElementsByTagName("form"),a=0;a<o.length;a++)i.utils.addListener(o[a],"submit",n.onsubmit_handler);e.onpagehide||null===e.onpagehide||i.utils.addListener(e,"unload",function(){BOOMR.window=e=null})}(),n.handlers_attached=!0,this)},page_ready:function(t){return t||(t=e.event),t||(t={name:"load"}),n.onloadfired?this:(n.fireEvent("page_ready",t),n.onloadfired=!0,this)},setImmediate:function(t,n,i,r){var o=function(){t.call(r||null,n,i||{}),o=null};e.setImmediate?e.setImmediate(o):e.msSetImmediate?e.msSetImmediate(o):e.webkitSetImmediate?e.webkitSetImmediate(o):e.mozSetImmediate?e.mozSetImmediate(o):setTimeout(o,10)},subscribe:function(t,r,o,a){var s,d,l,u;if(t=t.toLowerCase(),!n.events.hasOwnProperty(t))return this;for(l=n.events[t],s=0;s<l.length;s++)if(d=l[s],d.fn===r&&d.cb_data===o&&d.scope===a)return this;return l.push({fn:r,cb_data:o||{},scope:a||null}),"page_ready"===t&&n.onloadfired&&this.setImmediate(r,null,o,a),"page_unload"===t&&(u=function(t){r&&r.call(a,t||e.event,o)},e.onpagehide||null===e.onpagehide?i.utils.addListener(e,"pagehide",u):i.utils.addListener(e,"unload",u),i.utils.addListener(e,"beforeunload",u)),this},addError:function(e,t){"string"!=typeof e&&(e=String(e)),void 0!==t&&(e="["+t+"] "+e),n.errors[e]?n.errors[e]++:n.errors[e]=1},addVar:function(e,t){if("string"==typeof e)n.vars[e]=t;else if("object"==typeof e){var i,r=e;for(i in r)r.hasOwnProperty(i)&&(n.vars[i]=r[i])}return this},removeVar:function(e){var t,i;if(!arguments.length)return this;for(i=1===arguments.length&&"[object Array]"===Object.prototype.toString.apply(e)?e:arguments,t=0;t<i.length;t++)n.vars.hasOwnProperty(i[t])&&delete n.vars[i[t]];return this},requestStart:function(e){var t=(new Date).getTime();return BOOMR.plugins.RT.startTimer("xhr_"+e,t),{loaded:function(n){BOOMR.responseEnd(e,t,n)}}},responseEnd:function(e,t,i){BOOMR.plugins.RT.startTimer("xhr_"+e,t),n.fireEvent("xhr_load",{name:"xhr_"+e,data:i})},sendBeacon:function(){var t,i,o,a,s,d=[];BOOMR.debug("Checking if we can send beacon");for(t in this.plugins)if(this.plugins.hasOwnProperty(t)){if(n.disabled_plugins[t])continue;if(!this.plugins[t].is_complete())return BOOMR.debug("Plugin "+t+" is not complete, deferring beacon send"),!1}n.vars.v=BOOMR.version,n.vars.u=BOOMR.utils.cleanupURL(r.URL.replace(/#.*/,"")),e!==window&&(n.vars["if"]="");for(t in n.errors)n.errors.hasOwnProperty(t)&&d.push(t+(n.errors[t]>1?" (*"+n.errors[t]+")":""));return d.length>0&&(n.vars.errors=d.join("\n")),n.errors={},n.fireEvent("before_beacon",n.vars),n.beacon_url?(i=[],s=BOOMR.utils.pushVars(i,n.vars),this.setImmediate(n.fireEvent,"onbeacon",n.vars,n),s?(i=i.join("&"),"POST"===n.beacon_type?BOOMR.utils.postData(i):(o=n.beacon_url+(n.beacon_url.indexOf("?")>-1?"&":"?")+i,o.length>2e3&&"AUTO"===n.beacon_type?BOOMR.utils.postData(o):(BOOMR.debug("Sending url: "+o.replace(/&/g,"\n	")),a=new Image,a.src=o)),!0):this):(BOOMR.debug("No beacon_url, but would have sent: "+BOOMR.utils.objectToString(n.vars)),!0)}},delete BOOMR_start,"number"==typeof BOOMR_lstart?(i.t_lstart=BOOMR_lstart,delete BOOMR_lstart):"number"==typeof BOOMR.window.BOOMR_lstart&&(i.t_lstart=BOOMR.window.BOOMR_lstart),function(){var t;e.YAHOO&&e.YAHOO.widget&&e.YAHOO.widget.Logger?i.log=e.YAHOO.log:e.Y&&e.Y.log?i.log=e.Y.log:"object"==typeof console&&void 0!==console.log&&(i.log=function(e,t,n){console.log(n+": ["+t+"] "+e)}),t=function(e){return function(t,n){return this.log(t,e,"boomerang"+(n?"."+n:"")),this}},i.debug=t("debug"),i.info=t("info"),i.warn=t("warn"),i.error=t("error")}(),function(){var e;for(e in i)i.hasOwnProperty(e)&&(BOOMR[e]=i[e])}(),BOOMR.plugins=BOOMR.plugins||{},t("onBoomerangLoaded",{BOOMR:BOOMR}))}(window),function(e){var t,n=e.document;BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var i=Math.random(),r=["SiteID","i_bu","i_ess","i_evt","i_event","i_title","i_hostname","i_referrer","i_screenHW","i_browserHW","i_random","i_visitor_id"],o="STORE",t={complete:!1,onloadfired:!1,unloadfired:!1,initialized:!1,visiblefired:!1,page_ready:function(){this.onloadfired=!0},visibility_changed:function(){n.hidden||n.msHidden||n.webkitHidden||(t.visiblefired=!0)}};BOOMR.plugins.info={init:function(i){e!==BOOMR.window&&(e=BOOMR.window,n=e.document);var r=["prop1","prop2"];return BOOMR.utils.pluginConfig(t,i,"info",r),t.initialized?this:(t.complete=!1,BOOMR.subscribe("page_ready",t.page_ready,null,t),t.visiblefired=!(n.hidden||n.msHidden||n.webkitHidden),t.visiblefired||BOOMR.subscribe("visibility_changed",t.visibility_changed,null,t),BOOMR.subscribe("page_ready",this.done,"load",this),BOOMR.subscribe("page_unload",this.wipe,"unload",t),t.initialized=!0,this)},is_complete:function(){return t.complete},getSiteID:function(){try{if(location.pathname&&location.pathname.length>0){var e=location.pathname.match(new RegExp("/store/(.+?)/"));if(e&&2===e.length)return e[1]}if(location.search&&location.search.length>0)for(var t=location.search.split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i&&2===i.length&&("siteid"===i[0].toLowerCase()||"?siteid"===i[0].toLowerCase()))return i[1]}}catch(r){return null}return null},wipe:function(n,a){t.complete=!1,BOOMR.removeVar(r),data={i_event:a,i_event_u:"wipe",i_hostname:e.location.hostname,i_random:i,i_visitor_id:BOOMR.utils.getCookie("VISITOR_ID"),i_bu:"DataServices",i_ess:o,i_evt:"rum"},BOOMR.addVar(data),t.complete=!0},fillVar:function(e,n){var a,s=BOOMR.window;t.complete=!1,BOOMR.removeVar(r);var d=s.top.document;a={i_event:n,i_title:d.title,i_hostname:s.location.hostname,i_referrer:d.referrer,i_screenHW:screen.width+"x"+screen.height,i_browserHW:d.documentElement.clientWidth+"x"+d.documentElement.clientHeight,i_random:i,i_visitor_id:BOOMR.utils.getCookie("VISITOR_ID"),i_bu:"DataServices",i_ess:o,i_evt:"rum"};var l=this.getSiteID();null!=l?a.SiteID=l:delete a.SiteID,BOOMR.addVar(a),t.complete=!0},done:function(e,n){return t.complete=!1,this.fillVar(e,n),t.complete=!0,this}}}(window),function(){BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{};var e={complete:!1,done:function(){var e,t,n,i,r=BOOMR.window;return this.complete?this:(e=r.performance||r.msPerformance||r.webkitPerformance||r.mozPerformance,e&&e.timing&&e.navigation&&(BOOMR.info("This user agent supports NavigationTiming.","nt"),t=e.navigation,n=e.timing,i={nt_red_cnt:t.redirectCount,nt_nav_type:t.type,nt_nav_st:n.navigationStart,nt_red_st:n.redirectStart,nt_red_end:n.redirectEnd,nt_fet_st:n.fetchStart,nt_dns_st:n.domainLookupStart,nt_dns_end:n.domainLookupEnd,nt_con_st:n.connectStart,nt_con_end:n.connectEnd,nt_req_st:n.requestStart,nt_res_st:n.responseStart,nt_res_end:n.responseEnd,nt_domloading:n.domLoading,nt_domint:n.domInteractive,nt_domcontloaded_st:n.domContentLoadedEventStart,nt_domcontloaded_end:n.domContentLoadedEventEnd,nt_domcomp:n.domComplete,nt_load_st:n.loadEventStart,nt_load_end:n.loadEventEnd,nt_unload_st:n.unloadEventStart,nt_unload_end:n.unloadEventEnd},n.secureConnectionStart&&(i.nt_ssl_st=n.secureConnectionStart),n.msFirstPaint&&(i.nt_first_paint=n.msFirstPaint),BOOMR.addVar(i)),r.chrome&&r.chrome.loadTimes&&(n=r.chrome.loadTimes(),n&&(i={nt_spdy:n.wasFetchedViaSpdy?1:0,nt_first_paint:n.firstPaintTime},BOOMR.addVar(i))),this.complete=!0,void BOOMR.sendBeacon())}};BOOMR.plugins.NavigationTiming={init:function(){return BOOMR.subscribe("page_ready",e.done,null,e),BOOMR.subscribe("page_unload",e.done,null,e),this},is_complete:function(){return e.complete}}}(),function(e){var t,n=e.document;BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},t={onloadfired:!1,unloadfired:!1,visiblefired:!1,initialized:!1,complete:!1,timers:{},cookie:"RT",cookie_exp:600,strict_referrer:!0,navigationType:0,navigationStart:void 0,responseStart:void 0,t_start:void 0,cached_t_start:void 0,t_fb_approx:void 0,r:void 0,r2:void 0,basic_timers:{t_done:1,t_resp:1,t_page:1},updateCookie:function(e,t){var n,i,r,o;if(!this.cookie)return!1;if(r=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie))||{},"object"==typeof e)for(o in e)e.hasOwnProperty(o)&&(void 0===e[o]?r.hasOwnProperty(o)&&delete r[o]:(("nu"===o||"r"===o)&&(e[o]=BOOMR.utils.hashQueryString(e[o],!0)),r[o]=e[o]));return i=(new Date).getTime(),t&&(r[t]=i),BOOMR.debug("Setting cookie (timer="+t+")\n"+BOOMR.utils.objectToString(r),"rt"),BOOMR.utils.setCookie(this.cookie,r,this.cookie_exp)?(n=(new Date).getTime(),n-i>50&&(BOOMR.utils.removeCookie(this.cookie),BOOMR.error("took more than 50ms to set cookie... aborting: "+i+" -> "+n,"rt")),!0):(BOOMR.error("cannot set start cookie","rt"),!1)},initFromCookie:function(){var e,t;t=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)),t&&(t.s=Math.max(+t.ul||0,+t.cl||0),BOOMR.debug("Read from cookie "+BOOMR.utils.objectToString(t),"rt"),t.s&&(t.r||t.nu)&&(this.r=t.r,e=BOOMR.utils.hashQueryString(n.URL,!0),BOOMR.debug(this.r+" =?= "+this.r2,"rt"),BOOMR.debug(t.s+" <? "+(+t.cl+15),"rt"),BOOMR.debug(t.nu+" =?= "+e,"rt"),!this.strict_referrer||t.nu&&t.nu===e&&t.s<+t.cl+15||t.s===+t.ul&&this.r===this.r2?(this.t_start=t.s,+t.hd>t.s&&(this.t_fb_approx=parseInt(t.hd,10))):this.t_start=this.t_fb_approx=void 0),this.updateCookie({s:void 0,r:void 0,nu:void 0,ul:void 0,cl:void 0,hd:void 0}))},getBoomerangTimings:function(){var e,t,n,i;BOOMR.t_start&&(BOOMR.plugins.RT.startTimer("boomerang",BOOMR.t_start),BOOMR.plugins.RT.endTimer("boomerang",BOOMR.t_end),BOOMR.plugins.RT.endTimer("boomr_fb",BOOMR.t_start),BOOMR.t_lstart&&(BOOMR.plugins.RT.endTimer("boomr_ld",BOOMR.t_lstart),BOOMR.plugins.RT.setTimer("boomr_lat",BOOMR.t_start-BOOMR.t_lstart)));try{if(window.performance&&window.performance.getEntriesByName){n={"rt.bmr.":BOOMR.url};for(i in n)if(n.hasOwnProperty(i)&&n[i]){if(e=window.performance.getEntriesByName(n[i]),!e||0===e.length)continue;e=e[0];for(t in e)e.hasOwnProperty(t)&&t.match(/(Start|End)$/)&&e[t]>0&&BOOMR.addVar(i+t.replace(/^(...).*(St|En).*$/,"$1$2"),e[t])}}}catch(r){BOOMR.addError(r,"rt.getBoomerangTimings")}},checkPreRender:function(){return n.visibilityState&&"prerender"===n.visibilityState||n.msVisibilityState&&3===n.msVisibilityState?(BOOMR.plugins.RT.startTimer("t_load",this.navigationStart),BOOMR.plugins.RT.endTimer("t_load"),BOOMR.plugins.RT.startTimer("t_prerender",this.navigationStart),BOOMR.plugins.RT.startTimer("t_postrender"),BOOMR.subscribe("visibility_changed",BOOMR.plugins.RT.done,"visible",BOOMR.plugins.RT),!0):!1},initFromNavTiming:function(){var t,n,i;this.navigationStart||(n=e.performance||e.msPerformance||e.webkitPerformance||e.mozPerformance,n&&n.navigation&&(this.navigationType=n.navigation.type),n&&n.timing?t=n.timing:e.chrome&&e.chrome.csi&&e.chrome.csi().startE?(t={navigationStart:e.chrome.csi().startE},i="csi"):e.gtbExternal&&e.gtbExternal.startE()&&(t={navigationStart:e.gtbExternal.startE()},i="gtb"),t?(BOOMR.addVar("rt.start",i||"navigation"),this.navigationStart=t.navigationStart||t.fetchStart||void 0,this.responseStart=t.responseStart||void 0,navigator.userAgent.match(/Firefox\/[78]\./)&&(this.navigationStart=t.unloadEventStart||t.fetchStart||void 0)):BOOMR.warn("This browser doesn't support the WebTiming API","rt"))},setPageLoadTimers:function(e){return t.initFromCookie(),t.initFromNavTiming(),t.checkPreRender()?!1:(t.responseStart?(BOOMR.plugins.RT.endTimer("t_resp",t.responseStart),t.timers.t_load?BOOMR.plugins.RT.setTimer("t_page",t.timers.t_load.end-t.responseStart):BOOMR.plugins.RT.setTimer("t_page",e-t.responseStart)):t.timers.hasOwnProperty("t_page")?BOOMR.plugins.RT.endTimer("t_page"):t.t_fb_approx&&(BOOMR.plugins.RT.endTimer("t_resp",t.t_fb_approx),BOOMR.plugins.RT.setTimer("t_page",e-t.t_fb_approx)),t.timers.hasOwnProperty("t_postrender")&&(BOOMR.plugins.RT.endTimer("t_postrender"),BOOMR.plugins.RT.endTimer("t_prerender")),!0)},setSupportingTimestamps:function(e){BOOMR.addVar("rt.tstart",e),"number"==typeof t.t_start&&t.t_start!==e&&BOOMR.addVar("rt.cstart",t.t_start),BOOMR.addVar("rt.bstart",BOOMR.t_start),BOOMR.t_lstart&&BOOMR.addVar("rt.blstart",BOOMR.t_lstart),BOOMR.addVar("rt.end",t.timers.t_done.end)},determineTStart:function(e,n){var i;return"xhr"===e&&n&&t.timers[n]?(i=t.timers[n].start,BOOMR.addVar("rt.start","manual")):t.navigationStart?i=t.navigationStart:t.t_start&&2!==t.navigationType?(i=t.t_start,BOOMR.addVar("rt.start","cookie")):t.cached_t_start?i=t.cached_t_start:(BOOMR.addVar("rt.start","none"),i=void 0),BOOMR.debug("Got start time: "+i,"rt"),t.cached_t_start=i,i},page_ready:function(){this.onloadfired=!0},visibility_changed:function(){n.hidden||n.msHidden||n.webkitHidden||(t.visiblefired=!0)},page_unload:function(e){BOOMR.debug("Unload called with "+BOOMR.utils.objectToString(e)+" when unloadfired = "+this.unloadfired,"rt"),this.unloadfired||BOOMR.plugins.RT.done(e,"unload"),this.updateCookie({r:n.URL},"beforeunload"===e.type?"ul":"hd"),this.unloadfired=!0},_iterable_click:function(e,t,n,i){var r;if(n){for(BOOMR.debug(e+" called with "+n.nodeName,"rt");n&&n.nodeName.toUpperCase()!==t;)n=n.parentNode;n&&n.nodeName.toUpperCase()===t&&(BOOMR.debug("passing through","rt"),r=i(n),this.updateCookie({nu:r},"cl"),BOOMR.addVar("nu",BOOMR.utils.cleanupURL(r)))}},onclick:function(e){t._iterable_click("Click","A",e,function(e){return e.href})},onsubmit:function(e){t._iterable_click("Submit","FORM",e,function(e){var t=e.action||n.URL;return t.match(/\?/)?t:t+"?"})},domloaded:function(){BOOMR.plugins.RT.endTimer("t_domloaded")}},BOOMR.plugins.RT={init:function(i){return BOOMR.debug("init RT","rt"),e!==BOOMR.window&&(e=BOOMR.window,n=e.document),BOOMR.utils.pluginConfig(t,i,"RT",["cookie","cookie_exp","strict_referrer"]),t.r=t.r2=BOOMR.utils.hashQueryString(n.referrer,!0),t.initFromCookie(),t.getBoomerangTimings(),t.initialized?this:(t.complete=!1,t.timers={},BOOMR.subscribe("page_ready",t.page_ready,null,t),t.visiblefired=!(n.hidden||n.msHidden||n.webkitHidden),t.visiblefired||BOOMR.subscribe("visibility_changed",t.visibility_changed,null,t),BOOMR.subscribe("page_ready",this.done,"load",this),BOOMR.subscribe("xhr_load",this.done,"xhr",this),BOOMR.subscribe("dom_loaded",t.domloaded,null,t),BOOMR.subscribe("page_unload",t.page_unload,null,t),BOOMR.subscribe("click",t.onclick,null,t),BOOMR.subscribe("form_submit",t.onsubmit,null,t),BOOMR.subscribe("before_beacon",this.addTimersToBeacon,"beacon",this),t.initialized=!0,this)},startTimer:function(e,n){return e&&("t_page"===e&&this.endTimer("t_resp",n),t.timers[e]={start:"number"==typeof n?n:(new Date).getTime()}),this},endTimer:function(e,n){return e&&(t.timers[e]=t.timers[e]||{},void 0===t.timers[e].end&&(t.timers[e].end="number"==typeof n?n:(new Date).getTime())),this},setTimer:function(e,n){return e&&(t.timers[e]={delta:n}),this},addTimersToBeacon:function(e,n){var i,r,o=[];for(i in t.timers)if(t.timers.hasOwnProperty(i)){if(r=t.timers[i],"number"!=typeof r.delta&&("number"!=typeof r.start&&(r.start=t.cached_t_start),r.delta=r.end-r.start),isNaN(r.delta))continue;t.basic_timers.hasOwnProperty(i)?BOOMR.addVar(i,r.delta):o.push(i+"|"+r.delta)}o.length&&BOOMR.addVar("t_other",o.join(",")),"beacon"===n&&(t.timers={},t.complete=!1)},done:function(e,n){BOOMR.debug("Called done with "+BOOMR.utils.objectToString(e)+", "+n,"rt");var i,r=(new Date).getTime(),o=!1;return t.complete=!1,"load"!==n&&"visible"!==n||t.setPageLoadTimers(r)?("xhr"===n&&e&&e.data&&(o=e.data.subresource),i=t.determineTStart(n,e?e.name:null),this.endTimer("t_done",r),BOOMR.removeVar("t_done","t_page","t_resp","t_postrender","t_prerender","t_load","t_other","r","r2","rt.tstart","rt.cstart","rt.bstart","rt.end","rt.subres","rt.abld"),t.setSupportingTimestamps(i),this.addTimersToBeacon(),"xhr"!==n&&(BOOMR.addVar("r",BOOMR.utils.cleanupURL(t.r)),t.r2!==t.r&&BOOMR.addVar("r2",BOOMR.utils.cleanupURL(t.r2))),o&&BOOMR.addVar("rt.subres",1),t.updateCookie(),"unload"===n&&(BOOMR.addVar("rt.quit",""),t.onloadfired||BOOMR.addVar("rt.abld",""),t.visiblefired||BOOMR.addVar("rt.ntvu","")),t.complete=!0,BOOMR.sendBeacon(),this):this},is_complete:function(){return t.complete}}}(window),function(){BOOMR&&(BOOMR.debug=function(){},BOOMR.info=function(){})}(),BOOMR.init({beacon_url:"//boomerang.digitalriverws.com/log",user_ip:BOOMR.utils.getCookie("VISITOR_ID")}),BOOMR.t_end=(new Date).getTime();