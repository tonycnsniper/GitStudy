var express = require('express')

var app = express()

var styl = require('stylus')

var path = require('path')

var port = process.argv[2]

app.use(styl.middleware(__dirname + '/public'))

app.use(express.static(process.argv[3]||path.join(__dirname,'public')))

app.listen(port)