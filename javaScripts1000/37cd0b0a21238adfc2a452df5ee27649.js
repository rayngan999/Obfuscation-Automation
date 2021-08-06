(function($) {
 "use strict";

$(document).ready(function() {

	
	$(".owl-demo>.owl-carousel").owlCarousel({
		autoPlay : 12000,
		stopOnHover : true,
		lazyLoad : true,
		pagination:true,
		singleItem : true,
	});
	
	$(".owl-demo2>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fade"
	});
	
	$(".owl-demo3>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fadeUp"
	});
	
	$(".owl-demo4>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"goDown"
	});
	
	$(".owl-demo5>.owl-carousel").owlCarousel({
		autoPlay : 8000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"goDown"
	});
	
	$(".owl-demo6>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fadeUp"
	});
	
	$(".owl-demo7>.owl-carousel").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : true,
		pagination:false,
	});
	
	$(".owl-demo8>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		singleItem : true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		transitionStyle:"fade"
  	});

	$(".owl-demo10>.owl-carousel").owlCarousel({
		autoPlay : 8000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"backSlide"
  	});
	
	$(".owl-demo11>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"backSlide"
	});
	
	$(".owl-demo12>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
	});
	
	$(".owl-demo13>.owl-carousel").owlCarousel({
		autoPlay : 18000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
	});
	
	$(".owl-demo14>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"goDown"
	});
	
	$(".owl-demo15>.owl-carousel").owlCarousel({
		autoPlay : 9000,
		stopOnHover : true,
		lazyLoad : true,
		pagination:true,
		singleItem : true,
	});
	
	$(".owl-demo16>.owl-carousel").owlCarousel({
		autoPlay : 12000,
		stopOnHover : true,
		lazyLoad : true,
		pagination:true,
		singleItem : true,
	});
	
	$(".owl-demo17>.owl-carousel").owlCarousel({
		items : 2,
		autoPlay : 9000,
		stopOnHover : true,
		lazyLoad : true,
		pagination:true,
		itemsDesktop : [1170,2],
		itemsDesktopSmall : [1170,2]
	});
	
	$(".owl-demo18>.owl-carousel").owlCarousel({
		autoPlay : 9000,
		stopOnHover : true,
		navigation: true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		pagination:false,
		transitionStyle:"backSlide"
  	});
	
	$(".owl-demo20>.owl-carousel").owlCarousel({
		autoPlay : 5000,
		stopOnHover : true,
		navigation: false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
	});
	
  var time = 7; // time in seconds

  var $progressBar,
	  $bar, 
	  $elem, 
	  isPause, 
	  tick,
	  percentTime;

	//Init the carousel
	$(".owl-demo9>.owl-carousel").owlCarousel({
	  slideSpeed : 500,
	  paginationSpeed : 500,
	  singleItem : true,
	  afterInit : progressBar,
	  afterMove : moved,
	  startDragging : pauseOnDragging
	});

	//Init progressBar where elem is $(".owl-demo")
	function progressBar(elem){
	  $elem = elem;
	  //build progress bar elements
	  buildProgressBar();
	  //start counting
	  start();
	}

	//create div#progressBar and div#bar then prepend to $(".owl-demo")
	function buildProgressBar(){
	  $progressBar = $("<div>",{
		id:"progressBar"
	  });
	  $bar = $("<div>",{
		id:"bar"
	  });
	  $progressBar.append($bar).prependTo($elem);
	}

	function start() {
	  //reset timer
	  percentTime = 0;
	  isPause = false;
	  //run interval every 0.01 second
	  tick = setInterval(interval, 10);
	};

	function interval() {
	  if(isPause === false){
		percentTime += 1 / time;
		$bar.css({
		   width: percentTime+"%"
		 });
		//if percentTime is equal or greater than 100
		if(percentTime >= 100){
		  //slide to next item 
		  $elem.trigger('owl.next')
		}
	  }
	}

	//pause while dragging 
	function pauseOnDragging(){
	  isPause = true;
	}

	//moved callback
	function moved(){
	  //clear interval
	  clearTimeout(tick);
	  //start again
	  start();
	}

	
	
	var sync1 = $("#sync1 .owl-carousel");
	var sync2 = $("#sync2 .owl-carousel");
	
	sync1.owlCarousel({
	singleItem : true,
	slideSpeed : 1000,
	pagination:false,
	afterAction : syncPosition,
	responsiveRefreshRate : 200,
	});
	
	sync2.owlCarousel({
	items : 5,
	itemsDesktop      : [1170,5],
	itemsDesktopSmall     : [979,5],
	itemsTablet       : [768,3],
	itemsMobile       : [479,3],
	pagination:false,
	responsiveRefreshRate : 100,
	afterInit : function(el){
	  el.find(".owl-item").addClass("synced");
	}
	});
	
	function syncPosition(el){
	var current = this.currentItem;
	$("#sync2")
	  .find(".owl-item")
	  .removeClass("synced")
	  .eq(current)
	  .addClass("synced")
	if($("#sync2").data("owlCarousel") !== undefined){
	  center(current)
	}
	
	}
	
	$("#sync2").on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).data("owlItem");
	sync1.trigger("owl.goTo",number);
	});
	
	function center(number){
	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	
	var num = number;
	var found = false;
	for(var i in sync2visible){
	  if(num === sync2visible[i]){
		var found = true;
	  }
	}
	
	if(found===false){
	  if(num>sync2visible[sync2visible.length-1]){
		sync2.trigger("owl.goTo", num - sync2visible.length+2)
	  }else{
		if(num - 1 === -1){
		  num = 0;
		}
		sync2.trigger("owl.goTo", num);
	  }
	} else if(num === sync2visible[sync2visible.length-1]){
	  sync2.trigger("owl.goTo", sync2visible[1])
	} else if(num === sync2visible[0]){
	  sync2.trigger("owl.goTo", num-1)
	}
	}
	

	var sync3 = $("#sync3");
	var sync4 = $("#sync4");
	
	sync3.owlCarousel({
	singleItem : true,
	autoPlay : 5000,
	slideSpeed : 1000,
	stopOnHover : true,
	pagination:false,
	afterAction : syncPosition,
	responsiveRefreshRate : 200,
	});
	
	sync4.owlCarousel({
		itemsDesktop      : [1170,5],
		itemsDesktopSmall     : [979,5],
		itemsTablet       : [768,3],
		itemsMobile       : [479,3],
		pagination:false,
		autoPlay : 5000,
		stopOnHover : true,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").addClass("synced");
		}
	});
	
	function syncPosition(el){
	var current = this.currentItem;
	$("#sync4")
	  .find(".owl-item")
	  .removeClass("synced")
	  .eq(current)
	  .addClass("synced")
	if($("#sync4").data("owlCarousel") !== undefined){
	  center(current)
	}
	
	}
	
	$("#sync4").on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).data("owlItem");
	sync3.trigger("owl.goTo",number);
	});
	
	function center(number){
	
		var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
		
		var num = number;
		var found = false;
		for(var i in sync4visible){
		  if(num === sync4visible[i]){
			var found = true;
		  }
		}
		
		if(found===false){
		  if(num>sync4visible[sync4visible.length-1]){
			sync4.trigger("owl.goTo", num - sync4visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync4.trigger("owl.goTo", num);
		  }
		} else if(num === sync4visible[sync4visible.length-1]){
		  sync4.trigger("owl.goTo", sync4visible[1])
		} else if(num === sync4visible[0]){
		  sync4.trigger("owl.goTo", num-1)
		}
	}


	$("#colosebut1").on( 'click', function(){
		$("#div1").fadeOut("slow");
	});
	$("#colosebut2").on( 'click', function(){
		$("#div2").fadeOut("slow");
	});
	$("#colosebut3").on( 'click', function(){
		$("#div3").fadeOut("slow");
	});
	$("#colosebut4").on( 'click', function(){
		$("#div4").fadeOut("slow");
	});
	
		
});	
	
})(jQuery);