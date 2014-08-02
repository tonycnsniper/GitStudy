var http = require('http')
var bl = require('bl')
var urls = []

urls.push(process.argv[4])
urls.push(process.argv[3])
urls.push(process.argv[2])

urls.forEach(function(url) {	
	http.get(url, function(response){	
			response.pipe(bl(function(err, data) {
							if(err) return console.error(err)
							data = data.toString()
							console.log(data)
			})
		)}
	)}
)