$(function(){
	$(document).on("click", "#submit-order-button", function(e){
		if (!$('#vcn-data').data('affirmselected') || window.vcn_approved){
			return true;
		}
		var checkoutObject = $('#vcn-data').data('vcndata');
		if ($('#vcn-data').data('enabled')){
			var $thisBtn = $(this);
			e.preventDefault();
			delete checkoutObject.metadata.mode;
			affirm.checkout.open_vcn({
				success: function(card_details) {
					var braintreeObj = Braintree.create(app.sitepreferences.RADIAL_PUBLIC_KEY);
					$(".encryptedCardNumber").val(braintreeObj.encrypt(card_details.number));
					$(".encryptedCardCVV").val(braintreeObj.encrypt(card_details.cvv));

					card_details.cardType = getCardType(card_details.number);
					$.ajax({
						url: $('#vcn-data').data('updateurl') + '?' + $('#vcn-data').data('csrfname') + '=' + $('#vcn-data').data('csrftoken'),
						data: card_details,
						dataType: "json",
						method: "POST",
						success: function(response){
							if (!response.error){
								window.vcn_approved = true;
								$thisBtn.removeClass('loading');
								$thisBtn.click();
							} else if ($("div.error-form").length){
								$("div.error-form").text($('#vcn-data').data('errormessages')["default"]);
							} else {
								$("table.item-list").before("<div class=\"error-form\">" + $('#vcn-data').data('errormessages')["default"] + "</div>");
							}
						},
						error: function(error){
							$("table.item-list").before("<div class=\"error-form\">Error in establishing connection with Affirm VCN service!</div>");
							return;
						}
					});
				},
				error: function(error) {
					if (error.reason == "canceled" || error.reason == "closed"){
						window.location.assign($('#vcn-data').data('errorurl'));
						return;
					}
					var errorText = "";
					var errorCollection = $('#vcn-data').data('errormessages');
					errorText = errorCollection[error.reason] || errorCollection["default"];
					if ($("div.error-form").length){
						$("div.error-form").text(errorText);
					} else {
						$("table.item-list").before("<div class=\"error-form\">" + errorText + "</div>");
					}
				},
				checkout_data: checkoutObject
			});
		} else if (checkoutObject.metadata.mode == 'modal'){
				e.preventDefault();
				affirm.checkout(checkoutObject);
				affirm.checkout.open({
					onFail: function(error) {
						window.location.assign(checkoutObject.merchant.user_cancel_url);
					},
					onSuccess: function(data) {
						var csrftoken = $('#vcn-data').data('csrfname') + '=' + $('#vcn-data').data('csrftoken');
						var url = checkoutObject.merchant.user_confirmation_url + '?checkout_token=' + data.checkout_token + '&' + csrftoken;
						window.location.assign(url);
					}
				 });
			} else {
				e.preventDefault();
				var csrftoken = $('#vcn-data').data('csrfname') + '=' + $('#vcn-data').data('csrftoken');
				checkoutObject.merchant.user_confirmation_url = checkoutObject.merchant.user_confirmation_url + '?' + csrftoken;
				affirm.checkout(checkoutObject);
				affirm.checkout.post();
			}
		});
	
	if (typeof affirm !== "undefined"){
		affirm.ui.ready(
		    function() {
		        affirm.ui.error.on("close", function(){
		            window.location.replace($('#vcn-data').data('errorurl'));
		        });
		    }
		);
	}

	function getCardType(v){
	
		var cardTypeMatch = "Visa",
		v = v.replace(/\D/g, ''),
		visaRegex = new RegExp('^4[0-9]{0,}$'),
		amexRegex = new RegExp('^3[47][0-9]{0,}$'),
		mastercardRegex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'),
		maestroRegex = new RegExp('^(5[06789]|6)[0-9]{0,}$'),
		dinersRegex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'),
		discoverRegex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$'),
		jcbRegex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$');
		
		if (v.match(visaRegex)) {
			cardTypeMatch = "Visa";
		} else if (v.match(amexRegex)) {
			cardTypeMatch = "Amex";
		} else if (v.match(dinersRegex)) {
			cardTypeMatch = "Discover";
		} else if (v.match(jcbRegex)) {
			cardTypeMatch = "Jcb";
		} else if (v.match(mastercardRegex)) {
			cardTypeMatch = "MasterCard";
		} else if (v.match(discoverRegex)) {
			cardTypeMatch = "Discover";
		} else if (v.match(maestroRegex)) {
			cardTypeMatch = "MasterCard";
		}
	
		return cardTypeMatch;
	}
});