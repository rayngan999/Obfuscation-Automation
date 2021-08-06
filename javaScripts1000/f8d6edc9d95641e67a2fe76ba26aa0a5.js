var smg = smg || {};

smg['plugins'] = smg.plugins || {};

(function($, plugins) {

    var self;

    plugins.lazyoEmbeds = {
        'possibleoEmbeds': [],
        'leeway': 60, // the number of px to "expand" the possible oembed elements, so the element can be lazy-loaded just a little bit before it's scrolled into view

        init: function() {
            self = this;

            self.setupListeners();
        },

        /**
         * Instantiates event listeners.
         */
        setupListeners: function() {
            $(window).scroll(_.throttle(self.listenerCallback, 100));
        },

        /**
         * Given a jQuery element, this will search it for any links with the class "check-oEmbed", adding those to
         * the queue.
         *
         * @param      {jQuery object}  el  The HTML element, as a jQuery object, to search in for
         * possible oEmbeds.
         */
        findAndQueueoEmbeds: function(el) {
            el.find('.check-oEmbed').each(function(i) {
                // add possible oembed links to the oembed array so we can lazy-load them
                self.possibleoEmbeds.push(this);

                // once added to the oEmbed list, it doesn't need to be added again
                this.classList.remove('check-oEmbed');
            });
        },

        /**
         * Called on scroll, this checks the possible oEmbeds array and then sends requests for oEmbed code,
         * if the element is in the viewport.
         */
        listenerCallback: function() {
            if (self.possibleoEmbeds.length >= 1) {
                var markForDelete = [];

                self.possibleoEmbeds.forEach(function(el, i) {
                    if (self.isInViewport(el)) {
                        var $el = $(el);

                        // mark for deletion, once we process it we don't want to do it again
                        markForDelete.push(el);

                        self.processoEmbed(el.innerHTML).done(function(response) {
                            // if successful, replace the link with the embed
                            $el.after(response);
                            $el.remove();
                        }).fail(function(response) {
                            // if it failed, just leave the link as is
                        });
                    }
                });

                // set the possible oEmbeds list to the difference of the list and the oembeds marked for deletion
                self.possibleoEmbeds = self.possibleoEmbeds.filter(function(el) {
                    return markForDelete.indexOf(el) == -1;
                });
            }
        },

        /**
         * Given an a DOM element, this will check to see whether or not it's in the viewport
         * and return a boolean accordingly.
         *
         * @param      {element}   element  The element to check if it's in the viewport
         * @return     {boolean}  True if the element's in the viewport, false otherwise.
         */
        isInViewport: function(element) {
            var rect = element.getBoundingClientRect();
            var html = document.documentElement;
            return (
                rect.top >= -self.leeway &&
                rect.left >= -self.leeway &&
                rect.bottom <= ((window.innerHeight || html.clientHeight) + self.leeway) &&
                rect.right <= ((window.innerWidth || html.clientWidth) + self.leeway)
            );
        },

        /**
         * Given a possible oEmbed URL, this will fire the AJAX request for the oEmbed code, and then
         * resolve with the result. If the request was successful, this function will be resolved with
         * the oEmbed code. If no `html` property was returned or the AJAX call failed, this will
         * reject with `false.`
         * 
         * This uses jQuery's `Deferred()`, so this will have `.done()` and `.fail()` callbacks you can
         * hook into. 
         *
         * @param      {string}  url    The url to process
         * @return     {jQuery.Deferred}  A deferred object allowing this function to run asynchronously.
         */
        processoEmbed: function(url) {
            var r = $.Deferred();
            var result = false;

            var url = self.getoEmbedURL(url);
            var data_type = 'jsonp';
            if(url.includes('youtube.com') || url.includes('/wp-json/stereogum/v1/oembed')) {
              data_type = 'json';
            }

            $.ajax({
                url: url,
                dataType: data_type,
                contentType: 'application/json+oembed',
                success: function(response) {
                    if (response.error || !response.html) {
                        r.reject(false);
                    } else {
                        let html = response.html;

                        if (html.includes('src="https://www.youtube.com')) {
                            html = html.replace(/width=\"\d+?\"/i, 'width="560"');
                            html = html.replace(/height=\"\d+?\"/i, 'height="315"');
                            html = '<div class="embed-content iframe-responsive">' + html + '</div>';
                        } else {
                            html = html.replace('480', '560');
                            html = html.replace('270', '315');
                            html = '<div class="embed-content">' + html + '</div>';
                        }
                        
                        r.resolve(html);
                    }
                },
                error: function(response) {
                    r.reject(false);
                }
            });

            return r;
        },

        /**
         * Given a URL, this will determine the appropriate oEmbed request URL and return it, allowing you
         * to send it an AJAX request later.
         *
         * @param      {string} url The oEmbed URL.
         * @return     {string} The oEmbed request URL.
         */
        getoEmbedURL: function(url) {
            var get = false;

            // some providers don't seem to like the www. in URLs, so remove it
            url = url.replace(/^(https?:\/\/)(www\.)(.*)/i, '$1$3');

            // FB, Spotify and YouTube don't work with noEmbed, so we have to use their endpoints
            switch (true) {
                case url.includes('youtube.com'): get = 'https://www.youtube.com/oembed/?url='; break;
                case url.includes('youtu.be'): get = 'https://www.youtube.com/oembed/?url='; break;
                case url.includes('facebook.com'): get = '/wp-json/stereogum/v1/oembed?url='; break;
                case url.includes('instagram.com'): get = '/wp-json/stereogum/v1/oembed?url='; break;
                case url.includes('instagr.am'): get = '/wp-json/stereogum/v1/oembed?url='; break;
                case url.includes('spotify.com'): get = 'https://embed.spotify.com/oembed/?url='; break;
                default: get = 'https://noembed.com/embed?url=';
            }

            return get + encodeURIComponent(url);
        },

        /**
         * Given a string of comment content, this will "enrich" it, adding tags to image links,
         * hrefs, and marking possible oembed links so they can be fetched later.
         *
         * @param      {string}  string  The comment content string to enrich
         * @param      {bool} lookInPTags Whether to look inside <p> tags in the comment (as WP loves to auto-add them)
         * @return     {string}  The comment content string, with tags added
         */
        enrich: function(string, lookInPTags) {
            var stringWithoutTags = string;

            if (lookInPTags === true) {
                stringWithoutTags = string.replace(/<\/?p>/ig, '').trim();
            }

            stringWithoutTags = stringWithoutTags.replace(/<.*?>(?:.*?<\/.*?>)?/ig, '');

            var matches = stringWithoutTags.match(/https?\:\/\/[\w\d%&@#-=~_|!?:,.\/]+/ig);

            if (matches) {
                matches.forEach(function (match) {
                    var replacement = '';
                    if (/\.(?:jpe?g|gif|png)$/i.test(match)) {
                        replacement = "<img src=\"" + match + "\">";
                    } else if (ajax_comments_vars.getoEmbeds && /^https?:\/\/(?:www\.)?(?:facebook|fb|twitter|t\.co|instagr|instagram|soundcloud|imgur|giphy|gph\.to|(?:open\.)?spotify|youtu\.?be)/i.test(match)) {
                        // mark it for an oembed check later
                        replacement = "<a href=\"" + match + "\" class=\"check-oEmbed\">" + match + "</a>";
                    } else {
                        replacement = "<a href=\"" + match + "\">" + match + "</a>";
                    }

                    string = string.replace(match, replacement);
                });
            }

            return string;
        }
    };

    $(document).ready(function() {
        plugins.lazyoEmbeds.init();
    });
})(jQuery, smg.plugins);
