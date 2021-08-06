$(document).ready(function(){
            	
   	$('.head-open-button').click(
		function() {
		    
		    $('.head-open-button').toggleClass('active');
            $('.head-slider').slideToggle('fast');
            	});
            	
   	$('.on-player-close, .bot-player-close').click(
		function() {
            $('.on-player-wrap').hide();
            	});
 
});