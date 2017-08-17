var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var querystring = require('querystring');
var util = require('util');
var exec = require('child_process').exec;
function start(res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('start111');
	res.end();
}

function say(res) {
	/*function sleep(millis){
		var startTime = new Date().getTime();
		while(new Date().getTime() < millis+startTime);
	}
	sleep(5000);*/
	/*exec('tree F:', {encoding: 'Stay', maxBuffer: 10000*1024}, function(err, stdout, stderr){
		if (err) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(err.toString());
			res.end();
		}else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(stdout);
			res.end();
		}
	});*/
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("say");
	res.end();
}

function upload(res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('upload');
	res.end();
}

//fs 模块
function files(res){
	//异步读取文件
	/*fs.readFile('./index.js', function(err, data){
		if (err) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(err + '\n');
			res.end();
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data.toString());
			res.end();
		}
	});*/

	//同步读取文件
	//var text = fs.readFileSync('./router.js');
	// res.writeHead(200, {'Content-Type': 'text/html'});
	// res.write(text.toString());
	// res.end();

	//异步写入文件
	//第一个参数是写入的文件名
	//第二个参数是写入的字符串
	//第三个参数是回调函数
	//回调函数前面，还可以再加一个参数，表示写入字符串的编码（默认是utf8）
	/*fs.writeFile('message.txt', 'write file', function(err){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('write file success');
		res.end()
	});*/

	//同步写入文件
	//第一个参数是文件路径
	//第二个参数是写入文件的字符串
	//第三个参数是文件编码，默认为utf8
	//fs.writeFileSync('message.txt', 'sync write file', 'utf8');

	//exists方法用来判断给定路径是否存在，然后不管结果如何，都会调用回调函数。
	//不要在调用open之前调用exists，因为open方法本身就能检查是否存在文件。
	/*fs.exists('./newFile', function(exists){
		var text = '';
		text = exists?'exists file':'no exists file';
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(text);
		res.end();
	})*/

	//异步新建目录 mkdir()
	//第一个是目录名，
	//第二个是权限值，
	//第三个是回调函数。
	/*if (fs.existsSync('./newFile')) { //如果存在此目录
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('has directory');
		res.end();
	}else{ //如果不存在此目录
		fs.mkdir('./newFile', 0777, function(err){
			if (err) {
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write('new directory error');
				res.end();
			}else{
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write('new directory success');
				res.end();
			}
		});
	}*/

	//同步新建目录 mkdirSync()
	//第一个是目录名，
	//第二个是权限值，
	/*if (fs.existsSync('./newFile1')) { //如果存在此目录
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('has directory');
		res.end();
	}else{ //如果不存在此目录
		var file = fs.mkdirSync('./newFile1', 0777);
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('new directory success');
		res.end();
	}*/

	//readdir(异步)方法用于读取目录，返回一个所包含的文件和子目录的数组。
	/*fs.readdir('./newFile', function(err, dirArr){
		if (err) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('has error');
			res.end();
		}else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
			// var str = {};
			// for (var i = 0; i < dirArr.length; i++) {
			// 	str[i] = dirArr[i];
			// }
			res.write(util.inspect(dirArr));
			res.end();
		}
	});*/

	//readdirSync(同步)
	/*var files = fs.readdirSync('./newFile');
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(util.inspect(files));
	res.end();*/

	//异步 rmdir(path, callback) 删除目录。
	//path  目录路径
	//callback   回调，回调函数传递一个err异常参数。
	//返回值为null 或 undefined则表示删除成功，否则将抛出异常。
	/*fs.rmdir('./newFile/newFile3', function(err){
		if (err) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('delete error');
			res.end();
		}else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('delete success');
			res.end();
		}
	});*/

	//同步 rmdirSync(path)
	//path  目录路径
	/*var nfile = fs.rmdirSync('./newFile/newFile2');
	if (nfile) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('delete error');
		res.end();
	}else{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('delete success');
		res.end();
	}*/

	/**
	 * stat()
	 * stat方法的参数是一个文件或目录，它产生一个对象，该
	 * 对象包含了该文件或目录的具体信息。我们往往通过该方
	 * 法，判断正在处理的到底是一个文件，还是一个目录。
	 */
	/*fs.readdir('./newFile', function(err, filesArr){
		if (err) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('has error');
			res.end();
		}else{
			filesArr.forEach(function(key){
				fs.stat('./newFile/'+key, function(err, stats){
					if (err) {
						console.log(err);
					}else if (stats.isFile()) {
						console.log('is file');
					}else if (stats.isDirectory()) {
						console.log('is directory');
					}
					console.log('stats:  %s',JSON.stringify(stats));
				});
			});
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('success');
			res.end();
		}
	});*/


	/**
	 * watchfile(path, callback)
	 * watchfile方法监听一个文件，如果该文件发生变化，就会自动触发回调函数
	 */
	fs.watchFile('./nf.txt', function(curr, prev){
		console.log('the current mtime is: ' + curr.mtime);
		console.log('the previous mtime is: ' + prev.mtime);
	});
	fs.writeFile('./nf.txt', 'changed', function(err){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('write file success');
		res.end();
	});
}

