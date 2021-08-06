function initColorScheme(){var colorScheme='light';var defaultColorScheme='';var supportsPrefersColorScheme=window.matchMedia('(prefers-color-scheme:dark)').media!=='not all';init();function init(){detectColorScheme();trackAnalyticsEvent(colorScheme);if(supportsPrefersColorScheme){window.matchMedia('(prefers-color-scheme:dark)').addListener(detectColorScheme);}
$(function(){init2();});}
function detectColorScheme(){var existingColorScheme=localStorage.getItem('color-scheme');if(supportsPrefersColorScheme){defaultColorScheme=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
if(existingColorScheme&&['dark','light'].includes(existingColorScheme)){colorScheme=existingColorScheme;}else if(supportsPrefersColorScheme){colorScheme=defaultColorScheme;}
updateStylesheets();}
function init2(){$('.js-color-scheme-toggle-dark, .js-color-scheme-toggle-light').on('click',clickToggle);updateToggle();}
function clickToggle(e){if($(e.currentTarget).hasClass('js-color-scheme-toggle-light')){colorScheme='light';}else{colorScheme='dark';}
rememberColorScheme();updateColorScheme();}
function rememberColorScheme(){localStorage.setItem('color-scheme',colorScheme);}
function updateToggle(){if(colorScheme==='light'){document.querySelector('.js-color-scheme-toggle-dark').style.display='block';document.querySelector('.js-color-scheme-toggle-light').style.display='none';}else{document.querySelector('.js-color-scheme-toggle-light').style.display='block';document.querySelector('.js-color-scheme-toggle-dark').style.display='none';}
document.querySelector('.header-drawer__color-scheme').style.display='block';}
function updateColorScheme(){updateStylesheets();updateToggle();}
function updateStylesheets(){document.getElementsByTagName("html")[0].setAttribute("data-color-scheme",colorScheme);}
function trackAnalyticsEvent(colorScheme){var fieldsObject={hitType:'event',eventCategory:'Color Scheme',eventAction:colorScheme.charAt(0).toUpperCase()+colorScheme.slice(1)+' Theme',eventLabel:window.location.href,transport:'beacon'};ga('send',fieldsObject);ga('global.send',fieldsObject);}}
initColorScheme();;;if($.lazyLoadXT){$.extend($.lazyLoadXT,{edgeY:200,autoInit:false,srcsetExtended:false});}
else{$(function(){$('img.lazy,iframe.lazy').each(function(){$(this).attr('src',$(this).attr('data-src'));$(this).attr('srcset',$(this).attr('data-srcset'));});});};;jQuery(function($){initAlternateHomepage();initBlockAds();initBlockLoadMore();initBlockInfiniteScroll();initCommentNavigation();initSwipe();initJwPlayer();initAnalyticsEventTracking();function initCommentNavigation(){$('.js-comments-navigate').click(function(event){var href=$(this).closest('.bullet').find('a').first().attr('href')
window.location.href=href+'#comments';event.stopPropagation();return false;});}
function initJwPlayer(){function shufflePlaylist(playlist){var currentIndex=playlist.length;var tempValue;var randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*playlist.length);currentIndex-=1;tempValue=playlist[currentIndex];playlist[currentIndex]=playlist[randomIndex];playlist[randomIndex]=tempValue;}
return playlist;}
$('.js--jw-player').each(function(i){var $this=$(this);var player=jwplayer($this.attr('id'));player.setup({'playlist':'https://cdn.jwplayer.com/v2/playlists/'+$this.data('jwPlayerPlaylistId'),'mute':true,'autostart':'viewable',});player.on('ready',function(e){var player=this;var playlistObj=player.getPlaylist();player.load(shufflePlaylist(playlistObj));});player.on('playlistItem',function(e){var player=this;$bullet=$('#'+player.id).parents('.bullet');$bullet.find('.bullet__title').text(e.item.title);});});}
function initSwipe(){$(window).on('resize',toggleSwipe);$(document).on('click','.js-swipe-next',swipeNext);toggleSwipe();function swipeNext(){window.swiper.next();}
function toggleSwipe(){if($(window).width()<761){if($('.js-swipe .swipe').length==0){$('.js-swipe .col-3of3').wrapAll("<div class='swipe'><div class='swipe-wrap'></div></div>");$('.js-swipe .col-3of3').each(function(i){var $next=$(this).next();$next=$next.length>0?$next:$(this).siblings().first();$(this).find('.block__header').after('<button class="block__swiper-next-trigger js-swipe-next">'+$next.find('.block__header').text()+' <i class="fas fa-lg fa-caret-right"></i></button>');});window.swiper=new Swipe($('.swipe')[0],{startSlide:0,auto:false,draggable:true,autoRestart:false,continuous:true,disableScroll:false,stopPropagation:true,})}}else{if($('.js-swipe .swipe').length>0){$('.js-swipe .swipe .col-3of3').unwrap().unwrap().attr('style','').find('.block__swiper-next-trigger').remove();window.swiper.kill();}}}}
function initAlternateHomepage(){$('.js-cookie-alternate-homepage').on('click',cookieAlternateHomepage);function cookieAlternateHomepage(){var $body=$('body');var domain='.'+document.domain.replace(/.*\.([^\.]+\.[^\.]+)/g,'$1');if($body.hasClass('alternate-homepage--active')){$.cookie('blog-view',null,{path:'/',domain:domain,expires:-1});$body.removeClass('alternate-homepage--active');}else{$.cookie('blog-view',window.location.pathname,{path:'/',domain:domain,expires:365});$body.addClass('alternate-homepage--active');}}}
function initBlockAds(){loadGPTLightAds();clonePurchAds();function loadGPTLightAds(){window.glade&&glade.run&&glade.run();}
function clonePurchAds(){Drupal.freezeHeight();if(typeof(tmntag)!=='undefined'){$('.block:last > .row:last').find('.sidebar, .article-leaderboard, .article-body').find('.adunit[data-clone-id!=""]').each(function(index,adunit){if($('#'+$(adunit).data('clone-id')).hasClass('adunit--rendered')){tmntag.cmd.push(function(){tmntag.adunitClone($(adunit).data('clone-id'),$(adunit).attr('id'));});}});}
Drupal.unfreezeHeight();}}
function initBlockInfiniteScroll(){Waypoint.destroyAll();initWaypoints();watchForResize();function watchForResize(){var $body=$('body');var height=$body.height();setInterval(function(){var currentHeight=$body.height();if(currentHeight!=height){height=currentHeight;Waypoint.refreshAll();}},250);}
function initWaypoints(){$section=$('section.block:last .row:last');$section.waypoint(function(direction){if(direction=='down'){if(this===this.group.last()&&window.location.search.substring(1).split('&').indexOf('infinite=false')==-1){$('.js-load-more:last').not('.btn--load-more--disabled').trigger('click');}}},{offset:function(){return this.context.innerHeight()-(this.adapter.outerHeight()*.50);},group:'sections',});}}
function initBlockLoadMore(){$('.js-load-more').on('click',loadMoreArticles);function loadMoreArticles(){var $section=$(this).parents('section');var $buttons=$section.find('.btn--load-more');var $container=$section.hasClass('js-load-more-container')?$section:$section.find('.js-load-more-container');var $blockArticles=$section.find('article');var $pageNodes=$('article:not(.bullet--deal)');var $pageDeals=$('.bullet--deal');var delta=$section.data('delta');var length=$pageNodes.length;getLoadMoreArticles();function toggleButtonActive(flag=true){$buttons.toggleClass('btn--load-more--active',flag).prop('disabled',flag);}
function getIds(articles){var ids=[];articles.each(function(){if($(this).data('id')){ids.push($(this).data('id'))}});return ids;}
function getLoadMoreArticles(){toggleButtonActive(true);if($section.hasClass('block--deals')){$.post('/visor-blocks-deals/deal-list/ajax',{"delta":delta,"start":length,"blockids":getIds($blockArticles),"pageids":getIds($pageDeals),"adnumber":$('.block .sidebar .adunit').length,},handleLoadMoreArticles,'json');}else{$.post('/visor-blocks/article-list/ajax',{"delta":delta,"start":length,"blockids":getIds($blockArticles),"pageids":getIds($pageNodes),"adnumber":$('.block .sidebar .adunit').length,},handleLoadMoreArticles,'json');}}
function handleLoadMoreArticles(data){toggleButtonActive(false);if(data&&data.result&&data.content){var $button=$container.find('.btn--load-more');if($button.length>0){$button.before(data.content);}else{$container.append(data.content);}
if(!data.more){$buttons.addClass('btn--load-more--disabled');}
if($('.adunit',data.content).length>0){initBlockAds();}}else{$buttons.addClass('btn--load-more--disabled');}
initBlockImages($container);initBlockInfiniteScroll();}}}
function initAnalyticsEventTracking(){addAnalyticsEventTracking();function addAnalyticsEventTracking(){if($('.block-topic').length>0){trackAnalyticsEvent({'data':{'category':'Topic Bar','action':'Impression','label':removeUrlTracking(window.location.href),}});$('.block-topic__topics-item').on('click',{'category':'Topic Bar','action':'Click',},trackAnalyticsEvent)}}
function trackAnalyticsEvent(event){var label=event.data.label||removeUrlTracking($(event.target.closest('a')).attr('href'));var fieldsObject={hitType:'event',eventCategory:event.data.category,eventAction:event.data.action,eventLabel:label,transport:'beacon'};ga('send',fieldsObject);ga('global.send',fieldsObject);}
function removeUrlTracking(url){var urlparts=url.split('?');if(urlparts[1]){var queryparts=urlparts[1].split('&');var i=queryparts.length;while(i--){if(queryparts[i].startsWith('utm_')){queryparts.splice(i,1);}}
url=queryparts.length?[urlparts[0],queryparts.join('&')].join('?'):urlparts[0];}
return url;}}});function initBlockImages(context){var dpr=window.devicePixelRatio||1;dpr=Math.round(dpr*100)/100;var mapping={w100h75crop:'w150h113crop',w200h150crop:'w300h225crop',w250h188crop:'w400h300crop',w400h225crop:'w600h333crop',w400h300crop:'w600h450crop',w150h113crop:'w250h188crop',w100h100crop:'w200h200crop',w200h200crop:'w300h300crop',w800h450crop:'w1200h675crop'};if(dpr>1){$('img.lazy:not(.no-resize)',context).each(function(){var e=$(this);var newstyle='';var src=e.data('src');if(!src)return;var style=get_image_style(src);if(!style)return;if(mapping.hasOwnProperty(style))newstyle=mapping[style];if(newstyle!=='')src=replace_image_style(src,newstyle);e.attr('data-src',src);});}
if($.lazyLoadXT)$('img.lazy,iframe.lazy',context).lazyLoadXT();};;var gptadslots=gptadslots||[];var googletag=googletag||{cmd:[]};var gpt_defaultsizemappings={'mapping1':function(){return googletag.sizeMapping().addSize([1350,0],['fluid']).addSize([728,0],['fluid']).addSize([320,0],['fluid']).addSize([0,0],['fluid']).build();},'mapping2':function(){return googletag.sizeMapping().addSize([1350,0],[[300,285],[300,700]]).addSize([780,0],[[300,285]]).addSize([320,0],[[300,285],[300,100]]).addSize([0,0],[]).build();}};googletag.cmd.push(function(){googletag.pubads().enableSingleRequest();googletag.pubads().collapseEmptyDivs();googletag.pubads().setForceSafeFrame(false);googletag.pubads().addEventListener('slotRenderEnded',function(event){if(event.isEmpty)return;$('#'+event.slot.getSlotElementId()).addClass('adunit--rendered');});});function gpt_move_inline_article_ad(id,context,mode){if(typeof(mode)=='undefined')mode='skip';var candidate1=null;var candidate2=null;var candidate3=null;var pcount=0;var postlength=0;var parg=$('>p,.container>p,.article-body__section>p',context);parg.each(function(){p=$(this);var length=p.clone().find('script,noscript,style').remove().end().text().length;p.data('plength',length);postlength+=length;if(pcount>=1&&postlength>333&&candidate1==null)candidate1=p;if(pcount>=2&&postlength>666&&candidate2==null)candidate2=p;pcount++;});if(candidate3!=null&&postlength>1000){$(id).insertAfter(candidate3).addClass("inline-text");}
else if(candidate2!=null&&postlength>666){$(id).insertAfter(candidate2).addClass("inline-text");}
else if(candidate1!=null&&postlength>333){$(id).insertAfter(candidate1).addClass("inline-text");}
else if(mode=='top'){p=parg.eq(0);if(p.data('plength')<10&&p.find('img').length>0&&p.find('img').css('float')!='left'){$(id).insertAfter(p).addClass("inline-text");}
else{$(id).insertBefore(p).addClass("inline-text");}}
else if(m=mode.match(/(prepend|append):(.*)/)){target=$(m[2]);if(m[1]=='prepend')$(id).prependTo(target).addClass("inline-text");else if(m[1]=='after')$(id).insertAfter(target).addClass("inline-text");else if(m[1]=='append')$(id).appendTo(target).addClass("inline-text");$(id).addClass('position-'+m[1]);}
else return false;return true;}
function gpt_move_inline_ad(id,context,target_position){var candidate=null;var last_ad=0;var postlength=0;var parg=$('>p,.container>p,.article-body__section>p',context);parg.each(function(){p=$(this);var length=p.clone().find('script,noscript,style').remove().end().text().length;postlength+=length;last_ad=p.next().hasClass('adunit')?postlength:last_ad;if(postlength>target_position&&((last_ad==0&&postlength>333)||(postlength>last_ad+500))){candidate=p;return false;}});if(candidate!=null){$(id).insertAfter(candidate).addClass("inline-text");return true;}
else return false;};;function showDoNotSellInfo(){var container=$('.header-drawer__navigation-list--disclosures');if(!container.length)return;var li=container.find('li').first().clone();var link=li.find('a');link.text('Do not sell my info');link.attr('href','#');container.append(li);return link[0];}
function purch_hide_unused_slots(){if(typeof(tmntag)=='undefined')return;tmntag.adunitRenderedCmd.push(function(adunit){if(adunit.isEmpty&&window.location.search.substring(1).split('&').indexOf('keepblankads')==-1){$('#'+adunit.div).closest('.gpt').hide();$('#'+adunit.div).closest('.article-sidebar__section').hide();$('#'+adunit.div).addClass('adunit--empty');}
else{$('#'+adunit.div).addClass('adunit--rendered');}});}
function purch_render_cloned_ads(){if(typeof(tmntag)=='undefined')return;tmntag.adunitRenderedCmd.push(function(event){$('.adunit[data-clone-id!=""]:not(.adunit--rendered)').not(".article .sidebar .adunit").each(function(index,adunit){if(event.div==$(adunit).data('clone-id')){tmntag.cmd.push(function(){tmntag.adunitClone($(adunit).data('clone-id'),$(adunit).attr('id'));});}});});}
function purch_init_adunit_rendered_cmds(){if(typeof(tmntag)=='undefined')return;tmntag.adunitRenderedCmd=tmntag.adunitRenderedCmd||[];tmntag.cmd.push(function(){tmntag.onAdunitRendered(function(event){for(var i in tmntag.adunitRenderedCmd){if(typeof tmntag.adunitRenderedCmd[i]==='function'){tmntag.adunitRenderedCmd[i](event);}}});});}
var tn_ad_insert={tn_place_ad_footer_mobile:function(){if(!this.get_footer_cookie('tmn_footer')){var tmn_footer_ele=document.createElement('div');tmn_footer_ele.id='tmn_footer_ad_mobile';tmn_footer_ele.style.height='66px';tmn_footer_ele.style.width='320px';tmn_footer_ele.style.position='fixed';tmn_footer_ele.style.zIndex='100000000000000';tmn_footer_ele.style.overflow='hidden';tmn_footer_ele.style.bottom='0';tmn_footer_ele.style.padding='0';tmn_footer_ele.style.left='50%';tmn_footer_ele.style.marginLeft='-160px';tmn_footer_ele.innerHTML='<div id="tmn_footer_topper_mobile" style="height: 15px; width: 100%; border-bottom: 1px solid #000; box-sizing: content-box; -moz-box-sizing: content-box; -webkit-box-sizing: content-box;"></div><div style="height: 50px; width: 100%; background-color: #FFFFFF;"><center><iframe id="tmn_footer_ad_iframe" src="about:blank" style="background:transparent; border: 0px; display: block; height: 50px; width: 320px; max-width: 320px;" MARGINWIDTH="0" MARGINHEIGHT="0" HSPACE="0" VSPACE="0" scrolling="no" frameborder="no"></iframe></center></div><div id="tmn_footer_close_mobile" style="z-index: 10000000000; cursor: pointer; position:absolute; top:0px; right:0px; display:block; background:url(http://www.androidcentral.com/sites/androidcentral.com/files/images/ads/close_small.png) no-repeat bottom center; width:35px; height:15px; text-indent:-9999px;" onclick="document.getElementById(\'tmn_footer_ad_mobile\').parentNode.removeChild(document.getElementById(\'tmn_footer_ad_mobile\')); var tmn_date = new Date(); tmn_date.setTime(tmn_date.getTime()+(30*24*60*60*1000)); document.cookie = \'tmn_footer=off; expires=\'+tmn_date.toGMTString()+\'; path=/\';"></div>';document.body.appendChild(tmn_footer_ele);var tmn_footer_iframe_out='<html><head><scr'+'ipt src="http://www.googletagservices.com/tag/js/gpt_mobile.js"></scr'+'ipt></head><body style="margin: 0; padding:0;"><scr'+'ipt type="text/javascript">googletag.cmd.push(function() {googletag.defineSlot(\'/'+Drupal.settings.gpt.dfp_id+'/'+Drupal.settings.gpt.dfp_ad_unitname+'\', [320, 52], \'div-gpt-ad-1379342916930-0\').addService(googletag.pubads());googletag.pubads().set("page_url", "http://"+top.document.location.hostname+top.document.location.pathname);googletag.pubads().enableSingleRequest();googletag.enableServices();});<\/scr'+'ipt><div id="div-gpt-ad-1379342916930-0" style="width:320px; height:50px;"><scr'+'ipt type="text/javascript">googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1379342916930-0\'); });<\/scr'+'ipt></div></body></html>';if(typeof document.getElementById('tmn_footer_ad_iframe').contentWindow!='undefined'){document.getElementById('tmn_footer_ad_iframe').contentWindow.contents=tmn_footer_iframe_out;document.getElementById('tmn_footer_ad_iframe').src='javascript:window["contents"]';}}},get_footer_cookie:function(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i].trim();if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return "";}};$(function(){purch_init_adunit_rendered_cmds();purch_render_cloned_ads();purch_hide_unused_slots();});;;/*!
Waypoints - 4.0.0
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=false
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=true
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.invokeAll('enable')}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:true,enabled:true,group:'default',horizontal:false,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=false
this.didResize=false
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
if(horizontalEmpty&&verticalEmpty){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=false}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=true
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=false}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}
else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=elementOffset+contextModifier-adjustment
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto)}}());;;/*!
* Swipe 2.2.14
*
* Brad Birdsall
* Copyright 2013, MIT License
*
*/;(function(root,factory){if(typeof define==='function'&&define.amd){define([],function(){root.Swipe=factory();return root.Swipe;});}else if(typeof module==='object'&&module.exports){module.exports=factory();}else{root.Swipe=factory();}}(this,function(){var root=typeof self=='object'&&self.self===self&&self||typeof global=='object'&&global.global===global&&global||this;var _document=root.document;function Swipe(container,options){'use strict';options=options||{};var start={};var delta={};var isScrolling;var delay=options.auto||0;var interval;var disabled=false;var noop=function(){};var offloadFn=function(fn){setTimeout(fn||noop,0);};var throttle=function(fn,threshhold){threshhold=threshhold||100;var timeout=null;function cancel(){if(timeout)clearTimeout(timeout);}
function throttledFn(){var context=this;var args=arguments;cancel();timeout=setTimeout(function(){timeout=null;fn.apply(context,args);},threshhold);}
throttledFn.cancel=cancel;return throttledFn;};var isCancelable=function(event){if(!event)return false;return typeof event.cancelable!=='boolean'||event.cancelable;};var browser={addEventListener:!!root.addEventListener,passiveEvents:(function(){var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function(){supportsPassive=true;}});root.addEventListener('testEvent',null,opts);root.removeEventListener('testEvent',null,opts);}
catch(e){supportsPassive=false;}
return supportsPassive;})(),touch:('ontouchstart'in root)||root.DocumentTouch&&_document instanceof DocumentTouch,transitions:(function(temp){var props=['transitionProperty','WebkitTransition','MozTransition','OTransition','msTransition'];for(var i in props){if(temp.style[props[i]]!==undefined){return true;}}
return false;})(_document.createElement('swipe'))};if(!container)return;var element=container.children[0];var slides,slidePos,width,length;var index=parseInt(options.startSlide,10)||0;var speed=options.speed||300;options.continuous=options.continuous!==undefined?options.continuous:true;var slideDir=(function(el,prop,dir){if(el.currentStyle){dir=el.currentStyle[prop];}else if(root.getComputedStyle){dir=root.getComputedStyle(el,null).getPropertyValue(prop);}
return 'rtl'===dir?'right':'left';})(container,'direction');options.autoRestart=options.autoRestart!==undefined?options.autoRestart:false;var throttledSetup=throttle(setup);var events={handleEvent:function(event){if(disabled)return;switch(event.type){case 'mousedown':case 'touchstart':this.start(event);break;case 'mousemove':case 'touchmove':this.move(event);break;case 'mouseup':case 'mouseleave':case 'touchend':this.end(event);break;case 'webkitTransitionEnd':case 'msTransitionEnd':case 'oTransitionEnd':case 'otransitionend':case 'transitionend':this.transitionEnd(event);break;case 'resize':throttledSetup();break;}
if(options.stopPropagation){event.stopPropagation();}},start:function(event){var touches;if(isMouseEvent(event)){touches=event;event.preventDefault();}else{touches=event.touches[0];}
start={x:touches.pageX,y:touches.pageY,time:+new Date()};isScrolling=undefined;delta={};if(isMouseEvent(event)){element.addEventListener('mousemove',this,false);element.addEventListener('mouseup',this,false);element.addEventListener('mouseleave',this,false);}else{element.addEventListener('touchmove',this,browser.passiveEvents?{passive:false}:false);element.addEventListener('touchend',this,false);}},move:function(event){var touches;if(isMouseEvent(event)){touches=event;}else{if(event.touches.length>1||event.scale&&event.scale!==1){return;}
if(options.disableScroll&&isCancelable(event)){event.preventDefault();}
touches=event.touches[0];}
delta={x:touches.pageX-start.x,y:touches.pageY-start.y};if(typeof isScrolling==='undefined'){isScrolling=!!(isScrolling||Math.abs(delta.x)<Math.abs(delta.y));}
if(!isScrolling){if(isCancelable(event)){event.preventDefault();}
stop();if(options.continuous){translate(circle(index-1),delta.x+slidePos[circle(index-1)],0);translate(index,delta.x+slidePos[index],0);translate(circle(index+1),delta.x+slidePos[circle(index+1)],0);}else{delta.x=delta.x/((!index&&delta.x>0||index===slides.length-1&&delta.x<0)?(Math.abs(delta.x)/width+1):1);translate(index-1,delta.x+slidePos[index-1],0);translate(index,delta.x+slidePos[index],0);translate(index+1,delta.x+slidePos[index+1],0);}}},end:function(event){var duration=+new Date()-start.time;var isValidSlide=Number(duration)<250&&Math.abs(delta.x)>20||Math.abs(delta.x)>width/2;var isPastBounds=!index&&delta.x>0||index===slides.length-1&&delta.x<0;if(options.continuous){isPastBounds=false;}
var direction=Math.abs(delta.x)/delta.x;if(!isScrolling){if(isValidSlide&&!isPastBounds){if(direction<0){if(options.continuous){move(circle(index-1),-width,0);move(circle(index+2),width,0);}else{move(index-1,-width,0);}
move(index,slidePos[index]-width,speed);move(circle(index+1),slidePos[circle(index+1)]-width,speed);index=circle(index+1);}else{if(options.continuous){move(circle(index+1),width,0);move(circle(index-2),-width,0);}else{move(index+1,width,0);}
move(index,slidePos[index]+width,speed);move(circle(index-1),slidePos[circle(index-1)]+width,speed);index=circle(index-1);}
runCallback(getPos(),slides[index],direction);}else{if(options.continuous){move(circle(index-1),-width,speed);move(index,0,speed);move(circle(index+1),width,speed);}else{move(index-1,-width,speed);move(index,0,speed);move(index+1,width,speed);}}}
if(isMouseEvent(event)){element.removeEventListener('mousemove',events,false);element.removeEventListener('mouseup',events,false);element.removeEventListener('mouseleave',events,false);}else{element.removeEventListener('touchmove',events,browser.passiveEvents?{passive:false}:false);element.removeEventListener('touchend',events,false);}},transitionEnd:function(event){var currentIndex=parseInt(event.target.getAttribute('data-index'),10);if(currentIndex===index){if(delay||options.autoRestart)restart();runTransitionEnd(getPos(),slides[index]);}}};setup();begin();return{setup:setup,slide:function(to,speed){stop();slide(to,speed);},prev:function(){stop();prev();},next:function(){stop();next();},restart:restart,stop:stop,getPos:getPos,disable:disable,enable:enable,getNumSlides:function(){return length;},kill:kill};function detachEvents(){if(browser.addEventListener){element.removeEventListener('touchstart',events,browser.passiveEvents?{passive:true}:false);element.removeEventListener('mousedown',events,false);element.removeEventListener('webkitTransitionEnd',events,false);element.removeEventListener('msTransitionEnd',events,false);element.removeEventListener('oTransitionEnd',events,false);element.removeEventListener('otransitionend',events,false);element.removeEventListener('transitionend',events,false);root.removeEventListener('resize',events,false);}else{root.onresize=null;}}
function attachEvents(){if(browser.addEventListener){if(browser.touch){element.addEventListener('touchstart',events,browser.passiveEvents?{passive:true}:false);}
if(options.draggable){element.addEventListener('mousedown',events,false);}
if(browser.transitions){element.addEventListener('webkitTransitionEnd',events,false);element.addEventListener('msTransitionEnd',events,false);element.addEventListener('oTransitionEnd',events,false);element.addEventListener('otransitionend',events,false);element.addEventListener('transitionend',events,false);}
root.addEventListener('resize',events,false);}else{root.onresize=throttledSetup;}}
function cloneNode(el){var clone=el.cloneNode(true);element.appendChild(clone);clone.setAttribute('data-cloned',true);clone.removeAttribute('id');}
function setup(opts){if(opts!=null){for(var prop in opts){options[prop]=opts[prop];}}
slides=element.children;length=slides.length;for(var i=0;i<slides.length;i++){if(slides[i].getAttribute('data-cloned'))length--;}
if(slides.length<2){options.continuous=false;}
if(browser.transitions&&options.continuous&&slides.length<3){cloneNode(slides[0]);cloneNode(slides[1]);slides=element.children;}
if('right'===slideDir){for(var j=0;j<slides.length;j++){slides[j].style.float='right';}}
slidePos=new Array(slides.length);width=container.getBoundingClientRect().width||container.offsetWidth;element.style.width=(slides.length*width*2)+'px';var pos=slides.length;while(pos--){var slide=slides[pos];slide.style.width=width+'px';slide.setAttribute('data-index',pos);if(browser.transitions){slide.style[slideDir]=(pos*-width)+'px';move(pos,index>pos?-width:(index<pos?width:0),0);}}
if(options.continuous&&browser.transitions){move(circle(index-1),-width,0);move(circle(index+1),width,0);}
if(!browser.transitions){element.style[slideDir]=(index*-width)+'px';}
container.style.visibility='visible';detachEvents();attachEvents();}
function prev(){if(disabled)return;if(options.continuous){slide(index-1);}else if(index){slide(index-1);}}
function next(){if(disabled)return;if(options.continuous){slide(index+1);}else if(index<slides.length-1){slide(index+1);}}
function runCallback(pos,index,dir){if(options.callback){options.callback(pos,index,dir);}}
function runTransitionEnd(pos,index){if(options.transitionEnd){options.transitionEnd(pos,index);}}
function circle(index){return(slides.length+(index%slides.length))%slides.length;}
function getPos(){var currentIndex=index;if(currentIndex>=length){currentIndex=currentIndex-length;}
return currentIndex;}
function slide(to,slideSpeed){to=typeof to!=='number'?parseInt(to,10):to;if(index===to)return;if(browser.transitions){var direction=Math.abs(index-to)/(index-to);if(options.continuous){var natural_direction=direction;direction=-slidePos[circle(to)]/width;if(direction!==natural_direction){to=-direction*slides.length+to;}}
var diff=Math.abs(index-to)-1;while(diff--){move(circle((to>index?to:index)-diff-1),width*direction,0);}
to=circle(to);move(index,width*direction,slideSpeed||speed);move(to,0,slideSpeed||speed);if(options.continuous){move(circle(to-direction),-(width*direction),0);}}else{to=circle(to);animate(index*-width,to*-width,slideSpeed||speed);}
index=to;offloadFn(function(){runCallback(getPos(),slides[index],direction);});}
function move(index,dist,speed){translate(index,dist,speed);slidePos[index]=dist;}
function translate(index,dist,speed){var slide=slides[index];var style=slide&&slide.style;if(!style)return;style.webkitTransitionDuration=style.MozTransitionDuration=style.msTransitionDuration=style.OTransitionDuration=style.transitionDuration=speed+'ms';style.webkitTransform=style.msTransform=style.MozTransform=style.OTransform=style.transform='translateX('+dist+'px)';}
function animate(from,to,speed){if(!speed){element.style[slideDir]=to+'px';return;}
var start=+new Date();var timer=setInterval(function(){var timeElap=+new Date()-start;if(timeElap>speed){element.style[slideDir]=to+'px';if(delay||options.autoRestart)restart();runTransitionEnd(getPos(),slides[index]);clearInterval(timer);return;}
element.style[slideDir]=(((to-from)*(Math.floor((timeElap/speed)*100)/100))+from)+'px';},4);}
function begin(){delay=options.auto||0;if(delay)interval=setTimeout(next,delay);}
function stop(){delay=0;clearTimeout(interval);}
function restart(){stop();begin();}
function disable(){stop();disabled=true;}
function enable(){disabled=false;restart();}
function isMouseEvent(e){return /^mouse/.test(e.type);}
function kill(){stop();container.style.visibility='';element.style.width='';element.style[slideDir]='';var pos=slides.length;while(pos--){if(browser.transitions){translate(pos,0,0);}
var slide=slides[pos];if(slide.getAttribute('data-cloned')){var _parent=slide.parentElement;_parent.removeChild(slide);}
slide.style.width='';slide.style[slideDir]='';slide.style.webkitTransitionDuration=slide.style.MozTransitionDuration=slide.style.msTransitionDuration=slide.style.OTransitionDuration=slide.style.transitionDuration='';slide.style.webkitTransform=slide.style.msTransform=slide.style.MozTransform=slide.style.OTransform='';}
detachEvents();throttledSetup.cancel();}}
if(root.jQuery||root.Zepto){(function($){$.fn.Swipe=function(params){return this.each(function(){$(this).data('Swipe',new Swipe($(this)[0],params));});};})(root.jQuery||root.Zepto);}
return Swipe;}));;;$(function(){$('.block').each(function(){var name=$(this).find('.block__header>*').eq(0).text().trim();$(this).attr('data-tb-region',name);$(this).find('article').attr('data-tb-region-item','1');});});;;