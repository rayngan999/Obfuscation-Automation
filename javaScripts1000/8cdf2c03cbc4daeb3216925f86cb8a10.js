var tpTemplateRegistoLogin = "OTKISDKGZP3N";
var tpTemplateLoginAssinar = "OTNPSHUPOXO4";
var tpTemplateMainOffer = "OTTQ0S9SJQ4B";
var tpTemplateNonioContentGating = "OT7NQ645I5XF";
var tpTemplateRegistoLoginePaper = "OTJF8BNZB5QF";
var tpGigyaScreenset = "gmg.1.prod_jn.v3-RegistrationLogin";
var aid = "kOpSPTUZaR" ;
var rid = "RA0OP5Q";
var tpSite = 'JN';
var tpIsSubscriber = tpSite + '.tp.IsSubscriber';
var tpCustomPageUrl = tpSite + '.tp.CustomPageUrl';
var claviUserInfo = tpSite + '.clavi.UserInfo';
var tpPagComercial = '/jnpremium.html';
var tpMyAccount = '/my-account';
var mainDomain = 'www.jn.pt';
var wlst=["google\.com","google\.pt","bing\.com","ask\.com","baidu\.com","yahoo\.com","facebook\.com","fb\.com","t\.co","lnkd\.in","twitter\.com","linkedin\.com","plus\.google\.com","instagram\.com","reddit\.com"];

