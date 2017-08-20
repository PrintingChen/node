var fs = require('fs');
var formidable = require('formidable');
var util = require('util');

function upload(res, req){
	console.log('upload server')
	if (req.method.toLowerCase() === 'get') {
		// res.writeHead(200, {'Content-type': 'text/plain'});
		// res.end('404 not found');
		var html = fs.readFileSync('public/404.html');
		res.writeHead(200, 'Content-Type: text/html');
		res.write('404: not found');
		res.end();
	}else if (req.method.toLowerCase() === 'post'){
		var form = new formidable.IncomingForm();
		// 是否保持原来的文件扩展名 默认为false
		// form.keepExtensions = true;
		// 设置保存上传文件的临时保存目录
		form.uploadDir = 'public/upload'; 
		form.parse(req, function(err, fields, files){
			console.log(util.inspect({fields: fields, files: files}))
			//对文件进行移动及重命名
			fs.renameSync(files.uploadFile.path, 'tmp/test.jpg'); 
			res.writeHead(200, {"Content-Type": "text/html"});
			// res.end(util.inspect({fields: fields, files: files}));
			res.write('<img width="200" height="200" src="/show">');
			res.end();
		});
		// 处理进度
		form.on('progress', function(bytesReceived, bytesExpected) {
			console.log(parseInt((bytesReceived/bytesExpected)*100)+'%')
		});
		// 处理完成
		form.on('end', function() {
			console.log('data handle end')
		});
	}
}

exports.upload = upload;