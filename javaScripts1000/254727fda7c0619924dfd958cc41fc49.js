ï»¿window.jQueryV2 = jQuery.noConflict();
(function ($) {
	$(document).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {
        if (window.suppressAjaxError) return;
        if (ajaxSettings.url.indexOf("ification") >= 0 && jqXHR.status === 0) return; // <== suppress the misterious "fica" bug
        var message = ajaxSettings.url +
			" Failed with statusCode : " +
			jqXHR.status +
			"\nstatusText: " + jqXHR.statusText;
		//window.appInsights.trackTrace(message, { Url: ajaxSettings.url, StatusCode: jqXHR.status } , 3);
		//window.GenericErrorMessageBox();
        console.error(message);
	});
})(jQueryV2);