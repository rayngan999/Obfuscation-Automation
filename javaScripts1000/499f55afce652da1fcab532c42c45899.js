                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                /*! 
 * Pointy.js 
 * Pointer Events polyfill for jQuery 
 * https://github.com/vistaprint/PointyJS 
 * 
 * Depends on jQuery, see http://jquery.org 
 * 
 * Developed by Vistaprint.com 
 */


(function($,window,document,undefined){

var support={
touch:"ontouchend"in document,
pointer:!!(navigator.pointerEnabled||navigator.msPointerEnabled||window.PointerEvent)
};

$.extend($.support,support);

function triggerCustomEvent(elem,eventType,originalEvent){

originalEvent=originalEvent||window.event;


var event=new jQuery.Event(originalEvent);
event.type=eventType;


var i,copy=$.event.props.concat($.event.pointerHooks.props);
i=copy.length;
while(i--){
var prop=copy[i];
event[prop]=originalEvent[prop];
}



if(!event.target){
event.target=originalEvent.srcElement||document;
}



if(event.target.nodeType===3){
event.target=event.target.parentNode;
}



event.metaKey=!!event.metaKey;


event=$.event.pointerHooks.filter(event,originalEvent);




if($.isArray(event)){
$.each(event,function(i,ev){
$.event.dispatch.call(elem,ev);
});
}else{
$.event.dispatch.call(elem,event);
}


return event;
}

function addEvent(elem,type,selector,func){

if(selector){
func._pointerEventWrapper=function(event){
return func.call(elem,event.originalEvent);
};

$(elem).on(type,selector,func._pointerEventWrapper);
}


else{
if(elem.addEventListener){
elem.addEventListener(type,func,false);
}else if(elem.attachEvent){


func._pointerEventWrapper=function(e){
return func.call(elem,e);
};

elem.attachEvent("on"+type,func._pointerEventWrapper);
}
}
}

function removeEvent(elem,type,selector,func){

if(func._pointerEventWrapper){
func=func._pointerEventWrapper;
}

if(selector){
$(elem).off(type,selector,func);
}else{
$.removeEvent(elem,type,func);
}
}


function getStandardizedButtonsProperty(event){


if(event.buttons){
return event.buttons;
}


var which=event.which;
if(!which&&event.button!==undefined){
which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));
}


if(which===0){
return 0;
}

else if(which===1){
return 1;
}

else if(which===2){
return 4;
}

else if(which===3){
return 2;
}


return 0;
}

function returnFalse(){return false;}
function returnTrue(){return true;}

var POINTER_TYPE_UNAVAILABLE="unavailable";
var POINTER_TYPE_TOUCH="touch";
var POINTER_TYPE_PEN="pen";
var POINTER_TYPE_MOUSE="mouse";





var _touching=null;


var _buttons=0;


var _lastTouches=[];






















$.event.pointerHooks={
props:"pointerType pointerId pressure buttons clientX clientY relatedTarget fromElement offsetX offsetY pageX pageY screenX screenY width height toElement".split(" "),
filter:function(event,original){


if(!original.touches&&event.pageX==null&&original.clientX!=null){
var eventDoc=event.target.ownerDocument||document;
var doc=eventDoc.documentElement;
var body=eventDoc.body;

event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);
}



if(!event.relatedTarget&&original.fromElement){
event.relatedTarget=original.fromElement===event.target?original.toElement:original.fromElement;
}


if(!event.pointerType||typeof event.pointerType==="number"){
if(event.pointerType==2){
event.pointerType=POINTER_TYPE_TOUCH;
}else if(event.pointerType==3){
event.pointerType=POINTER_TYPE_PEN;
}else if(event.pointerType==4){
event.pointerType=POINTER_TYPE_MOUSE;
}else if(/^touch/i.test(original.type)){
event.pointerType=POINTER_TYPE_TOUCH;
event.buttons=original.type==="touchend"||original.type==="touchcancel"?0:1;
}else if(/^mouse/i.test(original.type)||original.type==="click"){
event.pointerId=1;
event.pointerType=POINTER_TYPE_MOUSE;
event.buttons=original.type==="mouseup"?0:getStandardizedButtonsProperty(original);
}else{
event.pointerType=POINTER_TYPE_UNAVAILABLE;
event.buttons=0;
}
}



if(event.type!=="pointerdown"&&event.pointerType==="mouse"&&_touching===null&&_buttons!==event.buttons){
event.buttons=_buttons;
}


if(!event.pressure){
event.pressure=event.buttons>0?0.5:0;
}


if(event.width===undefined||event.height===undefined){
event.width=event.height=0;
}



event.preventClick=function(){
event.isClickPrevented=returnTrue;
$(event.target).one("click",returnFalse);
};

event.isClickPrevented=returnFalse;



if(original.touches&&event.type!=="pointercancel"){
var touches=original.touches;
var events=[];
var ev,i,j;





if(event.type==="pointerup"){

_lastTouches=Array.prototype.slice.call(_lastTouches);


for(i=0;i<original.touches.length;i++){
for(j=0;j<_lastTouches.length;j++){
if(_lastTouches[j].identifier===original.touches[i].identifier){
_lastTouches.splice(j,1);
}
}
}


if(_lastTouches.length===1){
event.pointerId=_lastTouches[0].identifier;
_lastTouches=original.touches;
return event;
}
}



else if(event.type==="pointerdown"){

touches=Array.prototype.slice.call(original.touches);


for(i=0;i<touches.length;i++){

for(j=0;j<_lastTouches.length;j++){
if(touches[i].identifier===_lastTouches[j].identifier){
touches.splice(i,1);
}
}
}
}


for(i=0;i<original.touches.length;i++){
var touch=original.touches[i];
ev=$.extend({},event);

ev.clientX=touch.clientX;
ev.clientY=touch.clientY;
ev.pageX=touch.pageX;
ev.pageY=touch.pageY;
ev.screenX=touch.screenX;
ev.screenY=touch.screenY;

ev.pointerId=touch.identifier;
events.push(ev);
}




_lastTouches=original.touches;
return events;
}

return event;
}
};

