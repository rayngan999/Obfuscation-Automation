tassApp.controller('sliderController', function($scope, $attrs, $rootScope, $timeout) {
    $scope.fullscreenMode = false;
    $scope.descriptionOpened = true;
    $scope.sliderIndex = 0;
    $scope.sliderIndexAnimated = 0;
    $scope.needToLoad = [0];
    $scope.needToLoadForFullscreen = [];
    $scope.nextImgIndex = 0;
    $scope.slideTimeout = 0;
    $scope.isLoading = false;

    $scope.onImgLoad = function(event, index){
        //Ð·Ð°Ð¿ÑÑÐºÐ°ÐµÐ¼ ÑÐ¾Ð»ÑÐºÐ¾ Ð¾Ð´Ð½Ñ ÑÑÐ½ÐºÑÐ¸Ñ
        if ($scope.isLoading) return;

        $scope.isLoading = true;

        $scope.nextImgIndex++;
        var imagesArr = $scope.fullscreenMode ? $scope.needToLoadForFullscreen : $scope.needToLoad;
        var curIndex = $scope.nextImgIndex % $scope.sliderLength;

        while (
            (imagesArr.indexOf(curIndex)>-1) &&
            (imagesArr.length != $scope.sliderLength)
            ){
            curIndex++;
            $scope.nextImgIndex = curIndex;
        }

        if (imagesArr.indexOf(curIndex) < 0) {
            $scope.nextImgIndex = curIndex;
            imagesArr.push(curIndex);
        }
        $scope.isLoading = false;
    };

    $scope.sliderCircle = $attrs.sliderCircle === 'true';
    $scope.prevSlide = function() {
        if ($scope.sliderIndex === 0) {
            if ($scope.sliderCircle) {
                $scope.sliderIndex = $scope.sliderLength - 1;
            } else {
                return;
            }
        } else {
            $scope.sliderIndex--;
        }

        $scope.nextImgIndex = $scope.sliderIndex;

        if ($scope.isMain){
            $scope.$emit('Rebroadcast', 'changeGalleryIndex', $scope.sliderIndex);
        }
        //-$rootScope.articleTitle = !($scope.sliderIndex === 0);
    };

    $scope.nextSlide = function() {
        if ($scope.sliderIndex === $scope.sliderLength - 1) {
            if ($scope.sliderCircle) {
                $scope.sliderIndex = 0;
            } else {
                return;
            }
        } else {
            $scope.sliderIndex++;
        }

        $scope.nextImgIndex = $scope.sliderIndex;

        if ($scope.isMain){
            $scope.$emit('Rebroadcast', 'changeGalleryIndex', $scope.sliderIndex);
        }
        //-$rootScope.articleTitle = !($scope.sliderIndex === 0);
    };

    $scope.visible = function(index) {

        if (index ===  $scope.sliderIndex) {
            return true;
        }

        var visible = false;
        if ($scope.fullscreenMode ){
            if ($scope.needToLoadForFullscreen.indexOf(index) > -1){
                visible = true;
            }
        } else {
            if ($scope.needToLoad.indexOf(index) > -1){
                visible = true;
            }
        }

        return visible;
    };

    $scope.getImageUrl = function(slide) {
        return $scope.fullscreenMode ? slide.originalImage: slide.image;
    };
});
