var http = require('http');
const host = 3000;
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World111111111111'); 
}).listen(host, function(){
	console.log('server running '+host);
});
