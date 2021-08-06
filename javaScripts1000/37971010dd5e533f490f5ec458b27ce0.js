/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wps/build/webpack/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Util"] = __webpack_require__(1);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

/* global $ */
const extraShareOptions = (function () {
  const init = () => {
    function toggleDisplay(element) {
      const style = element.style;
      style.display = style.display.match('block') ? 'none' : 'block';
    }
    function setListener(eventName, eventElement, targetElements) {
      eventElement.addEventListener(eventName, () => {
        targetElements.forEach((target) => {
          toggleDisplay(target);
        });
      });
    }
    function setEvents(targetSelector, toggleSelector) {
      const targets = document.querySelectorAll(toggleSelector);
      document.querySelectorAll(targetSelector).forEach((element) => {
        if ('ontouchstart' in document.documentElement) {
          setListener('click', element, targets);
        } else {
          setListener('mouseover', element, targets);
          setListener('mouseout', element, targets);
        }
      });
    }
    setEvents('.event-read-next-section', '.extra-share-read-next-section');
    setEvents('.event-author-section', '.extra-share-author-section');
  };
  return {
    init,
  };
}());

extraShareOptions.init();


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Util"] = __webpack_require__(16);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* global $ */
const breakingNews = (function () {
  const init = () => {
    document.querySelectorAll('.close-breaking-news').forEach((element) => {
      element.addEventListener('click', () => {
        $('.breaking-news-macro').slideUp('slow', () => {
          document.querySelectorAll('.breaking-news-macro').forEach((elem) => {
            elem.style.display = 'none !important';
          });
        });
      });
    });
  };

  return {
    init,
  };
}());

breakingNews.init();


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Util"] = __webpack_require__(18);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* global $ window document videojs */
window.mediaGalleryActions = (function () {
  const videoGalleryHandler = () => {
    $('.media-gallery.video-gallery .column').on('click', function () {
      const videoPlaying = $(this).siblings().find('.video-js.vjs-playing').find('video')
        .attr('id');

      const videosPlayingAds = $(this).siblings().find('.vjs-ad-playing').find('video.vjs-tech');

      if (videoPlaying) {
        videojs(videoPlaying).pause();
      } else if (videosPlayingAds) {
        videosPlayingAds.each(function () {
          videojs.getPlayer($(this).attr('id')).ima.pauseAd();
        });
      }
    }).on('keydown', function () {
      const videoPlaying = $(this).siblings().find('.video-js.vjs-playing').find('video')
        .attr('id');

      const videosPlayingAds = $(this).siblings().find('.vjs-ad-playing').find('video.vjs-tech');

      if (videoPlaying) {
        videojs(videoPlaying).pause();
      } else if (videosPlayingAds) {
        videosPlayingAds.each(function () {
          videojs.getPlayer($(this).attr('id')).ima.pauseAd();
        });
      }
    });
  };

  const init = () => {
    videoGalleryHandler();
  };

  return {
    init,
  };
}());

window.mediaGalleryActions.init();


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Util"] = __webpack_require__(20);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* global $ window document */
window.mediaGallery = (function () {
  const itemClickListener = (e) => {
    const currentGallery = e.target.closest('.media-gallery-wrap');
    const targetElement = e.target.closest('.column');
    const activeSlides = currentGallery.querySelectorAll('.column.active');

    if (!targetElement.classList.contains('active')) {
      e.stopPropagation();
      e.preventDefault();
      activeSlides.forEach(slide => {
        slide.classList.remove('active');
      });
      targetElement.classList.add("active");
    };
  };

  const itemKeyNavListener = (e) => {
    const isNavKey = k => ['Tab', 'Enter', ' ']
      .reduce((p, navk) => (navk === k) || p, false);
    if (isNavKey(e.key)) {
      itemClickListener(e);
    };
  };

  const init = () => {
    const items = document.querySelectorAll('.media-gallery .column');

    const onLoad = (e) => {
      onResize();

      window.addEventListener("resize", onResize);
    };

    window.addEventListener("load", onLoad);

    const onResize = (e) => {
      if (window.innerWidth > 1020) {
        items.forEach(item => {
          item.addEventListener("click", itemClickListener);
          item.addEventListener("keyup", itemKeyNavListener)});
      } else {
        items.forEach(item => {
          item.removeEventListener("click", itemClickListener);
          item.addEventListener("keyup", itemKeyNavListener)});
      };
    };
  };

  return {
    init,
  };
}());

window.mediaGallery.init();


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Util"] = __webpack_require__(22);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(21);
__webpack_require__(19);
module.exports = __webpack_require__(17);


/***/ })
/******/ ]);