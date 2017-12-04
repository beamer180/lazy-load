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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazyLoad_js__ = __webpack_require__(7);


var lazyLoad = new __WEBPACK_IMPORTED_MODULE_0__lazyLoad_js__["a" /* default */]();
lazyLoad.start();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LazyLoad = function () {
  function LazyLoad() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'img.lazy-load';

    _classCallCheck(this, LazyLoad);

    this.images = [].slice.call(document.querySelectorAll(selector));
  }

  _createClass(LazyLoad, [{
    key: 'start',
    value: function start() {
      this.setupIntersectionObserver();
      this.processScroll(this.images);
    }
  }, {
    key: 'setupIntersectionObserver',
    value: function setupIntersectionObserver() {
      var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var options = {
        root: rootElement,
        rootMargin: '50px 0px',
        threshold: 0.01
      };
      this.intersectionObserver = new IntersectionObserver(this.intersectCallback.bind(this), options);
    }
  }, {
    key: 'intersectCallback',
    value: function intersectCallback(entries, observer) {
      var _this = this;

      entries.forEach(function (entry) {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
          // Don't block the main thread
          window.requestIdleCallback(function (_) {
            _this.loadImage(entry.target);
          });
        }
      });
    }
  }, {
    key: 'processScroll',
    value: function processScroll(elements) {
      var _this2 = this;

      elements.forEach(function (lazyElement) {
        _this2.intersectionObserver.observe(lazyElement);
      });
    }
  }, {
    key: 'loadImage',
    value: function loadImage(element) {
      var src = element.dataset.src;
      var width = element.getAttribute('width');
      var height = element.getAttribute('height');

      var img = new Image();
      img.src = src;
      img.width = width;
      img.height = height;
      img.addEventListener('load', function (_) {
        element.parentNode.replaceChild(img, element);
      });
    }
  }]);

  return LazyLoad;
}();

/* harmony default export */ __webpack_exports__["a"] = (LazyLoad);

/***/ })
/******/ ]);