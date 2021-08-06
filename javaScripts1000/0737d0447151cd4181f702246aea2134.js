/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 JÃ¶rn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/
(function(a){var d=a.validator,b,e="unobtrusiveValidation";function c(a,b,c){a.rules[b]=c;if(a.message)a.messages[b]=a.message}function j(a){return a.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/g)}function f(a){return a.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g,"\\$1")}function h(a){return a.substr(0,a.lastIndexOf(".")+1)}function g(a,b){if(a.indexOf("*.")===0)a=a.replace("*.",b);return a}function m(c,e){var b=a(this).find("[data-valmsg-for='"+f(e[0].name)+"']"),d=b.attr("data-valmsg-replace"),g=d?a.parseJSON(d)!==false:null;b.removeClass("field-validation-valid").addClass("field-validation-error");c.data("unobtrusiveContainer",b);if(g){b.empty();c.removeClass("input-validation-error").appendTo(b)}else c.hide()}function l(e,d){var c=a(this).find("[data-valmsg-summary=true]"),b=c.find("ul");if(b&&b.length&&d.errorList.length){b.empty();c.addClass("validation-summary-errors").removeClass("validation-summary-valid");a.each(d.errorList,function(){a("<li />").html(this.message).appendTo(b)})}}function k(d){var b=d.data("unobtrusiveContainer"),c=b.attr("data-valmsg-replace"),e=c?a.parseJSON(c):null;if(b){b.addClass("field-validation-valid").removeClass("field-validation-error");d.removeData("unobtrusiveContainer");e&&b.empty()}}function n(){var b=a(this),c="__jquery_unobtrusive_validation_form_reset";if(b.data(c))return;b.data(c,true);try{b.data("validator").resetForm()}finally{b.removeData(c)}b.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");b.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")}function i(b){var c=a(b),f=c.data(e),i=a.proxy(n,b),g=d.unobtrusive.options||{},h=function(e,d){var c=g[e];c&&a.isFunction(c)&&c.apply(b,d)};if(!f){f={options:{errorClass:g.errorClass||"input-validation-error",errorElement:g.errorElement||"span",errorPlacement:function(){m.apply(b,arguments);h("errorPlacement",arguments)},invalidHandler:function(){l.apply(b,arguments);h("invalidHandler",arguments)},messages:{},rules:{},success:function(){k.apply(b,arguments);h("success",arguments)}},attachValidation:function(){c.off("reset."+e,i).on("reset."+e,i).validate(this.options)},validate:function(){c.validate();return c.valid()}};c.data(e,f)}return f}d.unobtrusive={adapters:[],parseElement:function(b,h){var d=a(b),f=d.parents("form")[0],c,e,g;if(!f)return;c=i(f);c.options.rules[b.name]=e={};c.options.messages[b.name]=g={};a.each(this.adapters,function(){var c="data-val-"+this.name,i=d.attr(c),h={};if(i!==undefined){c+="-";a.each(this.params,function(){h[this]=d.attr(c+this)});this.adapt({element:b,form:f,message:i,params:h,rules:e,messages:g})}});a.extend(e,{__dummy__:true});!h&&c.attachValidation()},parse:function(c){var b=a(c),e=b.parents().addBack().filter("form").add(b.find("form")).has("[data-val=true]");b.find("[data-val=true]").each(function(){d.unobtrusive.parseElement(this,true)});e.each(function(){var a=i(this);a&&a.attachValidation()})}};b=d.unobtrusive.adapters;b.add=function(c,a,b){if(!b){b=a;a=[]}this.push({name:c,params:a,adapt:b});return this};b.addBool=function(a,b){return this.add(a,function(d){c(d,b||a,true)})};b.addMinMax=function(e,g,f,a,d,b){return this.add(e,[d||"min",b||"max"],function(b){var e=b.params.min,d=b.params.max;if(e&&d)c(b,a,[e,d]);else if(e)c(b,g,e);else d&&c(b,f,d)})};b.addSingleVal=function(a,b,d){return this.add(a,[b||"val"],function(e){c(e,d||a,e.params[b])})};d.addMethod("__dummy__",function(){return true});d.addMethod("regex",function(b,c,d){var a;if(this.optional(c))return true;a=(new RegExp(d)).exec(b);return a&&a.index===0&&a[0].length===b.length});d.addMethod("nonalphamin",function(c,d,b){var a;if(b){a=c.match(/\W/g);a=a&&a.length>=b}return a});if(d.methods.extension){b.addSingleVal("accept","mimtype");b.addSingleVal("extension","extension")}else b.addSingleVal("extension","extension","accept");b.addSingleVal("regex","pattern");b.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");b.addMinMax("length","minlength","maxlength","rangelength").addMinMax("range","min","max","range");b.addMinMax("minlength","minlength").addMinMax("maxlength","minlength","maxlength");b.add("equalto",["other"],function(b){var i=h(b.element.name),j=b.params.other,d=g(j,i),e=a(b.form).find(":input").filter("[name='"+f(d)+"']")[0];c(b,"equalTo",e)});b.add("required",function(a){(a.element.tagName.toUpperCase()!=="INPUT"||a.element.type.toUpperCase()!=="CHECKBOX")&&c(a,"required",true)});b.add("remote",["url","type","additionalfields"],function(b){var d={url:b.params.url,type:b.params.type||"GET",data:{}},e=h(b.element.name);a.each(j(b.params.additionalfields||b.element.name),function(i,h){var c=g(h,e);d.data[c]=function(){var d=a(b.form).find(":input").filter("[name='"+f(c)+"']");return d.is(":checkbox")?d.filter(":checked").val()||d.filter(":hidden").val()||"":d.is(":radio")?d.filter(":checked").val()||"":d.val()}});c(b,"remote",d)});b.add("password",["min","nonalphamin","regex"],function(a){a.params.min&&c(a,"minlength",a.params.min);a.params.nonalphamin&&c(a,"nonalphamin",a.params.nonalphamin);a.params.regex&&c(a,"regex",a.params.regex)});a(function(){d.unobtrusive.parse(document)})})(jQuery);
/* expressive.annotations.validate.js - v2.7.0
 * Client-side component of ExpressiveAnnotations - annotation-based conditional validation library.
 * https://github.com/jwaliszko/ExpressiveAnnotations
 *
 * Copyright (c) 2014 JarosÅaw Waliszko
 * Licensed MIT: http://opensource.org/licenses/MIT */
