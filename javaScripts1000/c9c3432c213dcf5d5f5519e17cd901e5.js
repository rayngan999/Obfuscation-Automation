                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                










(function($){
$.modalDialog=$.modalDialog||{};

var _ua=$.modalDialog._ua=(function(){
var ua=navigator.userAgent;


if(ua.indexOf("MSIE 7.0")>0){
return{
ie:true,
ie7:true,
version:7,
compat:ua.indexOf("compatible")>0
};
}


if(ua.indexOf("MSIE 8.0")>0){
return{
ie:true,
ie8:true,
version:8,
compat:ua.indexOf("compatible")>0
};
}

return{};
})();

var _isSmallScreenOverride;

$.modalDialog.setSmallScreen=function(isSmallScreen){
_isSmallScreenOverride=isSmallScreen;
};



$.modalDialog.isSmallScreen=function(){
if(typeof(_isSmallScreenOverride)!="undefined"){
return _isSmallScreenOverride;
}


if(_ua.ie7||_ua.ie8){
return false;
}

var width=$(window).width();
return(typeof window.orientation=="number"?Math.min(width,$(window).height()):width)<=480;
};

})(jQuery);



(function($){
var ATTR_PREFIX="data-dialog-";

var getKeys=function(obj){

if(Object.keys){
return Object.keys(obj);
}

var keys=[];
for(var key in obj){
if(obj.hasOwnProperty(key)){
keys[keys.length]=key;
}
}
return keys;
};

var parseNone=function(s){
if(s===""){
return s;
}
return s||null;
};

var parseBool=function(s){
if(s){
s=s.toString().toLowerCase();
switch(s){
case"true":
case"yes":
case"1":
return true;
default:
break;
}
}

return false;
};

var parseFunction=function(body){



if(!body){
return null;
}

return new Function("event",body);
};



var _props={
"title":parseNone,
"onopen":parseFunction,
"onbeforeopen":parseFunction,
"onclose":parseFunction,
"onbeforeclose":parseFunction,
"maxWidth":parseInt,
"initialHeight":parseInt,
"ajax":parseBool,
"onajaxerror":parseFunction,
"destroyOnClose":parseBool,
"skin":parseNone,
"enableHistory":parseBool,
"closeOnBackgroundClick":parseBool,
"closeOnEscape":parseBool,
"zIndex":parseInt
};

$.modalDialog=$.modalDialog||{};


$.modalDialog.getSettings=function($el){
var settings={};

$.each(getKeys(_props),function(i,key){

var value=$el.attr(ATTR_PREFIX+key);
if(typeof value!="undefined"){
var parser=_props[key];
settings[key]=parser(value);
}
});

return settings;
};

})(jQuery);