/*! simpleStorage v0.2.1, Unlicense 2016. https://github.com/andris9/simpleStorage */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):"undefined"!=typeof exports?module.exports=b():a.simpleStorage=b()}(this,function(){"use strict";function a(){p=j(),d(),g(),b(),"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&c()},!1),p=!0}function b(){"addEventListener"in window?window.addEventListener("storage",c,!1):document.attachEvent("onstorage",c)}function c(){try{d()}catch(a){return void(p=!1)}g()}function d(){var a=localStorage.getItem("simpleStorage");try{n=JSON.parse(a)||{}}catch(b){n={}}o=f()}function e(){try{localStorage.setItem("simpleStorage",JSON.stringify(n)),o=f()}catch(a){return k(a)}return!0}function f(){var a=localStorage.getItem("simpleStorage");return a?String(a).length:0}function g(){var a,b,c,d,f,h=1/0,j=0;if(clearTimeout(q),n&&n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL){for(a=+new Date,f=n.__simpleStorage_meta.TTL.keys||[],d=n.__simpleStorage_meta.TTL.expire||{},b=0,c=f.length;c>b;b++){if(!(d[f[b]]<=a)){d[f[b]]<h&&(h=d[f[b]]);break}j++,delete n[f[b]],delete d[f[b]]}h!==1/0&&(q=setTimeout(g,Math.min(h-a,2147483647))),j&&(f.splice(0,j),i(),e())}}function h(a,b){var c,d,e=+new Date,f=!1;if(b=Number(b)||0,0!==b){if(!n.hasOwnProperty(a))return!1;if(n.__simpleStorage_meta||(n.__simpleStorage_meta={}),n.__simpleStorage_meta.TTL||(n.__simpleStorage_meta.TTL={expire:{},keys:[]}),n.__simpleStorage_meta.TTL.expire[a]=e+b,n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))for(c=0,d=n.__simpleStorage_meta.TTL.keys.length;d>c;c++)n.__simpleStorage_meta.TTL.keys[c]===a&&n.__simpleStorage_meta.TTL.keys.splice(c);for(c=0,d=n.__simpleStorage_meta.TTL.keys.length;d>c;c++)if(n.__simpleStorage_meta.TTL.expire[n.__simpleStorage_meta.TTL.keys[c]]>e+b){n.__simpleStorage_meta.TTL.keys.splice(c,0,a),f=!0;break}f||n.__simpleStorage_meta.TTL.keys.push(a)}else if(n&&n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL){if(n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))for(delete n.__simpleStorage_meta.TTL.expire[a],c=0,d=n.__simpleStorage_meta.TTL.keys.length;d>c;c++)if(n.__simpleStorage_meta.TTL.keys[c]===a){n.__simpleStorage_meta.TTL.keys.splice(c,1);break}i()}return clearTimeout(q),n&&n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL&&n.__simpleStorage_meta.TTL.keys.length&&(q=setTimeout(g,Math.min(Math.max(n.__simpleStorage_meta.TTL.expire[n.__simpleStorage_meta.TTL.keys[0]]-e,0),2147483647))),!0}function i(){var a,b=!1,c=!1;if(!n||!n.__simpleStorage_meta)return b;n.__simpleStorage_meta.TTL&&!n.__simpleStorage_meta.TTL.keys.length&&(delete n.__simpleStorage_meta.TTL,b=!0);for(a in n.__simpleStorage_meta)if(n.__simpleStorage_meta.hasOwnProperty(a)){c=!0;break}return c||(delete n.__simpleStorage_meta,b=!0),b}function j(){var a,b=0;if(null===window.localStorage||"unknown"==typeof window.localStorage)throw a=new Error("localStorage is disabled"),a.code=t,a;if(!window.localStorage)throw a=new Error("localStorage not supported"),a.code=s,a;try{b=window.localStorage.length}catch(c){throw k(c)}try{window.localStorage.setItem("__simpleStorageInitTest",Date.now().toString(16)),window.localStorage.removeItem("__simpleStorageInitTest")}catch(c){throw b?k(c):(a=new Error("localStorage is disabled"),a.code=t,a)}return!0}function k(a){var b;return 22===a.code||1014===a.code||[-2147024882,-2146828281,-21474675259].indexOf(a.number)>0?(b=new Error("localStorage quota exceeded"),b.code=u,b):18===a.code||1e3===a.code?(b=new Error("localStorage is disabled"),b.code=t,b):"TypeError"===a.name?(b=new Error("localStorage is disabled"),b.code=t,b):a}function l(a){if(!a)return r="OK",a;switch(a.code){case s:case t:case u:r=a.code;break;default:r=a.code||a.number||a.message||a.name}return a}var m="0.2.1",n=!1,o=0,p=!1,q=null,r="OK",s="LS_NOT_AVAILABLE",t="LS_DISABLED",u="LS_QUOTA_EXCEEDED";try{a()}catch(v){l(v)}return{version:m,status:r,canUse:function(){return"OK"===r&&!!p},set:function(a,b,c){if("__simpleStorage_meta"===a)return!1;if(!n)return!1;if("undefined"==typeof b)return this.deleteKey(a);c=c||{};try{b=JSON.parse(JSON.stringify(b))}catch(d){return k(d)}return n[a]=b,h(a,c.TTL||0),e()},hasKey:function(a){return n&&n.hasOwnProperty(a)&&"__simpleStorage_meta"!==a?!0:!1},get:function(a){return n?n.hasOwnProperty(a)&&"__simpleStorage_meta"!==a&&this.getTTL(a)?n[a]:void 0:!1},deleteKey:function(a){return n&&a in n?(delete n[a],h(a,0),e()):!1},setTTL:function(a,b){return n?(h(a,b),e()):!1},getTTL:function(a){var b;return n&&n.hasOwnProperty(a)?n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL&&n.__simpleStorage_meta.TTL.expire&&n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a)?(b=Math.max(n.__simpleStorage_meta.TTL.expire[a]-+new Date||0,0),b||!1):1/0:!1},flush:function(){if(!n)return!1;n={};try{return localStorage.removeItem("simpleStorage"),!0}catch(a){return k(a)}},index:function(){if(!n)return!1;var a,b=[];for(a in n)n.hasOwnProperty(a)&&"__simpleStorage_meta"!==a&&b.push(a);return b},storageSize:function(){return o}}});

!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});

function cgDataLayerPush(evtString, evtName) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'eventType': evtString,               
        'event': evtName
    });
}

function dlp(e,v) {
	window.self !== window.top ? window.parent.dataLayerPush(e,v) : dataLayerPush(e,v);
}

