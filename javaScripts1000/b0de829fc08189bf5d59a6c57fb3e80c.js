let advertising = {};
tassApp.factory('advertising', function($window, $rootScope, $timeout, $interval) {

    $rootScope.initBanners = [];
    advertising.globalPuids = null;
    advertising.globalMedia = {
        tabletWidth: 1020,
        phoneWidth: 680,
        isAutoReloads: false
    }

    advertising.config = {
        "970x250_1": {
            "iteration": 0,
            "id": "970x250_1",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbuys",
                        "p2": "gcah",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "970x250_inline": {
            "iteration": 0,
            "id": "970x250_inline",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "chpkr",
                        "p2": "gcah",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "300x600_1": {
            "iteration": 0,
            "id": "adfox_sidebar",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbufy",
                        "p2": "gbws",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "300x600_1_tablet": {
            "iteration": 0,
            "id": "adfox_sidebar_tablet",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbufy",
                        "p2": "gbws",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "300x600_inline": {
            "iteration": 0,
            "id": "300x600_inline",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbuyw",
                        "p2": "gbws",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "300x250_tgb": {
            "iteration": 0,
            "id": "300x250_tgb",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbvgf",
                        "p2": "gcbv",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "ad_desk_anons_main": {
            "iteration": 0,
            "id": "ad_desk_anons_main",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "bzaam",
                        "p2": "ftxt",
                    },
                    "screens": ['desktop', 'tablet', 'phone']
                }
            }
        },
        "exchange-dzen": {
            "iteration": 0,
            "id": "exchange-dzen",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline no-padding" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "ceksu",
                        "p2": "y",
                    },
                    "screens": ['desktop', 'tablet', 'phone']
                }
            }
        },
        "exchange-others": {
            "iteration": 0,
            "id": "exchange-others",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline no-padding" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cfjzf",
                        "p2": "y",
                    },
                    "screens": ['desktop', 'tablet', 'phone']
                }
            }
        },
        "exchange-vertical": {
            "iteration": 0,
            "id": "exchange-vertical",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "ceksw",
                        "p2": "gbws",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        },
        "320x100": {
            "iteration": 0,
            "id": "320x100",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbvlv",
                        "p2": "gcce",
                    },
                    "screens": ['tablet', 'phone']
                }
            }
        },
        "300x250_mob": {
            "iteration": 0,
            "id": "300x250_mob",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="fox-inline" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cbvlw",
                        "p2": "gcbv",
                    },
                    "screens": ['tablet', 'phone']
                }
            }
        },
        "adfox_floorad_desktop": {
            "iteration": 0,
            "id": "adfox_floorad_desktop",
            "adfoxData": function () {
                return {
                    "iteration": this.iteration,
                    "id": advertising.getBannerId(this.id, this.iteration),
                    "template": '<div class="adfox_floorad_desktop" id="' + advertising.getBannerId(this.id, this.iteration) + '"></div>',
                    "params": {
                        "p1": "cjbav",
                        "p2": "gmhm",
                    },
                    "screens": ['desktop', 'tablet']
                }
            }
        }
    };


    advertising.refreshData = {};

    advertising.getBannerId = function(id, iteration) {
        return iteration === 1 ? id : id + "_" + iteration;
    }

    advertising.getBannerCode = function(id) {
        if (advertising.config[id]) {
            advertising.config[id].iteration++;
            return advertising.config[id].adfoxData();
        }
        return false;
    };

    advertising.setGlobalPuids = function(dev, news) {
        function isDev(dev) {
            return dev !== 'production';
        }
        function isNews(news) {
            return news === "news-page";
        }
        function getUrl() {
            return window.location.pathname === '/' ? 'home' : window.location.pathname;
        }
        function isAdblock() {
            return !window.adfoxAsyncParams;
        }
        return {
            puid1: isDev(dev), // developer
            puid2: 'ru', // lang
            puid3: isNews(news), // news
            puid4: getUrl(), // url
            puid5: isAdblock(), // AdBlock
        };
    }


    advertising.initSlot = function(config, bannerID) {
        /** ???????????????????? ???????????????????????? ???? ???????????????? ???? ???????????????????????? ???? ???????????????????????????????????????????????? ????????????????????????????????????, ???????????????? ???????????????????????? ???????????? ???????????? */
        if ($rootScope.initBanners.indexOf(config.id) == -1){
            $rootScope.initBanners.push(config.id);
            advertising.refreshData[config.id] = {'time': 15000};
        }
        if (config.iteration === 1) {
            /** ???????????????????????????? ???????????????????????????????????????? ???????????????????????? */
            advertising.createSimple(config);
        } else {
            /** ???????????????????????????? ???????????????????????????????????????????? ???????????????????????? */
            advertising.createScroll(config, bannerID);
        }

    };

    advertising.createSimple = function (config) {
        /*   start object.assign polyfill  */
        if (!Object.assign) {
            Object.defineProperty(Object, 'assign', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function(target, firstSource) {
                    'use strict';
                    if (target === undefined || target === null) {
                        throw new TypeError('Cannot convert first argument to object');
                    }

                    var to = Object(target);
                    for (var i = 1; i < arguments.length; i++) {
                        var nextSource = arguments[i];
                        if (nextSource === undefined || nextSource === null) {
                            continue;
                        }

                        var keysArray = Object.keys(Object(nextSource));
                        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                            var nextKey = keysArray[nextIndex];
                            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== undefined && desc.enumerable) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                    return to;
                }
            });
        }
        /*   end object.assign polyfill  */

        var $container = document.getElementById(config.id);
        var params = {};
        Object.assign(params, config.params);
        Object.assign(params, advertising.globalPuids);
        if(window.Ya && window.Ya.adfoxCode){
            if(window.Ya.adfoxCode.createAdaptive){

                window.Ya.bannersList = window.Ya.bannersList || [];
                window.Ya.bannersList.push({
                    containerId: $container,
                    params: params
                });

                window.Ya.adfoxCode.createAdaptive({
                    ownerId: 255516,
                    containerId: config.id,
                    params: params,

                    onLoad: function(data) {},
                    onRender: function() {
                        $container.classList.add('banner__enabled');
                    },
                    onError: function(error) {},
                    onStub: function() {}
                }, config.screens, advertising.globalMedia)
            }
        }
    }

    advertising.createScroll = function (config, bannerID) {
        var $container = document.getElementById(config.id);
        var params = {};
        Object.assign(params, config.params);
        Object.assign(params, advertising.globalPuids);

        var hbItems = window.YaHeaderBiddingSettings.adUnits.filter(function (el) {
            return el.code === bannerID
        });

        if (hbItems.length) {
            if(window.Ya && window.Ya.headerBidding){
                if(window.Ya.headerBidding.hasOwnProperty('pushAdUnits')){
                    window.Ya.headerBidding.pushAdUnits([
                        {
                            code: config.id,
                            sizes: hbItems[0].sizes,
                            bids: hbItems[0].bids
                        }
                    ]);
                }
            }
        }


        if( window.Ya && window.Ya.adfoxCode){
            if(window.Ya.adfoxCode.hasOwnProperty('create')){

                window.Ya.bannersList = window.Ya.bannersList || [];
                window.Ya.bannersList.push({
                    containerId: $container,
                    params: params
                });

                window.Ya.adfoxCode.create({
                    ownerId: 255516,
                    containerId: config.id,
                    params: params,

                    onLoad: function(data) {},
                    onRender: function() {
                        $container.classList.add('banner__enabled');
                    },
                    onError: function(error) {},
                    onStub: function() {}
                }, config.screens, advertising.globalMedia);
            }
        }
    };


    return advertising
});
tassApp.directive('banner', function() {
    return {
        restrict: 'E',

        controller:['$scope',"$element","advertising","Overlord", '$timeout',function MyTabsController($scope,$element,advertising,Overlord, $timeout) {

            /** ???????????????????? ???????????????????????????????????????????? ???????????????????????????????????? ???????????????????????????????????????????????? ???? ???????????????????????????????????? */
            var bannerID = $element[0].getAttribute('bannerID'), // bannerID ???????? ???????????????????????????????? ???????????????????????????? ???????????????????????????????????? ???????? ????????????????????
                pageType = $element[0].getAttribute('pageType'), // ???????????????????????????????????????? ????????????????????????????/???????? ????????????????????????????
                envType = $element[0].getAttribute('envType'); // ???????????????????????????????????????? ???????????????????????????????????? - dev ???????????? ???????? ???????? dev

            if (!advertising.globalPuids) {
                advertising.globalPuids = advertising.setGlobalPuids(envType, pageType)
            }

            /** ???????????????????????????????????? ???????????????????????? ???????????????????????????????????? ???????????????????????????? */
            var config = advertising.getBannerCode(bannerID); //adfoxData

            /** ???????????????????????????????? ???????????????????????????????????? ???????? ???????????????????????? ???????? ???????????????????? */
            $element.replaceWith(config.template);

            /** ???????????????????????????????????????????????????????? ???????????????????????? */
            advertising.initSlot(config, bannerID);
        }],
    };
});
