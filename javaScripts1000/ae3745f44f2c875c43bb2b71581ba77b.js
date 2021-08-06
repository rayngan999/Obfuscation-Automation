ï»¿/// <reference path="/@JSense.js" />
/// <reference path="jquery-1.7.1-vsdoc.js" />


//allows for console.log in IE
var console = console || { "log": function () { } };

//allows for .indexOf in IE8 and lower

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}


    function compareArrays (array1, array2) {
        if (!array2)
            return false;
        if (array1.length != array2.length)
            return false;

        for (var i = 0; i < array1.length; i++) {
            // Check if we have nested arrays
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                // recurse into the nested arrays
                if (!array1[i].compare(array2[i]))
                    return false;
            }
            else if (array1[i] != array2[i]) {
                return false;
            }
        }
        return true;
    }

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

jQuery.cachedScript = function (url, options) {
    options = $.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: url
    });

    return jQuery.ajax(options);
};

jQuery.fn.setCaret = function (pos) {
    var input = this[0];
    if (pos < 0) pos = input.value.length;
    if (jQuery(input).is(':visible')) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(pos, pos);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            if (pos >= 0) {
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
            } else range.collapse(false);
            range.select();
        } else if (input.selectionStart) {
            input.focus();
            input.selectionStart = pos;
            input.selectionEnd = pos;
        }
    }
};

function loadPbars(container) {
    $('div.pBar', container).each(function () {
        updatePBar($(this));
    });
}

