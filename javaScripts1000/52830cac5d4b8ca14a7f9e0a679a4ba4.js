
(function(W,D){
    var G_debug=0;
    		var console=window.console||{},Logger={},singleTone={};['log','warn','error','debug'].forEach(function(fnName){if(console[fnName]){Logger[fnName]=function(){if(G_debug){var data=[].slice.call(arguments),dt=new Date();data.unshift([dt.getHours(),dt.getMinutes(),dt.getSeconds()].join(':'));data.unshift('background: #1e5f24; color: #FFFFFF');data.unshift('%c AffinityPrebid ');console[fnName].apply(console,data)}}}else{Logger[fnName]=function(){}}});function getUTCSec(){return(new Date()).getTime()/1000}
function onReady(fn){var d=document,s="readyState",ae='attachEvent';if(("interactive"===d[s])||("complete"===d[s])){fn()}else{d[ae]?d[ae]("onreadystatechange",fn):d.addEventListener("readystatechange",fn)}}
var initAfInterval=(function(){var Page=new(function(){var
hidden='',arFn=[],handleVisibilityChange=function(){arFn.forEach(function(xfun,idx){xfun(document[hidden])})};this.isVisible=function(){return!document[hidden]};this.addOnChange=function(fn){var added=0;arFn.forEach(function(xfun,idx){if(xfun===fn){added=1}});if(0===added){arFn.push(fn)}};hidden=(function(handleVisibilityChange){var hidden,visibilityChange='';if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange"}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange"}
document.addEventListener(visibilityChange,handleVisibilityChange,!1);return hidden})(handleVisibilityChange)})();function InViewPort(el){var prev,el,lastRet;this.getVisPerc=function(){var
rc=el.getBoundingClientRect(),doc=document.documentElement,curPos=[rc.left,rc.top,rc.bottom,document.documentElement.clientHeight].join(),hh=(window.innerHeight||doc.clientHeight),ww=(window.innerWidth||doc.clientWidth);if(prev!=curPos){prev=curPos;if(0<rc.left&&0<rc.top&&rc.bottom<=hh&&rc.right<=ww){lastRet=100}else{var vs={l:0,t:0,b:0,r:0};vs.l=(0<rc.left)?rc.left:0;vs.t=(0<rc.top)?rc.top:0;vs.b=(hh<rc.bottom)?hh:rc.bottom;vs.r=(ww<rc.right)?ww:rc.right;var evementArea=rc.height*rc.width,visibleHeight=vs.b-vs.t,visibleWidth=vs.r-vs.l,visibleArea=visibleHeight*visibleWidth,visibleAreaPerc=100*visibleArea/evementArea;lastRet=(0<visibleAreaPerc)?visibleAreaPerc:-1}}
return lastRet}}
function AfInterval(option){Logger.log('Refresh: new AfInterval('+option.id+')');var fn=option.fn||!1,id=option.id||'',delaySec=option.delaySec||45,ardelaySec=[],mxCall=option.maxCall||5,currCall=0,minVisblePerc=option.minVisblePerc||60,active=1,lastVisTms=getUTCSec(),ele=document.getElementById(id),oView=ele?new InViewPort(ele):null;ardelaySec=Array.isArray(delaySec)?delaySec:[0+delaySec];delaySec=ardelaySec[0];if(!id){active=0;return};instCntAfInterval++;this.isDone=function(){return mxCall<=currCall};this.stop=function(){active=0};this.start=function(){active=1};this.checkNRefresh=function(nowSec){if(!ele){ele=document.getElementById(id);if(!ele){return}
oView=new InViewPort(ele)}
nowSec=nowSec||getUTCSec();if(active&&ele&&(currCall<=mxCall)&&Page.isVisible()&&((lastVisTms+delaySec)<=nowSec)){var visPerc=oView.getVisPerc();if(minVisblePerc<visPerc){lastVisTms=getUTCSec();if(currCall<mxCall){currCall++;Logger.log("Refresh: chkNRef",id,currCall,'/',mxCall);fn({curCall:currCall,totCall:mxCall,visPerc:visPerc,delaySec:delaySec});delaySec=ardelaySec[currCall%ardelaySec.length];if(currCall==mxCall){delete lstAfInterval[id];instCntAfInterval--}}else{delete lstAfInterval[id];instCntAfInterval--}}}};lstAfInterval[id]=this;if(!hnChkAll){hnChkAll=setInterval(checkNRefreshAll,500)}};function checkNRefreshAll(){if(instCntAfInterval<=0){Logger.log("Refresh: All done[1]");clearInterval(hnChkAll);return}
if((0<instCntAfInterval)&&Page.isVisible()){var x,nowSec=getUTCSec();for(x in lstAfInterval){if(lstAfInterval.hasOwnProperty(x)){lstAfInterval[x].checkNRefresh(nowSec)}}}}
Page.addOnChange(checkNRefreshAll);function mapOnScroll(){if(mapOnScroll.called){return}
mapOnScroll.called=1;document.body.onscroll=(function(){var ptm=(new Date()).getTime();return function(){var ctm=(new Date()).getTime();if((ptm+700)<ctm){checkNRefreshAll();ptm=ctm}}}())}
onReady(mapOnScroll);var lstAfInterval={},instCntAfInterval=0,hnChkAll=0;function initAfInterval_impl(option){option.id=option.id||'';if(''!==option.id){if(!singleTone[option.id]){singleTone[option.id]=new AfInterval(option)}
return singleTone[option.id]}}
return initAfInterval_impl})();function initAfIntervalPre(xSlot){var did=xSlot.getSlotElementId();if(!singleTone[did]){initAfInterval({id:did,fn:function(d){xSlot.setTargeting('afrf',d.curCall);googletag.pubads().refresh([xSlot])}})}}
function _aff_refresh_all_dfp(){googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().getSlots().forEach(function(xSlot){initAfIntervalPre(xSlot)});googletag.pubads().addEventListener('slotRequested',function(event){initAfIntervalPre(event.slot)})})}
_aff_refresh_all_dfp();  
})(window,document);
