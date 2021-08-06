tassApp.controller('newsListController', function($scope, $rootScope, websocket, Overlord, $window, $sce, $http, $timeout) {
    $scope.lastTimestamp = 9999999999999999;
    $scope.excludeNewsIds = [];
    $scope.isMainPage = false;

    $scope.loadedNews = [];
    $scope.loading = false;
    var endOfList = false;

    $scope.loadIteration = 0;

    $scope.loadMoreNews = function(cb) {
        if ($scope.loading) { return false;}
        if ($scope.loadIteration){

            dataLayer.push({
                'event': 'eve-ev-infinite_scroll',
                'eventAction': $scope.loadIteration
            });
        }
        $scope.loadIteration++;
        var data = {
            'limit': 10,
            'excludeNewsIds': $scope.excludeNewsIds
        };

        if ($scope.lastTimestamp) {
            data.timestamp = $scope.lastTimestamp;
        }

        $scope.loading = true;
        var url = ($scope.isMainPage) ? '/userApi/mainPageNewsList' : '/userApi/newsList';
        $http.post(url, data).then(function(data) {
            $scope.loading = false;

            if (data.status == 200) {
                if (data.data.lastTime) {
                    $scope.lastTimestamp = data.data.lastTime;
                    $scope.loadedNews.push(data.data.newsList);

                    if (typeof(cb) === 'function') {
                        cb();
                    }
                } else {
                    endOfList = true;
                    $scope.showLoader = false;
                    $rootScope.footerHidden = false;
                }
            }

        });
    };

    $scope.firstLoad = function() {
        $scope.showLoader = true;
        $scope.hideLoadButton = true;
        $scope.loadMoreNews(function() {
            $rootScope.footerHidden = true;
            $timeout(function() {
                // console.log('init trigger');
                var scrollOpt1 = {
                    'type': 'scroll',
                    'params': {
                        'default': false,
                        'newsListEndpoint': true
                    },
                    'trigger': 'newsListEndpointCallback'
                };

                $scope.$on('newsListEndpointCallback', function(event, data) {
                    if (data & !$scope.loading & !endOfList) {
                        $scope.loadMoreNews(null, $scope.isMainPage);
                    }
                });

                $scope.$emit('overlord-bind', 'newsListLoadMore', scrollOpt1);
            }, 1000);
        });
    };

    $scope.getUrlTemplate = function(type) {
        return '/newtass/ng-templates/mainPage/' + type + '.html';
    };
    $scope.loadSpecialAdfox = function(tpl) {
        $timeout(function() {
            (function(w, n) {
                w[n] = w[n] || [];
                w[n].push({
                    ownerId: 255516,
                    containerId: tpl,
                    params: {
                        p1: 'bynrv',
                        p2: 'fsuc'
                    },
                    onStub: function() {
                        // console.log('empty ' + tpl);
                    }
                });
            })(window, 'adfoxAsyncParams');
        }, 500);

    }
    $scope.loadPartnersAdfox = function(tpl) {
        $timeout(function() {
            (function(w, n) {
                w[n] = w[n] || [];
                w[n].push({
                    ownerId: 255516,
                    containerId: tpl,
                    params: {
                        p1: 'bzaau',
                        p2: 'ftxv'
                    },
                    onStub: function() {
                        // console.log('empty ' + tpl);
                    }
                });
            })(window, 'adfoxAsyncParams');
        }, 500);
    }
});