function updatePBar($pbar) {
    var barWidth = 75;
    var percent = Math.floor(parseInt($pbar.text()));
    if ($pbar.attr('pbar') != null) { percent = Math.floor(parseInt($pbar.attr('pbar'))); }
    $pbar.attr('pbar', percent);
    if ($pbar.find('.pbarInnerDiv').length == 0) {
        $pbar.addClass('p0').html('<div><div class="pbarInnerDiv"></div></div> <span class="pbarPercentStatus"></span>');
    }

    if (percent <= 0) {
        percent = 0;
    } else {
        $pbar.removeClass('p0');
        if (percent >= 100) {
            $pbar.addClass('p100');
            percent = 100;
        }

        var pbImageSrc = ($pbar.hasClass('green') || percent < 100) ? 'pbar.png' : 'pbar100.png';
        var pWidth = Math.ceil(barWidth * percent / 100);
        if (percent == 100) {
            pWidth = 75;            
        }

        var $pbimg;
        if ($pbar.find('div.pbarImage').length == 0) {
            $pbar.find('div.pbarInnerDiv').html('<div class="pbarImage pbarImageGreen"></div>');
        }

        var $pbimg = $pbar.find('div.pbarImage');

        $pbimg.css('width', pWidth + 'px');
        if (percent == 100 && !$pbar.hasClass('green')) {
            $pbimg.removeClass('pbarImageGreen').addClass('pbarImageRed');
        }
    }
    $pbar.find('span.pbarPercentStatus').html(percent + '%');    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function hasInvalidText(input, validRegex) {
    return validRegex.test(input)
}

function DateUtc2Offset(input) {
    var retDate = new Date(input);
    var dt = retDate.getTimezoneOffset();
    var newDate = new Date(retDate - (dt * -60000));
    return newDate;
}

function DateTime2Date(input, isOffset) {
    var retDate = new Date(parseInt(input.replace("/Date(", "").replace(")/", ""), 10));    
    var dt = retDate.getTimezoneOffset();
    var newDate = new Date(retDate - ((dt) * 60000) * -1);  //Converts display time back to given time.
    if (isOffset) { return retDate; }
    return newDate;
}

function Date2DateTime(input) {    
    var tzo = (input.getTimezoneOffset() / 60 * -1000);
    tzo = (tzo < 0 ? "" + (tzo / -1000 >= 1 ? tzo : "0" + tzo)
                    : "+" + (tzo / 1000 >= 1 ? tzo : "0" + tzo));
    return "\/Date(" + input.valueOf() + ")\/";
}

function DateToDateString(input) {
    if (!isDate(input)) {
        input = new DateTime2Date(input);
        input.setTime(input.getTime() - (input.getTimezoneOffset() * 60000));
    }    
    var mon = (input.getMonth() + 1).toString();
    var day = input.getDate().toString();
    var year = input.getFullYear().toString();
    var retVal = (mon.length == 1 ? '0' + mon : mon) + '/' + (day.length == 1 ? '0' + day : day) + '/' + year;
    return retVal;
};

var ssp_start;
function showSlowProcessing(isShow) {
    if (isShow) {
        ssp_start = new Date();
        $('#slowProcessingDisplay').show();
    } else {
        if ((new Date() - ssp_start) < 1500) {
            setTimeout(function () { $('#slowProcessingDisplay').hide(); }, 1500);
        } else {
            $('#slowProcessingDisplay').hide();
        }
    }    
}

function loadingOverlay(ele, isShow, showLoadingImage, imagePath) {
    if (showLoadingImage == null) { showLoadingImage = true; }
    if (imagePath == null) {imagePath = "//www.namebrightstatic.com/images/loading_anim.gif"; }
    $ele = $('#' + ele);
    if (isShow && $ele.is(':visible')) { // && $ele.parents(':[loading_overlay_div]').length == 0) {
        var loading_overlay_div = randomString(20);
        var $d = $('<div id="' + loading_overlay_div + '" class="nb_loading_overlay">' + (showLoadingImage ? '<img class="lo_img_display" style="position:absolute; top:50%; left:50%; margin-left:-50px; margin-top:-50px;" src="' + imagePath + '" />' : '') + '</div>');
        $d.insertAfter($ele);
        $d.css('height', $ele.outerHeight(true));
        $d.css('width', $ele.outerWidth(true));
        $d.css('position', 'absolute');
        $ele.fadeTo(150, .3);
        $ele.attr('loading_overlay_div', loading_overlay_div);
        $d.position({ my: "left top", at: "left top", of: $ele });
        $ele.bind('hideLoadingImage', function () {
            $('#' + loading_overlay_div).find('.lo_img_display').hide();
        });
    } else {
        if ($ele.attr('loading_overlay_div') != null) {
            $('#' + $ele.attr('loading_overlay_div')).empty().remove();
        }
        $ele.attr('loading_overlay_div', null);
        $ele.fadeTo(0, 1);
    }
}

function overlayText(ele, text, fontSize, txtColor, bgColor) {
    if (fontSize == null) { fontSize = '20'; }
    if (txtColor == null) { txtColor = '#FFFFFF'; }
    if (bgColor == null) { bgColor = 'transparent'; }

    $ele = $('#' + ele);
    var $txtEle;

    if ($ele.attr('nb_txt_overlay') != null) {
        $txtEle = $('#' + $ele.attr('nb_txt_overlay'));
        $txtEle.html(text);
    } else {
        var rid = randomString(20);
        var ehtml = '<div id="' + rid + '" class="nb_txt_overlay" style="color:' + txtColor + '; background-color:' + bgColor + '; font-size:' + fontSize + 'px;">' + text + '</div>';
        $txtEle = $(ehtml);
        $ele.attr('nb_txt_overlay', rid);
        $txtEle.bind('refresh', function () {
            if ($ele.is(':visible')) {
                $txtEle.css('position', 'absolute');
                $txtEle.position({ my: 'center bottom', at: 'center center', of: $ele });
            }
        });
    }

    if (text == '') {
        $txtEle.empty().remove();
        $ele.attr('nb_txt_overlay', null);
    } else {
        $txtEle.insertAfter($ele);        
        $txtEle.css('position', 'absolute');
        $txtEle.position({ my: 'center bottom', at: 'center center', of: $ele });
    }
}

var tcount = 5;
var refreshIntv = null;

function refreshPage(delay, resultEle) {
    if (delay == null) { delay = 0; }
    if (resultEle == null) { resultEle = '#defaultRefreshDisplay'; }    
    if (refreshIntv != null) { clearInterval(refreshIntv); refreshIntv = null; }
    var tcount = delay;
    refreshIntv = setInterval(function () {
        if (tcount == 0) {
            if (resultEle == '#defaultRefreshDisplay') {
                $(resultEle).find('#refreshDisplayInner').html('<i>Refreshing Page...</i>');
            } else {
                $(resultEle).html('<i>Refreshing page...</i>');
            }
            $(resultEle).slideDown(150);
            clearInterval(refreshIntv);
            refreshIntv = null;
            setTimeout(function () { location.reload(true); }, 500);
        } else {
            if (resultEle == '#defaultRefreshDisplay') {
                $(resultEle).find('#refreshDisplayInner').html('<i>Refreshing page in <span style="color:red;font-weight:bold;">' + tcount + '</span> seconds...</i>');
            } else {
                $(resultEle).html('<i>Refreshing page in <span style="color:red;font-weight:bold;">' + tcount + '</span> seconds...</i>');
            }            
            $(resultEle).slideDown(250);
            tcount = tcount - 1;
        }
    }, ((tcount > 0) ? 1000 : 50));
}

function watchPopupSize(popEle, overlayEle, scrollable) {
    var $pop;
    if (popEle == null)
        $pop = $('#thePopup');
    else
        $pop = $(popEle);
    if ($pop.is(':visible')) {
        var pHeight = $pop.outerHeight(true);
        var $overlay
        if (overlayEle == null)
            $overlay = $('#overlay');
        else
            $overlay = $(overlayEle);
        if ($overlay.height() < (pHeight + 253)) {
            $overlay.css({ height: pHeight + 253 });
            if (scrollable == true)
                $overlay.css("overflow-y", "scroll")
        }
        setTimeout(function () { watchPopupSize(popEle, overlayEle, scrollable); }, 1000);
    } else {
        setSizeOverlay(popEle, overlayEle);
    }
};

function overlayWarning(isOn, text) {
    $('.popup_overlay_warning_text').empty().remove();
    if (isOn) {
        //$('.overlay').addClass('overlayWarning');
        if (text.length > 0) {
            $('<div class="popup_overlay_warning_text" style="margin:8px; color:red; font-size:16px; font-weight:bold; text-align:center; background-color:yellow;">' + text + '</div>').insertAfter('.popTitle');
        }
    } else {
        //$('.overlay').removeClass('overlayWarning');
    }
}

function AddItemToCart(itemType, productType, products, categoryId, years, sanCount, serverCount, otherId, boolFlag) {
    var ci = new paramGroup();
    if (itemType == null) { itemType = 0; }
    if (productType == null) { productType = 0; }
    if (products == null) { products = new Array(); }
    if (categoryId == null) { categoryId = 0; }
    if (years == null) { years = 0; }
    if (sanCount == null) { sanCount = 0; }
    if (serverCount == null) { serverCount = 0; }
    if (otherId == null) { otherId = 0; }
    if (boolFlag == null) { boolFlag = false; }

    ci.ItemType = itemType;
    ci.ProductType = productType;
    ci.Products = products;
    ci.CategoryId = categoryId;
    ci.Years = years;
    ci.SanCount = sanCount;
    ci.ServerCount = serverCount;
    ci.OtherId = otherId;
    ci.BoolFlag = boolFlag;
    var ci_pg = new paramGroup();
    ci_pg.item = ci;

    $('#thePopup').data('newWidth', 600);
    simplePopup('<div id="addItemToCartLoadingWrap" style="display:inline-block;margin:20px;"><img src="/images/loading_anim.gif" border="0" /></div>', 'Adding item' + (products.length > 1 ? 's' : '') + ' to cart...');
    if (ci.Products.length > 20) {
        $('#addItemToCartLoadingWrap').after('<div style="display:inline-block;position:relative;top:-45px;color:red;">Please wait, adding ' + ci.Products.length + ' items to your cart can take a little time...');
    }
    CallComplexPageMethod('AddItemToCart', AddItemToCartHandler, ci_pg);
}

function AddItemToCartHandler(result) {
    var rs = $.parseJSON(result.d);
    makeServerPopup('/controls/CartItemAddedNote.ascx', 'You have added ' + rs.TotalItemsAdded + ' item' + (rs.TotalItemsAdded == 1 ? '' : 's') + ' to your cart', null, null, 600, rs.ItemType + '|' + rs.TotalItemsAdded + '|' + rs.ItemsAlreadyExisting.length + '|' + rs.ItemsOverLimit.length + '|' + rs.ItemsForRegistration.join(',') + '|' + rs.ItemsInvalid.join(','));
    $('#thePopup').find('a.popupHide').text('Close')
}

function GetDomainName(input) {
    var rs = input;
    rs = rs.replace(/https?:\/\//i,'');
    if(rs.indexOf('www.') == 0) { rs = rs.replace(/www\./i,''); }
    if(rs.indexOf('/') > 0) { rs = rs.substring(0,rs.indexOf('/')); }
    if (rs.indexOf('@') > 0) { rs = rs.substring(rs.indexOf('@')); }
    rs = rs.replace(/[^0-9a-zA-Z\-\.]+/gi, '');
    return rs;
}

$(document).ready(function () { 
    $(document).on('refreshPage.default', function () {
        refreshPage(0);
    });

    $(document).on('blur', 'input[type=text]', function (e) {
        if ($(this).attr('data-value') == null || $(this).attr('data-value') != $(this).val()) {
            $(this).val($.trim($(this).val()));
        }
    });

    logo();
    getJumpWord();
    formatPopups();
    setTextOverlays();
    setTempButtons();
    setAnimateButtonsStyle();
    setHelpLinks();
    setUpScrollCatch();
    setUnauthorizedLinks();
    bindEmptySearchFormCatch();
    setCountriesAndRegions();

    bindGlobalPopups();

    function setUpScrollCatch() {
        $('#searchText,#searchInput,#whoisInput,#domainsList').bind({
            click: function () {
                $(this).focus();
            },
            blur: function () {
                if ($(this).attr('nbkd') == null) {
                    $(this).off('keydown.nbsearch');
                    $(this).attr('nbkd', '1');
                }
            }
        });

        $('#searchText,#searchInput,#whoisInput,#domainsList').on('keydown.nbsearch', function (e) {
            $(this).off('keydown.nbsearch');
            var A = e.keyCode;
            if (A == 38 || A == 40) {
                e.preventDefault();
                $(this).blur();
                var scrollVal;
                if (A == 40) { scrollVal = 40; } else { scrollVal = -40; }
                $(window).scrollTop($(window).scrollTop() + scrollVal);
            }
        });
    }

    $("body").on("click", ".popupHide", function (event) {
        if ($(this).parents('div.frOFF').length > 0) {
            event.preventDefault();
        } else {
            if ($(this).is('a') || $(this).is('input[type="submit"]')) event.preventDefault();
            closePopup();
        }
    });

    $("div.rowBlue .x").on("click", function () { $(this).parents('.maConfirm').hide(); return false; });

    $('a.confirmdialog').on('click', function (event) {
        // alert("clicked");
        if ($(this).attr("confirmed") != null) {
            // alert("confirmed");
            return true;
        }
        else {
            event.preventDefault();
            var dialogText = $(this).attr("dialogtext");
            var rr = Math.round(Math.random() * 1000);
            var $link = $(this);
            var ev = event;

            $(this).after($('<div id="confirm' + rr + '" style="padding: 10px; max-width: 500px; word-wrap: break-word; ">' + dialogText + '<br><input type="button" class="ok" value="ok"> <input type="button" class="cancel" value="cancel"></div>'));
            $('#confirm' + rr + ' .ok').on('click', function (e) {
                //   alert("yes");
                $link.attr("confirmed", "true");
                $link.trigger(ev);
            });

            $('#confirm' + rr + ' .cancel').on('click', function (e) {
                //  alert("no");
                $(this).parent().detach();
            });
        }

    });

    $('body').on('click', '.expandLink', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-linkDiv');
        var $d = $('#' + id);
        if ($d.is(':visible')) {
            $d.slideUp(300);
        } else {
            $d.slideDown(300);
        }
    });
});

var autoFocus = true;
var helpIntervalT;

function bindEmptySearchFormCatch() {
    $('body').on('submit', '.searchForm', function (e) {
        var $st = $(this).find('.submitText');
        $st.val($st.val().replace(/[^0-9a-zA-Z\-\. \#]+/g, ''));
        if ($.trim($(this).find('.submitText').val()) == '') {
            e.preventDefault();
            $('#thePopup').data('newWidth', '400');
            simplePopup('<form><center><br/>Please enter a domain name or keyword.<br/><br/><input id="closeSearchQueryPopup" type="submit" value="Close" class="button30 orange animateButton" /></form>', 'Please Enter a Domain');
            $('#closeSearchQueryPopup').click(function (e) {
                e.preventDefault();
                closePopup();
                $st.focus();
            });
            return false;
        }
    });
}

function setHelpLinks() {
    $('a.helpPopup').not('[isbound=true]').click(function (e) {
        e.preventDefault();
        kbID = $(this).attr('data-kbid');
        if (typeof kbID === 'undefined') { kbID = 93; }
        var popselector = '/account/popups/HelpPopup.ascx';
        //var popTitle = $(this).attr('title');
        var popTitle = '';
        //if (popTitle == null) popTitle = $(this).text();
        makeHelpPopup(popselector, popTitle, kbID);
    });

    $('a.help').not('a.helpPopup').not('[isbound=true]').on('click', function (event) {
        event.preventDefault();
        $('#thePopup').attr('scrolloverride', 'true');
        clearPopupArrow(false);

        var kbid = $(this).attr('kbid');
        var $dk = $('div.poph' + kbid.replace(',', '_'));
        $dk.find('div.filter').hide();
        $('div[class*=poph]').not($dk).hide();
        var offTop;
        if ($dk.is(':visible')) {
            offTop = $dk.offset().top;
        } else {
            offTop = $dk.show().offset().top;
            $dk.hide();
        }

        if ((offTop + 90) > ($(document).scrollTop() + $(window).height())) {
            $dk.hide();
        }

        var showArrow = false;
        if (ScrollIntoView(null, offTop)) {
            showArrow = true;
        }


        var counter = 0;
        while (counter < 50) {
            if (!$('body').is(':animated')) {
                counter = 50;
            } else {
                counter++;
                $dk.delay(2);
            }
        }

        if ($dk.is(':visible')) {
            setTimeout(function () {
                $dk.slideUp(300, function () {
                    $('#thePopup').attr('scrolloverride', 'false');
                });
            }, 0);
        } else {
            setTimeout(function () {
                $dk.slideDown(300, function () {
                    $('#thePopup').attr('scrolloverride', 'false');
                    if (showArrow) {
                        clearInterval(helpIntervalT);
                        $(window).bind('scroll.hp resize.hp', function () {
                            $('#theHelpArrowMarker').show().position({ my: "center bottom", at: "center top", of: $dk }).css('top', '+=35');
                        });
                        $('#theHelpArrowMarker').show().position({ my: "center bottom", at: "center top", of: $dk }).css('top', '+=35');

                        helpIntervalT = setTimeout(function () {
                            clearPopupArrow(true);
                        }, 5000);
                    }
                });
            }, 0);
        }
    });

    $('a.help,a.helpPopup').attr('isbound', 'true');

    setClickConfirm();    
}

function setClickConfirm() {
    $('.clickConfirm').not('[isbound=true]').each(function (index) {
        $('.clickConfirm').attr('isbound', 'true');
        //attach confirm popup to all .clickConfirms
        if (!$(this).hasClass('unauthorizedDisplay')) {
            $(this).on('click.clickConfirm', function (event) {
                event.preventDefault();

				var evalOrCancel = $(this).attr("evalOrCancel"); //added to handle table selections, could be used to eval any js method before confirm - zubair 7/3/2013
				if (evalOrCancel != undefined && !eval(evalOrCancel)) { event.stopImmediatePropagation(); return; }
				var evalOrSkip = $(this).attr("evalOrSkip");
				if (evalOrSkip != undefined && !eval(evalOrSkip)) { return true; }
                var runFirst = $(this).attr("runFirst"); //Use to run any js method needs to run before confirm - zubair 7/3/2013
                if (runFirst != undefined) eval(runFirst);

                $(this).attr('pendingconfirm', 1);
                var title = ($(this).attr("confirm-title")) ? $(this).attr("confirm-title") : "Confirm?";
                var msg = ($(this).attr("confirm-message")) ? $(this).attr("confirm-message") : "Are you sure?";
                var yes = ($(this).attr("confirm-yes")) ? $(this).attr("confirm-yes") : "Yes";
                var no = ($(this).attr("confirm-no")) ? $(this).attr("confirm-no") : "No";
                var width = ($(this).attr("confirm-width")) ? $(this).attr("confirm-width") : 300;
                var keepAlive = ($(this).attr('confirm-keepalive')) ? true : false;
                var retVal = clickConfirm(event, $(this), title, msg, yes, no, width, keepAlive);
                $(this).removeAttr('pendingconfirm');
                return retVal;
            });

            //This ensures that this event handler is the first one that triggers - added by Zubair on 02/20/2013
            if ($(this).data("events").click.length > 1) {
                var clickEvent = $(this).data("events").click.pop();
                $(this).data("events").click.unshift(clickEvent);
            }

            //if it has an inline onclick already, remove it and re-bind it, so it doesn't happen before the confirm.
            if ($(this).attr('onclick')) {
                var str = $(this).attr('onclick').toString();
                $(this).removeAttr('onclick');

                $(this).on('click', function (event) {
                    eval(str);
                });
            }
            //if it has an inline onclick already, remove it and re-bind it, so it doesn't happen before the confirm.
            if ($(this).attr('href')) {

                var hr = $(this).attr('href');
                if (hr.indexOf("javascript:") == 0) {
                    $(this).attr('href', '#');

                    $(this).on('click', function (event) {
                        eval(hr.replace('javascript:', ''));
                    });
                }
            }
        }
    });
};

function setUnauthorizedLinks() {
    $('a.unauthorizedDisplay').each(function (i, v) {
        if ($(v).attr('unauthset') == null) {
            $(v).attr('unauthset', 1);
            $(v).wrapInner('<span class="unauthorizedDisplayWrap"><span class="unauthorizedDisplayInner" /></span>');
        }
    });
}

function clearPopupArrow(isInterval) {
    $(window).unbind('scroll.hp resize.hp');
    if (isInterval) {
        $('#theHelpArrowMarker').fadeOut(200);
    } else {
        $('#theHelpArrowMarker').hide();
    }
};

function ScrollIntoView(elmt, offTop, isUp) {
    var t;

    if(offTop == null) {
        var vis = $(elmt).is(":visible");
        var coords = $(elmt).offset();
        setTimeout(function () {
            if (!vis) { coords = $(elmt).offset(); }
            if (coords != null) {
                var t = coords.top;
                var pageBottom = $(document).scrollTop() + $(window).height();

                if (t > (pageBottom - 90)) {
                    var st = t - $(window).height() + 120;
                    $('body').animate({
                        scrollTop: st
                    }, 300);
                } else if (isUp) {
                    var st = t - 120;
                    $('body').animate({
                        scrollTop: st
                    }, 300);
                }
            }
        }, 5);

    } else {
        t = offTop;
        var st = t - $(window).height() + 120;
        if (st > $(document).scrollTop()) {
            $('body').animate({ scrollTop: st }, 300);
            return true;
        }
    }
    return false;
}


function setTextOverlays() {
    var lf = $(document).find('input:[data-focus]').last();
    lf.focus();

    $.watermark.options.hideBeforeUnload = false;
    $.watermark.options.useNative = false;
    $('.inputTextOverlay').each(function (i, v) {
        var orig = $(this);

        if (orig.data('value') == orig.val() || orig.val().length == 0) {
        orig.css('color', '#C0C0C0');
        }

        if (orig.data('value') != '' && orig.val() == '') {
            if (orig.attr('id') != lf.attr('id') || autoFocus == false) {
                orig.watermark(orig.data('value'));
            }

            if (orig.attr('type') == 'password') {
                $('input.watermark:[name="password"]').css('color', '#C0C0C0');
                $('input.watermark:[name="password"]').data('isHid', true);
            }
        }

        if (orig.attr('id') == lf.attr('id')) {
            if (autoFocus == true) {
                orig.data('focused', true);
                orig.val(orig.data('value'));
                orig.setCaret(0);
                orig.on('keydown.nbFocus click.nbFocus mousedown.nbFocus', function (e) {
                    orig.val('');
                    orig.off('keydown.nbFocus click.nbFocus mousedown.nbFocus');
                    setTimeout(function () {
                        if (orig.is(":focus")) {

                            orig.css('color', '#000000');
                            orig.data('focused', false);
                        }
                    }, 0);
                });
            }
        }
    });

    $(document).on('blur', '.inputTextOverlay', function () {
        if ($(this).data('isHid') != true) {
            if ($(this).data('focus') == true) {
                $(this).data('focused', false);
                $(this).watermark($(this).data('value'));
            }

            if ($(this).val() == '') {
                $(this).css('color', '#C0C0C0');
            }
        }
    });

    $(document).on('focus', '.inputTextOverlay', function () {
        if ($(this).data('isHid') != true) {
            if ($(this).data('focused') != true) {
                if ($(this).attr('name') != 'password' && $(this).val() == $(this).data('value')) { $(this).val(''); }
                $(this).css('color', '#000000');
            };
        }
    });    
}


function logo() {
    var $logo = $('#logo');
    var title = $logo.text();
    preload(['/images/logo_hover.gif']);
    $logo.attr('title', title).html('<img src="/images/logo_hover.gig" width="225" heigh="57" alt="' + title + '" />').css('text-indent', '0');
    $logo.bind('mouseover mousemove', function () {
        var src = $(this).children('img').attr('src').replace('gig', 'gif');
        $(this).children('img').attr('src', src).show();
        $(this).animate({ top: '0' }, 600, function () {
            $(this).children('img').hide();
            var src = $(this).children('img').attr('src').replace('gif', 'gig');
            $(this).children('img').attr('src', src);
        });
    });
}

function preload(images) {
    if (typeof document.body == "undefined") return;
    try {
        var div = document.createElement("div");
        var s = div.style;
        s.position = "absolute";
        s.top = s.left = 0;
        s.visibility = "hidden";
        document.body.appendChild(div);
        div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
    } catch (e) { /* Error. Do nothing. */ }
}

function DefaultErrorFunction(jqXHR, textStatus, errorThrown) {

    //todo: make this close any loading animations, etc...

    //var newDiv = $(document.createElement('div'));
    var err = "<b>A general error has occurred</b><br>";
    if (jqXHR != null && !(typeof jqXHR.responseText === 'undefined')) {
        var errorResult = $.parseJSON(jqXHR.responseText.replace('{"d":null}', ''));
        try {
        err += errorResult.Message + "<br>";
        err += errorResult.ExceptionType + "<br>";
        err += errorResult.StackTrace + "<br>";
        } catch(error) {
        }
    }
//    
//    newDiv.html(err);
//    newDiv.dialog({
//        height: 150,
//        modal: true,
//        resizable: false,
//        draggable: false,
//        closeOnEscape: true,
//        close: new function() { newDiv.remove(); }
//    });
}

function CallPageMethod(fn, paramArray, successFn, errorFn, urlOverride, swallowError) {
    var pagePath = window.location.pathname;
    if (urlOverride) {
        pagePath = urlOverride;
    }

    if (typeof swallowError === 'undefined' || swallowError == null) swallowError = false;

    //Create list of parameters in the form:  
    //{"paramName1":"paramValue1","paramName2":"paramValue2"}  
    var paramList = '';
    if (paramArray.length > 0) {
        for (var i = 0; i < paramArray.length; i += 2) {
            if (paramList.length > 0) paramList += ',';
            paramList += '"' + paramArray[i] + '":"' + paramArray[i + 1] + '"';
        }
    }

    paramList = '{' + paramList + '}';
    //Call the page method

    if (!$.isFunction(errorFn)) {
        //TODO:  Implement error tracking on ajax failed calls
        //errorFn = DefaultErrorFunction;
    }
    var now = new Date();
    var xhr = $.ajax({
        type: "POST",
        url: pagePath + "/" + fn,
        contentType: "application/json; charset=utf-8",
        data: paramList,
        dataType: "json",
        success: function (data) { defaultPageMethodSuccess(data, successFn); },
        error: function (e) {
            if (!swallowError) {
                if (e.status === 401) { console.log('401 received on ' + pagePath + "/" + fn + ' : ' + new Date()); }
                else if (e.status > 400) { simpleFormattedPopup('<div style="text-align:center;font-size:16px;">Sorry, there was an error communicating with our servers.<br/><br/>Please try again!</div><div style="display:inline-block;position:absolute;bottom:24px;color:red;font-size:12px;">Error ID: ' + now.getFullYear() + (now.getMonth() + 1) + now.getDate() + '001' + '</div>', 'Error - Please try again', 700, null, null); }
            }
        }
    });
    return xhr;
}

function defaultPageMethodSuccess(result, successFn, errorCallback) {    
    if (result != null) {
        if (result.d != null) {
            var rs;
            if (Object.prototype.toString.call(result.d) == '[object Array]') {
                try { //added try catch because several results are not json - zubiar 10/10/2013
                    rs = $.parseJSON(result.d[0]); 
                } catch (e) {
                }
            }
            else {
                try {
                    rs = $.parseJSON(result.d);
                } catch (e) {
                }
            }
            if (rs != null) {
                if (rs.length > 0 && rs[0].IsError) { rs = rs[0]; }
                if (rs.IsError) {
                    var now = new Date();                    
                    simpleFormattedPopup('<div style="text-align:center;font-size:16px;">' + rs.Message + '</div><div style="display:inline-block;position:absolute;bottom:24px;color:red;font-size:12px;">Error ID: ' + now.getFullYear() + (now.getMonth() + 1) + now.getDate() + rs.Id + '</div>', rs.Title, 700, null, null);
                    CallPageMethod('updateErrorURL', ['id', rs.Id, 'url', window.location.href], null, null, '/account/controls/pageMethods.aspx');

                    if ($.isFunction(errorCallback)) {
                        errorCallback(result);
                    }
                    return false;
                }
            }
        }
    }
    if ($.isFunction(successFn)) {
        successFn(result);
    }
};

function paramGroup() { };

function fixJsonDate(d) {
    return (d == null ? null : (isDate(d) ? d : new DateTime2Date(d, true)));
}

function CallComplexPageMethod(fn, successFn, pg, url, swallowError, errorCallback) {
    var pagePath = '/account/controls/pageMethods.aspx';
    if (typeof url !== 'undefined') { pagePath = url; }

    if (typeof swallowError === 'undefined' || swallowError == null) swallowError = false;

    if (pg.parameters != null) {
        pg.parameters.purchaseStartDate = fixJsonDate(pg.parameters.purchaseStartDate);
        pg.parameters.purchaseEndDate = fixJsonDate(pg.parameters.purchaseEndDate);
        pg.parameters.expireStart = fixJsonDate(pg.parameters.expireStart);
        pg.parameters.expireEnd = fixJsonDate(pg.parameters.expireEnd);
    }

    var data = JSON.stringify(pg, null);
    var now = new Date();
    var xhr = $.ajax({
        type: "POST",
        url: pagePath + "/" + fn,
        contentType: "application/json; charset=utf-8",
        data: data,
        processData: false,
        dataType: "json",
        success: function (data) { defaultPageMethodSuccess(data, successFn, errorCallback); },
        error: function (e) {
            if (!swallowError) {
                if (e.status === 401) { console.log('401 received on ' + pagePath + "/" + fn + ' : ' + new Date()); }
                else if (e.status > 400) { simpleFormattedPopup('<div style="text-align:center;font-size:16px;">Sorry, there was an error communicating with our servers.<br/><br/>Please try again!</div><div style="display:inline-block;position:absolute;bottom:24px;color:red;font-size:12px;">Error ID: ' + now.getFullYear() + (now.getMonth() + 1) + now.getDate() + '001' + '</div>', 'Error - Please try again', 700, null, null); }
            }
        }
    });
    return xhr;
}

function animateObject(source_id, target_id, callback, duration) {
    if (duration == null) duration = 500;
    var source = $('#' + source_id);
    var target = $('#' + target_id);

    var shadow = $('#' + source_id + '_shadow');
    if (!shadow.attr('id')) {
        $('body').prepend('<div id="' + source.attr('id') + '_shadow" style="display: none; background-color: #e3a98a; border: solid 1px darkgray; position: static; top: 0px; z-index: 100000;">&nbsp;</div>');
        var shadow = $('#' + source.attr('id') + '_shadow');
    }

    shadow.width(source.width());
    shadow.height(source.height());
    shadow.css('top', source.offset().top).css('left', source.offset().left).css('opacity', 0.5).show();
    shadow.css('position', 'absolute');

    shadow.animate({ width: target.innerWidth(), height: target.innerHeight(), top: target.offset().top, left: target.offset().left }, { duration: duration })
                            .animate({ opacity: 0 }, { duration: duration, complete: callback });

    setTimeout(function () { shadow.empty().remove(); }, (duration*2)+5);
}

var helpHtml = '';
function copyToClipboard(textToCopy, mainHeading) {
    $('#thePopup').data('newWidth', '400');
    headerText = "";
    if (mainHeading != null) { headerText = "<strong>" + mainHeading + "</strong><br>"; }

    
    simpleFormattedPopup(headerText + "Press " + (navigator.appVersion.indexOf("Mac")!=-1 ? "CMD-C" : "CTRL-C") + " to copy these domains to your clipboard<br><br><textarea id='taCopy' style='width:354px; height:200px;'>" + textToCopy + "</textarea>", "Copy Domain List", 400, null, null);
    //$('#thePopup').find('.animateButton').trigger('moved');
    document.getElementById("taCopy").select();
    $('#thePopup').find('a.popupHide').text('Close').show();
//    var cWin = window.open("", "cWin", "height=800,width=200,scrollbars=1,left=215,top=200", true);
//    $.each(s, function (i, v) {
//        cWin.document.write(v + "<br />");
//    });
//    cWin.document.close();
}

function downloadFile(url, params) {
    var hiddenIFrameID = 'nb_hiddenDownloader_ifr';    
    var $iframe = $('#' + hiddenIFrameID);
    if ($iframe != null) { $iframe.empty().remove(); }

    var $ifr = $('<iframe id="' + hiddenIFrameID + '" class="iframe_download"><html><body></body></html></iframe>', {});

    var fid = 'nb_ifr_' + randomString(30);
    var $form = $('<form></form>', {
        id:fid,
        method:'POST',
        action:url
    });

    if (params != null && params.length > 0) {
        $(params).each(function (i, v) {
            $form.append('<input name="' + v[0] + '" value="' + v[1] + '" />');
        });
    }

    $ifr.append($form);
    $('body').append($ifr);
    $('#' + fid).submit();
    closeNote();
};

function getJumpWord() {
    var jwName = '';
    var jwCat = 1;
    var jwEx = '';
    if (typeof getJsonJw == "undefined") return;
    var $jumpWords = getJsonJw();

    var myLinks = new Array();
    var myFlinks = new Array();

    $.each($jumpWords, function (i, v) {
        if (v[2] != '') {
            myLinks[i] = v[2];
        }

        if (v[3] != '') {
            myFlinks[i] = v[3];
        }
    });

    if (window.location.hash != '') {
        var foundJw = myLinks.indexOf(window.location.hash);
        if (foundJw == -1) { foundJw = myFlinks.indexOf(window.location.pathname); }
    } else {
        var foundJw = myFlinks.indexOf(window.location.pathname);
    }

    if (foundJw != -1) {
        jwName = $jumpWords[foundJw][0];
        jwCat = $jumpWords[foundJw][1];
        jwEx = $jumpWords[foundJw][4];
    }

    $('#divBreadCrumbs p.jump').empty().remove();
    if (jwName == '') { return; }

    var html = new Array();
    var i = 0;
    var bc = $('#divBreadCrumbs');    

    html[i++] = '<p class="jump"><a href="/Jumpword#' + jwName + '">Jumpword</a> = #';
    html[i++] = jwName;
    if (jwEx != '') { html[i++] = ' ' + jwEx; }
    //TODO:  Get appropriate help text for title tag
    //html[i++] = '<em>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</em><a title="Click for help with this page" class="helpLink" href="/Faq?category=';
    //html[i++] = jwCat;
    //html[i++] = '">HELP</a></p>';    

    bc.append(html.join(""));
}

function checkJumpWordHash(hashText) {
    hashText = hashText.toLowerCase();
    var hashJr = hashText.split(' ')[0];
    var jr = '';
    var dom = '';
    var jwH = '';
    var myLinks = new Array();
    var myFlinks = new Array();
    var myJWLinks = new Array();
    var myALinks = new Object;
    var $jumpWords = getJsonJw();
    $.each($jumpWords, function (i, v) {
        if (v[0] != '') {
            myJWLinks[i] = v[0].toLowerCase();
        }

        if (v[2] != '') {
            myLinks[i] = v[2].toLowerCase();
        }

        if (v[3] != '') {
            myFlinks[i] = v[3].toLowerCase();
        }

        if (v[5] != '') {
            var aliases = v[5].split('|');
            for (var z = 0; z < aliases.length; z++) {
                myALinks[aliases[z].toLowerCase()] = i;
            }
        }
    });

    if (myLinks.indexOf(hashJr) != -1) {
        jr = $jumpWords[myLinks.indexOf(hashJr)][2];
        dom = $jumpWords[myLinks.indexOf(hashJr)][4];
    }
    else if (myFlinks.indexOf(hashJr) != -1) {
        jr = $jumpWords[myFlinks.indexOf(hashJr)][2];
        dom = $jumpWords[myFlinks.indexOf(hashJr)][4];
    }
    else if (myJWLinks.indexOf(hashJr.replace('#', '')) != -1) {
        jr = $jumpWords[myJWLinks.indexOf(hashJr.replace('#', ''))][2];
        dom = $jumpWords[myJWLinks.indexOf(hashJr.replace('#', ''))][4];
    }
    else if (typeof myALinks[hashJr.replace('#','')] !== 'undefined') {
        jr = $jumpWords[myALinks[hashJr.replace('#', '')]][2];
        dom = $jumpWords[myALinks[hashJr.replace('#', '')]][4];
    }
    
    if (jr != '' && hashText.indexOf(' ') != -1) {
        if(hashText.split(' ')[1].toLowerCase() != dom.toLowerCase())
        {
            return '';
        }
    }
    return jr;
}

// begin popup functions
function simplePopup(html, popupTitle, closeLinkText, closeCallback) {
    if ($('#thePopup').is(':visible')) {
        $('#thePopup').stop(true, true);
        $('.popup').parents("div[id*='verlay']").stop(true, true);
    }
    if (closeLinkText == null) { closeLinkText = "Close"; }
    $('#thePopup').off('click.popupCallback', 'a.popupHide');
    $('#thePopup').attr('class', 'popup scrollPopup');
    $('#thePopup').removeAttr('scrollOverride');
    $('#thePopup').css('height','');
    $('#thePopup form').css('height','');
    var title = '';
    if (popupTitle.length > 50) {
        title = popupTitle;
        popupTitle = popupTitle.substring(0, 45) + '...';
    }
    $('#thePopup div.popTitle h3').html(popupTitle);
    if (title.length > 0) { $('#thePopup div.popTitle h3').attr('title', title); }
    $('#thePopup form').html(html);
    makePopup('#thePopup');    
    //setTempButtons('#thePopup');
    //setAnimateButtonsStyle('#thePopup');
    formatPopups();
    $('#thePopup').find('a.popupHide').text(closeLinkText).css({'top':'18px','right':'18px', 'margin':'0px'}).show();
    if (closeCallback != null && $.isFunction(closeCallback)) {
        $('#thePopup').on('click.popupCallback', 'a.popupHide', function (e) {
            e.preventDefault();
            closeCallback();
        });
    }
    
    //setupDraggablePopup();    
}


var isPopupDragging = false;
function setupDraggablePopup() {
    $('div.popup').each(function (iii, vvv) {
        var $pop = $(vvv);
        if ($pop.attr('dragPop') == null) {
            $pop.attr('dragPop', $pop.attr('id'));
            $pop.on('mousedown', 'div.popTitle h3', function () {
                isPopupDragging = true;
                var top = $pop.position().top - $(window).scrollTop();
                $pop.css('top', top + 'px');
                $pop.css({ 'margin': '0', 'position': 'fixed' });
                $pop.removeClass('scrollPopup').removeClass('scrollPopupDown');
            });

            $pop.draggable({
                start: function (event, ui) {
                    $pop.attr('scrollOverride', 'true');
                    $pop.attr('dragged', 'true');                    
                },
                cursor: 'move',
                containment: $('#overlay'),
                stop: function (event, ui) {
                    var popOt = $pop.offset().top;
                    var wSt = $(window).scrollTop();
                    var newOt = popOt - wSt;

                    if (popOt < wSt) {
                        newOt = 15;
                    } else if ((popOt + 60) > (wSt + $(window).height())) {
                        newOt = $(window).height() - 60;
                    }

                    if (($(window).height() + 60) > $pop.outerHeight(true)) {
                        $pop.css({ 'position': 'fixed', 'top': newOt });
                    } else {
                        $pop.removeAttr('dragged').removeAttr('scrollOverride');
                    }

                    isPopupDragging = false;
                },
                drag: function (event, ui) {
                    moveNotes();
                },
                scroll: false,
                distance: 20
            });
            $pop.draggable('disable');
            $pop.find('div.popTitle h3').hover(function () {
                $pop.draggable('enable');
            },
                function () {
                    //$pop.addClass('scrollPopup');
                    $pop.draggable('disable');
                }
            );
        }
    });
}

function simpleFormattedPopup(html, popupTitle, width, kbId, helpHtml, closeCallback, closeButtonText, hideCloseButton) {
    if(hideCloseButton == null) { hideCloseButton = false; }
    if (closeButtonText == null) { closeButtonText = 'Close'; }
    if (width != null) { $('#thePopup').data('newWidth', width); }
    var line = new Array();
    var j = 0;
    line[j++] = '<form><div><div class="frr frON cCategory"><div class="wrap"><div class="boxCategory">';
    line[j++] = html;
    if (!hideCloseButton) {
        line[j++] = '<center><div class="subm" style="display:block; clear:both;"><br/><div><a href="#" id="simpleFormattedPopupClose" class="button30 orange animateButton simpleFormattedPopupClose">' + closeButtonText + '</a></div></div></center></div></div>';
    }
    if (kbId != null) {
        line[j++] = '<a href="#" class="help" kbid="' + kbId + '" style="position:absolute;right:16px;bottom:16px;"></a>';
    }
    line[j++] = '</div></div></form>';
    if (helpHtml != null) {
        line[j++] = helpHtml;
    }

    var newHtml = line.join('');
    simplePopup(newHtml, popupTitle, closeButtonText, closeCallback);
    $('.simpleFormattedPopupClose').click(function (e) {
        e.preventDefault();
        closePopup();
        if (closeCallback != null && $.isFunction(closeCallback)) {
            closeCallback();
        }
    });
}

//for links and button objects, use the clickConfirm class on the element (bound above).  
//For asp.net submit buttons, use this syntax:  <asp:Button ... OnClientClick="return clickConfirm(event, this,'Confirm','Are you sure?','Yes','No');" />
function clickConfirm(event, element, title, msgHtml, confirmButtonText, cancelButtonText, width, keepAlive) {
    if (typeof $(element).attr("confirmed") == 'undefined' || $(element).attr("confirmed") == null || $(element).attr("confirmed") == "false") {


        if (title == null) title = "Confirm";
        if (msgHtml == null) msgHtml = "Are you sure?";
        if (confirmButtonText == null) confirmButtonText = "Yes";
        if (cancelButtonText == null) cancelButtonText = "No";
        if (width == null) width = 300;

        confirmCancelPopup(title, msgHtml, width,
        function () {
            $(element).attr("confirmed", "true");
           // alert("clicking");
            $(element).trigger("click");
            $(element).attr("confirmed", "false");
        },
        null,
        confirmButtonText, cancelButtonText, true, keepAlive);
        event.stopImmediatePropagation();
        return false;
    }
    return true;
}

function confirmCancelPopup(title, msgHtml, width, cbConfirm, cbCancel, confirmButtonText, cancelButtonText, close, keepAlive, kbId) {
    if (close == undefined) close = true;
    if (keepAlive == undefined) keepAlive = false;
    if (cbCancel == null) { cbCancel = ''; }
    if (confirmButtonText == null) { confirmButtonText = 'Confirm'; }
    if (cancelButtonText == null) { cancelButtonText = 'Cancel'; }    
    $('#thePopup').data('newWidth', width);
    var popHtml = "<div id=\"divForm\" class=\"frr frON cCategory confirmBox\"><div class=\"boxCategory\"><div class=\"boxON\" style='text-align:center'><br>" + msgHtml + "<br/><br/><div style='text-align:left;padding-left:30px;'></div><br/><input type=button class='button30 orange animateButton" + (close && !keepAlive ? " popupHide " : " ") + (keepAlive ? " keepAlive " : " ") + "confButton' value='" + confirmButtonText + "'>&nbsp;&nbsp;<span style=\"position:relative;display:inline-block;top:-20px;\"><span style=\"margin:0 8px;\">-or-</span><a href=\"#\" class='popupHide cancButton'' onclick='" + cbCancel + "; return false;'>" + cancelButtonText + "</a></span>"+(kbId == null ? "" : "<div style='display:inline-block; position:relative; bottom:-25px; right:-4px; float:right;'><a href='#' class='help' kbid='" + kbId + "'></a></div>") + "<br/><br/></div></div></div><div id='ccc_pop_help'></div>";
    simplePopup(popHtml, title);

    $('#thePopup .keepAlive').click(function (e) {
        $('#thePopup').find('div.boxON').html('<center><img src="/images/loading_anim.gif" alt="loading..." /></center>');
    }); 

    if (typeof (cbConfirm) == 'function')
        $(".confirmBox").on('click', '.confButton', cbConfirm);
    else
        $(".confirmBox .confButton").attr('onclick', cbConfirm + '; return false;');

    if (typeof (cbCancel) == 'function')
        $(".confirmBox").on('click', '.cancButton', cbCancel);
    else
        $(".confirmBox .cancButton").attr('onclick', cbCancel + '; return false;');

    if (kbId != null) { loadDynamicKbid(kbId, 'ccc_pop_help'); }
}

function loadDynamicKbid(kbid, ele) {
    var pg = new paramGroup();
    pg.extraArgs = kbid;
    pg.popupName = "/account/controls/global/PopupHelp.ascx";
    pg.control = "";
    CallComplexPageMethod("getServerPopup", function (result) { loadDynamicKbidResults(result, ele); }, pg);
}

function loadDynamicKbidResults(result, ele) {
    var rs = result.d;
    var results = $.parseJSON(rs);
    $('#' + ele).html(results.HTML);
    formatPopups();
}


function makePopup(popselector, overlayID) {
    if (typeof $(popselector).data('newWidth') === 'undefined' || $(popselector).data('newWidth').length == 0) {
        $(popselector).width('');
    } else {
        $(popselector).width($(popselector).data('newWidth'));
    }
        closeNote();

    if (overlayID)
        $(overlayID).show();
    else
        $('#overlay').show();
    var $popup = $(popselector);

    if ($popup.length > 0) {
        $popup.css({ top: $(document).scrollTop() + 60 });
        // popupInit($popup);
    } else {
        $popup = $("#popup_" + $(this).attr('id'));
        if (parseInt($popup.css('top')) == 0)
            $popup.css({ top: $(document).scrollTop() + 60 });
    }
    setSizePopup($popup);

    if ($popup.attr('setTitleBound') == null) {
        $popup.bind('SetTitle', function (e, newTitle, appendOnly) {
            if (appendOnly) {
                newTitle = $popup.find('div.popTitle h3').html() + newTitle;
            }

            var title = '';
            if (newTitle.length > 50) {
                title = newTitle;
                newTitle = newTitle.substring(0, 45) + '...';
            }

            $popup.find('div.popTitle h3').html(newTitle);
            $popup.find('div.popTitle h3').attr('title',title);
        });
        $popup.attr('setTitleBound', 'true');
    }

    $popup.show();
    $popup.fadeTo('fast', 1);
    setTimeout(function () { watchPopupSize(); }, 1000);

    windowResize();

    if ($(window).data('isScrollBound') != 'true') {
        $(window).data('isScrollBound', 'true');
        $(document).data('oldST', $(document).scrollTop());
        $(window).bind('scroll', function (event) {
            if ($(popselector).is(':visible')) {
                floatPopup(popselector);
            }
        });
    }

    if ($(popselector).is(':visible')) {
        floatPopup(popselector);
    }
}

function makeServerPopup(popupName, popupTitle, popupControl, displayContainer, popWidth, extraArgs, isAcp, closeButtonText) {
    if (typeof popWidth === 'undefined' || popWidth == null) {
        $('#thePopup').width(712);
        $('#thePopup').data('newWidth', 712);
    } else {
        $('#thePopup').width(popWidth);
        $('#thePopup').data('newWidth', popWidth);
    }    

    simplePopup('<center><img src="/images/loading_anim.gif" border="0" style="display:block;margin:20px" /></center>', popupTitle, closeButtonText);

    if (popupName.indexOf('dl_') >= 0) {
        getDomainListPopup(popupName, popupControl, displayContainer); //this is on managedomains.aspx
    } else if (popupName.indexOf('set_') >= 0) {
        getSettingsPopup(popupName); //this is on Settings.aspx
    } else if (popupName.indexOf('cat_') >= 0) {
        getCategoryPopup(popupName, popupControl, displayContainer); //this is on ManageCategory.aspx
    } else if (popupName.indexOf('ObjSelector') >= 0) {
        getPermissionPopup(popupName, extraArgs);
    } else if (popupName.indexOf('act_') >= 0) {
        getAccountPopup(popupName, popupControl, displayContainer, extraArgs); //this is on Settings.aspx
    } else if (popupName.indexOf('EditAuthcode') >= 0) {
        getAuthcodePopup(popupName); //this is in TransferIn.aspx
    } else if (isAcp) {
        CallComplexPageMethod("getPopup", successPopup, extraArgs);
    } else
        getServerPopup(popupName, popupControl, extraArgs);

}
function successPopup(result) {

    var rs = result.d;
    var results = $.parseJSON(rs);
    if (results.IsError == true) {
        alert('Error');
    }
    //alert(results.debug);
    $('#thePopup form').html(results.HTML);
    $('#thePopup').addClass('f_backend');
    $('#thePopup').addClass('form_ma');
    formatPopups();
}

function getServerPopup(popupName, popupControl, extraArgs) {
    if (popupControl == null) popupControl = "";
    var parms = ["popupName", popupName, "control", popupControl, "extraArgs", (extraArgs == null ? "" : extraArgs)];
    CallPageMethod("getServerPopup", parms, successPopup, null, '/account/controls/pageMethods.aspx');
}

function getPermissionPopup(popupName, extraArgs) {
    if (extraArgs == null) extraArgs = "";
    var parms = ["popupName", popupName, "extraArgs", extraArgs, "control", ""];
    CallPageMethod("getServerPopup", parms, successPopup, null, '/account/controls/pageMethods.aspx');
}

function makeHelpPopup(popupName, popupTitle, kbID) {
    $('#thePopup').width('');
    if (popupTitle == null) popupTitle = 'Help';
    simplePopup('<center><img src="/images/loading_anim.gif" border="0" style="display:block;margin:20px" /></center>', popupTitle);
    //$('#thePopup').width(popupTitle.length * 15);
    //$('#thePopup').addClass('helpPopup');
    //$('#thePopup').position({ 'my': 'top center', 'at': 'top center', 'of': '#overlay' });
    //$('#thePopup').css({ top: $(document).scrollTop() });
    var parms = ["popupName", popupName, "kbID", kbID];
    //alert(kbID);
    CallPageMethod('getHelpPopup', parms, successHelpPopup, null, '/account/controls/pageMethods.aspx');
}

function successHelpPopup(result) {
    var rs = result.d;
    var results = $.parseJSON(rs);
    if (results.IsError == true) {
        alert('Error');
    }
    //alert(results.debug);
    $('#thePopup form').html(results.HTML);
    $('#thePopup').addClass('f_backend');
    $('#thePopup').addClass('form_ma');
    formatPopups();
}




//function getAccountControlPopup(popupName, popupControl, displayContainer) {
//    var pg = new paramGroup();
//    pg.parameters = acp;
//    if (displayContainer != null)
//        pg.parameters.batchJobDisplayContainer = displayContainer;
//    pg.popupName = popupName;
//    pg.control = popupControl;
//    CallComplexPageMethod("getPopup", successPopup, pg);
//}


function floatPopup(selector) {
    var ot = $(selector).offset().top;
    var pt = $(selector).position().top;
    var h = $(selector).outerHeight();
    var w = $(selector).outerWidth();
    var m = 60; //$(selector).outerHeight(true) - $(selector).outerHeight();
    var wh = $(window).height();

    var wwh = parseInt(window.innerHeight);
    if (wwh > 0)
        wh = wwh;

    var ww = $(window).width();
    var www = parseInt(window.innerWidth);
    if (www > 0)
        ww = www;
    // $(".popTitle H3").html("w" + w + " ww " + ww);
    //var dh = $(document).height();
    var st = $(document).scrollTop();
    if ($(selector).attr('scrollOverride') != 'true' && ww >= (w + 60) && wh >= (h + 60)) {
        var oldST = $(document).data('oldST');
        if (typeof oldST === 'undefined') { oldST = 0; }
        var needsHold;
        var isScrollDown;

        if (st >= oldST) { isScrollDown = true; } else { isScrollDown = false; }
        if (wh < (h + 60)) { needsHold = true; } else { needsHold = false; }

        //console.log('Popup Scroll: h: ' + h + ', m: ' + m + ', wh: ' + wh + ', st: ' + st + ', oldST: ' + oldST + ', ot: ' + ot + ', pt: ' + pt + ', NeedsHold: ' + needsHold + ', isScrollDown: ' + isScrollDown);

        var newTop = ot;

        if (needsHold) { //Popup is bigger than visible window
            if (isScrollDown) { //Scrolling down page                
                if ((st + wh) >= (ot + h + m)) { //Popup is fully shown on the bottom
                    newTop = -2;
                    $(selector).removeClass('scrollPopup').addClass('scrollPopupDown');
                } else {
                    newTop = ot;
                }
            } else { //Scrolling up page
                if (st <= (ot - m)) { //Popup is fully shown on the top
                    $(selector).removeClass('scrollPopupDown').addClass('scrollPopup');
                    newTop = -1;
                } else {
                    newTop = ot;
                }
            }
        } else { //Popup is smaller than visible window
            newTop = -1;
            $(selector).removeClass('scrollPopupDown').addClass('scrollPopup');
        }

        if (newTop != -1 && newTop != -2) {
            $(selector).removeClass('scrollPopup').removeClass('scrollPopupDown');
            $(selector).css({ 'top': newTop, 'margin-top': 0, 'position': 'absolute' });
        } else {
            if (!needsHold) {
                $(selector).css({ 'top': ot });
            } else {
                $(selector).css('top', '');
            }
            //$(selector).css({ 'top': '', 'margin-top': '', 'position': '' });
        }
        $(document).data('oldST', $(document).scrollTop());
    } else {
        if ($(selector).attr('dragged') != 'true' && ((ot + h) > (st + wh - m))) {
            //console.log('popupScroll not dragged and off screen');
            $(selector).removeClass('scrollPopup').removeClass('scrollPopupDown');
            $(selector).css({ 'top': ot, 'margin-top': 0, 'position': 'absolute' });
        }
        else if (ww < (w + 60) || wh < (h + 60)) {
            $(selector).removeClass('scrollPopup').removeClass('scrollPopupDown');
            $(selector).css({ 'top': ot, 'margin-top': 0, 'position': 'absolute' });
        }
    }
    moveNotes();
}

function moveNotes() {
    $(".noteWrap").each(function () {
        if ($(this).is(":visible")) {
            if($lastNoteLink != null)
            positionNote($(this), $lastNoteLink);  
        }
    });
}

function closePopup(isImmediate) {
    //isStatusChecking = false;
    if (isImmediate == null) { isImmediate = false; }
    closeNote();
    overlayWarning(false);
    //$(".popup").fadeTo(100, 0, function () {
    $('#theHelpArrowMarker').hide();
    $('.popup').find('div.pControl input:radio').click();
    if (isImmediate) {
        $('.popup').parents("div[id*='verlay']").hide();
    } else {
        $('.popup').animate({ 'margin-left': '+=1400', 'opacity': 0 }, 750, function () { $('.popup').css('margin-left', ''); });
        $('.popup').parents("div[id*='verlay']").fadeOut(750);
    }
    $('.popup').data("newWidth", "");
    closeNote();
    $('.popup').trigger('popupCloseEvents');    
    //});
   // if (typeof makeFixedScroller !== 'undefined') {
      //  makeFixedScroller('table.fixedScroller');
   // }
}

var hideNote = true;
var $lastNote = null;
var $lastNoteLink = null;
function formatPopups(isForced) {
    if (isForced == null) { isForced = true; }
    if (!isForced && ($('.popup').attr('formatted') == true || $('.popup').attr('formatted') == 'true' )) {
        return;
    }

    $('.popup').attr('formatted', $('.popup').is(':visible'));

    //TODO:  Clean this up so that it only formats a popup once while a popup is visible
    $('.popup').each(function () {
        // $(this).wrapInner('<div class="frMiddleSub" />').wrapInner('<div class="frMiddle" />');
        // $('<div class="frTop"><div><div></div></div></div>').prependTo(this);
        // $('<div class="frBottom"><div><div></div></div></div>').appendTo(this);
    });

    $('div.fr47').not('[wrp=1]').wrapInner('<div class="fr47_right" />').wrapInner('<div class="fr47_left" />').attr('wrp', '1');
    $('div.frr').not('[wrp=1]').wrapInner('<div class="frr_bottomRight" />').wrapInner('<div class="frr_bottomLeft" />').wrapInner('<div class="frr_topRight" />').wrapInner('<div class="frr_topLeft" />').attr('wrp','1');
    $('div.popup div.cCategory div.boxCategory *').bind({ click: function (event) {
        if ($(this).parents('div.frOFF:not(.popupHelp)').length + $(this).parents('div.boxOFF').length > 0) {
            event.preventDefault();
            event.stopPropagation();
        }
        //event.stopPropagation();
    }
    });
    $('<div class="filter"></div>').insertBefore($('.form_ma div.cCategory div.boxCategory'));
    $('div.popup div.cDomain fieldset.pControl input:radio').bind({ click: function () {
        popupInit($(this).parents('.popup'));
    }
    });
    $('div.popup div.cCategory fieldset.pControl input:radio').bind({ click: function () {
        $(this).parents('div.cCategory').removeClass('frOFF').addClass('frON').parents('form').find('div.cDomain').removeClass('frON').addClass('frOFF');
        $(this).parents('form').find('div.cDomain .pControlWarning').hide();
        $boxCat = $(this).parents('div.cCategory').find('div.boxCategory');
        $boxCat.prev(".filter").hide();
        $(this).parents('.popup').find('.domainLevelSave').hide();
    }
    });

    $('.popup .deleted input[type="text"], .popup .deleted input[type="password"]').on("click", function (event) { event.preventDefault(); });

    $('.form_ma .b_continueWrap a').on("click", function (event) {
        $(this).parents('div.steps').removeClass('active').next('div.steps').addClass('active').children().trigger('activated');
        $(this).parents('div.steps').next('div.steps').find('.animateButton').trigger('moved');
        closeNote();
        $('div.popupHelp').hide(300);
        event.preventDefault();
    });

    bindNoteLinks()

    setHelpLinks();
    setTableClasses();
    setTempButtons('div.popup');
    setAnimateButtonsStyle('div.popup');
    setUnauthorizedLinks();
    setHrWraps();
    setVrWraps();
    loadPbars();
    setupDraggablePopup();
    setupDomainAutoSearchInputs();

    $('.popupHelp').each(function(i,v) {
        $(v).find('p').first().css('padding-top', '0');
    });
}

var das_xhr;
function setupDomainAutoSearchInputs() {
    $('.nb_domain_autosearch').each(function (i, v) {
        $v = $(v);
        if ($v.attr('data-nbDomainBound') == null) {
            $v.attr('data-nbDomainBound', '1');
            var tempId = randomString(30);
            var cat = 0;
            if ($v.attr('data-category') != null) { cat = $v.attr('data-category'); }
            $v.attr('data-dasid', tempId);
            $v.attr('autocomplete', 'off');
            $v.wrap('<span id="das_' + tempId + '" />');
            $v.after('<div id="das_domainResults_' + tempId + '" style="display:none;" class="smartSearch"><ol></ol></div>');
            $v.after('<span id="das_notFound_' + tempId + '" class="das_notFoundLabel" style="display:none;">*No Domains Found*</span>');
            var $dnf = $('#das_notFound_' + tempId);
            var $dsl = $('#das_domainResults_' + tempId + ' ol');
            var $dsr = $('#das_domainResults_' + tempId);
            var tbWidth = ($v.outerWidth(true) - 2) + 'px';
            $dnf.css('width', tbWidth);
            $dsr.css('width', tbWidth);

            $v.keydown(function (e) {
                var A = e.keyCode;
                if (A == 13 || A == 9) {  //Enter or tab pressed, save as match
                    var currentItem = $dsl.find('li.selected');
                    if (currentItem.length > 0) {
                        var id = $(currentItem).attr('data-val');
                        var dom = $(currentItem).html();
                        $v.val(dom).attr('data-domid', id);
                        $dsr.hide();
                    }
                    return (A == 13 ? false : true);
                }
            });

            $v.keyup(function (e) {
                var A = e.keyCode;
                if (A == 13 || A == 9) {  //Enter or tab pressed return
                    return;
                } else if (A == 38 || A == 40) {  // Up/Down arrows
                    e.preventDefault();
                    if ($dsl.attr('ishover') == '1') { return false; }

                    var currentItem = $dsl.find('li.selected');

                    if (currentItem.length == 0) {
                        if (A == 40) {
                            currentItem = $dsl.children().first();
                        } else {
                            currentItem = $dsl.children().last();
                        }
                        currentItem.addClass('selected');
                    } else {
                        currentItem.removeClass('selected');
                        if (A == 40) {
                            currentItem.next().addClass('selected');
                        } else {
                            currentItem.prev().addClass('selected');
                        }
                    }
                } else {
                    $v.data('lastKeyCode', A);
                    var searchValue = $v.val();
                    if (searchValue.length < 1) {
                        $dsr.hide();
                        $dnf.hide();
                        return;
                    }

                    //if (searchValue != $dsl.attr('data-lastsearch')) {
                        if (typeof das_xhr !== 'undefined') { das_xhr.abort(); }
                        $dsl.attr('data-lastsearch', searchValue);

                        var das_pg = new paramGroup();
                        das_pg.dom = searchValue;
                        das_pg.categoryId = cat;
                        das_xhr = CallComplexPageMethod('getDomainInputList', function (result) { das_returnDomainList(result, tempId); }, das_pg);
                    //}
                }
            });

            $dsl.on('click', 'li', function (e) {
                var id = $(this).attr('data-val');
                var dom = $(this).html();
                $v.val(dom).attr('data-domid', id);
                $dsr.hide();
                $v.focus();
            });

            $dsl.hover(function () {
                $dsl.attr('ishover', '1');
                $dsl.find('li').removeClass('selected');
            }, function () {
                $dsl.attr('ishover', '0');
            });
        }
    });

    function das_returnDomainList(result, tempId) {
        var $v = $('[data-dasid=' + tempId + ']');
        var $dnf = $('#das_notFound_' + tempId);
        var $dsl = $('#das_domainResults_' + tempId + ' ol');
        var $dsr = $('#das_domainResults_' + tempId);

        var rs = $.parseJSON(result.d);
        var lastKC = $v.data('lastKeyCode');
        $dnf.hide();
        if (rs.length == 0) {
            $dnf.show().position({ my: "left top", at: "left bottom", of: $v });
            $dsr.hide();
            return;
        } 
        else if ((rs.length == 1 && lastKC != 8 && lastKC != 46)) {

            $v.one('blur', function () {
                $v.val(rs[0].DomainName).attr('data-domid', rs[0].DomainId);
                $dsr.hide();
            });            
        }

        var line = new Array();
        var j = 0;
        $(rs).each(function (i, v) {
            line[j++] = '<li data-val="' + v.DomainId + '">' + v.DomainName + '</li>';
        });        

        $dsl.empty().html(line.join(''));
        $dsr.show().position({ my: "left top", at: "left bottom", of: $v });
    }
}

function bindNoteLinks() {
    $('.paramNote').each(function (i, v) {
        if ($(v).attr('pn_attach') == null) {
            $(v).attr('pn_attach', '1');
            var tznID = "tzn_" + Math.round(Math.random() * 1000000);            
            var params = $(v).attr('params');
            var lh = '<a id="' + tznID + '" href="#" class="notelink ' + ($(v).hasClass('tzn') ? 'tzn' : '') + '" noteDiv="' + $(v).attr('pDiv') + '" params="' + timeZoneString + (params.length > 0 ? '|' + params : '') + '">' + $(v).html() + '</a>';
            $(v).html(lh).attr('tzn_attach', '1');
        }
    });

    $('.tzn').each(function (i, v) {
        if ($(v).attr('noteDiv') != null) {
            var $d = $('#' + $(v).attr('noteDiv'));
            if ($d.attr('tzn_attach') == null) {
                $d.attr('tzn_attach', '1');
                $d.append(($d != null && $d.html() != null && $d.html().length > 10 ? '<br /><br />' : '') + '<i>Time displayed is in the following TimeZone: <a href="/Settings#Advanced" style="color:#000000;" title="Click to Change this Setting">' + timeZoneString + '</a></i>');
                $d.on('click', 'a.x', function (e) {
                    e.preventDefault();
                    closeNote($(this));
                });
            }
        }
    });

    $('.hoverNote').each(function (i, v) {
        var $link = $(this);
        if ($link.attr('data-hoverAttach') == null) {
            $link.attr('data-hoverAttach', 1);
            var $note = $('#' + $link.attr('noteDiv'));
            //Wrap all notes in a <p> tag
            if ($note.children().length == 0 || $note.children().get(0).nodeName != 'P') {
                $note.wrapInner('<p />');
            }
//            //Add close link to all note divs
//            if ($note.find('a').filter(':contains("Close")').length == 0) {
//                $note.append('<a href="#" class="x">Close:</a>');
//            }
            if ($note.siblings(".noteTop").length == 0) {
                $note.wrap('<div class="noteWrap" />');
                $note.before('<div class="noteTop noteLeft"><div>&nbsp;</div></div>');
                $note.after('<div class="noteBottom noteLeft"><div>&nbsp;</div></div>');
                $note.after('<div class="noteRightSide noteLeft"><div>&nbsp;</div></div>');
                $note.after('<div class="noteLeftSide noteLeft"><div>&nbsp;</div></div>');
            }

            $link.hover(
                function (e) {
                    var $n = $('#' + $link.attr('noteDiv')).closest('.noteWrap');
                    $n.show();
                    $n.find('div').show();
                    if ($n.attr('data-notePositioned') == null) {
                        $n.attr('data-notePositioned', 1);
                        $n.detach();
                        $n.appendTo("body");
                    }
                    positionNote($n, $link);
                },
                function (e) {
                    var $n = $('#' + $link.attr('noteDiv')).closest('.noteWrap');
                    $n.hide();
                }
            );
        };
    });

    $('.notelink').each(function (indx) {
        var $link = $(this);
        if ($link.attr("clickattach") == null) {
            $link.attr("clickattach", "1")
            $link.on("click", function (event) {
                event.preventDefault();
                var $note = $link.siblings("div.note");
                var dyn_note = '';
                var dyn_id = 0;
                if ($link.attr('dynamic_note')) {
                    dyn_note = $link.attr('dynamic_note');
                    dyn_id = $link.attr('dynamic_id');
                    if ($('#dyn_note_div').length == 0) {
                        $('body').append('<div id="dyn_note_div" class="note"></div>');
                    }
                    $note = $('#dyn_note_div');
                    $link.attr('noteDiv', 'dyn_note_div');
                }

                if ($link.attr('id') == null) {
                    $link.attr('id', 'notelink_id_' + Math.round(Math.random() * 1000000));
                }

                if ($note == null || $note.length == 0) {
                    $note = $link.siblings("div.noteWrap").children("div.note");
                }
                var hasNoteParams = false;
                var params;
                if (typeof $link.attr('params') !== 'undefined') {
                    params = $link.attr('params').split('|');
                    hasNoteParams = true;
                }
                var hasNoteAttr = false;
                if (typeof $link.attr('noteDiv') !== 'undefined') {
                    $note = $('#' + $link.attr('noteDiv'));
                    hasNoteAttr = true;
                }

                //Wrap all notes in a <p> tag
                if ($note.children().length == 0 || $note.children().get(0).nodeName != 'P') {
                    $note.wrapInner('<p />');
                }

                //Add close link to all note divs
                if ($note.find('a').filter(':contains("Close")').length == 0) {
                    $note.append('<a href="#" class="x">Close:</a>');
                }

                if ($note.attr('id') != null) {
                    var $notes = $(document).find('div[id=' + $note.attr('id') + ']');
                    if ($notes.length > 1) {
                        $notes.not(':first').empty().remove();
                    }
                }

                var isSameNoteLink = false;
                if ($lastNoteLink != null) {
                    isSameNoteLink = ($lastNoteLink.attr('id') != null && $lastNoteLink.attr('id') == $link.attr('id'));
                }
                if ($note.is(":visible") && isSameNoteLink) {
                    $note.fadeOut(200);
                    $note.parents("div.noteWrap").fadeOut(200);
                }
                else {
                    if ($link.parents("div.popup").length > 0) {
                        if ($link.parents("div.frOFF:not(.allowNote)").length > 0) return false;
                        // $(this).parents("div.popup").css("overflow", "visible");
                    }
                    if ($note.siblings(".noteTop").length == 0) {
                        $note.wrap('<div class="noteWrap" />');                        
                        $note.before('<div class="noteTop noteLeft"><div>&nbsp;</div></div>');
                        $note.after('<div class="noteBottom noteLeft"><div>&nbsp;</div></div>');
                        $note.after('<div class="noteRightSide noteLeft"><div>&nbsp;</div></div>');
                        $note.after('<div class="noteLeftSide noteLeft"><div>&nbsp;</div></div>');
                    }

                    if (dyn_note != '') {
                        if ($note.attr('dyn_bound') != dyn_id || $link.attr('dyn_bind_override') == "1") {
                            $note.unbind('refresh_dyn_note');
                            $note.bind('refresh_dyn_note', function (e, d) {
                                $note.attr('dyn_bound', dyn_id);
                                if (d == null || d.suppressLoading == null || d.suppressLoading != true) {
                                    $note.find('p').html('<center><img src="/images/loading_anim.gif" alt="loading..." /></center>');
                                }
                                var dyn_pg = new paramGroup();
                                dyn_pg.popupName = dyn_note;
                                dyn_pg.extraArgs = dyn_id;
                                dyn_pg.control = "";
                                CallComplexPageMethod("getServerPopup", function (result) { dynamicNoteDisplay(result, $note, $link); }, dyn_pg);
                            });
                        }
                    }

                    $note.show();
                    $note.trigger('refresh_dyn_note');
                    $note = $note.parents(".noteWrap");
                    $note = $note.detach();
                    $note.appendTo("body");

                    if (!hasNoteAttr) {
                        var noteID = "note" + Math.round(Math.random() * 1000000);

                        $note.children('.note').attr('id', noteID);
                        $link.attr('noteDiv', noteID);
                    }

                    //Parameterized notes
                    if (hasNoteParams) {
                        var $nc = $note.children('.note');
                        if ($nc.attr('parameterized') == null) {
                            $.each(params, function (ii, vv) {
                                var nr = '\\{' + ii + '\\}+';
                                var regExp = new RegExp(nr, "g");
                                $nc.html($nc.html().replace(regExp, '<span id="' + $nc.attr('id') + '_p' + ii + '">' + vv + '</span>'));
                            });
                            $nc.attr('parameterized', '1');
                        } else {
                            $.each(params, function (ii, vv) {
                                $('#' + $nc.attr('id') + ' #' + $nc.attr('id') + '_p' + ii).html(vv);
                            });
                        }
                    }

                    if (hideNote && $lastNote != null) {
                        $lastNote.hide();
                    }
                    $note.fadeIn(200).find('.animateButton').trigger('moved');
                    $lastNote = $note;
                    $lastNoteLink = $link;

                    positionNote($note, $link);
                }
                // return false;
            });
        }
    });

    $("body").on("click", "div.note a.x", function (e) {
        e.preventDefault();
        closeNote($(this));
        return false;
    });
};

function dynamicNoteDisplay(result, $note, $link) {
    var rs = result.d;
    var results = $.parseJSON(rs);
    var html = '';
    if (results.IsError == true) {
        html = 'Error getting data';
    } else {
        html = results.HTML;
    }
    $('#dyn_note_div').find('p').html(html);
    if($link.attr('data-keepNoteOpen')) {
        $('#dyn_note_div').addClass('keepNoteOpen');
        $('#dyn_note_div').parent('div.noteWrap').addClass('keepNoteOpen');
    }
    
    //alert("here");
    positionNote($note, $link);
//    setTimeout(function () {        
//        $note.closest('.noteWrap').css('z-index', '99999');
//        //$note.closest('.noteWrap').css('z-index', '');
//        $note.fadeOut(0).fadeIn(0);
//        $note.closest('.noteWrap').fadeOut(0).fadeIn(0);
//    }, 15);
}

function positionNote($note, $link) {
    if (!$note.is(':visible') || !$link.is(':visible')) { return; }

    var leftRightOverride = 'none';
    if ($link.attr('data-leftRight') != null) {
        leftRightOverride = $link.attr('data-leftRight');
    }

    $('.noteLeftSide div,.noteRightSide div', $note).hide();
    var pos = $link.offset();
    var $th = $('<a>a</a>');    
    var th = $th.insertBefore($link).height();
    var posNew = $th.offset();
    $th.empty().remove();    

    var l = Math.round(pos.left) + Math.round($link.width() / 2);
    var t = Math.round(pos.top);
    //  $link.after($('<div style="border:1px solid red;width:' + $link.outerWidth(true) + 'px;height:' + $link.outerHeight(true) + 'px;position:absolute;left:' + $link.position().left + 'px;top:' + $link.position().top + 'px;"></div>'));
    var b = t + $link.height();

    if ($link.height() >= (th*2 -1) && $link.is('a')) {
        pos = posNew;
        l = Math.round(pos.left) + 20;
        b = t + th;
    }
    
    var h = $note.height();
    var w = $note.width();

    var lEdge = $(window).scrollLeft();
    var rEdge = $(window).width() + lEdge;
    var tEdge = $(window).scrollTop();
    var bEdge = $(window).height() + tEdge;    

    var l2 = lEdge;
    var r2 = rEdge;
    var t2 = tEdge;
    var b2 = bEdge;

    if ($link.parents("div.popup").length == 0) { //not in a popup

        if ($link.parents("div[id=content]").length > 0) {
            l2 = $link.parents("div[id=content]").offset().left; if (l2 < lEdge) l2 = lEdge;
            r2 = $link.parents("div[id=content]").offset().left + $link.parents("div[id=content]").width(); if (r2 > rEdge) r2 = rEdge;
            t2 = $link.parents("div[id=content]").offset().top; if (t2 < tEdge) t2 = tEdge;
            b2 = $link.parents("div[id=content]").offset().top + $link.parents("div[id=content]").height(); if (b2 > bEdge) b2 = bEdge;
        }
    }

    var above = false;
    var left = true;    

    if (((b + h) > b2) && ((t - h) > t2)) { above = true; }

    if (((l + w - 21) > r2) && ((l - w) > l2)) { left = false; }

    //console.log('b: ' + b + ', h: ' + h + ', t: ' + t + ', l: ' + l + ', w: ' + w + ', l2: ' + l2 + ', r2: ' + r2 + ', t2: ' + t2 + ', b2: ' + b2 + ', ABOVE: ' + above + ', LEFT: ' + left);

    var mLeft = (left) ? l - 21 : l - Math.round(w * .9) + 11;
    var mTop = (above) ? (b - h - th) : b;

    if (!left) $note.addClass("right");
    else $note.removeClass("right");

    if (leftRightOverride == 'none') {
        if (above) {
            $(".noteBottom > div", $note).show();
            $(".noteTop > div", $note).hide();
        }
        else {
            $(".noteBottom > div", $note).hide();
            $(".noteTop > div", $note).show();
        }
        $note.css({ "left": mLeft + "px", "top": mTop + "px" });
    } else {
        $(".noteTop > div", $note).hide();
        $(".noteBottom > div", $note).hide();

        if (leftRightOverride == 'left') {
            $('.noteLeftSide > div', $note).show();
            $note.position({ of: $link, my: 'left top', at: 'right center', offset: '15 -30' });
        } else if (leftRightOverride == 'right') {
            $('.noteRightSide > div', $note).show();
            $note.position({ of: $link, my: 'right top', at: 'left center', offset: '-15 -30' });
        }
    }    
}

function closeNote($elmt) {    
    if ($elmt != null) {
        if($elmt.attr('noteDiv') != null) {
            closeNote($('#' + $elmt.attr('noteDiv')).children().first());
        } else {
            $elmt.parents('div.note,div.noteWrap').attr('closing', 1).fadeOut(200, function () { $elmt.parents('div.note,div.noteWrap').removeAttr('closing'); });        
        }
    }
    else {
        $('div.note,div.noteWrap').not('.keepNoteOpen').attr('closing', 1).fadeOut(200, function () { $('div.note,div.noteWrap').removeAttr('closing'); });
    }
}

function setTableClasses(tblName) {
    $('table' + tblName  + ' > tbody').each(function () {
        $(this).children('tr:first').addClass('first');
        $(this).children('tr:last').addClass('last');
        $(this).children('tr:even').addClass('odd');
        $(this).children('tr:odd').addClass('even');
        $(this).children('tr').each(function () { $(this).children('td:last').addClass('last'); });
    });

    // th, td numbering 
    $('tr').each(function () {
        var cells = $(this).children('th, td');
        for (var i = 0; i < cells.length; i++)
            $(cells[i]).addClass('cell_' + (i + 1));
    });

    setTempButtons('table > tbody');
    setAnimateButtonsStyle('table > tbody');
}

function setSizeOverlay(popupEle, overlayEle) {
    // overlayResize
    var $popup;
    var $overlay;
    if (popupEle == null)
        $popup = $("#thePopup");
    else
        $popup = $(popupEle);

    if (overlayEle == null)
        $overlay = $("[id*='verlay']");
    else
        $overlay = $(overlayEle);
    var docHeight = $(document).height();
    var winWidth = $(document).width();
    var cWidth = $("body > .container").width();
    var oWidth = Math.max(cWidth, winWidth);
    var pHeight = $popup.outerHeight(true);
    if ((pHeight + 253) > docHeight) { docHeight = pHeight + 253; }
    $overlay.css({ width: oWidth, height: docHeight });
    
}

function setSizePopup(popup) {
    var pLeft = $(".container").offset().left + Math.round(($(".container").width() - $(popup).width()) / 2) - 17;
    $(popup).css({ left: pLeft });
}

function windowResize(par) {
    setSizeOverlay();
    setSizePopup($('.popup:visible'));
    moveNotes();
}

function popupInit(popup) {
    $(popup).find('div.cDomain').removeClass('frOFF').addClass('frON').find('.pControl input:radio').attr('checked', 'checked');
    $(popup).find('div.cDomain .pControlWarning').show();
    $(popup).find('div.cCategory').removeClass('frON').addClass('frOFF').find('.pControl input:radio').removeProp('checked');
    $(popup).find(".filter").width($(popup).find(".boxCategory").outerWidth(true)).height($(popup).find(".boxCategory").outerHeight()).show();
    $(popup).find(".popupHelp").find(".filter").hide();
    if (typeof $(popup).find('.domainLevelSave') !== 'undefined') {
        if ($(popup).find('.domainLevelSave').data('isHidden') != true) {
            $(popup).find('div.cDomain').find('.domainLevelSave').show();
        } else {
            $(popup).find('div.cDomain').find('.domainLevelSave').hide();
        }
    }
    forms_stepsReset($(popup).find('div.steps:first').parent());
}

function setHrWraps() {
    $('.hrWrapThis').each(function (i, v) {
        var $v = $(v);
        if ($v.is(':visible')) {
            if ($v.attr('hrWrapped') == null) {
                $v.attr('hrWrapped', '1');
                var hrc = "";
                if ($v.attr('hrClass') != null) {
                    hrc = $v.attr('hrClass');
                }
                if ($v.hasClass('hrLeftOnly') || $v.hasClass('hrRightOnly')) {
                    var isLeft = $v.hasClass('hrLeftOnly');
                    var $hr;
                    $hr = $('<hr style="display:inline-block;" class="' + (isLeft ? 'left' : 'right') + 'Wrap ' + hrc + '" />');
                    var iw = $v.outerWidth();
                    if (isLeft) {
                        $hr.insertBefore($v).width(10);
                    } else {
                        $hr.insertAfter($v).width(10);
                    }

                    var nwm = $hr.outerWidth(true) - 8;
                    var tw = $v.parent().width();

                    var fixed_w = ((tw - iw) - (nwm)) -1;
                    $hr.width(fixed_w);
                } else {
                    var $hrl = $('<hr style="display:inline-block;" class="leftWrap ' + hrc + '" />');
                    var $hrr = $('<hr style="display:inline-block;" class="rightWrap ' + hrc + '" />');
                    var iw = $v.outerWidth();
                    $hrl.insertBefore($v).width(10);
                    $hrr.insertAfter($v).width(10);
                    var lwm = $hrl.outerWidth(true) - 9;
                    var rwm = $hrr.outerWidth(true) - 9;
                    var tw = $v.parent().width();
                    var fixed_lw = ((tw - iw) / 2) - (lwm);
                    var fixed_rw = ((tw - iw) / 2) - (rwm)-1;
                    $hrl.width(fixed_lw);
                    $hrr.width(fixed_rw);
                }
            }
        }
    });
}

function setVrWraps() {
    $('.vrThis').each(function (i, v) {
        var $v = $(v);
        if ($v.is(':visible')) {
            if ($v.attr('vrWrapped') == null) {
                $v.attr('vrWrapped', '1');
                var vrc = "Black";
                var martop = 0;
                if ($v.attr('vrColor') != null) {
                    vrc = $v.attr('vrColor');
                }
                if ($v.attr('martop') != null) {
                    martop = $v.attr('martop');
                }

                var $vrl = $v.prev();
                var $vrr = $v.next();

                var lp = $vrl.position().left + $vrl.outerWidth(true);
                var rp = $vrr.position().left;
                var vm = (rp - lp) / 2;

                var lh = $vrl.outerHeight(true);
                var rh = $vrr.outerHeight(true);
                var vh = (lh > rh ? lh : rh);
                if (vh > 5) {
                    $v.css('margin-left', vm + 'px').css('margin-top', martop + 'px').css('height', vh - martop + 'px').css('border-left', '1px solid ' + vrc).css('display', 'inline-block');
                }
            }
        }
    });
}

//end popup functions





var checked = 0;
var isStatusChecking = true;
function successJobStatus(result) {
    var completed = false;
    if (!isStatusChecking) {
        checked = 0;
        isStatusChecking = true;
        return;
    }
    //var pagePath = '/account/controls/pageMethods.aspx';
    var rs = result.d;
    // alert(result.d);
    var results = $.parseJSON(rs);
    var $resultContainer;
    var inPopup = false;
    if (results.resultDisplayContainer == 'popup') {
        if (checked == 0) {
            simpleFormattedPopup('<div id="pop_result_container">Processing...</div><center><div id="popupResultsDone" style="display:none;color:green;font-weight:bold;margin-left:16px;">Update Complete</div></center>', (results.popupTitle == null ? 'Processing...' : results.popupTitle), null, null, null, (results.popupCBFunction == null ? null : window[results.popupCBFunction]));
        }
        $resultContainer = $('#pop_result_container');
        inPopup = true;
    } else {
        $resultContainer = $(results.resultDisplayContainer);
    }

    if (!$resultContainer.is(':visible') && checked > 0) {
        checked = 0;
        return;
    }

    //alert("results.resultDisplayContainer " + results.resultDisplayContainer);
    var passCount;
    if (isNaN($resultContainer.data('passCount'))) {
        $resultContainer.data('passCount', 1);        
    } else {
        $resultContainer.data('passCount', $resultContainer.data('passCount') + 1);
    }
    passCount = $resultContainer.data('passCount');

    if (results.controlType != null) {
        $resultContainer.data('controlType', results.controlType);
    }

    $resultContainer.show(200);
    $resultContainer.parents('#divResults').show(200);
    var resultData = null;
    //alert("results.resultData:"+results.resultData);
    if (results.resultData != null) {
        $resultContainer.show();
        resultData = $.parseJSON(results.resultData);
        if (results.success === false) {
            if (results.errorMessage != null) {
                $resultContainer.html("ERROR: " + results.errorMessage);
            }
            $resultContainer.trigger('error');
            $('#' + results.controlID).trigger('error', results);
            if (results.errorMessage == null) { //Hide container if no error occurred
                $resultContainer.hide();
            }
            return;
        } else {
            if (results.batchJobResult != null) {
                $resultContainer.attr('rjob', results.batchJobResult.jobID);
            } else {
                $resultContainer.removeAttr('rjob');
            }
            $resultContainer.trigger('update', resultData);
            $('.' + results.controlType).trigger('update', resultData);
        }
    }

    var updateText = 'Update Complete';

    if (resultData != null && (results.controlType == 'urlForwardControl' || results.controlType == 'nameserverControl')) {
        if((resultData.DomainLevelVal == '' && resultData.IsDomainLevelSet == true) || (resultData.CategoryLevelVal == '' && resultData.IsCategoryLevelSet==true)) {
            updateText = (results.controlType == 'urlForwardControl' ? 'URL Forwarding has' : 'NameServers have') + ' been removed.';
        }        
    }

    if (results.batchJobResult != null) {
        if (results.batchJobResult.status === "error") {
            $resultContainer.html("ERROR: " + results.errorMessage);
            $('#' + results.controlID).trigger('error', results);
        }
        else {
            checked++;
            if (results.batchJobResult.steps != null) {
                var stepCount = results.batchJobResult.steps.length;
                if (stepCount == 1 && results.batchJobResult.steps[0].percentComplete == 1 && checked == 0) {
                    var $rcHtml = $resultContainer.find('div.pBar').find('span');
                    if ($rcHtml.html() == '' || $rcHtml.html() == '0%' || $rcHtml.html() == null) {                        
                        autoPopulateProgressBar($resultContainer, 0, function () {
                            $resultContainer.trigger('finish');
                            if (results.controlType == null) {
                                $('.' + $resultContainer.data('controlType')).trigger('finish');
                            } else {
                                $('.' + results.controlType).trigger('finish');
                            }
                        }, updateText);
                    }
                    $resultContainer.data('passCount', 0);
                } else {
                    var stepsHtml = new Array();
                    var j = 0;
                    for (var i = 0; i < stepCount; i++) {
                        var step = results.batchJobResult.steps[i];
                        var sName = step.stepName;
                        if (step.jobType == 'NameServers') {
                            var sn = sName.split(' to ');
                            sName = sn[0] + ' to ' + '<div style="margin-left:12px; display:inline-block;">' + sn[1] + '</div>';
                        }
                        var extraHtml = '';
                        var percentComplete = Math.round(step.percentComplete * 100);
                        if (percentComplete == 0 && i == 0) {
                            percentComplete = passCount;
                        } else if (passCount > 2 && i == 0 && percentComplete < 100 && (($resultContainer.attr('pbfix') == null && percentComplete < passCount) || Math.round($resultContainer.attr('pbfix')) < 16)) {
                            extraHtml = "<div style=\"background-color:yellow;color:black;display:inline-block;\">Calculated Time was just Re-Estimated</div>";
                            if ($resultContainer.attr('pbfix') == null) {
                                $resultContainer.attr('pbfix', 1);
                            } else {
                                $resultContainer.attr('pbfix', Math.round($resultContainer.attr('pbfix')) + 1);
                            }
                        }                                                
                        stepsHtml[j++] = "<div class=\"jobStep fLeft\"><div class=\"fLeft\" style=\"padding-bottom:8px;width: 400px;margin-right:8px;\">" + ((stepCount > 1) ? "Step " + (step.stepOrder + 1) + ": " : "") + sName + "</div><div class=\"pBar fLeft green divBatchStatus\" style=\"width:250px;height:25px;\">" + percentComplete + "%</div>" + extraHtml + "</div>";
                    }

                    var finished = true;
                    if (results.batchJobResult.status === 'complete' || results.batchJobResult.status === 'Completed') {
                        completed = true;
                        $resultContainer.data('isloaded', false);
                        $resultContainer.trigger('finish');
                        if (results.controlType == null) {
                            $('.' + $resultContainer.data('controlType')).trigger('finish');
                        } else {
                            $('.' + results.controlType).trigger('finish');
                        }
                    }

                    $resultContainer.html(stepsHtml.join(''));
                    loadPbars($resultContainer);
                }
            }

            if (!completed) {
                $resultContainer.siblings('.currentSettings').hide();
                $resultContainer.siblings('.cat_jobRunning').show();
                var timerSpan;
                timerSpan = Math.floor(passCount / 10) + 1;
                if (timerSpan > 5) { timerSpan = 5; }
                // alert(timerSpan);
                window.setTimeout(function () {
                    var parms = ["jobID", results.batchJobResult.jobID, "resultDisplayContainer", results.resultDisplayContainer];
                    CallPageMethod("GetJobStatus", parms, successJobStatus, null, '/account/controls/pageMethods.aspx');
                }, timerSpan * 500);
            } else {
                checked = 0;
                $resultContainer.siblings('.cat_jobRunning').hide();
                $resultContainer.siblings('.currentSettings').show();                
                if (inPopup) {
                    $('#popupResultsDone').stop(true,true).slideDown(250);
                }
            }
        }
    }
    else {
        // alert("batchResult is null");
        checked = 0;
        $resultContainer.data('passCount', 0);
        autoPopulateProgressBar($resultContainer, 0, function () {
            $resultContainer.trigger('finish');
            if (results.controlType == null) {
                $('.' + $resultContainer.data('controlType')).trigger('finish');
            } else {
                $('.' + results.controlType).trigger('finish');
            }
        }, updateText);
    }
}

function autoPopulateProgressBar($resultContainer, percent, callback, updateText) {
    if (updateText == null) { updateText = 'Update Complete.'; }
    if (percent == 0) {
        $resultContainer.html('<div class="pBar fLeft green divBatchStatus" style="width:250px;height:25px;">0</div>');
        loadPbars($resultContainer);
    }
    if (percent < 100) {
        $resultContainer.find('.pBar').trigger('updatePbar', percent);        
        setTimeout(function () { autoPopulateProgressBar($resultContainer, percent + 10 , callback, updateText); }, 100);
    } else {
        var updText = 'Update Complete';        
        $resultContainer.html('<b style="color:green">' + updateText + '</b>');
        if ($.isFunction(callback)) {
            callback();
        }
    }
};


$("a.help").not("a.helpPopup").on("click", function (e) {
    var $note = $(this).siblings("div.note");
    if ($(this).parents("div.popup").length > 0) {
        if ($(this).parents("div.frOFF").length > 0) return false;
        mTop = $(this).position().top - $note.height() - $(this).height() - 3;
        $note.css("top", mTop);
        mLeft = $(this).position().left - $note.outerWidth() + Math.round($(this).width() / 2) - 4;
    } else
        mLeft = $(this).offset().left - $note.outerWidth() + Math.round($(this).width() / 2);
    $note.css("left", mLeft).fadeIn(200);
    return false;
});


//This function requires a data-sortorder attribute on each child
function orderItems(parentItem, childTag) {
    var $list = $(parentItem);
    var $listChildren = $(childTag + ':[data-sortorder*=""]', $list);
    $listChildren.sort(function (a, b) {
        var keyA = $(a).attr('data-sortorder');
        var keyB = $(b).attr('data-sortorder');
        var returnVal = keyA - keyB;
        return returnVal;
    });
    $.each($listChildren, function (index, row) {
        $list.append(row);
    });
}

/*You need to define the following classes to use setCountriesAndRegions()
This should only be run once on every pageload or frameload
state textbox   = .state
state Label     = .stateLbl
country textbox = .country
country ddl     = .countryDdl
Also make sure that all of these are contained in the same div so anyOfThese.closest('div') should resolve to the same div
*/
function setCountriesAndRegions(container, isForced, selectedCountry, selectedRegion) {
    if (isForced == null) { isForced = false; }
    if (typeof json_countries == "undefined") //Setting a bypass for applications not utilizing this.
        return;
    var jc = new json_countries();
    var lblState = '',
        tbState = '',
        tbStateDynamic = '',
        ddlStateDynamic = '',
        lnkStateSwap = '',
        ddlCountry = '',
        tbCountry = '';
        

    $(".state:not(.countriesProcessed)", container).each(function () {
        tbState = $(this);
        if ($(tbState).hasClass('countriesProcessDelay') && !isForced) {
            return;
        };
        //var container = tbState.closest('div');
        lblState = $('.stateLbl', container);
        createHiddenTextBox(tbState); //create state hidden textbox
        createDdl(tbState); //create state DDL
        tbStateDynamic = $(tbState.data('tx_id'));
        ddlStateDynamic = $(tbState.data('dd_id'));
        createSwap(tbStateDynamic, ddlStateDynamic, tbState);
        lnkStateSwap = $(tbState.data('swap_id'));
        ddlCountry = $('.countryDdl', container);
        tbCountry = $('.country', container);
        selectedCountry = selectedCountry || tbCountry.val();
        ddlCountry.data('h_id', '#' + tbState.attr('id'));
        loadCountries();
        selectedRegion = selectedRegion || tbState.val();
        loadRegions(selectedCountry, selectedRegion);
        bindElements();
        tbState.addClass('countriesProcessed');
    });

    function getUID(id) {
        id = id || "";
        var rand = id + "_" + Math.round(Math.random() * 1000000) + 1;
        while ($("#" + rand).length != 0)
            rand = id + "_" + Math.round(Math.random() * 1000000) + 1;
        return rand;
    }
    function createDdl($hidden) {
        var uid = getUID($hidden.attr('id'));
        var $dd = $('<select id="' + uid + '"></select>');
        $hidden.after($dd);
        $dd.show();
        $dd.data('h_id', '#' + $hidden.attr('id'));
        $hidden.data('dd_created', true).data('dd_id', '#' + uid);
        $hidden.attr('dd_linked', uid);
    }

    function createHiddenTextBox($hidden) {
        var uid = getUID($hidden.attr('id'));
        var $tx = $('<input type="text" id="' + uid + '" />');
        $hidden.after($tx);
        $tx.hide();
        $hidden.hide();
        $tx.data('h_id', '#' + $hidden.attr('id'));
        var lbl_uid = getUID(lblState.attr('id'));
        lblState.attr('id', lbl_uid);
        $hidden.data('lbl_sel', "#" + lbl_uid);
        $hidden.data('tx_create', true).data('tx_id', '#' + uid).data('isHidden', true);
    }

    function createSwap($tx, $dd, $hidden) {
        var uid = getUID($hidden.attr('id'));
        var $swap = $('<a href="#" id="' + uid + '" style="display: none;" class="showList"> Show List</a>');
        $tx.after($swap);
        $swap.hide();
        $swap.data('tx_id', '#' + $tx.attr('id')).data('dd_id', '#' + $dd.attr('id'));
        $hidden.data('swap_created', true).data('swap_id', '#' + uid);
    }

    function showControl($ctrl, visible) {
        if (visible) {
            $ctrl.show().data('visible', true);
        } else {
            $ctrl.hide().data('visible', false);
        }
    }

    function loadCountries() {
        var cFound = false;
        if (ddlCountry.data('populated') != true) {
            var pc = new Array();
            pc[0] = ('US');
            pc[1] = ('CA');
            pc[2] = ('GB');

            var line = new Array();
            var j = 0;
            line[j++] = '<option value="">Select...</option>';

            if (typeof jc.Countries[selectedCountry] === 'undefined') {
                var keyFound = false;
                for (var key in jc.Countries) {
                    if (jc.Countries[key].Name.toLowerCase() == selectedCountry.toLowerCase()) {
                        selectedCountry = key;
                        keyFound = true;
                    }
                }

                if (!keyFound) { selectedCountry = 'US'; }
            }
            $(pc).each(function (i, v) {
                var cp = getCountryHtml(v, selectedCountry);
                if (cp.isSelected)
                    cFound = true;
                line[j++] = cp.html;
            });

            line[j++] = '<option value="---------------" disabled="disabled">---------------</option>';

            for (var row in jc.Countries) {
                //if (pc.indexOf(row) == -1) {
                var cp = getCountryHtml(row, selectedCountry, cFound);
                line[j++] = cp.html;
                if (cp.isSelected)
                    cFound = true;
                //}
            }

            ddlCountry.html(line.join(''));
            if (!cFound) {
                ddlCountry.val(ddlCountry.find('option:contains("' + selectedCountry + '")').val());
            }

            var regionText = ddlCountry.find(':selected').attr('data-regionname');
            if (typeof regionText === 'undefined') {
                regionText = 'State/Region';
            }

            lblState.html(regionText + ':');
            ddlCountry.data('populated', true);
            tbCountry.val(selectedCountry);
        }
    }

    function loadRegions(_selectedCountry, _selectedRegion) {
        if (_selectedCountry == '') {
            showControl(ddlStateDynamic, false);
            showControl(tbStateDynamic, true);
            showControl(lnkStateSwap, false);
            ddlStateDynamic.html('');
            return;
        }

        var line = new Array();
        var j = 0;

        var regions = (jc.Countries[_selectedCountry].Regions).split('|');
        var selected = _selectedRegion;
        var found = false;
        line[j++] = '<option value="">Select...</option>';
        if (jc.Countries[_selectedCountry].Regions != '') {
            for (i = 0; i < regions.length; i++) {
                var region = regions[i].split('_');
                line[j++] = '<option value="' + region[1] + '"';
                if (selected.toLowerCase() == region[0].toLowerCase() || selected.toLowerCase() == region[1].toLowerCase()) {
                    line[j++] = ' selected="selected"';
                    found = true;
                }
                line[j++] = '>' + region[0];
                if (region.length > 2 != '') {
                    line[j++] = ' (' + region[2] + ')';
                }
                line[j++] = '</option>';
            }
            line[j++] = '<option id="other_region_dd">Other...</option>';
            ddlStateDynamic.html(line.join(''));

            if (found || selected == '') {
                showControl(tbStateDynamic, false);
                showControl(ddlStateDynamic, true);
                showControl(lnkStateSwap, false);
            } else {
                tbStateDynamic.val(selected);
                showControl(tbStateDynamic, true);
                showControl(ddlStateDynamic, false);
                showControl(lnkStateSwap, true);
            }
        } else {
            tbStateDynamic.val(_selectedRegion);
            showControl(ddlStateDynamic, false);
            showControl(tbStateDynamic, true);
            showControl(lnkStateSwap, false);
        }
        tbState.val(selected);
    }

    function getCountryHtml(countryCode, cc, cFound) {
        var countryParam = new Object();
        var line = new Array();
        var j = 0;
        var regionLabelText = 'State/Region';
        if (jc.Countries[countryCode].RegionName != '' && jc.Countries[countryCode].RegionName != 'undefined') {
            regionLabelText = jc.Countries[countryCode].RegionName;
        }
        line[j++] = '<option value="' + jc.Countries[countryCode].Abv + '" data-regionname="' + regionLabelText + '"';
        line[j++] = ' data-hasregions="' + (jc.Countries[countryCode].Regions != '') + '"';

        if (countryCode == cc && !cFound) {
            line[j++] = ' selected="selected"';
            countryParam.isSelected = true;

            if (jc.Countries[countryCode].Regions != '') {
                tbStateDynamic.data('isRequired', true).siblings('i').first().removeClass('gray').html('*');
                ddlStateDynamic.data('isRequired', true);

            } else {
                tbStateDynamic.data('isRequired', false).siblings('i').first().addClass('gray').html('*Optional');
                ddlStateDynamic.data('isRequired', false);
            }
        }
        line[j++] = '>' + jc.Countries[countryCode].Name + '</option>';
        countryParam.html = line.join('');
        return countryParam;
    }
    function bindElements() {
        ddlCountry.change(function (e) {
            var $hidden = $($(this).data('h_id'));
            var $sel = $(this).find(':selected');
            var $r_dd = $($hidden.data('dd_id'));
            var $r_tx = $($hidden.data('tx_id'));
            var $lbl = $($hidden.data('lbl_sel'));
            var $sw = $($hidden.data('swap_id'));
            var $iReq = $hidden.siblings('i').first();

            var enteredRegion = $r_tx.val();

            tbCountry.val($sel.val());
            $hidden.val('');
            $r_tx.val('');
            $lbl.html($sel.attr('data-regionname') + ':');
            if ($sel.attr('data-hasregions') == 'true' && $sel.val() != '') {
                $r_dd.data('isRequired', true);
                $r_tx.data('isRequired', true);
                $iReq.removeClass('gray').html('*');
                loadRegions($sel.val(), enteredRegion);
            } else {
                $r_dd.data('isRequired', false);
                $r_tx.data('isRequired', false);
                $lbl.html('State/Region:');
                $iReq.addClass('gray').html('*Optional');
                loadRegions('', '');
                $sw.hide();
            }
        });

        tbStateDynamic.blur(function (e) {
            if ($(this).data('visible')) {
                var $hidden = $($(this).data('h_id'));
                $hidden.val($(this).val());
            }
        });

        ddlStateDynamic.change(function (e) {
            var $hidden = $($(this).data('h_id'));
            var $sel = $(this).find(':selected');
            var $r_dd = $($hidden.data('dd_id'));
            var $r_tx = $($hidden.data('tx_id'));
            var $sw = $($hidden.data('swap_id'));
            var regionSaveVal = "";

            if ($sel.attr('id') == 'other_region_dd') {
                showControl($r_dd, false);
                showControl($r_tx, true);
                $r_tx.val('');
                $sw.show();
                $hidden.val('');
            } else {
                if ($.isNumeric($sel.val())) {
                    regionSaveVal = $sel.text();
                } else {
                    regionSaveVal = $sel.val();
                }
                $hidden.val(regionSaveVal);
            }

        });

        lnkStateSwap.click(function (e) {
            e.preventDefault();
            var $r_dd = $($(this).data('dd_id'));
            var $r_tx = $($(this).data('tx_id'));
            $r_dd.val('');
            showControl($r_dd, true);
            showControl($r_tx, false);
            $(this).hide();
        });

        tbState.bind('isRequiredCheck', function (e, isMissing) {
            $r_dd = $($(this).data('dd_id'));
            $r_tx = $($(this).data('tx_id'));
            if (isMissing) {
                $r_dd.addClass('errorInput');
                $r_tx.addClass('errorInput');
            } else {
                $r_dd.removeClass('errorInput');
                $r_tx.removeClass('errorInput');
            }
        });
    }
}

function copyIFrame(doc, target, callbackFn) {
    var $t = $('#' + target);
    var $i = $t.siblings('iframe');
    $t.siblings('iframe').trigger('iframe_loaded');
    $t.siblings('iframe').attr('loaded', 1);
    if ($t.data('loaded') != true) {
        $t.data('loaded', true);
        $t.empty();

        // $('#' + doc).contents().find('body').children().appendTo($t);
        // $t.html($('#' + doc).contents().find('body').html());

        //alert(doc);
        var ww = window.frames[doc];
        var html = ww.document.body.innerHTML;
        $(ww.document).empty();
        var dp = /__doPostBack/g;
        var tf = /theForm/g;
        html = html.replace(dp, '__doPostBack_' + doc);
        html = html.replace(tf, 'theForm_' + doc);
        $t.empty();
        $t.html(html);
        $t.find('form').attr('target', $t.siblings('iframe').attr('name'));
        if (window[callbackFn]) {
            window[callbackFn]('#' + target);
        }
        $t.data('loaded', false);

        removeBusy();
        setTempButtons('#' + target);
        setAnimateButtonsStyle('#' + target);
        setUnauthorizedLinks();
        formatPopups();
    }
};

function checkEmailAddress(email, checkMx, mxCallback) {
    if (email.toLowerCase().match(/^(?!\.)([a-z0-9_%\+\-\.]*?)([a-z0-9_%\+\-]+)@(?!\.)([a-z0-9-]|(\.(?!\.)))+\.(?!\.)([a-z]{2,})$/)) {
        if (checkMx) {
            var emMX = new paramGroup();
            emMX.email = email;
            CallComplexPageMethod('checkEmailMx', mxCallback, emMX);
        }

        return true;            
    } else {
        return false;
    }
}

function checkPhone(phone, phoneCC) {

	var requiredLength = 4;

	var fp = phone.replace(/[^0-9]/g, '');

	if (phoneCC === '+1') {
		requiredLength = 10;
		if (fp.startsWith('1')) fp = fp.substring(1);
	}

	if (fp.length < requiredLength) {
        return false;
    } else {
        return true; 
    }
}

function waitCursor(isShow) {
    if (isShow) {
        $('body').addClass('wait');
    } else {
        $('body').removeClass('wait');
    }
}

function formatHostRecordDisplay(hostRecords, isLargeDisplay, isSmallDisplay) {
    var html = "";
    if (hostRecords.length > 0) {
        var hrArr = hostRecords.split(",");
        $(hrArr).each(function(ii,vv) {
            var hrec = vv.split('|');
            var rtID = hrec[0];
            var caption = "";
            if (typeof fieldLabels !== 'undefined' && fieldLabels[rtID] != null) {
                caption = fieldLabels[rtID].vcap;
            }

            var row = '<tr><td>' + hrec[1] + '' + ((caption == '') ? '' : ' (' + caption + ')');
            if (hrec[1] == 'MX')
                row += '  - <em>Priority ' + hrec[4] + '</em>';
            row += '</td><td>' + hrec[2] + '</td>';
            var width = 350;
            if (isLargeDisplay) {
                width = 500;
            } else if (isSmallDisplay) {
                width = 100;
            }

            row += '<td style="padding-left:16px;width:' + width + 'px;"><span class="elipsis_wrap" style="width:' + width + 'px;">' + hrec[3] + '</span></td></tr>';
            html += row;
        });
    }
    return html;
}

function setTempButtons(selector) {
    var sel = '';
    if (typeof selector !== 'undefined' || selector != null) { sel = selector; }
    $(sel + ' .button30,' + sel + ' .button18,' + sel + ' .button38,' + sel + ' .button41').each(function (i, v) {
        var $v = $(v);
        if ($v.attr('button_set') == null) {
            $v.attr('button_set', '1');
            var btnSize = ($v.hasClass('button30') ? 30 : $v.hasClass('button18') ? 18 : $v.hasClass('button38') ? 38 : $v.hasClass('button41') ? 41 : 0);
            var btnColor = ($v.hasClass('orange') ? 'orange' : $v.hasClass('blue') ? 'blue' : '');
            var btnClass = 'button' + btnSize;
            var btnExtraPadding = (btnSize == 18 ? 10 : btnSize == 30 ? 18 : btnSize == 38 ? 23 : 0);
            var btnExtraPaddingCart = (btnSize == 18 ? 19 : btnSize == 30 ? 27 : btnSize == 38 ? 34 : 0);
            var classText = btnClass + ' ' + btnColor;
            var abClass = '';
            if ($v.hasClass('animateButton')) {
                $v.removeClass('animateButton');
                $v.addClass('animateButtonButton');
                abClass = 'animateButton ab_' + btnClass + ' ab_' + btnColor;
            }

            $v.addClass('tb_mid');
            $v.wrap('<div class="' + btnClass + '_wrap ' + abClass + ($v.hasClass('noFade') ? ' noFade' : '') + '"></div>'); //<div class="' + btnClass + '_innerWrap tb_innerWrap">            
            $v.before('<div class="' + classText + ' tb_left" button_set="1"></div>');
            $v.after('<div class="' + classText + ' tb_right" button_set="1"></div>');

            if ($v.hasClass('imgRArrow')) {
                $v.after('<div class="' + btnColor + 'RArrow' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-right', btnExtraPadding + 'px');
                if (btnSize == 38) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px');
                } else if (btnSize == 30) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 3 + 'px');
                } else if (btnSize == 18) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 3 + 'px');
                }
            } else if ($v.hasClass('imgLArrow')) {
                $v.before('<div class="' + btnColor + 'LArrow' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-left', btnExtraPadding + 'px');
                if (btnSize == 38) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 17 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) + 2 + 'px');
                } else if (btnSize == 30) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 12 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 0 + 'px');
                } else if (btnSize == 18) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 10 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 0 + 'px');
                }
            } else if ($v.hasClass('imgCart')) {
                $v.after('<div class="' + btnColor + 'Cart' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-right', btnExtraPaddingCart + 'px');
                if (btnSize == 38) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 1 + 'px');
                } else if (btnSize == 30) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px');
                } else if (btnSize == 18) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px');
                }

            } else if ($v.hasClass('imgReply')) {
                $v.before('<div class="' + btnColor + 'Reply' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-left', btnExtraPadding + 'px');
                //                if (btnSize == 38) {
                //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 17 + 'px');
                //                    $v.css('padding-left', parseInt($v.css('padding-left')) + 2 + 'px'); } else
                if (btnSize == 30) {                
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 23 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) + 14 + 'px');
                    //                } else if (btnSize == 18) {
                    //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 10 + 'px');
                    //                    $v.css('padding-left', parseInt($v.css('padding-left')) - 0 + 'px');
                }
            } else if ($v.hasClass('imgReplyAll')) {
                $v.before('<div class="' + btnColor + 'ReplyAll' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-left', btnExtraPadding + 'px');
                //                if (btnSize == 38) {
                //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 17 + 'px');
                //                    $v.css('padding-left', parseInt($v.css('padding-left')) + 2 + 'px'); } else 
                if (btnSize == 30) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 28 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) + 19 + 'px');
                    //                } else if (btnSize == 18) {
                    //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 10 + 'px');
                    //                    $v.css('padding-left', parseInt($v.css('padding-left')) - 0 + 'px');
                }
            } else if ($v.hasClass('imgForward')) {
                $v.after('<div class="' + btnColor + 'Forward' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-right', btnExtraPadding + 'px');
                //                if (btnSize == 38) {
                //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                //                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px'); } else 
                if (btnSize == 30) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) + 14 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px');
                    //                } else if (btnSize == 18) {
                    //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    //                    $v.css('padding-left', parseInt($v.css('padding-left')) - 3 + 'px');
                }
            }  else if ($v.hasClass('imgPrint')) {
                $v.after('<div class="' + btnColor + 'Print' + btnSize + ' ab_click"></div>');
                $v.css('text-indent', '0px');
                $v.css('padding-right', btnExtraPadding + 'px');
                //                if (btnSize == 38) {
                //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                //                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px'); } else 
                if (btnSize == 30) {
                //18,10
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 0 + 'px');
                    //                } else if (btnSize == 18) {
                    //                    $v.css('padding-right', parseInt($v.css('padding-right')) - 0 + 'px');
                    //                    $v.css('padding-left', parseInt($v.css('padding-left')) - 3 + 'px');
                }

            } else {
                //$v.css('padding-right', '6px');                
                if (btnSize == 38) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 1 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 2 + 'px');
                } else if (btnSize == 30) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 2 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 3 + 'px');
                } else if (btnSize == 18) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 2 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 3 + 'px');
                } else if (btnSize == 41) {
                    $v.css('padding-right', parseInt($v.css('padding-right')) - 1 + 'px');
                    $v.css('padding-left', parseInt($v.css('padding-left')) - 1 + 'px');
                }
            }

            $v.bind('changeText', function (e, newValue) {
                if ($v.is('a')) {
                    $v.html(newValue);
                } else {
                    $v.val(newValue);
                }

                if ($v.hasClass('animateButtonButton')) {
                    $v.parents('.animateButtonContainer').find('.animateButtonClone .animateButtonButton').trigger('changeText', [newValue]);
                }
            });
        }
    });
}

