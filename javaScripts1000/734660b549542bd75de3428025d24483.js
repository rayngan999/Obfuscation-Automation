var screenWidth=window.innerWidth;var screenHeight=window.innerHeight;var mobileView=$('html').hasClass('mobile_view')
var htmlLoading=$('body').hasClass('preload_page')
function removePace(){console.log('v3')
var mobileView=$('html').hasClass('mobile_view')
var removePace=anime.timeline();removePace.add({targets:'.preloader',complete:function(){changeBG('.preloader','#333')}}).add({targets:'#animation_container',opacity:'0',complete:function(){if(mobileView){changeBG('html','#000')
$('.preloader').remove()}else if(!mobileView){$('.video_hero')[0].pause()}
loadHero();startpage();$('.pace-progress').css('opacity','0');$('html').addClass('hero-done');}}).add({targets:'.preloader',opacity:'0',duration:7400,complete:function(){$('.preloader').css('pointer-events','none');}})}
function removePreloader(){var mobileView=$('html').hasClass('mobile_view')
var fadeOutItem=anime({targets:'#animation_container',opacity:'0',duration:400,easing:'easeInOutQuart',complete:function(){$('.preloader').css('display','none')}});if(mobileView){changeBG('html','#000')}else if(!mobileView){$('.video_hero')[0].pause()}
setTimeout(function(){$('.preloader').remove()
startpage()},500);}
function startpage(){cloneTopNav()
idScrollNav()
loadBigImages()
setTimeout(function(){initAudiences()
initWhatWeDoCarousel()
initMarquee()
stickyWidth()},2000);}
function loadBigImages(){$('.big_image').each(function(i,obj){var bigImage=$(this).attr("data-src")
$(this).attr("src",bigImage)});}
function loadHero(){$('body').removeClass('preload_page')
var loadHero=anime.timeline();loadHero.add({targets:'.section_block-hero',height:{value:"-=20"},easing:'easeInOutQuart'})
setTimeout(function(){showNewsFeed()
$('.preloader').remove()},1000);setTimeout(function(){blurb()
$('.blurb').slick('slickGoTo',0)},1400);setTimeout(function(){showVideo()},100);setTimeout(function(){$('.icon-scroll').css({opacity:0.7,display:'block'})},2400);}
function showVideo(){anime.timeline().add({targets:'.video-responsive',opacity:1,easing:'easeInOutQuart',complete:function(){setTimeout(function(){$('.video_hero')[0].play()},1000);}})}
function hideTopNav(){var navHeight=$('.portal_nav').height();var hideTopNav=anime.timeline();hideTopNav.add({targets:'.portal_nav.nav_main',easing:'easeInOutQuart',translateY:-navHeight}).add({targets:'.portal_nav.nav_main nav',easing:'easeInOutQuart',opacity:0});}
function showTopNav(){}
function cloneTopNav(){$('.portal_nav').clone().addClass('portalFixed').removeClass('nav_main').insertAfter('.portal_nav')
menuShowHide()}
function showTopNavFixed(){var showTopNavFixedClass=$('html').hasClass('showTopNavFixed')
if(!mobileView&&!showTopNavFixedClass){$('html').addClass('showTopNavFixed')}}
function removeTopNavFixed(){var showTopNavFixedClass=$('html').hasClass('showTopNavFixed')
if(!mobileView&&showTopNavFixedClass){$('html').removeClass('showTopNavFixed')}}
function blurb(){$('.blurb').slick({initialSlide:4,autoplay:false,autoplaySpeed:5000,slidesToShow:1,speed:0,slidesToScroll:1,arrows:false,variableWidth:true,variableHeight:true,fade:true,draggable:false,swipe:false,pauseOnHover:false,responsive:[{breakpoint:601,settings:{fade:false,speed:400,arrows:true,dots:true,draggable:true,swipe:true}}]});$('.blurb').on('init reInit afterChange',function(event,slick,currentSlide,nextSlide){$('.blurb').slick('slickPause')
blurbLetterFx()
anime.timeline().add({targets:'.blurb_main .header',translateY:-10,opacity:0,delay:0,duration:0})
setTimeout(function(){if($('html').hasClass('hero_play')){$('.blurb').slick('slickPlay')}},1000);});anime.timeline().add({targets:'.blurb',opacity:1,duration:600})}
function blurbLetterFx(){anime.timeline().add({targets:'.slick-active .header',translateY:-10,opacity:0,delay:0,duration:0,complete:function(){anime.timeline().add({targets:'.slick-active .header',translateY:0,opacity:1})
var screenWidth=$(window).width()
if(screenWidth>=601){$(".slick-active .header strong").letterfx({"fx":"fade","words":true,"backwards":false,"timing":150,"fx_duration":"850ms"});}}})}
function initNewsFeed(){$('.cw_news_list').slick({dots:false,infinite:false,speed:300,slidesToShow:6,slidesToScroll:1,arrows:false,responsive:[{breakpoint:1367,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1025,settings:{variableWidth:true,arrows:true,slidesToShow:4,slidesToScroll:1}},{breakpoint:769,settings:{variableWidth:true,arrows:true,slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{variableWidth:true,arrows:true,slidesToShow:1,slidesToScroll:1}}]});$('.cw_news_item .article_title').succinct({size:54});$('.cw_news_feed .nav_wrapper .next').on('click',function(){$('.cw_news_list').slick('slickNext');});$('.cw_news_feed .nav_wrapper .prev').on('click',function(){$('.cw_news_list').slick('slickPrev');});}
function showNewsFeed(){initNewsFeed()
var showNewsFeed=anime.timeline();showNewsFeed.add({targets:'.cw_news_item',translateY:90,duration:0}).add({targets:'.cw_news_feed .mini_title',translateY:"-=10",duration:0}).add({targets:'.cw_news_feed',opacity:1,duration:300,complete:function(){anime.timeline().add({targets:'.cw_news_feed .mini_title',duration:0,complete:function(){showNewsList()
$('.cw_news_feed').addClass('on');setTimeout(function(){$('.cw_news_feed').addClass('on2')},100);anime.timeline().add({targets:'.cw_news_feed .mini_title',translateY:{value:0,duration:2000},opacity:{value:0.8,duration:2800}})},offset:"-=1500"})}})}
function showNewsList(){anime.timeline().add({targets:'.cw_news_item',translateY:0,easing:'easeInOutQuart',opacity:{value:1,duration:function(el,i,l){return 600+(i*600);}},direction:'alternate',duration:function(el,i,l){return 600+(i*600);}})}
function newsFeedHoverOn(){if(!$('.cw_news_list').hasClass('hover')){$('.cw_news_list').addClass('hover')
console.log('hover')}}
function newsFeedHoverOut(){if($('.cw_news_list').hasClass('hover')){$('.cw_news_list').removeClass('hover')
console.log('not')}}
function setFOne(){$('html').addClass('fOne')
$('html').removeClass('fTwo')
$('html').removeClass('fThree')}
function setFTwo(){$('html').addClass('fTwo')
$('html').removeClass('fOne')
$('html').removeClass('fThree')}
function setFThree(){$('html').addClass('fThree')
$('html').removeClass('fOne')
$('html').removeClass('fTwo')}
function showStickyFOne(){$('html').removeClass('hide_sticky_left')
$('html').addClass('hide_sticky_right')
$('html').addClass('hide_sticky_left2')}
function showStickyFTwo(){$('html').removeClass('hide_sticky_right')
$('html').addClass('hide_sticky_left')
$('html').addClass('hide_sticky_left2')}
function showStickyFThree(){$('html').removeClass('hide_sticky_left2')
$('html').addClass('hide_sticky_right')
$('html').addClass('hide_sticky_left')}
function hideSticky(){$('html').addClass('hide_sticky_left')
$('html').addClass('hide_sticky_right')
$('html').addClass('hide_sticky_left2')}
function stickyWidth(){var container=$('.section_block-fone .container').width()
var gpxWrapper=$('.section_block-fone .gpx_featured').width()
var wrapper=container-gpxWrapper
var mobileView=$('html').hasClass('mobile_view')
if(!mobileView){$('.section_block-fone .sticky_left .wrapper').width(wrapper)
$('.section_block-ftwo .sticky_right .wrapper').width(wrapper)
$('.section_block-ftwo .sticky_right .wrapper').css('margin-left',gpxWrapper)
$('.section_block-fthree .sticky_left2 .wrapper').width(wrapper)}}
function changeBG(ele,color){$(ele).animate({backgroundColor:color,easing:'linear'},800);}
function initAudiences(){$('.audiences').slick({dots:true,infinite:true,speed:300,variableWidth:false,slidesToShow:3,slidesToScroll:1,arrows:true,responsive:[{breakpoint:1025,settings:{dots:true,variableWidth:true,slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{dots:true,variableWidth:true,slidesToShow:1,slidesToScroll:1}}]});$('#audiences .nav_wrapper .next').on('click',function(){$('.audiences').slick('slickNext');});$('#audiences .nav_wrapper .prev').on('click',function(){$('.audiences').slick('slickPrev');});}
function setHeightAudiences(){}
function initWhatWeDoCarousel(){$('.what_we_do_carousel').slick({initialSlide:2,dots:false,arrows:true,centerMode:true,variableWidth:true,slidesToShow:1,slidesToScroll:1,centerPadding:'0px',infinite:true,asNavFor:'.wwd_nav_container',responsive:[{breakpoint:1025,settings:{infinite:true}}]});$('.wwd_nav_container').slick({initialSlide:2,slidesToShow:6,slidesToScroll:1,asNavFor:'.what_we_do_carousel',dots:false,focusOnSelect:true,variableWidth:true});initItemGal()}
function initItemGal(){$('.item_gal').slick({dots:false,arrows:false,infinite:true,draggable:false,variableWidth:true,responsive:[{breakpoint:1025,settings:{infinite:true,variableWidth:false}}]});$('.item_image .nav_wrapper .next').on('click',function(){$(this).closest('.item_image').find('.item_gal').slick('slickNext');});$('.item_image .nav_wrapper .prev').on('click',function(){$(this).closest('.item_image').find('.item_gal').slick('slickPrev');});}
function initMarquee(){$('.marquee').slick({centerMode:true,slidesToShow:2,slidesToScroll:1,variableWidth:true,infinite:true,centerPadding:'0px',dots:true,responsive:[{breakpoint:1025,settings:{autoplay:false,centerMode:true,speed:400,slidesToShow:3,slidesToScroll:1}},{breakpoint:769,settings:"unslick"}]});$('#about_citywire .nav_wrapper .next').on('click',function(){$('.marquee').slick('slickNext');});$('#about_citywire .nav_wrapper .prev').on('click',function(){$('.marquee').slick('slickPrev');});}
function playMarquee(){if(!$('html').hasClass('section_about_us')){$('.marquee').slick('slickPlay');$('html').addClass('section_about_us')}}
function pauseMarquee(){if($('html').hasClass('section_about_us')){$('.marquee').slick('slickPause');$('html').removeClass('section_about_us')}}
function heroPlay(){if(!$('html').hasClass('hero_play')){$('.video_hero')[0].play();$('.blurb').slick('slickPlay');$('html').addClass('hero_play')}}
function heroPause(){if($('html').hasClass('hero_play')){$('.video_hero')[0].pause();$('.blurb').slick('slickPause');$('html').removeClass('hero_play')}}
function footerPlay(){if(!$('html').hasClass('footer_play')){$('.video_footer')[0].play();$('html').addClass('footer_play')}}
function footerPause(){if($('html').hasClass('footer_play')){$('.video_footer')[0].pause();$('html').removeClass('footer_play')}}
function fadeOutItem(element){var fadeOutItem=anime({targets:element,opacity:'0',duration:400,easing:'easeInOutQuart',complete:function(){$(element).css('display','none')}});}
function fadeOutScaleItem(element){var fadeOutItem=anime({targets:element,opacity:'0',scale:.5,duration:400,easing:'easeInOutQuart',complete:function(){$(element).css('display','none')}});}
function hideEles(){var mobileView=$('html').hasClass('mobile_view')
if(!$('html').hasClass('hideEles')&&!mobileView){hideEle('.section_block-fone .sticky_left')
hideEle('.section_block-ftwo .sticky_right')
$('html').addClass('hideEles')}}
function hideEle(ele){var mobileView=$('html').hasClass('mobile_view')
if(!mobileView){anime.timeline().add({targets:ele,opacity:0})}}
function hideEleFromLeft(ele){anime.timeline().add({targets:ele,opacity:0,translateX:-10})}
function hideEleFromRight(ele){anime.timeline().add({targets:ele,opacity:0,translateX:10})}
function showEleFromLeft(ele){anime.timeline().add({targets:ele,opacity:1,translateX:0,duration:1000,delay:600})}
function showEle(ele,sec){anime.timeline().add({targets:ele,opacity:1,duration:1000,delay:sec})
if($('html').hasClass('hideEles')){$('html').removeClass('hideEles')}}
function showEleFromRight(ele,sec){anime.timeline().add({targets:ele,opacity:1,translateX:0,duration:1000,delay:sec})
if($('html').hasClass('hideEles')){$('html').removeClass('hideEles')}}
function showEleFromTop(ele,sec){anime.timeline().add({targets:ele,opacity:1,translateX:0,duration:1000,delay:sec})
if($('html').hasClass('hideEles')){$('html').removeClass('hideEles')}}
function showEleFromBottom(ele,sec){anime.timeline().add({targets:ele,opacity:1,translateX:0,duration:1000,delay:sec})
if($('html').hasClass('hideEles')){$('html').removeClass('hideEles')}}
function noScrollPreload(){$('.preload_page').on("mousewheel keydown",function(e){return false;});$('.preload_page').on("scroll",function(e){return false;});}
function enableScroll(){$('body').on("mousewheel keydown",function(e){return true;});$('body').on("scroll",function(e){return true;});}
function idScrollNav(){var body=$("html, body");var openNav=$('html').hasClass('open_nav')
$('a.id_scroll[href*="#"]').on('click',function(e){e.preventDefault();$('html').removeClass('open_nav')
$('.close_menu').remove()
var positionY=$($(this).attr('href')).offset().top-56
body.stop().animate({scrollTop:positionY},1200,function(){idScrollNav()});});}
function menuShowHide(){$('.hamburger a').on('click',function(e){e.preventDefault();toggleMenu()});}
function toggleMenu(){var mobileView=$('html').hasClass('mobile_view')
var openNav=$('html').hasClass('open_nav')
if(mobileView){$('html').toggleClass('open_nav')
$('.nav_main').append('<div class="close_menu"></div>');$('.close_menu').on('click',function(e){e.preventDefault();$('html').removeClass('open_nav')
$('.close_menu').remove()});}}
function detectView(){var screenSize=window.innerWidth
if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){if(!$('html').hasClass('mobile_view')){$('html').addClass('mobile_view')}
if(screenSize<=1024){}else if(screenSize>1024){}
return true;}
else{if(screenSize<=1024&&!$('html').hasClass('mobile_view')){$('html').addClass('mobile_view')}else if(screenSize>1024&&$('html').hasClass('mobile_view')){$('html').removeClass('mobile_view')}
return false;}}
function setHeightWidth(){var screenWidth=window.innerWidth;var screenHeight=window.innerHeight;var mobileView=$('html').hasClass('mobile_view')
setHeightAudiences()
if(!mobileView){$('.section_block-hero').css({height:screenHeight-20});}}
function myMap(){var myCenter=new google.maps.LatLng(51.489260,-0.120414);var mapCanvas=document.getElementById("map");var mapOptions={center:myCenter,zoom:13,scrollwheel:false};var map=new google.maps.Map(mapCanvas,mapOptions);var marker=new google.maps.Marker({position:myCenter});marker.setMap(map);}
function slickResize(){$('.blurb').slick('resize');$('.cw_news_list').slick('resize');$('.audiences').slick('resize');$('.what_we_do_carousel').slick('resize');$('.wwd_nav_container').slick('resize');$('.item_gal').not('.slick-initialized').slick('reInit, resize');$('.marquee').slick('resize');$('.cw_news_item .article_title').succinct({size:50});}
function msieversion(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./))
{$('html').addClass('ie')}
else
{return}
return false;}
function goToLinkBye(ele){anime.timeline().add({targets:'html',opacity:0})}