(function($){
if($.modalDialog&&$.modalDialog._isContent){
throw new Error("Attempt to load jquery.modalDialogContent.js in the same window as jquery.modalDialog.js.");
}

var MARGIN=10;
var STARTING_TOP="-700px";


var _dialogStack=[];


var _fullIdMap={};


$.modalDialog.defaults={
zIndex:10000,
title:"",
maxWidth:600,
initialHeight:100,
skin:"primary",
ajax:false,
url:null,
content:null,
destroyOnClose:false,
containerElement:"body",
preventEventBubbling:false,
enableHistory:true,
closeOnBackgroundClick:true,
closeOnEscape:true,
onopen:null,
onclose:null,
onbeforeopen:null,
onbeforeclose:null,
onajaxerror:null
};

var _ua=$.modalDialog._ua;

$.modalDialog.iframeLoadTimeout=0;
$.modalDialog.animationDuration=250;


var ModalDialog=function(settings){
this.settings=settings;
this.parent=$(this.settings.containerElement||"body");


$.each(["open","beforeopen","close","beforeclose","ajaxerror"],$.proxy(this._setupCustomEvent,this));


$.proxyAll(this,"_drag","_startDrag","_stopDrag","_close","_clickclose","_keydownHandler");
};

ModalDialog.prototype.dialogType="node";


ModalDialog.prototype._setupCustomEvent=function(i,eventName){
var onEvent="on"+eventName;
var evt=$.CustomEvent.create(this,eventName);

var handler=this.settings[onEvent];
if(handler){
evt.add(handler);
}

return evt;
};

ModalDialog.prototype._initDeferred=function(action,deferred){
this._deferreds=this._deferreds||{};
deferred=deferred||new $.Deferred();
this._deferreds[action]=deferred;
return deferred;
};

ModalDialog.prototype._completeDeferred=function(action,resolution,args){
var deferred=this._deferreds[action];
if(deferred){
deferred[resolution+"With"](this,args);


return deferred;
}

throw new Error("No deferred initialized for action '"+action+"'");
};

ModalDialog.prototype._resolveDeferred=function(action,args){
return this._completeDeferred(action,"resolve",args);
};

ModalDialog.prototype._rejectDeferred=function(action,args){
return this._completeDeferred(action,"reject",args);
};

ModalDialog.prototype._clearDeferred=function(action){
this._deferreds[action]=null;
};

ModalDialog.prototype._getDeferred=function(action){
return this._deferreds[action];
};

ModalDialog.prototype._isDeferredComplete=function(action){
var deferred=this._getDeferred(action);
return!deferred||deferred.state()!="pending";
};

ModalDialog.prototype.isOpen=function(){
return!!this._open;
};


ModalDialog.prototype.open=function(disableAnimation){
var deferred=this._initDeferred("open",deferred);



if(this._open){
return this._rejectDeferred("open");
}


this.level=_dialogStack.length;


var evt=this.onbeforeopen.fire();
if(evt.isDefaultPrevented()){
return this._rejectDeferred("open");
}


evt=$.modalDialog.onbeforeopen.fire(null,this);
if(evt.isDefaultPrevented()){
return this._rejectDeferred("open");
}


_dialogStack.push(this);

if(this.level>0){
this.settings.parentId=_dialogStack[this.level-1].settings._fullId;
}

this._open=true;

this._build();


this.$container[$.modalDialog.isSmallScreen()?"addClass":"removeClass"]("smallscreen");


this.$container.stop(true,true);


this.$el.show();

this._showLoadingIndicator();

$(document).on("keydown",this._keydownHandler);

this._finishOpenAction=function(){
if(deferred.state()!="rejected"){
this.$bg.addClass($.modalDialog.veilClass);



var widthData=this._getDefaultWidthData();
this.$container.css({
width:widthData.width
});


this.$container.css("opacity",0);

var initialPos=this._getDefaultPosition();
var initialTop=initialPos.top;
this.$container.css(initialPos);

var animationCallback=$.proxy(function(){
try{
this.$el.addClass("dialog-visible");

if($.modalDialog.isSmallScreen()){






this.triggerWindowResize=false;
this._orientationchange=$.proxy(function(event){
this.triggerWindowResize=true;
return this.pos(event);
},
this);

$(window).on("orientationchange resize",this._orientationchange);
}

this.onopen.fire();

$.modalDialog.onopen.fire(null,this);

this._resolveDeferred("open");
}catch(ex){
this._rejectDeferred("open",ex);
}

this._clearDeferred("open");

},this);

if(disableAnimation){


this.$container.css({top:initialTop});
setTimeout(animationCallback,0);
}else{

this.$container.animate({opacity:1},$.modalDialog.animationDuration,"swing")
.promise()
.then(animationCallback,animationCallback);

}

}else{
this._clearDeferred("open");
}

this._hideLoadingIndicator();
};

this._finishOpen();

return deferred.promise();
};

ModalDialog.prototype._finishOpen=function(){
if(this._finishOpenAction){
try{
this._finishOpenAction();
}catch(ex){
this._rejectDeferred("open",ex);
this._clearDeferred("open");
}

this._finishOpenAction=null;
}
};


ModalDialog.prototype._keydownHandler=function(e){
if(e.keyCode==27&&this.settings.closeOnEscape){
if($.modalDialog.getCurrent()===this){
this.cancel();
}
}
};

ModalDialog.prototype.cancel=function(){


if(this.$container){
this.$container.stop(true,false);
}

if(this.isOpen()){
this.close();
}
};

ModalDialog.prototype._showLoadingIndicator=function(){
if(!this.$loadingIndicator){
this.$loadingIndicator=$("<div class='dialog-loading-indicator'><span></span></div>")
.appendTo(this.$bg);

}
};

ModalDialog.prototype._hideLoadingIndicator=function(){
this.$loadingIndicator.remove();
this.$loadingIndicator=null;
};

ModalDialog.prototype._popDialogStack=function(){
if($.modalDialog.getCurrent()===this){
_dialogStack.pop();
}
};



ModalDialog.prototype.close=function(isDialogCloseButton){
var deferred=this._initDeferred("close",deferred);

if($.modalDialog.getCurrent()!==this){
return this._rejectDeferred("close");
}

var eventSettings={
isDialogCloseButton:!!isDialogCloseButton
};


if(this.onbeforeclose.fire(eventSettings).isDefaultPrevented()){
return this._rejectDeferred("close");
}


if($.modalDialog.onbeforeclose.fire(eventSettings,this).isDefaultPrevented()){
return this._rejectDeferred("close");
}

this._popDialogStack();

$(document).off("keydown",this._keydownHandler);


this.$el.removeClass("dialog-visible");

this.$container.animate({
opacity:0
},
$.modalDialog.animationDuration,
"swing"
)
.promise()
.then(
$.proxy(function(){
try{
this._finishClose(eventSettings);
}catch(ex){
this._rejectDeferred("close",ex);
this._clearDeferred("close");
}
},this),
$.proxy(function(ex){
this._rejectDeferred("close",ex);
this._clearDeferred("close");
},this));


if(this._orientationchange){
$(window).off("orientationchange resize",this._orientationchange);
}

return deferred.promise();
};

ModalDialog.prototype._close=function(e){
e.preventDefault();
this.close(false);
};

ModalDialog.prototype._clickclose=function(e){
e.preventDefault();
this.close(true);
};

ModalDialog.prototype._reset=function(){
this._open=false;

this.$container.stop(true,true);
this.$container.css({
top:STARTING_TOP
});
this.$bg.removeClass($.modalDialog.veilClass);
this.$el.hide();
};

ModalDialog.prototype._resetFailed=function(){
this._reset();
this._popDialogStack();
};

ModalDialog.prototype._finishClose=function(e){
this._reset();

if(this.settings.destroyOnClose){
this._destroy();
}

if($.modalDialog.isSmallScreen()&&this.triggerWindowResize){
$(window).trigger("resize");
}





setTimeout(
$.proxy(function(){
this.onclose.fire(e);

$.modalDialog.onclose.fire(e,this);

this._resolveDeferred("close");
},this),
0);
};

ModalDialog.prototype._destroy=function(){
if(this._destroyed){
return;
}



this.$content.detach().appendTo("body");
this.$el.remove();

delete _fullIdMap[this.settings._fullId];
this._destroyed=true;
};

ModalDialog.prototype._updateZIndexes=function(){
var zIndex=this.settings.zIndex;
var parent=this.getParent();
if(parent){
zIndex=Math.max(parent.settings.zIndex+10,zIndex);
}

this.$bg.css("z-index",zIndex);
zIndex+=2;
this.$container.css("z-index",zIndex);
};

ModalDialog.prototype._preventClickBubbling=function($el){
var me=this;

$el.on("click mousedown mouseup touchstart touchend",function(e){
if(me.settings.preventEventBubbling){
e.stopPropagation();
}
});
};


ModalDialog.prototype._build=function(){


if(this._destroyed){
throw new Error("This dialog has been destroyed");
}

if(!this.$el){
this.$bg=$('<div class="dialog-background"></div>');

this.$container=$(
'<div class="dialog-container" id="'+this.settings._fullId+'Container">'+
'  <div class="dialog-header">'+
'    <a href="#" class="dialog-close-button"><span class="dialog-close-button-icon"></span></a>'+
'    <h2 class="dialog-header-text">'+(this.settings.title||"")+'</h2>'+
'  </div>'+
'  <div class="dialog-content-container">'+
'  </div>'+
'</div>'
);

this._preventClickBubbling(this.$bg);
this._preventClickBubbling(this.$container);

this.$el=$([this.$bg[0],this.$container[0]]).addClass("dialog-skin-"+this.settings.skin);



this.parent.append(this.$bg,this.$container);

if(!this.parent.is("body")&&!this.parent.hasClass("ui-page-active")){
this.$bg.css("position","absolute");

if(this.parent.css("position")=="static"){
this.parent.css("position","relative");
}
}

this.$contentContainer=this.$el.find(".dialog-content-container");
this.$header=this.$el.find(".dialog-header");
this.$closeButton=this.$el.find(".dialog-close-button").on("click",this._clickclose);
if(this.settings.closeOnBackgroundClick)
{
this.$bg.on("click",this._close);
}

this._buildContent();

this.$contentContainer.on("click",'*[data-action="close"]',this._clickclose);

this.$contentContainer.append(this.$content);



if((this.parent.is("body")||this.parent.hasClass("ui-page-active"))&&!_ua.ie7){
this._makeDraggable();
}
}else{
this._alreadyBuilt();
}

this._updateZIndexes();
};


ModalDialog.prototype._alreadyBuilt=function(){



if(this.$content.parent()[0]!==this.$contentContainer[0]){
this._buildContent();
this.$contentContainer.append(this.$content);
}
};

ModalDialog.prototype._getChromeHeight=function(){
if(!this._chromeHeight){
this._chromeHeight=this.$container.height()-this.$content.height();
}

return this._chromeHeight;
};

ModalDialog.prototype._getDefaultWidthData=function(){
var $win=$(window);
var windowWidth=this.parent.is("body")?(window.innerWidth||$win.width()):this.parent.width();

return{
windowWidth:windowWidth,
width:Math.min(windowWidth-(MARGIN*2),this.settings.maxWidth)
};
};

ModalDialog.prototype._getDefaultPosition=function(contentHeight){
var widthData=this._getDefaultWidthData();
var scrollTop=$(document).scrollTop();

var pos={
width:widthData.width,
top:scrollTop+MARGIN
};

pos.left=(widthData.windowWidth-pos.width)/2;

var isSmallScreen=$.modalDialog.isSmallScreen();

if(_ua.ie7||isSmallScreen)
{
pos.top=MARGIN;
}





if(!isSmallScreen){
contentHeight=contentHeight||this.$content.height();


var containerHeight=this._getChromeHeight()+contentHeight;

var parentHeight=this.parent.is("body")?$(window).height():this.parent.height();
var idealTop=((parentHeight/2)-(containerHeight/2))+scrollTop;

pos.top=Math.max(idealTop,pos.top);
}

return pos;
};

ModalDialog.prototype._makeDraggable=function(){



if($.modalDialog.isSmallScreen()){
return;
}

this.$header.addClass("draggable").on("pointerdown",this._startDrag);
};

ModalDialog.prototype._startDrag=function(e){
var $target=$(e.target);


if($target.is(this.$closeButton)||$target.is(this.$closeButton.children())){
return;
}

e.stopPropagation();
e.preventDefault();

this._initialMousePos=getMousePos(e);
this._initialDialogPos=this.$container.offset();

$(document).on("pointermove",this._drag);





this.$header.on("pointerup",this._stopDrag);
this.$bg.on("pointerup",this._stopDrag);



if(this.$frame){
this._overlay=$("<div class='dialog-content-overlay'>").appendTo(this.$contentContainer);
}

this._isDragging=true;
};

ModalDialog.prototype._drag=function(e){
if(!this._isDragging){
$(document).off("pointermove",this._drag);
return;
}

var mousePos=getMousePos(e);

var deltaTop=mousePos.top-this._initialMousePos.top;
var deltaLeft=mousePos.left-this._initialMousePos.left;

var newPos={
top:this._initialDialogPos.top+deltaTop,
left:this._initialDialogPos.left+deltaLeft
};

this.$container.css(newPos);
};

ModalDialog.prototype._stopDrag=function(){
delete this._initialMousePos;
delete this._initialDialogPos;

$(document).off("pointermove",this._drag);
this.$header.off("pointerup",this._stopDrag);
this.$bg.off("pointerup",this._stopDrag);

if(this._overlay){
this._overlay.remove();
delete this._overlay;
}

this._isDragging=false;
};



var getMousePos=function(e){
var mousePos={
left:e.pageX,
top:e.pageY
};


if(e.target.ownerDocument!=window.document){
var $iframe=$(e.target.ownerDocument).hostIframe();
if($iframe.length>0){
var rect=$iframe.clientRect();
mousePos.top+=rect.top;
mousePos.left+=rect.left;
}
}

return mousePos;
};



ModalDialog.prototype._buildContent=function(){
this.$content=$(this.settings.content);
this.$content.detach();
};



ModalDialog.prototype.getWindow=function(){
return window;
};



ModalDialog.prototype.getParent=function(){
if(this.settings.parentId){
return getDialog(this.settings.parentId);
}

return null;
};


ModalDialog.prototype.center=function(){
var pos=this._getDefaultPosition();
this.$container.animate({
top:pos.top
},400);
};


ModalDialog.prototype.pos=function(animate){

this.$container.stop(true,true);

var pos=this._getDefaultPosition();

if(animate===true){
var top=pos.top;
delete pos.top;
this.$container.css(pos).animate({
top:top
},400);
}else{
this.$container.css(pos);
}
};


ModalDialog.prototype.setTitle=function(title){
this.$container.find(".dialog-header .dialog-header-text").text(title||"");
};


ModalDialog.prototype.getTitle=function(){
return this.$container.find(".dialog-header .dialog-header-text").text();
};


var IFrameDialog=function(){
ModalDialog.apply(this,arguments);

if(this.settings.parentId){
this._parentWindow=window.frames[this.settings.parentId];
}
};

$.extend(IFrameDialog.prototype,ModalDialog.prototype);

IFrameDialog.prototype.dialogType="iframe";

IFrameDialog.prototype._setupCustomEvent=function(){
var evt=ModalDialog.prototype._setupCustomEvent.apply(this,arguments);
evt.add(_crossWindowEventHandler);
};


var _crossWindowEventHandler=function(e){


for(var i=0;i<_dialogStack.length;i++){
if(_dialogStack[i]._postCommand){
_dialogStack[i]._postCommand("event"+e.type,$.extend({
_eventDialogId:this.settings._fullId
},e.data));
}
}
};


IFrameDialog.prototype._finishClose=function(e){
ModalDialog.prototype._finishClose.call(this,e);

this.$frame[0].src="about:blank";
this.$frame.remove();
};

IFrameDialog.prototype._destroy=function(){
this.$el.remove();
};


IFrameDialog.prototype._buildContent=function(){


this._iframeLoadTimer=null;

if(this.$frame&&this.$frame.length>0){
this.$frame.remove();
}

this.$frame=$('<iframe src="'+this.settings.url+
'" name="'+this.settings._fullId+
'" seamless allowtransparency="true" width="100%" style="height:'+
(this.height||this.settings.initialHeight)+'px;" class="dialog-frame" scrolling="no" frameborder="0" framespacing="0"></iframe>');

if($.modalDialog.iframeLoadTimeout>0){



this.$frame.on(
"load",
$.proxy(function(){

if(this._isDeferredComplete("open")){
return;
}



this._iframeLoadTimer=setTimeout(
$.proxy(function(){
if(this._isDeferredComplete("open")){
return;
}

this.$frame.remove();
this._resetFailed();

this._rejectDeferred("open",[{
message:"iframe load timeout for url: "+this.settings.url
}]);

},this),
$.modalDialog.iframeLoadTimeout
);
},
this));
}

this.$content=this.$frame;
};

IFrameDialog.prototype._alreadyBuilt=function(){
this._buildContent();


this.$contentContainer.append(this.$content);
};

IFrameDialog.prototype.getWindow=function(){
return this.$frame.iframeWindow()[0];
};





IFrameDialog.prototype._postCommand=function(command,data){
var messageData={
dialogCmd:command
};
if(data){
$.extend(messageData,data);
}

var message=$.param(messageData);

this.postMessage(message);
};





IFrameDialog.prototype.postMessage=function(message){
var win=this.getWindow();

var hostname=this.frameHostname;
if(!hostname){

hostname=this.settings.url.indexOf("http")===0?this.settings.url:document.location.href;
}

if($.postMessage){
$.postMessage(message,hostname,win);
}else{
win.postMessage(message,"*");
}
};

IFrameDialog.prototype.setHeight=function(contentHeight,center,skipAnimation){
var applyChange=skipAnimation?
function($content,css){$content.css(css);}:
function($content,css){$content.animate(css,{duration:400});};

applyChange(this.$content,{
height:contentHeight
});

if(center){
var pos=this._getDefaultPosition(contentHeight);
applyChange(this.$content,{
top:pos.top
});
}

this.height=contentHeight;
};


IFrameDialog.prototype.setHeightFromContent=function(center,skipAnimation){
this._postCommand("setHeightFromContent",{
center:!!center,
skipAnimation:!!skipAnimation
});
};


IFrameDialog.prototype.setTitleFromContent=function(){
this._postCommand("setTitleFromContent");
};

IFrameDialog.prototype.notifyReady=function(hostname){

if(this._iframeLoadTimer){
clearTimeout(this._iframeLoadTimer);
this._iframeLoadTimer=null;
}

this.frameHostname=hostname;

ModalDialog.prototype._finishOpen.apply(this);
};

IFrameDialog.prototype._finishOpen=function(){};



var AjaxDialog=function(){
ModalDialog.apply(this,arguments);
};

$.extend(AjaxDialog.prototype,ModalDialog.prototype);

AjaxDialog.prototype.dialogType="ajax";

AjaxDialog.prototype.open=function(){
var deferred=ModalDialog.prototype.open.apply(this,arguments);

if(!this._ajaxComplete){


this.$content.partialLoad(
this.settings.url,
null,
$.proxy(
function(responseText,status,xhr){
this._ajaxComplete=true;

xhr.fail(
$.proxy(function(){
this._resetFailed();

var errEvent={
xhr:xhr,
status:status,
responseText:responseText
};

this.onajaxerror.fire(errEvent);

this._rejectDeferred("open",[errEvent]);

},this));


var $title=this.$content.find("title");
if(!this.settings.title){
if($title.length>=0){
this.setTitle($title.text());
}
}
$title.remove();

ModalDialog.prototype._finishOpen.call(this);
},
this)
);
}else{

ModalDialog.prototype._finishOpen.call(this);
}

return deferred.promise();
};

AjaxDialog.prototype._finishOpen=function(){


};

AjaxDialog.prototype._buildContent=function(){

this.$content=$("<div class='dialog-content'></div>");
};

AjaxDialog.prototype._destroy=function(){
this.$el.remove();
};

var _dialogIdCounter=-1;
var DIALOG_NAME_PREFIX="dialog";


var isSelector=function(s){
var firstChar=s.charAt(0);
if(firstChar=="#"){


return true;
}

if(s.indexOf("/")>=0){


return false;
}

if(firstChar=="."){
var secondChar=s.charAt(1);
if(secondChar=="."||secondChar=="/"){


return false;
}



return true;
}



return false;
};







$.modalDialog._ensureSettings=function(explicitSettings){
var settings=$.extend({},$.modalDialog.defaults);




if(explicitSettings.contentOrUrl){
if(isSelector(explicitSettings.contentOrUrl)){
explicitSettings.content=$(explicitSettings.contentOrUrl);
}else{
explicitSettings.url=explicitSettings.contentOrUrl;
}

delete explicitSettings.contentOrUrl;
}


if(explicitSettings.content){
var $target=$(explicitSettings.content);
var targetSettings=$.modalDialog.getSettings($target);
$.extend(settings,targetSettings);
}


$.extend(settings,explicitSettings);

var id;



if(settings._fullId){
var idParts=settings._fullId.split("_");
id=idParts.pop();
if(idParts.length>0){
settings.parentId=idParts.join("_");
}
}else{

id=DIALOG_NAME_PREFIX+(settings.id||++_dialogIdCounter);



var parentId=settings.parentId?settings.parentId+"_":"";

settings._fullId=parentId+id;
}

return settings;
};

$.modalDialog._areSettingsEqual=function(a,b){
for(var key in a){
if(key=="_fullId"){
continue;
}
var aVal=a[key];
var bVal=b[key];
if(aVal!==bVal){



if(aVal.jquery&&bVal.jquery&&aVal[0]===bVal[0]){
continue;
}
return false;
}
}

return true;
};




var getDialog=function(fullId){
return _fullIdMap[fullId];
};


$.modalDialog=$.modalDialog||{};


$.modalDialog._isHost=true;




$.modalDialog.veilClass="dialog-veil";


var _typeInitializers=[


function(settings){
if(settings.url){
if(settings.content){
throw new Error("Both url and content cannot be specified.");
}else if(settings.ajax){
return new AjaxDialog(settings);
}else{
return new IFrameDialog(settings);
}
}
return null;
},


function(settings){
if(settings.content){
var $content=$(settings.content);
if($content.length===0){
throw new Error("ModalDialog content not found");
}

settings.content=$content;

var dialog=new ModalDialog(settings);

if(!settings.destroyOnClose){
$content.modalDialogInstance(dialog);
}

return dialog;
}

return null;
}
];




$.modalDialog.registerPlugin=function(f,addToBeginning){
var initializer=f.call(this,ModalDialog);
if(addToBeginning){
_typeInitializers.unshift(initializer);
}
else{
_typeInitializers.push(initializer);
}
};


$.modalDialog.create=function(settings){
settings=$.modalDialog._ensureSettings(settings);

var dialog=getDialog(settings._fullId);


if(!dialog&&settings.content){
var existingDialog=$(settings.content).modalDialogInstance();

if(existingDialog&&
settings._fullId&&
existingDialog.settings._fullId!==settings._fullId&&
existingDialog.isOpen()){
throw new Error("An attempt was made to create a dialog with a content node which is already assigned to another open dialog.");
}
}

if(!dialog){

for(var i=0;i<_typeInitializers.length;i++){
dialog=_typeInitializers[i].call(this,settings);
if(dialog){
break;
}
}

if(!dialog){
throw new Error("No url or content node specified");
}

_fullIdMap[settings._fullId]=dialog;
}

return dialog;
};


$.modalDialog.getCurrent=function(){
return _dialogStack.length>0?_dialogStack[_dialogStack.length-1]:null;
};


$.modalDialog.getExisting=function(settings){



var $content=$(settings.content);
var isMatch;


if($content&&$content.length){
isMatch=function(existingSettings){
return existingSettings.content&&
$(existingSettings.content)[0]===$content[0];
};
}

else if(settings.url){
isMatch=function(existingSettings){
return existingSettings.url&&
existingSettings.url===settings.url&&!!existingSettings.ajax===!!settings.ajax;
};
}

if(isMatch){
for(var key in _fullIdMap){
var dialog=_fullIdMap[key];
if(isMatch(dialog.settings)){
return dialog;
}
}
}

return null;
};


$.CustomEvent.create($.modalDialog,"beforeopen");
$.CustomEvent.create($.modalDialog,"open");
$.CustomEvent.create($.modalDialog,"beforeclose");
$.CustomEvent.create($.modalDialog,"close");

var JQUERY_DATA_KEY="modalDialog";

$.fn.modalDialogInstance=function(dialog){
return!dialog?this.data(JQUERY_DATA_KEY):this.data(JQUERY_DATA_KEY,dialog);
};


$.fn.modalDialog=function(settings){
var dialog;



if(typeof settings=="string"){
var action=settings;
dialog=this.modalDialogInstance();
if(dialog&&dialog[action]){
dialog[action].apply(dialog,Array.prototype.slice(arguments,1));
}
}

else{
settings=settings||{};
settings.content=this[0];

dialog=$.modalDialog.create(settings);

dialog.open();
}

return this;
};


var messageActions={
setHeight:function(dialog,qs){
dialog.setHeight(parseInt(qs.height,10),qs.center==="true",qs.skipAnimation==="true");
},

setTitle:function(dialog,qs){



if(qs.initializing&&dialog.settings.title){
return;
}
dialog.setTitle(qs.title);
},

open:function(dialog){
dialog.open();
},

close:function(dialog){
dialog.close();
},

create:function(){

},

center:function(dialog){
dialog.center();
},

notifyReady:function(dialog,qs){
dialog.notifyReady(qs.hostname);
}
};

var messageHandler=function(e){
var qs;

try{
qs=$.deparam(e.originalEvent?e.originalEvent.data:e.data);
}catch(ex){

}


if(qs&&qs.dialogCmd){
var action=messageActions[qs.dialogCmd];
if(action){
var dialog;

if(qs._fullId){


dialog=$.modalDialog.create(qs);
}else{
dialog=$.modalDialog.getCurrent();
}

action(dialog,qs);

return true;
}
}

return false;
};






if($.receiveMessage){
$.receiveMessage(messageHandler,"*");
}else{
$(window).on("message",messageHandler);
}


window._dialogReceiveMessageManual=function(message,origin){
if(!messageHandler({
data:message,
origin:origin
})){
var evt=new $.Event("message");
evt.data=message;
evt.origin=origin;
$(window).trigger(evt,[message,origin]);
}
};


$(document).ready(function(){
if(!$.mobile){
return;
}


$.modalDialog.defaults=$.extend(
$.modalDialog.defaults,{




preventEventBubbling:false
});
});

})(jQuery);





