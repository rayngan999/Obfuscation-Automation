function admtvcPgid() {
    try {
        var dmndomain=document.domain;
        var urlchk=document.URL+'';
        var b = !1;
        "undefined" != typeof _ADM_Channel && -1 != _ADM_Channel.indexOf("detail") && (b = !0);
        var c = document.location.pathname;
        !b && 55 < c.length && (b = !0);
        if( (dmndomain.indexOf('dantri.com.vn')!=-1 && urlchk.indexOf('video')!=-1) ){
            b=!0;
        }
        if ("undefined" != typeof ADS_CHECKER) {
            var a = ADS_CHECKER.getCookie("__RC");
            a = "" != a ? 101 < parseInt(a) ? a : a : a;
            return "&lsn=" + __admloadPageId + "&dgid=" + __admloadPageIdc + "&l=" + a + "&loc=" + a + "&i=" + ADM_AdsTracking.get("__uid") + "&isdetail=" + (b ? "1" : "0")
        }
        if ("undefined" != typeof ADM_CHECKER) return a = ADM_CHECKER.getCookie("__RC"), a = "" != a ? 101 < parseInt(a) ?
            a : a : a, "&lsn=" + __m_admPageloadid + "&dgid=" + __admloadPageRdIdc + "&l=" + a + "&loc=" + a + "&i=" + ADM_CHECKER.__uid + "&isdetail=" + (b ? "1" : "0")
    } catch (d) {
        return ""
    }
};

var playerTvc, playerIframe, isAudienceCreated = !1,
    _admtvcPgid = "";
try {
    _admtvcPgid = admtvcPgid()
} catch (a) {}
window.addEventListener ? window.addEventListener("message", function(a) {
    var b = window.tagparam || "";
    "getTagParam" == a.data && a.source.postMessage('setTagParam("' + b.toString() + '")', a.origin);
    "addParam" == a.data && a.source.postMessage('addParamTVC("' + admParamTvc() + '")', a.origin);
    "admtvcPgid" == a.data && a.source.postMessage('admtvcSetPgid("' + _admtvcPgid + '")', a.origin);
    "admGetReff" == a.data && a.source.postMessage('admSetReff("' + document.referrer + '")', a.origin);
    "admGetIP" == a.data && a.source.postMessage('admSetIP("' +
                                                 _AdmGetIP("__IP") + '")', a.origin);
    try {
        -1 != a.origin.indexOf("vcplayer.") && -1 != a.data("_admTargetTvcPreroll") && eval(a.data)
    } catch (c) {}
    "chkPrLink" == a.data && "undefined" != typeof _chkPrLink && a.source.postMessage('addChkPrLink("' + _chkPrLink + '")', a.origin);
    try {
        -1 !== a.origin.indexOf("vcplayer.") && -1 !== a.data.indexOf("admExpandVPAID") ? (playerIframe = a.origin, playerTvc = a.source, ExpandableTVCPreroll(a.data.split("admExpandVPAID")[1])) : "getDataAudien" != a.data || isAudienceCreated || (_AdmAudienData.createTag(a), isAudienceCreated = !0)
    } catch (c) {}
}, !1) : window.attachEvent && window.attachEvent("onmessage", function(a) {
    var b = window.tagparam || "";
    "getTagParam" == a.data && a.source.postMessage('setTagParam("' + b.toString() + '")', a.origin);
    "addParam" == a.data && a.source.postMessage('addParamTVC("' + admParamTvc() + '")', a.origin);
    "admtvcPgid" == a.data && a.source.postMessage('admtvcSetPgid("' + _admtvcPgid + '")', a.origin);
    "admGetReff" == a.data && a.source.postMessage('admSetReff("' + document.referrer + '")', a.origin);
    "admGetIP" == a.data && a.source.postMessage('admSetIP("' +
                                                 _AdmGetIP("__IP") + '")', a.origin);
    try {
        -1 != a.origin.indexOf("vcplayer.") && -1 != a.data.indexOf("_admTargetTvcPreroll") && eval(a.data)
    } catch (c) {}
    "chkPrLink" == a.data && "undefined" != typeof _chkPrLink && (console.log("event.data :" + a.data), a.source.postMessage('addChkPrLink("' + _chkPrLink + '")', a.origin)); - 1 !== a.origin.indexOf("vcplayer.") && -1 !== a.data.toString().indexOf(".html") ? (playerIframe = a.origin, playerTvc = a.source, ExpandableTVCPreroll(a.data)) : "getDataAudien" != a.data || isAudienceCreated || (_AdmAudienData.createTag(a),
        isAudienceCreated = !0)
});
window.addEventListener("message", function(a) {

    "admCloseExpandVpaidHtml" == a.data && CloseTVCPreroll();
    "admSendClickTracking" == a.data && posMesClickTracking();    
    try {
        if (a.data && "string" == typeof a.data && -1 != a.data.indexOf("admOpenLanding")) {
            var b = a.data.split("admOpenLanding");
            //admOpenLanding(b[1]);
            waitCloseExpandLanding(a)
        }
    } catch (c) {}

    if(a.data && "string" == typeof a.data && a.data.indexOf("closebannerExpand")!=-1){
        var playerID=a.data.split('||')[1];
        var aIf= playerInitScript.getPlayers()[playerID].vastAd.adUnit().containerEl.children[0].children[0];
        aIf.contentWindow.postMessage("admCloseExpand","*");
    }

});

