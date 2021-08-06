/*! Onsite Tag, version: "2.4.16" */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);const o={PUBLISHER:"Publisher",NMC:"NMC"},r={COOKIE:"Cookie",LOCAL_STORAGE:"LS",GLOBAL_OBJ_PATH:"GOP"},i=2,a=0,s=1,c={DEFAULT_MANAGED_BY:o.NMC,DEFAULT_PPID_STORAGE_KEY:"nmcPPID",DEFAULT_PPID_TTL_DAYS:60,OPT_OUT_STORAGE_KEY:"nmcPpidOptout"},l={OPT_OUT:"ppidOptout",OPT_IN:"ppidOptin"},d=1,u=2,p=1,R=2,E={GENERAL_ERROR:"GENERAL_ERROR",CYCLIC_REFERENCE_ERROR:"CYCLIC_REFERENCE_ERROR",OPT_OUT_ERROR:"OPT_OUT_ERROR",BROWSER_PREFERENCES_ERROR:"BROWSER_PREFERENCES_ERROR",BUILD_AND_FIRE_ERROR:"BUILD_AND_FIRE_ERROR",CONSENT_ERROR:"CONSENT_ERROR",EXPRESSO_ERROR:"EXPRESSO_ERROR",INTEGRATION_ERROR:"INTEGRATION_ERROR",PPID_ERROR:"PPID_ERROR",SCHEMA_ORG_ERROR:"SCHEMA_ORG_ERROR",TOKENIZE_UNEXPECTED_ERROR:"TOKENIZE_UNEXPECTED_ERROR",UNREACHABLE_ERROR:"UNREACHABLE_ERROR",MAX_PARAMS_EXCEEDED_ERROR:"MAX_PARAMS_EXCEEDED_ERROR"},f=[E.GENERAL_ERROR,E.BUILD_AND_FIRE_ERROR,E.MAX_PARAMS_EXCEEDED_ERROR,E.OPT_OUT_ERROR,E.PPID_ERROR,E.SCHEMA_ORG_ERROR,E.TOKENIZE_UNEXPECTED_ERROR,E.UNREACHABLE_ERROR];var O="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),g=new Uint8Array(16);function w(){if(!O)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(g)}for(var m=[],_=0;_<256;++_)m[_]=(_+256).toString(16).substr(1);var y=function(e,t){var n=t||0,o=m;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")};var h=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||w)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var i=0;i<16;++i)t[o+i]=r[i];return t||y(r)};const T=()=>(q(k.info,"protocol is https:"),"https:"),b=()=>te("domain")?(q(k.info,`domain is ${window.xl8_config.domain}`),window.xl8_config.domain):"mydmp.exelator.com",C=(e,t,n)=>{let o=n?e:encodeURIComponent(e);return o+="="+encodeURIComponent(t)},N=(e,t,n,o)=>{const r=new XMLHttpRequest;return r.withCredentials=!0,r.onreadystatechange=()=>o(r),r.open(t,e),q(k.info,`Fired tag with url: ${e} and params: ${n} using ${t} method`),r},P=(e,t,n)=>{if(!navigator.cookieEnabled)return B("The browser does not support or is blocking cookies from being set",E.BROWSER_PREFERENCES_ERROR),!1;if(!e||!t)return B("Cookie key or value was not provided",E.INTEGRATION_ERROR),!1;let o;if(n){const e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),o="; expires="+e.toUTCString()}else o="";return document.cookie=e+"="+t+o+"; path=/",!0};function A(e){if(document.cookie.length>0){const t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}return null}function S(e,t,n){!function(e){null!==A(e)&&(document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT")}(e),P(e,t,n)}const I=(e,t)=>{if(!e||!t)return B("Local Storage key or value was not provided",E.INTEGRATION_ERROR),!1;try{window.localStorage.setItem(e,t)}catch(e){return B(`Failed to add data to the Local Storage. error=${e.message}`,E.BROWSER_PREFERENCES_ERROR),!1}return!0},v=e=>e?window.localStorage.getItem(e):(B("Local Storage key was not provided",E.INTEGRATION_ERROR),null),D=e=>e?(window.localStorage.removeItem(e),!0):(B("Local Storage key was not provided",E.INTEGRATION_ERROR),!1);const L=()=>{if(null===window.localStorage)return!1;try{const e="lsTest123";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}};function x(){if(L()){if(v(c.OPT_OUT_STORAGE_KEY))return e=c.OPT_OUT_STORAGE_KEY,t=!0,D(e),I(e,t),!0}var e,t;return!1}const j=(e,t=c.DEFAULT_PPID_STORAGE_KEY)=>{let n;if(M(e),!(n=e===r.COOKIE?A(t):v(t)))throw new Error("The ppid is missing");return n};function M(e){if(!e)throw new Error("ppidStorageType configuration key is missing")}const G=()=>{const{p:e,g:t,ppidCollectionEnabled:n,ppidStorageType:o,ppidStorageKey:r}=window.xl8_config;if(!n)return q("info","PPID collection is disabled. Opt Out rejected"),!1;try{return M(o),L()?I(c.OPT_OUT_STORAGE_KEY,!0):B("OptOut: Local Storage is not supported/allowed!",E.BROWSER_PREFERENCES_ERROR),function(e){const t=new XMLHttpRequest;t.withCredentials=!0,t.onreadystatechange=()=>{t.readyState===XMLHttpRequest.DONE&&(200!==t.status&&B("There was a problem with the opt out request",E.OPT_OUT_ERROR),200===t.status&&q(k.info,"OptOut: Opt Out details sent successfully!"))},t.open("GET",e),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),q(k.info,`OptOut: firing opt out with link: ${e}`),t.send()}(((e,t,n)=>`${T()}//${b()}/optout/publishers?p=${e}&g=${t}&xl8ppid=${n}`)(e,t,j(o,r))),!0}catch(e){return B(`OptOut: Failed to Opt Out. error = ${e.message}`,E.OPT_OUT_ERROR),!1}};let $=[],U={},F=!1;const k={info:"info",error:"error",analytic:"analytic"},B=(e,t=E.GENERAL_ERROR)=>{const n={[t]:e};ee()&&console.error(`${k.error}: ${e}`),H(n)},q=(e,t,n)=>{ee()&&console.log(e+": "+t),e===k.analytic&&re(n)&&K(n)},H=e=>{$.push(e)},K=e=>{U={...U,...e}},X=()=>{if(performance.getEntries){const e=performance.getEntries().filter(e=>e.name.includes("cdn.exelator"));return e.length?Math.round(e[0].duration):null}},Y=()=>$.filter(e=>f.includes(Object.keys(e)[0])),z=()=>$.filter(e=>e[E.INTEGRATION_ERROR]),J=()=>{const e=Z();let t;if(window.xl8_config.ppidCollectionEnabled)try{t=j(window.xl8_config.ppidStorageType,window.xl8_config.ppidStorageKey)}catch(e){B(`Unable to get PPID while building log: ${e.message}`,E.PPID_ERROR)}const n=(()=>Object.assign({},...$))(),o=X(),r=(()=>U.requestStart&&U.requestEnd?Math.round(U.requestEnd-U.requestStart):null)(),i=(()=>{const e=X(),t=U.requestEnd?U.requestEnd-U.tagRunTimeStart:null;return e&&t?e+t:null})();return{onsiteTagVersion:"2.4.16",usingBeaconAPI:"sendBeacon"in navigator,href:window.location.href,cookieEnabled:navigator.cookieEnabled,userAgent:navigator.userAgent,tagConfig:window.xl8_config,errors:$,errorsCount:$.length,rndErrorsCount:Y().length,solutionsErrorsCount:z().length,explicitErrors:n,analytics:{...U,...i&&{overallRunTime:i},...o&&{cdnDownloadTime:o},...r&&{expressoRequestTime:r}},..."boolean"==typeof e&&{doNotTrack:e},...t&&{PPID:t}}},W=()=>{if(!F){F=!0;const e=J();navigator.sendBeacon("https://onsite-tag-logs.apps.nielsen.com/log",JSON.stringify(e,ae))}},V=()=>{if(!F){F=!0;const e=J(),t=new XMLHttpRequest;t.open("POST","https://onsite-tag-logs.apps.nielsen.com/log"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(e,ae))}},Z=()=>window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack?!("1"!==window.doNotTrack&&"yes"!==navigator.doNotTrack&&"1"!==navigator.doNotTrack&&"1"!==navigator.msDoNotTrack):null,Q=()=>{window.addEventListener?(window.addEventListener("beforeunload",W,!1),q(k.info,"added unload listener")):window.attachEvent&&(window.attachEvent("onbeforeunload",W),q(k.info,"added unload listener"))},ee=()=>te("dbg")&&"smtdn9"===window.xl8_config.dbg,te=e=>{try{return void 0!==window.xl8_config[e]&&null!==window.xl8_config[e]}catch(e){return!1}},ne=e=>{let t=!1;return e.forEach(e=>{"object"==typeof e&&(t=!0)}),t},oe=(e,t,n,o)=>{let r=!1;const i=setTimeout(()=>{r=!0,q(k.analytic,"setTimeout was executed when waiting for execution"),o({error:new Error("Exceeded Threshold"),code:p})},t);e((e,t)=>{if(i&&clearTimeout(i),!r)return r=!0,e?o({error:new Error(e),code:R}):n(t)})},re=e=>"object"==typeof e&&null!==e,ie=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent),ae=(e,t)=>{if(t instanceof Error){const e={};return Object.getOwnPropertyNames(t).forEach(n=>{e[n]=t[n]}),e}return t},se=e=>null==e,ce=e=>{try{JSON.stringify(e)}catch(e){if(e&&e.message&&(e.message.toLowerCase().indexOf("circular")>=0||e.message.toLowerCase().indexOf("cyclic")>=0))return!0}return!1};function le(e){return e===o.NMC}function de(e,t,n){if(e||le(t))return n===r.COOKIE?A(e):n===r.LOCAL_STORAGE?v(e):n===r.GLOBAL_OBJ_PATH?function(e){if(!e)return B("path was not provided",E.INTEGRATION_ERROR),null;const t=e.split(".");if(!t||0===t.length)return B("Invalid path was provided",E.INTEGRATION_ERROR),null;let n=window;for(let e=0;e<t.length;e++){const o=t[e];if("window"!==o){if(!Object.getOwnPropertyNames(n).includes(o))return B(`Invalid path was provided: missing ${o}`,E.INTEGRATION_ERROR),null;n=n[o]}}return n}(e):void B("ppidStorageType configuration is invalid. type = "+n,E.INTEGRATION_ERROR);B("The ppidStorageKey does not exist and managed by the publisher",E.INTEGRATION_ERROR)}function ue(e){e!==r.COOKIE&&(window.xl8_config.ppidStorageType=r.COOKIE,q(k.info,`Storage type updated from ${r.LOCAL_STORAGE} to ${r.COOKIE}`))}const pe=()=>{q(k.info,"starting conf flow");const{ppidCollectionEnabled:e,ppidManagedBy:t,ppidStorageType:n,ppidStorageKey:o,ppidTTL:l}=window.xl8_config;if(!e)return q(k.info,"PPID collection is disabled"),{};const d=t||c.DEFAULT_MANAGED_BY,u=l||c.DEFAULT_PPID_TTL_DAYS,p=function(e,t){return!e&&le(t)?c.DEFAULT_PPID_STORAGE_KEY:e}(o,d);!function(e,t){if(le(t)){if(e===r.GLOBAL_OBJ_PATH)throw new Error("ppidStorageType was set to GLOBAL_OBJ_PATH but the managedBy is NMC (should be Publisher)")}else{if(!e)throw new Error("ppidStorageType configuration is missing");if(e===r.LOCAL_STORAGE&&!L())throw new Error("Local Storage was set but not supported")}}(n,d);const R={};let f=de(o,d,n);try{if(f)le(d)&&(ue(n),q(k.info,`ppid found and manged by NMC, PPID is: ${f}`),S(p,f,u),q(k.info,"Cookie was touched successfully"));else{if(q(k.info,"ppid was not found"),!le(d))return B("Failed to get PPID",E.INTEGRATION_ERROR),R.xl8ppidstatus=i,R.xl8ppidsuccess=a,R;f=(()=>h().replace(/-/gi,""))(),P(c.DEFAULT_PPID_STORAGE_KEY,f,u),ue(n),q(k.info,`ppid manged by NMC, PPID generated to: ${f}`)}R.xl8ppid=f,R.xl8ppidsuccess=s,q(k.info,"Conf flow finished")}catch(e){R.xl8ppidsuccess=a,B(`There was a problem with the conf flow. Error = ${e.message}`,E.PPID_ERROR)}return R},Re={GDPR:{[p]:{xl8gdprStatus:d},[R]:{xl8gdprStatus:u}},CCPA:{[p]:{xl8ccpaStatus:d},[R]:{xl8ccpaStatus:u}}};function Ee(e,t){e.callbacksCount--,0===e.callbacksCount&&t(e.data)}function fe(e,t,n,o,r){oe(e,t,e=>(o.data={...o.data,...e},Ee(o,r)),e=>(q(k.analytic,e,{consentRejectionReason:e}),o.data={...o.data,...n[e.code]},Ee(o,r)))}function Oe(e){return void 0===e.gdprApplies?e.gdprApplies:!0===e.gdprApplies?1:0}function ge(e){if(e.tcString)return{gdpr_consent:e.tcString}}function we(e){try{"function"==typeof window.__tcfapi?function(e){const t=performance.now();window.__tcfapi("addEventListener",2,(n,o)=>{if(!o||"tcloaded"!==n.eventStatus&&"cmpuishown"!==n.eventStatus){e("Fetching consents from TCF Failed")}else q(k.analytic,"contacted tcf succsefully",{gdpr:"TCF",timeToConsent:Math.round(performance.now()-t)}),e(null,{gdpr:Oe(n),...ge(n)})})}(e):"function"==typeof window.__cmp?function(e){const t=performance.now();window.__cmp("getConsentData",null,(n,o)=>{if(o)q(k.analytic,"gdpr consent fetched",{gdpr:"CMP",timeToConsent:Math.round(performance.now()-t)}),e(null,{gdpr:Oe(n),gdpr_consent:n.consentData});else{e("Fetching consents from CMP Failed")}})}(e):e(null)}catch(t){e("Fetching consents for GDPR Failed",t)}}function me(e){try{"function"==typeof window.__uspapi?function(e){const t=performance.now();window.__uspapi("getUSPData",1,(n,o)=>{if(o)q(k.analytic,"ccpa consent given",{ccpa:"USP",timeToConsent:Math.round(performance.now()-t)}),e(null,{us_privacy:n.uspString});else{e("Fetching consents from USP Failed")}})}(e):e(null)}catch(t){e("Fetching consents from USP Failed",t)}}const _e=(e,t,n)=>{let o="|,";const r={};try{se(e)||e.forEach(e=>{if(Object.prototype.hasOwnProperty.call(e,"@type"))"PropertyValue"===e["@type"]&&(Object.prototype.hasOwnProperty.call(r,e.name)||(r[e.name]=[]),r[e.name].push(e.value));else{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o+=t+":"+e[t]+",");o+="|"}})}catch(e){B(`tokenizeObjectArray Failed to get array details. Error: ${e.message}`,E.TOKENIZE_UNEXPECTED_ERROR)}for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&(q(k.info,`found attribute ${e} with value ${r[e].join(",")}`),t[e]=r[e].join(","));o.length>2&&(q(k.info,`found attribute ${n} with value ${o}`),t[n]=o)},ye=(e,t,n,o,r=new WeakMap,i=0)=>{if(++i>10)return void q(k.analytic,"tokenizeDataObject data object hierarchy is too deep (might be cyclic dependency)",{maxDepthReached:!0});if(performance.now()-o>2500)B("tokenizeDataObject max time exceeded",E.TOKENIZE_UNEXPECTED_ERROR);else for(const a in e){if(Object.getOwnPropertyNames(t).length>=990||r.has(e[a]))return;if(Object.prototype.hasOwnProperty.call(e,a)){let s;s=void 0===n?a.replace(/ /g,"_"):n+"-"+a.replace(/ /g,"_"),Array.isArray(e[a])?ne(e[a])?_e(e[a],t,s):(q(k.info,`found attribute ${s} with value ${e[a].join()}`),t[s]=e[a].join()):re(e[a])?e[a]instanceof HTMLElement?q(k.info,`found HTML Element in ${s}, skipping`):r.has(e[a])?q(k.info,`found a recursive object in ${s}, not creating a recursion again`):(r.set(e[a]),ye(e[a],t,s,o,r,i)):"symbol"==typeof e[a]?q(k.info,`found invalid attribute ${s} which is a type of symbol. Skipping...`):"function"==typeof e[a]?q(k.info,"found attribute "+s+" which is a function. skipping... "):(q(k.info,`found attribute ${s} with value ${e[a]}`),t[s]=e[a])}}},he=(e,t)=>{q(k.analytic,"request timing start",{requestStart:Math.round(performance.now())}),ie()?((e,t,n)=>{q(k.analytic,"using GET request",{method:"GET",getRequestParamsLength:t.length}),N(e+"&"+t,"GET",null,n).send()})(e,t,Te):((e,t,n)=>{const o=N(e,"POST",t,n);o.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const r=t?t+"&xl8postbody=1":"xl8postbody=1";q(k.analytic,"using POST request",{method:"POST",postRequestParamsLength:t.length}),o.send(r)})(e,t,Te)},Te=e=>{e.readyState===XMLHttpRequest.DONE&&(q(k.analytic,"request timing end",{requestEnd:Math.round(performance.now())}),200===e.status?(q(k.info,"Tag fired successfully!"),be(e)):B(`There was a problem with the request, status: ${e.status}`,E.EXPRESSO_ERROR),"sendBeacon"in navigator?W():V())},be=e=>{const t=document.createElement("script");t.text=e.responseText,t.type="text/javascript",t.async=!0,document.body.appendChild(t)},Ce=(e=[],t=null,n=null)=>{const o=performance.now(),r={};se(t)||(se(t.classes)||t.classes.forEach(e=>{let t="";[...document.getElementsByClassName(e)].forEach(e=>{t+=e.textContent}),r[e]=t,q(k.info,`found class ${e} with value ${t}`)}),se(t.ids)||t.ids.forEach(e=>{const t=document.getElementById(e);null!==t&&(r[e]=t.textContent,q(k.info,`found id ${e} with value ${t.textContent}`))}),se(t.elements)||t.elements.forEach(e=>{let t="";[...document.getElementsByTagName(e)].forEach(e=>{t+=e.textContent}),r[e]=t,q(k.info,`found tag ${e} with value ${t}`)}),se(t.complex)||t.complex.forEach(t=>{let n=[];"class"===t.type?n=[...document.getElementsByClassName(t.selector)]:"id"===t.type?n=[document.getElementById(t.selector)]:"element"===t.type&&(n=[...document.getElementsByTagName(t.selector)]),n.forEach(n=>{Object.prototype.hasOwnProperty.call(t,"key")&&t.key.split("|").forEach(o=>{let i=n.getAttribute(o);if(null!==i)if("json"===t.valueType)try{window[o]=JSON.parse(i),e.push(o)}catch(e){B(`cssObjects error in valueType json: error parsing json object, ${e.message}`,E.INTEGRATION_ERROR)}else i=i.replace(/[^a-zA-Z0-9]/g,"_"),Object.prototype.hasOwnProperty.call(t,"value")?r[i]=n.getAttribute(t.value):r[i]=n.textContent,q(k.info,`found tag ${i} with value ${r[i]}`)})})}));try{if(e&&e.length){const t=performance.now(),n=t;e.forEach(e=>{const n=((e="dataLayer")=>{if(void 0!==window[e])return"object"!=typeof window[e]?{[e]:window[e]}:window[e];q(k.analytic,`${e} is undefined`,{dataObjectIsUndefined:!0,dataObjectName:e})})(e);ce(n)&&q(k.analytic,"buildAndFire: Cyclic reference found in data object.",{[E.CYCLIC_REFERENCE_ERROR]:!0}),ye(n,r,void 0,t)}),q(k.analytic,"base code timing - tokenizeDataObjects",{tokenizeDataObjectsTime:Math.round(performance.now()-n)})}}catch(e){B(`tokenizeDataObject failed. error: ${e.message}`,E.TOKENIZE_UNEXPECTED_ERROR)}q(k.analytic,"base code timing - buildParams",{buildParamsTime:Math.round(performance.now()-o)});const i=((e,t)=>{if(Object.getOwnPropertyNames(e).length<t)return e;B("adjustParamsToSizeLimit params exceeded max allowed size",E.MAX_PARAMS_EXCEEDED_ERROR);const n={},o=Object.getOwnPropertyNames(e);for(let r=0;r<o.length&&r<t;r++)n[o[r]]=e[o[r]];return n})({...r,...n},990);he(((e,t,n,o,r)=>{let i=n+"//"+o+"/on-site-tag-load/?p="+e+"&g="+t+"&j=d";return r&&(i+="&dbg=smtdn9"),i})(window.xl8_config.p,window.xl8_config.g,T(),b(),ee()),(e=>{const t=ie();let n="url="+encodeURIComponent(window.location.href);n+="&rurl="+encodeURIComponent(document.referrer),n+="&xl8onsiteVersion="+encodeURIComponent("2.4.16");for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n+="&"+C(o,e[o],t));return n})(i)),q(k.analytic,"base code timing - buildAndFire",{buildAndFireTime:Math.round(performance.now()-o)})},Ne=()=>{q(k.info,"starting schema.org flow");const e={};try{const t=JSON.parse((e=>{let t=null;return Array.prototype.forEach.call(e,e=>{"application/ld+json"===e.type&&(t=e)}),t})(document.getElementsByTagName("script")).text),n=performance.now(),o=n;ce(t)&&q(k.analytic,"handleSchemaOrg: Cyclic reference found in data object",{[E.CYCLIC_REFERENCE_ERROR]:!0}),ye(t,e,void 0,n),q(k.analytic,"base code timing - schemaOrgTokenizeDataObjects",{schemaOrgTokenizeDataObjectsTime:Math.round(performance.now()-o)})}catch(e){B(`handleSchemaOrg: Error: ${e.message}`,E.SCHEMA_ORG_ERROR)}Ce(null,null,e)},Pe=(e=null)=>{try{if(q(k.info,"starting data delivery flow"),te("p")&&te("g")){const t=(()=>{let e=[];return!0!==window.xl8_config.disableDataLayer&&(e=["dataLayer"]),te("dataObjects")&&(e=[...e,...window.xl8_config.dataObjects]),e})(),n=(()=>{const e={classes:[],ids:[],elements:[],complex:[]};return te("cssObjects")&&Array.isArray(window.xl8_config.cssObjects)&&window.xl8_config.cssObjects.forEach(t=>{try{"string"==typeof t?t.startsWith(".")?e.classes.push(t.substring(1)):t.startsWith("#")?e.ids.push(t.substring(1)):e.elements.push(t):"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"selector")&&(t.selector.startsWith(".")?e.complex.push({...t,selector:t.selector.substring(1),type:"class"}):t.selector.startsWith("#")?e.complex.push({...t,selector:t.selector.substring(1),type:"id"}):e.complex.push({...t,type:"element"}))}catch(e){B(`getCssObjectList Failed to get css object. Error: ${e.message}`,E.UNREACHABLE_ERROR)}}),e})(),o=e;!function(e){const t={data:{},callbacksCount:2};fe(me,100,Re.CCPA,t,e),fe(we,100,Re.GDPR,t,e)}(e=>{Ce(t,n,{...o,...e}),te("enableSchemaOrg")&&window.xl8_config.enableSchemaOrg&&Ne(),te("interval")&&setInterval(()=>{try{Ce(t,n,o)}catch(e){B(`There was a problem with the buildAndFire flow, ${e.message}`,E.BUILD_AND_FIRE_ERROR)}},window.xl8_config.interval)})}}catch(e){B(`There was a problem with the delivery flow: ${e.message}`,E.BUILD_AND_FIRE_ERROR)}},Ae=(e=null)=>{if(q(k.analytic,"tag run time start",{tagRunTimeStart:Math.round(performance.now())}),window.xl8_config){let t={};if(window.xl8_config.ppidCollectionEnabled){if(x())return void q(k.info,"1st party OptOut set to true. Not processing data");t=pe()}Pe({...e,...t})}else B("xl8_config does not exist on window object",E.INTEGRATION_ERROR)};q(k.info,"NMC init started"),window.nmc=(e=null)=>{if(null!==e){q(k.info,`NMC: operation = ${e}`);try{switch(e.toLowerCase()){case l.OPT_OUT.toLowerCase():return q(k.info,"NMC: Opt out started"),void G();case l.OPT_IN.toLowerCase():return void q(k.info,"NMC: Opt in is TBD");default:return void B("NMC: Unknown operation provided",E.INTEGRATION_ERROR)}}catch(e){B(`NMC: Operation Failed. error = ${e.message}`,E.UNREACHABLE_ERROR)}}else B("NMC: No operation provided",E.INTEGRATION_ERROR)},window.sendToNielsen=(e=null)=>Ae(e),"complete"!==document.readyState?window.addEventListener?(window.addEventListener("load",Ae,!1),q(k.info,"added onload listener")):window.attachEvent&&(window.attachEvent("onload",Ae),q(k.info,"added onload listener")):(Ae(),q(k.info,"load event already fired, running manually")),"sendBeacon"in navigator&&Q()}]);