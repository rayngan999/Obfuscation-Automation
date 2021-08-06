                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


(function($){
var OVER_TIMER='skinnyjs-hoverDelay-overTimer';
var OUT_TIMER='skinnyjs-hoverDelay-outTimer';

var _defaults={
over:$.noop,
out:$.noop,




delayOver:0,
delayOut:0,



touch:false,



addChildren:null
};

$.fn.hoverDelay=function(over,out,options){
if($.isPlainObject(over)){
options=over;
}else{
if(!options){
options={};
}

options.over=over;
options.out=out;
}

var _options=$.extend({},_defaults,options);

var useTimers=typeof _options.delayOver==='function'||_options.delayOver>0||_options.delayOut>0;

var clearTimers=function(el){
if(!useTimers){
return;
}

var overTimer=el.data(OVER_TIMER);
var outTimer=el.data(OUT_TIMER);

if(overTimer){
clearTimeout(overTimer);
el.data(OVER_TIMER,null);
}

if(outTimer){
clearTimeout(outTimer);
el.data(OUT_TIMER,null);
}
};

function pointerEnter(event){


event.stopPropagation();

if(_options.touch||!event.pointerType||event.pointerType!=='touch'){
var thisObject=this,
$this=$(thisObject);

clearTimers($this);

var call=function call(){
_options.over.call(thisObject,event);
};

var delay=_options.delayOver;

if(typeof delay==='function'){
delay=delay();
}

if(delay<=0){
call();
}else{
$this.data(OVER_TIMER,setTimeout(call,delay));
}
}
}

function pointerLeave(event){


event.stopPropagation();

if(_options.touch||!event.pointerType||event.pointerType!=='touch'){
var thisObject=this,
$this=$(thisObject);

clearTimers($this);

var call=function call(){
_options.out.call(thisObject,event);
};



if(_options.delayOut<=0){
call();
return;
}



$this.data(OUT_TIMER,setTimeout(function(){
$(document).off('pointermove',pointerMove);

if(pointerPosition){
var overElement=document.elementFromPoint(pointerPosition.x,pointerPosition.y);
if(thisObject===overElement||jQuery.contains(thisObject,overElement)||overAdditionalChildren(overElement)){
return;
}

pointerPosition=null;
}

call();
},_options.delayOut));

$(document).on('pointermove',pointerMove);
}
}


var pointerPosition;








function pointerMove(event){
pointerPosition={
x:event.clientX,
y:event.clientY
};
}


function overAdditionalChildren(overElement){

if(!_options.addChildren){
return false;
}


var children=Array.prototype.slice.call(_options.addChildren);

for(var i=0,l=children.length;i<l;i++){
var target=children[i];
if(target===overElement||jQuery.contains(target,overElement)){
return true;
}
}

return false;
}

return this.on({
'pointerenter':pointerEnter,
'pointerleave':pointerLeave
});
};

})(jQuery);



jQuery.each({
pointerenter:navigator.pointerEnabled?'pointerover':(navigator.msPointerEnabled?'MSPointerOver':'mouseover'),
pointerleave:navigator.pointerEnabled?'pointerout':(navigator.msPointerEnabled?'MSPointerOut':'mouseout')
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
