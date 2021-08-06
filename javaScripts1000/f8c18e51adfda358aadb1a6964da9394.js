CHASE.TagManager.midasActivity = function(TagId, AppID, TagMap, productId, sourceCode) {

  var additionalParams = {
      midas : {}
  };

  if (productId && productId != null) additionalParams.midas.productId = productId;
  if (AppID && AppID != null) additionalParams.midas.AppID = AppID;
  if (TagMap && TagMap != null) additionalParams.midas.TagMap = TagMap;
  if (TagId && TagId != null) additionalParams.midas.TagId = TagId;
  if (sourceCode && sourceCode != null) additionalParams.midas.sourceCode = sourceCode;

  var buildAndInvoke = function(EnvID) {

    var pixelUrl = "https://" + EnvID;

      pixelUrl = pixelUrl + "pageID={midas.TagId}";
      pixelUrl = pixelUrl + "&ssv_tmc={midas.TagMap}";
      pixelUrl = pixelUrl + "&ssv_v1st={v1st}";
      pixelUrl = pixelUrl + "&ssv_pfid={persona.pfid}";
      pixelUrl = pixelUrl + "&ssv_productid={midas.productId}";
      pixelUrl = pixelUrl + "&ssv_src={midas.sourceCode}";
      pixelUrl = pixelUrl + "&ssv_eci={persona.ECI}";
      pixelUrl = pixelUrl + "&ssv_eid={midas.TagMap}_{midas.productId}_{midas.sourceCode}";

      CHASE.TagManager.invokePixelTag(pixelUrl, additionalParams);
      
  };

  var productId = productId || '{midas.productId}';
    var sourceCode = sourceCode || '';

    var EnvID_midas = 'midas-qa.chase.com/stream/tag?';
    
    if (CHASE.TagManager.clientVars.env == 'prod') {
      
      EnvID_midas = 'midas.chase.com/stream/tag?';
      
    } else if (CHASE.TagManager.clientVars.env == 'dev') {
      
      EnvID_midas = 'midas-dev2.chase.com/stream/tag?';
      
    } else if (CHASE.TagManager.clientVars.env == 'load') {
      
        EnvID_midas = 'midas-perf.chase.com/stream/tag?';
        
    }

    buildAndInvoke(EnvID_midas);

};
/*
	Last updated :10/26/2016  
*/

CHASE.TagManager.bluekai = function(pg) {

    var additionalParams = {
            bluekai : {}
    };
    var iframeURL= "https://stags.bluekai.com/site/39254?limit=10&ret=html&";

    iframeURL= iframeURL+ "phint=v1st%3D{v1st}";
    iframeURL= iframeURL+ "&phint=ECI%3D{persona.ECI}";
	iframeURL= iframeURL+ "&phint=CAT%3D{CAT}";
	iframeURL= iframeURL+ "&bknms=1";	
	if(pg){
		iframeURL= iframeURL+"&phint=pg%3D"+pg;
	}
    iframeURL= CHASE.TagManager.replacePlaceholder(iframeURL, additionalParams);	

    if(CHASE.TagManager.testMode){
    CHASE.TagManager.requestPixel(iframeURL);
    }else{    
    var bluekaiFrame = document.createElement('iframe');
    bluekaiFrame.style.display = "none";
    bluekaiFrame.src = iframeURL;
    document.body.appendChild(bluekaiFrame)
    }
};

CHASE.TagManager.insightAdImpression = function(wa_aid, pageId, placementId) {

    if(CHASE && CHASE.analytics)CHASE.analytics.setPageDotUrl(window.location.href );

    var dotDomain = CHASE.analytics.config.PageDotDomain || '',
    
    dotImage = CHASE.analytics.config.PageDotImagePath || '',
    
    pixelUrl = dotDomain+dotImage+"&wa_cb={random}",
	
	jp_aid_p = pageId? "&jp_aid_p="+pageId+"/"+placementId : "" ;
    
	pixelUrl += "&wa_aid_i="+wa_aid+jp_aid_p+"&wa_tp=13&wa_uri="+document.location;
	
    pixelUrl = CHASE.TagManager.invokePixelTag(pixelUrl);
    
    };
CHASE.TagManager.ExtensionsLoaded = true; 
CHASE.TagManager.insightAdClick = function(wa_aid, pageId, placementId) {

    if(CHASE && CHASE.analytics)CHASE.analytics.setPageDotUrl(window.location.href );

    var dotDomain = CHASE.analytics.config.PageDotDomain || '',
    
    dotImage = CHASE.analytics.config.PageDotImagePath || '',
    
    pixelUrl = dotDomain+dotImage+"&wa_cb={random}",
	
	jp_aid_p = pageId? "&jp_aid_p="+pageId+"/"+placementId : "" ;
    
    pixelUrl += "&wa_aid_lnk="+wa_aid+jp_aid_p+"&wa_tp=13&wa_uri="+document.location;
    
    pixelUrl = CHASE.TagManager.invokePixelTag(pixelUrl);
    
    };
