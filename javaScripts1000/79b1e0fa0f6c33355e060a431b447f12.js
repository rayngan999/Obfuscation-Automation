/*

Flow by WeTheme (http://www.wetheme.com)
Custom JS

*/

(function ($, wetheme) {

/* Mapping from sectionId to Slider instance */
var sliders = {};

function toHandle(o) {
    return o.replace(/[()]/g, '').replace(/[\W]/g, '-');
}

function block_select(event) {
    // Stop animation and show block when selected in the Slideshow section
    var slider = sliders[event.detail.sectionId];
    if (slider) {
        var index = parseInt(event.target.dataset.slideIndex);
        slider.show_slide(index);
    }

    // Open megamenu which is being edited (both normal menu and sticky menu)
    if (event.target.dataset.megaMenuBlockId) {
        $('[data-mega-menu-block-id=' + event.target.dataset.megaMenuBlockId + ']').closest('li.mega-menu').addClass('force-open');
        $('.overlay-header').addClass('force-hover');
    }
}

function block_deselect(event) {
    // Resume animation when block is deselected in the Slideshow section
    var slider = sliders[event.detail.sectionId];
    if (slider) {
        slider.start_animation();
    }

    // Close opened megamenus
    $('li.mega-menu.force-open').removeClass('force-open');
    $('.overlay-header').removeClass('force-hover');
}

function get_section_name(event) {
    var section = null;
    if (event && event.detail) {
        var data = {};
        var dataset = event.target.dataset;
        for (var key in dataset) {
            if (dataset.hasOwnProperty(key) && key.indexOf('themeEditorSection-') === 0) {
                data = JSON.parse(dataset[key]);
            }
        }
        if (data.hasOwnProperty('type')) {
            section = data['type'];
        }
    }
    return section;
}

function section_select(event) {
    // Retrigger ken burns when a new image is selected.
    if(event.target.classList.contains('image-with-text-overlay-wrapper') ||
       event.target.classList.contains('image-with-text-wrapper') ) {
        if(event.detail.load == true) {
            reapply_kb_effect(event.target);
        }
    }
}

document.addEventListener('shopify:section:select', section_select);
document.addEventListener('shopify:section:load', load_all);
document.addEventListener('shopify:section:unload', unload_all);
window.addEventListener("load", load_all);

// Listen to stylesheet changes in Shopify theme editor
// (e.g. General settings -> Typography) - it doesn't emit section change events
try {
    window.parent.messenger.on('stylesheetContent', load_all);
    window.addEventListener('unload', function () {
        window.parent.messenger.off('stylesheetContent', load_all);
    });
} catch (e) {
    // Unable to attach to stylesheetContent change, maybe we're not in shopify admin
}


// Run the fade in animation as soon as possible, don't wait for full content load
$(document).ready(function () {
    load_show_on_scroll();
});

function load_all(event) {
    document.addEventListener('shopify:block:select', block_select);
    document.addEventListener('shopify:block:deselect', block_deselect);

    var section = get_section_name(event);

    if (!section || section === 'products-block') {
        load_homepage_fading();
        load_featured_masonry();
    }
    load_blog_masonry();
    if (!section || section === 'slideshow') {
        // Do not reload slider when header or footer is changed
        load_slider(event && event.target);
        header_height();
        $(window).off('resize', header_height).on('resize', header_height);
    }
    if (!section || section === 'featured-blog') {
        load_carousel();
    }
    if (!section || section === 'text-adverts') {
        load_TextAdvertCarousel();
    }
    if (!section || section === 'product-template') {
        load_swatches();
        load_reviews();
        load_imageZoomEvents();
        load_recently_viewed();
        load_sticky();
    }
    if (!section || section === 'product-recommendations') {
        load_product_recommendations();
    }
    if (!section || section === 'indiv-product') {
        load_product_review_badges();
    }
    if (!section || section === 'product-template' || section === 'indiv-product') {
        load_ownCarousel();
        load_quantity_selector();
        load_option_selectors(event.target);
        load_tabs();
        load_readmore();
    }
    if (!section || section === 'header') {
        load_accessible_menu();
        load_sticky();
        load_sticky_header();
        load_log_in();
        load_search_drawer();
        load_cart_indicator();
    }
    load_ken_burns();
    if (!section || section === 'collection-list') {
        load_home_collection();
    }
    if (!section || section === 'products-block') {
        load_product_block();
    }
    if (!section || section === 'home-hero' || section === 'video') {
        load_youtube_section();
        load_vimeo_api();
    }
    if (!section || section === 'home-hero') {
        load_hero();
    }
    if (!section || section === 'map' || section === 'page-contact-template') {
        load_googlemaps();
    }
    if (!section || section === 'feature-row' || section === 'image-with-text-overlay' || section === 'collection-template' || section === 'page-contact-template' || section === 'list-collections-template') {
        load_parallax();
    }
    if (!section || section === 'collection-template') {
        load_collection_tag_filter();
        load_pagination();
        load_product_review_badges();
        load_image_badge_positions();
    }
    if (!section || section === 'featured-products') {
        load_product_review_badges();
        load_image_badge_positions();
    }
    if (!section || section === 'collection-template' || section === 'featured-products' || section === 'product-template' || section === 'list-collections-template' || section === 'product-recommendations') {
        load_shop_now();
    }
    if (!section) {
        load_drawer_sticky_menu();
    } else {
        load_show_on_scroll();
    }

    //Close drawers when clicked on drawer overlay
    $('#DrawerOverlay').off('click').on('click', function (evt) {
        if (timber.LeftDrawer.drawerIsOpen) {
            timber.LeftDrawer.close();
            evt.stopImmediatePropagation();
        }
        if (timber.RightDrawer.drawerIsOpen) {
            timber.RightDrawer.close();
            evt.stopImmediatePropagation();
        }
    });

    // Close drawers when escape is pressed if they are open
    $(document).on('keyup', function(evt) {
      if (evt.keyCode == 27) { // escape key maps to keycode `27`
        // Target desktop drawer only
        if (timber.RightDrawer.drawerIsOpen) {
            timber.RightDrawer.close();
            evt.stopImmediatePropagation();
        }
      }
    });

    // Hide mobile search bar when disabled
    var has_search = $('.search-button').length > 0;
    $('.input-group.search-bar').toggle(has_search);

    load_page_fade();
}

function unload_all() {
    document.removeEventListener('shopify:block:select', block_select);
    document.removeEventListener('shopify:block:deselect', block_deselect);
    sliders = {};
}


function load_page_fade() {
    document.body.classList.add('loaded');

    window.addEventListener('beforeunload', function () {
      
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        
      	if(!isSafari){ 
          document.body.classList.add('unloading');
        }
        
    });
}

// Show on scroll animation
function load_show_on_scroll() {
    $(window).on('scroll', function () {
        show_on_scroll_checker();
    });
    show_on_scroll_checker();

    new WOW().init();
}

function show_on_scroll_checker() {
    var window_height = $(window).height();
    $('.show-on-scroll').each(function (index, section) {
        var rect = section.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top < window_height) {
            $(section).removeClass('show-on-scroll').addClass('shown-on-scroll animated fadeInUp');
        }
    });
}


// Fading on homepage blocks
function load_homepage_fading() {
    apply_fade_effect('.homepage-featured-products-grid', '.homepage-featured-grid-item');
    apply_fade_effect('.collection-grid', '.homepage-collection-grid-item');
}

function apply_fade_effect(parent_selector, child_selector) {
    $(parent_selector).each(function (index, parent) {
        apply_fade_effect_to_element(parent, child_selector);
    });
}

function apply_fade_effect_to_element(element, child_selector) {
    var children = $(element).find(child_selector);

    children.on('mouseenter mouseleave', function(e) {
        children.not(this).stop(true).fadeTo('fast', e.type === 'mouseenter' ? 0.2 : 1);
    });
}

// Mobile Blog

function load_carousel() {
    $(".homepage-blog-mobile").addClass('owl-carousel owl-theme').owlCarousel({
       items: 1,
       autoHeight: true
    });

    $("#homepage-collection-mobile").addClass('owl-carousel owl-theme').owlCarousel({
       items: 1,
       autoHeight: true
    });
}

function load_sticky() {
    var $productSticky = $('.product-sticky.ui.sticky');
    if ($productSticky.length === 0) {
        return;
    }

    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 768) {
            var context = $('.context');

            if (context.height() > $productSticky.height()) {
                var $site_header = $('.site-header');
                var offset = 0;
                if ($site_header.hasClass('sticky-header')) {
                    offset = $site_header.outerHeight() || 0;
                }
                $productSticky
                    .sticky({
                        context: '.context',
                        // We might need offset for custom header
                        offset: offset,
                        bottomOffset : 50,
                        observeChanges: true
                   });
            }
        } else {
            // console.log(windowsize);
        }
    }
    // Execute on load
    checkWidth();
    // Reexecute on page resize
    $(window).on('resize', checkWidth);
    // Reexecute when product review form opens (it changes page height)
    if ($('#shopify-product-reviews').length >= 0) {
        // The reviews will appear in the future, we need to wait for it
        var wait_for_review = setInterval(function () {
            var review_button = $('.spr-summary-actions-newreview');
            if (review_button.length === 0) {
                return;
            }
            clearInterval(wait_for_review);
            review_button.on('click', function () {
                // Reexecute the sticky
                checkWidth();
            });
        }, 1000);
    }
}

// Quantity Selector

function load_quantity_selector() {
    var $quantity = $('.nonajax-quantity-selector');
    if ($quantity.length === 0) {
        return;
    }

    var $input = $quantity.find('input');
    $quantity.find('.js-qty__adjust--minus').on('click', function () {
        $input.val(Math.max(1, parseInt($input.val()) - 1));
    });
    $quantity.find('.js-qty__adjust--plus').on('click', function () {
        $input.val(parseInt($input.val()) + 1);
    });
}

// Load ownCarousel on Product
var currentIndex = 0;

