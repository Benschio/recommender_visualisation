// zoo.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var getBarkStyle = function getBarkStyle(isHowler) {
  return isHowler ? 'woooooow!' : 'woof, woof!';
};

var Dog = (function () {
  function Dog(name, breed) {
    _classCallCheck(this, Dog);

    this.name = name;
    this.breed = breed;
  }

  _createClass(Dog, [{
    key: 'bark',
    value: function bark() {
      return this.name + ': ' + getBarkStyle(this.breed === 'husky');
    }
  }]);

  return Dog;
})();

exports.Dog = Dog;

var Wolf = (function () {
  function Wolf(name) {
    _classCallCheck(this, Wolf);

    this.name = name;
  }

  _createClass(Wolf, [{
    key: 'bark',
    value: function bark() {
      return this.name + ': ' + getBarkStyle(true);
    }
  }]);

  return Wolf;
})();

exports.Wolf = Wolf;