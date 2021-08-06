
(function(){
    
    function docReady(fn) {
        if(document.readyState === "complete" || document.readyState === "interactive"){
            setTimeout(fn, 1);
        }else{
            document.addEventListener("DOMContentLoaded", fn);
        }
    }
    
    function getSearchParameters() {
        var prmstr = window.location.search.substr(1);
        return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }
    
    function loadAsyncScript(src, callback){
        var script = document.createElement('script');
        script.src = src; 
        script.type = 'text/javascript';
        script.async = true;
        if(callback != null){
            if (script.readyState) { // IE, incl. IE9
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function() { // Other browsers
                    callback();
                };
            }
        }
        a=document.getElementsByTagName('script')[0];
        a.parentNode.insertBefore(script,a);
    }
    
    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }
    
    function create_cookie_sync(url){
        var ifrm = document.createElement("iframe");
        ifrm.src = url;
        ifrm.scrolling = "no";
        ifrm.frameBorder = 0;
        ifrm.width = 0;
        ifrm.height = 0;
        ifrm.style.margin = 0;
        ifrm.style.padding = 0;
        ifrm.style.display = "none";
        ifrm.style.width = "0px";
        ifrm.style.height = "0px";
        document.body.append(ifrm);
    }
    
    function call_cookies_sync(){
        docReady(function() {
            var count_cookie_sync = 0;

            create_cookie_sync("https://csync.smilewanted.com/drop_cookie_sw.php");

            if(output_list_cookies_sync.length > 0){
                output_list_cookies_sync.forEach(function(cookie_sync_url){
                    setTimeout(function(){

                        cookie_sync_url = cookie_sync_url.replace('[GDPR_CONSENT_STRING]', consent_string);

                        create_cookie_sync(cookie_sync_url);
                    }, 50*count_cookie_sync);

                    count_cookie_sync++;
                });   
            }
        });
    }
    
    var list_cookies_sync = {"smart":{"order":0,"redirect_url":"https:\/\/sync.smartadserver.com\/getuid?gdpr_consent=[GDPR_CONSENT_STRING]&nwid=2491&url=https:\/\/csync.smilewanted.com\/set_partner_userid_get\/smart\/[sas_uid]"},"improve":{"order":1,"redirect_url":"https:\/\/ice.360yield.com\/server_match?r=https:\/\/csync.smilewanted.com\/set_partner_userid_get\/improve\/{PUB_USER_ID}&partner_id=1010"},"rubicon":{"order":2,"redirect_url":"https:\/\/pixel.rubiconproject.com\/exchange\/sync.php?p=pbs-smilewanted"},"pubmatic":{"order":3,"redirect_url":"https:\/\/ads.pubmatic.com\/AdServer\/js\/user_sync.html?p=158810&gdpr=1&gdpr_consent=[GDPR_CONSENT_STRING]&predirect=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fpubmatic%2F"},"indexexchange":{"order":4,"redirect_url":"https:\/\/ssum-sec.casalemedia.com\/usermatchredir?s=193216&cb=https:\/\/csync.smilewanted.com\/set_partner_userid_get\/indexexchange\/"},"spotx":{"order":5,"redirect_url":"https:\/\/sync.search.spotxchange.com\/partner?adv_id=178357&redir=https:\/\/csync.smilewanted.com\/set_partner_userid_get\/spotx\/$SPOTX_USER_ID"},"appnexus":{"order":6,"redirect_url":"https:\/\/secure.adnxs.com\/getuid?https:\/\/csync.smilewanted.com\/set_partner_userid_get\/appnexus\/$UID"},"adyoulike":{"order":7,"redirect_url":"https:\/\/visitor.omnitagjs.com\/visitor\/bsync?uid=abf65ec65b3e06310c52d0850494081a&name=SMILE_WANTED&url=%20https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fadyoulike%2F%5BBUYER_USERID%5D"},"adotmob":{"order":8,"redirect_url":"https:\/\/sync.adotmob.com\/cookie\/smilewanted?r=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fadotmob%2F{amob_user_id}"}};

    var output_list_cookies_sync = [];

    for(let [key, value] of Object.entries(list_cookies_sync)){
        output_list_cookies_sync[value.order] = value.redirect_url;
    }
    
    var consent_string = '';
    var params = getSearchParameters();
    var force_calls = false;
    
    setTimeout(function(){

        try{
            if(typeof top.window.__tcfapi !== 'undefined'){
                top.window.__tcfapi('getTCData', 2, function (tcData, success){
                    if(success){
                        console.log("CMP");
                        consent_string = tcData.tcString;
                    }
                });
            }else{
                if(params.gdpr && params.gdpr_consent){
                    consent_string = params.gdpr_consent;
                }else{
                    force_calls = true;
                }
            }
        }catch(e){
            if(params.gdpr && params.gdpr_consent){
                consent_string = params.gdpr_consent;
            }else{
                force_calls = true;
            }
        }
        
        loadAsyncScript("https://static.smilewanted.com/js/decode_consent/decode_consent.js", function() {  
            if((sw_consent.vendor_allowed(consent_string, 639) && sw_consent.purpose_allowed(consent_string, 1) && sw_consent.purpose_allowed(consent_string, 2)) || force_calls){
                call_cookies_sync();
            }
        });
        
    }, 0);
})();