function load_ownCarousel_ondemand() {
    var all_product_images = $(".product-images-slider-mobile");
    if (all_product_images.length === 0) {
        return;
    }
    var isMobile = window.matchMedia('only screen and (max-width: 480px)').matches;
    all_product_images.each(function () {
        var product_images = $(this);
        var product_single = product_images.closest('.product-single')[0];
        var forceSlider = product_images.hasClass('product-images-slider-desktop');
        if (isMobile || forceSlider) {
            if (!product_images.hasClass('owl-carousel')) {
                var is_shop_now = product_images.closest('#ShopNowContainer').length > 0;
                var options = {
                    autoHeight: true,
                    dots: true
                };
                var owlInternal;
                if (is_shop_now) {
                    // Shop now
                    options.center = true;
                    options.items = 2;
                } else {
                    // Mobile menu
                    options.items = 1;
                }

                function fixTabIndex() {
                    requestAnimationFrame(function () {
                        // Disable tabindex in all inactive tabs
                        product_images.find('.owl-item button,.owl-item model-viewer, .owl-item input, .owl-item .plyr,.owl-item iframe').attr('tabindex', '-1');
                        if (options.center) {
                            product_images.find('.owl-item.active.center button, .owl-item.active.center model-viewer, .owl-item.active.center input,.owl-item.active.center iframe').attr('tabindex', '0');
                        } else {
                            product_images.find('.owl-item.active button, .owl-item.active model-viewer, .owl-item.active input,.owl-item.active iframe').attr('tabindex', '0');
                        }
                    });
                }

                options.onChanged = function (e) {
                    var newIndex = e.page.index !== -1 ? e.page.index : options.startPosition;
                    if (newIndex === currentIndex) {
                        return;
                    }
                    currentIndex = newIndex;
                    var evt = new CustomEvent('product-media-select', {
                        detail: {
                            index: currentIndex,
                            forceLoad: false,
                        },
                    });
                    product_single.dispatchEvent(evt);
                    fixTabIndex()
                }

                // Set positition to already selected element (when resized from desktop view)
                var index = product_images.find('.product-single__media--first').index();
                options.startPosition = index > 0 ? index : 0;
                currentIndex = options.startPosition;

                var owl = product_images.addClass('owl-carousel owl-theme').owlCarousel(options);
                owlInternal = owl.data('owl.carousel');

                function dragStart(event) {
                    // Prevent dragStart when current media is active (video playing, model active, ...)
                    if (['BUTTON', 'INPUT', 'MODEL-VIEWER'].indexOf(event.target.tagName) >= 0) {
                        console.log('Drag prevented, clicked on ', event.target)
                        return;
                    }
                    owlInternal.onDragStart.call(owlInternal, event);
                }
                owlInternal.$stage.off('mousedown.owl.core').on('mousedown.owl.core', dragStart);
                owlInternal.$stage.off('touchstart.owl.core').on('touchstart.owl.core', dragStart);

                function refreshHeight() {
                    setTimeout(function () {
                        var heightDiff = Math.abs(owl.find('.owl-item.active').height() - owl.find('.owl-height').height());
                        if (heightDiff > 1) {
                            owl.trigger('refresh.owl.carousel');
                        }
                    }, 100);
                }

                product_images.find('.product-single__media').off('media-play media-load').on('media-play media-load', refreshHeight);
                product_images.find('.owl-item.active img').one('load', refreshHeight);
                fixTabIndex();

                product_images.find('.owl-dot').off('keydown').on('keydown', function (e) {
                    if (e.keyCode === 13 && e.target.classList.contains('active')) {
                        // Enter pressed on currently active dot, focus the media
                        var evt = new CustomEvent('product-media-select', {
                            detail: {
                                index: currentIndex,
                                forcePlay: true,
                                focus: true,
                            },
                        });
                        product_single.dispatchEvent(evt);
                    }
                });
            }
        } else {
            if (product_images.hasClass('owl-carousel')) {
                product_images.removeClass('owl-carousel owl-theme').owlCarousel('destroy');
                var evt = new CustomEvent('product-media-select', {
                    detail: {
                        index: currentIndex,
                        forceLoad: true,
                    },
                });
                product_single.dispatchEvent(evt);
            }
            if (product_images.hasClass('product-single__thumbnails')) {
                product_images.find('.product-single__media').attr('tabindex', '0');
            }
        }
    });
}

function load_ownCarousel() {
    window.removeEventListener('resize', load_ownCarousel_ondemand);
    window.addEventListener('resize', load_ownCarousel_ondemand);
    load_ownCarousel_ondemand();
}

function Media(parent) {
    this.parent = parent;
    this.media_id = parent.dataset.mediaId;
    this.type = parent.dataset.mediaType;
    this.loaded = false;
    this.active = false;
    this.controller = null;
}

Media.prototype.load = function () {
    return new Promise(function (resolve) {
        if (this.loaded) {
            resolve();
            return;
        }
        var template = this.parent.querySelector('template');
        if (!template) {
            this.on_load();
            resolve();
            return;
        }
        var fragment = document.importNode(template.content, true);
        var oldMedia = this.parent.querySelector('.media-wrapper');
        if (oldMedia) {
            this.parent.removeChild(oldMedia);
        }
        this.parent.insertBefore(fragment, template);

        switch (this.type) {
            case 'model':
                window.Shopify.loadFeatures([
                    {
                        name: 'model-viewer-ui',
                        version: '1.0',
                    },
                ], function () {
                    this.controller = new Shopify.ModelViewerUI(this.parent.querySelector('model-viewer'));

                    // Don't interact with the rest of the page when model is not disabled
                    this.controller.viewer.parentElement.addEventListener('mouseup', function (e) {
                        e.stopPropagation = function () {};
                    }.bind(this), {
                        capture: true,
                    });

                    // Prevent activating the viewer right after it was paused when clicked in position of the button
                    this.controller.elements.controlButton.addEventListener('click', function (e) {
                        e.stopImmediatePropagation();
                    }.bind(this), { capture: true });

                    this.controller.viewer.addEventListener('shopify_model_viewer_ui_toggle_pause', this.on_pause.bind(this));
                    this.controller.viewer.addEventListener('shopify_model_viewer_ui_toggle_play', this.on_play.bind(this));

                    this.on_load();
                    resolve();
                }.bind(this));
                break;
            case 'video':
                window.Shopify.loadFeatures([
                    {
                        name: 'video-ui',
                        version: '1.0',
                        onLoad: function () {
                            var video = this.parent.querySelector('video');
                            var loop = video.parentNode.dataset.videoLoop === 'true';
                            this.controller = new Shopify.Plyr(video, {
                                loop: {
                                    active: loop,
                                },
                                focusOnPlay: false,
                            });
                            video.addEventListener('play', this.on_play.bind(this));
                            video.addEventListener('pause', this.on_pause.bind(this));
                            video.addEventListener('ended', this.on_pause.bind(this));

                            this.on_load();
                            resolve();
                        }.bind(this),
                    },
                ]);
                break;
            case 'external_video':
                load_youtube_api().then(function () {
                    var iframe = this.parent.querySelector('iframe');
                    var loop = iframe.parentNode.dataset.videoLoop === 'true';
                    new window.YT.Player(iframe, {
                        events: {
                            onReady: function (event) {
                                this.controller = event.target;
                                this.on_load();
                                resolve();
                            }.bind(this),
                            onStateChange: function (event) {
                                if (event.data === window.YT.PlayerState.PLAYING) {
                                    this.on_play();
                                } else if (event.data === window.YT.PlayerState.PAUSED) {
                                    this.on_pause();
                                } else if (event.data === window.YT.PlayerState.ENDED) {
                                    if (loop) {
                                        this.controller.playVideo();
                                    } else {
                                        this.on_pause();
                                    }
                                }
                            }.bind(this),
                            onError: function (event) {
                                console.warn('Youtube video error', event, event.data);
                                this.on_pause();
                            }.bind(this),
                          }
                    });
                }.bind(this));
                break;
            case 'image':
                this.parent.querySelector('.media-wrapper img').addEventListener('load', function () {
                    load_imageZoomEvents();
                    this.on_load();
                    resolve();
                }.bind(this));
                break;
            default:
                this.on_load();
                resolve();
        }
    }.bind(this));
};

Media.prototype.on_load = function () {
    this.loaded = true;
    this.parent.classList.add('product-single__media--loaded');

    var e = new CustomEvent('media-load', {
        detail: {
            parent: this.parent,
            media: this,
        },
    });
    this.parent.dispatchEvent(e);
    if (window.ShopifyXR && window.ShopifyXR.setupXRElements) {
        window.ShopifyXR.setupXRElements();
    }
}

Media.prototype.play = function () {
    if (!this.loaded) {
        this.load().then(this._play.bind(this));
    } else {
        this._play();
    }
};

Media.prototype._play = function () {
    switch (this.type) {
        case 'model':
            this.controller.play();
            this.on_play();
            break;
        case 'video':
            this.controller.play().then(this.on_play.bind(this)).catch(console.warn);
            break;
        case 'external_video':
            this.controller.playVideo();
            this.on_play();
            break;
    }
};

Media.prototype.on_play = function () {
    this.active = true;
    this.parent.classList.add('product-single__media--active');
    if (!this.loaded) {
        this.loaded = true;
        this.parent.classList.add('product-single__media--loaded');
    }
    var e = new CustomEvent('media-play', {
        detail: {
            parent: this.parent,
            media: this,
        },
    });
    this.parent.dispatchEvent(e);

    if (document.activeElement === document.body) {
        // No element has focus, focus this media
        this.focus();
    }
};

Media.prototype.autoplay = function () {
    if ($(window).width() > 768) {
        this.play();
    }
};

Media.prototype.pause = function () {
    if (!this.active) {
        return;
    }
    switch (this.type) {
        case 'model':
            break;
        case 'video':
            this.controller.pause();
            break;
        case 'external_video':
            this.controller.pauseVideo();
            break;

    }
    this.on_pause();
};

Media.prototype.togglePlay = function () {
    if (this.active) {
        this.pause();
    } else {
        this.play();
    }
}

Media.prototype.on_pause = function () {
    this.active = false;
    this.parent.classList.remove('product-single__media--active');
    var e = new CustomEvent('media-pause', {
        detail: {
            parent: this.parent,
            media: this,
        },
    });
    this.parent.dispatchEvent(e);
};

Media.prototype.focus = function () {
    switch (this.type) {
        case 'video':
            this.parent.querySelector('.plyr').focus();
            break;
        case 'model':
            var viewer = this.parent.querySelector('model-viewer');
            if (viewer && viewer.shadowRoot) {
                viewer.focus();
            } else {
                // Not yet loaded, try later
                setTimeout(this.focus.bind(this), 1000);
            }
            break;
        case 'external_video':
            this.parent.querySelector('iframe').contentWindow.focus();
            break;
        default:
            this.parent.focus();
    }
}

Media.prototype.destroy = function () {

};

// Load Product

