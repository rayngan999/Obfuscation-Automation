tassApp.controller('menuController', function($scope, $http, $sce) {
    const containerContent = {};
    let hoveredId;
    $scope.superRubricSlug = "";

    function getDataForCategory(id) {
        $http
            .get('/userApi/get_material_data?category=' + id + '&superSlug='+ $scope.superRubricSlug)
            .then(function(data)  {
                containerContent[id] = data.data;
                $scope.newsContainer =  $sce.trustAsHtml(
                    containerContent[hoveredId]
                );
            })
    }

    $scope.onMouseEnter = function(id) {
        hoveredId = id;
        if (containerContent[id]) {
            $scope.newsContainer = $sce.trustAsHtml(
                containerContent[id]
            );
        } else {
            $scope.newsContainer = '';
            getDataForCategory(id);
        }
    }

    $scope.init = function(superRubricSlug) {
        $scope.superRubricSlug = superRubricSlug === 'nauka' ? superRubricSlug : '';

        const burger = document.getElementById('open-menu-button');
        burger.addEventListener('click', function () {
            hoveredId = 6091;
            getDataForCategory(6091);
        }, {once: true});
    }
});
