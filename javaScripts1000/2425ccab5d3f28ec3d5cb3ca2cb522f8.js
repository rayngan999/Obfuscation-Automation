define("components/rentalsTabbedBookingWidget/main",["react","react-dom","components/rentalsTabbedBookingWidget/TabbedBookingForm","components/rentalsTabbedBookingWidget/store/context"],function(e,n,t,o){var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.createElement(o.Provider,null,e.createElement(t,n))};$(function(){$(".rentals-tabbed-booking-widget").each(function(t,o){var r=$(o).data("id");n.render(e.createElement(a,{keyProp:"key_".concat(t),componentId:r}),o)})})});
//# sourceMappingURL=main.js.map