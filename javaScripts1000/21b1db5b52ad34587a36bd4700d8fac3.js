const DEVEnv = ['lnxsptl1d'];
const AUTEnv = ['lnxswcm1d', 'lnxsaut1p'];
const INTEnv = ['lnxsptl1i', 'lnxswps1i'];
const PREEnv = ['lnxsptl3q', 'lnxsptl4q', 'lnxsptl5q', 'lnxsptl30q', 'websumandov9', 'websumando', 'acceso24q', 'acceso24v9q', 'lnxswps5q', 'lnxswps3q', 'lnxswps4q'];
const PILEnv = ['piloto', 'acceso24piloto'];
const PROEnv = ['lnxsptl3p', 'lnxsptl4p', 'lnxsptl17p', 'lnxsptl13p', 'lnxsptl14p', 'lnxsptl18p', 'lnxsptl53p', 'lnxsptl54p', 'lnxsptl55p', 'lnxsptl63p', 'lnxsptl64p', 'lnxsptl65p', 'lnxsptl5p', 'lnxsptl6p', 'lnxsptl7p', 'lnxsptl9p', 'lnxsptl10p', 'lnxsptl11p', 'lnxsptl73p', 'lnxsptl74p', 'lnxsptl75p', 'lnxsptl83p', 'lnxsptl84p', 'lnxsptl85p', 'lnxswps10p', 'lnxswps11p', 'lnxswps12p', 'lnxswps20p', 'lnxswps21p', 'lnxswps22p', 'lnxswps30p', 'lnxswps31p', 'lnxswps32p', 'lnxswps40p', 'lnxswps41p', 'lnxswps42p', 'lnxswps110p', 'lnxswps111p', 'lnxswps112p', 'lnxswps120p', 'lnxswps121p', 'lnxswps122p', 'lnxswps130p', 'lnxswps131p', 'lnxswps132p', 'lnxswps140p', 'lnxswps141p', 'lnxswps142p', 'www.banorte.com'];
const PRIVEnv = ['acceso24.banorte.com', 'acceso24.banorte', 'lnxswpsa10p', 'lnxswpsa11p', 'lnxswpsa20p', 'lnxswpsa21p', 'lnxswpsa30p', 'lnxswpsa31p', 'lnxswpsa41p', 'lnxswpsa42p', 'lnxswpsa110p', 'lnxswpsa111p', 'lnxswpsa112p', 'lnxswpsa120p', 'lnxswpsa121p', 'lnxswpsa122p', 'lnxswpsa130p', 'lnxswpsa131p', 'lnxswpsa132p', 'lnxswpsa140p', 'lnxswpsa141p', 'lnxswpsa142p', 'lnxswpsa10p', 'lnxswpsa11p', 'lnxswpsa20p', 'lnxswpsa21p', 'lnxswpsa30p', 'lnxswpsa31p', 'lnxswpsa41p', 'lnxswpsa42p', 'lnxswpsa110p', 'lnxswpsa111p', 'lnxswpsa112p', 'lnxswpsa120p', 'lnxswpsa121p', 'lnxswpsa122p', 'lnxswpsa130p', 'lnxswpsa131p', 'lnxswpsa132p', 'lnxswpsa140p', 'lnxswpsa141p', 'lnxswpsa142p'];


var dominioAudiencias = window.location.toString().split('/Home')[0].split('portal/')[1];

function envTest(env) {
    var result = false;
    for (i = 0; i < env.length; i++) {
        if (window.location.href.indexOf(env[i]) > 0) {
            result = true;
        }
    }
    return result;
}

function isPrevEnv() {
    if (envTest(DEVEnv) || envTest(AUTEnv) || envTest(INTEnv) || envTest(PREEnv)) {
        return true;
    } else {
        return false;
    }
}

