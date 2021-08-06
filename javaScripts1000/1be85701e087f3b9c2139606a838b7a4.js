angular
    .module('tassApp')
    .directive('adfoxInlineDirective', function () {
        return {
            restrict: 'AEC',
            template: '<div id="ad-container-div"></div>',
            link: function ($scope, $element, $attrs) {

                function collectPUIDs(attrs) {
                    var puids = {
                        p1: attrs.ngP1,
                        p2: attrs.ngP2,
                        pp: attrs.ngPP,
                        ps: attrs.ngPS,

                        puid1: isDev(attrs), // developer
                        puid2: 'ru', // lang
                        puid3: isNews(attrs.ngType), // news
                        puid4: getUrl(), // url
                        puid5: isAdblock(), // AdBlock
                    };
                    return puids;
                }

                function isDev(attrs) {
                    return attrs.ngDev !== 'production';
                }

                function isNews(attr) {
                    return attr === "news-page";
                }

                function getUrl() {
                    return window.location.pathname === '/' ? 'home' : window.location.pathname;
                }

                function isAdblock() {
                    return !window.adfoxAsyncParams;
                }


                function initBanner () {
                    var randomId = "fox-inline_" + parseInt(Math.random() * 10000000000);
                    var $container = $element[0];
                    var $div = $container.querySelector('#ad-container-div');

                    $div.id = randomId;
                    if(window.Ya && window.Ya.adfoxCode){
                        if(window.Ya.adfoxCode.create){

                            window.Ya.bannersList = window.Ya.bannersList || [];
                            window.Ya.bannersList.push({
                                containerId: $div,
                                params: collectPUIDs($attrs)
                            });

                            window.Ya && window.Ya.adfoxCode && window.Ya.adfoxCode.create({
                                ownerId: 255516,
                                containerId: randomId,
                                params: collectPUIDs($attrs),

                                onLoad: function(data) {
                                    /*
                                    * ÐÑÐ·ÑÐ²Ð°ÐµÑÑÑ, ÐºÐ¾Ð³Ð´Ð° Ð¿Ð¾Ð»ÑÑÐµÐ½ Ð¾ÑÐ²ÐµÑ Ð·Ð° Ð·Ð°Ð¿ÑÐ¾Ñ Ð¸ Ð² Ð¾ÑÐ²ÐµÑÐµ Ð¿ÑÐ¸ÑÑÑÑÑÐ²ÑÐµÑ Ð¾Ð±ÑÐµÐºÑ
                                    * window.loadAdFoxBundle.
                                    * ÐÑÐ·ÑÐ²Ð°ÐµÑÑÑ Ð´Ð¾ onRender.
                                    */
                                },
                                onRender: function() {
                                    /*
                                    * ÐÑÐ·ÑÐ²Ð°ÐµÑÑÑ, ÐºÐ¾Ð³Ð´Ð° ÐºÐ¾Ð´ Ð±Ð°Ð½Ð½ÐµÑÐ° Ð¸Ð»Ð¸ Ð±Ð°Ð½Ð½ÐµÑÐ° Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ (Ð·Ð°Ð´Ð°Ð½Ð½ÑÐ¹ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»ÐµÐ¼)
                                    * Ð±ÑÐ» Ð²ÑÑÐ°Ð²Ð»ÐµÐ½ Ð² ÐºÐ¾Ð½ÑÐµÐ¹Ð½ÐµÑ.
                                    */
                                    $element[0].classList.add('banner__enabled');
                                },
                                onError: function(error) {
                                    /*
                                    * ÐÑÐ·ÑÐ²Ð°ÐµÑÑÑ, ÐµÑÐ»Ð¸ Ð² ÑÐ¾Ð´Ðµ Ð²ÑÐ¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Ð·Ð°Ð¿ÑÐ¾ÑÐ° Ð±ÑÐ»Ð° Ð¿Ð¾Ð»ÑÑÐµÐ½Ð° ÑÐµÑÐµÐ²Ð°Ñ Ð¾ÑÐ¸Ð±ÐºÐ°
                                    * (Ð½Ð°Ð¿ÑÐ¸Ð¼ÐµÑ, 404) Ð¸Ð»Ð¸ Ð¶Ðµ ÐºÐ¾Ð´ Ð±Ð°Ð½Ð½ÐµÑÐ° ÑÐ¾Ð´ÐµÑÐ¶Ð¸Ñ ÑÐ¸Ð½ÑÐ°ÐºÑÐ¸ÑÐµÑÐºÑÑ Ð¾ÑÐ¸Ð±ÐºÑ.
                                    */
                                },
                                onStub: function() {
                                    /*
                                    * ÐÑÐ·ÑÐ²Ð°ÐµÑÑÑ, ÐºÐ¾Ð³Ð´Ð° ÑÐµÑÐ²ÐµÑ Ð²ÐµÑÐ½ÑÐ» Ð·Ð°Ð³Ð»ÑÑÐºÑ (ÑÐ¸ÑÑÐµÐ¼Ð½ÑÐ¹ ÐºÐ¾Ð´),
                                    * ÐºÐ¾Ð½ÑÐµÐ¹Ð½ÐµÑ Ð¾ÑÑÐ°Ð»ÑÑ Ð¿ÑÑÑÑÐ¼
                                    */
                                }
                            });
                        }}
                }

                initBanner();

            }
        };
    });
