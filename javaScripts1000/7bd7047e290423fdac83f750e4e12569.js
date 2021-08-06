// Copyright 2006-2021 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "WR119.js", "pcc": "c08d3614-4c2f-4b0d-b983-40bd407e56a4.js?DeploymentConfigName=Release_20210727&Version=1"};
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["HaosLaHhJVT","HaosLaHhNHwhJVT","iHuHuHyLwBisPJhJVT","iHuHuHyLwBisPJhNHwhJVT","iHuHuHyLwBisPJhNHwJHuHkHhJH","iHuHuHyLwBisPJmHJaVyFhNHwmHJaVyFhJVT","NHwhJVhqw","NHwhJVT","NHwJHuHkHhJH","NHwmHJaVyFhJVT","oPssJPaFhNHwhJVT ","VskuHcFhJVT","VskuHcFhNHwhJVT","VskuHcFhNHwJHuHkHhJH","VwPuPVusHihJVT","ZLJByLAHaosLaHhNHwhJVT","ZLJByLAiHuHuHyLwBisPJhNHwhJVT","ZLJByLAiHuHuHyLwBisPJhNHwJHuHkHhJH","ZLJByLAJLssHAiHuHuHyLwBisPJhNHwJHuHkHhJH","ZLJByLAVskuHcFhNHwhJVT","ZLJByLAVskuHcFhNHwJHuHkHhJH","ZLJByLADDDhNHwJHuHkHhJH"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
	WR: "ing-district.clicktale.net/ctn_v2/",
	ImageFlag: "ing-district.clicktale.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
	Method: "ImpactRecorder"
}
ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var r in T){var e=T[r];e.collect(t)&&e.errors.push({message:n,url:t,lineno:o})}return!!S&&S(n,t,o)}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function r(n){++n.sampled>n.repeats?g(n.name):e(n)}function e(n){var t=n.reporter()||{},o=n.errors.splice(0),r=n.level,e=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":r,errors:encodeURIComponent(JSON.stringify(o))};e&&r!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(e+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+I[o]+"="+t[o];return n}function a(n,o,r){var e=L.sendBeacon,i=function(n){n.errors=r.concat(n.errors)};if(t(e))e.call(L,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function f(n){T[n]&&(T[n].starting=!0)}function s(n,o,r){var e=window.ClickTaleMonitor;e&&(I.monitorState=40,I.isMonitoring=42,t(e.getPid)&&v(M,e.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(e.getState)&&e.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(e.isMonitoring)&&e.isMonitoring()}},o||5e3,r||1))}function m(){g(M)}function v(t,o,r,e,i,a,l){T[t]=T[t]||new p(t,o,r,e,i,a,l),y||(S=window.onerror,window.onerror=n,y=!0)}function g(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;y=!1}function p(n,t,o,e,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(e)},c.sampler=setInterval(function(){r(c)},a)}function h(n,t,o){var r=n&&n.name,e=T[r];if(e){var i=e[t];"function"==typeof i&&i.apply(this,o)}}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){f(n)}}}var y,S,T={},L=navigator,k="info",M="monitor",I={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(M,s,m),invoke:h}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2021 ClickTale Ltd., US Patent Pending
// PID: 17
// WR destination: www29
// WR version: 17.9
// Recording ratio: 1

(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();



	ClickTaleSettings.Integration = ClickTaleSettings.Integration || {};
	ClickTaleSettings.Integration.ProjectType = 3;

window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	



// Start of user-defined pre WR code (PreLoad)
// rewriteApi.add({
//     pattern: /(<head[^>]*>)/i,
//     replace: '$1<style class="cm-ignore">iframe{ display: none!important}<\/style>'
// });

window.CTPauseResume = function (pause) {
    if (typeof clickTaleStartEventSignal === "undefined") return;

    if (pause && typeof ClickTaleIsRecording === "function" && ClickTaleIsRecording() && typeof ClickTaleGlobal === "object" && typeof ClickTaleGlobal.exports.changeMonitor === "object" && typeof ClickTaleGlobal.exports.changeMonitor.disconnect === "function") {
        ClickTaleGlobal.exports.changeMonitor.disconnect();
        window.ctStop = Date.now();
    }
    if (!pause && typeof ClickTaleIsRecording === "function") {
        interval = (Date.now() - window.ctStop) / 1000;
        var evtStr = interval > 0 && interval < 8 ? "Onload | Resume " + Math.round(interval) + " sec" : "Onload | Paginate";
        clickTaleStartEventSignal(evtStr);
        window.ctStop = Date.now();
    }
};

//PTC Code Version 10.3

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = function () {
    return "deflate";
};
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(function () {
    var Tr = ClickTaleSettings.Transport;
    Tr.Legacy = false;
    Tr.MaxConcurrentRequests = 5;
    Tr.BigBuffer = 60000;
    Tr.SmallBuffer = 1000;
})();
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone["__symbol__"] === "function") {
    ClickTaleSettings.PTC.restoreZonedXHR = function (xhr) {
        if (xhr) {
            var prot = Object.getPrototypeOf(xhr);
            while (prot) {
                for (var propName in prot) {
                    var replacement;
                    if ((replacement = prot[Zone["__symbol__"](propName)])) {
                        xhr[propName] = replacement;
                    }
                }
                prot = Object.getPrototypeOf(prot);
            }
        }
    };

    window.ClickTaleOnXHRCreated = function (xhr) {
        xhr = new XMLHttpRequest.prototype.constructor();
        ClickTaleSettings.PTC.restoreZonedXHR(xhr);
        return xhr;
    };
}
if (document.readyState === "complete") {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;
ClickTaleSettings.PTC.Integrations = window.ClickTaleSettings.PTC.Integrations || [];
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleSettings.PTC.textRegex = /\w|[^\x00-\x7F]/g;

/*****************************/
//-----Custom Functions -----//
/*****************************/
/**
 * GAP-618
 * @param {!string} key name of key to set
 * @param {!string} value value of key to set
 */
ClickTaleSettings.PTC.sendDataToCT = function (key, value) {
    if (typeof ClickTaleField === "function") {
        ClickTaleField(key, value);
    }
    if (typeof ClickTaleEvent === "function") {
        ClickTaleEvent("@ID@" + value, true);
    }
};

window.ClickTaleUIDCookieName = "WRUID20171123";

function clickTaleReadCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (clickTaleReadCookie(window.ClickTaleUIDCookieName) === "") {
    document.cookie = window.ClickTaleUIDCookieName + "='';domain=secure-www.gap.com;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";
}

ClickTaleSettings.LocRefRew = function (url) {
    if (url) {
        url = url.replace(/(creditCardNumber|email|eml)=([^&#]+)/gi, function (m, g1, g2) {
            if (g2.length > 0) {
                g2 = g2.replace(/\w/g, "-");
            }
            return g1 + "=" + g2;
        });
    }
    return url;
};

ClickTaleSettings.LocationRewriter = ClickTaleSettings.LocRefRew;
ClickTaleSettings.ReferrerRewriter = ClickTaleSettings.LocRefRew;

if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
    ClickTaleSettings.Protocol.UseBeacon = false;
    if (!!navigator && typeof navigator.sendBeacon === "function") {
        navigator.oldsendBeacon = navigator.sendBeacon;
        navigator.sendBeacon = function (url) {
            if (/.clicktale.net/.test(url)) {
                setTimeout(function () {
                    var img = new Image();
                    img.src = url;
                }, 0);
                return;
            }
            return navigator.oldsendBeacon.apply(this, arguments);
        };
    }
}

//GAP-220
window.ClickTaleSettings.PTC.overWriteXHR = function (xhr) {
    if (XMLHttpRequest != XMLHttpRequest.prototype.constructor) {
        return new XMLHttpRequest.prototype.constructor();
    } else {
        return xhr;
    }
};
window.ClickTaleOnXHRCreated = window.ClickTaleSettings.PTC.overWriteXHR;
var isSafariV10 = false;
/*****************************/

ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.Sa && v.v < 11) {
        isSafariV10 = true;
    }
    if (v.t == v.ED && v.v < 14) {
        ClickTaleSettings.Compression.Async = false;
    }
    if (v.m) {
        ClickTaleSettings.PTC.IsMobile = true;
    }
    if (!(v.t == v.IE && v.v == 10)) {
        ClickTaleSettings.PTC.EnableChangeMonitor = true;
        ClickTaleSettings.PTC.ConfigChangeMonitor();
    }
    var fv = f(v);
    ClickTaleSettings.PTC.okToRunPCC = fv;
    return fv;
};

