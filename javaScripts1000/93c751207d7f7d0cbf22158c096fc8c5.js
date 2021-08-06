function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}define("components/sharedUI/forms",["FR","jquery","ea","moment"],function(e,t,n,r){var o=[0,8],a=[48,49,50,51,52,53,54,55,56,57],i=a.concat([40,41,43,45]),f=[32,39,45,46],s=function(e){var n,r,o=t(e.currentTarget).val(),a="",i=!0;try{n=e.currentTarget.selectionStart}catch(e){i=!1}try{r=e.currentTarget.selectionEnd}catch(e){i=!1}return void 0!==i&&n>=0&&r>=0?a=o.substring(n,r):window.getSelection?a=window.getSelection().toString():document.getSelection?a=document.getSelection().toString():document.selection&&(a=document.selection.createRange().text.toString()),o.replace(a,"")},d=function(e){return e.replace(/\D/g,"")},c=function(e,t){if(o.indexOf(e)>=0)return!0;var n=d(t),r=a.indexOf(e)>=0,f=t.indexOf("+")>=0;return!(i.indexOf(e)<0||t.length>254||!0===r&&!1===f&&n.length>10||!0===r&&!0===f&&n.length>11)},u=function(e,t){return o.indexOf(e)>=0||!(t.length>254||64===e&&t.indexOf("@")>=0)},l=function(e,t){return o.indexOf(e)>=0||t.length<255&&(f.indexOf(e)>=0||e>=97&&e<=122||e>=65&&e<=90)},p=function(e,t){return o.indexOf(e)>=0||t.length<2&&a.concat(o).indexOf(e)>=0},v=function(e,t){return o.indexOf(e)>=0||t.length<4&&a.concat(o).indexOf(e)>=0},h=function(e,t){return o.indexOf(e)>=0||t.length<5&&a.indexOf(e)>=0},m=function(e,t){if(o.indexOf(e)>=0)return!0;if(32==e&&t.indexOf(" ")>=0)return!1;var n=t.replace(/ /g,"");return t.length<255&&(n.length<6||32==e)&&(a.indexOf(e)>=0||32==e||e>=97&&e<=122||e>=65&&e<=90)},g=function(e,t){return o.indexOf(e)>=0||t.length<255},O=function(e,t){return o.indexOf(e)>=0||t.length<16&&a.indexOf(e)>=0},y=function(e,t){return o.indexOf(e)>=0||t.length<4&&a.indexOf(e)>=0},x=function(e,t){return t.length<16&&(o.concat(a).indexOf(e)>=0||e>=97&&e<=122||e>=65&&e<=90)},b=function(e,t){for(var n,r=e.originalEvent.clipboardData.getData("Text"),o=s(e),a=0;a<r.length;a++){if(!1===t((n=r.substring(a,a+1)).charCodeAt(0),o)){e.preventDefault();break}o+=n}},w=function(e){!1===e.ctrlKey&&!1===c(e.which,s(e))&&e.preventDefault()},S=function(e){b(e,c)},D=function(e){!1===e.ctrlKey&&!1===u(e.which,s(e))&&e.preventDefault()},k=function(e){b(e,u)},M=function(e){!1===e.ctrlKey&&!1===l(e.which,s(e))&&e.preventDefault()},P=function(e){b(e,l)},j=function(e){!1===e.ctrlKey&&!1===p(e.which,s(e))&&e.preventDefault()},C=function(e){b(e,p)},E=function(e){!1===e.ctrlKey&&!1===v(e.which,s(e))&&e.preventDefault()},K=function(e){b(e,v)},$=function(e){var t=e.closest("form"),n=t.find('[data-forms="country"]');return 0===n.length&&(n=t.find('[data_forms="country"]')),n},T=function(e){var n=t(this),r=$(n),o=1===r.length?r.val():"",a="USA"==o?h:"Canada"==o?m:g;!1===e.ctrlKey&&!1===a(e.which,s(e))&&e.preventDefault()},_=function(e){var n=t(this),r=$(n),o=1===r.length?r.val():"";b(e,"USA"==o?h:"Canada"==o?m:g)},A=function(e){!1===e.ctrlKey&&!1===O(e.which,s(e))&&e.preventDefault()},F=function(e){b(e,O)},Y=function(e){!1===e.ctrlKey&&!1===y(e.which,s(e))&&e.preventDefault()},U=function(e){b(e,y)},V=function(e){!1===e.ctrlKey&&!1===x(e.which,s(e))&&e.preventDefault()},z=function(e){b(e,x)},N=function(e){if(!e.match(/^\d+$/))return!1;var t,n,r=0;for(t=0;t<e.length;t++)r+=(n=e.charAt(e.length-t-1)-"0"<<(1&t))>9?n-9:n;return r%10==0&&r>0},I=function(e,t){if(""===e||null==e||""===t||null==t)return!0;var n=r().endOf("month"),o=r(e+"/"+t,"M/YYYY").endOf("month");return!(!o.isSame(n)&&!o.isAfter(n))},L=function(e){return window.digitalData.user.getUserEmail().toLowerCase()!==e.toLowerCase()},R=function(e){e.find(".input-validation-error,.validation-error").filter(":visible").first().focus()},q=function(){t('[data-forms="phone"]').off("keypress",w).on("keypress",w),t('[data-forms="phone"]').off("paste",S).on("paste",S),t('[data-forms="email"]').off("keypress",D).on("keypress",D),t('[data-forms="email"]').off("paste",k).on("paste",k),t('[data-forms="name"]').off("keypress",M).on("keypress",M),t('[data-forms="name"]').off("paste",P).on("paste",P),t('[data-forms="dobMonth"], [data-forms="dobDay"], [data-forms="shoeSize"]').off("keypress",j).on("keypress",j),t('[data-forms="dobMonth"], [data-forms="dobDay"], [data-forms="shoeSize"]').off("paste",C).on("paste",C),t('[data-forms="dobYear"]').off("keypress",E).on("keypress",E),t('[data-forms="dobYear"]').off("paste",K).on("paste",K),t('[data-forms="zip"]').off("keypress",T).on("keypress",T),t('[data-forms="zip"]').off("paste",_).on("paste",_),t('[data-forms="creditcard"]').off("keypress",A).on("keypress",A),t('[data-forms="creditcard"]').off("paste",F).on("paste",F),t('[data-forms="creditcardcvv"]').off("keypress",Y).on("keypress",Y),t('[data-forms="creditcardcvv"]').off("paste",U).on("paste",U),t('[data-forms="promoCode"]').off("keypress").on("keypress",V),t('[data-forms="promoCode"]').off("paste").on("paste",z)},B=function(){t.each(t("form"),function(e,n){var r=t(n);r.removeData("validator"),r.removeData("unobtrusiveValidation"),t.validator.unobtrusive.parse(n);var o=r.data("validator");if(o){var a=o.form,i=o.element,f=function(){r.find('[aria-invalid="false"]').removeAttr("aria-describedby")};o.form=function(){var e=a.apply(this,arguments);return f(),e},o.element=function(e){var t=i.apply(this,arguments);return f(),t}}}),q()};return t(function(){return n.addMethod("EnsureValidCreditCard",N),n.addMethod("EnsureValidCreditCardExpiration",I),n.addMethod("CheckEmailIsNotForLoggedInUser",L),n.settings.debug=!1,n.settings.dependencyTriggers=void 0,t.validator.setDefaults({ignore:"",onfocusout:function(e){t(e).valid()}}),void B()}),{bindEvents:q,initForms:B,initNewFields:function(e){t.each(t("form"),function(e,n){var r=t(n);t.validator.unobtrusive.parse(n);var o=r.data("unobtrusiveValidation"),a=r.validate();o&&t.each(o.options.rules,function(e,n){if(a.settings.rules[e])t.each(n,function(t,n){if(!a.settings.rules[e][t]){var i,f=(_defineProperty(i={},t,n),_defineProperty(i,"messages",o.options.messages[e][t]),i);r.find("[name='".concat(e,"']")).rules("add",f)}});else{var i=_objectSpread(_objectSpread({},n),{},{messages:o.options.messages[e]});r.find("[name='".concat(e,"']")).rules("add",i)}})})},getCreditCardType:function(e){return 0===e.indexOf("37")?"americanexpress":0===e.indexOf("4")?"visa":0===e.indexOf("51")||0===e.indexOf("52")||0===e.indexOf("53")||0===e.indexOf("54")||0===e.indexOf("55")||0===e.indexOf("2")?"mastercard":0===e.indexOf("300")||0===e.indexOf("301")||0===e.indexOf("302")||0===e.indexOf("303")||0===e.indexOf("304")||0===e.indexOf("305")||0===e.indexOf("36")||0===e.indexOf("38")?"diners":0===e.indexOf("6011")||0===e.indexOf("65")?"discover":0===e.indexOf("35")?"jcb":void 0},extractError:function(e){var t="";if(e.ModelState){for(var n in e.ModelState)if(e.ModelState.hasOwnProperty(n))for(var r=0;r<e.ModelState[n].length;r++)t+=" "+e.ModelState[n][r]}else t=e.Message;return t},extractFieldErrors:function(e,t,n){var r={};if(e.ModelState)for(var o in e.ModelState)if(e.ModelState.hasOwnProperty(o)){var a=void 0!==t?o.replace(t,n):o;r[a]="";for(var i=0;i<e.ModelState[o].length;i++)r[a]+=" "+e.ModelState[o][i]}return r},scrollToFirstError:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".validation-error,.input-validation-error,.field-validation-error",r=t.find(n).filter(":visible").first();1===r.length&&(e.$el.htmlBody.animate({scrollTop:r.offset().top-e.$el.mainNav.outerHeight(!0)-30},500),R(t))},focusFirstError:R,getPhoneNumberMask:function(e){var t=d(e);return 10===t.length?t=t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"):11===t.length&&"1"===t.charAt(0)&&(t=t.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/,"$1 ($2) $3-$4")),t},ensureValidCreditCardExpiration:I,phoneKeypress:w,phonePaste:S,emailKeypress:D,emailPaste:k}});
//# sourceMappingURL=forms.js.map
