/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports==="object"){module.exports=factory}else{factory(jQuery)}})(function($){var toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind=("onwheel" in window.document||window.document.documentMode>=9)?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks}}
var special=$.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,!1)}}else{this.onmousewheel=handler}
$.data(this,"mousewheel-line-height",special.getLineHeight(this));$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,!1)}}else{this.onmousewheel=null}
$.removeData(this,"mousewheel-line-height");$.removeData(this,"mousewheel-page-height")},getLineHeight:function(elem){var $elem=$(elem),$parent=$elem["offsetParent" in $.fn?"offsetParent":"parent"]();if(!$parent.length){$parent=$("body")}
return parseInt($parent.css("fontSize"),10)||parseInt($elem.css("fontSize"),10)||16},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};$.fn.extend({mousewheel:function(fn){return fn?this.on("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.off("mousewheel",fn)}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type="mousewheel";if("detail" in orgEvent){deltaY=orgEvent.detail*-1}
if("wheelDelta" in orgEvent){deltaY=orgEvent.wheelDelta}
if("wheelDeltaY" in orgEvent){deltaY=orgEvent.wheelDeltaY}
if("wheelDeltaX" in orgEvent){deltaX=orgEvent.wheelDeltaX*-1}
if("axis" in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0}
delta=deltaY===0?deltaX:deltaY;if("deltaY" in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY}
if("deltaX" in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1}}
if(deltaY===0&&deltaX===0){return}
if(orgEvent.deltaMode===1){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight}else if(orgEvent.deltaMode===2){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight}
absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40}}
if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40}
delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta);deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta);deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta);if(special.settings.normalizeOffset&&this.getBoundingClientRect){var boundingRect=this.getBoundingClientRect();event.offsetX=event.clientX-boundingRect.left;event.offsetY=event.clientY-boundingRect.top}
event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){window.clearTimeout(nullLowestDeltaTimeout)}
nullLowestDeltaTimeout=window.setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args)}
function nullLowestDelta(){lowestDelta=null}
function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==="mousewheel"&&absDelta%120===0}});/*!
 * jCarouselLite - v1.1 - 2014-09-28
 * http://www.gmarwaha.com/jquery/jcarousellite/
 * Copyright (c) 2014 Ganeshji Marwaha
 * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
 */