(function($){
var preventWindowTouchEvents=function(dialog,fix){

if(dialog.dialogType!="iframe"){
return;
}

$([window,document]).enableEvent("touchmove touchstart touchend",!fix);
};

var getWindowHeight=function(){
return window.innerHeight||$(window).height();
};

var initializeShimming=function(){


var _scrollTop=0;
var _height=0;

$.modalDialog.onbeforeopen.add(function(){
if(this.level===0){

_scrollTop=$(document).scrollTop();
_height=document.body.style.height;


document.body.style.height=(getWindowHeight()+50)+"px";

window.scrollTo(0,1);
}
});

$.modalDialog.onopen.add(function(){
if(this.level===0){



var height=Math.max(this.$container.height(),getWindowHeight())+20;

document.body.style.height=height+"px";
$(".dialog-background").css({
height:height
});

window.scrollTo(0,1);
}
});

$.modalDialog.onclose.add(function(){
if(this.level===0){

document.body.style.height=_height;

window.scrollTo(0,_scrollTop);
}
});
};

$(function(){
if(!$.modalDialog.isSmallScreen()){
return;
}


$.modalDialog.veilClass="dialog-veil-opaque";


if($.modalDialog&&$.modalDialog._isContent){
var dialog=$.modalDialog.getCurrent();
if(dialog){
$(window).on("load",function(){
preventWindowTouchEvents(dialog,true);
});
}
}else{

$.modalDialog.onopen.add(function(){
preventWindowTouchEvents(this,true);
});
$.modalDialog.onbeforeclose.add(function(){
preventWindowTouchEvents(this,false);
});

initializeShimming();
}
});

})(jQuery);





























