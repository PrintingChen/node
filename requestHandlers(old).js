var exec = require('child_process').exec;

function start(res){
	console.log(new Date().toString()+'start server')
	// 模拟同步执行（阻塞）
	// function sleep(time){
	// 	var startTime = new Date().getTime();
	// 	while(new Date().getTime() < startTime+time) {}
	// }
	// sleep(5000);

	// 调用系统命令 方式一
	// 异步执行可以解决代码阻塞的问题
	var content = '';
	exec('ipconfig', {'encoding': 'gbk'}, function(err, stdout, stderr){
		if (err) {
			console.log(err)
		}else{
			content = stdout || stderr;
			console.log(content)	
		}
		res.writeHead(200, 'Content-type: text/plain')
		res.end(content);
	});

	//方式二
	// var child = exec('config');
  /*var child = exec('dir');
	child.stdout.on('data', function(data) {
	  console.log('stdout: ' + data);
	});
	child.stderr.on('data', function(data) {
	  console.log('stdout: ' + data);
	});
	child.on('close', function(code) {
	  console.log('closing code: ' + code);
	});*/
}

function upload(res){
	console.log(new Date().toString()+'upload server')
	res.writeHead(200, 'Content-type: text/plain')
	res.end('upload server');
}

function say(res){
	console.log(new Date().toString()+'say server')	
	res.writeHead(200, 'Content-type: text/plain')
	res.end('say server');
}

exports.start = start;
exports.upload = upload;
exports.say = say;