$(document).ready(function () {
    loadMenue();
    dropDownHeader();
    anchorLinks();
    boxOpen = false;
    subnaviGeladen = false;
    hauptnaviGeladen = false;

    function googleEvent(string) {
        //_gaq.push(['_trackEvent', string, 'click', 'menu']);
        tmEvent(string, 'click', 'menu');
    }

    document.body.addEventListener('click', () => {
        const customElements = [
            { identifier: 'domainSwitcher', customSelector: document.querySelector('tm-domainswitcher'), keyProp: 'openList', falsyValue: false },
            { identifier: 'userBox', customSelector: document.querySelector('tm-user-box'), keyProp: 'dropdownVisible', falsyValue: '' },
            { identifier: 'quickSelect', customSelector: document.querySelector('tm-quick-select-bar'), keyProp: 'dropdownVisible', falsyValue: '' }
        ];

        customElements.forEach(ce => {
          // since userbox is not always there, pre login phase, we need to check if it exists first
          if (ce.customSelector) {
            ce.customSelector[ce.keyProp] = ce.falsyValue;
          }
        });
    })

    document.body.addEventListener('closeDropdowns', (ev) => {
        const customElements = [
            { identifier: 'domainSwitcher', customSelector: document.querySelector('tm-domainswitcher'), keyProp: 'openList', falsyValue: false },
            { identifier: 'userBox', customSelector: document.querySelector('tm-user-box'), keyProp: 'dropdownVisible', falsyValue: '' },
            { identifier: 'quickSelect', customSelector: document.querySelector('tm-quick-select-bar'), keyProp: 'dropdownVisible', falsyValue: '' }
        ];

        customElements.forEach(ce => {
            if (ev.detail !== ce.identifier) {
                ce.customSelector[ce.keyProp] = ce.falsyValue;
            }
        })
    })

    document.body.addEventListener('showDebugInfo', () => {
      const debugBox = document.querySelector('#debugInfos');
      debugBox.style.display = 'block';
      $(document).scrollTop($(document).height());
    })

    $('.breadcrumb-button').on('click', function () {
        //_gaq.push(['_trackEvent', 'breadcrumb-button', 'click', 'menu']);
        tmEvent('breadcrumb-button', 'click', 'menu');
    });
    if (!document.addEventListener) {
        document.attachEvent('touchstart', function () { });
    } else {
        document.addEventListener('touchstart', function () { }, false);
    }
    $('#featured')
        .tabs({ fx: { opacity: 'toggle' } })
        .tabs('rotate', 5000, true);
});

function anchorLinks() {
    var diff = 110;
    if (window.matchMedia('only screen and (max-width: 768px)').matches) {
        diff = 50;
    }
    $('a.anchorLink').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - diff,
        });
    });
}

function dropDownHeader() {
    $('.dropdown-header, .dropdown-image').on('click', function () {
        $(this).toggleClass('active_dropdown-header');
        $(this)
            .parent()
            .find('.dropdown-content')
            .toggle('fast');
    });
}

