(function(bidtellect){"use strict";var JSON={};bidtellect.JSON=JSON;function f(n){return n<10?"0"+n:n}var toString=Object.prototype.toString;var REPLACERS={Date:function(key){var ms=this.valueOf();return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"."+("00"+ms%1e3).slice(-3)+"Z":null},String:String.prototype.valueOf,Number:Number.prototype.valueOf,Boolean:Boolean.prototype.valueOf};var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key],toJSON;if(value&&typeof value==="object"){toJSON=value.toJSON||REPLACERS[toString.call(value).slice(8,-1)];if(typeof toJSON==="function"){value=toJSON.call(value,key)}}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else if(typeof space==="string"){indent=space}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})(window.bidtellect=window.bidtellect||{});(function(bidtellect){bidtellect.identity=bidtellect.identity||{generate:function(callback){callback();return}}})(window.bidtellect=window.bidtellect||{});(function(bidtellect){bidtellect.ready=function(){var ready_event_fired=false;var ready_event_listener=function(fn){var idempotent_fn=function(){if(ready_event_fired){return}ready_event_fired=true;return fn()};var do_scroll_check=function(){if(ready_event_fired){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(do_scroll_check,1);return}return idempotent_fn()};if(document.readyState==="complete"){return idempotent_fn()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",idempotent_fn,false);window.addEventListener("load",idempotent_fn,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",idempotent_fn);window.attachEvent("onload",idempotent_fn);var toplevel=false;try{toplevel=window.frameElement==null}catch(e){}if(document.documentElement.doScroll&&toplevel){return do_scroll_check()}}};return ready_event_listener}()})(window.bidtellect=window.bidtellect||{});(function(bidtellect){bidtellect.ajaxnocredentials=bidtellect.ajaxnocredentials||{getJson:function(url,success){var xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");url=url.replace(/^(https|http):/,"");if(xmlhttp.withCredentials==undefined&&window.XDomainRequest){var xdr=new XDomainRequest;if(xdr){xdr.onerror=function(){};xdr.ontimeout=function(){};xdr.onprogress=function(){};xdr.onload=function(){var jsonObj=xdr.responseText?bidtellect.JSON.parse(xdr.responseText):null;success(jsonObj)};xdr.timeout=3e4;xdr.open("get",url);xdr.send()}}else{xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){if(success){var jsonObj=xmlhttp.responseText?bidtellect.JSON.parse(xmlhttp.responseText):null;success(jsonObj)}}};xmlhttp.open("GET",url,true);xmlhttp.setRequestHeader("Accept","application/json");xmlhttp.send()}},getText:function(url,success){var xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");url=url.replace(/^(https|http):/,"");xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){if(success)success(xmlhttp.responseText)}};xmlhttp.open("GET",url,true);xmlhttp.send()},postJson:function(url,obj,success){var xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");url=url.replace(/^(https|http):/,"");xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){if(success)success(xmlhttp.responseText)}};xmlhttp.open("GET",url,true);xmlhttp.setRequestHeader("Content-Type","application/json");xmlhttp.send(JSON.stringify(this))},postFormEncoded:function(url,formData,success){var xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");url=url.replace(/^(https|http):/,"");xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){if(success){var jsonObj=xmlhttp.responseText?bidtellect.JSON.parse(xmlhttp.responseText):null;success(jsonObj)}}};xmlhttp.open("POST",url,true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send(formData);return xmlhttp.responseText?bidtellect.JSON.parse(xmlhttp.responseText):null}}})(window.bidtellect=window.bidtellect||{});(function(bidtellect){var _heartbeatUrl="https://bttrack.com/engagement/event";var _pixelUrl="https://bttrack.com/engagement/getpixels";var _delayExponentialBase=1.12;var _delayMaxSeconds=30;var _stopHeartbeatAfterMinutes=15;var _creativeIdParamName="bt_crid";var _placementIdParamName="bt_plid";var _globalIdParamName="bt_glid";function Piggyback(){this.thirdPartyPixels="";this.appendedPixels=false;this.appendPixels=function(){if(!this.thirdPartyPixels){return}if(!this.appendedPixels){var self=this,frame=document.createElement("iframe"),frameId="bt-pixels-14158";frame.id=frameId;frame.frameBorder="0";frame.width="1";frame.height="1";document.body.appendChild(frame);var doc=frame.contentDocument||frame.contentWindow.document;doc.body.innerHTML=self.thirdPartyPixels;this.appendedPixels=true}};this.fromAjaxRequest=function(callback){var self=this;var data="gid=14158";window.bidtellect.ajaxnocredentials.getText(_pixelUrl+"?"+data,function(result){result=result||"";self.thirdPartyPixels=result;callback()})}}function Session(){this.globalId="ceac3411-426d-44e5-8255-276e6b126638";this.creativeId="";this.placementId="";this.goalId="14158";this.sessionId="1f18fb64-e89f-4aae-b678-2344dc334644";this.parentPublisherId="";this.publisherId="";this.siteId="";this.commonId="";this.heartbeat=1;this.url="";this.fingerprint="";this.fingerprintProvider="";this.init=function(callback){this.url=this.getPageUrl();if(bidtellect.hasSessionStorage()){var sessionStorageSessionId=sessionStorage.getItem("bt-session-id");this.sessionId=sessionStorageSessionId||this.sessionId;sessionStorage.setItem("bt-session-id",this.sessionId)}if(this.isValid())callback()};this.isValid=function(){return this.sessionId!=""&&this.globalId!=""};this.sendEvent=function(){var json=JSON.stringify(this);var url=_heartbeatUrl+"?input="+encodeURIComponent(json);window.bidtellect.ajaxnocredentials.getText(url,function(){});this.heartbeat++};this.getPageUrl=function(){var url=location.href;return url}}var session=new Session;var piggyback=new Piggyback;window.bidtellect.identity.generate(function(){if(window.bidtellect.identity.fingerprint){session.fingerprint=window.bidtellect.identity.fingerprint.value;session.fingerprintProvider=window.bidtellect.identity.fingerprint.provider}else{}function isHidden(){var prefixes=["webkit","moz","ms","o"];if("hidden"in document)return document.hidden;for(var i=0;i<prefixes.length;i++){if(prefixes[i]+"Hidden"in document)return document[prefixes[i]+"Hidden"]}return false}session.init(function(){if(!session.isValid()){return}var startTime=new Date,count=0,stopHeartBeat=_stopHeartbeatAfterMinutes*60;var timerCallback=function(){var secondsFromStart=((new Date).getTime()-startTime.getTime())/1e3;var delay=Math.min(_delayExponentialBase*count+4,_delayMaxSeconds);if(isHidden()){setTimeout(timerCallback,1e3);return}if(secondsFromStart<=stopHeartBeat){session.sendEvent()}if(count===0){setTimeout(timerCallback,5100)}if(count>0){setTimeout(timerCallback,delay*1e3)}if(secondsFromStart+delay>=stopHeartBeat){return}count++};timerCallback()})});piggyback.fromAjaxRequest(function(){window.bidtellect.ready(function(){piggyback.appendPixels()})})})(window.bidtellectEngagement=window.bidtellectEngagement||{});