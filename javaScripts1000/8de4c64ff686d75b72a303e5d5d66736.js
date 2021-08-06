/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="vtex.common.js" />
/// <reference path="vtex.jsevents.js" />

$(document).ajaxStop(function () {
    BindImpersonationContentClick();
    BindImpersonationMailValidate();
    BindImpersonationSearchClick();
    BindImpersonationConfirmClick();
    BindImpersonationCloseClick();
    BindImpersonationLogoutClick()

    if ($('#impersonation-content').hasClass('loading')) {
        $('#impersonation-content').css('opacity', '');
        $('#impersonation-content').removeClass('loading');
    }
});

function BindImpersonationMailValidate() {
    if ($('#impersonation-idmail').length === 0 || $('#impersonation-idmail').hasClass('bound')) {
        return;
    }

    $('#impersonation-idmail').addClass('bound');
    $('#impersonation-idmail').unbind('blur').blur(function (e) {
        var email = $(this).val();
        ImpersonationMailValidate(email);
    });

    $('#impersonation-idmail').unbind('keypress').keypress(function (e) {
        var a = [];
        var k = e.which;

        if (k === 13) {
            $('#impersonation-search').click();
            e.preventDefault();
        }
    });
}

function ImpersonationMailValidate(search) {
    var regexMail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regexId = /^\d+$/;

    if (search != null && search != '' && search != undefined && (regexMail.test(search) || regexId.test(search))) {
        $('#impersonation-idmail').removeClass('giftlisterror');
        return true;
    }
    else {
        $('#impersonation-idmail').addClass('giftlisterror');
        $('#impersonation-idmail').stop(true, true).fadeOut('fast', function () {
            $('#impersonation-idmail').stop(true, true).fadeIn();
        });

        return false;
    }
}

function BindImpersonationSearchClick() {
    if ($('#impersonation-search').length === 0 || $('#impersonation-search').hasClass('bound')) {
        return;
    }
    $('#impersonation-search').addClass('bound');
    $('#impersonation-search').unbind('click').click(function (e) {
        e.preventDefault();

        var email = $('#impersonation-idmail').val();
        if (!ImpersonationMailValidate(email) || $(this).hasClass('clicked')) {
            return;
        }

        $('#impersonation-search, #impersonation-idmail').css('opacity', '0.5');
        $('#impersonation-search').addClass('clicked');
        email = encodeURIComponent(email);
        $('#impersonation-result').slideUp('fast');
        $('#impersonation-confirm').slideUp('fast');

        // + '?ium=' + email,

        $.ajax({
            type: "GET",
            url: '/no-cache/giftlistv2/impersonation/search/' + email,
            dataType: 'json',
            success: function (data) {
                $('#impersonation-result').html(data.message);
                if (data.success) {
                    $('#impersonation-user').val(data.user);

                    setTimeout(function () {
                        $('#impersonation-confirm').slideDown('fast');
                    }, 500);
                }
                else {
                    $('#impersonation-user').val('');
                }

                $('#impersonation-result').slideDown('fast');
                $('#impersonation-search').removeClass('clicked');
                $('#impersonation-search, #impersonation-idmail').css('opacity', '1');
            },
            error: function (xmlHttpRequest, textStatus) {
                $('#impersonation-result').html(textStatus);
                $('#impersonation-user').val('');
                setTimeout(function () {
                    $('#impersonation-result').slideUp('slow');
                    $('#impersonation-search').removeClass('clicked');
                    $('#impersonation-search, #impersonation-idmail').css('opacity', '1');
                }, 6000);
            }
        });
    });
}

function BindImpersonationContentClick() {

    if ($('#impersonation-content').length === 0 || $('#impersonation-content').hasClass('bound')) {
        return;
    }

    $('#impersonation-content').addClass('bound');
    $('#impersonation-content').unbind('click').click(function (e) {
        e.preventDefault();

        if ($('#impersonation-content').hasClass('clicked')) {
            return;
        }

        $('#impersonation-content').addClass('clicked')
        $('#impersonation-content').css('opacity', '0.3');
        $('#giftlist-impersonation').stop(true, true).fadeIn('fast');
    });
}