function clearTpLocalStorage() {
    simpleStorage.deleteKey(tpIsSubscriber);
    simpleStorage.deleteKey(claviUserInfo);
    return;
    Object.keys(localStorage)
        .forEach(function(key) {
            if (/^(JN.tp.)/.test(key)) {
                localStorage.removeItem(key);
            }
        });
}

/*function tpGigyaShowRegister(p,j) {
	  var ctx = { "template": p, "jsonparams": j }; 
    gigya.accounts.showScreenSet({
        screenSet: tpGigyaScreenset,
        startScreen: "gigya-register-screen",
        lang: 'pt',
        context: ctx,
        enabledProviders: 'facebook,googleplus',
        onHide: function(params) {
            if (params !== undefined) {
                tp = window.tp || [];
                switch (params.reason) {
                    case "finished":
                        if (gy.account.isLoggedIn()) {
                            if (!window.location.pathname.includes(tpPagComercial)) {
                                window.location.reload();
                                //tp.experience.execute();
                                return false;
                            }
                        } else {
                            //Show template info validar conta
                        }
                        break;
                    case "canceled":
                        //tp.offer.close();
                        var ctx = params.context;
                        var of = ctx.jsonparams;
                        if (!gy.account.isLoggedIn()) {
                            tp.push(["init", function() {
                            	if (of.offerId !== 'fakeOfferId') {
                                tp.offer.show({
                                    templateId: ctx.template,
                                    offerId: ctx.jsonparams.offerId,
                                    displayMode: "modal"
                                });
                            	} else {
                                tp.template.show({
                                    templateId: ctx.template,
                                    displayMode: "modal"
                                });
                            	}
                                ctx.template==tpTemplateNonioContentGating&&$("button.tp-close.tp-active").removeClass("tp-active")&&cgDataLayerPush("Login_Popup_Close","Nonio_ContentGating");
                            }]);

                            //} else {
                            //   tp.experience.execute();
                            //if (!window.location.pathname.includes(tpPagComercial)) {
                            //   tp.reload();
                            //}
                        }
                        break;
                    default:
                }
            }
        }
    });
}*/

/*if (typeof window.dataLayerPush === 'undefined') {
    window.dataLayerPush = function(evtString) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'Author': 'AAAAAAAA',
            'topico': 'BBBBBBBB',
            'userId': gy.account.isLoggedIn() ? gy.account.get('UID') : undefined,
            'Logged': evtString,
            'event': evtString
        });

    }
}*/

/*function checkRidAccess() {
    tp = window.tp || [];
    tp.push(["init", function() {
        var params = {
            aid: aid,
            rid: rid
        };

        console.log('>>> ' + (new Date().toJSON()) + ' <<<');
        var cbCheckAccess = function(response) {
            var evtString = gy.account.isLoggedIn().toString();
            if (response.access && response.access.granted) {
                evtString = 'subscriber';
            }
            simpleStorage.set(tpIsSubscriber, evtString, {
                TTL: 1800000
            });
            //localStorage[tpIsSubscriber] = evtString;
            dataLayerPush(evtString, 'fireGA');
        }
        tp.api.callApi("/access/check", params, cbCheckAccess);
    }]);
}
*/

function gigyaOnLoadClavi() {
    gigya.accounts.addEventHandlers({ onLogin: gigyaEventHandlerClavi, onLogout: gigyaEventHandlerClavi })
}

function gigyaEventHandlerClavi(eventObj) {
    switch (eventObj.eventName) {
        case "login":
            setSegmentation('login');
            break;

        case "logout":
            setSegmentation('logout');
            break;
        default:

    }
}

