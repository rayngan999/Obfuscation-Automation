// Version 1.5  GIGYA core
// Last update: 28/06/16 14:00
// -----------------------------------------------------------------------------------
// SETUP
// -----------------------------------------------------------------------------------
var liveDomain = window.location.hostname;
var forceSilenceLog = false;
var gigyaCookieName = 'gcu_her';

var loginHookClass = 'loginGigya';
var registerHookClass = 'registerGigya';
var logoutHookClass = 'logoutGigya';
var notLoggedWrapperClass = 'notLoggedGigya';
var loggedWrapperClass = 'loggedGigya';
var logginDisplay = 'userbox';
var initialsProfileClass = 'initialsGigya';

//------------------------------------
// Screensets>Screens setup
//------------------------------------
var gigyaRegistrationLoginScreenset = 'XalokHeraldo-RegistrationLogin';
var gigyaRegisterScreen = 'gigya-register-screen'; // Pantalla de registro de Gigya


//------------------------------------
// Gigya > updatePrometeoData
//------------------------------------
var updatePrometeoData = function(response=null){
    var user_data = response? {
        "reg_id": response['UID'],
        "email": response['profile']['email'],
        "nickName": response['profile']['nickName'] || "",
        "firstName": response['profile']['firstName'] || "",
        "lastName": response['profile']['lastName'] || "",
        "age": "" + response['profile']['age'] || "",
        "gender": response['profile']['gender'] || "",
        "city": response['profile']['city'] || "",
        "geoCity": response['profile']['city'] || "",
        "geoRegion": "",
        "geoCountry": "",
        "zip": response['profile']['zip'] || "",
        "subs_id": typeof (response['data']['paywall']) !== 'undefined' ? response['data']['paywall']['idAktiva'] : "",
        "subs_mode": typeof (response['data']['paywall']) !== 'undefined' ? response['data']['paywall']['rol'] : "",
        "subs_period": "",
        "subscriptor": "",
        "lastModify": response['lastUpdated'],
        "cookieKey": "gcu_her",
        "dateCreate": response['registered'].split('T')[0],
        //NEW
        "role": {}
    }:{};
    if (response!=null && typeof response.data !== 'undefined' && typeof response.data.role !== 'undefined')
    {
        user_data.role = {
            "subscriberType": response.data.role.tipoSuscriptor,
            "subscriberTypeId": response.data.role.IdTipoSuscriptor,
            "aktivaID": response.data.role.idAktiva,
            "clientHStore": response.data.role.clienteHTIENDA,
            "app": response.data.role.appMiHeraldo,
            "exSubscriptorDigital": response.data.role.exSuscriptorDigital,
            "exSubscriptorPaper": response.data.role.exSuscriptorPapel,
            "exBenefitiary": response.data.role.exBeneficiario,
            "status": {
                "web": response.data.role.idTipoSuscriptor == 3,
                "paper": response.data.role.idTipoSuscriptor == 1
            },
            "contractList": []
        };
        if ( (typeof response.data.role.listaContratos === 'object') && (Array.isArray(response.data.role.listaContratos)) ){
            response.data.role.listaContratos.forEach(function (contrato) {
                user_data.role.contractList.push(
                    {
                        "contractId": contrato.IdContrato,
                        "startDate": contrato.FechaInicio,
                        "beginDate": contrato.FechaDesde,
                        "endDate": contrato.FechaHasta,
                        "contractType": contrato.TipoContrato,
                        "product": contrato.Producto,
                        "promotion": contrato.Promocion,
                        "period": contrato.Periodo
                    });
            });
        }
    }

    if ( typeof window._PROMETEO_MEDIA_CONFIG !== 'undefined' && typeof window._PROMETEO_MEDIA_CONFIG.setClientEncript === 'function' )
    {
        window._PROMETEO_MEDIA_CONFIG.setClientEncript(user_data);
    }
}



//------------------------------------
// Gigya
//------------------------------------
/*Customize login/logout events*/
function onLoginHandler(eventObj) {
    updateUserLoginStatus();
}

function onLogoutHandler(eventObj) {
    updateUserLoginStatus();
}

/*Show screenSet*/
function showGigyaScreenset(screenset, params) {
    if (typeof(params) == 'undefined') {
        params = {};
    }
    params['screenSet'] = screenset;

    gigya.accounts.showScreenSet(params);
}

