angular
    .module('tassApp')
    .directive('scrollToTopDirective', function ($window) {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                $scope.scrollToTopActive = false;
                var elementNode = $element[0],
                    progressBar = elementNode.querySelector('.scroll-to-top_progress-bar'),
                    RADIUS = 16,
                    CIRCUMFERENCE = 2 * Math.PI * RADIUS,
                    materialBody = document.querySelector('#news .text-content, #interview .text-content, ' +
                        '#article .text-content, #opinion .text-content, #online .text-content, ' +
                        '#explainer .text-content, #test .text-content, #poll .text-content, #event .text-content, ' +
                        '#official .text-content'),
                    disableProgressBar = !materialBody,
                    buttonInvoked = false,
                    animInProgress = false,
                    timer = null,
                    easterEggDelayTriggerTime = 5000,
                    easterEggDurationTime = 2000,
                    easterEggSpinTime = 2500;


                $window.onscroll = function () {
                    handleScrollToTopButton(animInProgress);
                    setProgress(disableProgressBar || !buttonInvoked || animInProgress);
                };

                elementNode.onmouseenter = function () {
                    spinInit(elementNode);
                };

                elementNode.onmouseleave = function () {
                    clearTimeout(timer);
                    timer = null;
                };

                function spinInit(element) {
                    timer = setTimeout(function () {
                        spin(element);
                    }, easterEggDelayTriggerTime);
                }

                function spin(element) {
                    element.classList.add('scroll-to-top_wrapper_spin');
                    setTimeout(function () {
                        clearTimeout(timer);
                        timer = null;
                    }, easterEggDelayTriggerTime);
                    setTimeout(function () {
                        element.classList.add('spin-back');
                    }, easterEggDelayTriggerTime + easterEggDurationTime);
                    setTimeout(function () {
                        element.classList.remove('scroll-to-top_wrapper_spin', 'spin-back');
                    }, easterEggDelayTriggerTime + easterEggDurationTime + easterEggSpinTime);
                }

                function determineProgress() {
                    var materialBodyHeight = materialBody.getBoundingClientRect().bottom + window.pageYOffset;
                    return ((window.pageYOffset + $window.outerHeight || document.documentElement.clientHeight) / materialBodyHeight);
                }

                function setProgress(disabled, progress) {
                    if (disabled) return;

                    var dashoffset;

                    if (!progress) {
                        progress = determineProgress();
                    }
                    dashoffset = (progress < 0 || progress > 1) ? 0 : CIRCUMFERENCE * (1 - progress);
                    progressBar.style.strokeDashoffset = dashoffset;
                }

                function handleScrollToTopButton(disable) {
                    if (disable) return;
                    $scope.scrollToTopActive = window.pageYOffset > ($window.outerHeight || document.documentElement.clientHeight);
                    if (!buttonInvoked && $scope.scrollToTopActive && !disableProgressBar) {
                        var buttonAppearanceTime = 250,
                            progressBarAppearanceTime = 200;
                        buttonInvoked = true;
                        animInProgress = true;
                        setTimeout(function () {
                            animate({
                                duration: progressBarAppearanceTime,
                                timing: function (timeFraction) {
                                    return timeFraction;
                                },
                                draw: function (progress) {
                                    setProgress(disableProgressBar || !buttonInvoked, progress * determineProgress());
                                }
                            });
                        }, buttonAppearanceTime / 2);
                    }
                    if (!$scope.scrollToTopActive) {
                        buttonInvoked = false;
                        progressBar.style.strokeDashoffset = CIRCUMFERENCE;
                    }
                }

                function animate(options) {

                    var start = performance.now();

                    requestAnimationFrame(function animate(time) {
                        // timeFraction Ð¾Ñ 0 Ð´Ð¾ 1
                        var timeFraction = (time - start) / options.duration;
                        if (timeFraction > 1) timeFraction = 1;

                        // ÑÐµÐºÑÑÐµÐµ ÑÐ¾ÑÑÐ¾ÑÐ½Ð¸Ðµ Ð°Ð½Ð¸Ð¼Ð°ÑÐ¸Ð¸
                        var progress = options.timing(timeFraction);

                        options.draw(progress);

                        if (timeFraction < 1) {
                            requestAnimationFrame(animate);
                        } else if (animInProgress) {
                            animInProgress = false;
                        }
                    });
                }

                $scope.scrollToTop = function () {
                    var windowHeight = $window.outerHeight || document.documentElement.clientHeight,
                        scrollDuration = 150;

                    animate({
                        duration: scrollDuration,
                        timing: function (timeFraction) {
                            return timeFraction;
                        },
                        draw: function (progress) {
                            document.body.scrollTop = document.documentElement.scrollTop = windowHeight * (1 - progress);
                        }
                    });
                };
            }
        };
    });
