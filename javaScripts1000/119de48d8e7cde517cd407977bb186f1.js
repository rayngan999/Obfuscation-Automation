ï»¿
$(document).ready(function() {

        //esse mÃ©todo estÃ¡ no script vtex.cookie
        cookieLatestSearchInsertUpdate();

});

function cookieLatestSearchInsertUpdate() {
    var name = "urlLastSearch";
    var value = $('.urlLastSearch').text();
    //se estiver numa tela de categoria, departamento, busca, que nÃ£o seja numa tela de produto
    if (value != '') {
        createCookie(name, value, 30);
    }
}

function createCookie(name, value, days) {
    
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    var domain = window.location.hostname;
    domain = domain.replace("www.", "");
    domain = domain.replace("www2.", "");
    document.cookie = name + "=" + value + expires + ";domain=." + domain + ";path=/";
}

function updateCookie(name, value) {

    document.cookie = name + "=" + value + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return unescape(c.substring(nameEQ.length, c.length));
    }
    return "";
}
