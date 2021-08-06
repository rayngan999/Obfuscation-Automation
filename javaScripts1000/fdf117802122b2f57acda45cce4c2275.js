angular
    .module('tassApp')
    .directive('additionalInfoDirective', function () {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                var elementStyle = getComputedStyle($element[0]);

                $element.ready(function () {
                    if ($element.children()[0].offsetHeight + parseInt(elementStyle.paddingBottom) < 290) {
                        $element[0].querySelector('.text-include-reference__bottom').remove();
                    }
                });

                $scope.$watch('referenceExpanded', function() {
                    if ($scope.referenceExpanded) {
                        var openSpeed = 1000 / 700; // 1000 comes from css max-height property
                                                    // 700 form initial element transition time
                        var openTime = (1000 / openSpeed) * $element.children()[0].offsetHeight / 1000;
                        $element[0].style.maxHeight = $element.children()[0].offsetHeight +
                            parseInt(elementStyle.paddingBottom) + 'px';
                        $element[0].style.transitionDuration = openTime / 1000 + 's';
                    } else {
                        var closeSpeed = 1000 / 300;// 1000 comes from css max-height property
                                                    // 300 form initial element transition time
                        var closeTime = (1000 / closeSpeed) * $element.children()[0].offsetHeight / 1000;
                        $element[0].style.maxHeight = '';
                        $element[0].style.transitionDuration = closeTime / 1000 + 's';
                    }
                });
            }
        };
    });