function setAnimateButtonsStyle(selector) {
    var sel = '';
    if(typeof selector !== 'undefined' || selector != null) {
        sel = selector;
    }
    $(sel + ' .animateButton').each(function (i, v) {
        var $v = $(v);
        setAnimateButtonClone($v);
        $v.bind('moved', function () {
            setAnimateButtonClone($v, true);
        });
    });
};

function randomString(length, lettersOnly) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    if(lettersOnly === true)
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var randomstring = '';
    for (var i = 0; i < length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}

function setAnimateButtonClone($ele, isForced) {
    if ($ele.data('animateButtonMade') == true && !isForced) {
        return;
    } else {
        if (isForced && $ele.data('cloneID') != null) {
            var $cl = $('#' + $ele.data('cloneID'));
            $cl.fadeTo(0, 1);
            if ($ele.position().top == $cl.position().top && $ele.position().left == $cl.position().left) {
                return;
            }
        }
        
        if ($('#' + $ele.data('cloneID')).length != 0) {
            $('#' + $ele.data('cloneID')).empty().remove();
        }

        if ($ele.parent('div.animateButtonContainer').length == 0) {
            var divId = randomString(20);
            while ($('#' + divId).length > 0) {
                divID = randomString(20);
            }
            var $newDiv = '<div id="' + divId + '" class="animateButtonContainer"></div>';
            
            $ele.before($newDiv);
            $newDiv = $('#' + divId);
            $ele.appendTo($newDiv);
        } 

        $ele.css('position', 'relative');                    
        var $clone = $ele.clone(false);
        $clone.css('position', 'absolute');
        $clone.attr('id', randomString(20)).addClass('animateButtonClone').removeClass('animateButton');
        $clone.children().each(function (i, v) {
            if ($(v).attr('id') != null) {
                $(v).attr('id', $(v).attr('id') + '_' + randomString(20));
            }
        });

        $ele.data('cloneID', $clone.attr('id'));
        $clone.prependTo($ele.parent());
        $clone.position({ 'my': 'left top', 'at': 'left top', 'of': $ele, collision: 'fit none' });        

        if ($clone.hasClass('ab_button30') || $clone.hasClass('ab_button18') || $clone.hasClass('ab_button38') || $clone.hasClass('ab_button41')) {
            var pxHeight = 0;
            var pxBottom = 0;
            if ($clone.hasClass('ab_button30')) {
                pxHeight = 40;
            } else if ($clone.hasClass('ab_button18')) {
                pxHeight = 28;
            } else if ($clone.hasClass('ab_button38') || $clone.hasClass('ab_button41')) {
                pxHeight = 48;
            }
            if ($clone.hasClass('ab_orange')) { pxBottom = pxHeight; }
            if ($clone.hasClass('ab_blue')) { pxBottom = (pxHeight * 3); }

            $clone.find('.tb_left').css('background-position', '0 -' + pxBottom + 'px');
            $clone.find('.tb_right').css('background-position', '100% -' + pxBottom + 'px');
            $clone.find('.tb_mid').css('background-position', '0 -' + pxBottom + 'px');
            //$clone.find('.tb_innerWrap').css('background-position', '0 -' + pxBottom + 'px');
        } else {
            $clone.css('background-position', 'left bottom');
        }
        $clone.bind('click', function (e) { e.preventDefault(); if ($ele.find('.animateButtonButton').length > 0) { $ele.find('.animateButtonButton').click(); } else { $ele.click(); } });
        $clone.bind('changeText', function (e, newValue) { var $cloneButton = $clone.find('.animateButtonButton'); if ($cloneButton.is('a')) { $cloneButton.html(newValue); } else { $cloneButton.val(newValue); } });
        $ele.hover(function () { $ele.stop().animate({ opacity: .000 }, 100); $clone.fadeTo(0, 1); },
                function () { $ele.stop().animate({ opacity: 1 }, 750); $clone.fadeTo(0, 1); }
            );
        $ele.data('animateButtonMade', true);
    }
}

