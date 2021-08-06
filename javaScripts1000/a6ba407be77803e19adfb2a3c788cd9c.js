// file /_cms/design13/js/simplemodal.js - 2013-06-11T08:28:10.4140000Z cachekey-?path=%2f_cms%2fdesign13%2fjs%2fsimplemodal.js 

(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(a){var c=[],e=a(document),f=navigator.userAgent.toLowerCase(),h=a(window),g=[];var b={ieQuirks:null,msie:/msie/.test(f)&&!/opera/.test(f),opera:/opera/.test(f)};b.ie6=b.msie&&/msie 6./.test(f)&&typeof window.XMLHttpRequest!=="object";b.ie7=b.msie&&/msie 7.0/.test(f);a.modal=function(d,i){return a.modal.impl.init(d,i)};a.modal.close=function(){a.modal.impl.close()};a.modal.focus=function(d){a.modal.impl.focus(d)};a.modal.setContainerDimensions=function(){a.modal.impl.setContainerDimensions()};a.modal.setPosition=function(){a.modal.impl.setPosition()};a.modal.update=function(d,i){a.modal.impl.update(d,i)};a.fn.modal=function(d){return a.modal.impl.init(this,d)};a.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,fixed:true,position:null,persist:false,modal:true,onOpen:null,onShow:null,onClose:null};a.modal.impl={d:{},init:function(d,i){var j=this;if(j.d.data){return false}b.ieQuirks=b.msie&&!a.support.boxModel;j.o=a.extend({},a.modal.defaults,i);j.zIndex=j.o.zIndex;j.occb=false;if(typeof d==="object"){d=d instanceof a?d:a(d);j.d.placeholder=false;if(d.parent().parent().size()>0){d.before(a("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));j.d.placeholder=true;j.display=d.css("display");if(!j.o.persist){j.d.orig=d.clone(true)}}}else{if(typeof d==="string"||typeof d==="number"){d=a("<div></div>").html(d)}else{alert("SimpleModal Error: Unsupported data type: "+typeof d);return j}}j.create(d);d=null;j.open();if(a.isFunction(j.o.onShow)){j.o.onShow.apply(j,[j.d])}return j},create:function(d){var i=this;i.getDimensions();if(i.o.modal&&b.ie6){i.d.iframe=a('<iframe src="javascript:false;"></iframe>').css(a.extend(i.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:g[0],width:g[1],zIndex:i.o.zIndex,top:0,left:0})).appendTo(i.o.appendTo)}i.d.overlay=a("<div></div>").attr("id",i.o.overlayId).addClass("simplemodal-overlay").css(a.extend(i.o.overlayCss,{display:"none",opacity:i.o.opacity/100,height:i.o.modal?c[0]:0,width:i.o.modal?c[1]:0,position:"fixed",left:0,top:0,zIndex:i.o.zIndex+1})).appendTo(i.o.appendTo);i.d.container=a("<div></div>").attr("id",i.o.containerId).addClass("simplemodal-container").css(a.extend({position:i.o.fixed?"fixed":"absolute"},i.o.containerCss,{display:"none",zIndex:i.o.zIndex+2})).append(i.o.close&&i.o.closeHTML?a(i.o.closeHTML).addClass(i.o.closeClass):"").appendTo(i.o.appendTo);i.d.wrap=a("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(i.d.container);i.d.data=d.attr("id",d.attr("id")||i.o.dataId).addClass("simplemodal-data").css(a.extend(i.o.dataCss,{display:"none"})).appendTo("body");d=null;i.setContainerDimensions();i.d.data.appendTo(i.d.wrap);if(b.ie6||b.ieQuirks){i.fixIE()}},bindEvents:function(){var d=this;a("."+d.o.closeClass).bind("click.simplemodal",function(i){i.preventDefault();d.close()});if(d.o.modal&&d.o.close&&d.o.overlayClose){d.d.overlay.bind("click.simplemodal",function(i){i.preventDefault();d.close()})}e.bind("keydown.simplemodal",function(i){if(d.o.modal&&i.keyCode===9){d.watchTab(i)}else{if((d.o.close&&d.o.escClose)&&i.keyCode===27){i.preventDefault();d.close()}}});h.bind("resize.simplemodal orientationchange.simplemodal",function(){d.getDimensions();d.o.autoResize?d.setContainerDimensions():d.o.autoPosition&&d.setPosition();if(b.ie6||b.ieQuirks){d.fixIE()}else{if(d.o.modal){d.d.iframe&&d.d.iframe.css({height:g[0],width:g[1]});d.d.overlay.css({height:c[0],width:c[1]})}}})},unbindEvents:function(){a("."+this.o.closeClass).unbind("click.simplemodal");e.unbind("keydown.simplemodal");h.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var i=this,d=i.o.position;a.each([i.d.iframe||null,!i.o.modal?null:i.d.overlay,i.d.container.css("position")==="fixed"?i.d.container:null],function(t,r){if(r){var j="document.body.clientHeight",k="document.body.clientWidth",l="document.body.scrollHeight",m="document.body.scrollLeft",n="document.body.scrollTop",o="document.body.scrollWidth",p="document.documentElement.clientHeight",q="document.documentElement.clientWidth",x="document.documentElement.scrollLeft",y="document.documentElement.scrollTop",w=r[0].style;w.position="absolute";if(t<2){w.removeExpression("height");w.removeExpression("width");w.setExpression("height",""+l+" > "+j+" ? "+l+" : "+j+' + "px"');w.setExpression("width",""+o+" > "+k+" ? "+o+" : "+k+' + "px"')}else{var z,u;if(d&&d.constructor===Array){var A=d[0]?typeof d[0]==="number"?d[0].toString():d[0].replace(/px/,""):r.css("top").replace(/px/,"");z=A.indexOf("%")===-1?A+" + (t = "+y+" ? "+y+" : "+n+') + "px"':parseInt(A.replace(/%/,""))+" * (("+p+" || "+j+") / 100) + (t = "+y+" ? "+y+" : "+n+') + "px"';if(d[1]){var v=typeof d[1]==="number"?d[1].toString():d[1].replace(/px/,"");u=v.indexOf("%")===-1?v+" + (t = "+x+" ? "+x+" : "+m+') + "px"':parseInt(v.replace(/%/,""))+" * (("+q+" || "+k+") / 100) + (t = "+x+" ? "+x+" : "+m+') + "px"'}}else{z="("+p+" || "+j+") / 2 - (this.offsetHeight / 2) + (t = "+y+" ? "+y+" : "+n+') + "px"';u="("+q+" || "+k+") / 2 - (this.offsetWidth / 2) + (t = "+x+" ? "+x+" : "+m+') + "px"'}w.removeExpression("top");w.removeExpression("left");w.setExpression("top",z);w.setExpression("left",u)}}})},focus:function(j){var k=this,i=j&&a.inArray(j,["first","last"])!==-1?j:"first";var d=a(":input:enabled:visible:"+i,k.d.wrap);setTimeout(function(){d.length>0?d.focus():k.d.wrap.focus()},10)},getDimensions:function(){var i=this,d=typeof window.innerHeight==="undefined"?h.height():window.innerHeight;c=[e.height(),e.width()];g=[d,h.width()]},getVal:function(j,i){return j?(typeof j==="number"?j:j==="auto"?0:j.indexOf("%")>0?((parseInt(j.replace(/%/,""))/100)*(i==="h"?g[0]:g[1])):parseInt(j.replace(/px/,""))):null},update:function(d,j){var i=this;if(!i.d.data){return false}i.d.origHeight=i.getVal(d,"h");i.d.origWidth=i.getVal(j,"w");i.d.data.hide();d&&i.d.container.css("height",d);j&&i.d.container.css("width",j);i.setContainerDimensions();i.d.data.show();i.o.focus&&i.focus();i.unbindEvents();i.bindEvents()},setContainerDimensions:function(){var t=this,d=b.ie6||b.ie7;var i=t.d.origHeight?t.d.origHeight:b.opera?t.d.container.height():t.getVal(d?t.d.container[0].currentStyle.height:t.d.container.css("height"),"h"),j=t.d.origWidth?t.d.origWidth:b.opera?t.d.container.width():t.getVal(d?t.d.container[0].currentStyle.width:t.d.container.css("width"),"w"),k=t.d.data.outerHeight(true),l=t.d.data.outerWidth(true);t.d.origHeight=t.d.origHeight||i;t.d.origWidth=t.d.origWidth||j;var q=t.o.maxHeight?t.getVal(t.o.maxHeight,"h"):null,r=t.o.maxWidth?t.getVal(t.o.maxWidth,"w"):null,m=q&&q<g[0]?q:g[0],p=r&&r<g[1]?r:g[1];var n=t.o.minHeight?t.getVal(t.o.minHeight,"h"):"auto";if(!i){if(!k){i=n}else{if(k>m){i=m}else{if(t.o.minHeight&&n!=="auto"&&k<n){i=n}else{i=k}}}}else{i=t.o.autoResize&&i>m?m:i<n?n:i}var o=t.o.minWidth?t.getVal(t.o.minWidth,"w"):"auto";if(!j){if(!l){j=o}else{if(l>p){j=p}else{if(t.o.minWidth&&o!=="auto"&&l<o){j=o}else{j=l}}}}else{j=t.o.autoResize&&j>p?p:j<o?o:j}t.d.container.css({height:i,width:j});t.d.wrap.css({overflow:(k>i||l>j)?"auto":"visible"});t.o.autoPosition&&t.setPosition()},setPosition:function(){var j=this,l,i,d=(g[0]/2)-(j.d.container.outerHeight(true)/2),m=(g[1]/2)-(j.d.container.outerWidth(true)/2),k=j.d.container.css("position")!=="fixed"?h.scrollTop():0;if(j.o.position&&Object.prototype.toString.call(j.o.position)==="[object Array]"){l=k+(j.o.position[0]||d);i=j.o.position[1]||m}else{l=k+d;i=m}j.d.container.css({left:i,top:l})},watchTab:function(d){var j=this;if(a(d.target).parents(".simplemodal-container").length>0){j.inputs=a(":input:enabled:visible:first, :input:enabled:visible:last",j.d.data[0]);if((!d.shiftKey&&d.target===j.inputs[j.inputs.length-1])||(d.shiftKey&&d.target===j.inputs[0])||j.inputs.length===0){d.preventDefault();var i=d.shiftKey?"last":"first";j.focus(i)}}else{d.preventDefault();j.focus()}},open:function(){var d=this;d.d.iframe&&d.d.iframe.show();if(a.isFunction(d.o.onOpen)){d.o.onOpen.apply(d,[d.d])}else{d.d.overlay.show();d.d.container.show();d.d.data.show()}d.o.focus&&d.focus();d.bindEvents()},close:function(){var i=this;if(!i.d.data){return false}i.unbindEvents();if(a.isFunction(i.o.onClose)&&!i.occb){i.occb=true;i.o.onClose.apply(i,[i.d])}else{if(i.d.placeholder){var d=a("#simplemodal-placeholder");if(i.o.persist){d.replaceWith(i.d.data.removeClass("simplemodal-data").css("display",i.display))}else{i.d.data.hide().remove();d.replaceWith(i.d.orig)}}else{i.d.data.hide().remove()}i.d.container.hide().remove();i.d.overlay.hide();i.d.iframe&&i.d.iframe.hide().remove();i.d.overlay.remove();i.d={}}}}}));
