var fs = require('fs');

function notFound(res){
	console.log('404 server')
	fs.readFile('public/img/404.png', function(err, file){
		if (err) {
			res.writeHead(200, {'Content-type': 'text/plain'});
			res.end(err);
		}else{
			res.writeHead(200, {'Content-type': 'image/jpeg'});
			res.end(file, 'binary');
		}
	});
	
}

exports.notFound = notFound;