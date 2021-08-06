angular
    .module('tassApp')
    .directive('photoFullscreenViewDirective', function($rootScope) {
        return {
            restrict: 'A',
            scope: true,
            link: function ($scope, $element) {
                $scope.fullscreenMode = false;
                $scope.descriptionOpened = true;
                var photo, minimizeBtn, dataBlock, dataBlockBtn, event;
                var eventName = 'fullscreenchange_' + $scope.$id;

                angular.element(function () {
                    event = document.createEvent("HTMLEvents");

                    event.initEvent('fullscreenchange', true, true);
                    event.eventName = eventName;

                    photo = $element[0].querySelector('img');

                    $scope.minimizeUrl = photo.getAttribute('src');
                    $scope.originalUrl = photo.getAttribute('data-originalurl');

                    dataBlockBtn = $element[0].querySelector('.text-include-photo__data-fullscreen-toggler, .text-include-photo__info-fullscreen-toggler');
                    dataBlock = $element[0].querySelector('.text-include-photo__data, .text-include-photo__info');
                    minimizeBtn = $element[0].querySelector('.text-include-photo__minimize');

                    photo && photo.addEventListener('click', function () {

                        if (!$scope.fullscreenMode) {
                            if ($scope.originalUrl)
                                photo.setAttribute('src', $scope.originalUrl);

                            try {
                                $element[0].requestFullscreen();
                            }
                            catch (e) {
                                $element[0].classList.add('fullscreen-ios-fallback');
                                bodyScrollLock.disableBodyScroll($element[0]);
                                $scope.handlerEvent = true;
                                document.dispatchEvent(event);
                            }
                        } else {
                            if (!$rootScope.detectmob()) {

                                photo.setAttribute('src', $scope.minimizeUrl);

                                try {
                                    document.exitFullscreen();
                                }
                                catch (e) {
                                    $element[0].classList.remove('fullscreen-ios-fallback');
                                    bodyScrollLock.clearAllBodyScrollLocks();
                                    $scope.handlerEvent = true;
                                    document.dispatchEvent(event);
                                }
                            }
                        }
                    });

                    minimizeBtn && minimizeBtn.addEventListener('click', function () {
                        photo.setAttribute('src', $scope.minimizeUrl);

                        try {
                            document.exitFullscreen();
                        }
                        catch (e) {
                            $element[0].classList.remove('fullscreen-ios-fallback');
                            bodyScrollLock.clearAllBodyScrollLocks();
                            $scope.handlerEvent = false;
                            document.dispatchEvent(event);
                        }
                    });

                    dataBlockBtn && dataBlockBtn.addEventListener('click', function () {
                        if ($scope.fullscreenMode) {
                            $scope.descriptionOpened = !$scope.descriptionOpened;
                            $scope.$apply();
                        }
                    });

                    window.addEventListener("keyup", function (event) {
                        if (event.defaultPrevented) {
                            return;
                        }
                        if ($scope.fullscreenMode) {
                            switch (event.keyCode) {
                                case 38: { // up
                                    event.preventDefault();
                                    if (!$scope.descriptionOpened) {
                                        $scope.descriptionOpened = !$scope.descriptionOpened;
                                    }
                                    $scope.$apply();
                                    break;
                                }
                                case 40: { // down
                                    event.preventDefault();
                                    if ($scope.descriptionOpened) {
                                        $scope.descriptionOpened = !$scope.descriptionOpened;
                                    }
                                    $scope.$apply();
                                    break;
                                }
                                default :
                                    break;
                            }
                        }
                    });
                });

                /* Standard syntax */
                document.addEventListener('fullscreenchange', function() {
                    if (!document.fullscreenElement){
                        //exit fullscreen
                        if ($scope.handlerEvent){
                            $scope.fullscreenMode = !$scope.fullscreenMode;
                            if (!$scope.fullscreenMode){
                                $scope.descriptionOpened = true;
                            }

                        } else {
                            $scope.fullscreenMode = false;
                            $scope.descriptionOpened = true;
                        }
                    } else if (document.fullscreenElement.getAttribute('data-fullscreen-id') === $scope.$id.toString()){
                        $scope.fullscreenMode = !$scope.fullscreenMode;
                    }

                    $scope.$apply();
                });
            }
        };
    });
