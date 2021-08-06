

var current_image = jsvars.slideshow_images[jsvars.first_image_index];

$(function() {
    //
    // Setup Slideshow
    //


	$(".homepage_body").backstretch(current_image.image, {
		duration: 10000, 
		fade: 1000, 
		lazyload: true, 
		pause: true, 
		start:0, 
		default_height:432, 
		default_width:1028 
	});
	$(".homepage_body").css({ zIndex:1 })
	$('.homepage_body').data('backstretch').pause();
});


$("html").on("click", ".homepage_body .arrow_right", function(){
	$(".image_credit").fadeOut()
	$('.homepage_body').data('backstretch').next();
	$('.homepage_body').data('backstretch').cacheNext();
	_gaq.push(['_trackEvent', 'homepage_slideshow', 'slide_right','click']);
});

$("html").on("click", ".homepage_body .arrow_left", function(){
	$(".image_credit").fadeOut()
	$('.homepage_body').data('backstretch').prev();
	$('.homepage_body').data('backstretch').cachePrev();
	_gaq.push(['_trackEvent', 'homepage_slideshow', 'slide_left','click']);
});


//
// Right and Left arrow keys
//
$("html").on("keyup", function(e) { 
	if(!$(e.target).is( "input:focus" )) {
		if(e.keyCode == 39) { //right
			$(".homepage_body .arrow_right").click();
		} else if(e.keyCode == 37) { //left
			$(".homepage_body .arrow_left").click();
		}
	}
});



$("html").on("backstretch.show",function(){
	if(typeof $('.homepage_body').data('backstretch') == "undefined" || $('.homepage_body').data('backstretch').images.length <= 1) {
		// load was not called yet
		return;
	}
	var current_image = jsvars.slideshow_images[$('.homepage_body').data('backstretch').index];
	$(".image_credit a").text(current_image.credit).attr("href","/search/?contributor="+current_image.credit);
	$(".image_credit").fadeIn()
});



//
// Load rest of images
//
$(window).load(function(){
	var tmp = [];

	// reset the array;
	$('.homepage_body').data('backstretch').images.length = 0;

	// add images to slideshow
	$.each(jsvars.slideshow_images, function(i, v){
		$('.homepage_body').data('backstretch').images.push(v.image)
	});

	// set slideshow to current image
	$('.homepage_body').data('backstretch').index = jsvars.first_image_index;
	// and show it.
	$('.homepage_body').data('backstretch').show(jsvars.first_image_index);


	setTimeout(function(){
		$(".homepage_body .arrow_right, .homepage_body .arrow_left").fadeIn(500);
	},2000);

	$('.homepage_body').data('backstretch').cacheNext();
	
});


$("html").on("click",".homepage_pricing", function(){
	go("/subscribe/")
});


$("html").on("click",".homepage_pricing_2 .module", function(){
	document.location = '/subscribe/payment/'+$(this).data("product");
});


