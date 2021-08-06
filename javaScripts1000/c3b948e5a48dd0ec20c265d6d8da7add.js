(function() {
    if (typeof preset.size != "undefined") {
        for(var brkey in preset.size) {
            var zoneSize = preset.size[brkey]["width"] + "x" + preset.size[brkey]["height"];

            var zon = {
                "970x250" : {
                    cid : 17452
                },
                "970x90" : {
                    cid : 17453
                },
                "728x90" : {
                    cid : 17454
                },
                "300x600" : {
                    cid : 17455
                },
                "160x600" : {
                    cid : 17456
                },
                "336x280" : {
                    cid : 17457
                },
                "300x250" : {
                    cid : 17458
                },
                "320x100" : {
                    cid : 17459
                },
                "300x100" : {
                    cid : 17460
                },
                "320x50" : {
                    cid : 17461
                }
            };

            if (typeof zon[zoneSize] != "undefined") {
                var d = new Date();
                var n = d.getTime();
                var BwPayload = {
                    url : location.href,
                    referrer : location.origin,
                    inIframe : true,
                    adUnits : [{
                        ChannelID: zon[zoneSize].cid,
                        mediaTypes : {
                            banner : {
                                sizes: [
                                    zon[zoneSize].size
                                ],
                            }
                        }
                    }],
                    version : {
                        bridgewell : "0.0.2",
                        prebid : "3.18.0"
                    }
                };

                var n = d.getTime();

                var BwPayload = {
                    "version": {
                        "prebid": "4.35.0",
                        "bridgewell": "0.0.3"
                    },
                    "inIframe": false,
                    "url": location.href,
                    "referrer": location.origin,
                    "adUnits": [{
                        "cid": zon[zoneSize].cid,
                        "adUnitCode": "cfadz",
                        "requestId": "2895e26" + n,
                        "mediaTypes": {
                            "banner": {
                                "sizes": [
                                    [preset.size[brkey]["width"], preset.size[brkey]["height"]]
                                ]
                            }
                        }
                    }],
                    "refererInfo": {
                        "referer": location.origin,
                        "reachedTop": true,
                        "isAmp": false,
                        "numIframes": 0,
                        "stack": [location.origin],
                        "canonicalUrl": null
                    }
                };
                bwXhr(BwPayload,zoneSize,preset);

                function bwXhr(BwPayload,zoneSize,preset){
                    var BwXhr = new XMLHttpRequest();
                    BwXhr.onreadystatechange = function() {
                        if (BwXhr.readyState === 4 && BwXhr.status === 200 && BwXhr.response.length > 0) {
                            var BwJson = JSON.parse(BwXhr.response);
                            var Bwcpm = Math.round(BwJson[0].cpm * 1000000) / 1000000;
                            fbList[fbList.length] = {
                                "cpm": Bwcpm,
                                "bider": "bridgewell",
                                "tag": BwJson[0].ad,
                                "impTag": "//ad.holmesmind.com/adserver/tp?tpid=" + zoneSize + "&tp=bridgewell&c=" + Bwcpm,
                                "w" : BwJson[0].width,
                                "h" : BwJson[0].height,                                   
                            }
                        }
                    };
                    BwXhr.withCredentials = true;
                    BwXhr.open("POST", "https://prebid.scupio.com/recweb/prebid.aspx?cb=" + Math.random(), true);
                    BwXhr.send(JSON.stringify(BwPayload));
                }
            }
        }
    }
})();            