!function(){var e=this&&this.__assign||Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e};try{!function(){var t="1.2.12",i=navigator.userAgent,o="https://d1lu3pmaz2ilpx.cloudfront.net/5a28e627",s=["3793ba0a-9959-467c-8593-748a62ae4c7e","61a30a9a-f9eb-47ca-a6dc-e5b25fa46ec7"],n={"cb8c1920-ce22-4107-8276-fd9343c3f4cb":"//cti.w55c.net/ct/dx_upx_0Dtzfr5VPZ.js","949105c7-1e6c-4a04-b7e3-53a89d9de730":"//cti.w55c.net/ct/dx_upx_0DiHEkAIIp.js"},r={Persist:"PERSIST",None:"NONE"},a={Tie:"_tie",Identify:"identify",Pageview:"pageview",SessionTie:"_s_tie"},c={pageview:!0,"page view":!0,"page-view":!0,page_view:!0},u={os:function(){return/Windows/i.test(i)?/Phone/.test(i)||/WPDesktop/.test(i)?"Windows Phone":"Windows":/(iPhone|iPad|iPod)/.test(i)?"iOS":/Android/.test(i)?"Android":/(BlackBerry|PlayBook|BB10)/i.test(i)?"BlackBerry":/Mac/i.test(i)?"Mac OS X":/Linux/.test(i)?"Linux":""},btoa:function(e){for(var t=String(e),i="",o=0,s=void 0,n=void 0,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.charAt(0|o)||o%1;i+=r.charAt(63&s>>8-o%1*8)){if(t.charAt(0|o)||(r="="),(n=t.charCodeAt(o+=.75))>255)return;s=s<<8|n}return i},isValidGuid:function(e){var t=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;return e&&t.test(e.trim())},warnIfInvalidToken:function(e){var t=u.isValidGuid(e);return t||console.error("Token is not a valid GUID"),t},isValidUserId:function(e){if(!e)return!1;var t=function(e){return e.toString().toLowerCase().trim()},i=["undefined","null","n/a","","none",{},0,1,NaN,!0,!1,"0","1"].map(t),o=t(e);return!(i.indexOf(o)>-1)}},h=function(){function i(e,i){this.sessionCookieTime=307584e6,this.userCookieTime=307584e6,this.sessionCookieName="tatari-session-cookie",this.sessionUrlParamName="tatari_session_id",this.sessionId="",this.userCookieName="tatari-user-cookie",this.userId="",this.version=t,this.util=u,this.debugCookieName="tatari-debug-cookie",this.debugCookieTime=864e5,this.debug=!1,this.ipCookieName="t-ip",this.ipCookieTime=3e5,this._i=e,this.url=o,this.cookieSupport=this.getCookieSupport(),this.config=i,this.checkDebugCookie(),this.checkSessionCookie(),this.checkUserCookie(),this.recordIpsIfNecessary(),this.checkThirdParty(),u.warnIfInvalidToken(e),this.debug&&(console.info("Debug: Tatari Tracker Lib Loaded",this),console.info("Debug: Tatari Tracker TLD",this.getDomain()))}return i.prototype.enableDebug=function(){this.createCookie(this.debugCookieName,"1",this.debugCookieTime),this.debug=!0,console.info("Debug: Tatari Tracker Debug Enabled")},i.prototype.init=function(e,t){this._i=e,this.config=t,u.warnIfInvalidToken(e)},i.prototype.flushCommandQueue=function(e){if(void 0===e&&(e=[]),e.length>0){var t=this;e.forEach(function(e){t[e[0]].apply(t,e.slice(1,e.length))})}},i.prototype.scrubParams=function(e){var t=this;if(this.config&&this.config.queryParamScrubs&&e){var i=document.createElement("a");i.setAttribute("href",e);var o=i.search;if(o){var s=[];o.substr(1).split("&").forEach(function(e){var i=decodeURIComponent(e.split("=")[0]);t.config.queryParamScrubs.some(function(e){return e===i})||s.push(e)});var n="?"+s.join("&");return e.replace(o,n)}}return e},i.prototype.scrubUrl=function(e){if(this.config&&this.config.urlScrubs&&e){var t=e;return this.config.urlScrubs.forEach(function(i){var o=i.test(e)&&RegExp.$1;o&&(t=e.replace(o,"TATARI-SCRUBBED"))}),t}return e},i.prototype.scrub=function(e){return this.config?this.scrubUrl(this.scrubParams(e)):e},i.prototype.getProperties=function(){return{$os:u.os(),$referrer:this.scrub(document.referrer),$currentUrl:this.scrub(window.location.href)}},i.prototype._track=function(t,i){void 0===i&&(i="");try{t!==a.Tie&&t!==a.SessionTie&&this.checkSessionCookie();var o=i;if("object"==typeof i)try{o=JSON.stringify(i)}catch(e){o="",console.warn("Tatari Tracker arg should be a valid JSON object")}o.length>65535&&(console.warn("Tatari Tracker arg should be smaller than 65535 characters, was "+o.length+"."),"object"==typeof i&&console.warn("Tatari Tracker arg size was the result of large JSON serialization."));var s=e({version:this.version,token:this._i,sessionId:this.sessionId,cookieSupport:this.cookieSupport,userId:this.userId,arg:o,event:t},this.getProperties());this.removeEmptyKeys(s);var n=this.buildReqUrl(s);this.debug&&console.info("Debug: Tatari Tracker Event Fired",s),this.sendRequest(n)}catch(e){console.warn("Tatari's tracking library encountered an error when attempting to track.",e)}},i.prototype.sendRequest=function(e){if(this._i){var t=new XMLHttpRequest;t.open("GET",e,!0),t.send(null)}else this.debug&&console.info("Debug: Tatari Tracker suppressing request with invalid token")},i.prototype.removeEmptyKeys=function(e){Object.keys(e).forEach(function(t){return(void 0===e[t]||null===e[t]||""===e[t])&&delete e[t]})},i.prototype.buildReqUrl=function(e,t){void 0===t&&(t=this.url);var i=this.buildDataBlob(e);return t+"?data="+encodeURIComponent(i)+"&date="+ +new Date},i.prototype.buildDataBlob=function(e){var t=Object.keys(e).map(function(t){var i=encodeURIComponent;return"object"==typeof e[t]&&(i=function(e){return encodeURIComponent(JSON.stringify(e))}),encodeURIComponent(t)+"="+i(e[t])}).join("&");return""+this.util.btoa(t)},i.prototype.pageview=function(){this._track(a.Pageview),window.ttm&&window.ttm.onPageview&&window.ttm.onPageview()},i.prototype.track=function(e,t){return e?"string"==typeof e&&c[e.toLowerCase()]?void console.warn("Supressing event "+e):(this._track("e_"+e.toString(),t),void(window.ttm&&window.ttm.onTrack&&window.ttm.onTrack(e.toString(),t))):void console.error("Undefined event passed to track.")},i.prototype.identify=function(e){var t=this.userId;if(!u.isValidUserId(e))return void console.error("Invalid id passed to identify.");t&&e.toString()===t||(this.userId=e.toString(),this.createCookie(this.userCookieName,this.userId,this.userCookieTime),this._track(a.Tie)),this._track(a.Identify),window.ttm&&window.ttm.onIdentify&&window.ttm.onIdentify(e.toString())},i.prototype.guid=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return""+e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},i.prototype.createCookie=function(e,t,i){var o="",s=new Date,n="domain="+this.getDomain()+";";return s.setTime(s.getTime()+i),o="expires="+s.toUTCString()+";",document.cookie=e+"="+t+"; "+o+" "+n+" path=/",t},i.prototype.getDomain=function(){var e=document.location||{hostname:""},t=e.hostname.split("."),i="";return t.some(function(e,o){var s=t.slice(t.length-o-1).join(".");if(document.cookie="testTLD=test;domain="+s+";",-1!==document.cookie.indexOf("testTLD=test"))return i=s,document.cookie="testTLD=;domain="+i+";expires="+new Date(0).toUTCString()+";",!0}),i},i.prototype.getCookie=function(e){for(var t=e+"=",i=decodeURIComponent(document.cookie),o=i.split(";"),s=0,n=o;s<n.length;s++){for(var r=n[s];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}},i.prototype.removeCookie=function(e){var t=this.getDomain();document.cookie=e+"=; Max-Age=-99999999;",t&&(document.cookie=e+"=; Max-Age=-99999999; domain="+t+";")},i.prototype.checkUserCookie=function(){var e=this.getCookie(this.userCookieName);e&&!u.isValidUserId(e)?this.removeCookie(this.userCookieName):(this.userId=e,this.userId&&(this.removeCookie(this.userCookieName),this.createCookie(this.userCookieName,this.userId,this.userCookieTime)))},i.prototype.checkSessionCookie=function(){var e=this;this.sessionId=this.getCookie(this.sessionCookieName);var t,i=window.location.search?window.location.search.slice(1).split("&").map(function(e){return e.split("=").map(decodeURIComponent)}):[];i.forEach(function(i){i&&2===i.length&&i[0]===e.sessionUrlParamName&&(t=i)});var o=t&&t[1];this.sessionId&&!u.isValidGuid(this.sessionId)&&(console.warn("Invalid stored session ID ("+this.sessionId+"). Ignoring."),this.removeCookie(this.sessionCookieName),this.sessionId=null),o&&!u.isValidGuid(o)&&(console.warn("Invalid parameter session ID ("+o+"). Ignoring."),o=null),o&&this.sessionId!==o&&(this.sessionId&&this._track(a.SessionTie,o),this.createCookie(this.sessionCookieName,o,this.sessionCookieTime),this.sessionId=o),this.sessionId?(this.removeCookie(this.sessionCookieName),this.createCookie(this.sessionCookieName,this.sessionId,this.sessionCookieTime)):this.sessionId=this.createCookie(this.sessionCookieName,this.guid(),this.sessionCookieTime)},i.prototype.checkDebugCookie=function(){var e=this.getCookie(this.debugCookieName);this.debug=!!e},i.prototype.recordIpsIfNecessary=function(){var t=this;if(!this.getCookie(this.ipCookieName)){this.createCookie(this.ipCookieName,"1",this.ipCookieTime);var i={version:this.version,token:this._i,sessionId:this.sessionId};this.removeEmptyKeys(i),[this.buildReqUrl(i,"https://dvqigh9b7wa32.cloudfront.net/5a28e627"),this.buildReqUrl(e({ipv6:!0},i),"https://d330aiyvva2oww.cloudfront.net/5a28e627")].forEach(function(e){t.sendRequest(e)})}},i.prototype.checkThirdParty=function(){if(-1!==s.indexOf(this._i)){this.debug&&console.info("Debug: Tatari Tracker Issuing Experian request");document.createElement("img").src="https://d.turn.com/r/dd/id/L21rdC84MTYvY2lkLzE3NDc5NjI3NzgvdC8y/kv/MAID=value"}if(n[this._i]){this.debug&&console.info("Debug: Tatari Tracker Issuing DataXU request");var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=n[this._i];var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},i.prototype.getCookieSupport=function(){var e="tatari-cookie-test="+Math.floor(1e8*Math.random()),t=new Date;return t.setTime(t.getTime()+this.sessionCookieTime),document.cookie=e+"; expires="+t.toUTCString()+"; path=/",-1!==document.cookie.indexOf(e)?r.Persist:r.None},i}(),d=window.tatari||[],p=new h(d._i,d.config);window.tatari=p,p.flushCommandQueue(d)}()}catch(e){console.log(e)}}();