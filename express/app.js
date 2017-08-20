var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.end('Hello Stay.');
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('app running at http://%s:%s', host, port)
});