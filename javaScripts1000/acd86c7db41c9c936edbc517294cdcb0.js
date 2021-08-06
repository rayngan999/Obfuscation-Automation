window.onload=function(){
	//Ð²ÐµÑÑÐ½ÐµÐµ Ð¼ÐµÐ½Ñ (ÑÐºÑÐ¾Ð»Ð»ÐµÑ)
		
	$("#up-button").css({'left' : $("#layout>.floor").offset().left +'px'});
	var ymenu = $("#menu").offset().top;
		
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > 100)
		{
			$("#up-button").fadeIn(500);
		}
		else
		{
			$("#up-button").fadeOut(500);
		}
		
		if (scroll >= ymenu)
		{
			$("#menu").addClass('fixed');
			$("#menu2").addClass('fixed');
		}
		else
		{
			$("#menu").removeClass('fixed');
			$("#menu2").removeClass('fixed');
		}
	});
}
//Ð·Ð°Ð¿ÑÐµÑ Ð¿Ð¾ÐºÐ°Ð·Ð° Ð²Ð¾ ÑÑÐµÐ¹Ð¼Ðµ
if (window.parent.frames.length > 0) {
    window.stop();
}

$(document).ready(function() {
    
             // Internet Explorer 6-11
                var isIE = /*@cc_on!@*/false || !!document.documentMode;
                // Edge 20+
                var isEdge = !isIE && !!window.StyleMedia;
        
                getQueueAdv();
                
                
              
                    
            
                if($(".detail-news-block").length>0){
                    $(window).scroll(function(){
                        
                        getNewsAjax();
                        activeTriggerNewBlock(); 
                       
                    });
                }
                    
                    
              
				//getAllAdvOnPage();
				
				if($("#slideshow").is('div'))
				{
                var $gallery = $('#slideshow .gallery').flickity({
					initialIndex: 1,
					cellSelector: '.gallery-cell',
					cellAlign: 'center',
                    pageDots: false,
                    imagesLoaded: true,
                    percentPosition: false,
					selectedAttraction: 0.2,
					friction: 0.8
                });
                
                // init Flickity
                var $box = $('#slideshow .button-group').flickity({
                    imagesLoaded: true,
                    percentPosition: false,
                    prevNextButtons: false,
                    pageDots: false,
                    contain: true
                });
                
                // Flickity instance
                var flkty = $gallery.data('flickity');
                // elements
                var $cellButtonGroup = $('.button-group--cells');
                var $cellButtons = $cellButtonGroup.find('.button');

                // update selected cellButtons
                $gallery.on( 'cellSelect', function() {
                  $cellButtons.filter('.is-selected')
                    .removeClass('is-selected');
                  $cellButtons.eq( flkty.selectedIndex )
                    .addClass('is-selected');
                });
                
                
                // select cell on button click
$cellButtonGroup.on( 'click', '.button', function() {
                  var index = $(this).index();
                  $gallery.flickity( 'select', index );
                });
                // previous
                $('.button--previous').on( 'click', function() {
                  $box.flickity('previous');
                });
                // next
                $('.button--next').on( 'click', function() {
                  $box.flickity('next');
                });
                
				}
				
				if($('.chronology').is('div'))
				{
				    if($('.chronology .event').length >3){
    					$('.chronology').slick({
    					  infinite: false,
    					  speed: 300,
    					  slidesToShow: 3,
    					  adaptiveHeight: true,
    					  vertical: true, 
    					  prevArrow: $(".menology a.prev"),
    					  nextArrow: $(".menology a.next")
    					});
				    }
				}

				$('.notification-icon-close, .cencel-notification').click(function (e) {
					e.preventDefault();
					$('.notification-modal').fadeOut();
					Notification.permission = 'denied';
					
				
                    var date = new Date(new Date().getTime() + 7*24*3600 * 1000);
                    document.cookie = "notificationHidden=true; path=/; expires=" + date.toUTCString();
				});

				$('.accept-notification').click(function (e) {
					subscribe();
					e.preventDefault();
                    $('.notification-modal').delay('1000').fadeOut();
				});
				
				
				$("#add-bookmarks-link").click(function(e){
				    e.preventDefault();
				    addFav();
				});
                if(!isIE && !isEdge && typeof(Notification) !== "undefined"){
    							// show modal if not subscribe for push notification
					
			        var chechperm = Notification.permission;
    
                    if(chechperm =='default'){
                        $('.notification-modal').fadeIn();
                    }
                }
                
                $('.button_respect').click(function(){
                    respect(this);
                });
                
                $('.button_birthday').click(function(){
                    birthday(this);
                });
});
/** ÐÐ°Ð³ÑÑÐ·ÑÐ¸Ðº */
$(function()
{	
	
	$("#mailform form").bind('submit', function(e){
		if ( $("#mailform form").find('input[name=fio]').val().length < 3 ) {
			alert('ÐÐ¾Ð¶Ð°Ð»ÑÐ¹ÑÑÐ°, ÑÐºÐ°Ð¶Ð¸ÑÐµ ÐÐ°ÑÐµ Ð¤ÐÐ / ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸.');
			$("#mailform form").find('input[name=fio]').focus();
			return false;
		}
		
		if ( $("#mailform form").find('input[name=phone]').val().length < 3 ) {
			alert('ÐÐ¾Ð¶Ð°Ð»ÑÐ¹ÑÑÐ°, ÑÐºÐ°Ð¶Ð¸ÑÐµ ÑÐµÐ»ÐµÑÐ¾Ð½ Ð´Ð»Ñ ÑÐ²ÑÐ·Ð¸.');
			$("#mailform form").find('input[name=phone]').focus();
			return false;
		}
			
			$.ajax({
				url: "ajax/site.php?task=Sendsubscribe", dataType: "text", type: "POST", data: $("#mailform form").serialize(), 
				success: function(data){
					if ( data != "" ) {
						alert( data );
					} else {
						alert('ÐÐ¾Ð·Ð½Ð¸ÐºÐ»Ð° ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ°Ñ Ð¾ÑÐ¸Ð±ÐºÐ°. ÐÐ¾Ð¿ÑÐ¾Ð±ÑÐ¹ÑÐµ Ð¾ÑÐ¿ÑÐ°Ð²Ð¸ÑÑ Ð·Ð°ÑÐ²ÐºÑ Ð¿Ð¾Ð·Ð´Ð½ÐµÐµ.');
					}
					return false;
				}
			});
			
		$("#mailform form input").prop('disabled', true);

		e.preventDefault();
		return false;
	});
	
	$("#up-button").bind('click', function(e){
		$('body, html').stop().animate({ scrollTop: 0 }, 500);
		e.preventDefault();
	});
	//Ð³Ð¾Ð»Ð¾ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ Ð·Ð° Ð½ÐµÐ¿Ð¾ÑÐµÑÐ½Ð¸ÐºÐ¾Ð²
	$("form[name=pollFormMod]").bind('change', function(){
		checkPoll(this);
	});
	
	if( $("form[name=gosearchform] .search").val() != '' && $("form[name=gosearchform] .search").val() != "undefined" ){
		searchlight();
	}
	
	$("#search form").bind('submit', function(e){
		if($("#search form input[name=s]").val().length == 0)
		{
			alert('ÐÐ²ÐµÐ´Ð¸ÑÐµ Ð¿Ð¾Ð¸ÑÐºÐ¾Ð²ÑÐ¹ Ð·Ð°Ð¿ÑÐ¾Ñ');
			$("#search form input[name=s]").focus();
			e.preventDefault();
		}
	});
	
	$(".highslide").fancybox();
	
		$(document).ready(function() {
			$('.neppo .item').hover(function() {
				var anim = $(this).find('.hoverwa');
				anim.css({
					left: 0,
					background: 'rgba(0, 0, 0, 0.79)'
				});
			}, function() {
				var anim = $(this).find('.hoverwa');
				anim.css({
					left: '-100%',
					background: 'rgba(0, 0, 0, 0)'
				});
			});
		});
		
	//Ð¤Ð¾ÑÐ¾Ð³Ð°Ð»ÐµÑÐµÑ
	if($('#carousel').is('div'))
	{
		 $('#carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 165,
			itemMargin: 0,
			asNavFor: '#slider',
		  });
	}
	
	if($('#slider').is('div'))
	{
		  $('#slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#carousel"
		  });
	}
	
	if( $('#horiz_container_outer').is('ul') )
		$('#horiz_container_outer').horizontalScroll();
	
	if( $("#horiz_container_outer1").is('div') )
		$('#horiz_container_outer1').horizontalScroll1();
	
	//Ð·Ð°Ð¿ÑÑÐºÐ°ÐµÐ¼ ÑÐ°ÑÐ¸ÐºÐ¸
	startTime();
	
	//ÑÑÑÐ°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ Ð²ÑÑÐ¾ÑÑ ÐºÐ°Ð»ÐµÐ½Ð´Ð°ÑÐ¸ÐºÐ° Ð½Ð° Ð³Ð»Ð°Ð²Ð½Ð¾Ð¹
	setEqualHeight($(".conta > .outside > .day"));
});

