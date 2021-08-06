tassApp.controller('videoController', function($scope, $rootScope, $timeout) {
    var player;

    $scope.init = function(videoId, videoUrlArr, videoImage, isStreaming, streamingSources) {

        $scope.videoId = videoId;
        var setup = {};
        if (isStreaming) {
            setup = {
                'playlist': [{
                    'image': videoImage,
                    'mediaid': videoId,
                    'sources': streamingSources
                }],
                'width': '100%',
                'aspectratio': '16:9'
            };
        } else {
            var videoUrlArrFile = [];
            for (let key in videoUrlArr) {
                videoUrlArrFile.push({ 'file': videoUrlArr[key] });
            }
            setup = {
                'sources': videoUrlArrFile,
                'width': '100%',
                'aspectratio': '16:9',
                'image': videoImage
            };
        }

        $scope.$emit('mediaUsed', function() {
            jwplayer.key = 'btTjXiuYZsRbqAVggNOhFFVcP3mvO2KkI2kx4w= = ';
            player = jwplayer('player_' + videoId).setup(setup);
            player.on('play', function() {
                $scope.$emit('Rebroadcast', 'playerStarted', videoId);
            });
            player.on('pause', function() {
                $scope.$emit('Rebroadcast', 'playerPaused', videoId);
            });
            player.on('complete', function() {
                $scope.$emit('Rebroadcast', 'playerCompleted', videoId);
            });
        })
    };

    $scope.start = function() {
        player.play(true);
    };

    $scope.$on('startPlayer', function(event, data) {
        if ($scope.videoId === data) {
            player.play();
        }
    })
});
