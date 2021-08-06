let getTimeFromTimeStamp;
tassApp.controller('contentList', function($scope, $rootScope, $timeout, $http, $element, Overlord,genDateTS, $window) {
    let load = true;
    $scope.newsListCount = 1;
    $scope.newsListLimit = 12;
    $scope.materialNewsList = [];
    $scope.superRubricSlug = '';

    $scope.getRecommendedNews = function() {
        var ids = $scope.getIdsList();
        $http.post('/userApi/recommendedNews', {
            ids: ids,
            isScience: checkIfSuperRubric()
        }).then(function (res) {
            if (res.data) {
                $scope.materialNewsList = res.data;
            }
        }).catch(function (error) {
            return console.error('getRecommendedNews()', error);
        });
    };

    $scope.getUrlTemplate = function(folder, type) {
        return '/newtass/ng-templates/' + folder + '/' + type + '.html';
    };

    $scope.getIdsList = function(){
        const localIdsRecords = localStorage.getItem('Rec');
        return localIdsRecords ? localIdsRecords.split(',') : [];
    };

    $scope.firstInit = function (superSlug) {
        $scope.superRubricSlug = superSlug;
        $timeout(function () {
            const isElem = document.getElementById("contentListMore");
            if (isElem) {
                var scrollOpt = {
                    'type': 'scroll',
                    'params': {
                        'default': false,
                        'contentListMore': true
                    },
                    'trigger': 'contentList-loadMore'
                };
                $rootScope.$emit("overlord-bind",'loadMoreContentNews', scrollOpt);
                $scope.$on('contentList-loadMore', function (event, data) {
                    if (data) {
                        $scope.loadNews();
                    }
                })
                var resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(resizeEvent);
            }
        }, 2000);

        getTimeFromTimeStamp = function(date) {
            return genDateTS(date,'abs',240);
        };
    };
    $scope.init = function (d,t) {
        if(t.indexOf('yandex')!==-1) {
            $scope.yandexZenInit(d);
        }
    };
    $scope.yandexZenInit = function(d) {
        (function(w, n) {
            w[n] = w[n] || [];
            let h = [];
            w[n].push(function() {
                w.YandexZen.renderWidget({
                    clid: ['448', '449'], // Ð¸Ð´ÐµÐ½ÑÐ¸ÑÐ¸ÐºÐ°ÑÐ¾Ñ Ð¿Ð°ÑÑÐ½ÐµÑÐ°, Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±ÑÑÑ Ð¿Ð¾Ð»ÑÑÐµÐ½ Ð² Ð¿ÑÐ½ÐºÑÐµ 2
                    container: '.widget-container'+d, // cÐµÐ»ÐµÐºÑÐ¾Ñ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð¸Ð»Ð¸ ÑÐ°Ð¼ ÑÐ»ÐµÐ¼ÐµÐ½Ñ, ÐºÑÐ´Ð° Ð½Ð°Ð´Ð¾ Ð²ÑÑÐ°Ð²Ð¸ÑÑ Ð²Ð¸Ð´Ð¶ÐµÑ
                    successCallback: function () { // Ð²ÑÐ·ÑÐ²Ð°ÐµÑÑÑ Ð¿ÑÐ¸ ÑÑÐ¿ÐµÑÐ½Ð¾Ð¹ Ð²ÑÑÐ°Ð²ÐºÐµ Ð²Ð¸Ð´Ð¶ÐµÑÐ°
                    },
                    failCallback: function () { // Ð²ÑÐ·ÑÐ²Ð°ÐµÑÑÑ Ð¿ÑÐ¸ Ð½ÐµÑÑÐ¿ÐµÑÐ½Ð¾Ð¹ Ð²ÑÑÐ°Ð²ÐºÐµ Ð²Ð¸Ð´Ð¶ÐµÑÐ°
                    }
                });
            });
        })(window, 'yandexZenAsyncCallbacks');
    };
    $rootScope.footerHidden = true;
    $scope.loadNews = function() {
        if (load) {
            load = false;
            if ($scope.newsListCount< $scope.newsListLimit){

                dataLayer.push({
                    'event': 'eve-ev-infinite_scroll',
                    'eventAction': $scope.newsListCount
                });

                $scope.newsListCount = $scope.newsListCount + 1;
            } else {
                $scope.newsListCount = $scope.newsListLimit;
            }
            $rootScope.footerHidden =  $scope.newsListCount != $scope.newsListLimit;

            $timeout(function() {
                load = true;
            },100);
        }
    };

    function checkIfSuperRubric() {
        return $scope.superRubricSlug  === 'nauka';
    }
});
