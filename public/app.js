'use strict';

var $ = window.jQuery;

var MarvelApi = window.MarvelApi;

var key = 'c01e0e93e1b3107524b76e01c3b53166';
var api = new MarvelApi(key);

api.findSeries('avengers').then(function (results) {
	debugger;
	var characters = results.data.results[0].characters.items;
	var promises = [];
	for (var i in characters) {
		var character = characters[i];
		var characterUrl = character.resourceURI + '?' + key;
		promises.push(Promise.resolve($.get(characterUrl)));
	}
	return Promise.all(promises);
}).then(function (characters) {
	console.log(characters);
})['catch'](function (err) {

	console.error(err);
});