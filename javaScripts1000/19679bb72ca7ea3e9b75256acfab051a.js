/* jquery combined / jquerycombined

javascript logical operators - &&  ||
*/


var debug = 0;

/* JScompressor online - http://jscompress.com/ */

/*!
 * jQuery UI 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.4",plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,
b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,
CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable",
"off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"));if(!isNaN(b)&&b!=0)return b}a=a.parent()}}return 0}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=
parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c.style(this,h,d(this,f)+"px")})};c.fn["outer"+
b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c.style(this,h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==
b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){var k=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return k.call(b(this),a,c)})};b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);
b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.substring(0,1)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):
this.each(function(){var g=b.data(this,a);if(g){d&&g.option(d);g._init()}else b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(c)[this.widgetName],a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});
this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a,e=this;if(arguments.length===0)return b.extend({},e.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}b.each(d,function(f,
h){e._setOption(f,h)});return e},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=
b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*
 * jQuery UI Position 1.8.4
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var m=/left|center|right/,n=/top|center|bottom/,p=c.fn.position,q=c.fn.offset;c.fn.position=function(a){if(!a||!a.of)return p.apply(this,arguments);a=c.extend({},a);var b=c(a.of),d=(a.collision||"flip").split(" "),e=a.offset?a.offset.split(" "):[0,0],g,h,i;if(a.of.nodeType===9){g=b.width();h=b.height();i={top:0,left:0}}else if(a.of.scrollTo&&a.of.document){g=b.width();h=b.height();i={top:b.scrollTop(),left:b.scrollLeft()}}else if(a.of.preventDefault){a.at="left top";g=h=
0;i={top:a.of.pageY,left:a.of.pageX}}else{g=b.outerWidth();h=b.outerHeight();i=b.offset()}c.each(["my","at"],function(){var f=(a[this]||"").split(" ");if(f.length===1)f=m.test(f[0])?f.concat(["center"]):n.test(f[0])?["center"].concat(f):["center","center"];f[0]=m.test(f[0])?f[0]:"center";f[1]=n.test(f[1])?f[1]:"center";a[this]=f});if(d.length===1)d[1]=d[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(a.at[0]==="right")i.left+=g;else if(a.at[0]==="center")i.left+=
g/2;if(a.at[1]==="bottom")i.top+=h;else if(a.at[1]==="center")i.top+=h/2;i.left+=e[0];i.top+=e[1];return this.each(function(){var f=c(this),k=f.outerWidth(),l=f.outerHeight(),j=c.extend({},i);if(a.my[0]==="right")j.left-=k;else if(a.my[0]==="center")j.left-=k/2;if(a.my[1]==="bottom")j.top-=l;else if(a.my[1]==="center")j.top-=l/2;j.left=parseInt(j.left);j.top=parseInt(j.top);c.each(["left","top"],function(o,r){c.ui.position[d[o]]&&c.ui.position[d[o]][r](j,{targetWidth:g,targetHeight:h,elemWidth:k,
elemHeight:l,offset:e,my:a.my,at:a.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(j,{using:a.using}))})};c.ui.position={fit:{left:function(a,b){var d=c(window);b=a.left+b.elemWidth-d.width()-d.scrollLeft();a.left=b>0?a.left-b:Math.max(0,a.left)},top:function(a,b){var d=c(window);b=a.top+b.elemHeight-d.height()-d.scrollTop();a.top=b>0?a.top-b:Math.max(0,a.top)}},flip:{left:function(a,b){if(b.at[0]!=="center"){var d=c(window);d=a.left+b.elemWidth-d.width()-d.scrollLeft();var e=b.my[0]==="left"?
-b.elemWidth:b.my[0]==="right"?b.elemWidth:0,g=-2*b.offset[0];a.left+=a.left<0?e+b.targetWidth+g:d>0?e-b.targetWidth+g:0}},top:function(a,b){if(b.at[1]!=="center"){var d=c(window);d=a.top+b.elemHeight-d.height()-d.scrollTop();var e=b.my[1]==="top"?-b.elemHeight:b.my[1]==="bottom"?b.elemHeight:0,g=b.at[1]==="top"?b.targetHeight:-b.targetHeight,h=-2*b.offset[1];a.top+=a.top<0?e+b.targetHeight+h:d>0?e+g+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(a,b){if(/static/.test(c.curCSS(a,"position")))a.style.position=
"relative";var d=c(a),e=d.offset(),g=parseInt(c.curCSS(a,"top",true),10)||0,h=parseInt(c.curCSS(a,"left",true),10)||0;e={top:b.top-e.top+g,left:b.left-e.left+h};"using"in b?b.using.call(a,e):d.css(e)};c.fn.offset=function(a){var b=this[0];if(!b||!b.ownerDocument)return null;if(a)return this.each(function(){c.offset.setOffset(this,a)});return q.call(this)}}})(jQuery);

/*
 * jQuery UI Autocomplete 1.8.6
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(e){e.widget("ui.autocomplete",{options:{appendTo:"body",delay:300,minLength:3,position:{my:"left top",at:"left bottom",collision:"none"},source:null},_create:function(){var a=this,b=this.element[0].ownerDocument,f;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){f=false;var d=e.ui.keyCode;switch(c.keyCode){case d.PAGE_UP:a._move("previousPage",
c);break;case d.PAGE_DOWN:a._move("nextPage",c);break;case d.UP:a._move("previous",c);c.preventDefault();break;case d.DOWN:a._move("next",c);c.preventDefault();break;case d.ENTER:case d.NUMPAD_ENTER:if(a.menu.active){f=true;c.preventDefault()}case d.TAB:if(!a.menu.active)return;a.menu.select(c);break;case d.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);
break}}}).bind("keypress.autocomplete",function(c){if(f){f=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};this.menu=e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo||
"body",b)[0]).mousedown(function(c){var d=a.menu.element[0];e(c.target).closest(".ui-menu-item").length||setTimeout(function(){e(document).one("mousedown",function(g){g.target!==a.element[0]&&g.target!==d&&!e.ui.contains(d,g.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,d){d=d.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:d})&&/^key/.test(c.originalEvent.type)&&a.element.val(d.value)},selected:function(c,d){d=d.item.data("item.autocomplete");
var g=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=g;setTimeout(function(){a.previous=g},1)}false!==a._trigger("select",c,{item:d})&&a.element.val(d.value);a.term=a.element.val();a.close(c);a.selectedItem=d},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");e.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();e.Widget.prototype.destroy.call(this)},_setOption:function(a,b){e.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(e(b||"body",this.element[0].ownerDocument)[0])},_initSource:function(){var a=this,b,f;if(e.isArray(this.options.source)){b=this.options.source;this.source=function(c,d){d(e.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){f=this.options.source;this.source=
function(c,d){a.xhr&&a.xhr.abort();a.xhr=e.getJSON(f,c,function(g,i,h){h===a.xhr&&d(g);a.xhr=null})}}else this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(a&&a.length){a=
this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this._trigger("close",a);this.menu.element.hide();this.menu.deactivate()}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return e.map(a,function(b){if(typeof b===
"string")return{label:b,value:b};return e.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(a){this._renderMenu(this.menu.element.empty().zIndex(this.element.zIndex()+1),a);this.menu.deactivate();this.menu.refresh();this.menu.element.show().position(e.extend({of:this.element},this.options.position));this._resizeMenu()},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var f=
this;e.each(b,function(c,d){f._renderItem(a,d)})},_renderItem:function(a,b){return e("<li></li>").data("item.autocomplete",b).append(e("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});e.extend(e.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var f=new RegExp(e.ui.autocomplete.escapeRegex(b),"i");return e.grep(a,function(c){return f.test(c.label||c.value||c)})}})})(jQuery);
(function(e){e.widget("ui.menu",{_create:function(){var a=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(b){if(e(b.target).closest(".ui-menu-item a").length){b.preventDefault();a.select(b)}});this.refresh()},refresh:function(){var a=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(b){a.activate(b,e(this).parent())}).mouseleave(function(){a.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var f=b.offset().top-this.element.offset().top,c=this.element.attr("scrollTop"),d=this.element.height();if(f<0)this.element.attr("scrollTop",c+f);else f>=d&&this.element.attr("scrollTop",c+f-d+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",a,{item:b})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,f){if(this.active){a=this.active[a+"All"](".ui-menu-item").eq(0);
a.length?this.activate(f,a):this.activate(f,this.element.children(b))}else this.activate(f,this.element.children(b))},nextPage:function(a){if(this.hasScroll())if(!this.active||this.last())this.activate(a,this.element.children(".ui-menu-item:first"));else{var b=this.active.offset().top,f=this.element.height(),c=this.element.children(".ui-menu-item").filter(function(){var d=e(this).offset().top-b-f+e(this).height();return d<10&&d>-10});c.length||(c=this.element.children(".ui-menu-item:last"));this.activate(a,
c)}else this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(a){if(this.hasScroll())if(!this.active||this.first())this.activate(a,this.element.children(".ui-menu-item:last"));else{var b=this.active.offset().top,f=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var c=e(this).offset().top-b+f-e(this).height();return c<10&&c>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(a,result)}else this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})})(jQuery);
;/*

/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 *
 * dateinput/dateinput.js
 * tooltip/tooltip.js
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://jquerytools.org/download/
 *
 */
