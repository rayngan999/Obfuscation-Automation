/**
 * Footer menu processing
 */
$(document).ready(function () {

    jconfirm.defaults = {
        title: 'Hello',
        titleClass: '',
        type: 'default',
        draggable: false,
        alignMiddle: true,
        typeAnimated: true,
        content: 'Are you sure to continue?',
        buttons: {},
        defaultButtons: {
            ok: {
                action: function () {
                }
            },
            close: {
                action: function () {
                }
            },
        },
        contentLoaded: function (data, status, xhr) {
        },
        icon: '',
        bgOpacity: null,
        theme: 'light',
        animation: 'zoom',
        closeAnimation: 'scale',
        animationSpeed: 400,
        animationBounce: 1.2,
        rtl: false,
        container: 'body',
        containerFluid: false,
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        autoClose: false,
        closeIcon: true, // default: null
        closeIconClass: false,
        watchInterval: 100,
        // columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
        boxWidth: '50%',
        scrollToPreviousElement: true,
        scrollToPreviousElementAnimate: true,
        useBootstrap: false,
        offsetTop: 50,
        offsetBottom: 50,
        dragWindowGap: 15,
        bootstrapClasses: {
            container: 'container',
            containerFluid: 'container-fluid',
            row: 'row',
        },
        onContentReady: function () {
        },
        onOpenBefore: function () {
        },
        onOpen: function () {
        },
        onClose: function () {
        },
        onDestroy: function () {
        },
        onAction: function () {
        }
    };

    var w = 0,
        maxHeight = 0,
        $menuFooter = $('.footer-menu li.menu-item');

    $menuFooter.each(function (idx) {
        var el = $(this);
        var maxWith = $('.main').width();
        var elWidth = el.width();
        if ((w + elWidth) > maxWith) {
            var remain = maxWith - w;
            var prev = el.prev();
            prev.width(remain + prev.width());
            el.addClass('menu-item2nd');
        } else {
            if (el.height() > maxHeight) {
                maxHeight = el.height();
            }
            el.addClass('menu-item-first-row');
        }
        el.addClass('idx-' + idx);
        w += el.width();
    });

    $menuFooter.height(maxHeight);

    $('.footer-menu li.menu-item2nd').each(function (idx) {
        var el = $(this);
        var first = $('.footer-menu li.idx-' + idx);
        el.width(first.width());
    });


    try {
        if ($('nav.menu').length) {
            var menuSticky = new Waypoint.Sticky(
                {
                    element: $('nav.menu')
                });
        }
    } catch (e) {
        console.error(e);
    }

    var $listCategories = $('ul.list-categories li'),
        $listCategoriesFeatured = $('.categories-featured .featured-list'),
        $random = Helper.randomInt(0,$listCategories.length - 1);
    try {
        if ($listCategories.hasClass('active')) {
            var index = $listCategories.filter('.active').index();
            if ($listCategoriesFeatured.length === index + 1) {
                $listCategoriesFeatured.eq(index).addClass('active');
            }
        } else {
            if ($listCategoriesFeatured.length) {
                $listCategories.eq($random).addClass('active');
                $listCategoriesFeatured.eq($random).addClass('active');
            }
        }
    } catch (e) {
        console.error(e);
    }

    if ($listCategoriesFeatured.length) {
        $listCategories.hover(function () {
            var tab_id = $(this).attr('data-tab');
            $listCategories.removeClass('active');
            $listCategoriesFeatured.removeClass('active');

            $(this).addClass('active');
            $('#' + tab_id).addClass('active');
            $(window).resize(); // fix image lazy load
        });

    }

    var $mediaSlider = $('.media-slider');

    $mediaSlider.slick(
        {
            infinite: false,
            slidesPerRow: 2,
            rows: 2
        });

    $mediaSlider.on('afterChange', function () {
        $(window).resize(); // fix image lazy load
    });

    var $topRight = $('#top-right');
    $topRight.slick(
        {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true
        });


    $('.event-list').slick(
        {
            infinite: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            vertical: true
        });

    $('.popup-br .popup-dismiss').on('click', Helper.debounce(function (e) {
        var $this = $(this),
            $container = $this.closest('.popup-br');

        if ($container.length) {
            $container.hide();
        } else {
            $this.parent().hide();
        }
    }, 500, true));

    var $btnPoll = $('.btnPoll');
    $btnPoll.click(function (e) {
        e.preventDefault();
        var $this = $(this),
            questionId = parseInt($this.data('questionId') || 0),
            pollUrl = $this.data('url'),
            $container = $this.closest('section.poll'),
            position = $this.data('position')
        ;

        var $order = $container.find('input:checked'),
            answerId = parseInt($order.data('answerId') || 0);


        if ($order.length === 0) {
            $.alert({
                title: 'ThÃ´ng BÃ¡o',
                content: 'Báº¡n hÃ£y chá»n má»t má»¥c bÃ¬nh chá»n.'
            });
        } else {
            $.ajax(
                {
                    method: 'PUT',
                    url: Helper.makeUrl(pollUrl, questionId, answerId, position),
                    dataType: 'json'
                }
            ).done(function (data) {
                if (!$.isEmptyObject(data)) {
                    if (data['Success']) {
                        if (data['Result_Render']) {
                            $.alert({
                                title: 'Káº¿t Quáº£ BÃ¬nh Chá»n',
                                content: data['Result_Render']
                            });
                        } else {
                            $.alert({
                                title: 'ThÃ´ng BÃ¡o',
                                content: 'ÄÃ£ gá»­i káº¿t quáº£ thÃ nh cÃ´ng.'
                            });
                        }
                    } else {
                        $.alert({
                            title: 'ThÃ´ng BÃ¡o',
                            content: 'ÄÃ£ gá»­i káº¿t quáº£ chÆ°a thÃ nh cÃ´ng.'
                        });
                    }
                }
            });
        }

        return false;
    });

    var toTop = $(".back-to-top");
    $(window).scroll(function () {
        var scrollBottom = $(window).scrollTop();
        if (scrollBottom > 200) {
            toTop.fadeIn();
        } else {
            toTop.fadeOut();
        }
    });

    toTop.click(function () {
        return $("html, body").animate({scrollTop: 0}, 600);
    });

    var $switchMode = $('#switchMode');
    $switchMode.on('click', Helper.debounce(function () {
        Cookies.set('switched_to_pc', !Cookies.get('switched_to_pc') ? 1 : 0);

        location.reload();
    }, 500, true));
});

function rotateAds(position, total, context) {
    var cookieName = 'rad' + position;
    var prev = Cookies.get(cookieName);
    var next = 0;
    if (prev) {
        prev = parseInt(prev);
        if (prev == (total - 1)) {
            next = 0
        } else {
            next = prev + 1
        }
        if (next >= total) {
            next = 0;
        }
    }

    for (var n = 0; n < total;  n ++) {
            var active = '.' + position + '-idx-' + n;
            if (n == next) {
                $(active, context).show()
            } else {
                $(active, context).hide();
            }
    }
    Cookies.set(cookieName, next);
}

function rotateAds2() {
    $('.rotateAds').each(function() {
        var el = $(this);
        if (el.hasClass('rotated') === false) {
            var position = el.attr('data-pos');
            var total = el.attr('data-total');
            rotateAds(position, total, el);
            el.addClass('rotated');
        }
    });
}