!function (e, t) { "use strict"; var n = t.ea, r = { settings: { debug: !1, optimize: !0, enumsAsNumbers: !0, dependencyTriggers: "change keyup", apply: function (t) { function n() { if (!s.isBool(r.settings.debug)) throw "debug value must be a boolean (true or false)"; if (!s.isBool(r.settings.optimize)) throw "optimize value must be a boolean (true or false)"; if (!s.isBool(r.settings.enumsAsNumbers)) throw "enumsAsNumbers value must be a boolean (true or false)"; if (!s.isString(r.settings.dependencyTriggers) && null !== r.settings.dependencyTriggers && void 0 !== r.settings.dependencyTriggers) throw "dependencyTriggers value must be a string (multiple event types can be bound at once by including each one separated by a space), null or undefined" } function i(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) } i(r.settings, t), n(), e("form").each(function () { e(this).find("input, select, textarea").off(".expressive.annotations"), u.bindFields(this, !0) }) } }, addMethod: function (e, t) { a.addMethod(e, t) }, addValueParser: function (e, t) { s.addValueParser(e, t) }, noConflict: function () { return t.ea === this && (t.ea = n), this } }, i = { dump: function (e) { r.settings.debug && console && "function" == typeof console.log && console.log(e) }, warn: function (e) { console && "function" == typeof console.warn && console.warn(e) }, fail: function (e) { console && "function" == typeof console.error && console.error(e) } }, a = { methods: {}, addMethod: function (e, t) { var n = this.methods[e]; this.methods[e] = function () { return t.length === arguments.length ? t.apply(this, arguments) : "function" == typeof n ? n.apply(this, arguments) : t.apply(this, arguments) } }, registerMethods: function (e) { var t, n; this.initialize(); for (t in this.methods) this.methods.hasOwnProperty(t) && (n = this.methods[t], e[t] = n) }, initialize: function () { this.addMethod("Now", function () { return Date.now() }), this.addMethod("Today", function () { return new Date((new Date).setHours(0, 0, 0, 0)).getTime() }), this.addMethod("ToDate", function (e) { return Date.parse(e) }), this.addMethod("Date", function (e, t, n) { return new Date(new Date(e, t - 1, n).setFullYear(e)).getTime() }), this.addMethod("Date", function (e, t, n, r, i, a) { return new Date(new Date(e, t - 1, n, r, i, a).setFullYear(e)).getTime() }), this.addMethod("TimeSpan", function (e, t, n, r) { return 1e3 * r + 6e4 * n + 36e5 * t + 864e5 * e }), this.addMethod("Length", function (e) { return null !== e && void 0 !== e ? e.length : 0 }), this.addMethod("Trim", function (t) { return null !== t && void 0 !== t ? e.trim(t) : null }), this.addMethod("Concat", function (e, t) { return [e, t].join("") }), this.addMethod("Concat", function (e, t, n) { return [e, t, n].join("") }), this.addMethod("CompareOrdinal", function (e, t) { return e === t ? 0 : null !== e && null === t ? 1 : null === e && null !== t ? -1 : e > t ? 1 : -1 }), this.addMethod("CompareOrdinalIgnoreCase", function (e, t) { return e = null !== e && void 0 !== e ? e.toLowerCase() : null, t = null !== t && void 0 !== t ? t.toLowerCase() : null, this.CompareOrdinal(e, t) }), this.addMethod("StartsWith", function (e, t) { return null !== e && void 0 !== e && null !== t && void 0 !== t && e.slice(0, t.length) === t }), this.addMethod("StartsWithIgnoreCase", function (e, t) { return e = null !== e && void 0 !== e ? e.toLowerCase() : null, t = null !== t && void 0 !== t ? t.toLowerCase() : null, this.StartsWith(e, t) }), this.addMethod("EndsWith", function (e, t) { return null !== e && void 0 !== e && null !== t && void 0 !== t && e.slice(-t.length) === t }), this.addMethod("EndsWithIgnoreCase", function (e, t) { return e = null !== e && void 0 !== e ? e.toLowerCase() : null, t = null !== t && void 0 !== t ? t.toLowerCase() : null, this.EndsWith(e, t) }), this.addMethod("Contains", function (e, t) { return null !== e && void 0 !== e && null !== t && void 0 !== t && e.indexOf(t) > -1 }), this.addMethod("ContainsIgnoreCase", function (e, t) { return e = null !== e && void 0 !== e ? e.toLowerCase() : null, t = null !== t && void 0 !== t ? t.toLowerCase() : null, this.Contains(e, t) }), this.addMethod("IsNullOrWhiteSpace", function (e) { return null === e || !/\S/.test(e) }), this.addMethod("IsDigitChain", function (e) { return /^[0-9]+$/.test(e) }), this.addMethod("IsNumber", function (e) { return /^[+-]?(?:(?:[0-9]+)|(?:[0-9]+[eE][+-]?[0-9]+)|(?:[0-9]*\.[0-9]+(?:[eE][+-]?[0-9]+)?))$/.test(e) }), this.addMethod("IsEmail", function (e) { return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) }), this.addMethod("IsPhone", function (e) { return /^(\+\s?)?((?!\+.*)\(\+?\d+([\s\-\.]?\d+)?\)|\d+)([\s\-\.]?(\(\d+([\s\-\.]?\d+)?\)|\d+))*(\s?(x|ext\.?)\s?\d+)?$/.test(e) }), this.addMethod("IsUrl", function (e) { return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(e) }), this.addMethod("IsRegexMatch", function (e, t) { return null !== e && void 0 !== e && null !== t && void 0 !== t && new RegExp(t).test(e) }), this.addMethod("Guid", function (e) { var t = s.guid.tryParse(e); if (t.error) throw t.msg; return t }), this.addMethod("Min", function (e) { if (0 === arguments.length) throw "no arguments"; if (1 === arguments.length && s.isArray(e)) { if (0 === e.length) throw "empty sequence"; return Math.min.apply(null, e) } return Math.min.apply(null, arguments) }), this.addMethod("Max", function (e) { if (0 === arguments.length) throw "no arguments"; if (1 === arguments.length && s.isArray(e)) { if (0 === e.length) throw "empty sequence"; return Math.max.apply(null, e) } return Math.max.apply(null, arguments) }), this.addMethod("Sum", function (e) { if (0 === arguments.length) throw "no arguments"; var t, n, r = 0; if (1 === arguments.length && s.isArray(e)) { if (0 === e.length) throw "empty sequence"; for (t = 0, n = e.length; t < n; t++) r += parseFloat(e[t]); return r } for (t = 0, n = arguments.length; t < n; t++) r += parseFloat(arguments[t]); return r }), this.addMethod("Average", function (e) { if (0 === arguments.length) throw "no arguments"; var t, n, r, i = new Array; if (1 === arguments.length && s.isArray(e)) { if (0 === e.length) throw "empty sequence"; return t = this.Sum(e), t / e.length } for (n = 0, r = arguments.length; n < r; n++) i.push(arguments[n]); return t = this.Sum(i), t / arguments.length }) } }, s = { parsers: {}, addValueParser: function (t, n) { e.each(t.split(/\s+/), function (e, t) { /\S/.test(t) && (s.parsers[t] = n) }) }, array: { contains: function (e, t) { for (var n = e.length; n--;) if (e[n] === t) return !0; return !1 } }, object: { keys: function (e) { var t, n = []; for (t in e) e.hasOwnProperty(t) && n.push(t); return n }, tryParse: function (t) { try { return e.parseJSON(t) } catch (e) { return { error: !0, msg: "Given value was not recognized as a valid JSON. " + e } } } }, string: { format: function (e, t) { function n(e) { return e = s.isObject(e) ? JSON.stringify(e, null, 4) : e, e = s.isString(e) ? e.replace(/\$/g, "$$$$") : e } function r(e, t, n) { return e.replace(new RegExp("\\{" + n + "\\}", "gm"), t) } var i; if (t instanceof Array) { for (i = 0; i < t.length; i++) e = r(e, n(t[i]), i); return e } for (i = 0; i < arguments.length - 1; i++) e = r(e, n(arguments[i + 1]), i); return e }, tryParse: function (e) { return s.isString(e) ? e : void 0 !== e && null !== e ? e.toString() : { error: !0, msg: "Given value was not recognized as a valid string." } } }, bool: { tryParse: function (t) { return s.isBool(t) ? t : s.isString(t) && (t = e.trim(t).toLowerCase(), "true" === t || "false" === t) ? "true" === t : { error: !0, msg: "Given value was not recognized as a valid boolean." } } }, number: { tryParse: function (e) { function t(e) { return s.isNumeric(parseFloat(e)) && isFinite(e) } return t(e) ? parseFloat(e) : { error: !0, msg: "Given value was not recognized as a valid number." } } }, timespan: { tryParse: function (e) { if (s.isTimeSpan(e)) { var t = 2, n = 3, r = 4, i = 5, a = 6, o = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/.exec(e), u = "-" === o[1] ? -1 : 1, d = { days: s.number.tryParse(o[t] || 0) * u, hours: s.number.tryParse(o[n] || 0) * u, minutes: s.number.tryParse(o[r] || 0) * u, seconds: s.number.tryParse(o[i] || 0) * u, milliseconds: s.number.tryParse(o[a] || 0) * u }, l = d.milliseconds + 1e3 * d.seconds + 6e4 * d.minutes + 36e5 * d.hours + 864e5 * d.days; return l } return { error: !0, msg: "Given value was not recognized as a valid .NET style timespan string." } } }, datetime: { tryParse: function (e) { if (s.isDate(e)) return e.getTime(); if (s.isString(e)) { var t = Date.parse(e); if (s.isNumeric(t)) return t } return { error: !0, msg: "Given value was not recognized as a valid RFC 2822 or ISO 8601 date." } } }, guid: { tryParse: function (e) { return s.isGuid(e) ? e.toUpperCase() : { error: !0, msg: "Given value was not recognized as a valid guid - guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)." } } }, enumeration: { tryParse: function (e) { return r.settings.enumsAsNumbers ? s.number.tryParse(e) : s.string.tryParse(e) } }, isTimeSpan: function (e) { return /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/.test(e) }, isNumeric: function (e) { return "number" == typeof e && !isNaN(e) }, isDate: function (e) { return e instanceof Date }, isObject: function (e) { return "object" == typeof e || e instanceof Object }, isString: function (e) { return "string" == typeof e || e instanceof String }, isBool: function (e) { return "boolean" == typeof e || e instanceof Boolean }, isGuid: function (e) { return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) }, isArray: function (e) { return "[object Array]" === Object.prototype.toString.call(e) }, tryParse: function (e, t, n, r) { var a; if (null !== r && void 0 !== r) { if (a = s.findValueParser(n, r), !a.error) return a(e, n); i.warn(a.msg) } return a = s.findValueParser(n, t), a.error ? s.tryAutoParse(e, t) : (i.warn(s.string.format("Overriden {0} type parsing runs for {1} field. All fields of {0} type are going to be parsed using your value parser. If such a behavior is unintentional, change the name of your value parser to one, which does not indicate at {0} (or any other) type name.", t, n)), a(e, n)) }, tryAutoParse: function (e, t) { return s.hasOwnProperty(t) ? s[t].tryParse(e) : s.object.tryParse(e) }, findValueParser: function (e, t) { var n = s.parsers[t]; return "function" == typeof n ? n : { error: !0, msg: s.string.format("Custom value parser {0} not found. Consider its registration with ea.addValueParser(), or remove redundant ValueParser attribute from {1} model field.", t, e) } } }, o = { getPrefix: function (e) { return void 0 !== e && null !== e ? e.substr(0, e.lastIndexOf(".") + 1) : "" }, extractValue: function (t, n, r, a, o) { function u(e) { var t = e.attr("type"); switch (t) { case "checkbox": return e.length > 2 && i.warn(s.string.format("DOM field {0} is ambiguous (unless custom value parser is provided).", e.attr("name"))), e.is(":checked"); case "radio": return e.filter(":checked").val(); default: return e.length > 1 && i.warn(s.string.format("DOM field {0} is ambiguous (unless custom value parser is provided).", e.attr("name"))), e.val() } } var d, l, f, c; if (l = r + n, d = e(t).find(s.string.format(':input[name="{0}"]', l)), 0 === d.length) throw s.string.format("DOM field {0} not found.", l); if (f = u(d), null === f || void 0 === f || "" === f) return null; if (c = s.tryParse(f, a, l, o), null !== c && void 0 !== c && c.error) throw s.string.format("DOM field {0} value conversion to {1} failed. {2}", l, a, c.msg); return c }, deserializeObject: function (e, t, n, i, a, s) { function o(e, t, n) { var r, i, a, s, o; for (r = e.split("."), i = n, a = 0; a < r.length - 1; a++) e = r[a], s = /^([a-z_0-9]+)\[([0-9]+)\]$/i.exec(e), s ? (e = s[1], o = s[2], i.hasOwnProperty(e) || (i[e] = {}), i[e][o] = {}, i = i[e][o]) : (i.hasOwnProperty(e) || (i[e] = {}), i = i[e]); e = r[r.length - 1], i[e] = t } var u, d, l, f, c = {}; for (u in t) t.hasOwnProperty(u) && (d = t[u], f = a[u], l = this.extractValue(e, u, s, d, f), o(u, l, c)); for (u in n) n.hasOwnProperty(u) && (l = n[u], o(u, l, c)); for (u in i) i.hasOwnProperty(u) && (l = r.settings.enumsAsNumbers ? i[u] : u.split(".").pop(), o(u, l, c)); return c }, adjustGivenValue: function (e, t, n) { e = "checkbox" === t.type ? t.checked : e; var r = t.name.replace(n.prefix, ""), a = n.parsersMap[r]; if (null !== a && void 0 !== a) { var o = s.findValueParser(t.name, a); if (!o.error) return o(e, t.name); i.warn(o.msg) } return e }, ctxEval: function (e, t) { return new Function("expression", "context", "with(context){return eval(expression)}")(e, t) } }, u = { referencesMap: [], collectReferences: function (e, t, n) { var r, i; for (r = 0; r < e.length; r++) i = n + e[r], i !== t && (this.referencesMap[i] = this.referencesMap[i] || [], s.array.contains(this.referencesMap[i], t) || this.referencesMap[i].push(t)) }, validateReferences: function (t, n) { var r, a, o, u; if (u = e(n).validate(), o = this.referencesMap[t], void 0 !== o && null !== o) for (i.dump(s.string.format("Validation triggered for following {0} dependencies: {1}.", t, o.join(", "))), r = o.length; r--;) a = e(n).find(s.string.format(':input[data-val][name="{0}"]', o[r])).not(u.settings.ignore), 0 !== a.length && a.valid(); else i.dump(s.string.format("No dependencies of {0} field detected.", t)) }, bindFields: function (t, n) { if (null !== r.settings.dependencyTriggers && void 0 !== r.settings.dependencyTriggers && "" !== r.settings.dependencyTriggers) { var a = []; e.each(r.settings.dependencyTriggers.split(/\s+/), function (e, t) { /\S/.test(t) && a.push(s.string.format("{0}.expressive.annotations", t)) }), e(t).find("input, select, textarea").not(function (t, r) { var i = e(r).hasClass("ea-triggers-bound"); return e(r).addClass("ea-triggers-bound"), !n && i }).on(a.join(" "), function (n) { var r = e(this).attr("name"); i.dump(s.string.format("Dependency validation trigger - {0} event, handled.", n.type)), u.validateReferences(r, t) }) } } }, d = function (t, n) { var r = { prefix: o.getPrefix(n.element.name), form: n.form }; for (var i in n.params) n.params.hasOwnProperty(i) && (r[i] = void 0 !== n.params[i] ? e.parseJSON(n.params[i]) : {}); n.message && (n.messages[t] = function (e, t) { var r, i, a, s; r = n.message; for (i in e.errFieldsMap) if (e.errFieldsMap.hasOwnProperty(i)) { a = e.errFieldsMap[i], s = o.extractValue(e.form, i, e.prefix, "string", null); var u = new RegExp(a, "g"); r = r.replace(u, s) } return r }), u.bindFields(n.form), u.collectReferences(s.object.keys(r.fieldsMap), n.element.name, r.prefix), n.rules[t] = r }, l = function (e, t, n) { if (e = o.adjustGivenValue(e, t, n), void 0 !== e && null !== e && "" !== e) { var r = o.deserializeObject(n.form, n.fieldsMap, n.constsMap, n.enumsMap, n.parsersMap, n.prefix); return a.registerMethods(r), i.dump(s.string.format("AssertThat expression of {0} field:\n{1}\nwill be executed within following context (methods hidden):\n{2}", t.name, n.expression, r)), o.ctxEval(n.expression, r) } return !0 }, f = function (e, t, n) { e = o.adjustGivenValue(e, t, n); var u, d, l = "RequiredIf expression of {0} field:\n{1}\nwill be executed within following context (methods hidden):\n{2}"; return r.settings.optimize || (d = o.deserializeObject(n.form, n.fieldsMap, n.constsMap, n.enumsMap, n.parsersMap, n.prefix), a.registerMethods(d), i.dump(s.string.format(l, t.name, n.expression, d)), u = o.ctxEval(n.expression, d)), void 0 === e || null === e || "" === e || !/\S/.test(e) && !n.allowEmpty ? void 0 !== u ? { valid: !u, condition: u } : (d = o.deserializeObject(n.form, n.fieldsMap, n.constsMap, n.enumsMap, n.parsersMap, n.prefix), a.registerMethods(d), i.dump(s.string.format(l, t.name, n.expression, d)), u = o.ctxEval(n.expression, d), { valid: !u, condition: u }) : { valid: !0, condition: u } }, c = " abcdefghijklmnopqrstuvwxyz"; e.each(c.split(""), function () { var t = s.string.format("assertthat{0}", e.trim(this)); e.validator.unobtrusive.adapters.add(t, ["expression", "fieldsMap", "constsMap", "enumsMap", "parsersMap", "errFieldsMap"], function (e) { d(t, e) }) }), e.each(c.split(""), function () { var t = s.string.format("customrequiredif{0}", e.trim(this)); e.validator.unobtrusive.adapters.add(t, ["expression", "fieldsMap", "constsMap", "enumsMap", "parsersMap", "errFieldsMap", "allowEmpty"], function (e) { d(t, e) }) }), e.each(c.split(""), function () { var t = s.string.format("assertthat{0}", e.trim(this)); e.validator.addMethod(t, function (t, n, r) { try { var a = l(t, n, r); return e(n).trigger("eavalid", ["assertthat", a, r.expression]), a } catch (e) { i.fail(e) } }, "") }), e.each(c.split(""), function () { var t = s.string.format("customrequiredif{0}", e.trim(this)); e.validator.addMethod(t, function (t, n, r) { try { var a = f(t, n, r); return e(n).trigger("eavalid", ["customrequiredif", a.valid, r.expression, a.condition]), a.valid } catch (e) { i.fail(e) } }, "") }), t.ea = r }(jQuery, window);

