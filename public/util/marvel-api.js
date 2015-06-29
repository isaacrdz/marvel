'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = window.jQuery;

var MarvelApi = (function () {
	function MarvelApi() {
		_classCallCheck(this, MarvelApi);
	}

	_createClass(MarvelApi, [{
		key: 'contructor',
		value: function contructor(key) {
			this.key = key;
			this.baseUrl = 'http://gateway.marvel.com/v1/public/';
		}
	}, {
		key: 'findSeries',
		value: function findSeries(title) {

			var url = this.baseUrl + 'series?title=' + title + '&apikey=' + this.key;
			return Promise.resolve($.get(url));
		}
	}]);

	return MarvelApi;
})();

window.MarvelApi = MarvelApi;