var push_cookies = {
	set: function (cname, cvalue, exsec) {
		var d = new Date();
		d.setTime(d.getTime() + exsec*1000);
		var expires = "expires="+ d.toUTCString();
		if (window.location.host.match('shopping.giallozafferano.it')) cname = cname + "_shop";
		document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=" + this.get_cookie_domain() + ";path=/";
	},
	get: function(cname) {
		if (window.location.host.match('shopping.giallozafferano.it')) cname = cname + "_shop";
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},
	get_cookie_domain: function () {
		var domain = window.location.host;
		if (domain.match('.giallozafferano.com')) return '.giallozafferano.com';
		if (domain.match('shopping.giallozafferano.it')) return '.shopping.giallozafferano.it';
		return '.giallozafferano.it';
	}
};

var push_notification_api = (function () {
	function to_json(response) {
		return response.json();
	}

	function create_api_request(entity, act, method) {
		return function (token, data, success_callback) {
			return fetch(push_notification_api_data.ajax_url + entity + '/', {
				headers: {
					"X-Http-Method-Override": method || "POST",
					"Content-Type": "application/json"
				},
				cache: "no-cache",
				method: 'POST',
				body: JSON.stringify(Object.assign(data, {
					act: act,
					platform: push_notification_api_data.platform,
					account: push_notification_api_data.account,
					token: token,
				}))
			}).then(to_json, console.log.bind(console.log, "[webpush] " + act + ' error')).then(success_callback);
		}
	}

	return {
		create_token: create_api_request('token', 'create_token'),
		add_topics: create_api_request('topics', 'add_topics'),
		get_token_topics: create_api_request('topics', 'get_token_topics', 'GET'),
		track_notification_click: create_api_request('notification_click', 'track_notification_click'),
		update_topics: create_api_request('topics', 'update_topics'),
	};
})();
