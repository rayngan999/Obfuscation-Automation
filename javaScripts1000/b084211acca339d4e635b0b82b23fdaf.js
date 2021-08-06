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
        var pixels = JSON.parse('[["dnts", "https://pp.d2-apps.net/v1/redirect?p_id=bandsintown&p_uid=72d775af-3176-4065-880d-e7e9f4df6adf&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fdnts_match%3Fid%3D72d775af-3176-4065-880d-e7e9f4df6adf%26dnts_uid%3D%24%7BD_UID%7D"], ["ado", "https://dpm.demdex.net/ibs:dpid=348447&dpuuid=72d775af-3176-4065-880d-e7e9f4df6adf&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fadb_match%3Fadb%3D%24%7BDD_UUID%7D%26id%3D72d775af-3176-4065-880d-e7e9f4df6adf"], ["ppnt", "https://bh.contextweb.com/bh/rtset?pid=562316&ev=1&rurl=https://ids.ad.gt/api/v1/ppnt_match?uid=%%VGUID%%&id=72d775af-3176-4065-880d-e7e9f4df6adf"], ["mediamath", "https://sync.mathtag.com/sync/img?redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fmediamath_match%3Fuser_id%3D%5BMM_UUID%5D%26id%3D72d775af-3176-4065-880d-e7e9f4df6adf"], ["rub", "https://ids.ad.gt/api/v1/rub?id=72d775af-3176-4065-880d-e7e9f4df6adf"], ["son", "https://sync.go.sonobi.com/us?https://ids.ad.gt/api/v1/son_match?id=72d775af-3176-4065-880d-e7e9f4df6adf&uid=[UID]"], ["taboola", "https://trc.taboola.com/sg/audigent/1/cm?redirect=http%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Ftaboola%3Fpartner_uid%3D%3CTUID%3E%3Fid%3D72d775af-3176-4065-880d-e7e9f4df6adf"]]');
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
        w.auvars['95'] = w.auvars['95'] || {};
        w.auvars['95'].t = '2b583e050d7322580f26db6c15e46dc9';
        w.auvars['95'].p = '95';
        w.auvars['95'].a = '72d775af-3176-4065-880d-e7e9f4df6adf';
        w.auvars['95'].ty = 'passive';
        w.auvars['95'].hpx = JSON.parse('[["openx", "https://u.openx.net/w/1.0/cm?id=998eaf06-9905-4eae-9e26-9fac75960c53&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fopenx%3Fopenx_id%3D%7BOPENX_ID%7D%26id%3D{haloid}%26auid%3D{auid}"]]');
        w.auvars.t = '2b583e050d7322580f26db6c15e46dc9';
        w.auvars.p = '95';
        w.auvars.a = '72d775af-3176-4065-880d-e7e9f4df6adf';
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
    })(w, d, 'script', 'https://p.ad.gt/api/v1/p/95');
}(window, document);