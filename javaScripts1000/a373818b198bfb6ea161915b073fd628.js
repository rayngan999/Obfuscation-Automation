                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}




if(typeof vp=="undefined"){
var vp={};
}





vp.instrumentation={};

var LOGGING_MAX_LEN=65535;












if(!window.__MT)
{
var __MT=100;


var __ti=0;


var __td=[];
__td.length=__MT;
}



(function $vpfn_b9lYQfOfpOpGCKyWgM7Vvw45$1()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}






vp.instrumentation.getTrace=function $vpfn_XhCoTMHcY1vJGwKT8GiTzA53$34()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var MAX_SIZE=__MT;


var iFirstSlot=__ti+1;
if(iFirstSlot>=MAX_SIZE||!__td[iFirstSlot])
{
iFirstSlot=0;
}

var aOut=[];
aOut.push("<trace>");
var i=iFirstSlot;
var bLoopFinished=false;
var sLastFnName=null;


while(__td[i]&&(i<iFirstSlot||!bLoopFinished))
{
var args=__td[i];
var fn=__td[i].callee;
var sFnName=vp.instrumentation.getFunctionName(fn);

if(!fn.isVpEventsWrapper)
{
aOut.push("<f n=\"");
aOut.push(sFnName);
aOut.push("\"");

if(typeof(fn._eventHandlerId)!="undefined"&&sLastFnName=="vpEventHandlerWrapper")
{
var sEventType="unknown";
if(args&&args[0]&&args[0].type)
{
sEventType=args[0].type;
}
aOut.push(" eventhandler=\""+sEventType+"\" ");
}




if(fn._isErrorHandler)
{
aOut.push(" errorhandler=\"1\" ");
}

if(fn._isInstrumentationMethod)
{
aOut.push(" instrumentationmethod=\"1\" ");
}

sLastFnName=sFnName;

if(__td[i].length===0)
{
aOut.push("/>");
}
else
{
aOut.push(">");

for(var j=0;j<__td[i].length;j++)
{
aOut.push("<a>");
aOut.push(vp.instrumentation._basicXmlEncode(vp.instrumentation.objToString(__td[i][j],0).substr(0,255)));
aOut.push("</a>");
}

aOut.push("</f>");
}
}

sLastFnName=sFnName;

i++;
if(i>=MAX_SIZE)
{
i=0;
bLoopFinished=true;
}
}

aOut.push("</trace>");
return aOut.join("");
};





vp.instrumentation.objToString=function $vpfn_dgd7GgmvrfvebWqscow0Ew145$37(oObj,iRecurseLevel)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(iRecurseLevel)=="undefined")
{
iRecurseLevel=2;
}

if(typeof(oObj)=="object")
{
if(oObj===null)
{
return"{null}";
}
else if(iRecurseLevel===0)
{
return"{obj}";
}
else
{
var aValues=[];
for(var sProp in oObj)
{
var sValue=sProp+":";

try
{
sValue+=arguments.callee(oObj[sProp],iRecurseLevel-1);
}
catch(ex)
{
}

aValues.push(sValue);
}
return"{"+aValues.join(",")+"}";
}
}
if(typeof(oObj)=="function")
{
return vp.instrumentation.getFunctionName(oObj);
}
else if(typeof(oObj)=="string")
{
return'"'+oObj.replace(/\"/gi,"\\\"")+'"';
}
else if(typeof(oObj)=="undefined")
{
return"{undefined}";
}
else
{
return oObj+"";
}
};






vp.instrumentation.getFunctionName=function $vpfn_sIidsZ_Y$LETtnQXIWY_VQ205$41(fn)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(fn._vpfn)
{
return fn._vpfn;
}

var sName=fn.toString();
sName=sName.substr("function ".length);
sName=sName.substr(0,sName.indexOf('('));
return sName;
};

