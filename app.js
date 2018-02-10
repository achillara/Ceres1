
var express = require('express'); 
var app = express(); 
var server = require('http').createServer(app); 
var port = process.env.PORT || 3000;

server.listen(port);

app.use(express.static(__dirname + '/public'));


