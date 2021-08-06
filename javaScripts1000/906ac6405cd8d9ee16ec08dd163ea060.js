tassApp.controller('mainController', ['$scope', '$rootScope', '$window', '$timeout', 'Overlord', 'websocket', mainController]);

function mainController($scope, $rootScope, $window, $timeout, Overlord, websocket) {
    $scope.ov = Overlord;
    $scope.newsFeedMode = false;

    $scope.$on('toggleNewsFeed', function(e, data) {
        $scope.newsFeedMode = data.isOpened;
    });

    $scope.$on('mediaUsed', function(event, callback) {
        loadJWPlayer(callback);
    });

    $rootScope.detectmob = function() { 
         return !!(navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
         )
    };


    /** ÐÐ°Ð¿Ð¸ÑÐ°ÑÑ id Ð¿Ð¾ÑÐµÑÐµÐ½Ð½ÑÑ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð¾Ð² Ð² localStorage
     * ÑÑÐ¾Ð±Ñ ÑÐ´Ð°Ð»Ð¸ÑÑ Ð¸Ð· Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð¾Ð²Ð°Ð½Ð½Ð¾Ð³Ð¾
     */
    (function () {
        var recommendationMetaTag =
            document.querySelector('meta[property="recommendation:materialId"]');

        if (!window.localStorage || !recommendationMetaTag) { return; }

        var currentId = recommendationMetaTag.getAttribute('content');

        var recValue = window.localStorage.getItem('Rec') || '';
        var recDate = window.localStorage.getItem('RecTime');
        var recArr = recValue.length ? recValue.split(',') : [];

        if (recDate + (24*60*60*1000) < new Date().getTime()) { recArr  = []; }

        if (recArr.indexOf(currentId) < 0) {
            if (recArr.length === 30) {
                recArr.shift();
            }
            recArr.push(currentId);
        }

        window.localStorage.setItem('RecTime', new Date().getTime().toString());
        window.localStorage.setItem('Rec', recArr.toString());

    })();

    /** ÐÐ°Ð³ÑÑÐ¶Ð°ÑÑ jwplayer ÑÐ¾Ð»ÑÐºÐ¾ ÐµÑÐ»Ð¸ Ð² Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑÐ·ÑÐµÑÑÑ Ð²Ð¸Ð´ÐµÐ¾ Ð¸Ð»Ð¸ Ð°ÑÐ´Ð¸Ð¾
     * Ð¿ÑÐ¸ ÑÑÐ¾Ð¼ Ð±ÑÐ´ÐµÑ Ð²ÑÐ¿Ð»ÑÐ²Ð°ÑÑ ÑÐ¾Ð±ÑÑÐ¸Ðµ mediaUsed ÐºÐ¾ÑÐ¾ÑÐ¾Ðµ Ð·Ð°Ð³ÑÑÐ¶Ð°ÐµÑ jwplayer.js Ð² body
     * TASK: TMRED-4282
     */
    function loadJWPlayer(callback) {
        /** ÐÐµ Ð´Ð¾Ð±Ð°Ð²Ð»ÑÑÑ ÑÐºÑÐ¸Ð¿Ñ ÐµÑÐ»Ð¸ Ð¾Ð½ ÑÐ¶Ðµ Ð±ÑÐ» Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½ ÑÐ°Ð½ÐµÐµ */
        if (document.getElementById('jwPlayerScript') === null) {
            var isDev = localStorage.getItem('environment') === 'development';
            var host = isDev ? 'http://preprod.tass.ru' : 'https://tass.ru';

            $scope.jwplayerScript = document.createElement('script');
            $scope.jwplayerScript.setAttribute('id', 'jwPlayerScript');
            $scope.jwplayerScript.src = host + '/newtass/javascript/libs/jwplayer-7.11.2/jwplayer.js';
            document.body.appendChild($scope.jwplayerScript);
        }

        /** ÐÑÐ»Ð¸ jwplayer ÑÐ¶Ðµ Ð´Ð¾ÑÑÑÐ¿ÐµÐ½, Ð¿ÑÐ¾ÑÑÐ¾ Ð²ÑÐ¿Ð¾Ð»Ð½Ð¸ÑÑ callback
         * Ð¸Ð½Ð°ÑÐµ Ð´Ð¾Ð¶Ð´Ð°ÑÑÑÑ Ð·Ð°Ð³ÑÑÐ·ÐºÐ¸ Ð¸ Ð·Ð°ÑÐµÐ¼ Ð²ÑÐ¿Ð¾Ð»Ð½Ð¸ÑÑ callback
         */
        typeof jwplayer !== 'undefined' ? callback() : $scope.jwplayerScript.addEventListener('load', callback);
    }

}
