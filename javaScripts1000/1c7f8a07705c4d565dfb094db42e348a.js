<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
</head>
<body>
<a id="proxy_link" target="_blank" style="display:none;"></a>
<div id="m_container" class="m_wording">
	<div class="m_icon"></div>
	<p id="mTitle" class="m_title">è¯¥é¾æ¥ä¼å¤èµ·ææºQQï¼</p>
	<p id="mText" class="m_text">è¥æ æ³æ­£å¸¸è·³è½¬è¯·å<a id="update_link" href = "javascript:;">åçº§QQ</a>ã</p>
</div>
<script>
var g = {
	isHTML : '1',
	tuin : '1762245',
	openid : '',
	appid : '',
	closeWindow: function(){
		if(g.isHTML == 'JS'){
			return;
		}
		var browserName = navigator.appName;
		if(browserName == "Netscape"){
			window.open('', '_self', '');
			window.close();
		} else if(browserName == "Microsoft Internet Explorer"){
			window.opener = null;
			window.open('', '_top');
			window.top.close();
		}
	},
	reportM: function(id){
		var img = document.createElement("img");
		img.src = "http://wp.qq.com/cgi-bin/api_attr?id=" + id + "&SigT=" + g.sigt;
	},
	reportB: function(id){
		var img = new Image(), timestamp = +(new Date());
		img.src = 'http://cgi.connect.qq.com/report/wpa/report?strValue=' + g.tuin + '&nValue=' + id + '&tag=0&t=' + timestamp;
	},
	reportBNL: function(arrId){
		var img = new Image(), timestamp = +new Date();
		for(var i = 0, len = arrId.length; i < len; i++){
			arrId[i] = g.tuin + "_" + arrId[i] + "_0";
		}
		img.src = 'http://cgi.connect.qq.com/report/report?log=' + arrId.join("|") + '&tag=0&t=' + timestamp;
	},
	checkActiveX: function(){
		var kXmlHttp = null;
		try {
			if(typeof XMLHttpRequest != "undefined"){
				kXmlHttp = new XMLHttpRequest();
				return true;
			}
		} catch(e) {}
		var aVersionhs = ["MSXML2.XMLHttp.3.0","MSXML2.XMLHttp.6.0","MSXML2.XMLHttp","Microsoft.XMLHttp","MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0"];
		for(var i = 0; i < aVersionhs.length; i++){
			try {
				kXmlHttp = new ActiveXObject(aVersionhs[i]);
				return true;
			} catch(e) {}
		}
		return false;
	},
	checkBrowser : function(rp){
		var ua = navigator.userAgent.toLowerCase(),
			browser, version,
			match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
			/(webkit)[ \/]([\w.]+)/.exec(ua) ||
			/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
			/(msie) ([\w.]+)/.exec(ua) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];

		browser = match[1] || "";
		version = match[2] || "0";
		this.ie = browser == "msie";
		this.chrome = browser == "chrome";
		this.webkit = browser == "webkit";
		this.firefox = browser == "mozilla";
		this.opera = browser == "opera";
		this.browserVersion = parseInt(version, 10);
		if(this.chrome || this.webkit){
			rp.push(10759);
		}
		if(this.chrome){
			rp.push(this.browserVersion<23?10761:10762);
		}
		if(this.firefox){rp.push(10760);}
		if(browser == 'opera' || browser == ''){
			rp.push(10763);
		}
	},
	checkPlatform : function(rp){
		var pf = navigator.platform.toLowerCase();
		switch(true){
			case (/win/).test(pf) : rp.push(10753);
				break;
			case (/android/).test(pf) : rp.push(10754);
				break;
			case (/iphone/).test(pf) :
			case (/ipod/).test(pf) :
			case (/ipad/).test(pf) : rp.push(10755);
				break;
			case (/mac/).test(pf) : rp.push(10756);
				break;
			case (/linux/).test(pf) : rp.push(10757);
				break;
			default : rp.push(10758);
				break;
		}
		return pf;
	},
	tryPlugin : function(plugin){
		var plugin = "application/" + plugin;
		if(navigator.mimeTypes[plugin]){
			var obj = document.createElement("embed");
				obj.type = plugin;
				obj.style.width = "0px";
				obj.style.height = "0px";
			document.body.appendChild(obj);
			try{
				ok = obj.InitActiveX("TimwpDll.TimwpCheck");
			}catch(e){
				g.webChat();
				return false;
			}

			if(ok){
				var qqver = obj.GetHummerQQVersion();
				if(!qqver){
					g.webChat();
					return false;
				}
				return true;
			} else {
				g.webChat();
				return false;
			}
		} else {
			g.webChat();
			return false;
		}
	},
	webChat : function(){
		setTimeout(function(){
			window.location = "http://wp.qq.com/open_webaio.html?sigt=" + g.sigt + "&sigu=" + g.sigu + "&tuin=" + g.tuin;
		}, 200);
	}
};

