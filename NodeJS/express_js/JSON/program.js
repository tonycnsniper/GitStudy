var fs = require('fs')

var express = require('express')

var app = express()
var option = {
	flags: 'r',
	encoding: 'utf8'
}
app.get('/books', function(req, res){
	fs.readFile(process.argv[3], option, function(err, data){
		if(err) throw err
		books = JSON.parse(data)
	
	res.json(books)
	});
})

app.listen(process.argv[2])