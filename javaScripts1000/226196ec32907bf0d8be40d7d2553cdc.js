/***********************************************************************
 * Common javascript 
 * @copyright   Eptimum
 * @link        http://www.eptimum.com/
 * @date        2012-00-00
 */


$(document).ready(function()
{
    /**
     * Offuscation de liens
     * @return {[type]} [description]
     */
    setTimeout(function() {
        if ($('#lnkgen').length == 0) {
            $('.lk').each(
                function() {
                    if ($(this).attr('rel')) {
                        var href = $(this).attr('rel');
                    }
                    if ($(this).attr('href')) {
                        var href = $(this).attr('href');
                    }
                    var blank = $(this).attr('blank');
                    var target = $(this).attr('target');
                    var title = $(this).attr('title');
                    var cssclass = $(this).attr('class');
                    var cssstyle = $(this).attr('style');
                    var id = $(this).attr('id');
                    var jsOnclick = $(this).attr('onclick');
                    var dataOrigine = $(this).attr('data-origine');
                    var dataEditeur = $(this).attr('data-editeur');
                    var dataSsorigine = $(this).attr('data-ssorigine');
                    var dataRedirect = $(this).attr('data-redirect');
                    //var onclickEvent=$(this).attr('onclick');
                    var reqFun = $(this).attr('reqFun');
                    var content = $(this).html();


                    var newA = '<a href="' + href + '" ';
                    if (title != undefined && title != "undefined" && title.length > 0) newA += ' title="' + title + '" ';
                    if (blank != undefined && blank != "undefined" && blank.length > 0) newA += ' target="_blank" ';
                    if (target != undefined && target != "undefined" && target.length > 0) newA += ' target="' + target + '" ';
                    if (cssclass != undefined && cssclass != "undefined" && cssclass.length > 0) newA += ' class="' + cssclass + '" ';
                    //if(onclickEvent!=undefined&&onclickEvent!="undefined"&&onclickEvent.length>0) newA+=' onclick="'+onclickEvent+'" ';
                    if (reqFun != undefined && reqFun != "undefined" && reqFun.length > 0) newA += ' onclick="' + reqFun + ';" ';
                    if (cssstyle != undefined && cssstyle != "undefined" && cssstyle.length > 0) newA += ' style="' + cssstyle + '" ';
                    if (id != undefined && id != "undefined" && id.length > 0) newA += ' id="' + id + '" ';
                    if (jsOnclick != undefined && id != "undefined" && jsOnclick.length > 0) newA += ' onclick="' + jsOnclick + '" ';
                    if (dataOrigine != undefined && dataOrigine != "undefined" && dataOrigine.length > 0) newA += ' data-origine="' + dataOrigine + '" ';
                    if (dataEditeur != undefined && dataEditeur != "undefined" && dataEditeur.length > 0) newA += ' data-editeur="' + dataEditeur + '" ';
                    if (dataSsorigine != undefined && dataSsorigine != "undefined" && dataSsorigine.length > 0) newA += ' data-ssorigine="' + dataSsorigine + '" ';
                    if (dataRedirect != undefined && dataRedirect != "undefined" && dataRedirect.length > 0) newA += ' data-redirect="' + dataRedirect + '" ';
                    newA += '>';
                    newA += content;
                    newA += '</a>';
                    $(this).replaceWith(newA);
                }
            );
            $('body').append('<span id="lnkgen"></span>');
        }
    }, 1500);

    /**
     * Offuscation de liens
     * @return {[type]} [description]
     */
    $(window).bind('mousemove scroll click mousedown', function() {

        if ($('#lnkgen').length == 0) {
            $(".lk").each(
                function() {
                    if ($(this).attr('rel')) {
                        var href = $(this).attr('rel');
                    }
                    if ($(this).attr('href')) {
                        var href = $(this).attr('href');
                    }
                    var blank = $(this).attr('blank');
                    var target = $(this).attr('target');
                    var title = $(this).attr('title');
                    var cssclass = $(this).attr('class');
                    var cssstyle = $(this).attr('style');
                    var id = $(this).attr('id');
                    var jsOnclick = $(this).attr('onclick');
                    var dataOrigine = $(this).attr('data-origine');
                    var dataOrigine = $(this).attr('data-origine');
                    var dataEditeur = $(this).attr('data-editeur');
                    var dataSsorigine = $(this).attr('data-ssorigine');
                    var dataRedirect = $(this).attr('data-redirect');


                    //var onclickEvent=$(this).attr('onclick');
                    var reqFun = $(this).attr('reqFun');
                    var content = $(this).html();
                    var newA = '<a href="' + href + '" ';
                    if (blank != undefined && blank != "undefined" && blank.length > 0) newA += ' target="_blank" ';
                    if (target != undefined && target != "undefined" && target.length > 0) newA += ' target="' + target + '" ';
                    if (title != undefined && title != "undefined" && title.length > 0) newA += ' title="' + title + '" ';
                    if (cssclass != undefined && cssclass != "undefined" && cssclass.length > 0) newA += ' class="' + cssclass + '" ';
                    //if(onclickEvent!=undefined&&onclickEvent!="undefined"&&onclickEvent.length>0) newA+=' onclick="'+onclickEvent+'" ';
                    if (reqFun != undefined && reqFun != "undefined" && reqFun.length > 0) newA += ' onclick="' + reqFun + ';" ';
                    if (cssstyle != undefined && cssstyle != "undefined" && cssstyle.length > 0) newA += ' style="' + cssstyle + '" ';
                    if (id != undefined && id != "undefined" && id.length > 0) newA += ' id="' + id + '" ';
                    if (jsOnclick != undefined && id != "undefined" && jsOnclick.length > 0) newA += ' onclick="' + jsOnclick + '" ';
                    if (dataOrigine != undefined && dataOrigine != "undefined" && dataOrigine.length > 0) newA += ' data-origine="' + dataOrigine + '" ';
                    if (dataEditeur != undefined && dataEditeur != "undefined" && dataEditeur.length > 0) newA += ' data-editeur="' + dataEditeur + '" ';
                    if (dataSsorigine != undefined && dataSsorigine != "undefined" && dataSsorigine.length > 0) newA += ' data-ssorigine="' + dataSsorigine + '" ';
                    if (dataRedirect != undefined && dataRedirect != "undefined" && dataRedirect.length > 0) newA += ' data-redirect="' + dataRedirect + '" ';
                    newA += '>';
                    newA += content;
                    newA += '</a>';
                    $(this).replaceWith(newA);
                }
            );
            $('body').append('<span id="lnkgen"></span>');
        }
    });

    
});



