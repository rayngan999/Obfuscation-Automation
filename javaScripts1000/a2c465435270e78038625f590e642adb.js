/* funcionalidad responsiva */
/**

parentSelector	selector de referencia
nodeType		div, a, p, span, ul, li entre otros
appendType		prepend appendTo 
classes			Clase CSS del elemento a crear.
params			Propiedades adicionales ej: {href: 'url', id: 'un_id'}
content 		Contenido html o texto
callback		FunciÃ³n para meter elementos anidados en el contexto del nodo agregado.
*/
function fad(parentSelector, nodeType, appendType, classes, params, content, callback) {
    //console.log('append:');
    //console.log($(parentSelector));
    //console.log($(parentSelector).html());
    //$(nodeType).appendTo(parentSelector);
    var paramsStr = "";
    for (key in params) {
        //console.log(key);
        //console.log(params[key]);
        paramsStr += key + '="' + params[key] + '" ';
    }
    var newEl = $('<' + nodeType + ' ' + paramsStr + '/>');
    //console.log('oki');
    switch (appendType) {
        case 'prependTo':
            newEl.prependTo(parentSelector);
            break;
        case 'appendTo':
            newEl.appendTo(parentSelector);
            break;
        case 'insertBefore':
            newEl.insertBefore(parentSelector);
            break;
        case 'insertAfter':
            newEl.insertBefore(parentSelector);
            break;
        default:
            break;
    }
    newEl.addClass(classes);
    if (content !== undefined && content !== null && content != '') {
        newEl.html(content);
    }
    if (typeof callback === 'function') {
        callback(newEl);
    }
}


/* funcionalidad del menu paginas internas */

$(function () {
    var menuwidth = 326; // pixel value for sliding menu width
    var menuspeed = 200; // milliseconds for sliding menu animation time

    var $bdy = $('body');
    var $container = $('.wpthemeFrame');
    var $burger = $('.mmenu_trigger_sidebar');
    var negwidth = "-" + menuwidth + "px";
    var poswidth = menuwidth + "px";

    $('.mmenu_trigger').on('click', function (e) {
        if ($bdy.hasClass('openmenu')) {
            jsAnimateMenu('close');
        } else {
            jsAnimateMenu('open');
            $('.banorte > header .header_top nav ul.header_menu li.mmenu_trigger').hide();
            $('.banorte > header .header_top nav ul.header_menu li.search_trigger').css("margin-right", "26px");
        }
    });

    $('.overlay, .mmenu_trigger_sidebar .close').on('click', function (e) {
        if ($bdy.hasClass('openmenu')) {
            jsAnimateMenu('close');
            $('.banorte > header .header_top nav ul.header_menu li.mmenu_trigger').show();
            $('.banorte > header .header_top nav ul.header_menu li.search_trigger').css("margin-right", "0px");
        }
    });
    
    $('.mmenu_trigger_sidebar ul.header_menu li.contact_trigger').on('click', function (e) {
        if ($bdy.hasClass('openmenu')) {
            jsAnimateMenu('close');
            $('.banorte > header .header_top nav ul.header_menu li.mmenu_trigger').show();
            $('.banorte > header .header_top nav ul.header_menu li.search_trigger').css("margin-right", "0px");
        }
    });
    

    $('a[href$="#"]').on('click', function (e) {
        e.preventDefault();
    });

    function jsAnimateMenu(tog) {
        if (tog == 'open') {
            $bdy.addClass('openmenu');

            $container.animate({
                marginRight: poswidth,
                marginLeft: negwidth
            }, menuspeed);
            $burger.animate({
                width: poswidth
            }, menuspeed);
            $('.overlay').animate({
                right: poswidth
            }, menuspeed);
        }

        if (tog == 'close') {
            $bdy.removeClass('openmenu');

            $container.animate({
                marginRight: "0",
                marginLeft: "0"
            }, menuspeed);
            $burger.animate({
                width: "0"
            }, menuspeed);
            $('.overlay').animate({
                right: "0"
            }, menuspeed);
        }
    }
});


