angular
    .module('tassApp')
    .directive('expandableTextInclude', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.on('click', function(e) {
                    if (e.target.classList.contains('text-include-aside__footer') || e.target.offsetParent.classList.contains('text-include-aside__footer')) {
                        element.toggleClass('text-include-aside_expanded');
                    }
                });
            }
        };
    });
