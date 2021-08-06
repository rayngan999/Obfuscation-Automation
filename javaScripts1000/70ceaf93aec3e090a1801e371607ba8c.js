var push_notification = {
    document_ready: false,
    event_element: document.createElement("span"),
    isFirstRequestPermission: true,
    token: '',
    topics: [],
    supported: false,
    onTokenReady: function () {},
    onUnsupported: function () {},
    onNoPermission: function () {},
    get_query_params: function( queryString ) {
        var params = {}, queries, temp, i, l;
        // Split into key/value pairs
        queries = queryString.split("&");
        // Convert the array of strings into an object
        for ( i = 0, l = queries.length; i < l; i++ ) {
            temp = queries[i].split('=');
            params[temp[0]] = temp[1];
        }
        return params;
    },
    trackEvent: function (params) {
        if (typeof ga == 'function') {
            ga(function() {
                var eventCategory = params.evtCategory;
                var eventAction = params.evtAction;
                var eventLabel = params.evtLabel;

                var accounts = ga.getAll();
                for (var i = 0; i < accounts.length; i++) {
                    ga(accounts[i].get("name") + '.send', 'event', eventCategory, eventAction, eventLabel, { nonInteraction: true });
                }
            });
        } else {
            console.log('[webpush]', 'Event Analytics not tracked');
        }
    },
    send_token_to_server: function (token, topics) {

        var options = Intl.DateTimeFormat().resolvedOptions();

         console.log('[webpush]', 'push notification create_token');
         var success_fn = null;

         if (topics && topics.length) {
             success_fn = function() {
				 push_notification.send_topics_to_server(topics);
			 }
         }
		push_notification_api.create_token(token, {locale: options.locale, timezone: options.timeZone}, success_fn);
    },
    send_topics_to_server: function (topics) {

        console.log('[webpush]', 'push notification update_topics');
        push_notification_api.update_topics(push_notification.token, {topics: topics});

    },
    get_token: function (request_permission) {

        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken()
            .then(function(currentToken) {
                if (push_notification.token === '' && currentToken !== null) {
                    console.log('[webpush]', 'token', currentToken);
                    push_notification.token = currentToken;

                    console.log('[webpush]', 'is_first', push_notification.isFirstRequestPermission);
                    //se Ã¨ la prima volta che il token viene richiesto e non Ã¨ vuoto, vuol dire che l'utente aveva giÃ  dato il consenso, altrimenti lo ha appena dato
                    if (!push_notification.isFirstRequestPermission) {
                        document.body.dispatchEvent(new Event('push_notification_granted'));
                        var topics = [push_notification_api_data.return_topic('default')];
                        if (window.location.host === 'shopping.giallozafferano.it') {
							topics = [push_notification_api_data.return_topic('shopping')];
						}
                        push_notification.send_token_to_server(currentToken, topics);
                    }

                }

                if (currentToken) {

                    console.log('[webpush]', 'we have token');

                    if (typeof push_notification.onTokenReady === 'function') {
                        push_notification.onTokenReady();
                    }

                } else if (request_permission) {
                    
                    console.log('[webpush]', 'no token, ask permission');

                    messaging.requestPermission()
                        .then(function() {
                            push_notification.isFirstRequestPermission = false;
                            push_notification.get_token(false);
                        })
                        .catch(function() {
                            if (typeof push_notification.onNoPermission === 'function') {
                                push_notification.onNoPermission();
                            }
                        });

                } else {
                    console.log('[webpush]', 'no token, no permission request, try cookies');
                    if (typeof push_notification.onTokenReady === 'function') {
                        push_notification.onTokenReady();
                    }
                }
            })
            .catch(function(err) {
                console.log('[webpush]', 'An error occurred while retrieving token. ', err);

                if (typeof push_notification.onUnsupported === 'function') {
                    push_notification.onUnsupported();
                }

            });
    },
    delete_token: function () {
        messaging.getToken()
            .then(function(currentToken) {
                messaging.deleteToken(currentToken)
                    .then(function() {
                        console.log('[webpush]', 'Token deleted.');
                    })
                    .catch(function(err) {
                        console.log('[webpush]', 'Unable to delete token. ', err);
                    });
            })
            .catch(function(err) {
                console.log('[webpush]', 'Error retrieving Instance ID token. ', err);
            });
    }
    /*,
    sw_token: function () {
        navigator.serviceWorker.controller.postMessage({action: 'show_token'});
    }
    */
};