//valididnum
$.validator.addMethod("valididnum", function (value) {

    return IDValidator(value);
});
$.validator.unobtrusive.adapters.add("valididnum", function (options) {

    options.rules["valididnum"] = "#" + options.params.otherpropertyname;
    options.messages["valididnum"] = options.message;
});

function IDValidator(id) {
    id += ""; //cast as string
    if (id.length != 9 || isNaN(id)) {
        return false;
    }
    var counter = 0, incNum;
    for (var i = 0; i < id.length; i++) {
        incNum = Number(id[i]) * ((i % 2) + 1);//multiply digit by 1 or 2
        counter += (incNum > 9) ? incNum - 9 : incNum;//sum the digits up and add to counter
    }
    return (counter % 10 == 0);
}






////////////////////////////////////////////////////////////////////////////////////////////////////
//hasanaccount
//$.validator.addMethod("hasanaccount", function (value) {
//    debugger 
//    return !$('#HasAnAccount').is(":checked");

//});

//$.validator.unobtrusive.adapters.add("hasanaccount", function (options) {
//    debugger
//    options.rules["hasanaccount"] = "#" + options.params.otherpropertyname;
//    options.messages["hasanaccount"] = options.message;
//});

//$.validator.unobtrusive.adapters.addSingleVal("hasanaccount", "country");


////////////////////////////////////////////////////////////////////////////////////////////////////
//requiredifpresentisraelid
$.validator.addMethod("requiredifpresentisraelid", function (value) {
    return $('#IsPresentIsraelId').val() == 'true';

});

$.validator.unobtrusive.adapters.add("requiredifpresentisraelid", function (options) {
    options.rules["requiredifpresentisraelid"] = "#" + options.params.otherpropertyname;
    options.messages["requiredifpresentisraelid"] = options.message;
});

//$.validator.unobtrusive.adapters.addSingleVal("hasanaccount", "country");