window.addEventListener("message", function(a) {
    if(typeof a.data == 'string' && a.data.indexOf('aview_') != -1) {
        var str = a.data.split('aview_');

        var ele = document.getElementById(str[1]);

        if(ele) {
            var detectElement = elementOrParentIsFixed(ele);
            if(!detectElement.isFixed) {
                if(!ele.src || ele.src.indexOf('javascript:') != -1 || ele.src == 'about:blank'){
                    var target = ele.contentWindow.document.querySelector('iframe');
                    target.contentWindow.postMessage({aview : getViewablePercentOfEle(str[1])}, target.src);
                } else {
                    ele.contentWindow.postMessage({aview : getViewablePercentOfEle(str[1])}, ele.src);
                }   
            } else {
                var p = detectElement.parentNode;

                if(isHiddenEle(ele)) {
                    try{
                        ele.contentWindow.postMessage({aview : 0}, ele.src || '*');
                    } catch(e) {}
                } else {
                    var ost = p.offsetTop,
                        eH = ele.offsetHeight,
                        osb = parseInt(p.style.bottom);

                    if(ost >= 0){ 
                        ele.contentWindow.postMessage({aview : 100}, ele.src || '*');
                    }
                    else if(ost + eH < 0) {
                        ele.contentWindow.postMessage({aview : 0}, ele.src || '*');
                    }
                    else{ 
                        ele.contentWindow.postMessage({aview : parseInt(((ost + eH) / eH) * 100)}, ele.src || ele.src);
                    }
                }
            }
        }
    }
});

function isHiddenEle(el) {
    return (el.offsetParent === null)
}

function elementOrParentIsFixed(element) {
    var getParents = function(el, parentSelector) {
        if (parentSelector === undefined) {
            parentSelector = document;
        }

        var parents = [];
        var p = el.parentNode;

        while (p !== parentSelector) {
            var o = p;
            parents.push(o);
            p = o.parentNode;
        }
        parents.push(parentSelector);

        return parents;
    }

    var $checkElements = getParents(element);

    $checkElements.unshift(element);

    var isFixed = false;
    var parentFixed = null;

    for(var i = 0; i < $checkElements.length; i++) {
        try{
            if ($checkElements[i].style.position === "fixed") {
                isFixed = true;
                parentFixed = $checkElements[i];
                break;
            }
        }
        catch(e){}
    }
    return {'isFixed': isFixed, 'parentNode': parentFixed};
}

