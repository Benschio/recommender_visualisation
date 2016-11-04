// main.js
'use strict';

var _zoo = require('./zoo');

var myDog = new _zoo.Dog('Sherlock', 'beagle');
document.getElementById('content').innerHTML += myDog.bark();

var myWolf = new _zoo.Wolf('Direwolf');
document.getElementById('content').innerHTML += '<br/>' + myWolf.bark();

document.getElementById('loadCat').addEventListener('click', function (e) {
	require.ensure([], function () {
		var Cat = require('./cat');

		var myCat = new Cat('Bugsy');
		document.getElementById('content').innerHTML += '<br/>' + myCat.meow();
	});
});