String.format = function (text) {
    //check if there are two arguments in the arguments list
    if (arguments.length <= 1) {
        //if there are not 2 or more arguments there's nothing to replace
        //just return the original text
        return text;
    }
    //decrement to move to the second argument in the array
    var tokenCount = arguments.length - 2;
    for (var token = 0; token <= tokenCount; token++) {
        //iterate through the tokens and replace their placeholders from the original text in order
        text = text.replace(new RegExp("\\{" + token + "\\}", "gi"),
                                                arguments[token + 1]);
    }
    return text;
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isDate(d) {
    var check = new Date(d);
    if (check.toString() == "NaN" || check.toString() == "Invalid Date")
        return false;
    else
        return true;
}

function addNoteDiv(id, content) {
    $('body').append('<div id="' + id + '" class="note">' + content + '</div>');
}

function showUpgradeDomainNotice(dom) {
    if ($.trim(dom) != '') {
        makeServerPopup('/account/controls/UpgradeDomainNotice.ascx', 'This Feature Requires an Upgrade', null, null, 600, dom);
    }
}

function formatTable($table) {
    var ec = 'even';
    var oc = 'odd';

    $table.find('tr:first').addClass('first');
    $table.find('tr:last').addClass('last');
    $table.find('tr').filter(':even').addClass(ec);
    $table.find('tr').filter(':odd').addClass(oc);
    $table.find('tr').each(function () { $(this).children('td').filter(':last').addClass('last'); });
}
var lastXferPopLink = null;

function bindGlobalPopups() {
    $('body').on('click', '.whoisPopup', function (e) {
        e.preventDefault();
        var domain = $(this).attr('domain');
        makeServerPopup('/controls/WhoisDisplay.ascx', 'Whois for ' + domain, null, null, null, domain);
    });

    $('body').on('click', '.transferHelpPopup', function (e) {
        e.preventDefault();

        var domain = $(this).attr('domain');
        var popupTitle = 'Transfer Help' + ((domain != "") ? ' for ' + domain : '')
        simplePopup('<center><img src="/images/loading_anim.gif" border="0" style="display:block;margin:20px" /></center>', popupTitle);


        var pg = new paramGroup();
        pg.parameters = new paramGroup();
        pg.parameters.actionType = 'domain';
        if (domain != "") {
            pg.parameters.domains = [domain];
        }
        pg.popupName = '/account/controls/TransferHelp.ascx';
        pg.control = "";
        CallComplexPageMethod("getPopup", successPopup, pg);
        lastXferPopLink = $(this);


        //makeServerPopup('/account/controls/TransferHelp.ascx', 'Transfer Help' + ((domain != "") ? ' for ' + domain.split('|')[0] : ''), null, null, null, domain);
    });

    $('body').on('click', '.domain_history_example', function (e) {
        e.preventDefault();

        var domain = 'Example.com';
        var popupTitle = 'Domain History for Example.com';
        simplePopup('<center><img src="/images/loading_anim.gif" border="0" style="display:block;margin:20px" /></center>', popupTitle);
        var pg = new paramGroup();
        pg.parameters = new paramGroup();
        pg.parameters.actionType = 'example';
        if (domain != "") {
            pg.parameters.domains = [domain];
        }
        pg.popupName = '/account/controls/HistoryDisplay.ascx';
        pg.control = "";
        CallComplexPageMethod("getPopup", successPopup, pg);        
    });

    $('body').on('click', '.timeZonePopup', function (e) {
        e.preventDefault();
        makeServerPopup('/account/controls/TimeZonePicker.ascx', 'Select Preferred Time Zone', null, null, null, null);
    });

    $('body').on('click', '.termsPopup', function (e) {
        e.preventDefault();
        makeServerPopup('/controls/TermsDisplay.ascx', 'Terms and Conditions', null, null, null, null);
    });

    $('body').on('click', '.advSearchPopup', function (e) {
        e.preventDefault();
        makeServerPopup('/account/controls/AdvancedSearch.ascx', 'Advanced Search', null, null, null, null);
    });

    $('body').on('click', 'a.unauthorizedDisplay', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('noNaPop')) {
            makeServerPopup('/account/controls/global/NotAuthorized.ascx', 'Linked Account: Restricted Access', null, null, 550, null);
        }
        //simpleFormattedPopup('<div class="unauthorizedDisplay">You are not authorized to view/edit this information.</div>', 'Unauthorized', 500, null, null);
    });

    $('body').on('click', 'a.additionalInfoPopup', function (e) {
        e.preventDefault();
        var domain;
        if ($(this).attr('domain') != null) { domain = $(this).attr('domain'); }
        if ($(this).closest('.popup').length > 0) { domain = domain + "|" + true; }
        makeServerPopup('/controls/DomainInfoDisplay.ascx', 'Additional Domain Info', null, null, null, domain);
    });

    $('body').on('click', 'a.email_upgrade_plan', function (e) {
        e.preventDefault();
        makeServerPopup('/account/controls/EmailPlanUpgrade.ascx', 'Renew or Upgrade My Email Plan', null, null, null, null);
    });

    $('body').on('click', 'a.inlinePopup', function (e) {
        e.preventDefault();
        var param;
        var ctrl;
        var title;
        if ($(this).attr('param') != null) { param = $(this).attr('param'); }
        if ($(this).attr('ctrl') != null) { ctrl = $(this).attr('ctrl'); }
        if ($(this).attr('title') != null) { title = $(this).attr('title'); }
        makeServerPopup(ctrl, title, null, null, null, param);
    });

    $('body').on('click', 'a.toolLink', function (e) {
        e.preventDefault();
        var tool;
        var header;
        if ($(this).attr('tool') != null) { tool = $(this).attr('tool'); }
        if ($(this).attr('header') != null) { header = $(this).attr('header'); }
        makeServerPopup('/account/controls/DomainTool.ascx', header, null, null, null, tool);
    });

    $('body').on('click', 'a.upgradeDomainLink', function (e) {
        e.preventDefault();
        if ($(this).attr('data-dom') != null) {
            var domArray = new Array();
            domArray.push($(this).attr('data-dom'));
            return upgradeDomains(domArray);
        }
    });

    $('body').on('click', '.addPrivacyToCart', function (e) {
        e.preventDefault();
        if ($(this).attr('data-domainName') != null) {
            var domArray = new Array();
            domArray.push($(this).attr('data-domainName'));
            return addDomainPrivacy(domArray);
        }
    });

    $('body').on('click', '.addDomainToCart, .addPremiumDomainToCart', function (e) {
        e.preventDefault();
        if ($(this).attr('data-domain') != null) {
            var domArray = new Array();
            domArray.push($(this).attr('data-domain'));
            var type = ($(this).hasClass('addPremiumDomainToCart') ? 40 : 1);
            AddItemToCart(type, 0, domArray);
        }

        if ($(this).hasClass('addDomainToCartSwapToGreen')) {
            var html = '<div class="domainInCartGreen">In Cart</div>';
            var $abc = $(this).closest('.animateButtonContainer');
            if ($abc.length == 1) {
                $abc.before(html);
                if ($abc.siblings('.avail_span').length > 0) { $abc.siblings('.avail_span').empty().remove(); }
                $abc.empty().remove();                

            } else {
                $(this).before(html);
                $(this).empty().remove();
            }
        };

    });

    $('body').on('click', '.renew_current_email_plan_link', function (e) {
        e.preventDefault();
        AddItemToCart(11);
    });

    $('body').on('click', 'a.contactInfoSearchLink', function (e) {
        e.preventDefault();
        makeServerPopup('/account/controls/ContactInfoSearch.ascx', 'Contact Information Search');
    });
    
    $('body').on('click', '.closePopup', function (e) {
        e.preventDefault();
        closePopup();
    });

    $('body').on('click', '.ugd_brand_protection_launch', function (e) {
        e.preventDefault();
        var domName = $(this).attr('data-domainName');
        makeServerPopup('/account/controls/DomainBrandProtection.ascx', 'Brand Protection Monitor', null, null, null, domName);
    });

    $('body').on('click','.ugd_block_dns_launch', function (e) {
        e.preventDefault();
        var domName = $(this).attr('data-domainName');
        makeServerPopup('/account/controls/DomainBlockDns.ascx', 'DNS Firewall', null, null, null, domName);
    });

    $('body').on('click','.ugd_website_monitor_launch', function (e) {
        e.preventDefault();
        var domName = $(this).attr('data-domainName');
        makeServerPopup('/account/controls/DomainWebsiteMonitor.ascx', 'Website Monitor for Outages', null, null, null, domName);
    });

    $('body').on('click', '.cancel_domain_upgrade', function (e) {
        e.preventDefault();
        var domName = $(this).attr('data-domainName');
        makeServerPopup('/account/controls/UpgradeDomainCancel.ascx', 'Cancel Domain Upgrade on ' + domName, null, null, null, domName);
    });

    $('body').on('click', '.transferInHostSetup', function (e) {
        e.preventDefault();
        var domName = $(this).attr('data-domainName');
        makeServerPopup('/account/controls/TransferInHostRecords.ascx', 'Set up DNS Records for ' + domName, null, null, null, domName);
    });

    $('body').on('click', '.domainPrivacyPopup', function (e) {
        e.preventDefault();
        var domName = $(this).attr('data-domainName');
        makeServerPopup('/account/controls/PrivacyProtection_TurnOn.ascx', 'Turn On Privacy Protection', null, null, null, domName);
    });

    $('body').on('click', '.refresh_img,.refresh_link', function (e) {
        e.preventDefault();
        refreshPage(0);
    });

    $('body').on('updatePbar', '.pBar', function (e, newPercent) {
        $(this).attr('pbar', newPercent);
        updatePBar($(this));
    });

    $('body').on('click', '.login_required_link', function (e) {
        if (aid <= 0) {
            e.preventDefault();
            var html = new Array();
            var j = 0;

            var type = $(this).attr('data-link_type');
            if (type == 'two_factor_auth') {
                html[j++] = '<div class=\"redAlert large\"><div class=\"in\">';
                html[j++] = '<h5>You Need To Be Logged In To Turn This Feature On</h5>';
                html[j++] = '<p><span style="display:block; margin:12px 0 0 0; font-weight:normal;">Two-factor authentication is a security feature where you tell NameBright you do not want anyone granting access to your account without first confirming they can receive an email from your cellphone. This greatly enhances security on your account as even someone with your username and password cannot get in unless they have access to your phone number as well.</span><br/>';
                html[j++] = '<a href="/Login">Login Here</a>, or <a href="/NewAccount">Create A Free Account</a><br/><br/></p>';
                html[j++] = '</div></div>';
            }
            else {
                html[j++] = '<div class=\"redAlert medium\"><div class=\"in\"><h5>You must be logged in to perform this action</h5></div></div>';
            }

            simpleFormattedPopup(html.join(''), 'Login Required');
        }
    });

    $('body').on('click', '.changeTwoFormAuth', function (e) {
        e.preventDefault();
        makeServerPopup('/account/controls/TwoFormAuthEdit.ascx', 'Two Factor Authentication');
    });

    $('body').on('refreshControl', '.refreshDataControl', function (e) {
        var $this = $(this);
        var ctrl = $this.attr('data-control');
        var args = $this.attr('data-arguments');

        var pg = new paramGroup();
        pg.popupName = ctrl;
        pg.control = '';
        pg.extraArgs = args;
        CallComplexPageMethod("getServerPopup", function (result) {
            var rs = result.d;
            var results = $.parseJSON(rs);
            $this.replaceWith(results.HTML);
        }, pg);
    });

    $('body').on('click', '.inline_file_download', function (e) {
        e.preventDefault();
        var fid = 'ifd_' + randomString(30);
        var ft = $(this).attr('ft');
        var ff = $(this).attr('ff');
        var ctrl = $(this).closest('.download_parent_options').attr('ctrl');
        var ctdata = $(this).closest('.download_parent_options').attr('ctdata');
        var csvOnly = $(this).closest('.download_parent_options').attr('data-csvOnly');
        if ($(this).hasClass('unauthorizedDisplay')) {
            alert('You are not able to download a file this size as anything but .CSV');
            return false;
        }
        //var url = '/controls/DownloadFile.aspx?control=' + ctrl + '&ft=' + ft + '&ff=' + ff;
        //if (ctdata != null) { url += '&d=' + ctdata; }
        var url = '/controls/DownloadFile.aspx';
        var params = new Array();
        params.push(new Array('control', ctrl));
        params.push(new Array('ft', ft));
        params.push(new Array('ff', ff));
        if (ctdata != null) { params.push(new Array('d', ctdata)); }

        downloadFile(url, params);
    });

    $('body').on('click', '.dbg_switch_sticky', function (e) {
        e.preventDefault();
        $('.dbg_sticky_top').toggleClass('dbg_noSticky');
        $('.dbg_switch_sticky').html(($('.dbg_sticky_top').hasClass('dbg_noSticky') ? 'pin' : 'un-pin'));
        var dpg = new paramGroup();
        dpg.pinned = !$('.dbg_sticky_top').hasClass('dbg_noSticky');
        CallComplexPageMethod('setPinnedD', null, dpg);
    });

    var popTermsLoaded = false;
    $('body').on('click', '.viewTermsInPopup', function (e) {
        e.preventDefault();
        var type = $(this).attr('data-termstype');        
        if ($('#popup_TandC_display').length == 0) {
            var $pdiv;
            if ($('.popup').find('.frON.cCategory').length > 0) {
                $pdiv = $('.popup').find('.frON.cCategory')
            } else {
                $pdiv = $('.popup').find('.popup_wrap_rounded');
            }
            $pdiv.after('<div id="popup_TandC_display" class="frr frOFF cCategory" style="margin-top: 12px; height:200px; display:none; overflow-y:scroll;"></div>');
            popTermsLoaded = false;
            $('#popup_TandC_display').slideDown(250, function () { if (!popTermsLoaded) { loadingOverlay('popup_TandC_display', true, true); } });
            var pg = new paramGroup();
            pg.parameters = null;
            pg.control = '';
            if (type == 'ssl') {
                pg.popupName = "/controls/SSLTerms.ascx";
            } else {
                pg.popupName = "/controls/TermsDisplay.ascx";
            }
            CallComplexPageMethod("getPopup", function (result) { popTermsLoaded = true; loadTandCDisplay(result); }, pg);
        } else {
            if ($('#popup_TandC_display').is(':visible')) {
                $('#popup_TandC_display').slideUp(250);
            } else {
                $('#popup_TandC_display').slideDown(250);
                ScrollIntoView('#popup_TandC_display');
            }
        }
    });

    $('body').on('click', '.ab_click', function (e) {
        var btn = $(this).closest('.animateButtonContainer').find('.animateButton .animateButtonButton').click();
    });

    $('body').on('click', '.viewCartLink', function (e) {
        e.preventDefault();
        window.location.href = '/Cart';
    });

    $('body').on('click', '.notImplementedLink', function (e) {
        e.preventDefault();
        alert('Not implemented yet');
    });

    function loadTandCDisplay(result, type) {
        var rs = result.d;
        var results = $.parseJSON(rs);
        $('#popup_TandC_display').html(results.HTML);       
        loadingOverlay('popup_TandC_display', false);
        ScrollIntoView('#popup_TandC_display');
    }

    $('body').on('click', 'a.graphLink', function (e) {
        e.preventDefault();
        var type;
        var header;
        var domain;
        var control;
        if ($(this).attr('type') != null) { type = $(this).attr('type'); }
        if ($(this).attr('header') != null) { header = $(this).attr('header'); }
        if ($(this).attr('domain') != null) { domain = $(this).attr('domain'); }

        switch (type) {
            case 'whois':
                control = '/account/controls/graphs/WhoisGraph.ascx';
                break;
        }
        makeServerPopup(control, header, '/controls/HighChartsGraph.ascx', null, null, domain);
    });

    if ($("#overlay").length == 1) {
        $(window).bind('resize', windowResize);
        setSizeOverlay();
    }

    $('body').on('click', 'a.popupShow', function (event) {
        event.preventDefault();
        var popselector = "#popup_" + $(this).attr('popup');
        if (!$(this).hasClass('linkOff'))
            makePopup(popselector);
    });

    $('body').on('click', 'a.popupServer', function (event) {
        event.preventDefault();
        var popselector = $(this).attr('data-popup');
        var popTitle = $(this).attr('data-popuptitle');
        var popControl = $(this).attr('data-popupcontrol');
        var displayContainer = $(this).attr('data-popupresult');
        var extraArgs = $(this).attr('data-arguments');
        var popWidth = $(this).attr('data-width');
        if (popTitle == null) popTitle = $(this).text();

        if (!$(this).hasClass('linkOff')) {
            makeServerPopup(popselector, popTitle, popControl, displayContainer, popWidth, extraArgs);
        } else {
            simpleFormattedPopup('<div style="padding:20px; text-align:center;font-size:14px;">You need to select a domain before you can use these links.</div>', 'No domains selected', null, null, null);
        }
    });

    $('body').on('hover', 'a.up,a.dn', function (e) {
        var $cbx = $(this).siblings('input[type=checkbox]');
        if ($cbx != null) {
            var dir = 'above';
            var type = $cbx.is(':checked');
            if ($(this).hasClass('dn')) { dir = 'below'; }
            if (e.type == 'mouseenter') {
                $(this).attr('title', (type ? 'Un-select' : 'Select') + ' this and all items ' + dir);

                $(this).on('click.cbxtitle', function () {
                    type = !type;
                    $(this).attr('title', (type ? 'Un-select' : 'Select') + ' this and all items ' + dir);
                });
            } else {
                $(this).off('click.cbxtitle');
            }
        }
    });

}

