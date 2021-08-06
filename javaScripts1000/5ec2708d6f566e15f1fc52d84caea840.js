function privacy_policy()
{
	var w_width = jQuery(window).width();
	if(w_width > 1250)
		{
			jQuery('#menu-header-menu .privacy_policy_menu').siblings("privacy_policy_menu").hide;
			jQuery('#menu-header-menu #menu-header-menu li:last-child').show();
		}
	else
		{
			jQuery('#menu-header-menu .privacy_policy_menu').clone().insertBefore("#menu-header-menu > li.before_privacy");
			jQuery('#menu-header-menu > li:last-child').hide();
		}
}

function check_ads(){
	jQuery('#sidebar #add_160x600').removeClass('sticky');
	if(jQuery('#sidebar #sidebar--scroll').length){
		cats = document.querySelector('#sidebar #add_160x600');
		cats2 = document.querySelector('#sidebar #sidebar--scroll');
		origOffsetY = cats2.offsetTop;
		
		window.scrollY >= origOffsetY ? cats.classList.add('sticky') :	cats.classList.remove('sticky');
	}
	
}

jQuery(document).ready(function(){	
	check_ads();
	
	setTimeout(function(){
		 check_ads();
	},500);
	setTimeout(function(){
		 check_ads();
	},1000);
	setTimeout(function(){
		 check_ads();
	},1500);
	 setTimeout(function(){
		 check_ads();
	},2500);
	 setTimeout(function(){
		 check_ads();
	},3000);
	 
	 privacy_policy();
	 //console.log('test');
	 
	 jQuery('.close--ads').on('click', function(){
		 jQuery('.bottom_sticky_banner').remove();
	 });
	 
	 var ww = jQuery(window).width();
		var dists = -160;
		if(jQuery(window).width() < 768){
			 dists = -50;
		}
		if(jQuery('body').hasClass('single-post')){
			var $load_elements = jQuery('.singleads');
		}
		else{
			var $load_elements = jQuery('#footer');
		}
		if( ww<=768 ){
			$elem = jQuery(".bottom_sticky_banner.onlymob");
		}
		else{
			$elem = jQuery(".bottom_sticky_banner.onlydsk");
		}
		var $window = jQuery(window);
	function check_if_in_view() {
		 var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height)-dists;
		  jQuery.each($load_elements, function() {
		    var $element = jQuery(this);
		    
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);
		    //check to see if this current container is within viewport
		    if (
		        (element_top_position <= window_bottom_position)){
		     	$elem.addClass('hiddenelement');
		      
		    } else if(window_top_position > 240) {
		      	$elem.removeClass('hiddenelement');
		    }
		  });
	}
	jQuery(window).on('scroll resize', check_if_in_view); 
});

var ww = jQuery(window).width();
if( ww<=768 )
{
	jQuery(window).scroll(function() {
		   var scrollTop = jQuery(window).scrollTop();
		   if(scrollTop>24)
		   { 
			//jQuery(".facebook_like_page").fadeIn();
		   }
		   else
		   {
			   //jQuery(".facebook_like_page").fadeOut();  
		   }
		
		if(scrollTop>240)
		{ 
			jQuery(".bottom_sticky_banner.onlymob").removeClass('hiddenelement');
		}
		else
		{
			jQuery(".bottom_sticky_banner.onlymob").addClass('hiddenelement');
		}
		
		  });
}else{
	jQuery(window).scroll(function() {		
		var scrollTop = jQuery(window).scrollTop();
		if(scrollTop>240)
		{ 
			jQuery(".bottom_sticky_banner.onlydsk").removeClass('hiddenelement');
		}
		else
		{
			jQuery(".bottom_sticky_banner.onlydsk").addClass('hiddenelement');
		}
	});
}

jQuery(window).load(function(){	
	check_ads();
});
function onScroll(e) {
	if(jQuery('#sidebar #sidebar--scroll').length){
	cats = document.querySelector('#sidebar #add_160x600');
	cats2 = document.querySelector('#sidebar #sidebar--scroll');
	origOffsetY = cats2.offsetTop;
	//console.log(origOffsetY+" scroll: "+window.scrollY);
  window.scrollY >= origOffsetY ? cats.classList.add('sticky') :
	  								cats.classList.remove('sticky');
	}
}
document.addEventListener('scroll', onScroll);