function Product(element) {
    this.element = element;
    if (!this.element) {
        return;
    }
    this.$element = $(this.element);
    this.sectionId = this.element.dataset.sectionId;
    var product_json_el = document.querySelector('#ProductJson-' + this.sectionId);
    if (!product_json_el) {
        // No product on the page - maybe just product placeholder
        return;
    }
    this.product = JSON.parse(product_json_el.innerText);
    this.selectors = {};

    this.$media_wrapper = this.$element.find('.product-single__medias');
    this.$medias = this.$media_wrapper.find('.product-single__media');

    var isThumbnailsEnabled = this.$media_wrapper.hasClass('product-single__thumbnails');

    if (!isThumbnailsEnabled) {
        // Load zoom effect for full-size images when enabled
        this.$element.find('[data-image-zoom-enable="true"]').addClass('product-single__media--selected');
    }

    this.media_by_id = new Map();
    var isMobile = window.matchMedia('only screen and (max-width: 480px)').matches;
    Array.prototype.forEach.call(
        this.element.querySelectorAll('.product-single__media'),
        function (media_root) {
            var media = new Media(media_root, );
            this.media_by_id.set(media_root.dataset.mediaId, media);

            // Load first thumbnail when not on mobile
            if (media_root.classList.contains('product-single__media--selected') && isThumbnailsEnabled && !isMobile) {
                this.on_media_element_select(media_root, { load: true });
            }
        }.bind(this),
    );

    if (this.$element.find('.product-single__view-in-space').length > 0) {
        // The "View in your space" button is there => we have a model. Load XR library so
        // it can show/hide the button based on browser/device support
        window.Shopify.loadFeatures([
            {
                name: 'shopify-xr',
                version: '1.0',
            },
        ]);
        document.addEventListener('shopify_xr_launch', function () {
            // The launch of XR viewer triggers beforeload event, we need to reappear page content
            setTimeout(function () {
                document.body.classList.remove('unloading');
            }, 100);
        });
    }

    this.$add_to_cart_form = this.$element.find('#AddToCartForm');
    this.$selects = this.$element.find('.selector-wrapper select');
    this.$selects.on('change', this.on_select_change.bind(this));
    this.$original_select = this.$element.find('.original-select');
    this.$swatch_inputs = this.$element.find('#AddToCartForm').find('.swatch input');

    this.thumbnail_changes_variant = this.$element.find('#thumbnail_changes_variant').val() === 'true';
    this.$main_image = this.$element.find('.product-single__photo');
    this.$main_image_wrapper = this.$main_image.closest('.product-single__photo-wrapper');

    this.$medias.off('click keydown').on('click keydown', function (e) {
        if (e.type === 'keydown') {
            if (e.keyCode !== 13 && e.keyCode !== 27) {
                return;
            }
            if (e.target.classList.contains('shopify-model-viewer-ui__button') || e.target.classList.contains('plyr__controls__item')) {
                return;
            }
        }
        e.preventDefault();

        if (e.target.classList.contains('product-single__view-in-space')) {
            // Don't do anything on "view in your space" click, it's handled by Shopify XR library
            return;
        }

        if (e.target.tagName === 'MODEL-VIEWER' || e.target.classList.contains('shopify-model-viewer-ui__controls-overlay')) {
            // Don't do anything on 3d model overlay click, it will trigger an event itself
            return;
        }

        const isZoomDisabled = e.currentTarget.dataset.imageZoomEnable === 'false';
        const isLoaded = e.currentTarget.classList.contains('product-single__media--loaded');
        const isActive = e.currentTarget.classList.contains('product-single__media--active')

        if (isThumbnailsEnabled) {
            this.on_thumbnail_click(e.currentTarget, true);
        }

        if (isZoomDisabled && !isThumbnailsEnabled) {
            // It's an full-size image with zoom disabled, do nothing - preview is enough
            return;
        }

        if (isLoaded && isActive) {
            // Loaded and active media will handle click internally in the component itself
            return;
        }

        this.on_media_element_select(e.currentTarget, { load: true, togglePlay: true });
    }.bind(this));

    this.$element.off('product-media-select').on('product-media-select', this.on_media_select.bind(this));
    this.fix_media_spacing(this.$media_wrapper.find('.product-single__media--selected')[0]);

    if (this.$swatch_inputs.length > 0) {
        // Check swatches based on variant
        this.on_swatch_change();
        this.$swatch_inputs.on('change', this.on_swatch_change.bind(this));
    } else {
        // Fill variant based on selection
        this.on_select_change();
    }

}

Product.prototype.set_variant_options = function (values) {
    var matching_variants = this.product.variants.filter(function (variant) {
        for (var i = 0; i < values.length; i++) {
            if (values[i] !== variant.options[i]) {
                return false
            }
        }
        return true;
    });
    if (matching_variants.length === 0) {
        this.update_variant(null);
    } else {
        this.update_variant(matching_variants[0]);
    }
};

Product.prototype.on_select_change = function () {
    var values = this.$selects.map(function (index, select) {
        return $(select).val();
    });
    var matching_variants = this.product.variants.filter(function (variant) {
        for (var i = 0; i < values.length; i++) {
            if (values[i] !== variant.options[i]) {
                return false;
            }
        }
        return true;
    });
    if (matching_variants.length === 0) {
        this.update_variant(null);
    } else {
        this.update_variant(matching_variants[0]);
    }
};

Product.prototype.fix_media_spacing = function (element) {
    if(element) {
        // Add padding for absolutely positioned media above the thumbnails
        var percent = 100 / parseFloat(element.dataset.mediaAspect);
        var extra_height = (window.ShopifyXR ? 44 : 0) + 20;
        this.$media_wrapper.css('padding-top', 'calc(' + percent + '% + ' + extra_height + 'px)');
    }
}
Product.prototype.on_swatch_change = function () {
    var values = [];
    this.$add_to_cart_form.serializeArray().forEach(function (option) {
        if (option.name.indexOf('option-') === 0) {
            values[parseInt(option.name.split('-')[1], 10)] = option.value;
        }
    });
    this.set_variant_options(values);
};

Product.prototype.on_media_select = function (e) {
    var isMobile = window.matchMedia('only screen and (max-width: 480px)').matches;
    var element = this.$element.find('.product-single__media')[e.detail.index];
    var media = this.media_by_id.get(element.dataset.mediaId);
    var isVideo = media.type === 'video' || media.type === 'external_video';
    var isQuickShop = this.$element.closest('#ShopNowContainer').length > 0;
    this.on_media_element_select(element, {
        load: e.detail.forceLoad,
        forcePlay: e.detail.forcePlay || (!isMobile && !isQuickShop && isVideo), // Autoplay video on non-mobile and not in quick shop
        focus: e.detail.focus,
    });
}

Product.prototype.on_media_element_select = function (element, options) {
    if (!element) {
        return;
    }
    var media = this.media_by_id.get(element.dataset.mediaId);
    // Pause all others
    this.media_by_id.forEach((otherMedia) => {
        if (otherMedia.media_id !== media.media_id) {
            otherMedia.pause();
        }
    });
    var $other_medias = this.$medias.not(element)
    $other_medias.removeClass('product-single__media--selected');

    element.classList.add('product-single__media--selected')
    this.fix_media_spacing(element);

    if (options.togglePlay) {
        media.togglePlay();
    } else if (options.forcePlay) {
        media.play();
    } else if (options.load) {
        media.load();
    }
    if (options.focus) {
        media.focus();
    }
}

Product.prototype.on_thumbnail_click = function (thumbnail, update_variant) {
    // select variant
    if (this.thumbnail_changes_variant && update_variant) {
        var variant_id = $(thumbnail).data('variant');
        if (variant_id) {
            this.on_variant_selected(variant_id);
        }
    }
}

Product.prototype.on_variant_selected = function (variant_id) {
    var matching_variants = this.product.variants.filter(function (variant) {
        return variant.id == variant_id;
    });
    if (matching_variants.length === 0) {
        this.update_variant(null);
    } else {
        var variant = matching_variants[0];
        this.update_variant(matching_variants[0]);
        for (var i = 0; i < variant.options.length; i++) {
            $('#SingleOptionSelector-' + i).val(variant.options[i]);
        }
    }
};

Product.prototype.update_variant = function (variant) {
    timber.productPage({
        money_format: window.Currency ? window.Currency.moneyFormats[window.Currency.shopCurrency].money_format : window.default_currency_format,
        variant: variant,
        element: this.$element
    });
    if (variant) {
        if (variant.featured_media) {
            // update selected images from thumbnails
            var $newImageThumb = this.$element.find('[data-media-id$="' + variant.featured_media.id + '"]');
            if ($newImageThumb.length > 0) {
                // Selecting `--first` will use flexbox order to make it first
                this.$element.find('.product-single__media--first').removeClass('product-single__media--first');
                $newImageThumb.addClass('product-single__media--first');
                var owl = this.$element.find('.owl-carousel');
                if (owl.length > 0) {
                    owl.trigger('to.owl.carousel', $newImageThumb.closest('.owl-item').index());
                }

                this.on_media_element_select($newImageThumb[0], { load: true });

                // Scroll to top of the images (as selected image will be first)
                $.smoothScroll({
                    offset: -$('.site-header.sticky-header').outerHeight(),
                    scrollTarget: 'div.product-single__photos'
                });
            }
        }

        this.$original_select.val(variant.id);

        var is_indiv_product = $(this.element).closest('.shopify-section').hasClass('homepage-section--indiv-product-wrapper');
        var has_more_variants = this.product.variants.length > 1;
        if (history.replaceState && !is_indiv_product && has_more_variants) {
            // Change url to include variant if we're not on homepage
            var search = [];
            if (window.location.search.length > 1) {
                // select non-variant query params
                search = window.location.search.slice(1).split('&').filter(function (q) {
                    return q.indexOf('variant=') !== 0;
                });
            }
            // add current variant
            search.push('variant=' + variant.id);

            // set the url to include the variant
            var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + search.join('&');
            window.history.replaceState({path: newurl}, '', newurl);
        }

        var is_sale = variant.compare_at_price && variant.compare_at_price > variant.price;
        $(this.element).closest('.product-page--sale-badge').toggleClass('hide', !is_sale);

        if ($('.product-details-wrapper').data('show-sku')) {
            $('.js__currentVariantSKU').text(variant.sku);
            $('.product__meta--sku').toggleClass('hide', !variant.sku);
        }

        // Unit prices
        var money_format = window.Currency ? window.Currency.moneyFormats[window.Currency.shopCurrency].money_format : window.default_currency_format;

        if (variant.unit_price && variant.unit_price_measurement) {
            $('.unit-price').removeClass('hide');
            $('.unit-price__price').html('<span class="money">' + Shopify.formatMoney(variant.unit_price, money_format) + '</span>');
            $('.unit-price__ref-value').html(variant.unit_price_measurement.reference_value);
            $('.unit-price__ref-unit').html(variant.unit_price_measurement.reference_unit);
            window.Currency.convertAll(window.Currency.shopCurrency, window.Currency.currentCurrency);
        } else {
            $('.unit-price').addClass('hide');
        }

        // Out of stock email form
        if ($('.out-of-stock-form').length) {
            load_out_of_stock_form(variant);
        }

        // Swatches
        if (this.$swatch_inputs.length > 0) {
            var section_id = this.$element.data('section-id');
            variant.options.forEach(function (option, index) {
                var itemId = '#swatch-' + index + '-' + toHandle(option);
                this.$swatch_inputs.filter(itemId).prop('checked', true);
            }.bind(this));
        }
    }
    return false;
};

