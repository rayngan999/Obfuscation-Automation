define("components/tabbedBookingWidgetGenericDropdown",["FR","jquery","underscore"],function(n,o,e){var i={},t=function(){i.bookingWidgetGenericDropdown=o(".tabbed_booking_widget_generic_dropdown"),i.submitButton=i.bookingWidgetGenericDropdown.find(".tabbed_booking_widget_generic_dropdown__submit_button"),i.submitButton.on("click",function(){var n=o(this).parents(".tabbed_booking_widget_generic_dropdown").find(".tabbed_booking_widget_generic_dropdown__option select");window.location=n.val()})};o(function(){return t()})});
//# sourceMappingURL=tabbedBookingWidgetGenericDropdown.js.map
