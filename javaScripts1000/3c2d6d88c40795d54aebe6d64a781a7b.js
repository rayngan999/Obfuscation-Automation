var facilitator_id='1';var local_cookie='cookie'; 
var acc_host='accwww5.53kf.com';var companyid='72000079';var hz6d_guest_ip='119.236.101.168';var ipstr='%E9%A6%99%E6%B8%AF%5B%E7%94%B5%E8%AE%AF%E7%9B%88%E7%A7%91%5D';var areastr='%E9%A6%99%E6%B8%AF%2D';var ipContinent='%E4%BA%9A%E6%B4%B2';var in_timestamp='1627920358960';var hz6d_guest_id='10805073684010';var hz6d_style_id= '17';var hz6d_alias_host='https://www5.53kf.com';var company_site={};var mnone=0;var hz6d_device='';var get_gdt_openid='1';var kf_sign='zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk%3D';var cloud_service='';
try{var local_guest_id=localStorage["53kf_guest_id"];if (local_guest_id!=""&&local_guest_id!=undefined) {hz6d_guest_id=local_guest_id;}else{localStorage["53kf_guest_id"]=hz6d_guest_id;}}catch(e){}
var force_kf = "";//å¼ºå¶å¯¹è¯æºå¸¦çå®¢æï¼åkf_ivt_new.phpå®ä¹ï¼é²æ­¢åæ¿éå¼ºå¶å¯¹è¯æ¶kf_ivt_newæ²¡å è½½å®æ,è¿éé¢å®ä¹

try{
	if(hz6d_device == "android"){
		var android_guest_id = Android.giveInformation(null);
		if(android_guest_id){
			hz6d_guest_id = android_guest_id;
		}else if(hz6d_guest_id != "0"){
			Android.writeData(hz6d_guest_id.toString());
		}
	}
}catch(e){}

in_timestamp = parseInt(in_timestamp/1000);
var http_pro = (document.location.protocol == 'https:')?'https://':'http://';
onliner_zdfq = 0;
//indexOfä½çæ¬ieå¼å®¹
if(!Array.prototype.indexOf){
	Array.prototype.indexOf = function(val){
		var value = this;
		for(var i =0; i < value.length; i++){
			if(value[i] == val) return i;
		}
		return -1;
	};
}
(function(window, undefined) {
	var w = window,
		d = document,
		dd = d.documentElement,
		db = d.body,// db kf.phpå¨headä¸­æ¶è·åä¸å° 
		head = d.head || d.getElementsByTagName("head")[0] || dd,
		isStrict = d.compatMode == "CSS1Compat",
		m = Math.max,
		ua = navigator.userAgent,
		np = navigator.platform,
		EN = w.encodeURIComponent,
		DE = w.decodeURIComponent;

	var $53 = function(id) {return d.getElementById(id) ? d.getElementById(id) : null};
	$53.version = '1.0.0';
	$53.global = {};
	$53.getKFscript = function(){
		if (typeof $53.global[''] == 'undefined' || $53.global[''] == null) {
			var scripts = document.getElementsByTagName('script'), len = scripts.length, i = 0;
			for(;i<len;i++){
				if (/kf\.php/img.test(scripts[i].src)) {
					$53.global[''] = scripts[i];
					break;
				}
			}
		}
		return $53.global[''];
	};
	$53.ready = (function(){
		var ie = !!(window.attachEvent && !window.opera),
			wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525),
			fn = [],
			run = function () {isReady = true; for (var i = 0; i < fn.length; i++) fn[i](); },
			d = document,
			isReady = false;
		return function (f) {
			if (d.body) {f();return;}
			if (isReady) {f();return;}
			if (!ie && !wk && d.addEventListener) return d.addEventListener('DOMContentLoaded', f, false);
			if (fn.push(f) > 1) return;
			if (ie) {
				(function () {
					if (!isReady) {	
						try { d.documentElement.doScroll('left'); run(); }
						catch (err) { setTimeout(arguments.callee, 0); }
					}
				})();
			} else if (wk) {
				var t = setInterval(function () {
					if (/^(loaded|complete)$/.test(d.readyState))
						clearInterval(t), run();
				}, 0);
			}
		};
	})();
	$53.forEach = function(enumerable, iterator, context) {
		var i, n, t;
		if (typeof iterator == "function" && enumerable) {
			// Array or ArrayLike or NodeList or String or ArrayBuffer
			n = typeof enumerable.length == "number" ? enumerable.length: enumerable.byteLength;
			if (typeof n == "number") {
				if (Object.prototype.toString.call(enumerable) === "[object Function]") {
					return enumerable;
				}
				for (i = 0; i < n; i++) {
					t = enumerable[i];
					t === undefined && (t = enumerable.charAt && enumerable.charAt(i));
					iterator.call(context || null, t, i, enumerable);
				}
				// enumerable is number
			} else if (typeof enumerable == "number") {
				for (i = 0; i < enumerable; i++) {
					iterator.call(context || null, i, i, i);
				}
				// enumerable is json
			} else if (typeof enumerable == "object") {
				for (i in enumerable) {
					if (enumerable.hasOwnProperty(i)) {
						iterator.call(context || null, enumerable[i], i, enumerable);
					}
				}
			}
		}
		return enumerable;
	};
	$53.type = (function() {
		var objectType = {},
			nodeType = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment", ],
			str = "Array Boolean Date Error Function Number RegExp String",
			retryType = {
				'object': 1,
				'function': '1'
			},
			toString = objectType.toString;
		$53.forEach(str.split(" "), function(name) {
			objectType["[object " + name + "]"] = name.toLowerCase();
			$53["is" + name] = function(unknow) {
				return $53.type(unknow) == name.toLowerCase();
			}
		});
		return function(unknow) {
			var s = typeof unknow;
			return ! retryType[s] ? s: unknow == null ? "null": unknow._type_ || objectType[toString.call(unknow)] || nodeType[unknow.nodeType] || (unknow == unknow.window ? "Window": "") || "object";
		};
	})();

	$53.isObject = function(unknow) {
		return typeof unknow === "function" || (typeof unknow === "object" && unknow != null)
	};

	$53.isPlainObject = function(unknow) {
		var key, hasOwnProperty = Object.prototype.hasOwnProperty;

		if ($53.type(unknow) != "object") {
			return false;
		}
		if (unknow.constructor && !hasOwnProperty.call(unknow, "constructor") && !hasOwnProperty.call(unknow.constructor.prototype, "isPrototypeOf")) {
			return false;
		}
		for (key in unknow) {}
		return key === undefined || hasOwnProperty.call(unknow, key);
	};
	$53.kfextend = function(depthClone, object) {
		var second, options, key, src, copy, i = 1,
		n = arguments.length,
		result = depthClone || {},
		copyIsArray, clone;
		$53.isBoolean(depthClone) && (i = 2) && (result = object || {}); ! $53.isObject(result) && (result = {});
		for (; i < n; i++) {
			options = arguments[i];
			if ($53.isObject(options)) {
				for (key in options) {
					src = result[key];
					copy = options[key];
					if (src === copy) {
						continue;
					}
					if ($53.isBoolean(depthClone) && depthClone && copy && ($53.isPlainObject(copy) || (copyIsArray = $53.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $53.isArray(src) ? src: [];
						} else {
							clone = src && $53.isPlainObject(src) ? src: {};
						}
						result[key] = $53.kfextend(depthClone, clone, copy);
					} else if (copy !== undefined) {
						result[key] = copy;
					}
				}
			}
		}
		return result;
	}
	$53.kfextend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		counter:1,     //è®¡æ°å¨
		data: function(key, value) {
			if(typeof value == 'undefined') {
				return $53.global[key] === undefined ? null : $53.global[key];
			} else {
				$53.global[key] = value;
			}
		},
		trim: function(text) {
			//return text == null ? "": (text + "").replace(new RegExp('(^[\\\\s\\\\t\\\\xa0\\\\u3000\\\\uFEFF]+)|([\\\\u3000\\\\xa0\\\\s\\\\t\\\\uFEFF]+\\x24)', 'g'), '');
			return text == null ? "": (text + "").replace(new RegExp('(^[\\s\\t\\xa0\\u3000\\uFEFF]+)|([\\u3000\\xa0\\s\\t\\uFEFF]+\x24)', 'g'), '');
		},
		getOs: function() {
			var allOs = ['iphone', 'android', 'macos', 'linux', 'win2008', 'win8', 'win7', 'winvista', 'win98', 'win2000', 'win2003', 'winxp', 'os_other'];
			var isWin = (np == "Win32") || (np == "Windows") || (np == "Win64");
			if (isWin) {
				var winos = {
					'win98': '(Win98)|(Windows 98)',
					'win2000': '(Windows NT 5.0)|(Windows 2000)',
					'winxp': '(Windows NT 5.1)|(Windows XP)',
					'win2003': '(Windows NT 5.2)|(Windows 2003)',
					'win7': '(Windows NT 6.1)|(Windows 7)',
					'winvista': '(Windows NT 6.0)|(Windows Vista)',
					'win8': '(Windows NT 6.2)|(Windows 8)',
					'win2008': '(Windows NT 6.1)|(Windows 2008)'
				};
				for (var i in winos) {
					if (winos.hasOwnProperty(i) && (new RegExp(winos[i], 'i')).test(ua)) return i;
				}
			}
			var isMac = (np == "Mac68K") || (np == "MacPPC") || (np == "Macintosh") || (np == "MacIntel");
			if (isMac) return "macos";
			if ((np == "X11") && !isWin && !isMac) return "unix";
			if ((np.toLowerCase() + ua.toLowerCase()).indexOf('iphone') > -1) return 'iphone';
			if (np.toLowerCase().indexOf("linux") > -1 && ua.toLowerCase().indexOf('android') > -1) return 'android';
			if (np.indexOf("Linux") > -1) return "linux";
			return "os_other";
		},
		isMobile: function() {
			var userAgentInfo = navigator.userAgent;
			var Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"];
			var flag = 'n';
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = 'y';
					break;
				}
			}
			return flag;
		},
		getUrlHost: function(url) {
			if(typeof url == "undefined" || url == "") return "";
			var domain = url.split("/");
			if(domain[2]) domain = domain[2];
			else domain = "";
			return domain;
		},
		getUrlParam: function() {
			var url = location.search; 
			var theRequest = new Object();
			if (url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for(var i = 0; i < strs.length; i ++) {
					theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
				}
			}
			return theRequest;   
		},
		getBrowser: function() {
			var browsers = {
				'sogou': 'sogou',
				'maxthon': 'maxthon',
				'opera': 'opera',
				'qq': 'tencent',
				'uc': 'uc',
				'360': '360',
				'firefox': 'firefox',
				'chrome': 'chrome',
				'safari': 'safari',
				'ie10': 'msie 10',
				'ie9': 'msie 9',
				'ie8': 'msie 8',
				'ie7': 'msie 7',
				'ie6': 'msie 6',
				'ie5': 'msie 5'
			};
			for (var i in browsers) {
				if (browsers.hasOwnProperty(i) && (new RegExp(browsers[i], 'i')).test(ua)) return i;
			}
			return 'ua_other';
		},
		getScreen: function() {
			return screen.width + "_" + screen.height;
		},
		setCookie: function(key,value,options) {
			if (!$53.isCookieKey(key)) {return;}
			options = options || {};
			var expires = options.expires;
			try{
				if((facilitator_id == "36" || facilitator_id=="24" || local_cookie == 'localStorage') && window.localStorage && window.sessionStorage){
					if('number' == typeof options.expires){
						expires = new Date().getTime() + options.expires*1000;
						window.localStorage.setItem(key,JSON.stringify({data:value,time:expires}));
					}else{
						window.sessionStorage.setItem(key,value);
					}
					return;
				}
			}catch(e){}
			if ('number' == typeof options.expires) {
				expires = new Date();
				expires.setTime(expires.getTime() + options.expires*1000);
			}
			document.cookie = key + "=" + EN(value)
			+ (options.path ? "; path=" + options.path : "")
			+ (expires ? "; expires=" + expires.toUTCString() : "")
			+ ("; domain=" + (options.domain ? options.domain : location.hostname))
			+ (options.secure ? "; secure" : "");
		},
		getCookie: function(key) {
			try{
				if((facilitator_id == "36" || facilitator_id=="24" || local_cookie == 'localStorage') && window.localStorage && window.sessionStorage){
					if(typeof window.localStorage.getItem(key) == "string"){
						var dataObj = JSON.parse(window.localStorage.getItem(key));
						if (new Date().getTime() - dataObj.time > 0) {
							return "";
						}else{
							return dataObj.data;
						}

					}
					if(typeof window.sessionStorage.getItem(key) == "string"){
						return window.sessionStorage.getItem(key);
					}
				}
			}catch(e){}

			if ($53.isCookieKey(key)) {
				var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)'), result = reg.exec(document.cookie);
				if (result) {
					var value = (result[2] === undefined || result[2] === null) ? '' : result[2];
				}
			}
			if ('string' == typeof value) {
				return DE(value);
			}
			return '';
		},
		isCookieKey:function(key) {
		//	return (new RegExp('^[^\\\\x00-\\\\x20\\\\x7f\\\\(\\\\)<>@,;:\\\\\\\\\\\\"\\\\[\\\\]\\\\?=\\\\{\\\\}\\\\/\\\\u0080-\\\\uffff]+\\x24')).test(key);
			return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(key);
		},
		setKfCookie:function(data){		//è®¾ç½®ä¸»åå53kf.comä¸çcookie   dataä¸ºäºç»´æ°ç»  [['name1','å¼ ä¸',0],['name2','æå',3600]]   ç¬¬ä¸ä¸ªåæ°ä¸ºè¿ææ¶é´  0ï¼åè¯  -1ï¼æ°¸ä¹  æ¶é´æ³ï¼è¿ææ¶é´
			var _this = this;
			var url = "//tb.53kf.com/code/ck/";
			var param = new Array();
			for (var i=0;i<data.length;i++){
				var ck = data[i];
				for(var j=0;j<ck.length;j++){
				    param.push(encodeURIComponent(ck[j]));
				}
			}
			var param_str = param.join('/');
			url += param_str;
			var id = 'kf_script_'+_this.counter;
			_this.createScript(id,url);
			_this.counter++;
		},
		getWH: function() { // è·åçªå£å¯ç¨å¤§å° 
			return {
				W: (isStrict ? dd: d.body).clientWidth,
				H: (isStrict ? dd: d.body).clientHeight
			};
		},
		getSWH: function() { // è·åå±å¹åè¾¨ççå¤§å°
			return {
				W: screen.width,
				H: screen.height
			};
		},
		getS: function() {// è·åæ»å¨è·ç¦» 
			return {
				L: m(dd.scrollLeft, d.body.scrollLeft),
				T: m(dd.scrollTop, d.body.scrollTop)
			};
		},
		htmlDecode: function(text) {
			return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&douhao/g, ",").replace(/&jinghao/g, '#');
		},
		creElm: function(o, t, a, loc) {
			loc = loc || 0;
			if(companyid === '72202088') loc = 1;
			var b = d.createElement(t || 'div'), c = (a || d.body || dd);
			for (var p in o) {
				if (!o.hasOwnProperty(p)) continue;
				p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
				if(p == 'id' && $53(o[p])) $53(o[p]).parentNode.removeChild($53(o[p]));
			}
			if (!loc) return c.insertBefore(b, c.firstChild);
			else return $53.insertAfter(b, c.lastChild);
		},
		insertAfter: function(newEl, targetEl)
		{
			var parentEl = targetEl.parentNode;
			if(parentEl.lastChild == targetEl)
			{
				return parentEl.appendChild(newEl);
			}else
			{
				return parentEl.insertBefore(newEl,targetEl.nextSibling);
			}
		},
		createScript: function(id,url){
			$53.creElm({
				'id':id == '' ? 'hz6d_script_' + Math.random() : id,
				'src':url,
				'charset':'utf-8'
			},'script',head);
		},
		before: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return (elem.parentNode || d.body || dd).insertBefore(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		after: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return $53.insertAfter(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		insertFixed: function(html){ // å¾æ åµå¥åºå®æ¨¡å¼ç¨ //
			$53.ready(function(){
				var script = $53.getKFscript(), elem = null;
				if (script.parentNode == head) elem = $53.before(html, d.body.firstChild);
				else elem = $53.after(html, script);
			});
		},
		getTimeTo24: function(){
			//get senconds time from now to tomorrow 00:00
			var d1 = new Date(),
				d2 = new Date();
			d1.setDate(d1.getDate() + 1);
			d1.setHours(0);
			d1.setMinutes(0);
			d1.setSeconds(0);
			return (d1.getTime() - d2.getTime())/1000;
		},
		json2str : function(json,code){
			var arr = [];
			var encode =  code == 'urlencode' ? $53.EN : function(data){return data};
			for(var i in json) {
				if (json.hasOwnProperty(i)) {
					arr.push(i + '=' + encode(json[i]));
				}
			}
			return arr.join('&');
		},
		addEvent : function( obj, type, fn ) {
			if ( obj.attachEvent ) {
				obj['e'+type+fn] = fn;
				obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else {
				obj.addEventListener( type, fn, false );
			}
		},
		removeEvent : function( obj, type, fn ) {
			if ( obj.detachEvent ) {
				obj.detachEvent( 'on'+type, obj[type+fn] );
				obj[type+fn] = null;
			} else {
				obj.removeEventListener( type, fn, false );
			}
		},
		callBackPhone:function(data){
			//var data_json = eval('('+data+')');
			var data_json = data;
			if(data_json.code == 0){
				location.href='tel:'+data_json.msg;
			}else{
				alert("å®¢æç¹å¿ï¼");
			}
		}
	});
	//å¯¹å¤å¼æ¾æ¥å£
	$53.kfextend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		online : 'false',
		terminal : 'pc',
		openurl : '',
		workers : [],
		groups : [],
		groupIds : [],
		popParam : '',
		apiArr : [],
		uuid : '',
		host : '',
		sign : '',
		callBackArr:{},
		isTalk:'',
		createApi:function(){
			var api = new _53API(this.online,this.terminal,this.openurl,this.workers,this.groups,this.groupIds);
			this.apiArr.push(api);
			return api;
		},
		setOnline : function(online){
			this.online = online;
		},
		setUrl : function(url){
			this.openurl = url;
		},
		setTerminal : function(terminal){
			if(terminal == 'mobile'){
				this.terminal = 'mobile';
			}
		},
		setIsTalk : function(isTalk){
			this.isTalk = isTalk;
			$53.data("is_talk",isTalk);
			try{
				if(typeof handle_is_talk == "function") handle_is_talk();
			}catch(e){}
		},
		setWorkers : function(workers){
			this.workers = workers;
		},
		setGroups : function(groups){
			this.groups = groups;
			for(var i=0;i<groups.length;i++){
				this.groupIds[i] = groups[i].group_id;
			}
		},
		getPopParam : function(){
			var re = this.popParam;
			this.popParam = '';
			return re;
		},
		setPopParam : function(param){
			this.popParam = param;
		},
		callMsg : function(){
			if(typeof this.callBackArr["callMsg"] == "function"){
				this.callBackArr["callMsg"]();
				return;
			};
			for(var i=0;i<this.apiArr.length;i++){
				this.apiArr[i].callMsg();
			}
		},
		callBackFun : function(func_name){
			var func_names = ["miniShow","miniHide"];
			if(func_names.indexOf(func_name) < 0){
				return;
			}
			if(typeof this.callBackArr[func_name] == "function"){
				this.callBackArr[func_name]();
				return;
			}
			for(var i=0;i<this.apiArr.length;i++){
				this.apiArr[i][func_name]();
			}
		},
		setUuid:function(uuid){
			this.uuid = uuid;
		},
		getUuid:function(){
			return this.uuid;
		},
		setHost:function(host){
			this.host = host;
		},
		setSign:function(sign){
			this.sign = sign;
			this.initApi();
		},
		sendData:function(type,data){
			var _this = this;
			var id = 'kf_script_'+_this.counter;
			var url = '//'+_this.host+'/kfapi.php?company_id='+companyid+'&id='+encodeURIComponent(_this.uuid)+'&type='+encodeURIComponent(type)+'&data='+encodeURIComponent(data)+'&sign='+encodeURIComponent(_this.sign);
			_this.createScript(id,url);
			_this.counter++;
		},
		sendKfapiInit:function(sendData){
			var _this = this;
			var id = 'kf_script_'+_this.counter;
			var url =  '//'+_this.host+'/client/kfapi_init_info.php?company_id='+companyid+'&id='+encodeURIComponent(_this.uuid)+'&sign='+encodeURIComponent(_this.sign)+sendData;

			_this.createScript(id,url);
			_this.counter++;
		},
		sendLword:function(type,msg,name,email,qq,phone,company,address,notes){
			var _this = this;
			var id = 'kf_script_'+_this.counter;

			var talk_page_tmp = window.location.href;
			if(talk_page_tmp.indexOf('hz6d{') != -1) {
				talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
			}

			var sendData = "&msg="+msg+"&ly_name="+name+"&ly_email="+email+"&ly_qq="+qq+"&ly_phone="+phone+"&ly_company="+company+"&ly_addr="+address+"&notes="+notes+"&ly_first=true&ly_mode=3&ly_object=";

			var url = '//'+_this.host+'/lword_sdk.php?company_id='+companyid+'&guest_id='+hz6d_guest_id+'&style='+hz6d_style_id+'&referer1='+encodeURIComponent(hz6d_from_page)+'&referer='+encodeURIComponent(talk_page_tmp)+'&land_page='+encodeURIComponent(hz6d_land_page)+'&uid='+encodeURIComponent(_this.uuid)+sendData;
			_this.createScript(id,url);
			_this.counter++;
		},
		callPhone:function(call,id6d,worker_id){
			var _this = this;
			var id = 'kf_script_'+_this.counter;

			var talk_page_tmp = window.location.href;
			if(talk_page_tmp.indexOf('hz6d{') != -1) {
				talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
			}

			var sendData = "&call="+call+"&id6d="+id6d;
			if (worker_id != undefined) sendData += "&worker_id="+worker_id;
			var url = '//'+_this.host+'/impl/rpc_callback_phone.php?from=api&company_id='+companyid+'&guest_id='+hz6d_guest_id+"&style="+hz6d_style_id+'&from_page='+encodeURIComponent(hz6d_from_page)+'&talk_page='+encodeURIComponent(talk_page_tmp)+'&land_page='+encodeURIComponent(hz6d_land_page)+sendData;

			_this.createScript(id,url);
			_this.counter++;
		},
		callBack:function(data){
			console.log(data);	
		},
		comeInfo:function(logo,title,content,curl,sendtype){
			var _this = this;
			var id = 'kf_script_'+_this.counter;

			var sendData = '&logo='+encodeURIComponent(logo)+'&title='+encodeURIComponent(title)+'&content='+encodeURIComponent(content)+'&curl='+encodeURIComponent(curl)+'&sendtype='+encodeURIComponent(sendtype);
			var url = '//'+_this.host+'/comeinfo.php?company_id='+companyid+'&id='+encodeURIComponent(_this.uuid)+'&sign='+encodeURIComponent(_this.sign)+sendData;

			_this.createScript(id,url);
			_this.counter++;
		},
		addCustMsg:function(msg,callback){
			var _this = this;
			var id = 'kf_script_'+_this.counter;

			var sendData = '&msg='+encodeURIComponent(msg)+'&callback='+encodeURIComponent(callback);
			var url = '//'+_this.host+'/client/add_cust_msg.php?company_id='+companyid+'&id='+encodeURIComponent(_this.uuid)+'&sign='+encodeURIComponent(_this.sign)+sendData;

			_this.createScript(id,url);
			_this.counter++;
		},
		callPriPhone:function(worker_id,callback){
			var _this = this;
			var id = 'kf_script_'+_this.counter;
			if(typeof callback == "undefined" || callback == ""){
				var callback = '$53.callBackPhone';
			}

			if(typeof worker_id == "undefined" || worker_id == ""){
				var zdkf_type = $53.data('zdkf_type');
				var worker_id = $53.data('kf');
			}else{
				var zdkf_type = 1;
			}

			var talk_page_tmp = window.location.href;
			if(talk_page_tmp.indexOf('hz6d{') != -1) {
				talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
			}

			var sendData = '&callback='+encodeURIComponent(callback);
			var url = '//'+_this.host+'/client/getPrivacyPhone.php?from=api&company_id='+companyid+'&id6d=0&talk_id=0&zdkf_type='+zdkf_type+'&worker_id='+worker_id+'&guest_id='+hz6d_guest_id+"&style="+hz6d_style_id+'&from_page='+encodeURIComponent(hz6d_from_page)+'&talk_page='+encodeURIComponent(talk_page_tmp)+'&land_page='+encodeURIComponent(hz6d_land_page)+sendData;

			_this.createScript(id,url);
			_this.counter++;
		},
		initApi:function(){//å¤çé¢çæ°æ®æ¥å£
			var _this = this;
			try{
				if(typeof _$53 == "object"){
					for(var i = 0;i<_$53.length;i++){
						_this.handleInitApi(_$53[i]);
					}
				}
			}catch (e){}
		},
		handleInitApi:function(arr){
			var _this = this;
			var cmds = ["_setPageTag","_setComeInfo","_callBackFun","_setGuestInfo"];
			try {
				var cmd = arr[0];
				if(cmds.indexOf(arr[0]) < 0){
					return false;
				}
			}catch (e){
				return false;
			}
			switch (cmd){
				case "_setPageTag"://æ è¯æ¥æºç³»ç»
						var prod_id = typeof arr[1] == "undefined" ?  "" : arr[1];
						var prod_name = 	typeof arr[2] == "undefined" ?  "" : arr[2];
						var sendData = '&cmd='+encodeURIComponent(cmd)+'&prod_id='+encodeURIComponent(prod_id)+'&prod_name='+encodeURIComponent(prod_name);
						_this.sendKfapiInit(sendData);
					break;
				case "_setComeInfo"://æ è¯æ¥æºç³»ç»
					var title =  typeof arr[1] == "undefined" ?  "" :  $53.trim(arr[1]);
					var logo =  typeof arr[2] == "undefined" ?  "" :  $53.trim(arr[2]);
					var content =  typeof arr[3] == "undefined" ?  "" :  $53.trim(arr[3]);
					var curl =  typeof arr[4] == "undefined" ?  "" :  $53.trim(arr[4]);
					var sendtype = typeof arr[5] == "undefined" ?  "" :  $53.trim(arr[5]);
					_this.comeInfo(logo,title,content,curl,sendtype);
					break;
				case "_setGuestInfo"://æ è¯æ¥æºç³»ç»
					if(typeof arr[1] == "object" ){
						var data = arr[1];
						var id = $53.trim(data.id ? data.id : "");
						var name = $53.trim(data.name ? data.name : "");
						var email = $53.trim(data.email  ? data.email : "");
						var qq = $53.trim(data.qq ? data.qq : "");
						var phone = $53.trim(data.phone ? data.phone : "");
						var company = $53.trim(data.company  ? data.company : "");
						var address = $53.trim(data.address ? data.address : "");
						var notes = $53.trim(data.notes ? data.notes : "");
						var custom_info = $53.trim(data.custom_info ? data.custom_info : "");
						if(custom_info != "" && custom_info.length>40)  return _this.reback('601','custom_info length cannot exceed 40');
						var script_id = 'kf_script_guest';
						var url = hz6d_alias_host+'/kfapi_guest.php?company_id='+companyid+'&guest_id='+hz6d_guest_id+'&u_cust_id='+id+'&u_cust_name='+name+'&email='+email+'&qq='+qq+'&phone='+phone+'&company='+company+'&address='+address+'&notes='+notes+'&custom_info='+custom_info+'&id='+encodeURIComponent(_this.uuid);
						$53.createScript(script_id,url);
						return {code:"201",info:"success"};
					}else {
						return {code:"401",info:"params error"};
					}
					break;
				case "_callBackFun"://ç»å®åè°å½æ°
					var call_back_cmds = ['callMsg',"miniShow","miniHide"];
					var data = {};
					var call_back_cmd = typeof arr[1] == "undefined" ?  "" :  $53.trim(arr[1]);
					if(call_back_cmd == "" || call_back_cmds.indexOf(call_back_cmd)<0){
						return {code:"401",info:"params error"};
					}
					if(typeof arr[2] == "function" ){
						_this.callBackArr[call_back_cmd] = arr[2];
						return {code:"201",info:"success"};
					}else {
						return {code:"401",info:"params error"};
					}
					break;
				default:
					break;
			}
		}
	});
	function _53API(online,terminal,openurl,workers,groups,groupIds){
		this.online = online,
		this.terminal = terminal,
		this.openurl = openurl,
		this.workers = workers,
		this.groups = groups,
		this.groupIds = groupIds,
		this.paramArr = ['cmd','type','group_id','worker_id','msg_callback','mini_show_callbcak','mini_hide_callbcak','mtalk','stat_id',,'member','id','name','lword','msg','email','qq','phone','company','address','notes','custom_info','stat','callphone','callpriphone','id6d','call','logo','title','content','curl','sendtype','custmsg'],
		this.param = {},
		this.callMsg = function(){},    //æ¥æ¶æ¯åè°å½æ°
		this.miniShow = function(){},    //æµ®å¨çªå£æ¾ç¤ºåè°å½æ°
		this.miniHide = function(){},    //æµ®å¨çªå£éèåè°å½æ°
		this.setPopParam = function(param){
			$53.setPopParam(param);
		},
		this.checkGroup = function(group_id){
			var _this = this;
			var groupIds = group_id.split(',');
			for(var i=0;i<groupIds.length;i++){
				if(_this.groupIds.indexOf(groupIds[i]) < 0){
					return false
				}
			}
			return true;
		},
		this.push = function(key,value){     //æ·»å åæ°
			var _this = this;
			if(_this.paramArr.indexOf(key) < 0){
				return _this.reback('401','error param');
			}
			//if(key == 'msg_callback'){
			//	if((typeof value) == 'function'){
			//		_this.callMsg = value;
			//	}else{
			//		return _this.reback('402','msg_callback must be a function');
			//	}
			//}else{
			//	value = $53.trim(value);
			//	if(value == ''){
			//		return _this.reback('403','error value');
			//	}
			//	if(key == 'group_id' && _this.checkGroup(value) === false){
			//		return _this.reback('404','unknown group_id');
			//	}
			//	_this.param[key] = value;
			//}
			switch (key){
				case "msg_callback":
					if((typeof value) == 'function'){
						_this.callMsg = value;
					}else{
						return _this.reback('402','msg_callback must be a function');
					}
					break;
				case "mini_show_callbcak":
					if((typeof value) == 'function'){
						_this.miniShow = value;
					}else{
						return _this.reback('402','mini_show_callbcak must be a function');
					}
					break;
				case "mini_hide_callbcak":
					if((typeof value) == 'function'){
						_this.miniHide = value;
					}else{
						return _this.reback('402','mini_hide_callbcak must be a function');
					}
					break;
				default:
					value = $53.trim(value);
					if(value == ''){
						return _this.reback('403','error value');
					}
					if(key == 'group_id' && _this.checkGroup(value) === false){
						return _this.reback('404','unknown group_id');
					}
					_this.param[key] = value;
					break;
			}
			return _this.reback('201','success',false);
		},
		this.query = function(){    //æ§è¡å½ä»¤
			var _this = this;
			switch(_this.param.cmd){
				case 'kfclient':
					if(_this.param.type != 'new' && _this.param.type != 'popup'){
						return _this.reback('501','error type');
					}
					var group_id = $53.trim(_this.param.group_id);
					var worker_id = $53.trim(_this.param.worker_id);
					var id6d = $53.trim(_this.param.id6d);
					if(((group_id != '' && (worker_id != '' || id6d != '')) || (worker_id != '' && id6d != '')) && !(_this.terminal == 'mobile' && _this.param.type == 'popup')){
						return _this.reback('503','worker_id and group_id and id6d can only choose one');
					}
					var zdkf_type = 1;
					var kf = worker_id;
					if (id6d != '') {
						var workers = $53.data('workers');
						id6ds = id6d.split(',');
						kf = '';
						var tmpid = '';
						for(var i=0; i < id6ds.length; i++){
							if (typeof workers[id6ds[i]] == 'undefined') {
								tmpid = id6ds[i];
							}else{
								tmpid = workers[id6ds[i]].worker_id;
							}
							if (kf != '') tmpid = ','+tmpid;
							kf = kf + tmpid;
						} 
					}
					if(group_id != ''){
						zdkf_type = 3;
						kf = group_id;
					}
					_this.openkf(_this.param.type,zdkf_type,kf);
					return _this.reback('201','success');
					break;
				case 'mtalk':
					var group_id = $53.trim(_this.param.group_id);
					var worker_id = $53.trim(_this.param.worker_id);
					var id6d = $53.trim(_this.param.id6d);
					if(_this.terminal != 'mobile'){
						return _this.reback('301','error terminal');
					}
					if((group_id != '' && (worker_id != '' || id6d != '')) || (worker_id != '' && id6d != '')){
						return _this.reback('303','worker_id and group_id and id6d can only choose one');
					}
					var zdkf_type = 1;
					var kf = worker_id;
					if (id6d != '') {
						var workers = $53.data('workers');
						id6ds = id6d.split(',');
						kf = '';
						var tmpid = '';
						for(var i=0; i < id6ds.length; i++){
							if (typeof workers[id6ds[i]] == 'undefined') {
								tmpid = id6ds[i];
							}else{
								tmpid = workers[id6ds[i]].worker_id;
							}
							if (kf != '') tmpid = ','+tmpid;
							kf = kf + tmpid;
						} 
					}
					if(group_id != ''){
						zdkf_type = 3;
						kf = group_id;
					}
					_this.talk(_this.param.type,zdkf_type,kf);
					return _this.reback('201','success');
					break;
				case 'member':
					var id = $53.trim(_this.param.id ? _this.param.id : "");
					var name = $53.trim(_this.param.name ? _this.param.name : "");
					var email = $53.trim(_this.param.email  ? _this.param.email : "");
					var qq = $53.trim(_this.param.qq ? _this.param.qq : "");
					var phone = $53.trim(_this.param.phone ? _this.param.phone : "");
					var company = $53.trim(_this.param.company  ? _this.param.company : "");
					var address = $53.trim(_this.param.address ? _this.param.address : "");
					var notes = $53.trim(_this.param.notes ? _this.param.notes : "");
					var custom_info = $53.trim(_this.param.custom_info ? _this.param.custom_info : "");
					if(custom_info != "" && custom_info.length>40)  return _this.reback('601','custom_info length cannot exceed 40');
					var script_id = 'kf_script_guest';
					var url = hz6d_alias_host+'/kfapi_guest.php?company_id='+companyid+'&guest_id='+hz6d_guest_id+'&u_cust_id='+id+'&u_cust_name='+name+'&email='+email+'&qq='+qq+'&phone='+phone+'&company='+company+'&address='+address+'&notes='+notes+'&custom_info='+custom_info+'&id='+encodeURIComponent($53.uuid);
					$53.createScript(script_id,url);
					break;	
				case 'status':
					return _this.reback('201',_this.online);
					break;
				case 'grouplist':
					return _this.reback('201',_this.groups);
					break;
				case 'workerlist':
					return _this.reback('201',_this.workers);
					break;
				case 'jzl':
				case 'mxsj':
				case 'xsgl':
					var data = $53.trim(_this.param.stat_id);
					_this.saveData(_this.param.cmd,data);
					break;
				case 'stat':
					var type = $53.trim(_this.param.id);
					var data = $53.trim(_this.param.stat_id);
					_this.saveData(type,data);
				case 'lword':
					var msg = $53.trim(_this.param.msg);
					if(msg == "") return _this.reback('601','msg is null');
					var name = $53.trim(_this.param.name  ? _this.param.name : "");
					var email = $53.trim(_this.param.email  ? _this.param.email : "");
					var qq = $53.trim(_this.param.qq ? _this.param.qq : "");
					var phone = $53.trim(_this.param.phone ? _this.param.phone : "");
					var company = $53.trim(_this.param.company  ? _this.param.company : "");
					var address = $53.trim(_this.param.address ? _this.param.address : "");
					var notes = $53.trim(_this.param.notes ? _this.param.notes : "");
					_this.saveLword(_this.param.cmd,msg,name,email,qq,phone,company,address,notes);
					break;
				case 'callphone':
					var id6d = $53.trim(_this.param.id6d  ? _this.param.id6d : "");
					var call = $53.trim(_this.param.call  ? _this.param.call : "");
					var worker_id = $53.trim(_this.param.worker_id  ? _this.param.worker_id : "");
					var reg = /^((0\d{2,3}-?\d{7,8})|(1[3-9]\d{9}))$/;
					if(call != "" && !reg.test(call)) return _this.reback('601','error call');
					if(id6d=="" && worker_id == "") return _this.reback('602','worker_id and id6d cannot be empty at the same time');
					_this.savePhone(call,id6d,worker_id);
					break;
				case 'callpriphone':
					var worker_id = $53.trim(_this.param.worker_id  ? _this.param.worker_id : "");
					_this.savePriPhone(worker_id);
					break;
				case 'comeinfo':
					var title =  $53.trim(_this.param.title);
					var logo =  $53.trim(_this.param.logo);
					var content =  $53.trim(_this.param.content);
					var curl =  $53.trim(_this.param.curl);
					var sendtype = typeof _this.param.sendtype == "undefined" ? '0' : $53.trim(_this.param.sendtype);
					_this.saveCinfo(logo,title,content,curl,sendtype);
					break;
				case 'custmsg':
					var msg =  $53.trim(_this.param.msg).replace(/<[^>]+>/g,"");
					var type =  $53.trim(_this.param.type);//0ä¸æå¼çªå£ï¼1æå¼æµ®æ¡ï¼2æå¼æ°çªå£
					if(msg == "") 	return _this.reback('601','msg cannot null');
					var callback = "";
					if(type == "1"){
						if(_this.terminal == 'pc'){
							callback = "hz6d_startReautoTimer2(3)";
						}else{
							callback = "change_kf_openurl()";
						}
					}else if(type == "2"){
						if(_this.terminal == 'pc'){
							callback = 'window.open("'+_this.openurl+'","_blank","height=600,width=800,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no")';
						}else{
							callback = 'location.href = "'+_this.openurl+'"';
						}
					}
					_this.saveCustMsg(msg,callback);
					break;
				default:
					return _this.reback('601','error cmd');
					break;
			}
		},
		this.talk = function(type,zdkf_type,kf){
			var _this = this;
			var param = kf != '' ? ('&zdkf_type='+zdkf_type+'&kf='+kf) : '';
			if(_this.terminal == 'mobile'){
				_this.setPopParam(param);
				change_kf_openurl(param);
			}
		},
		this.openkf = function(type,zdkf_type,kf){
			var _this = this;
			var param = kf != '' ? ('&zdkf_type='+zdkf_type+'&kf='+kf) : '';
			if(type == 'new'){
				var url = _this.openurl+param;
				if(_this.terminal == 'pc'){
					window.open(url,"_blank","height=600,width=800,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
				}else{
					location.href = url;
				}
			}else{
				if(_this.terminal == 'pc'){
					_this.setPopParam(param);
					hz6d_startReautoTimer2(3);
				}else{
					show_mobile_chat();
				}
			}
		},
		this.saveData = function(type,data){
			$53.sendData(type,data);
		},
		this.saveLword = function(type,msg,name,email,qq,phone,company,address,notes){
			$53.sendLword(type,msg,name,email,qq,phone,company,address,notes);
		},
		this.savePhone = function(call,id6d,worker_id){
			$53.callPhone(call,id6d,worker_id);
		},
		this.savePriPhone = function(worker_id){
			$53.callPriPhone(worker_id);
		},
		this.saveCinfo = function(logo,title,content,curl,sendtype){
			$53.comeInfo(logo,title,content,curl,sendtype);
		},
		this.saveCustMsg = function(msg,callback){
			$53.addCustMsg(msg,callback);
		}
		this.openUrl = function(url,resize){	//åé¨è°ç¨æ¥å£ ç¨æ¥ç¹å»æå¼å¨è¯¢é¡µé¢
			window.open(url,"_blank","height=470,width=702,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable="+resize+",scrollbars=no,location=no,titlebar=no");
		},
		this.reback = function(code,info,clear){   //è¿åä¿¡æ¯
			var _this = this;
			var data = {};
			if(code == '201'){
				data = {code:code,cmd:_this.param.cmd,info:info};
			}else{
				data = {code:code,info:info};
			}
			if(clear !== false){
				_this.param = {};    //æ¸ç©ºåæ°
			}
			return data;
		}
	}
	// window.open æ¹æ³éå 
	// æ¯æie/ff/chrome/safari/opera 
	var _open = window.open;
	window.open = function(sURL, sName, sFeatures, bReplace) {
		if (sURL == undefined) {
			sURL = ''
		}
		if (sName == undefined) {
			sName = ""
		}
		if (sFeatures == undefined) {
			sFeatures = ""
		}
		if (bReplace == undefined) {
			bReplace = false
		}
		if (/webCompany.php|webClientMin.php/.test(sURL)) {
			sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
		} else if ('$zdyurl' != '') {
			var _zdyurl = '$zdyurl';
			if (sURL.indexOf(_zdyurl) > -1) {
				sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
			}
		}
		try{sURL = sURL.replace('&referer={hz6d_referer}',hz6d_referer);}catch(e){}
		var win = _open(sURL, sName, sFeatures, bReplace);
		return win;
	}
	window.$53 = $53;
})(window);


