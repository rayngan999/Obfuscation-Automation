loadCss('grataCss', 'https://cdn.grata.cn/domestic/js/chat-prod.css');

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function loadCss(cssId, src, type, rel) {
    if (!document.getElementById(cssId)) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = src;
        link.media = 'all';
        head.appendChild(link);
    }
}

function Chatbox(options, orcode)
{
    $('.ui-loader').remove();
    this.orgId = orcode;
    this.accessCode = orcode;//To add in register
    this.startTime = new Date();

    function preGetCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
    }

    function isMobile() {
        try{ 
            document.createEvent("TouchEvent");
            return true;
        }
        catch(e){ return false; }
    }

    function decode(string) {
        var div = document.createElement("div");
        div.innerHTML = string; 
        return typeof div.textContent !== 'undefined' ? div.textContent : div.innerText;
    }

    this.localLang = null;
    if (options.data[0].interfaceLang === "1") {
        if (preGetCookie(options.data[0].cookieName) !== undefined) {
            this.localLang = preGetCookie(options.data[0].cookieName);
	    if (this.localLang === "en_CN") {this.localLang = "en_US"}
        } else {
            this.localLang = (navigator.language.indexOf('en') > -1) ? "en_US" : "zh_CN";
        }
    } else if (options.data[0].interfaceLang === "2") {
        this.localLang = options.data[0].interfaceUrlLang;
        if (this.localLang === "en_US") {
            var stringToLookForCn = options.data[0].interfaceUrlValueCn;
            if (window.location.href.toLowerCase().indexOf(stringToLookForCn.toLowerCase()) > -1) {
                this.localLang = "zh_CN";
            }
        } else if (this.localLang === "zh_CN") {
            var stringToLookForEn = options.data[0].interfaceUrlValueEn;
            if (window.location.href.toLowerCase().indexOf(stringToLookForEn.toLowerCase()) > -1) {
                this.localLang = "en_US";
            }
        }
    } else {
        this.localLang = (navigator.language.indexOf('en') > -1) ? "en_US" : "zh_CN";
    }

    this.chatAgentName = options.data[0].chatAgentName;
    this.colorHeader = options.data[0].chatHeader;
    this.chatMessageEn = options.data[0].chatHeaderOnlineEn;
    this.chatMessageCn = options.data[0].chatHeaderOnlineCn;
    this.colorBackground = options.data[0].chatBackground;
    this.colorHeaderText= options.data[0].chatHeaderText;
    this.chatText =  options.data[0].chatText;
    this.colorUserName= options.data[0].chatUserName;
    this.chatMessageOfflineEn = options.data[0].chatMessageOfflineEn;
    this.chatMessageOfflineCn = options.data[0].chatMessageOfflineCn;
    this.chatWidth = options.data[0].chatWidth;
    this.chatRadius = options.data[0].borderRadius;
    this.chatFont = options.data[0].font;
    this.userName = null;
    this.agentName = null;
    this.systemTextBackground = options.data[0].systemBackground;
    this.audioEnable = (options.data[0].audioEnable === "false") ? false : true;
    this.optionRef = options.data[0];
    this.welcomeMessageText = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? decode(options.data[0].chatMessageOnlineEn) : decode(decodeURIComponent(options.data[0].chatMessageOnlineCn));
    this.chatMessageOnline = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? decode(this.chatMessageEn) : decode(decodeURIComponent(this.chatMessageCn));
    this.chatMessageOffline = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? decode(this.chatMessageOfflineEn) : decode(decodeURIComponent(this.chatMessageOfflineCn));

    this.welcomeMessageText = this.welcomeMessageText.split("\n").join("<br/>");
    this.chatMessageOnline = this.chatMessageOnline.split("\n").join("<br/>");
    this.chatMessageOffline = this.chatMessageOffline.split("\n").join("<br/>");

    this.optionRef.chatMessageBusyEn = this.optionRef.chatMessageBusyEn.split("\n").join("<br/>");
    this.optionRef.chatMessageBusyCn = this.optionRef.chatMessageBusyCn.split("\n").join("<br/>");

    this.welcomeMessageText = this.welcomeMessageText.split("\\").join("");
    this.chatMessageOnline = this.chatMessageOnline.split("\\").join("");
    this.chatMessageOffline = this.chatMessageOffline.split("\\").join("");
    this.optionRef.chatMessageBusyCn = this.optionRef.chatMessageBusyCn.split("\\").join("");
    this.optionRef.chatMessageBusyEn = this.optionRef.chatMessageBusyEn.split("\\").join("");

    this.optionRef.chatHeaderBusyEn = decode(this.optionRef.chatHeaderBusyEn);
    this.optionRef.chatHeaderBusyCn = decode(decodeURIComponent(this.optionRef.chatHeaderBusyCn));
    this.optionRef.chatHeaderOnlineEn = decode(this.optionRef.chatHeaderOnlineEn);
    this.optionRef.chatHeaderOnlineCn = decode(decodeURIComponent(this.optionRef.chatHeaderOnlineCn));
    this.optionRef.chatHeaderOfflineEn = decode(this.optionRef.chatHeaderOfflineEn);
    this.optionRef.chatHeaderOfflineCn = decode(decodeURIComponent(this.optionRef.chatHeaderOfflineCn));

    this.userTyping= false;
    this.logging = false;
    this.stackCount = 0;
    this.lastPingTime = 0;
    this.connected = false;
    this.welcomePosted = false;
    this.chatHeader = null;
    this.chatIsOpen = false;
    this.myIp = null;
    this.historyLastMessage = null;
    this.historyLastId = null;
    this.isMobileConfig = false;
    this.status = null;
    this.lastScrollTop = 0;
    this.maxUserWaiting = 2;
    this.currentUserWaiting = 0;
    this.isBusyStatusSent = false;
    this.showStatus = null;
    this.orgOnline = null;//[orgOnline]
    this.sessionId = null;
    this.myHistory = [];
    this.toScroll = false;
    this.firstScoll = true;
    this.getConvDone = false;
    this.staffOnline = null;//Status update
    this.chatRef = null;
    this.webchatDisabled = false;
    this.uploadInProgress = false;
    this.lastImageHeight = null;
    this.historyPreviousSender = null;
    this.lastScrollPos = 0;
    this.clickButtonId = "";
    this.isShowGrata = false;
    this.isRegisterDone = (getCookie('grataUserToken') === "") ? false : true; 
    this.addUrlSent = false;
    this.addPageViewDone = false;
    this.hideGrata = false;
    this.showDefaultLeft = (options.data[0].chatLayout === "1") ? true : false;
    this.unreadWidth = 0;
    this.unreadHeight = 0;
    this.readWidth = 0;
    this.readHeight = 0;
    this.imageIcon = null;
    this.imageReadIcon = null;
    this.historyUrlSent = false;
    this.originalOrgOnline = null;
    this.csStatus = null;
    this.closeToken = null;
    this.toggleToken = null;
    this.testStatus = false;
    this.firstAgentResponseSent = null;
    this.firstUserResponseSent = null;
    this.fromLaunchCs = false;
    this.nextConcat = null;
    this.previousID = null;
    this.currentUnreadMessage = 0;
    this.previousTitle = null;
    this.statusInterval = null;
    this.places = null;
    this.dataLayerLength = 0;
    this.isSwitching = false;
    this.authorized = null;
    this.realOrgId = null;
    this.isChatBusy = null;
    this.uploadInitDone = false;
    //this.showDefaultLeft = (orcode == 839731165445 || orcode == 6) ? false : true;
    //this.showDefaultLeft = (orcode == 833581441007 || orcode == 986800640417) ? true : false;
    //this.localLang = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "en_US" : "zh_CN";//update

    this.desktopBottom = 0;
    this.ppcConsentSent = false;
    this.ppcOffConsent = false;
    var chatHeight = parseInt(this.optionRef.chatHeight, 10)
    if (chatHeight >= 450 && chatHeight < 500) {
        this.desktopBottom = 10;
    } else if (chatHeight > 500 && chatHeight < 550) {
        this.desktopBottom = 20;
    } else if (chatHeight > 550 && chatHeight < 600) {
        this.desktopBottom = 40;
    } else {
        this.desktopBottom = 60;
    }
    //Live Config
    this.isDevMode = false;
    this.apiPrefix = "";
    if (orcode == 205250481355 || orcode == 023258393135) {this.apiPrefix = "cd";}
    if (orcode == 986800640417 || orcode == 190035985401) {this.apiPrefix = "lv";}
    this.chatDomain = (orcode == 6 || orcode == 171649490256) ? "grata.cn" : "guestops.com";
    if (orcode == 205250481355 || orcode == 023258393135) {this.chatDomain = "grata.cn";}

    document.cookie = "grataFirstCoo=testi;expires=3600;path=/;domain=grata.cn;tagname=test;secure;SameSite=None;";
    if (preGetCookie('grataFirstCoo') == undefined) {
        this.chatDomain = "guestops.com";
    }
    document.cookie = "grataFirstCoo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=grata.cn;";

    this.ipstackProtocol = (this.isDevMode === true) ? "http" : "https";
    this.audioSrc = (this.apiPrefix !== "") ? "https://www.grata.co/vendor/js/audio/message.mp3" : "https://www.grata.cn/domestic/js/audio/message.mp3";

    this.previousSize = null;
    this.userInfo = {"duration": 0,
                     "visitedPages": 0,
                     "numberOfVisits": 1,
                     "country": "theCountry",
                     "region": "theRegion",
                     "city": "theCity",
                     "siteLocation": location.href,
                     "browser": navigator.userAgent,
                     "directAccess": "Direct access"};


    navigator.sayswho= (function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    this.osObject = {
        init: function () {
            this.OS = this.searchTheOS(this.dataOS);
            this.browser = this.setBrowserIcon();
        },
        setBrowserIcon: function () {
            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            var isFirefox = typeof InstallTrigger !== 'undefined';
            var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
            var isIE = /*@cc_on!@*/false || !!document.documentMode;
            var isEdge = !isIE && !!window.StyleMedia;
            var isChrome = !!window.chrome && !!window.chrome.webstore;

            if (isChrome) {return "Chrome";} 
            else if (isOpera) {return "Opera";} 
            else if (isFirefox) {return "Firefox";} 
            else if (isSafari) {return "Safari";} 
            else if (isIE) {return "Internet Explorer";} 
            else if (isEdge) {return "Edge";}
            else {return "Android";}
        },
        searchTheOS: function (data) {
            for (var i = 0;i < data.length;i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1) {
                        return data[i].identity;
                    }
                } else if (dataProp) {
                    return data[i].identity;
                }
            }
        },
        dataOS : [
            {string: navigator.platform, subString: 'Win', identity: 'Windows'},
            {string: navigator.platform, subString: 'Mac', identity: 'macOS'},
            {string: navigator.userAgent, subString: 'iPhone', identity: 'iOS'},
            {string: navigator.userAgent, subString: 'iPad', identity: 'iOS'},
            {string: navigator.userAgent, subString: 'iPod', identity: 'iOS'},
            {string: navigator.userAgent, subString: 'Android', identity: 'Android'},
            {string: navigator.platform, subString: 'Linux', identity: 'Linux'}
        ]
    };
    this.osObject.init();

    var self = this;

    /* Testing mobile environment */
    if (mobileAndTabletcheck()) {
        printLog("isMobile", 73);
	addAliAppCss();
        self.isMobileConfig = true;
        parent.window.document.getElementById('iframeChat').style.height = "100%";
        parent.window.document.getElementById('iframeChat').style.width = "100%";
        parent.window.document.getElementById('iframeChat').style.right = "0px";
    } else {
        printLog("isDesktop", 79);
        self.isMobileConfig = false;

        //Mimicate mobile view in desktop (tests)
        /*self.isMobileConfig = true;
        parent.window.document.getElementById('iframeChat').style.height = "100%";
        parent.window.document.getElementById('iframeChat').style.width = "100%";
        parent.window.document.getElementById('iframeChat').style.right = "0px";*/
    }
}
Chatbox.prototype.constructor = Chatbox;

Chatbox.prototype.init = function() {
    var self = this;

    preloadIconImages();

    if (self.optionRef.deviceEnable === 1 || self.optionRef.deviceEnable === "1") {
        if (self.isMobileConfig === true && screen.availWidth > 700) {
            parent.window.document.getElementById('iframeChat').style.width = '0px';
            parent.window.document.getElementById('iframeChat').style.height = '0px';
            $('#window_chat').remove();
            return;
        }
    } else if (self.optionRef.deviceEnable === 2 || self.optionRef.deviceEnable === "2") {
        if (self.isMobileConfig === true) {
            parent.window.document.getElementById('iframeChat').style.width = '0px';
            parent.window.document.getElementById('iframeChat').style.height = '0px';
            $('#window_chat').remove();
            return;
        }
    } else if (self.optionRef.deviceEnable === 3 || self.optionRef.deviceEnable === "3") {
        parent.window.document.getElementById('iframeChat').style.width = '0px';
        parent.window.document.getElementById('iframeChat').style.height = '0px';
        $('#window_chat').remove();
        return;
    }
    self.previousSize = $(window).height();
    $( document ).on( "mobileinit", function() {
        $.mobile.loader.prototype.options.disabled = true;
    });
    setButtonId();
    self.getStatus();
};

function myMakeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

Chatbox.prototype.makeId = function() 
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

Chatbox.prototype.validUrl = function(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(str)) {
    return false;
  } else { 
    return true;
  }
};

Chatbox.prototype.getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return decodeURIComponent(c.substring(name.length, c.length));
    }
    return "";
}


Chatbox.prototype.getStatus = function (fromSwitch) {
    var self = this;
    autoSetPos();
    var buttonId = parent.window.document.getElementsByClassName('grata-chat_launcher_desc_content')[0];
    buttonId = (buttonId !== undefined) ? buttonId.id.split('#').join(',') : "" ;
    //if (this.orgId == 734609717975) {buttonId = "";}
    var accessToken = (getCookie('grataUserToken') !== null) ? getCookie('grataUserToken') : "";//busyStatus
    jQuery.ajax({
        type: 'POST',
        url: 'https://' + this.apiPrefix + 'api.'+this.chatDomain+'/organizationsStatus/'+this.orgId,
	dataType: 'json',
        data: {buttonId: buttonId},
	xhrFields: {'withCredentials': true},
	crossDomain: true,
        beforeSend: function (request) {
	    if (self.chatDomain.indexOf('grata') > -1) {
            } else {
              request.setRequestHeader("GB-Access-Token", accessToken);
            }
        },
        success: function(data) {
	    self.isChatBusy = (data.data[0].orgOnline == "busy") ? true : false;
            self.currentUserWaiting = data.data[0].waiting;
            self.showStatus = data.data[0].webchatStatus;
	    self.orgOnline = (data.data[0].orgOnline == "false") ? false : true;
            self.originalOrgOnline = (data.data[0].orgOnline == "false") ? false : true;
            self.staffOnline = (data.data[0].staffOnline == "false") ? false : true; 
	    self.realOrgId = data.data[0].id;
            if (self.orgOnline === false) {
                self.status = false;
		if (self.optionRef.offlineEmailEnable === "false") {
                    self.status = true;
                }
	    }
	    if (self.optionRef.offlineHide == "chat") {
		self.orgOnline = true;
                self.status = true;
		data.data[0].orgOnline = true;
		$(parent.window.document.getElementById('iframeChat')).show();
            }

            (self.isChatBusy == true) ? showIfClicked() : jQuery("#window_chat").show();
            if (self.optionRef.offlineEmailEnable === "false") {
                if (data.data[0].orgOnline === false) {
                    $('#window_chat').hide();
                    showIfClicked();
                }
            }
	    self.displayWindow(true);
	    if (self.orgId != 839731165445) {$('#window_chat').show();}

	    var doCheckOrg = true;
	  if (self.orgId == 839731165445) {
		doCheckOrg = false;
		$(parent.window.document.getElementById('iframeChat')).hide();} else {
	    if (self.orgOnline === false) {
                if (self.optionRef.offlineEmailEnable === 'false') {
                    if (self.showStatus !== 'clicked' && self.showStatus !== 'inchat' && self.showStatus !== 'waiting') {
                        $(parent.window.document.getElementById('iframeChat')).hide();
			doCheckOrg = false;
                    } else {
                        $(parent.window.document.getElementById('iframeChat')).show();
                        self.status = true;
                    }
                } else {
                    $(parent.window.document.getElementById('iframeChat')).show();
                }
            } else {
                $(parent.window.document.getElementById('iframeChat')).show();
            }
	}
	    buttonChatFlow();
	    if (doCheckOrg !== false) {checkOrgStatus();}
	    if (self.isMobileConfig === true) {
        	if (window !== undefined && window.orientation !== undefined) {
            	    if (window.orientation == 0 || window.orientation == 180) {
                	self.optionRef.fontSize = parseInt(self.optionRef.fontSize, 10);
                	$('#chat-top, .inputGrataName, .inputGrataEmail, .inputGrataPhone, .chat-container, .typing-box, .form-container, .inputGrataMessage, .chat-title').css('font-size', self.optionRef.fontSize + 'px');
                	$('#chat-top').attr('style', $('#chat-top').attr('style') + self.optionRef.fontSize + 'px !important');
                	$('.chat-container').attr('style', $('.chat-container').attr('style') + self.optionRef.fontSize + 'px !important');
                	$('.webChatMenuContainer').css('font-size', (self.optionRef.fontSize + 3) + 'px');
                	$('.historyButton').css('font-size', (self.optionRef.fontSize - 3) + 'px');
                	if (navigator.userAgent.indexOf('iPhone') > -1) {
                    	    $('.typing-box').css('font-size', '16px');
                	}
			if (doCheckOrg !== false) {checkOrgStatus();}
            	    } else {
			if (self.orgId != "839731165445") {
                	    $('.typing-box').blur();
                	    $(parent.window.document.getElementById('iframeChat')).hide();
			}
            	    }
        	}
    	    }
	    setTimeout(function() {
		if (self.orgId != "839731165445") {
                    //(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
            	} else {
                    $(parent.window.document.getElementById('iframeChat')).hide();
           	}
		if (fromSwitch != undefined && fromSwitch == true) {
		  if (self.maximizeWindow == true) {
                    minimizeChat();
                    maximizeChat();
                  } else {
                    minimizeChat();
                  }
		  setClicked();
                  doRegister(self.status);
                  doAddUrl(false);
		  setTimeout(function() {
		    if (self.maximizeWindow == true) {
                      minimizeChat();
                      maximizeChat();
                    } else {
                      minimizeChat();
                    }
                    $('#chat-top').click();
                    $('#chat-top').click();
                  }, 2000);
		  if (self.isMobileConfig === true) {
                    setMobileChatTop(self.status)
                    parent.window.document.getElementById('iframeChat').style.left = "unset";
		    setTimeout(function() {maximizeChat()}, 1000);
                  }
            	}
		var event = (self.osObject.browser.indexOf('Internet') > -1) ? createNewEvent("grataReady") : new Event("grataReady", { "detail": "WebChat is ready" });
            	parent.window.document.dispatchEvent(event);
	    }, 500);
	    if (self.isShowGrata === true) {$(parent.window.document.getElementById('iframeChat')).show();}
	    sendGrataStatus(self.originalOrgOnline, data.data[0]);
        }, 
        fail: function() {
            printLog("getStatus Fail", 146);
            self.displayWindow(false);
	    $(parent.window.document.getElementById('iframeChat')).hide();
        },
        error: function(e) {
            printLog("getStatus Error", 150);
            self.displayWindow(false);
	    $(parent.window.document.getElementById('iframeChat')).hide();
        },
        timeout: 8000
    });
};

Chatbox.prototype.getOnlineStatus = function (toggle) {
    var self = this;
    var accessToken = (getCookie('grataUserToken') !== null) ? getCookie('grataUserToken') : "";
    var buttonId = parent.window.document.getElementsByClassName('grata-chat_launcher_desc_content')[0];
    buttonId = (buttonId !== undefined) ? buttonId.id.split("#").join(",").replace('.', '') : "" ;
    //var status;
    jQuery.ajax({
        type: 'POST',
        url: 'https://' + this.apiPrefix + 'api.'+this.chatDomain+'/organizationsStatus/'+this.orgId,
	dataType: 'json',
        data: {buttonId: buttonId},
	xhrFields: {'withCredentials': true},
        crossDomain: true,
        beforeSend: function (request) {
	     if (self.chatDomain.indexOf('grata') > -1) {
                                } else {
                                  request.setRequestHeader("GB-Access-Token", accessToken);
                                }
        },
        success: function(data) {
	    self.originalOrgOnline = (data.data[0].orgOnline == "false") ? false : true;
            self.showStatus = data.data[0].webchatStatus;//busyStatus
	    if (self.showStatus == "false") {self.isBusyStatusSent = false;}
	    self.isChatBusy = (data.data[0].orgOnline == "busy") ? true : false;
            self.staffOnline = (data.data[0].staffOnline == "false") ? false : true;
	    self.realOrgId = data.data[0].id;
            (self.isMobileConfig === true) ? setTimeout(function () {$('.reconnectTextContainer').hide()}, 1000) : $('.reconnectTextContainer').hide();

            $('#window_chat').show();
            self.status = (data.data[0].staffOnline == true || self.isChatBusy == true) ? true : false;
            if (data.data[0].orgOnline === false) {//[orgOnline]
                self.status = false;
		if (self.optionRef.offlineEmailEnable === "false") {
                    self.status = true;
                }
	    }
	    if (self.optionRef.offlineHide == "chat") {
		self.orgOnline = true;
                self.status = true;
		data.data[0].orgOnline = true;
            }
            if (self.optionRef.offlineEmailEnable === "false") {
                if (data.data[0].orgOnline === false) {
                    $('#window_chat').hide();
                    showIfClicked();
                }
            }
	    buttonChatFlow();
	    self.orgOnline = (data.data[0].orgOnline == false) ? false : true;
            self.currentUserWaiting = data.data[0].waiting;
	    if (checkOrgStatus() !== false) {
		var myToggle = (toggle === "doToggle") ? "" : "";
                toggleContainer(self.status, myToggle);
	    }
	    /* button flow */
	    if (self.isMobileConfig === true) {
                if (window !== undefined && window.orientation !== undefined) {
                    if (window.orientation == 0 || window.orientation == 180) {
                    } else {
			if (self.orgId != "839731165445") {
                            $(parent.window.document.getElementById('iframeChat')).hide();
			}
                    }
                }
            }
	    if (self.isShowGrata === true) {$(parent.window.document.getElementById('iframeChat')).show();}
	    sendGrataStatus(self.originalOrgOnline, data.data[0]);
        },
        fail: function() {
            self.status = false; 
            disableSendButton();
        },
        error: function() {
            self.status = true;
            showReconnectMessage();
            disableSendButton();
            console.log("[Grata WebChat] Seems like your connection isn't reaching API");
        },
        timeout: 8000
    });
    return self.status;
};

function checkPageMove(univers, url) {
    var self = this.grataCb;
    if (self.orgId == "205250481355" || self.orgId == "122125966570"  || self.orgId == "023258393135") {
	autoSetPos(url);
        isSlugEnabled(self.showStatus, univers);
    }
}

function autoSetPos(url) {
    var self = this.grataCb;
    return;
    if (self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
        var theLocation = (url != undefined) ? url : parent.window.location.href;
	if (theLocation.indexOf('/beauty/zh_cn/') > -1) {
            var offsetX = (self.isMobileConfig == true) ? '5px' : '12px';
            var offsetY =  (self.isMobileConfig == true) ? '97px' : '125px';
            if (self.isMobileConfig == false) {
                self.optionRef.buttonBufferX = offsetX;
                self.optionRef.buttonBufferY = offsetY;
            } else {
                self.optionRef.mobileButtonBufferX = offsetX;
                self.optionRef.mobileButtonBufferY = offsetY;
		self.optionRef.mobileButtonSize = "40";
                self.optionRef.mobileButtonIconSize = "40";
		self.iconActualHeight = "40";
		self.iconActualWidth = "40";
            }
        }
    }
}

function toggleChat() {
    var self = this.grataCb;
    (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
}

function minimizeChat() {
    var self = this.grataCb;
    if (self.isMobileConfig === true) {
        if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
                setMobileChatTop(self.status);
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) > 39) {
                setMobileChatTop(self.status);
            }
        }
    } else {
        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
            setDesktopChat(self.status);
        }
    }
}

function maximizeChat() {
    var self = this.grataCb;
    if (self.isMobileConfig === true) {
        if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) < 100) {
                setMobileChatTop(self.status);
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) < 39) {
                setMobileChatTop(self.status);
            }
        }
    } else {
        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) < 100) {
            setDesktopChat(self.status);
        }
    }
}

function sendGrataStatus(status, data) {
    var self = this.grataCb;
    var res = null;
    var userStatus = null;
    if (data.orgOnline == "busy") {
        res = 2;
    } else {
        if (status == true) {
            res = 1;
        } else if (status == false) {
            res = 0;
        }
    }
    if (self.orgId == 986800640417 || self.orgId == 190035985401 || self.orgId == 304708918803) {
        if ($(parent.window.document.getElementById('iframeChat'))[0].style.display == "none") {
            userStatus = 0;
        } else {
            userStatus = 1;
        }

        if (self.showStatus == "clicked" || data.webchatStatus == "clicked") {
            userStatus = 2;
        } else if (data.webchatStatus == "waiting") {
            userStatus = 3;
        } else if (data.webchatStatus == "inchat") {
            userStatus = 4;
        }

        fireEvent('grataStatus', {'status': res, 'userStatus': userStatus});
        return;
    }
    fireEvent('grataStatus', {'status': res});
}

function isSlugEnabled(data, univers) {
    var self = this.grataCb;
    //return;
    if (self.orgId == "205250481355" || self.orgId == "6" || self.orgId == "122125966570" || self.orgId == "023258393135") {
	if (parent.window.dataLayer !== undefined && parent.window.dataLayer[0] !== undefined && parent.window.dataLayer[0].univers !== undefined) {
            var currentUniverse = (univers != undefined) ? univers : parent.window.dataLayer[0].univers;
	    if (currentUniverse == "PCD" || currentUniverse == "ONEDIOR") {
                if (data != "waiting" && data != "inchat" && self.getCookie('grataFirstUserMessage') != "true") {
                    self.hideGrata = true;
                    self.isShowGrata = false;
                    $(parent.window.document.getElementById('iframeChat')).hide();
                    /*$(parent.window.document.getElementById('iframeChat')).empty().remove();*/
                } else {
                    self.hideGrata = false;
                    self.isShowGrata = true;
                    $(parent.window.document.getElementById('iframeChat')).show();
                    /*show chat*/
                }
            } else {
                self.hideGrata = false;
                self.isShowGrata = true;
                $(parent.window.document.getElementById('iframeChat')).show();
                /*Show chat*/
            }
        }
    }
}

function addAliAppCss() {
    var css = '.aliAppForceTop {top: 0 !important;}';
    style = document.createElement('style');

    parent.window.document.getElementsByTagName('head')[0].appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }  
}

function postWelcomeMessage() {
    var self = this.grataCb;
    $('.firstMessage').remove();
    var systemText = (self.originalOrgOnline == true) ? self.welcomeMessageText : self.chatMessageOffline;
    $('.chat-container').html('<div class="firstMessage" style="border-radius:'+self.chatRadius+'px'+';background-color:'+self.systemTextBackground+';"><span class="firstMessageText">' + systemText + '</span></div>');
    setWebchatBusy();
    self.welcomePosted = true;
    jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
}

function addPageToStorage() {
    var date = new Date();
    var content = (localStorage.getItem('browseHistory') !== null && localStorage.getItem('browseHistory') !== "null") ? JSON.parse(localStorage.getItem('browseHistory')) : [];
    content[content.length] = {'url': window.location.href, 'timestamp': date.getTime()};
    localStorage.setItem('browseHistory', JSON.stringify(content));
}

function appendSwitchChat(Chat) {
    var self = this.grataCb;

    if ($('.switchContainer').length > 0) {
        $('.switchContainer').remove();
    }

    var switchText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'We noticed that you were previously chatting with $storeName. To initiate a new chat with another store, we will first end your current chat with $storeName. Do you want to continue?' : 'æä»¬æ³¨æå°æ¨ååå¨ä¸$storeNameå¯¹è¯èå¤©ãå¦å¼å¯ä¸å¶ä»é¨åºéå®é¡¾é®çå¯¹è¯ï¼ç³»ç»å°ä¸­æ­¢æ¨ä¸$storeNameçèå¤©ãæ¯å¦ç¡®è®¤ä¸­æ­¢ï¼';
    var switchNoButtonText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "No" : "å¦";
    var switchYesButtonText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Yes" : "æ¯";

    var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn";
    var storeName = (self.orgId == 6) ? "toto" : self.places[lang][self.clickButtonId.split('#')[0]];
    switchText = switchText.split('$storeName').join(storeName);

    $('#window_chat').append('<div class="switchContainer"></div>');
    var topValue = (navigator.userAgent.indexOf('iPad') == -1) ? "40px" : "60px";
    $('.switchContainer').css('top', topValue);
    if (self.isMobileConfig === true) {
        if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) < 100) {
                setMobileChatTop(self.status);
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) < 39) {
                setMobileChatTop(self.status);
            }
        }
    } else {
        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) < 100) {
            setDesktopChat(self.status);
        }
    }
    $('.switchContainer').show();
    $('.switchContainer').append('<div class="switchTextContainer">\
                                    <span class="switchText">'+switchText+'</span>\
                                </div>\
                                <div class="switchChoiceContainer">\
                                    <div id="switchNo" class="switchButton"><i id="switchNoIcon" class="fal fa-times switchButtonIcon" style="top:4px;"></i><span class="switchTextButton">'+switchNoButtonText+'</span></div>\
                                    <div id="switchYes" class="switchButton"><i id="switchYesIcon" class="fal fa-check switchButtonIcon" style="top:3px;"></i><span class="switchTextButton">'+switchYesButtonText+'</span></div>\
                                </div>');
    $('#switchYesIcon').css({'color': self.optionRef.chatHeaderText});
    $('.switchContainer').css({'background-color': self.optionRef.systemBackground, 'font-size': self.optionRef.fontSize+'px'});
    $('#switchNo, #switchNoIcon, .switchTextContainer').css({'color': self.optionRef.chatHeader});
    $('#switchYes').css({'background-color': self.optionRef.chatHeader, 'color': self.optionRef.chatHeaderText, 'border-radius': self.optionRef.borderRadius + 'px'});
}

function appendConsent(Chat) {
    var self = this.grataCb;
    if ($('.consentContainer').length > 0) {return;}

    var consentText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'To make a store visit booking we will need to collect your contact information. Any personal information you provide is stored according to our <a class="consentLink" href="https://cn.burberry.com/legal-cookies/privacy-policy" target="_blank">privacy policy</a>' : 'ä¸ºäºé¢çº¦å°åºæå¡ï¼æä»¬éè¦æ¶éå¹¶å¨å­æ¨çä¸ªäººèç³»æ¹å¼ãæå³ä¸ªäººä¿¡æ¯çå­å¨åä½¿ç¨ï¼è¯·åèæä»¬ç<a class="consentLink" href="https://cn.burberry.com/legal-cookies/privacy-policy" target="_blank">éç§æ¿ç­</a>';
    var consentNoButtonText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "I do not consent" : "æç»";
    var consentYesButtonText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "I consent" : "åæ";

    $('#window_chat').append('<div class="consentContainer"></div>');
    var topValue = (navigator.userAgent.indexOf('iPad') == -1) ? "40px" : "60px";
    $('.consentContainer').css('top', topValue);
    if (self.isMobileConfig === true) {
        if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
                $('.consentContainer').show();
            } else {
                $('.consentContainer').hide();
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) > 39) {
                $('.consentContainer').show();
            } else {
                $('.consentContainer').hide();
            }
        }
    } else {
        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
            $('.consentContainer').show();
        } else {
            $('.consentContainer').hide();
        }
    }
    $('.consentContainer').append('<div class="consentTextContainer">\
                                    <span class="consentText">'+consentText+'</span>\
                                </div>\
                                <div class="consentChoiceContainer">\
                                    <div id="consentNo" class="consentButton"><i id="consentNoIcon" class="fal fa-times consentButtonIcon" style="top:4px;"></i><span class="consentTextButton">'+consentNoButtonText+'</span></div>\
                                    <div id="consentYes" class="consentButton"><i id="consentYesIcon" class="fal fa-check consentButtonIcon" style="top:3px;"></i><span class="consentTextButton">'+consentYesButtonText+'</span></div>\
                                </div>');
    $('#consentYesIcon').css({'color': self.optionRef.chatHeaderText});
    $('.consentContainer').css({'background-color': self.optionRef.systemBackground, 'font-size': self.optionRef.fontSize+'px'});
    $('#consentNo, #consentNoIcon, .consentTextContainer').css({'color': self.optionRef.chatHeader});
    $('#consentYes').css({'background-color': self.optionRef.chatHeader, 'color': self.optionRef.chatHeaderText, 'border-radius': self.optionRef.borderRadius + 'px'});
    $('#consentNo').click(function() {
        Chat.sendMessage('consent=false', 'request/response');
	grataConsentResponse('grataConsentResponse', {'consentResponse': false});
        $('.consentContainer').remove();
    });
    $('#consentYes').click(function() {
        Chat.sendMessage('consent=true', 'request/response');
	grataConsentResponse('grataConsentResponse', {'consentResponse': true});
        $('.consentContainer').remove();
    });
}

function createNewEvent(eventName) {
    var event;
    if (typeof(Event) === 'function') {
        event = new Event(eventName);
    } else {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}

function setButtonId() {
    var self = this.grataCb;

    if (self.optionRef.buttonId == "." || self.optionRef.buttonId == "#") {self.optionRef.buttonId = "";}
    if (self.accessCode == 839731165445/* || self.accessCode == 6*/) {
	self.optionRef.buttonId = ["#grataStore9124", "#grataStore9030", "#theId", "#grataStore9048", "#grataStore9087", "#grataStore8888", "#grataStore9071", "#grataStore9053", "#grataStore9054", "#grataStore9125", "#grataStore9111", "#grataStore9113", "#grataStore9114", "#grataStore9115", "#grataStore9374"];
    }

    if (typeof self.optionRef.buttonId === 'string' || self.optionRef.buttonId instanceof String) {
        self.clickButtonId = self.optionRef.buttonId;
    } else {
	var myButtonIds = self.optionRef.buttonId;
        for (var i = 0;i <= myButtonIds.length;i++) {
	    if (self.accessCode == 839731165445) {
                self.clickButtonId = $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id;
                return;
            } else {
            	if ($(parent.window.document).find(myButtonIds[i]).length > 0) {
                    self.clickButtonId = myButtonIds[i];
                    return;
                }
	    }
	    self.clickButtonId = false;
        }
    }
}

function checkUnderlayerFlow(isRemove, height) {
    var self = this.grataCb;
    /*return;
    if (navigator.userAgent.indexOf('iPad') > -1) {
        if (isRemove === false) {
            if ($(parent.window.document.getElementsByClassName('iPadCloseContainer')).length >= 1) {return;}
            $(parent.window.document).find('body').append('<div id="iPadClose" class="iPadCloseContainer" style="position:fixed;top:0;left:0;width:100%;height:100vh;background-color:lightgray;font-family:'+self.optionRef.font+';z-index:1;">\
                                                                <div class="iPadCloseContainer" style="position:relative;float:left;width:100%;height:'+height+';background-color:transparent;"></div>\
                                                                <div class="iPadCloseContainer" style="position:relative;float:left;width:100%;text-align:center;font-size:24px;margin-top:10%;">Tap the chat top to minimize the window</div>\
                                                            </div>');
            disableScrollDefinite('iPadClose');
        } else {
            $(parent.window.document.getElementsByClassName('iPadCloseContainer')).remove();
        }
    }*/
}

function buttonChatFlow() {
    var self = this.grataCb;
    var theEl = (self.accessCode == 839731165445) ? '.grata-chat_launcher_desc_content' : self.clickButtonId;
    if (theEl === "#" || theEl === ".") {theEl = "";}
    if ($(parent.window.document).find(theEl).length > 0) {
        if (self.fakeClick !== true)
            $(parent.window.document.getElementById('iframeChat')).hide();
    if (self.showStatus !== "false" && self.showStatus !== undefined)
            $(parent.window.document.getElementById('iframeChat')).show();

    	$(parent.window.document).find(theEl).unbind('click');
        $(parent.window.document).find(theEl).on('click tap touch', function() {
            self.fakeClick = true;
            self.hideGrata = false;
	    minimizeChat();
            $('#chat-top').click();
            $('#window_chat').show();
            $(parent.window.document.getElementById('iframeChat')).show();
	    if (navigator.userAgent.indexOf("Firefox") > -1) {
		if (self.isRegisterDone == true)
		  return;
	      doRegister(self.status);
	      setTimeout(function() {
		self.isRegisterDone = true;
	        $('#chat-top').click();
	      }, 200);
	    }
        });
    } else {
        if (theEl === "") {
	    if (self.orgOnline == false && self.optionRef.offlineHide == "true") {} else {
                $(parent.window.document.getElementById('iframeChat')).show();   
            }
        } else {
            if (self.showStatus !== "false" && self.showStatus !== undefined) {
                $(parent.window.document.getElementById('iframeChat')).show(); 
            } else {
                $(parent.window.document.getElementById('iframeChat')).hide(); 
            }
        }
    }
    setWebchatBusy();
}

function checkOrgStatus() {//Status update
    var self = this.grataCb;
    if (self.hideGrata === true) {
        $(parent.window.document.getElementById('iframeChat')).hide();
        return false;
    }
    if (self.originalOrgOnline === false && self.optionRef.offlineEmailEnable === "true") {
    	$(parent.window.document.getElementById('iframeChat')).show();
	$('.chat-wrapper').hide();
	addPPC(self.chatRef);
        return;
    }
    /*if (self.optionRef.onlineHide == "true" && self.orgOnline === true) {
        $(parent.window.document.getElementById('iframeChat')).hide();
        return false;
    }*/
    /*if (self.staffOnline === 0) {
        //if (self.showStatus !== "clicked" && self.showStatus !== "inchat") {
            disableWebchat();
            setWebchatOffline();
        //}
    } else if (self.orgOnline === false && self.staffOnline > 0) {
        setWebchatOffline();
    } else {
        enableWebchat();
    }*/
    if (self.staffOnline == false) {
	if (self.showStatus !== "clicked" && self.showStatus !== "inchat" && self.showStatus !== "waiting") {
            //$(parent.window.document.getElementById('iframeChat')).hide();
            //return false;
            if (self.optionRef.busyHide == "0") {
		setTimeout(function() {$(parent.window.document.getElementById('iframeChat')).show();}, 500);
                return true;
            } else {
                $(parent.window.document.getElementById('iframeChat')).hide();
                return false;
            }
            //disableWebchat();
            //            //setWebchatOffline();
            }
        /*if (self.showStatus !== "clicked" && self.showStatus !== "inchat") {
            disableWebchat();
            setWebchatOffline();
        }*/
    } else if (/*self.orgOnline === false*/ self.originalOrgOnline == false/* && self.staffOnline > 0*/) {
        /*setWebchatOffline();
        setTimeout(function() {$(parent.window.document.getElementById('iframeChat')).show();}, 500);*/
	if (self.optionRef.offlineHide === "true") {
            if (self.showStatus === "clicked" && self.showStatus === "inchat" && self.showStatus === "waiting") {
                setWebchatOffline();
		setTimeout(function() {$(parent.window.document.getElementById('iframeChat')).show();}, 500);
                return true;
            } else {
                $(parent.window.document.getElementById('iframeChat')).hide();
                return false;
            }
        } else {
            setWebchatOffline();
	    setTimeout(function() {$(parent.window.document.getElementById('iframeChat')).show();}, 500);
            return true;
        }
    } else if (self.isChatBusy == true) {
	if (self.optionRef.busyHide === "1") {
            if (self.showStatus !== "clicked" && self.showStatus !== "inchat" && self.showStatus !== "waiting") {
                $(parent.window.document.getElementById('iframeChat')).hide();
                return false;
            }
        } else {
            setWebchatBusy();
        }
        /*if (self.showStatus !== "clicked" && self.showStatus !== "inchat" && self.showStatus !== "waiting") {
            $(parent.window.document.getElementById('iframeChat')).hide();
	    return false;
        }*/
    } else {
	/*if (self.clickButtonId === "#" || self.clickButtonId === ".") {self.clickButtonId = "";}
    	if ($(parent.window.document).find(self.clickButtonId).length > 0) {
    		if (self.showStatus === "false" || self.showStatus === undefined) {
    			$(parent.window.document.getElementById('iframeChat')).hide();
    		} else {
    			enableWebchat();
    			$(parent.window.document.getElementById('iframeChat')).show();
    		}
    	} else {
	    if (self.clickButtonId !== "" && self.showStatus === "false" || self.showStatus === undefined) {
                $(parent.window.document.getElementById('iframeChat')).hide();
            } else {
		enableWebchat();
                $(parent.window.document.getElementById('iframeChat')).show();
            }
    	}*/
        enableWebchat();
	$('.form-container').hide();
	if (self.originalOrgOnline == false && self.optionRef.offlineHide == "chat") {
            setWebchatOffline();
        }
	setTimeout(function() {$(parent.window.document.getElementById('iframeChat')).show();}, 500);
	//return false;
    }
    return true;
}

function enableWebchat() {
    var self = this.grataCb;
    var originalText = $(".typing-box").val();
    var message = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯"; 
    var typingText = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? "å³æ¶äºå¨çæå¡æ¶é´å·²ç»æ" : "Agents are currently unavailable";
    if (originalText !== typingText) {
        message = originalText;
    }
    $(".typing-box").prop('disabled', false).val(message);

    var onlineHeader = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? decodeURIComponent(self.optionRef.chatHeaderOnlineCn) : decode(self.optionRef.chatHeaderOnlineEn);
    //var onlineMessage = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? decodeURIComponent(self.optionRef.chatMessageOnlineCn) : decode(self.optionRef.chatMessageOnlineEn);
    var onlineMessage = self.welcomeMessageText;
    $('.firstMessage').html(onlineMessage.split("\n").join("<br>"));
    if (self.showStatus !== "inchat") {
        if ($('.routingContainer').length == 0) {
            $('.chat-title').text(onlineHeader);
        } else {
	    //var chatTitle = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "How may we help you?" : "è¯·éæ©å¨è¯¢é®é¢" ;
            //$('.chat-title').text(chatTitle);
        }
    }
     //$('.chat-wrapper').show();
    /*if (self.connected !== true && self.getCookie("grataUserId") != "") {
	//self.connected = true;
        self.initSockets();
    }*/
}

function disableWebchat() {
    var self = this.grataCb;

    var typingText = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? "å³æ¶äºå¨çæå¡æ¶é´å·²ç»æ" : "Agents are currently unavailable";
    $(".typing-box").prop('disabled', true).val(typingText);
    $(".sendButton").unbind('click hover');
    disableSendButton();
    if (self.chatRef !== null && self.chatRef !== undefined) {
        self.webchatDisabled = true;
        self.chatRef.disconnect();
        document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        if (self.chatRef.socket !== null)
            self.chatRef.socket.close();
    }
}

function setWebchatOffline() {
    var self = this.grataCb;

    var offlineHeader = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? self.optionRef.chatHeaderOfflineCn : self.optionRef.chatHeaderOfflineEn;
    var offlineMessage = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? self.optionRef.chatMessageOfflineCn : self.optionRef.chatMessageOfflineEn;
    $('.firstMessage').html(offlineMessage.split("\n").join("<br/>"));
    //$('.chat-title').text(offlineHeader);
    if ($('.routingContainer').length == 0) {
        $('.chat-title').text(offlineHeader);
    }
}

function setWebchatBusy() {
    var self = this.grataCb;
    if (self.isChatBusy == true && self.optionRef.busyHide === "0") {
        var busyText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.chatMessageBusyEn : self.optionRef.chatMessageBusyCn;
        var busyHeader = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.chatHeaderBusyEn : self.optionRef.chatHeaderBusyCn;
        $('.firstMessage').html(busyText.split("\n").join("<br/>"));
        //$('.chat-title').text(busyHeader);
        if ($('.routingContainer').length == 0) {
            $('.chat-title').text(busyHeader);
        }
    } else if (self.isChatBusy == true && self.optionRef.busyHide === "1") {
	 if (self.showStatus !== undefined) {
            if (self.showStatus == "waiting" || self.showStatus == "inchat" || self.showStatus == "clicked" || self.showStatus == "autoreply") {
                return;
            } else {
                $(parent.window.document.getElementById('iframeChat')).hide();
            }
        } else {
            $(parent.window.document.getElementById('iframeChat')).hide();
        }
    }
}

function decode(string) {
        var div = document.createElement("div");
        div.innerHTML = string; 
        return typeof div.textContent !== 'undefined' ? div.textContent : div.innerText;
    }

function checkAgentData(htmlObj, dataObj) {
    if (dataObj.headers.agentAvatar != undefined) {
        $('#message_' + dataObj.id).find('.chatTopPartImage').css('background-image', 'url("'+dataObj.headers.agentAvatar+'")');
        $('#message_' + dataObj.id).find('.chatTopPartImage').css({'background-size': 'contain'});
        $('#message_' + dataObj.id).find('.agentNameContainer .chatboxinfo').text(dataObj.headers.agentName);
        $('#message_' + dataObj.id).find('.placeNameContainer .chatboxinfo').text(dataObj.headers.agentPlace);
    }
}

Chatbox.prototype.setWebChatOptions = function () {//Update
    if (this.orgId == "839731165445") {
        $('.chat-container').addClass('noShadow');
    }
    if (this.isMobileConfig !== true) {
        //Chat width
        $(parent.window.document.getElementById('iframeChat')).css('width', this.chatWidth + 'px');
        $('#chat-top').css({'border-top-right-radius': this.chatRadius + 'px', 'border-top-left-radius': this.chatRadius + 'px'});
    } else {
	var self = this;
        $( window ).on( "orientationchange", function( event ) {
	    //$('body').append('Position : ' + window.screen.orientation.type);
	    //alert('Position : ' + window.orientation);
	    if (/*event.orientation === "portrait"*/window.orientation == 0 || window.orientation == 180) {
		//$('body').append('Portrait');
		//$('.typing-box').focus();
		self.optionRef.fontSize = parseInt(self.optionRef.fontSize, 10);
                $('#chat-top, .inputGrataName, .inputGrataEmail, .inputGrataPhone, .chat-container, .typing-box, .form-container, .inputGrataMessage, .chat-title').css('font-size', self.optionRef.fontSize + 'px');
                $('#chat-top').attr('style', $('#chat-top').attr('style') + self.optionRef.fontSize + 'px !important');
                $('.chat-container').attr('style', $('.chat-container').attr('style') + self.optionRef.fontSize + 'px !important');
                $('.webChatMenuContainer').css('font-size', (self.optionRef.fontSize + 3) + 'px');
                $('.historyButton').css('font-size', (self.optionRef.fontSize - 3) + 'px');
                if (navigator.userAgent.indexOf('iPhone') > -1  || navigator.userAgent.indexOf('iPad') > -1) {//iPadTest
                    $('.typing-box').css('font-size', '16px');
                }
		checkOrgStatus();
		//self.setWebChatOptions();
		//$('.chat-container').append($('.firstMessage').css('font-size'));
                //$(parent.window.document.getElementById('iframeChat')).show();
            } else {
		if (self.orgId != "839731165445") {
		    if (navigator.userAgent.indexOf('iPhone') > -1  || navigator.userAgent.indexOf('iPad') > -1) {//iPadTest
            	    	$(parent.window.document.getElementsByClassName('iPadCloseContainer')).remove();
        	    }
		    //$('body').append('Landscape');
		    $('.typing-box').blur().focusout();
                    $(parent.window.document.getElementById('iframeChat')).hide();
		}
            }
        });
    }
    $(parent.window.document.getElementById('iframeChat')).css('z-index', this.optionRef.zIndex);//this.optionRef.zIndex);
    //Font
    $('.inputGrataName, .inputGrataEmail, .inputGrataPhone, .chat-container, .typing-box, .chat-title, .form-container, .webChatMenuContainer, .sendButtonText, .confirmQuitContainer, .inputGrataMessage').css({'font-family': this.chatFont, 'letter-spacing': this.optionRef.charSpacing, 'font-weight': this.optionRef.fontWeight});
    //Font-size
    this.optionRef.fontSize = parseInt(this.optionRef.fontSize, 10);
    $('#chat-top, .inputGrataName, .inputGrataEmail, .inputGrataPhone, .chat-container, .typing-box, .form-container, .inputGrataMessage, .chat-title').css('font-size', this.optionRef.fontSize + 'px', 'important');
    $('#chat-top').attr('style', $('#chat-top').attr('style') + this.optionRef.fontSize + 'px !important');
    $('.chat-container').attr('style', $('.chat-container').attr('style') + this.optionRef.fontSize + 'px !important');
    //$('.webChatMenuContainer').css('font-size', (this.optionRef.fontSize + 3) + 'px');
    //$('.sendButton').css('font-size', (this.optionRef.fontSize - 1) + 'px');
    $('.historyButton').css('font-size', (this.optionRef.fontSize - 3) + 'px');
    if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {//iPadTest
         $('.typing-box').css('font-size', '16px', 'important');
    }
    //Radius
    $('#btnSender, .firstMessage, .sendButton, .inputGrataName, .inputGrataEmail, .inputGrataPhone, .inputGrataMessage').css('border-radius', this.chatRadius + 'px');
    //Username
    if (this.optionRef.userNameEn !== "" || this.optionRef.userNameCn !== "") {
        if (this.localLang.indexOf('CN') > -1 || this.localLang.indexOf('zh') > -1) {
            if (this.optionRef.userNameCn !== "") {this.userName = this.optionRef.userNameCn;}/* else {this.userName = this.optionRef.userNameEn;}*/
        } else {
            if (this.optionRef.userNameEn !== "") {this.userName = this.optionRef.userNameEn;}/* else {this.userName = this.optionRef.userNameCn;}*/
        }
    }
    //Agentname
    if (this.optionRef.useAgentName === "false") {
        if (this.optionRef.agentNameEn !== "" || this.optionRef.agentNameCn !== "") {
            if (this.localLang.indexOf('CN') > -1 || this.localLang.indexOf('zh') > -1) {
                if (this.optionRef.agentNameCn !== "") {this.agentName = this.optionRef.agentNameCn;} else {this.agentName = this.optionRef.agentNameEn;}
            } else {
                if (this.optionRef.agentNameEn !== "") {this.agentName = this.optionRef.agentNameEn;} else {this.agentName = this.optionRef.agentNameCn;}
            }
        }
    }
    //Chat background
    $('.chat-container').css('background-color', this.optionRef.chatBackground);
    //Correct cookie language
    //if (getCookie('lastagent') !== "") {
    if (this.showStatus === "inchat") {
        var agentName = (this.agentName !== undefined && this.agentName !== null && this.agentName !== "") ? this.agentName : getCookie('lastagent');
        setCookie('lastagent', agentName, 1);
        //if (self.getCookie('lastagent') !== "" && self.getCookie('lastagent') !== "undefined" && self.getCookie('lastagent') !== undefined && self.getCookie('lastagent') !== null && self.getCookie('lastagent') !== "null") {//To upload
        //var headerText = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "Now chatting with " + agentName : "ä¸" + agentName + "èå¤©ä¸­";
        //setCookie('inConv', headerText, 1);
        //$('.chat-title').text(headerText);
        //}
    }

    if (this.optionRef.audioEnable === "false") {
        $('.chatTopArrowIcon').removeClass('fa fa-caret-up').addClass('fal fa-minus');
    }

    //this.optionRef.buttonIcon = decode(this.optionRef.buttonIcon);

    if (this.isMobileConfig === false && this.optionRef.buttonDisplay === "0") {
        //this.optionRef.buttonIcon = decode(this.optionRef.buttonIcon);
        setDesktopButtonHeader();
    }
    checkOrgStatus();//Status update
};

function agentLeftChatFlow(Chat) {
    var self = this.grataCb;
    self.connected = false;
    if (Chat.socket !== null)
        Chat.socket.close();
    Chat.stop(); 
    console.log("[Grata WebChat] : Closing connection.");
    $('.connecting').removeClass('online');
    $('.connecting').addClass('offline');
    $('.usertyping').html('');
    $('.chat-wrapper').wrapAll('blur-all');
    $('#chat-title').html(self.chatMessageOnline);
    if (self.getCookie('lastagent') != "") {
        var rejoinStyle = (self.isMobileConfig === true) ? 'style="margin-bottom:60px;"' : 'style="margin-bottom:10px;"';
        if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {rejoinStyle = 'style="margin-bottom:80px;"';}
        var agentName = (self.agentName !== "" && self.agentName !== undefined && self.agentName !== null) ? self.agentName : self.getCookie('lastagent');
        if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1)
            htmlObj = '<div class="statusMessage"><div class="statusText">'+agentName+ ' has left the chat</div></div>';
        else
            htmlObj = '<div class="statusMessage"><div class="statusText">'+agentName+ 'å·²ç»ç¦»å¼æ­¤å¯¹è¯</div></div>';
        jQuery('.chat-container').append(htmlObj);
	jQuery('.statusMessage').css('margin-bottom', self.desktopBottom+'px');
        if (self.staffOnline == true) {
            if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1)
                htmlObj = '<div class="statusMessage"><div class="statusText">Send a message to restart a chat.</div></div>';
            else
                htmlObj = '<div class="statusMessage"><div class="statusText" style="margin-bottom: 20px;">å¦ç¨åæå¶ä»å¨è¯¢ï¼è¯·åæ¬¡ä¸æä»¬èç³»ã</div></div>';
	    jQuery('.statusMessage').css('margin-bottom', '0px');
            jQuery('.chat-container').append(htmlObj);
            jQuery(jQuery('.statusMessage')[jQuery('.statusMessage').length-1]).css('margin-bottom', self.desktopBottom+'px');
        }
        checkOrgStatus();
        $('.messageTo, .messageFrom').css('margin-bottom', '0px');
        Chat.sendMessage(htmlObj, 'text/plain', true);
        jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight); 
        (self.status === true || self.status === null) ? jQuery('.chat-title').text(self.chatMessageOnline) : jQuery('.chat-title').text(self.chatMessageOffline);
        document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "grataGreetingDate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function doAddUrl(sendToHistory, Chat, sendObj) {
    var self = this.grataCb;
    if (sendToHistory == true && self.historyUrlSent == false) {
	self.historyUrlSent = true;
        jQuery.ajax({
            type: 'POST',
            url: 'https://'+ self.apiPrefix +'api.'+self.chatDomain+'/connect-api/pageview/addUrl.jsn',
            data: { url: window.location.href,
                            addToHistory: true},
            dataType: 'json',
	    xhrFields: {'withCredentials': true},
            crossDomain: true,
	    beforeSend: function (request) {
			    if (self.chatDomain.indexOf('grata') > -1) {
                		//request.setRequestHeader("withCredentials", true);
                		//request.setRequestHeader("crossDomain", true);
            		    } else {
                		request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
            		    }
                            //request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                        },
            success: function(data) {
		//Chat.socket.send(JSON.stringify(sendObj));
		if (Chat != undefined && Chat.socket != undefined && Chat != null && Chat.socket != null) {
                    Chat.socket.send(JSON.stringify(sendObj));
                }
                self.historyUrlSent = true;
            }
        });
    }
    if (self.isRegisterDone === true && self.addUrlSent === false) {
        if (self.addPageViewDone !== true) {
            jQuery.ajax({
                type: 'POST',
                url: 'https://'+ self.apiPrefix +'api.'+self.chatDomain+'/connect-api/pageview/addUrl.jsn',
		xhrFields: {'withCredentials': true},
        	crossDomain: true,
                data: {access_token: getCookie('grataUserToken'), 
                                url: window.location.href,
				addToHistory: false},
		beforeSend: function (request) {
				if (self.chatDomain.indexOf('grata') > -1) {
                		  //request.setRequestHeader("withCredentials", true);
                		  //request.setRequestHeader("crossDomain", true);
            			} else {
                		  request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
            			}
                            //request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                        },
                dataType: 'json',
                success: function(data) {
                    self.addUrlSent = true;
                    /* URL Added */
                }
            });
        }
    }
}

function doRegister(status) {
    var self = this.grataCb;
    /*if (self.isRegisterDone === true && self.addUrlSent === false) {
        if (self.addPageViewDone !== true) {
            jQuery.ajax({
                type: 'POST',
                url: 'https://'+ self.apiPrefix +'api.'+self.chatDomain+'/connect-api/pageview/addUrl.jsn?access_token='+getCookie('grataUserToken'),
                data: {access_token: getCookie('grataUserToken'), 
                                url: window.location.href},
                dataType: 'json',
                success: function(data) {
                    self.addUrlSent = true;
                    // URL Added
                }
            });
        }
    }*/
    if (self.isRegisterDone === true) {
	if (status == true && self.connected == false) {
          if (self.showStatus === "clicked" || self.showStatus === "inchat" || self.showStatus === "waiting"/* || $(parent.window.document).find(self.optionRef.buttonId) !== null*/) {
            self.initSockets();
          }
        }
	return;
    }
    if(status == true || status == null) {
	    grataButtonClicked();
            var email = myMakeId()+'@noemail.com';
            var password = 'nopassword';
            var nick = 'WebChat User';
            var from = 'webplugin';
	    var cookie = (self.chatDomain.indexOf('grata') > -1) ? self.getCookie("grataUserId") : self.getCookie("grataUserToken");
            if(cookie == "") {
                var idData = (typeof self.clickButtonId === 'string' || self.clickButtonId instanceof String) ? self.clickButtonId.replace('#', '').replace('.', '') : "";
                jQuery.ajax({
                    type: 'POST',
                    url: 'https://' + this.grataCb.apiPrefix + 'api.'+self.chatDomain+'/connect-api/user/register',
                    data: {email: email, password: password, nick: nick, from: from, buttonId: idData, originOrg: self.accessCode},
                    dataType: 'json',
		    xhrFields: {'withCredentials': true},
        	    crossDomain: true,
                    beforeSend: function (request) {
			if (self.chatDomain.indexOf('grata') > -1) {
                          //request.setRequestHeader("withCredentials", true);
                          //request.setRequestHeader("crossDomain", true);
                        } else {
                          request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                        }
                        var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn"; 
                        request.setRequestHeader("GB-Lang", lang);
                    },
                    success: function(data) {
		    self.isRegisterDone = true;
		    if (self.chatDomain.indexOf('grata') > -1) {

                        } else {
                            setCookie('grataUserToken', data.data.accessToken, 1);
                        }
	    setCookie('grataUserId', data.data.id, 1);
                        if (self.showStatus === "clicked" || self.showStatus === "inchat" || self.showStatus === "waiting")
                            self.initSockets();

            var date = new Date().getTime();
                        jQuery.ajax({
                            type: 'POST',
                            url: 'https://'+ self.apiPrefix +'api.'+self.chatDomain+'/connect-api/pageview/addPageView.jsn',
                            data: {access_token: getCookie('grataUserToken'), 
                                    callback: self.accessCode, 
                                    duration: 0, 
                                    visitedPages: 1, 
                                    numberOfVisits: 1, 
                                    country: 'notDone', 
                                    city: 'notDone', 
                                    region: 'notDone', 
                                    siteLocation: 'notDone', 
                                    browser: navigator.userAgent, 
                                    directAccess: 'xxx', 
                                    url: JSON.stringify(localStorage.getItem('browseHistory')),//window.location.href,
                    date: date},
				    xhrFields: {'withCredentials': true},
        crossDomain: true,
				beforeSend: function (request) {
				  if (self.chatDomain.indexOf('grata') > -1) {
                                    //request.setRequestHeader("withCredentials", true);
                                    //request.setRequestHeader("crossDomain", true);
                                  } else {
                                    request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                                  }
                            	  //request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                        	},
                            dataType: 'json',
                            success: function(data) {
				localStorage.setItem('browseHistory', null);
				self.addPageViewDone = true;
				self.historyUrlSent = true;
                                /*Data saved*/
                            }
                        });
                    }
                });
            } else if(status == true && self.historyUrlSent != true){
                    jQuery.ajax({
                        type: 'POST',
                        url: 'https://'+ self.apiPrefix +'api.'+self.chatDomain+'/connect-api/pageview/addUrl.jsn',
                        data: {url: window.location.href},
			xhrFields: {'withCredentials': true},
        			crossDomain: true,
			beforeSend: function (request) {
			  	if (self.chatDomain.indexOf('grata') > -1) {
                                  //request.setRequestHeader("withCredentials", true);
                                  //request.setRequestHeader("crossDomain", true);
                                } else {
                                  request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                                }
                            //request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                        },
                        dataType: 'json',
                        success: function(data) {
			    self.historyUrlSent = true;
                            /* URL Added */
                        }
                    });
                if (self.showStatus === "clicked" || self.showStatus === "inchat" || self.showStatus === "waiting"/* || $(parent.window.document).find(self.optionRef.buttonId) !== null*/)
                    self.initSockets();
            } else {
            	if (status == true && self.connected == false) {
            	  if (self.showStatus === "clicked" || self.showStatus === "inchat" || self.showStatus === "waiting"/* || $(parent.window.document).find(self.optionRef.buttonId) !== null*/)
                    self.initSockets();
            	}
            }
        }
}

Chatbox.prototype.displayWindow = function (status) {
    var template;
    var self = this;

    //doAddUrl(false);
	var locDone = getCookie('grataLocDone');
    if(locDone == "true") {
		self.initSockets();
		//Chat.initialize(true);
                var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn";
                    //Chat.connect('wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang);
                    self.connected = true;
                //return;
            }

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
            return re.test(email);
        }

	    var messageText = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? decode(this.chatMessageOfflineMessageEn) : decodeURIComponent(this.chatMessageOfflineMessageCn);
            var yourName = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "Your name" : "æ¨çå§å";
            var yourAddress = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "Email Address" : "çµå­é®ç®±";
            var message = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";//è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯
            var sendText = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "Send" : "åé";
            var loadingText = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "One moment, please..." : "è¯·ç¨ç­...";
            var viewHistory = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "View history" : "æ¥çèå¤©åå²";
	    var yourPhone = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? "Phone number" : "çµè¯å·ç ";

	        var historyButton = "";
            if (localStorage['grataHistory'] !== undefined && localStorage['grataHistory'] !== null && localStorage['grataHistory'] !== "") {
                historyButton = '<div class="historyButton unselectable">'+ viewHistory +'</div>';
            }

	    this.chatMessageOnline = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? decode(this.optionRef.chatHeaderOnlineEn) : decode(decodeURIComponent(this.optionRef.chatHeaderOnlineCn));
            this.chatMessageOffline = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? decode(this.optionRef.chatHeaderOfflineEn) : decode(decodeURIComponent(this.optionRef.chatHeaderOfflineCn));

            this.chatHeader = (status == true) ? this.chatMessageOnline : this.chatMessageOffline;
            if (this.chatHeader === undefined) {this.chatHeader = "ð¬";}

	    var script = document.createElement("script");
	   //if (navigator.userAgent.indexOf('EdgA') > -1) {
	    script.innerHTML = (navigator.userAgent.indexOf('EdgA') > -1) ? "function performClick(elemId) {}" : 'function performClick(elemId) {var elem = document.getElementById(elemId);if(elem && document.createEvent) {var evt = document.createEvent("MouseEvents");evt.initEvent("click", true, false);elem.dispatchEvent(evt);}return false;}';
	   //}
	   //script.innerHTML = 'function performClick(elemId) {var elem = document.getElementById(elemId);if(elem && document.createEvent) {var evt = document.createEvent("MouseEvents");evt.initEvent("click", true, false);elem.dispatchEvent(evt);}return false;}';
	    document.head.appendChild(script);


            template = '<input id="fileUploader" class="file" type="file" name="myFile" style="width: 0.1px;height: 0.1px;opacity: 0;overflow: hidden;position: absolute;z-index: -1;" accept="image/*"/><div class="uploadImage"><i class="fa fa-spinner fa-spin"></i></div><div id="chat-top" class="unselectable" style="outline:none !important;opacity:1 !important;background-color:'+this.colorHeader+'"><div id="dialog"></div><div class="chat-title" style="color:'+this.colorHeaderText+'">'+this.chatHeader+'</div><div><i class="fa fa-caret-up chatTopArrowIcon"></i><i class="fa fa-times chatTopCloseIcon"></i></div><br clear="all"/></div><div class="chat-wrapper"><div style="display: none;" class="status-bar"></div><div id="rewrapDiv" class="testRewrapDiv"><div id="chatContainerId" style="background-color: '+this.colorBackground+'" class="chat-container">' + historyButton + '</div></div><div class="reconnectTextContainer"><span class="reconnectText"> </span><span class="reconnectClickTarget unselectable"> </span></div><div id="typingID" class="inputbox"><a class="watermark" target="_blank" href="https://www.grata.co">Powered by Grata.co</a><div><textarea id="typingID" class="typing-box" onfocus="" spellcheck="false"></textarea><div class="iconsPlacer"><i class="fa fa-spinner fa-spin uploadIconSpin" id="uploadingImage"></i><i class="fa fa-image uploadIconStyle" onclick="performClick(\'fileUploader\');"></i></div> <div class="sendButton unselectable" onclick="void(0)"><span class="sendButtonText">'+sendText+'</span></div> </div></div></div><div style="background-color: '+this.colorBackground+'" class="form-container"><div class="formMessageTextHolder">' + messageText + '</div><div id="grataForm"><div class="inputNameError"><span class="inputNameErrorText"></span></div><input value="' + yourName + '" required="required" class="inputGrataName"></input><div class="inputEmailError"><span class="inputEmailErrorText"></span></div><input value="' + yourAddress + '" required="required" class="inputGrataEmail"></input><div class="inputPhoneError"><span class="inputPhoneErrorText"></span></div><input value="' + yourPhone + '" required="required" class="inputGrataPhone"></input><div class="inputMessageError"><span class="inputMessageErrorText"></span></div><textarea required="required" class="inputGrataMessage">' + message + '</textarea><div class="mailStatus"></div></div><div class="reconnectFormTextContainer"><span class="reconnectFormText"> </span><span class="reconnectFormClickTarget unselectable"> </span></div><button id="btnSender" class="unselectable">' + sendText + '</button></div><div style="background-color: '+this.colorBackground+'" class="loading-container"><div class="loadingContainer"><div class="loadingTextContainer"><span class="loadingText">' + loadingText + '</span></div><i class="fa fa-spinner loadingIcon fa-spin"></i></div></div>';

            if ($('body')[1] !== undefined)
                $('body')[0].remove();
            $('#window_chat').remove();
            $('body').empty();
            jQuery(" <div /> ").attr("id", "window_chat")
                 .addClass("chatbox")
                 //.addClass("hidden")
                 .html(template)
                 .appendTo('body');
            //var fixed = document.getElementById('rewrapDiv');
            /*fixed.addEventListener('touchmove', function(e) {
                console.log(e);
                //if (e.currentTarget.id === "rewrapDiv")
                //e.preventDefault();
            }, false);*/

	    /*if (self.orgId == "6") {
                $('.chat-container').append(navigator.userAgent);
           }*/
	    addPageToStorage();

	    //document.body.appendChild(script);
            $('.uploadIconSpin').hide();
            if (this.optionRef.userImageEnable === "false"/* || this.isMobileConfig === true*/) {
                $('.uploadIconStyle').remove();
            }

	    if (this.isMobileConfig === true) {
                if (this.orgId == "464667121065" || this.orgId == "504578347001") {
                    $('.uploadIconStyle').remove();
                }
            }

	    function onScrollStopped(domElement, callback, timeout/* = 250*/) {
  		domElement.addEventListener('scroll', /*() =>*/ function() {
		    if (navigator.userAgent.indexOf('iPhone') == -1) {return;}
		    if (navigator.userAgent.indexOf('AliApp') == -1) {return;}
  		    clearTimeout(callback.timeout);
    		    callback.timeout = setTimeout(callback, timeout);
  	    	});
	    }

	    onScrollStopped(parent.window.document, /*() =>*/function() {
		if (navigator.userAgent.indexOf('iPhone') == -1) {return;}
		if (navigator.userAgent.indexOf('AliApp') == -1) {return;}
		if (checkOrgStatus() !== false) {toggleContainer(self.status);}
	    }, 250);

	    var callbackFunc = function() {
                if (navigator.userAgent.indexOf('iPhone') > -1) {
		    //if (navigator.userAgent.indexOf('AliApp') == -1) {return;}
                    setTimeout(function() {if (checkOrgStatus() !== false) {toggleContainer(self.status);};}, 500);
                }
	    }
	    parent.window.document.addEventListener('touchend', callbackFunc);
	    parent.window.document.addEventListener('touch', callbackFunc);
	    parent.window.document.addEventListener('touchstart', callbackFunc);

	   /* parent.window.document.addEventListener('touchend touchstart touch', function() {
	    	return;
	    //$(parent.window.document).bind('dragstop', function() {
		if (self.accessCode != 6) {return;}
		if (navigator.userAgent.indexOf('iPhone') > -1) {
            	    $(parent.document.body).append("Intouch end");
		    $(parent.document.body).append(' /// ' + navigator.userAgent);
            	    setTimeout(function() {if (checkOrgStatus() !== false) {toggleContainer(true);}}, 500);
        	}
        	$('#window_chat').show();
		$(parent.document.body).find('#iframeChat').parent().css({'display': 'block', 'visibility': 'visible', 'opacity': '1'});
                $(parent.document.body).find('#iframeChat').css({"opacity": "1", "visibility": "visible", "display": "block"});//"-webkit-transform": "translateZ(0)"
                $("#chat-top").css({"opacity": "1", "visibility": "visible", "display": "block", "z-index": "5000"});
		$(parent.document.body).append("<br/>=====================<br/>");
                $(parent.document.body).append('[iframe Params] |> ' + $(parent.document.body).find('#iframeChat')[0].outerHTML.split('style="')[1].split('"')[0] + '<br/>');
                $(parent.document.body).append('[Chat-top Params] |> ' + $('#chat-top')[0].outerHTML.split('style="')[1].split('"')[0] + '<br/>');
                $(parent.document.body).append("=====================");
            });*/

            /*$('body').on('tap', function() {
                $('#window_chat').hide();
            });*/

            //Scroll up show history
            /*$('.chat-container, .testRewrapDiv, #window_chat').bind('mousewheel', function(e){
                if(e.originalEvent.wheelDelta /1200 > 0) {
                    if ($('.chat-container')["0"].childElementCount <= 2) {
                        loadHistoryFlow();
                        $('.chat-container, .testRewrapDiv, #window_chat').unbind('mousewheel');
                    }
                } else {}
            });*/

            $(window).resize(function() {
                if (self.isMobileConfig === true) {
                    if (self.previousSize > $(window).height()) {
                        //Enlarged top = top - 60
                    } else {
                        $('.typing-box').css('bottom', '0px');
                        //Reduced top = top + 60
                    }
                    self.previousSize = $(window).height();
                }
                jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
            });
            jQuery('#window_chat').css({'bottom': '0px', 'z-index': '50', 'right': '0px', 'float': 'left', 'height': '100%', 'width': '100%'});

            appendQuitPage(this);
            $('.chatTopCloseIcon').hide();
            $('.chatTopArrowIcon').css('right', '17px');
            $('.reconnectClickTarget, .reconnectFormClickTarget').unbind('click');
            $('.reconnectClickTarget, .reconnectFormClickTarget').click(function() {
                $('.reconnectClickTarget, .reconnectFormClickTarget').append('<i class="fa fa-spinner fa-spin reconnectSpinner"></i>');
                self.status = self.getOnlineStatus();
		//self.initSocket(self.status);
            });

            //jQuery('.sendButtonText').css('color', this.colorHeader);
            //jQuery('.chat-title').text(this.chatMessageOnline);
            jQuery('#window_chat .chat-container,  .usertyping, .inputbox, .chat-wrapper').toggle();
            //jQuery('#window_chat').show();
		    jQuery('.sendButton').hide();

            if (this.isMobileConfig === true && this.welcomePosted === false) { setMobileChatTop(false); }

            setFocusHandler(".inputGrataMessage",Â message);
            setFocusHandler(".inputGrataName", yourName);
            setFocusHandler(".inputGrataEmail", yourAddress);
	    setFocusHandler(".inputGrataPhone", yourPhone);

            jQuery('#window_chat').css("position", "relative");
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                jQuery('.chat-container').css("width", "98%");
            }
	        if (this.isMobileConfig === true) {
                //jQuery('.iconsPlacer').hide();
                jQuery('.testRewrapDiv').css("height", "93%");//93
                jQuery('.chat-container').css("height", "92%");//93%
		if (navigator.userAgent.indexOf('iPad') > -1) {
                    jQuery('.testRewrapDiv').css({'height': "94%"});
		    jQuery('.chat-container').css({'height': "93%"});
		    if (screen.height > 1080) {
			jQuery('.testRewrapDiv').css({'height': "97%"});
                    	jQuery('.chat-container').css({'height': "96%"});
		    }
                }
                //jQuery('.uploadIconStyle').addClass('uploadIconStyleMobile');
                jQuery('.iconsPlacer').addClass('iconsPlacerMobile');
                jQuery('.typing-box').css('padding-right', '85px');
		//console.log($(parent.window.document.getElementById('iframeChat')));
		/*console.log($(parent.window.document.getElementById('iframeChat')));
		console.log($(parent.window.document.getElementById('iframeChat'))[0].scrollHeight);
                console.log($('#chat-top').height());
                console.log($('.inputbox').height());*/
		/*setTimeout(function() {
			var height = $(parent.window.document.getElementById('iframeChat'))[0].offsetTop - $('#chat-top').height() - $('.inputbox').height();
                	console.log(height);
			jQuery('.chat-container').css({"width": "99.5%", "height": height + 'px'});
			jQuery('.testRewrapDiv').css("height", height + 'px');
		}, 1000);*/
                //$(parent.window.document.getElementById('iframeChat')).css('left', '0px');
                //jQuery('#window_chat').css("width", "103%%");
                if (navigator.userAgent.indexOf("Firefox") === -1) {
                    //$(parent.window.document.getElementById('iframeChat')).css({'width': '104%', 'right': '-12px'});
                }
            } else {
		var height = parseInt(this.optionRef.chatHeight, 10) - $('#chat-top').height() - $('.inputbox').height() + 2;
                jQuery('.chat-container').css({"width": "98.1%", "height": height + 'px'});
		//jQuery('.chat-container').css({"width": "99.5%", "height": "79.5%"});
                //jQuery('.chat-container').css("width", "99.5%");
                jQuery('.testRewrapDiv').css("height", "91%");
            }

            var self = this;
            $('#btnSender').hover(function() {
                jQuery('#btnSender').css({"background-color": self.colorHeader, "color": "white", "border-color": self.colorHeader});
            });
            $('#btnSender').mouseout(function() {
                jQuery('#btnSender').css({"background-color": "white", "color": "rgb(182, 182, 182)", "border-color": "rgb(182, 182, 182)"});
            });

	        /*$('.historyButton').css({"background-color": "white", "color": self.colorHeader, "border-color": self.colorHeader});
            $('.historyButton').hover(function() {
                jQuery('.historyButton').css({"background-color": self.colorHeader, "color": "white", "border-color": self.colorHeader});
            });
	        $('.historyButton').mouseout(function() {
                $('.historyButton').css({"background-color": "white", "color": self.colorHeader, "border-color": self.colorHeader});
            });*/

            //$('.sendButton').css({"background-color": "white", "color": self.colorHeader, "border-color": self.colorHeader});
            disableSendButton();
            jQuery('.sendButton').hide();
            $('.sendButton').hover(function() {
		if (self.authorized != true) {return;}
                var message = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";
                if ($('.typing-box').val().length <= 0 || $('.typing-box').val() === message)
                    return false;
                jQuery('.sendButton').css({"background-color": self.colorHeader, "color": "white", "border-color": self.colorHeader});
            });
            $('.sendButton').mouseout(function() {
		if (self.authorized != true) {return;}
                var message = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";
                if ($('.typing-box').val().length <= 0 || $('.typing-box').val() === message) {} else {
                    enableSendButton();
                }
            });

            (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? $('.typing-box').val("Type your message here") : $('.typing-box').val("è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯");

            self.setWebChatOptions();
	    var height = (self.optionRef.buttonDisplay === "1" && self.isMobileConfig === false) ? '40px' : $('#chat-top').height()+'px';
            if (self.isMobileConfig === false && self.osObject.browser.indexOf('Internet') > -1) {
                height = 'unset';
            }
            $('.chat-title').css({'padding': 'unset', 'height': '100%', 'line-height': height, 'padding-left': '10px'});
            //jQuery("#window_chat").show();
            if (self.orgId == 839731165445) {
                $(parent.window.document.getElementById('iframeChat')).hide();
            } else {
                (self.isChatBusy == true) ? showIfClicked() : jQuery("#window_chat").show();
            }
            $('.typing-box').on('keyup', function() {
                if (this.value.length > 0) {
                    enableSendButton();
                    $('.iconsPlacer').hide();
                } else {
                    disableSendButton();
                    $('.iconsPlacer').show();
                }
            });
            $('.typing-box').on('focusout', function() {
                var message = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";
                if ($('.typing-box').val().length <= 0 || $('.typing-box').val() === message)
                    disableSendButton();
            });

            $('.typing-box').on('click', function() {
                if ($('.typing-box').val().length > 0)
                    enableSendButton();
            });

            if (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1 && $('.typing-box').val() === "Type your message here") {$('.typing-box').css("font-style", "italic");}
            $('.typing-box').on('focus', function() {
		//if (self.authorized != true) {return;}
                jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) {
                    $('.typing-box').css("font-style", "normal");
                    if (self.isMobileConfig === true) {$('.sendButton').show();}
                    if (this.value === "Type your message here")
                        this.value = "";
                    $('.typing-box').on('focusout', function() {
                        if (self.isMobileConfig === true) {$('.sendButton').hide();}
                        if (this.value === "") {
                            this.value = "Type your message here";
                            $('.typing-box').css("font-style", "italic");
                        }
                    });
                } else {
                    $('.typing-box').css("font-style", "normal");
                    if (self.isMobileConfig === true) {$('.sendButton').show();}
                    if (this.value === "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯")
                        this.value = "";
                    $('.typing-box').on('focusout', function() {
                        if (self.isMobileConfig === true) {$('.sendButton').hide();}
                        if (this.value === "") {
                            this.value = "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";
                            $('.typing-box').css("font-style", "normal");
                        }
                    });
                }
            });

            var self = this;

            if (this.status == true) {
                $('.form-container').hide();
            } else {
                //Update Title
                $('.chat-wrapper').hide();
                $('.connecting').hide();
                jQuery('.chat-container, .usertyping .inputbox .loading-container').hide();
                $('.form-container').show();
            }

            jQuery('.chat-container, .form-container, .usertyping, .inputbox, .loading-container').hide();
            jQuery('#chat-top').css({'border-right': '1px solid' +this.colorHeader, 'border-left': '1px solid' +this.colorHeader, 'background-color': this.colorHeader});
            $('.chat-container a').attr('target', '_blank');
            jQuery('.form-container, .loading-container').css('height', '454px');
            jQuery('.messageFrom').css('color', this.chatAgentName);
            jQuery('.messageToName').css('color', this.chatUserName);
            var self = this;

            if (self.isMobileConfig === true) {
                setMobileChatTop(self.status, "doIt");
                $('.sendButton').hide();
                parent.window.document.getElementById('iframeChat').style.height = self.optionRef.mobileButtonSize;//'66px';//Add reduced class for chat top
                $('#chat-top').css({'height': self.optionRef.mobileButtonSize + 'px', 'width': '100%'});//40px
                $('#chat-top').addClass("mobileChatTop");
                //$('.typing-box').hide();
                $('.inputbox').hide();
                jQuery('.chat-container,  .usertyping, .inputbox, .chat-wrapper').toggle();
                jQuery('.chat-container,  .usertyping, .inputbox').hide();
                //$('#chat-top').empty();
                //$('#chat-top').append('<i class="fa fa-comments chatTopIcon"></i>');
                setMobileButton();
            }

            jQuery('#chat-top').unbind('click').off();
            jQuery('#chat-top').click(function() {
		if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {$(parent.window.document.getElementById('iframeChat')).css({'transition': '0ms'});}//iPadTest
		setClicked();
		doRegister(self.status);
		resetUnreads();
		//doAddUrl(false);
                if ($('.chatTopArrowIcon').hasClass('fa-caret-down')) {
                    $('.chatTopArrowIcon').removeClass('fa-caret-down').addClass('fa-caret-up');
                } else {
                    $('.chatTopArrowIcon').removeClass('fa-caret-up').addClass('fa-caret-down');
                }
                $('.chat-container').focus();
                //if (self.orgOnline === false)//[orgOnline]
                    //self.status = false;
                if (self.orgOnline === false && self.optionRef.offlineEmailEnable === "true") {
                    self.status = false;
                } else {
                    self.status = true;
                }
                if (self.isMobileConfig === true) {
		    checkUnderlayerFlow(true, "");
                    setMobileChatTop(self.status);
                    /*if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('%')[0], 10) >= 100) {
                        if (self.connected !== true) {
                            self.initSockets(true);
                        }
                    }*/
                } else { 
                    setDesktopChat(self.status);
                    /*if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) >= 100) {
                        if (self.connected !== true) {
                            self.initSockets(true);
                        }
                    }*/
                }
		if (self.originalOrgOnline === false && self.optionRef.offlineEmailEnable === "true") {
        	  if (self.isMobileConfig === true) {
        	    if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            	       if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
                	 $('.form-container').show();
            	       } else {
                	 $('.form-container').hide();
            	       }
        	     } else {
            	       if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) > 39) {
                	 $('.form-container').show();
            	       } else {
                	 $('.form-container').hide();
            	      }
        	  }
    		} else {
        	  if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
            	     $('.form-container').show();
        	   } else {
           	     $('.form-container').hide();
       		   }
       		  }
                }
            });

	    loadUnreads();

	        $('.historyButton').unbind('click');
            $('.historyButton').click(function() {
                loadHistoryFlow();
            });

            if (self.showStatus === 'waiting' || self.showStatus === 'inchat' || self.showStatus === 'autoreply' || self.getCookie('grataFirstUserMessage') == "true") {//getCookie('lastagent') !== "") {
                loadHistoryFlow();
            } else {
                addAgentGreeting();
            }
	    (self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();


	    function createNewEvent(eventName) {
    		var event;
    		if (typeof(Event) === 'function') {
        	    event = new Event(eventName);
    		} else {
        	    event = document.createEvent('Event');
        	    event.initEvent(eventName, true, true);
    		}
    		return event;
	    }

	    /*var event;
	    if (self.osObject.browser.indexOf('Internet') > -1) {
		event = createNewEvent("grataReady")
	    } else {
	    	event = new Event("grataReady", { "detail": "WebChat is ready" });
	    }*/
	    //var event = (self.osObject.browser.indexOf('Internet') > -1) ? createNewEvent("grataReady") : new Event("grataReady", { "detail": "WebChat is ready" });
            //parent.window.document.dispatchEvent(event);

	    parent.window.document.addEventListener('showGrata', function() {
		self.isShowGrata = true;
		self.hideGrata = false;
		if (navigator.userAgent.indexOf('iPhone;') > -1 && self.orgId == "839731165445" && self.fromLaunchCs == true) {
                  setMobileChatTop(self.status);
                  //setMobileButton();
            	}
		$(parent.window.document.getElementById('iframeChat')).show();
		if (self.orgId == 839731165445) {$('#window_chat').show();}
            	if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) <= 100 || parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0], 10) <= 39) {
                	(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
            	}
            });

	    document.addEventListener('hideGrata', function() {
		self.hideGrata = true;
		self.isShowGrata = false;
                $(parent.window.document.getElementById('iframeChat')).hide();
            });

	  function setCSStatus(e) {
            if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                self.csStatus = e.dataToGrata.csOnline;
                if (self.chatRef != undefined) {
                    if (self.csStatus == null)
                        self.csStatus = false;
                    self.chatRef.sendMessage('Update csOnline', 'status/csOnline', true);
                }
            }
        }

        parent.window.document.removeEventListener("setCSStatus", setCSStatus, false);
        parent.window.document.addEventListener("setCSStatus", setCSStatus, false);

	    parent.window.document.addEventListener('hideGrata', function() {
		self.hideGrata = true;
		self.isShowGrata = false;
                $(parent.window.document.getElementById('iframeChat')).hide();
            });
	    parent.window.document.addEventListener('setButtonToGrata', function(e) {
            	setButtonId();
            	buttonChatFlow();
            });

	    parent.window.document.addEventListener('setToGrataUser', function(e) {
            if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                if (e.dataToGrata.dataToGrata !== "" && e.dataToGrata.dataToGrata !== null && e.dataToGrata.dataToGrata !== undefined) {
                    if (e.dataToGrata.dataToGrata.toLocaleLowerCase().indexOf("<script") == -1 && e.dataToGrata.dataToGrata.toLocaleLowerCase().indexOf("<style") == -1 && e.dataToGrata.dataToGrata.toLocaleLowerCase().indexOf("<img") == -1) {
                        var myData = atb(e.dataToGrata.dataToGrata);
                        if (myData.toLocaleLowerCase().indexOf("<script") == -1 && myData.toLocaleLowerCase().indexOf("<style") == -1 && myData.toLocaleLowerCase().indexOf("<img") == -1) {
                            jQuery.ajax({
                                type: 'POST',
                                url: "https://" + self.apiPrefix + "api."+self.chatDomain+"/connect-api/user/updatePhone",
                                data: {phone: e.dataToGrata.dataToGrata},
                                dataType: 'json',
				xhrFields: {'withCredentials': true},
        			crossDomain: true,
                                beforeSend: function (request) {
				     if (self.chatDomain.indexOf('grata') > -1) {
                                  	//request.setRequestHeader("withCredentials", true);
                                  	//request.setRequestHeader("crossDomain", true);
                                     } else {
                                  	request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                                     }
                                    //request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                                },
                                success: function(data) {},
                                fail: function(data, textStatus) {
                                    console.log('[Grata] : Ajax failed');
                                    console.log(data);
                                    console.log(textStatus);
                                },   
                                error: function(data) {
                                    console.log('[Grata] : Ajax error');
                                    console.log(data);
                               }, timeout: 60000
                            });
                        }
                    }
                }
            }
        });

	    function refreshSession() {
            var path = window.location.host.split('.');
            var resPath = "/";

            if (path.length >= 3) {
                resPath = '.' + path[path.length-2] + '.' + path[path.length-1];
                if (resPath == ".com.cn") {
                resPath = '.' + path[path.length-3] + resPath;
                }
            } else {
                resPath = '.' + path[0] + '.' + path[1];
            }

	    if (self.chatRef != null) {
		setTimeout(function() {
                    self.chatRef.disconnect();
		    if (self.chatRef !== null && self.chatRef.socket !== null)
                	self.chatRef.socket.close();
                }, 1000);
            }
            document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "grataLocDone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "grataFirstUserMessage=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "grataUserToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "grataLocDone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "grataUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;
            document.cookie = "grataUnreads=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+resPath;

            clearInterval(self.statusInterval);

            self.isRegisterDone = false;
            self.connected = false;
            self.welcomePosted = false;
	    self.isBusyStatusSent = false;
	    localStorage['grataHistory'] = "";
            self.myHistory = [];
        }

	function refreshValues(options) {
	    
            this.chatAgentName = options.data[0].chatAgentName;
            this.colorHeader = options.data[0].chatHeader;
            this.chatMessageEn = options.data[0].chatHeaderOnlineEn;
            this.chatMessageCn = options.data[0].chatHeaderOnlineCn;
            this.colorBackground = options.data[0].chatBackground;
            this.colorHeaderText= options.data[0].chatHeaderText;
            this.chatText =  options.data[0].chatText;
            this.colorUserName= options.data[0].chatUserName;
            this.chatMessageOfflineEn = options.data[0].chatMessageOfflineEn;
            this.chatMessageOfflineCn = options.data[0].chatMessageOfflineCn;
	    var self = this.grataCb;

	    var self = this.grataCb;
            self.welcomeMessageText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? decode(options.data[0].chatMessageOnlineEn) : decode(decodeURIComponent(options.data[0].chatMessageOnlineCn));
            self.chatMessageOnline = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? decode(this.chatMessageEn) : decode(decodeURIComponent(this.chatMessageCn));
            self.chatMessageOffline = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? decode(this.chatMessageOfflineEn) : decode(decodeURIComponent(this.chatMessageOfflineCn));

            this.welcomeMessageText = self.welcomeMessageText.split("\n").join("<br/>");
            this.chatMessageOnline = self.chatMessageOnline.split("\n").join("<br/>");
            this.chatMessageOffline = self.chatMessageOffline.split("\n").join("<br/>");

            this.welcomeMessageText = self.welcomeMessageText.split("\\").join("");
            this.chatMessageOnline = self.chatMessageOnline.split("\\").join("");
            this.chatMessageOffline = self.chatMessageOffline.split("\\").join("");
	
	    self.optionRef.chatMessageBusyEn = self.optionRef.chatMessageBusyEn.split("\n").join("<br/>");
            self.optionRef.chatMessageBusyCn = self.optionRef.chatMessageBusyCn.split("\n").join("<br/>");

            self.optionRef.chatHeaderBusyEn = decode(self.optionRef.chatHeaderBusyEn);
            self.optionRef.chatHeaderBusyCn = decode(decodeURIComponent(self.optionRef.chatHeaderBusyCn));

            self.optionRef.chatHeaderOnlineEn = decode(self.optionRef.chatHeaderOnlineEn);
            self.optionRef.chatHeaderOnlineCn = decode(decodeURIComponent(self.optionRef.chatHeaderOnlineCn));

            self.optionRef.chatHeaderOfflineEn = decode(self.optionRef.chatHeaderOfflineEn);
            self.optionRef.chatHeaderOfflineCn = decode(decodeURIComponent(self.optionRef.chatHeaderOfflineCn));

            self.optionRef.chatMessageBusyEn = self.optionRef.chatMessageBusyEn.split("\n").join("<br/>");
            self.optionRef.chatMessageBusyCn = self.optionRef.chatMessageBusyCn.split("\n").join("<br/>");
        }

        function refreshOptions() {
            jQuery.ajax({
                type: 'POST',
                url: "https://" + self.apiPrefix + "api."+self.chatDomain+"/organization/getWebchatOptions.jsn",//?access="+self.accessCode+"&buttonId="+self.clickButtonId,
                data: {access: self.accessCode, buttonId: self.clickButtonId},
                dataType: 'json',
		xhrFields: {'withCredentials': true},
                                crossDomain: true,
                beforeSend: function (request) {
		    if (self.chatDomain.indexOf('grata') > -1) {
                                  //request.setRequestHeader("withCredentials", true);
                                  //request.setRequestHeader("crossDomain", true);
                                } else {
                                  request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                                }
                    //request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                },
                success: function(data) {
		     self.isSwitching = false;
		     parent.window.document.removeEventListener('setGrataToStore', switchStoreFlow, true);
                    if (data.success == true) {
			if (self.prompt != false && self.propagate !== false || self.propagate == undefined) {
                            self.chatRef.sendMessage('#switchStore', 'event/switchStore', "", "", {'buttonId': self.clickButtonId, 'callback': self.accessCode});
                            self.propagate = undefined;
                        }
                        refreshSession();
			self.optionRef = data.data[0];
                        refreshValues(data);
                        $('#window_chat').remove();
                        setButtonId();
			self.isShowGrata = true;
            		self.hideGrata = false;
			jQuery.ajax({
                            type: 'POST',
                            url: "https://" + self.apiPrefix + "api."+self.chatDomain+"/connect-api/chat/clearCookie.jsn",
                            data: {},
                            dataType: 'json',
                            beforeSend: function (request) {
                                if (self.chatDomain.indexOf('grata') > -1) {
                                    //request.setRequestHeader("withCredentials", true);
                                    //request.setRequestHeader("crossDomain", true);
                                } else {
                                    request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                                }
                            },
                            success: function(data) {
                                self.getStatus(true);
                                setClicked();
                                if (self.chatRef !== null) {
                                    self.chatRef.initialize(true);
				    /*setTimeout(function() {
					self.chatRef.sendMessage('#switchStore', 'event/switchStore', "", "", {'buttonId': self.buttonId, 'callback': self.accessCode});
                                    }, 2500);*/
                                }
                            },
                            fail: function(data, textStatus) {
                                console.log('[Grata] : clear cookie failed');
                            },   
                            error: function(data) {
                                console.log('[Grata] : clear cookie Error');
                           }, timeout: 60000
                        });
                    }
                },
                fail: function(data, textStatus) {
                    console.log('[Grata] : Getting webchat options failed');
                    console.log(data);
                    console.log(textStatus);
                },   
                error: function(data) {
                    console.log('[Grata] : Getting webchat options Error');
                    console.log(data);
               }, timeout: 60000
            });
        }

	function switchStoreFlow(e) {
            if (self.isSwitching == true)
                return;

            if (self.connected == false) {
                doRegister(self.status);
            }

            self.isSwitching = true;
            if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                if (e.dataToGrata.buttonId !== "" && e.dataToGrata.buttonId !== null && e.dataToGrata.buttonId !== undefined) {
                    if (self.orgId == "839731165445") {
                        if (e.dataToGrata.buttonId == $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id) {
			    self.isSwitching = false;
                            return;
                        }
                        if (e.dataToGrata.buttonId == 'grataStore9372' || e.dataToGrata.buttonId == 'grataStore9373') {
                            if (e.dataToGrata.buttonId == 'grataStore9372' && $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id == 'grataStore9373' ||
                                $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id == 'grataStore9372' && e.dataToGrata.buttonId == 'grataStore9373') {
				self.isSwitching = false;
                                return;
                            }
                        }

                        if (e.dataToGrata.buttonId == 'grataStore9048' || e.dataToGrata.buttonId == 'grataStore9066') {
                            if (e.dataToGrata.buttonId == 'grataStore9048' && $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id == 'grataStore9066' ||
                                $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id == 'grataStore9048' && e.dataToGrata.buttonId == 'grataStore9066') {
				self.isSwitching = false;
                                return;
                            }
                        }

                        if (e.dataToGrata.buttonId == 'grataStore9371' || e.dataToGrata.buttonId == 'grataStore9360') {
                            if (e.dataToGrata.buttonId == 'grataStore9371' && $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id == 'grataStore9360' ||
                                $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id == 'grataStore9371' && e.dataToGrata.buttonId == 'grataStore9360') {
				self.isSwitching = false;
                                return;
                            }
                        }
			if (areIn(e.dataToGrata.buttonId.split('grataStore')[1], 
                                $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id.split('grataStore')[1],
                                 ['9111', '9114', '9368', '9113', '9115', '9374', '9337']) == true) {
                            self.isSwitching = false;
                            return;
                        }

                        if (areIn(e.dataToGrata.buttonId.split('grataStore')[1], 
                                $(parent.window.document).find('.grata-chat_launcher_desc_content')[0].id.split('grataStore')[1],
                                 ['9129', '9130', '9131']) == true) {
                            self.isSwitching = false;
                            return;
                        }
			if (e.dataToGrata.buttonId == "" || e.dataToGrata.buttonId == null || e.dataToGrata.buttonId == undefined) {
                            console.log("buttonId is invalid");
			    self.isSwitching = false;
                            return;
                        }
                    }
                }
                self.prompt = (e.dataToGrata.prompt != undefined && e.dataToGrata.prompt == false) ? false : true;
                self.maximizeWindow = (e.dataToGrata.maximizeGrata != undefined && e.dataToGrata.maximizeGrata == false) ? false : true;
                if (self.prompt == false) {
		    self.propagate = false;
                    if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                        self.prompt = (e.dataToGrata.prompt != undefined && e.dataToGrata.prompt == false) ? false : true;
                        self.maximizeWindow = (e.dataToGrata.maximizeGrata != undefined && e.dataToGrata.maximizeGrata == false) ? false : true;
                        if (e.dataToGrata.callback !== "" && e.dataToGrata.callback !== null && e.dataToGrata.callback !== undefined) {
                            self.orgId = e.dataToGrata.callback;
                            self.accessCode = e.dataToGrata.callback;
                        }
                        if (e.dataToGrata.buttonId !== "" && e.dataToGrata.buttonId !== null && e.dataToGrata.buttonId !== undefined) {
                            self.optionRef.buttonId = e.dataToGrata.buttonId.replace("#", "").replace('.', '');
                            self.clickButtonId = e.dataToGrata.buttonId.replace("#", "").replace('.', '');
                            if (self.orgId == "839731165445") {
                                $(parent.window.document).find('.grata-chat_launcher_desc_content').attr('id', self.clickButtonId);
                            }
                        }
                    }
                    refreshOptions();
                    $('.switchContainer').remove();
                    if (self.maximizeWindow == true) {
                        maximizeChat();
                    } else {
                        minimizeChat();
                    }
                    return;
                }  else {
		    self.maximizeWindow = true;
                    self.propagate = true;
                }
            }

	    function areIn(firstId, secondId, list) {
                var degree = 0;
                for (var i = 0; i <= list.length;i++) {
                    if (firstId == list[i] || secondId == list[i]) {
                        degree++;
                    }
                }
                if (degree == 2) {
                    return true;
                } else {
                    return false;
                }
            }

            appendSwitchChat();
            self.notifyNewMessage();

            $('#switchNo').unbind('click');
            $('#switchNo').click(function() {
                self.isSwitching = false;
                $('.switchContainer').remove();
            });

            $('#switchYes').unbind('click');
            $('#switchYes').click(function() {
		parent.window.document.removeEventListener('setGrataToStore', switchStoreFlow, true);
                if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                    self.prompt = (e.dataToGrata.prompt != undefined && e.dataToGrata.prompt == false) ? false : true;
                    self.maximizeWindow = (e.dataToGrata.maximizeGrata != undefined && e.dataToGrata.maximizeGrata == false) ? false : true;
                    if (e.dataToGrata.callback !== "" && e.dataToGrata.callback !== null && e.dataToGrata.callback !== undefined) {
                        self.orgId = e.dataToGrata.callback;
                        self.accessCode = e.dataToGrata.callback;
                    }
                    if (e.dataToGrata.buttonId !== "" && e.dataToGrata.buttonId !== null && e.dataToGrata.buttonId !== undefined) {
                        self.optionRef.buttonId = e.dataToGrata.buttonId.replace("#", "").replace('.', '');
                        self.clickButtonId = e.dataToGrata.buttonId.replace("#", "").replace('.', '');
                        if (self.orgId == "839731165445") {
                            $(parent.window.document).find('.grata-chat_launcher_desc_content').attr('id', self.clickButtonId);
                        }
                    }
                }
                refreshOptions();
                $('.switchContainer').remove();
                maximizeChat();
            });

            if (e.dataToGrata.directSwitch !== "" && e.dataToGrata.directSwitch !== null && e.dataToGrata.directSwitch !== undefined) {
                if (e.dataToGrata.directSwitch == true) {
                    $('#switchYes').click();
                }
            }
        }

	parent.window.document.removeEventListener('setGrataToStore', switchStoreFlow, true);
        parent.window.document.addEventListener('setGrataToStore', switchStoreFlow, true);

	parent.window.document.addEventListener('virtualPageToGrata', function(e) {
            if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                if (e.dataToGrata.univers !== "" && e.dataToGrata.univers !== null && e.dataToGrata.univers !== undefined) {
                    if (e.dataToGrata.url !== "" && e.dataToGrata.url !== null && e.dataToGrata.url !== undefined) {
                        checkPageMove(e.dataToGrata.univers, e.dataToGrata.url);
                    } else {
                        console.log("url isn't valid");
                    }
                } else {
                    console.log("univers isn't valid");
                }
            } else {
                console.log("dataToGrata isn't valid");
            }
        });

	    parent.window.document.addEventListener('setPositionToGrata', function(e) {
            if (e.dataToGrata !== "" && e.dataToGrata !== null && e.dataToGrata !== undefined) {
                if (e.dataToGrata.bufferX !== null && e.dataToGrata.bufferX !== undefined) {
                    if (e.dataToGrata.bufferY !== null && e.dataToGrata.bufferY !== undefined) {
			if (e.dataToGrata.zIndex !== null && e.dataToGrata.zIndex !== undefined && e.dataToGrata.zIndex !== "") {
                            self.optionRef.zIndex = e.dataToGrata.zIndex;
                            if ($(".chatTopArrowIcon").length === 0) {
                                $(parent.window.document.getElementById('iframeChat')).css('z-index', self.optionRef.zIndex);
                            }
                        }
			if (self.isMobileConfig === false) {
                            self.optionRef.buttonBufferX = e.dataToGrata.bufferX;
                            self.optionRef.buttonBufferY = e.dataToGrata.bufferY;
                            if ($(".chatTopArrowIcon").length === 0) {
                                parent.window.document.getElementById('iframeChat').style.right = self.optionRef.buttonBufferX;// + 'px';
                                parent.window.document.getElementById('iframeChat').style.bottom = self.optionRef.buttonBufferY;// + 'px';
                            }
                        } else {
                            self.optionRef.mobileButtonBufferX = e.dataToGrata.bufferX;
                            self.optionRef.mobileButtonBufferY = e.dataToGrata.bufferY;
                            if ($(".chatTopArrowIcon").length === 0) {
                                parent.window.document.getElementById('iframeChat').style.right = self.optionRef.mobileButtonBufferX;// + 'px';
                                parent.window.document.getElementById('iframeChat').style.bottom = self.optionRef.mobileButtonBufferY;// + 'px';
                            }
                        }
                    } else {
                        console.log("bufferY isn't valid");
                    }
                } else {
                    console.log("bufferX isn't valid");
                }
            } else {
                console.log("dataToGrata isn't valid");
            }
        });

	//Test controlling events
	parent.window.document.addEventListener('toggleGrata', function(e) {
            toggleChat();
        });  

        parent.window.document.addEventListener('maximizeGrata', function(e) {
	  if (self.connected == false) {
		self.showStatus = "clicked";
		doRegister(self.status);
          }
            maximizeChat();
        }); 

        parent.window.document.addEventListener('minimizeGrata', function(e) {
            minimizeChat();
        }); 

	    //var event = (self.osObject.browser.indexOf('Internet') > -1) ? createNewEvent("grataReady") : new Event("grataReady", { "detail": "WebChat is ready" });
            //parent.window.document.dispatchEvent(event);

            function getTimeStr(timestamp) {
                var dt = new Date(timestamp);
                var d = dt.toLocaleDateString();
                var t = dt.toLocaleTimeString(); //dt.getHours() + ':' + dt.getMinutes();//dt.toLocaleTimeString();
                t = t.replace(/\u200E/g, '');
                t = t.replace(/^([^\d]*\d{1,2}:\d{1,2}):\d{1,2}([^\d]*)$/, '$1$2');
                var result;
                var nowDate = new Date();
                if (d === /*Date.now()*/nowDate.toLocaleDateString()) {
                    result = t;
                }
                else {
                    result = d + ' ' + t;
                }
                return result;
            }

	    function updateInConv(name) {
                var self = this.grataCb;
                if (name !== "" && name !== null && name !== undefined) {
                    var headerText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Now chatting with " + name : "ä¸" + name + "èå¤©ä¸­";
                    $('.chat-title').text(headerText);
                    setCookie('inConv', headerText, 1);
                }
            }

            function addToHistory(historyItem) {//Update
                historyItem.content = $.parseJSON(historyItem.content);
		if (historyItem.content.headers.persistent !== undefined && historyItem.content.headers.persistent == false)
                    return;
                if (historyItem.content.headers.pageView != undefined)
                    return;
                if (historyItem.content.body === undefined || historyItem.content.body.indexOf('Wechat Error') > -1 || historyItem.content.body == "#close")
                    return;
		if (historyItem.content.body != undefined && historyItem.content.body === "#agentJoinChat" || historyItem.content.body === "#newUserChat") {
                    return;
                }
                var self = this.grataCb;
		//historyItem.content.body = decodeURIComponent(decode(historyItem.content.body));

                var myShownName = (self.userName !== null && self.userName !== "") ? self.userName : "Me";
		if (self.showDefaultLeft !== true) {myShownName = "";}
                //var agentShownName = (self.optionRef.useAgentName === "false" && self.agentName !== null && self.agentName !== undefined && self.agentName !== "") ? self.agentName : historyItem.content.headers.authorNick;
		var nickOrId = "";
                if (historyItem.content.headers.agentName != undefined && historyItem.content.headers.agentName != null && historyItem.content.headers.agentName != "") {
                    nickOrId = (historyItem.content.headers.authorNick == "") ? historyItem.content.headers.agentName : historyItem.content.headers.authorNick;
                } else {
                    nickOrId = historyItem.content.headers.authorNick;
                }
                var agentShownName = (self.optionRef.useAgentName === "false" && self.agentName !== null && self.agentName !== undefined && self.agentName !== "") ? self.agentName : nickOrId;
		if (historyItem.content.headers.sentBy !== "User")
                    updateInConv(agentShownName);

                var length = (self.myHistory === []) ? 0 : self.myHistory.length;
                var author = (historyItem.content.headers.sentBy === "User") ? myShownName : agentShownName;
                var fromOrTo = (historyItem.content.headers.sentBy === "User") ? 'messageFrom' : 'messageTo';
                var isLocal = (historyItem.content.headers.sentBy === "User") ? 'local' : 'remote';
                var colorName = (historyItem.content.headers.sentBy === "User") ? self.colorUserName : self.chatAgentName;
		var myTime = new Date(historyItem.content.headers.timeMs);
                historyItem.timestamp = myTime.toTimeString().split(':')[0] + ':' + myTime.toTimeString().split(':')[1];

                /*if (historyItem.timestamp.split(' ').length >= 3) {
                    historyItem.timestamp = historyItem.timestamp.split(' ')[0].replace(new RegExp('-', 'g'), '/') + ' ' + historyItem.timestamp.split(' ')[1];
                }*/
                //historyItem.timestamp = historyItem.timestamp.replace(" CST", "");
                //historyItem.timestamp = historyItem.timestamp.replace(" HKT", "");
                /*var body = '<div id="message_' + historyItem.id + '" class="' + fromOrTo + '">\
                                <div class="messageTimeContainer">\
                                    <span class="messageTime">17:09</span>\
                                    <span class="messageTimestamp">' + historyItem.timestamp + '</span>\
                                </div>\
                                <div class="chatboxmessage chatboxmessage_' + historyItem.id + '">\
                                    <span class="chatboxinfo ' + isLocal + '" style="color: ' + colorName + ';">' + author + '</span>\
                                    s<div class="messageLayout">';
                                        
                                    if (historyItem.content.headers.contentType === "text/plain" || historyItem.content.headers.contentType === "text/html") {
                                        body += '<span style="color: ' + self.chatText + '"  class="chatboxmessagecontent">' + historyItem.content.body + '</span>';
                                    } else if (historyItem.content.headers.contentType === "image/png" || historyItem.content.headers.contentType === "image/PNG" || historyItem.content.headers.contentType === "image/jpeg") {
                                        historyItem.content.body = historyItem.content.body.replace("http://", "https://");
                                        body += '<div class="chatboxmessagecontent image" style="background-image: url('+historyItem.content.body+');"></div>';
                                    } else if (historyItem.content.headers.contentType === "audio/mpeg") {
                                        body += '<audio class="audioPlacer" controls="controls"><source class="chatboxmessagecontent audio" type="audio/mpeg" src="'+historyItem.content.body+'"/></audio>';
                                    }
                                    
                                    body += '</div>\
                                    <div class="messageStatus"></div>\
                                </div>\
                            </div>';*/
		var body = '<div id="message_' + historyItem.id + '" class="' + fromOrTo + '">';
                                if (historyItem.content.headers.sentBy !== self.historyPreviousSender) {
                                    body += '<div class="messageTimeContainer">\
                                                <span class="messageTime">17:09</span>\
                                                <span class="messageTimestamp">' + historyItem.timestamp + '</span>\
                                            </div>';
                                }
				if (isLocal === 'local') {
		 		    if (self.showDefaultLeft === true) {
                                        body += '<div class="chatboxmessage chatboxmessage_' + historyItem.id + '">';
                                    } else {
                                        body += '<div class="chatboxmessage localToLeft chatboxmessage_' + historyItem.id + '">';
                                    }
                                    //body += '<div class="chatboxmessage localToLeft chatboxmessage_' + historyItem.id + '">';
                                } else {
                                    body += '<div class="chatboxmessage chatboxmessage_' + historyItem.id + '">';
                                }
                                //body += '<div class="chatboxmessage chatboxmessage_' + historyItem.id + '">';
                                if (historyItem.content.headers.sentBy !== self.historyPreviousSender) {
				    if (isLocal === 'remote' && self.showDefaultLeft === false) {
					if (historyItem.content.headers.agentPlace == "" || historyItem.content.headers.agentPlace == undefined) {
                                            body += '<div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';font-weight:500;">'+author+'</span></div></div>';    
                                        } else if (historyItem.content.headers.agentAvatar == "" || historyItem.content.headers.agentAvatar == undefined) {
					    if (historyItem.content.headers.agentPlace != undefined && historyItem.content.headers.agentPlace != "" && historyItem.content.headers.agentPlace != null) {
                                                body += '<div class="chatTopPart" style="position:relative;margin-left:-5px;"><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';font-weight:500;">'+author+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';">'+historyItem.content.headers.agentPlace+'</span></div></div>';
                                            }   else {
                                                body += '<div class="chatTopPart" style="position:relative;margin-left:-5px;"><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';font-weight:500;">'+author+'</span></div></div>';
                                            }
                                        } else {
                                            body += '<div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';font-weight:500;">'+author+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';">'+historyItem.content.headers.agentPlace+'</span></div></div>';
                                        }
                                        //body += '<div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';font-weight:500;">'+author+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +colorName+ ';">'+historyItem.content.headers.agentPlace+'</span></div></div>';
                                    } else {
                                        body += '<span class="chatboxinfo ' + isLocal + '" style="color: ' + colorName + ';">' + author + '</span>';
                                    }
                                    //body += '<span class="chatboxinfo ' + isLocal + '" style="color: ' + colorName + ';">' + author + '</span>';
                                }
                                    //body += '<div class="messageLayout">';
                                    if (isLocal === 'local') {
					if (self.showDefaultLeft === false) {
                                            body += '<div class="messageLayout" style="float:right">';
                                        } else {
                                            body += '<div class="messageLayout">';
                                        }
                                    } else {
                                        body += '<div class="messageLayout">';
                                    }
                                        
                                    if (historyItem.content.headers.contentType === "text/plain" || historyItem.content.headers.contentType === "text/html") {
                                        body += '<span style="color: ' + self.chatText + '"  class="chatboxmessagecontent">' + historyItem.content.body + '</span>';
                                    } else if (historyItem.content.headers.contentType === "image/png" || historyItem.content.headers.contentType === "image/PNG" || historyItem.content.headers.contentType === "image/jpeg") {
                                        //historyItem.content.body = historyItem.content.body.replace("http://", "https://");
                                        historyItem.content.imgUrl = historyItem.content.body;
                                        if (historyItem.content.body.indexOf('qr.topscan.com') === -1) {historyItem.content.body = historyItem.content.body.replace("http://", "https://");}
					body += '<div class="chatboxmessagecontent image" style="background-image: url('+historyItem.content.body+');"></div>';
                                    } else if (historyItem.content.headers.contentType === "audio/mpeg") {
                                        body += '<audio class="audioPlacer" controls="controls"><source class="chatboxmessagecontent audio" type="audio/mpeg" src="'+historyItem.content.body+'"/></audio>';
                                    }
                                    
                                    body += '</div>\
                                    <div class="messageStatus"></div>\
                                </div>\
                            </div>';
                self.historyPreviousSender = historyItem.content.headers.sentBy;
                self.myHistory[length] = {'authorNick': author,
                                        'body': body,
					'imgUrl': historyItem.content.imgUrl,
                                        'id': historyItem.id,
                                        'origin': isLocal,
					'timeMs': historyItem.content.headers.timeMs,
                                        'timestamp': historyItem.timestamp,
					'created': historyItem.createdAt,
                                        'cType': historyItem.content.headers.contentType,
                                        'headers': {'agentName': historyItem.content.headers.agentName,
                                                    'agentPlace': historyItem.content.headers.agentPlace,
                                                    'agentAvatar': historyItem.content.headers.agentAvatar}};
            }

            function getConversation() {
                var self = this.grataCb;
                jQuery.ajax({
                    type: 'POST',
                    url: 'https://' + self.apiPrefix + 'api.'+self.chatDomain+'/connect-api/me/conversations.jsn',
                    data: {callback: self.accessCode, limit: 1000},//localStorage['grataHistory']
                    dataType: 'json',
		    xhrFields: {'withCredentials': true},
                                crossDomain: true,
                    beforeSend: function (request) {
			if (self.chatDomain.indexOf('grata') > -1) {
                                  //request.setRequestHeader("withCredentials", true);
                                  //request.setRequestHeader("crossDomain", true);
                                } else {
                                  request.setRequestHeader("GB-Access-Token", self.getCookie("grataUserToken"));
                                }
                        //request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                    },
                    success: function(data) {
                        if (data.data === undefined || data.data.length === undefined)
                            return;
                        for (var i = 0; i != data.data.length; i++) {
                            addToHistory(data.data[i]);
                        }
                        loadHistoryFlow();
                    },
                    fail: function(data, textStatus) {
                        console.log('[Grata] : Getting conversation history failed');
                    },   
                    error: function(data) {
                        console.log('[Grata] : Getting conversation history Error');
                   }, timeout: 60000
                });
            }

            function loadHistoryFlow(doGetConversation) {//Update
                var offlineExtractData = (localStorage['grataHistory'] === undefined) ? this.grataCb.myHistory : localStorage['grataHistory'];
                if (this.grataCb.myHistory.length === 0 && this.grataCb.getConvDone === false) {
                    this.grataCb.getConvDone = true;
		    if (this.grataCb.orgId != 734609717975 && this.grataCb.orgId != 833581441007 && this.grataCb.orgId != 6) {
		    	this.grataCb.welcomePosted = true;
		    } else {
			postWelcomeMessage();
		    }
                    getConversation();
                }
		if (this.grataCb.myHistory.length == 0) {addAgentGreeting();$('.historyButton').remove();return;}
                offlineExtractData = this.grataCb.myHistory;
                if (offlineExtractData != null  && offlineExtractData !== []  && offlineExtractData.length > 0) {
		    if (this.grataCb.orgId != 734609717975 && this.grataCb.orgId != 833581441007 && this.grataCb.orgId != 6) {
		    	$('.chat-container').empty();
		    }
		    addAgentGreeting();
                    var offlineArray = this.grataCb.myHistory;
                    var jsonObj = this.grataCb.myHistory;
                    var date = null;
                    var dateString = null;
                    var dateRecipient = "";
                    var fakeContainer;
                    var key = 0;

                    for (var i = 0; i != jsonObj.length; i++) {
                        if (jsonObj[i].body !== undefined && jsonObj[i].body.split('class="chatboxmessagecontent')[1] !== undefined && jsonObj[i].cType !== undefined) {
			  if (jsonObj[i].body.indexOf('#ConsentGiven') > -1) {
				var consentText = (this.grataCb.localLang.indexOf("cn") === -1 && this.grataCb.localLang.indexOf("zh") === -1) ? 'You have consented to have your data stored in accordance with our <a href="https://www.dior.cn/zh_cn/legal-terms-choice2" target="_blank" class="ppcLink">privacy policy</a>. You may choose to <span class="ppcWithdrawLink">withdraw your consent</span> at any time.' : 'æ¨å·²åæ CHRISTIAN DIOR COUTUREåºäºè¯¥<a href="https://www.dior.cn/zh_cn/legal-terms-choice2" target="_blank" class="ppcLink">éç§å£°æ</a>ä¸­æè¿°çç®çå¤çæ¨çä¸ªäººæ°æ®ãæ¨ä¹å¯ä»¥éæ¶è¦æ±<span class="ppcWithdrawLink">æ¤åè¯¥ææ</span>ã';
                                jsonObj[i].body = '<div class="ppcInChatContainer">'+consentText+'</div>';
                                testAndAppend(jsonObj[i], i, '', '');
				$('.ppcWithdrawLink').unbind('click');
                                $('.ppcWithdrawLink').click(function() {
				    if ($('#ppcValue').length > 0) {
                                        $('#ppcValue')[0].checked = false
                                    }
                                    self.authorized = false;
                                    self.ppcConsentSent = false;
                                    addPPC(self.chatRef);
                                    $('.ppcContainerOff').show().css('color', 'black');
                                    $('.ppcContainer').show().css('color', 'black');
                                    $('.ppcLink').css({'color': 'steelblue', 'text-decoration':'underline'});
                                    $('.ppcInChatContainer').remove();
                                    $('#consentPage').hide();
                                    $('#backButtonId').hide();
                                });
                            } else {
                                if (jsonObj[i].cType === "text/html" || jsonObj[i].cType === "text/plain") {
                                    testAndAppend(jsonObj[i], i, 'class="chatboxmessagecontent">', '</span>');
                                } else if (jsonObj[i].cType === "image/png" || jsonObj[i].cType === "image/PNG" || jsonObj[i].cType === "image/jpeg") {
                                    testAndAppend(jsonObj[i], i, 'url(', ');');
                                } else if (jsonObj[i].cType === "audio/mpeg") {
                                    testAndAppend(jsonObj[i], i, 'src="', '">');
                                }
                            }
                        }
                    }

                    /*function getTimeStr(timestamp) {
                        var dt = new Date(timestamp);
                        var d = dt.toLocaleDateString();
                        var t = dt.toLocaleTimeString();
                        t = t.replace(/\u200E/g, '');
                        t = t.replace(/^([^\d]*\d{1,2}:\d{1,2}):\d{1,2}([^\d]*)$/, '$1$2');
                        var result;
                        if (d === Date.now()) {
                            result = t;
                        } else {
                            result = d + ' ' + t;
                        }
                        return result;
                    }*/

                    function testAndAppend(jsonObj, key, firstArg, secondArg) {
                        if (jsonObj !== undefined && jsonObj.body.split(firstArg)[1] !== undefined) {
                            if (self.historyLastMessage === jsonObj.body.split(firstArg)[1].split(secondArg)[0] || self.historyLastId === jsonObj.id) {
                                self.historyLastMessage = jsonObj.body.split(firstArg)[1].split(secondArg)[0];
                                self.historyLastId = jsonObj.id;
                            } else {
                                self.historyLastMessage = jsonObj.body.split(firstArg)[1].split(secondArg)[0];
                                self.historyLastId = jsonObj.id;
        
                                if(offlineArray.hasOwnProperty(key)) {
				    $('.messageLayout').css('padding-bottom', '0px');
				    if (jsonObj.body !== undefined && jsonObj.body.indexOf('<div class="cardContainer"') > -1) {
                                        jsonObj.body = jsonObj.body.split('<p>&nbsp;</p>').join('');
                                    }
                                    jQuery('.chat-container').append(jsonObj.body);

				    if (jsonObj.cType.indexOf('image') > -1) {
                                        var url = jsonObj.imgUrl;
                                        $("<img/>",{
                                            load : function(){
                                                self.lastImageHeight = this.height;
                                                self.lastImageWidth = this.width;
                                                if (self.lastImageHeight < 177) { 
                                                        jQuery('#message_' + jsonObj.id + ' .image').css('height', self.lastImageHeight + 'px');
                                                    }
                                                    if (self.lastImageWidth < 315) {
                                                        jQuery('#message_' + jsonObj.id + ' .image').css({'width': self.lastImageWidth + 'px'});
                                                        if (self.showDefaultLeft === false) {
                                                            jQuery('#message_' + jsonObj.id + ' .image').css({'float': 'right', 'background-position': 'right'});
                                                        }
                                                    } else {
                                                        jQuery('#message_' + jsonObj.id + ' .image').css({'width': '315px'});
                                                        if (self.showDefaultLeft === false) {
                                                            jQuery('#message_' + jsonObj.id + ' .image').css({'float': 'right', 'background-position': 'right'});
                                                        }
                                                    }
                                            },
                                            src  : url
                                        });
					if (jsonObj.origin == "remote") {
                                            jQuery('.chatboxmessage_' + jsonObj.id).css({'float': 'left'});
					    jQuery('.chatboxmessage_' + jsonObj.id + ' .chatboxmessagecontent').css({'float': 'left'});
                                        }
                                    }

				    if (self.showDefaultLeft === false) {
                        		if ($('#message_' + jsonObj.id + ' .messageLayout').height() > 21) {
                            		    $('#message_' + jsonObj.id + ' .localToLeft').css('text-align', 'left');
                        		} else {
                            		    $('#message_' + jsonObj.id + ' .localToLeft').css('text-align', 'right');
                        		}
                    		    }
				    if (self.optionRef.fontSize > 14) {$('#message_' + jsonObj.id + ' .placeNameContainer').css({'top': '-2px', 'margin-bottom': '0px', 'font-size': '14px'});}
				    if (jsonObj.origin == "remote") {$('.messageLayout').css('padding-bottom', '0px');}
                                    if (jsonObj.headers.agentAvatar != undefined && self.showDefaultLeft === false && jsonObj.headers.agentPlace === "") {
                                        $('#message_' + jsonObj.id + ' .agentNameContainer').css({'top': '17px', "height": '30px', 'margin-bottom': '12px'});
                                    }
                                    jQuery('.loadingSpinner').remove();
				    checkAgentData(jsonObj.body, jsonObj);
                                    //var offset = (self.isMobileConfig === true) ? "120px" : self.desktopBottom+"px";
				    var deskOff = self.desktopBottom + 20;
                                    var offset = (self.isMobileConfig === true) ? "120px" : deskOff+"px";
				    if (self.isMobileConfig === true && navigator.userAgent.indexOf('iPhone') > -1) {offset = "105px";}

                                    $('.messageTo, .messageFrom').css('margin-bottom', '5px');
				    var height = (jsonObj.cType === "image/png" || jsonObj.cType === "image/PNG" || jsonObj.cType === "image/jpeg") ? "unset" : "20px";
                                    if (self.showDefaultLeft === true) {height = "unset";}
				     $('#message_' + jsonObj.id).css({'margin-bottom': offset/*, 'height':height*/});
                                    //$('#message_' + jsonObj.id).css({'margin-bottom': offset});//[3 Aug 2]


                                    if (jsonObj.body !== undefined && jsonObj.body.indexOf('<div class="cardContainer"') > -1) {
                                        if (self.isMobileConfig === true) {
                                            $('#message_' + jsonObj.id).find('.cardContainer').css('margin-bottom', '35px');
                                            $('#message_' + jsonObj.id).find('.cardImageContainer').addClass('cardMobileAttr');
                                        } else {
                                            $('#message_' + jsonObj.id).css('margin-bottom', "40px");
                                        }
					if ($('#message_' + jsonObj.id).find('.cardLinkText a')[0] !== undefined) {
						var theLink = $('#message_' + jsonObj.id).find('.cardContainer a')[0].href;
                                       		$('#message_' + jsonObj.id).find('.cardContainer').click(function(e) {
                                            		var urlFull = $('#message_' + jsonObj.id).find('.cardLinkText').text().replace(new RegExp("amp;", 'g'), "");
                                            		window.open(/*'http://' + $('#message_' + jsonObj.id).find('.cardLinkText').text()*/theLink, '_blank');
                                        	});
					} else {
                                        var theLink = $('#message_' + jsonObj.id).find('.cardLinkText').text();
                                        $('#message_' + jsonObj.id).find('.cardContainer').click(function(e) {
                                                var urlFull = $('#message_' + jsonObj.id).find('.cardLinkText').text().replace(new RegExp("amp;", 'g'), "");
                                                window.open(/*'http://' + $('#message_' + jsonObj.id).find('.cardLinkText').text()*/theLink, '_blank');
                                        });
                                    }
                                        var myEl = $('#message_' + jsonObj.id).find('.cardLinkText')[0].innerText;
                                        if (myEl.indexOf('www') === -1 && myEl.indexOf('http') === -1) {
                                            $('#message_' + jsonObj.id).find('.cardLinkText').hide();
                                        } else {
                                            var urlFull = $('#message_' + jsonObj.id).find('.cardLinkText').text();
                                            if (urlFull !== undefined && urlFull !== null && urlFull !== "")
                                                $('#message_' + jsonObj.id).find('.cardLinkText').text(urlFull/*.split('://')[1].split('/')[0]*/);
                                        }
                                    }

                                    //Make image from history clickable
                                    if (jsonObj.body !== undefined && jsonObj.body.indexOf('<div class="chatboxmessagecontent image"') > -1) { 
                                        $('#message_' + jsonObj.id).click(function () {
                                            window.open($('#message_' + jsonObj.id).find('.image')[0].style.backgroundImage.split('url("')[1].split('")')[0], '_blank');
                                        });
					var url = $('#message_' + jsonObj.id).find('.image')[0].style.backgroundImage.split('url("')[1].split('")')[0];
                                        /*$("<img/>",{
                                            load : function(){
                                                self.lastImageHeight = (this.height > 250) ? null : this.height;//this.height;
                                                //setTimeout(function() {
                                                    jQuery('#message_' + jsonObj.id).css('height', self.lastImageHeight + 'px');
                                                //}, 2000);
                                            },
                                            src  : url
                                        });*/
                                    }
        
				     if (jsonObj.headers.agentAvatar == null || jsonObj.headers.agentAvatar == undefined || jsonObj.headers.agentAvatar == "") {
                                        if (jsonObj.headers.agentName == undefined || jsonObj.headers.agentName == null || jsonObj.headers.agentName == "") {
					    if (jsonObj.headers.agentPlace == undefined || jsonObj.headers.agentPlace == null || jsonObj.headers.agentPlace == "") {
                                                $('#message_' + jsonObj.id).find('.chatTopPart').show();
						$('#message_' + jsonObj.id).find('.chatTopPartImage').hide();
                                                $('#message_' + jsonObj.id).find('.chatTopPart').css({'position': 'relative', 'margin-left': '-5px'});
                                            } else {
                                                $('#message_' + jsonObj.id).find('.chatTopPart').hide();
                                                $('#message_' + jsonObj.id).find('.chatTopPart').css({'position': 'relative', 'left': '-14px'});
                                            }
                                        } else {
                                            $('#message_' + jsonObj.id).find('.chatTopPart').css({'position': 'relative', 'margin-left': '-5px'});
                                        }
                                    }

	                             dateRecipient = new Date(jsonObj.timestamp);//timestamp
                                    dateRecipient = dateRecipient.toString().replace(" CST", "");
                                    dateRecipient = dateRecipient.toString().replace(" HKT", "");
        
                                    date = new Date(dateRecipient);
                                    dateString = getTimeStr(dateRecipient);
                                    //dateString = dateString.split('/')[0] + '/' + dateString.split('/')[1] + ' ' + dateString.split(' ')[1] + ' ' + dateString.split(' ')[2];
                                    //dateString = date.toLocaleString().split("/")[0] + "/" + date.getUTCDate() + " " + date.getHours() + ":" + date.getMinutes();
                                    
				    var testDate = new Date(jsonObj.timeMs);
				    var theHours = (testDate.getHours().toString().length <= 1) ? '0'+testDate.getHours() : testDate.getHours();
                                    var theMins = (testDate.getMinutes().toString().length <= 1) ? '0'+testDate.getMinutes() : testDate.getMinutes();
                                    testDateString = theHours + ":" + theMins;
                                    //testDateString = testDate.getHours() + ":" + testDate.getMinutes();
                                    jQuery('#message_' + jsonObj.id + ' .messageTime').text(testDateString);

				    jQuery('#message_' + jsonObj.id + ' .messageTime').text(testDateString);
                                    jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                                }
                            }
                        }
                    }
                    jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                } else {
                    $('.historyButton').remove();
                }
                jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
            }

            jQuery('#btnSender').unbind('click');
            jQuery('#btnSender').click(function() {
		if (/*self.accessCode == "6" || */self.accessCode == "205250481355" || self.accessCode == "122125966570" || self.accessCode == "023258393135") {
		  if (self.ppcOffConsent != true) {
		    $('.ppcContainer').show().css('color', 'red');
                    $('.ppcLink').css({'color': 'red', 'text-decoration':'underline'});
                    return;
                  }
		}
		var params = {
                    email: jQuery('.inputGrataEmail').val(),
                    name: jQuery('.inputGrataName').val(),
                    message: jQuery('.inputGrataMessage').val(),
                    phone: jQuery('.inputGrataPhone').val(),
                    subject: 'Grata Website Visitor'
                };


                var nameError = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Please enter your name" : "è¯·è¾å¥æ¨çå§å";
                var mailError = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Please enter a valid email address" : "è¯·å¡«åææçé®ç®±å°å";
                var phoneError = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Please enter a valid phone number" : "è¯·å¡«åææççµè¯å·ç ";
                var messageError = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Please enter a message" : "è¯·è¾å¥æ¨ççè¨";


                if (params.name.length === 0 || params.name === yourName || params.name === "" || params.name.indexOf('<script') > -1  || params.name.indexOf("<style") > -1 || params.name.indexOf("<img") > -1) {
                    $('.inputGrataName').css("border-color", "#f56f6f");
                    $('.inputNameErrorText').text(nameError);
                    $('.inputNameError').show();
                } else {
                    $('.inputGrataName').css("border-color", "darkgrey");
                    $('.inputNameError').hide();
                }

		if (params.message.length === 0 || params.message === message || params.message === ""  || params.message.indexOf('<script') > -1 || params.message.indexOf("<style") > -1 || params.message.indexOf("<img") > -1) {
                    $('.inputGrataMessage').css("border-color", "#f56f6f");
                    $('.inputMessageErrorText').text(messageError);
                    $('.inputMessageError').show();
                } else {
                    $('.inputMessageError').hide();
                    $('.inputGrataMessage').css("border-color", "darkgrey");
                }

		if (checkXSS(params) == false) {return;}

                if (self.optionRef.offlineRequire === "phone") {
                    if (checkPhone() !== true) {return;}
                } else if (self.optionRef.offlineRequire === "email") {
                    if (checkMail() !== true) {return;}
                } else if (self.optionRef.offlineRequire === "both") {
                    if (checkPhone() !== true || checkMail() !== true) {return;}
                } else {
                    if (checkMail() === false && checkPhone() === false) {return;}
                }

		$('.inputEmailErrorText, .inputPhoneErrorText, .inputMessageErrorText, .inputNameErrorText').text("")
                $('.inputGrataName, .inputGrataMessage, .inputGrataEmail, .inputGrataPhone').css("border-color", "darkgrey");

		function checkXSS(params) {
                    var ret = true;
                    if (params.name.toLocaleLowerCase().indexOf('<script') > -1 || params.name.toLocaleLowerCase().indexOf("<style") > -1 || params.name.toLocaleLowerCase().indexOf("<img") > -1) {
                        $('.inputGrataName').css("border-color", "#f56f6f");
                        $('.inputNameErrorText').text(nameError);
                        $('.inputNameError').show();
                        ret = false;
                    }
                    if (params.message.toLocaleLowerCase().indexOf('<script') > -1 || params.message.toLocaleLowerCase().indexOf("<style") > -1 || params.message.toLocaleLowerCase().indexOf("<img") > -1) {
                        $('.inputGrataMessage').css("border-color", "#f56f6f");
                        $('.inputMessageErrorText').text(messageError);
                        $('.inputMessageError').show();
                        ret = false;
                    }
                    if (params.email.toLocaleLowerCase().indexOf('<script') > -1 || params.email.toLocaleLowerCase().indexOf("<style") > -1 || params.email.toLocaleLowerCase().indexOf("<img") > -1) {
                        $('.inputGrataEmail').css("border-color", "#f56f6f");
                        $('.inputEmailErrorText').text(mailError);
                        $('.inputEmailError').show();
                        ret = false;
                    }
                    if (params.phone.toLocaleLowerCase().indexOf('<script') > -1 || params.phone.toLocaleLowerCase().indexOf("<style") > -1 || params.phone.toLocaleLowerCase().indexOf("<img") > -1) {
                        $('.inputGrataPhone').css("border-color", "#f56f6f");
                        $('.inputPhoneErrorText').text(phoneError);
                        $('.inputPhoneError').show();
                        ret = false;
                    }
                    return ret;
                }

                function checkMail() {
                    if (!validateEmail(params.email) || params.email === yourAddress || params.email === "" || params.email.toLocaleLowerCase().indexOf('<script') > -1  || params.email.toLocaleLowerCase().indexOf("<style") > -1 || params.email.toLocaleLowerCase().indexOf('<img') > -1) {
                        $('.inputGrataEmail').css("border-color", "#f56f6f");
                        $('.inputEmailErrorText').text(mailError);
                        $('.inputEmailError').show();
                        return false;
                    } else {
                        $('.inputGrataEmail').css("border-color", "darkgrey");
                        $('.inputEmailError').hide();
                        return true;
                    }
                }

                function checkPhone() {
                    if (!validatePhone(params.phone) || params.phone === yourPhone || params.phone === "" || params.phone.length < 9 || params.phone.toLocaleLowerCase().indexOf('<script') > -1 || params.phone.toLocaleLowerCase().indexOf("<style") > -1 || params.phone.toLocaleLowerCase().indexOf("<img") > -1) {
                        $('.inputGrataPhone').css("border-color", "#f56f6f");
                        $('.inputPhoneErrorText').text(phoneError);
                        $('.inputPhoneError').show();
                        return false;
                    } else {
                        $('.inputGrataPhone').css("border-color", "darkgrey");
                        $('.inputPhoneError').hide();
                        return true;
                    }
                }

                function validatePhone(phone) {
                    re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
                    return re.test(phone);
                }

                $('.mailStatus').html('Sending...');
                $.ajax({
                    url: 'https://' + self.apiPrefix + 'api.'+self.chatDomain+'/connect-api/organization/sendWebchatEmail.jsn?access='+self.orgId,
                    type: 'post',
                    data: params,      
		    xhrFields: {'withCredentials': true},
                                crossDomain: true,
                    beforeSend: function (request) {
				if (self.chatDomain.indexOf('grata') > -1) {
                                  //request.setRequestHeader("withCredentials", true);
                                  //request.setRequestHeader("crossDomain", true);
                                } else {
                                  request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                                }
                        //request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                    },                
                    success: function(data) {
                        var response = JSON.parse(data);
                        if(response.success == true) {
                            $('.mailStatus').addClass('success'); 
                            $('.mailStatus').html('Message Sent');
                        } else {
                            $('.mailStatus').addClass('mailFailed'); 
                            $('.mailStatus').removeClass('success'); 
                            $('.mailStatus').html('Message Failed to Send');
                        }
                        var textThanks = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Thank You!" : "è°¢è°¢!";
                        var textWill = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.chatMessageOfflineMessageEn : self.optionRef.chatMessageOfflineMessageCn;
                        var closeButton = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Close" : "å³é­";

                        $('.chat-title').text(textThanks);
                        $('.form-container').empty();
                        $('.form-container').append('<div class="formValidatedContainer"><i class="fa fa-check-circle-o checkFormIcon"></i><div class="formValidatedTextContainer"><div class="formValidatedFirstText"><i class="fal fa-check-circle formIconCheck"></i></div><div class="formValidatedTextTwo"><span>' + textWill + '</span></div></div><div id="formCloseHit" class="formCloseButton unselectable"><span>' + closeButton + '</span></div></div>');
			$('.formValidatedTextTwo').css('font-size', self.optionRef.fontSize + 'px');
			if (self.localLang.indexOf("cn") > -1 || self.localLang.indexOf("zh") > -1) {
                            $('.formCloseButton').css('padding-bottom', '6px');
                        }
                        $('.formIconCheck').css('color', self.colorHeader);
                        $('.formCloseButton').css({"border-color": "white", "color": "white", "background-color": self.colorHeader});

                        $('.formCloseButton').hover(function() {
                            $('.formCloseButton').css({"border-color": self.colorHeader, "color": self.colorHeader, "background-color": "white"});
                            $('.formCloseButton').mouseout(function() {
                                $('.formCloseButton').css({"border-color": "transparent", "color": "white", "background-color": self.colorHeader});
                            });
                        });
                        $('#formCloseHit').click(function() {
                            /*$('#chat-top').click();
                            $('.form-container').empty();
                            $('#window_chat').remove();
                            $('#window_chat').remove();
			    self.displayWindow(true);
                            //self.displayWindow(false);*/
                            (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
                        });
                    }
                });//end ajaxx
            });//end btnSender listenner

            self.statusInterval = setInterval(function(){
               var onlineStatus = self.getOnlineStatus();
            },120000);//15000
}

function appendConsentPage(Chat) {
    var self = this.grataCb;

    /*if (self.authorized == false) {
        return;
    }*/
    if ($('#consentPage').length > 0) {return;}

    var withdrawButtonText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Reject" : "æç»";
    var consentButtonText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Accept" : "åæ";
    var policyContent = "<br><br>Privacy Policy <br><br><br>Last modified 30 October 2019.â¨Â â¨<br><br>This Privacy Policy explains how Beijing Li An Innovation Software Co., Ltd., and its parent companies NBJ Systems Limited and Time Machine Ventures, hereafter referred to collectively asÂ Grata, use and store information we collect as you and your customers use Grata and interact with our company.â¨Â <br><br>â¨All interactions and information collected from the use of Grata products are treated as sensitive and confidential.â¨Â <br><br><br>Information Grata collects<br>If you contact Grata or register a Grata account, Grata will collect and store your name, email address, username, organization name, the contents of your communication, and other contact information you provide.";

    if (self.orgId == "205250481355" || self.orgId == "023258393135") {
        policyContent = "<b>éç§å£°æ - CHRISTIAN DIOR<br><br><br>æ¬ä¸ªäººä¿¡æ¯ä¿æ¤æ¿ç­ï¼ä»¥ä¸ç®ç§°âéç§æ¿ç­âï¼éç¨äºç±å°åçµå­åå¡(ä¸æµ·)æéå¬å¸ãè·¯å¨é©è½©é¦æ°´åå¦åï¼ä¸æµ·ï¼æéå¬å¸ç»è¥çParfums Christian Diorä»¥åç±åä¸½ä¸æ±è¿ªå¥¥ç»è¥çChristian Dior Coutureï¼ä»¥ä¸ç»ç§°ä¸ºâDiorâæâæä»¬âï¼å¨æ¨è®¿é®ãæµè§æä½¿ç¨Diorå®æ¹ç½ç«www.dior.cnï¼ä»¥ä¸ç®ç§°âç½ç«âï¼æéè¿ç½ç«ä¸æ¨äºå¨æ¶ææ¶éçææä¸ªäººä¿¡æ¯ãè¯·éè¯»ä»¥ä¸éç§æ¿ç­ï¼ä»¥äºè§£æ¨åæä»¬æä¾åå±äº«çä¸ªäººä¿¡æ¯ãæä»¬å°å¦ä½æ¶éãä½¿ç¨ãä¿å­å¹¶ä¿æ¤æ¨æä¾ç»æä»¬çä¸ªäººä¿¡æ¯ãæ¨å¦ä½ç®¡çè¯¥ç­ä¸ªäººä¿¡æ¯ä»¥åå¦ä½ä¸æä»¬å°±ä¸ªäººä¿¡æ¯è¿è¡èç³»ãéè¿è®¿é®æ¬ç½ç«æä½¿ç¨æä»¬çä»»ä¸æå¡ï¼å³è¡¨ç¤ºæ¨ååçè§£ååææ¥åæ¬éç§æ¿ç­çå¨é¨åå®¹ï¼å¹¶ä¸ä¿¡èµæä»¬å¯¹æ¨æä¾å¹¶å±äº«çä¸ªäººä¿¡æ¯çä½¿ç¨åå¤çæ¹å¼ãDiorå°éæ¨çéç§ï¼å¹¶å°å°½åç¡®ä¿æ¨çä¸ªäººä¿¡æ¯å¾å°å¦¥åä¿æ¤ã</b><br><br>æ¬éç§æ¿ç­è¯¦ç»æè¿°äºDioræ¶éåä½¿ç¨ä¸ªäººä¿¡æ¯çæ¹å¼ï¼ä»¥åæ¨å¯¹ä¸ªäººä¿¡æ¯æäº«æçæå©ãÂ <br>å æ­¤ï¼ä¸ºäºå°éåä¿æ¤ç½ç«ç¨æ·ï¼ä»¥ä¸ç®ç§°âç¨æ·âï¼çéç§ï¼Dioræ¿è¯ºå¨ç½ç«åæ¶éåå¤ççä¿¡æ¯åéµå®ææéç¨äºä¸ªäººä¿¡æ¯ä¿æ¤çæ³å¾åæ³è§çæå³è¦æ±ã<br><br>æ¬éç§æ¿ç­æ¯ç½ç«ä¸è¬ä½¿ç¨æ¡æ¬¾çè¡¥åé¨åï¼æ¨å¯ä»¥éè¯»è¯¥æ¡æ¬¾ä»¥äºè§£ä¸ç½ç«ä½¿ç¨æå³çæ´å¤ä¿¡æ¯ã<br>æ¡æ¬¾1 - ææ¶éæ°æ®èå´åæ¹å¼<br><b>Diorå¯è½ä¼æ¶éåå¤çæå³æ¨çä»¥ä¸ä¿¡æ¯ï¼è¿è¡ä»¥ä¸æ¡æ¬¾2ä¸­ææè¿°çç¨éï¼å¹¶ä¸æ¯ä¸ºäºåæ¨æä¾æå¡æå¿éãè¿äºåæ¯æ¨èªæ¿æä¾çä¿¡æ¯ï¼</b><br><br>- èç»ä¿¡æ¯ï¼åæ¬å§åãå°åãçµè¯å·ç æçµé®å°åï¼<br>- æ¯ä»ä¿¡æ¯ï¼<br>- æ¨å¨å¬å¼åºåãææä»¬çç¤¾äº¤åªä½é¡µé¢ãææä»¬çç½ç«ä¸åè¡¨çå¬å¼ä¿¡æ¯ï¼ä¾å¦å¯¹æä¸äº§åçè¯è®ºï¼<br>- äººå£ç»è®¡ä¿¡æ¯ï¼ä¾å¦æ¨çæ§å«ä»¥åçæ¥ï¼<br>- æ¨çè´­ä¹°ä¿¡æ¯ï¼åæ¬æ¨æè´­ä¹°çäº§ååå¶ä»·æ ¼ã<br>- æ¨è®¿é®æ¬ç½ç«çè¯¦ç»ä¿¡æ¯ï¼åæ¬æµéæ°æ®ã ä½ç½®æ°æ®ã ç½ç»æ¥å¿ä¸å¶ä»éä¿¡æ°æ®ï¼ä»¥åæ¨çï¼<br><br>- è®¾å¤ä¿¡æ¯ï¼æä»¬ä¼æ ¹æ®æ¨å¨è½¯ä»¶å®è£å/æä½¿ç¨ä¸­æäºçå·ä½æéï¼æ¥æ¶å¹¶è®°å½æ¨æä½¿ç¨çè®¾å¤ç¸å³ä¿¡æ¯ï¼è®¾å¤åå·ãæä½ç³»ç»çæ¬ãè®¾å¤è®¾ç½®ãå¯ä¸è®¾å¤æ è¯ç¬¦ãè®¾å¤ç¯å¢ä¿¡æ¯ï¼ãè®¾å¤æå¨ä½ç½®ç¸å³ä¿¡æ¯ï¼IP å°åãGPSä½ç½®ä»¥åè½å¤æä¾ç¸å³ä¿¡æ¯çWLANæ¥å¥ç¹ä¼ æå¨ä¿¡æ¯ï¼ãå¦ææ¨å¨å®è£å/æä½¿ç¨è¿ç¨ä¸­æç»æäºæä»¬ç¸åºæéçï¼æä»¬å¹¶ä¸ä¼è®°å½æ¨ä¸è¿°å¯¹åºçä¿¡æ¯ã<br><br>â¨- æå¡æ¥å¿ä¿¡æ¯ï¼å½æ¨ä½¿ç¨æä»¬çç§»å¨åºç¨æä¾çäº§åææå¡æ¶ï¼åºäºæ°æ®ç»è®¡ãæå³å¹¿ååè¥éææè¯ä¼°ç®çï¼æä»¬ä¼æ¶éæ¨å¯¹æä»¬æå¡çè¯¦ç»ä½¿ç¨æåµï¼åæ¬æç´¢æ¥è¯¢åå®¹ãIPå°åãæµè§å¨çç±»åãçµä¿¡è¿è¥åãä½¿ç¨çè¯­è¨ãè®¿é®æ¥æåæ¶é´åæ¨è®¿é®ãæµè§ãåçãä¸åæä½çç½é¡µè®°å½ã<br><br>â¨- å¶ä»ç³»ç»åè®¾å¤æéä¿¡æ¯ï¼æä»¬ä¼å¨æ¨å¼å¯è½¯ä»¶åå/æä½¿ç¨ä¸­åæ¨ç³è¯·æäºçå·ä½è®¾å¤åç³»ç»æéï¼å¹¶åç¥æ¨ç¸åºçä½¿ç¨ç®çãå¦ææ¨æç»æäºæä»¬ç¸åºæéçï¼æä»¬å¹¶ä¸ä¼è®°å½æ¨å¯¹åºçä¿¡æ¯ã<br><br><br>â¨<b>å¨ä¸åçæåµä¸ï¼Diorä¼è¦æ±æ¨æä¾æ¨çä¸ªäººèµæ:</b><br>-å¨ç½ç«å»ºç«ä¸ä¸ªè´¦æ·æè¦æ±è®¢éæä»¬çéè®¯èç»è®°æ¨çä¸ªäººèµæï¼<br>-è´­ä¹°äº§åï¼<br>-åä¸æ¨å¹¿æ´»å¨æç½ç«æä¾çå¶ä»åè½ï¼<br>-è¦æ±è·åäº§åç®å½ï¼<br>-è¦æ±æ¥æ¶ä»»ä½ä¿éã æ¨å¹¿æå¶ä»ç±»åçéä¿¡ï¼<br>-éè¿æä»¬çå®¢æ·å³ææå¡ä¸­å¿ä½åºæ¥è¯¢ææåºæè§ã<br>-å½æ¨éè¿ç½ç«çâèä¸çæ¶¯âé¡µé¢ï¼ä»¥ä¸ç®ç§°âæ±èé¡µé¢âï¼åºèè¿ªå¥¥çå·¥ä½å²ä½æ¶ï¼æä»¬ä¹ä¼æ¶éä¸æ¨ç¸å³çä¸ªäººä¿¡æ¯ã<br><br>æ¡æ¬¾2 - ææ¶éæ°æ®çç¨é<br>è¿ªå¥¥å°è´è´£å¯¹ææ¶éçä¿¡æ¯è¿è¡èªå¨åå¤çï¼ä¸»è¦ç¨äºï¼<br>-ä½¿æä»¬æ´æ¸æ¥å°äºè§£æ¨çå´è¶£ã å³æ³¨ååå¥½ï¼<br>-åç¨æ·åéä¿¡æ¯ï¼ç¹å«æ¯ç½ç«ççµå­éè®¯åä¿éä¿¡æ¯ï¼åæ¬ç±è·¯å¨é©è½©é¦æ°´åå¦åï¼ä¸æµ·ï¼æéå¬å¸å\/æåä¸½ä¸æ±è¿ªå¥¥åä¸ï¼ä¸æµ·ï¼æéå¬å¸åéçåå¦åãé¦æ°ãç®å·ãæ¶è£ç­äº§åçåºéºå¼ä¸ãäº§ååå¸ãæ´»å¨ã ç½ç«ååã æå¡æ´æ°ã ç¹å«äº§åä¸æ¨å¹¿ä¿éç­ä¿¡æ¯ï¼<br>â¨-å¨ä¿¡æ¯åéå¤±è´¥çæåµä¸ä¸ç¨æ·åå¾èç³»ï¼<br>-å¤çéè¿ç½ç«å®æçè®¢åï¼<br>-å°±æ¨çè´­ä¹°ãè´¦æ·ä¿¡æ¯æå®¢æ·å³ææå¡éæ±èä¸æ¨æ²éå/ææ´å¥½å°åç­æ¨çå®¢æ·å³ææå¡æ¥è¯¢ï¼æåæ¨æä¾æ¨è¦æ±çæå¡ï¼<br>-è¿è¡å¿åç»è®¡ååæç­æ´»å¨ï¼<br>â¨-å²ä½æèï¼æ±èé¡µé¢ï¼ã<br>æä»¬å¯è½éè¿çµè¯ä»¥åæ¨æä¾ç»æä»¬ççµå­é®ä»¶å°åææ¨æä¾ç»æä»¬çå¶å®ä»»ä½èç»æ¹å¼å°±ä¸è¿°ç®çä¸æ¨èç»ã<b>å¦ææ¨ä¸æ¿ææ¶å°è¿äºçµå­é®ä»¶æä¸æ¿æè¿è¡ä¸è¿°èç³»ï¼æ¨åªéæç§æ¨æ¶å°çä¿¡æ¯ä¸­çåæ¶è®¢éæç¤ºï¼Â ææç§ä¸ææ¡æ¬¾7çèç»æ¹å¼ä¸æä»¬èç»ã</b><br>æ¡æ¬¾3 - æ°æ®ä¿å­æé<br><br>ç½ç«ä¼å°æ¶éçæ°æ®ä¿å­ä¸æ®µæ¶é´ï¼è¯¥æéä¸ä¼è¶è¿ææ¶éæ°æ®çç¨éæéçæéã<br>æ¡æ¬¾4 - æ°æ®æ¥æ¶æ¹<br><br>ä¸ºäºä¸è¿°æ¡æ¬¾2æè¿°çç®çï¼æä»¬å¯è½ä¼ä¸ä½äºä¸­å½å¤§éå¢åæå¢å¤çå³èå¬å¸åäº«æ¨çä¸ªäººä¿¡æ¯ãå¦å¤ï¼ä¸ºäºè¿è¥æ¬ç½ç«ææä¾æå¡ï¼æä»¬è¿å¯è½å°æ¨çä¸ªäººä¿¡æ¯å¨å¿è¦èå´åæä¾ç»æä»¬çåä½ä¼ä¼´ãæå¡æä¾åãä¾è´§åä»¥åå¶ä»æ¯ææåå©æä»¬æä¾ç¸å³äº§ååæå¡çç¬¬ä¸æ¹ï¼æ è®ºå¶ä½äºä¸­å½å¤§éå¢åæå¢å¤ã<br><br>å¦å¤ï¼å¦ææä»¬è®¤ä¸ºï¼ä¸ºæ§è¡æä»¬çæå¡æ¡æ¬¾æä¸ºä¿æ¤å¦ä¸Diorçå®¢æ·ãå¬ä¼æDiorçæå©ãè´¢äº§æäººèº«å®å¨ï¼æå¿è¦æ«é²æ¨çä¸ªäººèµæï¼æä»¬å°æ«é²æ¨çä¸ªäººèµæã<br><br>è¯·æ³¨æï¼æä»¬äº¦å¯ä»¥ä½¿ç¨æµ·å¤è®¾æ½å¤çæå¤ä»½èµæãå æ­¤ï¼æä»¬å¯è½å°æ¨çä¸ªäººèµæè½¬ç§»å°æä»¬çæµ·å¤è®¾æ½ä½å­å¨ãä½æ¯ï¼è¿æ ·åå¹¶ä¸ä¼æ¹åæä»¬å¯¹ä¿æ¤æ¨çéç§ææä½çæ¿è¯ºã<br><br>é¤æ¬éç§æ¿ç­å¦è¡è§å®ä»¥å¤ï¼ æä»¬åªä¼å¨ä¸åçæåµä¸æªç»æ¨åè®¸èæ«é²ç¹å®çèµæï¼å æ³å¾è¦æ±èæ«é²è¯¥ç­èµæï¼æèï¼æä»¬è¯å®å°è®¤ä¸ºï¼ä¸ºè°æ¥éå¯¹æä»¬çå®¢æ·ãä½¿ç¨èãå³èæ¹æè´¢äº§ï¼åæ¬æ¬ç½ç«ï¼æä»äººæè¿è¡çå¯çåäºæ´»å¨ï¼æä¸ºç¡®ä¿å¶ååè¯¥ç­æ´»å¨çæå®³ï¼æå¿è¦æ«é²è¯¥ç­èµæã<br><br>æä»¬éè¿æ¥å¥ç¬¬ä¸æ¹ä»£ç ãæä»¶ãæ¥å£çæ¹å¼å°ä¸ªäººä¿¡æ¯ä¼ è¾è³ç¬¬ä¸æ¹çæå½¢è¯´æå¦ä¸ï¼<br>æ¡æ¬¾5 - æ°æ®å®å¨ä¸ä¿å¯<br>Diorå·²éç¨äºå¤ç§ææé¢é²æªæ½ï¼ä»¥å°½åç¡®ä¿ææ¶éä¸ªäººä¿¡æ¯çä¿å¯åå®å¨ï¼å¹¶é²æ­¢ä¿¡æ¯ç¯¡æ¹ãæ¯æãä¸¢å¤±æè¢«æªç»ææçç¬¬ä¸æ¹è®¿é®ã<br>ä½æ¯ï¼ æ¬ç½ç«çä½¿ç¨èé¡»æ³¨æï¼ ç±äºäºèç½çå¼æ¾æ§è´¨ï¼ æä»¬æ æ³ä¿è¯æä»¬æå¡å¨ä¸å­å¨çã æå¨ä½¿ç¨èä¹é´ä¼ éçæ¨çä»»ä½ä¸ªäººèµæä¸ä¼è¢«æªè·åè®¸å°æ¥éï¼ å¹¶ä¸ï¼ æä»¬å£°æï¼ Â å¦æä»»ä½æ°æ®æéä¿¡è¢«ççªæä¸¢å¤±ã æªè·åè®¸å°è¢«æ¥éæåæï¼ æè¢«æªåï¼ æä»¬å¯¹æ­¤ä¸æ¿æä»»ä½è´£ä»»ã éè¿ä½¿ç¨æ¬ç½ç«ï¼ å³è¡¨ç¤ºæ¨ç¡®è®¤æ¨çè§£å¹¶åææ¿æè¿äºé£é©ã<br><b>é¤éäºååå¾æ¨çåæï¼Â å¦åï¼Â æä»¬ä¸ä¼åä¸æç¬¬4æ¡æè¿°çä»»ä½ç¬¬ä¸æ¹åºç§ãÂ äº¤æãÂ ååæåºå®æ¨æä¾ç»æä»¬çä»»ä½ä¸ªäººèµæã</b><br>æ¡æ¬¾6 - COOKIES/ æ°æ®ç»è®¡<br>6.1 - Cookies<br>å¯¹äºæ¬ç½ç«çä½¿ç¨èï¼è¯·æ³¨æï¼æä»¬å¯ä»¥å¨æ¨çè®¡ç®æºä¸å­å¥âcookiesâï¼ä»¥ä¾¿å¯¹æ¨è¿è¡è¯å«ã Cookiesæ¯æå¨æµè§æé´ä»ä¸ä¸ªæå¡å¨è®¡ç®æºä¸åéçå°åæ°æ®ææ¬æ¡£æ¡ãCookieséå¸¸å¨å­å¨è®¡ç®æºç¡¬çä¸ï¼ç½ç«ç¨ cookies æ¥æ¨¡æä¸ç½ç«ä¹é´çæç»­è¿æ¥ãæä»¬å·²ç»éåäºç¸å³çå®å¨æªæ½ï¼ä»¥é²æ­¢æªè·åè®¸å°æ¥éç¨æ·çæ°æ®ãä½æ¯ï¼ ç¨æ·ç¡®è®¤ï¼ Diorå¹¶ä¸è½æ§å¶çµå­éä¿¡è®¾æ½ï¼ åæ¬äºèç½ï¼ ä¸çæ°æ®è½¬ç§»ãå æ­¤ï¼Diorä¸ä¼å°±äºèç½ä¸åççè¯¥ç­æ°æ®çå®å¨æ¼æ´ææªè·åè®¸çæ«é²æä½¿ç¨æ¿æä»»ä½è´£ä»»ãæ¨å¯ä»¥å°æ¨çæµè§å¨è®¾ç½®ææç»æ¥å cookiesï¼ä½è¿æ ·åå¯è½ä¼ä½¿æ¨æ æ³ååå©ç¨æ¬ç½ç«ä¸çæå¡ã<br><br>6.2 - æ°æ®ç»è®¡<br>ä¸ºäºä½¿ç½ç«çåå®¹ä¸æå¡è½å¤æ´è´´åç¨æ·éæ±ï¼ Diorä¼ç»è®¡ç¨æ·çæµè§æ¬¡æ°ãè®¿é®é¡µé¢æ°éãç½ç«æµè§æ´»å¨ä»¥ååè®¿é¢çãä¸ºäºå®ææ­¤ç±»è®¿é®åæï¼ Diorä¼ä½¿ç¨ä¸åçåæå·¥å·ãè¯¥å·¥å·å¯ç¨æ¥åæç½ç«çè®¿é®ç¶åµã<br><br>æ¡æ¬¾7 - å­åãæç»åä¿®æ¹çæé<br><br>æ¨æææ¥éãæ´æ­£ãä¿®æ¹ï¼åºäºåæ³ç®çï¼æåå¯¹ä¸æ¨ä¸ªäººä¿¡æ¯æå³çå¤çæä½ãå¦ææ¨éè¦æ¥éãæ´æ­£ãä¿®æ¹ï¼åºäºåæ³ç®çï¼æ¨çä¸ªäººä¿¡æ¯ï¼æ¨å¯ä»¥Diorå®ç½ï¼www.dior.cnï¼æèéè¿Diorå®¢æä¸­å¿è¿è¡ãå¦ææ¨éè¦å é¤æ¨çä¸ªäººä¿¡æ¯ï¼æ¨å¯èç»ä»¥ä¸ç¸å³é¨é¨ï¼ä»¥è¡ä½¿è¿é¡¹æå©ï¼é¤éæä»¬å æ³å¾åå èéè¦ä¿å­è¯¥ç­èµæï¼<br>Diorå®¢ææå¡ä¸­å¿ï¼ 4009218833ï¼éç¨äºè·¯å¨é©è½©é¦æ°´åå¦åï¼ä¸æµ·ï¼æéå¬å¸ï¼æ4001226622ï¼éç¨äºåä¸½ä¸æ±è¿ªå¥¥åä¸ï¼ä¸æµ·ï¼æéå¬å¸ã<br><br><b>è¯·çè§£ï¼ä¸ºé²æ­¢ååï¼å¨æä½æ¨çä¸ªäººä¿¡æ¯åæä»¬éè¦æ ¸å®æ¨çèº«ä»½ãä¸æ¦æ ¸å®æä»¬å°å¨åççæéååå¤æ¨çè¯·æ±ã</b>æ¡æ¬¾8 - ç´æ¥è¥é<br><br>æä»¬ææä½¿ç¨æ¨çä¸ªäººä¿¡æ¯åæ¨åéæå³æä»¬äº§ååæå¡çæ´»å¨ãç¹å«äº§ååè¥éèµæãæä»¬å¯è½ä¸ºç´æ¥ä¿éçç®çï¼ä¸æä»¬æä¾ä¸è¿°äº§ååæå¡çå³èå¬å¸ãåä½ä¼ä¼´ãæå¡æä¾åæå¶ä»æ¯ææèåå©æä»¬æä¾ç¸å³äº§ååæå¡çç¬¬ä¸æ¹ï¼æ è®ºä½äºä¸­å½å¤§éå¢åæå¢å¤ï¼åäº«æ¨çä¸ªäººä¿¡æ¯ã<b>æ¨å¯¹æ¬éç§æ¿ç­çæ¥åä¹åæ¬äºæ¨åææ ¹æ®æ¬éç§æ¿ç­éè¿çµè¯ãä¿¡ä»¶ãçµå­é®ä»¶ãç­è®¯åå¤åªä½è®¯æ¯ãç¤¾äº¤ç½ç»åå³æ¶éè®¯æ¥æ¶æ¥èªæä»¬ï¼åæ¬è·¯å¨é©è½©é¦æ°´åå¦åï¼ä¸æµ·ï¼æéå¬å¸å/æåä¸½ä¸æ±è¿ªå¥¥åä¸ï¼ä¸æµ·ï¼æéå¬å¸ï¼ä»¥åæä»¬çåä½ä¼ä¼´åéçè¥éä¿¡æ¯ã</b>å¦ææ¨ä¸å¸ææä»¬ä»¥è¿ç§æ¹å¼ä½¿ç¨æ¨çä¸ªäººä¿¡æ¯æä¸ºäºä¿éç®çä¸ç¬¬ä¸æ¹åäº«æ¨çä¸ªäººä¿¡æ¯ï¼è¯·æç§ä¸è¿°æ¡æ¬¾7æä¾çèç»æ¹å¼ä¸æä»¬åå¾èç³»ã<br><br>æ¡æ¬¾9 - å¬å¸æ§å¶æåæ´æ¶çæ°æ®è½¬ç§»<br><br>å¨åºç°å¬å¸æ§å¶æåæ´æå¬å¸èµäº§æä¸å¡è¢«è½¬è®©çæåµä¸ï¼ Dioræ¶éçä¸ªäººä¿¡æ¯å¯è½ä¼è¢«è½¬ç§»ã<br><br><br>æ¡æ¬¾10 - å¿ç«¥éç§æ<br><br>å¦ææ¨æªæ»¡14å²ï¼æ¨åªè½å¨ç¶æ¯æçæ¤äººçåä¸ä¸ä½¿ç¨æ¬ç½ç«èä¸ä¸åºåæä»¬æäº¤ä»»ä½ä¸ªäººèµæã<br><br>æ¡æ¬¾11- æ¬éç§æ¿ç­çä¿®æ¹<br>Diorææå¨ä¸é¢åéç¥çæåµä¸ï¼éæ¶ä¿®æ¹æ¬éç§æ¿ç­çåå®¹ãå¨è¿ç§æåµä¸ï¼Diorä¼éè¿å¨ç½ç«ä¸åå¸æ´æ°çæ¬çæ¹å¼éç¥æ¨ãèªè¯¥éç§æ¿ç­æ´æ°çæ¬åå¸ä¹æ¥èµ·ï¼å¦æ¨ä»ç»§ç»­ä½¿ç¨ç½ç«ææä»¬çæå¡ï¼å³è¡¨ç¤ºæ¨åæåç»ä¿®è®¢çéç§æ¿ç­ççº¦æã<br><br><br><br><br><br><br><br><br><br><br><br><br><br>" ;
    }

    /*Update window title and save previous*/

    $('#window_chat').append('<div id="consentPage">'+policyContent+'</div>');

    if (self.isMobileConfig == true) {
        $('.consentPage').css('position', 'fixed');
    }

    /*Append buttons to consentPage*/
    $('#consentPage').append('<div class="consentPageButtonContainer">\
                                <div id="withdrawButton" class="withdrawButtonContainer unselectable">\
                                    <i class="fal fa-times consentPageWithdrawIcon"></i>\
                                    <span class="withdayButtonText">'+withdrawButtonText+'</span>\
                                </div>\
                                <div id="consentButton" class="consentButtonContainer unselectable">\
                                    <i class="fal fa-check consentPageConsentIcon"></i>\
                                    <span class="consentButtonText">'+consentButtonText+'</span>\
                                </div>\
                            </div>');

    $('.consentButtonContainer').css({'background-color': self.optionRef.chatHeader, 'color': self.optionRef.chatHeaderText});
    /*Call to update consent status*/
    $('#consentButton').click(function() {
        console.log('Consent');
	if ($('#ppcValue').length > 0) {
            $('#ppcValue')[0].checked = true;
        }
	self.authorized = true;
	self.ppcConsentSent = true;
	addPPCMessage(Chat);
        $('.typing-box').prop("disabled", false);
        $('#consentPage').hide();
	$('.ppcContainer').hide();
        $('.ppcContainerOff').hide();
	$('#backButtonId').hide();
	$('.backIconContainer').hide();
	$('.chat-title').text(self.chatHeader);
    });

    $('#withdrawButton').click(function() {
        console.log('Withdraw');
	if ($('#ppcValue').length > 0) {
            $('#ppcValue')[0].checked = false;
        }
	self.authorized = false;
	self.ppcConsentSent = false;
        //$('.typing-box').prop("disabled", true);
	addPPC(Chat);
	$('.ppcContainerOff').show().css('color', 'black');
        $('.ppcContainer').show().css('color', 'black');
        $('.ppcLink').css({'color': 'steelblue', 'text-decoration':'underline'});
	$('.ppcInChatContainer').remove();
        $('#consentPage').hide();
	$('#backButtonId').hide();
	$('.backIconContainer').hide();
	$('.chat-title').text(self.chatHeader);
    });

    $('.backIconContainer').remove();
    $('#chat-top').prepend('<div class="backIconContainer" style="display:none;"><i class="fal fa-long-arrow-left backIcon"></i></div>');
    

    $('.backIconContainer').click(function(e) {
        $('.backIconContainer').hide();
        $('#consentPage').hide();
	$('.chat-title').text(self.chatHeader);
        e.preventDefault();
        return false;
    });
}

function addPPCMessage(Chat) {
    var self = this;
    if (self.grataCb.ppcConsentSent == true) {
        return;
    }
    var consentText = (self.grataCb.localLang.indexOf("cn") === -1 && self.grataCb.localLang.indexOf("zh") === -1) ? 'You have consented to have your data stored in accordance with our <a href="https://www.dior.cn/zh_cn/legal-terms-choice2" target="_blank" class="ppcLink">privacy policy</a>. You may choose to <span class="ppcWithdrawLink">withdraw your consent</span> at any time.' : 'æ¨å·²åæ CHRISTIAN DIOR COUTUREåºäºè¯¥<a href="https://www.dior.cn/zh_cn/legal-terms-choice2" target="_blank" class="ppcLink">éç§å£°æ</a>ä¸­æè¿°çç®çå¤çæ¨çä¸ªäººæ°æ®ãæ¨ä¹å¯ä»¥éæ¶è¦æ±<span class="ppcWithdrawLink">æ¤åè¯¥ææ</span>ã';
    $('.chat-container').append('<div class="ppcInChatContainer">'+consentText+'</div>');
    Chat.sendMessage('#ConsentGiven', 'text/plain');
    $('.ppcWithdrawLink').unbind('click');
    $('.ppcWithdrawLink').click(function() {
	if ($('#ppcValue').length > 0) {
                                        $('#ppcValue')[0].checked = false
                                    }
				    self.grataCb.authorized = false;
        self.grataCb.ppcConsentSent = false;
                                    addPPC(Chat);
                                    $('.ppcContainerOff').show().css('color', 'black');
                                    $('.ppcContainer').show().css('color', 'black');
                                    $('.ppcLink').css({'color': 'steelblue', 'text-decoration':'underline'});
                                    $('.ppcInChatContainer').remove();
                                    $('#consentPage').hide();
                                    $('#backButtonId').hide();
    });
    self.grataCb.ppcConsentSent = true;
}

function checkPPC(Chat) {
    var self = this;
    if (/*self.grataCb.orgId != "6" && */self.grataCb.orgId != "205250481355" && self.grataCb.orgId != "122125966570" && self.grataCb.orgId != "023258393135") {
        return;
    }

    if (self.grataCb.authorized == true) {
        return;
    }

    /*if (self.getCookie('grataUserId') == "" || self.getCookie('grataUserId') == undefined) {
        return;
    }*/

     var id = 'chat_'+self.getCookie('grataUserId')+'_'+self.grataCb.realOrgId;

    $.ajax({
        url: 'https://' + self.grataCb.apiPrefix + 'api.'+self.grataCb.chatDomain+'/connect-api/user/getConsent.jsn?sessionID='+id,
        type: 'post',
        data: {sessionID:id},
	xhrFields: {'withCredentials': true},
                                crossDomain: true,
        beforeSend: function (request) {
	    if (self.grataCb.chatDomain.indexOf('grata') > -1) {
                                  //request.setRequestHeader("withCredentials", true);
                                  //request.setRequestHeader("crossDomain", true);
                                } else {
                                  request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                                }
            //request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
        },                
        success: function(data) {
            var res = $.parseJSON(data);
            if (res.data == true) {
		appendConsentPage(Chat);
                self.grataCb.authorized = true;
		self.grataCb.ppcConsentSent = true;
		$('.typing-box').prop("disabled", false);
                $('.ppcContainer').remove();
		$('.ppcContainerOff').hide();
            } else {
                self.grataCb.authorized = false;
		//$('.typing-box').prop("disabled", true);
		addPPC(Chat);
                $('.ppcContainer').show();
		$('.ppcContainerOff').show();
            }
        }
    });
}

function addPPC(Chat) {
    var self = this.grataCb;

    if (/*self.orgId != "6" && */self.orgId != "205250481355"  && self.orgId != "122125966570" && self.orgId != "023258393135") {
        return;
    }

    if ($('.ppcContainer').length > 0/* || $('.ppcContainerOff').length > 0*/) {return;}
    $('.ppcContainerOff').remove();

    if (self.authorized == true) {
        return;
    }

    var ppcText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'I have read and accepted the <a href="https://www.dior.cn/zh_cn/legal-terms-choice2" target="_blank">privacy policy</a> and <a href="https://www.dior.cn/zh_cn/personal-data2" target="_blank" class="ppcLink">terms of service</a>.' : 'æå·²éè¯»å¹¶æ¥å<a href="https://www.dior.cn/zh_cn/legal-terms-choice2" target="_blank" class="ppcLink">ä¸ªäººä¿¡æ¯æ¶éå£°æ</a>ä»¥å<a href="https://www.dior.cn/zh_cn/personal-data2" target="_blank" class="ppcLink">ç½ç«ä½¿ç¨åéå®æ¡æ¬¾</a>ã';

    if ($('.firstMessage').length > 0) {
        $('<div class="ppcContainer"></div>').insertAfter('.firstMessage');
    } else {
        $('#chatContainerId').prepend('<div class="ppcContainer"></div>');
    }
    if ($('#chatContainerId')[0].scrollHeight > $('#chatContainerId').height()) {
        $('.ppcContainer').remove();
        $('#chatContainerId').append('<div class="ppcContainer"></div>');
    }
    $('<div class="ppcContainerOff"></div>').insertAfter('.inputGrataMessage');
    var topValue = (navigator.userAgent.indexOf('iPad') == -1) ? "40px" : "60px";
    $('.consentContainer').css('top', topValue);
    if (self.isMobileConfig === true) {
        if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
                $('.ppcContainer').show();
            } else {
                $('.ppcContainer').hide();
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) > 39) {
                $('.ppcContainer').show();
            } else {
                $('.ppcContainer').hide();
            }
        }
    } else {
        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
            $('.ppcContainer').show();
        } else {
            $('.ppcContainer').hide();
        }
    }
    $('.chat-wrapper .ppcContainer').append('<input type="checkbox" id="ppcValue" name="ppc" value="false" class="ppcCheckbox" style="margin-right: 7px;">\
                                <div class="ppcText" for="ppc"> '+ppcText+'</div><br>');

    $('#ppcValue').change(function (evt) {
        var res = evt.target.checked;
	$('.ppcContainer').css({'color': '#31ba01'});
	//$('.ppcLink').css({'color': '#31ba01', 'text-decoration':'underline'});
        self.authorized = res;
	if (evt.target.checked == true) {
            appendConsentPage(Chat);
            addPPCMessage(Chat);
	    $('#backButtonId').hide();
            $('.typing-box').prop("disabled", false);
        } else {
            $('.typing-box').prop("disabled", true);
        }
        Chat.sendMessage('consent='+evt.target.checked, 'request/response');
        $('.ppcContainer').hide();
    });


    /*Offline way*/
    $('.form-container .ppcContainerOff').css({'width': '85%', 'padding-left': '6%', 'padding-right': '6%', 'text-align': 'left', 'margin-top': '10px', 'padding-bottom': '0px'});
    $('.form-container .ppcContainerOff').append('<input type="checkbox" id="ppcValueOff" name="ppc" value="false" class="ppcCheckbox" style="position: relative;top: -7px;left: 2px;">\
                                <div class="ppcText" for="ppc" style="margin-left: 6px;font-size: 12px;"> '+ppcText+'</div><br>');

    //if (self.orgId == 205250481355) {
        $('#btnSender').css({'top': '-10px'});
    //}

    $('#ppcValueOff').change(function (evt) {
        var res = evt.target.checked;
	if (res == false) {
            $('.ppcContainerOff').show().css('color', 'black');
            $('.ppcLink').css({'color': 'steelblue', 'text-decoration':'underline'});
        } else {
	    $('#backButtonId').hide();
	    appendConsentPage(Chat);
            //$('.ppcContainerOff').css({'color': '#31ba01'});
            $('.ppcLink').css({/*'color': '#31ba01', */'text-decoration':'underline'});
        }
	self.ppcOffConsent = res;
        self.authorized = res;
        /*Update by a call*/
        //$('.ppcContainer').hide();
    });
}

function addAgentGreeting() {
    var self = this.grataCb;
    if (self.orgId != "839731165445") {
        //if (self.orgId != "6")
            return;
    }
    $('#message_0').remove();
    var systemText = (self.orgOnline == true) ? self.welcomeMessageText : self.chatMessageOffline;
    if (self.isChatBusy == true && self.optionRef.busyHide === "0") {
        systemText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.chatMessageBusyEn : self.optionRef.chatMessageBusyCn;
    }
     if (self.optionRef.offlineHide != "true" && self.originalOrgOnline == false) {
	systemText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.chatMessageOfflineEn : self.optionRef.chatMessageOfflineCn;
    }

    self.places = {'en': {'grataStore9124':'Shanghai IFC',
                        'grataStore9030':'Shanghai Grand Gateway',
                        'grataStore9048':'Nanjing Deji Plaza store',
                        'grataStore9066':'Nanjing Deji Plaza store',
                        'grataStore9087':'Chengdu IFS store',
                        'grataStore8888':'Suzhou Test store',
                        'grataStore9071':'Shanghai Kerry Centre',
                        'grataStore9053':'Guangzhou TaiKoohui store',
                        'grataStore9054':'Shenyang The MixC Shopping Mall',
                        'grataStore9125':'Shanghai IAPM Mall',
                        'grataStore9111':'Beijing SKP store',
                        'grataStore9337':'Beijing SKP store',
                        'grataStore9368':'Beijing SKP store',
                        'grataStore9114':'Beijing SKP store',
                        'grataStore9115':'Beijing SKP store',
                        'grataStore9374':'Beijing SKP store',
                        'grataStore9396':'Beijing Seasons Place store',
                        'grataStore9109':'Beijing China World Mall store',
                        'grataStore9011':'Chongqing Times Square store',
                        'grataStore9121':'Harbin Charter Shopping Mall store',
                        'grataStore9041':'Wuhan International Plaza store',
                        'grataStore9007':'Changchun Charter Shopping Center store',
                        'grataStore9129':'Xi\'an SKP store',
                        'grataStore9130':'Xi\'an SKP store',
                        'grataStore9131':'Xi\'an SKP store',
                        'grataStore9118':'Changsha IFS store',
                        'grataStore9128':'Chongqing The MixC store',
                        'grataStore9108':'Dalian Times Square store',
                        'grataStore9075':'Nanning The MixC store',
                        'grataStore9030':'Shanghai Grand Gateway 66 store',
                        'grataStore9035':'Shenzhen The MixC store',
                        'grataStore9381':'Wuxi Center 66 store',
                        'grataStore9382':'Xiamen The MixC store',
                        'grataStore9361':'Kunming Spring City 66 store',
                        'grataStore9029':'Qingdao Hisense Plaza store',
                        'grataStore9395':'Suzhou Matro Mall Guanqian store',
                        'grataStore9055':'Hefei Yintai Centre store',
                        'grataStore9372':'Hangzhou Tower Shopping City store',
                        'grataStore9373':'Hangzhou Tower Shopping City store',
                        'grataStore9108':'Dalian Times Square store',
                        'grataStore9070':'Lanzhou Guofang store',
                        'grataStore9128':'Chongqing The MixC store',
                        'grataStore9360':'Burberry Open Spaces store',
                        'grataStore9371':'Burberry Open Spaces store',
                        'grataStore9382':'Xiamen The MixC store',
                        'grataStore9103':'Taiyuan Tianmei Plaza store',
                        'grataStore9062':'Shijiazhuang Beiguo Future store',
                        'grataStore9120':'Zhengzhou Denis David Plaza store',
                        'grataStore9026':'Ningbo Heyi Avenue store',
                        'grataStore9085':'Fuzhou Grand Classic store',
                        'grataStore9075':'Nanning The MixC store',
                        'grataStore9118':'Changsha IFS store',
                        'grataStore9396':'Beijing Seasons Place store',
                        'grataStore9097':'Beijing Wangfujing Yintai in88 store',
                        'grataStore9074':'Jinan Guihe Shopping Center store',
                        'grataStore9035':'Shenzhen The MixC store',
                        'grataStore9135':'Chengdu Intime in99 store',
                        'grataStore9039':'Urumqi Maison Mode store',
                        'grataStore9381':'Wuxi Center 66 store',
                        'grataStore9100':'Tianjin The MixC store',
                        'grataStore9084':'Tianjin Hisense Plaza store',
                        'grataStore9030':'Shanghai Grand Gateway 66 store',
                        'grataStore9105':'Shanghai New World Daimaru store',
                        'grataStore9335':'Burberry Guangzhou Taikoohui',
                        'theId': 'Grata test EN'},
                    'cn': {'grataStore9124':'ä¸æµ·å½ééèä¸­å¿ç²¾ååº',
                            'grataStore9030':'ä¸æµ·æ¸¯æ±æéå¹¿åºç²¾ååº',
                            'grataStore9048':'åäº¬å¾·åºå¹¿åºç²¾ååº',
                            'grataStore9066':'åäº¬å¾·åºå¹¿åºç²¾ååº',
                            'grataStore9087':'æé½å½ééèä¸­å¿ç²¾ååº',
                            'grataStore8888':'èå·O2Oæµè¯',
                            'grataStore9071':'ä¸æµ·éå®åéä¸­å¿æè°åº',
                            'grataStore9053':'å¹¿å·å¤ªå¤æ±ç²¾ååº',
                            'grataStore9054':'æ²é³ä¸è±¡åç²¾ååº',
                            'grataStore9125':'ä¸æµ·ç¯è´¸å¹¿åºç²¾ååº',
                            'grataStore9111':'åäº¬SKPç²¾ååº',
                            'grataStore9337':'åäº¬SKPç²¾ååº',
                            'grataStore9368':'åäº¬SKPç²¾ååº',
                            'grataStore9114':'åäº¬SKPç²¾ååº',
                            'grataStore9115':'åäº¬SKPç²¾ååº',
                            'grataStore9374':'åäº¬SKPç²¾ååº',
                            'grataStore9396':'åäº¬éèè¡è´­ç©ä¸­å¿ç²¾ååº',
                            'grataStore9109':'åäº¬å½è´¸ååç²¾ååº',
                            'grataStore9011':'éåºæ¶ä»£å¹¿åºç²¾ååº',
                            'grataStore9121':'åå°æ»¨åå±è´­ç©ä¸­å¿ç²¾ååº',
                            'grataStore9041':'æ­¦æ±å½éå¹¿åºç²¾ååº',
                            'grataStore9007':'é¿æ¥åå±è´­ç©ä¸­å¿ç²¾ååº',
                            'grataStore9129':'è¥¿å®SKPç²¾ååº',
                            'grataStore9130':'è¥¿å®SKPç²¾ååº',
                            'grataStore9131':'è¥¿å®SKPç²¾ååº',
                            'grataStore9118':'é¿æ²IFSå½éä¸­å¿ç²¾ååº',
                            'grataStore9128':'éåºä¸è±¡åç²¾ååº',
                            'grataStore9108':'å¤§è¿æ¶ä»£å¹¿åºç²¾ååº',
                            'grataStore9075':'åå®ä¸è±¡åç²¾ååº',
                            'grataStore9030':'ä¸æµ·æ¸¯æ±æéå¹¿åºç²¾ååº',
                            'grataStore9035':'æ·±å³ä¸è±¡åç²¾ååº',
                            'grataStore9381':'æ é¡æéå¹¿åºç²¾ååº',
                            'grataStore9382':'å¦é¨ä¸è±¡åç²¾ååº',
                            'grataStore9361':'æææéå¹¿åºç²¾ååº',
                            'grataStore9029':'éå²æµ·ä¿¡å¹¿åºç²¾ååº',
                            'grataStore9395':'èå·ç¾ç½ååè§åç²¾ååº',
                            'grataStore9055':'åè¥é¶æ³°ä¸­å¿ç²¾ååº',
                            'grataStore9372':'æ­å·å¤§å¦è´­ç©åç²¾ååº',
                            'grataStore9373':'æ­å·å¤§å¦è´­ç©åç²¾ååº',
                            'grataStore9108':'å¤§è¿æ¶ä»£å¹¿åºç²¾ååº',
                            'grataStore9070':'å°å·å½è³ç¾è´§ç²¾ååº',
                            'grataStore9128':'éåºä¸è±¡åç²¾ååº',
                            'grataStore9360':'Burberry ç©ºÂ·é´ç²¾ååº',
                            'grataStore9371':'Burberry ç©ºÂ·é´ç²¾ååº',
                            'grataStore9382':'å¦é¨ä¸è±¡åç²¾ååº',
                            'grataStore9103':'å¤ªåå¤©ç¾æ°å¤©å°ç²¾ååº',
                            'grataStore9062':'ç³å®¶åºåå½åå¤©ä¸è´­ç©å¹¿åºç²¾ååº',
                            'grataStore9120':'éå·ä¸¹å°¼æ¯å¤§å«åç²¾ååº',
                            'grataStore9026':'å®æ³¢åä¹å¤§éè´­ç©ä¸­å¿ç²¾ååº',
                            'grataStore9085':'ç¦å·å¤§æ´æ¶å¸ç¾è´§ç²¾ååº',
                            'grataStore9075':'åå®ä¸è±¡åç²¾ååº',
                            'grataStore9118':'é¿æ²IFSå½éä¸­å¿ç²¾ååº',
                            'grataStore9396':'åäº¬éèè¡è´­ç©ä¸­å¿ç²¾ååº',
                            'grataStore9097':'åäº¬çåºäºé¶æ³°in88ç²¾ååº',
                            'grataStore9074':'æµåè´µåè´­ç©ä¸­å¿ç²¾ååº',
                            'grataStore9035':'æ·±å³ä¸è±¡åç²¾ååº',
                            'grataStore9135':'æé½é¶æ³°ä¸­å¿in99ç²¾ååº',
                            'grataStore9039':'ä¹é²æ¨é½ç¾ç¾ç¾è´§ç²¾ååº',
                            'grataStore9381':'æ é¡æéå¹¿åºç²¾ååº',
                            'grataStore9100':'å¤©æ´¥ä¸è±¡åç²¾ååº',
                            'grataStore9084':'å¤©æ´¥æµ·ä¿¡å¹¿åºç²¾ååº',
                            'grataStore9030':'ä¸æµ·æ¸¯æ±æéå¹¿åºç²¾ååº',
                            'grataStore9105':'ä¸æµ·æ°ä¸çå¤§ä¸¸ç¾è´§ç²¾ååº',
                            'grataStore9335':'å¹¿å·å¤ªå¤æ±ç²¾ååº',
                            'theId': 'Grata test CN'}};

    var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn";
    //var agentName = (self.orgId == "6") ? "Grata" : "Deer";
    var agentName;
    if (self.orgId == "6") {
        agentName = "Grata";
    } else {
        agentName = (lang == "en") ? "BB Dear" : "ååé¹¿";
    }
    var nowDate = (getCookie('grataGreetingDate') != undefined && getCookie('grataGreetingDate') != "") ? new Date(getCookie('grataGreetingDate')) : new Date();
    var myHours = (nowDate.getHours().toString().length <= 1) ? "0" + nowDate.getHours() : nowDate.getHours();
    var myMinutes = (nowDate.getMinutes().toString().length <= 1) ? "0" +  nowDate.getMinutes() : nowDate.getMinutes();
    var style = (self.isMobileConfig === true) ? 'style="margin-bottom:115px;"' : 'style="margin-bottom:60px;"';
    //var placeName = places[lang][self.clickButtonId];
    var placeName = (self.clickButtonId.indexOf('#') > -1) ? self.places[lang][self.clickButtonId.split('#')[0]] : self.places[lang][self.clickButtonId];
    var messageT = systemText;
    var avatar = (self.orgId == "6") ? 'https://staticint.guestops.com/riak/avatar/webchatAgent-x7faY4-T7Lrx9.png' : 'https://static.guestops.com/riak/avatar/webchatAgent-tbKweH-PaARuI.png';

    //if (self.clickButtonId.split('#')[0] == 'grataStore9039') {
        agentName = " ";
        placeName = " ";
        $('.agentNameContainer').css('height', '26px');
    //}

    if (avatar != undefined && self.showDefaultLeft === false) {
        htmlObj = '<div '+ style +' id="message_0" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_0"><div class="messageToName"> <div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+placeName+'</span></div></div> </div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
    } else {
        htmlObj = '<div '+ style +' id="message_0" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_0"><div class="messageToName"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+agentName+'</span></div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
    }
    $('#chatContainerId').append(htmlObj);
    //if (self.clickButtonId.split('#')[0] == 'grataStore9039') {
        $('.agentNameContainer').css('height', '26px');
    //}
    if (self.optionRef.fontSize > 14) {$('#message_0 .placeNameContainer').css({'top': '0px', 'margin-bottom': '0px', 'font-size': '14px'});}
    if (avatar != undefined && self.showDefaultLeft === false && placeName === "") {
        $('#message_0 .agentNameContainer').css({'top': '17px', "height": '30px', 'margin-bottom': '12px'});
    }
    $('#message_0').find('.chatTopPartImage').css('background-image', 'url("'+avatar+'")');
    $('#message_0').find('.chatTopPartImage').css({'background-size': 'contain'});
    $('#message_0').find('.messageLayout').css('margin-top', '0px');
    jQuery('.remote').css('color', self.chatAgentName);
    $('.firsMessage').hide();
     
    self.welcomePosted = true;
}

//busyStatus
function showIfClicked() {
    if (this.grataCb.showStatus !== 'clicked' && this.grataCb.showStatus !== 'inchat' && this.grataCb.showStatus !== 'waiting' && this.grataCb.showStatus !== 'autoreply') {
        if (this.grataCb.optionRef.busyHide == "0") {
            jQuery("#window_chat").show();
            return true;
        } else {
            jQuery("#window_chat").hide();
            return false;
        }
    } else {
        jQuery("#window_chat").show();
        return true;
    }
}

function setClicked() {
    appendRoutingPage();
    if (this.grataCb.showStatus !== undefined) {
        if (this.grataCb.showStatus === "waiting" || this.grataCb.showStatus === "inchat" || this.grataCb.showStatus === "clicked" && this.grataCb.showStatus !== 'autoreply') {
            return;
        }
    }
    if (this.grataCb.isBusyStatusSent !== false)
        return;

    var self = this;
    self.grataCb.showStatus = "clicked";
    setTimeout(function() {
	var accessToken = (getCookie('grataUserToken') !== null) ? getCookie('grataUserToken') : "";
    	var params = {token: accessToken};
    	$.ajax({
        	url: 'https://' + self.grataCb.apiPrefix + 'api.'+self.grataCb.chatDomain+'/connect-api/chat/webchatClick.jsn',
        	type: 'post',
		xhrFields: {'withCredentials': true},
                                crossDomain: true,
        	//data: params,      
        	beforeSend: function (request) {
		    if (self.grataCb.chatDomain.indexOf('grata') > -1) {
                                  //request.setRequestHeader("withCredentials", true);
                                  //request.setRequestHeader("crossDomain", true);
                                } else {
                                  request.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                                }
            	    //request.setRequestHeader("GB-Access-Token", accessToken);
        	},                
        	success: function(data) {
	    	    self.grataCb.showStatus = "clicked";
            	    self.grataCb.isBusyStatusSent = true;
        	}
    	});
    }, 2000);
}

function disableSendButton() {
    jQuery('.sendButton').css({"background-color": "white", "color": "lightgray", "border-color": 'lightgray'});
} 

function enableSendButton() {
    var self = this;
    jQuery('.sendButton').css({"background-color": "white", "color": self.grataCb.colorHeader, "border-color": self.grataCb.colorHeader});
} 
function forceDisableButton() {
    jQuery('.sendButton').addClass('forceDisable');
}
function unforceDisableButton() {
    jQuery('.sendButton').removeClass('forceDisable');
    $('.reconnectTextContainer, .reconnectFormTextContainer').hide();
}
function setFocusHandler(theElement, theSentence) {
    $(theElement).css({"font-style": "italic", "font-size": "11px", 'font-weight': '300'});
    $(theElement).focus(function() {
        $(theElement).css({"font-style": "initial", "color": "black"});
        if (this.value === theSentence)
            this.value = "";
        $(theElement).on('focusout', function() {
            if (this.value === "") {
                this.value = theSentence;
                $(theElement).css({"font-style": "italic", "color": "grey"});
            }
        });
    });
} 

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    var encodeValue = encodeURI(cvalue);
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var path = window.location.host.split('.');
    var resPath = "/";
    /*if (path.length === 3) {
        resPath = '.' + path[1] + '.' + path[2];
    }*/
    if (path.length >= 3) {
        resPath = '.' + path[path.length-2] + '.' + path[path.length-1];
	if (resPath == ".com.cn") {
            resPath = '.' + path[path.length-3] + resPath;
        }
    } else {
        resPath = '.' + path[0] + '.' + path[1];
    }
    //document.cookie = cname + "=" + encodeValue + ";" + expires + ";path=/;domain=" + resPath + ";";
    document.cookie = cname + "=" + encodeValue + ";" + expires + ";path=/;domain=" + resPath + ";tagname=test;secure;SameSite=None;";//tagname=test;secure;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
    
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
}

function setMobileButton() {
    //Shape custome buttom
    var self = this.grataCb;
    $('.routingContainer, .contactPage').hide();
    //if ($('.contactPage').length > 0 && getCookie('routingDone') != "true") {showContactPage();}
    parent.window.document.getElementById('iframeChat').style.height = self.optionRef.mobileButtonSize + 'px';
    if ($('.chatTopIcon').length === 0) {
	var url = self.optionRef.iconUrl;
        var icon = (self.optionRef.buttonTypeChoice == "1") ? '<div class="chatTopIcon unselectable" style="background-image: url('+url+');background-size:contain;background-repeat:no-repeat;outline:none !important;"></div>' : self.optionRef.buttonIcon.replace("'></i>", " chatTopIcon'></i>");
	//var icon = self.optionRef.buttonIcon.replace("'></i>", " chatTopIcon'></i>");
	var rightMargin = (self.orgId == 833581441007 || self.orgId == 734609717975 && self.isMobileConfig != true) ? '0px' : '5px';
	rightMargin = (self.orgId == 833581441007 && self.isMobileConfig == true) ? '3px' : rightMargin;
        $('#chat-top').empty().css({'width': self.optionRef.mobileButtonSize + 'px', 'border-radius': self.optionRef.mobileButtonCorner + 'px', 'margin-right': rightMargin}).append(icon);

        //$('#chat-top').empty().css({'width': self.optionRef.mobileButtonSize + 'px', 'border-radius': self.optionRef.mobileButtonCorner + 'px', 'margin-right': '5px'}).append('<i class="fal fa-comment-dots chatTopIcon"></i>');
    }
    var iconSize = self.optionRef.mobileButtonIconSize;//parseInt(self.optionRef.buttonSize, 10) / 4;//3
    //$('.chatTopIcon').css({'font-size': iconSize + 'px'});
    (self.optionRef.buttonTypeChoice == "1") ? $('.chatTopIcon').css({'height': iconSize + 'px', 'width': iconSize + 'px'}) : $('.chatTopIcon').css({'font-size': iconSize + 'px'});
    var marginAmount = parseInt(self.optionRef.mobileButtonSize, 10) - self.iconActualHeight;//$('.chatTopIcon').height();
    var marginTop = marginAmount / 2;//marginAmount + 1;//-1
    //var marginLeft = (marginAmount / 2);//marginAmount + 2;
    //iconSize = iconSize * 2.5;//2
    //$('.chatTopIcon').css({'font-size': iconSize + 'px', 'margin-top': marginTop + 'px'});
    self.iconActualWidth = (self.iconActualWidth == 27) ? self.iconActualHeight : $('.chatTopIcon').width();
    var marginLeftAmount = parseInt(self.optionRef.mobileButtonSize, 10) - self.iconActualWidth;//$('.chatTopIcon').width();
    var marginLeft = (marginLeftAmount / 2);
    $('.chatTopIcon').css({'margin-left': marginLeft + 'px', 'margin-top': marginTop + 'px', 'color': self.optionRef.buttonIconColor});
    $('.mobileChatTop').css({'height': self.optionRef.mobileButtonSize + 'px', 'width': self.optionRef.mobileButtonSize + 'px', 'background-color': self.optionRef.buttonBackgroundColor});

    if (self.optionRef.mobileButtonShadow === "true") {
        //var iframeHeight = parseInt(self.optionRef.buttonSize, 10);
        //iframeHeight = iframeHeight + 10;
        var iconHeight = parseInt(self.optionRef.mobileButtonSize, 10);//iframeHeight - 10;
        //parent.window.document.getElementById('iframeChat').style.height = iframeHeight + 'px';
        var shadowColor = (self.optionRef.mobileButtonShadowStyle === "dark") ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)';
        $('#chat-top').css({'box-shadow': '5px 6px 7px 0px ' + shadowColor, 'margin-right': '10px', 'min-height': 'unset','height': iconHeight + 'px'});
    }

    var iframeWidth = parseInt(self.optionRef.mobileButtonSize, 10) + 10;
    parent.window.document.getElementById('iframeChat').style.width = iframeWidth + 'px'; 
    parent.window.document.getElementById('iframeChat').style.height = iframeWidth + 'px'; 
    //parent.window.document.getElementById('iframeChat').style.right = self.optionRef.mobileButtonBufferX + 'px';
    //parent.window.document.getElementById('iframeChat').style.bottom = self.optionRef.mobileButtonBufferY + 'px';
    parent.window.document.getElementById('iframeChat').style.right = (isNaN(self.optionRef.mobileButtonBufferX) === false) ? self.optionRef.mobileButtonBufferX + 'px' : self.optionRef.mobileButtonBufferX;
    parent.window.document.getElementById('iframeChat').style.bottom = (isNaN(self.optionRef.mobileButtonBufferY) === false) ? self.optionRef.mobileButtonBufferY + 'px' : self.optionRef.mobileButtonBufferY;
    makeImageIcon();
    setCustomIcon();
    setBurberryIcon();
}

function makeImageIcon(isNew) {
    var self = this.grataCb;
    if (self.optionRef.buttonTypeChoice != "2")
        return;

        var url = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.imageUrlEn : self.optionRef.imageUrlCn;
    if ($('.headerIcon')[0] !== undefined && $('.headerIcon')[0].style.backgroundImage.indexOf('NewMsg') > -1) {isNew = "newMsg";}
    if ($('.chatTopIcon')[0] !== undefined &&  $('.chatTopIcon')[0].style.backgroundImage.indexOf('NewMsg') > -1) {isNew = "newMsg";}
    if (isNew == "newMsg") {
        url = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.imageUrlEnUnread : self.optionRef.imageUrlCnUnread;
        var newMessageText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
        if($('.chat-container').is(':visible') !== false) {
            $('.chat-title').text(newMessageText);
        }
    }
    var height = (isNew == "newMsg") ? self.unreadHeight : self.readHeight;
    var width = (isNew == "newMsg") ? self.unreadWidth : self.readWidth;

    if (self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
        height = '76';
        width = '50';
    }
    if (self.orgId == "839731165445") {
        height = '46';
        width = '46';
    }

    var icon = "";
    if (self.isMobileConfig === true) {
        icon = '<div class="chatTopIcon unselectable" style="background-image: url('+url+');background-size:contain;background-repeat:no-repeat;outline:none;"></div>';
        $('#chat-top').empty().css('margin-right', '0px').append(icon);
        $('.chatTopIcon').css({'height': height + 'px', 'width': width + 'px'});
        parent.window.document.getElementById('iframeChat').style.top = 'unset';
        parent.window.document.getElementById('iframeChat').style.right = (isNaN(self.optionRef.mobileButtonBufferX) === false) ? self.optionRef.mobileButtonBufferX + 'px' : self.optionRef.mobileButtonBufferX;
        parent.window.document.getElementById('iframeChat').style.bottom = (isNaN(self.optionRef.mobileButtonBufferY) === false) ? self.optionRef.mobileButtonBufferY + 'px' : self.optionRef.mobileButtonBufferY;
    } else {
        icon = '<div class="headerIcon unselectable" style="background-image: url('+url+');background-size:contain;background-repeat:no-repeat;outline:none;"></div>';
        $('#chat-top').empty().css('margin-right', '0px').append(icon);
        $('.headerIcon').css({'height': height + 'px', 'width': width + 'px'});
        parent.window.document.getElementById('iframeChat').style.right = (isNaN(self.optionRef.buttonBufferX) === false) ? self.optionRef.buttonBufferX + 'px' : self.optionRef.buttonBufferX;
        parent.window.document.getElementById('iframeChat').style.bottom = (isNaN(self.optionRef.buttonBufferY) === false) ? self.optionRef.buttonBufferY + 'px' : self.optionRef.buttonBufferY;
    }
    $('#chat-top').css({'background-color' : 'transparent', 'width': width+'px', 'height': height+'px', 'box-shadow': 'none', 'border': 'none'});
    parent.window.document.getElementById('iframeChat').style.width = width + 'px'; 
    parent.window.document.getElementById('iframeChat').style.height = height + 'px';
}

function preloadIcon() {
    var self = this.grataCb;
    if (self.optionRef.buttonTypeChoice == "0"  || self.optionRef.buttonTypeChoice == "1") {
        self.optionRef.buttonIcon = decode(self.optionRef.buttonIcon);
        var myPreloadIcon = self.optionRef.buttonIcon;
        myPreloadIcon = myPreloadIcon.replace("class='", "class='preloadIcon ");
        $("body").append('<div id="iconPreload" style="opacity:0;"></div>');
        $("#iconPreload").append(myPreloadIcon);
        var size = (self.isMobileConfig === false) ? self.optionRef.buttonIconSize : self.optionRef.mobileButtonIconSize;
        $('.preloadIcon').css('font-size', size + 'px');
        self.iconActualHeight = $('.preloadIcon').height();
        self.iconActualWidth = $('.preloadIcon').width();
    }
}

function preloadIconImages() {
    var self = this.grataCb;
    preloadIcon();
    if (self.orgId == "839731165445") {
        var preloadImage = new Image();
        var myImg = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "https://www.grata.cn/testwebchat/src/images/BurberryEn.png" : "https://www.grata.cn/testwebchat/src/images/BurberryCn.png";
        preloadImage.src = (myImg !== undefined ) ? myImg : "";
    }
    if (self.optionRef.buttonTypeChoice != "2")
        return;

    //var preloadUnreadImage = new Image();
    var preloadUnreadImage = (self.imageIcon == null) ? new Image() : self.imageIcon;
    if (self.imageIcon == null) {self.imageIcon = preloadUnreadImage;}
    var myImgUnread = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.imageUrlEnUnread : self.optionRef.imageUrlCnUnread;
    preloadUnreadImage.onload = function () {
        self.unreadHeight = this.height;
        self.unreadWidth = this.width;
        makeImageIcon();
    };
    preloadUnreadImage.src = (myImgUnread !== undefined ) ? myImgUnread : "";
    //var preloadImage = new Image();
    var preloadImage = (self.imageReadIcon == null) ? new Image() : self.imageReadIcon;
    if (self.imageReadIcon == null) {self.imageReadIcon = preloadImage;}
    var myImg = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? self.optionRef.imageUrlEn : self.optionRef.imageUrlCn;
    preloadImage.onload = function () {
        self.readHeight = this.height;
        self.readWidth = this.width;
        makeImageIcon();
    };
    preloadImage.src = (myImg !== undefined ) ? myImg : "";
}

function setBurberryIcon(isNew) {
    var self = this.grataCb;
    if (self.orgId != "839731165445") {// self.clickButtonId !== "grataStore8888") {
        //if (self.orgId != "6")
            return;
    }
    if (self.optionRef.buttonTypeChoice == "1") {
	$('#chat-top').css('background-color', 'transparent');
	$('.headerIcon').css('margin-top', '-5px');
        return;
    }
    return;
    var preloadImage = new Image();
    var myImg = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'https://cdn.grata.cn/domestic/js/images/BurberryNewMsgEn.png' : 'https://cdn.grata.cn/domestic/js/images/BurberryNewMsgCn.png';
    preloadImage.src = (myImg !== undefined ) ? myImg : "";
    var url = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "https://cdn.grata.cn/domestic/js/images/BurberryEn.png" : "https://cdn.grata.cn/domestic/js/images/BurberryCn.png";
    if ($('.headerIcon')[0] !== undefined && $('.headerIcon')[0].style.backgroundImage.indexOf('NewMsg') > -1) {isNew = "newMsg";}
    if ($('.chatTopIcon')[0] !== undefined &&  $('.chatTopIcon')[0].style.backgroundImage.indexOf('NewMsg') > -1) {isNew = "newMsg";}
    if (isNew == "newMsg") {
        url = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'https://cdn.grata.cn/domestic/js/images/BurberryNewMsgEn.png' : 'https://cdn.grata.cn/domestic/js/images/BurberryNewMsgCn.png';
        var newMessageText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
        if($('.chat-container').is(':visible') !== false) {
            $('.chat-title').text(newMessageText);
        }
    }
    var height = 50;
    var width = (self.isMobileConfig === true) ? 128 : 123;
    var icon = "";
    if (self.isMobileConfig === true) {
        icon = '<div class="chatTopIcon unselectable" style="background-image: url('+url+');background-size:contain;background-repeat:no-repeat;outline:none;"></div>';
        $('#chat-top').empty().css({'margin-right': '3px', 'left': '0px'}).append(icon);
        $('.chatTopIcon').css({'height': height + 'px', 'width': width + 'px'});
        parent.window.document.getElementById('iframeChat').style.top = 'unset';
	parent.window.document.getElementById('iframeChat').style.right = (isNaN(self.optionRef.mobileButtonBufferX) === false) ? self.optionRef.mobileButtonBufferX + 'px' : self.optionRef.mobileButtonBufferX;
        parent.window.document.getElementById('iframeChat').style.bottom = (isNaN(self.optionRef.mobileButtonBufferY) === false) ? self.optionRef.mobileButtonBufferY + 'px' : self.optionRef.mobileButtonBufferY;
    } else {
        icon = '<div class="headerIcon unselectable" style="background-image: url('+url+');background-size:contain;background-repeat:no-repeat;outline:none;"></div>';
        $('#chat-top').empty().css('margin-right', '0px').append(icon);
        $('.headerIcon').css({'height': height + 'px', 'width': width + 'px'});
	parent.window.document.getElementById('iframeChat').style.right = (isNaN(self.optionRef.buttonBufferX) === false) ? self.optionRef.buttonBufferX + 'px' : self.optionRef.buttonBufferX;
        parent.window.document.getElementById('iframeChat').style.bottom = (isNaN(self.optionRef.buttonBufferY) === false) ? self.optionRef.buttonBufferY + 'px' : self.optionRef.buttonBufferY;
    }
    //var actualWidth = width - 5;
    $('#chat-top').css({'background-color' : 'transparent', 'width': width+'px', 'height': height+'px', 'box-shadow': 'none', 'border': 'none'});
    parent.window.document.getElementById('iframeChat').style.width = width + 'px'; 
    parent.window.document.getElementById('iframeChat').style.height = height + 'px';
}

function disableScroll(name) {
    //var fixed = document.getElementById(name);
    var self = this.grataCb;
    var fixed = (document.getElementById(name) === null) ? parent.window.document.getElementById(name) : document.getElementById(name);
    fixed.addEventListener('touchmove', function(e) {
	//$('.inputbox, .chat-top').css({'position': 'relative'});
	 //$(parent.window.document.getElementById('iframeChat')).css({'transition': '1000ms'});
        /*$(parent.window.document.body)[0].addEventListener('touchmove', function(e) {
            e.preventDefault();
        });*/
	//$('.chat-container').append("In listenner");
	if ($('.chat-container')[0].scrollTop == ($('.chat-container')[0].scrollHeight - $('.chat-container')[0].offsetHeight)) {//$(this).scrollHeight >= $(this).offsetHeight) {
	    //alert('Bottom');
	    jQuery(parent.window.document.body).scrollTop(-20);
            //e.preventDefault();
            return false;
        }
        $('.webChatMenuContainer').hide();
        if ($('#chatContainerId')[0].scrollHeight > $('#rewrapDiv').height()) {
        } else {
	    //$('.chat-container').append("In prevent");
            e.preventDefault();
        }
    });
    fixed.addEventListener('click touchstart', function(e) {
        $('.webChatMenuContainer').hide();
	$('.typing-box').blur();
    });
    $('#' + name).unbind('scroll touchmove');
    $('#' + name).on('scroll touchmove', function(e) {
	//e.stopPropagation();
	//$(parent.window.document.getElementById('iframeChat')).css('top', $(parent.window.document.body)[0].scrollHeight+'px');
        if($(this).scrollTop() + $(this).height() > $(document).height() - 100) {
            currentScroll  = $(this).scrollTop();
            if (currentScroll > self.lastScrollTop){
		$('.chat-container').append("In bottom");
                //alert('Down' + self.lastScrollTop + ' : ' + currentScroll);
		//$(this).scrollTop(self.lastScrollTop - 50);
                e.preventDefault();
		e.stopPropagation();
		$('#chatContainerId').unbind('touchmove');
            } else {
		disableScrollDefinite('chatContainreId');
                //alert('Up' + self.lastScrollTop + ' : ' + currentScroll);
            }
            self.lastScrollTop = currentScroll;
        }
    });
}
function disableScrollDefinite(name) {
    var fixed = (document.getElementById(name) === null) ? parent.window.document.getElementById(name) : document.getElementById(name);
    fixed.addEventListener('touchmove', function(e) {
        /*$(parent.window.document.body)[0].addEventListener('touchmove', function(e) {
            e.preventDefault();
        });*/
	if ($(this).scrollHeight >= $(this).offsetHeight) {
	    disableScrollDefinite('rewrapDiv');
    	    disableScrollDefinite('chatContainreId');
	    jQuery(parent.window.document.body).scrollTop(0);
            e.preventDefault();
            return false;
        }
        $('.webChatMenuContainer').hide();
        e.preventDefault();
    });
    fixed.addEventListener('click touchstart', function(e) {
        $('.webChatMenuContainer').hide();
        $('.typing-box').blur();
    });
}
function setMobileChatTop(status, doIt) {
    //alert('setMobileChatTop');
    var newMessageText = (this.grataCb.localLang.indexOf("cn") === -1 && this.grataCb.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
    if ($('.chat-title').text().indexOf(newMessageText) === -1)
        $('.newMessageNotif').hide();
    if (getCookie('muteAudio') === "") {
        setCookie('muteAudio', false, 1);
    }
    if (navigator.userAgent.indexOf('AliApp') > -1) {
        $(parent.window.document.getElementById('iframeChat')).removeClass('aliAppForceTop');
    }
    /*$(parent.window).scroll(function () {
	if (navigator.userAgent.indexOf('iPhone') > -1) {
	    $('.chat-cotainer').append("In scroll listenner");
	    checkOrgStatus();
	}
    });*/
    //$('.chat-container').append('Browser is : '+ this.grataCb.osObject.browser);
    //$('.chat-container').append('<br><br>User Agent is : '+ navigator.userAgent);
    $('.sendButton').css('margin-right', '15px');
    //Disable Touch move when no scrolling available
    /*$('#chatContainerId').on('wheel touchmove', function(e) {
        var d = e.originalEvent.deltaY,
            dir = d < 0 ? 'up' : 'down',
            stop = (dir == 'up' && this.scrollTop == 0) || 
                   (dir == 'down' && this.scrollTop == this.scrollHeight-this.offsetHeight);
        stop && e.preventDefault();
    });*/

/* var scrollable = document.querySelector('body');
 scrollable.addEventListener('wheel', function(event) {
    var deltaY = event.deltaY;
    var contentHeight = scrollable.scrollHeight;
    var visibleHeight = scrollable.offsetHeight;
    var scrollTop = scrollable.scrollTop;

    if (scrollTop === 0 && deltaY < 0)
        event.preventDefault();
    else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
        event.preventDefault();
});*/

 /*var scrollable2 = document.querySelector('.chat-container');
 scrollable2.addEventListener('wheel', function(event) {
    var deltaY = event.deltaY;
    var contentHeight = scrollable2.scrollHeight;
    var visibleHeight = scrollable2.offsetHeight;
    var scrollTop = scrollable2.scrollTop; 
         
    if (scrollTop === 0 && deltaY < 0)
        event.preventDefault(); 
    else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
        event.preventDefault();
});*/ 

    /*$('#rewrapDiv, #chatContainerId').on( 'mousewheel DOMMouseScroll touchmove', function (e) { 
        var e0 = e.originalEvent;
        var delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        e.preventDefault();  
    });*/
    if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) { //iPadTest
    	disableScroll('rewrapDiv');
    	//disableScroll('chatContainerId');
    	disableScrollDefinite('typingID');
    	disableScrollDefinite('chat-top');
    	disableScrollDefinite('iframeChat');//-webkit-transform: translate3d(0,0,0);
	//$('#window_chat').css('-webkit-transform', 'translate3d(0,0,0)');
	//$(parent.window.document.getElementById('iframeChat')).css('-webkit-transform', 'translate3d(0,0,0)');
	//$('.inputbox, .chat-top').css({'position': 'relative'});
	$(parent.window.document.getElementById('iframeChat')).css({'transform': 'translate3d(0,0,0)', '-webkit-transform': 'translate3d(0,0,0)'});
        $('#window_chat, #chat-top, #chatContainerId, .chat-title, .chat-wrapper, .testRewrapDiv').css({'position': 'relative', 'transform': 'translate3d(0,0,0)', '-webkit-transform': 'translate3d(0,0,0)'});
	$('.inputbox, .typing-box').css({'transform': 'translate3d(0,0,0)', '-webkit-transform': 'translate3d(0,0,0)'});
    }
    document.getElementById('chatContainerId').addEventListener('click touchstart touch tap', function(e) {
        $('.webChatMenuContainer').hide();
	$('.typing-box').blur();
    });
    $('#rewrapDiv, .inputbox').css({'overflow': 'hidden', '-webkit-overflow-scrolling': 'touch', 'overflow-x': 'hidden'});
    $(parent.window.document.getElementById('iframeChat')).css({'overflow': 'visible', 'text-overflow': 'visible'/*, 'transition': '500ms'*/});
    $('.typing-box').css({'overflow': 'auto', 'text-overflow': 'visible', 'overflow-x': 'hidden'});
    //$('body').css({'overflow': 'visible', 'text-overflow': 'visible'});
    $('#rewrapDiv').css('overflow', 'visible');

    printLog("In make chat top mobile", 613);
    $('.chat-title').css({'position': 'relative', 'top': '15px'});
    $('#chat-top').css('border-radius', '0px');
    //$('#chat-top').empty();
    //$('#chat-top').append('<i class="fa fa-comments chatTopIcon"></i>');//Refeed chat top corectly


    setMobileButton();

    $('#window_chat').css({"height": "100%", "width": "100%"});
    $('.chat-wrapper, .form-container').css({"height": "100%", "width": "100%"});


    //$('.testRewrapDiv').css({"height": "91%", "width": "100%"});//B chat-containe
    /*if (navigator.userAgent.indexOf('iPhone') > -1 && navigator.userAgent.indexOf('Mobile') > -1 && screen.height < 600) {
        $('.typing-box').css({'height': '150px'});
        $('.typing-box').focus(function() {
            $('.sendButton').show();
            $('.typing-box').css({'height': '100px'});
            $('.typing-box').focusout(function() {
                $('.sendButton').hide();
                $('.typing-box').css({'height': '150px'});
            });
        });
    } else {*/
	$('.sendButtonText').css('bottom', '0px');
	(navigator.userAgent.indexOf('iPad') > -1) ? $('.typing-box, .inputbox').css('height', '130px') : $('.typing-box, .inputbox').css('height', '70px');
        //$('.typing-box, .inputbox').css('height', '70px');
    //}

    /*if (this.grataCb.osObject.browser !== "Firefox" && this.grataCb.osObject.browser !== "Chrome" && this.grataCb.osObject.browser !== "Android") {
        //$(parent.window.document.getElementById('iframeChat')).css('width', '102%');
        $('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': '40px'});
    } else {*/
	var iconButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "95px" : "23px";
        $('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': iconButtonGap});
	$('.uploadIconSpin').css({'position':'fixed', 'bottom': iconButtonGap});
        $('.sendButton').css({'position':'fixed', 'bottom': '20px'});
    //}
    if (navigator.userAgent.indexOf('iPhone;') > -1) {
        $('.typing-box, .inputbox').css('height', '120px');
        $('.uploadIconStyle').css('bottom', '90px');
	$('.uploadIconSpin').css('bottom', '90px');
    }
    //alert('Before focus handler');
     var that = this;
    $('.typing-box').focus(function() {
        var rightPosFocus = '75px';
        var rightPosUnfocus = '15px';
        var bottomPosFocus = '23px';
        var bottomPosUnfocus = '23px';
	var rightTabletFocus = (navigator.userAgent.indexOf('iPad') > -1) ? '105px' : '75px';
	if (navigator.userAgent.indexOf('iPad') > -1 && screen.height > 1080) {rightTabletFocus = '140px';}
        if (self.grataCb.osObject.browser === "Firefox" || self.grataCb.osObject.browser === "Chrome") {
            bottomPosFocus = '23px';
            bottomPosUnfocus = '23px';
        }
        if (/*self.grataCb.osObject.browser === "Chrome" || */self.grataCb.osObject.browser === "Android") {
            //$(parent.window.document.getElementById('iframeChat')).css('width', '102%');
            bottomPosFocus = '23px';
            bottomPosUnfocus = '23px';
        }
        $('.sendButton').show();
        $('.uploadIconStyle').css({'position':'fixed', 'right': rightTabletFocus, 'bottom': bottomPosFocus, 'opacity': '0'});
	$('.uploadIconSpin').css({'bottom': '26px', 'margin-bottom': '9px'});
	//$('.chat-container').append(navigator.userAgent);

	//alert("In focus");
	if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {//iPadTest
	  self.grataCb.lastScrollPos = document.documentElement.scrollTop;
	  //$('.uploadIconStyle').hide();
	  var boxSize  = (navigator.userAgent.indexOf('iPad') > -1) ? "150px" : "70px";
	  $('.typing-box, .inputbox').css('height', boxSize);
	 $('.uploadIconStyle').css({'position':'fixed', 'right': rightTabletFocus, 'bottom': iconButtonGap});
         $('.uploadIconSpin').css({'bottom': iconButtonGap});
	 if (navigator.userAgent.indexOf('iPad') > -1) { 
           if (self.grataCb.optionRef.userImageEnable === "true") {
             $('.uploadIconStyle').css({'opacity': '1', 'bottom': '120px', 'right': '9%', 'padding': '5px'});//.show
	     $('.uploadIconSpin').css({'bottom': '112px', 'right': '6%'});
           }
         } else { 
	   if (navigator.userAgent.indexOf('iPhone;') > -1) {
        	$('.inputbox').css('bottom', '40px');
    	   }
	   if (self.grataCb.optionRef.userImageEnable === "true") {
		$('.uploadIconStyle').css({'opacity': '1'});//1
	   }
           //$('.uploadIconStyle').hide();
         } 
	  var sendButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "90px" : "25px";//was40
	  var iconButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "95px" : "27px";//was42
	  $('.sendButton').css('bottom', sendButtonGap);
	  //$('.typing-box, .inputbox').css('height', '150px');
	  //$('.chat-container').append('height = ' + screen.height);
	  //jQuery(parent.window.document.body).scrollTop(-20);
	  //jQuery(parent.window.document.body).scrollTop(0);
	  //alert("In if");
	  //$('.chat-container').append('sans');
	  //$('.chat-container').children().last().css('margin-bottom', '115px');
	  parent.window.scrollTo(0, 0);window.scrollTo(0, 0);
	    setTimeout(function() {
                parent.window.scrollTo(0, 0);window.scrollTo(0, 0);
             }, 200);
	  window.onfocus = function() {
	     setTimeout(function() {
		parent.window.scrollTo(0, 0);window.scrollTo(0, 0);
	     }, 250);
	  }
	  parent.window.scrollTo(0, 0);window.scrollTo(0, 0);
	  parent.window.scrollTo(-100, -100);window.scrollTo(-100, -100);
	  //$('.chat-container').append('-  ' + parent.window.document.documentElement.scrollTop + '  -');
	  $(parent.window.document.getElementById('iframeChat')).css({'position': 'fixed', 'top': '0'/*, 'transition': '100ms'*/});//.addClass('force-gpu');
	  parent.window.document.getElementById('iframeChat').style.height = (parent.window.document.documentElement.scrollTop > 50) ? '48.9vh' : '47.9vh';//49'48;

	  /*if (self.grataCb.accessCode == 6) {
        	$('.chat-container').append('V1\nscreen height = ' + screen.height);
        	$('.chat-container').append('client height = ' + document.documentElement.clientHeight);
        	$('.chat-container').append('avail height  = ' + parent.window.screen.availHeight);
        	$('.chat-container').append('window Inner height  = ' + window.innerHeight);
        	$('.chat-container').append('parent window Inner height  = ' + parent.window.innerHeight);
          }*/

	  /*if (screen.height > 813) {
                parent.window.document.getElementById('iframeChat').style.height = '50vh';
          }
	  if (screen.height === 812) {//X
	    parent.window.document.getElementById('iframeChat').style.height = '46vh';
            //(document.documentElement.clientHeight < 358) ? parent.window.document.getElementById('iframeChat').style.height = '43vh' : parent.window.document.getElementById('iframeChat').style.height = '46vh';
          } else if (screen.height === 568) {
	    parent.window.document.getElementById('iframeChat').style.height = '39vh';
	  } else if (screen.height === 736) {
	    parent.window.document.getElementById('iframeChat').style.height = '51vh';
	  }
	  if (navigator.userAgent.indexOf('iPad') > -1) {
	    parent.window.document.getElementById('iframeChat').style.height = (parent.window.document.documentElement.scrollTop > 50) ? '67vh' : '66vh';
	    //if (screen.height > 1080) {
		parent.window.document.getElementById('iframeChat').style.height = '70vh';
	    if (screen.height === 1112) {
		//$('.chat-container').append('In ipad first');
		parent.window.document.getElementById('iframeChat').style.height = '69vh';
	    } else if (screen.height === 1024) {
		//$('.chat-container').append('In ipad 1024');
		parent.window.document.getElementById('iframeChat').style.height = '66vh';
	    } else if (screen.height === 1366) {
                //$('.chat-container').append('In ipad 1366');
		//$('.chat-container').append('CH IN IF = ' + document.documentElement.clientHeight);
		var theHeight = (document.documentElement.clientHeight == 929) ? '70vh' : '68vh';
		//$('.chat-container').append('THE HEIGHT = ' + theHeight);
                parent.window.document.getElementById('iframeChat').style.height = theHeight;
            } else if (screen.height === 1194) {
                //$('.chat-container').append('In ipad 1194');
                parent.window.document.getElementById('iframeChat').style.height = '69vh';
            }
	  }*/
	//$('.chat-container').append('screen height  = ' + screen.height);
	  var finalHeight = (parent.window.document.documentElement.scrollTop > 50) ? 48.9 : 47.9;
      if (screen.height > 813) {
            finalHeight = 50;
        }
      if (screen.height === 812) {
        finalHeight = 47.5;
      } else if (screen.height === 568) {
        finalHeight = 39;
      } else if (screen.height === 736) {
        finalHeight = 51;
      }
      if (navigator.userAgent.indexOf('iPad') > -1) {
        finalHeight = (parent.window.document.documentElement.scrollTop > 50) ? 67 : 66;
        finalHeight = 70;
        if (screen.height === 1112) {
            finalHeight = 69;
        } else if (screen.height === 1024) {
            finalHeight = 66;
        } else if (screen.height === 1366) {
            finalHeight = (document.documentElement.clientHeight == 929) ? 70 : 69;
        } else if (screen.height === 1194) {
            finalHeight = 69;
         }
      }
      if (navigator.userAgent.indexOf('AliApp') > -1) {
        finalHeight = finalHeight + 6;
        $(parent.window.document.getElementById('iframeChat')).addClass('aliAppForceTop');
      }
      parent.window.document.getElementById('iframeChat').style.height = finalHeight + 'vh';
      /*if (self.grataCb.accessCode == 6) {
        $('.chat-container').append('- iFrame Height : ' + parent.window.document.getElementById('iframeChat').style.height + '<br/>');
        $('.chat-container').append('- iFrame Top : ' + parent.window.document.getElementById('iframeChat').style.top + '<br/>');
        $('.chat-container').append('- iFrame Position : ' + parent.window.document.getElementById('iframeChat').style.position + '<br/>');
        $('.chat-container').append('- iFrame Class : ' + parent.window.document.getElementById('iframeChat').class + '<br/>');
        $('.chat-container').append('~ Chat Top Height : ' + $('#chat-top')[0].style.height + '<br/>');
        $('.chat-container').append('~ Chat Top Top : ' + $('#chat-top')[0].style.top + '<br/>');
        $('.chat-container').append('~ Chat Top postition : ' + $('#chat-top')[0].style.position + '<br/>');
        $('.chat-container').append('. inputbox Height : ' + $('.inputbox')[0].style.height + '<br/>');
        $('.chat-container').append('. inputbox Display : ' + $('.inputbox')[0].style.display + '<br/>');
        $('.chat-container').append('. inputbox Top : ' + $('.inputbox')[0].style.top + '<br/>');
        $('.chat-container').append('. inputbox Position : ' + $('.inputbox')[0].style.position + '<br/>');
        $('.chat-container').append('====== NEXT TEST ======<br/>');
      }*/
	  checkUnderlayerFlow(false, parent.window.document.getElementById('iframeChat').style.height);
	  $('.typing-box').css({'position': 'fixed', 'bottom': '0'});
	  $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px');
	  //parent.window.document.getElementById('iframeChat').style.height = document.documentElement.clientHeight + 'px';
	}
	$('.typing-box').unbind('blur');
	$('.typing-box').blur(function(e) {
	    if (self.grataCb.optionRef.userImageEnable !== "false") {
            	$('.uploadIconStyle').css('opacity', '1');
		//if (self.grataCb.chatRef != undefined && self.grataCb.chatRef != null)
                  //self.grataCb.initUpload(self.grataCb.chatRef);
            }
            if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {//iPadTest
		$('.uploadIconStyle').css({'opacity' : '0'});
                jQuery(parent.window.document.body).scrollTop(self.grataCb.lastScrollPos);
		if (navigator.userAgent.indexOf('AliApp') === -1) {
                  parent.window.document.getElementById('iframeChat').style.height = '100%';
                  $(parent.window.document.getElementById('iframeChat')).css({'position': 'fixed', 'top': 'unset', 'transition': '0ms'});
                } else {
		  $(parent.window.document.getElementById('iframeChat')).removeClass('aliAppForceTop');
		  $(parent.window.document.getElementById('iframeChat')).css({'position': 'fixed', 'top': 'unset', 'transition': '0ms'});
		  setMobileButton();
                }
                $(this).css('font-size', $(this).data('fontSize'));
		//$('.chat-container').append('In blur typing box');
            } else { 
		$('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': iconButtonGap, 'opacity' : '1'});
	    }
	    var iconButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "95px" : "23px";
	    //$('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': iconButtonGap, 'opacity' : '1'});
	    var sendButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "40px" : "20px";
            $('.sendButton').css({'position':'fixed', 'bottom': sendButtonGap});
	    //$('.typing-box, .inputbox').css('height', '70px');
	    (navigator.userAgent.indexOf('iPad') > -1) ? $('.typing-box, .inputbox').css('height', '130px') : $('.typing-box, .inputbox').css('height', '70px');
	    if (navigator.userAgent.indexOf('iPhone;') > -1) {
		$('.typing-box, .inputbox').css('height', '120px');
		$('.inputbox').css('bottom', '0px');
		$('.uploadIconStyle').css('bottom', '90px');
        	$('.uploadIconSpin').css('bottom', '90px');
		$('.sendButton').css({'position':'fixed', 'bottom': '65px'});
	    }
        });

	/*$('.typing-box').on('click tap touch touchstart', function(e) {
	  console.log("Typing box Click");
          console.log(e);
          $('#fileUploader').trigger('click');
    	});*/

	/*function getAllEvents(element) {
    var result = [];
    for (var key in element) {
        if (key.indexOf('on') === 0) {
            result.push(key.slice(2));
        }
    }
    return result.join(' ');
}
	var el = $('.uploadIconStyle');
el.bind(getAllEvents(el[0]), function(e) {
    console.log(e);
});*/

	$('.uploadIconStyle').unbind('pointerleave');
	$('.uploadIconStyle').on('pointerleave', function(e) {
	  //console.log("Upload icon pointerleave");
          //console.log(e);
          $('#fileUploader').trigger('click');
        });

	$('.typing-box').unbind('focusout');
        $('.typing-box').focusout(function(e) {
	    if (self.grataCb.optionRef.userImageEnable !== "false") {
            	$('.uploadIconStyle').css('opacity', '1');
		//if (self.grataCb.chatRef != undefined && self.grataCb.chatRef != null)
                  //self.grataCb.initUpload(self.grataCb.chatRef);
            }
	    if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {//iPadTest
	      $('.uploadIconStyle').css({'opacity' : '0'});
	      jQuery(parent.window.document.body).scrollTop(self.grataCb.lastScrollPos);
	      if (navigator.userAgent.indexOf('AliApp') === -1) {
	        parent.window.document.getElementById('iframeChat').style.height = '100%';
	        $(parent.window.document.getElementById('iframeChat')).css({'position': 'fixed', 'top': 'unset', 'transition': '0ms'});
	      } else {
		$(parent.window.document.getElementById('iframeChat')).removeClass('aliAppForceTop');
		$(parent.window.document.getElementById('iframeChat')).css({'position': 'fixed', 'top': 'unset', 'transition': '0ms'});
		setMobileButton();
	      }
	       if (navigator.userAgent.indexOf('AliApp') > -1) {
       		    //$('.chat-container').append('iframe height = ' + parent.window.document.getElementById('iframeChat').style.height);
      		}
	      $(this).css('font-size', $(this).data('fontSize'));
	      //$('.chat-container').append('In focusout typing box');
	    }  else { 
                $('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': iconButtonGap, 'opacity' : '1'});
            }
	    var iconButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "95px" : "23px";
            //$('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': iconButtonGap});
	    var sendButtonGap = (navigator.userAgent.indexOf('iPad') > -1) ? "40px" : "20px";
            $('.sendButton').css({'position':'fixed', 'bottom': sendButtonGap});
	    (navigator.userAgent.indexOf('iPad') > -1) ? $('.typing-box, .inputbox').css('height', '130px') : $('.typing-box, .inputbox').css('height', '70px');
	    /*if (navigator.userAgent.indexOf('iPhone;') > -1) {
                $('.typing-box, .inputbox').css('height', '120px');
                $('.inputbox').css('bottom', '0px');
		$('.uploadIconStyle').css('bottom', '90px');
        	$('.uploadIconSpin').css('bottom', '90px');
            }*/
	    //$('.typing-box, .inputbox').css('height', '70px');
            $('.uploadIconStyle').css({'position':'fixed', 'right': '15px', 'bottom': bottomPosUnfocus});
            $('sendButton').hide();
	    if (navigator.userAgent.indexOf('iPhone;') > -1) {
                $('.typing-box, .inputbox').css('height', '120px');
                $('.inputbox').css('bottom', '0px');
                $('.uploadIconStyle').css('bottom', '90px');
                $('.uploadIconSpin').css('bottom', '90px');
		$('.sendButton').css({'position':'fixed', 'bottom': '65px'});
            }
        });
    });

    if (this.grataCb.osObject.browser === "Chrome") {
        $('.sendButton').css({'bottom': '20px', 'padding-top': '5px'});
        $('.sendButtonText').css({'bottom': '-1px', 'top': '2px'});
    } else if (this.grataCb.osObject.browser === "Firefox") {
        $('.sendButton').css({'bottom': '20px', 'padding-top': '5px', 'padding-bottom': '2px'});
    } else {
        $('.sendButton').css({'bottom': '20px', 'padding-top': '5px', 'padding-bottom': '2px'});
    }
    $('.typing-box').on("focus", function() {
        $('.reconnectTextContainer').css({'bottom': '40px'});
        //$('.testRewrapDiv').css({"height": "88%", "width": "100%"});//88B chat-container
        setTimeout(function () {
            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
        }, 1000);
        $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
    });

    var self = this;
    $('body').unbind('click');
    /*if (navigator.userAgent.indexOf('AliApp') > -1) {
	$('.typing-box').focusout().blur();
    }*/
    $('body').on("click", function(e) {
    $('.reconnectTextContainer').css({'bottom': '70px'});
        setTimeout(function () {
            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
        }, 1000);
        $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
        if ($(e.target)[0].className.indexOf('typing-box') > -1 || $(e.target)[0].className.indexOf('sendButton') > -1) {
            $('.sendButton').css({"background-color": "white", "color": self.grataCb.colorHeader, "border-color": self.grataCb.colorHeader});
            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
            return;
        }
        //$('.testRewrapDiv').css({"height": "91%", "width": "100%"});//B chat-container
        setTimeout(function () {
            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
        }, 1000);
        $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
    });

    $(document.documentElement.clientHeight).change(function() {
	//$('.chat-container').append('In change listenner height = ' + document.documentElement.clientHeight);
    });//window.innerHeight
    $(window.innerHeight).change(function() {
        //$('.chat-container').append('In change listenner height = ' + document.documentElement.clientHeight);
    });
    //document.addEventListener('blur', function(e) {$('.chat-container').append('COLLAPSED');});//works
    /*$(document).ready(function(){
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function(){
    if($(window).width() + $(window).height() != _originalSize){
      //alert("keyboard show up");
      $(".copyright_link").css("position","relative");  
    }else{
      alert("keyboard closed");
      $(".copyright_link").css("position","fixed");  
    }
  });
});*/
    self.testStatus = !self.testStatus;
    if (status == true || status == null) {
	//$(parent.window.document.getElementById('iframeChat')).show();
        if (this.grataCb.isChatBusy == true) {
            /*$('#window_chat').hide();*/
            if (showIfClicked() === false)
                return
            //return;
        }
	//if (self.testStatus == true) {
        if(!$('.chat-container').is(':visible')) {
        //if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) <= 99 || parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0], 10) <= 39) {
	    setFormContainer(false);
	    $('.chat-container').show();
	    if ($('.switchContainer').length > 0) {$('.switchContainer').show();}
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').show();}
            //$('.sendButton').show();
            //setClicked();//BusyStatus
            parent.window.document.getElementById('iframeChat').style.bottom = "0px";
            parent.window.document.getElementById('iframeChat').style.right = "0px";
	    parent.window.document.getElementById('iframeChat').style.left = "0px";
            parent.window.document.getElementById('iframeChat').style.height = '100%';
            parent.window.document.getElementById('iframeChat').style.width = '100%';
	    if (doIt !== undefined && doIt === "doIt") {
                $(parent.window.document.getElementById('iframeChat')).css('z-index', this.grataCb.optionRef.zIndex);
            } else {
                $(parent.window.document.getElementById('iframeChat')).css('z-index', '10000');
            }
	    //$('.chat-container').append('\nscreen height out = ' + screen.height);
          //$('.chat-container').append('client height out = ' + document.documentElement.clientHeight);
          //$('.chat-container').append('avail height out = ' + parent.window.screen.availHeight);
	    //$('.chat-container').append('window Inner height out = ' + window.innerHeight);
         // $('.chat-container').append('parent window Inner height out = ' + parent.window.innerHeight);
	    /*if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {
		parent.window.scrollTo(0, 0);window.scrollTo(0, 0);
		alert("in scroll up");
	    }*/
	    //$(parent.window.document.getElementById('iframeChat')).css('z-index', '100000');
            (parent.window.document.getElementById('iframeChat').style.height < 100) ? $('.typing-box').css('position', 'relative') : $('.typing-box').css('position', 'fixed');
            $('.typing-box').css('border', '1px solid #eeeeee');
            $('.inputbox').show();
            $('#chat-top').removeClass("mobileChatTop");
            $('#chat-top').css({'height': '40px', 'width': '100%', 'box-shadow': 'none'});//Test
            setMobileHeader(true);
	    setBiggerHeader();
	    sendGrataState('grataMaximized');
	    $('.consentContainer').show();
	    //$('#consentPage').show();
            //$('.uploadIconStyle').show().css('right', '70px');
            $('#chat-top, .testRewrapDiv, .typing-box').css({'border-bottom': 'none', 'margin-right': '0px'});
            if (self.grataCb.optionRef.borderColor !== null && self.grataCb.optionRef.borderColor !== undefined && self.grataCb.optionRef.borderColor !== "") {
                /*if (self.optionRef.chatHeader === "#FFFFFF") {
                    //avec border bottom
                    $('.testRewrapDiv, .typing-box').css({'border': '1px solid ' + self.optionRef.borderColor});
                } else {
                    //sans border bottom
                    $('.testRewrapDiv, .typing-box').css({'border': '1px solid ' + self.optionRef.borderColor, 'border-bottom': 'none'});
                }*/
                /*$('#chat-top, .testRewrapDiv, .typing-box').css({'border': '1px solid ' + self.grataCb.optionRef.borderColor, 'border-bottom': 'none', 'margin-right': '0px'});
                $('.testRewrapDiv').css({'border-top': 'none'});
                $('.testRewrapDiv').width($('#window_chat')[0].clientWidth - 2);*/
            }
            jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
        } else {
	    //alert('other here');
	    if ($('.switchContainer').length > 0) {$('.switchContainer').hide();}
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').hide();}
	    parent.window.document.getElementById('iframeChat').style.left = "unset";
	    parent.window.document.getElementById('iframeChat').style.top = "unset";
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', this.grataCb.optionRef.zIndex);
            $('.sendButton').hide();
            parent.window.document.getElementById('iframeChat').style.height = this.grataCb.optionRef.mobileButtonSize;//'66px';//Add reduced class for chat top
            $('#chat-top').css({'height': this.grataCb.optionRef.mobileButtonSize + 'px', 'border': 'none', 'border-radius': self.grataCb.optionRef.mobileButtonCorner + 'px'/*, 'width': '100%'*/});//Test
	    $('.inputbox, .typing-box').css({'border': 'none'});
            $('#chat-top').addClass("mobileChatTop");
            $('.inputbox').hide();
	    setMobileButton();
	    sendGrataState('grataMinimized');
	    $('.consentContainer').hide();
	    $('#consentPage').hide();
	    if (self.closeToken == true) {
                self.closeToken = null;
                setMobileChatTop(true);
                setMobileChatTop(true);
                self.toggleToken = false;
            } else {self.toggleToken = null;}
        }
        if (doIt === "doIt") {
	    parent.window.document.getElementById('iframeChat').style.left = "unset";
            $('.sendButton').hide();
            parent.window.document.getElementById('iframeChat').style.height = this.grataCb.optionRef.mobileButtonSize;//'66px';//Add reduced class for chat top
            //$('#chat-top').css({'height': '40px', 'width': '100%'});//Test
            $('#chat-top').addClass("mobileChatTop").css('border', 'none');
            $('.inputbox').hide();
        }
        //setSafariMobile(status, self);//Real
        jQuery('.usertyping, .inputbox, .chat-wrapper').toggle();
	if (self.toggleToken != false) {
            self.toggleToken = null;
            //jQuery('.chat-container,  .usertyping, .inputbox, .chat-wrapper').toggle();
        }
        jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
        if (status === true || status === null) {$('.inputbox, .typing-box').show();}
    } else {
	if (this.grataCb.optionRef.offlineEmailEnable === "false") {
            //$(parent.window.document.getElementById('iframeChat')).hide();
            return;
        }
	setFormContainer(true);
        $('.sendButton').hide();
	$('.consentContainer').hide();
        if (!$('.form-container').is(':visible')) {/*.loading-contaiiner*/
	    parent.window.document.getElementById('iframeChat').style.bottom = "0px";
            parent.window.document.getElementById('iframeChat').style.right = "0px";
            //parent.window.document.getElementById('iframeChat').style.left = "0px";
	    parent.window.document.getElementById('iframeChat').style.width = '100%';
            parent.window.document.getElementById('iframeChat').style.height = '100%';
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', '1000');
            $('#chat-top').removeClass("mobileChatTop");
            $('#chat-top').css({'height': '40px', 'width': '100%', 'box-shadow': 'none'});
            $('.typing-box').css('position', 'fixed');
            $('.typing-box').show();
            setMobileHeader(false);
	    setBiggerHeader();
	    $('.chatTopMenuIcon').hide();
    	    $('.chatTopArrowIcon').css('margin-right', '-20px');
	   // if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').show();}
        } else {
	    parent.window.document.getElementById('iframeChat').style.left = "unset";
	    parent.window.document.getElementById('iframeChat').style.width = this.grataCb.optionRef.mobileButtonSize;
            parent.window.document.getElementById('iframeChat').style.height = this.grataCb.optionRef.mobileButtonSize;//'66px';//Add reduced class for chat top
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', this.grataCb.optionRef.zIndex);
            $('.typing-box').css('position', 'relative');
            $('.typing-box').hide();
            $('#chat-top').addClass("mobileChatTop");
	    setMobileButton();
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').hide();}
        }
        if (doIt === "doIt") {
            $('#chat-top').addClass('emailHandler');
            $('#chat-top').removeClass('chatHandler');
            $('.status-bar').hide();
            $('.chat-wrapper').hide();
            $('.chat-container').hide();
            $('.inputbox').hide();
            $('.form-container').show();
            $('.form-container').toggle().show();
            toggleContainer(false);
        }
        jQuery('.form-container').toggle();
    }
}

function setFormContainer(status) {
    var self = this.grataCb;
    if (self.optionRef.offlineEmailEnable !== "true")
        return;
    var textDescription = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? decodeURIComponent(self.optionRef.chatMessageOfflineContactCn) : decode(self.optionRef.chatMessageOfflineContactEn);
        $('.formMessageTextHolder').text(textDescription);
    $(parent.window.document.getElementById('iframeChat')).show();
    if (status === true) {
	document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	addPPC(self.chatRef);
        checkPPC(self.chatRef);
	$('.form-container').css({'height': '100%', 'position': 'fixed', 'top': '40px'});
	var headerText = (self.localLang.indexOf('CN') > -1 || self.localLang.indexOf('zh') > -1) ? decodeURIComponent(self.optionRef.chatHeaderOfflineContactCn) : decode(self.optionRef.chatHeaderOfflineContactEn);
	//$('.form-container').show();
        $('.chat-title').text(headerText);
        $('.chatTopMenuIcon').hide();
        $('.chatTopArrowIcon').css('margin-right', '-25px');
        $('.inputGrataMessage').css('padding', '5px 10px');
        $('#btnSender').css({'font-size': '14px', 'padding-bottom': '22px', 'left': '-10.5%'});
	$('.inputNameError, .inputEmailError, .inputPhoneError, .inputMessageError').css('font-size', (parseInt(self.optionRef.fontSize)-2)+'px');

	if (self.isMobileConfig === true) {
            if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
                if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) < 100) {
                    $('#chat-top').css('border-radius', self.optionRef.mobileButtonCorner+'px');
                }
            } else {
                if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) < 39) {
                    $('#chat-top').css('border-radius', self.optionRef.mobileButtonCorner+'px');
                }
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) < 100) {
                $('#chat-top').css('border-radius', self.optionRef.buttonCorner+'px');
            }
        }

	setTimeout(function() {
	  if (self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
                if (self.isMobileConfig === true) {
                    if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
                        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
                            $('#chat-top').css({'border-radius': '0px', 'margin-right': '0px', 'width':'101%'});
                        }
                    } else {
                        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) > 39) {
                            $('#chat-top').css({'border-radius': '0px', 'margin-right': '0px', 'width':'101%'});
                        }
                    }
                } else {
                    if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
			$('#chat-top').css({'border-radius': self.optionRef.borderRadius+'px', 'margin-right': 'px', 'width':'100%'});
                    }
                }
            }
        }, 40);

	if (self.isMobileConfig === true) {
	    setTimeout(function() {
            	var marginRight = ($('.chatTopArrowIcon').length === 0) ? '5px' : '0px';
		marginRight = (self.orgId == 833581441007 && self.isMobileConfig == true) ? '3px' : marginRight;
		if (self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
                    marginRight = '0px';
		    leftAmount = '0px';
		    return;
                }
		var leftAmount = (self.orgId == 833581441007 && self.isMobileConfig == true) ? '5px' : '3px';
                $('#chat-top').css({'left': leftAmount, 'margin-right': marginRight});
            }, 10);
	} else {

	}
    } else {
        $('.chatTopMenuIcon').show();
        $('.chatTopArrowIcon').css('margin-right', '5px');
    }
}

/*function setMobileButton() {
    var self = this.grataCb;
    var iframeWidth = parseInt(self.optionRef.mobileButtonSize, 10) + 15;
    parent.window.document.getElementById('iframeChat').style.width = iframeWidth + 'px'; 
}*/

function setDesktopButtonHeader() {//SetButtonHeader
    var self = this.grataCb;
    $('.newMessageNotif').show();
    if (self.optionRef.buttonDisplay !== "0") {
        parent.window.document.getElementById('iframeChat').style.height = '39px'; 
        return;
    }
    parent.window.document.getElementById('iframeChat').style.height = self.optionRef.buttonSize + 'px';
    //parent.window.document.getElementById('iframeChat').style.width = ;
    if ($('.headerIcon').length === 0) {
	var url = self.optionRef.iconUrl;
        var icon = (self.optionRef.buttonTypeChoice == "1") ? '<div class="headerIcon unselectable" style="background-image: url('+url+');background-size:contain;background-repeat:no-repeat;outline:none !important;"></div>' : self.optionRef.buttonIcon.replace("'></i>", " headerIcon'></i>");
	//var icon = self.optionRef.buttonIcon.replace("'></i>", " headerIcon'></i>");
        $('#chat-top').empty().css({'width': self.optionRef.buttonSize + 'px', 'border-radius': self.optionRef.buttonCorner + 'px', 'padding-top': '0px'}).append(icon);
        //$('#chat-top').empty().css({'width': self.optionRef.buttonSize + 'px', 'border-radius': self.optionRef.buttonCorner + 'px'}).append('<i class="fal fa-comment-dots headerIcon"></i>');// style="font-size:20px !important"
    }
    $('.routingContainer, .contactPage').hide();
    //self.optionRef.iconSize = "40";
    var iconSize = self.optionRef.buttonIconSize;//parseInt(self.optionRef.buttonSize, 10) / 4;//3
    //$('.headerIcon').css({'font-size': iconSize + 'px'});
    (self.optionRef.buttonTypeChoice == "1") ? $('.headerIcon').css({'height': iconSize + 'px', 'width': iconSize + 'px'}) : $('.headerIcon').css({'font-size': iconSize + 'px'});
    var marginAmount = parseInt(self.optionRef.buttonSize, 10) - self.iconActualHeight;//$('.headerIcon').height();
    var marginTop = marginAmount / 2;//marginAmount + 1;//-1i
    //$('.headerIcon').css({'font-size': iconSize + 'px', 'margin-top': marginTop + 'px'});
    //iconSize = iconSize * 2.5;//2
    //$('#chat-top').css('font-size', iconSize + 'px');
    self.iconActualWidth = (self.iconActualWidth == 27) ? self.iconActualHeight : $('.headerIcon').width();
    var marginLeftAmount = parseInt(self.optionRef.buttonSize, 10) - self.iconActualWidth;//$('.headerIcon').width();
    var marginLeft = (marginLeftAmount / 2);
    $('#chat-top').css({'background-color': self.optionRef.buttonBackgroundColor});
    $('.headerIcon').css({'margin-left': marginLeft + 'px', 'margin-top': marginTop + 'px', 'color': self.optionRef.buttonIconColor});
    if (self.optionRef.buttonShadow === "true") {
        var iframeHeight = parseInt(self.optionRef.buttonSize, 10);
        iframeHeight = iframeHeight + 10;
        var iconHeight = iframeHeight - 10;
        parent.window.document.getElementById('iframeChat').style.height = iframeHeight + 'px';
        var shadowColor = (self.optionRef.buttonShadowStyle === "dark") ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)';
	//var rightMargin = (self.optionRef.buttonTypeChoice == "1" || self.optionRef.buttonTypeChoice == "2") ? "0px" : "10px";
        $('#chat-top').css({'box-shadow': '5px 6px 7px 0px ' + shadowColor, 'margin-right': "10px", 'min-height': 'unset','height': iconHeight + 'px'});
    } else {
	parent.window.document.getElementById('iframeChat').style.height = parseInt(self.optionRef.buttonSize, 10) + 'px';
    }
    if (self.optionRef.borderColor !== null && self.optionRef.borderColor !== undefined && self.optionRef.borderColor !== "") {
         $('#chat-top').css('border-color', self.optionRef.chatHeader);
    }
    var iframeWidth = parseInt(self.optionRef.buttonSize, 10) + 15;
    parent.window.document.getElementById('iframeChat').style.width = iframeWidth + 'px'; 
    //parent.window.document.getElementById('iframeChat').style.right = self.optionRef.buttonBufferX + 'px';
    //parent.window.document.getElementById('iframeChat').style.bottom = self.optionRef.buttonBufferY + 'px';
    parent.window.document.getElementById('iframeChat').style.right = (isNaN(self.optionRef.buttonBufferX) === false) ? self.optionRef.buttonBufferX + 'px' : self.optionRef.buttonBufferX;
    parent.window.document.getElementById('iframeChat').style.bottom = (isNaN(self.optionRef.buttonBufferY) === false) ? self.optionRef.buttonBufferY + 'px' : self.optionRef.buttonBufferY;
    makeImageIcon();
    setCustomIcon();
    setBurberryIcon();
}

function setCustomIcon(type) {
    var self = this.grataCb;
    if (self.optionRef.buttonTypeChoice == "1") {
        if (type == "newMsg") {
            var topAmount = parseInt($('.newMessageNotif')[0].style.top.split('px')[0], 10) - self.iconActualHeight;
            $('.newMessageNotif').css({'top': topAmount+'px'});
        } else {
            $('#chat-top').css('height', self.iconActualHeight+'px');
	    if (self.orgId == 464667121065) {
                $('#chat-top').css('height', (self.iconActualHeight+18)+'px');
            } else if (self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
                if (self.isMobileConfig == true && window.location.href.indexOf('/beauty/zh_cn/')) {
                    $('#chat-top').css('margin-top', '0px');
                }
            }
        }
    }
}

function setMobileHeader(isOnline) {
    //var newMessageText = (this.grataCb.localLang.indexOf("cn") === -1 && this.grataCb.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
    //var showNotif = ($('.chat-title').text().indexOf(newMessageText) === -1) ? false : true;
    //Append normal header with listeners
    var htmlToAppend = "";
    (self.isMobileConfig === true) ? $('#chat-top').empty().addClass('mobileChatTitle') : $('#chat-top').empty();
    //$('#chat-top').empty().addClass('mobileChatTitle');

    htmlToAppend = ' <div id="dialog"></div>';
    if (getCookie("inConv") !== "" && getCookie("inConv") !== null && getCookie("inConv") !== undefined && getCookie("inConv") !== 'null' && getCookie("inConv") !== 'undefined' && getCookie("inConv") != '0') {
        htmlToAppend += '<div class="chat-title" style="position:relative;color:'+this.grataCb.colorHeaderText+'">' + getCookie("inConv") + '</div>';
    } else {
        if (isOnline) {
            htmlToAppend += '<div class="chat-title" style="position:relative;color:'+this.grataCb.colorHeaderText+'">'+this.grataCb.chatMessageOnline+'</div>';
        } else {
            htmlToAppend += '<div class="chat-title" style="position:relative;color:'+this.grataCb.colorHeaderText+'">'+this.grataCb.chatMessageOffline+'</div>';
        }
    }
 
    var style = (self.isMobileConfig === true) ? 'style="margin-right: 16px;top: 9px;"' : 'style="margin-right: 5px;top: 10px;"';
    htmlToAppend += '<div class="chatTopIconsContainer">';
    //self.grataCb.audioEnable = true;//Test
    if (self.grataCb.audioEnable === true) {//fal fa-ellipsis-v
        htmlToAppend += '<i class="fa fa-caret-down chatTopArrowIcon" ' + style + '></i>\
                        <i class="fal fa-bars chatTopMenuIcon" style="top:10px;"></i>';
    } else {//fa fa-caret-down
        htmlToAppend += '<i class="fal fa-minus chatTopArrowIcon" ' + style + '></i>\
                         <i class="fal fa-times chatTopMenuIcon" style="top:10px;"></i>';
        setCookie('muteAudio', true, 1);
    }
    htmlToAppend += '</div>\
                    <br clear="all"/>';

    $('#chat-top').append(htmlToAppend);
    appendRoutingPage();
    if (self.grataCb.orgOnline === false && self.grataCb.optionRef.offlineEmailEnable === "true") {
        var title = (self.grataCb.localLang.indexOf("cn") === -1 && self.grataCb.localLang.indexOf("zh") === -1) ? decode(self.grataCb.optionRef.chatHeaderOfflineContactEn) : decodeURIComponent(self.grataCb.optionRef.chatHeaderOfflineContactCn);
        $('.chat-title').text(title);
    }
    checkOrgStatus();//Status update
    if ($('.contactPage').length > 0 && getCookie('routingDone') != "true") {showContactPage();$('.contactPage').show();}
    var biggerFont = self.grataCb.optionRef.fontSize + 3;
    $('.chat-title').css({'font-family': self.grataCb.chatFont, 'letter-spacing': self.grataCb.optionRef.charSpacing, 'font-weight': self.grataCb.optionRef.fontWeight, 'font-size': self.grataCb.optionRef.fontSize + 'px'});
    var height = (self.grataCb.isMobileConfig === false && self.grataCb.osObject.browser.indexOf('Internet') > -1) ? 'unset' : $('#chat-top').height()+'px';
    $('.chat-title').css({'padding': 'unset', 'height': '100%', 'line-height': height, 'padding-left': '10px'});
    $('#chat-top').css({'background-color' : self.grataCb.optionRef.chatHeader});
    if (self.grataCb.audioEnable === true) {
        //Appartient au deuxieme chat top
        if (getCookie('muteAudio') === "true") {
            var style = (self.isMobileConfig === true) ? '' : 'style="right: -14px;"';
            $('.chatTopIconsContainer').prepend('<i class="fal fa-bell-slash muteStatus" ' + style + '></i>');
        } else {
            $('.muteStatus').remove();
        }

        var muteText = (self.grataCb.localLang.indexOf("cn") === -1 && self.grataCb.localLang.indexOf("zh") === -1) ? "Mute Audio" : "æ¶æ¯åææ°";
        var leaveText = (self.grataCb.localLang.indexOf("cn") === -1 && self.grataCb.localLang.indexOf("zh") === -1) ? "Leave Chat" : "ç¦»å¼å¯¹è¯";
	var ppcMenuText = (self.grataCb.localLang.indexOf("cn") === -1 && self.grataCb.localLang.indexOf("zh") === -1) ? "Privacy policy" : "éç§æ¿ç­";

        $('#chat-top').append('<div class="webChatMenuContainer unselectable">\
                                <div id="muteAudio" class="webChatMenuSingle" style="border-bottom:none;">\
                                    <i class="fal fa-bell-slash webChatMenuIcon"></i>\
                                    <span class="webChatMenuText" style="margin-left:7px;">' + muteText + '</span>\
                                </div>\
				<div id="consenMenuId" class="webChatMenuSingle" style="border-bottom:none;">\
                                    <i class="fal fa-shield-check webChatMenuIcon"></i>\
                                    <span class="webChatMenuText">' + ppcMenuText + '</span>\
                                </div>\
                                <div id="leaveChat" class="webChatMenuSingle">\
                                    <i class="fal fa-times-circle webChatMenuIcon" style="font-size: 19px !important;"></i>\
                                    <span class="webChatMenuText" style="position: relative;left: 1px;">' + leaveText + '</span>\
                                </div>\
                            </div>');
	//appendBackButton();
        $('.webChatMenuContainer').css({'font-family': self.grataCb.chatFont, 'letter-spacing': self.grataCb.optionRef.charSpacing, 'font-weight': self.grataCb.optionRef.fontWeight, 'font-size': biggerFont + 'px'});
        $('body').on('click tap touch touchstart', function(e) {
            if ($(e.target)["0"].className.indexOf("webChatMenu") > -1) {
                return;
            }
	    //if (e.toElement !== undefined && e.toElement.type !== "textarea") {$('.typing-box').focusout().blur();}
            $('.webChatMenuContainer').hide();
        });

	if (/*self.grataCb.orgId != 6 && */self.grataCb.orgId != "205250481355" && self.grataCb.orgId != "122125966570" && self.grataCb.orgId != "023258393135") {
            $('#consenMenuId').remove();
	} else { 
	     /*var backText = "Back";
            $('.webChatMenuContainer').append('<div id="backButtonId" class="webChatMenuSingle" style="display:none;border-bottom:none;">\
                                                    <i class="fal fa-undo webChatMenuIcon"></i>\
                                                    <span class="webChatMenuText">' + backText + '</span>\
                                                </div>');

            $('#backButtonId').click(function() {
                $('#consentPage').hide();
                $('#backButtonId').hide();
                $('.webChatMenuContainer').hide();
                return false;
            });*/

            $('#consenMenuId').unbind('click');
            $('#consenMenuId').click(function() {
		appendConsentPage(self.grataCb.chatRef);
		$('#consentPage').show();
                $('.backIconContainer').show();
                var titlePPC = (self.grataCb.localLang.indexOf('CN') == -1 || self.grataCb.localLang.indexOf('zh') == -1) ? "Privacy - CHRISTIAN DIOR" : "éç§å£°æ - CHRISTIAN DIOR";
                $('.chat-title').text(titlePPC);
                $('#backButtonId').show();
                $('.webChatMenuContainer').hide();
                return false;
            });

	    $('.backIconContainer').remove();
            $('#chat-top').prepend('<div class="backIconContainer" style="display:none;"><i class="fal fa-long-arrow-left backIcon"></i></div>');
            
            $('.backIconContainer').click(function(e) {
                $('.backIconContainer').hide();
                $('#consentPage').hide();
		$('.chat-title').text(self.grataCb.chatHeader);
                e.preventDefault();
                return false;
            });
	}
        $('#muteAudio').unbind('click');
        $('#muteAudio').click(function () {
            (getCookie('muteAudio') === "true") ? setCookie('muteAudio', false, 1) : setCookie('muteAudio', true, 1);

            if (getCookie('muteAudio') === "true") {
                var style = (self.isMobileConfig === true) ? 'style="position: relative;right: 7px;"' : 'style="position: relative;right: -12px;"';
                $('.chatTopIconsContainer').prepend('<i class="fal fa-bell-slash muteStatus" ' + style + '></i>');
            } else {
                $('.muteStatus').remove();
            }

            $('.webChatMenuContainer').hide();
            return false;
        });

        $('#leaveChat').unbind('click');
        $('#leaveChat').click(function () {
            $('.webChatMenuContainer').hide();
	    $('#consentPage').hide();
            $('.confirmQuitContainer').show();
            return false;
        });

        $('.chatTopMenuIcon').unbind('click');
        $('.chatTopMenuIcon').click(function() {
            $('.webChatMenuContainer').css('top', $('#chat-top')[0].clientHeight);
            $('.webChatMenuContainer').show();
            $(this).focusout();
            return false;
        });
    } else {
        $('.chatTopMenuIcon').unbind('click');
        $('.chatTopMenuIcon').click(function() {
            $('.confirmQuitContainer').show();
            return false;
        });
    }
    manageMenuAndIcon();    
}

function manageMenuAndIcon() {
    var self = this.grataCb;
    if (self.orgId != "839731165445") {
        if (self.orgId != "6")
            return;
    }

    if ($('.routingContainer').length === 0) {
        $('.chatTopMenuIcon').unbind('click');
        $('.chatTopMenuIcon').click(function() {
            $('.webChatMenuContainer').css('top', $('#chat-top')[0].clientHeight);
            $('.webChatMenuContainer').show();
            $(this).focusout();
            return false;
        });
        appendBackButton();
        return;
    }

    $('.chatTopMenuIcon').addClass('fa-times').removeClass('fa-bars');
    $('.chatTopMenuIcon').unbind('click');
    $('.chatTopMenuIcon').click(function() {
        (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
        (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
    });
}

function appendBackButton() {
    var self = this.grataCb;
    return;
    if (self.orgId != "839731165445") {
        //if (self.orgId != "6")
            return;
    }
    $('#showRouting').remove();
    var backText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Back to menu": "è¿åèå";
    $('.webChatMenuContainer').prepend('<div id="showRouting" class="webChatMenuSingle">\
                                            <i class="fal fa-undo webChatMenuIcon" style="font-size: 19px !important;"></i>\
                                            <span class="webChatMenuText" style="position: relative;left: 1px;">' + backText + '</span>\
                                        </div>').css({'width': '50%', 'z-index': '100'});
    $('#showRouting').unbind('click');
    $('#showRouting').click(function() {
	setCookie('routingDone', false, 1);
	$('.webChatMenuContainer').hide();
        appendRoutingPage();
	$('.routingContainer').show();
	return false;
    }).css('border-bottom', 'none');
}

function appendQuitPage(el) {
    var self = el;
    var firstSentence = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Are you sure you want to leave this chat?" : "æ¨ç¡®å®è¦ç»æèå¤©å?";
    var yesButton = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Yes" : "æ¯";
    var noButton = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "No" : "å¦";
    var secFirstSentence = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "You will no longer receive messages." : "ç»æåæ¨å°ä¸åæ¥æ¶æ¶æ¯ã";
    var secSecondSentence = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Send another message to re-open your chat." : "åéå¦ä¸æ¡æ¶æ¯å¯éæ°æå¼æ¨çèå¤©ã";

    if ($('.confirmQuitContainer').length > 0)
        $('.confirmQuitContainer').remove();

    $('#window_chat').append('<div class="confirmQuitContainer">\
                                <div class="confirmQuitSentence">\
                                    <span class="confirmQuitText">' + firstSentence + '</span>\
                                </div>\
                                <div class="confirmQuitButtonContainer unselectable">\
                                    <div id="closeNo" class="confirmNoButton">' + noButton + '</div>\
                                    <div id="closeYes" class="confirmYesButton">' + yesButton + '</div>\
                                </div>\
                                <div class="confirmQuitSecondaryText">\
                                    <div class="confirmQuitSecContOne">\
                                        <span class="confirmQuitSecondaryTextOne">' + secFirstSentence + '</span>\
                                    </div>\
                                    <div class="confirmQuitSecContTwo">\
                                        <span class="confirmQuitSecondaryTextTwo">' + secSecondSentence + '</span>\
                                    </div>\
                                </div>\
                            </div>');

    if (self.isMobileConfig) {
        $('.confirmQuitContainer').css({'height': '100%', 'top': '0px'});
    } else {
        $('.confirmQuitContainer').css({'height': '100%', 'top': '6px'});
    }

    $('.chatTopCloseIcon').unbind('click');
    $('.chatTopCloseIcon').click(function() {
        //Test if is mobile 
        if (self.isMobileConfig) {
            //New Mobile Flow
        } else {
            //self.optionRef.chatHeight
            if (parent.window.document.getElementById('iframeChat').style.height !== self.optionRef.chatHeight + 'px'/*390*/) {
                parent.window.document.getElementById('iframeChat').style.height = self.optionRef.chatHeight + 'px'/*'390px'*/;
                jQuery('.chatTopArrowIcon').addClass("fa-rotate-180");
                if (!$('.chat-container').is(':visible')) {
                    jQuery('.chat-container,  .usertyping, .inputbox, .chat-wrapper').toggle();
                    jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);   
                }
            }
            $('.confirmQuitContainer').show();
        }
        return false;
    });

    $('.confirmYesButton').unbind('hover');
    $('.confirmYesButton').hover(function() {
        $('.confirmYesButton').css({"background-color": self.colorHeader, "color": "white"});
        $('.confirmYesButton').mouseout(function () {
            $('.confirmYesButton').css({"background-color": "#e8e8e8", "color": "#0c0c0cc2"});
        });
    });
    
    $('.confirmNoButton').unbind('hover');
    $('.confirmNoButton').hover(function() {
        $('.confirmNoButton').css({"background-color": self.colorHeader, "color": "white"});
        $('.confirmNoButton').mouseout(function () {
            $('.confirmNoButton').css({"background-color": "transparent", "color": "#e8e8e8"});
        });
    });

    $('#closeNo').unbind('click');
    $('#closeNo').click(function() {
        $('.confirmQuitContainer').hide();
    });
}

function appendRoutingPage() {
    var self = this.grataCb;
    return;
    if (getCookie('routingDone') == "true") {return;}
    if (self.orgId != "839731165445") {
        /*if (self.orgId != "6")*/
            return;
    }

    var secondSentence = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Children's wear or online support" : "ç«¥è£æçº¿ä¸åå©";
    var firstSentence = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Product related questions" : "äº§åç¸å³é®é¢";
    var firstIcon = '<i class="fad fa-bags-shopping routingIconStyle"></i>';
    var secondIcon = '<i class="fad fa-user-headset routingIconStyle"></i>';
    var marginTop = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "13px" : "9px" ;
    var chatTitle = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "PLEASE SELECT QUESTIONS" : "è¯·éæ©å¨è¯¢é®é¢" ;
    $('.routingContainer').remove();

    $('#window_chat').append('<div class="routingContainer">\
                                <div class="routingQuestionMainContainer">\
				    <div id="question1" class="routingSingleQuestionContainer" style="background-color:'+self.optionRef.chatBackground+';">\
                                        <div class="routingIconContainer" style="color:'+self.optionRef.chatHeader+';">'+firstIcon+'</div>\
                                      <div class="routingQuestionContainer" style="color:'+self.optionRef.chatText+';margin-top:'+marginTop+';"><span>'+firstSentence+'</span></div>\
                                    </div>\
				    <div id="question2" class="routingSingleQuestionContainer" style="background-color:'+self.optionRef.chatBackground+';">\
                                        <div class="routingIconContainer" style="color:'+self.optionRef.chatHeader+';margin-left: 5px;margin-right: 20px;">'+secondIcon+'</div>\
                                        <div class="routingQuestionContainer" style="color:'+self.optionRef.chatText+';margin-top:'+marginTop+';"><span>'+secondSentence+'</span></div>\
                                    </div>\
                                </div>\
                            </div>');
    if (navigator.userAgent.indexOf('iPad') > -1) {$('.routingContainer').css('margin-top', '58px');}
    $('.chat-title').text(chatTitle);
    $('.routingQuestionMainContainer').css({'font-size': self.optionRef.fontSize+'px'});
    $('.routingSingleQuestionContainer').mouseover(function() {
        $(this).css('background-color', self.optionRef.systemBackground);
    }).mouseout(function() {
        $(this).css('background-color', self.optionRef.chatBackground);
    });
    setTimeout(function() {
        var el = $('.routingSingleQuestionContainer');
        for (var i = 0;i < el.length;i++) {
            if ($('#'+el[i].id + ' .routingQuestionContainer')[0].offsetHeight <= 18) {
                $('#'+el[i].id + ' .routingIconContainer').css({'position':'relative', 'top': '3px'});
            }
        }
    }, 1);

    if (self.isMobileConfig == true) {$('.routingContainer').css('margin-top', '40px')}
    $('.routingContainer, .contactPage').show();

    $('#question1').click(function() {
	grataSelectedQuestion("Product related questions");
        setCookie('routingDone', true, 1);
        $('.chatTopMenuIcon').addClass('fa-bars').removeClass('fa-times');
        $('.routingContainer').hide().remove();
	enableWebchat();
	appendBackButton();
        $('.chatTopMenuIcon').unbind('click');
        $('.chatTopMenuIcon').click(function() {
            $('.webChatMenuContainer').css('top', $('#chat-top')[0].clientHeight);
            $('.webChatMenuContainer').show();
            $(this).focusout();
            return false;
        });
    });


    if ($('.contactPage').length > 0) {
        showContactPage();
        $('.contactPage').show();
    }
    $('#question2').click(function() {
	grataSelectedQuestion("Children's wear or online support");
        if (launchCSEvent('button') == false) {
            grataCSOffline();
            showContactPage();
	    $('.contactPage').show();
        }
    });
}

function grataButtonClicked() {
    fireEvent('grataButtonClicked', {});
}

function grataQRShared(type) {
    fireEvent('grataQRShared', {'QRType': type});
}

function grataUserNotServiced(name) {
    fireEvent("grataUserNotServiced", {});
}

function grataConsentResponse(name, data) {
    fireEvent(name, data);
}

function grataFirstAgentResponse() {
    var self = this.grataCb;
    if (self.firstAgentResponseSent != true) {
        fireEvent('grataFirstAgentResponse', {});
        self.firstAgentResponseSent = true
    }
}

function grataFirstUserMessage(name, data) {
    var self = this;
    if (self.firstUserResponseSent != true && self.getCookie('grataFirstUserMessage') != "true") {
        console.log("First message event");
        fireEvent('grataFirstUserMessage', {});
        self.firstUserResponseSent = true;
        setCookie('grataFirstUserMessage', "true", 1);
    }
}

function grataCSOffline() {
    fireEvent('grataCSOffline', {});
}

function grataSelectedQuestion(type) {
    fireEvent('grataSelectedQuestion', {'clickedButton': type});
}

function launchKeywordEvent(type, keywordType, keyword) {
    if (type == "cs") {
        if (keywordType == "keyword") {
            fireEvent('csOfflineReply', {'keywordType': keywordType, 'keyword': keyword});
        } else {
            fireEvent('csOfflineReply', {'keywordType': keywordType});
        }
    } else if (type == 'store') {
        if (keywordType == "keyword") {
            fireEvent('directToStore', {'keywordType': keywordType, 'keyword': keyword});
        } else {
            fireEvent('directToStore', {'keywordType': keywordType});
        }
    }
}

function sendGrataState(eventName) {
    if (this.grataCb.orgId != "839731165445") {return;}
    if ($(parent.window.document.getElementById('iframeChat')).is(':visible') == true) {
        fireEvent(eventName, {});
    } /* Else state hidden*/
}

function fireEvent(name, data) {
    var self = this.grataCb;
    var event;
    event = document.createEvent('Event');
    event.grataValues = data;
    event.initEvent(name, true, true);
    parent.window.document.dispatchEvent(event);
}

function launchCSEvent(type, keyword) {
    var self = this.grataCb;
    if (self.csStatus == true) {
	if (type == "keyword") {
            fireEvent('launchCS', {'source': type, 'keyword': keyword});
        } else {
            fireEvent('launchCS', {'source': type});
        }
	setCookie('routingDone', "", 1)
	appendRoutingPage();
	if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) <= 99 || parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0], 10) <= 39) {
            //console.log("collapsed");
        } else {
	     minimizeChat();
	    /*(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
	    (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);*/
	}
	//(self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
        self.hideGrata = true;
        self.isShowGrata = false;
	self.fromLaunchCs = true;
        $(parent.window.document.getElementById('iframeChat')).hide();
        return true;
    } else if (type == "timeout" && self.csStatus != true) {
        grataUserNotServiced();
    }
    return false;
}

function showContactPage() {
    var self = this.grataCb;
    $('.contactPage').remove();
    $('.chatTopMenuIcon').removeClass('fa-bars').addClass('fa-times').unbind('click');

    var help = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Help is available 24 hours a day,<br/>7 days a week." : "åæå©æ¸©é¦¨æä¾ä¸å¨7å¤©å¨æ¥24å°æ¶çè´´å¿å¸®å©ã";
    var call = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Call US" : "èç³»æä»¬";
    var num = "4001 201 154";
    var underNum = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Mandarin (09:00 - 19:00 HKT)" : "æ®éè¯æå¡ (09:00-19:00) åäº¬æ¶é´" ;
    var plusUnderText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "* This number may not be accessible or free from some mobile networks. We may monitor or record your call for training and quality control." : "*æäºææºè¿è¥åå¯è½æ æ³æ¥éæ­¤çµè¯å·ç ï¼æèéè¦é¢å¤ä»è´¹ãæä»¬å¯è½ä¼çæ§æè®°å½æ¨çéè¯åå®¹ï¼ç¨äºåå·¥å¹è®­æè´¨éä¿è¯ç®çã";
    var or = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "or" : "æ";
    var emailSentence = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Email US" : "çµå­é®ä»¶";
    var email = "cn.customerservice@burberry.com";
    var title = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "CONTACT US" : "èç³»æä»¬";
    var html = "";

    $('.chat-title').text(title);

    if (self.orgId == "839731165445" || self.orgId != "6") {
        html = '<div class="contactPage" style="text-align:center;font-family:'+self.optionRef.font+';padding: 20px;background-color:white;z-index: 20;">\
                    <div style="font-size: 14px;line-height: 22px;color: #999999;margin-top: 20px;">'+help+'</div>\
                    <div style="font-size: 16px;line-height: 24px;text-align: center;letter-spacing: 1px;text-transform: uppercase;margin-top: 30px;font-weight: 600;">'+call+'</div>\
		    <a href="tel:'+num+'"style="font-size: 14px;line-height: 22px;text-decoration-line:underline;color:black;margin-top: 15px;">'+num+'</a>\
                    <div style="font-size: 14px;line-height: 22px;color:black;">'+underNum+'</div>\
                    <div style="font-size: 10px;line-height: 16px;color: #999999;margin-top: 10px;">'+plusUnderText+'</div>\
                    <div style="font-size: 14px;line-height: 22px;margin-top: 20px;"><hr style="width: 80px;float: left;margin-top: 10px;margin-left:15%;">'+or+'<hr style="width: 80px;float: right;margin-top: 10px;margin-right:15%;"></div>\
                    <div style="font-size: 16px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;margin-top: 20px;font-weight: 600;">'+emailSentence+'</div>\
		    <a href="mailto:'+email+'"style="font-size: 14px;line-height: 22px;text-decoration-line: underline;color:black;margin-top: 10px;">'+email+'</a>\
                </div>';
    } else {
        html = '<div class="contactPage">To be Arranged</div>';
    }
    $('#window_chat').append(html);
    appendBackButton();
    if (navigator.userAgent.indexOf('iPad') > -1) {$('.contactPage').css('margin-top', '58px');}
    $('.backIconContainer').remove();
    $('#chat-top').prepend('<div class="backIconContainer"><i class="fal fa-long-arrow-left backIcon"></i></div>');
    

    $('.backIconContainer').click(function(e) {
        $('.contactPage, .backIconContainer').remove();
	setMobileHeader();
	var title = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "How may we help you?" : "è¯·éæ©å¨è¯¢é®é¢";
        $('.chat-title').text(title);
        e.preventDefault();
        return false;
    });
}

function setBiggerHeader() {
    var self = this.grataCb;
    if (navigator.userAgent.indexOf('iPad') == -1) {return;}
    $('.confirmQuitContainer').css('margin-top', '58px');
    if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) > 100) {
        $('#chat-top').css('padding-top', '20px')
    } else {
        $('#chat-top').css('padding-top', '0px')
    }
    /*$('.chat-title').css('line-height', '25px');
    $('.chatTopMenuIcon').css({'padding': '10px', 'padding-right': '13px', 'right': '0'});
    $('.chatTopArrowIcon').css({'top': '9px', 'padding': '10px', 'padding-right': '13px', 'right': '30px'});*/
}

function printLog (msg, line) {
    if (this.grataCb === undefined)
        return;
    if (this.grataCb.isDevMode === true)
        console.log("Line " + line + " : " + msg)
}

function toggleContainer(status, toggle) {//Automatic refresh happens here each 15s
    printLog("New Status is equal = " + status, 807);
    //(status === true) ? $('.chat-title').text(this.grataCb.chatMessageOnline) : $('.chat-title').text(this.grataCb.chatMessageOffline);//orgOnline
    if (status == true || status == null) {
        jQuery('.chat-wrapper').css('background', 'transparent');
        $('#chat-top').addClass('chatHandler');
        $('#chat-top').removeClass('emailHandler');
        /*jQuery('.form-container').hide();
        jQuery('.chat-wrapper').show();
        jQuery('.chat-container').show();
        jQuery('.inputbox').show();
	    (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) < 70) ? $('.inputbox, .typing-box').hide() : $('.typing-box, .inputbox').show();
	if (this.grataCb.isMobileConfig === true) {
            if (parent.window.document.getElementById('iframeChat').style.height.indexOf('vh') > -1)
                $('.typing-box, .inputbox').show();
        }*/
    } else {
      if (this.grataCb.optionRef.offlineEmailEnable === "true") {
        $('#chat-top').addClass('emailHandler');
        $('#chat-top').removeClass('chatHandler');
        /*$('.status-bar').hide();
        $('.chat-wrapper').hide();
        $('.chat-container').hide();
        $('.inputbox').hide();*/
        //$('.form-container').show();
      }
    }
    (this.grataCb.isChatBusy == true) ? showIfClicked() : jQuery("#window_chat").show();
    if (this.grataCb.optionRef.offlineEmailEnable === "false") {
            if (this.grataCb.orgOnline === false) {
                $('#window_chat').hide();
                showIfClicked();
        }
    }
    var self = this.grataCb;

    var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
    if (!fs) {
      //console.log("check failed?");//Happen in FF
    } else {
     /* fs(window.TEMPORARY,
         100,
         function() {
            jQuery('#chat-top').unbind('click').off();
            jQuery('#chat-top').click(function() {
		if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {$(parent.window.document.getElementById('iframeChat')).css({'transition': '0ms'});}//iPadTest
		setClicked();
		doRegister(self.status);
		doAddUrl(false);
                $('.newMessageNotif').remove();
		resetUnreads();
                if ($('.chatTopArrowIcon').hasClass('fa-caret-down')) {
                    $('.chatTopArrowIcon').removeClass('fa-caret-down').addClass('fa-caret-up');
                } else {
                    $('.chatTopArrowIcon').removeClass('fa-caret-up').addClass('fa-caret-down');
                }
                $('.chat-container').focus();
                //if (self.orgOnline === false)//[orgOnline]
                    //self.status = false;
                if (self.orgOnline === false && self.optionRef.offlineEmailEnable === "true") {
                    self.status = false;
                } else {
                    self.status = true;
                }
                if (self.isMobileConfig === true) {
		    checkUnderlayerFlow(true, "");
                    setMobileChatTop(self.status);
                } else { 
                    setDesktopChat(self.status);
                }

            });

         },
         console.log.bind(console, "incognito mode"));*/
	var defaultMessage = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";
      setTimeout(function() {
	if ($('.typing-box').val() === '' || $('.typing-box').val() === defaultMessage) {
        	$('.typing-box').val("");
      	}
      }, 2000);
    }


    /*jQuery('#chat-top').unbind('click').off();
    jQuery('#chat-top').click(function() {
        (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
    });*/

    if (self.orgOnline === false) {
        if (self.optionRef.offlineEmailEnable === 'false') {
            if (self.showStatus !== 'clicked' && self.showStatus !== 'inchat' && self.showStatus !== 'waiting' && self.showStatus !== 'autoreply') {
                //$(parent.window.document.getElementById('iframeChat')).hide();
		//return;
		if (this.grataCb.optionRef.busyHide == "0") {
                    $(parent.window.document.getElementById('iframeChat')).show();
                } else {
                    $(parent.window.document.getElementById('iframeChat')).hide();
                    return;
                }
            } else {
                $(parent.window.document.getElementById('iframeChat')).show();
		self.status = true;
            }
        } else {
            $(parent.window.document.getElementById('iframeChat')).show();
        }
    } else {
        $(parent.window.document.getElementById('iframeChat')).show();
	if (self.accessCode == 464667121065) {
        if (self.clickButtonId === "#" || self.clickButtonId === ".") {self.clickButtonId = "";}
        if ($(parent.window.document).find(self.clickButtonId).length > 0) {
            if (self.showStatus === "false" || self.showStatus === undefined) {
		//(self.isMobileConfig === true) ? setMobileChatTop(true) : setDesktopChat(true);
                $(parent.window.document.getElementById('iframeChat')).hide();
		return;
            } else {
                $(parent.window.document.getElementById('iframeChat')).show();
            }
        } else {
	    if (self.clickButtonId !== "" && self.showStatus === "false" || self.showStatus === undefined) {
                $(parent.window.document.getElementById('iframeChat')).hide();
		return;
            } else {
                $(parent.window.document.getElementById('iframeChat')).show();
            }
        }
	}
    }


    if (parent.window.document.getElementById('iframeChat') != null && parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) < 100) {
        //if (status !== false)//LV TEST
        //jQuery('#chat-top').click();
        //if (self.orgOnline === false)
            //self.status = false;
        if (self.isMobileConfig === true) {
            if (parent.window.document.getElementById('iframeChat').style.height.indexOf('vh') > -1) {
		self.status = true;
                return
	    }
        }
        if (self.orgOnline === false && self.optionRef.offlineEmailEnable === "true") {
            self.status = false;
        } else {
            self.status = true;
        }
	/*if (self.isShowGrata === false) {
            if (self.isMobileConfig === true) {
            	setMobileChatTop(self.status);
            } else { 
            	setDesktopChat(self.status);
            }
	}*/
	//(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
	(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
	if (toggle !== "dontToggle"  && self.orgId != "839731165445") {
	    /*if (self.isMobileConfig === true) {
            	setMobileChatTop(self.status);
            } else { 
            	setDesktopChat(self.status);
            }*/
	}
	//$('#chat-top').click();	
	/*if (self.isMobileConfig === true) {
                setMobileChatTop(self.status);
            }*/ 
	/*if (self.isShowGrata === false) {
	    (self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
            if (self.isMobileConfig === true) {
                setMobileChatTop(self.status);
            } else { 
                setDesktopChat(self.status);
            }
        } else {
            if (self.isMobileConfig === true) {
                setMobileChatTop(self.status);
                //setMobileChatTop(self.status);
            } else { 
                setDesktopChat(self.status);
                //setDesktopChat(self.status);
            }
        }*/
        //$('#chat-top').css('margin-bottom', '10000px');
    }

    if (self.originalOrgOnline === false && self.optionRef.offlineEmailEnable === "true") {
    	if (self.isMobileConfig === true) {
        if (parent.window.document.getElementById('iframeChat').style.height.indexOf('px') > -1) {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
                $('.form-container').show();
            } else {
                $('.form-container').hide();
            }
        } else {
            if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('vh')[0].split('%')[0]) > 39) {
                $('.form-container').show();
            } else {
                $('.form-container').hide();
            }
        }
    } else {
        if (parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0]) > 100) {
            $('.form-container').show();
        } else {
            $('.form-container').hide();
        }
       }

    }

    if (self.isMobileConfig === true) {
        if (window !== undefined && window.orientation !== undefined) {
            if (window.orientation == 0 || window.orientation == 180) {
                self.optionRef.fontSize = parseInt(self.optionRef.fontSize, 10);
                $('#chat-top, .inputGrataName, .inputGrataEmail, .inputGrataPhone, .chat-container, .typing-box, .form-container, .inputGrataMessage, .chat-title').css('font-size', self.optionRef.fontSize + 'px');
                $('#chat-top').attr('style', $('#chat-top').attr('style') + self.optionRef.fontSize + 'px !important');
                $('.chat-container').attr('style', $('.chat-container').attr('style') + self.optionRef.fontSize + 'px !important');
                $('.webChatMenuContainer').css('font-size', (self.optionRef.fontSize + 3) + 'px');
                $('.historyButton').css('font-size', (self.optionRef.fontSize - 3) + 'px');
                if (navigator.userAgent.indexOf('iPhone') > -1) {
                    $('.typing-box').css('font-size', '16px');
                }
                checkOrgStatus();
            } else {
		if (self.orgId != "839731165445") {
                    $('.typing-box').blur();
                    $(parent.window.document.getElementById('iframeChat')).hide();
		}
            }
        }
    }

}
function setDesktopChat(status) {
    var self = this.grataCb;
    parent.window.document.getElementById('iframeChat').style.bottom = "0px";
    parent.window.document.getElementById('iframeChat').style.right = (self.orgId == "205250481355"  || self.orgId == "122125966570" || self.orgId == "023258393135") ? "0px" : "20px";
    //var newMessageText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
    //if ($('.chat-title').text().indexOf(newMessageText) === -1)
        //$('.newMessageNotif').hide();

    if (this.grataCb.osObject.browser === "Safari") {$('.chat-title').css('font-weight', 'normal');}
    $('.sendButton').css({'margin-top': '0%', 'padding-bottom': '0px', 'bottom': '20px', 'padding-top': '5px'}).show();
    if (this.grataCb.osObject.browser === "Chrome") {$('.sendButtonText').css('bottom', '0px');}
    if (status == true || status == null) {
	//$(parent.window.document.getElementById('iframeChat')).show();
        if (this.grataCb.isChatBusy == true) {
            if (showIfClicked() === false)
                return;
        }
        if (!$('.chat-container').is(':visible')) {
	    if ($('.switchContainer').length > 0) {$('.switchContainer').show();}
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').show();}
            $('.uploadIconStyle').show();
	    $('.chat-container').show();
	    setFormContainer(false);
            //setClicked();//BusyStatus
            parent.window.document.getElementById('iframeChat').style.height = this.grataCb.optionRef.chatHeight + 'px'/*'390px'*/;
            parent.window.document.getElementById('iframeChat').style.width = this.grataCb.optionRef.chatWidth + 'px';
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', '100000');
            jQuery('.chatTopCloseIcon').show();
            $('.chatTopArrowIcon').css('right', '40px');
            $('#chat-top').css({'height': '40px', 'width': '100%', 'box-shadow': 'none', 'border-radius': '0px', 'border-top-left-radius': self.chatRadius + 'px', 'border-top-right-radius': self.chatRadius + 'px', 'margin-right': '0px'});
            jQuery('#window_chat').css('bottom', '-4px');
            jQuery('.chatTopArrowIcon').addClass("fa-rotate-180");
            $('.typing-box').addClass('typing-boxDesktop');
            setMobileHeader(self.originalOrgOnline);
	    setBiggerHeader();
	    sendGrataState('grataMaximized');
	   $('.consentContainer').show();
	    //$('#consentPage').show();
            if (this.grataCb.optionRef.borderColor !== null && this.grataCb.optionRef.borderColor !== undefined && this.grataCb.optionRef.borderColor !== "") {
                /*if (self.optionRef.chatHeader === "#FFFFFF") {
                    //avec border bottom
                    $('.testRewrapDiv, .typing-box').css({'border': '1px solid ' + self.optionRef.borderColor});
                } else {
                    //sans border bottom
                    $('.testRewrapDiv, .typing-box').css({'border': '1px solid ' + self.optionRef.borderColor, 'border-bottom': 'none'});
                }*/
                $('#chat-top, .testRewrapDiv, .typing-box').css({'border': '1px solid ' + this.grataCb.optionRef.borderColor, 'border-bottom': 'none', 'margin-right': '0px'});
                $('.testRewrapDiv').css({'border-top': 'none'});
                $('.testRewrapDiv').width(parseInt(/*parent.window.document.getElementById('iframeChat').style.width*/this.grataCb.optionRef.chatWidth.split('px')[0], 10) - 2);
            } else {
                $('#chat-top').css('width', '100%');
            }
        } else {
	    if ($('.switchContainer').length > 0) {$('.switchContainer').hide();}
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').hide();}
            parent.window.document.getElementById('iframeChat').style.height = '39px';
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', this.grataCb.optionRef.zIndex);
            jQuery('.chatTopCloseIcon').hide();
            $('.chatTopArrowIcon').css('right', '17px');
            $('#chat-top').css({'height': self.optionRef.buttonSize+'px'/*'100%'*/, 'border': 'none'});
            jQuery('#window_chat').css('bottom', '0px');
            jQuery('.chatTopArrowIcon').removeClass("fa-rotate-180");
            $('.chatTopMenuIcon, .muteStatus').remove();
	    $('.consentContainer').hide();
	    $('#consentPage').hide();
            setDesktopButtonHeader();
	    sendGrataState('grataMinimized');
	    if (self.closeToken == true) {
		self.closeToken = null;
		setDesktopChat(true);
		setDesktopChat(true);
		self.toggleToken = false;
	    } else {self.toggleToken = null;}
	    if (self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
                $('.headerIcon').css({'width': '50px', 'height': '76px'});
            }
	    if (self.orgId == "839731165445") {
                $('.headerIcon').css({'width': '46px', 'height': '46px'});
            }
        }
        setSafariIpad();
        //(parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) < 100) ? $('.sendButton').hide() : $('.sendButton').show();
	jQuery('.usertyping, .inputbox, .chat-wrapper').toggle();
        if (self.toggleToken != false) {
		self.toggleToken = null;
	}
		//jQuery('.chat-container,  .usertyping, .inputbox, .chat-wrapper').toggle();}
        if (status === true  || status == null) {$('.inputbox, .typing-box').show();}
        jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
    } else {
	if (this.grataCb.optionRef.offlineEmailEnable === "false") {
            //$(parent.window.document.getElementById('iframeChat')).hide();
            return;
        }
	setFormContainer(true);
        if (!$('.form-container').is(':visible')) {
            parent.window.document.getElementById('iframeChat').style.height = this.grataCb.optionRef.chatHeight + 'px'/*'390px'*/;
            parent.window.document.getElementById('iframeChat').style.width = this.grataCb.optionRef.chatWidth + 'px';
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', '1000');
            $('.chatTopArrowIcon').css('right', '40px');
            $('#chat-top').css({'height': '40px', 'width': '100%', 'box-shadow': 'none', 'border-radius': '0px', 'border-top-left-radius': self.chatRadius + 'px', 'border-top-right-radius': self.chatRadius + 'px', 'margin-right': '0px'});//10%
            jQuery('#window_chat').css('bottom', '-4px');
            jQuery('.chatTopCloseIcon').show();
            jQuery('.chatTopArrowIcon').addClass("fa-rotate-180");
            setMobileHeader(false);
	    setBiggerHeader();
	    $('.chatTopMenuIcon').hide();
    	    $('.chatTopArrowIcon').css('margin-right', '-20px');
	    $('.form-container').show();
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').show();}
        } else {
            parent.window.document.getElementById('iframeChat').style.height = '39px';
	    $(parent.window.document.getElementById('iframeChat')).css('z-index', this.grataCb.optionRef.zIndex);
            $('#chat-top').css('height', '100%');
            jQuery('#window_chat').css('bottom', '0px');
            $('.chatTopArrowIcon').css('right', '17px');
            jQuery('.chatTopCloseIcon').hide();
            jQuery('.chatTopArrowIcon').removeClass("fa-rotate-180");
            $('.chatTopMenuIcon, .muteStatus').remove();
            setDesktopButtonHeader();
	    $('.form-container').hide();
	    //if ($('.confirmQuitContainer').length > 0) {$('.confirmQuitContainer').hide();}
        }
        //jQuery('.form-container').toggle();
    }
}
function showReconnectMessage() {
    $('.reconnectText, .reconnectFormText').empty();
    $('.reconnectClickTarget, .reconnectFormClickTarget').empty();
    if (this.grataCb.localLang.indexOf("cn") === -1 && this.grataCb.localLang.indexOf("zh") === -1) {
        $('.reconnectText, .reconnectFormText').append('Unable to connect.');
        $('.reconnectClickTarget, .reconnectFormClickTarget').append('Retry?');
        if (this.grataCb.isMobileConfig === true) {
            $('.reconnectClickTarget').css('left', '65%');
            //$('.reconnectTextContainer').css({'top': '-20px'});
            //$('.reconnectTextContainer').css({'bottom': '70px'});
	    }
    } else {
        $('.reconnectText, .reconnectFormText').append('æ æ³è¿æ¥ã');
        $('.reconnectClickTarget, .reconnectFormClickTarget').append('éè¯?');
    }
    $('.reconnectTextContainer, .reconnectFormTextContainer').show();
    this.grataCb.connected = false;
}

function setSafariIpad() {
    //If iPad
    if (navigator.userAgent.indexOf('iPad') > -1) {
        function doOnOrientationChange() {
            switch(window.orientation) {  
              case -90 || 90:
                $('.inputbox').focusout();
                break; 
              default:
                $('.inputbox').focusout();
                break;
            }
        }
        window.addEventListener('orientationchange', doOnOrientationChange);
        doOnOrientationChange();
        jQuery('#window_chat').css('bottom', '0px');
        var iScrollPos = 0;
        var myCountUp = 0;
        var myCountDown = 0;
        var isDonwDown = false;
        var isDoneUp = false;
        $('.typing-box').focus(function() {
            $(parent.window.document.getElementById('iframeChat')).css('transition', '250ms');
            $(parent.window).scroll(function () {
                var actualStop = $(parent.window.document.getElementsByTagName('body')).height() - 700;
                if ($(this).scrollTop() < 50 || $(this).scrollTop() > actualStop) {
                    myCountUp = 0;
                    isDoneUp = false;
                    isDoneDown = false;
                    myCountDown = 0;
                    return;
                }
                $(parent.window.document.getElementById('iframeChat')).css({'overflow': 'hidden'});
                var iCurScrollPos = $(this).scrollTop();
                if (iCurScrollPos >= iScrollPos) {
                    myCountDown += iScrollPos - iCurScrollPos;
                    var res = parseInt($(parent.window.document.getElementById('iframeChat'))[0].style.bottom.split('px')[0], 10) - myCountDown;
                    if (res < 300 && isDoneDown === false) {
                        $(parent.window.document.getElementById('iframeChat')).css({'bottom': res + 'px'});
                    } else {
                        myCountDown = 0;
                        isDoneDown = true;
                        $('#window_chat').css('bottom', '0');
                        $(parent.window.document.getElementById('iframeChat')).css({'bottom': '0'});
                    }
                    myCountUp = 0;
                    isDoneUp = false;
                } else {
                    myCountUp += iScrollPos - iCurScrollPos;
                    if (myCountUp <= 300 && isDoneUp === false) {
                        $(parent.window.document.getElementById('iframeChat')).css({'bottom': myCountUp + 'px'});
                    } else {
                        myCountUp = 0;
                        isDoneUp = true;
                        $(parent.window.document.getElementById('iframeChat')).css({'bottom': '300px'});
                    }
                    myCountDown = 0;
                    isDoneDown = false;
                }
                iScrollPos = iCurScrollPos;
            });
        });
        $('.typing-box').blur(function() {
            $(parent.window.document.getElementById('iframeChat')).css('transition', '0ms');
            $(parent.window).unbind('scroll').off('scroll');
            $(parent.window.document.getElementById('iframeChat')).css('bottom', '0');
        });
        var gap = parseInt(parent.window.document.getElementById('iframeChat').style.width.split('px')[0], 10) - 85;
        $('.inputbox, .typing-box').css({'position': 'relative'}).show();
        $('.typing-box').css({'position': 'relative','bottom': '-260px'});
        $('.iconsPlacer').css({'position':'relative', 'bottom': '-205px', 'left': gap + 'px'});
        $('.sendButton').css({'position':'relative', 'bottom': '-200px'});
        $('#window_chat').css({'position': 'fixed'});
        setTimeout(function () {
            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
        }, 1500);
    }
}

function setSafariMobile(status, context) {
    //return;//Test
    if (navigator.userAgent.indexOf('iPhone') > -1 && navigator.userAgent.indexOf('Mobile') > -1 && screen.height < 600) {
        $('#window_chat').empty().remove();
        return;
    }
    if (navigator.userAgent.indexOf('iPhone') > -1 && navigator.userAgent.indexOf('Mobile') > -1 && screen.height > 600) {
        function doOnOrientationChange() {
            switch(window.orientation) {  
              case -90 || 90:
                $('.inputbox').focusout();
                break; 
              default:
                $('.inputbox').focusout();
                break;
            }
        }
          
        window.addEventListener('orientationchange', doOnOrientationChange);

        doOnOrientationChange();

        $(parent.window.document.getElementById('iframeChat')).css({'position': 'fixed', 'bottom': '0px', 'top': 'unset', 'height': this.grataCb.optionRef.mobileButtonSize/*'66px'*/, 'width': '100%'});
        if (this.grataCb.isMobileConfig === false) {$('.chat-title').css('font-weight', 'normal');}
        var gap = parseInt(parent.window.document.getElementById('iframeChat').style.width.split('px')[0], 10) - 85;
        //Original code
        /*$('.typing-box').focus(function() {
            $('.inputbox').css({'position': 'fixed','bottom': '0px'});
            $('.typing-box').css({'height': '100px', 'bottom': '0px'});
            $('.sendButton').css({'position': 'fixed', 'bottom': '35px', 'margin-top': '110px'}).show();
            $('.iconsPlacer .fa-image').css({'position': 'fixed', 'margin-bottom': '17px', 'right': '75px', 'bottom': '20px'});
            $(parent.window.document.getElementById('iframeChat')).css({'width': '100%'});
        });
        $('.typing-box').focusout(function() {
            $('.inputbox').css({'position': 'fixed','bottom': '-30px'});
            $('.typing-box').css({'bottom': '-40px','height': '100px'});
            $('.iconsPlacerMobile').css('bottom', '20px', true);
            $('.sendButton').hide();
            $('.testRewrapDiv, .chat-container').height("90%");
            $(parent.window.document.getElementById('iframeChat')).css({'width': '100%'});
        });
        $('.typing-box').css({'bottom': '58px','height': '100px'});
        $('.uploadIconStyle').css({'bottom': '55px'});
        $('.iconsPlacerMobile').css('bottom', '85px', true);
        $('.sendButton').css('bottom', '30px').hide();
        $('.testRewrapDiv, .chat-container').height("90%");*/

        //[10/10 Tests: remaining one scroll issue on focus]
        var self = this.grataCb;
        //$('.typing-box').unbind('focus');
        $('.typing-box').focus(function() {
            if (self.toScroll === false) {
                if (self.firstScroll === true) {
                    var scrollAmount = window.outerHeight / 2;
                    scrollAmount = scrollAmount - scrollAmount * 2;
                    $(parent.window.document).scrollTop(scrollAmount);
                    self.toScroll = true;
                    self.firstScroll = false;
                } else {
                    var scrollAmount = window.outerHeight / 2;
                    scrollAmount = scrollAmount - scrollAmount * 2;
                    $(parent.window.document).scrollTop(scrollAmount + 350);
                    self.toScroll = true;
                }
            } else {
                var scrollAmount = window.outerHeight / 2;
                scrollAmount = scrollAmount - scrollAmount * 2;
                $(parent.window.document).scrollTop(scrollAmount + 350);
                self.toScroll = false;
            }
            $('.inputbox, .typing-box').css({'height': '100px'});
            $('.sendButton').css({'position': 'fixed', 'bottom': '35px', 'margin-top': '110px'}).show();
            $('.iconsPlacer .fa-image').css({'position': 'fixed', 'margin-bottom': '17px', 'right': '75px', 'bottom': '20px'});
            var myHeight = screen.availHeight + "px";
            $(parent.window.document.getElementById('iframeChat')).css({'position':'fixed', 'top': '0px', 'bottom': '0px', 'left': '0px', 'right': '0px','width': '100%', 'height': myHeight});
            $('.testRewrapDiv, .chat-container').height("90%");
        });
        $('.typing-box').focusout(function() {
            $('.inputbox, .typing-box').css({'height': '150px'});
            $('.iconsPlacerMobile').css('bottom', '20px', true);
            $('.sendButton').hide();
            $('.testRewrapDiv, .chat-container').height("90%");
            $(parent.window.document.getElementById('iframeChat')).css({'position':'fixed', 'top': '0px', 'bottom': '0px', 'left': '0px', 'right': '0px','width': '100%', 'height': '100%'});
        });
        $('.typing-box').css({'bottom': '58px','height': '150px'});
        $('.uploadIconStyle').css({'bottom': '55px'});
        $('.iconsPlacerMobile').css('bottom', '85px', true);
        $('.sendButton').css('bottom', '30px').hide();
        $('.testRewrapDiv, .chat-container').height("90%");
        var windowSize = screen.height - 20;
        if (status == true || status == null) {
            if(!$('.chat-container').is(':visible')) {
                $(parent.window.document.getElementById('iframeChat')).height('100%');
            } else {
                $(parent.window.document.getElementById('iframeChat')).height(self.optionRef.mobileButtonSize + 'px');//66
            }
        } else {
            if(!$('.form-container').is(':visible')) {
                $(parent.window.document.getElementById('iframeChat')).height('100%');
            } else {
                $(parent.window.document.getElementById('iframeChat')).height(self.optionRef.mobileButtonSize + 'px');//66
            }
        }
        $(parent.window.document.getElementById('iframeChat')).css({'width': '100%'});
    }
}

function sendGrataStart(msg) {
    var event;
    event = document.createEvent('Event');
    event.grataValues = {'agentName': msg.headers.authorNick,
                         'utm': msg.headers.utm,
                         'agentId': msg.headers.authorId,
                         'userId': msg.headers.sessionId,
			'customerName': msg.headers.customerName};
    event.initEvent("grataStart", true, true);

    parent.window.document.addEventListener('grataStart', function(e) {
        console.log(e);
    });

    parent.window.document.dispatchEvent(event);
}

function loadUnreads() {
    var self = this.grataCb;
    if (self.orgId != "205250481355" && self.orgId != "6" && self.orgId != "122125966570" && self.orgId != "023258393135") {return;}
    if (self.getCookie("grataUnreads") != null && self.getCookie("grataUnreads") != 0) {
	if($('.chat-container').is(':visible') === false) {
	    var newMessageText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
            $('.newMessageNotif').remove();
            var previousText = $('.chat-title').text();
            $('.chat-title').text(newMessageText).css('width', $('.chat-title').width() + 10);
            if (self.isMobileConfig === false && self.optionRef.buttonDisplay === "0" || self.optionRef.buttonDisplay === "1" && $('.newMessageNotif').length === 0) {
                $('#chat-top').append('<div class="newMessageNotif"></div><div class="chat-title" style="display:none;">New message</div>');
                $('.newMessageNotif').css({'top': '10px', 'left': '-7px', 'width': '8px', 'height': '8px'});
            } else {
                $('.chat-title').append('<div class="newMessageNotif"></div>');
            }
            $('.newMessageNotif').css('background-color', self.colorHeaderText).show();
            makeImageIcon("newMsg");
            setCustomIcon("newMsg");
	    setBurberryIcon("newMsg");
        } 

        self.currentUnreadMessage = parseInt(self.getCookie("grataUnreads"), 10);
        self.previousTitle = parent.document.title;
        parent.document.title = "("+self.currentUnreadMessage+") " + self.previousTitle;
    }

    $('#typingID').keydown(function() {
        if (parent.document.title != self.previousTitle) {
          resetUnreads();
        }
    });

    $('#typingID, #chatContainerId').click(function() {
        resetUnreads();
    });
}

function resetUnreads() {
    var self = this.grataCb;
    if (self.orgId != "205250481355" && self.orgId != "6" && self.orgId != "122125966570" && self.orgId != "023258393135") {return;}
    self.currentUnreadMessage = 0;
    setCookie('grataUnreads', self.currentUnreadMessage, 1);
    if (self.previousTitle != null) {
        parent.document.title = self.previousTitle;
    }
}

Chatbox.prototype.appendToStorage = function (name, data) {
    var old = localStorage.getItem("grataHistory");
    if(old === null) {
        if(data === null || data === 'undefined' || data === '') { 
        } else {
            localStorage.setItem(name, data);
        }
    } else {
        old = [localStorage.getItem("grataHistory")];
        if(data == null || data == '' || typeof(data) == 'undefined') {
        } else {
            old.push(data);
            localStorage['grataHistory'] = old;
        }
    }
};

Chatbox.prototype.notifyNewMessage = function (msg) {
    var self = this;
    var newMessageText = (this.localLang.indexOf("cn") === -1 && this.localLang.indexOf("zh") === -1) ? 'New message' : 'æ°æ¶æ¯';
    if (self.orgId == "205250481355" || self.orgId == "6"  || self.orgId == "122125966570" || self.orgId == "023258393135") {
        this.currentUnreadMessage++;
        if (self.currentUnreadMessage != 0) {
            setCookie('grataUnreads', self.currentUnreadMessage, 1);
        }
        if (this.previousTitle == null) {
            this.previousTitle = parent.document.title;
        }
        parent.document.title = "("+this.currentUnreadMessage+") " + this.previousTitle;
    }
    if($('.chat-container').is(':visible') === false) {
	$('.newMessageNotif').remove();
	if (self.optionRef.buttonTypeChoice == "0" || self.optionRef.buttonTypeChoice == "1" || self.optionRef.buttonTypeChoice == "2") {
    	  $('#chat-top').css('height', self.optionRef.buttonSize+'px');
	}
        var previousText = $('.chat-title').text();
        $('.chat-title').text(newMessageText).css('width', $('.chat-title').width() + 10);
        if (/*this.isMobileConfig === false && */this.optionRef.buttonDisplay === "0" || this.optionRef.buttonDisplay === "1" && $('.newMessageNotif').length === 0) {
            $('#chat-top').append('<div class="newMessageNotif"></div><div class="chat-title" style="display:none;">New message</div>');
            $('.newMessageNotif').css({'top': '10px', 'left': '-7px', 'width': '8px', 'height': '8px'});
        } else {
            $('.chat-title').append('<div class="newMessageNotif"></div>');
        }
        $('.newMessageNotif').css('background-color', this.colorHeaderText).show();
	makeImageIcon("newMsg");
	setCustomIcon("newMsg");
	setBurberryIcon("newMsg");
    }
};

Chatbox.prototype.generateUUID = function() {
    var S4 = function() {
        return Math.floor(
            Math.random() * 0x10000 /* 65536 */
        ).toString(16);
    };
    return (
        S4() + S4() + "-" +
        S4() + "-" +
        S4() + "-" +
        S4() + "-" +
        S4() + S4() + S4()
    );
};

Chatbox.prototype.uploadFileChunked = function(userSettings) {
    var self = this;
    var ajaxSettings = {
        context: this,
        type: 'post',
        data: userSettings.filedata,
        contentType: false,
        processData: false,
        cache: false,
        tryCount: 0,
        retryLimit: 1,
	xhrFields: {'withCredentials': true},
                                crossDomain: true,
        beforeSend: function(xhr) {
	    $('.uploadIconStyle').css('color', "#a3a3a3");
	    if (self.chatDomain.indexOf('grata') > -1) {
                                  //xhr.setRequestHeader("withCredentials", true);
                                  //xhr.setRequestHeader("crossDomain", true);
                                } else {
                                  xhr.setRequestHeader("GB-Access-Token", self.getCookie('grataUserToken'));
                                }
            //xhr.setRequestHeader('GB-Access-Token', self.getCookie("grataUserToken"));
            xhr.setRequestHeader("x-File-Name", userSettings.filename);
            xhr.setRequestHeader("x-File-Type", userSettings.filetype);
        },
        success: function(data) {
	    self.uploadInProgress = false;
            $('#uploadingImage').hide();
	    $('.uploadIconStyle').css('color', "#a3a3a3");
            //self.initUpload(userSettings.chat);
            data = $.parseJSON(data);
            if (data.success !== undefined) {
                if (data.success === true) {
                    console.log(data);
		    data.data.storageUrl = data.data.storageUrl.replace('http://', 'https://');
                    var successful = userSettings.chat.sendMessage(data.data.storageUrl, data.data.contentType);
                    if (successful != undefined && successful.successful == false) {
                        if(successful.status == false) {
                    } else {
                        $('.chatboxmessage_'+successful.id+' .loadingSpinner').hide();
                        setTimeout(function () {
                            $('.chatboxmessage_'+successful.id+' .loadingSpinnerImage').hide();
                        }, 3000);
                        $('.chatboxmessage_'+successful.id+' .loadingSpinnerImage').hide();
                        $('.chatboxmessage_'+successful.id+' .messageStatus').append('<div class="messageFailedContainer"><i class="fa fa-exclamation-triangle messageFailedIcon"></i> <span class="messageFailedText">Message failed to send</span></div');
                    }
                    jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                } else { 
                    setTimeout(function () {
                        $('.chatboxmessage_'+successful.id+' .loadingSpinnerImage').hide();
                    }, 1500);
                    setTimeout(function () {
                        $('.chatboxmessage_'+successful.id+' .loadingSpinnerImage').hide();
                        if($('.chatboxmessage_'+successful.id+' .loadingSpinner').is(':visible')) {
                            $('.chatboxmessage_'+successful.id+' .loadingSpinner').hide();
                            $('.chatboxmessage_'+successful.id+' .messageStatus').append('<div class="messageFailedContainer"><i class="fa fa-exclamation-triangle messageFailedIcon"></i> <span class="messageFailedText">Message failed to send</span></div');
                        }
                    }, 10000);
                }
                setTimeout(function () {
                    if($('.chatboxmessage_'+successful.id+' .loadingSpinner').is(':visible')) {
                        $('.chatboxmessage_'+successful.id+' .loadingSpinner').hide();
                        $('.chatboxmessage_'+successful.id+' .loadingSpinnerImage').hide();
                        $('.chatboxmessage_'+successful.id+' .messageStatus').append('<div class="messageFailedContainer"><i class="fa fa-exclamation-triangle messageFailedIcon"></i> <span class="messageFailedText">Message failed to send</span></div');
                    }
                }, 10000);
            } else {
                console.log(data);
            }
        } else {
                console.log('no data returned');
            }
        },
        error: function(xhr, textStatus, errorThrown) {
	    self.uploadInProgress = false;
            $('#uploadingImage').hide();
	    $('.uploadIconStyle').css('color', "#a3a3a3");
            if (textStatus === 'timeout') {
                ajaxSettings.tryCount = ajaxSettings.tryCount + 1;
                if (ajaxSettings.tryCount <= ajaxSettings.retryLimit) {
                    console.log('retrying request: '+userSettings.uri);
                    $.ajax('https://' + self.apiPrefix + 'api.'+self.chatDomain+'/connect-api/chat/chunked.jsn', ajaxSettings);
                    return;
                }
                console.log('request failed after '+ajaxSettings.retryLimit+' attempts');
                return;
            }
            if (xhr.status === 500) {
                console.log('Server error');
            } else {
                console.log('Unknown problem');
            }
        },
        fail: function(data) {
	    self.uploadInProgress = false;
            $('#window_chat').hide();
            console.log(data);
        }
    };
    $('.uploadIconStyle').css('color', "#a3a3a3");
    $.ajax('https://' + self.apiPrefix + 'api.'+self.chatDomain+'/connect-api/chat/chunked.jsn', ajaxSettings);
    self.uploadInProgress = false;
}

Chatbox.prototype.initUpload = function (Chat) {
    //$('.chat-container').append('In init upload<br/>');
    //$('#fileUploader').remove();
    //$('#window_chat').prepend('<input id="fileUploader" class="file" type="file" name="myFile" accept="image/*" style="width: 100%;height: 0.1px;opacity: 0;overflow: hidden;position:fixed;top:-1000;" accept="image/*" />');
    //$('#window_chat').prepend('<input onclick="performClick" id="fileUploader" class="file" type="file" name="myFile" style="width: 100%;height: 0.1px;opacity: 0;overflow: hidden;position:fixed;"/>');
    var self = this;

    //console.log("Upload in progress? " + self.uploadInProgress);
    if (self.uploadInProgress === true) {
	//$('.chat-container').append('In progress true<br/>');
        return;
    }
    //console.log("after upload in progress check");
    //self.uploadInProgress = true;
    $('.uploadIconStyle').hover(function() {
        $('.uploadIconStyle').css('color', self.colorHeader);
        $('.uploadIconStyle').mouseout(function() {
            $('.uploadIconStyle').css('color', "#a3a3a3");
        });
    });
    /*$('.uploadIconStyle').unbind('click tap touch touchstart');
    $('.uploadIconStyle').on('click tap touch touchstart', function() {
	$('.chat-container').append('In custom list<br/>');
          $('#fileUploader').trigger('click');
    });*/

    if (self.uploadInitDone == false) {
        window.onload = function() {
          var input = document.getElementById("fileUploader");
          /*input.removeEventListener("change", function() {}, false);*/
          input.addEventListener("change", handleFile);
          self.uploadInitDone = true;
        }
    }

    function handleFile(e) {
	//$('.chat-container').append('In handleFile<br/>');
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");

        var reader = new FileReader;
        reader.onload = function (event) {
            var img = new Image();
            img.src = reader.result;
            img.onload = function () {
                canvas.width = img.width/3;
                canvas.height = img.height/3;

                ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

                /*Do whatever image operation you need (resize/crop, visual effects, barcode detection, etc.+*/
                invertImage(ctx, canvas);

                /*You can even upload the new image to your server
 *                 // postCanvasDataToServer(canvas);*/
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    var el = document.getElementById('fileUploader');
    /*el.removeEventListener('change', function() {
	//$('.chat-container').append('In remove<br/>');
    }, false);*/
    el.addEventListener('change', function(e) {
        var dataURLToBlob = function(dataURL) {
            var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                var raw = parts[1];
        
                return new Blob([raw], {type: contentType});
            }
        
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;
        
            var uInt8Array = new Uint8Array(rawLength);
        
            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
        
            return new Blob([uInt8Array], {type: contentType});
        }
        $('#uploadingImage').show();
        var file;
	//$('.chat-container').append('In change listenner<br/>');
        /*console.log('here');*/
        if (this.files && this.files[0]) {
            file = this.files[0];
            var reader = new FileReader();
            if(file.size > 500000) {
                reader.onload = function (readerEvent) {
                    var image = new Image();
                    image.onload = function (imageEvent) {
        
                        /* Resize the image */
                        var canvas = document.createElement('canvas'),
                            max_size = 544,/* TODO : pull max size from a site config*/
                            width = image.width,
                            height = image.height;
                        if (width > height) {
                            if (width > max_size) {
                                height *= max_size / width;
                                width = max_size;
                            }
                        } else {
                            if (height > max_size) {
                                width *= max_size / height;
                                height = max_size;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                        var dataUrl = canvas.toDataURL('image/jpeg');
                        var resizedImage = dataURLToBlob(dataUrl);
                        self.uploadFileChunked({
                            filename:  file.name,
                            filetype: file.type,
                            filedata: resizedImage,
                            chat: Chat
                        });
                    }
                    image.src = readerEvent.target.result;
                }
                reader.readAsDataURL(file);
            } else {
                reader.onload = function (e) {
                    self.uploadFileChunked({
                        filename:  file.name,
                        filetype: file.type,
                        filedata: file,
                        chat: Chat
                    });
                }
                reader.readAsDataURL(this.files[0]);
            }
        }
    });

    /*window.onload = function() {
	var el = document.getElementById('fileUploader');
   	el.addEventListener('change', handleFile);
    }

    //$('#fileUploader').unbind('change');//click
    //$('#fileUploader').on('change', function(e) {
    
    //var el = document.getElementById('fileUploader');
    //el.addEventListener('change', function(e) {
	function handleFile(e) {
	self.uploadInProgress = true;
	//$('.chat-container').append('In change<br/>');
        var dataURLToBlob = function(dataURL) {
            var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                var raw = parts[1];
        
                return new Blob([raw], {type: contentType});
            }
        
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;
        
            var uInt8Array = new Uint8Array(rawLength);
        
            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
        
            return new Blob([uInt8Array], {type: contentType});
        }
        $('#uploadingImage').show();
        var file;
        if (this.files && this.files[0]) {
	    //$('.chat-container').append('After if<br/>');
            file = this.files[0];
            var reader = new FileReader();
            if(file.size > 500000) {
		//$('.chat-container').append('After size<br/>');
                reader.onload = function (readerEvent) {
		    //$('.chat-container').append('reader onload<br/>');
                    var image = new Image();
                    image.onload = function (imageEvent) {
			//$('.chat-container').append('Image onload<br/>');
                        var canvas = document.createElement('canvas'),
                            max_size = 544,// TODO : pull max size from a site config
                            width = image.width,
                            height = image.height;
                        if (width > height) {
                            if (width > max_size) {
                                height *= max_size / width;
                                width = max_size;
                            }
                        } else {
                            if (height > max_size) {
                                width *= max_size / height;
                                height = max_size;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                        var dataUrl = canvas.toDataURL('image/jpeg');
                        var resizedImage = dataURLToBlob(dataUrl);
                        self.uploadFileChunked({
                            filename:  file.name,
                            filetype: file.type,
                            filedata: resizedImage,
                            chat: Chat
                        });
                    }
                    image.src = readerEvent.target.result;
                }
                reader.readAsDataURL(file);
            } else {
		//$('.chat-container').append('In else<br/>');
                reader.onload = function (e) {
                    self.uploadFileChunked({
                        filename:  file.name,
                        filetype: file.type,
                        filedata: file,
                        chat: Chat
                    });
                }
                reader.readAsDataURL(this.files[0]);
                //i.src = reader.result;
            }
        }
    }//});*/
}

Chatbox.prototype.initSockets = function (status) {
    //var cookie = getCookie("grataUserToken");
    //if(cookie == "") {return;}
    if (this.connected == true) {return;}
    console.log("[Grata WebChat] : Initialization...");
    if(status == false) {
    } else { 
        var self = this;
    var orgId2 = this.orgId;
    var Chat = {};
    var attempts = 10;
    Chat.socket = null;

    Chat.connect = (function (host) {
            /*function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function demo(timeToWait) {
                console.log('Taking a break...');
                await sleep(timeToWait);
                console.log('Two seconds later');
            }

            var email = self.makeId()+'@noemail.com';
            var password = 'nopassword';
            var nick = 'WebChat User';
            var from = 'webplugin';
            var cookie = self.getCookie("grataUserToken");
            if(cookie == "") {
                jQuery.ajax({
                    type: 'POST',
                    url: 'https://' + self.apiPrefix + 'api.'+self.chatDomain+'/connect-api/user/register',
                    data: {email: email, password: password, nick: nick, from: from},
                    dataType: 'json',
                    beforeSend: function (request) {
                        var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn"; 
                        request.setRequestHeader("GB-Lang", lang);
                    },
                    success: function(data) {
                        document.cookie="grataUserToken="+data.data.accessToken+"; expires=3650;path=/;";
                        self.connected = true;
                    }
                });
                demo(2000);
                //return;
            }*/

            //demo();
		if (host === null || host === undefined || host === "") {
		    return;
		    /*if (self.osObject.browser.indexOf('Internet') > -1) {
                        self.initSockets(true);
			return;
                    }*/
		}
		//if (this.connected == true) {return;}
                Chat.socket = new WebSocket(host/*, self.getCookie('grataUserToken')*/);
                Chat.socket.onopen = function () {
                self.chatRef = Chat;
		if (self.uploadInitDone == false) {
                    self.initUpload(Chat);
                }

                //if ($('.chat-container').children().length === 0) {//Before if first messageOnly
                if (self.getCookie('lastagent') !== "" && self.getCookie('lastagent') !== "undefined" && self.getCookie('lastagent') !== undefined && self.getCookie('lastagent') !== null && self.getCookie('lastagent') !== "null") {//To upload
                    var headerText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Now chatting with " + self.getCookie('lastagent') : "ä¸" + self.getCookie('lastagent') + "èå¤©ä¸­";
                    $('.chat-title').text(headerText);
                }
                if (self.welcomePosted === false && self.showStatus !== "inchat" && self.showStatus !== "waiting" && self.showStatus !== "autoreply") {//&& self.getCookie('lastagent') === "") {//To upload
                    $('.firstMessage').remove();
                    //Status Update
                    var systemText = (/*self.staffOnline > 0*/self.originalOrgOnline == true) ? self.welcomeMessageText : self.chatMessageOffline;
		    /*if (self.orgId == 734609717975 || self.orgId == 833581441007 || self.orgId == 6) {
                        if (getCookie('greetingSent') != "true") {
                            Chat.sendMessage(systemText, 'text/plain', true, 'true');
                            setCookie('greetingSent', true, 1);
                        }
                    }*/
                    $('.chat-container').html('<div class="firstMessage" style="border-radius:'+self.chatRadius+'px'+';background-color:'+self.systemTextBackground+';"><span class="firstMessageText">' + systemText .split("\n").join("<br/>")+ '</span></div>');
                    //(self.isMobileConfig === false) ? $('.firstMessage').css('margin-bottom', '46%') : $('.firstMessage').css({'margin-bottom': '122%', 'width': '94%'});
		    setWebchatBusy();
                    self.welcomePosted = true;
                    jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                }
		addPPC(Chat);
                checkPPC(Chat);
		if (Chat != undefined) {
                    Chat.sendMessage('Update csOnline', 'status/csOnline', false);
                }
                console.log("[Grata WebChat] : Connection status : " + Chat.socket.readyState);

		//setTimeout(function() {Chat.sendMessage('Update csOnline', 'status/csOnline', false);}, 5000);
                Chat.startConnectionMonitor();
		//alert('Ready state = ' + Chat.socket.readyState + ' et socket = ' + WebSocket.OPEN);
                if(Chat.socket.readyState == WebSocket.OPEN){ 
                    if($('.form-container').is(':visible')) {// was !$('#window_chat').is(':visible')
                        //jQuery('#window_chat').slideToggle();
                        /*$('.chat-title').text(self.chatMessageOnline);//Update Title
                        $('#window_chat').show();
                        $('.form-container').hide();//loading-container
                        $('.chat-container,  .usertyping, .inputbox, .chat-wrapper').show();
                        jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                        $('a').attr('target', '_blank'); */
                        $('#chat-top').addClass('emailHandler');
                        $('#chat-top').removeClass('chatHandler');
                        $('.status-bar').hide();
                        $('.chat-wrapper').hide();
                        $('.chat-container').hide();
                        $('.inputbox').hide();
                        $('.form-container').show();
                        $('.form-container').toggle().show();
                    }
                    $('.typing-box').prop("disabled", false);
                    $('.status-bar').hide();
                    $('.connecting').hide();
                    attempts = 10;
                    $('.connecting').html('');
                    $('.connecting').removeClass('offline');
                    $('.connecting').addClass('online');
                    this.connected = true;
                    /*if (this.myTest === undefined)
                        this.myTest = null;*/
                    //$('.sendButton').unbind('click touch tap');
		    jQuery('.sendButton, .sendButtonText').css('cursor', 'pointer');
		    //$('.sendButton, .sendButtonText').click(function(event) {
                    //$('.sendButton, .sendButtonText').bind('click touchstart tap touch' ,function(event) {
		    unforceDisableButton();
		    $('.sendButton, .sendButtonText').on('click touchstart tap touch' ,function(event) {
			event.preventDefault();
                        preSendMessage(event);
                        if (self.isMobileConfig === true) {
		            $('.testRewrapDiv').css({"height": "93%", "width": "100%"});
			    if (navigator.userAgent.indexOf('iPad') > -1) {
				var size = (screen.height > 1080) ? '97%' : '94%';
                                jQuery('.testRewrapDiv').css({'height': size});
                            }
                            setTimeout(function () {
                                $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                            }, 1500);
                            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                        }
                        setTimeout(function () {
                            $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                        }, 1500);
			$('.iconsPlacer').css('display', 'block').show();
                    });
                    jQuery('.typing-box').keydown(function (event) {
                        if (event.keyCode == 13 && !event.shiftKey) {
                            event.preventDefault();
                            preSendMessage(event);
                            setTimeout(function () {
                                $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                            }, 1000);
                        }
                    });
                    function preSendMessage(event) {
                        //if (event.keyCode == 13 && !event.shiftKey) {
                        event.preventDefault();
                        var defaultMessage = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Type your message here" : "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯";//è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯
                        var message = $('.typing-box').val();
                        if (message === defaultMessage)
                            return;
                        if(message.length) {
                            var successful = Chat.sendMessage(message, 'text/plain');//text/html
                            if (successful === undefined || successful === false) {
                                //self.initSockets(false);
                                return;
                            }
                            setTimeout(function () {
                                $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                            }, 1000);
                            //if(successful.successful == false) {
                            if (successful !== undefined && successful.successful !== true) {
                                if(successful.status == false) {
                                } else {
                                    $('.chatboxmessage_'+successful.id+' .loadingSpinner').hide();
                                    //$('.chatboxmessage_'+successful.id+' .messageStatus').addClass('failed');
                                  $('.chatboxmessage_'+successful.id+' .messageStatus').append('<div class="messageFailedContainer"><i class="fa fa-exclamation-triangle messageFailedIcon"></i> <span class="messageFailedText">Message failed to send</span></div');
                                }
                            }
                            else { 
                            //setTimeout(function () {
                              if($('.chatboxmessage_'+successful.id+' .loadingSpinner').is(':visible')) {
                                  $('.chatboxmessage_'+successful.id+' .loadingSpinner').hide();
                               }
                           // }, 10000);//10000
                          }

                           //setTimeout(function () {
                              if($('.chatboxmessage_'+successful.id+' .loadingSpinner').is(':visible')) {
                                  $('.chatboxmessage_'+successful.id+' .loadingSpinner').hide();
                                  //$('.chatboxmessage_'+successful.id+' .messageStatus').append('<div class="messageFailedContainer"><i class="fa fa-exclamation-triangle messageFailedIcon"></i> <span class="messageFailedText">Message failed to send</span></div');
                               }
                            //}, 10000);//10000
                        }
                    //}
                    }
                self.userTyping = false; 

                $('#closeYes').unbind('click');
                $('#closeYes').click(function() {
		    $('.messageTo, .messageFrom').css('margin-bottom', '0px');
                    $('#window_chat').css({'opacity': '0', 'bottom': '-1000px'});
                    self.connected = false;
                    Chat.sendMessage('', 'user/close');//Instant disconnect update
                    (self.getOnlineStatus("doToggle") === true) ? $('.chat-title').text(self.chatMessageOnline) : $('.chat-title').text(self.chatMessageOffline);
                    $('.confirmQuitContainer').hide();
                    if (self.isMobileConfig === false && self.optionRef.buttonDisplay === "0") {
                        $('.uploadIconStyle').css('display', 'none');
                        $('.sendButton').hide();
                        setDesktopButtonHeader();
                    } else {
                        if(!$('.chat-container').is(':visible')) {
                            parent.window.document.getElementById('iframeChat').style.height = self.optionRef.chatHeight + 'px'/*'390px'*/;
                            jQuery('.chatTopCloseIcon').show();
                            jQuery('#window_chat').css('bottom', '-4px');
                            $('.chatTopArrowIcon').css('right', '40px');
                            $('#chat-top').css('height', '40%');//10%
                            jQuery('.chatTopArrowIcon').addClass("fa-rotate-180");
                        } else {
                            parent.window.document.getElementById('iframeChat').style.height = '39px';
                            jQuery('.chatTopCloseIcon').hide();
                            jQuery('#window_chat').css('bottom', '0px');
                            $('.chatTopArrowIcon').css('right', '17px');
                            $('#chat-top').css('height', '100%');
                            jQuery('.chatTopArrowIcon').removeClass("fa-rotate-180");
                        }
                    }
                    //parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10)
                    //(parseInt(parent.window.document.getElementById('iframeChat').style.height.split('px')[0], 10) < 100) ? $('.sendButton').hide() : $('.sendButton').show();
                    printLog(Chat, 1022);

                    //setTimeout(function() {
                        Chat.disconnect();
                        document.cookie = "grataLocDone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			document.cookie = "grataFirstUserMessage=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        if (Chat.socket !== null)
                            Chat.socket.close();
                    //}, 1000);
                    /*Chat.disconnect();
                    document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    if (Chat.socket !== null)
                        Chat.socket.close();*/
                    //Status update
                    if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1)
                        htmlObj = '<div class="statusMessage"><div class="statusText">You\'ve closed the chat.</div></div>';
                    else
                        htmlObj = '<div class="statusMessage"><div class="statusText">æ¨å·²ç»ç»æå¯¹è¯ã</div></div>';
                    jQuery('.chat-container').append(htmlObj);
                    if (self.staffOnline == true) {
                        if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1)
                            htmlObj = '<div class="statusMessage"><div class="statusText">Send a message to restart a chat.</div></div>';
                        else
                            htmlObj = '<div class="statusMessage"><div class="statusText" style="margin-bottom: 20px;">å¦ç¨åæå¶ä»å¨è¯¢ï¼è¯·åæ¬¡ä¸æä»¬èç³»ã</div></div>';
                        jQuery('.chat-container').append(htmlObj);
                    }
                    checkOrgStatus();
		    $('#window_chat').css({'opacity': '1', 'bottom': '0px'});
		    (self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
		    if (self.orgId == "839731165445") {
                        //self.closeToken = true;
                        //self.toggleToken = null;
			//(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
		    	//(self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
			//(self.isMobileConfig === false) ? setDesktopButtonHeader() : setMobileButton();
			//(self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
			//$('#chat-top').click();

			/*toggleContainer(self.status);
			toggleContainer(self.status);
			(self.isMobileConfig === true) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
			self.closeToken = true;
			self.toggleToken = null;}*/
                    }
		    //(self.isMobileConfig === true && ) ? setMobileChatTop(self.status) : setDesktopChat(self.status);
		    /*if (self.isMobileConfig === true && navigator.userAgent.indexOf('iPhone;') > -1) {
			 setMobileChatTop(self.status);
		     };*/
		    $('#window_chat').hide();
		    /*if (navigator.userAgent.indexOf('iPhone') > -1) {
                	setTimeout(function() {
				setMobileChatTop(self.status);
				$('#window_chat').css({'opacity': '1', 'bottom': '0px'});
			}, 200);
            	     } else {*/
			$('#window_chat').css({'opacity': '1', 'bottom': '0px'});
		     //}
		     if (self.isMobileConfig === true && navigator.userAgent.indexOf('iPhone;') > -1) {
			if (self.orgId == "839731165445") {
			    //setMobileButton();
			    //etMobileChatTop(self.status);
			    //setMobileChatTop(self.status);
			    //$('#chat-top').click();
                            //$('#chat-top').click();
			}
                          /*$('#chat-top').click();
                          $('#chat-top').click();
			  setMobileChatTop(self.status);
			  setMobileChatTop(self.status);
			  $('#chat-top').focus();*/
                        }
		    fireEvent('userClosedChat', {});
		    //setTimeout(function() {minimizeChat();}, 1000);
                });


                jQuery('.typing-box').on('keyup', function(event) {
                    event.preventDefault();
                    if(self.userTyping == false) {
                        var data = $.trim($('.typing-box').val());
                        if(data.length) {
                            Chat.sendMessage('', 'user/typing');
                            self.userTyping = true; 
                        }
                    }
                });
            }
            }; 
              
            window.onbeforeunload = function() {
                var self = this.grataCb;
                Chat.disconnect();
                self.userInfo.visitedPages++;
                self.endTime = new Date();
                self.userInfo.duration = (self.endTime.getTime() - self.startTime.getTime()) / 1000;
                printLog(self.userInfo.duration, 1048);
                //document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                //document.cookie = "grataConv="+localStorage['grataHistory']+"; expires=3650;path=/;";
                //var minutes = Math.floor(self.userInfo.duration % 60);
                console.log("[Grata WebChat] : Saving browsing datas.");
                console.log("[Grata WebChat] : Closing connection.");
            };

            Chat.socket.onclose = function (event) {
		self.connected = false;
		self.uploadInProgress = false;
		forceDisableButton();
                /*if(event.code == '1006') {
                } else {
                    this.connected = false;
                    if (Chat.socket !== null)
                        Chat.socket.close();
                    Chat.stop(); 
                    console.log("[Grata WebChat] : Closing connection.");
                    //$('.typing-box').prop("disabled", true);
                    $('.connecting').removeClass('online');
                    $('.connecting').addClass('offline');
                    $('.usertyping').html('');
                    $('.chat-wrapper').wrapAll('blur-all');
                    $('#chat-title').html(self.chatMessageOnline);

                    if (self.getCookie('lastagent') != "") {
			var rejoinStyle = (self.isMobileConfig === true) ? 'style="margin-bottom:60px;"' : 'style="margin-bottom:10px;"';
                        if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {rejoinStyle = 'style="margin-bottom:80px;"';}//iPadTest
                        var agentName = (self.agentName !== "" && self.agentName !== undefined && self.agentName !== null) ? self.agentName : self.getCookie('lastagent');
                        if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1)//Status Update
                            htmlObj = '<div class="statusMessage"><div class="statusText">'+agentName+ ' has left the chat</div></div>';
                        else
                            htmlObj = '<div class="statusMessage"><div class="statusText">'+agentName+ 'å·²ç»ç¦»å¼æ­¤å¯¹è¯</div></div>';
                        jQuery('.chat-container').append(htmlObj);

                        if (self.staffOnline > 0) {
                            if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1)
                                htmlObj = '<div class="statusMessage"><div class="statusText">Send a message to restart a chat.</div></div>';
                            else
                                htmlObj = '<div class="statusMessage"><div class="statusText" style="margin-bottom: 20px;">å¦ç¨åæå¶ä»å¨è¯¢ï¼è¯·åæ¬¡ä¸æä»¬èç³»ã</div></div>';
                            jQuery('.chat-container').append(htmlObj);
                        }
                        checkOrgStatus();
                        $('.messageTo, .messageFrom').css('margin-bottom', '0px');
                        Chat.sendMessage(htmlObj, 'text/plain', true);
                        jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight); 
                        (self.status === true || self.status === null) ? jQuery('.chat-title').text(self.chatMessageOnline) : jQuery('.chat-title').text(self.chatMessageOffline);
                        //check status for the title
                        document.cookie = "lastagent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";//To Upload
                    }
                    document.cookie = "inConv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                }*/
            };
 
            Chat.socket.onerror = function(evt) {
		console.log("Grata Socket Error :");
		console.log(evt);
                this.connected = false;
		self.connected = false;
		if (Chat !== undefined && Chat.socket !== null)
                	Chat.socket.close();
                Chat.initialize(true);//Most recent test
            };
            
            Chat.generateInterval = function(k) {
                var maxInterval = (Math.pow(2, k) - 1) * 1000;
                if (maxInterval > 300*1000) {
                     maxInterval = 300*1000; // If the generated interval is more than 30 seconds, truncate it down to 30 seconds.
                }
                return Math.random() * maxInterval; 
            };

            Chat.socket.onmessage = function (message) {
                var data = jQuery.parseJSON(message.data);
                if (data.headers.sessionId !== null && data.headers.sessionId !== undefined && data.headers.sessionId !== "") {
                    self.sessionId = data.headers.sessionId;
                }
		if (data.body != undefined && data.body === "#agentJoinChat" || data.body === "#newUserChat") {
                    return;
                }
                if (self.lastMessage === data.id || data.body === self.lastBody) {
                     self.lastMessage = data.id;
                     self.lastBody = data.body;
                     //if (data.headers.contentType !== 'user/typing' && data.headers.contentType !== 'user/stopTyping')
		     if (data.headers.contentType === 'user/stopTyping')
                        return;
                }
                self.lastBody = data.body;
                self.lastMessage = data.id;
                if (data.body === undefined || data.body.indexOf("Wechat Error: ") > -1 || data.headers.messageType === "reminder") {
                    if (data.headers.contentType !== 'user/typing' && data.headers.contentType !== 'user/stopTyping' && data.headers.contentType !== 'event/launchCS' && data.headers.contentType !== 'event/keyword')
                        return;
                }

		if (data.headers.pageView != undefined && data.headers.pageView == true) {return;}

                /*if (self.agentName !== null && self.agentName !== "" && self.agentName !== undefined) {//update
                    data.headers.authorNick = self.agentName;
                }*/

                //Concate work
                var isConcatenatable = false;
                if (jQuery('.chat-container').children().length === 0) {
                    isConcatenatable = false;
                } else {
                    isConcatenatable = jQuery('.chat-container').children()[$('.chat-container').children().length - 1].className === "messageTo";
                }

		/*if (self.nextConcat == false) {
                    isConcatenatable = false;
                }
                if (data.headers.autoMessage == "true") {
                    self.nextConcat = false;
                }*/

		var agentName = "";
                var nowDate = new Date();
                var myHours = (nowDate.getHours().toString().length <= 1) ? "0" + nowDate.getHours() : nowDate.getHours();
                var myMinutes = (nowDate.getMinutes().toString().length <= 1) ? "0" +  nowDate.getMinutes() : nowDate.getMinutes();
		        var style = (self.isMobileConfig === true) ? 'style="margin-bottom:115px;"' : 'style="margin-bottom:'+self.desktopBottom+'px;"';
		if (self.isMobileConfig === true && navigator.userAgent.indexOf('iPhone') > -1) {style = 'style="margin-bottom:105px;"';}
                if (data.headers.authorNick !== null && data.headers.authorNick !== undefined && data.headers.authorNick != "") {
		    if (data.headers.agentName !== null && data.headers.agentName !== undefined && data.headers.agentName != "") {
                        agentName = data.headers.agentName;
                        self.agentName = data.headers.agentName;
                    } else {
			agentName = data.headers.authorNick;
                        //agentName = (self.agentName !== undefined && self.agentName !== null && self.agentName !== "") ? self.agentName : data.headers.authorNick;
                    }
                    //var agentName = (self.agentName !== undefined && self.agentName !== null && self.agentName !== "") ? self.agentName : data.headers.authorNick;
                    //data.headers.authorNick = agentName;//(self.optionRef.useAgentName === "false") ? self.agentName : data.headers.authorNick;
                    if (agentName !== undefined && agentName !== null && agentName !== "") {data.headers.authorNick = agentName}
		    var headerText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Now chatting with " + data.headers.authorNick : "ä¸" + data.headers.authorNick + "èå¤©ä¸­";
                    if (data.headers.authorNick !== "WebChat User") {
                        if (data.headers.contentType === "text/plain" || data.headers.contentType === "text/html" || data.headers.contentType === "text/plain" || data.headers.contentType.toLowerCase() === "image/png" || data.headers.contentType === "audio/mpeg") {
                            //document.cookie="inConv="+headerText+"; expires=3650;path=/;";
			    if (getCookie('grataUserId') != data.headers.authorId && data.headers.authorId != "1") {
				if (data.headers.autoReply != 1) {
                                    setCookie('inConv', headerText, 1);
                                }
                            }
                        }
                    }
                } else {
                    data.headers.authorNick = (self.optionRef.useAgentName === "true") ? data.headers.agentName : self.agentName;
		    agentName = (self.optionRef.useAgentName === "true") ? data.headers.agentName : self.agentName;
                    self.agentName = (self.optionRef.useAgentName === "true") ? data.headers.agentName : self.agentName;
                }

                switch (data.headers.contentType) {
                    case 'text/ack':
                         $('.chatboxmessage_'+data.id+' .loadingSpinner').hide();
                         jQuery('.chatboxmessage_'+data.id+' .messageStatus').removeClass('failed');
                         jQuery('.chatboxmessage_'+data.id+' .messageStatus').addClass('received');
                        break;
                    case 'text/received':
			var headerText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Now chatting with " + agentName : "ä¸" + agentName + "èå¤©ä¸­";
                        jQuery('.chat-title').text(headerText);
                        break;
		    case 'request/show':
                        appendConsent(Chat);
                        break;
                    case 'text/plain':
                    case 'text/html':
			if (data.headers.persistent == false && data.headers.authorId == "1") {
                            setCookie('grataGreetingDate', nowDate, 1);
                            return;
                        }
			if (self.previousID != data.headers.authorId || self. previousID == "0") {
                            isConcatenatable = false;
                        }
                        self.previousID = data.headers.authorId;
                if(data.headers.sentBy === 'Agent'/* || data.headers.authorNick == 'Grata'*/) {
                    (self.isMobileConfig === true) ? $('#window_chat').css('height', "100%") : $('#window_chat').css('height', "107%");
                    //$('#window_chat').css('height', "107%");
                    (self.getCookie('muteAudio') !== "true") ? jQuery('.watermark').html('<audio autoplay="autoplay"><source src="' + self.audioSrc + '" type="audio/mpeg" /></audio>') : console.log("Audio blocked");
                        jQuery('.chat-title').text(headerText);
                            var messageT;
                            var htmlObj;

                            if(self.validUrl(data.body)) {
                                messageT = '<a href="'+data.body+'" target="_blank">'+data.body+'</a>';
                            } else {
                                messageT  = data.body;
                            }

                            if (isConcatenatable !== false) {
                                htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageLayout"><span style="color: '+self.chatText+'" class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                            } else {
				if (data.headers.agentAvatar != undefined && self.showDefaultLeft === false) {
                                    if (data.headers.agentPlace != undefined && data.headers.agentPlace != "" && data.headers.agentPlace != null) {
                                        htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageToName"> <div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+data.headers.agentPlace+'</span></div></div> </div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                                    } else {
                                        htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageToName"> <div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div></div> </div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                                    }
                                } else {
                                    if (data.headers.agentPlace != undefined && data.headers.agentPlace != "" && data.headers.agentPlace != null) {
                                        htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageToName"><div class="chatTopPart" style="margin-left: -5px;"><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+data.headers.agentPlace+'</span></div></div></div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                                    } else {
                                        htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageToName"><div class="chatTopPart" style="margin-left: -5px;"><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div></div></div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                                    }
                                }
				/*if (data.headers.agentAvatar != undefined  && self.showDefaultLeft === false) {
                                    htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageToName"> <div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">Place name</span></div></div> </div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                                } else {
                                    htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage chatboxmessage_'+data.id+'"><div class="messageToName"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+agentName+'</span></div><div class="messageLayout"><span class="chatboxmessagecontent">'+messageT+'</span></div></div></div>';
                                }*/
                            }
                            $('.messageTo, .messageFrom').css('margin-bottom', '5px');
			    $('.adapt').remove();
			    if (htmlObj !== undefined && htmlObj.indexOf('<div class="cardContainer"') > -1) {
                                htmlObj = htmlObj.split('<p>Â </p>').join('');
                            }
                            jQuery('.chat-container').append(htmlObj);
			    if (self.optionRef.fontSize > 14) {$('#message_' + data.id + ' .placeNameContainer').css({'top': '-2px', 'margin-bottom': '0px', 'font-size': '14px'});}
			    if (data.headers.agentAvatar != undefined && self.showDefaultLeft === false && data.headers.agentPlace === "") {
                            	$('#message_' + data.id + ' .agentNameContainer').css({'top': '17px', "height": '30px', 'margin-bottom': '12px'});
                            }
			    $('.messageLayout').css('padding-bottom', '0px');
			    checkAgentData(htmlObj, data);
                            self.notifyNewMessage();
                            // If card make link clickable
                            if (messageT !== undefined && messageT.indexOf('<div class="cardContainer"') > -1) {
                                console.log(messageT);
				messageT = messageT.replace(/\n/ig, '');
                                if (self.isMobileConfig === true) {
                                    $('#message_' + data.id).find('.cardContainer').css('margin-bottom', '35px');
                                    $('#message_' + data.id).find('.cardImageContainer').addClass('cardMobileAttr');
                                }
				if ($('#message_' + data.id).find('.cardLinkText a')[0] !== undefined) {
				  var theLink = $('#message_' + data.id).find('.cardLinkText a')[0].href;
                                  $('#message_' + data.id).find('.cardContainer').click(function(e) {
                                    var urlFull = $('#message_' + data.id).find('.cardLinkText').text().replace(new RegExp("amp;", 'g'), "");
                                    window.open(/*'http://' + $('#message_' + data.id).find('.cardLinkText').text()*/theLink, '_blank');
                                  });
				} else {
                                    var theLink = $('#message_' + data.id).find('.cardLinkText').text();
                                    $('#message_' + data.id).find('.cardContainer').click(function(e) {
                                            var urlFull = $('#message_' + data.id).find('.cardLinkText').text().replace(new RegExp("amp;", 'g'), "");
                                            window.open(/*'http://' + $('#message_' + jsonObj.id).find('.cardLinkText').text()*/theLink, '_blank');
                                    });
                                }
                                var myEl = $('#message_' + data.id).find('.cardLinkText')[0].innerText;
                                if (myEl.indexOf('www') === -1 && myEl.indexOf('http') === -1) {
                                    $('#message_' + data.id).find('.cardLinkText').hide();
                                } else {
                                    var urlFull = $('#message_' + data.id).find('.cardLinkText').text();
                                    if (urlFull !== undefined && urlFull !== null && urlFull !== "")
                                        $('#message_' + data.id).find('.cardLinkText').text(urlFull/*.split('://')[1].split('/')[0]*/);
                                }
                            }

                            jQuery('.remote').css('color', self.chatAgentName);
                            jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                            if (data.headers.timestamp !== undefined && data.headers.timestamp.indexOf(" CST") > -1) {
                                data.headers.timestamp.replace("", " CST");
                            }
                            //console.log(data.headers.timestamp);
                            var jsonObj = {
                                authorNick: data.headers.authorNick,
                                sessionId: data.headers.sessionId,
                                orgId:     data.headers.orgId,
                                //timestamp: data.headers.timestamp,
                                timestamp: new Date(/*data.headers.timestamp*/).toString(),
                                id: data.id,
                                body: htmlObj,
                                cType: data.headers.contentType
                            };
                            if(jsonObj != '') {
                                self.appendToStorage('grataHistory', JSON.stringify(jsonObj));
                            }
                            var sendReceived = {
                                headers: {
                                    contentType: "text/received"
                                },  
                                id: data.id,
                            };
                            var sendAck = {
                                headers: {
                                    contentType: "text/ack"
                                },
                                id: data.id,
                            };
			    if (data.headers.autoMessage != true) {
                                grataFirstAgentResponse();
                            }
                            Chat.socket.send(JSON.stringify(sendReceived));
                            Chat.socket.send(JSON.stringify(sendAck));
                    } 
                            break;
                    case 'user/join':
                        if($('.typing-box').is(':visible')) {
                            if(data.headers.sentBy !== 'User') {
				sendGrataStart(data);
                                jQuery('.chat-title').text(headerText);
                                //document.cookie="lastagent="+data.headers.authorNick+"; expires=3650;path=/;";
                                setCookie("lastagent", data.headers.authorNick, 1);
                            }
                        }
                    break;
                    case 'image/jpeg':
		    case 'image/png':
		    case 'image/PNG':
                        (self.isMobileConfig === true) ? $('#window_chat').css('height', "100%") : $('#window_chat').css('height', "107%");
                        (self.getCookie('muteAudio') !== "true") ? jQuery('.watermark').html('<audio autoplay="autoplay"><source src="' + self.audioSrc + '" type="audio/mpeg" /></audio>') : console.log("Audio blocked");
                        //jQuery('.watermark').html('<audio autoplay="autoplay"><source src="' + self.audioSrc + '" type="audio/mpeg" /></audio>');
                        jQuery('.chat-title').text(headerText);
                        var htmlObj;
			if (data.body.indexOf("qr.topscan.com") == -1) {
                            data.body = data.body.replace("http://", "https://");
                        } else {
                        	grataQRShared('bookingQR');
                        }
                        /*if (data.headers.authorNick === "WebChat User")
                            break;*/
                        if (isConcatenatable !== false) {
                            htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="chatboxmessage"><a href="' + data.body + '" target="_blank"><div class="chatboxmessagecontent image" style="cursor: pointer;background-image: url('+data.body+');"></div></a></div></div>';
                            //htmlObj = '<div class="messageTo"><div class="chatboxmessage"><a href="' + data.body + '" target="_blank"><div class="chatboxmessagecontent image" style="background-image: url('+data.body+');"></div></a></div></div>';
                        } else {
			    if (data.headers.agentAvatar != undefined  && self.showDefaultLeft === false) {
                                htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage"> <div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">Place name</span></div></div> <a href="' + data.body + '" target="_blank"><div class="chatboxmessagecontent image" style="background-image: url('+data.body+');"></div></a></div></div>';
                            } else {
                                htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+agentName+'</span><a href="' + data.body + '" target="_blank"><div class="chatboxmessagecontent image" style="background-image: url('+data.body+');"></div></a></div></div>';
                            }
                        }
                        $('.messageTo, .messageFrom').css('margin-bottom', '5px');
			$('.adapt').remove();
                        jQuery('.chat-container').append(htmlObj);
			if (self.optionRef.fontSize > 14) {$('#message_' + data.id + ' .placeNameContainer').css({'top': '-2px', 'margin-bottom': '0px', 'font-size': '14px'});}
			if (data.headers.agentAvatar != undefined && self.showDefaultLeft === false && data.headers.agentPlace === "") {
                            $('#message_' + data.id + ' .agentNameContainer').css({'top': '17px', "height": '30px', 'margin-bottom': '12px'});
                        }
			$('.messageLayout').css('padding-bottom', '0px');
			checkAgentData(htmlObj, data);
                        self.notifyNewMessage();
                            jQuery('.remote').css('color', self.chatAgentName);
                            jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                            var jsonObj = {
                                authorNick: data.headers.authorNick,
                                sessionId: data.headers.sessionId,
                                orgId:     data.headers.orgId,
                                timestamp: data.headers.timestamp,
                                id: data.id,
                                body: htmlObj,
                                cType: data.headers.contentType
                            };
                            if(jsonObj != '') {
                                self.appendToStorage('grataHistory', JSON.stringify(jsonObj));
                            }
                            var sendReceived = {
                                headers: {
                                    contentType: "text/received"
                                },
                                id: data.id,
                            };
                            var sendAck = {
                                headers: {
                                    contentType: "text/ack"
                                },
                                id: data.id,
                            };
			    grataFirstAgentResponse();
                            Chat.socket.send(JSON.stringify(sendReceived));
                            Chat.socket.send(JSON.stringify(sendAck));
                    break;
                   case 'audio/mpeg':
                        (self.isMobileConfig === true) ? $('#window_chat').css('height', "100%") : $('#window_chat').css('height', "107%");
                        (self.getCookie('muteAudio') !== "true") ? jQuery('.watermark').html('<audio autoplay="autoplay"><source src="' + self.audioSrc + '" type="audio/mpeg" /></audio>') : console.log("Audio blocked");
                        //jQuery('.watermark').html('<audio autoplay="autoplay"><source src="' + self.audioSrc + '" type="audio/mpeg" /></audio>');
                        jQuery('.chat-title').text(headerText);
                        var htmlObj;
                        data.body = data.body.replace("http://", "https://");
                        if (isConcatenatable !== false) {
                            htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="chatboxmessage"><audio class="audioPlacer" controls="controls"><source class="chatboxmessagecontent audio" type="audio/mpeg" src="'+data.body+'"/></audio></div></div>';
                        } else {
			    if (data.headers.agentAvatar != undefined  && self.showDefaultLeft === false) {
                                htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage"> <div class="chatTopPart"><div class="chatTopPartImage"></div><div class="agentNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';font-weight:500;">'+agentName+'</span></div><div class="placeNameContainer"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">Place name</span></div></div> <audio class="audioPlacer" controls="controls"><source class="chatboxmessagecontent audio" type="audio/mpeg" src="'+data.body+'"/></audio></div></div>';
                            } else {
                                htmlObj = '<div '+ style +' id="message_' + data.id + '" class="messageTo"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage"><span class="chatboxinfo remote" style="color:' +self.chatAgentName+ ';">'+agentName+'</span><audio class="audioPlacer" controls="controls"><source class="chatboxmessagecontent audio" type="audio/mpeg" src="'+data.body+'"/></audio></div></div>';
                            }
                        }
                        $('.messageTo, .messageFrom').css('margin-bottom', '5px');
			$('.adapt').remove();
                        jQuery('.chat-container').append(htmlObj);
			if (self.optionRef.fontSize > 14) {$('#message_' + data.id + ' .placeNameContainer').css({'top': '-2px', 'margin-bottom': '0px', 'font-size': '14px'});}
			if (data.headers.agentAvatar != undefined && self.showDefaultLeft === false && data.headers.agentPlace === "") {
                            $('#message_' + data.id + ' .agentNameContainer').css({'top': '17px', "height": '30px', 'margin-bottom': '12px'});
                        }
			$('.messageLayout').css('padding-bottom', '0px');
			checkAgentData(htmlObj, data);
                        self.notifyNewMessage();
                            jQuery('.remote').css('color', self.chatAgentName);
                            jQuery("#window_chat .chat-container").scrollTop(jQuery("#window_chat .chat-container")[0].scrollHeight);
                            var jsonObj = {
                                authorNick: data.headers.authorNick,
                                sessionId: data.headers.sessionId,
                                orgId:     data.headers.orgId,
                                timestamp: data.headers.timestamp,
                                id: data.id,
                                body: htmlObj,
                                cType: data.headers.contentType
                            };
                            if(jsonObj != '') {
                                self.appendToStorage('grataHistory', JSON.stringify(jsonObj));
                            }
                            var sendReceived = {
                                headers: {
                                    contentType: "text/received"
                                },
                                id: data.id,
                            };
                            var sendAck = {
                                headers: {
                                    contentType: "text/ack"
                                },
                                id: data.id,
                            };
			    grataFirstAgentResponse();
                            Chat.socket.send(JSON.stringify(sendReceived));
                            Chat.socket.send(JSON.stringify(sendAck));
                    break;
                    case 'user/renew':
                    break;
                    case 'user/away':
                    break;
                    case 'user/close':
                        console.log("Close event?");
                    break;
                    case 'user/disappear':
                        console.log("disappear event?");
			agentLeftChatFlow(Chat);
                    break;
                    case 'user/typing':
                        //console.log("Agent Typing");
                        //if($('.typing-box').is(':visible')) {
                            if(data.headers.sentBy !== 'User') {
                                var typingText = (self.localLang.indexOf('zh') > -1 || self.localLang.indexOf('CN') > -1) ? data.headers.authorNick+'æ­£å¨è¾å¥...' : data.headers.authorNick+' is typing...';
                                if (jQuery('.chat-title').text() !== typingText)
                                    jQuery('.chat-title').text(typingText);
				setTimeout(function() {
                                    var headerText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Now chatting with " + agentName : "ä¸" + agentName + "èå¤©ä¸­";
                                    jQuery('.chat-title').text(headerText);
                                }, 5000);
                            }
                        //}
                    break;
                    //case 'user/stopTyping':

                    //break;
                    case 'user/stopTyping':
                        var headerText = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "Now chatting with " + agentName : "ä¸" + agentName + "èå¤©ä¸­";
                        jQuery('.chat-title').text(headerText);
                    break;
		    case 'event/launchCS':
                        launchCSEvent(data.headers.type, data.headers.keyword);
                    break;
		    case 'event/switchStore':
			var storeEvent = document.createEvent('Event');
                        storeEvent.dataToGrata = {'callback': data.headers.callback, 'buttonId': data.headers.buttonId, 'prompt': false, 'maximizeGrata': false, 'propagate':false};
                        storeEvent.initEvent('setGrataToStore', true, true);
                        parent.window.document.dispatchEvent(storeEvent);
                    break;
		    case 'event/keyword':
                        launchKeywordEvent(data.headers.type, data.headers.keywordType, data.headers.keyword);
                    break;
                    case 'text/echo':
                        break;
                    default:
                        //window.alert(data.headers.contentType);
                    break;
            }      
            };
    });

    Chat.disconnect = function() {
        this.connected = false;
        this.log('entering', 'disconnect');
        if (Chat.socket) {
            Chat.socket.close();
            if (Chat.socket !== null)
                Chat.socket.onclose = function() {};
            delete Chat.socket;
            Chat.socket = null;
            this.log('exiting', 'disconnect');
        }
    };
  
    Chat.initialize = function (eventHandler) {
        // We should make a Chat.connect only if the geoip returns a succeed or event handler is set to true
        // AND
        // Update the event handler correctly (turn off after 10mins of inactivity for example)
        /*var email = self.makeId()+'@noemail.com';
            var password = 'nopassword';
            var nick = 'WebChat User';
            var from = 'webplugin';
            var cookie = self.getCookie("grataUserToken");
            if(cookie == "") {
		var idData = (typeof self.clickButtonId === 'string' || self.clickButtonId instanceof String) ? self.clickButtonId.replace('#', '').replace('.', '') : "";
		//var idData = self.clickButtonId.replace('#', '').replace('.', '');
                jQuery.ajax({
                    type: 'POST',
                    url: 'https://' + self.apiPrefix + 'api.'+self.chatDomain+'/connect-api/user/register',
                    data: {email: email, password: password, nick: nick, from: from, buttonId: idData, originOrg: this.orcode, callback: this.accessCode},
                    dataType: 'json',
                    beforeSend: function (request) {
                        var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn"; 
                        request.setRequestHeader("GB-Lang", lang);
                    },
                    success: function(data) {
			setCookie('grataUserToken', data.data.accessToken, 1);
                        //document.cookie="grataUserToken="+data.data.accessToken+"; expires=3650;path=/;";
                        self.connected = true;
                    }
                });
            }*/
	if (self.connected === true) {return;}
	//var cookie = getCookie("grataUserToken");
            //if(cookie == "") {return;}
	//if (self.isRegisterDone === true) {return;}
          Chat.log('entering', 'initialize');
           if (self.orgId == "6") {self.csStatus = true;}
           this.connected = true;
	   //if (this.connected == true) {
	   //var idData = (typeof self.clickButtonId === 'string' || self.clickButtonId instanceof String) ? self.clickButtonId.replace('#', '').replace('.', '') : "";
	   var idData = (typeof self.clickButtonId === 'string' || self.clickButtonId instanceof String) ? self.clickButtonId.split("#").join(",").replace('.', '') : "";
           if (eventHandler == true) {
                //Chat.connect('wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2);
                //self.connected = true;
                //Chat.connect('wss://chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2);
            } else {
	    var locDone = getCookie("grataLocDone");
	    if(locDone == "true") {
		var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn";
		var connectStr = (self.csStatus == null) ? 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang : 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang+'&csOnline='+self.csStatus; 
		    if (self.chatDomain.indexOf('grata') > -1) {
			connectStr = connectStr.split("access_token=&").join('');
                    }
                    Chat.connect(connectStr);
		//Chat.connect('wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang+'&csOnline='+self.csStatus);
                    self.connected = true;
		    //unforceDisableButton();
                return;
            }
	    $('.reconnectTextContainer, .reconnectFormTextContainer').hide();
	    //console.log(this.connected);
            var coordinates = '';
	     //var idData = (typeof self.clickButtonId === 'string' || self.clickButtonId instanceof String) ? self.clickButtonId.replace('#', '').replace('.', '') : "";
	    //var idData = self.clickButtonId.replace('#', '').replace('.', '');
            jQuery.ajax({
                type: 'POST',
                url: self.ipstackProtocol + '://api.ipstack.com/check?access_key=273b3075d468455930fe318c13e5f418',
                dataType: 'json',
                success: function(data) {
		    setCookie('grataLocDone', true, 1);
                    self.userInfo.country = data.country_name;
                    self.userInfo.city = data.city;
                    self.userInfo.region = data.region_name;
                    self.myIp = data.ip;
                    coordinates = {
                        ip: data.ip,
                        lat: data.latitude,
                        lon: data.longitude
                    };
		    var lang = (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? "en" : "cn";
		    var connectStr = (self.csStatus == null) ? 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&latitude='+data.latitude+'&longitude='+data.longitude+'&ipaddr='+data.ip+'&origin='+window.location.host+'&cityName='+data.city+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang : 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&latitude='+data.latitude+'&longitude='+data.longitude+'&ipaddr='+data.ip+'&origin='+window.location.host+'&cityName='+data.city+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang+'&csOnline='+self.csStatus;
		    if (self.chatDomain.indexOf('grata') > -1) {
			connectStr = connectStr.split("access_token=&").join('');
                    }
                    Chat.connect(connectStr);
                    //Chat.connect('wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&latitude='+data.latitude+'&longitude='+data.longitude+'&ipaddr='+data.ip+'&origin='+window.location.host+'&cityName='+data.city+'&buttonId='+idData+'&originOrg='+self.accessCode+'&lang='+lang+'&csOnline='+self.csStatus);
                    self.connected = true;
		    //unforceDisableButton();
                },
                fail: function(data, textStatus) {
                    printLog("fail", 1385);
                    if (textStatus === "timeout") {
                        printLog("TIMEOUT", 1387);
                        // handle timeout
                    }
		    self.connected = true;
		    //unforceDisableButton();
		    var connectStr = (self.csStatus == null) ? 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&ipaddr='+data.ip+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode : 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&ipaddr='+data.ip+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&csOnline='+self.csStatus;
		    if (self.chatDomain.indexOf('grata') > -1) {
			connectStr = connectStr.split("access_token=&").join('');
                    }
                    Chat.connect(connectStr);
                    //Chat.connect('wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&ipaddr='+data.ip+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&csOnline='+self.csStatus);
                },   
                error: function(data) {
                    printLog("error", 1393);
		    self.connected = true;
		    //unforceDisableButton();
		    var connectStr = (self.csStatus == null) ? 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&ipaddr='+data.ip+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode : 'wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&ipaddr='+data.ip+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&csOnline='+self.csStatus;
		    if (self.chatDomain.indexOf('grata') > -1) {
			connectStr = connectStr.split("access_token=&").join('');
                    }
                    Chat.connect(connectStr);
                    //Chat.connect('wss://' + self.apiPrefix + 'chat.'+self.chatDomain+'/ws/chat?access_token='+self.getCookie('grataUserToken')+'&access='+orgId2+'&ipaddr='+data.ip+'&origin='+window.location.host+'&buttonId='+idData+'&originOrg='+self.accessCode+'&csOnline='+self.csStatus);
               }, timeout: 60000
            });
        }
    };

    Chat.sendMessage = (function (message, contentType, systemStatus, greeting, values) {//update : username , replace author nick, and change Me in the ifs
        Chat.log('entering', 'sendMessage');
	//var self = this.grataCb;
	//self.initUpload(Chat);
	if (/*self.orgId == "6" || */self.orgId == "205250481355" || self.orgId == "122125966570" || self.orgId == "023258393135") {
	  if (contentType == "text/plain") {
            if (self.authorized == false) {
                $('.ppcContainer').show().css('color', 'red');
		$('.ppcLink').css({'color': 'red', 'text-decoration':'underline'});
		$('.sendButton').css({'color': 'lightgray', 'border-color': 'lightgray'});
		$('.ppcContainer').show();
                return;
            } else if (self.authorized == null) {
                if ($('.typing-box').val().length > 0 && $('.typing-box').val() != "Type your message here" && $('.typing-box').val() != "è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯") {
                    $('.ppcContainer').css('color', 'red');
		    $('.ppcLink').css({'color': 'red', 'text-decoration':'underline'});
		    $('.sendButton').css({'color': 'lightgray', 'border-color': 'lightgray'});
		    $('.ppcContainer').show();
                }
                return;
            }
	  }
        }
	if (message.toLocaleLowerCase().indexOf("<script") > -1 || message.toLocaleLowerCase().indexOf("<style") > -1 || message.toLocaleLowerCase().indexOf("<img") > -1) {
            return;
        }
        var myId = self.generateUUID();
        var userName = (self.userName !== null && self.userName !== "") ? self.userName : "Me";
        var successful = false;
            message = message.replace(/\r?\n/g, '<br />');
            var messageObj = {
                authorNick: userName,//You
                timestamp: new Date().toString()/*.getTime()*/,
                body: message,
                id: myId,
                origin: 'local'
            };
            sendObj = {
              headers: {
                    contentType: contentType,
                    sentBy: 'User'
                },
                body: message,
                id: myId
            };
	/*if (contentType == 'text/plain' && self.validUrl(sendObj.body) == false) {
          sendObj.body = encodeURIComponent(sendObj.body);
        }*/
	if (contentType == "event/switchStore") {
            sendObj.headers.buttonId = values.buttonId;
            sendObj.headers.callback = values.callback;
        }
	if (contentType == 'status/csOnline') {
                sendObj.headers.csOnline = self.csStatus;
            }
	if (greeting != undefined && greeting == 'true') {sendObj.headers.greetingMessage = true;}
        if(!systemStatus || greeting == 'true') {
            if(this.connected) {
                if(Chat.socket !== null && Chat.socket.readyState == WebSocket.OPEN){//toPush
                    try { 
                      if (self.historyUrlSent == false && sendObj.headers.contentType != 'status/csOnline') {
                        doAddUrl(true, Chat, sendObj);
                        successful = true;
                      } else {
                        Chat.socket.send(JSON.stringify(sendObj));
                        successful = true;
                      }
                      //Chat.socket.send(JSON.stringify(sendObj));
                      //successful = true;
                    } catch (exception) {
                        successful = false;
                    }
                } else {
                    successful = false;
                    Chat.initialize(false);//Was truei
		    //setTimeout(function() {Chat.sendMessage(message, contentType);}, 2000);
		    return;
                }
        } else {
            this.connected = false;
            Chat.initialize(false);//Was true
	    //setTimeout(function() {Chat.sendMessage(message, contentType);}, 2000);
	    return;
         }
	    if (contentType == "status/csOnline") {return;}
	    if (contentType == "event/switchStore") {return;}
	    if (message === "#ConsentGiven") {return;}
	    if (message === "consent=true" || message === "consent=false") {return;}
            var htmlObj;
            var isConcatenatable;
            var nowDate = new Date();
            var myHours = (nowDate.getHours().toString().length <= 1) ? "0" + nowDate.getHours() : nowDate.getHours();
            var myMinutes = (nowDate.getMinutes().toString().length <= 1) ? "0" +  nowDate.getMinutes() : nowDate.getMinutes();
            var style = (self.isMobileConfig === true) ? 'style="margin-bottom:140px;"' : 'style="margin-bottom:'+self.desktopBottom+'px;height:20px;"';
	    if (self.isMobileConfig === true && navigator.userAgent.indexOf('iPhone') > -1) {style = 'style="margin-bottom:100px;"';}

	    var floatage = (self.showDefaultLeft === false) ? 'style="float:right"': "";
	    var localLeftClass = "localToLeft";
            if (self.showDefaultLeft === true) {
                style = style.split('height')[0];
                localLeftClass = "";
            }

            if (jQuery('.chat-container').children().length === 0) {
                isConcatenatable = false;
            } else {
		isConcatenatable = (jQuery('.chat-container').children()[$('.chat-container').children().length - 1].className.indexOf("messageFrom") > -1) ? true : false;
                //isConcatenatable = jQuery('.chat-container').children()[$('.chat-container').children().length - 1].className === "messageFrom";//update To to From
            }

            if (sendObj.body.length > 0) {
                    self.userTyping = false;
                    jQuery('.local').css('color', self.colorUserName);
                    if(message != '#close') {
                    if(self.validUrl(message)) {
                        if (contentType.indexOf("image") > -1) {
                            if (isConcatenatable !== false) {
                                jQuery('.chat-container').append('<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent"></span></div></div></div>');/*<i class="fa fa-spinner fa-spin loadingSpinnerImage"></i>*/
                                messageObj.body = '<a style="outline:none;" href="' + message + '" target="_blank"><div id="chatboxmessage_' + sendObj.id + '" class="chatboxmessagecontent image" style="cursor: pointer;background-image: url('+message+');"></div></a>';
                            } else {
                                jQuery('.chat-container').append('<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><span class="chatboxinfo local" style="color: '+self.colorUserName+';">'+userName+'</span><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent"></span></div></div></div>');//<i class="fa fa-spinner fa-spin loadingSpinnerImage"></i>
                                messageObj.body = '<a style="outline:none;" href="' + message + '" target="_blank"><div id="chatboxmessage_' + sendObj.id + '" class="chatboxmessagecontent image" style="cursor: pointer;background-image: url('+message+');"></div></a>';
                            }
                        } else {
                            messageObj.body = '<a href="'+message+'" target="_blank">'+message+'</a>';
                        }

                        if(this.connected) {
                            if (isConcatenatable !== false) {
                                htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent"><a href="'+message+'" target="_blank">'+message+'</a></span></div><i class="fa fa-spinner fa-spin loadingSpinner"></i><div class="messageStatus"></div></div></div>';//<div class="throbber-loader">Loading...</div>
                            } else {
                                htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><span class="chatboxinfo local" style="color: '+self.colorUserName+';">'+userName+'</span><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent"><a href="'+message+'" target="_blank">'+message+'</a></span></div><i class="fa fa-spinner fa-spin loadingSpinner"></i><div class="messageStatus"></div></div></div>';
                            }
                        } else {
                            if (isConcatenatable !== false) {
                                htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent"><a href="'+message+'" target="_blank">'+message+'</a></span></div><i class="fa fa-exclamation-triangle"></i></div></div>';//<div class="messageStatus failed"></div>
                            } else {
                                htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><span class="chatboxinfo local" style="color: '+self.colorUserName+';">'+userName+'</span><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent"><a href="'+message+'" target="_blank">'+message+'</a></span></div></div></div>';//<div class="messageStatus failed"></div>
                            }
                        }
                    } else {
                        if(this.connected) {
                            if (isConcatenatable !== false) {
                                htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent">'+message+'</span></div><div class="messageStatus"></div></div>';
                            } else {
                                htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><span class="chatboxinfo local" style="color: '+self.colorUserName+';">'+userName+'</span><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent">'+message+'</span></div><div class="messageStatus"></div></div>';
                            }
                        } else {
                            Chat.initialize(true);//Most recent test
                            if(Chat.socket.readyState == WebSocket.OPEN) {
                                try {  
                                    Chat.socket.send(JSON.stringify(sendObj));
                                    successful = true; 
                                } catch (exception) {
                                    successful = false;
                                }
                                if (isConcatenatable !== false) {
                                    htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessage '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent">'+message+'</span></div><div class="messageStatus"></div></div></div>';
                                } else {
                                    htmlObj = '<div '+ style +' id="message_' + sendObj.id + '" class="messageFrom"><div class="messageTimeContainer"><span class="messageTime">' + myHours + ':' + myMinutes + '</span><span class="messageTimestamp">' + nowDate + '</span></div><div class="chatboxmessag '+localLeftClass+' chatboxmessage_'+sendObj.id+'"><span class="chatboxinfo local" style="color: '+self.colorUserName+';">'+userName+'</span><div class="messageLayout" '+floatage+'><span style="color: '+self.chatText+'"  class="chatboxmessagecontent">'+message+'</span></div><div class="messageStatus"></div></div></div>';
                                }
                            }
                        }                            
                    }
                    if (contentType.indexOf("image") > -1)
                        htmlObj = messageObj.body;
                    else
                        messageObj.body = htmlObj;

                    messageObj.cType = contentType;
		    $('.messageLayout').css('padding-bottom', '0px');
		    //doAddUrl(true);
                    self.appendToStorage('grataHistory', JSON.stringify(messageObj));
                    $('.messageTo, .messageFrom').css('margin-bottom', '5px');
		    $('.adapt').remove();//test
                    jQuery('.chat-container').append(htmlObj);
		    grataFirstUserMessage();
		    if (isConcatenatable === true) {$('#message_' + sendObj.id + ' .messageTimeContainer').remove();}
		    $('.messageLayout').css('padding-bottom', '0px');
		    $('.adapt').remove();
                    //jQuery('.chat-container').append(htmlObj);
                    //var lengthToCheck = 50;//(self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) ? 200 : 50;
                    if (self.isMobileConfig === true/* && message.length > lengthToCheck*/) {
                        jQuery('.chat-container').append('<div style="position:relative;width:100%;height:80px;float:left" class="adapt messageFrom"> </div>');
                    } else if (self.isMobileConfig === false/* && message.length > lengthToCheck*/) {
                        jQuery('.chat-container').append('<div style="position:relative;width:100%;height:20px;float:left" class="adapt messageFrom"> </div>');
                    }
		    if (self.showDefaultLeft === false) {
                        if ($('#message_' + sendObj.id + ' .messageLayout').height() > 21) {
                            $('#message_' + sendObj.id + ' .localToLeft').css('text-align', 'left');
                        } else {
                            $('#message_' + sendObj.id + ' .localToLeft').css('text-align', 'right');
                        }
                    }
		    if (self.showDefaultLeft === false) {
                        jQuery('.chat-container').find('.local').hide();
                    }
		    //jQuery('.chatboxinfo .local').hide();
		    //jQuery('.chat-container').find('.local').hide();
                    jQuery('.typing-box').val('');
		    if (contentType.indexOf("image") === -1) {
			//alert("in if " + $('.typing-box').val());
                        jQuery('.typing-box').focus();
		    } else {
			//alert("in else " + $('.typing-box').val());
			var url = message;
                        $("<img/>",{
                            load : function(){
				self.lastImageWidth = this.width;
				self.lastImageHeight = this.height;
				    if (self.lastImageHeight < 177) {
                                	jQuery('#chatboxmessage_' + sendObj.id).css('height', self.lastImageHeight + 'px');
                            	    }
				    if (self.lastImageWidth < 315) {
                                	jQuery('#chatboxmessage_' + sendObj.id).css({'width': self.lastImageWidth + 'px'});
                                	if (self.showDefaultLeft === false) {
                                      	    jQuery('#chatboxmessage_' + sendObj.id).css({'float': 'right', 'margin-right': '5px', 'background-position': 'right'});
                                	}
                            	    } else {
                                	jQuery('#chatboxmessage_' + sendObj.id).css({'width': '315px'});
                                	if (self.showDefaultLeft === false) {
                                    	    jQuery('#chatboxmessage_' + sendObj.id).css({'float': 'right', 'margin-right': '5px', 'background-position': 'right'});
                                	}
                            	    }
                            },
                            src  : url
                        });
			if (self.localLang.indexOf("cn") === -1 && self.localLang.indexOf("zh") === -1) {
                            if ($('.typing-box').val() === "")
                                $('.typing-box').val("Type your message here");
                        } else {
                            if ($('.typing-box').val() === "")
                                $('.typing-box').val("è¯·å¨æ­¤å¤è¾å¥æ¨çä¿¡æ¯");
                        }
                        $('.typing-box').css("font-style", "italic");
			$(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                    }
		    jQuery('.local').css('color', this.colorUserName);
                    //$('.messageTo, .messageFrom').css('padding-bottom', '15px');
                    setTimeout(function () {
			$('.uploadIconStyle').css('display', 'block');
                        $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
                    }, 1000);

                    //console.log('#chatboxmessage_' + sendObj.id + ' .image');
                    jQuery('#chatboxmessage_' + sendObj.id + ' .image').unbind('click');
                    jQuery('#chatboxmessage_' + sendObj.id + ' .image').click(function(e) {
                        e.preventDefault();
                        console.log(this);
                        window.open($(this)[0].innerText, '_blank');
                        //jQuery("#iframeChat").parent().html('<div style="position:relative;top:0;bottom:0;left:0;right:0;background-color:black;"></div>');
                    });
            }
        }
        }
        /*if(systemStatus && self.getCookie('lastagent') != "") { //This seems unecessary, it overspams the status
            htmlObj = '<div class="statusMessage"><div class="statusText">'+self.getCookie('lastagent')+ ' has left the chat</div></div>';//<div class="rejoin">Just send a message to talk again!</div>
            messageObj.body = htmlObj;
            console.log("The Test");
            self.appendToStorage('grataHistory', JSON.stringify(messageObj)); 
        }*/
        Chat.log('exiting', 'sendMessage');
        var suc;
        if(Chat.socket) {
            if(Chat.socket.readyState == WebSocket.OPEN) {
                suc = {
                    'successful': successful,
                    'id': sendObj.id,
                    'status': true
                };
            } else {
               suc =  {
                   'successful': successful,
                   'id': sendObj.id,
                   'status': false
                };
            }
        }
            return suc;
    });

    Chat.log = function(msg, method) {
    if (!this.logging) {
        return;
    }
    if (method === undefined) {
        method = null;
    }
    if (msg == 'exiting') {
        this.stackCount--;
    }
    var output = Array(this.stackCount*4+1).join(' ')+this.className;
    if (method) {
        output += ':' + method + '()';
    }
    output += ' ';
    console.log(output + msg);
    if (msg == 'entering') {
        this.stackCount++;
    }
};

    Chat.sendPingCheck = function() {
        Chat.log('entering', 'sendPingCheck');
	if (Chat !== undefined && Chat.socket === null) {return;}
        try {
            if (Chat.socket.readyState == WebSocket.OPEN) {
            Chat.socket.send('#echo');
        }
        var d = new Date();
        var currTime = d.getTime();
        if (this.lastPingTime === 0) {
            this.lastPingTime = currTime;
        }
        if (currTime > this.lastPingTime + 60000) {
            Chat.stop();
            Chat.start();
        }
        } catch(err) {
            Chat.stop();
            Chat.initialize(true);//Most recent test
        }
        Chat.log('exiting', 'sendPingCheck');
     };

Chat.startConnectionMonitor = function () {
            Chat.log('entering', 'startConnectionMonitor');
            var self = this;

            document.body.addEventListener("online", self.onOnline);
            document.body.addEventListener("offline", self.onOffline);

            Chat.connectionMonitorSetIntervalId = setInterval(function () {
                //self.checkConnection();
                Chat.checkConnection();
            }, 5000);//5000

            Chat.log('exiting', 'startConnectionMonitor');
        };

        Chat.stopConnectionMonitor = function () {
            Chat.log('entering', 'stopConnectionMonitor');
            var self = this;

            document.body.removeEventListener("online", self.onOnline);
            document.body.removeEventListener("offline", self.onOffline);

            clearInterval(this.connectionMonitorSetIntervalId);
            this.lastPingTime = 0;
            Chat.log('exiting', 'stopConnectionMonitor');
        };
 
        Chat.onOnline = function () {
            Chat.log('entering', 'onOnline');
            Chat.disconnect();// Why doing that?
            Chat.connect(); 
            Chat.log('exiting', 'onOnline');
        };

        Chat.onOffline = function () {
            Chat.log('entering', 'onOffline');
            Chat.disconnect();
            Chat.log('exiting', 'onOffline');
        };

        Chat.stop = function () {
        Chat.log('entering', 'stop');
        Chat.stopConnectionMonitor();
        //Chat.disconnect();
        Chat.log('exiting', 'stop');
 }
};

Chat.checkConnection = function () {
    Chat.log('entering', 'checkConnection');
    Chat.sendPingCheck();
    Chat.log('exiting', 'checkConnection');
};
    Chat.initialize();
};
