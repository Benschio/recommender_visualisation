webpackJsonp([1],{

/***/ 2:
/***/ function(module, exports) {

	// cat.js
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cat = (function () {
	  function Cat(name) {
	    _classCallCheck(this, Cat);

	    this.name = name;
	  }

	  _createClass(Cat, [{
	    key: "meow",
	    value: function meow() {
	      return this.name + ": You gotta be kidding that I'll obey you, right?";
	    }
	  }]);

	  return Cat;
	})();

	exports["default"] = Cat;
	module.exports = exports["default"];

/***/ }

});