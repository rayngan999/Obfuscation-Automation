                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}







jQuery.ns("vp.tagmanager");

vp.tagmanager.TealiumManager=new(function $vpfn_FxMoPQkgGTnlwf3YC$yyRw11$36($)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var init=function $vpfn_Krhme7yyGuckRbPABN8FeA15$15(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.datalayerObj=window.utag_data;
};

me.load=function $vpfn_JXSN1brhw6lbEFHKFaeQ4Q19$14(mode,url,crossOriginEnabled){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.url=url;
var body=document.body||document.getElementsByTagName('body')[0];




var script=document.createElement("script");
script.src=me.url;
script.type="text/javascript";

if(crossOriginEnabled){
script.crossorigin="anonymous";
}

function SetScriptAsync(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
script.async=true;
};SetScriptAsync._vpfn='$vpfn_DQZ8lfkOircI7MAY_YsltQ34$8';

function AppendScript(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(body){
body.appendChild(script);
}
else{
document.documentElement.appendChild(script);
}
};AppendScript._vpfn='$vpfn_75ezZcat62ZbgnV2H7B02g38$8';

function getQueryStringValue(key){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return(typeof window!=="undefined"&&window.location&&window.location.search!==null)
?decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(key).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))
:null;
}getQueryStringValue._vpfn='$vpfn_4mK55rw10APnATalmsMvMA47$8';

function AppendScriptWithDelay(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var delay=parseInt(getQueryStringValue("tealium_load_delay_ms"))||10;

setTimeout(function $vpfn_FxMoPQkgGTnlwf3YC$yyRw57$21(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var delayWrapper=function $vpfn_yrQHsW2nPypKMNZv6LO14w58$31(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
AppendScript();
};
$.afterLoad(delayWrapper,10);
},delay);
};AppendScriptWithDelay._vpfn='$vpfn_868yRz0I$gonR9ic5oYpUQ53$8';

function IncludeSync(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
AppendScript();
};IncludeSync._vpfn='$vpfn_ayJ30scgZiVyKE8AHqEo7g65$8';

function IncludeAsync(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
SetScriptAsync();
AppendScript();
};IncludeAsync._vpfn='$vpfn_MVDPt2J_RUuB1yQyoVFgEw69$8';

function OnLoadSync(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
AppendScriptWithDelay();
};OnLoadSync._vpfn='$vpfn_pwUtVKjshL5KCWK$phhPAA74$8';

function OnLoadAsync(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
SetScriptAsync();
AppendScriptWithDelay();
};OnLoadAsync._vpfn='$vpfn_7zxCOKaDSvrHnWb72z1AKg78$8';

var loadMethod={
"INCLUDESYNC":IncludeSync,
"INCLUDEASYNC":IncludeAsync,
"ONLOADSYNC":OnLoadSync,
"ONLOADASYNC":OnLoadAsync
};

if(typeof mode==='string'||mode instanceof String){
mode=mode.toUpperCase();
if(mode in loadMethod){
loadMethod[mode]();
}
}

};

me.tealiumLoaded=function $vpfn_ODXwP1ABICQuQGIg67mYeA99$23(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return(typeof window.utag!=="undefined");
};



var AddData=function $vpfn_5BLhvnnXArpnJXZAqtETkw105$18(outputData,inputData){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(inputData){
for(var inputKey in inputData){
outputData[inputKey]=inputData[inputKey];
}
}
};




me.LinkTagAction=function $vpfn_omd2Ak4YnlhBiQVOE_xmMQ116$23(data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var linkData={};
linkData.link_type=data.EventType;
linkData.link_name=data.EventName;
linkData.EventName=data.EventName;
if(data.CustomEventData){
AddData(linkData,data.CustomEventData);
}
window.utag.link(linkData);
};



me.CustomTagAction=function $vpfn_GbU5hPw2EKE_5EBtzIgyUg129$25(data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(data.CustomEventData){
window.utag.track(data.EventName,data.CustomEventData);
}
else{
var emptyData={};
window.utag.track(data.EventName,emptyData);
}
};



me.ViewTagAction=function $vpfn_KszkG5AaVxub_CFPtqgXWg141$23(data){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(data.CustomEventData){
window.utag.view(data.CustomEventData);
}
};

init();

})(jQuery);