/*// MENU FIXE 
(function(w,d,undefined){
 
    var el_html = d.documentElement,
        el_body = d.getElementsByTagName('body')[0],
        header = d.getElementById('header-global'),
        lastScroll = w.pageYOffset || el_body.scrollTop,
        
        menuIsStuck = function(triggerElement, wScrollTop, lastScroll) {

            var regexp      = /(nav\-is\-stuck)/i,
                classFound  = el_html.className.match( regexp ),
                navHeight   = header.offsetHeight,
                bodyRect    = el_body.getBoundingClientRect(),
                scrollValue = triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 700,
                scrollValFix = classFound ? scrollValue : scrollValue + navHeight;
 
            // si le scroll est d'au moins 700 et
            // la class nav-is-stuck n'existe pas sur HTML et que nous allons vers le haut
            if ( wScrollTop > scrollValFix && !classFound && wScrollTop < lastScroll ) {
                el_html.className = el_html.className + ' nav-is-stuck';
                el_body.style.paddingTop = navHeight + 'px';
                
            }
 
            // si le scroll est infÃ©rieur Ã  2 et qu'on arrive tout en haut 
            // et que la class nav-is-stuck existe
            if ( classFound && wScrollTop > lastScroll || wScrollTop == 0) {
                el_html.className = el_html.className.replace( regexp, '' );
                el_body.style.paddingTop = '0';
            }
        
        },
        onScrolling = function() {
            // on rÃ©cupÃ¨re la valeur du scroll maintenant
            var wScrollTop = w.pageYOffset || el_body.scrollTop;

            // on ajoute deux arguments, valeurs de scrolls
            menuIsStuck( d.getElementById('main'), wScrollTop, lastScroll );

            // on enregistre notre derniÃ¨re valeur de scroll
            lastScroll = wScrollTop;
        
        };

        el_html.className = el_html.className + ' js';
 
    // quand on scroll
    w.addEventListener('scroll', function(){
        w.requestAnimationFrame( onScrolling );
    });

}(window, document));
*/

// START MDI 

jQuery(function(){

    /* Faire apparaitre et disparaitre le logo lorsque la barre de recherche s'Ã©tend*/
    $('#sb-search').on('touchstart click', function(){ 
        // quand #sb-search est cliquÃ©
        $("#logo").toggle(); // ajouter la classe close a .header-logo quand on reclic la classe est retirÃ©e
    });

    // Scrollbar pour le menu burger
    // FS # 8480
    $(window).on('load', function(){
        $(".list-cp").mCustomScrollbar();
    });

    // Bloquer banniÃ¨re si l'ad block est activer
    /*var adBlockTextValue = $("#adIdVal").val();
    // alert(adBlockTextValue);
    if (adBlockTextValue=='adblockActiver') {
        $("div.habillage").remove();
    };*/

    $(window).on('load', function(){
        //adcontainer1
        if ($("#master-1").css('visibility') === 'hidden') {
           $("#adcontainer1").removeClass('page-recherche');
        }else{
            //console.log('Not hidden');
        }

        //adcontainer2
        if ($("#slave-1-1").css('visibility') === 'hidden') {
           $("#adcontainer2").removeClass('page-recherche');
        }else{
            //console.log('Not hidden');
        }       
    });

    // FS #8480
    /*$(window).on('load', function(){
        var adBlockTextValue = $("#adIdVal").val();
        //alert(adBlockTextValue);
        if (adBlockTextValue=='adblockActiver') {
            //$("div.habillage").remove();
        };
    });*/

     $( '.menu-btn' ).click(function(){
        $('.responsive-menu').toggleClass('expand');
     });
 
    new UISearch( document.getElementById( 'sb-search' ) );
});