function BindImpersonationConfirmClick() {
    if ($('#impersonation-confirm').length === 0 || $('#impersonation-confirm').hasClass('bound')) {
        return;
    }

    $('#impersonation-confirm').addClass('bound');
    $('#impersonation-confirm').unbind('click').click(function (e) {
        e.preventDefault();

        var user = $('#impersonation-user').val();

        if ($(this).hasClass('clicked') || user === undefined || user === '') {
            return;
        }

        $(this).addClass('clicked');
        $('#giftlist-impersonation').css("opacity", "0.5");
        user = encodeURIComponent(user);

        $.ajax({
            type: "GET",
            url: '/Site/Track.aspx?ium=' + user,
            success: function (data) {
                SendImpersonateUserToCheckout();
                setTimeout(function () {
                    window.location.href = window.location.protocol + "//" + window.location.hostname;
                }, 4000);
            },
            error: function (xmlHttpRequest, textStatus) {
                setTimeout(function () {
                    window.location.href = window.location.protocol + "//" + window.location.hostname;
                }, 4000);
            }
        });
    });
}

function BindImpersonationCloseClick() {
    if ($('#impersonation-close').length === 0 || $('#impersonation-close').hasClass('bound')) {
        return;
    }

    $('#impersonation-close').addClass('bound');
    $('#impersonation-close').unbind('click').click(function (e) {
        e.preventDefault();

        $('#giftlist-impersonation').stop(true, true).fadeOut('fast', function () {
            $('#impersonation-result').hide();
            $('#impersonation-confirm').hide();
            $('#impersonation-content').removeClass('clicked');
            $('#impersonation-content').css('opacity', '');
            $('#impersonation-idmail').val('');
        });
    });
}

function BindImpersonationLogoutClick() {
    if ($('#impersonation-logout').length === 0 || $('#impersonation-logout').hasClass('bound')) {
        return;
    }

    $('#impersonation-logout').addClass('bound');
    $('#impersonation-logout').unbind('click').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('clicked')) {
            return;
        }

        $(this).addClass('clicked');

        window.location.href = "/no-cache/user/logout?ium=logout";
/*
        $.ajax({
            type: "POST",
            url: '?ium=logout',
            success: function (data) {
            },
            error: function (xmlHttpRequest, textStatus) {
                window.location.reload();
            }
        });
        */
    });
}

var impersonationCount = 30;
var impersonationCounter;
function RedirectTimer() {
//    impersonationCount = impersonationCount - 1;
//    if (impersonationCount <= 0) {
//        $('#impersonation-redirect').text('OK');
//        return;
//    }

//    $('#impersonation-redirect').text('OK (' + impersonationCount + ')');
}

function SendImpersonateUserToCheckout()
{
    if ($('#impersonation-idmail').length === 0) {
        return;
    }

    if ($('#impersonation-idmail').val().length === 0) {
        return;
    }

	vtexjs.checkout.getOrderForm().then(function (orderForm) {
        var clientProfileData = orderForm.clientProfileData;
		if(clientProfileData == null || clientProfileData == undefined){
			var ClientProfileDataCallCenterDisclaimer = function() {this.attachmentId = "clientProfileData";this.email = null;};
			clientProfileData = new ClientProfileDataCallCenterDisclaimer();
		}
		clientProfileData.email = $('#impersonation-idmail').val();		
		return vtexjs.checkout.sendAttachment('clientProfileData', clientProfileData)
        
    }).done(function (orderForm) {
        console.log("email alterado " + orderForm.clientProfileData.email);
        console.log(orderForm);
        console.log(orderForm.clientProfileData);
    })
}