function advclick( id ){
	console.log(id);
	$.ajax({
		url: "ajax/hitsadv.php?&task=click", 
		type: "POST", 
		data: ({ 'id' : id}),
		success: function(){
			
		}
	});
	return true;
}

function respect(object){
    if($(object).hasClass("check")){ return 0;}
    
     $.ajax({
		url: "/index.php?option=com_club&task=respect&id="+$(object).data('id'), 
		type: "POST", 
	
		success: function(msg){
		  countDiv = $(object).find('.count');
		  countDiv.html(+countDiv.html()+1);
		  
		    var date = new Date(new Date().getTime() + 365*24*3600 * 1000);
            document.cookie = "respectWiki"+$(object).data('id')+"=true; path=/; expires=" + date.toUTCString();
            $(object).addClass("check");
		}   
	});
}


function birthday(object){
    if($(object).hasClass("check")){ return 0;}
    
     $.ajax({
		url: "/index.php?option=com_club&task=birthday&id="+$(object).data('id'), 
		type: "POST", 
	
		success: function(msg){
		  countDiv = $(object).find('.count');
		  countDiv.html(+countDiv.html()+1);
		  
		    var date = new Date(new Date().getTime() + 360*24*3600 * 1000);
            document.cookie = "birthdaytWiki"+$(object).data('id')+"=true; path=/; expires=" + date.toUTCString();
            $(object).addClass("check");
		}   
	});
}

