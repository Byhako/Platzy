module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/channel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);

var _jsxFileName = "/home/ruben/github/Platzy/nextjs/pages/channel.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channel = _props.channel,
          audioclips = _props.audioclips,
          series = _props.series;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-777396582"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-777396582"
      }, "Podcats"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-777396582"
      }, channel.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-777396582"
      }, "Series"), series.map(function (serie, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          className: "jsx-777396582"
        }, serie.title);
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-777396582"
      }, "Ultimos Podcats"), audioclips.map(function (clip, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-777396582"
        }, clip.title);
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "777396582",
        css: "header.jsx-777396582{color:#fff;background:#8756ca;padding:15px;text-align:center;}h1.jsx-777396582:{font-weight:600;padding:15px;}h2.jsx-777396582{padding:5px;font-size:20px;font-weight:600;margin:0;text-align:center;}body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNxQixBQUd3QixBQU1LLEFBSUosQUFPSCxTQUNYLEVBakJxQixDQVVKLElBSkYsV0FLRyxFQUpsQixDQU5lLGFBQ0ssQUFVVCxTQUNTLFNBVnBCLFNBV0EiLCJmaWxlIjoicGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydWJlbi9naXRodWIvUGxhdHp5L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cXVlcnl9KSB7XG4gICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG5cbiAgICBsZXQgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApXG4gICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgbGV0IHJlcUF1ZGlvID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICBsZXQgZGF0YUF1ZGlvID0gYXdhaXQgcmVxQXVkaW8uanNvbigpXG4gICAgbGV0IGF1ZGlvY2xpcHMgPSBkYXRhQXVkaW8uYm9keS5hdWRpb19jbGlwc1xuXG4gICAgbGV0IHJlcVNlcmllcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXG4gICAgbGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuXG4gICAgcmV0dXJuIHtjaGFubmVsLCBhdWRpb2NsaXBzLCBzZXJpZXN9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvY2xpcHMsIHNlcmllcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVyPlBvZGNhdHM8L2hlYWRlcj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjaGFubmVsLnRpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxoMj5TZXJpZXM8L2gyPlxuICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+e3NlcmllLnRpdGxlfTwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICA8aDI+VWx0aW1vcyBQb2RjYXRzPC9oMj5cbiAgICAgICAge2F1ZGlvY2xpcHMubWFwKChjbGlwLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PntjbGlwLnRpdGxlfTwvZGl2PlxuICAgICAgICApKX1cblxuXG5cbiAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDE6IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/channel.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, idChannel, reqChannel, dataChannel, channel, reqAudio, dataAudio, audioclips, reqSeries, dataSeries, series;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idChannel = query.id;
                _context.next = 4;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel));

              case 4:
                reqChannel = _context.sent;
                _context.next = 7;
                return reqChannel.json();

              case 7:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 11;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"));

              case 11:
                reqAudio = _context.sent;
                _context.next = 14;
                return reqAudio.json();

              case 14:
                dataAudio = _context.sent;
                audioclips = dataAudio.body.audio_clips;
                _context.next = 18;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"));

              case 18:
                reqSeries = _context.sent;
                _context.next = 21;
                return reqSeries.json();

              case 21:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audioclips: audioclips,
                  series: series
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/channel.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map