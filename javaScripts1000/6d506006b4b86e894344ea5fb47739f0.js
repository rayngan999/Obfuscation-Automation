window.addEventListener('CookiebotOnAccept', function(e) {
    if(Adhese.debug) console.log('CookiebotOnAccept');
    Adhese.gptadslots = googletag.pubads().getSlots();
    Adhese.consentForAds = true;
    Adhese.defineAdUnits();
    setTimeout(function(){
        Adhese.syncUser();
        Adhese.syncImprove();
    }, 1000);  
}, false);


var Adhese = {};
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

Adhese.adUnits = [];
Adhese.gptadslots = []
Adhese.consentForAds = false;
Adhese.PREBID_TIMEOUT = 2000;
Adhese.prebidRefererUrl = window.location.href;
Adhese.debug = false;
Adhese.definedSlots = undefined;
Adhese.screenWidth = 0;
Adhese.deviceType = 'unknown';
Adhese.slotsRequested = false;

if (window.location.href.includes('adhese_debug=true')) {
    Adhese.debug = true;
}


if (window.location.href.includes('gyurkatest')) {
    googletag.cmd.push(function(){
        googletag.pubads().setTargeting('test', ['true']);
    })
}

Adhese.priceBucketConfig = {
    "buckets": [{
            "precision": 2,
            "min": 0,
            "max": 1,
            "increment": 0.05
        },
        {
            "precision": 2,
            "min": 1,
            "max": 2,
            "increment": 0.10
        },
        {
            "precision": 2,
            "min": 2,
            "max": 5,
            "increment": 0.20
        },
        {
            "precision": 2,
            "min": 5,
            "max": 20,
            "increment": 0.5
        },
        {
            "precision": 2,
            "min": 20,
            "max": 50,
            "increment": 1
        }
    ]
};

