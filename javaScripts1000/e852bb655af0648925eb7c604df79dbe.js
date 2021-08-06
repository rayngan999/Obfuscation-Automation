define("components/tabbedBookingWidgetLodging",["FR","jquery","moment","services/responsiveUtil","components/bookingWidgetHelper"],function(e,t,i,n,d){var a,r={},o="input-validation-error",g=function(e){return e.find(".tabbed_booking_widget_lodging__date_picker__check_in").find(".datePicker .date").data("DateTimePicker")},c=function(e){return e.find(".tabbed_booking_widget_lodging__date_picker__check_out").find(".datePicker .date").data("DateTimePicker")},l=function(e){return e.find(".tabbed_booking_widget_lodging__number_adults").find("input").val()},u=function(e){return e.find(".tabbed_booking_widget_lodging__number_children").find("input").val()},b=function(e){return _.map(e.find(".tabbed_booking_widget_lodging__child_ages_single input"),function(e){return""===e.value?0:e.value})},s=function(){r.checkInDateError.html(r.checkInDateError.data("error-invalid")),r.checkInDateError.show(),r.checkInDateError.addClass("field-validation-error"),r.checkInDateInput.addClass(o)},k=function(e){r.checkOutDateError.html(r.checkOutDateError.data(e)),r.checkOutDateError.show(),r.checkOutDateError.addClass("field-validation-error"),r.checkOutDateInput.addClass(o)},p=function(e){return e.parents(".tabbed_booking_widget_lodging")},f=function(e){var t=parseInt(u(e),10),i=b(e);return i.length<t?_.times(Math.abs(i.length-t),function(){i.push(0)}):_.times(i.length-t,function(){i.pop()}),i},h=function(t){t=_.map(t,function(e){return 0===e?"":e}),r.agesTemplate.html(a({ages:t})),e.$el.window.trigger("ApplicationDOM_Changed")},m=function(e){var t=parseInt(l(e),10),i=parseInt(u(e),10),n=t+i,d=e.find(".tabbed_booking_widget_lodging__number_adults").find(".numberInputSpinner__buttons__plus"),a=e.find(".tabbed_booking_widget_lodging__number_children").find(".numberInputSpinner__buttons__plus");n>=19?(d.prop("disabled",!0),a.prop("disabled",!0)):i>=6?(d.prop("disabled",!1),a.prop("disabled",!0)):(d.prop("disabled",!1),a.prop("disabled",!1))},v=function(){r.datePickers.on("dp.change dp.error",function(e){var i=t(e.currentTarget),n=p(i);!function(e){var t=g(e),i=c(e),n=t.date().add(1,"days");i.minDate(n),t.date()>=i.date()&&i.date(n)}(n),r.checkInDateError.hide(),r.checkInDateError.removeClass("field-validation-error"),r.checkInDateInput.removeClass(o),r.checkOutDateError.hide(),r.checkOutDateError.removeClass("field-validation-error"),r.checkOutDateInput.removeClass(o),function(e){var t=g(e).date(),i=c(e).date();!_.isEmpty(t)&&t.isValid()&&i.isValid()&&i.diff(t,"days",!0)>28&&k("error-date-range-too-great")}(n)}),r.submitButton.on("click",function(e){e.preventDefault();var i,n,a,f,h=t(e.currentTarget),m=function(e){var t=g(e).date(),i=c(e).date(),n=l(e),d=u(e),a=b(e);return{arrivaldate:_.isEmpty(t)?null:t,departuredate:_.isEmpty(i)?null:i,childagearray:_.isEmpty(a)?null:a.join(","),adultcount:_.isEmpty(n)?null:n,childcount:_.isEmpty(d)?null:d}}(p(h));if(i=m.arrivaldate,n=m.departuredate,!_.isEmpty(i)&&i.isValid()||s(),!_.isEmpty(n)&&n.isValid()||k("error-invalid"),a=m.arrivaldate,f=m.departuredate,!r.checkInDateInput.hasClass(o)&&!r.checkOutDateInput.hasClass(o)&&a.isValid()&&f.isValid())m.arrivaldate=m.arrivaldate.format("MM/DD/YYYY"),m.departuredate=m.departuredate.format("MM/DD/YYYY"),d.goToNewPageWithParamsFromButtonEvent(h,m);else{var v=t(this).parents(".tabbed_booking_widget_lodging");d.errorMsgShown(v)}d.setStartDateInSession(m.arrivaldate)}),r.numberOfChildrenSelector.on("change",function(e){var i=t(e.currentTarget),n=p(i);m(n);var d=f(n);h(d)}),r.numberOfAdultsSelector.on("change",function(e){var i=t(e.currentTarget),n=p(i);m(n)})},D=function(){if(r.bookingWidgetLodging=t(".tabbed_booking_widget_lodging"),r.datePickers=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__date_picker"),r.checkInDate=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__date_picker__check_in"),r.checkInDateInput=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__date_picker__check_in input"),r.checkInDateError=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__error--invalidCheckInDate"),r.checkOutDate=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__date_picker__check_out"),r.checkOutDateInput=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__date_picker__check_out input"),r.checkOutDateError=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__error--invalidCheckOutDate"),r.submitButton=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__submit_button"),r.numberOfAdultsSelector=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__number_adults input"),r.numberOfChildrenSelector=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__number_children input"),r.agesTemplate=r.bookingWidgetLodging.find(".tabbed_booking_widget_lodging__child_ages"),_.delay(v,250),t(".child_ages_template").length){a=_.template(t(".child_ages_template").first().html());var e=t(".tabbed_booking_widget_lodging").first(),i=f(e);h(i)}};t(function(){return e.onDatePickersReady(D)})});
//# sourceMappingURL=tabbedBookingWidgetLodging.js.map