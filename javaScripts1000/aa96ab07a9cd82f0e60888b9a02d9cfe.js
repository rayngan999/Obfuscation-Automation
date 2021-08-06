                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}







if(!vp)
{
var vp={};
}

if(!vp.ui)
{
vp.ui={};
}

(function $vpfn_lxEu12ncRvMvn9e2kqKzmg19$1($)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var _loadComplete=false;

var DEPRIORITIZE_DELAY=10;

$(window).on("load",
function $vpfn_lxEu12ncRvMvn9e2kqKzmg27$4(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_loadComplete=true;
});



$.afterLoad=function $vpfn_vvmdY3n0NKuxqjYQ6X_PuA33$14(callback,delay)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(delay)!="number"||delay<0)
{
delay=0;
}

if(_loadComplete)
{
callback();
}
else
{
$(window).on(
"load",
function $vpfn_lxEu12ncRvMvn9e2kqKzmg48$12()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
setTimeout(callback,delay);
_loadComplete=true;
});
}
};

var logPixel=function $vpfn_bhsiKNyx2$SJDN_rMfkwjw56$15(url)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!!$.currentQueryString()["debugpixels"])
{
if(window.console)
{
window.console.log('debug pixel: '+url);
}
}
};








vp.ui.loadScriptAfterPageLoad=function $vpfn_oBKn_m$va_bo9lxerjGbpQ74$32(url,success,error)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var successWrapper=_.isFunction(success)?vp.instrumentation.wrapFunctionWithInstrumentation(success):null;
var errorWrapper=_.isFunction(error)?vp.instrumentation.wrapFunctionWithInstrumentation(error):null;

logPixel(url);

$.afterLoad(
function $vpfn_lxEu12ncRvMvn9e2kqKzmg82$8()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$.ajax({
url:url,
dataType:"script",
cache:true,
success:successWrapper,
error:errorWrapper
});
},
DEPRIORITIZE_DELAY);
};








vp.ui.loadImageAfterPageLoad=function $vpfn_5TlkoNBNk_5$ZbGaRrgo0g102$31(url,success,error)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
logPixel(url);

var wrapper=function $vpfn_ha9DWuER8T4pQqJtCmwyTw106$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var $img=$("<img />")
.attr("src",url)
.css({display:"none"});

if(success)
{
$img.on("load",success);
}

if(error)
{
$img.on("error",error);
}

$img.appendTo(document.body);
};

$.afterLoad(wrapper,DEPRIORITIZE_DELAY);
};






vp.ui.loadIFrameAfterPageLoad=function $vpfn_UauNXX_BThYQHHvdxrDvTQ133$32(url)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
logPixel(url);

var wrapper=function $vpfn_ha9DWuER8T4pQqJtCmwyTw137$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var $iframe=$("<iframe />")
.attr("src",url)
.css({display:"none"})
.appendTo(document.body);
};

$.afterLoad(wrapper,DEPRIORITIZE_DELAY);
};

})(jQuery);