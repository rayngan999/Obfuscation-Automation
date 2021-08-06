/*
 *  Angular LoadScript
 *
 *  Let angular load and execute lazy javascript from partials!
 *
 *  This module is the result of  this issue: "1.2.0rc1 regression: script tags not loaded via ngInclude"
 *  Issue url: https://github.com/angular/angular.js/issues/3756
 *
 *  As of Angular 1.2.0 the ngInclude scripts does not permit execution of javascript from included partials.
 *  This little module execute code inside script tags with "javascript-lazy" attribute after partial loading,
 *  thus re-enabling this feature.
 *
 *  ( please have a look at the issue comments, this angular feature was never planned nor included properly,
 *  was only a drawback of using jQuery for partial inclusion )
 *
 *  This angular module have been created by @endorama (https://github.com/endorama) based upon the code
 *  posted by @olostan (https://github.com/olostan)
 *
 *  Simply add this file, load ngLoadScript module as application dependency and use type="text/javascript-lazy"
 *  as type for script you which to load lazily in partials.
 *
 * License: 2013 - released to the Public Domain.
 */

/*global angular */

tassApp.directive('script', function () {
    return {
        restrict: 'E',
        scope: false,
        link: function (scope, elem, attr) {
            if (attr.type === 'text/javascript-lazy') {
                var code = elem.text();
                var f = new Function(code);
                try {
                    f();
                } catch (e) {
                    console.warn(
                        'Error in directive: angular-loadscript.js \n',
                        'in Function: ' + f + '\n',
                        'error message: ' + e
                    );
                }
            }
        }
    };
});
