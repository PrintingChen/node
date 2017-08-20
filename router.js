var fs = require('fs');

function route(pathname, handle, res, req) {	
	console.log('router talk:'+ pathname)
	if (typeof handle[pathname] === 'function') {
		handle[pathname](res, req);
	}else{
		console.log('404: not found file');
		// var html = fs.readFileSync('404.html');
		res.writeHead(200, 'Content-type: text/plain');
		res.write('404: not found file');
		res.end();	
	}
}

exports.route = route;