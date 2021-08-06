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
        var pixels = JSON.parse('[["apn", "https://secure.adnxs.com/getuid?https://ids.ad.gt/api/v1/match?id=25a7e10a-7012-47f8-9be6-05588d6dd8c6&adnxs_id=$UID"], ["ttd", "https://match.adsrvr.org/track/cmf/generic?ttd_pid=8gkxb6n&ttd_tpi=1&gpdr=0&ttd_puid=25a7e10a-7012-47f8-9be6-05588d6dd8c6"], ["pub", "https://image2.pubmatic.com/AdServer/UCookieSetPug?rd=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fpbm_match%3Fpbm%3D%23PM_USER_ID%26id%3D25a7e10a-7012-47f8-9be6-05588d6dd8c6"], ["adx", "https://cm.g.doubleclick.net/pixel?google_nid=audigent_w_appnexus_3985&google_cm&google_sc&google_ula=450542624&id=25a7e10a-7012-47f8-9be6-05588d6dd8c6"], ["halo", "https://aufp.io/api/v1/haloid"], ["goo", "https://ids.ad.gt/api/v1/g_hosted?id=25a7e10a-7012-47f8-9be6-05588d6dd8c6"], ["smart", "https://sync.smartadserver.com/getuid?url=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fsmart_match%3Fid%3D25a7e10a-7012-47f8-9be6-05588d6dd8c6%26sas_uid%3D%5bsas_uid%5d"], ["bees", "https://match.prod.bidr.io/cookie-sync/audigent?buyer_user_id=25a7e10a-7012-47f8-9be6-05588d6dd8c6"], ["mediamath", "https://sync.mathtag.com/sync/img?redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fmediamath_match%3Fuser_id%3D%5BMM_UUID%5D%26id%3D25a7e10a-7012-47f8-9be6-05588d6dd8c6"]]');
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
        w.auvars['168'] = w.auvars['168'] || {};
        w.auvars['168'].t = 'ae58b4e50f3daff328b68ca40ee854e4';
        w.auvars['168'].p = '168';
        w.auvars['168'].a = '25a7e10a-7012-47f8-9be6-05588d6dd8c6';
        w.auvars['168'].ty = 'passive';
        w.auvars['168'].hpx = JSON.parse('[["openx", "https://u.openx.net/w/1.0/cm?id=998eaf06-9905-4eae-9e26-9fac75960c53&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fopenx%3Fopenx_id%3D%7BOPENX_ID%7D%26id%3D{haloid}%26auid%3D{auid}"]]');
        w.auvars.t = 'ae58b4e50f3daff328b68ca40ee854e4';
        w.auvars.p = '168';
        w.auvars.a = '25a7e10a-7012-47f8-9be6-05588d6dd8c6';
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
    })(w, d, 'script', 'https://p.ad.gt/api/v1/p/168');
}(window, document);