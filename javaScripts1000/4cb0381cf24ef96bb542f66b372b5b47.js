tassApp.controller('whatsNewController', function($scope, $rootScope, $http) {
    $rootScope.whatsNewOpened = false;
    this.feedbackText = "";
    this.feedbackToSend = {};
    this.isSubmited = false;
    this.resetWhatsNewForm = function () {
        this.feedbackText = "";
    };
    this.submitFeedback = function () {
        this.feedbackToSend.text = angular.copy(this.feedbackText);
        this.isSubmited = true;
        var url = '/userApi/sendFeedback';
        $http.post(url, this.feedbackToSend)
            .then(function(response) {
                //First function handles success
                // console.log(response.data);
            }, function(response) {
                //Second function handles error
                //console.error(response.data);
            });
    };
});
