var GZWebPush = {
    active: false,
    denied: false,
    
    allowed_topics: ['default', 'shopping'],
    topics: [],
    force_topic: false,
    
    onStatusChange: function() {
        //chiamata all'attivazione o alla modifica dei topic
    },
    
    enableTopic: function(topic) {
        if (!GZWebPush.denied && GZWebPush.topics.indexOf(topic) == -1) {
            if (GZWebPush.active) {
                GZWebPush.topics.push(topic);
                GZWebPush._updateTopics();
                GZWebPush.onStatusChange();
            } else {
                GZWebPush.force_topic = topic;
                push_notification.displayBox();
            }
        }
    },
    
    disableTopic: function(topic) {
        var topic_pos = GZWebPush.topics.indexOf(topic);
        if (GZWebPush.active && topic_pos >= 0) {
            GZWebPush.topics.splice(topic_pos, 1);
            GZWebPush._updateTopics();
            GZWebPush.onStatusChange();
        }
    },
    
    _updateTopics: function() {
        var cookie_val = GZWebPush.topics.length > 0 ? GZWebPush.topics.join(',') : 'no-topic';
        push_notification.send_topics_to_server(GZWebPush.topics);
        push_cookies.set('push_notification_topics', cookie_val, 86400);
    }
    
};



push_notification._displayBox = function () {
    var push_notification_denied = push_cookies.get('push_notification_denied');
    if (push_notification_denied !== '1') {
        var push_notification_viewed = push_cookies.get('push_notification_viewed');
        if (push_notification_viewed !== '1' || GZWebPush.force_topic) {
            push_notification.get_token(true);
            console.log('[webpush]', 'push_notification_viewed');
            push_cookies.set('push_notification_viewed', '1', 86400);
        } else {
            console.log('[webpush]', 'skip richiesta permesso, push_notification_viewed');
        }
    } else {
        push_notification.onNoPermission();
    }
};

push_notification.displayBox = function () {
    if (push_notification.document_ready) {
        push_notification._displayBox();
    } else {
        (function (fn) {
			if (document.readyState != 'loading') {
				fn();
			} else {
				document.addEventListener('DOMContentLoaded', fn);
			}
		})(function () {
            push_notification._displayBox();
        });
    }
};

push_notification.onTokenReady = function () {

    var push_notification_token = push_cookies.get('push_notification_token');
    if (push_notification_token && push_notification.token === '') {
        push_notification.token = push_notification_token;
    }

    if (push_notification.token !== '') {

        if (window.location.search.length > 0) {
            var string = window.location.search;
            string = string.substring( string.indexOf('?') + 1 );
            var params = push_notification.get_query_params(string);
            if (typeof params.notification_id !== 'undefined' && typeof params.hash !== 'undefined') {
                push_notification_api.track_notification_click(push_notification.token, {notification_id: params.notification_id, hash: params.hash});
            }
        }

        push_notification.topics = push_cookies.get('push_notification_topics');
        if (push_notification.topics == null || push_notification.topics == '' || push_notification_token != push_notification.token || GZWebPush.force_topic) {
            push_notification.topics = [];
        } else {
            push_notification.topics = push_notification.topics.split(',');
        }

        console.log('[webpush]', "Topics del visitatore ", push_notification.topics);

		if (push_notification.topics.length == 0) { //se non Ã¨ in cache, chiedo al web server
            console.log('[webpush]', 'no topics');

            push_notification_api.get_token_topics(push_notification.token, {}, function (json) {

                console.log('[webpush]', 'topics on server', json);
                
                if (json.success && json.topics.length > 0) {
					push_notification.topics = json.topics;
					console.log('[webpush]', 'token & topics on server');
				} else {
                    //if (!push_notification.isFirstRequestPermission) { //commentato, attivo sempre un topic
                        // se ho appena dato il consenso attivo shopping o default
                        if (GZWebPush.force_topic) {
                            push_notification.topics = [ GZWebPush.force_topic ];
                        } else if (window.location.host === 'shopping.giallozafferano.it') {
                            push_notification.topics = [push_notifications_api_data.return_token('shopping')];
                        } else {
							push_notification.topics = [push_notifications_api_data.return_token('default')];
						}

                    //}
                    if (json.code == 404) {
                        console.log('[webpush]', 'no token on server, send token (and default topic)');
                        push_notification.send_token_to_server(push_notification.token, push_notification.topics);
                    } else {
                        console.log('[webpush]', 'token on server without topics');
                        if (push_notification.topics.length > 0) {
                            console.log('[webpush]', 'update topic on server');
                            push_notification.send_topics_to_server(push_notification.topics);
                        }
                    }
                }
                
                if (GZWebPush.force_topic && push_notification.topics.indexOf(GZWebPush.force_topic) == -1) {
                    console.log('[webpush]', 'forced update topic on server');
                    push_notification.topics.push(GZWebPush.force_topic);
                    push_notification.send_topics_to_server(push_notification.topics);
                }
                GZWebPush.force_topic = false;
                
                GZWebPush.topics = push_notification.topics;
                if (push_notification.topics.length == 0) {
                    push_notification.topics = ['no-topic'];
                }
                console.log('[webpush]', "topics", push_notification.topics);

                // salvo i topics del visitatore in un cookie per 1 giorno
                push_cookies.set('push_notification_topics', push_notification.topics.join(','), 86400);

                //se Ã¨ la prima volta che il token viene richiesto e non Ã¨ vuoto, vuol dire che l'utente aveva giÃ  dato il consenso, altrimenti lo ha appena dato
                if (push_notification.isFirstRequestPermission) {
                    push_notification.event_element.dispatchEvent(new Event('push_notification_ready'));
                } else {
                    GZWebPush.onStatusChange();
                }
                
            });
        } else {
            console.log('[webpush]', "Il topic nel cookie di cache, non devo fare altro");
            
            if (push_notification.topics[0] == 'no-topic') {
                GZWebPush.topics = [];
            } else {
                GZWebPush.topics = push_notification.topics;
            }
            
            //se Ã¨ la prima volta che il token viene richiesto e non Ã¨ vuoto, vuol dire che l'utente aveva giÃ  dato il consenso, altrimenti lo ha appena dato
            if (push_notification.isFirstRequestPermission) {
                push_notification.event_element.dispatchEvent(new Event('push_notification_ready'));
            }
        }

    } else {
        console.log('[webpush]', 'token not found');
        push_notification.displayBox();
    }
};