(function($){
var DIALOG_DATA_KEY="modalDialogUnobtrusive";


var dialogLinkHandler=function(e){
e.preventDefault();

var $link=$(e.currentTarget);

var href=$link.attr("data-dialog-url")||$link.attr("href");

if(!href){
throw new Error("no href specified with data-rel='modalDialog'");
}


var settings={
contentOrUrl:href
};


var linkSettings=$.modalDialog.getSettings($link);
$.extend(settings,linkSettings);


var evt=new $.Event("dialogsettingscreate");
evt.dialogSettings=settings;

$link.trigger(evt);

if(evt.isDefaultPrevented()){
return;
}

var dialog=$link.data(DIALOG_DATA_KEY);



if(dialog){
var processedSettings=$.modalDialog._ensureSettings(settings);

if(!$.modalDialog._areSettingsEqual(dialog.settings,processedSettings)){
dialog._destroy();
dialog=null;
}
}

if(!dialog){
dialog=$.modalDialog.create(settings);


evt=new $.Event("dialogcreate");
evt.dialogSettings=settings;
evt.dialog=dialog;

$link.trigger(evt);

if(evt.isDefaultPrevented()){
return;
}



if(!settings.destroyOnClose){
$link.data(DIALOG_DATA_KEY,dialog);
}
}

dialog.open();
};


$(document).on("click","[data-rel='modalDialog']",dialogLinkHandler);


$(document).on("click",".close-dialog",function(e){
e.preventDefault();




setTimeout(function(){
var dialog=$.modalDialog.getCurrent();
if(dialog){
dialog.close();
}
},0);
});

})(jQuery);






