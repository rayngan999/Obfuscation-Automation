/**
* Cienradios lazyload
* v 0.0.2
*/
// define(['jquery'], function($) {
;(function($) {
    // options{
    //      threshold: cantidad de pixeles de mÃ¡s
    //      type: tipo de carga de imagen, "background" para cargar las imagenes como css background-image
    // }
    $.fn.lazy = function(option, callback) {

        var $w = $(window),
        options = option,
        th = options ? options.threshold : 0,
        images = this,
        loaded,
        type = options ? options.type : '';

        this.one("lazy", function() {
            var w = $w.innerWidth();

            if ( $(this).hasClass('lazyloaded') ) {
                return;
            }

            // retina = window.devicePixelRatio > 1,
            // if ( retina )
            // attrib = retina? "data-src-retina" : "data-src",

            var img_data = '';

            if (w >= 768 ) {
                img_data = 'src-desktop';
            } else {
                img_data = 'src-mobile';
            }

            var url = $(this).data( img_data );
            // console.log('URL data IMG' ,url );
            // Verifico por data-src
            if( typeof url == 'undefined' ){
                url = $(this).data( 'src' );
                // console.log('URL data IMG 2 (data-src)' ,url );
            }

            switch(type) {

                case 'background':

                if (url) $(this).css({'background-image':'url('+url+')'}).addClass('lazyloaded');

                break;
                default:

                if (url) {
                    // $(this).attr("src", url);
                    var img = $(this)[0];
                    img.setAttribute('src', url);
                    img.onload = function(){
                        img.removeAttribute('data-src');
                        img.classList.add('lazyloaded');
                    };

                }

            }

            if (typeof callback === "function") callback.call(this);

        });

        function lazy() {
            var inview = images.filter(function() {
                var $e = $(this);

                if ($e.is(":hidden")) return;

                var wt = $w.scrollTop(),
                wb = wt + window.innerHeight,
                et = $e.offset().top,
                eb = et + $e.height();

                return eb >= wt - th && et <= wb + th;
            });

            loaded = inview.trigger("lazy");
            images = images.not(loaded);
        }

        $w.on("scroll.lazy resize.lazy lookup.lazy ", lazy);

        lazy();

        return this;

    };

})(window.jQuery);
// });
$(function() {
    $('img.lazyImage').lazy({ threshold: 50, type: '' }, function() {
        $(this).css({'opacity': '1' });
    });
    $('.lazyBackground').lazy({ threshold: 50, type: 'background' }, function() {
        $(this).css({'opacity': '1' });
    });
});