ClickTaleSettings.PTC.startsWith = function (strToTest, str) {
    return strToTest.lastIndexOf(str, 0) === 0;
};

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

(function () {
    var selectorForBoth = '[name="gap_mat_month"] option, [name="gap_mat_year"] option,.emailAddressLine em, .email-address-info, #emailPrefBirthdaySelects option, #BirthMonth option, #BirthDay option, [name*="birth"], [name*="birth"] *, span[class*="pickupPerson"], h3#rewardsHeading, li.wallet-credit-card p.wallet-credit-card-expiration, i.wallet-credit-card h3.wallet-credit-card-info, #MyAccountContainer>button>div:nth-child(1), .reset-password-template form>b, .full-name,.wallet-credit-card-info, div.member-name, #shopbuddy__slider-activated__header__email__text, #orderPanel__emailId > font, #messageBlock > div > ul > li:nth-child(2) > span';
    //GAP-446
    selectorForBoth += ',#personalInformation>h4,#paymentInformation>h4,[name="PersonalInfo"]>div.heading-b_universal,.addressItem em,#state,#state>option,#creditCardId,#expirationMonthBlock>select,#expirationMonthBlock>select>option,[name="billState"],[name="billState"]>option,#cardTypeBlock>select,#cardTypeBlock>select>option,#expirationYear,#expirationYear>option,#expirationMonth,#expirationMonth>option,.bopis__editmobilenumber, #orderConfirmationContainer_above span.email, #orderConfirmationContainer_above span.phone-number';
    //GAP-146
    var nonAttrSelector = 'div.universal-nav--right>div>button>div>span, span#userAccountName, div[id^=currentAddress], span[id^=currentAddress], li[id^=ui-id-], span[id^=shippingSummary], span[id^=billingSummary], p#giftingSummaryMessage, span[id^=billingDisplay], span#completeRegistrationUserName, span#userEmailAddress, div#personalInformation span.linkValue, label[for^=address]:not([for="addressLine2"]):not([for="addressLine1"]), span.expiration, span.billingAddress, div#billingDetailSection>p, div#shippingDetailSection>p, span.magic-link-confirmation--title-text>b, .cardholder-name, div.addressBlock>div, div.addressBlock>div>span';
    //GAP-414
    nonAttrSelector += ",#emailAddressBlock>.displayEmail";
    //GAP-475
    nonAttrSelector += ",sds_g-15-24";
    //GAP-734
    nonAttrSelector += ',#orderPanel__firstName, #orderPanel__emailId, #ship__addressStreet, #ship__addressCity, #ship__addressName, #paymentMethodContainer .giftCard__number, .pac-item>span, .pac-matched, div[class*="AccountBanner_manageAccCardDet"] div, .prePopulateEmail>p, .credit-card-list-item__user-detail__username';
    //Modify previous selector
    if (window.location.href.toLocaleLowerCase().indexOf("/my-account/order-details/") == -1) {
        nonAttrSelector += ", div.order-summary-body-simple div, div.card-body div";
    }
    var selectorForHref = ".orderNumber>a";
    // /**
    //  *
    //  * @param {!string} value - attribute value || textContent
    //  * @param {!Node} node
    //  * @param {!string} rule - css selector
    //  * @param {!number} type - 0 - text, 1 - attribute
    //  * @returns {!string}
    //  */
    // function transform(value, node, rule, type) {
    //     var reg = /\w|[^\x00-\x7F]/g;
    //     return value.replace(reg, "-");
    // }

    ClickTaleSettings.DOM.PII = {
        Text: [selectorForBoth, nonAttrSelector], //selectorForBoth, nonAttrSelector
        Attributes: [
            {
                rule: selectorForBoth,
                attr: "value",
            },
            {
                //GAP-446
                rule: selectorForHref,
                attr: "href",
            },
        ], //,
        //Transform: transform
    };

    /**
     *
     * @param {!CSSStyleSheet} adoptedStyleSheets
     */
    function getSerializedNode(adoptedStyleSheets) {
        var textArray = [];
        adoptedStyleSheets.forEach(function (sheet) {
            var rules = /** @type{!CSSRuleList} */ (sheet.cssRules);
            for (var i = 0; i < rules.length; i++) {
                var rule = rules[i];
                if (rule && rule.cssText) {
                    textArray.push(rule.cssText);
                }
            }
        });
        if (textArray.length) {
            return {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-addoptedCSS": "true",
                },
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: textArray.join("\r\n"),
                    },
                ],
            };
        }
        return null;
    }

    /**
     *
     * @param {!(DocumentOrShadowRoot|Element)} root
     */
    function addSerializedNode(root, serializeAPI) {
        var serializeNode,
            parentNode = root,
            adoptedStyleSheets;
        switch (root.nodeType) {
            case 11:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                }
                break;
            case 1:
                if (typeof root.getRootNode === "function") {
                    root = root.getRootNode();
                    addSerializedNode(root, serializeAPI);
                }
                break;
            case 9:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                    parentNode = document.head || document.documentElement;
                }
                break;
        }
        if (serializeNode && parentNode) {
            serializeAPI.addChild(parentNode, null, serializeNode);
        }
    }

    ClickTaleSettings.DOM.Serializer = ClickTaleSettings.DOM.Serializer || {};

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = function (serializeAPI) {
        var allObservableRoots;

        //ComputedStyle code
        var dataStyledComponents = document.querySelectorAll("style[data-emotion]");
        if (!!dataStyledComponents) {
            var cssRulesString = "";
            Array.prototype.forEach.call(dataStyledComponents, function (el, ind) {
                if (!!el && el.sheet && (el.sheet.rules || el.sheet.cssRules)) {
                    var cssRulesObj = !!el.sheet.rule ? el.sheet.rules : el.sheet.cssRules;
                    for (var i in cssRulesObj) {
                        if (cssRulesObj[i]["cssText"]) {
                            cssRulesString += cssRulesObj[i]["cssText"] + " ";
                        }
                    }
                }
            });
            cssRulesString = cssRulesString.toString().replace(/background-clip:(\s)*text;/gi, "background-clip: text; -webkit-background-clip:text;");
            serializeAPI.addChild(document.head, null, {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    class: "csComputedStyle",
                    "data-emotion": "",
                },
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: cssRulesString,
                    },
                ],
            });
        }
        //end computedStyle code

        if ("adoptedStyleSheets" in Document.prototype && window.ClickTaleGlobal && ClickTaleGlobal.symbols && ClickTaleGlobal.symbols.rootsManager && typeof ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots === "function" && Array.isArray((allObservableRoots = /** @type{!Array.<DocumentOrShadowRoot|Element>} */ (ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots())))) {
            allObservableRoots.forEach(function (root) {
                addSerializedNode(root, serializeAPI);
            });
        }

        var parentNode = document.head;
        var previosSibling = document.querySelector("head>style:last-of-type");
        serializeAPI.addChild(parentNode, previosSibling, {
            nodeType: 1,
            tagName: "style",
            attributes: {
                class: "cm-ignore",
            },
            childNodes: [
                {
                    nodeType: 3,
                    textContent: "iframe{display: none ! important;}",
                },
            ],
        });
    };

    var locationRules = [
        {
            selector: '[is-logged-in="isLoggedIn"] .activeBagContainerTitle, [data-bind*="cardPreApprovalCustomerEmailId"], [data-bind*="congratsMessageOnCardConfirm"], [data-bind*="cardNumber"]',
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /buy\/shopping_bag\.do/i,
            },
        },
        {
            selector: "#billingCreditCardId option, .address span, .shippingStateContainer option",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/checkout\/order.do/i,
            },
        },
        {
            selector: "#signInContainer .modal-container span.sds-cb_color--g1, #signInContainer__maskedEmail, .__react_component_tooltip .multi-line, .__react_component_tooltip span, .shipping__display--nameEllipsis, #orderConfirm__greetText",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/checkout\/place-order/i,
            },
        },
        {
            selector: ".inputContainer.body-a_universal",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/profile\/forgot_password.do/i,
            },
        },
        {
            selector: ".accountSettingsSection .linkValue",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/profile\/account_summary.do/i,
            },
        },
        {
            selector: ".email-address-info",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/profile\/changePassword.do/i,
            },
        },
        {
            selector: ".okta-button-select option",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/profile\/forgot_password.do/i,
            },
        },
        {
            selector: ".acceptance-container span",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/credit-card-accept\//i,
            },
        },
        {
            selector: "#birthday, #annualNetIncome",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /\/credit-card-accept\//i,
            },
        },
        {
            selector: ".sds-cb_body-a>div>div",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/order-details\//i,
            },
        },
    ];

    locationRules.forEach(function (rule) {
        if (rule.location) {
            var prop = rule.location.prop;
            var search = rule.location.search;
            if (search.test(location[prop])) {
                var Attributes = rule.Attributes;
                var selector = rule.selector;
                var Text = rule.Text;
                var PII = ClickTaleSettings.DOM.PII;
                if (Text) {
                    PII.Text.push(selector);
                }
                if (Array.isArray(Attributes)) {
                    Attributes.forEach(function (attr) {
                        PII.Attributes.push({
                            rule: selector,
                            attr: attr,
                        });
                    });
                }
            }
        }
    });
})();

