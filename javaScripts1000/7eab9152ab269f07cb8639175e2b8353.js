$.fn.isInViewport=function(){var elementTop=$(this).offset().top;var elementBottom=elementTop+$(this).outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom;};var lastScrollTop=0;var mobileView=$('html').hasClass('mobile_view')
var htmlLoading=$('body').hasClass('preload_page')
if($('html').hasClass('home_page_us')){var fOneColor='#2C7085';var fTwoColor='#008bb6';var fThreeColor='#6B523A';}else{var fOneColor='#0087bd';var fTwoColor='#ce3d34';}
$(window).on('resize scroll',function(){var mobileView=$('html').hasClass('mobile_view')
var htmlLoading=$('body').hasClass('preload_page')
var st=$(this).scrollTop();if(!htmlLoading&&!mobileView){var scrollPos=$(this).scrollTop();var blurbShowing=$('.blurb').isInViewport()
var heroClass=$('html').hasClass('hero_play')
if(blurbShowing&&!heroClass){heroPlay()
hideSticky()}else if(!blurbShowing&&heroClass){heroPause()}
var showTopNavFixedClass=$('html').hasClass('showTopNavFixed')
if(scrollPos>=(300)){if(!showTopNavFixedClass){showTopNavFixed()}}else if(scrollPos<(300)){if(showTopNavFixedClass){removeTopNavFixed()}}
var introOffset=$('.section_block-intro').offset().top-400
var fOneColorClass=$('html').hasClass('fOneColor')
if($('#featuredone').isInViewport()){if(showTopNavFixedClass&&!fOneColorClass){changeBG('html',fOneColor)
$('html').addClass('fOneColor')}}
var fOneShowing=$('#featuredone').isInViewport()
var fTwoShowing=$('#featuredtwo').isInViewport()
var audiencesShowing=$('.section_block-audiences').isInViewport()
var audiencesListShowing=$('.audiences').isInViewport()
var fOneSection=$('#featuredone').offset().top+64
var fTwoSection=$('#featuredtwo').offset().top+64
var fOneClass=$('html').hasClass('fOne')
var fTwoClass=$('html').hasClass('fTwo')
var stickyHiddenFOne=$('html').hasClass('hide_sticky_left')
var stickyHiddenFTwo=$('html').hasClass('hide_sticky_right')
if($('html').hasClass('home_page_us')){var fThreeShowing=$('#featuredthree').isInViewport()
var fThreeSection=$('#featuredthree').offset().top+64
var fThreeClass=$('html').hasClass('fThree')
var stickyHiddenFThree=$('html').hasClass('hide_sticky_left2')}else{var fThreeSection=$('.audiences').offset().top+64}
if(st>lastScrollTop){if(fOneShowing&&!fTwoShowing){if(!fOneClass){setFOne()
changeBG('html',fOneColor)
stickyWidth()
if(stickyHiddenFOne){showStickyFOne()}}}
if(fTwoShowing&&!fThreeShowing){if(!fTwoClass){setFTwo()
changeBG('html',fTwoColor)
stickyWidth()
if(stickyHiddenFTwo){showStickyFTwo()}}}
if(fThreeShowing){if(!fThreeClass){setFThree()
changeBG('html',fThreeColor)
stickyWidth()
if(stickyHiddenFThree){showStickyFThree()}}}
if(audiencesShowing){hideSticky()}
if(audiencesListShowing){$('html').addClass('section_audiences')}
if(scrollPos>=fOneSection&&scrollPos<fTwoSection){$('html').addClass('sticky-left-is_stuck')}
if(scrollPos>=fTwoSection&&scrollPos<fThreeSection){$('html').addClass('sticky-right-is_stuck')}
if(scrollPos>=fThreeSection){$('html').addClass('sticky-left-is_stuck2')}}else{if(scrollPos<fOneSection){$('html').removeClass('sticky-left-is_stuck')}
if(scrollPos<fTwoSection){$('html').removeClass('sticky-right-is_stuck')}
if(scrollPos<fThreeSection){$('html').removeClass('sticky-left-is_stuck2')}
if(fOneShowing&&!fTwoShowing){if(!fOneClass){setFOne()
changeBG('html',fOneColor)
stickyWidth()}}
if(!fTwoShowing&&scrollPos<fTwoSection){if(stickyHiddenFOne){showStickyFOne()}}
if(!audiencesListShowing){$('html').removeClass('section_audiences')}
if(fTwoShowing&&!fOneShowing){if(!fTwoClass){setFTwo()
changeBG('html',fTwoColor)
stickyWidth()}}
if($('html').hasClass('home_page_us')){if(fTwoShowing&&!fThreeShowing){if(stickyHiddenFTwo){showStickyFTwo()}}
if(fThreeShowing&&!fTwoShowing){if(!fThreeClass){setFThree()
changeBG('html',fThreeColor)
stickyWidth()}}
if(fThreeShowing&&!audiencesShowing){if(stickyHiddenFThree){showStickyFThree()}}}else{if(fTwoShowing&&!audiencesShowing){if(stickyHiddenFTwo){showStickyFTwo()}}}
if(!fOneShowing){if(fOneClass){$('html').removeClass('fOne')}}}
var marqueeShowing=$('.marquee_wrapper').isInViewport()
var aboutUsClass=$('html').hasClass('section_about_us')
if(marqueeShowing&&!aboutUsClass){$('.marquee').slick('slickGoTo',7)
playMarquee()}else if(!marqueeShowing&&aboutUsClass){pauseMarquee()}
var footerShowing=$('.section_block-footer').isInViewport()
var footerClass=$('html').hasClass('footer_play')
if(footerShowing&&!footerClass){footerPlay()}else if(!footerShowing&&footerClass){footerPause()}
lastScrollTop=st;}});