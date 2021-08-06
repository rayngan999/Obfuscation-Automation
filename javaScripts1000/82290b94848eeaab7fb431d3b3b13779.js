/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	angular.module('cams.live.banner', ['ngSanitize','luegg.directives'], function($locationProvider) {
	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
	  });
	})

	.service('ajaxrequests',__webpack_require__(6))
	.service('dispatcher',__webpack_require__(7))
	.service('sharedData',__webpack_require__(8))
	.service('Consts',__webpack_require__(9))
	.service('chatMessages',__webpack_require__(10))
	.directive('camslivebanner',__webpack_require__(11))
	.directive('hlsPlayer',__webpack_require__(13))
	.directive('gifPlayer',__webpack_require__(15))
	.directive('chat',__webpack_require__(17))
	.directive('models',__webpack_require__(19))
	.directive('registration',__webpack_require__(21))
	.directive('regsuccess',__webpack_require__(23))
	.directive('ngEnter', function () {
	    return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                });
	                event.preventDefault();
	            }
	        });
	    };
	});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Lato light';\n  /*src: url('https://banners.cams.com/banners/streamray/live/Lato-Light.ttf');*/ }\n\ncamslivebanner {\n  position: relative;\n  display: block;\n  text-align: center;\n  font-family: \"Lato Light\", latoregular, \"Open Sans\", Arial, Helvetica;\n  background-color: #e5e6ea;\n  color: #666;\n  border: 1px solid #a2a7ad;\n  overflow: hidden; }\n  camslivebanner #background-div {\n    border: 0px solid; }\n  camslivebanner hls-player {\n    position: absolute; }\n  camslivebanner #video {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: 0;\n    outline-offset: -1px;\n    cursor: pointer;\n    object-fit: fill; }\n  camslivebanner #gif-player {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: 0;\n    outline-offset: -1px;\n    cursor: pointer;\n    object-fit: fill; }\n  camslivebanner #title {\n    position: absolute;\n    z-index: 3;\n    width: 100%;\n    pointer-events: none;\n    font-weight: bold; }\n  camslivebanner #logo {\n    position: absolute;\n    z-index: 2;\n    left: 15px;\n    max-height: 20px; }\n  camslivebanner #live-label {\n    position: absolute;\n    z-index: 4;\n    display: block;\n    color: #000;\n    font-size: 13px;\n    letter-spacing: 3px;\n    width: 50px;\n    pointer-events: none;\n    vertical-align: middle;\n    font-weight: bolder; }\n  camslivebanner .live-circle {\n    width: 10px;\n    height: 10px;\n    display: block;\n    background-color: #00ff00;\n    border: 0;\n    border-radius: 5px;\n    float: right;\n    filter: blur(2px);\n    animation-name: circle-anim;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-direction: alternate; }\n\n@keyframes circle-anim {\n  from {\n    background-color: #00ff00; }\n  to {\n    background-color: #ffffff; } }\n  camslivebanner .live-text {\n    display: block;\n    float: left;\n    margin-top: -3px;\n    text-shadow: 0 0 0.1em #FFF, 0 0 0.1em #FFF,0 0 0.1em #FFF; }\n  camslivebanner .mute-icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwNEM4QkY2MkU5QTExRTdBQjQ2REU3MTE1OTI2QTA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYwNEM4QkY3MkU5QTExRTdBQjQ2REU3MTE1OTI2QTA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjA0QzhCRjQyRTlBMTFFN0FCNDZERTcxMTU5MjZBMDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjA0QzhCRjUyRTlBMTFFN0FCNDZERTcxMTU5MjZBMDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7WXHFHAAABUElEQVR42rTUzSsFURjH8WPyJ3gvVkpWirwuWVhY2EhMVlb+AdnIAhvxN9jQeNnLytZryk4kCnG9JGVhZ3xPPW7Tba57zsw5T31qOp2Z30zneaYqjmMVRZGyqEEMY85kcxiGKlB2VY8DdNvcZBPSgFO5fvcR0ohDtKgMVW2wpw4naFYZq9KXNOEoT0ClL6nFcd6AZIhuxw584AffGHURkAwZR2fGZ3ThGl8p3ahdBA5edBYbKet7GLOdk3I1IW+8lVjTzXKDedMWNqk+7GNRWv4S0zZzYlpT8id4LG2YwGHIJpbkLNZ9hOh5+sQCZtCOHZch2yhgMrHWj1YsuzqTVZmT0hqRriuG7OIqZeLbDELOy6wXRDFkJWXTmjwg96/lvzN5k/6/9Rmi60kO8cFniK5X9OLOZ4iuZwzg3mfIX7f0yHWNrxBdLxjCmc1NvwIMAKmyPwlbCbAdAAAAAElFTkSuQmCC\");\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 25px;\n    height: 25px;\n    display: block; }\n  camslivebanner .volume-icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4QjdDMkQxMkU5QTExRTdBM0Q0QjY4MjEyNzZGRDBFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4QjdDMkQyMkU5QTExRTdBM0Q0QjY4MjEyNzZGRDBFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjhCN0MyQ0YyRTlBMTFFN0EzRDRCNjgyMTI3NkZEMEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjhCN0MyRDAyRTlBMTFFN0EzRDRCNjgyMTI3NkZEMEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4HHwsMAAABoklEQVR42rSVzysFURTHx/PysiJLhZXiD7CxQSkpZPVi96Is/Ej5mawl8zzZoCzkR1MUGykpCxZWyIaysPGShRUL6Qn5nvpO3ab3xtyZ69SnmXtn7v12z7nnnCLHcSxNWwY3YCvogpimwBQYBW86i3REJsAC3z//Q2QSpK2QFg/wzziwC3xLgB1QAS7ACnjRPYmcYNHnew6sggNQB67BnM5JxnxOoNoZWQM14BQ0ghZVZICTH+AbvIMq0BvC/Y+glq47BF2uSDvoDhlTick+KOXVvuN8E3gAPWA3ZkWzHOMmyXkJWjn/BeZBCnREFRG7p9Cw55LsgWLQZkLEtQ3GJMXxK6k2KSL2LJt63GmZFqkEWc/FMCrSxzzZ5LicZOMGNpdM7wdDbl7Qksy7k6giCRZOyZMGJU9k3xlyJINj9ocwGS+B7cwzfw5uJRFdxXXitSuQ0TyZW7ueVHE/dy0xmf4qks2gnk+pgdtgVqefiL9/fMq9xGRQ6Scj+fpJkMBneNXtAjFJmmq/adanUKaTjOKyab6XmO7xqtksHWU6i34FGAAm5lQJevE3FwAAAABJRU5ErkJggg==\");\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 25px;\n    height: 25px;\n    display: block; }\n  camslivebanner #volume {\n    position: absolute;\n    z-index: 5;\n    cursor: pointer; }\n  camslivebanner .fallback-img {\n    position: absolute;\n    z-index: 1;\n    cursor: pointer; }\n  camslivebanner .flex-container {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  camslivebanner .flex-main {\n    width: 75%;\n    position: relative;\n    flex-grow: 1;\n    -webkit-flex-grow: 1; }\n  camslivebanner .features-container {\n    width: 25%;\n    position: relative;\n    flex-grow: 0;\n    -webkit-flex-grow: 0;\n    margin-left: 3px;\n    border-left: 1px solid #a2a7ad; }\n  camslivebanner .join-login {\n    position: absolute;\n    padding: 2px;\n    height: 36px;\n    bottom: -3px;\n    width: 100%;\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: row; }\n  camslivebanner .login-btn {\n    border: 1px solid #666;\n    height: 30px;\n    width: 100px;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 28px;\n    cursor: pointer;\n    display: block;\n    margin: 1px 4px 1px 1px; }\n  camslivebanner .join-btn {\n    color: #fff;\n    background: #ff8d27;\n    background: -moz-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ff8d27), color-stop(90%, #ff8d27), color-stop(91%, #f77704));\n    background: -webkit-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n    background: -o-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n    background: -ms-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n    background: linear-gradient(to bottom, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d27', endColorstr='#f77704',GradientType=0 );\n    height: 32px;\n    font-size: 16px;\n    font-weight: bold;\n    bottom: 0;\n    line-height: 28px;\n    cursor: pointer;\n    white-space: nowrap;\n    display: block;\n    flex-grow: 1;\n    margin: 1px; }\n  camslivebanner .bottom-logo {\n    display: block;\n    max-height: 20px;\n    margin: 5px 1px; }\n  camslivebanner .scroll-style::-webkit-scrollbar-track {\n    border-radius: 4px;\n    background-color: #fff; }\n  camslivebanner .scroll-style::-webkit-scrollbar {\n    width: 6px;\n    background-color: #F5F5F5;\n    cursor: pointer; }\n  camslivebanner .scroll-style::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: #999;\n    cursor: pointer; }\n  camslivebanner chat {\n    display: block;\n    width: 100%;\n    height: 200px;\n    background-color: #fff;\n    font-size: 11px;\n    position: relative; }\n    camslivebanner chat .send-btn {\n      position: absolute;\n      bottom: 2px;\n      right: 3px;\n      color: #fff;\n      width: 45px;\n      height: 22px;\n      background-color: #017EDA;\n      cursor: pointer;\n      font-size: 13px;\n      line-height: 20px; }\n    camslivebanner chat .input-text {\n      width: calc(95% - 25px);\n      height: 20px;\n      border: 1px solid #a2a7ad;\n      position: absolute;\n      bottom: 26px;\n      font-size: 13px;\n      margin: 0 auto;\n      left: 0;\n      right: 0; }\n    camslivebanner chat .input-text::-webkit-input-placeholder {\n      color: #dedede; }\n    camslivebanner chat .input-text:-moz-placeholder {\n      /* Firefox 18- */\n      color: #dedede; }\n    camslivebanner chat .input-text::-moz-placeholder {\n      /* Firefox 19+ */\n      color: #dedede; }\n    camslivebanner chat .input-text:-ms-input-placeholder {\n      color: #dedede; }\n    camslivebanner chat .chat-input {\n      padding-left: 25px; }\n    camslivebanner chat .whisper-icon {\n      background-image: url(\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMUY2MUZGRDNBOEUxMUU3OERFM0ZCMzZEQjQ2NEE0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMUY2MUZGRTNBOEUxMUU3OERFM0ZCMzZEQjQ2NEE0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxRjYxRkZCM0E4RTExRTc4REUzRkIzNkRCNDY0QTREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxRjYxRkZDM0E4RTExRTc4REUzRkIzNkRCNDY0QTREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAFwASAwERAAIRAQMRAf/EAIYAAAIDAAAAAAAAAAAAAAAAAAAFBAYHAQADAQAAAAAAAAAAAAAAAAAABAUCEAABAwEEBgcJAAAAAAAAAAABAgMEBQARMRMhElIzFAbwUXEyFTUWQWEiQnJDU1RWEQACAQICBwkBAAAAAAAAAAABAhEAA0ESIVFxgSIyBDGRoVKCE1OjFLH/2gAMAwEAAhEDEQA/ANzYadqc2oypYqMvUnOw2WYUjIaYaZCbiUh1m8qKiSdJtUYhFUDKOEHSJJncalKDcZi2c8RGgwABvFRq3DXFos2bEYrFPlxI7kpmQ9LzG0raBUELRnvBWtdhqkW3YfM4Um2wJiAuv0isX0y2ywFxSBMltXqNNvU87YT5L4lh97q7LL/mX7Mu6mP1N9ebfSfmsyabzQ0ikTHo3ibbi6nEhoMl9RGqA80xpShZSm7MOjtNmelh7RzgHLyk6BsJx2Ut1cpdGQkZuYDSdoGG2iO9y3VHWafPn1ltmeLmWaiXY7UkDFsEpTffskgmwwu2wWVbcr5YJFCm1cIVmuQ3mkA1euBh/hRusjAbrY+n3Wle42vGd9VvbXVhG6sxh0qVQ6/VW1TqjUM9wOOzaWtiTKQD3G5TCkOPJu+UjQeoWuPdF22vCixg0gbVMgVCS0bVxuJ2nFYJ2MIJo5oZXUqauDxNXDTq0JMus5EGG0on4VlTrLa1KB7oRpv9osdKcjZoTYksx7j/AGjqlzplm5pxeFUd4nup96Dnf08/y7hd6d5+xjh0vsp+9fjXnns8Kb/A3yNyR2+Nf//Z\");\n      background-repeat: no-repeat;\n      display: block;\n      width: 18px;\n      height: 23px;\n      cursor: pointer;\n      position: absolute;\n      bottom: 2px;\n      right: 52px; }\n    camslivebanner chat .emoticon-icon {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAIAAAD9MqGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5Qjc2MUIwM0E4RTExRTc5OTRGQzAxMjhBNkJENjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5Qjc2MUIxM0E4RTExRTc5OTRGQzAxMjhBNkJENjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDlCNzYxQUUzQThFMTFFNzk5NEZDMDEyOEE2QkQ2MUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDlCNzYxQUYzQThFMTFFNzk5NEZDMDEyOEE2QkQ2MUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4A5GaHAAACPklEQVR42pSUS0wTURSG28m0tUIfiNVSQeJjg2JUBHHBwpUboTEhRCAGXfnY+ti4cWciJi5043NBJKISFxSiiSu3RgXcwIaHpdpUiqSPVJy2dPiGm9xOSjHhZNLM/ef/77nnP+fWquu6ZUNMR//9TuViqbzfre522xoC2zZyVPPib7YQmkw++JyIrBTMeJ1Tud7qDR7zbLcrErTKnOE/2a5Xv9DcanJ3HvfUV9sl/m4ieX88hX64d4/ELfp6/FjSWh7O8fCilwvws8/CZoKRk0OefhJml/eX6na6VMsmIWmfrtRzbOPc1MYhBzpr/iMjYMOBCZ+locSS8/udwsCv85ma/tn25wtkEHkuDv4EAWcJByZ8Q0kD2OZco0tsPBPP8vttORdP5w2lVvgY1SROwISPSqVvrGma+ID1lQ6FNgoPOf9olx8ZuCAIJiqVdpcU037UY0aa91XwlNSMSjnos1u2HqgU33r22bhRzJ2xmPTGHEvp/MlH82Pfk5KJSqGeEztsj78YaMdhF95cexs1i5mhGyMxXDlS62QJEz4qo4E326p6QotsSYVDwV280/HuhsqAW51e1J5OZZg7cNhw2Jr34tzSNNzHRszA8Q9T6YVE7s3cCt3b67X1tVZhMslPvYicCTgGLtQW5zajrfa9jPjvzYxOJsrOLThf4cAszq0cy9uhGHko42qL54DPIXAsoTYOSf67Qb+8aNaSm81RX48nqM0MXj5U0d3kLbnf1rL/CaITDKDPpW52DdYEGACgyHw1MwYvawAAAABJRU5ErkJggg==\");\n      background-repeat: no-repeat;\n      display: block;\n      width: 19px;\n      height: 19px;\n      cursor: pointer;\n      position: absolute;\n      bottom: 28px;\n      left: 5px; }\n    camslivebanner chat .chat-holder {\n      display: block;\n      width: 100%;\n      height: calc(100% - 50px);\n      position: absolute;\n      top: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      text-align: left; }\n    camslivebanner chat .chat-message {\n      display: block;\n      margin: 3px 5px 5px 3px;\n      width: 90%;\n      float: left; }\n    camslivebanner chat .modelname {\n      color: #ED2556;\n      font-weight: bold; }\n    camslivebanner chat .username {\n      color: #6E993F;\n      font-weight: bold; }\n  camslivebanner .models-title {\n    font-size: 10px;\n    text-align: left;\n    padding-left: 10px;\n    display: block;\n    height: 17px;\n    width: 100%;\n    background-color: #fff;\n    border-top: 1px solid #a2a7ad;\n    padding-top: 3px;\n    position: relative; }\n  camslivebanner .chatting-with {\n    font-size: 10px;\n    text-align: left;\n    padding-left: 10px;\n    display: block;\n    height: 17px;\n    width: 100%;\n    background-color: #fff;\n    border-bottom: 1px solid #a2a7ad;\n    padding-top: 3px;\n    position: relative;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  camslivebanner .arrow-up {\n    background-image: url(\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMDMyN0YxNTNBNzMxMUU3OTkzOUJGNERGRDU0NTdBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMDMyN0YxNjNBNzMxMUU3OTkzOUJGNERGRDU0NTdBQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEwMzI3RjEzM0E3MzExRTc5OTM5QkY0REZENTQ1N0FCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwMzI3RjE0M0E3MzExRTc5OTM5QkY0REZENTQ1N0FCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgABgAHAwERAAIRAQMRAf/EAFUAAQAAAAAAAAAAAAAAAAAAAAcBAQAAAAAAAAAAAAAAAAAAAAAQAAMAAQMFAAAAAAAAAAAAAAECAwUABAcRQVESFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AXMVkuRRyTkb7nE2bFPFUO1FY9JwBf56KxoELsyt7AN3PgaD/2Q==\");\n    background-repeat: no-repeat;\n    display: block;\n    width: 7px;\n    height: 6px;\n    cursor: pointer;\n    position: absolute;\n    top: 7px;\n    right: 15px; }\n  camslivebanner .arrow-down {\n    background-image: url(\"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDI2MDEwQzNBNzMxMUU3QUY2QUI3MTdGMjA0NDkzRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMDI2MDEwRDNBNzMxMUU3QUY2QUI3MTdGMjA0NDkzRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwMjYwMTBBM0E3MzExRTdBRjZBQjcxN0YyMDQ0OTNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwMjYwMTBCM0E3MzExRTdBRjZBQjcxN0YyMDQ0OTNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgABgAHAwERAAIRAQMRAf/EAFQAAQAAAAAAAAAAAAAAAAAAAAYBAQAAAAAAAAAAAAAAAAAAAAAQAAICAQUBAAAAAAAAAAAAAAECAwQSABEhBQcxEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB309DzNPTbtg9lBJSOZq0njlEQsMGEyl2QRYIFJXnY5Db5oP/Z\");\n    background-repeat: no-repeat;\n    display: block;\n    width: 7px;\n    height: 6px;\n    cursor: pointer;\n    position: absolute;\n    top: 7px;\n    right: 15px; }\n  camslivebanner models {\n    display: block;\n    height: calc(50% - 4px);\n    background-color: #fff;\n    padding: 2px; }\n    camslivebanner models .models-holder {\n      display: block;\n      width: 100%;\n      height: calc(100% - 22px);\n      position: relative;\n      overflow-x: hidden;\n      overflow-y: auto; }\n    camslivebanner models .model-image {\n      display: inline-block;\n      margin-left: 4px;\n      margin-top: 4px; }\n      camslivebanner models .model-image img {\n        width: 60px;\n        height: 45px;\n        cursor: pointer; }\n  camslivebanner registration {\n    background-color: rgba(0, 0, 0, 0.8);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 20;\n    color: #fff; }\n    camslivebanner registration .frame {\n      border: 2px solid #ff8d27;\n      width: 89%;\n      height: 85%;\n      display: block;\n      position: absolute;\n      top: 52%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      text-align: center; }\n    camslivebanner registration .close {\n      background-color: transparent;\n      width: 14px;\n      height: 14px;\n      position: absolute;\n      cursor: pointer;\n      top: 8px;\n      right: 5%; }\n    camslivebanner registration .close:after {\n      content: '';\n      height: 18px;\n      border-left: 2px solid #fff;\n      position: absolute;\n      transform: rotate(45deg); }\n    camslivebanner registration .close:before {\n      content: '';\n      height: 18px;\n      border-left: 2px solid #fff;\n      position: absolute;\n      transform: rotate(-45deg); }\n    camslivebanner registration .title {\n      font-size: 24px;\n      font-weight: bold;\n      margin-top: 5%;\n      display: block;\n      margin-bottom: 20px; }\n    camslivebanner registration .title-orange {\n      color: #ff8d27; }\n    camslivebanner registration .sub-title {\n      font-size: 14px;\n      font-weight: normal;\n      color: #ccc; }\n    camslivebanner registration form {\n      display: inline-block;\n      text-align: center;\n      width: 80%; }\n    camslivebanner registration input {\n      height: 32px;\n      border: 0;\n      width: 70%;\n      margin: 0;\n      padding: 0 0 0 8px; }\n    camslivebanner registration .orange-button {\n      background-color: #ff8d27;\n      color: #fff;\n      cursor: pointer; }\n    camslivebanner registration table {\n      width: 100%; }\n    camslivebanner registration .lm_error {\n      display: inline-block;\n      width: 70%;\n      margin-top: 0;\n      margin-bottom: 2px;\n      background-color: #f00;\n      font-size: 12px;\n      vertical-align: super;\n      text-align: left;\n      text-indent: 5px;\n      -webkit-box-sizing: border-box;\n      /* Safari/Chrome, other WebKit */\n      -moz-box-sizing: border-box;\n      /* Firefox, other Gecko */\n      box-sizing: border-box;\n      padding: 2px; }\n    camslivebanner registration .password-guide {\n      display: inline-block;\n      width: 70%;\n      margin-top: 0;\n      margin-bottom: 10px;\n      font-size: 12px;\n      vertical-align: super;\n      text-align: left;\n      color: #ccc; }\n    camslivebanner registration .spacer {\n      display: block;\n      clear: both;\n      height: 10px; }\n    camslivebanner registration .legal-stuff {\n      display: inline-block;\n      width: 100%;\n      font-size: 9px;\n      color: #ababab;\n      margin-top: 10px; }\n      camslivebanner registration .legal-stuff a {\n        font-weight: bold;\n        color: #fff;\n        text-decoration: none; }\n    camslivebanner registration .already-member {\n      font-size: 14px; }\n    camslivebanner registration .loader {\n      display: block;\n      border: 16px solid rgba(0, 0, 0, 0.5);\n      border-radius: 50%;\n      border-top: 16px solid #fff;\n      width: 60px;\n      height: 60px;\n      -webkit-animation: spin 2s linear infinite;\n      animation: spin 2s linear infinite;\n      position: absolute;\n      left: calc(50% - 46px);\n      top: calc(50% - 46px); }\n    camslivebanner registration .loader-holder {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.3); }\n    camslivebanner registration .warning-holder {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.3); }\n    camslivebanner registration .warning {\n      display: block;\n      position: absolute;\n      width: 50%;\n      height: 25%;\n      left: 25%;\n      top: 25%;\n      background-color: #fff;\n      border: 2px solid #ccc;\n      text-align: center;\n      color: #000; }\n      camslivebanner registration .warning .wraning-text {\n        display: block;\n        margin-top: 3%;\n        -webkit-user-select: none;\n        /* Chrome all / Safari all */\n        -moz-user-select: none;\n        /* Firefox all */\n        -ms-user-select: none;\n        /* IE 10+ */\n        user-select: none; }\n      camslivebanner registration .warning .ok-button {\n        height: 25px;\n        width: 50%;\n        display: inline-block;\n        color: #fff;\n        padding-top: 3px;\n        font-weight: bold;\n        margin-top: 7%;\n        background: #ff8d27;\n        background: -moz-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ff8d27), color-stop(90%, #ff8d27), color-stop(91%, #f77704));\n        background: -webkit-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n        background: -o-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n        background: -ms-linear-gradient(top, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n        background: linear-gradient(to bottom, #ff8d27 0%, #ff8d27 90%, #f77704 91%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d27', endColorstr='#f77704',GradientType=0 );\n        cursor: pointer; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  camslivebanner regsuccess {\n    background-color: rgba(0, 0, 0, 0.9);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 20;\n    color: #fff; }\n    camslivebanner regsuccess .frame {\n      border: 2px solid #0280D7;\n      width: 89%;\n      height: 85%;\n      display: block;\n      position: absolute;\n      top: 52%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      text-align: center; }\n    camslivebanner regsuccess .close {\n      background-color: transparent;\n      width: 14px;\n      height: 14px;\n      position: absolute;\n      cursor: pointer;\n      top: 8px;\n      right: 5%; }\n    camslivebanner regsuccess .close:after {\n      content: '';\n      height: 18px;\n      border-left: 2px solid #fff;\n      position: absolute;\n      transform: rotate(45deg); }\n    camslivebanner regsuccess .close:before {\n      content: '';\n      height: 18px;\n      border-left: 2px solid #fff;\n      position: absolute;\n      transform: rotate(-45deg); }\n    camslivebanner regsuccess .login-button {\n      height: 25px;\n      width: 50%;\n      display: inline-block;\n      color: #fff;\n      padding-top: 3px;\n      font-weight: bold;\n      margin-top: 7%;\n      background: #0280D7;\n      cursor: pointer; }\n    camslivebanner regsuccess .msg {\n      margin-top: 20%;\n      position: relative;\n      font-size: 24px; }\n  @media (max-width: 351px) {\n    camslivebanner models {\n      display: none; }\n    camslivebanner .models-title {\n      display: none; }\n    camslivebanner .chatting-with {\n      display: none; }\n    camslivebanner .flex-container {\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      padding-left: 0; }\n    camslivebanner .flex-main {\n      height: 75%;\n      width: 100%; }\n    camslivebanner .features-container {\n      height: 25%;\n      width: 100%;\n      margin-left: 0;\n      border-left: 0; }\n    camslivebanner #video {\n      bottom: 0; }\n    camslivebanner .input-text {\n      width: calc(100% - 105px) !important;\n      bottom: 2px !important;\n      left: 2px !important;\n      margin: inherit !important; }\n    camslivebanner .chat-holder {\n      top: 0 !important;\n      height: calc(100% - 30px) !important; }\n    camslivebanner .emoticon-icon {\n      bottom: 4px !important; }\n    camslivebanner registration .frame {\n      border: 1px solid #ff8d27 !important;\n      width: calc(100% - 6px) !important;\n      height: calc(100% - 6px) !important;\n      top: 2px !important;\n      left: 2px !important;\n      transform: none !important; }\n    camslivebanner regsuccess .frame {\n      border: 1px solid #0280D7 !important;\n      width: calc(100% - 6px) !important;\n      height: calc(100% - 6px) !important;\n      top: 2px !important;\n      left: 2px !important;\n      transform: none !important; }\n    camslivebanner regsuccess .msg {\n      font-size: 18px;\n      margin-top: 20%; }\n    camslivebanner regsuccess .login-button {\n      width: 70%; }\n    camslivebanner .close {\n      top: 5px !important;\n      right: 5px !important; }\n    camslivebanner .close:after {\n      height: 14px !important;\n      border-left: 1px solid #fff !important; }\n    camslivebanner .close:before {\n      height: 14px !important;\n      border-left: 1px solid #fff !important; }\n    camslivebanner .title {\n      font-size: 20px !important;\n      margin-bottom: 3px !important;\n      line-height: 14px; }\n    camslivebanner .sub-title {\n      font-size: 12px !important; }\n    camslivebanner .line-break {\n      display: block; }\n    camslivebanner input {\n      height: 22px !important;\n      width: 100% !important;\n      margin: 0 !important; }\n    camslivebanner .password-guide {\n      width: 100% !important;\n      margin-bottom: 0 !important; }\n    camslivebanner .spacer {\n      height: 2px !important; }\n    camslivebanner .legal-stuff {\n      width: 120% !important;\n      margin-left: -10% !important; }\n    camslivebanner .lm_error {\n      width: 100% !important; }\n    camslivebanner .wraning-text {\n      font-size: 12px !important; }\n    camslivebanner .warning {\n      width: 75% !important;\n      left: 12.5% !important;\n      height: 30% !important; }\n    camslivebanner chat {\n      height: 100%; }\n    camslivebanner .join-btn {\n      font-size: 14px; }\n    camslivebanner .login-btn {\n      font-size: 14px; }\n    camslivebanner .send-btn {\n      height: 26px !important;\n      line-height: 26px !important; } }\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	ajaxrequestsServ.$inject = ['$http','dispatcher','Consts','sharedData'];

	function ajaxrequestsServ($http,dispatcher,Consts,sharedData){
	  var ajq = this;
	  var models_cache;
	  var trendingModels = [];
	  var lvswon_tries = 0;
	  var lvswon_max = 3;

	  ajq.getModels = function(no_cache){
	    if( ( !!no_cache || !models_cache ) && lvswon_tries < lvswon_max ){
	      var studio_call = "";
	      if (sharedData.STUDIO != "") {
	        studio_call = "&attach_studio=1"
	      }
	      models_cache = $http.jsonp(Consts.MODELS_URL+"?callback=JSON_CALLBACK" + studio_call + "&cb=" + Date.now()).success(function(res){
	        lvswon_tries++;
	        return res.data;
	      }).error(function(res,status){
	        lvswon_tries++;
	        console.log("Error getting model list: ",status);
	      });
	    } else {
	      console.log('lvswon died, fallback image');
	      dispatcher.dispatch(Consts.EVENTS.LVSWON_ERROR);
	      return;
	    }
	    return models_cache.then(function(data) {
	      if (sharedData.CAMS_IN_BOX == "1") {
	        var trending = filterData(data);
	        dispatcher.dispatch(Consts.EVENTS.TRENDING_MODELS, trending);
	      }
	      if (sharedData.MODELS.length > 0) {
	        var modelsArray = [];
	        for (var i = 0; i < sharedData.MODELS.length; i++) {
	          var model = searchModels(sharedData.MODELS[i],data.data);
	          if (model) {
	            modelsArray.push(model);
	          }
	        }
	        modelsArray = modelsArray.filter(checkFree);
	        dispatcher.dispatch(Consts.EVENTS.MODEL_LIST, modelsArray);
	        return modelsArray;
	      } else if (sharedData.STUDIO != "") {
	        var d = data.data.sort(function(a, b){
	            return b.F-a.F;
	        });
	        d = d.filter(checkStudio);
	        d = d.slice(0,Consts.ARRAY_LENGTH);
	        dispatcher.dispatch(Consts.EVENTS.MODEL_LIST, d);
	      } else {
	        var d = filterData(data);
	        if (sharedData.MODEL_DISPALY == "any" || sharedData.INDEX.length == 0) {
	          d = d.shuffle();
	        } else {
	          var newData = [];
	          for (var i = 0; i < sharedData.INDEX.length; i++) {
	            var index = Number(sharedData.INDEX[i]);
	            if (index >= d.length) {
	              index = d.length;
	            }
	            newData.push(d[(index - 1)]);
	          }
	          d = newData;
	        }
	        dispatcher.dispatch(Consts.EVENTS.MODEL_LIST, d);
	      }
	    });
	  }

	  function filterData(data) {
	    var d = data.data.sort(function(a, b){
	        return b.F-a.F;
	    });
	    getTrendingModels(d);
	    d = d.filter(checkFree);
	    getTrendingModels(d);
	    d = d.filter(checkGender);
	    getTrendingModels(d);
	    d = d.filter(checkAge);
	    getTrendingModels(d);
	    d = d.filter(checkEthnicity);
	    getTrendingModels(d);
	    d = d.filter(checkRegion);
	    getTrendingModels(d);
	    d = d.slice(0,Consts.ARRAY_LENGTH);
	    return d;
	  }

	  function getTrendingModels(models) {
	    if (sharedData.CAMS_IN_BOX != "1") return;
	    if (models.length > Consts.TREND_LENGTH) {
	      models = models.slice(0,Consts.TREND_LENGTH);
	    }
	    trendingModels = models;
	  }

	  function searchModels(nameKey, myArray){
	    for (var i=0; i < myArray.length; i++) {
	      if (myArray[i].s.toLowerCase() == nameKey.toLowerCase()) {
	          return myArray[i];
	      }
	    }
	    return null;
	  }

	  function checkFree(obj) {
	    return obj.r == Consts.ONLINE;
	  }

	  function checkGender(obj) {
	    if (sharedData.GENDER.length == 0) {
	      return true;
	    } else if (sharedData.GENDER == "C") {
	        return obj.A == "03";
	    }
	    return sharedData.GENDER.indexOf(obj.o) != -1;
	  }

	  function checkAge(obj) {
	    if (sharedData.AGE.length == 0) {
	      return true;
	    }
	    if ((Number(obj.b) == 18 || Number(obj.b) == 19) && sharedData.AGE.indexOf("01") != -1) {
	      return true;
	    } else if ((Number(obj.b) >= 20 && Number(obj.b) < 25) && sharedData.AGE.indexOf("02") != -1) {
	      return true;
	    } else if ((Number(obj.b) >= 25 && Number(obj.b) < 40) && sharedData.AGE.indexOf("03") != -1) {
	      return true;
	    } else if ((Number(obj.b) >= 40) && sharedData.AGE.indexOf("04") != -1) {
	      return true;
	    }
	    return false;
	  }

	  function checkEthnicity(obj) {
	    if (sharedData.ETHNICITY.length == 0) {
	      return true;
	    }
	    return sharedData.ETHNICITY.indexOf(obj.D) != -1;
	  }

	  function checkRegion(obj) {
	    if (sharedData.REGION.length == 0) {
	      return true;
	    }
	    var inRegion = sharedData.REGION.indexOf(mapRegion(obj.k)) != -1;
	    return inRegion;
	  }

	  function mapRegion(country) {
	    var region = "";
	    if (Consts.REGION2.indexOf(country) != -1) {
	      region = "02";
	    } else if (Consts.REGION1.indexOf(country) != -1) {
	      region = "01";
	    } else if (Consts.REGION3.indexOf(country) != -1) {
	      region = "03";
	    } else if (Consts.REGION4.indexOf(country) != -1) {
	      region = "04";
	    } else if (Consts.REGION5.indexOf(country) != -1) {
	      region = "05";
	    } else if (Consts.REGION6.indexOf(country) != -1) {
	      region = "06";
	    } else if (Consts.REGION7.indexOf(country) != -1) {
	      region = "07";
	    }
	    return region;
	  }

	  function checkStudio(obj) {
	    if (sharedData.STUDIO == "") {
	      return true;
	    }
	    return sharedData.STUDIO == obj.Y;
	  }

	  Array.prototype.shuffle = function() {
	    var input = this;

	    for (var i = input.length-1; i >=0; i--) {
	        var randomIndex = Math.floor(Math.random()*(i+1));
	        var itemAtIndex = input[randomIndex];
	        input[randomIndex] = input[i];
	        input[i] = itemAtIndex;
	    }
	    return input;
	  }

	  ajq.check_stream = function(stream){
	    return $http.jsonp(Consts.CAMSCHAT+"?type=check_stream&stream="+stream+"&callback=JSON_CALLBACK")
	    .success(function(stat){
	      dispatcher.dispatch(Consts.EVENTS.CHECK_STREAM, stat);
	    })
	    .error(function(res,status){
	      dispatcher.dispatch(Consts.EVENTS.CHECK_STREAM_ERROR, status);
	    });
	  }
	}
	module.exports = ajaxrequestsServ;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	dispatcher.$inject = ['$rootScope','$timeout'];

	function dispatcher($rootScope,$timeout) {
	  var dsp = this;
	  dsp.dispatch = function(event, data) {
	    $timeout(function() {
	      $rootScope.$broadcast(event, data);
	    },0);
	  }
	}

	module.exports = dispatcher;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	function sharedData() {
	  var e = this;
	  e.GENDER          = ["F"];
	  e.AGE             = [];
	  e.ETHNICITY       = [];
	  e.REGION          = [];
	  e.STUDIO          = "";
	  e.MODELS          = [];
	  e.BORDER          = "n";
	  e.THEME_COLOR     = "#000000";
	  e.MODEL_COLOR     = "#ffffff";
	  e.WIDTH           = 360;
	  e.HEIGHT          = 240;
	  e.LOGO_URL        = "";
	  e.LINK            = "";
	  e.NEW_WINDOW      = "1";
	  e.MODEL_DISPALY   = "any";
	  e.INDEX           = [];
	  e.CAMS_IN_BOX     = "";
	  e.COLLAPSE_MODELS = "";
	  e.COLLAPSE_CHAT   = "";
	  e.PID             = "";
	  e.SITE            = "";
	  e.HAS_FLASH       = false;
	  e.HAS_HLS         = false;
	  e.NONEXT          = "";
	  e.PLAY_GIF        = false;
	  e.MOBILE          = false;
	  e.PREVIEW         = false;
	  e.GIF_ROOT        = "https://banners.cams.com/banners/streamray/live/gifs/";
	  e.GIF_ARRAY       = ["Aalex","AllanBriian","BrentCraing","CrhistianDereckk","DentonBaxter","DerrickPipe","JamieBlyton","JustinMaster","MaxandFelix","MikeDeMarko","SeanZevran","SlongJohnson","ValentinandDerek"];
	  return e;
	}

	module.exports = sharedData;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	function Consts() {
	  var e = this;
	  e.MODELS_URL      = "https://cams.com/lvswon.cgi";
	  e.CAMSCHAT        = 'https://cams.com/camschat.cgi';
	  e.IMAGE_PATH      = 'https://images.streamray.com/images/streamray/won/jpg/';
	  e.ARRAY_LENGTH    = 30;
	  e.TREND_LENGTH    = 16;
	  e.ONLINE          = "1";
	  e.REGION1         = ["AU","US","IO","CA","KY","CX","CC","DM","DO","GS","GE","GL","GD","GP","GU","HT","HM","JM","MQ","MS","AN","AW","SX","BQ","NZ","NF","MP","UM","PR","BL","KN","AI","LC","MF","PM","VC","TT","TC","GB","GG","JE","IM","VI"];
	  e.REGION2         = ["US"];
	  e.REGION3         = ["AL","AD","AZ","AT","AM","BE","BA","BG","BY","HR","CY","CZ","DK","EE","FO","FI","FR","DE","GI","GR","VA","HU","IS","IE","IT","LV","LI","LT","LU","MT","MC","MD","ME","NL","NO","PL","PT","RO","SM","RS","SK","SI","ES","SJ","SE","CH","TR","UA","MK","UY","UE"];
	  e.REGION4         = ["RU"];
	  e.REGION5         = ["AG","AR","BS","BB","BM","BO","BR","BZ","VG","CL","CO","CR","CU","EC","SV","FK","GF","GT","GY","HN","MX","CW","NI","PA","PY","PE","SH","SR","VE"];
	  e.REGION6         = ["AS","BD","BT","BV","SB","BN","MM","KH","LK","CN","TW","CK","FJ","PF","TF","PS","KI","HK","IN","ID","JP","KZ","KP","KR","KG","LA","MO","MY","MN","NR","NP","NC","VU","NU","FM","MH","PW","PG","PH","PN","TL","SG","VN","TJ","TH","TK","TO","TM","TV","UZ","WF","WS","AF","BH","IL","IR","IQ","JO","KW","LB","OM","PK","QA","SA","SY","AE","YE"];
	  e.REGION7         = ["DZ","AO","BW","BI","CM","CV","CF","TD","KM","YT","CG","CD","BJ","GQ","ET","ER","DJ","GA","GM","GH","GN","CI","KE","LS","LR","LY","MG","MW","MV","ML","MR","MU","MA","MZ","NA","NE","NG","GW","RE","RW","ST","SN","SC","SL","SO","ZA","ZW","EH","SD","SZ","TG","TN","UG","EG","TZ","BF","ZM"];

	  e.EVENTS = {
	    MODEL_LIST         : 'model_list',
	    CHECK_STREAM       : 'check-stream',
	    CHECK_STREAM_ERROR : 'check-stream-error',
	    PLAY_VIDEO         : 'play-video',
	    PLAY_GIF           : 'play-gif',
	    SET_VOLUME         : 'set-volume',
	    TRENDING_MODELS    : 'trending-models',
	    ON_CLICK           : 'on-click',
	    NEW_STREAM         : 'new-stream',
	    REGISTER           : 'register',
	    REG_SUCCESS        : 'reg-success',
	    PLAY_VIDEO_SWF     : 'play-video-swf',
	    LVSWON_ERROR       : 'lvswon-error'
	  };
	  e.NEXT_TIMEOUT    = 60;
	  return e;
	}

	module.exports = Consts;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	function chatMessages() {
	  var e = this;
	  e.CHATS             = [
	    [
	      "{MODEL}: welcome 2 my chatroom!",
	      "{MEMBER}: hi beautiful bb =)",
	      "{MODEL}: can I show you something?",
	      "{MEMBER}: mmmmmm yes",
	      "{MODEL}: ok, but only for you...",
	      "{MEMBER}: omg"
	   ],
	   [
	      "{MODEL}: hey sexy =)",
	      "{MEMBER}: ur so hot",
	      "{MODEL}: wanna have some private time together?",
	      "{MEMBER}: Iâd love to go private with u <3",
	      "{MEMBER}: Iâm ready when u are",
	      "{MODEL}: what do u want to see first?"
	   ],
	   [
	      "{MODEL}: ur cute, wanna play?",
	      "{MEMBER}: whatâs ur name, bb?",
	      "{MEMBER}: can I see u naked?",
	      "{MODEL}: yes u can ;)",
	      "{MODEL}: what do u wanna see first?",
	      "{MEMBER}: I wanna see sum booty lol"
	   ],
	   [
	      "{MODEL}: hey bb",
	      "{MODEL}: wanna see me naked?",
	      "{MEMBER}: hell yesssssssss",
	      "{MODEL}: wanna go private?",
	      "{MODEL}: then Iâm all yours",
	      "{MEMBER}: Iâm ready bb"
	   ],
	   [
	      "{MODEL}: hey babes",
	      "{MODEL}: itâs a no pants party",
	      "{MODEL}: wanna join?",
	      "{MEMBER}: Iâm ready bb",
	      "{MODEL}: u like what u see?",
	      "{MEMBER}: omg I luv it"
	   ],
	   [
	      "{MODEL}: hey there!",
	      "{MEMBER}: hi sexy",
	      "{MODEL}: ready 2 c me naked?",
	      "{MEMBER}: Letâs go private bb",
	      "{MODEL}: as u wish",
	      "{MODEL}: wut should I take off first?"
	   ],
	   [
	      "{MODEL}: hey sexy!",
	      "{MEMBER}: hey beautiful ;)",
	      "{MODEL}: ready 4 a private party?",
	      "{MEMBER}: yes Iâm ready 4 u bb",
	      "{MODEL}: Iâm ready to get naked",
	      "{MEMBER}: omg u got me so hard"

	   ],
	   [
	      "{MODEL}: there you are",
	      "{MODEL}: was wondering when u were coming",
	      "{MEMBER}: hi baby",
	      "{MEMBER}: can I take u private now?",
	      "{MODEL}: yes bb",
	      "{MODEL}: anything u want <3"

	   ],
	   [
	      "{MODEL}: welcome to the party!",
	      "{MEMBER}: hey sexy",
	      "{MODEL}: Iâm ready to get naked",
	      "{MEMBER}: Iâm ready 2 ;)",
	      "{MODEL}: u like wut u see?",
	      "{MEMBER}: hell yeah i do"

	   ],
	   [
	      "{MODEL}: hey sexy",
	      "{MODEL}: Iâm lonely, wanna chat?",
	      "{MEMBER}: hola bb",
	      "{MEMBER}: yes, ur soooooo sexy",
	      "{MODEL}: sooooo ready 2 get naked",
	      "{MODEL}: wanna see?"
	   ]
	  ];
	  e.USERS = ["aguirre198","kieran40251","mubi20181","paul34611","lizaha1","Azer1985121",
	  "withoutcha1231","amador15251","Alvintob1","elrabos1552","Drkkone2","madinayoub2",
	  "Oslop012","zulmaz9002","bbb1999992","Joeybad728932","jesus24241222","LookingOut4uandu2",
	  "this9is4u2","steph28183","jeferr20173","alvaro142253","k3kk033","DRAGME803","saxas5544553",
	  "Mattrt3","luvu865573","akandbdkekdbb3","yvan5243","solomonpain4","diegopajero1464",
	  "Pluggz114","sexyouup7614","mateo34794","chad10074","umokkkk4","cerber34","dav36044",
	  "medpop15","napiii5","jorgecruz20175","josebrunoigor5","jybagh5","ofa7d5lob2as75","dhikarizky095",
	  "anonymous832015","samsam888885","him129115","jose162896"];
	  return e;
	}

	module.exports = chatMessages;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	viewCtrl.$inject = ['$q','ajaxrequests','$scope','Consts','dispatcher','$window','sharedData','$location'];

	function viewCtrl($q,ajaxrequests,$scope,Consts,dispatcher,$window,sharedData,$location){
	  var vm            = this;
	  var appReady      = $q.defer();
	  var modelList     = [];
	  var index         = 0;
	  var mpp           = "";
	  var subdomain     = "";
	  var nextTimeout;

	  vm.volume         = 0;
	  vm.cornerRadius   = "0";
	  vm.camsinabox     = false;
	  vm.showModels     = true;
	  vm.showChat       = true;
	  vm.showRegister   = false;
	  vm.showRegsuccess = false;
	  angular.element(document).ready(appReady.resolve);

	  function loadParams() {
	    for (var key in $location.search()) {
	      switch (key) {
	        case "g":
	          sharedData.GENDER     = $location.search()[key].split(",");
	          break;
	        case "a":
	          sharedData.AGE        = $location.search()[key].split(",");
	          break;
	        case "e":
	          sharedData.ETHNICITY  = $location.search()[key].split(",");
	          break;
	        case "b":
	          sharedData.BORDER     = $location.search()[key];
	          break;
	        case "tc":
	          sharedData.THEME_COLOR= "#" + $location.search()[key];
	          break;
	        case "mc":
	          sharedData.MODEL_COLOR= "#" + $location.search()[key];
	          break;
	        case "w":
	          sharedData.WIDTH      = $location.search()[key];
	          if (sharedData.CAMS_IN_BOX == "1") {
	            sharedData.WIDTH    = Number(sharedData.WIDTH - 2);
	          }
	          break;
	        case "h":
	          sharedData.HEIGHT     = $location.search()[key];
	          if (sharedData.CAMS_IN_BOX == "1") {
	            sharedData.HEIGHT    = Number(sharedData.HEIGHT - 2);
	          }
	          break;
	        case "l":
	          sharedData.LOGO_URL   = $location.search()[key];
	          break;
	        case "m":
	          sharedData.MODELS     = $location.search()[key].split(",");
	          break;
	        case "s":
	          sharedData.STUDIO     = $location.search()[key];
	          break;
	        case "d":
	          sharedData.LINK       = $location.search()[key];
	          break;
	        case "n":
	          sharedData.NEW_WINDOW = $location.search()[key];
	          break;
	        case "r":
	          sharedData.REGION     = $location.search()[key].split(",");
	          break;
	        case "md":
	          sharedData.MODEL_DISPALY= $location.search()[key];
	          break;
	        case "i":
	          sharedData.INDEX      = $location.search()[key].split(",");
	          break;
	        case "cib":
	          sharedData.CAMS_IN_BOX = $location.search()[key];
	          vm.camsinabox         = true;
	          break;
	        case "v":
	          var v = $location.search()[key];
	          if (v == "1") {
	            sharedData.COLLAPSE_MODELS = "1";
	          } else if (v == "2") {
	            sharedData.COLLAPSE_CHAT = "1";
	          }
	          break;
	        case "pid":
	          sharedData.PID = $location.search()[key];
	          break;
	        case "cb":
	          sharedData.SITE = $location.search()[key];
	          break;
	        case "nn":
	          sharedData.NONEXT = $location.search()[key];
	          break;
	        case "gif":
	          sharedData.PLAY_GIF = $location.search()[key] == "1" && sharedData.GENDER == "M";
	          break;
	        case "mb":
	          sharedData.MOBILE = $location.search()[key] == "1";
	          break;
	        case "prv":
	          sharedData.PREVIEW = $location.search()[key] == "1";
	          break;
	        default:
	          break;
	      }
	    }
	  }

	  function setView() {
	    if (sharedData.CAMS_IN_BOX == "1") {
	      var gap = 5;
	      if (Number(sharedData.WIDTH) < 351) {
	        gap = 6;
	      }
	      vm.videoStyle = {'top':"2px",'left':"2px",'width':"calc(100% - " + gap + "px)",'height':"calc(100% - 40px)","border":"1px solid #a2a7ad"};
	      vm.liveLabelStyle = {'top': "5px",'right':"3px"};
	      vm.volumeStyle = {'bottom': "45px",'right':"3px"};
	    } else if (sharedData.BORDER != "n") {
	      vm.bgColor = sharedData.THEME_COLOR;
	      if (sharedData.BORDER == "r") {
	        vm.cornerRadius = "15px";
	      }
	      vm.videoStyle = {'top':"17px",'left':"15px",'width':(sharedData.WIDTH-30)+"px",'height':(sharedData.HEIGHT-47)+"px"};
	      vm.liveLabelStyle = {'top': "22px",'right':"23px"};
	      vm.volumeStyle = {'bottom': "40px",'right':"20px"};
	    } else {
	      vm.videoStyle = {'width':"100%",'height':"100%",'top':"0",'left':"0"};
	      vm.liveLabelStyle = {'top': "5px",'right':"3px"};
	      vm.volumeStyle = {'bottom': "5px",'right':"3px"};
	    }
	    if (sharedData.LOGO_URL != "") {
	      vm.logoSrc = decodeURIComponent(sharedData.LOGO_URL);
	      if (sharedData.BORDER != "n") {
	        vm.logoStyle = {'bottom':"5px"};
	      } else {
	        vm.logoStyle = {'top':"5px"};
	      }
	    }
	    if (sharedData.BORDER != "n") {
	      vm.titleStyle = {'top':"0px",'color':sharedData.MODEL_COLOR};
	    } else {
	      if (Number(sharedData.WIDTH) < 200) {
	        vm.titleStyle = {'bottom':"5px",'color':sharedData.MODEL_COLOR};
	      } else {
	        vm.titleStyle = {'top':"5px",'color':sharedData.MODEL_COLOR};
	      }
	    }
	    if (sharedData.CAMS_IN_BOX == "1") {
	      vm.logoStyle = {'bottom':"10px"};
	      if (sharedData.COLLAPSE_CHAT == "1") {
	        vm.chatStyle = {'height':'0','visibility':'hidden'};
	        vm.ModelsStyle = {'height':'100%'};
	        vm.showChat = false;
	        if (Number(sharedData.WIDTH) < 351) {
	           vm.featuresStyle = {'height':'0'};
	           vm.mainStyle = {'height':'100%'};
	        }
	      } else if (sharedData.COLLAPSE_MODELS == "1") {
	        if (Number(sharedData.WIDTH) < 351) {
	          vm.chatStyle = {'height':'100%'};
	        } else {
	          vm.chatStyle = {'height':'calc(100% - 40px)'};
	        }
	        vm.ModelsStyle = {'height':'0','visibility':'hidden'};
	        vm.showModels = false;
	      }
	    }
	    vm.width = sharedData.WIDTH+"px";
	    vm.height = sharedData.HEIGHT+"px";
	    vm.backgroundStyle = {'background-color':vm.bgColor,'border-radius':vm.cornerRadius,'width':vm.width,'height':vm.height};
	    vm.camsinabox = sharedData.CAMS_IN_BOX == "1";
	  }

	  $q.all([appReady.promise])
	    .then(function(){
	      sharedData.HAS_HLS = Hls.isSupported();
	      sharedData.HAS_FLASH = typeof swfobject !== 'undefined' && swfobject.getFlashPlayerVersion().major !== 0 ? true : false;
	      loadParams();
	      setView();
	      if (sharedData.PLAY_GIF){
	        dispatcher.dispatch(Consts.EVENTS.PLAY_GIF);
	        vm.showGif = true;
	      } else {
	        ajaxrequests.getModels(true);
	      }
	  });

	  $scope.$on(Consts.EVENTS.MODEL_LIST, function(ev,d){
	    if (d.length > 0) {
	      modelList = d;
	      vm.stream = modelList[index].s;
	      ajaxrequests.check_stream(vm.stream);
	    } else if (sharedData.NONEXT != "1"){
	      if (sharedData.MODELS.length > 0) {
	        sharedData.MODELS = [];
	      } else if (sharedData.STUDIO != "") {
	        sharedData.STUDIO = "";
	      } else if (sharedData.REGION.length > 0) {
	        sharedData.REGION = [];
	      } else if (sharedData.ETHNICITY.length > 0) {
	        sharedData.ETHNICITY = [];
	      } else if (sharedData.AGE.length > 0) {
	        sharedData.AGE = [];
	      }
	      ajaxrequests.getModels(true);
	    } else {
	      vm.showVideo = false;
	      vm.imgSrc = getImagePath(sharedData.MODELS[0]);
	    }
	  });

	  $scope.$on(Consts.EVENTS.CHECK_STREAM, function(ev,d){
	    mpp = d.mpp;
	    subdomain = d.subdomain;
	    if (!!mpp) {
	      if (!!sharedData.HAS_HLS) {
	        var vidList = getCDNPlaylist();
	        dispatcher.dispatch(Consts.EVENTS.PLAY_VIDEO, vidList);
	      } else if (!!sharedData.HAS_FLASH){
	        dispatcher.dispatch(Consts.EVENTS.PLAY_VIDEO_SWF, {"mpp":d.mpp,"stream":d.stream_name.toLowerCase()});
	      } else {
	        vm.imgSrc = getImagePath(d.stream_name.toLowerCase());
	        vm.showVideo = false;
	        return;
	      }
	      dispatcher.dispatch(Consts.EVENTS.NEW_STREAM, vm.stream);
	      vm.showVideo = true;
	      if (nextTimeout) clearTimeout(nextTimeout);
	      if (modelList.length > 1) {
	        nextTimeout = setTimeout(goNext, Consts.NEXT_TIMEOUT * 1000);
	      }
	    } else {
	      goNext();
	    }
	  });

	  $scope.$on(Consts.EVENTS.CHECK_STREAM_ERROR, function(event, data){
	    if (nextTimeout) clearTimeout(nextTimeout);
	    if (data != "internalException" && sharedData.NONEXT != "1") {
	      modelList.splice(index,1);
	      if (modelList.length < 2) {
	        sharedData.MODELS = [];
	        sharedData.STUDIO = "";
	        ajaxrequests.getModels(true);
	      } else {
	        goNext();
	      }
	    } else {
	      vm.showVideo = false;
	      vm.imgSrc = getImagePath(vm.stream);
	      if (sharedData.NONEXT != "1") {
	        nextTimeout = setTimeout(goNext, Consts.NEXT_TIMEOUT * 1000);
	      }
	    }
	  });

	  $scope.$on(Consts.EVENTS.LVSWON_ERROR, function(event, data){
	    vm.showVideo = false;
	    vm.imgSrc = getImagePath("AZBlonde");
	  });

	  var getImagePath = function(model) {
	    var ss = model.toLowerCase();
	    var d1 = ss.substring(0,1);
	    var d2 = ss.substring(ss.length-1);
	    return Consts.IMAGE_PATH + d1 + '/' + d2 + '/' + ss + '_640.jpg';
	  }

	  var goNext = function() {
	    index++;
	    if (index >= modelList.length) {
	      index = 0;
	      ajaxrequests.getModels(true);
	    } else {
	      vm.stream = modelList[index].s;
	      ajaxrequests.check_stream(vm.stream);
	    }
	  }


	  /*var getPlaylist = function(){
	    var ngrp = true;
	    var mpp_ip = mpp;
	    var mpp_subdomain = subdomain;
	    return (!!subdomain ? ('https://' + mpp_subdomain + ':443') : ('http://' + mpp_ip + ':1935'))
	      + '/cams/' + vm.stream.toLowerCase() + '/'
	      + (ngrp?'ngrp:':'')
	      + vm.stream.toLowerCase()
	      + '/playlist.m3u8?'
	      + 'cams';
	  }*/

	  var getCDNPlaylist = function(){
	    var url = "https://camscdn.cams.com/camscdn/cdn-" + vm.stream.toLowerCase() + ".m3u8";
	    return url;
	  }

	  $scope.$on(Consts.EVENTS.NEW_STREAM, function(ev, data){
	    vm.streamName = data;
	  });

	  $scope.$on(Consts.EVENTS.ON_CLICK, function(ev,d){
	    vm.onClick();
	  });

	  $scope.$on(Consts.EVENTS.REGISTER, function(ev,d){
	    vm.showRegister = d;
	  });

	  $scope.$on(Consts.EVENTS.REG_SUCCESS, function(ev,d){
	    vm.showRegsuccess = d;
	  });

	  vm.onClick = function() {
	    if (vm.camsinabox) {
	      //vm.showRegister = true;
	      var link = "https://cams.com/p/register.cgi";
	      if (sharedData.SITE != "") {
	        link = link + "?dcb=" + sharedData.SITE;
	      }
	      if (sharedData.PID != "") {
	        link = link + "&pid=" + sharedData.PID;
	      }
	      var target = "_top";
	      if (sharedData.NEW_WINDOW == "1") {
	        target = "_blank";
	      }
	      $window.open(link, target);
	    } else {
	      var target = "_top";
	      if (sharedData.NEW_WINDOW == "1") {
	        target = "_blank";
	      }
	      if (sharedData.LINK != "") {
	        var link = decodeURIComponent(sharedData.LINK);
	        link = link.replace("{stream}",vm.stream.toLowerCase());
	        if (sharedData.SITE != "" && link.indexOf("&dcb=") == -1) {
	          link = link + "&dcb=" + sharedData.SITE;
	        }
	        $window.open(link, target);
	      }
	    }
	  }

	  vm.onLogin = function() {
	    if (!sharedData.SITE || sharedData.SITE == "") return;
	    var link = "https://secure.cams.com/p/login.cgi";
	    if (sharedData.SITE != "") {
	      link = link + "?dcb=" + sharedData.SITE;
	    }
	    $window.open(link, "_blank");
	  }

	  vm.toggleMute = function() {
	    vm.volume == 0 ? vm.volume = 0.5: vm.volume = 0;
	    dispatcher.dispatch(Consts.EVENTS.SET_VOLUME, vm.volume);
	  }

	  vm.toggleModels = function() {
	    if (vm.showModels) {
	      vm.chatStyle = {'height':'calc(100% - 40px)','visibility':'visible'};
	      vm.ModelsStyle = {'height':'0','visibility':'hidden'};
	      vm.showModels = false;
	      if (!vm.showChat) {
	        vm.toggleChat();
	      }
	    } else {
	      if (vm.showChat) {
	        vm.chatStyle = {'height':'50%','visibility':'visible'};
	        vm.ModelsStyle = {'height':'calc(50% - 4px)','visibility':'visible'};
	      } else {
	        vm.chatStyle = {'height':'0','visibility':'hidden'};
	        vm.ModelsStyle = {'height':'calc(100% - 40px)','visibility':'visible'};
	      }
	      vm.showModels = true;
	    }
	  }

	  vm.toggleChat = function() {
	    if (vm.showChat) {
	      vm.ModelsStyle = {'height':'calc(100% - 40px)','visibility':'visible'};
	      vm.chatStyle = {'height':'0','visibility':'hidden'};
	      vm.showChat = false;
	      if (!vm.showModels) {
	        vm.toggleModels();
	      }
	    } else {
	      if (vm.showModels) {
	        vm.chatStyle = {'height':'50%','visibility':'visible'};
	        vm.ModelsStyle = {'height':'calc(50% - 4px)','visibility':'visible'};
	      } else {
	        vm.ModelsStyle = {'height':'0','visibility':'hidden'};
	        vm.chatStyle = {'height':'calc(100% - 40px)','visibility':'visible'};
	      }
	      vm.showChat = true;
	    }
	  }
	}


	module.exports = function(){
	  return {
	    template: __webpack_require__(12),
	    controller: viewCtrl,
	    controllerAs : 'vm',
	    scope:{
	      namespace: '@'
	    }
	  }
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"background-div\" ng-style=\"vm.backgroundStyle\"></div>\r\n<div class=\"flex-container\">\r\n  <div class=\"flex-main\" ng-style=\"vm.mainStyle\">\r\n    <hls-player ng-style=\"vm.videoStyle\" ng-click=\"vm.onClick()\" ng-show=\"vm.showVideo\"></hls-player>\r\n    <gif-player ng-show=\"vm.showGif\" ng-click=\"vm.onClick()\"></gif-player>\r\n    <img class=\"fallback-img\" ng-style=\"vm.videoStyle\" ng-src=\"{{vm.imgSrc}}\" ng-show=\"!vm.showVideo\" ng-click=\"vm.onClick()\"/>\r\n    <div id=\"title\" ng-style=\"vm.titleStyle\" ng-show=\"!vm.camsinabox\">{{vm.stream}}</div>\r\n    <img id=\"logo\" ng-src=\"{{vm.logoSrc}}\" ng-style=\"vm.logoStyle\" ng-click=\"vm.onClick()\" ng-if=\"!vm.camsinabox\"/>\r\n    <div id=\"live-label\" ng-style=\"vm.liveLabelStyle\"><span class=\"live-text\">LIVE</span><div class=\"live-circle\"></div></div>\r\n    <div id=\"volume\" ng-style=\"vm.volumeStyle\" ng-click=\"vm.toggleMute()\" ng-show=\"vm.showVideo\">\r\n      <span class=\"mute-icon\" ng-show=\"vm.volume == 0\"></span>\r\n      <span class=\"volume-icon\" ng-show=\"vm.volume != 0\"></span>\r\n    </div>\r\n    <div class=\"join-login\" ng-show=\"vm.camsinabox\">\r\n      <img ng-src=\"{{vm.logoSrc}}\" class=\"bottom-logo\" ng-click=\"vm.onClick()\" ng-if=\"vm.camsinabox\"/>\r\n      <div class=\"join-btn\" ng-click=\"vm.onClick()\">Join for FREE!</div>\r\n      <div class=\"login-btn\" ng-click=\"vm.onLogin()\">Login</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"features-container\" ng-if=\"vm.camsinabox\" ng-style=\"vm.featuresStyle\">\r\n    <div class=\"chatting-with\">Chatting With {{vm.streamName | limitTo:10}}<span ng-if=\"vm.streamName.length > 10\">...</span><div class=\"arrow-up\" ng-show=\"vm.showChat\" ng-click=\"vm.toggleChat()\"></div><div class=\"arrow-down\" ng-show=\"!vm.showChat\" ng-click=\"vm.toggleChat()\"></div></div>\r\n    <chat ng-style=\"vm.chatStyle\"></chat>\r\n    <div class=\"models-title\">Trending Models<div class=\"arrow-up\" ng-show=\"vm.showModels\" ng-click=\"vm.toggleModels()\"></div><div class=\"arrow-down\" ng-show=\"!vm.showModels\" ng-click=\"vm.toggleModels()\"></div></div>\r\n    <models ng-style=\"vm.ModelsStyle\"></models>\r\n  </div>\r\n</div>\r\n<registration ng-show=\"vm.showRegister\" ng-if=\"vm.camsinabox\"></registration>\r\n<regsuccess ng-show=\"vm.showRegsuccess\" ng-if=\"vm.camsinabox\"></regsuccess>\r\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	hlsPlayerDirective.$inject = ['dispatcher', 'Consts', 'sharedData'];

	function hlsPlayerDirective(dispatcher, Consts, sharedData) {
	  return {
	    scope: {},
	    template: __webpack_require__(14),
	    link: function(scope, elem, attr) {
	      var v = angular.element(document.querySelector('#video'))[0];
	      var hls;
	      var stream = "";
	      var isFlashVideo = false;
	      v.volume = 0;
	      v.onerror = function(event) {
	        console.log("Video Error: ",event);
	      }
	      var ios_ver = !/iphone|ipad|ipod/i.test(navigator.userAgent) ? 0 : parseInt(navigator.userAgent.match(/OS (\d+)/)[1]);
	      var isios = /iphone|ipad|ipod/i.test(navigator.userAgent);

	      scope.$on(Consts.EVENTS.PLAY_VIDEO, function(ev,src) {
	        if (isios && ios_ver < 10 && ios_ver > 0) {
	          dispatcher.dispatch(Consts.EVENTS.CHECK_STREAM_ERROR,"internalException");
	          return;
	        }
	        if (sharedData.MOBILE && !sharedData.PREVIEW) {
	          playVideoNative(src);
	          return;
	        }
	        try {
	          if (!!hls) {
	            v.pause();
	            hls.destroy();
	          }
	          hls = new Hls();
	          hls.loadSource(src);
	          hls.attachMedia(v);
	          hls.on(Hls.Events.MANIFEST_PARSED, function() {
	            playVideo();
	          });

	          var playVideo = function() {
	            var isPlaying = v.currentTime > 0 && !v.paused && !v.ended && v.readyState > 2;
	            if (!isPlaying) {
	              v.play();
	            } else {
	              setTimeout(playVideo,500);
	            }
	          }

	          hls.on(Hls.Events.ERROR, function (event, data) {
	            console.log("HLS Error details: ",data.details);
	            dispatcher.dispatch(Consts.EVENTS.CHECK_STREAM_ERROR,data.details);
	          });
	        } catch(err) {
	          console.log("Error Playing Video: ",err);
	          dispatcher.dispatch(Consts.EVENTS.CHECK_STREAM_ERROR);
	        }
	      });

	      var playVideoNative = function(src) {
	        try {
	          var isPlaying = v.currentTime > 0 && !v.paused && !v.ended && v.readyState > 2;
	          if (!isPlaying) {
	            v.src = src;
	            v.play();
	          } else {
	            setTimeout(playVideoNative,500);
	          }
	        } catch(err) {
	          console.log("Error Playing Video: ",err);
	          dispatcher.dispatch(Consts.EVENTS.CHECK_STREAM_ERROR);
	        }
	      }

	      scope.$on(Consts.EVENTS.PLAY_VIDEO_SWF, function(ev,data) {
	        var flashvars = {};
	        var params = {};
	        var attributes = {};
	        params.wmode = 'transparent';
	        params.allowScriptAccess = "always";
	        var embedHandler = function (e) {
	          if (e.success) {
	            console.log('embed swf success');
	          } else {
	            console.log('embed swf FAIL');
	          }
	        }
	        var url = "https://secureimage.securedataimages.com/images/cams/flash/banners/VideoPlayer003.swf";
	        //var url = "http://dev27.cams.com/images/cams/flash/banners/VideoPlayer003.swf";
	        swfobject.embedSWF(url, "video", sharedData.WIDTH, sharedData.HEIGHT, "18.0.0", "https://secureimage.securedataimages.com/images/common/flash/upgrade/expressInstall.swf",flashvars,params,attributes,embedHandler);

	        swfLoaded = function() {
	          var videoplayer = document.getElementById('video');
	          videoplayer.playVideo("rtmp://" + data.mpp, data.stream);
	          isFlashVideo = true;
	        }
	      });

	      scope.$on(Consts.EVENTS.SET_VOLUME, function(ev,volume){
	        if (!!isFlashVideo) {
	          var videoplayer = document.getElementById('video');
	          videoplayer.setVolume(volume);
	        } else {
	          var v = angular.element(document.querySelector('#video'))[0];
	          v.volume = volume;
	        }
	      });
	    }
	  }
	}

	module.exports = hlsPlayerDirective;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<video muted webkit-playsinline playsinline autoplay preload=\"none\" id=\"video\"></video>\r\n";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	gifPlayerDirective.$inject = ['dispatcher', 'Consts', 'sharedData'];

	function gifPlayerDirective(dispatcher, Consts, sharedData) {
	  return {
	    scope: {},
	    template: __webpack_require__(16),
	    link: function(scope, elem, attr) {

	      function getRandomInt(min, max) {
	          return Math.floor(Math.random() * (max - min + 1)) + min;
	      }

	      scope.$on(Consts.EVENTS.PLAY_GIF, function() {
	        var img = angular.element(document.querySelector('#gif-player'))[0];
	        var rnd = getRandomInt(0, sharedData.GIF_ARRAY.length - 1);
	        console.log("SHOWING IMAGE #:",rnd);
	        img.src = sharedData.GIF_ROOT + sharedData.GIF_ARRAY[rnd] + ".gif";
	      });
	    }
	  }
	}

	module.exports = gifPlayerDirective;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<img id=\"gif-player\"/>\r\n";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	chatCtrl.$inject = ['$scope','Consts','sharedData', 'dispatcher', 'chatMessages'];

	function chatCtrl($scope,Consts,sharedData,dispatcher,chatMessages){
	  var vm            = this;
	  var chatIndex;
	  var msgIndex;
	  var int;

	  $scope.$on(Consts.EVENTS.NEW_STREAM, function(ev, data){
	    vm.streamName = data;
	    generateChat();
	  });

	  var generateChat = function() {
	    vm.chatText = "";
	    msgIndex = 0;
	    chatIndex = getRandomInt(0, chatMessages.CHATS.length -1);
	    if (int) clearInterval(int);
	    var t = getRandomInt(4,8);
	    int = setInterval(addChat, t * 1000);
	  }

	  var addChat = function() {
	    $scope.$apply();
	    if (msgIndex < chatMessages.CHATS[chatIndex].length) {
	      var msg = chatMessages.CHATS[chatIndex][msgIndex];
	      msg = msg.replace("{MODEL}:","<span class=modelname>{MODEL}:</span>");
	      msg = msg.replace("{MODEL}",vm.streamName);
	      msg = msg.replace("{MEMBER}:","<span class=username>{MEMBER}:</span>");
	      var memberIndex = getRandomInt(0, chatMessages.USERS.length -1);
	      msg = msg.replace("{MEMBER}",chatMessages.USERS[memberIndex]);
	      vm.chatText += msg + "<br>";
	      $scope.$apply();
	      msgIndex++;
	    }
	  }

	  vm.onClick = function() {
	    dispatcher.dispatch(Consts.EVENTS.ON_CLICK);
	  }

	  function getRandomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min)) + min;
	  }
	}

	module.exports = function(){
	  return {
	    template: __webpack_require__(18),
	    controller: chatCtrl,
	    controllerAs : 'vm',
	    scope:{
	      namespace: '@'
	    }
	  }
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"chat-holder scroll-style\" scroll-glue><span class=\"chat-message\" ng-bind-html=\"vm.chatText\"></span></div>\r\n<input type=\"text\" class=\"input-text chat-input\" placeholder=\"Type your message\" ng-enter=\"vm.onClick()\"/>\r\n<div class=\"emoticon-icon\" ng-click=\"vm.onClick()\"></div>\r\n<div class=\"whisper-icon\" ng-click=\"vm.onClick()\"></div>\r\n<div class=\"send-btn\" ng-click=\"vm.onClick()\">Send</div>\r\n";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	modelsCtrl.$inject = ['$scope','Consts','dispatcher'];

	function modelsCtrl($scope,Consts,dispatcher){
	  var vm            = this;

	  $scope.$on(Consts.EVENTS.TRENDING_MODELS, function(ev, data){
	    vm.trendingModels = data;
	  });

	  vm.onClick = function() {
	    dispatcher.dispatch(Consts.EVENTS.ON_CLICK);
	  }
	}

	module.exports = function(){
	  return {
	    template: __webpack_require__(20),
	    controller: modelsCtrl,
	    controllerAs : 'vm',
	    scope:{
	      namespace: '@'
	    }
	  }
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"models-holder scroll-style\">\r\n  <div class=\"model-image\" ng-repeat=\"model in vm.trendingModels\">\r\n    <img ng-src=\"https://secureimage.securedataimages.com/images/streamray/streams/{{model.s}}_150.gif\" ng-click=\"vm.onClick()\"/>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	registrationCtrl.$inject = ['$scope','Consts','dispatcher','$document','$window','sharedData','$http','$timeout'];

	function registrationCtrl($scope,Consts,dispatcher,$document,$window,sharedData,$http,$timeout){
	  var vm                = this;
	  vm.reg_error_handle   = '';
	  vm.reg_error_email    = '';
	  vm.reg_error_password = '';
	  vm.handle             = '';
	  vm.email              = '';
	  vm.password           = '';
	  vm.formError          = false;
	  vm.showSpinner        = false;
	  vm.showWarning        = false;
	  vm.warningMsg         = '';
	  vm.site               = sharedData.SITE;

	  var error_msg_reg = {
	    allfields : "All fields are required to be filled.",
	    handle : "Your username is missing.",
	    handle_used : "The username you have selected is already being used.  Please choose another.",
	    handle_suggested : "The following names are still available:",
	    handle_format : "Please do not use special characters or spaces in your username.",
	    handle_length : "Your username must be 4-16 characters long.",
	    handle_banned : "Please choose another username as the one you have chosen may be inappropriate.",
	    email : "Your email address is blank.",
	    email_unique : "Please choose a different email.",
	    email_too_long : "Your email address is too long.",
	    email_wrong_format : "Your email is in the wrong format.",
	    email_baddomain_alt : "We cannot send email to that domain.  Please try another email address.",
	    baddomain_alt_email : "The mail system is unstable. Please use another email provider.",
	    email_baddomain : "Your email domain is incorrect.",
	    email_invaliddomain : "Your email domain name is invalid.",
	    email_diff : "Please choose a different email.",
	    email_validation_status_string : "[text register_errors_validation_email]",
	    baddomain : "This email address is invalid.  Please check the spelling or provide another email address.",
	    password_change : "Change Your Password",
	    short_password : "Your password must be 5-16 characters and contain only letters and numbers."
	  }

	  vm.onClose = function() {
	    dispatcher.dispatch(Consts.EVENTS.REGISTER, false);
	  }

	  $scope.$on(Consts.EVENTS.NEW_STREAM, function(ev, data){
	    vm.streamName = data;
	  });

	  vm.do_register = function(event) {
	    vm.showSpinner = true;
	    event.preventDefault();
	    vm.vals = {
	      "site":"cams",
	      "REG_handle":vm.handle,
	      "password":vm.password,
	      "email":vm.email,
	      "profile_type":"2",
	      "from_ad":sharedData.PID,
	      "beta":"1",
	      "last_viewed":vm.streamName,
	      "action":"page1",
	      "main":"1",
	      "reg_ccconfirm":"0",
	      "json":"1",
	      "ajax":"1",
	      "callback":"process_register",
	      "no_perf":"1",
	      "source":"camsinabox",
	      "skip_lpo":"1",
	      "dcb":sharedData.SITE
	    };
	    if (vm.handle == '' || vm.password == '' || vm.password == '') {
	      vm.showSpinner = false;
	      vm.warningMsg = "All required fields must be filled out.";
	      vm.showWarning = true;
	      return false;
	    }
	    vm.reg_error_handle = '';
	    vm.reg_error_email = '';
	    vm.reg_error_password = '';

	    var url = 'https://secure.cams.com/p/iframe_register.cgi';
	    xsend(url,'header_register',vm.vals);
	  }

	  var xsend = function (a,b,data) {
	    var dataString = serialize(data);
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.async = 'true';
	    script.id = b;

	    script.onerror = function (e) {
	      vm.showSpinner = false;
	      vm.warningMsg = "There was a problem retrieving data";
	      vm.showWarning = true;
	    };

	    $http({
	      method: 'POST',
	      url: a,
	      data: dataString,
	      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
	      xhrFields: {"withCredentials": true}
	    })
	   .then(
	       function(response){
	         console.log("Got post response asyc: ",response.data);
	         if (document.getElementById(b)) {
	           document.getElementsByTagName('head')[0].replaceChild(script,document.getElementById(b));
	         } else {
	           document.getElementsByTagName('head')[0].appendChild(script);
	         }
	         script.innerHTML = response.data;
	       },
	       function(error){
	           console.log("Error posting data: ",error);
	           vm.showSpinner = false;
	           vm.warningMsg = "Error posting data";
	           vm.showWarning = true;
	           return;
	       }
	    );

	  }

	  var serialize = function(obj, prefix) {
	    var str = [], p;
	    for(p in obj) {
	      if (obj.hasOwnProperty(p)) {
	        var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
	        str.push((v !== null && typeof v === "object") ?
	          serialize(v, k) :
	          encodeURIComponent(k) + "=" + encodeURIComponent(v));
	      }
	    }
	    return str.join("&");
	  }

	  process_register = function (a) {
	    if (a.status == 'success'){
	      vm.formError = false;
	      do_login();
	      return false;
	    } else {
	      $timeout(function() {
	        vm.showSpinner = false;
	        vm.formError = true;
	        var handle_msg = "";
	        var email_msg = "";
	        var password_msg = "";
	        for (var i in a.error) {
	          if ( i != 'count' ) {
	            if (i.indexOf('handle') != -1) {
	              handle_msg += error_msg_reg[i]+' ';
	              vm.reg_error_handle = handle_msg;
	            } else if (i.indexOf('email') != -1) {
	              email_msg += error_msg_reg[i]+' ';
	              vm.reg_error_email = email_msg;
	            } else if (i.indexOf('password') != -1) {
	              password_msg += error_msg_reg[i]+' ';
	              vm.reg_error_password = password_msg;
	            }
	          }
	        }
	      }, 0);
	    }
	  }

	  var do_login = function() {
	    document.getElementById("loginform").submit();
	    postLogin();
	  }

	  postLogin = function() {
	    vm.showSpinner = false;
	    dispatcher.dispatch(Consts.EVENTS.REGISTER, false);
	    dispatcher.dispatch(Consts.EVENTS.REG_SUCCESS, true);
	  }

	  $scope.$on(Consts.EVENTS.NEW_STREAM, function(ev, data){
	    vm.stream = data;
	  });

	  vm.openLegal = function(dest) {
	    var link;
	    if (dest == 'terms') {
	      link = "https://secure.cams.com/go/page/terms_of_use.html?dcb="+sharedData.SITE;
	    } else if (dest == 'privacy') {
	      link = "https://secure.cams.com/go/page/privacy.html?dcb="+sharedData.SITE;
	    } if (dest == 'cookies') {
	      link = "https://secure.cams.com/go/page/privacy.html?iframeanchor=sec2&dcb="+sharedData.SITE;
	    }
	    $window.open(link, "_blank");
	  }

	  vm.clickLogin = function() {
	    var target = "_top";
	    if (sharedData.NEW_WINDOW == "1") {
	      target = "_blank";
	    }
	    var link = "https://secure.cams.com/p/login.cgi";
	    if (sharedData.SITE != "") {
	      link = link + "?dcb=" + sharedData.SITE;
	    }
	    $window.open(link, target);
	  }

	  vm.onOK = function() {
	    vm.formError = false;
	    vm.showWarning = false;
	  }
	}

	module.exports = function(){
	  return {
	    template: __webpack_require__(22),
	    controller: registrationCtrl,
	    controllerAs : 'vm',
	    scope:{
	      namespace: '@'
	    }
	  }
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"frame\">\r\n  <span class=\"title\"><span class=\"title-orange\">Join now!</span> It's totally FREE!\r\n    <span class=\"line-break\"></span>\r\n    <span class=\"sub-title\">No credit card needed</span></span>\r\n    <form id=\"signup_form\" action=\"/p/register.cgi\" method=\"get\" ng-submit=\"vm.do_register($event)\">\r\n      <input type=\"text\" name=\"REG_handle\" placeholder=\"Create Username\" value=\"\" maxlength=\"16\" tabindex=\"1\" id=\"input_handle\" ng-model=\"vm.handle\"/>\r\n      <div class=\"lm_error\" ng-if=\"vm.reg_error_handle != ''\">{{vm.reg_error_handle}}</div>\r\n      <div class=\"spacer\" ng-if=\"vm.reg_error_handle == ''\"></div>\r\n      <input type=\"text\" name=\"email\" value=\"\" placeholder=\"Email Address\" id=\"input_email\" tabindex=\"2\" ng-model=\"vm.email\"/>\r\n      <div class=\"lm_error\" ng-if=\"vm.reg_error_email != ''\">{{vm.reg_error_email}}</div>\r\n      <div class=\"spacer\" ng-if=\"vm.reg_error_email == ''\"></div>\r\n      <input type=\"password\" name=\"password\" value=\"\" placeholder=\"Choose Password\" id=\"input_pass2\" tabindex=\"3\" ng-model=\"vm.password\"/>\r\n      <div class=\"password-guide\" ng-if=\"vm.reg_error_password == ''\">5 or more characters. Case sensitive.</div>\r\n      <div class=\"lm_error\" ng-if=\"vm.reg_error_password != ''\">{{vm.reg_error_password}}</div>\r\n      <div class=\"spacer\" ng-if=\"vm.reg_error_password == ''\"></div>\r\n      <input class=\"orange-button\" id=\"reg_submit\" type=\"submit\" value=\"Join for Free\"  tabindex=\"4\"/>\r\n      <div class=\"legal-stuff\" ng-if=\"!vm.formError\">By registering on {{vm.site}}, I certify I am at least 18 years old and have read and agree to its <a href ng-click=\"vm.openLegal('terms')\">Terms of Use</a> and <a href ng-click=\"vm.openLegal('privacy')\">Privacy Policy</a>, and consent to the use of <a href ng-click=\"vm.openLegal('cookies')\">Cookies</a>.</div>\r\n      <div class=\"legal-stuff already-member\"  ng-if=\"!vm.formError\">Already a member? <a href ng-click=\"vm.clickLogin()\">Login</a></div>\r\n    </form>\r\n  </span>\r\n</div>\r\n<div class=\"close\" ng-click=\"vm.onClose()\"></div>\r\n<div class=\"loader-holder\" ng-if=\"vm.showSpinner\">\r\n  <div class=\"loader\"></div>\r\n</div>\r\n<div class=\"warning-holder\" ng-if=\"vm.showWarning\">\r\n  <div class=\"warning\">\r\n    <span class=\"wraning-text\">{{vm.warningMsg}}</span>\r\n    <div class=\"ok-button\" ng-click=\"vm.onOK()\">OK</div>\r\n  </div>\r\n</div>\r\n<form id=\"loginform\" target=\"loginframe\" method=\"post\" action=\"https://secure.cams.com/p/iframe_login.cgi\">\r\n<input type=\"hidden\" name=\"handle\" value=\"{{vm.handle}}\"/>\r\n<input type=\"hidden\" name=\"password\" value=\"{{vm.password}}\"/>\r\n<input type=\"hidden\" name=\"json\" value=\"1\"/>\r\n<input type=\"hidden\" name=\"ajax\" value=\"1\"/>\r\n<input type=\"hidden\" name=\"dcb\" value=\"{{vm.site}}\"/>\r\n<input type=\"hidden\" name=\"action\" value=\"login\"/>\r\n<input type=\"hidden\" name=\"bypass_timeout\" value=\"1\"/>\r\n<input type=\"hidden\" name=\"do_cookies\" value=\"1\"/>\r\n<input type=\"hidden\" name=\"source\" value=\"camsinabox\"/>\r\n<input type=\"hidden\" name=\"autologin\" value=\"1\"/>\r\n<input type=\"hidden\" name=\"keep_login\" value=\"on\"/>\r\n</form>\r\n<iframe name=\"loginframe\" style=\"display:none\"></iframe>\r\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	regsuccessCtrl.$inject = ['$scope','Consts','dispatcher','$document','$window','sharedData'];

	function regsuccessCtrl($scope,Consts,dispatcher,$document,$window,sharedData){
	  var vm                = this;

	  $scope.$on(Consts.EVENTS.NEW_STREAM, function(ev, data){
	    vm.stream = data;
	  });

	  vm.onLogin = function() {
	    var target = "_top";
	    if (sharedData.NEW_WINDOW == "1") {
	      target = "_blank";
	    }
	    if (sharedData.LINK != "") {
	      var link = decodeURIComponent(sharedData.LINK);
	      if (vm.stream && link.indexOf("{stream}") != -1){
	        link = link.replace("{stream}",vm.stream.toLowerCase());
	      }
	      if (sharedData.SITE != "") {
	        link = link + "&dcb=" + sharedData.SITE;
	      }
	      $window.open(link, target);
	    }
	  }

	  vm.onClose = function() {
	    dispatcher.dispatch(Consts.EVENTS.REG_SUCCESS, false);
	  }
	}

	module.exports = function(){
	  return {
	    template: __webpack_require__(24),
	    controller: regsuccessCtrl,
	    controllerAs : 'vm',
	    scope:{
	      namespace: '@'
	    }
	  }
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"frame\">\r\n  <div class=\"msg\">Registration successful.</div>\r\n  <div class=\"login-button\" ng-click=\"vm.onLogin()\">Login</div>\r\n</div>\r\n<div class=\"close\" ng-click=\"vm.onClose()\"></div>\r\n";

/***/ })
/******/ ]);