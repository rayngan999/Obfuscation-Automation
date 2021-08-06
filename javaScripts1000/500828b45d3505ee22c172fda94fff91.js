                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){





$.CustomEvent=function(host,eventType){
this._host=host;
this.eventType=eventType;
this._callbacks=new $.Callbacks();
};






$.CustomEvent.prototype.fire=function(data,host){
var evt=new $.Event(this.eventType);
$.extend(evt,data);
evt.data=$.extend({},evt.data,data);

this._callbacks.fireWith(host||this._host,[evt]);

return evt;
};





$.CustomEvent.prototype.add=function(callback){
if(callback){
this._callbacks.add(callback);
}
};


$.CustomEvent.prototype.one=function(callback){
if(!callback){
return;
}

var me=this;

var wrapper=$.proxy(function(){
try{
callback.apply(this,arguments);
}finally{
me.remove(wrapper);
}

},this);

this.add(wrapper);
};



$.CustomEvent.prototype.remove=function(callback){
if(callback){
this._callbacks.remove(callback);
}
};


$.CustomEvent.prototype.empty=function(){
this._callbacks.empty();
};





$.CustomEvent.create=function(host,eventType){
var onEventType="on"+eventType;
var evt=new $.CustomEvent(host,eventType);
host[onEventType]=evt;
return evt;
};

})(jQuery);
