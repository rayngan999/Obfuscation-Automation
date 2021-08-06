(function () {
    'use strict';

    function init($, underscore) {
        // using .click instead of on('click', so that it works in jquery 1.6 on the non-redesigned research side.
        $(document).on('click', '[data-scroll]', function(e){
            e.preventDefault();

            // Get all the options
            var target = $(this).attr('href');
            target = $(this).attr('data-scroll-target') || target;
            var offset = parseInt($(this).attr('data-scroll-offset'));
            var navbar = $(this).attr('data-scroll-navbar');
            var tab = $(this).attr('data-scroll-tab');
            var scrollSpeed = $(this).attr('data-scroll-speed');

            // Set offset to 0 if not provided
            if (!offset) {
                offset = 0;
            }

            var elementHeightOffsetName = $(this).attr('data-scroll-element-height-offset');
            if (elementHeightOffsetName) {
                var elementHeightOffset = $(elementHeightOffsetName);
                if (elementHeightOffset) {
                    var elementHeightOffsetClass = elementHeightOffset.attr("class");
                    var alwaysOffset = $(this).attr('data-scroll-always-offset');
                    if ((elementHeightOffsetClass && elementHeightOffsetClass.indexOf("float") < 0) || alwaysOffset === "true") {
                        offset += elementHeightOffset.height();
                    }
                }
            }

            var jazzScroll = function () {
            	var targetOffset = $(target).offset();
            	if (targetOffset) {
                   if (scrollSpeed) {
                       $('body, html').stop().animate({
                           scrollTop: targetOffset.top - offset
                       }, parseInt(scrollSpeed));
                   }
                   else {
                       $('body, html').stop().animate({
                           scrollTop: targetOffset.top - offset
                       });
                   }
					}
            };

            // If part of a navbar, collapse it
            if (navbar && $( window ).width() < 769) { // screen-sm-max = 768 + 1
                $(navbar).collapse('hide');
            }

            if (tab && !$(tab).hasClass('active')) {
                $(tab + ' a').tab('show').on('shown.bs.tab', function() {
                    jazzScroll();
                    $(tab + ' a').off('shown.bs.tab');
                });
            }
            else {
                jazzScroll();
            }
        });

        function initNavBarSelection() {
            var scrollLinkAndTargetPairs = (function() {
                var scrollTargetsByName = {};
                $('[data-nav-bar-target]').each(function () {
                    var targetName = $(this).attr('data-nav-bar-target');
                    if (targetName) {
                        scrollTargetsByName[targetName] = this;
                    }
                });

                var pairs = [];
                $('[data-nav-bar-link]').each(function () {
                    var targetName = $(this).attr('data-nav-bar-link');
                    if (targetName) {
                        var targetElement = scrollTargetsByName[targetName];
                        if (targetElement) {
                            pairs.push({link: this, target: targetElement, selectedStyle: $(this).attr('data-nav-bar-link-selected-style'), name: targetName});
                        }
                    }
                });

                return pairs;
            })();

            function setNavBarSelectedSection() {
                var windowHeight = window.innerHeight;
                var maxVisibleHeight = null;
                var pairsWithStyleApplied = [];

                scrollLinkAndTargetPairs.forEach(function (pair) {
                    var elementRect = pair.target.getBoundingClientRect();
                    var visibleHeight = Math.max(Math.min(elementRect.bottom, windowHeight) - Math.max(elementRect.top, 0), 0);

                    if (pairHasSelectedStyle(pair)) {
                        pairsWithStyleApplied.push(pair);
                    }

                    if (visibleHeight > 0 && (!maxVisibleHeight || visibleHeight > maxVisibleHeight.visibleHeight)) {
                        maxVisibleHeight = {pair: pair, visibleHeight: visibleHeight};
                    }
                });

                pairsWithStyleApplied.forEach(function (pair) {
                    if (!maxVisibleHeight || pair.name != maxVisibleHeight.pair.name) {
                        $(pair.link).removeClass(pair.selectedStyle);
                    }
                });

                if (maxVisibleHeight && maxVisibleHeight.pair.selectedStyle && !pairHasSelectedStyle(maxVisibleHeight.pair)) {
                    $(maxVisibleHeight.pair.link).addClass(maxVisibleHeight.pair.selectedStyle);
                }
            }

            function pairHasSelectedStyle(pair) {
	             var classAttr = $(pair.link).attr("class");
                return classAttr && pair.selectedStyle && classAttr.indexOf(pair.selectedStyle) >= 0;
            }

            if (scrollLinkAndTargetPairs) {
                var throttledNavBarSelector = underscore.throttle(setNavBarSelectedSection, 500, {leading: false});

                setTimeout(throttledNavBarSelector, 250);

                $(window).scroll(throttledNavBarSelector);
                $(window).resize(throttledNavBarSelector);
            }
        }

        $(document).ready(function () {
            initNavBarSelection();
        });
    }

    require(['jquery', 'lib/underscore'], init);
})();