function load_option_selectors(section) {
    var root = section || document;
    Array.prototype.forEach.call(root.querySelectorAll('.product-single'), function (element) {
        var product = new Product(element);
    });
}

// Product Tabs

function load_tabs() {
    $('ul.tabs').each(function(){
        var active, content, links = $(this).find('a');
        active = links.first().addClass('active');
        content = $(active.attr('href'));
        links.not(':first').each(function () {
            $($(this).attr('href')).hide();
        });
        $(this).find('a').click(function(e){
            active.removeClass('active');
            content.hide();
            active = $(this);
            content = $($(this).attr('href'));
            active.addClass('active');
            content.fadeIn();
            return false;
        });
    });
}

function load_readmore() {

    if($('.product-description.readmore').length === 0) return;

    var thisHeight = 100;
    if($('.product-description_full-width').length) {
        thisHeight = 150;
        if($(window).width() <= 768) {
            thisHeight = 140;
        }
    }

    if(!$('.product-description.readmore').hasClass('rmjs-1')) {

        new Readmore($('.product-description.readmore'), {
            speed: 100,
            collapsedHeight: thisHeight,
            moreLink: '<div class="read-more-link"><a href="#">Read more <i class="fa fa-angle-down" aria-hidden="true"></i></a></div>',
            lessLink: '<div class="read-less-link"><a href="#">Read less <i class="fa fa-angle-up" aria-hidden="true"></i></a></div>',
            beforeToggle: function(trigger, element, expanded) {
                if(expanded) {
                    $('html, body').animate({
                            scrollTop: $(element).offset().top
                        }, 100
                    );
                }
                $(element).toggleClass('closed');
            }
        });
    }

    var resizeTimer;
    $(window).on('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            load_readmore();
        }, 300);
    });
}

// Load swatches on product page

function load_swatches() {
    $('.swatch :radio').on('change', function() {
        var $this = $(this);
        var optionIndex = $this.closest('.swatch').attr('data-option-index');
        var optionValue = $this.val();
        $this
            .closest('form')
            .find('#SingleOptionSelector-' + optionIndex)
            .val(optionValue)
            .trigger('change');
    });
}

// Simulate jquery.tmpl plugin using handlebars
function tmpl_handlebar(context) {
    Handlebars.registerHelper('formatMoney', function (price) {
        return Shopify.formatMoney(price, window.Currency ? window.Currency.moneyFormats[window.Currency.shopCurrency].money_format : window.default_currency_format);
    });

    var template = Handlebars.compile(this.text());
    var image = context.media.length > 0 ? context.media[0].preview_image.src : undefined;
    if (!image) {
        image = $('.recently-viewed-products').data('no-image-url');
    }
    $.extend(context, {
        responsiveImage: Shopify.Products.resizeImage(image, '{width}'),
        imageSrc: Shopify.Products.resizeImage(image, 'medium'),
        sale: context.compare_at_price_max > context.price && context.available,
        sold_out: !context.available,
        id: context.id,
    });

    // Fix currency after content is loaded
    if (window.Currency) {
        setTimeout(function () {
            window.Currency.convertAll(window.Currency.shopCurrency, window.Currency.currentCurrency);
        }, 10);
    }
    return window.wetheme.$(template(context));
}

window.wetheme.$.fn.tmpl = tmpl_handlebar;

function load_recently_viewed() {
    var element = $('#recently-viewed-products');
    if (element.hasClass('recently-viewed-loading')) {
        return;
    }
    try {
        $.cookie('shopify_recently_viewed');
    } catch (e) {
        console.warn('Unable to read page cookies, blocked');
        return;
    }

    element.empty().removeClass('owl-carousel owl-theme owl-loaded owl-drag').addClass('recently-viewed-loading');
    Shopify.Products.showRecentlyViewed({
        howManyToShow: 10,
        onComplete: function () {
            $('.recently-viewed-products').fadeIn().find('#recently-viewed-products').addClass('owl-carousel owl-theme').owlCarousel({
                loop:false,
                margin:0,
                nav:true,
                dots: false,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:4
                    }
                }
            });
            if (window.SPR) {
                window.SPR.loadBadges();
            }
            load_shop_now();
            load_image_badge_positions(1000);
        }
    });

    Shopify.Products.recordRecentlyViewed();
}

function load_product_recommendations() {
    // Look for an element with class 'product-recommendations'
    var productRecommendationsSection = document.querySelector(".product-recommendations");
    if (productRecommendationsSection === null) {
        return;
    }
    // Read product id from data attribute
    var productId = productRecommendationsSection.dataset.productId;
    // Read limit from data attribute
    var limit = productRecommendationsSection.dataset.limit;
    // Build request URL
    var requestUrl = "/recommendations/products?section_id=product-recommendations&limit="+limit+"&product_id="+productId;
    // Create request and submit it using Ajax
    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            var container = document.createElement("div");
            container.innerHTML = request.response;
            productRecommendationsSection.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
        }

        // Initialize slideshow
        $('.product-recommendations__slideshow').addClass('owl-carousel owl-theme').owlCarousel({
            loop:false,
            margin:0,
            nav:true,
            dots: false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:4
                }
            }
        });

        // Fix currency when recommended products are added
        if (window.Currency) {
            window.Currency.convertAll(window.Currency.shopCurrency, window.Currency.currentCurrency);
        }
    };
    request.send();
}

// Reload reviews on change in theme admin

function load_spr() {
    // wait for SPR script to be loaded
    var wait_for_review = setInterval(function () {
        if (!window.SPR || !window.SPR.$) {
            return;
        }
        clearInterval(wait_for_review);
        window.SPR.initDomEls();
        window.SPR.loadProducts();
        window.SPR.loadBadges();
    }, 500);
}

function load_reviews() {
    if ($('#shopify-product-reviews').length >= 0) {
        load_spr();
    }
}

// Reload review badges on change in theme admin

function load_product_review_badges() {
    if ($('#shopify-product-reviews-badge').length >= 0) {
        load_spr();
    }
}

function load_out_of_stock_form(variant) {
    if (!variant.available) {
        $('.out-of-stock-form').addClass('out-of-stock-form--active');
        $('#notify-me').fadeIn();

        $('#notify-me a').on('click', function(e) {
            e.preventDefault();

            if ($('.logged-in').val() == '0') {
                $('.out-of-stock-form form').submit();
            } else {
                $('#notify-me-wrapper').addClass('show-form');
            }
        });

        var emailString = 'Please notify me when '+ variant.name + ' becomes available.';
        $('#notify-me-wrapper input[name="contact[body]"]').val(emailString);
    } else {
        $('#notify-me').hide();
        $('.out-of-stock-form').removeClass('out-of-stock-form--active');
        $('#notify-me-wrapper').removeClass('show-form');
        $('#notify-me-wrapper input[name="contact[body]"]').val('');
    }
}

// Blog Masonry

function load_blog_masonry() {
    var $grid2 = $('.blog-article-wrapper').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.blog-grid-item',
        // use element for option
        columnWidth: '.blog-grid-item',
        gutter: '.blog-gutter-sizer',
        percentPosition: true
    });
}


// Featured Products Masonry

