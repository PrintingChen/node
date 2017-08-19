var fs = require('fs');
var querystring = require('querystring');

function start(res){
	var html = fs.readFileSync('public/post.html'); //这里需使用 readFileSync 同步读取文件，只有读取完成之后才能进行下一步
	res.writeHead(200, 'Content-type: text/html');
	res.end(html);
}

function upload(res, req){
	console.log('upload server')
	// 原生post数据处理
	var postData = '';
	req.on('data', function(postChunk){ //将数据块拼接
		postData += postChunk;
	});
	req.on('end', function(){ //数据接收完成
		console.log('recive:'+postData)
		res.writeHead(200, 'Content-type: text/plain');
		res.end('post upload:'+querystring.parse(postData).user);
	});
}

exports.start = start;
exports.upload = upload;