var RESPONSIVEUI={};(function($){RESPONSIVEUI.responsiveTabs=function(){var $tabSets=$('.responsive-tabs');if(!$tabSets.hasClass('responsive-tabs--enabled')){$tabSets.addClass('responsive-tabs--enabled');var tablistcount=1;$tabSets.each(function(){var $tabs=$(this);$tabs.children(':header').addClass('responsive-tabs__heading');$tabs.children('div').addClass('responsive-tabs__panel');var $activePanel=$tabs.find('.responsive-tabs__panel--active');if(!$activePanel.length){$activePanel=$tabs.find('.responsive-tabs__panel').first().addClass('responsive-tabs__panel--active');}
$activeHeader=$activePanel.prev();if($activeHeader!==null){$activeHeader.addClass("responsive-tabs__heading--active");}
$tabs.find('.responsive-tabs__panel').not('.responsive-tabs__panel--active').hide().attr('aria-hidden','true');$activePanel.attr('aria-hidden','false');var $tabsWrapper=$('<div/>',{'class':'responsive-tabs-wrapper'});$tabs.wrap($tabsWrapper);var highestHeight=0;$tabs.find('.responsive-tabs__panel').each(function(){var tabHeight=$(this).height();if(tabHeight>highestHeight){highestHeight=tabHeight;}});var $tabList=$('<ul/>',{'class':'responsive-tabs__list','role':'tablist'});var tabcount=1;$tabs.find('.responsive-tabs__heading').each(function(){var $tabHeading=$(this);var $tabPanel=$(this).next();$tabHeading.attr('tabindex',0);var $tabListItem=$('<li/>',{'class':'responsive-tabs__list__item',html:$tabHeading.html(),id:'tablist'+tablistcount+'-tab'+tabcount,'aria-controls':'tablist'+tablistcount+'-panel'+tabcount,'role':'tab',tabindex:0,keydown:function(objEvent){if(objEvent.keyCode===13){$tabListItem.click();}},click:function(){$tabsWrapper.css('height',highestHeight);$tabs.find('.responsive-tabs__panel--closed-accordion-only').removeClass('responsive-tabs__panel--closed-accordion-only');$tabs.find('.responsive-tabs__panel--active').toggle().removeClass('responsive-tabs__panel--active').attr('aria-hidden','true').prev().removeClass('responsive-tabs__heading--active');$tabPanel.toggle().addClass('responsive-tabs__panel--active').attr('aria-hidden','false');$tabHeading.addClass('responsive-tabs__heading--active');$tabList.find('.responsive-tabs__list__item--active').removeClass('responsive-tabs__list__item--active');$tabListItem.addClass('responsive-tabs__list__item--active');$tabsWrapper.css('height','auto');}});$tabPanel.attr({'role':'tabpanel','aria-labelledby':$tabListItem.attr('id'),id:'tablist'+tablistcount+'-panel'+tabcount});if($tabPanel.hasClass('responsive-tabs__panel--active')){$tabListItem.addClass('responsive-tabs__list__item--active');}
$tabList.append($tabListItem);$tabHeading.keydown(function(objEvent){if(objEvent.keyCode===13){$tabHeading.click();}});$tabHeading.click(function(){$tabs.find('.responsive-tabs__panel--closed-accordion-only').removeClass('responsive-tabs__panel--closed-accordion-only');if(!$tabHeading.hasClass('responsive-tabs__heading--active')){var oldActivePos,$activeHeading=$tabs.find('.responsive-tabs__heading--active');if($activeHeading.length){oldActivePos=$activeHeading.offset().top;}
$tabs.find('.responsive-tabs__panel--active').slideToggle().removeClass('responsive-tabs__panel--active').prev().removeClass('responsive-tabs__heading--active');$tabs.find('.responsive-tabs__panel').hide().attr('aria-hidden','true');$tabPanel.slideToggle().addClass('responsive-tabs__panel--active').attr('aria-hidden','false');$tabHeading.addClass('responsive-tabs__heading--active');var $currentActive=$tabs.find('.responsive-tabs__list__item--active');$currentActive.removeClass('responsive-tabs__list__item--active');var panelId=$tabPanel.attr('id');var tabId=panelId.replace('panel','tab');$('#'+tabId).addClass('responsive-tabs__list__item--active');var tabsPos=$tabs.offset().top;var newActivePos=($tabHeading.offset().top)-15;if(oldActivePos<newActivePos){$('html, body').animate({scrollTop:tabsPos},0).animate({scrollTop:newActivePos},550);}}
else{$tabPanel.removeClass('responsive-tabs__panel--active').slideToggle(function(){$(this).addClass('responsive-tabs__panel--closed-accordion-only');});$tabHeading.removeClass('responsive-tabs__heading--active');}});tabcount++;});$tabs.prepend($tabList);tablistcount++;});}};})(jQuery);