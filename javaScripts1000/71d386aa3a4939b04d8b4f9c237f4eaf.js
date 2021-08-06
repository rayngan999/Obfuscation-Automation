<html>
<body>

<script type="text/javascript">
    var gdpr = null;
    var gdprStr = "";
    var path = location.href.split("?");
    if (path.length == 2) {
        var args = path[1].split("&");
        for (i=0; i<args.length; i++) {
            var keyval = args[i].split("=");
            if (keyval.length == 2) {
                if (keyval[0] == "gdpr") {
                    gdpr = keyval[1];
                } else if ( keyval[0] == "gdprstr") {
                    gdprStr = keyval[1];
                }
            }
        }
    }
    var userIdEncCookie = getCookie("UTID_ENC");
    var userIdCookie = getCookie("UTID");
    var partners = [];

    if (gdpr === null || gdpr == 0) {
        partners.push(
            {
                name: "AppNexus",
                url: "https://ib.adnxs.com/getuidnb?https://usr.undertone.com/userPixel/sync?partner=appnexus&uid=$UID"
            },
            {
                name: "OpenX",
                url: "https://us-u.openx.net/w/1.0/cm?id=fba3d144-1026-4d31-a758-943b9545e305&r=https://usr.undertone.com/userPixel/sync?partnerId=39&uid="
            },
            {
                name: "Verizon",
                url: "https://pixel.advertising.com/ups/58293/sync?&gdpr=&gdpr_consent=&redir=true"
            },
            {
                name: "TTD",
                url: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=sirnsvg&ttd_tpi=1&gdpr=0&gdpr_consent="
            },
            {
                name: "Rubicon",
                url: "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=12776",
                type: "iframe"
            },
            {
                name: "Rubicon2",
                url: "https://pixel.rubiconproject.com/exchange/sync.php?p=12776"
            },
            {
                name: "Acuityads",
                url: "https://cs.admanmedia.com/sync/undertone?url=https%3A%2F%2Fusr.undertone.com%2FuserPixel%2Fsync%3Fpartner%3Dacuityads%26uid%3D%24UID"
            },
            {
                name: "Pubmatic",
                url: "https://image8.pubmatic.com/AdServer/ImgSync?p=160318&gdpr=&gdpr_consent=&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3Fp%3D160318%26pmc%3DPM_PMC%26pr%3Dhttps%253A%252F%252Fusr.undertone.com%252FuserPixel%252Fsync%253FpartnerId%253D53%2526uid%253D%2523PMUID"
            }
        );
    } else {
        // this syncs with openx but with an extra redirect that checks the gdpr consent string first
        partners.push(
            {
                name: "OpenX",
                url: "https://usr.undertone.com/userPixel/syncOne?id=1&of=2&gdpr=" + gdpr + "&gdprstr=" + gdprStr
            }
        );
        partners.push(
            {
                name: "Verizon",
                url: "https://pixel.advertising.com/ups/58293/sync?&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr + "&redir=true"
            }
        );
        partners.push(
            {
                name: "TTD",
                url: "https://match.adsrvr.org/track/cmf/generic?ttd_pid=sirnsvg&ttd_tpi=1&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr
            }
        );
        partners.push(
            {
                name: "Rubicon",
                url: "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=12776&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr,
                type: "iframe"
            }
        );
        partners.push(
            {
                name: "Rubicon2",
                url: "https://pixel.rubiconproject.com/exchange/sync.php?p=12776&gdpr=" + gdpr + "&gdpr_consent=" + gdprStr
            }
        );
        partners.push(
            {
                name: "Acuityads",
                url: "https://cs.admanmedia.com/sync/undertone?gdpr=" + gdpr + "&gdpr_consent=" + gdprStr + '&url=https%3A%2F%2Fusr.undertone.com%2FuserPixel%2Fsync%3Fpartner%3Dacuityads%26uid%3D%24UID'
            }
        );
        partners.push({
            name: "Pubmatic",
            url: "https://image8.pubmatic.com/AdServer/ImgSync?p=160318&gdpr=" + gdpr + " + &gdpr_consent=" + gdprStr + "&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3Fp%3D160318%26pmc%3DPM_PMC%26pr%3Dhttps%253A%252F%252Fusr.undertone.com%252FuserPixel%252Fsync%253FpartnerId%253D53%2526uid%253D%2523PMUID"
        });
    }
    if (userIdCookie !== "" && userIdCookie != null && userIdCookie !== "0") {
        partners.push(
            {
                name: "Crosswise",
                url: "https://cw.addthis.com/t.gif?pid=46&pdid=" + userIdCookie
            }
        );
    }
    if (userIdEncCookie !== "" && userIdEncCookie != null && userIdEncCookie !== "0") {
        partners.push(
            {
                name: "Adobe",
                url: "https://dpm.demdex.net/ibs:dpid=152416&dpuuid=" + userIdEncCookie,
                partnerID: 32
            },
            {
                name: "BlueKai",
                url: "https://tags.bluekai.com/site/15597?id=" + userIdEncCookie,
                partnerID: 1
            },
            {
                name: "LiveRamp",
                url: "https://idsync.rlcdn.com/403716.gif?partner_uid=" + userIdEncCookie,
                partnerID: 31
            },
            {
                name: "Krux",
                url: "https://beacon.krxd.net/usermatch.gif?partner=undertone&partner_uid=" + userIdEncCookie,
                partnerID: 30
            }
        );
        
        var syncExcelate = (Math.floor(Math.random() * 10) > 8);
        if (syncExcelate) {
            partners.push(
            {
                name: "Exelate (Batch Integration)",
                url: "https://loadm.exelator.com/load/?p=204&g=1145&j=0&utid=" + userIdEncCookie,
                partnerID: 4
            });
        }
    }

    var ut_dps=[];
    function initUtdps() {
        for(var i=0,ck=document.cookie.split(';');i<ck.length;i++) {
            try {
                var c=ck[i].split('=',2);
                if(c[0].replace(/^\s+|\s+$/g,'')=='UTDP') {
                    ut_dps=unescape(c[1]).split(',');
                    break;
                }
            } catch(err) {}
        }
    }
    initUtdps();

    function getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : "";
    }
    function plantPixels() {
        var imgs = getAllImgs();
        for (var i = 0; i < imgs.length; i++) {
            document.body.insertAdjacentElement('afterbegin', imgs[i]);
        }
    }
    function getAllImgs() {
        var imgs = [];
        for (var i = 0; i < partners.length; i++) {
            if(partners[i].partnerID == null || ut_dps.indexOf(partners[i].partnerID.toString()) == -1){
                var img;
                if (partners[i].type && partners[i].type === 'iframe') {
                    img = document.createElement('iframe');
                } else {
                    img = document.createElement("img");
                }
                img.setAttribute("src", partners[i].url);
                img.setAttribute("name", partners[i].name);
                img.setAttribute("alt", "");
                img.setAttribute("style", "display:none");
                img.setAttribute("border", "0");
                img.setAttribute("height", "1");
                img.setAttribute("width", "1");
                imgs.push(img);

                if (partners[i].partnerID != null) {
                    ut_dps.push(partners[i].partnerID);
                }
            }
        }
        return imgs;
    }

    var ua = navigator.userAgent.toLowerCase();
    var isSafari = ua.indexOf("safari") > -1 && ua.indexOf("chrome") == -1 && ua.indexOf("android") == -1;
    var isFacebookApp = ua.indexOf("fban") > -1 || ua.indexOf("fbav") > -1;
    var isIos = ua.indexOf("ipad") > -1 || ua.indexOf("iphone") > -1;

    var isCookiable = !isSafari && !(isFacebookApp && isIos);

    if (isCookiable) {
        plantPixels();

        var d=new Date();
        d.setDate(d.getDate()+1);
        if (gdpr === null || gdpr == 0) {
            document.cookie='UTDP='+escape(ut_dps.join(','))+'; expires='+d.toUTCString();
        }

    }
</script>

</body>
</html>
