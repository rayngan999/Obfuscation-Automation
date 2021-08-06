//Ð¾Ð±ÑÑÐ²Ð»ÐµÐ½Ð¸Ðµ ÐºÐ¾Ð½ÑÑÐ¾Ð»Ð»ÐµÑÐ¾Ð²;
// .controller('Tass_Main', ['$scope','$rootScope','$window','$timeout', Tass_Main])
tassApp.factory('Overlord', ['$window', '$http', '$rootScope', '$timeout', function($window, $http, $rootScope, $timeout) {
    // console.log('overlord Active');
    // ÐÐ±ÑÐ²Ð»ÐµÐ½Ð¸Ðµ Global Direct ÑÑÐ°ÑÑ

    let GD = {
        'bind': {
            'resize': {},
            'scroll': {},
            'other': {}
        },
        'variable': {},
        'heightTrigger': {},
        'nowScroll': $window.pageYOffset,
        'scrollStatus': false,
        'browser': '',
        'nowWidth': $window.innerWidth,
        'nowHeight': $window.innerHeight,
        'allHeight': document.documentElement.scrollHeight,
        'transition': true,
        'config': {
            'media': {
                'sm': 0,
                'md': 960,
                'lg': 1280,
                'xl': 1360
            }
        },
        'checkDevice': {
            'Android': /Android/i.test(navigator.userAgent),
            'BlackBerry': /BlackBerry/i.test(navigator.userAgent),
            'iOS': /iPhone|iPad|iPod/i.test(navigator.userAgent),
            'ipad': /iPad/i.test(navigator.userAgent),
            'Windows': /IEMobile/i.test(navigator.userAgent),
            'Desktop': !(/Android/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent))
        }
    };

    let scrollTimeout; // Ð½ÑÐ¶ÐµÐ½ Ð´Ð»Ñ ÑÐºÑÐ¾Ð»Ð°
    let GDmedia = GD.config.media; // Short link ÐºÐ°Ðº Ð±Ñ
    let GDbind = GD.bind; // Short link ÐºÐ°Ðº Ð±Ñ
    const isMedia = function() {
        var thisIs = false;
        for (let keyMedia in GDmedia) {
            if (GDmedia[keyMedia] < $window.innerWidth) {
                thisIs = keyMedia;
            };
        };
        return thisIs;
    };
    GD.mediaType = isMedia();
    // ÐÐ¿ÑÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ Ð±ÑÐ°ÑÐ·ÐµÑÐ°
    GD.browser = function() {
        if (/MSIE/i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent)) {
            return 'IE';
        };
        if (/Firefox/i.test(navigator.userAgent)) {
            return 'Firefox';
        };
        if (/Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent)) {
            return 'Safari';
        };
        if (/Chrome/i.test(navigator.userAgent)) {
            return 'Webkit';
        };
        return 'other';
    };
    // ÐÐ¿ÑÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ ÐÐµÐ²Ð°Ð¹ÑÐ°
    GD.device = function() {
        if (/iPad/i.test(navigator.userAgent)) {
            return 'iPad';
        };
        if (/Android/i.test(navigator.userAgent)) {
            return 'Android';
        };
        if (/BlackBerry/i.test(navigator.userAgent)) {
            return 'BlackBerry';
        };
        if (/IEMobile/i.test(navigator.userAgent)) {
            return 'IEMobile';
        };
        if (/iPhone|Mobile|iPod/i.test(navigator.userAgent)) {
            return 'Mobile';
        };
        return 'Desktop';
    };
    /*ÐÑÐ¸ÐµÐ½ÑÐ°ÑÐ¸Ñ Media*/
    GD.orientation = $window.innerWidth >= $window.innerHeight ? 'landscape' : 'portrait';
    /*Ð ÐµÑÐ¸Ð½Ð° Media*/
    GD.retina = (window.retina || window.devicePixelRatio > 1);


    // ÐÐ±ÑÐ²Ð»ÐµÐ½Ð¸Ðµ ÐÐ¾Ð½ÐµÑ

    // ÐÐ²ÐµÑÐ»Ð¾ÑÐ´ Ð¿Ð¾ÐµÑÐ°Ð»Ð¸
    let overlord = {
        'params': {
            'resize': {
                'min': 0,
                'max': 0
            },
            'scroll': {
                'min': 0,
                'max': 0
            },
            'heightWatcher': false
        }
    };
    // ÑÑÐ½ÐºÑÐ¸Ñ ÑÑÑÐ°Ð½Ð¾Ð²ÐºÐ¸ Ð±Ð¸Ð½Ð´Ð°
    overlord.bind = function(variable, conf) {
        if (GDbind[conf.type]) {
            let config = {};
            for (let p in conf.params) {
                if (conf.type == 'resize') {
                    if (parseInt(p)) {
                        config[p] = conf.params[p];
                    } else {
                        config[GDmedia[p]] = conf.params[p];
                    };
                };
                if (conf.type == 'scroll') {
                    config[p] = conf.params[p];
                };
            };
            GDbind[conf.type][variable] = { 'params': config };
            if (conf.trigger) {
                GDbind[conf.type][variable].trigger = conf.trigger;
            };
            overlord.watcher(conf.type); // ÐÐ¾Ð»Ð±Ð°Ð½ÑÐ¹ Ð±Ð°Ð³ Ð¿Ð¾ÑÐ°Ð´Ð¸Ð» Ð¼Ð½Ð¾Ð¶ÐµÑÑÐ²Ð¾ ÐºÐ¾ÑÑÑÐ»ÐµÐ¹. Ð´Ð¾Ð¿ÑÑÐµÐ½ Ð¸Ð· Ð·Ð° Ð½ÐµÐ´Ð¾ÑÑÐ¿Ð°.  ÑÐ±ÑÐ°ÑÑ ÐºÐ¾ÑÑÑÐ»Ð¸ Ð½Ð° Ð°Ð¿Ð»Ð°Ð¹ Ð² ÐºÐ¾Ð½ÑÑÐ¾Ð»Ð»ÐµÑÐ°Ñ
        } else {
            alert('ÐÐµÐ¿ÑÐ°Ð²Ð¸Ð»ÑÐ½ÑÐ¹ Ð±Ð¸Ð½Ð´ Ð² ÐÐ²ÐµÑÐ»Ð¾ÑÐ´Ðµ ÑÐ¸Ð¿Ñ: resize || scroll || other (Ð±ÑÐ´ÐµÑ)');
        };
    };
    //ÐÐ½Ð°Ð»Ð¸Ð·Ð°ÑÐ¾Ñ
    // ÐÐ½Ð°Ð»Ð¸Ð·Ð°ÑÐ¾Ñ Ð±ÑÐ´ÐµÑ Ð¿ÐµÑÐ´ÐµÐ»Ð°Ð½, ÑÐµÐ¹ÑÐ°Ñ Ð¿Ð¾ Ð±ÑÑÑÑÐ¾Ð¼Ñ Ð¾Ð½ Ð¿ÑÐ¸Ð½Ð¸Ð¼Ð°ÐµÑ ÑÐ¾Ð»ÑÐºÐ¾ ID Ð° Ð±ÑÐ´ÐµÑ ÑÐ°Ð±Ð¾ÑÐ°ÑÑ Ð¿Ð¾ Ð°ÑÑÐ¸Ð±ÑÑÑ.
    function offsetPosition(objectID, what) {
        if (typeof objectID == 'undefined') {
            return what == 'min' ? -1 : 999999999999;
        };
        let node = document.getElementById(objectID);
        let curtop = 0;
        let curtopscroll = 0;

        if (node && node.offsetParent) {
            do {
                curtop += node.offsetTop;
                curtopscroll += node.offsetParent ? node.offsetParent.scrollTop : 0;
            } while (node = node.offsetParent);
        } else {
            curtop =  999999999999
        }
        return curtop;
    }

    // ÐÑÐ¿Ð¾Ð»Ð½ÑÑÑÐ°Ñ ÑÐ°ÑÑÑ Ð°Ð½Ð°Ð»Ð¸Ð·Ð°ÑÐ¾ÑÐ°. ÐÐ½Ð° ÑÐ¼Ð¾ÑÑÐ¸Ñ Ð¸ Ð²ÑÐ±Ð¸ÑÐ°ÐµÑ Ð´Ð»Ñ Ð¾ÑÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ ÑÐ¾Ð»ÑÐºÐ¾ 2 Ð±Ð»Ð¸Ð¶Ð°Ð¹ÑÐ¸Ñ ÐµÐ²ÐµÐ½ÑÐ° Ð¿Ð¾ Ð¾Ð±Ðµ ÑÑÐ¾ÑÐ¾Ð½Ñ
    overlord.analyzer = function(type) {
        let min = -1;
        let max = 999999999999;
        let iMax, iMin;
        for (let v in GDbind[type]) {
            for (let p in GDbind[type][v].params) {
                if (type == 'resize') {
                    if (parseInt(p) <= GD.nowWidth && min <= parseInt(p)) {
                        min = parseInt(p);
                    };
                    if (parseInt(p) >= GD.nowWidth && max >= parseInt(p)) {
                        max = parseInt(p);
                    };
                };
                if (type == 'scroll' && p != 'default') {

                    let position = offsetPosition(p);

                    if (position <= GD.nowScroll && min <= position) {
                        min = position;
                        iMin = p;
                    };
                    if (position >= GD.nowScroll && max >= position) {
                        max = position;
                        iMax = p;
                    };
                };

            };
        };
        if (overlord.params[type]){
            overlord.params[type].max = max;
            overlord.params[type].min = min;
        }
        if (type == 'scroll') {
            overlord.params[type].iMax = iMax;
            overlord.params[type].iMin = iMin;
        };

        GD.allHeight = document.documentElement.scrollHeight;
    };
    // ÐÑÐ¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»Ñ
    overlord.executor = function(variable, paramNew, trigger) {
        if (typeof trigger != 'undefined') {
            $rootScope.$broadcast(trigger, paramNew);
        };
        GD.variable[variable] = paramNew;
    };

    overlord.watcher = function(type) {
        const is = type == 'resize' ? GD.nowWidth : GD.nowScroll;
        for (let v in GDbind[type]) {
            let param = GDbind[type][v].params.default;
            for (let p in GDbind[type][v].params) {
                if (p != 'default') {
                    let testParam = type == 'resize' ? parseInt(p) : offsetPosition(p);
                    if (is >= testParam) {
                        param = GDbind[type][v].params[p];
                    };
                };
            };
            overlord.executor(v, param, GDbind[type][v].trigger);
        };
        overlord.analyzer(type);
    };

    // ÐÐµÑÐµÑÐ°ÑÑÐµÑ ÑÐ°Ð·Ð¼ÐµÑÐ¾Ð² Ð¾ÐºÐ½Ð°
    function recalcItemsHeight() {
        for (itName in GD.heightTrigger) {
            const idItem = '#' + GD.heightTrigger[itName];
            GD.variable[itName] = angular.element(idItem).outerHeight(true);
        };
    }

    //bind Ð½Ð° ÑÐµÑÐ°Ð¹Ð·
    angular.element($window).bind('resize', function() {
        recalcItemsHeight();
        GD.transition = false;
        GD.nowWidth = $window.innerWidth;
        GD.nowHeight = $window.innerHeight;
        GD.orientation = $window.innerWidth >= $window.innerHeight ? 'landscape' : 'portrait';
        $timeout(function() {
            GD.transition = true;
        }, 500);
        if (GD.mediaType != isMedia()) {
            GD.mediaType = isMedia();
            $rootScope.$broadcast('changeMediaType', { 'mediaType': GD.mediaType });
        }
        if ($window.innerWidth >= overlord.params.resize.max || $window.innerWidth <= overlord.params.resize.min) {
            overlord.watcher('resize');
            overlord.watcher('scroll');
        } else {
            overlord.watcher('scroll');
        };
        resetApplyScope();
    });
    // ÐÐ¸Ð½Ð´ Ð½Ð° ÑÐºÑÐ¾Ð»Ð»
    angular.element($window).bind('scroll', function() {
        GD.scrollStatus = true;
        if (scrollTimeout) {
            $timeout.cancel(scrollTimeout);
        };
        scrollTimeout = $timeout(function() {
            GD.scrollStatus = false;
            resetApplyScope(); // Ð½ÑÐ¶Ð½Ð¾ÑÑÑ Ð¿Ð¾Ð´ Ð²Ð¾Ð¿ÑÐ¾ÑÐ¾Ð¼
        }, 1000);
        GD.nowScroll = $window.pageYOffset;
        recalcItemsHeight();
        if ($window.pageYOffset >= offsetPosition(overlord.params.scroll.iMax, 'max') || $window.pageYOffset <= offsetPosition(overlord.params.scroll.iMin, 'min')) {
            overlord.watcher('scroll');
        };
        if (GD.allHeight != document.documentElement.scrollHeight){
            //overlord.analyzer('scroll');
            overlord.watcher('scroll')
        }
        resetApplyScope();
    });

    // ÐÐ±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÐºÐ¾ÑÐ¿Ð°
    resetApplyScope = function() {
        $rootScope.$applyAsync();
    };
    // Ð ÐµÐ±ÑÐ¾Ð´ÐºÐ°ÑÑ Ð²Ð¾ Ð²ÑÐµ ÑÐºÐ¾ÑÐ¿Ñ
    $rootScope.$on('Rebroadcast', function(e, message, data) {
        //// console.log('Broadcast message: '+ message,data)
        $rootScope.$broadcast(message, data);
    });
    $rootScope.$on('overlord-bind', function(e, message, data) {
        overlord.bind(message, data);
    });
    // ÐÐ²ÐµÑÐ»Ð¾ÑÐ´ Ð¿ÑÐ¸ÐµÑÐ°Ð»Ð¸
    return GD;
}]);
