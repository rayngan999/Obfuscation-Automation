function push_not(){
    
    //Vapid public key.
    var applicationServerPublicKey = 'BI8oUGYTCgpqA-LrrnrwyzPOYOVW1WjQ8B9k048ewfy3nphAR78F-_1Tlg_Lh-763W7SYhdT3PT1D7efJRGYZKk';
    var serviceWorkerName = '/sw.js';
    var isSubscribed = false;
    var swRegistration = null;
    var u_id = $.cookie('user');
    var push_button_switch = $('#push-subs-button');
    
    if ('serviceWorker' in navigator) {
        // Supported!
        console.log('support');
    }else{
        console.log('not supported');
        disableAndSetBtnMessage('Service workers unsupported');
        return;
    }
    
    this.get_notification_permission_state = function(){
        return getNotificationPermissionState();
    }
    
    this.predictions_notification_click = function(obj){
        if($('#notification-info-modal').length == 0)
            event.stopPropagation();
        
        if(local_storage.get('push_predictions')){
            unsubscribe_predictions();
        }else{
            this.push_notification_click(obj, true);
        }
        
    }
    
    this.push_notification_click = function(obj, force){
        
        if($('#notification-info-modal').length == 0)
            event.stopPropagation();
    
        if(!force && !$.cookie('user_logged')){
            show_login_modal();
            return;
        }
        
        obj.append('<img id="push-notification-loading" src="https://static.fctables.com/images/ajax-loader.gif" />');
        
        if(isSubscribed){
            unsubscribe();
        }else{
            console.log(543534);
            Notification.requestPermission().then(function (status) {
                if (status === 'denied') {
                   
                    disableAndSetBtnMessage('Your browser block notifications for our website');
                } else if (status === 'granted') {
                    local_storage.set('push_signup', 1);
                    console.log('[Notification.requestPermission] Initializing service worker.');
                    initialiseServiceWorker();
                }
            });
        }
    
        
    }
    
    getNotificationPermissionState().then(function(s){
        if(s.state=='granted' && local_storage.get('push_signup')){

            navigator.serviceWorker.register(serviceWorkerName).then(function(reg){
                swRegistration = reg; 
                navigator.serviceWorker.ready.then(function (reg) {
                    // Do we already have a push message subscription?
                    reg.pushManager.getSubscription()
                        .then(function (subscription) {
                            if (!subscription) {
                                console.log('Not yet subscribed to Push');

                                isSubscribed = false;
                                makeButtonSubscribable();
                            } else {
                                // initialize status, which includes setting UI elements for subscribed status
                                // and updating Subscribers list via push
                                isSubscribed = true;
                                makeButtonUnsubscribable();
                            }
                        })
                        .catch(function (err) {
                            console.log('Error during getSubscription()', err);
                        });
                });
                
            });
            /*
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register(serviceWorkerName).then(function(reg){
                    swRegistration = reg;
                });
            }
            */
       }else if(s.state=='granted' && local_storage.get('push_predictions')){   
           
            navigator.serviceWorker.register(serviceWorkerName).then(function(reg){
                swRegistration = reg; 
                navigator.serviceWorker.ready.then(function (reg) {
                    // Do we already have a push message subscription?
                    reg.pushManager.getSubscription().then(function (subscription) {
                        if (subscription) {
                            $('#predictions-subs-button').prop('checked',true);
                            $('#predictions-subs-button').bootstrapToggle('on');
                        }
                    });
                });
            });

        }else{
            isSubscribed = false;
            makeButtonSubscribable();
        }
    });
  /*  
    Notification.requestPermission().then(function (status) {
        if (status === 'denied') {
            console.log('[Notification.requestPermission] The user has blocked notifications.');
            disableAndSetBtnMessage('Notification permission denied');
        } else if (status === 'granted') {
            console.log('[Notification.requestPermission] Initializing service worker.');
            initialiseServiceWorker();
        }
    });
*/    
    
    function getNotificationPermissionState() {
        if (navigator.permissions) {
            return navigator.permissions.query({name: 'notifications'});
        }

    }

    function initialiseServiceWorker() {

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(serviceWorkerName).then(handleSWRegistration);
        }
    };

    function handleSWRegistration(reg) {
        if (reg.installing) {
            console.log('Service worker installing');
        } else if (reg.waiting) {
            console.log('Service worker installed');
        } else if (reg.active) {
            console.log('Service worker active');
        }

        swRegistration = reg;
        register(reg);
    }

    // Once the service worker is registered set the initial state
    function register(reg) {

        // Are Notifications supported in the service worker?
        if (!(reg.showNotification)) {
            console.log('Notifications aren\'t supported on service workers.');
            disableAndSetBtnMessage('Push notifications unsupported');
            return;
        }

        // Check if push messaging is supported
        if (!('PushManager' in window)) {
            console.log('Push messaging isn\'t supported.');
            disableAndSetBtnMessage('Push messaging unsupported');
            return;
        }
        
        subscribe();
/*
        // We need the service worker registration to check for a subscription
        navigator.serviceWorker.ready.then(function (reg) {
             
            // Do we already have a push message subscription?
            reg.pushManager.getSubscription()
                .then(function (subscription) {
                        console.log(43452);
                    if (!subscription) {
                        console.log('Not yet subscribed to Push');

                        isSubscribed = false;
                        makeButtonSubscribable();
                    } else {
                        // initialize status, which includes setting UI elements for subscribed status
                        // and updating Subscribers list via push
                        isSubscribed = true;
                console.log('subs a');
                        makeButtonUnsubscribable();
                    }
                })
                .catch(function (err) {
                    console.log('Error during getSubscription()', err);
                });
        });*/
    }

    function subscribe() {

        console.log('subscribe func');
        
        navigator.serviceWorker.ready.then(function (reg) {
            console.log(555);
            var subscribeParams = {userVisibleOnly: true};
            
            //Setting the public key of our VAPID key pair.
            var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
            subscribeParams.applicationServerKey = applicationServerKey;

            reg.pushManager.subscribe(subscribeParams)
                .then(function (subscription) {

                    // Update status to subscribe current user on server, and to let
                    // other users know this user has subscribed
                    var endpoint = subscription.endpoint;
                    var key = subscription.getKey('p256dh');
                    var auth = subscription.getKey('auth');
                    
                    sendSubscriptionToServer(u_id, endpoint, key, auth);
                    isSubscribed = true;
              
                    var modal_info = $('#notification-info-modal');
                    if(modal_info.length > 0){
                       $('#notification-info-modal-close').trigger('click');                       
                    }
                })
                .catch(function (e) {
                    // A problem occurred with the subscription.
                    console.log('Unable to subscribe to push.', e);
                });
        }).catch(function (err) {
                    console.log('Error during getSubscription()', err);
        });
    }

    function unsubscribe_predictions() {
        var endpoint = null;
        swRegistration.pushManager.getSubscription() .then(function(subscription) {
            if (subscription) {
                endpoint = subscription.endpoint;
               $.ajax({
                    type: 'POST',
                    url: 'https://push.fctables.com:8080/unsubscribe_predictions',
                    data: {notificationEndPoint: endpoint},
                    success: function (response) {

                        $('#push-notification-loading').remove();

                        if(response!=1){
                            alert('Cant unsubscribe, please try again later');
                        }else{
                            $('#predictions-subs-button').bootstrapToggle('off');
                            local_storage.set('push_predictions',0);
                        }
                    },
                    dataType: 'json'
                });
            }
        }).catch(function(error) {
            console.log('Error unsubscribing', error);
        });
    }
    
    function unsubscribe() {
        var endpoint = null;
        swRegistration.pushManager.getSubscription()
            .then(function(subscription) {
                if (subscription) {
                    endpoint = subscription.endpoint;
                    local_storage.set('push_predictions',0);
                    return subscription.unsubscribe();
                }
            })
            .catch(function(error) {
                console.log('Error unsubscribing', error);
            })
            .then(function() {
                removeSubscriptionFromServer(endpoint);
                
                console.log('User is unsubscribed.');
                isSubscribed = false;

                makeButtonSubscribable();
            });
    }

    function sendSubscriptionToServer(uid,endpoint, key, auth) {
        var encodedKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
        var encodedAuth = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));

        $.ajax({
            type: 'POST',
            url: 'https://push.fctables.com:8080/subscribe',
            data: {publicKey: encodedKey, auth: encodedAuth, notificationEndPoint: endpoint, userid: uid},
            success: function (response) {
                
                $('#push-notification-loading').remove();
       
                
                if(response!=1){
                    alert('Can\'t register for notification, please try again');
                }else{
                    $('#push-subs-button').prop('checked',true);
                    makeButtonUnsubscribable();
                    local_storage.set('push_predictions', 1);
                    window.localStorage.setItem('info-box-alert2',1);
                    $('#modal_mailing').modal('hide');
                }
            },
            dataType: 'json'
        });
    }

    function removeSubscriptionFromServer(endpoint) {
        $.ajax({
            type: 'POST',
            url: 'https://push.fctables.com:8080/unsubscribe',
            data: {notificationEndPoint: endpoint},
            success: function (response) {
                
                $('#push-notification-loading').remove();
                
                if(response!=1){
                    alert('Cant unsubscribe, please try again later');
                }else{
                    $('#push-subs-button').prop('checked',false);
                    
                }
            },
            dataType: 'json'
        });
    }

    function disableAndSetBtnMessage(msg) {
        $('#push-not-container .push-notification-error').remove();
        $('#push-not-container').append('<div class="col-xs-12 push-notification-error"><div class="alert alert-danger">'+msg+'</div></div>');
        $('#push-subs-button').prop('disabled',true);
        $('#predictions-subs-button').prop('disabled',true);
    }

    function enableAndSetBtnMessage() {
        $('#push-not-container .push-notification-error').remove();    
        push_button_switch.prop('disabled',false);
        $('#predictions-subs-button').prop('disabled', false);
    }

    function makeButtonSubscribable() {
        enableAndSetBtnMessage();
        push_button_switch.prop('checked',false);
        $('#predictions-subs-button').prop('checked',false);
        if(typeof push_button_switch.bootstrapToggle != 'undefined'){
            push_button_switch.bootstrapToggle('off');
            $('#predictions-subs-button').bootstrapToggle('off');
            
        }
    }

    function makeButtonUnsubscribable() {
      
        enableAndSetBtnMessage();
        push_button_switch.prop('checked',true);
          
        if(typeof push_button_switch.bootstrapToggle != 'undefined'){
            push_button_switch.bootstrapToggle('on');
            if(local_storage.get('push_predictions')){
                $('#predictions-subs-button').bootstrapToggle('on');
                $('#predictions-subs-button').prop('checked',true);    
            }
        }
        
    }

    function urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
}

var push_notification = new push_not();
