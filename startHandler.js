var fs = require('fs');

function start(res){
	var html = fs.readFileSync('public/post.html');
	res.writeHead(200, 'Content-type: text/html');
	res.end(html);
}

exports.start = start;