(function(a,b){a.tools=a.tools||{version:"v1.2.7"};var c=[],d={},e,f=[75,76,38,39,74,72,40,37],g={};e=a.tools.dateinput={conf:{format:"mm/dd/yy",formatter:"default",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:b,max:b,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},addFormatter:function(a,b){d[a]=b},localize:function(b,c){a.each(c,function(a,b){c[a]=b.split(",")}),g[b]=c}},e.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});function h(a,b){return(new Date(a,b+1,0)).getDate()}function i(a,b){a=""+a,b=b||2;while(a.length<b)a="0"+a;return a}var j=a("<a/>");function k(a,b,c,e){var f=b.getDate(),h=b.getDay(),k=b.getMonth(),l=b.getFullYear(),m={d:f,dd:i(f),ddd:g[e].shortDays[h],dddd:g[e].days[h],m:k+1,mm:i(k+1),mmm:g[e].shortMonths[k],mmmm:g[e].months[k],yy:String(l).slice(2),yyyy:l},n=d[a](c,b,m,e);return j.html(n).html()}e.addFormatter("default",function(a,b,c,d){return a.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,function(a){return a in c?c[a]:a})}),e.addFormatter("prefixed",function(a,b,c,d){return a.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g,function(a,b){return b in c?c[b]:a})});function l(a){return parseInt(a,10)}function m(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()}function n(a){if(a!==b){if(a.constructor==Date)return a;if(typeof a=="string"){var c=a.split("-");if(c.length==3)return new Date(l(c[0]),l(c[1])-1,l(c[2]));if(!/^-?\d+$/.test(a))return;a=l(a)}var d=new Date;d.setDate(d.getDate()+a);return d}}function o(d,e){var i=this,j=new Date,o=j.getFullYear(),p=e.css,q=g[e.lang],r=a("#"+p.root),s=r.find("#"+p.title),t,u,v,w,x,y,z=d.attr("data-value")||e.value||d.val(),A=d.attr("min")||e.min,B=d.attr("max")||e.max,C,D;A===0&&(A="0"),z=n(z)||j,A=n(A||new Date(o+e.yearRange[0],1,1)),B=n(B||new Date(o+e.yearRange[1]+1,1,-1));if(!q)throw"Dateinput: invalid language: "+e.lang;if(d.attr("type")=="date"){var D=d.clone(),E=D.wrap("<div/>").parent().html(),F=a(E.replace(/type/i,"type=text data-orig-type"));e.value&&F.val(e.value),d.replaceWith(F),d=F}d.addClass(p.input);var G=d.add(i);if(!r.length){r=a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",p.root),r.children().eq(0).attr("id",p.head).end().eq(1).attr("id",p.body).children().eq(0).attr("id",p.days).end().eq(1).attr("id",p.weeks).end().end().end().find("a").eq(0).attr("id",p.prev).end().eq(1).attr("id",p.next),s=r.find("#"+p.head).find("div").attr("id",p.title);if(e.selectors){var H=a("<select/>").attr("id",p.month),I=a("<select/>").attr("id",p.year);s.html(H.add(I))}var J=r.find("#"+p.days);for(var K=0;K<7;K++)J.append(a("<span/>").text(q.shortDays[(K+e.firstDay)%7]));a("body").append(r)}e.trigger&&(t=a("<a/>").attr("href","#").addClass(p.trigger).click(function(a){e.toggle?i.toggle():i.show();return a.preventDefault()}).insertAfter(d));var L=r.find("#"+p.weeks);I=r.find("#"+p.year),H=r.find("#"+p.month);function M(b,c,e){z=b,w=b.getFullYear(),x=b.getMonth(),y=b.getDate(),e||(e=a.Event("api")),e.type=="click"&&!a.browser.msie&&d.focus(),e.type="beforeChange",G.trigger(e,[b]);e.isDefaultPrevented()||(d.val(k(c.formatter,b,c.format,c.lang)),e.type="change",G.trigger(e),d.data("date",b),i.hide(e))}function N(b){b.type="onShow",G.trigger(b),a(document).on("keydown.d",function(b){if(b.ctrlKey)return!0;var c=b.keyCode;if(c==8||c==46){d.val("");return i.hide(b)}if(c==27||c==9)return i.hide(b);if(a(f).index(c)>=0){if(!C){i.show(b);return b.preventDefault()}var e=a("#"+p.weeks+" a"),g=a("."+p.focus),h=e.index(g);g.removeClass(p.focus);if(c==74||c==40)h+=7;else if(c==75||c==38)h-=7;else if(c==76||c==39)h+=1;else if(c==72||c==37)h-=1;h>41?(i.addMonth(),g=a("#"+p.weeks+" a:eq("+(h-42)+")")):h<0?(i.addMonth(-1),g=a("#"+p.weeks+" a:eq("+(h+42)+")")):g=e.eq(h),g.addClass(p.focus);return b.preventDefault()}if(c==34)return i.addMonth();if(c==33)return i.addMonth(-1);if(c==36)return i.today();c==13&&(a(b.target).is("select")||a("."+p.focus).click());return a([16,17,18,9]).index(c)>=0}),a(document).on("click.d",function(b){var c=b.target;!a(c).parents("#"+p.root).length&&c!=d[0]&&(!t||c!=t[0])&&i.hide(b)})}a.extend(i,{show:function(b){if(!(d.attr("readonly")||d.attr("disabled")||C)){b=b||a.Event(),b.type="onBeforeShow",G.trigger(b);if(b.isDefaultPrevented())return;a.each(c,function(){this.hide()}),C=!0,H.off("change").change(function(){i.setValue(l(I.val()),l(a(this).val()))}),I.off("change").change(function(){i.setValue(l(a(this).val()),l(H.val()))}),u=r.find("#"+p.prev).off("click").click(function(a){u.hasClass(p.disabled)||i.addMonth(-1);return!1}),v=r.find("#"+p.next).off("click").click(function(a){v.hasClass(p.disabled)||i.addMonth();return!1}),i.setValue(z);var f=d.offset();/iPad/i.test(navigator.userAgent)&&(f.top-=a(window).scrollTop()),r.css({top:f.top+d.outerHeight({margins:!0})+e.offset[0],left:f.left+e.offset[1]}),e.speed?r.show(e.speed,function(){N(b)}):(r.show(),N(b));return i}},setValue:function(c,d,f){var g=l(d)>=-1?new Date(l(c),l(d),l(f==b||isNaN(f)?1:f)):c||z;g<A?g=A:g>B&&(g=B),typeof c=="string"&&(g=n(c)),c=g.getFullYear(),d=g.getMonth(),f=g.getDate(),d==-1?(d=11,c--):d==12&&(d=0,c++);if(!C){M(g,e);return i}x=d,w=c,y=f;var k=new Date(c,d,1-e.firstDay),o=k.getDay(),r=h(c,d),t=h(c,d-1),D;if(e.selectors){H.empty(),a.each(q.months,function(b,d){A<new Date(c,b+1,1)&&B>new Date(c,b,0)&&H.append(a("<option/>").html(d).attr("value",b))}),I.empty();var E=j.getFullYear();for(var F=E+e.yearRange[0];F<E+e.yearRange[1];F++)A<new Date(F+1,0,1)&&B>new Date(F,0,0)&&I.append(a("<option/>").text(F));H.val(d),I.val(c)}else s.html(q.months[d]+" "+c);L.empty(),u.add(v).removeClass(p.disabled);for(var G=o?0:-7,J,K;G<(o?42:35);G++)J=a("<a/>"),G%7===0&&(D=a("<div/>").addClass(p.week),L.append(D)),G<o?(J.addClass(p.off),K=t-o+G+1,g=new Date(c,d-1,K)):G<o+r?(K=G-o+1,g=new Date(c,d,K),m(z,g)?J.attr("id",p.current).addClass(p.focus):m(j,g)&&J.attr("id",p.today)):(J.addClass(p.off),K=G-r-o+1,g=new Date(c,d+1,K)),A&&g<A&&J.add(u).addClass(p.disabled),B&&g>B&&J.add(v).addClass(p.disabled),J.attr("href","#"+K).text(K).data("date",g),D.append(J);L.find("a").click(function(b){var c=a(this);c.hasClass(p.disabled)||(a("#"+p.current).removeAttr("id"),c.attr("id",p.current),M(c.data("date"),e,b));return!1}),p.sunday&&L.find("."+p.week).each(function(){var b=e.firstDay?7-e.firstDay:0;a(this).children().slice(b,b+1).addClass(p.sunday)});return i},setMin:function(a,b){A=n(a),b&&z<A&&i.setValue(A);return i},setMax:function(a,b){B=n(a),b&&z>B&&i.setValue(B);return i},today:function(){return i.setValue(j)},addDay:function(a){return this.setValue(w,x,y+(a||1))},addMonth:function(a){var b=x+(a||1),c=h(w,b),d=y<=c?y:c;return this.setValue(w,b,d)},addYear:function(a){return this.setValue(w+(a||1),x,y)},destroy:function(){d.add(document).off("click.d keydown.d"),r.add(t).remove(),d.removeData("dateinput").removeClass(p.input),D&&d.replaceWith(D)},hide:function(b){if(C){b=a.Event(),b.type="onHide",G.trigger(b);if(b.isDefaultPrevented())return;a(document).off("click.d keydown.d"),r.hide(),C=!1}return i},toggle:function(){return i.isOpen()?i.hide():i.show()},getConf:function(){return e},getInput:function(){return d},getCalendar:function(){return r},getValue:function(a){return a?k(e.formatter,z,a,e.lang):z},isOpen:function(){return C}}),a.each(["onBeforeShow","onShow","change","onHide"],function(b,c){a.isFunction(e[c])&&a(i).on(c,e[c]),i[c]=function(b){b&&a(i).on(c,b);return i}}),e.editable||d.on("focus.d click.d",i.show).keydown(function(b){var c=b.keyCode;if(C||a(f).index(c)<0)(c==8||c==46)&&d.val("");else{i.show(b);return b.preventDefault()}return b.shiftKey||b.ctrlKey||b.altKey||c==9?!0:b.preventDefault()}),n(d.val())&&M(z,e)}a.expr[":"].date=function(b){var c=b.getAttribute("type");return c&&c=="date"||a(b).data("dateinput")},a.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=a.extend(!0,{},e.conf,b),a.each(b.css,function(a,c){!c&&a!="prefix"&&(b.css[a]=(b.css.prefix||"")+(c||a))});var d;this.each(function(){var e=new o(a(this),b);c.push(e);var f=e.getInput().data("dateinput",e);d=d?d.add(f):f});return d?d:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.on(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).on(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.off(p[0]).on(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.off(p[1]).on(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/* This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

/**
 * jQuery autoResize
 * @copyright http://www.sitepoint.com/build-auto-expanding-textarea-3/
 * @version 1.04
 */
//(function(a){a.fn.TextAreaExpander=function(b,c){function e(a){a=a.target||a;var b=a.value.length,c=a.offsetWidth;if(b!=a.valLength||c!=a.boxWidth){if(d&&(b<a.valLength||c!=a.boxWidth))a.style.height="0px";var e=Math.max(a.expandMin,Math.min(a.scrollHeight,a.expandMax));a.style.overflow=a.scrollHeight>e?"auto":"hidden";a.style.height=e+"px";a.valLength=b;a.boxWidth=c}return true}var d=!(a.browser.msie||a.browser.opera);this.each(function(){if(this.nodeName.toLowerCase()!="textarea")return;var d=this.className.match(/expand(\d+)\-*(\d+)*/i);this.expandMin=b||(d?parseInt("0"+d[1],10):0);this.expandMax=c||(d?parseInt("0"+d[2],10):99999);e(this);if(!this.Initialized){this.Initialized=true;a(this).css("padding-top",0).css("padding-bottom",0);a(this).bind("keyup",e)}});return this}})(jQuery);jQuery(document).ready(function(){jQuery("textarea[class*=expand]").TextAreaExpander()})

/*
* jQuery.fn.autoResize 1.14
* --
* https://github.com/padolsey/jQuery.fn.autoResize
*/
(function(d){var b="ar"+ +new Date,e=c.defaults={onResize:function(){},onBeforeResize:function(){return 123},onAfterResize:function(){return 555},animate:{duration:200,complete:function(){}},extraSpace:50,minHeight:"original",maxHeight:500,minWidth:"original",maxWidth:500};c.cloneCSSProperties=["lineHeight","textDecoration","letterSpacing","fontSize","fontFamily","fontStyle","fontWeight","textTransform","textAlign","direction","wordSpacing","fontSizeAdjust","paddingTop","paddingLeft","paddingBottom","paddingRight","width"];c.cloneCSSValues={position:"absolute",top:-9999,left:-9999,opacity:0,overflow:"hidden"};c.resizableFilterSelector=["textarea:not(textarea."+b+")","input:not(input[type])","input[type=text]","input[type=password]","input[type=email]","input[type=url]"].join(",");c.AutoResizer=a;d.fn.autoResize=c;function c(f){this.filter(c.resizableFilterSelector).each(function(){new a(d(this),f)});return this}function a(g,f){if(g.data("AutoResizer")){g.data("AutoResizer").destroy()}f=this.config=d.extend({},c.defaults,f);this.el=g;this.nodeName=g[0].nodeName.toLowerCase();this.originalHeight=g.height();this.previousScrollTop=null;this.value=g.val();if(f.maxWidth==="original"){f.maxWidth=g.width()}if(f.minWidth==="original"){f.minWidth=g.width()}if(f.maxHeight==="original"){f.maxHeight=g.height()}if(f.minHeight==="original"){f.minHeight=g.height()}if(this.nodeName==="textarea"){g.css({resize:"none",overflowY:"hidden"})}g.data("AutoResizer",this);f.animate.complete=(function(h){return function(){f.onAfterResize.call(g);return h.apply(this,arguments)}}(f.animate.complete));this.bind()}a.prototype={bind:function(){var f=d.proxy(function(){this.check();return true},this);this.unbind();this.el.bind("keyup.autoResize",f).bind("change.autoResize",f).bind("paste.autoResize",function(){setTimeout(function(){f()},0)});if(!this.el.is(":hidden")){this.check(null,true)}},unbind:function(){this.el.unbind(".autoResize")},createClone:function(){var f=this.el,g=this.nodeName==="textarea"?f.clone():d("<span/>");this.clone=g;d.each(c.cloneCSSProperties,function(h,j){g[0].style[j]=f.css(j)});g.removeAttr("name").removeAttr("id").addClass(b).attr("tabIndex",-1).css(c.cloneCSSValues);if(this.nodeName==="textarea"){g.height("auto")}else{g.width("auto").css({whiteSpace:"nowrap"})}},check:function(l,j){if(!this.clone){this.createClone();this.injectClone()}var i=this.config,m=this.clone,h=this.el,n=h.val();if(n===this.prevValue){return true}this.prevValue=n;if(this.nodeName==="input"){m.text(n);var o=m.width(),k=(o+i.extraSpace)>=i.minWidth?o+i.extraSpace:i.minWidth,g=h.width();k=Math.min(k,i.maxWidth);if((k<g&&k>=i.minWidth)||(k>=i.minWidth&&k<=i.maxWidth)){i.onBeforeResize.call(h);i.onResize.call(h);h.scrollLeft(0);if(i.animate&&!j){h.stop(1,1).animate({width:k},i.animate)}else{h.width(k);i.onAfterResize.call(h)}}return}m.width(h.width()).height(0).val(n).scrollTop(10000);var f=m[0].scrollTop;if(this.previousScrollTop===f){return}this.previousScrollTop=f;if(f+i.extraSpace>=i.maxHeight){h.css("overflowY","");f=i.maxHeight;j=true}else{if(f<=i.minHeight){f=i.minHeight}else{h.css("overflowY","hidden");f+=i.extraSpace}}i.onBeforeResize.call(h);i.onResize.call(h);if(i.animate&&!j){h.stop(1,1).animate({height:f},i.animate)}else{h.height(f);i.onAfterResize.call(h)}},destroy:function(){this.unbind();this.el.removeData("AutoResizer");this.clone.remove();delete this.el;delete this.clone},injectClone:function(){(c.cloneContainer||(c.cloneContainer=d("<arclones/>").appendTo("body"))).append(this.clone)}}})(jQuery);



/* MicroModal
 * http://codebrewery.blogspot.cz/2010/06/micromodal.html
 */
(function(b){b.fn.microModal=function(d){var e=b.extend(true,{},b.fn.microModal.defaults,d);return this.each(function(){var h=b(this);var g="#"+c("target-",h);var f=b('<div style="width:100%;height:100%;position:fixed;margin:0;padding:0;z-index:99999;top:0px;left:0px;right:0px;bottom:0px" />');f.css("background-color",e.overlay.color);f.css("opacity",e.overlay.opacity);b(g).css("position","absolute").css("z-index",999999);var i=null;if(e.overlay.show){i=new a(b(g).clone(true),f.clone(true),e.autoPositioning)}else{i=new a(b(g).clone(true),null,e.autoPositioning)}b(g).remove();f.remove();b.fn.microModal.dialogs[g]=i;h.click(function(j){b.fn.microModal.dialogs[g].open();return false})})};function c(d,g){var f=g.attr("class").split(" ");for(var e=0;e<f.length;e++){if(f[e].indexOf(d)>-1){var h=f[e].split("-");return h[h.length-1]}}return null}var a=function(h,e,f){this.isVisible=false;var i=h;var g=e;var k=f;var j="#"+i.attr("id");this.close=function(){b(j).remove();b(j+"-overlay").remove();this.isVisible=false};this.open=function(){if(g!=null){var m=g.clone(true);m.attr("id",i.attr("id")+"-overlay");b("body").append(m)}var l=i.clone(true);b("body").append(l);if(k){d(l);b(window).resize(function(){d(l)});b(window).scroll(function(){d(l)})}this.isVisible=true};var d=function(l){l.css("top",(b(window).height()-l.outerHeight())/2+b(window).scrollTop()+"px");l.css("left",(b(window).width()-l.outerWidth())/2+b(window).scrollLeft()+"px")}};b.fn.microModal.defaults={autoPositioning:true,overlay:{show:true,color:"#fff",opacity:0.8}};b.fn.microModal.dialogs=new Object()})(jQuery);

/**
 * Tooltip 
 * http://ara-abcarians.com/jquery/atooltip */
(function($){$.fn.aToolTip=function(options){var defaults={closeTipBtn:'aToolTipCloseBtn',toolTipId:'aToolTip',fixed:false,clickIt:false,inSpeed:200,outSpeed:100,tipContent:'',toolTipClass:'defaultTheme',xOffset:5,yOffset:5,onShow:null,onHide:null},settings=$.extend({},defaults,options);return this.each(function(){var obj=$(this);if(obj.attr('title')){var tipContent=obj.attr('title');}else{var tipContent=settings.tipContent;}
var buildaToolTip=function(){$('body').append("<div id='"+settings.toolTipId+"' class='"+settings.toolTipClass+"'><p class='aToolTipContent'>"+tipContent+"</p></div>");if(tipContent&&settings.clickIt){$('#'+settings.toolTipId+' p.aToolTipContent').append("<a id='"+settings.closeTipBtn+"' href='#' alt='close'>close</a>");}},positionaToolTip=function(){$('#'+settings.toolTipId).css({top:(obj.offset().top-$('#'+settings.toolTipId).outerHeight()-settings.yOffset)+'px',left:(obj.offset().left+obj.outerWidth()+settings.xOffset)+'px'}).stop().fadeIn(settings.inSpeed,function(){if($.isFunction(settings.onShow)){settings.onShow(obj);}});},removeaToolTip=function(){$('#'+settings.toolTipId).stop().fadeOut(settings.outSpeed,function(){$(this).remove();if($.isFunction(settings.onHide)){settings.onHide(obj);}});};if(tipContent&&!settings.clickIt){obj.hover(function(){$('#'+settings.toolTipId).remove();obj.attr({title:''});buildaToolTip();positionaToolTip();},function(){removeaToolTip();});}
if(tipContent&&settings.clickIt){obj.click(function(el){$('#'+settings.toolTipId).remove();obj.attr({title:''});buildaToolTip();positionaToolTip();$('#'+settings.closeTipBtn).click(function(){removeaToolTip();return false;});return false;});}
if(!settings.fixed&&!settings.clickIt){obj.mousemove(function(el){$('#'+settings.toolTipId).css({top:(el.pageY-$('#'+settings.toolTipId).outerHeight()-settings.yOffset),left:(el.pageX+settings.xOffset)});});}});};})(jQuery);

$(document).ready(function(){
    $('.tip').aToolTip({
        fixed: false
    });
});        

/*
 * TimePicker
 * https://github.com/perifer/timePicker
*/
(function(a){function g(a){a.setFullYear(2001),a.setMonth(0),a.setDate(0);return a}function f(a,b){if(a){var c=a.split(b.separator),d=parseFloat(c[0]),e=parseFloat(c[1]);b.show24Hours||(d===12&&a.indexOf("AM")!==-1?d=0:d!==12&&a.indexOf("PM")!==-1&&(d+=12));var f=new Date(0,0,0,d,e,0);return g(f)}return null}function e(a,b){return typeof a=="object"?g(a):f(a,b)}function d(a){return(a<10?"0":"")+a}function c(a,b){var c=a.getHours(),e=b.show24Hours?c:(c+11)%12+1,f=a.getMinutes();return d(e)+b.separator+d(f)+(b.show24Hours?"":c<12?" AM":" PM")}function b(b,c,d,e){b.value=a(c).text(),a(b).change(),a.browser.msie||b.focus(),d.hide()}a.fn.timePicker=function(b){var c=a.extend({},a.fn.timePicker.defaults,b);return this.each(function(){a.timePicker(this,c)})},a.timePicker=function(b,c){var d=a(b)[0];return d.timePicker||(d.timePicker=new jQuery._timePicker(d,c))},a.timePicker.version="0.3",a._timePicker=function(d,h){var i=!1,j=!1,k=e(h.startTime,h),l=e(h.endTime,h),m="selected",n="li."+m;a(d).attr("autocomplete","OFF");var o=[],p=new Date(k);while(p<=l)o[o.length]=c(p,h),p=new Date(p.setMinutes(p.getMinutes()+h.step));var q=a('<div class="time-picker'+(h.show24Hours?"":" time-picker-12hours")+'"></div>'),r=a("<ul></ul>");for(var s=0;s<o.length;s++)r.append("<li>"+o[s]+"</li>");q.append(r),q.appendTo("body").hide(),q.mouseover(function(){i=!0}).mouseout(function(){i=!1}),a("li",r).mouseover(function(){j||(a(n,q).removeClass(m),a(this).addClass(m))}).mousedown(function(){i=!0}).click(function(){b(d,this,q,h),i=!1});var t=function(){if(q.is(":visible"))return!1;a("li",q).removeClass(m);var b=a(d).offset();q.css({top:b.top+d.offsetHeight,left:b.left}),q.show();var e=d.value?f(d.value,h):k,i=k.getHours()*60+k.getMinutes(),j=e.getHours()*60+e.getMinutes()-i,n=Math.round(j/h.step),o=g(new Date(0,0,0,0,n*h.step+i,0));o=k<o&&o<=l?o:k;var p=a("li:contains("+c(o,h)+")",q);p.length&&(p.addClass(m),q[0].scrollTop=p[0].offsetTop);return!0};a(d).focus(t).click(t),a(d).blur(function(){i||q.hide()});var u=a.browser.opera||a.browser.mozilla?"keypress":"keydown";a(d)[u](function(c){var e;j=!0;var f=q[0].scrollTop;switch(c.keyCode){case 38:if(t())return!1;e=a(n,r);var g=e.prev().addClass(m)[0];g?(e.removeClass(m),g.offsetTop<f&&(q[0].scrollTop=f-g.offsetHeight)):(e.removeClass(m),g=a("li:last",r).addClass(m)[0],q[0].scrollTop=g.offsetTop-g.offsetHeight);return!1;case 40:if(t())return!1;e=a(n,r);var i=e.next().addClass(m)[0];i?(e.removeClass(m),i.offsetTop+i.offsetHeight>f+q[0].offsetHeight&&(q[0].scrollTop=f+i.offsetHeight)):(e.removeClass(m),i=a("li:first",r).addClass(m)[0],q[0].scrollTop=0);return!1;case 13:if(q.is(":visible")){var k=a(n,r)[0];b(d,k,q,h)}return!1;case 27:q.hide();return!1}return!0}),a(d).keyup(function(a){j=!1}),this.getTime=function(){return f(d.value,h)},this.setTime=function(b){d.value=c(e(b,h),h),a(d).change()}},a.fn.timePicker.defaults={step:30,startTime:new Date(0,0,0,0,0,0),endTime:new Date(0,0,0,23,30,0),separator:":",show24Hours:!0}})(jQuery);

/* Less-more -----------------------------*/



    (function($) {
     
      $.fn.shorten = function(settings) {
          
     
       var config = $.extend( {
         showChars : 100,
         ellipsesText : "...",
         moreText : "more",
         lessText : "less"
        }, settings);
     
        $('.morelink').live('click', function() {
          var $this = $(this);
         
          // Toggle del nombre del link
          if ($this.hasClass('less')) { // clic en more para mostrar less
           
            $this.removeClass('less');
            $this.html(config.moreText);
           
            // muestro shorcontent y escondo allcontent
            $this.parent().prev().prev().show(); // shortcontent
            $this.parent().prev().hide(); // allcontent
           
          } else { // click en less para mostrar more
           
            $this.addClass('less');
            $this.html(config.lessText);
           
            $this.parent().prev().prev().hide(); // shortcontent
            $this.parent().prev().show(); // allcontent
          }
         
          return false;
        });
     
        return this.each(function() {
          var $this = $(this);
     
          var content = $this.html();
          if (content.length > config.showChars) {
            var c = content.substr(0, config.showChars);
            if (c.indexOf('<') >= 0) // If there's HTML don't want to cut it
            {
              var inTag = false; // I'm in a tag?
              var bag = ''; // Put the characters to be shown here
              var countChars = 0; // Current bag size
              var openTags = []; // Stack for opened tags, so I can close them later
             
              for (i=0; i<content.length; i++)
              {
                if (content[i] == '<' && !inTag)
                {
                  inTag = true;
                 
                  // This could be "tag" or "/tag"
                  tagName = content.substring(i+1, content.indexOf('>', i));
                 
                  // If its a closing tag
                  if (tagName[0] == '/')
                  {
                    if (tagName != '/'+openTags[0]) console.log('ERROR en HTML: el tope del stack debe ser la tag que cierra');
                    else
                      openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                  }
                  else
                  {
                    // There are some nasty tags that don't have a close tag like <br/>
                    if (tagName.toLowerCase() != 'br')
                      openTags.unshift( tagName );// Agrega al inicio el nombre de la tag que abre
                  }
                }
                if (inTag && content[i] == '>')
                {
                  inTag = false;
                }
               
                if (inTag) bag += content[i]; // Add tag name chars to the result
                else
                {
                  if (countChars < config.showChars)
                  {
                    bag += content[i];
                    countChars ++;
                  }
                  else // Ya tengo los caracteres necesarios
                  {
                    if (openTags.length > 0) // Tengo tags sin cerrar
                    {                     
                      for (j=0; j<openTags.length; j++)
                      {                     
                        bag += '</'+ openTags[j] +'>'; // Cierro todas las tags que quedaron abiertas
     
                        // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                      }
                      break;
                    }
                  }
                }
              }
              c = bag;
            }
           
            var html = '<span class="shortcontent">' + c + '&nbsp;' + config.ellipsesText +
                       '</span><span class="allcontent">' + content +
                       '</span>&nbsp;&nbsp;<span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';
           
            $this.html(html);
            $(".allcontent").hide(); // Esconde el contenido completo para todos los textos
          }
        });
      };
    })(jQuery);

function d(what) {
    if (debug == 1) {
        console.log(what);
    }
}



function moretext(param1, param2) {

    var moretext_dots = document.getElementById("moretext_dots");
    var moretext_span = document.getElementById('moretext_cont');
    var moretext_butt = document.getElementById("moretext_butt");

    if (moretext_dots.style.display === "none") {
        moretext_dots.style.display = "inline";
        moretext_butt.innerHTML = ' &nbsp; ' + param1;
        moretext_span.style.display = "none";
    }
    else {
        moretext_dots.style.display = "none";
        moretext_butt.innerHTML = '<br>' + param2;
        moretext_span.style.display = "inline";
    }
}


 
/* Smiles ------------------------------------------------------*/
// replace smile with code
function smile(what){
    /*document.getElementById('add_msg').text.focus();
    document.getElementById('add_msg').text.value = document.getElementById('add_msg').text.value + what;*/    
    $("#text").insertAtCaret(what);
    $("#comment_tareaid").insertAtCaret(what);
} 

/* Left sky ------------------------------------------------------*/
/*$(document).ready(function(){
	var width = $("#left_sky").width();
	console.log(width);
	var left = - width - 10;
	$("#left_sky").css('left', left + "px"); 
});*/

/* Scroll objects from top -----------------*/
function getScrollXY()
{
    var scrOfX = 0, scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    }else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
}

//$(document).ready(function(){
    // insert text at current cursor position
    jQuery.fn.extend({
    insertAtCaret: function(myValue){
      return this.each(function(i) {
        if (document.selection) {
          //For browsers like Internet Explorer
          this.focus();
          sel = document.selection.createRange();
          sel.text = myValue;
          this.focus();
        }
        else if (this.selectionStart || this.selectionStart == '0') {
          //For browsers like Firefox and Webkit based
          var startPos = this.selectionStart;
          var endPos = this.selectionEnd;
          var scrollTop = this.scrollTop;
          this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
          this.focus();
          this.selectionStart = startPos + myValue.length;
          this.selectionEnd = startPos + myValue.length;
          this.scrollTop = scrollTop;
        } else {
          this.value += myValue;
          this.focus();
        }
      })
    }
});


//});


// Play notification sound    
// @param filename The name of the file WITHOUT extension
function playSound(filename){   
    document.getElementById("sound").innerHTML =
        '<audio autoplay="autoplay"><source src="sounds/' + filename + '.mp3" type="audio/mpeg" />\n\
            <source src="sounds/' + filename + '.ogg" type="audio/ogg" />\n\
            <embed hidden="true" autostart="true" loop="false" src="sounds/' + filename +'.mp3" />\n\
        </audio>';
}

$(document).ready(function(){

    // Serach input focus
    if (window.location.pathname == '/') {
        $("#input").focus();
    } else if (window.location.pathname == '/uzivatele/strana-1') {
        $("#input_user").focus();
    }
    $("#input").attr("placeholder", searchInputTextG);

    // textarea chars counter
    $("form textarea.chars_counter").keyup(function(){
        var length = $(this).val().length;
        $(this).parent().parent().find('span.chars_counter').html(length + "");
    });

    // Form input tooltip
    $(".show_tooltip").tooltip({
        
        // place tooltip on the right edge
        position: "center left",

        // a little tweaking of the position
        /* offset: [-2, 10], */
        offset: [-40, 180],


        // use the built-in fadeIn/fadeOut effect
        /* effect: "fade", */

        // custom opacity setting
        opacity: 1
    });
    
});

/* Admin jquery function */

// Remove row from table
$(document).ready(function(){    
    $(".del_row").click(function(event){
        $.get($(this).attr('href'));
        $(this).parent().parent().fadeOut("slow", function() {
            $(this).remove();
        });
        event.preventDefault();
    });

    // Remove row from table with prompt
    $(".del_row_prompt").click(function(event){
        var x = confirm('!!! POZOR opravdu to chceÅ¡ smazat !!?');
        if (x == true) {
            $.get($(this).attr('href'));
            $(this).parent().parent().fadeOut("slow", function() {
                $(this).remove();
            });
        }
        event.preventDefault();
    });

    $(".album_box .del_album").click(function(event){
        $.get($(this).attr('href'));
        $(this).parents('.album_box').fadeOut("slow", function() {
            $(this).remove();
        });
        event.preventDefault();
    });

    // Change artist language
    $("a.table_row_ajax").click(function(event){
        $.get($(this).attr('href'));
        $(this).parent().parent().fadeOut("slow", function() {
            $(this).remove();
        });
        event.preventDefault();
    });

    // Toggle admin menu
    $(".toggle_admin_menu").click(function(event) {
        $("#admin_menu").slideToggle(600);        

        if (readCookie('hideAdminMenu')) {
            eraseCookie('hideAdminMenu');
            $(this).text('-');
            $("div#approve_menu").slideDown(600);
        } else {
            createCookie('hideAdminMenu', 1, 100);
            $(this).text('+');
            $("div#approve_menu").slideUp(600);
        }
        event.preventDefault();
    });

});

// Fanclubs 
$(document).ready(function(){
    $("select#fanclubs").change(function(event) {       
        window.location = $(this).attr('value');
    });

     $('#mutualFanclubs').microModal({  
        autoPositioning: true, // set true if you wish to center the modal window (default: true)  
        overlay: {  
            show: false,       // set true if you wish to how an overlay (default: true)  
            color: '#fff',     // set the colour of the overlay (default: '#fff')  
            opacity: 0.8       // set the opacity of the overlay (default: 0.8)  
        }  
    });  


    $("#fanclub_messages_wrapper .del_fanclub_message").click(function(event) {
        if (confirm('Opravdu chceÅ¡ smazat tento komentÃ¡Å?')) {
            $.get($(this).attr('href'));
            var container = $(this).parent().parent().parent().parent();

            var parent = container.attr('data-parent');        
            if (parent === "0") {             
                var id = container.attr('data-id');        
                $('div.fcmsg[data-parent="' + id + '"]').each(function () {
                    $(this).css("background", "mistyrose");
                    $(this).fadeOut(1000, function() {                
                        $(this).remove();
                    });
                });
            }

            container.css("background", "mistyrose");
            container.fadeOut(1000, function() {
                $(this).remove();
            });
        }
        event.preventDefault();
    });

    $("#fanclub_messages_wrapper .add_comment").live('click', function(event) {
        if ($('#new_comment').length == 0) {
            var container = $(this).parent().parent().parent();
            var id = container.attr('data-id');   
            var fid = $("#fanclub_messages_wrapper").attr('data-fid');

            var lastContainer = $('div.fcmsg[data-parent="' + id + '"]').last();
            if (lastContainer.length == 0) lastContainer = container;

            var html = '<div data-parent="' + id + '" class="fcmsg comment" id="new_comment"> \
                            <form action="/fanclub/addComment/fcmid/' + id + '/fid/' + fid + '" method="post"> \
                            <textarea class="autoresize" name="text" id="comment" placeholder="NapiÅ¡ komentÃ¡Å..."></textarea> \
                            <input type="submit" name="Submit" class="button" id="submit_new_comment" value="Odeslat" /> \
                            <div class="clear"></div> \
                            </form> \
                        </div>';

            $(html).insertAfter(lastContainer);
            $('#comment').focus();        
            
        } else {
            $('#new_comment').remove();
        }
        
        event.preventDefault();
    });

    $("#fanclub_messages_wrapper #message_form input#Submit").live('submit', function() {
        $(this).attr('disabled', 'disabled');
    });

    $('#new_comment form').live('submit', function() {        
        var msg = $('#new_comment textarea#comment').val();
        if (msg.length == 0) {
            alert('MusÃ­Å¡ zadat nÄjakÃ½ komentÃ¡Å');
            return false;
        } else {
            $('#new_comment form input.button').attr('disabled', 'disabled');
        }        
    }); 

    $('#fanclub_messages_wrapper div.fcmsg').mouseover(function() {
        $(this).find('span.fcdate').show();
    });

    $('#fanclub_messages_wrapper div.fcmsg').mouseout(function() {
        $(this).find('span.fcdate').hide();
    });
   
});


// autocomplete search
$(document).ready(function() {

    // serach artists and songs
    $('input#input').autocomplete({
        delay: 5,
        source: function(request, response) {
            
            var q = $('input#input').attr("value");

            $.ajax({
                url: "https://search.karaoketexty.cz/index.php",
                dataType: "jsonp",
                data: {
                    q: q,
                    lang: langG
                },
                success: function(data) {
                    response(data);

                    // data are objects:  {label: "Michal  David", views: "535262", nazev: null, id: "1915" ...}
                    // debug - log into browser tool console
                    // console.log(data);
                }
            }); 
        },
        select: function(event, ui) {
            var hostname = top.location.host;
            var protocol = 'https://';
            if ((hostname === 'karaoke.localhost') || (hostname === 'karaoke.localhost:7777')) {
                protocol = 'http://';
            }
            var url = protocol + hostname + "/search?q=";
            var rnd = Math.random().toString(36).substring(5); 
            //window.location.replace(url + ui.item.value + "&t=at&from=sug&type=" + ui.item.type + "&id=" + ui.item.id + "&sid=" + rnd);            
            location.href = url + ui.item.value + "&t=at&from=sug&type=" + ui.item.type + "&id=" + ui.item.id + "&sid=" + rnd;
        }
    });

    $('#search_submit').click(function(event) {
        var q = $('input#input').val();
        if (q.length < 3) {
            alert(strMinSearchLength);
            $('input#input').focus();
            event.preventDefault();
        }
    });

    $('.search_submit').click(function(event) {
        var q = $('input#input').val();
        if (q.length < 3) {
            alert(strMinSearchLength);
            $('input#input').focus();
            event.preventDefault();
        }
    });


    $('input.nick_autocomplete').autocomplete({
        delay: 5,
        source: function(request, response) {

            var q = $('input.nick_autocomplete').attr("value");

            $.ajax({
                url: "https://search.karaoketexty.cz/index.php",
                dataType: "jsonp",
                data: {
                    q: q,
                    type: 'users',
                    lang: langG
                },
                success: function(data) {
                    response(data);
                }
            })
        }
        
    });
   
    $("#search_type").change(function() {
        var type = $(this).attr("value");
        if (type == 'f') {
            $('input#input').autocomplete("disable");
        } else {
            $('input#input').autocomplete("enable");
        }
    });

});



// coockie functions
function createCookie(name,value,days) {
    var expires;
    if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
    }else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

/* Messages & comments -----*/
$(document).ready(function() {

    $(".del_message").click(function(event) {
        $.get($(this).attr('href'));
        $(this).parent().parent().css("background", "mistyrose");
        $(this).parent().parent().fadeOut(1000, function() {
            $(this).remove();
        });
        event.preventDefault();
    });

    $('.userPhotoComments .add_userphoto_msg').click(function(event) {
        $('#add_message').show();
        $('textarea#text').focus();
        event.preventDefault();
    });
});

/* Others ---------------------------------------------*/

$(document).ready(function() {
    // External links counter
    $(".external_link").click(function(event) {
        $.get('https://www.karaoketexty.cz/admin/stats/updateExternalLinksStats/title/alza.cz/vodafone');
    });

    // Search User Advanced - age check
    $('#SubmitSearchAdvanced').click(function(event) {
        var from = $('select#from option:selected').val();
        var to = $('select#to option:selected').val();
                
        if (parseInt(from) > parseInt(to)) {
            alert("VÄk 'od' musÃ­ bÃ½t menÅ¡Ã­ neÅ¾ vÄk 'do'");
            event.preventDefault();
        }
    });

    // Autoresize textareas
    //$('textarea.autoresize').TextAreaExpander(400, 3000);
    $('textarea.autoresize').autoResize({
        maxHeight: 2000,
        extraSpace: 4,
        animate: false
    });

    /*
    $('p.artist_snippet').shorten({
        "showChars" : 450,
        "moreText"  : strMore,
        "lessText"  : strLess
    });
    */
    
    // song/tryAddVideo
    $('#tryAddVideo').submit(function(event) {
        $('#Submit_confirm').attr('disabled', 'disabled');
        $('#Submit_reject').attr('disabled', 'disabled');
    });
});



/* Playlist --------------------------------------------*/

/*
function stateChange(state) {
    //alert(seekedG);
    console.log('EE' + state);
    if (state == 0) {
        //update plays
        $.get('/playlist/updatePlays/pid/' + pidG + '/seeked/' + seekedG);
        
        var nextItem = getNextItem(currentItemG.attr('order'));
        loadVideoAndText(currentItemG, nextItem);
        var offset = nextItem.attr('order') * 39;
        if (offset > 330) {
            $('#playlist').scrollTo(offset + 'px');
        } else {
            $('#playlist').scrollTo('0px');
        }       

    }else if (state == 2) {
        var diff = Math.abs(ytplayer.getDuration() - ytplayer.getCurrentTime());
        //alert(diff);
        if (diff > 10) seekedG = true;
    }
}

// return next item in playlist
function getNextItem(current) {
    var nextItem = null;

    if (!randomG) {
        nextItem = currentItemG.next();
        // after last element jump to start
        //if (nextItem.size() == 0) {
        //    nextItem = $('#playlist div').first();
        //
    } else {        
        var size = $('#playlist div.not_played').size();
        //all songs is played
        if (size == 0) {
            $('#playlist div').each(function() {
                $(this).addClass('not_played');
            });
            return null;
        }
        var pos = Math.floor(Math.random() * size);
        while (pos == current) pos = Math.floor(Math.random() * size);
        var items = $('#playlist div.not_played');
        nextItem = items.slice(pos, pos + 1);             
    }

    return nextItem;
}

function loadVideoAndText(previousItem, item) {
    currentItemG = item;

    if (previousItem) previousItem.removeClass('current');

    currentItemG.addClass('current');
    var id = item.find('a').attr('id');
    var sid = item.find('a').attr('sid');    
    var vid = item.find('a').attr('vid');    
    d("Loadding video");
    ytplayer.loadVideoById(id);
    
    $("#add_to_playlist_div li a.add_song_to_playlist").each(function() {
        $(this).attr('href', '/playlist/addVideo/id/' + vid + '/pid/' + $(this).attr('data-pid') + '/duplicateSongs/false');
    });
    $("#control_small a").attr('href', '/playlist/createPlaylist/id/' + vid);
    
    $('#lyricsContent').fadeOut('fast', function() {
        $.get('/ajax/song/lyricsBySid.php?sid=' + sid, function(data) {
            $('#lyricsContent').html(data);
            $('#original').show();
            $('#lyricsContent').fadeIn();
            translateG = false;
            
            var title = new String($('#lyricsContent .song').html());
            var artist = new String($('#lyricsContent .artist').html());

            title = title.replace("&amp;",'');
           
            document.title = title + ' - ' + artist;
        });
    });
    
    currentItemG.removeClass('not_played');
    seekedG = false;
}
*/



//  ==== MOVED TO ytapi.js ====
//  --------------->>
//  ==== MOVED TO ytapi.js ====



/*
$(document).ready(function() {

    $('#playlist div.item').live('click', function(event) {
        var item = $(this).closest('div').closest('div');
        loadVideoAndText(currentItemG, item);        
        event.preventDefault();
    });    

    $('#playlist div.item, #playlist div.item_edit').live('mouseover', function() {
        if (!$(this).hasClass('current')) $(this).addClass('hover');
        $(this).find('div.remove').show();
        $(this).find('div.move').show();
        $(this).find('div.add').show();
    });

    $('#playlist div.item, #playlist div.item_edit').live('mouseout' , function() {
        $(this).removeClass('hover');
        $(this).find('div.remove').hide();
        $(this).find('div.move').hide();
        $(this).find('div.add').hide();
    });

    $('#playlist div.remove').live('mouseover', function() {
        $(this).css('background-image', 'url("/img/remove_small.png")');
    });

    $('#playlist div.remove').live('mouseout', function() {
        $(this).css('background-image', 'url("/img/remove_small_gray.png")');
    });

    $('.vote_like').click(function(event) {
        var counter = null;
        if (signedG == 'false') {
            //alert(strHaveToSignUp);
            window.location.href = 'auth/noSigned';
        } else {
            if ((likeG == 0) || (likeG == 2)) {
                $.get('/playlist/likeDislike/pid/' + pidG + '/like/like');
                counter = parseInt($('.like_counter').html());
                counter++;
                $('.like_counter').html("" + counter);
                $(this).addClass('up_highlight');
                $('.vote_dislike').removeClass('down_highlight');
                $('.vote_dislike').css('cursor', 'pointer');
                if (likeG == 2) {
                    counter = parseInt($('.dislike_counter').html());
                    counter--;
                    $('.dislike_counter').html("" + counter);
                }
                likeG = 1;
            }
        }
        event.preventDefault();
    });

    $('.vote_dislike').click(function(event) {
        var counter = null;
        if (signedG == 'false') {
            //alert(strHaveToSignUp);
            window.location.href = 'auth/noSigned';
        } else {
            if ((likeG == 0) || (likeG == 1)) {
                $.get('/playlist/likeDislike/pid/' + pidG + '/like/dislike');
                counter = parseInt($('.dislike_counter').html());
                counter++;
                $('.dislike_counter').html("" + counter);
                $(this).addClass('down_highlight');
                $('.vote_like').removeClass('up_highlight');
                $('.vote_like').css('cursor', 'pointer');
                if (likeG == 1) {
                    counter = parseInt($('.like_counter').html());
                    counter--;
                    $('.like_counter').html("" + counter);
                }
                likeG = 2;
            }
        }
        event.preventDefault();
    });
*/

/*
    $('.thumb_up').mouseover(function() {
        if ((likeG == 0) || (likeG == 2)) {
            $(this).addClass('up_highlight');
        } else {
            $(this).css('cursor', 'default');
        }
    });

    $('.thumb_up').mouseout(function() {
        if ((likeG == 0) || (likeG == 2)) {
            $(this).removeClass('up_highlight');
        }
    });
*/

/*
    $('.thumb_down').mouseover(function() {
        if ((likeG == 0) || (likeG == 1)) {
            $(this).addClass('down_highlight');
        } else {
            $(this).css('cursor', 'default');
        }
    });

    $('.thumb_down').mouseout(function() {
        if ((likeG == 0) || (likeG == 1)) {
            $(this).removeClass('down_highlight');
        }
    });

    $('.random').click(function() {
        if (!randomG) {
            randomG = true;
            $('.random').attr('title', strRandomOff);
            $('.random img').attr('src', '/img/random_black.png');
        } else {
            randomG = false;
            $('.random').attr('title', strRandomOn);
            $('.random img').attr('src', '/img/random.png');
        }
    });

    $('#switch').live('click', function(event) {
        if (!translateG) {
            translateG = true;
            $("#original").hide();
            $("#translate").fadeIn();
            $(this).attr('title', strShowOrig);
        } else {
            translateG = false;
            $("#translate").hide();
            $("#original").fadeIn();
            $(this).attr('title', strShowTranslate);
        }
        event.preventDefault();
    })

    $("#switch").tipTip();
});

*/


/* Create Playlist --------------------------------------------*/
$(document).ready(function() {

    // AUTOCOMPLETE MENU
    $('#searchSong').keyup(function(event) {
        var searchval = $(this).attr('value');

        if (searchval.length < 3) {

            $("#searched").hide();
            return;
        }

        $("#searched_part .ajax_loading").show();

        $.ajax({
            url: "https://search.karaoketexty.cz/index.php",
            dataType: "jsonp",
            data: {
                q: searchval,
                type: 'videos',
                lang: langG
            },
            success: function(data) {                                
                $("#searched").show();
                $('#searched').html(data);
                $("#searched_part .ajax_loading").hide();

                // hide added videos add option - in search autocomplete menu
                // it looks for match in down playlist and then edit live autocomplete
                // hidding clicked item -- is made by another function down
                var row = null;
                $('#playlist_edit_cont div.item_edit').find('a').each(function() {

                    // row = add icon element (looks like plus sign)
                    row = $('#searched').find('div.add_item[vid=' + $(this).attr('vid') + ']');
                    row.hide();
                    row.parent().parent().find('div.song').addClass('added');

                    // 2018
                    row.parent().parent().removeClass("add_song_item");
                });
            }
        });
    });

    $("#searched div.song").live('click', function(event) {
        event.preventDefault();
    });

    // ADD SONG TO PLAYLIST
    //$("#searched div.add_song_item").live('click', function(event) {

    $(document).on('click', '#searched div.add_song_item', function(event)
    {
        // ie youtube url id hash
        var video_id = $(this).attr('videoId');
        // video id
        var vid = $(this).attr('vid');
        var nazev = $(this).attr('nazev');
        var artist = $(this).attr('artist');

        $('#playlist_edit_cont').prepend(
            '<div class="clear item_edit"><div class="content">\n\
            <img class="video" alt="video" src="https://i.ytimg.com/vi/'+video_id+'/1.jpg">\n\
            <a href="#" vid="'+vid+'" id="'+video_id+'">'+nazev+'</a>\n\
            '+artist+'</div>\n\
            <div title="'+removeVideoMsg+'" class="remove"></div></div>'
        );
        //if (firstRunG) {
            //defineYtplayer(video_id);
        //}

        $.get('/playlist/addVideo/pid/'+pidG+'/id/'+vid);
               
        if ($("#playlist_edit_cont div.item_edit").length > 0) {
            $("#playlist_done").show();
            $("#playlist_done_msg").show();
        }

        $(this).find('div.add_item').hide();
        $(this).find('div.song').addClass('added');
        $(this).removeClass("add_song_item");   // 2018 - remove add class so you cant add mutlipletimes
        event.preventDefault();
    });

    $("#searched div.song a").live('click', function(event) {
        var id = $(this).parent().siblings('div').find('div').attr('videoId');
        if (firstRunG) {
            defineYtplayer(id);
        } else {
            ytplayer.loadVideoById(id);
        }
        event.preventDefault();
    });


    // autocomplete menu - HOVER ADD ICON
    $('#searched div.row').live('mouseover', function() {        
        if (!$(this).find('div.song').hasClass('added')) {
            $(this).find('div.add_item').show();
        }
        $(this).addClass('highlight');
    });

    $('#searched div.row').live('mouseout', function() {
        $(this).find('div.add_item').hide();
        $(this).removeClass('highlight');
    });


    // REMOVE FROM PLAYLIST
    $('div.item_edit div.remove').live('click', function(event) {
        var vid = $(this).siblings().find('a').attr('vid');        
        $(this).parent().fadeOut(400, function() {
            $(this).remove();
            if ($("#playlist_edit_cont div.item_edit").length == 0) {
                $("#playlist_done").hide();
                $("#playlist_done_msg").hide();
            }
        });                
        $.get('/playlist/removeVideo/pid/' + pidG + '/id/' + vid);
        $('#searched').find('div[vid=' + vid + ']').parent().parent().find('div.song').removeClass('added');
    });

    $('#playlist_edit_cont div.item_edit div.content').live('click', function(event) {
        var item = $(this).closest('div').closest('div');
        loadVideo(item);
        event.preventDefault();
    });          

});

/* Karaoke -------------------------------------------------*/

$(document).ready(function() 
{
    $("#playKaraoke").click(function(event) {
        //console.log(embedPlayerG);
        if (stateG != 1) {
            embedPlayerG.playVideo();
            //karaokeTimerG = window.setInterval("progressKaraoke()", 200);
        } else {
            embedPlayerG.pauseVideo();
            window.clearInterval(karaokeTimerG);
        }        
        event.preventDefault();
    });  
    
    $("#stopKaraoke").click(function(event) {
        embedPlayerG.seekTo(0);
        embedPlayerG.stopVideo();     
        showKaraokeStop();
        event.preventDefault();
    });  

    function showKaraokeStop() {            
        window.clearInterval(karaokeTimerG);
        currentRowG = -1;
        posG = 45;
        $("span#row0").css('margin-top', Math.round(posG) + 'px');
        $(".row").css('color', '#CCC');
        $("#counter").remove();
        offsetG = 0;
        $("#currentTime").html("0:00");
    }
    
    $("ul#karaoke_stars_rating a").click(function(event){
        
        if (signedG == 'false') {
            //alert(strHaveToSignUp);
            window.location.href = 'auth/noSigned';
            
        } else {        
            var rating = $(this).attr('rating');           
            var url = '/karaoke/rateKaraoke/kid/' + kidG + '/rating/' + rating;

            $.get(url, function(data) {                
                $('p.karaoke_rating').html('PrÅ¯mÄrnÃ© hodnocenÃ­: <strong>' + data + '</strong>');
                $('#rating_saved').fadeIn(100).delay(1600).fadeOut(1000);
            });
        }
        event.preventDefault();
    });


    $("#karaoke_editor img.plus, #karaoke_editor img.minus").live('click', function(event){
        var time = $(this).siblings('.time');
        var val = parseFloat(time.val());
        var inc = 0.3;

        if ($(this).hasClass('plus')) {
            val = val + inc;
        } else {
            val = val - inc;
        }
        val = Math.round(val * 100) / 100;
        time.val(val);
        time.css('color', '#05AD24');
        updateSylt();
        event.preventDefault();
    });

    $("#karaoke_editor img.now").live('click', function(event){
        var timeInput = $(this).parent().siblings('.time');
        if (timeInput.attr('disabled') != 'disabled') {
            var time = embedPlayerG.getCurrentTime();
            time = Math.round(time * 10) / 10;
            // reaction time
            if (time > 0.3) time -= 0.3;            
            timeInput.val(getTimeFromSeconds(time, true));
            timeInput.css('color', '#05AD24');
            timeInput.css('background-color', 'white');
            $("#karaoke_editor input.text").css('background-color', 'white');
            $(this).parent().siblings('.text').css('background-color', 'lawngreen');
            updateSylt();
            checkTimesOrder();
        }
        event.preventDefault();
    });

    $("#karaoke_editor img.add").live('click', function(event){
        var str = "<div class='editor_row'>";
        if (ytplayerType == 'edit-karaoke') str += "<img title='VloÅ¾Ã­ k ÅÃ¡dku aktuÃ¡lnÃ­ Äas' class='now' alt='TeÄ' src='/img/cs_CZ/now.jpg'>";
        str +="<input class='time' type='text' name='time[]' value='' />\n\
<input class='text' type='text' name='text[]' value='' />\n\
<img class='del' title='Odebrat ÅÃ¡dek' alt='Odebrat ÅÃ¡dek' src='/img/del_row.jpg'>\n\
<img class='add' title='PÅidat ÅÃ¡dek' alt='PÅidat ÅÃ¡dek' src='/img/add_row.jpg'><div class='clear'></div></div>"
        $(this).parent().after(str);
        reNumberKaraokeLabels()
        event.preventDefault();
    });

    $("#karaoke_editor img.del").live('click', function(event){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
        reNumberKaraokeLabels()
        event.preventDefault();
    });

    $("#karaoke_editor_control input.offset_submit").click(function(event) {

        var newStart = $("#karaoke_editor_control input.offset").val();
        newStart = newStart.replace(',', '.');

        if (!isNaN(parseFloat(newStart)) && isFinite(newStart)) {
            var offset = parseFloat(newStart) - parseFloat(getSecondsFromTime($("#time_0").val()));
            offset = Math.round(offset * 10) / 10;

            $("#karaoke_editor input.time").each(function() {
                if ($(this).attr('disabled') != 'disabled') {
                    var val = $(this).val();
                    val = getSecondsFromTime(val);
                    val = val + offset;
                    //val = Math.round(val * 10) / 10;
                    $(this).val(getTimeFromSeconds(val, true));
                    $(this).css('color', '#05AD24');
                }
            });
            updateSylt();

        } else {
            alert("MusÃ­Å¡ zadat ÄÃ­slo");
        }
        
        event.preventDefault();
    });

    $("#karaoke_editor input.time").change(function() {
        $(this).css('color', '#444')
        updateSylt();
        checkTimesOrder();
    });

    $("#karaoke_editor input.text").keyup(function() {
        showHideTime($(this));
    });
    
    $("#karaoke_editor input.text").change(function() {
        showHideTime($(this));
    });

    function showHideTime(obj)
    {
        if (obj.val() == '') {
            obj.parent().find(".time").attr('disabled', 'disabled');
            obj.parent().find(".time").val('');
            obj.parent().find(".now_div img").hide();
        } else {
            obj.parent().find(".time").removeAttr('disabled');
            obj.parent().find(".now_div img").show();
        }
        updateSylt();
    }

    $("input#save_sylt").click(function(event) {
        if (checkSylt()) {
            $("#karaoke_editor input.time").removeAttr('disabled');
            $("form#sylt_form").submit();
        }
        event.preventDefault();
    });

    $("#next_row").click(function(event) {

        desktop = $(this).attr('desktop');
        nextRow(desktop);
        event.preventDefault();
    });

    $("#start_again").click(function(event) {
        embedPlayerG.seekTo(0);
        embedPlayerG.playVideo();
        $("#karaoke_editor input.time").val('');
        $("#karaoke_editor input.text").css('color', '#444444');
        $("#next_row").removeAttr('disabled');
        $("#next_row").focus();
        $(this).attr('value', 'ZaÄÃ­t ÃºplnÄ znovu');
        createIndexG = 0;
        $('#karaoke_editor').scrollTo("0px");
        event.preventDefault();
    });

    $("#play_video_link").click(function(event) {
        embedPlayerG.playVideo();
        event.preventDefault();
    });
});   

function initKaraoke() 
{    
     
}

function initKaraokeEditor()
{
    karaokeTimerG = window.setInterval("progressKaraokeEditor()", 200);
}

function progressKaraoke() 
{       
    currentTimeG = Math.round(embedPlayerG.getCurrentTime());

    // update play
    if (currentTimeG > 60 & updatePlayG == 0) {        
        $.get('/karaoke/updatePlays/kid/' + kidG);
        updatePlayG = 1;
    }
    
    $("#currentTime").html(getTimeFromSeconds(currentTimeG, false));
    $("#totalTime").html(getTimeFromSeconds(embedPlayerG.getDuration(), false));
    
    if (currentRowG == -1) {
        var countDown = Math.round(syltG[0][0] - currentTimeG);
        if ((countDown <= 5) & (countDown >= 0)) $("#counter").html(countDown);        
        if (countDown == 0) {
            $("#counter").remove();
            $("span#row0").css('margin-top', '45px');        
        }        
    }          
    //console.log(currentRowG + ":" + syltG.length);
    var nextRow = null;
    if ((currentRowG + 1) < syltG.length) {
        nextRow = syltG[currentRowG + 1];
    }    
    
    if (nextRow != null) {
        if (nextRow[0] < currentTimeG) {
            //console.log(nextRow[0] + ' - ' + currentTimeG);
            currentRowG++;
            $("#row" + (currentRowG - 1)).css('color', '#CCC');
            $("#row" + currentRowG).css('color', '#ed205a');            
        }
    }    

    if (currentRowG >= 0) {
        
        var pos = $("#row" + currentRowG).offset().top - $("#karaoke_sylt").offset().top;
        
        //console.log(pos);
        var size = 23;
        if ((currentRowG + 1) < syltG.length) {
            var diff = syltG[currentRowG + 1][0] - syltG[currentRowG][0];
            // center current Row
            var diffPos = 50 - pos;
            offsetG = Math.abs(size - diffPos) / diff / 5;
            if (diffPos > 20) offsetG = offsetG * 2;
            if (diffPos < -20) offsetG = offsetG / 2;
            //console.log(diffPos + ' - ' + offsetG);
        } else {
            offsetG = 1;
        }

        posG = posG - offsetG;        
        $("span#row0").css('margin-top', Math.round(posG) + 'px');
    }
    
}

function progressKaraokeEditor()
{
    if (!ytplayer) return;    
    
    var cur = ytplayer.getCurrentTime();
    currentTimeG = Math.round(cur);
    //$("#current_time").html(Math.round(cur * 10) / 10);
    
    var nextRow = null;
    if ((currentRowG + 1) < syltG.length) {
        nextRow = syltG[currentRowG + 1];
    }
    
    if (nextRow != null) {    
        if (nextRow[0] < currentTimeG) {
            currentRowG++;
            $("#text_" + (currentRowG - 1)).css('background-color', 'white');
            if ($("#text_" + currentRowG).val() != '') $("#text_" + currentRowG).css('background-color', 'lawngreen');
        }
    }
}

function nextRow(desktop)
{
    if (stateG != 1) return;

    var time = embedPlayerG.getCurrentTime();
    time = Math.round(time * 10) / 10;
    
    $('#karaoke_editor div.editor_row').each(function(index, elem) {
        var input = $(elem).find('input.time');
        if (input.val() == '' && input.attr('disabled') != 'disabled') {            
            $(elem).find('input.time').val(getTimeFromSeconds(time, true)).css('background-color', 'white');
            $(elem).find('input.text').css('color', 'green');
            return false;
        }
    });

    // on resp itl break function
    if (desktop == 1) {

        createIndexG++;
        if (createIndexG > 10) {
            var offset = (createIndexG - 10) * 29;
            $('#karaoke_editor').scrollTo(offset + "px");
        } else {
            $('#karaoke_editor').scrollTo("0px");
        }
    }
}

function setCurrentRow()
{    
    var i = 0;
    while (i < syltG.length && currentTimeG > syltG[i][0]) {
        i++;
    }    
    currentRowG = --i;

    $("#karaoke_editor input.text").css('background-color', 'white');
    //$("#karaoke_editor input.time").css('color', '#444');
    $("#karaoke_editor input.text_" + currentRowG).css('background-color', 'lawngreen');
}

function checkSylt()
{
    var result = checkTimesOrder();
    if (!result) alert("Äasy musÃ­ jÃ­t po sobÄ a vÅ¡echny musÃ­ bÃ½t vyplnÄnÃ©.");

    var duration = embedPlayerG.getDuration();
    var last = $("#karaoke_editor input#time_" + (syltG.length - 1)).val();

    // not a half karoake
    if ((duration - last) > last) {
        alert("Karaoke nenÃ­ celÃ©");
        result = false;
    }

    //console.log(result);
    return result;
}

// check chronological order of times and all filled times
function checkTimesOrder()
{
    var test = true;
    $("#karaoke_editor input.time").css('border-color', '#AAA');

    var i = 0;
    while (i < syltG.length - 1) {

        var time = $("#karaoke_editor input#time_" + i);
        while (time.attr('disabled') == 'disabled') {
            i++;
            time = $("#karaoke_editor input#time_" + i);
        }
        time = time.val();
        if (time != undefined) time = getSecondsFromTime(time); else time = 0;

        var time_bigger = $("#karaoke_editor input#time_" + (i + 1));
        while (time_bigger.attr('disabled') == 'disabled') {
            i++;
            time_bigger = $("#karaoke_editor input#time_" + (i + 1));
        }
        time_bigger = time_bigger.val();
        if (time_bigger != undefined) time_bigger = getSecondsFromTime(time_bigger); else time_bigger = 0;
        
        if (time_bigger != 0 && time >= time_bigger) {            
            $("#karaoke_editor input#time_" + (i + 1)).css('border-color', 'red');
            test = false;            
        }

        if (time == '' || time_bigger == '') test = false;
        if (!test) return false;
        i++;
    }

    return test;
}

// change ids of time and text labels after delete or add new input
function reNumberKaraokeLabels()
{    
    $("#sylt_form p").each(function(index) {
        $(this).find('input.time').attr('id', 'time_' + index);
        $(this).find('input.text').attr('id', 'text_' + index);
    });
}

function updateSylt()
{
    var newSylt = new Array();
    $("#sylt_form p").each(function(index) {
        var time = $(this).find('input.time').val();
        time = getSecondsFromTime(time);
        newSylt[index] = new Array(time, $(this).find('input.text').val());
    });
    //console.log(newSylt);
    syltG = newSylt;
    setCurrentRow();
}

function getTimeFromSeconds(sec, decimalPart)
{
    var fraction = sec - Math.floor(sec);    
    fraction = Math.round(fraction * 10) / 10;    
    sec = Math.floor(sec);
    var minutes = Math.floor(sec/60);
    //if (minutes == 0) minutes = '00';
    //else if (minutes <= 9) minutes = '0' + minutes; 
    var seconds = sec % 60;
    if (decimalPart) {
        if (fraction == 0) seconds += '.0';
        else seconds += fraction;
    }
    if (seconds <= 9) seconds = '0' + seconds;
    return  minutes + ":" + seconds;
}

function getSecondsFromTime(time)
{
    if (time.indexOf(':') == -1) return time;
    var parts = time.split(':');
    if (parts[0] == 0) return parseFloat(parts[1]);
    return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
}

/* Search stats --------------------------------------------*/
$(document).ready(function() {    
    $("#search ul.artist li a").click(function(event) {                
        url = $(this).attr('href');        
               
        $.get('/ajax/search/searchClicks.php?type=artist&searchSid=' + searchSid, function() {                        
            //redirect for left mouse
            if (event.which == 1) window.location.href = url;                
        });                   
        if (event.which == 1) event.preventDefault();
    });
    
    $("#search ul.title li a").click(function(event) {         
        url = $(this).attr('href');
        $.get('/ajax/search/searchClicks.php?type=title&searchSid=' + searchSid, function() {            
            //redirect for left mouse
            if (event.which == 1) window.location.href = url;                
        });
        if (event.which == 1) event.preventDefault();
    });

    $("#fulltextSearch ul li a").click(function() {
        $.get('/ajax/search/searchClicks.php?type=lyrics');
    });
});

/* Add to playlist icon ------------------------------------*/
$(document).ready(function() {

    $("a#add_to_playlist, #add_to_playlist_plist").show();

    $("#add_to_playlist, #add_to_playlist_plist").click(function(event) {
        $("#add_to_playlist_div").toggle();
        event.preventDefault();
    });
 
    $("#add_to_playlist_ok a, #add_to_playlist_err a").click(function(event) {
        $(this).parent().parent().hide();
        event.preventDefault();
    });
   
    $("#add_to_playlist_close").click(function(event) {
        $(this).parent().hide();
        event.preventDefault();
    });

    $("#add_to_playlist_div a.add_song_to_playlist").click(function(event) {
        var url = $(this).attr('href');
        $.get(url, function(data) {
            $("#add_to_playlist_div").hide();            
            if (data == 1) {
                $("#add_to_playlist_ok").show().delay(2000).fadeOut();
            } else {
                $("#add_to_playlist_err").show().delay(2000).fadeOut();
            }
        });               

        event.preventDefault();
    });

});

/* Check unread messages ------------------------------------*/
$(document).ready(function() {

    var title_orig = document.title;
    /* var d = new Date();     // current time js function
    var time_lastcheck = d.getTime() / 1000;    // getTime() return milliseconds
    var timer; */

    var islogged = false;
    /*
    if ($("#loggedUser").length > 0) {
        islogged = true;
    }
    */
    if (signedG == 'true') {
        islogged = true;
    }

    var ismobilejs = document.getElementById('ismobile');



    if (islogged) {

        // LAST USER ACTIVITY
        var focus_dynamiclimit = 6000;
        var idletime = 0;   // global scope

        // resets idletime var, if any action
        function reset_timer() {
            idletime = 0;
        }
        function lastaction_check() {
            window.onload = reset_timer;
            window.onmousemove = reset_timer;
            window.onmousedown = reset_timer;  // touchscreen presses
            window.ontouchstart = reset_timer; // touchscreen swipes
            window.onclick = reset_timer;      // touchpad clicks
            window.onkeypress = reset_timer;
            window.addEventListener('scroll', reset_timer, true);
        }
        lastaction_check();

        // idle time
        function timer_increment() {

            idletime = idletime + 5;
            
            if (idletime < 600) {
                focus_dynamiclimit = 6000;
            }
            if (idletime >= 600) {
                focus_dynamiclimit = 15000;
            }
            if (idletime >= 1800) {
                focus_dynamiclimit = 30000;
            }
            if (idletime >= 3600) {
                focus_dynamiclimit = 45000;
            }
            //console.log('idletime: '+idletime);
            
            // call itself after delay
            setTimeout(function() {
                timer_increment();
            }, 5000);
        }
        
        
        // MSG COUNT ajax
        function get_newmsgcount(param1, param2) {

            $.ajax({
                type: 'GET',
                url: '/ajax/message/getUnreadMessagesCount.php',
                // data: { type: 'aa', type2: 'bb' },
                // dataType: 'html',
                cache: false,
                success: function(data){

                    if (ismobilejs) {
                        var msgcount_inhtml = $('.unreadmsgcount_resp').html();
                    }
                    else {
                        var msgcount_inhtml = $('#unreadMsessagesCount').html();
                    }

                    var msgcount_new = data;

                    // only numbers - error messages cant be seen
                    msgcount_new = parseInt(msgcount_new);

                    if (Number.isInteger(msgcount_new)) {

                        // only single character allowed - everything else will show as 9
                        if ((msgcount_new.length > 1) || (msgcount_new > 9)) {
                            msgcount_new = 9;
                        }
                    }
                    else {
                        msgcount_new = 0;
                    }


                    if (msgcount_inhtml != msgcount_new) {

                        if (msgcount_new === 0) {

                            if (ismobilejs) {
                                $('.unreadmsgcount_resp').hide();
                            }
                            else{
                                $("#unreadMsgWrapper").hide();
                            }
                            document.title = title_orig;
                        }
                        else {

                            if (ismobilejs) {
                                $('.unreadmsgcount_resp').show().html(msgcount_new).fadeIn('slow');
                            }
                            else{
                                $("#unreadMsgWrapper").show();
                                $("#unreadMsessagesCount").hide().html(msgcount_new).fadeIn('slow');
                            }

                            if (pmSound == '1') {
                                playSound('notif');
                            }
                            document.title = '(' + msgcount_new + ') ' + title_orig;
                        }
                    }
                    // call itself after delay
                    // setTimeout(function() {
                    //    get_newmsgcount('', '');
                    // }, 6000);
                }
            });

        }

        // page FOCUS CHECK   --every x second
        // function "last user activity" determines loop timelimit
        // if long user inactivity, messages are checked less frequently
        function focus_check() {

            // start MSGCOUNT
            // do not execute on certain pages
            var piece = contract.split('::');

            if ((piece[1] == 'showMessages') || (piece[1] == 'sendMessage')) {

            }
            else {
                get_newmsgcount('', '');
            }

            // debug
            //var today = new Date();
            //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            //console.log('time: '+time+' dynamic: '+focus_dynamiclimit);

            setTimeout(function() {
                focus_check();
            }, focus_dynamiclimit);
        }

        // START at same time
        // *if we need we can save vals in cookies too...
        timer_increment();
        focus_check();

    }


/*
    window.getNewMessages = function(callbackFunc, timing) {
//alert('aa');

        var variableInterval = {
            interval: timing,
            callback: callbackFunc,
            stopped: false,
            runLoop: function() {
                if (variableInterval.stopped) {
                    return;
                }

                var result = variableInterval.callback.call(variableInterval);
                if (typeof result == 'number'){
                    if (result === 0) return;
                    variableInterval.interval = result;
                }
                variableInterval.loop();
            },
            stop: function() {
                this.stopped = true;
                window.clearTimeout(this.timeout);
            },
            start: function() {
                this.stopped = false;
                return this.loop();
            },
            loop: function() {
                this.timeout = window.setTimeout(this.runLoop, this.interval);
                return this;
            }
        };

        return variableInterval.start();
    };

    if (islogged) {
        var vi = getNewMessages(function() {
//alert('bb');
            // this is the variableInterval - so we can change/get the interval here:
            var interval = this.interval;
            //console.log(interval);

            $.get('/ajax/message/getUnreadMessagesCount.php', function(data) {
                var msgCount = $("#unreadMsessagesCount").html();
                var newMsgCount = data;

                if (newMsgCount == parseInt(newMsgCount)) {
                    if (msgCount != newMsgCount) {

                        if (newMsgCount == 0) {
                            $("#unreadMsgWrapper").hide();
                            document.title = title_orig;
                        } else {
                            $("#unreadMsgWrapper").show();
                            $("#unreadMsessagesCount").hide().html(newMsgCount).fadeIn('slow');
                            if (pmSound == '1') playSound('notif');
                            document.title = '(' + newMsgCount + ') ' + title_orig;
                        }
                    }
                }

                d = new Date();
                time_lastcheck = d.getTime() / 1000;
            });

            lastCheck = Math.round(new Date().getTime() / 1000);

            // we could return a new interval after doing something
            return interval + 5000;

        }, 10000);
    }


    // if window active
    $(window).focus(function () {
        if (islogged && vi.stopped == true) {

            var delay = 250;
            d = new Date();
            var now = d.getTime() / 1000;

            if ((time_lastcheck + 15) > now) {
                delay = 5000;
            }
            
            timer = setTimeout(function() {
                vi.interval = delay;
                vi.start();
            }, delay);
        }
        //console.log('focus');
    })


    // if window NOT active  (window.blur checks lose of focus of window)
    $(window).blur(function() {
        if (islogged) {
            vi.stop();
        }
        //console.log('blur');
    })

    */


}); 


$(document).ready(function(){

    /* MESSAGES CONTACT list - TOGGLE switch */

    $('#toggle_contactlist').on('click', function(event) {

        if (readCookie('contactlist_toggle')) {

            //$('.msgscontacts_cont').animate({height:'775px'}, 500);
            $('.msgscontacts_cont').css({
                'height': 'initial'
            });
            eraseCookie('contactlist_toggle');
            $(this).text('-');
        }
        else {
            $('.msgscontacts_cont').animate({height:'180px'}, 500);
            createCookie('contactlist_toggle', 1, 100);
            $(this).text('+');
        }

        event.preventDefault();
    });


    /* MESSAGES hide/show SYSTEM messages */

    $('#toggle_systemmsgs').on('click', function(event) {

        if (readCookie('systemmsgs_toggle')) {
            $('.button_checkbox').css('background-color', 'white');
            eraseCookie('systemmsgs_toggle');
            $(this).text('');
        }
        else {
            $('.button_checkbox').css('background-color', 'black');
            createCookie('systemmsgs_toggle', 1, 1);
            $(this).text('');
        }

        event.preventDefault();
    });

});



/* Playlists page---------------------------------*/
$(document).ready(function() {

    $('#recomended_playlist_wrapper .recomended_playlist').mouseout(function() {
        $(this).find('.play_icon').hide();
        $(this).find('a.title').removeClass('green');
    });

    $('#recomended_playlist_wrapper .recomended_playlist').mouseover(function() {
        $(this).find('.play_icon').show();
        $(this).find('a.title').addClass('green');
    });
});

/* Concerts ------------------------------------------*/
function ParseDMS(input) {
    var parts = input.split(/[^\d\w]+/);    
    var lat = ConvertDMSToDD(parts[0], parts[1], parts[2], parts[4]);
    var lng = ConvertDMSToDD(parts[5], parts[6], parts[7], parts[9]);

    var res = new Array(2);
    res[0] = lat;
    res[1] = lng;

    return res;
}
 
function ConvertDMSToDD(days, minutes, seconds, direction) {
    var dd = parseFloat(days) + parseFloat(minutes/60) + parseFloat(seconds/(60*60));

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
}

$(document).ready(function() {

    $('#timePicker').timePicker();

    $('#add_next_artist a').live('click', function(event) {
        $('#artists_autocomplete').append('<div><dt><label for="artists" class="optional">&nbsp;</label></dt>\n\
            <dd><input type="text" name="artists[]" value="" style="float: left;" />\n\
               <a href="#"><img class="remove_artist" alt="PÅidat ÃºÄinkujÃ­cÃ­ho" src="/img/remove_small.png"></a>\n\
            </dd></div>');
        $('#artists_autocomplete input').last().focus();
        event.preventDefault();
    });

    $('#artists_autocomplete img.remove_artist').live('click', function(event) {
        $(this).parent().parent().parent().remove();
        event.preventDefault();
    });

    $('#add_new_concert_place').click(function(event) {
        $('#add_place_form').fadeIn(200);
        event.preventDefault();
    });

    $('#playd_concerts_link').click(function(event) {
        $(this).parent().hide();
        $('#played_concerts').fadeIn(200);
        event.preventDefault();
    });

    $('#artists_autocomplete input').live('keyup.autocomplete', function(){

        $(this).autocomplete({
            delay: 5,
            source: function(request, response) {

                var q = $('#artists_autocomplete input:focus').attr('value');
                //console.log(q);

                $.ajax({
                    url: "https://search.karaoketexty.cz/index.php",
                    dataType: "jsonp",
                    data: {
                        q: q,
                        type: 'artists',
                        lang: langG
                    },
                    success: function(data) {
                        response(data);
                    }
                })
            },

            select: function(event, ui) {
                $('#artists_autocomplete input:focus').attr('name', 'artists[' + ui.item.id + ']');
            }
        });
    });
    
});

/* Manage videos ---------------------------*/
$(document).ready(function() {
   
    $('#manage_videos a.set_default').live('click', function(event) {
        var current = $(this).parent();
        $.get($(this).attr('href'), function(data) {
            $('#manage_videos span.default_video').each(function() {
                var vid = $(this).attr('data-vid');                
                $(this).html('<a class="set_default" href="/song/setVideoAsDefault/vid/' + vid + '">' + strSetVideoAsDefault + '</a>').fadeIn();                
            });
            current.html(strVideoIsDefault).fadeIn();
        });         
        
        event.preventDefault();
    });
   
});

/* Videos Box ---------------------------*/
/* ALTERNATIVE song VIDEO - on icon click */

$(document).ready(function() {
   
    // $('#videos_box a').click(function(event) {   -- zlobi na mobilech

    $(document).on('click', '#videos_box a', function(event) {

        //$(document).on('click', '.alternative_video', function(event) {   // pak musÃ­Å¡ zmÄnit "this" i v else

        console.log('videos box click');
        event.preventDefault();

        // VARS
        var hostname = top.location.host;
        var youtube_id = $(this).attr('data-youtube_id');
        // var youtube_id = $(this).children('a').attr('data-youtube_id');


        // change alt video icon BORDER
        $('.alternative_video').css('border', '3px solid white');
        $(this).parent().css('border', '3px solid #32bc04');


        // change iframe URL
        if ((hostname === 'karaoke.localhost') || (hostname === 'karaoke.localhost:7777') || (hostname === 'www.karaoketexty.cz') || (hostname === 'www.karaoketexty.sk') || (hostname === 'www.karaoke-lyrics.net') || (hostname === 'www.karaoke-texte.de') || (hostname === 'www.karaoketeksty.pl')) {

            var ismobilejs = document.getElementById('ismobile');

            var domainaddr = '';
            if ((hostname === 'www.karaoketexty.cz') || (hostname === 'www.karaoketexty.sk') || (hostname === 'www.karaoke-lyrics.net') || (hostname === 'www.karaoke-texte.de') || (hostname === 'www.karaoketeksty.pl')) {
                domainaddr = 'https://video.doskla.cz';
            }
            var urlfull_altvid = domainaddr+'/stalscripts/iframe_source.php?idvid='+youtube_id+'&autoplay=yes';
            if (ismobilejs) {
                urlfull_altvid = domainaddr+'/stalscripts/iframe_source.php?idvid='+youtube_id+'&autoplay=yes&ismobile=yes';
            }
            $('#vidiframe_id').attr('src', urlfull_altvid);

        }
        else {
            /* OLD PRE 2019 CODE
            var ret = playVideoInShowLyrics(youtube_id);
            //embedPlayerG.playVideo();

            // modify change video link
            var vid = $(this).attr('data-vid');
            var href = $("#changeVideo").attr('href');
            if (href) {
                var pos = href.indexOf("&vid=");
                newHref = href.substring(0, pos);
                $("#changeVideo").attr('href', newHref + "&vid=" + vid);
            }

            // if error occuers reload page with correct video
            if (ret) event.preventDefault();
            */

        }

    });                   
});

function playVideoInShowLyrics(youtube_id) {   
    
    //if (!embedPlayerG) return false;
    //embedPlayerG.loadVideoById(youtube_id);
    //embedPlayerG.pauseVideo();

    var video = $("#tiscali-video");
    var targetBox = document.getElementById('tiscali-video'); // musi byt nativni js objekt - ne jQuery
    try {
            videojs(targetBox.firstChild).dispose(); // placeholder by mel obsahovat jen jeden element - prehravac
    } catch(e) {
            targetBox.innerHTML = ""; // na error promaznu natvrdo
    }
    // prednost ma nase cdn
    $(targetBox).attr('data-video', $(this).attr('data-vid')||''); // preneseme oba atributy
    $(targetBox).attr('data-youtube', youtube_id); // preneseme oba atributy
    $(targetBox).attr('data-autoplay', 1);
    prepareVideo('#tiscali-video');
    

    /*video.attr('init',0);
    video.data('autostart',1);
    video.videoInfo = {
        encoder   :'youtube',
        youtubeSid: youtube_id,
        size      : [ {url:"http://www.youtube.com/watch?v="+youtube_id} ],
        id        : youtube_id,
    };
    tsVideo.videoPrepare(video);
    //console.log(youtube_id);

    if (youtube_id != youtubeIdG) {
        window.location.hash = youtube_id;
    } else {
        window.location.hash = null;
    }*/

    $('#videos_box div.video').css('border', '3px solid white');
    $('#videos_box div.video img').css('opacity', 1);

    var link = $('#videos_box a[data-youtube_id="' + youtube_id + '"]');
    link.parent().css('border', '3px solid #32bc04');
    link.find('img').css('opacity', 1);


    var vid =  link.attr('data-vid');    
    $.get('/song/updateVideoViews/vid/' + vid);
    vidG = vid;   
        
    $("#playlists li a.add_song_to_playlist").each(function() {
        $(this).attr('href', '/playlist/addVideo/id/' + vid + '/pid/' + $(this).attr('data-pid') + '/duplicateSongs/false');
    });
    $("#control_small a").attr('href', '/playlist/createPlaylist/id/' + vid);
    
    // modify notify error link
    var notif = $("#notify_error").attr('href');
    var url = null;
    if ((notif.indexOf("&") !=-1)) {
        url = notif.substring(0, notif.indexOf('&'));                
    } else {
        url = notif;
    }
    $("#notify_error").attr('href', url + '&vid=' + vid);

    // for update plays
    measuredG = false;
    measuredTimeG = 0;
    
    return true;
}      

/* Interests ---------------------------*/
$(document).ready(function() {
    $('#interests ul li').mouseover(function() {
        console.log('over');         
        $(this).find('span.edit').css('visibility', 'visible');
    });
    
    $('#interests ul li').mouseout(function() {
        $(this).find('span.edit').css('visibility', 'hidden');
    });
});


/* Help ---------------------------------*/
$(document).ready(function() {
    $('#help_wrapper a.help_link').click(function(event) {
        $('#help_wrapper div:visible').not($(this).parent().next('div')).slideUp();
        $(this).parent().next('div').slideToggle('slow');
        event.preventDefault();
    });

    $("#help_wrapper .link a").click(function (event) {
        if (history.pushState) {
            history.pushState(null, null, 'napoveda#' + $(this).parent().attr('id')); 
        } else {
            location.hash = $(this).parent().attr('id');
        }
        event.preventDefault();
    });
});



/*          2018 -- clean zend NONdependent
            messages.js is mostly zend dependent
*/

// NA LOCALE NEFUNGUJE DOCUMENT READY  - nezapomen na ostrem odkomentovat
//$(document).ready(function() {

    // text area AUTOGROW universal  --just add class name to element
    // must be only one text area on page with this class - or do in loop
    if ($(".tarea_js")[0]) {
        document.getElementsByClassName('tarea_js')[0].addEventListener('keyup', function () {
            this.style.height = 0;
            this.style.height = (this.scrollHeight+20)+"px";
        }, false);
    }


    // FOCUS comment textarea - in CommentCntroller.php


    // !!! DEL MESSAGES z messages.js NA LOCALE NEFUNGUJE OVÄÅ NA OSTRÃM (to zde zakomentuj)
    $(".del_message2").click(function(event) {

        $.get($(this).attr('href'));
        var parentx = $(this).parent().parent().parent().parent().parent();

        parentx.fadeOut(1000, function() {
            $(this).remove();
        });

        event.preventDefault();
    });
    // -------------


    // comment SIDEICONS
    //$('.comment_sideicons').click(function(){
    $(document).on('click', '.comment_sideicons', function(event)
    {

        var flag = $(this).data('flag');

        if (!flag) {
            $(this).find('.msg_sideicons_menu').show(0);
        } else {
            $(this).find('.msg_sideicons_menu').hide(0);
        }

        // zÅejmÄ pÅi kaÅ¾dÃ©m kliku otoÄÃ­ hodnotu flag
        $(this).data('flag', !flag);

	});


//});



//$(document).ready(function() {

										/* MODAL */

	function modal(text1)
	{
	    var square = document.createElement("div");
		square.className = "square";
		square.id = "sqid";
		square.innerHTML = '<div class="square_intop"></div><div class="square_inmid">'+text1+'</div>';
		document.body.appendChild(square);
	}
	function modclose()
	{
	    var sqid = document.getElementById("sqid");
		document.body.removeChild(sqid);
		sqid = null;
	}



										/* COMMENTS 2018 */


    // auto SHOW NEW (as active module) is printed by view

    // DEL comment
	//$('.del_message3').on('click', function(event)
    $(document).on('click', '.del_message3', function(event)
	{
		event.preventDefault();
        var url_topost = $('.comment_form').attr('thisurl');
		var comment_id = $(this).attr('thisid');
		var thisvar = $(this);  // must be like this

        $.post(url_topost, { isajax: '1', action: 'delcomment', comment_id: comment_id },
		function(data) {

            if (data[0] == 'ok') {
                thisvar.closest('div.msg_container').fadeOut(300, function() {
                    $(this).remove();
                });
            }
		}, 'json');

	});


    // BLOCK IN THREAD a DEL LAST 3 DAYS
    $(document).on('click', '.block_inthread_comment', function(event)
	{
		event.preventDefault();
        var url_topost = $('.comment_form').attr('thisurl');
		var comment_id = $(this).attr('thisid');

        $.post(url_topost, { isajax: '1', action: 'block_inthread_comment', comment_id: comment_id },
		function(data) {

		}, 'json');

	});


    // POST comment
	$('.comment_send_button').on('click', function(event)
	{
		event.preventDefault();
		var url_topost = $('.comment_form').attr('thisurl');
		var action_val = $('#comment_actionid').val();
		var lastid_val = $('#lastcomment_idid').val();
        var typ_val = $('#typ_id').val();
        var belongsto_id_val = $('#belongsto_idid').val();
		var tarea_val = $('#comment_tareaid').val();

		// kdyÅ¾ blbne ALERT odstraÅ   , 'json' -- jde o chybu ve vracenych datech
        $.post(url_topost, { isajax: '1', action: action_val, lastid: lastid_val, typ: typ_val, belongsto_id: belongsto_id_val, comment_tarea: tarea_val },
		function(data) {
        //alert(data);

			//  when error note - show it to user
            if (data[2] != '') {
                //alert(data[2]);
                modal(data[2]);
                setTimeout(function(){ modclose(); }, 5000);
            }
            if (data[2] == '') {
                $('.allcomments_container').prepend(data[1]);
                $('#comment_tareaid').val('');
                $('#lastcomment_idid').val(data[0]);
            }
		}, 'json');


	});


    // PAGINATION
	$('.comment_pagination').on('click', function(event)
	{
		event.preventDefault();
        var url_topost = $('.comment_form').attr('thisurl');
		var gotopage_val = $(this).attr('gotopage');
        var typ_val = $('#typ_id').val();
        var belongsto_id_val = $('#belongsto_idid').val();
        var thisvar = $(this);

        $.post(url_topost, { isajax: '1', action: 'pagination', pagenumber: gotopage_val, typ: typ_val, belongsto_id: belongsto_id_val },
		function(data) {

            $('.allcomments_container').html(data);
            // scroll
            $('#comment_tareaid').get(0).scrollIntoView();
            // change collor of clicked
            $('.comment_pagination').css({"backgroundColor": "white"});
            thisvar.css('background', 'yellow');

		});


	});

	// REPLY BUTTON
    //$('.comment_reply').live('click', function(event) {   // old way
    $(document).on('click', '.comment_reply', function(event) {

        event.preventDefault();
        var tarea_val = $('#comment_tareaid').val();
        var nick = $(this).attr('thisnick');
        $('#comment_tareaid').val(nick+': '+tarea_val).focus();

    });

//});

                                        /* DETECT INTERNET EXPLORER */

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        var retval = 1;
    }
    else {
        retval = '';
    }

    return retval;
}
var is_iebrowser = msieversion();

                                        /* ACCOUNT / LOGIN  MENU */