function load_featured_masonry() {
    var $grid = $('.homepage-featured-products-grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.homepage-featured-grid-item',
        // use element for option
        columnWidth: '.homepage-featured-grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer'
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}

// Accessible Menu JS
function load_accessible_menu() {
    $(".site-nav").addClass("js");
    $(".site-nav li a").focus(function() { // main nav anchor focus
       $(this).parent().children("ul").fadeIn();
    });
    $(".site-nav li li a").off(); // unbind hide drop downs from sub nav anchors

    $('.mobile-nav__link').on('click', function () {
        if (this.href && this.href.split('#')[0] === window.location.href.split('#')[0]) {
            // Anchor on same page - just close the drawer
            timber.LeftDrawer.close();
        }
    });
}

function resize_sticky_header() {
    var stickyHeader = $('.sticky-header');
    var height = Math.max(stickyHeader.first().outerHeight(true), stickyHeader.last().outerHeight(true));
    stickyHeader.parent().innerHeight(height);
}

// Sticky page header
function load_sticky_header(skip_reload_on_image_load) {
    var stickyHeader = $('.sticky-header');
    stickyHeader
        .sticky({
            observeChanges: true,
            context: 'body',
            silent: true
        });

    var $logo = $('.site-header__logo-image img');
    if (!skip_reload_on_image_load) {
        // Update header size when logo is loaded
        $logo.imagesLoaded(function () {
            load_sticky_header(true);
        });
    } else {
        resize_sticky_header();
    }

    $(window).off('resize', resize_sticky_header).on('resize', resize_sticky_header);
}

// Home Collection section

function load_home_collection() {
    var homepageCollection = $('.homepage-collection-grid-item');
    homepageCollection.on('mouseenter mouseleave', function(e) {
       homepageCollection.not(this).stop(true).fadeTo('fast', e.type == 'mouseenter' ? 0.2 : 1);
    });
}


// Product Block section

function load_product_block() {
    var $grid = $('.homepage-featured-products-grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.homepage-featured-grid-item',
        // use element for option
        columnWidth: '.homepage-featured-grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });
}

function load_youtube(element) {
    var autoplay = element.dataset.homepageHeroVideoAutoplay === "true",
        mute = element.dataset.homepageHeroVideoMute === "true",
        loop = element.dataset.homepageHeroVideoLoop === "true";
    player = new YT.Player(element.id, {
        width: 746,
        videoId: element.dataset.homepageHeroVideoLink,
        playerVars: {
            showinfo: 0,
            modestbranding: 1,
            rel: 0,
            autoplay: autoplay ? 1 : 0
        },
        events: {

            onReady: function (event) {
                var el = document.getElementById(element.id);
                if (mute) {
                    event.target.mute();
                    if (autoplay) {
                        event.target.playVideo();
                    }
                }

                if (autoplay) {
                    hideVideoOverlays(el);
                }

                registerVideoPlayButton(el, 'youtube', event.target);
            },
            onStateChange: function (event) {
                if (event.data === YT.PlayerState.ENDED && loop) {
                    event.target.playVideo();
                }
            }
        }
    });
}

function load_youtube_all() {
    $('.homepage-hero-youtube-video').each(function (index, el) {
        load_youtube(el);
    });
}

var youtube_loaded_callbacks = [];

window.onYouTubePlayerAPIReady = function () {
    youtube_loaded_callbacks.forEach(function (callback) {
        callback();
    });
    youtube_loaded_callbacks.splice(0);
};

function load_youtube_api(force) {
    return new Promise(function (resolve) {
        if (window.YT) {
            // We already have youtube API loaded, call 'load_youtube_all'
            resolve();
        } else if (!document.querySelector('#youtube_api')) {
            // Resolve once youtube is loaded
            youtube_loaded_callbacks.push(resolve);

            // Youtube API is not yet loaded, create script that loads it
            create_script("youtube_api", "https://www.youtube.com/player_api");
        } else {
            // Script for loading youtube API is there, but youtube is not yet loaded
            youtube_loaded_callbacks.push(resolve);
        }
    });
}

function load_youtube_section() {
    if (!document.querySelector('.homepage-hero-youtube-video')) {
        // No youtube elements, do not load youtube API
        return;
    }
    load_youtube_api().then(load_youtube_all);
}

function load_vimeo(element) {

    var player = new Vimeo.Player(element.id);

    player.ready().then(function(){

        registerVideoPlayButton(element, 'vimeo', player);

        if (document.querySelector('#' + element.id).dataset.vimeoAutoplay === "true") {
            hideVideoOverlays(element);
        }

        if (document.querySelector('#' + element.id).dataset.homepageHeroVideoMute === "true") {
            player.setVolume(0);
        }

    }).catch(function (e) {

        document.getElementById(element.id).innerText = e;

    });

}

function load_vimeo_all() {
    $('.homepage-hero-vimeo-video').each(function (index, el) {
        load_vimeo(el);
    });
}

function load_vimeo_api() {
    if (!document.querySelector('.homepage-hero-vimeo-video')) {
        // No vimeo elements, do not load vimeo API
        return;
    }

    if (!document.querySelector('#vimeo_api')) {
        // Vimeo API is not yet loaded, create script that loads it
        var script = create_script("vimeo_api", "https://player.vimeo.com/api/player.js");

        if (script.readyState) {
            // IE
            script.onreadystatechange = function() {
                if (element.readyState == "loaded" || element.readyState == "complete") {
                    element.onreadystatechange = null;
                    load_vimeo_all();
                }
            };
        } else {
            // Other browsers
            script.onload = function() {
                load_vimeo_all();
            };
        }
    } else if (!window.Vimeo) {
        // Script for loading vimeo API is there, but vimeo is not yet loaded,
        // load_vimeo_all will be called when script finishes loading
    } else {
        // We already have vimeo API loaded, call 'load_vimeo_all'
        load_vimeo_all();
    }
}

// register events on the video play button, plays video and hides certain elements.
function registerVideoPlayButton(element, type, player){

    var videoParent = element.closest('.homepage-hero-content--video');
    if (!videoParent) {
        return;
    }
    var $playButton = $(".homepage-video-play-button", videoParent);

    // bind custom play button events
    $playButton.on("click", function(event) {

        if(type === 'youtube') {

            player.playVideo();

        } else if(type === 'vimeo') {

            player.play();

        }

        hideVideoOverlays(element);

    });

}

function hideVideoOverlays(videoElement){

    var videoParent = videoElement.closest('.homepage-hero-content--video');

    // hide some things when we press play.
    $(".js__hide-on-play", videoParent).fadeOut("slow");

    //we need to hide the ::before pseudo-element on the container when we press play.
    $('.homepage-hero-content-overlay-wrapper', videoParent).addClass('overlay-hidden');

}

function create_script(id, src) {
    var tag = document.createElement('script');
    tag.id = id;
    tag.src = src;
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    return tag;
}

function hover_effect($link) {
    var $overlay = $('#' + $link.data('overlayId'));
    $link.hover(
       function () {
           $overlay.addClass("active");
       },
       function () {
           $overlay.removeClass("active");
        });

    // Apply hover on page load
    if ($link.is(':hover')) {
       $overlay.addClass("active");
    }
}

function load_hero() {
    $('.homepage-hero-content-overlay-menu-item').imagesLoaded( { background: true }, function() {
        $(".homepage-hero-text-advert-link").each(function (index, link) {
            hover_effect($(link));
        });

        $('.homepage-hero-menu li').each(function (index, link) {
            hover_effect($(link));
        });
    });
}

function load_drawer_sticky_menu() {
    // Fix that scrolling inside drawer propagates to page content on iPad
    // it's an workaround for https://bugs.webkit.org/show_bug.cgi?id=153852
    // can be replaced by setting "overflow: hidden" to js-drawer-open
    // class after the bug is fixed
    var body_scroll = 0;
    $(document.body).off('beforeDrawerOpen.timber').on('beforeDrawerOpen.timber', function () {
        if ($(document.body).css('position') === 'fixed') {
            return;
        }
        body_scroll = $(window).scrollTop();
        $(document.body).css({
            position: 'fixed',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            marginTop: '-' + body_scroll + 'px'
        });
        load_sticky();
        load_sticky_header();
    });
    $(document.body).off('beforeDrawerClose.timber').on('beforeDrawerClose.timber', function () {
        $(document.body).css({
            position: 'static',
            height: 'auto',
            width: 'auto',
            overflow: 'auto',
            marginTop: '0'
        });
        $(window).scrollTop(body_scroll);
        load_sticky();
        load_sticky_header();
    });
}

function load_ken_burns() {
    var kbSelector = '.kb-enabled';
    var kbElements = $(kbSelector);

    kb_apply_classes(kbElements);

    window.addEventListener('scroll', function() {
        var resizeTimer;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            kb_apply_classes(kbElements);
        }, 750);
    });
}

function kb_apply_classes(elements) {
    elements.each(function (index, val) {
        if(isScrolledIntoView(val) ) {
            // Load visible elements in sequence.
            $(val).delay(150 * index).animate({ opacity: 1 }, 50, function(){
                var thisItem = $(this);
                // Only animate each section once.
                if(thisItem.not('.in-viewport').length) {
                    $(val).imagesLoaded({ background: true }, function () {
                        thisItem.addClass('in-viewport');
                    });
                }
            });
        }
    });
}

function kb_remove_classes() {
    $('.kb-enabled').removeClass('in-viewport');
}

// Slider section

var DEFAULT_OPTIONS = {
    directionNav: true,
    controlNav: true,
    startAt: 0
};

var SLIDER_SELECTOR = '.flexslider-homepage';
var SLIDER_REENABLE_INTERVAL = 6000;


/* Initialize all the sliders */
function load_slider(section) {
    sliders = {};
    section = section || document;
    var slider_elements = section.querySelectorAll(SLIDER_SELECTOR);
    Array.prototype.forEach.call(slider_elements, function (slider_element) {
        // Prevent flickering in the flexslider by setting fixed width of the slides
        $(slider_element).find('li').css('width', $(slider_element).width());

        sliders[slider_element.dataset.sliderId] = new Slider(slider_element);
    });
}

function header_height() {
    var announcementBar = $('#shopify-section-announcement-bar').height();
    var header = $('#shopify-section-header').height();
    var textAdverts = $('#shopify-section-text-adverts').height();
    var textAdsPosition = $('#shopify-section-text-adverts').position();
    var slideshowPosition = $('.homepage-section--slideshow-wrapper').position();

    if($('#shopify-section-text-adverts').length &&
        $('.homepage-section--slideshow-wrapper').length) {
        if(textAdsPosition.top > slideshowPosition.top) {
            textAdverts = 0;
        }
    }

    var headerHeight = announcementBar + header + textAdverts;
    var nonOverlayHeight = announcementBar + textAdverts;

    // Only apply if the slideshow is set to full screen size.
    if($('.slideshow--full-screen').length) {
        // Don't apply the height if the header is overlaid on the slideshow.
        if($('.overlay-header').length === 0) {
            $('.slideshow--full-screen').css('height', 'calc(100vh - ' + headerHeight + 'px)');
            $('.slideshow--full-screen ul.slides li').css('height', 'calc(100vh - ' + headerHeight + 'px)');
        }
        else {
            $('.slideshow--full-screen').css('height', 'calc(100vh - ' + nonOverlayHeight + 'px)');
            $('.slideshow--full-screen ul.slides li').css('height', 'calc(100vh - ' + nonOverlayHeight + 'px)');
        }
    }
}

function Slider(element) {
    this.$element = $(element);
    this.restartTimer = null;
    this.running = true;

    this.get_speed = function () {
        return parseInt(this.$element.data('sliderSlideTime'));
    };

    this.get_animation = function () {
        return this.$element.data('sliderAnimation');
    };

    this.show_slide = function (index) {
        if (this.get_speed() > 0) {
            this.$element.flexslider("stop");
        }
        this.running = false;
        this.$element.flexslider(index);
    };

    this.start_animation = function () {
        this.running = true;
        // Don't start animation when autorotate is disabled
        if (this.get_speed() > 0) {
            this.$element.flexslider("play");
        }
    };

    this.on_slide_change = function(slider) {
        speed = this.get_speed();
        if (this.running && !slider.playing && speed > 0) {
            // restart autoscroll after given interval since last interaction
            clearTimeout(this.restartTimer);
            this.restartTimer = setTimeout(function () {
                slider.play();
            }, Math.max(0, SLIDER_REENABLE_INTERVAL - speed));
        }
    };

    this.configure = function (options) {
        var speed = this.get_speed();
        var $navigation = this.$element.parent().find(".custom-navigation");
        var opts = $.extend({
                controlsContainer: $navigation,
                slideshowSpeed: speed,
                animation: this.get_animation(),
                slideshow: speed > 0,
                useCSS: false, // Fix for background disappearing: http://stackoverflow.com/a/27298397
                pauseOnAction: true,
                after: this.on_slide_change.bind(this),
                customDirectionNav: $navigation.find('a')
            }, DEFAULT_OPTIONS, options);
        this.$element.flexslider(opts);
    };
    this.configure({});

    // flexslider stops the animation when the page is not focused, this breaks when the section is
    // changed in theme admin because it triggers 'blur' event when another iframe is selected
    $(window).off('blur');
}

