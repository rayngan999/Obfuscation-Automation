<html><body>

<script>var urlHarvest = true;</script>
<img src="https://dpm.demdex.net/ibs:dpid=3047&dpuuid=99999999999999&" /><script>
//Pixel Manager | Export Date: Dec. 14, 2020 @ 2:11pm UTC
var ft_hSeg = {
    ref_url:document.referrer,
    ref_protocol:'',
    ref_domain:'',
    ref_path:'',
    ref_queryStr:'',
    spot_gID:'12700',
    seg_set_QStr:false,
    seg_uri:'',
    seg_dom:'',
    ad_domains:['servedby.flashtalking.com','servedby.flashtalking.com'],
    parseUri:function(str){
            var o = this,
              splitObj = /^(http[s]?):\/\/?([^\/\s]+)\/([\w\.]+[^#?;\s]+)(.*)?/.exec(str);
              if(splitObj===null) return false;
            var retObj = {
                  protocol:splitObj[1],
                  domain:splitObj[2],
                  path:splitObj[3],
                  queryString:splitObj[4]
                  }
            return retObj;
        },
    set_seg:function(run){
                            if(run == false) { return false };
                var split_obj = this.parseUri(this.check_ref(this.ref_url)),
                  seg_path = '/segment/2/read/a;;pixel/?s='+this.spot_gID+'&d=';
                if(split_obj===false) return false;
                this.ref_protocol = 'https';
                this.ref_domain = split_obj.domain;
                this.ref_queryStr = split_obj.queryString;
                this.ref_path = split_obj.path.replace(new RegExp(decodeURIComponent('%5E/%7C/%24/g')), '');
                this.seg_dom = this.ad_domains[(this.ref_protocol == 'http')? 0 : 1];
                this.seg_uri = this.ref_protocol+'://'+this.seg_dom+seg_path+this.ref_domain+'&r='+this.ref_path+(this.seg_set_QStr?'&q='+decodeURIComponent(this.ref_queryStr):'');
                new Image().src=this.seg_uri;
                return true;
            },
    check_ref:function(url){
            var st=window.location.search.indexOf('ft_referrer=')+12,
                en=(window.location.search.substring(st)).indexOf('&ns=');
                if(en === -1) en = 9e9;
                cont_ref = decodeURIComponent(window.location.search.substring(st,en+st));
            if (url === ''|| this.ref_url !== cont_ref){
                return  cont_ref;
            }else{
                return this.ref_url;
            }
    }
  };
  ft_hSeg.set_seg(urlHarvest);
</script></body></html>