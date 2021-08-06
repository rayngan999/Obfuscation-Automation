    var edgeSupport_684630 = "f";
    var isIEBrowser_684630=false;
    var browserVersion_684630;

    function initiateNewRequest_684630(edgeSupport, html5Support) {
            var newUrl = "https://ads.everesttech.net/ads/mts/15699/4249?DFA_Click_Tracker=https%3A%2F%2Fadclick.g.doubleclick.net%2Fpcs%2Fclick%3Fxai%3DAKAOjsvbWzalSFJAb7qy3B_nmgJTQopqF4-84EpAKhsJM5gG4q8_QWNXdPVz_czuZEU56ZHlfb4w-5vYmuby8jmizcuLr17gx9IxqJbPVQAXzuZZcT_9vJOfcxUX_YtQtc7FeYsCrd68grJwgRaSCYQ-75wbxdPfp_nkWpO3iG1CI-qXjQqbMlgG3RrywiHEbhZrZrsNeIQ4kWZMLk0n_nqMpfUYmCWIZukrBy0pdizlWzGcgsnoXMJ6cbhvCOFDZPrYNVqMxjB7qXogwm2QUc0_VkamwVBcN9ZpyWuELJV69b5z0fn1eDAqwCCZJgXADLilOgfKbPui6cRQPqC4SpfZUm2EeubZmT0l9SVrHNEWtbdCqSzXof0PcKlEa0EvRNWuTr8Y5FZv5_7Qui_LDMvtn1e4WjDRKLQ1pAXRdJZHcW4AaCb978hGc5xYSdzPZ6Jv0zvlt8mxuZ7vFQhbQH1H_2cbNisHJnzqJXtSA2vyAjnKB82k5-ahDIg8WaGvD5wLu7-MQ8GxB4oDVhZpvz6YKOPeicwWfj1e5hyrBFQpXuAL5OzGW1kN286jZj69-SDm2Jx_Gv2BSWA-2vpAh7QcBXiZsuN2Qe5wzKa4fx1HPfNLPljmmOQZaTHXx7yGW6dkmagWHBmg6g5Ub5DW9tIklSOGtxnjOTXhuS_h4fC5pdP2r4K2tx7QzZ3wakcZl7XtCmI38r7NB3dQ4SgPCpYlYWzxUgt5twEylGc17HtOgHxhHdmPydP7dSRGcfdH8TkrKd-5TyQisrctEtu5rRIiXYtjz8yc2v-yMs-mRvjBbHoa5ADQr9w5449W_nHV3_NSf_bc0PBof1BrypHWFo8WDEAf9NlSRkFGhSaOxcDoEt5JA4RcHTZ6JZM08SZgkmKbM4mg_2WdaDX0ry7rsourXqrHrVHltYWmjY2j3i6j6i9iHbPlUsUOYXnM9jCm_MeXATkoFcH1q3ds_SS-rSpU23IQpFc9N-NBTsRgFsEJxML-HerwEy0rl0Fp5tPjeduG9Ik0kmSOJNrs0UAhdcscnjlt14iXEwGduWQFuZoeJK8qaVxdyL4BWaH7w_JZLefWWVyQ0iHwKJK0INSVVNBoOnPmMbCvAsjeEzV62zNvH4E1WCk2PkeIgkfke0Fsh0pPRds%26sai%3DAMfl-YTD6jXcR-lZErK1e-5ZvUs3YRaUreizCJdAUUgzMUND3_NmGHQkR77g1_bXuE_0P1gBxNfLB4RbvRknI5Iu3xRTt7QcWNsLfPkxZhPtRgEIBmkKidjU4-Q7G-wR_tMPrdrbQOY5dIvPhSVymhA4uZA0la7tY5z9nsUzRiaE%26sig%3DCg0ArKJSzAZ4PL6-A6KYEAE%26fbs_aeid%3D%5Bgw_fbsaeid%5D%26urlfix%3D1%26adurl%3D&DFA_BuyId=25967879&DFA_PlacementId=306195147&DFA_AdId=499148893&DFA_CreativeId=152951232&DFA_SiteId=6958819&TC_1=2200193&TC_2=25967879&TC_3=306195147&TC_4=152951232&TC_5=dcmadvertiserid|8391437$dcmcampaignid|25967879$dcmadid|499148893$dcmrenderingid|153120980$dcmsiteid|6958819$dcmplacementid|306195147$customer|Microsoft$dv360auctionid|ct=HK&st=&city=0&dma=0&zp=&bw=4&DCM_PlacementID=306195147" + "&edge=" + edgeSupport + "&html5="+ html5Support +"&nr=" + Math.random();
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

     function getInternetExplorerVersion_684630() {
         // Returns the version of Internet Explorer or a -1
         // (indicating the use of another browser).

             var rv = -1; // Return value assumes failure.
             if (navigator.appName == 'Microsoft Internet Explorer') {
                 isIEBrowser_684630=true;
                 var ua = navigator.userAgent;
                 var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

                 if (re.exec(ua) != null)
                     rv = parseFloat( RegExp.$1 );
             }

             return rv;
         }

      //returns true if ie version is less than 9, say ie6, ie7, ie8
         // -1 for non IE browsers.
         function isIEBrowserWithVersionLessThan9_684630 () {

             browserVersion_684630 = getInternetExplorerVersion_684630();  //-1 for non IE browsers
             if((browserVersion_684630 != -1) && (browserVersion_684630 < 9)) {
                 return true;

             }
             return false;
         }

    //code to detect Edge Features, courtesy  (http://dl.dropboxusercontent.com/u/13483458/test-edge.html)
    var testEle_684630=document.createElement("div_684630");
    function isSupported_684630(a){

        var d=testEle_684630.style,e;
        for(i=0;i<a.length;i++)
            if(e=a[i],d[e]!==void 0)
                return!0;
        return!1
    }

    function supportsRGBA_684630(){

        testEle_684630.cssText="background-color:rgba(150,255,150,.5)";
        if((""+testEle_684630.style.backgroundColor).indexOf("rgba")==0)
            return!0;
        return!1
    }

    var hasTransform_684630=isSupported_684630([
        "transformProperty",
        "WebkitTransform",
        "MozTransform",
        "OTransform",
        "msTransform"
    ]),

    hasSVG_684630=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,
    hasRGBA_684630=supportsRGBA_684630(),
    hasJSON_684630=window.JSON&&window.JSON.parse&&window.JSON.stringify,
    readyToPlay=!1;

    function isIEBrowserVersion9_684630() {
        return (isIEBrowser_684630 && (browserVersion_684630 == 9)) ? true : false;
    }

    function isEdgeSupported_684630() {
        if(isIEBrowserVersion9_684630()) {
            return "y";           //hardcoding IE9 edge support.
        }
        if(hasTransform_684630) {
            if(requiresSVG_684630&&!hasSVG_684630)
                return "f";
            return "y";
        }
        return "f";
    }

    function isCanvasSupported_684630(){
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }

    function isHTML5FeaturesSupported_684630() {
         return (isCanvasSupported_684630()) ? "y" : "f";
    }

    var requiresSVG_684630=false;
    //edge detection code end

    //Edge is not supported in IE 6,7,8. Hence hardcoding edge as not supported for the same.
   // edgeSupport_684630 = (isIEBrowserWithVersionLessThan9_684630()) ? "f" : isHTMLFeaturesSupported_684630(featureArray_684630);
    edgeSupport_684630 = (isIEBrowserWithVersionLessThan9_684630()) ? "f" : isEdgeSupported_684630();
    html5Support_684630 = isHTML5FeaturesSupported_684630();

    initiateNewRequest_684630(edgeSupport_684630, html5Support_684630);
