!function(e){var n={};function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(l,o,function(n){return e[n]}.bind(null,o));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=974)}({974:function(e,n,t){e.exports=t(975)},975:function(e,n,t){"use strict";$(document).ready((function(){var e=[];$("[type*='email']").each((function(n){e.push(this.id)})),e.push("email"),e.push("id_email"),function(e){if(null==e)throw"config is null or undefined";if(void 0===e.gotElementId||null===e.gotElementId)throw"config.gotElementId is null or undefined";if(void 0===e.leadApiUrl||null===e.leadApiUrl)throw"config.leadApiUrl is null or undefined";if(void 0===e.country||null===e.country)throw"config.country is null or undefined";if(void 0===e.locale||null===e.locale)throw"config.locale is null or undefined";if(void 0===e.google||null===e.google)throw"config.google is null or undefined";var n=function(){return{gotElementId:e.gotElementId,google:e.google,localStorageKeys:{leadInfo:{EMAIL:"SDC_LEAD_EMAIL",NAME:"SDC_LEAD_NAME",LAST_NAME:"SDC_LEAD_LAST_NAME"}},leadApiUrl:e.leadApiUrl,country:e.country,locale:e.locale,loadLeadEmailInPages:e.loadLeadEmailInPages||!1,pagesWithFields:e.pagesWithFields||[],navElements:{bannerSelector:".site-banner-relative",mobileMenuSelector:".MobileNavbar.inverse",mobileStickyMenuSelector:".MobileNavbar.is-sticky",tabletMenuSelector:".tablet-navbar.v3-navbar",tabletStickyMenuSelector:".tablet-navbar.v3-navbar.sticky",dektopMenuSelector:".desktop-navbar.v3-navbar",dektopStickyMenuSelector:".desktop-navbar.v3-navbar.sticky",stickySelector:".sticky",checkoutMenuSelector:".container-fluid.navbar-minimal"}}},t=function(){return 1===$("#"+n().gotElementId).length},l=function(e){return"unfined"==typeof e||null===e||""===$.trim(e)},o=function(e){var t=n().localStorageKeys.leadInfo.EMAIL;if(null==e)return localStorage.getItem(t);null!==e&&localStorage.setItem(t,e)},i=function(e){var t=n().localStorageKeys.leadInfo.NAME;if(null==e)return localStorage.getItem(t);null!==e&&localStorage.setItem(t,e)},a=function(e){var t=n().localStorageKeys.leadInfo.LAST_NAME;if(null==e)return localStorage.getItem(t);null!==e&&localStorage.setItem(t,e)},r=function(){var e=$("#"+n().gotElementId);l(e.data("client_id"))?console.log("There's no client_id in "+n().gotElementId):(n().google.accounts.id.initialize({client_id:e.data("client_id"),context:e.data("context")||"use",state_cookie_domain:e.data("state_cookie_domain")||"",prompt_parent_id:e.data("prompt_parent_id")||"",cancel_on_tap_outside:!1,callback:c}),$(window).resize(p),$(window).trigger("resize"),$(document).ajaxComplete((function(e,n,t){setTimeout((function(){$(window).trigger("resize")}),1500)})),n().google.accounts.id.prompt((function(e){e.isDisplayed()&&(document.cookie="google_one_tap=true")})))},c=function(e){var n=u(e),t=d(n);f(t).done((function(){o(n.email),i(n.given_name),a(n.family_name),m()})).fail((function(e,n,t){console.error(n),console.error(t),o(""),i(""),a("")}));var l=s(e,n);window.utag&&window.utag.link(l)},u=function(e){var n=JSON.parse(atob(e.credential.split(".")[1]));return{given_name:n.given_name,family_name:n.family_name,email:n.email,picture:n.picture}},s=function(e,n){return{tealium_event:"google_one_tap",customer_email:n.email,one_tap_status:e.select_by}},d=function(e){return{email:e.email,country:n().country.toUpperCase(),locale:n().locale.toLowerCase(),leadForms:{firstName:e.given_name,lastName:e.family_name},campaignSources:{lead_form_type:"google_onetap"}}},f=function(e){var t=jQuery.Deferred();if(null==e)throw"params is null or undefined";if(void 0===e.email||null===e.email)throw"params.email is null or undefined";if(void 0===e.country||null===e.country)throw"params.country is null or undefined";if(void 0===e.locale||null===e.locale)throw"params.locale is null or undefined";if(void 0===e.leadForms.firstName||null===e.leadForms.firstName)throw"params.leadForms.firstName is null or undefined";if(void 0===e.leadForms.lastName||null===e.leadForms.lastName)throw"params.leadForms.lastName is null or undefined";return jQuery.ajax({type:"POST",url:n().leadApiUrl,contentType:"application/json; charset=utf-8",data:JSON.stringify(e),async:!0,cache:!1,success:function(e){t.resolve(e)},error:function(e,n,l){t.reject(e,n,l)}}),t.promise()},m=function(){if(n().loadLeadEmailInPages)if(0!==n().pagesWithFields.length)for(var e=0;e<n().pagesWithFields.length;e++){var t=n().pagesWithFields[e]||{},r=t.url||"";if(!l(r)){var c=t.emailFieldIds||[],u=t.nameFieldIds||[],s=t.lastNameFieldIds||[];g(r,c,o()),g(r,u,i()),g(r,s,a())}}else console.log("config.pagesWithFields should have at least one element.");else console.log("Load lead email in pages is disabled.")},g=function(e,n,t){if(n.length>0||window.location.href.toLowerCase().indexOf(e.toLowerCase())>=0)for(var o=0;o<n.length;o++){var i=n[o]||"";l(i)||0===$("#"+i).length||$("#"+i).val(t)}},p=function(){var e=0,t=1,l=$(n().navElements.bannerSelector),o=$(n().navElements.mobileMenuSelector),i=$(n().navElements.mobileStickyMenuSelector),a=$(n().navElements.tabletMenuSelector).not(n().navElements.stickySelector),r=$(n().navElements.tabletStickyMenuSelector),c=$(n().navElements.dektopMenuSelector).not(n().navElements.stickySelector),u=$(n().navElements.dektopStickyMenuSelector),s=$(n().navElements.checkoutMenuSelector),d=$("#"+n().gotElementId),f=l.length>0&&!l.is(":hidden"),m=o.length>0&&!o.is(":hidden"),g=a.length>0&&!a.is(":hidden"),p=c.length>0&&!c.is(":hidden"),v=s.length>0&&!c.is(":hidden");f&&(e+=l.innerHeight()),m?(e+=a.innerHeight(),t=parseInt(i.css("z-index"))-1):g?(e+=a.innerHeight(),t=parseInt(r.css("z-index"))-1):p&&(e+=c.innerHeight(),t=parseInt(u.css("z-index"))-1),v&&(e+=s.height()),d.css("top",e+"px"),d.css("z-index",t)};return{initialize:function(){t()&&(l(o())&&l(i())&&l(a())?r():m())}}}({gotElementId:"g-one-tap-config",leadApiUrl:$("#got-lead-api-url").val(),country:$("#got-country").val()||"US",locale:$("#got-locale").data("locale")||"en-us",loadLeadEmailInPages:!0,pagesWithFields:[{url:"/",emailFieldIds:e}],google:google}).initialize()}))}});