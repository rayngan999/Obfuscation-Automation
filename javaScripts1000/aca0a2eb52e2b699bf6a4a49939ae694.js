                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

















(function($){

var _preventResize=false;
var _groups=[];
var _initialized=false;

$.fn.equalHeights=function(minHeight){
var $els=this;




callAndSupressInfiniteLoop(function(){equalHeightsInternal($els,minHeight);},true);


_groups.push({els:$els,minHeight:minHeight});

ensureResizeEventHandler();

return this;
};

var ensureResizeEventHandler=function(){
if(!_initialized){
$(window).on("resize",function(){callAndSupressInfiniteLoop(equalHeightsInternalAll);});
_initialized=true;
}
};








var callAndSupressInfiniteLoop=function(fn,force){
if(_preventResize&&!force){
return;
}

fn();

_preventResize=true;
window.setTimeout(function(){_preventResize=false;},1);
};

var equalHeightsInternalAll=function(){
$.each(_groups,function(i,group){
equalHeightsInternal(group.els,group.minHeight);
});
};

var equalHeightsInternal=function($els,minHeight){
$els.css("height","");

var tallest=minHeight||0;


$els.each(function(){
tallest=Math.max($(this).height(),tallest);
});



$els.css("height",tallest);
};


var initUnobtrusive=function(){




var $els=$("[data-equal-height-group]");
var map={};


$els.each(function(i,el){
var $el=$(el);
var name=$el.attr("data-equal-height-group");

var mapValue=map[name];
if(!mapValue){
mapValue={minHeight:0,els:[]};
map[name]=mapValue;
}

mapValue.els.push(el);

var specifiedMinHeight=parseInt($el.attr("data-equal-height-min"))||0;
mapValue.minHeight=Math.max(mapValue.minHeight,specifiedMinHeight);
});


for(var groupName in map){
var value=map[groupName];
$(value.els).equalHeights(value.minHeight);
}
};

$(initUnobtrusive);

})(jQuery);
