var sowb=window.sowb||{};jQuery((function(t){sowb.setupTabs=function(){t(".sow-tabs").each((function(e,a){var i=t(a),o=i.closest(".so-widget-sow-tabs");if(o.data("initialized"))return t(this);var s,n=o.data("useAnchorTags"),r=i.find("> .sow-tabs-panel-container"),d=i.find("> .sow-tabs-tab-container > .sow-tabs-tab"),c=i.find(".sow-tabs-tab-selected").index(),w=r.find("> .sow-tabs-panel");w.not(":eq("+c+")").hide();var l=function(e){var a=o.offset().top-90;e?t("body,html").animate({scrollTop:a},200):window.scrollTo(0,a)},b=function(t){return sowTabs.scrollto_after_change&&(t.offset().top<window.scrollY||t.offset().top+t.height()>window.scrollY)},f=function(e,a){var i=t(e);if(i.is(".sow-tabs-tab-selected"))return b(i)&&l(!0),!0;var o=i.index();if(o>-1){s&&s.finish();var r=d.filter(".sow-tabs-tab-selected");r.removeClass("sow-tabs-tab-selected");var c=r.index(),f=w.eq(c).children(),h=w.eq(o).children();r.attr("tabindex",-1),r.attr("aria-selected",!1),f.attr("tabindex",-1),i.attr("tabindex",0),i.attr("aria-selected",!0),h.attr("tabindex",0),f.attr("aria-hidden","true"),s=w.eq(c).fadeOut("fast",(function(){t(this).trigger("hide"),h.removeAttr("aria-hidden"),w.eq(o).fadeIn({duration:"fast",start:function(){t(window).trigger("resize"),t(sowb).trigger("setup_widgets")},complete:function(){t(this).trigger("show"),(a||b(i))&&l(!0)}})})),i.addClass("sow-tabs-tab-selected"),n&&!a&&(window.location.hash=i.data("anchor"))}};if(d.on("click",(function(){f(this)})),d.on("keyup",(function(e){var a,i=t(this);37!==e.keyCode&&39!==e.keyCode||(37===e.keyCode&&(a=i.prev().get(0)?i.prev():i.siblings().last()),39===e.keyCode&&(a=i.next().get(0)?i.next():i.siblings().first()),i!==a&&(a.trigger("focus"),f(a.get(0))))})),n){var h=function(){window.location.hash&&window.location.hash.substring(1).split(",").forEach((function(e){var a=d.filter((function(a,i){return decodeURI(e)===decodeURI(t(i).data("anchor"))}));a.length>0&&f(a,!0)}))};t(window).on("hashchange",h),window.location.hash&&h()}o.data("initialized",!0)}))},sowb.setupTabs(),t(sowb).on("setup_widgets",sowb.setupTabs)})),window.sowb=sowb;