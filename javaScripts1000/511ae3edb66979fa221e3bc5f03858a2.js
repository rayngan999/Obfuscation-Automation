var messaging;

(function (fn) {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
})(function () {
	// Initialize Firebase
	firebase.initializeApp({
		apiKey: "AIzaSyAuWrJN7NRHIggG8jMPLMbDnRx301hUy-M",
		authDomain: "av-test-f4c9c.firebaseapp.com",
		databaseURL: "https://av-test-f4c9c.firebaseio.com",
		projectId: "av-test-f4c9c",
		storageBucket: "",
		messagingSenderId: "43975754916"
	});

	messaging = firebase.messaging();
	if ('serviceWorker' in navigator) {
		push_notification.supported = true;
		//https://stackoverflow.com/questions/30336685/404-error-when-trying-to-register-serviceworker
		var sw_url = '/js/push/service_worker.js?v='+(nonce||"1");
		//console.log('[webpush] sw_url', sw_url);
		//navigator.serviceWorker.register(sw_url, { scope: '/' }).then(function(registration) {
		navigator.serviceWorker.register(sw_url).then(function(registration) {
			//console.log('[webpush] Service worker registration succeeded:', registration);
			messaging.useServiceWorker(registration);
			push_notification.get_token(false);
		}).catch(function(error) {
			console.log('[webpush] Service worker registration failed:', error);
		});

		navigator.serviceWorker.addEventListener('message', function(event){
			console.log("[webpush] Client message received", event.data);
			/*
			if (typeof event.data.action !== 'undefined') {
				if (event.data.action == 'require_token') {
					push_notification.sent_token_to_service_worker();
				}
			}
			*/
		});
	} else {
		console.log('[webpush] Service workers are not supported.');
		if (typeof push_notification.onUnsupported === 'function') {
			push_notification.onUnsupported();
		}
	}

	messaging.onTokenRefresh(function() {
		console.log('[webpush] refresh token');
		push_notification.get_token(false);
	});

	messaging.onMessage(function(payload) {
		console.log("[webpush] Message received. ", payload);
	});

});
