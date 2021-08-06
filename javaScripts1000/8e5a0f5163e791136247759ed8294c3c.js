function sticky()
{var isChrome=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);$('.footer_float_fix').scrollToFixed({bottom:0,limit:$('.footer').offset().top});
var currURL = window.location.href;
if(currURL.includes("https://www.2banh.vn/threads/")){
	if(!isChrome){
		// $(document).ready(function(){
		// 	var summaries=$('#widget-12');
		// 	summaries.each(function(i){
		// 		var summary=$(summaries[i]);
		// 		var next=summaries[i+1];
		// 		summary.scrollToFixed({
		// 			marginTop:35,
		// 			limit:function(){
		// 				var limit=0;
		// 				if(next){
		// 					limit=$(next).offset().top-$(this).outerHeight(true)-10;
		// 				}else{
		// 					limit=$('.footer').offset().top-$(this).outerHeight(true)-75;
		// 				}
		// 				return limit;
		// 			},
		// 			zIndex:999
		// 		});
		// 	});
		// });
	}else{
		// $(document).ready(function(){
		// 	var summaries=$('#widget-12');
		// 	summaries.each(function(i){
		// 		var summary=$(summaries[i]);
		// 		var next=summaries[i+1];
		// 		summary.scrollToFixed({
		// 			marginTop:0,
		// 			limit:function(){
		// 				var limit=0;
		// 				if(next){
		// 					limit=$(next).offset().top-$(this).outerHeight(true)-10;
		// 				}else{
		// 					limit=$('.footer').offset().top-$(this).outerHeight(true)- 75 - 250;
		// 				}
		// 				return limit;
		// 			},
		// 			zIndex:999}
		// 		);
		// 	});
		// });
	}
}else{
	if(!isChrome){
		// $(document).ready(function(){
		// 	var summaries=$('#widget-23');
		// 	summaries.each(function(i){
		// 		var summary=$(summaries[i]);
		// 		var next=summaries[i+1];
		// 		summary.scrollToFixed({
		// 			marginTop:35,
		// 			limit:function(){
		// 				var limit=0;
		// 				if(next){
		// 					limit=$(next).offset().top-$(this).outerHeight(true)-10;
		// 				}else{
		// 					limit=$('.footer').offset().top-$(this).outerHeight(true)-75;
		// 				}
		// 				return limit;
		// 			},
		// 			zIndex:999
		// 		});
		// 	});
		// });
	}else{
		// $(document).ready(function(){
		// 	var summaries=$('#widget-23');
		// 	summaries.each(function(i){
		// 		var summary=$(summaries[i]);
		// 		var next=summaries[i+1];
		// 		summary.scrollToFixed({
		// 			marginTop:0,
		// 			limit:function(){
		// 				var limit=0;
		// 				if(next){
		// 					limit=$(next).offset().top-$(this).outerHeight(true)-10;
		// 				}else{
		// 					limit=$('.footer').offset().top-$(this).outerHeight(true)- 75 - 250;
		// 				}
		// 				return limit;
		// 			},
		// 			zIndex:999}
		// 		);
		// 	});
		// });
	}
}

if(!isChrome){
// 	$(document).ready(function(){var summaries=$('.float_left');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:35,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-75;}
// return limit;},zIndex:999});});});
}else{
	// $(document).ready(function(){
	// 	var summaries=$('.float_left');
	// 	summaries.each(function(i){
	// 		var summary=$(summaries[i]);
	// 		var next=summaries[i+1];
	// 		summary.scrollToFixed({
	// 			marginTop:0,
	// 			limit:function(){
	// 				var limit=0;
	// 				if(next){
	// 					limit=$(next).offset().top-$(this).outerHeight(true)-10;
	// 				}else{
	// 					limit=$('.footer').offset().top-$(this).outerHeight(true)-270;
	// 				}
	// 				return limit;
	// 			},
	// 			zIndex:999
	// 		});
	// 	});
	// });
}
$(document).ready(function(){var summaries=$('.banxe_right_forum');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:35,maxWidth:1200,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-75;}
return limit;},zIndex:999});});});if(!isChrome){$(document).ready(function(){var summaries=$('.banxe_left_forum');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:35,maxWidth:980,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-75;}
return limit;},zIndex:999});});});}
else{$(document).ready(function(){var summaries=$('.banxe_left_forum');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:0,maxWidth:980,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-75;}
return limit;},zIndex:999});});});}
if(!isChrome){$(document).ready(function(){var summaries=$('#widget-16');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:35,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-75;}
return limit;},zIndex:999});});});}
else{$(document).ready(function(){var summaries=$('#widget-16');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:0,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-75;}
return limit;},zIndex:999});});});}
if(!isChrome){$(document).ready(function(){var summaries=$('#widget-13');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:35,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.breadBoxBottom').offset().top-$(this).outerHeight(true)-65;}
return limit;},zIndex:999});});});}
else{$(document).ready(function(){var summaries=$('#widget-13');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:0,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.breadBoxBottom').offset().top-$(this).outerHeight(true)-65;}
return limit;},zIndex:999});});});}
if(!isChrome){$(document).ready(function(){var summaries=$('.cnrecentThreads');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:35,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-65;}
return limit;},zIndex:999});});});}
else{$(document).ready(function(){var summaries=$('.cnrecentThreads');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:0,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-65;}
return limit;},zIndex:999});});});}
//if(!isChrome){
	$(document).ready(function(){var summaries=$('.nav-wraper');summaries.each(function(i){var summary=$(summaries[i]);var next=summaries[i+1];summary.scrollToFixed({marginTop:25,limit:function(){var limit=0;if(next){limit=$(next).offset().top-$(this).outerHeight(true)-10;}else{limit=$('.footer').offset().top-$(this).outerHeight(true)-65;}
return limit;},zIndex:999});});});};
//}
function detectcode(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)){isMobile=true;}
else
{sticky();}};detectcode();