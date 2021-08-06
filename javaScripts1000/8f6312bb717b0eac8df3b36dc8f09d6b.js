ï»¿ (function ($) {   
       
    $(document).ready(function(e) {

        $(".hashJump").first().addClass('active');

        $(window).on('load', function(){

            var hash    = window.location.hash;

            //console.log(hash);

            if (hash && hash.length > 1 && hash.indexOf('search') < 0) {
                var hashId = hash.substr(3);

                gotoBlock(hashId);
            }
        })

        $('.hashJump').on('click', function(){

            //console.log($(this).attr('value'))

            var hashId = $(this).attr('data-value');

            gotoBlock(hashId);
        });
    });

    function gotoBlock(id)
    {
        var target = $('a[name=h_'+id+']');

        if (target.length>0)
        {
            var fix     = $('li.level1').height()+$('ul.level2').height();  //freeze nav bar = ~120 px
            var top1    = target.offset().top;
            var top2    = target.offset().top-fix;
            target.attr('tabindex', '-1').focus();
            $('html,body')
                //.animate({scrollTop: top1}, 1000)
                .animate({scrollTop: top2}, 1000);
            
            return false;
        }
    }
     
})(jQuery);
