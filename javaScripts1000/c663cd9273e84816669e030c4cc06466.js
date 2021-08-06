/*
jQuery infiniteSlide Plugin
version: 1.1
Author: T.Morimoto

https://github.com/woodroots/infiniteslide
http://wood-roots.com/?p=514
*/

(function($){

$.fn.infiniteslide = function(options) {

//option
var settings = $.extend( {
		'height': 400, //é«ã
		'speed': 30, //éã
		'direction' : 'left', //åã
		'pauseonhover': true //ãã¦ã¹ãªã¼ãã¼ã§ã¹ããã
		}, options);

//éå§æã®ãã§ã¼ãã¤ã³ã¨ããªã­ã¼ã
var opening = function(obj){
	var d = new $.Deferred;

	var ul = obj.find('ul');
	var li = obj.find('li');

	
	//å¹ã®ç·åãåå¾
	i = 0;
	obj.find('img').each(function(key,value){
		$('<img />').attr('src',$(this).attr('src'));
		i = i + parseInt($(this).width());
	});

	//CSS
	obj.css({
		overflow: 'hidden'
	});
	ul.css({
		width: i*2 + 'px',
		height: settings.height + 'px',
		position: 'relative',
		overflow: 'hidden'
	}).children('li').css({
		display: 'inline',
		float: 'left'
	});
	
	//é çªã«ãã§ã¼ãã¤ã³
	li.hide().each(function(key,value){
		$(this).delay(key*200).fadeIn('slow',function(){
			$(this).clone().css('display','inline').appendTo(ul);
		});
	});
	
	d.resolve();

	return d.promise();
}


var slide = function(obj){
	var d = new $.Deferred;
	var ul = obj.children('ul');
	
	//leftãrightãã§æ¹åãå¤ãã¦ã¢ãã¡ã¼ã·ã§ã³
	//ã­ã¼ãæã®ã¿å¿è¦
	if(settings.direction == 'right'){
		ul.css('left',-1*ul.width()/2 + 'px');
	}
	
	var anim = function(){
		if(settings.direction == 'left'){
			ul.animate({
				left: '-' + ul.width()/2 + 'px'
				},ul.width()/2*settings.speed,'linear',function(){
				ul.css('left',0);
				anim();
			});
		} else if(settings.direction == 'right'){
			ul.animate({
				left: '0px'
				},ul.width()/2*settings.speed,'linear',function(){
				ul.css('left',-1*ul.width()/2 + 'px');
				anim();
			});
		}
		
		//ãã¦ã¹ãªã¼ãã¼ã§åæ­¢
		//if(settings.pauseonhover){
		//	ul.on('mouseenter',function(){
		//		$(this).pause();
		//	}).on('mouseleave',function(){
		//		$(this).resume();
		//	});
		//}
	}
	
	//ãã¹ã¦ã®ç»åãèª­ã¿è¾¼ã¿çµãã£ã¦ããã¢ãã¡ã¼ã·ã§ã³ã¹ã¿ã¼ãï¼ãããªãããã»ã»ã»ï¼
	var delay = ul.children().size() * 210;
	setTimeout(function(){anim();},delay);

	return d.promise();
}

	//å¦çã®å®è¡
	return this.each(function() {
		opening($(this)).then(slide($(this)));
	});

  };
})(jQuery);
