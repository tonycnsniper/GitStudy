var bodyparser = require('body-parser');

var express = require('express');

var app = express();

app.use(bodyparser.urlencoded({extend: false}))

var __dirname = process.argv[3];

app.set('views', __dirname);

app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.render('index')
})

app.post('/form', function(req, res) {
	var text = req.body.str.split('').reverse().join().replace(/,/g,"")
	res.end(text)
	// res.render('index', {text: text.toString()})
})

app.listen(process.argv[2]);