vp.instrumentation._basicXmlEncode=function $vpfn_7jjw18UgFsJElb$ydBpYhA218$41(sStr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(sStr)=="undefined"||sStr===null)
{
return"";
}
else
{
return sStr.replace(/\</gi,"&lt;").replace(/\>/gi,"&gt;").replace(/\&/gi,"&amp;");
}
};






vp.instrumentation.logError=function $vpfn_5zNgqvH$cm4JNO6TmCgCEw235$34(sMessage,iLineNum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.instrumentation._currentErrorHandler)
{
vp.instrumentation._currentErrorHandler(sMessage,document.location.href,iLineNum||0);
}
};

vp.instrumentation.logError._isInstrumentationMethod=true;





vp.instrumentation.wrapFunctionWithInstrumentation=function $vpfn_D8gICoTi0cQ4sUZgFrCM3A249$57(fn)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(typeof(fn)!="function")
{
return fn;
}


if(fn._isVpInstrumentedFunction===true)
{
return fn;
}

var fnWrapped=function $vpfn_LpCNOq3vr$cSiqpuiOY0Ow263$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{
fn.apply(this,arguments);
}
catch(ex)
{
vp.instrumentation.logException(ex);


throw new Error(ex.message+" "+VP_INSTRUMENTATION_ALREADY_LOGGED_MESSAGE,ex.fileName,ex.lineNumber);
}
};

fnWrapped._isVpInstrumentedFunction=true;

return fnWrapped;
};





vp.instrumentation.logException=function $vpfn_OK2hzR5SQe4nBlh5Soue$Q287$38(oException)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oException._wasLogged)
{
return;
}

oException._wasLogged=true;

if(vp.instrumentation._currentErrorHandler)
{

if(!oException.fileName)
{
var oFileInfo=vp.instrumentation._extractLineAndFileFromStack(oException);
oException.fileName=oFileInfo.fileName;
oException.lineNumber=oFileInfo.lineNumber;
}


if(!oException.fileName)
{
oException.fileName=oException.sourceURL;
}


if(!oException.lineNumber)
{
oException.lineNumber=oException.line;
}

vp.instrumentation._currentErrorHandler(oException.message,oException.fileName,oException.lineNumber);
}
};





vp.instrumentation._extractLineAndFileFromStack=function $vpfn_zFIj72bWN4vaRSxBvwCJGw326$54(oException)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oFileInfo={};

if(oException&&oException.stack)
{
try
{
var urlRegex=/((?:https?\:)?\/\/.*?):([0-9]*)/i;
var matches=urlRegex.exec(oException.stack);
if(matches&&matches.length>2)
{
oFileInfo.fileName=matches[1];
oFileInfo.lineNumber=matches[2];
}
}
catch(ex)
{
}
}
return oFileInfo;
};

vp.instrumentation.logException._isInstrumentationMethod=true;

vp.instrumentation.numberOfErrors=0;
vp.instrumentation.lastLoggedError=null;









vp.instrumentation.errorHandler=function $vpfn_PNME$4UwEkS5cTCJhSNTDA362$38(sMsg,sErrorUrl,iLineNum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

window.__noTrace=true;

try
{
var oErrData=vp.instrumentation.getErrorDataQueryString(sMsg,sErrorUrl,iLineNum);


if(oErrData)
{

if($!==jQuery)
{
oErrData.form.trace="<trace><f n='jQueryBonk3' /><f n='jQueryBonk2'><a>"
+vp.instrumentation.tagInspector('script')
+vp.instrumentation.objInspector($)
+"</a></f><f n='jQueryBonk1' errorhandler='true'/></trace>";
}

var sTrackingUrl="//"+window.location.host+"/vp/tracking/client-event-logger.aspx?"+jQuery.param(oErrData.queryString);
var sPostData=vp.instrumentation.serializeLogData(oErrData.form);

jQuery.ajax({
url:sTrackingUrl,
type:"post",
data:sPostData,
error:function(){}
});
}
}
catch(ex)
{
}

window.__noTrace=false;
return true;
};

