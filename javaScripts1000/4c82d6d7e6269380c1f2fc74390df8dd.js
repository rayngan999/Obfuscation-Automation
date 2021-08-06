!function(){var e=[,function(){window.spotjs||(window.spotjs=function(){var e={version:"1.6.0 RTP API EDP13",apiAuth:null,apiHost:null,apiSubmitRTPEvents:"/rtp/api/events",apiGetOffers:"/rtp/api/members/{id}/offers",apiGetContentTokens:"/rtp/api/members/{id}/content_tokens",apiGetDecisions:"/rtp/api/members/{id}/decisions",defaultCampaign:{ext_parent_id:"0",camp_id:"0",camp_name:"web",channel_type_name:"web"},offersHandler:"spotOffersHandler",contentTokensHandler:"spotContentTokensHandler",decisionsHandler:"spotDecisionsHandler",apiErrorHandler:"spotApiErrorHandler",eventType:"tag",eventSubtype:"tag",eventSource:"cdtag",dta:"device_token",uta:"user_token",sta:"session_token",dataLayerId:"spot_data",cookiePrefix:"spot_",sessionLength:1800,cookieMaxAge:5184e3,alwaysUpdateCookies:!0,logLevel:1,eventTypeAliases:{contentTokens:"content_token",content_tokens:"content_token",offers:"offer",experiences:"experience",decisions:"decision",offers:"offer"},tagParams:{spot_user:"spot_user",spot_ut:"spot_ut",spot_uta:"spot_uta",spot_camp_id:"spot_camp_id",spot_bu:"spot_bu",spot_locale:"spot_locale"},standardEventParamKeys:{subtype:"event_subtype",products:"items",product_items:"items",items:"items",business_unit:"business_unit"},userParamKeys:{business_unit:"business_unit",locale:"locale_code",locale_code:"locale_code"}};window.spot_config&&Object.assign(e,spot_config);var t={dt:null,ut:null,st:null,uta:e.uta,bu:null,locale_code:null,optin:null,dnt:null},n={name:"spotjs ".concat(e.version),config:e,user:t,dataLayer:null,processedEvents:[],sentEvents:[],pendingEvents:[]},s=function(){},a=s,o=s,r=s,i=s,c=function(){a=e.logLevel?console.log.bind(window.console):s,o=e.logLevel>=1?a:s,r=e.logLevel>=2?a:s,i=e.logLevel>=3?a:s},p=function(e,t){var n="",s=e.responseText||"(empty)",a="Please check your custom event parameters and server settings.";e.status?n=e.status>=500?"500 (Internal Server Error)":"".concat(e.status," ").concat(e.statusText):(n="0 (CORS preflight check)",a="This happens when the API server is not configured to\n    return an Access-Control-Allow-Origin response header for this\n    website domain. This must be fixed in your server configuration."),o("spotjs received an API error\n\n    Request URL: ".concat(t,"\n\n    Response Status: ").concat(n,"\n\n    Response Body: ").concat(s,"\n\n    Notes: ").concat(a,"\n    More details can be found in your network tab and server logs.\n    Please contact support if this issue persists.\n    SpotJs is still running and other API calls may still work."))};c(),n.setLogLevel=function(t){-1!==[0,1,2,3].indexOf(t)&&(e.logLevel=t),c()},n.push=function(t,s){n.dataLayer.push({event:t||e.eventType,params:s})},n.report=function(){console.log("spotjs.config",n.config),console.log("spotjs.processedEvents",n.processedEvents)},n.identify=function(e){u(e)&&n.dataLayer.push({event:"identify",params:e})},n.signin=function(e){u(e)&&n.dataLayer.push({event:"signin",params:e})};var u=function(s){return"object"!=typeof s?(o("spotjs.setUser error - user object is required",s),!1):(s.uta=d(s.uta),s.ut=d(s.ut),L(s.uta,s.ut)?(s.ut=null,s.uta=e.uta,o("spotjs.setUser validation error - obviously sensitive info not allowed as identifier"),!1):s.ut?(i("spotjs.setUser applying user2 =",JSON.stringify(s)),Object.assign(n.user,s),i("spotjs.setUser user =",JSON.stringify(t)),!0):(o("spotjs.setUser did not receive a valid ut value"),s.uta=e.uta,!1))},d=function(e){return""===e||"null"===e||void 0===e||"undefined"===e?null:e},l=n.signout=function(n){t.ut=null,t.uta=e.uta;var s={cookieMaxAge:"0",expires:"Thu, 01 Jan 1970 00:00:01 GMT"};A("ut","",s),A("uta","",s),n&&(t.dt=null,t.st=null,t.dnt=null,A("st","",s),A("dt","",s),A("dnt","",s))},f=n.setOptin=function(e){t.optin=0===e?0:1,t.dnt=0===t.optin?1:0,A("dnt",t.dnt)},g=n.initDataLayer=function(t){if(!n.dataLayer||t){for(n.dataLayer=window[e.dataLayerId]=window[e.dataLayerId]||[];n.pendingEvents.length;)n.dataLayer.push(n.pendingEvents.shift());n.dataLayer.push=function(e){Array.prototype.push.call(n.dataLayer,e),v()}}},v=function(){if(i("spotjs.processDataLayer dataLayer =",JSON.stringify(n.dataLayer)),n.dataLayer)for(;n.dataLayer.length;){var e=n.dataLayer.shift();if(n.processedEvents.push("spot_data.push(".concat(JSON.stringify(e),")")),i("spotjs.processDataLayer data =",JSON.stringify(e)),"object"==typeof e){e.config&&"object"==typeof e.config&&(i("spotjs.processDataLayer setting config",e.config),y(e.config));var t=h();t?(o("spotjs.processDataLayer error - exiting due to invalid config:",t),n.pendingEvents.push(e)):!1!==m(e.before,e)?(e.event&&_(e),m(e.after,e)):m(e.cancel,e)}else i("spotjs.processDataLayer skipping non-object item",e)}},m=function(e,t){if(i("spotjs.sandboxFunction",e,t),e){if("function"!=typeof window[e])return o("spotjs.sandboxFunction error - function",e,"is not a function"),null;try{return window[e](t)}catch(t){o("spotjs.sandboxFunction error - function",e," exception",t)}}return null},y=n.setConfig=function(t){"object"!=typeof t&&o("spotjs.setConfig error - config object is required"),Object.assign(e,t),i("spotjs.setConfig config2 =",t),Object.assign(e,t),i("spotjs.setConfig config =",e);var s=h();if(s)o("spotjs.setConfig error - invalid config:",s);else for(c();n.pendingEvents.length;)n.dataLayer.push(n.pendingEvents.shift())},h=function(){return e.apiHost?!e.apiAuth&&"error: apiAuth is required":"error: apiHost is required"},_=function(n){if((n=n||{}).event){"object"!=typeof n.params&&(n.params={}),b(n),w(n);for(var s=0,a=Object.keys(e.userParamKeys);s<a.length;s++){var o=a[s];void 0!==n.params[o]&&(t[e.userParamKeys[o]]=n.params[o])}var c=n.update_attributes||{};c.locale_code&&(t.locale_code=c.locale_code),i("spotjs.processEvent data =",n);var p=new Date,u={event_type:n.event,event_subtype:e.eventSubtype,event_ts:p.toISOString()};try{u.local_tz=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){u.local_tz=""}for(var d=j(n),l=0,f=Object.keys(d);l<f.length;l++){var g=f[l];u[g]=d[g]}u.source=e.eventSource,u.identifier={id:t.ut,id_field:t.uta||e.uta},u[e.dta]=t.dt,u[e.sta]=t.st;for(var v=["ut","uta","dt","sta"],m={},y=0,h=Object.keys(n.params);y<h.length;y++){var _=h[y],k=H(u.event_type,_,n.params[_]);-1===v.indexOf(_)&&(void 0!==e.standardEventParamKeys[_]?(u[e.standardEventParamKeys[_]]=k,m[_]=k):m[_]=k)}Object.keys(m).length&&(u.params_json=m),u.identifier.id&&!L(u.identifier.id_field,u.identifier.id)||(u.identifier.id=t.dt,u.identifier.id_field=e.dta,e.setVisitor&&(c.visitor=!0)),Object.keys(c).length&&(u.update_attributes=c),i("spotjs.processEvent",u.event_type," evt=",u),!1===n.send?r("spotjs.processEvent exiting - do not send"):x(u),"function"==typeof n.getContentFn&&n.getContentFn(n)}},x=function(s){var a=e.apiSubmitRTPEvents,c="".concat(s.event_type,"-").concat(n.sentEvents.length),u="".concat(e.apiHost+a,"?evtId=").concat(c),d=new XMLHttpRequest;i("spotjs.sendEvent evtId =",c," evt =",s);var l={id:c,evt:s,xhr:d,responseText:""};n.sentEvents.push(l),d.open("POST",u,!0),d.setRequestHeader("Content-Type","application/json"),d.setRequestHeader("Accept","application/vnd.stellar-v1+json"),d.setRequestHeader("Authorization",e.apiAuth),t.business_unit&&d.setRequestHeader("SL-Business-Unit",t.business_unit),t.locale_code&&d.setRequestHeader("Accept-Language",t.locale_code),d.addEventListener("readystatechange",(function(){if(4===this.readyState)return 200!==this.status?(p(this,u),!1):(l.responseText=this.responseText||"",r("spotjs.sendEvent",c,"completed =",l.responseText),!0)}));var f=JSON.stringify(s);r("spotjs.sendEvent",c,"sending =",f);try{d.send(f)}catch(e){o("spotjs.sendEvent received API error",e)}},b=function(n){if(n.event)switch(n.send=1!==t.dnt,n.getContentFn=null,n.event=e.eventTypeAliases[n.event]||n.event,n.event){case"identify":u(n.params)||(o("spotjs identify did not receive valid user",n.params),n.send=!1);break;case"signin":u(n.params)?(f(1),n.send=!0):(o("spotjs identify did not receive valid user",n.params),n.send=!1);break;case"signout":l();break;case"optin":f(1),n.send=!0;break;case"optout":f(0);break;case"reset":l(!0),n.send=!1;break;case"content_token":n.getContentFn=P,n.send=!0;break;case"offer":n.getContentFn=S,n.send=!0;break;case"decision":n.getContentFn=C,n.send=!0;break;case"experience":T(n)}},j=function(t){for(var n=t.campaign||{},s=0,a=Object.keys(e.defaultCampaign);s<a.length;s++){var o=a[s];if(!n[o]){var r=O(o);n[o]=r||e.defaultCampaign[o]}}return n},w=function(n){k("dt","{uuidv4}",n.params),k("ut",null,n.params),n.params.uta&&!n.params.ut&&delete n.params.uta,k("uta",t.uta||e.uta,n.params),k("st","{uuidv4}",n.params,{cookieMaxAge:e.sessionLength}),k("dnt",null,n.params),t.dnt=1===t.dnt||"1"===t.dnt?1:0},k=function(n,s,a,o){var r=E(n);a[n]?t[n]=a[n]:r&&(t[n]=r),t[n]||("{uuidv4}"===s?t[n]=N():null!==s&&(t[n]=s)),(t[n]!==r||e.alwaysUpdateCookies)&&A(n,t[n],o)},E=function(t){var n=document.cookie.match("(^|;) ?".concat(e.cookiePrefix).concat(t,"=([^;]*)(;|$)")),s=n?n[2]:null;return""!==s&&"null"!==s&&"redacted"!==s||(s=null),s},A=function(t,n,s){if(null!=n){(s=s||{}).cookieMaxAge=s.cookieMaxAge||e.cookieMaxAge;var a=s.expires?"".concat(s.expires,";"):"";L(t,n)&&(n="redacted");var o="".concat(e.cookiePrefix+t,"=").concat(n,"; SameSite=None; Secure=true; Max-Age=").concat(s.cookieMaxAge,"; ").concat(a," Path=/;");i("spotjs.setCookie c=",o),document.cookie=o}},L=function(e,t){return!("email"!==e&&!/^.+@.+\..+$/.test(t))&&"email"},H=function(e,t,n){if(L(t,n))return"redacted";switch(n){case"{url}":case"{referrer}":return document.location.href;case"{useragent}":return navigator.userAgent;case"{timestamp}":return(new Date).toISOString();default:return n}},O=function(e,t){var n=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var s=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(n);if(!s)return null;if(!s[2])return"";var a=decodeURIComponent(s[2].replace(/\+/g," "));if(a&&"base64json"===t)try{0!==a.indexOf("{")&&(a=atob(a)),a=M(a)}catch(n){o("spotjs.getParam could not parse querystring param = ",e," as",t)}return a},T=function(e){if(!e.ngx_payload)return o("spotjs.processExperience did not find ngx_payload"),!1;var t=e.ngx_payload;return e.params.ut=t.ut||t.id,e.params.subtype=t.subtype||"exp",e.params.ngx_payload=t,e.campaign=t.campaign||e.campaign||{},e.campaign.camp_id=t.camp_id||"0",e.campaign.camp_name=t.camp_name||"exp",e.campaign.channel_type_name=t.channel_type_name||"exp",!0},P=function(t){i("spotjs.getContentTokens",t);var n=t.params=t.params||{},s=e.apiGetContentTokens,a=t.handler||t.processContentToken||e.contentTokensHandler;q(t,n,"GET",s,a)},S=function(t){i("spotjs.getOffers",t);var n=t.params=t.params||{};n.per_page=n.per_page||n.limit||1,n.layout=n.layout||"medium_rectangle",n.html=0!==n.html;var s=e.apiGetOffers,a=t.handler||t.processOffer||e.offersHandler;q(t,n,"GET",s,a)},C=function(t){i("spotjs.getDecisions",t);var n=t.params=t.params||{};if(!n.decision)return o("spotjs.getDecisions params.decision is required"),!1;var s=e.apiGetDecisions.replace("{decision}",n.decision),a=t.handler||t.processDecision||e.decisionsHandler;q(t,n,"PUT",s,a)},q=function(n,a,c,u,d){if(t.ut||t.dt){var l=e.apiHost+u.replace("{id}",t.ut||t.dt)+D(a),f=new XMLHttpRequest;f.open(c,l,!0),f.setRequestHeader("Accept","application/vnd.stellar-v1+json"),f.setRequestHeader("Authorization",e.apiAuth),t.business_unit&&f.setRequestHeader("SL-Business-Unit",t.business_unit),t.locale_code&&f.setRequestHeader("Accept-Language",t.locale_code),f.addEventListener("readystatechange",(function(){if(4===this.readyState){if(200!==this.status)return g("api status is not success (200)",this);if(!this.response)return g("api response is empty",this);i("spotjs.contentApi",this.responseText);var e=M(this.response);if(!e)return g("api response is not valid JSON",this);if(!0!==e.success)return g("api response does not include success=true",this);r("spotjs.contentApi calling sandbox function",d,n,e);var t=m(d,e);return i("spotjs.contentApi sandbox result=",t),t}})),r("spotjs.contentApi",l);try{f.send()}catch(e){o("spotjs.contentApi received API error",e)}}else o("spotjs.contentApi requires a user");function g(t,a){p(this,l);var o={success:!1,errorMessage:t,xhr:a,data:null},r=n.apiErrorHandler||e.apiErrorHandler||s;return m(r,o)}},D=function(e){return"object"!=typeof e||!Object.keys(e).length>0?"":"?".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&"))},R=(n.spotContentTokensHandler=window.spotContentTokensHandler=function(e){if(i("spotjs.contentTokensHandler response=",e),e&&!0===e.success&&e.data)for(var t=0,n=Object.keys(e.data);t<n.length;t++){var s=n[t],a=e.data[s];if(!a||!a.variable)return;for(var o=document.getElementsByClassName(a.variable),r=0,c=0|o.length;r<c;r=r+1|0)R(a,o[r])}},function(e,t){"function"==typeof t.fadeOut&&t.fadeOut("slow"),t.getAttribute("data-format")&&"integer"===t.getAttribute("data-format")&&(e.value=parseInt(e.value)),e.apply_to?t.setAttribute(e.apply_to,e.value):t.innerHTML=e.value,"function"==typeof t.fadeIn&&t.fadeIn("slow")}),I=(n.spotOffersHandler=window.spotOffersHandler=function(e){if(r("spotjs.spotOffersHandler response=",e),e&&!0===e.success&&e.data&&e.data.offers)for(var t=0;t<e.data.offers.length;t++){var n=e.data.offers[t];n&&(n.url&&-1!==n.url.indexOf("/embed/")?I("ngxEmbed",n.url):n.html&&U(n.html))}},function(e,t,n){n=n||"script"((function(e,t,n,s,a){e[s]=e[s]||[];var o=t.getElementsByTagName(n)[0],r=t.createElement(n);r.async=!0,r.src=a,o.parentNode.insertBefore(r,o)}))(window,document,n,e,t)}),U=(n.spotDecisionsHandler=window.spotDecisionsHandler=function(e){r("spotjs.spotDecisionsHandler response=",e)},n.spotApiErrorHandler=window.spotApiErrorHandler=function(e,t,n){o("spotjs.spotApiErrorHandler",e,t,n)},function(e){try{i("spotjs.showDialog","showing dialog");var t=document.getElementsByTagName("body")[0],n=document.createElement("div"),s="max-width:".concat(400,"px; position:absolute; top:").concat(window.scrollY-200,"px; left:").concat((window.innerWidth-400)/2,"px; background-color:white; border: 4px solid white; padding: 4px;");n.setAttribute("id","spot_dialog"),n.setAttribute("style",s),n.innerHTML='<div style="text-align:right"><button id="spot_dialog_close">X</button></div>'+e,t.appendChild(n),document.querySelector("#spot_dialog_close").addEventListener("click",(function(){i("spotjs.showDialog","closing dialog"),n.remove()}))}catch(e){o("spotjs.showDialog",e)}}),M=function(e){try{return JSON.parse(e)}catch(t){o("spotjs.parseJSON could not parse input",e,t)}return""},N=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))};return c(),n.instance=N(),J=null,F=null,void 0!==window[e.tagParams.spot_user]&&(F=window[e.tagParams.spot_user],i("spotjs.detectUser found spot_user variable = ",F)),F||(J=O(e.tagParams.spot_user,"base64json"))&&i("spotjs.detectUser found spot_user querystring param = ",F=J),F||(J=O(e.tagParams.spot_ut))&&(F={ut:J,uta:O(e.tagParams.spot_uta)||e.uta},i("spotjs.detectUser found spot_ut querystring param = ",F)),F&&"object"==typeof F&&(F.uta||(F.uta=e.uta),r("spotjs.detectUser user2 = ",F),u(F)&&n.pendingEvents.push({event:"identify",params:F})),(J=O(e.tagParams.spot_bu))&&(t.business_unit=J),(J=O(e.tagParams.spot_locale))&&(t.locale_code=J),g(),v(),r(n.name,"ready",n.instance),n;var J,F}())}],t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n(1)}();