function checkAidAccess() {
    claviSrv.getUserToken().then(
        function(claviToken) {
            claviSrv.proxyCall('resources/users/access/subscription', {
                    "uid": gy.account.account.UID,
                    "aid": aid,
                    "token": claviToken
                }, 'post')
                .then(function(callResponse) {
                    var evtString = gy.account.isLoggedIn().toString();
                    if (typeof callResponse != 'undefined') {
                        if (callResponse.data) {
                            evtString = 'subscriber';
                        }
                    }
                    simpleStorage.set(tpIsSubscriber, evtString, {
                        TTL: 3600000
                    });
                    //localStorage[tpIsSubscriber] = evtString;
                    dlp(evtString, 'fireGA');
                })
                .catch(function(err) {
                    console.log(err);
                });
        })
}

function checkAidAccessReadMoreBtn() {
    claviSrv.getUserToken().then(
            function(claviToken) {
                claviSrv.proxyCall('resources/users/access/subscription', {
                        "uid": gy.account.account.UID,
                        "aid": aid,
                        "token": claviToken
                    }, 'post')
                    .then(function(callResponse) {
                        if (typeof callResponse != 'undefined') {
                            if (callResponse.data) {
                                //subscriber
                                setReadmoreBtn();
                            }
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            })
        .catch(function(err) {
            console.log(err);
        });
}

function setReadmoreBtn() {
    if (jQuery('.t-article-content').attr('ngx-premium') == 'true') {
        //trata de colocar a informação correta no botão de acordo com a informação de logado/assinante
        var divContent = jQuery('.t-paywall-header-content');
        var spanInfo = jQuery('.t-paywall-action-info-1');
        var btn = jQuery('.t-paywall-action-btn-1');
        if (gy.account.isLoggedIn()) {
            divContent.hide();
            spanInfo.hide();
            btn.html('Continue a ler aqui');
        } else {
            divContent.show();
            spanInfo.show();
            btn.html('Assine j&aacute;!');
        }
    }
}

function setSegmentation(evt) {
    switch (evt) {
        case 'login':
            clearTpLocalStorage();
            checkAidAccess();
            break;

        case 'logout':
            clearTpLocalStorage();
            dlp(false, 'fireGA');
            break;

        case 'window.onload':
            var isSubscriber = simpleStorage.get(tpIsSubscriber);
            var userInfo = simpleStorage.get(claviUserInfo);

            if (gy.account.isLoggedIn()) {
	            if (typeof userInfo == 'undefined') {
	                gigya.socialize.getUserInfo({
	                    callback: function printResponse(response) {
	                        if (response.errorCode == 0) {
	                            var user = response['user'];
	                            var name = user['firstName'] + ' ' + user['lastName'];
	                            var gender = user['gender'];
	                            var jsonText = '{"name":"' + name + '","gender":"' + gender+ '","photoURL":"';
	                            var photoUrl = '';
	                            $("#gigyaName").html(name);
	                            $("#gigyaName").attr('title', name);
	                            if (user['photoURL'] && user['photoURL'].length > 10) {
	                                photoUrl = user['photoURL'];
	                            } else {
	                                if (gender === 'f') {
	                                    photoUrl = 'https://static.globalnoticias.pt/ve/common/images/user-default_f.png';
	                                } else {
	                                    photoUrl = 'https://static.globalnoticias.pt/ve/common/images/user-default_m.png';
	                                }
	                            }
	                            $("#gigyaPhotoURL").attr('src', photoUrl);
	                            jsonText += photoUrl + '"}';
	                            simpleStorage.set(claviUserInfo, jsonText, { TTL : 86400000 }); //1d
	                        }
	                    }
	                });
	            } else {
	                var jsonTextObj = JSON.parse(simpleStorage.get(claviUserInfo));
	                var name = jsonTextObj.name;
	                $("#gigyaName").html(name);
	                $("#gigyaName").attr('title', name);
	                $("#gigyaPhotoURL").attr('src', jsonTextObj.photoURL);
	            }
	          } else {
	          	setReadmoreBtn();
	          }

            if (typeof isSubscriber == 'undefined') {
                if (!gy.account.isLoggedIn()) {
                    simpleStorage.set(tpIsSubscriber, gy.account.isLoggedIn().toString(), { TTL: 3600000 });
                    dlp(simpleStorage.get(tpIsSubscriber), 'fireGA');
                } else {
                    //loggedIn & refresh status
                    checkAidAccess();
                }
            } else if (gy.account.isLoggedIn() && isSubscriber == 'false'){
            	checkAidAccess();
            } else {
                dlp(simpleStorage.get(tpIsSubscriber), 'fireGA');
            }
            break;
        default:
    }
}

window.onload = function() {
    gigyaOnLoadClavi();
    setSegmentation('window.onload');
    if (window.location.pathname.includes(tpPagComercial) || window.location.pathname.includes(tpMyAccount)) {
    	var tpUrl = simpleStorage.get(tpCustomPageUrl) || window.location.href;
    	//tp.push(["setPageURL", tpUrl]);
		} else {
			//tp.push(["setPageURL", window.location.href]);
			simpleStorage.set(tpCustomPageUrl, window.location.href, {});
		}
};
/*
tp.push(["addHandler", "customEvent", function(e, t, n, o) {
    switch (e.eventName) {
        case "tpGigyaShowRegister":
            var t,p;
            p = JSON.parse(e.params.params.valueOf());
            switch (e.params.template) {
            		case "NonioContentGating":
            				t = tpTemplateNonioContentGating;
            				break;
                case "TemplateLoginAssinar":
                    t = tpTemplateLoginAssinar;
                    break;
                case "TemplateRegistoLogin":
                    t = tpTemplateRegistoLogin;
                    break;
                case "TemplateRegistoLoginePaper":
                    t = tpTemplateRegistoLoginePaper;
                    break;
                default:
            }
            gy.account.isLoggedIn() || (tp.offer.close(), tpGigyaShowRegister(t,p));
            break;
        case "tpShowTemplateRegistoLogin":
            //var term = '';
            var params;
            var iframeId;

            params = JSON.parse(e.params.params);
            iframeId = params.iframeId;
            //term = e.params.term;

            //console.log(' >> ' + JSON.stringify(params));
            //console.log("term: " + term + ' >> ' + JSON.stringify(params));

            pianoSetCustomVariableCookie('termClick_ShowTemplateRegistoLogin', params);

            tp.offer.close();
            tp.push(["init", function() {
                tp.template.show({
                    templateId: tpTemplateRegistoLogin,
                    displayMode: "modal"
                })
            }]);
            break;
        case "tpSetCookie":
        	params = e.params;
        	stCookie(params.name,params.value,params.expiredays,params.action);
        	break;
            
        case "tpRemoveCookie":
        	params = e.params;
        	rmCookie(params.name);
            break;
        case "tpRemoveElement":
        		if(typeof $(e.params.name) !== 'undefined'){
        		$(e.params.value).remove();
        	}
        		break;
        case "tpShowOfferTemplateMainOffer":
            tp.offer.close();
        		var _tpTemplateVariantId = typeof e.params.tptemplatevariantid == 'undefined' ? '' : e.params.tptemplatevariantid;
            tp.push(["init", function() {
                tp.offer.show({
                    templateId: tpTemplateMainOffer,
                    templateVariantId: _tpTemplateVariantId,
                    displayMode: "modal",
                    offerId: e.params.tpofferid,
                    //termIds: [],
                    loginRequired: function() {
                        tpGigyaShowRegister(tpTemplateLoginAssinar);
                    } //,
                    //close: function() {},
                    //complete: function(e) {},
                    //customEvent: function(e) {}
                })
            }])
    }
}]);
*/

function stCookie(n,v,e,a)
{
	//Cookies.set('_pc_' + params.name, params.value, { expires: parseInt(params.expiredays), domain: 'qua2018.dn.pt' });
	Cookies.set('_pc_' + n, v, { expires: parseInt(e), domain: mainDomain, SameSite: 'none', Secure: true });
	if (typeof a !== 'undefined')
	{
		//Ações
		switch (a)
		{
			case "login":
				if(!gy.account.isLoggedIn()) tp.gigya.login();
			break;
		}
	}
}

function rmCookie(n)
{
	Cookies.set('_pc_' + n, '', { expires: -1, domain: mainDomain });	
}

function tpPubOnFooter()
{
	//tp = window.tp || [];
	//tp.push(["setCustomVariable", "tpPubOnFooter","true"]);
}

function showScreenSet(){gy.account.isLoggedIn()||gigyaOnLogoutUserChange()}

function __cg() {
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent);
    var is_appV = navigator.userAgent.indexOf('App v') != -1;

    //if (!is_safari && !is_uiwebview && !is_appV) {
    //if (!is_uiwebview && !is_appV) {
    if (!is_appV) {
        $("body").css({
            overflow: "hidden"
        });
        var t = document.createElement("iframe");
        t.setAttribute("src", "/content-gating2.html?v=11&url=" + encodeURIComponent(window.location.href)), t.setAttribute("style", "border: none;display: flex;justify-content: center;align-items: center;position: fixed;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0,0,0,0.6); z-index: 30000000;"), document.body.appendChild(t);
        setTimeout(function() {
            $('article').remove();
        }, 1000);
        cgDataLayerPush('Login_Popup_Push', 'Nonio_ContentGating');
    }
}

function _cg() {
    console.log('--cg--');
    $.getJSON('https://api.ipify.org?format=json').then(function(data1) {
        return $.getJSON("https://" + mainDomain + "/toll/api/GeoIP?ipAddress=" + data1.ip, data1);
    }).then(function(res) {
        if (typeof res == 'undefined' || res.Status.ErrorCode!= "0000" || res.Status.ErrorCode == "0000" && res.IsoCode == 'PT') {
            for (var i = wlst.length - 1; i >= 0; i--) {
                if (document.referrer.match(new RegExp('^https?:\/\/([^\/]+\.)?' + wlst[i] + '(\/|$)','i'))) {
                    //match = true;
                    //break;
                    return true;
                }
            }
            //return true;
        }
        return false;
    }).then(function(match) {
        if (!match) {
            var d = $("meta[property='ngx:content-id']").attr('content');
            var c = Cookies.getJSON('_ncg');
            if (typeof c == 'undefined') {
                Cookies.set('_ncg', {
                    d: new Date().toISOString(),
                    l: [d]
                }, { expires: 2, SameSite: 'strict', Secure: true });
            } else {
                //if (new Date().toISOString().substr(0, 10) != c.d) {
                if (Math.floor(Math.abs(new Date().getTime() - Date.parse(c.d))/1000/3600)>48) {
                    Cookies.set('_ncg', {
                        d: new Date().toISOString(),
                        l: [d]
                    }, { expires: 2, SameSite: 'strict', Secure: true });
                } else {
                    if (c.l.length < 1) {
                        if (!c.l.includes(d)) {
                            var na = c.l;
                            na.push(d);
                            Cookies.set('_ncg', {
                                d: c.d,
                                l: na
                            }, { expires: 2, SameSite: 'strict', Secure: true });
                        }
                    } else {
                        if (!c.l.includes(d)) {
                            __cg();
                        }
                    }
                }
                //document.body.style.overflow = "hidden"; // nos WP 
            }
        }
        return true;
    }).done(
        function(con) {}
    );
    //$.getJSON("http://wsdev.cnx.cim.loc/geo/api/GeoIP?ipAddress=" + data.ip, function(resultado) {
}

function cg() {
	$(document).ready(function () {
	    //console.log('-- alternativo --');
	    gigya.accounts.getAccountInfo({ callback: getAccountInfoResp });
	
	    function getAccountInfoResp(account) {
	        if ( account && account.errorCode !== 0 && !account.UID ) {
	            var s = !0;
	            if (!ngxPageCtx.isLocked) _cg();
	            //tp = window.tp || [];
	            //if (tp && tp.customVariables && tp.customVariables.tpTipoConteudo && tp.customVariables.tpTipoConteudo == "tpConteudoFechado") s = !1;
	            //if (s) _cg();
	        }
	    }
	});	
}
//