(function($){$.jCarouselLite={version:'1.1'};$.fn.jCarouselLite=function(options){options=$.extend({},$.fn.jCarouselLite.options,options||{});return this.each(function(){var running,animCss,sizeCss,div=$(this),ul,initialLi,li,liSize,ulSize,divSize,numVisible,initialItemLength,itemLength,calculatedTo,autoTimeout;initVariables();initStyles();initSizes();attachEventHandlers();function go(to){if(!running){clearTimeout(autoTimeout);calculatedTo=to;if(options.beforeStart){options.beforeStart.call(this,visibleItems())}
if(options.circular){adjustOobForCircular(to)}else{adjustOobForNonCircular(to)}
animateToPosition({start:function(){running=!0},done:function(){if(options.afterEnd){options.afterEnd.call(this,visibleItems())}
if(options.auto){setupAutoScroll()}
running=!1}});if(!options.circular){disableOrEnableButtons()}}
return!1}
function initVariables(){running=!1;animCss=options.vertical?"top":"left";sizeCss=options.vertical?"height":"width";ul=div.find(">ul");initialLi=ul.find(">li");initialItemLength=initialLi.length;numVisible=initialItemLength<options.visible?initialItemLength:options.visible;if(options.circular){var $lastItemSet=initialLi.slice(initialItemLength-numVisible).clone();var $firstItemSet=initialLi.slice(0,numVisible).clone();ul.prepend($lastItemSet).append($firstItemSet);options.start+=numVisible}
li=$("li",ul);itemLength=li.length;calculatedTo=options.start}
function initStyles(){div.css("visibility","visible");li.css({overflow:"hidden","float":options.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style":"none","z-index":"1"});div.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});if(!options.circular&&options.btnPrev&&options.start==0){$(options.btnPrev).addClass("disabled")}}
function initSizes(){liSize=options.vertical?li.outerHeight(!0):li.outerWidth(!0);ulSize=liSize*itemLength;divSize=liSize*numVisible;li.css({width:li.width(),height:li.height()});ul.css(sizeCss,ulSize+"px").css(animCss,-(calculatedTo*liSize));div.css(sizeCss,divSize+"px")}
function attachEventHandlers(){if(options.btnPrev){$(options.btnPrev).click(function(){return go(calculatedTo-options.scroll)})}
if(options.btnNext){$(options.btnNext).click(function(){return go(calculatedTo+options.scroll)})}
if(options.btnGo){$.each(options.btnGo,function(i,val){$(val).click(function(){return go(options.circular?numVisible+i:i)})})}
if(options.mouseWheel&&div.mousewheel){div.mousewheel(function(e,d){return d>0?go(calculatedTo-options.scroll):go(calculatedTo+options.scroll)})}
if(options.auto){setupAutoScroll()}}
function setupAutoScroll(){autoTimeout=setTimeout(function(){go(calculatedTo+options.scroll)},options.auto)}
function visibleItems(){return li.slice(calculatedTo).slice(0,numVisible)}
function adjustOobForCircular(to){var newPosition;if(to<=options.start-numVisible-1){newPosition=to+initialItemLength+options.scroll;ul.css(animCss,-(newPosition*liSize)+"px");calculatedTo=newPosition-options.scroll;console.log("Before - Positioned at: "+newPosition+" and Moving to: "+calculatedTo)}else if(to>=itemLength-numVisible+1){newPosition=to-initialItemLength-options.scroll;ul.css(animCss,-(newPosition*liSize)+"px");calculatedTo=newPosition+options.scroll;console.log("After - Positioned at: "+newPosition+" and Moving to: "+calculatedTo)}}
function adjustOobForNonCircular(to){if(to<0){calculatedTo=0}else if(to>itemLength-numVisible){calculatedTo=itemLength-numVisible}
console.log("Item Length: "+itemLength+"; "+"To: "+to+"; "+"CalculatedTo: "+calculatedTo+"; "+"Num Visible: "+numVisible)}
function disableOrEnableButtons(){$(options.btnPrev+","+options.btnNext).removeClass("disabled");$((calculatedTo-options.scroll<0&&options.btnPrev)||(calculatedTo+options.scroll>itemLength-numVisible&&options.btnNext)||[]).addClass("disabled")}
function animateToPosition(animationOptions){running=!0;ul.animate(animCss=="left"?{left:-(calculatedTo*liSize)}:{top:-(calculatedTo*liSize)},$.extend({duration:options.speed,easing:options.easing},animationOptions))}})};$.fn.jCarouselLite.options={btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null}})(jQuery);var numOfImgs=0;$(window).load(function(){if(!isMobile)fixsizeleftandright();numOfImgs=$("#splashImg").data("imgs");preload(numOfImgs);setInterval(function(){ran=Math.floor(Math.random()*numOfImgs)+1;$("#splashImg").attr('src','/images/splash/ce_splash_'+ran+'.jpg')},30000)});$(function(){if(!isMobile){$(".carouselNews").jCarouselLite({auto:10000,speed:1500,mouseWheel:!0,vertical:!0,btnNext:".next",btnPrev:".prev"});$(window).resize(function(){$("#rightExplTop").height($("#leftContTop").height());fixsizeleftandright()})}});function gotoNews(jqitem){id=$(jqitem).data('newsid');window.location.href="/news.php?newsid="+id}
function fixsizeleftandright(){docHeight=$(document).height();winHeight=$(window).height();if(winHeight<docHeight){bottomRowHeight=winHeight-$("#firstRow").height()-$("#header").height()-80;$("#containerExplaining").height(bottomRowHeight)}else{if(winHeight=docHeight){$("#containerExplaining").css('height','auto');bottomRowHeight=$("#containerExplaining").height()}}
$("#containerNews").height(bottomRowHeight);$(".carouselNews").height(bottomRowHeight-$(".title2").height()-10)}
function preload(){var images=new Array();for(i=2;i<numOfImgs;i++){images[i]=new Image();images[i].src='/images/splash/ce_splash_'+i+'.jpg'}}