/**
 * Something similar to printful.dashboard.js, no idea what's actually still relevant here
 */

$(document).ready(function () {
    $('#bottom ul#nav-bt li').each(function () {
        var $anchor = $(this).find('a');
        if ($anchor.attr('href').indexOf('://') != -1) {
            $anchor.attr('target', '_blank');
        }
    });

    $(document).on('mouseenter mouseleave', '.user-nav li.dropdown', function (e) {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            e.type == 'mouseenter'
                ? $(this).addClass('open')
                : $(this).removeClass('open');
        }
    });

    $(document).on('click', '#nav li.dropdown > a', function () {
        var elem = $(this),
            parent = elem.parent();

        if (parent.hasClass('active')) {
            parent
                .removeClass('active')
        }
        else {
            //noinspection JSJQueryEfficiency
            $('#nav li.dropdown').removeClass('active');
            parent.addClass('active');
        }
    });

    $('a.button.black[data-label]').on('mouseenter mouseleave', function (e) {
        var $el = $(this);
        $el.html(e.type == 'mouseenter' ? $el.attr('title') : $el.attr('data-label'));
    });

    $('[data-toggle="tooltip"]').tooltip({html: true});

    $(document).on('mouseenter mouseleave', '#content span.info', function (e) {
        if (e.type === 'mouseenter')
            $(this).find('.tip').show();
        else
            $(this).find('.tip').hide();
    });

    $('[data-toggle="tooltip-bottom"]').tooltip({html: true, placement: 'bottom'});


    $(document).on('mouseenter mouseleave', 'table tr[data-popup]', function (e) {
        if (e.type === 'mouseenter') {
            var $image = $(this).attr('data-popup');

            if ($image === null || !$image.length)
                return false;
            var img = new Image();
            img.onload = function () {
                var width = this.width;
                var height = this.height;
                $('<div/>', {
                    'class': 'impop',
                    html: img
                }).appendTo('body');
                //noinspection JSValidateTypes
                $('div.impop').css({
                    position: "absolute",
                    top: $(window).scrollTop() + ($(window).height() - height) / 2,
                    //left:  ($('div.impop img').width()) / 2,
                    left: (window.innerWidth / 2) - width / 2,
                    width: width
                }).show();
            };
            img.src = $image;
        }
        else {
            $('div.impop').remove();
        }
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            //noinspection JSJQueryEfficiency
            if ($('.modal.in.modal-legacy').length && !$('.modal:not(.modal-legacy)').length) {
                $('.modal.in.modal-legacy').last().modal('hide');
            }
        }
    });

    $(document).on('click', '.prev-testimonial', function () {
        var current = $('.testimonial-item:visible');
        var prev = current.prev('.testimonial-item');

        current.fadeOut(function () {
            if (prev.length > 0) {
                prev.fadeIn();
            }
            else {
                $('.testimonial-item').last().fadeIn();
            }
        });
    });

    $(document).on('click', '.next-testimonial', function () {
        var current = $('.testimonial-item:visible');
        var next = current.next('.testimonial-item');

        current.fadeOut(function () {
            if (next.length > 0) {
                next.fadeIn();
            }
            else {
                $('.testimonial-item').first().fadeIn();
            }
        });
    });

    $(document).on('mouseenter mouseleave', 'div.thumbnail.with-caption', function (e) {
        if (e.type == 'mouseenter') {
            $(this).find('.caption').slideDown('fast');
        }
        else {
            $(this).find('.caption').slideUp('fast');
        }
    });


    // TODO This has to be removed after new login page launch. Ask MBriedis
    $('.toggle-password').on('change', function () {
        var $pass_field = $(this).parent()
            .parent()
            .find('.form-control');

        $pass_field.attr('type', 'password');
        $pass_field.removeClass('data-hj-suppress');

        if ($(this).is(':checked')) {
            $pass_field.attr('type', 'text');
            $pass_field.addClass('data-hj-suppress');
        }
    });

    $(document).on('click', 'a.connect-platform', function (e) {
        if (PF.Customer.isLogged()) {
            return true;
        }
        e.preventDefault();

        var storeName = $(this).data('storename');
        var u = new Url;
        var customRedirectUrl = $(this).data('customRedirectUrl');

        u = customRedirectUrl
            ? customRedirectUrl
            : (u.path + (u.query.toString() ? '?' + u.query.toString() : ''));

        new PF.LandingPlatformSignup(u, storeName);
    });

    $(document).on('shown.bs.modal', function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="tooltip-html"]').tooltip({html: true, delay: {show: 100, hide: 2000}});

        var $baseIndex = 1040;
        $('.modal-backdrop').each(function () {
            $(this).css('zIndex', $baseIndex);
            $baseIndex += 10;
        });

        $baseIndex = 1050;
        $('.modal').each(function () {
            // update only visible modals
            if ($(this).css('display') !== 'none') {
                $(this).css('zIndex', $baseIndex);
                $baseIndex += 10;
            }
        });
    });

    $(document).trigger('printful::loaded');
    PF.loaded = true;
});

function onPrintfulLoaded(callback) {
    if (PF.loaded) {
        callback();
        return;
    }

    $(document).on('printful::loaded', callback);
}