if (toploginbutt_clicked == null) {
    var toploginbutt_clicked = false;
}
if (srchbutt_clicked == null) {
    var srchbutt_clicked = false;
}
if (flag_topmenu == null) {
    var flag_topmenu;
}

$(document).ready(function() {
    if (is_iebrowser != 1) {


        function login_butt_actions(event, param1) {


            // CLOSE OTHER active MENUS
            // only if real user click - not if call came from other function
            // otherwise loop across functions and we would close menu we wanted to open
            if ((param1 !== 'origin_search_butt_actions') && (param1 !== 'origin_topmenu_butt_actions')) {

                // is searchmenu active?
                if (srchbutt_clicked === true) {
                    $('.topsearch_button').trigger('click', ['origin_toplogin_butt_actions']);
                }
                // is topmenu active?
                if (flag_topmenu === true) {
                    $('.topmenu_button').trigger('click', ['origin_toplogin_butt_actions']);
                }
            }

            if (event.target !== this){
                return;
            }


            if (toploginbutt_clicked !== true) {

                $('#loginformid_cont').css({
                    display: 'initial'
                });
                $('.logged_menu').css({
                    display: 'initial'
                });
                toploginbutt_clicked = true;
                return;
            }
            if (toploginbutt_clicked === true) {

                $('#loginformid_cont').css({
                    display: 'none'
                });
                $('.logged_menu').css({
                    display: 'none'
                });

                toploginbutt_clicked = false;
                return;
            }

        }
        $('.toplogin_button_cl2').on('click', {paramxxx: ''}, login_butt_actions);
        // not logged page
        // trigger class can be only one in html or all triggered at once canceling each out
        $('.toplogin_button_cl2b').on('click', {paramxxx: ''}, login_butt_actions);

    }
    // IE browsers - ver 9-11
    if (is_iebrowser == 1) {

        function ieclick_accountlogin() {
            document.getElementById("loginformid_cont").style.display = "initial";
        }
        // click action to init function
        document.getElementById("bar_ullispan_pseudolink_id").addEventListener("click", ieclick_accountlogin);
    }

});


                                        /* HISTORY - show */

