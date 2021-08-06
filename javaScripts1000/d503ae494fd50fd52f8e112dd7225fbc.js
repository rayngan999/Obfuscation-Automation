$(document).ready(function(){
            	
   	$('.hd-btn').click(
		function() {
		    
		    $('.hd-btn').toggleClass('active');
            $('.hd-sl').slideToggle('fast');
            	});
            	
   	$('.on-pl-close, .on-pl-close-btn').click(
		function() {
            $('.on-pl-h').hide();
            	});
 
});