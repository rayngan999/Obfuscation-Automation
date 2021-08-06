//å¯¼èª
$(function(){
	//å¯¼èªæ»å¨ææ
	$('#nav .wrap-line').css({'left':$('#nav li').eq(0).position().left,'width':$('#nav li').eq(0).outerWidth()});
	$('#nav li').hover(function(){
		$('#nav .wrap-line').stop().animate({left:$(this).position().left,width:$(this).outerWidth()});	
	},function(){
		$('#nav .wrap-line').stop().animate({left:$('#nav li').eq(0).position().left,width:$('#nav li').eq(0).outerWidth()});	
	})
});