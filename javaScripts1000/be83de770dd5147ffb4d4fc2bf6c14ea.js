                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}






if(typeof vp=="undefined"){
var vp={};
}





if(!vp.spot)
{
vp.spot={};
}

(function $vpfn_Oz9__LBShCUzmG_N9MjBIA23$1($)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}





var SPOT_URL="/vp/spot.aspx";

var pingSpotlight=function $vpfn_yQz0gpj_Mc_nEC0DxmtyTw32$24(sQueryString,callback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("<IMG>").attr("src",SPOT_URL+"?"+sQueryString).load(callback);
};







vp.spot.track=function $vpfn_wIou7RHgUZSsc8kZMNBe_A43$20(sCode,callback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sCode!="string"||sCode.length===0)
{
throw new Error("vp.spot.track(): The code to track is either null or an empty string.");
}


var oData={
"Log":1,
"vsref":sCode,
"xref":sCode,


"u":new Date().valueOf(),
"qs":window.location.search.slice(1)
};


pingSpotlight($.param(oData),callback);
};









vp.spot.trackWithQueryString=function $vpfn_LLPuROPSnZ4wlk9t7MpoTg73$35(sCode,sQueryString,callback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sCode!="string"||sCode.length===0)
{
throw new Error("vp.spot.track(): The code to track is either null or an empty string.");
}


var oData={
"Log":1,
"vsref":sCode,
"xref":sCode,


"u":new Date().valueOf(),
"qs":sQueryString
};


pingSpotlight($.param(oData),callback);
};







vp.spot.trackAbsolute=function $vpfn_E0MoFoqaWC2O8EhMhupFIA101$28(sCode,bAbsolute)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sCode!="string"||sCode.length===0)
{
throw new Error("vp.spot.trackAbsolute(): The code to track is either null or an empty string.");
}
if(typeof bAbsolute!="boolean"&&typeof bAbsolute!="number")
{
throw new Error("vp.spot.trackAbsolute(): The second argument must be either true (for absolute) or false (for relative).");
}


var oData={
"abs":bAbsolute?1:0,
"xref":sCode
};


pingSpotlight($.param(oData));
};
})(jQuery);