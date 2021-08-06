(new Image(1,1)).src=("https://consent.trustarc.com/log".replace("http:","https:"))+"?domain=century21.com&country=hk&state=&behavior=implied&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
var truste=window.truste||{};truste.bn||(truste.bn={});truste.eu||(truste.eu={});truste.util||(truste.util={});
truste.util.error=function(h,d,g){g=g||{};var f=d&&d.toString()||"",c=g.caller||"";if(d&&d.stack){f+="\n"+d.stack.match(/(@|at)[^\n\r\t]*/)[0]+"\n"+d.stack.match(/(@|at)[^\n\r\t]*$/)[0]
}truste.util.trace(h,f,g);if(truste.util.debug||!d&&!h){return}var a={apigwlambdaUrl:"https://api-js-log.trustarc.com/error",enableJsLog:false};
if(a.enableJsLog){delete g.caller;delete g.mod;delete g.domain;delete g.authority;g.msg=h;var e=new (self.XMLHttpRequest||self.XDomainRequest||self.ActiveXObject)("MSXML2.XMLHTTP.3.0");
e.open("POST",a.apigwlambdaUrl,true);e.setRequestHeader&&e.setRequestHeader("Content-type","application/json");
e.send(truste.util.getJSON({info:truste.util.getJSON(g)||"",error:f,caller:c}))}};truste.util.trace=function(){if(self.console&&console.log&&(this.debug||this.debug!==false&&(self.location.hostname.indexOf(".")<0||self.location.hostname.indexOf(".truste-svc.net")>0))){if(console.log.apply){console.log.apply(console,arguments)
}else{var a=Function.prototype.bind.call(console.log,console);a.apply(console,arguments)}return true}return false
};truste.util.getJSON=function(b){if(self.JSON&&!(self.JSON.org||self.JSON.license||self.JSON.copyright)){return self.JSON.stringify(b)
}if(b instanceof Array){var d="[";if(b.length){d+=truste.util.getJSON(b[0]);for(var c=1;c<b.length;c++){d+=","+truste.util.getJSON(b[c])
}}return d+"]"}else{if(typeof b=="string"){return'"'+b+'"'}else{if((b) instanceof Object){var a=false,d="{";
for(var e in b){d+=(a?",":"")+'"'+e+'":'+truste.util.getJSON(b[e]);a=true}return d+"}"}else{return b===undefined?undefined:b+""
}}}};(function(){var a=self.onerror;self.onerror=function b(h,f,c,d,g){var e=[].slice.call(arguments);
var i=h+(f?"; "+f:"")+(c?" "+c:"")+(d?":"+d:"");if((i+""+(g&&g.stack)).match(/truste|trustarc|notice/)){truste.util.error("Got Window Error:",g&&g.stack?g:i,{product:"cm",tag:f})
}a&&a.apply(self,e)}})();truste.bn.addScriptElem=function(d,e,a){if(!d&&"string"!=typeof d){return null
}var c=document.createElement("SCRIPT");c.src=d;c.setAttribute("async","async");c.setAttribute("crossorigin","");
var b=function(g){var f;if(g&&g.type=="error"){f=2}else{if(g&&g.type=="load"||c.readyState=="loaded"){f=1
}}if(f){c.onload=c.onreadystatechange=c.onerror=null;e instanceof Function&&e(c,f)}};c.onload=c.onreadystatechange=c.onerror=b;
(document.getElementById(a)||document.getElementsByTagName("body")[0]||document.getElementsByTagName("head")[0]).appendChild(c);
return c};truste.bn.msglog=function(a,b){truste.eu&&truste.eu.msg&&truste.eu.msg.log(a,truste.eu.bindMap,b)
};truste.bn.checkPreference=function(){if(truste.eu.bindMap){var a=truste.eu.bindMap;if(a.feat.crossDomain&&!a.feat.isConsentRetrieved){a.bnFlags.consentUnresolved=true;
return false}var c=shouldRepop();if(c){a.feat.dropPopCookie=true}if(a.feat.isDNTOptoutEvent){return a.feat.dntShowUI
}if(a.prefCookie){if(c||shouldResolveConsent()){a.feat.isRepopEvent=true;a.feat.isReconsentEvent=c}}return !a.prefCookie||a.feat.isRepopEvent
}return false};truste.bn.checkConsentUnresolved=function(d,a){if(truste.eu.bindMap){var c=truste.eu.bindMap;
var b=setInterval(function(){if(b&&c.feat.isConsentRetrieved){b=clearInterval(b);c.bnFlags.consentUnresolved=false;
if(truste.bn.checkPreference()){d()}else{a()}}},100);setTimeout(function(){b=clearInterval(b)},5500)}};
function shouldRepop(){if(truste.eu.bindMap.popTime){var a=new Date().getTime();var c=truste.util.readCookie(truste.eu.COOKIE_REPOP,!0);
var b=truste.eu.bindMap.popTime;return b&&b!=c&&a>=b}return false}function shouldResolveConsent(){var c=truste.eu.bindMap;
if(c.feat.consentResolution&&c.behaviorManager=="eu"){var a=truste.util.readCookie(truste.eu.COOKIE_GDPR_PREF_NAME,true);
if(a){a=a.split(":");var b=new RegExp(c.behavior+"."+c.behaviorManager);if(!b.test(a[2])){if(/(us|none)/i.test(a[2])){return true
}}}}return false}(function trustarcBanner(){var e=truste.eu.bindMap={version:"v1.7-8834",domain:"century21.com",width:parseInt("660"),height:parseInt("460"),baseName:"te-notice-clr1-ef318cfa-6024-4f77-9aac-8f575e49475a",showOverlay:"{ShowLink}",hideOverlay:"{HideLink}",anchName:"te-notice-clr1-ef318cfa-6024-4f77-9aac-8f575e49475a-anch",intDivName:"te-notice-clr1-ef318cfa-6024-4f77-9aac-8f575e49475a-itl",iconSpanId:"te-notice-clr1-ef318cfa-6024-4f77-9aac-8f575e49475a-icon",containerId:(!"teconsent"||/^_LB.*LB_$/.test("teconsent"))?"teconsent":"teconsent",messageBaseUrl:"http://consent.trustarc.com/noticemsg?",originBaseUrl:"https://consent.trustarc.com/",daxSignature:"",privacyUrl:"",prefmgrUrl:"http://consent-pref.trustarc.com/?type=century21_gdpr&layout=gdpr",text:"true",icon:"Cookie Preferences",locale:"en",language:"en",country:"hk",state:"",categoryCount:parseInt("3",10)||3,noticeJsURL:((parseInt("0")?"https://consent.trustarc.com/":"http://consent.trustarc.com/"))+"asset/notice.js/v/v1.7-8834",assetServerURL:(parseInt("0")?"https://consent.trustarc.com/":"http://consent.trustarc.com/")+"asset/",consensuUrl:"https://trustarc.mgr.consensu.org/",cdnURL:"https://consent.trustarc.com/".replace(/^(http:)?\/\//,"https://"),iconBaseUrl:"http://consent.trustarc.com/",behavior:"implied",behaviorManager:"eu",provisionedFeatures:"",cookiePreferenceIcon:"cookiepref.png",cookieExpiry:parseInt("180",10)||395,closeButtonUrl:"//consent.trustarc.com/get?name=noticeclosebtn.png",apiDefaults:'{"reportlevel":16777215}',cmTimeout:parseInt("6000",10),popTime:new Date("".replace(" +0000","Z").replace(" ","T")).getTime()||null,popupMsg:"",bannerMsgURL:"http://consent.trustarc.com/bannermsg?",IRMIntegrationURL:"",irmWidth:parseInt(""),irmHeight:parseInt(""),irmContainerId:(!"_LBirmcLB_"||/^_LB.*LB_$/.test("_LBirmcLB_"))?"teconsent":"_LBirmcLB_",irmText:"",lspa:"",ccpaText:"",containerRole:"",iconRole:"",atpIds:"",feat:{iabGdprApplies:false,consentResolution:false,dropBehaviorCookie:true,crossDomain:false,uidEnabled:false,replaceDelimiter:false,optoutClose:false,enableIRM:false,enableCM:true,enableBanner:true,enableCCPA:false,enableIrmAutoOptOut:false,ccpaApplies:false,unprovisionedDropBehavior:true,unprovisionedIab:false,unprovisionedCCPA:false,dnt:false&&(navigator.doNotTrack=="1"||window.doNotTrack=="1"),dntShowUI:false,gpc:false&&(navigator.globalPrivacyControl||window.globalPrivacyControl),iabBannerApplies:false,enableTwoStepVerification:false,enableContainerRole:true,enableIconRole:true,enableReturnFocus:false,enableShopify:0,enableReturnFocus:false,enableTcfOptout:false,enableTransparentAlt:true,enableACString:false,gcm:{ads:undefined,analytics:undefined}},autoDisplayCloseButton:false};
if(/layout=gdpr/.test(e.prefmgrUrl)){e.isGdprLayout=true}if(/layout=iab/.test(e.prefmgrUrl)){e.isIabLayout=true
}if(self.location.protocol!="http:"){for(var d in e){if(e[d]&&e[d].replace){e[d]=e[d].replace(/^(http:)?\/\//,"https://")
}}}truste.eu.noticeLP=truste.eu.noticeLP||{};truste.eu.noticeLP.pcookie=undefined;(function(f){var m=function(o){if(f.feat.iab){return
}var q=self.document,p=q.createElement("script");p.setAttribute("async","async");p.setAttribute("type","text/javascript");
p.setAttribute("crossorigin","");p.setAttribute("importance","high");p.src=o;(q.getElementById(f.containerId)||q.getElementsByTagName("body")[0]||q.getElementsByTagName("head")[0]).appendChild(p);
f.feat.iab=true};var l=function(t,s,o,r){if(t()){s();return}var p,q=function(){if(t()){p=clearInterval(p);
s()}};p=setInterval(q,o);q();setTimeout(function(){clearInterval(p)},r)};if(f.isIabLayout){var h=false;
var j=document.head.getElementsByTagName("script");for(var i=0;i<j.length;i++){var k=j[i];if(k.id==="trustarc-tcfapi"){h=true;
f.feat.iab=true}}if(!h){l(function n(){return typeof __tcfapi!=="undefined"},function g(){m(f.consensuUrl+"asset/tcfapi.js")
},10,30000)}}})(truste.eu.bindMap);truste.util.createCookie=function(C,t,h,l){if(truste.util.cookie){t=truste.util.cookie.convert(t)
}var f=truste.eu.bindMap||{},z="; expires=";if(!h){var w=new Date();w.setDate(w.getDate()+f.cookieExpiry);
z+=w.toGMTString()}else{if(h=="0"){z=""}else{z+=h}}if(l&&truste.util.createCookieStorage){truste.util.createCookieStorage(C,t,w)
}var x=f.domain,n=self.location.hostname;var j=!!n.match(/^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/)||n=="localhost";
var u=new RegExp("[.]"+x+"$|^"+x+"$");var o=x&&u.test(n)?x:(j?n:n.replace(/^www\./,""));var k=((self.location.protocol=="https:")?" Secure;":"");
var B=k?"None;":"Lax;";var r=(truste.util.samesite&&!truste.util.samesite(navigator.userAgent)?"":" SameSite="+B)+k;
if(typeof truste.eu.noticeLP.pcookie!="undefined"){document.cookie=C+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain="+(j?"":".")+o.replace(/^\./,"")+";"+r;
if(!f.topLevelDomain){var v=0,A=o,q=A.split("."),y=[],m="_gd"+(new Date()).getTime();while(v<(q.length-1)&&document.cookie.indexOf(m+"="+m)==-1){A=q.slice(-1-(++v)).join(".");
document.cookie=m+"="+m+";domain="+A+";";y.push(m)}f.topLevelDomain=A;for(var g=0;g<y.length;g++){document.cookie=y[g]+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+A+";"
}document.cookie=m+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+A+";"+r}o=f.topLevelDomain}self.document.cookie=C+"="+t+z+"; path=/;domain="+(j?"":".")+o.replace(/^\./,"")+";"+r
};if(e.feat.dropBehaviorCookie){var a=e.feat.replaceDelimiter?"|":",";truste.util.createCookie("notice_behavior",e.behavior+a+e.behaviorManager,"0")
}(function(g){if(g.feat.crossDomain){var f=function(){if(!window.frames.trustarc_notice){if(document.body){var h=document.body,i=document.createElement("iframe");
i.style.display="none";i.name="trustarc_notice";i.id="trustarcNoticeFrame";i.title="Trustarc Cross-Domain Consent Frame";
i.src=g.cdnURL+"get?name=crossdomain.html&domain="+g.domain;h.appendChild(i)}else{setTimeout(f,5)}}};
f()}})(truste.eu.bindMap);e.styles={};e.externalcss=typeof $temp_externalcss!="undefined"&&$temp_externalcss;
e.styles.closebtnlink=typeof $temp_closebtnlink_style!="undefined"&&$temp_closebtnlink_style;e.styles.closebtn=typeof $temp_closebtn_style!="undefined"&&$temp_closebtn_style;
e.styles.box_overlay=typeof $temp_box_overlay!="undefined"&&$temp_box_overlay;e.styles.box_overlay_border=typeof $temp_box_overlay_border!="undefined"&&$temp_box_overlay_border;
e.styles.overlay=typeof $temp_overlay!="undefined"&&$temp_overlay;e.styles.inner_iframe=typeof $temp_inner_iframe!="undefined"&&$temp_inner_iframe;
e.styles.outerdiv=typeof $temp_style_outerdiv!="undefined"&&$temp_style_outerdiv;e.outerdiv=typeof $temp_outerdiv!="undefined";
e.params={};e.bnFlags={};truste.bn.addScriptElem(e.noticeJsURL,function b(){var g;var f=function(){if(g&&truste.eu.flags&&truste.eu.flags.init){g=clearInterval(g);
trustarcBanner.script=truste.util.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net|eu)(:\n+)?\/[^\?#;]*(notice|banner).*?(js=bb|nj)/,true);
truste.util.initParameterMap(trustarcBanner.script,e.params);var i=function(){var j=(e.params.cm||(e.iconBaseUrl+"notice?"))+"domain="+e.domain+"&country="+e.country+"&js=nj2&"+e.params._query.replace(/\b(js|domain|country|name)=[^&#]*&?/g,"");
truste.bn.addScriptElem(j,false,e.containerId)};var h=function(){var j=document.getElementById(e.params.c||"teconsent");
if(j&&j.style.display==="none"){j.style.display=""}truste.bn.msglog("returns",e.bannerMsgURL)};if(e.feat.ccpaApplies||c()){i()
}else{if(e.bnFlags.consentUnresolved){truste.bn.checkConsentUnresolved(i,h)}else{h()}}}};g=setInterval(f,7);
setTimeout(function(){clearInterval(g)},10000)},e.containerId);function c(){var f=/ip(hone|od|ad)|iOS/i.test(navigator.userAgent||navigator.vendor||window.opera);
return(truste.eu.bindMap.ios!=1||!f)&&truste.bn.checkPreference()}})();