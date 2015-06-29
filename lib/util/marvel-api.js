var $ = window.jQuery

class MarvelApi{
	contructor (key){
		this.key = key
		this.baseUrl = 'http://gateway.marvel.com/v1/public/'
	}

	findSeries (title){
	
	let url = `${this.baseUrl}series?title=${title}&apikey=${this.key}`
	return Promise.resolve($.get(url))

	}
}

window.MarvelApi = MarvelApi