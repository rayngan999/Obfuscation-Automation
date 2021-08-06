
(function($){$.tools=$.tools||{version:'@VERSION'};$.tools.tooltip={conf:{effect:'toggle',fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:['top','center'],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:'<div/>',tipClass:'tooltip'},addEffect:function(name,loadFn,hideFn){effects[name]=[loadFn,hideFn];}};var effects={toggle:[function(done){var conf=this.getConf(),tip=this.getTip(),o=conf.opacity;if(o<1){tip.css({opacity:o});}
tip.show();done.call();},function(done){this.getTip().hide();done.call();}],fade:[function(done){var conf=this.getConf();this.getTip().fadeTo(conf.fadeInSpeed,conf.opacity,done);},function(done){this.getTip().fadeOut(this.getConf().fadeOutSpeed,done);}]};function getPosition(trigger,tip,conf){var top=conf.relative?trigger.position().top:trigger.offset().top,left=conf.relative?trigger.position().left:trigger.offset().left,pos=conf.position[0];top-=tip.outerHeight()-conf.offset[0];left+=(trigger.outerWidth()/2)+conf.offset[1];if(/iPad/i.test(navigator.userAgent)){top-=$(window).scrollTop();}
var height=tip.outerHeight()+trigger.outerHeight();if(pos=='center'){top+=height/2;}
if(pos=='bottom'){top+=height;}
pos=conf.position[1];var width=tip.outerWidth();if(pos=='center'){left-=width/2;}
if(pos=='left'){left-=width;}
return{top:top,left:left};}
function Tooltip(trigger,conf){var self=this,fire=trigger.add(self),tip,timer=0,pretimer=0,title=trigger.attr("title"),tipAttr=trigger.attr("data-tooltip"),effect=effects[conf.effect],shown,isInput=trigger.is(":input"),isWidget=isInput&&trigger.is(":checkbox, :radio, select, :button, :submit"),type=trigger.attr("type"),evt=conf.events[type]||conf.events[isInput?(isWidget?'widget':'input'):'def'];if(!effect){throw"Nonexistent effect \""+conf.effect+"\"";}
evt=evt.split(/,\s*/);if(evt.length!=2){throw"Tooltip: bad events configuration for "+type;}
trigger.bind(evt[0],function(e){clearTimeout(timer);if(conf.predelay){pretimer=setTimeout(function(){self.show(e);},conf.predelay);}else{self.show(e);}}).bind(evt[1],function(e){clearTimeout(pretimer);if(conf.delay){timer=setTimeout(function(){self.hide(e);},conf.delay);}else{self.hide(e);}});if(title&&conf.cancelDefault){trigger.removeAttr("title");trigger.data("title",title);}
$.extend(self,{show:function(e){if(!tip){if(tipAttr){tip=$(tipAttr);}else if(conf.tip){tip=$(conf.tip).eq(0);}else if(title){tip=$(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide().append(title);}else{tip=trigger.next();if(!tip.length){tip=trigger.parent().next();}}
if(!tip.length){throw"Cannot find tooltip for "+trigger;}}
if(self.isShown()){return self;}
tip.stop(true,true);var pos=getPosition(trigger,tip,conf);if(conf.tip){tip.html(trigger.data("title"));}
e=e||$.Event();e.type="onBeforeShow";fire.trigger(e,[pos]);if(e.isDefaultPrevented()){return self;}
pos=getPosition(trigger,tip,conf);tip.css({position:'absolute',top:pos.top,left:pos.left});shown=true;effect[0].call(self,function(){e.type="onShow";shown='full';fire.trigger(e);});var event=conf.events.tooltip.split(/,\s*/);if(!tip.data("__set")){tip.bind(event[0],function(){clearTimeout(timer);clearTimeout(pretimer);});if(event[1]&&!trigger.is("input:not(:checkbox, :radio), textarea")){tip.bind(event[1],function(e){if(e.relatedTarget!=trigger[0]){trigger.trigger(evt[1].split(" ")[0]);}});}
tip.data("__set",true);}
return self;},hide:function(e){if(!tip||!self.isShown()){return self;}
e=e||$.Event();e.type="onBeforeHide";fire.trigger(e);if(e.isDefaultPrevented()){return;}
shown=false;effects[conf.effect][1].call(self,function(){e.type="onHide";fire.trigger(e);});return self;},isShown:function(fully){return fully?shown=='full':shown;},getConf:function(){return conf;},getTip:function(){return tip;},getTrigger:function(){return trigger;}});$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(i,name){if($.isFunction(conf[name])){$(self).bind(name,conf[name]);}
self[name]=function(fn){if(fn){$(self).bind(name,fn);}
return self;};});}
$.fn.tooltip=function(conf){var api=this.data("tooltip");if(api){return api;}
conf=$.extend(true,{},$.tools.tooltip.conf,conf);if(typeof conf.position=='string'){conf.position=conf.position.split(/,?\s/);}
this.each(function(){api=new Tooltip($(this),conf);$(this).data("tooltip",api);});return conf.api?api:this;};})(jQuery);