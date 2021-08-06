/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});;
/**
 * @file
 * Responsive images implementation for Openbak Theme
 *
 */
var ResponsiveImages = {};

(function ($, Drupal) {
  'use strict';

  ResponsiveImages = {

    breakpoints: ['xs', 'sm', 'md', 'lg'],

    getBreakpoint: function () {
      var breakpoint = window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
      if (breakpoint !== 'none') {
        return breakpoint;
      }
      // Add bootstrap hidden classes for every breakpoint until is hidden.
      var divElement = jQuery('<div>').appendTo(jQuery('body'));
      for (var i = this.breakpoints.length - 1; i >= 0; i--) {
        divElement.addClass('hidden-' + this.breakpoints[i]);
        if (divElement.is(':hidden')) {
          divElement.remove();
          return this.breakpoints[i];
        }
      }
    },

    loadImageHeight: function (target, image) {
      return function () {
        target.css('min-height', image.height + 'px');
      };
    },

    interchange: function (breakpoint) {
      var elements = jQuery('[data-interchange]');
      var regex = /\[([^,]*),\s\(([^\)]*)/g;
      var hasAnyImgSrcChanged = false;

      for (var i = 0; i < elements.length; i++) {
        var breakpointsList = {};
        var currentBreakpointIndex = this.breakpoints.indexOf(breakpoint);
        var $element = $(elements[i]);
        var image = '';
        var imagesData = $element.data('interchange');
        var imagesList;

        // create a list of breakpoints and images based on element data attribute
        while ((imagesList = regex.exec(imagesData)) !== null) {
          breakpointsList[imagesList[2]] = imagesList[1];
        }

        if (breakpointsList[breakpoint]) {
          // if an image is defined for the BP, use it
          image = breakpointsList[breakpoint];
        }
        else {
          // if no image is defined for the BP, use the one for the previous BP
          for (var j = currentBreakpointIndex; j > -1; --j) {
            if (breakpointsList[this.breakpoints[j]]) {
              image = breakpointsList[this.breakpoints[j]];
              break;
            }
          }
        }

        // replace SRC or background in the element
        if ($element.prop('tagName') === 'IMG' && $element.attr('src') !== image) {
          $element.attr('src', image);
          hasAnyImgSrcChanged = true;
        }
        else if ($element.css('background-image') !== 'url("' + image + '")') {
          $element.css('background-image', 'url(' + image + ')');
          // add height to to block if it is a why-not block
          if ($element.hasClass('whynot__block') || $element.hasClass('whynot__block__half')) {
            var img = new Image();
            img.src = image;
            $(img).on('load', this.loadImageHeight($element, img));
          }
        }
      }
      // objectFitImages must be executed again after changing the src on <img> tags
      if (hasAnyImgSrcChanged) {
        objectFitImages();
      }
    }
  };

  Drupal.behaviors.responsiveImage = {
    attach: function (context, settings) {

      $(window).on('resize', function () {
        ResponsiveImages.interchange(ResponsiveImages.getBreakpoint());
      });

      $(window).on('load', function () {
        ResponsiveImages.interchange(ResponsiveImages.getBreakpoint());
      });
    }
  };

})(jQuery,  Drupal);
;
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
;
var okApp = okApp || {};
var utag_data = utag_data || {};
var utag_pending = utag_pending || [];
var utag_ip = utag_ip || '';
var utag_last_name = utag_last_name || '';
var utag_last_type = utag_last_type || '';
var utag_saved_tags = utag_saved_tags || null;

/**
 * @file
 * This files handles the different initializations needed.
 */

(function ($, Drupal, drupalSettings, cookies) {
  'use strict';

  /**
   * Verify if a string is base encode and return params if it has.
   *
   * @param      {String}   str        String with possible base64 code
   * @return     {Object}   urlParams
   */
  okApp.checkBase64 = function (str) {
    var urlParams = { hasParams: false };
    // check base64 code
    try {
      urlParams = {
        hasParams: true,
        paramsStr: window.atob(str)
      };
    }
    catch (e) {
      if (e.code === 5) {
        return urlParams;
      }
    }


    return urlParams;
  };

  /**
  * Get Current Lang to avoid send "en-es", "en-de" and etc ..
  *
  * @param      {string}  lang     drupalSettings.path.currentLanguage
  */
  okApp.getCurrentLang = function (lang) {
    var currentLang = lang;

    if (lang.length > 2) {
      currentLang = lang.slice(0, 2);
    }
    return currentLang;
  }

  /**
   * Create and update the cookie language.
   */
  okApp.createAndUpdateLanguageCookie = function () {
    cookies.set(
      'language',
      JSON.stringify(drupalSettings.path.currentLanguage),
      {domain: drupalSettings.ok_user.cookie_domain, path: '/', secure: true}
    );
  };

  /**
   * If Mobile without go-to-app queryparam, then show download app intermediate screen
   * @return {boolean}
   */
  okApp.isContextOpenDownloadAppBanner = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var go_to_app = urlParams.get('go-to-app');
    if ((typeof go_to_app === undefined || go_to_app != '0') && (okApp.isMobilePlatform())) {
      okApp.becomeMobileFlow();
      return true;
    }
    return false;
  }

  /**
   * Display ToggleLogin.
   */
  okApp.displayMobileToggleLogin = function () {
    LoginFrame.init({
      container: '.login',
      lang: (drupalSettings.path) ? drupalSettings.path.currentLanguage : '',
      country: (drupalSettings.path) ? drupalSettings.path.currentLanguage.toUpperCase() : 'ES',
      cookiesDomain: drupalSettings.ok_user.cookie_domain,
      isModal: false, // true si estas en la parte modal, false si no
      getCustomerSessionId: okApp.getSessionCustomerId(), // only call getBiocactch when is active.
      psd2: true,
      authentication: {
        url: drupalSettings.base_api_url + '/authenticationcomposite/login',
        headers: {},
        payload: {
          force: true
        }
      },
      otp: {
        url: drupalSettings.base_api_url + '/authenticationcomposite/verify-otp',
        headers: {},
        payload: {
          force: true
        }
      },
      nuDataKey: drupalSettings.nuDataKey,
      problemsURL: (drupalSettings.login_config.remember_password_url)
        ? drupalSettings.login_config.remember_password_url
        : '',
      onLoginSuccess: function (response) {
        // Tracking on Tealium
        var opcSelected = $('.ok-login__dropdown option:selected');
        if (typeof Drupal.ok_tealium.utagTracking === 'function' && opcSelected.length) {
          Drupal.ok_tealium.utagTracking({
            tipoProceso: 'acceso al area privada',
            pasoProceso: 'exito',
            detalleProceso: $(opcSelected).text()
          });
        }
        // If API user check profile data and redirect to private site.
        if (response.application === 'api') {
          if (!okApp.getStorageItem('rememberUser')) {
            contentManager.clearProfile();
          }
          okApp.redirectToPrivateSite();
        }
        // If Onboarding user redirect to onboarding site.
        else if (response.application === 'onboarding') {
          var url = drupalSettings.onboarding_site_url_login
            + '/login/'
            + response.token;
          window.location.replace(url);
        }
      },
      onLoginError: function (error) {
        // Custom login on error (if needed).
        // Tracking on Tealium
        if (typeof Drupal.ok_tealium.utagTracking === 'function') {
          Drupal.ok_tealium.utagTracking({
            tipoProceso: 'acceso al area privada',
            pasoProceso: 'error',
            detalleProceso: 'error de acceso al area privada'
          });
        }
      },
      onLinkClick: function (link) {
        if (typeof Drupal.ok_tealium.utagTracking === 'function') {
          // We will have other links in a future.
          switch (link.id) {
            case 'lnkAccessProblem':
              Drupal.ok_tealium.utagTracking({
                tipoProceso: 'acceso al area privada',
                pasoProceso: 'link no recuerdo mi clave',
                detalleProceso: $('#loginComponentTypeSelect option:selected').text()
              });
              break;
          }
        }
      },
      onClose: function (e) {
        // TODO: Improve this adding the effect.
        $('.login-wrapper').addClass('closed');
        // Remove overlay when login panel is closed
        $('.overlay').hide();
      }
    });
    var $loginPanel = $('.login');
    var $loginWrapper = $('.login-wrapper');
    $loginPanel.css({ top: okApp.getLoginPosition() + 'px' });
    // display login
    $loginWrapper.removeClass('closed');
    // Adding overlay when login panel is displayed
    $('.overlay').show();
  }

  /**
   * Check if is a mobile platform.
   * @returns {boolean}
   */
  okApp.isMobilePlatform = function () {
    return (okApp.checkPlatformMobile('any') && (okApp.checkPlatformMobile('iOS') || okApp.checkPlatformMobile('Android')));
  }

  /**
   * Validate platform mobile
   * @param {string} system variable Mobile platform name 'Android', 'iOS' or 'any', 'any' indicates that is a Mobile browser
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
   * @return {boolean} if match with your current browser OS, example: okApp.checkPlatformMobile('Android') returns true, if it's Android OS you test it up.
   */
  okApp.checkPlatformMobile = function (system) {
    switch (system) {
      case 'Android':
        return navigator.userAgent.match(/Android/i);
      case 'iOS':
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      case 'Windows Phone':
        return navigator.userAgent.match(/Windows Phone|iemobile|WPDesktop/i);
      case 'any':
        return navigator.userAgent.match(/Mobi/i);
      default:
        return false;
    }
  };

  /**
   * Get item from localStorage, use cookie as fallback.
   *
   * @param {string} key variable name to get from storage
   * @return {mixed} Mixed the value stored.
   */
  okApp.getStorageItem = function (key) {
    if (typeof window.localStorage !== 'undefined') {
      return window.localStorage.getItem(key);
    }
    else {
      return cookies.get(key);
    }
  };

  /**
   * Set item on localStorage, use cookie as fallback.
   *
   * @param {string} key variable name to set
   * @param {mixed} value to be stored
   */
  okApp.setStorageItem = function (key, value) {
    if (typeof window.localStorage !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
    else {
      cookies.set(key, value);
    }
  };

  /**
   * Removes a storage item.
   *
   * @param      {string}  key     the key of the item to be removed
   */
  okApp.removeStorageItem = function (key) {
    if (typeof window.localStorage !== 'undefined') {
      window.localStorage.removeItem(key);
    }
    else {
      $.removeCookie(key);
    }
  };

  /**
   * Set item on sessionStorage
   * @param {string} key to set a value on sessionStorage.
   * @param {string} value to set a value on sessionStorage.
   */
  okApp.setSessionStorageItem = function (key, value) {
    if (window.sessionStorage !== 'undefined') {
      window.sessionStorage.setItem(key, value);
    }
  };

  /**
   * Get item on sessionStorage
   * @param {string} key to get a value from sessionStorage.
   * @return {mixed} data from local storage *.
   */
  okApp.getSessionStorageItem = function (key) {
    if (window.sessionStorage !== 'undefined') {
      return window.sessionStorage.getItem(key);
    }
  };

  /**
   * Removes a storage item.
   *
   * @param      {string}  key     the key of the item to be removed
   */
  okApp.removeSessionStorageItem = function (key) {
    if (typeof window.sessionStorage !== 'undefined') {
      window.sessionStorage.removeItem(key);
    }
    else {
      $.removeCookie(key);
    }
  };


  /**
   * Get Current Lang to avoid send "en-es", "en-de" and etc ..
   *
   * @param      {string}  lang     drupalSettings.path.currentLanguage
  */
  okApp.getCurrentLang = function (lang) {
    var currentLang = lang;

    if (lang.length > 2) {
      currentLang = lang.slice(0, 2);
    }
    return currentLang;
  }


  /* Get config data for the topbar component. */
  okApp.getTopbarSources = function (menuSegmentData) { //TODO This function must be moved to a topbar module utils
    var configTopbar = JSON.parse(JSON.stringify(drupalSettings.ok_topbar));
    if (menuSegmentData) {
      configTopbar.product_menu.menu = menuSegmentData;
    }
    var collectiveTitle = '';
    var collectiveBackgroundColor = '';
    var collectiveTextColor = '';
    var collectiveUrl = '#';
    var targetAudiences = okApp.getStorageItem('tb_collectiveId');
    var sources;
    var collectives = null;
    if (okApp.getStorageItem('tb_has_collective') === 'true') {
      collectives = drupalSettings.ok_topbar.topbar.collectives;
      if (Array.isArray(collectives)) {
        for (var i = 0; i < collectives.length; i++) {
          for (var j = 0; j < collectives[i].target_audience.length; j++) {
            if (targetAudiences === collectives[i].target_audience[j]) {
              collectiveTitle = collectives[i].title;
              collectiveBackgroundColor = collectives[i].bg_color;
              collectiveTextColor = collectives[i].text_color;
            }
          }
        }
      }

      // get collective url depending of public target.
      if (typeof drupalSettings.ok_topbar.topbar.collective_landings !== 'undefined') {
        var urlArray = drupalSettings.ok_topbar.topbar.collective_landings;
        $.each(urlArray, function (i, val) {
          if (i === targetAudiences) {
            collectiveUrl = val;
          }
        });
      }
    }

    if (localStorage.getItem('investmentConfig')) {
      var investmentConfig = JSON.parse(localStorage.getItem('investmentConfig'));
      var newUrl = '/promo-code/' + investmentConfig.promoCode + '/' + investmentConfig.type + '/' + investmentConfig.value;
      configTopbar.topbar.become_customer_url += newUrl;
      configTopbar.topbar.become_customer_url_customer += newUrl;
      configTopbar.topbar.become_customer_url_prospect += newUrl;
    }

    var userdata = {
      name: okApp.getStorageItem('tb_username'),
      avatar: okApp.getStorageItem('tb_avatar'),
      collective: collectiveTitle,
      collective_background_color: collectiveBackgroundColor,
      collective_text_color: collectiveTextColor,
      collective_url: collectiveUrl,
      notifications: ''
    };
    // Get layout page settings
    var layoutSettings = (drupalSettings.ok_layout_settings) ? drupalSettings.ok_layout_settings : [];
    // Get company Id.
    var companyId = getCompanyId();
    var companyInfo = '';
    // Confirm if list companies exist.
    if (layoutSettings.companies && layoutSettings.companies[companyId]) {
      companyInfo = layoutSettings.companies[companyId];
    }
    if (TopBarFrame) {
      okApp.createAndUpdateLanguageCookie();

      var privateMenu = configTopbar.private_menu;
      if (decodeURI(cookies.get('rls')) === 'true') {
        privateMenu.banking.push({
          id: 'markets',
          title: 'Open Markets',
          url: 'https://clientes.openbank.es/myprofile/loans-mortgages/contract-retail-loan',
          rightIcon: 'https://www.openbank.es/assets/static/images/retail/open_markets_icon.svg'
        });
      }
      configTopbar.private_menu = privateMenu;

      sources = {
        user: userdata,
        json: configTopbar,
        customer: okApp.isCustomer(),
        authenticated: okApp.isLoggedIn(),
        lang: (drupalSettings.path) ? okApp.getCurrentLang(drupalSettings.path.currentLanguage) : '',
        country: (drupalSettings.path && drupalSettings.path.country_code) ? drupalSettings.path.country_code.toUpperCase() : 'ES',
        langSwitch: (layoutSettings.language) ? parseInt(layoutSettings.language) : 1, // by default is showed
        layoutType: (layoutSettings.topbar) ? layoutSettings.topbar : 'topbar_publica',
        companyInfo: companyInfo,
        cookiesDomain: drupalSettings.ok_user.cookie_domain,
        showOnlyMortgages: cookies.get('rnc') ? true : false,
        showPGNerudaUser: cookies.get('neruda') ? JSON.parse(decodeURI(cookies.get('neruda'))) : false, // send value of cookie or false.
        onTogglePreference: function () { },
        onLanguageSwitch: function (evt, language) {
          var url = '';
          drupalSettings.ok_topbar.languages.forEach(function (element) {
            if (element.id === language) {
              url = element.current_url;
            }
          });
          location.href = url;
        },
        onLoginUnknow: function () {
          // Show banner.
          var $banner = $('.go-to-app');
          $banner.addClass('go-to-app--small');
          $banner.find('.mobile').hide();
          $banner.find('.error').html(drupalSettings.ok_topbar.topbar.customer_area_other).show();
          $banner.show();
        },
        onLogin: function () {
          if (drupalSettings.openbank_biocatch && drupalSettings.openbank_biocatch.enable === 1) {
            okBiocatch.initBiocatchAndSetContext('LOGIN_PAGE');
          }
          var breakpoint = window.ResponsiveImages.getBreakpoint();
          var $loginPanel = $('.login');
          var $loginWrapper = $('.login-wrapper');
          var $banner = $('.go-to-app');
          if (breakpoint === 'lg') {
            // Open login panel.
            $loginPanel.css({ top: okApp.getLoginPosition() + 'px' });
            // display login
            $loginWrapper.removeClass('closed');
            // Adding overlay when login panel is displayed
            $('.overlay').show();
          }
          else {
            // validate device type
            if (okApp.isContextOpenDownloadAppBanner()) {
              // Open banner go-to-app.
              $banner.show();
            }
            else {
              // the browser runs on desktop device or an unsupported mobile
              $loginPanel.css({ top: okApp.getLoginPosition() + 'px' });
              $loginWrapper.removeClass('closed');
              $('.overlay').show();
            }
          }
          // Tracking on Tealium.
          if (typeof Drupal.ok_tealium.utagTracking === 'function') {
            Drupal.ok_tealium.utagTracking({
              tipoProceso: 'acceso al area privada',
              pasoProceso: 'acceso',
              detalleProceso: 'acceso al panel de login'
            });
          }
        },
        onLogout: function () {
          // TODO: Review this logic.
          window.LoginFrame.logout({
            url: drupalSettings.base_api_url + '/logout',
            cookiesDomain: drupalSettings.ok_user.cookie_domain
          }).then(function () {
            // Confirm with private site.
            $.removeCookie(drupalSettings.ok_user.cookie_login, { domain: drupalSettings.ok_user.cookie_domain });
            $.removeCookie('rls', { domain: drupalSettings.ok_user.cookie_domain });

            // remove profile data if user is not remembered
            if (!okApp.getStorageItem('rememberUser')) {
              contentManager.clearProfile();
            }
            window.location.reload();
          });
        },
        onImport: topbarAfterImport,
        onChangePreference: function () {
          TopBarFrame.import(okApp.getTopbarSources());
        }
      };
    }
    return sources;
  };

  /**
   * initializes topbar component.
   * @param {Object} menuSegmentData Object with menu product segmentation
   */
  okApp.initializeTopbar = function (menuSegmentData) {
    okApp.checkIfInvestmentConfigExist();
    var sources = okApp.getTopbarSources(menuSegmentData);
    // Check if user is of model or passport
    if (!okApp.isT24User()) {
      TopBarFrame.import(sources);
    }
    okApp.CookiesPolicies();
  };


  /**
  * set investment data on localStorage to be used for the topbar component.
  * @param {string} type is the value to be set on the localStorage object.
  */
  okApp.setInvestmentConfig = function (type) {
    var dataName = 'investmentConfig';
    var config = {};
    localStorage.removeItem(dataName);
    if (drupalSettings.ok_onboarding && drupalSettings.ok_onboarding.active_promo_code) {
      switch (type) {
        case 'portfolio':
          config.value = JSON.parse(localStorage.getItem('ok_portfolio_page')).portfolioId;
          config.type = 'INVD';
          config.promoCode = drupalSettings.ok_onboarding.portfolio_promo_code || 'carteras';
          localStorage.setItem(dataName, JSON.stringify(config));
          break;
        case 'funds':
          config.value = drupalSettings.ok_investments.isinCode;
          config.type = 'ISIN';
          config.promoCode = drupalSettings.ok_onboarding.funds_promo_code || 'fondos';
          localStorage.setItem(dataName, JSON.stringify(config));
          break;
        case 'plans':
          config.value = drupalSettings.ok_investments.dgsCode;
          config.type = 'DGS';
          config.promoCode = drupalSettings.ok_onboarding.dgs_promo_code || 'planes';
          localStorage.setItem(dataName, JSON.stringify(config));
          break;
      }
    }
  };

  okApp.checkIfInvestmentConfigExist = function () {
    // verify and delete investmentConfig object.
    okApp.setInvestmentConfig();
    // if ok_investment exist create investmentConfig
    if (drupalSettings.ok_investments) {
      if (drupalSettings.ok_investments.isinCode) {
        okApp.setInvestmentConfig('funds');
      }
      else if (drupalSettings.ok_investments.dgsCode) {
        okApp.setInvestmentConfig('plans');
      }
    }
  };

  /**
   * HTTP redirect to private site.
   */
  okApp.redirectToPrivateSite = function () {
    var redirectURL = (typeof drupalSettings.private_site_redirect_url !== 'undefined')
      ? drupalSettings.private_site_redirect_url
      : drupalSettings.private_site_url;
    window.location.replace(redirectURL);
  };

  /**
   * Initializing promotions location for services compatibility.
   */
  okApp.promotionItems = [];

  /**
   * Show a cookie policy and close functionality.
   */
  okApp.CookiesPolicies = function () {
    var $topbar = $('.ok-topbar').length ? $('.ok-topbar') : $('.ok-onboarding-topbar');
    var $private_menu = $('.private-topbar');
    var $main = $('#main');
    // Validate if the topbar is present to remove margin
    if ($topbar.length) {
      okApp.removeCreativityGiroboxMargin();
    }

    // Check if cookies block exists
    if ($('#cookies-policy').length > 0) {
      $('#cookies-policy').once('openbank-cookie-policy').each(function () {
        var $this = $(this);
        var $body = $('body');
        var $loginPanel = $('.login');
        var $cta = $this.find('.cookies-policy__cta');
        var $button = $this.find('.cookies-policy__close-icon > a');
        var cookie_policy = cookies.get('cookie_policy');

        if (typeof cookie_policy === 'undefined' || cookie_policy.display === true) {
          $this.removeClass('hide');
          $body.addClass('with-cookies-policy');
        }
        else {
          $this.addClass('hide');
          $body.removeClass('with-cookies-policy');
        }
        // update main content position
        addMarginToMainContainer();

        // By US Definition, we display the cookie policy only once.
        // So, we mark as accepted on first load.
        cookies.set('cookie_policy', { display: false }, { expires: 180, secure: true });

        // Add hide class on click and set the cookie.
        $button.on('click', function (e) {
          e.preventDefault();
          $this.addClass('hide');
          $body.removeClass('with-cookies-policy');
          cookies.set('cookie_policy', { display: false }, { expires: 180, secure: true });
          // Update login position.
          $loginPanel.css('top', okApp.getLoginPosition() + 'px');
          // update main content position
          addMarginToMainContainer();
        });

        // If click on CTA, consider as accepted.
        $cta.on('click', function (e) {
          cookies.set('cookie_policy', { display: false }, { expires: 180, secure: true });
          // Update login position.
          $loginPanel.css('top', okApp.getLoginPosition() + 'px');
        });
      });
    }
    else {
      // We remove margin-top in girobox-campaign-block when we are admin.
      if ($('#toolbar-administration').length) {
        if ($('.girobox-campaign-block').length) {
          $('.girobox-campaign-block').css('margin-top', 0);
        }
      }
      addMarginToMainContainer();
    }
    
    $(window).on({
      resize: function () {
        // update main content position
        updateMainContentPosition();
      }
    });
    // adds a margin to the main container
    function addMarginToMainContainer() {
      var publicTopBarHeight = $topbar.outerHeight();
      var privateTopBarHeight = $private_menu.outerHeight() || 0; // Provide a number whether or not element exists
      var cintilloHeight = showCintilloAndReturnHeight() || 0;
      var mainMargin = publicTopBarHeight + privateTopBarHeight + cintilloHeight + 'px';
      $main.css('margin-top', mainMargin);
    }

    /**
       * shows the cintillo and return its height if there is the case
       * Also, it moves the topbar's placeholder. Showing the cintillo and moving the placeholder must be done at the same time
       * to avoid miscalcultaring heighcms/src/profiles/ok/themes/custom/openbank/js/openbank.init.jsts and to show the cintillo properly.
       * As moving the topbar's placeholder shouldn't be done in the cintillo's js file, it is done here.
       * @return {Number} the height of the cintillo for said conditions
       */
    function showCintilloAndReturnHeight() {
      var $cintillo = $('.ok-cintillo');
      var cintilloHeight = 0;
      var isCintillo = !!$cintillo.length;
      if (!isCintillo) {
        return cintilloHeight;
      }
      var isCintilloInHeader = !!$('.region-header .ok-cintillo').length;
      if (!isCintilloInHeader) {
        return cintilloHeight;
      }
      cintilloHeight = $cintillo.outerHeight();
      var cintilloPreceedsTopbar = !!$('.block-ok-cintillo ~ .block-openbank-topbar').length;
      if (cintilloPreceedsTopbar) {
        $('.topbar-placeholder').css('margin-top', cintilloHeight + 'px');
      }
      return cintilloHeight;
    }
  };

  /** :
   * Change the behavior of the become client button on samall viewports and mobile
   */
  okApp.becomeMobileFlow = function () {
    var breakpoint = window.ResponsiveImages.getBreakpoint();
    var $banner = $('.go-to-app');
    if (breakpoint !== 'lg') {
      if (okApp.checkPlatformMobile('iOS')) {
        $banner.find('.go-to-app__content__install__ios').show();
      }
      else if (okApp.checkPlatformMobile('Android')) {
        $banner.find('.go-to-app__content__install__android').show();
      }
      else {
        $banner.find('.go-to-app__content__install__other').show();
      }
    }
  };


  /**
   * Generate an UUID hash (non-secure).
   *
   * @return {string} the hash generated
   */
  okApp.generateUUIDv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  /**
  *  Initialize product search params.
  * Topbar holds the placeholder, so this function needs to be sent in callback
  * @param  {Object} slider variable
  * @return {Object} return settings from slider
  */
  okApp.initializeProductSearchSettings = function (slider) {
    // get slider element
    var $slider = $(slider);
    // get paramters from data attributes or default values
    var sliderSettings = {
      arrows: (typeof $slider.data('swipe-slider-arrows') !== 'undefined')
        ? $slider.data('swipe-slider-arrows')
        : false,
      center: (typeof $slider.data('swipe-slider-center') !== 'undefined')
        ? $slider.data('swipe-slider-center')
        : true,
      padding: (typeof $slider.data('swipe-slider-padding') !== 'undefined')
        ? $slider.data('swipe-slider-padding')
        : 37,
      slides: (typeof $slider.data('swipe-slider-slides') !== 'undefined')
        ? $slider.data('swipe-slider-slides')
        : 1,
      dots: (typeof $slider.data('swipe-slider-dots') !== 'undefined')
        ? $slider.data('swipe-slider-dots')
        : false,
      infinite: (typeof $slider.data('swipe-slider-infinite') !== 'undefined')
        ? $slider.data('swipe-slider-infinite')
        : true,
      nextArrow: (typeof $slider.data('swipe-slider-next') !== 'undefined')
        ? $slider.data('swipe-slider-next')
        : false,
      prevArrow: (typeof $slider.data('swipe-slider-prev') !== 'undefined')
        ? $slider.data('swipe-slider-prev')
        : false,
      breakpoints: (typeof $slider.data('swipe-slider-breakpoints') !== 'undefined')
        ? $slider.data('swipe-slider-breakpoints')
        : false,
      rows: (typeof $slider.data('swipe-slider-rows') !== 'undefined')
        ? $slider.data('swipe-slider-rows')
        : 1
    };
    return sliderSettings;
  };


  /**
  * click event for headers with promotion
  */
  okApp.togglePromotionHeader = function () {
    var $modal = $('#promotion-modal');
    var $topbarPosition = okApp.getLoginPosition() + 1;
    $modal.css('top', $topbarPosition);
    $modal.find('.modal-dialog').css('top', $topbarPosition);
    $modal.modal('show');
    $('.promotion-modal .promotion__block').css('height', $modal.height());
  };

  /**
  * toggle the who we are panel people (directors and young talent at Openbank)
  */
  okApp.togglePanelWhoweare = function () {
    function showDirectors() {
      if (!$('.santander-people__category--directors').hasClass('santander-people__category--active')) {
        $('.santander-people__category--directors').addClass('santander-people__category--active');
        $('.santander-people__category--youngs').removeClass('santander-people__category--active');
        $('.santander-people__gallery--directors').addClass('santander-people__gallery--active');
        $('.santander-people__gallery--youngs').removeClass('santander-people__gallery--active');
        $('.button-directivos').hide();
        $('.button-youngs').hide();
      }
    }
    function showYoungsTalents() {
      if (!$('.santander-people__category--youngs').hasClass('santander-people__category--active')) {
        $('.santander-people__category--youngs').addClass('santander-people__category--active');
        $('.santander-people__category--directors').removeClass('santander-people__category--active');
        $('.santander-people__gallery--youngs').addClass('santander-people__gallery--active');
        $('.santander-people__gallery--directors').removeClass('santander-people__gallery--active');
        $('.button-directivos').hide();
        $('.button-youngs').hide();
      }
    }
    function setVisibleTitleGrid() {
      $('.santander-people__title').removeClass('col-sm-12');
      $('.santander-people__title').addClass('col-sm-6');
      $('.santander-people__title').addClass('santander-people__title--grid');
      $('.santander-people__category').show();
    }
    $('.santander-people__category--directors').on('click touchstart', function (e) {
      e.preventDefault();
      showDirectors();
    });
    $('.santander-people__category--youngs').on('click touchstart', function (e) {
      e.preventDefault();
      showYoungsTalents();
    });
    $('.button-directivos').on('click touchstart', function (e) {
      e.preventDefault();
      setVisibleTitleGrid();
      showDirectors();
    });
    $('.button-youngs').on('click touchstart', function (e) {
      e.preventDefault();
      setVisibleTitleGrid();
      showYoungsTalents();
    });
  };


  /**
   * Convert pixels size to rem size.
   *
   * @method remCalc
   * @param {string} pxValue is pixel size with or without "px" suffix
   *
   * @return {string} the rem size
   */
  okApp.remCalc = function (pxValue) {
    if (typeof pxValue === 'undefined') {
      return pxValue;
    }
    var value = parseInt(pxValue) || 0;
    // Get base font.
    var htmlElement = document.getElementsByTagName('html')[0];
    var fontSize = window.getComputedStyle(htmlElement)['fontSize'];
    var ratio = parseInt(fontSize);
    // Calculates rem value.
    value = value / ratio;
    // Add suffix when value isn't 0.
    return value + (value ? 'rem' : '');
  };


  /**
  * Toggles Swipe Slider behavior based on the current breakpoing
  *
  * @param      {Object}  slider    The slider
  * @param      {Object}  settings  The customized settings
  *
  * @return      {boolean}  indicating if the slider was initialized
  */
  okApp.toggleSwipeSlider = function (slider, settings) {
    var breakpoint = window.ResponsiveImages.getBreakpoint();
    var sliderSettings = {};
    var additionalSettings = {};
    var $timeLine = $('.openbank-timeline');
    var $modalPeople = $('.modal-body__slider');
    var allowedBreakpoints = (settings.breakpoints) ? settings.breakpoints.split(',') : false;
    okApp.togglePanelWhoweare();
    if (($.inArray(breakpoint, allowedBreakpoints) > -1) && slider.hasClass('swipe-slider--whoweare')) {
      if ($timeLine.length !== 0 || $modalPeople.length !== 0) {
        if (!slider.hasClass('slick-initialized')) {
          // init who-we-are timeline slider
          if (slider.hasClass('openbank-timeline---wrapper')) {
            slider.slick({
              initialSlide: 0,
              arrows: false,
              centerMode: settings.center,
              slidesToShow: 3,
              dots: settings.dots,
              slidesToScroll: 3,
              infinite: settings.infinite,
              focusOnSelect: true,
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                  }
                }
              ]
            });
          }
          if (slider.hasClass('santander-people__main')) {
            return;
          }
          switch (breakpoint) {
            case 'xs':
              sliderSettings = {
                arrows: false,
                dots: settings.dots,
                infinite: settings.infinite,
                variableWidth: true
              };
              if (slider.hasClass('santander-people__main')) {
                sliderSettings = {
                  arrows: false,
                  centerMode: settings.center,
                  centerPadding: settings.padding,
                  infinite: settings.infinite,
                  variableWidth: true
                };
              }
              slider.slick(sliderSettings);
              break;
          }
        }
      }
    }
    else {
      if ($.inArray(breakpoint, allowedBreakpoints) > -1 && (slider.hasClass('swipe-slider--active-search') || slider.hasClass('swipe-slider--active-promotions'))) {
        slider.addClass('swipe-slider');
        if (!slider.hasClass('slick-initialized')) {
          sliderSettings = {
            arrows: settings.arrows,
            centerMode: settings.center,
            centerPadding: settings.padding + 'px',
            slidesToShow: settings.slides,
            infinite: settings.infinite,
            rows: settings.rows
          };
          slider.slick(sliderSettings);
          if (breakpoint === 'sm' || breakpoint === 'md') {
            slider.find('.box-grid__result__card').css({ width: (slider[0].offsetWidth / settings.rows) - 10 });
          }
        }
      }
      else if ($.inArray(breakpoint, allowedBreakpoints) > -1 && (slider.attr('data-slick'))) {
        if (slider.hasClass('slick-initialized')) {
          if (slider.attr('data-swipe-slider') === 'cards') {
            if (breakpoint === 'xs' || breakpoint === 'sm') {
              slider.slick('slickUnfilter');
            }
            else {
              slider.slick('slickFilter', '.front');
            }
          }
          return true;
        }
        if (slider.attr('data-swipe-slider') === 'menu-discounts') {
          additionalSettings = {
            appendArrows: $('.discount__menu__arrows'),
            nextArrow: "<i class='icon-siguiente arrow-next'></i>",
            prevArrow: "<i class='icon-anterior arrow-prev'></i>",
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 4
                }
              }
            ]
          };
        }
        else if (slider.attr('data-swipe-slider') === 'discounts') {
          additionalSettings = {
            appendArrows: slider.next('.discount__category__arrows'),
            nextArrow: "<i class='icon-siguiente arrow-next'></i>",
            prevArrow: "<i class='icon-anterior arrow-prev'></i>",
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          };
        }
        else if (slider.attr('data-swipe-slider') === 'cards') {
          var timeLapse = parseInt(slider.closest('.cards-subhome__group__content').attr('data-slider-lapse'));
          additionalSettings = {
            appendArrows: slider.next('.cards__arrows'),
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  autoplay: true,
                  autoplaySpeed: timeLapse * 1000,
                  arrows: false
                }
              }
            ]
          };
        }
        else if (slider.attr('data-swipe-slider') === 'cards-slider') {
          additionalSettings = {
            responsive: [
              {
                breakpoint: 1439, // tablet
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 1023, // tablet
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 767, // mobile
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        }
        if (slider.attr('data-swipe-slider') === 'menu-faqs') {
          additionalSettings = {
            appendArrows: $('.help__type__arrows'),
            nextArrow: "<i class='icon-siguiente arrow-next'></i>",
            prevArrow: "<i class='icon-anterior arrow-prev'></i>",
            responsive: [
              {
                breakpoint: 1023, // tablet
                settings: {
                  slidesToShow: 4,
                  infinite: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3,
                  infinite: false
                }
              }
            ]
          };
        }
        if (slider.attr('data-swipe-slider') === 'discount-slider') {
          additionalSettings = {
            appendArrows: $('.discount-slider__arrows'),
            nextArrow: "<i class='icon-siguiente arrow-next'></i>",
            prevArrow: "<i class='icon-anterior arrow-prev'></i>",
            infinite: false,
            responsive: [
              {
                breakpoint: 1023, // tablet
                settings: {
                  slidesToShow: 3,
                  infinite: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  infinite: false
                }
              }
            ]
          };
        }
        if (slider.attr('data-swipe-slider') === 'promotion-filter') {
          additionalSettings = {
            appendArrows: $('.promotions__arrows'),
            nextArrow: "<i class='icon-siguiente arrow-next'></i>",
            prevArrow: "<i class='icon-anterior arrow-prev'></i>",
            responsive: [
              {
                breakpoint: 1023, // tablet
                settings: {
                  slidesToShow: 4,
                  infinite: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3,
                  infinite: false
                }
              }
            ],
            variableWidth: true
          };
        }
        var slickSettings = JSON.parse(slider.attr('data-slick'));
        var newSettings = $.extend(slickSettings, additionalSettings);

        slider.find('.panel-heading').on('click', function () {
          slider.find('.slick-list').height('auto');
        });
        slider.slick(newSettings);

        if (slider.attr('data-swipe-slider') === 'cards') {
          if (breakpoint === 'xs' || breakpoint === 'sm') {
            slider.slick('slickUnfilter');
          }
          else {
            slider.slick('slickFilter', '.front');
          }
        }
      }
      else if (slider.hasClass('slick-initialized')) {
        if (breakpoint !== 'xs') {
          slider.slick('unslick');
        }
      }
    }
  };

  /**
  * set the same height to different items , no apply
  * to mobile resolution
  * @param      {Object}  $el parent element to find the needed items to change
  */
  okApp.equalHeightItems = function ($el) {
    var $itemTarget = $el.find('[data-equal-item]');
    // Function to recalculate
    function recalculateSize() {
      var breakpoint = window.ResponsiveImages.getBreakpoint();
      // Verify if it's mobile resolution
      if (breakpoint === 'xs') {
        $itemTarget.removeAttr('style');
        return;
      }
      var minHeight = 0;
      // Getting max item height to apply.
      $itemTarget.each(function () {
        $(this).removeAttr('style');
        if ($(this).height() > minHeight) {
          minHeight = $(this).height();
        }
      });
      minHeight = parseInt(minHeight, 10) + 'px';
      $itemTarget.css({ 'min-height': minHeight });
    }
    recalculateSize();
    // Load and resize actions
    $(window).on({
      load: recalculateSize,
      resize: recalculateSize
    });
  };

  okApp.isInViewport = function ($el) {
    var bounding = $el.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  /**
   * Parses an URL and return its info
   *
   * @param      {String}  url     The URL to parse
   * @return     {Object}  Object containing the URL info
   */
  okApp.parseURL = function (url) {
    // construct a location object using the passed URL
    var parser = document.createElement('a');
    parser.href = url;
    var result = {
      protocol: parser.protocol, // => "http:"
      host: parser.host, // => "example.com:3000"
      hostname: parser.hostname, // => "example.com"
      port: parser.port, // => "3000"
      pathname: parser.pathname, // => "/pathname/"
      hash: parser.hash, // => "#hash"
      search: parser.search, // => "?search=test"
      origin: parser.origin, // => "http://example.com:3000"
      parameters: {}
    };
    result.pathname = result.pathname.replace(/^\/?/, '/'); // fix for MSIE
    // process querystring and add parameters
    var queryString = result.search.substr(1);
    queryString.split('&').forEach(function (part) {
      var item = part.split('=');
      result.parameters[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
  };

  /**
   * Determines if URL is valid.
   *
   * @param      {String}   url     The URL to check
   * @return     {Boolean}  true if valid URL, false otherwise.
   */
  okApp.isValidURL = function (url) {
    if (url === 'http://#') {
      return false;
    }
    var absolutePattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    var relativePattern = new RegExp('^(\/.+)?');
    return absolutePattern.test(url) || relativePattern.test(url);
  };


  /**
   * Raises an Alert modal warning about external (not whitelisted) links
   *
   * @param      {String}  href    The href attribute value
   * @param      {String}  clickedElem    The clicked element that opens the alert
   */
  okApp.displayAlertModal = function (href, clickedElem) {
    var $modal = $('#alert-modal');
    // Open modal.
    $modal.modal('show');
    // Find accept button and attach attributes.
    $modal.find('[data-confirm-leave]').attr({
      href: href,
      target: '_blank'
    });
    // When click in accept button from modal then close modal and open new tab.
    $modal.find('[data-confirm-leave]').on('click', function (e) {
      e.stopPropagation();
      if (clickedElem[0].hasAttribute('data-app-download')) {
        var trackObj = {
          tipoProceso: 'link de descarga de aplicaciones',
          pasoProceso: 'fin',
          detalleProceso: clickedElem.attr('data-app-download')
        };
        Drupal.ok_tealium.utagTracking(trackObj);
      }

      $('#alert-modal').modal('hide');
    });

    $modal.on('hidden.bs.modal', function () {
      $modal.find('[data-confirm-leave]').off('click');
    });
  };

  /**
   * Returns a session id or a empty function.
   *
   *
   * @return     session id or empty function
   */
  okApp.getSessionCustomerId = function () {
    if (drupalSettings.openbank_biocatch && drupalSettings.openbank_biocatch.enable === 1) {
      return okBiocatch.getBiocatchSessionId;
    }
    else {
      return function () { /* we must return a empty function  */ };
    }
  };

  /**
   * Raises the Login modal for Desktop or the Call Me Back modal for Mobile and
   * tablets
   *
   * @param      {string}  redirectURL  URL to redirect to after login
   * @param      {boolean}  newSession  Indicates if the link opens in second session
   * @param      {string}  texts  texts to be displayed
   */
  okApp.displayAccessModal = function (redirectURL, newSession, texts) {
    texts = texts || '';
    if (okApp.isLoggedIn()) { // if is logged in, do not show anything
      newSession = newSession || false;
      if (newSession && window.open) {
        window.open(redirectURL, '_blank');
      }
      else {
        location.href = redirectURL;
      }
    }
    else {
      // Set link URL as redirect for login
      if (redirectURL) {
        drupalSettings.private_site_redirect_url = redirectURL;
      }
      if (drupalSettings.openbank_biocatch && drupalSettings.openbank_biocatch.enable === 1) {
        okBiocatch.initBiocatchAndSetContext('LOGIN_PAGE');
      }

      if (okApp.isContextOpenDownloadAppBanner() ) { // Mobile, show download app intermediate screen
        // Open banner go-to-app.
        var $banner = $('.go-to-app');
        $banner.show();
      }
      else if (okApp.isMobilePlatform()) {
        okApp.displayMobileToggleLogin();
      }
      else { // Desktop, process normal login flow
        LoginFrame.init({
          container: '.modal--login .modal-dialog',
          lang: (drupalSettings.path) ? drupalSettings.path.currentLanguage : '',
          country: (drupalSettings.path) ? drupalSettings.path.currentLanguage.toUpperCase() : 'ES',
          cookiesDomain: drupalSettings.ok_user.cookie_domain,
          isModal: true, // true si estas en la parte modal, false si no
          becomeClientUrl: '/hazte-cliente',
          getCustomerSessionId: okApp.getSessionCustomerId(), // only call getBiocactch when is active.
          psd2: true,
          extraLinks: [{
            label: $('.modal-dialog-links-extra .about-keys').text(),
            url: $('.modal-dialog-links-extra .about-keys').attr('href')
          }, {
            label: $('.modal-dialog-links-extra .security-advice').text(),
            url: $('.modal-dialog-links-extra .security-advice').attr('href')
          }],
          authentication: {
            url: drupalSettings.base_api_url + '/authenticationcomposite/login',
            headers: {},
            payload: {
              force: true
            }
          },
          otp: {
            url: drupalSettings.base_api_url + '/authenticationcomposite/verify-otp',
            headers: {},
            payload: {
              force: true
            }
          },
          nuDataKey: drupalSettings.nuDataKey,
          problemsURL: (drupalSettings.login_config.remember_password_url)
            ? drupalSettings.login_config.remember_password_url
            : '',
          onLoginSuccess: function (response) {
            // Tracking on Tealium
            var opcSelected = $('.ok-login__dropdown option:selected');
            if (typeof Drupal.ok_tealium.utagTracking === 'function' && opcSelected.length) {
              Drupal.ok_tealium.utagTracking({
                tipoProceso: 'acceso al area privada',
                pasoProceso: 'exito',
                detalleProceso: $(opcSelected).text()
              });
            }
            // If API user check profile data and redirect to private site.
            if (response.application === 'api') {
              if (!okApp.getStorageItem('rememberUser')) {
                contentManager.clearProfile();
              }
              okApp.redirectToPrivateSite();
            }
            // If Onboarding user redirect to onboarding site.
            else if (response.application === 'onboarding') {
              var url = drupalSettings.onboarding_site_url_login
                + '/login/'
                + response.token;
              window.location.replace(url);
            }
          },
          onLoginError: function (error) {
            // Custom login on error (if needed).
            // Tracking on Tealium
            if (typeof Drupal.ok_tealium.utagTracking === 'function') {
              Drupal.ok_tealium.utagTracking({
                tipoProceso: 'acceso al area privada',
                pasoProceso: 'error',
                detalleProceso: 'error de acceso al area privada'
              });
            }
          },
          onLinkClick: function (link) {
            if (typeof Drupal.ok_tealium.utagTracking === 'function') {
              // We will have other links in a future.
              switch (link.id) {
                case 'lnkAccessProblem':
                  Drupal.ok_tealium.utagTracking({
                    tipoProceso: 'acceso al area privada',
                    pasoProceso: 'link no recuerdo mi clave',
                    detalleProceso: $('#loginComponentTypeSelect option:selected').text()
                  });
                  break;
              }
            }
          },
          onClose: function (e) {
            // TODO: Improve this adding the effect.
            $modal.modal('hide');
            // Remove overlay when login panel is closed
            $('.overlay').hide();
          }
        });

        // Get elements from modal
        var $modal = $('#login-modal');
        // Display modal
        $modal.modal('show');

      }
    }
  };

  /**
   * Determines if link is whitelisted or in the current domain.
   *
   * @param      {Object}   link    The link
   * @return     {boolean}  True if white listed link, False otherwise.
   */
  okApp.isWhiteListedLink = function (link) {
    var urlsArray = [];
    var hostname = link.hostname;
    var protocol = link.protocol;
    // The object [HTMLAnchorElement] does not contain hostname and protocol in IE browsers
    if (link.hostname === '' || link.protocol === '') {
      // extract hostname and protocol from href attribute
      var arrUri = link.href.split('//');
      var arrHost = arrUri[1].split('/');
      protocol = arrUri[0];
      hostname = arrHost[0];
    }
    var currentDomain = window.location.protocol + '//' + window.location.hostname;
    // TODO: Use a validation on submit for the config form to avoid www in CMS.
    if (drupalSettings.ok_exitmodal) {
      $.each(drupalSettings.ok_exitmodal.settings, function (i, val) {
        var arrItem = val.replace('www.', '');
        urlsArray.push(arrItem);
      });
    }
    for (var i = urlsArray.length - 1; i >= 0; i--) {
      if (typeof link.hostname !== 'undefined'
        && (link.hostname.indexOf(urlsArray[i]) > -1 || currentDomain === protocol + '//' + hostname)
      ) {
        return true;
      }
    }
    return false;
  };


  /**
   * Get the vertical position of login element
   * @return {Number} Distance, in pixels, from the topbar to the top of page
   */
  okApp.getLoginPosition = function () {
    var breakpoint = window.ResponsiveImages.getBreakpoint();
    var topbarTop = (breakpoint === 'lg') ? $('.main-header').outerHeight() : 0;
    var toolbarCms = $('#toolbar-administration');
    if (toolbarCms.length > 0) {
      var toolbarBar = $('.toolbar-bar').outerHeight();
      var toolbarSecondary = $('.toolbar-tray.is-active').outerHeight();
      topbarTop  +=  toolbarBar + toolbarSecondary;
    }
    return topbarTop;
  };

  /**
   * Get params from url
   *
   * @param {string} name param name
   * @param {string} url url
   *
   * @return {string} return value from param
   */
  okApp.getQueryParam = function (name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  /**
   * Validate devide type, assume device type based upon display resolution and browser platform
   * @param {string} type Device type 'phone', 'tablet'
   * @see http://viewportsizes.com/
   * @return {boolean} if match with your current device.
   * @example okApp.checkMobileDevice('tablet'); returns true if the device tested is tablet.
   */
  okApp.checkMobileDevice = function (type) {
    var width = Math.max($(window).width(), $(window).height());
    var height = Math.min($(window).width(), $(window).height());
    if (okApp.checkPlatformMobile('any')) {
      switch (type) {
        case 'phone':
          return (width < 768 && height < 600);
        case 'tablet':
          return (width >= 768 && height >= 600);
        default:
          return false;
      }
    }
    else {
      return false;
    }
  };

  /**
   * Validate if the key pressed is an numeric key
   * @param {object} event Jquery keyboard event or generic browser KeyboardEvent
   * @return {boolean} return true if the key presed is numeric
   */
  okApp.isNumericKey = function (event) {
    return !(event.which !== 8 && event.which !== 0 && (event.which < 48 || event.which > 57));
  };

  /**
   * Format number according currency needed
   * @param {String} valueStr number to format
   * @param {String} numFormat country number format
   * @param {String} currency currency type
   * @param {Integer} minDecimals decimal quantity
   * @return {Integer} return formatted number
   */
  okApp.formatCurrency = function (valueStr, numFormat, currency, minDecimals) {
    if (currency === null || typeof currency === 'undefined' || currency === '') {
      return parseInt(valueStr).toLocaleString(numFormat, { minimumFractionDigits: minDecimals });
    }
    else {
      return parseInt(valueStr).toLocaleString(numFormat, {
        minimumFractionDigits: minDecimals,
        style: 'currency',
        currency: currency
      });
    }
  };

  /**
   * Check if the browser is IE
   * @return {boolean} true if the current browser is IE <= 11
   */
  okApp.isIE = function () {
    // eslint-disable-next-line
    return /*@cc_on!@*/false || !!document.documentMode; // It is the conditional compilation flag for IE(< 11) browser
  };

  /**
   * Build iframe to youtube videos
   * @param {String} youtubeId code to format
   * @return {string} return formatted string
   */
  okApp.loadYoutubeVideo = function (youtubeId) {
    var iframe = '<iframe id="' + youtubeId + '" src="https://www.youtube.com/embed/' + youtubeId + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
    return iframe;
  };

  /**
   * Build iframe to youtube videos
   * @param {String} path video path
   * @param {String} autoplay autoplay video attribute
   * @return {string} return formatted string
   */
  okApp.getEmbedVideo = function (path, autoplay) {
    var autoplayRule = (autoplay) ? autoplay : '0';
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = path.match(regExp);
    var embedUrl = (match && match[7].length === 11) ? match[7] : false;
    if (embedUrl) {
      return 'https://www.youtube.com/embed/' + embedUrl + '?autoplay=' + autoplayRule + '&modestbranding=1&rel=0&showinfo=1';
    }
  };

  /**
   * It place the page in the position of indicated element.
   *
   * @param      {Object}   element        The element
   * @param      {Object}   miliseconds    The time for the animation
   */
  okApp.scrollTopElement = function (element, miliseconds) {
    var $page = $('html, body');
    $page.stop().animate({ scrollTop: element.offset().top - okApp.getLoginPosition() }, miliseconds);
  };

  /**
   * It allows to display the Login modal for the featured Stocks buttons
   */
  okApp.attachPrivateLink = function () {
    // attach only for private web URLs.
    var privateWebURL = okApp.parseURL(drupalSettings.private_site_url);

    $('a[href^="' + privateWebURL.protocol + '//' + privateWebURL.hostname + '"]')
      .each(function () {
        $(this).on('click', function (e) {
          if (!okApp.isLoggedIn() && !drupalSettings.path.is_model) {
            e.preventDefault();
            var newSession = e.currentTarget.target === '_blank';
            okApp.displayAccessModal(e.currentTarget.href, newSession);
            return false;
          }
        });
      });
  };

  /**
   * Removes the margin of the girobox
   */
  okApp.removeCreativityGiroboxMargin = function () {
    var $giroboxSkeletonCreativity = $('.creativity-container--girobox');

    // Validate if there is a Skeleton to remove its margin
    if ($giroboxSkeletonCreativity.length) {
      $giroboxSkeletonCreativity.css('margin', 0);
    }
  };

  /**
   * Get a random UUID.
   * @returns {string}
   */
  okApp.getRandomUUID = function () {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  };

  /**
   * Functions executed after top bar is imported
   */
  function topbarAfterImport() {
    okApp.becomeMobileFlow();
  }

  /**
   * Callback to get the companyId.
   * @return {String} companyId
   */
  function getCompanyId() {
    var collectiveId = (localStorage.getItem('tb_collectiveId')) ? localStorage.getItem('tb_collectiveId') : '';
    var getValuesUrl = window.location.search.substring(1).split('&');
    var valuesUrl = [];
    var companyId = '';

    if (collectiveId) {
      collectiveId = collectiveId.replace(/Collective_/gi, '').split('-');
      companyId = collectiveId[0];
    }

    if (getValuesUrl) {
      for (var i in getValuesUrl) {
        if (getValuesUrl[i].indexOf('collective') !== -1) {
          var collectiveParam = getValuesUrl[i].split('collective=').pop();
          var decodeUrlParams = okApp.checkBase64(collectiveParam);
          if (decodeUrlParams.paramsStr) {
            valuesUrl = decodeUrlParams.paramsStr.split('&');
            for (var f in valuesUrl) {
              if (valuesUrl[f].indexOf('company') !== -1) {
                companyId = valuesUrl[f].replace(/company=/, '');
                break;
              }
            }
          }
        }
        break;
      }
    }

    return companyId;
  }


  Drupal.behaviors.objectFitImages = {
    attach: function (context, settings) {
      // Initialize object-fit-images polyfill
      objectFitImages();
    }
  };

  // Overrides the Drupal.t() function in order to handle
  // translatable strings that include the ok_content context
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

})(jQuery, Drupal, drupalSettings, window.Cookies);
;


/**
 * @file
 * OK component react Functionality.
 */

(function ($, Drupal, OkPubComponents) {
  'use strict';

  /**
   * Behavior to Model Spin Off Featured block
   */
  Drupal.behaviors.okComponentReact = {
    attach: function (context, settings, isLogged, componentName, data) {
      if (OkPubComponents) {
        var component_items = document.querySelectorAll('.ok-component-react-container[data-component-react-id]');
        var giroBoxSkeleton = document.querySelector('.girobox-skeleton');
        var highLightsSkeleton = document.querySelector('.highlight-skeleton');
        var giroboxContainer = document.querySelector('.creativity-container--girobox');
        var topbar = document.querySelector('.ok-topbar') || document.querySelector('.onboarding-topbar');
        var config = {};
        var containerId;
        var componentId;
        var dataComponent;
        var okComponentReact;

        if (data) {
          containerId = $('div[data-component-name="' + componentName + '"]').attr('id');
          componentId = componentName;
          dataComponent = data;
          // Initialize OkPubComponents class.
          try {
            okComponentReact = new OkPubComponents.default(
              componentId,
              dataComponent
            );
          }
          catch (err) {
            hideSkeletonBlock(giroBoxSkeleton);
            hideSkeletonBlock(highLightsSkeleton);
          }
          // Render react component in container_id container.
          okComponentReact.render(containerId);
          // Hide preloader message after component is rendered.
          $('.user-segment__preloader--component').hide();
        }
        else {
          for (var index = 0; index < component_items.length; index++) {
            var block_id = component_items[index].dataset.componentReactId;
            config = drupalSettings.ok_component_react[block_id];
            componentId = config.component_id;
            containerId = config.container_id;
            dataComponent = config.data;
            // TODO: remove this validation to use service
            if ( typeof okApp !== 'undefined' && okApp.isCustomer()  && block_id === 'discount_subhome_block' && config.data.creativity_client) {
              dataComponent.data = (config.data.creativity_client.length > 0) ? config.data.creativity_client : dataComponent.data;
              // CMS Functions Modal Login and offlogTokenCookie
              dataComponent.displayAccessModal = function (redirectURL) {
                return okApp.displayAccessModal(redirectURL);
              };
              dataComponent.isCustomer = okApp.isCustomer();
            }
            // Replace the cta url with the link to private in the discounts
            // creativity component.
            if (typeof okApp !== 'undefined' && okApp.isCustomer() && block_id === 'discount_subhome_block' && typeof dataComponent.data !== 'undefined') {
              $.each(dataComponent.data, function (index, element) {
                if (typeof element.creativity_type === 'string' && element.creativity_type === 'creativity_discount' && typeof element.content.discount_content.discount_page !== 'undefined') {
                  dataComponent.data[index].content.cta.url = element.content.discount_content.discount_page;
                }
              });
            }
            // Initialize OkPubComponents class.
            okComponentReact = new OkPubComponents.default(
              componentId,
              dataComponent
            );
            // Render react component in container_id container.
            okComponentReact.render(containerId);
            // Hide preloader message after component is rendered.
            $('.user-segment__preloader--component').hide();
            hideSkeletonBlock(giroBoxSkeleton);
            hideSkeletonBlock(highLightsSkeleton);
          }
        }
      }
    }
  };

  /**
   * 
   * Behavior for add margin-top to the filter discounts in breakpoint mobile. To avoid overlapping with the topbar.
  */

  Drupal.behaviors.okStickyFilterDiscounts = {
    attach: function (context, settings) {
      $(window).once('ok-sticky-filter-discounts').on('scroll', function () {
        $('.discount-module__category-list--mobile').each(function () {
          if ($(window).scrollTop() <= okApp.getLoginPosition() + $('.promotion-all__tabs').height()) {
            $('.discount-module__category-list--mobile').css('margin-top', '');
          }
          else {
            $('.discount-module__category-list--mobile').css('margin-top', okApp.getLoginPosition());
          }
        });
      });
    }
  };

  /*
   * This function hides the provided skeleton node
   * in the provided timeout
  */
  function hideSkeletonBlock(skeleton, timeout) {
    if (!timeout) {
      timeout = 1000;
    }
    if (!skeleton) {
      return;
    }
    setTimeout(function () {
      $(skeleton).fadeOut('slow');
    }, timeout);
  }
})(jQuery, Drupal, this.OkPubComponents);
;
(function ($, _, Drupal) {
  'use strict';

  /**
   * Behavior to clean the field values seleted
   */
  Drupal.behaviors.POSelected = {
    attach: function (context, settings) {
      $('#edit-field-po-ids').once('po-seleted').on('change', function () {
        $('.field--name-field-creativity-location').each(function () {
          $(this).find('[data-field-location="field-location"]').each(function () {
            var $selector = $(this);
            $selector.trigger('change');
          });
        });
      });
    }
  };
})(jQuery, _, Drupal);
;
var OKCreativitySegmentationApp = OKCreativitySegmentationApp || {};

(function ($, OKCreativitySegmentationApp, cookies) {

  'use strict';

  var creativityData = (drupalSettings.segmentation) ? drupalSettings.segmentation.default_content : {};
  var locationsMap = [];

  // Import library helper
  OKCreativitySegmentationApp.importLib = function (libPath, callback) {
    var newLib = document.createElement('script');
    newLib.onload = callback;
    newLib.src = libPath;
    document.head.appendChild(newLib);
  };

  /**
   * Use the OP id to find the match with the variant content
   * @param {Array} variantsArray object with segmentation variants .
   * @return {Object} match variant
   */
  OKCreativitySegmentationApp.match = function (variantsArray) {
    var rtrn = false;
    if (variantsArray === null) {
      return false;
    }
    var hasCollective = okApp.getStorageItem('tb_has_collective');
    var idCollective = (hasCollective === 'true')
      ? okApp.getStorageItem('tb_collectiveId')
      : 'customers';
    var ivnt;

    function matchVariant(key) {
      var matchedVariant;
      for (ivnt = 0; ivnt < variantsArray.length; ivnt++) {
        var variant = variantsArray[ivnt];
        if (variant === key) {
          matchedVariant = variant;
          break;
        }
      }
      return matchedVariant;
    }

    if (idCollective) {
      rtrn = matchVariant(idCollective);
    }
    if (!rtrn) {
      rtrn = matchVariant('customers');
    }
    return rtrn;
  };

  /**
 * validate response from API when it contains discounts elements
 * @param  {Object} response data from API response
 * @return {Object} response
 */
  OKCreativitySegmentationApp.validateResponse = function (response) {
    // if response has discount elements, removing the invalid ones
    // to avoid breaking the discounts component
    var discountCreativityType = 'creativity_discount';
    var responseHasDiscounts = false;

    // checking if response has discount elements
    for (var i = 0; i < response.length; i++) {
      if (response[i].creativity_type === discountCreativityType) {
        responseHasDiscounts = true;
      }
    }

    if (responseHasDiscounts) {
      // validating properly data from array
      return response.filter(function (item) {
        var itemIsDiscount = item.creativity_type === discountCreativityType;
        var itemCategoryIsOk = item.content.discount_content ? item.content.discount_content.category !== '' : false;

        return (itemIsDiscount && itemCategoryIsOk || item.creativity_type !== discountCreativityType);
      });
    }
    else {
      return response;
    }
  };

  /**
   * Use the OP id to find the match with the variant content
   * @param {Array} locationsMap Array with the location information.
   */
  OKCreativitySegmentationApp.getCreativityData = function (locationsMap) {
    var endpoint;
    var responseInfo = {};
    var baseApiUrl = drupalSettings.base_api_url;
    var settings = {};
    var locations = [];
    // Parsing location ids
    locationsMap.map(function (item, index) {
      var locationId = item.location_id;
      // checking if location_id param is in right format (it should not have commas),
      // if not, separating locations and adding each one to array, so the service can respose properly
      if (locationId.indexOf(',') !== -1) {
        var locationSpitted = locationId.split(',');
        locationSpitted.map(function (itemSplitted) {
          locations.push(itemSplitted);
        });
      }
      else {
        locations.push(locationId);
      }
    });

    // TODO: remove this validation to use service
    var servicesDisable = true;

    if (servicesDisable) {
      OKCreativitySegmentationApp.getSegmentationDataByVariant();
    }
    else {
      endpoint = baseApiUrl + '/commercial-offers/offer/propositions';
      settings.url = endpoint;
      settings.type = 'POST';
      settings.cache = false;
      settings.contentType = 'application/json';
      settings.headers = {
        version: '2',
        openBankAuthToken: JSON.parse(decodeURI(cookies.get('tokenCredential')))
      };
      settings.data = JSON.stringify({
        channel: 'public',
        lang: drupalSettings.path.currentLanguage,
        locations: locations
      });

      $.ajax(settings)
        .done(function (response) {
          // Empty data response from creativity service
          if (response.length === 0) {
            responseInfo.hasData = false;
          }
          else {
            var validResponse = OKCreativitySegmentationApp.validateResponse(response);

            responseInfo.hasData = true;
            responseInfo.data = validResponse;
          }
          // Init promotionItems for promos filtering
          if (locations.indexOf("A.7.1") !== -1) {
            okApp.promotionItems = responseInfo;
          }
          OKCreativitySegmentationApp.getSegmentationDataByVariant(responseInfo);
        })
        .fail(function () {
          responseInfo.hasData = false;
          OKCreativitySegmentationApp.getSegmentationDataByVariant(responseInfo);
        });
    }
  };

  /**
 * Use the OP id to find the match with the variant content
 * @param {Array} variantsArray object with segmentation variants .
 * @return {Object} match variant
 */
  OKCreativitySegmentationApp.match = function (variantsArray) {
    var rtrn = false;
    var hasCollective = okApp.getStorageItem('tb_has_collective');
    var idCollective = (hasCollective === 'true')
      ? okApp.getStorageItem('tb_collectiveId')
      : 'customers';
    var ivnt;

    function matchVariant(key) {
      var matchedVariant;
      for (ivnt = 0; ivnt < variantsArray.length; ivnt++) {
        var variant = variantsArray[ivnt];
        if (variant === key) {
          matchedVariant = variant;
          break;
        }
      }
      return matchedVariant;
    }

    if (idCollective) {
      rtrn = matchVariant(idCollective);
    }
    if (!rtrn) {
      rtrn = matchVariant('customers');
    }
    return rtrn;
  };

  /**
   * put json the placeholder the respective html, call for analytics
   * and save to cookie
   * @param  {Object} responseObj data from API response
   * @return {Boolean} break segmentation replace
   */
  OKCreativitySegmentationApp.getSegmentationDataByVariant = function (responseObj) {
    var servicesDisable = true;
    // TODO: remove this validation to use service
    if (!servicesDisable) {
      $('.user-segment__preloader').hide();
      $('[data-gtns-segmentation-variant]').show();
    }
    else {
      if (drupalSettings.ok_omnichannel) {
        var variantsArray = creativityData.promotion_landing;
        var idCollective = OKCreativitySegmentationApp.match(variantsArray);
        if (!idCollective) {
          OKCreativitySegmentationApp.display(null, responseObj);
          return false;
        }
        $.ajax({
          url: 'subhome-content-view/promotion_landing/' + idCollective,
          type: 'GET',
          headers: {
            version: '2'
          },
          dataType: 'json'
        })
          .done(function (responseMarkup) {
            OKCreativitySegmentationApp.display(responseMarkup, responseObj);
          })
          .fail(function () {
            $('.user-segment__preloader').hide();
            $('[data-gtns-segmentation-variant]').show();
          });
      }
      else {
	      $.ajax({
		      url: 'subhome-content-view/promotion_landing/customers',
		      type: 'GET',
		      headers: {
			      version: '2'
		      },
		      dataType: 'json'
	      })
	      .done(function (responseMarkup) {
		      OKCreativitySegmentationApp.display(null, responseObj);
	      })
	      .fail(function () {
		      OKCreativitySegmentationApp.display(null, responseObj);
	      });
      }
    }
  };

  /**
   * Map response from service to initilize the promotion card component
   * @param  {Object} dataApi data from API response
   * @return {Array} promotionApi
   */
  OKCreativitySegmentationApp.mapResponseObject = function (dataApi) {
    var promotionData = [];
    for (var cardItem in dataApi) {
      if (Object.prototype.hasOwnProperty.call(dataApi, cardItem)) {
        var content = dataApi[cardItem].content;
        if (content) {
          var promotionApi = {};
          var promoCardContent = content.promotion_card_content;
          promotionApi.title = content.title;
          promotionApi.description = content.description.body;
          promotionApi.promotion_reference = {
            url: promoCardContent.promotion_page.url
          };
          // Map cta data
          promotionApi.cta = content.cta;
          promotionApi.cta.title = content.cta.text;
          promotionApi.cta.color = content.cta.color_name;
          promotionApi.cta.newTab = (content.cta.options.attributes) ? content.cta.options.attributes.new_tab : null;
          promotionApi.cta.ghost = content.cta.ghost_cta.enabled;
          promotionApi.cta.ghost_contrast = content.cta.ghost_cta.contrast;
          promotionApi.cta.icon = {
            enable: content.cta.font_icon.enabled,
            font_icon: content.cta.font_icon.icon,
            icon_only: content.cta.font_icon.icon_only,
            icon_contrast: content.cta.font_icon.contrast,
            alignment: content.cta.font_icon.alignment
          };
          // Map link data
          promotionApi.link = content.link;
          promotionApi.link.title = content.link.text;
          promotionApi.link.color = content.link.color_name;
          promotionApi.link.newTab = (content.link.options.attributes) ? content.link.options.attributes.new_tab : null;
          promotionApi.link.ghost = content.link.ghost_cta.enabled;
          promotionApi.link.ghost_contrast = content.link.ghost_cta.contrast;
          promotionApi.link.icon = {
            enable: content.link.font_icon.enabled,
            font_icon: content.link.font_icon.icon,
            icon_only: content.link.font_icon.icon_only,
            icon_contrast: content.link.font_icon.contrast,
            alignment: content.link.font_icon.alignment
          };
          // Map background data
          promotionApi.background = {
            bg_type: promoCardContent.background_type
          };
          if (promoCardContent.background_type === 'color') {
            promotionApi.background.color = promoCardContent.background_color_name;
          }
          else {
            promotionApi.background.small_image = content.image_small;
            promotionApi.background.medium_image = content.image_medium;
            promotionApi.background.large_image = content.image_large;
          }
          // Map lastDays data
          var lastDays = promoCardContent.promotion_page.last_days;
          if (lastDays) {
            promotionApi.promotion_reference.last_days = lastDays;
            promotionApi.promotion_reference.last_days.color = lastDays.color_name;
            promotionApi.promotion_reference.last_days.icon.color = lastDays.icon.color_name;
            promotionApi.promotion_reference.last_days.text_color = lastDays.text_color_name;
          }

          var validPeriod = promoCardContent.promotion_page.valid_period;
          if (validPeriod) {
            promotionApi.promotion_reference.valid_period = validPeriod;
          }

          var promoAppEnable = promoCardContent.app_enabled;
          if (promoAppEnable) {
            var promoAppContent = promoCardContent.app_content;
            promotionApi.promo_app = {
              enable: promoAppEnable,
              description: promoAppContent.description,
              promotion_code: promoCardContent.promotion_code,
              background_image: content.image_android,
              app_cta_alignment: '',
              link: promoAppContent.link,
              cta: promoAppContent.cta
            };
            // Map cta app data
            promotionApi.promo_app.cta.title = promoAppContent.cta.text;
            promotionApi.promo_app.cta.color = promoAppContent.cta.color_name;
            // Map link app data
            promotionApi.promo_app.link.title = promoAppContent.link.text;
            promotionApi.promo_app.link.color = promoAppContent.link.color_name;

            promotionData.push(promotionApi);
          }
        }
      }
    }
    return promotionData;
  };

  /**
   * Map response from service to initilize the girobox carousel component
   * @param  {Object} data girobox data from API response
   * @return {Object} componentData
   */
  OKCreativitySegmentationApp.mapGiroboxObject = function (data) {
    var componentData = {
      duration: 2000,
      items: []
    };

    // mapping response into a new object in order to use it with react
    data.forEach(function (item, index) {
      // parsing link
      var link = {};
      link.field_link_url = item.content.link ? item.content.link : null;
      // parsing background info
      var background = {};
      // parsing background type
      background.bg_type = $.isEmptyObject(item.content.girobox_slide_content.video) ? 'image' : 'video';

      if (background.bg_type === 'video') {
        background.video = item.content.girobox_slide_content.video ? item.content.girobox_slide_content.video : null;
        background.image = {};
      }
      else {
        background.image.small = item.content.image_small ? item.content.image_small : null;
        background.image.medium = item.content.image_medium ? item.content.image_medium : null;
        background.image.large = item.content.image_large ? item.content.image_large : null;
        background.image.alt = item.content.alt_for_images ? item.content.alt_for_images : null;
        background.video = {};
      }

      componentData.items.push({
        title: item.content.title,
        description: item.content.description.body,
        promotion_reference: '',
        background: background,
        cta: item.content.cta,
        link: link
      });
    });

    return componentData;
  };

  /**
   * Map response from service to initilize the highlight block home component
   * @param  {Object} data highlight data from API response
   * @return {Object} componentData
   */
  OKCreativitySegmentationApp.mapHighlightBlockObject = function (data) {
    var dataApiHL = {items: []};
    dataApiHL['items'] = data;

    return dataApiHL;
  };

  /**
   * put son the placeholder the respective html, call for analytics
   * and save to cookie
   * @param  {Object} dataMarkup Markup from default content associeted
   * @param  {Object} dataApi data by matched variant
   */
  OKCreativitySegmentationApp.display = function (dataMarkup, dataApi) {
    var dataForComponent;
    var filteredData;
    var servicesDisable = true;
    locationsMap.forEach(function (item, index) {
      var $container = $('[data-gtns-segmentation-variant="' + item.component_name + '"]');
      // TODO: remove this validation to use service
      if (!servicesDisable) {
        filteredData = OKCreativitySegmentationApp.filter(item.location_id, dataApi);
      }
      if ($container) {
        if (!drupalSettings.ok_omnichannel) {
          // TODO: remove this validation to use service
          if (!servicesDisable) {
            switch (item.component_name) {
              case 'highlight-block':
                dataForComponent = OKCreativitySegmentationApp.mapHighlightBlockObject(filteredData);
                break;
              case 'girobox-carousel':
                dataForComponent = OKCreativitySegmentationApp.mapGiroboxObject(filteredData);
                break;
              default:
                dataForComponent = dataApi;
                break;
            }
          }
          // TODO: remove this validation to use service
          if (servicesDisable) {
            Drupal.behaviors.okComponentReact.attach(null, null, true);
          }
          else {
            Drupal.behaviors.okComponentReact.attach(null, null, item.component_name, dataForComponent);
          }
        }
        else {
          // replace node content
          if (dataMarkup) {
            $container = $('[data-gtns-segmentation-variant="promotions_subhome"]');
            $container.html(dataMarkup['#markup']);
          }
          // TODO: remove this validation to use service
          if (servicesDisable) {
            Drupal.behaviors.creativityRender.attach(null, null, true);
          }
          else {
            filteredData = OKCreativitySegmentationApp.mapResponseObject(filteredData);
            Drupal.behaviors.creativityRender.attach($container, drupalSettings, filteredData);
          }
        }
      }
    });
    $('.user-segment__preloader').hide();
    $('[data-gtns-segmentation-variant]').show();
  };


  /**
  * Filter data by location
  * @param  {string} query Location Id
  * @param  {Object} dataApi Array
  * @return {Object} Filtered data
  */
  OKCreativitySegmentationApp.filter = function (query, dataApi) {
    return dataApi.data.filter(function (el) {
      return el.location_id === query;
    });
  };

  /**
   * execute the general process
  */
  OKCreativitySegmentationApp.run = function () {
    var dataLocationId;
    var offlogTokenCookie = cookies.get('offlogToken');
    var hasCollective = okApp.getStorageItem('tb_has_collective');
    if ((typeof offlogTokenCookie !== 'undefined') && (hasCollective !== null)) {
      $('.user-segment__preloader').show();
      // This condition is to avoid getting the white screen while loading when logged in
      if(!drupalSettings.path.isFront) {
        $('[data-gtns-segmentation-variant]').hide();
      }
      $('.promotion-all--segmentation-variant').show();

      // mapping creativities
      $('div[data-location-id]').map(function (index, item) {
        dataLocationId = item.attributes['data-location-id']['value'];
        var componentName = item.attributes['data-component-name']['value'];
        // Check if location exist in array
        var isNewLocation = locationsMap.filter(function (elem) {
          return elem.location_id === dataLocationId;
        });
        if (isNewLocation.length === 0) {
          // pushing attributes to object
          locationsMap.push({location_id: dataLocationId, component_name: componentName});
        }
      });
      OKCreativitySegmentationApp.getCreativityData(locationsMap);
    }
  };

})(jQuery, OKCreativitySegmentationApp, window.Cookies);
;
var OKContentSegmentationApp = OKContentSegmentationApp || {};
var AtmsApp = AtmsApp || {};
var CardsApp = CardsApp || {};
var elasticSlider = elasticSlider || {};
var ResponsiveImages = ResponsiveImages || {};


(function () {
  'use strict';

  OKContentSegmentationApp.attach = function ($container) {
    // check if there is a ATMs block and initialize it
    if (AtmsApp.initialize) {
      AtmsApp.initialize();
    }

    // check if there is an Product Cards Search section and initialize it
    if (CardsApp.initializeModule) {
      CardsApp.initializeModule();
    }

    // check if the elasticSlider object is declared and register it
    if (elasticSlider.addGlobalNamespace) {
      elasticSlider.addGlobalNamespace();
    }
    // re-attach behaviors
    Drupal.attachBehaviors($container);

    // run Interchange for the new contents
    if (ResponsiveImages.update) {
      ResponsiveImages.update();
    }
  };
})();
;
var OKContentSegmentationApp = OKContentSegmentationApp || {};

(function () {

  'use strict';

  /**
  * Send Analytics: Create hit of type testrender to push into Analytics GTNS model
  */
  OKContentSegmentationApp.sendAnalytics = function () {
    if (typeof GTNS !== 'undefined') {
      // Call function to track hit type testrender
      GTNS.trackTestRender();
      // Call function to track events while segmentation is running
      GTNS.trackEvents();
    }
  };
})();
;
var OKContentSegmentationApp = OKContentSegmentationApp || {};

(function (cookies) {

  'use strict';


  var testEntity = drupalSettings.segmentation;

  OKContentSegmentationApp.cookieVariant = function () {
    var rtrn = false;
    var idcookie = cookies.get('ok-content-segment' + testEntity.id);
    var ivnt;
    if (idcookie) {
      for (ivnt = 0; ivnt < testEntity.variants.length; ivnt++) {
        if (testEntity.variants[ivnt].id.toString() === idcookie.toString()) {
          rtrn = testEntity.variants[ivnt];
          break;
        }
      }
    }
    return rtrn;
  };

  OKContentSegmentationApp.saveCookie = function (what, segmentationType) {
    cookies.set('ok-content-segment-' + segmentationType + testEntity.id, what.id, {expire: 1, secure: true});
  };
})(window.Cookies);
;

var OKContentSegmentationApp = OKContentSegmentationApp || {};

(function ($, OKContentSegmentationApp, cookies) {

  'use strict';

  var testEntity = drupalSettings.segmentation;

  // Import library helper
  OKContentSegmentationApp.importLib = function (libPath, callback) {
    var newLib = document.createElement('script');
    newLib.onload = callback;
    newLib.src = libPath;
    document.head.appendChild(newLib);
  };

  /**
   * put json the placeholder the respective html, call for analytics
   * and save to cookie
   * @param  {Object} what the variant
   * @param  {Object} segmentationType type of entity that has segmented
   * @return {Object} data for cookie
   */
  OKContentSegmentationApp.getSegmentationDataByVariant = function (what, segmentationType) {

    if (!what) {
      $('[data-gtns-segmentation-variant]').show();
      $('[data-gtns-segmentation-variant]').attr('data-gtns-segmentation-variant', 'prospect');
      $('.user-segment__preloader').hide();
      return false;
    }

    $.ajax({
      type: 'GET',
      url: what.uri,
      async: false,
      dataType: 'json',
      error: function (err) {
        // TODO: something with this error
      }
    }).done(function (data) {
      if (segmentationType === 'node') {
        OKContentSegmentationApp.display(data);
      }
      if (segmentationType === 'menu') {
        okApp.initializeTopbar(data);
      }
    }).fail(function () {
      contentManager.logMessage('Variant do not found');
      okApp.initializeTopbar();
    });
    OKContentSegmentationApp.saveCookie(what, segmentationType);
  };

  /**
   * put son the placeholder the respective html, call for analytics
   * and save to cookie
   * @param  {Object} data data by matched variant
   */
  OKContentSegmentationApp.display = function (data) {
    var $container = $('[data-gtns-segmentation-id="' + drupalSettings.segmentation.node.id + '"]');
    if ($container) {

      $('.user-segment__preloader').hide();
      // replace node content
      $container.html(data['#markup']);

      // check if its a highlight block, replace the ABT placeholder with it and clone needed attributes
      // TODO: find a better way to handle cases like this, maybe this replacement could be done always?
      if (drupalSettings.segmentation.entity_type === 'node' && drupalSettings.segmentation.entity_bundle === 'highlights') {
        $container.each(function (key, item) {
          var $containerItem = $(item);
          var $highlightBlock = $containerItem.find('[data-gtns-component-type="node--highlight"]');
          $highlightBlock.removeClass('elastic-slider__slide');
          $containerItem.replaceWith(function () {
            return $(this).find('[data-gtns-component-type="node--highlight"]');
          });
        });
      }
      // Attach behaviors after re-render
      Drupal.attachBehaviors();
      var analyticsPath = (drupalSettings.ok_analytics) ? drupalSettings.ok_analytics.path_module.core : '';
      // re-attach behaviors
      OKContentSegmentationApp.attach($container);
      // check if Analytics module is set to import
      if (analyticsPath.length) {
        OKContentSegmentationApp.importLib(analyticsPath, function () {
          // send to Analytics
          OKContentSegmentationApp.sendAnalytics();
        });
      }
    }
  };

  /**
   * Use the OP id to find the match with the varianrt content
   * @param {Object} variantsObj object with segmentation variants .
   * @return {Object} match variant
   */
  OKContentSegmentationApp.match = function (variantsObj) {
    var rtrn = false;
    var hasCollective = okApp.getStorageItem('tb_has_collective');
    var idCollective = (hasCollective === 'true')
      ? okApp.getStorageItem('tb_collectiveId')
      : 'customers';
    var ivnt;

    function matchVariant(key) {
      var matchedVariant;
      for (ivnt = 0; ivnt < variantsObj.length; ivnt++) {
        var variant = variantsObj[ivnt];
        var audiences = variant.audiences;
        if (variant.original === 1) {
          continue;
        }
        if (audiences[key]) {
          matchedVariant = variantsObj[ivnt];
          break;
        }
      }
      return matchedVariant;
    }

    if (idCollective) {
      rtrn = matchVariant(idCollective);
    }
    if (!rtrn) {
      rtrn = matchVariant('customers');
    }
    return rtrn;
  };

  /**
   * execute the general process
   * @param {string} audience identify which audience shows.
   * @return {boolean} false to break
   */
  OKContentSegmentationApp.run = function (audience) {
    var matchVariant;
    var segmentType;
    var offlogTokenCookie = cookies.get('offlogToken');
    var tokenCredentialCookie = cookies.get('tokenCredential');
    var hasCollective = okApp.getStorageItem('tb_has_collective');
    const dataSegmentation = document.querySelector('[data-gtns-segmentation-variant]');

    // check audience to choose topbar
    if (audience === 'prospect' || (typeof tokenCredentialCookie === 'undefined')) {
      // Show default segment.
      $('.user-segment__preloader').hide();
      if (dataSegmentation) {
        dataSegmentation.style.display = 'block';
      }
      const actionsHolder = document.querySelector('.openbank-topbar__actions');
      if (actionsHolder) {
        actionsHolder.classList.remove('openbank-topbar__actions--hide-lg');
      }
      okApp.CookiesPolicies();
      return false;
    }
    else if (audience !== 'prospect' && (typeof tokenCredentialCookie !== 'undefined') && (!testEntity || $.isEmptyObject(testEntity.menu))) { 
      // Show default segment.
      $('[data-topbar-type="model"]').hide();
      $('.user-segment__preloader').hide();
      if (dataSegmentation) {
        dataSegmentation.style.display = 'block';
      }
      const onboardingTopbar = document.querySelector('.ok-onboarding-topbar');
      // check if is a page with onboarding topbar
      if (!onboardingTopbar) {
        okApp.initializeTopbar();
      }
      else {
        okApp.CookiesPolicies();
      }
    }
    else {
      // hide content and show preloader.
      $('[data-gtns-segmentation-variant]').hide();
      $('.user-segment__preloader').show();
    }

    if ((typeof offlogTokenCookie !== 'undefined') && (typeof tokenCredentialCookie !== 'undefined') && (!$.isEmptyObject(testEntity)) && (hasCollective !== null)) {
      if (!$.isEmptyObject(testEntity.menu) && testEntity.menu.variants.length > 0) {
        segmentType = testEntity.menu.entity_type;
        matchVariant = OKContentSegmentationApp.match(testEntity.menu.variants);
        if (typeof matchVariant === 'undefined') {
          const onboardingTopbar = document.querySelector('.ok-onboarding-topbar');
          // check if is a page with onboarding topbar
          if (!onboardingTopbar) {
            okApp.initializeTopbar();
          }
          else {
            okApp.CookiesPolicies();
          }
        }
        else {
          OKContentSegmentationApp.getSegmentationDataByVariant(matchVariant, segmentType);
        }
      }
      if (!$.isEmptyObject(testEntity.node) && testEntity.node.entity_bundle !== 'promotions_subhome' && testEntity.node.variants.length > 0) {
        $('[data-gtns-segmentation-variant]').hide();
        segmentType = testEntity.node.entity_type;
        matchVariant = OKContentSegmentationApp.match(testEntity.node.variants);
        if (typeof matchVariant === 'undefined') {
          $('.user-segment__preloader').hide();
          if (dataSegmentation) {
            dataSegmentation.style.display = 'block';
          }
          return false;
        }
        OKContentSegmentationApp.getSegmentationDataByVariant(matchVariant, segmentType);
      }
    }
  };
})(jQuery, OKContentSegmentationApp, window.Cookies);
;
