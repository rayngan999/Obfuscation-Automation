angular.module('tassApp')
    .directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function(scope, tElement, tAttrs){
            tElement.replaceWith(tElement.children());
            return {
                post : angular.noop
            };
        }
    };
});
