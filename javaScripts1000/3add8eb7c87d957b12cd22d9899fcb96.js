angular
    .module('tassApp')
    .directive('fullscreenViewDirective', function() {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                var gallery, maximizeBtn, minimizeBtn, dataBlock, dataBlockBtn, event;

                angular.element(function () {
                    event = document.createEvent("HTMLEvents");
                    event.initEvent("fullscreenchange", true, true);
                    event.eventName = "fullscreenchange";

                    gallery = $element.parent()[0];
                    galleryImages = gallery.querySelectorAll('.text-include-gallery__photo');

                    dataBlock = gallery.querySelector('.text-include-gallery__data, .text-include-gallery__slides-metadata');
                    dataBlockBtn = gallery.querySelector('.text-include-gallery__data-fullscreen-toggler, .text-include-gallery__slide-fullscreen-toggler');
                    maximizeBtn = gallery.querySelector('.text-include-gallery__toggler');
                    minimizeBtn = gallery.querySelector('.text-include-gallery__toggler-icon-minimize');

                    if (maximizeBtn) {
                        maximizeBtn.addEventListener('click', function () {
                            try {
                                $element[0].requestFullscreen();
                            } catch (e) {
                                $element[0].classList.add('fullscreen-ios-fallback');
                                bodyScrollLock.disableBodyScroll(gallery);
                                $scope.handlerEvent = true;
                                document.dispatchEvent(event);
                            }
                        });
                    }
                    minimizeBtn.addEventListener('click', function () {
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
                    dataBlockBtn.addEventListener('click', function () {
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
                                case 37: { // left
                                    event.preventDefault();
                                    $scope.prevSlide();
                                    $scope.$apply();
                                    break;
                                }
                                case 39: { // right
                                    event.preventDefault();
                                    $scope.nextSlide();
                                    $scope.$apply();
                                    break;
                                }
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
                document.addEventListener('fullscreenchange', function(e) {
                    if (!document.fullscreenElement){
                        //exit fullscreen

                        if ($scope.handlerEvent){
                            $scope.fullscreenMode = !$scope.fullscreenMode;
                            if (!$scope.fullscreenMode){
                                $scope.descriptionOpened = true;
                            }

                        } else {
                            $scope.fullscreenMode = false;
                            $scope.nextImgIndex = $scope.sliderIndex;
                            $scope.descriptionOpened = true;
                        }
                    } else if (document.fullscreenElement.getAttribute('data-fullscreen-id') == $scope.$id){
                        $scope.fullscreenMode = true;

                        $scope.nextImgIndex = $scope.sliderIndex;
                        if ($scope.needToLoadForFullscreen.indexOf($scope.sliderIndex) < 0) {
                            $scope.needToLoadForFullscreen.push($scope.sliderIndex);
                        }
                    }
                    $scope.$apply();
                });

                $scope.$watch('sliderIndex', function () {
                    setTimeout(function () {
                        if ($scope.fullscreenMode && $scope.descriptionOpened) {
                            $scope.$apply();
                        }
                    }, 0);
                });
            }
        };
    });