/*! bootstrap-accessibility-plugin - v1.0.5 - 2016-07-19
* https://github.com/paypal/bootstrap-accessibility-plugin
* Copyright (c) 2016 PayPal Accessibility Team; Licensed BSD */
!function ($) { "use strict"; var uniqueId = function (prefix) { return (prefix || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1) }, focusable = function (element, isTabIndexNotNaN) { var map, mapName, img, nodeName = element.nodeName.toLowerCase(); return "area" === nodeName ? (map = element.parentNode, mapName = map.name, element.href && mapName && "map" === map.nodeName.toLowerCase() ? (img = $("img[usemap='#" + mapName + "']")[0], !!img && visible(img)) : !1) : (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element) }, visible = function (element) { return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () { return "hidden" === $.css(this, "visibility") }).length }; $.extend($.expr[":"], { data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) { return function (elem) { return !!$.data(elem, dataName) } }) : function (elem, i, match) { return !!$.data(elem, match[3]) }, focusable: function (element) { return focusable(element, !isNaN($.attr(element, "tabindex"))) }, tabbable: function (element) { var tabIndex = $.attr(element, "tabindex"), isTabIndexNaN = isNaN(tabIndex); return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN) } }), $(".modal-dialog").attr({ role: "document" }); var modalhide = $.fn.modal.Constructor.prototype.hide; $.fn.modal.Constructor.prototype.hide = function () { modalhide.apply(this, arguments), $(document).off("keydown.bs.modal") }; var modalfocus = $.fn.modal.Constructor.prototype.enforceFocus; $.fn.modal.Constructor.prototype.enforceFocus = function () { var $content = this.$element.find(".modal-content"), focEls = $content.find(":tabbable"), $lastEl = $(focEls[focEls.length - 1]), $firstEl = $(focEls[0]); $lastEl.on("keydown.bs.modal", $.proxy(function (ev) { 9 !== ev.keyCode || ev.shiftKey | ev.ctrlKey | ev.metaKey | ev.altKey || (ev.preventDefault(), $firstEl.focus()) }, this)), $firstEl.on("keydown.bs.modal", $.proxy(function (ev) { 9 === ev.keyCode && ev.shiftKey && (ev.preventDefault(), $lastEl.focus()) }, this)), modalfocus.apply(this, arguments) }; var $par, firstItem, toggle = "[data-toggle=dropdown]", focusDelay = 200, menus = $(toggle).parent().find("ul").attr("role", "menu"), lis = menus.find("li").attr("role", "presentation"); lis.find("a").attr({ role: "menuitem", tabIndex: "-1" }), $(toggle).attr({ "aria-haspopup": "true", "aria-expanded": "false" }), $(toggle).parent().on("shown.bs.dropdown", function (e) { $par = $(this); var $toggle = $par.find(toggle); $toggle.attr("aria-expanded", "true"), $toggle.on("keydown.bs.dropdown", $.proxy(function (ev) { setTimeout(function () { firstItem = $(".dropdown-menu [role=menuitem]:visible", $par)[0]; try { firstItem.focus() } catch (ex) { } }, focusDelay) }, this)) }).on("hidden.bs.dropdown", function (e) { $par = $(this); var $toggle = $par.find(toggle); $toggle.attr("aria-expanded", "false") }), $(document).on("focusout.dropdown.data-api", ".dropdown-menu", function (e) { var $this = $(this), that = this; $this.parent().hasClass("open") && setTimeout(function () { $.contains(that, document.activeElement) || $this.parent().find("[data-toggle=dropdown]").dropdown("toggle") }, 150) }).on("keydown.bs.dropdown.data-api", toggle + ", [role=menu]", $.fn.dropdown.Constructor.prototype.keydown); var $tablist = $(".nav-tabs, .nav-pills"), $lis = $tablist.children("li"), $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]'); $tabs && ($tablist.attr("role", "tablist"), $lis.attr("role", "presentation"), $tabs.attr("role", "tab")), $tabs.each(function (index) { var tabpanel = $($(this).attr("href")), tab = $(this), tabid = tab.attr("id") || uniqueId("ui-tab"); tab.attr("id", tabid), tab.parent().hasClass("active") ? (tab.attr({ tabIndex: "0", "aria-selected": "true", "aria-controls": tab.attr("href").substr(1) }), tabpanel.attr({ role: "tabpanel", tabIndex: "0", "aria-hidden": "false", "aria-labelledby": tabid })) : (tab.attr({ tabIndex: "-1", "aria-selected": "false", "aria-controls": tab.attr("href").substr(1) }), tabpanel.attr({ role: "tabpanel", tabIndex: "-1", "aria-hidden": "true", "aria-labelledby": tabid })) }), $.fn.tab.Constructor.prototype.keydown = function (e) { var $items, index, $this = $(this), $ul = $this.closest("ul[role=tablist] "), k = e.which || e.keyCode; if ($this = $(this), /(37|38|39|40)/.test(k)) { $items = $ul.find("[role=tab]:visible"), index = $items.index($items.filter(":focus")), (38 == k || 37 == k) && index--, (39 == k || 40 == k) && index++, 0 > index && (index = $items.length - 1), index == $items.length && (index = 0); var nextTab = $items.eq(index); "tab" === nextTab.attr("role") && nextTab.tab("show").focus(), e.preventDefault(), e.stopPropagation() } }, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown); var tabactivate = $.fn.tab.Constructor.prototype.activate; $.fn.tab.Constructor.prototype.activate = function (element, container, callback) { var $active = container.find("> .active"); $active.find("[data-toggle=tab], [data-toggle=pill]").attr({ tabIndex: "-1", "aria-selected": !1 }), $active.filter(".tab-pane").attr({ "aria-hidden": !0, tabIndex: "-1" }), tabactivate.apply(this, arguments), element.addClass("active"), element.find("[data-toggle=tab], [data-toggle=pill]").attr({ tabIndex: "0", "aria-selected": !0 }), element.filter(".tab-pane").attr({ "aria-hidden": !1, tabIndex: "0" }) }; var $colltabs = $('[data-toggle="collapse"]'); $colltabs.each(function (index) { var colltab = $(this), collpanel = $(colltab.attr("data-target") ? colltab.attr("data-target") : colltab.attr("href")), parent = colltab.attr("data-parent"), collparent = parent && $(parent), collid = colltab.attr("id") || uniqueId("ui-collapse"); colltab.attr("id", collid), collparent && (colltab.attr({ role: "tab", "aria-selected": "false", "aria-expanded": "false" }), $(collparent).find("div:not(.collapse,.panel-body), h4").attr("role", "presentation"), collparent.attr({ role: "tablist", "aria-multiselectable": "true" }), collpanel.hasClass("in") ? (colltab.attr({ "aria-controls": collpanel.attr("id"), "aria-selected": "true", "aria-expanded": "true", tabindex: "0" }), collpanel.attr({ role: "tabpanel", tabindex: "0", "aria-labelledby": collid, "aria-hidden": "false" })) : (colltab.attr({ "aria-controls": collpanel.attr("id"), tabindex: "-1" }), collpanel.attr({ role: "tabpanel", tabindex: "-1", "aria-labelledby": collid, "aria-hidden": "true" }))) }); var collToggle = $.fn.collapse.Constructor.prototype.toggle; $.fn.collapse.Constructor.prototype.toggle = function () { var href, prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]'); if (prevTab) { var curTab, prevPanel = prevTab.attr("data-target") || (href = prevTab.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""), $prevPanel = $(prevPanel), $curPanel = this.$element; this.$parent; this.$parent && (curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr("id") + '"]')), collToggle.apply(this, arguments), $.support.transition && this.$element.one($.support.transition.end, function () { prevTab.attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: "-1" }), $prevPanel.attr({ "aria-hidden": "true", tabIndex: "-1" }), curTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: "0" }), $curPanel.hasClass("in") ? $curPanel.attr({ "aria-hidden": "false", tabIndex: "0" }) : (curTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), $curPanel.attr({ "aria-hidden": "true", tabIndex: "-1" })) }) } else collToggle.apply(this, arguments) }, $.fn.collapse.Constructor.prototype.keydown = function (e) { var $items, index, $this = $(this), $tablist = $this.closest("div[role=tablist] "), k = e.which || e.keyCode; $this = $(this), /(32|37|38|39|40)/.test(k) && (32 == k && $this.click(), $items = $tablist.find("[role=tab]"), index = $items.index($items.filter(":focus")), (38 == k || 37 == k) && index--, (39 == k || 40 == k) && index++, 0 > index && (index = $items.length - 1), index == $items.length && (index = 0), $items.eq(index).focus(), e.preventDefault(), e.stopPropagation()) }, $(document).on("keydown.collapse.data-api", '[data-toggle="collapse"]', $.fn.collapse.Constructor.prototype.keydown), $(".carousel").each(function (index) { function setTablistHighlightBox() { var $tab, offset, height, width, highlightBox = {}; highlightBox.top = 0, highlightBox.left = 32e3, highlightBox.height = 0, highlightBox.width = 0; for (var i = 0; i < $tabs.length; i++) { $tab = $tabs[i], offset = $($tab).offset(), height = $($tab).height(), width = $($tab).width(), highlightBox.top < offset.top && (highlightBox.top = Math.round(offset.top)), highlightBox.height < height && (highlightBox.height = Math.round(height)), highlightBox.left > offset.left && (highlightBox.left = Math.round(offset.left)); var w = offset.left - highlightBox.left + Math.round(width); highlightBox.width < w && (highlightBox.width = w) } $tablistHighlight.style.top = highlightBox.top - 2 + "px", $tablistHighlight.style.left = highlightBox.left - 2 + "px", $tablistHighlight.style.height = highlightBox.height + 7 + "px", $tablistHighlight.style.width = highlightBox.width + 8 + "px" } var $tabpanel, $tablistHighlight, $pauseCarousel, $complementaryLandmark, $tab, i, $this = $(this), $prev = $this.find('[data-slide="prev"]'), $next = $this.find('[data-slide="next"]'), $tablist = $this.find(".carousel-indicators"), $tabs = $this.find(".carousel-indicators li"), $tabpanels = $this.find(".item"), $is_paused = !1, id_title = "id_title", id_desc = "id_desc"; for ($tablist.attr("role", "tablist"), $tabs.focus(function () { $this.carousel("pause"), $is_paused = !0, $pauseCarousel.innerHTML = "Play Carousel", $(this).parent().addClass("active"), setTablistHighlightBox(), $($tablistHighlight).addClass("focus"), $(this).parents(".carousel").addClass("contrast") }), $tabs.blur(function (event) { $(this).parent().removeClass("active"), $($tablistHighlight).removeClass("focus"), $(this).parents(".carousel").removeClass("contrast") }), i = 0; i < $tabpanels.length; i++) $tabpanel = $tabpanels[i], $tabpanel.setAttribute("role", "tabpanel"), $tabpanel.setAttribute("id", "tabpanel-" + index + "-" + i), $tabpanel.setAttribute("aria-labelledby", "tab-" + index + "-" + i); for ("string" != typeof $this.attr("role") && ($this.attr("role", "complementary"), $this.attr("aria-labelledby", id_title), $this.attr("aria-describedby", id_desc), $this.prepend('<p  id="' + id_desc + '" class="sr-only">A carousel is a rotating set of images, rotation stops on keyboard focus on carousel tab controls or hovering the mouse pointer over images.  Use the tabs or the previous and next buttons to change the displayed slide.</p>'), $this.prepend('<h2 id="' + id_title + '" class="sr-only">Carousel content with ' + $tabpanels.length + " slides.</h2>")), i = 0; i < $tabs.length; i++) { $tab = $tabs[i], $tab.setAttribute("role", "tab"), $tab.setAttribute("id", "tab-" + index + "-" + i), $tab.setAttribute("aria-controls", "tabpanel-" + index + "-" + i); var tpId = "#tabpanel-" + index + "-" + i, caption = $this.find(tpId).find("h1").text(); ("string" != typeof caption || 0 === caption.length) && (caption = $this.find(tpId).text()), ("string" != typeof caption || 0 === caption.length) && (caption = $this.find(tpId).find("h3").text()), ("string" != typeof caption || 0 === caption.length) && (caption = $this.find(tpId).find("h4").text()), ("string" != typeof caption || 0 === caption.length) && (caption = $this.find(tpId).find("h5").text()), ("string" != typeof caption || 0 === caption.length) && (caption = $this.find(tpId).find("h6").text()), ("string" != typeof caption || 0 === caption.length) && (caption = "no title"); var tabName = document.createElement("span"); tabName.setAttribute("class", "sr-only"), tabName.innerHTML = "Slide " + (i + 1), caption && (tabName.innerHTML += ": " + caption), $tab.appendChild(tabName) } $tablistHighlight = document.createElement("div"), $tablistHighlight.className = "carousel-tablist-highlight", document.body.appendChild($tablistHighlight), $complementaryLandmark = document.createElement("aside"), $complementaryLandmark.setAttribute("class", "carousel-aside-pause"), $complementaryLandmark.setAttribute("aria-label", "carousel pause/play control"), $this.prepend($complementaryLandmark), $pauseCarousel = document.createElement("button"), $pauseCarousel.className = "carousel-pause-button", $pauseCarousel.innerHTML = "Pause Carousel", $pauseCarousel.setAttribute("title", "Pause/Play carousel button can be used by screen reader users to stop carousel animations"), $($complementaryLandmark).append($pauseCarousel), $($pauseCarousel).click(function () { $is_paused ? ($pauseCarousel.innerHTML = "Pause Carousel", $this.carousel("cycle"), $is_paused = !1) : ($pauseCarousel.innerHTML = "Play Carousel", $this.carousel("pause"), $is_paused = !0) }), $($pauseCarousel).focus(function () { $(this).addClass("focus") }), $($pauseCarousel).blur(function () { $(this).removeClass("focus") }), setTablistHighlightBox(), $(window).resize(function () { setTablistHighlightBox() }), $prev.attr("aria-label", "Previous Slide"), $prev.keydown(function (e) { var k = e.which || e.keyCode; /(13|32)/.test(k) && (e.preventDefault(), e.stopPropagation(), $prev.trigger("click")) }), $prev.focus(function () { $(this).parents(".carousel").addClass("contrast") }), $prev.blur(function () { $(this).parents(".carousel").removeClass("contrast") }), $next.attr("aria-label", "Next Slide"), $next.keydown(function (e) { var k = e.which || e.keyCode; /(13|32)/.test(k) && (e.preventDefault(), e.stopPropagation(), $next.trigger("click")) }), $next.focus(function () { $(this).parents(".carousel").addClass("contrast") }), $next.blur(function () { $(this).parents(".carousel").removeClass("contrast") }), $(".carousel-inner a").focus(function () { $(this).parents(".carousel").addClass("contrast") }), $(".carousel-inner a").blur(function () { $(this).parents(".carousel").removeClass("contrast") }), $tabs.each(function () { var item = $(this); item.hasClass("active") ? item.attr({ "aria-selected": "true", tabindex: "0" }) : item.attr({ "aria-selected": "false", tabindex: "-1" }) }) }); var slideCarousel = $.fn.carousel.Constructor.prototype.slide; $.fn.carousel.Constructor.prototype.slide = function (type, next) { var $id, $element = this.$element, $active = $element.find("[role=tabpanel].active"), $next = next || $active[type](), $tab_count = $element.find("[role=tabpanel]").size(), $prev_side = $element.find('[data-slide="prev"]'), $next_side = $element.find('[data-slide="next"]'), $index = 0, $prev_index = $tab_count - 1, $next_index = 1; $next && $next.attr("id") && ($id = $next.attr("id"), $index = $id.lastIndexOf("-"), $index >= 0 && ($index = parseInt($id.substring($index + 1), 10)), $prev_index = $index - 1, 1 > $prev_index && ($prev_index = $tab_count - 1), $next_index = $index + 1, $next_index >= $tab_count && ($next_index = 0)), $prev_side.attr("aria-label", "Show slide " + ($prev_index + 1) + " of " + $tab_count), $next_side.attr("aria-label", "Show slide " + ($next_index + 1) + " of " + $tab_count), slideCarousel.apply(this, arguments), $active.one("bsTransitionEnd", function () { var $tab; $tab = $element.find('li[aria-controls="' + $active.attr("id") + '"]'), $tab && $tab.attr({ "aria-selected": !1, tabIndex: "-1" }), $tab = $element.find('li[aria-controls="' + $next.attr("id") + '"]'), $tab && $tab.attr({ "aria-selected": !0, tabIndex: "0" }) }) }; var $this; $.fn.carousel.Constructor.prototype.keydown = function (e) { function selectTab(index) { index >= $tabs.length || 0 > index || ($carousel.carousel(index), setTimeout(function () { $tabs[index].focus() }, 150)) } $this = $this || $(this), this instanceof Node && ($this = $(this)); var index, $carousel = $(e.target).closest(".carousel"), $tabs = $carousel.find("[role=tab]"), k = e.which || e.keyCode; /(37|38|39|40)/.test(k) && (index = $tabs.index($tabs.filter(".active")), (37 == k || 38 == k) && (index--, selectTab(index)), (39 == k || 40 == k) && (index++, selectTab(index)), e.preventDefault(), e.stopPropagation()) }, $(document).on("keydown.carousel.data-api", "li[role=tab]", $.fn.carousel.Constructor.prototype.keydown) }(jQuery);
/*!
 * animsition v3.5.2
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
(function($) {
  "use strict";
  var namespace = "animsition";
  var methods = {
    init: function(options) {
      options = $.extend({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration:1000,
        linkElement: ".animsition-link",
        loading: true,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        unSupportCss: [ "animation-duration", "-webkit-animation-duration", "-o-animation-duration" ],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body"
      }, options);
      var support = methods.supportCheck.call(this, options);
      if (!support) {
        if (!("console" in window)) {
          window.console = {};
          window.console.log = function(str) {
            return str;
          };
        }
        console.log("Animsition does not support this browser.");
        return methods.destroy.call(this);
      }
      var overlayMode = methods.optionCheck.call(this, options);
      if (overlayMode) {
        methods.addOverlay.call(this, options);
      }
      if (options.loading) {
        methods.addLoading.call(this, options);
      }
      return this.each(function() {
        var _this = this;
        var $this = $(this);
        var $window = $(window);
        var data = $this.data(namespace);
        if (!data) {
          options = $.extend({}, options);
          $this.data(namespace, {
            options: options
          });
          $window.on("load." + namespace + " pageshow." + namespace, function() {
            methods.pageIn.call(_this);
          });
          $window.on("unload." + namespace, function() {});
          $(options.linkElement).on("click." + namespace, function(event) {
            event.preventDefault();
            var $self = $(this);
            var url = $self.attr("href");
            if (event.which === 2 || event.metaKey || event.shiftKey || navigator.platform.toUpperCase().indexOf("WIN") !== -1 && event.ctrlKey) {
              window.open(url, "_blank");
            } else {
              methods.pageOut.call(_this, $self, url);
            }
          });
        }
      });
    },
    addOverlay: function(options) {
      $(options.overlayParentElement).prepend('<div class="' + options.overlayClass + '"></div>');
    },
    addLoading: function(options) {
      $(options.loadingParentElement).append('<div class="' + options.loadingClass + '"></div>');
    },
    removeLoading: function() {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var $loading = $(options.loadingParentElement).children("." + options.loadingClass);
      $loading.fadeOut().remove();
    },
    supportCheck: function(options) {
      var $this = $(this);
      var props = options.unSupportCss;
      var propsNum = props.length;
      var support = false;
      if (propsNum === 0) {
        support = true;
      }
      for (var i = 0; i < propsNum; i++) {
        if (typeof $this.css(props[i]) === "string") {
          support = true;
          break;
        }
      }
      return support;
    },
    optionCheck: function(options) {
      var $this = $(this);
      var overlayMode;
      if (options.overlay || $this.data("animsition-overlay")) {
        overlayMode = true;
      } else {
        overlayMode = false;
      }
      return overlayMode;
    },
    animationCheck: function(data, stateClass, stateIn) {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var dataType = typeof data;
      var dataDuration = !stateClass && dataType === "number";
      var dataClass = stateClass && dataType === "string" && data.length > 0;
      if (dataDuration || dataClass) {
        data = data;
      } else if (stateClass && stateIn) {
        data = options.inClass;
      } else if (!stateClass && stateIn) {
        data = options.inDuration;
      } else if (stateClass && !stateIn) {
        data = options.outClass;
      } else if (!stateClass && !stateIn) {
        data = options.outDuration;
      }
      return data;
    },
    pageIn: function() {
      var _this = this;
      var $this = $(this);
      var options = $this.data(namespace).options;
      var thisInDuration = $this.data("animsition-in-duration");
      var thisInClass = $this.data("animsition-in");
      var inDuration = methods.animationCheck.call(_this, thisInDuration, false, true);
      var inClass = methods.animationCheck.call(_this, thisInClass, true, true);
      var overlayMode = methods.optionCheck.call(_this, options);
      if (options.loading) {
        methods.removeLoading.call(_this);
      }
      if (overlayMode) {
        methods.pageInOverlay.call(_this, inClass, inDuration);
      } else {
        methods.pageInBasic.call(_this, inClass, inDuration);
      }
    },
    pageInBasic: function(inClass, inDuration) {
      var $this = $(this);
      $this.trigger("animsition.start").css({
        "animation-duration": inDuration / 1e3 + "s"
      }).addClass(inClass).animateCallback(function() {
        $this.removeClass(inClass).css({
          opacity: 1
        }).trigger("animsition.end");
      });
    },
    pageInOverlay: function(inClass, inDuration) {
      var $this = $(this);
      var options = $this.data(namespace).options;
      $this.trigger("animsition.start").css({
        opacity: 1
      });
      $(options.overlayParentElement).children("." + options.overlayClass).css({
        "animation-duration": inDuration / 1e3 + "s"
      }).addClass(inClass).animateCallback(function() {
        $this.trigger("animsition.end");
      });
    },
    pageOut: function($self, url) {
      var _this = this;
      var $this = $(this);
      var options = $this.data(namespace).options;
      var selfOutClass = $self.data("animsition-out");
      var thisOutClass = $this.data("animsition-out");
      var selfOutDuration = $self.data("animsition-out-duration");
      var thisOutDuration = $this.data("animsition-out-duration");
      var isOutClass = selfOutClass ? selfOutClass : thisOutClass;
      var isOutDuration = selfOutDuration ? selfOutDuration : thisOutDuration;
      var outClass = methods.animationCheck.call(_this, isOutClass, true, false);
      var outDuration = methods.animationCheck.call(_this, isOutDuration, false, false);
      var overlayMode = methods.optionCheck.call(_this, options);
      if (overlayMode) {
        methods.pageOutOverlay.call(_this, outClass, outDuration, url);
      } else {
        methods.pageOutBasic.call(_this, outClass, outDuration, url);
      }
    },
    pageOutBasic: function(outClass, outDuration, url) {
      var $this = $(this);
      $this.css({
        "animation-duration": outDuration / 1e3 + "s"
      }).addClass(outClass).animateCallback(function() {
        location.href = url;
      });
    },
    pageOutOverlay: function(outClass, outDuration, url) {
      var _this = this;
      var $this = $(this);
      var options = $this.data(namespace).options;
      var thisInClass = $this.data("animsition-in");
      var inClass = methods.animationCheck.call(_this, thisInClass, true, true);
      $(options.overlayParentElement).children("." + options.overlayClass).css({
        "animation-duration": outDuration / 1e3 + "s"
      }).removeClass(inClass).addClass(outClass).animateCallback(function() {
        location.href = url;
      });
    },
    destroy: function() {
      return this.each(function() {
        var $this = $(this);
        $(window).unbind("." + namespace);
        $this.css({
          opacity: 1
        }).removeData(namespace);
      });
    }
  };
  $.fn.animateCallback = function(callback) {
    var end = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
    return this.each(function() {
      $(this).bind(end, function() {
        $(this).unbind(end);
        return callback.call(this);
      });
    });
  };
  $.fn.animsition = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery." + namespace);
    }
  };
})(jQuery);

    $(document).ready(function () {
        var submit = true;

        CheckMizrachi();

        $('[aria-invalid]').on('focusout', onFocusOut);


        //$("#s2id_AreaCode").find('a').attr("aria-label", $("#s2id_AreaCode").next().attr("aria-label"));
        //$("#s2id_Subject").find('a').attr("aria-label", $("#s2id_Subject").next().attr("aria-label"));
        //$("#s2id_CustomerBranch").find('a').attr("aria-label", $("#s2id_CustomerBranch").next().attr("aria-label")); 

        fixImgHeightAll();

        $(".table-container.htm-table table thead").each(function () {
            var $this = $(this);
            var newrows = [];
            $this.find("tr").each(function (i, x) {
                $($(this).find("th").get().reverse()).each(function () {
                    if (newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
                    newrows[i].append($(this));
                });
            });
            $this.find("tr").remove();
            $.each(newrows, function () {
                $this.append(this);
            });
        });

        $('.general-content .text ul li').each(function () {
            if ($(this).html().indexOf('<span>') < 0) {
                $(this).html('<span>' + $(this).html() + '</span>');
            }
        });

        $(".table-container.htm-table table tbody").each(function () {
            var $this = $(this);
            var newrows = [];
            $this.find("tr").each(function (i, x) {
                $($(this).find("td").get().reverse()).each(function () {
                    if (newrows[i] === undefined) {
                        newrows[i] = $("<tr></tr>");
                    }
                    newrows[i].append($(this));
                });
            });
            $this.find("tr").remove();
            $.each(newrows, function () {
                $this.append(this);
            });
        });

        if ($(".htm-table table > thead > tr > th").length > 0 && $(".htm-table table > tbody > tr > td").length > 0) {
            $(".htm-table table > thead > tr > th").first().html('<span>' + $(".htm-table table > thead > tr > th").html() + '</span');
            $(".htm-table table > tbody > tr > td").first().html('<span>' + $(".htm-table table > tbody > tr > td").html() + '</span');
        }

        

        exchangeTableFixFirstColumn();

        $(window).resize(exchangeTableFixFirstColumn);

        $('.main-page-form input[type="checkbox"]').change(function () {
            if (!$(this).is(':checked')) {
                $(this).next().next().removeClass('isChecked');
                $(this).next().next().addClass('notChecked');
            }
            else {
                $(this).next().next().removeClass('notChecked');
                $(this).next().next().addClass('isChecked');
            }
        });



        //$('#HasAnAccount').change(function () {
        //    if (!$(this).is(":checked")) {
        //        $('#AccountNum').val('');
        //        $('#s2id_CustomerBranch').select2("val", "");
        //        $('#AccountNum').blur();
        //    }

        //});

        $('#HasAnAccount,#IsEmailConfirm').change(function () {
            $(this).val($(this).is(":checked"));
            $(this).prev().val($(this).val());
        });

        $('.send-2').click(function (e) { //TODO: check branch according to subject
            $(this).attr("disabled", "disabled");
            submit = true;
            e.preventDefault();
            $('[aria-invalid]').each(onFocusOut);
            if ($('#Subject').length > 0 && !$('#Subject').val()) {
                $('#s2id_Subject').removeClass('input-validation-valid');
                $('#Subject').next().removeClass('field-validation-valid');
                $('#s2id_Subject').addClass('input-validation-error');
                $('#Subject').next().addClass('field-validation-error');
                //if (!$("#subject-err").text()) {
                //    $('#Subject').next().append('<span id="subject-err" for="s2id_Subject" class="">' + $('#Subject').attr('data-val-required') + '</span>');
                //}
                submit = false;
            }
            else {
                $('#s2id_Subject').removeClass('input-validation-error');
                $('#Subject').next().removeClass('field-validation-error');
                $('#s2id_Subject').addClass('input-validation-valid');
                $('#Subject').next().addClass('field-validation-valid');
                $('#Subject').next().find('span').remove();
            }

            if ($('#AreaCode').length > 0 && !$('#AreaCode').val()) {
                $('#s2id_AreaCode').removeClass('input-validation-valid');
                $('#AreaCode').next().next().removeClass('field-validation-valid');
                $('#s2id_AreaCode').addClass('input-validation-error');
                $('#AreaCode').next().next().addClass('field-validation-error');
                //if (!$("#area-code-err").text()) {
                //    $('#AreaCode').next().next().append('<span id ="area-code-err" for="s2id_AreaCode" class="">' + $('#AreaCode').attr('data-val-required') + '</span>');
                //}
                submit = false;
            }
            else {
                $('#s2id_AreaCode').removeClass('input-validation-error');
                $('#AreaCode').next().next().removeClass('field-validation-error');
                $('#s2id_AreaCode').addClass('input-validation-valid');
                $('#AreaCode').next().next().addClass('field-validation-valid');
                $('#AreaCode').next().next().find('span').remove();
            }

            if ($('.hidden-has-account').is(":visible") && !$('#CustomerBranch').val()) {
                $('#s2id_CustomerBranch').removeClass('input-validation-valid');
                $('#CustomerBranch').next().removeClass('field-validation-valid');
                $('#s2id_CustomerBranch').addClass('input-validation-error');
                $('#CustomerBranch').next().addClass('field-validation-error');
                //if (!$("#branch-err").text()) {
                //    $('#CustomerBranch').next().append('<span id ="branch-err" for="s2id_CustomerBranch" class="">' + $('#CustomerBranch').attr('data-val-customrequiredif') + '</span>');
                //}
                submit = false;
            }
            else {
                $('#s2id_CustomerBranch').removeClass('input-validation-error');
                $('#CustomerBranch').next().removeClass('field-validation-error');
                $('#s2id_CustomerBranch').addClass('input-validation-valid');
                $('#CustomerBranch').next().addClass('field-validation-valid');
                $('#CustomerBranch').next().find('span').remove();
            }
            if (submit) {
                submitContactUs($('form'), e);
            }
            else {
                $(this).removeAttr("disabled");
            }
        });

        $('select').on('change', function () {
            // when the value changes
            var valid = $(this).valid();
            if (valid === true && $(this).attr('id') == 'CustomerBranch') {
                $(this).next().removeClass('field-validation-error');
            }// trigger validation on this element
        });

        //$("#details-form").on('submit', function (e) {

        //    submitContactUs($(this), e);

        //});

        //$("#main-page-form").on('submit', function (e) {

        //    submitContactUs($(this), e);

        //});

        //check contactus sherut tashlum
        if (!($('#AlwaysShowBranch').length > 0 && $('#AlwaysShowBranch').val().length > 0 && $('#AlwaysShowBranch').val().toLowerCase() === 'true')) {
            $(".hidden-has-account").hide();
        }
        else {
            $('.contactus_chkbox').hide();
            $('.contactus_sherut').show();
        }


        $(".HasAnAccount").on("change", function () {
            var val = ($(".HasAnAccount").is(':checked'))
            loadSubjects(val);
            checkRequiredBranch();
        });

        $("#Subject").on("change", function () {
            checkRequiredBranch();
        });

        $('.HasAnAccount').each(function (i, x) {
            $(x).removeAttr('checked')
        });
        //if ($('#HasAnAccount').length > 0) {
        //    $('#HasAnAccount').removeAttr('checked');
        //}

        $('.IsraeliId').blur(function () {
            var currentId = $('.IsraeliId').val();
            if (currentId.length > 1 && currentId.length < 9) {
                var idZeroPadding = Array(10 - currentId.length).join("0") + currentId;
                $('.IsraeliId').val(idZeroPadding);
                $('.IsraeliId').blur();
                var e = jQuery.Event("keypress");
                e.which = 13; //choose the one you want
                e.keyCode = 13;
                $(".IsraeliId").trigger(e);


            }
        });

        var lastY;
        $("#carousel-example-generic").on('touchstart', function (e) {
            lastY = e.originalEvent.touches[0].clientX;
        });

        $("#carousel-example-generic").on('touchend', function (e) {
            var currentY = e.originalEvent.changedTouches[0].pageX;
            if (currentY > lastY) {
                $(this).carousel('prev');
            } else if (currentY < lastY) {
                $(this).carousel('next');
            }
        });

        //$("#carousel-example-generic").swiperight(function () {
        //    $(this).carousel('prev');
        //});
        //$("#carousel-example-generic").swipeleft(function () {
        //    $(this).carousel('next');
        //});

        function loadSubjects(hasAnAccount) {
            if ($('[id$=IsFixedSubject]').length > 0 && $('[id$=IsFixedSubject]').val().toLowerCase() == "false") {
                //writeLog("loadSubjects : hasAnAccount=" + hasAnAccount);
                //writeLog("loadSubjects : IsFixedSubject=" + $('[id$=IsFixedSubject]').val().toLowerCase());
                //writeLog("loadSubjects : val=" + $('#Subject').val());
                var subjectsSelect = $('#Subject');
                var selectedSubject = $('#Subject').val();
                $.getJSON('/' + $('html').data('vd') + '/umbraco/api/Common/GetSubjects',//TODO:change
                {
                    encryptNodeID: $('[name$=NodeId]').val(),
                    isUnionCustomer: hasAnAccount
                }, function (subjects) {
                    if (subjects != null && !jQuery.isEmptyObject(subjects)) {
                        subjectsSelect.find("option:not(:first)").remove();

                        $.each(JSON.parse(subjects), function (index, subject) {
                            subjectsSelect.append($('<option/>', {
                                value: subject.Value, text: subject.Text
                            }));
                        });

                        if (selectedSubject != null && selectedSubject != '' && $('#Subject option[value="' + selectedSubject + '"]').length > 0) {
                            subjectsSelect.find('option[value="' + selectedSubject + '"]').prop('selected', true);
                        }
                        else {
                            subjectsSelect.find("option:first").prop('selected', true);
                            subjectsSelect.select2("val", "");

                        }
                    };
                });
            }
        }

        function checkRequiredBranch() {
            var requiredAccount = false;
            if ($('#AlwaysShowBranch').length > 0 && $('#AlwaysShowBranch').val().length > 0 && $('#AlwaysShowBranch').val().toLowerCase() === 'true') {
                requiredAccount = true; //sherut tashlum
            }
            else {
                var hasAnAccount = ($(".HasAnAccount").is(':checked'));
                if (!hasAnAccount) {
                    var selectedSubject = $('#Subject').val();
                    if ($.trim(selectedSubject).length > 0) {
                        var selectedSubjectArr = selectedSubject.split($('#SubjectSep').val());
                        if (selectedSubjectArr.length > 1) {
                            requiredAccount = (selectedSubjectArr[1].toLowerCase() == 'true');

                        }
                    }
                }
            }
            $('#RequiredAccount').val(requiredAccount);
            if (requiredAccount)  {
                $(".hidden-has-account").show();
                $('.required-fields').addClass("up");
                //if (window.innerWidth < 992 && window.innerWidth > 767)
                //    $('.required-fields').css('bottom', '138px');
                //else if (window.innerWidth <= 767)
                //    $('.required-fields').css('bottom', '125px');
            }
            else {
                $('#s2id_CustomerBranch').removeClass('input-validation-error');
                $('#CustomerBranch').next().removeClass('field-validation-error');
                $(".hidden-has-account").hide();
                $('.required-fields').removeClass("up");
                //if (window.innerWidth < 992 && window.innerWidth > 767)
                //    $('.required-fields').css('bottom', '59px');
                //else if (window.innerWidth <= 767)
                //    $('.required-fields').css('bottom', '64px');
            }
        }

        function getSubStringByLength(myString) {

            var maxLength = 440;

            if (myString.length > maxLength) {
                while (maxLength >= 0 && myString[maxLength] != ' ' && myString[maxLength] != '\n') {
                    maxLength--;
                }
            }
            myString = myString.slice(0, maxLength);

            return myString;
        }


        function findActiveSection() {

            windowsize = $(window).width();
            var i = 0;
            $(".pagingDirection ul li a").each(function () {
                var href = $(this).attr("data-value");
                if (href) {
                    i++;
                    if (collision($('[name=h_' + href + ']').parent(), $('.pagingDirection'))) {
                        $currentSection = $(".pagingDirection").find("[data-value='" + href + "']");
                        $("a.hashJump").removeClass("active");
                        $currentSection.addClass("active");
                        // scrollSeaStatusFocus();
                    }

                }
            });
        }

        $(window).bind('scroll', function () {
            findActiveSection();
        });

        function collision($div1, $div2) {
            if (!$div1 || !$div1.offset()) return false;
            if (!$div2 || !$div2.offset()) return false;
            var x1 = $div1.offset().left;
            var y1 = $div1.offset().top;
            var h1 = $div1.outerHeight(true);
            var w1 = $div1.outerWidth(true);
            var b1 = y1 + h1;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var y2 = $div2.offset().top - $div2.outerHeight(true);
            var h2 = $div2.outerHeight(true);
            var w2 = $div2.outerWidth(true);
            var b2 = y2 + h2;
            var r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
            return true;
        }

        $(window).disablescroll();
        $(window).disablescroll("undo");
        if (window.innerWidth < 768) {
            $('.mobileSubHead').width($('.mobileSubHead').width() - 2);

            $('.branchsResults .serviceSection .serviceSectionBlock .serviceLeft .marksJob').each(function (i, x) {
                var width = $(x).parents('.marksName').width();
                if ($(x).width() > width * 0.4) {
                    $(x).addClass('flex').css('display', 'flex');
                }
            });
        }

        var maxHeight = 0;
        $('.hp_loan_bottom_text ul li').each(function (index, x) {
            if (maxHeight < $(x).height()) {
                maxHeight = $(x).height();
            }
        })

        $('.hp_loan_bottom_text ul li').each(function (i, x) {
            $(x).find('.openNow').css('margin-top', maxHeight - $(x).height() + 10);
        });


        $(".animsition").animsition({
            // options
            "opacity": 1,
            loadingClass: 'animsition-loading',
            "inDuration": 100,
            unSupportCss: [
              'animation-duration',
              '-webkit-animation-duration',
      '-o-animation-duration'
            ],
            overlay: false


        }).one('animsition.start', function () {
            $(this).find('.animsition-child').addClass('zoom-in').css({
                "opacity": 1
            });
        });
        $(".animsition").animsition({
            // options
            "opacity": 1
        }).one('animsition.end', function () { });

        $('.addBtn,.branchesClose').click(function () {

            $(".branchsResults").addClass('open');

            $(this).parents('li').prevAll().hide();
            $(this).parents('li').nextAll().hide();

            $('.branchsLocator').hide();
            fixImgHeightAll();

        });

        $('a.infoBlockInner').click(function (e) {

            e.stopPropagation();
            $(".branchsResults").removeClass('open')

            $(this).parents('li').prevAll().show();
            $(this).parents('li').nextAll().show();

            $('.branchsLocator').show();
            $('.branchs_region').attr('tabindex', '-1').focus();

        });

        $('.graySectionMaxW .addBtn > img, .slideOpen img').hover(function () {
            //if ($(this).parents('.branchsResults') && !$(this).parents('.branchsResults').hasClass('open'))
            $(this).attr('src', $(this).attr('src').replace('_hover', ''));
            $(this).attr('src', $(this).attr('src').substring(0, $(this).attr('src').indexOf('.png')) + '_hover.png')
        }, function () {
            $(this).attr('src', $(this).attr('src').replace('_hover', ''));
        });

        $('.graySectionMaxW .addBtn, .slideOpen').focus(function () {
            //if ($(this).parents('.branchsResults') && !$(this).parents('.branchsResults').hasClass('open'))
            $(this).first().attr('src', $(this).find('img').attr('src').replace('_hover', ''));
            $(this).first().attr('src', $(this).find('img').attr('src').substring(0, $(this).find('img').attr('src').indexOf('.png')) + '_hover.png')
        }).focusout(function () {
            $(this).first().attr('src', $(this).find('img').attr('src').replace('_hover', ''));
        });

        setTimeout(function () {
            $(".slick-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                useTransform: true,
                mobileFirst: false,
                rtl: $('html').attr('lang') === "he" ? true : false,
                prevArrow: $('html').attr('lang') === "he" ? $('.slick-next') : $('.slick-prev'),
                nextArrow: $('html').attr('lang') === "he" ? $('.slick-prev') : $('.slick-next'),
                responsive: [
                    {
                        breakpoint: 2000,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1

                        }
                    },
                    {
                        breakpoint: 1279,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1

                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
                //variableWidth: true,
                //rightMode: true
            });
            //$(".slick-slider").get(0).slick.setPosition()
            $(".slick-slider").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.slide .makeVerticalCenterSon').removeClass('open');

            });
        }, 500);

        $('.modal').on('show.bs.modal', centerModal);

        $('.slick-prev, .slick-next').text('');

        $('.slideOpen').click(function () { $(this).parent().addClass('open') })

        $('.slideCloseButton').click(function () { $(this).parents('.makeVerticalCenterSon').removeClass('open') })

        $(".carousel_dt_par").on("click", ".pause_btn", function () {
            $('.carousel').carousel('pause');
            $(this).removeClass("pause_btn");
            $(this).addClass("play_btn");
            $(this).attr("aria-label", $(this).attr('data-continue'));
            $(this).find('div').attr("title", $(this).attr('data-continue'));
        });
        $(".carousel_dt_par").on("click", ".play_btn", function () {
            $('.carousel').carousel('cycle');
            $(this).removeClass("play_btn");
            $(this).addClass("pause_btn");
            $(this).attr("aria-label", $(this).attr('data-stop'));
            $(this).find('div').attr("title", $(this).attr('data-stop'));
        });
        $(".carousel_dt_par").keyup(function (event) {
            switch (event.keyCode) {
                case 27:
                    //$(".slider_form").slideUp(200);
                    $(".close_slider_form").click();
                    break;
            }
        });

        setTimeout(function () {
            if (window.innerWidth < 1280) {
                $('.hideFromMobile').remove();
            }
        }, 1);
        $('.level1').click(function () {
            if (!$(this).hasClass('underLine') && !$(this).hasClass('BenefitsIco') || window.innerWidth >= 1280) {
                if ($(this).hasClass('underLine')) {
                    $('.activeElement').not('.underLine').addClass('leshonit');
                    $(this).prevAll().not(".bgActiveElement").removeClass('activeElement').removeClass('open');
                    $(this).nextAll().not(".bgActiveElement").removeClass('activeElement').removeClass('open');
                    $(this).prevAll().not(".bgActiveElement").find('.activeElement').removeClass('activeElement').removeClass('open');
                    $(this).nextAll().not(".bgActiveElement").find('.activeElement').removeClass('activeElement').removeClass('open');
                    $(this).prevAll().not(".bgActiveElement").find('.subLevelVisible').removeClass('subLevelVisible').removeClass('open');
                    $(this).nextAll().not(".bgActiveElement").find('.subLevelVisible').removeClass('subLevelVisible').removeClass('open');
                }
                else {
                    $('.leshonit').removeClass('leshonit');
                    $(this).prevAll().removeClass('activeElement').removeClass('open');
                    $(this).nextAll().removeClass('activeElement').removeClass('open');
                    $(this).prevAll().find('.activeElement').removeClass('activeElement').removeClass('open');
                    $(this).nextAll().find('.activeElement').removeClass('activeElement').removeClass('open');
                    $(this).prevAll().find('.subLevelVisible').removeClass('subLevelVisible').removeClass('open');
                    $(this).nextAll().find('.subLevelVisible').removeClass('subLevelVisible').removeClass('open');
                }
                if (window.innerWidth < 1280)
                    $(this).toggleClass('activeElement').toggleClass('open');
                else if ($(this).hasClass('underLine'))
                    $(this).toggleClass('activeElement').toggleClass('open');
                else if (!$(this).hasClass('search'))
                    $(this).addClass('activeElement').addClass('open');

            }
            else if (window.innerWidth < 1280 && !$(this).hasClass('BenefitsIco')) {
                $(this).toggleClass('activeElement');
                $(this).prev().removeClass('activeElement').removeClass('open');
                $(this).next().removeClass('activeElement').removeClass('open');
                setTimeout(function () {
                    $('.level1.activeElement').addClass('open');
                    $('.subLevelVisible').parent().addClass('open');
                }, 1)
            }

            if (window.innerWidth < 1280 && !$(this).hasClass('underLine') && !$(this).hasClass('BenefitsIco')) {
                var self = $(this);
                setTimeout(function () {
                    $('.level1').not(".underLine").css('margin-top', '0px');
                }, 1);
            }
            $(this).find('input.inputSearch').focus();
        });

        setTimeout(function () {
            buildEvents();
        }, 1);

        $('.banner .dropdown .btn').on('click', function (event) {
            // if ($(this).parent().hasClass('open')) {
            $(this).parent().toggleClass('open');
            if ($(this).parent().hasClass('open')) {
                $(this).attr('aria-expanded', 'true');
                if ($(this).parent().next().hasClass('dropdown')) {
                    $(this).parent().next().removeClass('open');
                    $(this).parent().next().find('button').attr('aria-expanded', 'false');
                }
                else {
                    $(this).parent().prev().find('button').attr('aria-expanded', 'false');
                    $(this).parent().prev().removeClass('open');
                }
            }
            else {
                $(this).attr('aria-expanded', 'false');
                if ($(this).parent().next().hasClass('dropdown')) {
                    $(this).parent().next().addClass('open');
                    $(this).parent().next().find('button').attr('aria-expanded', 'true');

                }
                else {
                    $(this).parent().prev().addClass('open');
                    $(this).parent().prev().find('button').attr('aria-expanded', 'true');

                }
            }
            // }
        });

        $('.hashJump').click(function (e) {
            var elem = $(e.target);

            elem.parent().prevAll().find('a').removeClass('active');
            elem.parent().nextAll().find('a').removeClass('active');

            elem.addClass('active');
        });

        $('.slick-arrow').click(function () {
            $('.makeVerticalCenterSon').removeClass('open');
            $('.slide').removeAttr('aria-hidden');
        });

        $('.slick-arrow').focus(function () {
            $(this).addClass('hasFocus');
        }).focusout(function () {
            $(this).removeClass('hasFocus');
        });

        $('.slick-arrow').on('touchend', function (e) {
            var self = $(this);
            setTimeout(function () {
                self.removeClass('hasFocus');
            }, 1000);
        });

        $('.slick-arrow').on('touchstart', function (e) {
            $(this).addClass('hasFocus');
        });

        $(".slick-arrow").hover(
          function () {
              $(this).addClass("hasFocus");
          }, function () {
              $(this).removeClass("hasFocus");
          }
        );

        $('.openNow a img').hover(function () {
            $(this).attr('src', $(this).attr('src').replace('_Hover', ''));
            $(this).attr('src', $(this).attr('src').substring(0, $(this).attr('src').indexOf('.png')) + '_Hover.png')
        }, function () {
            $(this).attr('src', $(this).attr('src').replace('_Hover', ''));
        });

        $('.openNow a').focus(function () {
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_Hover', ''));
            $(this).find('img').attr('src', $(this).find('img').attr('src').substring(0, $(this).find('img').attr('src').indexOf('.png')) + '_Hover.png')
        }).focusout(function () {
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_Hover', ''));
        });


        $('.message-loby-summery').each(function () {

            var msg = $(this).attr('data-msg');

            $(this).text(getSubStringByLength(msg));
        });


        $('.mfe-message-full-text').on('shown.bs.collapse', function () {

            var summaryDiv = $(this).parent().find('.message-loby-summery');
            summaryDiv.text(summaryDiv.attr('data-msg'));
            $(this).attr('tabindex', '-1').focus();
            var card = $(this).parents(".mfe-card");
            card.addClass("mfe-is-open");
            readmore = card.find(".mfe-read-more-button");
            var opentext = readmore.data("open-text");
            var closetext = readmore.data("close-text");

            if (opentext === readmore.text()) {
                readmore.text(closetext);
            } else {
                readmore.text(opentext);
                readmore.attr('aria-label', opentext);
            }

        });

        $('.mfe-message-full-text').on('hidden.bs.collapse', function () {

            var summaryDiv = $(this).parent().find('.message-loby-summery');
            summaryDiv.text(getSubStringByLength(summaryDiv.attr('data-msg')));


            var card = $(this).parents(".mfe-card");
            card.removeClass("mfe-is-open");
            $('html,body').animate({
                scrollTop: card.position().top
            })
            readmore = $(this).parents(".mfe-card").find(".mfe-read-more-button");
            var opentext = readmore.data("open-text");
            var closetext = readmore.data("close-text");
            if (opentext === readmore.text()) {
                readmore.text(closetext);
                readmore.attr('aria-label', readmore.attr('data-aria-label'));
            } else {
                readmore.text(opentext);
            }

        });



        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $('.modal:visible').each(centerModal);
                $(this).trigger('resizeEnd');
            }, 500);

            if (window.innerWidth >= 1280) {
                $('.nicescroll-rails').css('opacity', 0);
            }
            else {
                $('.underLine').first().css('margin-right', '0');
            }

            $('.mobileMenu').getNiceScroll().resize();

            setTimeout(function () {
                buildEvents();
            }, 1);
        });

        $(window).bind('resizeEnd', function () { $('.slick-prev, .slick-next').text(''); });



        setNavbarContactUsPhoneLinks();

        //setSearch();

        setModals();

    });

    
function onFocusOut() {
    validate(this);
}

function validate(node) {
    var valid = isValid(node),
        $error = $(node).next('.error');

    if (valid) {
        $(node).attr('aria-invalid', false);
        $error
            .attr('aria-hidden', true)
            .hide();
        $(node).attr('aria-describedby', '');
    } else {
        $(node).attr('aria-invalid', true);
        $error
            .attr('aria-hidden', false)
            .show();
        $(node).attr('aria-describedby', $error.attr('id'));
    }
}

function isValid(node) {
    return $(node).valid();
}

function fixHeigthOfChilds(sctr, itemSctr, maxHeight) {
    sctr.each(function (index, x) {
        if (maxHeight < ($(x).find(itemSctr).length > 0 ? $(x).find(itemSctr).height() : 0)) {
            maxHeight = ($(x).find(itemSctr).length > 0 ? $(x).find(itemSctr).height() : 0);
        }
    });
    sctr.each(function (i, x) {
        if ($(x).find(itemSctr).length > 0)
            $(x).find(itemSctr).height(maxHeight);
        //$(x).find(itemSctr).attr('style', 'diplay:block;border:solid 1px blue;height:' + maxHeight + 'px;');
    });
}




function fixImgHeight(n) {
    if (!n) n = 0;
    if ($('.promotions .promotions-list .promotion-item:nth-child(1)').find('.thumbnail-image img').height() <= 0) {
        if (n < 3)
            setTimeout(function () { fixImgHeight(n + 1); }, 2000);
    }
    else {
        if (window.innerWidth < 992) {

            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(1), .promotions .promotions-list .promotion-item:nth-child(2)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(1), .promotions .promotions-list .promotion-item:nth-child(2)'), '.thumbnail-text', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(3), .promotions .promotions-list .promotion-item:nth-child(4)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(3), .promotions .promotions-list .promotion-item:nth-child(4)'), '.thumbnail-text', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(5), .promotions .promotions-list .promotion-item:nth-child(6)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(5), .promotions .promotions-list .promotion-item:nth-child(6)'), '.thumbnail-text', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(7), .promotions .promotions-list .promotion-item:nth-child(8)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(7), .promotions .promotions-list .promotion-item:nth-child(8)'), '.thumbnail-text', 0);
        }
        else {
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(1), .promotions .promotions-list .promotion-item:nth-child(2), .promotions .promotions-list .promotion-item:nth-child(3)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(1), .promotions .promotions-list .promotion-item:nth-child(2), .promotions .promotions-list .promotion-item:nth-child(3)'), '.thumbnail-text', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(4), .promotions .promotions-list .promotion-item:nth-child(5), .promotions .promotions-list .promotion-item:nth-child(6)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(4), .promotions .promotions-list .promotion-item:nth-child(5), .promotions .promotions-list .promotion-item:nth-child(6)'), '.thumbnail-text', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(7), .promotions .promotions-list .promotion-item:nth-child(8), .promotions .promotions-list .promotion-item:nth-child(9)'), '.thumbnail-image', 0);
            fixHeigthOfChilds($('.promotions .promotions-list .promotion-item:nth-child(7), .promotions .promotions-list .promotion-item:nth-child(8), .promotions .promotions-list .promotion-item:nth-child(9)'), '.thumbnail-text', 0);
        }
    }
    //}, 1000);
}

function fixImgHeightAll() {
    if ($('.promotions').length <= 0)
        return;

    var imgs = $('.promotions').find('img'),
        len = imgs.length,
        counter = 0;

    [].forEach.call(imgs, function (img) {
        if (img.complete)
            incrementCounter();
        else
            img.addEventListener('load', incrementCounter, false);
    });

    function incrementCounter() {
        counter++;
        if (counter === len) {
            console.log('All images loaded!');
            fixImgHeight(0);
        }
    }

}



function submitContactUs(contactUsForm, event) {
    event.preventDefault();
    if (!$(contactUsForm).valid() || !$('#AreaCode').val() || ($(contactUsForm).attr('id') == "main-page-form" && !$('#Subject').val() || ($('.hidden-has-account').is(":visible") && !$('#CustomerBranch').val()))) {
        $(event.target).removeAttr("disabled");
        return false;
    }

    var form = contactUsForm;
    var action = form.attr("action");
    var dataToPost = form.serialize();
    var fname = $("#FirstName").val() || $("#fname").val();
    $.post(action, dataToPost)
        .done(function (response, status) {
            $('.send-2').removeAttr("disabled");
            if (status === "success") {
                if (response && response.Success != null && response.Success == true && ((response.Status == null || response.Status == undefined || response.Status == "undefined") || response.Status < 2)) {
                    var successMsg = $('.accessMessage').val().replace('{0}', fname);
                    if (response.Message != null && response.Message != undefined && response.Message != "undefined") {
                        successMsg = response.Message;
                    }
                    //icon success
                    $('.contactUsMessage').removeClass('errorModal').find('img').attr('src', location.origin + '/' + $('html').attr("data-vd") + '/Img/main-page/plane.png')
                    //upper text
                    $("#modalTitle").attr('aria-label', successMsg).text(successMsg).show();
                    //lower text
                    $("#modalSecondaryTitle").attr('aria-label', $("#modalAprrovedtext").text()).text($("#modalAprrovedtext").text()).show();

                    if (response.CallsAvailabilityForCustomerStr1 != null && response.CallsAvailabilityForCustomerStr1 != undefined && response.CallsAvailabilityForCustomerStr1 != "undefined") {
                        CallsAvailabilityForCustomerP1 = response.CallsAvailabilityForCustomerStr1;
                        CallsAvailabilityForCustomerP2 = CallsAvailabilityForCustomerP1.replace(/&quot;/g, "\"");
                        CallsAvailabilityForCustomer = JSON.parse(CallsAvailabilityForCustomerP2);
                        if (response.CallsAvailabilityForNonCustomerStr1 != null && response.CallsAvailabilityForNonCustomerStr1 != undefined && response.CallsAvailabilityForNonCustomerStr1 != "undefined") {
                            CallsAvailabilityForNonCustomerP1 = response.CallsAvailabilityForNonCustomerStr1;
                            CallsAvailabilityForNonCustomerP2 = CallsAvailabilityForNonCustomerP1.replace(/&quot;/g, "\"");
                            CallsAvailabilityForNonCustomer = JSON.parse(CallsAvailabilityForNonCustomerP2);
                        }
                        updateCallAvailabilityOptions(true);
                        updateCallAvailabilityOptions(false);
                    }

                    form[0].reset();

                    $("div.select2-container").each(function () {
                        $(this).select2("val", "");
                    });
                    $('#Subject').val('');
                    $('#AreaCode').val('');
                    $('#CustomerBranch').val();
                    location.hash = "success";


                    $('#a1').modal('show');
                    setTimeout(function () {
                        $('.modal-body-title.first').attr('tabindex', -1).focus();
                    }, 500);
                    $(".hidden-has-account").hide();
                    $("#HasAnAccount").attr('checked', false).val(false);
                    $("#HasAnAccount").prev().val(false);
                    loadSubjects(false);
                    $("#IsEmailConfirm").attr('checked', false).val(false);
                    $("#IsEmailConfirm").prev().val(false);
                    $('.form-check-lable').removeClass('isChecked').addClass('notChecked');

                }
                else {
                    submitContactUsFailed(response.Message);
                }
            }
            else {
                submitContactUsFailed();
            }
        })
        .fail(function (jqxhr, status, error) {
            $('.send-2').removeAttr("disabled");
            submitContactUsFailed();
        });
}

function submitContactUsFailed(message) {
    //icon
    $('.contactUsMessage').addClass('errorModal').find('img').attr('src', location.origin + '/' + $('html').attr("data-vd") + '/Img/main-page/plane_error.png');
    //upper text
    if (message != null && message != undefined && message != "undefined") {
        $("#modalTitle").attr('aria-label', message).text(message).show();
        $("#modalSecondaryTitle").hide();
    }
    else {
        //lower text
        var errMsg = $("#modalErrortext").text();
        $("#modalSecondaryTitle").attr('aria-label', errMsg).text(errMsg).show();
        $("#modalTitle").hide();
    }
    $('#a1').modal('show');
}

function exchangeTableFixFirstColumn() {
    $('.exchange-table tbody tr').each(function (x, i) {
        var td = $(this).find("td:first");
        $(this).height(td.height() + 20);
    });


    $('.table-section .table.main-page-table').each(function (index, x) {
        var maxHeight = 0;
        $(x).find('th').each(function (index, y) {
            if (maxHeight < $(y).height()) {
                maxHeight = $(y).height();
            }
        });

        $(x).find('th').each(function (index, y) {
            $(y).height(maxHeight);
        });
    });


    if (window.innerWidth < 1280) {
        $('.table-section .table.main-page-table tbody tr').each(function (index, x) {
            var maxHeight = 0;
            $(x).find('td').each(function (index, y) {
                if (maxHeight < $(y).height()) {
                    maxHeight = $(y).height();
                }
            });

            $(x).find('td').each(function (index, y) {
                $(y).height(maxHeight + 30);
            });
        });
    }

}

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}


function setNavbarContactUsPhoneLinks() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.contact_phone').addClass("pointer");
        $('.contact_phone').bind('click', function () {
            window.location.href = "tel:" + $(this).html();
        });
    }
}

function setSearch() {
    $('.inputSearch').keydown(function (event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            DoSearch();
        }

    });
    $('.inputSearchButton').click(function () {
        DoSearch();
    });
}

function clearTxtSearch() {
    $('.inputSearch').val('');
}

function DoSearch(txtId) {
    var errors = "";
    var flag = 1;
    if ($('.inputSearch').val().length == 0) {
        errors += _empty_text_error;
        flag = 0;
    }
    else if ($('.inputSearch').val().length < 2) {
        errors += _short_text_error + "\n";
        flag = 0;
    }
    if (CheckIllegalCharacters($('.inputSearch').val()) == false) {
        errors += _not_valid_text_error + "\n";
        flag = 0;
    }
    if (flag == 0) {
        alert(errors);
        $('.inputSearch').focus();
    }
    else {
        window.location.href = _url_text + encodeURI($('.inputSearch').val());
        return false;
    }
}

function CheckIllegalCharacters(sText) {
    var NotValidChars = "!#$%^*().+=@&/<>?;:[]{}|";
    var Char;
    var idx = 0;
    for (var i = 0; i < sText.length; i++) {
        Char = sText.charAt(i);
        idx = NotValidChars.indexOf(Char);
        if (idx > -1) {
            return false;
        }
    }
    return true;
}

function setModals() {
    $('.modal-opener').click(function () {
        var target = $(this).attr('data-target');
        var url = $(this).attr('data-url');
        var newWindow = false;
        if ($(this).attr('data-new-window') && $(this).attr('data-new-window').toLowerCase() == "true") {
            newWindow = true;
        }
        if (target) {
            if (url && url.length > 0) {
                $(target).find('.approveBtnCont').attr('href', url);
            }
            $(target).find('.approveBtnCont').attr('target', newWindow ? '_blank' : '_self');
            $(target).modal({ overlayClose: true });

            $(target).find('.cancelBtn').click(function () {
                $(target).modal('hide');
            });
        }
    });

}

function buildEvents() {
    if (window.innerWidth < 1280) {
        $('ul.dropdown-menu [data-toggle=dropdown]').unbind('click').click(function (e) {
            e.stopPropagation();

            if ($(this).parent().parent().hasClass('level2')) {
                $('.level2').not(".underLine").css('margin-top', '0px');
            }
        });

        $('.nav ul.level2 > li > div, .nav ul.level2 > li > a').unbind('click').click(function (e) {
            $(this).parent().prevAll().removeClass('activeElement').removeClass('open');
            $(this).parent().nextAll().removeClass('activeElement').removeClass('open');
            $(this).parent().toggleClass('activeElement').toggleClass('open');
            if (!$(this).next("ul").length > 0) {
                $('.nav ul.level2 > li > a').removeClass('subLevelVisible');
            }
            else {
                $(this).toggleClass('subLevelVisible')
            }
            e.stopPropagation();
        });

        $('.nav ul.level3 > li > a').unbind('click').click(function (e) {
            e.stopPropagation();
        });

        $(".manuBtn").unbind('click').click(function () {
            $(window).disablescroll("disable");
            $('#BackBlack').css({
                left: '0',
                display: 'block',
                opacity: '0.5'
            })
            $(".navbar-fixed-top").addClass("menuOpen");
            $('[data-active=activeElement]').addClass('activeElement');
            setTimeout(function () {
                $('.activeElement > .dropdown-toggle').click();
                var open = $('.open');
                open.addClass('activeElement');
                params = {
                    cursorcolor: "#B2BECE",
                    cursoropacitymin: 1,
                    cursorwidth: "6px",
                    horizrailenabled: false,
                    touchbehavior: true,
                    preventmultitouchscrolling: false,
                    railalign: _scroll_align
                };
                setTimeout(function () {
                    var niceScroll = $('.mobileMenu').niceScroll(params);
                    niceScroll.resize();
                }, 100)

            }, 1);
        });

        $('.mobileOpenHead .closeIco').unbind('click').click(function () {
            $(".navbar-fixed-top").removeClass("menuOpen");
            $('.navbar-collapse').removeClass("in");
            $('.activeElement').removeClass('activeElement').removeClass('open');
            //$('body').removeClass('notScrolling');
            $(window).disablescroll("undo");
            var $nonScrollable = $(window);
            $('#BackBlack').css({
                left: 'initeal',
                display: 'none',
                opacity: '0'
            })
        });

        $('.searchArea .closeHeadToolTip').unbind('click').click(function () {
            $('.navbar-fixed-top').css('z-index', '1031');
            $('.searchArea').hide();
        });

        $('.searchIco').unbind('click').click(function (e) {
            $('.navbar-fixed-top').css('z-index', '0');
            $('.searchArea').show();

            $('input.inputSearch.inputSearchSmall').focus();
        });

        $('.bankMobile,.contactMobile').click(function () {
            $('.mobileMenu').getNiceScroll().resize();
        });
    }
    else {
        //$('.bgRegulatoryLinks').last().css('margin-right', '-4px').css('padding-right', '15px');
        //$('.bgRegulatoryLinks').last().addClass('special');
        $('.bgRegulatoryLinks').first().removeClass('special');

        $('.nav .level2, .nav .level3').unbind('click').click(function (e) {
            e.stopPropagation();
        });

        $('.closeHeadToolTip').unbind('click').click(function () {
            $(this).parents('.level1').removeClass('activeElement').removeClass('open');
        });

        var widths = 0;
        var margin = $('html').attr('lang') == "he" ? 'margin-right' : 'margin-left';
        $('.level1').each(function (i, x) {
            widths += $(x).width();
        });

        $('.underLine').first().css(margin, ((window.innerWidth < 1280 ? 1250 : 1350) - (widths - (window.innerWidth < 1350 ? -300 : -100))) + 'px');


        $('.level2 > li > a').focus(function () {
            var elem = $(this).parent();
            $(elem).prevAll().find('ul').hide();
            $(elem).nextAll().find('ul').hide();
            $(elem).find('ul').show();
        });

        $('.level3').each(function (i, x) {
            $(x).find('li').last().find('a').blur(function () {
                var elem = $(this).parent().parent();
                $(elem).prevAll().find('ul').hide(); $(elem).hide();
            });
        });
    }
}



/* ==================== Acccssability ================== */

