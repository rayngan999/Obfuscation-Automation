/*! SPORT */
!function(){zUtils=window.zUtils||{},zUtils.advertising=function(){var a=[],b=!1,c=null,d=function(b){var c=null;return a.forEach(function(a){if(a.ele[0]===b[0])return void(c=a)}),c},e=function(c){b&&$("[data-adslot-id], [data-adslot-path]").each(function(){var b=$(this);if(!d(b)){var e=b.data("adslot-id")?b.data("adslot-id"):null;!function(){var d,f,g=null,h="advertisingSlots";void 0!==b.data("adslot-var")&&(h=b.data("adslot-var")),e&&"undefined"!=typeof window[h]&&window[h][e]&&(g=window[h][e]),d=g&&g.path?g.path:b.data("adslot-path")?b.data("adslot-path"):null,f=g&&g.slot&&c?g.slot:null,d&&a.push({type:"google",path:d,ele:b,id:b.attr("id")&&c?b.attr("id"):cuid(),name:e,sizes:g&&g.size?g.size:b.data("adslot-sizes")?b.data("adslot-sizes"):null,slot:f,bodyClass:b.data("adslot-bodyclass")?b.data("adslot-bodyclass"):null,visible:!!f,targetingKey:g&&g.targetingKey?g.targetingKey:b.data("adslot-targetingkey")?b.data("adslot-targetingkey"):null,targetingValue:g&&g.targetingValue?g.targetingValue:b.data("adslot-targetingvalue")?b.data("adslot-targetingvalue"):null,externallyLoaded:!!f,noPrebid:void 0!==b.data("adslot-noprebid")})}()}})},f=function(a){a.slot||"google"===a.type&&(a.slot=googletag.defineSlot(a.path,a.sizes,a.id).addService(googletag.pubads()).setTargeting(a.targetingKey,[a.targetingValue]))},g=function(a){var b=null,c=null,d="";return void 0!==a.data("adslot-visible-xs")&&(b=0,c=767),void 0!==a.data("adslot-visible-sm")&&(b=null===b?768:b,c=991),void 0!==a.data("adslot-visible-md")&&(b=null===b?992:b,c=1199),void 0!==a.data("adslot-visible-lg")&&(b=null===b?1200:b,c=null),b&&(d="(min-width: "+b+"px)"),c&&(""!==d&&(d+=" and "),d+="(max-width: "+c+"px)"),d},h=function(a){return!(navigator.userAgent.indexOf("AdobeAIR")<0)||"undefined"!=typeof ZetaADSpos&&"undefined"!=typeof ZetaADSpos[a]},i=function(c){var d=[];b&&(a.forEach(function(a){var b=g(a.ele);if(b&&!window.matchMedia(b).matches||h(a.name)||!a.ele.is(":visible")){if(!a.visible)return;a.ele.empty(),a.ele.removeAttr("id"),a.visible=!1}}),a.forEach(function(a){var b=g(a.ele);if((!b||window.matchMedia(b).matches)&&!h(a.name)&&a.ele.is(":visible")){if(a.visible)return;googletag.cmd.push(function(){f(a)}),a.slot&&!function(){"undefined"!=typeof pbjs&&c&&!a.noPrebid||d.push(a.slot)}(),a.ele.attr("id",a.id),googletag.cmd.push(function(){googletag.display(a.id)}),a.visible=!0}}),d.length&&googletag.cmd.push(function(){Didomi.getObservableOnUserConsentStatusForVendor("google").first().filter(function(a){return void 0!==a}).subscribe(function(a){a===!0&&googletag.pubads().refresh(d)})}))},j=function(){b&&a.forEach(function(a){if(void 0!==a.ele.data("adslot-responsive")){var b=$("iframe",a.ele).first(),c=parseFloat((a.ele.width()/b.width()).toFixed(2));c>1&&(c=1),1===c?(a.ele.css("transform-origin",""),a.ele.css("transform","")):(a.ele.css("transform-origin","0 0"),a.ele.css("transform","scale("+c.toString()+")"))}})};return window.advertisingShowBypass=function(){},{init:function(){var d=!0;"undefined"!=typeof googletag&&(googletag.cmd.push(function(){b=!0,e(d),googletag.pubads().addEventListener("slotRenderEnded",function(b){a.forEach(function(a){!a.externallyLoaded&&a.bodyClass&&a.slot&&b.slot===a.slot&&!b.isEmpty&&$("body").addClass(a.bodyClass)}),j(),zUtils.followingAds&&zUtils.followingAds.refresh(),zUtils.stickyTop&&zUtils.stickyTop.refreshHeight()}),i(d)}),$(window).resize(function(){i(!1),j()}),c=setInterval(function(){j()},500))},reload:function(){var a=!1;e(a),i(a),j()},pageLoaded:function(){clearInterval(c)}}}()}();