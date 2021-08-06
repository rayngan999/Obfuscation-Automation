ï»¿$(document).ready(function () {
    $('.ajax-content-loader').each(function () {
        var rel = $(this).attr('rel');

        if (typeof rel === "undefined" || rel === "" || rel == null) {
            if(window.console && window.console.error)
                console.error("Nao pode passar o parametro rel vazio para o ajaxloader, verifique o contenturi");
            return false;
        }
        var url = ___scriptPath + rel;
        var h = Math.floor(Date.now());
        if (url.indexOf("?", 0) == -1)
            $(this).load(url + '?' + window.location.search.substring(1) + '&h=' + h);
        else
            $(this).load(url + '&h=' + h);
    });
});