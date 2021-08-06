webpackJsonp([139],{2392:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var r=a(2423),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.withParams=o.default;var n=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,a){return"function"==typeof e?e.call(t,a):a[e]},t.regex=function(e,t){return(0,o.default)({type:e},function(e){return!n(e)||t.test(e)})}},2405:function(e,t){function a(e,t){localStorage.setItem(e,t)}function r(e){return localStorage.getItem(e)}function o(e){localStorage.removeItem(e)}e.exports={setItemLocalStorage:a,getItemLocalStorage:r,removeItemLocalStorage:o}},2421:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var o=a(2422),n=r(o),i=a(2424),u=r(i),l=a(2425),c=r(l),s=a(2426),p=r(s),d=a(2427),f=r(d),m=a(2428),h=r(m),b=a(2429),_=r(b),g=a(2430),v=r(g),x=a(2431),k=r(x),N=a(2432),O=r(N),P=a(2433),y=r(P),w=a(2434),S=r(w),j=a(2435),A=r(j),q=a(2436),F=r(q),V=a(2437),$=r(V),L=a(2438),I=r(L),M=a(2439),C=r(M),E=a(2440),R=r(E);t.alpha=n.default,t.alphaNum=u.default,t.numeric=c.default,t.between=p.default,t.email=f.default,t.ipAddress=h.default,t.macAddress=_.default,t.maxLength=v.default,t.minLength=k.default,t.required=O.default,t.requiredIf=y.default,t.requiredUnless=S.default,t.sameAs=A.default,t.url=F.default,t.or=$.default,t.and=I.default,t.minValue=C.default,t.maxValue=R.default},2422:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=(0,r.regex)("alpha",/^[a-zA-Z]*$/)},2423:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(783).withParams;t.default=r},2424:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},2425:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=(0,r.regex)("numeric",/^[0-9]*$/)},2426:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a})}},2427:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392),o=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,r.regex)("email",o)},2428:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=(0,r.withParams)({type:"ipAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)});var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},2429:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var a="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(o)})};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},2430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e})}},2431:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e})}},2432:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=(0,r.withParams)({type:"required"},r.req)},2433:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},function(t,a){return!(0,r.ref)(e,this,a)||(0,r.req)(t)})}},2434:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},function(t,a){return!!(0,r.ref)(e,this,a)||(0,r.req)(t)})}},2435:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"sameAs",eq:e},function(t,a){return t===(0,r.ref)(e,this,a)})}},2436:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392),o=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i;t.default=(0,r.regex)("url",o)},2437:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"or"},function(){for(var e=this,a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t.length>0&&t.reduce(function(t,a){return t||a.apply(e,r)},!1)})}},2438:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"and"},function(){for(var e=this,a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t.length>0&&t.reduce(function(t,a){return t&&a.apply(e,r)},!0)})}},2439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},2440:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2392);t.default=function(e){return(0,r.withParams)({type:"maxValue",max:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},2653:function(e,t,a){var r=a(2654);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(1249)("0e96e4a2",r,!0,{})},2654:function(e,t,a){t=e.exports=a(1248)(!1),t.push([e.i,'.-callback-popup{width:548px!important}@media only screen and (max-width:767px){.-callback-popup{width:300px}}[dir] .-callback-popup__phone{margin-bottom:24px!important}[dir] .-callback-popup__phone-text{margin-bottom:40px}[dir] .-callback-popup__field-checkbox{margin-bottom:24px}.-callback-popup__label{display:inline-block}[dir] .-callback-popup__label{margin-bottom:8px}.-callback-popup__select{position:relative;z-index:10}[dir] .-callback-popup__select{margin-bottom:24px}.-callback-popup__select-button{position:relative;width:100%;height:56px;font-size:18px;color:rgba(59,60,60,.85);outline:none}[dir] .-callback-popup__select-button{background-color:#fff;border:1px solid rgba(0,0,0,.12);cursor:pointer}[dir=ltr] .-callback-popup__select-button{padding-left:16px;text-align:left}[dir=rtl] .-callback-popup__select-button{padding-right:16px;text-align:right}@media only screen and (max-width:1135px){.-callback-popup__select-button{height:48px}}@media only screen and (max-width:767px){[dir] .-callback-popup__select-button{margin-bottom:8px}}[dir] .-callback-popup__select-button:focus{-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,.2);box-shadow:0 2px 8px 0 rgba(0,0,0,.2)}.-callback-popup__select-button:after{position:absolute;content:"";width:24px;height:24px;top:16px}[dir] .-callback-popup__select-button:after{background-image:url(/public/img/pages/promo-bonus/premium/icon_watch.svg);background-size:24px 24px}[dir=ltr] .-callback-popup__select-button:after{right:16px}[dir=rtl] .-callback-popup__select-button:after{left:16px}@media only screen and (max-width:1135px){.-callback-popup__select-button:after{top:12px}}.-callback-popup__select-dropdown{position:absolute;height:176px;top:80px}[dir] .-callback-popup__select-dropdown{padding-top:8px;padding-bottom:8px;background:#fff;-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,.2);box-shadow:0 2px 8px 0 rgba(0,0,0,.2)}[dir=ltr] .-callback-popup__select-dropdown,[dir=rtl] .-callback-popup__select-dropdown{right:0;left:0}@media only screen and (max-width:767px){.-callback-popup__select-dropdown{position:static;width:100%;height:auto}}.-callback-popup__select-item{height:40px;line-height:40px}[dir=ltr] .-callback-popup__select-item{padding-left:16px}[dir=rtl] .-callback-popup__select-item{padding-right:16px}.-callback-popup__select-item:hover{color:#6a9598}[dir] .-callback-popup__select-item:hover{cursor:pointer}[dir=ltr] .-callback-popup .-captcha__input.-input{margin-right:20px}[dir=rtl] .-callback-popup .-captcha__input.-input{margin-left:20px}',""])},3976:function(e,t,a){"use strict";function r(e){return void 0===e||null===e||""===e.trim()||new RegExp("^[ -.'"+m.a.humanNameLetters+"]+$").test(e)}function o(e){a(2653)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(39),i=a.n(n),u=a(134),l=a.n(u),c=a(37),s=a.n(c),p=a(103),d=a(2421),f=a(2405),m=a(130),h={name:"CallbackPopup",data:function(){return{client:{},moduleActionPhone:["callback","CHEKING_PHONE"],captchaFieldName:"captcha",optionsOfValidate:{name:{required:d.required,humanName:r},phone:{required:d.required},captcha:{required:d.required,minLength:Object(d.minLength)(4),maxLength:Object(d.maxLength)(4)}},isFirstRequestCaptcha:!1,redirectToLoginParams:{name:"login"}}},components:{AppForm:function(){return a.e(1917).then(a.bind(null,2655))},AppInput:function(){return a.e(1422).then(a.bind(null,61))},Captcha:function(){return a.e(1491).then(a.bind(null,3977))},ContainerInputState:function(){return a.e(1532).then(a.bind(null,3978))},Popup:function(){return a.e(1416).then(a.bind(null,2658))}},computed:s()({},Object(p.e)("forms",{phone:function(e){return e.callback.callback.fields.phone},captcha:function(e){return e.callback.callback.fields.captcha},isLoadingButtonOfForm:function(e){return e.callback.callback.isLoadingButtonOfForm},objectOfErrorResponse:function(e){return e.callback.callback.objectOfErrorResponse}}),Object(p.e)("callback",["routeName","formName","isPopupOpened","isFormSended"]),Object(p.e)("authorization",{isAuthorized:function(e){return e.user.isAuthorized},userName:function(e){return e.user.clientNameOriginal},mobilePhone:function(e){return e.user.mobilePhone}}),{textOfValidate:function(){return{name:{required:this.$t("block_input.not-filled"),humanName:this.$t("block_input.not-valid")},phone:{required:this.$t("block_input.not-filled")},captcha:{required:this.$t("block_callback-popup.not-valid"),minLength:this.$t("block_form.min-length-error",{length:4}),maxLength:this.$t("block_form.max-length-error",{length:4})}}}}),methods:s()({},Object(p.d)("forms",{setValueIntoProp:"SET_VALUE_INTO_PROP",setValueIntoForm:"SET_VALUE_INTO_FORM"}),Object(p.d)("callback",{togglePopupOpenedStatus:"TOGGLE_POPUP_OPENED_STATUS",toggleFormSendedStatus:"TOGGLE_FORM_SENDED_STATUS"}),{redirectToLogin:function(){Object(f.setItemLocalStorage)("localeRoute",l()({name:this.$route.name,params:this.$route.params,hash:this.$route.hash,query:s()({},this.$route.query,{callback:"show"})})),this.togglePopupOpenedStatus(!1),this.$router.push(this.redirectToLoginParams)},togglePopupAndFormStatuses:function(){this.togglePopupOpenedStatus(!1),this.toggleFormSendedStatus(!1),this.resetFields(),this.hideCaptcha()},setDefaultFields:function(){this.userName&&this.setValueIntoProp({id:"name",prop:"value",value:this.userName,routeName:this.routeName,formName:this.formName}),this.mobilePhone&&this.setValueIntoProp({id:"phone",prop:"value",value:this.mobilePhone,routeName:this.routeName,formName:this.formName})},resetFields:function(){this.resetFieldOfState("name"),this.resetFieldOfState("phone"),this.setValueIntoProp({id:"captcha",prop:"isUpdateCaptcha",value:!1,routeName:this.routeName,formName:this.formName}),this.setDefaultFields()},showCaptcha:function(){this.resetFieldOfState("captcha"),this.setValueIntoProp({id:"captcha",prop:"isShow",value:!0,routeName:this.routeName,formName:this.formName})},hideCaptcha:function(){this.isFirstRequestCaptcha=!1,this.resetFieldOfState("captcha"),this.setValueIntoProp({id:"captcha",prop:"isShow",value:!1,routeName:this.routeName,formName:this.formName})},resetFieldOfState:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.setValueIntoProp({id:e,prop:"textError",value:a,routeName:this.routeName,formName:this.formName}),this.setValueIntoProp({id:e,prop:"status",value:t,routeName:this.routeName,formName:this.formName}),this.setValueIntoProp({id:e,prop:"isValidate",value:!1,routeName:this.routeName,formName:this.formName}),this.setValueIntoProp({id:e,prop:"value",value:"",routeName:this.routeName,formName:this.formName})},formResolve:function(e){200===e.status&&(this.$store.commit("callback/TOGGLE_FORM_SENDED_STATUS",!0),this.resetFields(),this.hideCaptcha())},formReject:function(e){404!==e.status&&504!==e.status||this.$emit("openError",this.$t("block_global.unknown-error"),this.$t("block_global.unknown-error"))}}),watch:{objectOfErrorResponse:function(){if(i()(this.objectOfErrorResponse).length>0){var e=this.objectOfErrorResponse;if("CAPTCHA"===e.error||"WRONG_CAPTCHA"===e.error){if(!this.isFirstRequestCaptcha)return this.showCaptcha(),void(this.isFirstRequestCaptcha=!0);this.setValueIntoProp({id:"captcha",prop:"isUpdateCaptcha",value:!0,routeName:this.routeName,formName:this.formName}),this.resetFieldOfState("captcha","error",e.text||e.error)}}}},created:function(){this.setDefaultFields(),this.togglePopupOpenedStatus("show"===this.$route.query.callback)}},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("popup",{attrs:{popupClass:"-callback-popup",title:e.isFormSended?e.$t("block_callback-popup.title-success"):e.$t("block_callback-popup.title"),isOpen:e.isPopupOpened},on:{close:e.togglePopupAndFormStatuses}},[e.isAuthorized||e.isFormSended?e._e():a("div",[a("p",[e._v(e._s(e.$t("block_callback-popup.auth")))]),a("router-link",{staticClass:"-btn",attrs:{to:e.redirectToLoginParams},nativeOn:{click:function(t){return e.redirectToLogin(t)}}},[e._v(e._s(e.$t("block_callback-popup.enter-my-alpari")))])],1),e.isFormSended?a("div",[a("p",[e._v(e._s(e.$t("block_callback-popup.text-success")))]),a("p",[e._v(e._s(e.$t("block_callback-popup.text-success-time")))])]):e._e(),e.isAuthorized&&!e.isFormSended?a("app-form",{attrs:{routeName:e.routeName,formName:e.formName,action:"/client/callback/"},on:{"promise:resolve":e.formResolve,"promise:reject":e.formReject}},[a("container-input-state",{attrs:{id:"name",routeName:e.routeName,formName:e.formName,label:e.$t("block_callback-popup.name"),optionsOfValidate:e.optionsOfValidate.name,textOfValidate:e.textOfValidate.name,autocomplete:"on"}}),a("container-input-state",{staticClass:"-callback-popup__phone",attrs:{id:"phone",routeName:e.routeName,formName:e.formName,dynamicValidationPath:"/registration/validation/phone/",moduleAction:e.moduleActionPhone,label:e.$t("block_input.phone"),optionsOfValidate:e.optionsOfValidate.phone,textOfValidate:e.textOfValidate.phone}}),e.captcha.isShow?a("captcha",{attrs:{routeName:e.routeName,formName:e.formName,captchaFieldName:e.captchaFieldName,optionsOfValidate:e.optionsOfValidate.captcha,textOfValidate:e.textOfValidate.captcha,captchaUrl:"/api/"+e.$locale+"/protection/show/0d1a8fa4e4223d0eaecb6fb3eae9d007c2d62e45/"}}):e._e(),a("button",{staticClass:"-btn",class:["-btn",{"-loading":e.isLoadingButtonOfForm}],attrs:{type:"submit"}},[e._v("\n      "+e._s(e.$t("block_callback-popup.send"))+"\n    ")])],1):e._e()],1)},_=[],g={render:b,staticRenderFns:_},v=g,x=a(128),k=o,N=x(h,v,!1,k,null,null);t.default=N.exports}});