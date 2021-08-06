if(top != self) {
  var clickJackWarning = "You are viewing this site from a potentially insecure third-party.\n\nPlease click OK to be forwarded to Central Dispatch.\n\nIf you trust this site, please click cancel.";
  if(confirm(clickJackWarning)){
    window.open(location.href, '_top')
  }
}

$(document).ready(function () {
    if (typeof $.fn.validator !== 'undefined') {
        $.fn.validator.Constructor.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button, :hidden)';
    }

    /* Manipulating the navbar and footer links for smaller resolution devices */
    var additionalMenus = 0;

    $('#navbar').on('show.bs.collapse', function () {
        if ($('#footerlinks').length) {
            $('#navbar').append($('#footerlinks').html());
            $('#navbar ul').last().removeClass('list-inline').addClass('nav navbar-nav');
            additionalMenus++;
        }
    });

    $('#navbar').on('hidden.bs.collapse', function () {
        while (additionalMenus > 0) {
            $('#navbar > ul:last-child').remove();
            additionalMenus--;
        }
    });

    /* Mac vs. PC */
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
        $('.commandOrControl').html('Command');
    } else {
        $('.commandOrControl').html('Ctrl');
    }

    /* iPhone/iPod Only Considerations */
    if(!navigator.userAgent.match(/iPhone/i) && !navigator.userAgent.match(/iPod/i)) {
        $('.iphone-only').remove();
    }

    /* Footer */
    $('#page-footer .collapse').on('hide.bs.collapse', function () {
        if (window.innerWidth >= 768) {
            return false;
        }

        $(this).prev().children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }).on('show.bs.collapse', function () {
        $(this).prev().children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    });

    /* Resize Functionality */
    $(window).on('resize', function () {
        if (window.innerWidth >= 768) {
            $('.navbar-collapse').collapse('hide');
            $('#page-footer-nav .collapse').addClass('in');
        } else {
            $('#page-footer-nav .collapse').removeClass('in');
        }
    });

    /* Fire off a resize event to init page state */
    $(window).trigger('resize');

    /* Form fixup */
    var canHaveOverlayLabel = function (el) {
        if (
                !$(el).parents('.form-group').hasClass('has-error') &&
                $(el).is(':input') &&
                !$(el).is(':radio') &&
                !$(el).is(':checkbox') &&
                !$(el).is(':file') &&
                !$(el).closest('form').hasClass('form-inline') &&
                $(el).attr('readonly') != 'readonly' &&
                $(el).attr('disabled') != 'disabled' &&
                $(el).attr('type') != 'hidden' &&
                ((!$(el).is('select') && $(el).val() == '') ||
                        (
                                $(el).is('select') &&
                                $(el).find("option:selected").text() == '' &&
                                $(el).attr('multiple') != 'multiple' &&
                                typeof ($(el).attr('size')) == 'undefined'
                                )
                        )) {
            return true;
        } else {
            return false;
        }
    }

    /* (sigh) I give up. */
    setupFormsWithinElement = function (parentEl) {
        var inputCollection = $(parentEl).find(':input');
        inputCollection.each(function (i, e) {
            /* remove feedback icons */

            if($(e).is('input[type="hidden"]'))
            {
                //Don't setup hidden inputs. That's silly. Just keep swimming.
                return;
            }

            $(e).parents('.form-group').each(function (i, e) {
                $(this).find('.glyphicon.form-control-feedback').remove();
            })

            /* add asterisks to required and make "data-readonly" look enabled */
            if ($(e).attr('required') == 'required' || $(e).attr('data-readonly') == 'readonly') {
                if ($(e).closest('.form-group').find('.checkbox-inline').length > 0) {
                    $(e).closest('.form-group').find('input:first').after($('<span>').html('* ').addClass('text-danger small'));
                } else {
                    $(e).closest('.form-group').find('label:first').prepend($('<span>').html('* ').addClass('text-danger small'));
                }
            }
            if ($(e).attr('data-readonly') == 'readonly' && $(e).attr('disabled') != 'disabled') {
                $(e).css({'background': '#FFF'});
            }

            /* input mask for all phone fields */
            if ($(e).is('input[type="text"]') && $(e).is(':input[id *= "phone"], :input[id *= "Phone"], :input.phone')) {
                $(e).inputmask({
                    showMaskOnHover: false,
                    mask: [
                        {"mask": '(999) 999-9999 [x9{1,4}]'},
                    ],
                    greedy: false,
                });
            }

            if ($(e).is(':input.url')) {
                $(e).inputmask({
                    showMaskOnHover: false,
                    mask: [
                        {"mask": "\\http://i{+}"}
                    ],
                    definitions: {
                        i: {
                            validator: ".",
                            cardinality: 1
                        }
                    },
                });
            }

            if ($(e).is(':input.email')) {
                $(e).inputmask('email', {
                    showMaskOnHover: false
                });
            }


            if (canHaveOverlayLabel($(e))) {
                if (typeof (labelLeft) == 'undefined') {
                    var inputTestEl = $("<input>").addClass('form-control').hide().appendTo("body");
                    window.labelLeft = parseInt(inputTestEl.css('padding-left'));
                    inputTestEl.remove();
                }

                var left = labelLeft;
                if ($(e).closest('.form-group').find('.input-group').length > 0) {
                    if($(e).closest('.form-group').find('.input-group').children().first().hasClass('input-group-addon')){
                        //the way input-group-addon calculates it's width is not consistent with .width(); a race condition reports the width as 1 before the page has finished loading.
                        left = left + (parseInt($(e).closest('.form-group').find('.input-group-addon').css('padding-left')) * 3);
                    }
                }

                $(e).closest('.form-group').css({'position': 'relative'});
                $(e).closest('.form-group').find('label:first').css({
                    'position': 'relative',
                    'bottom': '-32px',
                    'left': left + 'px',
                    'color': '#999',
                    'pointer-events': 'none'
                });
                $(e).closest('.form-group').find('label:first').find('.glyphicon-info-sign').hide();
                $(e).removeAttr('placeholder');
            }
        });
    }

    setupFormsWithinElement(document)

    /* animations */
    $(document).on('focusin change', ':input', function (e) {
        if (!$(this).is(':radio') && !$(this).is(':checkbox')) {
            if (e.type == 'focusin') {
                $(this).closest('.form-group').find('label').addClass('focus');
            }
            $(this).closest('.form-group').find('label:first').animate({
                'position': 'relative',
                'bottom': '0px',
                'left': '0px',
                'color': '#000'
            }, '400');
            $(this).closest('.form-group').find('label:first').find('.glyphicon-info-sign').show();
            $(this).closest('.form-group').find('label:first').css({'pointer-events': 'visible'})
        }
    });
    $(document).on('focusout', ':input', function (e) {
        if (canHaveOverlayLabel(this)) {
            var left = labelLeft;
            if ($(this).closest('.form-group').find('.input-group-addon').length > 0) {
                left = left + $(this).closest('.form-group').find('.input-group-addon').outerWidth();
            }
            $(this).closest('.form-group').find('label:first').animate({
                'position': 'relative',
                'bottom': '-32px',
                'left': left + 'px',
                'color': '#999'
            }, '400', function () {
                $(this).parents('.form-group').find('label').removeClass('focus');
            });
            $(this).closest('.form-group').find('label:first').find('.glyphicon-info-sign').hide();
            $(this).closest('.form-group').find('label:first').css({'pointer-events': 'none'})
        }
        $(this).parents('.form-group').find('label').removeClass('focus');
    });

    $(".nav a").each(function (i, e) {
        if (window.location.pathname == $(e).attr('href')) {
            $(e).parents('li').addClass("active");
        }
    });

    $.widget.bridge('jQtooltip', $.ui.tooltip);
    $(document).jQtooltip({
        items: '.glyphicon-info-sign',
        content: function (callback) {
            var el = $(this);
            callback(el.attr('data-title'));
        }
    });
    detectPlugins = function(username) {
        plugins = [
            {
                name: "ship_cars",
                url: "chrome-extension://dmpjiaifmhmnbbphkchdpjejooggcdem/error_message.html"
            },
            {
                name: "super_dispatch",
                url: "chrome-extension://npciikilfcggljgdkebakdcccmkdmpik/html/send-to-sd-modal.html"
            }
        ];
        for (var p_idx = 0; p_idx < plugins.length; p_idx++) {
            var p_obj = plugins[p_idx];
            $.ajax({
                url: p_obj.url,
                type: "GET",
                datatype: "html",
                async: false,
                success: function(data) {
                    var cb = Math.round(new Date().getTime() / 1000);
                    $.get('/protected/logging?username='+username+'&plugin='+p_obj.name+'&cb='+cb, function(data) {
                        // console.clear();
                    });
                }
            });

        }
    };
});