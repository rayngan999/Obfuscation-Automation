var mod_pagespeed_2sf4IrRtkK = ";(function(d,l,n){d.anythingSlider=function(m,p){var a=this,b,k;a.el=m;a.$el=d(m).addClass(\"anythingBase\").wrap('<div class=\"anythingSlider\"><div class=\"anythingWindow\" /></div>');a.$el.data(\"AnythingSlider\",a);a.init=function(){a.options=b=d.extend({},d.anythingSlider.defaults,p);a.initialized=!1;d.isFunction(b.onBeforeInitialize)&&a.$el.bind(\"before_initialize\",b.onBeforeInitialize);a.$el.trigger(\"before_initialize\",a);d('\\x3c!--[if lte IE 8]>\u003cscript>jQuery(\"body\").addClass(\"as-oldie\");\\x3c\/script><![endif]--\\x3e').appendTo(\"body\").remove();a.$wrapper=a.$el.parent().closest(\"div.anythingSlider\").addClass(\"anythingSlider-\"+b.theme);a.$outer=a.$wrapper.parent();a.$window=a.$el.closest(\"div.anythingWindow\");a.$win=d(l);a.$controls=d('<div class=\"anythingControls\"></div>');a.$nav=d('<ul class=\"thumbNav\"><li><a><span></span></a></li></ul>');a.$startStop=d('<a href=\"#\" class=\"start-stop\"></a>');(b.buildStartStop||b.buildNavigation)&&a.$controls.appendTo(b.appendControlsTo&&d(b.appendControlsTo).length?d(b.appendControlsTo):a.$wrapper);b.buildNavigation&&a.$nav.appendTo(b.appendNavigationTo&&d(b.appendNavigationTo).length?d(b.appendNavigationTo):a.$controls);b.buildStartStop&&a.$startStop.appendTo(b.appendStartStopTo&&d(b.appendStartStopTo).length?d(b.appendStartStopTo):a.$controls);a.runTimes=d(\".anythingBase\").length;a.regex=b.hashTags?RegExp(\"panel\"+a.runTimes+\"-(\\\\d+)\",\"i\"):null;1===a.runTimes&&a.makeActive();a.flag=!1;b.autoPlayLocked&&(b.autoPlay=!0);a.playing=b.autoPlay;a.slideshow=!1;a.hovered=!1;a.panelSize=[];a.currentPage=a.targetPage=b.startPanel=parseInt(b.startPanel,10)||1;b.changeBy=parseInt(b.changeBy,10)||1;k=(b.mode||\"h\").toLowerCase().match(/(h|v|f)/);k=b.vertical?\"v\":(k||[\"h\"])[0];b.mode=\"v\"===k?\"vertical\":\"f\"===k?\"fade\":\"horizontal\";\"f\"===k&&(b.showMultiple=1,b.infiniteSlides=!1);a.adj=b.infiniteSlides?0:1;a.adjustMultiple=0;b.playRtl&&a.$wrapper.addClass(\"rtl\");b.buildStartStop&&a.buildAutoPlay();b.buildArrows&&a.buildNextBackButtons();a.$lastPage=a.$targetPage=a.$currentPage;if(b.expand){if(!0===b.aspectRatio)b.aspectRatio=a.$el.width()/a.$el.height();else if(\"string\"===typeof b.aspectRatio&&-1!==b.aspectRatio.indexOf(\":\")){var c=b.aspectRatio.split(\":\");b.aspectRatio=c[0]/c[1]}0<b.aspectRatio&&1<b.showMultiple&&(b.aspectRatio*=b.showMultiple)}a.updateSlider();b.expand&&(a.$window.css({width:\"100%\",height:\"100%\"}),a.checkResize());d.isFunction(d.easing[b.easing])||(b.easing=\"swing\");b.pauseOnHover&&a.$wrapper.hover(function(){a.playing&&(a.$el.trigger(\"slideshow_paused\",a),a.clearTimer(!0))},function(){a.playing&&(a.$el.trigger(\"slideshow_unpaused\",a),a.startStop(a.playing,!0))});a.slideControls(!1);a.$wrapper.bind(\"mouseenter mouseleave\",function(b){d(this)[\"mouseenter\"===b.type?\"addClass\":\"removeClass\"](\"anythingSlider-hovered\");a.hovered=\"mouseenter\"===b.type?!0:!1;a.slideControls(a.hovered)});d(n).keyup(function(c){if(b.enableKeyboard&&a.$wrapper.hasClass(\"activeSlider\")&&!c.target.tagName.match(\"TEXTAREA|INPUT|SELECT\")&&(\"vertical\"===b.mode||38!==c.which&&40!==c.which))switch(c.which){case 39:case 40:a.goForward();break;case 37:case 38:a.goBack()}});a.currentPage=(b.hashTags?a.gotoHash():\"\")||b.startPanel||1;a.gotoPage(a.currentPage,!1,null,-1);var f=\"slideshow_resized slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed\".split(\" \");d.each(\"onSliderResize onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete\".split(\" \"),function(c,h){d.isFunction(b[h])&&a.$el.bind(f[c],b[h])});d.isFunction(b.onSlideComplete)&&a.$el.bind(\"slide_complete\",function(){setTimeout(function(){b.onSlideComplete(a)},0);return!1});a.initialized=!0;a.$el.trigger(\"initialized\",a);a.startStop(b.autoPlay)};a.updateSlider=function(){a.$el.children(\".cloned\").remove();a.navTextVisible=\"hidden\"!==a.$nav.find(\"span:first\").css(\"visibility\");a.$nav.empty();a.currentPage=a.currentPage||1;a.$items=a.$el.children();a.pages=a.$items.length;a.dir=\"vertical\"===b.mode?\"top\":\"left\";b.showMultiple=parseInt(b.showMultiple,10)||1;b.navigationSize=!1===b.navigationSize?0:parseInt(b.navigationSize,10)||0;a.$items.find(\"a\").unbind(\"focus.AnythingSlider\").bind(\"focus.AnythingSlider\",function(c){var f=d(this).closest(\".panel\"),f=a.$items.index(f)+a.adj;a.$items.find(\".focusedLink\").removeClass(\"focusedLink\");d(this).addClass(\"focusedLink\");a.$window.scrollLeft(0).scrollTop(0);-1!==f&&(f>=a.currentPage+b.showMultiple||f<a.currentPage)&&(a.gotoPage(f),c.preventDefault())});1<b.showMultiple&&(b.showMultiple>a.pages&&(b.showMultiple=a.pages),a.adjustMultiple=b.infiniteSlides&&1<a.pages?0:b.showMultiple-1);a.$controls.add(a.$nav).add(a.$startStop).add(a.$forward).add(a.$back)[1>=a.pages?\"hide\":\"show\"]();1<a.pages&&a.buildNavigation();\"fade\"!==b.mode&&b.infiniteSlides&&1<a.pages&&(a.$el.prepend(a.$items.filter(\":last\").clone().addClass(\"cloned\")),1<b.showMultiple?a.$el.append(a.$items.filter(\":lt(\"+b.showMultiple+\")\").clone().addClass(\"cloned multiple\")):a.$el.append(a.$items.filter(\":first\").clone().addClass(\"cloned\")),a.$el.find(\".cloned\").each(function(){d(this).find(\"a,input,textarea,select,button,area,form\").attr({disabled:\"disabled\",name:\"\"});d(this).find(\"[id]\")[d.fn.addBack?\"addBack\":\"andSelf\"]().removeAttr(\"id\")}));a.$items=a.$el.addClass(b.mode).children().addClass(\"panel\");a.setDimensions();b.resizeContents?(a.$items.css(\"width\",a.width),a.$wrapper.css(\"width\",a.getDim(a.currentPage)[0]).add(a.$items).css(\"height\",a.height)):a.$win.load(function(){a.setDimensions();k=a.getDim(a.currentPage);a.$wrapper.css({width:k[0],height:k[1]});a.setCurrentPage(a.currentPage,!1)});a.currentPage>a.pages&&(a.currentPage=a.pages);a.setCurrentPage(a.currentPage,!1);a.$nav.find(\"a\").eq(a.currentPage-1).addClass(\"cur\");\"fade\"===b.mode&&(k=a.$items.eq(a.currentPage-1),b.resumeOnVisible?k.css({opacity:1,visibility:\"visible\"}).siblings().css({opacity:0,visibility:\"hidden\"}):(a.$items.css(\"opacity\",1),k.fadeIn(0).siblings().fadeOut(0)))};a.buildNavigation=function(){if(b.buildNavigation&&1<a.pages){var c,f,e,h,g;a.$items.filter(\":not(.cloned)\").each(function(q){g=d(\"<li/>\");e=q+1;f=(1===e?\" first\":\"\")+(e===a.pages?\" last\":\"\");c='<a class=\"panel'+e+(a.navTextVisible?'\"':\" \"+b.tooltipClass+'\" title=\"@\"')+' href=\"#\"><span>@</span></a>';d.isFunction(b.navigationFormatter)?(h=b.navigationFormatter(e,d(this)),\"string\"===typeof h?g.html(c.replace(/@/g,h)):g=d(\"<li/>\",h)):g.html(c.replace(/@/g,e));g.appendTo(a.$nav).addClass(f).data(\"index\",e)});a.$nav.children(\"li\").bind(b.clickControls,function(c){!a.flag&&b.enableNavigation&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.gotoPage(d(this).data(\"index\")));c.preventDefault()});b.navigationSize&&b.navigationSize<a.pages&&(a.$controls.find(\".anythingNavWindow\").length||a.$nav.before('<ul><li class=\"prev\"><a href=\"#\"><span>'+b.backText+\"</span></a></li></ul>\").after('<ul><li class=\"next\"><a href=\"#\"><span>'+b.forwardText+\"</span></a></li></ul>\").wrap('<div class=\"anythingNavWindow\"></div>'),a.navWidths=a.$nav.find(\"li\").map(function(){return d(this).outerWidth(!0)+Math.ceil(parseInt(d(this).find(\"span\").css(\"left\"),10)/2||0)}).get(),a.navLeft=a.currentPage,a.$nav.width(a.navWidth(1,a.pages+1)+25),a.$controls.find(\".anythingNavWindow\").width(a.navWidth(1,b.navigationSize+1)).end().find(\".prev,.next\").bind(b.clickControls,function(c){a.flag||(a.flag=!0,setTimeout(function(){a.flag=!1},200),a.navWindow(a.navLeft+b.navigationSize*(d(this).is(\".prev\")?-1:1)));c.preventDefault()}))}};a.navWidth=function(b,f){var e;e=Math.min(b,f);for(var d=Math.max(b,f),g=0;e<d;e++)g+=a.navWidths[e-1]||0;return g};a.navWindow=function(c){if(b.navigationSize&&b.navigationSize<a.pages&&a.navWidths){var f=a.pages-b.navigationSize+1;c=1>=c?1:1<c&&c<f?c:f;c!==a.navLeft&&(a.$controls.find(\".anythingNavWindow\").animate({scrollLeft:a.navWidth(1,c),width:a.navWidth(c,c+b.navigationSize)},{queue:!1,duration:b.animationTime}),a.navLeft=c)}};a.buildNextBackButtons=function(){a.$forward=d('<span class=\"arrow forward\"><a href=\"#\"><span>'+b.forwardText+\"</span></a></span>\");a.$back=d('<span class=\"arrow back\"><a href=\"#\"><span>'+b.backText+\"</span></a></span>\");a.$back.bind(b.clickBackArrow,function(c){b.enableArrows&&!a.flag&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.goBack());c.preventDefault()});a.$forward.bind(b.clickForwardArrow,function(c){b.enableArrows&&!a.flag&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.goForward());c.preventDefault()});a.$back.add(a.$forward).find(\"a\").bind(\"focusin focusout\",function(){d(this).toggleClass(\"hover\")});a.$back.appendTo(b.appendBackTo&&d(b.appendBackTo).length?d(b.appendBackTo):a.$wrapper);a.$forward.appendTo(b.appendForwardTo&&d(b.appendForwardTo).length?d(b.appendForwardTo):a.$wrapper);a.arrowWidth=a.$forward.width();a.arrowRight=parseInt(a.$forward.css(\"right\"),10);a.arrowLeft=parseInt(a.$back.css(\"left\"),10)};a.buildAutoPlay=function(){a.$startStop.html(\"<span>\"+(a.playing?b.stopText:b.startText)+\"</span>\").bind(b.clickSlideshow,function(c){b.enableStartStop&&(a.startStop(!a.playing),a.makeActive(),a.playing&&!b.autoPlayDelayed&&a.goForward(!0,b.playRtl));c.preventDefault()}).bind(\"focusin focusout\",function(){d(this).toggleClass(\"hover\")})};a.checkResize=function(b){var f=!!(n.hidden||n.webkitHidden||n.mozHidden||n.msHidden);clearTimeout(a.resizeTimer);a.resizeTimer=setTimeout(function(){var e=a.$outer.width(),d=\"BODY\"===a.$outer[0].tagName?a.$win.height():a.$outer.height();f||a.lastDim[0]===e&&a.lastDim[1]===d||(a.setDimensions(),a.$el.trigger(\"slideshow_resized\",a),a.gotoPage(a.currentPage,a.playing,null,-1));\"undefined\"===typeof b&&a.checkResize()},f?2E3:500)};a.setDimensions=function(){a.$wrapper.find(\".anythingWindow, .anythingBase, .panel\")[d.fn.addBack?\"addBack\":\"andSelf\"]().css({width:\"\",height:\"\"});a.width=a.$el.width();a.height=a.$el.height();a.outerPad=[a.$wrapper.innerWidth()-a.$wrapper.width(),a.$wrapper.innerHeight()-a.$wrapper.height()];var c,f,e,h,g=0,m={width:\"100%\",height:\"100%\"},k=1<b.showMultiple&&\"horizontal\"===b.mode?a.width||a.$window.width()/b.showMultiple:a.$window.width(),n=1<b.showMultiple&&\"vertical\"===b.mode?a.height/b.showMultiple||a.$window.height()/b.showMultiple:a.$window.height();if(b.expand){a.lastDim=[a.$outer.width(),a.$outer.height()];c=a.lastDim[0]-a.outerPad[0];f=a.lastDim[1]-a.outerPad[1];if(b.aspectRatio&&b.aspectRatio<a.width){var l=f*b.aspectRatio;l<c?c=l:(l=c/b.aspectRatio,l<f&&(f=l))}a.$wrapper.add(a.$window).css({width:c,height:f});a.height=f=1<b.showMultiple&&\"vertical\"===b.mode?n:f;a.width=k=1<b.showMultiple&&\"horizontal\"===b.mode?c/b.showMultiple:c;a.$items.css({width:k,height:n})}a.$items.each(function(l){h=d(this);e=h.children();b.resizeContents?(c=a.width,f=a.height,h.css({width:c,height:f}),e.length&&(\"EMBED\"===e[0].tagName&&e.attr(m),\"OBJECT\"===e[0].tagName&&e.find(\"embed\").attr(m),1===e.length&&e.css(m))):(\"vertical\"===b.mode?(c=h.css(\"display\",\"inline-block\").width(),h.css(\"display\",\"\")):c=h.width()||a.width,1===e.length&&c>=k&&(c=e.width()>=k?k:e.width(),e.css(\"max-width\",c)),h.css({width:c,height:\"\"}),f=1===e.length?e.outerHeight(!0):h.height(),f<=a.outerPad[1]&&(f=a.height),h.css(\"height\",f));a.panelSize[l]=[c,f,g];g+=\"vertical\"===b.mode?f:c});a.$el.css(\"vertical\"===b.mode?\"height\":\"width\",\"fade\"===b.mode?a.width:g)};a.getDim=function(c){var f,e,d=a.width,g=a.height;if(1>a.pages||isNaN(c))return[d,g];c=b.infiniteSlides&&1<a.pages?c:c-1;if(e=a.panelSize[c])d=e[0]||d,g=e[1]||g;if(1<b.showMultiple)for(e=1;e<b.showMultiple;e++)f=c+e,\"vertical\"===b.mode?(d=Math.max(d,a.panelSize[f][0]),g+=a.panelSize[f][1]):(d+=a.panelSize[f][0],g=Math.max(g,a.panelSize[f][1]));return[d,g]};a.goForward=function(c,d){a.gotoPage(a[b.allowRapidChange?\"targetPage\":\"currentPage\"]+b.changeBy*(d?-1:1),c)};a.goBack=function(c){a.gotoPage(a[b.allowRapidChange?\"targetPage\":\"currentPage\"]-b.changeBy,c)};a.gotoPage=function(c,f,e,h){!0!==f&&(f=!1,a.startStop(!1),a.makeActive());/^[#|.]/.test(c)&&d(c).length&&(c=d(c).closest(\".panel\").index()+a.adj);if(1!==b.changeBy){var g=a.pages-a.adjustMultiple;1>c&&(c=b.stopAtEnd?1:b.infiniteSlides?a.pages+c:b.showMultiple>1-c?1:g);c>a.pages?c=b.stopAtEnd?a.pages:b.showMultiple>1-c?1:c-=g:c>=g&&(c=g)}1>=a.pages||(a.$lastPage=a.$currentPage,\"number\"!==typeof c&&(c=parseInt(c,10)||b.startPanel,a.setCurrentPage(c)),f&&b.isVideoPlaying(a)||(b.stopAtEnd&&!b.infiniteSlides&&c>a.pages-b.showMultiple&&(c=a.pages-b.showMultiple+1),a.exactPage=c,c>a.pages+1-a.adj&&(c=b.infiniteSlides||b.stopAtEnd?a.pages:1),c<a.adj&&(c=b.infiniteSlides||b.stopAtEnd?1:a.pages),b.infiniteSlides||(a.exactPage=c),a.currentPage=c>a.pages?a.pages:1>c?1:a.currentPage,a.$currentPage=a.$items.eq(a.currentPage-a.adj),a.targetPage=0===c?a.pages:c>a.pages?1:c,a.$targetPage=a.$items.eq(a.targetPage-a.adj),h=\"undefined\"!==typeof h?h:b.animationTime,0<=h&&a.$el.trigger(\"slide_init\",a),0<h&&!0===b.toggleControls&&a.slideControls(!0),b.buildNavigation&&a.setNavigation(a.targetPage),!0!==f&&(f=!1),(!f||b.stopAtEnd&&c===a.pages)&&a.startStop(!1),0<=h&&a.$el.trigger(\"slide_begin\",a),setTimeout(function(d){var f,g=!0;b.allowRapidChange&&a.$wrapper.add(a.$el).add(a.$items).stop(!0,!0);b.resizeContents||(f=a.getDim(c),d={},a.$wrapper.width()!==f[0]&&(d.width=f[0]||a.width,g=!1),a.$wrapper.height()!==f[1]&&(d.height=f[1]||a.height,g=!1),g||a.$wrapper.filter(\":not(:animated)\").animate(d,{queue:!1,duration:0>h?0:h,easing:b.easing}));\"fade\"===b.mode?a.$lastPage[0]!==a.$targetPage[0]?(a.fadeIt(a.$lastPage,0,h),a.fadeIt(a.$targetPage,1,h,function(){a.endAnimation(c,e,h)})):a.endAnimation(c,e,h):(d={},d[a.dir]=-a.panelSize[b.infiniteSlides&&1<a.pages?c:c-1][2],\"vertical\"!==b.mode||b.resizeContents||(d.width=f[0]),a.$el.filter(\":not(:animated)\").animate(d,{queue:!1,duration:0>h?0:h,easing:b.easing,complete:function(){a.endAnimation(c,e,h)}}))},parseInt(b.delayBeforeAnimate,10)||0)))};a.endAnimation=function(c,d,e){0===c?(a.$el.css(a.dir,\"fade\"===b.mode?0:-a.panelSize[a.pages][2]),c=a.pages):c>a.pages&&(a.$el.css(a.dir,\"fade\"===b.mode?0:-a.panelSize[1][2]),c=1);a.exactPage=c;a.setCurrentPage(c,!1);\"fade\"===b.mode&&a.fadeIt(a.$items.not(\":eq(\"+(c-a.adj)+\")\"),0,0);a.hovered||a.slideControls(!1);b.hashTags&&a.setHash(c);0<=e&&a.$el.trigger(\"slide_complete\",a);\"function\"===typeof d&&d(a);b.autoPlayLocked&&!a.playing&&setTimeout(function(){a.startStop(!0)},b.resumeDelay-(b.autoPlayDelayed?b.delay:0))};a.fadeIt=function(a,f,e,h){var g=a.filter(\":not(:animated)\");a=0>e?0:e;if(b.resumeOnVisible)1===f&&g.css(\"visibility\",\"visible\"),g.fadeTo(a,f,function(){0===f&&g.css(\"visibility\",\"hidden\");d.isFunction(h)&&h()});else g[0===f?\"fadeOut\":\"fadeIn\"](a,h)};a.setCurrentPage=function(c,d){c=parseInt(c,10);if(!(1>a.pages||0===c||isNaN(c))){c>a.pages+1-a.adj&&(c=a.pages-a.adj);c<a.adj&&(c=1);b.buildArrows&&!b.infiniteSlides&&b.stopAtEnd&&(a.$forward[c===a.pages-a.adjustMultiple?\"addClass\":\"removeClass\"](\"disabled\"),a.$back[1===c?\"addClass\":\"removeClass\"](\"disabled\"),c===a.pages&&a.playing&&a.startStop());if(!d){var e=a.getDim(c);a.$wrapper.css({width:e[0],height:e[1]}).add(a.$window).scrollLeft(0).scrollTop(0);a.$el.css(a.dir,\"fade\"===b.mode?0:-a.panelSize[b.infiniteSlides&&1<a.pages?c:c-1][2])}a.currentPage=c;a.$currentPage=a.$items.removeClass(\"activePage\").eq(c-a.adj).addClass(\"activePage\");b.buildNavigation&&a.setNavigation(c)}};a.setNavigation=function(b){a.$nav.find(\".cur\").removeClass(\"cur\").end().find(\"a\").eq(b-1).addClass(\"cur\")};a.makeActive=function(){a.$wrapper.hasClass(\"activeSlider\")||(d(\".activeSlider\").removeClass(\"activeSlider\"),a.$wrapper.addClass(\"activeSlider\"))};a.gotoHash=function(){var c=l.location.hash,f=c.indexOf(\"&\"),e=c.match(a.regex);null!==e||/^#&/.test(c)||/#!?\\//.test(c)||/\\=/.test(c)?null!==e&&(e=b.hashTags?parseInt(e[1],10):null):(c=c.substring(0,0<=f?f:c.length),e=d(c).length&&d(c).closest(\".anythingBase\")[0]===a.el?a.$items.index(d(c).closest(\".panel\"))+a.adj:null);return e};a.setHash=function(b){var d=\"panel\"+a.runTimes+\"-\",e=l.location.hash;\"undefined\"!==typeof e&&(l.location.hash=0<e.indexOf(d)?e.replace(a.regex,d+b):e+\"&\"+d+b)};a.slideControls=function(c){var d=c?\"slideDown\":\"slideUp\",e=c?0:b.animationTime,h=c?b.animationTime:0,g=c?1:0;c=c?0:1;b.toggleControls&&a.$controls.stop(!0,!0).delay(e)[d](b.animationTime/2).delay(h);b.buildArrows&&b.toggleArrows&&(!a.hovered&&a.playing&&(c=1,g=0),a.$forward.stop(!0,!0).delay(e).animate({right:a.arrowRight+c*a.arrowWidth,opacity:g},b.animationTime/2),a.$back.stop(!0,!0).delay(e).animate({left:a.arrowLeft+c*a.arrowWidth,opacity:g},b.animationTime/2))};a.clearTimer=function(b){a.timer&&(l.clearInterval(a.timer),!b&&a.slideshow&&(a.$el.trigger(\"slideshow_stop\",a),a.slideshow=!1))};a.startStop=function(c,d){!0!==c&&(c=!1);(a.playing=c)&&!d&&(a.$el.trigger(\"slideshow_start\",a),a.slideshow=!0);b.buildStartStop&&(a.$startStop.toggleClass(\"playing\",c).find(\"span\").html(c?b.stopText:b.startText),\"hidden\"===a.$startStop.find(\"span\").css(\"visibility\")&&a.$startStop.addClass(b.tooltipClass).attr(\"title\",c?b.stopText:b.startText));c?(a.clearTimer(!0),a.timer=l.setInterval(function(){n.hidden||n.webkitHidden||n.mozHidden||n.msHidden?b.autoPlayLocked||a.startStop():b.isVideoPlaying(a)?b.resumeOnVideoEnd||a.startStop():a.goForward(!0,b.playRtl)},b.delay)):a.clearTimer()};a.init()};d.anythingSlider.defaults={theme:\"default\",mode:\"horiz\",expand:!1,resizeContents:!0,showMultiple:!1,easing:\"swing\",buildArrows:!0,buildNavigation:!0,buildStartStop:!0,toggleArrows:!1,toggleControls:!1,startText:\"Start\",stopText:\"Stop\",forwardText:\"&raquo;\",backText:\"&laquo;\",tooltipClass:\"tooltip\",enableArrows:!0,enableNavigation:!0,enableStartStop:!0,enableKeyboard:!0,startPanel:1,changeBy:1,hashTags:!0,infiniteSlides:!0,navigationFormatter:null,navigationSize:!1,autoPlay:!1,autoPlayLocked:!1,autoPlayDelayed:!1,pauseOnHover:!0,stopAtEnd:!1,playRtl:!1,delay:3E3,resumeDelay:15E3,animationTime:600,delayBeforeAnimate:0,clickForwardArrow:\"click\",clickBackArrow:\"click\",clickControls:\"click focusin\",clickSlideshow:\"click\",allowRapidChange:!1,resumeOnVideoEnd:!0,resumeOnVisible:!0,isVideoPlaying:function(d){return!1}};d.fn.anythingSlider=function(m,l){return this.each(function(){var a,b=d(this).data(\"AnythingSlider\");(typeof m).match(\"object|undefined\")?b?b.updateSlider():new d.anythingSlider(this,m):/\\d/.test(m)&&!isNaN(m)&&b?(a=\"number\"===typeof m?m:parseInt(d.trim(m),10),1<=a&&a<=b.pages&&b.gotoPage(a,!1,l)):/^[#|.]/.test(m)&&d(m).length&&b.gotoPage(m,!1,l)})}})(jQuery,window,document);";
var mod_pagespeed_dVLByetjtp = "!function(a){var b=\"waitForImages\";a.waitForImages={hasImageProperties:[\"backgroundImage\",\"listStyleImage\",\"borderImage\",\"borderCornerImage\",\"cursor\"]},a.expr[\":\"].uncached=function(b){if(!a(b).is('img[src!=\"\"]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError(\"An invalid callback was supplied.\");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\\(\\s*(['\"]?)(.*?)\\1\\s*\\)/g;e?h.find(\"*\").addBack().each(function(){var b=a(this);b.is(\"img:uncached\")&&i.push({src:b.attr(\"src\"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find(\"img:uncached\").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on(\"load.\"+b+\" error.\"+b,function(a){return g++,d.call(i.element,g,f,\"load\"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);";
var mod_pagespeed_vkKjqjBFGN = "(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method \"'+b+'\" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m=\"position: absolute !important; top: -1000 !important; \";e=e.clone().attr(\"style\",m).appendTo(\"body\");};j=function(){e.remove();};}else{var g=[];var d=\"\";var c;h=function(){c=e.parents().addBack().filter(\":hidden\");d+=\"visibility: hidden !important; display: block !important; \";if(i.absolute===true){d+=\"position: absolute !important; \";}c.each(function(){var m=a(this);var n=m.attr(\"style\");g.push(n);m.attr(\"style\",n?n+\";\"+d:d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr(\"style\");}else{o.attr(\"style\",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);";
var mod_pagespeed_Mp2WRIq_UI = "jQuery.noConflict();";
