let tassApp = angular.module('tassApp', ['ngTouch', 'ngLocale', 'ngSanitize', 'ngCookies', 'angular-click-outside', 'ngMask'])
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'https://www.youtube.com/embed/**']);
    })
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    }])
    .run(function($rootScope) {
        $rootScope.TASS = {
            centrifugo: JSON.parse(localStorage.getItem('centrifugo')),
            webSocket: JSON.parse(localStorage.getItem('webSocket'))
        }
    })
    // ÐÐ±ÑÑÐ²Ð»ÐµÐ½Ð¸Ðµ ÑÐ¸Ð»ÑÑÑÐ¾Ð² ;
    .filter('orderObjectBy', function() {
        return function(items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function(item) {
                filtered.push(item);
            });
            filtered.sort(function(a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) {
                filtered.reverse();
            }
            return filtered;
        };
    })
.controller('additionalInfoController', ['$scope', function($scope){
    $scope.referenceExpanded = false;
}]);

// Ð½ÑÐ¶Ð½Ð¾ Ð±ÑÐ´ÐµÑ Ð¿ÐµÑÐµÐ¿Ð¸ÑÐ°ÑÑ getCookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
