                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}






if(!vp)
{
var vp={};
}





if(!vp.logger)
{
vp.logger={};
}

(function $vpfn_jRYEEx5EuCfMyYITTuPlDg24$1($)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}






vp.logger.LOG_URL="/vp/ls/errorlogger.aspx";

vp.logger.Severity={
Debug:1,
Information:2,
Warning:3,
Error:4
};

var imagePing=function $vpfn_6eH9NGkrOZB3M9AvzbFrkQ41$16(src)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("<IMG>").attr("src",src);
};








vp.logger.logError=function $vpfn_pQQu5lNVn40i2vR2Q_qxVQ53$21(errorNumber,errorSource,errorDescription,errorSeverity)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var qs={};


if(typeof errorNumber=="number")
{
qs.number=errorNumber;
}


if(typeof errorSource=="string")
{
qs.source=errorSource;
}


if(typeof errorDescription=="string")
{
qs.description=errorDescription;
}


if(typeof errorSeverity=="number")
{
if(errorSeverity<1||errorSeverity>4)
{
throw new Error("vp.logger.logError(): Invalid severity: "+errorSeverity);
}
qs.severity=errorSeverity;
}

imagePing(vp.logger.LOG_URL+"?"+$.param(qs));
};





vp.logger.logMessage=function $vpfn_AZuabi75yft7OcoPn9RtfQ93$23(message)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!message)
{
throw new Error("vp.logger.logMessage(): Invalid or empty string cannot be logged.");
}


imagePing(vp.logger.LOG_URL+"?"+$.param({"description":message}));
};







vp.logger.loadTrackingPixel=function $vpfn_4$VuT0K3wSarSNDtPuFN6w110$30(url,pixelPartnerId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var startMs=new Date().getTime();




var load=function $vpfn_wvoA4JhXOnANi1CUFo0DRg117$15(isError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



var elapsedMs=(new Date()).getTime()-startMs;

var logUrl="/pixel-response-logger.aspx?ppid="+pixelPartnerId+"&t="+elapsedMs+"&sid="+window._vp_session_id||0;
if(isError)
{

logUrl+="&err=1";
}

$.ajax({
url:logUrl,
error:function(){}
});
};

vp.ui.loadImageAfterPageLoad(
url,
function $vpfn_jRYEEx5EuCfMyYITTuPlDg139$8(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}load(false);},
function $vpfn_jRYEEx5EuCfMyYITTuPlDg140$8(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}load(true);});
};

})(jQuery);