vp.instrumentation.serializeLogData=function $vpfn_HqFc60EU8lzqvBBbSVg5TQ402$42(oPostData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sPostData=jQuery.param(oPostData);

if(sPostData.length>LOGGING_MAX_LEN)
{
oPostData.trace="<trace><fn n=\"Trace too long\" /></trace>";
sPostData=jQuery.param(oPostData);
}

return sPostData;
};

var VP_INSTRUMENTATION_ALREADY_LOGGED_MESSAGE="7389BF32-F154-444B-9FDA-8A6C61D10041";

vp.instrumentation.getErrorDataQueryString=function $vpfn_kel8wVkkBeDnkFYiYzUvHA417$49(sMsg,sErrorUrl,iLineNum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



var iNow=new Date().valueOf();
var lastErr=vp.instrumentation.lastLoggedError;

if(lastErr)
{




var isMeaninglessError=!sErrorUrl&&iLineNum===0;



var isRethrown=sMsg&&sMsg.indexOf(VP_INSTRUMENTATION_ALREADY_LOGGED_MESSAGE)>0;

if(isMeaninglessError||isRethrown||(sMsg==lastErr.message&&sErrorUrl==lastErr.errorUrl))
{
vp.instrumentation.lastLoggedError=null;
return null;
}
}

vp.instrumentation.lastLoggedError=
{
dateTime:iNow,
message:sMsg,
errorUrl:sErrorUrl,
lineNumber:iLineNum
};

var LOGGING_NUM_ERRORS_MAX=50;

vp.instrumentation.numberOfErrors++;
if(vp.instrumentation.numberOfErrors>LOGGING_NUM_ERRORS_MAX)
{
return null;
}

var oPostData={};
oPostData.message=sMsg;
oPostData.line=iLineNum;


if(!vp.instrumentation._populateErrorLogData(sMsg,sErrorUrl,iLineNum,oPostData))
{
return null;
}

var sQs=document.location.search;
if(sQs.length>1)
{
sQs=sQs.substring(1);
}

var oGetData={
d:new Date().toUTCString().replace("UTC","GMT"),
g:window._vp_page_guid,
s:window._vp_session_id,
e:window.VP_CLIENT_EVENT_TYPE_Error,
p:document.location.pathname,
b:navigator.userAgent,
q:sQs,
err:true,
u:sErrorUrl||""
};

if(window._vp_logical_page)
{
oGetData.lp=window._vp_logical_page;
}

return{
queryString:oGetData,
form:oPostData
};
};






vp.instrumentation.setErrorHandler=function $vpfn_Lg72XOmGJ0vgWTbyrGB1mw504$41(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
fnHandler._isErrorHandler=true;
vp.instrumentation._currentErrorHandler=fnHandler;
vp.instrumentation.addOnError(fnHandler);
};









vp.instrumentation._populateErrorLogData=function $vpfn_lnPGzpGH9eeV6AvA7ytilw519$47(sMessage,sErrorUrl,iLineNum,oData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oData.trace=vp.instrumentation.getTrace();
return true;
};





vp.instrumentation.testError=function $vpfn_7GZvu2k6H6ZLwb4LqfBnTg529$35(sMethodName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sMethodName)
{
sMethodName="testErrorUndefinedMethod";
}

var fn=vp.instrumentation.wrapFunctionWithInstrumentation(function $vpfn_b9lYQfOfpOpGCKyWgM7Vvw536$68()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
eval(sMethodName+"();");
});

fn();
};






