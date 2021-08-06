ï»¿var partnerTracker =  (function () {
    return {
        trackVisit : function (verificationKey, trackingBaseAddress) {
            try {

                var resultString = { pid: 0, cid: 0, crid: 0 };
                var isQueryString = false;

                if (document.location.hash !== "") {
                    decodeURIComponent(document.location.hash).replace(
                        new RegExp("([^#=&]+)(=([^&]*))?", "g"),
                        function ($0, $1, $2, $3) { resultString[$1] = $3; });
                }
                else if (document.location.search !== "") {
                    decodeURIComponent(document.location.search).replace(
                        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                        function ($0, $1, $2, $3) { resultString[$1] = $3; });
                    isQueryString = true;
                }

                var params = {
                    id: resultString.pid,
                    cid: resultString.cid,
                    crid: resultString.crid,
                    tid: resultString.tid,
                    e: resultString.e,
                    ls: resultString.ls,
                    ref: document.referrer,
                    url: document.location.href.replace(document.location.hash, ""),
                    key: verificationKey,
                    isQueryString: isQueryString
                };

                var encodeQueryData = function(data) {
                    var ret = [];
                    for (let d in data)
                        if (Object.prototype.hasOwnProperty.call(data, d))
                            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d] == null ? "" : data[d]));
                    return ret.join('&');
                };

                var img = document.createElement('img');
                var src = trackingBaseAddress + "/TrackPartnerVisit?" + encodeQueryData(params);
                if (src.length > 4000) {
                    params.ref = document.referrer.split("?")[0];
                    src = trackingBaseAddress + "/TrackPartnerVisit?" + encodeQueryData(params);
                }
				img.src = src;
			} catch (e) { }
        }
    };
}());