(function () {
    if (typeof window.ClickTalePIISelector === "string" && ClickTalePIISelector != "") {
        try {
            var domNodes = document.querySelector(ClickTalePIISelector);
            var PII = ClickTaleSettings.DOM.PII;
            PII.Text.push(ClickTalePIISelector);
            PII.Attributes.push({
                rule: ClickTalePIISelector,
                attr: "value",
            });
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad PII selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
})();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    isNeedForSVGImg: false,
    subscriberId: "233167",
    pid: "17",
    storageUrl: "https://s3.amazonaws.com/nv-p1-s3-assets-01/",
    prefixSpecialCharacters: false,
    getPrefixUrl: function () {
        return this.storageUrl + this.subscriberId + "/" + this.pid;
    },
    getFullURL: function (type, url) {
        var AMUrl = "";
        if (url) {
            switch (type) {
                case "css":
                    AMUrl = this.getPrefixUrl() + "/CSS/" + url.replace(/:\/\//g, "/").replace(/%20/g, " ");
                    if (this.prefixSpecialCharacters && this.prefixSpecialCharacters.test(AMUrl)) {
                        AMUrl = AMUrl.replace(/\?/g, "%253F").replace(/\&/g, "%26").replace(/\=/g, "%3D");
                    } else {
                        AMUrl = AMUrl.replace(/\?.*/g, "");
                    }
                    break;
                case "image":
                    AMUrl = this.getPrefixUrl() + "/IMAGE/" + url.replace(/:\/\//g, "/").replace(/%20/g, " ");
                    break;
            }
        }
        return !!AMUrl ? AMUrl : false;
    },
    init: function () {
        if (this.isActive && this.pid && this.subscriberId) {
            var transform = (ClickTaleSettings.DOM.Transform = ClickTaleSettings.DOM.Transform || []);
            transform.push({
                rule: 'link[href][rel*="stylesheet"]',
                attr: "href",
                transform: function (value, node) {
                    if (value.indexOf("fonts.googleapis.com") == -1) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("css", node.href);
                    }
                    return value;
                },
            });
            if (this.isNeedForImg) {
                transform.push({
                    rule: "img[src]",
                    attr: "src",
                    transform: function (value, node) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("image", node.src);
                    },
                });
            } else if (this.isNeedForSVGImg) {
                transform.push({
                    rule: "img[src*='.svg']",
                    attr: "src",
                    transform: function (value, node) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("image", node.src);
                    },
                });
            }
        }
    },
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = ["#mainNavBROL .g-1-3", ".wcdNavlimit .g-1-4", '[class*="__wikibuy"]', '[class*="wbext"]', "div.toggle-universal-modal", "div#footer-slider", "div#carousel_newArrivals_window", "#headline_segA", ".footer-blue-inner", "script", ".sitewide-1u8qly9", ".sitewide-3t04x3"];

    ClickTaleSettings.ChangeMonitor = {
        Enable: ClickTaleSettings.PTC.EnableChangeMonitor,
        // Roots: [document.body],
        Exclude: {
            ChildNodes: [],
            Attributes: [],
        },
    };
    var exclude = ClickTaleSettings.ChangeMonitor.Exclude;
    if (excludeBothArray.length > 0) {
        Array.prototype.push.apply(exclude.ChildNodes, excludeBothArray);
        Array.prototype.push.apply(exclude.Attributes, excludeBothArray);
    }

    function insertIntoBoth(selector) {
        exclude.ChildNodes.push(selector);
        exclude.Attributes.push(selector);
    }
    //Copied and editted from R16-ChangeMonitor
    if (!/(?:shopping_bag|category|product).do/i.test(document.location.pathname)) {
        insertIntoBoth(".universal-modal");
    }

    if (typeof window.ClickTaleCMSelector === "string" && window.ClickTaleCMSelector != "") {
        try {
            var domNodes = document.querySelector(ClickTaleCMSelector);
            insertIntoBoth(ClickTaleCMSelector);
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad CM selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
};

ClickTaleSettings.PTC.doOnlyWhen = function (toDoHandler, toCheckHandler, interval, times, failHandler) {
    if (!toDoHandler || !toCheckHandler) return;
    if (typeof interval == "undefined") interval = 100;
    if (typeof times == "undefined") times = 10;
    if (--times < 0) {
        if (typeof failHandler === "function") {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function () {
        ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};

function ClickTaleOnRecording() {

    //Live Signals Start
    CS_CONF.signalsDetection = CS_CONF.signalsDetection || {};
    CS_CONF.signalsDetection.sendVarsToCS = false;
    CS_CONF.signalsDetection.sendEventsToReplay = true;

    CS_CONF.signalsDetection.initSignals = function () {
        CS_CONF.signalsDetection.rageClickModule = true;
        CS_CONF.signalsDetection.jsErrorClickModule = true;

        if (typeof this.frictionSignals === "function") {
            CS_CONF.signalsDetection.frictionSignals();
        }
    };

    var script = document.createElement("SCRIPT");
    script.src = "https://cdnssl.clicktale.net/www/tc/ls_CS.js";
    document.body.appendChild(script);
    //Live Signals End

    (function () {
        function init() {
            var uxaGet = _uxa.push(["getSessionData"]);
            if (uxaGet && uxaGet.projectId) {
                var pid = uxaGet.projectId;
                var uu = uxaGet.userId;
                var sn = uxaGet.sessionNumber;
                var pvid = uxaGet.pageNumber;
                if (pid && uu && sn && pvid) {
                    var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid + "&vd=csrl";
                    window.ClicktaleReplayLink = function () {
                        return intLink;
                    };
                    if (window.CS_CONF) {
                        CS_CONF.replaylink = intLink;
                    }
                }
            }
        }

        function callback(context) {
            if (!disableCallback) {
                disableCallback = true;
                init(context);
            }
        }
        var disableCallback = false;
        window._uxa = window._uxa || [];
        _uxa.push(["afterPageView", callback]);
    })();

    //ClicktaleIntegrationExperienceHandler function start
    window.ClicktaleIntegrationExperienceHandler = function () {
        var abTestEvents = function (itter) {
            for (var i = 0; i < itter.length; i++) {
                var arg = itter[i];
                if (arg) {
                    if (typeof arg === "string") {
                        ClickTaleEvent(arg);
                    } else if (Array.isArray(arg)) {
                        abTestEvents(arg);
                    }
                }
            }
        };

        if (arguments.length) {
            abTestEvents(arguments);
        }
    };
    //ClicktaleIntegrationExperienceHandler function end
}

// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource,
	pccSource = scriptSource;

if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}


if(!ClickTaleGlobal.init.pccRequested) {
		var pccSrc = pccSource ? pccSource : (isHttps ? 'https://cdnssl.clicktale.net/pcc/' : 'http://cdn.clicktale.net/pcc/');
	    pccSrc += 'c08d3614-4c2f-4b0d-b983-40bd407e56a4.js?DeploymentConfigName=Release_20210727&Version=1';
			var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
		pccScriptElement.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        pccScriptElement.integrity = ClickTaleGlobal.scripts.sri.hashes.pcc;
        pccScriptElement.src = ClickTaleGlobal.scripts.sri.path + "pcc.js";
	}else {
       pccScriptElement.src = pccSrc;
    }
	
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	
window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=17, 
		Ratio=1, 
		PartitionPrefix="www29",
		SubsId=233167;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	window._uxa = window._uxa || [];
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.CustomVariables = window.ClickTaleSettings.PTC.CustomVariables || [];
window.ClickTaleSettings.PTC.CustomVariables = [{
    displayName: 'Order Confirmation',
    value: '',
    slot: 1
},
{
    displayName: 'Out of Stock',
    value: '',
    slot: 2
}
];

function sendCVar() {
    var cVars = window.ClickTaleSettings.PTC.CustomVariables;
    for (var i = 0; i < cVars.length; i++) {
        if (cVars[i].displayName == 'Order Confirmation' && document.querySelector('#orderConfirmationContainer_above')) {
            cVars[i].value = 'True'
        }
        if (cVars[i].displayName == 'Out of Stock') {
            var disabledInputs = document.querySelectorAll('.bopis-ship-radio[disabled]');
            cVars[i].value = disabledInputs && (disabledInputs.length >= 2) && 'True';
        }
        cVars[i].value && window._uxa.push(['setCustomVariable', cVars[i].slot, cVars[i].displayName, cVars[i].value]);
    }
}


window.ClickTaleOnStop = window.ClickTaleOnStop || [];
ClickTaleOnStop.push(sendCVar);
if (!document.querySelector('#orderConfirmationContainer_above')) {
    sendCVar();
}






function getProjectTypePropertyName() {
    if (typeof ClickTaleEvent === 'function') {
        try {
            var stringClickTaleEvent = ClickTaleEvent.toString();
            var projectTypePropMatch = stringClickTaleEvent.match(/(\w+)\.(\w+)===\1\.\w+\.m2Prime/);
            if (projectTypePropMatch) {
                var propName = projectTypePropMatch[2];
                getProjectTypePropertyName = function () {
                    return propName;
                }
                return propName;
            }
        } catch (err) { }
    }
    return false;
}


if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
}

//Block pageEvent piggybackking off of CT events to reduce amount of calls (but let @id@ events for VI through)
if (window.ClickTaleGlobal && ClickTaleGlobal.symbols && !isNaN(ClickTaleGlobal.symbols[getProjectTypePropertyName()])) {
    var oldClickTaleEvent = ClickTaleEvent;
    var previoustype = ClickTaleGlobal.symbols[getProjectTypePropertyName()];
    ClickTaleEvent = function () {
        if (/_|Optimizely|Tealium/.test(arguments[0]) && !/^@ID@|^LS_/.test(arguments[0])) {
            ClickTaleGlobal.symbols[getProjectTypePropertyName()] = -1;
        }
        var res = oldClickTaleEvent.apply(this, arguments);
        ClickTaleGlobal.symbols[getProjectTypePropertyName()] = previoustype;
        return res;
    }
}


window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(function () {
    var pcc = document.querySelector('script[src*="clicktale"][src*="pcc"],script[src*="contentsquare"][src*="pcc"]');
    if (pcc) {
        var versionmatch = pcc.src.match(/DeploymentConfigName=(.+)/i);
        if (versionmatch && typeof ClickTaleExec === 'function') {
            ClickTaleExec("console.info('" + versionmatch[0] + "');");
            ClickTaleEvent("Config: " + versionmatch[1].replace(/\&.+/, ''));
        }
    }
});
//GAP-497
if (document.location.pathname.toLowerCase().indexOf('checkout/place-order/confirmation') > -1) {
    if (window['MutationObserver']) {
        if (typeof ClickTaleNote === "function") {
            ClickTaleNote("Order Number Observer1");
        }
        var observerConf = new window['MutationObserver'](function () {
            checkOrderNumber("element's observer");
        });
        var conformationConfig = { 'characterData': true, 'childList': true };
        var orderNumTarget = document.querySelector("#orderConfirm__orderNumber");
        if (orderNumTarget) {
            observerConf.observe(orderNumTarget, conformationConfig);
        }
        //  to handle if the element is removed and added again(with text)
        var observerConfParent = new window['MutationObserver'](function () {
            checkOrderNumber("Parent element's observer");
        });
        var parentConfig = { 'characterData': true, 'childList': true, 'subtree': true };
        var orderNumParent = document.querySelector(".order_confirmation");
        if (orderNumParent) {
            observerConfParent.observe(orderNumParent, parentConfig);
        }
    }
}

function checkOrderNumber(note) {
    var orderNumelm = document.querySelector("#orderConfirm__orderNumber");
    if (orderNumelm) {
        var elmText = orderNumelm.innerText.trim();
        if (!!elmText) {
            if (typeof ClickTaleExec === "function") {
                ClickTaleExec('document.querySelector("#orderConfirm__orderNumber").innerText="' + elmText + "\"");
            }
            if (typeof ClickTaleField === "function") {
                ClickTaleField('Order Number', elmText);
            }
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote(note);
            }
        }
    }
}




function isOpacity(element) {
    if (typeof element === 'string' && (element = document.querySelector(element)) && element.offsetHeight > 0 && element.offsetWidth > 0 && element.style.opacity === '1') {
        return true;
    } else {
        return false;
    }
};

function isVisible(element) {
    if (element && typeof element == 'string') {
        element = document.querySelectorAll(element);
    }
    if (element instanceof NodeList && element.length > 0) {
        return Array.prototype.filter.call(element, function (el) {
            return isVisible(el);
        }).length == element.length;
    }
    if (element instanceof Element) {
        return !!(element && !!(element.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_CONTAINS) && ((element.offsetWidth > 0 && element.offsetHeight > 0) || element['getClientRects']().length > 0));
    }
    return false;
};

function doUpload() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        // IMP-1834
        if (/shopping-bag/.test(location.pathname)) {
            let messageElm = document.querySelector('h1.error-fallback__header');
            if (!!isVisible(messageElm) && !!(/oh no! we hit a snag/i.test(messageElm.textContent))) {
                window._uxa.push(['setPath', document.location.pathname + "/Oops-hit-snag"]);
            }
        }
        ClickTaleUploadPageNow();
        window.ClickTaleSettings.PTC.UploadPageHappened = true;
    };
};

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        //GAP-189,GAP-228
        if (/\/checkout\/(?:search|category).do/i.test(document.location.href)) {
            return !!document.querySelector('div.favorites') && document.querySelectorAll('img.product-card--img[src*="assets"]').length > 1;
        }

        //GAP-9
        else if (document.location.href.indexOf('/checkout/order.do') > -1) {
            return isOpacity('#signInInput') || isOpacity('#shippingInput') || isOpacity('#giftingInput') || isOpacity('#billingInput') || isOpacity('#orderPlacementInput') || isVisible('#requestTimeOutPanel') || isVisible('#sessionTimeOutPanel');
        } else if (location.pathname.toLowerCase().indexOf('/buy/shopping_bag.do') > -1) {
            return document.querySelectorAll('.shoppingBagCheckout').length > 0 && document.querySelectorAll('.productDetails').length > 0;
        } else if (location.pathname.toLowerCase() === '/checkout/place-order/') {
            return !!((!document.querySelector('.processing__circle')) || isVisible(document.querySelector('#popupError__button-backToBag')));
        } else if (document.location.href.toLowerCase().indexOf('category.do') > -1) {
            return document.querySelector('body').offsetHeight > 0 && document.querySelector('body').offsetWidth > 0;
        } else {
            return true;
        }
    }
    return false;
};