/*Update user*/
function updateUserLoginStatus() {

    gigya.accounts.getAccountInfo({
        callback: function getAccountInfoResponse(response) {
            //printDevLog(' > update:'+JSON.stringify(response));

            if (response.errorCode == 0) {

                // setup vars
                window.gigyaProfile = response['profile'];
                window.gigyaData = response['data'];
                window.userUID = response['UID'];

                if ($('#' + coralCommentsWrapperId).length > 0) {
                    $('.coral-no-comments').hide();
                    $('.coral-no-subscribe').show();
                    loadCoralCommentsPlugin();
                }

                resetLoginBar(true);
                setDataLayerValues(window.userUID);
                updatePrometeoData(response);

            } else {

                window.gigyaProfile = null;
                window.gigyaData = null;
                window.userUID = null;

                resetLoginBar(false);
                removeDataLayerValues();
                updatePrometeoData();

            }

            document.dispatchEvent(new CustomEvent("ciam.getaccountinfo", {detail: response}));
        }
    });
}

function resetLoginBar(loggedIn) {

    if (loggedIn) {
        //add initials to circle button
        var initial = gigyaProfile.firstName.substring(0, 1).toUpperCase();
        $('.' + logginDisplay + ' svg').hide();
        $('.userlogged').html(initial).click(function(){$(".loggedGigya").show()});

        //add initials to circle button of loggedGigya div
        $('.' + loggedWrapperClass).find(".initialsGigyaLogo").html(initial);

        // add initials to see profile
        var initial = "VER MI PERFIL";
        $('.' + initialsProfileClass).html(initial);

        // Hide Log In
        $('.' + notLoggedWrapperClass).hide();
        // Hide Log In mobile
        if (isMobile()) toggleMobileGigyaButtons(loggedIn);
        // Add class logged to circle button
        $('.' + logginDisplay).addClass("logged");

        $('.userlogged').show();
        if ( (typeof(gigyaData.role)!=='undefined') && (typeof(gigyaData.role.idTipoSuscriptor)!=='undefined') && (gigyaData.role.idTipoSuscriptor == 1 || gigyaData.role.idTipoSuscriptor == 3) )
        {
            $(".icon-suscripcion, .btn-suscripcion").hide();
        }

    } else {
        //Remove initials to circle button
        $('.userlogged').html("");
        // Hide Log Out
        $('.' + loggedWrapperClass).hide();
        // Show Log In
        $('.' + notLoggedWrapperClass).show();
        $('.' + logginDisplay + ' svg').show();
        // Remove class logged from circle button
        $('.' + logginDisplay).removeClass("logged");
        // Hide Log out mobile
        if (isMobile()) toggleMobileGigyaButtons(loggedIn);

        $('.userlogged').hide();
        $(".icon-suscripcion, .btn-suscripcion").show();
    }
}

//------------------------------------
// Datalayer & cookies
//------------------------------------
/*Datalayer*/
function setDataLayerValues(uid) {

    dataLayer['0']['user_id'] = uid;
    dataLayer['0']['user_logged'] = '1';
    dataLayer.push({'user_logged': 1, 'user_id': uid});

    //set cookie
    ensureCookie(uid);
}

function removeDataLayerValues() {

    dataLayer['0']['user_id'] = '';
    dataLayer['0']['user_logged'] = '0';
    dataLayer.push({'user_logged': 0, 'user_id': ''});

    removeCookie();
}

/*Cookies*/
function ensureCookie(gigyaUID) {

    // check gigya cookie exists
    if ($.cookie(gigyaCookieName)) {
        return;
    }

    // create gigya cookie
    createCookie(gigyaUID);
}

function createCookie(gigyaUID) {

    if ($.cookie(gigyaCookieName)) {
        return;
    }

    $.cookie.raw = true;
    $.cookie(gigyaCookieName, gigyaUID, {expires: 365, path: '/', domain: 'heraldo.es'});
}

function removeCookie() {
    $.removeCookie(gigyaCookieName, {path: '/', domain: 'heraldo.es'});
}

//------------------------------------
// Mobile
// Click on user icon on mobile don't have to render login or register page;
// We have to control extra buttons "Entrar" and "Registrarse" instead.
//------------------------------------
function loginGigyaMobile() {
    var params = {};
    showGigyaScreenset(gigyaRegistrationLoginScreenset, params);
}

function logoutGigyaMobile() {
    gigya.accounts.logout();
    if (window.coralEmbed !== undefined) {
        window.coralEmbed.logout();
    }
    $('.coralThread iframe').remove();
    $('.coral-no-subscribe').hide();
    $('.coral-no-comments').show();
}

function registerGigyaMobile() {
    var params = {};
    params['startScreen'] = gigyaRegisterScreen;
    showGigyaScreenset(gigyaRegistrationLoginScreenset, params);
}

function toggleMobileGigyaButtons(loggedIn) {
    if (loggedIn) {
        $('#loginGigyaMobile').parent().hide();
        $('#registerGigyaMobile').parent().hide();
        $('#logoutGigyaMobile').parent().show();
        $('#showProfileUpdateScreenMobile').parent().show();
    }
    else
    {
        $('#loginGigyaMobile').parent().show();
        $('#registerGigyaMobile').parent().show();
        $('#logoutGigyaMobile').parent().hide();
        $('#showProfileUpdateScreenMobile').parent().hide();
    }
}
if (dataLayer[0].platform == 'mobile') toggleMobileGigyaButtons(false);

