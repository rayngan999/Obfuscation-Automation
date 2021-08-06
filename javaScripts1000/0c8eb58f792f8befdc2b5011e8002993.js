jQuery(function(){

    $(document).on("click", "#main_menu_button", function(){
        if ($(".main-menu .menu").hasClass("close")) {
            $(".main-menu .menu").removeClass("close");
        }
        else {
            $(".main-menu .menu").addClass("close");
        }
    });
	
	// $(window).resize(function(){
		// widthDoc = $(document).width();
		// a_banners_init(widthDoc);
		// //console.log("resize");
    // });	
	
	var widthDoc = $(window).width();
	$(window).resize(function(){
	  if($(window).width() != widthDoc){
		//DO RESIZE
		a_banners_init(widthDoc);
		widthDoc = $(window).width();
	  }
	});
	
	
	
	widthDoc = $(document).width();
	a_banners_init(widthDoc);
	
	
});


function a_banners_init(widthDoc) {
	single_body = $("body.single").length;
	$(".add-full-line").remove();
	$(".contentColumn .chronicle-posts .widget_banners-widget").remove();
	//$(".contentColumn .chronicle-posts iframe.banner-dor").remove();
	
	$(".single-post .contentColumn .widget_banners-widget").each(function(i,el) {
		el = $(this).parent(".banners-contexts");
		
			//console.log(el);
			//console.log($(this));
			
		if ($(el).length > 0) {
		} else {
			$(this).remove();
		}
	});
	
	
	
	//iframe_ban = $("iframe.banner-dor")[0].outerHTML;
	
	arr_banners = $(".rightColumn .widget_banners-widget .banners-widget-visible-m");
	count_arr_banners = arr_banners.length;
	//console.log(count_arr_banners);
	
	if (count_arr_banners >= 2) {
		arr_banners1 = $($(".rightColumn .widget_banners-widget .banners-widget-visible-m")[0]).parent()[0].outerHTML;
		arr_banners2 = $($(".rightColumn .widget_banners-widget .banners-widget-visible-m")[1]).parent()[0].outerHTML;
		//arr_banners3 = $($(".rightColumn .widget_banners-widget .banners-widget-visible-m")[2]).parent()[0].outerHTML;
		//arr_banners4 = $($(".rightColumn .widget_banners-widget .banners-widget-visible-m")[3]).parent()[0].outerHTML;
	} else if (count_arr_banners == 1) {
		arr_banners1 = $($(".rightColumn .widget_banners-widget .banners-widget-visible-m")[0]).parent()[0].outerHTML;
	}
	
	if (single_body) {
		if (widthDoc < 769) {
		console.log(single_body);	
			if (count_arr_banners >= 2) {
				//$("body.single article.post footer.entry-meta").before(iframe_ban);			
				$("body.single article.post footer.entry-meta").after(arr_banners1) ;
				$("body.single article.post footer.entry-meta").after(arr_banners2) ;
				//$("body.single article.post footer.entry-meta").after(arr_banners4) ;
				
			}
			if (count_arr_banners == 1) {
		console.log("132");	
				$("body.single article.post .entry-content").after(arr_banners1);		
			}
		} 
	 } else {		
		if (widthDoc < 769) {
			if (count_arr_banners >= 2) {
				$(".chronicle-posts hr.full-line:first").before('<hr class="full-line add-full-line">'+arr_banners1) ;				
				$(".chronicle-posts hr.full-line:eq(6)").before('<hr class="full-line add-full-line">'+arr_banners2) ;
				//$(".chronicle-posts hr.full-line:eq(12)").before('<hr class="full-line add-full-line">'+arr_banners2) ;
				//$(".chronicle-posts hr.full-line:eq(18)").before('<hr class="full-line add-full-line">'+arr_banners4) ;
			}
			if (count_arr_banners == 1) {
		console.log("132");	
				$(".chronicle-posts hr.full-line:first").before('<hr class="full-line add-full-line">'+arr_banners1) ;	
			}
		}
		
	}
	
}

function getSelectedText(){
    var text = "";
    if (window.getSelection) {
        text = window.getSelection();
    }else if (document.getSelection) {
        text = document.getSelection();
    }else if (document.selection) {
        text = document.selection.createRange().text;
    }
    return text;
}

// ÐÑÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ðµ Ð½Ð°Ð¶Ð°ÑÐ¸Ñ ÐºÐ½Ð¾Ð¿Ð¾Ðº
$(document).ready(function() {
    // Ð¿ÑÐ¸ Ð½Ð°Ð¶Ð°ÑÐ¸Ð¸ Ð½Ð° Ctrl + Enter
	
    // var isCtrl = false;
    // $(document).keyup(function (e) {
        // if(e.which == 17) isCtrl = false;
    // }).keydown(function (e) {
        // if(e.which == 17) isCtrl=true;
        // if(e.which == 13 && isCtrl == true) {
            // // Ð¿Ð¾Ð»ÑÑÐ°ÐµÐ¼ Ð¸ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÐ¼ Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½ÑÐ¹ ÑÐµÐºÑÑ
            // text = getSelectedText();
            

            // console.log(text['anchorNode']);
        // }
    // });
	
	
	
	
	$('img[data-src]').each(function() {
		$(this).attr('src', $(this).attr('data-src'));
		$(this).load(function() {
			$(this).removeAttr('data-src');
		});
	});
		
	
	
	//$('#wp_popular_fixed').ready(function(){
		//$(this).text('ÐÐ°Ð³ÑÑÐ¶Ð°Ñ...'); 
		
	if (typeof upload_load_popular_fixed !== 'undefined') {
		var data_load_popular_fixed = {
			'action': 'load_popular_fixed',
			'posts_per_page': posts_per_page,
			'posts_prewiev_page' : posts_prewiev_page,
		};
		$.ajax({
			url:'/wp-admin/admin-ajax.php', // Ð¾Ð±ÑÐ°Ð±Ð¾ÑÑÐ¸Ðºdata:data, // Ð´Ð°Ð½Ð½ÑÐµ
			data: data_load_popular_fixed, // ÑÐ¸Ð¿ Ð·Ð°Ð¿ÑÐ¾ÑÐ°
			type:'POST', // ÑÐ¸Ð¿ Ð·Ð°Ð¿ÑÐ¾ÑÐ°
			success:function(respond){
				if( respond ) { 
					$('#wp_popular_fixed').html(respond); // Ð²ÑÑÐ°Ð²Ð»ÑÐµÐ¼ Ð½Ð¾Ð²ÑÐµ Ð¿Ð¾ÑÑÑ
				} else {
					$('#wp_popular_fixed').html("ÐÑÐ¸Ð±ÐºÐ° Ð·Ð°Ð³ÑÑÐ·ÐºÐ¸"); // ÐµÑÐ»Ð¸ Ð¼Ñ Ð´Ð¾ÑÐ»Ð¸ Ð´Ð¾ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐ¹ ÑÑÑÐ°Ð½Ð¸ÑÑ Ð¿Ð¾ÑÑÐ¾Ð², ÑÐºÑÐ¾ÐµÐ¼ ÐºÐ½Ð¾Ð¿ÐºÑ
				}
			}
		}); 
	//});	
	}
	
	
	
	
    $(document).on("click", "#main_search_button", function(){
        if ($(".wrapper-header-info").hasClass("open-search")) {
            $(".wrapper-header-info").removeClass("open-search");
        }
        else {
            $(".wrapper-header-info").addClass("open-search");
        }
    });
	
	
	
});




