function lazyLoadControl(control, ele, args, isShow, callBack) {
    if (isShow == null) { isShow = true; }
    var pg = new paramGroup();
    pg.popupName = control;
    pg.control = "";
    pg.extraArgs = args;
    CallComplexPageMethod("getServerPopup", function (result) { lazyLoadComplete(result, ele, isShow, callBack); }, pg);

    function lazyLoadComplete(result, ele, isShow) {
        var rs = result.d;
        var results = $.parseJSON(rs);
        $(ele).html(results.HTML);
        if (isShow) { $(ele).slideDown(100); }

        if ($.isFunction(callBack)) {
            callBack();
        }
    }
}

function formatFirstLevelWhoisResult(result) {
    var newResult = result;
    newResult = newResult.replace(/(Registrar: )(.+)/g, 'Registrar: <a href="#" class="notelink" dynamic_note="/account/controls/notes/registrar_info_note.ascx" dynamic_id="$2">$2</a>');
    newResult = newResult.replace(/(Status: )(.+)/g, 'Status: <a href="#" class="notelink" dynamic_note="/account/controls/notes/registry_status_note.ascx" dynamic_id="$2">$2</a>');
    return newResult;
}

//PagedTable Extension

(function ($) {
    $.pagedTable = function (element, options) {

        var objId;
        var $pagDiv;
        var cbFunc;
        var firstCall = true;

        var defaults = {
            rowsPerPage: 25,
            availableRowsPerPage: [25, 100, 500, 1000, 5000],
            totalRows: 0,
            prefixId: 'domainTable',
            pageChangeCB: null,
            loadingDiv: '',
            largeLoadingDiv: '',
            scrollToTopOnChange: true,
            paginationDiv: 'pagination',
            counterLabel: 'domains',
            scrollToDiv: '',
            scrollAddPixels: 100,
            pageHeaderDiv: ''
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element), // reference to the jQuery version of DOM element
             element = element;    // reference to the actual DOM element

        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);
            cbFunc = plugin.settings.pageChangeCB;
            $pagDiv = $('#' + plugin.settings.paginationDiv);
            objId = plugin.settings.prefixId;
            updateNavigation();
        }

        plugin.setTotalRows = function (totalRows) {
            plugin.settings.totalRows = totalRows;
            updateNavigation();
        }

        plugin.refresh = function () {
            updateNavigation();
            callCB(cbFunc);
        }

        var callCB = function (f) {
            if ($.isFunction(f)) {
                setTimeout(function () { f(); }, 0);
            }
        }

        var updateNavigation = function () {
            if (plugin.settings.totalRows > 0) {
                generatePageHtml(true);
            }
        }

        var bindPageEvents = function () {
            $('#' + objId + '_limit').change(function (e) {
                plugin.settings.rowsPerPage = $(this).val();
                generatePageHtml(true);
                callCB(cbFunc);
            });

            $('#' + objId + '_page_prev').click(function (e) {
                e.preventDefault();
                var currentPage = $('#' + objId + '_pages_select').val();
                if (currentPage != 1) {
                    showLoading();
                    $('#' + objId + '_pages_select').val($('#' + objId + '_pages_select option').filter(':selected').prev().val());
                    setPageClasses();
                    callCB(cbFunc);
                }
            });
            $('#' + objId + '_page_next').click(function (e) {
                e.preventDefault();
                var pages = $('#' + objId + '_pages_select');
                if (pages.val() != pages.children('option:last').val()) {
                    showLoading();
                    pages.val(pages.children('option').filter(':selected').next().val());
                    setPageClasses();
                    callCB(cbFunc);
                }
            });

            $('#' + objId + '_pages_select').change(function (e) {
                e.preventDefault();
                showLoading();
                setPageClasses();
                callCB(cbFunc);
            });
        }

        var generatePageHtml = function (isClear) {
            if (isClear) {
                showLoading();
                $pagDiv.empty();
            }

            var line = new Array();
            var j = -1;

            var totalPages = (plugin.settings.totalRows / plugin.settings.rowsPerPage);
            if ((plugin.settings.totalRows % plugin.settings.rowsPerPage) > 0) { totalPages++; }
            totalPages = Math.floor(totalPages);

            line[++j] = '<div class="display"><span>Display:</span><select id="';
            line[++j] = objId;
            line[++j] = '_limit">';

            $.each(plugin.settings.availableRowsPerPage, function (i, v) {
                if (plugin.settings.rowsPerPage == v) {
                    line[++j] = '<option selected="selected">';
                } else {
                    line[++j] = '<option>';
                }
                line[++j] = v;
                line[++j] = '</option>';
            });

            line[++j] = '</select><span> ';
            line[++j] = plugin.settings.counterLabel;
            line[++j] = '</span></div>';

            line[++j] = '<div class="go"><a href="#" class="prev off" id="';
            line[++j] = objId;
            line[++j] = '_page_prev">Prev</a><select id="';
            line[++j] = objId;
            line[++j] = '_pages_select">';

            for (var i = 1; i <= totalPages; i++) {
                line[++j] = '<option value='
                line[++j] = i;
                line[++j] = '>Page ';
                line[++j] = i;
                line[++j] = '</option>';
            }

            line[++j] = '</select><a href="#" class="next" id="';
            line[++j] = objId;
            line[++j] = '_page_next">Next</a></div>';

            $pagDiv.html(line.join(''));

            //Hide pagination div if there is only one page of results and we are on the lowest available rows per page
            if (totalPages == 1 && plugin.settings.rowsPerPage == plugin.settings.availableRowsPerPage[0]) {
                $pagDiv.hide();
            } else {
                $pagDiv.show();
            }

            bindPageEvents();
            setPageClasses();
        }

        var setPageClasses = function () {
            var pages = $('#' + objId + '_pages_select');
            if (plugin.settings.availableRowsPerPage.length == 1) {
                $pagDiv.find('div.display').hide();
            }

            if (plugin.settings.availableRowsPerPage[0] > plugin.settings.totalRows) {
                $pagDiv.hide();
            }

            if (pages.val() == 1) {
                $('#' + objId + '_page_prev').addClass('off');
            } else {
                $('#' + objId + '_page_prev').removeClass('off');
            }

            if (pages.val() == pages.children('option:last').val()) {
                $('#' + objId + '_page_next').addClass('off');
            } else {
                $('#' + objId + '_page_next').removeClass('off');
            }

            if (pages.val() == 1 == pages.children('option:last').val()) {
                $('#' + objId + '_pages_select').attr('disabled', 'disabled');
            } else {
                $('#' + objId + '_pages_select').removeAttr('disabled');
            }


            if (plugin.settings.pageHeaderDiv != '') {
                var $phd = $('#' + plugin.settings.pageHeaderDiv);
                var currentPage = $('#' + objId + '_pages_select').val();
                var totalPages = (plugin.settings.totalRows / plugin.settings.rowsPerPage);
                if ((plugin.settings.totalRows % plugin.settings.rowsPerPage) > 0) { totalPages++; }
                totalPages = Math.floor(totalPages);
                if (totalPages > 1) {
                    $phd.html('Page ' + currentPage + ' of ' + totalPages);
                } else {
                    $phd.html('');
                }
            }
        }

        var showLoading = function () {
            if (plugin.settings.loadingDiv != '') {
                var $ld = $('#' + plugin.settings.loadingDiv);
                if (plugin.settings.scrollToTopOnChange && !firstCall) {
                    if (plugin.settings.scrollToDiv != '') {
                        if ($(window).scrollTop() > $('#' + plugin.settings.scrollToDiv).offset().top) {
                            $('html, body, .content').animate({ scrollTop: $('#' + plugin.settings.scrollToDiv).offset().top - plugin.settings.scrollAddPixels }, 400);
                        }
                    } else if ($(window).scrollTop() > $('#' + objId + '_table').offset().top) {
                        $('html, body, .content').animate({ scrollTop: $('#' + objId + '_table').offset().top - plugin.settings.scrollAddPixels }, 400);
                    }
                }

                if (plugin.settings.totalRows > 0) {
                    $('#' + objId + '_table').fadeTo(150, 0.2);
                } else {
                    $('#' + objId + '_table').hide();
                }

                if (plugin.settings.rowsPerPage > 500 && plugin.settings.totalRows > 500 && plugin.settings.largeLoadingDiv != '') {
                    $('#' + plugin.settings.largeLoadingDiv).show();
                } else {
                    $ld.show();
                    $ld.css('position', 'absolute');
                    $ld.position({
                        "my": "top",
                        "at": "top",
                        "of": $('#' + objId + '_table')
                    });
                }
                firstCall = false;
            }
        }
        plugin.init();
    }

    $.fn.pagedTable = function (options) {
        return this.each(function () {
            if (undefined == $(this).data('pagedTable')) {
                var plugin = new $.pagedTable(this, options);
                $(this).data('pagedTable', plugin);
            }
        });
    }
})(jQuery);

//End PagedTable Extension