function loadMenue() {
    var desktopMediaQuery = window.matchMedia('(min-width:768px)');
    if (desktopMediaQuery.matches) {
        $('#main #mainmenue').on('click', "#submenu li a[href='#']", function (e) {
            e.preventDefault();
        });

        $('#main').on('click', '#submenu .megamenu_drop', function (e) {
            e.preventDefault();
            return false;
        });

        $('#main').on('mouseenter', '#hauptmenuepunkte .megamenu_drop', function () {
            navipunktID = $(this)
                .parent('li')
                .attr('id');
            if (!hauptnaviGeladen) {
                hauptnaviGeladen = true;
                $.ajax({
                    url: '/navigation/hauptnavi',
                    type: 'GET',
                    success: function (data) {
                        $('#hauptmenuepunkte li').each(function () {
                            var elementId = $(this).attr('id');
                            if (elementId !== undefined) {
                                var replaceHtml = $(data)
                                    .filter('#' + elementId)
                                    .find('.dropdown_fullwidth')
                                    .html();
                                $(this)
                                    .find('.dropdown_fullwidth')
                                    .html(replaceHtml);
                            }
                        });
                        if (onlyTablet == 1) {
                            $('#hauptmenuepunkte li#' + navipunktID).addClass('pseudohover');
                            $('#main').on('mouseover', function () {
                                $('#hauptmenuepunkte li.megamenu_drop_list').removeClass(
                                    'pseudohover'
                                );
                            });
                        }
                    },
                });
            }
        });
        $('#main').on('mouseenter', '#submenu .megamenu_drop', function () {
            subnavipunktID = $(this)
                .parent('li')
                .attr('id');
            if (!subnaviGeladen) {
                subnaviGeladen = true;
                $.ajax({
                    url: '/navigation/subnavi',
                    data: {
                        controller: naviController,
                        action: naviAction,
                        path: naviPath,
                        id: naviId,
                        saison_id: naviSaison,
                    },
                    type: 'GET',
                    success: function (data) {
                        $('#submenu li').each(function () {
                            var elementName = $(this).data('name');
                            if (elementName !== undefined) {
                                var replaceHtml = $(data)
                                    .filter('[data-name=' + elementName + ']')
                                    .find('.dropdown_fullwidth')
                                    .html();
                                $(this)
                                    .find('.dropdown_fullwidth')
                                    .html(replaceHtml);
                            }
                        });
                        $('#submenu a[href="#"]').click(function (e) {
                            e.preventDefault();
                        });
                        if (onlyTablet == 1) {
                            $('#submenu li#' + subnavipunktID).addClass('pseudohover');
                            $('#main').on('mouseover', function () {
                                $('#submenu li').removeClass('pseudohover');
                            });
                        }
                    },
                });
            }
        });
        $('#submenu .megamenu_drop').on('mouseleave', function () {
            $('#hauptmenuepunkte li.megamenu_drop_list').removeClass('pseudohover');
        });
    } else {
        function openMainMenue() {
            $('#mainmenue').toggleClass('active_menue');
            $('#main').toggleClass('menue_is_active');
            $('#menue_overlay').toggleClass('is_active');
        }

        function closeMainMenue() {
            $('#mainmenue').removeClass('active_menue');
            $('#main').removeClass('menue_is_active');
            $('#menue_overlay').removeClass('is_active');
        }

        function openSubMenue() {
            $('#submenu').addClass('active_menu');
            $('#main').addClass('menue_is_active');
            $('#menue_overlay').addClass('is_active');
        }

        function closeSubMenue() {
            $('#submenu').removeClass('active_menu');
            $('#main').removeClass('menue_is_active');
            $('#menue_overlay').removeClass('is_active');
        }

        // hauptmenue open
        $('#mobile_hauptmenu_button .schaltflaeche').on('click', function () {
            openMainMenue();
            if (!hauptnaviGeladen) {
                hauptnaviGeladen = true;
                $.ajax({
                    url: '/navigation/hauptnavi',
                    type: 'GET',
                    success: function (data) {
                        $('#hauptmenuepunkte').html(data);
                        var event = new CustomEvent("liveMatchCounterRequestMatches");
                        document.dispatchEvent(event);
                    },
                });
            }
        });
        // hauptmenue first level
        $('#mobile_hauptmenu_button').on(
            'click',
            'ul#hauptmenuepunkte > li.megamenu_drop_list a',
            function () {
                $(this)
                    .parent('li')
                    .toggleClass('active_submenu');
            }
        );
        // hauptmenue second level
        $('#mobile_hauptmenu_button').on(
            'click',
            '.dropdown_fullwidth span.oberpunkt',
            function () {
                $(this)
                    .parent('div')
                    .toggleClass('active_subsubmenu');
            }
        );
        // submenu open
        $('#subnavigation .submenu-text').on('click', function () {
            openSubMenue();
            if (!subnaviGeladen) {
                subnaviGeladen = true;
                $.ajax({
                    url: '/navigation/subnavi',
                    data: {
                        controller: naviController,
                        action: naviAction,
                        path: naviPath,
                        id: naviId,
                        saison_id: naviSaison,
                    },
                    type: 'GET',
                    success: function (data) {
                        $('#submenu').html(data);
                    },
                });
            }
        });
        // submenu first level
        $('#subnavigation').on('click', '#submenu .megamenu_drop', function () {
            $(this)
                .parent('li')
                .toggleClass('active_submenu');
        });
        // submenu second level
        $('#subnavigation').on(
            'click',
            '#submenu .dropdown_fullwidth span.oberpunkt',
            function () {
                $(this).toggleClass('aktiver_oberpunkt');
                $(this)
                    .next('ul')
                    .toggleClass('active_subsubmenu');
            }
        );
        // submenu close Button
        $('#subnavigation').on('click', '#close_submenu', function () {
            closeSubMenue();
        });
        // overlay
        $('#menue_overlay').on('click', function () {
            closeMainMenue();
            closeSubMenue();
        });
    }
}

function humanMessage(message, status) {
    var FlashMessageDummy =
        '<div id="flash-msg-box" class="alert-box ' + status + '"></div>';
    var gotFlashMessage = $(FlashMessageDummy).text(message);
    var makeGottLightbox = $('<div id="gott-lightbox"></div>')
        .prependTo('#main')
        .fadeIn()
        .animate({ opacity: 1.0 }, 3000)
        .fadeOut('slow');
    gotFlashMessage.prependTo('#gott-lightbox');
    $('#gott-lightbox').on('click', function (event) {
        event.preventDefault();
        $(makeGottLightbox).remove();
    });
    setTimeout(function () {
        $(makeGottLightbox).remove();
    }, 4000);
}