vp.instrumentation.objInspector=function $vpfn_lf6BjDoSUcdW24nzGGq_GA549$38(obj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var details="vp.instrumentation.objToString: "+vp.instrumentation.objToString(obj,10)+";";

try
{
details+=" JSON.stringify:";
details+=JSON.stringify(obj);
}
catch(ex)
{
details+=" JSON.stringify failed:"+ex;
}


try
{
details+=" Class inspection:";
if(obj&&obj.constructor&&obj.constructor.toString)
{
var arr=obj.constructor.toString().match(/function\s*(\w+)/);
for(var i=0;i<arr.length;i++)
{
details+=i+"="+arr[i];
}
}
}
catch(ex)
{
details+=" Class inspection failed:"+ex;
}

try
{

if(vp.instrumentation.determineObj(obj))
{
details+=" Detailed inspection:";
if(obj!=undefined&&obj instanceof Object)
{
details+=" Detailed func inspection:";
for(var prop in obj)
{
if(obj[prop]instanceof Function)
{
details+=vp.instrumentation.detailedObjInspector(prop,obj[prop]);
}
}
}
}
}
catch(ex)
{
details+=" Detailed inspection failed:"+ex;
}

return details;
};






vp.instrumentation.determineObj=function $vpfn_8Ix4WX72fUFxQatY_cUPJw613$38(obj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(obj==undefined)
{
return false;
}
else
{
if(obj instanceof Object)
{

if((obj instanceof Boolean)||(obj instanceof Number)||(obj instanceof String)||
(obj instanceof Array)||(obj instanceof Date)||(obj instanceof Function))
{
return false;
}
else if(obj instanceof Object)
{
return true;
}
}
return false;
}
};






vp.instrumentation.tagInspector=function $vpfn_PqmOsYmjxfw$c3pyxo9mHQ643$38(tag)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var tags=document.getElementsByTagName(tag);
var scripts="Loaded Scripts: ";
for(var i=0;i<tags.length;i++)
{
scripts+=i+":"+tags[i].src+" ";
}
return scripts;
};






vp.instrumentation.detailedObjInspector=function $vpfn_5UF51Rf3KihDjHyY70LStg659$46(prop,obj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var details='';
if(obj==undefined)
{
details+="undefined";
}
else
{
details+=" type:"+(typeof obj).toString()+";Name:"+prop;

if(obj instanceof Object)
{

if(obj instanceof Boolean)
{
details+="boolean";
}
else if(obj instanceof Number)
{
details+="number";
}
else if(obj instanceof String)
{
details+="string";
}

else if(obj instanceof Array)
{
details+="array:interals:";
for(var j=0;j<obj.length;j++)
{
details+="cell["+j+"]="+obj[j];
}
}
else if(obj instanceof Date)
{
details+="date:"+obj;
}
else if(obj instanceof Function)
{
details+=" function-internals:"+obj.toString(0);
}
else if(obj instanceof Object)
{
details+="object";
}
}

else if(typeof obj)
{

if(typeof obj=="object")
{
if(typeof obj=="object"&&!obj)
{
details+="null";
}
}
else
{

if(typeof obj=="boolean")
{
details+="boolean:"+obj;
}
else if(typeof obj=="number")
{
details+="number:"+obj;
}
else if(typeof obj=="string")
{
details+="string:"+obj;
}
}
}
else
{
details+="undectectable"+obj;
}
}
return details;
};





vp.instrumentation.addOnError=function $vpfn_dvyEsR9eHrGfidEN5szGKw747$36(func)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oldonerror=window.onerror;
if(typeof window.onerror!='function')
{
window.onerror=func;
}
else
{
window.onerror=function $vpfn_KK4wVNMoV3P2C8DM0nKdbQ756$29(sMsg,sErrorUrl,iLineNum,col,obj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oldonerror)
{
oldonerror(sMsg,sErrorUrl,iLineNum,col,obj);
}
func(sMsg,sErrorUrl,iLineNum,col,obj);
};
}
};

if(!window.isDebug&&window._vp_log_client_errors)
{
vp.instrumentation.setErrorHandler(window._overrideInstrumentationErrorHandler||vp.instrumentation.errorHandler);
}


if(window._vp_log_client_errors&&vp.bootstrap)
{
vp.bootstrap.setExceptionLogger(vp.instrumentation.logException);
}

})(jQuery);


function showTrace()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.__noTrace=true;
alert(vp.instrumentation.getTrace());
window.__noTrace=false;
}showTrace._vpfn='$vpfn_K8bRU10nCtPUaw$bYqiXrg781$0';

