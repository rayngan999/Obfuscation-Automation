tassApp.factory('centrifuge', ['$window', '$http', '$rootScope', '$timeout',"$interval", function($window, $http, $rootScope, $timeout,$interval) {
    let channels = {}; // ÐºÐ°Ð½Ð°Ð»Ñ
    let ieOption = !!(window.navigator.userAgent).match(/(trident\/7)/i);

    var centrifugeConfig = {
        url: $rootScope.TASS.centrifugo.host + ":"+ $rootScope.TASS.centrifugo.port,
        user: $rootScope.TASS.centrifugo.user,
        timestamp: $rootScope.TASS.centrifugo.timestamp,
        token: $rootScope.TASS.centrifugo.token,
    }
    var centrifuge = new Centrifuge(
        centrifugeConfig
    );

    if(!ieOption) {
        centrifuge.connect();
    }

    function subscribe(channel){
        if (!channels[channel]){ //ÐµÑÐ»Ð¸ ÑÐ°ÐºÐ¾Ð³Ð¾ ÐºÐ°Ð½Ð°Ð»Ð° ÐµÑÐµ Ð½ÐµÑ
            channels[channel] = centrifuge.subscribe(channel, function(message) {
                $rootScope.$emit('Rebroadcast', channel, message)
            });
        }
    }

    return {
        subscribe: subscribe
    };
}]);