function load_collection_tag_filter() {
    /* Product Tag Filters - Good for any number of filters on any type of collection pages */
    var collFilters = $('.coll-filter');
    collFilters.on('change', function () {
        var newTags = [];
        collFilters.each(function () {
            var val = $(this).val();
            if (val) {
                newTags.push(val);
            }
        });
        if (newTags.length) {
            var query = newTags.join('+');
            var link = $('#link-to-tag-generic a').attr('href').replace(/\+/g, '%20');
            window.location.href = link.replace(/(\/|=)tag($|\?|&)/, '$1' + query + '$2');
        } else {
            window.location.href = $('#link-to-collection').val();
        }
    });
    $('.collection-filter-tag-checkbox').on('change', function () {
        var filter = Array.prototype.map.call(
            document.querySelectorAll('input.collection-filter-tag-checkbox:checked'),
            function (el) { return el.value; }
        ).join('+');
        var link = $('#link-to-tag-generic a').attr('href').replace(/\+/g, '%20');
        window.location.href = link.replace(/(\/|=)tag($|\?|&)/, '$1' + filter + '$2');
    });
}

var rellax_by_id = {};
var was_mobile = false;
var resize_handler = null;
var rellax_elements = [];

function apply_parallax(id) {
    var old_relax = rellax_by_id[id];
    if (old_relax) {
        old_relax.destroy();
    }
    rellax_by_id[id] = new Rellax('#' + id, {
        center: true,
        speed: -4,
    });
}

function destroy_parallax(id) {
    var old_relax = rellax_by_id[id];
    old_relax.destroy();
}

function parallaxes(apply) {
    Array.prototype.forEach.call(document.querySelectorAll('.rellax'), function (el) {
        if (apply) {
            // At first load, don't apply parallax to sections that are onscreen and
            // have zoom effect, as it miscalculates the element's size.
            if($(el).parents('.in-viewport.kb-enabled').length == 0) {
                apply_parallax(el.id);
            } else {
                window.addEventListener('scroll', function() {
                    // Only apply parallax once.
                    if(!el.style.transform) {
                        apply_parallax(el.id);
                    }
                });
            }
        }
    });
}

function load_parallax() {
    rellax_elements = document.querySelectorAll('.rellax');

    if (rellax_elements.length === 0) {
        // There is no rellax element
        return;
    }

    if ($(window).width() <= 768) {
        // No parallax on mobile
        was_mobile = true;
    } else {
        setTimeout(parallaxes.bind(null, true), 100);
    }

    if (resize_handler) {
        window.removeEventListener(resize_handler);
    }
    resize_handler = window.addEventListener('resize', function() {
        for (var key in rellax_by_id) {
            if (rellax_by_id.hasOwnProperty(key)) {
                var id = key;
                var rellax = rellax_by_id[key];
                rellax.destroy();
            }
        }
        rellax_by_id = {};
        setTimeout(function () {
            if($(window).width() >= 768) {
                Array.prototype.forEach.call(rellax_elements, function (el) {
                    el.style.transform = '';
                });
                parallaxes(true);
            }
            else {
                // No parallax at mobile.
                Array.prototype.forEach.call(rellax_elements, function (el) {
                    setTimeout(function () {
                        el.style.transform = 'translate3d(0,0,0)';
                    }, 100);
                    destroy_parallax(el.id);
                });
            }
        }, 100);
    });
}

function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      var offsetHeight = ($(elem).height() / 1.333);

      // var topOffset = 500;
      // var bottomOffset = 500;
      var topOffset = offsetHeight;
      var bottomOffset = offsetHeight;

      // Element bottom is less than viewport bottom
      // AND
      // Element top is greater than viewport top
      // E.g. the whole element needs to be on screen at once or the bottom
      // is above the fold:
      return ((elemBottom <= (docViewBottom + bottomOffset)) && (elemTop >= (docViewTop - topOffset)));
}

// Pagination logic (Infinite scrolling and Load more button)

function Pagination() {
    // how many pixels from bottom should next page start loading
    this.PAGINATION_LOAD_OFFSET = 1200;
    // how often should the scroll position should be checked (in milliseconds)
    this.SCROLL_DELAY = 200;

    this.PAGINATION_SELECTOR = '.pagination';
    this.COLLECTION_WRAPPER_SELECTOR = '.wrapper.main-content';
    this.COLLECTION_MAIN_SELECTOR = '.collection-main-body-inner';
    this.COLLECTION_HEADER_SELECTOR = '.collection-main-central-header';
    this.COLLECTION_ITEM_SELECTOR = '.grid__item';
    this.COLLECTION_ITEM_EXCLUDE_SELECTOR = '.collection-central-description-block';

    this.$w = $(window);
    this.$doc = $(document);
    this.$self = this;
    this.$collection = $(this.COLLECTION_MAIN_SELECTOR);
    this.$wrapper = $(this.COLLECTION_WRAPPER_SELECTOR);
    this.$loading_indicator = $('.pagination-loading');
    this.loading = false;
    this.fully_loaded = false;
    this.scroll_timeout = null;
    this.pagination_type = null;

    this.scroll_handler = this.scroll_handler.bind(this);
    this.check_infinite_scroll = this.check_infinite_scroll.bind(this);
    this.initialize();
}

Pagination.prototype.initialize = function () {
    if ($('.pagination').hasClass('pagination-infinite')) {
        this.pagination_type = 'infinite-scroll';

        this.install_scroll_handler();
    } else if ($('.pagination').hasClass('pagination--load-more')) {
        this.pagination_type = 'load-more';

        this.load_more_button();
    }
}

Pagination.prototype.install_scroll_handler = function () {
    $(window).on("scroll", this.scroll_handler);
};

Pagination.prototype.uninstall_scroll_handler = function () {
    $(window).off("scroll", this.scroll_handler);
};

Pagination.prototype.scroll_handler = function () {
    if (this.scroll_timeout) {
        clearTimeout(this.scroll_timeout);
    }
    this.scroll_timeout = setTimeout(this.check_infinite_scroll, this.SCROLL_DELAY);
};

Pagination.prototype.check_infinite_scroll = function () {
    var height = this.$wrapper.position().top + this.$wrapper.height();
    if (height - this.PAGINATION_LOAD_OFFSET < (this.$doc.scrollTop() + this.$w.height())) {
        this.load_next_page();
    }
};

Pagination.prototype.check_pagination_progress = function () {
    var next_url = $(this.PAGINATION_SELECTOR).find('.pagination-next a').attr('href');
    this.fully_loaded = (!next_url || next_url === '#');
};

Pagination.prototype.build_load_more_html = function () {
    var totalItems = parseInt($('.pagination').attr('data-paginate-items'), 10);
    var currentOffset = parseInt($('.pagination').attr('data-paginate-offset'), 10);
    var pageSize = parseInt($('.pagination').attr('data-paginate-size'), 10);
    var totalViewed = currentOffset + pageSize;
    var progressPercentage = (100 * totalViewed) / totalItems;

    var buttonHtml = '<div class="pagination__load-more">' +
                        '<p class="pagination__progress-text">You\'ve viewed ' +
                        totalViewed +
                        ' of ' +
                        totalItems +
                        ' products</p>' +
                        '<div class="progress-bar"><div class="progress-bar__inner" style="width:' +
                        progressPercentage +
                        '%;"></div></div>' +
                        '<button class="btn btn--large btn--load-more">Load more</button>' +
                    '</div>';

    return buttonHtml;
};

Pagination.prototype.load_more_button = function () {
    this.check_pagination_progress();

    // Check if Load More button already on page
    var buttonAppended = $('.pagination .btn--load-more').length !== 0;

    // Build Button html
    var buttonHtml = this.build_load_more_html();

    // If button not on page and more results are available, display button
    if  (!buttonAppended && !this.fully_loaded) {
        $('.pagination').append(buttonHtml);
    }

    // If button clicked, load next page
    $('.btn--load-more').off('click').on('click', this.load_next_page.bind(this.$self));
};

Pagination.prototype.set_loading = function (loading) {
    if (loading) {
        this.loading = true;
        this.$loading_indicator.show();
        $(this.PAGINATION_SELECTOR).hide();
    } else {
        this.loading = false;
        this.$loading_indicator.hide();
        $(this.PAGINATION_SELECTOR).show();
    }
};

Pagination.prototype.load_next_page = function () {
    if (this.loading) {
        return false;
    }
    var next_url = $(this.PAGINATION_SELECTOR).find('.pagination-next a').attr('href');
    if (!next_url || next_url === '#') {
        this.uninstall_scroll_handler();
        return;
    }
    this.set_loading(true);
    $.ajax({
        type: 'GET',
        url: next_url,
        dataType: "html"
    })
        .then(this.page_loaded.bind(this))
        .always(this.set_loading.bind(this, false));
};

Pagination.prototype.page_loaded = function (data) {
    var data_dom = $(data);
    var classes = $('#grid_item_width_classes').val();
    if (classes) {
        data_dom.find('.grid__item').removeClass('large--one-quarter medium--one-quarter small--one-whole large--one-half medium--one-half').addClass(classes);
    }
    this.$collection.append(
        data_dom.find(this.COLLECTION_HEADER_SELECTOR + ' > ' + this.COLLECTION_ITEM_SELECTOR).not(this.COLLECTION_ITEM_EXCLUDE_SELECTOR),
        data_dom.find(this.COLLECTION_MAIN_SELECTOR + ' > ' + this.COLLECTION_ITEM_SELECTOR)
    );
    $(this.PAGINATION_SELECTOR).replaceWith(data_dom.find(this.PAGINATION_SELECTOR));

    // If "load more" enabled, run function to conditionally render button on newly-loaded page
    if (this.pagination_type === 'load-more') {
        this.load_more_button();
    }

    // Add handlers for 'shop now' buttons
    load_shop_now();
    // Load reviews
    load_product_review_badges();
    // Load badge positions
    load_image_badge_positions(100);
};

var pagination = null;

function load_pagination() {
    if (pagination) {
        pagination.uninstall_scroll_handler();
        pagination = null;
    }

    // If neither "infinite scrolling" nor "load more" are enabled, end function here
    var $pagination_infinite = $('.pagination-infinite');
    var $pagination_load_more = $('.pagination--load-more');

    if ($pagination_infinite.length === 0 && $pagination_load_more.length === 0) {
        return;
    }

    // If either options are enabled, create a new instance of the Pagination function constructor
    pagination = new Pagination();
}


// Base for all the secondary drawers, primary drawer is the Cart

