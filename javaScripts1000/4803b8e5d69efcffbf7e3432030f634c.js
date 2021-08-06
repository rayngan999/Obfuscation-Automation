                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){


$.support.getBoundingClientRect="getBoundingClientRect"in document.documentElement;


function getWindow(elem){
return $.isWindow(elem)?
elem:
elem.nodeType===9?
elem.defaultView||elem.parentWindow:
false;
}


$.fn.clientRect=function(){
var rect={
top:0,
left:0,
width:0,
height:0,
bottom:0,
right:0
};

if(this.length===0){
return rect;
}

var elem=this[0];
var doc=elem.ownerDocument;
var docElem=doc.documentElement;
var box;


if(!$.contains(docElem,elem)){
return rect;
}


if($.support.getBoundingClientRect){

try{
box=elem.getBoundingClientRect();
}catch(e){



}

if(!box){
return rect;
}



if(box.right===box.left&&
box.top===box.bottom){
return rect;
}


var win=getWindow(doc);

rect.top=box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0);
rect.left=box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0);

rect.width=box.right-box.left;
rect.height=box.bottom-box.top;
}else{

if(this.css("display")=="none"){
return rect;
}

rect=this.offset();
rect.width=this.outerWidth();
rect.height=this.outerHeight();
}

rect.bottom=rect.top+rect.height;
rect.right=rect.left+rect.width;

return rect;
};

})(jQuery);