tassApp.controller(
	'tagNewsList', 
	function( $scope, $rootScope, websocket, Overlord, $window, $sce, $http, $timeout ) {

		let noMoreData = false;

		$scope.loadedNews = [];
        $scope.emptyNewsList = false;
		$rootScope.footerHidden = false;
		$scope.loading = false;
		$scope.showLoader = false;
        $scope.filterType = 'all';
        $scope.filterList =  {
            'all': 'ÐÑÐµ Ð½Ð¾Ð²Ð¾ÑÑÐ¸',
            'default': 'ÐÐ¾Ð²Ð¾ÑÑÐ¸',
            'interview': 'ÐÐ½ÑÐµÑÐ²ÑÑ',
            'article': 'Ð¡ÑÐ°ÑÑÐ¸',
            'opinion': 'ÐÐ½ÐµÐ½Ð¸Ñ',
            'online': 'Ð¢ÑÐ°Ð½ÑÐ»ÑÑÐ¸Ð¸',
            'explainer': 'Ð­ÐºÑÐ¿Ð»ÐµÐ¹Ð½ÐµÑÑ',
            'official': 'ÐÐµÑÐ²ÑÐµ Ð»Ð¸ÑÐ°',
            'infographic' : 'ÐÐ½ÑÐ¾Ð³ÑÐ°ÑÐ¸ÐºÐ°'
        };
        $scope.filterOrder = ['all', 'default', 'interview', 'article', 'opinion', 'online', 'explainer', 'official','infographic'];
		$scope.hideLoadButton = false;
		$scope.loadIteration = 0;

		$scope.config = {
			"tagSlug":null,
			"limit":10,
			"excludeNewsIds":null,
			"lastTimestamp":null,
        };
        $scope.changeFilter = function(filterType){
            $scope.filterType = filterType;
            $scope.config.type = $scope.filterType;
            $scope.loading = false;
            $scope.loadedNews = [];
            $scope.tagListGroups = [];
            $scope.config.lastTimestamp = null;
            $scope.loadMoreNews(true);
        };
		
		$scope.loadMoreNews = function( firstLoad ) {
            if ($scope.loading)
                return false;
            if ($scope.loadIteration)
                dataLayer.push({
                    'event': 'eve-ev-infinite_scroll',
                    'eventAction': $scope.loadIteration
                });
            $scope.loadIteration++;
            $scope.loading = true;
            $scope.showLoader = true;
            $http.post('/userApi/tagNews', $scope.config).then(
                function(data) {
                    if (data.status == 200 && data.data) {
                        $scope.config.lastTimestamp = data.data.timestamp;
                        $scope.showLoader = false;
                        $scope.loadedNews.push(data.data.tagNews);
                        $rootScope.footerHidden = !data.data.listEnd;
                        $scope.loading = data.data.listEnd;
                        noMoreData = data.data.listEnd;

                        if ( firstLoad ) {
                            $scope.hideLoadButton = true;
                            let scrollOpt1 = {
                                'type': 'scroll',
                                'params': {
                                    'default': false,
                                    'newsListEndpoint': true
                                },
                                'trigger': 'newsListEndpointCallback'
                            };
                            $scope.$on(
                                'newsListEndpointCallback',
                                function( event, data ) { if ( data && !$scope.loading ) $scope.loadMoreNews() }
                            );
                            $scope.$emit( 'overlord-bind', 'newsListLoadMore', scrollOpt1 );
                        }
                    } else{
                        noMoreData = false;
                        $rootScope.footerHidden = false;
                        $scope.showLoader = false;

                        if (firstLoad){
                            $scope.emptyNewsList = true;
                        }
                    }
                }
            );
        };

		$scope.firstLoad = function( tagSlug ) {
			$scope.config.tagSlug = tagSlug;
			$scope.loadMoreNews( true );
        };
		
		$scope.getUrlTemplate = function( type ) {
			return '/newtass/ng-templates/mainPage/' + type + '.html';
		};

		$scope.loadSpecialAdfox = function( tpl ) {
			$timeout( function() {
				( function( w, n ) {
					w[n] = w[n] || [];
					w[n].push( { 
							ownerId: 255516, 
							containerId: tpl, 
							params: { 
								p1: 'bynrv', 
								p2: 'fsuc' 
								}, 
							onStub: function() {
								// console.log('empty ' + tpl);
								}
						} );
					} )( window, 'adfoxAsyncParams' );
				}, 
				500
				);
			}
		$scope.loadPartnersAdfox = function(tpl) {
			$timeout( function() {
				( function( w, n ) {
					w[n] = w[n] || [];
					w[n].push( {
						ownerId: 255516,
						containerId: tpl,
						params: {
							p1: 'bzaau',
							p2: 'ftxv'
							},
						onStub: function() {
							// console.log('empty ' + tpl);
							}
						} );
					} )( window, 'adfoxAsyncParams' );
				}, 
				500
            );
        }
    }
);
