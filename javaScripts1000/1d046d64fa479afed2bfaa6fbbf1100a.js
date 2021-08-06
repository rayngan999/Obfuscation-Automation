function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}define("services/freerideRestApi",["jquery"],function(t){var e=!1,n="/api/AccountApi/CreateAccountWidget",i="/api/AccountApi/CancelPassReservation",o="/api/AccountApi/CreateAccountWithoutCardNumber",a="/api/AccountApi/CreateAccountWithCardNumber",r="/api/AccountApi/FindMyCardForCreateAccount",u="/api/AccountApi/UpdatePassword",c="/api/AccountApi/UpdatePhoneNumber",s="/api/AccountApi/UpdateAddress",p="/api/AccountApi/UpdateBirthDate",l="/api/AccountApi/UpdateEmailAddress",A="/api/AccountApi/UpdateCreditCardOnFile",d="/api/AccountApi/EnrollInAutoRenew",f="/api/AccountApi/UnenrollAutoRenew",P="/api/AccountApi/UpdateUsername",T="/api/AccountApi/SendResetPasswordRequestEmailForUser",S="/api/AccountApi/ForgotPasswordReset",C="/api/AccountApi/GetSubscriberProfile",g="/api/AccountApi/CreateSubscriberProfile",O="/api/AccountApi/UpdateSubscriberProfile",m="/api/AccountApi/UpdateEmailPreferences",v="/api/AccountApi/UpdateEmailAddressForSubscriber",G="/api/AccountApi/SignReleaseOfLiability",R="/api/AccountApi/CreateMilitaryVerification",h="/api/AccountApi/EmailOptInOptOut",y="/api/SnowReportApi/RegisterUserForSms",b="/Api/AccountContentApi/GetEpicCoverageContent",L="/Api/AccountApi/GetAccountEpicCoverageInfo",E="/Api/AccountContentApi/GetAutoRenewContent",M="/Api/AccountApi/GetAutoRenewStatus",F="/Api/AccountApi/GetReservations",U="/Api/AccountContentApi/GetReservationsContent",I="/Api/AccountContentApi/GetSeasonPassTabContent",k="/api/AccountApi/RentalProfile",D="/api/AccountApi/CreateRentalProfile",H="/api/AccountApi/UpdateRentalProfile",N="/api/AccountApi/SaveVisitationProfile",w="/Api/AccountApi/AccountSeasonPassBenefit",q="/Api/AccountApi/GetAccountSeasonPassInfo",W="/api/AccountApi/CancelOrder",V="/api/AccountApi/GetAccountPassHolderCredits",J="/api/AccountApi/GetMyAccountProfile",x="/api/ActivityApi/GetActivities",B="/api/ActivityApi/GetMultiDayNonConsecutiveActivities",j="/api/ActivityApi/LocationMap",_="/api/CartApi/AddActivitiesToCart",z="/api/CartApi/AddChildcareToCart",K="/api/CartApi/AddPassesToCart",Q="/api/CartApi/AddToCart",X="/api/CartApi/ExtendSession",Y="/api/CartApi/GetCart",Z="/api/CartApi/GetCartSummary",$="/api/CartApi/RemoveFromCart/",tt="/api/CartApi/ToggleNff/",et="/api/CartApi/ToggleRentalDamageWaiver",nt="/api/CartApi/SetPassInsurance",it="/api/CheckoutApi/UpdateOrderAddress",ot="/api/CartApi/UpdateTravelInsuranceInCart",at="/api/CartApi/AddPrimaryTraveler",rt="/api/CartApi/AssignProductToPerson",ut="/api/CartApi/UnassignProductFromPerson?cartProductId=",ct="/api/CartApi/UpdateResortCharge",st="/api/CartApi/AddLessonToCart",pt="/api/CartApi/ConfigureActivities",lt="/api/CartApi/ConfigureChildcare",At="/api/CartApi/ConfigureChildGroupLesson",dt="/api/CartApi/ConfigureGroupLesson",ft="/api/CartApi/ConfigureLiftTickets",Pt="/api/CartApi/ConfigurePrivateLesson",Tt="/api/CartApi/ConfigureSeasonPass",St="/api/CartApi/ConfigureRental",Ct="/api/CartApi/ConfigureGroupRental",gt="/api/CartApi/AddLodgingRequirements",Ot="/api/CartApi/SetAutoRenew",mt="/api/CartApi/ConfigureSeasonPassBenefitTickets",vt="/api/CartApi/VerifyMilitaryPass",Gt="/api/CartApi/AddRentalsToCart",Rt="/api/CheckoutApi/ProductConfigurationComplete",ht="/api/CheckoutApi/CompleteTransaction",yt="/api/CheckoutApi/ReviewOrder",bt="/api/CheckoutApi/AddPromoCode?promoCode=",Lt="/api/CheckoutApi/RemovePromoCode?promoCode=",Et="/api/ChildcareApi/GetUnavailableDatesOneMonth",Mt="/api/ChildcareApi/GetUnavailableDatesTwoMonth",Ft="/api/ChildCareApi/GetProduct",Ut="/api/ChildCareApi/GetProducts",It="/api/AccountApi/ExistingAccountLogin",kt="/api/SearchApi/GetGoogleCustomSearchResults",Dt="/api/LessonsApi/GetLessons",Ht="/api/LessonsApi/GetLessonDetailsOnly",Nt="/api/LessonsApi/LocationMap",wt="/api/LessonsApi/PrivateLessonParticipantForm",qt="/api/LiftAccessApi/GetBikeParkLiftTickets/",Wt="/api/LiftAccessApi/GetCapacityControlReservationInventory",Vt="/api/LiftAccessApi/GetLiftTicketControlReservationInventory",Jt="/api/LiftAccessApi/GetOverAllCapacityPassReservationInventory",xt="/api/LiftAccessApi/GetPassReservationInventoryUnavailableDates",Bt="/api/LiftAccessApi/GetPassHoldersForReservation",jt="/api/LiftAccessApi/GetPassReservationCalendarStartAndEndDate",_t="/api/LiftAccessApi/PassReservationValidateScan",zt="/api/LiftAccessApi/SubmitPassReservation",Kt="/api/LiftAccessApi/GetPasses",Qt="/api/LiftAccessApi/GetLiftTickets/",Xt="/api/LiftAccessApi/GetPassCategoryDetail?categoryAttributeValue=",Yt="/api/LiftAccessApi/GetLiftTicketPassUpsellCategoryDetail",Zt="/api/LiftAccessApi/ValidatePass",$t="/api/LiftAccessApi/ValidateActivationCode?",te="/api/LiftAccessApi/ValidateEdgeCardLocation?postalCode=",ee="/api/LodgingApi/GetPropertyDetailsForAllLodging",ne="/api/LodgingApi/GetLodgingDetails",ie="/api/LodgingApi/GetPackages",oe="/api/LodgingApi/GetComponentDetails",ae="/api/CartApi/AddLodgingToCart",re="/api/AccountApi/LogOut",ue="/api/AccountApi/UploadPhoto",ce="/api/AccountApi/DisableSitewideAlertForUserSession",se="/api/AccountApi/DisableMyAccountAlertForUserSession",pe="/api/AccountApi/UpdatePendingChildAccount",le="/api/MountainApi/GetEvents",Ae="/api/MountainApi/CreateContactAndSendMessage",de="/api/MountainApi/SubmitCancellationRequestForm",fe="/api/MountainApi/SubmitOnlineExceptionsRequestForm",Pe="/api/MountainApi/OnlineExceptionsPassNumberValidation",Te="/api/productApi/SubmitGuestRefundRequestForm",Se="/api/GroupSalesApi/CreateSalesForceGroupLead",Ce="/api/PageApi/GetWeatherDataForHeader",ge="/Mountain/GetWeatherReportPartial",Oe="/api/TransactionApi/GetTransactionHistory",me="/api/AdminApi/PostSkiLessonChangeRequest",ve="/api/AdobeTargetApi/SendEventNotifications",Ge="/api/MobileWalletApi/AddToWallet",Re="/api/RentalsApi/SearchRentalLocations",he="/api/RentalsApi/RentalLocationsPricingStats",ye="/api/RentalsApi/SearchRentalProducts",be="/api/LiftAccessApi/AcceptPassTermsAndConditions",Le="/api/HouseholdManagementApi/AddExistingCustomerToHousehold",Ee="/api/HouseholdManagementApi/CreateAndAddHouseholdMember",Me="/api/HouseholdManagementApi/AddHouseholdMemberSearch",Fe="/api/HouseholdManagementApi/RemoveHouseholdMember",Ue="/api/HouseholdManagementApi/DeclineHouseholdMemberTransfer",Ie="/api/HouseholdManagementApi/AcceptHouseholdMemberTransfer",ke="/api/HouseholdManagementApi/RequestHouseholdMemberTransferEmail",De="/api/HouseholdManagementApi/SearchForPass",He="/api/ForgotUsernameApi/ForgotUsernameSearch";function Ne(n,i,o,a,r,u){o&&"object"===_typeof(o)&&(o.__RequestVerificationToken=t("#csrfToken").val());var c={url:n,type:a,data:i,cache:u,dataType:"json",headers:o||{}};"get"!=a.toLowerCase()&&(c.contentType="application/json; charset=utf-8");var s={success:!1,status:200,data:null};e=!0;var p=t.Deferred();return t.ajax(c).done(function(t,e,n){s.success=!0,s.data=t,p.resolve(s)}).fail(function(t,e,n){s.status=t.status||500,s.data=t.responseText||"unknown error",p.reject(s)}).always(function(t,n,i){e=!1,"function"==typeof r&&r(s)}),p.promise()}var we={performRequest:Ne,getErrorMessageFromResponse:function(e){if(e&&e.data){var n=t.parseJSON(e.data);return n.Message||n.Content||n}},getSubscriberProfile:function(t,e,n){Ne(C,t,e,"POST",n,!1)},createSubscriberProfile:function(t,e,n){Ne(g,t,e,"POST",n,!1)},updateSubscriberProfile:function(t,e,n){Ne(O,t,e,"POST",n,!1)},updateEmailPreferences:function(t,e,n){Ne(m,t,e,"POST",n,!1)},updateEmailAddressForSubscriber:function(t,e,n){Ne(v,t,e,"POST",n,!1)},signReleaseOfLiability:function(t){return Ne(G,t,{},"POST",null,!1)},createMilitaryStatus:function(t,e,n){Ne(R,t,e,"POST",n,!1)},verifyMilitaryStatus:function(t){return Ne(vt,t,{},"POST",null,!1)},updateEmailOptInOptOut:function(t,e,n){Ne(h,t,e,"POST",n,!1)},registerSnowAlertProfile:function(t,e,n){Ne(y,t,e,"POST",n,!1)},submitCancellationRequestForm:function(t,e,n){Ne(de,t,e,"POST",n,!1)},submitPassOrTicketValidationForm:function(t){return Ne(Pe,t,{},"POST",null,!1)},submitOnlineExceptionsForm:function(t){return Ne(fe,t,{},"POST",null,!1)},consumeSeasonPassBenefitTicket:function(t,e,n){Ne(w,t,e,"POST",n,!1)},saveVisitationProfile:function(t){return Ne(N,t,{},"POST",null,!1)},getAccountSeasonPassInfo:function(){return Ne(q,{},{},"POST",null,!1)},getAccountEpicCoverageInfo:function(t){return Ne(L,t,{},"GET",null,!1)},getEpicCoverageContent:function(){return Ne(b,{},{},"GET",null,!1)},getAutoRenewContent:function(){return Ne(E,{},{},"GET",null,!1)},getAutoRenewStatus:function(t){return Ne(M,t,{},"GET",null,!1)},getAccountReservations:function(t){return Ne(F,t,{},"GET",null,!1)},getAccountReservationsContent:function(){return Ne(U,{},{},"GET",null,!1)},cancelPassReservation:function(t){return Ne(i,JSON.stringify(t),{},"POST",null,!1)},getActivities:function(t,e){Ne(x,t,{},"GET",e,!1)},getMultiDayNonConsecutiveActivities:function(t,e){Ne(B,t,{},"GET",e,!1)},getActivitiesLocationsMap:function(t,e){Ne(j,{},t,"GET",e,!1)},createAccountWidget:function(t,e,i){Ne(n,t,e,"POST",i,!1)},existingAccountLogin:function(t,e,n){Ne(It,t,e,"POST",n,!1)},logOut:function(t,e){Ne(re,{},t,"POST",e)},createAccountWithoutCardNumber:function(t,e,n){Ne(o,t,e,"POST",n,!1)},createAccountWithCardNumber:function(t,e,n){Ne(a,t,e,"POST",n,!1)},findMyCardForCreateAccount:function(t,e,n){Ne(r,t,e,"POST",n,!1)},updatePassword:function(t){return Ne(u,t,{},"POST",null,!1)},updatePhoneNumber:function(t){return Ne(c,t,{},"POST",null,!1)},updateAddress:function(t){return Ne(s,t,{},"POST",null,!1)},updateBirthDate:function(t){return Ne(p,t,{},"POST",null,!1)},updateEmailAddress:function(t,e,n){Ne(l,t,e,"POST",n,!1)},updateCreditCardOnFile:function(t){return Ne(A,t,{},"POST",null,!1)},enrollInAutoRenew:function(t,e,n){Ne(d,t,e,"POST",n,!1)},unenrollFromAutoRenew:function(t){return Ne(f,t,{},"POST",null,!1)},updateUsername:function(t){return Ne(P,t,{},"POST",null,!1)},sendResetPasswordRequestEmailForUser:function(t,e,n){Ne(T,t,e,"POST",n,!1)},forgotPasswordReset:function(t,e,n){Ne(S,t,e,"POST",n,!1)},getRenterInfo:function(t){return Ne(k+"?ipcode="+t,{},{},"GET",null,!1)},createRenterProfile:function(t){return Ne(D,t,{},"POST",null,!1)},updateRenterInfo:function(t){return Ne(H,t,{},"POST",null,!1)},accountCancelOrder:function(t){return Ne(W,t,{},"POST",null,!1)},getCart:function(t,e){Ne(Y,{},t,"GET",e,!1)},getCartSummary:function(t,e){Ne(Z,{},t,"GET",e,!1)},removeFromCart:function(t,e,n){return Ne($+t,{},e,"POST",n,!1)},toggleNff:function(t,e,n){Ne(tt+t,{},e,"POST",n,!1)},toggleRentalDamageWaiver:function(t,e,n){Ne(et,t,{},"POST",n,!1)},setPassInsurance:function(t,e,n,i){Ne(nt+"?cartProductId="+t+"&isChecked="+e,{},n,"POST",i,!1)},updateOrderAddress:function(t,e,n){Ne(it,t,e,"POST",n,!1)},updateTravelInsurance:function(t,e,n){Ne(ot+"?isChecked="+t,{},e,"POST",n,!1)},addPrimaryTraveler:function(t,e,n){Ne(at,t,e,"POST",n,!1)},assignTravelerToProduct:function(t){return Ne(rt,t,{},"POST",null,!1)},unassignTravelerFromProduct:function(t){return Ne(ut+t,{},{},"POST",null,!1)},updateResortCharge:function(t){return Ne(ct,t,{},"POST",null,!1)},configureSeasonPass:function(t){return Ne(Tt,t,{},"POST",null,!1)},setAutoRenew:function(t,e,n){Ne(Ot,t,e,"POST",n,!1)},configureSeasonPassBenefitTickets:function(t){return Ne(mt,t,{},"POST",null,!1)},getAccountSeasonPassTabContent:function(){return Ne(I,{},{},"GET",null,!1)},configureRental:function(t){return Ne(St,t,{},"POST",null,!1)},configureGroupRental:function(t){return Ne(Ct,t,{},"POST",null,!1)},productConfigurationComplete:function(){return Ne(Rt,{},{},"GET",null,!1)},completeRposTransaction:function(t,e,n){Ne(ht,t,e,"POST",n,!1)},reviewOrder:function(t,e,n){Ne(yt,t,e,"POST",n,!1)},GetPasses:function(t,e,n){Ne(Kt,t,e,"POST",n,!1)},GetPassCategoryDetail:function(t,e,n){Ne(Xt+t,{},e,"GET",n,!1)},GetLiftTicketPassUpsellCategoryDetail:function(t,e){Ne(Yt,{},t,"GET",e,!1)},getLiftTicketSearchResults:function(t,e,n,i,o,a){Ne(Qt+t+"/"+e+"/"+n+"/"+i+"/",{},o,"GET",a,!1)},getBikeParkLiftTicketSearchResults:function(t,e,n,i){Ne(qt+t+"/"+e,{},n,"GET",i,!1)},addPromoCode:function(t,e,n){Ne(bt+t,{},e,"POST",n,!1)},removePromoCode:function(t,e,n,i){Ne(Lt+e+"&cartProductID="+t,{},n,"POST",i,!1)},extendSession:function(t,e){Ne(X,{},t,"GET",e,!1)},addActivitiesToCart:function(t,e,n){Ne(_,t,e,"POST",n,!1)},addChildcareToCart:function(t,e,n){Ne(z,t,e,"POST",n,!1)},addPassesToCart:function(t,e,n){Ne(K,t,e,"POST",n,!1)},addLiftTicketToCart:function(t,e,n){Ne(Q,t,e,"POST",n,!1)},addRentalsToCart:function(t,e,n){return Ne(Gt,t,e,"POST",n,!1)},validatePass:function(t){return Ne(Zt,JSON.stringify(t),{},"POST",null,!1)},validateActivationCode:function(e,n){var i={passNumber:e,activationCode:n};return Ne($t+t.param(i),{},{},"GET",null,!1)},validateEdgeCardLocation:function(t,e,n){Ne(te+t,{},e,"GET",n,!1)},getLodgingResults:function(t,e){Ne(ee,t,{},"POST",e,!1)},getPropertyPricingAndAvailability:function(t,e,n){Ne(ne,t,e,"POST",n,!1)},getGetVacationDeals:function(t,e,n){Ne(ie,t,e,"POST",n,!1)},getComponentDetails:function(t,e,n){Ne(oe,t,e,"POST",n,!1)},configureActivities:function(t){return Ne(pt,t,{},"POST",null,!1)},configureLiftTickets:function(t,e,n,i){return Ne(ft+"?cartProductId="+t+"&isErolAccepted="+e,{},n,"POST",i,!1)},configureChildcare:function(t){return Ne(lt,t,{},"POST",null,!1)},configureChildGroupLesson:function(t){return Ne(At,t,{},"POST",null,!1)},addLodgingRequirements:function(t){return Ne(gt,t,{},"POST",null,!1)},lodgingApiAddToCart:function(t,e,n){Ne(ae,t,e,"POST",n,!1)},configureGroupLesson:function(t){return Ne(dt,t,{},"POST",null,!1)},configurePrivateLesson:function(t){return Ne(Pt,t,{},"POST",null,!1)},getLessonsSearchResults:function(t,e,n){Ne(Dt,t,e,"POST",n,!1)},getLessonDetail:function(t,e,n){Ne(Ht,t,e,"POST",n,!1)},getLessonLocationMap:function(t,e){Ne(Nt,{},t,"GET",e,!1)},addLessonToCart:function(t,e,n){Ne(st,t,e,"POST",n,!1)},uploadPhoto:function(t,e,n){Ne(ue,t,e,"POST",n,!1)},isApiRequestInProgress:function(){return e},disableSitewideAlertForUserSession:function(t){Ne(ce,{},{},"POST",t,!1)},disableMyAccountAlertForUserSession:function(t,e,n){Ne(se,t,e,"POST",n,!1)},errorCodes:{anotherLiftTicketAlreadyAssignedToSamePerson:2004,cardNumberAssignedToSomeoneElse:2005,usernameUpdateError:100016},childCareGetUnavailableDatesTwoMonth:function(t,e,n,i,o){Ne(Mt+"?locationId="+t+"&ageGroupId="+e+"&startdate="+n,{},i,"GET",o,!1)},childCareGetUnavailableDatesOneMonth:function(t,e,n,i,o){Ne(Et+"?locationId="+t+"&ageGroupId="+e+"&startdate="+n,{},i,"GET",o,!1)},childCareGetProduct:function(t,e,n,i,o){Ne(Ft+"?locationId="+t+"&ageGroupId="+e+"&selectedDate="+n,{},i,"GET",o,!1)},childCareGetProducts:function(t,e,n){Ne(Ut,t,e,"POST",n,!1)},mountainGetEvents:function(t,e,n){Ne(le,t,e,"POST",n,!1)},mountainCreateContactAndSendMessage:function(t,e,n){Ne(Ae,t,e,"POST",n,!1)},mountainUpdatePendingChildAccount:function(t){return Ne(pe,t,{},"POST",null,!1)},createSalesForceGroupLead:function(t,e,n){Ne(Se,t,e,"POST",n,!1)},getGoogleCustomSearchResults:function(t,e,n){return Ne(kt,t,e,"POST",n,!1)},checkWeatherForHeader:function(t,e,n){Ne(Ce,t,e,"GET",n,!1)},transactionApiGetTransactionHistory:function(t,e,n){Ne(Oe+"/"+t,{},{Accept:"application/json"},"GET",n,!1)},getWeatherPageContent:function(t,e,n){Ne(ge+"?cardId="+t,{},e,"GET",n,!1)},getTripAdvisorRatings:function(t,e,n){Ne(t,void 0,void 0,"GET",e,n)},postSkiSchoolChangeRequest:function(t,e,n){Ne(me,t,e,"POST",n,!1)},adobeTargetNotificationUpdate:function(t,e){Ne(ve,t,{},"POST",e,!1)},addToMobileWallet:function(t,e){Ne(Ge,t,{},"POST",e,!1)},locationsPricingStats:function(t,e){return Ne(he,t,{},"POST",e,!1)},searchRentalsLocations:function(t,e){return Ne(Re,t,{},"POST",e,!1)},searchRentalsProducts:function(t,e){return Ne(ye,t,{},"POST",e,!1)},submitPassTermsConditionsRefund:function(t,e){return Ne(be,t,{},"POST",e,!1)},getCapacityControlReservationInventory:function(e){return Ne("".concat(Wt,"?").concat(t.param(e)),{},{},"GET",null,!1)},getLiftTicketControlReservationInventory:function(e){return Ne("".concat(Vt,"?").concat(t.param(e)),{},{},"GET",null,!1)},getOverAllPassReservationInventory:function(e){return Ne("".concat(Jt,"?").concat(t.param(e)),{},{},"GET",null,!1)},getPassReservationInventoryUnavailableDates:function(e){return Ne("".concat(xt,"?").concat(t.param(e)),{},{},"GET",null,!1)},getPassHoldersForReservation:function(t){return Ne(Bt,t,{},"POST",null,!1)},getPassReservationInventoryStartAndEndDate:function(e){return Ne("".concat(jt,"?").concat(t.param(e)),{},{},"GET",null,!1)},submitPassReservation:function(t){return Ne(zt,JSON.stringify(t),{},"POST",null,!1)},passReservationValidateScan:function(t){return Ne(_t,JSON.stringify(t),{},"POST",null,!1)},submitPrivateLessonParticipantForm:function(t,e){return Ne(wt,JSON.stringify(t),{},"POST",e,!1)},submitPaidRefundForm:function(t){return Ne(Te,JSON.stringify(t),{},"POST",null,!1)},getAccountPassHolderCredits:function(){return Ne(V,{},{},"GET",null,!1)},getMyAccountProfile:function(){return Ne(J,{},{},"GET",null,!1)},createAndAddHouseholdMember:function(t){return Ne(Ee,JSON.stringify(t),{},"POST",null,!1)},addExistingCustomerToHousehold:function(t){return Ne(Le,JSON.stringify(t),{},"POST",null,!1)},addHouseholdMemberSearch:function(t){return Ne(Me,t,{},"POST",null,!1)},removeHouseholdMember:function(t){return Ne(Fe,JSON.stringify(t),{},"POST",null,!1)},declineHouseholdMemberTransfer:function(t){return Ne(Ue,JSON.stringify(t),{},"POST",null,!1)},acceptHouseholdMemberTransfer:function(t){return Ne(Ie,JSON.stringify(t),{},"POST",null,!1)},sendRequestHouseholdMemberTransferEmail:function(t){return Ne(ke,JSON.stringify(t),{},"POST",null,!1)},searchForPass:function(t){return Ne(De,t,{},"POST",null,!1)},forgotUsernameSearch:function(t){return Ne(He,t,{},"POST",null,!1)}};return we});
//# sourceMappingURL=freerideRestApi.js.map