$(document).ready(function () {
    if (sessionStorage.getItem('useTabing') && sessionStorage.getItem('useTabing') === 'true') {
        $('body').addClass('useTabing');
        $('.bannerSliderArea ul.hiddenSpan li a').attr('tabindex', -1);
        $('.disabledTabingAncore').attr('tabindex', 0).attr("aria-hidden", false);
        $('.useTabingAncore').attr('tabindex', -1).attr("aria-hidden", true);
    }
    else {
        $('body').removeClass('useTabing');
        $('.bannerSliderArea ul.hiddenSpan li a').attr('tabindex', 0);
        $('.useTabingAncore').attr('tabindex', 0).attr("aria-hidden", false);
        $('.disabledTabingAncore').attr('tabindex', -1).attr("aria-hidden", true);
    }

    $('.level2').hover(function () {
        if ($(this).find('.level3').length > 0) {
            $(this).attr('aria-expanded', false);
            $(this).find('.level3').attr('aria-hidden', false);
        }
    }, function () {
        if ($(this).find('.level3').length > 0) {
            $(this).attr('aria-expanded', true);
            $(this).find('.level3').attr('aria-hidden', true);
        }
    })

    $('.slideOpen').click(function () {
        $(this).parents('.makeVerticalCenterSon').find('.summary').attr('tabindex', 0).attr('aria-hidden', false).focus();
        $(this).parents('.makeVerticalCenterSon').find('.read_more').attr('aria-hidden', false);
        $(this).parents('.makeVerticalCenterSon').find('.slideCloseButton').attr('aria-hidden', false).attr('tabindex', 0);
    });

    $('.slideCloseButton').click(function () {
        $(this).parents('.makeVerticalCenterSon').find('.summary').attr('tabindex', 0).attr('aria-hidden', true);
        $(this).parents('.makeVerticalCenterSon').find('.read_more').attr('aria-hidden', true);
        $(this).parents('.makeVerticalCenterSon').find('.slideCloseButton').attr('aria-hidden', true).attr('tabindex', -1);
    });

    setTimeout(function () {
        $('img').each(function (i, x) {
            if (!$(x).attr('alt')) {
                $(x).attr('alt', '')
            }
        });
    }, 1000);

    $('a').each(function (i, x) {
        if (!$(x).hasClass('hash_css') && !$(x).attr('href')) {
            $(x).attr('href', 'javascript:void(0);')
        }
    });

    $('.level2 > li a').focus(function () {
        if (!$(this).parent().hasClass('logoBlock'))
            $(this).parent().addClass('focus');
    }).focusout(function () {
        $(this).parent().removeClass('focus');
    });

    $('.useTabingAncore').click(function () {
        $('body').addClass('useTabing');
        $('.bannerSliderArea ul.hiddenSpan li a').attr('tabindex', -1);
        sessionStorage.setItem('useTabing', 'true');
        $('.disabledTabingAncore').attr('tabindex', 0).attr("aria-hidden", true);
        $('.useTabingAncore').attr('tabindex', -1).attr("aria-hidden", false);
        $('.slide .read_more a').attr('tabindex', 0);
        $('.slide .slideOpen').attr('tabindex', 0);
    });

    $('.disabledTabingAncore').click(function () {
        $('body').removeClass('useTabing');
        $('.bannerSliderArea ul.hiddenSpan li a').attr('tabindex', 0);
        sessionStorage.setItem('useTabing', 'false');
        $('.useTabingAncore').attr('tabindex', 0).attr("aria-hidden", true);
        $('.disabledTabingAncore').attr('tabindex', -1).attr("aria-hidden", false);
        $('.slide .read_more a').attr('tabindex', -1);
        $('.slide .slideOpen').attr('tabindex', -1);
    });

    $('.jumpToMainPage').click(function () {
        $('[role=main]').attr('tabindex', '-1').focus();
        $('[role=main]').removeAttr('tabindex');
        $('html, body').animate({
            scrollTop: 17
        }, 0);
    });

    $('.carousel-pause-button, #id_title, #id_desc, .carousel-aside-pause').remove();

    $('*').focus(function () {
        document.activeElement = this;
    })

    $('[id*=s2id]').focus(function () {
        $(this).parents('.select2-container').addClass('focus');
    }).focusout(function () {
        $(this).parents('.select2-container').removeClass('focus');
    });

    $('.select2-focusser').each(function (i, x) {
        var id = $(x).attr('id') + 'Label';
        $(x).prev().attr('id', id).text($(x).parents('.select2-container').prev().text());
        $(x).attr('aria-labelledby', $(x).attr('aria-labelledby') + " " + id);
    });

    $('.slide').removeAttr('aria-hidden');

    $(document).keypress(function (e) {
        if (e.keyCode == 13) {
            {
                if (!$(e.target).parent().hasClass('search'))
                    $(e.target).click();
                if ($(e.target).hasClass('send-2'))
                    e.preventDefault();
            }
        }
    });

});