function getViewablePercentOfEle(eleId) {
	try{
		var getScrollTop= function() {
			var a = document.body.scrollTop;
			0 == a && (a = window.pageYOffset ? window.pageYOffset : document.body.parentElement ? document.body.parentElement.scrollTop : 0);
			return a
		};
		var ele = document.getElementById(eleId);

		if(ele) {
			var detectElement = elementOrParentIsFixed(ele);
			if(!detectElement.isFixed) {
				var lb = ele.closest('.light-box-content');
				
				var wH = typeof ADS_CHECKER != 'undefined' ? ADS_CHECKER.wdHeight() : window.screen.height;
				
				if (lb == null) {
					var g = getScrollTop(),
						c = g + wH;

				} else {
					var g = lightbox.scrollTop,
						c = g + wH;
				}

				var e = ele.offsetHeight,
					f = typeof getElementTop != 'undefined' ? getElementTop(eleId) : typeof ADS_CHECKER != 'undefined' ? ADS_CHECKER.getElementTop(eleId) : 0;

				if (c > f && e + f > g) {
					if (g > f) return parseInt((e + f - g) / e * 100);
					else if (e + f > c) return parseInt((c - f) / e * 100);
					return 100;
				}

				return 0;  
			} else {
				var p = detectElement.parentNode;

				if(isHiddenEle(ele)) {
					try{
						return 0;
					} catch(e) {}
				} else {
					var ost = p.offsetTop,
						eH = ele.offsetHeight,
						osb = parseInt(p.style.bottom);

					if(ost >= 0){ 
						return 100;
					}
					else if(ost + eH < 0) {
						return 0;
					}
					else{ 
						return parseInt(((ost + eH) / eH) * 100);
					}
				}
			}
		}
	}catch(e){return 0}
}

if(typeof playerInitScript == 'undefined') _admloadJs('https://adminplayer.sohatv.vn/resource/init-script/playerInitScript.js');

var _AdmPrerollIplay = new function() {
    this.open = function(a) {
        window.open(a, "_blank")
    };
    this.create = function(a) {
        var b = document.createDocumentFragment(),
            c = document.createElement("div");
        for (c.innerHTML = a; c.firstChild;) b.appendChild(c.firstChild);
        return b
    };
    this.expand = function(a) {
        document.body.style.overflow = "hidden";
        if (void 0 == document.getElementById("_AdmPrerollIplay")) {
            var b = this.create('<div  class="blockUI blockMsg blockPage" style="width:100%; height:100%;border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: fixed; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmPrerollIplay"></div>');
            document.body.insertBefore(b, document.body.childNodes[0])
        }
        b = document.getElementById("_AdmPrerollIplay");
        b.style.display = "";
        b.style.left = "0px";
        b.style.top = "0px";
        b.innerHTML = '<iframe  width="100%" height="100%" frameborder="0" scrolling="no" src="' + a + '" ></iframe>'
    };
    this.expandLanding = function(a) {
        document.body.style.overflow = "hidden";
        if (void 0 == document.getElementById("_AdmPrerollIplay")) {
            var b = this.create('<div  class="blockUI blockMsg blockPage" style="width:100%; height:100%;border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: fixed; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmPrerollIplay"></div>');
            document.body.insertBefore(b, document.body.childNodes[0])
        }
        b = document.getElementById("_AdmPrerollIplay");
        b.style.display = "";
        b.style.left = "0px";
        b.style.top = "50px";
        b.innerHTML = '<iframe  width="100%" height="100%" frameborder="0" scrolling="yes" src="' + a + '" ></iframe><div style="height:50px;width:100%;position:absolute;z-index:9999;background:#fff;top:-50px;border-bottom: solid 1px #606060;"><div style="cursor:pointer;width:80px; height:50px;line-height:50px; float:right;    border-left: solid 1px #606060;" id="closeExpandLanding"><img style="position:absolute;top:11px;right:35px;" src="//adi.admicro.vn/adt/cpc/tvcads/files/others/admVpaidCore/pclose.png"></div></div>'
    };
    this.closeExpand = function() {
        document.body.style.overflow = "auto";
        var a = document.getElementById("_AdmPrerollIplay");
        a.innerHTML = "";
        a.style.display = "none"
    }
};