function httpMoudle(res){
	var httpMethods = http.METHODS; //返回的是数组
	var httpStatusCodes = http.STATUS_CODES;
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.write(util.inspect(httpMethods).toString());
	// res.write(util.inspect(httpStatusCodes).toString());
	
	// get 方法
	http.get('http://127.0.0.1/node1/index.json', (res) => {
		console.log(res.statusCode)
	});

	// console.log(http.globalAgent);

	res.end();
}

//url模块
function urlModule(res){
	//url.resolve(from, to)用于生成URL
	//第一个参数是基准的URL，其余参数是根据基准的URL生成对应的位置
	var url1 = url.resolve('http://one/two/three', 'four');
	var url2 = url.resolve('http://one/two', '/three');
	var url3 = url.resolve('http://one/two/three/', 'four');
	var url4 = url.resolve('http://one/two/aaaaa/', '/three');
	// console.log(url1);
	// console.log(url2);
	// console.log(url3);
	// console.log(url4);
	//运行结果：
	/*  http://one/two/four
		http://one/three
		http://one/two/three/four
		http://one/three
	*/

	//parse方法用来解析url地址
	//可接收三个参数，第一个参数是URL地址;第二个参数(是否使用querystring模块来
	//解析URL地址里面的参数)默认为false;第三个参数....(查文档吧)
	var url_test = 'http://www.printchen.com/public/index.html?a=1&b=测试数据';
	var url_parse = url.parse(url_test, true, true);
	console.log(url_parse);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('urlModule');
	res.end();
}

//path模块
function pathModule(res){
	//join()方法用于连接路径
	//注意：不同的操作系统生成的分隔符不同，在windows下是“\”,在Unix下是“/”
	var path_join = path.join('mydir', 'foo');
	// console.log(path_join);

	//resolve方法用于将相对路径转成绝对路径
	//它可以接受多个参数，依次表示所要进入的路径，直到将最后一个参数转成绝对路径，
	//如果根据参数无法得到绝对路径，则以当前所在路径作为基准，除了根目录，该方法
	//的返回值都不带尾部的斜杠
	//*该方法忽略非字符串的参数
	var path_resolve = path.resolve('one/two', 'three', 'four');
	//运行结果：E:\web\node\one\two\three\four
	// console.log(path_resolve);

	//isAbsolute方法判断是否是一个绝对路径
	console.log(path.isAbsolute('d:/one/two')); //true
	console.log(path.isAbsolute('one/two'));    //false

	//relative方法接受两个参数，两个参数都是绝对路径。该方法返回的是第二个路径相对
	//于第一个路径的那个相对路径，如果两个参数相同，则返回一个空字符串
	var path_relative = path.relative('data/one/two', 'data/one/two/three/four');
	// console.log(path_relative);
	/*
	 运行结果：
	 three/four
	*/

	//parse方法返回路径各部分的信息
	var path_parse = 'C:/Users/cst/Desktop/node/API/Path模块.png';
	var path_parse_res = path.parse(path_parse);
	// console.log(path_parse_res.root);
	// console.log(path_parse_res.dir);
	// console.log(path_parse_res.base);
	// console.log(path_parse_res.name);
	// console.log(path_parse_res.ext);

	//sep方法获取文件分隔符
	console.log(path.sep);
	//delimiter方法获取路径分隔符
	console.log(path.delimiter);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('path module');
	res.end();
}