Adhese.getScreenWidth = function() {
    if(Adhese.debug) console.log('getScreenWidth');
    return Math.max(
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

Adhese.appendSyncIframe = function(options) {
    if(Adhese.debug) console.log('ADHESE: appendSyncIframe');
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("id", "sync_iframe_" + options.syncName);
    iframe.setAttribute("height", "0");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("marginwidth", "0");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("style", "border: 0px; display: none;");
    iframe.setAttribute("src", options.url);
    if (document.body) {
        document.body.appendChild(iframe);
    } else {
        //wait 1 sec and try again
        setTimeout(function() {
            if (document.body) {
                document.body.appendChild(iframe);
            }
        }, 1000);
    }
};

Adhese.syncUser = function(option) {
    if(Adhese.debug) console.log('ADHESE: syncUser');
    Adhese.appendSyncIframe({ syncName: "businessinsider", url: "https://user-sync.adhese.com/iframe/user_sync.html?account=businessinsider" });
};

Adhese.defineAdUnits = function() {
    if(Adhese.debug) console.log('ADHESE: defineAdUnits');
    Adhese.screenWidth = Adhese.getScreenWidth();
    if (Adhese.screenWidth < 769) {
        Adhese.deviceType = 'phone';
    } else if (Adhese.screenWidth < 1025) {
        Adhese.deviceType = 'tablet';
    } else {
        Adhese.deviceType = 'desktop';
    }

    try {
        for (var i = 0; i < Adhese.gptadslots.length; i++) {
            if (Adhese.gptadslots[i]) {
                if (!Adhese.definedSlots) Adhese.definedSlots = {};
                Adhese.definedSlots[Adhese.gptadslots[i].getSlotElementId()] = [Adhese.gptadslots[i]];
            }
        }
        if (Adhese.definedSlots) {
            Adhese.createAdUnits();
        }
    } catch (e) {
        console.log(e);
    }
};

Adhese.createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    if(Adhese.debug) console.log('ADHESE: createPrebidAdunitFromSlot');

    var slotNames = {
        'div-gpt-ad-318376290013191143-1': 'billboard',
        'div-gpt-ad-25613-7': 'rectangle1',
        'div-gpt-ad-456245625425492648-1': 'rectangle2',
        'div-gpt-ad-1586933999584-1': 'rectangle3',
        'div-gpt-ad-318376290013191143-1': 'billboard',
        'div-gpt-ad-318376290013191143-2': 'rectangle1',
        'div-gpt-ad-25613-4': 'rectangle2',
        'div-gpt-ad-1586933999584-2': 'rectangle3'
    };

    var sizeFromAdunit = [1, 1];
    var loc = slot.getAdUnitPath().split('/')[2].toUpperCase();
    var format = undefined;
    var slotElementId = slot.getSlotElementId();
    var formatViewport = Adhese.screenWidth < 768 ? "mobile_" : "desktop_";
    try {
        if (slotNames[slotElementId]) {
            format = formatViewport + slotNames[slotElementId];
        }
    } catch(error) {
        console.log(error);
    }

    if (format && sizeFromAdunit.length > 1) {
        var o = {
            code: slot.getSlotElementId(),
            mediaTypes: {
                banner: {
                    sizes: sizeFromAdunit
                }
            },
            bids: [{
                bidder: 'adhese',
                params: {
                    account: 'businessinsider',
                    location: loc.toUpperCase(),
                    format: format.toUpperCase(),
                    data: {
                        'dt': [Adhese.deviceType],
                        'tl': [tlParam],
                        'xi': [xiParam]
                    }
                }
            }]
        }
        for (var c = 0; c < customParam.length; c++) {
            o.bids[0].params.data[customParam[c][0]] = customParam[c][1];
        }

        Adhese.adUnits.push(o);
    }
    return Adhese.adUnits;
};

Adhese.addTrackingPixel = function(uri) {
    if(Adhese.debug) console.log('ADHESE: addTrackingPixel');
    var img = document.createElement('img');
    img.src = uri;
    img.style.height = "1px";
    img.style.width = "1px";
    img.style.margin = "-1px";
    img.style.border = "0";
    img.style.position = "absolute";
    img.style.top = "0";
    document.body.appendChild(img);
};


Adhese.ajax = {
    request: function(ops) {
        if(typeof ops == 'string') ops = { url: ops };
        ops.url = ops.url || '';
        ops.method = ops.method || 'get'
        ops.data = ops.data || {};
        if(typeof ops.encodeData == "undefined"){
            ops.encodeData = true;
        }
        var getParams = function(data, url) {
            var arr = [], str;
            for(var name in data) {
                arr.push(name + '=' + encodeURIComponent(data[name]));
            }
            str = arr.join('&');
            if(str != '') {
                return url ? (url.indexOf('?') < 0 ? '?' + str : '&' + str) : str;
            }
            return '';
        }
        var api = {
            host: {},
            process: function(ops) {
                var self = this;
                this.xhr = null;

                if (document.all && !window.atob) { // IE9 and older
                    try {
                        this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
                    }
                    catch(e) {
                        try {
                            this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch (e) {this.xhr = false; }
                    }
                } else {
                    try {
                        this.xhr = new XMLHttpRequest();
                    }
                    catch (e) {
                        this.xhr = false;
                    }
                }

                if(this.xhr) {
                    if ("withCredentials" in this.xhr) {
                        this.xhr.withCredentials = true;
                    }
                    this.xhr.onreadystatechange = function() {
                        if(self.xhr.readyState == 4 && self.xhr.status == 200) {
                            var result = self.xhr.responseText;
                            if(ops.json === true && typeof JSON != 'undefined') {
                                if (result){
                                    try{
                                        result = JSON.parse(result);
                                        self.doneCallback && self.doneCallback.apply(self.host, [result, self.xhr]);
                                    }catch(e){
                                        self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: " + e]);
                                    }
                                }else {
                                    self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: Response is empty string"]);
                                }
                            }
                        } else if(self.xhr.readyState == 4) {
                            self.failCallback && self.failCallback.apply(self.host, [self.xhr]);
                        }
                        self.alwaysCallback && self.alwaysCallback.apply(self.host, [self.xhr]);
                    }
                }
                if(ops.method == 'get') {
                    this.xhr.open("GET", ops.url + getParams(ops.data, ops.url), true);
                } else {
                    this.xhr.open(ops.method, ops.url, true);
                    this.setHeaders({
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-type': 'application/x-www-form-urlencoded'
                    });
                }
                if(ops.headers && typeof ops.headers == 'object') {
                    this.setHeaders(ops.headers);
                }
                setTimeout(function() {
                    if(ops.method == 'get'){
                        self.xhr.send()
                    }else{
                        var data;
                        if (ops.encodeData) {
                        data = getParams(ops.data);
                    }else {
                        data = ops.data;
                    }
                    self.xhr.send(data);
                }
                }, 20);
                return this;
            },
            done: function(callback) {
                this.doneCallback = callback;
                return this;
            },
            fail: function(callback) {
                this.failCallback = callback;
                return this;
            },
            always: function(callback) {
                this.alwaysCallback = callback;
                return this;
            },
            error: function(callback) {
                this.errorCallback = callback;
                return this;
            },
            setHeaders: function(headers) {
                for(var name in headers) {
                    this.xhr && this.xhr.setRequestHeader(name, headers[name]);
                }
            }
        }
        return api.process(ops);
    }
};

Adhese.syncImprove = function(option) {
    if(Adhese.debug) console.log('ADHESE: syncImprove');
    var response = Adhese.ajax.request({
            url: "https://ad.360yield.com/add?jsonp=%7B%22bid_request%22%3A%7B%22id%22%3A%22adhese_user_sync%22%2C%22secure%22%3A1%2C%22version%22%3A%22DT-1.6.0-JS-5.1.1%22%2C%22gdpr%22%3A%221%22%2C%22imp%22%3A%5B%7B%22id%22%3A%22efg%22%2C%22pid%22%3A13317693%2C%22banner%22%3A%7B%7D%7D%5D%7D%7D",
            method: 'get',
            json: true
        })
        .done(function(result) {
            try {
                var syncUrls = result.bid[0].sync;
                for (var i in syncUrls) {
                    Adhese.addTrackingPixel(result.bid[0].sync[i]);
                }
            } catch (e) {
                console.log("ADHESE: exception when syncing Improve users");
                console.log(e);
                console.log(result);
            }
        });
    };

Adhese.createAdUnits = function() {
    if(Adhese.debug) console.log('ADHESE: createAdUnits');
    var xiParam = '';
    var xtParam = '';
    var tlParam = 'all';
    var targetArray = [];

    if (Adhese.definedSlots) {
        for (var prop in Adhese.definedSlots) {
            Adhese.adUnits = Adhese.createPrebidAdunitFromSlot(Adhese.definedSlots[prop][0], Adhese.adUnits, xiParam, xtParam, tlParam, targetArray);
        }
    }

    pbjs.bidderSettings = {
        adhese: {
            bidCpmAdjustment: function(bidCpm, bid) {
                return bidCpm;
            }
        }
    };

    pbjs.que.push(function() {
        pbjs.addAdUnits(Adhese.adUnits);
        pbjs.setConfig({
            consentManagement: {
              cmpApi: 'iab',
              timeout: 100,
              allowAuctionWithoutConsent: true
            },
            bidderSequence: "random",
            bidderTimeout: Adhese.PREBID_TIMEOUT,
            priceGranularity: Adhese.priceBucketConfig,
            userSync: {
                syncDelay: 100,
                syncEnabled: false,
                syncsPerBidder: 5,
                filterSettings: {
                    iframe: {
                        bidders: ['adhese'],
                        filter: 'include'
                    }
                }
            },
            currency: {
                adServerCurrency: "EUR"
            },
            refererInfo: {
                referer: Adhese.prebidRefererUrl
            }
        });

        if (Adhese.consentForAds) {
            pbjs.requestBids({
                bidsBackHandler: Adhese.initAdserver,
                timeout: Adhese.PREBID_TIMEOUT
            });
        }
    });
};

Adhese.initAdserver = function(bids) {
    if(Adhese.debug) console.log('ADHESE: initAdserver');
    for (var i in bids) {
        for (var j in bids[i].bids) {
            var bid = bids[i].bids[j];
            if (bid.width == 1800 && bid.height == 1000) {
                bid.width = 728;
                bid.height = 90;
            } else if (bid.width == 970 && bid.height == 1000) {
                bid.width = 970;
                bid.height = 250;
            }
        }
    }
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        if (!Adhese.slotsRequested) {
            googletag.pubads().refresh();            
        } else {
            console.log('slots already requested, not refreshing again.')
        }
    });
};


