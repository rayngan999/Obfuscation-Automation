tassApp.factory('websocket', ['$window', '$http', '$rootScope', '$timeout',"$interval", function($window, $http, $rootScope, $timeout,$interval) {
    // ÐÐ±ÑÑÐ²Ð»ÐµÐ½Ð¸Ðµ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½ÑÑ
    let channels = {}; // ÐºÐ°Ð½Ð°Ð»Ñ
    let connectStatus = false; // ÑÑÐ°ÑÑÑ ÑÐ¾ÐµÐ´ÐµÐ½ÐµÐ½Ð¸Ñ c websocket
    let connect; // Ð±ÑÐ´ÑÑÐµÐµ ÑÐ¾ÐµÐ´ÐµÐ½ÐµÐ½Ð¸Ðµ ÐºÐ¾ÑÐ¾ÑÐ¾Ðµ Ð±ÑÐ´ÐµÑ ÑÑÑÐ°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¾

    // ÐÐµÑÐ¾Ð´ Ð¿Ð¾Ð¿Ð¸ÑÐºÐ¸ Ð½Ð° ÐºÐ°Ð½Ð°Ð»
    function subscribe(config) {
        let fullChannel = config.prefix + '/' + config.channel; // ÑÑÐ¾ ÑÐ¾ ÑÐ¸Ð¿Ð° - pub/politika

        // Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° Ð½Ð° ÑÐ¾ ÑÑÐ¾ Ð¼Ñ ÑÐ¶Ðµ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½Ñ Ð½Ð° ÑÑÐ¾Ñ ÐºÐ°Ð½Ð°Ð»
        if (channels[fullChannel]) {
            //Ð¿ÑÐ¾Ð²ÐµÑÑÐµÐ¼ Ð´ÑÐ±Ð»Ñ
            return false;
        }
        ;
        //Ð·Ð°Ð½Ð¾ÑÐ¸Ð¼ Ð² ÑÐ¿Ð¸ÑÐ¾Ðº ÐºÐ°Ð½Ð°Ð»Ð¾Ð² Ð½Ð¾Ð²ÑÐ¹ ÐºÐ°Ð½Ð°Ð»
        channels[fullChannel] = {
            status: false, // ÑÑÐ°ÑÑÑ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸
            back: config.back, // ÐºÐ¾Ð»Ð±ÐµÐº
            prefix: config.prefix, // Ð¿ÑÐµÑÐ¸ÐºÑ - pub  || private
            channel: config.channel // Ð¸Ð¼Ñ ÐºÐ°Ð½Ð°Ð»Ð° - politika
        };
        // Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° Ð½Ð°Ð»Ð¸ÑÐ¸Ñ ÑÐ¾ÐµÐ´ÐµÐ½ÐµÐ½Ð¸Ñ Ð´Ð»Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ¸ Ð½Ð° ÐºÐ°Ð½Ð°Ð»
        if (connectStatus) {
            connect.send('subscribe:' + fullChannel); // Ð¿Ð¾Ð´Ð¿Ð¸ÑÑÐ²Ð°ÐµÐ¼ÑÑ Ð½Ð° ÐºÐ°Ð½Ð°Ð»
            channels[fullChannel].status = true; //
        }
        ;
    }

    // ÑÐ»ÑÑÐ°ÐµÐ¼ ÐºÐ°Ð½Ð°Ð» WS-subscribe - Ð½Ð° Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸
    $rootScope.$on('WS-subscribe', function(e, data) {
        subscribe(data);
    });
    //ÐÑÐ¾Ð²ÐµÑÐºÐ° Ð½Ð° Ð½Ð°Ð»Ð¸ÑÐ¸Ðµ Ð²ÐµÐ±ÑÐ¾ÐºÐµÑÐ¾Ð² Ð¸ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸Ðµ Ð¾ÑÐ½Ð¾Ð²Ð½ÑÑ Ð¼ÐµÑÐ¾Ð´Ð¾Ð²Ð¾ Ð²ÐµÐ± ÑÐ¾ÐºÐµÑ ÑÐ¾ÐµÐ´ÐµÐ½ÐµÐ½Ð¸Ñ
    if (window.WebSocket && window.WebSocket !== undefined) {
        connect = new WebSocket($rootScope.TASS.webSocket.host + '/poll?cometsid=' + $rootScope.TASS.webSocket.SID);
        //Ð½Ð° Ð·Ð°ÐºÑÑÑÐ¸Ðµ
        connect.onclose = function(e) {
            connectStatus = false;
            for (let item in channels) {
                channels[item].status = false;
            }
            ;
        };

        // Ð½Ð° Ð¾ÑÐºÑÑÑÐ¸Ðµw
        connect.onopen = function(e) {
            connectStatus = true;
            for (var item in channels) {
                connect.send('subscribe:' + item);
                channels[item].status = true;
            }
            ;
        };

        //Ð½Ð° ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ
        connect.onmessage = function(e) {
            if (e.data != 'true' && e.data != 'false') {
                var message = JSON.parse(e.data);
                $rootScope.$emit('Rebroadcast', channels[message.channels[0]].back, message.body); // ÐÐµÐ»Ð°ÐµÐ¼ ÑÐµÐ±ÑÐ¾Ð´ÐºÐ°ÑÑ Ð½Ð° ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÑÐ¸ÐºÐ°Ð¼
            }
            ;
        };

    }

    return channels;
}]);