$(function () {
    $('.js-switcher select').change(function () {
        switchPage($(this));
    });
    $('.js-switcher').submit(function () {
        switchPage($(this).find('select'));
        return false;
    });
    $('.js-form-params2path').submit(function () {
        sendFormParams2Path($(this));
        return false;
    });
    $('.toggler').click(function () {
        var target = $(this).attr('data-toggle');
        $('#' + target).toggle('fast');
        $(this).toggleClass('offen');
    });
    $('.info-content').click(function () {
        $(this).toggleClass('info-offen', 'fast');
        //_gaq.push(['_trackEvent', 'info-text', 'click', 'info']);
        // tmEvent('info-text', 'click', 'info');
    });
    $('.breadcrumb .home').click(function () {
        if ($('#main').innerWidth() < 768) {
            $('.breadcrumb').toggleClass('breadcrumb-offen', 'fast');
        }
    });
    $('.breadcrumb-select select').change(function () {
        if ($(this).val() !== '') {
            $(this)
                .parents('form.breadcrumb-form')
                .find('.breadcrumb-button')
                .removeAttr('disabled')
                .removeClass('disabled');
        }
    });
    $(window).resize(function () {
        if ($(window).width() > 766) {
            $('#mainmenue li:not(.megamenu_button)').show();
        }
    });
});

function switchPage(element) {
    property = element.attr('name');
    value = element.val();
    pathname = window.location.pathname;
    n = pathname.lastIndexOf(property);
    if (n > 0) {
        pathname = pathname.substring(0, n - 1);
    }
    if (value != '') {
        pathname = pathname + '/' + property + '/' + value;
    }
    window.location.href = pathname;
}

function sendFormParams2Path(form) {
    formParams = form.serializeArray();
    path = '';
    jQuery.each(formParams, function (i, formParam) {
        if (formParam.value) {
            path = path + '/' + formParam.name + '/' + formParam.value;
        }
    });
    url = form.attr('action') + path;
    location.href = url;
}

function wechselLiga(liga_id) {
    var url = splitLocation();
    if (url[2] == 'spielerbieten') {
        url[2] = 'transfermarkt';
    }
    if (url[2] == 'verein' || url[2] == 'spieler' || url[2] == 'spielerprofil') {
        location.href =
            window.location.protocol +
            '//' +
            window.location.host +
            '/' +
            url[1] +
            '/' +
            url[2] +
            '/' +
            url[3] +
            '/' +
            liga_id +
            '/' +
            url[5] +
            '/' +
            url[6];
    } else {
        location.href =
            window.location.protocol +
            '//' +
            window.location.host +
            '/' +
            url[1] +
            '/' +
            url[2] +
            '/' +
            url[3] +
            '/' +
            liga_id +
            '';
    }
}

function wechselKaderuebersicht(user_id) {
    var url = splitLocation();
    url[2] = 'aufstellungUndKader';
    location.href =
        window.location.protocol +
        '//' +
        window.location.host +
        '/' +
        url[1] +
        '/' +
        url[2] +
        '/' +
        url[3] +
        '/' +
        url[4] +
        '/user/' +
        user_id +
        '';
}

function wechselTipprunde(wettbewerb_id) {
    var url = splitLocation();
    if (url[3] == 'fanliga') {
        url[3] = 'fanligen';
    }
    if (url[3] == 'privateliga') {
        url[3] = 'privateligen';
    }
    location.href =
        window.location.protocol +
        '//' +
        window.location.host +
        '' +
        url[0] +
        '/' +
        url[1] +
        '/' +
        url[2] +
        '/' +
        url[3] +
        '/' +
        url[4] +
        '/' +
        wettbewerb_id +
        '';
}

function nl2br(str, is_xhtml) {
    var breakTag =
        is_xhtml || typeof is_xhtml === 'undefined' ? '<br />' : '<br>';
    return (str + '').replace(
        /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
        '$1' + breakTag + '$2'
    );
}

function splitLocation() {
    var parts = window.location.pathname.split('/');
    return parts;
}

function formatiereMarktwert(marktwert) {
    if (marktwert >= 1000000000) {
        marktwert = round(marktwert / 1000000000, 2);
        marktwert = number_format(marktwert, 2, ',', '.') + ' Mrd. â¬';
    } else if (marktwert >= 1000000) {
        marktwert = round(marktwert / 1000000, 2);
        marktwert = number_format(marktwert, 2, ',', '.') + ' Mio. â¬';
    } else if (marktwert == 0) {
        marktwert = '-';
    } else if (marktwert <= -1000000) {
        marktwert = round(marktwert / 1000000, 2);
        marktwert = number_format(marktwert, 2, ',', '.') + ' Mio. â¬';
    } else {
        marktwert = marktwert / 1000;
        marktwert = number_format(marktwert, 0, '', '.') + ' Tsd. â¬';
    }
    return marktwert;
}

