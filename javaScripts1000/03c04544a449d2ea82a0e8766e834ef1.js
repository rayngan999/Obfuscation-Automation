!function(w, d){
    function imgSrcToElement(src, type, d) {
        var img = d.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = src;
        img.alt = '';
        return img;
    }
    function scriptSrcToElement(w, d, t, u) {
        var a = d.createElement(t);
        a.async = true;
        a.crossorigin = 'anonymous';
        a.src = u;
        var s = d.getElementsByTagName(t)[0];
        s.parentNode.insertBefore(a, s);
    }
    (function (d) {
        var pixels = JSON.parse('[["apn", "https://secure.adnxs.com/getuid?https://ids.ad.gt/api/v1/match?id=dc57834e-7b8a-4a50-bf29-7267e4ded0eb&adnxs_id=$UID"], ["ttd", "https://match.adsrvr.org/track/cmf/generic?ttd_pid=8gkxb6n&ttd_tpi=1&gpdr=0&ttd_puid=dc57834e-7b8a-4a50-bf29-7267e4ded0eb"], ["pub", "https://image2.pubmatic.com/AdServer/UCookieSetPug?rd=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fpbm_match%3Fpbm%3D%23PM_USER_ID%26id%3Ddc57834e-7b8a-4a50-bf29-7267e4ded0eb"], ["adx", "https://cm.g.doubleclick.net/pixel?google_nid=audigent_w_appnexus_3985&google_cm&google_sc&google_ula=450542624&id=dc57834e-7b8a-4a50-bf29-7267e4ded0eb"], ["halo", "https://aufp.io/api/v1/haloid"], ["goo", "https://ids.ad.gt/api/v1/g_hosted?id=dc57834e-7b8a-4a50-bf29-7267e4ded0eb"], ["son", "https://sync.go.sonobi.com/us?https://ids.ad.gt/api/v1/son_match?id=dc57834e-7b8a-4a50-bf29-7267e4ded0eb&uid=[UID]"], ["ado", "https://dpm.demdex.net/ibs:dpid=348447&dpuuid=dc57834e-7b8a-4a50-bf29-7267e4ded0eb&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fadb_match%3Fadb%3D%24%7BDD_UUID%7D%26id%3Ddc57834e-7b8a-4a50-bf29-7267e4ded0eb"], ["impr", "https://ad.360yield.com/ux?&publisher_dmp_id=15&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fimpr_match%3Fid%3Ddc57834e-7b8a-4a50-bf29-7267e4ded0eb%26impr_uid%3D%7BPUB_USER_ID%7D"]]');
        pixels.forEach(function (pixel_with_type) {
            var t = pixel_with_type[0];
            var p = pixel_with_type[1];
            if (t === 'fplus' || t === 'halo') {
                scriptSrcToElement(w, d, 'script', p);
            } else {
                var img = imgSrcToElement(p, t, d);
                d.body.appendChild(img);
            }
        })
    })(d);
    (function (w, d, t, u) {
        w.auvars = w.auvars || {};
        w.auvars['171'] = w.auvars['171'] || {};
        w.auvars['171'].t = '152a3232395aa362ca58b6546f54d0ad';
        w.auvars['171'].p = '171';
        w.auvars['171'].a = 'dc57834e-7b8a-4a50-bf29-7267e4ded0eb';
        w.auvars['171'].ty = 'passive';
        w.auvars['171'].hpx = JSON.parse('[["openx", "https://u.openx.net/w/1.0/cm?id=998eaf06-9905-4eae-9e26-9fac75960c53&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fopenx%3Fopenx_id%3D%7BOPENX_ID%7D%26id%3D{haloid}%26auid%3D{auid}"]]');
        w.auvars.t = '152a3232395aa362ca58b6546f54d0ad';
        w.auvars.p = '171';
        w.auvars.a = 'dc57834e-7b8a-4a50-bf29-7267e4ded0eb';
        w.auvars.ty = 'passive';
        if (!w.au || Array.isArray(w.au)) {
            var a = d.createElement(t);
            a.defer = true;
            a.src = u;
            var s = d.getElementsByTagName(t)[0];
            s.parentNode.insertBefore(a, s);
        } else {
            w.au.init();
            w.au.push({ category: 'docReady' });
        }
    })(w, d, 'script', 'https://p.ad.gt/api/v1/p/171');
}(window, document);