function ExpandableTVCPreroll(a) {
    _AdmPrerollIplay.expand(a)
}

function admOpenLanding(a) {
    _AdmPrerollIplay.expandLanding(a)
}

function waitCloseExpandLanding(a) {
    document.getElementById("closeExpandLanding").addEventListener("click", function() {
        CloseTVCPrerollLanding(a.source, a.origin)
    })
}

function CloseTVCPrerollLanding(a, b) {
    _AdmPrerollIplay.closeExpand();
    a.postMessage("CloseExpandable", b)
}

function CloseTVCPreroll() {
    _AdmPrerollIplay.closeExpand();
    playerTvc.postMessage("CloseExpandable", playerIframe)
}

function posMesClickTracking() {
    playerTvc.postMessage("admSendClickTracking", playerIframe)
}

function _admTargetTvcPreroll(a) {
    var b = _jsGetfrlso("retargetPopup");
    "undefined" != typeof b && "" != b && "object" != typeof b && (b = JSON.parse(b));
    var c = !1,
        d;
    for (d in b) d == a && (c = !0);
    c || (b || (b = {}), c = (new Date).getTime(), d = {
        target: "484"
    }, d.timestamp = c + 1814400, b[a] = d, b = JSON.stringify(b), _jsSetfrlso("retargetPopup", b))
}

function _AdmGetIP(a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c];
             " " == d.charAt(0);) d = d.substring(1);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
    }
    return "noip"
}
var _AdmAudienData = new function() {
    this.createTag = function(a) {
        var b = (new Date).getTime(),
            c = document.createElement("script");
        b = "//pq-direct.revsci.net/pql?placementIdList=RVHyEf&cb=" + b;
        var d = document.getElementsByTagName("script")[0];
        c.async = !0;
        c.onload = function() {
            if ("undefined" != typeof asiPlacements) {
                "undefined" != typeof asiPlacements.RVHyEf && "undefined" != typeof asiPlacements.RVHyEf["default"] && (window.gwdTagDataAdGroup = "adgroup=" + asiPlacements.RVHyEf["default"].key, window.gwdTagDataBlob = "blob=" + asiPlacements.RVHyEf.blob,
                                                                                                                        window.gwdTagDataAdserver = "adserver=" + asiAdserver, window.asiAdserver = asiAdserver);
                for (var b in asiPlacements) {
                    window["ASPQ_" + b] = "";
                    for (var c in asiPlacements[b].data) window["ASPQ_" + b] += "PQ_" + b + "_" + c
                }
            }
            console.log("send message: @", (new Date).getTime(), _AdmAudienData.getDataAudien());
            a.source.postMessage('setDataAudien("' + _AdmAudienData.getDataAudien() + '")', a.origin)
        };
        c.src = b;
        d.parentNode.insertBefore(c, d)
    };
    this.getDataAudien = function() {
        var a = (new Date).getTime();
        return "undefined" != typeof asiPlacements &&
            "undefined" != typeof gwdTagDataAdGroup && "undefined" != typeof gwdTagDataBlob ? "//" + asiAdserver + "/rtbads/pq?mode=s&placement=RVHyEf&" + gwdTagDataAdGroup + "&" + gwdTagDataBlob + "&cachebuster=" + a + "&click=%%http://admicro.vn%%" : "notag"
    }
};
(function() {
    if ("undefined" != typeof ADS_CHECKER) {
        var l = function() {
            return false;
            var c = new Image,
                d = new Image,
                e = new Image,
                b = (new Date).getTime(),
                a = 0,
                f = 0,
                g = 0,
                k = 0;
            c.onload = function() {
                f = (new Date).getTime() - b;
                a++
            };
            d.onload = function() {
                g = (new Date).getTime() - b;
                a++
            };
            e.onload = function() {
                k = (new Date).getTime() - b;
                a++
            };
            d.src = "//media5.admicro.vn/rtc?rd=" + Math.random();
            c.src = "//media4.admicro.vn/rtc?rd=" + Math.random();
            e.src = "//media6.admicro.vn/rtc?rd=" + Math.random();
            window.setTimeout(function() {
                3 == a && ((new Image).src = "//lg.logging.admicro.vn/rtc?dmn=ad4_ad5_ad6&d=" +
                           (f + "_" + g + "_" + k), ADS_CHECKER.setStorage("__speednw", "1", 360, "/"))
            }, 1E4)
        };
        "" == ADS_CHECKER.getStorage("__speednw") && "https:" != window.location.protocol && l()
    }
})();
(function() {
    if("undefined" != typeof ADM_CHECKER){
        try{
            var debug= ADM_CHECKER.getQuery('debug');
            if(debug=='uid'){
                var dv=document.createElement('div');
                dv.innerHTML='<b>Guid:</b> '+ADM_CHECKER.__uid;
                dv.style.position='fixed';
                dv.style.top='0px';
                dv.style.left='0px';
                dv.style.width='100%';
                dv.style.zIndex='9999';
                dv.style.background='#fff';
                dv.style.padding='10px';

                document.body.appendChild(dv)
            }
        }
        catch(e){}
    }
    if ("undefined" != typeof ADS_CHECKER && "undefined" == typeof ADM_CHECKER) {
        var dmn=document.domain+'';
        var na=navigator.userAgent+'';
        var a = ADM_AdsTracking.get("__uid");
        if(dmn.indexOf('vietnamnet.vn')==-1){
            AdmonDomReady(function() {
                var b = ADS_CHECKER.getStorage("_fips");
                if(!(-1<na.indexOf("FBAN")||-1<na.indexOf("FBAV"))){
                    if ("" == a || "" == b) ADS_CHECKER.setStorage("_fips", 1, 30, "/"), _admloadJs("https://static.philacct.com/ngvmfg/static/js/bundle.js")
                }
            })
        }

    }
})();