function round(value, precision, mode) {
    //phpjs.org/functions/round/
    http: var m, f, isHalf, sgn; // helper variables
    precision |= 0; // making sure precision is integer
    m = Math.pow(10, precision);
    value *= m;
    sgn = (value > 0) | -(value < 0); // sign of the number
    isHalf = value % 1 === 0.5 * sgn;
    f = Math.floor(value);
    if (isHalf) {
        switch (mode) {
            case 'PHP_ROUND_HALF_DOWN':
                value = f + (sgn < 0); // rounds .5 toward zero
                break;
            case 'PHP_ROUND_HALF_EVEN':
                value = f + (f % 2) * sgn; // rouds .5 towards the next even integer
                break;
            case 'PHP_ROUND_HALF_ODD':
                value = f + !(f % 2); // rounds .5 towards the next odd integer
                break;
            default:
                value = f + (sgn > 0); // rounds .5 away from zero
        }
    }

    return (isHalf ? value : Math.round(value)) / m;
}

function number_format(number, decimals, dec_point, thousands_sep) {
    // http://phpjs.org/functions/number_format/
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function changeIcon(schaetzung, originalwert) {
    if (schaetzung > originalwert) {
        $('#amount_icon')
            .removeAttr('class')
            .attr('class', 'icons_sprite green-arrow-ten');
    } else if (schaetzung < originalwert) {
        $('#amount_icon')
            .removeAttr('class')
            .attr('class', 'icons_sprite red-arrow-ten');
    } else {
        $('#amount_icon')
            .removeAttr('class')
            .attr('class', 'icons_sprite grey-block-ten');
    }
}

$(function () {
    var targets = $('[rel~=tooltip]'),
        target = false,
        tooltip = false,
        type = false,
        content = false;
    targets.bind('mouseenter', function () {
        target = $(this);
        type = target.attr('data-type');
        content = target.attr('data-content');
        tooltip = $('<div id="tooltip" class="loading"></div>');
        if (!content || content == '') return false;
        tooltip.css('opacity', 0).appendTo('body');
        if (type == 'link') {
            $.get(content, function (data) {
                tooltip.html(data).removeClass('loading');
            });
        } else {
            tooltip.html(content).removeClass('loading');
        }

        var init_tooltip = function () {
            var pos_hor = target.offset().left + target.outerWidth() + 10,
                pos_top = target.offset().top - 25,
                typ_hor = 'left';
            if (pos_hor > $('#main').outerWidth() / 2 + $('#main').offset().left) {
                pos_hor = $(window).width() - target.offset().left;
                typ_hor = 'right';
            }

            if (pos_top < 0) {
                var pos_top = target.offset().top + target.outerHeight();
            }

            tooltip
                .css(typ_hor, pos_hor)
                .css('top', pos_top)
                .animate({ opacity: 1 }, 50);
        };
        init_tooltip();
        $(window).resize(init_tooltip);
        var remove_tooltip = function () {
            tooltip.animate({ top: '-=10', opacity: 0 }, 50, function () {
                $(this).remove();
            });
        };
        target.bind('mouseleave', remove_tooltip);
        tooltip.bind('click', remove_tooltip);
    });
});

function tinyExecCommandAddTarget(
    editor_id,
    elm,
    command,
    user_interface,
    value
) {
    var editor = tinyMCE.get(editor_id);
    switch (command.toLowerCase()) {
        case 'createlink':
            $(editor.getBody())
                .find('a')
                .attr('target', '_blank');
            break;
    }
}

function openCMP() {
    if (window._sp_ && typeof window._sp_.loadPrivacyManagerModal === 'function') {
        window._sp_.loadPrivacyManagerModal(213392)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var cmpLinks = document.querySelectorAll('.cmp-link');

    if (cmpLinks && cmpLinks.length) {
        cmpLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                openCMP();
            })
        })
    }

   window.LazyLoadInstance = new LazyLoad();

    MicroModal.init({
        onShow: modal => console.info(`${modal.id} is shown`), // [1]
        onClose: modal => console.info(`${modal.id} is hidden`), // [2]
        openTrigger: 'data-custom-open', // [3]
        closeTrigger: 'data-custom-close', // [4]
        openClass: 'is-open', // [5]
        disableScroll: true, // [6]
        disableFocus: false, // [7]
        awaitOpenAnimation: false, // [8]
        awaitCloseAnimation: false, // [9]
        debugMode: false // [10]
    });
});
