tassApp.controller('newsFeedController', function($scope, $rootScope, websocket, centrifuge, Overlord, $window, $sce, $filter, $http, $timeout, $cookies, $interval) {
    Overlord.variable.newsfeed = {
        'isOpened': false,
        'count': 0
    };

    $scope.ieOption = !!(window.navigator.userAgent).match(/(trident\/7)/i);
    $scope.media = {
        'md': [960, 1300],
        'lg': [1280, 1620],
        'xl': [1360, 1960]
    };
    /** ÑÐºÐ¾Ð»ÑÐºÐ¾ Ð±ÑÐ»Ð¾ Ð½Ð° Ð¿ÑÐµÐ´Ð·Ð°Ð³ÑÑÐ¶ÐµÐ½Ð½Ð¾Ð¹ ÑÑÑÐ°Ð½Ð¸ÑÐµ */
    const newsListCounterCookies = $cookies.get('newsListCounter');
    const superRubricCounterCookies = $cookies.get('superRubricNewsCounter');
    let startNewsListCounter = newsListCounterCookies ? parseInt(newsListCounterCookies) : 0;
    let superRubricNewsCounter = superRubricCounterCookies ? parseInt(superRubricCounterCookies) : 0;
    let initiatorForUpdate = false;
    let newsListCounterInterval = false;
    let windowIsFocusedInterval = false;
    let isWeOnSuperRubric = false;

    $scope.init = function(initData) {
      if ($scope.ieOption) { return; }

      var isMobile = initData.isMobile;
      isWeOnSuperRubric = initData.isWeOnSuperRubric;
      window.localStorage.setItem("newsfeedupdate",'0');

      if (
        (window.innerWidth > 1700 && window.localStorage.getItem("newsfeed") !== '0'
          || window.innerWidth < 1700 && window.localStorage.getItem("newsfeed") === '1')
        && !isMobile
      ) {
        const windowIsFocused = (document.visibilityState === 'visible');
        $scope.$emit('Rebroadcast', 'toggleNewsFeed', {'isOpened': true});

        if (windowIsFocused) {
          $scope.changeNewsFeedCounter(0, true, true);
        } else {
          $scope.changeNewsFeedCounter(0, false, true);
          //ÐµÑÐ»Ð¸ Ð¾ÐºÐ½Ð¾ Ð½Ðµ Ð² ÑÐ¾ÐºÑÑÐµ, Ð½Ðµ Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÑÐµÐ¼ Ð¿ÑÑ Ð½Ð° Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð»ÐµÐ½ÑÑ Ð½Ð° Ð²ÑÐµÑ ÑÑÑÐ°Ð½Ð¸ÑÐ°Ñ
          windowIsFocusedInterval = $interval(function() {
            if (document.visibilityState === 'visible') {
              $scope.loadmessages(true);
              $interval.cancel(windowIsFocusedInterval);
            }
          }, 1000);
        }
      } else {
        $scope.changeNewsFeedCounter(0, false, true);
      }

      $scope.getOldMessage().then(function(data){
        data.forEach(function(item){return $scope.addToNewsFeed(item);});
        $scope.$digest();
      });

      const container = document.getElementById('news-feed-content');
      const containerEndPoint = document.getElementById('news-feed-endpoint');
      if (container && containerEndPoint) {
        container.onscroll = function() {
          if (containerEndPoint.getBoundingClientRect().top < 0 && !$scope.loading) {
            $scope.loadMore();
          }
        };
      }
    };

    $scope.getNewsFeedCounter = function(){
        return $scope.newsFeedCounter >= 100
          ? '99+ Ð½Ð¾Ð²ÑÑ'
          : $scope.newsFeedCounter ? '+' + $scope.newsFeedCounter + ' Ð½Ð¾Ð²ÑÑ' : '';
    };

    $scope.changeNewsFeedCounter = function(count, newsFeedNeedUpdate, isInit){
        if (count === 0) {
            if (isInit) {
                $scope.newsFeedCounter = startNewsListCounter + count;
                /** Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÐ¼ ÑÑÐµÑÑÐ¸Ðº Ð´Ð»Ñ ÑÐ»ÐµÐ´. ÑÑÑÐ°Ð½Ð¸Ñ */
                putCookie('newsListCounter', $scope.newsFeedCounter);
                /** ÑÐµÑÐµÐ· 5 Ð¼Ð¸Ð½ÑÑ */
                newsListCounterInterval = $interval(function(){
                    putCookie('newsListCounter', $scope.newsFeedCounter);
                }, 300000);
                $timeout(function(){return $scope.$emit('Rebroadcast','initNewsFeedCounter', $scope.newsFeedCounter);});
            } else {
                $timeout(function(){return $scope.$emit('Rebroadcast', 'changeNewsFeedCounter', 0);});
            }

            if (newsFeedNeedUpdate) {
                // Ð²ÑÐµ Ð½Ð¾Ð²Ð¾ÑÑÐ¸ Ð¿Ð¾Ð´Ð³ÑÑÐ·Ð¸Ð»Ð¸, ÑÐ±ÑÐ°ÑÑÐ²Ð°ÐµÐ¼ Ð²ÑÐµ ÑÑÐµÑÑÐ¸ÐºÐ¸
                startNewsListCounter = 0;
                $scope.newsFeedCounter = 0;
                $cookies.remove('newsListCounter',{'path': '/'});
                $interval.cancel(newsListCounterInterval);

                // Ð½ÑÐ¶Ð½Ð¾ Ð½Ð° Ð²ÑÐµÑ ÑÑÑÐ°Ð½Ð¸ÑÐ°Ñ ÑÐ±ÑÐ¾ÑÐ¸ÑÑ ÑÑÐµÑÑÐ¸Ðº Ð¸ Ð²ÑÐ¿Ð¾Ð»Ð½Ð¸ÑÑ Ð¿Ð¾Ð´Ð³ÑÑÐ·ÐºÑ
                initiatorForUpdate = true; // ÑÑÐ° ÑÑÑÐ°Ð½Ð¸ÑÐ° Ð¸Ð½Ð¸ÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¾Ñ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ

                window.localStorage.setItem("newsfeedupdate",'1'); // Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÑÐµÐ¼ Ð¿ÑÑ Ð²ÑÐµÐ¼ ÑÑÑÐ°Ð½Ð¸ÑÐ°Ð¼ Ð½Ð° Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð»ÐµÐ½ÑÑ

            } else {
                if (!isInit) {
                    startNewsListCounter = 0;
                    $scope.newsFeedCounter = 0;
                    $scope.$emit('Rebroadcast', 'changeNewsFeedCounter', $scope.newsFeedCounter);
                }
            }
        } else {
            $scope.newsFeedCounter = startNewsListCounter + count;
            /** Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÐ¼ ÑÑÐµÑÑÐ¸Ðº Ð´Ð»Ñ ÑÐ»ÐµÐ´. ÑÑÑÐ°Ð½Ð¸Ñ */
            putCookie('newsListCounter', $scope.newsFeedCounter);
            /** ÑÐµÑÐµÐ· 5 Ð¼Ð¸Ð½ÑÑ */
            newsListCounterInterval = $interval(function(){
                putCookie('newsListCounter', $scope.newsFeedCounter);
            }, 300000);
            $scope.$emit('Rebroadcast', 'changeNewsFeedCounter', $scope.newsFeedCounter);
        }
    };

    /** ÑÐ¿Ð¸ÑÐ¾Ðº Ð½Ð¾Ð²Ð¾ÑÑÐµÐ¹ Ð´Ð»Ñ Ð¿Ð¾Ð´Ð³ÑÑÐ·ÐºÐ¸ Ð¿Ð¾ ÐºÐ½Ð¾Ð¿ÐºÐµ */
    $scope.newsListForLoad = [];

    $scope.$on('toggleNewsFeed', function(e, data) {
        $scope.isOpened = data.isOpened;
        Overlord.variable.newsfeed.isOpened = data.isOpened;

        if (data.isOpened && (document.visibilityState === 'visible')){
            $scope.loadmessages(true);
        }

        // Ð¼ÐµÐ½ÑÐµÐ¼ ÑÑÐ¸Ð»Ð¸
        for (var key in $scope.media) {
            var link = document.getElementById('css-' + key);

            if (link) {
                link.setAttribute('media', 'only screen and (min-width: ' + $scope.media[key][Overlord.variable.newsfeed.isOpened ? 1 : 0] + 'px)');
            }
        }
    });

    $scope.closeNewsFeed = function() {
        $scope.isOpened = false;
        Overlord.variable.newsfeed.isOpened = false;
        window.localStorage.setItem("newsfeed",'0');
        $scope.$emit('Rebroadcast', 'toggleNewsFeed', { 'isOpened': false });
        //Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÑÐµÐ¼ ÑÐ¾Ð±ÑÑÐ¸Ðµ Ð½Ð° Ð¿ÐµÑÐµÐ¿Ð¾Ð´ÐºÐ»ÑÑÐµÐ½Ð¸Ðµ ÑÑÐ¸Ð»ÐµÐ¹
    };

    $scope.loading = false;
    $scope.isOpened = false;
    /** timestamp Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÑÐµÐ¼ Ð±ÐµÐ· Ð¼Ð¸Ð»Ð¸ÑÐµÐºÑÐ½Ð´ Ð¸ Ð¾ÐºÑÑÐ³Ð»ÑÐµÐ¼ Ð´Ð¾ 0 Ð² ÐºÐ¾Ð½ÑÐµ unixtime */
    $scope.loadConfig = {
        limit: 50,
        timestamp: Math.floor((new Date().getTime() / 1000) / 10) * 10
    };
    $scope.newsFeed = {};
    /** ÑÑÐ°Ð½Ð¸Ñ Ð´Ð°ÑÑ Ð½Ð¾Ð²Ð¾ÑÑÐ¸ (Ð¿Ð¾ id) Ð´Ð»Ñ Ð±ÑÑÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð¸ÑÐºÐ° */
    $scope.dayByNewsId = {};

    /** Ð¿Ð¾Ð´Ð³ÑÑÐ·ÐºÐ° Ð»ÐµÐ½ÑÑ */
    $scope.getOldMessage = function() {
        return new Promise(function(resolve){
            let newConf = Object.assign($scope.loadConfig);
            newConf.isNauka = isWeOnSuperRubric;
            $http
                .post('/userApi/getNewsFeed', newConf)
                .then(function(res){
                    $scope.loadConfig.timestamp = res.data.lastTime;
                    resolve(res.data.newsList);
                })
                .catch(function(error){return console.error('Error in getOldMessage method in newsfeedController', error);});
        });
    };

    /** Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð² Ð»ÐµÐ½ÑÑ */
    $scope.addToNewsFeed = function(item) {
        /** Ð¿Ð¾Ð»ÑÑÐ°ÐµÐ¼ Ð´Ð°ÑÑ Ð¸Ð· api Ð¸ Ð¿ÑÐ¸Ð²Ð¾Ð´Ð¸Ð¼ Ðº ÑÑÐ°Ð½Ð´Ð°ÑÑÐ½Ð¾Ð¼Ñ Ð²Ð¸Ð´Ñ */
        const date = new Date(item.date * 1000);
        /** ÑÐ´Ð°Ð»ÑÐµÐ¼ Ð¸Ð· Ð´Ð°ÑÑ Ð·Ð½Ð°ÑÐµÐ½Ð¸Ñ ÑÐ°ÑÐ¾Ð², Ð¼Ð¸Ð½ÑÑ, ÑÐµÐºÑÐ½Ð´ */
        date.setHours(0, 0, 0, 0);
        /** Ð²ÑÐµ Ð½Ð¾Ð²Ð¾ÑÑÐ¸ Ð±ÑÐ´ÑÑ ÑÐ³ÑÑÐ¿Ð¿Ð¸ÑÐ¾Ð²Ð°Ð½Ñ Ð¿Ð¾ Ð´Ð½ÑÐ¼ (ÐºÐ»ÑÑ dayKey), Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð¾Ñ ÑÐ¾ÑÐ½Ð¾Ð³Ð¾ Ð²ÑÐµÐ¼ÐµÐ½Ð¸ Ð¿ÑÐ±Ð»Ð¸ÐºÐ°ÑÐ¸Ð¸ */
        const dayKey = date.getTime();

        /** ÐµÑÐ»Ð¸ ÑÐ°ÐºÐ¾Ð³Ð¾ Ð´Ð½Ñ ÐµÑÐµ Ð½ÐµÑ */
        $scope.newsFeed[dayKey] = $scope.newsFeed[dayKey] || {};

        const newsFeedDay = $scope.newsFeed[dayKey];
        /** Ð³ÑÑÐ¿Ð¿Ð¸ÑÑÐµÐ¼ Ð½Ð¾Ð²Ð¾ÑÑÐ¸ Ð¿Ð¾ Ð´Ð½ÑÐ¼ Ð¸ Ð·Ð°Ð½Ð¾ÑÐ¸Ð¼ Ð² newsFeed Ñ ÐºÐ»ÑÑÐ¾Ð¼ id */
        newsFeedDay[item.id] = item;
        /** ÑÐ¾ÑÑÐ°Ð½ÑÐµÐ¼ Ð·Ð½Ð°ÑÐµÐ½Ð¸Ðµ Ð´Ð°ÑÑ Ð² ÐºÐ°Ð¶Ð´Ð¾Ð¼ Ð¸Ð· Ð´Ð½ÐµÐ¹ */
        newsFeedDay.date = dayKey;

        /** ÑÑÐ°Ð½Ð¸Ñ Ð´Ð°ÑÑ Ð½Ð¾Ð²Ð¾ÑÑÐ¸ (Ð¿Ð¾ id) Ð´Ð»Ñ Ð±ÑÑÑÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð¸ÑÐºÐ° */
        $scope.dayByNewsId[item.id] = dayKey;
    };

    /** Ð¿Ð¾Ð´Ð³ÑÑÐ·ÐºÐ° Ð½Ð¾Ð²Ð¾ÑÑÐµÐ¹ */
    $scope.loadMore = function(){
        if ($scope.loading) return;
        $scope.loading = true;
        $scope.getOldMessage().then(function(data){
            data.forEach(function(item){return $scope.addToNewsFeed(item);});
            $timeout(function(){$scope.loading = false;}, 1000);
        });
    };

    /** Ð Ð°Ð±Ð¾ÑÐ° Ñ Ð¿ÑÑÐ°Ð¼Ð¸ */

    /** ÐÐ¾Ð´Ð¿Ð¸ÑÐºÐ° Ð½Ð° ÑÐ¾Ð±ÑÑÐ¸Ñ Ð¸Ð· centrifuge */
    if (!$scope.ieOption) { centrifuge.subscribe("newsFeed"); }

    /** ÐÐ±ÑÐ°Ð±Ð¾ÑÐºÐ° ÑÐ¾Ð±ÑÑÐ¸Ð¹ Ð¸Ð· centrifuge */
    $scope.$on('newsFeed', function(e, message) {
        const itemData = message.data.message;

        /** ÐÐµ Ð²ÑÐ²Ð¾Ð´Ð¸ÑÑ ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ðµ, ÐµÑÐ»Ð¸ Ð¼Ñ Ð² ÑÑÐ±ÑÐ¸ÐºÐµ ÐÐ°ÑÐºÐ° Ð½Ð¾ Ð½Ð¾Ð²Ð¾ÑÑÑ ÐÐ Ð¾ÑÐ½Ð¾ÑÐ¸ÑÑÑ Ðº ÐÐ°ÑÐºÐµ */
        if (isWeOnSuperRubric && itemData.theme !== 'nauka') return;

        switch(message.data.type) {
            case 'create':
                $scope.addmessage(itemData);
                break;
            case 'update':
                $scope.updatemessage(itemData);
                break;
            case 'delete':
                $scope.deletemessage(itemData);
                break;
        }
        $scope.$apply();
    });

    /** ÐÐ¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ Ð¾ Ð½Ð¾Ð²ÑÑ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð°Ñ Ð² ÐÐ¸Ð²Ð¾Ð¹ Ð»ÐµÐ½ÑÐµ
     * Ð¿ÑÐ¸ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ð¸ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð° Ð² Ð°Ð´Ð¼Ð¸Ð½ÐºÐµ, Ð¿ÑÐ¸ÑÐ¾Ð´Ð¸Ñ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ
     * ÐµÑÐ»Ð¸ ÐÐ¸Ð²Ð°Ñ Ð»ÐµÐ½ÑÐ° Ð¾ÑÐºÑÑÑÐ°, ÑÐ¾ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÑÑÑ ÐºÐ½Ð¾Ð¿ÐºÐ° .news-feed-btn
     * ÐµÑÐ»Ð¸ Ð·Ð°ÐºÑÑÑÐ°, ÑÐ¾ Ð² ÐÑÐ»ÑÑÐµ Ð¿ÑÐ¾Ð¸ÑÑÐ¾Ð´Ð¸Ñ Ð°Ð½Ð¸Ð¼Ð°ÑÐ¸Ñ Ð¸ ÑÑÐµÑÑÐ¸Ðº ÑÐ²ÐµÐ»Ð¸ÑÐ¸Ð²Ð°ÐµÑÑÑ Ð½Ð° ÐµÐ´Ð¸Ð½Ð¸ÑÑ
     */
    $scope.addmessage = function(item) {
        /** ÐµÑÐ»Ð¸ Ð½Ð¾Ð²Ð¾ÑÑÑ Ð² ÑÐ°Ð¼ÐºÐ°Ñ Ð´Ð°Ñ Ð·Ð°Ð³ÑÑÐ¶ÐµÐ½Ð½ÑÑ Ð½Ð¾Ð²Ð¾ÑÑÐµÐ¹ Ð¸ ÑÑÐ¾Ð¸Ñ Ð³Ð°Ð»Ð¾ÑÐºÐ° "ÐÐ¾ÐºÐ°Ð·ÑÐ²Ð°ÑÑ Ð² Ð»ÐµÐ½ÑÐµ Ð½Ð¾Ð²Ð¾ÑÑÐµÐ¹" */
        if ((item.date * 1000 >= $scope.loadConfig.timestamp) && item.show_at_common_feed) {
            /** ÐµÑÐ»Ð¸ ÐµÑÐµ Ð½ÐµÑ ÑÐ°ÐºÐ¾Ð¹ Ð½Ð¾Ð²Ð¾ÑÑÐ¸ Ð² ÑÐ¿Ð¸ÑÐºÐµ Ð½Ð° Ð·Ð°Ð³ÑÑÐ·ÐºÑ */
            if (($scope.newsListForLoad.indexOf(item.id) === -1)) {
                $scope.newsListForLoad.push(item.id);
                $scope.changeNewsFeedCounter($scope.newsListForLoad.length, false);
            }
        } else {
            // fix for show_at_common_feed
            if ($scope.dayByNewsId[item.id] && !item.show_at_common_feed) {
                $scope.updatemessage(item);
            }
        }
    };


    $scope.updatemessage = function(item) {
        const dayKey = $scope.dayByNewsId[item.id];

        if (!dayKey) {
            $scope.addmessage(item);
        } else {
            item.date = item.update; // Ð´Ð°ÑÐ° Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð² Ð¿ÑÐ¸Ð¾ÑÐ¸ÑÐµÑÐµ
            if ($scope.newsFeed[dayKey][item.id].date*1000 === (new Date(item.date * 1000).getTime())){
                // Ð´Ð°ÑÑ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑÑ
                $scope.newsFeed[dayKey][item.id].title = item.title;
                $scope.newsFeed[dayKey][item.id].subtitle = item.subtitle;
            } else {
                // ÐµÑÐ»Ð¸ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ð»Ð°ÑÑ Ð´Ð°ÑÐ°
                $scope.addmessage(item);

            }
        }
    };

    $scope.deletemessage = function(item) {
        const dayKey = $scope.dayByNewsId[item.id];
        //Ð¿ÑÐ¾Ð²ÐµÑÑÐµÐ¼ ÐµÑÑÑ Ð»Ð¸ ÑÐ°ÐºÐ°Ñ Ð½Ð¾Ð²Ð¾ÑÑÑ Ð² Ð»ÐµÐ½ÑÐµ
        if ($scope.newsFeed[dayKey] && $scope.newsFeed[dayKey][item.id]) {
            delete $scope.dayByNewsId[item.id];
            delete $scope.newsFeed[dayKey][item.id];
        }
        else {
            let index = $scope.newsListForLoad.indexOf(item.id);
            if (index + 1) { //Ð¿ÑÐ¾Ð²ÐµÑÑÐµÐ¼ ÐµÑÑÑ Ð»Ð¸ Ð¾Ð½Ð° Ð² Ð¾ÑÐµÑÐµÐ´Ð¸ Ð½Ð° Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ
                $scope.newsListForLoad.splice(index, 1);
                $scope.changeNewsFeedCounter($scope.newsListForLoad.length, false);
            }
        }
    };

    /** ÐÐ¾Ð´Ð³ÑÑÐ·Ð¸ÑÑ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ñ Ð² ÐÐ¸Ð²Ð¾Ð¹ Ð»ÐµÐ½ÑÐµ */
    $scope.loadmessages = function(newsFeedNeedUpdate) {
        const isNeedLoad = $scope.newsListForLoad.length;
        if (!isNeedLoad) {
            $scope.changeNewsFeedCounter(0, newsFeedNeedUpdate);
            return;
        }

        $http.post('/userApi/getNewsForNewsFeed', { newsListId: $scope.newsListForLoad })
            .then(function(res){
                /** ÐÑÐ»Ð¸ Ð¼Ñ Ð² ÐÐ°ÑÐºÐµ, ÑÐ¾ Ð¿Ð¾Ð´Ð³ÑÑÐ¶Ð°ÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ñ, ÐºÐ¾ÑÐ¾ÑÑÐµ Ðº Ð½ÐµÐ¹ Ð¾ÑÐ½Ð¾ÑÑÑÑÑ */
                const newsList = isWeOnSuperRubric
                    ? res.data.newsList.filter(function(item){return item.isSuperRubric;})
                    : res.data.newsList;

                newsList.map(function(item){
                    /** ÐÑÑÑ Ð»Ð¸ Ð·Ð°Ð¿Ð¸ÑÑ Ñ Ð´Ð°ÑÐ¾Ð¹ Ð¿Ð¾ id ÑÐµÐºÑÑÐµÐ³Ð¾ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð° */
                    const dayById = $scope.dayByNewsId[item.id];
                    /** ÐÑÐ»Ð¸ ÐµÑÑÑ, ÑÐ¾ ÑÐ´Ð°Ð»ÑÐµÐ¼ Ð´ÑÐ±Ð»Ð¸ÐºÐ°Ñ Ð¸Ð· newsFeed */
                    dayById && delete $scope.newsFeed[dayById][item.id];
                    /** for css effect */
                    item.isNew = true;
                    scrollToTop('news-feed-content', 500, function(){return $scope.addToNewsFeed(item);});
                });

                $scope.newsListForLoad = [];
                $scope.changeNewsFeedCounter(0, newsFeedNeedUpdate);
            })
            .catch(function(error){return console.error('Error in loadmessages method in newsfeedController', error);});
    };

    /* X_ÑÐ°Ð±Ð¾ÑÐ° Ñ Ð¿ÑÑÐ°Ð¼Ð¸ */
    function scrollToTop(elementId, scrollDuration, callback) {
        const scrollEl = document.getElementById(elementId);
        const scrollStep = -scrollEl.scrollTop / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( scrollEl.scrollTop != 0 ) {
                scrollEl.scrollBy( 0, scrollStep );
            }
            else {
                if (typeof callback == 'function') {
                    callback();
                    $scope.$apply();
                }
                clearInterval(scrollInterval);
            }
        },15);
    }

    /** ÐÐ°Ð¿Ð¸ÑÐ°ÑÑ Ð·Ð½Ð°ÑÐµÐ½Ð¸Ðµ Ð² ÐºÑÐºÑ */
    function putCookie(key, value) {
        $cookies.put(key, value, {'path': '/', expires: getExpiredDate(new Date())});
    }

    /** ÐÐ¾Ð»ÑÑÐ¸ÑÑ Ð´Ð°ÑÑ + 30 Ð¼Ð¸Ð½ÑÑ */
    function getExpiredDate(newDate) {
        return new Date(newDate.getTime() + 1800000);
    }

    window.addEventListener('storage', function(e) {
        if (e.key === 'newsfeedupdate' && e.newValue === '1'){
            if (windowIsFocusedInterval) {
                //ÐµÑÐ»Ð¸ Ð´ÑÑÐ³Ð¾Ðµ Ð¾ÐºÐ½Ð¾ Ð² ÑÐ¾ÐºÑÑÐµ, ÑÐ±ÑÐ°ÑÑÐ²Ð°ÐµÑÑÑ Ð¸Ð½ÑÐµÑÐ²Ð°Ð»
                $interval.cancel(windowIsFocusedInterval);
            }
            !initiatorForUpdate
                ? $scope.loadmessages(false)
                : initiatorForUpdate = false;
            window.localStorage.setItem("newsfeedupdate", '0');
        }
    });
});
