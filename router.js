function route(pathname, handle, res, req) {	
	console.log('router talk:'+ pathname)
	if (typeof handle[pathname] === 'function') {
		handle[pathname](res, req);
	}else{
		console.log('404: not found file');
		res.writeHead(200, 'Content-type: text/plain');
		res.end('404: not found file');	
	}
}

exports.route = route;