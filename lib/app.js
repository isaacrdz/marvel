var $ = window.jQuery

var key = 'apikey=c01e0e93e1b3107524b76e01c3b53166'
var url ='http://gateway.marvel.com:80/v1/public/series?title=avengers&'

Promise.resolve($.get(url))
.then(function(results){
	var characters = results.data.results[0].characters.items
	var characterUrl = characters[0].resourceURI + '?' + key
	return Promise.resolve($.get(characterUrl))
})
.then(function(){
	debugger
})
.catch(function(err){
	debugger
	console.error(err)
})