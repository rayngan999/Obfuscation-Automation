function mvInitResponsiveCarousels(customSelector){
	if(!customSelector){
		customSelector = $('.mv_static_slider');
	}
	$.each(customSelector,function(){
		var jcarousel = $(this);
		//var step = 3;
		jcarousel
			.on('jcarousel:reload jcarousel:createend', function (event, carousel) {
				event.stopPropagation();
				//setTimeout(function(){
				var childrenCount		= jcarousel.find('.mv_videos_container_fluid').children().not('.clear').length;
				var singleChildWidth 	= jcarousel.find('.mv_videos_container_fluid').children().first().width();
				var singleChildMargin	= parseInt(jcarousel.find('.mv_videos_container_fluid').children().first().css('margin-right'));
				var width = childrenCount * (singleChildMargin+singleChildWidth);
				//jcarousel.find('.mv_videos_container_fluid').css('width', width + 'px');
				jcarousel.find('.mv_videos_container_fluid').children().not('.clear').last().addClass('last');
				//console.log(carousel.visible().not('.clear'));
				//console.log('---------');
				/*console.log('VISIBLE : '+carousel.visible().not('.clear').length)
				 console.log('TOTAL : '+carousel.items().length)
				 console.log('Children : '+childrenCount);*/
				if(carousel.visible().not('.clear').length >= childrenCount){
					jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.left_arrow').addClass('inactive');
					jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.right_arrow').addClass('inactive');
				}
				else if(carousel.items().length == carousel.visible().not('.clear').length){
					jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.left_arrow').addClass('inactive');
					jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.right_arrow').addClass('inactive');
				}

				/*else{
				 if(carousel.target().index() > 0){
				 //jcarousel.jcarousel('scroll', 0);
				 //console.log(carousel.fullyvisible().not('.clear').last().hasClass('last'));
				 if(carousel.fullyvisible().not('.clear').last().hasClass('last')){

				 console.log('Index:'+carousel.target().index());
				 jcarousel.jcarousel('scroll', carousel.target().index()-1);
				 }
				 jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.left_arrow').removeClass('inactive');
				 }else{
				 console.log(carousel.visible().not('.clear').length);
				 jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.right_arrow').removeClass('hidden').removeClass('inactive');
				 }
				 }*/
			})
			.jcarousel({
				start : 1,
				animation: {
					duration: 300,
					easing:   'linear'
				}
			});


		//jcarousel.destroy();
		//console.log(jcarousel.jcarousel('destroy'));
		//console.log(typeof jcarousel.jcarousel);

		jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.left_arrow')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
				$(this).removeClass('hidden');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('click',function(){
				if($(document).width() < 1262 && parseInt(jcarousel.attr('data-small-step'))){
					console.log('small-step');
					step = parseInt(jcarousel.attr('data-small-step'));
				}else{
					step = 3;
				}
				jcarousel.jcarousel('scroll', '-='+step);
			});

		jcarousel.parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.right_arrow').on('click',function(){
			if($(document).width() < 1262 && parseInt(jcarousel.attr('data-small-step'))){
				console.log('small-step');
				step = parseInt(jcarousel.attr('data-small-step'));
			}else{
				step = 3;
			}
			var curLastVisible	= jcarousel.jcarousel('visible').not('.clear').index();
			var nextLastVisible	= jcarousel.jcarousel('visible').not('.clear').index()+step;
			var totalItems 	= jcarousel.jcarousel('items').not('.clear').last().index();
			//console.log(curLastVisible +'-'+nextLastVisible+'-'+totalItems);
			//console.log(jcarousel.jcarousel.visible());
			if(nextLastVisible > totalItems){
				jcarousel.jcarousel('scroll', '+='+(totalItems-curLastVisible));
				//jcarousel.jcarousel('scroll', '+=3');
			}else{
				jcarousel.jcarousel('scroll', '+='+step);
			}

		});

		jcarousel.on('jcarousel:lastin', 'div', function(event, carousel) {
			event.stopPropagation();
			var c = carousel.target().index()+carousel.visible().not('.clear').length;
			//console.log(carousel.target().index()+carousel.visible().not('.clear').length);
			//console.log(carousel.items().not('.clear').length);

			/*console.log(carousel._last);
			 console.log(this);
			 console.log('--------')*/
			//console.log($(this).hasClass('last'));
			if($(this).hasClass('last') || $(this).hasClass('clear')){
				$(this).parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.right_arrow').addClass('inactive');
			}else{
				$(this).parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.right_arrow').removeClass('inactive');
				//console.log(carousel.fullyvisible().not('.clear').last().hasClass('last'));
			}
		});

		jcarousel.on('jcarousel:firstin', 'div', function(event, carousel) {
			event.stopPropagation();
			if(carousel.target().index() == 0){
				$(this).parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.left_arrow').addClass('inactive');
			}else{
				$(this).parents('.mv_videos_container').find('.mv_fluid_vid_slider_arrow.left_arrow').removeClass('inactive');
				//console.log(carousel.fullyvisible().not('.clear').last().hasClass('last'));
			}
		});

	});
}

(function($) {
    $(function() {



		mvInitResponsiveCarousels();

    });
})(jQuery);