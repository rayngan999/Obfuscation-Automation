ï»¿var newsletterTitle = "";
var newsletterError = "";
var newsletterSuccess = "";
var newsletterSuccess2 = "";
var newsletterLoading = "";
var newsletterOriginalHtml = "";
var originalNewsNameFieldValue = "";
var originalNewsEmailFieldValue = "";

$(document).ready(function () {
    if ($('.newsletter').length > 0) {
        newsletterOriginalHtml = $('.newsletter').html();
        originalNewsNameFieldValue = $('#newsletterClientName').val();
        originalNewsEmailFieldValue = $('#newsletterClientEmail').val();
        //newsOnButtomOkClick();
    }
});

function newsOnButtomOkClick() {
    //    $('.newsletter-button-ok').click(function () {
    //        var clientName = $('.newsletter-client-name').val();
    //        var clientEmail = $('.newsletter-client-email').val();
    //        //portal 2.0---------------------------------------------
    //        var internalPage = $('#newsInternalPage').val();
    //        var internalPart = $('#newsInternalPart').val();
    //        var internalCampaign = $('#newsInternalCampaign').val();
    //        //-------------------------------------------------------

    //        newsletterSuccess = $('.newsletter-success').val();
    //        newsletterSuccess2 = $('.newsletter-success2').val();
    //        newsletterError = $('.newsletter-error').val();
    //        newsletterLoading = '<p>' + $('.newsletter-loading').val() + '</p>';
    //        newsletterTitle = $('.newsletter-title').html();

    //        if (clientName.length > 0 && newsCheckEmail(clientEmail)) {
    //            var dataToPost = { newsletterClientName: (clientName == originalNewsNameFieldValue ? "" : clientName), newsletterClientEmail: clientEmail, newsInternalPage: internalPage, newsInternalPart: internalPart, newsInternalCampaign: internalCampaign };
    //            var url = '/no-cache/Newsletter.aspx';
    //            newsletterAjaxRequest('POST', url, dataToPost, '.newsletter', '');
    //        }
    //    })
}

function newsButtonClick(instanceId) {
    var clientName = $('#' + instanceId + ' .newsletter-client-name').val();
    var clientEmail = $('#' + instanceId + ' .newsletter-client-email').val();
    //portal 2.0---------------------------------------------
    var internalPage = $('#' + instanceId + ' #newsInternalPage').val();
    var internalPart = $('#' + instanceId + ' #newsInternalPart').val();
    var internalCampaign = $('#' + instanceId + ' #newsInternalCampaign').val();
    //-------------------------------------------------------

    newsletterSuccess = $('#' + instanceId + ' .newsletter-success').val();
    newsletterSuccess2 = $('#' + instanceId + ' .newsletter-success2').val();
    newsletterError = $('#' + instanceId + ' .newsletter-error').val();
    newsletterLoading = '<p>' + $('#' + instanceId + ' .newsletter-loading').val() + '</p>';
    newsletterTitle = $('#' + instanceId + ' .newsletter-title').html();

    if (clientName.length > 0 && newsCheckEmail(clientEmail)) {
        var dataToPost = { newsletterClientName: (clientName == originalNewsNameFieldValue ? "" : clientName), newsletterClientEmail: clientEmail, newsInternalPage: internalPage, newsInternalPart: internalPart, newsInternalCampaign: internalCampaign };
        var url = '/no-cache/Newsletter.aspx';
        newsletterAjaxRequest('POST', url, dataToPost, '#' + instanceId + '.newsletter', '');
    }
}

function newsSelect(sender, defaultValue) {
    if (sender.value == defaultValue) sender.value = '';
    else sender.select();
}

function newsLeave(sender, defaultValue) {
    if (jQuery.trim(sender.value) == '') sender.value = defaultValue;
}

function newsletterAjaxRequest(method, url, postData, target, callback) {
    $(target).html(newsMakeTitle() + newsletterLoading + newsMakeSpan()),
    $.ajax({
        type: method,
        url: url,
        data: postData,
        success: function (dataResult) {
            if (target != null && target != '') {
                $(target).html(dataResult);
                if (dataResult == 'true') {
                    $(target).html(newsMakeSuccessMessage());
                } else {
                    newsMakeBackButtomEvent(target);
                };
            }
            if (callback != null && callback != '') callback();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            newsMakeBackButtomEvent(target);
        }
    });
}

function newsMakeBackButtomEvent(target) {
    $(target).html(newsMakeErrorMessage());
    $('.newsletter-button-back').click(function () {
        $(target).html(newsletterOriginalHtml);
        //newsOnButtomOkClick();
    })
}

function newsMakeSuccessMessage() {
    return newsMakeTitle() + '<fieldset class="success"><label><em>' + newsletterSuccess + '</em><br />' + newsletterSuccess2 + '</label></fieldset>' + newsMakeSpan();
}

function newsMakeTitle() {
    return '<h3>' + newsletterTitle + '</h3>';
}

function newsMakeErrorMessage() {
    return newsMakeTitle() + '<fieldset class="error"><label>' + newsletterError + '</label></fieldset>' + newsMakeBackButtom() + newsMakeSpan();
}

function newsMakeBackButtom() {
    return '<input type="button" value="voltar" class="bt-voltar newsletter-button-back" >';
}

function newsMakeSpan() {//desenha as bordas arredondadas pelo stilo.
    var aux = '<span class=\"rt\"></span>' +
                '<span class=\"rt\"></span>' +
                '<span class=\"lb\"></span>' +
                '<span class=\"lt\"></span>';
    return aux;
}

function newsCheckEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    newsMakeBackButtomEvent('.newsletter');
    return (false)
}