//Ð¿Ð¾Ð´Ð³ÑÑÐ·ÐºÐ° ÑÐ°Ð·Ð¾Ð¼ Ð²ÑÐµÑ ÑÐµÐºÐ»Ð°Ð¼Ð½ÑÐ· Ð±Ð»Ð¾ÐºÐ¾Ð²
function getQueueAdv(){
    var host 	= location.hostname;
    id_arr="";
    id_word=""
    $(".banner").each(function(){
        if($(this).data("id")!==null && $(this).data("id")!=="" && $(this).data("id")!==undefined){
           
            if(id_arr!="") id_arr+=",";
            id_arr+=$(this).data("id")+"&&";
            if($(this).data("yandex")!==undefined && $(this).data("yandex")!==""){
                id_arr+=$(this).data("yandex");//ÑÐ½Ð´ÐµÐºÑ Ð±Ð»Ð¾ÐºÐ¸ Ð¿ÐµÑÐµÐ½ÐµÑÐµÐ½Ñ Ð² Ð±Ð°Ð·Ñ
            }
            
             if($(this).data("words")!==undefined && $(this).data("words")!==""){
                if(id_word!="") id_word+=",";
                id_word+=$(this).data("id")+"&&"+$(this).data("words");
            }
        }
    })
    
    
    $.ajax({
		url: "ajax/hitsadv.php?&task=getQueueAdv", 
		type: "POST", 
		data: ({ 'ids' : id_arr, 'host' : host, 'idwords' : id_word}),
		dataType: 'html',
		success: function(msg){
		  //  console.log(msg);
	        var obj = $.parseJSON(msg);
	       
	      //  console.log(obj);
	        for (key in obj) {
                advBlock=obj[key];
                if(advBlock!==null){
                  
                    $( '#hitsadv-'+advBlock["habid"] ).html( advBlock["html"] );
                    $( '#hitsadv-'+advBlock["habid"]+'>div').bind('click', function(){
                    	advclick($(this).attr('data-id'));
                    });
                    
                    if(advBlock["habid"]=='31'){
                       $(".banner-big").show(); 
                       setTimeout(
                            function(){
                                $(".banner-big").remove();
                            },
                            15000
                        );
                    }
                }
             
            }
            //Ð´Ð»Ñ Ð¾ÑÐ¾Ð±ÑÐ°Ð¶ÐµÐ½Ð¸Ñ
            $(".banner-catfish-bottom").addClass("active");
            $(".banner-catfish-bottom .banner").each(function(){
                contentCatFish=$(this).html();
              
               
                if($(this).find('*').length==0){
                   
                    $(this).closest(".banner-catfish-bottom").html("");
                }
            });
            
           
		}   
	});
}
//Ð¿Ð¾Ð´Ð³ÑÑÐ·ÐºÐ° ÑÐµÐºÐ»Ð°Ð¼Ñ Ð´Ð»Ñ ÑÐµÐ·Ð¸Ð½Ð¾Ð²Ð¾Ð¹ Ð»ÐµÐ½ÑÑ
function getQueueAdvRubberNews(){
    var host 	= location.hostname;
    id_arr="";
    id_word=""
    $(".banner.details-news").each(function(){
        if($(this).data("id")!==null && $(this).data("id")!=="" && $(this).data("id")!==undefined){
           
            if(id_arr!="") id_arr+=",";
            id_arr+=$(this).data("id")+"&&";
            if($(this).data("yandex")!==undefined && $(this).data("yandex")!==""){
                id_arr+=$(this).data("yandex");//ÑÐ½Ð´ÐµÐºÑ Ð±Ð»Ð¾ÐºÐ¸ Ð¿ÐµÑÐµÐ½ÐµÑÐµÐ½Ñ Ð² Ð±Ð°Ð·Ñ
            }
            
             if($(this).data("words")!==undefined && $(this).data("words")!==""){
                if(id_word!="") id_word+=",";
                id_word+=$(this).data("id")+"&&"+$(this).data("words");
            }
        }
    })
    
   
    
    $.ajax({
		url: "ajax/hitsadv.php?&task=getQueueAdv", 
		type: "POST", 
		data: ({ 'ids' : id_arr, 'host' : host, 'idwords' : id_word}),
		dataType: 'html',
		success: function(msg){
		 //   console.log(msg);
	        var obj = $.parseJSON(msg);
	       // console.log(obj);
	        for (key in obj) {
                advBlock=obj[key];
                if(advBlock!==null){
                  
                    $( '#hitsadv-'+advBlock["habid"] ).html( advBlock["html"] );
                    $( '#hitsadv-'+advBlock["habid"]+'>div').bind('click', function(){
                    	advclick($(this).attr('data-id'));
                    });
                }
             
            }
             init();
		}   
	});
	
	return true;
}
/* banners */
/*
function getAllAdvOnPage(){
    
    var host 	= location.hostname;
    id_arr="";
    id_word=""
    $(".banner").each(function(){
        if($(this).data("id")!==null && $(this).data("id")!=="" && $(this).data("id")!==undefined// && $(this).data("id")!=1 
        ){
           
            if(id_arr!="") id_arr+=",";
            id_arr+=$(this).data("id")+"&&";
            if($(this).data("yandex")!==undefined && $(this).data("yandex")!==""){
                id_arr+=$(this).data("yandex");
            }
            
             if($(this).data("words")!==undefined && $(this).data("words")!==""){
                if(id_word!="") id_word+=",";
                id_word+=$(this).data("id")+"&&"+$(this).data("words");
            }
        }
    })
   // console.log(id_arr);
   // console.log(id_word);
     $.ajax({
		url: "ajax/hitsadv.php?&task=getallblock", 
		type: "POST", 
		data: ({ 'ids' : id_arr, 'host' : host, 'idwords' : id_word}),
		dataType: 'html',
		success: function(msg){
	        var obj = $.parseJSON(msg);
	        for(var n_block=0;n_block<obj.length;n_block++){
	             
	             if($('#hitsadv-'+obj[n_block]["id"]).data("yandex")==undefined || $('#hitsadv-'+obj[n_block]["id"]).data("yandex")=="" || obj[n_block]["is_key"]=="yes"){

            		$( '#hitsadv-'+obj[n_block]["id"] ).html( obj[n_block]["code"] );
                	$( '#hitsadv-'+obj[n_block]["id"]+'>div').bind('click', function(){
        				advclick($(this).attr('data-id'));
        			});
	                 
	            }else{
                    if(getRandomInt(0,1)==1){
                		$( '#hitsadv-'+obj[n_block]["id"] ).html( obj[n_block]["code"] );
                    	$( '#hitsadv-'+obj[n_block]["id"]+'>div').bind('click', function(){
            				advclick($(this).attr('data-id'));
            			});
	                 }else{
	                     yandexAjaxAdv(obj[n_block]["id"],$('#hitsadv-'+obj[n_block]["id"]).data("yandex") );
	                 }
        			
	            }
            
	            
	        }
	        
	        setTimeout(function(){
	            $(".banner").each(function(){
	               
	                if($(this).html()=="" && $(this).data("yandex")!==undefined && $(this).data("id")!==undefined){ 
	                    //console.log($(this).data("id"));
	                    yandexAjaxAdv($(this).data("id"),$('#hitsadv-'+$(this).data("id")).data("yandex") );
	                }
	            });
	        },2000);
		
		}
	});
	return true;
}
*/
/*
function getHitsAdv( id )
{
	var host 	= location.hostname;
  
	$.ajax({
		url: "ajax/hitsadv.php?&task=getblock", 
		type: "POST", 
		data: ({ 'id' : id, 'host' : host}),
		dataType: 'html',
		success: function(msg){
			$( '#hitsadv-'+id ).html( msg );
			$( '#hitsadv-'+id+'>div').bind('click', function(){
				advclick($(this).attr('data-id'));
			});
		}
	});
	return true;
}
*/
/* banners */
function getHitsAdvYandex( id,id_yandex_block )
{
	
		(function(w, d, n, s, t) {
			w[n] = w[n] || [];
			w[n].push(function() {
				Ya.Context.AdvManager.render({
					blockId: id_yandex_block,
					renderTo: id,
					async: true
				});
			});
			t = d.getElementsByTagName("script")[0];
			s = d.createElement("script");
			s.type = "text/javascript";
			s.src = "//an.yandex.ru/system/context.js";
			s.async = true;
			t.parentNode.insertBefore(s, t);
		})(this, this.document, "yandexContextAsyncCallbacks");
	
	
	return true;
}

