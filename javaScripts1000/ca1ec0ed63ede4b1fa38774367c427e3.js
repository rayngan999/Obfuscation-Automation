tassApp.controller('mainMediaController', function($scope, $rootScope, $timeout, $window) {
    $scope.videoIsPlaying = false;
    $scope.videoIsPaused = false;
    $scope.dataVisible = true;
    $scope.currentMedia = {};

    $scope.init = function(media) {
        $scope.currentMedia = angular.copy(media);

        if (media.type == 'video'){
            $scope.$on('playerStarted', function(event, data){
                if (data == media.id){
                    $scope.videoIsPaused = false;
                    $scope.videoIsPlaying = true;
                    $rootScope.showArticle = true;
                    $scope.$apply();
                }
                
            })

            $scope.$on('playerPaused', function(event, data){
                if (data == media.id){
                    $scope.videoIsPaused = true;
                    $scope.videoIsPlaying = false;
                    $rootScope.showArticle = false;
                    $scope.$apply();
                }
            })

            $scope.$on('playerCompleted', function(event, data){
                if (data == media.id){
                    $scope.videoIsPaused = true;
                    $scope.videoIsPlaying = false;
                    $rootScope.showArticle = false;
                    $scope.$apply();
                }
            })

            var scrollOpt1 = {
                    'type': 'scroll',
                    'params': {
                        'default': false,
                        'videoContainerEndpoint': true
                    },
                    'trigger': 'videoContainerEndpointCallback'
                };

                $scope.$on('videoContainerEndpointCallback', function(event, data) {
                    if (data) {
                        $rootScope.showArticle = false;
                    } else {
                        if ($scope.videoIsPlaying){
                            $rootScope.showArticle = true;
                        }
                    }
                });

                $scope.$emit('overlord-bind', 'videoContainerEndpoint', scrollOpt1);
                window.dispatchEvent(new Event('resize'));
        }

        if (media.type == 'gallery'){
            $scope.$on('changeGalleryIndex', function(event, data){
                if (data == 0){
                    $scope.dataVisible = true;
                } else {
                    $scope.dataVisible = false;
                }
            })
        }
    };

    $scope.startPlayer = function(videoId){
        if (!window.getSelection().toString().length){
            if ($scope.currentMedia.type == 'video'){
                $scope.$emit('Rebroadcast', 'startPlayer', $scope.currentMedia.id);
            }
        }
    }
});