function CarouselPause() {
    if ($('.carousel-control.pause_btn').length > 0) {
        $('.carousel-control.pause_btn').click();
    }
    return false;
}

function CarouselPlay() {
    if ($('.carousel-control.play_btn').length > 0) {
        $('.carousel-control.play_btn').click();
    }
    return false;
}
$(document).on('zoomdSearch:opened', function (ev, data) {
    CarouselPause();
});

$(document).on('zoomdSearch:closed', function (ev, data) {
    CarouselPlay();
});

function CheckMizrachi() {
    var MizrachiUrl = $('.mizrachi_url').val();
    var MisrachiLogo = $('.mizrachi_logo').val();
    if (MizrachiUrl === '') MizrachiUrl = 'xxx';///'javascript:void(0);';
    if ($('.ind_is_mizrachi').length > 0 && $('.ind_is_mizrachi').val().toLowerCase() === 'true') {
        $('body').addClass("mizrachi");
        $('.navbar-default .navbar-nav > li.bgActiveElement.activeElement').addClass('mizrachi');
        //nav
        if ($('li.level1.bgActiveElement.activeElement').find('ul.dropdown-menu').length > 0) {
            //$('li.level1.bgActiveElement.activeElement').find('ul.dropdown-menu').find('li.logoBlock a img').attr('src', MisrachiLogo);
            $('li.level1.bgActiveElement.activeElement').find('ul.dropdown-menu').find('li.logoBlock a').attr('href', MizrachiUrl).find('img').attr('src', MisrachiLogo);
            $('li.level1.bgActiveElement.activeElement').find('ul.dropdown-menu').find('li.logoBlock').css({ 'float': 'right'}).find('a img').css('margin-top','7px');
        }
        else {
            var nav = '<ul class="level2 dropdown-menu multi-level" role="menubar" aria-label="×ª×¤×¨×× ×¨××©× ×××¨×× ××¤×××ª" style="height:78px;"><li class="hideFromMobile logoBlock" style="padding: 1px 25px;float: right;"><a href="+MizrachiUrl+"><img src="+MisrachiLogo+" alt="×××¨×× ××¤×××ª"></a></li></ul>';
            $('li.level1.bgActiveElement.activeElement').append(nav);
        }
    }
}
(function ($) {

    "use strict";

    var instance, proto;

    function UserScrollDisabler($container, options) {
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        // left: 37, up: 38, right: 39, down: 40
        this.opts = $.extend({
            handleKeys: true,
            scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, options);

        this.$container = $container;
        this.$document = $(document);
        this.lockToScrollPos = [0, 0];

        this.disable();
    }

    proto = UserScrollDisabler.prototype;

    proto.disable = function () {
        var t = this;

        t.lockToScrollPos = [
            t.$container.scrollLeft(),
            t.$container.scrollTop()
        ];

        t.$container.on(
            "mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",
            t._handleWheel
        );

        t.$container.on("scroll.disablescroll", function () {
            t._handleScrollbar.call(t);
        });

        if (t.opts.handleKeys) {
            t.$document.on("keydown.disablescroll", function (event) {
                t._handleKeydown.call(t, event);
            });
        }
    };

    proto.undo = function () {
        var t = this;
        t.$container.off(".disablescroll");
        if (t.opts.handleKeys) {
            t.$document.off(".disablescroll");
        }
    };

    proto._handleWheel = function (event) {
        event.preventDefault();
    };

    proto._handleScrollbar = function () {
        this.$container.scrollLeft(this.lockToScrollPos[0]);
        this.$container.scrollTop(this.lockToScrollPos[1]);
    };

    proto._handleKeydown = function (event) {
        for (var i = 0; i < this.opts.scrollEventKeys.length; i++) {
            if (event.keyCode === this.opts.scrollEventKeys[i]) {
                event.preventDefault();
                return;
            }
        }
    };


    // Plugin wrapper for object
    $.fn.disablescroll = function (method) {

        // If calling for the first time, instantiate the object and save
        // reference. The plugin can therefore only be instantiated once per
        // page. You can pass options object in through the method parameter.
        if (!instance && (typeof method === "object" || !method)) {
            instance = new UserScrollDisabler(this, method);
        }

            // Instance already created, and a method is being explicitly called,
            // e.g. .disablescroll('undo');
        else if (instance && instance[method]) {
            instance[method].call(instance);
        }

    };

    // Global access
    window.UserScrollDisabler = UserScrollDisabler;

})(jQuery);