/* banners */
/*
function getHitsAdvAndYandex( id,id_yandex_block,keys )
{
	rand=getRandomInt(0,1);
	if(id==11) rand=1;
	if(rand==1){
		if(keys==null || keys===undefined || keys=="")
			siteAjaxAdv(id);
		else
			siteAjaxAdvTheme(id,keys);
		setTimeout(function(){
			if($( '#hitsadv-'+id ).html()==""){
				yandexAjaxAdv(id,id_yandex_block );
				//console.log("lol");console.log(id);
			}
		},5000);
	}else{
		yandexAjaxAdv(id,id_yandex_block );
	}
	
	
	
	return true;
}
*/   /*
function siteAjaxAdvTheme(id,theme){
 
	var host 	= location.hostname;
		count_adv_ajax++;
		$.ajax({
			url: "ajax/hitsadv.php?&task=getblock", 
			type: "POST", 
			data: ({ 'id' : id, 'host' : host,'theme':theme}),
			dataType: 'html',
			success: function(msg){
				$( '#hitsadv-'+id ).html( msg );
				$( '#hitsadv-'+id+'>div').bind('click', function(){
					advclick($(this).attr('data-id'));
				});
			}
		});
	
}	*/
	/*
function siteAjaxAdv(id){
	var host 	= location.hostname;

		$.ajax({
			url: "ajax/hitsadv.php?&task=getblock", 
			type: "POST", 
			data: ({ 'id' : id, 'host' : host}),
			dataType: 'html',
			success: function(msg){
				$( '#hitsadv-'+id ).html( msg );
				$( '#hitsadv-'+id+'>div').bind('click', function(){
					advclick($(this).attr('data-id'));
				});
			}
		});

}	*/
/*
function yandexAjaxAdv(id,id_yandex_block ){
	(function(w, d, n, s, t) {
			w[n] = w[n] || [];
			w[n].push(function() {
				Ya.Context.AdvManager.render({
					blockId: id_yandex_block,
					renderTo: 'hitsadv-'+id,
					async: true
				});
			});
			t = d.getElementsByTagName("script")[0];
			s = d.createElement("script");
			s.type = "text/javascript";
			s.src = "//an.yandex.ru/system/context.js";
			s.async = true;
			t.parentNode.insertBefore(s, t);
		})(this, this.document, "yandexContextAsyncCallbacks");
}
*/

