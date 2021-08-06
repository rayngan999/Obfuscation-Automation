var previousResponses = {};
jQuery(function($) {

    var $window = $(window);

    function isAdmin() {
        return document.location.host.indexOf('admin') !== -1;
    }

    $(window).on('load', function () {
        $('.mam-text .composite-captioned-video .video-container, .mam-item.minute-container .composite-captioned-video .video-container').omVideo();
    });

    /**
     *  Reloads mam articles from boards and articles
     */
    (function loadMAM() {
        $('*[data-mam-slug]').each(function (index, el) {
            var $el = $(el);
            var slug = $el.attr('data-mam-slug');
            var refresh = $el.attr('data-mam-refresh');

            if (slug && refresh) {// both should be present
                $el.parent().find('.mam-title').remove();
                var miliseconds = (refresh * 1000); // seconds to miliseconds
                setInterval(function () {
                    getMamContent(slug, refresh, $el);
                }, miliseconds);

                getMamContent(slug, refresh, $el);
            }
        });

        function getMamContent(slug, refresh, $el) {
            var el = $el[0];
            var $scrollKeeper = $el.css('overflow-y') === 'visible' ? $('html, body') : $el;

            if (slug.indexOf('/') !== 0) {
                slug = '/' + slug;
            }

            var pageSlug = '/page' + slug + '.html';
            if (isAdmin()) {
                pageSlug = '/view' + pageSlug;
            }

            // trigger event before refresh
            $window.trigger({
                type: 'wf-mam-refreshstart',
                $el: $el
            });

            $.get(pageSlug) // request article content
                .done(function (response) {
                    var $mamContent = $(response);
                    // check the response is a valid mam article
                    // check the response is not in cache
                    // and not the same response, if is the same do nothing
                    if (!previousResponses[slug] || previousResponses[slug] != response) {
                        const html = $mamContent.html();

                        var jHtmlObject = jQuery(html);
                        var editor = jQuery("<p>").append(jHtmlObject);
                        editor.find(".article-bottom-content").remove();
                        editor.find(".article-sidebar").remove();
                        editor.find(".mam-container").css("width", "100%");
                        var newHtml = editor.html();

                        $el.html(newHtml);

                        // cache the response
                        previousResponses[slug] = response;

                        // trigger an event after refresh
                        $window.trigger({
                            type: 'wf-mam-refreshend',
                            $el: $el,
                            data: {
                                html: html
                            }
                        });
                    }
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.error('Faile to complete request for mam with slug ', slug, errorThrown);
                });
            $('.mam-text .composite-captioned-video .video-container, .mam-item.minute-container .composite-captioned-video .video-container').omVideo();
        }
    })();

});
// document loaded
jQuery(function($) {

    // generic listing pagination
    $(document).on('click', '.pagination li a', loadListing);
    function loadListing (event) {
        event.preventDefault();
        var $this = $(this),
            params = {};
        if ($this.parent().hasClass('disabled')) {
            return;
        };

        params.settings = JSON.stringify({
            subcategoryFilter: false, // avoid doubling settings
            viewSetting: false,
        });

        $.get($this.attr('href'), params, function(data){
            var $container = $this.closest('.listing');

            if ($this.parent().hasClass('see-more')) {
                $container.find('.see-more-nav').remove();

                var $data = $($.trim(data));
                $data.find('.see-more-nav li a').click(loadListing);
                $container.after($data);
            } else {
                $container.replaceWith(data);
            }

            $container.trigger('wf-pager:added');
        });
    }
});
