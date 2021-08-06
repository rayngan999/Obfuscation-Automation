(function($) {
	$.ajax({
		method: 'GET',
		url: sg.ajaxurl,
		data: {action: 'get_user_status'},
		success: function (r) {
			if (r != false) {
				$('.icon-account').removeClass('icon-account');
				$('.mobile-account-icon').addClass('account--logged-in');
				$('.loginout-link').attr('href', sg.logoutUrl).text('Log Out');

				if (r.data.avatar !== undefined) {
					$('.user-image').attr('src', r.data.avatar).show();
				}

				if (!r.subscription || r.subscription == null) {
					$('.membership-link').text('Upgrade').show();
					$('.member-subscribe-button').attr('href', r.data.upgradeToMember).show();
					$('.vip-subscribe-button').attr('href', r.data.upgradeToVip).show();
				}

				if (r.subscription && r.subscription == 'member') {
					$('.membership-link').text('Membership Options').show();
					$('.vip-subscribe-button').attr('href', r.data.upgradeToVip).show();
					$('.manage-subscription-link').attr('href', r.data.manageAccount).show();
				}

				if (r.subscription && r.subscription == 'vip') {
					$('.membership-link').text('Membership Options').show();
					$('.manage-subscription-link').attr('href', r.data.manageAccount).show();
					$(body).addClass('sg-na');
				}


			} else {
				$('.loginout-link').attr('href', sg.loginUrl).text('Log In');
			}
		},
		error: function (r) {
			$('.loginout-link').attr('href', sg.loginUrl).text('Log In');
		}
	});
})(jQuery);
