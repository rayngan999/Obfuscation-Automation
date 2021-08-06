var bb={success:0,error:0,blackberryTimeoutId:-1};function handleBlackBerryLocationTimeout()
{if(bb.blackberryTimeoutId!=-1){bb.error({message:"Timeout error",code:3});}}
function handleBlackBerryLocation()
{clearTimeout(bb.blackberryTimeoutId);bb.blackberryTimeoutId=-1;if(bb.success&&bb.error){if(blackberry.location.latitude==0&&blackberry.location.longitude==0){bb.error({message:"Position unavailable",code:2});}
else
{var timestamp=null;if(blackberry.location.timestamp)
{timestamp=new Date(blackberry.location.timestamp);}
bb.success({timestamp:timestamp,coords:{latitude:blackberry.location.latitude,longitude:blackberry.location.longitude}});}
bb.success=null;bb.error=null;}}
window.geoPosition=function(){var pub={};var provider=null;var u="undefined";var ipGeolocationSrv='http://freegeoip.net/json/?callback=JSONPCallback';pub.getCurrentPosition=function(success,error,opts)
{provider.getCurrentPosition(success,error,opts);}
pub.jsonp={callbackCounter:0,fetch:function(url,callback){var fn='JSONPCallback_'+this.callbackCounter++;window[fn]=this.evalJSONP(callback);url=url.replace('=JSONPCallback','='+fn);var scriptTag=document.createElement('SCRIPT');scriptTag.src=url;document.getElementsByTagName('HEAD')[0].appendChild(scriptTag);},evalJSONP:function(callback){return function(data){callback(data);}}}
pub.init=function()
{try
{if((typeof(geoPositionSimulator)!=u)&&(geoPositionSimulator.length>0)){provider=geoPositionSimulator;}else if(typeof(bondi)!=u&&typeof(bondi.geolocation)!=u){provider=bondi.geolocation;}else if(typeof(navigator.geolocation)!=u){provider=navigator.geolocation;pub.getCurrentPosition=function(success,error,opts){function _success(p){var params;if(typeof(p.latitude)!=u){params={timestamp:p.timestamp,coords:{latitude:p.latitude,longitude:p.longitude}};}else{params=p;}
success(params);}
provider.getCurrentPosition(_success,error,opts);}}else if(typeof(window.blackberry)!=u&&blackberry.location.GPSSupported){if(typeof(blackberry.location.setAidMode)==u){return false;}
blackberry.location.setAidMode(2);pub.getCurrentPosition=function(success,error,opts)
{bb.success=success;bb.error=error;if(opts['timeout']){bb.blackberryTimeoutId=setTimeout("handleBlackBerryLocationTimeout()",opts['timeout']);}else{bb.blackberryTimeoutId=setTimeout("handleBlackBerryLocationTimeout()",60000);}
blackberry.location.onLocationUpdate("handleBlackBerryLocation()");blackberry.location.refreshLocation();}
provider=blackberry.location;}else if(typeof(Mojo)!=u&&typeof(Mojo.Service.Request)!="Mojo.Service.Request"){provider=true;pub.getCurrentPosition=function(success,error,opts){parameters={};if(opts){if(opts.enableHighAccuracy&&opts.enableHighAccuracy==true){parameters.accuracy=1;}
if(opts.maximumAge){parameters.maximumAge=opts.maximumAge;}
if(opts.responseTime){if(opts.responseTime<5){parameters.responseTime=1;}else if(opts.responseTime<20){parameters.responseTime=2;}else{parameters.timeout=3;}}}
r=new Mojo.Service.Request('palm://com.palm.location',{method:"getCurrentPosition",parameters:parameters,onSuccess:function(p){success({timestamp:p.timestamp,coords:{latitude:p.latitude,longitude:p.longitude,heading:p.heading}});},onFailure:function(e){if(e.errorCode==1){error({code:3,message:"Timeout"});}else if(e.errorCode==2){error({code:2,message:"Position unavailable"});}else{error({code:0,message:"Unknown Error: webOS-code"+errorCode});}}});}}
else if(typeof(device)!=u&&typeof(device.getServiceObject)!=u){provider=device.getServiceObject("Service.Location","ILocation");pub.getCurrentPosition=function(success,error,opts){function callback(transId,eventCode,result){if(eventCode==4){error({message:"Position unavailable",code:2});}else{success({timestamp:null,coords:{latitude:result.ReturnValue.Latitude,longitude:result.ReturnValue.Longitude,altitude:result.ReturnValue.Altitude,heading:result.ReturnValue.Heading}});}}
var criteria=new Object();criteria.LocationInformationClass="BasicLocationInformation";provider.ILocation.GetLocation(criteria,callback);}}else{pub.getCurrentPosition=function(success,error,opts){pub.jsonp.fetch(ipGeolocationSrv,function(p){success({timestamp:p.timestamp,coords:{latitude:p.latitude,longitude:p.longitude,heading:p.heading}});});}
provider=true;}}
catch(e){if(typeof console!='undefined'){console.log(e);}
return false;}
return provider!=null;}
return pub;}();;