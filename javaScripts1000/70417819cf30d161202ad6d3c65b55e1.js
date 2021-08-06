function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}define("services/cartHelper",["FR","react","i18n!nls/Checkout","services/freerideRestApi","services/validationUtilities","services/analyticsHelper","components/sharedUI/AddToCartModal","components/rentals/constants"],function(e,t,r,n,o,a,i,c){c.BikeRentalLength;return $(function(){n.getCart({},function(t){!0===t.success&&(window.shoppingCart=t.data,e.$el.window.trigger("win.sc_load").trigger("cart-count-update",[window.shoppingCart.TotalProducts]).trigger("cart-loaded",[window.shoppingCart]))})}),{packageTaxModalData:function(e){var t={lineItems:[],infoItems:[],modalCounter:0};if(o.isSet(e.Price)){var r=e.Price,n=r.IsUSD?"":" ".concat(e.Price.LocationCurrency);o.isSet(r.InclusiveTax)&&r.InclusiveTax.Amount>0&&t.lineItems.push({name:r.InclusiveTax.Name,cost:r.InclusiveTax.AmountFormatted+n}),o.isSet(r.LodgingTaxesAndFees)&&r.LodgingTaxesAndFees.length&&_.each(r.LodgingTaxesAndFees,function(e){o.isSet(e.TaxAndFeeList)&&_.each(e.TaxAndFeeList,function(r){o.isSet(r.Amount)&&r.Amount>0&&t.lineItems.push({name:"".concat(r.Name," - ").concat(e.LocationName),cost:r.AmountFormatted+n})})}),o.isSet(r.IncrementalProductTaxes)&&_.each(r.IncrementalProductTaxes,function(e){o.isSet(e.Amount)&&e.Amount>0&&t.lineItems.push({name:e.ShortTitle,cost:e.AmountFormatted+n})}),o.isSet(r.TaxesAndFeesAdditionalInfo)&&t.infoItems.push({content:r.TaxesAndFeesAdditionalInfo})}return t},refreshCartSummary:function(t){var r=$.Deferred();return t?(window.shoppingCartSummary=t,e.$el.window.trigger("cart-summary-update"),e.$el.window.trigger("cart-count-update",[t.CartCount]),r.resolve(t)):n.getCartSummary({},function(t){!0===t.success?(window.shoppingCartSummary=t.data,e.$el.window.trigger("cart-summary-update"),e.$el.window.trigger("cart-count-update",[t.data.CartCount]),r.resolve(t.data)):r.reject(t)}),r.promise()},refreshWindowShoppingCart:function(){var t=$.Deferred();return n.getCart({},function(r){!0===r.success?(window.shoppingCart=r.data,e.$el.window.trigger("anpl_cartUpdated"),t.resolve(r.data)):t.reject(r)}),t.promise()},removePromoCode:function(e,t){if(!1===n.isApiRequestInProgress()){var r=e.closest(".cart_product").attr("data-cart-product-id"),o=e.closest(".cart_product").attr("data-cart-promo-code");n.removePromoCode(r,o,{},function(e){!0===e.success&&t(e)})}},focusCartError:function(e,t){setTimeout(function(){var r=$(e);r.length>0?r.focus():$(t).focus()},0)},addedToCart:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.responseData,o=r.analyticsData,c=r.openModal,s=void 0!==c&&c,d=r.products,u=void 0===d?[]:d;if(e.$el.window.trigger("trackAnalytics",{component:"c31_Modal_Component",event:"addToCart",data:_objectSpread(_objectSpread({},o),{},{cartId:n.CartId})}),s&&u.length){var l=t.createElement(i,{products:u,cartUrl:n.CartUrl});e.$el.window.trigger("global-modal-open-jsx",l)}else window.setTimeout(function(){window.location.href=n.CartUrl},a.getPageExitDelay)}}});
//# sourceMappingURL=cartHelper.js.map
