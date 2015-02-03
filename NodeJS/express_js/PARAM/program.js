var express = require('express')

var app = express()

var crypto = require('crypto')

app.put('/message/:id', function(req, res){
	var id = req.params.id
	var sha1 = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
	res.end(sha1);
})

app.listen(process.argv[2])