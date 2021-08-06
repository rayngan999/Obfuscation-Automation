var JSON;JSON||(JSON={}),function($){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,a,r,o,s=gap,c=t[e];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(c)){for(r=c.length,n=0;r>n;n+=1)o[n]=str(n,c)||"null";return a=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+s+"]":"["+o.join(",")+"]",gap=s,a}if(rep&&"object"==typeof rep)for(r=rep.length,n=0;r>n;n+=1)i=rep[n],"string"==typeof i&&(a=str(i,c),a&&o.push(quote(i)+(gap?": ":":")+a));else for(i in c)Object.hasOwnProperty.call(c,i)&&(a=str(i,c),a&&o.push(quote(i)+(gap?": ":":")+a));return a=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+s+"}":"{"+o.join(",")+"}",gap=s,a}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,a=e[t];if(a&&"object"==typeof a)for(n in a)Object.hasOwnProperty.call(a,n)&&(i=walk(a,n),void 0!==i?a[n]=i:delete a[n]);return reviver.call(e,t,a)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}),$.add("util-json")}(jQuery),"ui"in jQuery&&"_defined"in jQuery.ui||function(e,t){function n(e){return e&&e.constructor===Number?e+"px":e}function i(t,n){var i=t.nodeName.toLowerCase();if("area"===i){var r,o=t.parentNode,s=o.name;return t.href&&s&&"map"===o.nodeName.toLowerCase()?(r=e("img[usemap=#"+s+"]")[0],!!r&&a(r)):!1}return(/input|select|textarea|button|object/.test(i)?!t.disabled:"a"==i?t.href||n:n)&&a(t)}function a(t){return!e(t).parents().andSelf().filter(function(){return"hidden"===e.curCSS(this,"visibility")||e.expr.filters.hidden(this)}).length}e.extend(e.ui,{_defined:!0,keyCode:{DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,NUMPAD_ENTER:108,RIGHT:39,SHIFT:16,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return"number"==typeof t?this.each(function(){var i=this;setTimeout(function(){e(i).focus(),n&&n.call(i)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length)for(var i,a,r=e(this[0]);r.length&&r[0]!==document;){if(i=r.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(a=parseInt(r.css("zIndex"),10),!isNaN(a)&&0!==a))return a;r=r.parent()}return 0},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},bgiframe:function(t){if(e.util.ua.ie6){if("close"===t)return this.each(function(){e(this).children("iframe.bgiframe").remove()});t=e.extend({top:"auto",left:"auto",width:"auto",height:"auto",zIndex:-1,opacity:0,src:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var i=['<iframe class="bgiframe"frameborder="0"tabindex="-1"src="',t.src,'"style="display:block;position:absolute;z-index:',t.zIndex,";",t.opacity?"":"filter:Alpha(Opacity='0');","top:","auto"==t.top?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":n(t.top),";left:","auto"==t.left?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":n(t.left),";width:","auto"==t.width?"expression(this.parentNode.offsetWidth+'px')":n(t.width),";height:","auto"==t.height?"expression(this.parentNode.offsetHeight+'px')":n(t.height),';"/>'].join("");return this.each(function(){var t=e(this);0===t.children("iframe.bgiframe").length&&this.insertBefore(document.createElement(i),this.firstChild)})}return"close"===t?this.each(function(){e(this).children("div.bgiframe").remove()}):(t=e.extend({position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,backgroundColor:"#FFF",opacity:0},t),t.force?this.each(function(){var n=e(this);0===n.children("div.bgiframe").length&&n.prepend(e("<div>",{"class":"bgiframe",css:t}))}):this)}}),e.extend(e.expr[":"],{data:function(t,n,i){return!!e.data(t,i[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),a=isNaN(n);return(a||n>=0)&&i(t,!a)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===n.offsetHeight,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e.extend(e.ui,{plugin:{add:function(t,n,i){var a=e.ui[t].prototype;for(var r in i)a.plugins[r]=a.plugins[r]||[],a.plugins[r].push([n,i[r]])},call:function(e,t,n){var i=e.plugins[t];if(i&&e.element[0].parentNode)for(var a=0;a<i.length;a++)e.options[i[a][0]]&&i[a][1].apply(e.element,n)}},isOverAxis:function(e,t,n){return e>t&&t+n>e},isOver:function(t,n,i,a,r,o){return e.ui.isOverAxis(t,i,r)&&e.ui.isOverAxis(n,a,o)}}),e.add("ui-core")}(jQuery),"widget"in jQuery||function(e,t){var n=(Array.prototype.slice,e.cleanData);e.cleanData=function(t){for(var i,a=0;null!=(i=t[a]);a++)e(i).triggerHandler("remove");n(t)},e.widget=function(t,n,i){var a,r=t.split(".")[0];t=t.split(".")[1],a=r+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][a]=function(n){return!!e.data(n,t)},e[r]=e[r]||{},e[r][t]=function(e,t){arguments.length&&this._createWidget(e,t)};var o=new n;o.options=e.extend(!0,{},o.options),e[r][t].prototype=e.extend(!0,o,{namespace:r,widgetName:t,widgetEventPrefix:e[r][t].prototype.widgetEventPrefix||t,widgetBaseClass:a},i),e.widget.bridge(t,e[r][t])},e.widget.bridge=function(n,i){e.fn[n]=function(a){var r="string"==typeof a,o=Array.prototype.slice.call(arguments,1),s=this;return a=!r&&o.length?e.extend.apply(null,[!0,a].concat(o)):a,r&&"_"===a.charAt(0)?s:(this.each(r?function(){var i=e.data(this,n),r=i&&e.isFunction(i[a])?i[a].apply(i,o):i;return r!==i&&r!==t?(s=r,!1):void 0}:function(){var t=e.data(this,n);t?t.option(a||{})._init():e.data(this,n,new i(a,this))}),s)}},e.Widget=function(e,t){arguments.length&&this._createWidget(e,t)},e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(t,n){e.data(n,this.widgetName,this),this.element=e(n),this.options=e.extend(!0,{},this.options,this._getCreateOptions(),t);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()}),this.options.classPrefix&&(this.widgetBaseClass=this.options.classPrefix+"-"+this.widgetName),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]},_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},_destroy:e.noop,widget:function(){return this.element},option:function(n,i){var a=n;if(0===arguments.length)return e.extend({},this.options);if("string"==typeof n){if(i===t)return this.options[n];a={},a[n]=i}return this._setOptions(a),this},_setOptions:function(t){var n=this;return e.each(t,function(e,t){n._setOption(e,t)}),this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&this.widget()[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",t),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(t,n,i){var a=this.options[t];if(n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i=i||{},n.originalEvent)for(var r,o=e.event.props.length;o;)r=e.event.props[--o],n[r]=n.originalEvent[r];return this.element.trigger(n,i),!(e.isFunction(a)&&a.call(this.element[0],n,i)===!1||n.isDefaultPrevented())}},e.add("ui-core")}(jQuery),"sweet"in FE.util||function(e,t){function n(e,t){var n,c,l,u,f,d,p,h=t.id,g=t.varName,m=t.definedVarName,v=a+h,y=r+h,w=o+h,b=s+h,x=[g,"[",v,"]"].join(""),_=new RegExp(i+h+"_{","g"),C=new RegExp("{|}","g"),k=0;if(m?(d=["var ",y,"=$index;if(typeof ",m," !='undefined')var ",w,"=",m,";else var ",m,"=null;for(var ",v,"=0,",b,"=",g,".length;",v,"<",b,";",v,"++){$index=",v,";",m,"=",x,";with(",m,"){"].join(""),p=["}}$index=",y,";if(typeof ",w,"!='undefined')",m,"=",w,";"].join("")):(d=["var ",y,"=$index;for(var ",v,"=0,",b,"=",g,".length;",v,"<",b,";",v,"++){$index=",v,";with(",x,"){"].join(""),p="}}$index="+y+";"),n=_.exec(e)){for(u=n.index,f=_.lastIndex,l=e.substr(f);c=C.exec(l);)if("{"==c)k++;else{if(!(k>0)){l=l.substring(0,c.index)+p+l.substr(C.lastIndex);break}k--}e=e.substring(0,u)+d+l}return e}var i="__sub_foreach_",a="__index_",r="__index_tmp_",o="__var_tmp_",s="__len_",c="__buf__.push(",l=function(t){if(t=t.replace(/[\n\r]/g,"\\n"),!this.applyData)return new l(t);var a,r,o,s=new RegExp("(.*?)"+l.startDelimiter+"(.*?)"+l.endDelimiter,"g"),u=/foreach[\s\xa0]*\([\s\xa0]*(\S+?)[\s\xa0]*(?:as[\s\xa0]*(\S+?)){0,1}?[\s\xa0]*\)[\s\xa0]*\{/g,f=[],d=[];for(a=t.replace(s,function(t,n,i){return i=e.trim(i),""!=n&&(n=n.replace(/'/g,"\\'"),d.push(c+"'"+n+"'"),d.push(");"),":"==i.charAt(0)&&(d[d.length-1]=")")),""!=i&&("="==i.charAt(0)?i=c+i.substr(1)+");":/[;\?\{\}:]/.test(i.charAt(i.length-1))||(i+=";"),d.push(i)),""}),a&&d.push(c+"'"+a+"');"),d=d.join("").replace(u,function(e,t,n){var a={type:"foreach",varName:t,definedVarName:n||!1},r=f.push(a)-1,o=i+r+"_{";return a.id=r,o}),r=0,o=f.length;o>r;r++)d=n(d,f[r]);d=["var __buf__=[],$index=null;$util.print=function(str){__buf__.push(str);};with($data){",d,"} return __buf__.join('');"].join(""),this.compiled=new Function("$data","$util",d)};l.prototype.applyData=function(e,t){var n={};if(l.util){var i=l.util;for(var a in i)n[a]=i[a]}return this.compiled.call(t||window,e,n)},l.startDelimiter="<%",l.endDelimiter="%>",l.util={trim:e.trim,escape:e.util.escapeHTML},t.sweet=l,e.add("web-sweet")}(jQuery,FE.util),"alitalk"in FE.util||function($,Util){function success(e,t,n){if(e.success){var i=e.data;t.each(function(e){var t=$(this),n=t.data("alitalk");if(n){switch(n.online=i[e],t.addClass(n.cls.base),n.online){case 0:case 2:case 6:default:t.addClass(n.cls.off);break;case 1:t.addClass(n.cls.on);break;case 4:case 5:t.addClass(n.cls.mb)}n.onRemote&&n.onRemote.call(t[0],n)}})}n.onSuccess&&n.onSuccess()}function invokeWW(e){var t=1;if(ie)try{new ActiveXObject("aliimx.wangwangx").ExecCmd(e),t=0}catch(n){}else try{var i=navigator.mimeTypes["application/ww-plugin"];if(i){var a=this.plugin;a.appendTo(document.body),a[0].SendCommand(e,1),t=0}}catch(n){}if(1==t){var r=$("<iframe>").css("display","none").attr("src",e).appendTo("body");setTimeout(function(){r.remove()},200)}}function onClickHandler(e){var t,n,i,a,r=$(this);if(e?(e.preventDefault(),t=r.data("alitalk")):t=this,t.remote||(t.online=1),null!==t.online){if(i=t.prop,"function"==typeof i){i=i.call(this);var o=i.match(/info_id=([^#]+)/);o&&2===o.length&&(a=o[1])}n=isMac()?"":"&url2=//dmtracking.1688.com/others/feedbackfromalitalk.html?online="+t.online+"#info_id="+(t.info_id||a||"")+"#type="+(t.type||"")+"#module_ver=3#refer="+encodeURI(document.URL).replace(/&/g,"$");var s=encodeURIComponent(t.id);switch(0===version&&checkInstalled(),version){case 0:default:t.getAlitalk.call(this,t.id,t);break;case 5:invokeWW("Alitalk:Send"+(4===t.online?"Sms":"IM")+"?"+t.id+"&siteid="+t.siteID+"&status="+t.online+n+i);break;case 6:invokeWW(4===t.online?"aliim:smssendmsg?touid="+t.siteID+s+n+i:"aliim:sendmsg?touid="+t.siteID+s+"&siteid="+t.siteID+"&fenliu="+t.fenliu+"&status="+t.online+n+i)}t.onClickEnd&&t.onClickEnd.call(this,e)}}function login(e){var t,n=encodeURIComponent(e);0===version&&checkInstalled(),t=5===version?"alitalk:":"aliim:login?uid="+(n||""),invokeWW(t)}function numberify(e){var t=0;return parseFloat(e.replace(/\./g,function(){return 0===t++?".":""}))}function alitalk(elements,options){if($.isPlainObject(elements))options=elements,options.online=options.online||1,$extendIf(options,defaults),onClickHandler.call(options);else if(options=options||{},$extendIf(options,defaults),elements=$(elements).filter(function(){return!$.data(this,options.attr)}),elements.length){var ids=[];if(elements.each(function(i,elem){elem=$(elem);var data=$extendIf(eval("("+(elem.attr(options.attr)||elem.attr("data-"+options.attr)||"{}")+")"),options);elem.data("alitalk",data),ids.push(data.siteID+data.id)}).bind("click",onClickHandler),ids.length&&options.remote){var charsetStr="&charset="+options.charset;$.ajax("//amos.alicdn.com/mullidstatus.aw",{dataType:"jsonp",data:"uids="+ids.join(";")+charsetStr,success:function(e){success(e,elements,options)}})}}}function tribeChat(e){e.length&&e.bind("click",onTribeChatClickHandler)}function onTribeChatClickHandler(event){var element=$(this),data;event?(event.preventDefault(),data=element.data("alitalk"),data=eval("("+data+")")):data=this;var uid="";switch(data.uid&&(uid=encodeURIComponent(data.uid)),""!=uid&&uid.indexOf("cnalichn")<0&&uid.indexOf("cntaobao")<0&&uid.indexOf("enaliint")<0&&(uid="cnalichn"+uid),0===version&&checkInstalled(),version){case 0:default:alert("\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u9700\u8981\u5b89\u88c5\u963f\u91cc\u65fa\u65fa\u540e\u624d\u80fd\u53c2\u4e0e\u7fa4\u804a\u5929\uff0c\u70b9\u51fb\u786e\u8ba4\u540e\u5c06\u8fdb\u5165\u963f\u91cc\u65fa\u65fa\u4e0b\u8f7d\u9875\u9762\u3002"),window.location.href="//wangwang.1688.com";break;case 5:case 6:invokeWW("aliim:tribejoin?tribeid="+(data.tribeid||"")+"&uid="+uid)}data.onClickEnd&&data.onClickEnd.call(this,event)}jQuery.add("webww-package",{js:["//astyle-src.alicdn.com/sys/js/webww/package.js"],ver:"1.0"});var ie=-1!==function(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(t)&&(e=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName){var t=navigator.userAgent,n=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");null!=n.exec(t)&&(e=parseFloat(RegExp.$1))}return e}(),$extendIf=$.extendIf,isMac=function(){return navigator.platform.indexOf("Mac")>-1},defaults={cls:{base:"alitalk",on:"alitalk-on",off:"alitalk-off",mb:"alitalk-mb"},attr:"alitalk",siteID:"cnalichn",remote:!0,charset:"",plugin:!1,prop:function(){var e=$(this).data("alitalk");return"undefined"==typeof e||"undefined"==typeof e.offerid?"":"&gid="+e.offerid},fenliu:1,getAlitalk:function(e,t){var n=t.lazyLoad,i=$(this).data("alitalk"),a="";a="undefined"==typeof i?"undefined":i.offerid,n?jQuery.use("webww-package",function(){FE.sys&&FE.sys.webww&&FE.sys.webww.main&&FE.sys.webww.main.chatTo(e)?FE.sys.webww.main.chatTo(e,!0,a):$(document).bind("webww_load_complete",function(){FE.sys.webww.main.chatTo(e,!0,a)})}):FE.sys&&FE.sys.webww&&FE.sys.webww.main&&FE.sys.webww.main.chatTo(e)||window.open("http://webww.1688.com/message/my_chat.htm?towimmid="+e+"&offerid="+a,"_blank")},onRemote:function(e){var t=$(this);switch(e.online){case 0:case 2:case 6:default:t.html("\u7ed9\u6211\u7559\u8a00").attr("title","\u6211\u4e0d\u5728\u7f51\u4e0a\uff0c\u7ed9\u6211\u7559\u4e2a\u6d88\u606f\u5427");break;case 1:t.html("\u548c\u6211\u8054\u7cfb").attr("title","\u6211\u6b63\u5728\u7f51\u4e0a\uff0c\u9a6c\u4e0a\u548c\u6211\u6d3d\u8c08");break;case 4:case 5:t.html("\u7ed9\u6211\u77ed\u4fe1").attr("title","\u6211\u624b\u673a\u5728\u7ebf\uff0c\u9a6c\u4e0a\u548c\u6211\u6d3d\u8c08")}}},version=0,checkInstalled=function(){if(ie){var e={"aliimx.wangwangx":6,"Ali_Check.InfoCheck":5};for(var t in e)try{return new ActiveXObject(t),version=e[t],void(Util.alitalk&&(Util.alitalk.isInstalled=!0,Util.alitalk.version=version))}catch(n){}}if(isMac()||$.browser.webkit&&+$.browser.version.split(".")[0]>=42)return void(version=6);if($.browser.mozilla||$.browser.webkit){var i=this;if(navigator.mimeTypes["application/ww-plugin"]){var a=$("<embed>",{type:"application/ww-plugin",css:{visibility:"hidden",overflow:"hidden",display:"block",position:"absolute",top:0,left:0,width:1,height:1}});a.appendTo(document.body),(a[0].NPWWVersion&&numberify(a[0].NPWWVersion())>=1.003||a[0].isInstalled&&a[0].isInstalled(1))&&(version=6,Util.alitalk&&(Util.alitalk.isInstalled=!0,Util.alitalk.version=version)),i.plugin=a}}};$(function(){checkInstalled()}),Util.alitalk=alitalk,Util.alitalk.version=version,Util.alitalk.isInstalled=!!version,Util.alitalk.login=login,Util.alitalk.tribeChat=tribeChat,$.add("web-alitalk")}(jQuery,FE.util),function(e){e.namespace("FYU.Get"),window.FYU.Get.script=function(t,n){e.ajax(t,{dataType:"script",success:n})}}(jQuery),define(["jQuery","Log","Executor","require"],function(e,t,n,i){var a=window.site={require:function(t,n){return e.isArray(t)||arguments.length>1?(t=e.isArray(t)?t:[t],i.use(t,n)):i(t)},define:e.proxy(lofty,"define")},r=new t("site"),o=e("<div />");a._eventProxy=o,a.on=function(e,t){o.on(e,function(){var e=[].slice.call(arguments,1);return t.apply(this,e)})},a.off=e.proxy(o,"off"),a.trigger=function(t,n){return r.info("site trigger: "+t),n=e.isArray(n)?n:[n],o.triggerHandler(t,n)},a.error=function(e,t){a.error.handler(e,t)},a.error.handler=function(){},a.executor=new n({error:a.error})}),define("util.Util",["jQuery","Log"],function(e,t){var n=[].slice,i={formatUrl:function(t,n){return t=t||"",n=n||"",n="string"==typeof n?n:e.param(n),n?t+(-1===t.indexOf("?")?"?":"&")+n:t},schedule:function(e,t,n){this._schedule[e]&&clearTimeout(this._schedule[e]),this._schedule[e]=0,t&&(0===n?t():this._schedule[e]=setTimeout(t,n||1e3))},cooldown:function(e,t){var n=!1,i=null,a=function(){return n?i:(i=e.apply(this,arguments),n=!0,void setTimeout(function(){n=!1},t))};return a.reset=function(){n=!1,i=null},a},unschedule:function(e){this._schedule[e]&&clearTimeout(this._schedule[e])},escape:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},_schedule:{},toCamelString:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},toPascalString:function(e){return e=this.toCamelString(e),e.substr(0,1).toUpperCase()+e.substr(1)},delegate:function(t,n){var i={};return e.each(e.makeArray(n),function(n,a){var r=t[a];i[a]="function"==typeof r?e.proxy(r,t):r}),i},setUrlParam:function(e,t){var n,i=location.href,a=new RegExp("([?&])"+e+"=.*?(&|$)","i"),r=-1!==i.indexOf("?")?"&":"?";n=i.match(a)?i.replace(a,"$1"+e+"="+t+"$2"):i+r+e+"="+t,location.href=n},getUrlParam:function(e){return this._urlParams=this._urlParams||this._getUrlParams(),e?this._urlParams[e]:this._urlParams},_getUrlParams:function(){var t={},n=/^([^=]+)=(.*)$/,i=window.location.search.replace(/^\?/,"").split("&");return e.each(i,function(e,i){var a=n.exec(i);if(a)try{t[decodeURIComponent(a[1])]=decodeURIComponent(a[2])}catch(r){t[a[1]]=a[2]}}),t},tryThese:function(){for(var e=arguments,t=0,n=e.length;n>t;t++){var i=e[t];try{return i(),!0}catch(a){}}return!1},abbrev:function(e,t){return e=e||"",t=t||10,e.length<=t?e:e.substr(0,t)+".."},join:function(e,t,n){for(var i=[],a=0;t>a;a++)i.push(e);return i.join(n||"")},mixEvent:function(t){var n=e("<div />");e.each(["on","trigger","off"],function(i,a){t[a]=e.proxy(n,a)})},runWithDeferred:function(i,a,r,o){o=o||e.Deferred(),r=e.isArray(r)?r:[r];var s=function(){try{return i[a].apply(i,arguments)}catch(e){if(t.error(e),t.isEnabled("info"))throw e;o.reject(e)}};return i[a].length<=r.length?o.resolve(s.apply(i,r)):(r=n.call(r,0),r.push(o),s.apply(i,r),setTimeout(function(){"pending"===o.state()&&o.reject()},1e4)),o},makeUtf8Params:function(t){var n={};return e.each(t,function(e,i){void 0!==i&&(n[e]=encodeURIComponent(t[e]))}),n._input_charset="UTF-8",n}};return i}),define("ui.UI",["jQuery","util.Util"],function(e,t){var n={bgiframe:function(t){e.use("ui-core",e.proxy(this,"_bgiframe",t))},_bgiframe:function(t){e("body").bgiframe(t?{zIndex:199,force:!0}:"close")}};return n.resizeImage=function(){function t(e){return e.width<=1&&e.height<=1}function n(t,n,i,a,r){var o=a.width,s=a.height,c=!1,l=0;o&&s&&(n&&i?(c=o*i-s*n>=0,l=c?n:i):(c=!!n,l=n||i),c&&(o>l||r)&&(s=l*s/o,o=l),!c&&(s>l||r)&&(o=l*o/s,s=l),o=Math.round(o),s=Math.round(s),t.width=o,t.height=s,e(t).css({width:o+"px",height:s+"px"}))}return function(i,a,r){e.isPlainObject(a)||(a={width:a,height:a}),a.size&&(a.width=a.height=a.size),r=r||a.defaultImage,e(i).each(function(){var e=this,i=new Image;i.onload=function(){r&&t(this)?e.src=r:n(e,a.width,a.height,this,a.force),i.onload=i.onerror=null,a.success&&a.success(e)},i.onerror=function(){i.onload=i.onerror=null,a.error&&a.error(e)},i.src=e.src})}}(),n.positionFixed=function(n,i){function a(e,t){(s!==o.scrollTop()||t&&i.bottom)&&(n.hide(),c&&clearTimeout(c),c=setTimeout(function(){c=null,s=o.scrollTop(),r(s)},e))}function r(t){n.each(function(){var n=e(this),a=n.data("positionFixed")||0,r=i.bottom?o.height()-a-n.height():a;n.css("top",r+t),l(n)})}if(i=i||{},e.util.ua.ie6||i.force||"true"===t.getUrlParam("debug-position-fixed")){n=e(n),n.each(function(){var t=e(this),n=parseInt(t.css(i.bottom?"bottom":"top"),10)||0;t.css("position","absolute"),t.data("positionFixed",n)});var o=e(window),s=o.scrollTop(),c=null,l=i.show||function(e){e.fadeIn()},u=function(){a(500)},f=function(){a(50,!0)};o.on("scroll",u),o.on("resize",f),site.on("ui-position-fixed",u),n.on("remove",function(){o.off("scroll",u),o.off("resize",f),site.off("ui-position-fixed",u)}),n.on("ui-position-fixed",function(){a(10,!0)})}},n.colorPicker=function(t){e.use("ui-colorbox",function(){e(t).each(function(){var t=e(this),n=e("span",t),i=e("input.value",t);n.css("background-color",i.val()),t.colorbox({zIndex:1e4,color:i.val(),select:function(a,r){i.val(r.color),n.css("background-color",r.color),t.triggerHandler("select",r),e(this).colorbox("hide")}})})})},n.colorChooser=function(t,n){n=n||{};var i=function(t,i,a,r){var o=new t(i,{value:e.trim(r.val()),className:"widget-color-chooser-simple",transparent:n.transparent,confirm:function(e){r.val(e.color),a.css("background-color",e.color),a.toggleClass("color-transparent","transparent"===e.color),i.triggerHandler("select",e)}}),s=e(document),c=function(e){var t=o.getPanel();t&&(i[0]===e.target||i.has(e.target).length||t[0]===e.target||t.has(e.target).length||(o.close(),s.off("click",c)))};s.on("click",c)};e(t).each(function(){var t=e(this),n=e("span",t),a=e("input.value",t),r=null;a=a.length?a:t.next("input.value"),r=a.val(),"transparent"===r?n.addClass("color-transparent"):n.css("background-color",r),t.on("click",function(e){e.preventDefault(),define(["widget.ColorChooser"],function(e){i(e,t,n,a)})})})},n.datePicker=function(){function t(t){var a=e("span.text",t),r=e("input.value",t),o=i(r.val()),s={picker:t,text:a,value:r};t.datepicker({date:o,zIndex:3200,select:function(e,t){n(t.date,s)},beforeShow:function(){return!t.hasClass("disabled")},closable:!0}),t.on("dateselect",function(e,t){n(t,s)}),o?n(o,s):a.text("\u8bf7\u9009\u62e9\u65e5\u671f")}function n(t,n){var i=n.picker,r=e.util.substitute("{0}-{1}-{2}",[t.getFullYear(),t.getMonth()+1,t.getDate()]);n.text.text(r),n.value.val(a(t)),i.data("date",t),i.trigger("datechange",t)}function i(e){var t=null,n=parseInt(e.trim(),10);return n?(t=new Date,t.setTime(n),t):void 0}function a(e){return e.getTime()}return function(n){e(n).each(function(){t(e(this))})}}(),e.add("sys-ibankpicker",{css:["//astyle.alicdn.com/sys/css/ibankpicker/v1/ibankpicker.css"],js:["//astyle.alicdn.com/sys/js/ibankpicker/v1/ibankpicker.js"],ver:"1.0"}),n.iBank=function(t){e.use("sys-ibankpicker",function(){t=e.extend({source:"winport_diy",allowMultiple:!1,tabs:["album","upload"]},t);var n={dragAble:!0,ibankOptions:t},i=new FE.sys.IbankPicker(n);i.on("select",function(e){t.insert&&t.insert(e)}),i.show()})},n}),define("ui.ImageResizer",["jQuery","ui.UI"],function(e,t){return function(n,i){var a=n.is("img")?n:e(n.selector||"img",n);t.resizeImage(a,i)}}),define("ui.Widget",["jQuery","Log"],function(e,t){var n=new t("ui.Widget"),i=function(t){var i=function(n,i){var a=this;return this.element=e(n),this.options=e.extend({},t.defaultOptions,i),this.element.on("widget-action",function(e,t){a[t.name].apply(a,t.args||[])}),t.init&&t.init.apply(this,arguments)},r=function(e,t){return t=t||"default",ret="string"==typeof t?i[e][t]:t,ret||n.warn("get return null for "+e+":"+t),ret};return i.prototype=e.extend({getConfigObject:r},a,t),i},a={on:function(e,t,n){return this.element.on("widget-"+e,t,n),this},off:function(e){return this.element.off("widget-"+e),this},trigger:function(e,t){return this.triggerHandler(e,t,!0),this},triggerHandler:function(t,i,a){n.info("trigger "+t);var r,o,s=this.options["on"+t]||this.options[t];return i=e.isArray(i)?i:[i],"function"==typeof s&&(r=s.apply(this,i)),o=this.element[a?"trigger":"triggerHandler"](t,i),void 0===o?r:o}};return i}),define("ui.LazyInitializer",["jQuery","Log","util.Util"],function(e,t,n){function i(e,t){t=t||1e3;for(var n=e;n!==document&&--t;)if(n=n.parentNode,null==n)return!1;return!0}var a=new t("ui.LazyInitializer"),r=e(window),o=[],s=!1,c=!!n.getUrlParam("lazy-initializer-force"),l=function(t,i,l){return c?i():(t=e(t),o.push({element:t,fn:function(){try{i.apply(this,arguments)}catch(e){a.error("lazy init error: "+e)}},options:l||{}}),s||(r.on("scroll resize",function(){n.schedule("widget-lazy-initializer",u,50)}),s=!0,f()),void u())},u=function(){var t=r.scrollTop(),n=r.height();e.each(o,function(e,r){if(!r.inited){var o=r.options.span||0,s=(r.element.offset()||{}).top||0,c=r.element.get(0),l=document.contains?document.contains(c):i(c);l?t+n>s-o&&(a.info("lazy initialize for "+r.element),r.inited=!0,r.fn(),r.element.trigger("widget-lazy-initializer")):a.info("dom is not in the page "+r.element)}});for(var s=o.length-1;s>=0;s--)o[s].inited&&o.splice(s,1)},f=function(){var e=0,t=function(){u(),e++,20>e&&setTimeout(t,500)};setTimeout(t,500)};return l}),define("ui.ImageLazyLoad",["jQuery","Class","ui.LazyInitializer"],function(e,t,n){return new t({init:function(t){var i="img[data-lazy-load-src]",a=function(){var n=e(i,t);n.each(function(){var t=e(this),n=t.data("lazyLoadSrc");t.attr("src",n),t.trigger("widget-image-lazy-load")})};new n(t,a)}})}),define("ui.PlaceHolder",["jQuery","Class","Log"],function(e,t,n){var i=new n("ui.PlaceHolder"),a=function(t,n){if(!t.is("input:text,textarea"))return void i.warn("invalid input:text for PlaceHodler "+t);var a=t.data("placeholder")||n.placeholder||n||"",o=e('<div class="ui-placeholder-label" style="position: absolute; width: 0; height: 0; color: #bfbfbf;"><div class="value" style="position: absolute; padding-left: 4px; overflow: hidden;">'+a+"</div></div>");t.addClass("ui-placeholder").before(o),r(t,o),t.on("blur",function(){/^\s*$/.test(t.val())&&(o.show(),t.addClass("ui-placeholder-on"))}),t.on("focus",function(){t.prop("disabled")||t.hasClass("ui-placeholder-on")&&(o.hide(),t.removeClass("ui-placeholder-on"))}),o.on("click",function(){t.prop("disabled")||t.trigger("focus")}),t.on("placeholder-refresh",function(){r(t,o),t.triggerHandler("blur")}),t.triggerHandler("blur")},r=function(t,n){n.show();var i=t.offset(),a=(parseInt(t.css("padding-top"),10)||0,n.offset()),r=e("div.value",n),o=t.is("textarea")?parseInt(t.css("line-height"),10):t.outerHeight();r.css({left:i.left-a.left+"px",top:i.top-a.top+"px",width:t.width()+"px",height:t.outerHeight+"px","line-height":o+"px"}),n.hide()};return function(t,n){n=n||{},e(t).each(function(){a(e(this),n)})}}),define("ui.Autowire",["require","jQuery","Class","Log"],function(e,t,n,i){var a=new i("ui.Autowire"),r=new n({init:function(e,n){if(e=t(e),!e.length)return void a.warn("please specify parent element for autowire");this.options=n||{},this.typeField=this.options.typeField||"widget-type",this.configField=this.options.configField||"widget-config",this.namespace=this.options.namespace;var i=this,r=t("[data-"+this.typeField+"]",e);r.length&&r.each(function(){i.handle(t(this))})},handle:function(e){var n=this,i=e.data(this.typeField),a=e.data(this.configField)||{};t.isArray(i)?t.each(i,function(t,i){n.process(i,a[t]||{},e)}):n.process(i,a,e)},process:function(t,n,i){if(!n.__autowired){n.__autowired=!0;var a=this.options.executor;t=this.namespace?this.namespace+"."+t:t;var r=function(e){var r=function(){"function"==typeof e?new e(i,n):e&&"function"==typeof e.init&&e.init(i,n)};a?a.execute(t,r):r()};lofty?e.use([t],r):e([t],r)}}});return r}),define("widget.FloatPanel",["jQuery","Class","Log"],function(e,t,n){var i=new n("widget.FloatPanel"),a=new t({init:function(t,n){this.panel=e(t).eq(0),this.options=n||{},this.link=e(this.options.handler),this._handleLink(),this._handleClose(),this._handleCloseOnBlur(),this._handleAutoClose()},_handleLink:function(){var t=this,n=this.options.delay,i=function(){t.clear(),t.isShow?t.options.toggle&&t.hide():t.show()},a=n?function(){t.clear(!0),t._showTimer=setTimeout(i,n)}:i;this.link.on(this.options.event||"click",a),this.link.on("click",function(t){var n=e(this);n.is("a")&&"#"===n.attr("href")&&t.preventDefault()}),this.hide()},_handleClose:function(){var t=this;e(".close",this.panel).on("click",function(){return t.hide(),!1})},_handleCloseOnBlur:function(){if(this.options.closeOnBlur!==!1){var t=this;e(document).on("click",function(e){if(t.isShow){var n=e.target;n!==t.link[0]&&n!==t.panel[0]&&0===t.link.has(n).length&&0===t.panel.has(n).length&&t.hide()}})}},_handleAutoClose:function(){var t=this.options.autoClose;if(t!==!1){{var n=this,i=e(this.panel).add(this.link),a=parseInt(t,10)||3e3;e.proxy(this,"hide")}i.on("mouseleave",function(){n.clear(!0),n._timer=setTimeout(e.proxy(n,"hide"),a),i.one("mousemove",e.proxy(n,"clear",!1))})}},clear:function(e){i.info("floatpanel clear : "+e),this._timer&&clearTimeout(this._timer),this._timer=null,e&&this._showTimer&&(clearTimeout(this._showTimer),this._showTimer=null);

},show:function(){this.isShow||this.options.beforeShow&&this.options.beforeShow()===!1||this.panel.triggerHandler("before")===!1||(this.isShow=!0,this._op("show"),this.options.onshow&&this.options.onshow(),this.panel.triggerHandler("show"),i.info("floatpanel show "),i.info(this.panel[0]))},hide:function(){this.isShow&&(this.isShow=!1,this._op("hide"),this.options.onhide&&this.options.onhide(),this.panel.triggerHandler("hide"),i.info("floatpanel hide "),i.info(this.panel[0]))},_op:function(e){var t=this.panel[0],n=this.options[e];return n?n.call(t,t):this.panel[e]()}});return a}),define("widget.InstantValidator",["jQuery","Class"],function(e,t){var n=new t({init:function(t,n){var i=this._get(n);if(!i)throw"asser false, invalid type";t=e(t),t.on("input propertychange blur",function(){var t=e(this);if(!t.hasClass("ui-placeholder-on")){var n=t.data("instantValidatorValue")||"",a=t.val();!a||i.test(a)?t.data("instantValidatorValue",a):setTimeout(function(){t.val(n)},50)}}),t.triggerHandler("input")},_get:function(t){var i=e.type(t);return"string"===i?n.types[t]:"regexp"===i?t:"function"===i?{test:t}:null}});return n.types={price:/^[\d]{0,9}(\.[\d]{0,2})?$/,pagenum:/^[1-9]\d*$/},n}),define("ui.Alitalk",function(){return function(e){var t=e.html();FE.util.alitalk(e,{cls:{base:"ui-alitalk",on:"ui-alitalk-on",off:"ui-alitalk-off",mb:"ui-alitalk-mb"},onSuccess:function(){t&&e.html(t)}})}}),define("widget.HoverEffect",["jQuery"],function(e){return function(t,n){t=e(t),n=n||{};var i=n.selector||"li",a=n.className||"hover";t.on("mouseenter",i,function(){e(i,t).removeClass(a),e(this).addClass(a)})}}),function(e,t){{var n={};/msie/i.test(navigator.userAgent)}n.register=function(e,t){for(var i,a=n,r=e.split("."),o=0;o<r.length;o++)i=r[o],null==a[i]&&(a[i]=o==r.length-1&&null!=t?t:{}),a=a[i];return a},n.register("util.eval",function(e){if(e&&/\S/.test(e)){var t=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.type="text/javascript",jQuery.support.scriptEval?n.appendChild(document.createTextNode(e)):n.text=e,t.insertBefore(n,t.firstChild),t.removeChild(n)}}),n.register("data",{}),n.register("namespaces",{}),n.register("module.register",function(t,n,i){if(e.extend({init:function(){}},i),-1!=t.indexOf(":")){var a=t.split(":");MT.namespaces[a[0]]||(MT.namespaces[a[0]]=new Array),MT.namespaces[a[0]].push(a[1]),t=a[1]}MT.module[t]=MT.module[t]||{},MT.module[t][n]=MT.module[t][n]||i}),n.register("loadApp",function(t){var i=t.id;n.data[i]=e.extend(!0,n.data[i]||{},t)}),n.register("data.merge",function(t,i,a){var r=n.data[t];return r&&a?(r.baseParam||(r.baseParam={}),e.extend(!0,r.baseParam,i)):a?i:e.extend(!0,r.data||{},i)}),n.register("renderApp",function(t,i,a,r,o,s,c){var l=e("#"+a),u=l.data("app");u&&n.loadApp(u);var f=function(){try{var r=n.data[t];if(r.contents&&r.contents[i]){var c=r.contents[i];if(c){var l=t;a&&(l=a),"undefined"!=typeof o&&o||e("#"+l).html(c.html).closest("div.mod").trigger("afterinit"),"undefined"==typeof s||s&&e("#"+l).hide();var u=e("#"+l+" .let_js").text();if(u)try{n.util.eval(u)}catch(f){}var d=l.split("-")[0];n.module[d]&&n.module[d][i]&&n.module[d][i].init(t)}}}catch(f){}};if("edit"===i&&!c){var d=e("#"+t+"-edit");if(!d.data("formInited"))return void d.data("editAction",f)}setTimeout(f,0)}),n.register("ui",{}),n.register("ui.roll",function(t,n){var n=e.extend({},{type:"x",speed:2e3},n),i=t.find(".vas_themeBody"),a=t.find(".vas_themeTool").children(),r=0,o=i.children().length-1,s=!1,c=null,l=function(){return{_Init:function(){var e=this,t=null;i.css("position","absolute"),a&&a.attr("num",function(e){return e}).mouseover(function(){var n=this;t=setTimeout(function(){s=!0,r=n.getAttribute("num"),e._Animation()},50)}).mouseout(function(){clearTimeout(t),s=!1,e._play()}),this._play()},_Animation:function(){var e=this;if(a&&(a.eq(r).addClass("hover"),a.not(a.eq(r)).removeClass("hover")),"x"==n.type){var t=-(r*u.width);i.animate({left:t+"px"},{queue:!1,duration:1e3,complete:function(){this.Lock||e._play()}})}else if("y"==n.type){var t=-r*u.Height;i.animate({top:t+"px"},{queue:!1,duration:1e3,complete:function(){this.Lock||e._play()}})}},_play:function(){var e=this;clearTimeout(c),c=setTimeout(function(){e._Animation(),r++,r=r>o?0:r},n.speed)}}}();if(o>0){var u={width:t[0].offsetWidth,Height:t[0].offsetHeight};"x"==n.type&&(i.find("a").css("float","left"),i.css({width:(o+1)*u.width})),l._Init()}else t.find(".vas_themeTool").hide()}),window.MT=window.MT||{},e.extend(window.MT,n)}(jQuery),function(e){var t=function(e,t){this.config={childWidth:0,Max:4,MinChildLength:4,animateTime:50,stopTime:2e3,after:null},this.elm=e,this.notPlay=!1,this.count=0,this.timer=null,this.css={},this.init.apply(this,[t])};t.prototype={init:function(){var t=this;this.elm.children().length>this.config.MinChildLength&&(this.config.childWidth=parseInt(this.elm.children()[0].offsetWidth),this.bind(),e.each(arguments,function(){"object"==typeof this&&e.extend(t.config,this)}),this.css={left:"-"+this.config.childWidth*this.config.Max},this.config.childWidth>0&&this.play())},domMove:function(t){var n=parseInt(Math.abs(parseInt(e(this.elm).css("left")))/this.config.childWidth)-1;for(i=t;i<=n;i++){var a=this.elm.children().eq(i).clone();this.elm.append(a),t=n+1}return t},run:function(){this.notPlay=!0;var t=0,n=this;this.elm.animate(this.css,{duration:this.config.animateTime,queue:!1,step:function(){t=n.domMove(t)},complete:function(){t=n.domMove(t),n.notPlay=!1;for(var i=0;t>i;i++)e(n.elm.children()[0]).remove();n.elm.css("left","0"),n.Lock||n.play()}})},play:function(){var e=this;e.Lock=!1,this.notPlay||(this.timer=setTimeout(function(){e.run()},this.config.stopTime))},stop:function(){this.Lock=!0,clearTimeout(this.timer)},bind:function(){var e=this;this.elm.hover(function(){e.stop()},function(){e.play()})}};var n=function(e,t,n){this.config={x:0,y:0,mouseIn:null,mouseOut:null},this.elm=t,this.Tips=e,this.init.apply(this,[n])};n.prototype={init:function(){var t=this;e.each(arguments,function(){"object"==typeof this&&(t.config=e.extend(t.config,this))}),this.bind()},getoffset:function(t,n){var i={x:0,y:0},a=this;if("undefined"==typeof a.config.relative)for(;t.offsetParent;)i.x+=t.offsetLeft,i.y+=t.offsetTop,t=t.offsetParent;else i.x=e(t).position().left,i.y=e(t).position().top;return i},bind:function(){var e=this;this.elm.mouseenter(function(t){var n=e.getoffset(this,t);e.Tips.css({left:n.x+e.config.x,top:n.y+e.config.y}),e.config.mouseIn&&e.config.mouseIn.apply(this,[e.Tips])}),this.Tips.mouseleave(function(){e.config.mouseOut&&e.config.mouseOut.apply(this,[e.Tips])})}};var a=function(e,t){this.config={step:0,before:null,after:null,time:2e3,animateTime:2},this.init.call(this,t,e)};a.prototype={init:function(t,n){var i=this;e.extend(i.config,t),this.reload(n)},animate:function(){var t=this;this.notPlay=!0,t.config.before&&t.config.before.apply(t,arguments);var n=Math.abs(Math.abs(parseInt(this.selector.css("left").replace("px","")))-t.Serial*t.config.step)*t.config.animateTime;this.selector.animate({left:-(t.Serial*t.config.step)},{queue:!1,duration:n,step:function(){t.stopAnimate&&(t.stopAnimate=!1,e(this).stop())},complete:function(){t.notPlay=!1,t.Continue||(t.Serial++,t.play()),t.config.after&&t.config.after.apply(t,arguments)}})},play:function(){var e=this;e.Continue=!1,!this.notPlay&&this.Max>1&&(this.Continue=!1,this.Serial==this.Max&&(this.Serial=0),this.timer=setTimeout(function(){e.animate()},this.config.time))},goTo:function(e){this.stopAnimate=!0,this.Serial=e,this.animate()},stop:function(e){e&&this.selector&&this.selector.stop(),clearTimeout(this.timer),this.timer=null,this.Continue=!0},bind:function(){var e=this;this.selector.hover(function(){e.stop(!1)},function(){e.play()})},reload:function(e){e.css("left",0),e.children()[0]&&(this.selector=e,this.timer=null,this.Continue=!1,this.stopAnimate=!1,this.notPlay=!1,this.config.step=parseInt(e.children()[0].offsetWidth),this.Max=e.children().length,this.Serial=0,this.play(),this.bind())}},MT.register("ui.unStopRoll",function(e,n){return new t(e,n)}),MT.register("ui.tips",function(e,t,i){return new n(e,t,i)}),MT.register("ui.Carousel",function(e,t){return new a(e,t)});var r=function(t){var n='<div class="bigImgPlay">\r\n							<div class="bigImgPlay_ImgBox">\r\n							</div>\r\n							<div class="bigImgPlay_tag">\r\n							</div>\r\n						</div>';0==e(t).find(".bigImgPlay").length&&e(t).append(n);{var i=new MT.ui.Carousel(e(".bigImgPlay_ImgBox ul",t),{after:function(){},before:function(){e(".bigImgPlay .bigImgPlay_tag span",t).removeClass("bigImgPlayTagHover"),e(".bigImgPlay .bigImgPlay_tag span",t).eq(this.Serial).addClass("bigImgPlayTagHover")}});new MT.ui.tips(e(".bigImgPlay",t),e(".image",t),{x:0,y:-97,relative:!0,mouseIn:function(){var t=e(this),n=arguments[0],a=t.closest("li").data("offer")||{};i.stop(!0),n.find(".bigImgPlay_ImgBox ul").remove(),n.find(".bigImgPlay_tag span").remove();var r=t.find(".displayWindowOtherImg"),o=t.find(".displayWindowDetailUrl").val(),s=n.find(".bigImgPlay_ImgBox").append("<ul></ul>").find("ul"),c=n.find(".bigImgPlay_tag");e.each(r,function(e,t){var n='<li>\r\n										<a href="'+o+'" target="_blank">\r\n											<img src = "'+t.value+'"/>\r\n										</a>\r\n									</li>';c.append("<span num='"+e+"'></span>"),s.append(n)}),s.find("li").data("offer",a),c.find("span").hover(function(){var t=this;i.stop(),i.goTo(e(t).attr("num"))},function(){i.play()}),r.length>=1&&(n.show(),1==r.length&&c.find("span").remove(),c.find("span").eq(0).addClass("bigImgPlayTagHover"),i.reload(s))},mouseOut:function(){var e=arguments[0];e.find(".bigImgPlay_ImgBox ul").remove(),e.find(".bigImgPlay_tag span").remove(),e.hide()}})}};MT.register("ui.bigImgPlay",function(e){return new r(e)})}(jQuery),function(e){var t={init:function(e){this.div=e,this.resizeImages(),this.initCats(),this.initCollapse()},resizeImages:function(){var t=e("li a img",this.div);Platform.winport.UI.resizeImage(t,{width:150})},initCats:function(){var t=e("ul:first>li",this.div);t.eq(-1).addClass("last-cat"),t.each(function(){var t=e(this),n=e("li",t);n.length&&(t.addClass("expand"),n.eq(-1).addClass("last"))})},initCollapse:function(){e(this.div).delegate(".expand","click",function(t){e(this).children(".cat-hd").toggleClass("collapse"),e(this).children(".cat-bd").toggle()}),e(this.div).delegate(".cat a","click",function(e){return e.stopPropagation(),!0})}};MT.register("common.cateBg",t)}(jQuery);var Mustache="undefined"!=typeof module&&module.exports||{};!function(e){function t(e){return y.test(e)}function n(e){return String(e).replace(/&(?!\w+;)|[<>"']/g,function(e){return x[e]||e})}function i(e,t,n,i){i=i||"<template>";for(var a,r=t.split("\n"),o=Math.max(n-3,0),s=Math.min(r.length,n+3),c=r.slice(o,s),l=0,u=c.length;u>l;++l)a=l+o+1,c[l]=(a===n?" >> ":"    ")+c[l];return e.template=t,e.line=n,e.file=i,e.message=[i+":"+n,c.join("\n"),"",e.message].join("\n"),e}function a(e,t,n){if("."===e)return t[t.length-1];for(var i,a,r,o,s=e.split("."),c=s.length-1,l=s[c],u=t.length;u;){for(o=t.slice(0),a=t[--u],r=0;c>r&&(a=a[s[r++]],null!=a);)o.push(a);if(a&&"object"==typeof a&&l in a){i=a[l];break}}return"function"==typeof i&&(i=i.call(o[o.length-1])),null==i?n:i}function r(e,t,n,i){var r="",o=a(e,t);if(i)(null==o||o===!1||f(o)&&0===o.length)&&(r+=n());else if(f(o))m(o,function(e){t.push(e),r+=n(),t.pop()});else if("object"==typeof o)t.push(o),r+=n(),t.pop();else if("function"==typeof o){var s=t[t.length-1],c=function(e){return u(e,s)};r+=o.call(s,n(),c)||""}else o&&(r+=n());return r}function o(n,a){a=a||{};for(var r,o,s,c,l,u=a.tags||e.tags,f=u[0],d=u[u.length-1],p=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],h=[],g=!1,m=!1,y=function(){if(!g||m||a.space)h=[];else for(;h.length;)p.splice(h.pop(),1);g=!1,m=!1},w=[],b=function(e){u=v(e).split(/\s+/),o=u[0],s=u[u.length-1]},x=function(e){p.push('";',r,'\nvar partial = partials["'+v(e)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},_=function(e,t){var o=v(e);if(""===o)throw i(new Error("Section name may not be empty"),n,S,a.file);w.push({name:o,inverted:t}),p.push('";',r,'\nvar name = "'+o+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},C=function(e){_(e,!0)},k=function(e){var t=v(e),r=0!=w.length&&w[w.length-1].name;if(!r||t!=r)throw i(new Error('Section named "'+t+'" was never opened'),n,S,a.file);var o=w.pop();p.push('";',"\n    return buffer;","\n  };","\n})();"),p.push(o.inverted?"\nbuffer += renderSection(name,stack,callback,true);":"\nbuffer += renderSection(name,stack,callback);"),p.push('\nbuffer += "')},T=function(e){p.push('";',r,'\nbuffer += lookup("'+v(e)+'",stack,"");','\nbuffer += "')},I=function(e){p.push('";',r,'\nbuffer += escapeHTML(lookup("'+v(e)+'",stack,""));','\nbuffer += "')},S=1,A=0,j=n.length;j>A;++A)if(n.slice(A,A+f.length)===f){switch(A+=f.length,c=n.substr(A,1),r="\nline = "+S+";",o=f,s=d,g=!0,c){case"!":A++,l=null;break;case"=":A++,d="="+d,l=b;break;case">":A++,l=x;break;case"#":A++,l=_;break;case"^":A++,l=C;break;case"/":A++,l=k;break;case"{":d="}"+d;case"&":A++,m=!0,l=T;break;default:m=!0,l=I}var P=n.indexOf(d,A);if(-1===P)throw i(new Error('Tag "'+f+'" was not closed properly'),n,S,a.file);var N=n.substring(A,P);l&&l(N);for(var O=0;~(O=N.indexOf("\n",O));)S++,O++;A=P+d.length-1,f=o,d=s}else switch(c=n.substr(A,1)){case'"':case"\\":m=!0,p.push("\\"+c);break;case"\r":break;case"\n":h.push(p.length),p.push("\\n"),y(),S++;break;default:t(c)?h.push(p.length):m=!0,p.push(c)}if(0!=w.length)throw i(new Error('Section "'+w[w.length-1].name+'" was not closed properly'),n,S,a.file);y(),p.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");var E=p.join("").replace(/buffer \+= "";\n/g,"");return a.debug&&("undefined"!=typeof console&&console.log?console.log(E):"function"==typeof print&&print(E)),E}function s(e,t){var s="view,partials,stack,lookup,escapeHTML,renderSection,render",c=o(e,t),l=new Function(s,c);return function(o,s){s=s||{};var c=[o];try{return l(o,s,c,a,n,r,u)}catch(f){throw i(f.error,e,f.line,t.file)}}}function c(){_={}}function l(e,t){return t=t||{},t.cache!==!1?(_[e]||(_[e]=s(e,t)),_[e]):s(e,t)}function u(e,t,n){return l(e)(t,n)}e.name="mustache.js",e.version="0.5.0-dev",e.tags=["{{","}}"],e.parse=o,e.compile=l,e.render=u,e.clearCache=c,e.to_html=function(e,t,n,i){var a=u(e,t,n);return"function"!=typeof i?a:void i(a)};var f,d=Object.prototype.toString,p=Array.isArray,h=Array.prototype.forEach,g=String.prototype.trim;f=p?p:function(e){return"[object Array]"===d.call(e)};var m;m=h?function(e,t,n){return h.call(e,t,n)}:function(e,t,n){for(var i=0,a=e.length;a>i;++i)t.call(n,e[i],i,e)};var v,y=/^\s*$/;if(g)v=function(e){return null==e?"":g.call(e)};else{var w,b;t("\xa0")?(w=/^\s+/,b=/\s+$/):(w=/^[\s\xA0]+/,b=/[\s\xA0]+$/),v=function(e){return null==e?"":String(e).replace(w,"").replace(b,"")}}var x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_={}}(Mustache),function(e){e.mustache=function(e,t,n){return Mustache.render(e,t,n)},e.fn.mustache=function(t,n){return Mustache.render(e(this).text().trim(),t,n)}}(jQuery),define("core.Component",["jQuery","Log"],function(e,t){"use strict";var n=new t("core.Component");return{getUserContext:function(t){var n=e("#content").data("userContext")||{};return t?n[t]:n},getGlobalConfig:function(){var t=this._globalConfig;return t||(t=e("div.app-globalConfig div.config","#doc").data("config"),e.isPlainObject(t)||n.warn("no global config found")),t||{}},getSiteKey:function(){return e("#content").data("siteKey")||this.getUserContext("siteKey")},getSiteId:function(){return this.getUserContext("siteId")},getTemplateKey:function(){return this.getUserContext("templateKey")},getPageName:function(){return e("#content").data("pageId")},getPageType:function(){return this.getUserContext("pageType")},getAppName:function(e){return this._getAppField(e,"name")},getAppKey:function(e){return this._getAppField(e,"id")},getAppTemplate:function(t){return e(t).data("useTemplate")},getAppTitle:function(e){return this._getAppField(e,"title")||""},getAppData:function(t){return e(t).data("result")||{}},getAppRegionType:function(t){return e(t).closest("div.region").data("regionType")},_getAppField:function(t,i){var a=e(t).data("app");return a||n.warn("app field not exist, it may be not app node "+t),a&&a[i]},getAppModuleConfig:function(t){var i=e(t).data("app-module-config");return i||n.warn("app field not exist, it may be not app node "+t),i},getPageLayout:function(){var t=this,n=[],i=e("#content");return e("div.segment",i).each(function(){var i=e(this);n.push({id:i.data("segmentId"),layoutId:i.data("layoutType"),regions:t._getRegions(i)})}),n},_getRegions:function(t){var n=this,i=[];return e("div.region",t).each(function(){var t=e(this);i.push({type:t.data("regionType"),apps:n._getApps(t)})}),i},_getApps:function(t){var n=this,i=[],a=e("div.mod[data-app]",t);return a.each(function(){var t=e(this),a=n.getAppName(t);a&&i.push({name:a,appKey:n.getAppKey(t)})}),i},getGlobalViewConfig:function(e){return this._getGlobalConfig("viewConfig",e)},getGlobalEditConfig:function(e){return this._getGlobalConfig("editConfig",e)},_getGlobalConfig:function(t,n){var i=e("#content").data(t)||{};return n?i[n]:i},getStaticDomain:function(){return location.protocol+"//assets.1688.com"},getCdnDomain:function(){var e=window.REACT_COM_CONFIG&&window.REACT_COM_CONFIG.env;return"daily"===e||"pre"===e?location.protocol+"//g-assets.daily.taobao.net":location.protocol+"//g.alicdn.com"},callAppMethod:function(t,i,a){var r=t.data("appObject");return r?r[i].apply(r,e.makeArray(a)):void n.error("can not find app object :"+t)},isLogin:function(){var t=this.getUserContext("isTopDomain");return t?!!e.util.cookie("sid",{raw:!0}):FE.util.IsLogin()},getCustomContext:function(t){return e("#content").data(t)}}}),define("core.PageContext",["jQuery","Context"],function(e,t){return new t("PageContext",{bind:function(e,t,n){site.executor.execute(e,function(){"function"==typeof n?new n:n.init&&n.init()})}})}),define("core.AppContext",["jQuery","Log"],function(e,t){var n=new t("core.AppContext");return{start:function(){e.each(this._context,function(e,t){t.start&&t.start()})},register:function(e,t,i){e=e.split(/\./);var a=this._indices[e[0]],r=null;void 0!==a?(r=this._context[a],r.add(t,e[1]||"default",i)):n.error("invalid app type "+e)},push:function(e,t){return void 0!==this._indices[e]?void n.warn("context "+e+" already exist"):(this._indices[e]=this._context.length,void this._context.push(t))},_context:[],_indices:{}}}),define("core.AppUtil",["jQuery","Log"],function(e,t){var n=new t("core.AppUtil");return{create:function(t){for(var i=e(t),a=i.eq(0),r=null,o=1,s=i.length;s>o;o++){var c=i.eq(o);(c.is("script")||c.is("link"))&&a.append(c)}return a.is("div[data-app]")?(r=a,a=null):r=e(">div[data-app]",a).eq(0),r.length?{app:r,box:a}:(n.error("not a valid app"),null)},render:function(e,t){var n=this.create(t);if(n)return e.replaceWith(n.app),this.ready(n.app),n.app},ready:function(t,n){n=n||{},site.trigger("app-view-ready",[t,n.viewData]);var i=e("div[data-app]",t);i.length&&i.each(function(){site.trigger("app-view-ready",e(this))})}}}),define("core.Fragment",["jQuery","Log","ui.LazyInitializer","core.Component","core.AppUtil"],function(e,t,n,i,a){var r=new t("core.Fragment"),o={start:function(){this._process()},_process:function(){this.items&&(this._request(this.items),this.items=null,this.timer&&(clearTimeout(this.timer),this.timer=null))},add:function(e,t){this._lazy(e,t)},_lazy:function(t,i){var a=this,r=e("<div>").css({width:"0",height:"0",overflow:"hidden"});t.before(r),new n(r,function(){r.remove(),a._add(t,i)},{span:100})},_add:function(t,n){r.info("ready for "+t);var i={app:t,fn:n};this.items?(this.items.push(i),this.items.length>=6&&this._process()):(this.items=[i],this.timer=setTimeout(e.proxy(this,"_process"),100))},_request:function(t){var n=this,a=i.getGlobalViewConfig("fragmentUrl");if(!a)throw"require fragmentUrl in global view config";r.info("request apps html"),e.ajax(a,{dataType:this._isSameDomain(a)?"json":"jsonp",cache:!1,data:this._getData(t),success:function(e){e.isSuccess&&e.result?n._success(t,e.result):n._error(e)},error:function(){n._error()}})},_isSameDomain:function(e){var t=(/^\w+:\/\/([^\/]+)\//.exec(e)||[])[1];return t===window.location.host},_getData:function(t){var n=this,a={};a.page_type=i.getPageType();var r=[];return e.each(t,function(e,t){r.push(n._getItemData(t))}),a.apps=JSON.stringify(r),a},_getItemData:function(e){var t=e.app;if(!t.length)return void r.error("invalid app "+e.app);var n=t.data("app"),i=t.closest("div.region"),a=i.closest("div.segment"),o={app_key:n.id,appName:n.name,segment_id:a.data("segmentId"),layout_type:a.data("layoutType"),region_type:i.data("regionType")};return e.fragmentKey=this._getKey(o),o},_success:function(t,n){r.info("render apps");var i=this,a={};e.each(n,function(e,t){var n=i._getKey(t);a[n]=t}),e.each(t,function(e,t){var n=t.fragmentKey,o=a[n];o&&o.html?i._render(t,o):r.error("can not find item for "+n)})},_render:function(e,t){r.info("render app"+e.app),e.fn(e.app,t.html)},_getKey:function(e){return e.appName+"-"+e.app_key},_error:function(e){var t=e&&e.message||"\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5";r.error(t)}};return o}),define("core.FragmentHandler",["jQuery","Log","core.Fragment","core.AppUtil"],function(e,t,n,i){var a=new t("core.FragmentHandler"),r=function(e,t,n){var i=n.async?"App":n.htmlFragment?"Html":!1;if(!i)return e;if(!t.hasClass("mod-ui-async")&&!t.hasClass("mod-ui-html-fragment"))return e;var a=t.hasClass("ui-load-async");if(a)return t.removeClass("mod-ui-async"),t.removeClass("mod-ui-html-fragment"),e;var r="function"==typeof e,s=r?e:e.init,c=o[i].create(s);if(r)c.prototype=e.prototype,e=c;else{var l=e.init;e.init=function(){e.init=l,c.apply(this,arguments)}}return e},o={};return o.App={create:function(t){var i=this;return function(t){n.add(t,e.proxy(i,"_render"))}},_render:function(e,t){var n=i.create(t);if(n){var a=n.app;e.empty().append(a.children());var r=a.attr("data-view-config"),o=a.attr("data-edit-config"),s=a.attr("data-app"),c=a.attr("data-result");r&&e.attr("data-view-config",r)&&e.data("viewConfig",JSON.parse(r)),o&&e.attr("data-edit-config",o)&&e.data("editConfig",JSON.parse(o)),s&&e.attr("data-app",s)&&e.data("app",JSON.parse(s)),c&&e.attr("data-result",c)&&e.data("result",JSON.parse(c)),e.attr("class",a.attr("class"));var l=e.data("viewConfig");l.async=!1,e.data("viewContextInited",!1),i.ready(e),e.addClass("mod-ui-async-complete")}}},o.Html={create:function(t){var i=this;return function(a,r){this.fragment=function(e,t){a.on("html-fragment-"+e,function(e,n){t(n)})},t.apply(this,arguments),n.add(a,e.proxy(i,"_render"))}},_render:function(t,n){var r=i.create(n);if(r){var o=this,s=this._cache(t),c=e(".ui-html-fragment",r.app);c.each(function(){var n=e(this),i=n.data("fragment");if(!i.name)return void a.error("invalid fragment config for "+n);var r=s[i.name];return r?void o._replace(t,r,n,i):void a.warn("no fragment found: "+i.name)}),t.addClass("mod-ui-html-fragment-complete")}},_cache:function(t){var n=e(".ui-html-fragment",t),i={};return n.each(function(){var t=e(this),n=t.data("fragment")||{};return n.name?void(i[n.name]=t):void a.error("invalid fragment config for "+t)}),i},_replace:function(e,t,n,i){t.replaceWith(n),e.trigger("html-fragment-"+i.name,n),n.addClass("ui-html-fragment-complete")}},r}),define("core.ViewContext",["jQuery","Context","Log","core.Component","core.FragmentHandler"],function(e,t,n,i,a){"use strict";var r=new n("core.ViewContext"),o=new t("ViewContext",{before:function(t){return this.context=t,this.defaultModule=new c(t),site.on("app-view-ready",function(e,n){var i=s.getTemplate(e);t.attach(e,i,n)}),e("div[data-app]","body").each(function(){site.trigger("app-view-ready",e(this))}),site.trigger("app-view-ready-all"),!1},query:function(e,t){this.defaultModule.add(e,t)},resolve:function(e){return i.getAppName(e)},bind:function(t,n,a,o){if(t.data("viewContextInited"))return void r.warn("node is already initialized "+t);t.data("viewContextInited",!0);var s=t.data("viewConfig"),c=t.data("result");r.isEnabled("error")&&s&&!e.isPlainObject(s)&&r.error("invalid data-view-config: "+t),s=e.extend({},i.getGlobalViewConfig(),s),s.context=i.getUserContext(),s.viewData=o,r.isEnabled("info")&&r.info("init app view "+t),this._init(a,t,s,c)},_init:function(e,t,n,i){e=this._decorate(e,t,n,i),s.execute(e,t,n,i)},_decorate:function(e,t,n,i){return a(e,t,n,i)}}),s={execute:function(e,t,n,a){var r=i.getAppName(t);site.executor.execute(r,function(){var i=e;"function"==typeof e?i=new e(t,n,a):e.init&&e.init(t,n,a),t.data("appObject",i)})},getTemplate:function(e){var t=i.getAppTemplate(e);return t&&"defaultTemplate"!==t?t:"default"}},c=function(e){this.context=e,this.cache={}};return c.prototype={init:function(e){r.info("proxy init for "+e);var t=this.cache,n=i.getAppName(e),a=s.getTemplate(e),o=this.getKey(n,a),c=t[o];c||(c=t[o]=[],setTimeout(function(){delete t[o]},1e4)),c.push(arguments)},getKey:function(e,t){return e+"."+t},add:function(t,n){var i=this.context.get(t,n),a=this.getKey(t,n),o=this.cache[a];return o?(e.each(o,function(e,t){r.info("proxy trigger for "+t[0]);var n=[i];n.push.apply(n,t),s.execute.apply(s,n)}),void delete this.cache[a]):void r.info("proxy no item found for "+t)}},o}),define("core.Parts",["jQuery","Class","Log"],function(e,t,n){var i=new n("core.Parts");return new t({init:function(e,t,n){"string"!=typeof e&&(n=t,t=e,e=t.name||"anony-part"),i.info("init parts: "+e),this._mixPartsProto(t),this._mixPartsMember(t),this._executeParts(e,t,n)},_mixPartsProto:function(t){if(!t.__partsMixed__){var n=this._getPartsProto(t);e.each(t.Parts,function(){e.extendIf(this,n)}),t.__partsMixed__=!0}},_getPartsProto:function(t){var n={};return e.each(t,function(i,a){"function"==typeof a&&"init"!==i&&"Parts"!==i&&0!==i.indexOf("_")&&(n[i]=e.proxy(a,t))}),n},_mixPartsMember:function(t){var n={};e.each(t,function(e,t){"init"!==e&&"Parts"!==e&&0!==e.indexOf("_")&&"function"!=typeof t&&(n[e]=t)}),e.each(t.Parts,function(){e.extend(this,n)})},_executeParts:function(t,n,a){i.info("execute Parts ..."),e.each(n.Parts,function(e,t){site.executor.execute(e,function(){t.init.apply(t,a||[])})})}})}),define("core.Msg",["jQuery","Log"],function(e,t){var n=new t("core.Msg"),i=e.extend({info:function(e){this._show(e,"info")},error:function(e){this._show(e,"error")},warn:function(e){this._show(e,"warn")},_show:function(e,t){this.fire(e,t)}},e.Callbacks());return i.add(function(e,t){n.info("["+t+"]"+e)}),i}),define("core.Remote",["jQuery","Log","core.Msg","core.Component"],function(e,t,n,i){var a=new t("core.Remote"),r={config:{},validateHandler:[],dataHandler:[],successHandler:[],errorHandler:[],call:function(t,n){var i=this._getConfig(t),r=i.url?i.url:t,o=null,s=null;return n=e.extend(!0,{cache:!1,type:"get",dataType:"json"},i,n),a.isEnabled("info")&&(s=(new Date).getTime(),a.info(t+" start")),o=e.extend(this._getDefaultData(t,n),n.data),this._request(r,o,n,s)},_getConfig:function(t){var n=i.getGlobalEditConfig("siteEventUrls")||{},a=this.config[t]||{};return n[t]&&(a=e.extend({},a),a.url=n[t]),a},_request:function(t,n,i,r){var o=this;return e.ajax(this._prepareUrl(t,i),{type:i.type,dataType:i.dataType,cache:i.cache,timeout:i.timeout,data:i.paramSpecial?e.paramSpecial(n):n,success:function(e){return o._validate(name,i,e)?(a.isEnabled("info")&&(r=(new Date).getTime()-r,a.info(name+" success, cost "+r+" ms")),o._doDefaultSuccess(name,i,e),i.success&&i.success(e),void(i.complete&&i.complete())):(a.warn("remote call return but failed"),void o._error(name,i,e))},error:function(){a.error("remote call error "+name),o._error(name,i),i.complete&&i.complete()}})},callEvent:function(t,n,i){var a=e.util.substitute("/event/app/{0}/{1}.htm",[t,n]);return this.call(a,e.extend({pageAware:!0,type:"post"},i))},callAscepter:function(t,n,i){var a=e.util.substitute("/ascepter/"+t),r=e.extend({},i);return r.type="post",r.data=r.data||{},r.data.methodConfig=JSON.stringify({name:n,paramterValues:this._getAscepterParams(r)}),delete r.data.params,this.call(a,r)},_getAscepterParams:function(t){var n=t.params||[];return n=e.isArray(n)?n:[n],t.uidAware&&n.splice(0,0,i.getUserContext().uid),n.length?n:void 0},_prepareUrl:function(t,n){return e.util.substitute(t,n)},_getDefaultData:function(t,n){var i={};return this.dataHandler.length&&e.each(this.dataHandler,function(a,r){e.extend(i,r(t,n))}),i},_validate:function(e,t,n){for(var i=0,a=this.validateHandler.length;a>i;i++)if(!this.validateHandler[i](e,t,n))return!1;return!0},_doDefaultSuccess:function(t,n,i){this.successHandler.length&&e.each(this.successHandler,function(e,a){a(t,n,i)})},_error:function(e,t,i){if(i&&501===i.errorCode)return void alert(i.errorMsg||"\u5305\u542b\u8fdd\u7981\u5185\u5bb9\uff0c\u8bf7\u4fee\u6539!");if(i&&i.errorMsg&&i.errorMsg.indexOf("forbiddenWords:")>-1)return void alert(i.errorMsg.replace("forbiddenWords:","")||"\u5305\u542b\u8fdd\u7981\u5185\u5bb9\uff0c\u8bf7\u4fee\u6539!");if(!t.error||t.error(i)===!1){for(var r=0,o=this.errorHandler.length;o>r;r++)if(this.errorHandler[r](e,t,i)!==!1)return;return i?void a.warn("ignore error"):void n.error("\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5")}}};return r.dataHandler.push(function(t,n){var a={},r=i.getGlobalViewConfig("remoteExtraData");if(n.noExtraData||(a.site_id=i.getSiteId(),r&&e.extend(a,r)),n.csrfToken&&(a._csrf_token=i.getUserContext().csrfToken),n.pageAware&&(a.site_key=i.getSiteKey(),a.page_name=i.getPageName(),a.page_type=i.getPageType()),n.siteAware&&(a.site_key=i.getSiteKey()),n.templateAware&&(a.template_key=i.getTemplateKey()),n.regionAware){var o=n.regionAware.closest("div.region"),s=o.closest("div.segment");a.region_type=o.data("regionType"),a.segment_id=s.data("segmentId"),a.layout_type=s.data("layoutType")}return a}),r.validateHandler.push(function(e,t,n){var i=t.dataType||"html";return n?"html"===i&&!t.preventValidateHtml&&/<html[^>]*>/i.test(n)?!1:"json"===i||"jsonp"===i?n.success||n.isSuccess:!0:!1}),e.extend(r.config,{"app.load":{url:"/app/{appName}.htm",type:"get",dataType:"html",pageAware:!0}}),r}),define("core.StyleLoader",["jQuery","Log","core.Component","CssLoader","core.RegisterAppsFac"],function(e,t,n,i,a){"use strict";var r=new t("core.StyleLoader");return{loadAppStyles:function(t,n,i){if(this._bindFlag||this._bindPageReload(),this._stylesCache||this._prepareStylesCache(),!this._stylesCache[t]){this._stylesCache[t]=!0;var a,r=[],o=[],s=[];return n=this._prepareStyles(t,n),a=this._prepareReactStyles(t,i),e.each(n,function(e,t){"css"===t.type&&r.push(t.url),"js"===t.type&&o.push(t.url)}),r.length&&s.push(this.loadAppCss(r)),o.length&&s.push(this.loadAppJs(o)),a.csses.length&&s.push(this.loadAppCss(a.csses,"cdn")),a.jses.length&&s.push(this.loadAppJs(a.jses,"cdn")),s.length?e.when.apply(e,s):null}},loadOssAppStyles:function(t,n){if(this._bindFlag||this._bindPageReload(),this._stylesCache||this._prepareStylesCache(),!this._stylesCache[t]){this._stylesCache[t]=!0;var i=[],a=[],r=[];return e.each(n,function(e,t){"css"===t.type&&i.push(t.url),"js"===t.type&&a.push(t.url)}),a.length&&r.push(this.loadOssAppJs(a)),i.length&&r.push(this.loadOssAppCss(i)),r.length?e.when.apply(e,r):null}},_bindPageReload:function(){var e=this;this._bindFlag=!0,site.on("page-reload",function(){e._prepareStylesCache()})},_prepareStylesCache:function(){r.info("prepare style cache");var t=this._stylesCache={},i=e("div[data-app]","#content");i.each(function(e,i){var a=n.getAppName(i);t[a]=!0})},_prepareStyles:function(t,n){if(e.isArray(n))return n;var i=[];return n.css&&i.push(this._createStyleItem(t,"css")),n.js&&i.push(this._createStyleItem(t,"js")),i},_prepareReactStyles:function(e,t){var i={csses:[],jses:[]};if(!t)return i;var r=n.getAppModuleConfig(t),o=r.extendInfo||{};

if("react"===r.appType){var s=o.frontName?o.frontName:e;i.jses.push("cwp-pc/"+s+"/"+o.frontVersion+"/index.js"),o.hasClass!==!1&&i.csses.push("cwp-pc/"+s+"/"+o.frontVersion+"/index.css"),a.registerApp(r)}return i},_createStyleItem:function(t,n){var i="app/{0}/1.0.0/{1}";return{type:n,url:e.util.substitute(i,[t,"view."+n])}},loadAppCss:function(t,a){var o="cdn"===a?n.getCdnDomain():n.getStaticDomain();t=e.makeArray(t);var s=15,c=null,l=o+"/??",u=null,f=null;return e.util.ua.ie&&(f=e("link.lazy-load","head"),r.info("link.lazy-load size: "+f.length),f.length>s&&(u=f.eq(0).removeClass("lazy-load"),l=u.attr("href")+",")),u&&setTimeout(function(){r.info("remote link"),u.remove()},1e4),c=l+t.join(","),r.info("loading css: "+c),e.Deferred(function(t){var n=i.load(c,{success:function(){t.resolve()}});e(n).addClass("lazy-load")})},loadAppJs:function(t,i){var a="cdn"===i?n.getCdnDomain():n.getStaticDomain(),o=a+"/??"+t.join(","),s=e.Deferred();return r.info("loading js "+o),e.ajax(o,{dataType:"script",cache:!0,success:function(){r.info("load js success "+o),s.resolve()}}),s},loadOssAppJs:function(t){for(var n=t.length||0,i=e.Deferred(),a=[],o=0;n>o;o++){var s=e.Deferred();e.ajax(t[o],{dataType:"script",cache:!0,success:function(){r.info("load js success "+t[o]),s.resolve()}}),a.push(s)}return e.when.apply(e,a).done(function(){i.resolve()}),i},loadOssAppCss:function(t){for(var n=t.length||0,a=e.Deferred(),r=[],o=0;n>o;o++){var s=e.Deferred(function(n){var a=i.load(t[o],{success:function(){n.resolve()}});e(a).addClass("lazy-load")});r.push(s)}return e.when.apply(e,r).done(function(){a.resolve()}),a}}}),define("core.AppLoader",["jQuery","Log","core.Remote","core.Component","core.StyleLoader","core.AppUtil"],function(e,t,n,i,a,r){var o=new t("core.AppLoader"),s={reload:function(t,n){var a=this;return n=n||{},t.length?this.request(e.extendIf({appName:i.getAppName(t),appKey:i.getAppKey(t),regionAware:t,success:function(e){t.replaceWith(e),n.success&&n.success(e,t),a._appReady(e,n),site.trigger("app-reload",[e,t])}},n)):void o.warn("parameter error, invalid app for reload")},load:function(t){var n=this,i=t.region,a=t.index;this.request(e.extendIf({appName:t.appName,appKey:t.appKey,appStyles:t.appStyles,regionAware:i,success:function(r,o,s){if(i){var c=e("div.mod-box",i);a=a>=0?a:c.length,0===a?i.prepend(o):c.eq(a-1).after(o)}t.success&&t.success(r,o,s),n._appReady(r,t),o&&site.trigger("app-box-ready",[o,t.boxData]),site.trigger("app-load",[r,o,s])}},t))},_appReady:function(e,t){e.addClass("ui-load-async"),r.ready(e,t)},request:function(t){var r=null,o=t.appdata;return t.isOssResource&&t.appStyles?r=a.loadOssAppStyles(t.appName,t.appStyles):t.appStyles&&(r=a.loadAppStyles(t.appName,t.appStyles,t.app)),o&&e.isPlainObject(o)&&(o=JSON.stringify(o)),n.call("app.load",e.extendIf({appName:t.appName,data:e.extend({app_key:t.appKey,appdata:o,is_diy:i.getUserContext().diy},t.data),success:e.proxy(this,"_requestSuccess",t,r)},t))},_requestSuccess:function(e,t,n){var i=r.create(n);i||e.error&&e.error();var a=i.app,o=i.box;return t?void t.then(function(){e.success(a,o,n)}):void e.success(a,o,n)}};return s}),define("core.AppDialog",["jQuery","Class","ui.Dialog","core.AppLoader"],function(e,t,n,i){return new t(n,{$prepare:function(t){if(!t.appName)throw"appName should specified";return t.loader=e.proxy(this,"_load"),t.buttons=t.buttons||[],t.contentSuccess=e.proxy(this,"_contentSuccess"),t},_load:function(t){var n=e.extend({},this.config);n.success=function(e){t(e)},n.error=function(){t(!1)},i.load(n)},_contentSuccess:function(e){var t=this.config;e.node.on("event",function(n,i){var a=i.type;a&&("close"===a?e.close():"loading"===a?e.showLoading(i.message):"function"==typeof t[a]&&t[a](i))})},getApp:function(){return e("div[data-app]",this.node)}})}),define("core.RegisterAppsFac",[],function(){return{registerApps:function(e){if(e&&0!==e.length)for(var t=0;t<e.length;t++)this.registerApp(e[t])},registerApp:function(e){if(e)try{var t=e.appName,n=e.extendInfo&&e.extendInfo.frontName?e.extendInfo.frontName:t,i=e.extendInfo&&e.extendInfo.renderContainer?e.extendInfo.renderContainer:".m-content";define(["jquery","AppContext","require"],function(e,a,r){var o={init:function(t,a,o){var s=e.extend(a||{},{editData:o||{}});r.use(["cwp-pc/"+n+"/index","cwp-pc-library/react","cwp-pc-library/react-dom"],function(e,n,a){a.render(n.createElement(e,s),t.find(i)[0])})}};a.register("view",t,o)})}catch(a){}}}}),define("core.RegisterApp",[],function(){}),define("part.SiteAlitalk",["jQuery","core.Component"],function(e,t){function n(e,t,n,i,a,r){a?xunpanInfo(e,"true",r,t,n,i):xunpanInfo(e,"false","",t,n,i)}function i(e,t,n,i,r,o){var s="";return s=s+"?type="+t,s=s+"&sourcetype="+i,s=s+"&toid="+n,s=s+"&memberLevel="+r,a(e,s,o),!0}function a(e,t,n){if(d=new Date,document.images){var i=n?"www":"",a="";try{a=document.cookie.match(/track_cookie[^;]*cosite=(\w+)/)[1]}catch(r){}var o="//stat.1688.com/feedback/click.html";a.length>0&&(t=t+"&fromsite="+a),i.length>0&&(t=t+"&domainType="+i),logurl=o+t+"&time="+d.getTime();try{(new Image).src=logurl}catch(r){}}return!0}return function(a){var r=t.getUserContext(),o=t.getGlobalConfig(),s=r.uid,c=o.isTP,l=o.isTopDomain,u=o.xunpanUrl,f=c?"PM":"COMMON",d=o.companyId;a=e(a),FE.util.alitalk(a,{prop:function(){var t=e(this).data("alitalk"),n=t.offerid;return n?"&gid="+t.offerid:""}}),a.mousedown(function(e){return aliclick(this,"?tracelog=wp_infowidget_alitalk"),aliclick(this,"?info_id="+d),n(this,s,"","",l,u),i(this,"alitalk",s,"athena",f,l),!1})}}),define("part.SiteAlitalk2",["jQuery","core.Component"],function(e,t){function n(e,t,n,i,a,r){a?xunpanInfo(e,"true",r,t,n,i):xunpanInfo(e,"false","",t,n,i)}function i(e,t,n,i,r,o){var s="";return s=s+"?type="+t,s=s+"&sourcetype="+i,s=s+"&toid="+n,s=s+"&memberLevel="+r,a(e,s,o),!0}function a(e,t,n){if(d=new Date,document.images){var i=n?"www":"",a="";try{a=document.cookie.match(/track_cookie[^;]*cosite=(\w+)/)[1]}catch(r){}var o="//stat.1688.com/feedback/click.html";a.length>0&&(t=t+"&fromsite="+a),i.length>0&&(t=t+"&domainType="+i),logurl=o+t+"&time="+d.getTime();try{(new Image).src=logurl}catch(r){}}return!0}return function(a,r){var o=t.getUserContext(),s=t.getGlobalConfig(),c=o.uid,l=s.isTP,u=s.isTopDomain,f=s.xunpanUrl,d=l?"PM":"COMMON",p=s.companyId;a=e(a),a.mousedown(function(e){return aliclick(this,"?tracelog=wp_infowidget_alitalk"),aliclick(this,"?info_id="+p),n(this,c,"","",u,f),i(this,"alitalk",c,"athena",d,u),!1})}}),define("part.Fdsafe",["jQuery","Class"],function(e,t){return t({init:function(t,n){if(!t)throw"please specify appkey for fdsafe";this.appkey=t,this.name=n||"Anonymous";var i=this;e.each(["info","notice","warn","error","fatal"],function(e,t){i[t]=function(){try{var e=i._toMsg(arguments);i.log(e,t)}catch(n){}}})},log:function(e,t){},_toMsg:function(t){var n=[];return e.each(t,function(e,t){if(t){var i=t.toString();t.stack&&(i+="\n"+t.stack.substr(0,500)),n.push(i)}}),n.join(" | ")},_level:{info:0,notice:1,warn:2,error:3,fatal:4}})}),define(["jQuery","Log","core.PageContext","core.AppContext","core.ViewContext","ui.Autowire","core.Component","core.Fragment","part.Fdsafe"],function(e,t,n,i,a,r,o,s,c){var l=new t("!Site"),u={init:function(){var t=this;i.push("view",a),e(function(){site.executor.execute("domready",e.proxy(t,"ready"))})},ready:function(){this.initFdsafe(),this.initPage(),this.initAutowire(),site.trigger("domready-complete"),this.report()},initFdsafe:function(){var e=new c("1119a660fb00453aa8fe119141c7cf14",o.getSiteId());site.error.handler=function(t,n){if(e.warn(t,n),l.isEnabled("info"))throw t;var i=n?"["+n+"] "+t:t;l.error(i)}},initAutowire:function(){new r("body",{executor:site.executor}),site.on("app-view-ready app-edit-ready",function(e){new r(e,{executor:site.executor})})},initPage:function(){n.start(),i.start(),s.start()},report:function(){l.isEnabled("info")&&l.info("\n\n"+site.executor.report()+"\n\n")}};u.init()}),define(["jQuery","PageContext"],function(e,t){var n={init:function(){var t=(window.location.hash||"").substr(1);if(t){var n=t.split("&"),i={};e.each(n,function(e,t){var n=t.indexOf("=");-1!==n&&(i[t.substr(0,n)]=t.substr(n+1))}),i.action&&site.on("domready-complete",function(){site.trigger("action-"+i.action,i)})}}};t.add("plugin.Action",n)}),define(["jQuery","Log","PageContext","widget.LazyInitializer"],function(e,t,n,i){var a=new t("plugin.LazyLoad"),r={init:function(){var t=this;this.doInit("body"),site.on("domready-complete",function(){site.on("app-view-ready ui-lazy-load-bind",function(e){t.doInit(e)})}),site.on("ui-lazy-load-trigger",function(t){if(t=e(t),t.length&&!t.data("lazyLoadTrigger")){t.data("lazyLoadTrigger",!0);var n=e("textarea.lazy-load-template",t);n.each(function(){var t=e(this).data("lazyLoadHandler");t&&t()})}})},doInit:function(t){var n=this,a=e("textarea.lazy-load-template",t);a.each(function(){var t=e(this),a=t.prev("div.lazy-load-loading");a.length||(a=e("<div>"),t.before(a));var r=function(){n.initTpl(a,t)};t.data("lazyLoadHandler",r),new i(a,r)})},initTpl:function(t,n){var i=n.val();i=i.replace(/<(\/?script[^>]*)>/g,"&lt;$1&gt;");var r=e(i),o=null,s=null;a.info("lazy load for "+r),r.addClass("ui-lazy-load"),t.replaceWith(r),n.remove(),r.is("div[mod-box]")?(s=r,o=e(">div.mod",s)):r.is("div[data-app]")&&(o=r),s&&site.trigger("app-box-ready",s),o&&site.trigger("app-view-ready",o)}};n.add("plugin.LazyLoad",r)}),define(["jQuery","PageContext"],function(e,t){var n={init:function(){setTimeout(e.proxy(this,"initAutoTracelog"),5e3),setTimeout(e.proxy(this,"initExpTracelog"),3e3)},initAutoTracelog:function(){var e=this;this.handle("click",function(t,n){t.is("input:text")||t.is("select")||e.trace(n)}),this.handle("change",function(t,n){t.is("select")&&e.trace(n)});var t="tracelogLastValue";this.handle("blur",function(n,i){if(n.is("input:text")){var a=n.data(t),r=n.val();a!==r&&(e.trace(i),n.data(t,r))}})},handle:function(t,n){e("body").on(t,"[data-tracelog]",function(){var t=e(this),i=t.data("tracelog");i&&n(t,i)})},initExpTracelog:function(){var t=this,n=function(n){var i=e("div[data-tracelog-exp],ul[data-tracelog-exp]",n);i.each(function(){var n=e(this),i=n.data("tracelogExp");i&&t.trace(i),n.removeData("tracelogExp")})};n("body"),site.on("widget-tracelog",n)},trace:function(e){aliclick(null,"?tracelog="+e)}};t.add("plugin.TraceLog",n)});define(['jQuery', 'Class', 'AppContext', 'widget.UI'], 

function($, Class, AppContext,UI) {
	
	var officialsite_share = ({ 
		init: function(div, config){
			 UI.positionFixed(div);
			 this.div=div;
			 this.config=config;
			 this.initTop();
			 this.initScroll();
			 this.initShare();
		},
		initShare:function(){
			var self=this;
			$('.top',self.div).hide();
			$('.share',self.div).hide();
		},
		initScroll:function(){
			var scrollWindow = $(window),self=this;
			scrollWindow.on('scroll',function(){
				var top=scrollWindow.scrollTop(),height=scrollWindow.height();
				if(top>height){
					$('.top',self.div).show();
				}else{
					$('.top',self.div).hide();
				}
			});
		},
		initTop:function(){
			 var self = this;
			 $.use("ui-scrollto",function(){
				 	 $('.top',self.div).on('click',function(e){
				 		 e.preventDefault();
				 		 $(window).scrollTop(0);
		                 return false;  
				 	 });
				
			   });
		}
	});
	AppContext.register('view', 'officialsite_share', officialsite_share);
});
define([ 'jQuery', 'PageContext' ],

function($, PageContext) {

	var WhiteList = [ 'alibaba.com', 'alibaba.cn', 'alibaba.in',
			'alibaba.com.cn', 'taobao.com', 'taobao.cn', 'taobao.com.cn',
			'taobao.net', 'alipay.com', 'alipay.com.cn', 'alipay.net',
			'zhifubao.com', 'zhifu.com', 'aliexpress.com', '1688.com',
			'1688.com.cn', '1688.cn', 'yahoo.cn', 'yahoo.com.cn',
			'alisoft.com', 'alisoft.cn', 'alisoft.com.cn', 'alimama.com',
			'alimama.cn', 'alimama.com.cn', 'koubei.com', 'koubei.cn',
			'koubei.com.cn', 'aliimg.com', 'aliimg.net', 'alixueyuan.net',
			'alibado.com', 'alibaba-inc.com','alicdn.com','aliloan.com','tmall.com','tianmao.com','wljg.gdgs.gov.cn', 'www.beian.gov.cn' ];

	var BlackList = [ 's.click.alimama.com', 'gouwu.alimama.com',
			'cam.taoke.alimama.com', 'tms.taoke.alimama.com',
			'search8.taobao.com', 'p.alimama.com', 'z.alimama.com','oauth.taobao.com',
			't.alimama.com', 's.click.taobao.com', 'huoban.taobao.com','container.open.taobao.com',
			'login.taobao.com', 'member1.taobao.com', 't.pianyi.taobao.com',
			'g.click.taobao.com', 'a.alimama.com', 'click.alimama.com',
			'fandiaoyu.taobao.com', 'haibao.huoban.taobao.com',
			'pindao.huoban.taobao.com', 'taoke.alimama.com', 'tk.alimama.com',
			'zhuti.huoban.taobao.com', 'item8.taobao.com', 'shop8.taobao.com',
			'dingyue.taobao.com', 'member.alisoft.com', 'learn.taobao.com',
			's8.taobao.com', 'redirect.simba.taobao.com', 'to.taobao.com',
			'hkk.brand.alibaba.com', 'blog.china.alibaba.com',
			'url.alibaba.com', 'www.alipay.com', 'auth.alipay.com',
			'light.lz.taobao.com', 'login.taobao.com', 'login.etao.com',
			'zht.alipay.com', 'member1.taobao.com', 'login.hitao.com',
			'url.cn', 'container.api.taobao.com' ];

	var LinkChecker = {
		init : function(div, config) {
			this.div = div;
			this.monitor();
		},
		monitor : function() {
			var self = this;
			$("body").on("click", 'a,area', function(e) {
				var host = window.location.hostname;
				// ·Ç2¼¶ÓòÃûÖ±½Ó·µ»Ø£¬²»ÔÚÐ£Ñé
				if (host.lastIndexOf(".1688.com") <= 0) {
					return;
				}
				var href = $(this).attr('href');
				href = $.trim(href);
				var govpattern = /^(https:\/\/|http:\/\/)(.*)gov.cn(.*)/;
				var govmatch = govpattern.exec(href);
				if(govmatch){
					//º¬ÓÐgov.cnµÄÔÊÐíÌø×ª£¬·ñÔò×ß°×Ãûµ¥Ð£Ñé
					return;
				}
				var linkpattern = /^https?:\/\/(([\w-]+\.)+[\w-]+)/;
				var match = linkpattern.exec(href);
				// ÅÐ¶ÏÊÇ·ñÊÇÁ´½Ó
				if (match){
					var newHref = match[1];
					var flag = false;
					// °×Ãûµ¥Ð£Ñé
					$.each(WhiteList, function(i, n) {
						if (newHref === n) {
							flag = true;
							return false;
						}
						if (self.endWith(newHref,("." + n))) {
							flag = true;
							return false;
						}
					});
					if (!flag) {
						e.preventDefault();
						return;
					}
					// ºÚÃûµ¥¼ìÑé
					$.each(BlackList, function(i, n) {
						if (newHref === n) {
							e.preventDefault();
							return;
						} else if (newHref.lastIndexOf("." + n) >= 0) {
							e.preventDefault();
							return;
						}
					});
				}else{
					//È¡ÏûÖ±½Óreturn,¿ÉÄÜÊÇa±êÇ©¶Ô±¾µØµÄµ÷ÓÃ£¬Èçµ÷ÓÃqq£¬skype
					var whiteList = ['tencent'];
					var flag = false;
					for(var i=0;i<whiteList.length;i++){
						if(href.indexOf(whiteList[i])==0){
							flag = true;
						}
					}
					if(!flag){
						e.preventDefault();
						return;
					}
					
				}
			});
		},
		endWith : function(hostS,comS) {
			
			if(hostS==null||hostS==""||comS.length==0||hostS.length < comS.length){
				return false;
			}
			if(hostS.substring(hostS.length-comS.length)==comS){
				return true;
			}
			else{
				return false;
			}
			return false;


		},
		getUrl : function(url) {
			if (url.indexOf("http://") >= 0) {
				url = url.substring("http://".length);
			} else if (url.indexOf("https://") >= 0) {
				url = url.substring("https://".length);
			}
			if (url.indexOf(":") > 0) {
				return url.substring(0, url.indexOf(":"))
			} else if (url.indexOf("/") > 0) {
				return url.substring(0, url.indexOf("/"))
			} else {
				return url;
			}
		}
	};
	PageContext.register('LinkChecker', LinkChecker);
});/**
 * ×èÖ¹Ö§¸¶±¦ÍâÁ´
 * @author zhao.zdw
 */
define([ 'jQuery', 'PageContext'],
function($, PageContext) {
	var PreventAlipay = {
        init:function (div, config, data) {
        	$('body').on('click', 'a', function(e) {
				var linkUrl = $(this).attr('href');
				if (linkUrl && linkUrl.toLowerCase().indexOf('alipay.com') > -1) {
					e.preventDefault();
				}
			});
        }
    };

    PageContext.register('PreventAlipay', PreventAlipay);
});
define(['jQuery', 'Class', 'AppContext'], 

function($, Class, AppContext) {
	
	var TopToolBar = new Class({ 
		
		init: function(div, config){
			var self = this;
			this.div = div;
			this.config = config;
			this.saveMeHandlder();
			this.setHome();
			this.eventHandler();
		},
		eventHandler:function(){
			var self = this;
			$('a.phonesite',self.div).mouseover(function(e){
				e.preventDefault();
				$('div.m-qrcode',self.div).removeClass('hide');
            }).mouseout(function(){
            	$('div.m-qrcode',self.div).addClass('hide');
            });
			
		},
		
		saveMeHandlder: function(){
			var self = this;
			$('a.saveme', self.div).on('click', function(){
				var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'Ctrl';
				if (document.all) {
					try {
						window.external.addFavorite( window.location, document.title);
					} catch (e) {
						try {
							window.sidebar.addPanel(document.title, window.location, '_self');
						} catch (e) {
							alert('ÄúµÄä¯ÀÀÆ÷ÊÕ²Ø¸ÃÒ³ÃæÃ»ÓÐ³É¹¦£¬Çë³¢ÊÔ' + ctrl + '+D½øÐÐÊÕ²Ø');
						}
					}
				} else if (window.sidebar) {
					try {
						window.sidebar.addPanel(document.title, window.location, '_self');
					} catch (e) {
						alert('ÄúµÄä¯ÀÀÆ÷ÊÕ²Ø¸ÃÒ³ÃæÃ»ÓÐ³É¹¦£¬Çë³¢ÊÔ' + ctrl + '+D½øÐÐÊÕ²Ø');
					}
				} else {
					alert('ÄúµÄä¯ÀÀÆ÷ÊÕ²Ø¸ÃÒ³ÃæÃ»ÓÐ³É¹¦£¬Çë³¢ÊÔ' + ctrl + '+D½øÐÐÊÕ²Ø');
				}
			});
		},
		
		setHome: function() {
			var self = this;
			var domain = self.config.currentUrl;
			$('a.sethome', self.div).on('click', function(){
				try{ 
					document.body.style.behavior = 'url(#default#homepage)';
		            document.body.setHomePage(domain);
//	                self.style.behavior='url(#default#homepage)';
//	                self.setHomePage(domain); 
		    	} 
		    	catch(e){ 
	                if(window.netscape) { 
	                	try { 
	                		netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
	                    } 
	                    catch (e) { 
	                                alert("´Ë²Ù×÷±»ä¯ÀÀÆ÷¾Ü¾ø£¡\nÇëÔÚä¯ÀÀÆ÷µØÖ·À¸ÊäÈë¡°about:config¡±²¢»Ø³µ\nÈ»ºó½« [signed.applets.codebase_principal_support]µÄÖµÉèÖÃÎª'true',Ë«»÷¼´¿É¡£"); 
	                        } 
	                        //var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
	                        //prefs.setCharPref('browser.startup.homepage',vrl); 
	                 } 
		    	} 
			});
		}
		
	});
	
	AppContext.register('view', 'topToolBar', TopToolBar);
});
/**
 * ²úÆ··ÖÀà¸¡²ã
 * @author zengpan.zhengzp
 */
define([ 'jQuery', 'AppContext', 'widget.FloatPanel'],function($, AppContext, FloatPanel) {
	var OfferCategory = {
	        init:function (div, config, data) {
	        	this.pageSize = 10;
	            this.config = config;
	            this.div = div;
	            this.handler = $('a.show-category', div);

	            this.bindEvent();
	        },
	        bindEvent:function () {
	            var self = this;
	            this.handler.one('mouseenter', function () {
	                self.showCategoryDiv();
	            });
	        },
	        
	        //¸¡³ö¶þ¼¶ÀàÄ¿
	        showSubCategory:function(){
	        	var self = this;
	        	firCategory = $('li.sec', self.containerDiv);
	        	
	        	//Êó±ê½øÈëÒ»¼¶ÀàÄ¿Õ¹Ê¾¶þ¼¶ÀàÄ¿¸¡²ã
	        	self.containerDiv.on('mouseenter','li.sec', function(){
	        		//ÔÚÒ»¼¶ÀàÄ¿ÉÏÌí¼ÓÁËÊôÐÔdata-index£¬ÓÃÒÔ¿ØÖÆÕâ¸öÒ»¼¶ÀàÄ¿¶ÔÓ¦µÄ¶þ¼¶ÀàÄ¿div
	        		var subClassName = $(this).attr("data-index");
	        		
	        		var position = $(this).position();
	        		var left = position.left + 192;
	        		
	        		self.hoverClass = " rhover";
	        		var topNavIndex = $('input[name=topNavIndex]', self.containerDiv).val();
	        		
	        		//µ±¹©Ó¦²úÆ·À¸Ä¿Ò³ÔÚµ¼º½À¸µÄÇ°ËÄ¸öÊ±¶þ¼¶ÀàÄ¿ÏòÓÒ¸¡³ö£¬·ñÔòÏò×ó
	        		if(topNavIndex > 4){
	        			//µ±¶þ¼¶ÀàÄ¿Ïò×ó¸¡³öÇÒ¶þ¼¶ÀàÄ¿¸öÊý´óÓÚ10¸ö£¬ÔòÐèÒª·Ö³ÉÁ½ÁÐ£¬Ã¿ÁÐ¿í200px£¬¸¡³öÎ»ÖÃÐèÒªÏò×óÍÆ½ø400px
	        			var subSize = $("input[name=subSize]",$(this)).val();
	        			if(subSize > 10){
	        				left = position.left - 402;
	        			} else{
	        				left = position.left - 202;
	        			}
	        			self.hoverClass = " lhover";
	        		} 
	        		
	        		//½øÈëÒ»¼¶ÀàÄ¿¼ÓÉÏhoverÐ§¹û
	        		var firClassName = $(this).attr("class");
	        		if(firClassName.indexOf(self.hoverClass) == -1){
	        			$(this).addClass(firClassName + self.hoverClass);
	        		}
	        		
	        		//ÕÒµ½ÒªÕ¹Ê¾µÄ¶þ¼¶ÀàÄ¿divÕ¹Ê¾Ö®
	        		self.subCategory = $("div." + subClassName, self.containerDiv).css({
                        'display':'block',
                        'left':left,
                        'top':position.top
                    });
	        		
	        		self.subCategory.bind('mouseleave', function(){
	        			$(this).css("display","none");
	        			//ÍË³ö¶þ¼¶ÀàÄ¿È¥³ýÒ»¼¶ÀàÄ¿µÄhoverÐ§¹û
	        			self.delHover(firCategory,self.hoverClass);
	        		});
	        	});
	        	//Êó±êÀë¿ªÒ»¼¶ÀàÄ¿Òþ²Ø¶þ¼¶ÀàÄ¿¸¡²ã
	        	self.containerDiv.on('mouseleave','li.sec', function(){
	        		var handler = this;
	        		var className = $(this).attr("data-index");
	        		
	        		self.timeOut = setTimeout(function(){
	        			$("div." + className, self.containerDiv).css("display","none");
	        			//ÍË³öÒ»¼¶ÀàÄ¿È¥³ýhoverÐ§¹û
	        			self.delHover($(handler),self.hoverClass);
	        		},20);
	        		
	        		//´ÓÒ»¼¶ÀàÄ¿½øÈë¶þ¼¶ÀàÄ¿¸¡²ãÊ±£¬±£³Ö¶þ¼¶ÀàÄ¿¸¡²ã²»Òþ²Ø
		        	self.subCategory.bind('mouseenter', function(){
		        		¡¡clearTimeout(self.timeOut);
		        	});
	        	});
	        },
	        
	        //·­Ò³
	        changePage:function(){
	        	 var self = this;
	        	 var upPage = $('a.up', self.containerDiv);
	        	 var downPage = $('a.down', self.containerDiv);
		         
		         //ÏòÉÏ·­Ò³
	             upPage.bind('click', function(){
	            	 var $pageNum = $('input[name=pageNum]', self.containerDiv);
		        	 var $pages = $('input[name=pages]', self.containerDiv);
	            	 var pageNum = $pageNum.val();
		        	 var pages = $pages.val();
		        	 
		        	 pageNum = parseInt(pageNum);
		        	 pages = parseInt(pages);

		        	 if(pageNum == 1){
	            		 return false;
	            	 }
		        	 
		        	 //Òþ²ØÏÂÒ»Ò³
	            	 var shows = $('li.show', self.containerDiv);
	            	 var start = (pageNum - 1) * self.pageSize + 1;
	            	 for(var i = start;i< start + self.pageSize;i++){
	            		 self.switchClass($(shows[i - start]), "category-hide" + i);
	            	 }
	            	 shows.css("display","none");
	            	 
	            	 //ÏòÉÏ·­Ò³Ò³Êý¼õ1
	            	 pageNum = pageNum - 1;
		        	 $pageNum.val(pageNum);
		        	 self.showPageNum(pageNum);
	            	 
	            	 //Õ¹Ê¾ÉÏÒ»Ò³
	            	 var start = (pageNum - 1) * self.pageSize + 1;
	            	 for(var i = start;i< start + self.pageSize;i++){
	            		 var hidden = $('li.category-hide' + i, self.containerDiv);
	            		 
	            		 if(hidden.length == 0){
	            			 return false;
	            		 }
	            		 hidden.css("display","block");
	            		 self.switchClass(hidden, "show");
	            	 }	
	             });
	             //ÏòÏÂ·­Ò³
	             downPage.bind('click', function(){
	            	 var $pageNum = $('input[name=pageNum]', self.containerDiv);
		        	 var $pages = $('input[name=pages]', self.containerDiv);
	            	 var pageNum = $pageNum.val();
		        	 var pages = $pages.val();
		        	 
		        	 pageNum = parseInt(pageNum);
		        	 pages = parseInt(pages);

		        	 if(pageNum == pages){
	            		 return false;
	            	 }
		        	 
		        	 //Òþ²ØÉÏÒ»Ò³
	            	 var shows = $('li.show', self.containerDiv);
	            	 
	            	 var start = (pageNum - 1) * self.pageSize + 1;
	            	 for(var i = start;i< start + self.pageSize;i++){
	            		 self.switchClass($(shows[i - start]), "category-hide" + i);
	            	 }
	            	 shows.css("display","none");
	            	 
		        	 pageNum = pageNum + 1;
		        	 $pageNum.val(pageNum);
		        	 self.showPageNum(pageNum);
		        	 
	            	 //Õ¹Ê¾ÏÂÒ»Ò³
	            	 var nextStart = (pageNum - 1) * self.pageSize + 1;
	            	 
	            	 var nextEnd = nextStart + self.pageSize;
	            	 if(pageNum == pages){
	            		 nextEnd = nextStart + self.pageSize + 1
	            	 }
	            	 for(var i = nextStart;i< nextEnd;i++){
	            		 var hidden = $('li.category-hide' + i, self.containerDiv);
	            		 if(hidden.length == 0){
	            			 return false;
	            		 }
	            		 
	            		 hidden.css("display","block");
	            		 self.switchClass(hidden, "show");
	            	 }	            	 
	             });
	        },
	        
	        //ÔÚÀàÄ¿¸¡³ö²ãÖÐÕ¹Ê¾Ò³Êý
	        showPageNum:function(pageNum){
	        	 var $pageNum = $('span[name=pageNum]', this.containerDiv);
	        	 $pageNum.html(pageNum);
	        },
	        
	        //Çå³ýhoverÐ§¹û
	        delHover:function(obj,hoverClass){
	        	var firClassName = obj.attr("class");
	        	obj.removeClass(hoverClass);
	        },
	        
	        //ÇÐ»»class show hidden
	        switchClass:function(obj, replacement){
	        	var className = obj.attr("class");
	        	if(!className){
	        		return;
	        	}
	        	
	        	if(replacement == "show"){
	        		className = className.replace(/category-hide\d+/, 'show');
	        	} else{
	        		className = className.replace("show", replacement);
	        	}
	        	obj.attr("class", className);
	        },
	        
	        ajaxCategoryLoader:function (callback) {
	            var config = this.config;
	            if (!config.categoryUrl || !config.uid || !config.domainId) {
	                return;
	            }
	            $.ajax(config.categoryUrl, {
	                dataType:'jsonp',
	                data:{
	                    uid:config.uid,
	                    domainId:config.domainId,
	                    topNavIndex:config.topNavIndex
	                },
	                success:function (_data) {
	                    callback(_data);
	                }
	            });
	        },
	        showCategoryDiv:function () {
	            var self = this;
	            this.ajaxCategoryLoader(
	                function (categoryDiv) {
	                    var offset = self.handler.offset();
	                    self.containerDiv = $('<div class="offer-category-container" data-tracelog-exp="wp_page_offergroup_disp">');
	                    self.containerDiv.appendTo('body');

	                    //»ñÈ¡¸¸divµÄÓÒ²àÎ»ÖÃ
	                    var topNavBar = $('.top-nav-bar');
	                    var winWidth = topNavBar.width() + topNavBar.offset().left;
	                    var divWidth = 192;

	                    if (offset.left + divWidth > winWidth) {
	                        offset.left = winWidth - divWidth - 2;
	                    }

	                    self.containerDiv.css({
	                        'display':'none',
	                        'left':offset.left,
	                        'top':offset.top + self.handler.height()
	                    });

	                    self.containerDiv.html(categoryDiv);

	                    //¶Ô¶¯Ì¬Éú³ÉµÄdivÌí¼Ó´òµã
	                    site.trigger('widget-tracelog', self.containerDiv);
	                    
	                    //·­Ò³
	                    self.changePage();
	                    //¸¡³ö¶þ¼¶ÀàÄ¿
	                    self.showSubCategory();

	                    //¿ØÖÆ¸¡²ã¸¡³öÊ±¼äºÍÏûÊ§Ê±¼ä
	                    new FloatPanel(self.containerDiv, {
	                        handler:self.handler,
	                        event:'mouseenter',
	                        autoClose:300,
	                        delay:300
	                    });
	                    self.handler.trigger('mouseenter');
	                }
	            );
	        }
	    };
	    AppContext.register('view', 'officialsite_topNav', OfferCategory);
});
/**
 * Õ¾ÄÚËÑË÷
 * @author yefei.niuyf
 */
define(['jQuery', 'Class', 'AppContext', 'widget.InstantValidator', 'widget.PlaceHolder'], 

function($, Class, AppContext, InstantValidator, PlaceHolder) {

var SearchInSite = new Class({

	init: function(div) {
		this.div = div;
		this.initPriceInput();
		this.searchText = $('div.search-text input', div);
		new PlaceHolder(this.searchText, { placeholder: 'ÇëÊäÈë²úÆ·Ãû³Æ' })
	},
	
	/**
	 * ÏÞÖÆ¼Û¸ñÊäÈë¿ò
	 */
	initPriceInput: function() {
		var inputs = $('input.price-low,input.price-high', this.div);
		new InstantValidator(inputs, 'price');
	}

});
//~

AppContext.register('view', 'officialsite_searchInSite', SearchInSite);

});
define([ 'jQuery', 'AppContext', 'widget.UI' ], function($, AppContext, UI) {

	var CategorySmallView = ({

		init : function(div, config, data) {
			this.div = div;
			this.resizeImages();
			this.initCats();
			this.initCollapse();
		},

		/**
		 * ·ÖÀàÍ¼Æ¬Èç¹û¿í¶È>150ÐèÒªËõÐ¡
		 */
		resizeImages : function() {
			var imgs = $('li a img', this.div);
			UI.resizeImage(imgs, {
				width : 150
			});
		},

		/**
		 * ³õÊ¼»¯ÀàÄ¿Ê÷×´½á¹¹
		 */
		initCats : function() {
			var self = this, root = $('ul:first>li', this.div);

			// ¸ùÀàÄ¿
			root.eq(-1).addClass('last-cat');

			root.each(function() {
						var elm = $(this), lis = $('li', elm);

						if (!lis.length) {
							return;
						}
						elm.addClass('expand');
						lis.eq(-1).addClass('last');
					});
		},
		
		initCollapse : function() {
			$(this.div).delegate('.expand', 'click', function(event) {
				$(this).children('.cat-hd').toggleClass('collapse');
				$(this).children('.cat-bd').toggle();
				if($('.shop-category>div.bd>ul',CategorySmallView.div).attr('class') == "vas"){
					if(!$(this).children('.cat-hd').hasClass('collapse')){
						$(this).children('.cat-hd').css({
							'background-position':'0 -28px'
						});
					}else{
						$(this).children('.cat-hd').css({
							'background-position':'0 0'
						});
					}
				}
			});
			$(this.div).delegate('.cat a', 'click', function(event) {
				event.stopPropagation();
				return true;
			});
		}

	});

	AppContext.register('view', 'officialsite_categorySmall', CategorySmallView);
});

define([ 'jQuery', 'AppContext', 'Class'], function($, AppContext, Class) {

	var CategorySmallView = new Class({

		init : function(div, config, data) {
			this.div = div;
			this.config = config;
			
			//Èç¹ûÊÇ×°ÐÞºóÌ¨£¬²»¼ÓÔØ¸¡³öÐ§¹û
			if(!config.context.diy){
				this.showSubCategory();
			}
		},
		
		//¸¡³ö¶þ¼¶ÀàÄ¿
		showSubCategory:function(){
			var self = this;
			var firstCategory = $('li.sec', self.div);
			
			//Êó±ê½øÈëÒ»¼¶ÀàÄ¿Õ¹Ê¾¶þ¼¶ÀàÄ¿¸¡²ã
			self.div.on('mouseenter','li.sec', function(){
				var	className = $(this).data("index");
				if(self.subCategory && self.subCategory.length > 0){
					self.subCategory.css("display","none");
				}
				
				var position = $(this).position();
				var subSize = $("input[name=subSize]",$(this)).val();
        		
        		var left = position.left + 228;
        		self.hoverClass = "rhover";

        		if(self.div.is('div.layout-m0s5 .grid-sub div.mod') || self.div.is('div.layout-s5m0s5 .grid-extra div.mod')){
        			//°å¿éÔÚÓÒ£¬Ïò×ó±ß¸¡³ö
        			if(subSize > 10){
        				left = position.left - 402;
        			} else{
        				left = position.left - 201;
        			}
        			self.hoverClass = "lhover";
        		}else{
        			//°å¿éÔÚ×ó£¬ÏòÓÒ±ß¸¡³ö
        		}
        		
        		if(!$(this).hasClass(self.hoverClass)){
        			$(this).addClass(self.hoverClass);
        		}
        		
        		self.subCategory = $("div." + className, self.div).css({
                    'display':'block',
                    'left':left,
                    'top':position.top + 1
                });
        		
        		self.subCategory.bind('mouseleave', function(){
        			$(this).css("display","none");
        			firstCategory.removeClass(self.hoverClass);
        		});
				
			});
			
			//Êó±êÀë¿ªÒ»¼¶ÀàÄ¿Òþ²Ø¶þ¼¶ÀàÄ¿¸¡²ã
			self.div.on('mouseleave','li.sec', function(){
        		var handler = this;
        		var className = $(this).attr("data-index");
        		
        		self.timeOut = setTimeout(function(){        		
        			$("div." + className, self.containerDiv).css("display","none");
        			//ÍË³öÒ»¼¶ÀàÄ¿È¥³ýhoverÐ§¹û
        			$(handler).removeClass(self.hoverClass);
        		},20);
        		
        		
        		//´ÓÒ»¼¶ÀàÄ¿½øÈë¶þ¼¶ÀàÄ¿¸¡²ãÊ±£¬±£³Ö¶þ¼¶ÀàÄ¿¸¡²ã²»Òþ²Ø
	        	self.subCategory.bind('mouseenter', function(){
	        		clearTimeout(self.timeOut);
	        	});
	        	
        	});
			
		}
		
	});

	AppContext.register('view.emersion', 'officialsite_categorySmall', CategorySmallView);
});

define(['jQuery', 'Class', 'AppContext', 'widget.Util', 'widget.UI', 'widget.LazyInitializer', 'part.SiteAlitalk'], 
function($, Class, AppContext, Util, UI, LazyInitializer, SiteAlitalk) {

	var ContactSmall = new Class({

		init : function(div, config, data) {
		    this.div = div;
		    this.config = config;
			this.initMobile();
		    this.initAlitalk();
			new LazyInitializer(this.div, $.proxy(this, 'initMap'));
		},

		initMobile: function(){
			
			var self = this,
				isLogin = this.config.context.login,
				isDiy = this.config.context.diy,
				isTopDomain = this.config.context.isTopDomain;
			
			//µÇÂ¼Ê±Ö±½Ó·µ»Ø
			if(isLogin || isDiy) {
				return;
			}
			
			if (isTopDomain) { //¶¥¼¶ÓòÃû
				var login = $('.mobilephone', self.div),
					loginUrl = null;
				if (login.length) {
					loginUrl = Util.formatUrl(login.attr('href'), {
						targetUrl: window.location.href
					});
					login.attr('href', loginUrl);
				}
			} else {//¶þ¼¶ÓòÃû
				var login = $('.mobilephone', self.div);
				if (login.length) {
					$.add('wp-logist', {
						css: ['//astyle-src.alicdn.com/sys/css/logist/logist.css'],
						js: ['//astyle-src.alicdn.com/sys/js/logist/logist-min.js'],
						ver: '1.0'
					});

					login.click(function(e) {
						$.use("wp-logist", function(){
							FE.sys.logist({
								onLoginSuccess: function(){		//µÇÂ½³É¹¦ºó»Øµ÷º¯Êý
									window.location.reload();
								},
								onRegistSuccess: function(){	//×¢²á³É¹¦ºó»Øµ÷º¯Êý
									window.location.reload();
								}
							});
						});
						return false;
					}); 
				}
			}
		},

	    initAlitalk: function() {
	      	var alitalk = $('a[data-alitalk]', this.div);
		      new SiteAlitalk(alitalk);
	    },

		initMap: function() {
			var container = $('div.map-container', this.div),
				uid = null;

			if (!container.length) {
				return;
			}

			uid = this.config.context.uid;

			$.add('vas-zqx', { js: ['//astyle-src.alicdn.com/app/searchweb/common/widget/js/zqx.js'] });
			$.use('vas-zqx', function() {
				window.ZQX &&
				ZQX.init({
					prodid: '201',
					container: container[0],
					width: 212,
	                height: 203,
	                memberIds: uid,
	                service: 'map'
	            });
			});
		}
	});

	AppContext.register('view', 'officialsite_contactSmall', ContactSmall);
});


define([ 'jQuery', 'AppContext', 'Class', 'widget.VideoPlay', 'core.Remote'],function($, AppContext, Class, VideoPlay, Remote) {
    var VideoSmall = Class({
        init : function(div, config, data){
            this.config = config;
            this.isEdit = config.context.diy;
            this.isTopDomain = config.context.isTopDomain;
            this.data = data;
            this.div = div;
            this.mediaServer = config.mediaServer;
            this._init();
        },
        _init:function(){
            var self = this ;
            if(self.data&&self.data.videoId){
                /*Remote.callEvent('videoInfo', 'getVideoById', {
                    data: {
                        videoId: self.data.videoId,
                        _csrf_token: self.config.context.csrfToken
                    },
                    type: 'post',
                    success: function(data) {
                        if (data.result) {
                            self.render(data.result);
                            self.view(data.result);
                        }
                    },
                    error: function() {

                    }
                })*/
                jQuery.ajax({
                    url: '//apps.1688.com/event/app/videoInfo/getVideoById.htm',
                    dataType: 'jsonp',
                    data: {
                        site_id: 'winport',
                        memberId: self.config.context.uid,
                        videoId: self.data.videoId,
                        _csrf_token: self.config.context.csrfToken || (iDetailConfig && iDetailConfig._csrf_token)
                    },
                    success: function(data) {
                        if (data && data.videoId) {
                            self.render(data);
                            self.view(data);
                        }
                    }
                })

            } else{
                if(self.isEdit){
                    $('.vas_videoside_view', self.div).html('<p style="text-align:center; padding:24px 0;">Äã»¹Ã»ÓÐ²åÈëÊ¹ÓÃÊÓÆµ</p>');
                    self.view();
                }
            }
        },
        render:function(data){
            var self = this;
            if(self.data&&self.data.videoId) {
                var config = data;
                var a = [];
                if(config.status=="online"){
                    a.push('<div class="video-show"></div>');

                    if(!self.isTopDomain){
                        a.push('<p style="line-height:22px; padding:5px 0 0 5px; color:#333;">ÃâÔðÉùÃ÷£ºÒÔÉÏÊÓÆµËùÉæ³¡µØ¡¢×ÊÁÏ¼°ËØ²ÄÓÉ»áÔ±Ìá¹©£¬ÊÓÆµÖ®ÕæÊµÐÔ¡¢ºÏ·¨ÐÔ¼°Ïà¹ØÔðÈÎÓÉ»áÔ±×ÔÐÐ¸ºÔð¡£</p>');
                    }
                }else{
                    a.push('<div class="vas_video_view_novideo">');
                    a.push('<ul class="vas_video_view_content clearFix">');
                    a.push('<li style=" position:relative"><img width="190" height="184" src="//img.alicdn.com/tfs/TB1t5eSg4D1gK0jSZFsXXbldVXa-200-194.jpg">');
                    a.push('<ul class="vas_videoside_fail clearFix">');
                    if ($.isEmptyObject(config)) {
                        a.push('<li><img src="//img.alicdn.com/tfs/TB1hnOVg7T2gK0jSZPcXXcKkpXa-49-52.png" width="49" height="52" /></li>');
                        a.push('<li class="vas_video_view_C"><p style="padding-top:15px; line-height:22px; color:#666">ÄúµÄÊÓÆµÕÒ²»µ½ÁË£¬ÇëÈ¥ÊÓÆµ¹ÜÀíºóÌ¨¹ÜÀíÄúµÄÊÓÆµ¡£</p></li>');
                    } else
                    if(config.status=="failed"){
                        a.push('<li class="vas_videoside_failicon"></li>');
                        a.push('<li class="vas_videoside_failmsg">ÊÓÆµÉóºË²»Í¨¹ý</li>');
                    }else {
                        a.push('<li class="vas_videoside_failicon1"></li>');
                        a.push('<li class="vas_videoside_failmsg">ÊÓÆµÉóºËÖÐ...<br>Íê³Éºó»á×Ô¶¯ÏÔÊ¾</li>');
                    }
                    a.push('</ul></li>');
                    a.push('</ul>');
                }
                $('.vas_videoside_view', self.div).html(a.join(''));
            }

        },
        view:function(data){
            var self = this;
            if(self.data&&self.data.videoId) {
                var self = this;
                if(!self.isEdit){
                    if(data&&data.status=="online"){

                        var elm = self.div.css("display","block").nextAll("div.mod");
                        if($.util.ua.ie67){
                            elm.each(function(){
                                var _elm = $(this);
                                //if(_elm.find(".wp-offerlist-windows").children().length>0){
                                var postition = _elm.css("position");
                                _elm.css("position","relative");
                                _elm.css("position",postition);
                                //}
                            });
                        }
                    }
                }else{
                    self.div.closest('div.mod').css("display","block");
                }

                /**
                 * ÊÓÆµµØÖ·¿ÉÄÜÊÇswf,mp4,swfÓÐ¶ÔÓ¦mp4µØÖ·
                 * cloud.video.taobao.com/play/u/959738568/p/1/e/1/t/1/46206138.swf ÓÐ¶ÔÓ¦µÄMP4
                 * cloud.video.taobao.com/video/play/sid/26927/uid/Y254dWFud3UjODg=/from/3/v/1001/f/f.swf ÎÞ¶ÔÓ¦µÄMP4¸ñÊ½
                 * player.ku6.com/refer/GGLxHM3hCzOK77js/v.swf  ÎÞ¶ÔÓ¦MP4
                 */

                data && !$.isEmptyObject(data) && self.playVideo(data);
            } else {
                if(!self.isEdit){
                    if(data&&data.auditStatus=="approved"){

                        var elm = self.div.css("display","block").nextAll("div.mod");
                        if($.util.ua.ie67){
                            elm.each(function(){
                                var _elm = $(this);
                                //if(_elm.find(".wp-offerlist-windows").children().length>0){
                                var postition = _elm.css("position");
                                _elm.css("position","relative");
                                _elm.css("position",postition);
                                //}
                            });
                        }
                    }
                }else{
                    self.div.closest('div.mod').css("display","block");
                }
            }
        },
        playVideo: function(data) {
            var self = this;
            var options = {
                width: 190,
                height: 184,
                autoplay: false,
                loop: false,
                controls: true,
                poster: data.extendInfo && data.extendInfo.coverImg || 'https://img.alicdn.com/tfs/TB1RUrPaBTH8KJjy0FiXXcRsXXa-1125-618.png'
            }
            new VideoPlay($('.video-show', self.div), data.address, options);
        }
    });
    AppContext.register('view', 'videoSmall', VideoSmall);
});


define(['jQuery', 'AppContext'], function($, AppContext) {
	var officialsite_footer = {
		init: function(div, config, data) {
			this.div = div;
			this.config = config;
			this.bindEvent();
		},
		
		bindEvent:function(){
			var self = this;
			$('.icphref',this.div).on('click',function(e){
				e.preventDefault();
				var url = $(this).data('url');
				if(url){
					window.open(url);
				}
			});
		}
		
	};
	
	
	AppContext.register('view', 'officialsite_footer', officialsite_footer);
});define([ 'jQuery', 'AppContext'],
		function($, AppContext) {
	var officialsite_custmerOnline = ({

		init : function(div, config, data) {
			    this.div = div;
			    this.config=config;
			    this.data=data;
			    this.initPosition();
			    this.initIE();
			    this.initCookie();
			    this.initWangwang();
			    this.bindEvent();
		},
		
		initPosition:function(){
			var self = this;
			var modBox = $('.app-officialsite_custmerOnline').closest('.mod-box');
			//var site_fly_right = $('#site_fly_right');
			//site_fly_right.css('z-index',1200);
			//site_fly_right.css('background','transparent');
			//Çå³ýËùÓÐclass£¬¶¯Ì¬¼ÓÔØ²»»áÈ¥³ýÔ­À´µÄclass
			self.clearClass();
			
			modBox.addClass('reposition');
		},
		//Ç°Ì¨Õ¹Ê¾ie6,7Îªabsolute
		initIE:function(){
			var self = this;
			var showCustmerOnline = $('.showCustmerOnline',this.div);
			var isLessThanIE7 = $.browser.msie7;
			
			//Èç¹ûÊÇie7Ò»ÏÂ£¬Ôò¶¨Î»³Éabsolute£¬²»Ö§³Öfixed
			if($.browser.msie && $.browser.version <= 7.0){
				showCustmerOnline.css('position','absolute');
			}
		},
		
		initCookie:function(){
			var self = this;
			//¶ÁÈ¡cookie
			$.use('util-cookie', function(){
			   var isHideChat =  $.util.cookie('isHideChat');
			   if(isHideChat && isHideChat == 'true'){
				  self.showMiniChatDom('fast');
			   }else{
				   self.showChatDom('fast');
			   }
			});
		},
		
		initWangwang:function(){
			var self = this;
			var wangwangIcons = $('.wangwang-icon',this.div);
			wangwangIcons.each(function(){
				var src = $(this).attr('src');
				src = encodeURI(src);
				$(this).attr('src',src);
			});
		},
		
		bindEvent:function(){
			var self = this;
			var miniShowDiv = $('.mini-show-div',this.div);
			$('.close-btn',this.div).on('click',function(e){
				e.preventDefault();
				self.showMiniChatDom('slow');
				
				//ÉèÖÃcookie
				$.use('util-cookie', function(){
				    $.util.cookie('isHideChat',true);
				});
			});
			
			miniShowDiv.on('click',function(){
				self.showChatDom('slow');
				//ÉèÖÃcookie
				$.use('util-cookie', function(){
				    $.util.cookie('isHideChat',false);
				});
			});
		},
		
		//Çå³ý½ÚµãÑùÊ½
		clearClass:function(){
			var modBox = $('.app-officialsite_custmerOnline').closest('.mod-box');
			modBox.removeClass('reposition');
		},
		
		showMiniChatDom:function(speed){
			var showDiv = $('.show-div',this.div);
			var miniShowDiv = $('.mini-show-div',this.div);
			showDiv.hide(speed);
			miniShowDiv.show(speed);
		},
		showChatDom:function(speed){
			var showDiv = $('.show-div',this.div);
			var miniShowDiv = $('.mini-show-div',this.div);
			miniShowDiv.hide(speed);
			showDiv.show(speed);
		}
		
	});
	AppContext.register('view', 'officialsite_custmerOnline', officialsite_custmerOnline);
});
/**
 * Êý¾Ý°üÕ¹ÏÖ
 */
define(['jQuery', 'Class', 'AppContext', 'widget.Util', 'core.Component'], 

function($, Class, AppContext, Util, Component) {

var ImageHome = new Class({
	
	init : function(div, config) {
		if (!config.flashUrl) {
			return;
		}
		
		$.use('ui-dialog,ui-flash', $.proxy(this, '_init', config.flashUrl, config.flashSetting));	
	},
	
	_init: function(url, flashSetting) {
		var width = flashSetting.width,
			height = flashSetting.height;
		var template = '<div class="image-home-container" style="width:{0}px;"><div class="box" style="width:{0}px;height:{1}px;"></div><a class="d-close" href="#">Ìø¹ý</a></div>',
			template = $.util.substitute(template, [width, height]);
		var node = $(template);
		
		//var node = $('<div class="image-home-container"><a class="d-close" href="#">Ìø¹ý</a><div class="box" style="width:1000px;height:500px;"></div></div>');
	
		node.dialog({
			modalCSS: {
				opacity: 0
			},
			center:true,
			fixed: true
				
		});
		
		var content = $('div.box', node);
		
			content.flash({
				   swf: encodeURI(url),
				   wmode: 'transparent',
				   width: '100%',
				   height: '100%'
			});
		
		$('a.d-close').on('click',function(){
			node.dialog('close');
			$('#doc').css({
				'visibility': 'visible',
				'position': 'static' 
			});
		});
	}
	
	
});
	AppContext.register('view', 'officialsite_imageHome', ImageHome);
});