function addFav() {
    var title = document.title,
        url = document.location,
        UA = navigator.userAgent.toLowerCase(),
        isFF = UA.indexOf('firefox') != -1,
        isMac = UA.indexOf('mac') != -1,
        isWebkit = UA.indexOf('webkit') != -1,
        isIE = UA.indexOf('.net') != -1;
    
    if ((isIE || isFF) && window.external) { // IE, Firefox
        window.external.AddFavorite(url, title);
        return false;
    }
    
    if (isMac || isWebkit) { // Webkit (Chrome, Opera), Mac
        alert('ÐÐ°Ð¶Ð¼Ð¸ÑÐµ "' + (isMac ? 'Command/Cmd' : 'Ctrl') + ' + D" Ð´Ð»Ñ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ ÑÑÑÐ°Ð½Ð¸ÑÑ Ð² Ð·Ð°ÐºÐ»Ð°Ð´ÐºÐ¸');
        return false;
    }
}


// Ð¸ÑÐ¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ Math.round() Ð´Ð°ÑÑ Ð½ÐµÑÐ°Ð²Ð½Ð¾Ð¼ÐµÑÐ½Ð¾Ðµ ÑÐ°ÑÐ¿ÑÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkPoll(form) 
{
	var poll 		= $.cookie("shame7");
	
	if(typeof(form.voteid.length) == "undefined"){
		var radio = [];
		radio[0] = form.voteid;
	}
	else{
		var radio = form.voteid;
	}
	
	var radioLength = radio.length;
	var check 		= 0;
	var vid 		= 0;

	if ( poll == 1 ) {
		alert('ÐÑ ÑÐ¶Ðµ Ð³Ð¾Ð»Ð¾ÑÐ¾Ð²Ð°Ð»Ð¸');
		return false;
	}
	
	for(var i = 0; i < radioLength; i++) {
		if(radio[i].checked) {
			vid = radio[i].value;
			$.cookie( "shame7", "1", {expires:1} );
			$.ajax({ url: "ajax/site.php", global: false, type: "POST",
				data: ({ task : 'setshame', vote : radio[i].value }),
				success: function(msg){
					alert(msg);
					countpoint = $('label[for=voteid'+vid+']').closest('.item').find('span.ball span').text();
					if(countpoint == '')
						countpoint = 0;
					$('label[for=voteid'+vid+']').closest('.item').find('span.ball').animate({'opacity' : 0}, 600, function(){
						var votecount = parseInt(countpoint) + 1;
						$('label[for=voteid'+vid+']').closest('.item').find('span.ball').html('-<span>'+votecount+'</span>');
						$('label[for=voteid'+vid+']').closest('.item').find('span.ball').animate({'opacity' : 1}, 600);
					});
				}
			});
			check = 1;
		}
	}
	
	if (check == 0) {
		alert('Ð¡Ð´ÐµÐ»Ð°Ð¹ÑÐµ Ð²ÑÐ±Ð¾Ñ Ð²ÑÑÐ¸Ð°Ð½ÑÐ° Ð¾ÑÐ²ÐµÑÐ°');
		return false;
	}
}