$.event.delegateSpecial=function(setup){
return function(handleObj){
var thisObject=this,
data=jQuery._data(thisObject);

if(!data.pointerEvents){
data.pointerEvents={};
}

if(!data.pointerEvents[handleObj.type]){
data.pointerEvents[handleObj.type]=[];
}

if(!data.pointerEvents[handleObj.type].length){
setup.call(thisObject,handleObj);
}

data.pointerEvents[handleObj.type].push(handleObj);
};
};

var indexOfArray=function(arr,obj){
if(arr.indexOf){
return arr.indexOf(obj);
}

for(var i=0;i<arr.length;i++){
if(arr[i]===obj){
return i;
}
}

return-1;
};

$.event.delegateSpecial.remove=function(teardown){
return function(handleObj){
var handlers,
thisObject=this,
data=jQuery._data(thisObject);

if(!data.pointerEvents){
data.pointerEvents={};
}

handlers=data.pointerEvents[handleObj.type];

handlers.splice(indexOfArray(handlers,handleObj),1);

if(!handlers.length){
teardown.call(thisObject,handleObj);
}
};
};


$.extend($.event.fixHooks,{
pointerdown:$.event.pointerHooks,
pointerup:$.event.pointerHooks,
pointermove:$.event.pointerHooks,
pointerover:$.event.pointerHooks,
pointerout:$.event.pointerHooks,
pointercancel:$.event.pointerHooks
});



