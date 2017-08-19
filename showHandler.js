var fs = require('fs');

function show(res){
	console.log('show server')
	fs.readFile('tmp/test.jpg', function(err, file){
		if (err) {
			res.writeHead(200, {'Content-type': 'text/plain'});
			res.end(err);
		}else{
			res.writeHead(200, {'Content-type': 'image/jpeg'});
			res.end(file, 'binary');
		}
	});
	
}

exports.show = show;