/* âå¾æ ç¸å³å½æ°â */
	
	function hz6d_html_replace(html)
	{
		if(html.indexOf('{hz6d_keyword}') == -1) {
			return html.replace(/%7Bhz6d_keyword%7D/gim, encodeURIComponent(hz6d_from_page_new) + "&tfrom=1"); 	       
		}else{
			return html.replace(/{hz6d_keyword}/gim, hz6d_from_page_new + "&tfrom=1");
		}		
	}

	function hz6d_is_exist(html){
		if (typeof(hz6d_showContent)  == "function" && hz6d_showContent && typeof(hz6d_ID('hz6d_chatting_iframes')) != undefined){
			hz6d_showContent();
		}else{
			var new_clic = html.replace(/#liyc#/g,"\'");
			eval(decodeURIComponent(new_clic));
		}
	}
	function hz6d_is_exists(html,kf){
		if (typeof(hz6d_showContent)  == "function" && hz6d_showContent && typeof(hz6d_ID('hz6d_chatting_iframes')) != undefined){
			hz6d_showContent(kf);
		}else{
			eval(decodeURIComponent(html));
		}
	}
	// has defined <!DOCTYPE... > 

	function hasdoctype()
	{
		if (document.compatMode == "BackCompat")
		{
			ret = false;
		}
		else
		{
			ret = true;
		}
		return ret;
	}

	function detectBrowser()
	{
		var ret = "ie6"; // default
		var user_agent = navigator.userAgent;
		if (user_agent.indexOf("compatible") > -1)
		{
			if (user_agent.indexOf("MSIE 6.0") > -1)
			{
				ret = "ie6";
			}
			else if (user_agent.indexOf("MSIE 7.0") > -1)
			{
				ret = "ie7";
			}
			else if (user_agent.indexOf("MSIE 8.0") > -1)
			{
				ret = "ie8";
			}
			if (user_agent.indexOf("360") > -1)
			{
				ret = "360";
			}
		}
		else if (user_agent.indexOf("Gecko") > -1)
		{
			ret = "firefox";
		}
		if (user_agent.indexOf("TheWorld") > -1)
		{
			ret = "TheWorld";
		}
		return ret;
	}
	
	// é´è·å°äºæ­¥è¿ï¼åç§»å¨é´è·çè·ç¦» 
	function smoothMove(start, end)
	{
		var step = Math.abs(end - start);
		var forword = end - start;
		if (step > 2)
		{
			step = Math.ceil(step * 0.2) * (forword / Math.abs(forword));
		}
		else
		{
			step = step * (forword / Math.abs(forword));
		}
		posi = start + step;
		if (step > 0)
		{
			if (posi > end) posi = end;
		}
		else
		{
			if (posi < end) posi = end;
		}
		return posi;
	}
	
	var hasdoctype = hasdoctype();
	var browser = detectBrowser();
	// ç¹å»å¾æ è®¾ç½®åé 

function setIsinvited()
{
	try
	{
		onliner_zdfq = 2;
		if (acc_autotype == 3)
		{
			document.cookie = "onliner_zdfq"+companyid+"=" + onliner_zdfq;
		}
	}
	catch (e)
	{}
}
/* âå¾æ ç¸å³å½æ°â */

// è®¾ç½® æ°èè®¿å®¢ 
function set53gidCookie(key,value,expire){
	$53.setCookie(key,value,{
		"expires":expire
	});
	switch(key){
		case '53gid2':
			// new visitor
			$53.setCookie('visitor_type','new');
			break;
		case '53gid0':
			$53.data('is_uv',1);
			break;
		case '53gid1':
			$53.data('is_rv',1);
			break;		
	}
}

if(!$53.getCookie('53gid2')) {
	set53gidCookie('53gid2',hz6d_guest_id,10*365*24*3600);
} else if($53.getCookie('53gid2')) {
	var hz6d_53gid2 = $53.getCookie('53gid2');
	// old visitor
	if(hz6d_guest_id == hz6d_53gid2){
		$53.setCookie('visitor_type','old');
		hz6d_guest_id = $53.getCookie('53gid2'); 
	}else{
		set53gidCookie('53gid2',hz6d_guest_id,10*365*24*3600);
	}
}
// set my site uid -> crm
// set 53kf guest_id è®¾ç½®UV 
if (!$53.getCookie('53gid0')){
	set53gidCookie('53gid0',hz6d_guest_id,$53.getTimeTo24());
} else if($53.getCookie('53gid2')){
	var hz6d_53gid0 = $53.getCookie('53gid0');
	if(hz6d_guest_id == hz6d_53gid0){
		$53.data('is_uv',0);
	}else{
		set53gidCookie('53gid0',hz6d_guest_id,$53.getTimeTo24());
	}
}
// è®¾ç½®RV 
if (!$53.getCookie('53gid1')){
	set53gidCookie('53gid1',hz6d_guest_id,86400);
} else if($53.getCookie('53gid2')){
	var hz6d_53gid1= $53.getCookie('53gid1');
	if(hz6d_guest_id == hz6d_53gid1){
		$53.data('is_rv',0);
	}else{
		set53gidCookie('53gid1',hz6d_guest_id,86400);
	}
}

var is_revisit = 0;
if (!$53.getCookie('53revisit')) {
	$53.setCookie('53revisit',new Date().getTime(),{
		expires:10*365*24*3600,'path':'/'
	});
} else {
	if((new Date().getTime() - $53.getCookie('53revisit')) > 86400000){
		is_revisit = 1;
	}
}

// è·åè®¿é®çå¥å£æ¥æºé¡µé¢:æç´¢å¼æ/å¤é¨é¾æ¥/ç´æ¥è¾å¥ 
var hz6d_from_page = $53.getCookie("53kf_"+companyid+"_keyword");
var hz6d_now_host = window.location.host;
function getHz6dReferer(){
	var referer = "";
	var hz6d_request = $53.getUrlParam();
	var hz6d_tglink = false;
	var search_engine_list = {'baidu':'wd=',
		'haosou':'q=',
		'sogou':'query=',
		'google':'q=',
		'youdao':'q=',
		'sm':'q='
	};
	if(hz6d_request['tgse'] && hz6d_request['tgkwd']){
		hz6d_tglink = 'http://www.' + hz6d_request['tgse'] + '.com/s?' + search_engine_list[hz6d_request['tgse']] + decodeURIComponent(hz6d_request['tgkwd']);
	}
	if(hz6d_tglink){//æ¯å¦æ¯æ¨å¹¿é¡µé¢
		referer = hz6d_tglink;
	}else{
		referer = document.referrer;
	}
	return referer;
}

if(hz6d_from_page == ""){
	hz6d_from_page = getHz6dReferer();
	if(hz6d_now_host != "") $53.setCookie("53kf_"+companyid+"_from_host",hz6d_now_host,{'path':'/'});
}else {
	var hz6d_from_page_referer = getHz6dReferer();
	var hz6d_from_page_host = $53.getUrlHost(hz6d_from_page_referer);
	if(hz6d_from_page_host != "" && hz6d_now_host != "" && hz6d_now_host != hz6d_from_page_host){
		var hz6d_now_hosts_string = $53.getCookie("53kf_"+companyid+"_from_host");
		var hz6d_now_hosts = hz6d_now_hosts_string.split(",");
		if(hz6d_now_hosts.length>0){
			if(hz6d_now_hosts.indexOf(hz6d_from_page_host) == -1){
				hz6d_from_page = hz6d_from_page_referer;
			}
			if(hz6d_now_hosts.indexOf(hz6d_now_host) == -1){
				hz6d_now_hosts_string += ","+hz6d_now_host;
				$53.setCookie("53kf_"+companyid+"_from_host",hz6d_now_hosts_string,{'path':'/'});
			}
		}else {
			hz6d_from_page = hz6d_from_page_referer;
			$53.setCookie("53kf_"+companyid+"_from_host",hz6d_now_host,{'path':'/'});
		}
	}
}
$53.data('page_referer',hz6d_from_page);
$53.setCookie("53kf_"+companyid+"_keyword",hz6d_from_page,{'path':'/'});
//eval("var kf_"+companyid+"_keyword_ok=$53.getCookie('kf_"+companyid+"_keyword_ok');");
//if (!eval("kf_"+companyid+"_keyword_ok"))
//{
//    var hz6d_request = $53.getUrlParam();
//    var hz6d_tglink = false;
//    var search_engine_list = {'baidu':'wd=',
//		'haosou':'q=',
//        'sogou':'query=',
//        'google':'q=',
//        'youdao':'q=',
//        'sm':'q='
//		};
//    if(hz6d_request['tgse'] && hz6d_request['tgkwd']){
//	   hz6d_tglink = 'http://www.' + hz6d_request['tgse'] + '.com/s?' + search_engine_list[hz6d_request['tgse']] + decodeURIComponent(hz6d_request['tgkwd']);
//    }
//    if(hz6d_tglink){//æ¯å¦æ¯æ¨å¹¿é¡µé¢
//        hz6d_from_page = hz6d_tglink;
//    }else{
//        hz6d_from_page = document.referrer;
//    }
//}
//$53.data('page_referer',hz6d_from_page);
//$53.setCookie("53kf_"+companyid+"_keyword",hz6d_from_page,{'path':'/'});
//$53.setCookie("kf_"+companyid+"_keyword_ok",1,{'path':'/'});
hz6d_from_page_new = "&keyword=" + $53.EN(hz6d_from_page);
var acc_browser = $53.getBrowser();
var acc_os = $53.getOs();
var hz6d_land_page = $53.getCookie("53kf_"+companyid+"_land_page");
eval("var kf_"+companyid+"_land_page_ok=$53.getCookie('kf_"+companyid+"_land_page_ok');");

//å¬å¸ç«ç¹
try{ 
	var in_site = false;
	var talk_page_now = window.location.href;
	if(talk_page_now.indexOf('hz6d{') != -1) {
		talk_page_now = talk_page_now.substring(0,talk_page_now.indexOf('hz6d{'));
	}
	var talk_page = window.encodeURIComponent(talk_page_now);
	if (!eval("kf_"+companyid+"_land_page_ok")){
		hz6d_land_page = talk_page;
	}
	var is_null = true;
	if(talk_page_now.indexOf("53kf.com") == -1){
		for (var p in company_site){
			if(company_site.hasOwnProperty(p)){
			is_null = false;
				if(talk_page_now.indexOf(company_site[p].replace(/\\\//g,"/")) != -1){
					in_site = true; 
					break;
				}
			}
		}
		if(is_null) in_site = true;
	}else{
		in_site = true;
	} 
}catch(e){
	in_site = true;
}

if(window.location.href.substr(0,4) == "file") in_site = false;

$53.setCookie("53kf_"+companyid+"_land_page",hz6d_land_page,{'path':'/'});
$53.setCookie("kf_"+companyid+"_land_page_ok",1,{'path':'/'});

var acc_first_time = new Date().getTime();
var acc_get_force = false;

function hz6d_sendACC() {
	var kh_status = 0;
	if(onliner_zdfq==3) { kh_status = 3; }
		// var talk_page_tmp = window.location.href;
		// if(talk_page_tmp.indexOf('hz6d{') != -1) {
		//     talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
		// }
		// var talk_page = window.encodeURIComponent(talk_page_tmp);
		// var kf_time = "$in_timestamp";
		var time = new Date().getTime();
		if(time - acc_first_time > 24*60*60*1000) return;
		var curSecond = Math.floor(time/1000);
		var page_title = document.title;
		//	var url = "$http://$acc_host/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id="+com_id+"&guest_id="+hz6d_guest_id+"&status="+kh_status+"&guest_name=&guest_ip="+ip+"&guest_ip_info="+guest_ip_info+"&from_page="+from_page+"&talk_page="+talk_page+"&kf_time="+kf_time+"&bto_id6d=-99&time="+time + '&ucust_id=' + $53.getCookie('ucust_id') + '&style=' + $style_id + '&is_mobile=n&visitor_type='+$53.getCookie('visitor_type')+'&is_uv='+$53.data('is_uv');
		var url = http_pro + acc_host + "/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id="+companyid+"&guest_id="+hz6d_guest_id+"&status="+kh_status+"&guest_name=&guest_ip="+$53.EN(hz6d_guest_ip)+"&guest_ip_info="+ipstr+"&area="+areastr+"&from_page=" + $53.EN($53.getCookie("53kf_"+companyid+"_keyword")) +"&talk_page="+talk_page+"&kf_time="+in_timestamp+"&bto_id6d=-99&time="+time + '&ucust_id=' + $53.EN($53.getCookie('ucust_id')) + '&style='+hz6d_style_id+'&is_mobile='+$53.isMobile()+'&visitor_type='+$53.getCookie('visitor_type')+'&is_uv='+$53.data('is_uv')+'&browser='+acc_browser+'&os='+acc_os+'&is_revisit='+is_revisit+"&page_title="+$53.EN(page_title);
	if(companyid==72153759) url += "&acc_first_time="+acc_first_time;
	if(cloud_service == "www111" || (hz6d_alias_host.indexOf("w111.53kf.com") !== -1)) url += "&acc_get_force="+acc_get_force;
		$53.createScript("hz6d_send_acc", url);
	var acc_times = 20000;
	if(cloud_service == "www111" || (hz6d_alias_host.indexOf("w111.53kf.com") !== -1) || companyid == 72211675 || companyid == 72212262 || companyid == 72212337 || companyid == 72212338 || companyid == 72212339 || companyid == 72212341 || companyid == 72087813) acc_times = 1000;
		setTimeout("hz6d_sendACC()",acc_times);
}
if (in_site)
hz6d_sendACC();

if(get_gdt_openid == 1){
	var gdt_time = new Date().getTime();
	var gdt_url = "//cm.e.qq.com/cm.fcg?gdt_dspid=8417552&gdt_dsp_checksum="+companyid+"&gdt_dsp_timestamp=" + gdt_time.toString().substr(0,10);
	$53.createScript("hz6d_get_gdt_openid", gdt_url);
}

$53.data("workers",{"":{"worker_id":"","state":0,"bname":""},"10363830":{"worker_id":"0933-deleted","state":0,"bname":""},"10462301":{"worker_id":"0996-deleted","state":0,"bname":""},"10360796":{"worker_id":"douzi@53kf.com","state":0,"bname":""},"10774361":{"worker_id":"1014","state":0,"bname":null},"10094644":{"worker_id":"0521","state":0,"bname":"èé¢ç²"},"10396166":{"worker_id":"11111111111@wofang.com","state":0,"bname":""},"10337311":{"worker_id":"0908","state":0,"bname":""},"10030407":{"worker_id":"0371","state":0,"bname":"é±æä¸"},"10192016":{"worker_id":"0673","state":0,"bname":"æ½ä¼æ"},"10777731":{"worker_id":"1015","state":0,"bname":null},"10092419":{"worker_id":"0509","state":0,"bname":"æåä¿"},"10286499":{"worker_id":"0846","state":0,"bname":""},"10001539":{"worker_id":"panmh","state":0,"bname":"æ½ææµ·"},"10257754":{"worker_id":"0803","state":0,"bname":"çè¶æ¥ "},"10065163":{"worker_id":"0446","state":0,"bname":""},"10408970":{"worker_id":"0969","state":0,"bname":""},"10004020":{"worker_id":"0314","state":0,"bname":"éç»ªå®¶"},"10242940":{"worker_id":"0781","state":0,"bname":""},"10003736":{"worker_id":"0003","state":0,"bname":"äº§åé¡¾é®-æ´é¯17357960510"},"10355984":{"worker_id":"0925","state":0,"bname":""},"10220656":{"worker_id":"0733","state":0,"bname":""},"10082842":{"worker_id":"0490","state":0,"bname":"èè·å¥"},"10199677":{"worker_id":"0690","state":0,"bname":"è£ä¸½äº"},"10151716":{"worker_id":"zhuzi@53kf.com","state":0,"bname":"53å¿«æ-ç«¹å­"},"10064699":{"worker_id":"0445","state":0,"bname":"èå³°"},"10068509":{"worker_id":"engy@53kf.com","state":0,"bname":""},"10391626":{"worker_id":"0959","state":0,"bname":""},"10225385":{"worker_id":"yanzi@53kf.com","state":0,"bname":""},"10097270":{"worker_id":"0538","state":0,"bname":"0538å·å®¢æä¸å"},"10343689":{"worker_id":"0910","state":0,"bname":"0910å·å®¢æä¸å"},"10350522":{"worker_id":"0916","state":0,"bname":""},"10044852":{"worker_id":"0411","state":0,"bname":"å¼ å­å­"},"10264819":{"worker_id":"zhangyuzhi@jiuzhilan.com","state":0,"bname":""},"10198861":{"worker_id":"zhuzi-2@53kf.com","state":0,"bname":"53å¿«æ-ç«¹å­"},"10179675":{"worker_id":"0652","state":0,"bname":""},"10086652":{"worker_id":"0500","state":0,"bname":"é­é¢"},"10284098":{"worker_id":"0845","state":0,"bname":""},"10040709":{"worker_id":"0399","state":0,"bname":"é»ä¼"},"10095898":{"worker_id":"0532","state":0,"bname":"0532å·å®¢æä¸å"},"10004017":{"worker_id":"0069","state":0,"bname":"ä¸ä¸é¡¾é®ä¸"},"10036977":{"worker_id":"0382","state":0,"bname":"æ³æµ·æ"},"10013472":{"worker_id":"0325","state":0,"bname":"æ¹è¿"},"10132779":{"worker_id":"0462","state":0,"bname":"éè"},"10015347":{"worker_id":"0328","state":0,"bname":"éå®æ±"},"10379334":{"worker_id":"0953","state":0,"bname":""},"10323149":{"worker_id":"0886-deleted","state":0,"bname":""},"10244061":{"worker_id":"0785","state":0,"bname":""},"10295402":{"worker_id":"0782","state":0,"bname":""},"10374667":{"worker_id":"0001","state":0,"bname":""},"10219743":{"worker_id":"0730","state":0,"bname":"éè³æ¢"},"10025342":{"worker_id":"0355","state":0,"bname":"çä¿æµ©"},"10003829":{"worker_id":"0157","state":0,"bname":"èèè"},"10255943":{"worker_id":"0800","state":0,"bname":""},"10135039":{"worker_id":"0599","state":0,"bname":"é«éåº·"},"10151697":{"worker_id":"0611","state":1,"bname":"è¡æè¯­"},"10258662":{"worker_id":"0805","state":0,"bname":"çµç¿è®¾è®¡ä¸å"},"10372636":{"worker_id":"0945","state":0,"bname":""},"10141498":{"worker_id":"0606","state":0,"bname":"å¾æ°"},"10125298":{"worker_id":"0583","state":0,"bname":"æ±ä¸è¶"},"10620701":{"worker_id":"1005","state":0,"bname":null},"10023042":{"worker_id":"0350","state":0,"bname":"éèµå"},"10065856":{"worker_id":"0453","state":0,"bname":"å´ç±"},"10003808":{"worker_id":"0295","state":0,"bname":"èµµä¸½è"},"10149521":{"worker_id":"0608","state":0,"bname":"éç«æ°"},"10235288":{"worker_id":"0762","state":0,"bname":"å¨æ¨æ"},"10008447":{"worker_id":"0322","state":0,"bname":"å¨èå¨¥"},"10613231":{"worker_id":"1004-deleted","state":0,"bname":null},"10208338":{"worker_id":"0706","state":0,"bname":"å¼ éé¨"},"10172244":{"worker_id":"0642","state":0,"bname":"éé"},"10068534":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10221669":{"worker_id":"0737","state":0,"bname":"çç¦ç"},"10406030":{"worker_id":"0967-deleted","state":0,"bname":""},"10264561":{"worker_id":"0813","state":0,"bname":""},"10379514":{"worker_id":"0954","state":0,"bname":""},"10428397":{"worker_id":"0981","state":0,"bname":""},"10160825":{"worker_id":"0624","state":0,"bname":"ä¿åå¸"},"10040194":{"worker_id":"0397","state":0,"bname":"æ¨æ°ä¸»"},"10068515":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10054193":{"worker_id":"0430","state":0,"bname":"ççç²"},"10069260":{"worker_id":"0464","state":0,"bname":"è£æ·å©·"},"10003875":{"worker_id":"0091","state":0,"bname":"æ´ä¹"},"10244793":{"worker_id":"0788","state":0,"bname":""},"10264821":{"worker_id":"zhanghua@jiuzhilan.com","state":0,"bname":""},"10003718":{"worker_id":"0301","state":0,"bname":"æµ·ç¿äºé¡¾é®"},"10349637":{"worker_id":"0915","state":0,"bname":""},"10000382":{"worker_id":"0000","state":0,"bname":""},"10296807":{"worker_id":"0856","state":0,"bname":"0856å·å®¢æä¸å"},"10135033":{"worker_id":"0603","state":0,"bname":"ä½å½å½"},"10032264":{"worker_id":"0375","state":0,"bname":"æ¹æå¥"},"10003830":{"worker_id":"0291","state":0,"bname":"ææé¨"},"10003823":{"worker_id":"0250","state":0,"bname":"çç¨"},"10101451":{"worker_id":"0547","state":0,"bname":"å¾å½¬"},"10216219":{"worker_id":"0719","state":0,"bname":"å¨æ¶"},"10020200":{"worker_id":"0339","state":0,"bname":"éå¹³å»º"},"10031748":{"worker_id":"0374","state":0,"bname":"ä¸¥æå"},"10114737":{"worker_id":"0568","state":0,"bname":"ç½ä¸¹"},"10160257":{"worker_id":"xingzi@53kf.com","state":0,"bname":"53å¿«æ-æå­"},"10308772":{"worker_id":"0868","state":0,"bname":""},"10106681":{"worker_id":"0557","state":0,"bname":"é­æµ©äº®"},"10096296":{"worker_id":"0537","state":0,"bname":"å»é£é£"},"10029306":{"worker_id":"0368","state":0,"bname":"å§å¤ä¸½"},"10286496":{"worker_id":"0847","state":0,"bname":""},"10257319":{"worker_id":"0802","state":0,"bname":""},"10400005":{"worker_id":"0965","state":0,"bname":""},"10312348":{"worker_id":"0873","state":0,"bname":""},"10189881":{"worker_id":"0667","state":0,"bname":"èé¯"},"10259595":{"worker_id":"0806","state":0,"bname":"0806å·ææ¯æ¯æ"},"10187231":{"worker_id":"0662","state":0,"bname":"éæ·»æ·»"},"10200456":{"worker_id":"0695","state":0,"bname":"å¾æ¨"},"10130956":{"worker_id":"lizi@53kf.com","state":0,"bname":"æå­"},"10135036":{"worker_id":"0601","state":0,"bname":"åº·æ´å¯"},"10083169":{"worker_id":"0494","state":0,"bname":""},"10029180":{"worker_id":"0364","state":0,"bname":"ç³é¹ç¨"},"10055965":{"worker_id":"0432","state":0,"bname":"å¼ è"},"10265079":{"worker_id":"0816","state":0,"bname":""},"10205462":{"worker_id":"0698","state":0,"bname":"å¶ä¼¦æ°"},"10003807":{"worker_id":"0238","state":0,"bname":"é»æ¡å"},"10075447":{"worker_id":"0472","state":0,"bname":"éå¯å"},"10319020":{"worker_id":"0878","state":0,"bname":""},"10096293":{"worker_id":"0535","state":0,"bname":"å­ç¼è½½"},"10073695":{"worker_id":"0470","state":0,"bname":"æ±ªæ°¸åº­"},"10154540":{"worker_id":"0616","state":0,"bname":"éå"},"10328050":{"worker_id":"0895","state":0,"bname":""},"10121885":{"worker_id":"0577","state":0,"bname":"æåå¼"},"10101323":{"worker_id":"0545","state":0,"bname":"é·ä¸äº"},"10260459":{"worker_id":"0810","state":0,"bname":""},"10170600":{"worker_id":"0634","state":0,"bname":"æ²çé²"},"10082906":{"worker_id":"0491","state":0,"bname":"åææ"},"10238576":{"worker_id":"0772","state":0,"bname":""},"10155535":{"worker_id":"0619","state":0,"bname":"çå®å®"},"10264816":{"worker_id":"fengzhouning@jiuzhilan.com","state":0,"bname":""},"10176135":{"worker_id":"haizi@53kf.com","state":0,"bname":"53å¿«æ-æµ·å­"},"10044461":{"worker_id":"0409","state":0,"bname":"0409å·å®¢æä¸å"},"10135041":{"worker_id":"0598","state":0,"bname":"çé¯"},"10015348":{"worker_id":"0329","state":0,"bname":"éæ¢¦å¸"},"10352285":{"worker_id":"0921","state":0,"bname":""},"10194008":{"worker_id":"0677","state":0,"bname":"çé¢"},"10221452":{"worker_id":"0736","state":0,"bname":"çé"},"10056023":{"worker_id":"0433","state":0,"bname":"æé"},"10634481":{"worker_id":"1007","state":0,"bname":null},"10067447":{"worker_id":"0457","state":0,"bname":"ä½æ¨"},"10003870":{"worker_id":"0281","state":0,"bname":"æ´ªè"},"10073453":{"worker_id":"0469","state":0,"bname":"éè³è"},"10068503":{"worker_id":"0460","state":0,"bname":"è¿å²©"},"10184005":{"worker_id":"0658","state":0,"bname":"çæ­å³°"},"10095899":{"worker_id":"0531","state":0,"bname":"é©¬ç¾¤è³"},"10173906":{"worker_id":"0643","state":0,"bname":"å´æ°è¾"},"10264818":{"worker_id":"yaozhengguang@jiuzhilan.com","state":0,"bname":""},"10230670":{"worker_id":"0758","state":0,"bname":"å¾å»ºä¼"},"10237630":{"worker_id":"0768","state":0,"bname":""},"10268997":{"worker_id":"zhoumy@53kf.com","state":0,"bname":"null"},"10117136":{"worker_id":"0570","state":0,"bname":"çå®ä¹¾"},"10255935":{"worker_id":"0801","state":0,"bname":""},"10190686":{"worker_id":"0668","state":0,"bname":"æç«"},"10017300":{"worker_id":"0335","state":0,"bname":"é¬å"},"10398509":{"worker_id":"2222222222@test.com","state":0,"bname":""},"10033963":{"worker_id":"0380","state":0,"bname":"é»å®½"},"10036976":{"worker_id":"0383","state":0,"bname":"è£å·§è³"},"10174350":{"worker_id":"0644","state":0,"bname":"ç¨è·¯"},"10048377":{"worker_id":"0418","state":0,"bname":"å¾æ­ä¸"},"10273229":{"worker_id":"jiangzi@53kf.com","state":0,"bname":""},"10255942":{"worker_id":"0799","state":0,"bname":""},"10243196":{"worker_id":"0783","state":0,"bname":""},"10430664":{"worker_id":"0987-deleted","state":0,"bname":""},"10151696":{"worker_id":"0610","state":0,"bname":"å¼ å¸"},"10003828":{"worker_id":"0106","state":0,"bname":"è®¸æ"},"10384106":{"worker_id":"0955","state":0,"bname":"åå"},"10136784":{"worker_id":"muzi@53kf.com","state":0,"bname":""},"10165902":{"worker_id":"0629","state":0,"bname":"æ¨æ¢¦ä½³"},"10003809":{"worker_id":"0198","state":0,"bname":"éæ¢äº®"},"10301304":{"worker_id":"0861","state":0,"bname":"null"},"10329665":{"worker_id":"0896","state":0,"bname":""},"10121978":{"worker_id":"0578","state":0,"bname":"æ¨éé¹"},"10111459":{"worker_id":"0567","state":0,"bname":"çæ°"},"10083008":{"worker_id":"0493","state":0,"bname":"æç¥é³"},"10076085":{"worker_id":"0476","state":0,"bname":"0476å·å®¢æä¸å"},"10023043":{"worker_id":"0349","state":0,"bname":"èç¿é¢"},"10166012":{"worker_id":"0630","state":0,"bname":"çç¾"},"10075842":{"worker_id":"0473","state":0,"bname":"å»ç§é"},"10195076":{"worker_id":"0681","state":0,"bname":"æä¸¹"},"10420873":{"worker_id":"0972","state":0,"bname":""},"10081124":{"worker_id":"0483","state":0,"bname":"æ±äºå³°"},"10212232":{"worker_id":"haizi-2@53kf.com","state":0,"bname":"53å¿«æ-æµ·å­"},"10363831":{"worker_id":"0934","state":0,"bname":""},"10463799":{"worker_id":"1001","state":0,"bname":""},"10094645":{"worker_id":"0522","state":0,"bname":""},"10187548":{"worker_id":"0664","state":0,"bname":"è°¢ç±"},"10423768":{"worker_id":"0975","state":0,"bname":"0975å·ææ¯æ¯æ"},"10013285":{"worker_id":"0318","state":0,"bname":"å°æ´ª"},"10249708":{"worker_id":"0794","state":0,"bname":""},"10142715":{"worker_id":"zaozi@53kf.com","state":0,"bname":"æ£å­"},"10001538":{"worker_id":"0191","state":0,"bname":"èµµç¿ "},"10120633":{"worker_id":"0575","state":0,"bname":"éèªæ°"},"10092418":{"worker_id":"0510","state":0,"bname":"é»é¢é°"},"10414151":{"worker_id":"0970","state":0,"bname":""},"10119558":{"worker_id":"0574","state":0,"bname":"æ±éª"},"10232846":{"worker_id":"0760","state":0,"bname":"å­ç"},"10108838":{"worker_id":"0563","state":0,"bname":"ç³æå¨"},"10177411":{"worker_id":"0647","state":0,"bname":"éæ­å½¬"},"10355985":{"worker_id":"0926","state":0,"bname":""},"10078649":{"worker_id":"0480","state":0,"bname":"æ±ç¦¾"},"10096260":{"worker_id":"0534","state":0,"bname":"å¼ å¦"},"10151717":{"worker_id":"douzi@53kf.com","state":0,"bname":"53å¿«æ-è±å­"},"10348956":{"worker_id":"0914","state":0,"bname":""},"10003849":{"worker_id":"0283","state":0,"bname":"53å¿«æ-æ¢å­"},"10150789":{"worker_id":"0609","state":0,"bname":"ææº"},"10255713":{"worker_id":"0797","state":0,"bname":"éåä¾"},"10351790":{"worker_id":"0920","state":0,"bname":""},"10004021":{"worker_id":"0313","state":0,"bname":"å¼ è·¯é"},"10016463":{"worker_id":"0332","state":0,"bname":"0332å·å®¢æä¸å"},"10178522":{"worker_id":"0651","state":0,"bname":""},"10039614":{"worker_id":"0391","state":0,"bname":"åé¦è¿"},"10160976":{"worker_id":"0625","state":0,"bname":"ä»ç³ç"},"10287269":{"worker_id":"0849","state":0,"bname":""},"10244733":{"worker_id":"0787","state":0,"bname":""},"10111464":{"worker_id":"0564","state":0,"bname":"åéå¾·"},"10323102":{"worker_id":"0885","state":0,"bname":""},"10091649":{"worker_id":"0508","state":0,"bname":"ä½è"},"10003827":{"worker_id":"0048","state":0,"bname":"53å¿«æ-è²å­"},"10172175":{"worker_id":"chengyz@53kf.com","state":0,"bname":""},"10102024":{"worker_id":"0548","state":0,"bname":"æ¨æ¨"},"10276220":{"worker_id":"0831","state":0,"bname":"0831å·å®¢æä¸å"},"10281992":{"worker_id":"0842","state":0,"bname":""},"10252125":{"worker_id":"0795","state":0,"bname":""},"10359458":{"worker_id":"0931","state":0,"bname":""},"10023516":{"worker_id":"0351","state":0,"bname":"æ½è´¤å¹"},"10154541":{"worker_id":"0615","state":0,"bname":"æ¹å°å·"},"10372638":{"worker_id":"0946","state":0,"bname":"123"},"10391042":{"worker_id":"0958","state":0,"bname":""},"10309608":{"worker_id":"0869","state":0,"bname":""},"10170867":{"worker_id":"shanzi@53kf.com","state":0,"bname":"53å¿«æ-å±±å­"},"10071902":{"worker_id":"0467","state":0,"bname":"æ¨ç§é¦"},"10015383":{"worker_id":"0320","state":0,"bname":"è°­å¯è¶"},"10171857":{"worker_id":"0637","state":0,"bname":"è°­ç£"},"10180386":{"worker_id":"0654","state":0,"bname":"é»ä½³æ"},"10265991":{"worker_id":"0817","state":0,"bname":""},"10227040":{"worker_id":"0753","state":0,"bname":"çæ²»é¢"},"10005459":{"worker_id":"0317","state":0,"bname":"è°­éé"},"10326843":{"worker_id":"0891","state":0,"bname":""},"10181837":{"worker_id":"0656","state":0,"bname":"ä½æ­"},"10081403":{"worker_id":"0489","state":0,"bname":"è¡é"},"10052088":{"worker_id":"0426","state":0,"bname":"è¯¸èå©å©"},"10095352":{"worker_id":"0526","state":0,"bname":"æå®è"},"10191806":{"worker_id":"shizi-2@53kf.com","state":0,"bname":"53å¿«æ-æ¿å­"},"10003843":{"worker_id":"0235","state":0,"bname":"çæ"},"10331864":{"worker_id":"0898-deleted","state":0,"bname":""},"10003850":{"worker_id":"0113","state":0,"bname":"å¾å·¡å¤©"},"10097442":{"worker_id":"0539","state":0,"bname":"å·´æ¶¦å"},"10238577":{"worker_id":"0773","state":0,"bname":""},"10065364":{"worker_id":"0452","state":0,"bname":"çèæ©"},"10027162":{"worker_id":"0356","state":0,"bname":"é»ä¼ç« "},"10343691":{"worker_id":"0911","state":0,"bname":""},"10430680":{"worker_id":"0988","state":0,"bname":""},"10293339":{"worker_id":"0853","state":0,"bname":""},"10291948":{"worker_id":"0852","state":0,"bname":"æµ·ç¿äºé¡¾é®"},"10203726":{"worker_id":"0696","state":0,"bname":"å¾å©å©"},"10194540":{"worker_id":"0678","state":0,"bname":"è®¸æ æ "},"10094967":{"worker_id":"0525","state":0,"bname":"ç½å¨"},"10280624":{"worker_id":"0840","state":0,"bname":""},"10229407":{"worker_id":"0755","state":0,"bname":"é¶å»ºå½"},"10780401":{"worker_id":"1016","state":0,"bname":null},"10046485":{"worker_id":"0416","state":0,"bname":"èè¿"},"10406031":{"worker_id":"0968","state":0,"bname":""},"10030863":{"worker_id":"0372","state":0,"bname":"æ´ç£"},"10068535":{"worker_id":"0463","state":0,"bname":"è¿å²©"},"10128140":{"worker_id":"0585","state":0,"bname":"å¾å²©"},"10020852":{"worker_id":"0308","state":0,"bname":"ææ¬¢"},"10421891":{"worker_id":"0973","state":0,"bname":""},"10209653":{"worker_id":"0709","state":0,"bname":"æ±æé"},"10061357":{"worker_id":"0441","state":0,"bname":"é©¬å°"},"10172172":{"worker_id":"0639","state":0,"bname":"ä½æå¯"},"10028579":{"worker_id":"0361","state":0,"bname":"æ± èª"},"10237629":{"worker_id":"0769","state":0,"bname":"æ´æå®"},"10043314":{"worker_id":"0407","state":0,"bname":"éæ¶"},"10224067":{"worker_id":"0747","state":0,"bname":"é²èª"},"10221858":{"worker_id":"0738","state":0,"bname":"å¼ éªé"},"10004079":{"worker_id":"0303","state":0,"bname":"ç½æå®"},"10060875":{"worker_id":"8808","state":0,"bname":"8808å·å®¢æä¸å"},"10259998":{"worker_id":"0808","state":0,"bname":""},"10301299":{"worker_id":"jiangt@53kf.com","state":0,"bname":"null"},"10064697":{"worker_id":"0444","state":0,"bname":"å´äºæ³"},"10054192":{"worker_id":"0431","state":0,"bname":"æ½ææµ·"},"10078648":{"worker_id":"0481","state":0,"bname":"çä»é¾"},"10067712":{"worker_id":"0459","state":0,"bname":"é«è½"},"10264820":{"worker_id":"caoxiaoran@jiuzhilan.com","state":0,"bname":""},"10267272":{"worker_id":"0819","state":0,"bname":""},"10287266":{"worker_id":"0848","state":0,"bname":""},"10425962":{"worker_id":"0978","state":0,"bname":""},"10052087":{"worker_id":"0427","state":0,"bname":"0427å·å®¢æä¸å"},"10264473":{"worker_id":"0812","state":0,"bname":""},"10328766":{"worker_id":"leizi@53kf.com","state":0,"bname":""},"10046482":{"worker_id":"0414","state":0,"bname":"æä¹"},"10181836":{"worker_id":"0655","state":0,"bname":"å°é³"},"10032265":{"worker_id":"0376","state":0,"bname":"å¾è§ç­± "},"10253675":{"worker_id":"0796","state":0,"bname":""},"10177562":{"worker_id":"0649","state":0,"bname":"é»æµ©ç¶"},"10258071":{"worker_id":"chenjl@53kf.com","state":0,"bname":"null"},"10350569":{"worker_id":"0917","state":0,"bname":""},"10174654":{"worker_id":"0645","state":0,"bname":"çµç¿è®¾è®¡ä¸å"},"10423498":{"worker_id":"0974","state":0,"bname":""},"10031749":{"worker_id":"0373","state":0,"bname":"å¾å­æ·¦"},"10020201":{"worker_id":"0338","state":0,"bname":"å¾æ¶"},"10010932":{"worker_id":"0100","state":0,"bname":"é»èæ³¢"},"10433745":{"worker_id":"0989","state":0,"bname":""},"10327674":{"worker_id":"0893","state":0,"bname":""},"10758541":{"worker_id":"jiangzi@53kf.com","state":0,"bname":null},"10003831":{"worker_id":"0312","state":0,"bname":"é²å³°"},"10124685":{"worker_id":"0582","state":0,"bname":"èµµå¥"},"10090388":{"worker_id":"0505","state":0,"bname":"éæ¨"},"10274854":{"worker_id":"0830","state":0,"bname":""},"10396168":{"worker_id":"3333333333@wofang.com","state":0,"bname":""},"10206004":{"worker_id":"muzi-2@53kf.com","state":0,"bname":"53å¿«æ-æ¨å­"},"10003810":{"worker_id":"0249","state":0,"bname":"éå¿å¼º"},"10220158":{"worker_id":"0731","state":0,"bname":"ç§¦æä¼¦"},"10088768":{"worker_id":"0503","state":0,"bname":"åªä¸æ°"},"10219081":{"worker_id":"0727","state":0,"bname":"åæ¯å²"},"10003859":{"worker_id":"0271","state":0,"bname":"ä¸°æ³å¹"},"10108837":{"worker_id":"0562","state":0,"bname":"éåæ"},"10048981":{"worker_id":"0421","state":0,"bname":"å¾é¹é£"},"10267614":{"worker_id":"0820","state":0,"bname":""},"10220627":{"worker_id":"0732","state":0,"bname":"å¾é¶å©·"},"10028581":{"worker_id":"0362","state":0,"bname":"å»ç²é¦"},"10196625":{"worker_id":"0684","state":0,"bname":"éå¹å¹"},"10003803":{"worker_id":"0127","state":0,"bname":"çé¨ç"},"10734311":{"worker_id":"1012","state":0,"bname":null},"10092417":{"worker_id":"0511","state":0,"bname":"å¢ç"},"10076919":{"worker_id":"0478","state":0,"bname":"å´åº·"},"10367199":{"worker_id":"0937-deleted","state":0,"bname":""},"10003864":{"worker_id":"bd@53kf.com","state":0,"bname":""},"10241388":{"worker_id":"0777","state":0,"bname":"0777å·å®¢æä¸å"},"10085401":{"worker_id":"0498","state":0,"bname":"æç¦å´"},"10213047":{"worker_id":"0715","state":0,"bname":"å¾å·"},"10070348":{"worker_id":"0465","state":0,"bname":"0465å·å®¢æä¸å"},"10295978":{"worker_id":"0855","state":0,"bname":""},"10198798":{"worker_id":"0687","state":0,"bname":"é¥¶åé"},"10147392":{"worker_id":"shanzi@53kf.com","state":0,"bname":""},"10132719":{"worker_id":"0591","state":0,"bname":"èµæå¨"},"10085412":{"worker_id":"0497","state":0,"bname":"éæ­ä¸"},"10313719":{"worker_id":"0874","state":0,"bname":""},"10310039":{"worker_id":"0870","state":0,"bname":""},"10177499":{"worker_id":"0648","state":0,"bname":"çè¾"},"10073454":{"worker_id":"0468","state":0,"bname":"å´ç«å¨"},"10170824":{"worker_id":"0635","state":0,"bname":"ççº¢ä¸½"},"10043315":{"worker_id":"0406","state":0,"bname":"éå¯"},"10013939":{"worker_id":"0326","state":0,"bname":"ç¨çµç¶"},"10353578":{"worker_id":"0923","state":0,"bname":""},"10173782":{"worker_id":"chengzi@53kf.com","state":0,"bname":""},"10260447":{"worker_id":"0809","state":0,"bname":""},"10103138":{"worker_id":"0550","state":0,"bname":"æ±éå®"},"10008445":{"worker_id":"0323","state":0,"bname":"å­èºè"},"10095896":{"worker_id":"0533","state":0,"bname":"åºä½³å¦®"},"10133680":{"worker_id":"0594","state":0,"bname":"æ¥¼æä¸½"},"10425432":{"worker_id":"0977","state":0,"bname":""},"10104211":{"worker_id":"0554","state":0,"bname":"è°¢æ°é£"},"10003845":{"worker_id":"0167","state":0,"bname":"é¶ææ§"},"10328018":{"worker_id":"0894","state":0,"bname":""},"10319414":{"worker_id":"0879","state":0,"bname":""},"10154542":{"worker_id":"0617","state":0,"bname":"æ±ç¬ç"},"10029304":{"worker_id":"0366","state":0,"bname":"éç°"},"10040196":{"worker_id":"0396","state":0,"bname":"ä¸°æ¯å "},"10371694":{"worker_id":"0940","state":0,"bname":""},"10052632":{"worker_id":"0428","state":0,"bname":"éç"},"10310514":{"worker_id":"0866","state":0,"bname":""},"10096294":{"worker_id":"0536","state":0,"bname":"åé¯"},"10028582":{"worker_id":"0363","state":0,"bname":"æ²æ­£ä¼"},"10203986":{"worker_id":"0697","state":0,"bname":"å´ä½³åµ"},"10226733":{"worker_id":"0752","state":0,"bname":"æå­è±ª"},"10604061":{"worker_id":"1003","state":0,"bname":null},"10093422":{"worker_id":"0518","state":0,"bname":"0518å·å®¢æä¸å"},"10001536":{"worker_id":"0299","state":0,"bname":"å¾çå´"},"10240506":{"worker_id":"0776","state":0,"bname":"å§èè¬"},"10305124":{"worker_id":"0864","state":0,"bname":"null"},"10122998":{"worker_id":"0579","state":0,"bname":"0579å·ææ¯æ¯æ"},"10003813":{"worker_id":"0297","state":0,"bname":"å¼ çä¸¹"},"10219122":{"worker_id":"0729","state":0,"bname":"éµå¢ä»"},"10003832":{"worker_id":"0296","state":0,"bname":"ç¨æå½©"},"10081128":{"worker_id":"0486","state":0,"bname":"æ½æé"},"10367284":{"worker_id":"0673","state":0,"bname":""},"10036974":{"worker_id":"0385","state":0,"bname":"å¾è±ª"},"10346740":{"worker_id":"0912","state":0,"bname":""},"10184840":{"worker_id":"0660","state":0,"bname":"å´æ¯æ°"},"10037183":{"worker_id":"0386","state":0,"bname":"ç½å¸¸"},"10223707":{"worker_id":"0746","state":0,"bname":"ä¸¥å®å®¶"},"10065365":{"worker_id":"0451","state":0,"bname":"é©ç»§åµ"},"10111462":{"worker_id":"0565","state":0,"bname":"éç§è"},"10211922":{"worker_id":"0711","state":0,"bname":"å¯æµ·å"},"10433769":{"worker_id":"0990","state":0,"bname":""},"10428554":{"worker_id":"0983","state":0,"bname":""},"10310784":{"worker_id":"0872","state":0,"bname":""},"10194801":{"worker_id":"0679","state":0,"bname":"ç½å¯æ¾"},"10032314":{"worker_id":"0377","state":0,"bname":"0377å·å®¢æä¸å"},"10004031":{"worker_id":"0254","state":0,"bname":"æå³°"},"10195402":{"worker_id":"0682","state":0,"bname":"å¨å¢è¾°"},"10235132":{"worker_id":"0761","state":0,"bname":"ä¸¥éªç¦"},"10003767":{"worker_id":"0298","state":0,"bname":"æ±æ"},"10167554":{"worker_id":"douzi@53kf.com","state":0,"bname":"53å¿«æ-è±å­"},"10334899":{"worker_id":"0903","state":0,"bname":""},"10001531":{"worker_id":"0041","state":0,"bname":"å´äºæ³"},"10003816":{"worker_id":"0139","state":0,"bname":"0139å·å®¢æä¸å"},"10264813":{"worker_id":"hanbing@jiuzhilan.com","state":0,"bname":""},"10093421":{"worker_id":"0519","state":0,"bname":"æ½ç¤¼å"},"10092591":{"worker_id":"0512","state":0,"bname":"é®èµ"},"10334160":{"worker_id":"0901","state":0,"bname":""},"10271270":{"worker_id":"0827","state":0,"bname":""},"10003814":{"worker_id":"0310","state":0,"bname":"å¾è¸"},"10221033":{"worker_id":"0735","state":0,"bname":"å®ççº¢"},"10324721":{"worker_id":"0888","state":0,"bname":""},"10267231":{"worker_id":"0818","state":0,"bname":""},"10336780":{"worker_id":"0907","state":0,"bname":""},"10282699":{"worker_id":"0843","state":0,"bname":"0843å·å®¢æä¸å"},"10225731":{"worker_id":"0685","state":0,"bname":"éç§è±"},"10364529":{"worker_id":"0935","state":0,"bname":""},"10068511":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10396167":{"worker_id":"2222222222@wofang.com","state":0,"bname":""},"10260469":{"worker_id":"0810","state":0,"bname":""},"10003824":{"worker_id":"0270","state":0,"bname":"èµå¼ºå¼º"},"10095902":{"worker_id":"0529","state":0,"bname":"æ¯ç¾å´"},"10329671":{"worker_id":"xinzi@53kf.com","state":0,"bname":""},"10270984":{"worker_id":"0826","state":0,"bname":""},"10057030":{"worker_id":"0435","state":0,"bname":"çæè´"},"10362399":{"worker_id":"0932-deleted","state":0,"bname":""},"10304148":{"worker_id":"liux@53kf.com","state":0,"bname":"null"},"10004009":{"worker_id":"0205","state":0,"bname":"æ½çç"},"10238546":{"worker_id":"0770","state":0,"bname":""},"10208181":{"worker_id":"0705","state":0,"bname":"ä½å¼ºç"},"10206581":{"worker_id":"0701","state":0,"bname":"ææµ·æ"},"10029952":{"worker_id":"0369","state":0,"bname":"å²³è±æ°"},"10352287":{"worker_id":"0922","state":0,"bname":""},"10265090":{"worker_id":"0815","state":0,"bname":""},"10108777":{"worker_id":"0561","state":0,"bname":"åå°"},"10816021":{"worker_id":"1017","state":0,"bname":"1017å·å®¢æä¸å"},"10192852":{"worker_id":"0675","state":0,"bname":"è®¸æ¬£é"},"10003872":{"worker_id":"0176","state":0,"bname":"åé"},"10103934":{"worker_id":"0553","state":0,"bname":"åå"},"10067445":{"worker_id":"0458","state":0,"bname":"çåæ¶"},"10235519":{"worker_id":"0763","state":0,"bname":"åç»­å"},"10009862":{"worker_id":"0324","state":0,"bname":"0324å·å®¢æä¸å"},"10076087":{"worker_id":"0474","state":0,"bname":"ç« è¡¡"},"10021253":{"worker_id":"0344","state":0,"bname":"æå°å¾®"},"10021516":{"worker_id":"0346","state":0,"bname":"èèªé²"},"10027161":{"worker_id":"0357","state":0,"bname":"æ´çå¤"},"10157562":{"worker_id":"0621","state":0,"bname":"ä½èª"},"10093070":{"worker_id":"0514","state":0,"bname":"æ¹è"},"10267633":{"worker_id":"0821","state":0,"bname":""},"10027660":{"worker_id":"0358","state":0,"bname":"æ¨å©å¹³"},"10224584":{"worker_id":"0748","state":0,"bname":"é²æ­é¾"},"10018076":{"worker_id":"0336","state":0,"bname":"0336å·ææ¯æ¯æ"},"10135043":{"worker_id":"0604","state":0,"bname":"ä¾¯å¤"},"10030252":{"worker_id":"0370","state":0,"bname":"éæ¬¢"},"10223628":{"worker_id":"0744","state":0,"bname":"åé«"},"10057032":{"worker_id":"0436","state":0,"bname":"å¼ æ"},"10191083":{"worker_id":"0640","state":0,"bname":"ç¨åºå±"},"10056420":{"worker_id":"0434","state":0,"bname":"éµå©"},"10107248":{"worker_id":"0559","state":0,"bname":"ææ±å³°"},"10111460":{"worker_id":"0566","state":0,"bname":"èæé¾"},"10213692":{"worker_id":"0717","state":0,"bname":"é­è·"},"10065865":{"worker_id":"0455","state":0,"bname":"éµè¹è¹"},"10102706":{"worker_id":"0549","state":0,"bname":"æ½å°ä¸½"},"10216989":{"worker_id":"0721","state":0,"bname":"é±æç¥"},"10221859":{"worker_id":"0739","state":0,"bname":"å¼ å°"},"10003852":{"worker_id":"0287","state":0,"bname":"é»èµé§"},"10376537":{"worker_id":"0950","state":0,"bname":""},"10277682":{"worker_id":"0832","state":0,"bname":""},"10087810":{"worker_id":"0501","state":0,"bname":"èµµæç"},"10195105":{"worker_id":"chengzi-2@53kf.com","state":0,"bname":"53å¿«æ-æ©å­"},"10163001":{"worker_id":"0627","state":0,"bname":"0627å·å®¢æ"},"10559751":{"worker_id":"xingzi@53kf.com","state":0,"bname":null},"10218362":{"worker_id":"0726","state":0,"bname":"ççµå¿"},"10188183":{"worker_id":"muzi-2@53kf.com","state":0,"bname":""},"10372640":{"worker_id":"0947","state":0,"bname":""},"10046481":{"worker_id":"0413","state":0,"bname":"å¯æ¥ç"},"10094646":{"worker_id":"0523","state":0,"bname":"å¤æ¥"},"10076545":{"worker_id":"0477","state":0,"bname":"ç°æé¾"},"10246783":{"worker_id":"0792","state":0,"bname":""},"10317434":{"worker_id":"0877","state":0,"bname":""},"10225806":{"worker_id":"0751","state":0,"bname":"æé¾"},"10264817":{"worker_id":"zhenxiaoshuai@jiuzhilan.com","state":0,"bname":""},"10004015":{"worker_id":"0262","state":0,"bname":"ä»»å¿å¼º"},"10452744":{"worker_id":"0994","state":0,"bname":""},"10100266":{"worker_id":"0544","state":0,"bname":"0544å·å®¢æä¸å"},"10197252":{"worker_id":"chenqy","state":0,"bname":"éç§è±"},"10081127":{"worker_id":"0485","state":0,"bname":"é·é°çª"},"10155534":{"worker_id":"0618","state":0,"bname":"èå«æ±"},"10019788":{"worker_id":"1001","state":0,"bname":""},"10396164":{"worker_id":"15171176982@wofang.com","state":0,"bname":""},"10369156":{"worker_id":"0938","state":0,"bname":""},"10222482":{"worker_id":"0741","state":0,"bname":"åè¶å"},"10652381":{"worker_id":"1010","state":0,"bname":null},"10235998":{"worker_id":"0765","state":0,"bname":"å¯äºç"},"10216988":{"worker_id":"0722","state":0,"bname":"ä¸ä¸é¡¾é®"},"10212198":{"worker_id":"0713","state":0,"bname":"é¾çäº¿"},"10187453":{"worker_id":"0663","state":0,"bname":"éç¸ç§"},"10232467":{"worker_id":"0759","state":0,"bname":"åæé»"},"10015353":{"worker_id":"0330","state":0,"bname":"æ±ªå¹³å¹³"},"10057406":{"worker_id":"0437","state":0,"bname":"éé¦ä½©"},"10244279":{"worker_id":"0786","state":0,"bname":""},"10351246":{"worker_id":"0918","state":0,"bname":""},"10217123":{"worker_id":"0723","state":0,"bname":"éç¿ å¥³"},"10152556":{"worker_id":"0613","state":0,"bname":"é¢æ¯é¾"},"10033965":{"worker_id":"0378","state":0,"bname":"è²åé±"},"10399138":{"worker_id":"67244581@qq.com","state":0,"bname":""},"10003806":{"worker_id":"0004","state":0,"bname":"åºå°ä¿"},"10004022":{"worker_id":"03080","state":0,"bname":"ææ¬¢"},"10003834":{"worker_id":"0289","state":0,"bname":"çå°é¾"},"10133079":{"worker_id":"0588","state":0,"bname":"é©¬åè±ª"},"10394010":{"worker_id":"0961","state":0,"bname":""},"10171696":{"worker_id":"0636","state":0,"bname":"å¼ ä¸¹ä¸¹"},"10320139":{"worker_id":"0881","state":0,"bname":""},"10058579":{"worker_id":"0439","state":0,"bname":"æçç¶"},"10133084":{"worker_id":"0587","state":0,"bname":"é·è¶"},"10212333":{"worker_id":"0714","state":0,"bname":"ç¿æ"},"10689271":{"worker_id":"1011","state":0,"bname":null},"10239007":{"worker_id":"0774","state":0,"bname":"éè"},"10093423":{"worker_id":"0517","state":0,"bname":"å¨ç¥"},"10281228":{"worker_id":"0841","state":0,"bname":""},"10271757":{"worker_id":"0828","state":0,"bname":""},"10020591":{"worker_id":"0343","state":0,"bname":"å¼ ææ"},"10103137":{"worker_id":"0551","state":0,"bname":"ä¸¥æ¢¦ä¿"},"10222627":{"worker_id":"0742","state":0,"bname":"å­å¯å©·"},"10093424":{"worker_id":"0516","state":0,"bname":"çå¥å³°"},"10208705":{"worker_id":"0707","state":0,"bname":"è°­ææ³¢"},"10211613":{"worker_id":"0710","state":0,"bname":"åä¼"},"10036975":{"worker_id":"0384","state":0,"bname":"èµææ"},"10037633":{"worker_id":"0387","state":0,"bname":"æææ°"},"10434556":{"worker_id":"0991","state":0,"bname":""},"10135037":{"worker_id":"0600","state":0,"bname":"é±å­å­"},"10371232":{"worker_id":"0939","state":0,"bname":""},"10245454":{"worker_id":"0790","state":0,"bname":""},"10219101":{"worker_id":"0728","state":0,"bname":"çæ¥è"},"10228944":{"worker_id":"0754","state":0,"bname":"éè§å"},"10298502":{"worker_id":"caixy@53kf.com","state":0,"bname":"null"},"10156432":{"worker_id":"jiangzi@53kf.com","state":0,"bname":"53å¿«æ-æ±å­"},"10779221":{"worker_id":"liuzi@53kf.com","state":0,"bname":null},"10019790":{"worker_id":"1003","state":0,"bname":""},"10046484":{"worker_id":"0415","state":0,"bname":"æ´ªè¯æ¶µ"},"10123745":{"worker_id":"0580","state":0,"bname":"è®¸ä¿è¾"},"10223627":{"worker_id":"0743","state":0,"bname":"é©¬ç¶ç¶"},"10325047":{"worker_id":"0889","state":0,"bname":""},"10078343":{"worker_id":"0479","state":0,"bname":"æé²"},"10225176":{"worker_id":"0750","state":0,"bname":"ä¸å¶ä»ª"},"10134121":{"worker_id":"0597","state":0,"bname":"è£ç¬ç¬"},"10042454":{"worker_id":"0402","state":0,"bname":"çä¾"},"10101324":{"worker_id":"0546","state":0,"bname":"é»æ­¥ä¹"},"10020594":{"worker_id":"0342","state":0,"bname":"æ¹ä½³"},"10268101":{"worker_id":"lizi@53kf.com","state":0,"bname":""},"10396186":{"worker_id":"18682480795@wofang.com","state":0,"bname":""},"10050525":{"worker_id":"0425","state":0,"bname":"èå¿è¾"},"10426550":{"worker_id":"0979","state":0,"bname":""},"10040202":{"worker_id":"0398","state":0,"bname":"ç®¡å°æ°"},"10016457":{"worker_id":"0331","state":0,"bname":"æ¨æ¶¦ç"},"10453006":{"worker_id":"0995","state":0,"bname":""},"10076086":{"worker_id":"0475","state":0,"bname":"è¡éå"},"10270585":{"worker_id":"0825","state":0,"bname":""},"10157563":{"worker_id":"0622","state":0,"bname":"äºè¾¾æ´"},"10191460":{"worker_id":"0671","state":0,"bname":"å¶å°èª"},"10216428":{"worker_id":"0720","state":0,"bname":"çæµ©ç¨"},"10198409":{"worker_id":"0686","state":0,"bname":"å¼ çè¾"},"10290065":{"worker_id":"0851","state":0,"bname":"0851å·å®¢æä¸å"},"10189184":{"worker_id":"0666","state":0,"bname":"é²æä¸¹"},"10178442":{"worker_id":"0650","state":0,"bname":"éç¿"},"10003821":{"worker_id":"0269","state":0,"bname":"å¨ç£"},"10296973":{"worker_id":"0857","state":0,"bname":""},"10118691":{"worker_id":"0571","state":0,"bname":"éå¶ç¿"},"10115372":{"worker_id":"0569","state":0,"bname":"èå¯ç¨"},"10261321":{"worker_id":"shanzi@53kf.com","state":0,"bname":""},"10160330":{"worker_id":"0623","state":0,"bname":"ç¨çæ"},"10243128":{"worker_id":"0782","state":0,"bname":""},"10021625":{"worker_id":"0348","state":0,"bname":"å´å©µå¨"},"10003841":{"worker_id":"0258","state":0,"bname":"ä½æ°´æ "},"10299635":{"worker_id":"0859","state":0,"bname":"null"},"10003856":{"worker_id":"bd@53kf.com","state":0,"bname":""},"10196317":{"worker_id":"0683","state":0,"bname":"æçç"},"10003965":{"worker_id":"0302","state":0,"bname":"0302å·å®¢æä¸å"},"10039840":{"worker_id":"0393","state":0,"bname":"æ¨æ°ä¸»"},"10242114":{"worker_id":"0779","state":0,"bname":""},"10042455":{"worker_id":"0401","state":0,"bname":"éµåº"},"10402275":{"worker_id":"0966","state":0,"bname":""},"10463278":{"worker_id":"1000-deleted","state":0,"bname":""},"10003819":{"worker_id":"0306","state":0,"bname":"53å¿«æ-æ å­"},"10609131":{"worker_id":"tizi@53kf.com","state":0,"bname":null},"10169094":{"worker_id":"0632","state":0,"bname":"é¾æ§çº"},"10003838":{"worker_id":"0243","state":0,"bname":"éµç§èª"},"10003847":{"worker_id":"0311","state":0,"bname":"é©¬éè"},"10099038":{"worker_id":"0543","state":0,"bname":"å¨æç"},"10241617":{"worker_id":"0778","state":0,"bname":""},"10261171":{"worker_id":"0810","state":0,"bname":""},"10221032":{"worker_id":"0734","state":0,"bname":"é»ä¸¹é¯"},"10198863":{"worker_id":"0689","state":0,"bname":"çé¡ºå³£"},"10098610":{"worker_id":"0541","state":0,"bname":"0541å·ææ¯æ¯æ"},"10217977":{"worker_id":"0724","state":0,"bname":"å¨ä¸é"},"10017268":{"worker_id":"0333","state":0,"bname":"éå¨"},"10399047":{"worker_id":"0964","state":0,"bname":""},"10282734":{"worker_id":"0844","state":0,"bname":""},"10003840":{"worker_id":"0285","state":0,"bname":"æ¢æµ·æ»"},"10048380":{"worker_id":"0417","state":0,"bname":"éæ¶"},"10105316":{"worker_id":"0555","state":0,"bname":"å¾è"},"10376250":{"worker_id":"0949","state":0,"bname":""},"10268971":{"worker_id":"0823","state":0,"bname":""},"10302849":{"worker_id":"0862","state":0,"bname":"äºå¼å«-æå­"},"10095903":{"worker_id":"0528","state":0,"bname":"æè¶"},"10003825":{"worker_id":"0263","state":0,"bname":"çæ³¢"},"10090726":{"worker_id":"0506","state":0,"bname":"éåæ³¢"},"10004678":{"worker_id":"0276","state":0,"bname":"ä¸ä¸é¡¾é®ä¸"},"10348515":{"worker_id":"0913","state":0,"bname":""},"10015345":{"worker_id":"0327","state":0,"bname":"å¼ ææ"},"10164125":{"worker_id":"shizi@53kf.com","state":0,"bname":"53å¿«æ-æ¿å­"},"10041265":{"worker_id":"0400","state":0,"bname":"æ¹ä¿"},"10003857":{"worker_id":"0304","state":0,"bname":"å¨å´åª"},"10577581":{"worker_id":"1002-deleted","state":0,"bname":null},"10235881":{"worker_id":"0764","state":0,"bname":"è¡æ·è´"},"10323718":{"worker_id":"0887","state":0,"bname":""},"10141499":{"worker_id":"0607","state":0,"bname":"è®¸å¯ç³"},"10236789":{"worker_id":"0767","state":0,"bname":"18758580610"},"10135035":{"worker_id":"0602","state":0,"bname":"ä½æ¯å®"},"10357578":{"worker_id":"0928","state":0,"bname":""},"10255478":{"worker_id":"0733","state":0,"bname":""},"10215167":{"worker_id":"zaozi-2@53kf.com","state":0,"bname":""},"10372634":{"worker_id":"0943","state":0,"bname":""},"10430659":{"worker_id":"0986","state":0,"bname":""},"10416107":{"worker_id":"0971","state":0,"bname":""},"10229408":{"worker_id":"0756","state":0,"bname":"é­è®­æ¹"},"10642241":{"worker_id":"1009-deleted","state":0,"bname":null},"10065368":{"worker_id":"0448","state":0,"bname":"éªææ"},"10236786":{"worker_id":"0766","state":0,"bname":"æçå¡"},"10188266":{"worker_id":"0665","state":0,"bname":"é­å¹æ£®"},"10103136":{"worker_id":"0552","state":0,"bname":"è©¹æ·±æ"},"10365069":{"worker_id":"0936","state":0,"bname":""},"10207057":{"worker_id":"0702","state":0,"bname":"éä½å¿«"},"10003860":{"worker_id":"bd@53kf.com","state":0,"bname":""},"10248884":{"worker_id":"test@53kf.com","state":0,"bname":""},"10223629":{"worker_id":"0745","state":0,"bname":"å¾æ°"},"10325049":{"worker_id":"0890","state":0,"bname":""},"10243824":{"worker_id":"0784","state":0,"bname":""},"10334650":{"worker_id":"0902","state":0,"bname":""},"10247378":{"worker_id":"0793","state":0,"bname":""},"10050522":{"worker_id":"0423","state":0,"bname":"å¾ç"},"10462636":{"worker_id":"0997-deleted","state":0,"bname":""},"10029236":{"worker_id":"0365","state":0,"bname":"ç¬¦èä¼"},"10065366":{"worker_id":"0450","state":0,"bname":"è¤å¿è¶"},"10048822":{"worker_id":"0420","state":0,"bname":"çåå¬"},"10021517":{"worker_id":"0345","state":0,"bname":"åå³»å³°"},"10003835":{"worker_id":"0286","state":0,"bname":"0286å·ææ¯æ¯æ"},"10378078":{"worker_id":"maizi@53kf.com","state":0,"bname":""},"10214181":{"worker_id":"0718","state":0,"bname":"æ¨å®æ³¢"},"10239390":{"worker_id":"0775","state":0,"bname":""},"10093071":{"worker_id":"0513","state":0,"bname":"æ¢æé"},"10043316":{"worker_id":"0404","state":0,"bname":"å»ç´«å¨"},"10245156":{"worker_id":"0789","state":0,"bname":""},"10208863":{"worker_id":"0708","state":0,"bname":"çå¨"},"10171969":{"worker_id":"0638","state":0,"bname":"å¼ ç»§é­"},"10068538":{"worker_id":"chenli","state":0,"bname":""},"10068505":{"worker_id":"0461","state":0,"bname":"éè"},"10028091":{"worker_id":"0359","state":0,"bname":"éªè¾¾"},"10131444":{"worker_id":"0586","state":0,"bname":"éç"},"10293677":{"worker_id":"0854","state":0,"bname":""},"10002233":{"worker_id":"0275","state":0,"bname":"53å¿«æ-æå­"},"10068516":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10024640":{"worker_id":"0352","state":0,"bname":"éèä½"},"10053023":{"worker_id":"0429","state":0,"bname":"çå®"},"10064696":{"worker_id":"0443","state":0,"bname":"è£ç¬ç¬"},"10040197":{"worker_id":"0395","state":0,"bname":"èä¸¹å¹³"},"10085400":{"worker_id":"0499","state":0,"bname":"éåç½"},"10081404":{"worker_id":"0488","state":0,"bname":"éä¸½é"},"10264810":{"worker_id":"xiaolingling@jiuzhilan.com","state":0,"bname":""},"10133681":{"worker_id":"0595","state":0,"bname":"é«å¸"},"10161142":{"worker_id":"0626","state":0,"bname":"éæ"},"10218210":{"worker_id":"0725","state":0,"bname":"ç« ä¼"},"10221908":{"worker_id":"0740","state":0,"bname":"æéµ"},"10444023":{"worker_id":"0992","state":0,"bname":""},"10003844":{"worker_id":"0247","state":0,"bname":"åæ¶"},"10018330":{"worker_id":"0337","state":0,"bname":"å¨å£æ°"},"10020755":{"worker_id":"guizi","state":0,"bname":"æ¡å­"},"10372320":{"worker_id":"0942","state":0,"bname":""},"10088842":{"worker_id":"0502","state":0,"bname":"éµæå"},"10451171":{"worker_id":"0993-deleted","state":0,"bname":""},"10044848":{"worker_id":"0412","state":0,"bname":"å¼ ä¿éª"},"10048555":{"worker_id":"0419","state":0,"bname":"æ±¤æ´ªæ´"},"10024645":{"worker_id":"0353","state":0,"bname":"ææ¥æ"},"10133679":{"worker_id":"0593","state":0,"bname":"åç¤¼æ"},"10310402":{"worker_id":"0871","state":0,"bname":""},"10268695":{"worker_id":"0822","state":0,"bname":""},"10394009":{"worker_id":"0960","state":0,"bname":""},"10003812":{"worker_id":"0067","state":0,"bname":"0067å·å®¢æä¸å"},"10376929":{"worker_id":"0951","state":0,"bname":""},"10118689":{"worker_id":"0573","state":0,"bname":"é±å è"},"10429836":{"worker_id":"0985","state":0,"bname":""},"10174866":{"worker_id":"0646","state":0,"bname":"æ¾å¿é£"},"10107249":{"worker_id":"0560","state":0,"bname":"æ¹è·è¾"},"10229534":{"worker_id":"0757-deleted","state":0,"bname":"åºç¿¡"},"10029305":{"worker_id":"0367","state":0,"bname":"é«æ"},"10132518":{"worker_id":"0590","state":0,"bname":"ä¿é"},"10039612":{"worker_id":"0392","state":0,"bname":"éå°ä¸¹"},"10326844":{"worker_id":"0892","state":0,"bname":""},"10345296":{"worker_id":"taozi@53kf.com","state":0,"bname":""},"10191459":{"worker_id":"0670","state":0,"bname":"åå¾·ç³"},"10242928":{"worker_id":"0780","state":0,"bname":""},"10734331":{"worker_id":"1013","state":0,"bname":null},"10094648":{"worker_id":"0524","state":0,"bname":"çä½³ä¸½"},"10002234":{"worker_id":"taozi@53kf.com","state":0,"bname":""},"10003820":{"worker_id":"0293","state":0,"bname":"æ²æé³"},"10274845":{"worker_id":"0830","state":0,"bname":""},"10123859":{"worker_id":"0581","state":0,"bname":"ä½ä¿æ°"},"10126590":{"worker_id":"0584","state":0,"bname":"éæ"},"10081129":{"worker_id":"0487","state":0,"bname":"æ´è±æ°"},"10003833":{"worker_id":"0222","state":0,"bname":"0222å·ææ¯æ¯æ"},"10332510":{"worker_id":"0899","state":0,"bname":""},"10462637":{"worker_id":"0998-deleted","state":0,"bname":""},"10323073":{"worker_id":"0884","state":0,"bname":""},"10354742":{"worker_id":"0924","state":0,"bname":""},"10003851":{"worker_id":"0256","state":0,"bname":"å´å»ºå"},"10095769":{"worker_id":"0527","state":0,"bname":"èµµæé³"},"10462618":{"worker_id":"0999-deleted","state":0,"bname":""},"10071898":{"worker_id":"0466","state":0,"bname":"éå©"},"10238548":{"worker_id":"0771","state":0,"bname":"å¢é"},"10701081":{"worker_id":"shanzi@53kf.com","state":0,"bname":null},"10372318":{"worker_id":"0941","state":0,"bname":""},"10321758":{"worker_id":"0883","state":0,"bname":""},"10424575":{"worker_id":"0976","state":0,"bname":""},"10314220":{"worker_id":"0876","state":0,"bname":""},"10357577":{"worker_id":"0927","state":0,"bname":""},"10139052":{"worker_id":"0605","state":0,"bname":"æå¹å"},"10560251":{"worker_id":"haizi@53kf.com","state":0,"bname":null},"10374288":{"worker_id":"0948","state":0,"bname":""},"10004014":{"worker_id":"0060","state":0,"bname":"æ­äº®"},"10191754":{"worker_id":"0672","state":0,"bname":"å¨å¿æ"},"10075166":{"worker_id":"0471","state":0,"bname":"0471å·å®¢æä¸å"},"10290064":{"worker_id":"0850","state":0,"bname":""},"10107247":{"worker_id":"0558","state":0,"bname":"åæ·è±"},"10020595":{"worker_id":"0340","state":0,"bname":"ææ¢¨"},"10199791":{"worker_id":"0692-deleted","state":0,"bname":"å§æ"},"10082905":{"worker_id":"0492","state":0,"bname":"å¶æ¹"},"10042453":{"worker_id":"0403","state":0,"bname":"èä¸"},"10163002":{"worker_id":"0628","state":0,"bname":"å¨æ¾"},"10050524":{"worker_id":"0424","state":0,"bname":"éå°ä¿"},"10313720":{"worker_id":"0875","state":0,"bname":""},"10106682":{"worker_id":"0556","state":0,"bname":"æ´ç¬ç¬"},"10255714":{"worker_id":"0798","state":0,"bname":""},"10179676":{"worker_id":"0653","state":0,"bname":"å¶å¸"},"10184344":{"worker_id":"0659","state":0,"bname":"é±çº¢"},"10134120":{"worker_id":"0596","state":0,"bname":"å¾ä¸°éª"},"10172178":{"worker_id":"0641","state":0,"bname":"åé£"},"10246593":{"worker_id":"0791","state":0,"bname":""},"10090969":{"worker_id":"0507","state":0,"bname":"çç§"},"10628201":{"worker_id":"1006","state":0,"bname":null},"10095901":{"worker_id":"0530","state":0,"bname":"ä¿æº"},"10206579":{"worker_id":"0700","state":0,"bname":"èææ·"},"10067446":{"worker_id":"0456","state":0,"bname":"å¼ æµæ"},"10263299":{"worker_id":"xingzi@53kf.com","state":0,"bname":""},"10213299":{"worker_id":"0716","state":0,"bname":"å¼ å¯è"},"10118690":{"worker_id":"0572","state":0,"bname":"0572å·å®¢æä¸å"},"10099037":{"worker_id":"0542","state":0,"bname":"ä¿ä¸¹"},"10024642":{"worker_id":"0354","state":0,"bname":"ç« å½åµ"},"10003818":{"worker_id":"0273","state":0,"bname":"çå¬"},"10264470":{"worker_id":"0811","state":0,"bname":""},"10372635":{"worker_id":"0944","state":0,"bname":"hualala"},"10015623":{"worker_id":"0315","state":0,"bname":"ææ°¸è¶"},"10428236":{"worker_id":"0980","state":0,"bname":""},"10034222":{"worker_id":"0381","state":0,"bname":"ä¸ä¸é¡¾é®äº"},"10343542":{"worker_id":"0909","state":0,"bname":""},"10028101":{"worker_id":"0360","state":0,"bname":"æ²å§å¥"},"10065369":{"worker_id":"0447","state":0,"bname":"é«æ°¸å³°"},"10013685":{"worker_id":"zhengjp@53kf.com","state":0,"bname":"éä¿é¹"},"10003839":{"worker_id":"pengcx@53kf.com","state":0,"bname":"å½­è¶æ­"},"10084512":{"worker_id":"0495","state":0,"bname":"0495å·ææ¯æ¯æ"},"10399046":{"worker_id":"0963-deleted","state":0,"bname":""},"10081123":{"worker_id":"0482","state":0,"bname":"ææ´ªé"},"10320375":{"worker_id":"0882","state":0,"bname":""},"10182836":{"worker_id":"0657","state":0,"bname":"éå"},"10198806":{"worker_id":"0688","state":0,"bname":"å¨æ¿"},"10319419":{"worker_id":"0880","state":0,"bname":""},"10195077":{"worker_id":"0680","state":0,"bname":"æè³"},"10152419":{"worker_id":"0614","state":0,"bname":"å´å¿æ"},"10013282":{"worker_id":"0319","state":0,"bname":"éåé"},"10004025":{"worker_id":"0264","state":0,"bname":"ç¿å æº"},"10156434":{"worker_id":"leizi@53kf.com","state":0,"bname":"53å¿«æ-é·å­"},"10151743":{"worker_id":"0612","state":0,"bname":"é»è£è¡"},"10307819":{"worker_id":"0867","state":0,"bname":""},"10190826":{"worker_id":"0669","state":0,"bname":"é»è"},"10003811":{"worker_id":"0290","state":0,"bname":"é¢ä¼ä¼"},"10132517":{"worker_id":"0589","state":0,"bname":"é»è"},"10120770":{"worker_id":"0576","state":0,"bname":"æéªè¾"},"10098609":{"worker_id":"0540","state":0,"bname":"éæé"},"10038992":{"worker_id":"0390","state":0,"bname":"å§ä½³éª"},"10259596":{"worker_id":"0807","state":0,"bname":"0807å·ææ¯æ¯æ"},"10088767":{"worker_id":"0504","state":0,"bname":"æ²ç°"},"10428471":{"worker_id":"0982","state":0,"bname":""},"10272638":{"worker_id":"0829","state":0,"bname":""},"10156467":{"worker_id":"0620","state":0,"bname":"å§å¥å½­"},"10429839":{"worker_id":"0984","state":0,"bname":""},"10058580":{"worker_id":"0438","state":0,"bname":"æ½äºå"},"10081126":{"worker_id":"0484","state":0,"bname":"æè¾°"},"10224837":{"worker_id":"0749","state":0,"bname":"é«å³°"},"10377759":{"worker_id":"0952","state":0,"bname":""},"10065367":{"worker_id":"0449","state":0,"bname":"å½­é¬å¥"},"10044462":{"worker_id":"0408","state":0,"bname":"éå½å»º"},"10396165":{"worker_id":"12345678911@wofang.com","state":0,"bname":""},"10389341":{"worker_id":"0957","state":0,"bname":""},"10084510":{"worker_id":"0496","state":0,"bname":"å¾æµ©"},"10017269":{"worker_id":"0334","state":0,"bname":"å¼ çäº®"},"10004016":{"worker_id":"0277","state":0,"bname":"ææ"},"10388062":{"worker_id":"0956","state":0,"bname":""},"10207542":{"worker_id":"0703","state":0,"bname":"å´æ¶µå"},"10038126":{"worker_id":"0388","state":0,"bname":"éæé£"},"10003815":{"worker_id":"0105","state":0,"bname":"0105å·å®¢æä¸å"},"10003869":{"worker_id":"0227","state":0,"bname":"æå£æ¢¯"},"10044554":{"worker_id":"0410","state":0,"bname":"éæé£"},"10194000":{"worker_id":"0676","state":0,"bname":"èµµå¿è±ª"},"10330829":{"worker_id":"0897","state":0,"bname":""},"10015404":{"worker_id":"0321","state":0,"bname":"å¨é¨"},"10062101":{"worker_id":"0442","state":0,"bname":"å¼ è¶"},"10642231":{"worker_id":"1008","state":0,"bname":null},"10295404":{"worker_id":"0091","state":0,"bname":"å·¥ç¨å¸"},"10033964":{"worker_id":"0379","state":0,"bname":"å§åè¾"},"10040198":{"worker_id":"0394","state":0,"bname":"ç« ä¸½å¨"},"10264670":{"worker_id":"0814","state":0,"bname":""},"10206272":{"worker_id":"0699","state":0,"bname":"æ±ªä¸½ç"},"10004011":{"worker_id":"0196","state":0,"bname":"å¾ä¹"},"10021592":{"worker_id":"0347","state":0,"bname":"èäº®"},"10169037":{"worker_id":"0631","state":0,"bname":"èµµåä¼"},"10093852":{"worker_id":"0520","state":0,"bname":"ææ¸"},"10199876":{"worker_id":"0693","state":0,"bname":"æ¹å­ä¼"},"10212199":{"worker_id":"0712","state":0,"bname":"é±æç²"},"10050521":{"worker_id":"0422","state":0,"bname":"åé²"},"10003858":{"worker_id":"0020","state":0,"bname":"0020å·å®¢æä¸å"},"10038200":{"worker_id":"0389","state":0,"bname":"å§æ¢¦ç¼"},"10001693":{"worker_id":"0046","state":0,"bname":"ä½ä¿æ "},"10306701":{"worker_id":"0865","state":0,"bname":""},"10020590":{"worker_id":"0341","state":0,"bname":"çæå¼º"},"10199919":{"worker_id":"0694","state":0,"bname":"å¤å°ä¼"},"10358003":{"worker_id":"0929","state":0,"bname":""},"10335466":{"worker_id":"0904","state":0,"bname":""},"10185283":{"worker_id":"0661","state":0,"bname":"ä½è¯ä¹"},"10169861":{"worker_id":"0633","state":0,"bname":"æ±ä¸¹ä¸½"},"10199787":{"worker_id":"0691","state":0,"bname":"è°¢çå®"},"10178664":{"worker_id":"leizi@53kf.com","state":0,"bname":"53å¿«æ-é·å­"},"10058578":{"worker_id":"0440","state":0,"bname":"å¾å½¦"},"10093068":{"worker_id":"0515","state":0,"bname":"å¨å¥"},"10329949":{"worker_id":"zaozi@53kf.com","state":0,"bname":""}});$53.data("groups",{"38623605":{"group_name":"å¿«å®¢æBU","workers":["10003965","10343689","10689271","10777731"]},"38627005":{"group_name":"äºå®¢æéå®BUå®¢æ","workers":["10003816","10060875","10816021"]},"19745305":{"group_name":"WiseCRM","workers":["10034222","10004017"]},"38623705":{"group_name":"ææ¯æ¯æ","workers":["10423768","10428471"]}});$53.data("shunt_info",{"shunt_type":"1"});$53.data("area_shunt",{});$53.data("source_shunt",{});$53.data("channel_shunt",{});$53.data("over_flow",{"overflow_type":"3","overflow_value":"38623605"});$53.data("over_flow_schedule",{});$53.data("of_all_worker",{"":{"worker_id":"","state":0,"bname":""},"10363830":{"worker_id":"0933-deleted","state":0,"bname":""},"10462301":{"worker_id":"0996-deleted","state":0,"bname":""},"10360796":{"worker_id":"douzi@53kf.com","state":0,"bname":""},"10774361":{"worker_id":"1014","state":0,"bname":null},"10094644":{"worker_id":"0521","state":0,"bname":"èé¢ç²"},"10396166":{"worker_id":"11111111111@wofang.com","state":0,"bname":""},"10337311":{"worker_id":"0908","state":0,"bname":""},"10030407":{"worker_id":"0371","state":0,"bname":"é±æä¸"},"10192016":{"worker_id":"0673","state":0,"bname":"æ½ä¼æ"},"10777731":{"worker_id":"1015","state":0,"bname":null},"10092419":{"worker_id":"0509","state":0,"bname":"æåä¿"},"10286499":{"worker_id":"0846","state":0,"bname":""},"10001539":{"worker_id":"panmh","state":0,"bname":"æ½ææµ·"},"10257754":{"worker_id":"0803","state":0,"bname":"çè¶æ¥ "},"10065163":{"worker_id":"0446","state":0,"bname":""},"10408970":{"worker_id":"0969","state":0,"bname":""},"10004020":{"worker_id":"0314","state":0,"bname":"éç»ªå®¶"},"10242940":{"worker_id":"0781","state":0,"bname":""},"10003736":{"worker_id":"0003","state":0,"bname":"äº§åé¡¾é®-æ´é¯17357960510"},"10355984":{"worker_id":"0925","state":0,"bname":""},"10220656":{"worker_id":"0733","state":0,"bname":""},"10082842":{"worker_id":"0490","state":0,"bname":"èè·å¥"},"10199677":{"worker_id":"0690","state":0,"bname":"è£ä¸½äº"},"10151716":{"worker_id":"zhuzi@53kf.com","state":0,"bname":"53å¿«æ-ç«¹å­"},"10064699":{"worker_id":"0445","state":0,"bname":"èå³°"},"10068509":{"worker_id":"engy@53kf.com","state":0,"bname":""},"10391626":{"worker_id":"0959","state":0,"bname":""},"10225385":{"worker_id":"yanzi@53kf.com","state":0,"bname":""},"10097270":{"worker_id":"0538","state":0,"bname":"0538å·å®¢æä¸å"},"10343689":{"worker_id":"0910","state":0,"bname":"0910å·å®¢æä¸å"},"10350522":{"worker_id":"0916","state":0,"bname":""},"10044852":{"worker_id":"0411","state":0,"bname":"å¼ å­å­"},"10264819":{"worker_id":"zhangyuzhi@jiuzhilan.com","state":0,"bname":""},"10198861":{"worker_id":"zhuzi-2@53kf.com","state":0,"bname":"53å¿«æ-ç«¹å­"},"10179675":{"worker_id":"0652","state":0,"bname":""},"10086652":{"worker_id":"0500","state":0,"bname":"é­é¢"},"10284098":{"worker_id":"0845","state":0,"bname":""},"10040709":{"worker_id":"0399","state":0,"bname":"é»ä¼"},"10095898":{"worker_id":"0532","state":0,"bname":"0532å·å®¢æä¸å"},"10004017":{"worker_id":"0069","state":0,"bname":"ä¸ä¸é¡¾é®ä¸"},"10036977":{"worker_id":"0382","state":0,"bname":"æ³æµ·æ"},"10013472":{"worker_id":"0325","state":0,"bname":"æ¹è¿"},"10132779":{"worker_id":"0462","state":0,"bname":"éè"},"10015347":{"worker_id":"0328","state":0,"bname":"éå®æ±"},"10379334":{"worker_id":"0953","state":0,"bname":""},"10323149":{"worker_id":"0886-deleted","state":0,"bname":""},"10244061":{"worker_id":"0785","state":0,"bname":""},"10295402":{"worker_id":"0782","state":0,"bname":""},"10374667":{"worker_id":"0001","state":0,"bname":""},"10219743":{"worker_id":"0730","state":0,"bname":"éè³æ¢"},"10025342":{"worker_id":"0355","state":0,"bname":"çä¿æµ©"},"10003829":{"worker_id":"0157","state":0,"bname":"èèè"},"10255943":{"worker_id":"0800","state":0,"bname":""},"10135039":{"worker_id":"0599","state":0,"bname":"é«éåº·"},"10151697":{"worker_id":"0611","state":1,"bname":"è¡æè¯­"},"10258662":{"worker_id":"0805","state":0,"bname":"çµç¿è®¾è®¡ä¸å"},"10372636":{"worker_id":"0945","state":0,"bname":""},"10141498":{"worker_id":"0606","state":0,"bname":"å¾æ°"},"10125298":{"worker_id":"0583","state":0,"bname":"æ±ä¸è¶"},"10620701":{"worker_id":"1005","state":0,"bname":null},"10023042":{"worker_id":"0350","state":0,"bname":"éèµå"},"10065856":{"worker_id":"0453","state":0,"bname":"å´ç±"},"10003808":{"worker_id":"0295","state":0,"bname":"èµµä¸½è"},"10149521":{"worker_id":"0608","state":0,"bname":"éç«æ°"},"10235288":{"worker_id":"0762","state":0,"bname":"å¨æ¨æ"},"10008447":{"worker_id":"0322","state":0,"bname":"å¨èå¨¥"},"10613231":{"worker_id":"1004-deleted","state":0,"bname":null},"10208338":{"worker_id":"0706","state":0,"bname":"å¼ éé¨"},"10172244":{"worker_id":"0642","state":0,"bname":"éé"},"10068534":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10221669":{"worker_id":"0737","state":0,"bname":"çç¦ç"},"10406030":{"worker_id":"0967-deleted","state":0,"bname":""},"10264561":{"worker_id":"0813","state":0,"bname":""},"10379514":{"worker_id":"0954","state":0,"bname":""},"10428397":{"worker_id":"0981","state":0,"bname":""},"10160825":{"worker_id":"0624","state":0,"bname":"ä¿åå¸"},"10040194":{"worker_id":"0397","state":0,"bname":"æ¨æ°ä¸»"},"10068515":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10054193":{"worker_id":"0430","state":0,"bname":"ççç²"},"10069260":{"worker_id":"0464","state":0,"bname":"è£æ·å©·"},"10003875":{"worker_id":"0091","state":0,"bname":"æ´ä¹"},"10244793":{"worker_id":"0788","state":0,"bname":""},"10264821":{"worker_id":"zhanghua@jiuzhilan.com","state":0,"bname":""},"10003718":{"worker_id":"0301","state":0,"bname":"æµ·ç¿äºé¡¾é®"},"10349637":{"worker_id":"0915","state":0,"bname":""},"10000382":{"worker_id":"0000","state":0,"bname":""},"10296807":{"worker_id":"0856","state":0,"bname":"0856å·å®¢æä¸å"},"10135033":{"worker_id":"0603","state":0,"bname":"ä½å½å½"},"10032264":{"worker_id":"0375","state":0,"bname":"æ¹æå¥"},"10003830":{"worker_id":"0291","state":0,"bname":"ææé¨"},"10003823":{"worker_id":"0250","state":0,"bname":"çç¨"},"10101451":{"worker_id":"0547","state":0,"bname":"å¾å½¬"},"10216219":{"worker_id":"0719","state":0,"bname":"å¨æ¶"},"10020200":{"worker_id":"0339","state":0,"bname":"éå¹³å»º"},"10031748":{"worker_id":"0374","state":0,"bname":"ä¸¥æå"},"10114737":{"worker_id":"0568","state":0,"bname":"ç½ä¸¹"},"10160257":{"worker_id":"xingzi@53kf.com","state":0,"bname":"53å¿«æ-æå­"},"10308772":{"worker_id":"0868","state":0,"bname":""},"10106681":{"worker_id":"0557","state":0,"bname":"é­æµ©äº®"},"10096296":{"worker_id":"0537","state":0,"bname":"å»é£é£"},"10029306":{"worker_id":"0368","state":0,"bname":"å§å¤ä¸½"},"10286496":{"worker_id":"0847","state":0,"bname":""},"10257319":{"worker_id":"0802","state":0,"bname":""},"10400005":{"worker_id":"0965","state":0,"bname":""},"10312348":{"worker_id":"0873","state":0,"bname":""},"10189881":{"worker_id":"0667","state":0,"bname":"èé¯"},"10259595":{"worker_id":"0806","state":0,"bname":"0806å·ææ¯æ¯æ"},"10187231":{"worker_id":"0662","state":0,"bname":"éæ·»æ·»"},"10200456":{"worker_id":"0695","state":0,"bname":"å¾æ¨"},"10130956":{"worker_id":"lizi@53kf.com","state":0,"bname":"æå­"},"10135036":{"worker_id":"0601","state":0,"bname":"åº·æ´å¯"},"10083169":{"worker_id":"0494","state":0,"bname":""},"10029180":{"worker_id":"0364","state":0,"bname":"ç³é¹ç¨"},"10055965":{"worker_id":"0432","state":0,"bname":"å¼ è"},"10265079":{"worker_id":"0816","state":0,"bname":""},"10205462":{"worker_id":"0698","state":0,"bname":"å¶ä¼¦æ°"},"10003807":{"worker_id":"0238","state":0,"bname":"é»æ¡å"},"10075447":{"worker_id":"0472","state":0,"bname":"éå¯å"},"10319020":{"worker_id":"0878","state":0,"bname":""},"10096293":{"worker_id":"0535","state":0,"bname":"å­ç¼è½½"},"10073695":{"worker_id":"0470","state":0,"bname":"æ±ªæ°¸åº­"},"10154540":{"worker_id":"0616","state":0,"bname":"éå"},"10328050":{"worker_id":"0895","state":0,"bname":""},"10121885":{"worker_id":"0577","state":0,"bname":"æåå¼"},"10101323":{"worker_id":"0545","state":0,"bname":"é·ä¸äº"},"10260459":{"worker_id":"0810","state":0,"bname":""},"10170600":{"worker_id":"0634","state":0,"bname":"æ²çé²"},"10082906":{"worker_id":"0491","state":0,"bname":"åææ"},"10238576":{"worker_id":"0772","state":0,"bname":""},"10155535":{"worker_id":"0619","state":0,"bname":"çå®å®"},"10264816":{"worker_id":"fengzhouning@jiuzhilan.com","state":0,"bname":""},"10176135":{"worker_id":"haizi@53kf.com","state":0,"bname":"53å¿«æ-æµ·å­"},"10044461":{"worker_id":"0409","state":0,"bname":"0409å·å®¢æä¸å"},"10135041":{"worker_id":"0598","state":0,"bname":"çé¯"},"10015348":{"worker_id":"0329","state":0,"bname":"éæ¢¦å¸"},"10352285":{"worker_id":"0921","state":0,"bname":""},"10194008":{"worker_id":"0677","state":0,"bname":"çé¢"},"10221452":{"worker_id":"0736","state":0,"bname":"çé"},"10056023":{"worker_id":"0433","state":0,"bname":"æé"},"10634481":{"worker_id":"1007","state":0,"bname":null},"10067447":{"worker_id":"0457","state":0,"bname":"ä½æ¨"},"10003870":{"worker_id":"0281","state":0,"bname":"æ´ªè"},"10073453":{"worker_id":"0469","state":0,"bname":"éè³è"},"10068503":{"worker_id":"0460","state":0,"bname":"è¿å²©"},"10184005":{"worker_id":"0658","state":0,"bname":"çæ­å³°"},"10095899":{"worker_id":"0531","state":0,"bname":"é©¬ç¾¤è³"},"10173906":{"worker_id":"0643","state":0,"bname":"å´æ°è¾"},"10264818":{"worker_id":"yaozhengguang@jiuzhilan.com","state":0,"bname":""},"10230670":{"worker_id":"0758","state":0,"bname":"å¾å»ºä¼"},"10237630":{"worker_id":"0768","state":0,"bname":""},"10268997":{"worker_id":"zhoumy@53kf.com","state":0,"bname":"null"},"10117136":{"worker_id":"0570","state":0,"bname":"çå®ä¹¾"},"10255935":{"worker_id":"0801","state":0,"bname":""},"10190686":{"worker_id":"0668","state":0,"bname":"æç«"},"10017300":{"worker_id":"0335","state":0,"bname":"é¬å"},"10398509":{"worker_id":"2222222222@test.com","state":0,"bname":""},"10033963":{"worker_id":"0380","state":0,"bname":"é»å®½"},"10036976":{"worker_id":"0383","state":0,"bname":"è£å·§è³"},"10174350":{"worker_id":"0644","state":0,"bname":"ç¨è·¯"},"10048377":{"worker_id":"0418","state":0,"bname":"å¾æ­ä¸"},"10273229":{"worker_id":"jiangzi@53kf.com","state":0,"bname":""},"10255942":{"worker_id":"0799","state":0,"bname":""},"10243196":{"worker_id":"0783","state":0,"bname":""},"10430664":{"worker_id":"0987-deleted","state":0,"bname":""},"10151696":{"worker_id":"0610","state":0,"bname":"å¼ å¸"},"10003828":{"worker_id":"0106","state":0,"bname":"è®¸æ"},"10384106":{"worker_id":"0955","state":0,"bname":"åå"},"10136784":{"worker_id":"muzi@53kf.com","state":0,"bname":""},"10165902":{"worker_id":"0629","state":0,"bname":"æ¨æ¢¦ä½³"},"10003809":{"worker_id":"0198","state":0,"bname":"éæ¢äº®"},"10301304":{"worker_id":"0861","state":0,"bname":"null"},"10329665":{"worker_id":"0896","state":0,"bname":""},"10121978":{"worker_id":"0578","state":0,"bname":"æ¨éé¹"},"10111459":{"worker_id":"0567","state":0,"bname":"çæ°"},"10083008":{"worker_id":"0493","state":0,"bname":"æç¥é³"},"10076085":{"worker_id":"0476","state":0,"bname":"0476å·å®¢æä¸å"},"10023043":{"worker_id":"0349","state":0,"bname":"èç¿é¢"},"10166012":{"worker_id":"0630","state":0,"bname":"çç¾"},"10075842":{"worker_id":"0473","state":0,"bname":"å»ç§é"},"10195076":{"worker_id":"0681","state":0,"bname":"æä¸¹"},"10420873":{"worker_id":"0972","state":0,"bname":""},"10081124":{"worker_id":"0483","state":0,"bname":"æ±äºå³°"},"10212232":{"worker_id":"haizi-2@53kf.com","state":0,"bname":"53å¿«æ-æµ·å­"},"10363831":{"worker_id":"0934","state":0,"bname":""},"10463799":{"worker_id":"1001","state":0,"bname":""},"10094645":{"worker_id":"0522","state":0,"bname":""},"10187548":{"worker_id":"0664","state":0,"bname":"è°¢ç±"},"10423768":{"worker_id":"0975","state":0,"bname":"0975å·ææ¯æ¯æ"},"10013285":{"worker_id":"0318","state":0,"bname":"å°æ´ª"},"10249708":{"worker_id":"0794","state":0,"bname":""},"10142715":{"worker_id":"zaozi@53kf.com","state":0,"bname":"æ£å­"},"10001538":{"worker_id":"0191","state":0,"bname":"èµµç¿ "},"10120633":{"worker_id":"0575","state":0,"bname":"éèªæ°"},"10092418":{"worker_id":"0510","state":0,"bname":"é»é¢é°"},"10414151":{"worker_id":"0970","state":0,"bname":""},"10119558":{"worker_id":"0574","state":0,"bname":"æ±éª"},"10232846":{"worker_id":"0760","state":0,"bname":"å­ç"},"10108838":{"worker_id":"0563","state":0,"bname":"ç³æå¨"},"10177411":{"worker_id":"0647","state":0,"bname":"éæ­å½¬"},"10355985":{"worker_id":"0926","state":0,"bname":""},"10078649":{"worker_id":"0480","state":0,"bname":"æ±ç¦¾"},"10096260":{"worker_id":"0534","state":0,"bname":"å¼ å¦"},"10151717":{"worker_id":"douzi@53kf.com","state":0,"bname":"53å¿«æ-è±å­"},"10348956":{"worker_id":"0914","state":0,"bname":""},"10003849":{"worker_id":"0283","state":0,"bname":"53å¿«æ-æ¢å­"},"10150789":{"worker_id":"0609","state":0,"bname":"ææº"},"10255713":{"worker_id":"0797","state":0,"bname":"éåä¾"},"10351790":{"worker_id":"0920","state":0,"bname":""},"10004021":{"worker_id":"0313","state":0,"bname":"å¼ è·¯é"},"10016463":{"worker_id":"0332","state":0,"bname":"0332å·å®¢æä¸å"},"10178522":{"worker_id":"0651","state":0,"bname":""},"10039614":{"worker_id":"0391","state":0,"bname":"åé¦è¿"},"10160976":{"worker_id":"0625","state":0,"bname":"ä»ç³ç"},"10287269":{"worker_id":"0849","state":0,"bname":""},"10244733":{"worker_id":"0787","state":0,"bname":""},"10111464":{"worker_id":"0564","state":0,"bname":"åéå¾·"},"10323102":{"worker_id":"0885","state":0,"bname":""},"10091649":{"worker_id":"0508","state":0,"bname":"ä½è"},"10003827":{"worker_id":"0048","state":0,"bname":"53å¿«æ-è²å­"},"10172175":{"worker_id":"chengyz@53kf.com","state":0,"bname":""},"10102024":{"worker_id":"0548","state":0,"bname":"æ¨æ¨"},"10276220":{"worker_id":"0831","state":0,"bname":"0831å·å®¢æä¸å"},"10281992":{"worker_id":"0842","state":0,"bname":""},"10252125":{"worker_id":"0795","state":0,"bname":""},"10359458":{"worker_id":"0931","state":0,"bname":""},"10023516":{"worker_id":"0351","state":0,"bname":"æ½è´¤å¹"},"10154541":{"worker_id":"0615","state":0,"bname":"æ¹å°å·"},"10372638":{"worker_id":"0946","state":0,"bname":"123"},"10391042":{"worker_id":"0958","state":0,"bname":""},"10309608":{"worker_id":"0869","state":0,"bname":""},"10170867":{"worker_id":"shanzi@53kf.com","state":0,"bname":"53å¿«æ-å±±å­"},"10071902":{"worker_id":"0467","state":0,"bname":"æ¨ç§é¦"},"10015383":{"worker_id":"0320","state":0,"bname":"è°­å¯è¶"},"10171857":{"worker_id":"0637","state":0,"bname":"è°­ç£"},"10180386":{"worker_id":"0654","state":0,"bname":"é»ä½³æ"},"10265991":{"worker_id":"0817","state":0,"bname":""},"10227040":{"worker_id":"0753","state":0,"bname":"çæ²»é¢"},"10005459":{"worker_id":"0317","state":0,"bname":"è°­éé"},"10326843":{"worker_id":"0891","state":0,"bname":""},"10181837":{"worker_id":"0656","state":0,"bname":"ä½æ­"},"10081403":{"worker_id":"0489","state":0,"bname":"è¡é"},"10052088":{"worker_id":"0426","state":0,"bname":"è¯¸èå©å©"},"10095352":{"worker_id":"0526","state":0,"bname":"æå®è"},"10191806":{"worker_id":"shizi-2@53kf.com","state":0,"bname":"53å¿«æ-æ¿å­"},"10003843":{"worker_id":"0235","state":0,"bname":"çæ"},"10331864":{"worker_id":"0898-deleted","state":0,"bname":""},"10003850":{"worker_id":"0113","state":0,"bname":"å¾å·¡å¤©"},"10097442":{"worker_id":"0539","state":0,"bname":"å·´æ¶¦å"},"10238577":{"worker_id":"0773","state":0,"bname":""},"10065364":{"worker_id":"0452","state":0,"bname":"çèæ©"},"10027162":{"worker_id":"0356","state":0,"bname":"é»ä¼ç« "},"10343691":{"worker_id":"0911","state":0,"bname":""},"10430680":{"worker_id":"0988","state":0,"bname":""},"10293339":{"worker_id":"0853","state":0,"bname":""},"10291948":{"worker_id":"0852","state":0,"bname":"æµ·ç¿äºé¡¾é®"},"10203726":{"worker_id":"0696","state":0,"bname":"å¾å©å©"},"10194540":{"worker_id":"0678","state":0,"bname":"è®¸æ æ "},"10094967":{"worker_id":"0525","state":0,"bname":"ç½å¨"},"10280624":{"worker_id":"0840","state":0,"bname":""},"10229407":{"worker_id":"0755","state":0,"bname":"é¶å»ºå½"},"10780401":{"worker_id":"1016","state":0,"bname":null},"10046485":{"worker_id":"0416","state":0,"bname":"èè¿"},"10406031":{"worker_id":"0968","state":0,"bname":""},"10030863":{"worker_id":"0372","state":0,"bname":"æ´ç£"},"10068535":{"worker_id":"0463","state":0,"bname":"è¿å²©"},"10128140":{"worker_id":"0585","state":0,"bname":"å¾å²©"},"10020852":{"worker_id":"0308","state":0,"bname":"ææ¬¢"},"10421891":{"worker_id":"0973","state":0,"bname":""},"10209653":{"worker_id":"0709","state":0,"bname":"æ±æé"},"10061357":{"worker_id":"0441","state":0,"bname":"é©¬å°"},"10172172":{"worker_id":"0639","state":0,"bname":"ä½æå¯"},"10028579":{"worker_id":"0361","state":0,"bname":"æ± èª"},"10237629":{"worker_id":"0769","state":0,"bname":"æ´æå®"},"10043314":{"worker_id":"0407","state":0,"bname":"éæ¶"},"10224067":{"worker_id":"0747","state":0,"bname":"é²èª"},"10221858":{"worker_id":"0738","state":0,"bname":"å¼ éªé"},"10004079":{"worker_id":"0303","state":0,"bname":"ç½æå®"},"10060875":{"worker_id":"8808","state":0,"bname":"8808å·å®¢æä¸å"},"10259998":{"worker_id":"0808","state":0,"bname":""},"10301299":{"worker_id":"jiangt@53kf.com","state":0,"bname":"null"},"10064697":{"worker_id":"0444","state":0,"bname":"å´äºæ³"},"10054192":{"worker_id":"0431","state":0,"bname":"æ½ææµ·"},"10078648":{"worker_id":"0481","state":0,"bname":"çä»é¾"},"10067712":{"worker_id":"0459","state":0,"bname":"é«è½"},"10264820":{"worker_id":"caoxiaoran@jiuzhilan.com","state":0,"bname":""},"10267272":{"worker_id":"0819","state":0,"bname":""},"10287266":{"worker_id":"0848","state":0,"bname":""},"10425962":{"worker_id":"0978","state":0,"bname":""},"10052087":{"worker_id":"0427","state":0,"bname":"0427å·å®¢æä¸å"},"10264473":{"worker_id":"0812","state":0,"bname":""},"10328766":{"worker_id":"leizi@53kf.com","state":0,"bname":""},"10046482":{"worker_id":"0414","state":0,"bname":"æä¹"},"10181836":{"worker_id":"0655","state":0,"bname":"å°é³"},"10032265":{"worker_id":"0376","state":0,"bname":"å¾è§ç­± "},"10253675":{"worker_id":"0796","state":0,"bname":""},"10177562":{"worker_id":"0649","state":0,"bname":"é»æµ©ç¶"},"10258071":{"worker_id":"chenjl@53kf.com","state":0,"bname":"null"},"10350569":{"worker_id":"0917","state":0,"bname":""},"10174654":{"worker_id":"0645","state":0,"bname":"çµç¿è®¾è®¡ä¸å"},"10423498":{"worker_id":"0974","state":0,"bname":""},"10031749":{"worker_id":"0373","state":0,"bname":"å¾å­æ·¦"},"10020201":{"worker_id":"0338","state":0,"bname":"å¾æ¶"},"10010932":{"worker_id":"0100","state":0,"bname":"é»èæ³¢"},"10433745":{"worker_id":"0989","state":0,"bname":""},"10327674":{"worker_id":"0893","state":0,"bname":""},"10758541":{"worker_id":"jiangzi@53kf.com","state":0,"bname":null},"10003831":{"worker_id":"0312","state":0,"bname":"é²å³°"},"10124685":{"worker_id":"0582","state":0,"bname":"èµµå¥"},"10090388":{"worker_id":"0505","state":0,"bname":"éæ¨"},"10274854":{"worker_id":"0830","state":0,"bname":""},"10396168":{"worker_id":"3333333333@wofang.com","state":0,"bname":""},"10206004":{"worker_id":"muzi-2@53kf.com","state":0,"bname":"53å¿«æ-æ¨å­"},"10003810":{"worker_id":"0249","state":0,"bname":"éå¿å¼º"},"10220158":{"worker_id":"0731","state":0,"bname":"ç§¦æä¼¦"},"10088768":{"worker_id":"0503","state":0,"bname":"åªä¸æ°"},"10219081":{"worker_id":"0727","state":0,"bname":"åæ¯å²"},"10003859":{"worker_id":"0271","state":0,"bname":"ä¸°æ³å¹"},"10108837":{"worker_id":"0562","state":0,"bname":"éåæ"},"10048981":{"worker_id":"0421","state":0,"bname":"å¾é¹é£"},"10267614":{"worker_id":"0820","state":0,"bname":""},"10220627":{"worker_id":"0732","state":0,"bname":"å¾é¶å©·"},"10028581":{"worker_id":"0362","state":0,"bname":"å»ç²é¦"},"10196625":{"worker_id":"0684","state":0,"bname":"éå¹å¹"},"10003803":{"worker_id":"0127","state":0,"bname":"çé¨ç"},"10734311":{"worker_id":"1012","state":0,"bname":null},"10092417":{"worker_id":"0511","state":0,"bname":"å¢ç"},"10076919":{"worker_id":"0478","state":0,"bname":"å´åº·"},"10367199":{"worker_id":"0937-deleted","state":0,"bname":""},"10003864":{"worker_id":"bd@53kf.com","state":0,"bname":""},"10241388":{"worker_id":"0777","state":0,"bname":"0777å·å®¢æä¸å"},"10085401":{"worker_id":"0498","state":0,"bname":"æç¦å´"},"10213047":{"worker_id":"0715","state":0,"bname":"å¾å·"},"10070348":{"worker_id":"0465","state":0,"bname":"0465å·å®¢æä¸å"},"10295978":{"worker_id":"0855","state":0,"bname":""},"10198798":{"worker_id":"0687","state":0,"bname":"é¥¶åé"},"10147392":{"worker_id":"shanzi@53kf.com","state":0,"bname":""},"10132719":{"worker_id":"0591","state":0,"bname":"èµæå¨"},"10085412":{"worker_id":"0497","state":0,"bname":"éæ­ä¸"},"10313719":{"worker_id":"0874","state":0,"bname":""},"10310039":{"worker_id":"0870","state":0,"bname":""},"10177499":{"worker_id":"0648","state":0,"bname":"çè¾"},"10073454":{"worker_id":"0468","state":0,"bname":"å´ç«å¨"},"10170824":{"worker_id":"0635","state":0,"bname":"ççº¢ä¸½"},"10043315":{"worker_id":"0406","state":0,"bname":"éå¯"},"10013939":{"worker_id":"0326","state":0,"bname":"ç¨çµç¶"},"10353578":{"worker_id":"0923","state":0,"bname":""},"10173782":{"worker_id":"chengzi@53kf.com","state":0,"bname":""},"10260447":{"worker_id":"0809","state":0,"bname":""},"10103138":{"worker_id":"0550","state":0,"bname":"æ±éå®"},"10008445":{"worker_id":"0323","state":0,"bname":"å­èºè"},"10095896":{"worker_id":"0533","state":0,"bname":"åºä½³å¦®"},"10133680":{"worker_id":"0594","state":0,"bname":"æ¥¼æä¸½"},"10425432":{"worker_id":"0977","state":0,"bname":""},"10104211":{"worker_id":"0554","state":0,"bname":"è°¢æ°é£"},"10003845":{"worker_id":"0167","state":0,"bname":"é¶ææ§"},"10328018":{"worker_id":"0894","state":0,"bname":""},"10319414":{"worker_id":"0879","state":0,"bname":""},"10154542":{"worker_id":"0617","state":0,"bname":"æ±ç¬ç"},"10029304":{"worker_id":"0366","state":0,"bname":"éç°"},"10040196":{"worker_id":"0396","state":0,"bname":"ä¸°æ¯å "},"10371694":{"worker_id":"0940","state":0,"bname":""},"10052632":{"worker_id":"0428","state":0,"bname":"éç"},"10310514":{"worker_id":"0866","state":0,"bname":""},"10096294":{"worker_id":"0536","state":0,"bname":"åé¯"},"10028582":{"worker_id":"0363","state":0,"bname":"æ²æ­£ä¼"},"10203986":{"worker_id":"0697","state":0,"bname":"å´ä½³åµ"},"10226733":{"worker_id":"0752","state":0,"bname":"æå­è±ª"},"10604061":{"worker_id":"1003","state":0,"bname":null},"10093422":{"worker_id":"0518","state":0,"bname":"0518å·å®¢æä¸å"},"10001536":{"worker_id":"0299","state":0,"bname":"å¾çå´"},"10240506":{"worker_id":"0776","state":0,"bname":"å§èè¬"},"10305124":{"worker_id":"0864","state":0,"bname":"null"},"10122998":{"worker_id":"0579","state":0,"bname":"0579å·ææ¯æ¯æ"},"10003813":{"worker_id":"0297","state":0,"bname":"å¼ çä¸¹"},"10219122":{"worker_id":"0729","state":0,"bname":"éµå¢ä»"},"10003832":{"worker_id":"0296","state":0,"bname":"ç¨æå½©"},"10081128":{"worker_id":"0486","state":0,"bname":"æ½æé"},"10367284":{"worker_id":"0673","state":0,"bname":""},"10036974":{"worker_id":"0385","state":0,"bname":"å¾è±ª"},"10346740":{"worker_id":"0912","state":0,"bname":""},"10184840":{"worker_id":"0660","state":0,"bname":"å´æ¯æ°"},"10037183":{"worker_id":"0386","state":0,"bname":"ç½å¸¸"},"10223707":{"worker_id":"0746","state":0,"bname":"ä¸¥å®å®¶"},"10065365":{"worker_id":"0451","state":0,"bname":"é©ç»§åµ"},"10111462":{"worker_id":"0565","state":0,"bname":"éç§è"},"10211922":{"worker_id":"0711","state":0,"bname":"å¯æµ·å"},"10433769":{"worker_id":"0990","state":0,"bname":""},"10428554":{"worker_id":"0983","state":0,"bname":""},"10310784":{"worker_id":"0872","state":0,"bname":""},"10194801":{"worker_id":"0679","state":0,"bname":"ç½å¯æ¾"},"10032314":{"worker_id":"0377","state":0,"bname":"0377å·å®¢æä¸å"},"10004031":{"worker_id":"0254","state":0,"bname":"æå³°"},"10195402":{"worker_id":"0682","state":0,"bname":"å¨å¢è¾°"},"10235132":{"worker_id":"0761","state":0,"bname":"ä¸¥éªç¦"},"10003767":{"worker_id":"0298","state":0,"bname":"æ±æ"},"10167554":{"worker_id":"douzi@53kf.com","state":0,"bname":"53å¿«æ-è±å­"},"10334899":{"worker_id":"0903","state":0,"bname":""},"10001531":{"worker_id":"0041","state":0,"bname":"å´äºæ³"},"10003816":{"worker_id":"0139","state":0,"bname":"0139å·å®¢æä¸å"},"10264813":{"worker_id":"hanbing@jiuzhilan.com","state":0,"bname":""},"10093421":{"worker_id":"0519","state":0,"bname":"æ½ç¤¼å"},"10092591":{"worker_id":"0512","state":0,"bname":"é®èµ"},"10334160":{"worker_id":"0901","state":0,"bname":""},"10271270":{"worker_id":"0827","state":0,"bname":""},"10003814":{"worker_id":"0310","state":0,"bname":"å¾è¸"},"10221033":{"worker_id":"0735","state":0,"bname":"å®ççº¢"},"10324721":{"worker_id":"0888","state":0,"bname":""},"10267231":{"worker_id":"0818","state":0,"bname":""},"10336780":{"worker_id":"0907","state":0,"bname":""},"10282699":{"worker_id":"0843","state":0,"bname":"0843å·å®¢æä¸å"},"10225731":{"worker_id":"0685","state":0,"bname":"éç§è±"},"10364529":{"worker_id":"0935","state":0,"bname":""},"10068511":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10396167":{"worker_id":"2222222222@wofang.com","state":0,"bname":""},"10260469":{"worker_id":"0810","state":0,"bname":""},"10003824":{"worker_id":"0270","state":0,"bname":"èµå¼ºå¼º"},"10095902":{"worker_id":"0529","state":0,"bname":"æ¯ç¾å´"},"10329671":{"worker_id":"xinzi@53kf.com","state":0,"bname":""},"10270984":{"worker_id":"0826","state":0,"bname":""},"10057030":{"worker_id":"0435","state":0,"bname":"çæè´"},"10362399":{"worker_id":"0932-deleted","state":0,"bname":""},"10304148":{"worker_id":"liux@53kf.com","state":0,"bname":"null"},"10004009":{"worker_id":"0205","state":0,"bname":"æ½çç"},"10238546":{"worker_id":"0770","state":0,"bname":""},"10208181":{"worker_id":"0705","state":0,"bname":"ä½å¼ºç"},"10206581":{"worker_id":"0701","state":0,"bname":"ææµ·æ"},"10029952":{"worker_id":"0369","state":0,"bname":"å²³è±æ°"},"10352287":{"worker_id":"0922","state":0,"bname":""},"10265090":{"worker_id":"0815","state":0,"bname":""},"10108777":{"worker_id":"0561","state":0,"bname":"åå°"},"10816021":{"worker_id":"1017","state":0,"bname":"1017å·å®¢æä¸å"},"10192852":{"worker_id":"0675","state":0,"bname":"è®¸æ¬£é"},"10003872":{"worker_id":"0176","state":0,"bname":"åé"},"10103934":{"worker_id":"0553","state":0,"bname":"åå"},"10067445":{"worker_id":"0458","state":0,"bname":"çåæ¶"},"10235519":{"worker_id":"0763","state":0,"bname":"åç»­å"},"10009862":{"worker_id":"0324","state":0,"bname":"0324å·å®¢æä¸å"},"10076087":{"worker_id":"0474","state":0,"bname":"ç« è¡¡"},"10021253":{"worker_id":"0344","state":0,"bname":"æå°å¾®"},"10021516":{"worker_id":"0346","state":0,"bname":"èèªé²"},"10027161":{"worker_id":"0357","state":0,"bname":"æ´çå¤"},"10157562":{"worker_id":"0621","state":0,"bname":"ä½èª"},"10093070":{"worker_id":"0514","state":0,"bname":"æ¹è"},"10267633":{"worker_id":"0821","state":0,"bname":""},"10027660":{"worker_id":"0358","state":0,"bname":"æ¨å©å¹³"},"10224584":{"worker_id":"0748","state":0,"bname":"é²æ­é¾"},"10018076":{"worker_id":"0336","state":0,"bname":"0336å·ææ¯æ¯æ"},"10135043":{"worker_id":"0604","state":0,"bname":"ä¾¯å¤"},"10030252":{"worker_id":"0370","state":0,"bname":"éæ¬¢"},"10223628":{"worker_id":"0744","state":0,"bname":"åé«"},"10057032":{"worker_id":"0436","state":0,"bname":"å¼ æ"},"10191083":{"worker_id":"0640","state":0,"bname":"ç¨åºå±"},"10056420":{"worker_id":"0434","state":0,"bname":"éµå©"},"10107248":{"worker_id":"0559","state":0,"bname":"ææ±å³°"},"10111460":{"worker_id":"0566","state":0,"bname":"èæé¾"},"10213692":{"worker_id":"0717","state":0,"bname":"é­è·"},"10065865":{"worker_id":"0455","state":0,"bname":"éµè¹è¹"},"10102706":{"worker_id":"0549","state":0,"bname":"æ½å°ä¸½"},"10216989":{"worker_id":"0721","state":0,"bname":"é±æç¥"},"10221859":{"worker_id":"0739","state":0,"bname":"å¼ å°"},"10003852":{"worker_id":"0287","state":0,"bname":"é»èµé§"},"10376537":{"worker_id":"0950","state":0,"bname":""},"10277682":{"worker_id":"0832","state":0,"bname":""},"10087810":{"worker_id":"0501","state":0,"bname":"èµµæç"},"10195105":{"worker_id":"chengzi-2@53kf.com","state":0,"bname":"53å¿«æ-æ©å­"},"10163001":{"worker_id":"0627","state":0,"bname":"0627å·å®¢æ"},"10559751":{"worker_id":"xingzi@53kf.com","state":0,"bname":null},"10218362":{"worker_id":"0726","state":0,"bname":"ççµå¿"},"10188183":{"worker_id":"muzi-2@53kf.com","state":0,"bname":""},"10372640":{"worker_id":"0947","state":0,"bname":""},"10046481":{"worker_id":"0413","state":0,"bname":"å¯æ¥ç"},"10094646":{"worker_id":"0523","state":0,"bname":"å¤æ¥"},"10076545":{"worker_id":"0477","state":0,"bname":"ç°æé¾"},"10246783":{"worker_id":"0792","state":0,"bname":""},"10317434":{"worker_id":"0877","state":0,"bname":""},"10225806":{"worker_id":"0751","state":0,"bname":"æé¾"},"10264817":{"worker_id":"zhenxiaoshuai@jiuzhilan.com","state":0,"bname":""},"10004015":{"worker_id":"0262","state":0,"bname":"ä»»å¿å¼º"},"10452744":{"worker_id":"0994","state":0,"bname":""},"10100266":{"worker_id":"0544","state":0,"bname":"0544å·å®¢æä¸å"},"10197252":{"worker_id":"chenqy","state":0,"bname":"éç§è±"},"10081127":{"worker_id":"0485","state":0,"bname":"é·é°çª"},"10155534":{"worker_id":"0618","state":0,"bname":"èå«æ±"},"10019788":{"worker_id":"1001","state":0,"bname":""},"10396164":{"worker_id":"15171176982@wofang.com","state":0,"bname":""},"10369156":{"worker_id":"0938","state":0,"bname":""},"10222482":{"worker_id":"0741","state":0,"bname":"åè¶å"},"10652381":{"worker_id":"1010","state":0,"bname":null},"10235998":{"worker_id":"0765","state":0,"bname":"å¯äºç"},"10216988":{"worker_id":"0722","state":0,"bname":"ä¸ä¸é¡¾é®"},"10212198":{"worker_id":"0713","state":0,"bname":"é¾çäº¿"},"10187453":{"worker_id":"0663","state":0,"bname":"éç¸ç§"},"10232467":{"worker_id":"0759","state":0,"bname":"åæé»"},"10015353":{"worker_id":"0330","state":0,"bname":"æ±ªå¹³å¹³"},"10057406":{"worker_id":"0437","state":0,"bname":"éé¦ä½©"},"10244279":{"worker_id":"0786","state":0,"bname":""},"10351246":{"worker_id":"0918","state":0,"bname":""},"10217123":{"worker_id":"0723","state":0,"bname":"éç¿ å¥³"},"10152556":{"worker_id":"0613","state":0,"bname":"é¢æ¯é¾"},"10033965":{"worker_id":"0378","state":0,"bname":"è²åé±"},"10399138":{"worker_id":"67244581@qq.com","state":0,"bname":""},"10003806":{"worker_id":"0004","state":0,"bname":"åºå°ä¿"},"10004022":{"worker_id":"03080","state":0,"bname":"ææ¬¢"},"10003834":{"worker_id":"0289","state":0,"bname":"çå°é¾"},"10133079":{"worker_id":"0588","state":0,"bname":"é©¬åè±ª"},"10394010":{"worker_id":"0961","state":0,"bname":""},"10171696":{"worker_id":"0636","state":0,"bname":"å¼ ä¸¹ä¸¹"},"10320139":{"worker_id":"0881","state":0,"bname":""},"10058579":{"worker_id":"0439","state":0,"bname":"æçç¶"},"10133084":{"worker_id":"0587","state":0,"bname":"é·è¶"},"10212333":{"worker_id":"0714","state":0,"bname":"ç¿æ"},"10689271":{"worker_id":"1011","state":0,"bname":null},"10239007":{"worker_id":"0774","state":0,"bname":"éè"},"10093423":{"worker_id":"0517","state":0,"bname":"å¨ç¥"},"10281228":{"worker_id":"0841","state":0,"bname":""},"10271757":{"worker_id":"0828","state":0,"bname":""},"10020591":{"worker_id":"0343","state":0,"bname":"å¼ ææ"},"10103137":{"worker_id":"0551","state":0,"bname":"ä¸¥æ¢¦ä¿"},"10222627":{"worker_id":"0742","state":0,"bname":"å­å¯å©·"},"10093424":{"worker_id":"0516","state":0,"bname":"çå¥å³°"},"10208705":{"worker_id":"0707","state":0,"bname":"è°­ææ³¢"},"10211613":{"worker_id":"0710","state":0,"bname":"åä¼"},"10036975":{"worker_id":"0384","state":0,"bname":"èµææ"},"10037633":{"worker_id":"0387","state":0,"bname":"æææ°"},"10434556":{"worker_id":"0991","state":0,"bname":""},"10135037":{"worker_id":"0600","state":0,"bname":"é±å­å­"},"10371232":{"worker_id":"0939","state":0,"bname":""},"10245454":{"worker_id":"0790","state":0,"bname":""},"10219101":{"worker_id":"0728","state":0,"bname":"çæ¥è"},"10228944":{"worker_id":"0754","state":0,"bname":"éè§å"},"10298502":{"worker_id":"caixy@53kf.com","state":0,"bname":"null"},"10156432":{"worker_id":"jiangzi@53kf.com","state":0,"bname":"53å¿«æ-æ±å­"},"10779221":{"worker_id":"liuzi@53kf.com","state":0,"bname":null},"10019790":{"worker_id":"1003","state":0,"bname":""},"10046484":{"worker_id":"0415","state":0,"bname":"æ´ªè¯æ¶µ"},"10123745":{"worker_id":"0580","state":0,"bname":"è®¸ä¿è¾"},"10223627":{"worker_id":"0743","state":0,"bname":"é©¬ç¶ç¶"},"10325047":{"worker_id":"0889","state":0,"bname":""},"10078343":{"worker_id":"0479","state":0,"bname":"æé²"},"10225176":{"worker_id":"0750","state":0,"bname":"ä¸å¶ä»ª"},"10134121":{"worker_id":"0597","state":0,"bname":"è£ç¬ç¬"},"10042454":{"worker_id":"0402","state":0,"bname":"çä¾"},"10101324":{"worker_id":"0546","state":0,"bname":"é»æ­¥ä¹"},"10020594":{"worker_id":"0342","state":0,"bname":"æ¹ä½³"},"10268101":{"worker_id":"lizi@53kf.com","state":0,"bname":""},"10396186":{"worker_id":"18682480795@wofang.com","state":0,"bname":""},"10050525":{"worker_id":"0425","state":0,"bname":"èå¿è¾"},"10426550":{"worker_id":"0979","state":0,"bname":""},"10040202":{"worker_id":"0398","state":0,"bname":"ç®¡å°æ°"},"10016457":{"worker_id":"0331","state":0,"bname":"æ¨æ¶¦ç"},"10453006":{"worker_id":"0995","state":0,"bname":""},"10076086":{"worker_id":"0475","state":0,"bname":"è¡éå"},"10270585":{"worker_id":"0825","state":0,"bname":""},"10157563":{"worker_id":"0622","state":0,"bname":"äºè¾¾æ´"},"10191460":{"worker_id":"0671","state":0,"bname":"å¶å°èª"},"10216428":{"worker_id":"0720","state":0,"bname":"çæµ©ç¨"},"10198409":{"worker_id":"0686","state":0,"bname":"å¼ çè¾"},"10290065":{"worker_id":"0851","state":0,"bname":"0851å·å®¢æä¸å"},"10189184":{"worker_id":"0666","state":0,"bname":"é²æä¸¹"},"10178442":{"worker_id":"0650","state":0,"bname":"éç¿"},"10003821":{"worker_id":"0269","state":0,"bname":"å¨ç£"},"10296973":{"worker_id":"0857","state":0,"bname":""},"10118691":{"worker_id":"0571","state":0,"bname":"éå¶ç¿"},"10115372":{"worker_id":"0569","state":0,"bname":"èå¯ç¨"},"10261321":{"worker_id":"shanzi@53kf.com","state":0,"bname":""},"10160330":{"worker_id":"0623","state":0,"bname":"ç¨çæ"},"10243128":{"worker_id":"0782","state":0,"bname":""},"10021625":{"worker_id":"0348","state":0,"bname":"å´å©µå¨"},"10003841":{"worker_id":"0258","state":0,"bname":"ä½æ°´æ "},"10299635":{"worker_id":"0859","state":0,"bname":"null"},"10003856":{"worker_id":"bd@53kf.com","state":0,"bname":""},"10196317":{"worker_id":"0683","state":0,"bname":"æçç"},"10003965":{"worker_id":"0302","state":0,"bname":"0302å·å®¢æä¸å"},"10039840":{"worker_id":"0393","state":0,"bname":"æ¨æ°ä¸»"},"10242114":{"worker_id":"0779","state":0,"bname":""},"10042455":{"worker_id":"0401","state":0,"bname":"éµåº"},"10402275":{"worker_id":"0966","state":0,"bname":""},"10463278":{"worker_id":"1000-deleted","state":0,"bname":""},"10003819":{"worker_id":"0306","state":0,"bname":"53å¿«æ-æ å­"},"10609131":{"worker_id":"tizi@53kf.com","state":0,"bname":null},"10169094":{"worker_id":"0632","state":0,"bname":"é¾æ§çº"},"10003838":{"worker_id":"0243","state":0,"bname":"éµç§èª"},"10003847":{"worker_id":"0311","state":0,"bname":"é©¬éè"},"10099038":{"worker_id":"0543","state":0,"bname":"å¨æç"},"10241617":{"worker_id":"0778","state":0,"bname":""},"10261171":{"worker_id":"0810","state":0,"bname":""},"10221032":{"worker_id":"0734","state":0,"bname":"é»ä¸¹é¯"},"10198863":{"worker_id":"0689","state":0,"bname":"çé¡ºå³£"},"10098610":{"worker_id":"0541","state":0,"bname":"0541å·ææ¯æ¯æ"},"10217977":{"worker_id":"0724","state":0,"bname":"å¨ä¸é"},"10017268":{"worker_id":"0333","state":0,"bname":"éå¨"},"10399047":{"worker_id":"0964","state":0,"bname":""},"10282734":{"worker_id":"0844","state":0,"bname":""},"10003840":{"worker_id":"0285","state":0,"bname":"æ¢æµ·æ»"},"10048380":{"worker_id":"0417","state":0,"bname":"éæ¶"},"10105316":{"worker_id":"0555","state":0,"bname":"å¾è"},"10376250":{"worker_id":"0949","state":0,"bname":""},"10268971":{"worker_id":"0823","state":0,"bname":""},"10302849":{"worker_id":"0862","state":0,"bname":"äºå¼å«-æå­"},"10095903":{"worker_id":"0528","state":0,"bname":"æè¶"},"10003825":{"worker_id":"0263","state":0,"bname":"çæ³¢"},"10090726":{"worker_id":"0506","state":0,"bname":"éåæ³¢"},"10004678":{"worker_id":"0276","state":0,"bname":"ä¸ä¸é¡¾é®ä¸"},"10348515":{"worker_id":"0913","state":0,"bname":""},"10015345":{"worker_id":"0327","state":0,"bname":"å¼ ææ"},"10164125":{"worker_id":"shizi@53kf.com","state":0,"bname":"53å¿«æ-æ¿å­"},"10041265":{"worker_id":"0400","state":0,"bname":"æ¹ä¿"},"10003857":{"worker_id":"0304","state":0,"bname":"å¨å´åª"},"10577581":{"worker_id":"1002-deleted","state":0,"bname":null},"10235881":{"worker_id":"0764","state":0,"bname":"è¡æ·è´"},"10323718":{"worker_id":"0887","state":0,"bname":""},"10141499":{"worker_id":"0607","state":0,"bname":"è®¸å¯ç³"},"10236789":{"worker_id":"0767","state":0,"bname":"18758580610"},"10135035":{"worker_id":"0602","state":0,"bname":"ä½æ¯å®"},"10357578":{"worker_id":"0928","state":0,"bname":""},"10255478":{"worker_id":"0733","state":0,"bname":""},"10215167":{"worker_id":"zaozi-2@53kf.com","state":0,"bname":""},"10372634":{"worker_id":"0943","state":0,"bname":""},"10430659":{"worker_id":"0986","state":0,"bname":""},"10416107":{"worker_id":"0971","state":0,"bname":""},"10229408":{"worker_id":"0756","state":0,"bname":"é­è®­æ¹"},"10642241":{"worker_id":"1009-deleted","state":0,"bname":null},"10065368":{"worker_id":"0448","state":0,"bname":"éªææ"},"10236786":{"worker_id":"0766","state":0,"bname":"æçå¡"},"10188266":{"worker_id":"0665","state":0,"bname":"é­å¹æ£®"},"10103136":{"worker_id":"0552","state":0,"bname":"è©¹æ·±æ"},"10365069":{"worker_id":"0936","state":0,"bname":""},"10207057":{"worker_id":"0702","state":0,"bname":"éä½å¿«"},"10003860":{"worker_id":"bd@53kf.com","state":0,"bname":""},"10248884":{"worker_id":"test@53kf.com","state":0,"bname":""},"10223629":{"worker_id":"0745","state":0,"bname":"å¾æ°"},"10325049":{"worker_id":"0890","state":0,"bname":""},"10243824":{"worker_id":"0784","state":0,"bname":""},"10334650":{"worker_id":"0902","state":0,"bname":""},"10247378":{"worker_id":"0793","state":0,"bname":""},"10050522":{"worker_id":"0423","state":0,"bname":"å¾ç"},"10462636":{"worker_id":"0997-deleted","state":0,"bname":""},"10029236":{"worker_id":"0365","state":0,"bname":"ç¬¦èä¼"},"10065366":{"worker_id":"0450","state":0,"bname":"è¤å¿è¶"},"10048822":{"worker_id":"0420","state":0,"bname":"çåå¬"},"10021517":{"worker_id":"0345","state":0,"bname":"åå³»å³°"},"10003835":{"worker_id":"0286","state":0,"bname":"0286å·ææ¯æ¯æ"},"10378078":{"worker_id":"maizi@53kf.com","state":0,"bname":""},"10214181":{"worker_id":"0718","state":0,"bname":"æ¨å®æ³¢"},"10239390":{"worker_id":"0775","state":0,"bname":""},"10093071":{"worker_id":"0513","state":0,"bname":"æ¢æé"},"10043316":{"worker_id":"0404","state":0,"bname":"å»ç´«å¨"},"10245156":{"worker_id":"0789","state":0,"bname":""},"10208863":{"worker_id":"0708","state":0,"bname":"çå¨"},"10171969":{"worker_id":"0638","state":0,"bname":"å¼ ç»§é­"},"10068538":{"worker_id":"chenli","state":0,"bname":""},"10068505":{"worker_id":"0461","state":0,"bname":"éè"},"10028091":{"worker_id":"0359","state":0,"bname":"éªè¾¾"},"10131444":{"worker_id":"0586","state":0,"bname":"éç"},"10293677":{"worker_id":"0854","state":0,"bname":""},"10002233":{"worker_id":"0275","state":0,"bname":"53å¿«æ-æå­"},"10068516":{"worker_id":"gengy@53kf.com","state":0,"bname":""},"10024640":{"worker_id":"0352","state":0,"bname":"éèä½"},"10053023":{"worker_id":"0429","state":0,"bname":"çå®"},"10064696":{"worker_id":"0443","state":0,"bname":"è£ç¬ç¬"},"10040197":{"worker_id":"0395","state":0,"bname":"èä¸¹å¹³"},"10085400":{"worker_id":"0499","state":0,"bname":"éåç½"},"10081404":{"worker_id":"0488","state":0,"bname":"éä¸½é"},"10264810":{"worker_id":"xiaolingling@jiuzhilan.com","state":0,"bname":""},"10133681":{"worker_id":"0595","state":0,"bname":"é«å¸"},"10161142":{"worker_id":"0626","state":0,"bname":"éæ"},"10218210":{"worker_id":"0725","state":0,"bname":"ç« ä¼"},"10221908":{"worker_id":"0740","state":0,"bname":"æéµ"},"10444023":{"worker_id":"0992","state":0,"bname":""},"10003844":{"worker_id":"0247","state":0,"bname":"åæ¶"},"10018330":{"worker_id":"0337","state":0,"bname":"å¨å£æ°"},"10020755":{"worker_id":"guizi","state":0,"bname":"æ¡å­"},"10372320":{"worker_id":"0942","state":0,"bname":""},"10088842":{"worker_id":"0502","state":0,"bname":"éµæå"},"10451171":{"worker_id":"0993-deleted","state":0,"bname":""},"10044848":{"worker_id":"0412","state":0,"bname":"å¼ ä¿éª"},"10048555":{"worker_id":"0419","state":0,"bname":"æ±¤æ´ªæ´"},"10024645":{"worker_id":"0353","state":0,"bname":"ææ¥æ"},"10133679":{"worker_id":"0593","state":0,"bname":"åç¤¼æ"},"10310402":{"worker_id":"0871","state":0,"bname":""},"10268695":{"worker_id":"0822","state":0,"bname":""},"10394009":{"worker_id":"0960","state":0,"bname":""},"10003812":{"worker_id":"0067","state":0,"bname":"0067å·å®¢æä¸å"},"10376929":{"worker_id":"0951","state":0,"bname":""},"10118689":{"worker_id":"0573","state":0,"bname":"é±å è"},"10429836":{"worker_id":"0985","state":0,"bname":""},"10174866":{"worker_id":"0646","state":0,"bname":"æ¾å¿é£"},"10107249":{"worker_id":"0560","state":0,"bname":"æ¹è·è¾"},"10229534":{"worker_id":"0757-deleted","state":0,"bname":"åºç¿¡"},"10029305":{"worker_id":"0367","state":0,"bname":"é«æ"},"10132518":{"worker_id":"0590","state":0,"bname":"ä¿é"},"10039612":{"worker_id":"0392","state":0,"bname":"éå°ä¸¹"},"10326844":{"worker_id":"0892","state":0,"bname":""},"10345296":{"worker_id":"taozi@53kf.com","state":0,"bname":""},"10191459":{"worker_id":"0670","state":0,"bname":"åå¾·ç³"},"10242928":{"worker_id":"0780","state":0,"bname":""},"10734331":{"worker_id":"1013","state":0,"bname":null},"10094648":{"worker_id":"0524","state":0,"bname":"çä½³ä¸½"},"10002234":{"worker_id":"taozi@53kf.com","state":0,"bname":""},"10003820":{"worker_id":"0293","state":0,"bname":"æ²æé³"},"10274845":{"worker_id":"0830","state":0,"bname":""},"10123859":{"worker_id":"0581","state":0,"bname":"ä½ä¿æ°"},"10126590":{"worker_id":"0584","state":0,"bname":"éæ"},"10081129":{"worker_id":"0487","state":0,"bname":"æ´è±æ°"},"10003833":{"worker_id":"0222","state":0,"bname":"0222å·ææ¯æ¯æ"},"10332510":{"worker_id":"0899","state":0,"bname":""},"10462637":{"worker_id":"0998-deleted","state":0,"bname":""},"10323073":{"worker_id":"0884","state":0,"bname":""},"10354742":{"worker_id":"0924","state":0,"bname":""},"10003851":{"worker_id":"0256","state":0,"bname":"å´å»ºå"},"10095769":{"worker_id":"0527","state":0,"bname":"èµµæé³"},"10462618":{"worker_id":"0999-deleted","state":0,"bname":""},"10071898":{"worker_id":"0466","state":0,"bname":"éå©"},"10238548":{"worker_id":"0771","state":0,"bname":"å¢é"},"10701081":{"worker_id":"shanzi@53kf.com","state":0,"bname":null},"10372318":{"worker_id":"0941","state":0,"bname":""},"10321758":{"worker_id":"0883","state":0,"bname":""},"10424575":{"worker_id":"0976","state":0,"bname":""},"10314220":{"worker_id":"0876","state":0,"bname":""},"10357577":{"worker_id":"0927","state":0,"bname":""},"10139052":{"worker_id":"0605","state":0,"bname":"æå¹å"},"10560251":{"worker_id":"haizi@53kf.com","state":0,"bname":null},"10374288":{"worker_id":"0948","state":0,"bname":""},"10004014":{"worker_id":"0060","state":0,"bname":"æ­äº®"},"10191754":{"worker_id":"0672","state":0,"bname":"å¨å¿æ"},"10075166":{"worker_id":"0471","state":0,"bname":"0471å·å®¢æä¸å"},"10290064":{"worker_id":"0850","state":0,"bname":""},"10107247":{"worker_id":"0558","state":0,"bname":"åæ·è±"},"10020595":{"worker_id":"0340","state":0,"bname":"ææ¢¨"},"10199791":{"worker_id":"0692-deleted","state":0,"bname":"å§æ"},"10082905":{"worker_id":"0492","state":0,"bname":"å¶æ¹"},"10042453":{"worker_id":"0403","state":0,"bname":"èä¸"},"10163002":{"worker_id":"0628","state":0,"bname":"å¨æ¾"},"10050524":{"worker_id":"0424","state":0,"bname":"éå°ä¿"},"10313720":{"worker_id":"0875","state":0,"bname":""},"10106682":{"worker_id":"0556","state":0,"bname":"æ´ç¬ç¬"},"10255714":{"worker_id":"0798","state":0,"bname":""},"10179676":{"worker_id":"0653","state":0,"bname":"å¶å¸"},"10184344":{"worker_id":"0659","state":0,"bname":"é±çº¢"},"10134120":{"worker_id":"0596","state":0,"bname":"å¾ä¸°éª"},"10172178":{"worker_id":"0641","state":0,"bname":"åé£"},"10246593":{"worker_id":"0791","state":0,"bname":""},"10090969":{"worker_id":"0507","state":0,"bname":"çç§"},"10628201":{"worker_id":"1006","state":0,"bname":null},"10095901":{"worker_id":"0530","state":0,"bname":"ä¿æº"},"10206579":{"worker_id":"0700","state":0,"bname":"èææ·"},"10067446":{"worker_id":"0456","state":0,"bname":"å¼ æµæ"},"10263299":{"worker_id":"xingzi@53kf.com","state":0,"bname":""},"10213299":{"worker_id":"0716","state":0,"bname":"å¼ å¯è"},"10118690":{"worker_id":"0572","state":0,"bname":"0572å·å®¢æä¸å"},"10099037":{"worker_id":"0542","state":0,"bname":"ä¿ä¸¹"},"10024642":{"worker_id":"0354","state":0,"bname":"ç« å½åµ"},"10003818":{"worker_id":"0273","state":0,"bname":"çå¬"},"10264470":{"worker_id":"0811","state":0,"bname":""},"10372635":{"worker_id":"0944","state":0,"bname":"hualala"},"10015623":{"worker_id":"0315","state":0,"bname":"ææ°¸è¶"},"10428236":{"worker_id":"0980","state":0,"bname":""},"10034222":{"worker_id":"0381","state":0,"bname":"ä¸ä¸é¡¾é®äº"},"10343542":{"worker_id":"0909","state":0,"bname":""},"10028101":{"worker_id":"0360","state":0,"bname":"æ²å§å¥"},"10065369":{"worker_id":"0447","state":0,"bname":"é«æ°¸å³°"},"10013685":{"worker_id":"zhengjp@53kf.com","state":0,"bname":"éä¿é¹"},"10003839":{"worker_id":"pengcx@53kf.com","state":0,"bname":"å½­è¶æ­"},"10084512":{"worker_id":"0495","state":0,"bname":"0495å·ææ¯æ¯æ"},"10399046":{"worker_id":"0963-deleted","state":0,"bname":""},"10081123":{"worker_id":"0482","state":0,"bname":"ææ´ªé"},"10320375":{"worker_id":"0882","state":0,"bname":""},"10182836":{"worker_id":"0657","state":0,"bname":"éå"},"10198806":{"worker_id":"0688","state":0,"bname":"å¨æ¿"},"10319419":{"worker_id":"0880","state":0,"bname":""},"10195077":{"worker_id":"0680","state":0,"bname":"æè³"},"10152419":{"worker_id":"0614","state":0,"bname":"å´å¿æ"},"10013282":{"worker_id":"0319","state":0,"bname":"éåé"},"10004025":{"worker_id":"0264","state":0,"bname":"ç¿å æº"},"10156434":{"worker_id":"leizi@53kf.com","state":0,"bname":"53å¿«æ-é·å­"},"10151743":{"worker_id":"0612","state":0,"bname":"é»è£è¡"},"10307819":{"worker_id":"0867","state":0,"bname":""},"10190826":{"worker_id":"0669","state":0,"bname":"é»è"},"10003811":{"worker_id":"0290","state":0,"bname":"é¢ä¼ä¼"},"10132517":{"worker_id":"0589","state":0,"bname":"é»è"},"10120770":{"worker_id":"0576","state":0,"bname":"æéªè¾"},"10098609":{"worker_id":"0540","state":0,"bname":"éæé"},"10038992":{"worker_id":"0390","state":0,"bname":"å§ä½³éª"},"10259596":{"worker_id":"0807","state":0,"bname":"0807å·ææ¯æ¯æ"},"10088767":{"worker_id":"0504","state":0,"bname":"æ²ç°"},"10428471":{"worker_id":"0982","state":0,"bname":""},"10272638":{"worker_id":"0829","state":0,"bname":""},"10156467":{"worker_id":"0620","state":0,"bname":"å§å¥å½­"},"10429839":{"worker_id":"0984","state":0,"bname":""},"10058580":{"worker_id":"0438","state":0,"bname":"æ½äºå"},"10081126":{"worker_id":"0484","state":0,"bname":"æè¾°"},"10224837":{"worker_id":"0749","state":0,"bname":"é«å³°"},"10377759":{"worker_id":"0952","state":0,"bname":""},"10065367":{"worker_id":"0449","state":0,"bname":"å½­é¬å¥"},"10044462":{"worker_id":"0408","state":0,"bname":"éå½å»º"},"10396165":{"worker_id":"12345678911@wofang.com","state":0,"bname":""},"10389341":{"worker_id":"0957","state":0,"bname":""},"10084510":{"worker_id":"0496","state":0,"bname":"å¾æµ©"},"10017269":{"worker_id":"0334","state":0,"bname":"å¼ çäº®"},"10004016":{"worker_id":"0277","state":0,"bname":"ææ"},"10388062":{"worker_id":"0956","state":0,"bname":""},"10207542":{"worker_id":"0703","state":0,"bname":"å´æ¶µå"},"10038126":{"worker_id":"0388","state":0,"bname":"éæé£"},"10003815":{"worker_id":"0105","state":0,"bname":"0105å·å®¢æä¸å"},"10003869":{"worker_id":"0227","state":0,"bname":"æå£æ¢¯"},"10044554":{"worker_id":"0410","state":0,"bname":"éæé£"},"10194000":{"worker_id":"0676","state":0,"bname":"èµµå¿è±ª"},"10330829":{"worker_id":"0897","state":0,"bname":""},"10015404":{"worker_id":"0321","state":0,"bname":"å¨é¨"},"10062101":{"worker_id":"0442","state":0,"bname":"å¼ è¶"},"10642231":{"worker_id":"1008","state":0,"bname":null},"10295404":{"worker_id":"0091","state":0,"bname":"å·¥ç¨å¸"},"10033964":{"worker_id":"0379","state":0,"bname":"å§åè¾"},"10040198":{"worker_id":"0394","state":0,"bname":"ç« ä¸½å¨"},"10264670":{"worker_id":"0814","state":0,"bname":""},"10206272":{"worker_id":"0699","state":0,"bname":"æ±ªä¸½ç"},"10004011":{"worker_id":"0196","state":0,"bname":"å¾ä¹"},"10021592":{"worker_id":"0347","state":0,"bname":"èäº®"},"10169037":{"worker_id":"0631","state":0,"bname":"èµµåä¼"},"10093852":{"worker_id":"0520","state":0,"bname":"ææ¸"},"10199876":{"worker_id":"0693","state":0,"bname":"æ¹å­ä¼"},"10212199":{"worker_id":"0712","state":0,"bname":"é±æç²"},"10050521":{"worker_id":"0422","state":0,"bname":"åé²"},"10003858":{"worker_id":"0020","state":0,"bname":"0020å·å®¢æä¸å"},"10038200":{"worker_id":"0389","state":0,"bname":"å§æ¢¦ç¼"},"10001693":{"worker_id":"0046","state":0,"bname":"ä½ä¿æ "},"10306701":{"worker_id":"0865","state":0,"bname":""},"10020590":{"worker_id":"0341","state":0,"bname":"çæå¼º"},"10199919":{"worker_id":"0694","state":0,"bname":"å¤å°ä¼"},"10358003":{"worker_id":"0929","state":0,"bname":""},"10335466":{"worker_id":"0904","state":0,"bname":""},"10185283":{"worker_id":"0661","state":0,"bname":"ä½è¯ä¹"},"10169861":{"worker_id":"0633","state":0,"bname":"æ±ä¸¹ä¸½"},"10199787":{"worker_id":"0691","state":0,"bname":"è°¢çå®"},"10178664":{"worker_id":"leizi@53kf.com","state":0,"bname":"53å¿«æ-é·å­"},"10058578":{"worker_id":"0440","state":0,"bname":"å¾å½¦"},"10093068":{"worker_id":"0515","state":0,"bname":"å¨å¥"},"10329949":{"worker_id":"zaozi@53kf.com","state":0,"bname":""}});$53.data("of_groups",{"38623605":{"group_name":"å¿«å®¢æBU","workers":["10003965","10343689","10689271","10777731"]},"38627005":{"group_name":"äºå®¢æéå®BUå®¢æ","workers":["10003816","10060875","10816021"]},"19745305":{"group_name":"WiseCRM","workers":["10034222","10004017"]},"38623705":{"group_name":"ææ¯æ¯æ","workers":["10423768","10428471"]}});$53.data("mobileCompanyInfo",{"stop_back":"1","company_logo":"..\/img\/upload\/10000079\/mobile\/temp\/mobile_53kf_1516676731.png","company_intr":"<p style=\"white-space: normal;\"><span style=\"font-size: 14px;\"><strong>53KF<\/strong><\/span><\/p><p style=\"white-space: normal;\"><strong>15<\/strong> å¹´ä¸æ³¨å®¢æç³»ç»ï¼æå¡è¶è¿ <strong>80 ä¸<\/strong><strong>+&nbsp;<\/strong>ä¼ä¸å®¢æ·ã<\/p><p style=\"white-space: normal;\"><br\/><\/p><p style=\"white-space: normal;\"><span style=\"font-size: 12px;\">å½å®¶é«æ°ææ¯ä¼ä¸ãä¸¤é¡¹ç¬æä¸å©ãAAA ä¿¡ç¨ä¼ä¸ã<\/span><\/p><p style=\"white-space: normal;\"><span style=\"font-size: 12px;\"><br\/><\/span><\/p><p style=\"white-space: normal;\">äº§åæ¶µçï¼å¨çº¿å®¢æç³»ç»ãå·¥åç³»ç»ãå¼å«ä¸­å¿ãCRMãOA ç­ä¸»æµäº§åã<\/p><p style=\"white-space: normal;\"><br\/>æå¡æ¶é´ï¼<\/p><p style=\"white-space: normal;\"><span style=\"font-family: SimSun; color: rgb(255, 0, 0); font-weight: bold;\">8:00-24:00<\/span>ï¼å¶ä»æ¶é´å¯ç»æä»¬çè¨<\/p><p style=\"white-space: normal;\">400 ç­çº¿ï¼<\/p><p style=\"white-space: normal;\"><strong><span style=\"font-family: SimSun; color: rgb(255, 0, 0);\">400-611-2183<\/span><\/strong><\/p><p style=\"white-space: normal;\"><span class=\"contact-line4\" style=\"color: rgb(255, 0, 0);\">å¯¹è¯äº¤è°ä¸­è¯·å¿å³é­æ­¤çªå£ï¼<\/span><\/p><p><br\/><\/p>","company_short":"53KF äºå®¢æ","mobile_music":"msg_tip_2","zdyurl":"","minchat_height":"90"});$53.data("icon_award",{});$53.data("api_uuid","6655b9b77b2b9ffb624af90ad85f385a");
$53.setUuid("6655b9b77b2b9ffb624af90ad85f385a");
if(window.location.href.substr(0,4) != "file"){
(function(window,undefined){
    var head=document.getElementsByTagName("head")[0];
    var kfscript1= document.createElement("script");
    kfscript1.src="https://www5.53kf.com/custom/72000079/mobile_icon_72000079_17.js?v=1528767195";
    var done1=false;
    kfscript1.onload=kfscript1.onreadystatechange=function(){
        if(!done1&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done1=true;
            kfscript1.onload=kfscript1.onreadystatechange=null;head.removeChild(kfscript1);
        }
    }
    head.appendChild(kfscript1);
    var kfscript2= document.createElement("script");
    kfscript2.src="https://www5.53kf.com/custom/72000079/mobile_invite_72000079_17.js?v=1541122932";
    var done2=false;
    kfscript2.onload=kfscript2.onreadystatechange=function(){
        if(!done2&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done2=true;
            kfscript2.onload=kfscript2.onreadystatechange=null;head.removeChild(kfscript2);
        }
    }
    head.appendChild(kfscript2);
    var kfscript3= document.createElement("script");
    kfscript3.src="https://www5.53kf.com/custom/72000079/assign_worker_72000079_17.js?v=1593526700";
    var done3=false;
    kfscript3.onload=kfscript3.onreadystatechange=function(){
        if(!done3&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done3=true;
            kfscript3.onload=kfscript3.onreadystatechange=null;head.removeChild(kfscript3);
        }
    }
    head.appendChild(kfscript3);
    var kfscript4= document.createElement("script");
    kfscript4.src="https://www5.53kf.com/custom/72000079/mobile_chat_72000079_17.js?v=1562828639";
    var done4=false;
    kfscript4.onload=kfscript4.onreadystatechange=function(){
        if(!done4&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done4=true;
            kfscript4.onload=kfscript4.onreadystatechange=null;head.removeChild(kfscript4);
        }
    }
    head.appendChild(kfscript4);
})(window);
    
(function(window,document,talkHost,ipStr,ipContinent,companyId,styleId,undefined){
	/**
	*$53.data('workers')		å·¥å·ä¿¡æ¯
	*$53.data('groups')			åç»ä¿¡æ¯
	*$53.data('page_referer')	è®¿é®æ¥æº
	*$53.data('mobile_icon')	ææºå¾æ è®¾ç½®
	*$53.data('mobile_invite')	ææºéè¯·æ¡è®¾ç½®
	*$53.data('assign_worker')	æå®å®¢æè®¾ç½®
	*$53.data('zdkf_type')		å®¢ææå®ç±»å	1:æå®å·¥å· 2:æå®é¨é¨(å·²åºå¼) 3:æå®åç»
	*$53.data('kf')				å·ä½æå®å®¢æ
	*$53.data('is_online')		æ¯å¦å¨çº¿   		0:ç¦»çº¿ 1:å¨çº¿
	*/
	/****************************************äºä»¶å¤çåºç±»å¼å§*************************************/
	function handler(){
		var _this = this;
		_this.app_name = '_53App';
		_this.ipStr = decodeURI(ipStr);
		_this.talkHost = talkHost;
		_this.isOnline = false;
		_this.companyId = companyId;
		_this.fromPage = $53.data('page_referer');
		_this.styleId = styleId;
	}
	handler.prototype.setSession = function(key,value){
		try{
			if(window.sessionStorage){
				sessionStorage.setItem(key,value);
			}else{
				$53.setCookie(key,value);
			}
		} catch (error) {
        	return false;
    	}
		
	}
	handler.prototype.getSession = function(key){
		try{
			if(window.sessionStorage){
				return sessionStorage.getItem(key);
			}else{
				$53.getCookie(key);
			}
		} catch (error) {
        	return false;
    	}
	}
	handler.prototype.getWorkerInfo = function(id6d){
		var workers = $53.data('workers');
		return workers[id6d];
	}
	/**
	*äºä»¶å¤çæ¥å£ï¼å·ä½åè½ç±ç»§æ¿ç±»å®ç°
	*/
	handler.prototype.show = function(){}	//å¾æ /éè¯·æ¡æ¾ç¤º
	handler.prototype.hide = function(){}	//å¾æ /éè¯·æ¡éè
	handler.prototype.talk = function(){}	//ç¹å»å¨è¯¢
	handler.prototype.setMsgTip = function(obj){}	//æ¥æ¶æ¯è®¾ç½®
	/****************************************äºä»¶å¤çåºç±»ç»æ*************************************/

	/****************************************ææºå¾æ ç±»å¼å§*************************************/
	function _53_mobile_icon(icon_set){
		var _this = this;
		_this.isOnline = $53.data('is_online') === '1' ? true:false;
		_this.iconElm = null;
		if(typeof  icon_set.on_is_open != "undefined"){//èæ°æ®å¼å®¹
			_this.on_is_open = icon_set.on_is_open;
			_this.on_left = icon_set.on_left;
			_this.on_top = icon_set.on_top;
			//_this.on_content = icon_set.on_content;
			_this.off_is_open = icon_set.off_is_open;
			_this.off_left = icon_set.off_left;
			_this.off_top = icon_set.off_top;
			//_this.off_content = icon_set.off_content;
		}else {
			_this.on_is_open = icon_set.is_open;
			_this.on_left = icon_set.left;
			_this.on_top = icon_set.top;
			_this.off_is_open = icon_set.is_open;
			_this.off_left = icon_set.left;
			_this.off_top = icon_set.top;
		}
		_this.on_content = icon_set.on_content;
		_this.off_content = icon_set.off_content;
		_this.chat_type = icon_set.chat_type ? icon_set.chat_type : 0;
		_this.lotto_top = icon_set.lotto_top ? icon_set.lotto_top : 45;
		_this.lotto_left = icon_set.lotto_left ? icon_set.lotto_left : 100;
		_this.icon_award = $53.data("icon_award");		

		_this._53Api = $53.createApi();
		_this.init();
	}
	_53_mobile_icon.prototype = new handler();	//ç»§æ¿äºä»¶å¤çåºç±»
	_53_mobile_icon.prototype.init = function(){
		var _this = this;
		_this.on_content = _this.formatContent(_this.on_content);
		_this.off_content = _this.formatContent(_this.off_content);
		_this.createIcon();
		_this.lot = new Lotto();
		_this.lot.iconTalk = function(){
			_this.talk();
		};
		if((_this.isOnline&&_this.on_is_open == 'yes')||(!_this.isOnline&&_this.off_is_open == 'yes')){
			if(mnone != 1) _this.show();
		}
	}
	_53_mobile_icon.prototype.getOpenUrl = function(){
		var _this = this;
		var mobile_config = $53.data("mobileCompanyInfo");
		try{
			if(mobile_config["zdyurl"] != ""){
				var openUrl = mobile_config["zdyurl"];
				if(openUrl.indexOf("http://") == -1 && openUrl.indexOf("https://") == -1) openUrl = talkHost + openUrl;
				if(openUrl.indexOf("?") == -1) openUrl += "?";
			}else {
				var openUrl = talkHost+'/m.php?';
			}
		}catch(e){
			var openUrl = talkHost+'/m.php?';
		}
		var openUrl = openUrl+'kf_sign='+kf_sign+'&cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+hz6d_guest_id+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=50&device='+hz6d_device;
		return openUrl;
	}
	_53_mobile_icon.prototype.show = function(){
		var _this = this;
		_this.iconElm.style.display = 'block';
		_this.setPosition();
	}
	_53_mobile_icon.prototype.hide = function(){
		var _this = this;
		_this.iconElm.style.display = 'none';
	}
	_53_mobile_icon.prototype.talk = function(params){
		var _this = this;
		_this.setSession(_this.companyId+'_invite_times',0);
		location.href = _this.getOpenUrl()+params;
	}
	_53_mobile_icon.prototype.setPosition = function(){
		var _this = this;
		var icon_left = _this.isOnline?_this.on_left:_this.off_left;
		var icon_bottom = 100-(_this.isOnline?_this.on_top:_this.off_top);
		var iconElm = _this.iconElm;

		if(iconElm.firstChild.hasAttribute("53kf_icon_versions")){
			var client_width = document.body.clientWidth || document.documentElement.clientWidth;
			iconElm.firstChild.style.fontSize = 10*client_width/375 + "px";
		}

		var icon_width = iconElm.offsetWidth==0?iconElm.firstChild.offsetWidth:iconElm.offsetWidth;
		var icon_height = iconElm.offsetHeight==0?iconElm.firstChild.offsetHeight:iconElm.offsetHeight;
		var w = window.innerWidth; 
		var h= window.innerHeight; 
		if(iconElm.firstChild){
			iconElm.firstChild.style.position = 'fixed';
			iconElm.firstChild.style.marginLeft = '0px';
			iconElm.firstChild.style.marginTop = '0px';
			iconElm.firstChild.style.height = icon_height+'px';
			iconElm.firstChild.style.left = (w-icon_width)*(icon_left/100)+'px';
			iconElm.firstChild.style.bottom = (h-icon_height)*(icon_bottom/100)+'px';
		}
		if(typeof _this.icon_award.activity_name != "undefined"){
			_this.lot.positionIcon(_this.lotto_left,_this.lotto_top);
		}
	}
	_53_mobile_icon.prototype.createIcon = function(){
		var _this = this;
		$53.creElm({
			'style':'position:fixed;display:none;font-family:Microsoft YaHei,Arial;z-index:1000000;width:auto;height:auto',
			'id':'mobile_icon_div',
			'innerHTML':_this.isOnline?_this.on_content:_this.off_content
		},'div');
		_this.iconElm = document.getElementById('mobile_icon_div');
	}
	_53_mobile_icon.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
				return _this.getEvent(contents.split('|'));
			}
		);
		if(typeof _this.icon_award.award_name != "undefined"){
			content = content.replace(/{jh6d_award_name}/g,_this.icon_award.award_name);
		}
		return content;
	}
	_53_mobile_icon.prototype.setMsgTip = function(obj){
		var _this = this;
		var tipElm = obj.parentNode;
		tipElm.style.display = 'none';
		var msg_tip_count = 0;
		_this._53Api.push('msg_callback',function(){
			tipElm.style.display = 'block';
			msg_tip_count += 1;
			tipElm.innerHTML = msg_tip_count;
		});
		if(typeof icon_msg_tip_hide != "function"){
			window.icon_msg_tip_hide = function(){
				tipElm.style.display = 'none';
				msg_tip_count = 0;
				tipElm.innerHTML = msg_tip_count;
			}
		}
	}
	_53_mobile_icon.prototype.getAppObj = function(obj){
		var _this = this;
		return _this[obj];
	}
	_53_mobile_icon.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		switch(eventArr[0]){
			case 'close':
				eventStr = 'onclick="'+_this.app_name+'.hide(\'icon\');"';
				break;
			case 'talk':
				if(_this.chat_type == 0){
					var params = '';
					if(eventArr[2] == 'group'){
						params += '&zdkf_type=3&kf='+eventArr[3];
					}else if(eventArr[2] == 'kf'){
						var workInfo = _this.getWorkerInfo(eventArr[3]);
						params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
					}else{
						params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'))+'&kflist='+$53.data('kflist');
						var addLinkParams = $53.data("add_link_params");
						if(addLinkParams != null) params+=addLinkParams;
					}
					eventStr = 'onclick="'+_this.app_name+'.talk(\'icon\',\''+params+'\');"';
				}else {
					if(document.getElementById("mini_chat") != null && document.getElementById("mini_chat").length > 0 )
						eventStr = 'onclick="'+_this.app_name+'.getApp(\'chat\').talk(\'\',\'float\');"';
					else
						eventStr = 'onclick="'+_this.app_name+'.getApp(\'chat\').openSdkUrl(\'float\');"';
				}

				break;
			case 'qq':
				//eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+eventArr[1]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
				eventStr = 'onclick="location.href=\'http://wpa.qq.com/msgrd?v=3&uin='+eventArr[1]+'&site=qq&menu=yes\'"';
				break;
			case 'tel':
				eventStr = 'onclick="location.href=\'tel:'+eventArr[1]+'\'"';
				break;
			case 'msgTip':
				eventStr = '<img hidden src="" onerror="'+_this.app_name+'.setMsgTip(\'icon\',this)"/>';
				break;
			case 'lottoShow':
				eventStr = 'onclick="'+_this.app_name+'.getAppObj(\'icon\',\'lot\').lottoShow();"';
				break;
			case 'lottoHide':
				eventStr = 'onclick="'+_this.app_name+'.getAppObj(\'icon\',\'lot\').lottoHide();"';
				break;
			case 'justNum':
				eventStr = 'onclick="'+_this.app_name+'.getAppObj(\'icon\',\'lot\').justNum(this);"';
				break;
			case 'lottoChange':
				var award_id = 0;
				if(typeof _this.icon_award.award_id != "undefined")  award_id = _this.icon_award.award_id;
				eventStr = 'onclick="'+_this.app_name+'.getAppObj(\'icon\',\'lot\').lottoChange(\''+award_id+'\');"';
				break;
			case 'onFocus':
				eventStr = 'onfocus="'+_this.app_name+'.getAppObj(\'icon\',\'lot\').onFocus()"'; 
				break;
			case 'onBlur':
				eventStr = 'onblur="'+_this.app_name+'.getAppObj(\'icon\',\'lot\').onBlur()"'
				break;					
			default:
				break;
		}
		return eventStr;
	}

	/****************************************ææºå¾æ ç±»ç»æ*************************************/

	/****************************************ææºæ½å¥ç±»ç»æ*************************************/
	function Lotto(){
		this.icon = document.getElementById("lotto_icon");
		this.l = document.getElementById("lotto_redpacket");
		this.d = document.getElementById("lotto_decorate");
		this.r = document.getElementById("lotto_round");
		this.i = document.getElementById("lotto_inp");
		this.m = document.getElementById("lotto_message");
		this.w = document.getElementById("lotto_win");
		this.b = document.getElementById("lotto_btn");
		this.t = document.getElementById("lotto_btntext");
		this.s = document.getElementById("lotto_s");
		this.n = document.getElementById("lotto_name");
		this.p = document.getElementById("lotto_phonenum");
		this.u = document.getElementById("lotto_statu");
	};
	Lotto.prototype = {
		// æ½å¥å¾æ font-sizeåå§å
		lotFontSize:function(){
			var _this = this;
			var client_width = document.body.clientWidth || document.documentElement.clientWidth;
			var ratio = client_width/375;
			if(this.icon.hasAttribute("53kf_icon_versions")){
				this.icon.style.fontSize = 10*ratio + "px";
			}
			_this.icon.style.display = "block";
		},
		//è®¾ç½®æ½å¥ä½ç½®
		positionIcon : function(left,top){
			var _this = this;
			//var wid=document.documentElement.clientWidth;
			//var hei=document.documentElement.clientHeight;
			_this.lotFontSize();
			var wid = document.documentElement.clientWidth,hei;
			if(navigator.appName == "Microsoft Internet Explorer"){
				hei=document.documentElement.clientHeight;
			}else{
				hei=window.innerHeight;
			}

			_this.icon.style.left =( wid-parseInt(_this.icon.offsetWidth))*(left/100) + 'px';
			_this.icon.style.top = (hei-parseInt(_this.icon.offsetHeight))*(top/100) + 'px';
		},
		// æ½å¥çº¢ååºç°
		lottoShow : function(){
			var _this = this;
			if(_this.l.style.display == "none"){
				_this.b.setAttribute('data-class',0);
				_this.l.style.display = "block";
				_this.r.style.display = "block";
				_this.d.style.display = "none";
				_this.m.style.display = "none";
				_this.i.style.display = "none";
				_this.w.style.display = "none";
				_this.t.innerHTML = "ç«å³æ½å¥";
				_this.s.style.display = "inline-block";
				clearInterval(_this.timout);
				_this.s.innerHTML = "(60s)";
				_this.timeGo();
			}else{
				return false;
			}
		},
		// æ½å¥çº¢åéè
		lottoHide : function(){
			clearInterval(this.timout);
			this.s.innerHTML = "(60s)";
			this.n.value = "";
			this.p.value = "";
			this.l.style.display = "none";
		},
		// æ½å¥ç¶æåæ¢(å¾æ·»å éªè¯ï¼è¯¥ææºå·ç å·²é¢åå¥å±)
		lottoChange : function(award_id){
			var _this = this;
			if(!obj) var obj = _this.b;
			if(_this.b.getAttribute('data-class') == 0){
				_this.b.setAttribute('data-class',1);
				_this.r.style.display = "none";
				_this.d.style.display = "block";
				_this.m.style.display = "block";
				_this.i.style.display = "block";
				_this.t.innerHTML = "ç«å³é¢å";
				_this.s.style.display = "inline-block";
				clearInterval(_this.timout);
				_this.s.innerHTML = "(60s)";
				_this.timeGo();
			}else if(_this.b.getAttribute('data-class') == 1){
				var mobil = /^1[3-9]\d{9}$/;
				if(_this.p.value == ""){
					_this.statuSh("è¯·è¾å¥ææºå·ç ");
					return false;
				}else if(!mobil.test(_this.p.value)){
					_this.statuSh("è¯·è¾å¥ææçææºå·ç ");
				}else{
					var script_id = 'kf_script_award';
					var name = _this.n.value;
					var mobile = _this.p.value;
					var callBackFunName = "award_callback_"+new Date().getTime();
					eval(callBackFunName + '= function(data){_this.createResult(data)}');

					var url = hz6d_alias_host+'/client/kfapi_award.php?company_id='+companyid+'&style='+hz6d_style_id+'&guest_id='+hz6d_guest_id+'&name='+encodeURIComponent(name)+'&mobile='+mobile+'&award_id='+award_id+'&callback='+callBackFunName+'&device=2';
					$53.createScript(script_id,url);
					_this.t.innerHTML = "æ½å¥ä¸­...";
					_this.s.style.display = "none";
					clearInterval(_this.timout);
				}
			}else{
				// console.log("ç¹å»å»ºç«å¯¹è¯");
				_this.iconTalk();
				_this.l.style.display = "none";
			}
		},
		createResult:function(data){
			var _this = this;
			if(data.code == 200){
				_this.b.setAttribute('data-class',2);
				_this.r.style.display = "none";
				_this.m.style.display = "none";
				_this.i.style.display = "none";
				_this.w.style.display = "block";
				_this.t.innerHTML = "å¨è¯¢å¨çº¿å®¢æ";
				_this.s.style.display = "none";
				_this.icon.style.display = "none";
			}else{
				_this.statuSh(data.info);
			}			
		},
		// ç¶ææé
		statuSh : function(str){
			var _this = this;
			_this.u.innerHTML = str;
			_this.u.style.display = "block";
			_this.u.style.marginLeft = (-_this.u.offsetWidth/2) + "px";
			_this.u.style.left = "50%";
			var timer = setTimeout(function(){
				_this.u.style.display = "none";
				clearTimeout(timer);
			},1500)
		},
		// ç¦æ­¢è¾å¥éæ°å­
		justNum : function(obj) {
			obj.value = obj.value.replace(/[^\d]/g,'');
		},
		// 60såè®¡æ¶
		timeGo : function() {
			var _this = this;
			var count = 60;
			_this.timout = setInterval(function(){
				count--;
				_this.s.innerHTML = "("+count+"s)";
				if(count == 0){
					clearInterval(_this.timout)
					_this.l.style.display = "none";
				}
			},1000)
		},
		// è·åç¦ç¹
		onFocus : function(){
			if( $53.data('mobile_chat').chat_bottom != 2 ){
				if(document.getElementById("mobile_minchat_div")){
					document.getElementById("mobile_minchat_div").style.display = "none";
				}
			}
		},
		// å¤±å»ç¦ç¹
		onBlur : function(){
			if( $53.data('mobile_chat').chat_bottom != 2 ){
				if(document.getElementById("mobile_minchat_div")){
					document.getElementById("mobile_minchat_div").style.display = "block";
				}
			}
		},
		iconTalk : function(){}
	};
	/****************************************ææºæ½å¥ç±»ç»æ*************************************/

	
	/****************************************ææºéè¯·æ¡ç±»å¼å§***********************************/
	function _53_mobile_ivt(ivt_set){
		var _this = this;
		_this.isOnline = $53.data('is_online') === '1'?true:false;
		_this.ivtElm = null;
		_this.is_open = ivt_set.is_open;
		_this.invite_off = ivt_set.invite_off;
		_this.invite_left = ivt_set.invite_left;
		_this.invite_top = ivt_set.invite_top;
		_this.invite_area = ivt_set.invite_area;
		_this.fanfu_time = ivt_set.fanfu_time;
		_this.invite_times = ivt_set.invite_times;
		_this.page_times = ivt_set.page_times;
		_this.timeout = ivt_set.timeout;
		_this.ivt_content = ivt_set.content;
		_this.force_kf = "";//å®¢æå¼ºå¶éè¯·æ°æ®
		_this.man_content = "";//å®¢æå¼ºå¶éè¯·ææ¬ï¼æä¸ä½¿ç¨
		_this.acc_from_kf = false;//æ¯å¦ä¸ºå®¢æå¼ºå¶éè¯·
		if(typeof ivt_set.invite_is_reauto != 'undefined') _this.invite_is_reauto = ivt_set.invite_is_reauto;
		else _this.invite_is_reauto = 2;
		_this.init();
	}
	_53_mobile_ivt.prototype = new handler();	//ç»§æ¿äºä»¶å¤çåºç±»
	_53_mobile_ivt.prototype.init = function(){
		var _this = this;
		_this.ivt_content = _this.formatContent(_this.ivt_content);
		_this.createIvt();
		if(_this.getSession(_this.companyId+'_invite_times') == null){
			_this.setSession(_this.companyId+'_invite_times',_this.invite_times);
		}
		if(_this.is_open == 'yes'&&(_this.isOnline||(!_this.isOnline&&_this.invite_off == 'yes'))){
			setTimeout(function(){
				if(mnone != 1) _this.show("first");
			},_this.timeout*1000)
		}

		window.hz6d_showIvt = function(){//æå¨éè¯·
			_this.forceShow();
		}
	}
	_53_mobile_ivt.prototype.createIvt = function(){
		var _this = this;
		$53.creElm({
			'style':'display:none;position:fixed;font-family:Microsoft YaHei,Arial;z-index:1000000;',
			'id':'mobile_ivt_div',
			'innerHTML':_this.ivt_content
		},'div');
		_this.ivtElm = document.getElementById('mobile_ivt_div');
	}
	_53_mobile_ivt.prototype.getOpenUrl = function(){
		var _this = this;
		var mobile_config = $53.data("mobileCompanyInfo");
		try{
			if(mobile_config["zdyurl"] != ""){
				var openUrl = mobile_config["zdyurl"];
				if(openUrl.indexOf("http://") == -1 && openUrl.indexOf("https://") == -1) openUrl = talkHost + openUrl;
				if(openUrl.indexOf("?") == -1) openUrl += "?";
			}else {
				var openUrl = talkHost+'/m.php?';
			}
		}catch(e){
			var openUrl = talkHost+'/m.php?';
		}
		var openUrl = openUrl+'kf_sign='+kf_sign+'&cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+hz6d_guest_id+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=51&device='+hz6d_device;
		return openUrl;
	}
	_53_mobile_ivt.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
				return _this.getEvent(contents.split('|'));
			}
		);
		return content;
	}
	_53_mobile_ivt.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		switch(eventArr[0]){
			case 'close':
				eventStr = 'onclick="'+_this.app_name+'.hide(\'invite\');"';
				break;
			case 'talk':
				var params = '';
				if(eventArr[2] == 'group'){
					params += '&zdkf_type=3&kf='+eventArr[3];
				}else if(eventArr[2] == 'kf'){
					var workInfo = _this.getWorkerInfo(eventArr[3]);
					params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
				}else{
					params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'));
				}
				eventStr = 'onclick="'+_this.app_name+'.talk(\'invite\',\''+params+'\');"';
				break;
			case 'qq':
				//eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+eventArr[1]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
				eventStr = 'onclick="location.href=\'http://wpa.qq.com/msgrd?v=3&uin='+eventArr[1]+'&site=qq&menu=yes\'"';
				break;
			case 'tel':
				eventStr = 'onclick="location.href=\'tel:'+eventArr[1]+'\'"';
				break;
			case 'new_tel':
				eventStr = 'onclick="$53.callPriPhone()"';
				break;
			default:
				break;
		}
		return eventStr;
	}
	_53_mobile_ivt.prototype.checkArea = function(){
		var _this = this;
		var ipStr = _this.ipStr;
		if(typeof _this.invite_area == "undefined" || _this.invite_area == "") return true;
		var setAreas = _this.invite_area.split(',');
		if(setAreas.length <= 0){
			return true;
		}
		var citys = [];
		for(var i in setAreas){
			citys = setAreas[i].split('.');
			if(citys.length >=1 && ipStr.indexOf(citys[1]) >=0){
				return true;
			}else if(citys.length == 1 && ipStr.indexOf(citys[0]) >=0){
				return true;
			}
		}
		return false;
	}
	_53_mobile_ivt.prototype.talk = function(params){
		var _this = this;
		_this.setSession(_this.companyId+'_invite_times',0);
		var location_href = _this.getOpenUrl()+params;
		if(_this.acc_from_kf == true) location_href += _this.force_kf;
		location.href = location_href;	
	}
	_53_mobile_ivt.prototype.show = function(type){
		var _this = this;
		try{
			if(document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display == 'block') {
				return false;
			}
		}catch (e){}
		if(_this.ivtElm.style.display == 'block'){
			return false;
		}
		if(_this.checkArea() === false){
			return false;
		}
		if(_this.page_times<=0){
			return false;
		}
		if(_this.invite_is_reauto == 2){
			var invite_times = _this.getSession(_this.companyId+'_invite_times');
			if(invite_times == '' || invite_times <=0){
				return false;
			}
			invite_times--;
			_this.setSession(_this.companyId+'_invite_times',invite_times);
		}else{
			if(type != "first"){
				if(_this.invite_is_reauto != 1 || _this.invite_times <=0){
					return false;
				}
				_this.invite_times--;
			}
		}
		
		_this.page_times--;
		_this.ivtElm.style.display = 'block';
		_this.setPosition();
	}
	_53_mobile_ivt.prototype.forceShow = function(){
		var _this = this;
		if(typeof force_kf != "undefined" && typeof man_content != "undefined" && typeof acc_from_kf != "undefined"){
			_this.force_kf = force_kf;
			_this.man_content = man_content;
			_this.acc_from_kf = acc_from_kf;
			force_kf = "";
			man_content = "";
			acc_from_kf = false;
		}		
		if(_this.ivtElm.style.display == "none"){
			_this.ivtElm.style.display = 'block';
			_this.setPosition();
		}		
	}
	_53_mobile_ivt.prototype.hide = function(){
		var _this = this;
		_this.force_kf = "";
		_this.man_content = "";
		_this.acc_from_kf = false;
		_this.ivtElm.style.display = 'none';
		if(_this.fanfu_time>0 && _this.is_open == 'yes' && (_this.isOnline || (!_this.isOnline&&_this.invite_off == 'yes')) ){
			setTimeout(function(){
				_this.show();
			},_this.fanfu_time*1000);
		}
	}
	_53_mobile_ivt.prototype.setPosition = function(){
		var _this = this;
		var invite_left = _this.invite_left;
		var invite_bottom = 100-_this.invite_top;
		var ivtElm = _this.ivtElm;
		var ivt_width = ivtElm.offsetWidth==0?ivtElm.firstChild.offsetWidth:ivtElm.offsetWidth;
		var ivt_height = ivtElm.offsetHeight==0?ivtElm.firstChild.offsetHeight:ivtElm.offsetHeight;
		var w = window.innerWidth; 
		var h= window.innerHeight; 
		ivtElm.firstChild.style.marginLeft = '0px';
		ivtElm.firstChild.style.marginTop = '0px';
		ivtElm.style.height = ivt_height+'px';
		ivtElm.style.left = (w-ivt_width)*(invite_left/100)+'px';
		ivtElm.style.bottom = (h-ivt_height)*(invite_bottom/100)+'px';
	}
	/****************************************ææºéè¯·æ¡ç±»ç»æ***********************************/


	/****************************************ææºèåæ ç±»å¼å§***********************************/
	function _53_mobile_chat(chat_set){
		var _this = this;
		//if($53.data("is_update") == false) return;
		_this.isOnline = $53.data('is_online') === '1'?true:false;
		_this.params = "";
		_this.kf_openurl = "";
		_this.window_scroll_top = 0;
		_this.items = [];
		_this.item = 0;
		_this.audio = null;

		_this.chatElm = null;
		_this.is_open = chat_set.is_open;
		_this.chat_type = chat_set.chat_type;
		_this.chat_window = chat_set.chat_window;
		_this.chat_pop_time = chat_set.chat_pop_time;
		_this.chat_is_reauto = chat_set.chat_is_reauto;
		_this.chat_reauto_time = chat_set.chat_reauto_time;
		_this.chat_pop_num = chat_set.chat_pop_num;
		_this.chat_bottom = chat_set.chat_bottom;
		_this.chat_air = chat_set.chat_air;
		_this.chat_content_color = chat_set.chat_content_color;
		_this.chat_air_bg_color = chat_set.chat_air_bg_color;
		_this.chat_num_show = chat_set.chat_num_show;
		_this.chat_auto_show = typeof chat_set.chat_auto_show == "undefined" ? 0 : chat_set.chat_auto_show;
		_this.open_sdk = chat_set.open_sdk;
		_this.chat_off = chat_set.chat_off;
		_this.chat_content = chat_set.content;
		_this.mobile_chat_data = eval('('+chat_set.mobile_chat_data+')');
		_this.mobile_config = $53.data("mobileCompanyInfo");
		_this.chat_pop_times = 0;//ä¸»å¨åèµ·å¾ªç¯å®æ¶å¨
		_this.force_kf = "";//å¼ºå¶å¯¹è¯ä¿¡æ¯
		_this.card_worker_name = "å®¢æå¨è¯¢";//å¡çæ¨¡å¼å®¢æåç§°
		_this.is_handle_talk = false;//å¤æ­æ¯å¦å¤çè¿ä¸»å¨åèµ·æªå¼æå¯¹è¯æåµï¼é²æ­¢kf_newåå è½½
		_this.init();
		_this.topOffset = '';
		_this.open_time = new Date().getTime();
	}
	_53_mobile_chat.prototype = new handler();	//ç»§æ¿äºä»¶å¤çåºç±»
	_53_mobile_chat.prototype.init = function(){
		var _this = this;
		_this.chat_content = _this.formatContent(_this.chat_content);

		if(_this.is_open == 1 && _this.chat_type == 0 && (_this.isOnline||(!_this.isOnline && _this.chat_off == 1))){
			_this.createChat();
			if(_this.chat_bottom != 2) _this.show();
			if(_this.open_sdk == 0){
				if (_this.chat_pop_time>0) {
					setTimeout(function() {
						if(document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display != 'block') {
							_this.talk();
						}
					},_this.chat_pop_time * 1000);
				}else{
					if(document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display != 'block') {
						_this.talk();
					}
				}
			}
		}

		_this.isTalkHandle();
		
     	window.acc_chattype = 3; //å¼ºå¶å¯¹è¯æ¹å¼ 1ï¼è¦çå½åçªå£ 2ï¼å¼¹åºæ°çªå£ï¼å¦å¤±è´¥ï¼åè¦ç 3ï¼æ¬æµ®å¯¹è¯çªå£(pcç«¯ä½¿ç¨ï¼ææºç«¯å¼ºå¶å¯¹è¯å¼å®¹)
		window.show_mobile_chat = function(){_this.talk()};
		window.close_mobile_chat = function(){_this.hide()};
		window.change_kf_openurl = function(param){
			if(typeof param != "undefined" )_this.params = param;
			_this.openSdkUrl()
		};
		window.get_location = function(){_this.forceOpen()};//å¼ºå¶å¯¹è¯
		window.hide_chat_card = function(e){_this.hideCard(e)}
		window.addEventListener("message", function( event ) {
         	try{
 	            _this.handleEventlisten(event.data);
 		    }catch(e){}
 	    }, false );
		window.handle_is_talk = function(){//é²æ­¢kf_newåå è½½
			_this.isTalkHandle();
		}

 	    // çå¬ç©çè¿å
		if((_this.mobile_config["stop_back"] == 1) && window.history && window.history.pushState) {
			if(navigator.userAgent.toLowerCase().indexOf('baiduboxapp') < 0){
				window.addEventListener("popstate", function(e) {
		 			_this.hide();
				}, false);
			}
		}
	}
	_53_mobile_chat.prototype.isTalkHandle = function(){//å¦æinitåå è½½
		var _this = this;
		if($53.data("is_talk") != null && $53.data("is_talk") != '' && _this.is_open != 1 && _this.is_handle_talk === false) {//æå¯¹è¯æ 
			_this.is_handle_talk = true;
			_this.force_kf = $53.data("is_talk");
			_this.changeSetting();
			_this.createChat();
		}
	}
	_53_mobile_chat.prototype.handleEventlisten = function(data){
		var _this = this;
		if(data.indexOf('53kf_new_msg') != -1){
			if(document.getElementById('msg_tip')){
				var msg_tip_dom = document.getElementById('msg_tip');
				if(msg_tip_dom.innerHTML != 'x' || _this.chat_window != 1) {
					if(msg_tip_dom.innerHTML == "x") msg_tip_dom.innerHTML = 0;
					if(_this.chat_num_show != 0) msg_tip_dom.style.display='block';
					msg_tip_dom.innerHTML = 1 + parseInt(msg_tip_dom.innerHTML);
				}
			}
			if(!document.getElementById('msg_tip') || msg_tip_dom.innerHTML != 'x' || _this.chat_window != 1){
				_this.msgSlid(_this.contentCode(data.substring(13)));
				try{
					if(_this.open_sdk == 0) _this.audio.play();
				}catch(e){}
			}
			try{
				$53.callMsg();//åè°èªå®ä¹æ¥æ¶æ¯æ¹æ³
			}catch(e){}
			return
		}
		if(data == "close"){
			_this.hide();
			if(_this.mobile_config["stop_back"] == 1 && window.history.state == 'forwardLIII'){
				window.history.go(-1);	
			}
		}
		if(data == "map_close"){
			document.getElementById('bd_map').style.display='none';
		}
		if(data == "windowCnt" && _this.chat_window != 1){
			_this.chatPop();
		}
		if(data.indexOf('tel:') != -1){
			window.location.href = data;
		}
		if(data.indexOf('ios12.0_vx_float_blur') != -1){
			document.activeElement.scrollIntoViewIfNeeded(true);
		}
		if(data.indexOf('worker_name') != -1){
			_this.card_worker_name = data.substring(12);
			try{
				document.getElementById("card_worker_name").innerHTML = _this.card_worker_name;
			}catch (e){}
		}
		if(data == "ios13_float_blur"){
			document.documentElement.scrollTop = _this.topOffset;
			document.body.scrollTop = _this.topOffset;
		}
		if(data == "ios13_float_focus"){
			_this.topOffset = document.documentElement.scrollTop || document.body.scrollTop;

		}
		if(data == "get_force"){
			_this.forceOpenLnk();
		}
	}
	_53_mobile_chat.prototype.createChat = function(){
		var _this = this;
		//å¢å æ ·å¼ç±»
    	$53.creElm({
			'innerHTML':'body{margin:0;}#scroll-wrapper{-webkit-overflow-scrolling: touch; overflow-y: scroll;}@-webkit-keyframes twinkling{0% {opacity:0;} 100%{ opacity:1;}}.face_twinkle{-webkit-animation: twinkling 0.5s infinite ease-in-out;}#toolbar img{display:inline;}#toolbar a{color:white;font-size:16px;}html{-webkit-tap-highlight-color: rgba(0,0,0,0);}'
		},'style');

		$53.creElm({
			'style':'font-size: 0px; z-index: 1000000; position: fixed; bottom: 0px;height:50px;width: 100%;display:none;',
			'id':'mobile_minchat_div',
			'innerHTML':'<span id="mobile_minchat_btn_line" style="position: absolute;width: 100%;background:rgba(0,0,0,.1);overflow: hidden;height: 1px;top:0;left: 0;"></span>'+_this.chat_content
		},'div');
		_this.chatElm = document.getElementById('mobile_minchat_div');
		var is_uc = 0;
		var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		if (is_ios && navigator.userAgent.indexOf("UCBrowser") != -1) {
			is_uc = 1;
		}
		_this.createMinChat(is_ios,is_uc);
		_this.audio = document.createElement("audio");
		if (_this.mobile_config["mobile_music"] != "" && _this.audio != null && _this.audio.canPlayType && _this.audio.canPlayType("audio/mpeg") && _this.isOnline) {
			_this.audio.src = _this.talkHost+"/sound/"+_this.mobile_config["mobile_music"]+".mp3";
			//IOS ä¸åè®¸èªå¨æ­æ¾å£°é³ éè¦ç¨æ·è§¦å IOS 9ä»¥ä¸éè¦åloadæè½æ­æ¾
			_this.audio.load();
			var play_voice = function() {
				_this.audio.play();
			}
			window.addEventListener('touchstart', play_voice, false);
			_this.audio.addEventListener('play', function() {window.removeEventListener('touchstart', play_voice, false);}, false);
		}
	}
	_53_mobile_chat.prototype.createMinChat = function(is_uc,is_ios,type){
		var _this = this;
		if(!!document.getElementById("mini_chat")) return;
		if((_this.is_open == 1 && _this.open_sdk == 0) || type != undefined){
			//if(_this.chat_window == 1 )
				_this.kf_openurl = _this.getOpenUrl() + _this.params + _this.force_kf + '&minchat=1#' + location.href;
			//else _this.kf_openurl = _this.getOpenUrl() + _this.params + _this.force_kf + '&is_minchat=1#' + location.href;

			var iframe_close_html = '';

			var close_top = _this.mobile_config["minchat_height"] == "" ? "10%" : ((100-_this.mobile_config["minchat_height"])+"%");

			if(_this.mobile_config["zdyurl"] != ""){
				iframe_close_html = '<a style="position:fixed;top:'+close_top+';right:0px;width:44px;height:44px;z-index:99999999102;" id="iframe-close" class="close" onclick="close_mobile_chat()"><div class="header-down"><span style="position: absolute;top: 10px;left: 10px;"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m0 0h24v24h-24z"></path><path d="m12 13.414-6.364 6.364-1.414-1.414 6.364-6.364-6.364-6.364 1.414-1.414 6.364 6.364 6.364-6.364 1.414 1.414-6.364 6.364 6.364 6.364-1.414 1.414z" fill="#fff"></path></g></svg></span></div></a>';
			}

			var minchat_height = _this.mobile_config["minchat_height"] == "" ? "90%" : (_this.mobile_config["minchat_height"]+"%");
			if(is_ios && is_uc){//IOSæµè§å¨srcä¸ºç©ºä¼å¯¼è´éå¤è¯·æ±
				$53.creElm({
					'id': 'mini_chat',
					'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.4);',
					'innerHTML':'<br /><div id="i_div" style=" opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe id="iframe_mobile_chat" scrolling="no" style="height:'+minchat_height+'; width:100%;width: 1px!important;min-width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl +'"></iframe>'+iframe_close_html
				},'div');
			}else if(is_ios){
				$53.creElm({
					'id': 'mini_chat',
					'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.4);',
					'innerHTML':'<br /><div id="i_div" style=" opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe id="iframe_mobile_chat"  scrolling="no" style="height:'+minchat_height+'; width:100%;width: 1px!important;min-width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl +'"></iframe>'+iframe_close_html
				},'div');
			}else{
				$53.creElm({
					'id': 'mini_chat',
					'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.4);',
					'innerHTML':'<br /><div id="i_div" style=" opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe id="iframe_mobile_chat" style="height:'+minchat_height+'; width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl +'"></iframe>'+iframe_close_html
				},'div');
			}
			document.getElementById("mini_chat").onclick = function(){
				_this.hide();
			}
		}
	}
	_53_mobile_chat.prototype.createMap = function(is_uc,is_ios){
		var _this = this;
		if(is_ios && is_uc){//IOSæµè§å¨srcä¸ºç©ºä¼å¯¼è´éå¤è¯·æ±
			$53.creElm({
				'id': 'bd_map',
				'style': 'position:fixed;height: 500px;display:none;z-index:1000001',
				'innerHTML':'<br /><div onclick="document.getElementById(\'bd_map\').style.display=\'none\'" style="width:25px; height:25px; position:fixed; top:5%; right:6%; z-index:9999102; color:#fff;"><img src="'+_this.talkHost+'/style/setting/ver06/img/mobile/mobile_chat/off.png?20150709" width="25" /></div><div style="background:#000; opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe frameborder="0" vspace="0" id="bd_map_ifr" style="height:94%; width:94%;  position:fixed; top:3%; left:3%; z-index:9999101" src=""></iframe>'
			},'div');
		}else if(is_ios){
			$53.creElm({
				'id': 'bd_map',
				'style': 'position:fixed;height: 500px;display:none;z-index:1000001',
				'innerHTML':'<br /><div onclick="document.getElementById(\'bd_map\').style.display=\'none\'" style="width:25px; height:25px; position:fixed; top:5%; right:6%; z-index:9999102; color:#fff;"><img src="'+_this.talkHost+'/style/setting/ver06/img/mobile/mobile_chat/off.png?20150709" width="25" /></div><div style="background:#000; opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe frameborder="0" vspace="0" id="bd_map_ifr" style="height:94%; width:94%;  position:fixed; top:3%; left:3%; z-index:9999101" src=""></iframe>'
			},'div');
		}else{
			$53.creElm({
				'id': 'bd_map',
				'style': 'position:fixed;height: 500px;display:none;z-index:1000001',
				'innerHTML':'<br /><div onclick="document.getElementById(\'bd_map\').style.display=\'none\'" style="width:25px; height:25px; position:fixed; top:5%; right:6%; z-index:9999102; color:#fff;"><img src="'+_this.talkHost+'/style/setting/ver06/img/mobile/mobile_chat/off.png?20150709" width="25" /></div><div style="background:#000; opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe frameborder="0" vspace="0" id="bd_map_ifr" style="height:100%; width:100%;  position:fixed; top:0%; left:0%; z-index:9999101" src=""></iframe>'
			},'div');
		}
	}
	_53_mobile_chat.prototype.getOpenUrl = function(){
		var _this = this;
		try{
			if(_this.mobile_config["zdyurl"] != ""){
				var openUrl = _this.mobile_config["zdyurl"];
				if(openUrl.indexOf("http://") == -1 && openUrl.indexOf("https://") == -1) openUrl = _this.talkHost + openUrl;
				if(openUrl.indexOf("?") == -1) openUrl += "?";
			}else {
				var openUrl = _this.talkHost+'/m.php?';
			}
		}catch(e){
			var openUrl = _this.talkHost+'/m.php?';
		}
		openUrl += 'kf_sign='+kf_sign+'&cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+hz6d_guest_id+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=51&device='+hz6d_device;
		return openUrl;
	}
	_53_mobile_chat.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\/style\/setting\/ver07\/img\/mobile_config\/icon2\.png/g,_this.talkHost+'/style/setting/ver07/img/mobile_config/icon2.png');
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
					return _this.getEvent(contents.split('|'));
				}
		);
		return content;
	}
	_53_mobile_chat.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		if(eventArr[0] == "bindEvent"){
			var mobile_chat_data = _this.mobile_chat_data;
			var active = eventArr[1];
			var active1 = active.replace(/[0-9]/ig,"");
			if(typeof mobile_chat_data[active] == "undefined"){
				console.log("event:"+active1+" is not defined");
				return "";
			}
			switch(active1){
				case 'advice':
					var params = '';
					if(eventArr[2] == 'group'){
						params += '&zdkf_type=3&kf='+eventArr[3];
					}else if(eventArr[2] == 'kf'){
						var workInfo = _this.getWorkerInfo(eventArr[3]);
						params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
					}else{
						params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'))+'&kflist='+$53.data('kflist');
						var addLinkParams = $53.data("add_link_params");
						if(addLinkParams != null) params+=addLinkParams;
					}
					_this.params = params;
					eventStr = 'onclick="'+_this.app_name+'.talk(\'chat\',\'\');"';
					break;
				case 'qq':
					// eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+mobile_chat_data[active]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
					eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+mobile_chat_data[active]+'&version=1&src_type=web&web_src=#\'"';
					// eventStr = 'onclick="location.href=\'http://wpa.qq.com/msgrd?v=3&uin='+mobile_chat_data[active]+'&site=qq&menu=yes\'"';
					
					break;
				case 'iphone':
				case 'phone':
					var mobile_chat_iphone  = "";
					var other_iphone = "";
					var first_iphone = "";
					if(mobile_chat_data[active] == ""){
						eventStr = 'onclick="$53.callPriPhone()"';
					}else{
						for (var i=0; i < mobile_chat_data[active].length; i++) {
							var areas = mobile_chat_data[active][i].area.split("ã");
							var iphone = mobile_chat_data[active][i].iphone;
							if(i==0) first_iphone = iphone;
							for (var p=0; p < areas.length; p++) {
								if(_this.ipStr.indexOf(areas[p]) > -1){
									mobile_chat_iphone = iphone;
									break;
								}
								if(areas[p] == "å¶ä»å°åº")
									other_iphone = iphone;
							}
						}
						if(other_iphone != "" && mobile_chat_iphone == "") mobile_chat_iphone = other_iphone;
						if(mobile_chat_iphone == "") mobile_chat_iphone = first_iphone;
						eventStr = 'onclick="location.href=\'tel:'+mobile_chat_iphone+'\'"';
					}
					break;
				case "map":
					var mobile_chat_addr = "";
					var other_addr = "";
					var first_addr = "";
					for (var i=0; i < mobile_chat_data[active].length; i++) {
						var areas = mobile_chat_data[active][i].area.split("ã");
						var addr = mobile_chat_data[active][i].addr;
						if(i==0) first_addr = addr;
						for (var p=0; p < areas.length; p++) {
							if(_this.ipStr.indexOf(areas[p]) > -1){
								mobile_chat_addr = addr;
								break;
							}
							if(areas[p] == "å¶ä»å°åº")
								other_addr = addr;
						}
					}
					if(other_addr != "" && mobile_chat_addr == "") mobile_chat_addr = other_addr;
					if(mobile_chat_addr == "") mobile_chat_addr = first_addr;
					var is_uc = 0;
					var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
					if (is_ios && navigator.userAgent.indexOf("UCBrowser") != -1) {
						is_uc = 1;
					}
					_this.createMap(is_ios,is_uc);
					var bd_src = document.getElementById('bd_map_ifr');
					var mobile_config = $53.data("mobileCompanyInfo");
					if((bd_src.src).indexOf('bdmap') == -1) {
						bd_src.src = _this.talkHost+'/bdmap_new.php?img='+mobile_config["company_logo"]+'&name='+mobile_config["company_short"]+'&intr='+mobile_config["company_intr"]+'&address='+mobile_chat_addr;
					}
					eventStr = 'onclick="document.getElementById(\'bd_map\').style.display=\'block\'"';
					break;
				case "web":
					eventStr = 'onclick="location.href=\''+mobile_chat_data[active]+'\'"';
					break;
				default:
					break;
			}
		}
		return eventStr;
	}
	_53_mobile_chat.prototype.talk = function(type){
		var _this = this;
		if(_this.chat_window == 1 || type=="float"){

			var sysInfo = _this.getSys();
			// if(sysInfo == 'ios') var iosSYS = ((navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/))[1]).split(/_/g)[0];

			_this.window_scroll_top = window.scrollY;
			
			// if(iosSYS != 13 && iosSYS != 12){
			// }
			(document.getElementsByTagName('body')[0]).style.overflow = 'hidden';
			(document.getElementsByTagName('body')[0]).style.position = 'fixed';
			(document.getElementsByTagName('body')[0]).style.width="100%";
			try{
				document.getElementById("mini_chat").style.width="100%";
				document.getElementById('mini_chat').style.display='block';
			}catch (e){}
			if(document.getElementById('msg_tip')){
				document.getElementById('msg_tip').style.display='none';
				document.getElementById('msg_tip').innerHTML = 'x';
			}
			try {
				document.getElementById("iframe_mobile_chat").contentWindow.postMessage("auto", '*');
			}catch (e){}

			if(_this.mobile_config["stop_back"] == 1 && navigator.userAgent.toLowerCase().indexOf('baiduboxapp') < 0) window.history.pushState('forwardLIII', null, '#');
			
			if(typeof icon_msg_tip_hide == "function") icon_msg_tip_hide();
			$53.callBackFun("miniShow");
		}else{
			if(document.getElementById('msg_tip')){
				document.getElementById('msg_tip').style.display='none';
				document.getElementById('msg_tip').innerHTML = 'x';
			}
			//var new_kf_openurl = _this.kf_openurl.split("#");
			//var new_kf_openurl2 = new_kf_openurl[0]+"&fromopen=1#"+new_kf_openurl[1];
			var new_kf_openurl = _this.getOpenUrl() + _this.params + _this.force_kf + '&is_minchat=1&historylen='+parseInt(window.history.length)+'&locahref='+encodeURIComponent(location.href);
			var new_kf_openurl2 = new_kf_openurl+"&fromopen=1#"+location.href;
			try{
				if(!document.getElementById("mini_open_53kf_div") &&ã!document.getElementById("mini_open_53kf_div_company")){
					$53.creElm({
						'id':'mini_open_53kf_div',
						'style': 'display:none',
						'innerHTML': '<a href="'+new_kf_openurl2+'" id="mini_open_53kf_a" target="_blank">ç¹å»å¨è¯¢</a>'
					},'div');
				}
				if(document.getElementById("mini_open_53kf_div_company"))
					document.getElementById("mini_open_53kf_a").href = new_kf_openurl2;
				var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //å¤æ­æ¯å¦ä¸ºiosææº
				if(is_ios){
					document.getElementById("mini_open_53kf_a").onclick();
				}else{
					document.getElementById("mini_open_53kf_a").click();
				}
				window.location.href = new_kf_openurl2;
			}catch(e){
				window.location.href = new_kf_openurl2;
			}
		}
		try {_this.hideCard();}catch (e){}
	}
	_53_mobile_chat.prototype.chatPop = function(){
		var _this = this;
		if(_this.chat_is_reauto == 1 && _this.chat_reauto_time>0){
			try{if(_this.chat_pop_times) clearTimeout(_this.chat_pop_times)}catch (e){};
			_this.chat_pop_times = setTimeout(function() {
				if(_this.chat_pop_num > 0) {
					if(document.getElementById('msg_tip').innerHTML != 'x') {
						_this.talk();
						_this.chat_pop_num--;
					}
				}
			},_this.chat_reauto_time * 1000);
		}
	}
	_53_mobile_chat.prototype.openSdkUrl = function(type){
		var _this = this;
		var is_uc = 0;
		var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		if (is_ios && navigator.userAgent.indexOf("UCBrowser") != -1) {
			is_uc = 1;
		}
		_this.createMinChat(is_ios,is_uc,true);
		_this.talk(type);
	}
	_53_mobile_chat.prototype.forceOpen = function(){
		var _this = this;
		if(typeof force_kf != "undefined"){
			_this.force_kf = force_kf;
			force_kf = "";
			acc_get_force = true;
		}
		_this.changeSetting();
		_this.openSdkUrl();
		_this.forceOpenLnk();
	}
	_53_mobile_chat.prototype.forceOpenLnk = function(){
		var _this = this;
		if (cloud_service == "www111" || hz6d_alias_host.indexOf("w111.53kf.com") !== -1){//åæ¿ééæ± å¤ç
			$53.createScript("hz6d_send_lnk_debug0", hz6d_alias_host+"/wnn_debug.php?cmd=senlnk0&hz6d_guest_ip="+hz6d_guest_ip+"&hz6d_guest_id="+hz6d_guest_id+"&force_kf="+_this.force_kf);
			if (_this.force_kf != '') {
				var workerid = '';
				var params_arr = _this.force_kf.split('&');
				for (var i = 0; i < params_arr.length; i++) {
					if (params_arr[i].indexOf('kf=') != -1){
						workerid = params_arr[i].split('=');
						workerid = workerid[1];
					}
				}
				if (workerid != '') {
					var lnk_msg = 'sendLNK{#53#}'+workerid;
					try{
						$53.createScript("hz6d_send_lnk_debug1", hz6d_alias_host+"/wnn_debug.php?cmd=senlnk1&hz6d_guest_ip="+hz6d_guest_ip+"&hz6d_guest_id="+hz6d_guest_id);
						document.getElementById('iframe_mobile_chat').contentWindow.postMessage(lnk_msg,"*");
					}catch(e){}
				}
			}
		}
	}
	_53_mobile_chat.prototype.changeSetting = function(){
		var _this = this;
		if(_this.is_open != 1){//ä¸»å¨åèµ·æªå¼å¯ï¼å¼ºå¶å¯¹è¯æäºæ¬¡æå¼é¡µé¢ä¿®æ¹è®¾ç½®
			_this.is_open = 1;//ä¸»å¨åèµ·å¼å¯
			_this.chat_window = 1;//å¼¹åºæµ®æ¡
			_this.chat_bottom = 2;//éèèå
			_this.chat_pop_time = 0;//äºæ¬¡æå¼çªå£ä¸ï¼é¦æ¬¡ä¸è°æµ®æ¡
			_this.chat_air = 2;//æ¶æ¯å¼¹åºæ¨¡å¼ä¸ºå¡ç
			_this.chat_auto_show = 0;//æ°æ¶æ¯ä¸å¼ºå¶å¼¹åº
			_this.chat_is_reauto = 0;//ä¸åå¤åèµ·
		}
	}
	_53_mobile_chat.prototype.show = function(){
		var _this = this;
		_this.chatElm.style.display = 'block';
		_this.setPosition();
		try{
			if (_this.mobile_config["zdyurl"] != "") {
				var body_pre=document.body.clientWidth/375;
				document.getElementById("iframe-close").style.opacity="1";
				document.getElementById("iframe-close").style.width=44*body_pre+"px";
				document.getElementById("iframe-close").style.height=44*body_pre+"px";
			}
		}catch (e){}
	}
	_53_mobile_chat.prototype.hide = function(){
		var _this = this;
		(document.getElementsByTagName('body')[0]).style.overflow = '';
		(document.getElementsByTagName('body')[0]).style.position = '';
		try{
			document.getElementById('mini_chat').style.display='none';
		}catch (e){}
		if(document.getElementById('msg_tip')){
			document.getElementById('msg_tip').innerHTML = 0;
			document.getElementById('msg_tip').style.display='none';
		}
		try {
			document.getElementById("iframe_mobile_chat").contentWindow.postMessage("hidden",'*');
		}catch (e){}
		_this.chatPop();
		window.scrollTo(0,_this.window_scroll_top);
		$53.callBackFun("miniHide");
		try {_this.hideCard();}catch (e){}
	}
	_53_mobile_chat.prototype.setPosition = function(){
		var _this = this;
		var chatElm = _this.chatElm;
		
		var btn_line = document.getElementById("mobile_minchat_btn_line");
		if(_this.chat_bottom == 0){
			btn_line.style.top = 0;
			btn_line.style.bottom = "auto";
			chatElm.style.bottom = '0px';
		}else{
			btn_line.style.top = "auto";
			btn_line.style.bottom = 0;
			chatElm.style.top = '0px';
		}

		//æé®å®½åº¦æç§ç¾åæ¯è°æ´
		//_this.getRem(750,100);
		var oDiv = chatElm.getElementsByTagName("div");
		for(var i = 0;i<oDiv.length;i++){
			oDiv[i].style.width = 100/oDiv.length + "%";
		}

		if(!oDiv[0].hasAttribute("53kf_menu_versions"))  return false;
		var client_width = document.body.clientWidth || document.documentElement.clientWidth;
		//chatElmé«åº¦è®¡ç®
		var ratio = client_width/375;
		chatElm.style.fontSize = 10*ratio+"px";
		chatElm.style.height = 50*ratio+"px";		
	}
	_53_mobile_chat.prototype.getRem = function(pwidth,prem){
		var html = document.getElementsByTagName("html")[0];
		var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
		html.style.fontSize = oWidth/pwidth*prem + "px";
	}
	_53_mobile_chat.prototype.contentCode = function(msg){
		msg = msg.replace(/<img [^>]+>/gi,function(str){
			if(str.indexOf("/53b/") > 0) return "ãè¡¨æã"
			else return "ãå¾çã";
		});
		msg = msg.replace(/<[^>]+>/g,"");
		return msg;
	}
	_53_mobile_chat.prototype.msgSlid = function(str){
		var _this = this;
		if(_this.chat_air == 1) _this.showMsgItems(str);
		else if(_this.chat_air == 2) _this.showMsgCard(str);
		var now_time = new Date().getTime();
		if(_this.chat_auto_show == 1 && (now_time-_this.open_time>_this.chat_pop_time*1000)) _this.talk();
	}
	_53_mobile_chat.prototype.showMsgCard = function(str){
		var _this = this;
		var card = document.getElementById("mobile_chat_card");
		var worker_img = '<span style="width: 2.4em;height: 2.4em;font-size:1em;position: absolute;left: 0;bottom: 0;"><svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="a" cx="12" cy="12" r="12"/><path id="b" d="m1.24509612 4.95249852 4.16765273-1.69874628c.37645116-.15344249.62254806-.51950725.62254806-.92602918v-2.32772306h5.96470309v2.32921356c0 .40577354.2452036.77132006.6206463.92525174l4.1380611 1.69660709c.7508853.30786337 1.2412926 1.03895639 1.2412926 1.85050348v3.19842413h-18v-3.19544313c0-.81304385.49219379-1.54517337 1.24509612-1.85205835z"/><mask id="c" fill="#fff"><use fill="#fff" fill-rule="evenodd" xlink:href="#a"/></mask><mask id="d" fill="#fff"><use fill="#fff" fill-rule="evenodd" xlink:href="#b"/></mask></defs><g fill="none" fill-rule="evenodd"><use fill="#fff" xlink:href="#a"/><g mask="url(#c)"><g transform="translate(3 1)"><path d="m4 5h10v11h-10z" fill="#d8d8d8"/><path d="m2 7h14v13h-14z" fill="#5a4146"/><g transform="translate(0 13)"><use fill="#d2555a" xlink:href="#b"/><path d="m6 1h6l1.5 2.5-4.5 5.5-4.51-5.5z" fill="#deb790" mask="url(#d)"/><path d="m4 3h.94399963c.72753152 1.97333533 2.07608106 2.96000299 4.04564864 2.96000299 1.96956753 0 3.30635153-.98666766 4.01035173-2.96000299h1.0352969l-2.5912973 7.460003h-4.99999997z" fill="#fff" mask="url(#d)"/></g><path d="m4 5h10v6.8676192c0 .7025257-.3685977 1.3535394-.9710085 1.7149859l-3 1.8c-.63336476.3800189-1.42461824.3800189-2.05798301 0l-3-1.8c-.60241082-.3614465-.97100849-1.0124602-.97100849-1.7149859z" fill="#f2cea5"/><path d="m8.27550057 7.8813398-.51298922.61387464c-.00880168-.0073552-.06103896-.03812521-.16328527-.07599868-.19179472-.07104345-.44328005-.11633733-.76162406-.11911797-.5346246-.00466978-.95797554.15748388-1.20849531.47639634l-.62910671-.49419101c.42094174-.53586016 1.08142394-.78884083 1.84458951-.78217481.40990109.00358035.75306408.06538588 1.03251685.16889911.18963422.07024317.32094318.14758981.39839421.21231238z" fill="#cc9872" fill-rule="nonzero" transform="matrix(-1 0 0 1 13.275 0)"/><rect fill="#262626" height="1" rx=".5" width="1" x="6" y="9"/><rect fill="#262626" height="1" rx=".5" width="1" x="11" y="9"/><path d="m12.7607673 7.88134095-.5129893.61387464c-.0088016-.0073552-.0610389-.03812521-.1632852-.07599868-.1917948-.07104345-.4432801-.11633733-.7616241-.11911797-.7910539-.00690961-1.3130694.33219461-1.45946812 1.05041447-.16776876.82305929.0051621 1.55857779.42000172 2.09365589l-.63224384.4901711c-.55735306-.7188981-.78606347-1.6916611-.5716389-2.74360982.23072104-1.13189785 1.10617094-1.70059506 2.25033664-1.69060112.4099011.00358035.7530641.06538588 1.0325168.16889911.1896343.07024317.3209432.14758981.3983943.21231238z" fill="#bb8660" fill-rule="nonzero"/><path d="m9.60932912 5.48588127c.39580848.30416531.85936538.64220489 1.39067088 1.01411873.8040364.56282551 1.7632268 1.04807408 2.8775711 1.45574568l-.0000084.00002298c.088844.0325027.1798822.05866085.2724288.07827744 1.233339.26142392 1.8500085-.08325811 1.8500085-1.0340461 0-3.86599325-3.1340068-7-7-7-3.86599325 0-7 3.13400675-7 7 0 .53672686.66666667.87006019 2 1 1.16666667-.41666667 2.16666667-.91666667 3-1.5.53130425-.37191298.99486029-.70995185 1.39066812-1.01411661l-.00000169-.0000022c.35930216-.27611141.85936057-.27611137 1.21866269.00000008z" fill="#5a4146"/><path d="m3 8h1v3h-1z" fill="#707487"/><path d="m14.0000461 11c-.6541553 1.265297-1.3157072 2.0986299-1.9846557 2.4999988-.6689485.401369-1.6740786.5680357-3.0153904.5" stroke="#464655" stroke-linecap="round"/><path d="m14 8h1v3h-1z" fill="#707487"/></g></g></g></svg></span>';
		if(card == null || card == undefined){
			$53.creElm({
				'id': 'mobile_chat_card',
				'style': 'display: block;background:'+_this.chat_air_bg_color+';height:8.4em;border: 0.1em solid #DDE5ED;box-shadow: rgba(0, 0, 0, 0.15) 0 0.1em 0.6em 0, rgba(0, 0, 0, 0.09) 0 0.2em 3.2em 0;border-radius: 0.2em;position: fixed;left: 1.6em;right: 1.6em;bottom: -8.6em;box-sizing:border-box;padding:0.8em;margin-left:0.07px;opacity:0;transition:bottom 0.3s,opacity 0.3s;z-index: 999999',
				'innerHTML':'<div style="font-size:1em;" onclick="show_mobile_chat();"><span class="message-card-head" style="display:block;width: 100%;height:2.6em;position: relative;font-size:1em;">'+worker_img+'<span style="color: '+_this.chat_content_color+';width:12.86em;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing: 0.6px;line-height: 1.43em;position: absolute;left: 2.29em;bottom:0.15em;font-size: 1.4em" id="card_worker_name">'+_this.card_worker_name+'</span><span style="width: 2.8em;height: 2.8em;font-size: 1em;position: absolute;right: 0;top: 0;" onclick="hide_chat_card(this)"><span style="position: absolute;right:0;top:0;width: 1.6em;height: 1.6em;font-size:1em;opacity: 0.7;filter: alpha(opacity=70);" ><svg style="float:left" height="100%" viewBox="0 0 16.5 16.5" width="100%" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m8 0c4.418278 0 8 3.581722 8 8 0 4.418278-3.581722 8-8 8-4.418278 0-8-3.581722-8-8 0-4.418278 3.581722-8 8-8z" fill="#363d4d" opacity=".6"></path><path d="m12.25 4.808-1.057-1.058-3.193 3.192-3.192-3.192-1.058 1.058 3.192 3.192-3.192 3.193 1.058 1.057 3.192-3.193 3.193 3.193 1.057-1.057-3.193-3.193z" fill="#fff"></path></g></svg></span></span></span><span class="message-card-body" style="display:block;height:4.4em;width: 100%;position: relative;font-size:1em;"><p class="card-content" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;color: '+_this.chat_content_color+';letter-spacing: 0.6px;line-height: 1.5em;margin-top:0.5em;font-size: 1.2em" id="mobile_chat_talk_str">'+str+'</p></span></div>'
			},'div');
			card = document.getElementById("mobile_chat_card");
		}else {
			var talk_str = document.getElementById("mobile_chat_talk_str");
			talk_str.innerHTML = str;
			card.style.display = "block";
		}

		var client_width = document.body.clientWidth || document.documentElement.clientWidth;
		var ratio = client_width/375;
		// var minc_top = _this.chatElm.offsetTop;
		// if(minc_top > 0){
			card.style.bottom = 70*ratio+"px";
		// }else{
		// 	card.style.bottom = 20*ratio+"px";
		// }
		card.style.opacity = 1;
		card.style.fontSize = 10*ratio + "px";
	}
	_53_mobile_chat.prototype.hideCard = function(e){
		document.getElementById("mobile_chat_card").style.display = "none";
		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		} else {
			window.event.cancelBubble = true;
		}
	}
	_53_mobile_chat.prototype.showMsgItems = function(str){
		var _this = this;
		_this.item++;

		var bubble = document.getElementById("mobile_chat_bubble");
		if(bubble == null || bubble == undefined){
			$53.creElm({
				'id': 'mobile_chat_bubble',
				'style': 'height:10.8em;width:100%;position: fixed;bottom:5.8px;overflow: hidden;z-index:999999',
				'innerHTML':''
			},'div');
			bubble = document.getElementById("mobile_chat_bubble");
		}

		html = '<div onclick="show_mobile_chat();" class="msg-slid-hide-kf" id="msg-slid'+_this.item+'" style="z-index: 1000001; max-width:27em; position: absolute; left: 1em; bottom:0; opacity: 0.9;line-height: 2.33em;height:2.33em;font-size: 1em;letter-spacing: 0.05em;transiton:bottom 0.5s"><b style="position:absolute;width:100%;height:100%;background:'+_this.chat_air_bg_color+';top:0;left:0;border-radius:1.67em;"></b><label style="width:100%;overflow: hidden;text-overflow:ellipsis;display: inline-block;box-sizing: border-box;color: '+_this.chat_content_color+';padding: 0 1em;white-space:nowrap;position:relative;z-index:11;font-size: 1.4em;">'+str+'</label></div>';
		bubble.innerHTML += html;
		bubble.style.display = "block";

		var client_width = document.body.clientWidth || document.documentElement.clientWidth;
		var ratio = client_width/375;

		var item_id = "msg-slid"+_this.item;
		_this.items.push(item_id);
		for(var i = 0;i<_this.items.length;i++ ){
			var n = _this.items.length-(i+1);
			document.getElementById(_this.items[i]).style.bottom = 36*ratio*n + "px";
		}

		var bottom = 0;
		var hidden = setInterval(function(){
			_this.disappear(item_id);
			clearTimeout(hidden);
			_this.items.splice(0,1);
			if(_this.items.length <= 0) bubble.style.display = "none";
		},1500);
		
		//ä¸ä¸æ¨¡å¼
		// var minc_top = _this.chatElm.offsetTop;
		// if(minc_top > 0){
			bubble.style.bottom = 58*ratio+"px";
		// }else{
		// 	bubble.style.bottom = 8*ratio+"px";
		// }
		bubble.style.opacity = 1;
		bubble.style.fontSize = 10*ratio + "px";
	}
	_53_mobile_chat.prototype.disappear = function(item_id){
		var temp = 1;
		// var item = document.getElementById(item_id);
		// var parentNodes = document.getElementById(item_id).parentNode;
		var t1=setInterval(function(){
			temp=temp-0.1;
			var item = document.getElementById(item_id);
			var parentNodes = document.getElementById(item_id).parentNode;
			item.style.opacity=temp;
			item.style.opacity = parseFloat(item.style.opacity)-0.1;
			if(temp<=0){
				clearInterval(t1);
				try{
					parentNodes.removeChild(item);
				}catch(e){}
			}
		},50);
	}
	_53_mobile_chat.prototype.getSys = function(){
		var system,u = navigator.userAgent;
		(u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) ? system = "android" : (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) ? system = "ios" : system = "";
		return system;
	}
	_53_mobile_chat.prototype.browserMod = function(){
		var u = navigator.userAgent.toLowerCase();
		var mod = broswerType =  str.indexOf('baiduboxapp') > 0 ? "bdMobile":str.indexOf("huawei") > 0?"huawei":str.indexOf('micromessenger') > 0?"vxin":str.indexOf("baidubrowser") > 0?"bdBrowser":str.indexOf("ucbrowser") > 0?"uc":str.indexOf("mqqbrowser") > 0?"qq":str.indexOf("qhbrowser") > 0?"360":str.indexOf("sogoumobilebrowser") > 0?"sougou":"safari_and_so_on";;
		return mod;
	}

	/****************************************ææºèåæ ç±»ç»æ***********************************/
	
	/****************************************PCå¾æ ç±»å¼å§***************************************/
	/**
	*ç®ååªå®ä¹äºæ¥å£ï¼ç­æ°çPCå¾æ ä¸çº¿ååå®ç°å·ä½åè½
	*/	
	// function _53_pc_icon(icon_set){}
	// _53_pc_icon.prototype = new handler();	//ç»§æ¿äºä»¶å¤çåºç±»
	/****************************************PCå¾æ ç±»ç»æ***************************************/

	/****************************************PCéè¯·æ¡ç±»å¼å§*************************************/
	/**
	*ç®ååªå®ä¹äºæ¥å£ï¼ç­æ°çPCéè¯·æ¡ä¸çº¿ååå®ç°å·ä½åè½
	*/	
	// function _53_pc_ivt(ivt_set){}
	// _53_pc_ivt.prototype = new handler();	//ç»§æ¿äºä»¶å¤çåºç±»
	/****************************************PCéè¯·æ¡ç±»ç»æ*************************************/

	/****************************************åºç¨ä¸»ç±»å¼å§*************************************/
	function _53App(){
		var _this = this;
		_this.ipStr = decodeURI(ipStr);
		_this.ipContinent = decodeURI(ipContinent);
		_this.apps = [];

		_this.kfOnline = 0;			//æ¯å¦æå·¥å·å¨çº¿
		_this.kfOfOnline = 0;		//æ¯å¦ææº¢åºå·¥å·å¨çº¿
		_this.workers = $53.data('workers');
		_this.ofAllWorkers = $53.data('of_all_worker');
		_this.groups = $53.data('groups');
		_this.ofGroups = $53.data('of_groups');
		_this.workerStates = [];	//å·¥å·ä¸ºkey å¨çº¿ç¶æä¸ºvalue
		_this.ofWorkerStates = [];	//å·¥å·ä¸ºkey å¨çº¿ç¶æä¸ºvalue(æªæé¤æç­å®¢æï¼æº¢åºä½¿ç¨)
		_this.init();
	}
	_53App.prototype.init = function(){
		var _this = this;
		var assign_worker = $53.data('assign_worker');
		$53.data('zdkf_type',assign_worker.assignType == 'group'?'3':'1');
		$53.data('kflist',assign_worker.assignMode == 'hand'?'on':'off');
		$53.data('kf',assign_worker.workers == null ? '':assign_worker.workers);

		// _this.initWorkerStates();
		// _this.checkAreaShunt();
		// _this.checkOnline();

		if(_this.isMobile() && in_site){
			$53.setTerminal('mobile');
     		$53.setUrl(_this.getOpenUrl());

			_this.initGroup();
			_this.initWorkerStates();
			_this.initOfWorkerStates();
			_this.checkOnline();
			try{
				if($53.data('mobile_icon') != null && $53.data('mobile_invite') != null && $53.data('mobile_chat') != null){
					_this.setApp('icon',new _53_mobile_icon($53.data('mobile_icon')));
					var mobile_invite = _this.initInviteDate($53.data('mobile_invite'),$53.data('mobile_chat'));
					_this.setApp('invite',new _53_mobile_ivt(mobile_invite));
					_this.setApp('chat',new _53_mobile_chat($53.data('mobile_chat')));
					_this.clearCache();
				}else{
					setTimeout(function(){
						_this.setApp('icon',new _53_mobile_icon($53.data('mobile_icon')));
						var mobile_invite = _this.initInviteDate($53.data('mobile_invite'),$53.data('mobile_chat'));
						_this.setApp('invite',new _53_mobile_ivt(mobile_invite));
						_this.setApp('chat',new _53_mobile_chat($53.data('mobile_chat')));
						_this.clearCache();
					},1000);	
				}	
			}catch(e){console.log(e)}							
		}else{
			_this.clearCache();
		}		
	},
	_53App.prototype.getOpenUrl = function(){
		var _this = this;
		var mobile_config = $53.data("mobileCompanyInfo");
		try{
			if(mobile_config["zdyurl"] != ""){
				var openUrl = mobile_config["zdyurl"];
				if(openUrl.indexOf("http://") == -1 && openUrl.indexOf("https://") == -1) openUrl = talkHost + openUrl;
				if(openUrl.indexOf("?") == -1) openUrl += "?";
			}else {
				var openUrl = talkHost+'/m.php?';
			}
		}catch(e){
			var openUrl = talkHost+'/m.php?';
		}
		openUrl += 'kf_sign='+kf_sign+'&cid='+companyId+'&style='+styleId+'&keyword='+encodeURIComponent($53.data('page_referer'))+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+hz6d_guest_id+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=51&device='+hz6d_device;
		return openUrl;
	}
	_53App.prototype.initInviteDate = function(mobile_invite,mobile_chat){
		if(mobile_invite.is_open == undefined){
			if(mobile_chat.chat_type == 1 && mobile_chat.is_open == 1) mobile_invite.is_open = 'yes';
			else mobile_invite.is_open = 'no';
			// mobile_invite.is_open = mobile_chat.chat_type == 1 ? 'yes':'no';
			mobile_invite.timeout = mobile_chat.invite_pop_time;
			mobile_invite.invite_times = mobile_chat.invite_pop_num;
			mobile_invite.fanfu_time = mobile_chat.invite_reauto_time;
			mobile_invite.invite_off = mobile_chat.invite_off == 1 ? 'yes':'no';
			mobile_invite.page_times = 9999;//ä¿çæµè§å¨å¼¹åºæ¬¡æ°å­æ®µï¼å¼å®¹èç
			mobile_invite.invite_is_reauto = mobile_chat.invite_is_reauto;
		}
		return mobile_invite;
	}
	_53App.prototype.initGroup = function(){
		var _this = this;
		var workers = _this.copyObject($53.data('workers'));
		var id6d = 0;
		for(var group_id in _this.groups){
			for (var i in _this.groups[group_id].workers){
				id6d = _this.groups[group_id].workers[i];
				if(workers[id6d] !== undefined){
					delete workers[id6d];
				}
			}
		}
		if(_this.isEmptyObject(workers) === false){
			_this.groups['0'] = {
				"group_name":"æªåç»",
				"workers":[]
			}
			for(var id6d in workers){	//æªåç»åå¥
				_this.groups['0'].workers.push(id6d);
			}
		}
	}
	_53App.prototype.overFlow = function(){//æº¢åº
		var _this = this
		var over_flow = $53.data("over_flow");
		if($53.data('is_online') == 1 || typeof over_flow["overflow_type"] == "undefined") return;
		switch(over_flow["overflow_type"]){
			case "1":
				var addLinkParams = $53.data("add_link_params");
				if(addLinkParams == null) $53.data("add_link_params","&lnk_overflow=1");
				else $53.data("add_link_params",addLinkParams+"&lnk_overflow=1");
				$53.data('zdkf_type','1');
				$53.data('kflist','off');
				var kf = over_flow["overflow_value"];
				$53.data('kf',kf);
				if(kf == ""){
					$53.data('is_online',_this.kfOfOnline);
					return;
				}
				kf = kf.split(',');				
				for(var i in kf){
					if(_this.isOfWorkerOnline(kf[i],'worker_id')){
						$53.data('is_online','1');
						return;
					}
				}
				$53.data('is_online','0');
				break;
			case "2":				
				$53.data('zdkf_type','1');
				$53.data('kflist','off');
				var scheduleIds = over_flow["overflow_value"];
				var ofSchedule = $53.data("over_flow_schedule");
				var kf = "";
				for(var i in ofSchedule){
					if(typeof _this.workers[i] != "undefined"){
						var workInfo = _this.workers[i];
						kf += workInfo["worker_id"]+",";
					}					
				}
				$53.data('kf',kf);
				if(scheduleIds == "" && kf == ""){
					$53.data('is_online','0');
					return;
				}
				for(var i in ofSchedule){
					if(_this.isOfWorkerOnline(i)){
						$53.data('is_online','1');
						return;
					}
				}
				$53.data('is_online','0');
				break;
			case "3":
				var addLinkParams = $53.data("add_link_params");
				if(addLinkParams == null) $53.data("add_link_params","&lnk_overflow=1");
				else $53.data("add_link_params",addLinkParams+"&lnk_overflow=1");
				$53.data('zdkf_type','3');
				$53.data('kflist','off');
				var kf = over_flow["overflow_value"];
				$53.data('kf',kf);
				if(kf == ""){
					$53.data('is_online',_this.kfOfOnline);
					return;
				}
				kf = kf.split(',');				
				for(var i in kf){
					if(_this.isOfGroupOnline(kf[i])){
						$53.data('is_online','1');
						return;
					}
				}
				$53.data('is_online','0');	
				break;		
		}
	}
	_53App.prototype.checkAreaShunt = function(){
		var _this = this;
		var areaShunt = $53.data('area_shunt');
		var areaKf = [];
		var kfOnline = 0;
		var areaGroup = [];
		var groupOnline = 0;
		var areaSchedule = [];
		var scheduleOnline = 0;
		var areas = ["å®å¾½", "åäº¬", "éåº", "ç¦å»º", "çè", "å¹¿ä¸", "å¹¿è¥¿", "è´µå·", "æµ·å", "æ²³å", "é»é¾æ±", "æ²³å", "æ¹å", "æ¹å", "æ±è", "æ±è¥¿", "åæ","è¾½å®", "å®å¤", "åèå¤", "éæµ·", "ä¸æµ·", "å±±è¥¿", "å±±ä¸", "åå·", "éè¥¿", "å¤©æ´¥", "è¥¿è", "æ°ç", "äºå", "æµæ±", "å°æ¹¾", "é¦æ¸¯", "æ¾³é¨"];
		// var continents_arr = ["äºæ´²","æ¬§æ´²","éæ´²","åç¾æ´²","åç¾æ´²","å¤§æ´æ´²","åææ´²"];
		var ipAddr = "å½å¤";
		for(var i in areas){
			if(_this.ipStr.indexOf(areas[i]) >= 0){
				ipAddr = _this.ipStr;
				break;
			}
		}
		for(var i in areaShunt){
			if(areaShunt[i]['kf_type'] == '1' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>= 0)){
				areaKf.push(areaShunt[i]['kf'])
				if(kfOnline == 0 && _this.isWorkerOnline(areaShunt[i]['kf'],'worker_id')){
					kfOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '2' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>=0)){
				areaGroup.push(areaShunt[i]['kf'])
				if(groupOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					groupOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '4'){
				areaSchedule.push(areaShunt[i]['kf'])
				if(scheduleOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					scheduleOnline = 1;
				}
			}
		}
		if(kfOnline === 1){
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','1');
			return;
		}
		if(groupOnline === 1){
			$53.data('zdkf_type','3');
			$53.data('kf',areaGroup.join(','));
			$53.data('is_online','1');
			return;
		}
		if(scheduleOnline === 1){
			$53.data('zdkf_type','3');
			$53.data('kf',areaSchedule.join(','));
			$53.data('is_online','1');
			return;
		}
		if(areaKf.length > 0){
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','0');
			return;
		}
		if(areaGroup.length > 0){
			$53.data('zdkf_type','3');
			$53.data('kf',areaGroup.join(','));
			$53.data('is_online','0');
			return;
		}
		if(areaSchedule.length > 0){
			$53.data('zdkf_type','3');
			$53.data('kf',areaSchedule.join(','));
			$53.data('is_online','0');
			return;
		}
	}
	_53App.prototype.checkNewAreaShunt = function(){//åºååæµ
		var _this = this;
		var areaShunt = $53.data('area_shunt');
		var areaKf = [];
		var kfOnline = 0;
		var areaGroup = [];
		var groupOnline = 0;
		var areaSchedule = [];
		var scheduleOnline = 0;
		var areas = ["å®å¾½", "åäº¬", "éåº", "ç¦å»º", "çè", "å¹¿ä¸", "å¹¿è¥¿", "è´µå·", "æµ·å", "æ²³å", "é»é¾æ±", "æ²³å", "æ¹å", "æ¹å", "æ±è", "æ±è¥¿", "åæ","è¾½å®", "å®å¤", "åèå¤", "éæµ·", "ä¸æµ·", "å±±è¥¿", "å±±ä¸", "åå·", "éè¥¿", "å¤©æ´¥", "è¥¿è", "æ°ç", "äºå", "æµæ±", "å°æ¹¾", "é¦æ¸¯", "æ¾³é¨"];
		// var continents_arr = ["äºæ´²","æ¬§æ´²","éæ´²","åç¾æ´²","åç¾æ´²","å¤§æ´æ´²","åææ´²"];
		var ipAddr = "å½å¤";
		for(var i in areas){
			if(_this.ipStr.indexOf(areas[i]) >= 0){
				ipAddr = _this.ipStr;
				break;
			}
		}
		for(var i in areaShunt){
			if(areaShunt[i]['kf_type'] == '1' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>= 0)){
				areaKf.push(areaShunt[i]['kf'])
				if(kfOnline == 0 && _this.isWorkerOnline(areaShunt[i]['kf'],'worker_id')){
					kfOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '2' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>=0)){
				areaGroup.push(areaShunt[i]['kf'])
				if(groupOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					groupOnline = 1;
				}
			}
		}
		if(kfOnline === 1 || groupOnline === 1){
			for (var i in areaGroup) {
				areaKf = _this.getGroupsWorkerid(areaGroup[i],areaKf);
			}
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','1');
			return;
		}
		if(areaKf.length > 0 || areaGroup.length > 0){
			for (var i in areaGroup) {
				areaKf = _this.getGroupsWorkerid(areaGroup[i],areaKf);
			}
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','0');
			_this.overFlow();
			return;
		}
		var over_flow = $53.data("over_flow");
		if(typeof over_flow["overflow_type"] == "undefined"){
			$53.data('zdkf_type','1');
			$53.data('kf',"");
			$53.data('is_online','0');
			var addLinkParams = $53.data("add_link_params");
			if(addLinkParams == null) $53.data("add_link_params","&lnk_overflow=2");
			else $53.data("add_link_params",addLinkParams+"&lnk_overflow=2");
		}		
		_this.overFlow();	
	}
	_53App.prototype.checkSourceShunt = function(){//æ¥æºåæµ
		var _this = this;
		var form_page = hz6d_from_page;
		var shunt_source = $53.data("source_shunt");
		var sourceKf = [];	
		var isOnline = 0;
		var domain_host = _this.getDomain(form_page);
		var search = _this.getSearch(domain_host);
		if(search != ""){
			for (var i in shunt_source) {
				if(typeof shunt_source[i]["shunt"] != "undefined" && shunt_source[i]["shunt"] != null){
					var shunt = shunt_source[i].shunt.split(",");

					for (var j in shunt) {
						if(shunt[j] == "") continue;
						if(search.indexOf(shunt[j]) != -1){
							if(shunt_source[i]["kf_type"] == 1){
								if(isOnline == 0 && _this.isWorkerOnline(shunt_source[i]['kf'])) isOnline = 1;
								var id6d = shunt_source[i]["kf"];
								var workInfo = _this.workers[id6d];
								var kf = workInfo["worker_id"];
								if(sourceKf.indexOf(kf) == -1) sourceKf.push(kf);
							}

							if(shunt_source[i]["kf_type"] == 2){
								if(isOnline == 0 && _this.isGroupOnline(shunt_source[i]['kf'])) isOnline = 1;
								sourceKf = _this.getGroupsWorkerid(shunt_source[i]["kf"],sourceKf);
							}
						}
					}
				}			
			}

		}
		$53.data('zdkf_type','1');
		$53.data('kf',sourceKf.join(','));
		var over_flow = $53.data("over_flow");
		if(sourceKf.join(',') == "" && typeof over_flow["overflow_type"] == "undefined"){
			var addLinkParams = $53.data("add_link_params");
			if(addLinkParams == null) $53.data("add_link_params","&lnk_overflow=2");
			else $53.data("add_link_params",addLinkParams+"&lnk_overflow=2");
		}			
		if(isOnline == 1){
			$53.data('is_online','1');
			return;
		}else{
			$53.data('is_online','0');
			_this.overFlow();
			return;
		}		
	}
	_53App.prototype.checkChannelShunt = function(){//æ¸ éåæµ
		var _this = this;
		var shunt_channel = $53.data("channel_shunt");
		var land_page = decodeURIComponent(hz6d_land_page);
		var channelKf = [];	
		var isOnline = 0;

		for (var i in shunt_channel) {
			if(typeof shunt_channel[i]["shunt"] != "undefined" && shunt_channel[i]["shunt"] != null){
				var shunt = shunt_channel[i].shunt.split(",");

				for (var j in shunt) {
					if(shunt[j] == "") continue;	
					if(land_page.indexOf(shunt[j]) != -1){
						if(shunt_channel[i]["kf_type"] == 1){
							if(isOnline == 0 && _this.isWorkerOnline(shunt_channel[i]['kf'])) isOnline = 1;
							var id6d = shunt_channel[i]["kf"];
							var workInfo = _this.workers[id6d];
							var kf = workInfo["worker_id"];
							if(channelKf.indexOf(kf) == -1) channelKf.push(kf);
						}

						if(shunt_channel[i]["kf_type"] == 2){
							if(isOnline == 0 && _this.isGroupOnline(shunt_channel[i]['kf'])) isOnline = 1;
							channelKf = _this.getGroupsWorkerid(shunt_channel[i]["kf"],channelKf);
						}
					}
				}
			}			
		}

		$53.data('zdkf_type','1');
		$53.data('kf',channelKf.join(','));
		var over_flow = $53.data("over_flow");
		if(channelKf.join(',') == "" && typeof over_flow["overflow_type"] == "undefined"){
			var addLinkParams = $53.data("add_link_params");
			if(addLinkParams == null) $53.data("add_link_params","&lnk_overflow=2");
			else $53.data("add_link_params",addLinkParams+"&lnk_overflow=2");
		}
		if(isOnline == 1){
			$53.data('is_online','1');
			return;
		}else{
			$53.data('is_online','0');
			_this.overFlow();
			return;
		}
	}
	_53App.prototype.checkKf = function(){//æ­£å¸¸å®¢ææ¥å¾
		var _this = this;
		if($53.data('is_online') !== null){		//åºååæµå·²éªè¯æ¯å¦å¨çº¿
			return;
		}
		var zdkf_type = $53.data('zdkf_type');
		var kf = $53.data('kf');
		if(kf == ''){
			$53.data('is_online',_this.kfOnline);
			return;
		}
		if(zdkf_type == '1'){
			kf = kf.split(',');
			for(var i in kf){
				if(_this.isWorkerOnline(kf[i],'worker_id')){
					$53.data('is_online','1');
					return;
				}
			}
			$53.data('is_online','0');
		}else{
			kf = kf.split(',');
			for(var i in kf){
				if(_this.isGroupOnline(kf[i])){
					$53.data('is_online','1');
					return;
				}
			}
			$53.data('is_online','0');			
		}
		_this.overFlow();
	}	
	_53App.prototype.checkOnline = function(){
		var _this = this;
		// _this.checkKf();
		var shunt_info = $53.data("shunt_info");
		if(typeof shunt_info["shunt_type"] == "undefined"){
			shunt_info["shunt_type"] = "5";
		}

		switch (shunt_info["shunt_type"]){
			case "1":
				_this.checkKf();
				break;
			case "2":
				$53.data("area_shunt",shunt_info["shunt_area"]);
				_this.checkNewAreaShunt();
				break;
			case "3":
				$53.data("source_shunt",shunt_info["shunt_source"]);
				_this.checkSourceShunt();
				break;
			case "4":
				$53.data("channel_shunt",shunt_info["shunt_channel"])
				_this.checkChannelShunt();
				break;
			default:
				_this.checkAreaShunt();
				_this.checkKf();
				break;				
		}
	}
	//æ ¹æ®id6dæå·¥å·æ¥è¯¢æ¯å¦å¨çº¿ é»è®¤ä»¥id6dæ¥è¯¢
	_53App.prototype.isWorkerOnline = function(worker,type){
		var _this = this;
		if(type == 'worker_id'){
			return _this.workerStates[worker] == '1' ? true:false;
		}else{
			return _this.workers[worker]['state'] == '1' ? true:false;
		}
	}
	//æ¥è¯¢åç»æ¯å¦å¨çº¿
	_53App.prototype.isGroupOnline = function(groupId){
		var _this = this;
		var group = _this.groups[groupId];
		if(group == null){
			return false
		}
		if(typeof(group['state']) !== 'undefined'){
			return group['state'] == '1'?true:false;
		}
		var workers = group['workers'];
		for(var i in workers){
			if(_this.isWorkerOnline(workers[i])){
				_this.groups[groupId]['state'] = '1';
				return true;
			}
		}
		_this.groups[groupId]['state'] = '0';
		return false;
	}
	//æ ¹æ®id6dæå·¥å·æ¥è¯¢æ¯å¦å¨çº¿ é»è®¤ä»¥id6dæ¥è¯¢,ä¸å»é¤ä¸å¨æç­æ¶é´çå®¢æ(æº¢åºäººåå¤æ­)
	_53App.prototype.isOfWorkerOnline = function(worker,type){
		var _this = this;
		if(type == 'worker_id'){
			return _this.ofWorkerStates[worker] == '1' ? true:false;
		}else{
			return _this.ofAllWorkers[worker]['state'] == '1' ? true:false;
		}
	}
	//æ¥è¯¢åç»æ¯å¦å¨çº¿,ä¸å»é¤ä¸å¨æç­æ¶é´çå®¢æ(æº¢åºåç»å¤æ­)
	_53App.prototype.isOfGroupOnline = function(groupId){
		var _this = this;
		var group = _this.ofGroups[groupId];
		if(group == null){
			return false
		}
		if(typeof(group['state']) !== 'undefined'){
			return group['state'] == '1'?true:false;
		}
		var workers = group['workers'];
		for(var i in workers){
			if(_this.isOfWorkerOnline(workers[i])){
				_this.ofGroups[groupId]['state'] = '1';
				return true;
			}
		}
		_this.ofGroups[groupId]['state'] = '0';
		return false;
	}	
	//è·ååç»ä¸ææå®¢æçå·¥å·
	_53App.prototype.getGroupsWorkerid = function(groupId,workerids){
		var _this = this;

		if(typeof workerids == "undefined") var workerids = [];

		if(typeof _this.groups[groupId] == "undefined" || _this.groups[groupId] == null){
			return workerids;
		}

		var id6ds = _this.groups[groupId]["workers"];
		for (var i = id6ds.length - 1; i >= 0; i--) {
		 	var workInfo = _this.workers[id6ds[i]];
		 	if(workerids.indexOf(workInfo['worker_id']) == -1) workerids.push(workInfo['worker_id']);
		}

		return workerids;
	}
	_53App.prototype.initWorkerStates = function(){
		var _this = this;
		var is_online = 0;
		for(var id6d in _this.workers){
			is_online = _this.workers[id6d]['state'];
			_this.workerStates[_this.workers[id6d]['worker_id']] = is_online;
			if(is_online == '1') _this.kfOnline = '1';
		}
	}
	_53App.prototype.initOfWorkerStates = function(){
		var _this = this;
		var workers = _this.ofAllWorkers;
		var is_online = 0;
		for(var id6d in workers){
			is_online = workers[id6d]['state'];
			_this.ofWorkerStates[workers[id6d]['worker_id']] = is_online;
			if(is_online == '1') _this.kfOfOnline = '1';
 		}
	}
	// è·åæç´¢å¼æ
	_53App.prototype.getSearch = function(url){
	  //var realSearch = new Array('ç¥é©¬','ææºç¥é©¬','ææºç¾åº¦','ææºæç','ææºæç','ææºæ°æµªç½','ææºéè','ææºæé','ææºææ','ææº360æç´¢','ææº360æç´¢',"Google", "Google", "Googleç½ç", "ç¾åº¦ç½ç", "ç¾åº¦ç¥é", "Baidu", "Baidu", "3721", "3721", "Yisou", "Sogou", "Sina", "Sina", "Yahoo", "Tom", "Tom", "Youdao", "SOSO", "Bing",'360','360','360','360');
	  var realSearch = new Array('shenma','shenma','baidu','sogou','sogou','sina','yahoo','youdao','soso','360','360',"google", "google", "google", "baidu", "baidu", "baidu", "baidu", "3721", "3721", "Yisou", "sogou", "sina", "sina", "yahoo", "Tom", "Tom", "youdao", "soso", "bing",'360','360','360','360');
	  var search = new Array('sm.cn','m.sm.cn','m.baidu.com','m.sogou.com','wap.sogou.com','3g.sina.com.cn','m.yahoo.com','m.youdao.com','m.soso.com','m.so.com','m.haosou.com',"google.com", "google.cn", "googleads.g.doubleclick.net", "cpro.baidu.com", "zhidao.baidu.com", "baidu.com", "baidu.com", "3721.com", "3721.com", "yisou.com", "sogou.com", "iask.com", "sina.com", "yahoo.com", "search.tom.com", "search.tom.com", "youdao.com", "soso.com", "cn.bing.com",'360.cn','so.com','sou.com','haosou.com');

	  var len = search.length;
	  for(var i=0; i<len; i++)
	  {
	    if(url.indexOf(search[i])!=-1)
	    {
	      return realSearch[i];
	    }
	  }
	  return "";
	}

	// è·ååå
	_53App.prototype.getDomain = function(url){
	  var pos = url.indexOf("http://");
	  if(pos==0){
	    var pos1 = url.indexOf("/", 7);
	    if(pos1==-1){
	      return url.substr(7);
	    }else{
	      var len = pos1-pos-7;
	      return url.substr(7, len);
	    } 
	  }else{
	    var posHttps = url.indexOf("https://");
	    if(0 == posHttps){
	        var pos1 = url.indexOf("/", 8);
	        if(pos1==-1){
	          return url.substr(8);
	        }else{
	          var len = pos1-8;
	          return url.substr(8, len);
	        }
	    }else{
	        pos = url.indexOf("www.");
	        if(pos==0){
	          var pos1 = url.indexOf("/");
	          if(pos1==-1){
	            return url.substr(0);
	          }else{
	            return url.substr(0, pos1);
	          }
	        }
	    }
	  }

	  pos = url.indexOf("/");
	  if(pos==-1){
	    return url;
	  }else{
	    return url.substr(0, pos);
	  }
	}
	_53App.prototype.clearCache = function(){
		var _this = this;
		_this.workers = null;
		_this.groups = null;
		_this.workerStates = null;
		$53.data('mobile_icon',null);
		$53.data('mobile_invite',null);
		$53.data('assign_worker',null);
	}
	_53App.prototype.isMobile = function(){
		var regex_match = /(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220|ipad|XiaoMi)/i;
		if(navigator.userAgent.match(regex_match)){
			return true;
		}
		return false;
	}
	_53App.prototype.getApp = function(name){
		var _this = this;
		return _this.apps[name];
	}
	_53App.prototype.setApp = function(name,app){
		var _this = this;
		_this.apps[name] = app;
	}
	_53App.prototype.copyObject = function(e) {  
		var _this = this;
		if(typeof(e) != 'object') return e;
		if(e == null) return e;
		var myNewObj = new Object();
		for(var i in e)
			myNewObj[i] = _this.copyObject(e[i]);
		return myNewObj; 
	}  
	_53App.prototype.isEmptyObject = function(e) {  
        var t;  
        for (t in e)  
            return !1;  
        return !0  
    }  


	_53App.prototype.show = function(type){
		var _this = this;
		_this.getApp(type).show();
	}
	_53App.prototype.hide = function(type){
		var _this = this;
		_this.getApp(type).hide();
	}
	_53App.prototype.talk = function(type,params){
		var _this = this;
		_this.getApp(type).talk(params);
	}
	_53App.prototype.setMsgTip = function(type,obj){
		var _this = this;
		_this.getApp(type).setMsgTip(obj);
	}
	_53App.prototype.getAppObj = function(type,obj){
		var _this = this;
		return _this.getApp(type).getAppObj(obj);
	}
	/****************************************åºç¨ä¸»ç±»ç»æ*************************************/
	function create53APP(){
		if($53.data('mobile_icon') == null || $53.data('mobile_invite') == null || $53.data('assign_worker') == null){
			setTimeout(function(){
				create53APP();
			},200);
			return;
		}
		window._53App = new _53App();
	}
	if(typeof id_creared_53app == "undefined"){
		create53APP();
		window.id_creared_53app = "creared";
	}
})(window,document,hz6d_alias_host,ipstr,ipContinent,companyid,hz6d_style_id);

var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src="https://www5.53kf.com/kf_new.php?style=17&arg=10000079&land_page="+hz6d_land_page+"&from_page="+$53.EN(hz6d_from_page)+"&guest_id="+hz6d_guest_id+"&kf_sign=zkyMDMTYyNM1ODEwODA1MDczNjg0MDEwNzIwMDAwNzk%3D&api_uuid=6655b9b77b2b9ffb624af90ad85f385a&ip_long=2011981224&time="+new Date().getTime();var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;script.onload=script.onreadystatechange=null;head.removeChild(script);}};head.appendChild(script);
}
