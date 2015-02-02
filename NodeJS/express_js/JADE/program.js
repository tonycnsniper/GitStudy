var express = require('express')

var path = require('path')

var app = express();

var port = process.argv[2];

var __dirname = process.argv[3];

app.set('views', __dirname);
// app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
})

app.listen(port);