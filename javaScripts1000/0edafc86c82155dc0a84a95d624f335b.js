/* resize image */
function ResizeImages(selector, maxWidth) {
    $(selector + " img").each(function() {
        var iwidth = $(this).width();
        var iheight = $(this).height();
        var i_height = Math.round((maxWidth / iwidth) * iheight);
        if (iwidth > maxWidth) {
            $(this).attr("height", i_height);
            $(this).attr("width", maxWidth);
            $(this).removeAttr("class")
            $(this).css("height", i_height + "px");
            $(this).css("width", maxWidth + "px");
        }
    });
}


/* jquery cookie */
;(function(factory){var registeredInModuleLoader;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true;}
if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true;}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function decode(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);}
function init(converter){function api(){}
function set(key,value,attributes){if(typeof document==='undefined'){return;}
attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){attributes.expires=new Date(new Date()*1+attributes.expires*864e+5);}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{var result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
value=converter.write?converter.write(value,key):encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);key=encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue;}
stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue;}
stringifiedAttributes+='='+attributes[attributeName].split(';')[0];}
return(document.cookie=key+'='+value+stringifiedAttributes);}
function get(key,json){if(typeof document==='undefined'){return;}
var jar={};var cookies=document.cookie?document.cookie.split('; '):[];var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(!json&&cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=decode(parts[0]);cookie=(converter.read||converter)(cookie,name)||decode(cookie);if(json){try{cookie=JSON.parse(cookie);}catch(e){}}
jar[name]=cookie;if(key===name){break;}}catch(e){}}
return key?jar[key]:jar;}
api.set=set;api.get=function(key){return get(key,false);};api.getJSON=function(key){return get(key,true);};api.remove=function(key,attributes){set(key,'',extend(attributes,{expires:-1}));};api.defaults={};api.withConverter=init;return api;}
return init(function(){});}));



// jquery iframe tracker
/* 
(function($){$.fn.iframeTracker=function(handler){var target=this.get();if(handler===null||handler===false){$.iframeTracker.untrack(target);}else if(typeof handler=="object"){$.iframeTracker.track(target,handler);}else{throw new Error("Wrong handler type (must be an object, or null|false to untrack)");}};$.iframeTracker={focusRetriever:null,focusRetrieved:false,handlersList:[],isIE8AndOlder:false,init:function(){try{if($.browser.msie==true&&$.browser.version<9){this.isIE8AndOlder=true;}}catch(ex){try{var matches=navigator.userAgent.match(/(msie) ([\w.]+)/i);if(matches[2]<9){this.isIE8AndOlder=true;}}catch(ex2){}}
$(window).focus();$(window).blur(function(e){$.iframeTracker.windowLoseFocus(e);});$('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');this.focusRetriever=$('#focus_retriever');this.focusRetrieved=false;$(document).mousemove(function(e){if(document.activeElement&&document.activeElement.tagName=='IFRAME'){$.iframeTracker.focusRetriever.focus();$.iframeTracker.focusRetrieved=true;}});if(this.isIE8AndOlder){this.focusRetriever.blur(function(e){e.stopPropagation();e.preventDefault();$.iframeTracker.windowLoseFocus(e);});$('body').click(function(e){$(window).focus();});$('form').click(function(e){e.stopPropagation();});try{$('body').on('click','form',function(e){e.stopPropagation();});}catch(ex){console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: "+ex.message+")");}}},track:function(target,handler){handler.target=target;$.iframeTracker.handlersList.push(handler);$(target).bind('mouseover',{handler:handler},$.iframeTracker.mouseoverListener).bind('mouseout',{handler:handler},$.iframeTracker.mouseoutListener);},untrack:function(target){if(typeof Array.prototype.filter!="function"){console.log("Your browser doesn't support Array filter, untrack disabled");return;}
$(target).each(function(index){$(this).unbind('mouseover',$.iframeTracker.mouseoverListener).unbind('mouseout',$.iframeTracker.mouseoutListener);});var nullFilter=function(value){return value===null?false:true;};for(var i in this.handlersList){for(var j in this.handlersList[i].target){if($.inArray(this.handlersList[i].target[j],target)!==-1){this.handlersList[i].target[j]=null;}}
this.handlersList[i].target=this.handlersList[i].target.filter(nullFilter);if(this.handlersList[i].target.length==0){this.handlersList[i]=null;}}
this.handlersList=this.handlersList.filter(nullFilter);},mouseoverListener:function(e){e.data.handler.over=true;try{e.data.handler.overCallback(this);}catch(ex){}},mouseoutListener:function(e){e.data.handler.over=false;$.iframeTracker.focusRetriever.focus();try{e.data.handler.outCallback(this);}catch(ex){}},windowLoseFocus:function(event){for(var i in this.handlersList){if(this.handlersList[i].over==true){try{this.handlersList[i].blurCallback();}catch(ex){}}}}};$(document).ready(function(){$.iframeTracker.init();});})(jQuery);
var reference="https://tin"+"tay"+"nguyen.com",blocked=["t"+"ayn"+"guyen.plus"],i;for(i in blocked)if(location.hostname==blocked[i]){window.location.href=reference;break};	
*/