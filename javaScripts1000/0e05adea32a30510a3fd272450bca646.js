tassApp.controller('audioController', function($scope, $rootScope, $timeout) {
    var player;

    $scope.init = function(audioId, audioUrl) {
        var setup = {};
        setup = {
            file: audioUrl,
            height: 40,
            width: '100%',
            skin: {
                "name": "tass"
            }
        }

        $scope.$emit('mediaUsed', function() {
            jwplayer.key = 'btTjXiuYZsRbqAVggNOhFFVcP3mvO2KkI2kx4w= = ';
            player = jwplayer('audio_' + audioId).setup(setup);
        });
    };
});
