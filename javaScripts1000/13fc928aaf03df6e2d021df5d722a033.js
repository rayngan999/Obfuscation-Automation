(function($){$(function(){if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportmeta=document.querySelector('meta[name="viewport"]');if(viewportmeta){viewportmeta.content='width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';document.body.addEventListener('gesturestart',function(){viewportmeta.content='width=device-width, minimum-scale=0.25, maximum-scale=1.6';},false);}}
msieversion()
detectView()
myMap()
if($('html').hasClass('mobile_view')){setTimeout(function(){removePace()},1000);}else{setTimeout(function(){removePace()},800);}
$('html').addClass('hide_sticky_left')
$('html').addClass('hide_sticky_right')
$('body').flowtype({minimum:480,maximum:1920,minFont:16,maxFont:20,fontRatio:70});window.addEventListener('focus',function(){setWidthAfterFocus()});});})(jQuery);var rtime;var timeout=false;var delta=200;function resizeend(){if(new Date()-rtime<delta){setTimeout(resizeend,delta);}else{timeout=false;setHeightWidth()}}
function setWidthAfterFocus(){stickyWidth()}
$(window).on('resize orientationchange',function(){rtime=new Date();if(timeout===false){timeout=true;setTimeout(resizeend,delta);}
stickyWidth()
slickResize()
detectView()});