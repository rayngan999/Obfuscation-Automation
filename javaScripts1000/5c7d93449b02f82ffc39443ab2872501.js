    var edgeSupport_854047 = "f";
    var isIEBrowser_854047=false;
    var browserVersion_854047;

    function initiateNewRequest_854047(edgeSupport, html5Support) {
            var newUrl = "https://ads.everesttech.net/ads/mts/15699/4249?DFA_Click_Tracker=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjsu6hEaLEiH641khvo0qUfZTLeuN9pojnDvZ8B5XFqHX8-Ufux5e4OdsCQmjcnpd8nlW5m6dzspu7Q8Q3iarU3jP53amAzVrHJfkUm9ADQONWXHPAmuriAIKNGUV0PWd-7W8SeTYVSdfc5ljlnKLRrULPtEgSCQgGBR0YscxSQdVollQX1SMvWKCLy5CWMNIZgUH4tkcm_Sy6y8AQBTD6iShj9w5IRWU4_StfuFhCq86I3_3GdZzEf9fYXs9ibOrf6Aur1i6V_d6-W8L-C1BnqvPvjNE2ji3b_ycujC4lSc_4h7FfGOzpywv30WYqMjOXq8M6PE7DUTNP-gYfcTCADlsRft41QGZv60G-eJ5FRekqF5WnZtFfS0fvp79HoJ4zTPMB_VPEiDC-NWKrArYTBJyJ_pqmAkwFAdDwOFb8tT3wpthiUT60eQbIRSK211TvixPCta_04dhlpWt6Du9wcowmhjlIZCRb689IWAu50Pbdb7vFI7YziyvS4WhoLIWUcihwnq_sewgApK-SdPZm10Xy4F-qcIkh3i4SgfGgRWxrj7O62MZdpeC2DscaYtNlmQdeiQEiT8JlddC-WyoTgIgNDwcPVpfyq1z8EGo15NNuf0jpQxMjqj1KSXr_jpAQHgxG-inz100F90MBrUGtScQTXOyDyaH7cJ05051Z67Epdv__7jX2YxXCfpJGeXAOuDz4T3KCOyGAJJL64AdVYrNR0M4wWyiuTHkXvGjjGk4UqOzhDNQobkZ4iyui6_5NCkoofStH0ixPPW_q-HbiVJbKklsuM1QYt2fK_SKVOJe2rY5CE68WQu9nnFv9tJ1qDS2bG03BfwcSlng-gxtnEXsFBIyNa6_Zs3TWAEJ3S0-T77yZ-j2BClymFOV7xZo47_9x5gSXDDrXGUgKbIldsM0rhBWoAaiB7Yflj6t-GPWFTgJNC9aZluultrf6BusOzXEiVLDazv0FTxRsgBg00xoSt8btxDzProHGI5PSXcGyHgylr-0rl7vsvXv_syizLq5PhSSUnqptSCPydxy-_G4BQATh0Pvi3n4_4P5-5tNCQfe8veAD00bEoF7JkFsrtgZOsmO1bUMbebxEa4VvEsWcw5oq9YC-qCIWIiipEnZ7weUwEtCBeKEc0PgkZU%26sai%3DAMfl-YQFK-awlcOYF6fw0qL_6FWm5yT_E_dUPwAji4OzNjfXnEAXIiarBTnqMc9xjoCm9kj3b3boDSxxzW5dweGdfmHDmku_v3vw4ZofXzf13jaCWcppqQg4iyM3anX5v_9xpbkua-HPNjn6dbtFk4YrQ10IDvzowdn2oA1sQqO3%26sig%3DCg0ArKJSzOOe_OgpkTkSEAE%26fbs_aeid%3D%5Bgw_fbsaeid%5D%26urlfix%3D1%26adurl%3D&DFA_BuyId=25967879&DFA_PlacementId=306195147&DFA_AdId=499148893&DFA_CreativeId=152951232&DFA_SiteId=6958819&TC_1=2200193&TC_2=25967879&TC_3=306195147&TC_4=152951232&TC_5=dcmadvertiserid|8391437$dcmcampaignid|25967879$dcmadid|499148893$dcmrenderingid|153120980$dcmsiteid|6958819$dcmplacementid|306195147$customer|Microsoft$dv360auctionid|ct=HK&st=&city=0&dma=0&zp=&bw=4&DCM_PlacementID=306195147" + "&edge=" + edgeSupport + "&html5="+ html5Support +"&nr=" + Math.random();
            if(document.readyState === "complete")
            {
                var sc = document.createElement("script");
                sc.setAttribute("type","text/javascript");
                sc.setAttribute("src",newUrl);
                if (document.currentScript) {
                    var pn = document.currentScript.parentNode;
                    var sbn = document.currentScript.nextSibling;
                    if (sbn) {
                        pn.insertBefore(sc,sbn);
                    } else {
                        pn.appendChild(sc);
                    }
                } else {
                    document.body.appendChild(sc);
                }
            } else {
                document.write('<' + 'script type="text/javascript" src="' + newUrl +'"></' + 'script>');
            }
        }

     function getInternetExplorerVersion_854047() {
         // Returns the version of Internet Explorer or a -1
         // (indicating the use of another browser).

             var rv = -1; // Return value assumes failure.
             if (navigator.appName == 'Microsoft Internet Explorer') {
                 isIEBrowser_854047=true;
                 var ua = navigator.userAgent;
                 var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

                 if (re.exec(ua) != null)
                     rv = parseFloat( RegExp.$1 );
             }

             return rv;
         }

      //returns true if ie version is less than 9, say ie6, ie7, ie8
         // -1 for non IE browsers.
         function isIEBrowserWithVersionLessThan9_854047 () {

             browserVersion_854047 = getInternetExplorerVersion_854047();  //-1 for non IE browsers
             if((browserVersion_854047 != -1) && (browserVersion_854047 < 9)) {
                 return true;

             }
             return false;
         }

    //code to detect Edge Features, courtesy  (http://dl.dropboxusercontent.com/u/13483458/test-edge.html)
    var testEle_854047=document.createElement("div_854047");
    function isSupported_854047(a){

        var d=testEle_854047.style,e;
        for(i=0;i<a.length;i++)
            if(e=a[i],d[e]!==void 0)
                return!0;
        return!1
    }

    function supportsRGBA_854047(){

        testEle_854047.cssText="background-color:rgba(150,255,150,.5)";
        if((""+testEle_854047.style.backgroundColor).indexOf("rgba")==0)
            return!0;
        return!1
    }

    var hasTransform_854047=isSupported_854047([
        "transformProperty",
        "WebkitTransform",
        "MozTransform",
        "OTransform",
        "msTransform"
    ]),

    hasSVG_854047=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,
    hasRGBA_854047=supportsRGBA_854047(),
    hasJSON_854047=window.JSON&&window.JSON.parse&&window.JSON.stringify,
    readyToPlay=!1;

    function isIEBrowserVersion9_854047() {
        return (isIEBrowser_854047 && (browserVersion_854047 == 9)) ? true : false;
    }

    function isEdgeSupported_854047() {
        if(isIEBrowserVersion9_854047()) {
            return "y";           //hardcoding IE9 edge support.
        }
        if(hasTransform_854047) {
            if(requiresSVG_854047&&!hasSVG_854047)
                return "f";
            return "y";
        }
        return "f";
    }

    function isCanvasSupported_854047(){
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }

    function isHTML5FeaturesSupported_854047() {
         return (isCanvasSupported_854047()) ? "y" : "f";
    }

    var requiresSVG_854047=false;
    //edge detection code end

    //Edge is not supported in IE 6,7,8. Hence hardcoding edge as not supported for the same.
   // edgeSupport_854047 = (isIEBrowserWithVersionLessThan9_854047()) ? "f" : isHTMLFeaturesSupported_854047(featureArray_854047);
    edgeSupport_854047 = (isIEBrowserWithVersionLessThan9_854047()) ? "f" : isEdgeSupported_854047();
    html5Support_854047 = isHTML5FeaturesSupported_854047();

    initiateNewRequest_854047(edgeSupport_854047, html5Support_854047);
