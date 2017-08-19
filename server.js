var http = require('http');
var url = require('url');
const port = 3000;
function start(route, handle){
	function onRequest(req, res){
		// var postData = '';
		// 解析请求的业务路径
		var pathname = url.parse(req.url).pathname;
		//收集post数据   这种方式不好，直接采用传递req就可以了,接受数据直接放至局部处理模块
		/*req.setEncoding('utf8');
		req.on('data', function(postChunk){
			postData += postChunk;
		});
		req.on('end', function(){
			if (pathname === '/favicon.ico') {

			}else{
				// 路由（总管）
				route(pathname, handle, res, postData);
			}
		});*/
		if (pathname === '/favicon.ico') {

		}else{
			// 路由（总管）
			route(pathname, handle, res, req);
		}
		
	}
	http.createServer(onRequest).listen(port, function(){
		console.log('server running on '+port)
	});
}

exports.start = start;