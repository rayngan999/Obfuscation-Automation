                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){






$.fn.fillClosest=function(src,closestSelector,callback){
this.each(function(){
var img=this;

var callbackWrapper=function(size){
var css=fillClosest.call(img,size,closestSelector);
$(img).css(css);

if(callback){
callback.call(img,size);
}
};

$.naturalSize(src,callbackWrapper);
});

this.attr("src",src);

return this;
};

var fillClosest=function(rect,closestSelector){
var aspectRatio=rect.width/rect.height;
var $container=$(this).closest(closestSelector);
var containerHeight=$container.height();
var containerWidth=$container.width();
var containerAspectRatio=containerWidth/containerHeight;
var scale;
var margin=0;


if(containerAspectRatio<aspectRatio){
scale=Math.round(aspectRatio/containerAspectRatio*100);

if(scale>100){
margin=Math.round((scale-100)/2);
}

return{
"margin-top":0,
"margin-left":-margin+"%",
"width":scale+"%"
};
}

else{
scale=Math.round(containerAspectRatio/aspectRatio*100);

if(scale>100){
margin=Math.round((scale-100)/2);
}

return{
"margin-left":0,
"margin-top":-margin+"%",
"width":"100%"
};
}
};






$.fn.fitToBoundingBox=function(src,boundingBox,callback,error){
this.each(function(){
var img=this;

var callbackWrapper=function(size){
var boundedSize=$.fitToBoundingBox(size,boundingBox);
$(img).css(boundedSize);

if(callback){
callback.call(img,boundedSize);
}
};

$.naturalSize(src,callbackWrapper,error);
});

this.attr("src",src);

return this;
};

$.fitToBoundingBox=function(rect,boundingBox){
var aspectRatio=rect.width/rect.height;
return $.rectWithAspectRatio(boundingBox,aspectRatio);
};






$.naturalSize=function(src,success,error){
var deferred=new $.Deferred();

var img=new Image();

var successWrapper=function(){





window.setTimeout(
function(){
var size={
width:img.width,
height:img.height
};

deferred.resolveWith(this,[size]);

if(success){
success(size);
}
},
0);
};

img.onload=successWrapper;
img.onerror=function(e){
deferred.reject(e);

if(error){
error(e);
}
};

img.src=src;

return deferred.promise();
};



$.rectWithAspectRatio=function(containerRect,aspectRatio){
var rect={
top:0,
left:0,
width:containerRect.width,
height:containerRect.height
};

var containerAspectRatio=containerRect.width/containerRect.height;

if(containerAspectRatio<aspectRatio){
rect.height=Math.round(rect.width/aspectRatio);
}else{
rect.width=Math.round(rect.height*aspectRatio);
}

rect.left=(containerRect.width-rect.width)/2;
rect.top=(containerRect.height-rect.height)/2;
rect.right=rect.left+rect.width;
rect.bottom=rect.top+rect.height;

return rect;
};

})(jQuery);
