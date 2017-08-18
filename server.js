var http = require('http');
const port = 3000;
function start(){
	function onRequest(req, res){
		res.writeHead(200, 'Content-type: text/plain');
		res.write('this is node server');
		res.end();
	}
	http.createServer(onRequest).listen(port, function(){
		console.log('server running on '+port)
	});
}

exports.start = start;