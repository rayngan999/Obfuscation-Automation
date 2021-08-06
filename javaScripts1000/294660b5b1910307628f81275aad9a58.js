/*
 *	sGallery 1.0 - simple gallery with jQuery
 *	made by bujichong 2009-11-25
 *	ä½èï¼ä¸ç¾è«  2009-11-25
 * http://hi.baidu.com/bujichong/
 *	æ¬¢è¿äº¤æµè½¬è½½ï¼ä½è¯·å°éä½èå³å¨ææï¼æ ææä»¶æ¥æºåä½è
 */

(function ($) {
$.fn.sGallery = function (o) {
    return  new $sG(this, o);
			//alert('do');
    };

	var settings = {
		thumbObj:null,//é¢è§å¯¹è±¡
		titleObj:null,//æ é¢
		botLast:null,//æé®ä¸ä¸ä¸ª
		botNext:null,//æé®ä¸ä¸ä¸ª
		thumbNowClass:'now',//é¢è§å¯¹è±¡å½åçclass,é»è®¤ä¸ºnow
		slideTime:800,//å¹³æ»è¿æ¸¡æ¶é´
		autoChange:true,//æ¯å¦èªå¨åæ¢
		changeTime:5000,//èªå¨åæ¢æ¶é´
		delayTime:100//é¼ æ ç»è¿æ¶ååºçå»¶è¿æ¶é´
	};

 $.sGalleryLong = function(e, o) {
    this.options = $.extend({}, settings, o || {});
	var _self = $(e);
	var set = this.options;
	var thumb;
	var size = _self.size();
	var nowIndex = 0; //å®ä¹å¨å±æé
	var index;//å®ä¹å¨å±æé
	var startRun;//é¢å®ä¹èªå¨è¿è¡åæ°
	var delayRun;//é¢å®ä¹å»¶è¿è¿è¡åæ°

//åå§å
	_self.eq(0).show();

//ä¸»åæ¢å½æ°
function fadeAB () {
	if (nowIndex != index) {
		if (set.thumbObj!=null) {
		$(set.thumbObj).removeClass().eq(index).addClass(set.thumbNowClass);}
		_self.eq(nowIndex).stop(false,true).fadeOut(set.slideTime);
		_self.eq(index).stop(true,true).fadeIn(set.slideTime);
		$(set.titleObj).eq(nowIndex).hide();//æ°å¢å title
		$(set.titleObj).eq(index).show();//æ°å¢å title
		nowIndex = index;
		if (set.autoChange==true) {
		clearInterval(startRun);//éç½®èªå¨åæ¢å½æ°
		startRun = setInterval(runNext,set.changeTime);}
		}
}

//åæ¢å°ä¸ä¸ä¸ª
function runNext() {
	index =  (nowIndex+1)%size;
	fadeAB();
}

//ç¹å»ä»»ä¸å¾ç
	if (set.thumbObj!=null) {
	thumb = $(set.thumbObj);
//åå§å
	thumb.eq(0).addClass(set.thumbNowClass);
		thumb.bind("mousemove",function(event){
			index = thumb.index($(this));
			fadeAB();
			delayRun = setTimeout(fadeAB,set.delayTime);
			clearTimeout(delayRun);
			event.stopPropagation();
		})
	}

//ç¹å»ä¸ä¸ä¸ª
	if (set.botNext!=null) {
		var botNext = $(set.botNext);
		botNext.mousemove(function () {
			runNext();
			return false;
		});
	}

//ç¹å»ä¸ä¸ä¸ª
	if (set.botLast!=null) {
		var botLast = $(set.botLast);
		botLast.mousemove(function () {
			index = (nowIndex+size-1)%size;
			fadeAB();
			return false;
	});
	}

//èªå¨è¿è¡
	if (set.autoChange==true) {
	startRun = setInterval(runNext,set.changeTime);
	}

}

var $sG = $.sGalleryLong;

})(jQuery);

function slide(Name,Class,Width,Height,fun){
	$(Name).width(Width);
	$(Name).height(Height);
	
	if(fun == true){
		$(Name).append('<div class="title-bg"></div><div class="title"></div><div class="change"></div>')
		var atr = $(Name+' div.changeDiv a');
		var sum = atr.length;
		for(i=1;i<=sum;i++){
			var title = atr.eq(i-1).attr("title");
			var href = atr.eq(i-1).attr("href");
			$(Name+' .change').append('<i>'+i+'</i>');
			$(Name+' .title').append('<a href="'+href+'">'+title+'</a>');
		}
		$(Name+' .change i').eq(0).addClass('cur');
	}
	$(Name+' div.changeDiv a').sGallery({//å¯¹è±¡æåå±ï¼å±ååå«å¾çåæ é¢
		titleObj:Name+' div.title a',
		thumbObj:Name+' .change i',
		thumbNowClass:Class
	});
	$(Name+" .title-bg").width(Width);
}

//ç¼©ç¥å¾
jQuery.fn.LoadImage=function(scaling,width,height,loadpic){
    if(loadpic==null)loadpic="../images/msg_img/loading.gif";
return this.each(function(){
   var t=$(this);
   var src=$(this).attr("src")
   var img=new Image();
   img.src=src;
   //èªå¨ç¼©æ¾å¾ç
   var autoScaling=function(){
    if(scaling){
     if(img.width>0 && img.height>0){ 
           if(img.width/img.height>=width/height){ 
               if(img.width>width){ 
                   t.width(width); 
                   t.height((img.height*width)/img.width); 
               }else{ 
                   t.width(img.width); 
                   t.height(img.height); 
               } 
           } 
           else{ 
               if(img.height>height){ 
                   t.height(height); 
                   t.width((img.width*height)/img.height); 
               }else{ 
                   t.width(img.width); 
                   t.height(img.height); 
               } 
           } 
       } 
    } 
   }
   //å¤çffä¸ä¼èªå¨è¯»åç¼å­å¾ç
   if(img.complete){
    autoScaling();
      return;
   }
   $(this).attr("src","");
   var loading=$("<img alt=\"å è½½ä¸­...\" title=\"å¾çå è½½ä¸­...\" src=\""+loadpic+"\" />");
  
   t.hide();
   t.after(loading);
   $(img).load(function(){
    autoScaling();
    loading.remove();
    t.attr("src",this.src);
    t.show();
	//$('.photo_prev a,.photo_next a').height($('#big-pic img').height());
   });
  });
}

//åä¸æ»å¨ä»£ç 
function startmarquee(elementID,h,n,speed,delay){
 var t = null;
 var box = '#' + elementID;
 $(box).hover(function(){
  clearInterval(t);
  }, function(){
  t = setInterval(start,delay);
 }).trigger('mouseout');
 function start(){
  $(box).children('ul:first').animate({marginTop: '-='+h},speed,function(){
   $(this).css({marginTop:'0'}).find('li').slice(0,n).appendTo(this);
  })
 }
}

//TABåæ¢
function SwapTab(name,title,content,Sub,cur){
  $(name+' '+title).mouseover(function(){
	  $(this).addClass(cur).siblings().removeClass(cur);
	  $(content+" > "+Sub).eq($(name+' '+title).index(this)).show().siblings().hide();
  });
}