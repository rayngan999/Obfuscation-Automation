                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}







(function $vpfn_AD5dSL0i14zI3$Zol935QQ9$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var STORAGE_KEY_PREFIX="htmlCache_";
var ONE_YEAR=1000*60*60*24*365;

var _restored=false;
var _domLoadComplete=false;

var isLocalStorageEnabled=function $vpfn_EHDe_0aOLD46FyI5cBJ33w17$32(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(!amplify.store.type||amplify.store.type=="memory"){
return false;
}


try{
amplify.store("test","1");
if(amplify.store("test")=="1"){
return true;
}
}
catch(ex){}

return false;
};


var restoreStylesheetCache=function $vpfn_Q6vuH9hlG72rj5qplYWAvg37$33($element){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($element.filter("[data-cached-stylesheets]").length>0){
var cachedStylesheets=$element.filter("[data-cached-stylesheets]").attr("data-cached-stylesheets").split(',');

jQuery.each(cachedStylesheets,function $vpfn_AD5dSL0i14zI3$Zol935QQ41$43(i,file){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("head").append('<link rel="stylesheet" type="text/css" href="'+file+'">');
});
}
};


var restoreJavascriptCache=function $vpfn_xxlvXDaZHzp6oXKEOD6Lrw48$33($element){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($element.filter("[data-cached-javascript]").length>0){
var cachedJavascript=$element.filter("[data-cached-javascript]").attr("data-cached-javascript").split(',');

jQuery.each(cachedJavascript,function $vpfn_AD5dSL0i14zI3$Zol935QQ52$42(i,file){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("body").append('<script type="text/javascript" src="'+file+'"></script>');
});
}
};





$.restoreHtmlCache=function $vpfn_p0ejpeWlEz$BTqQdY36QOQ62$25(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!document.body){
return;
}


if(_restored){
return;
}

_restored=true;

var sessionCacheToken=window._sessionCacheToken;


if(!sessionCacheToken){
return;
}


if(!isLocalStorageEnabled()){
return;
}


var elementIds=[];

try{
var $cacheEls=$("*[data-cache-id]");



if($cacheEls.length===0&&!_domLoadComplete){
_restored=false;
return;
}


$cacheEls.each(function $vpfn_AD5dSL0i14zI3$Zol935QQ101$27(i,el){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var $el=$(el);
var cacheId=$el.attr("data-cache-id");
var html=$el.html().trim();
var storageKey=STORAGE_KEY_PREFIX+cacheId;

if(!html){

html=amplify.store(storageKey);

if(html){

restoreStylesheetCache($(html));
$el.html(html);
restoreJavascriptCache($(html));
elementIds.push(cacheId);
}
}else{

amplify.store(storageKey,html,{expires:ONE_YEAR});


elementIds.push(cacheId);
}
});


$.cookies.set("htmlCache",{"t":sessionCacheToken,"i":elementIds.join(",")});

}catch(ex){
if(console&&console.log){
console.log("Local storage not available: "+ex.message);
}
}
};


$(document).ready(function $vpfn_AD5dSL0i14zI3$Zol935QQ138$22(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


_domLoadComplete=true;

$.restoreHtmlCache();
});

})(jQuery);

