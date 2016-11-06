/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _index = __webpack_require__(3);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _availablegraphs = __webpack_require__(5);
	
	var _availablegraphs2 = _interopRequireDefault(_availablegraphs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var eles = (0, _index2.default)(_availablegraphs2.default);
	//eles.forEach((ele) => {
	(0, _reactDom.render)(eles, document.querySelector('#app-main'));
	//})
	
	/*var x = 0;
	
	graphs.forEach((svgobj) => {
		//val element = GraphThumbnail(svgobj);
		x = x + 1;
		render(GraphThumbnail(svgobj), document.querySelector('#app-main'));
	});*/
	//render(<App/>, document.querySelector('#app-main'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _controlUI = __webpack_require__(4);
	
	var _controlUI2 = _interopRequireDefault(_controlUI);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GraphThumbnail = function GraphThumbnail(props) {
		return _react2.default.createElement(
			'svg',
			{ width: props.width, height: props.height, key: props.id },
			_react2.default.createElement('rect', { width: props.width, height: '100', stroke: 'green', strokeWidth: '4', fill: 'yellow' })
		);
	};
	
	var renderGraphThumbnails = function renderGraphThumbnails(graphs) {
		return _react2.default.createElement(
			'div',
			null,
			graphs.map(function (graph) {
				return GraphThumbnail(graph);
			})
		);
	};
	
	exports.default = renderGraphThumbnails;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ControlUI = function (_React$Component) {
	  _inherits(ControlUI, _React$Component);
	
	  function ControlUI(props) {
	    _classCallCheck(this, ControlUI);
	
	    return _possibleConstructorReturn(this, (ControlUI.__proto__ || Object.getPrototypeOf(ControlUI)).call(this));
	  }
	
	  _createClass(ControlUI, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'control-ui' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Welcome to graph based Recommendations!'
	        ),
	        _react2.default.createElement(
	          'button',
	          null,
	          'Blahoo'
	        )
	      );
	    }
	  }]);
	
	  return ControlUI;
	}(_react2.default.Component);
	
	exports.default = ControlUI;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var graphs = [{
		width: "100",
		height: "100",
		id: "u0"
		/*type:	"circle",
	 "1": 	'cx="50"',
	 "2": 	'cy="50"',
	 "3": 	'r="40"',
	 "4": 	'stroke="blue"',
	 "5": 	'stroke-width="4"',
	 "6": 	'fill="brown"'*/
	}, {
		width: "101",
		height: "100",
		type: "circle",
		id: "u1"
		/*"1": 	'cx="50"',
	 "2": 	'cy="50"',
	 "3": 	'r="40"',
	 "4": 	'stroke="blue"',
	 "5": 	'stroke-width="4"',
	 "6": 	'fill="brown"'*/
	}, {
		width: "102",
		height: "100",
		type: "circle",
		id: "u2" /*
	          "1": 	'cx="50"',
	          "2": 	'cy="50"',
	          "3": 	'r="40"',
	          "4": 	'stroke="blue"',
	          "5": 	'stroke-width="4"',
	          "6": 	'fill="brown"'*/
	}];
	
	exports.default = graphs;

/***/ }
/******/ ]);
//# sourceMappingURL=visualisationbundle.js.map