CHASE.TagManager.insightLinkTrack = function(linkName) {

	if(CHASE && CHASE.analytics)CHASE.analytics.trackCustomLink(linkName);

};
CHASE.TagManager.insightFormTrack = function(formName) {
	
	if(formName){		
		formName=document.forms[formName];
		if(CHASE && CHASE.analytics)CHASE.analytics.initLinkFormTracking(formName);
	}

};
CHASE.TagManager.audienceSyndication = function() {

  var getJSONP = function (url, success) {
            var ud = '_' + (+new Date()), script = document.createElement('script'), head = document.getElementsByTagName('head')[0] || document.documentElement;
            window[ud] = function(data) {
                head.removeChild(script);
                success && success(data.Nodes);
            };
            script.src = url.replace('callback=?', 'callback=' + ud);
            head.appendChild(script);
    },
    buildAndFireSegServiceURL = function (env) {

      var eci, _uOverride, segServiceURL;

      segServiceURL = "https://"+ env +"/wsb/15629/poe/59242226?_u=[ECI]&Debug=false&Test=false&ContentType=application/json&TransactionID=eee-444";

      var eci = CHASE.TagManager.replacePlaceholder("{persona.ECI}") || 'null';
    if(eci == "null"){
    _uOverride = "?_u="+'';
    }else{
    _uOverride = "?_u="+eci;
    }
    segServiceURL = segServiceURL.replace('?_u=[ECI]',_uOverride);
    var ssvpfid = CHASE.TagManager.replacePlaceholder("{persona.pfid}") || 'null';

    var parsonaParam='"ssv_zip":"{persona.zip}", "ssv_product":"", "ssv_locale":"{persona.locale}", "ssv_cigseg":"{persona.segment}"';

    parsonaParam=CHASE.TagManager.replacePlaceholder(parsonaParam);
    var documentmode=document.compatMode, isIE8 = window.navigator.userAgent.indexOf("MSIE 8.0");
    if (segServiceURL) {
      var requestDataString;
      if (isIE8 > 0 && documentmode==='BackCompat'){
        var requestObjData = "{";
            requestObjData += '"UserAgent":"",';
            requestObjData += '"GUID":"'+ssvpfid+'",';
            requestObjData += '"IPAddress":"",';
            requestObjData += '"XP_UID":"",';
            requestObjData += '"URL":"'+encodeURIComponent(location.href)+'",';
            requestObjData += '"Referrer":"'+encodeURIComponent(encodeURIComponent(document.referrer))+'",';
            requestObjData += '"ForceUIDMatch":false,';
            requestObjData += '"CreateXPUID":true,';
            requestObjData += '"Data":{';
            requestObjData += '"ssv_pfid":"'+ssvpfid+'",';
            requestObjData += parsonaParam;
            requestObjData += '}';
            requestObjData +='}';

        requestDataString=requestObjData;

      }else{

        var requestObjData = {
          "UserAgent":"",
          "GUID":ssvpfid,
          "IPAddress":"",
          "XP_UID":"",
          "URL":encodeURIComponent(location.href),
          "Referrer":encodeURIComponent(encodeURIComponent(document.referrer)),
          "ForceUIDMatch":false,
          "CreateXPUID":true,
          "Data":{
            "ssv_pfid":ssvpfid,
            "ssv_zip":CHASE.TagManager.replacePlaceholder("{persona.zip}"),
            "ssv_product":"",
            "ssv_locale":CHASE.TagManager.replacePlaceholder("{persona.locale}"),
            "ssv_cigseg":CHASE.TagManager.replacePlaceholder("{persona.segment}")
             }
            };

        requestDataString = JSON.stringify(requestObjData);
      }

      segServiceURL=segServiceURL+"&RequestObject="+requestDataString+"&callback=?";
      getJSONP(segServiceURL,generatePixelUrl);
    }

    },
  midasAudiences = function () {

    var EnvID_midas = 'midas-qa.chase.com';

    if (CHASE.TagManager.clientVars.env == 'prod') {

      EnvID_midas = 'midas.chase.com';

    }

    buildAndFireSegServiceURL(EnvID_midas);

  },
  generatePixelUrl = function (audiences) {
    var pixelUrl = "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1036322744/?value=0&label=AgenCNqg-QMQuI-U7gM&guid=ON&script=0&url="+document.domain;
    pixelUrl=pixelUrl+encodeURIComponent("/audiences/")+audiences;
    pixelUrl = CHASE.TagManager.invokePixelTag(pixelUrl);
  };

  midasAudiences();
};