//nodeJs的全局函数
function globalFunc(res){
	//__filename 用于获取当前代码文件的文件路径
	console.log(__filename); //E:\web\node\requestHandlers.js

	//__dirname 用于获取当前执行脚本所在目录的目录名
	console.log(__dirname); //E:\web\node

	//定时器 setInterval(cb, time)
	var i = 0;
	var timer = setInterval(function(){
		console.log(i++);
		if (i === 10) clearInterval(timer);
	}, 1000);


	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('globalFunc module');
	res.end();
}

//process模块 （是Node的全局对象，不需要使用require引入）
function processModule(res){
	// console.log(process.argv);
	// console.log(process.env);
	// console.log(process.pid);
	// console.log(process.platform);

	//cwd方法返回运行当前脚本的工作目录的路径
	//* 此方法和__dirname相似，都能获取当前文件所在的目录路径
	var process_cwd = process.cwd();
	console.log(process_cwd);

	//chdir方法用来切换目录
	// process.chdir(path);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('process module');
	res.end();
}

//querystring模块 主要用来解析查询字符串
function querystringModule(res){
	//parse方法用来将一个查询字符串解析成JavaScript对象
	//可以接受四个参数parse(str[, sep[, eq[, options]])
	/*
		str 需要解释的查询字符串
		sep 多个键值对之间的分隔符 默认为 &
		eq  键名与键值之间的分隔符 默认为 =
		options 配置对象，它有两个属性，decodeURIComponent属性是一个函数，用来将编码
		    	后的字符串还原，默认是querystring.unescape()；maxkeys属性指定做多解
				析多少个属性，默认是1000，如果设为0就表示不限制属性的最大数量。
	*/
	var str = 'foo=bar&abc=xyz&abc=123&name=张三';
	var querystring_parse = querystring.parse(str);
	console.log(querystring_parse); //{ foo: 'bar', abc: [ 'xyz', '123' ] }
	//parse也可以解析一般的字符串
	var str_common = 'name:Stay;shape:fox;conditon:new';
	console.log(querystring.parse(str_common, ';', ':')); //{ name: 'Stay', shape: 'fox', conditon: 'new' }

	//stringify方法将一个对象序列化成一个query string
	//可以选择是否覆盖默认的分隔符（‘&’）和分配符（‘=’）
	var querystring_stringify = querystring.stringify({
		foo: 'bar',
		abc: 'xyz',
		name: '张三'
	});
	console.log(querystring_stringify); //foo=bar&abc=xyz&name=%E5%BC%A0%E4%B8%89
	var querystring_stringify1 = querystring.stringify({
		foo: 'bar',
		abc: 'xyz',
		name: '张三'
	}, ';', ':');
	console.log(querystring_stringify1);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('querystring module');
	res.end();
}

//Buffer模块 处理二进制数据的一个接口 ，是类数组的对象，成员都为0~255的整数值，
//即一个8位的字节
function bufferModule(res){
	//实例化一个Buffer
	var buffer = new Buffer(256);
	for (var i = 0; i < buffer.length; i++) {
		buffer[i] = i;
	}
	var end = buffer.slice(240, 256);
	console.log(end[0]); //240

	//copy方法 复制
	var more = new Buffer(4);
	buffer.copy(more, 0, 4, 8); //将buffer 4到7号位置的数据复制到more中，从第0个位置开始存放
	for (var j = 0; j < more.length; j++) {
		console.log(more[j]);
	}

	console.log(Buffer.isEncoding('utf8')); //true
	console.log(Buffer.isBuffer(Date)); //false

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Buffer Module');
	res.end();
}

//导出
exports.start = start;
exports.say = say;
exports.upload = upload;
exports.files = files;
exports.httpMoudle = httpMoudle;
exports.urlModule = urlModule;
exports.pathModule = pathModule;
exports.globalFunc = globalFunc;
exports.processModule = processModule;
exports.querystringModule = querystringModule;
exports.bufferModule = bufferModule;