function readyToDelayUploadPage() {
    if (typeof ClickTaleDelayUploadPage === 'function') {
        ClickTaleDelayUploadPage();
        //var PWADelay = /pwa=true/i.test(location.search) ? 5000 : 0;
        var intervals = (document.location.href.indexOf('/checkout/order.do') > -1) ? 5 : 10;
        window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 1000, intervals, doUpload);

        var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
        for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
            if (typeof initFuncs[i] === 'function') {
                initFuncs[i]();
            }
        }
    }


}

function startRecordingChecks() {
    if (/\/bright\//i.test(location.pathname) && top != self) {
        if (window.innerWidth == 0 && window.innerHeight == 0) {
            setTimeout(startRecordingChecks, 500);
            return;
        }
    }
    readyToDelayUploadPage();
    window.ClickTaleIncludedOnDOMReady = true;
    window.ClickTaleIncludedOnWindowLoad = true;

    window._uxa = window._uxa || [];
    window._uxa.push(['startDataCollection']);
    ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);

    if ((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString())) {
        ClickTalePrevOnReady();
    }
}
var pathName = document.location.pathname.toLowerCase();
if (pathName.indexOf("shopping_bag.do") > -1 || pathName.indexOf("checkout/place-order") > -1) {
    readyToDelayUploadPage();
} else {
    if (document.readyState == 'complete') {
        setTimeout(startRecordingChecks, 1000);
    } else {
        window.addEventListener('load', function () {
            setTimeout(startRecordingChecks, 1000);
        });
    }
    //don't continue with regular recording
    return;
}
	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
		var wrScript = ClickTaleCreateDOMElement("script");
	wrScript.crossOrigin = "anonymous";
	wrScript.type = 'text/javascript';
		wrScript.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        wrScript.integrity = ClickTaleGlobal.scripts.sri.hashes.wr;
        wrScript.src = ClickTaleGlobal.scripts.sri.path + "wr.js";
	}else {
        wrScript.src = window.ClickTaleScriptSource + 'WR119.js';
    }

	ClickTaleGlobal.init.isAllowed && document.body.appendChild(wrScript);
})();







