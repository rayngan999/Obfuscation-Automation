/// <reference name="MicrosoftAjax.js"/>
function TrackCall(urlTrack) {
    var query = location.search;

    if (query.indexOf("utm_source") < 0 && window.defaultUtmFromFolder != "") { query = "?" + window.defaultUtmFromFolder; };

    if (query == "") {
        query = "?";
    } else {
        query += "&";
    };

    var documentReferrer = escape(document.referrer).replace(/\//g, "%2F");

    query += "referrer=" + documentReferrer;

    $.get(urlTrack + query);
}


$(document).ready(function () {
    TrackCall("/Site/Track.aspx");
	try
	{
		$.getScript('/api/sessions/files/client.js');
	}
	catch(e) { }
});
