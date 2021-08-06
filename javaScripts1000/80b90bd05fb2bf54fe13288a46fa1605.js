$(document).ready(function(){
  /*é¦å±è½®æ­å¾*/
  jQuery(".banner").slide({mainCell:".bd ul",effect:"leftLoop",interTime:3000,autoPlay:true});
  /*ç­ç¹æ»å¨*/
  scroll(30,"#wrap","#wrap1","#wrap2");
  /*è§é¢*/
  $('.wpopBg,.wbtnClose').click(function(){
    $('.wpopBg').fadeOut(40);
    $('.wpop').fadeOut(40);
    $(".walertbody").find("iframe").attr("src","");
  });
  //è§é¢ä¿®æ¹
  $(".shiping li a").click(function(){
    var _url = $(this).attr("rev");
    var _showname = $(this).attr("revm");
    $(".walerthead").html(_showname);
    $(".walertbody").find("iframe").attr("src",_url);
    $('.wpop').fadeIn();
    $(".wpopBg").fadeIn();
  });

  //è§é¢ä¿®æ¹å
  $(".index6_4 img").click(function(){
    var _url = $(this).attr("rev");
    var _showname = $(this).attr("revm");
    $(".walerthead").html(_showname);
    $(".walertbody").find("iframe").attr("src",_url);
    $('.wpop').fadeIn();
    $(".wpopBg").fadeIn();
  });

  /*å¼ç­ä¿¡æ¯*/
  scrollTop(50,"#kbxx","#kbxx1","#kbxx2");
  /*æ¯ä¸å­¦å*/
  scrollTop(50,"#byxy","#byxy1","#byxy2");

  /*æ°é»*/
  switchTab(".index4_hd",".index4_bd","on");
  /*ææ*/
  switchTab(".index6_hd",".index6_bd","on");
  /*æ ¡åº*/
  switchTab(".index8_hd",".index8_bd","on");



});
function switchTab(switchHead,switchBody,mark){
    var switchHead = $(switchHead).children();
    var switchBody = $(switchBody).children();
    switchHead.removeClass(mark);
    switchHead.eq(0).addClass(mark);
    switchBody.hide();
    switchBody.eq(0).show();
    switchHead.hover(function(){
        $(this).addClass(mark).siblings().removeClass(mark);
        switchBody.hide();
        switchBody.eq($(this).index()).show();
    },function(){});
}
function scroll(time,name1,name2,name3){
  var _speed=time;
  var _slide=$(name1);
  var _slide1=$(name2);
  var _slide2=$(name3);
  _slide2.html(_slide1.html());
  function Marquee(){
    if(_slide.scrollLeft() >= _slide1.width()){
      _slide.scrollLeft(0);
    }else{
      _slide.scrollLeft(_slide.scrollLeft()+1);
    }
  }
  var sliding = setInterval(Marquee,_speed);
  _slide.hover(function(){
    clearInterval(sliding);
  },function(){
    sliding = setInterval(Marquee,_speed);
  });
}
function scrollTop(time,name1,name2,name3){
  var _speed = time;
  var _slide = $(name1);
  var _slide1 = $(name2);
  var _slide2 = $(name3);
  _slide2.html(_slide1.html());
  function Marquee(){
    if(_slide.scrollTop() >= _slide1.height()){
      _slide.scrollTop(0);
    }else{
      _slide.scrollTop(_slide.scrollTop()+1);
    }
  }
  var sliding = null;
  sliding = setInterval(Marquee,_speed);
  _slide.hover(function(){
    clearInterval(sliding);
  },function(){
    sliding = setInterval(Marquee,_speed);
  });
}