var init = function(){
	var tencentSeries = "tencent://message/?Menu=yes\u0026uin=1762245\u0026Site=\u0026Service=201\u0026sigT=01b954a97a1886112c179d6dbb9fd828bd18a117ad86d4a1657df4ec20c5eb5d1aa619f5a5285f90796f89a89eebaabb\u0026sigU=c177f3598e14df0742f4bd6ed2bdf037d287d5eb032f911cdc17dc6e8b8446ad295e5a2e3f6d84d1", reportPool = [];
	// reportPool.push(10582);
	g.reportB(10582);
	if(tencentSeries) {
		reportPool.push(10584);
	}
	g.sigt = tencentSeries.replace(/^\S+sigT=/g, "").replace(/&\S+$/g, "");
	g.sigu = tencentSeries.replace(/^\S+sigU=/g, "").replace(/&\S+$/g, "");
	var from = window.location.search.replace(/^\S+from=/g, "").replace(/&\S+$/g, "");
	if(from == 'discuz'){
		reportPool.push(10774);
	}

	g.checkBrowser(reportPool);
	var pf = g.checkPlatform(reportPool);
	var ua = navigator.userAgent.toLowerCase(),
		android = (/android/).test(ua),
		qq = (/qq/).test(ua),
		wechat = (/micromessenger/).test(ua);

	// å¹³å°åºå
	if((/iphone/).test(ua) || (/ipad/).test(ua) || android){
		// ç§»å¨å¹³å°
		var startTime,
			jumpDownload = false,
			domainRegExp = new RegExp("^(http|https)://(.*?[^/\\?#])($|/|\\?|#(.*))"),
			host = '',
			scheme = '';
		g.reportBNL(reportPool);

		var proxy_frame = document.createElement("iframe");
		proxy_frame.style.display = 'none';

		host = domainRegExp.exec(document.referrer);
		if (host) {
			host = host[2];
		}
		
		if(g.openid && g.openid != ""){
			scheme = "mqqwpaopenid://im/chat?chat_type=wpaopenid&openid=" + g.openid + "&appid=" + g.appid + "&version=1&src_type=web&web_src=" + host;
		}else{
			scheme = "mqqwpa://im/chat?chat_type=wpa&uin=" + g.tuin + "&version=1&src_type=web&web_src=" + host;
		}
		
		var goDownload = function(){
			if( android ){
				window.location.replace("http://www.myapp.com/forward/a/45592?g_f=990935");
			} else {
				window.location = "itms-appss://itunes.apple.com/cn/app/id444934666";
			}
		};

		var goTipPage = function(){
			//window.location.replace('http://shang.qq.com/qr.html');
			document.getElementById('m_container').style.display = 'block';
			var link = document.getElementById('update_link');
			link.onclick = function(){
				if( (/android/).test(navigator.userAgent.toLowerCase()) ){
					window.location.replace('http://www.myapp.com/forward/a/45592?g_f=990935');
				} else {
					window.location.replace('itms-appss://itunes.apple.com/cn/app/id444934666');
				}
			};
			setTimeout(function(){
				window.close();
				history.back();
			}, 15 * 1000);
		};


		function versionCompare(currVer,promoteVer) {
	            currVer = currVer || "0.0.0";
	            promoteVer = promoteVer || "0.0.0";
	            if (currVer == promoteVer) return true;
	            var currVerArr = currVer.split(".");
	            var promoteVerArr = promoteVer.split(".");
	            var len = Math.max(currVerArr.length, promoteVerArr.length);
	            for (var i = 0; i < len; i++) {
	                var proVal = ~~promoteVerArr[i],
	                    curVal = ~~currVerArr[i];
	                if (proVal < curVal) {
	                    return true;
	                } else if (proVal > curVal) {
	                    return false;
	                }
	            }
	            return false;
	        };

	        function bindWxEvent(wxUrl) {
	            if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
	                wxCallQQ(wxUrl);
	            } else {
	                if (document.addEventListener) {
	                    document.addEventListener("WeixinJSBridgeReady", function () {
	                        wxCallQQ(wxUrl)
	                    }, false);
	                } else if (document.attachEvent) {
	                    document.attachEvent("WeixinJSBridgeReady", function () {
	                        wxCallQQ(wxUrl)
	                    });
	                    document.attachEvent("onWeixinJSBridgeReady", function () {
	                        wxCallQQ(wxUrl)
	                    });
	                }
	            }
	        }
	        function wxCallQQ(url) {
	            url= url.replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/"/g,"%22");//éè¦è½¬ä¹{}ï¼å ä¸º{}ä¼é»ç¢è°ç¨
	            WeixinJSBridge&&WeixinJSBridge.invoke('launchApplication',{
	                "schemeUrl":url
	            },function(res){
	                //alert(res.err_msg); callback_func
	             });
	        }

	        var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i) ;
		if( wechatInfo && versionCompare(wechatInfo[1] , "6.5.6") ){
			bindWxEvent(scheme);
		}else{
		 	if(this.chrome){
				window.location = scheme;
			} else {
				proxy_frame.src = scheme;
				proxy_frame.onload = function(){
					jumpDownload = true;
					goDownload();
				};
				setTimeout(function(){
					document.body.appendChild(proxy_frame);
				}, 200);
			}
		}


		startTime = +new Date();

		// å¤±è´¥åè·³ä¸è½½
		if( (/iphone/).test(pf) || (/ipad/).test(pf) ){
			timer = setTimeout(function(){
				if( +new Date() - startTime < 2000 && (!qq||(/qqbrowser/).test(ua)) && !wechat) {
					goDownload();
					if( (/ucbrowser/).test(ua) ){
						goTipPage();
					}
				} else {
					if( qq || wechat){
						history.back();
					}
					window.close();
					history.back();
				}
			}, 1500);
		} else {
			timer = setTimeout(function(){
				if(jumpDownload){
					return;
				} else if( +new Date() - startTime < 2000 && (!qq||(/qqbrowser/).test(ua)) && !wechat) {
					goTipPage();
				} else {
					window.close();
					history.back();
				}
			}, 1500);
		}
	} else {
		// PC Web
		// æ¬å°QQè½åæ£æ¥
		if(g.ie){
			if(window.ActiveXObject){
				try{
					var PTLoginCtrl = new ActiveXObject("SSOAxCtrlForPTLogin.SSOForPTLogin2");
					var vInitData = PTLoginCtrl.CreateTXSSOData();
					PTLoginCtrl.InitSSOFPTCtrl(0, vInitData);
					var vOptData = PTLoginCtrl.CreateTXSSOData();
					var vResult = PTLoginCtrl.DoOperation(2, vOptData);
					var vAccountList = vResult.GetArray("PTALIST");
					if(vResult != null){
						reportPool.push(10708);
						var uListSize = vAccountList.GetSize();
						if(uListSize > 0){
							reportPool.push(10709);
						} else {
							reportPool.push(10710);
						}
					}
				} catch(e) {}
			}
		} else {
			if(navigator.mimeTypes["application/nptxsso"]){
				var obj = document.createElement("embed"), ok;
				obj.type="application/nptxsso";
				obj.style.width="0px";
				obj.style.height="0px";
				document.body.appendChild(obj);
				try{
					ok = obj.InitPVANoST();
				}catch(e){}
				
				if(ok){
					reportPool.push(10708);
					var count = obj.GetPVACount();
					if(count>0){
						reportPool.push(10709);
					} else {
						reportPool.push(10710);
					}
				}
			}
		}

		if(!g.ie){
			g.reportM(2);
			reportPool.push(10583);
			g.reportBNL(reportPool);
			if(g.firefox || (g.chrome && g.browserVersion < 23) || g.webkit){
				if(!g.tryPlugin("qscall-plugin")){
					// return;
				}
			} else if(g.chrome){
				if(!g.tryPlugin("npchrome-plugin")){
					// return;
				}
			} else if(g.opera){
				g.webChat();
				return;
			}

			var iframe = document.createElement("iframe");
			iframe.setAttribute('frameborder', '0', 0);
			iframe.src = tencentSeries;
			document.body.appendChild(iframe);
			window.setTimeout(function(){
				g.closeWindow();
			}, 2000);
		} else { //ie
			reportPool.push(10667);
			if (!g.checkActiveX()){
				reportPool.push(10652);
				g.reportBNL(reportPool);
	            g.webChat();
				return;
			}
			reportPool.push(10668);
			try	{
				var cpTimwp = new ActiveXObject("TimwpDll.TimwpCheck");
				if(cpTimwp){
					reportPool.push(10669);
					g.reportBNL(reportPool);
					window.location=tencentSeries;
					window.setTimeout(g.closeWindow,200);
					return;
				}
			} catch(e) {
				g.reportM(1);
				reportPool.push(10632);
				g.reportBNL(reportPool);
	            g.webChat();
			}
		}
	}
};
init();
</script>
</body>
</html>