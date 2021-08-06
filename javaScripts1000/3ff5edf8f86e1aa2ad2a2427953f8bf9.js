jQuery.urlParam=function(name,source){var locationSource=source||window.location.href;var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(locationSource);if(results===undefined||results===null||results.length==0){return 'noType';}
else{return results[1];}}
if(document.location.search.indexOf("mode=DEMO")!=-1)
document.head.insertAdjacentHTML("beforeEnd","<meta name='robots' content='noindex' />");var enFields={};var petaEN={isMobile:{Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return(petaEN.isMobile.Android()||petaEN.isMobile.BlackBerry()||petaEN.isMobile.iOS()||petaEN.isMobile.Opera()||petaEN.isMobile.Windows());}},pageBuilder:{fieldClassPrefix:"en__field--",getENValidation:function(){try{return EngagingNetworks.require._defined.enValidation.validation;}catch(e){return null;}},getPageENValidation:function(){return EngagingNetworks;},getFieldByName:function(name){var fieldParent=jQuery("[name='"+name+"']").parents("div.en__field");if(fieldParent.length){var classes=fieldParent[0].classList.toString().split(" ");for(var i=classes.length-1;i>=0;i--){if(classes[i].indexOf(petaEN.pageBuilder.fieldClassPrefix)>-1){var value=classes[i].substring(petaEN.pageBuilder.fieldClassPrefix.length);if(jQuery.isNumeric(value))
return value;}}}
return "-1";},getFieldValidator:function(fieldId){var en=petaEN.pageBuilder.getENValidation();for(var i=en.validators.length-1;i>=0;i--){if(en.validators[i].field==fieldId){return en.validators[i];}}
return null;},getFieldIdByMessage:function(message){var en=petaEN.pageBuilder.getPageENValidation();for(var i=en.validators.length-1;i>=0;i--){if(en.validators[i].errorMessage==message){return en.validators[i].componentId;}}
return null;},getFieldContainer:function(fieldId){if(jQuery.isNumeric(fieldId))
return petaEN.pageBuilder.fieldClassPrefix+fieldId;else
return petaEN.pageBuilder.fieldClassPrefix+petaEN.pageBuilder.getFieldByName(fieldId);},isENFieldValid:function(fieldId){var enf=petaEN.pageBuilder.getFieldValidator(fieldId);if(enf!=null){return enf.test();}
return true;},isErrorVisible:function(fieldId){var container=petaEN.pageBuilder.getFieldContainer(fieldId);var containerList=jQuery("."+container);if(containerList.length&&jQuery(containerList).has(".en__field__error").length>0)
return true;return false;},scrollToFirstError:function(){var scrollTop=jQuery(document).scrollTop();var targetClass="";var en=petaEN.pageBuilder.getENValidation();for(var i=en.validators.length-1;i>=0;i--){if(petaEN.pageBuilder.isErrorVisible(en.validators[i].field)){var containerClass=petaEN.pageBuilder.getFieldContainer(en.validators[i].field);var container=jQuery("."+containerClass);if(container.length){if(scrollTop>container.offset().top){scrollTop=container.offset().top;targetClass="."+containerClass;}}}}
if(targetClass!="")
petaEN.ui.scrollToSelector(targetClass,1000,-10);},mobileFields:{optIn:petaVars.fields.mobileOptIn,optInSos:petaVars.fields.mobileOptInSos,mobileNumber:petaVars.fields.mobilePhone}},ui:{scrollToSelector:function(selector,animateTime,additionalShift){if(animateTime==null||typeof animateTime!="number")
animateTime=0;if(additionalShift==null||typeof additionalShift!="number")
additionalShift=0;var elements=jQuery(selector);if(elements.length){var bodyPosition=jQuery(document).scrollTop();var stickyHeaders=jQuery('div:visible').filter(function(){return jQuery(this).css('position')=='fixed'&&jQuery(this).position().top==0;});var shiftTop=0;jQuery.each(stickyHeaders,function(index,item){if(jQuery(item).outerHeight()>shiftTop)shiftTop=jQuery(item).outerHeight();});jQuery("body, html").animate({scrollTop:elements.offset().top+additionalShift-shiftTop},animateTime);}},toggleContentBetweenTags:function(startTag_id,endTag_id,visible){var start,end;if((typeof startTag_id==="string"||startTag_id instanceof String)&&startTag_id.lastIndexOf('#',0)==-1)
start=jQuery('#'+startTag_id);else
start=jQuery(startTag_id);if((typeof endTag_id==="string"||endTag_id instanceof String)&&endTag_id.lastIndexOf('#',0)==-1)
end=jQuery('#'+endTag_id);else
end=jQuery(endTag_id);start=start.parent();end=end.parent();if(visible){start.nextUntil(end).andSelf().add(end).show();}else{start.nextUntil(end).andSelf().add(end).hide();}}},formBuilder:{hasPostedToFormBuilder:false,optInForm:function(program){if(program&&program.toLowerCase()=='sos')return petaVars.social.optInFormSos;return petaVars.social.optInForm;}},utility:{whenAvailable:function(name,callback){var interval=100;window.setTimeout(function(){if(name.indexOf('.')>-1&&!window[name]&&name.split(".").reduce(function(o,x){return(typeof o=="undefined"||o===null)?o:o[x];},window))
callback(window[name]);else if(window[name]){callback(window[name]);}else{window.setTimeout(arguments.callee,interval);}},interval);}},types:{FormData:function(fieldName,formBuilderName,options){this.fieldName=fieldName;this.fieldId=petaEN.pageBuilder.getFieldByName(fieldName);this.fbName=formBuilderName;for(var property in options)
{switch(property)
{case "validators":{var customValidators=[];if(Array.isArray(options.validators)==false)
customValidators.push(options.validators);else
customValidators=options.validators;for(var i=0;i<customValidators.length;i++)
{customValidators[i].type="CUST";customValidators[i].componentId=this.fieldId;}
var val=petaEN.pageBuilder.getENValidation();if(val)val.parseValidators(customValidators);}
break;case "pattern":jQuery("[name='"+this.fieldName+"']").prop("pattern",options.pattern);break;case "events":{for(var event in options.events)
jQuery("[name='"+this.fieldName+"']").on(event,options.events[event]);}
break;case "delegates":{for(var delegate in options.delegates)
jQuery(options.delegates[delegate].containerSelector).on(options.delegates[delegate].event,"[name='"+this.fieldName+"']",options.delegates[delegate].handler);}
break;case "prop":jQuery("[name='"+this.fieldName+"']").prop(options.prop);break;}}},CompareFormData:function(fieldName,formBuilderName,compareFieldName,options){petaEN.types.FormData.call(this,fieldName,formBuilderName,options);this.compareFieldName=compareFieldName;},CheckBoxData:function(fieldName,formBuilderName,formBuilderCheckValue,options){petaEN.types.FormData.call(this,fieldName,formBuilderName,options);this.fbValue=formBuilderCheckValue;},RadioButtonData:function(fieldName,formBuilderName,otherFieldName,otherFieldValue,options,otherFieldOptions){petaEN.types.FormData.call(this,fieldName,formBuilderName,options);this.otherFieldName=otherFieldName;this.otherField=new petaEN.types.FormData(this.otherFieldName,"",otherFieldOptions);},SelectListData:function(fieldName,formBuilderName,options){petaEN.types.FormData.call(this,fieldName,formBuilderName,options);}}};var petaEN_isMobile=petaEN.isMobile;petaEN.types.FormData.prototype.val=function(newVal){var f=jQuery("input[name='"+this.fieldName+"']");if(arguments.length)
return f.val(newVal);return f.val();}
petaEN.types.FormData.prototype.isValid=function(){return petaEN.pageBuilder.isENFieldValid(petaEN.pageBuilder.getFieldByName(this.fieldName));}
petaEN.types.FormData.prototype.isOnPage=function(){return jQuery('input[name="'+this.fieldName+'"]:visible').length>0;}
petaEN.types.FormData.prototype.hideField=function(){var containerClass=petaEN.pageBuilder.getFieldContainer(this.fieldName);var container=jQuery("."+containerClass);if(container.length)
container.hide();}
petaEN.types.FormData.prototype.showField=function(){var containerClass=petaEN.pageBuilder.getFieldContainer(this.fieldName);var container=jQuery("."+containerClass);if(container.length)
container.show();}
petaEN.types.FormData.prototype.trigger=function(eventName){return jQuery('[name="'+this.fieldName+'"]').trigger(eventName);}
petaEN.types.CheckBoxData.prototype=Object.create(petaEN.types.FormData.prototype);petaEN.types.CheckBoxData.prototype.constructor=petaEN.types.CheckBoxData;petaEN.types.CheckBoxData.prototype.checked=function(newVal){if(arguments.length>0)
jQuery("input[name='"+this.fieldName+"']").prop('checked',!!newVal);return jQuery("input[name='"+this.fieldName+"']").is(':checked');}
petaEN.types.CheckBoxData.prototype.val=function(newVal){if(arguments.length)
return(this.checked(newVal))?this.fbValue:"";return(this.checked())?this.fbValue:"";}
petaEN.types.CompareFormData.prototype=Object.create(petaEN.types.FormData.prototype);petaEN.types.CompareFormData.prototype.constructor=petaEN.types.CompareFormData;petaEN.types.CompareFormData.prototype.isValid=function(){return this.val()==jQuery("input[name='"+this.compareFieldName+"']").val();}
petaEN.types.RadioButtonData.prototype=Object.create(petaEN.types.FormData.prototype);petaEN.types.RadioButtonData.prototype.constructor=petaEN.types.RadioButtonData;petaEN.types.RadioButtonData.prototype.val=function(newVal){if(arguments.length)
{var radioField=jQuery("[name='"+this.fieldName+"'][value='"+newVal+"']");var otherRadio=jQuery("[name='"+this.fieldName+"'][value='"+this.otherFieldValue+"']");if(radioField.length!=0)
radioField.prop("checked",true);else
{otherRadio.prop("checked",true);this.otherField.val(newVal);}}
var checkedField=jQuery("[name='"+this.fieldName+"']:checked");return(checkedField.val()==this.otherFieldValue)?this.otherField.val():checkedField.val();};petaEN.types.SelectListData.prototype=Object.create(petaEN.types.FormData.prototype);petaEN.types.SelectListData.prototype.constructor=petaEN.types.SelectListData;petaEN.types.SelectListData.prototype.text=function(){return jQuery("select.en__field__input[name='"+this.fieldName+"']").find(":selected").text();}
petaEN.types.SelectListData.prototype.val=function(newVal){var f=jQuery("select[name='"+this.fieldName+"']");if(arguments.length)
return f.val(newVal);return f.val();}
var PETA_URL={getSessionItem:function(name){var nameVal=sessionStorage.getItem(name);if(nameVal)
return nameVal;else
return "";},getOriginalURLParameters:function(){return this.getSessionItem("origURL");},setURLParameters:function(params){sessionStorage.setItem("origURL",params);},getOriginalReferrer:function(){return this.getSessionItem("originalReferrer");},setOriginalReferrer:function(referrer){sessionStorage.setItem("originalReferrer",referrer);},getLastPageType:function(){return this.getSessionItem("lastPageType");},setLastPageType:function(pageType){sessionStorage.setItem("lastPageType",pageType);},init:function(){var urlParamsField=PETA_URL.getOriginalURLParameters();var currentParams=window.location.href.split('?')[1];var currentPath=window.location.href.split('?')[0];var currentPathElements=currentPath.split(/\/+/);var lastPageType=PETA_URL.getLastPageType();var currentPageType=currentPathElements[4];PETA_URL.setURLParameters(window.location.href);if(typeof currentParams=="undefined")
currentParams="";if((currentPageType!=lastPageType&&(currentParams.indexOf("chain")!=0&&currentParams.indexOf("chain#")!=0&&currentParams.indexOf("val")!=0&&currentParams.indexOf("val#")!=0))||PETA_URL.getOriginalReferrer().indexOf(currentPathElements[1])==-1){PETA_URL.setOriginalReferrer("");}
if(PETA_URL.getOriginalReferrer()=="")
{if(document.referrer=="")
PETA_URL.setOriginalReferrer(window.location.href);else
PETA_URL.setOriginalReferrer(document.referrer);}
if(document.referrer.indexOf(currentPath)!=0){if(document.referrer!=""){var lastPathElements=document.referrer.split(/\/+/);PETA_URL.setLastPageType(lastPathElements[4]);}
else
PETA_URL.setLastPageType(currentPageType);}}}
function setKeyboardTypes(){for(var i=0;i<petaVars.keyboardTypes.number.length;i++){if(petaVars.fields.hasOwnProperty(petaVars.keyboardTypes.number[i]))
jQuery('input[name="'+petaVars.fields[petaVars.keyboardTypes.number[i]]+'"]').prop('pattern','[0-9]*');}
for(var i=0;i<petaVars.keyboardTypes.phone.length;i++){if(petaVars.fields.hasOwnProperty(petaVars.keyboardTypes.phone[i]))
jQuery('input[name="'+petaVars.fields[petaVars.keyboardTypes.phone[i]]+'"]').prop('type','tel');}
for(var i=0;i<petaVars.keyboardTypes.email.length;i++){if(petaVars.fields.hasOwnProperty(petaVars.keyboardTypes.email[i]))
jQuery('input[name="'+petaVars.fields[petaVars.keyboardTypes.email[i]]+'"]').prop('type','email');}
jQuery('.en__field__input.en__field__input--other[name="transaction.donationAmt.other"]').prop({'type':'number','step':.01,'min':0.0,'max':1000000000});jQuery('.en__field__input.en__field__input--other[name="transaction.donationAmt.other"]').on("keypress change",function(e){var newChar=(e.charCode!==0?String.fromCharCode(e.charCode):'');var newVal=jQuery(this).val()+newChar;if("0123456789.".indexOf(newChar)==-1)
e.preventDefault();if(jQuery(this).val().search(/(.*)\.[0-9][0-9]/)===0&&newVal.length>jQuery(this).val().length){e.preventDefault();}});jQuery('#en__field_supporter_emailAddress').prop('type','email');jQuery('#en__field_transaction_ccnumber').prop('pattern','[0-9]*');jQuery('#en__field_transaction_ccvv').prop('pattern','[0-9]*');}
function checkForTakeAction(){if(currentPageURL.toLowerCase().indexOf('/petition/')>0||currentPageURL.toLowerCase().indexOf('/action/')>0){return true;}
return false;}
function checkForPagesInUS()
{return(new RegExp(/(peta.org|petalatino.com|petakids.com|animalrahat.com|us-p2p.e-activist.com)$/gi)).test(document.location.hostname);}
function checkForPostAction(){if(checkForDonate()==true||currentPageURL.toLowerCase().indexOf('/action/2')>0||currentPageURL.toLowerCase().indexOf('/petition/2')>0||currentPageURL.toLowerCase().indexOf('/data/2')>0){return true;}
return false;}
function checkForDonate(){if(currentPageURL.toLowerCase().indexOf('/donate/')>0||currentPageURL.toLowerCase().indexOf('/donation/')>0){return true;}
return false;}
function checkForDataCollect(){if(currentPageURL.toLowerCase().indexOf('/data/')>0){return true;}
return false;}
function checkForSubscription(){if(currentPageURL.toLowerCase().indexOf('/subscribe/')>0||currentPageURL.toLowerCase().indexOf('/subscriptions/')>0){return true;}
return false;}
function checkForEventPage(){if(currentPageURL.toLowerCase().indexOf('/event/')>0){return true;}
return false;}
function checkForTweet(){if(currentPageURL.toLowerCase().indexOf('/tweet/')>0){return true;}
return false;}
function checkForTYPageTitle(){var tyPhrases=["Thank you","Thanks","Gracias","Dankjewel","Bedankt","Merci","Merci Ã  vous","à¤§à¤¨à¥à¤¯à¤µà¤¾à¤¦","æè¬æ¨","è¬è¬","æè°¢æ¨","è°¢è°¢"];var tyPageTitleFound=false;var counter;for(counter=0;counter<tyPhrases.length;counter++){if(currentPageTitle.toLowerCase().indexOf(tyPhrases[counter].toLowerCase())>=0){tyPageTitleFound=true;break;}}
return tyPageTitleFound;}
function checkForP2P()
{return typeof Signin==="object"&&typeof EngagingNetworks==="undefined";}
function setMobileFieldVisibility(country)
{if(country=="US")
{enFields.mobilePhone.showField();enFields.petaMobileOptIn.showField();jQuery("#petaMobileUrgeTxt").show();}
else
{enFields.mobilePhone.hideField();enFields.petaMobileOptIn.hideField();jQuery("#petaMobileUrgeTxt").hide();}}
function setCASL(caslSetting){var hideFields=petaVars.flags.casl.hideFields;var headerFooterEnabled=petaVars.flags.casl.headerFooterEnabled;var precheckFields=petaVars.flags.casl.precheckFields;var isChecked;if(precheckFields==false){isChecked=false;}
else{isChecked=!caslSetting;}
var optIns=jQuery("input[name^='questions'], input.en__field__input[name^='supporter.questions.']");if(optIns.length==0)
headerFooterEnabled=false;if(caslSetting==true||hideFields==false){for(var i=0;i<petaVars.casl.optIns.length;i++)
{$('#en__field_supporter_questions_'+petaVars.fields[petaVars.casl.optIns[i]]).prop("checked",isChecked);$('.en__field--'+petaVars.fields[petaVars.casl.optIns[i]]).show();}
$('#en__field_supporter_questions_'+petaVars.fields.actionTeamOptIn).prop("checked",isChecked);$('.en__field--'+petaVars.fields.actionTeamOptIn).show();$('#en__field_supporter_questions_'+petaVars.fields.petaENews).prop("checked",isChecked);$('.en__field--'+petaVars.fields.petaENews).show();$('#en__field_supporter_questions_'+petaVars.fields.membershipOptIn).prop("checked",isChecked);$('.en__field--'+petaVars.fields.membershipOptIn).show();$('#en__field_supporter_questions_'+petaVars.fields.veganLivingOptIn).prop("checked",isChecked);$('.en__field--'+petaVars.fields.veganLivingOptIn).show();$('#en__field_supporter_questions_'+petaVars.fields.thirdPartyOptIn).prop("checked",false);$('.en__field--'+petaVars.fields.thirdPartyOptIn).show();$('#en__field_supporter_questions_'+petaVars.fields.dishoomEnewsOptIn).prop("checked",isChecked);$('.en__field--'+petaVars.fields.dishoomEnewsOptIn).show();$('#en__field_supporter_questions_'+petaVars.fields.dishoomStreetTeamOptIn).prop("checked",isChecked);$('.en__field--'+petaVars.fields.dishoomStreetTeamOptIn).show();$('#en__field_supporter_questions_'+petaVars.fields.studentsOpposingSpeciesismSOSUpdates).prop("checked",isChecked);$('.en__field--'+petaVars.fields.studentsOpposingSpeciesismSOSUpdates).show();if(checkForP2P())
{$("input[name='questions[PETA E-News]']").prop("checked",isChecked);$("input[name='questions[PETA E-News]']").parents(".field-wrapper").show();$("input[name='questions[Membership Updates]']").prop("checked",isChecked);$("input[name='questions[Membership Updates]']").parents(".field-wrapper").show();}
if(headerFooterEnabled==true){$(".opt-in-header, .opt-in-footer").show();if(caslSetting==true){$(".currentSubscriberText").show();}
else{$(".currentSubscriberText").hide();}}
else{$(".opt-in-header").hide();}}
else{$(".opt-in-header").hide();$(".currentSubscriberText").hide();for(var i=0;i<petaVars.casl.optIns.length;i++)
{$('#en__field_supporter_questions_'+petaVars.fields[petaVars.casl.optIns[i]]).prop("checked",true);$('.en__field--'+petaVars.fields[petaVars.casl.optIns[i]]).hide();}
$('#en__field_supporter_questions_'+petaVars.fields.petaENews+', #en__field_supporter_questions_'+petaVars.fields.membershipOptIn).prop("checked",true);$('.en__field--'+petaVars.fields.petaENews+', .en__field--'+petaVars.fields.membershipOptIn).hide();if(checkForP2P())
{$("input[name='questions[PETA E-News]']").prop("checked",true);$("input[name='questions[PETA E-News]']").parents(".field-wrapper").hide();$("input[name='questions[Membership Updates]']").prop("checked",true);$("input[name='questions[Membership Updates]']").parents(".field-wrapper").hide();}}
$('.en__field--'+petaVars.fields.masterSuppressionList).show();}
function checkCountry(userCountry){var isSubscriptionPage=false;if(window.location.href.indexOf("/subscriptions")>-1||window.location.href.indexOf("/subscribe")>-1){isSubscriptionPage=true;}
setMobileFieldVisibility(userCountry);if(!isSubscriptionPage){if(userCountry=="CA"||userCountry==null||userCountry==""||checkForPagesInUS()==false){setCASL(true);}
else{setCASL(false);}}
enFields.countryDetected.val(userCountry);}
var xdr;function getCountry(){var apiURL="https://api.peta.org/geoapi/ip/country/";var browser=navigator.userAgent;var IEversion=99;if('XDomainRequest'in window&&window.XDomainRequest!==null){xdr=new XDomainRequest();xdr.open('get',apiURL);xdr.timeout=999999;xdr.onload=function(){var dom=new ActiveXObject('Microsoft.XMLDOM');var ajaxResult=$.parseJSON(xdr.responseText);dom.async=false;if(ajaxResult==null||typeof(ajaxResult)=='undefined'){ajaxResult=$.parseJSON(data.firstChild.textContent);}
checkCountry(ajaxResult);xdr=null;};xdr.ontimeout=function(){console.log('TIMEOUT');};xdr.onerror=function(){console.log("ERROR");_result=false;};xdr.send();}else if(navigator.userAgent.indexOf('MSIE')!=-1&&parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1],10)<8){return false;}else{$.getJSON(apiURL,function(ajaxresult){checkCountry(ajaxresult);});}}
function countryOnChange(){$('#en__field_supporter_country, #country').change(function(){var currentCountry=this.value;setMobileFieldVisibility(currentCountry);switch(currentCountry){case 'CA':setCASL(true);break;default:setCASL(false);}});}
var currentPageURL=window.location.toString().toLowerCase();var currentPageTitle=document.title;var isPage1=false;var isPage2=false;function isFormPage(){if(jQuery("div.en__submit").length<=0){return false;}
else{return true;}}
function gaEvents(){if(typeof pageJson=="undefined")
pageJson={pageNumber:1};if(pageJson.pageNumber==1){isPage1=true;}
else if(pageJson.pageNumber==2){isPage2=true;}
if(checkForTakeAction()==true){if(isPage1==true&&isFormPage()==true){sendEvent(petaGA_FormCategory_TakeAction,petaGA_FormAction_Initiated,currentPageTitle);}
else if(isPage2==true)
{sendEvent(petaGA_FormCategory_TakeAction,petaGA_FormAction_Submitted,currentPageTitle);}}
else if(checkForDonate()==true){if(isPage1==true){sendEvent(petaGA_FormCategory_Donate,petaGA_FormAction_Initiated,currentPageTitle);}
else if(isPage2==true){sendEvent(petaGA_FormCategory_Donate,petaGA_FormAction_Submitted,currentPageTitle);}}
else if(checkForDataCollect()==true)
{var isTyPage=false;if(document.referrer.toLowerCase().indexOf('/subscribe/')>0||document.referrer.toLowerCase().indexOf('/subscriptions/')>0){isTyPage=true;}
if(isPage1==true&&isTyPage==false)
{sendEvent("Data Collect Form",petaGA_FormAction_Initiated,currentPageTitle);}
else if(isPage1==true&&isTyPage==true){sendEvent("Data Collect Form",petaGA_FormAction_Initiated,currentPageTitle);sendEvent(petaGA_FormCategory_eNews,petaGA_FormAction_Submitted,currentPageTitle);}
else if(isPage2==true)
{sendEvent("Data Collect Form",petaGA_FormAction_Submitted,currentPageTitle);}}
else if(checkForSubscription()==true){if(isPage1==true){sendEvent(petaGA_FormCategory_eNews,petaGA_FormAction_Initiated,currentPageTitle);}
else if(isPage2==true){sendEvent(petaGA_FormCategory_eNews,petaGA_FormAction_Submitted,currentPageTitle);}}
else if(checkForEventPage()==true){if(isPage1==true){sendEvent(petaGA_FormCategory_Purchase,petaGA_FormAction_Initiated,currentPageTitle);}
else if(isPage2==true){sendEvent(petaGA_FormCategory_Purchase,petaGA_FormAction_Submitted,currentPageTitle);}}
else if(checkForTweet()==true){if(isPage1==true){sendEvent(petaGA_FormCategory_eNews,petaGA_FormAction_Initiated,currentPageTitle);}
else if(isPage2==true){sendEvent(petaGA_FormCategory_eNews,petaGA_FormAction_Submitted,currentPageTitle);sendEvent(petaGA_FormCategory_TakeAction,petaGA_FormAction_Initiated,currentPageTitle);$(".en__tweetButton__send").click(function(){sendEvent(petaGA_FormCategory_TakeAction,petaGA_FormAction_Submitted,currentPageTitle);});}}
if((document.referrer.toLowerCase().indexOf('/donate/')>0&&window.location.href.toLowerCase().indexOf('/action/1?chain')>0)||(pageJson.giftProcess==true&&window.location.href.toLowerCase().indexOf('/action/1?chain')>0)){sendEvent(petaGA_FormCategory_Donate,petaGA_FormAction_Submitted,currentPageTitle);}}
function generateReferrerField()
{var referrerInput=jQuery("input[name='en_txn6']");if(referrerInput.length>0)
referrerInput.val(decodeURIComponent(decodeURIComponent(PETA_URL.getOriginalReferrer())));else{jQuery("form.en__component.en__component--page").append("<input id='en_txn6' type='hidden' name='en_txn6' value='' />");jQuery("form.en__component.en__component--page #en_txn6").val(decodeURIComponent(decodeURIComponent(PETA_URL.getOriginalReferrer())));}}
function buildFormData(){function lengthHelper(localRef,maxlength,explanation)
{explanation=explanation||"";if((localRef.val()||"").length==maxlength){if(jQuery('#'+localRef.attr("id")+"_MLW").length===0)
localRef.before("<div id='"+localRef.attr("id")
+"_MLW' class='en__field__error'>"
+explanation
+"</div>");}
else
jQuery("#"+localRef.attr("id")+"_MLW").remove();}
var fieldValueObject={organization:new petaEN.types.FormData(petaVars.fields.organization,"strOrganization"),emailAddress:new petaEN.types.FormData(petaVars.fields.emailAddress,"strEmail"),salutation:new petaEN.types.FormData(petaVars.fields.salutation,""),title:new petaEN.types.FormData(petaVars.fields.title,"strTitle"),firstName:new petaEN.types.FormData(petaVars.fields.firstName,"strFName",{events:{input:function(){var localRef=jQuery(this);var maxlength=localRef.prop("maxlength");return lengthHelper(localRef,maxlength,petaVars.labels.fieldLengthMessages.firstName);}},prop:{maxlength:100}}),middleName:new petaEN.types.FormData(petaVars.fields.middleName,"strMName"),lastName:new petaEN.types.FormData(petaVars.fields.lastName,"strLName",{events:{input:function(){var localRef=jQuery(this);var maxlength=localRef.prop("maxlength");return lengthHelper(localRef,maxlength,petaVars.labels.fieldLengthMessages.lastName);}},prop:{maxlength:100}}),suffix:new petaEN.types.FormData(petaVars.fields.suffix,""),professionalTitle:new petaEN.types.FormData(petaVars.fields.professionalTitle,"strPosition"),employer:new petaEN.types.FormData(petaVars.fields.employer,""),address1:new petaEN.types.FormData(petaVars.fields.address1,"strAddr1",{events:{input:function(){var localRef=jQuery(this);var maxlength=localRef.prop("maxlength");return lengthHelper(localRef,maxlength,petaVars.labels.fieldLengthMessages.address1);}},prop:{maxlength:35}}),address2:new petaEN.types.FormData(petaVars.fields.address2,"strAddr2",{events:{input:function(){var localRef=jQuery(this);var maxlength=localRef.prop("maxlength");return lengthHelper(localRef,maxlength,petaVars.labels.fieldLengthMessages.address2);}},prop:{maxlength:35}}),city:new petaEN.types.FormData(petaVars.fields.city,"strCity",{events:{input:function(){var localRef=jQuery(this);var maxlength=localRef.prop("maxlength");return lengthHelper(localRef,maxlength,"This field only allows up to 100 characters.");}},prop:{maxlength:100}}),county:new petaEN.types.FormData(petaVars.fields.county,"strCounty"),stateRegion:new petaEN.types.SelectListData(petaVars.fields.stateRegion,"strState"),zipPostalCode:new petaEN.types.FormData(petaVars.fields.zipPostalCode,"strZip",{events:{input:function(){var localRef=jQuery(this);var maxlength=localRef.prop("maxlength");return lengthHelper(localRef,maxlength,petaVars.labels.fieldLengthMessages.zipPostalCode);}},prop:{maxlength:20}}),country:new petaEN.types.SelectListData(petaVars.fields.country,"strCountry",{events:{"change":function(){if(this.value=="US")
addBankAccount();else
removeBankAccount();}}}),countryDetected:new petaEN.types.FormData(petaVars.fields.countryDetected,""),homePhone:new petaEN.types.FormData(petaVars.fields.homePhone,"strPhone"),mobilePhone:new petaEN.types.FormData(petaVars.fields.mobilePhone,"strPhone3",{validators:[{"format":"^(\\s*|(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4})$","errorMessage":"Please enter a valid 10-digit mobile phone number."}]}),petaMobileOptIn:new petaEN.types.CheckBoxData(petaEN.pageBuilder.mobileFields.optIn,"chkTxtMsgOptinKeywordIdPeta",29614,{validators:[{"format":null,"errorMessage":"Please remove your phone number from the field above if you do not want to accept text messages from PETA. If you would like to receive messages, please accept the terms and conditions by checking the box below."}],}),petaMobileOptInSos:new petaEN.types.CheckBoxData(petaEN.pageBuilder.mobileFields.optInSos,"chkTxtMsgOptinKeywordIdSos",11111,{validators:[{"format":null,"errorMessage":"Please remove your phone number from the field above if you do not want to accept text messages from PETA. If you would like to receive messages, please accept the terms and conditions by checking the box below."}],}),workPhone:new petaEN.types.FormData(petaVars.fields.workPhone,"strPhone2"),telephone:new petaEN.types.FormData(petaVars.fields.telephone,"strPhone"),dateofBirth:new petaEN.types.FormData(petaVars.fields.dateOfBirth,"dtmBirthDate"),gender:new petaEN.types.SelectListData(petaVars.fields.gender,"strSex"),noGraphicImages:new petaEN.types.CheckBoxData(petaVars.fields.noGraphicImages,""),recurringPayment:new petaEN.types.RadioButtonData(petaVars.fields.recurringPayment,"","","",{events:{"click":function()
{if((petaVars.flags.state.setDefaultDonationOnRecurringChange==true&&petaVars.flags.state.setDefaultDonationAfterAmountInteraction==true)||(petaVars.flags.state.setDefaultDonationOnRecurringChange==true&&petaVars.flags.state.setDefaultDonationAfterAmountInteraction==false&&jQuery("[name='"+petaVars.flags.state.donationInteractionQuestion+"']").val()!="Y"))
jQuery("[name='"+petaVars.flags.state.donationInteractionQuestion+"']").val('N');if((this.type==="checkbox"&&this.checked)||(this.type==="radio"&&this.value=="Y"))
setMonthlyLabels(true);else
setMonthlyLabels(false);}}},{}),donationAmount:new petaEN.types.RadioButtonData(petaVars.fields.donationAmount,"",petaVars.fields.donationAmountOther,"",{delegates:{"click change":{handler:function()
{jQuery("[name='"+petaVars.flags.state.donationInteractionQuestion+"']").val('Y');},event:"click change",containerSelector:"div.en__field--donationAmt"}}},{events:{"click":function()
{jQuery("[name='"+petaVars.flags.state.donationInteractionQuestion+"']").val('Y');},"change blur":function()
{this.value=(this.value||"").replace(/Â£|\$|â¬|â±/gi,"");}}}),recurringFrequency:new petaEN.types.FormData(petaVars.fields.recurringFrequency,""),recurringEndDate:new petaEN.types.FormData(petaVars.fields.recurringEndDate,""),recurringDay:new petaEN.types.FormData(petaVars.fields.recurringDay,""),recurringStartDate:new petaEN.types.FormData(petaVars.fields.recurringStartDate,""),paymentType:new petaEN.types.SelectListData(petaVars.fields.paymentType,""),cardHolderName:new petaEN.types.FormData(petaVars.fields.cardHolderName,""),creditCardNumber:new petaEN.types.FormData(petaVars.fields.creditCardNumber,""),creditCardExpiration:new petaEN.types.FormData(petaVars.fields.creditCardExpiration,""),_3DigitSecurityCode:new petaEN.types.FormData(petaVars.fields._3DigitSecurityCode,""),bankAccountType:new petaEN.types.RadioButtonData(petaVars.fields.bankAccountType,"","",""),bankAccountNumber:new petaEN.types.CompareFormData(petaVars.fields.bankAccountNumber,"",petaVars.fields.bankAccountVerify),verifyBankAccountNumber:new petaEN.types.CompareFormData(petaVars.fields.bankAccountVerify,"",petaVars.fields.bankAccountNumber),bankRoutingTransitNumber:new petaEN.types.FormData(petaVars.fields.bankRoutingTransitNumber,""),bankAccountUsedasaPaymentMethod:new petaEN.types.CheckBoxData(petaVars.fields.bankAccountUsedasaPaymentMethod,""),payPalBillingAgreement:new petaEN.types.FormData(petaVars.fields.payPalBillingAgreement,""),currency:new petaEN.types.FormData(petaVars.fields.currency,""),IMGBOtD3t3ction:new petaEN.types.FormData(petaVars.fields.IMGBOtD3t3ction,""),referralURL:new petaEN.types.FormData(petaVars.fields.referralURL,""),inMemoriam:new petaEN.types.FormData(petaVars.fields.inMemoriam,""),giftReason:new petaEN.types.FormData(petaVars.fields.giftReason,""),recognizeGift:new petaEN.types.FormData(petaVars.fields.recognizeGift,""),tributeOptions:new petaEN.types.RadioButtonData(petaVars.fields.tributeOptions,"","",""),PAYPAL_INFO:new petaEN.types.FormData(petaVars.fields.PAYPAL_INFO,""),shippingStreetAddressLine2:new petaEN.types.FormData(petaVars.fields.shippingStreetAddressLine2,""),shippingStreetAddress:new petaEN.types.FormData(petaVars.fields.shippingStreetAddress,""),shippingCity:new petaEN.types.FormData(petaVars.fields.shippingCity,""),shippingStateRegion:new petaEN.types.SelectListData(petaVars.fields.shippingStateRegion,""),shippingZIPPostalCode:new petaEN.types.FormData(petaVars.fields.shippingZIPPostalCode,""),shippingCountry:new petaEN.types.SelectListData(petaVars.fields.shippingCountry,""),shippingTelephone:new petaEN.types.FormData(petaVars.fields.shippingTelephone,""),yourTwitterHandle:new petaEN.types.FormData(petaVars.fields.yourTwitterHandle,"")};return fieldValueObject;}
function debugFormBuilder(formNumber,message){if(formNumber==3925){console.log(message);}}
function postToFormBuilder(formNumber,fieldValueObject,resolveFB,rejectFB){var formbuilder="https://www.fsapapplications.org/WebFormProcessor.asp?FormTypeID=";var postData="";try{for(var propName in fieldValueObject){debugFormBuilder(formNumber,"EN Field: "+fieldValueObject[propName])
if(fieldValueObject[propName].isOnPage()==false){debugFormBuilder(formNumber," - Not on Page");continue;}
if(fieldValueObject[propName].fbName==""){debugFormBuilder(formNumber," - No matching FormBNuiler field name");continue;}
if(fieldValueObject[propName].val()===undefined)
fieldValueObject[propName]="";postDataField=fieldValueObject[propName].fbName+"="+fieldValueObject[propName].val();debugFormBuilder(formNumber," - Adding field to post: "+postDataField);if(postData!="")
postData+="&";postData+=postDataField;}}catch(e){console.log(e);}
jQuery.ajax({cache:false,type:'POST',url:formbuilder+formNumber,data:postData,timeout:3000,success:function(response){console.log(response);resolveFB();},error:function(){console.log("Why is this success?");resolveFB();}});}
function moveErrors(){var errorList=jQuery("form ul.en__errorList li");var pageError=jQuery("form div.en__errorHeader");var firstForm=jQuery("div.en__component.en__component--formblock").first();if(document.location.search&&document.location.search.toLowerCase().indexOf("gift_id")>-1&&document.location.search.toLowerCase().indexOf("ecard_id")>-1&&jQuery("input[name='transaction.donationAmt.other']").length==0&&jQuery("div.en__component.en__component--formblock").length>1)
firstForm=jQuery("div.en__component.en__component--formblock").eq(1);if(errorList.length){pageError.addClass("pf_ErrorHeader").detach().insertBefore(firstForm);jQuery.each(errorList,function(index,item){var errorMessage=jQuery(item).text();console.log(errorMessage);var fieldValidator=petaEN.pageBuilder.getFieldIdByMessage(errorMessage);if(fieldValidator){var containerClass=petaEN.pageBuilder.getFieldContainer(fieldValidator);var container=jQuery("."+containerClass);if(container.length){jQuery(item).addClass("en__field__error").detach().insertBefore(container);return;}}
jQuery(item).addClass("en__field__error").detach().insertBefore(firstForm);});setTimeout(function(){petaEN.ui.scrollToSelector("form div.en__errorHeader.pf_ErrorHeader",1000,-10);},200);}}
function movePhotoCredit(){var footerContainer=jQuery("#photo-credit");if(footerContainer.length){jQuery("#photo-credit-info").detach().appendTo(footerContainer);}}
window.goMonthlyHasShown=false;var showGoMonthlyLightBox=true;function needGoMonthly(donationType,donationAmount,paymentType){if(document.documentElement.hasAttribute("data-en-suppress-lightboxes"))
return false;if(paymentType&&paymentType.length&&paymentType.val()=="paypal")
return false;if(jQuery('input[name="supporter.questions.'
+petaVars.fields.inMemoryOrHonor+'"]:checked').length>0)
return false;if(!(donationType&&donationType.length&&donationType.val()==petaVars.constants.monthlyRadioValue)){if(donationAmount&&(donationAmount<petaVars.goMonthlyRanges[0].min||donationAmount>=petaVars.goMonthlyRanges[petaVars.goMonthlyRanges.length-1].max))
return false;return true;}
return false;}
function getGoMonthlyAmount(donationValue){for(var k=0;k<petaVars.goMonthlyRanges.length;k++){if(donationValue>=petaVars.goMonthlyRanges[k].min&&donationValue<petaVars.goMonthlyRanges[k].max)
return{isMonthly:true,amount:petaVars.goMonthlyRanges[k].monthly};}
return{isMonthly:false,amount:donationValue};}
function getDonationAmount(donationAmount,donationOther){var donationValue=0;if(donationAmount&&donationAmount.length&&donationAmount.val()!="Other"&&donationAmount.val().replace(/[\$\,]/g,"")!="")
donationValue=parseFloat(donationAmount.val().replace(/[\$\,]/g,""));else if(donationOther&&donationOther.length&&donationOther.val().replace(/[\$\,]/g,"")!="")
donationValue=parseFloat(donationOther.val().replace(/[\$\,]/g,""));if(donationValue===NaN)
donationValue=0;return donationValue;}
function showMonthlyElements(showElements)
{if(showElements==true)
{jQuery('.en__field--recurrpay').show();jQuery('.is_monthly_element').show();}
else
{jQuery('.en__field--recurrpay').hide();jQuery('.is_monthly_element').hide();}}
function elementExists(elementToCheck){if(elementToCheck===undefined||elementToCheck===null||elementToCheck.length==0){console.log(elementToCheck);return false;}
else{console.log(elementToCheck);return true;}}
function setFacebookLink(urlToShare){var redirectUrl=(petaVars.social.facebookPostShareTY=="")?"":"&redirect_uri="+encodeURIComponent(petaVars.social.facebookPostShareTY);var facebookURL='https://www.facebook.com/dialog/share?app_id='+petaVars.social.facebookAppID+'&display=popup&href=##urlToShare##';facebookURL=facebookURL.replace("##urlToShare##",encodeURIComponent(urlToShare))+redirectUrl;jQuery("#facebookLink").click(function(e){e.preventDefault();sendSocialEvent('Facebook','Share',urlToShare);window.open(facebookURL,'_blank');});}
function setTwitterLink(urlToShare,message){var twitterURL='https://twitter.com/intent/tweet?';twitterURL+='text='+encodeURIComponent(jQuery.trim(message));jQuery('#twitterLink').attr('href',twitterURL);jQuery("#twitterLink").click(function(){sendSocialEvent('Twitter','Tweet',urlToShare);});}
function setEmailLink(subject,body,urlToShare){var emailURL='mailto:';emailURL+='?subject='+encodeURIComponent(jQuery.trim(subject));emailURL+='&body='+encodeURIComponent(jQuery.trim(body));jQuery('#emailLink, #emailLink_cn').attr('href',emailURL);jQuery("#emailLink, #emailLink_cn").click(function(){sendSocialEvent('Email','Share',urlToShare);});}
function setWeiboLink(urlToShare,message){var weiboURL='http://service.weibo.com/share/share.php?';weiboURL+='url='+encodeURIComponent(jQuery.trim(urlToShare));weiboURL+='&title='+encodeURIComponent(jQuery.trim(message));jQuery('#weiboLink, #weiboLink_cn').attr('href',weiboURL);jQuery('#weiboLink, #weiboLink_cn').click(function(){sendSocialEvent('Weibo','Share',urlToShare);});}
function getFacebookTracking(url,pageTitle){pageTitle=encodeURI(pageTitle);var trackingParameters='?';var fbUTMSource=petaVars.social.facebookUTMSource;var fbUTMCampaign=petaVars.social.facebookUTMCampaign;var campaignLimit=99;var campaignLength=fbUTMCampaign.replace('##pageTitle##',pageTitle).length;var lengthDifference=0;if(campaignLength>campaignLimit){lengthDifference=campaignLength-campaignLimit;fbUTMCampaign=fbUTMCampaign.replace('##pageTitle##',pageTitle.substring(0,pageTitle.length-lengthDifference));}
else{fbUTMCampaign=fbUTMCampaign.replace('##pageTitle##',pageTitle);}
if(url.indexOf('?')>0){trackingParameters='&';}
trackingParameters=trackingParameters+"utm_source="+fbUTMSource+"&utm_medium=Social&utm_campaign="+fbUTMCampaign;return trackingParameters;}
function setSocialLinks(url,twitterMessage,emailSubject,emailBody,shareText)
{setFacebookLink(url);setTwitterLink(url,twitterMessage);setEmailLink(emailSubject,emailBody,url);setWeiboLink(url,shareText);}
function updatePostActionContent(url,responseHtml,fromAdvocacy,fromDataCollect,fromTweet,fromP2A){var emailBodyFilter='div.emailBody';var shareText=petaVars.social.defaultMessage;var shareImage="";var twitterMessage="";var emailSubject="";var emailBody="";var emailTracking="";if(fromP2A)
emailBodyFilter="meta[property='og:description']";if(elementExists(jQuery(responseHtml).filter('title'))){shareText=jQuery(responseHtml).filter('title').text();emailTracking="?utm_campaign=0417|"+encodeURIComponent(jQuery.trim(shareText))
+petaVars.social.emailUTMCampaign+"&utm_source="+petaVars.social.emailUTMSource+"&utm_medium="+petaVars.social.emailUTMMedium;if(fromAdvocacy&&checkForTYPageTitle()==true){sendEvent(petaGA_FormCategory_TakeAction,petaGA_FormAction_Submitted,shareText);}
else if(fromDataCollect){sendEvent("Data Collect Form",petaGA_FormAction_Submitted,shareText);}
else if(fromTweet){sendEvent("Tweet Form",petaGA_FormAction_Submitted,shareText);}}
if(elementExists(jQuery(responseHtml).find('img.pageImage'))){shareImage=jQuery(responseHtml).find('img.pageImage').attr('src');}
if(elementExists(jQuery(responseHtml).find('div.tyText'))&&petaVars.flags.tyPage.showTyText==true){jQuery('#tyText').html(jQuery(responseHtml).find('div.tyText').html());}
if(elementExists(jQuery(responseHtml).find('img.tyImage'))){var tyImageSrc=jQuery(responseHtml).find('img.tyImage').attr('src');var tyImageText=jQuery(responseHtml).find('div.tyImageText').text();}
if(elementExists(jQuery(responseHtml).find('div.twitterMessage'))){twitterMessage=jQuery(responseHtml).find('div.twitterMessage').text();}
else{twitterMessage=shareText+" via @peta "+url;}
if(elementExists(jQuery(responseHtml).find('div.emailSubject'))){emailSubject=jQuery(responseHtml).find('div.emailSubject').text();}
else{emailSubject=shareText;}
if(elementExists(jQuery(responseHtml).find(emailBodyFilter))){emailBody=jQuery(responseHtml).find(emailBodyFilter).text();}
else if(fromP2A&&elementExists(jQuery(responseHtml).find(emailBodyFilter))){emailBody=jQuery(responseHtml).find(emailBodyFilter).prop("content");}
else{emailBody="Take action for animals: "+url+emailTracking;}
setSocialLinks(url,twitterMessage,emailSubject,emailBody,shareText);}
function getCookieObj(cookieName)
{var returnObj={"cookieName":cookieName,hasCookie:false,cookieValue:""};var cookies=document.cookie.split("; ");for(var i=0;i<cookies.length;i++)
{var keyVal=cookies[i].split("=");if(keyVal[0]==cookieName&&keyVal.length>1)
{returnObj.hasCookie=true;returnObj.cookieValue=keyVal[1];return returnObj;}}
return returnObj;}
function getAlertInfo(){var url=petaVars.social.defaultShareURL;var fromAdvocacy=false;var fromDataCollect=false;var fromTweet=false;var fromP2A=false;var referrer=document.referrer.toLowerCase();if(referrer.indexOf('/petition/')>0||referrer.indexOf('/action/')>0){fromAdvocacy=true;}
else if(referrer.indexOf('action.peta.org')>-1)
{fromP2A=true;fromAdvocacy=true;}
else if(referrer.indexOf('/data/')>0){fromDataCollect=true;}
else if(referrer.indexOf('/tweet/')>0){fromTweet=true;}
var referrerIDScan=(new RegExp(/\/(\d\d\d\d\d)\//)).exec(referrer);var cookieName="advo_";var shareText="";var shareImage="";var twitterMessage="";var emailSubject="";var emailBody="";var emailTracking="";if(fromAdvocacy||fromDataCollect||fromTweet){url=referrer;}
else if(PETA_URL.getOriginalReferrer()!=""){url=PETA_URL.getOriginalReferrer();}
if((fromAdvocacy||fromDataCollect||fromTweet)&&url!=petaVars.social.defaultShareURL){if(referrerIDScan&&referrerIDScan.length>1)
cookieName=cookieName+referrerIDScan[1];else
cookieName=cookieName+"00000";var advocacyData=sessionStorage.getItem(cookieName);var cookieData={"hasCookie":(advocacyData!==null),"cookieValue":advocacyData};if(cookieData.hasCookie)
{updatePostActionContent(url,unescape(atob(decodeURIComponent(cookieData.cookieValue))),fromAdvocacy,fromDataCollect,fromTweet,fromP2A);}
else
{jQuery.ajax({url:"https://api.peta.org/siteservicesapi/rp?url="+encodeURIComponent(url),success:function(responseHtml){updatePostActionContent(url,responseHtml,fromAdvocacy,fromDataCollect,fromTweet,fromP2A);},error:function(a,b,c){console.log("AJAX error");console.log(a);console.log(b);console.log(c);}});}}
else{setSocialLinks(url,twitterMessage,emailSubject,emailBody,shareText);}}
var switchSubmitText=false;function setMonthlyLabels(showMonthlyLabels)
{var submitButton=jQuery("div.en__component--formblock div.en__submit button");if(switchSubmitText==false&&submitButton.length>0)
{for(var i=0;i<petaVars.labels.oneTimeOrMonthly.defaultSubmitTexts.length;i++)
{if(submitButton.text()==petaVars.labels.oneTimeOrMonthly.defaultSubmitTexts[i])
{switchSubmitText=true;break;}}}
if(switchSubmitText&&submitButton.length>0)
{if(showMonthlyLabels)
{if(enFields.recurringFrequency.val()==="ANNUAL")
submitButton.empty().text(petaVars.labels.oneTimeOrMonthly.annualSubmitText);else
submitButton.empty().text(petaVars.labels.oneTimeOrMonthly.monthlySubmitText);}
else
submitButton.empty().text(petaVars.labels.oneTimeOrMonthly.oneTimeSubmitText);}
var headerText=jQuery("h3#title_gift_type");if(headerText.length>0)
{if(showMonthlyLabels)
headerText.empty().text(petaVars.labels.oneTimeOrMonthly.monthlyHeaderLabel);else
headerText.empty().text(petaVars.labels.oneTimeOrMonthly.oneTimeHeaderLabel);}}
function setGoMonthlyLightbox(){var donationType=jQuery.urlParam('dt',PETA_URL.getOriginalURLParameters());if(donationType=="noType")
donationType=petaVars.donationTypeDefault;for(var i=0;i<petaVars.donationTypes.length;i++){if(petaVars.donationTypes[i].id==donationType){showGoMonthlyLightBox=petaVars.donationTypes[i].showGoMonthlyLightBox;break;}}}
function completeGoMonthly(resolve){console.log("Yes to MONTHLY");var donationAmount=jQuery("input.en__field__input.en__field__input--radio[name='transaction.donationAmt']:checked");var donationOther=jQuery(".en__field__item.en__field__item--other input[type='text']");var donationValue=getGoMonthlyAmount(getDonationAmount(donationAmount,donationOther)).amount;var goMonthlyOther=jQuery("input[name='secondOtherField']");var goMonthlyValue=getDonationAmount(null,goMonthlyOther);if(goMonthlyValue!=0)
donationValue=goMonthlyValue;console.log("donation value = "+donationValue);var donationTypeRadio=jQuery("input[name='transaction.recurrpay'][value='"+petaVars.constants.monthlyRadioValue+"']");if(donationTypeRadio.length&&donationTypeRadio.length==1)
donationTypeRadio.prop("checked",true);EngagingNetworks.require._defined.enDependencies.dependencies.parseDependencies(EngagingNetworks.dependencies);var donationRadio=jQuery("input.en__field__input.en__field__input--radio[name='transaction.donationAmt'][value='"+donationValue+"']");if(donationRadio.length)
{donationRadio.prop("checked",true);jQuery(".en__field__item.en__field__item--other input[type='text']").val("");}
else
{console.log("Set other radio to 'checked', since our amount doesn't match any of the radios");jQuery("input.en__field__input.en__field__input--radio[name='transaction.donationAmt'][value='"+petaVars.constants.otherRadioValue+"']").prop("checked",true);donationOther.val(donationValue);}
console.log("close window");jQuery.magnificPopup.close();console.log("submit form");jQuery("[name='"+petaVars.flags.state.donationInteractionQuestion+"']").val("Y");resolve();}
function doGoMonthly(resolve,reject){var lightboxField=jQuery("input[name='supporter.questions."+petaVars.fields.showGoMonthlyLightbox+"']");if(lightboxField.length>0)
{showGoMonthlyLightBox=(lightboxField.val()=="Y"||lightboxField.val()=="Yes"||lightboxField.val()=="YES");}
if(showGoMonthlyLightBox==false)
{resolve();return true;}
if(window.goMonthlyHasShown){console.log("Don't show lightbox - already shown");resolve();return true;}
if(jQuery("#goMonthly").length==0)
{resolve();return true;}
var donationType=jQuery("input[name='transaction.recurrpay']:checked");var donationAmount=jQuery("input.en__field__input.en__field__input--radio[name='transaction.donationAmt']:checked");var donationOther=jQuery(".en__field__item.en__field__item--other input[type='text']");var donationValue=getDonationAmount(donationAmount,donationOther);var paymentType=jQuery('#en__field_transaction_paymenttype');if(donationValue==0)
return true;if(needGoMonthly(donationType,donationValue,paymentType)){var goMonthlyAmount=getGoMonthlyAmount(donationValue);if(goMonthlyAmount.isMonthly){jQuery("#testparagraph").text(goMonthlyAmount.amount.toFixed(2));jQuery.magnificPopup.open({items:{src:'#goMonthly'},type:'inline',callbacks:{close:function(){resolve();}}},0);window.goMonthlyHasShown=true;console.log("Set so lightbox doesn't show next time");jQuery("div#userYesButton").on("click",function(e){e.preventDefault();e.stopImmediatePropagation();completeGoMonthly(resolve)});jQuery("button[name='pstep_finish']").on("click",function(){resolve();});return false;}}
resolve();return true;}
function setBankRoutingNumberLink(){jQuery("p.ccvv__link a.open-popup-link[href='#bank-routing-info']").detach().appendTo(".en__field--bankRoutingNumber");}
function setCCExpirationRange()
{var ccExpire=jQuery("select.en__field__input[name='transaction.ccexpire'][id!='en__field_transaction_ccexpire']");if(ccExpire.length>0)
{var yearOffset=2000;var i=jQuery(ccExpire).find("option").toArray().reduce(function(total,curVal)
{var curNumber=parseInt(curVal.value);if(isNaN(curNumber)===false)
return Math.max(total,curNumber);return total;},0);if(i>2000)
yearOffset=0;var currentYear=(new Date()).getFullYear()-yearOffset;for(;i<currentYear+18;i++)
ccExpire.append(jQuery("<option>").text((i+1)+yearOffset).attr("value",(i+1)));}}
function removeBankAccount()
{var payTypeDDL=jQuery('#en__field_transaction_paymenttype');if(payTypeDDL.val()=="EC")
{payTypeDDL.val("VI");payTypeDDL.trigger("change");if(EngagingNetworks&&EngagingNetworks.require&&EngagingNetworks.require._defined&&EngagingNetworks.require._defined.enDependencies&&EngagingNetworks.require._defined.enDependencies.dependencies&&typeof EngagingNetworks.require._defined.enDependencies.dependencies.parseDependencies==="function")
setTimeout(function(){EngagingNetworks.require._defined.enDependencies.dependencies.parseDependencies(EngagingNetworks.dependencies);},100);}
payTypeDDL.find("option[value='EC']").remove();jQuery(".cc__icons ul li").find("img[alt='Bank Account'],img[alt='Cuenta de banco']").hide();}
function addBankAccount()
{var payTypeDDL=jQuery('#en__field_transaction_paymenttype');if(bankAccountEnabled&&payTypeDDL.length&&payTypeDDL.find('option[value="EC"]').length==0&&petaVars.flags.paymentType.bank==true)
{payTypeDDL.append("<option value='EC'>Bank Account</option>");jQuery(".cc__icons ul li").find("img[alt='Bank Account'],img[alt='Cuenta de banco']").show();}}
var bankAccountEnabled=false;function initBankAccount()
{if(petaVars.flags.paymentType.bank==true&&jQuery('#en__field_transaction_paymenttype').find('option[value="EC"]').length>0)
bankAccountEnabled=true;if(enFields.country.val()!="US"||bankAccountEnabled==false)
removeBankAccount();}
function initDonationAmountDefaults()
{var donationAmtID=petaEN.pageBuilder.getFieldByName("transaction.donationAmt");for(var i=0;i<EngagingNetworks.dependencies.length;i++)
{for(var j=0;j<EngagingNetworks.dependencies[i].actions.length;j++)
{if(EngagingNetworks.dependencies[i].actions[j].type=="altlist"&&EngagingNetworks.dependencies[i].actions[j].target==donationAmtID)
{var newConditions=JSON.parse(JSON.stringify(EngagingNetworks.dependencies[i].conditions));newConditions.push({"comparator":"!=","condition":"AND","target":"field:"+petaEN.pageBuilder.getFieldByName(petaVars.flags.state.donationInteractionQuestion),"value":"Y"});for(var x=0;x<EngagingNetworks.altLists.length;x++)
{if(EngagingNetworks.altLists[x].id==donationAmtID)
{for(var y=0;y<EngagingNetworks.altLists[x].data.length;y++)
{if(EngagingNetworks.dependencies[i].actions[j].altlist==EngagingNetworks.altLists[x].data[y].name)
{for(var z=0;z<EngagingNetworks.altLists[x].data[y].data.length;z++)
{if(EngagingNetworks.altLists[x].data[y].data[z].selected==true)
{EngagingNetworks.dependencies.push({"actions":[{target:"field:"+donationAmtID,type:"setValue",value:EngagingNetworks.altLists[x].data[y].data[z].value}],"conditions":newConditions});}}}}}}}}}}
var activateEmailValidation=function(){if(typeof petaVars!=='undefined'){if(typeof petaVars.constants.emailValidationLanguage!=='undefined'){jQuery('#en__field_supporter_emailAddress').validate_email({'lang':petaVars.constants.emailValidationLanguage});}}};window.enOnSubmit=function()
{if(enFields.address2.val()==''||enFields.address2.val()==null)
{console.log("Value is empty");enFields.address2.val('\xa0');console.log("Value is now ["+enFields.address2.val()+"]");}
if(enFields.paymentType.val()=="EC")
{jQuery('[name="transaction.othamt3"]').val(enFields.bankRoutingTransitNumber.val());}
if(window.postValidateErrors.length>0)
{window.postValidateErrors.forEach(function(field)
{var verify=petaEN.pageBuilder.getFieldValidator(enFields.verifyBankAccountNumber.fieldId);if(verify){verify.showMessage();}});window.postValidateErrors=[];return false;}
if(typeof window.tipJar!=="undefined"&&"tipJarSubmit"in window.tipJar&&typeof window.tipJar.tipJarSubmit==="function")
window.tipJar.tipJarSubmit();return Promise.all([new Promise(function(resolveFB,rejectFB)
{if(petaEN.formBuilder.hasPostedToFormBuilder==false&&(enFields.petaMobileOptIn.isOnPage()&&enFields.mobilePhone.isOnPage()&&enFields.petaMobileOptIn.val()!=""))
{petaEN.formBuilder.hasPostedToFormBuilder=true;postToFormBuilder(petaEN.formBuilder.optInForm(),enFields,resolveFB,rejectFB);}
else if(petaEN.formBuilder.hasPostedToFormBuilder==false&&(enFields.petaMobileOptInSos.isOnPage()&&enFields.mobilePhone.isOnPage()&&enFields.petaMobileOptInSos.val()!=""))
{petaEN.formBuilder.hasPostedToFormBuilder=true;postToFormBuilder(petaEN.formBuilder.optInForm('sos'),enFields,resolveFB,rejectFB);}
else
resolveFB();}),new Promise(function(resolve,reject)
{if(petaEN.isMobile.any())
resolve();else
doGoMonthly(resolve,reject);}),new Promise(function(resolve,reject)
{window.dataLayer=window.dataLayer||[];window.dataLayer.push({"event":"enSubmission","pageName":pageJson.pageName});resolve();}),new Promise(function(resolve,reject)
{if(typeof window.updateAutofill!=="undefined"&&typeof window.updateAutofill==="function")
{window.updateAutofill(resolve);setTimeout(resolve,2000);}
else
resolve();})]);}
window.postValidateErrors=[];window.enOnValidate=function()
{var result=true;window.postValidateErrors=[];if(enFields.verifyBankAccountNumber.isOnPage()){if(enFields.verifyBankAccountNumber.isValid()==false){window.postValidateErrors.push(enFields.verifyBankAccountNumber);var verify=petaEN.pageBuilder.getFieldValidator(enFields.verifyBankAccountNumber.fieldId);if(verify){setTimeout(function()
{verify.showMessage();},200);result=false;}}}
if(enFields.petaMobileOptIn.isOnPage()&&enFields.petaMobileOptIn.checked()==true&&enFields.mobilePhone.isOnPage()&&enFields.mobilePhone.val()==""){var phone;if(enFields.mobilePhone.isOnPage()&&enFields.mobilePhone.val()==""){phone=petaEN.pageBuilder.getFieldValidator(enFields.mobilePhone.fieldId);}
if(phone){setTimeout(function()
{phone.showMessage();},200);result=false;}}
if(enFields.petaMobileOptIn.isOnPage()&&enFields.petaMobileOptIn.checked()==false&&enFields.mobilePhone.isOnPage()&&enFields.mobilePhone.val()!=""){var optIn=petaEN.pageBuilder.getFieldValidator(enFields.petaMobileOptIn.fieldId);if(optIn){setTimeout(function()
{optIn.showMessage();},200);result=false;}}
if(enFields.petaMobileOptInSos.isOnPage()&&enFields.petaMobileOptInSos.checked()==true&&enFields.mobilePhone.isOnPage()&&enFields.mobilePhone.val()==""){var phone;if(enFields.mobilePhone.isOnPage()&&enFields.mobilePhone.val()==""){phone=petaEN.pageBuilder.getFieldValidator(enFields.mobilePhone.fieldId);}
if(phone){setTimeout(function()
{phone.showMessage();},200);result=false;}}
if(enFields.petaMobileOptInSos.isOnPage()&&enFields.petaMobileOptInSos.checked()==false&&enFields.mobilePhone.isOnPage()&&enFields.mobilePhone.val()!=""){var optIn=petaEN.pageBuilder.getFieldValidator(enFields.petaMobileOptInSos.fieldId);if(optIn){setTimeout(function()
{optIn.showMessage();},200);result=false;}}
if(result)
{}
return result;}
window.enOnError=function()
{petaEN.pageBuilder.scrollToFirstError();}
var pageInitialization={afterHeadLoad:function()
{PETA_URL.init();petaEN.formBuilder.hasPostedToFormBuilder=false;},afterPageLoad:function()
{if(checkForP2P())
{pageInitialization.pageTypeInit.p2p();pageInitialization._afterPageLoad();}
else
petaEN.utility.whenAvailable("EngagingNetworks.require._defined.enValidation.validation",pageInitialization._afterPageLoad);},_afterPageLoad:function()
{enFields=buildFormData();if(petaEN.isMobile.any()){setKeyboardTypes();}
getCountry();if(checkForPagesInUS())
countryOnChange();moveErrors();movePhotoCredit();gaEvents();generateReferrerField();petaEN.utility.whenAvailable("pageJson.pageName",function()
{window.dataLayer=window.dataLayer||[];window.dataLayer.push({"pageName":pageJson.pageName});});if(petaVars.flags.emailValidation.enabled==true){if(typeof petaVars.constants.emailValidationLanguage!=='undefined')
jQuery("input[name='"+petaVars.fields.emailAddress+"']").validate_email({'lang':petaVars.constants.emailValidationLanguage});else
jQuery("input[name='"+petaVars.fields.emailAddress+"']").validate_email();}
if(checkForPostAction())
pageInitialization.pageTypeInit.postAction();if(checkForDonate())
pageInitialization.pageTypeInit.donate();if(checkForTakeAction())
pageInitialization.pageTypeInit.advocacy();},pageTypeInit:{p2p:function()
{for(var propName in petaVars.fields)
{var supporterPrefix="supporter.";if(petaVars.fields[propName].indexOf(supporterPrefix)==0)
petaVars.fields[propName]=petaVars.fields[propName].substring(supporterPrefix.length);}
jQuery("input.optional-input.donationAmt").on("change blur",function(){this.value=(this.value||"").replace(/Â£|\$|â¬|â±/gi,"");});jQuery(document).ajaxComplete(function(a,b,c)
{if(typeof c!=="undefined"&&c!=null)
{if(c.url==document.location.origin+"/widget/signup")
pageInitialization._afterPageLoad();}});},donate:function()
{if(checkForP2P()==false)
{initDonationAmountDefaults();jQuery("[name='supporter.questions."+petaVars.fields.donorTypeField+"']").val(((document.location.search.match(/[?&]dt=([^&]+)/)||(document.location.search.match(/[?&]dt=/)==null&&document.location.search.match(/[?&]ea.profile.id=([^&]+)/))||(typeof pageJson.supporterId!=="undefined"&&document.location.search.match(/[?&]ea.url.id=/)!=null&&document.location.search.indexOf('&forwarded=true')==-1&&[null,"HPC"])||[null,""])[1]).toLowerCase());if(EngagingNetworks&&EngagingNetworks.require&&EngagingNetworks.require._defined&&EngagingNetworks.require._defined.enDependencies&&EngagingNetworks.require._defined.enDependencies.dependencies&&typeof EngagingNetworks.require._defined.enDependencies.dependencies.parseDependencies==="function")
{EngagingNetworks.require._defined.enDependencies.dependencies.parseDependencies(EngagingNetworks.dependencies);enFields.recurringPayment.trigger("change");}}
if(enFields.recurringPayment.isOnPage())
{showMonthlyElements(true);if(enFields.recurringPayment.val()=="Y")
setMonthlyLabels(true);else
setMonthlyLabels(false);}
else
showMonthlyElements(false);setBankRoutingNumberLink();setCCExpirationRange();initBankAccount();setGoMonthlyLightbox();},advocacy:function()
{if((pageJson||window).giftProcess==false)
{var shareBlock=(jQuery("div#hiddenInfo").prop("outerHTML")||"");var titleBlock=(jQuery("title").prop("outerHTML")||"");var imageBlock=(jQuery("img.pageImage").prop("outerHTML")||"");sessionStorage.setItem("advo_"+((pageJson||window).campaignPageId||"00000"),encodeURIComponent(btoa(escape(shareBlock+titleBlock+imageBlock))));}
if(enFields.petaMobileOptIn.isOnPage()&&enFields.mobilePhone.isOnPage()){enFields.mobilePhone.val("");enFields.petaMobileOptIn.checked(false);}
jQuery(".en__contactSubject__field").prop("autocomplete","jalapenos"+Math.random());jQuery(".en__contactSubject__field").prop("readonly",true);jQuery(".en__contactSubject__field").focusin(function(){if(jQuery(".en__contactSubject__field").prop("readonly"))
{jQuery(".en__contactSubject__field").prop("readonly",false);jQuery(".en__contactSubject__field").blur();jQuery(".en__contactSubject__field").focus();}});},postAction:function()
{getAlertInfo();}}}