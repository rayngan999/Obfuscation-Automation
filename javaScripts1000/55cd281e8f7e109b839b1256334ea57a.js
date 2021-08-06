<!DOCTYPE html>
<html>
<head>
  <title>Hyatt Hotels</title>
</head>
<body>

<script>
  /* v2020-10-02 - Turn on Search and Shopping Cart */
  (function () {
    // Added to stop test conversions 2021-05-20
    if (!encodeURI(document.referrer).match( /\.hyattstg\.|\.hyattuat1\./)){
      var sjrn     = {};
      sjrn.cid     = '';
      var sjrnId   = '';
      var sjrnStr  = '';
   
      var sjrnStr  = window.location.search.slice(1);
      var hParams = sjrnStr.split(/\&/);
  
      for (var tag in hParams) {
        b = hParams[tag].split('=')[1];
        b = b.replace(/\%0A/g,'');
        sjrn[hParams[tag].split('=')[0]] = decodeURIComponent(b);
      }
      
      if (typeof(sjrn.p) !== "undefined" && sjrn.p > '') {
        sjrn.hpid    = typeof sjrn.hprid !== 'undefined' ? sjrn.hprid : 'none';
        sjrn.hd1     = typeof sjrn.hd1 !== 'undefined' ? sjrn.hd1 : '';
        sjrn.hd2     = typeof sjrn.hd2 !== 'undefined' ? sjrn.hd2 : '';
        sjrn.hc1     = typeof sjrn.hc1 !== 'undefined' ? sjrn.hc1 : '';
        sjrn.hconfno = typeof sjrn.hconfno !== 'undefined' ? sjrn.hconfno : '';
        sjrn.hp      = typeof sjrn.hp  !== 'undefined' ? sjrn.hp : '';
        sjrn.ha1     = '';
        sjrn.hcu     = "USD"; /* currency always USD */
  
        sjrn.hpid = sjrn.hpid.toLowerCase();
        var p = sjrn.p.toUpperCase();
        sjrn.pgid = p;
        sjrn.pc   = p;
        sjrn.cid  = sjrn.hd1+'|'+sjrn.hd2+'|'+sjrn.hpid+'|'+sjrn.hc1+'|'+sjrn.hdc+'|'+sjrn.hrp+'|'+sjrn.pc+'|'+encodeURI(document.referrer);
  
        sjrn.hdc     = typeof sjrn.hrp !== 'undefined' ? sjrn.hrp : '';   /* switching hrp to hdc (but send in debug line above before changing) */
  
        var fireSjrnCP = true;
        if (p === 'SEARCH_RESULTS' || p === 'ROOMS_AND_RATES') { 
          sjrn.et = 'hs';
          sjrn.pt = "SEARCH";
          //fireSjrnCP = false; -- turned back on 2020-10-02
  
        } else if (p === 'PURCHASE_CONFIRMATION' || p === 'CONFIRMATION') { 
          sjrn.et  = 'hc';
          sjrn.pt  = 'CONVERSION';
  
        } else if(p === 'GUEST_INFO') {
          sjrn.et = 'hcart';
          sjrn.pt = 'SHOPPING_CART';
          //fireSjrnCP = false; -- turned back on 2020-10-02
          
        } else if ((p.search('HOME') > -1 || p.search('GP') > -1) && (sjrn.ffl == 'Gold' || sjrn.ffl == 'Member')) {
          sjrnId = '6926';
        } else if ((p.search('HOME') > -1 || p.search('GP') > -1) && (sjrn.ffl == 'Platinum' || sjrn.ffl == 'Discoverist')) {
          sjrnId = '11347';
        } else if ((p.search('HOME') > -1 || p.search('GP') > -1) && (sjrn.ffl == 'Diamond' || sjrn.ffl == 'Explorist')) {
          sjrnId = '11348';
        } else if ((p.search('HOME') > -1 || p.search('GP') > -1) && sjrn.ffl == 'Globalist') {
          sjrnId = '51358';
        } else {
          sjrn.et = 'hp';
          sjrn.pt = 'HOME_PAGE';
        }
  
      }
  
      if (sjrnId > '') { /* Removed Default case condition */
        sjrnStr  = '';      
        sjrn.cid = sjrn.cid.replace(/\|+$/,'');
        
        for (var tag in sjrn) {
          if (sjrn[tag] > '') {
            sjrnStr += tag + '=' + encodeURIComponent(sjrn[tag]) + '&';
          }
        }
  
        sjrnStr = sjrnStr.replace(/\&$/,'');
  
        var pl = document.createElement('script');
        pl.type = 'text/javascript';
        pl.async = true;
        pl.src = 'https://beacon.sojern.com/pixel/p/'+sjrnId+'?'+sjrnStr;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
      }
      /* Sojern Master Pixel Tag cp_v1_js, Pixel Version: 1 */
      console.log("Fire CP? " + fireSjrnCP + " pt=" + sjrn.pt);
      if (fireSjrnCP) {
        var params = sjrn;
        var paramsArr = [];
        for(key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };
  	
        var pl = document.createElement('script');
        pl.type = 'text/javascript';
        pl.async = true;
        pl.src = "https://beacon.sojern.com/pixel/cp/7?f_v=cp_v1_js&p_v=1&" + paramsArr.join('&');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
      }
    }
  })();
</script>

</body>
</html>