//------------------------------------
// On Ready
//------------------------------------
$(document).ready(function () {

    // registration handler
    $('.' + registerHookClass).click(function (e) {
        e.preventDefault();

        var params = {};
        params['startScreen'] = gigyaRegisterScreen;

        if (!isMobile()) {
            showGigyaScreenset(gigyaRegistrationLoginScreenset, params);
        }
    });

    // login handler
    $('.' + loginHookClass).click(function (e) {
        e.preventDefault();

        var params = {};

        if (!isMobile()) {
            showGigyaScreenset(gigyaRegistrationLoginScreenset, params);
        }
    });

    // logout handler
    $('.' + logoutHookClass).click(function (e) {
        e.preventDefault();

        gigya.accounts.logout();
        if (window.coralEmbed !== undefined) {
            window.coralEmbed.logout();
        }
        updateUserLoginStatus();
        $('.coralThread iframe').remove();
        $('.coral-no-subscribe').hide();
        $('.coral-no-comments').show();
    });

    // attach on login handler
    gigya.accounts.addEventHandlers({
        onLogin: onLoginHandler,
        onLogout: onLogoutHandler
    });

    // Check if user is logged in
    updateUserLoginStatus();
});

//------------------------------------
// Utilities
//------------------------------------
function forceReloadPage() {

    var url = window.location.href;
    if (url.indexOf('?') > -1) {
        url += '&';
    } else {
        url += '?';
    }
    url += 'rnd=' + new Date().getTime();
    window.location.href = url;
}

function printDevLog(message) {
    console.log(message);

    if (typeof window.location == 'undefined') {
        return;
    }

    if (forceSilenceLog) {
        return;
    }

    var currentDomain = window.location.host;

    if (!currentDomain.match(new RegExp(liveDomain, "i"))) {
        console.log(message);
    }
}

// -----------------------------------------------------------------------------------
// SETUP
// -----------------------------------------------------------------------------------
// Comments
var coralCommentsWrapperId = 'coral_thread';
var commentsAvailableUserTypes = [1, 3];

//------------------------------------
// Show comments
//------------------------------------
function loadCoralCommentsPlugin() {
    var coralWrapper = '.coralThread';
    var d = document, s = d.createElement('script');
    var rootUrl = $(coralWrapper).data('coral-url')

    s.src = rootUrl + '/assets/js/embed.js';
    s.async = false;
    s.defer = true;
    s.onload = function() {
        var storyId = $(coralWrapper).data('story-id');
        var storyUrl = $(coralWrapper).data('story-url');
        var bodyClassName = 'heraldo';
        if (isSubscriptor()) {
            bodyClassName = bodyClassName + '-subscription';
        }
        window.coralEmbed = Coral.createStreamEmbed({
            id: 'coral_thread',
            bodyClassName: bodyClassName,
            autoRender: true,
            rootURL: rootUrl,
            storyID: storyId,
            storyURL: storyUrl,
            events: function(events) {
            events.on("loginPrompt", function() {
            // Redirect user to a login page.
            $(document).ready(function () {
                    gigya.accounts.showScreenSet({
                        screenSet: gigyaRegistrationLoginScreenset,
                        onAfterSubmit: function(event) {
                            // After login
                            if (event.data.jwtCoralToken) {
                                window.coralEmbed.login(event.data.jwtCoralToken);
                            }
                        }
                    });
                });
            });
            }
        });
        // Check if user gigya is logged in
        if (gigyaProfile) {
            if (gigyaData.jwtCoralToken) {
                window.coralEmbed.login(gigyaData.jwtCoralToken);
            } else {
                getJWT();
            }
            if (isSubscriptor()) {
                $('.coral-no-subscribe').hide();
            }
        }
    };
    (d.head || d.body).appendChild(s);
};

function isSubscriptor() {
    return gigyaData.role && commentsAvailableUserTypes.includes(gigyaData.role.idTipoSuscriptor);
}

function getJWT() {
    $.ajax({
        type: 'GET',
        url: '/get/user/jwt-token',
        cache: false,
        data: {
            "id": userUID,
            "username": gigyaProfile.firstName,
            "email": gigyaProfile.email
        },
        success: function(data) {
            gigya.accounts.setAccountInfo( {data: {jwtCoralToken: data['jwt']}} );
            window.coralEmbed.login(data['jwt']);
            gigyaData.jwtCoralToken = data['jwt'];
        },
        error: function() {
            console.log("Se ha producido un error en la firma del token");
        }
    });
}