function Drawer(container_selector, title_selector) {
    this.animation_duration = 800;
    this.$body = $('body');
    this.$drawer = $('#CartDrawer');
    this.$primary_container = $('#CartContainer');
    this.$primary_title = $('#CartTitle');
    this.$secondary_container = $(container_selector);
    this.$secondary_title = $(title_selector);

    this.$primary_group = this.$primary_container.add(this.$primary_title);
    this.$secondary_group = this.$secondary_container.add(this.$secondary_title);
}

Drawer.prototype.show_primary = function () {
    this.$secondary_group.addClass('hide');
    this.$primary_group.removeClass('hide');
};

Drawer.prototype.show_secondary = function () {
    this.$primary_group.addClass('hide');
    this.$secondary_group.removeClass('hide');
};

Drawer.prototype.open = function () {
    this.show_secondary();
    this.$body.one('afterDrawerClose.timber', this.close.bind(this));
    timber.RightDrawer.open();
    load_readmore();
};

Drawer.prototype.set_content_type = function (content) {
    this.$drawer.removeClass('drawer--cart drawer--log-in drawer--show-now drawer--search').addClass('drawer--' + content);
}

Drawer.prototype.close = function () {
    // Show cart after the animation ends
    setTimeout(function () {
        this.show_primary();
        this.set_content_type('cart');
    }.bind(this), this.animation_duration);
};

// Load Quick View in the Cart drawer

function ShopNow(url) {
    this.$body = $('body');
    this.drawer = new Drawer('#ShopNowContainer', '#ShopNowTitle');

    this.$body.on('afterAddItem.ajaxCart', this.animate_to_cart.bind(this));

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'html'
    })
        .then(this.page_loaded.bind(this))
        .catch(function (error) {
            // FIXME: handle error correctly
            alert(error);
        });
}

ShopNow.prototype.page_loaded = function (data) {
    var data_dom = $(data);
    var product_single = data_dom.find('.product-single');

    // We don't want to see reviews
    product_single.find('#shopify-product-reviews').remove();
    // We want to see mobile slider instead of desktop version
    product_single.find('.product-images-slider-mobile').addClass('product-images-slider-desktop');
    // Disable image zoom
    product_single.find('[data-image-zoom-enable="true"]').attr('data-image-zoom-enable', 'false');

    // Replace product html content
    var container = this.drawer.$secondary_container;
    container.find('.product-single').remove();
    container.append(product_single);

    // Replace product JSON
    container.find('#ProductJson-product-template').remove();
    container.append(data_dom.find('#ProductJson-product-template'));

    load_quantity_selector();
    load_ownCarousel();
    load_option_selectors(container[0]);
    load_tabs();
    load_swatches();

    // Add payment buttons
    if (Shopify.PaymentButton && Shopify.PaymentButton.init) {
        Shopify.PaymentButton.init();
    }

    if (typeof ajaxCart !== "undefined") {
        ajaxCart.init({
            formSelector: '#AddToCartForm',
            cartContainer: '#CartContainer',
            addToCartSelector: '#AddToCart',
            cartCountSelector: '#CartCount',
            moneyFormat: window.Currency ? window.Currency.moneyFormats[window.Currency.shopCurrency].money_format : window.default_currency_format
        });
    }

    this.drawer.set_content_type('show-now');
    this.drawer.open();
};


// Fade in animation between Quick View and Cart
ShopNow.prototype.animate_to_cart = function () {
    this.$body.one('afterCartLoad.ajaxCart', function () {
        timber.RightDrawer.close();
        
    }.bind(this));
};

function shop_now_handler(e) {
    var url = $(this).attr('href');
    new ShopNow(url);
    return false;
}

function load_shop_now() {
    $('.shop-now-button').off('click', shop_now_handler).on('click', shop_now_handler);
}

// Load Log In in the Cart drawer

function LogInDrawer(url) {
    this.drawer = new Drawer('#LogInContainer', '#LogInTitle');

    this.$body = $('body');

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'html'
    })
        .then(this.page_loaded.bind(this))
        .catch(function (error) {
            // FIXME: handle error correctly
            alert(error);
        });
}

LogInDrawer.prototype.page_loaded = function (data) {
    var data_dom = $(data);
    var main_content = data_dom.find('.main-content');
    main_content.find('.login-form-cancel').remove();
    main_content.find('.sitewide--title-wrapper').remove();
    this.drawer.$secondary_container.empty().append(main_content);

    // Bind recover password button
    timber.cacheSelectors();
    timber.loginForms();

    this.drawer.set_content_type('log-in');
    this.drawer.open();
};

function log_in_handler(e) {
    var url = $(this).attr('href');
    new LogInDrawer(url);
    return false;
}

function load_log_in() {
    $('.log-in-button').off('click', log_in_handler).on('click', log_in_handler);
}

function SearchDrawer() {
    this.drawer = new Drawer('#SearchContainer', '#SearchTitle');
    this.drawer.set_content_type('search');
    this.drawer.open();
    $('#search-input').focus();
    this.section_by_type = {
        'article': 'Articles',
        'page': 'Pages',
        'product': 'Products'
    };
    this.current_xhr = null;
    this.onchange_timer = null;

    this.$results = $('#search-results');
    var source = $("#LiveSearchResultTemplate").html();
    this.template = Handlebars.compile(source);

    var self = this;
    self.lastQ = null;
    $('#search-input').on('keyup change', function () {
        var q = $(this).val();
        if (q !== self.lastQ) {
            self.onchange(q);
            self.lastQ = q;
        }
    });
}

SearchDrawer.prototype.onchange = function (query) {
    if (this.onchange_timer) {
        clearTimeout(this.onchange_timer);
    }
    this.onchange_timer = setTimeout(this.onchange_throttled.bind(this, query), 200);
    if (this.current_xhr) {
        this.current_xhr.abort();
    }
};

SearchDrawer.prototype.get_search_url = function(query, json) {
    var types = 'product,article,page';
    var view = '';
    if (json) {
        view = '&view=json';
    }
    return '/search?type=' + types + view + '&q=' + encodeURIComponent(query);
};

SearchDrawer.prototype.onchange_throttled = function (query) {
    var url = this.get_search_url(query, true);
    this.$results.empty();
    this.$results.append('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i><span class="sr-only">Loading...</span>');

    this.current_xhr = $.getJSON(url);
    this.current_xhr.done(this.show_results.bind(this))
    this.current_xhr.fail(this.show_error.bind(this))
    this.current_xhr.always(function () { this.current_xhr = null; }.bind(this));
};

SearchDrawer.prototype.show_results = function (data) {
    var $show_more = $('#search-show-more');
    $show_more.addClass('hide');
    this.$results.empty();
    var results_by_type = {};
    data.results.forEach(function (result) {
        if (results_by_type.hasOwnProperty(result.type)) {
            results_by_type[result.type].push(result);
        } else {
            results_by_type[result.type] = [result];
        }
    });

    if (data.terms) {
        if (data.results.length > 0) {
            this.$results.append('<p>' + SearchTranslations.results_for_html.replace('\{\{ terms \}\}', data.terms) + '</p>');
            for (var type in results_by_type) {
                if (results_by_type.hasOwnProperty(type)) {
                    this.$results.append('<h2>' + this.section_by_type[type] + '</h2>');
                    results_by_type[type].forEach(this.show_result.bind(this));
                }
            }
            if (data.has_more) {
                $show_more.removeClass('hide').attr('href', this.get_search_url(data.terms, false));
            }
            if (window.Currency) {
                window.Currency.convertAll(window.Currency.shopCurrency, window.Currency.currentCurrency);
            }
        } else {
            this.$results.append('<p>' + SearchTranslations.no_results_html.replace('\{\{ terms \}\}', data.terms) + '</p>');
        }
    }
};

SearchDrawer.prototype.show_result = function (result) {
    this.$results.append(this.template(result));
};

SearchDrawer.prototype.show_error = function (error) {
    if (error.statusText === 'abort') {
        return;
    }
    console.error("statusText", error.statusText);
    console.error("error", JSON.stringify(error));
    // We'll redirect the user to /search page when search fails (for whatever reason)
    var query = $('#search-input').val();
    window.location = this.get_search_url(query, false);
};

function search_handler(e) {
    new SearchDrawer();
    return false;
}

function load_search_drawer() {
    $('.search-button').off('click', search_handler).on('click', search_handler);
}

function load_cart_indicator() {
    $(document.body).on('afterGetCart.ajaxCart', function (e, cart) {
        $('.cart-item-count-header--quantity').text(cart.item_count);

        var $total = $('.cart-item-count-header--total');
        if ($total.length > 0) {
            var total_price = Shopify.formatMoney(cart.total_price, window.Currency ? window.Currency.moneyFormats[window.Currency.shopCurrency].money_format : window.default_currency_format);
            $total.html('<span class="money">' + total_price + '</span>');
            if (window.Currency) {
                window.Currency.convertAll(window.Currency.shopCurrency, window.Currency.currentCurrency);
            }
        }
    });
}

// Place the sale or sold out badge at the top left of preview thumbnail
// image/s, rather than the top left of the containing <div>.
function load_image_badge_positions(timeout) {

    if(timeout === undefined) {
      timeout = 0;
    }

    var container = $('.grid-view-item .grid-view-item-image');
    calculateBadgePositions(container);

    if(timeout > 0) {
        setTimeout(function() {
            calculateBadgePositions(container);
        }, timeout);
    }

    // Handle placement of badges on screen resize.
    var resizeTimer;
    $(window).on('resize', function(e) {
        $('.grid-view-item .badge').css('opacity', 0);
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            calculateBadgePositions(container);
            $('.grid-view-item .badge').css('opacity', 1);
        }, 500);
    });

    // On hover, if the 'Enable hover effect' setting is ON we'll need to move
    // the badge on hover as a different image will be shown.
    if(container.find('.hidden').length > 0 && $(window).width() > 767) {
        container.hoverIntent({
            over: function() {
                if(!$(this).parent('.grid-view-item').hasClass('hovering')) {
                    // Fade in second image.
                    var self = $(this);
                    self.parent('.grid-view-item').addClass('hovering');
                    self.find('.hidden').fadeTo(200, 1, function() {
                        calculateHoverBadgePositions($(self));
                    });
                }
            },
            out: function() {
                var self = $(this);
                // Fade out second image.
                $(this).find('.hidden').fadeTo(200, 0, function() {
                    self.parent('.grid-view-item').removeClass('hovering');
                    calculateBadgePositions(container);
                });
            },
            sensitivity: 10,
            interval: 25
        });
    }
}

function calculateHoverBadgePositions(item) {
    // If the 'Enable hover effect' setting is ON, also calculate the position
    // of the badge on the second thumbnail.
    if(item.find('.reveal .hidden').length) {
        item.find('.reveal .hidden').css('z-index', 4);
        placeBadge(item, true);
    }
}

