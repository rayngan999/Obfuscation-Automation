(window.syteappJsonp=window.syteappJsonp||[]).push([[409],{790:function(e,t,s){"use strict";var o,a=s(0),r=a(s(27)),n=s(3),i=s(137),u=s(214),l=a(s(4)),c=r.default.getState().featuresConfig.historyRouter.openModalOnPageLoad,h=void 0===c||c,p="syte-has-history",d=function(){try{return JSON.parse(sessionStorage.getItem(p))}catch(e){return null}}(),y=!1,g={bbsModuleRef:"bbsModuleRef",imageUrl:"imageUrl",bbSKU:"syteBBSKU",sytePage:"sytePage"},f="tourPage",S="resultsPage";function m(){if(!d){var e=(t=new URL(location.href),Object.values(g).forEach((function(e){return t.searchParams.delete(e)})),t);return history.replaceState(history.state,null,e)}var t,s=r.default.getState().ui.tourOpen;!h&&s&&window.SyteApp.closeTour(n.closeModalActions.historyRouter),history.back()}function w(e,t){var s=t.data;if(s.hasOwnProperty("tourOpen")||s.hasOwnProperty("resultsScreenOpen")){var a,n,i,u,l,c,w=new URLSearchParams(location.search).get(g.sytePage);o=new URL(location.href),!0===s.tourOpen&&w!==f?(o.searchParams.set(g.sytePage,f),history.pushState(history.state,null,o.href),y=!1,d=!0):!1===s.tourOpen&&w===f?(d?history.back():(o.searchParams.delete(g.sytePage),history.replaceState(history.state,null,o.href)),d=!0):!0===s.resultsScreenOpen&&w!==S?(i=(n=(a=r.default.getState()).boundingBox).imageUrl,u=n.moduleRef,l=n.imageContext,c=a.ui.tourOpen,o.searchParams.set(g.sytePage,S),o.searchParams.set(g.imageUrl,encodeURIComponent(i)),o.searchParams.set(g.bbsModuleRef,u),l&&l.sku&&o.searchParams.set(g.bbSKU,l.sku),c&&!h?(history.replaceState(history.state,null,o.href),y=!0):history.pushState(history.state,null,o.href),d=!0):!1===s.resultsScreenOpen&&w===S&&(m(),d=!0),d&&sessionStorage.setItem(p,JSON.stringify(d))}}function P(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new URLSearchParams(location.search),s=t.get(g.sytePage),o=r.default.getState().ui,a=o.tourOpen,i=o.resultsScreenOpen,u=!a&&s===f,l=a&&s!==f,c=!i&&s===S,p=i&&s!==S;if(e&&d&&!h&&(u||c))return history.back();if(u)window.SyteApp.cameraClick(),y=!1;else if(l){var m=y?n.closeModalActions.historyRouter:n.closeModalActions.backButton;window.SyteApp.closeTour(m)}c?function(e){var t=decodeURIComponent(e.get(g.imageUrl)),s=e.get(g.bbsModuleRef),o=e.get(g.bbSKU),a=o&&{sku:o};window.SyteApp.openAppForImage(t,{module:s,imageContext:a})}(t):p&&window.SyteApp.closeReultsScreen(void 0,void 0,n.closeModalActions.backButton)}window.addEventListener(n.SYTEAPP_IS_READY,(function(){l.default.log("Initialise syte History Router"),(0,u.registerPosthook)(i.UI_CHANGE,w),P(!0),window.addEventListener("popstate",(function(e){d=!0,sessionStorage.setItem(p,JSON.stringify(d)),P()}))}))}}]);