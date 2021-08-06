//tealium universal tag - utag.202 ut4.0.202107071104, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){var link=document.createElement('link');link.rel='stylesheet';link.href='https://sdcstatics.com/css/salesforce-chat/sf-styles-10-29-2020.css';document.head.appendChild(link);}}catch(e){utag.DB(e)}},function(a,b){try{if(1){function clickableNav(){$('.js-launchLiveChat').click(function(){$('.helpButtonEnabled').click();$('#live-chat').html('<img class="MobileNav-linkIcon" alt="" src="/static/sdc_cms/images/icons/message-square.svg"> Loading Chat...');setTimeout(function(){$('.js-mobileNavClose').click();$('#live-chat').html('<img class="MobileNav-linkIcon" alt="" src="/static/sdc_cms/images/icons/message-square.svg"> Live Chat');},2000);})}
function clickableNavMobile(){$('#live-chat').click(function(){$('.helpButtonEnabled').click();$('#live-chat').html('<img class="mmNav-linkIcon" alt="" src="/static/sdc_cms/images/icons/message-square.svg"> Loading Chat...');setTimeout(function(){$('.js-mobileNavClose').click();$('#live-chat').html('<img class="mmNav-linkIcon" alt="" src="/static/sdc_cms/images/icons/message-square.svg"> Live Chat');},2000);})}
var chatLoadAttempt=1;function chatLoaded(){console.log('Trying to load chat nav item '+chatLoadAttempt+' times');setTimeout(function(){var liveChatButton=document.querySelector('.helpButtonEnabled');var liveChatButtonDisabled=document.querySelector('.helpButtonDisabled');var liveChatNavItem=document.querySelector('.js-launchLiveChat');var nonCmsNavItem=document.getElementById('live-chat');if(liveChatNavItem&&liveChatButton){liveChatNavItem.setAttribute('style','display: flex !important');console.log('Mobile Nav item available');clickableNav();}else if(liveChatNavItem===null&&nonCmsNavItem&&liveChatButton){nonCmsNavItem.setAttribute('style','display: flex !important');console.log('Mobile Nav item available');clickableNavMobile();}else{if(chatLoadAttempt<180){chatLoadAttempt++;chatLoaded();}else{console.log('Max attempts reached waiting for chat bubble');}
console.log('Bubble not available, mobile nav item not visible');}},1000);}
var waitForGlobal=function(key,callback){if(key){console.log('Chat window object found, spinning up nav item')
callback();}else{console.log('Chat window object not found, trying again...')
setTimeout(function(){waitForGlobal(key,callback);},100);}};waitForGlobal("window.embedded_svc",chatLoaded);}}catch(e){utag.DB(e)}},function(a,b){try{if(b['dom.pathname'].toString().indexOf('treatment-plan-3d')>-1){b['chat_customer_first_name']=b['customer_first_name'];b['chat_customer_last_name']=b['customer_last_name'];b['chat_customer_email']=b['customer_email']}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"//service.force.com/embeddedservice/5.0/esw.min.js"
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(){u.initialized=true;var EN_SalesButtonChatId='5733u000000UQrK';;var EN_NewCurrentCustomerChatId='5733u000000Q0Gk';var EN_NewCustomerChatId='5733u0000008ocL';var FR_SalesButtonChatId='5733u000000UQrP';var FR_NewCurrentCustomerChatId='5733u000000UQrF';var EN_NewCurrentCustomerChatId_NonUs='5733u0000008ocQ';var EN_NewCustomerChatId_AU='5733u0000008obr';var EN_NewCustomerChatId_CA='5733u0000008obw';var EN_NewCustomerChatId_HK='5733u0000008oc1';var EN_NewCustomerChatId_IE='5733u0000008oc6';var EN_NewCustomerChatId_NZ='5733u0000008ocB';var EN_NewCustomerChatId_US='5733u0000008ocG';var preChatInput_New_Customer="Learn more about clear aligners";var preChatInput_Sales="I'm ready to purchase my aligners";var preChatInput_Existing_Customer="I'm already a customer";function getLangCountryCodes(){var urlStr=window.location.href;var dashIndex=urlStr.lastIndexOf("-");var langCountryCodesMap={"lang":"en","cc":"us"};if(dashIndex>0){langCountryCodesMap.lang=urlStr.substring(dashIndex-2,dashIndex);langCountryCodesMap.cc=urlStr.substring(dashIndex+1,dashIndex+3);}
return langCountryCodesMap;}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";}
function getChatButtonId(language,preChatInput,CountryCode){console.log('Pre Chat Input - '+preChatInput);var buttonId=EN_NewCurrentCustomerChatId;if(preChatInput===preChatInput_Sales){buttonId=EN_SalesButtonChatId;}
else if(preChatInput===preChatInput_Existing_Customer){if(CountryCode=='US'){buttonId=EN_NewCurrentCustomerChatId;}
else{buttonId=EN_NewCurrentCustomerChatId_NonUs;}}
else if(preChatInput===preChatInput_New_Customer)
{if(CountryCode=='US'){buttonId=EN_NewCustomerChatId_US;}
else if(CountryCode=='AU'){buttonId=EN_NewCustomerChatId_AU;}
else if(CountryCode=='GB'){buttonId=EN_NewCustomerChatId;}
else if(CountryCode=='HK'){buttonId=EN_NewCustomerChatId_HK;}
else if(CountryCode=='NZ'){buttonId=EN_NewCustomerChatId_NZ;}
else if(CountryCode=='IE'){buttonId=EN_NewCustomerChatId_IE;}
else if(CountryCode=='CA'){buttonId=EN_NewCustomerChatId_CA;}}
console.log('Chat Button Id to be Routed - '+buttonId);return buttonId;}
var initESW=function(gslbBaseURL){embedded_svc.settings.displayHelpButton=true;embedded_svc.settings.language='en';var langCCMap=getLangCountryCodes();var Countr=getCookie('country_code');embedded_svc.settings.extraPrechatFormDetails=[{"label":"First Name","value":"Marc","transcriptFields":[],"displayToAgent":true},{"label":"Last Name","value":"Benioff","transcriptFields":[],"displayToAgent":false},{"label":"Email","value":"benioff@salesforce.com","transcriptFields":[],"displayToAgent":true}];embedded_svc.settings.extraPrechatInfo=[{"entityName":"Contact","showOnCreate":true,"linkToEntityName":"Case","linkToEntityField":"ContactId","saveToTranscript":"Contact","entityFieldMaps":[{"isExactMatch":true,"fieldName":"FirstName","doCreate":true,"doFind":false,"label":"First Name"},{"isExactMatch":true,"fieldName":"LastName","doCreate":true,"doFind":false,"label":"Last Name"},{"isExactMatch":true,"fieldName":"Email","doCreate":true,"doFind":true,"label":"Email"}]},{"entityName":"Case","showOnCreate":true,"saveToTranscript":"Case","entityFieldMaps":[{"isExactMatch":false,"fieldName":"Subject","doCreate":true,"doFind":false,"label":"issue"},{"isExactMatch":false,"fieldName":"Status","doCreate":true,"doFind":false,"label":"Status"},{"isExactMatch":false,"fieldName":"Origin","doCreate":true,"doFind":false,"label":"Origin"}]}]
embedded_svc.settings.directToButtonRouting=function(prechatFormData){console.log('Selected Option from Pre-Chat Form - '+prechatFormData[3].value);var chatButtonId=getChatButtonId(langCCMap.lang,prechatFormData[3].value,Countr);return chatButtonId;};var Coun=getCookie('country_code');console.log('****'+Coun);var lang=getCookie('django_language');console.log('####'+lang);embedded_svc.settings.extraPrechatFormDetails=[{"label":"Country Field","value":Coun,"transcriptFields":["Country_Field__c"],"displayToAgent":true},{"label":"Language Field","value":lang,"transcriptFields":["Language_Field__c"],"displayToAgent":true},{"label":"CountryCode","value":langCCMap.cc,"transcriptFields":["CountryCode__c"],"displayToAgent":true},{"label":"Email","transcriptFields":["Email__c"],"displayToAgent":true},{"label":"First Name","transcriptFields":["First_Name__c"],"displayToAgent":true},{"label":"Last Name","transcriptFields":["Last_Name__c"],"displayToAgent":true}];embedded_svc.settings.enabledFeatures=['LiveAgent'];embedded_svc.settings.entryFeature='LiveAgent';embedded_svc.settings.widgetWidth="320";embedded_svc.settings.widgetHeight="220";embedded_svc.init('https://smiledirectclub.my.salesforce.com','https://smiledirectclub.secure.force.com/ChatBotAgent',gslbBaseURL,'00D6A0000002EZD','Chat_Team_New',{baseLiveAgentContentURL:'https://c.la4-c2-ph2.salesforceliveagent.com/content',deploymentId:'5723u000000UfdW',buttonId:'5733u000000Q0Gk',baseLiveAgentURL:'https://d.la4-c2-ph2.salesforceliveagent.com/chat',eswLiveAgentDevName:'EmbeddedServiceLiveAgent_Parent04I3u000000TQCvEAO_1750cdf7401',isOfflineSupportEnabled:false,needEstimatedWaitTime:1});};if(!window.embedded_svc){var s=document.createElement('script');s.setAttribute('src','https://smiledirectclub.my.salesforce.com/embeddedservice/5.0/esw.min.js');s.onload=function(){initESW(null);};document.body.appendChild(s);}else{initESW('https://service.force.com');}
};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_202'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("202","smiledirectclub.main");}catch(error){utag.DB(error);}