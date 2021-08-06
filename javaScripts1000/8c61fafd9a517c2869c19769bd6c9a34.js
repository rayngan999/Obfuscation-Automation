if(window.dw&&window.dw.applepay&&window.ApplePaySession&&window.ApplePaySession.canMakePayments()&&typeof fetch==='function'){(function(config,location,ApplePaySession){var APPLE_PAY_VERSION=1;var CLASS_PROCESSED='dw-apple-pay-processed';var ATTR_SKU='sku';var UPDATE_REQUEST_COOKIE_LHS='; dwapupreq=';var STATUSES={Failure:ApplePaySession.STATUS_FAILURE,InvalidBillingPostalAddress:ApplePaySession.STATUS_INVALID_BILLING_POSTAL_ADDRESS,InvalidShippingPostalAddress:ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,InvalidShippingContact:ApplePaySession.STATUS_INVALID_SHIPPING_CONTACT,PINRequired:ApplePaySession.STATUS_PIN_REQUIRED,PINIncorrect:ApplePaySession.STATUS_PIN_INCORRECT,PINLockout:ApplePaySession.STATUS_PIN_LOCKOUT};if(location.protocol!=='https:'||!ApplePaySession.supportsVersion(APPLE_PAY_VERSION)){return;}
var action=config.action;var inject=config.inject;var lastUpdateRequestCookie;var redirect;var request;var updatedRequest;var session;function hasClass(element,className){return(' '+element.className+' ').replace(/[\t\r\n\f]/g,' ').indexOf(' '+className+' ')>-1;}
function mapStatus(status){if(status&&STATUSES[status]){return STATUSES[status];}
return ApplePaySession.STATUS_FAILURE;}
function handleResponse(response){return response.json().then(function(json){if(response.status>=200&&response.status<300){return json;}
var err=new Error(json?json.status:'Request error');err.response=json;throw err;});}
function postJson(url,data){var json=data;if(typeof data==='object'){json=JSON.stringify(data);}else if(typeof data!=='string'){throw new Error('Data must be an object or a JSON string.');}
return fetch(url,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json','Accept':'application/json'},body:json}).then(handleResponse);}
function getJson(url){return fetch(url,{credentials:'include',headers:{'Accept':'application/json'}}).then(handleResponse);}
function filterEvent(e){var filteredEvent={};for(var prop in e){if(!Event.prototype.hasOwnProperty(prop)){filteredEvent[prop]=e[prop];}}
return filteredEvent;}
function submitOrder(formAction){var form=document.createElement('form');form.action=formAction;form.method='post';document.body.appendChild(form);form.submit();}
function doRedirect(){if(redirect){location.href=redirect;}}
function dispatchEvent(event){if(!event||!event.name){return;}
document.body.dispatchEvent(new CustomEvent(event.name,{bubbles:true,detail:event.detail}));}
function processServerResponse(response){if(!response){return;}
if(typeof response.redirect!=='undefined'){redirect=response.redirect;}
dispatchEvent(response.event);}
function oncancelHandler(e){setSession(null);postJson(action.cancel,{}).then(function(response){processServerResponse(response);doRedirect();},function(error){processServerResponse(error.response);doRedirect();}).catch(function(err){console.error(err);});}
function onpaymentauthorizedHandler(e){postJson(action.onpaymentauthorized,filterEvent(e)).then(function(response){session.completePayment(ApplePaySession.STATUS_SUCCESS);processServerResponse(response);setSession(null);submitOrder(response.redirect);},function(error){session.completePayment(mapStatus(error.message));processServerResponse(error.response);doRedirect();}).catch(function(err){console.error(err);});}
function onpaymentmethodselectedHandler(e){postJson(action.onpaymentmethodselected,filterEvent(e)).then(function(response){updatedRequest=Object.assign(updatedRequest,response);session.completePaymentMethodSelection(response.total,response.lineItems);processServerResponse(response);},function(error){session.completePaymentMethodSelection(updatedRequest.total,updatedRequest.lineItems);processServerResponse(error.response);}).catch(function(err){console.error(err);});}
function onshippingcontactselectedHandler(e){postJson(action.onshippingcontactselected,filterEvent(e)).then(function(response){updatedRequest=Object.assign(updatedRequest,response);session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS,response.shippingMethods,response.total,response.lineItems);processServerResponse(response);},function(error){session.completeShippingContactSelection(mapStatus(error.message),[],updatedRequest.total,updatedRequest.lineItems);processServerResponse(error.response);}).catch(function(err){console.error(err);});}
function onshippingmethodselectedHandler(e){postJson(action.onshippingmethodselected,filterEvent(e)).then(function(response){updatedRequest=Object.assign(updatedRequest,response);session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS,response.total,response.lineItems);processServerResponse(response);},function(error){session.completeShippingMethodSelection(mapStatus(error.message),updatedRequest.total,updatedRequest.lineItems);processServerResponse(error.response);}).catch(function(err){console.error(err);});}
function onvalidatemerchantHandler(e){postJson(action.onvalidatemerchant,Object.assign(filterEvent(e),{hostname:window.location.hostname})).then(function(response){session.completeMerchantValidation(response.session);},function(error){session.abort();}).catch(function(err){console.error(err);});}
function setSession(s){if(session){session.oncancel=null;session.onpaymentauthorized=null;session.onpaymentmethodselected=null;session.onshippingcontactselected=null;session.onshippingmethodselected=null;session.onvalidatemerchant=null;}
session=s;if(session){session.oncancel=oncancelHandler;session.onpaymentauthorized=onpaymentauthorizedHandler;session.onpaymentmethodselected=onpaymentmethodselectedHandler;session.onshippingcontactselected=onshippingcontactselectedHandler;session.onshippingmethodselected=onshippingmethodselectedHandler;session.onvalidatemerchant=onvalidatemerchantHandler;}}
function createSession(){if(parseFloat(request.total.amount)===0){request.total.amount='0.01';}
setSession(new ApplePaySession(APPLE_PAY_VERSION,request));session.begin();updatedRequest=Object.assign({},request);}
function prepareBasket(sku){postJson(action.prepareBasket,{sku:sku}).then(function(response){processServerResponse(response);},function(error){try{session.abort();}catch(e){console.error(e);}
processServerResponse(error.response);doRedirect();}).catch(function(err){console.error(err);});}
function validateInject(element,directive){if(element.hasAttribute(ATTR_SKU)){return!!request;}
return request&&request.total&&request.total.amount&&parseFloat(request.total.amount)>0;}
function createButton(element,directive){var button=document.createElement('button');button.type='button';var className='';if(directive.css){className+=directive.css;}
if(directive.copy){if(element.getAttribute(ATTR_SKU)){button.setAttribute(ATTR_SKU,element.getAttribute(ATTR_SKU));}
if(element.className){className+=' '+element.className;}
if(element.id){var id=element.id;element.id='';button.id=id;}}
if(className){button.className=className;}
if(directive.style){var styleElement;if(directive.style.ref==='this'){styleElement=element;}else if(directive.style.ref){styleElement=document.querySelector(directive.style.ref);}
if(styleElement&&directive.style.attr&&'getComputedStyle'in window){var computedStyle=window.getComputedStyle(styleElement);var style='';for(var i=0;i<directive.style.attr.length;i++){style+=directive.style.attr[i]+':'+computedStyle.getPropertyValue(directive.style.attr[i])+';';}
button.style=style;}}
button.onclick=function(){prepareBasket(button.getAttribute(ATTR_SKU));createSession();return false;};return button;}
function process(element,directive){if(hasClass(element,CLASS_PROCESSED)){return;}
if(!validateInject(element,directive)){return;}
var button=createButton(element,directive);switch(directive.action){case 'after':element.parentNode.appendChild(button,element.nextSibling);break;case 'before':element.parentNode.insertBefore(button,element);break;case 'replace':element.parentNode.insertBefore(button,element);element.parentNode.removeChild(element);break;case 'append':element.appendChild(button);break;}
element.className+=' '+CLASS_PROCESSED;}
function processDirectives(){if(!request){return;}
var directive,elements;for(var i=0;i<inject.directives.length;i++){directive=inject.directives[i];elements=document.querySelectorAll(directive.query);if(elements&&elements.length>0){for(var j=0;j<elements.length;j++){process(elements[j],directive);}}}
if(inject.directives.length){setTimeout(processDirectives,1000);}}
function getRequest(){getJson(action.getRequest).then(function(response){request=Object.assign({},response.request);processDirectives();processServerResponse(response);}).catch(function(err){console.error(err);processServerResponse(error.response);});}
function getUpdateRequestCookie(){var cookie='; '+(document.cookie||'')+'; ';var start=cookie.indexOf(UPDATE_REQUEST_COOKIE_LHS);if(start<0){return '';}
start+=UPDATE_REQUEST_COOKIE_LHS.length;return cookie.substring(start,cookie.indexOf('; ',start));}
function pollCookies(){var value=getUpdateRequestCookie();if(value&&value!==lastUpdateRequestCookie){lastUpdateRequestCookie=value;getRequest();}}
getRequest();lastUpdateRequestCookie=getUpdateRequestCookie();setInterval(pollCookies,200);})(window.dw.applepay,window.location,window.ApplePaySession);}