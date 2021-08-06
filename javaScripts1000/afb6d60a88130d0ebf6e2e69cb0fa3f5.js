function goToByScroll(id){
    var go = $("#"+id);

  $('html,body').animate({
    scrollTop: go.offset().top},
    2500);
}

function bs_input_file() {
    $(document).on('change', ':file', function() {
        var file = $(':file')[0].files[0];
        
        $('.btn-file').children('span').html(file.name);
    });
}

$(function () {

$('body').on('submit', '.j_upload', function(){
	var form = $(this);
	var base = 'https://www.laboratoriodosnotebooks.com.br/';
	var data = $(this).serialize();

	form.ajaxSubmit({
		url: base + '_cdn/ajax.php',
		data: {action: 'upload', dados: data},
		type: 'POST',
		dataType: 'json',
		beforeSubmit: function(){
		    form.find('.file_load').fadeIn('fast');
			form.find('submit').attr('disabled', true);				
		},
		uploadProgress: function(evento, posicao, total, completo){
			form.find('.j_progress').fadeIn();
			$('.j_progress .bar').text(completo + "%").width(completo + "%");
		},
		success: function(data){
		form.find('.file_load').fadeOut();
		if(data.trigger){
		    $('body').find('.ajax-success').fadeIn();
		}
		
            
}
});

return false;
});


//WC FILES TEXT EDITOR
    if ($('.jwc_ead_editor').length) {
        tinyMCE.init({
            selector: "textarea.jwc_ead_editor",
            language: 'pt_BR',
            menubar: false,
            theme: "modern",
            height: 200,
            verify_html: true,
            skin: 'light',
            entity_encoding: "raw",
            theme_advanced_resizing: true,
            plugins: [
                "paste autolink link"
            ],
            toolbar: "styleselect | removeformat |  bold | italic | link | unlink",
            content_css: BASE + "/admin/_css/tinyMCE.css",
            style_formats: [
                {title: 'Normal', block: 'p'},
                {title: 'CÃ³digo', block: 'pre', classes: 'brush: php;'}
            ],
            link_title: false,
            target_list: false,
            media_dimensions: false,
            media_poster: false,
            media_alt_source: false,
            media_embed: false,
            extended_valid_elements: "a[href|target=_blank|rel|class]",
            image_dimensions: false,
            relative_urls: false,
            remove_script_host: false,
            resize: false,
            paste_as_text: true
        });
    }

//Dispara SolicitaÃ§Ã£o de Arquivos
$('body').on('submit', '.j_resquest', function(){
    var form = $(this);
    var base = 'https://www.laboratoriodosnotebooks.com.br/';
    var data = $(this).serialize();

    $.ajax({
        url: base + '_cdn/ajax.php',
        data: data,
        type: 'POST',
        dataType: 'json',
        beforeSend: function(){
             form.find('.form_load').fadeIn();
        },
        success: function(resposta){
            if(resposta.error){
                form.find('.mostra').html('<div class="alert alert-danger ajax-error al_center"><p><i class="far fa-check-circle"></i>' + resposta.error + '</p> </div> ');
                form.find('.ajax-error').fadeIn();
                form.find('.form_load').fadeOut();
               
            };
            if(resposta.success){
                form.find('.mostra').html('<div class="alert alert-success ajax-error al_center"><p><i class="far fa-check-circle"></i>' + resposta.success + '</p> </div> ');
                form.find('.ajax-error').fadeIn();
                form.find('.form_load').fadeOut();
                 
            };     
    }
});

return false;
});
    
    // Input file
    bs_input_file();
    
    // Select 
    $.each($('.selectDefault'), function(){
        var defaulttext = $(this).parents('.selectDiv').find('.defualt-text').text();
        $(this).parents('.selectDiv').children('.selectDefault').text(defaulttext);
    });
    
    $('.selectBox').on('change',function(){
       var defaulttext2 = $(this).find(":selected").text(); 
        $(this).parents('.selectDiv').children('.selectDefault').text(defaulttext2);
    });
    
    $('.mobile_menu').click(function () {
        $('.main_nav').slideToggle();
    });

    //PLAY TAKE
    $('.testimony_start').click(function () {
        var Testimony = $(this).attr('id');
        var Headding = $(this).find('h1').html();
        $('.testimony_content h1').html(Headding);
        $('.testimony_content .embed-container').html('<iframe width="640" height="360" src="https://www.youtube.com/embed/' + Testimony + '?rel=0&amp;showinfo=0&autoplay=1&origin=https://laboratoriodosnotebooks.com.br" frameborder="0" allowfullscreen></iframe>');
        $('.testimony').fadeIn(200);
    });

    $('.testimony_close').click(function () {
        $('.testimony').fadeOut(200, function () {
            $('.testimony_content .embed-container').html('');
        });
    });
    //END PLAY TAKE

    // SCROLL TO
    $(".courses_header_icon").click(function() {
      goToByScroll('section_courses_1');
    });
    //END SCROLL TO

    $(".back-to-top").click(function() {
      goToByScroll('home');
    });

    //AUTO ADJUST HEIGTH
    $(document).ready(function(){
      var screen_height = $(window).height();
      $(".wc_slides, .top_conversion").height(screen_height);
      $( window ).resize(function() {
        $(".wc_slides, .top_conversion").height(screen_height);
      });
    });

    $(document).ready(function(){
      var screen_width = $(window).width();
      $(".wc_slides").width(screen_width);
      $( window ).resize(function() {
        $(".wc_slides").width(screen_width);
      });
    });
    //AUTO ADJUST HEIGTH
    	 //CLOSE
$(".wc_hellobar_close").click(function () {
	var HellobarId = $(this).attr("id");
	$("#" + HellobarId + ".wc_hellobar").fadeOut();                
});  


//DISPARA VENDA DE ASSINATURA
$(".j_assinar").click(function(){
	var course_id = '10';
	var item_amount = '1';
	var stock_id = '10';
	var uri = $('link[rel="base"]').attr('href') + "/_cdn/widgets/ecommerce/cart.ajax.php";	
	
	$.ajax({
        url: uri,
        data: {action: 'wc_cart_add', course_id: course_id, item_amount: item_amount, stock_id: stock_id},
        type: 'POST',
        dataType: 'json',
        beforeSend: function(){             
        },
        success: function(data){
            if(data.cart_amount){
                $('.cart_count').html(data.cart_amount);
            } 
			if (data.cart_product) {

                $('.wc_cart_manager_info b').html(data.cart_product);

                $('.wc_cart_manager').fadeIn(200, function () {

                $('.wc_cart_manager_content').fadeIn(200);

                });

                $('.wc_cart_close').click(function () {

                    $('.wc_cart_manager_content').fadeOut(200, function () {

                        $('.wc_cart_manager').fadeOut();

                    });

                });

            }
				if (data.trigger) {

                wcCartTrigger(data.trigger);

            }
        
    }
	
});
});


});

//############## MODAL MESSAGE
function Trigger(Message) {
    $('.trigger_ajax').fadeOut('fast', function () {
        $(this).remove();
    });
    $('body').before("<div class='trigger_modal'>" + Message + "</div>");
    $('.trigger_ajax').fadeIn();
}

function TriggerClose() {
    $('.trigger_ajax').fadeOut('fast', function () {
        $(this).remove();
    });
}

//FACEBOOK APP
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.6&appId=626590460695980";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//FACEBOOK ADS
!function (f, b, e, v, n, t, s) {
    if (f.fbq)
        return;
    n = f.fbq = function () {
        n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq)
        f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window,
        document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '154352345081565');
fbq('track', "PageView");

//GOOGLE ANALYTICS
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-53658515-12', 'auto');
ga('send', 'pageview');


