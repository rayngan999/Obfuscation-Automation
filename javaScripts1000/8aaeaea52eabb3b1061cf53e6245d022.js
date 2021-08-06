jQuery(function($){
	"use strict";
	
	$('.eventer-carousel').each(function(){
		var carouselInstance = $(this); 
		var carouselColumns = carouselInstance.attr("data-columns") ? carouselInstance.attr("data-columns") : "1";
		var carouselColumnsD = carouselInstance.attr("data-columns-small-desktop") ? carouselInstance.attr("data-columns-small-desktop") : "1";
		var carouselColumnsT = carouselInstance.attr("data-columns-tablet") ? carouselInstance.attr("data-columns-tablet") : "1";
		var carouselColumnsM = carouselInstance.attr("data-columns-mobile") ? carouselInstance.attr("data-columns-mobile") : "1";
		var carouselAutoplay = carouselInstance.attr("data-autoplay") === 'yes' ? true : false;
		var carouselAutoplayTime = carouselInstance.attr("data-autoplay-timeout") ? carouselInstance.attr("data-autoplay-timeout") : '5000';
		var carouselPagination = carouselInstance.attr("data-pagination") === 'yes' ? true : false;
		var carouselArrows = carouselInstance.attr("data-arrows") === 'yes' ? true : false;
		var carouselAutoHeight = carouselInstance.attr("data-auto-height") === 'yes' ? true : false;
		var carouselRTL = carouselInstance.attr("data-rtl") === 'yes' ? true : false;
		var carouselLoop = carouselInstance.attr("data-loop") === 'yes' ? true : false;
		var carouselMargin = carouselInstance.attr("data-margin") ? carouselInstance.attr("data-margin") : 30;
		var carouselPadding = carouselInstance.attr("data-padding") ? carouselInstance.attr("data-padding") : 0;

		carouselInstance.owlCarousel({
			loop: carouselLoop,
			items: carouselColumns,
			autoWidth: false,
			margin: parseInt(carouselMargin),
			stagePadding: parseInt(carouselPadding),
			autoplay : carouselAutoplay,
			autoplayTimeout: parseInt(carouselAutoplayTime),
			nav : carouselArrows,
			dots : carouselPagination,
			mergeFit: false,
			navText: ["<i class='eventer-icon-arrow-left'></i>","<i class='eventer-icon-arrow-right'></i>"],
			autoplayHoverPause: true,
			lazyLoad: true,
			rtl: carouselRTL,
			autoHeight: carouselAutoHeight,
			responsive:{
				0:{
					items:carouselColumnsM,
					dots:true,
					nav:false,
					stagePadding:0
				},
				768:{
					items:carouselColumnsT,
					nav:false
				},
				1000:{
					items:carouselColumnsD
				},
				1200:{
					items:carouselColumns
				}
			}
		});
	});
});