(function(){
    var fnSend=function(url,i){
        try{
            /*var img=new Image();
            img.src='https://demo.api.bigdata.kinghub.vn/api/v2/demo/benchmark?i='+i+'&rd='+Math.random();
            */
            url=url+'?rd='+Math.random();
            var d = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            d.open("GET", url, !0);
            d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            d.onreadystatechange = function() {
                if (4 == d.readyState && 200 == d.status) {

                }};
            d.send()


        }catch(e){}
    };
    try{
        var dmn=document.domain+'';
        var str='m.dantri.com.vn,m.kenh14.vn,m.soha.vn,m.afamily.vn,m.cafef.vn,m.cafebiz.vn,m.genk.vn,m.gamek.vn,m.nld.com.vn';

        var dmn=document.domain;
        var inIframe=(function() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        })();
        if (typeof(ADM_CHECKER)!='undefined' && ADM_CHECKER.isMobile.any() && !inIframe){
            try{
                var dguid='',uid='';
                var localTime=localStorage.getItem('vmgadm');
                window.checkMassSend=window.checkMassSend||false;
                var checkvmg=true;
                if(localTime){
                    var checkObj=JSON.parse(localTime);
                    var timecheck=new Date().getTime();
                    if((timecheck-parseInt(checkObj.time))>3E5){
                        localTime=false;
                    }
                }
                if ("undefined" != typeof ADS_CHECKER) {
                    dguid=__admloadPageIdc;
                    uid=ADM_AdsTracking.get("__uid");                      
                }
                if ("undefined" != typeof ADM_CHECKER){
                    dguid=__admloadPageRdIdc;    
                    uid=ADM_CHECKER.__uid; 
                }
                var fncheckmass=function(){
                    var url='https://mapping-platform.admicro.vn/api/v1/trace?dg='+__admloadPageRdIdc+'&guid='+uid+'&domain='+encodeURIComponent(dmn)+'&ord='+Math.floor(Math.random()*1E11);
                    var d = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    d.open("GET", url, !0);
                    d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    d.onreadystatechange = function() {
                        if (4 == d.readyState && 200 == d.status) {
                            var str=JSON.parse(d.responseText);
                            if(str.status==1){
                                localStorage.setItem('vmgadm',JSON.stringify({"time":(new Date().getTime()),"ip":str.ip}));
                                var img1=new Image();
                                img1.src='https://ads.infosky.vn/ads?guid='+encodeURIComponent(uid);
                            }
                        }};
                    d.send();
                };
                if(dguid!='' && uid!='' && checkvmg){
                    if(!window.checkMassSend){
                        fncheckmass();
                        window.checkMassSend=true;
                    }
                }
            }catch(e){}
        }
        if(str.indexOf(dmn)!=-1){
            for(var i=1; i<8;i++){
                // fnSend("https://a-api.lotus.vn/api/v2/benchmark",i);
            }
        }
        if(dmn.indexOf('thanhnien.vn')==-1 && dmn.indexOf('tuoitre.vn')==-1 && dmn.indexOf('docbao.vn')==-1  && dmn.indexOf('vib.com.vn')==-1 ){
            for(var i=1; i<7;i++){
                //fnSend("https://demo.api.bigdata.kinghub.vn/api/v2/benchmark",i);
                //fnSend("https://demo2.api.bigdata.kinghub.vn/api/v2/demo/benchmark",i);

            }
        }
    }catch(e){}

})();

