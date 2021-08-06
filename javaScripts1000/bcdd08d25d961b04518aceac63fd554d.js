function showBackground(){var bg_lo_options={style:"full",url:"http://elnuevodia.com",xurl:"",primaryColor:"#057144",adsTabletColor:"#fff",assetTop:"http://placehold.it/485x41",assetRight:"http://placehold.it/210x591",assetLeft:"http://placehold.it/210x591",assetTopOpts:"center",};try{$.fn.extend(bg_lo_options,bg_options);bg_lo_options.url=bg_lo_options.xurl+bg_lo_options.url;if(bg_lo_options.xurl!="")adBackground(bg_lo_options);else console.log("No BG Ad");}catch(e){return;}}
function adBackground(parameters){console.log("Setting Bg ...");var bodyClass=$("body").attr("class");var ifMultimedia=typeof bodyClass!=="undefined"?bodyClass.split(" "):{};if(parameters.style!="plain"){if($(window).innerWidth()>1000){$("body").addClass("skin").css({"background-color":parameters.primaryColor,});$("#background").css({height:"0",margin:"auto"});$(".content-container").css({"background-color":parameters.primaryColor,});var indx=$(".masthead").length>1?1:0;$($(".masthead")[indx]).waypoint(function(direction){var adSkinLeftPos=$($(".skin .wrap")[indx]).offset(),adSkinRightPos=adSkinLeftPos.left+$($(".skin .wrap")[indx]).innerWidth();if($("body").hasClass("skin-pinned")){$(".ad-skin-left, .ad-skin-right").css("left","");}else{$(".ad-skin-left").css("left",adSkinLeftPos.left-210);$(".ad-skin-right").css("left",adSkinRightPos);}
$("body").toggleClass("skin-pinned");$(".skin-pinned .ad-skin-right, .skin-pinned .ad-skin-left").css("z-index","1000");});if(ifMultimedia[0]=="multimedia"){$(".skin .content-container .wrap, .skin header.page-header .masthead .wrap, .skin header.page-header .primary-menu .wrap, .main-container .wrap").css({background:"#fff !important",});$(".main-container, .content-container, body.multimedia, .featured-container, .skin header.page-header .primary-menu, .masthead").css({background:parameters.primaryColor+" !important"});$(".featured-container .wrap").css({background:"#F4F3F4"});$(".content-container, .main-container").css({"padding-top":0});$(".main-container").css({"padding-bottom":0});$(".content-container .wrap").css({"padding-top":"5px"});}else{if(gfrM.siteConfig.section==="fotogalerias"||gfrM.siteConfig.section==="videos"){$(".multimedia.section, .multimedia.section .content-container").css({maxWidth:"1203px",margin:"auto",background:"white",});$("header.page-header").css({marginBottom:"0"});$("body").css({height:"auto"});}}
if(parameters.assetTopOpts=="center"){$("header.page-header").before('<div class="ad-skin-top" style="background-color:'+
parameters.primaryColor+
'"><div class="wrap"><a href="'+
parameters.url+
'" class="center" target="_blank"><img src="'+
parameters.assetTop+
'" /></a></div></div>');$("header.page-header .masthead > .wrap").css("position","relative").prepend('<div class="ad-skin-right"><a href="'+
parameters.url+
'" target="_blank"><img src="'+
parameters.assetRight+
'" /></a></div>').prepend('<div class="ad-skin-left"><a href="'+
parameters.url+
'" target="_blank"><img src="'+
parameters.assetLeft+
'" /></a></div>');}else if(parameters.assetTopOpts=="repeat"){$("header.page-header").before('<div class="ad-skin-top"><div class="wrap"><a href="'+
parameters.url+
'" class="left" target="_blank"><img src="'+
parameters.assetTop+
'" width="485px"/></a><a href="'+
parameters.url+
'" class="right" target="_blank"><img src="'+
parameters.assetTop+
'" width="485px" /></a></div></div>');$("header.page-header .masthead > .wrap").css("position","relative").prepend('<div class="ad-skin-right"><a href="'+
parameters.url+
'" target="_blank"><img src="'+
parameters.assetRight+
'" /></a></div>').prepend('<div class="ad-skin-left"><a href="'+
parameters.url+
'" target="_blank"><img src="'+
parameters.assetLeft+
'" /></a></div>');}else if(parameters.assetTopOpts=="fullWidth"){$("header.page-header").before('<div class="ad-skin-top"><div class="wrap"><a href="'+
parameters.url+
'" class="" target="_blank"><img src="'+
parameters.assetTop+
'" height="45px" /></a></div></div>');$(".ad-skin-top .wrap").css({"max-width":"2000px",padding:0,});$("header.page-header .masthead > .wrap").css("position","relative").prepend('<div class="ad-skin-right"><a href="'+
parameters.url+
'" target="_blank"><img src="'+
parameters.assetRight+
'" /></a></div>').prepend('<div class="ad-skin-left"><a href="'+
parameters.url+
'" target="_blank"><img src="'+
parameters.assetLeft+
'" /></a></div>');}}
if($(window).innerWidth()<1000&&$(window).innerWidth()>750){$(".ad-two-target").addClass("sponsored-ads-top").css({background:parameters.primaryColor,});$(".ads-sponsor").css({color:parameters.adsTabletColor,});}}}