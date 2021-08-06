                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){
var DOCUMENT_NODE=9;


$.fn.hostIframe=function(){
return this.map(function(index,doc){

if(doc.nodeType!=DOCUMENT_NODE){
throw new Error("Element is not a document");
}

var win=doc.defaultView?doc.defaultView:doc.parentWindow;

try{
if(win&&win.frameElement){
return win.frameElement;
}
}catch(e){

}

return null;
});
};


$.fn.iframeDocument=function(){
return this.map(function(index,iframe){
try{
return iframe.contentWindow.document;
}catch(ex){
return null;
}
});
};


$.fn.iframeWindow=function(){
return this.map(function(index,iframe){
return iframe.contentWindow;
});
};

})(jQuery);
