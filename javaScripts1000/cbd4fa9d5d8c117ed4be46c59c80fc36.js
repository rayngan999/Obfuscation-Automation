(function($){$.isScrollToFixed=function(el){return!!$(el).data('ScrollToFixed');};$.ScrollToFixed=function(el,options){var base=this;base.$el=$(el);base.el=el;base.$el.data('ScrollToFixed',base);var isReset=false;var target=base.$el;var position;var originalPosition;var originalOffset;var offsetTop=0;var offsetLeft=0;var originalOffsetLeft=-1;var lastOffsetLeft=-1;var spacer=null;var spacerClass;var className;function resetScroll(){target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');lastOffsetLeft=-1;offsetTop=target.offset().top;offsetLeft=target.offset().left;if(base.options.offsets){offsetLeft+=(target.offset().left-target.position().left);}
if(originalOffsetLeft==-1){originalOffsetLeft=offsetLeft;}
position=target.css('position');isReset=true;if(base.options.bottom!=-1){target.trigger('preFixed.ScrollToFixed');setFixed();target.trigger('fixed.ScrollToFixed');}}
function getLimit(){var limit=base.options.limit;if(!limit)return 0;if(typeof(limit)==='function'){return limit.apply(target);}
return limit;}
function isFixed(){return position==='fixed';}
function isAbsolute(){return position==='absolute';}
function isUnfixed(){return!(isFixed()||isAbsolute());}
function setFixed(){if(!isFixed()){spacer.css({'display':target.css('display'),'width':target.outerWidth(true),'height':target.outerHeight(true),'float':target.css('float')});cssOptions={'position':'fixed','top':base.options.bottom==-1?getMarginTop():'','bottom':base.options.bottom==-1?'':base.options.bottom,'margin-left':'0px'}
if(!base.options.dontSetWidth){cssOptions['width']=target.width();};target.css(cssOptions);target.addClass('scroll-to-fixed-fixed');if(base.options.className){target.addClass(base.options.className);}
position='fixed';}}
function setAbsolute(){var top=getLimit();var left=offsetLeft;if(base.options.removeOffsets){left=0;top=top-offsetTop;}
cssOptions={'position':'absolute','top':top,'left':left,'margin-left':'0px','bottom':''}
if(!base.options.dontSetWidth){cssOptions['width']=target.width();};target.css(cssOptions);position='absolute';}
function setUnfixed(){if(!isUnfixed()){lastOffsetLeft=-1;spacer.css('display','none');target.css({'width':'','position':originalPosition,'left':'','top':originalOffset.top,'margin-left':''});target.removeClass('scroll-to-fixed-fixed');if(base.options.className){target.removeClass(base.options.className);}
position=null;}}
function setLeft(x){if(x!=lastOffsetLeft){target.css('left',offsetLeft-x);lastOffsetLeft=x;}}
function getMarginTop(){var marginTop=base.options.marginTop;if(!marginTop)return 0;if(typeof(marginTop)==='function'){return marginTop.apply(target);}
return marginTop;}
function checkScroll(){if(!$.isScrollToFixed(target))return;var wasReset=isReset;if(!isReset){resetScroll();}
var x=$(window).scrollLeft();var y=$(window).scrollTop();var limit=getLimit();if(base.options.minWidth&&$(window).width()<base.options.minWidth){if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');}}else if(base.options.bottom==-1){if(limit>0&&y>=limit-getMarginTop()){if(!isAbsolute()||!wasReset){postPosition();target.trigger('preAbsolute.ScrollToFixed');setAbsolute();target.trigger('unfixed.ScrollToFixed');$('.share_post_wrp').hide('slow')
$('.share_post_wrp').css('padding','0');}}else if(y>=offsetTop-getMarginTop()){if(!isFixed()||!wasReset){postPosition();target.trigger('preFixed.ScrollToFixed');setFixed();lastOffsetLeft=-1;target.trigger('fixed.ScrollToFixed');$('.share_post_wrp').show('slow');$('.share_post_wrp').css('padding','0 10px');}
setLeft(x);}else{if(!isUnfixed()||!wasReset){postPosition();target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');}}}else{if(limit>0){if(y+$(window).height()-target.outerHeight(true)>=limit-(getMarginTop()||-getBottom())){if(isFixed()){postPosition();target.trigger('preUnfixed.ScrollToFixed');if(originalPosition==='absolute'){setAbsolute();}else{setUnfixed();}
target.trigger('unfixed.ScrollToFixed');}}else{if(!isFixed()){postPosition();target.trigger('preFixed.ScrollToFixed');setFixed();}
setLeft(x);target.trigger('fixed.ScrollToFixed');}}else{setLeft(x);}}}
function getBottom(){if(!base.options.bottom)return 0;return base.options.bottom;}
function postPosition(){var position=target.css('position');if(position=='absolute'){target.trigger('postAbsolute.ScrollToFixed');}else if(position=='fixed'){target.trigger('postFixed.ScrollToFixed');}else{target.trigger('postUnfixed.ScrollToFixed');}}
var windowResize=function(event){if(target.is(':visible')){isReset=false;checkScroll();}}
var windowScroll=function(event){checkScroll();}
var isPositionFixedSupported=function(){var container=document.body;if(document.createElement&&container&&container.appendChild&&container.removeChild){var el=document.createElement('div');if(!el.getBoundingClientRect)return null;el.innerHTML='x';el.style.cssText='position:fixed;top:100px;';container.appendChild(el);var originalHeight=container.style.height,originalScrollTop=container.scrollTop;container.style.height='3000px';container.scrollTop=500;var elementTop=el.getBoundingClientRect().top;container.style.height=originalHeight;var isSupported=(elementTop===100);container.removeChild(el);container.scrollTop=originalScrollTop;return isSupported;}
return null;}
var preventDefault=function(e){e=e||window.event;if(e.preventDefault){e.preventDefault();}
e.returnValue=false;}
base.init=function(){base.options=$.extend({},$.ScrollToFixed.defaultOptions,options);base.$el.css('z-index',base.options.zIndex);spacer=$('<div />');position=target.css('position');originalPosition=target.css('position');originalOffset=$.extend({},target.offset());if(isUnfixed())base.$el.after(spacer);$(window).bind('resize.ScrollToFixed',windowResize);$(window).bind('scroll.ScrollToFixed',windowScroll);if(base.options.preFixed){target.bind('preFixed.ScrollToFixed',base.options.preFixed);}
if(base.options.postFixed){target.bind('postFixed.ScrollToFixed',base.options.postFixed);}
if(base.options.preUnfixed){target.bind('preUnfixed.ScrollToFixed',base.options.preUnfixed);}
if(base.options.postUnfixed){target.bind('postUnfixed.ScrollToFixed',base.options.postUnfixed);}
if(base.options.preAbsolute){target.bind('preAbsolute.ScrollToFixed',base.options.preAbsolute);}
if(base.options.postAbsolute){target.bind('postAbsolute.ScrollToFixed',base.options.postAbsolute);}
if(base.options.fixed){target.bind('fixed.ScrollToFixed',base.options.fixed);}
if(base.options.unfixed){target.bind('unfixed.ScrollToFixed',base.options.unfixed);}
if(base.options.spacerClass){spacer.addClass(base.options.spacerClass);}
target.bind('resize.ScrollToFixed',function(){spacer.height(target.height());});target.bind('scroll.ScrollToFixed',function(){target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');checkScroll();});target.bind('detach.ScrollToFixed',function(ev){preventDefault(ev);target.trigger('preUnfixed.ScrollToFixed');setUnfixed();target.trigger('unfixed.ScrollToFixed');$(window).unbind('resize.ScrollToFixed',windowResize);$(window).unbind('scroll.ScrollToFixed',windowScroll);target.unbind('.ScrollToFixed');base.$el.removeData('ScrollToFixed');});windowResize();};base.init();};$.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};$.fn.scrollToFixed=function(options){return this.each(function(){(new $.ScrollToFixed(this,options));});};})(jQuery);