push_notification.onUnsupported = function () {
    console.log('[webpush]', 'Notifiche non supportate');
    GZWebPush.active = false;
    GZWebPush.denied = true;
    GZWebPush.onStatusChange();
};

push_notification.onNoPermission = function (error) {
    console.log('[webpush]', 'Permesso notifiche negato');
    GZWebPush.active = false;
    GZWebPush.denied = true;
    GZWebPush.onStatusChange();
    if (typeof(error) !== 'undefined') push_cookies.set('push_notification_denied', '1', 86400*30*6); //se nego su un dominio non devo chiedere sull'altro
};

push_notification.event_element.addEventListener('push_notification_ready', function () {
    console.log('[webpush]', 'Notifiche attive');
    GZWebPush.active = true;
    GZWebPush.denied = false;
    GZWebPush.onStatusChange();
    push_cookies.set('push_notification_token', push_notification.token, 8640000);
});


(function (fn) {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
})(function () {
    
    GZWebPush.onStatusChange();

    document.body.addEventListener('push_notification_granted', function () {
        console.log('[webpush]', 'Permesso invio notifiche registrato');
        GZWebPush.active = true;
        GZWebPush.denied = false;
        GZWebPush.onStatusChange();
		
        // il token lo salvo per 100 giorni, per evitare la generazione di token doppia tra un dominio e l'altro.
        push_cookies.set('push_notification_token', push_notification.token, 8640000);

		// feedback FE
        if (typeof(notification) !== 'undefined') {
			function get_language() {
				var domain = window.location.host;
				if (domain === 'www.giallozafferano.com') {
					return 'en';
				}
				return 'it';
			}
			function generate_modal_element() {
				var link = 'http://privacy.stbm.it/site/giallozafferano/condizioni-generali.html#servizi-condizioni-uso';
				var translations = {
					it: {
						read_terms: '<small>Leggi le <a href="' + link + '" target="_blank">condizioni d\'uso</a></small>',
						notifications_accepted_message: 'Hai attivato con successo le notifiche.'
					},
					en: {
						read_terms: '<small>Read the <a href="http://privacy.stbm.it/site/giallozafferano/terms-and-conditions-of-use.html" target="_blank">terms of use</a></small>',
						notifications_accepted_message: 'You\'ve successfully activated the notifications.'
					}
				};
				var tr = translations[get_language()];
				return tr.notifications_accepted_message + tr.read_terms + '<br />';
			}
			notification.create(generate_modal_element());
        }
    });

});

