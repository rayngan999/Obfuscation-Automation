$(document).ready(function() {
    $('#menu_lateral').slicknav();
	$('#menu ul li.l_aulas').mouseenter(function(){ $('#menu ul li.l_aulas ul').slideDown(900); });
    /* logo mobile */
    $('.slicknav_menu').prepend('<a href="https://www.pciconcursos.com.br/"><img src="https://static.pciconcursos.com.br/img/pcimobi.png" widht="75" height="55" style="float:left; margin:5px 0 0 20px;"></a>');
    /* lateral */
	var lateral_ie = false, browser = navigator.appName, ver = navigator.appVersion, index = parseFloat(ver.indexOf("MSIE"))+1, versao = parseFloat(ver.substring(index+4,index+7));
	if ((browser == "Microsoft Internet Explorer") && (versao < 9)) { lateral_ie = false; } else { lateral_ie = true; }
	if (
			lateral_ie &&
			document.location.href.indexOf("pedido") <= 0 &&
			document.location.href.indexOf("apostilas") <= 0 &&
            document.location.href.indexOf("apostiladigital") <= 0 &&
            document.location.href.indexOf("contato") <= 0 &&
			$('#lista_lateral_noticias').hasClass('lateral_social')
		) {
        var lista_lateral;
        // lista_lateral = '<li style="border:0 none; margin-left:10px; padding:0; height:30px; width:135px;"><a href="https://twitter.com/share?url=https://www.pciconcursos.com.br&text=@pciconcursos+" rel="nofollow" target="_blank" style="margin:0; padding:0px;"><img src="https://static.pciconcursos.com.br/img/tweet.png" style="margin:0; padding:0;" width="130" height="30"></a></li>';
        // lista_lateral = '<div id="pci_fb" style="margin-top:10px; margin-left:45px; margin-bottom:20px; background:none; height:86px; width:108px; text-align:center;" class="fb-like" data-href="https://facebook.com/pciconcursos" data-layout="box_count" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>';
        // lista_lateral =  '<div id="ads_lateral" style="height: 305px; width: 190px; padding-left: 5px; padding-bottom: 5px;"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
        // lista_lateral += '<ins class="adsbygoogle" style="display:inline-block;width:190px;height:300px" data-ad-client="ca-pub-2622407619291980" data-ad-slot="7253832271"></ins>';
        // lista_lateral += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
		lista_lateral  = '<div id="lateral_compartilhar" style="margin:30px 0 30px 25px;">';
		lista_lateral += '<a href="https://www.youtube.com/pciconcursos?sub_confirmation=1" rel="nofollow" target="_blank"><img src="https://static.pciconcursos.com.br/img/icon_youtube.png" width="50" height="50" style="margin:0; padding:0;"></a>';
		lista_lateral += '<a href="https://twitter.com/share?url='+window.location.href+'" rel="nofollow" target="_blank"><img src="https://static.pciconcursos.com.br/img/icon_twitter.png" width="50" height="50" style="margin:0; padding:0;"></a>';
		lista_lateral += '<a href="https://www.facebook.com/share.php?u='+window.location.href+'" rel="nofollow" target="_blank"><img src="https://static.pciconcursos.com.br/img/icon_facebook.png" width="50" height="50" style="margin:0; padding:0;"></a>';
		lista_lateral += '</div>';
        $('#lista_lateral_noticias').prepend(lista_lateral);
        //Facebook
        //(function(d, s, id) {
        //var js, fjs = d.getElementsByTagName(s)[0];
        //if (d.getElementById(id)) return;
        //js = d.createElement(s); js.id = id;
        //js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.6&appId=211905988988008";
        //fjs.parentNode.insertBefore(js, fjs);
        //}(document, 'script', 'facebook-jssdk'));
        //}
        //PixelFacebook
        //!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        //n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        //n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        //t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        //document,'script','//connect.facebook.net/en_US/fbevents.js');
        //fbq('init', '922464364455623');
        //fbq('init', '141973626547646');
        //fbq('track',"PageView");
    }
    $('#lgpd, #lgpd-button').bind('click', function(e) {
        Cookies.set('lgpd', '1', { expires: 1000 });
        localStorage.setItem('lgpd',true);
        $('#lgpd').css('display', 'none');
    });
    if(Cookies.get('lgpd')==undefined && localStorage.getItem('lgpd') == null) {
        $('#lgpd').css('display', 'block');
        $('#lgpd').html('Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiÃªncia em nossos serviÃ§os, personalizar publicidade e recomendar conteÃºdo de seu interesse de acordo com a nossa <a href="/politica/" class="lgpd-privacidade-link">PolÃ­tica de Privacidade</a> e, ao continuar navegando, vocÃª concorda com estas condiÃ§Ãµes. <button id="lgpd-button">Concordo</button>');
    }
 });