function searchlight() {
   searchTerm = $("form[name=gosearchform] .search").val();
   searchRegex  = new RegExp(searchTerm, 'ig');
   $("#listing .col2 *").replaceText( searchRegex, '<span class="searchlight">'+searchTerm+'</span>');
}

$.fn.replaceText = function( search, replace, text_only ) {
  return this.each(function(){
    var node = this.firstChild,
      val,
      new_val,
      remove = [];
    if ( node ) {
      do {
        if ( node.nodeType === 3 ) {
          val = node.nodeValue;
          new_val = val.replace( search, replace );
          if ( new_val !== val ) {
            if ( !text_only && /</.test( new_val ) ) {
              $(node).before( new_val );
              remove.push( node );
            } else {
              node.nodeValue = new_val;
            }
          }
        }
      } while ( node = node.nextSibling );
    }
    remove.length && $(remove).remove();
  });
};

//Ð§Ð°ÑÐ¸ÐºÐ¸
function startTime()
{
	var tm=new Date();
	var h=tm.getHours();
	var m=tm.getMinutes();
	var s=tm.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	$("#timermod").html(h+":"+m);
	t=setTimeout('startTime()',500);
}
function checkTime(i)
{
	if (i<10)
	{
	i="0" + i;
	}
	return i;
}
//Ð§Ð°ÑÐ¸ÐºÐ¸

function setEqualHeight(columns)
{
	var tallestcolumn = 0;
	columns.each(
		function()
		{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}
firebase.initializeApp({
    messagingSenderId: '1067807377488'
});

// Ð±ÑÐ°ÑÐ·ÐµÑ Ð¿Ð¾Ð´Ð´ÐµÑÐ¶Ð¸Ð²Ð°ÐµÑ ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ
// Ð²Ð¾Ð¾Ð±ÑÐµ, ÑÑÑ Ð¿ÑÐ¾Ð²ÐµÑÐºÑ Ð´Ð¾Ð»Ð¶Ð½Ð° Ð´ÐµÐ»Ð°ÑÑ Ð±Ð¸Ð±Ð»Ð¸Ð¾ÑÐµÐºÐ° Firebase, Ð½Ð¾ Ð¾Ð½Ð° ÑÑÐ¾Ð³Ð¾ Ð½Ðµ Ð´ÐµÐ»Ð°ÐµÑ
if ('Notification' in window) {
    var messaging = firebase.messaging();

    // Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ ÑÐ¶Ðµ ÑÐ°Ð·ÑÐµÑÐ¸Ð» Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ð¹
    // Ð¿Ð¾Ð´Ð¿Ð¸ÑÑÐ²Ð°ÐµÐ¼ Ð½Ð° ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ ÐµÑÐ»Ð¸ ÐµÑÑ Ð½Ðµ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð»Ð¸
    if (Notification.permission === 'granted') {
        subscribe();
    }





    var permission = Notification.permission;

}

function subscribe() {
    // Ð·Ð°Ð¿ÑÐ°ÑÐ¸Ð²Ð°ÐµÐ¼ ÑÐ°Ð·ÑÐµÑÐµÐ½Ð¸Ðµ Ð½Ð° Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ð¹
    messaging.requestPermission()
        .then(function () {
            // Ð¿Ð¾Ð»ÑÑÐ°ÐµÐ¼ ID ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ð°
            messaging.getToken()
                .then(function (currentToken) {
                   

                    if (currentToken) {
                        sendTokenToServer(currentToken);
                    } else {
                        console.warn('ÐÐµ ÑÐ´Ð°Ð»Ð¾ÑÑ Ð¿Ð¾Ð»ÑÑÐ¸ÑÑ ÑÐ¾ÐºÐµÐ½.');
                        setTokenSentToServer(false);
                    }
                })
                .catch(function (err) {
                    console.warn('ÐÑÐ¸ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ð¸ ÑÐ¾ÐºÐµÐ½Ð° Ð¿ÑÐ¾Ð¸Ð·Ð¾ÑÐ»Ð° Ð¾ÑÐ¸Ð±ÐºÐ°.', err);
                    setTokenSentToServer(false);
                });
        })
        .catch(function (err) {
            console.warn('ÐÐµ ÑÐ´Ð°Ð»Ð¾ÑÑ Ð¿Ð¾Ð»ÑÑÐ¸ÑÑ ÑÐ°Ð·ÑÐµÑÐµÐ½Ð¸Ðµ Ð½Ð° Ð¿Ð¾ÐºÐ°Ð· ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ð¹.', err);
        });
}

// Ð¾ÑÐ¿ÑÐ°Ð²ÐºÐ° ID Ð½Ð° ÑÐµÑÐ²ÐµÑ
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer(currentToken)) {
        // console.log('ÐÑÐ¿ÑÐ°Ð²ÐºÐ° ÑÐ¾ÐºÐµÐ½Ð° Ð½Ð° ÑÐµÑÐ²ÐµÑ...');

        var url = 'https://newsomsk.ru/administrator/savetoken.php'; // Ð°Ð´ÑÐµÑ ÑÐºÑÐ¸Ð¿ÑÐ° Ð½Ð° ÑÐµÑÐ²ÐµÑÐµ ÐºÐ¾ÑÐ¾ÑÑÐ¹ ÑÐ¾ÑÑÐ°Ð½ÑÐµÑ ID ÑÑÑÑÐ¾Ð¹ÑÑÐ²Ð°
        $.post(url, {
            token: currentToken
        });

        setTokenSentToServer(currentToken);
    } else {
        
        // console.log('Ð¢Ð¾ÐºÐµÐ½ ÑÐ¶Ðµ Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÐµÐ½ Ð½Ð° ÑÐµÑÐ²ÐµÑ.');
    }
}

// Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÐµÐ¼ localStorage Ð´Ð»Ñ Ð¾ÑÐ¼ÐµÑÐºÐ¸ ÑÐ¾Ð³Ð¾,
// ÑÑÐ¾ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ ÑÐ¶Ðµ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð»ÑÑ Ð½Ð° ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ
function isTokenSentToServer(currentToken) {
    return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
}

function setTokenSentToServer(currentToken) {
    window.localStorage.setItem(
        'sentFirebaseMessagingToken',
        currentToken ? currentToken : ''
    );
}


function addFav() {

  var title = document.title,
    url = document.location,
    UA = navigator.userAgent.toLowerCase(),
    isFF = UA.indexOf('firefox') != -1,
    isMac = UA.indexOf('mac') != -1,
    isWebkit = UA.indexOf('webkit') != -1,
    isIE = UA.indexOf('.net') != -1;
 
 
 

    alert('ÐÐ°Ð¶Ð¼Ð¸ÑÐµ "' + (isMac ? 'Command/Cmd' : 'Ctrl') + ' + D" Ð´Ð»Ñ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ ÑÑÑÐ°Ð½Ð¸ÑÑ Ð² Ð·Ð°ÐºÐ»Ð°Ð´ÐºÐ¸');
    return false;
  
}

var global_flag_ajax_new=true;
var n_news_lenta=0;

