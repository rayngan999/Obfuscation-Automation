/**
 * Configuration Starts
 * ConfigJS :
 * Anything that has to be maintained as a configuration should be added to this file.
 */
window.configs = {
    commonApi:{
        "apiServerUrl": "https://sit.api.citi.com/gcgapi/dynamic/public/v1/",        
        "appID": "tagging_transformation",
        "currentUATEnv": "uat3" // To get the latest tagging content on dit and sit environment you have provide the current uat environment 
    },
    apiClientId:{
         "dit1": "6e919cb7-cdeb-4035-87e8-e55bd4c49c05",
         "dit2": "4b857a5e-3392-4eeb-bc30-6c502c20ba4c",
         "dit3": "4278ee95-fbbd-4caa-8c48-d95c4a299cf7",
         "sit1": "7a90cd2f-6c09-4fd4-a98c-b25df90a689f",
         "sit2": "caa0e9cd-5d4a-4171-914d-430ae4b59949",
         "sit3": "caa0e9cd-5d4a-4171-914d-430ae4b59949",
         "uat1": "1c95feec-b029-4112-8394-033ba19cb7de",
         "uat2": "3ea31584-77fb-4b6d-bec2-65a45cae1664",
         "uat3": "6a755087-ac37-4847-99a2-110c8da4f6b6",
         "perf": "edafa16a-aa4f-4d4b-acdb-a25203af1480",
         "prod": "4a51fb19-a1a7-4247-bc7e-18aa56dd1c40",
         "load": "edafa16a-aa4f-4d4b-acdb-a25203af1480",
         "localhost": "1234"
    },
    endpointURIs: {
        ccidUri: 'digital/cmr/profiles/customers/idDetails/retrieve',
        errorLoggingUri: 'v1/digital/foundations/tagging/errorLogging'
    },
    /* apiConfig : {
		"apiServerUrl":"https://dit.api.citi.com/gcgapi/dev3/public/v1/",
		"clientID":"4278ee95-fbbd-4caa-8c48-d95c4a299cf7",
        "appID":"tagging_transformation"
	},*/
    udoKeys: [
        "SUBGROUP_TYPE",
        "GROUP_TYPE",
        "SET_NOTIFICATION",
        "CONTENT_ID",
        "NAME",
        "event_name"
    ],
    renameUDOKeys: {
        "form_step": "link_name"
    },
    ecmCookieMapping: {
        p1: {
            "propertyName": "Customer Tier",
            "cookiePosition": ""
        },
        p2: {
            "propertyName": "Investment Account Status",
            "cookiePosition": ""
        },
        p3: {
            "propertyName": "AutoPay Enrollment Status",
            "cookiePosition": "3"
        },
        p4: {
            "propertyName": "CD Ownership Status",
            "cookiePosition": "13"
        },
        p5: {
            "propertyName": "Checking Plus Status",
            "cookiePosition": "15"
        },
        p6: {
            "propertyName": "Credit Card Status",
            "cookiePosition": "16"
        },
        p7: {
            "propertyName": "Mortgage Status",
            "cookiePosition": "17"
        },
        p8: {
            "propertyName": "Savings Account Status",
            "cookiePosition": "18"
        },
        p9: {
            "propertyName": "Customer Tenure",
            "cookiePosition": ""
        },
        p10: {
            "propertyName": "ThankYou Enrollment Status",
            "cookiePosition": "27"
        },
        p11: {
            "propertyName": "Alerts Usage Status",
            "cookiePosition": "2"
        },
        p12: {
            "propertyName": "Paperless Billing Status",
            "cookiePosition": "25"
        },
        p13: {
            "propertyName": "Checking Account Status",
            "cookiePosition": "14"
        },
        p14: {
            "propertyName": "Balance Transfer Eligibility",
            "cookiePosition": ""
        },
        p15: {
            "propertyName": "Bill Presentment Status",
            "cookiePosition": "5"
        },
        p16: {
            "propertyName": "Bank Account Type",
            "cookiePosition": ""
        },
        p17: {
            "propertyName": "Citi Private Client",
            "cookiePosition": "22"
        },
        p18: {
            "propertyName": "Global Executive Banker",
            "cookiePosition": "23"
        },
        p19: {
            "propertyName": "Small Business Customer",
            "cookiePosition": "28"
        },
        p20: {
            "propertyName": "Business Only Account",
            "cookiePosition": "29"
        },
        p21: {
            "propertyName": "Mortgage Only Account",
            "cookiePosition": "31"
        },
        p22: {
            "propertyName": "Net Purchase Amount",
            "cookiePosition": "41"
        },
        p23: {
            "propertyName": "Revolving Percent",
            "cookiePosition": "42"
        },
        p24: {
            "propertyName": "Wallet Segment",
            "cookiePosition": "44"
        },
        p25: {
            "propertyName": "Mobile Active User",
            "cookiePosition": "47"
        },
        p26: {
            "propertyName": "Debit Card Owner",
            "cookiePosition": ""
        },
        p27: {
            "propertyName": "International Personal Bank Status",
            "cookiePosition": ""
        },
        p28: {
            "propertyName": "Private Banking Group Status",
            "cookiePosition": "26"
        },
        p29: {
            "propertyName": "Active Mobile Check Deposit",
            "cookiePosition": ""
        },
        p30: {
            "propertyName": "Direct Deposit",
            "cookiePosition": ""
        },
        p31: {
            "propertyName": "Past Due",
            "cookiePosition": ""
        }
    },

    validationRule: {
        "domain": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "CCSID": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "number",
            "expectedLength": "5"
        },
        "CCID": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "number",
            "expectedLength": "5"
        },
        "CUUID": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "site_name": {
            "validationRequired": true,
            "validationTypes": ['values'],
            "expectedValues": ['US'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "action_type": {
            "validationRequired": true,
            "validationTypes": ['dataType', 'values'],
            "expectedValues": ['page view', 'event'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "customer_profile_string": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "s_vi": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "platform_type": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "url": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "authentication_status": {
            "validationRequired": true,
            "validationTypes": ['values'],
            "expectedValues": ['not authenticated', 'authenticated'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "language": {
            "validationRequired": true,
            "validationTypes": ['dataType'],
            "expectedValues": ['en_US', 'es_US'],
            "expectedDataType": "string",
            "expectedLength": "5"
        },
        "authentication_type": {
            "validationRequired": true,
            "validationTypes": ['values'],
            "expectedValues": ['citi.com'],
            "expectedDataType": "string",
            "expectedLength": "5"
        }
    }
};

// Polyfills if not exist Object.assign function
if (typeof Object.assign !== 'function') {
    var copyNextSource = function (nextSource, to) {
        for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
            }
        }
    };
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function (target, varArgs) {
            if (target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource !== null) {
                    copyNextSource(nextSource, to);
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

console.log("Started tagging.js core") // JavaScript source code
/**
 * Tagging data layer module
 * @method updateEventData
 * @method applicationData
 * @method makeCMSCallPromise
 * @method addAppData
 * @method processCmsData
 * @method getCCIDFromCCSID
 * @method logTaggingError
 * @method getEnvironmentDetails
 * @method getErrorFormat
 * @method setErrorLogs
 */
window.taggingDataLayer = (function () {

    /**
     * Public methods
     */
    var publicObject = {
        updateEventData: updateEventData,
        applicationData: applicationData,
        makeCMSCallPromise: makeCMSCallPromise,
        addAppData: addAppData,
        processCmsData: processCmsData,
        getCCIDFromCCSID: getCCIDFromCCSID,
        getErrorFormat: getErrorFormat,
        setErrorLogs: setErrorLogs,
        logTaggingError: logTaggingError,
        getEnvironmentDetails: getEnvironmentDetails,
        setPlatformType: setPlatformType,
    };

    var configObject = window.configs || {};
    var environnmentName = getEnvironmentDetails(window.location.hostname);
    var envName = getEnvironmentIndex();
    var apiURL = getApiURL(environnmentName);
    var appId = (configObject.commonApi) ? configObject.commonApi.appID : null;
    var udoObject = {};
    var appLoad = false;
    var appContentFailed = false;
    var parsedJsonResponse = {};
    var udoObjectWithoutAdditonalKeys = {};
    var ccsId = '';
    var appContentId = {};
    var appDynamicValue = {};
    var ccidCookieManager = {};
    var errFormat = {
        date: (new Date()).toDateString(),
        applicationName: "CBOL",
        browser: navigator.userAgent,
        pageUrl: window.location.href,
        dataTemplateUri: "",
        errorLogs: []
    };

    var aempageStatus="false";
    if(window._dl){
        if (window._dl.aemPage === "true"){
        	aempageStatus = "true";
        }
    }
  
  	var error_handler = '';
  	var cmsCalled = false;

    function getErrorFormat() {
        return errFormat;
    }

    function setErrorLogs(errorLogs) {
        errFormat.errorLogs = errorLogs;
    }

    function isICMSContent(contentId) {
        return contentId !== 'nonicms_content';
    }

    //** TEMP Code for CORS issue */
    function updateURL(apiURL) {
        try {
            var url = window.location.href;
            if (url.match('www.citicards.com') || url.match('www.citi.com')) {
                apiURL = apiURL.replace('online', 'api');
            }
        }
        catch (err) {
            console.log(err);
        }

        return apiURL;
    }

    /**
     * Tagging Transformation static data from cms promise
     * @param {*} customerId
     */
    function makeCMSCallPromise(customerId) {
        /**
         * API URL has to be taken form the config Add the tokens to the request header
         * Use Javascript Ajax to make the call
         */
         if(aempageStatus === "true"){
            console.log("Load data...111" + window._dl);
            processCmsData(null, customerId);
        } else { 
            if (cmsCalled == false){
                var requestURL = '';	
                if (environnmentName !== "local") {	
                    requestURL = apiURL +"staticcms/USGCB/en_US/appid/" + appId + ".json";	
                }	
                var data = sessionStorage.getItem(requestURL);	
                if (data){	
                    processCmsData(data, customerId);	
                }else{	
                    var xhttp = new XMLHttpRequest();	
                    xhttp.onreadystatechange = function () {	
                    if (this.readyState === 4 && this.status === 200) {	
                        sessionStorage.setItem(requestURL, this.responseText);	
                        processCmsData(this.responseText, customerId);	
                    }	
                    };	
                    xhttp.open("GET", requestURL, true);	
                    xhttp.setRequestHeader("client_id", configObject.apiClientId[envName]);	
                    xhttp.setRequestHeader('appVersion', 'CBOLV1.0.0');	
                    xhttp.send();
                    cmsCalled = true;
                }
            }
        }
    }

    /**
     * Get CCID if the user is logged in
     * @param {*} ccsid
     * @param {*} cb Callback
     */
    function getCCIDFromCCSID(ccsid, cb) {
        if(aempageStatus === "true"){
            cb();
        } else {       
            var xhttp = new XMLHttpRequest();
            var customerId = ccidCookieManager.getCookie();
            var ccidExpire = ccidCookieManager.getccidExpire();	
            if (ccidExpire && customerId) {
                cb(customerId);
                sessionStorage.setItem("ccId", customerId);
                return;
            }
            if (sessionStorage.getItem("matchCCSID")){	
                cb();
                return;	
            }
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        var ccidResponse = JSON.parse(this.responseText);
                        if (ccidResponse && ccidResponse.customerDetails) {

                            var cDB = [];
                            ccidResponse.customerDetails.forEach(function (v, k) {
                                cDB.push(v.ccid);
                            });
                            customerId = cDB.join(',');
                            ccidCookieManager.setCookie(customerId);
                            sessionStorage.setItem("ccId", customerId);
                            console.log('CCID: ', customerId);
                        }
                        //Calling Tagging Transformation static data from cms
                        cb(customerId);
                    } else if (this.status == 204){	
                        sessionStorage.setItem("matchCCSID", "true");	
                        cb();
                    } else {
                        cb(customerId);
                        console.log(this.status + '....' + this.statusText);
                    }
                }
            };

            var apiURL = getApiURL();
            if (environnmentName == 'local') {
                apiURL = "http://localhost:4200/assets/sitecat.json";
            }
            else {
                apiURL += configObject.endpointURIs.ccidUri;
            }
            // Payload

            var params = {
                "searchType": "CCSID",
                "customerIdDetails": [{
                    "customerIdValue": ccsid, //"1001111380308",
                    "customerIdType": "CCSID"
                }]
            }

            xhttp.open("POST", apiURL, true);
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.setRequestHeader('citiUuid', '81740845-c445-416e-baf5-333c30b2c0ec');

            //TODO:update headers value
            xhttp.setRequestHeader('uuid', '81740845-c445-416e-baf5-333c30b2c0ec');
            xhttp.setRequestHeader('channelId', 'CBOL');
            xhttp.setRequestHeader('appVersion', 'CBOLV1.0.0');
            // Checking the user is logged in
            if (isLoggedIn()) {
                // TODO get the values of bizToken, client_id and Auth from cookie
                var authCookie = getCookie("NGACoExistenceCookie");
                if (authCookie != undefined && authCookie !== null){
                    authCookie = authCookie.split('|');
                    if (authCookie.length >= 2) {
                        var authToken = authCookie[0].split('authToken=');
                        var bizToken = authCookie[1].split('bizToken=');
                        var clientId = authCookie[2].split('clientId=');
                        xhttp.setRequestHeader("bizToken", bizToken[1]);
                        xhttp.setRequestHeader("Authorization", "Bearer " + authToken[1]);
                        xhttp.setRequestHeader("client_id", clientId[1]);
                    }
                }
                else{
                    var bizToken = getCookie("bizToken");
                    var clientId = getCookie("client_id");
                    var authToken = getCookie("Authorization");
                    xhttp.setRequestHeader("bizToken", bizToken);
                    xhttp.setRequestHeader("Authorization", "Bearer " + authToken);
                    xhttp.setRequestHeader("client_id", clientId);
                }
            }
            xhttp.send(JSON.stringify(params));
        }
        
    }

    /**
     * Logging tagging errors
     */
    function logTaggingError() {
        return //TODO:enable this call once we have error logging micro service ready
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                // Cleaning error already logged
                errFormat.errorLogs = [];
                var response = JSON.parse(this.responseText);
                console.log('error logging response', response);
            }
        };

        var apiURL = getApiURL();
        if (environnmentName == 'local') {
            apiURL = "http://localhost:4200/assets/sitecat.json";
        }
        else {
            apiURL += configObject.endpointURIs.errorLoggingUri;
        }
        xhttp.open("POST", apiURL, true);
        xhttp.setRequestHeader('Content-type', 'application/json');
        xhttp.setRequestHeader("client_id", configObject.apiClientId[envName]);
        xhttp.send(JSON.stringify(errFormat));
    }

    /**
     * Manage ccid cookie, stores ccid and ccsid mapping separeted with |
     */
    ccidCookieManager = {
        getCookie: function () {
            var ccid_ccsid = getCookie('ccid_ccsid');
            var ccsId = getCcsId();
            if (ccid_ccsid) {
                var ccsidv = ccid_ccsid.split('|');
                if (ccsidv && ccsidv.length === 2 && ccsId === ccsidv[1]) {
                    return ccsidv[0];
                }
            }
        },
        setCookie: function (ccid) {
            ccsId = getCcsId();
          	setCookie('ccid_ccsid', ccid + '|' + ccsId, 180);// changing the expiry date to 180 days 
            setCookie('ccidUpdate','true',1);//dummy cookie for updating ccid 	
        },	
        getccidExpire: function(){	
            var ccidExp = getCookie('ccidUpdate');	
            return ccidExp;
        }
    }

    /**
     * Process CMS data
     * @param {*} response CMS Response Object
     * @param {*} customerId Customer CCID
     */
    function processCmsData(response, customerId) {
        getDataLayerObject(response);
        setCCsId();
        setURL();
        setUserAgent();
        setDomain();
        setSviCookie();
        setCuuIdCookie();
        setCustomerProfileString();
        setPlatformType(navigator.userAgent || navigator.vendor || window.opera);
        setSpaValue();
        setLanguage();
        setCountry();
        setExternalTrackingCode();
        setInternalTrackingCode();
        setCustType();	
        setECMCookie();
        setEmpFeedback();
        //setCustomerProspect();
        if (customerId) {
            setCCID();
        }
        if (appContentFailed) {
            setApplicationData(appContentId, appDynamicValue);
        }
        if (errFormat.errorLogs && errFormat.errorLogs.length > 0) {
            logTaggingError();
        }
        window._prev_dl = window._dl;
    }

    if (!window._stopAutoCallCmsData) {
        if (isLoggedIn()) {
            getCCIDFromCCSID(getCcsId(), makeCMSCallPromise);
        } else {
            makeCMSCallPromise();
        }
    }

    function getCcsId() {
        ccsId = getCookie('CCSID');
        if (ccsId && ccsId != "undefined" && ccsId != "null") {
            return ccsId;
        } else if (typeof (sessionStorage) != "undefined" && sessionStorage.getItem("sessionPostBrandingStorage")) {
            var sessionPostBrandingStorageObject = sessionStorage.getItem("sessionPostBrandingStorage");
            if (sessionPostBrandingStorageObject) {
                sessionPostBrandingStorageObject = JSON.parse(sessionPostBrandingStorageObject);
                ccsId = sessionPostBrandingStorageObject.siteCatalystBean.ccsid;
                return ccsId;
            }
        }
    }

    function getEnvironmentDetails(browserUrl) {
        var browserUrl = window.location.hostname;
        if (browserUrl.match("/dit.") || browserUrl.match("dit45") || browserUrl.match("dit01") || browserUrl.match("dit41") || browserUrl.match("dit02") || browserUrl.match("dit03") ||
            browserUrl.match("dit49") || browserUrl.match("productest5.accountonline") || browserUrl.match("productest6") || browserUrl.match("sit53") || browserUrl.match("dit121") || browserUrl.match("dit131") || browserUrl.match("sit9") || browserUrl.match("dit54") || browserUrl.match("dit55") || browserUrl.match("sit54") || browserUrl.match("dit16") || browserUrl.match("dit64") || browserUrl.match("dit52") || browserUrl.match("dit13") || browserUrl.match("dit39") || browserUrl.match("dit12") || browserUrl.match("dit38") || browserUrl.match("dit33") || browserUrl.match("dit18") || browserUrl.match("dit19")) {
            return "dit";
        } else if (browserUrl.match("/sit.") || browserUrl.match("sit05") || browserUrl.match("sit21") || browserUrl.match("sit9") || browserUrl.match("sit28") || browserUrl.match("productest5.creditcards") || browserUrl.match("sit54") || browserUrl.match("sit52") || browserUrl.match("sit6") || browserUrl.match("sit38") || browserUrl.match("sit31") || browserUrl.match("sit33") || browserUrl.match("sit19")) {
            return "sit";
        } else if (browserUrl.match("test01.creditcards") || browserUrl.match("test02.creditcards") ||
            browserUrl.match("test03.creditcards") || browserUrl.match("test04.creditcards") ||
            browserUrl.match("test01.accountonline") || browserUrl.match("test02.accountonline") ||
            browserUrl.match("test03.accountonline") || browserUrl.match("test04.accountonline") ||
            browserUrl.match("uat1") || browserUrl.match("uat2") || browserUrl.match("uat3") || browserUrl.match("uat4") || browserUrl.match("sit7") || browserUrl.match("sit46") || browserUrl.match("uat01") || browserUrl.match("uat02") || browserUrl.match("uat03")) {
            return "uat";
        } else if (browserUrl.match("webqa1") || browserUrl.match("webqa2") || browserUrl.match("webqa01") || browserUrl.match("webqa02") || browserUrl.match("pat.digitalbankcardsportal")) {
            return "perf";
        } else if (browserUrl.match("loadtest")) {
            return "load";
        } else if (browserUrl.match("online.citi.com") || browserUrl.match(".citicards.") || browserUrl.match("digitalbankcardsportal") || browserUrl.match("w.citi")) {
            return "prod";
        } else {
            return "local";
        }

    }
    
    /**
     * Returns environment with index
     */
    function getEnvironmentIndex() {
        var currentEnv = configObject.commonApi.currentUATEnv;
        if (environnmentName == 'local' || environnmentName == 'prod' || environnmentName == "perf" || environnmentName == "load") {
            return environnmentName;
        }
        if (environnmentName == 'dit' || environnmentName == 'sit') {
            return environnmentName + currentEnv.replace('uat', '');
        }
        else if (environnmentName == "uat") {
            var url = window.location.hostname;
            return (url.match("uat1") || url.match("test01"))?"uat1":(url.match("uat2") || url.match("test02"))?"uat2":(url.match("uat3") || url.match("test03") || url.match("test04"))?"uat3":currentEnv;
        }
    }

    /**
     * Returns API URL
     */
    function getApiURL() {
        var tmpUrl = configObject.commonApi.apiServerUrl;
        var tmpDynamic = '';
        if (environnmentName == 'local') {
            tmpUrl = "http://localhost:4200/assets/sitecat.json";
        }
        else if (environnmentName == "prod" || environnmentName == "perf" || environnmentName == "load") {
            var tmpSit = 'online';
            tmpDynamic = "prod";
            var url = window.location.hostname;
            if (url.match("webqa1") || url.match("webqa01")) {
                tmpSit = "webqa1.online";
                tmpDynamic = "sb";
            }
            if (url.match("webqa2") || url.match("loadtest") || url.match("webqa02") || url.match("pat.digitalbankcardsportal")) {
                tmpSit = "webqa2.online";
                tmpDynamic = "sb";
            }
            tmpUrl = tmpUrl.replace("sit.api", tmpSit);
        }
        else {
            tmpDynamic = getEnvironmentIndex();
            if (environnmentName == 'dit') {
                tmpDynamic = tmpDynamic.replace('dit', 'dev');
            }
        }
        tmpUrl = tmpUrl.replace('dynamic', tmpDynamic);
        return tmpUrl;
    }
    /**
     * Gets the cms data as a parameter Separate the UDO object from the entire object
     * Assign the UDO object to a data layer variable
     * Will probably need to be tweaked depending on what the formatting of the response.
     * @param {*} cmsData
     */
    function getDataLayerObject(cmsData) {
        parsedJsonResponse = JSON.parse(cmsData);
        // Set UDO
        if (parsedJsonResponse === null){
            udoObject = {CONTENT_ID: "udo_template",
            CUUID: "#",
            GROUP_TYPE: "Container",
            NAME: "Common properties",
            SET_NOTIFICATION: "N",
            SUBGROUP_TYPE: "Container",
            action_type: "#",
            authentication_status: "#",
            common_hierarchy: "us|web|public",
            country: "#",
            customer_profile_string: "#",
            domain: "#",
            evarPageName: "#",
            language: "#",
            lob: "#",
            platform_type: "#",
            s_vi: "#",
            site_hierarchy: "#",
            site_name: "US",
            test_id: "#",
            track_id: "#",
            url: "#",
            user_agent: "#",
            user_id: "#"};
        } else {
           udoObject = parsedJsonResponse['content'][appId]['copy$$udo_template']; 
        }
        udoObjectWithoutAdditonalKeys = removeAdditonalKeys(udoObject);
        window._dl = eCMcookieMapping(udoObjectWithoutAdditonalKeys);
    }

    /**
     * This function accepts the object name(UDO name or app name) and removes the unwanted keys sent by platform API
     * Should return a data without the additional keys added by platform API
     * @param {*} objectname
     */
    function removeAdditonalKeys(objectName) {
        var udoKeys = configObject.udoKeys;
        var renameUDOObj = configObject.renameUDOKeys;
        var renameUDOKeys = Object.keys(renameUDOObj);
        try {
            Object.keys(objectName).forEach(function (key) {
                if (udoKeys.indexOf(key) !== -1) {
                    delete objectName[key];
                }
                if (renameUDOKeys.indexOf(key) !== -1) {
                    for (var i = 0; i < renameUDOKeys.length; i++) {
                        if (key == renameUDOKeys[i]) {
                            var newKey = renameUDOObj[renameUDOKeys[i]];
                            objectName[newKey] = objectName[key];
                            delete objectName[key];

                            if (objectName['action_type'] !== 'event') {
                                delete objectName['link_name'];
                            }
                        }
                    }
                }
            });
        } catch (err) {
            addErrorToErrorLog(err);
          	error_handler = error_handler+';'+err;
        }
        return objectName;
    }

    /**
     * Get the app data object Iterate the keys in appdata if the key matches the key in UDO , update its value
     * @param {*} appDataObject
     */
    function mapAppKeyToUDO(appDataObject) {
        try {
            Object.keys(appDataObject).forEach(function (key) {
                _dl[key] = appDataObject[key];
            });
        } catch (err) {
            addErrorToErrorLog(err);
          	error_handler = error_handler+';'+err;
        }
    }

    /**
     * Set application data
     * @param {*} applicationContent
     * @param {*} appSpecificData
     */
    function applicationData(applicationContent, appSpecificData) {
        if (aempageStatus === "true"){
            setApplicationData(applicationContent, appSpecificData);
        } else if (typeof (parsedJsonResponse['content']) !== 'undefined') {
            setApplicationData(applicationContent, appSpecificData);
        } else {
            appContentFailed = true;
            appContentId = applicationContent;
            appDynamicValue = appSpecificData;
        }
    }

    /**
     * Set application data
     * @param {*} appContentId
     * @param {*} appDynamicValue
     */
    function setApplicationData(appContentId, appDynamicValue) {
        try {
            clearPreviousUDOData();
          	if ((getCookie('ccid_ccsid')===null || getCookie('ccid_ccsid')==undefined || getCookie('ccidUpdate')===null || getCookie('ccidUpdate')===undefined) && isLoggedIn()){
                getCCIDFromCCSID(getCcsId(), makeCMSCallPromise);
            }
            getDefaultData(window._dl);
            if (typeof (appContentId) === 'string') {
                var appData = isICMSContent(appContentId) ? parsedJsonResponse['content'][appId]['copy$$' + appContentId] : appDynamicValue;
                appData = removeAdditonalKeys(appData);
                mapAppKeyToUDO(appData);
                if (appDynamicValue && isICMSContent(appContentId)) {
                    addAppData(_dl, appDynamicValue);
                }
                setEvarPageName(_dl);
                setSiteSection(_dl);
                setEventName(_dl);
                trackId(_dl);
                setPageType(_dl);
                setSiteEvent(_dl);
                setResponsiveData(_dl);
                setLob(_dl);
              	setDynamicCount(_dl);
                setCitiProducts(_dl);
                setCardUserType(_dl);
            } else if (typeof (appContentId) === 'object') {
                addAppData(_dl, appContentId);
            }
          	setCCsId();	
            setCCID();
            setURL();
            setEmpFeedback();
            setAutheticationStatus(_dl);
            setInternalSearchTerm(_dl);
          	setFundingAmount(_dl);
          	setInternalCampaignClickthroughs(_dl);
            setExternalTrackingCode(_dl);
          	setErrorHandler(error_handler);
            appLoad = true;
            _trackAnalytics(window._dl);
            console.log("Load data..." + window._dl);
            window.testDatalayer = [];
            window.testDatalayer.push(window._dl);
            console.log(testDatalayer);
            validateDatalayer(window._dl);
        } catch (err) {
            addErrorToErrorLog(err);
          	error_handler = error_handler+';'+err;
        }
    }

    /**
     * Add new specific data to data layer
     * @param {*} parentObject
     * @param {*} appSpecificData
     */
    function addAppData(parentObject, appSpecificData) {
        if (appSpecificData) {
            Object.assign(parentObject, appSpecificData);
        }
    }

    /**
     * Mapping ECM cookies
     * @param {*} udoObjectWithoutAdditonalKeys
     */
    function eCMcookieMapping(udoObjectWithoutAdditonalKeys) {
        try {
            var ecmCookie = getCookie("CBOLECM");
            var cookieMapFromConfig = configObject.ecmCookieMapping;
            var profilesObject = {};
            if (ecmCookie) {
                var splitCookie = ecmCookie.split("-");
                var index = 1;
                splitCookie.forEach(function () {
                    if (cookieMapFromConfig["p" + index]) {
                        var cookieIndex = cookieMapFromConfig["p" + index].cookiePosition;
                        profilesObject["p" + index] = splitCookie[cookieIndex - 1];
                    }
                    index++;
                });
                udoObjectWithoutAdditonalKeys["p"] = profilesObject;
            }
        } catch (err) {
            udoObjectWithoutAdditonalKeys["p"] = {};
            addErrorToErrorLog(err);
          	error_handler = error_handler+';'+err;
        }
        return udoObjectWithoutAdditonalKeys;
    }

    /**
     * Get cookie utility
     * @param {*} name
     */
    function getCookie(name) {
        var c = "" + document.cookie;
        var index = c.indexOf(name + "=");
        if (index === -1) {
            return null;
        }
        var endstr = c.indexOf(";", index);
        if (endstr === -1) {
            endstr = c.length;
        }
        return unescape(c.substring(index + name.length + 1, endstr));
    }

    /**
     * 
     * @param {*} cname 
     * @param {*} cvalue 
     * @param {*} exdays 
     */
    function setCookie(cname, cvalue, exdays) {
        var Db = [];
        var d = new Date();
        var domain = '.citi.com'; // setting domain as a var
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        Db.push(cname, "\x3d", cvalue);
        Db.push("; expires\x3d", d.toUTCString());
        Db.push("; path\x3d/");
        Db.push("; domain\x3d", domain); // updating domain var in cookie value	
        //document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate + ";domain=.example.com;path=/"
        document.cookie = Db.join("");
        console.log('ccsid cookie created...');
    }
    // copy previous udo, re-assign copied udo to prevent site_events
    // from adding when clicking back-button
    function clearPreviousUDOData() {
        if (window._prev_dl) {
            window._dl = Object.assign({}, window._prev_dl);
        }
    }

    /**
     * Update events data
     * @param {*} eventData
     * @param {*} eventDataFromApp
     */
    function updateEventData(eventData, eventDataFromApp) {
        try {
            clearPreviousUDOData();
          	if ((getCookie('ccid_ccsid')===null || getCookie('ccid_ccsid')==undefined || getCookie('ccidUpdate')===null || getCookie('ccidUpdate')===undefined) && isLoggedIn()){
                getCCIDFromCCSID(getCcsId(), makeCMSCallPromise);
            }
            getDefaultData(window._dl);
            var updatedEventData, eventSpecificData = {};
            var eventLevelAttributes = getValuesFromDl();
            if (arguments.length === 1) {
                if (typeof (arguments[0]) === 'string') {
                    eventSpecificData = removeAdditonalKeys(parsedJsonResponse['content'][appId]['copy$$' + eventData]);
                    updatedEventData = Object.assign(eventLevelAttributes, eventSpecificData);
                } else if (typeof (arguments[0]) === 'object') {
                    updatedEventData = Object.assign(eventLevelAttributes, eventData);
                }
            } else {
                var eventSpecificData = isICMSContent(appContentId) ? parsedJsonResponse['content'][appId]['copy$$' + eventData] : eventDataFromApp;
                eventSpecificData = removeAdditonalKeys(eventSpecificData);
                updatedEventDataFromCMS = Object.assign(eventLevelAttributes, eventSpecificData);
                updatedEventData = isICMSContent(appContentId) ? Object.assign(updatedEventDataFromCMS, eventDataFromApp) : updatedEventDataFromCMS;
            }
            setEvarPageName(updatedEventData);
            setSiteSection(updatedEventData);
            setSiteEvent(updatedEventData);
            setEventName(updatedEventData);
            setInternalCampaignClickthroughs(updatedEventData);
            trackId(updatedEventData);
            setPageType(updatedEventData);
            setLob(updatedEventData);
          	setDynamicCount(updatedEventData);
            setProductDetails(updatedEventData);
            setAutheticationStatus(updatedEventData);
            setInternalSearchTerm(updatedEventData);
            setExternalTrackingCode(updatedEventData);
          	setFundingAmount(updatedEventData);
            setCitiProducts(updatedEventData);
          	setCCsId();	
            setCCID();
            setEmpFeedback();
            setCardUserType(updatedEventData);
          	setErrorHandler(error_handler);
            window.testDatalayer = [];
            window.testDatalayer.push(updatedEventData);
            console.log(eventData + "------>" + testDatalayer);
            validateDatalayer(updatedEventData);
            _trackAnalytics(updatedEventData);
            if (errFormat.errorLogs && errFormat.errorLogs.length > 0) {
                logTaggingError();
            }
        } catch (err) {
            addErrorToErrorLog(err);
          	error_handler = error_handler+';'+err;
        }
    }

    /**
     * Get values from data layer
     */
    function getValuesFromDl() {
        var eventParams = {};
        eventParams['url'] = setURL(); /*Calling the functionto make sure URL is updated properly*/
        eventParams['CUUID'] = _dl.CUUID;
        eventParams['user_id'] = _dl.user_id;
        eventParams['authentication_status'] = _dl.authentication_status;
        eventParams['p'] = _dl.p;
        eventParams['lob'] = _dl.lob;
        eventParams['login_status'] = _dl.login_status;
        eventParams['s_vi'] = _dl.s_vi;
        eventParams['customer_profile_string'] = _dl.customer_profile_string;
        eventParams['spa_page'] = _dl.spa_page;
        eventParams['domain'] = _dl.domain;
        eventParams['site_name'] = _dl.site_name;
        eventParams['platform_type'] = _dl.platform_type;
        eventParams['Platform'] = _dl.Platform;
        eventParams['language'] = _dl.language;
        eventParams['country'] = _dl.country;
        eventParams['cust_type'] = _dl.cust_type;	
        eventParams['cbol_ecm'] = _dl.cbol_ecm;
      	eventParams['ff_employeeFeedback'] = _dl.ff_employeeFeedback;
        if(_dl.internal_search_term) {
            eventParams['internal_search_term'] = _dl.internal_search_term;
        } 
        if (_dl.external_campaign_tracking_id) {
            eventParams['external_campaign_tracking_id'] = _dl.external_campaign_tracking_id;
        }
        if (_dl.internal_campaign_tracking_id) {
            eventParams['internal_campaign_tracking_id'] = _dl.internal_campaign_tracking_id;
        }
        if (_dl.cc_id) {
            eventParams['cc_id'] = _dl.cc_id;
        }
        if (_dl.products_details_view) {
            eventParams['products_details_view'] = _dl.products_details_view;
        }
        if (_dl.products) {
            eventParams['products'] = _dl.products;
        }
        return eventParams;
    }

    /**
     * Set pagename evar
     * @param {*} dataLayer
     */
    function setEvarPageName(dataLayer) {
        var removePublicSecure;
        if (typeof (_dl) != 'undefined' && typeof (_dl['evarPageName']) != 'undefined') {
            if (typeof (dataLayer.app_hierarchy) != 'undefined') {
                var clearAppWS = dataLayer.app_hierarchy.trim();
                var isNew = clearAppWS.startsWith("secure") || clearAppWS.startsWith("public");
                var checkVal = "us|web";
                if (checkVal == _dl.common_hierarchy) {
                    removePublicSecure = _dl.common_hierarchy;
                } else {

                    if (_dl.common_hierarchy.search("public") !== -1) {
                        removePublicSecure = _dl.common_hierarchy.replace("|public", "");
                    }

                    if (_dl.common_hierarchy.search("secure") !== -1) {
                        removePublicSecure = _dl.common_hierarchy.replace("|secure", "");
                    }
                }

                if (isNew) {
                    dataLayer['evarPageName'] = removePublicSecure.split('|').concat(dataLayer.app_hierarchy.split('|'));
                    dataLayer['common_hierarchy'] = removePublicSecure;
                } else {
                    if (typeof (_dl['common_hierarchy']) != 'undefined') {
                        dataLayer['evarPageName'] = _dl.common_hierarchy.split('|').concat(dataLayer.app_hierarchy.split('|'));
                    } else {
                        dataLayer['evarPageName'] = udoObject.common_hierarchy.split('|').concat(dataLayer.app_hierarchy.split('|'));
                    }
                    updatePublicOrSecure(dataLayer['evarPageName']);
                }
            }
        } else {
          	error_handler = error_handler+';evarPageName is not available';
            addErrorToErrorLog('Key evarPageName is not available from CMS');
        }
    }

    /**
     * Set SiteSection
     * @param {*} dataLayer
     */
    function setSiteSection(dataLayer) {
        var removePublicSecure;
        if (typeof (dataLayer.app_hierarchy) != 'undefined') {
            var clearAppWS = dataLayer.app_hierarchy.trim();
            var isNew = clearAppWS.startsWith("secure") || clearAppWS.startsWith("public");
            var splitAppHierarchy = dataLayer.app_hierarchy.split('|');
            splitAppHierarchy.splice(-1, 1);

            var checkVal = _dl.common_hierarchy.search("public");

            if (checkVal != -1) {
                removePublicSecure = _dl.common_hierarchy.replace("|public", "");
            } else {
                removePublicSecure = dataLayer.common_hierarchy;
            }

            if (typeof (_dl) != 'undefined' && typeof (_dl['site_hierarchy']) != 'undefined') {
                if (isNew) {
                    dataLayer['site_hierarchy'] = removePublicSecure.split('|').concat(splitAppHierarchy);
                } else {
                    if (typeof (_dl['common_hierarchy']) != 'undefined') {
                        dataLayer['site_hierarchy'] = _dl.common_hierarchy.split('|').concat(splitAppHierarchy);
                    } else {
                        dataLayer['site_hierarchy'] = udoObject.common_hierarchy.split('|').concat(splitAppHierarchy);
                    }
                    updatePublicOrSecure(dataLayer['site_hierarchy']);
                }
            } else {
              	error_handler = error_handler+';site_hierarchy is not available';
                addErrorToErrorLog('Key site_hierarchy is not available from CMS');
            }
        }
    }

    function updatePublicOrSecure(pageName) {
        var checkCoExistenceCookie = getCookie('NGACoExistenceCookie');
        var isPostLogin = sessionStorage.getItem('sessionPostBrandingStorage');
        if (checkCoExistenceCookie || isPostLogin) {
            pageName[2] = "secure";
        } else {
            pageName[2] = "public";
        }
    }

    /**
     * Set event name
     * @param {*} dataLayer Data layer
     */
    function setEventName(dataLayer) {
        var eventName = dataLayer['event name'];
        if (typeof (eventName) !== 'undefined') {
            dataLayer['event_name'] = eventName;
            delete dataLayer['event name'];
        }
    }

    /**
     * Set SiteEvent
     * @param {*} dataLayer
     */
    function setSiteEvent(dataLayer) {
        var splitSiteEvent;
        if (typeof (dataLayer) !== 'undefined' && typeof (dataLayer['event']) !== 'undefined') {
            splitSiteEvent = dataLayer.event.split('|');
            dataLayer['site_events'] = splitSiteEvent;
        } else if (typeof (dataLayer) !== 'undefined' && typeof (dataLayer['site_events']) !== 'undefined') {
            splitSiteEvent = dataLayer['site_events'].split('|');
            dataLayer['site_events'] = splitSiteEvent;
        } else {
            addErrorToErrorLog('Key site_events is not available from CMS');
        }

    }

    function setPageType(dataLayer) {
        if (window._dl && typeof (_dl['page_type']) !== 'undefined') {
            dataLayer['page_type'] = dataLayer.page_type;
        } else {
            addErrorToErrorLog('Key page_type is not available from CMS');
        }
    }

    function trackId(dataLayer) {
        if (typeof (_dl) !== 'undefined' && typeof (_dl['track_id']) !== 'undefined') {
            var randomNum = Math.floor(Math.random() * 10000000000),
                currentTime = new Date();
            dataLayer['track_id'] = randomNum + '|' + currentTime.toISOString();
        } else {
          	error_handler = error_handler+';track_id is not available';
            addErrorToErrorLog('Key track is not available from CMS');
        }
    }

    function setProductDetails(dataLayer) {
        if (dataLayer.products_details_view) {
            _dl.products_details_view = dataLayer.products_details_view;
        } else if (dataLayer.products) {
            _dl.products = dataLayer.products;
        } else {
            addErrorToErrorLog('Product Details Not available');
        }
    }

    /**
     * Set Line of business
     * @param {*} dataLayer Tagging data layer
     */
    var setLob = function (dataLayer) {
        
            var getEcmCookie = getCookie("CBOLECM");
            var isPost = dataLayer.evarPageName[2];
            if(getEcmCookie && getEcmCookie != "" && getEcmCookie != "undefined" && getEcmCookie != "null" && isPost == "secure") {
            var splitEcmCookie = getEcmCookie.split('-');
            dataLayer.lob = "bank";
            if ((splitEcmCookie[17] == "Y" || splitEcmCookie[13] == "Y" || splitEcmCookie[14] == "Y") && (splitEcmCookie[15] == "Y" || splitEcmCookie[5] == "Y") && (splitEcmCookie[16] == "Y")) {
                dataLayer.lob = "bank_cards_rel";
            } else if ((splitEcmCookie[15] == "Y" || splitEcmCookie[5] == "Y") && (splitEcmCookie[16] == "Y")) {
                dataLayer.lob = "cards_rel";
            } else if ((splitEcmCookie[17] == "Y" || splitEcmCookie[13] == "Y" || splitEcmCookie[14] == "Y") && (splitEcmCookie[16] == "Y")) {
                dataLayer.lob = "bank_rel";
            } else if ((splitEcmCookie[17] == "Y" || splitEcmCookie[13] == "Y" || splitEcmCookie[14] == "Y") && (splitEcmCookie[15] == "Y" || splitEcmCookie[5] == "Y")) {
                dataLayer.lob = "bank_cards";
            } else if ((splitEcmCookie[17] == "Y" || splitEcmCookie[13] == "Y" || splitEcmCookie[14] == "Y")) {
                dataLayer.lob = "bank";
            } else if ((splitEcmCookie[15] == "Y" || splitEcmCookie[5] == "Y")) {
                dataLayer.lob = "cards";
            } else if ((splitEcmCookie[30] == "Y")) {
                dataLayer.lob = "rel";
            }
          }else if(typeof(sessionStorage)!="undefined" && sessionStorage.getItem("sessionPostBrandingStorage")) {
            var sessionStorageObject = sessionStorage.getItem("sessionPostBrandingStorage");
           if(sessionStorageObject) {
              sessionStorageObject = JSON.parse(sessionStorageObject);
              if(sessionStorageObject.siteCatalystBean) {
                dataLayer.lob = sessionStorageObject.siteCatalystBean.lob;
                if(dataLayer.lob) {
                  dataLayer.lob = dataLayer.lob.toLowerCase();
                }
             }
           }
        }else {
            delete dataLayer["lob"];
        }
    }
  
    /**
     * Set all products that a customer has with Citi (bank, cards, mortgage)
     * @param {*} dataLayer Tagging data layer
     */
    function setCitiProducts(dataLayer){
        var sessionPostBrandingStorageObject = sessionStorage.getItem("sessionPostBrandingStorage");
            if (sessionPostBrandingStorageObject) {
                sessionPostBrandingStorageObject = JSON.parse(sessionPostBrandingStorageObject);
                var citiProducts = sessionPostBrandingStorageObject.siteCatalystBean.citiProducts;
                if(citiProducts){
                    var tmpCitiProducts = citiProducts.split('|');
                    if(tmpCitiProducts.length == 2){
                        citiProducts = tmpCitiProducts[1];
                    }
                   
                    dataLayer.citi_products = citiProducts;
                }
               
            }
    }

    /**
     * Populate a variable in the data layer the contains information that indicates if a card customer is a primary or secondary on the account 
     * @param {*} dataLayer Tagging data layer
     */
    function setCardUserType(dataLayer){
        var sessionPostBrandingStorageObject = sessionStorage.getItem("sessionPostBrandingStorage");
        if (sessionPostBrandingStorageObject) {
            sessionPostBrandingStorageObject = JSON.parse(sessionPostBrandingStorageObject);
            var userType = sessionPostBrandingStorageObject.siteCatalystBean.userType;
            dataLayer.card_user_type = userType;
        }
    }
    function setLobOfBankCardAndRel(dataLayer, splitEcmCookie) {
        if ([splitEcmCookie[17], splitEcmCookie[13], splitEcmCookie[14]].indexOf('Y') >= 0) {
            dataLayer.lob = "bank";
        } else if ([splitEcmCookie[15], splitEcmCookie[5]].indexOf('Y') >= 0) {
            dataLayer.lob = "cards";
        } else if ((splitEcmCookie[30] === "Y")) {
            dataLayer.lob = "rel";
        }
    }

    function setLobSessionStorage(dataLayer) {
        if (sessionStorage.getItem("sessionPostBrandingStorage")) {
            var sessionStorageObject = JSON.parse(sessionStorage.getItem("sessionPostBrandingStorage"));
            if (sessionStorageObject.siteCatalystBean) {
                dataLayer.lob = sessionStorageObject.siteCatalystBean.lob;
                if (dataLayer.lob) {
                    dataLayer.lob = dataLayer.lob.toLowerCase();
                }
            }
        }
    }
  
    function getDefaultData(dl){
        var defaultFields = ["country","common_hierarchy","evarPageName","site_hierarchy","test_id","action_type","CCSID","cust_type","spa_page","domain","ccid","CUUID","site_name","customer_profile_string","s_vi","platform_type","url","authentication_status","language","authentication_type","user_id","track_id","user_agent","lob","p","cbol_ecm","cbol_ecm_01_25", "cbol_ecm_26_50","cbol_ecm_51_75","card_user_type","Platform","responsive_design_data","ff_employeeFeedback"];
        if (window._prev_dl){
          var key = "";
          for (key in dl) {

            if(!defaultFields.includes(key)){
              delete dl[key];
            }

          }
        }
        window._dl = dl;
    }

    function setCCsId() {
        var ccsId = getCcsId();
        if (typeof (ccsId) !== 'undefined') {
            _dl['user_id'] = ccsId;
        } else {
          	error_handler = error_handler+';CCSID is not available';
            addErrorToErrorLog('Key user_id is not available from CMS');
        }
    }

    function setSviCookie() {
        var s_vi = getCookie('s_vi');
        if (typeof (_dl['s_vi']) !== 'undefined') {
            _dl['s_vi'] = s_vi;
        } else {
            addErrorToErrorLog('Key s_vi is not available from CMS');
        }
    }
  
  	function setDynamicCount(dataLayer){
        if(_dl.event && _dl.event.indexOf("dynamic_content_appearance_count")!= -1){
            var l = _dl.event.length;
            var n = _dl.event.indexOf("=");
            if (n != -1){
                _dl.dynamic_content_appearance_count = _dl.event.substring(n+1, l);
            }
        }
    }

    function setPlatformType(userAgent) {
        if (typeof (_dl['platform_type']) !== 'undefined') {
            if (/Android|iPad|iPhone|iPod/i.test(userAgent)) {
                _dl['platform_type'] = "Mobile Responsive Page";
            }
            if (/Windows NT|Edge|Macintosh|Ubuntu|Trident/i.test(userAgent)) {
                _dl['platform_type'] = 'Web browser';
            }
            if (/CrKey|Roku|AFTS|Nexus Player|AppleTV/i.test(userAgent)) {
                _dl['platform_type'] = 'iOT';
            }
        } else {
            addErrorToErrorLog('Key platform_type is not available from CMS');
        }
    }

    function setCuuIdCookie() {
        var cuu_id = getCookie('CUUID');
        if (typeof (_dl['CUUID']) !== 'undefined') {
            _dl['CUUID'] = cuu_id;
        } else {
            addErrorToErrorLog('Key CUUID is not available from CMS');
        }
    }

    function setCustomerProfileString() {
        var custProfStr = getCookie("CBOLECM");
        if (typeof (_dl['customer_profile_string']) !== 'undefined' && custProfStr) {
            _dl['customer_profile_string'] = custProfStr.replace(/-/g, "");
        } else {
          	error_handler = error_handler+';CBOLECM is not available or not set in cookie';
            addErrorToErrorLog('Key CBOLECM is not available  from CMS or it is not set in cookie');
        }
    }

    function setURL() {
        var urlSource = window.location.href;
        var check = urlSource.search("JFP_TOKEN");
        var url = urlSource;
        var removeJfp = urlSource.slice(0, check - 1);
        if (check !== -1) {
            url = removeJfp;
        }
        if (typeof (_dl['url']) !== 'undefined') {
            _dl['url'] = url;
            return _dl['url'];
        } else {
            addErrorToErrorLog('Key url is not available from CMS');
        }
        return url;
    }

    /**
     * Set user agent
     */
    function setUserAgent() {
        var userAgent = navigator.userAgent;
        if (typeof (_dl['user_agent']) !== 'undefined') {
            _dl['user_agent'] = userAgent;
        } else {
            addErrorToErrorLog('Key user_agent is not available from CMS');
        }
    }

    /**
     * Set page load time
     * @param {*} loadTime
     */
    var setPageLoadTime = function (loadTime) {
        // Load time passed by window.onload function to avoid errors
        if (typeof (_dl['page_load_time']) != 'undefined') {
            _dl['page_load_time'] = loadTime;
        } else {
            addErrorToErrorLog('Key page_load_time is not available from CMS');
        }
    }

    function setDomain() {
        if (typeof (_dl['domain']) !== 'undefined') {
            _dl['domain'] = window.location.hostname;
            validateKey('domain');
        } else {
            addErrorToErrorLog('Key domain is not available from CMS');
        }
    }

    function setAutheticationStatus(dataLayer) {
        var coExistenceCookie = getCookie('NGACoExistenceCookie');
        var isPostLogin = sessionStorage.getItem('sessionPostBrandingStorage');
        if (coExistenceCookie || isPostLogin) {
            dataLayer['authentication_status'] = "authenticated";
            dataLayer['login_status'] = 'customer';
        } else {
            dataLayer['authentication_status'] = "not authenticated";
            dataLayer['login_status'] = 'prospect';
        }
    }
  
    function setInternalSearchTerm(dataLayer) {
        var initialInternalSearchTerm =  _dl['internal_search_term'] || dataLayer['internal_search_term'];
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regexSsn = /^\d{3}-?\d{2}-?\d{4}$/;
        var regexFourDigitSequence = /[0-9]{4}/;

        if(initialInternalSearchTerm !== null && initialInternalSearchTerm !== undefined && initialInternalSearchTerm !== ""){
            if (regexEmail.test(initialInternalSearchTerm.split('|')) || initialInternalSearchTerm.indexOf('@')) {
                var str = initialInternalSearchTerm.split('');
                var maskArr = [];
                var len = str.indexOf("@");
                // mask email
                str.forEach(function (item, pos) {
                    (pos < 0 && pos <= len - 2 ? maskArr.push('x') : maskArr.push(str[pos]));
                })
                initialInternalSearchTerm = maskArr.join('');
            }
            if (regexFourDigitSequence.test(initialInternalSearchTerm) || regexSsn.test(initialInternalSearchTerm)) {
                // mask ssn
                initialInternalSearchTerm = initialInternalSearchTerm.replace(/\d/g, '*')
            }
            _dl['internal_search_term'] = initialInternalSearchTerm;
        }
        
    }

    function setLanguage() {
        var pageLang = getCookie('locale');
         if(pageLang == null || pageLang == undefined){
             _dl['language'] = "en_US";     
        } else if (typeof (_dl['language']) !== 'undefined' || _dl['language' != null]) {            
            _dl['language'] = pageLang.includes('en_US') ? "en_US" : "es_US";
        }else {
            addErrorToErrorLog('Key language is not available from CMS');
        }
    }
  
    function setCustType(){	
        var sessionPostStorageObject = sessionStorage.getItem("sessionPostBrandingStorage");	
            if (sessionPostStorageObject) {	
                sessionPostStorageObject = JSON.parse(sessionPostStorageObject);	
                if (sessionPostStorageObject.isCitigold == "Y"){	
                    _dl['cust_type'] = "CITIGOLD";	
                } else if (sessionPostStorageObject.isBusinessCust == "Y"){	
                    _dl['cust_type'] = "SBOB";	
                } else if (sessionPostStorageObject.isCitipriority == "Y"){	
                    _dl['cust_type'] = "CITIPRIORITY";	
                } else {	
                    _dl['cust_type'] = "CITIBLUE";	
                }	
            }	
    }

    function setEmpFeedback(){	
        var sessionPostStorageObject = sessionStorage.getItem("sessionPostBrandingStorage");
      	_dl['ff_employeeFeedback']="false";	
        if (sessionPostStorageObject) {	
            sessionPostStorageObject = JSON.parse(sessionPostStorageObject);	
            if (sessionPostStorageObject.entitlementFeatureFlags !== null && sessionPostStorageObject.entitlementFeatureFlags !== undefined && sessionPostStorageObject.entitlementFeatureFlags.featureSet!==undefined && sessionPostStorageObject.entitlementFeatureFlags.featureSet!==null){
                if (sessionPostStorageObject.entitlementFeatureFlags.featureSet.length>0){
                    var sessObj = sessionPostStorageObject.entitlementFeatureFlags.featureSet;
                    var t = sessObj.filter(function(e){ return "FS21Redesign" === e.id  && e.isVisible});
                    if(t!==null && t.length>0){
                        var n=t[0].features.filter(function(e){ return "ff_employeeFeedback" === e.id});
                        if(n!==0 && n.length>0){
                            var res = n[0].isVisible;
                            if (res === true){
                                _dl['ff_employeeFeedback']="true";
                            } else if (res === false){
                                _dl['ff_employeeFeedback']="false";
                            }
                        }
                    }
                }
            }	
        }
    }
  
  	function setFundingAmount(dataLayer){
        if(_dl.event && _dl.event.indexOf("funding_amount")!= -1){
          var l = _dl.event.length;
          var n = _dl.event.indexOf("=");
          var m = _dl.event.indexOf("|", n);
          if (m === -1){
            _dl.funding_amount = _dl.event.substring(n+1,l);
          } else{
            _dl.funding_amount = _dl.event.substring(n+1,m);  
          }
      }  
    }
  
    function setECMCookie(){	
        var captureECM = getCookie("CBOLECM");	
        if(captureECM && captureECM != "" && captureECM != "undefined" && captureECM != "null") {	
            var ecm26=0, ecm51=0, index25=0, index50=0;
            for (var i=0; i<captureECM.length; i++){
                if(captureECM[i] == "-" && ecm26<25){
                    ecm26++;
                    index25 = i;
                }
            }
            for (var i=index25+1; i<captureECM.length; i++){
                if(captureECM[i] == "-" && ecm51<25){
                    ecm51++;
                    index50 = i;
                }   
            }
          	_dl['cbol_ecm_01_25'] = captureECM.substring(0, index25);
            _dl['cbol_ecm_26_50'] = captureECM.substring(index25+1, index50);
            _dl['cbol_ecm_51_75'] = captureECM.substring(index50+1);
        }	
    }

    function setCountry() {
        var countryCode = getCookie('locale');
        if (countryCode === null || countryCode === "") {
            countryCode = "US";
        } else {
            countryCode = countryCode.split('_')[1].toLowerCase();
        }
        if (typeof (_dl['country']) !== 'undefined') {
            _dl['country'] = countryCode;
        } else {
            addErrorToErrorLog('Key country is not available from CMS');
        }
    }

    /**
     * Set SPA value
     */
    function setSpaValue() {
        window._dl['spa_page'] = (typeof (isSpaPage) !== 'undefined') ? "true" : "false";
    }
  
    function setExternalTrackingCode() {
        var subject = window.location.href;	
        if(subject.search('cmp') !== -1) {	
            let match = /cmp=([A-Za-z0-9./-\W_]+)&targetid/i.exec(subject);	
          	if (match && match != "" && match != "undefined" && match != "null"){
            	_dl.external_campaign_tracking_id = match[1];
            }
        } else if (subject.search('CMP') !== -1) {
            let match = /CMP=([A-Za-z0-9./-\W_]+)&targetid/i.exec(subject);	
          	if (match && match != "" && match != "undefined" && match != "null"){
            	_dl.external_campaign_tracking_id = match[1];
            }
        } else {
            console.log("key external campaign tracking code is not available");
        }
    }

    function setInternalTrackingCode() {
        var intUrl1 = window.location.href;
        var intUrl = intUrl1.toLowerCase();
        var len = intUrl.length;
        var intCode;
        var intIndexCode;
      	if (intUrl.search("intc") !== -1){
          intIndexCode = intUrl.search("intc");
          intCode = intUrl.slice(intIndexCode + 5, len);
        }
      	if (intCode!== undefined && intCode.includes("&")){  
          var scrapExtra = intCode.search("&");
          intCode = intCode.slice(intCode, scrapExtra);
        }
        if (intCode) {
            _dl.internal_campaign_tracking_id = intCode;
        } else {
            console.log("key internal campaign tracking code is not available");
        }
    }
    
     var setInternalCampaignClickthroughs = function (dataLayer) {
        var internalCampaignTrackingCode = dataLayer.internal_campaign_tracking_id
        if(internalCampaignTrackingCode) {
            var siteEvents = dataLayer['site_events'];
            var eventName = dataLayer['event'];
            if(typeof (siteEvents) !== 'undefined') {
                dataLayer['site_events'] = dataLayer['site_events'] + "," + 'internal_campaign_clickthrough'
            } else {
                dataLayer['site_events'] = 'internal_campaign_clickthroughs'
            }
  
            if((typeof (eventName) !== 'undefined')) {
                dataLayer['event'] = dataLayer['event'] + "|" + 'internal_campaign_clickthrough'
            } else {
                dataLayer['event'] = 'internal_campaign_clickthroughs'
            }
        }
    }
     
    function setErrorHandler(errVal){
        if (errVal!==''){
            _dl.tagging_error_handler = errVal;
        }
    }
    /**
     * Set responsive data
     * @param {*} data
     */
    function setResponsiveData(data) {
        var platform = getPlatform();
        var isResponsivePage = (typeof (isSpaPage) !== 'undefined') ? "Yes" : "No";
        _dl['responsive_design_data'] = window.innerWidth + "|" + platform + "|" + isResponsivePage;
        _dl['Platform'] = platform;
    }

    function setCustomerProspect(data) {
        var isPostLogin = sessionStorage.getItem('sessionPostBrandingStorage');
        _dl['login_status'] = (checkExistence || isPostLogin) ? 'customer' : 'prospect';
    }

    function setCCID(id) {
      	var custCCID = ccidCookieManager.getCookie();
      	if (custCCID){
          window._dl['ccid'] = custCCID;
        } else{
          window._dl['ccid'] = '';
        }
    }

    /**
     * Check if the user is logged in based on cookie 'NGACoExistenceCookie'
     */
    function isLoggedIn() {
        var checkCcsid = getCookie('NGACoExistenceCookie');
        var isPostLogin = sessionStorage.getItem('sessionPostBrandingStorage');
        return (checkCcsid || isPostLogin) ? true : false;
    }

    /**
     * Get platform that the script is running 'Mobile' | 'Desktop'
     */
    function getPlatform() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? 'Mobile' : 'Desktop';
    }


    /**
     * Validate data layer
     * @param {*} dataLayerObject
     */
    function validateDatalayer(dataLayerObject) {
        Object.keys(dataLayerObject).forEach(function (dataLayerkey) {
            validateKey(dataLayerObject, dataLayerkey);
        });
    }

    /**
     * Validate Data Type
     * @param {*} validateObject
     * @param {*} dataLayerObject
     * @param {*} keyName
     * @param {*} i
     */
    function validateDataType(validateObject, dataLayerObject, keyName, i) {
        var valTypeObject = validateObject[keyName];
        var valType = validateObject[keyName].validationTypes[i];
        var keyNotMatched = keyName + " is not matched";
        if (valType === 'dataType' && typeof (dataLayerObject[keyName]) !== valTypeObject.expectedDataType) {
            addErrorToErrorLog("Data type of " + keyNotMatched, keyName, dataLayerObject[keyName], valTypeObject.expectedDataType);
        } else if (valType === 'length' && dataLayerObject[keyName].length !== valTypeObject.expectedLength) {
            addErrorToErrorLog("Length of " + keyNotMatched, keyName, dataLayerObject[keyName], valTypeObject.expectedLength);
        } else if (valType === 'values' && valTypeObject.expectedValues.indexOf(dataLayerObject[keyName]) === -1) {
            addErrorToErrorLog("Value of " + keyNotMatched, keyName, dataLayerObject[keyName], valTypeObject.expectedValues);
        }
    }

    /**
     * Validate data layer keys
     * @param {*} dataLayerObject
     * @param {*} keyName
     */
    function validateKey(dataLayerObject, keyName) {
        var validateObject = window.configs.validationRule;
        if (typeof (validateObject[keyName]) !== 'undefined') {
            for (var i = 0; i < validateObject[keyName].validationTypes.length; i++) {
                validateDataType(validateObject, dataLayerObject, keyName, i);
            }
        }
    }

    /**
     * Add error to Error Log array
     * @param {*} error
     * @param {*} errorFieldName
     * @param {*} errorFieldValue
     * @param {*} validFormat
     */
    function addErrorToErrorLog(error, errorFieldName, errorFieldValue, validFormat) {
        errFormat.pageName = (window._dl) ? window._dl['evarPageName'] : "";
        errFormat.errorLogs.push({
            "errorDescription": error,
            "errorFieldName": errorFieldName || "Unknown",
            "errorFieldValue": errorFieldValue || "Unknown",
            "validFormat": validFormat || "Unknown",
            "failedUrl": window.location.href
        });
    }

    return publicObject;
}());