if(!support.pointer){


var _startScrollOffset;


var scrollY=function(){
return Math.floor(window.scrollY||$(window).scrollTop());
};

$.event.special.pointerdown={
touch:function(event){

_touching=event.timeStamp;


triggerCustomEvent(this,"pointerdown",event);


_startScrollOffset=scrollY();



},
mouse:function(event){

if(typeof _touching==="number"){
return;
}


_touching=null;


var button=getStandardizedButtonsProperty(event);
var wasAButtonDownAlready=_buttons!==0;
_buttons|=button;



if(wasAButtonDownAlready&&_buttons!==button){

triggerCustomEvent(this,"pointermove",event);
return;
}

triggerCustomEvent(this,"pointerdown",event);
},
add:$.event.delegateSpecial(function(handleObj){

if(support.touch){
addEvent(this,"touchstart",handleObj.selector,$.event.special.pointerdown.touch);
}


addEvent(this,"mousedown",handleObj.selector,$.event.special.pointerdown.mouse);


handleObj.pointerup=$.noop;
$(this).on("pointerup",handleObj.selector,handleObj.pointerup);
}),
remove:$.event.delegateSpecial.remove(function(handleObj){

if(support.touch){
removeEvent(this,"touchstart",handleObj.selector,$.event.special.pointerdown.touch);
}


removeEvent(this,"mousedown",handleObj.selector,$.event.special.pointerdown.mouse);


if(handleObj.pointerup){
$(this).off("pointerup",handleObj.selector,handleObj.pointerup);
}
})
};

$.event.special.pointerup={
touch:function(event){

event.preventDefault();



if(_touching===null){
return;
}



var lastTouchStarted=_touching;


var jEvent=triggerCustomEvent(this,"pointerup",event);


if(!event.target){
_touching=false;
return;
}











if(_startScrollOffset!==scrollY()){
_touching=false;
return;
}















var clickTimer=setTimeout(function(){
if(_touching===lastTouchStarted){
_touching=false;
}



if(jEvent.isClickPrevented()){
$(event.target).off("click",returnFalse);
return;
}

if(event.target.click){
event.target.click();
}else{

$(event.target).click();
}
},300);

$(event.target).one("click",function(){
if(_touching===lastTouchStarted){
_touching=false;
}

if(clickTimer){
clearTimeout(clickTimer);
}
});
},
mouse:function(event){

if(_touching!==null){
return;
}


_buttons^=getStandardizedButtonsProperty(event);


if(_buttons===0){
triggerCustomEvent(this,"pointerup",event);
}else{

triggerCustomEvent(this,"pointermove",event);
}



},
add:$.event.delegateSpecial(function(handleObj){

if(support.touch){
addEvent(this,"touchend",handleObj.selector,$.event.special.pointerup.touch);
}


addEvent(this,"mouseup",handleObj.selector,$.event.special.pointerup.mouse);
}),
remove:$.event.delegateSpecial.remove(function(handleObj){

if(support.touch){
removeEvent(this,"touchend",handleObj.selector,$.event.special.pointerup.touch);
}


removeEvent(this,"mouseup",handleObj.selector,$.event.special.pointerup.mouse);
})
};

$.event.special.pointermove={
touch:function(event){
triggerCustomEvent(this,"pointermove",event);
},
mouse:function(event){




if(typeof _touching==="number"){
return;
}

triggerCustomEvent(this,"pointermove",event);
},
add:$.event.delegateSpecial(function(handleObj){

if(support.touch){
addEvent(this,"touchmove",handleObj.selector,$.event.special.pointermove.touch);
}


addEvent(this,"mousemove",handleObj.selector,$.event.special.pointermove.mouse);
}),
remove:$.event.delegateSpecial.remove(function(handleObj){

if(support.touch){
removeEvent(this,"touchmove",handleObj.selector,$.event.special.pointermove.touch);
}


removeEvent(this,"mousemove",handleObj.selector,$.event.special.pointermove.mouse);
})
};

jQuery.each({
pointerover:{
mouse:"mouseover"
},
pointerout:{
mouse:"mouseout"
},
pointercancel:{
touch:"touchcancel"
}
},function(pointerEventType,natives){
function onTouch(event){

if(event.type==="touchcancel"){
_touching=null;
_buttons=0;
}

triggerCustomEvent(this,pointerEventType,event);
}

function onMouse(event){
triggerCustomEvent(this,pointerEventType,event);
}

$.event.special[pointerEventType]={
setup:function(){
if(support.touch&&natives.touch){
addEvent(this,natives.touch,null,onTouch);
}
if(natives.mouse){
addEvent(this,natives.mouse,null,onMouse);
}
},
teardown:function(){
if(support.touch&&natives.touch){
removeEvent(this,natives.touch,null,onTouch);
}
if(natives.mouse){
removeEvent(this,natives.mouse,null,onMouse);
}
}
};
});
}



else if(navigator.msPointerEnabled&&!navigator.pointerEnabled){
$.extend($.event.special,{
pointerdown:{
delegateType:"MSPointerDown",
bindType:"MSPointerDown"
},
pointerup:{
delegateType:"MSPointerUp",
bindType:"MSPointerUp"
},
pointermove:{
delegateType:"MSPointerMove",
bindType:"MSPointerMove"
},
pointerover:{
delegateType:"MSPointerOver",
bindType:"MSPointerOver"
},
pointerout:{
delegateType:"MSPointerOut",
bindType:"MSPointerOut"
},
pointercancel:{
delegateType:"MSPointerCancel",
bindType:"MSPointerCancel"
}
});

$.extend($.event.fixHooks,{
MSPointerDown:$.event.pointerHooks,
MSPointerUp:$.event.pointerHooks,
MSPointerMove:$.event.pointerHooks,
MSPointerOver:$.event.pointerHooks,
MSPointerOut:$.event.pointerHooks,
MSPointerCancel:$.event.pointerHooks
});
}



if(!support.pointer||(navigator.msPointerEnabled&&!navigator.pointerEnabled)){


jQuery.each({
pointerenter:navigator.msPointerEnabled?"MSPointerOver":"mouseover",
pointerleave:navigator.msPointerEnabled?"MSPointerOut":"mouseout"
},function(orig,fix){
jQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;



if(!related||(related!==target&&!jQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
}

})(jQuery,window,document);