function calculateBadgePositions(container) {
    container.each(function( index ) {
        placeBadge($(this));
        $(this).find('*').stop(true, true);
    });
}

function getContainedSize(img) {
    var ratio = img.naturalWidth / img.naturalHeight;
    var width = img.height * ratio;
    var height = img.height;

    if (width > img.width) {
        width = img.width;
        height = img.width / ratio;
    }
    return [width, height];
}

function placeBadge(item, hover) {
    if(hover === undefined) {
      hover = false;
    }

    var badgeDiv = item.parent().find('.badge');
    if(!badgeDiv.length) {
        return;
    }

    // 1) Get containing .grid-view-item dimensions.
    var containerWidth = item.width();
    var containerHeight = item.height();

    // 2) Get thumbnail size.
    if(hover === true) {
        var thisImg = item.find('.hidden img');
    }
    else {
        var thisImg = item.find('img');
    }

    var actualSize = getContainedSize(thisImg.get(0));
    var thisWidth = Math.round(actualSize[0]);
    var thisHeight = Math.round(actualSize[1]);

    // 3) Calculate the left and top difference between container and image.
    var offsetX = (containerWidth - thisWidth) / 2;
    var offsetY = (containerHeight - thisHeight) / 2;

    // Don't allow negative offsets.
    if(offsetX < 1) offsetX = 0;
    if(offsetY < 1) offsetY = 0;

    // 4) Apply those units to the left & top position of the badge.
    badgeDiv.css('top', offsetY + 'px');
    badgeDiv.css('left', offsetX + 'px');
}

function throttle(func, msWait) {
  var time = Date.now();
  return function() {
    if ((time + (msWait || 100) - Date.now()) < 0) {
      func();
      time = Date.now();
    }
  }
}

function reapply_kb_effect(target) {
    var $target = $(event.target);

    // Disable ken burns.
    var kb_target = $target.find('.kb-enabled');
    kb_target.removeClass('in-viewport');

    // Get the image URL.
    if($target.find('#rellax--text-with-image-overlay').length) {
        var bg_selector = '#rellax--text-with-image-overlay';
    }
    else {
        var bg_selector = '.img.rellax';
    }

    var bgimg = $target.find(bg_selector).css('background-image').replace(/(url\(|\)|")/g, '');
    // Create temporary image to get load finished notification.
    var image = new Image();
    var onload = function () {
        if(!kb_target.length) {
            section_select(event);
        } else {
            if(kb_target.hasClass('in-viewport')) {
                // Reapply ken burns with a slight delay.
                kb_target.delay(1500).queue(function(next){
                    kb_target.addClass("in-viewport");
                    next();
                });
            }
        }
    }
    image.addEventListener('load', onload);
    image.crossOrigin = 'Anonymous';
    image.src = bgimg;
    if (image.complete) {
        // Run onload when the image is already loaded
        onload();
    }
}

function load_imageZoomEvents(){
    //page load
    loadImageZoom();

    //responsive check
    $(window).off('resize', loadImageZoom).on('resize', loadImageZoom);
}

function loadImageZoom() {
    //only tablet and up
    if($(window).width() > 768){
        $('[data-image-zoom-enable="true"] [data-image-zoom]')
            .off('mouseenter').off('mouseleave')
            .removeProp('hoverIntent_t')
            .removeProp('hoverIntent_s')
            .hoverIntent(hoverZoomIn, hoverZoomOut);

    } else {
        // kill all zoom events if we re-size below tablet
        $('[data-image-zoom]').trigger('zoom.destroy').off('mouseenter').off('mouseleave');
    }
}

function hoverZoomIn(event){
        var image = $(this);
        var parent = image.closest('.media-wrapper');
        var alreadyLoaded = image.hasClass('js__image_already_loaded');
        var smallImage = image.hasClass('js__smallImage');

        if(!alreadyLoaded && !smallImage) {
            image.css({opacity : 0.5});
            var imageZoom = image.data().imageZoom;
            var imageZoomLoader = parent.find('.featured-image-loader').fadeIn('fast');

            parent
                .zoom({
                    url: imageZoom,
                    callback: function () { //fires when the zoomed image has finished loading
                        image.addClass('js__image_already_loaded');
                        imageZoomLoader.fadeOut('slow');
                        // slight quirk means we need to re-fire the mouseover event to actually see the image.
                        image.trigger('mouseover');
                        image.css({opacity : 1});
                    },
                    onZoomIn: function () {
                        var zoomImg = parent.find('.zoomImg');

                        // Hide the zoom when zoomed image has the same size as original
                        if (zoomImg.width() <= image.width()) {
                            image.css({opacity: 1});
                            zoomImg.css('visibility', 'hidden');
                        } else {
                            zoomImg.css('visibility', 'visible');
                        }
                    }
                });
        }
}

function hoverZoomOut(){

    var image = $(this);

    image.css({opacity : 1});

}

if($('#shopify-product-reviews').length > 0){

    var $productReviewsPlaceholder = $('.desktop_review_placeholder');
    var $productReviews = $('#shopify-product-reviews', $productReviewsPlaceholder);
    var $productReviewsClone = $productReviews.clone();

    moveProductReviews($productReviewsClone);

    $(window).on('resize', function(){

        moveProductReviews($productReviewsClone);

    });

}

function moveProductReviews($productReviews){

    if($(window).width() < 768) {

        $('.mobile_review_placeholder').append($productReviews);

    } else {

        $('.mobile_review_placeholder #shopify-product-reviews').remove();

    }

}

load_TextAdvertCarousel();

function load_TextAdvertCarousel(){

    if($('.text-advert-section').length > 0){

        $(".text-advert-section .slides").addClass('owl-carousel owl-theme').owlCarousel({
            items: 1,
            autoHeight: true
        });
    }
}

// Set map Variables
var MAP_SELECTOR = '.map-wrapper';
var MAP_API_FAILED = false;
var map_objects = [];

function set_map_error(message, container) {
    if (!container) {
        container = $('.map-section__container');
    }
    container.addClass('hide');
    if (Shopify.designMode) {
        $('<div class="map-container-error"></div>').text(message).appendTo(container.parent().find('.map-section__overlay'));
    }
    container.parent().find('.homepage-map--fallback').removeClass('hide');
}

function maps_resize() {
    // Center map when screensize is changed
    map_objects.forEach(function (map) {
        var currCenter = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(currCenter);
    });
}

function map_init(map_element) {
    var config = {
      zoom: 14
    };

    var section = map_element.dataset.id;
    var colors = map_element.dataset.colors;
    var style = [];
    try {
        style = JSON.parse(document.getElementById('homepage-map--theme--' + section).textContent);
    } catch (e) {
        console.error('Unable to parse theme style:', e);
    }
    var container = document.querySelector('#map-container-' + section);
    if (!container) {
        return;
    }
    var $container = $(container);
    if (MAP_API_FAILED) {
        set_map_error('Google Maps authentication error, API key might be invalid', $container);
    }

    var map = new google.maps.Map(container, {
        zoom: config.zoom,
        styles: style,
        disableDefaultUI: true,
        draggable: false,
        clickableIcons: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
    });
    map_objects.push(map);

    var geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);

    function geocodeAddress(geocoder, resultsMap) {
        var address = $('#map-container-' + section).data('address-setting');
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                set_map_error('Error looking up that address', $container);
            }
        });
    }
}

// Google Map JS
function load_googlemaps() {
  var mapElements = document.querySelectorAll(MAP_SELECTOR);
  if (mapElements.length === 0) {
      // No map element on the page, don't load the map API
      return;
  }

  var apiKey = null;
  Array.prototype.forEach.call(mapElements, function (map_element) {
    var section = map_element.dataset.id;
    var elementApiKey = document.querySelector('#apikey-' + section).value;
    if (!elementApiKey) {
        return;
    }
    if (apiKey && elementApiKey && elementApiKey !== apiKey) {
        console.warn('Multiple different Google Maps API keys are not allowed, using only the first one');
        return;
    }
    apiKey = elementApiKey;
  });
  if (!apiKey) {
    console.error('Google Maps API key not provided!');
    set_map_error('Google Maps API key not provided!', null);
    return;
  }

  if (MAP_API_FAILED || !window.google || !window.google.maps || !window.google.maps.Geocoder || !window.google.maps.Map) {
    MAP_API_FAILED = false;
    $.getScript(
        'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=google_maps_loaded'
    );
  } else {
    window.google_maps_loaded();
  }
}

window.google_maps_loaded = function () {
    Array.prototype.forEach.call(document.querySelectorAll(MAP_SELECTOR), map_init);
    $(window).off('resize', maps_resize).on('resize', maps_resize);
};

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars

window.gm_authFailure = function () {
  MAP_API_FAILED = true;
  console.error('Authentication Failure');

  var $container = $('.map-section__container');

  set_map_error('Google Maps authentication error, API key might be invalid', null);
};

// Hide SPB option when product variant is soldout

wetheme.load_SPB_hide = function () {
      $('.shopify-payment-button').hide();
      $("#ShopNowContainer #AddToCart").addClass('full-width-button');
};

wetheme.load_SPB_show = function () {
      $('.shopify-payment-button').show();
      $("#ShopNowContainer #AddToCart").removeClass('full-width-button');
};

wetheme.load_all = load_all;

})(window.wetheme.$, window.wetheme);




(function($){

  $(function(){
      
    var videoLink = "";
    $("#section-1").attr("data-vide-bg", "");
    var widthWindow = $(window).width();
   
    
    
    if(widthWindow < 750){
        videoLink = "mp4:  https://player.vimeo.com/external/464041535.sd.mp4?s=c1187ce09a1ae7ac2c7f65946862f595dd9b18d7&profile_id=164,  data-vide-options=";
    }else{
        videoLink = "mp4: https://player.vimeo.com/external/464041540.hd.mp4?s=46e0c2b45663d63d8f4ed2812e860672a9ddae3b&profile_id=174,  data-vide-options=";
    }
    
    $("#section-1").attr("data-vide-bg", videoLink);
	
    
    $(document).on("click", ".video-container", function(){
    	window.location.href = '/collections/disney';
        
    })
    
    
    

    var e = 1280,
        n = $(".video-container video").attr("srcdesk");
    $(window).width() < 750 && ((e = 608), (n = $(".video-container video").attr("srcmob"))),
      $(".video-container video")
    .attr("width", e)
    .append('<source src="' + n + '" type="video/mp4" >'),
      $(".video-container video").addClass("is-loaded")

          
  });
      
})(jQuery);



