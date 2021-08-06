ï»¿(function ($) {
	$(function () {

		$(".cc-content-main").on("click", ".cc-facebook-button", function (e) {
			e.preventDefault();
			var facebookLink = $("#FacebookLink").val();
			if (typeof FB !== "undefined") {
				FB.ui({
					method: 'share',
					display: 'popup',
					href: facebookLink,
					object: facebookLink
				},
					function (response) {
						if (response && response.error_message) {
							//TODO(Anyone): Add error handling
						}
					});
			}
		});
		$(".cc-content-main").on("click",
			".cc-googleplus-button",
			function (e) {
				e.preventDefault();
				var value = $(".cc-googleplus-button").attr("href");
				window.open(value);
			});
	    $(".cc-content-main").on("click",
	        ".cc-whatsapp-button",
	        function (e) {
	            e.preventDefault();
	            var value = $(".cc-whatsapp-button").attr("href");
	            window.open(value);
	        });
		$(".cj-social-share").on("click",
			function (e) {
				e.preventDefault();
				var socialSelected = $(this).data("jq-social");
				var isTriggerableAction = $("#isTriggerableAction").val().toLowerCase() === "true";
				var actionSocialShareUrl = $("#actionSocialShareUrl").val();
				var formData = $("#__AjaxFormData").val();
				$.post("/api/sitecore/ShareAnalytics/Index", { __AjaxFormData: formData })
					.done(function (data) {
					});
				if (isTriggerableAction) {
					$.post(actionSocialShareUrl, { actionType: socialSelected })
						.done(function (data) {
						});

				}
			});


		$(".cc-svg-print").on("click",
			function (e) {
				window.print();
			});

	});
})(jQueryV2);