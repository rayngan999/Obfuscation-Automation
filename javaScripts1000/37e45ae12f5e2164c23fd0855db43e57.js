                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){


var _data=function($el,key,value){
return $[$._data?"_data":"data"]($el[0],key,value);
};



function ensureData($el,key,defaultObject){
var data=_data($el,key);
if(typeof data=="undefined"){
data=defaultObject||{};
_data($el,key,data);
}

return data;
}


function parseEventTypes(types){
return $.trim(types).split(" ");
}


$.fn.isEventDisabled=function(eventType){
return eventType in(_data(this,"eventsDisabled")||{});
};

var _initialized=false;
var _originalAddEvent;



function initialize(){
if(_initialized){
return;
}

_initialized=true;

_originalAddEvent=$.event.add;
$.event.add=addEvent;
}


var addEvent=function(elem,types,handler,data,selector){
var eventsDisabled=_data($(elem),"eventsDisabled");
if(eventsDisabled){
var eventTypes=parseEventTypes(types);
for(var i=eventTypes.length-1;i>=0;i--)
{
var eventType=eventTypes[i];

var disabledHandlers=eventsDisabled[eventType];
if(disabledHandlers){



if(handler.handler){
disabledHandlers.push(handler);
}else{
disabledHandlers.push({
handler:handler,
data:data,
selector:selector,
type:eventType
});
}


eventTypes.splice(i,1);
}
}


types=$.trim(eventTypes.join(" "));
if(!types){
return;
}
}

_originalAddEvent.call(this,elem,types,handler,data,selector);
};



$.fn.disableEvent=function(eventType){
initialize();


var eventTypes=parseEventTypes(eventType);


this.each(function(i,el){
var $el=$(el);



$.each(eventTypes,function(i,eventType){
var attr=$el.attr("on"+eventType.toLowerCase());
if(attr){

el["on"+eventType]=null;



$el.on(eventType,new Function("event",attr));
}
});


var events=_data($el,"events");
if(events){
$.each(eventTypes,function(i,eventType){

var handlers=events[eventType];
if(handlers){

handlers=handlers.slice(0);

var eventsDisabled=ensureData($el,"eventsDisabled");


var disabledHandlers=eventsDisabled[eventType];
if(!disabledHandlers){
disabledHandlers=[];
eventsDisabled[eventType]=disabledHandlers;
}

for(var j=0;j<handlers.length;j++){
disabledHandlers.push(handlers[j]);
$el.off(eventType,handlers[j].handler);
}
}
});
}
});
};


$.fn.enableEvent=function(eventType,enable){
if(typeof enable!="undefined"){
if(!enable){
this.disableEvent(eventType);
return;
}
}

this.each(function(i,el){
var $el=$(el);
var eventsDisabled=_data($el,"eventsDisabled");
if(eventsDisabled){
var eventTypes=parseEventTypes(eventType);
$.each(eventTypes,function(i,eventType){
var handlers=eventsDisabled[eventType];
if(handlers){
$.each(handlers,function(j,handler){
_originalAddEvent($el[0],eventType,handler);
});

delete eventsDisabled[eventType];
}
});
}
});
};

})(jQuery);