var ctVEconfig={VE_BASE_URL:"https://ve-cec-na1.app.clicktale.com/",VE_PROXY_BASE_URL:"https://vep-cec-na1.app.clicktale.com/"};!function(){try{var e=window.chrome,t=window.navigator&&window.navigator.vendor;null!=e&&"Google Inc."===t&&window.addEventListener&&addEventListener("message",o,!1);var n=window.location.search.substring(window.location.search.indexOf("ctAdvancedSearch=")).split("&")[0].split("=");"ctAdvancedSearch"==n[0]&&"true"==n[1]&&c("ctAdvancedSearchModule",ctVEconfig.VE_BASE_URL+"client/dist/advancedSearchModule.js")}catch(e){}function o(e){var t;try{t=JSON.parse(e.data)}catch(e){return}!1!==new RegExp("(app[.]clicktale[.]com)($|:)").test(e.origin)&&(window.ct_ve_parent_window=e.source,"CT_testRules"==t.name&&(sessionStorage.setItem("CT_testRules",!0),console.log((new Date).toJSON(),"PostPTC: testRules ",sessionStorage.getItem("CT_testRules")),window.ct_ve_parent_window.postMessage({name:"testRulesRecieved",params:{}},"*")),"CTload_ve"===t.function&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&(function(){console.log((new Date).toJSON(),"PostPTC: start loading test rules");var e=ClickTaleGetPID();c("ctTestRulesModule",ctVEconfig.VE_BASE_URL+"rulesEngineContent/TestPCC/"+e,function(){sessionStorage.setItem("CT_testRules_Loaded",!0),console.log((new Date).toJSON(),"PostPTC: test rules loaded")})}(),c("ctVisualEditorClientModule",ctVEconfig.VE_BASE_URL+"client/dist/veClientModule.js")))}function c(e,t,n){var o,c=(o="script",document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",o):document.createElement(o));c.setAttribute("type","text/javascript"),c.setAttribute("id",e),c.src=t,void 0!==n&&(c.onload=n),document.getElementById(e)||document.body.appendChild(c)}}();

//Signature:AZryXnt//DiHTHprE+ZsGXaWkyK/a/o36BihRhhM6u9p7IRywUh8R88kXvmasLQeujia0saW7FSLlY0bgrwp0RAXd+i1fWVzq9ybn+9tkEKjJd1ax2zfyFikQwfQSq2Vrn1kiss4XVhC5tMYCjRVKk9l6QwoDyZmBFXlE9eM5cY=