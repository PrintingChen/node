var http = require('http');
var url = require('url');
function start(route, handle){
	function onRequest(req, res){
		var pathname = url.parse(req.url).pathname;
		route(handle, pathname, res);
	}
	http.createServer(onRequest).listen(3000, function(){
		console.log('server running on port 3000.');
	});
}
exports.start = start;