$(document).on('click', '#showhistory_link', function(event)
{
    var flag = $(this).data('flag');

    if (!flag) {
        $('#history_cont_id').css({ display: 'initial' });
    }
    else {
        $('#history_cont_id').css({ display: 'none' });
    }

    $(this).data('flag', !flag);
    event.preventDefault();
});


                                        /* BACKUP lyrics LIST - show */

$(document).on('click', '.backup_texts_link', function(event)
{
    var flag = $(this).data('flag');

    if (!flag) {

        var url_topost = '/ajax/multipage/backups_internal.php';
        var id_song = $(this).attr('thisid');

        $.post(url_topost, { isajax: '1', act1: 'backup_list', type1: 'lyrics', id: id_song, lang: langG },
        function(data) {

            if (data[0] == 'ok') {

                $('.backup_list_cont').html(data[1]);
            }
        }, 'json');
    }
    else {
        $('.backup_list_cont').html('');
    }

    $(this).data('flag', !flag);
    event.preventDefault();
});


// BACKUP lyrics RESTORE
$(document).on('click', '.backup_restore_link', function(event)
{
    var this1 = $(this);
    var url_topost = '/ajax/multipage/backups_internal.php';
    var id_backup = $(this).attr('thisid');

    if (id_backup < 1) {
        return;
    }

    $.post(url_topost, { isajax: '1', act1: 'backup_restore', type1: 'lyrics', id: id_backup },
    function(data) {
        if (data[0] == 'ok') {

            // set id of current link to 0 to prevent repeated restore
            this1.attr('thisid', '0');
            this1.css('color', 'black');
            // reload
            location.reload();
        }
    }, 'json');

    event.preventDefault();
});




                                        /* tooltip_big020 */

