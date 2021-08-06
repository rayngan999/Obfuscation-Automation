(new R9.logger).time("combined");(function(b,c){b.createWidgetClass("button.StyleJamButton",{options:{inactiveStlBlock:"",activeStlBlock:"",canPulse:!1,showFocusOutlines:!1,activeCssClass:""},init:function(){},addEventHandlers:function(){this.options.inactiveStlBlock&&this.options.activeStlBlock&&(this.subscribe("button.deactivate",{id:this.id()},this.toggleActivation.bind(this,!1)),this.subscribe("button.activate",{id:this.id()},this.toggleActivation.bind(this,!0)));this.options.canPulse&&(this.subscribe("button.pulse",{id:this.id()},
this.pulse.bind(this,!0)),this.subscribe("button.pulse.reset",{id:this.id()},this.pulse.bind(this,!1)));this.options.showFocusOutlines&&(this.element.on("focus",this.toggleFocus.bind(this,!0)),this.element.on("blur",this.toggleFocus.bind(this,!1)))},toggleFocus:function(a){a&&!document.body.classList.contains(this.options.activeCssClass)||this.swapClassesToggle(this.element,"Button--with-focus-outline","Button--no-focus-outline",a)},toggleActivation:function(a){this.swapClassesToggle(this.element,
this.options.inactiveStlBlock,this.options.activeStlBlock,!a)},pulse:function(a){this.swapClassesToggle(this.element,"","Button--pulse",!a)}})})(R9,jQuery);(function(e,k){e.createWidgetClass("checkbox.StyleJamCheckbox",{widgetName:"checkbox",isToggle:!1,showLabel:!0,options:{click:k.noop,change:k.noop,keydown:k.noop,focus:k.noop,blur:k.noop},init:function(){this.elementNode=this.element.get(0);if(this.slider=this.getChildElement("slider"))this.isToggle=!0;this.label=this.getChildElement("label");this.showLabel=!!this.label.text().trim()},addEventHandlers:function(){this.bindInputEvent("click",this._handleElementClickEvent);this.bindInputEvent("change",
this._handleElementChangeEvent);this.bindInputEvent("keydown",this._handleKeydownEvent);this.bindInputEvent("focus",this._handleElementFocusEvent);this.bindInputEvent("blur",this._handleElementBlurEvent);if(!this.showLabel){var a=this;this.bindInputEvent("click",function(c){a.element.trigger("click."+this.widgetName,c)},this.getChildElement("icon"))}},bindInputEvent:function(a,c,d){var b=this;a+="."+this.widgetName;d=d||this.element;d.off(a).on(a,function(a){c.call(b,this,null,a)})},_handleElementClickEvent:function(){this.options.click.apply(this,
arguments)},_handleElementChangeEvent:function(a,c,d){e.common.widgets.checkbox.StyleJamCheckbox.refresh(a);this.options.change.apply(this,arguments);var b=k(a).prop("checked");a.setAttribute("aria-checked",b)},_handleKeydownEvent:function(a,c,d){this.options.keydown.apply(this,arguments)},_handleElementFocusEvent:function(a,c,d){a.disabled||(this.options.useFocusOutlines&&this.toggleFocusOutline(!0),this.isToggle&&e.common.widgets.checkbox.StyleJamCheckbox.refresh(this.elementNode),this.options.focus.apply(this,
arguments))},_handleElementBlurEvent:function(a,c,d){a.disabled||(this.options.useFocusOutlines&&this.toggleFocusOutline(!1),this.isToggle&&e.common.widgets.checkbox.StyleJamCheckbox.refresh(this.elementNode),this.options.blur.apply(this,arguments))},toggleFocusOutline:function(a){this.swapClassesToggle(this.element.closest(".js-checkbox-wrapper"),"","Checkbox--focused",!a)},setEnabled:function(a){a?this.element.removeAttr("disabled"):this.element.attr("disabled","disabled");this.element.attr("aria-disabled",
!a);e.common.widgets.checkbox.StyleJamCheckbox.refresh(this.element)},getValue:function(){return this.element.prop("checked")},setChecked:function(a){this.element.prop("checked",a)},setLabel:function(a){this.label.text(a)}});e.extend("common.widgets.checkbox.StyleJamCheckbox",{isCheckbox:function(a){return a&&a.nodeName&&"input"==a.nodeName.toLowerCase()&&"checkbox"==a.type.toLowerCase()},refresh:function(a){var c=e.question.ask("checkbox.StyleJamCheckbox.states");this.reflectState(a,c)},reflectState:function(a,
c){var d=k(a),b=d.data("switchInfo"),h=d.attr("id"),g=k("#"+h+"-label"),d=k("#"+h+"-icon"),h=k("#"+h+"-slider");if(g.length){var f=c.label;f[b.presentation]||(new e.logger(this.prototype._logPath)).error("Label States not defined for "+b.presentation+". Set them in StyleJamCheckbox.java#getLabelStates");l=f[b.presentation].checked||f.VANILLA.checked;m=f[b.presentation].unchecked||f.VANILLA.unchecked;f=f[b.presentation].disabled||f.VANILLA.disabled;a.checked?e.dom.swapClasses(g,m,l):e.dom.swapClasses(g,
l,m);a.disabled||a.prop&&a.prop("disabled")?e.dom.swapClasses(g,"",f):e.dom.swapClasses(g,f,"")}if(d.length){var g=c.icon,n=g.VANILLA;g[b.presentation]||(new e.logger(this.prototype._logPath)).error("Icon states not defined for "+b.presentation+". Presentations with icons must have states defined, set them in StyleJamCheckbox.java#getIconStates");b.disableMouseOutAnimation?(l=g.disableMouseOutAnimation.checked||n.checked,m=g.disableMouseOutAnimation.unchecked||n.unchecked,f=g.disableMouseOutAnimation.disabled||
n.disabled):(l=g[b.presentation].checked||n.checked,m=g[b.presentation].unchecked||n.unchecked,f=g[b.presentation].disabled||n.disabled,p=g[b.presentation].checkedFocus||n.checkedFocus,q=g[b.presentation].uncheckedFocus||n.uncheckedFocus);d.removeClass(l+" "+p+" "+m+" "+q);a.checked?a===document.activeElement?d.addClass(p):d.addClass(l):a===document.activeElement?d.addClass(q):d.addClass(m);a.disabled||a.prop&&a.prop("disabled")?e.dom.swapClasses(d,"",f):e.dom.swapClasses(d,f,"")}if(h.length){c=c.slider;
var l=c[b.presentation].checked||"",m=c[b.presentation].unchecked||"",f=c[b.presentation].disabled||"",p=c[b.presentation].checkedFocus||"",q=c[b.presentation].uncheckedFocus||"";c[b.presentation]||(new e.logger(this.prototype._logPath)).error("Slider states not defined for "+b.presentation+". Presentations with sliders must have states defined, set them in StyleJamCheckbox.java#getSliderStates");h.removeClass(l+" "+p+" "+m+" "+q);a.checked?a===document.activeElement?h.addClass(p):h.addClass(l):a===
document.activeElement?h.addClass(q):h.addClass(m);a.disabled?e.dom.swapClasses(h,"",f):e.dom.swapClasses(h,f,"")}if("TOGGLE_WITH_CHECK_MARK"===b.presentation||"TOGGLE"===b.presentation)b=k(a).getWidget(),p=k(a).parent().find(".toggle"),a.checked?b.swapClasses(p,"Checkbox--unchecked--toggle__slider__toggle","Checkbox--checked--toggle-with-checkmark__slider__toggle"):b.swapClasses(p,"Checkbox--checked--toggle-with-checkmark__slider__toggle","Checkbox--unchecked--toggle__slider__toggle")}});(function(a){var c=
a.fn.prop;a.fn.prop=function(d,b){var h=c.apply(this,arguments);"undefined"==typeof b||"checked"!=d&&"disabled"!=d||this.each(function(){e.common.widgets.checkbox.StyleJamCheckbox.isCheckbox(this)&&a(this).parent().is(".StyleJamCheckbox")&&e.common.widgets.checkbox.StyleJamCheckbox.refresh(this)});return h}})(k)})(R9,jQuery);(function(c,e){var f=c.config.getBoolean("ui.cookie.consent.useServerCookie",!0);c.createComponentClass("common.gdpr.CookieConsentV2",{options:{visible:!1},dialog:null,consentBtn:null,init:function(){this.gdpr=window["@r9/gdpr"];if(this.canShow()){var a={preventClosingClickBubble:!0,onClose:this.dialogClose.bind(this),closeOnModalClick:!1,hasKeyboardControl:!1};c.config.getBoolean("ui.horizon.cookie.consent.dismissible",!1)&&(a.closeOnModalClick=!0);this.dialog=this.getChildElement("cookie-consent-dialog").dialog(a).getWidget();
this.dialog.open();this.consentBtn=this.getChildElement("accept");this.saveBtn=this.getChildElement("save");this.noThanks=this.getChildElement("noThanks");this.customizeBtn=this.getChildElement("customizeConsent");this.turnAllOff=this.getChildElement("turnAllOff");this.turnAllOn=this.getChildElement("turnAllOn");c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:"dialog",value:"show"})}},canShow:function(){var a=/[&\?\s]+hcd=(true|false)(?![\w\s]+)&*[\w\W]*$/.exec(window.location.search),
b=!1;a&&2<=a.length&&(b="true"==a[1]);return this.options.visible&&!b&&this.gdpr&&this.gdpr.canShowConsentDialog()},addEventHandlers:function(){var a=this;if(this.consentBtn&&this.consentBtn.length)this.consentBtn.on("click",function(b){a.saveConsent(b,!0)});if(this.saveBtn&&this.saveBtn.length)this.saveBtn.on("click",this.saveConsent.bind(this));if(this.noThanks&&this.noThanks.length)this.noThanks.on("click",function(){a.dialog.close();a.removeCookieConsent()});this.customizeBtn&&this.customizeBtn.length&&
(this.customizeBtn.on("click",function(){a.swapClasses(a.element.find(".js-pageWrapper"),"","Content__PageWrapper--showPage2");c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:"customizeBtn",value:"clicked"})}),this.element.find(".purpose-action \x3e input").each(function(b,d){new c.common.widgets.checkbox.StyleJamCheckbox(e(d),{change:function(){var b=this.getValue();a.updateConsent(this.element.val(),b)}})}));this.turnAllOff&&this.turnAllOff.length&&(this.turnAllOff.on("click",
function(){a.element.find("[name\x3dpurposeId]").each(function(){e(this).getWidget().setChecked(!1)});a.swapClasses(a.turnAllOn.parent(),"Body__CheckAll--hidden","");a.swapClasses(a.turnAllOff.parent(),"","Body__UncheckAll--hidden");c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:"turnAllOff",value:"clicked"})}),this.turnAllOn.on("click",function(){a.element.find("[name\x3dpurposeId]").each(function(){e(this).getWidget().setChecked(!0)});a.swapClasses(a.turnAllOff.parent(),
"Body__UncheckAll--hidden","");a.swapClasses(a.turnAllOn.parent(),"","Body__CheckAll--hidden");c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:"turnAllOn",value:"clicked"})}));this.subscribe("gdpr.optout",this.removeCookieConsent.bind(this))},calculateToggleState:function(){this.getSelectedPurposeIds().length?(this.swapClasses(this.turnAllOff.parent(),"Body__UncheckAll--hidden",""),this.swapClasses(this.turnAllOn.parent(),"","Body__CheckAll--hidden")):(this.swapClasses(this.turnAllOn.parent(),
"Body__CheckAll--hidden",""),this.swapClasses(this.turnAllOff.parent(),"","Body__UncheckAll--hidden"))},getSelectedPurposeIds:function(a){var b=[];this.element.find("[name\x3dpurposeId]").each(function(c,f){c=e(f);(a||c.prop("checked"))&&b.push(c.val())});return b=b.length?b.join().split(","):b},saveConsent:function(a,b){a=this.getSelectedPurposeIds(b);a.length?this._saveConsent(a,b):(this.dialog.close(),this.removeCookieConsent())},_saveConsent:function(a,b){var d=this;this.logCookiesConsent(!0,
function(){d.dialog.close();d.gdpr&&d.gdpr.addConsent(function(){c.events.publish("gdpr.cookie.consented");c.Analytics.api.trackPageView()},a,f)},b||a)},dialogClose:function(a,b){b&&this.removeCookieConsent();c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:"dialog",value:"hide"})},removeCookieConsent:function(){this.logCookiesConsent(!1,function(){c.events.publish("gdpr.cookie.declined")});this.gdpr&&this.gdpr.removeConsent(void 0,f)},logCookiesConsent:function(a,b,d){c.events.publish("tags.dataLayer.push",
{eventName:"bannerHidden",event:"r9",dataConsent:a});"function"!==typeof b&&(b=e.noop);c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:a?"boolean"===typeof d?"all":"Purpose(s)-%s".format(d.join()):"",value:a?"consented":"declined"});b&&b()},updateConsent:function(a,b){c.Analytics.api.trackEvent({category:"gdpr",action:"cookieconsent-v2",label:"purpose(s)-"+a,value:b?"On":"Off"});this.calculateToggleState()}})})(R9,jQuery);(new R9.logger).timeEnd("combined");
//# sourceMappingURL=https://www.kayak.com/s/horizon/source-maps/combined.js.map?v=808941de5fd6ff0bb9f449a74b1de6ef9314eec9-keel-headings-update