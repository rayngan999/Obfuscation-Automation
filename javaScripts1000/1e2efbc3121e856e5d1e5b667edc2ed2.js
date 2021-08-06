var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});


pbjs.que.push(function() {
    pbjs.setConfig({
        priceGranularity: customConfigObject,
        // "currency": {
        //     "adServerCurrency": "RUB",
        //     "granularityMultiplier": 60,
        //     "conversionRateFile": "https://currency.prebid.org/latest.json",
        //     "bidderCurrencyDefault": {
        //         "criteo": "RUB",
        //     }
        // },
        userSync: {
            iframeEnabled: true
        },
        enableSendAllBids: true
    });
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        bidsBackHandler: sendAdserverRequest
    });

});



function sendAdserverRequest() {
    if (pbjs.adserverRequestSent) return;
    pbjs.adserverRequestSent = true;
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
        });
    });
}

setTimeout(function() {
    sendAdserverRequest();
}, PREBID_TIMEOUT);



(function() {
    var gads = document.createElement("script");
    gads.async = true;
    gads.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    gads.src = (useSSL ? "https:" : "http:") +
        "//www.googletagservices.com/tag/js/gpt.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function() {
    googletag.defineSlot("/42205650/HB_Prebid_network-catalog_desk", [728, 90], "div-gpt-ad-1520936202459-0").addService(googletag.pubads());
    googletag.defineSlot("/42205650/HB_Prebid_futer_desk", [728, 90], "div-gpt-ad-1520936067064-0").addService(googletag.pubads());
    // googletag.defineSlot("/42205650/HB_Prebid_peretyaghka_desk", [970, 90], "div-gpt-ad-1520936422533-0").addService(googletag.pubads());
    googletag.defineSlot("/42205650/HB_Prebid_network-catalog_mobile", [300, 250], "div-gpt-ad-1520936249572-0").addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});