$(document).on('click', '#tooltip_big020close', function(event)
{

    $('.tooltip_big020overlay').hide();
    $('.tooltip_big020').hide();

    event.preventDefault();
});




                                        /* RESPONSIVE */

// most functions in default_resp.js but some must be here
// RESP CANCEL OFF
$('.resp_canceloff').click(function(){
    event.preventDefault();

    var date = new Date();
    date.setTime(date.getTime() + (6 * 1000));
    var expires = date.toUTCString();
    document.cookie = "responsive_useroption=on; expires="+ expires +"; path=/";
    location.reload();
});


                                        /* mobile SWIPE */

// SWIPE  - on next, prev img
var xDown = null;
var yDown = null;

// get data about touch event (ie coordinates)
function getTouches(event) {
  return event.touches ||             // browser API
         event.originalEvent.touches; // jQuery
}

function handleTouchStart(event, typ) {
    const firstTouch = getTouches(event)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}


function handleTouchMove(event, typ) {

	if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    /* most significant */
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {

        /* left swipe */
        if ( xDiff > 0 ) {
            if (typ == 'artist_photo') {
                document.getElementById("arrow_butt_next").click();
            }
            if (typ == 'playlist') {
                document.getElementById("arrow_butt_next").click();

            }
        }
        /* right swipe */
        else {
            if (typ == 'artist_photo') {
			    document.getElementById("arrow_butt_prev").click();
            }
            if (typ == 'playlist') {
			    document.getElementById("arrow_butt_prev").click();
            }
        }
    }
    else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