if ((!isPrevEnv() || envTest(AUTEnv) || envTest(INTEnv) || envTest(PILEnv)) && !envTest(PRIVEnv)) {
    setTimeout(function() {
        $('.contact_trigger a').html('');
        $('.location_trigger a').html('');
    }, 1);

    $('head').append('<style>.capilla_msg {display: none!important;visibility:hidden!important;}</style>');

    //TAGGEO AUTOMATICO DE PAGINAS INTERNAS POR PAGEVIEW
    var dominioTagAnalytics = window.location.toString().split('/Home')[0].split('portal/')[1] == undefined ? "banorte/" : window.location.toString().split('/Home')[0].split('portal/')[1] + "/";
    var pathGATagAnalytics = window.location.toString().split('//')[1].split('!')[0].split('Home')[1] == undefined || window.location.toString().split('//')[1].split('!')[0].split('Home')[1] == "" ? "inicio" : window.location.toString().split('//')[1].split('!')[0].split('Home')[1];

    var dominioAudienciasAnalytics = window.location.toString().split('/Home')[0].split('portal/')[1] == undefined ? "banorte/" : (window.location.toString().split('/Home')[0].split('portal/')[1].split('/')[0] == undefined ? "banorte/" : window.location.toString().split('/Home')[0].split('portal/')[1].split('/')[0]);
    var pageViewCustom = (dominioTagAnalytics == undefined ? dominioAudienciasAnalytics : dominioTagAnalytics) + (pathGATagAnalytics == undefined ? "inicio" : pathGATagAnalytics);
    pageViewCustom = pageViewCustom.replace("//", "/");

    //console.info("contexto:"+window.location.href);
    if (envTest(AUTEnv)) {
        /*Google Analytics Autoria*/
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-81656602-1', 'auto');

        /* $("footer").before("<div id='anibann'></div>");
        params = {};
        params.wmode = 'Transparent';
        params.scale = 'noscale';
        swfobject.embedSWF('/XimaResponsivoTheme/themes/html/XimaResponsivoTheme/swf/FS_Banorte.swf', 'anibann', '0', '0', '9.0.0', '', '', params);*/

        var html1 = '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5PCPRN"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>;';
        var html = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':";
        html += "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],";
        html += "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=";
        html += "'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);";
        html += "})(window,document,'script','dataLayer','GTM-5PCPRN');";

        if (window.location.href.indexOf('/gfb/Home/operadora-de-fondos/fondos.acerca-de/op-fo-acerca-de-info-particular/') > 0 || window.location.href.indexOf('/wps/portal/gfb/Home/operadora-de-fondos/fondos.acerca-de/op-fo-acerca-de-info-general') > 0) {
            $('head').append('<meta http-equiv="cache-control" content="no-cache" />');
            $('head').append('<META HTTP-EQUIV="Pragma" CONTENT="no-cache">');
        }
    } else if (envTest(INTEnv)) {
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-81743208-1', 'auto');
    } else if (envTest(PREEnv)) {
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-81730248-1', 'auto');
    } else if (!isPrevEnv()) {
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-81734741-1', 'auto');
        params = {};
        params.wmode = 'Transparent';
        params.scale = 'noscale';
        //swfobject.embedSWF('/XimaResponsivoTheme/themes/html/XimaResponsivoTheme/swf/FS_Banorte.swf', 'anibann', '0', '0', '9.0.0', '', '', params);
        if (window.location.href.indexOf('/wps/portal/gfb/Home/operadora-de-fondos/fondos.acerca-de/op-fo-acerca-de-info-particular/') > 0 || window.location.href.indexOf('/wps/portal/gfb/Home/operadora-de-fondos/fondos.acerca-de/op-fo-acerca-de-info-general') > 0) {

            $('head').append('<meta http-equiv="cache-control" content="no-cache" />');
            $('head').append('<META HTTP-EQUIV="Pragma" CONTENT="no-cache">');
        }
    }
    /*DMP*/
    (function() {
        var nvg = document.createElement('script');
        nvg.id = "navegg";
        nvg.type = 'text/javascript';
        nvg.async = true;
        nvg.src = document.location.protocol + '//d1070b8a575b8m.cloudfront.net/tm41470.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(nvg, s);
    })();

    (function() {
        $(document).ready(function() {
            $(".informacion").css("width", "auto");
            $(".ligas-info a:eq(1)").html("Aviso de Privacidad <!--sup style='vertical-align:super;font-size:8px;'>Nuevo</sup-->");

            if (envTest(AUTEnv) && window.location.href.indexOf('portal/gfb') > 0) {
                $(".redes-sociales").css("width", "110px");
                $(".redes-sociales a").css("width", "40px");
                $(".redes-sociales").hide();
                $(".redes-sociales a").eq(0).attr("href", "https://www.facebook.com/GFBanorte");
                $(".redes-sociales a").eq(1).attr("href", "https://www.twitter.com/GFBanorte_mx?lang=es");
                $(".redes-sociales a").show();
                $(".redes-sociales a").eq(2).hide();
                $(".promociones").css("padding-left", "1px !important");
                $(".productos").css("padding-left", "1px !important");
            }

            if (envTest(AUTEnv) && window.location.href.indexOf('portal/banorte') > 0) {
                $(".redes-sociales").css("width", "205px");
                //$(".redes-sociales").css("margin-left","0px"); 

                $(".redes-sociales").append("<a data-url='https://www.youtube.com/user/banortemovil/' href='#' class='rs-links' style='width: 60px; margin-right:-6px !important; margin-left:-5px;'><div class='ico' style='height: 60px; margin-top:-3px; background-image:url(https://www.banorte.com/cms/functions/images/youtube2_60x60.png)'></div></a>");
                $(".redes-sociales").append("<a data-url='https://www.instagram.com/banorte_mx/' href='#' class='rs-links' style='width: 60px;'><div class='ico' style='height: 60px; margin-top:-3px; background-image:url(https://www.banorte.com/cms/functions/images/instagram60x60.png);'></div></a>");
                $(".redes-sociales").hide();
                $(".redes-sociales a").eq(0).attr("data-url", "https://www.facebook.com/banorte");
                $(".redes-sociales a").eq(1).attr("data-url", "https://www.twitter.com/Banorte_mx");
                $(".redes-sociales a").eq(0).attr("href", "#");
                $(".redes-sociales a").eq(1).attr("href", "#");
                $(".redes-sociales a").show();
                $(".redes-sociales a").eq(2).hide();

                $(".rs-links").on("click", function() {
                    openPopup($(this));
                });

            }

            if (envTest(AUTEnv) && (window.location.href.indexOf('portal/ixe/') > 0 || window.location.href.indexOf('portal/preferente/') > 0)) {
                $(".redes-sociales").css("width", "165px");
                $(".redes-sociales a").css("width", "40px");
                $(".redes-sociales").append("<a href='https://www.instagram.com/ixe_mx/' class='rs-links' style='width: 60px;'><div class='ico' style='width:60px; height: 60px; margin-top:-3px; background-image:url(https://www.banorte.com/cms/functions/images/instagram60x60.png)'></div></a>");
                $(".redes-sociales").hide();
                $(".redes-sociales a").eq(0).attr("href", "https://www.facebook.com/ixe");
                $(".redes-sociales a").eq(1).attr("href", "https://www.twitter.com/Ixe_mx");
                $(".redes-sociales a").show();
                $(".redes-sociales a").eq(2).hide();
            }

            if (!isPrevEnv() && window.location.href.indexOf('portal/gfb') > 0) {
                $(".redes-sociales").css("width", "110px");
                $(".redes-sociales a").css("width", "40px");
                $(".redes-sociales").hide();
                $(".redes-sociales a").eq(0).attr("href", "https://www.facebook.com/GFBanorte");
                $(".redes-sociales a").eq(1).attr("href", "https://www.twitter.com/GFBanorte_mx?lang=es");
                $(".redes-sociales a").show();
                $(".redes-sociales a").eq(2).hide();
                $(".promociones").css("padding-left", "0px !important");
                $(".productos").css("padding-left", "0px !important");
            }


            var dominioAudiencias = window.location.toString().split('/Home')[0].split('portal/')[1];
            if (!isPrevEnv() && window.location.href.indexOf('portal/banorte') > 0 || dominioAudiencias == null || dominioAudiencias == undefined) {
                $(".redes-sociales").css("width", "205px");
                $(".redes-sociales a").css("width", "40px");

                $(".redes-sociales").append("<a data-url='https://www.youtube.com/user/banortemovil/' href='#' class='rs-links' style='width: 60px; margin-right:-6px !important; margin-left:-5px;'><div class='ico' style='height: 60px; margin-top:-3px; background-image:url(https://www.banorte.com/cms/functions/images/youtube2_60x60.png)'></div></a>");
                $(".redes-sociales").append("<a data-url='https://www.instagram.com/banorte_mx/' href='#' class='rs-links' style='width: 60px;'><div class='ico' style='height: 60px; margin-top:-3px; background-image:url(https://www.banorte.com/cms/functions/images/instagram60x60.png);'></div></a>");
                $(".redes-sociales").hide();
                $(".redes-sociales a").eq(0).attr("data-url", "https://www.facebook.com/banorte");
                $(".redes-sociales a").eq(1).attr("data-url", "https://www.twitter.com/Banorte_mx");
                $(".redes-sociales a").eq(0).attr("href", "#");
                $(".redes-sociales a").eq(1).attr("href", "#");
                $(".redes-sociales a").show();
                $(".redes-sociales a").eq(2).hide();
            }

            if (!isPrevEnv() && (window.location.href.indexOf('portal/ixe/') > 0 || window.location.href.indexOf('portal/preferente/') > 0)) {
                $(".redes-sociales").css("width", "165px");
                $(".redes-sociales a").css("width", "40px");
                $(".redes-sociales").append("<a href='https://www.instagram.com/ixe_mx/' class='rs-links' style='width: 60px;'><div class='ico' style='width:60px; height: 60px; margin-top:-3px; background-image:url(https://www.banorte.com/cms/functions/images/instagram60x60.png)'></div></a>");
                $(".redes-sociales").hide();
                $(".redes-sociales a").eq(0).attr("href", "https://www.facebook.com/ixe");
                $(".redes-sociales a").eq(1).attr("href", "https://www.twitter.com/Ixe_mx");
                $(".redes-sociales a").show();
                $(".redes-sociales a").eq(2).hide();
            }

            // $(".redes-sociales").children("a").click(function(event)
            // {
            //   event.preventDefault();
            // openPopup($(this));
            //   //window.open($(this).attr("href") , '_blank');
            // });


            /************FIXES MEJORAS MENU*****************/
            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (isPrevEnv() && window.location.href.indexOf('portal/banorte') > 0) {
                var strHtml = '<div class="layout">' +
                    '<ul>' +
                    '<li data-url="?uri=nm:oid:promociones" class="promociones" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/css/banorte/new/promociones.jpg" border="" width="175" height="125">' +
                    '  <p>Promociones</p>' +
                    '</li>' +
                    '<li class="productos" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/css/banorte/new/productos.jpg" border="" width="175" height="125">' +
                    '  <p>Productos</p> ' +
                    '</li>' +
                    '<li class="bancapreferente" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/css/banorte/new/soluciones.jpg" border="" width="175" height="125">' +
                    '  <p>Soluciones</p>' +
                    '</li>    ' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';

                $(".promotions").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:herramientas" class="cotiza">' +
                    '  <div class="imgCotiza"></div>' +
                    '  <button><span>Cotiza y compra en lÃÆÃâÃâÃÂ­nea</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.dolares-y-divisas" class="indicadores indicadoresMenu">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".otherLauncherIconsBottom").html(strHtml);
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (!isPrevEnv() && window.location.href.indexOf('portal/banorte') > 0 || dominioAudiencias == null || dominioAudiencias == undefined) {
                var strHtml = '<div class="layout">' +
                    '<ul>' +
                    '<li data-url="?uri=nm:oid:promociones" class="promociones" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/css/banorte/new/promociones.jpg" border="" width="175" height="125">' +
                    '  <p>Promociones</p>' +
                    '</li>' +
                    '<li class="productos" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/css/banorte/new/productos.jpg" border="" width="175" height="125">' +
                    '  <p>Productos</p> ' +
                    '</li>' +
                    '<li class="bancapreferente" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/css/banorte/new/soluciones.jpg" border="" width="175" height="125">' +
                    '  <p>Soluciones</p>' +
                    '</li>    ' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';

                $(".promotions").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:herramientas" class="cotiza">' +
                    '  <div class="imgCotiza"></div>' +
                    '  <button><span>Cotiza y compra en lÃÆÃâÃâÃÂ­nea</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.dolares-y-divisas" class="indicadores indicadoresMenu">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".otherLauncherIconsBottom").html(strHtml);
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (isPrevEnv() && window.location.href.indexOf('portal/ixe/') > 0) {
                var strHtml = '<div class="layout">' +
                    '  <ul>' +
                    '  <li data-url="?uri=nm:oid:todas-promociones-preferente" class="promociones" style="padding-left:0px">' +
                    '    <div class="shadowBoxItem" style="display: none;"></div>' +
                    '    <img src="/wps/contenthandler/dav/fs-type1/themes/IxeResponsivoTheme/css/ixe/new/promociones.jpg" border="" width="175" height="125">' +
                    '    <p>Promociones</p>' +
                    '  </li>' +
                    '  <li class="productos" style="padding-left:0px">' +
                    '    <div class="shadowBoxItem" style="display: none;"></div>' +
                    '    <img src="/wps/contenthandler/dav/fs-type1/themes/IxeResponsivoTheme/css/ixe/new/productos.jpg" border="" width="175" height="125">' +
                    '    <p>Productos</p> ' +
                    '  </li>' +
                    '  <li class="bancapreferente" style="padding-left:0px">' +
                    '    <div class="shadowBoxItem"></div>' +
                    '    <img src="/wps/contenthandler/dav/fs-type1/themes/IxeResponsivoTheme/css/ixe/new/soluciones.jpg" border="" width="175" height="125">' +
                    '    <p>Banca Preferente</p>' +
                    '  </li>' +
                    '  </ul>' +
                    '  <div class="clear"></div>' +
                    '</div>';

                $(".promotions").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:herramientas" class="cotiza">' +
                    '  <div class="imgCotiza" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Cotiza y compra en lÃÆÃâÃâÃÂ­nea</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.deuda-e-indicadores" class="indicadores">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".otherLauncherIconsBottom").html(strHtml);
                $(".mmenu_inicio .layout .promotions .layout ul li img").eq(0).css("left", "-96px");
                $(".mmenu_inicio .layout .promotions .layout ul li img").eq(2).css("left", "0px");
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (!isPrevEnv() && (window.location.href.indexOf('portal/ixe') > 0 || window.location.href.indexOf('portal/preferente') > 0)) {
                var strHtml = '<div class="layout">' +
                    '  <ul>' +
                    '  <li data-url="?uri=nm:oid:todas-promociones-preferente" class="promociones" style="padding-left:0px">' +
                    '    <div class="shadowBoxItem" style="display: none;"></div>' +
                    '    <img src="/wps/contenthandler/dav/fs-type1/themes/IxeResponsivoTheme/css/ixe/new/promociones.jpg" border="" width="175" height="125">' +
                    '    <p>Promociones</p>' +
                    '  </li>' +
                    '  <li class="productos" style="padding-left:0px">' +
                    '    <div class="shadowBoxItem" style="display: none;"></div>' +
                    '    <img src="/wps/contenthandler/dav/fs-type1/themes/IxeResponsivoTheme/css/ixe/new/productos.jpg" border="" width="175" height="125">' +
                    '    <p>Productos</p> ' +
                    '  </li>' +
                    '  <li class="bancapreferente" style="padding-left:0px">' +
                    '    <div class="shadowBoxItem"></div>' +
                    '    <img src="/wps/contenthandler/dav/fs-type1/themes/IxeResponsivoTheme/css/ixe/new/soluciones.jpg" border="" width="175" height="125">' +
                    '    <p>Banca Preferente</p>' +
                    '  </li>' +
                    '  </ul>' +
                    '  <div class="clear"></div>' +
                    '</div>';

                $(".promotions").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:herramientas" class="cotiza">' +
                    '  <div class="imgCotiza" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Cotiza y compra en lÃÆÃâÃâÃÂ­nea</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.deuda-e-indicadores" class="indicadores">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".otherLauncherIconsBottom").html(strHtml);
                $(".mmenu_inicio .layout .promotions .layout ul li img").eq(0).css("left", "-96px");
                $(".mmenu_inicio .layout .promotions .layout ul li img").eq(2).css("left", "0px");
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (isPrevEnv() && window.location.href.indexOf('portal/empresas') > 0) {
                var strHtml = '<li data-url="https://www.circulopymebanorte.com/" class="bancapreferente" style="padding-left:0px">' +
                    ' <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/EmpresasResponsivoTheme/css/empresas/new/pyme.png" border="" width="175" height="125">' +
                    '    <p>PyME</p>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:segmento.empresario" class="promociones" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/EmpresasResponsivoTheme/css/empresas/new/EMP.png" border="" width="175" height="125">' +
                    '  <p>Empresas y Corporativos</p>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:segmento.gobierno" class="productos" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/EmpresasResponsivoTheme/css/empresas/new/Gobierno.jpg" border="" width="175" height="125"> ' +
                    '  <p>Gobierno</p>    ' +
                    '</li>';

                $(".promotions .layout ul").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:cotiza-en-linea" class="cotiza">' +
                    '  <div class="imgCotiza" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Cotiza y compra en lÃÆÃâÃâÃÂ­nea</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.dolares-y-divisas" class="indicadores">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px; background-position: -5px -5px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".otherLauncherIconsBottom").html(strHtml);
                $(".mmenu_inicio .layout .promotions .layout ul li p").eq(1).css("margin-top", "-11px");
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (!isPrevEnv() && window.location.href.indexOf('portal/empresas') > 0) {
                var strHtml = '<li data-url="https://www.circulopymebanorte.com/" class="bancapreferente" style="padding-left:0px">' +
                    ' <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/EmpresasResponsivoTheme/css/empresas/new/pyme.png" border="" width="175" height="125">' +
                    '    <p>PyME</p>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:segmento.empresario" class="promociones" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/EmpresasResponsivoTheme/css/empresas/new/EMP.png" border="" width="175" height="125">' +
                    '  <p>Empresa y Corporativo</p>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:segmento.gobierno" class="productos" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/EmpresasResponsivoTheme/css/empresas/new/Gobierno.jpg" border="" width="175" height="125"> ' +
                    '  <p>Gobierno</p>    ' +
                    '</li>';
                $(".promotions .layout ul").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:cotiza-en-linea" class="cotiza">' +
                    '  <div class="imgCotiza" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Cotiza y compra en lÃÆÃâÃâÃÂ­nea</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.dolares-y-divisas" class="indicadores">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px; background-position: -5px -5px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".otherLauncherIconsBottom").html(strHtml);
                $(".mmenu_inicio .layout .promotions .layout ul li p").eq(1).css("margin-top", "-11px");
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (isPrevEnv() && window.location.href.indexOf('portal/ixe-xima') > 0) {
                var strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:herramientas" class="cotiza">' +
                    '  <div class="imgCotiza" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Herramientas</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.deuda-e-indicadores" class="indicadores">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px; background-position: -5px -5px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';

                $(".mmenu_inicio .layout .otherLauncher ").html(strHtml);
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.contacto").hover(function() {
                    $(this).css("background-color", "#3d133d");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.cotiza").hover(function() {
                    $(this).css("background-color", "#733b73");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.ubicanos").hover(function() {
                    $(this).css("background-color", "#650d30");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.indicadores").hover(function() {
                    $(this).css("background-color", "#372c30");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (!isPrevEnv() && window.location.href.indexOf('portal/ixe-xima') > 0) {
                var strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="?uri=nm:oid:herramientas" class="cotiza">' +
                    '  <div class="imgCotiza" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Herramientas</span></button>' +
                    '</li>' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:indicadores.deuda-e-indicadores" class="indicadores">' +
                    '  <div class="imgIndicadores" style="margin-bottom: -10px; background-position: -5px -5px;"></div>' +
                    '  <button><span>Indicadores Financieros</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".mmenu_inicio .layout .otherLauncher ").html(strHtml);
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.contacto").hover(function() {
                    $(this).css("background-color", "#3d133d");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.cotiza").hover(function() {
                    $(this).css("background-color", "#733b73");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.ubicanos").hover(function() {
                    $(this).css("background-color", "#650d30");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
                $(".mmenu_inicio .layout .otherLauncher .layout ul li.indicadores").hover(function() {
                    $(this).css("background-color", "#372c30");
                }, function() {
                    $(this).css("background-color", "#4E4044");
                });
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (isPrevEnv() && window.location.href.indexOf('portal/gfb') > 0) {
                var strHtml = '<div class="layout">' +
                    '<ul>' +
                    '<li data-url="?uri=nm:oid:incio.conozca-mas-de-nuestro-portal" class="promociones" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/gfbanorte/new/conoce_portal.jpg" border="">' +
                    '  <p style="text-shadow: rgb(10, 8, 8) 0.1em 0.1em 0.2em;">Conozca nuestro portal</p>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:relacion-con-inversionistas" class="productos" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/gfbanorte/new/relacion_inversionistas.jpg" border="">' +
                    '  <p style="text-shadow: rgb(10, 8, 8) 0.1em 0.1em 0.2em; margin-top:0px;">Relaci&oacute;n con inversionistas</p>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".mmenu_inicio .layout .promotions").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".mmenu_inicio .layout .otherLauncher ").html(strHtml);
            }

            //FIX PARA SOBREESCRIBIR PRODUCTOS/SERVICIOS, ICONOS DEL MENU
            if (!isPrevEnv() && window.location.href.indexOf('portal/gfb') > 0) {
                var strHtml = '<div class="layout">' +
                    '<ul>' +
                    '<li data-url="?uri=nm:oid:incio.conozca-mas-de-nuestro-portal" class="promociones" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem" style="display: none;"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/gfbanorte/new/conoce_portal.jpg" border="">' +
                    '  <p style="text-shadow: rgb(10, 8, 8) 0.1em 0.1em 0.2em;">Conozca nuestro portal</p>' +
                    '</li>' +
                    '<li data-url="?uri=nm:oid:relacion-con-inversionistas" class="productos" style="padding-left:0px">' +
                    '  <div class="shadowBoxItem"></div>' +
                    '  <img src="/wps/contenthandler/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/gfbanorte/new/relacion_inversionistas.jpg" border="">' +
                    '  <p style="text-shadow: rgb(10, 8, 8) 0.1em 0.1em 0.2em; margin-top:0px;">Relaci&oacute;n con inversionistas</p>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".mmenu_inicio .layout .promotions").html(strHtml);
                strHtml = '<div class="layout layoutIconsBottom">' +
                    '<ul>' +
                    '<!--li data-url="#" class="contact_trigger contacto ct2">' +
                    '  <div class="imgContacto" style="background-position: -5px -5px;"></div>' +
                    '  <button><span>Contacto</span></button>' +
                    '</li-->' +
                    '<li data-url="/wps/portal/ixe-xima/" class="location_trigger ubicanos ub2">' +
                    '  <div class="imgUbicanos"></div>' +
                    '  <button><span>UbÃÆÃâÃâÃÂ­canos</span></button>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="clear"></div>' +
                    '</div>';
                $(".mmenu_inicio .layout .otherLauncher ").html(strHtml);
            }


            //FIX PARA QUE EL MENU NO SE DESFACE DEMASIADO POR LA CINTILLA AMARILLA EN CASO DE ESTAR VISIBLE
            if ($(".oldsite").is(":visible")) {
                $(".mmenu_trigger_sidebar_desk").css("margin-top", "42px");
            }
            //FIX PARA CORREGIR EL TEXTO DE PRODUCTO A PRODUCTOS
            if (window.location.href.indexOf('/wps/myportal/banorte') > 0 || dominioAudiencias == null || dominioAudiencias == undefined) {
                $(".mmenu_inicio .layout .promotions .layout ul li p").eq(1).html("Productos");
            }
            //FIX PARA CORREGIR EL TEXTO DE PRODUCTO A PRODUCTOS
            if (window.location.href.indexOf('/wps/portal/ixe') > 0 || window.location.href.indexOf('/wps/portal/preferente') > 0) {
                $(".mmenu_inicio .layout .promotions .layout ul li p").eq(1).html("Productos");
            }
            //FIX PARA CENTRAR LAS IMAGENES Y TEXTOS DEL MENU PRINCIPAL
            $(".mmenu_inicio .layout .promotions .layout ul li").css("padding", "0px!important");
            //FIX DEL ICONO INDICADORES MUY ABAJO
            $(".mmenu_inicio .layout .promotions .layout ul li").css("padding-left", "0px");
            $(".imgIndicadores").css("margin-bottom", "-10px");
            //FIX DEL SHADOW EN EL TEXTO
            $(".mmenu_inicio .layout .promotions .layout ul li p").css("text-shadow", "#0a0808 .1em .1em .2em");
            //FIX DE LA FUNCIONALIDAD DEL ICONO CONTACTO
            $(document).on('click', '.ct2', function() {
                $(".menuHeader .layout .mmenu_trigger_sidebar_desk").slideUp();
                $(".header_top nav ul.header_menu li.contact_trigger").eq(0).trigger("click");
                $(".menu_pyme").hide("slow");
            });
            //FIX DE LA FUNCIONALIDAD DEL ICONO UBICANOS
            $(document).on('click', '.ub2', function() {
                $(".menuHeader .layout .mmenu_trigger_sidebar_desk").slideUp();
                $(".header_top nav ul.header_menu li.location_trigger").eq(0).trigger("click");
                $(".menu_pyme").hide("slow");
                $(".widget_search").slideUp();
            });
            //FIX Boton Buscador
            $(document).on('click', '.search_trigger', function() {
                $(".menuHeader .layout .mmenu_trigger_sidebar_desk").slideUp();
                $(".menu_pyme").hide("slow");
            });

            $(".mmenu_trigger").click(function(event) {
                $(".widget_search").slideUp();
            });

            //FIX DEL ICONO DE CORRESPONSALIAS
            if (window.location.href.indexOf('/wps/portal/gfb') > 0 || window.location.href.indexOf('/wps/portal/ixe-xima') > 0) {
                $("body").append("<style>.mapicon.corresponsalia{background-position:-920.5px -126.5px;}</style>");
            }
            //FIX DE LOS ICONOS DE LOS PORTALES EN EL MENU
            $(".mmenu_inicio .layout .launcher .layout ul li.ixe img").css("margin-top", "-5px");
            $(".mmenu_inicio .layout .launcher .layout ul li.ixe img").css("margin-left", "-62px");
            $(".mmenu_inicio .layout .layout ul li.casadebolsa img").css("margin-top", "-3px");
            $(".mmenu_inicio .layout .layout ul li.casadebolsa img").css("margin-left", "-30px");
            $(".contact_trigger").css("display", "none");
            /************END FIXES MEJORAS MENU*****************/
            /************MENU PYME*********************/
            $('body').click(function(e) {
                if ($(e.target).closest('.pyme1').length === 0) {
                    $(".menu_pyme").slideUp();
                }
            });

            /*************INICIO DE MENU HEADER************/
            var amenus = [];
            amenus['banorte'] = { a: $('<a href="/wps/portal/banorte/" class="opt header-opt">').html('Personal') };
            amenus['ixe'] = { a: $('<a href="/wps/portal/ixe/" class="opt header-opt">').html('Preferente') };
            amenus['pyme'] = { a: $('<a href="/wps/portal/empresas/Home/circulo-pyme" class="opt header-opt">').html('PyMES') };
            amenus['empresa'] = { a: $('<a href="/wps/portal/empresas/Home/empresas-corporativos/" class="opt header-opt">').html('Empresas') };
            amenus['gobierno'] = { a: $('<a href="/wps/portal/empresas/Home/gobierno/" class="opt header-opt">').html('Gobierno') };
            amenus['casa'] = { a: $('<a href="/wps/portal/ixe-xima/" class="opt header-opt">').html('Casa de Bolsa') };

            var url2 = "";
            var rSearch = -95;
            var rIcon = -5; //position icono localizador
            var r = 422; //position menu
            var footer_fix = ''; //css de footer en gfb
            if (window.location.href.indexOf('/wps/portal/gfb') > 0 || window.location.href.indexOf('/wps/myportal/gfb') > 0) {
                /*
                        var css = '';
                        $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(

                        );
                        $(".header_menu").prepend($liBnt);
                        url2="/wps/contenthandler/gfb/!ut/p/digest!P7m2uaT5VfwJjWsb_kRo2g/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/images/homepage_search.png";
                        rIcon = -21;
                        //Parche para footer en GFB
                        footer_fix = '@media screen and (min-width:1024px){.footer_sitemap{padding:0px!important}.footer_sitemap>.layout{margin:auto!important;width:974px!important}.gbanorte .footer_sitemap .layout .footer_column{width:33%!important;margin:0px!important}}';
                        */
            }


            //TAGGEO AUTOMATICO DE PAGINAS INTERNAS
            var dominioAudiencias = window.location.toString().split('/Home')[0].split('portal/')[1];
            if (dominioAudiencias == undefined || dominioAudiencias == null) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['ixe'].a,
                    amenus['pyme'].a,
                    amenus['empresa'].a,
                    amenus['gobierno'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/banorte/!ut/p/digest!DVkRyeWvPl9Ovd7WCqiZVA/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/homepage_search.png";
                changeFooter(3, 2);
            } else if (window.location.href.indexOf('/wps/portal/banorte') > 0 || window.location.href.indexOf('/wps/myportal/banorte') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['ixe'].a,
                    amenus['pyme'].a,
                    amenus['empresa'].a,
                    amenus['gobierno'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/banorte/!ut/p/digest!DVkRyeWvPl9Ovd7WCqiZVA/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/homepage_search.png";
                changeFooter(3, 2);
            }

            if (window.location.href.indexOf('/wps/portal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/ixe/') > 0 || window.location.href.indexOf('/wps/portal/preferente/') > 0 || window.location.href.indexOf('/wps/myportal/preferente/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a,
                    amenus['pyme'].a,
                    amenus['empresa'].a,
                    amenus['gobierno'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/ixe/!ut/p/digest!34M0MbmTmkO39PEaDU8UBQ/dav/fs-type1/themes/PreferenteResponsivoTheme/css/images/homepage_search.png";
                changeFooter(3, 2);
            }

            if (window.location.href.indexOf('/wps/portal/ixe-xima/') > 0 || window.location.href.indexOf('/wps/myportal/ixe-xima/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a,
                    amenus['ixe'].a,
                    amenus['pyme'].a,
                    amenus['empresa'].a,
                    amenus['gobierno'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/ixe-xima/!ut/p/digest!KhlAdr30swEzDGgKyhcYhQ/dav/fs-type1/themes/XimaResponsivoTheme/css/images/homepage_search.png";
                r = 545;
                rIcon = -3;
                rSearch = -77;
                changeFooter(2, null);
            }

            //Parche logo empresas
            if (window.location.href.indexOf('/wps/portal/empresas/') > 0 || window.location.href.indexOf('/wps/portal/empresas/') > 0) {
                $('a.logo').attr('href', '/wps/portal/empresas/Home/empresas-corporativos/');
            }

            if (window.location.href.indexOf('/Home/gobierno/') > 0 || window.location.href.indexOf('/Home/gobierno/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a,
                    amenus['ixe'].a,
                    amenus['pyme'].a,
                    amenus['empresa'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            }

            if (window.location.href.indexOf('/Home/empresas-corporativos/') > 0 || window.location.href.indexOf('/Home/empresas-corporativos/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a,
                    amenus['ixe'].a,
                    amenus['pyme'].a,
                    amenus['gobierno'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            }

            if (window.location.href.indexOf('/wps/portal/empresas/Home/circulo-pyme') > 0){
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a,
                    amenus['ixe'].a,
                    amenus['empresa'].a,
                    amenus['gobierno'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            }

            /**PRE  BORRAR A PASAR A PRO**/
            if (window.location.href.indexOf('/Home/nueva-interfaz-empycop/') > 0 || window.location.href.indexOf('/Home/nueva-interfaz-empycop/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a,
                    amenus['ixe'].a,
                    amenus['pyme'].a,
                    amenus['gobierno'].a,
                    amenus['casa'].a
                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            }
            /**PRE**/
            var mediaCss = '';
            if ($('#logoutlink').is(':visible')) { //Si esta autenticado eliminar el menu
                $('#menu_pyme_opt').remove();
                mediaCss = 'li.logout {top: -18px!important;right: 18px;margin-left: 40px!important;}li.location_trigger {top: 13px;}';
            } else {
                mediaCss = '.search_trigger{top:-28px!important}li.location_trigger {top:-25px!important;}.header_menu{height: 40px!important;}';
                mediaCss += '.pyme1{right: ' + r + 'px;top: 5px;width: 590px!important;text-align: right;}'
            }

            var url = "/wps/wcm/connect/banorte/b80dc59c-98a9-4ec0-a250-c16340ae94c6/ubic.png?MOD=AJPERES&ContentCache=NONE&CACHEID=b80dc59c-98a9-4ec0-a250-c16340ae94c6";

            $styles = $('<style>').append( //Agregar estilos "necesarios" para el menu -- AntiNatural stuffÃÆÃ¢â¬Å¡ÃâÃÂ°
                '@media(min-width: 1024px){.pyme1{position:relative;}' + mediaCss + '.mmenu_trigger{visibility: hidden;}.search_trigger {float: right!important;}li.location_trigger{display:inline!important;right: ' + rIcon + 'px!important;}li.search_trigger{right:' + rSearch + 'px!important;}}',
                '@media(max-width: 1023px){.pyme1{position:absolute;}.mmenu_trigger{visibility: initial;}li.location_trigger{display:none!important}.pyme1{visibility:hidden;}}',
                '.header-opt{padding-right:10px!important;font-size: small;margin-right: 15px;}',
                '.mmenu_trigger {width: 31px!important;}',
                'li.location_trigger a {display: none;}',
                'li.location_trigger.active::before {content: "";display: block;width: 38px;height: 20px;position: absolute;top: 42px;left: -4px;background-image: url(' + url2 + ');background-size: 38px 12px;background-repeat: no-repeat;background-position: 0 0;}',
                'li.location_trigger.active{background-image: url(' + url + ')!important;background-size: 82%!important;background-repeat: no-repeat!important;background-position: inherit!important;}',
                'li.location_trigger {float: right!important;padding-top: 11px!important;width: 32px;height: 32px!important;background-size: 82%;vertical-align: middle;background-image: url(' + url + ');background-repeat: no-repeat;cursor: pointer;position: relative;padding: 0;margin: 0;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}',
                footer_fix
            );
            document.getElementsByClassName("search_trigger")[0].style.setProperty("background-position", "-134.5px -934px", "important"); //Cambiar icono de buscador responsivo
            $(".header_menu").prepend($styles);

            /*************FIN DE MENU HEADER************/

            /***************PARCHE FOOTER***************/
            function changeFooter(c, r) {
                //c: cambiar, r: remover
                try {
                    var footerEle = $('.footer_sitemap .layout  ul  li');
                    $(footerEle[c]).html('<div class="d_st"><a href="/wps/portal/gfb">Grupo Financiero Banorte</a></div>');
                    if (r)
                        $(footerEle[r]).remove();
                } catch (e) {
                    console.log(e);
                }
            }
            /*************FIN PARCHE FOOTER*************/

            var first = false;
            $(".pyme1 a.opt").click(function() {
                $(".menu_pyme").slideToggle("500");
                $(".menuHeader .layout .mmenu_trigger_sidebar_desk").slideUp();
                $(".widget_search").slideUp();

            });


            $(".icon-cot").css("width", "29px");
            $(".icon-cot").css("margin-left", "10px");

            /*RESPONSIVO
            $(window).load(function() {
              $(window).resize(function () {
                resize();
              });
            });

            function resize(){
                var max = false;
                var min = false;
                try{
                 var mediaqueryMaxWidth1024 = window.matchMedia("(max-width: 1024px)");
                   max = mediaqueryMaxWidth1024.matches;
                   var mediaqueryMinWidth1024 = window.matchMedia("(min-width: 1024px)");
                   min = mediaqueryMinWidth1024.matches;
                }catch(e){
                    //IE
                    var width = window.innerWidth;
                    max = (width<=1024);
                    min = (width<=1023)
                };

                if (max) {
                  $(".columns2B").css("width", "101px !important");
                  $(".search_trigger").css("float", "initial");
                  $(".search_trigger").css("margin-left", "20px");
                } 

                if (min) {
                  $(".columns2B").css("width", "420px !important");
                }
            }*/
            $(".pyme1").css("cursor", "initial!important");
            $(".pyme1 a.opt").css("transition", "all 0.5s");
            $(".pyme1 a.opt").css("padding", "5px");
            $(".pyme1 a.opt").css("-webkit-border-radius", "4px");
            $(".pyme1 a.opt").css("-moz-border-radius", "4px");
            $(".pyme1 a.opt").css("border-radius", "4px");
            $(".wpthemeCol").css("min-height", "0px!important");
            $(".active").css("min-height", "border: solid 2px red");
            $(".pyme1 .menu_pyme").css("width", "300px");
            $(".pyme1 .menu_pyme").css("background-color", "rgba(78, 64, 68, 0.6)");
            $(".pyme1 .menu_pyme").css("display", "none");
            $(".pyme1 .menu_pyme li").css("width", "293px");
            $(".pyme1 .menu_pyme li").css("text-align", "center");
            $(".pyme1 .menu_pyme li").css("display", "inherit !important");
            $(".pyme1 .menu_pyme li").css("transition", "background 0.5s");
            $(".pyme1 .menu_pyme li a").css("padding", "0px!important");
            $(".pyme1 .menu_pyme li a").css("display", "block");
            $(".pyme1 .menu_pyme li a").css("font-family", '"Roboto"');
            $(".pyme1 .menu_pyme li a").css("font-style", "normal");
            $(".pyme1 .menu_pyme li a").css("font-weight", "100");
            $(".pyme1 .menu_pyme li a").css("height", "57px");
            $(".menu_pyme li").css("padding-left", "5px !important");
            $(".menu_pyme li").css("margin-left", "0px !important");
            $(".menu_pyme li").css("height", "57px");
            $(".menu_pyme li").css("margin-left", "0px");
            $(".menu_pyme li").css("padding-left", "7px");
            $(".menu_pyme li").css("padding-right", "0px");
            $(".menu_pyme li").css("display", "table");
            $(".menu_pyme").css("margin-top", "4px");
            $(".menu_pyme a").css("text-align", "left");
            $(".leftMenuPyME").css("width", "80%");
            $(".leftMenuPyME").css("height", "100%");
            $(".leftMenuPyME").css("position", "relative");
            $(".leftMenuPyME").css("float", "left");
            $(".leftMenuPyME").css("font-family", "'Gotham Book'");
            $(".leftMenuPyME").css("padding-left", "1px");
            $(".flechaMenuPyME").css("width", "10%");
            $(".flechaMenuPyME").css("height", "40%");
            $(".flechaMenuPyME").css("position", "relative");
            $(".flechaMenuPyME").css("float", "left");
            $(".flechaMenuPyME").css("background-image", "url('https://www.banorte.com/wps/contenthandler/gfb/!ut/p/digest!o56m9atE6KHWP7NwW7UUCA/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/images/spriteGbanorteListPanels.png;wa76ed97d782ad0475')");
            $(".flechaMenuPyME").css("background-position", "-340px -240px");
            $(".flechaMenuPyME").css("background-repeat", "no-repeat");
            $(".flechaMenuPyME").css("background-size", "600px 400px");
            $(".flechaMenuPyME").css("top", "31%");
            $(".flechaMenuPyME").css("left", "9%");
            $(".bnte").click(function(event) {
                event.preventDefault();
                var url = "https://nbxi.banorte.com/NBXI/aaloginnew.aspx";
                popupiframe('#iFrameBlock', url, 110, 70);
                return false;
            });

            $(".ixeNet").click(function(event) {
                event.preventDefault();
                popup('#popUpLoginIxeNet');
                return false;
            });

            $(".bem").click(function(event) {
                event.preventDefault();
                var url = "https://nbem.banorte.com/NBXI/aaloginnew.aspx?BEM";
                popupiframe('#iFrameBlock', url, 110, 70);
                return false;
            });

            function closeanypopup($remove) {
                var movimiento = 800;
                if ($remove) var remove = $remove;
                else var remove = "-1100px";
                $('.popup').animate({ top: remove }, (movimiento / 2), 'swing', function() {
                    $(this).hide();
                });
            }

            function popup($id) {
                var movimiento = 800;
                var widthx = $($id).width();
                var heighty = $($id).height();
                var scroll = $(window).scrollTop();
                var offset = 200;
                var remove = (scroll + heighty + offset + offset) * -1;
                lightbox('open');
                $($id).show().animate({ top: (scroll + offset) }, movimiento, 'swing');
                $($id + ' button').click(function() {
                    if ($(this).hasClass('cancelar')) {
                        if ($('.lightbox').hasClass('open')) {
                            closeanypopup(remove);
                            lightbox('close');
                        }
                    } else {
                        $($id + ' .error').slideDown();
                    }
                });
                // CLOSE WITH ESCAPE
                $(document).keyup(function(e) {
                    if (e.keyCode == 27) {
                        if ($('.lightbox').hasClass('open')) {
                            closeanypopup(remove);
                            lightbox('close');
                        }
                    }
                });
                $("#clos").click(function() {
                    closeanypopup(remove);
                    lightbox('close');
                });

                $(".lightbox").click(function(event) {
                    closeanypopup(remove);
                    lightbox('close');
                });

                $('input[name="image"]').click(function() {
                    closeanypopup(remove);
                    lightbox('close');
                });
            } //popup
            /************FIN MENU PYME*****************/


            /************LOGIN ANTERIOR IXE*****************/

            function iluminada_apagada(opt) {
                if (opt = 1) {
                    $("img[name='log']").src("../storage/pleca_login_2.jpg");
                } else {
                    $("img[name='log']").src("../storage/pleca_login.jpg");
                }
            }

            function submitForm() {
                if (document.loginForm.userField.value == '') {
                    alert('Captura tu Usuario.');
                    return false;
                }
                if (cookieValidation()) {
                    setSessionCookie();
                    window.open('', 'IXENet', 'toolbar=no, status=yes, dependent=no, location=no, menubar=no, scrollbars=yes, width=1024, height=760,resizable=yes');
                    document.loginForm2.target = 'IXENet';
                    document.loginForm2.service.value = document.loginForm.service.value;
                    document.loginForm2.sp.value = document.loginForm.sp.value;
                    document.loginForm2.Form0.value = document.loginForm.Form0.value;
                    document.loginForm2.$FormConditional.value = document.loginForm.$FormConditional.value;
                    document.loginForm2.userField.value = document.loginForm.userField.value;
                    document.loginForm2.LC.value = document.getElementById('LCtmp').value;
                    document.loginForm2.RFC.value = document.getElementById('RFCtmp').value;
                    document.loginForm2.IM.value = document.getElementById('IMtmp').value;
                    document.loginForm2.ID.value = document.getElementById('IDtmp').value;
                    document.loginForm2.TP.value = document.getElementById('TPtmp').value;
                    document.loginForm2.SH.value = document.getElementById('SHtmp').value;

                    $("#clos").trigger("click");

                    document.loginForm2.submit();
                    document.loginForm.reset();


                    return false;
                } else {
                    alert('Estimado cliente, para poder operar en IXE Net debe habilitar las cookies en su navegador.');
                    return false;
                }
            }

            function setSessionCookie() {
                document.cookie = "JSESSIONID=ABCDEF; path=/";
            }

            function cookieValidation() {
                return navigator.cookieEnabled;
            }

            var strHTML = "";
            strHTML = strHTML + '<div class="popup" dir="ltr" id="popUpLoginIxeNet" style="padding: 10px; padding-top:40px; width: 235px; margin-left: -100px; top: 270px; display: none;">';
            strHTML = strHTML + '<div id="clos" class="closePopup"></div>';
            strHTML = strHTML + '<input type="hidden" id="LCtmp" value="">';
            strHTML = strHTML + '<input type="hidden" id="RFCtmp" value="">';
            strHTML = strHTML + '<input type="hidden" id="IMtmp" value="">';
            strHTML = strHTML + '<input type="hidden" id="IDtmp" value="">';
            strHTML = strHTML + '<input type="hidden" id="TPtmp" value="">';
            strHTML = strHTML + '<input type="hidden" id="SHtmp" value="">  ';
            strHTML = strHTML + '<!--<link href="./Ixe Portal_files/styles01.css" type="text/css" rel="stylesheet">';
            strHTML = strHTML + '<link href="./Ixe Portal_files/styles02.css" type="text/css" rel="stylesheet">-->';
            strHTML = strHTML + '<meta content="MSHTML 6.00.2900.3527" name="GENERATOR">';
            strHTML = strHTML + '<div id="layBody" style="background-image:url(/wps/wcm/connect/ixe/997a9801-20d4-440a-bd85-3fd376ce6aef/bkg_tbl_loginHome.jpg?MOD=AJPERES&useDefaultText=0&useDefaultDesc=0); background-repeat:no-repeat">';
            strHTML = strHTML + '<table style="BACKGROUND-REPEAT: no-repeat" border="0" cellspacing="0" cellpadding="5" width="213" background="/wps/wcm/connect/ixe/997a9801-20d4-440a-bd85-3fd376ce6aef/bkg_tbl_loginHome.jpg?MOD=AJPERES&useDefaultText=0&useDefaultDesc=0" height="140">';
            strHTML = strHTML + '  <tbody>';
            strHTML = strHTML + '    <tr>';
            strHTML = strHTML + '      <td height="189" valign="bottom" style="padding-left:5px;">';
            strHTML = strHTML + '        <form method="post" name="loginForm2" action="https://nixe.ixe.com.mx/NBXI/AALoginixe.aspx?banco=IXE" target="_blank">';
            strHTML = strHTML + '          <input name="service" value="direct/1/PortalLogin/form.form" type="hidden"> ';
            strHTML = strHTML + '          <input name="sp" value="S0" type="hidden"> ';
            strHTML = strHTML + '          <input name="Form0" value="userField,$FormConditional,$ImageSubmit" type="hidden"> ';
            strHTML = strHTML + '          <input name="$FormConditional" value="T" type="hidden"> ';
            strHTML = strHTML + '          <input name="userField" type="hidden"> ';
            strHTML = strHTML + '          <input name="LC" type="hidden"> ';
            strHTML = strHTML + '          <input name="RFC" type="hidden"> ';
            strHTML = strHTML + '          <input name="IM" type="hidden"> ';
            strHTML = strHTML + '          <input name="ID" type="hidden"> ';
            strHTML = strHTML + '          <input name="TP" type="hidden"> ';
            strHTML = strHTML + '          <input name="SH" type="hidden"> ';
            strHTML = strHTML + '        </form>';
            strHTML = strHTML + '      <form onsubmit="return submitForm();" method="post" name="loginForm" action="https://nixe.ixe.com.mx/NBXI/AALoginixe.aspx?banco=IXE" target="_blank">';
            strHTML = strHTML + '      <table border="0" cellspacing="0" cellpadding="0" width="100%">';
            strHTML = strHTML + '          <tbody>';
            strHTML = strHTML + '            <tr><td height="16" valign="middle" align="left"><a target="_blank" title="" href="https://nixe.ixe.com.mx/NBXIActivacion/sincronizacionIXE.aspx" class="lnkNL-010" style="text-decoration:none; color:#005850; font-size: 10px;"><strong></strong></a></td><td valign="middle" align="left"></td><td colspan="2" align="left">&nbsp;</td></tr>';
            strHTML = strHTML + '            <tr><td height="16" valign="middle" align="left"><a target="_blank" title="" href="https://nixe.ixe.com.mx/NBXIActivacion/sincronizacionIXE.aspx" class="lnkNL-010" style="text-decoration:none; color:#005850; font-size: 10px;"><strong></strong></a></td><td valign="middle" align="left"></td><td colspan="2" align="left">&nbsp;</td></tr>';
            strHTML = strHTML + '            <tr>';
            strHTML = strHTML + '             <td class="txtNL-002" rowspan="2" colspan="2" align="left">';
            strHTML = strHTML + '                <table border="0" cellspacing="0" cellpadding="0">';
            strHTML = strHTML + '                 <tbody>';
            strHTML = strHTML + '                    <tr><td class="txtNL-002" style="font-size:10px; color: #4a4a4a;"><strong>USUARIO</strong></td></tr>';
            strHTML = strHTML + '                    <tr><td><input style="WIDTH: 130px; HEIGHT: 17px" id="userField" class="frmNL-005" name="userField" maxlength="40" type="password"></td></tr>';
            strHTML = strHTML + '                  </tbody>';
            strHTML = strHTML + '                </table>';
            strHTML = strHTML + '              </td>';
            strHTML = strHTML + '            </tr>';
            strHTML = strHTML + '            <tr>';
            strHTML = strHTML + '              <td><img src="/wps/wcm/connect/ixe/7804cd88-1d95-498a-b22a-cf6f34b0b3b3/sep_login.gif?MOD=AJPERES" WIDTH="12" HEIGHT="26" /></td>';
            strHTML = strHTML + '              <td class="txtNL-002" align="left"><input border="0" style="border:0px !important;" name="Image1" value="login" src="/wps/wcm/connect/ixe/86112f5c-7706-4e50-bf7c-5682cb43d6ec/btn_entrarOLD.gif?MOD=AJPERES&useDefaultText=0&useDefaultDesc=0" type="image"></td>';
            strHTML = strHTML + '            </tr>';
            strHTML = strHTML + '            <tr>';
            strHTML = strHTML + '              <td height="16" colspan="2" align="left">&nbsp;</td>';
            strHTML = strHTML + '              <td colspan="2" align="left"><input name="service" value="direct/1/PortalLogin/form.form" type="hidden"> <input name="sp" value="S0" type="hidden"> <input name="Form0" value="userField,$FormConditional,$ImageSubmit" type="hidden"> <input name="$FormConditional" value="T" type="hidden"></td>';
            strHTML = strHTML + '            </tr>';
            strHTML = strHTML + '            <tr>';
            strHTML = strHTML + '              <td height="16" valign="middle" align="left"><a target="_blank" title="" href="https://nixe.ixe.com.mx/NBXIActivacion/sincronizacionIXE.aspx"  class="lnkNL-010" style="text-decoration:none; color:#005850; font-size: 10px;"><strong>Sincronizar Token </strong></a></td>';
            strHTML = strHTML + '              <td valign="middle" align="left"><img src="/wps/wcm/connect/ixe/df634652-7a03-463a-8141-55a5f85baa7b/token_mini.jpg?MOD=AJPERES" WIDTH="40" HEIGHT="17" /></td>';
            strHTML = strHTML + '              <td colspan="2" align="left">&nbsp;</td>';
            strHTML = strHTML + '            </tr>';
            strHTML = strHTML + '          </tbody>';
            strHTML = strHTML + '        </table>';
            strHTML = strHTML + '      </form>';
            strHTML = strHTML + '      </td>';
            strHTML = strHTML + '    </tr>';
            strHTML = strHTML + '  </tbody>';
            strHTML = strHTML + '</table>';
            strHTML = strHTML + '</div>';
            strHTML = strHTML + '</div>';

            $("body").append(strHTML);
            /************FIN LOGIN ANTERIOR IXE*****************/
        });
    })();

    //Carga del GPT
    var imported = document.createElement('script');
    imported.src = 'https://www.googletagservices.com/tag/js/gpt.js';
    document.head.appendChild(imported);
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    //Fin Carga del GPT

    //Creacion de Tags de eventos en GA
    function gaTagCreate(tagAction, triggerType, level1, level2, detailLevelTitle) {
        if (window.location.href.indexOf('www.banorte.com') > 0) {
            ga('send', 'event', level1, level2, detailLevelTitle);
            console.log("Evento: ga('send', 'event', " + level1 + ", " + level2 + ", " + detailLevelTitle + ");");
        }
        //console.log("tag de evento enviado");
    }

    //TAGGEO AUTOMATICO DE PAGINAS INTERNAS
    var dominio = window.location.toString().split('/Home')[0].split('portal/')[1];

    //TAGGEO HEADERS FOOTERS Y PORTLETS

    function getUrlDomain() {
        var sub_domain = window.location.toString().split('.')[0].split('//')[1];
        var sub_domain2 = window.location.toString().split('.')[1];
        //console.log(sub_domain + "." + sub_domain2);
        return sub_domain + "." + sub_domain2;
    }

    (function() {
        $(document).ready(function() {
            //TAGGEO GFB
            if (window.location.href.indexOf('/wps/portal/gfb') > 0 || window.location.href.indexOf('/wps/myportal/gfb') > 0) {
                //FOOTER
                $(".ligas-info a").on("click", function() {
                    gaTagCreate('send', 'event', 'Gfb Home - Footer', 'Ingresar', $(this).html());
                });
                //TAG HEADER LOGO
                $(".gbanorte > header .header_top a.logo").on("click", function() {});
            }
            //TAGGEO BANORTE
            var dominioAudiencias2 = window.location.toString().split('/Home')[0].split('portal/')[1];
            if (window.location.href.indexOf('/wps/portal/banorte') > 0 || window.location.href.indexOf('/wps/myportal/banorte') > 0 || dominioAudiencias2 == null || dominioAudiencias2 == undefined) {
                //PRE-FOOTER
                $(".banorte .footer_sitemap .layout ul li .d_st").on("click", function() {
                    gaTagCreate('send', 'event', 'Banorte Home - Pre Footer', 'Ingresar', $(this).children("a").html());
                });
                //FOOTER
                $(".ligas-info a").on("click", function() {
                    gaTagCreate('send', 'event', 'Banorte Home - Footer', 'Ingresar', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".banorte > header .header_top nav ul.header_menu li a").on("click", function() {
                    //gaTagCreate('send', 'event', 'Banorte Home', 'Otros Portales', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".banorte > header .header_top a.logo").on("click", function() {});
            }
            //TAGGEO IXE
            if (window.location.href.indexOf('/wps/portal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/preferente/') > 0 || window.location.href.indexOf('/wps/myportal/preferente/') > 0) {
                //PRE-FOOTER
                $(".ixe .footer_sitemap .layout ul li .d_st").on("click", function() {
                    gaTagCreate('send', 'event', 'Ixe Home - Pre Footer', 'Ingresar', $(this).children("a").html());
                });
                //FOOTER
                $(".ligas-info a").on("click", function() {
                    gaTagCreate('send', 'event', 'Ixe Home - Footer', 'Ingresar', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".ixe > header .header_top nav ul.header_menu li a").on("click", function() {
                    //gaTagCreate('send', 'event', 'Ixe Home', 'Otros Portales', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".ixe > header .header_top a.logo").on("click", function() {
                    //gaTagCreate('send', 'event', 'Ixe Home', 'Click Logo Principal', 'Redireccion HOME');
                });
            }
            //TAGGEO XIMA
            if (window.location.href.indexOf('/wps/portal/ixe-xima') > 0 || window.location.href.indexOf('/wps/myportal/ixe-xima') > 0) {
                //PRE-FOOTER
                $(".xima .footer_sitemap .layout ul li .d_st").on("click", function() {
                    gaTagCreate('send', 'event', 'Xima Home - Pre Footer', 'Ingresar', $(this).children("a").html());
                });
                //FOOTER
                $(".ligas-info a").on("click", function() {
                    gaTagCreate('send', 'event', 'Xima Home - Footer', 'Ingresar', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".xima > header .header_top nav ul.header_menu li a").on("click", function() {
                    //gaTagCreate('send', 'event', 'Xima Home', 'Otros Portales', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".xima > header .header_top a.logo").on("click", function() {
                    //gaTagCreate('send', 'event', 'Xima Home', 'Click Logo Principal', 'Redireccion HOME');
                });
            }
            //TAGGEO EMPRESAS
            if (window.location.href.indexOf('/wps/portal/empresas') > 0 || window.location.href.indexOf('/wps/myportal/empresas') > 0) {
                //PRE-FOOTER
                $(".empresas .footer_sitemap .layout ul li .d_st").on("click", function() {
                    gaTagCreate('send', 'event', 'Empresas Home - Pre Footer', 'Ingresar', $(this).children("a").html());
                });
                //FOOTER
                $(".ligas-info a").on("click", function() {
                    gaTagCreate('send', 'event', 'Empresas Home - Footer', 'Ingresar', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".empresas > header .header_top nav ul.header_menu li a").on("click", function() {
                    //gaTagCreate('send', 'event', 'Empresas Home', 'Otros Portales', $(this).html());
                });
                //TAG HEADER OTROS PORTALES
                $(".empresas > header .header_top a.logo").on("click", function() {
                    //gaTagCreate('send', 'event', 'Empresas Home', 'Click Logo Principal', 'Redireccion HOME');
                });
            }

            if (window.location.href.indexOf('/wps/portal/gfb') > 0 || window.location.href.indexOf('/wps/myportal/gfb') > 0 || window.location.href.indexOf('/wps/portal/banorte') > 0 || window.location.href.indexOf('/wps/myportal/banorte') > 0 || window.location.href.indexOf('/wps/portal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/ixe/') > 0 || window.location.href.indexOf('/wps/portal/preferente/') > 0 || window.location.href.indexOf('/wps/portal/preferente/') > 0 || dominioAudiencias2 == null || dominioAudiencias2 == undefined) {
                $(".redes-sociales").show();
            }
            //FIN HABILITACION DE REDES SOCIALES EN EL FOOTER
        });
    })();
    //FIN TAGGEO HOME BANORTE

    //Chat
    //|| window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/solicita-tu-tarjeta')>0

    if (window.location.href.indexOf('/wps/portal/banorte/Home/seguros/seguro-auto/auto') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-de-nomina/nomina') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/preferente.proteccion-patrimonio2/preferente-seguro-auto2') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/ixe-oro') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/ixe-united') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/united-universe') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/preferente.proteccion-patrimonio2/preferente-seguro-auto2') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/ixe-oro') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/ixe-united') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/united-universe') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-por-ti') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/clasica') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/oro') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/mujer-banorte') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-40') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/tuzos') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-basica') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/ke-buena') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cotiza-en-linea/nomina/credito-de-nomina') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-de-nomina/adelanto-nomina') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/ixe-oro') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/ixe-united') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/united-universe') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/ixe-oro') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-banorte') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/ixe-united') > 0 ||
        window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/united-universe') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cotiza-en-linea/auto/auto-estrene') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/la-comer') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/w-radio') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-united') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-visa-platinum') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-visa-infinite') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-united-universe') > 0 ||
        window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-united') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-banorte-seminuevos') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-nomina') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-nomina?uri=nm:oid:cotizador.auto-estrene') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-nomina-seminuevos') > 0 ||
        window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/solicitar-tarjeta-de-credito') > 0) {
        var _gt = _gt || [];
        _gt.push(['config', {
            dslResource: ('https:' == document.location.protocol ? 'https://gwe.banorte.com:9443' : 'http://gwe.banorte.com:9081') + '/server/resources/dsl/domain-model.xml',
            debug: false,
            httpEndpoint: 'http://gwe.banorte.com:9081',
            httpsEndpoint: 'https://gwe.banorte.com:9443'
        }]);

        var _gwc = {
            debug: false,
            widgetUrl: ('https:' == document.location.protocol ? 'https://gwe.banorte.com:9443' : 'http://gwe.banorte.com:9081') + '/server/resources/chatWidget.html',
            serverUrl: ('https:' == document.location.protocol ? 'https://gwe.banorte.com:9443' : 'http://gwe.banorte.com:9081') + '/server/cometd',
            templates: ('https:' == document.location.protocol ? 'https://gwe.banorte.com:9443' : 'http://gwe.banorte.com:9081') + '/server/resources/chatTemplatesBanorte.html',
            localization: ('https:' == document.location.protocol ? 'https://gwe.banorte.com:9443' : 'http://gwe.banorte.com:9081') + '/server/resources/locale/chatLocalization.json',
            autoRestore: true,
            embedded: true,
            onReady: [function(chatApi) {
                chatApi.onSession(function(session) {

                    localStorage.removeItem('gweState');

                    session.onAgentConnected(function(event) {
                        $('#gcbChatTextArea').prop('disabled', false);
                        $('#gcbChatSend').prop('disabled', false);
                    });

                    $('#gcbChatSend').click(function() {
                        var textToSend = $('#gcbChatTextArea').val();
                        if (textToSend && 0 < textToSend.length) {
                            session.sendMessage(textToSend);
                            $('#gcbChatTextArea').focus();
                            $('#gcbChatTextArea').val('');
                        }
                    });
                });
            }],
            ui: {
                onBeforeRegistration: function(regForm) {

                    var registration = jQuery(regForm).find('#gcbChatRegister');
                    var skipRegistration = jQuery(regForm).find('#gcbChatSkipRegistration');

                    var chatPhone = jQuery(regForm).find('#gcbChatPhone');
                    var chatPhoneError = jQuery(regForm).find('#gcbChatPhoneError');

                    var chatEmail = jQuery(regForm).find('#gcbChatEmail');
                    var chatEmailError = jQuery(regForm).find('#gcbChatEmailError');

                    registration.click(function() {

                        $('.gwc-chat-validation-error').hide();

                        var chatPhoneValue = chatPhone.val();
                        var phoneRegex = /^\d{10}$/;
                        var validPhone = false;

                        if (!chatPhoneValue || 0 === chatPhoneValue.length) {
                            validPhone = true;
                        } else if (chatPhoneValue.match(phoneRegex)) {
                            chatPhoneError.html('').hide();
                            validPhone = true;
                        } else {
                            $('.gwc-chat-validation-error').hide();
                            chatPhoneError.html('Por favor ingrese un "TelÃ©fono" de 10 dÃ­gitos').show();
                            chatPhone.focus();
                            validPhone = false;
                        }

                        var chatEmailValue = chatEmail.val();
                        var emailRegex = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
                        var validEmail = false;

                        if (!chatEmailValue || 0 === chatEmailValue.length) {
                            validEmail = true;
                        } else {
                            chatEmailValue = chatEmailValue.toLowerCase();
                            if (chatEmailValue.match(emailRegex)) {
                                chatEmailError.html('').hide();
                                validEmail = true;
                            } else {
                                $('.gwc-chat-validation-error').hide();
                                chatEmailError.html('Por favor ingrese un "Email" vÃ¡lido').show();
                                chatEmail.focus();
                                validEmail = false;
                            }
                        }
                        return (validPhone && validEmail);
                    });

                    skipRegistration.click(function() {
                        $('.gwc-chat-embedded-window').remove();
                        localStorage.removeItem('gweState');
                        return false;
                    });
                }
            },
            embedded: true
        };

        if (localStorage['gweState']) {
            _gwc.userData = JSON.parse(localStorage['gweState']);
        }

        jQuery(window.document).on('click', '.gwc-chat .gwc-chat-control-close', {}, function() {
            localStorage.removeItem('gweState');
        });
        (function(gpe) {
            if (document.getElementById(gpe)) return;
            var s = document.createElement('script');
            s.id = gpe;
            s.src = ('https:' == document.location.protocol ? 'https://gwe.banorte.com:9443' : 'http://gwe.banorte.com:9081') + '/server/resources/js/build/GPE.min.js';
            (document.getElementsByTagName('head')[0] || document.body).appendChild(s);
        })('_gt');

        /*AÃ±adir estilos de chat
        var banorte=".gwc-chat-icon-minimize,.gwc-chat-icon-close,.gpe-dialog-buttonset>button>span{color:#eb0029!important}#gcbChatRegister,.gpe-dialog-titlebar,.gpe-dialog-buttonpane,.gpe-dialog-buttonset>button{background-color:#eb0029!important}#gcbChatRegister:hover{background-color:#d10024!important}.gwc-chat-logo{background-image:url(https://www.banorte.com/cms/chat/banorte-chat02.png)!important}[type~=chat]{background-image:url(https://www.banorte.com/cms/chat/banorte-chat01.png)!important}[type~=callback]{background-image:url(https://www.banorte.com/cms/chat/banorte-calback01.png)!important}[type~=chat]:hover{background-color:white!important;background-image:url(https://www.banorte.com/cms/chat/banorte-chat02.png)!important}[type~=callback]:hover{background-color:white!important;background-image:url(https://www.banorte.com/cms/chat/banorte-callback02.png)!important}button#gcbChatSend{background:#eb0029!important}button#gcbChatSend:hover{background:#d10024!important}";
        var ixe=".gwc-chat-icon-minimize,.gwc-chat-icon-close,.gpe-dialog-buttonset>button>span{color:#008375!important}#gcbChatRegister,.gpe-dialog-titlebar,.gpe-dialog-buttonpane,.gpe-dialog-buttonset>button{background-color:#008375!important}#gcbChatRegister:hover{background-color:#00695e!important}.gwc-chat-logo{background-image:url(https://www.banorte.com/cms/chat/ixe-chat02.png)!important}[type~=chat]{background-image:url(https://www.banorte.com/cms/chat/ixe-chat01.png)!important}[type~=callback]{background-image:url(https://www.banorte.com/cms/chat/ixe-callback01.png)!important}[type~=chat]:hover{background-color:white!important;background-image:url(https://www.banorte.com/cms/chat/ixe-chat02.png)!important}[type~=callback]:hover{background-color:white!important;background-image:url(https://www.banorte.com/cms/chat/ixe-callback02.png)!important}button#gcbChatSend{background:#008375!important}button#gcbChatSend:hover{background:#00695e!important}";
        var style="@media(max-width:780px){.gpe-dialog-buttonpane{background:none!important}.gpe-dialog.gpe-widget.gpe-widget-content.gpe-corner-all.gpe-front.gpe-dialog-buttons.ui-resizable{bottom:-58px;background:transparent}.gpe-dialog.gpe-widget.gpe-widget-content.gpe-corner-all.gpe-front.gpe-dialog-buttons.ui-resizable.show-chat{width:50px!important}.gpe-dialog-buttonset>button>span{bottom:10px;right:59px;min-width:160px;max-width:160px;font-size:xx-small;padding:5px!important}.gpe-dialog-buttonset>button{width:40px;height:40px}.gpe-dialog-buttonset>button>span:after,.gpe-dialog-buttonset>button>span:before{top:50%;left:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.gpe-dialog-buttonset>button>span:after{border-color:rgba(255,255,255,0);border-left-color:#fff;border-width:3px;margin-top:-3px}.gpe-dialog-buttonset>button>span:before{border-color:rgba(0,0,0,0);border-left-color:#000;border-width:4px;margin-top:-4px}}@media(min-width:781px){.gpe-dialog-buttonset>button:first-child{margin-right:25px!important;margin-left:10px}.gpe-dialog.gpe-widget.gpe-widget-content.gpe-corner-all.gpe-front.gpe-dialog-buttons.ui-resizable{bottom:-86px}.gpe-dialog-buttonset>button>span{bottom:96px;right:4px}.gpe-dialog-buttonset>button{width:70px;height:70px}.gpe-dialog-buttonset>button>span{padding:10px!important}.gpe-dialog-buttonset>button>span:after,.gpe-dialog-buttonset>button>span:before{top:100%;left:82%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.gpe-dialog-buttonset>button>span:after{border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:6px;margin-left:-6px}.gpe-dialog-buttonset>button>span:before{border-color:rgba(0,0,0,0);border-top-color:#000;border-width:7.4px;margin-left:-7px}}textarea#gcbChatTextArea{width:75%}button#gcbChatSend{width:25%;height:auto;float:right;height:71px}.gpe-button{border:1px solid white;cursor:pointer}button.gpe-button.gpe-widget.gpe-state-default.gpe-corner-all.gpe-button-icon-only.gpe-dialog-titlebar-close{background:none;border: none;right: 1em;top: 48%;}.gpe-button > span.gpe-button-text{font-size: medium;}span.gpe-button-text{color:white;font-size: small;background: none;display:initial!important}.gpe-dialog-buttonset>button>span{display:none!important;border:1px solid #000;position:absolute;text-align:center;width:auto;min-width:130px!important;background:#fff;font-size: small!important;transition:display 1s ease-in-out}.gpe-dialog-buttonset>button:hover>span{display:block!important}.show-chat{bottom:-6px!important;transition:visibility 0.5s ease-in-out}.show-cat:before{visibility:hidden}.gpe-dialog.gpe-widget.gpe-widget-content.gpe-corner-all.gpe-front.gpe-dialog-buttons.ui-resizable{position:fixed!important;max-width:200px;right:20px!important;top:auto!important;left:auto!important;z-index: 1000000000;transition:bottom 0.5s ease-in-out}#gpe-id-1,[type~=close],[type~=cancel],.show-chat>.gpe-dialog-titlebar{visibility:hidden;display:none!important}.gpe-dialog.gpe-widget.gpe-widget-content.gpe-corner-all.gpe-front.gpe-dialog-buttons.ui-resizable,.gpe-widget-content{border:none}.gpe-dialog-titlebar{margin-bottom:-10px;cursor:pointer;font-size:larger}.gpe-dialog-buttonpane{padding:10px;margin-top:0px!important}.gpe-dialog-buttonset{text-align:center;float:initial!important;text-align:center}.gpe-dialog-buttonset>button{position: relative;color:black;background-size:contain!important;background-repeat:no-repeat!important;transition:background 0.3s ease-in-out}label.gwc-chat-label{display:none}.gwc-chat-registration-skip{width:100%}.gwc-chat-logo{float:left;width:48px!important;height:48px!important;background-size:contain!important;}.gwc-chat-branding{margin-bottom:20px}.gwc-chat-embedded-window{border:none!important;}.gwc-chat-branding::after{content:'Chatea con nosotros';color:#56404d;margin-left:14px;font-size:large;line-height:51px}.gwc-chat-registration-submit{width:100%}.gwc-chat-button{width:100%;text-align:center!important;padding:10px!important;margin-bottom:8px}.gwc-chat-controls input{width:100%;padding:10px!important;border:none;margin-bottom:10px}#gcbChatRegister{background-image:none;text-transform:uppercase}.gwc-chat-message.gwc-chat-systemMessage .gwc-chat-message-text{color:black}.gwc-chat-message.gwc-chat-systemMessage{width:100%;padding:0;background:none}.gwc-chat-message{width:75%;padding:10px;background-color:#4e4044;color:white;float:right;border-radius:22px;margin-bottom:5px}.gwc-chat-message .gwc-chat-message-author,.gwc-chat-message .gwc-chat-message-time{color:white}.gwc-chat-message.gwc-chat-agentMessage{width:75%;padding:10px;float:left;background-color:#f1f1f1;color:#4e4044}.gwc-chat-message.gwc-chat-agentMessage .gwc-chat-message-author,.gwc-chat-message.gwc-chat-agentMessage .gwc-chat-message-time{color:#4e4044}.gwc-chat-message-author,.gwc-chat-message-time{font-weight:bolder!important}.gwc-chat-message.gwc-chat-typingMessage{background:none;width:100%;margin:0;margin-bottom:-2px}.gwc-chat-message.gwc-chat-typingMessage .gwc-chat-message-text{font-size:smaller!important}.gwc-chat-control:hover,.gwc-chat-control{border:none}.gwc-chat-head.gwc-drag-handle{background-color:#f9f9f9;margin-bottom:-26px}.gwc-chat-title{display:none;visibility:hidden}.gwc-chat-icon-minimize,.gwc-chat-icon-close{font-size:medium!important;background:none}.gwc-chat-icon-minimize::after{content:'_'}.gwc-chat-icon-close::after{content:'X'}";
        var url=location.href;
        if(url.indexOf('/portal/banorte/')!=-1 || url.indexOf('portal_banorte')!=-1){style+=banorte;}else if(url.indexOf('/portal/ixe/')!=-1 || url.indexOf('portal_ixe')!=-1){style+=ixe;};
        //$('head').append('<style>'+style+'</style>');
        b=document.getElementsByTagName("head")[0],
        c=document.createElement("style");
        if(b.insertBefore(c,b.childNodes[0]),c.styleSheet)c.styleSheet.disabled||(c.styleSheet.cssText=style);
        else try{c.innerHTML=style}catch(d){c.innerText=st};
        //Fin estilos chat banorte*/
        //Estilos chat 
        var randomnos = Math.ceil(Math.random() * 1000000000);
        var link = document.createElement("link");
        link.href = "https://www.banorte.com/cms/chat/propuestas/chat_stilos2.css" + "?v=" + randomnos;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
        var url = location.href;
    }

    //new Script

    /*  var randomnos = Math.ceil(Math.random() * 1000000000);
      var script = document.createElement( "script" );
      if((location.href).indexOf('www.banorte.com')>-1 || (location.href).indexOf('piloto.banorte.com')>-1 || (location.href).indexOf('incluirt.com')>-1 ){
          script.src = "https://www.banorte.com/cms/functions/functions2.js"+"?v="+randomnos;
      }else if((location.href).indexOf('acceso24.banorte.com')>-1){
          script.src = "https://www.banorte.com/cms/functions/functions_private.js"+"?v="+randomnos;
      }else{
          script.src = "http://15.128.1.157/PORTAL3/functions/functions2.js"+"?v="+randomnos;
      };
      script.type = "text/javascript";
      document.getElementsByTagName( "head" )[0].appendChild( script );*/
    ///**************************************************************************FUNCTIONS2*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

    if (window.location.href.indexOf('/wps/portal/banorte/Home/seccion-ayuda') > 0) {

    } else {
        var dominioAudiencias = window.location.toString().split('/Home')[0].split('portal/')[1];
        if (window.location.href.indexOf('/wps/portal/banorte/Home/seguros/seguro-auto/auto') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-de-nomina/nomina') > 0
            //|| window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/solicita-tu-tarjeta')>0
            ||
            window.location.href.indexOf('/wps/portal/ixe/Home/preferente.proteccion-patrimonio2/preferente-seguro-auto2') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/ixe-oro') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/ixe-united') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/pref.facilitando-dia/tarjetas-credito/united-universe') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/preferente.proteccion-patrimonio2/preferente-seguro-auto2') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/ixe-oro') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/ixe-united') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/pref.facilitando-dia/tarjetas-credito/united-universe') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-por-ti') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/clasica') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/oro') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/mujer-banorte') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-40') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/tuzos') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-basica') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/ke-buena') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cotiza-en-linea/nomina/credito-de-nomina') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-de-nomina/adelanto-nomina') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/ixe-oro') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/ixe-united') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/Home/alcanza-tus-metas/tarjetas-credito/united-universe') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-platinum') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/facilitando.tc-visa-infinite') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/ixe-oro') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-banorte') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/ixe-united') > 0 ||
            window.location.href.indexOf('/wps/portal/preferente/Home/alcanza-tus-metas/tarjetas-credito/united-universe') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/solicitar-tarjeta-de-credito/') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cotiza-en-linea/auto/auto-estrene') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/la-comer') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/w-radio') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/cuentas-y-tarjetas/tarjetas-de-credito/banorte-united') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-visa-platinum') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-visa-infinite') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-united-universe') > 0 ||
            window.location.href.indexOf('/wps/portal/ixe/?uri=nm:oid:preferente.facilitando.tc-united') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-banorte-seminuevos') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-nomina') > 0 ||
            window.location.href.indexOf('/wps/portal/banorte/Home/creditos/credito-automotriz/autoestrene-nomina-seminuevos') > 0) { //Parche chat Banorte
            document.addEventListener('DOMNodeInserted', function(e) {
                var clase = $(e.target).attr('class');
                if (clase == 'gpe-resizable-handle gpe-resizable-nw') { //Patch para cuando se muestre el cat
                    setTimeout(function() {
                        //$('.gpe-dialog-title').html('&iquest;Qu&eacute; podemos hacer por ti?');
                        //$('.message-content').html('&iquest;Necesitas ayuda?');
                        $('.gpe-dialog-titlebar-close').click(function(event) {
                            event.stopPropagation();
                            $('.gpe-dialog').attr('style', 'display:inherit!important;');
                            $('.gpe-dialog').toggleClass('show-chat');
                        });
                        $("button[type='callback'], button[type='chat']").click(function(event) {
                            $('.gpe-dialog').attr('style', 'display:none!important;');
                        });
                    }, 100);
                    setTimeout(function() { //Ocultar chat manualmente 30 segundos
                        $('.gpe-dialog').remove();
                    }, 30000);
                };

                if (clase == 'gwc-chat-registration-input') { //Patch para placeholder en chat
                    addPlaceHolder();
                };
            }, false);
        };

        function addPlaceHolder() {
            (function($) {
                $.support.placeholder = ('placeholder' in document.createElement('input'));
            })(jQuery);

            //fix for IE7 and IE8
            $(function() {
                if (!$.support.placeholder) {
                    $("[placeholder]").focus(function() {
                        if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
                    }).blur(function() {
                        if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
                    }).blur();

                    $("[placeholder]").parents("form").submit(function() {
                        $(this).find('[placeholder]').each(function() {
                            if ($(this).val() == $(this).attr("placeholder")) {
                                $(this).val("");
                            }
                        });
                    });
                }
            });
        };

        //FIX ICONO CASA DE BOLSA
        if (window.location.href.indexOf('/wps/portal/ixe-xima') > 0) {
            if (envTest(PRIVEnv)) {
                $("a.logo").css("background-image", "url(https://www.banorte.com/cms/casadebolsa/files/logos/Logo_BP_64x341.png)");
                $("a.logo").css("width", "341px");
            } else {
                $("a.logo").css("background-image", "url(https://www.banorte.com/cms/casadebolsa/files/logos/logo_casa_bolsa2.png)");
                $("a.logo").css("width", "341px");
            }
        }


        if ($('.wpthemeHeader').length == 0 && isPrevEnv()) {
            //chatbot
            //Firebase
            var script1 = document.createElement("script");
            script1.src = "https://www.gstatic.com/firebasejs/4.2.0/firebase.js";
            script1.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script1);

            $(document).ready(function() {
                // var randomnos = Math.ceil(Math.random() * 1000000000);
                // var script = document.createElement("script");
                // var link = document.createElement("link");
                // link.href = "http://15.128.1.157/PORTAL3/chatbot/styles.css" + "?v=" + randomnos;
                // link.type = "text/css";
                // link.rel = "stylesheet";
                // link.media = "screen,print";
                // document.getElementsByTagName("head")[0].appendChild(link);
                // //EMoji LIB
                // var link = document.createElement("link");
                // link.href = "https://afeld.github.io/emoji-css/emoji.css";
                // link.type = "text/css";
                // link.rel = "stylesheet";
                // link.media = "screen,print";
                // document.getElementsByTagName("head")[0].appendChild(link);
                // //APP.JS
                // script.src = "http://15.128.1.157/PORTAL3/chatbot/app.js" + "?v=" + randomnos;
                // script.type = "text/javascript";
                // document.getElementsByTagName("head")[0].appendChild(script);
                // //Finish JS Load
                // $('body').append('<button id="beginChat" class="pulse-button"><div>&iquest;Necesitas ayuda?</div></button><div id="chatBox"><a id="toggleInfo" href="javascript:toggleInfo()"></a><div class="profileBot"></div><div id="infoArea"></div><a id="minChat" href="javascript:minimize();"><img src="" /></a><div id="toolChat"></div><div id="chatForm"><div class="wrapChat"><ul id="chatArea"><li class="writing botWrite"><div class="avatar"><img src="" draggable="false" /></div><div class="msg"><p class="title-chat"></p><p class="botMsg"><!--span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span></p--></div></li></ul></div><div id="chatBottom"><textarea id="inputBox" rows="2" placeholder="">Escribe tus preguntas aqu&iacute;</textarea><a href="javascript:actionEmoji(0);"><img src="" class="emoji-icon smile" /></a><a href="javascript:actionEmoji(1);"><img src="" class="emoji-icon sad" /></a><a href="javascript:actionEmoji(2);"><img src="" class="emoji-icon doubt" /></a><button id="chatSend" class="redButton">Enviar</button></div></div></div>');

            });
        }

        /*$(document).ready(function(){
          //Chat IBM Watson Insert DOM
          //document.createComment('<!--[if lt IE 9]><script src="js/lib/html5.js"><script src="js/lib/ie8Bind.js"/><![endif]-->');
          //document.createComment('<!--[if lt IE 9]><script>$('body').addClass('ie8');<script><![endif]-->');
          $("body").append('<button id="beginChat" class="pulse-button"><div style="display: none;"><p style="text-align: center;">Su Chat ha estado inactivo por <span id="idleMinutes"></span>minutos.<br />Esta ventana se cerrara en<span id="closeMinutes"></span> minutos.</p></div><footer><form id="chatInput" action="javascript:chat.advance()"><input type="text" id="textIn" onclick="this.select()" placeholder="Escribe tu mensaje aqui"  /><input type="submit" value="Enviar" id="inputSend" /></form></footer></chat-container><div id="loaderModal"></div>');
          var css = ['reset.css','fonts.css','jquery-ui.min.css','chat.css','tags.css','login.css','styles.css','font-awesome.min.css'];
          var path = "/wps/contenthandler/dav/fs-type1/themes/BanorteResponsivoTheme/watson/";
          //Load css & js
          var randomnos = Math.ceil(Math.random() * 1000000000);
          var script = document.createElement( "script" );
          for (var i = 0; i < css.length; i++) {
            var link = document.createElement( "link" );
            link.href = path+"css/"+css[i]+"?v="+randomnos;
            link.type = "text/css";
            link.rel = "stylesheet";
            document.getElementsByTagName( "head" )[0].appendChild( link );
          };
          script.setAttribute('data-main', path+"js/src/main.js");
          script.src = path+"js/lib/require.js";
          script.type = "text/javascript";
          document.getElementsByTagName( "head" )[0].appendChild( script );
        });*/


        //AJUSTES
        if (!isPrevEnv()) {
            if (window.location.href.indexOf('/promociones/promociones-nfl') > 0) {
                window.location.href = "https://www.banorte.com/wps/portal/banorte/Home/promociones";
            }
        }


        var randomnos = Math.ceil(Math.random() * 1000000000);
        var script = document.createElement("script");
        script.src = "https://nebula-cdn.kampyle.com/wu/283131/onsite/embed.js" + "?v=" + randomnos;
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);

        //validacion para login contingente
        var contingente = false;
        script = document.createElement("script");
        if (isPrevEnv()) {
            script.src = "https://www.banorte.com/cms/functions/contingente.js" + "?v=" + randomnos;
        } else {
            contingente = false;
            script.src = "https://www.banorte.com/cms/functions/contingente.js" + "?v=" + randomnos;
        };
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);

        $(document).ready(function() {
            if ($('#widget_login').length != 0) {
                if (contingente) {
                    $('#widget_login').attr('style', 'visibility: hidden;display: none;');
                    $('#widget_login_emerg').attr('style', '');
                    $('#IVSAR_acceso24').attr('style', 'visibility: hidden;display: none;');

                    if (window.location.href.indexOf('/wps/portal/empresas') > 0) {
                        $("#standarLogin").attr("src", "https://nbem.banorte.com/NBXI/aaloginsum.aspx?BEM");
                    }
                } else {
                    $('#widget_login_emerg').attr('style', 'visibility: hidden;display: none;');
                    $('#widget_login').attr('style', '');
                };
            };
        });


        //Se esconde buscador
        /*$(document).ready(function(){
          if(window.location.href.indexOf('/wps/portal/banorte/')>0 || window.location.href.indexOf('/wps/portal/ixe/')>0){
            $(".search_trigger").hide();
          }
        });*/


        /*************INICIO DE MENU HEADER************/
        $(document).ready(function() { /***************PARCHE FOOTER***************/

            function changeFooter(c, r) {
                //c: cambiar, r: remover
                try {
                    var footerEle = $('.footer_sitemap .layout  ul  li');
                    $(footerEle[c]).html('<div class="d_st"><a href="/wps/portal/gfb">Grupo Financiero Banorte</a></div>');
                    if (r) $(footerEle[r]).remove();
                } catch (e) {
                    //console.log(e);
                }
            } /*************FIN PARCHE FOOTER*************/





            var htmlPopup = '<div class="popup" dir="ltr" id="popUpInteracciones" style="padding: 40px 10px 10px;width: 668px;margin-left: -284px;top: 20px;display: none;height: 567px !important;"><div class="closePopup" id="closePopUpInteracciones" style="position:relative;top: -69px;right: -632px;height: 45px;line-height:20px;">&nbsp;</div><a href="/wps/portal/banorte/Home/inicio"><img src="/wps/wcm/connect/banorte/6a37b35c-af04-4f21-8ad9-e7c2c9aa43e2/banner_banorte_650x550%5B6%5D.jpg?MOD=AJPERES&amp;CACHEID=6a37b35c-af04-4f21-8ad9-e7c2c9aa43e2"  style="margin-top: -75px;"/></a></div>';

            $("#popUpLoginIxeNet").after(htmlPopup);

            var amenus = [];
            amenus['banorte'] = {
                a: $('<a href="/wps/portal/banorte/" class="opt header-opt">').html('Personal')
            };
            amenus['ixe'] = {
                a: $('<a href="/wps/portal/ixe/" class="opt header-opt">').html('Preferente')
            };
            amenus['pyme'] = {
                a: $('<a href="/wps/portal/empresas/Home/circulo-pyme" class="opt header-opt">').html('PyMES')
            };
            amenus['empresa'] = {
                a: $('<a href="/wps/portal/empresas/Home/empresas-corporativos/" class="opt header-opt">').html('Empresas')
            };
            amenus['gobierno'] = {
                a: $('<a href="/wps/portal/empresas/Home/gobierno/" class="opt header-opt">').html('Gobierno')
            };
            amenus['casa'] = {
                a: $('<a href="/wps/portal/ixe-xima/" class="opt header-opt">').html('Casa de Bolsa')
            };
            // amenus['interacciones'] = {
            //   a: $('<a href="#" class="opt header-opt" onclick="popUpInteracciones();">').html('Interacciones')
            // };


            var url2 = "";
            var rSearch = -95;
            var rIcon = -5; //position icono localizador
            var r = 422; //position menu
            var footer_fix = ''; //css de footer en gfb
            if (window.location.href.indexOf('/wps/portal/gfb') > 0 || window.location.href.indexOf('/wps/myportal/gfb') > 0) {

                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(

                );
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/gfb/!ut/p/digest!P7m2uaT5VfwJjWsb_kRo2g/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/images/homepage_search.png";
                rIcon = -21;
                //Parche para footer en GFB
                footer_fix = '@media screen and (min-width:1024px){.footer_sitemap{padding:0px!important}.footer_sitemap>.layout{margin:auto!important;width:974px!important}.gbanorte .footer_sitemap .layout .footer_column{width:33%!important;margin:0px!important}}';
            }


            if (window.location.href.indexOf('/wps/portal/banorte') > 0 || window.location.href.indexOf('/wps/myportal/banorte') > 0 || dominioAudiencias == undefined || dominioAudiencias == null) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['ixe'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['gobierno'].a, amenus['casa'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/banorte/!ut/p/digest!DVkRyeWvPl9Ovd7WCqiZVA/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/homepage_search.png";
                changeFooter(3, 2);
            }

            if (window.location.href.indexOf('/wps/portal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/ixe/') > 0 || window.location.href.indexOf('/wps/myportal/preferente/') > 0 || window.location.href.indexOf('/wps/myportal/preferente/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['gobierno'].a, amenus['casa'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/ixe/!ut/p/digest!34M0MbmTmkO39PEaDU8UBQ/dav/fs-type1/themes/PreferenteResponsivoTheme/css/images/homepage_search.png";
                changeFooter(3, 2);
            }

            if (window.location.href.indexOf('/wps/portal/ixe-xima/') > 0 || window.location.href.indexOf('/wps/myportal/ixe-xima/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['gobierno'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/ixe-xima/!ut/p/digest!KhlAdr30swEzDGgKyhcYhQ/dav/fs-type1/themes/XimaResponsivoTheme/css/images/homepage_search.png";
                r = 545;
                rIcon = -3;
                rSearch = -77;
                changeFooter(2, null);
            }

            //Parche logo empresas
            if (window.location.href.indexOf('/wps/portal/empresas/') > 0 || window.location.href.indexOf('/wps/portal/empresas/') > 0) {
                $("#map_wrapper").css("height", "658px");
                $('a.logo').attr('href', '/wps/portal/empresas/Home/empresas-corporativos/');
            }

            if (window.location.href.indexOf('/Home/gobierno/') > 0 || window.location.href.indexOf('/Home/gobierno/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['empresa'].a, amenus['casa'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            }

            if (window.location.href.indexOf('/Home/empresas-corporativos/') > 0 || window.location.href.indexOf('/Home/empresas-corporativos/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['gobierno'].a, amenus['casa'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            } 

            if (window.location.href.indexOf('/wps/portal/empresas/Home/circulo-pyme') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(amenus['banorte'].a, amenus['ixe'].a, amenus['empresa'].a, amenus['gobierno'].a, amenus['casa'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/banorte/!ut/p/digest!DVkRyeWvPl9Ovd7WCqiZVA/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/homepage_search.png";
                changeFooter(3, 2);
            }

            /**PRE  BORRAR A PASAR A PRO**/
            if (window.location.href.indexOf('/Home/nueva-interfaz-empycop/') > 0 || window.location.href.indexOf('/Home/nueva-interfaz-empycop/') > 0) {
                var css = '';
                $liBnt = $('<li class="left pyme1" id="menu_pyme_opt">').append(
                    amenus['banorte'].a, amenus['ixe'].a, amenus['pyme'].a, amenus['gobierno'].a, amenus['casa'].a);
                $(".header_menu").prepend($liBnt);
                url2 = "/wps/contenthandler/empresas/!ut/p/digest!gOo4ZkB6m8ug7gy4oREAFg/dav/fs-type1/themes/EmpresasResponsivoTheme/css/images/homepage_search.png";
                r = 527;
                rIcon = -21;
                changeFooter(2, null);
            } /**PRE**/
            var mediaCss = '';
            if ($('#logoutlink').is(':visible')) { //Si esta autenticado eliminar el menu
                $('#menu_pyme_opt').remove();
                mediaCss = 'li.logout {top: -18px!important;right: 18px;margin-left: 40px!important;}li.location_trigger {top: 13px;}';
            } else {
                mediaCss = '.search_trigger{top:-28px!important}li.location_trigger {top:-25px!important;}.header_menu{height: 40px!important;}';
                mediaCss += '.pyme1{right: ' + r + 'px;top: 5px;width: 590px!important;text-align: right;}';
            }

            var url = "/wps/wcm/connect/banorte/b80dc59c-98a9-4ec0-a250-c16340ae94c6/ubic.png?MOD=AJPERES&ContentCache=NONE&CACHEID=b80dc59c-98a9-4ec0-a250-c16340ae94c6";


            //fix logo de banorte ixe-xima para moviles
            var headerLogoFix = "";
            if (window.location.href.indexOf('/ixe-xima/') > 0) {
                headerLogoFix = '@media screen and (max-width: 480px) and (min-width: 321px){ .xima > header .header_top a.logo {background-size: 74% !important;background-repeat: no-repeat !important;display: block;height: 64px;width: 341px;background-image: url(https://www.banorte.com/cms/casadebolsa/files/logos/logo_casa_bolsa2.png);width: 341px;}}';
            }

            var stylesHeaderMenu = $('<style>').append( //Agregar estilos "necesarios" para el menu -- AntiNatural stuff
                '@media(min-width: 1024px){.pyme1{position:relative;}' + mediaCss + '.mmenu_trigger{visibility: hidden;}.search_trigger {float: right!important;}li.location_trigger{display:inline!important;right: ' + rIcon + 'px!important;}li.search_trigger{right:' + rSearch + 'px!important;}}', '@media(max-width: 1023px){.pyme1{position:absolute;}.mmenu_trigger{visibility: initial;}li.location_trigger{display:none!important}.pyme1{visibility:hidden;}}', '.header-opt{padding-right:10px!important;font-size: 12px!important;margin-right: 0px !important;}', '.mmenu_trigger {width: 31px!important;}', 'li.location_trigger a {display: none;}', 'li.location_trigger.active::before {content: "";display: block;width: 38px;height: 20px;position: absolute;top: 42px;left: -4px;background-image: url(' + url2 + ');background-size: 38px 12px;background-repeat: no-repeat;background-position: 0 0;}', 'li.location_trigger.active{background-image: url(' + url + ')!important;background-size: 82%!important;background-repeat: no-repeat!important;background-position: inherit!important;}', 'li.location_trigger {float: right!important;padding-top: 11px!important;width: 32px;height: 32px!important;background-size: 82%;vertical-align: middle;background-image: url(' + url + ');background-repeat: no-repeat;cursor: pointer;position: relative;padding: 0;margin: 0;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}', '#menu_pyme_opt{top:-1px;}', footer_fix, headerLogoFix);
            document.getElementsByClassName("search_trigger")[0].style.setProperty("background-position", "-134.5px -934px", "important"); //Cambiar icono de buscador responsivo
            $(".header_menu").children("li:eq(1)").remove();
            $(".header_menu").prepend(stylesHeaderMenu);
        });



        /******************FIX IMAGEN GEO*********************/
        var css = '.banorte .mapicon { background-image: url(https://www.banorte.com/cms/images/spriteGenericButtons.png) }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style); /********************************************/

        /*************FIN DE MENU HEADER************/
        /*** SCRIPT POP UP INTERACCIONES **/

        function popUpInteracciones() {
            popupScript("#popUpInteracciones");

            $("#closePopUpInteracciones").click(function(btn, e) {
                closeanypopup("#popUpInteracciones");
            });
        } /*** FIN SCRIPT POP UP INTERACCIONES **/


        function popupScript($id) {
            var movimiento = 800;
            var widthx = $($id).width();
            var heighty = $($id).height();
            var scroll = $(window).scrollTop();
            var offset = 20;
            var remove = (scroll + heighty + offset + offset) * -1;
            lightbox('open');
            $($id).show().animate({
                top: (scroll + offset)
            }, movimiento, 'swing');
            $($id + ' button').click(function() {
                if ($(this).hasClass('cancelar')) {
                    if ($('.lightbox').hasClass('open')) {
                        closeanypopupScript(remove);
                        lightbox('close');
                    }
                } else {
                    $($id + ' .error').slideDown();
                }
            });
            // CLOSE WITH ESCAPE
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    if ($('.lightbox').hasClass('open')) {
                        closeanypopupScript(remove);
                        lightbox('close');
                        $('.lightbox').removeClass('open');
                    }
                }
            });
            $(".closePopup").on('click', function() {
                closeanypopupScript(remove);
                lightbox('close');
                $('.lightbox').removeClass('open');
            });

            $(".lightbox").click(function(event) {
                closeanypopupScript(remove);
                lightbox('close');
                $('.lightbox').removeClass('open');
            });

            $('input[name="image"]').click(function() {
                closeanypopupScript(remove);
                lightbox('close');
                $('.lightbox').removeClass('open');
            });
        }

        function closeanypopupScript($remove) {
            var e = 800;
            var t = $(window).scrollTop();
            var n = 50;
            var r = 0;
            if ($remove < 0 || $remove > 0) {
                r = $remove;
            } else {
                var target = $remove.replace('#', '');
                r = document.getElementById(target).style.height;
            }
            var i = (t + (r == '' ? 0 : parseInt(r)) + n + n) * -1;
            //console.log(i);
            $(".popup").animate({
                top: i
            }, e / 2, "swing", function() {
                $(this).hide()
            });
            lightbox("close")
            $('.lightbox').removeClass('open');
            /*var movimiento = 800;
             if($remove) var remove = $remove;
             else var remove = "-1100px";
             $('.popup').animate({ top: remove }, (movimiento/2), 'swing', function(){
               $(this).hide();
             });
             lightbox("close");
             */
        }

        // Remove ", popup" and ",popup" from links and add attribute openInTab for popupwarning validation start
        $(document).ready(function() {
            //console.log("validate that widget tabs exist")
            //console.log($(".widget_tabs_content > .layout .columns2B ul.menu li a"));
            if ($(".widget_tabs_content > .layout .columns2B ul.menu li a") != undefined || $(".widget_tabs_content > .layout .columns2B ul.menu li a") != null) {
                for (var i = 0; i < $(".widget_tabs_content > .layout .columns2B ul.menu li a").length; i++) {
                    var oldPopUpURL = $($(".widget_tabs_content > .layout .columns2B ul.menu li a")[i]).attr('href')
                    var index = oldPopUpURL.indexOf(", popup");
                    var index2 = oldPopUpURL.indexOf(",popup");
                    //console.log($(".widget_tabs_content > .layout .columns2B ul.menu li a")[i]);
                    if (index != -1) {
                        var txt = oldPopUpURL.substr(index);
                        var newURL = oldPopUpURL.replace(txt, " ");
                        //console.log(newURL);
                        $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("href", newURL);
                        $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("openInTab", "True");
                    }

                    if (index2 != -1) {
                        var txt = oldPopUpURL.substr(index2);
                        var newURL = oldPopUpURL.replace(txt, " ");
                        //console.log(newURL);
                        $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("href", newURL);
                        $(".widget_tabs_content > .layout .columns2B ul.menu li a")[i].setAttribute("openInTab", "True");

                    }
                }
            }
        })

        $(document).ready(function() {
            // produccion
            // cambio de text en login 
            if (dominioAudiencias == undefined || dominioAudiencias == null && !isPrevEnv() && window.location.href.indexOf('portal/banorte') > 0) {
                var login_buttons = document.getElementsByClassName("menu_gray")
                var login_Li = login_buttons[0].children[0].innerHTML = '<a target="_new" href="http://189.254.22.28/ContratantePIB/logincontratantePIB.aspx">Patrimonio Vida Banorte / Patrimonio Integral Banorte</a>'
                var login_Li = login_buttons[0].children[0].setAttribute("style", "line-height: 19px;margin-top: 10px;");
            }

            // warningmessage
            if (dominioAudiencias == undefined || dominioAudiencias == null || !isPrevEnv()) {

                if ((location.href).indexOf('incluirt.com') > -1 != true) {
                    var warningTemplate = '<div class="popup-warning" dir="ltr" id="popupejemplo">' + '<div class="closePopup" id="closeButtonWarning" style="position:relative;top: -69px;right: -501px;height: 45px;line-height:20px;">&nbsp;</div>' + '<div class="popupcenter">' + '<div class="popupWarning">' + '<h2 style="font-size: 16px;color:#5A4F51;margin: 0;margin-top: -55px;text-align:center;">Navegar&aacute;s en un sitio ajeno a Banorte, el cual administra su propia informaci&oacute;n y pol&iacute;tica de privacidad y seguridad.</h2>' + '<button class="btnPopup bntPopupContinue" style="margin-left: 178px;background-color: #ef0029;">Continuar</button>' + '</div>' + '</div>' + '</div>';
                    $(".wpthemeInner").append(warningTemplate);

                    var randomnos = Math.ceil(Math.random() * 1000000000);
                    var script = document.createElement("script");
                    var styles = document.createElement("link");
                    styles.rel = "stylesheet"
                    styles.type = "text/css"
                    styles.href = "https://www.banorte.com/cms/functions/popup-warning.css" + "?v=" + randomnos;
                    script.src = "https://www.banorte.com/cms/functions/popup-warning.js" + "?v=" + randomnos;
                    // $(".wpthemeInner").append(styles);
                    // $(".wpthemeInner").append(script);
                    document.getElementsByTagName("head")[0].appendChild(script);
                    document.getElementsByTagName("head")[0].appendChild(styles);
                }
            }

            /* if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/banorte') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/ixe') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/empresas') > 0 || window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/gfb') > 0){
                 var warningTemplate = '<div class="popup-warning" dir="ltr" id="popupejemplo">' + '<div class="closePopup" id="closeButtonWarning" style="position:relative;top: -69px;right: -501px;height: 45px;line-height:20px;">&nbsp;</div>' + '<div class="popupcenter">' + '<div class="popupWarning">' + '<h2 style="font-size: 16px;color:#5A4F51;margin: 0;margin-top: -55px;text-align:center;">Navegar&aacute;s en un sitio ajeno a Banorte, el cual administra su propia informaci&oacute;n y pol&iacute;tica de privacidad y seguridad.</h2>' + '<button class="btnPopup bntPopupContinue" style="margin-left: 178px;background-color: #ef0029;">Continuar</button>' + '</div>' + '</div>' + '</div>';
                 $(".wpthemeInner").append(warningTemplate);
                 var randomnos = Math.ceil(Math.random() * 1000000000);
                 var script = document.createElement("script");
                 var styles = document.createElement("link");
                 styles.rel = "stylesheet"
                 styles.type = "text/css"
                 styles.href = "http://15.128.1.157/PORTAL3/functions/popup-warning.css" + "?v=" + randomnos;
                 script.src = "http://15.128.1.157/PORTAL3/functions/popup-warning.js" + "?v=" + randomnos;
                 // $(".wpthemeInner").append(styles);
                 // $(".wpthemeInner").append(script);
                 document.getElementsByTagName("head")[0].appendChild(script);
                 document.getElementsByTagName("head")[0].appendChild(styles);
             }*/
            // se usa para pruebas en nueva interfaz 2
            // if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0)
            // {
            //   // warningmessage
            //   var warningTemplate = '<div class="popup-warning" dir="ltr" id="popupejemplo">'+
            //   '<div class="closePopup" id="closeButtonWarning" style="position:relative;top: -69px;right: -501px;height: 45px;line-height:20px;">&nbsp;</div>'+
            //   '<div class="popupcenter">'+
            //   '<div class="popupWarning">'+
            //   '<h2 style="font-size: 16px;color:#5A4F51;margin: 0;margin-top: -55px;text-align:center;">NavegarÂ­tica de privacidad y seguridad.</h2>'+
            //   '<button class="btnPopup bntPopupContinue" style="margin-left: 178px;background-color: #ef0029;">Continuar</button>'+
            //   '</div>'+
            //   '</div>'+
            //   '</div>';
            //   $(".wpthemeInner").append(warningTemplate);
            //   var randomnos = Math.ceil(Math.random() * 1000000000);
            //   var script = document.createElement("script");
            //   var styles = document.createElement("link");
            //   styles.rel = "stylesheet"
            //   styles.type = "text/css"
            //   styles.href = "https://www.banorte.com/cms/functions/popup-warning.css" + "?v=" + randomnos;
            //   script.src = "https://www.banorte.com/cms/functions/popup-warning.js" + "?v=" + randomnos;
            //   // $(".wpthemeInner").append(styles);
            //   // $(".wpthemeInner").append(script);
            //   document.getElementsByTagName("head")[0].appendChild(script);
            //   document.getElementsByTagName("head")[0].appendChild(styles);
            // }
            /*Parche home banner banorte*/
            $('.banorte.homepage').css("margin-top", "54px"); /****************************/
            /************AJUSTE FOOTER*****************/
            if (window.location.href.indexOf('/wps/portal/gfb') == -1 && window.location.href.indexOf('/wps/myportal/gfb') == -1) {
                var url_promo = '/wps/portal/banorte/Home/promociones';
                if (window.location.href.indexOf('/wps/portal/ixe') > 0 || window.location.href.indexOf('/wps/myportal/ixe') > 0) {
                    url_promo = '/wps/portal/ixe/Home/promociones-preferente';
                };
                if (window.location.href.indexOf('/wps/portal/ixe-xima') > 0 || window.location.href.indexOf('/wps/myportal/ixe-xima') > 0) {
                    url_promo = '/wps/portal/banorte/Home/promociones';
                };

                var footerHTML = "<div class='layout'>" + "<ul>" + "  <li><div class='d_st'><a href='" + url_promo + "'>Promociones</a></div></li>" + "  <li><div class='d_st'><a href='/wps/portal/gfb/Home/relacion_con_inversionistas'>Relaci&oacute;n con Inversionistas</a></div></li>" + "  <li><div class='d_st'><a href='/wps/portal/gfb'>Grupo Financiero Banorte</a></div></li>" + "  <li><div class='d_st'><a href='https://empleos.banorte.com/'>Empleos Banorte</a></div></li>" +
                    //"  <li><div class='d_st'><a href='https://www.banorte.com/cms/talento-banorte/'>Empleo Banorte</a></div></li>"+
                    "  <li><div class='d_st'><a href='/wps/portal/gfb?uri=nm:oid:responsabilidad-social-sustentabilidad'>Responsabilidad Social</a></div></li>" + "</ul>" + "</div>";
                $(".footer_sitemap").html(footerHTML);

                // Start Ajustes para cpyme

                // paginas internas
                try {
                    var breadCrumb = document.getElementsByClassName("header_breadcrumbs")[0].children[0].children[0].children[1].children[0].innerText;
                    var breadCrumbName = "CÃRCULO PYME | BANORTE"
                    if (breadCrumb.localeCompare(breadCrumbName) == 0) {
                        var footerHTML = "<div class='layout'>" +
                            "<ul>" +
                            "<li><div class='d_st'><a href='https://www.banorte.com/wps/portal/gfb/Home/inicio?uri=nm:oid:banorte-te-informa.une'>ACLARACIONES Y RECLAMACIONES</a></div></li>" +
                            "<li><div class='d_st'><a href='https://www.banorte.com/wps/portal/gfb'>GRUPO FINANCIERO BANORTE</a></div></li>" +
                            "</ul>" +
                            "</div>";
                        //$(".footer_sitemap").html(footerHTML);

                        try {

                            document.getElementsByClassName("login_trigger")[0].children[0].innerHTML = "BEM/BEP"
                            var DomParserLet = new DOMParser();
                            var newItem = '<li class="" style="cursor:pointer;margin-right: 20px;"><span style="font-weight:normal;color: #eb0029;"><a href="/wps/portal/empresas/Home/circulo-pyme/">CÃRCULO PYME </a></span></li>';
                            var mainBMenu = document.getElementsByClassName("header_notificationbar_menu")[0]
                            var doc = DomParserLet.parseFromString(newItem, 'text/html');
                            var firstDiv = doc.body.firstChild;
                            mainBMenu.insertBefore(firstDiv, mainBMenu.childNodes[0]);
                        } catch (error) {
                            // console.log("error cpyme" + error);
                        }
                    }

                } catch (error) {
                    // console.log("error2 cpyme" + error);
                }

                // Home
                try {

                    if (window.location.href.indexOf('/wps/portal/empresas/Home/circulo-pyme/') > 0) {
                        var footerHTML = "<div class='layout'>" +
                            "<ul>" +
                            "<li><div class='d_st'><a href='https://www.banorte.com/wps/portal/gfb/Home/inicio?uri=nm:oid:banorte-te-informa.une'>ACLARACIONES Y RECLAMACIONES</a></div></li>" +
                            "<li><div class='d_st'><a href='https://www.banorte.com/wps/portal/gfb'>GRUPO FINANCIERO BANORTE</a></div></li>" +
                            "</ul>" +
                            "</div>";
                        //$(".footer_sitemap").html(footerHTML);
                    }

                } catch (error) {
                    // console.log("error3 cpyme" + error);
                }

                // End Ajustes para cpyme

                $('.footer_sitemap > .layout > ul > li').on("click", function() {
                    var url = $(this).find('a').attr('href');
                    if (!(isEmpty(url))) {
                        window.location.href = url;
                    }
                    return false;
                });
            }
            $(".footer_sitemap .layout").css("width", "1182px");
            $(".footer_sitemap .layout").css("font-size", "14px");
            $(".footer_sitemap .layout").css("letter-spacing", "-0.03em");
            $(".footer_sitemap .layout ul li").css("margin", "0 17px 0 0");
            $(".redes-sociales").css("width", "220px"); /************FIN AJUSTE FOOTER*****************/

        });

        //debugger;

        $(document).ready(function() {
            /*FIX HIDE BUTTONS CARROUSEL BANNERS*/
            $("head").append('<style>.bx-prev{display:none; }</style>'); 
            $("head").append('<style>.bx-next{display:none; }</style>'); 

            // Ajuste en botones de redes sociales footer 
            // produccion
            //debugger;
            if (document.getElementsByClassName("redes-sociales") != undefined) {
                var mylist = document.getElementsByClassName("redes-sociales");
                var listitems = mylist[0].getElementsByTagName("a");
                for (let i = 0; i < listitems.length; i++) {
                    if (listitems[i].getAttribute("data-url") != null || listitems[i].getAttribute("data-url") != undefined) {
                        listitems[i].setAttribute("href", listitems[i].getAttribute("data-url"));
                        listitems[i].removeAttribute("data-url")
                        if (listitems[i].getAttribute("href").indexOf("facebook") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;">' + '</div>'
                        }
                        if (listitems[i].getAttribute("href").indexOf("twitter") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
                        }
                        if (listitems[i].getAttribute("href").indexOf("youtube") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/2.png" alt="" style="height: 50px;width: 50px; margin-left: 7px;">' + '</div>'
                        }
                        if (listitems[i].getAttribute("href").indexOf("instagram") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/3.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
                        }
                    }

                    // Ajuste de iconos para el portal ixe 
                    if ((!envTest(PROEnv) && !envTest(AUTEnv)) && (window.location.href.indexOf('portal/ixe') > 0 || window.location.href.indexOf('portal/preferente') > 0)) {
                        if (listitems[i].getAttribute("href").indexOf("facebook") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;">' + '</div>'
                            listitems[i].setAttribute("href", "https://www.facebook.com/banorte");
                        }
                        if (listitems[i].getAttribute("href").indexOf("twitter") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
                            listitems[i].setAttribute("href", "https://twitter.com/Banorte_mx");
                        }
                        if (listitems[i].getAttribute("href").indexOf("instagram") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/3.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
                            listitems[i].setAttribute("href", "https://www.instagram.com/banorte_mx/");
                        }
                    }
                    // Ajuste de iconos para el portal GFB 
                    if ((envTest(PROEnv) || envTest(AUTEnv)) && (window.location.href.indexOf('portal/gfb') > 0)) {
                        if (listitems[i].getAttribute("href").indexOf("facebook") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;">' + '</div>'
                            listitems[i].setAttribute("href", "https://www.facebook.com/GFBanorte");
                        }
                        if (listitems[i].getAttribute("href").indexOf("twitter") != -1) {
                            listitems[i].innerHTML = '<div class="" style="">' + '<img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;">' + '</div>'
                            listitems[i].setAttribute("href", "https://twitter.com/GFBanorte_mx");
                        }
                    }


                }

                // Ajuste de iconos para el portal cpyme 
                // debugger;
                if ((envTest(PROEnv) || envTest(AUTEnv)) && (window.location.href.indexOf('/Home/circulo-pyme/') > 0)) {
                    try {
                        var mylist = document.getElementsByClassName("redes-sociales")
                        mylist[0].style.display = "block"
                        var DomParserLet = new DOMParser();
                        var footerIcons = '<div class="redes-sociales" style="width: 220px;"> <a href="https://www.facebook.com/banorte" class="rs-links" style="width: 40px;"><div class="" style=""><img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/0.png" alt="" style="height: 50px;width: 50px; margin-left: -2px;"></div></a> <a href="https://www.twitter.com/Banorte_mx" class="rs-links" style="width: 40px;"><div class="" style=""><img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/1.png" alt="" style="height: 50px;width: 50px;"></div></a> <a href="#" class="rs-links" style="width: 40px; display: none;"><div class="ico icon-gplus"></div></a> <a href="https://www.youtube.com/user/banortemovil/" class="rs-links" style="width: 60px; margin-right:-6px !important; margin-left:-5px;"><div class="" style=""><img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/2.png" alt="" style="height: 50px;width: 50px; margin-left: 7px;"></div></a><a href="https://www.instagram.com/banorte_mx/" class="rs-links" style="width: 60px;"><div class="" style=""><img src="https://www.banorte.com/cms/banorte/imagenes/iconos_redes_sociales/Botones-RedesSociales-Banorte-2018/footer/3.png" alt="" style="height: 50px;width: 50px;"></div></a></div>';
                        var doc = DomParserLet.parseFromString(footerIcons, 'text/html');
                        var firstDiv = doc.body.firstChild;
                        mylist[0].appendChild(firstDiv);
                    } catch (e) {
                        console.log(e);
                    }


                }
            }

            // se usa para pruebas con nuevainterfaz 2
            // if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0)
            //   {
            //     if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0 && document.getElementsByClassName("redes-sociales") != undefined)
            //     {
            //       var mylist=document.getElementsByClassName("redes-sociales")
            //       var listitems= mylist[0].getElementsByTagName("a")
            //         for (i=0; i<listitems.length; i++) {
            //           console.log("Frome here")
            //           console.log(listitems)
            //           console.log(listitems[i])
            //           if(listitems[i].getAttribute("data-url") != null || listitems[i].getAttribute("data-url") != undefined){
            //             listitems[i].setAttribute("href", listitems[i].getAttribute("data-url"));
            //             listitems[i].removeAttribute("data-url")
            //           }
            //       }
            //     }  
            //     if(window.location.href.indexOf('/wps/portal/empresas/Home/nueva-interfaz-empycop')>0 || window.location.href.indexOf('/wps/portal/banorte/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe/Home/nueva-interfaz2')>0 || window.location.href.indexOf('/wps/portal/ixe-xima/Home/nueva-interfaz')>0 || window.location.href.indexOf('/wps/portal/gfb/Home/nueva-interfaz2')>0 && document.getElementsByClassName("redes-sociales") != undefined){
            //       var mylist=document.getElementsByClassName("redes-sociales")
            //       var listitems= mylist[0].getElementsByTagName("a")
            //       for (i=0; i<listitems.length; i++) 
            //       {
            //         console.log("Frome here")
            //         console.log(listitems)
            //         console.log(listitems[i])
            //         if(listitems[i].getAttribute("data-url") != null || listitems[i].getAttribute("data-url") != undefined){
            //           listitems[i].setAttribute("href", listitems[i].getAttribute("data-url"));
            //           listitems[i].removeAttribute("data-url")
            //         }
            //       }
            //     }
            //   }
        });

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        $(document).ready(function() {
            //START AJUSTE PARA ENLACES INVESTORS GFB RI 
            let dominioAudienciasFooter = window.location.toString().split('/Home')[0].split('portal/')[1];
            if ((envTest(PROEnv) || envTest(AUTEnv)) && (window.location.href.indexOf('portal/banorte') > 0 || dominioAudienciasFooter == null || dominioAudienciasFooter == undefined)) {


                var oid = getParameterByName('uri');

                if (window.location.href.indexOf('relacion_con_inversionistas') > 0 || window.location.href.indexOf('relacion-con-inversionistas.informacion-financiera.datos-historicos') > 0 || window.location.href.indexOf('/investor-relations') > 0) {
                    window.location.href = "https://investors.banorte.com"
                }

                if (window.location.href.indexOf('banorte-te-informa/gobierno-corporativo') > 0) {
                    window.location.href = "https://investors.banorte.com/governance/shareholders-meetings?sc_lang=esÃâ "
                }

                if (oid != undefined && oid != null && oid != "") {
                    if (oid.indexOf('relacion-con-inversionistas.informacion-financiera.datos-historicos') > 0 || oid.indexOf('investor-relations') > 0) {
                        window.location.href = "https://investors.banorte.com"
                    }

                    if (oid.indexOf('banorte-te-informa.gobierno-corporativo') > 0) {
                        window.location.href = "https://investors.banorte.com/governance/shareholders-meetings?sc_lang=esÃâ "
                    }
                }

                try {
                    var footerEle = $('.footer_sitemap .layout  ul  li');
                    footerEle[1].children[0].children[0].setAttribute("href", "https://investors.banorte.com/")
                    footerEle[4].children[0].children[0].setAttribute("href", "https://investors.banorte.com/sustainability?sc_lang=es")

                    // Ajuste de texto en footer a sustentabilidad
                    footerEle[4].children[0].children[0].innerText = "Sustentabilidad"
                } catch (e) {
                    // console.log(e);
                }
            }

            if (window.location.href.indexOf('responsabilidad-social-sustentabilidad') > 0) {
                window.location.href = "https://investors.banorte.com/sustainability?sc_lang=es"
            }
            //END AJUSTE PARA ENLACES INVESTORS


            //START Ajuste para agregar span en logo de portales y agregar tag de img adentro

            var logoBanorte = document.getElementsByClassName("logo")[0];

            var logoSpan = document.createElement('span');
            logoSpan.innerText = "Pagina inicio";
            logoSpan.setAttribute("style", "opacity:0!important;");

            //logoBanorte.setAttribute("style", "background-image:none!important;");
            logoBanorte.appendChild(logoSpan);

            // $('body').append('<style>'+ ''+ ''+ '@media screen and (max-width: 480px) and (min-width: 321px){'+ '.banorte-mobile-logo{'+ 'height: 52px !important;'+ 'width: 385px !important;'+ 'object-fit: none !important;'+ 'object-position: -819px -1350px !important;'+ '-ms-transform: scale(0.7, 0.7) !important;'+ '-webkit-transform: scale(0.7, 0.7) !important;'+ 'transform: scale(0.55) !important;'+ 'margin-left: -91px !important;'+ 'margin-top: -23px !important;'+ '}'+ ''+ '.ixe-mobile-logo{'+ 'height: 100% !important;'+ 'width: 152px !important;'+ '-ms-transform: scale(0.7, 0.7) !important;'+ 'transform: scale(1.9) !important;'+ 'margin-top: -24px !important;'+ 'margin-left: 33px !important;'+ '}'+ ''+ '.cdb-mobile-logo{'+ 'height: 96% !important;'+ 'width: 252px !important;'+ '-ms-transform: scale(0.7, 0.7) !important;'+ 'transform: scale(1) !important;'+ 'margin-top: -25px !important;'+ 'margin-left: -12px !important;'+ '}'+ ''+ '.gfb-mobile-logo{'+ 'height: 100%;'+ 'width: 373px;'+ 'object-fit: none;'+ 'object-position: -820px -1343px;'+ '-ms-transform: scale(0.7, 0.7);'+ '-webkit-transform: scale(0.7, 0.7);'+ 'transform: scale(0.6);'+ 'margin-left: -80px;'+ 'margin-top: -23px;'+ '}'+ '}'+ ''+ '</style>');

            if (envTest(AUTEnv) && (window.location.href.indexOf('portal/banorte') > 0 || window.location.href.indexOf('portal/empresas') > 0)) {
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<img class="banorte-mobile-logo" src="https://www.banorte.com/wps/contenthandler/banorte/!ut/p/digest!C3O49CLoCp1sqZdfgs91qQ/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/spriteBanorteButtons.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 52px;width: 378px;object-fit: none;object-position: -819px -1350px;-ms-transform: scale(0.7, 0.7);-webkit-transform: scale(0.7, 0.7);transform: scale(0.75);margin-left: -49px;margin-top: -23px;">';
                //logoBanorte.appendChild(wrapper.firstChild);
            }

            if (envTest(AUTEnv) && (window.location.href.indexOf('portal/ixe') > 0) || window.location.href.indexOf('portal/preferente') > 0) {
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<img class="ixe-mobile-logo" src="https://www.banorte.com/wps/contenthandler/ixe/!ut/p/digest!nPRKrXU48ENRC6EpgrEokw/dav/fs-type1/themes/PreferenteResponsivoTheme/css/images/Banorte-Banca-Preferente_1.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 100%;width: 253px;-ms-transform: scale(0.7, 0.7);transform: scale(1.5);margin-top: 15px;margin-left: -47px;">';
                //logoBanorte.appendChild(wrapper.firstChild);
            }

            if (envTest(AUTEnv) && window.location.href.indexOf('portal/ixe-xima') > 0) {
                try {
                    logoBanorte.removeChild(logoBanorte.childNodes[1]);
                } catch (e) {
                    console.log(e);
                }
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<img class="cdb-mobile-logo" src="https://www.banorte.com/cms/casadebolsa/files/logos/logo_casa_bolsa2.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 96%;width: 290px;-ms-transform: scale(0.7, 0.7);transform: scale(1);margin-top: 0px;margin-left: -93px;">';
                //logoBanorte.appendChild(wrapper.firstChild);
            }

            if (envTest(AUTEnv) && window.location.href.indexOf('portal/gfb') > 0) {
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<img class="gfb-mobile-logo" src="https://www.banorte.com/wps/contenthandler/gfb/!ut/p/digest!o56m9atE6KHWP7NwW7UUCA/dav/fs-type1/themes/GFBanorteResponsivoTheme/css/images/spriteGbanorteButtons.png" href="/wps/portal/banorte/Home/inicio" class="logo" style="height: 100%;width: 376px;object-fit: none;object-position: -820px -1343px;-ms-transform: scale(0.7, 0.7);-webkit-transform: scale(0.7, 0.7);transform: scale(0.7);margin-left: -60px;margin-top: -23px;">';
                // logoBanorte.appendChild(wrapper.firstChild);
            }

            //END Ajuste para agregar span en logo de portales y agregar tag de img adentro

            // START Ajuste para remover contacto por email de necesictas ayuda en detalle de producto 
            var cssNecesitasAyuda = '.widget_help .content > div:nth-child(3n){display:none;}',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
            style.type = 'text/css';

            if (style.styleSheet) {
                style.styleSheet.cssText = cssNecesitasAyuda;
            } else {
                style.appendChild(document.createTextNode(cssNecesitasAyuda));
            }
            head.appendChild(style);


            setTimeout(function() {
                try {
                    var widgetHelp = document.getElementsByClassName('widget_help')
                    if (widgetHelp != undefined && widgetHelp[0].firstElementChild.children[3] != undefined) {
                        widgetHelp[0].firstElementChild.children[3].setAttribute("onclick", "")
                    }
                } catch (e) {
                    //console.log(e);
                }
            }, 1000);

            // END Ajuste para remover contacto por email de necesictas ayuda en detalle de producto 


            //START Ajuste de banner para cookies// 
            //  if(window.location.href.indexOf('lnxsaut1p.unix.banorte.com:10039/wps/portal/') > 0) {
            $('body').append('<style>' + '.cookiesBanner {' + 'position: fixed;' + 'z-index: 9999999999999;' + 'background-color: #f8d44c;' + 'width: 100%;' + 'min-height: 22px;' + 'height: 45px;' + 'bottom: 0%;' + 'padding: 16px;' + 'padding-top: 9px;' + 'padding-left: 2%;' + 'border-style: solid;' + 'border-width: 2px;' + 'border-color: #f8d44c;' + '}' + '' + '.cookiesText {' + 'text-align: left;' + 'width: 79%;' + '}' + '' + '.acceptCookies {' + 'width: 8%;' + 'height: 33px;' + 'position: absolute;' + 'top: 24%;' + 'left: 84%;' + 'background-color: #614f4d;' + 'color: white;' + '-webkit-box-sizing: border-box;' + 'border-radius: 0px;' + 'border: none;' + 'box-sizing: border-box;' + '-moz-box-sizing: border-box;' + 'transition: all 0.5s;' + 'cursor: pointer;' + 'font-size: 16px;' + '}' + '' + '@media (max-width: 480px) {' + '.cookiesBanner {' + 'position: fixed !important;' + 'z-index: 9999999999999 !important;' + 'background-color: #f8d44c !important;' + 'width: 100% !important;' + 'min-height: 57px !important;' + 'height: auto !important;' + 'bottom: 0% !important;' + 'padding: 28px !important;' + 'padding-top: 9px !important;' + 'padding-left: 2% !important;' + 'border-style: solid !important;' + 'border-width: 2px !important;' + 'border-color: #f8d44c !important;' + '}' + '' + '.cookiesText {' + 'text-align: justify !important;' + 'width: 96% !important;' + 'font-size: 12px !important;' + '}' + '' + '.acceptCookies {' + 'width: 19% !important;' + 'height: 33px !important;' + 'position: absolute !important;' + 'top: 68% !important;' + 'left: 65% !important;' + 'background-color: #614f4d !important;' + 'color: white !important;' + '-webkit-box-sizing: border-box !important;' + 'border-radius: 0px !important;' + 'border: none !important;' + 'box-sizing: border-box !important;' + '-moz-box-sizing: border-box !important;' + 'transition: all 0.5s !important;' + 'cursor: pointer !important;' + 'font-size: 16px !important;' + '}' + '}' + '' + '@media (max-width: 1022px) {' + '.cookiesBanner {' + 'position: fixed;' + 'z-index: 9999999999999;' + 'background-color: #f8d44c;' + 'width: 100%;' + 'min-height: 57px;' + 'height: auto;' + 'bottom: 0%;' + 'padding: 28px;' + 'padding-top: 9px;' + 'padding-left: 2%;' + 'border-style: solid;' + 'border-width: 2px;' + 'border-color: #f8d44c;' + '}' + '' + '.cookiesText {' + 'text-align: justify;' + 'width: 96%;' + 'font-size: 12px;' + '}' + '' + '.acceptCookies {' + 'width: 16%;' + 'height: 33px;' + 'position: absolute;' + 'top: 55%;' + 'left: 40%;' + 'background-color: #614f4d;' + 'color: white;' + '-webkit-box-sizing: border-box;' + 'border-radius: 0px;' + 'border: none;' + 'box-sizing: border-box;' + '-moz-box-sizing: border-box;' + 'transition: all 0.5s;' + 'cursor: pointer;' + 'font-size: 16px;' + '}' + '}' + '</style>' + '<div id="cookiesBanner" class="cookiesBanner">' + '<p class="cookiesText">Esta pÃ¡gina puede utilizar cookies, web beacons, y/u otras tecnologÃ­as para mejorar nuestros' + ' servicios y analizar los hÃ¡bitos de navegaciÃ³n del usuario. Si continua navegando, consideramos que acepta su' + ' uso. Para obtener mÃ¡s informaciÃ³n consulte nuestro aviso de privacidad publicado <a' + 'href="https://www.banorte.com/wps/portal/gfb?uri=nm:oid:banorte-te-informa.aviso-de-privacidad">aquÃ­</a></p>' + '<button id="acceptCookies" class="acceptCookies">Aceptar</button>' + '</div>');
            var aceptoCookies = localStorage.getItem("didAcceptCookies");

            if (aceptoCookies != undefined || aceptoCookies != null) {
                $("#cookiesBanner").hide();
                $("#beginChat").css("bottom", "45px");
            } else {
                $("#beginChat").css("bottom", "93px");
            };

            $("#acceptCookies").click(function() {
                localStorage.setItem("didAcceptCookies", "true");
                $("#beginChat").css("bottom", "45px");
                $("#cookiesBanner").hide();
            });
            // }
            //END Ajuste de panner para cookies//

            // Start de icono de inklusion 

            // Opcion de icono para pagina incluyente

            var DomParserLet = new DOMParser();


            if (window.location.href.indexOf('/Home/gobierno/') > 0 == false && window.location.href.indexOf('portal/gfb') > 0 == false && window.location.href.indexOf('Home/empresas-corporativos/') > 0 == false && window.location.href.indexOf('portal/ixe-xima') > 0 == false && window.location.href.indexOf('portal/ixe') > 0 == false && window.location.href.indexOf('portal/preferente') > 0 == false && window.location.href.indexOf('/portal/empresas/Home/circulo-pyme') > 0 == false) {

                try {
                    var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/banorte" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/banorte\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
                    var mainMenu = document.getElementById('menu_pyme_opt');
                    var doc = DomParserLet.parseFromString(iconImage, 'text/html');
                    var firstDiv = doc.body.firstChild;
                    mainMenu.appendChild(firstDiv);
                } catch (e) {
                    // console.log(e);
                }

            }

            if ((window.location.href.indexOf('portal/ixe') || window.location.href.indexOf('portal/preferente')) > 0 && window.location.href.indexOf('portal/ixe-xima') > 0 == false) {
                try {
                    var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/ixe" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/ixe\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
                    var mainMenu = document.getElementById('menu_pyme_opt');
                    var doc = DomParserLet.parseFromString(iconImage, 'text/html');
                    var firstDiv = doc.body.firstChild;
                    mainMenu.appendChild(firstDiv);
                } catch (e) {
                    // console.log(e);
                }

            }

            if (window.location.href.indexOf('portal/ixe-xima') > 0) {

                try {
                    var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/ixe-xima" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/ixe-xima\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
                    var mainMenu = document.getElementById('menu_pyme_opt');
                    var doc = DomParserLet.parseFromString(iconImage, 'text/html');
                    var firstDiv = doc.body.firstChild;
                    mainMenu.appendChild(firstDiv);

                } catch (e) {
                    // console.log(e);
                }

            }

            if (window.location.href.indexOf('Home/empresas-corporativos/') > 0) {

                try {
                    var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/empresas"  onclick="window.location=\'https://banorte.inklusion.incluirt.com/wps/portal/empresas\'"  class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
                    var mainMenu = document.getElementById('menu_pyme_opt');

                    var doc = DomParserLet.parseFromString(iconImage, 'text/html');
                    var firstDiv = doc.body.firstChild;
                    mainMenu.appendChild(firstDiv);
                } catch (e) {
                    // console.log(e);
                }
            }

            /*FIX HEADER ICONS FOR PYME*/
            if (window.location.href.indexOf('empresas/Home/circulo-pyme') > 0) {
                try {
                    $(".search_trigger").attr("style","margin-top: 0px !important");
                    $(".location_trigger").attr("style","margin-top: 0px !important");
                } catch (e) {
                    // console.log(e);
                }
            }


            /*
if(window.location.href.indexOf('portal/gfb') > 0){
 
  try {
    var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/gfb" onclick="window.location=\'https://banorte.inklusion.incluirt.com/wps/portal/gfb\'"  class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 9%; left: 30px;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
    var mainMenu = document.getElementById('menu_pyme_opt');
    var doc = DomParserLet.parseFromString(iconImage, 'text/html');
    var firstDiv = doc.body.firstChild;
    mainMenu.appendChild(firstDiv);  
  } catch (e) {
    // console.log(e);
  }
}*/

            if (window.location.href.indexOf('portal/empresas/Home/gobierno/') > 0) {

                try {
                    var iconImage = '<a href="https://banorte.inklusion.incluirt.com/wps/portal/gobierno" onclick="window.location.href=\'https://banorte.inklusion.incluirt.com/wps/portal/gobierno\'" class="opt header-opt gfbRS" style="transition: all 0.5s ease 0s; padding: 5px; border-radius: 4px; margin-right: -2px !important; margin-left: 31px; position: relative; top: 24%;">' + '<img src="https://www.banorte.com/cms/Inklusion/Banorte-Icono-Navegacion-incluyente.png" style="position: inherit;height: 26px;">' + '</a>';
                    var mainMenu = document.getElementById('menu_pyme_opt');
                    var doc = DomParserLet.parseFromString(iconImage, 'text/html');
                    var firstDiv = doc.body.firstChild;
                    mainMenu.appendChild(firstDiv);

                } catch (e) {
                    // console.log(e);
                }

            }


            // End de icono Inklusion


        });

        //


        /**AJUSTES VISUALES A LA CAJA DE LOGIN**/
        var cssLoginBox = '.widget_login .layout .login_box .others_box {left: 2px; top: 275px; width: 276px;}.widget_login .layout .headline{width: 279px;left: 1px;margin-top: 1px;}.header_search{overflow:hidden;}#sincronizarTokenId{top: -13px; position: relative;}.logo_login{width:279px;}.ixe .widget_login .layout .login_box .others_box{margin-top: 21px !important;}.ixe .widget_login .layout .login_box .others_box{padding-top: 5px;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = cssLoginBox;
        } else {
            style.appendChild(document.createTextNode(cssLoginBox));
        }
        head.appendChild(style); /***************************************/
        /*****FIX GFB CON LOS ICONOS DE BUSCADOR*****/
        if (window.location.href.indexOf('portal/gfb') > 0) {
            var cssLoginBox = '#menu_pyme_opt{top:0px !important; width:300px !important; right:-50px !important;} .active{border: none;} #header_search{overflow:hidden;}',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
            style.type = 'text/css';

            if (style.styleSheet) {
                style.styleSheet.cssText = cssLoginBox;
            } else {
                style.appendChild(document.createTextNode(cssLoginBox));
            }
            head.appendChild(style);
        } /*******************************************/
        /****FIX DEL BUSCADOR CUANDO SWITCHEA DE OVERFLOW HIDDEN NO HIDDEN ***/

        /*****FIX WATSON HOME*****/
        if (window.location.href == 'https://www.banorte.com' ||
            window.location.href == 'www.banorte.com' ||
            window.location.href == 'banorte.com' ||
            window.location.href == 'https://www.banorte.com/' ||
            window.location.href == 'www.banorte.com/' ||
            window.location.href == 'banorte.com/' ||
            window.location.href == envTest(PROEnv)) {
            script = document.createElement("script");
            script.src = "https://www.banorte.com/cms/watson/chatUI/js/src/loadChatPublico.js?v=" + randomnos;
            script.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script);
        }
        /*****FIN FIX WATSON HOME*****/

        $(".search_trigger").click(function() {
            setTimeout(fixOverflowFlipFlop, 1000);
        });

        function fixOverflowFlipFlop() {
            $("#header_search").css("overflow", "hidden");
        }
        /********************************************************************/

        /************FIX PARA AGREGAR PULSE BUTTON**************/
        /* if (window.location.href.indexOf('piloto.banorte.com') > 0) {
            var DomParserLet = new DOMParser();

            $(document).ready(function() {
              var pulseButton = '<button id="pulseChatButton" style="display:block;" class="pulse-button">'+
              '<div>Â¿Necesitas ayuda?</div>'+
              '</button>';
              var doc = DomParserLet.parseFromString(pulseButton, 'text/html');
                  var firstDiv = doc.body.firstChild;
              document.body.appendChild(firstDiv);

              $("#pulseChatButton").click(function(){
                if($("#pulseChatButton").is(":visible")){
                  window._genesys.widgets.bus.command('WebChat.open', {   
                    form: {
                      autoSubmit: false,
                      firstname: "Test",
                      lastname: "Test",
                      email: "test@test.com"
                    }   
                  }).done(function(e)
                  {
                    document.getElementsByClassName('cx-submit cx-btn cx-btn-primary')[0].click();
                  });
                  $("#pulseChatButton").hide();
                } else{
                  $("#pulseChatButton").show();
                }
              });
            });
          }*/
        /***********************************/
        /************FIX PARA ESCONDER WIDGET WATSON**************/
        ;
        // $(document).ready(function(){
        //   $(".location_trigger").click(function(){
        //     var style = document.createElement('style');
        //     style.innerHTML = '#filtro_moreCorrespondent{display:none !important;}#subFiltroCorrespondent{display:none !important;}';
        //     document.head.appendChild(style);
        //     $(".interactive_filters").children("#filtro_corresponsalias").children("li").children(".icon_help").children(".tooltip").children(".boxed").children(".content").children("p").children("strong").html("En nuestra red de mÃ¡s de 13,000 CorresponsalÃ­as podrÃ¡s realizar depÃ³sitos a cuentas de Banorte, pago de tarjetas de crÃ©dito Banorte y de otros servicios")
        //     /************FIX PARA ESCONDER CORRESPONSAL OXXO**************/;
        //     $("#filtro_moreCorrespondent").children("li").eq(0).hide();
        //     /*******************************************************/
        //   });
        // });
        /*******************************************************/

        /***************FIX AGREGAR ITEM CIRCULO PYME MOVIL****************/
        /*$(document).ready(function() {
            $(".header_notificationbar_menu").each(function() {
                var count = $(this).children("li").length;
                if (count >= 4) {
                    $(this).append('<li class="right"><a href="https://www.circulopymebanorte.com">C&iacute;rculo PyME Banorte</a></li>');
                }
            });
        });*/
        /******************************************************/

        /************FIX PARA ESCONDER WIDGET WATSON**************/
        /*;
        if (window.location.href.indexOf('www.banorte.com') > 0) {
            var style = document.createElement('style');
            style.innerHTML = '.cx-widget{display:none !important;}';
            document.head.appendChild(style);
        }*/
        /*******************************************************/

        function removejscssfile(filename, filetype) {
            var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
            var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
            var allsuspects = document.getElementsByTagName(targetelement)
            for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
                if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
                    allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
            }
        }

        function loadjscssfile(filename, filetype) {
            if (filetype == "js") { //if filename is a external JavaScript file
                var fileref = document.createElement('script')
                fileref.setAttribute("type", "text/javascript")
                fileref.setAttribute("src", filename)
            } else if (filetype == "css") { //if filename is an external CSS file
                var fileref = document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", filename)
            }
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref)
        }


        $(document).ready(function() {
            if (window.location.href.indexOf('portal/banorte/Home/promociones/promociones-tarjeta-de-credito/tdc-la-comer/registro-la-comer') > 0) {
                $("iframe:first").attr("src", "https://www.banorte.com/cms/banorte/promociones/Fin_de_ann/2019/index.html");
            }
        });

        /*
        *
        Se agrega script para quitar mensaje de cookies y modal de promociones en inklusion
        *
        */
        $(document).ready(function() {
            var URLactual = window.location.hostname;
            if (URLactual == "banorte.inklusion.incluirt.com") {
                $(".modalFather").remove();
                $("#cookiesBanner").remove();
                $("#cookiesBanner").remove();
                $(".location_trigger").first().remove();

            }
        });

        //DESAPARECE ICONO DE SEGUIRDAD MENOR A 1023PX Y DESAPARECE CHAT EN RESPONSIVO
        $(document).ready(function() {
            remove_chat_menu();
        });

        //DESAPARECE ICONO DE SEGUIRDAD MENOR A 1023PX Y DESAPARECE CHAT EN RESPONSIVO
        $(window).load(function() {
            remove_chat_menu();
        });

        //DESAPARECE ICONO DE SEGUIRDAD MENOR A 1023PX Y DESAPARECE CHAT EN RESPONSIVO
        $(window).resize(function() {
            remove_chat_menu();
        });

        //DESAPARECE ICONO DE SEGUIRDAD MENOR A 1023PX Y DESAPARECE CHAT EN RESPONSIVO
        function remove_chat_menu() {
            if ($(window).width() < 768) {
                $("#asistententeBanorteIFrame").css("display", "none");
            } else {
                $("#asistententeBanorteIFrame").css("display", "block");
            }

            if ($(window).width() < 1023) {
                $("#security_trigger").css("display", "none");
            } else {
                $("#security_trigger").css("display", "block");
            }
        }

        $(document).ready(function() {

            if (window.location.href.indexOf('/empresas/Home/circulo-pyme') > 0) {
                $(".logo").attr("href", "https://www.banorte.com");
                $(".returnHome").children("a").attr("href", "/wps/portal/empresas/Home/circulo-pyme/");
            }

            //ICONO DE SEGURIDAD EN HEADER
            if (window.location.href.indexOf('/wps/portal/banorte') > 0 || window.location.href == "https://www.banorte.com/" && window.innerWidth > 1024) {
                $(".search_trigger").eq(0).after("<li id='security_trigger' onclick='location.href = \"https://www.banorte.com/seguridad\"' style='width: 32px;height: 32px;padding: 0;float: left;margin-top: -55px;margin-left: 256px;background-image:url(\"https://www.banorte.com/cms/banorte/imagenes/Candado_64.png\");background-size: 73%;background-repeat: no-repeat;'>&nbsp;</li>");
            }

            //FIX ENLACE LOGIN  
            if (window.location.href.indexOf('portal/banorte') > 0 || window.location.href == "https://www.banorte.com/") {
                $(".menu_gray").children("li").eq(0).children("a").attr("href", "http://www.enlacebg.com/ContratantePIB/logincontratantePIB.aspx");
            }

            //FIXES PARA SOLO PILOTO
            if (envTest(PILEnv)) {
                /*
                delete window._genesys;
                var randomnos = Math.ceil(Math.random() * 1000000000);

                removejscssfile("contactoChatOriginal.js", "js");
                removejscssfile("widgets.acceso24.js", "js");
                removejscssfile("widgets.min.js", "js");
                removejscssfile("widgets.survey.js", "js");
                removejscssfile("widgets.bot.js", "js");

                loadjscssfile("https://www.banorte.com/cms/watson/widgetFiles/js/contactoChatOriginal.js?v=" + randomnos, "js");
                loadjscssfile("https://www.banorte.com/cms/watson/widgetFiles/js/widgets.acceso24.js?v=" + randomnos, "js");
                loadjscssfile("https://www.banorte.com/cms/watson/widgetFiles/js/widgets.min.js?v=" + randomnos, "js");
                loadjscssfile("https://www.banorte.com/cms/watson/widgetFiles/js/widgets.survey.js?v=" + randomnos, "js");
                loadjscssfile("https://www.banorte.com/cms/watson/widgetFiles/js/widgets.bot.js?v=" + randomnos, "js");

                var DomParserLet = new DOMParser();

                if (!$(".cx-widget").is(":visible")) {
                    $("#logoutlink").on("click", function() {
                        window._genesys.widgets.bus.command('WebChatService.endChat');
                    });
                }

                $("#start-chat").on("click", function() {
                    $(".widget_contacto .layout .close").trigger("click");
                });*/
            }

            //FIXES INFOSEL

            var boolEnableDivisasManual = false;
            var hideIPC = true;
            var hideNuestraAccion = true;

            function hideIPCFn() {
                $("#tablaIPC").hide();
            }

            function hideNuestraAccionFn() {
                $("#tablaNuestraAccion").hide();
            }

            function changeDivisa() {
                $("#tablaDolarDivisas").children("tbody").children("tr").children("td").eq(1).html("$19.60");
                $("#tablaDolarDivisas").children("tbody").children("tr").children("td").eq(2).html("$21.00");
                $("#tablaDolarDivisas").children("tbody").children("tr").eq(1).children("td").eq(1).html("$24.65");
                $("#tablaDolarDivisas").children("tbody").children("tr").eq(1).children("td").eq(2).html("$25.55");
                if (hideIPC) {
                    hideIPCFn();
                } else {
                    $("#tablaIPC").show();
                }
                if (hideNuestraAccion) {
                    hideNuestraAccionFn();
                } else {
                    $("#tablaNuestraAccion").show();
                }
            }

            function changeDivisa2() {
                $("#tablaDolarDivisas").children("thead").append("<tr><th>DOLAR</th><th>\$19.55</th><th>\$20.95</th></tr>");
                $("#tablaDolarDivisas").children("thead").append("<tr><th>EURO</th><th>\$24.35</th><th>\$25.25</th></tr>");
                if (hideIPC) {
                    hideIPCFn();
                } else {
                    $("#tablaIPC").show();
                }
                if (hideNuestraAccion) {
                    hideNuestraAccionFn();
                } else {
                    $("#tablaNuestraAccion").show();
                }
            }

            $(".indicadores_trigger").click(function() {
                if (boolEnableDivisasManual) {
                    $("#tablaIPC").hide();
                    $("#tablaNuestraAccion").hide();
                    setTimeout(changeDivisa2, 1000);
                }
            });

            ////NUEVO GEOLOCALIZADOR BANORTE
            /*if(window.location.href.indexOf('/Home/circulo-pyme') == -1 ){
              var style=document.createElement("style");function openGeolocator(){console.log("opening Geolocator"),"https://www.banorte.com/cms/geolocalizacion-banorte/v3/gmaps.html"!=document.getElementById("geolocatorFrame").src&&(document.getElementById("geolocatorFrame").src="https://www.banorte.com/cms/geolocalizacion-banorte/v3/gmaps.html"),toggleShowIframeGeolocator()}function toggleShowIframeGeolocator(){document.getElementById("geolocatorFrame").classList.toggle("toggleIframeGeolocator"),document.getElementById("geolocatorContainer").classList.toggle("geolocatorContainerOpen")}style.type="text/css",style.innerHTML=".toggleIframeGeolocator{height:52.0vw !important}.widget_map{display:none !important;}.geolocatorContainerOpen{height: 52vw !important;}",document.getElementsByTagName("head")[0].appendChild(style),$(document).ready(function(){$(".location_trigger").click(function(){openGeolocator(),$(".location_trigger").hasClass("active")||$(".location_trigger").toggleClass("active")})});var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventer=window[eventMethod],messageEvent="attachEvent"==eventMethod?"onmessage":"message";eventer(messageEvent,function(e){("http://localhost:8084"==e.origin||e.origin.indexOf("banorte.com")>0)&&"cerrar"==e.data&&(toggleShowIframeGeolocator(),$(".location_trigger").toggleClass("active"))},!1);var Geolocator=document.createElement("div");Geolocator.style="height: 0px;transition: all 0.5s ease-in-out !important;",Geolocator.setAttribute("id","geolocatorContainer"),Geolocator.innerHTML="<iframe id='geolocatorFrame' src='' style='margin: 0; border:0; width: 100%;height: 0vw; transition: all 0.5s ease-in-out !important; background-color: #eee;' allow='geolocation *;'></iframe>";var mainHeadPublicPortal=document.getElementsByClassName("header_heightFIX")[0];mainHeadPublicPortal.after(Geolocator);
            }*/
            $(".location_trigger").click(function() {
                window.location.href = "/geolocalizador";
            });

            /*
                ////NUEVO GEOLOCALIZADOR BANORTE
                if(window.location.href.indexOf('/Home/circulo-pyme') == -1 ){
                  var style=document.createElement("style");function openGeolocator(){console.log("opening Geolocator"),"https://www.banorte.com/cms/geolocalizacion-banorte/v3/gmaps.html"!=document.getElementById("geolocatorFrame").src&&(document.getElementById("geolocatorFrame").src="https://www.banorte.com/cms/geolocalizacion-banorte/v3/gmaps.html"),toggleShowIframeGeolocator()}function toggleShowIframeGeolocator(){document.getElementById("geolocatorFrame").classList.toggle("toggleIframeGeolocator"),document.getElementById("geolocatorContainer").classList.toggle("geolocatorContainerOpen")}style.type="text/css",style.innerHTML=".toggleIframeGeolocator{height:52.0vw !important}.widget_map{display:none !important;}.geolocatorContainerOpen{height: 52vw !important;}",document.getElementsByTagName("head")[0].appendChild(style),$(document).ready(function(){$(".location_trigger").click(function(){openGeolocator(),$(".location_trigger").hasClass("active")||$(".location_trigger").toggleClass("active")})});
                  var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventer=window[eventMethod],messageEvent="attachEvent"==eventMethod?"onmessage":"message";eventer(messageEvent,function(e){("http://localhost:8084"==e.origin||e.origin.indexOf("banorte.com")>0)&&"cerrar"==e.data&&(toggleShowIframeGeolocator(),$(".location_trigger").toggleClass("active"))},!1);
                  var Geolocator=document.createElement("div");Geolocator.style="height: 0px;transition: all 0.5s ease-in-out !important;",Geolocator.setAttribute("id","geolocatorContainer"),Geolocator.innerHTML="<iframe id='geolocatorFrame' src='' style='margin: 0; border:0; width: 100%;height: 0vw; transition: all 0.5s ease-in-out !important; background-color: #eee;' allow='geolocation *;'></iframe>";
                  var mainHeadPublicPortal=document.getElementById("IVSAR_customHeader");mainHeadPublicPortal.append(Geolocator);
                }
            */
        });
    }



    ///************************************************************************** END FUNCTIONS2*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

    //ALERT WHEN LEAVING PAGE
    $(document).ready(function() {
        var booLeave = false;

        $(".leaveAlert").click(function() {
            var targetBlank = $(this).attr("target");
            if (targetBlank = "_blank") {
                alert("Usted estÃ¡ por abandonar el sitio web de Banorte, Â¿EstÃ¡ seguro que desea continuar?");
            } else {
                booLeave = true;
            }
        });

        $(window).on("beforeunload", function() {
            if (booLeave) {
                return "Usted estÃ¡ por abandonar el sitio web de Banorte, Â¿EstÃ¡ seguro que desea continuar?";
            }
        });
    });

    //FIX HIDE CONTACTOCHAT
    $(document).ready(function() {
        $(".widget_contacto").hide();
        $(document).ready(function(){
            var w = window.innerWidth;         
            if(window.location.href.indexOf("banorte-te-informa/aviso-de-privacidad") > 0 &&  window.location.href.indexOf("banorte-te-informa.terminos-legales") > 0){
                $(".widget_login_inside").attr("style","display: block !important;");
            }else if(window.innerWidth < 1024){
                $(".widget_login_inside").attr("style","display: none !important;");
            }
        });
    });
} else if (envTest(PRIVEnv)) {
    /**** EN CASO DE ACCIDENTALMENTE CARGARSE EN OTRO AMBIENTE QUE NO ES PUBLICO*****/
    var randomnos = Math.ceil(Math.random() * 1000000000);
    var script = document.createElement("script");
    script.src = "https://www.banorte.com/cms/functions/functions_private.js" + "?v=" + randomnos;
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    //FIX HORARIO CHAT
    function hideChat() {
        var cssChat = '#camposChat{display:none !important;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = cssChat;
        } else {
            style.appendChild(document.createTextNode(cssChat));
        }
        head.appendChild(style);
        console.log("SE ESCONDE CHAT");
    }

    function showChat() {
        var cssChat = '#camposChat{display:block !important;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = cssChat;
        } else {
            style.appendChild(document.createTextNode(cssChat));
        }
        head.appendChild(style);
        console.log("SE MUESTRA CHAT");
    }

    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();

    if (day > 0 && day < 6) {
        if (hour < 08) {
            hideChat();
        } else if (hour > 20) {
            hideChat();
        } else {
            showChat();
        }
    } else {
        hideChat();
    }

    /******************FIX QUIT POPUP PRIVADO*********************/
    var cssModalPrivate = '.modalFather{ display: none !important;}',
        headModalPrivate = document.head || document.getElementsByTagName('head')[0],
        styleModalPrivate = document.createElement('style');
    styleModalPrivate.type = 'text/css';

    if (styleModalPrivate.styleSheet) {
        styleModalPrivate.styleSheet.cssText = cssModalPrivate;
    } else {
        styleModalPrivate.appendChild(document.createTextNode(cssModalPrivate));
    }
    headModalPrivate.appendChild(styleModalPrivate); 
    /********************************************/
}