function  getNewsAjax(){
    if(global_flag_ajax_new==true ){
       
        windowBottom=+$(window).scrollTop()+$(window).height();
        blockHeight=$(".content-more:last .n-col2").offset().top + $(".content-more:last .n-col2").height();
    
        if( windowBottom > blockHeight){
            
             global_flag_ajax_new=false;
            id_new=$(".content-more:last").attr("id_new");
            id_type=$(".content-more:last").attr("id_type");
            id_head=$(".content-more:last").attr("id_head");
            if(id_new===null || id_new===undefined || id_type===null || id_type===undefined){
                console.log("ÐÑÐ¸Ð±ÐºÐ°, Ð½ÐµÑ id Ð¸Ð»Ð¸ type");
                return 1;
            }
            
            $(".banner.details-news canvas,.banner.details-news div").removeAttr("id");
            $(".banner.details-news").removeAttr("id");
            $(".banner.details-news").removeClass("details-news");
          
         
            $.ajax({
            	url: "ajax/news.php?&task=getNews", 
            	type: "POST", 
            	data: ({"id":id_new,"type":id_type,"ajax":"true","id_head":id_head}),
            	dataType: 'html',
            	success: function(msg){
            	 
            	    
            	    $("#content").append(msg);
            	    
            	    n_news_lenta++;
            	    $(".content-more:last").attr("number",n_news_lenta);
            	    
            	    getQueueAdvRubberNews();
            	   
            	    
            	    //ÑÑÐ¾Ð±Ñ Ð¼ÐµÑÑÐ¸ÐºÐ¸ ÑÑÐ¸ÑÑÐ²Ð°Ð»Ð¸
                    link="/"+$(".content-more:last").attr("link");
                    urlDoc='https://'+location.hostname+"/"+$(".content-more:last").attr("link");
                    yaCounter30960606.hit(link, {
                        referer: window.location.href
                    });
                    
                    advPartner1=$("#smi_teaser_12419 .smiteaser-row12419:first").html();
                    advPartner2=$("#smi_teaser_12419 .smiteaser-row12419:nth-child(2)").html();
                    $(".block-adv-kolon-polter .adv1:last").html(advPartner1);
                    $(".block-adv-kolon-polter .adv2:last").html(advPartner2);
                    
            	   invisBlockMetrick='<div style="display:none;">'+
            	   '<img src="//counter.yadro.ru/hit?t13.1;r'+escape(window.location.href)+((typeof(screen)=="undefined")?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+';u'+escape(urlDoc)+';'+Math.random()+'" alt="" title="LiveInternet: Ð¿Ð¾ÐºÐ°Ð·Ð°Ð½Ð¾ ÑÐ¸ÑÐ»Ð¾ Ð¿ÑÐ¾ÑÐ¼Ð¾ÑÑÐ¾Ð² Ð·Ð° 24 ÑÐ°ÑÐ°, Ð¿Ð¾ÑÐµÑÐ¸ÑÐµÐ»ÐµÐ¹ Ð·Ð° 24 ÑÐ°ÑÐ° Ð¸ Ð·Ð° ÑÐµÐ³Ð¾Ð´Ð½Ñ" border="0" width="88" height="31">'+
            	   '<img rel="nofollow" src="https://counter.rambler.ru/top100.cnt?3121330" alt="Ramblers Top100" border="0" />'+
            	   '<img rel="nofollow" src="//top-fwz1.mail.ru/counter?id=2673206;t=603;l=1" border="0" height="40" width="88" alt="Ð ÐµÐ¹ÑÐ¸Ð½Ð³@Mail.ru">'+
            	   '<img src="https://informer.yandex.ru/informer/30960606/3_0_B9B9B9FF_999999FF_0_pageviews"style="width:88px; height:31px; border:0;" alt="Ð¯Ð½Ð´ÐµÐºÑ.ÐÐµÑÑÐ¸ÐºÐ°" title="Ð¯Ð½Ð´ÐµÐºÑ.ÐÐµÑÑÐ¸ÐºÐ°: Ð´Ð°Ð½Ð½ÑÐµ Ð·Ð° ÑÐµÐ³Ð¾Ð´Ð½Ñ (Ð¿ÑÐ¾ÑÐ¼Ð¾ÑÑÑ, Ð²Ð¸Ð·Ð¸ÑÑ Ð¸ ÑÐ½Ð¸ÐºÐ°Ð»ÑÐ½ÑÐµ Ð¿Ð¾ÑÐµÑÐ¸ÑÐµÐ»Ð¸)" />'+
            	   '<img rel="nofollow" src="https://yandex.ru/cycounter?newsomsk.ru" alt="Ð¢ÐÐ¦" />'+
            	   '</div>';
            	  
            	    $(".content-more:last .n-col2").append(invisBlockMetrick);
            	    
            	    
            	    global_flag_ajax_new=true;
                  
            	},
            	error: function(msg){
            	    //console.log(msg);
            	}
            });
            return false;
            
        }
    }                   
    
    return true;
}


function activeTriggerNewBlock(){
    windowCenter=+$(window).scrollTop()+$(window).height()/2;
    $(".content-more .n-col2").each(function(){
        
        parentBlock =  $(this).closest(".content-more");
       
        
        blockBottom=$(this).offset().top + $(this).height();
        blockTop=$(this).offset().top;
        
        if(windowCenter>blockTop && windowCenter<blockBottom){
            if( !$(parentBlock).hasClass("active")){
                $(parentBlock).addClass("active");
               
                oldNewBlock = $(".banner-left-detail-new:first").html();
                $(".banner-left-detail-new:last").html(oldNewBlock);
                //getHitsAdvYandex('hitsAdvYandex-1-'+$(parentBlock).attr('id_new'),"R-A-275019-14"); 
                
                titleDoc=$(parentBlock).find("h1").html();
             
             
             
             
             
                //ÐÐÐ¡Ð¢Ð«ÐÐ¬ ÐÐ¢ 25.07.2019 ÐÐ¡ÐÐ ÐÐ ÐÐÐ¢Ð£ÐÐÐ¬ÐÐ Ð£ÐÐ ÐÐ¢Ð¬ ÐÐ¤, ÐÐ¡Ð¢ÐÐÐÐ¢Ð¬ Ð¢ÐÐÐ¬ÐÐ Ð¢Ð, Ð§Ð¢Ð ÐÐÐ£Ð¢Ð Ð ÐÐÐ¡
                if(jQuery(location).attr('href').indexOf('dostupnaya_nakrutka_kommentariev_instagram_9_ulyot') > -1){
                    document.title = "ÐÐµÐ´Ð¾ÑÐ¾Ð³Ð°Ñ Ð½Ð°ÐºÑÑÑÐºÐ° Ð¶Ð¸Ð²ÑÑ ÐºÐ¾Ð¼Ð¼ÐµÐ½ÑÐ°ÑÐ¸ÐµÐ² ÐÐ½ÑÑÐ°Ð³ÑÐ°Ð¼ Ð¾Ñ 0,03Ñ";
                }else{
                  document.title = titleDoc ; 
                }
                
                
                
               
                urlDoc='https://'+location.hostname+"/"+$(parentBlock).attr("link");
              
                history.pushState('', '', urlDoc);
            }
        }else{
             if( $(parentBlock).hasClass("active"))
                $(parentBlock).removeClass("active");
        }
    });
    
    

}