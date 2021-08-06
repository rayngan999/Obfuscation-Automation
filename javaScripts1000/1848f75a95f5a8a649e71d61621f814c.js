(function(){
	var userAgent = navigator.userAgent.toLowerCase();
	jesong.urlPrefix = jesong.version+"/"+jesong.env.compId+"/";
	jesong.isReady = false;
	jesong.domReady = false;
	jesong.resp = null;
	jesong.util={
		$:function(id){return document.getElementById(id);},
		isEmpty:function(s){if(typeof s=='undefined'||s==null||s.length==0)return true;return false;},
		browser:{version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],safari: /webkit/.test( userAgent ),opera: /opera/.test( userAgent ),msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )},
		getCookie:function(name){ var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");arr=document.cookie.match(reg);if(arr){return unescape(arr[2]);}else{return null;}},
		getCookieDomain:function() {
			var host = location.hostname;
			var ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
			if (ip.test(host) == true || host == 'localhost') return host;
			var ds = host.split("\.");
			if(ds.length >= 3){
				return host.substring(host.indexOf("\."));
			}else{
				return host;
			}
		},
		isPC:function() {
			var userAgentInfo = navigator.userAgent;
			var Agents = ["Android", "iPhone",
						"SymbianOS", "Windows Phone",
						"iPad", "iPod"];
			var flag = true;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false;
					break;
				}
			}
			return flag;
		},
		filterXSS:function(str) {
			return str
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#39;')
				.replace(/\r{0,}\n/g, '<br/>')
		},
		setCookie:function(name,value,t){
			if(typeof t =='undefined' ||t==null) t =60*30*24*60*60*1000;
			var exp  = new Date(); exp.setTime(exp.getTime() + t);
			document.cookie = name + "="+ escape (value)+ ";domain="+jesong.util.getCookieDomain()+";expires=" + exp.toGMTString()+";path=/";
		},jsonRequest:function(url,cb){
			jesong.resp=null;
			var u=url + '&x='+(new Date()).getTime();
			h = document.getElementsByTagName('head')[0];
			var c=document.createElement('script');
			c.setAttribute("charset", "utf-8");
			c.setAttribute("type","text/javascript");
			h.appendChild(c);
			c.setAttribute("src",u);
			c.onreadystatechange =function(){
				if(c.readyState=='loaded'){
					cb(c);
					if(this && this.parentNode){
						this.parentNode.removeChild(this);
					}
				}
			};
			c.onload=function(){
				cb(c);
				if(this && this.parentNode){
					this.parentNode.removeChild(this);
				}
			};
		},show:function(v){if(typeof v == 'string') v=jesong.util.$(v); v.style.display='block'; },
		hide:function(v){if(typeof v == 'string') v=jesong.util.$(v); (v==null)||(v.style.display='none'); },
		log:function(s){var l=jesong.util.$('log'); l.innerHTML += s + '</br>';l.scrollTop+=8000;},
		attach:function(t,e,f){if(t.addEventListener) t.addEventListener(e,f,false);else if(t.attachEvent) t.attachEvent('on'+e,f);},
		getBody:function(){return(document.compatMode!="CSS1Compat")?document.body:document.documentElement;},
		getDomain:function(url){
			var domain = url.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i);
			if(domain != null && domain.length>2){
				var d = domain[2];
				var ds = d.split("\.");
				if(ds.length >= 3){
					d = d.substring(d.indexOf("\.")+1);
				}
				return d;
			}else{
				return null;
			}
		}, loadJS : function(src){
			var _ss = document.getElementsByTagName("script");
			for(var i = 0 ; i < _ss.length ; i++){
				if(_ss[i].src==src){
					return;
				}
			}
			var sga = document.createElement("script"); sga.type = "text/javascript";sga.async = true;
			sga.src = src;
			sga.charset = "utf-8";
			var s = _ss[0];
			s.parentNode.insertBefore(sga, s);
		},
		upvid:function(){
			var u = jesong.util,ev=jesong.env;
			//å¤æ­å½åæ¯å¦å­å¨è®¿å®¢id éæ°æ·»å å°cookieå¹¶ä¸éç½®è¿ææ¶é´
			var v = u.getCookie('JESONG_VISITOR_ID');
			if( v != null && v.length !=0 && v != "null"){
				ev.vId = v;
				u.setCookie('JESONG_VISITOR_ID',ev.vId, 60*60*1000);
			}

			var autoTimes = u.getCookie('JESONG_AUTO_MON_TIMES');
			if(autoTimes){
				autoTimes = parseInt(autoTimes);
			}else{
				autoTimes = 0;
			}
			u.setCookie('JESONG_AUTO_MON_TIMES', autoTimes, 60000);
		},
		getRequestParam:function(key){
			var h = window.location.href;
			var args = h.split("?");
			if(args[0] != h && args.length>1){
				var parmas = args[1].split("&");
				for(var i=0; i<parmas.length; i++){
					var kv = parmas[i].split("=");
					if(kv.length == 2){
						if(kv[0] == key){
							return decodeURIComponent(kv[1]);
						}
					}
				}
			}
			return null;
		},
		getReseveKey:function(){
			var exts = null;
			if(typeof reseveKey != 'undefined' && reseveKey!=null){
				exts = reseveKey;
			}else if(typeof(JESONG_EXT_DATA) != "undefined" && JESONG_EXT_DATA != null){
				exts = JESONG_EXT_DATA;
			}else{
				var cKey = this.getCookie("reseveKey") || this.getCookie("JESONG_EXT_DATA");
				if(cKey!=null&&cKey.length!=0){
					exts = cKey;
				}else{
					var rKey = this.getRequestParam("reseveKey");
					if(rKey != null){
						exts = rKey;
					}
				}
			}
			if(exts != null && typeof exts == "object"){
				var _ext = "#params:";
				var _i=0;
				for(var key in exts){
					if(_i > 0){
						_ext += ",";
					}
					_ext = _ext + key + ","+exts[key];
					_i++;
				}
				exts = _ext;
			}
			return exts;
		},
		parseReseveKey:function(query){
			var pQuery = query;
			if(pQuery==null)  return ;
			var perfix='#params:';
			var pIdx = query.indexOf(perfix);
			if(pIdx==0)
			   pQuery = query.substring(perfix.length);
			 var args=new Array();//å®ä¹ä¸æ°ç»
			 args=pQuery.split(",");//å­ç¬¦åå²
			 return args;
		},
		floatDiv:function(){
			var me = this, u = jesong.util;
			this.init=function(v,g,w,h){
				this.obj=v;
				this.handle= (typeof g == 'string')?jesong.util.$(g):g;
				this.width=(typeof w == 'undefined')?v.offsetWidth:w;
				this.height=(typeof h == 'undefined')?v.offsetHeight:h;
				this.html = v.innerHTML;
				this.lastLeft = u.getBody().scrollLeft;
				this.lastTop = u.getBody().scrollTop;
				if(this.handle){
					this.handle.style.cursor = 'move';
					this.handle.onmousedown=  function(e){
						e = e||event;
						if(e.layerX)
							me.obj.oOffset={x:e.layerX,y:e.layerY};
						else
							me.obj.oOffset={x:e.offsetX,y:e.offsetY};
						document.onmousemove = me.drag;
						document.onmouseup = me.drop;
						document.onselectstart = function(){return false;};
					};
				}
			};
			this.isMoved=function(newX,newY){
				var b=u.getBody();
				return {x:newX>0&&newX<b.clientWidth-me.width+ b.scrollLeft,y:newY>0&&newY<b.clientHeight-me.height+b.scrollTop};
			};
			this.drag=function(e){
				e = e||event;
				var b=u.getBody();
				var mv = me.isMoved(e.clientX-me.obj.oOffset.x+  b.scrollLeft,e.clientY-me.obj.oOffset.y +b.scrollTop);
				if(mv.x)me.obj.style.left = e.clientX-me.obj.oOffset.x+ b.scrollLeft + 'px';
				if(mv.y)me.obj.style.top = e.clientY-me.obj.oOffset.y+ b.scrollTop+ 'px';
			};
			this.drop=function(e){
				e=e||event;
				document.onmouseup=document.onmousemove=document.onselectstart=null;
			};
			this.show=function(){
				var st = me.obj.style;
				if(st.visibility != 'visible')
					st.visibility = 'visible';
				try{
				var nleft = u.getBody().scrollLeft || document.body.scrollLeft, ntop = u.getBody().scrollTop || document.body.scrollTop;
				var dx = nleft - me.lastLeft, dy = ntop - me.lastTop;
				if(st.top){
					st.top = parseInt(st.top) + dy + 'px' ;
					me.lastTop = ntop;
				}else if(me.height){
					st.top = (u.getBody().clientHeight) - me.height + ntop +'px';
					me.lastTop = ntop;
				}
				if(dx != 0){
					try{st.left = parseInt(st.left) + dx + 'px'; }catch(e){ st.right = parseInt(st.right) +dx +'px';}
					me.lastLeft = nleft;
				}
				}catch(e){}

			};
			this.start=function(){
				jesong.timer.addListener(me.show);
				jesong.timer.start(250);
			};
		},
		float:function(v,g,w,h){
			var t = (typeof v);
			if(t == 'undefined' || v == null) return;
			if(t == 'string') v=jesong.util.$(v);
			var f = new jesong.util.floatDiv();
			f.init(v,g,w,h);
			f.start();
		},
		bindReady:function(){
			jesong.domReady = true;
			var browser = jesong.util.browser;
			if ( document.addEventListener && !browser.opera) document.addEventListener( "DOMContentLoaded", jesong.ready, false );
			if(browser.msie &&window==top)(function(){try{document.documentElement.doScroll('left');}catch(e){setTimeout(arguments.callee,0);return;}jesong.ready();})();
			if(browser.opera)
				document.addEventListener( "DOMContentLoaded", function () {if (jesong.isReady) return;
					for (var i = 0; i < document.styleSheets.length; i++)
					if (document.styleSheets[i].disabled) {
						setTimeout( arguments.callee, 0 );
						return;
					}
				jesong.ready();
			}, false);
			if (browser.safari ||(browser.msie && window != top) ) {
				var numStyles;(function(){if (jesong.isReady) return;
					if ( document.readyState != "loaded" && document.readyState != "complete" ) {
						setTimeout( arguments.callee, 0 );
						return;
					}
					jesong.ready();
				})();
			}
		},
		closeForceChat:function(){
			var frame = document.getElementById("jesong_chat_frame");
			if(frame){
				frame.src="/blank.html";
				document.getElementById("jesong_chat").style.display="none";
			}
			jesong.util.show('jesong_panel');
		},
		forceChat:function(c){
			var ev = jesong.env;
			var url = ev.server.chat + jesong.urlPrefix+ 'chat?';
			url += jesong.util.commonURL();
			if(typeof c == 'object'){
				if(c.cId != null){
					url +='&command=applyChat&cId='+c.cId; url+='&t='+c.type+'&n='+c.sId;
				}else if(jesong.monitor && jesong.monitor.config && jesong.monitor.config.group != '' && jesong.monitor.config.group !='0')
					url += '&g='+jesong.monitor.config.group;
			}else if( typeof c == 'string' &&c.length !=0 ){
				url += '&'+c;
			}
			url += '&g=';
			if(jesong.force != null){
				jesong.force.connect(c.cId, c.sId);
				if(jesong.panel && jesong.panel.config && jesong.panel.config.panelWhenInvite == "1"){
					jesong.util.hide('jesong_mon_mask');
					jesong.util.hide('jesong_monitor');
					jesong.util.hide('jesong_panel');
				}
			}else{
				window.location = url;
			}
		},
		openChatRoom:function(cg){
			var ev =jesong.env;
			var url = jesong.util.commonURL();
			url = url + "&cg="+cg;
			var p = "height=600,width=800,directories=no,location=no,menubar=no,resizeable=no,status=no,toolbar=no,top=100,left=200";
			try{
				var cw = window.open(jesong.util.filterXSS(ev.server.chat +'group.do?'+ url),'chat_room_'+ev.compId,p);cw.focus();
			}catch(e){
			}
		},
		GetQueryValue:function(queryName) {
			var reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if ( r != null ){
			   return decodeURI(r[2]);
			}else{
			   return null;
			}
		},
		getStr:function(str) {
			var r = decodeURI(window.location.search);
			if ( r != null ){
			   return r.split(str)[1];
			}else{
			   return null;
			}
		},
		getChatUrl:function(c){
			var ev = jesong.env;
			var u = jesong.util;
			var url = jesong.util.commonURL();
			if(typeof c == 'object'){
				if(c.cId != null){
					command = null;
					url +='&command=applyChat&cId='+c.cId; url+='&t='+c.type+'&n='+c.sId;
				}else if(jesong.monitor && jesong.monitor.config && jesong.monitor.config.group != '' && jesong.monitor.config.group !='0')
					url += '&g='+jesong.monitor.config.group;
			}else if( typeof c == 'string' &&c.length !=0 ){
				url += '&'+c;
			}else{
				url += '&g='+jesong.env.groupId;
			}
			url = url + "&promotionId="+ev.promotionId;
			url = url + "&sid=" + ev.sid;
			if(jesong.autochat.searchMode > 0){
				url = url + "&guide="+jesong.autochat.searchMode;
			}
			var command = null;
			if(jesong.config.firstToRebot == 1){
				command = "robotChat";
			}
			url = url +"&chatUrl="+window.encodeURIComponent(window.location.href);
			if(ev.spreadFlag){
				url = url +"&sf="+window.encodeURIComponent(ev.spreadFlag);
			}
			if(ev.firstPage){
				url = url +"&first="+window.encodeURIComponent(ev.firstPage);
			}else{
				url = url +"&first="+window.encodeURIComponent(window.location.href);
			}
			if(u.getCookie('JESONG_VC')){
				url = url + "&vc="+window.encodeURIComponent(u.getCookie("JESONG_VC"));
			}
			if(command != null){
				url += "&command="+command;
			}
			if(jesong.util.GetQueryValue('refer') != null && jesong.util.GetQueryValue('refer') != undefined){
				var refferr = jesong.util.getStr('?refer=');
				url = url + "&ref="+window.encodeURIComponent(refferr);
			}else{
				if(ev.refer && ev.refer !=""){
					url = url +"&ref="+window.encodeURIComponent(ev.refer);
				}else if(document.referrer){
					try{
						var refer = document.referrer;
						if(refer != ""){
							var domain = jesong.util.getDomain(refer);
							if(domain && domain.indexOf("easyliao") == -1 && domain.indexOf("jesong") == -1){
								url = url +"&ref="+window.encodeURIComponent(refer);
							}
						}
					}catch(e){};
				}
			}

			var clickText = "";
			try{
				var e = e|| window.event || arguments.callee.caller.arguments[0];
				if(e){
					var target = e.target || e.srcElement;
					if(target){
						var text = "";
						if(target.id == "jesong_panel" ||  (target.parentNode && target.parentNode.id == "jesong_panel")){
							text = "\u6613\u804a\u56fe\u6807";
						}else if(target.nodeName == "IMG"){
							text = target.src;
						}else{
							text = target.innerHTML.replace(/<[^>]+>/g,"");
							text = text.replace(/\s+/g,'');
							if(text.length>300){
								text = text.substring(0,300)
							}
							clickText = text;
						}
						if(text != ""){
							url = url + "&clickText="+window.encodeURIComponent(text);
						}
					}
				}
			}catch(e){}
			return url;
		},
		openWindowChat:function(url){
			var ev = jesong.env;
			var u = jesong.util;
			//è·å¾çªå£çåç´ä½ç½®
			var iTop = (window.screen.availHeight - 30 - 600) / 2;
			//è·å¾çªå£çæ°´å¹³ä½ç½®
			var iLeft = (window.screen.availWidth - 10 - 800) / 2;
			var p = "height=600,width=800,directories=no,location=no,menubar=no,resizeable=no,status=no,toolbar=no,top="+ iTop +",left="+ iLeft +"";
			try{
				var cw = window.open(jesong.util.filterXSS(ev.server.chat + jesong.urlPrefix +'chatPage?'+ url),'chat_'+ev.compId,p);cw.focus();
			}catch(e){
				window.location = jesong.util.filterXSS(ev.server.chat + jesong.urlPrefix +'chatPage?'+ url);
			}
		},
		openChat:function(c){
			var ev = jesong.env;
			var url = jesong.util.getChatUrl(c);
			try{
				if(ev.min == 1 && jesong.force && jesong.force.openchat){
					jesong.force.openchat(url);
				}else if(!jesong.util.isPC()||jesong.env.isPhone){
					if(jesong.force != null){
						params = jesong.force.getWinChatParam();
						if(params && params.chatting){
							window.location = jesong.util.filterXSS(ev.server.chat + jesong.urlPrefix + 'chatPage?'+url+"&command=applyChat&cId="+params.chatId+"&n="+params.customerId);
							return;
						}
					}
					window.location = jesong.util.filterXSS(ev.server.chat + jesong.urlPrefix + 'chatPage?'+url);
				}else{
					jesong.util.openWindowChat(url);
				}
			}catch(e){
				var img = document.createElement("img");
				img.src= ev.server.monitor + "i?cmd=clickError&c="+ev.compId+'&v='+ev.vId+'&u='+ev.uId + "&j="+ev.confId
					+"&url="+window.encodeURIComponent(window.location.href);
					+"&error="+(e.message ? window.encodeURIComponent(e.message) : "");
				img.style="border:0px;width:0px;height:0px;";
				document.body.appendChild(img);
			}
		},
		commonURL:function(){
			var ev =jesong.env;
			var u='c='+ev.compId+'&v='+ev.vId+'&u='+ev.uId+'&config='+ev.confId;

			var uKey = jesong.util.getReseveKey();
			if(uKey!=null)
				u+='&ext='+encodeURIComponent(uKey);

			if(ev.lang != null && ev.lang.length!=0)
				u+='&lang='+ev.lang;
			return u;
		}
	};
	jesong.timer={
		id:0,
		listeners:[],
		addListener:function(f){
			if(typeof f == 'function')
				this.listeners[this.listeners.length++] = f;
		},
		execute:function(){
			for(var v=0; v<this.listeners.length;v++){
				if(this.listeners[v] != null)
					this.listeners[v]();
			}
		},
		start:function(t){
			if(this.id != 0) this.stop();
			this.id = setInterval("jesong.timer.execute()",t);
		},
		stop:function(){
			if(this.id !=0)	clearInterval(this.id);
			this.id = 0;
		},
		started:function(){return this.id!=0;}
	};
	jesong.monitor.timer = 0;
	jesong.monitor.chat = {build:function(e){
		this.type= (e.e == '11')?1:0;
		this.force = (e.m&&e.m.indexOf('<FORCE>') != -1);
		this.cId = e.c;
		this.sId = e.s;
		this.dId = e.d;
		this.m = e.m;
		var ev = jesong.env;
		var url = ev.server.monitor + jesong.urlPrefix +'i/monitorSuccess?c='+ev.compId+'&v='+ev.vId +"&t="+e.c+"&n="+e.s;
		jesong.util.jsonRequest(url,jesong.monitor.pump);

	}};
	jesong.monitor.driver=function(){
		var ev = jesong.env;
		var url = ev.server.monitor + jesong.urlPrefix +'i/getEvent?v='+ev.vId + '&p='+ev.pId;
		jesong.util.upvid();
		jesong.util.jsonRequest(url,jesong.monitor.pump);
	};
	function showGuideAlert(msg)
	{
		var cmds = msg.split("<m>");
		if(cmds.length==2)
		if(typeof markGruideObj == 'function')
		{
			markGruideObj('#'+cmds[0],0,cmds[1],0,0,0);
		}
	}
	function tryToStartGuide(msg)
	{
		if(typeof startGuide == 'function')
		{
			startGuide(msg);
		}
	}
	jesong.monitor.hideInviteLayout = function(){
		document.getElementById("jesong_pop_msg").style.display = "none";
		document.getElementById("jesong_invite_layout").style.display = "none";
		jesong.monitor.accept();
	};
	jesong.monitor.doEvent=function(e){
		var mon = jesong.monitor;
		switch(e.e){
			case '11': case '1':
				mon.chat.build(e);
				try{window.focus();}catch(e){};
				if( mon.chat.force){
					jesong.util.forceChat(mon.chat);
					return;
				}else{
					if(e.m && e.m != "" && jesong.jsType == 1 && jesong.env.isPhone && jesong.force){
						var inviteLayout = document.getElementById("jesong_invite_layout");
						if(!inviteLayout){
							inviteLayout = document.createElement("div");
							inviteLayout.id = "jesong_invite_layout";
							inviteLayout.className = "jesong_invite_layout";
							document.body.appendChild(inviteLayout);

							function bindClickEvent(dom, fn){
								if(dom.attachEvent){
									dom.attachEvent("onclick", function(e){
										return fn.apply(this, [e]);
									});
								}else if(dom.addEventListener){
									dom.addEventListener("click", function(e){
										return fn.apply(this, [e]);
									});
								}else{
									target["onclick"] = fn;
								}
							}
							bindClickEvent(inviteLayout, jesong.monitor.hideInviteLayout);
						}
						inviteLayout.style.display = "block";
						jesong.force.showPopMessage.apply(jesong.force, [e.m]);
						document.getElementById("jesong_unread").style.display="none";
					}else{
						mon.show();
					}
				}
			break;
			case '8':
				mon.chat.build(e);
				mon.show();
				try{window.focus();}catch(e){};
			break;
			case '12':
				showGuideAlert(e.m);
			break;
			case '13':
				tryToStartGuide(e.m);
			break;
			case '9':
				jesong.util.$('jesong_mon_main').innerHTML = jesong.env.mId?(jesong.env.mId + '&nbsp;' + e.m):e.m;
				mon.show();
				try{window.focus();}catch(e){};
			break;
		}
	};
	// addæ¥å£è¿å æ°æ®å¤ç
	/**
	 * init: åå§å å®æ¶è¯·æ±getEvent
	 * add:åå»ºå¯¹è¯
	 * getEvent:å¯¹è¯çæµï¼åå»ºæ°å¯¹è¯
	 * refuse:æå¡å¨æç»
	 * */
	jesong.monitor.pump=function(){
		if(jesong.resp == null)
			return;
		var r = jesong.resp,mon = jesong.monitor;
		var u = jesong.util;
		switch(r.cmd){
			case 'init':
				mon.cust=r.p.l;
				mon.report=r.p.r;
				//å¦æä¸º1 è¿è¡å®æ¶çæ§
				if(r.p.l == 1){
					if( mon.cust && mon.timer==0){
						mon.timer = window.setInterval("jesong.monitor.driver()", 10*1000);
						jesong.monitor.driver();
					}
				}
				jesong.env.aiReady = r.p.ai;
				break;
			case 'add':
				jesong.env.pId=jesong.resp.p;
				if(jesong.resp.promotionId){
					jesong.env.promotionId = jesong.resp.promotionId;
				}
				jesong.env.recordReady = true;
				jesong.env.refer = jesong.resp.refer;
				jesong.env.firstPage = jesong.resp.firstPage;
				jesong.env.spreadFlag = jesong.resp.spreadFlag;
				jesong.autochat.keyWord = jesong.resp.keyword;
				jesong.env.vId = jesong.resp.visitorId;

				u.setCookie('JESONG_VISITOR_ID', jesong.env.vId, 60*60*1000);
				//å¿é¡»æ¯ææºç¹å®çå¯¹è¯
				if(jesong.resp && jesong.resp.chatId && jesong.resp.customerId){
					if(jesong.force){
						jesong.newChat = true;
						jesong.force.connect(jesong.resp.chatId, jesong.resp.customerId);
					}else{
						u.setCookie("jesong_chat_"+jesong.env.compId+"_id", jesong.resp.chatId,60000);
						u.setCookie("jesong_chat_user_"+jesong.env.compId+"_id", jesong.resp.customerId,60000);
					}
				}
				// å¦æready ä¸ºtrue  è¿è¡åå»ºå è½½ å¯¹è¯é»è¾
				if(jesong.isReady){
					jesong.loadForceJS();
				}
				//å¦æé¡µé¢å³é­æå·æ° è¯·æ±leaveæ¥å£
				window.onbeforeunload = function(){
					var imgTag = document.createElement('img');
					var ev = jesong.env;
					imgTag.src = ev.server.monitor + jesong.urlPrefix +'i/leave?c=' + jesong.env.compId + '&v=' + jesong.env.vId + '&p=' + jesong.env.pId;
				};
				//å¦ææå³é®è¯ å¹¶ä¸ å¯ç¨äºä¼åæ¨¡å¼ å¹¶ä¸æ¯å°çªå£
				if(jesong.autochat.keyWord && jesong.autochat.searchMode > 0 && jesong.env.min == 1){
					jesong.util.loadJS(jesong.env.server.file+"js/guide.js?ver="+jesong.version);
				}
				break;
			case 'getEvent':
				var es = jesong.resp.p;
				if(jesong.resp.vc != undefined) u.setCookie('JESONG_VC',jesong.resp.vc);
				if(jesong.resp.ac != undefined) u.setCookie('JESONG_AC',jesong.resp.ac);
				if(jesong.resp.ic != undefined) u.setCookie('JESONG_IC',jesong.resp.ic);
				if(jesong.resp.dc != undefined) u.setCookie('JESONG_DC',jesong.resp.dc);
				for(var v in es) mon.doEvent(es[v]);
				if(jesong.resp && jesong.resp.chatId && jesong.resp.customerId){
					if(jesong.force && jesong.force.status != 2 && jesong.force.transferMark != 2){
						jesong.newChat = true;
						jesong.force.connect(jesong.resp.chatId, jesong.resp.customerId);
					}
				}
				break;
			case 'refuse':
				break;
		}
	};
	jesong.monitor.accept=function(){

		var u = jesong.util;

		u.hide('jesong_mon_mask');
		u.hide('jesong_monitor');
		u.show('jesong_panel');

		jesong.util.winChat(function(){
			u.openChat(jesong.monitor.chat);
		});
	};

	jesong.monitor.hide = function(){
		jesong.util.hide('jesong_mon_mask');
		jesong.util.hide('jesong_monitor');
		jesong.util.show('jesong_panel');
	};

	jesong.monitor.refuse=function(e){
		if ( e && e.stopPropagation ){
			//å æ­¤å®æ¯æW3CçstopPropagation()æ¹æ³
			e.stopPropagation();
		}else {
			window.event.cancelBubble = true;
		}
		jesong.monitor.hide();
		var c =jesong.monitor.chat.cId;
		var setTimeInvite;
		if(jesong.monitor.config.showInviteAgain != -1){
			if(jesong.monitor.config.autoInviteTimes > 0){
				jesong.monitor.config.autoInviteTimes--;
				setTimeInvite = window.setTimeout(function(){
					jesong.util.show('jesong_monitor');
					if(jesong.monitor.config.mask){
						jesong.util.show("jesong_mon_mask");
					}
				}, jesong.monitor.config.showInviteAgain*1000);
			}else{
				clearTimeout(setTimeInvite)
			}

		}
		if(typeof c =='undefined' || c== null)
			return;
		var chatFrame = document.getElementById("jesong_chat");
		if(chatFrame && chatFrame.style.display=="block"){
			return;
		}
		var ev = jesong.env;
		var url = ev.server.monitor + jesong.urlPrefix +'i/refuse?c='+ev.compId+'&v='+ev.vId +'&t='+jesong.monitor.chat.cId;
		jesong.util.jsonRequest(url,jesong.monitor.pump);

	};
	jesong.monitor.buildMask=function(){
		var v=document.createElement('div');
		v.setAttribute('id','jesong_mon_mask');
		document.body.appendChild(v);
		var b = jesong.util.getBody();
		v.style.width = Math.max(b.scrollWidth,b.clientWidth)+ 'px';
		v.style.height = Math.max(b.scrollHeight,b.clientHeight) +'px';
		return v;
	};

	jesong.monitor.show=function(){
		if(jesong.force && jesong.force.isChatLayoutShow()){
			return;
		}

		var u = jesong.util;
		if(jesong.monitor.config.mask){
			var m=u.$('jesong_mon_mask');
			(m!=null) ||( m = jesong.monitor.buildMask());
			u.show(m);
		}
		u.show('jesong_monitor');
		if(jesong.panel && jesong.panel.config && jesong.panel.config.panelWhenInvite == "1"){
			u.hide('jesong_panel');
		}
		window.focus();
		if(typeof jesong.monitor.autoTimer != 'undefined' && jesong.monitor.autoTimer !=0){
			clearTimeout(jesong.monitor.autoTimer);
			jesong.monitor.autoTimer = 0;
		}
	};
	jesong.monitor.autoShow = function(){

		if(jesong.force && jesong.force.isChatLayoutShow() && jesong.autochat.hideMonitor){
			return;
		}
		var u = jesong.util;
		var autoInviteTimes = jesong.monitor.config.autoInviteTimes;
		var autoTimes = u.getCookie('JESONG_AUTO_MON_TIMES');
		if(autoTimes){
			autoTimes = parseInt(autoTimes);
		}else{
			autoTimes = 0;
		}
		if(autoInviteTimes ==-1 || autoInviteTimes>autoTimes){
			u.setCookie('JESONG_AUTO_MON_TIMES', autoTimes+1, 60000);
			jesong.monitor.show();
		}else{
			if(typeof jesong.monitor.autoTimer != 'undefined' && jesong.monitor.autoTimer !=0){
				clearTimeout(jesong.monitor.autoTimer);
				jesong.monitor.autoTimer = 0;
			}
		}
	};
	//å¼å§å¯¹è¯  è·åå½åè®¿å®¢ç¶æ
	jesong.monitor.start=function(){
		var con=jesong.monitor.config;
		if(con.auto >= 0){
			var now = new Date();var nh=now.getHours(),nm=now.getMinutes();
			function tonum(s){ var s1=s.replace(/:/g,'');
				while(s1.charAt(0)=='0' && s1.length>1) s1=s1.substring(1); return parseInt(s1);}
			var h1=tonum(con.start);var h2=tonum(con.end);var n=tonum(nh+":"+((nm<10)?('0'+nm):nm));
			var _flag = false;
			if(h1 > h2 && ((h1 <= n && n < 2359) || (n > 0 && n <= h2))){
				_flag = true;
			}else if(h1<=n && h2>=n){
				_flag = true;
			}
			if(_flag){
				var autoTimes = jesong.util.getCookie('JESONG_AUTO_MON_TIMES');
				var t = con.auto*1000;
				jesong.monitor.autoTimer = setTimeout('jesong.monitor.autoShow()', t);
			}
		}
		var ev = jesong.env;
		var v = jesong.util.getCookie('JESONG_VISITOR_ID');
		if( v != null && v.length !=0){
			ev.vId = v;
		}
		var url = ev.server.monitor + jesong.urlPrefix +'i/init?u='+ev.uId+"&v="+ev.vId;
		jesong.util.jsonRequest(url,jesong.monitor.pump);
	};
	//å¯¹è¯ ç¬¬ä¸æ¬¡è¯·æ±
	jesong.monitor.record=function(){
		var ev = jesong.env;
		var h = document.title;if(h.length>100)h=h.substring(0,100);
		var refer = null;
		if(jesong.util.GetQueryValue('refer') != null && jesong.util.GetQueryValue('refer') != undefined){
			refer = jesong.util.getStr('?refer=');
		}else{
			refer = document.referrer ? document.referrer : "";
		}
		//add url åæ°æ¼è£
		var url = ev.server.monitor+ jesong.urlPrefix +'i/add?v='+ev.vId+'&u='+ev.uId+'&p='+ev.pId
			+'&ref='+encodeURIComponent(refer)+'&h='+encodeURIComponent(h)+'&w='+encodeURIComponent(document.location.href)
			+'&scn='+screen.width+'*'+screen.height+'&t='+(jesong.monitor.cust+2*jesong.monitor.report);
		//è·åå¤ç¨key
		var uKey = jesong.util.getReseveKey();
		if(uKey!=null)
			url+='&ext='+encodeURIComponent(uKey);
		if(jesong.util.getCookie('JESONG_VC')){
			url+="&vc="+jesong.util.getCookie('JESONG_VC');
		}
		if(jesong.util.getCookie('JESONG_AC')){
			url+="&ac="+jesong.util.getCookie('JESONG_AC');
		}
		if(jesong.util.getCookie('JESONG_IC')){
			url+="&ic="+jesong.util.getCookie('JESONG_IC');
		}
		if(jesong.util.getCookie('JESONG_DC')){
			url+="&dc="+jesong.util.getCookie('JESONG_DC');
		}
		if(jesong.util.getCookie('JESONG_S_FLAG')){
			url+="&sf="+jesong.util.getCookie('JESONG_S_FLAG');
		}
		url+="&sid="+ev.sid;
		url+="&promotionId="+ev.promotionId;
		jesong.util.jsonRequest(url,jesong.monitor.pump);
	};
	jesong.freecall.response = function(resp){
		if(!resp.code){
			jesong.freecall.hide();
		}
		alert(resp.msg)
	};
	jesong.freecall.hide = function(){
		jesong.util.$("jesong_freecall").style.display = "none";
	};
	jesong.freecall.commit = function(){
		var phone = jesong.util.$("jesong_freecall_text").value;
		if(/^(13|14|15|17|18|19)\d{9}$/i.test(phone) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(phone)){
			//ä¿å­
			// jesong.freecall.hide();
			// var ev = jesong.env;
			// var url = ev.server.chat + "msg.do?cmd=savePhone";
			// var params = [];
			// params.push("c="+jesong.env.compId);
			// params.push("v="+jesong.env.vId);
			// params.push("u="+jesong.env.uId);
			// params.push("sid="+jesong.env.sid);
			// params.push("phone="+window.encodeURIComponent(phone));
			// if(jesong.freecall.config.groupId != -1){
			// 	params.push("g="+jesong.freecall.config.groupId);
			// 	// params.push("g=1");
			// }
			// params.push("promotionId="+jesong.env.promotionId);
			//
			// if(ev.spreadFlag){
			// 	url = url +"&sf="+window.encodeURIComponent(ev.spreadFlag);
			// }
			//
			// var refer = null;
			// if(jesong.util.GetQueryValue('refer') != null && jesong.util.GetQueryValue('refer') != undefined){
			// 	refer = jesong.util.getStr('?refer=');
			// 	url = url +"&ref="+window.encodeURIComponent(refer);
			// }else{
			// 	if(ev.refer){
			// 		url = url +"&ref="+window.encodeURIComponent(ev.refer);
			// 	}
			// }
			//
			// var exts = jesong.util.getReseveKey();
			//
			// if(exts != null && exts != ""){
			// 	params.push("ext="+window.encodeURIComponent(exts));
			// }
			// params.push("url="+window.encodeURIComponent(window.location.href));
			// jesong.util.jsonRequest(url+"&"+params.join("&"), function(){});
			var params = jesong.force.getWinChatParam();
			var ev = jesong.env;
			var script = document.createElement("script");
			script.src = ev.server.chat + jesong.version +"/" + ev.compId + "/chat/freeCall2?cusId="+(!params.customerId?"live":params.customerId)+"&phone="+phone+"&v="+ev.vId+"&u="+ev.uId+"&chatId="+(!params.chatId?0:params.chatId)+"&callback=jesong.freecall.response";
			document.body.appendChild(script);
		}else{
			alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801\n\u5750\u673a\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f:\u533a\u53f7-\u5ea7\u673a\u53f7-\u5206\u673a\u53f7");
			jesong.util.$("jesong_freecall_text").focus();
		}
	};
	//åè´¹çµè¯é»è¾
	jesong.freecall.init = function(){
		var con = jesong.freecall.config;
		if(con && con.show){
			var m = document.createElement('div');
			document.body.appendChild(m);
			m.setAttribute('id','jesong_freecall');
			var csstext = "width:"+con.panelWidth+"px;height:"+con.panelHeight+"px;background:url("+con.panelBg+") no-repeat center center;";//_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+con.panelBg+"');";
			if(con.panelPos == 0){
				var _t = -parseInt(con.panelHeight/2)+ parseInt(jesong.util.getBody().clientHeight/2);
				var _l = -parseInt(con.panelWidth/2)+ parseInt(jesong.util.getBody().clientWidth/2);
				csstext+="top:"+_t+"px;left:"+_l+"px;";
				csstext+="_buttom:auto;_top:expression(eval(document.documentElement.scrollTop+"+_t+"));";
			}else{
				if(con.panelTop != -1 && con.panelTop > 0){
					csstext+="top:"+con.panelTop+"px;";
					csstext+="_top: expression(eval(document.documentElement.scrollTop+"+con.panelTop+"));";
				}
				if(con.panelLeft != -1 && con.panelLeft > 0){
					csstext+="left:"+con.panelLeft+"px;";
				}
				if(con.panelBottom != -1 && con.panelBottom > 0){
					csstext+="bottom:"+con.panelBottom+"px;";
					csstext+="bottom:1px;_position: absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-"+con.panelBottom+"));";
				}
				if(con.panelRight != -1 && con.panelRight > 0){
					csstext+="right:"+con.panelRight+"px;";
				}
			}
			m.style.cssText = csstext;

			var setPosition = function(tar, w, h, t, l){
				tar.style.width = w+"px";
				tar.style.height = h+"px";
				tar.style.top = t+"px";
				tar.style.left = l+"px";
			};

			var promptText = "\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801";
			m.innerHTML = "<div id=\"jesong_freecall_close\" onclick=\"jesong.freecall.hide();return false;\"></div><div id=\"jesong_freecall_textarea\"><input id=\"jesong_freecall_text\" value=\""+promptText+"\"/></div><div id=\"jesong_freecall_btn\"  onclick=\"jesong.freecall.commit();return false;\"></div>";
			setPosition(jesong.util.$("jesong_freecall_close"), con.closeWidth, con.closeHeight, con.closeTop, con.closeLeft);
			setPosition(jesong.util.$("jesong_freecall_btn"), con.callWidth, con.callHeight, con.callTop, con.callLeft);
			setPosition(jesong.util.$("jesong_freecall_textarea"), con.textWidth, con.textHeight, con.textTop, con.textLeft);

			var input = jesong.util.$("jesong_freecall_text");
			input.style.width = con.textWidth+"px";
			input.style.height = (con.textHeight)+"px";
			input.style.lineHeight = (con.textHeight)+"px";
			input.style.color = "#AE9F9F";
			jesong.util.attach(input,"blur", function(){
				if(input.value == ""){
					input.value = promptText;
					input.style.color = "#AE9F9F";
				}
			});
			jesong.util.attach(input,"focus", function(){
				if(input.value == promptText){
					input.value = "";
					input.style.color = "#000000";
				}
			});
		}
	};
	//åå§åéè¯·æ¡
	jesong.monitor.init=function(){
		var u = jesong.util,mon=jesong.monitor;
		var m = document.createElement('div');
		document.body.appendChild(m);
		m.setAttribute('id','jesong_monitor');
		var csstext = "";
		//éè¯·æ¡ä½ç½®
		if(mon.config.pos == "1" || mon.config.pos == "4"){
			csstext+="top:1px;_position: absolute;_top: expression(eval(document.documentElement.scrollTop));";
		}else if(mon.config.pos == "2" || mon.config.pos == "5"){
			csstext+="bottom:1px;_position: absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));";
		}
		if(mon.config.pos == "1" || mon.config.pos == "2"){
			csstext+="left:1px;";
		}else if(mon.config.pos == "4" || mon.config.pos == "5"){
			csstext+="right:1px;";
		}
		//éè¯·æ¡ç±»å
		if(mon.config.type == 1){
			m.innerHTML='<div id="jesong_mon_head" style="width:0px;height:0px;"></div><div id="jesong_mon_accept" style="'+mon.config.acceptStyle+'"  onclick="javascript:jesong.monitor.accept()"></div><div id="jesong_mon_refuse" style="'+mon.config.refuseStyle+'" onclick="javascript:jesong.monitor.refuse(event)"></div><div style="overflow:hidden;'+mon.config.textStyle+'">'+mon.config.text+'</div>';
			csstext += "background:"+mon.config.mainBg+";background-size:100%;";
			csstext += "height:"+mon.config.mainHeight+"px;";
			csstext += "width:"+mon.config.mainWidth+"px;";
		}else{
			var className="jesong_win_monitor_"+jesong.monitor.config.index;
			m.innerHTML='<div class="title" id="jesong_mon_head">'+mon.config.title+'</div><div class="context">'+mon.config.text+'</div><div id="jesong_mon_accept" class="accept" onclick="javascript:jesong.monitor.accept()"></div><div class="refuse" onclick="jesong.monitor.refuse(event)"></div>';
			m.className = className;
		}
		if(mon.config.pos == "3"){
			var _t = -226/2+ u.getBody().clientHeight/2;
			var _l = -419/2 +u.getBody().clientWidth/2;
			if(jesong.jsType == 1){
				_t = -300/2+ u.getBody().clientHeight/2;
				_l = -281/2 +u.getBody().clientWidth/2;
			}
			if(mon.config.type == 1){
                _t = -parseInt(mon.config.mainHeight)/2 + u.getBody().clientHeight/2;
                _l = -parseInt(mon.config.mainWidth)/2 +u.getBody().clientWidth/2;
			}
			csstext+="top:"+_t+"px;left:"+_l+"px;";
			csstext+="_position: absolute;_buttom:auto;_top:expression(eval(document.documentElement.scrollTop+"+_t+"));";
		}
		m.style.cssText = csstext;
	};
	//ç½é¡µå¾æ è®¾ç½®
	jesong.panel.init=function(){
		var u=jesong.util,pan=jesong.panel,con=pan.config;
		var p = u.$('jesong_panel');
		//con.category ä¸ºé¢æ¿ç±»åï¼winï¼åè¡¨ï¼iconï¼å¾æ ï¼
		var po = con.category=='win'?jesong.win:(con.category=='icon'?jesong.icon:jesong.text);
		if(con.position != -1){
			var cssText = "position:fixed;_position:absolute;";
			if(con.position == 4 || con.position == 5){
				cssText = cssText + "right:0px;left:0px;";
			}else{
				cssText = cssText +((con.position==0 || con.position==2)?'left':'right')+":"+con.horizon+"px;";
			}

			if(con.position == 0 || con.position == 1){
				cssText = cssText + "top:"+con.vertical+"px;_buttom:auto;_top:expression(eval(document.documentElement.scrollTop+"+con.vertical+"));";
			}else if(con.position == 2 || con.position == 3){
				cssText = cssText + "bottom:"+con.vertical+"px;_buttom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.clientHeight -1 - "+con.vertical+"));";
			}else if(con.position == 4 || con.position == 5){
				cssText = cssText + "bottom:0px;";
			}
			p.style.cssText = cssText;
		}
		po.builder();
		u.show(p);
	};
	//éç½®å®¢æåè¡¨æ¨¡å¼
	jesong.win.builder=function(){
		var con = jesong.win.config,u=jesong.util,pan=u.$('jesong_panel');
		if(con.mode == 0 ){ con.width += 8;}
		if(con.mode == 1){
			if(con.index == undefined){
				con.index = 0;
			}
			pan.className = "jesong_win_pan_"+con.index;
			var h ='<div class="head" id="jesong_head"></div><div class="center"><div id="jesong_ocontent" class="ocontent"></div></div><div class="bottom"></div><div class="bottom2"></div>';
			pan.innerHTML = h;
		}else if(con.mode == 0){
			pan.style.width=((con.width==null)?144:con.width)+'px';
			var h = '<div id="jesong_nhead"><div id="jesong_ncls" onclick="javascript:jesong.win.close()">X</div><div id="jesong_ntitle"></div></div><div id="jesong_ncontent" ></div>';
			h+='<div id="nfoot" onclick="return false">';
			if(con.phone.length !=0){ h+='<div class=".tel" style="height:20px;line-height:20px;text-align:center;color:#000000;">'+con.phone+'</div>';};
			if(con.qccode.length !=0){ h+='<div class=".qccode"><img style="width:'+(con.width-2)+'px;height:'+(con.width-2)+'px;" src="'+con.qccode+'"></img></div>';}
			h+='</div>';
			pan.innerHTML = h;pan.className = 'jesong_pan_flat';
			try{
				u.$('jesong_nhead').style.backgroundColor=con.headBgClr; }catch(e){}
				try{u.$('jesong_nhead').style.color = con.headClr; }catch(e){}
				try{pan.style.borderColor = con.borderClr;}catch(e){}
				try{    u.$('jesong_ntitle').innerHTML = con.title;
			}catch(e){}
		}else if(con.mode == 2){
			pan.style.backgroundImage = "url("+con.winBg+")";
			pan.style.height = con.height+"px";
			pan.style.width = con.width+"px";
			var contentStyle = "position:absolute;top:"+con.winMTop+"px;left:"+con.winMLeft+"px;height:"+con.winMHeight+"px;width:"+con.winMWidth+"px;";
			pan.innerHTML = "<div style=\""+contentStyle+"\">"+jesong.win.buildList(con.mode)+"</div>";
		}
		if(con.mode == 0 || con.mode == 1){
			var main = u.$((con.mode == 1)?'jesong_ocontent':'jesong_ncontent');
			(con.mode!=1) ||(main.style.height = con.height+'px');
			main.innerHTML = '<div id="jesong_allcontent">'+jesong.win.buildList(con.mode)+'</div>';
			if(con.mode != 1){pan.style.width = con.width+'px';if(jesong.win.cols > 20){main.style.height=350+'px';main.style.overflowY='auto';pan.style.width=con.width+20+'px';}}
		}
	};
	jesong.win.openChat=function(et,tar){
		jesong.util.winChat(function(){
			var p = '';
			if( et == 'c')
				p = 'n='+tar;
			else if(et == 'g'&&tar!=null&&tar!='0')
				p = 'g=' + tar;
				// p = 'g=1';
			jesong.util.openChat(p);
		});
	};
	jesong.win.scroll=function(p){
		var u = jesong.util;
		var a = jesong.win.config.height/2;
		u.$('jesong_allcontent').scrollTop = parseInt(u.$('jesong_allcontent').scrollTop) + (p==1?-a:a) ;
	};
	jesong.win.buildList=function(mode){
		var ele = function(et,sn,tar,stat,off){
			var mo = jesong.win.config.mode;
			var sc = ['jesong_offline','jesong_online','jesong_offline','jesong_offline','jesong_offline','jesong_other','jesong_other','jesong_other'];
			var sofft = ['\u7559\u8a00','\u81ea\u52a9','\u7535\u8bdd','\u77ed\u4fe1'],sont=['\u5728\u7ebf','\u5fd9\u788c','\u79bb\u5f00'];
			var clk = (et !='gw' && et != 'd');
			var c='';
			if(clk)	c+= (stat==0?sc[stat+4]:sc[stat]);
			var h = '<div class="' + (et=='c'?'group_content':'group_title') +'" ';
			if( clk ) h += 'onclick=javascript:jesong.win.openChat("' + et + '","' + tar + '") ';
			if( (et=='d' || et =='gw'))
				h +='id="jesong_hand_' + tar +'" onclick=javascript:jesong.win.folder("'+tar+'")';

			h += '>';
			var cls=(stat==0?sc[off+4]:sc[stat]);
			if(clk)	h+='<div class="'+cls+'">';
			if( clk ){var s = (stat==0?sofft[off]:sont[stat-1]);  h += '<div class="jesong_status">'+s+'</div>';}
			h += '<div class="jesong_link" ';

			h += '>' +((mo==1 && et!='c')?'<span>&gt;&nbsp;</span>':'') + sn+'</div></div>';
			if(clk) h+='</div>';
			return h;

		};
		var html ='';
		var depts = jesong.win.config.customers.groups;
		var m = jesong.win.config.customers.mode;
		var cols = 0;
		var onlineStyle;
		var offlineStyle;
		if(mode == 2){
			var conf = jesong.win.config;
			onlineStyle = "background:url("+conf.winGOnlineBg+");height:"+conf.winGHeight+"px;margin-top:"
				+conf.winGTop+"px;margin-bottom:"+conf.winGBottom+"px;line-height:"+conf.winGHeight
				+"px;color:"+conf.winGOnlineColor+";cursor:pointer;font-size:"+conf.winGOnlineWeight+"px;font-family:"+conf.winGOnlineFont+";padding-left:"+conf.winGTextleft+"px;";
			offlineStyle = "background:url("+conf.winGOfflineBg+");height:"+conf.winGHeight+"px;margin-top:"
				+conf.winGTop+"px;margin-bottom:"+conf.winGBottom+"px;line-height:"+conf.winGHeight
				+"px;color:"+conf.winGOfflineColor+";cursor:pointer;font-size:"+conf.winGOnlineWeight+"px;font-family:"+conf.winGOnlineFont+";padding-left:"+conf.winGTextleft+"px;";
		}
		for(var v=0;v<depts.length;v++){
			var dept = depts[v];
			var elet = 'g';
			var stat = (dept.active > 0?1:0);
			var off = null;cols++;
			if(elet == 'g')
				off = 0;
			if(mode==0){
				html += ele('g',dept.name,dept.id,stat,off);
				/*if(elet == 'd' || elet == 'gw'){
					for( var v1=0;v1<dept.customers.length;v1++){
						var cust = dept.customers[v1];cols++;
						html += ele('c',cust.name==null?cust.id:cust.name,cust.id,cust.status,cust.offline);
					}
				}*/
			}else if(mode == 1){
				var className="offline";
				if(stat == 1){
					className="online";
				}
				html += '<div class="'+className+'" onclick=javascript:jesong.win.openChat("g","' + dept.id + '")>'+dept.name+'</div>';
			}else if(mode == 2){
				var style = offlineStyle;
				if(stat == 1){
					style = onlineStyle;
				}
				html += '<div style="'+style+'" onclick=javascript:jesong.win.openChat("g","' + dept.id + '")>'+dept.name+'</div>';
			}
		}
		jesong.win.cols = cols;
		return html;
	};
	jesong.win.close=function(){
		jesong.util.hide('jesong_panel');
	};
	jesong.win.folder=function(id){

	};
	jesong.icon.hide = function(e){
		document.getElementById('jesong_panel').style.display='none';
		if (e && e.stopPropagation){
	        e.stopPropagation();
		}else{
	        window.event.cancelBubble=true;
		}
		return false;
	};
	jesong.icon.builder=function(){
			function efs(s){
				var ev = jesong.env.server,s1='http://localhost/';
				if(s.indexOf(s1) != -1)
					s = ev.file + s.substring(s1.length);
				return s;
			}
			var con = jesong.icon.config,u=jesong.util;
			var pan=u.$('jesong_panel');
			pan.className = 'jesong_pan_icon';
			con.online = efs(con.online);
			con.offline = efs(con.offline);
			pan.style.height=con.height+'px';
			var bgcss = "";
			if(jesong.panel.config.position == 4){
				pan.style.width=jesong.util.getBody().clientWidth+'px';
				bgcss = "background:url("+ (con.status==1?con.online:con.offline) + ") no-repeat center center;";
			}else if(jesong.panel.config.position == 5){
				pan.style.width=jesong.util.getBody().clientWidth+'px';
				bgcss = "background:url("+ (con.status==1?con.online:con.offline) + ") no-repeat center center;background-size:100%;";
			}else{
				pan.style.width=con.width+'px';
				bgcss = "background:url("+ (con.status==1?con.online:con.offline) + ") no-repeat center center;background-size:100%;";
			}
			var html = '';
			if(jesong.msg.remind.msgNumPrompt == 1){
				var position = '';
				if(jesong.panel.config.position != -1){
					position = 'fixed';
				}else {
					position = 'absolute'
				}
				// top:"+ (pan.offsetTop - 8) +"px;left:"+ (pan.offsetLeft + pan.offsetWidth - 15) +"px;
				html+="<div id=\"jesong_msgNumPrompt\" class=\"jesong_msgNumPrompt\" style=\"position:"+ position +";z-index:99999;display: none;margin-left: -6px;margin-top: -8px;\"></div>";
			}
			html+="<div style=\"width:100%;height:100%;"+bgcss+"\"></div>";
			if(con.closeWidth>0 && con.closeHeight>0){
				html+="<div onclick=\"return jesong.icon.hide(event);\" style=\"position:absolute;z-index:99999;width:"+con.closeWidth+"px;height:"+con.closeHeight+"px;top:"+con.closeTop+"px;left:"+con.closeLeft+"px\"></div>";
			}
			pan.innerHTML=html;
			pan.onclick=jesong.icon.openChat;
		};
	jesong.util.winChat = function(commonFun){
		var params;
		if(jesong.force != null){
			params = jesong.force.getWinChatParam();
		}
		if(params && params.chatting){
			//if(jesong.env.min != 1){
				jesong.util.openChat("command=applyChat&cId="+params.chatId+"&n="+params.customerId);
			/*}else if(jesong.force.status != 2){
				jesong.force.connect(params.chatId, params.customerId);
			}*/
		}else{
			commonFun();
		}
	};
	jesong.icon.openChat=function(){
		try {
			var params;
			if(jesong.force != null){
				params = jesong.force.getWinChatParam();
			}
			if(params && params.chatting){
				JS.setCookie("jesong_chat_unread_" + params.chatId, "0", 60 * 60 * 1000);
				if(jesong.jsType == 1 && jesong.env.isPhone){
					jesong.util.hide('jesong_msgNumPrompt');
				}else {
					jesong.util.hide('jesong_unread');
				}
			}
		}catch (e) {console.log(e)}

		jesong.util.winChat(function(){
			var p = '';
			var con = jesong.icon.config;
			if( con.mode == 0){ if(con.target !='' && con.target != '0') p+='n='+con.target;}
			else if(con.mode == 1){if(con.target !='' && con.target != "0") p+='g='+con.target;}
			else if(con.target!=null&&con.target!='0') p+='g='+con.target;
			// else if(con.mode == 1){if(con.target !='' && con.target != "0") p+='g=1';}
			// else if(con.target!=null&&con.target!='0') p+='g=1'; //ææ¶åæ­»
			jesong.util.openChat(p);
		});
	};

	jesong.text.builder=function(){};


	jesong.commonReady = function(){
		jesong.ready();
	};
	jesong.loadForceJS = function(){
		jesong.util.loadJS(jesong.env.server.file+"static/2019/js/force.js");
	},
		//æ¨¡ç³æ¢å¤´é»è¾
	jesong.initProbe = function(){
		//å¹éæå­ãæ¥å¥åç»
		if(jesong.probe.texts != "" && jesong.probe.groupIds !=""){
			var ids=jesong.probe.texts.split(','),gids =jesong.probe.groupIds.split(',');
			var regs={};
	        var snifferNode=function(nd){
	            var o_p = nd.parentNode;
	            for(var i=0;i<ids.length;i++){
	                if(nd.nodeType==3 && o_p.nodeName!='A'){
	                    var re =  regs[ids[i]];
	                    if(!re){
	                       re = regs[ids[i]] = new RegExp('('+ids[i]+')',"ig");
	                    }
	                    if( nd.data.search(re) == -1) continue;
	                    var span = document.createElement('span');
	                    span.innerHTML =nd.data.replace(re,'<a href="javascript:void(0);" onclick="jesong.util.openChat(\'g=' + gids[i]+'\');return false">$1</a>');
	                    o_p.replaceChild(span,nd);
	                }else if(nd.nodeType==1){
	                    if(nd.id == ids[i] || nd.className == ids[i] || nd.nodeName=='IMG'&&nd.src.indexOf(ids[i])>0){
	                    	var groupId = gids[i];
	                    	jesong.util.attach(nd,'click', function(){
	                    		jesong.util.openChat.apply(this, ['g='+groupId]);
	                    	});
	                        nd.style.cursor="pointer";
	                    }
	                }

	            }
	        };
	        var processNode=function(nd){
	            var o =nd.childNodes;
	            snifferNode(nd);
	            if(o&&o.length>0)
	                for(var i=0;i<o.length;i++){
	                   processNode(o[i]);
	                }
	        };
	        if(ids.length){
	            processNode(document.body);
	        }
		}
	};
	//åå§åID
	jesong.initId = function(){
		var u = jesong.util,ev=jesong.env;
		u.upvid();
		ev.uId = u.getCookie('JESONG_USER_ID');
		if(u.isEmpty(ev.uId)||ev.uId=='undefined'){
		    ev.uId = ev.vId;
	      	u.setCookie('JESONG_USER_ID',ev.uId);
   		}
		var vId = u.getCookie('JESONG_VISITOR_ID');
		if(!u.isEmpty(vId) && vId!='undefined'){
			ev.vId = vId;
		}
	};
	jesong.ready=function(){
		if(!jesong.isReady){
			jesong.isReady = true;
			//å¦æå¼å¯ç½é¡µå¾æ 
			if(jesong.config.panel){jesong.panel.init();}
			function _setTop(id){
				var p=jesong.util.$(id);var par = p.parentNode;if(par!=null&&par.nodeName != 'body'){par.removeChild(p);document.body.appendChild(p);}
			}
			if(jesong.config.panel&&jesong.panel.config.position !=-1){
				_setTop('jesong_panel');
			}
			_setTop('jesong_chat_layout');

			if(jesong.config.monitor){
				// if (jesong.config.monitor.auto > -1){
				// 	jesong.monitor.init();
				// }
				jesong.monitor.init();
				jesong.monitor.start();
			}
			//å è½½ force.js
			if(jesong.visitorReady){
				jesong.loadForceJS();
			}
			//å¦ææ¯PC å¹¶ä¸ä¸æ¯ææºæµè§å¨
			if(jesong.jsType != 1 && !jesong.env.isPhone){
				//åè´¹çµè¯é»è¾
				jesong.freecall.init();
			}
			//æ¨¡ç³æ¢å¤´é»è¾
			jesong.initProbe();
		}
	};
	var resetJesong;
	try{
		jesong.initId();
		jesong.monitor.record();
		jesong.ready();

		var extCode = JESONG_MESSAGE_TEXT.extCode;
		if(extCode != ""){
			eval(extCode);
		}
		window.clearTimeout(resetJesong);
	}catch(e){
		window.sendJesongError(1, "webError-webcall "+e.message);
		resetJesong = setTimeout(function(){
			jesong.initId();
			jesong.monitor.record();
			jesong.ready();

			var extCode = JESONG_MESSAGE_TEXT.extCode;
			if(extCode != ""){
				eval(extCode);
			}
		},5000)
	}
	window.clearTimeout(window.jesongErrorTimeout);
})();