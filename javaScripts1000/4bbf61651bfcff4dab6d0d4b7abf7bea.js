ï»¿$(document).ready(function () {
    var language = $('meta[name=language]').attr("content");
    if (language === 'es-AR') {
        $('body').prepend('<div id="ajaxBusy" class="load loading"><p>Cargando datos...</p></div>');
    } else {
        $('body').prepend('<div id="ajaxBusy" class="load loading"><p>Aguarde...</p></div>');
    }
});

//$(document).unbind(function() {
//   $('#ajaxBusy').show(); 
//})

$(document).ajaxStart(function() {
    $('#ajaxBusy').show();
    //alert('start');
}).ajaxStop(function() {
    $('#ajaxBusy').hide();
    //alert('stop');
});