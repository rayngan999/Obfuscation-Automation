                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


(function(){





if(window._skipLoad&&window._skipLoad.backbone){return;}







(function(){

var globalEventFunctions=
{
triggerGlobal:function()
{
Backbone.trigger.apply(Backbone,arguments);
},

onGlobal:function()
{
Backbone.on.apply(Backbone,arguments);
},

offGlobal:function()
{
Backbone.off.apply(Backbone,arguments);
},

onceGlobal:function()
{
Backbone.once.apply(Backbone,arguments);
},


listenToGlobal:function()
{
var args=_.toArray(arguments);
args.unshift(Backbone);
this.listenTo.apply(this,args);
},

stopListeningGlobal:function()
{
var args=_.toArray(arguments);
args.unshift(Backbone);
this.stopListening.apply(this,args);
}
};


_.extend(Backbone.Model.prototype,globalEventFunctions);
_.extend(Backbone.Collection.prototype,globalEventFunctions);
_.extend(Backbone.View.prototype,globalEventFunctions);
_.extend(Backbone.Events,globalEventFunctions);

})();







Backbone.Model.prototype.toJSON=function()
{
var json=_.clone(this.attributes);
_.each(json,function(value,name)
{
if(value&&_.isFunction(value.toJSON))
{
json[name]=value.toJSON();
}
});
return json;
};

































Backbone.ComputedPropertyMixin=
{

get:function(attr)
{
var computed=this._computed[attr];
if(computed)
{
return computed.get.call(this);
}
return this.attributes[attr];
},

createComputedProperty:function(options)
{
var defaults={
attr:"",
get:function(){},
bindings:[]
};
options=_.extend(defaults,options);


var triggerChange=function()
{
this.trigger("change:"+options.attr);
this.trigger("change");
};


var listen=function(method)
{
for(var i=0;i<options.bindings.length;i++)
{
var eventType=options.bindings[i].eventType?options.bindings[i].eventType:"change";

if(options.bindings[i].attribute)
{
options.bindings[i].model[method](eventType+":"+options.bindings[i].attribute,triggerChange,this);
}
else
{
options.bindings[i].model[method](eventType,triggerChange,this);
}
}
};

listen.call(this,"on");


this.on("destroy",listen.bind(this,"off"));


if(!this._computed)
{
this._computed={};
}
this._computed[options.attr]={get:options.get,bindings:options.bindings};
}
};








Backbone.Model.prototype.bindAttribute=function(model,modelAttribute,myAttribute)
{
if(!myAttribute)
{
myAttribute=modelAttribute;
}

var self=this;

this.set(myAttribute,model.get(modelAttribute),{silent:true});

this.listenTo(model,"change:"+modelAttribute,function()
{
self.set(myAttribute,model.get(modelAttribute));
});

this.on("destroy",function(){
this.stopListening(model,"change:"+modelAttribute);
});
};









Backbone.NestedCollection=Backbone.Collection.extend({



_prepareModel:function(model,options)
{
options=options||{};
options.parent=this.parent;

if(!(model instanceof Backbone.Model))
{
var attrs=model;
if(attrs.Model)
{
model=new(eval(attrs.Model))(attrs,options);
}
else
{
model=new this.model(attrs,options);
}
}

model.parent=this.parent;

return model;
}
});




Backbone.AncestorByTypeMixin=
{
getAncestorByType:function(type)
{
var parent=this.parent;

while(parent)
{
if(parent instanceof type)
{
return parent;
}
parent=parent.parent;
}

return null;
}
};








Backbone.NestedModel=Backbone.Model.extend({

initialize:function(attrs,options)
{
if(options&&options.parent)
{
this.parent=options.parent;
}

for(var attrKey in this.attributes)
{
var attrValue=this.attributes[attrKey];
if(_.isArray(attrValue)&&this[attrKey])
{
var collection=this[attrKey];
collection.parent=this;
collection.reset(attrValue);



this.set(attrKey,collection,{silent:true});


collection.on(
"change add remove reset",
function(model)
{
this.trigger("change",model);
},
this);
}
else if(_.isObject(attrValue)&&attrValue.Model)
{
this[attrKey]=new(eval(attrValue.Model))(attrValue,{parent:this});
this.set(attrKey,this[attrKey],{silent:true});
this[attrKey].parent=this;


this[attrKey].on(
"change reset",
function(model)
{
this.trigger("change",model);
},
this);
}
}
}

});

_.extend(Backbone.NestedModel.prototype,Backbone.AncestorByTypeMixin);
































Backbone.maintainSortOrder=function(collection,sortOrder)
{


var getSortToken=function()
{
return _.pluck(collection.models,"cid").join(",");
};


var lastTaskSortToken=getSortToken();


collection.on(
"change",
function()
{

collection.sort();



var newTaskSortToken=getSortToken();
if(lastTaskSortToken!=newTaskSortToken)
{
lastTaskSortToken=newTaskSortToken;

collection.trigger("sort",collection);
}
},
collection);







collection.comparator=function(a,b)
{
for(var prop in sortOrder)
{
var asc=(sortOrder[prop].order&&sortOrder[prop].order=="desc")?-1:1;
var map=sortOrder[prop].map||function(x){return x;};

var valA=map(a.get(prop));
var valB=map(b.get(prop));

if(valA!=valB)
{
return(valA>valB?1:-1)*asc;
}
}

return 0;
};
};

















Backbone.ReplaceElementMixin=
{
replaceElement:function(htmlOrElement)
{
var $newEl=$(htmlOrElement);

if(this.$el.length>0)
{
this.$el.replaceWith($newEl);
}

this.setElement($newEl);
}
};







(function()
{

var methodMap={
'create':'POST',
'update':'PUT',
'delete':'DELETE',
'read':'GET'
};

Backbone.syncMs=function(method,model,options)
{
var params={
type:methodMap[method],
data:model,
url:model.url()
};


return $.msAjax(_.extend(params,options));
};

})();





Backbone.extend=Backbone.Model.extend;







Backbone.Application=function()
{
this.initialize.apply(this,arguments);
};

Backbone.Application.extend=Backbone.Model.extend;

_.extend(Backbone.Application.prototype,Backbone.Events);








(function()
{
var routeStripper=/^[#\/]/;

Backbone.History.prototype.getFragment=function(fragment,forcePushState)
{
if(fragment==null)
{
if(this._hasPushState||forcePushState)
{
fragment=window.location.pathname;
var search=window.location.search;
if(search)fragment+=search;
}
else
{
fragment=window.location.hash;
}
}
if(this.options&&!fragment.indexOf(this.options.root))fragment=fragment.substr(this.options.root.length);
return fragment.replace(routeStripper,'');
};

})();





(function()
{
Backbone.History.prototype.navigate=function(fragment,options)
{
if(!Backbone.History.started)return false;
if(!options||options===true)options={trigger:options};
fragment=this.getFragment(fragment||'');
if(this.fragment===fragment)return;
this.fragment=fragment;
var url=this.root+fragment;


if(this._hasPushState){
this.history[options.replace?'replaceState':'pushState']({},document.title,url);



}else if(this._wantsHashChange){
this._updateHash(this.location,fragment,options.replace);
if(this.iframe&&(fragment!==this.getFragment(this.getHash(this.iframe)))){



if(!options.replace)this.iframe.document.open().close();
this._updateHash(this.iframe.location,fragment,options.replace);
}



}else{
return this.location.assign(url);
}
if(options.trigger)this.loadUrl(fragment);
};

})();



















Backbone.emulateHTTP=true;

})();