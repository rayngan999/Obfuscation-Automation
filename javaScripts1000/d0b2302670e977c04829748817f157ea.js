	$53.data('u_stat_id','');
	(function(window,undefined){
		if($53.data('api_uuid') == ""){
			$53.data('api_uuid','6655b9b77b2b9ffb624af90ad85f385a');
       		$53.setUuid('6655b9b77b2b9ffb624af90ad85f385a');
		}
        $53.setHost('www5.53kf.com');
        $53.setSign('e2321f47fe82a615f92ecc34aec20913');
        var _kfApi = $53.createApi();
    	function KfStat(){
            this.data = {
                stat_id:'',
                product_key:''
            };
            this.put = function(key,value){
                    var _this = this;
                    if((key !== 'stat_id' && key !== 'product_key') || value == '' || value == null){
                        return false;
                    }
                    _this.data[key] = value;
                    if(key == 'stat_id'){
                        _kfApi.push('cmd','jzl');
                        _kfApi.push('stat_id',value);
                        _kfApi.query();
//                        var data = [["jzl_stat_id_72000079",value,-1]];
//                        $53.setKfCookie(data);
                    }
                };
        }
        var _53stat = new KfStat();
        window._kfApi = _kfApi;
        window._53stat = _53stat;
})(window);		(function(window,undefined){
			if(typeof _kfApi == 'undefined') var _kfApi = $53.createApi();
            window.hz6d_KfStat = function(id,stat_id){
        		if((typeof id == "undefined") || id == "" || (typeof stat_id == "undefined") || stat_id == "") return false;
        		_kfApi.push('cmd','stat');
                _kfApi.push('id',id);
                _kfApi.push('stat_id',stat_id);
                _kfApi.query();
            }
	    })(window);	$53.data('tpl','crystal_blue');
        $53.setWorkers([{"worker_id":"0139","worker_card":"0139\u53f7\u5ba2\u670d\u4e13\u5458","state":0},{"worker_id":"0000","worker_card":"","state":0},{"worker_id":"0020","worker_card":"0020\u53f7\u5ba2\u670d\u4e13\u5458","state":0},{"worker_id":"0302","worker_card":"0302\u53f7\u5ba2\u670d\u4e13\u5458","state":0},{"worker_id":"0069","worker_card":"\u4e13\u4e1a\u987e\u95ee\u4e00","state":0},{"worker_id":"0381","worker_card":"\u4e13\u4e1a\u987e\u95ee\u4e8c","state":0},{"worker_id":"8808","worker_card":"8808\u53f7\u5ba2\u670d\u4e13\u5458","state":0},{"worker_id":"0611","worker_card":"\u80e1\u6587\u8bed","state":1},{"worker_id":"0619","worker_card":"\u738b\u5b81\u5b81","state":0},{"worker_id":"0627","worker_card":"0627\u53f7\u5ba2\u670d","state":0},{"worker_id":"0678","worker_card":"\u8bb8\u680b\u680b","state":0},{"worker_id":"0091","worker_card":"\u5de5\u7a0b\u5e08","state":0},{"worker_id":"0910","worker_card":"0910\u53f7\u5ba2\u670d\u4e13\u5458","state":0},{"worker_id":"0001","worker_card":"53KF","state":0},{"worker_id":"0975","worker_card":"0975\u53f7\u6280\u672f\u652f\u6301","state":0},{"worker_id":"1011","worker_card":"1011\u53f7\u5ba2\u670d\u4e13\u5458","state":0},{"worker_id":"1015","worker_card":"","state":0},{"worker_id":"1017","worker_card":"1017\u53f7\u5ba2\u670d\u4e13\u5458","state":0}]);
        $53.setGroups([{"group_id":"19745305","group_name":"WiseCRM"},{"group_id":"38623605","group_name":"\u5feb\u5ba2\u670dBU"},{"group_id":"38623705","group_name":"\u6280\u672f\u652f\u6301"},{"group_id":"38627005","group_name":"\u4e91\u5ba2\u670d\u9500\u552eBU\u5ba2\u670d"}]);
        $53.setOnline('0');
    

	// record once visit uuid
	if($53.getCookie('53uvid') != 1) {
		$53.setCookie('53uvid',1);
		$53.data('page_type',1);
	} else {
		$53.data('page_type',2);
	}
	//$53.data('visit_uuid','');
//	$53.data('in_time','');
	$53.data('company_id','72000079');
	$53.data('visit_num',$53.getCookie('53uvid'));

	var hz6d_referer = '&referer=' + $53.EN(window.location.href); //å½åè®¿é®é¡µé¢ 
	var kf_success=1, kftype=2,
	powered_by_53kf_url = 'http://www.53kf.com',
	powered_by_53kf_txt = 'Powered by 53KF';
    
    
	var onliner_zdfq = $53.getCookie("onliner_zdfq72000079"); // onliner_zdfq: 0.åå§å¼ 2.ç¹å»æ¥å 3.ç¹å»æç» 
	if (onliner_zdfq == "")
	{
		onliner_zdfq = 0;
		document.cookie = "onliner_zdfq72000079=" + onliner_zdfq;
	}
	var hz6d_kf_type = 2;
	var hz6d_pos_model = 1;
	var hz6d_hidden = "1";
	var hz6d_close_icon = 0;
	var hz6d_icon_type = 0;
	
	function AccCallBack(){}
	// å è½½ivt.phpï¼å³ä¸­é´çæ¥åéè¯·å± 
	if (!$53("ivt_script") && !0){
		$53.createScript('ivt_script', 'https://www5.53kf.com/kf_ivt_new.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&isonline=0&kfonline=0&lang=zh-cn&resize=yes&charset=GBK&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&callback_id6ds=10003965,10343689,10689271,10777731&guest_id=10805073684010'+ hz6d_referer + hz6d_from_page_new + '&tpl_name=crystal_blue&tpl_width=800&tpl_height=600&uid=6655b9b77b2b9ffb624af90ad85f385a&is_group=&' + Math.random() + "&talktitle=" + encodeURIComponent(document.title));
	}              var openurl = 'https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&guest_id=10805073684010&language=zh-cn&charset=GBK&referer={hz6d_referer}{hz6d_keyword}&tpl=crystal_blue&uid=6655b9b77b2b9ffb624af90ad85f385a&is_group='.replace('&referer={hz6d_referer}',hz6d_referer).replace(/{hz6d_keyword}/gim,hz6d_from_page_new);
        $53.setUrl(openurl);
        if (0 == "1") {
        	$53.setUrl("?arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&callback_id6ds=10003965,10343689,10689271,10777731&language=zh-cn&charset=GBK&referer={hz6d_referer}{hz6d_keyword}&tpl=crystal_blue");
        }