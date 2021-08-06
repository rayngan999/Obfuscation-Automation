tassApp.directive('urgentdirective', function() {
    return {
        restrict: 'E',
        scope: true,
        link: function($scope, $el, $attr) {
            $scope.view = {
                "title":null,
                "subtitle":null,
                "link":null,
                "urgid":null
            };
            // $scope.view = urgent;
            // // console.log('urgent',urgent);
            // console.log($el[0]);

            $scope.view.urgid = $el[0].getAttribute('urgid'); // Ð·Ð°Ð±Ð¸ÑÐ°ÐµÐ¼ urgID Ñ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ Ð¿ÑÐ¸ÑÐµÐ´ÑÐµÐ³Ð¾ Ñ Ð±ÐµÐºÐµÐ½Ð´Ð°

            let cookieWhere = getCookie('urgid'); //ÑÐ¼Ð¾ÑÑÐ¸Ð¼ Ð² ÐºÑÐºÑ ÐµÑÑÑ Ð»Ð¸ Ñ Ð½Ð°Ñ Ð¼ÐµÑÐºÐ° ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ urgID
            // console.log("***********");
            // console.log(cookieWhere,$scope.view.urgid);
            // console.log("***********");
            if (cookieWhere != $scope.view.urgid) {
                // Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÐ¼ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ ÐµÑÐ»Ð¸ ÑÐ°Ð¼ Ð½Ðµ ID ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ
                $scope.view.title = $el[0].getAttribute('title');
                $scope.view.subtitle = $el[0].getAttribute('subtitle');
                $scope.view.link = $el[0].getAttribute('link');
            }

                // document.cookie ="urgentm=

            $scope.close = function() {
                $scope.view.title = null;
                $scope.view.subtitle = null;
                $scope.view.link = null;
                // Ð¿ÑÐ¾ÑÑÐ°Ð²Ð»ÑÐµÐ¼ ÐºÑÐºÑ Ñ ID ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ
                let date = new Date();
                date.setMonth(date.getMonth() + 1);
                document.cookie="urgid="+$scope.view.urgid+";expires="+date
            };
        },
        template: "<div class=\"urgent\" ng-class=\"{'urgent_active':view.title}\"><div class= \"urgent-container\"><a href=\"{{view.link}}\" class= \"urgent_body\">{{view.title}} {{view.subtitle}}</a><div class=\"urgent__close-button\" data-ng-click=\"close()\"></div></div></div>"
    }
});