(function($){
var DEFAULT_DIALOG_PARAM_NAME="sdialogid";
var _dialogParamName;




$.modalDialog.enableHistory=function(dialogParamName){

if(_historyEnabled){
return;
}

_historyEnabled=true;

_dialogParamName=dialogParamName||DEFAULT_DIALOG_PARAM_NAME;






disableHistoryForOpenDialogs();

var deferred=new $.Deferred();

updateFromUrl(true)
.then(
function(){
try{
$.modalDialog.onopen.add(openHandler);
$.modalDialog.onclose.add(closeHandler);



History.Adapter.bind(window,"statechange",popstateHandler);

deferred.resolve();
}catch(ex){
deferred.reject(ex);
}
},
function(ex){
deferred.reject(ex);
});

return deferred;
};

$.modalDialog.isHistoryEnabled=function(){
return _historyEnabled;
};


var currentQueryStringOrHash=function(){
if(History.emulated.pushState&&window.location.hash){
var qPos=window.location.hash.indexOf("?");
if(qPos>=0){
return $.deparam(window.location.hash.substr(qPos));
}
}

if(window.location.search){
return $.currentQueryString();
}

return{};
};

var disableHistoryForOpenDialogs=function(){
var parent=$.modalDialog.getCurrent();

while(parent){
if(parent){
parent.settings.enableHistory=false;
}

parent=parent.getParent();
}
};



var isHistoryEnabled=function(dialog){



if($.modalDialog._ua.ie&&$.modalDialog._ua.version<=8){
if(dialog.settings.url&&!dialog.settings.ajax){
return false;
}
}

var parent=dialog;

do{
if(parent&&!parent.settings.enableHistory){
return false;
}

parent=parent.getParent();

}while(parent);

return _historyEnabled;
};

var _pageIsAtInitialState=true;
var _stateAlreadyProcessed=false;
var _disableHandlers=false;
var _historyEnabled=false;

var getDialogParams=function(dialog){
var dialogParams={
dialogType:"node",
dialogId:null
};


if(dialog.settings.content){
var id=$(dialog.settings.content).prop("id");
if(!id){
throw new Error("The specified content node has no ID, and cannot be serialized to a URL parameter.");
}

dialogParams.dialogId="#"+id;
}


if(!dialogParams.dialogId&&dialog.settings.url){
dialogParams.dialogType=dialog.settings.ajax?"ajax":"iframe";
dialogParams.dialogId=dialog.settings.url;
}

return dialogParams;
};

var getDialogSettingsFromParams=function(dialogParams){
var settings=null;

if(dialogParams.dialogType=="iframe"){
settings={
url:dialogParams.dialogId
};
}else if(dialogParams.dialogType=="ajax"){
settings={
ajax:true,
url:dialogParams.dialogId
};
}else{
var $content;
try{
$content=$(dialogParams.dialogId);
}catch(ex){}

if($content&&$content.length>0){
settings=$.modalDialog.getSettings($content);
settings.content=$content;
}
}

return settings;
};

var doParamsMatchDialog=function(dialogParams,dialog){
var d1=getDialogParams(dialog);

return d1.dialogType==dialogParams.dialogType&&
d1.dialogId==dialogParams.dialogId;
};

var encodeDialogId=function(s){
return s.replace("#","-hash-");
};

var decodeDialogId=function(s){
return s.replace("-hash-","#");
};

var parseDialogParams=function(data){
if(!data){
return[];
}

var items=data.split(" ");

return $.map(items,function(item){
var delimPos=item.indexOf("_");

if(delimPos<0){
throw new Error("Invalid dialog parameters: "+item);
}

return{
dialogType:item.substr(0,delimPos),
dialogId:decodeDialogId(item.substr(delimPos+1))
};
});
};

var encodeDialogParams=function(dialogParamsList){
return $.map(dialogParamsList,function(item){
return item.dialogType+"_"+encodeDialogId(item.dialogId);
})
.join(" ");
};


var openHandler=function(){


if(_disableHandlers){
return;
}

if(!isHistoryEnabled(this)){
return;
}



var dialogParams=getDialogParams(this);


var qs=currentQueryStringOrHash();
var dialogParamsList=parseDialogParams(qs[_dialogParamName]);


if((this.level+1)<=dialogParamsList.length){
throw new Error("The number of dialogParams in the URL doesn't match the number of open dialogs. Not updating history.");
}

dialogParamsList.push(dialogParams);
qs[_dialogParamName]=encodeDialogParams(dialogParamsList);

var url=$.appendQueryString(document.location.pathname,qs);



_stateAlreadyProcessed=true;


History.pushState(null,document.title,url);



_pageIsAtInitialState=false;
};


var closeHandler=function(){
if(_disableHandlers){
return;
}

if(this.settings.enableHistory===false){
return;
}

if(!isHistoryEnabled(this)){
return;
}



if(_pageIsAtInitialState){
var qs=currentQueryStringOrHash();
var dialogParamsList=parseDialogParams(qs[_dialogParamName]);
var poppedParams=dialogParamsList.pop();

if(!doParamsMatchDialog(poppedParams,this)){
throw new Error("Closed dialog does not match URL parameters: "+poppedParams.dialogType+","+poppedParams.dialogId+". History not updated.");
}




if(dialogParamsList.length===0){
delete qs[_dialogParamName];
}else{
qs[_dialogParamName]=encodeDialogParams(dialogParamsList);
}

var url=$.appendQueryString(document.location.pathname,qs);

History.pushState(null,document.title,url);
}else{





_stateAlreadyProcessed=true;

History.back();
}

_pageIsAtInitialState=false;
};


var popstateHandler=function(){


if(_stateAlreadyProcessed){
_stateAlreadyProcessed=false;
return;
}

updateFromUrl();
};


var updateFromUrl=function(disableAnimation){
var deferred=new $.Deferred();


var dialogParamsList=parseDialogParams(currentQueryStringOrHash()[_dialogParamName]);


var topmostDialog=$.modalDialog.getCurrent();
var topmostStackPos=topmostDialog?topmostDialog.level+1:0;

if(dialogParamsList.length===topmostStackPos){
deferred.resolve();
}



var openDialogsUntilUrlMatches=function(){
if(dialogParamsList.length>topmostStackPos){
var dialogParams=dialogParamsList[topmostStackPos];

var settings=getDialogSettingsFromParams(dialogParams);


if(!settings){
_disableHandlers=false;

deferred.reject("Unable to create dialog settings from dialogId in URL: "+dialogParams.dialogType+","+dialogParams.dialogId);
return;
}


var dialog=$.modalDialog.getExisting(settings);


if(!dialog){
dialog=$.modalDialog.create(settings);
}




_disableHandlers=true;

dialog.open(disableAnimation)
.then(function(){

topmostStackPos++;
try{
openDialogsUntilUrlMatches();
}catch(ex){
deferred.reject(ex);
}
});
}else{
setTimeout(function(){
deferred.resolve();
_disableHandlers=false;
},
0);
}
};

if(dialogParamsList.length>topmostStackPos){
openDialogsUntilUrlMatches();
}



var closeDialogsUntilUrlMatches=function(){
if(dialogParamsList.length<topmostStackPos){
var currentDialog=$.modalDialog.getCurrent();
if(currentDialog){
if(!currentDialog.settings.enableHistory){
deferred.resolve();
_disableHandlers=false;
return;
}




_disableHandlers=true;

currentDialog.close()
.then(function(){
topmostStackPos--;

try{

closeDialogsUntilUrlMatches();
}catch(ex){
deferred.reject(ex);
}
});
}else{
_disableHandlers=false;
deferred.reject("There was a mismatch between the URL and the current open dialog stack");
}
}else{
setTimeout(function(){
deferred.resolve();
_disableHandlers=false;
});
}
};


if(dialogParamsList.length<topmostStackPos){
closeDialogsUntilUrlMatches();
}

return deferred;
};


})(jQuery);
