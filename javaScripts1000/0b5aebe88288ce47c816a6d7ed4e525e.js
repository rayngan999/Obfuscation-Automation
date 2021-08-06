/*! For license information please see js-plugin-activator~4204912e.js.LICENSE.txt */
(window.webpackJsonppayroll_employee_portal_ui=window.webpackJsonppayroll_employee_portal_ui||[]).push([[9],{31:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var o=n(35),r=n.n(o),i=n(32),a=n.n(i),c=n(54),s=n(39),u=n(45),l=n(58),d=n(46),p=n(38),f=n(62);class g extends a.a{constructor(){super(...arguments),r()(this,"extendsSandBox",()=>{const t={};t.signOut=this.signOut,t.navigateToWidgetUrl=this.navigateToWidgetUrl,t.appConfig=s.a.get().appConfig,t.performanceProfiler=this.profiler,this.sandbox.employeePortal=t}),r()(this,"goToSignIn",()=>{const t=s.a.get().iusConfig;u.a.push({pathname:t.signInUrl,search:u.a.location.search})}),r()(this,"navigateToWidgetUrl",(function(t){let{qparams:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{qparams:""};const n=s.a.get().appConfig.widgetProperties;let o;if(n.forEach(e=>{t===e.widgetId&&(o=e.route)}),!o)throw new Error("Invalid widgetId passed into navigateToWidgetUrl.");u.a.push({pathname:o,search:e||u.a.location.search})})),r()(this,"signOut",()=>{const t=this;try{window.intuit.ius.apis.signOut({offeringId:"Intuit.smallbusiness.vmp.employeewidgets",done:function(){t.goToSignIn()}})}catch(e){this.sandbox.logger.error("signOut was called when the IUS script wasn't loaded and threw ".concat(e),{apiPath:s.a.get().iusConfig.iusScriptSource})}finally{t.goToSignIn()}})}onBeforeStart(){c.a.sandbox=this.sandbox,c.a.isMobile=Object(p.n)(),this.sandbox.pluginConfig&&!this.sandbox.pluginConfig.pluginId&&(this.sandbox.pluginConfig.pluginId=this.sandbox.pluginConfig.id),Object(d.e)(),Object(d.f)(l.a.ACTIVATOR_ST),this.profiler=new f.a("EmployeePortalApplication",this.sandbox),this.extendsSandBox()}}},38:function(t,e,n){"use strict";n.d(e,"q",(function(){return l})),n.d(e,"p",(function(){return d})),n.d(e,"n",(function(){return p})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return g})),n.d(e,"i",(function(){return b})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return m})),n.d(e,"c",(function(){return O})),n.d(e,"m",(function(){return _})),n.d(e,"l",(function(){return R})),n.d(e,"o",(function(){return w})),n.d(e,"k",(function(){return M})),n.d(e,"h",(function(){return P})),n.d(e,"g",(function(){return x})),n.d(e,"j",(function(){return y})),n.d(e,"d",(function(){return j}));var o=n(41),r=n.n(o),i=n(6),a=n.n(i),c=n(118),s=n.n(c),u=n(39);const l=t=>"data:image/svg+xml;base64,".concat(btoa(t));function d(t,e,n){const{formatMessage:o}=t;return n?o({id:e},n):o({id:e})}const p=()=>{const t=u.a.get().responsive.mobile_breakPoint;return screen.width<t},f=t=>{const e=u.a.get().responsive.mobile_breakPoint;return p()?a.a.createElement(s.a,r()({},t,{minDeviceWidth:e})):a.a.createElement(s.a,r()({},t,{minWidth:e}))},g=t=>{const e=u.a.get().responsive.mobile_breakPoint;return p()?a.a.createElement(s.a,r()({},t,{maxDeviceWidth:e})):a.a.createElement(s.a,r()({},t,{maxWidth:e}))};function b(t){const e="".concat(t,"="),n=decodeURIComponent(document.cookie).split(";");for(let o=0;o<n.length;o++){let t=n[o];for(;" "===t.charAt(0);)t=t.substring(1);if(0===t.indexOf(e))return t.substring(e.length,t.length)}return!1}function h(t){return document.cookie="".concat(t,"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;")}function m(t){return"".concat(Math.floor(t/60),":").concat("0".concat(t%60).slice(-2))}function O(t){return t-(new Date).getTime()}function E(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n=n||navigator.userAgent;const o=n.indexOf(t);if(-1===o)return!1;if(null===e)return!0;const r=n.indexOf("Version/"),i=r>-1?n.substring(r+8,n.indexOf(".",r)):n.substring(o+t.length+1),a=i.split(".",1).pop();return parseFloat(a)<=e}function _(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return E("MSIE",null,t)||E("Trident/",null,t)}function R(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return E("Edge",null,t)}function w(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return E("Safari",t,e)}function M(t){return t?t.toUpperCase().includes("PSP"):""}function P(t){return t?M(t)?"desktop":"online":"noEmployeeId"}function x(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const o=n=>String.prototype.split.call(e,n).filter(Boolean).reduce((t,e)=>null!=t?t[e]:t,t),r=o(/[,[\]]+?/)||o(/[,[\].]+?/);return void 0===r||r===t?n:r}function y(t,e){return d(e,function(t){return u.a.get().appConfig.widgetProperties.reduce((e,n)=>n.widgetId===t?n.label:e,"")}(t)).toLowerCase().replace("-","")}const j=()=>{try{["W2.ACCTNUM","W2.PASSWORD","W2.RECID","W2.SSN","W2.USERCRED1","W2.USERCRED2","W2.USERID"].forEach(t=>{document.cookie="".concat(t,"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.intuit.com;path=/")})}catch(t){}}},43:function(t,e,n){"use strict";n.d(e,"r",(function(){return a})),n.d(e,"k",(function(){return c})),n.d(e,"x",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"v",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"w",(function(){return p})),n.d(e,"p",(function(){return f})),n.d(e,"e",(function(){return g})),n.d(e,"g",(function(){return b})),n.d(e,"t",(function(){return h})),n.d(e,"u",(function(){return m})),n.d(e,"f",(function(){return O})),n.d(e,"s",(function(){return E})),n.d(e,"c",(function(){return _})),n.d(e,"n",(function(){return R})),n.d(e,"m",(function(){return w})),n.d(e,"l",(function(){return M})),n.d(e,"b",(function(){return P})),n.d(e,"j",(function(){return x})),n.d(e,"i",(function(){return y})),n.d(e,"o",(function(){return j})),n.d(e,"y",(function(){return C})),n.d(e,"a",(function(){return U})),n.d(e,"z",(function(){return v}));var o=n(183),r=n(266),i=n(61);const a=t=>Object(o.a)(t,"sandbox.pluginConfig.extendedProperties.enableTurboCashPlugin",!1)&&t.isMobile&&!Object(r.a)(t.activeEmployer),c=t=>Object(o.a)(t,"pluginConfig.extendedProperties.enableAppDynamicsTracking",!1),s=t=>Object(o.a)(t,"pluginConfig.extendedProperties.enableEmployerPageMessage",!1),u=t=>Object(o.a)(t,"pluginConfig.extendedProperties.shouldEnableNewW2URL",!1),l=t=>Object(o.a)(t,"pluginConfig.extendedProperties.enableEESSDev",!1),d=t=>Object(i.b)(t,"show-workforce-pardon-page"),p=t=>Object(i.b)(t,"show-employee-profile-desktop"),f=t=>Object(i.b)(t,"pass-employee-id-not-global-id"),g=t=>Object(i.b)(t,"call-gpapi-employer-list"),b=t=>Object(i.b)(t,"check-gb-address-default-product-list"),h=t=>Object(i.b)(t,"show-eess"),m=t=>Object(i.b)(t,"show-eess-ca"),O=t=>Object(i.b)(t,"call-ius-bulk-lookup-realms-api"),E=t=>Object(i.b)(t,"set-active-employer-country"),_=t=>Object(i.b)(t,"show-eess-ca"),R=t=>Object(i.b)(t,"load-wallet-ixp"),w=t=>Object(i.b)(t,"load-credit-karma-engagement-widget-us"),M=t=>Object(i.b)(t,"load-credit-karma-placement-card-ixp"),P=t=>Object(i.b)(t,"ewa-access-point"),x=t=>Object(i.b)(t,"get-user-employer-partner-createddate"),y=t=>Object(i.b)(t,"qbo-payroll-wf-add-company-account-status"),j=t=>Object(i.b)(t,"load-workforce-widgets-ui-w2"),C=t=>Object(i.b)(t,"use-fetch-create-cfr-ius"),U=t=>Object(i.b)(t,"workforce-disable-rum-tracking"),v=t=>Object(i.b)(t,"use-new-analytics-track-api")},46:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var o=n(183),r=n(43);const i={},a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";i[t]={}},c=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"global";i[n]||(i[n]={}),i[n][t]=e},s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";return i[t]},u=t=>{const e=t;return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();c(t,n,e)}},l=(t,e)=>{!Object(r.a)(t)&&Object(o.a)(t,"extensions.qbo.timing.actionStarted")&&t.extensions.qbo.timing.actionStarted(e)},d=(t,e,n)=>{!Object(r.a)(t)&&Object(o.a)(t,"extensions.qbo.timing.actionCompleted")&&t.extensions.qbo.timing.actionCompleted(e,n)}},58:function(t,e,n){"use strict";e.a={RUM_PAYCHECK_WIDGET_READY:"payroll-paycheck-ui_RUM_PAYCHECK_WIDGET_READY",RUM_EMPLOYEE_PORTAL_USER_V2:"payroll-employee-portal-ui_RUM_PAYCHECK_USER_V2",RUM_EMPLOYEE_EMPLOYER_LIST:"payroll-employee-portal-ui_RUM_EMPLOYEE_EMPLOYER_LIST",RUM_BULK_LOOKUP_REALMS:"payroll-employee-portal-ui_RUM_BULK_LOOKUP_REALMS",RUM_EMPLOYEE_PORTAL_LOAD:"payroll-employee-portal-ui_RUM_EMPLOYEE_PORTAL_LOAD",RUM_EMPLOYEE_IUS_WIDGET_READY:"payroll-employee-portal_RUM_EMPLOYEE_IUS_WIDGET_READY",RUM_EMPLOYEE_PORTAL_AND_PAYCHECK_SUMMARY_LOAD:"payroll-employee-portal-ui_RUM_EMPLOYEE_PORTAL_AND_PAYCHECK_SUMMARY_LOAD",ACTIVATOR_ST:"activator-st"}},62:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var o=n(46);class r{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.profiler=e.performance.createProfiler(t,n),this.sandbox=e,this.started=!1,this.completed=!1,this.hasRecorded=!1}start(){this.started||(this.profiler.start(),this.started=!0,this.completed=!1,this.hasRecorded=!1)}end(){this.started&&!this.completed&&(this.profiler.end(),this.completed=!0)}mark(t){this.profiler.mark(t)}measure(t,e){this.profiler.measure(t,e)}record(){this.hasRecorded||(this.sandbox.performance.record(this.profiler),this.hasRecorded=!0)}setMetadata(t){this.profiler._metadata=t}}class i{constructor(t,e){this.actionName=t,this.started=!1,this.completed=!1,this.sandbox=e}start(){const{sandbox:t,actionName:e}=this;t&&(this.started?t.logger.warn("Starting already-started RUM action: ".concat(e)):(this.started=!0,Object(o.b)(t,e)))}complete(t){const{sandbox:e,actionName:n}=this;if(this.completed)e.logger.warn("Completing already-completed RUM action: ".concat(n));else if(this.started){this.completed=!0;const r=t||{};r.customMetaData=r.customMetaData||{},r.customMetaData=Object.assign(r.customMetaData,Object(o.d)()),Object(o.a)(e,n,r),Object(o.e)()}}}function a(t,e){const n=new i(t,e);return n.start(),n}}}]);
//# sourceMappingURL=js-plugin-activator~4204912e.js.map