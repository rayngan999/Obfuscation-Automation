jQuery(document).ready(function($){
    $('.section-three_column_infographic .title-and-image').matchHeight();
    // countdown
    if ($('.section-splash').length) {
        var $text = $('.countdown-seconds'),
            initialTime = $text.data('timer'),
            timeleft = initialTime,
            completeOffset = 219.91148575129;

        $text.html(initialTime > 9 ? '<span>'+initialTime+'</span>' : initialTime);
    
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            complete.style.strokeDashoffset = completeOffset;
            location.href = '/';
          } else {
            complete = document.getElementById("countdown-svg").getElementsByTagName('circle')[1]
            complete.style.strokeDashoffset = (initialTime - timeleft) * (completeOffset/initialTime) ;
          }
          $text.html(timeleft > 9 ? '<span>'+timeleft+'</span>' : timeleft);
          timeleft -= 1;
        }, 1000);
    }

    // platforms archive
    var $platforms = $('.section-platform_archive'),
        $infinite_opts = $platforms.find('[data-infinite-scroll]').attr('data-infinite-scroll');

    $platforms.on('change','.platform-filters input', function(e){
        var filter = $(this).val(),
            nextPage = $platforms.find('.block-pagination .page-next');

        if (filter.length) {
            nextPage.attr('href', '/watch-legally/' + 'page/1?platform_category=' + filter);
            $platforms.removeClass('js--infinite-scroll-ended');
            $platforms.find('[data-infinite-scroll]').infiniteScroll('destroy').empty().infiniteScroll(JSON.parse($infinite_opts)).infiniteScroll('loadNextPage');
        } else {
            nextPage.attr('href', '/watch-legally/' + 'page/1');
            
            $platforms.removeClass('js--infinite-scroll-ended');
            $platforms.find('[data-infinite-scroll]').infiniteScroll('destroy').empty().infiniteScroll(JSON.parse($infinite_opts)).infiniteScroll('loadNextPage');
        }
    });

    // infinite scroll
    var $infiniteEnded = $('.infinite-scroll_container'),
        $infiniteContainer = $('[data-infinite-scroll]'),
        $infiniteStatus = $('.infinite-scroll_status');

    $infiniteContainer.on( 'last.infiniteScroll', function( event, body, path ) {
        $infiniteEnded.addClass('js--infinite-scroll-ended');
    });
    $infiniteContainer.on( 'request.infiniteScroll', function( event, path, fetchPromise ) {
        $infiniteStatus.addClass('js--loading');
    });
    $infiniteContainer.on( 'append.infiniteScroll', function( event, body, path, items, response ) {
        $infiniteStatus.removeClass('js--loading');
    });

	// Members Carousel
    $('.members-inline-carousel').each(function(){
        $(this).slick({
            dots: false,
            arrows: false,
            // slidesToShow: 6,
            autoplay: true,
            // autoplaySpeed: 3000,
            pauseOnFocus: false,
            speed: 800,
            autoSlidesToShow: true,
            variableWidth: true,
        });
    });

    // Blog
    // $('.news-item .text-block').matchHeight();

    // Our Approach
    var approachCollapsible = document.getElementById('accordionOurApproach');
    if (approachCollapsible) {
        approachCollapsible.addEventListener('shown.bs.collapse', function () {
            var c = $('#accordionOurApproach').find('.collapse.show').parents('.accordion-item').index() + 1;
            $('.section-our_approach .accordion-images .image').hide();
            $('#approach-image-' + c).show();
        });
    }

    // Counter
    if ($('.counter__item').length) {
        $('.counter__item').each(function(){
            $(this).text($(this).data('value'));
        });
        $('.counter__item').countUp();
    }

    // Platforms
    $('.platforms-carousel').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        speed: 800,
        prevArrow: '<div class="slick-nav slick-prev"><span class="icon-chevron-left"></span></div>',
        nextArrow: '<div class="slick-nav slick-next"><span class="icon-chevron-right"></span></div>',
    });
});