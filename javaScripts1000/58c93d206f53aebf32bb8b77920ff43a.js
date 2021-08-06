function showLangBox() {
    $("#lang").css("background", "url('../images/layout/header/lang/act.png')");
    $("#lang").css("height", "254px");
    $("#langoptions").show();
    langViewActive = true;
}

function hideLangBox() {
    $("#lang").css("background", "url('../images/layout/header/lang/inact.png')");
    $("#lang").css("height", "60px");
    $("#langoptions").hide();
    langViewActive = false;
}

function afterTest() {
    $("#a4").show();
    $("#a11").show();
    $("#mini").hide();
    $("#atwrapper").hide();
}

function restartTest() {
    $("#a4").hide();
    $("#a11").hide();
    $("#mini").show();
    $("#testera").show();
    $("#results").html('');
    $("#atwrapper").show();
}

function setResults(id) {
    var query = '';
    if (link[0]) query += '/' + link[0];
    if (link[1]) query += '/' + link[1];
    if (link[2]) query += '/' + link[2];
    $.post(url + "ajax/results" + query, {id: id}, function (data) {
        $("#testera").hide();
        $("#results").html(data);
    });
}

function setPingtestResults(results) {
    $.post(url + "ajax/results_pingtest", {results: results}, function (data) {
        $("#testera").hide();
        $("#results").html(data);
    });
}

function siteWorth() {
    if ($("#domain").val()) {
        $("#result").html('');
        $("#swa").hide();
        $("#sww").show();
        $.post(url + "ajax/siteworth", {domain: $("#domain").val()}, function (data) {
            $("#sww").hide();
            $("#swa").show();
            $("#domain").val('');
            $("#result").html(data);
        });
    }
}

function statsEventPure(action) {
    _gaq.push(['_trackEvent', 'Tester', action]);
}

function statsEventPingtest(action) {
    _gaq.push(['_trackEvent', 'Ping Test', action]);
}

function statsEventHtml5(action) {
    _gaq.push(['_trackEvent', 'Tester HTML5', action]);
}

function statsEventAd(action) {
    _gaq.push(['_trackEvent', 'Ads', action]);
}

function vSpeedResults(latency, latencylarge, download, upload) {
    console.log('JS results: ' + latency + "ms " + latencylarge + "ms " + download + "Mbps " + upload + "Mbps");
}

function sc(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function gc(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function generateToken(n) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for (var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

function showRodo() {
    $("#rodoClick").unbind();
    a = '<div id="rodo" style="position: fixed; bottom: 25px; left: 25px; width: 500px; background: #ffffff; padding: 10px; border-radius: 8px; border: 2px solid #092161;">' +
        '<b>Informacja o Polityce PrywatnoÅci</b><br><br>' +
        'NaciskajÄÄ przycisk "AKCEPTUJÄ", wyraÅ¼asz zgodÄ na przetwarzanie Twoich danych osobowych ' +
        'przez V-SPEED Sp. z o.o. zgodnie z ' +
        'postanowieniami <a href="' + url + 'polityka_prywatnosci_rodo">Polityki PrywatnoÅci</a>.<br>' +
        '<div id="rodoClick" style="display: inline-block; float: right; padding: 7px 15px; cursor: pointer; background: #092161; border-radius: 5px; color: #ffffff;">AKCEPTUJÄ</div>' +
        '</div>';
    $("body").append(a);
    $("#rodoClick").click(function () {
        sc("rodo2", 1, 365 * 10);
        postRodo("rodo2", 1);
        $("#rodo2").prop('checked', true);
        $("#rodo").remove();
    });
}

function postRodo(part, val) {
    $.post(gateway, {action: "rodo", uid: uid, part: part, val: val});
}

$(document).ready(function () {

    langViewActive = false;
    uid = gc("uid");
    if (!uid) {
        uid = generateToken(32);
        sc("uid", uid, 365 * 10);
    }
    gateway = "https://www.speedtest.pl/api/gateway";
    if (!(gc("rodo2") == 1)) {
        showRodo();
    }
    console.log("Zgoda na profilowanie: " + gc("rodo2"));

    $("#langselector").click(function () {
        if (langViewActive) {
            hideLangBox();
        } else {
            showLangBox();
        }
        return false;
    });

    $("#dostart").click(function () {
        statsEventPure('scrollDown');
        $('html, body').animate({
            scrollTop: $("#speedtest").offset().top
        }, 2000);
    });

    $("#rodo1, #rodo2").click(function () {
        console.log($(this).prop('checked'));
        sc($(this).attr("id"), Number($(this).prop('checked')), 365 * 10);
        postRodo($(this).attr("id"), Number($(this).prop('checked')));
    });

});

