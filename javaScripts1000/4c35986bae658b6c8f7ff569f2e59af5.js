_1627951973934({
  init: function () {
    SIP.Multi.setParams(this.params);
    SIP.Multi.processParams();

    var settings = SIP.Multi.getWinSettings();
    SIP.Params.winStyle = { zIndex: settings.z.toString(10),width: settings.width.toString(10) + 'px',position: 'absolute',left: settings.x.toString(10) + 'px',top: settings.y.toString(10) + 'px',backgroundColor:'#FFF' };

    SIP.Util.refreshSession();
    SIP.Data.init();

    if (SIP.Params.pitchType === 51) {
      SIP.Multi.init();
    } else if (SIP.Params.persistentWithInvite){
      SIP.Multi.init();
      SIP.Event.bindEvents({
        callback: SIP.Multi.init
      });
      SIP.Event.monitorEvents();
    }else {
      SIP.Event.bindEvents({
        callback: SIP.Multi.init
      });
      SIP.Event.monitorEvents();
    }
  },
  params: {
    addBizrateLogoLinkFlag: "0",
    altImageText: "",
    publisherApiUrl: "https://publisher.bizrate.com/submit",
    modalType: "",
    backgroundImageUrl: "",
    barCloseStyle: { cursor: 'pointer',float: 'right',height: '100%',fontSize: '19px',color: '#8e8e8e',fontFamily: 'Arial, Helvetica, sans-serif',textDecoration: 'none',lineHeight: '30px',fontWeight: 'bold' },
    barCloseText: "X",
    barStyle: { backgroundColor: '#FFF',height: '30px',cursor: 'default',lineHeight: '30px',color: '#FFF',fontSize: '13px',paddingLeft: '10px',paddingRight: '10px',fontFamily: 'Arial, Helvetica, sans-serif' },
    barTitleText: "",
    barTitleStyle: { whiteSpace:'nowrap', width: '180px', float: 'left',height: '100%',fontWeight: 'bold',fontFamily: 'Arial, Helvetica, sans-serif',fontSize: '12px',color: '#FFF',lineHeight: '26px',textAlign:'left' },
    brandStyle: {  },
    brandText: "",
    bodyStyle: { backgroundColor: '#FFF',cursor: 'pointer', height:'445px' },
    bounce: "false",
    bounceAfterTrigger: "",
    bounceDelay: "",
    buttonImageUrl: "",
    buttonStyle: {  },
    buttonHeight: "",
    buttonWidth: "",
    buttonX: "",
    buttonY: "",
    cdnResourcePathHttp: "http://resource.bizrate.com/static/d053709f",
    cdnResourcePathHttps: "https://resource.bizrate.com/static/d053709f",
    closeWindowText: "X",
    combinationTrigger: "",
    declineText: "",
    flow: "746",
    deviceType: "DESKTOP",
    frequency: "1814400",
    gaEnabled: "",
    headerStyle: { width: '500px', textDecoration: 'none', position: 'absolute', top: '52px', left: '2px', fontFamily: 'arial,sans-serif', textAlign: 'center', fontSize: '22px', fontWeight: 'bold', fontVariant: 'normal', lineHeight: '24px', textAlign: 'center', overflow: 'visible', color: '#444', height: '30px', maxWidth: 'none' },
    headerText: "<h1 id=\"brdialog-label\" class=\u201Dbrshrink_text\u201D style=\"font-size:22px;margin-top: 20px;color:rgb(68, 68, 68);font-weight:bold;\">Will you tell us about your visit?<\/h1>",
    incentiveStyle: { width: '400px', textDecoration: 'none', position: 'absolute', top: '150px', left: '50px', textAlign: 'center', fontFamily: 'Arial,sans-serif', color: '#444', fontVariant: 'normal', lineHeight: '28px', fontSize: '20px', maxWidth: 'none' },
    incentiveText: "Please take a few minutes to answer some simple questions.",
    incentiveTextAlt: "Please take a few minutes to answer some simple questions.",
    invitationStyle: "",
    invite: "1",
    inviteImageUrl: "https://resource.bizrate.com/eval/survey/invite_template/request_3.png",
    inviteImageUrlNoLogo: "https://resource.bizrate.com/eval/survey/invite_template/request_3.png",
    inviteHeight: "425",
    inviteWidth: "500",
    latitude: "22.290802",
    longitude: "114.150085",
    logoResourcePathHttp: "http://resource.bizrate.com/merchant/",
    logoResourcePathHttps: "https://resource.bizrate.com/merchant/",
    merLogoSize: "2",
    merLogoStyle: { top:'2px', left:'150px', position:'absolute', border:'0px none', display:'inline' },
    mid: 1002331,
    originMerchantName: "Parents",
    opacity: "50",
    osPlatform: "",
    osVersion: "",
    pageId: "",
    pageScrollPercentage: "",
    pageTitle: "Tell Us What You Think!",
    pageViews: "2",
    percentage: "3",
    persistentImage: "",
    pitchType: "22",
    posX: "",
    posY: "",
    positionH: "",
    positionV: "",
    resolutionHeight: "",
    resolutionWidth: "",
    respondentId: "1627951977123590669",
    sessionId: "456894948580150777",
    surveyIframeEnabled: "",
    surveyIframeHeight: "",
    surveyIframeOpacity: "",
    surveyIframePosition: "",
    surveyIframeWidth: "",
    surveyTypeId: "7",
    surveyType: "multi",
    surveyUrl: "https://survey.bizrate.com/jfe/form/SV_9Bk9hCXNM8T4esS?br=16279519667917898145720739904002962&sessionId=456894948580150777&mid=1002331&merchantName=Parents&flow=746&rf_code=sur&testIds=SIP&browserLanguage=en_US&C1p=2&osAndVersion=OS+X&Q_JFE=1&BOPIS=1&browserAndVersion=Firefox+52.0&C2127g=-1&browserType=Browser&segment=&lat=22.290802&lon=114.150085&templateId=409&allocationId=1e4a5400-d366-401e-b996-afb8c7c7dc03",
    sweepstakesApiGatewayUrl: "https://sweepstakes.bizrate.com/email",
    sweepstakesEndDateTime: "August 13, 2021",
    templateId: "409",
    testHitBypassed: false,
    timeOnPage: "",
    timeOnSite: "",
    touchpointURL: "https://insights.bizrate.com/inviteLog?id=1002331&product_id=7&flow=746&testIds=SIP&ipAddress=119.236.101.168&userAgent=Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10.15%3B+rv%3A52.0%29+Gecko%2F20100101+Firefox%2F52.0&referrer=https%3A%2F%2Fwww.parents.com%2F&templateId=409",
    triggerReset: "1800",
    userId: "",
    zIndex: "1000000",
    zipCode: "",
    dType:  "NON_MOBILE",
  }
});
