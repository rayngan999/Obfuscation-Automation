                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                /*! 
 * Pointy.js 
 * Pointer Events polyfill for jQuery 
 * https://github.com/vistaprint/PointyJS 
 * 
 * Depends on jQuery, see http://jquery.org 
 * 
 * Developed by Vistaprint.com 
 * 
 * pointy.gestures.js adds special events to jQuery for added fun. 
 */



(function($){


function copyEvent(originaljQEvent,type,extras){
var event=originaljQEvent;

event.type=type;
event.isPropagationStopped=function(){return false;};
event.isDefaultPrevented=function(){return false;};

if(extras){
$.extend(event,extras);
}

return event;
}


$.event.special.sweep={

scrollSupressionThreshold:30,


durationThreshold:750,


horizontalDistanceThreshold:30,


verticalDistanceThreshold:75,

start:function(event){
return{
time:+new Date(),
coords:[event.pageX,event.pageY],
origin:$(event.target)
};
},

stop:function(event){
return{
time:+new Date(),
coords:[event.pageX,event.pageY]
};
},

isSweep:function(start,stop,checkTime){
return(checkTime?stop.time-start.time<$.event.special.sweep.durationThreshold:true)&&
Math.abs(start.coords[0]-stop.coords[0])>$.event.special.sweep.horizontalDistanceThreshold&&
Math.abs(start.coords[1]-stop.coords[1])<$.event.special.sweep.verticalDistanceThreshold;
},

add:$.event.delegateSpecial(function(handleObj){
var thisObject=this,
$this=$(thisObject);

handleObj.pointerdown=function(event){
var start=$.event.special.sweep.start(event),
stop;







function move(event){
if(!start){
return;
}

stop=$.event.special.sweep.stop(event);


if(Math.abs(start.coords[0]-stop.coords[0])>$.event.special.sweep.scrollSupressionThreshold){
event.preventDefault();
}
}

function up(){
$this.off("pointermove",move);

if(start&&stop&&$.event.special.sweep.isSweep(start,stop,true)){
var dir=start.coords[0]>stop.coords[0]?"left":"right";

$.event.dispatch.call(thisObject,copyEvent(event,"sweep",{direction:dir}));
$.event.dispatch.call(thisObject,copyEvent(event,"sweep"+dir,{direction:dir}));
}

start=stop=undefined;
}

$this
.on("pointermove",move)
.one("pointerup",up);


setTimeout(function(){
$this
.off("pointermove",handleObj.selector,move)
.off("pointerup",handleObj.selector,up);
},$.event.special.sweep.durationThreshold);
};

$this.on("pointerdown",handleObj.selector,handleObj.pointerdown);
}),

remove:$.event.delegateSpecial.remove(function(handleObj){
$(this).off("pointerdown",handleObj.selector,handleObj.pointerdown);
})
};



$.each(["sweepleft","sweepright"],function(i,event){
$.event.special[event]={
add:$.event.delegateSpecial(function(handleObj){
handleObj.noop=$.noop;
$(this).on("sweep",handleObj.selector,handleObj.noop);
}),

remove:$.event.delegateSpecial.remove(function(handleObj){
$(this).off("sweep",handleObj.selector,handleObj.noop);
})
};
});


function scrollY(){
return window.scrollY||$(window).scrollTop();
}


$.event.special.press={
pressholdThreshold:750,

add:$.event.delegateSpecial(function(handleObj){
var thisObject=this;

handleObj.pointerdown=function(event){
var start=$.event.special.sweep.start(event),
startScroll=scrollY(),
stop,
timer,
origTarget=event.target,
isPresshold=false,
$this=$(this);


function move(e){
stop=$.event.special.sweep.stop(e);
}


function up(event){
clearTimeout(timer);



$this.off("pointermove",move);


if(Math.abs(startScroll-scrollY())>5){
return;
}


if(stop&&$.event.special.sweep.isSweep(start,stop)){
return;
}


if(!isPresshold&&origTarget===event.target){
$.event.dispatch.call(thisObject,copyEvent(event,"press"));
}


else if(isPresshold){
event.stopPropagation();
}
}

$this
.on("pointermove",move)
.one("pointerup",up);




timer=setTimeout(function(){

$this.off("pointermove",move);


isPresshold=true;


if(Math.abs(startScroll-scrollY())>5){
return;
}


if(stop&&$.event.special.sweep.isSweep(start,stop)){
return;
}


if(origTarget===event.target){
$.event.dispatch.call(thisObject,copyEvent(event,"presshold"));
}
},$.event.special.press.pressholdThreshold);
};

$(thisObject).on("pointerdown",handleObj.selector,handleObj.pointerdown);
}),

remove:$.event.delegateSpecial.remove(function(handleObj){
$(this).off("pointerdown",handleObj.selector,handleObj.pointerdown);
})
};


$.event.special.presshold={
add:$.event.delegateSpecial(function(handleObj){
handleObj.noop=$.noop;
$(this).on("press",handleObj.selector,handleObj.noop);
}),

remove:$.event.delegateSpecial.remove(function(handleObj){
$(this).off("press",handleObj.selector,handleObj.noop);
})
};

})(jQuery);
