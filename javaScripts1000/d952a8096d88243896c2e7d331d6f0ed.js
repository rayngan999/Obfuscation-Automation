tassApp.controller('headerController', function($scope, $attrs, Overlord, $timeout) {
    $scope.newsFeedCounter = 0;
    $scope.counterTime = 0;
    $scope.ieOption = !!(window.navigator.userAgent).match(/(trident\/7)/i);

    $scope.toggleNewsFeed = function() {
        $scope.$emit('Rebroadcast', 'toggleNewsFeed', { 'isOpened': !Overlord.variable.newsfeed.isOpened });
        window.localStorage.setItem("newsfeed", '1');
    };

    $scope.getNewsFeedCounter = function(){return $scope.newsFeedCounter >= 100 ? '99+' : $scope.newsFeedCounter || '';};

    $scope.$on('initNewsFeedCounter', function(e, count) {
        $scope.newsFeedCounter = count;
    });

    $scope.$on('changeNewsFeedCounter', function(e, count) {
        if (count > $scope.newsFeedCounter){
            $scope.newsareloded = false;
            $scope.newsFeedLabelActive = true;
            $timeout(function(){
                $scope.newsFeedLabelActive = false;
                $scope.$apply();
            }, 3000);
        }
        $timeout(function(){
            $scope.newsFeedCounter = count;
        },$scope.counterTime);
    });
});
