
var express = require('express'); 
var app = express(); 
var server = require('http').createServer(app); 
var port = process.env.PORT || 3001;

server.listen(port);

app.use(express.static(__dirname + '/public'));
app.get('/results', function(req, res){
  //if html file is root directory
 res.sendFile(__dirname + '/public/results.html'); //if html file is within public directory
});


