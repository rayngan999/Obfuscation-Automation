(function (init) {
	require(['jquery', 'eventLogging', "util/remspect-affected-event-util", 'lib/toastr', 'util/bubbleField'], init);
})(function($, eventLogging, remspectAffectedEventUtil, toastr) {

window.submitReferral = function(isPrincipalReferral, emailString, message, setEmailFn, e) {
	if (e) {
		e.preventDefault();
	}
	var data = {
		emailAddressList: emailString,
		message: message,
		isPrincipalReferral: isPrincipalReferral
	};
	
	function showErrorMessage(message) {
		var fullMessage = (message ? message : "Something went wrong.") + " Please try again or click the blue Support tab.";
		
		toastr.error(
		 fullMessage,
		 "Oops!",
		 {
			 positionClass: "toast-top-center",
			 closeButton: true,
			 preventDuplicates: true
		 }
		);
	}
	
	if (!!data.emailAddressList && data.emailAddressList.length > 0 && !!data.message) {
		var emailList = data.emailAddressList.split(/,|;|\s/).filter(function(email) { return email && email.length > 0});
		var loggableEvent = new eventLogging.LoggableEvent("referFriend", true);
		loggableEvent.emailAddressList = emailList;
		loggableEvent.url = window.location.href;
		loggableEvent.failedEmailAddresses = [];
		var memberDataElement = document.querySelectorAll("[data-member-id]");
		if (memberDataElement.length > 0) {
			loggableEvent.memberId = parseInt(memberDataElement[0].getAttribute("data-member-id"));
		}
		
		// Submit to ajax end point
		$.ajax('/member/refer/createEmailReferralsList.ajax', {
			method: 'POST',
			data: data,
			success: function(response) {
				if (!response) {
					loggableEvent.failedEmailAddresses = emailList;
					showErrorMessage();
				}
				else if (response.error) {
					loggableEvent.failedEmailAddresses = emailList;
					showErrorMessage(response.error);
				}
				else if (response.errors) {
					var failedEmails = Object.keys(response.errors);
					var successfulEmails = emailList.length - failedEmails.length;
					var errorOut = successfulEmails > 0
					 ? "We've successfully sent " + successfulEmails + " email" + (successfulEmails > 1 ? "s" : "")
					 + " for you but the following emails failed. "
					 : "";
					
					failedEmails.forEach(function(key) {
						errorOut += response.errors[key] + ": " + key + ". ";
					});
					
					loggableEvent.failedEmailAddresses = failedEmails;
					setEmailFn(failedEmails.join(", "));
					showErrorMessage(errorOut);
				}
				else {
					$("#referModal").modal("hide");
					setEmailFn("");

					var successMessage;
					if (isPrincipalReferral) {
						successMessage = "Success! Email has been sent.";
					}
					else {
						successMessage = "Thanks for referring your friend! "
						 + "We'll email you when you receive referral credit. Invites are unlimited, so refer more friends to earn more rewards!";
					}

					toastr.success(successMessage,
					 "Success",
					 {
						 positionClass: "toast-top-center",
						 closeButton: true
					 });
				}
				eventLogging.queueEvent(loggableEvent);
			},
			error: function(response) {
				loggableEvent.failedEmailAddresses = loggableEvent.emailAddressList;
				eventLogging.queueEvent(loggableEvent);
				showErrorMessage();
			}
		});
	}
	else if (!data.emailAddressList || data.emailAddressList.length === 0) {
		showErrorMessage("You need to enter an email into the field!");
	}
	else if (!data.message) {
		showErrorMessage("You need to send something in the email body.");
	}
};

function initReferAFriend() {
	$("#referModal").on("show.bs.modal", function () {
		var factor = "referFriendAmazon";
		var eventInfo = "referFriendModalOpen";
		remspectAffectedEventUtil.sendRemspectAffectedEventIfAssigned(factor, eventInfo);
	});
	
	/*
	 * Email Referral
	 */
	$("[data-refer-friend='email']").each(function() {
		var container = $(this);
		var email = container.find('input');
		var message = container.find('textarea');
		var submitButton = container.find('button');
		
		email.on('keypress', function(event) {
			if (event.keyCode === 13) { // Enter Key
				email.blur();
				submitButton.focus();
			}
		});
		
		// Set up submit listener
		submitButton.on('click', function(e) {
			window.submitReferral(false, email.val(), message.val(), email.val.bind(email), e);
		});
	});

	$("[data-refer-friend='principal']").each(function () {
		var container = $(this);
		var email = container.find('input');
		var message = container.find('textarea');
		var submitButton = container.find('button');

		var memberDataElement = $('#memberData');
		var firstName = memberDataElement.attr("data-member-first-name");
		var lastName = memberDataElement.attr("data-member-last-name");
		var fullName;

		if (firstName && lastName) {
			fullName = firstName + " " + lastName;
		}
		else if (firstName) {
			fullName = firstName;
		}
		else if (lastName) {
			fullName = lastName;
		}

		if (fullName) {
			message.val(message.val() + fullName);
		}

		email.on('keypress', function (event) {
			if (event.keyCode === 13) { // Enter Key
				email.blur();
				submitButton.focus();
			}
		});

		// Set up submit listener
		submitButton.on('click', function (e) {
			window.submitReferral(true, email.val(), message.val(), email.val.bind(email), e);
		});
	});
	
	/*
	 * Facebook referral
	 */
	$("[data-refer-friend='facebook']").on('click', function() {
		// Generate GUId
		var guid = 'MFRxxxxxxxxxxxxxxxxxxxxyxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
		
		// Create share url
		var url = 'https://www.facebook.com/sharer/sharer.php?u=https://' + window.location.hostname + '?eg=' + guid;
		
		// Will attempt to post the guid multiple times until successful
		function postGuid(attempt) {
			if (attempt > 0) {
				// Post to ajax end point
				$.ajax('/member/refer/createShareReferral.ajax', {
					method: 'POST',
					data: {
						guid: guid
					},
					error: function() {
						postGuid(attempt - 1);
					}
				});
			}
			else {
				console.error('Cannot post guid for refer');
			}
		}
		
		postGuid(3);
		
		// Opens facebook share window
		window.open(url, '_blank');
	});
	
	/*
	 * Twitter referral
	 */
	$("[data-refer-friend='twitter']").on('click', function() {
		// Generate GUId
		var guid = 'MFRxxxxxxxxxxxxxxxxxxxxyxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
		
		// Create share url
		var url = 'https://twitter.com/intent/tweet?text=College costs too much. Study.com doesn\'t! And here\'s a link you can use to save even more when studying!&url=https://'
		 + window.location.hostname + '?eg=' + guid;
		
		// Will attempt to post the guid multiple times until successful
		function postGuid(attempt) {
			if (attempt > 0) {
				// Post to ajax end point
				$.ajax('/member/refer/createShareReferral.ajax', {
					method: 'POST',
					data: {
						guid: guid
					},
					error: function() {
						postGuid(attempt - 1);
					}
				});
			}
			else {
				console.error('Cannot post guid for refer');
			}
		}
		
		postGuid(3);
		
		// Opens twitter share window
		window.open(url, '_blank');
	});
	
	/*
	 * Copy referral link to clipboard
	 */
	$("[data-refer-friend='copyToClipboard']").on('click', function() {
		// Generate GUId
		var guid = 'MFRxxxxxxxxxxxxxxxxxxxxyxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
		
		// Create share url
		var url = "https://" + window.location.hostname + '?eg=' + guid;
		
		// Will attempt to post the guid multiple times until successful
		function postGuid(attempt) {
			if (attempt > 0) {
				// Post to ajax end point
				$.ajax('/member/refer/createShareReferral.ajax', {
					method: 'POST',
					data: {
						guid: guid
					},
					error: function() {
						postGuid(attempt - 1);
					}
				});
			}
			else {
				console.error('Cannot post guid for refer');
			}
		}
		
		postGuid(3);
		
		// Create new element
		var el = document.createElement('textarea');
		// Set value (string to be copied)
		el.value = url;
		// Set non-editable to avoid focus and move outside of view
		el.setAttribute('readonly', '');
		el.style = {position: 'absolute', left: '-9999px'};
		document.body.appendChild(el);
		// Select text inside element
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
		
		toastr.success(
		 "Copied link to clipboard!",
		 "Success",
		 {
			 positionClass: "toast-top-center",
			 closeButton: true
		 });
		
	});
}

initReferAFriend();

});