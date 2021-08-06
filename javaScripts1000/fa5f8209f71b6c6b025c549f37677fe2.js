GEClient.prototype.WriteLog = function (message1, message2, handler, identifier, isEnableClientLogs, isError) {
    try {

        if (!isEnableClientLogs) {
            return;
        }

        if (message2 !== null) {
            message1 += message2;
        }

        var url = GlobalE.GetCDNUrl();

        url = url + "shared/WriteLog?message=" + message1 + "&handler=" + handler + "&identifier=" + identifier + "&iserror=" + isError;

        var iframe = document.getElementById("ge_srv_log");
        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.setAttribute("id", "ge_srv_log");
            iframe.setAttribute("title", "ge_srv_log");
            iframe.setAttribute("width", "1px");
            iframe.setAttribute("height", "1px");
            iframe.style.display = "none";
            document.getElementsByTagName("body")[0].appendChild(iframe);
        }
        iframe.setAttribute("src", url);
        

    }
    catch (e) {

    }
}

GEClient.prototype.SafeExecute = function (func) {
    return function () {
        try {
            return func.apply(this, arguments);
        }
        catch (e) {
            console.log('SafeExecute ex: ' + e);
        }
    };
};
