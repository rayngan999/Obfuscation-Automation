	// var hz6d_guest_id = $53.getCookie('53gid2');

	var hz6d_cus_web_msg_gids = "";

	function hz6d_cus_web_msg_open(){
		var openurl = "https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010";
		try{
			window.open(openurl,"_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
		}catch(e){}
	}

//	hz6d_get_guest_id_timer = setTimeout("hz6d_get_guest_id()", 500);

	var create_flp_jquery_timer = window.setInterval(function(){
		if (!document.getElementById('hz6d_flp_jquery')) {
			$53.creElm({
				id: 'hz6d_flp_jquery',
				src: 'https://www5.53kf.com/minkh/js/jquery-1.4.2.flp.js?20121127002',
				charset: "utf-8",
				type: 'text/javascript'
			},'script', document.body, 1);
			clearInterval(create_flp_jquery_timer);
		}
	},500);	var new_fk_count=0; //è®¿å®¢æ¶æ¯æ¡æ°
	var is_close = 0;//å¯¹è¯æ¯å¦ç»æ
	var firefox_onOff = 0;
	var HZ6D_CONFIGSNEW = {
		'com_id': "72000079",
		'flashingInterval' : {},
		'newMsgInterval' : 0
	};

	//åä»£åè·¨åæ¹å¼
	try{
		window.addEventListener("message",function(event){
			if (typeof(event.data) != 'string') return;
			if(event.data.indexOf('53kf_new_msg') != -1){
				hz6d_flashing();
				hz6d_showIvt4("msg");
			}
			if(event.data.indexOf('53kf_new_colse') != -1){
				is_close = 1;
			}
			if(event.data.indexOf('53kf_min_window') != -1){
				is_close = 1;
				firefox_onOff = 1;
				hide_floatWindow();
			}
			if (event.data.indexOf('53kf_show_window') != -1) {
				show_floatWindow();
			}
			if (event.data == "get_force"){
				var open_mini_windown = $53("iframe_company_mini").getAttribute("open_mini_windown");
				if (open_mini_windown == '1' && "jh" == 'www111'){//åæ¿ééæ± å¤ç
					$53.createScript("hz6d_send_lnk_debug0", hz6d_alias_host+"/wnn_debug.php?cmd=senlnk0&hz6d_guest_ip="+hz6d_guest_ip+"&hz6d_guest_id="+hz6d_guest_id+"&force_kf="+last_invite_kf);
					if (last_invite_kf != '') {
						var lnk_msg = 'sendLNK{#53#}'+last_invite_kf;
						try{
							$53.createScript("hz6d_send_lnk_debug1", hz6d_alias_host+"/wnn_debug.php?cmd=senlnk1&hz6d_guest_ip="+hz6d_guest_ip+"&hz6d_guest_id="+hz6d_guest_id);
							document.getElementById('iframe_company_mini').contentWindow.postMessage(lnk_msg,"https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010");
						}catch(e){}
				}
					return;
				}
			}
		});
	}catch(e){
		window.attachEvent("onmessage",function(event){
			if (typeof(event.data) != 'string') return;
			if(event.data.indexOf('53kf_new_msg') != -1){
				hz6d_flashing();
				hz6d_showIvt4("msg");
			}
			if(event.data.indexOf('53kf_new_colse') != -1){
				is_close = 1;
			}
			if(event.data.indexOf('53kf_min_window') != -1){
				is_close = 1;
				firefox_onOff = 1;
				hide_floatWindow();
			}
			if (event.data.indexOf('53kf_show_window') != -1) {
				show_floatWindow();
			}
			if (event.data == "get_force"){
				var open_mini_windown = $53("iframe_company_mini").getAttribute("open_mini_windown");
				if (open_mini_windown == '1' && "jh" == 'www111'){//åæ¿ééæ± å¤ç
					$53.createScript("hz6d_send_lnk_debug0", hz6d_alias_host+"/wnn_debug.php?cmd=senlnk0&hz6d_guest_ip="+hz6d_guest_ip+"&hz6d_guest_id="+hz6d_guest_id+"&force_kf="+last_invite_kf);
					if (last_invite_kf != '') {
						var lnk_msg = 'sendLNK{#53#}'+last_invite_kf;
						try{
							$53.createScript("hz6d_send_lnk_debug1", hz6d_alias_host+"/wnn_debug.php?cmd=senlnk1&hz6d_guest_ip="+hz6d_guest_ip+"&hz6d_guest_id="+hz6d_guest_id);
							document.getElementById('iframe_company_mini').contentWindow.postMessage(lnk_msg,"https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010");
						}catch(e){}
					}
					return;
				}
			}
		});
	}

	function hz6d_flashing() {
		if (1 == 1 || 1 > 20) {
			if (document.getElementById('mini-btn').style.display=='block') {
				if (1 == 1) {//å¼ºå¶å±å¼æ¯å¦å¼å¯
					show_floatWindow('qzzk');
				}else{
					var info_num = document.getElementById("info-num");
					if(info_num.innerHTML =='0'){
						info_num.style.display = "block";
					};
					info_num.innerHTML = parseInt(info_num.innerHTML)+1;
				}
			}
		}else{
			if(parseInt(flp("#div_company_mini").css("height")) <= 36) {//å¯¹è¯æ¡ç¼©å°æ¶
				if(1 == 1) {//å¼ºå¶å±å¼æ¯å¦å¼å¯
					max_min_company_mini(document.getElementById("hz6d_cname_mini_div").nextSibling);
				}else{
					if(!HZ6D_CONFIGSNEW.newMsgInterval) {
						flp('#hz6d_cname_mini_div').html("æ¨ææ°æ¶æ¯");
						HZ6D_CONFIGSNEW.newMsgInterval = setInterval("flp('#hz6d_cname_mini_div').fadeOut(150).fadeIn(150)",400);
					}
				}
			}
		}
	}

	function hz6d_re_flashing(cid) {
		clearInterval(HZ6D_CONFIGSNEW.newMsgInterval);
		HZ6D_CONFIGSNEW.newMsgInterval = 0;
		if(1 == 17)
			flp('#hz6d_cname_mini_div').html("Anything Stusio");
		else
			flp('#hz6d_cname_mini_div').html(hz6d_cname);
	}		// åéacc
		var hz6d_filter_time = "";
		var is_right="r";
		var is_top="b";

		var height_new = 0;
		// éè¯·æ¡å¤ç
		var acc_pop_page		 = "0";
		var acc_pop_pagenum	= 1;
		var acc_pop_total		= "0";
		var acc_pop_totalnum = 100;

		var nowpage					= window.location.href;
		nowpage = nowpage.replace('http://','').replace('https://','');
		nowpage = nowpage.split('?');
		nowpage = nowpage[0].replace(/\./g,'_').replace(/\//g,'_');

		var acc_lr					= "1";
		var acc_tb					= "1";
		var acc_middle				= "0";
		var how_float				= "0";
		var acc_left				= 280;
		var acc_top					= 230;
		var acc_autotype			= "0"; // ç¹å»æ¥åææç»ä¸åå¼¹åº
		var ivt_autotype			= "0";
		var zdyivt					= "0";
		var ivtstr					= "<div id=\"acc_title\" style=\"cursor:pointer;height:23px;width:100%;position:relative; line-height:23px\">  <div style=\"float:left;width:8px; background:url(https://www5.53kf.com/img/new06/fu-t-l.gif) no-repeat; height:23px;\"></div>  <div style=\"float:left;width:384px;height:23px; background:url(https://www5.53kf.com/img/new06/fu-t-c.gif) repeat-x ;line-height:23px;color:#ffffff;text-align:left;\">53KF&#36992;&#35831;</div>  <div style=\"float:left;width:8px; background:url(https://www5.53kf.com/img/new06/fu-t-r.gif) no-repeat; height:23px;\"></div></div><div style=\"clear:both;width:400px;background:url(https://www5.53kf.com/img/ivt/53kf01bg.gif);height:auto; overflow:hidden;\">  <div style=\"float:left;height:100%;width:100px;background: url(https://www5.53kf.com/img/ivt/53kf01bg.gif) left;   text-align:center;\"><img style=\"DISPLAY: inline;margin-top:10px;cursor:pointer;\" src=\"https://www5.53kf.com/img/kflogo/ivt_cn.gif\"/></div>  <div style=\"float:right;height:auto;*height:auto;*height:auto !important;width:300px;*width:298px;* width:295px !important; background:url(https://www5.53kf.com/img/ivt/53kf01bg.gif) right; text-align:left;\">    <div style=\"clear:both;width:95%;padding-top:10px; text-align:left;line-height:17px;font-family:tahoma;font-size:12px;color:#000000; height:auto; overflow:hidden;\">		&#27426;&#36814;&#24744;&#65281; <br /><span id=\"hz6d_acc_content\">acc_content</span></div>    <div style=\"clear:both;width:95%;margin-top:5px;text-align:right;\"><button id=\"hz6d_53kf_invite_acc\" onclick=\';onliner_zdfq=2;window.open(\"talk_openurl\",\"_blank\",\"height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no\");hidden_ivt();\' style=\"DISPLAY: inline; cursor:pointer;height:24px;width:76px;border:0px;background:none;\"><img style=\"DISPLAY: inline;\" src=\"https://www5.53kf.com/img/new06/fu-button1_cn.gif\" /></button>&nbsp;&nbsp;<button onclick=\';onliner_zdfq=3;hidden_ivt();\' style=\"DISPLAY: inline;cursor:pointer;height:24px;width:76px;border:0px;background:none;\"><img style=\"DISPLAY: inline;\" src=\"https://www5.53kf.com/img/new06/fu-button2_cn.gif\" id=\"hz6d_53kf_invite_hid\" /></button></div></div></div><div style=\"height:8px;width:100%;clear:both; line-height:8px; float:left;\">  <div style=\"height:8px;width:8px;float:left; background:url(https://www5.53kf.com/img/new06/fu-b-l.gif) no-repeat;line-height:8px;\"></div>    <div style=\"height:8px;width:384px;float:left; background:url(https://www5.53kf.com/img/new06/fu-b-c.gif) repeat-x;line-height:8px;\"></div>    <div style=\"height:8px;width:8px;float:right; background:url(https://www5.53kf.com/img/new06/fu-b-r.gif) no-repeat;line-height:8px;\"></div></div>";
		var is_autoyqk				= "0";
		var once_autoyqk			= 0;//éè¯·è¯­å¼å³
		var zdyivt_width			= "0px";
		var zdyivt_height			= "0px";
		var acc_reinvite			= "1";
		var acc_reauto				= "0";
		var acc_reauto_time			= 60000;
		var acc_poptime				= 5000;
	//	var acc_poptype				= -1;
		var acc_zdfq				= "yes";
		var acc_freeze				= "off";
		var acc_chattype			= 3;
		var acc_pop_type			= 1;
		var miniToOpenTime			= "0";
		var miniToOpenTimer			= 0;

		var ivt_zdfq				= "no";
		var ivt_poptime				= 10000;//éè¯·æ¡å»¶è¿å¼¹åº
		var ivt_reauto				= "1";
		var ivt_reauto_time			= 60000;
		var ivt_pop_page			= "0";
		var ivt_pop_pagenum			= 1;
		var ivt_pop_total			= "0";
		var ivt_pop_totalnum		= 1;

		var acc_from_kf				= false;
		var hz6d_ivt_effect			= "0";
		var hz6d_cname				= "53KF &#20113;&#23458;&#26381;";
		var font_color;
		hz6d_cname = hz6d_cname.replace(/\"/g, '&quot;').replace(/\'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		var hz6d_ivt_tpl			= "";

		var acc_content  			= "&#26377;&#20160;&#20040;&#21487;&#20197;&#24110;&#21161;&#24744;&#30340;&#21527;?";
		var chatWindow;			//å¼¹åºæ°çªå£
		var deteTime;
		if(0==0)
		{
			acc_content = "&#23458;&#26381;&#19981;&#22312;&#32447;&#65292;&#28857;&#20987;&#30041;&#35328;&#65281;";
		}

		var ivt_timer = 0;
		//var force_kf = ""; //é²æ­¢å¼ºå¶æ¶è¯¥é¡µé¢æªå è½½å®æï¼æ¾å°acc.jså®ä¹
		var last_invite_kf = "";//ä¸æ¬¡éè¯·ä¿¡æ¯ï¼é²æ­¢webCompany.phpé¡µé¢æªå è½½å®æ
		var man_content = "";

		var zdfq_switch = "yes";
		var zdfq_type = "1";
		var first_ivt_type = "2";
		var mini_style_type = "1";
		var mini_online_text = "åæä»¬å¨çº¿äº¤è°!";
		mini_online_text = mini_online_text.replace(/\"/g, '&quot;').replace(/\'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		var mini_off_text = "ç»æä»¬çè¨å§!";
		mini_off_text = mini_off_text.replace(/\"/g, '&quot;').replace(/\'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		var minicolor_tbbj = "#1798fc";
		var jtfq_type = 1;//äº¤æ¿åèµ·æ¶ç¨äºå¤æ­å¼¹åºæµ®å¨çªå£è¿æ¯éè¯·æ¡
		var mini_size = "1";//æµ®å¨çªå£å°ºå¯¸
		var pc_ivt_type = "-1";
		var pc_ivt_top = "40";
		var pc_ivt_left = "50";
		var callback_id6ds = "10003965,10343689,10689271,10777731";
		var lang_arr_ivt = ["\u8f93\u5165\u624b\u673a\u53f7\u7801","\u7ed9\u6211\u56de\u7535!","\u514d\u8d39\u7535\u8bdd\u54a8\u8be2\u670d\u52a1\uff0c\u8bf7\u653e\u5fc3\u63a5\u542c","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u53f7\u7801","\u53d1\u9001\u6210\u529f\uff01\u8bf7\u7559\u610f\u7535\u8bdd\u63a5\u542c","\u8fd4\u56de","\u5fae\u4fe1\u626b\u7801\u5173\u6ce8","\u70b9\u51fb\u514d\u8d39\u901a\u8bdd","\u53d1\u9001\u6210\u529f!","\u8bf7\u7559\u610f\u7535\u8bdd\u63a5\u542c","\u5728\u7ebf\u54a8\u8be2","\u54a8\u8be2","\u7559\u8a00","\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a","\u8bf7\u7559\u610f\u7535\u8bdd\u63a5\u542c"];

		if ((pc_ivt_type == '2' || pc_ivt_type == '-1') && 0 == '0') {
			$53.creElm({
				'id':'kfiframe',
				'src':'',
				'style':'display:none;overflow:hidden;',
				'frameBorder':0,
				'scrolling': 'no'
			},'iframe');
			$53.creElm({
				'id':'kfivteffect',
				'style':'display:none;position:absolute;width:0px;height:0px;overflow:hidden;border:1px solid #1B88D0;background:#D6EEFD;z-index:10087;'
			},'div');
			$53.creElm({
				'id':'kfivtwin',
				'style': (is_autoyqk == 1) ? 'display:none;overflow:visible;' : 'display:none;overflow:hidden;',
				'innerHTML': (is_autoyqk == 1) ? ivt_seturl(ivtstr) : ivtstr
			},'div');
		}else{
			$53.creElm({
				'id':'kfivtwin',
				'style':'display:none;overflow:visible;',
				'innerHTML':ivtstr
			},'div');			function Inv(){
				try{
					this.box = document.getElementById("inv_box_53kf");
					this.inp = document.getElementById("phoneNum_53kf");
					this.wro = document.getElementById("wrong_form_53kf");
					this.rig = document.getElementById("right_form_53kf");
					this.border_color = this.inp.getAttribute("data-color");
					this.opa = document.getElementById("alpha20_53kf");
					this.btn = document.getElementById("inv_btn_53kf");
					this.mobil = /^((0\d{2,3}-?\d{7,8})|(1[3-9]\d{9}))$/;
					this.positionInv(pc_ivt_left,pc_ivt_top);
					this.init();
				}catch(e){}
    		};
			Inv.prototype = {
				init : function(){
					var _this = this;
					document.onclick = function(){
						_this.focu();
					};
					this.box.onclick = function(e){
						var e=e||window.event;

						// å¼å®¹å¤ç
						if (e.stopPropagation) {
							e.stopPropagation();
						}else{
							// IEæµè§å¨
							e.cancelBubble=true;
						}
					};
				},
				// éè¯·æ¡å®ä½
				positionInv : function(left,top){
					var _this = this;
					var wid = $53.getWH().W;
					var hei = $53.getWH().H;
					$53("inv_box_53kf").style.left =( wid-parseInt(_this.box.style.width))*(left/100) + 'px';
					$53("inv_box_53kf").style.top = (hei-parseInt(_this.box.offsetHeight))*(top/100) + 'px';
				},
				// éè¯·æ¡å³é­
				clos : function(){
					onliner_zdfq=3;
					jtfq_type=1;
					hidden_ivt();
				},
				// è¡¨åéªè¯
				makePhone : function(){
					var _this = this;
					if(_this.inp.value == ""){
						_this.wro.innerHTML = lang_arr_ivt[13];//å·ç ä¸è½ä¸ºç©º
						_this.wro.style.display = "block";
						_this.rig.style.display = "none";
						_this.inp.style.borderColor = "#F44024";
					}else if(!_this.mobil.test(_this.inp.value)){
						_this.wro.innerHTML = lang_arr_ivt[3];//è¯·è¾å¥æ­£ç¡®çå·ç 
						_this.wro.style.display = "block";
						_this.rig.style.display = "none";
						_this.inp.style.borderColor = "#F44024";
					}else{
						// åéè¯·æ±å¤æ­æåè¿æ¯å¤±è´¥
						_this.opa.style.display = "block";
						_this.btn.innerHTML = lang_arr_ivt[8];//åéæå
						_this.inp.style.borderColor = _this.border_color;
						_this.wro.style.display = "none";
						_this.rig.style.display = "block";
						$53.callPhone(_this.inp.value,callback_id6ds,'');
					}
				},
				// è¡¨åéªè¯æ¶å¤±
				focu : function(){
					var _this = this; 
					try{
						_this.opa.style.display = "none";
						_this.btn.innerHTML = lang_arr_ivt[7];//ç¹å»åè´¹éè¯
						_this.inp.style.borderColor = _this.border_color;
						_this.wro.style.display = "none";
						_this.rig.style.display = "none";
					}catch(e){}
				},
				// éå¶è¾å¥æ°å­
				justNum : function(){
					var _this = this; 
					_this.inp.value = _this.inp.value.replace(/[^\d]/g,'');
				},
				// å»ºç«å¯¹è¯
				talk : function(){
					var _this = this;
					_this.focu();
					if (zdfq_type == 3) {
						onliner_zdfq=2;jtfq_type=2;show_floatWindow2();hidden_ivt();
					}else{
						var openurl = "https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2" + force_kf;
						onliner_zdfq=2;
						window.open(openurl,"_blank","height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
						hidden_ivt();
					}
				}
			};			var inv = new Inv();
			window.inv = inv;
	}			// å¼ºå¶å¯¹è¯å°çªå£HTML
			mini_button_position = 'right:0; bottom:0;';
			if(is_right=='l' && is_top=="b"){
				mini_button_position = 'left:0; bottom:0;';
			}else if(is_right=='l' && is_top=="t"){
				mini_button_position = 'left:0; top:0;';
			}else if(is_right=='r' && is_top=="t"){
				mini_button_position = 'right:0; top:0;';
			}
			var bubble_html = '';
			var btn_style1 = '';
			var btn_style2 = '';
			if (0 == 1) {
				var minichat_text = mini_online_text;
			}else{
				var minichat_text = mini_off_text;
			}

			var mini_size_height=460;
			if(mini_size==2){
				mini_size_height = 400;
			}
			//ç¨äºæµ®å¨çªå£åå§ç¶æåé
			var div_company_mini_height = mini_size_height;
			var mini_btn_display = 'display:none;';
			var mini_div_display = '';
			if (acc_pop_type == 2) {
				mini_btn_display = 'display:block;';
				mini_div_display = 'display:none;';
				div_company_mini_height = 0;
			}

			if(0 == 1){
				btn_style1 = 'background: center center no-repeat;background-image: url(https://www5.53kf.com/style/chat/new2017/image/png/img-info24.png);background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/img-info24.svg), none;'
				btn_style2 = 'position: relative;height: 100%;width: 100%;background: center center no-repeat;background-color: '+minicolor_tbbj+';background-image: url(https://www5.53kf.com/style/chat/new2017/image/png/img-info36.png);background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/img-info36.svg), none;'
			}else {
				btn_style1 = 'background: center center no-repeat;background-image: url(https://www5.53kf.com/style/chat/new2017/image/png/img-email24.png);background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/img-email24.svg), none;'
				btn_style2 = 'position: relative;height: 100%;width: 100%;background: center center no-repeat;background-color: '+minicolor_tbbj+';background-image: url(https://www5.53kf.com/style/chat/new2017/image/png/img-email36.png);background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/img-email36.svg), none;'
			}

			if(mini_style_type==1){
				bubble_html = '<div class="mini-btn mini-btn1" id="mini-btn" onclick="show_floatWindow();" style="width:auto;white-space:nowrap;cursor:pointer;'+mini_btn_display+'position:absolute;'+mini_button_position+'z-index:-1;height: 42px;border-radius:2px; overflow: hidden; background: '+minicolor_tbbj+';-webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)!important;box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)!important;">'+
									'<div class="mini-btn-info" style="position: relative;width: 42px;height: 42px;display:inline-block;"><span style="width:100%;height:100%;position:absolute;left:0;top:0;z-index:1;'+btn_style1+'"></span><span style="width:100%;height:100%;position:absolute;left:0;top:0;background:#000;opacity:0.2;filter:alpha(opacity=20);"></span><span id="info-num" style="display:none;position: absolute;top: 5px;right: 5px;z-index:10;height: 14px;min-width: 14px;line-height: 14px;border-radius: 7px;background: red;font-size: 12px;color: #FFFFFF;letter-spacing: 0.47px;text-align: center;">0</span></div>'+
									'<div class="mini-btn-middle" style="width:auto;font-weight:normal;display:inline-block;vertical-align:top;line-height: 42px;padding: 0 8px;font-size: 16px;color: #FFFFFF;letter-spacing: 0.83px;word-break: break-all;text-align: center;">'+minichat_text+'</div>'+
									'<div class="mini-btn-window" style="display:inline-block;width: 42px;height: 42px;background: center center no-repeat;background-image: url(https://www5.53kf.com/style/chat/new2017/image/png/to-maxWindow.png);background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/to-maxWindow.svg), none;"></div>'+
								'</div>';
			}else if(mini_style_type==2){
				bubble_html = '<div class="mini-btn mini-btn2" id="mini-btn" onclick="show_floatWindow();" style="cursor:pointer;'+mini_btn_display+'position:absolute;'+mini_button_position+'z-index:-1;width: 42px;border-radius:2px; overflow: hidden; background: '+minicolor_tbbj+';-webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)!important;box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)!important;">'+
									'<div class="mini-btn-info" style="position: relative;width: 42px;height: 42px;"><span style="width:100%;height:100%;position:absolute;left:0;top:0;z-index:1;'+btn_style1+'"></span><span style="width:100%;height:100%;position:absolute;left:0;top:0;background:#000;opacity:0.2;filter:alpha(opacity=20);"></span><span id="info-num" style="display:none;position: absolute;top: 5px;right: 5px;z-index:10;height: 14px;min-width: 14px;line-height: 14px;border-radius: 7px;background: red;font-size: 12px;color: #FFFFFF;letter-spacing: 0.47px;text-align: center;">0</span></div>'+
									'<div class="mini-btn-middle" style="font-weight:normal;line-height: 20px;padding: 8px 13px 16px;font-size: 16px;color: #FFFFFF;letter-spacing: 3.83px;word-wrap: break-word;text-align: center;">'+minichat_text+'</div>'+
								'</div>';
			}else if(mini_style_type==3){
				bubble_html = '<div class="mini-btn mini-btn3" id="mini-btn" onclick="show_floatWindow();" style="cursor:pointer;'+mini_btn_display+'position:absolute;'+mini_button_position+'z-index:-1;width: 64px;height: 64px;border-radius: 32px; overflow: hidden; background: '+minicolor_tbbj+';-webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)!important;box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)!important;">'+
									'<div style="'+btn_style2+'"><span id="info-num" style="display:none;position: absolute;top: 12px;right: 12px;z-index:10;height: 14px;min-width: 14px;line-height: 14px;border-radius: 7px;background: red;font-size: 12px;color: #FFFFFF;letter-spacing: 0.47px;text-align: center;">0</span></div>'+
								'</div>';
			}

			var tmp_innerHTML = bubble_html;
			tmp_innerHTML += '<div id="iframe_company_mini_div" style="'+mini_div_display+'font-size: 0;background-color:#fff;border-radius:2px;overflow:hidden;width:100%;height:'+mini_size_height+'px;box-shadow:0 5px 40px rgba(0,0,0,.16)!important;-webkit-box-shadow:0 5px 40px rgba(0,0,0,.16)!important;">'+
								'<h6 class="pc-visitor-header" style="width:100%;box-sizing:border-box;background: '+minicolor_tbbj+' no-repeat 10px;margin:0;padding:0;padding-left: 10px;font-size: 14px;color: #fff;height: 36px;line-height: 36px;position: relative;font-weight: normal;padding-right: 72px;">'+
									'<img style="max-width: 80px;width:auto;height:24px;float: left;margin-top: 6px;border-radius:2px;" src="https://www5.53kf.com/img/upload/10000079/mobile/temp/mobile_53kf_1516676731.png"/>'+
									'<label style="background: none; padding: 0; margin: 0; border: 0; line-height:36px;cursor:move;font-weight:normal;cursor:move;color: #fff;display: inline-block;float: left;max-width:78%;margin-left: 5px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 14px;" class="header-company">' + hz6d_cname + '</label>'+
									'<span onclick="max_from_company_mini(this);" title="æå¤§å"  class="pc-new pc-title-btn" style="background: url(https://www5.53kf.com/style/chat/new2017/image/png/newWindow.png) center no-repeat;background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/newWindow.svg),none;position: absolute;width: 36px;height: 36px;cursor: pointer;right: 40px;top: 0;fill: #F08000;"></span>'+
									'<span onclick="hide_floatWindow();" title="æå°å" class="kf-pc-hide pc-title-btn" style="background: url(https://www5.53kf.com/style/chat/new2017/image/png/close2020.png) center no-repeat;background-image: url(https://www5.53kf.com/style/chat/new2017/image/svg/close2020.svg),none;position: absolute;width: 36px;height: 36px;cursor: pointer;right: 0px;top: 0;"></span>'+
								'</h6>'+
								'<iframe id="iframe_company_mini" frameborder="0"  style="height:'+(mini_size_height-36)+'px;width:100%;margin:0;padding:0;visibility: inherit;opacity:1;position:inherit;">'+
								'</iframe>'+
							'</div>';
			$53.creElm({
				'id':'div_company_mini',
				'style':'line-height:0;font-size:0;display:none;position:fixed;right:0;bottom:0;width:360px;height:'+div_company_mini_height+'px;overflow:hidden;z-index:1000000;cursor:move;overflow: visible;',
				'innerHTML': tmp_innerHTML
			},'div');
			floatWindowBindEvent();//ç»å®äºä»¶//  âââââââââââââââââââââââââ  2017çè®¿å®¢ç«¯æ°å¢ ââââââââââââââââââââââââââ


	// éèæµ®å¨çªå£
	function hide_floatWindow(event){
		document.querySelector('#div_company_mini').style.height="0";
		document.querySelector('#iframe_company_mini_div').style.display="none";
		document.querySelector('.mini-btn').style.display="block";
		//è°æ´çªå£ä½ç½®
		var wid = $53.getWH().W;
		var hei = $53.getWH().H;
		if(0 == 0){
			if(is_right=='l'){
				var right=parseInt(2);
				right=wid-right-parseInt($53("div_company_mini").style.width);
				$53("div_company_mini").style.right = right + 'px';
			}else{
				$53("div_company_mini").style.right = "2" + 'px';
			}
			if(is_top=='t') {
				var bottom=parseInt(2);
				bottom=hei-bottom-parseInt($53("div_company_mini").style.height);
				$53("div_company_mini").style.bottom = bottom + 'px';
			}else{
				$53("div_company_mini").style.bottom = "2"+ 'px';
			}
		}else{
			logoPosition();
			var right_per = parseInt(0)/100;
			var bottom_per = parseInt(0)/100;
			$53("div_company_mini").style.left = (wid-parseInt($53("div_company_mini").style.width))*(1-right_per) + 'px';
			$53("div_company_mini").style.top = (hei-parseInt($53("div_company_mini").style.height))*(1-bottom_per) + 'px';
		}
		$53.callBackFun("miniHide");

		if (is_close == 1) return false;//å¦æå¯¹è¯ç»æ åä¸åæ§è¡è§å

		if(zdfq_switch=='yes'){
			if (acc_reauto == 1 && zdfq_type == 1) {//æµ®å¨çªå£ å¼å¯åå¤åèµ·
				setTimeout(function () {
					show_floatWindow('zdfq');
				},acc_reauto_time);
			}else if (zdfq_type == 3) {//äº¤æ¿åèµ·
				if (jtfq_type==1) {
					jtfq_type = 2;
					setTimeout(function () {
						hz6d_checkIvt();
					},acc_reauto_time);
				}else{
					jtfq_type = 1;
					setTimeout(function () {
						show_floatWindow('zdfq');
					},acc_reauto_time);
				}
			}
			//æ·»å cookie å®ç°æ´ä¸ªåè¯»å
			if(acc_reauto == 1) {
				document.cookie = "my_acc_reauto_time=" + new Date().getTime() + ";path=/";
			} else { //æ²¡æåå¤å¼å¯å¼¹åºçªå£  å é¤cookie
				document.cookie = "my_acc_reauto_time=null;path=/";
			}
		}
	}
	// æ¾ç¤ºæµ®å¨çªå£
	var mini_btn_flag;
	var show_floatWindow_firefoxRefresh = 1;
	function show_floatWindow(type){//type:  zdfq:ä¸»å¨åèµ·è§åæå¼  qzzk:å¼ºå¶å±å¼æå¼   ä¸ä¼ :ç¨æ·ç¹å»å±å¼
		try{clearTimeout(miniToOpenTimer)}catch(e){}
		// ç«çç¼å­å·æ°é®é¢
		if (navigator.userAgent.indexOf("Firefox") > -1 && firefox_onOff == 1) {
			var iframe = document.getElementById("iframe_company_mini");
			var iframe_src = iframe.getAttribute("src");
			iframe.setAttribute("src",iframe_src+"&huancun="+Math.random());
			firefox_onOff = 0;
		}

		// é²æ­¢æå¨çæ¶åè§¦åç¹å»äºä»¶
		if(mini_btn_flag){
			mini_btn_flag = false;
			return false;
		}
		if (type == 'zdfq') {
			if (!hz6d_isShowIvt('chat')){
				return false;
			}else{
				hz6d_setTotalNum('chat');
			}
		}
		var mini_size_height;
		if(1==1){
			if (0 == '1') {
				mini_size_height=480;
			}else{
				mini_size_height=460;
			}
			if(mini_size==2){
				mini_size_height = 400;
			}
		}else {
			mini_size_height = parseInt($53("iframe_company_mini_div").style.height);
		}

		try{
			document.querySelector('#div_company_mini').style.height=mini_size_height+"px";
			document.querySelector('#iframe_company_mini_div').style.display="block";

			// ç«çæµè§å¨å±å¼æµ®å¨çªå£æ¶æ¯æ»å¨è³é¡¶é¨ä¿®å¤
			// if (navigator.userAgent.indexOf("Firefox") > -1){
				document.getElementById('iframe_company_mini').contentWindow.postMessage('openMini',"https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2");
			// }

			document.querySelector('.mini-btn').style.display="none";
			document.getElementById("info-num").style.display="none";
			document.getElementById("info-num").innerHTML = "0";
		}catch(e){}

		//è°æ´çªå£ä½ç½®
		var wid = $53.getWH().W;
		var hei = $53.getWH().H;
		if(0 == 0){
			if(is_right=='l'){
				var right=parseInt(2);
				right=wid-right-parseInt($53("div_company_mini").style.width);
				$53("div_company_mini").style.right = right + 'px';
			}else{
				$53("div_company_mini").style.right = "2" + 'px';
			}
			if(is_top=='t') {
				var bottom=parseInt(2);
				bottom=hei-bottom-parseInt($53("div_company_mini").style.height);
				$53("div_company_mini").style.bottom = bottom + 'px';
			}else{
				$53("div_company_mini").style.bottom = "2"+ 'px';
			}
		}else{
			logoPosition();
			var right_per = parseInt(0)/100;
			var bottom_per = parseInt(0)/100;
			$53("div_company_mini").style.left = (wid-parseInt($53("div_company_mini").style.width))*(1-right_per) + 'px';
			$53("div_company_mini").style.top = (hei-parseInt($53("div_company_mini").style.height))*(1-bottom_per) + 'px';
		}
		$53.callBackFun("miniShow");
	};
	//ä¸ºæ°çæµ®å¨çªå£ç»å®äºä»¶
	function floatWindowBindEvent(){
		document.querySelector('.mini-btn').onmouseenter = function(){
			this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, .09), 0 4px 40px rgba(0, 0, 0, .24)';
		}
		document.querySelector('.mini-btn').onmouseleave = function(){
			this.style.boxShadow = ' 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)';
		}
		try{
			document.querySelector('.pc-new').onmouseenter = function(){
				this.style.backgroundColor = 'rgba(255, 255, 255, .1)';
				//this.style.filter = 'progid:DXImageTransform.Microsoft.gradient(startcolorstr=#19FFFFFF,endcolorstr=#19FFFFFF)';
			}
			document.querySelector('.pc-new').onmouseleave = function(){
				this.style.backgroundColor = '';
			}
		}catch(e){}
		document.querySelector('.kf-pc-hide').onmouseenter = function(){
			this.style.backgroundColor = 'rgba(255, 255, 255, .1)';
			//this.style.filter = 'progid:DXImageTransform.Microsoft.gradient(startcolorstr=#19FFFFFF,endcolorstr=#19FFFFFF)';
		}
		document.querySelector('.kf-pc-hide').onmouseleave = function(){
			this.style.backgroundColor = '';
		}
		if (1 == '24') {
			document.querySelector('.pc-close').onmouseenter = function(){
				this.style.backgroundColor = 'rgba(255, 255, 255, .1)';
				//this.style.filter = 'progid:DXImageTransform.Microsoft.gradient(startcolorstr=#19FFFFFF,endcolorstr=#19FFFFFF)';
			}
			document.querySelector('.pc-close').onmouseleave = function(){
				this.style.backgroundColor = '';
			}
		}
	}

	//ç¾åæ¯æ¨¡å¼ä¸å¾æ å®ä½
	function logoPosition(){
		if(parseInt(0) < 51 && parseInt(0) < 51) {
			$53('mini-btn').style.right = 0;
			$53('mini-btn').style.bottom = 0;
			$53('mini-btn').style.left = 'auto';
			$53('mini-btn').style.top = 'auto';
		}
		if(parseInt(0) < 51 && parseInt(0) > 50) {
			$53('mini-btn').style.right = 0;
			$53('mini-btn').style.bottom = 'auto';
			$53('mini-btn').style.left = 'auto';
			$53('mini-btn').style.top = 0;
		}
		if(parseInt(0) > 50 && parseInt(0) < 51) {
			$53('mini-btn').style.right = 'auto';
			$53('mini-btn').style.bottom = 0;
			$53('mini-btn').style.left = 0;
			$53('mini-btn').style.top = 'auto';
		}
		if(parseInt(0) > 50 && parseInt(0) > 50) {
			$53('mini-btn').style.right = 'auto';
			$53('mini-btn').style.bottom = 'auto';
			$53('mini-btn').style.left = 0;
			$53('mini-btn').style.top = 0;
		}
	}
	// ç¾åæ¯æ¨¡å¼ä¸çå¬å°ºå¯¸åå
	try{
		window.addEventListener("resize",function(){positionIvt()},false);
	}catch(e){
		window.attachEvent("onresize",function(){positionIvt()});
	}
	function positionIvt(){
		if(0 == 1){
			var wid = $53.getWH().W;
			var hei = $53.getWH().H;
			logoPosition();
			var right_per = parseInt(0)/100;
			var bottom_per = parseInt(0)/100;
			$53("div_company_mini").style.left = (wid-parseInt($53("div_company_mini").style.width))*(1-right_per) + 'px';
			$53("div_company_mini").style.top = (hei-parseInt($53("div_company_mini").style.height))*(1-bottom_per) + 'px';
		}		
	}

	//ââââââââââââââââââââââââââ  2017çè®¿å®¢ç«¯æ°å¢ ââââââââââââââââââââââââ


	//	miniæ¬æµ®å¯¹è¯çªå£ è½¬å°æ­£å¸¸èå¤©çªå£
	function max_from_company_mini(t)
	{
		var openurl = "https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2"+force_kf;
		try{
			chatWindow = window.open(openurl,"_blank","height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
			if(chatWindow==null){
				location.href = openurl;
			}else{
				chatWindow.focus();
				chatWindow.opener = window;
			}
		}catch(e){
			location.href = openurl;	// å²æ¸¸
		}
		if (1 == 1 || 1 > 20) {
			hide_floatWindow();
		}else{
			close_company_mini();
			t.parentNode.parentNode.removeChild(t.parentNode);
		}
	}

	function cgpic(t){
		if( $53("div_company_mini").style.width =="400px"){
			document.querySelector('.mini_narrow').style.background="url('https://www5.53kf.com/style/chat/minichat2/img/minx1.png') no-repeat";
		}

	}
	function cgpic2(t){
		if( $53("div_company_mini").style.width =="400px"){
			document.querySelector('.mini_narrow').style.background="url('https://www5.53kf.com/style/chat/minichat2/img/minx2.png') no-repeat";
		}
	}
	function cgpic3(t){
		document.querySelector('.mini_maxto').style.background="url('https://www5.53kf.com/style/chat/minichat2/img/double1.png') no-repeat";
	}
	function cgpic4(t){
		document.querySelector('.mini_maxto').style.background="url('https://www5.53kf.com/style/chat/minichat2/img/double2.png') no-repeat";
	}
	function cgpic5(t){
		document.querySelector('.mini_close').style.background="url('https://www5.53kf.com/style/chat/minichat2/img/close1.png') no-repeat 50% 50%";
	}
	function cgpic6(t){
		document.querySelector('.mini_close').style.background="url('https://www5.53kf.com/style/chat/minichat2/img/close2.png') no-repeat 50% 50%";
	}



	//	miniæ¬æµ®å¯¹è¯çªå£ ç¼©å°ãæ¾å¤§
	function max_min_company_mini(t)
	{
		if (t.getAttribute('max_min') == 'max')
		{
			$53("div_company_mini").style.height = "36px";
			$53("hz6d_cname_mini_div").style.width = "130px";
			$53("div_company_mini").style.width = "203px";
			$53("iframe_company_mini_div").style.display = "none";
			t.style.backgroundImage = "url('https://www5.53kf.com/style/chat/minichat2/img/max.png')";
			t.setAttribute('max_min','min');
			t.title = t.getAttribute('mini_recover');
			$53("div_company_mini").style.right = '0px';
			$53("div_company_mini").style.bottom = '0px';			$53("mini_header_bg_div").style.backgroundImage = "url('https://www5.53kf.com/style/chat/minichat2/img/header_bg2_1.png')";
		}
		else
		{
			hz6d_re_flashing(HZ6D_CONFIGSNEW.com_id);
			$53("iframe_company_mini_div").style.display = "";
			$53("div_company_mini").style.height = "378px";
			$53("div_company_mini").style.width = "403px";
			$53("hz6d_cname_mini_div").style.width = "330px";
			t.style.backgroundImage = "url('https://www5.53kf.com/style/chat/minichat2/img/min.png')";
			t.setAttribute('max_min','max');
			t.title = t.getAttribute('mini_narrow');
			var wid = $53.getWH().W;
			var hei = $53.getWH().H;
			if(0 == 0){
				if(is_right=='l'){
					var right=parseInt(2);
					right=wid-right-403;
					$53("div_company_mini").style.right = right + 'px';
				}else{
					$53("div_company_mini").style.right = "2" + 'px';
				}
				if(is_top=='t') {
					var bottom=parseInt(2);
					bottom=hei-bottom-378;
					$53("div_company_mini").style.bottom = bottom + 'px';
				}else{
					$53("div_company_mini").style.bottom = "2"+ 'px';
				}
			}else{
				logoPosition();
				var right_per = parseInt(0)/100;
				var bottom_per = parseInt(0)/100;
				$53("div_company_mini").style.left = (wid-parseInt($53("div_company_mini").style.width))*(1-right_per) + 'px';
				$53("div_company_mini").style.top = (hei-parseInt($53("div_company_mini").style.height))*(1-bottom_per) + 'px';
			}
		}		$53("mini_header_bg_div").style.backgroundImage = "url('https://www5.53kf.com/style/chat/minichat2/img/header_bg_1.png')";
	}
	// å®æ¶è°ç¨å¤æ­æ¯å¦æ¾ç¤ºéè¯·æ¡
	function hz6d_checkIvt() { hz6d_showIvt(); }

	// æ¾ç¤ºå»ç»å±
	function hz6d_showFreeze(){
		if(acc_freeze=="on"){
			var div = $53("hz6d_freeze_div");
			if(div==null){
				hz6d_createFreezeDiv();
			}else{
				div.style.display = "block";
			}
		}
	}

	// åå»ºå»ç»å±
	function hz6d_createFreezeDiv(){
		var div = document.createElement('DIV');
		div.id = 'hz6d_freeze_div';
		with(div.style){
			zIndex=6998;
			top='0px';
			left='0px';
			width='100%';
			height='100%';
			border='none';
			margin=padding=0;
			position='absolute';
			backgroundColor='#000';
			opacity='0.2';
			filter='alpha(opacity=20)';
			duration=1000;
		}
		document.body.insertBefore(div,document.body.firstChild);
		setInterval("hz6d_checkFreezeStyle()", 1);
	}

	var hz6d_maxPageWidth = 0;
	var hz6d_maxPageHeight = 0;
	// å®æ¶è°æ´å»ç»å±å¤§å°
	function hz6d_checkFreezeStyle(){
		try{
			var freeze = $53("hz6d_freeze_div");
			if(freeze!=null){
				var scroll = hz6d_getScrollPosition();
				var client = hz6d_getClientWindow();
				var w = client.width+scroll.sLeft;
				var h = client.height+scroll.sTop;
				if(w > hz6d_maxPageWidth){
					hz6d_maxPageWidth = w;
					freeze.style.width = hz6d_maxPageWidth+"px";
				}
				if(h > hz6d_maxPageHeight){
					hz6d_maxPageHeight = h;
					freeze.style.height = hz6d_maxPageHeight+"px";
				}
			}
		}catch(e){}
	}

	// å é¤å»ç»å±
	function hz6d_destroyFreezeDiv(){
		try{
			var div = $53("hz6d_freeze_div");
			if(div!=null) { div.style.display = "none"; }
		}catch(e){}
	}

	// æ¾ç¤ºéè¯·æ¡
	function hz6d_showIvt(){
		if(hz6d_isShowIvt('ivt')) {
			if($53("kfivtwin").style.display=="none" && (onliner_zdfq!=2 || zdfq_type==3) || acc_from_kf==true){
				acc_from_kf = false;
				if ((pc_ivt_type == '2' || pc_ivt_type == '-1') && 0 == '0') {
					get_ACCWindow();
				}else{
					get_ACCWindow2();
				}
				hz6d_setTotalNum('ivt');
				// hz6d_setPageNum('ivt');
			}
		}
	}

	// å¤æ­æ¯å¦æ¾ç¤ºéè¯·æ¡ å¼ºå¶
	function hz6d_isShowIvt(type){
		if(acc_reinvite==1 && acc_from_kf==true) { return true; }

		if(type == 'ivt') {
			//ç¹å»æ¥åææç»åä¸åå¼¹åº
			if(ivt_autotype==3 && zdfq_type==3){
				if(onliner_zdfq==3){
					return false;
				}
			}
		}

		// if(type == 'chat') {
		// 	if(acc_autotype==3){
		// 		ç¹å»æ¥åææç»åä¸åå¼¹åº
		// 		if(onliner_zdfq!=0){
		// 			return false;
		// 		}
		// 	}
		// }
		if(!hz6d_overTotalNum(type)) {
			// if(hz6d_overPageNum(type)) {
			// 	return false;
			// }
		}else{
			return false;
		}
		return true;
	}

	// å¤æ­æ¯å¦è¶è¿ææé¡µé¢æ¬¡æ°
	function hz6d_overTotalNum(type) {
		if($53("kfivtwin").style.display!="none") return;
		var total_invite = $53.getCookie("invite_53kf_totalnum_17");
		if(total_invite=="") { total_invite = 0; }
		if(total_invite>=acc_pop_totalnum) {return true; }
		return false;
	}

	// å¤æ­æ¯å¦è¶è¿æ¯ä¸ªé¡µé¢æ¬¡æ°
	function hz6d_overPageNum(type){
		if($53("kfivtwin").style.display!="none") return;
		if(type == 'chat') {
			if(acc_pop_page==1){
				var page_invite = kf_getCookie(nowpage);
				if(page_invite=="") { page_invite = 0; }
				if(page_invite>=acc_pop_pagenum) { return true; }
			}
		}
		if(type == 'ivt') {
			if(ivt_pop_page==1){
				var page_invite = $53.getCookie(nowpage+'ivt');
				if(!page_invite) { page_invite = 0; }
				if(page_invite>=ivt_pop_pagenum) { return true; }
			}
		}
		return false;
	}

	// è®¾ç½®ææé¡µé¢å¼¹åºæ¬¡æ°
	function hz6d_setTotalNum(type){//å¦æä¸»å¨åèµ·æ¹å¼ä¸ºäº¤æ¿åèµ·ï¼åä¸ä¸ªå¾ªç¯ä¸ºä¸æ¬¡
		if (type == 'ivt') {
			if (zdfq_type == 2 || (zdfq_type == 3 && first_ivt_type == 2)) {
				hz6d_setTotalNum2();
			}
		}
		if (type == 'chat') {
			if (zdfq_type == 1 || (zdfq_type == 3 && first_ivt_type == 1) || (zdfq_type == 3 && first_ivt_type == 2 && ivt_autotype==3 && onliner_zdfq==3)) {
				hz6d_setTotalNum2();
			}
		}
	}

	// è®¾ç½®ææé¡µé¢å¼¹åºæ¬¡æ°
	function hz6d_setTotalNum2()
	{
		var total_cookie_name = 'invite_53kf_totalnum_17';
		var total_invite = kf_getCookie(total_cookie_name);
		if(total_invite=="") { total_invite = 0; }
		total_invite++;
		document.cookie = total_cookie_name+"="+total_invite+";path=/";
	}

	// è®¾ç½®æ¯ä¸ªé¡µé¢å¼¹åºæ¬¡æ°
	function hz6d_setPageNum(type)
	{
		var pagenum_cookie_name = nowpage;
		if(type == 'ivt'){
			pagenum_cookie_name = nowpage + 'ivt';
		}
		var page_invite = kf_getCookie(pagenum_cookie_name);
		if(page_invite=="") { page_invite = 0; }
		page_invite++;
		document.cookie = pagenum_cookie_name+"="+page_invite;
	}

	function kf_getCookie(objName) {
		var arrStr = document.cookie.split("; ");

		for(var i = 0;i < arrStr.length;i ++) {

			var temp = arrStr[i].split("=");

			if(temp[0] == objName) return unescape(temp[1]);
		}
		return '';
	}

	// éèéè¯·æ¡
	function hidden_ivt()
	{
		if(zdfq_switch == 'yes') {
			//document.cookie = "onliner_zdfq72000079="+onliner_zdfq;
			document.cookie = "my_acc_reauto_time=" + new Date().getTime() + ";path=/";
		} else {
			document.cookie = "my_acc_reauto_time=null;path=/";
		}
		try{
			if ((pc_ivt_type == '2' || pc_ivt_type == '-1') && 0 == '0') {
				$53("kfiframe").style.display = "none";
				hidden_ACCWindow();
				hz6d_destroyFreezeDiv();
			}else{
				hidden_ACCWindow2();
			}
		}catch(e){}
		try{ force_kf = ""; }catch(e){}
	}

	function hz6d_haveMIn(){
		try{
		if('1' == 0 && $53("hz6d_mnkh_content").style.display=="none" ){//&& onliner_zdfq!=2
				acc_from_kf=false;
				hz6d_showContent();
				force_kf = "";
				onliner_zdfq = 2;
				hidden_ivt();
				hz6d_setTotalNum('chat');
				// hz6d_setPageNum('chat');
		}else if($53("div_company_mini").style.display=="none" ){//onliner_zdfq!=2
				acc_from_kf=false;
				get_location(acc_chattype);
				if (first_ivt_type == 1) {
					if (!(zdfq_type==3 && jtfq_type==2)) {
						hz6d_setTotalNum('chat');
					}
				}else{
					if (!(zdfq_type==3 && jtfq_type==1)) {
						hz6d_setTotalNum('chat');
					}
				}

				// hz6d_setPageNum('chat');
		}else{
			try{
				if (1 == 1 || 1 > 20) {
					show_floatWindow('qzzk');
				}else{
					hz6d_showIvt4();
				}
			}catch(e){}
		}
		}catch(e){}
	}

	function open_floatWindow(){
		try{
			if($53("div_company_mini").style.display=="none" ){
				acc_from_kf=false;
				get_location(3);
			}else{
				if (1 == 1 || 1 > 20) {
					show_floatWindow('qzzk');
				}else{
					hz6d_showIvt4();
				}
			}
		}catch(e){}
	}

	function hz6d_showIvt3() {
		if(hz6d_isShowIvt('chat')) {
			var time=setInterval(function () {
				if('1' == 0 && $53("hz6d_mnkh_content")){
					hz6d_haveMIn();
					clearInterval(time);
				}else if($53("div_company_mini")){
					hz6d_haveMIn();
					clearInterval(time);
				}
			},1);
		}
	}

	function hz6d_showIvt4(type) {
		if(hz6d_isShowIvt('chat') || type) {
			var time=setInterval(function () {
				if('1' == 0 && $53("hz6d_mnkh_content")){
					if($53("hz6d_mnkh_content").style.display=="none" ){
						$53("hz6d_mnkh_content").style.display = "block";
						hz6d_setTotalNum('chat');
						// hz6d_setPageNum('chat');
					}
					clearInterval(time);
				}else if($53("div_company_mini")){
					if($53("div_company_mini").style.display=="none" ){
						$53("div_company_mini").style.display = "block";
						hz6d_setTotalNum('chat');
						// hz6d_setPageNum('chat');
					}
					clearInterval(time);
				}
			},1000);
		}
	}

	function hz6d_deteWindow(){
		if(hz6d_isShowIvt('chat')){
			if(chatWindow==null || chatWindow.closed==true){
				acc_from_kf=false;
				get_location(acc_chattype);
				hz6d_setTotalNum('chat');
				// hz6d_setPageNum('chat');
			}
		}else{
			clearInterval(deteTime);
		}
	}

	function hz6d_showIvt2 () {
		deteTime = setInterval(function () {hz6d_deteWindow();},acc_reauto_time);
	}

	function hz6d_startReautoTimer2(acc_chattype) {
		if(acc_chattype==3) {
			hz6d_showIvt3();
		}
		if(acc_chattype==2){
			hz6d_showIvt2();
		}
		if(acc_chattype==1){
			if(hz6d_isShowIvt('chat')){
				get_location(acc_chattype);
				hz6d_setTotalNum('chat');
				// hz6d_setPageNum('chat');
			}
		}
	}

	// å è½½åæ¯å¦æ¾ç¤ºéè¯·æ¡ å¯¹è¯æ¡
	function hz6d_LoadToShowIvt()
	{
		if (zdfq_switch == 'yes' && (0==1 || "off"=="on")) {
			if(zdfq_type==1){//å¼ºå¶å¯¹è¯
				setTimeout(function () {hz6d_showIvt3();}, acc_poptime);
			}else if (zdfq_type==2) {//éè¯·æ¡
				setTimeout("hz6d_checkIvt()", acc_poptime);
			}else if (zdfq_type==3) {//äº¤æ¿åèµ·
				if (first_ivt_type == 1) {//é¦æ¬¡éè¯·æ¹å¼ 1:éè¯·æ¡ 2:æµ®å¨çªå£
					setTimeout("hz6d_checkIvt()", acc_poptime);
				}else{
					setTimeout(function () {hz6d_showIvt3();}, acc_poptime);
				}
			}
		}
	}
	//åä¸ä¸ªåä¸å¤çcookie æ¹åå»¶è¿æ¶é´
	var my_acc_reauto_time_cookie = $53.getCookie('my_acc_reauto_time');

	if(my_acc_reauto_time_cookie && 0 && miniToOpenTime=='0') {
		acc_poptime = acc_reauto_time - (new Date().getTime() - my_acc_reauto_time_cookie);
	}
	//æ¥è¯¢linkè¡¨ï¼å¤æ­æ¯å¦å·²æå®¢æå¨çº¿ï¼å»ºç«å¯¹è¯

	// if(0==1 || "off"=="on" || "off"=="on") {
		hz6d_LoadToShowIvt();
	// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var hz6d_company_mini = null;
	// å¼ºå¶å¯¹è¯
	function get_location(type,invite_kf){
		// type:1 è¦çæ¬çªå£ 2 æ°çªå£ å¦æè¢«æ¦æªï¼åæ¬çªå£å·æ° 3 æ¬æµ®å¯¹è¯çªå£
		try{
			var openurl = "https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2"+force_kf;
			var popParam = $53.getPopParam();
			if(popParam != ''){   //å¤æ­æ¯å¦æ¯è°JS-SDKå¼¹åºå¼ºå¶å¯¹è¯æ¡
				openurl += popParam;
			}
			if (invite_kf != undefined && invite_kf != '') {
				last_invite_kf = invite_kf;
			}
			if(type==1){
				location.href = openurl;
			}else if(type==2){
				try{
					chatWindow = window.open(openurl,"","height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
					if(chatWindow==null){
						location.href = openurl + '&timeStamp=' + new Date().getTime();
					}else{
						chatWindow.focus();
						chatWindow.opener = window;
					}
				}catch(e){
					location.href = openurl + '&timeStamp=' + new Date().getTime();	// å²æ¸¸
				}
			}else{
				var open_mini_windown = $53("iframe_company_mini").getAttribute("open_mini_windown");
				if (open_mini_windown == '1' && "jh" == 'www111'){//åæ¿ééæ± å¤ç
					if (last_invite_kf != '') {
						acc_get_force = true;
						var lnk_msg = 'sendLNK{#53#}'+last_invite_kf;
						try{
							document.getElementById('iframe_company_mini').contentWindow.postMessage(lnk_msg,"https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2");
						}catch(e){}
					}
					return;
				} 
				$53("iframe_company_mini").setAttribute("open_mini_windown",'1');

				if('1' == 0){
					acpt_force_kf(force_kf);
					var timer=setInterval(function () {
						if($53("hz6d_mnkh_content")){
							hz6d_showContent();
							clearInterval(timer);
						}
					},100);
				}else{
					var openurl_mini = openurl;
					var tpl = "";
					if(openurl_mini.match(/&tpl=[^&]*/gim)!=null){
						openurl_mini = openurl_mini.replace(/&tpl=[^&]*/gim, "&tpl=minichat2");
					}else{
						tpl = "&tpl=minichat2";
					}
					$53("iframe_company_mini").src = openurl_mini + tpl + '&timeStamp=' + new Date().getTime()+'&interface_color=1&interface_theme=1&minchat_style=1';
					var div = $53("div_company_mini");
					hz6d_company_mini = new hz6d_div_scroll(div);
					hz6d_company_mini.start();
					div.style.display = "";
					if (miniToOpenTime > 0) {
						miniToOpenTimer = setTimeout(function () {
							show_floatWindow('zdfq');
						},miniToOpenTime);
					}
				}
				is_close = 0;
				$53.callBackFun("miniShow");
			}
			force_kf = "";
			// onliner_zdfq = 2;
			// hidden_ivt();
		}catch(e){}
	}
			
	// miniçªå£ç¹å»é»æ­¢åæ³¡
	document.getElementById("div_company_mini").onclick = function(e){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
	}
	// æ¬æµ®éè¯·æ¡æ»å¨
	function hz6d_div_scroll(d){
		var self = this;
		this.div = d;
		this.right = 0;
		this.bottom = 0;
		this.timer = 0;
		this.posX=this.posY=this.posR=this.posB=0;
		this.scrollX=this.scrollY=false;

		this.start = function(){
			this.goPosition();
			this.timer = setInterval(this.scroll, 10);
			this.move();
		}
		this.stop = function(){
			if(this.timer!=0){ clearInterval(this.timer); }
		}
		this.goPosition = function(){
			this.right = 2;
			this.bottom = 2;
			this.right_per = parseInt(0)/100;
			this.bottom_per = parseInt(0)/100;
			var wid = $53.getWH().W;
			var hei = $53.getWH().H;
			if(0 == 0){
				if(is_right=='l'){
					var right=parseInt(this.right);
					right=wid-right-parseInt($53("div_company_mini").style.width);
					this.div.style.right = right + "px";
				}
				else{
					this.div.style.right = this.right + "px";
				}
				if(is_top=='t'){
					var bottom=parseInt(this.bottom);
					bottom=hei-bottom-parseInt($53("div_company_mini").style.height);
					this.div.style.bottom = bottom + "px";
				}else{
					this.div.style.bottom = this.bottom + "px";
				}
			}else{
				logoPosition();
				this.div.style.left = (wid-parseInt(this.div.style.width))*(1-this.right_per) + 'px';
				this.div.style.top = (hei-parseInt(this.div.style.height))*(1-this.bottom_per) + 'px';
			}
		}
		this.scroll = function(){
			var scroll = hz6d_getScrollPosition();
			var cur_right = -scroll.sLeft;
			var cur_bottom = -scroll.sTop;
		}
		this.move = function(){
			this.div.onmousedown = function(e){
				window.event? window.event.cancelBubble = true : e.stopPropagation();


				if(!e) e = window.event; //å¦ææ¯IE

				mini_btn_flag = false;
				self.posX = e.clientX;
				self.posY = e.clientY;
				self.posR = parseInt(self.div.style.right);
				self.posB = parseInt(self.div.style.bottom);
				self.posL = parseInt(self.div.style.left);
				self.posT = parseInt(self.div.style.top);
				if(self.div.setCapture){
					self.div.setCapture();
				}else if(window.captureEvents){
					window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
				}
				var d = document;
				d.onmousemove = function(ev){
					if(!ev) ev = window.event; //å¦ææ¯IE
					if(Math.abs(ev.clientX - self.posX)>5 || Math.abs(ev.clientY - self.posY)>5) mini_btn_flag = true;

					if(0 == 0){
						self.div.style.right = (self.posR - (ev.clientX - self.posX)) + "px";
						self.div.style.bottom = (self.posB - (ev.clientY - self.posY)) + "px";
					}else{
						self.div.style.left = (self.posL + (ev.clientX - self.posX)) + "px";
						self.div.style.top = (self.posT + (ev.clientY - self.posY)) + "px";
					}

				}
				d.onmouseup = function(){
					//var self_height = 460;
					//if(mini_size==2){
						//self_height = 400;
					//}
					var self_height = parseInt(self.div.style.height);
					var self_width = parseInt(self.div.style.width);

					// éå¶æåºåºå
					if(parseInt(self.div.style.right)<0){
						self.div.style.right=0;
					};
					if(parseInt(self.div.style.bottom)<0){
						self.div.style.bottom=0;
					};
					if(parseInt(self.div.style.left)<0){
						self.div.style.left=0;
					};
					if(parseInt(self.div.style.top)<0){
						self.div.style.top=0;
					};
					if(parseInt(self.div.style.bottom)+self_height>parseInt(document.documentElement.clientHeight)){
						self.div.style.bottom = parseInt(document.documentElement.clientHeight)-self_height+"px";
					}
					if(parseInt(self.div.style.right)+self_width>parseInt(document.documentElement.clientWidth)){
						self.div.style.right = parseInt(document.documentElement.clientWidth)-self_width+"px";
					}

					if(self.div.releaseCapture){
						self.div.releaseCapture();
					}else if(window.captureEvents){
						window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
					};
					d.onmousemove = null;
					d.onmouseup = null;
				}
			}
		}
	}

	//éèæ¬æµ®æ¡
	function close_company_mini(){
		$53("div_company_mini").style.display = "none";
		if(zdfq_switch=='yes'){
			if (acc_reauto == 1 && zdfq_type == 1) {//æµ®å¨çªå£  å¼å¯åå¤åèµ·
				setTimeout(function () {
					if(is_close == 1) hz6d_showIvt3();
					else hz6d_showIvt4();
				},acc_reauto_time);
				onliner_zdfq = 0;
			}else if (zdfq_type == 3) {//äº¤æ¿åèµ·
				if (first_ivt_type == 1) {
					setTimeout("hz6d_checkIvt()", acc_reauto_time);
				}else if (first_ivt_type == 2) {
					hz6d_checkIvt();
				}
			}
		}
		// if(acc_autotype == 3) {onliner_zdfq = 3;document.cookie = "onliner_zdfq72000079="+onliner_zdfq;}
		hz6d_startReautoTimer();//éè¯·æ¡åå¤åèµ·
		//æ·»å cookie å®ç°æ´ä¸ªåè¯»å
		if(acc_reauto == 1) {
			document.cookie = "my_acc_reauto_time=" + new Date().getTime() + ";path=/";
		} else { //æ²¡æåå¤å¼å¯å¼¹åºçªå£  å é¤cookie
			document.cookie = "my_acc_reauto_time=null;path=/";
		}
	}

	var ivt_top = 0;
	var ivt_left = 0;

	var ivt_width="400";
	var ivt_height="auto";

	var hz6d_effect_time = 200;
	var hz6d_effect_timer = 10;
    	//è·åéè¯·æ¡çå®½é«
	function get_wh(){
		var ivt_obj=document.getElementById("acc_title").getElementsByTagName("div");
		var ivt_width=0;
		var ivt_height=0;
		for(var i=0;i<ivt_obj.length;i++){
			var width=parseInt((ivt_obj[i].style.width).replace(/px/ig,""));
			var height=parseInt((ivt_obj[i].style.height).replace(/px/ig,""));
			if(width>ivt_width) ivt_width=width;
			if(height>ivt_height) ivt_height=height;
		}
		return {"width":ivt_width,"height":ivt_height};
	}

	// æ¾ç¤ºéè¯·æ¡
	function get_ACCWindow(){
		var ivtPosition = hz6d_getIvtPosition();

		if(zdyivt==1){
			ivt_height_init = zdyivt_height;
			ivt_width_init = zdyivt_width;
		}else{
			ivt_height_init = "auto";
			ivt_width_init = "400px";
		}
		$53("kfivtwin").style.height = ivt_height_init;
		$53("kfivtwin").style.width = ivt_width_init;

		try{
			$53("kfivtwin").style.zIndex = "10088";
			$53("kfivtwin").style.fontSize = "12px";
			$53("kfivtwin").style.position = "absolute";
			if(how_float==1 && hasdoctype) $53("kfivtwin").style.position = "fixed";

			$53("kfiframe").style.width = $53("kfivtwin").clientWidth + 0 + "px";
			$53("kfiframe").style.height = $53("kfivtwin").clientHeight + -7 + "px";
			$53("kfiframe").style.position = "absolute";
			if(how_float==1 && hasdoctype) $53("kfiframe").style.position = "fixed";
			$53("kfiframe").style.filter = "alpha(opacity=1)";
			$53("kfiframe").style.display = "";
		}catch(e){}

		var openurl = "https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2" + force_kf;
		if(is_autoyqk == 1){
			once_autoyqk = Number(once_autoyqk) + 1;
			if(once_autoyqk == 1){
				try{
					acc_content = $53("hz6d_acc_content").innerHTML;
				}catch(e){}
			}
			if(man_content!=""){
				try{
					$53("hz6d_acc_content").innerHTML = man_content.replace(/\"/g, '&quot;').replace(/\'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				}catch(e){}
				man_content = "";
			}
			else{
				try{
					$53("hz6d_acc_content").innerHTML = acc_content;
				}catch(e){}
			}
		}
		else{
			if(man_content!=""){
				try{
					$53("hz6d_acc_content").innerHTML = man_content.replace(/\"/g, '&quot;').replace(/\'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				}catch(e){}
				man_content = "";
			}else{
				try{
					$53("hz6d_acc_content").innerHTML = acc_content;
				}catch(e){}
			}
		}
		
		try{
			var isNew = hz6d_ivt_tpl.indexOf("new2011");
			if(zdyivt==1 || isNew>0){
				var zdyIds = document.getElementsByTagName("div");
				for(var i=0; i<zdyIds.length; i++){
					if(zdyIds[i].id=="hz6d_53kf_invite_acc"){
						zdyIds[i].onclick = function(){onliner_zdfq=2;window.open(openurl,"_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");hidden_ivt();}
					}
				}
			}else{
				$53("hz6d_53kf_invite_acc").onclick = function(){onliner_zdfq=2;window.open(openurl,"_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");hidden_ivt();}
			}
		}catch(e){}

		if (pc_ivt_type == '2') {//æ°çèªå®ä¹ å®ä½ç¾åæ¯è®¡ç®
			$53("kfivtwin").style.height = ivt_height_init;
			$53("kfivtwin").style.width = ivt_width_init;
			$53("kfivtwin").style.display = "block";
			$53("kfivtwin").style.position = 'fixed';
			$53("kfivtwin").style.top = 0;
			$53("kfivtwin").style.left = 0;
			var wid=$53.getWH().W;
			var hei=$53.getWH().H;
			var ivt_wh = get_wh();
			$53("kfivtwin").firstChild.style.left =(wid-ivt_wh.width)*(50/100) + 'px';
			$53("kfivtwin").firstChild.style.top = (hei-ivt_wh.height)*(40/100) + 'px';
			return;
		}
		

		function hz6d_open_move(iconDivMain){
			var obj = $53("kfivtwin");
			obj.style.display = "block";
			var obj_height = obj.offsetHeight;
			var obj_width = obj.offsetWidth;
			obj.style.display = "none";

			var tb_top = parseInt(iconDivMain.style.top.replace("px",""));
			var tb_left = parseInt(iconDivMain.style.left.replace("px",""));
			var tb_width = parseInt(iconDivMain.style.width.replace("px",""));
			var tb_height = parseInt(iconDivMain.style.height.replace("px",""));

			obj = $53("kfivteffect");
			obj.style.top = tb_top + "px";
			obj.style.left = tb_left + "px";
			obj.style.height = tb_height + "px";
			obj.style.width = tb_width + "px";
			obj.style.display = "block";

			var moveHeight = tb_height;
			var moveWidth	= tb_width;
			var moveTop		= tb_top;
			var moveLeft	 = tb_left;

			var offTop		 = Math.abs(tb_top-ivtPosition.top);
			var offLeft		= Math.abs(tb_left-ivtPosition.left);

			var topStep		= offTop/(hz6d_effect_time/hz6d_effect_timer);
			var leftStep	 = offLeft/(hz6d_effect_time/hz6d_effect_timer);

			var heightStep = (obj_height-tb_height)/(hz6d_effect_time/hz6d_effect_timer);
			var widthStep	= (obj_width-tb_width)/(hz6d_effect_time/hz6d_effect_timer);

			var topD = 1;
			if(tb_top-ivtPosition.top>0) { topD=-1; }
			var leftD = 1;
			if(tb_left-ivtPosition.left>0) { leftD=-1; }

			function dmove(){
				moveHeight += heightStep;
				moveWidth	+= widthStep;
				moveTop		+= topD*topStep;
				moveLeft	 += leftD*leftStep;

				if(moveWidth>obj_width){
					obj.style.display = "none";
					clearInterval(iIntervalId);
					hz6d_showIvtWindow();
				}else{
					var ivtPosition_t = hz6d_getIvtPosition();
					obj.style.height = moveHeight + 'px';
					obj.style.width = moveWidth + 'px';
					obj.style.top = moveTop + (ivtPosition_t.top-ivtPosition.top) + 'px';
					obj.style.left = moveLeft + (ivtPosition_t.left-ivtPosition.left) + 'px';
				}
			}
			var iIntervalId = setInterval(dmove, hz6d_effect_timer);
			try{iconDivMain.style.display = "none";}catch(e){}
		}

		if(hz6d_ivt_effect==1 && hz6d_kf_type==2 && hz6d_pos_model==1 && hz6d_hidden==0 && (hz6d_icon_type==3 || hz6d_icon_type==-1)){
			hz6d_checkIconDivMain();
		}else{
			hz6d_showIvtWindow();
		}

		function hz6d_showIvtWindow(){
			var ivtPosition_t = hz6d_getIvtPosition();
			if(how_float==1) var ivtPosition_t = hz6d_getIvtFixedPosition();
			hz6d_setIvtTop(ivtPosition_t.top);
			hz6d_setIvtLeft(ivtPosition_t.left);
			$53("kfivtwin").style.display = "block";
			hz6d_initScrollPosition();
			hz6d_showFreeze();
			hz6d_startScrollTimer();
		}
		function hz6d_setIvtTop(top){
			$53("kfivtwin").style.top = top + "px";
			$53("kfiframe").style.top = top + "px";
		}
		function hz6d_setIvtLeft(left){
			$53("kfivtwin").style.left = left + "px";
			$53("kfiframe").style.left = left + "px";
		}
		function hz6d_initScrollPosition(){
			var scrollPosition = hz6d_getScrollPosition();
			ivt_top = scrollPosition.sTop;
			ivt_left = scrollPosition.sLeft;
		}
		function hz6d_checkIconDivMain(){
			var iconDivMain = $53("iconDivMain"+kf_icon_id);
			if(iconDivMain!=null){
				if(hz6d_close_icon==0){
					hz6d_open_move(iconDivMain);
				}else{
					hz6d_showIvtWindow();
				}
			}else{
				setTimeout(hz6d_checkIconDivMain, 100);
			}
		}
		function hz6d_startScrollTimer(){
			if(ivt_timer==0 && how_float!=1){
				if(browser=="360" || browser=="TheWorld"){
					ivt_timer = window.setInterval("ivt_autoScroll()", 500);
				}else{
					ivt_timer = window.setInterval("ivt_autoScroll()", 10);
				}
			}
		}

		var posX;
		var posY;
		fdiv = $53("kfivtwin");
		$53("acc_title").onmousedown=function(e){
			if(!e) e = window.event;	 //å¦ææ¯IE
			posX = e.clientX - parseInt(fdiv.style.left);
			posY = e.clientY - parseInt(fdiv.style.top);
			fdiv.style.zIndex=999999999999;
			this.style.zIndex=999999999999;
			try{
				var bdElm = document.querySelector('#LXB_CONTAINER .lxb-container');
				if(bdElm !== null){
					bdElm.style.zIndex = 9999
				}
			}catch(e){}
			document.onmousemove = mousemove;
			document.onmouseup = function(n){document.onmousemove = null;}
		}
		// document.onmouseup = function(){
		// 	document.onmousemove = null;
		// }
		function mousemove(ev){
			if(ev==null) ev = window.event;//å¦ææ¯IE
			fdiv.style.left = (ev.clientX - posX) + "px";
			fdiv.style.top = (ev.clientY - posY) + "px";
			ivt_top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
			ivt_left = Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);

			// if(ivt_top==0) { ivt_top = document.documentElement.scrollTop; }
			// if(ivt_left==0) { ivt_left = document.documentElement.scrollLeft; }
		}
	}

	function get_ACCWindow2(){
		try{
			$53("kfivtwin").style.display = "block";
			inv.positionInv(pc_ivt_left,pc_ivt_top);
			document.getElementById("lr_con_53kf").style.marginTop =  - (document.getElementById("lr_con_53kf").offsetHeight/2) + "px";
		}catch(e){}
	}

	function hidden_ACCWindow(){
		function hz6d_close_move(iconDivMain){
			var obj = $53("kfivtwin");
			var obj_height = obj.offsetHeight;
			var obj_width = obj.offsetWidth;
			var ivtPosition = {top:obj.offsetTop,left:obj.offsetLeft};
			if(how_float==1) var ivtPosition = hz6d_getIvtPosition();
			obj.style.display = "none";

			var tb_top = parseInt(iconDivMain.style.top.replace("px",""));
			var tb_left = parseInt(iconDivMain.style.left.replace("px",""));
			var tb_width = parseInt(iconDivMain.style.width.replace("px",""));
			var tb_height = parseInt(iconDivMain.style.height.replace("px",""));

			obj = $53("kfivteffect");
			obj.style.top = ivtPosition.top + "px";
			obj.style.left = ivtPosition.left + "px";
			obj.style.height = obj_height + "px";
			obj.style.width = obj_width + "px";
			obj.style.display = "block";

			var moveHeight = obj_height;
			var moveWidth	= obj_width;
			var moveTop		= ivtPosition.top;
			var moveLeft	 = ivtPosition.left;

			var offTop		 = Math.abs(tb_top-ivtPosition.top);
			var offLeft		= Math.abs(tb_left-ivtPosition.left);

			var topStep		= offTop/(hz6d_effect_time/hz6d_effect_timer);
			var leftStep	 = offLeft/(hz6d_effect_time/hz6d_effect_timer);

			var heightStep = (obj_height-tb_height)/(hz6d_effect_time/hz6d_effect_timer);
			var widthStep	= (obj_width-tb_width)/(hz6d_effect_time/hz6d_effect_timer);

			var topD = 1;
			if(tb_top-ivtPosition.top>0) { topD=-1; }
			var leftD = 1;
			if(tb_left-ivtPosition.left>0) { leftD=-1; }

			ivtPosition = hz6d_getIvtPosition();
			function dmove()
			{
				moveHeight -= heightStep;
				moveWidth	-= widthStep;
				moveTop		-= topD*topStep;
				moveLeft	 -= leftD*leftStep;

				if(moveWidth<tb_width){
					obj.style.display = "none";
					try{iconDivMain.style.display = "block";}catch(e){}
					clearInterval(iIntervalId);
					hz6d_startReautoTimer();
				}else{
					var ivtPosition_t = hz6d_getIvtPosition();
					obj.style.height = moveHeight + 'px';
					obj.style.width = moveWidth + 'px';
					obj.style.top = moveTop + (ivtPosition_t.top-ivtPosition.top) + 'px';
					obj.style.left = moveLeft + (ivtPosition_t.left-ivtPosition.left) + 'px';
				}
			}
			var iIntervalId = setInterval(dmove, hz6d_effect_timer);
		}
		if(hz6d_ivt_effect==1 && hz6d_kf_type==2 && hz6d_pos_model==1 && hz6d_hidden==0 && (hz6d_icon_type==3 || hz6d_icon_type==-1)){
			var iconDivMain = $53("iconDivMain"+kf_icon_id);
			if(hz6d_close_icon==0){
				hz6d_close_move(iconDivMain);
			}else{
				$53("kfivtwin").style.display = "none";
				hz6d_startReautoTimer();
			}
		}else{
			$53("kfivtwin").style.display = "none";
			hz6d_startReautoTimer();
		}
	}

	//éèéè¯·æ¡
	function hidden_ACCWindow2(){
		$53("kfivtwin").style.display = "none";
		hz6d_startReautoTimer();
	}

	function hz6d_startReautoTimer(){//éè¯·æ¡åå¤åèµ·
		// if(acc_reauto==1 && zdfq_switch == 'yes') { setTimeout("hz6d_checkIvt()", acc_reauto_time); }
		if(is_close == 1) return false;//å¦æå·²ç»ç»æå¯¹è¯  åä¸åæ§è¡è§å
		if (acc_reauto==1 && zdfq_type==2 && zdfq_switch == 'yes') {//ä¸»å¨åèµ·æ¹å¼ä¸ºéè¯·æ¡ä¸å¼å¯åå¤åèµ·
			setTimeout("hz6d_checkIvt()", acc_reauto_time);
		}else if (zdfq_type==3 && zdfq_switch == 'yes') {//ä¸»å¨åèµ·æ¹å¼ä¸ºäº¤æ¿åèµ·
			if (onliner_zdfq == 3) {
				setTimeout(function(){
					if (document.getElementById("div_company_mini") && document.getElementById("div_company_mini").style.display!='none') {
						if (1 == 1 || 1 > 20) {
							show_floatWindow('zdfq');
						}else{
							hz6d_showIvt4();
						}
					}else{
						hz6d_showIvt3();
					}
				}, acc_reauto_time);
			}
		}
	}

	// get ivt fixed position
	function hz6d_getIvtFixedPosition(){
		var clientRect = hz6d_getClientWindow();

		if(ivt_height=="auto") { ivt_height="200"; }
		if(zdyivt==1){
			ivt_width = zdyivt_width.replace("px","");
			ivt_height = zdyivt_height.replace("px","");
		}
		if(acc_middle==1){
			acc_lr = 1;
			acc_tb = 1;
			var ivt_wh=get_wh();
			acc_left = (clientRect.width-ivt_wh.width)/2;
			acc_top = (clientRect.height-ivt_wh.height)/2-40;
		}

		if(acc_lr==2){
			var ivt_left_init = clientRect.width - acc_left - ivt_width;
		}else{
			var ivt_left_init = acc_left;
		}
		if(acc_tb==2){
			var ivt_top_init = clientRect.height - acc_top - ivt_height;
		}else{
			var ivt_top_init = acc_top;
		}
		return {top:ivt_top_init, left:ivt_left_init};
	}

	// get ivt position
	function hz6d_getIvtPosition(){
		var clientRect = hz6d_getClientWindow();

		if(ivt_height=="auto") {
			if(height_new == 0 || height_new == ''){
				ivt_height="200";
			}else{
				ivt_height=height_new;
			}
		}
		if(zdyivt==1){
			ivt_width = zdyivt_width.replace("px","");
			ivt_height = zdyivt_height.replace("px","");
		}
		if(acc_middle==1){
			acc_lr = 1;
			acc_tb = 1;
			var ivt_wh=get_wh();
			acc_left = (clientRect.width-ivt_wh.width)/2;
			acc_top = (clientRect.height-ivt_wh.height)/2-40;
		}

		var scrollPosition = hz6d_getScrollPosition();
		if(acc_lr==2){
			var ivt_left_init = scrollPosition.sLeft + clientRect.width - acc_left - ivt_width;
		}else{
			var ivt_left_init = acc_left + scrollPosition.sLeft;
		}
		if(acc_tb==2){
			var ivt_top_init = clientRect.height + scrollPosition.sTop - acc_top - ivt_height;
		}else{
			var ivt_top_init = acc_top + scrollPosition.sTop;
		}
		return {top:ivt_top_init, left:ivt_left_init};
	}

	// get scroll position
	function hz6d_getScrollPosition(){
		var s_top = document.body.scrollTop;
		var s_left = document.body.scrollLeft;
		if(s_left==0) { s_left=document.documentElement.scrollLeft; }
		if(s_top==0) { s_top=document.documentElement.scrollTop; }
		return {sTop:s_top, sLeft:s_left};
	}

	// get client width height
	function hz6d_getClientWindow(){
		var clientWidth = 0;
		var clientHeight = 0;
		if(document.documentElement && document.documentElement.scrollTop){
			clientWidth = document.documentElement.clientWidth;
			clientHeight = document.documentElement.clientHeight;
		}else if(document.body){
			clientWidth = document.body.clientWidth;
			clientHeight = document.body.clientHeight;
		}
		if(hasdoctype){
			clientHeight = document.documentElement.clientHeight;
			clientWidth = document.documentElement.clientWidth;
		}
		return {width:clientWidth, height:clientHeight};
	}

	// old client height width
	var hz6d_oldClient = hz6d_getClientWindow();
	function ivt_autoScroll(){
		var scrollPosition = hz6d_getScrollPosition();
		// new client height width
		var hz6d_newClient = hz6d_getClientWindow();

		var hz6d_kfivtwin = $53("kfivtwin");
		var hz6d_kfiframe = $53("kfiframe");

		// top change
		if(scrollPosition.sTop!=ivt_top || hz6d_oldClient.height!=hz6d_newClient.height){
			if(scrollPosition.sTop!=ivt_top){
				if(browser=="360" || browser=="TheWorld"){
					ivt_top = scrollPosition.sTop;
				}else{
					ivt_top = smoothMove(ivt_top, scrollPosition.sTop);
				}
			}
			if(hz6d_oldClient.height!=hz6d_newClient.height){
				if(browser=="360" || browser=="TheWorld"){
					hz6d_oldClient.height = hz6d_newClient.height;
				}else{
					hz6d_oldClient.height = smoothMove(hz6d_oldClient.height, hz6d_newClient.height);
				}
			}
			var hz6d_ivt_top = 0;
			if(acc_tb==2){
				hz6d_ivt_top = hz6d_oldClient.height - acc_top - ivt_height + ivt_top;
			}else{
				hz6d_ivt_top = acc_top + ivt_top;
			}

			if(browser=="360" || browser=="TheWorld"){
				if(hz6d_kfivtwin.style.display=="none"){
					hz6d_recover = false;
				}else{
					hz6d_recover = true;
					hz6d_kfivtwin.style.display = "none";
					try{
						hz6d_kfiframe.style.display = "none";
					}catch(e){}
				}
				hz6d_kfivtwin.style.top = hz6d_ivt_top+"px";
				try{
					hz6d_kfiframe.style.top = hz6d_ivt_top+"px";
				}catch(e){}
				if(hz6d_recover==true){
					hz6d_kfivtwin.style.display = "block";
					try{
						hz6d_kfiframe.style.display = "block";
					}catch(e){}
				}
			}else{
				hz6d_kfivtwin.style.top = hz6d_ivt_top+"px";
				try{
					hz6d_kfiframe.style.top = hz6d_ivt_top+"px";
				}catch(e){}
			}
		}

		// left change
		if(scrollPosition.sLeft!=ivt_left || hz6d_oldClient.width!=hz6d_newClient.width){
			if(scrollPosition.sLeft!=ivt_left){
				if(browser=="360" || browser=="TheWorld"){
					ivt_left = scrollPosition.sLeft;
				}else{
					ivt_left = smoothMove(ivt_left, scrollPosition.sLeft);
				}
			}
			if(hz6d_oldClient.width!=hz6d_newClient.width){
				if(browser=="360" || browser=="TheWorld"){
					hz6d_oldClient.width = hz6d_newClient.width;
				}else{
					hz6d_oldClient.width = smoothMove(hz6d_oldClient.width, hz6d_newClient.width);
				}
			}
			var hz6d_ivt_left = 0;
			if(acc_lr==2){
				hz6d_ivt_left = ivt_left + hz6d_oldClient.width - acc_left - ivt_width;
			}else{
				hz6d_ivt_left = acc_left + ivt_left;
			}

			if(browser=="360" || browser=="TheWorld"){
				if(hz6d_kfivtwin.style.display=="none"){
					hz6d_recover = false;
				}else{
					hz6d_recover = true;
					hz6d_kfivtwin.style.display = "none";
					try{
						hz6d_kfiframe.style.display = "none";
					}catch(e){}
				}
				hz6d_kfivtwin.style.left = hz6d_ivt_left+"px";
				try{
					hz6d_kfiframe.style.left = hz6d_ivt_left+"px";
				}catch(e){}
				if(hz6d_recover==true){
					hz6d_kfivtwin.style.display = "block";
					try{
						hz6d_kfiframe.style.display = "block";
					}catch(e){}
				}
			}else{
				hz6d_kfivtwin.style.left = hz6d_ivt_left+"px";
				try{
					hz6d_kfiframe.style.left = hz6d_ivt_left+"px";
				}catch(e){}
			}
		}
	}
	function show_floatWindow2(){
		if (document.getElementById("div_company_mini") && document.getElementById("div_company_mini").style.display!='none') {
			if (1 == 1 || 1 > 20) {
				show_floatWindow();
			}else{
				hz6d_showIvt4();
			}
		}else{
			hz6d_showIvt3();
		}
	}
	//æ¿æ¢è¿æ¥ new
	function ivt_seturl(zdy_yqk)
	{
		var divs_str = zdy_yqk.replace(/operating="([^"]*)"/g,function(str){
			var vals = str.split('"');
			if(vals[1])
			{
				var click_str = '';
				var link_str ='';
				var target_str = '_blank';
				var hrs = '';
				var valst = vals[1].split("|");
				switch(valst[0])
				{
					case 'KF':
						var click_open_url = 'window.open(\"https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2\",\"_blank\",\"height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no\")';
						click_open_url = encodeURIComponent(click_open_url);
						click_str ='onliner_zdfq=2;hz6d_is_exist(\"'+click_open_url+'\");hidden_ivt();';
						if (zdfq_type == 3) {

							click_str = 'onliner_zdfq=2;jtfq_type=2;show_floatWindow2();hidden_ivt();';

						}
						break;
						//click_str ='onliner_zdfq=2;get_open_start();window.open(\"https://www5.53kf.com/webCompany.php?kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk=&arg=10000079&style=17&kflist=off&kf=38623605&zdkf_type=3&lnk_overflow=1&language=zh-cn&charset=GBK&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=https%3A%2F%2Fwww.53kf.com%2F&keyword=&brief=&logo=&question=&uid=6655b9b77b2b9ffb624af90ad85f385a&guest_id=10805073684010&tfrom=2\",\"_blank\",\"height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no\");hidden_ivt();';break;
					case 'CLOSE':
						click_str = 'onliner_zdfq=3;jtfq_type=1;hidden_ivt();'; break;
					case 'ETEL':
						click_str = 'window.open(\'https://tb.53kf.com/eht.php?company_id=72000079&style_id=106224891\',\'_blank\',\'height=400,width=300,top=100,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no\')';break;
					case 'QQ':
						if(valst[1]){
							if(valst[1].toLowerCase().indexOf('biz') > -1){
								var qq = valst[1].replace('biz','');
								link_str = 'https://www5.53kf.com/bizqq.php?qq=' + qq + '&from=' + window.encodeURIComponent(window.location.href);
							}else{
								link_str = 'tencent://message/?uin=' + valst[1];
							}
							if(valst[1] == '97559766')
								link_str="http://www.53kf.com/?www.53rj.com";
						};
						break;
					case 'MSN': if (valst[1]) {link_str = 'msnim:chat?contact=' + valst[1]; if(valst[1].indexOf('fonlue') > -1) link_str='http://www.53kf.com/?www.53rj.com';} break;
					case 'WW': if (valst[1]) link_str = 'aliim://sendmsg?touid=cntaobao' + valst[1]; if(valst[1] == 'fonlue') link_str='http://www.53kf.com/?www.53rj.com'; break;
					case 'HYLINK': if (valst[1]) link_str = valst[1]; if(valst[2]) target_str = valst[2]; hrs = 1;break;
					default: click_str = '';link_str = '';
				}
				var onclick_str = '';
				if (link_str == '' && click_str != '') onclick_str = "onclick='" + click_str + ";'";
				else if (link_str != ''&& click_str != '') onclick_str = ' onclick="' + click_str + ';window.open(\'' + link_str +'\',\'' + target_str + '\');" ';
				else if (link_str != ''&& click_str == '' && !hrs) onclick_str = ' onclick="window.open(\'' + link_str +'\');" ';
				else if (link_str != ''&& click_str == '' && hrs) onclick_str = 'href="'+ link_str+'" target="'+ target_str +'"';
				return onclick_str;
			}
		});
		return divs_str;
	}
	// if(0==0 && "off"=="on"){
	// 	if(acc_poptype==1){
	// 		setTimeout("hz6d_checkIvt()", 500);
	// 	}else if(acc_poptype==2){
	// 		setTimeout(function () {hz6d_startReautoTimer2(acc_chattype);}, 500);
	// 	}
	// }
	setTimeout(function(){
		var imgdragstart = function(){return false;};
		try {
			var hid_img = $53('kfivtwin').getElementsByTagName('img');
			for(i in hid_img)hid_img[i].ondragstart=imgdragstart;
			$53('acc_title').style.overflow = 'visible'; // ä¿®æ­£bug
		} catch(e){}
	},2000);