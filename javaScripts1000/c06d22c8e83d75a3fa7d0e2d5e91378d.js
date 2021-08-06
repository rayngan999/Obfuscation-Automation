









var JESONG_MESSAGE_TEXT;
var jesong;
window.sendJesongError = function(type, error){
	var img = document.createElement("img");
	img.src= "http://glive.easyliao.com/" + jesong.version + "/" + jesong.env.compId + "/i/loadError?c=31263&j=54087&type="+type+"&error="+(error ? window.encodeURIComponent(error) : "")+"&url="+window.encodeURIComponent(window.location.href);
	img.style="border:0px;width:0px;height:0px;";
	document.body.appendChild(img);
};
window.jesongErrorTimeout = window.setTimeout(function(){
	window.sendJesongError(2);
}, 5000);
(function(){
	function isMobile(){
		if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
			return true;
		}else{
			return false;
		}
	}
	if(jesong || (false && false != isMobile())){
		return;
	}
JESONG_MESSAGE_TEXT = {"aboutUs":"","replyMsgAtConnected":"","welcomeMsgOfConnected":"","welcomeMsgOfConnectedMin":"","extCode":"","msgOfTrans":"æ¨çå¯¹è¯å°è¢«è½¬ç§»ç»æçåäºï¼ æè°¢æ¨çå¨è¯¢ï¼","msgOfDisConnected":"æè°¢æ¨çå¨è¯¢ï¼ åè§ï¼","inviteTitle":"","inviteText":""};
jesong={
	chatUrl : 'http://glive.easyliao.com/live/',
	lazy : false,
	version : '1',
	language : 'sc',
	visitorReady : false,
	forceReady : false,
	newChat : false,
	jsType : 0,
	visitorPhoneVerification: "0",
	inputText: "1",
	callerOpinion : 0,
	env:{
		aiReady : -1,
		isPhone : false,
		scheme : "http",
		schemePort : "80",
		server:{
			monitor:'http://glive.easyliao.com/',
			chat:'http://glive.easyliao.com/live/',
			file:'http://scripts.easyliao.com/group-prd1/',
			guide : 'http://glive.easyliao.com/api/robot'
		},
		compId:31263,
		confId:54087,
		vId:'',
		uId:'',
		pId:0,
		sid:0,
		promotionId:0,
		mId:'',
		lang:'',

		min:1,
		pos:'1',
		groupId:'34532'
	},
	config:{
		firstToRebot:0,
		phoneChatPop:1,
		monitor:true,
		panel:false,
		frameChatStyle:14,
		forceChatLogo:"",
		phoneDefine:2,
		imgSizeDefault:false,
		showTransferMsg:true,
		copyWechat:true,
		copyQq:true,
		canCall:true,
		freeCall:false,
		baiduMap:false,
		
		phoneMinimizeTip:0,
		
		closePopTip:1,

		
		pageReminderNew:1,
		
		pcPageReminderNew:1,
		
		closeFn:1
	},
	font:{
		
		custFontCss : 'font-family:å®ä½!important;font-size:12px;color:#000000!important;',
		
		vistFontCss : 'font-family:å®ä½!important;font-size:12px;color:#FFFFFF!important;'
	},
	monitor:{},	panel:{},win:{},icon:{},text:{}, freecall:{}, probe:{}, phone:{}, msg:{},
	_isBindHost:function(){
		var bindHosts = "";
		if(bindHosts != ""){
			var _hosts = bindHosts.split(",");
			var domain = window.location.host;
			var bindHostFlag = false;
			for(var i=0; i < _hosts.length; i++){
				if(domain == _hosts[i]){
					bindHostFlag = true;
					break;
				}
			}
			return bindHostFlag;
		}else{
			return true;
		}
	},
	_genId : function(){
		var random4 = function(){
			return parseInt(Math.random()*9000+1000, 10);
		}
		var cId = "31263";
		while(cId.length < 12){
			cId = "0"+cId;
		}
		var id = ""+new Date().getTime();
		id = id.substring(3);
		id += random4();
		id += random4();
		return "01"+cId+id;
	},
	_createLayout : function(id, className){
		if(!this.lazy){
			document.write('<div id="'+id+'" class="'+className+'"></div>');
		}else{
			var _div = document.createElement("div");
			_div.id = id;
			_div.className = className;
			document.body.appendChild(_div);
		}
	},
	_loadJS : function(src){
		if(!this.lazy){
			//async="async"
			document.write('<scr'+'ipt type="text/javascript" defer src="'+src+'"></scr'+'ipt>');
		}else{
		    var script = document.createElement( "script" );
			script.type = "text/javascript";
			script.charset = "utf-8";
			script.src = src;
			document.getElementsByTagName("script")[0].parentNode.appendChild(script);
		}
	},
	_loadCSS : function(url){
		if(!this.lazy){
			document.write('<link rel="stylesheet" type="text/css" href="'+url+'"></link>');
		}else{
			var link = document.createElement( "link" );
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = url;
			document.getElementsByTagName( "head" )[0].appendChild( link );
		}
	},
	init:function(){
		if(this._isBindHost()){
			jesong.env.vId = this._genId();
			this._createLayout("jesong_panel", "");
			if(jesong.jsType == 1 && jesong.env.isPhone){
				this._createLayout("jesong_chat_layout", "jesong_phone_layout jesong_phone_layout_sc_1");
			}else{
				this._createLayout("jesong_chat_layout", "jesong_chat_layout_pc jesong_chat_layout_pc_sc");
			}
			document.getElementById("jesong_chat_layout").style.display = "none";
			this._createLayout("jesong_chat_min", "jesong_chat_min_sc");
			this._createLayout("jesong_pop_msg", (jesong.jsType == 1 && jesong.env.isPhone) ? "jesong_pop_msg_phone" : "");
			if("https:" == document.location.protocol){
				this.env.server.monitor = this.env.server.monitor.replace("http:", "https:");
				this.env.server.chat = this.env.server.chat.replace("http:", "https:");
				this.env.server.file = this.env.server.file.replace("http:", "https:");
				this.env.schemePort = "443";
				this.env.scheme = "https";

			}
			this._loadCSS(this.env.server.file + "css/webcall.css?ver=1");

			this._loadJS(this.env.server.file + "static/2019/js/webcall.js");
			this._loadCSS(this.env.server.file + "static/2019/css/force.css?ver=1");
		}
	},
	words:{
		welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
		welcomeMin:JESONG_MESSAGE_TEXT.welcomeMsgOfConnectedMin,
		greeting:JESONG_MESSAGE_TEXT.replyMsgAtConnected,
		disconnect:JESONG_MESSAGE_TEXT.msgOfDisConnected
	}
};



jesong.monitor.config={
	index:11,
	type:0,
	title:JESONG_MESSAGE_TEXT.inviteTitle,
	text:JESONG_MESSAGE_TEXT.inviteText,
	pos:'3',
	auto:-1,
	showInviteAgain:-1,
	autoInviteTimes:-1,
	group:'34532',
	start:'09:00',
	end:'18:00',
	mask:false,
	mainBg:'url() no-repeat',
	mainHeight:'0',
	mainWidth:'0',
	acceptStyle:'position:absolute;background:url() no-repeat;height:0px;width:0px;top:0px;left:0px;',
	refuseStyle:'position:absolute;background:url() no-repeat;height:0px;width:0px;top:0px;left:0px;',
	textStyle:'position:absolute;height:0px;width:0px;top:0px;left:0px;'
};


jesong.probe = {
	texts:"",
	groupIds:""
};


jesong.msg.remind = {
	
	msgNumPrompt:0,
	
	msgAlertBubble:1,
	
	msgBubblePos:0,
	
	msgBubbleTime:0,
	
	msgBubbleTimeNum:60
};

jesong.autochat={
	keyWord : null,
	sendkeyWord : 0,
	searchMode : 0,
	bgcolor:'#3097ef',
	width:420,
	height:500,
	
	showCustomerInfoMin:0,
	
	showAboutUsMin:0,
	
	ad2ImageURLMin:'null',
	
	ad2ImageLinkMin:'null',
	
	aboutusShortImgMin:'null',
	
	aboutusLongImgMin:'null',
	use:1,
	start:'00:00',
	end:'23:59',
	times:-1,
	delay : 5,
	hideMonitor : true,
	show:false,
	welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
	aboutUs:JESONG_MESSAGE_TEXT.aboutUs,
	waitSendMsg:'',
	connect : '1',
	closeBtn : '1',
	minBtn : '1',
	maxBtn : true,
	mask : '0',
	userHead : 'http://scripts.easyliao.com/group-prd1//images/chat/201805/head-user.png',
	visitorHead : 'http://scripts.easyliao.com/group-prd1//images/chat/201805/head-visitor.png',
	topImage : '',
	topImageMin : '',
	phoneHeight : 80,
	tel : '',
	pageTitle : '',
	pcMinLogo : '',
	autoPopMWinTime : 0,
	autoPopMWinPeroid : 0,
	
	autoPopMWinTimePC : 0,
	
	autoPopMWinPeroidPC : 0,
	softLogoLicense : false,
	softLogo : "",
	tools:{
		emoticons : '1',
		opinion : '1',
		screen : '1',
		file : '1',
		quiet : '1'
	},
	popMsg : {
		head : '',
		title : 'æ¨ææ°çå®¢æ·æ¶æ¯ï¼è¯·æ³¨ææ¥çï¼',
		bgColor : '#2273F8',
		color : '#ffffff',
		opacity : '80'
	}
};
jesong.ocpc = {
	platform:'-1',
	condition:'1',
	configId:'0'
};

if(!jesong.lazy){
	document.write('<style>.vstText{'+jesong.font.vistFontCss+'} .svcText{'+jesong.font.custFontCss+'}</style>');
}else{
	var x = document.createElement("STYLE");
	var t = document.createTextNode(".vstText{"+jesong.font.vistFontCss+"} .svcText{"+jesong.font.custFontCss+"}");
	x.appendChild(t);
	document.head.appendChild(x);
}


jesong.init();

})();