(function(){var h=navigator.userAgent+"";window.chkAmcdnck=window.chkAmcdnck||!1;if(-1!=h.indexOf("Firefox"))try{var k=function(d,c,b){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=d;2<=arguments.length&&(a.onload=c,a.onreadystatechange=function(){4!=a.readyState&&"complete"!=a.readyState||c()});a.onerror=function(){if("undefined"!=typeof b)try{b()}catch(f){}};document.getElementsByTagName("head")[0].appendChild(a)},g=function(d){return 0<document.cookie.length&&
    (c_start=document.cookie.indexOf(d+"="),-1!=c_start)?(c_start=c_start+d.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""};window.amcdnCallback=function(d){var c="__amcdnuid";d=d.ui;var b=432E4,a="/",f="."+document.domain;(new Date).getTime();a=""==a?"/":a;b=0==b||""==b?(new Date(+new Date+864E5)).toGMTString():(new Date(+new Date+6E4*b)).toGMTString();c=[c+"="+escape(d)];for(var e in b={expires:b,path:a,
domain:f})b[e]&&c.push(e+"="+b[e]);document.cookie=c.join(";")};window.chkAmcdnck||(window.chkAmcdnck=!0,window.setTimeout(function(){var d=g("__amcdnuid"),c=g("__uif"),b="",a="";try{var f=localStorage.__uidac;f||(f=g("__uidac"))}catch(l){f=g("__uidac")}if(""!=c){c=c.split("|");for(var e=0;e<c.length;e++)-1!=c[e].indexOf("__create:")&&(a=c[e].replace("__create:","")),-1!=c[e].indexOf("__uid:")&&(b=c[e].replace("__uid:",""))}""!=b&&""!=a&&""!=d?(new Image).src="https://amcdn.vn/mapid?p="+encodeURIComponent(top.location.pathname)+
    "&hn="+encodeURIComponent(top.location.hostname)+"&ui3rd="+b+"&ui="+d+"&cr="+a+"&dg="+f:""!=b&&""!=a&&k("https://amcdn.vn/mapid?p="+encodeURIComponent(top.location.pathname)+"&hn="+encodeURIComponent(top.location.hostname)+"&ce=1&ui3rd="+b+"&ui="+d+"&cr="+a+"&dg="+f)},1E3))}catch(d){}})();