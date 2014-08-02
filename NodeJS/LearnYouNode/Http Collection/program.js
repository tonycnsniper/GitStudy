var http = require('http');
var bl = require('bl');
var concat = require('concat-stream');

var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function(err, data){
		if(err) 
		return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))

	// response.setEncoding('utf8')
	// response.pipe(concat(function(data){
	// 	console.log(data)
	// }))
})