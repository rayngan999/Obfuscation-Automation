"use strict";
define(["jquery", "apiService", "brandsiteUtils"], function (e, n, a) {
	e(document).ready(function () {
        nonClickable();
		e("#js-subscribe-form").submit(function (i) {
			i.preventDefault();
			var s = e("#js-email-input").val();
			"" !== s ? n.postRequest("SUBSCRIBE", {
				email: s
			}).done(function () {
				a.openModal("", "You have been subscribed succesfully")
			}).fail(function (e) {
				a.openModal("", e.data.message)
			}) : a.openModal("", "Please enter an email")
		})
    })
     
    function nonClickable(){
        $('.nolink').click( function(event){
            event.preventDefault();
            });
    }

});
