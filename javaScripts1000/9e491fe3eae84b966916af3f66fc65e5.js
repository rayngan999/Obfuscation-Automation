                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}







jQuery.ns("vp.tagmanager");

vp.tagmanager.PageManager=new(function $vpfn_OOV0lPSrHB6_mOBRi2AlCQ11$33($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var init=function(){
};

me.load=function $vpfn_Ij$vejf0xP_Os$tryAlsZg17$14(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(document).on('onAnalyticsTagEvent',analyticsTagEventGlobalListener);
};


me.taggingLoaded=function $vpfn_q_usKhsXRHImKgI9hoEdhg22$23(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.tagmanager.TealiumManager.tealiumLoaded();
};


var analyticsTagEventGlobalListener=function $vpfn_usEb0sxVbW3v8lwYgiYERQ27$42(e,data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try{
if(me.taggingLoaded()){
routeEvent(data);
}
else{
if(data.Callback){
data.Callback();
}
}
}
catch(e){}
};

me.handleEvent=function $vpfn_pcZVqKhWXnrE3c416z1K8g41$21(data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.taggingLoaded()){
routeEvent(data);
}
};

me.eventQueue=[];
me.handleQueue=function $vpfn_PfUxw5$6SoMnTsAdBlPRAA48$21(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.taggingLoaded()){
for(var i=0;i<me.eventQueue.length;i++){
routeEvent(me.eventQueue[i]);
}
me.eventQueue=[];
}else if(me.eventQueue.length>0){
setTimeout(me.handleQueue,120);
}
};

me.handleLoadEvent=function $vpfn_Fttih4$EXlidywJI4MiJlA59$25(data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.eventQueue.push(data);
me.handleQueue();
};

var routeEvent=function $vpfn_Idx5d5UYG0YX3BfLXBu61g64$21(data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var tagActions={
'custom link':vp.tagmanager.TealiumManager.LinkTagAction,
'download link':vp.tagmanager.TealiumManager.LinkTagAction,
'exit link':vp.tagmanager.TealiumManager.LinkTagAction,
'custom view':vp.tagmanager.TealiumManager.ViewTagAction,
'custom event':vp.tagmanager.TealiumManager.CustomTagAction
};

if(data.EventType in tagActions){
tagActions[data.EventType](data);
}
};

init();

})(jQuery);