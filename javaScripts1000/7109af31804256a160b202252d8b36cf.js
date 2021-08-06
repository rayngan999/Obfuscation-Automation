                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


(function(window,$){
var cacheBuster=1;

var browserSupportsPostMessage=!!window.postMessage;


function getDomainFromUrl(url){
return url.replace(/([^:]+:\/\/[^\/]+).*/,"$1");
}





function isOriginMatch(originPatternOrFunction,sourceOrigin){
if(typeof(originPatternOrFunction)=="string"&&
sourceOrigin!==originPatternOrFunction&&
originPatternOrFunction!=="*"){
return false;
}else if($.isFunction(originPatternOrFunction)&&!originPatternOrFunction(sourceOrigin)){
return false;
}

return true;
}









function transverseLevel(window,target,level){
var i;

if(typeof level=="undefined"){
level=0;
}


if(window.frames){
try{
for(i=0;i<window.frames.length;i++){
try{
if(window.frames[i]===target){
return"f,"+i;
}
}catch(e){
if(e.number!==-2147024891)
{
throw e;
}
}
}
}catch(ex){
if(ex.number!==-2146823279)
{
throw ex;
}
}
}


if(window.parent&&window.parent===target){
return"p";
}


if(window.opener&&window.opener===target){
return"o";
}



if(level>=4){
return false;
}

var ref;


if(window.frames&&window.frames.length>0){
for(i=0;i<window.frames.length;i++){
ref=transverseLevel(window.frames[i],target,level+1);
if(ref){
return"f,"+i+"."+ref;
}
}
}


if(window.parent&&window.parent!==window){
ref=transverseLevel(window.parent,target,level+1);
if(ref){
return"p."+ref;
}
}


if(window.opener&&window.opener!==window){
ref=transverseLevel(window.opener,target,level+1);
if(ref){
return"o"+ref;
}
}

return false;
}








function serializeWindowReference(currentWindow,targetWindow){


if(typeof(targetWindow)=="string"){
return":"+targetWindow;
}


if(currentWindow===targetWindow){
throw new Error("Trying to postMessage to self. Pointlessly useless.");
}


if(currentWindow.parent&&currentWindow.parent!==currentWindow&&currentWindow.parent===targetWindow){
return"p";
}


if(currentWindow.opener&&currentWindow.opener!==currentWindow&&currentWindow.opener===targetWindow){
return"o";
}


var ref=transverseLevel(currentWindow,targetWindow);
if(ref){
return ref;
}else{
throw new Error("Couldn't serialize window reference");
}
}








$.postMessage=function(message,targetHost,targetWindow,targetWindowName){
if(!targetHost){
throw new Error("targetHost argument was not supplied to jQuery.postMessage");
}

if(!targetWindow){
throw new Error("No targetWindow specified");
}

targetHost=getDomainFromUrl(targetHost);






if(browserSupportsPostMessage){
try{
targetWindow.postMessage(message,targetHost);
return;
}catch(ex){







if(ex.number!=-2147467262){
throw ex;
}
}
}




try{
var postMessageDirect=targetWindow.__receiveMessageHook;
if(postMessageDirect){
postMessageDirect(message,targetHost);
return;
}
}catch(ex){}





var serializedWindowRef=serializeWindowReference(window,targetWindowName||targetWindow),
thisDomain=getDomainFromUrl(document.location.href),
iframe=document.createElement("iframe");

if(!targetHost||targetHost=="*"){
throw new Error("$.postMessage(): Must specify targetHost on browsers that don't support postMessage natively (cannot be '*').");
}

$("body").append(
$(iframe)
.hide()
.attr("src",targetHost+getPolyfillPath()+"#"+

(+new Date())+cacheBuster+"&"+
serializedWindowRef+"&"+thisDomain+"&"+encodeURIComponent(message)
)
.load(function(){

$(iframe).remove();
})
);

cacheBuster++;
};







$.receiveMessage=function(callback,allowedOriginOrFunction){
if(!callback){
throw new Error("No callback function specified");
}

if(!allowedOriginOrFunction){
allowedOriginOrFunction="*";
}

$(window).on("message",function(event,data,origin){
if(!data){
data=event.originalEvent?event.originalEvent.data:event.data;
}

if(!origin){
origin=event.originalEvent?event.originalEvent.origin:event.origin;
}

return isOriginMatch(allowedOriginOrFunction,event.originalEvent?event.originalEvent.origin:origin)?
callback({
"data":data,
"origin":origin
}):
false;
});
};




window.__receiveMessageHook=function(message,origin){
var $evt=new $.Event("message");
$evt.data=message;
$evt.origin=origin;

$(window).trigger($evt,[$evt.data,$evt.origin]);
};


$.fn.postMessage=function(message,targetHost,targetWindowName){
this.each(function(i,el){
if(!(el instanceof Window)){
throw new Error("postMessage can only be sent to a window");
}

$.postMessage(message,targetHost,el,targetWindowName);
});

return this;
};

$.event.special.message={
add:function(handlerData){
var origHandler=handlerData.handler;

handlerData.handler=function(e,message,origin){
e.data=e.originalEvent?e.originalEvent.data:message;
e.origin=e.originalEvent?e.originalEvent.origin:origin;

return origHandler.call(this,e,e.data,e.origin);
};
}
};

var getPolyfillPath=function(){
if(!window._jqueryPostMessagePolyfillPath){
throw new Error("Must configure jquery.postMessage() with window._jqueryPostMessagePolyfillPath for IE7 support. Should be '/root-relative-path-on-my-server/postmessage.htm'");
}

return window._jqueryPostMessagePolyfillPath;
};

})(window,jQuery);

window._jqueryPostMessagePolyfillPath="/vp/JS-Lib/ThirdParty/skinnyjs/postmessage.htm";