Adhese.checkConsent = function() {
    __tcfapi('getTCData', 2, (tcData, success) => {
        try {
            var c = tcData.purpose.consents;
            var newConsentForAds = (c[1] && c[2] && c[3] && c[4] && c[5]);
            var newConsentString = tcData.tcString;
            if (Adhese.consentForAds !== newConsentForAds) {
                Adhese.consentString = newConsentString;
                Adhese.consentForAds = newConsentForAds;
                googletag.cmd.push(function(){
                    Adhese.gptadslots = googletag.pubads().getSlots();
                    console.log(Adhese.gptadslots)
                    if (Adhese.gptadslots.length) {
                        Adhese.defineAdUnits();
                    } else {
                        setTimeout(function(){
                            Adhese.gptadslots = googletag.pubads().getSlots();
                            console.log(Adhese.gptadslots)
                            Adhese.defineAdUnits();  
                        },500)                         
                    }
                })

                setTimeout(function(){
                    Adhese.syncUser();
                    Adhese.syncImprove();
                }, 1000);  
            }
        } catch (e) {
            console.log(e);
        }
    });
};

try {
    window.__tcfapi('addEventListener', 'acceptAllButtonClicked', function(data) {
        Adhese.checkConsent();
    });

    window.__tcfapi('addEventListener', 'exitButtonClicked', function(data) {
        Adhese.checkConsent();
    });

    window.__tcfapi('addEventListener', 'cmpReady', function(data) {
        Adhese.checkConsent();
    });    
} catch (e) {
    console.log(e);
    console.log('above error should not appear on Liveramp setup.')    
};

googletag.cmd.push(function(){
    googletag.pubads().addEventListener('slotRequested', function(event) {
      var slot = event.slot;
      console.log('Slot', slot.getSlotElementId(), 'has been requested.');
      Adhese.slotsRequested = true;
    });
});



