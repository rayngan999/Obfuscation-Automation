"use strict";define(["jquery","materialize","apiService","watchlistUtils","returnsCalculatorChart"],function(a,t,e,d,s){function n(t,n){var r=a("#"+t),i=r.data("dofaSchemeCode"),o={index:n};i&&(o.dofa_scheme_code=i),e.getRequest("GETTOPPODUCTBYINDEX",o).done(function(e){r.find(".js-product-wrap").html(e).removeClass("show-loader");var n=r.find(".js-plan-options select").find(":selected").data("productId");r.find('[data-chart-header="'+t+'"]').find(".js-product-id").val(n),a("#js-performance-chart-wrapper-"+t).data("chartLoaded",!0),s.makeTopProductsChart(t),a("select").material_select(),d.checkWatchlistStatus(r)}).fail(function(a){console.error(a)})}function r(t,s){var n=a("#mobile-"+t);if(!n.hasClass("js-product-loaded")){var r=n.data("dofaSchemeCode"),o={index:s};r&&(o.dofa_scheme_code=r),e.getRequest("GETTOPPODUCTBYINDEXMOBILE",o).done(function(e){n.find(".js-product-wrap-mobile").html(e).removeClass("show-loader");var s=n.find(".js-plan-options select").find(":selected").data("productId");a('[data-chart-header="#mobile-'+t+'"]').find(".js-product-id").val(s),a("select").material_select(),i("#mobile-"+t),d.checkWatchlistStatus(n)}).fail(function(a){n.removeClass("js-product-loaded"),console.error(a)}),n.addClass("js-product-loaded")}}function i(t){var d=s.getChartHeaders(t);s.resetPrincipalStatement(t,d);var n=a(t).find("table tbody");e.getRequest("GETSCHEMERETURNSTABLE",d).done(function(t){var e,d,s=(e=t,d="",a.each(e,function(){var a=this;d+="<tr>",d+="<td>"+a[0]+"</td><td>"+a[1]+"</td><td>"+a[2]+"</td><td>"+a[3]+"</td><td>"+a[4]+"</td><td>"+a[5]+"</td>",d+="</tr>"}),d);n.html(s),n.removeClass("show-loader")}).fail(function(a){n.removeClass("show-loader"),console.error(a)})}a(document).ready(function(){var t,d,o,c,l;a(".js-prouct-swich-select-mobile").is(":visible")?(l=a(".js-prouct-swich-select-mobile select"),e.getRequest("GETTOPPROUDCTNAMES").done(function(a){for(var t="",e=1;e<=a.length;e++)t+='<option value="'+e+'" data-target="#mobile-fund-'+e+'">'+a[e-1].scheme_name+"</option>";l.html(t)}).fail(function(a){console.error(a)}).always(function(){l.on("change",function(){var t=a(this),e=t.data("targetSelector"),d=t.find(":selected").data("target");r("fund-"+t.val(),t.val()),a(e).removeClass("active"),a(d).addClass("active")}).material_select()}),t=".js-fund-details-container",d=".js-unflip",o=".js-flip",a(c=".js-product-wrap-mobile").on("click",d,function(){var e=a(this),s=e.parents(t);s.removeClass("flip"),s.find(d).attr("disabled",!0),s.find(o).attr("disabled",!1)}),a(c).on("click",o,function(){var e=a(this),s=e.parents(t);s.addClass("flip"),s.find(o).attr("disabled",!0),s.find(d).attr("disabled",!1)}),r("fund-1",1),a(".js-fund-details-container").on("change",".js-plan-options select",function(){var t=a(this),e=t.parents(".js-fund-details-container"),d=a(this).find(":selected").data("target");a(e).find(".js-stat.active").removeClass("active"),a(e).find(".js-stat"+d).addClass("active")}),a(".js-fund-details-container").on("click",".js-table-apply",function(){var t=a(this),e=t.data("chartId");s.validateFeild('[data-chart-header="'+e+'"] .js-option-amt .js-amt-feild',s.isCentMultiple)&&(a(e).find("table tbody").addClass("show-loader"),i(e))})):a(window).one("scroll",function(){a(".verticalTabsColumn").on("click",".tab-card",function(){var t=a(this);a(".verticalTabWrapper.active").removeClass("active"),t.parent(".verticalTabWrapper").addClass("active");var e=t.data("target");a(".fund-content-wrapper .fund-content-pane.active").removeClass("active"),a(".fund-content-wrapper").find("#"+e).addClass("active");var d=a("#js-performance-chart-wrapper-"+e);d.data("chartLoaded")||(n(e,e[e.length-1]),d.data("chartLoaded",!0))}),a(".js-fund-content-wrapper").on("change",".js-plan-options select",function(){var t=a(this),e=t.data("parent"),d=t.find(":selected").data("target"),n=t.find(":selected").data("productId");a('[data-chart-header="'+e+'"]').find(".js-product-id").val(n),s.makeTopProductsChart(e),a("#"+e).find(".js-stat.active").removeClass("active"),a("#"+e).find(".js-stat"+d).addClass("active")}),s.makeReturnsCalculator(),n("fund-1",1)})})});