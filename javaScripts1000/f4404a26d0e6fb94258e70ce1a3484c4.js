define("components/rentalsTabbedBookingWidget/TabbedBookingForm",["FR","react","services/urlHelper","components/sharedUI/datePickerReact","services/validationUtilities","i18n!nls/Rentals","components/rentalsTabbedBookingWidget/store/context","components/rentalsTabbedBookingWidget/store/actions","components/rentals/constants","components/sharedReact/TooltipModalDeprecated","components/rentals/rentalsHelper","components/rentals/search/FulfilmentOptions","components/rentals/search/DeliveryTime","components/rentals/search/SummerRentalDuration","components/rentals/search/PickupAfterThree"],function(e,t,n,r,a,i,o,l,s,c,p,d,m,u,D){var y=t.useContext,f=l.types,E=s.RentalSeason,T=s.BookingType,g=s.BikeRentalLength,k=s.deliverySameDayCutoffTime,v=function(e,t){var r=t.Url,a={};return a.startdate=e.pickupDate,a.enddate=e.returnDate,e.rentalSeason===E.WINTER?e.bookingType===T.PICKUP?a.after3=e.pickupAfter3.toString():(a.delivery="true",a.time=e.deliveryTime):a.daytype=e.bikeRentalLength,n.buildUrl(r,a)};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=n.keyProp,s=n.componentId,b=y(o.Context),S=b.state,P=b.viewModels,R=b.actions,M=function(e,t){return R.dispatchAction(e,t,s)},C=S[s],I=C.bookingType,h=C.currentCalendarDatesGroup,Y=C.deliveryTime,O=C.pickupAfter3,U=C.pickupDate,L=C.pickupErrorMessage,A=C.returnDate,F=C.returnErrorMessage,B=P[s],x=B.ActionLink,N=B.DeliveryTimeDisclaimer,w=B.DeliveryTimeTooltip,K=B.DeliveryTooltip,q=B.IsPickUpOnly,H=B.IsSeasonOpen,V=B.PickUpAfter3,W=B.PickUpAfter3Disclaimer,G=B.PickUpOnlyCopy,j=B.PickUpOnlyTitle,$=B.ReturnOnTooltip,z=B.Season,J=B.DeliveryTimes,Q=B.DayOptionToolTip,X=B.DayOptionFullTitle,Z=B.DayOptionMorningTitle,ee=B.DayOptionAfternoonTitle,te=B.OfferMorningPartialDayRental,ne=B.OfferAfternoonPartialDayRental,re=B.FullDayRentalCopy,ae=B.FullDayRentalTitle,ie=B.HasDeliveryDates,oe=B.HasPickupDates,le=z===E.SUMMER,se=I===T.DELIVERY,ce=se&&!ie||!se&&!oe||le&&C.bikeRentalLength!==g.FULL_DAY,pe=function(){var e={state:C,rentFilterContextDetails:{isDelivery:se,rentFulfillmentType:se?"Delivery":"Pick Up"},isSummer:le,analyticsComponent:"c109_Brochure_Booking_Widget",event:"click"};p.trackRentalData(e)},de=function(){if(I===T.PICKUP)return O?moment(U).add(1,"days").format("MM/DD/YYYY"):U;var e=moment(Y,"LT"),t=moment(k,"LT");return e.isSame(t)||e.isAfter(t)?moment(U).add(1,"days").format("MM/DD/YYYY"):U};return t.createElement("div",{className:"rentals_tabbed_booking_widget__date_selector"},t.createElement(d,{isPickUpOnly:q,pickUpOnlyCopy:G,pickUpOnlyTitle:j,deliveryTooltip:K,componentIndex:l,selectedBookingType:I,selectBookingType:function(e){return M(f.SET_BOOKING_TYPE,e)},isSummer:le,headingClass:"inputfieldlabel"}),t.createElement("div",{className:"rentals_filters__form_grid"},t.createElement("div",{className:"rentals_filters__form_grid_input rentals_filters__form_grid_input--pickup"},t.createElement(r,{key:"".concat(h.StartDate,"-").concat(h.EndDate),label:se?i.EquipmentSelector_DeliveryDatePickerLabel:i.EquipmentSelector_PickupDatePickerLabel,dateChanged:function(e){var t=e.dateFormatted;M(f.SET_PICKUP_DATE,t)},date:U,disabledDates:h.BlackoutDates,minDate:h.StartDate,maxDate:h.EndDate,errorMessage:L,inputId:"pickupDatePicker_".concat(l),isDisabled:!H,subLabelDateFormat:"ddd, MMM D, YYYY"})),t.createElement("div",{className:"rentals_filters__form_grid_input rentals_filters__form_grid_input--return"},t.createElement(r,{key:"".concat(de(),"-").concat(h.EndDate),label:i.EquipmentSelector_ReturnDatePickerLabel,dateChanged:function(e){var t=e.date,n=e.dateFormatted;M(f.SET_RETURN_DATE,t?n:null)},date:A,showTooltip:!0,tooltipMethod:function(){return n=$,r=t.createElement(c,{modalBody:n}),void e.$el.window.trigger("global-modal-open-jsx",[r]);var n,r},minDate:de(),maxDate:h.EndDate,errorMessage:F,isDisabled:ce||!H,inputId:"returnDatePicker_".concat(l),defaultViewDate:A||U,subLabelDateFormat:"ddd, MMM D, YYYY"})),t.createElement("div",{className:"rentals_filters__form_grid_input rentals_filters__form_grid_input--secondary-filters"},C.bookingType===T.DELIVERY&&t.createElement(m,{deliveryTimes:J,onChange:function(e){return M(f.SET_DELIVERY_TIME,e)},tooltip:w,disclaimer:N,value:C.deliveryTime,errorMessage:C.deliveryTimeErrorMessage,componentIndex:l}),C.bookingType===T.PICKUP&&t.createElement(t.Fragment,null,le?t.createElement(u,{onChange:function(e){M(f.SET_BIKE_RENTAL_LENGTH,e)},value:C.bikeRentalLength,componentIndex:l,tooltip:Q,fullDayOnlyCopy:re,fullDayOnlyTitle:ae,dayOptions:{full:X,morning:te&&Z,afternoon:ne&&ee}}):t.createElement(D,{pickupDate:C.pickupDate,isSelected:C.pickupAfter3,endDate:h.EndDate,label:V,disclaimer:W,componentIndex:l,setSelected:function(e){M(f.SET_PICKUP_AFTER_3,e)}}))),t.createElement("div",{className:"rentals_filters__form_grid_input rentals_filters__form_grid_input--cta"},t.createElement("button",{className:"primaryCTA primaryCTA--full",onClick:function(){return e={pickupErrorMessage:!a.isSet(U)&&i.EquipmentSelector_PickupDateError,returnErrorMessage:!a.isSet(A)&&i.EquipmentSelector_ReturnDateError,deliveryTimeErrorMessage:!a.isSet(Y)&&I===T.DELIVERY&&i.EquipmentSelector_DeliveryTimeError},t=_.omit(e,function(e){return!1===e}),void(_.keys(t).length?M(f.SET_ERROR_MESSAGES,e):(pe(),window.open(v(C,x),x.Target||"_self")));var e,t}},x.Text))))}});
//# sourceMappingURL=TabbedBookingForm.js.map