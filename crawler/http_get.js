var http = require('http');
var fs = require('fs');

http.get('http://101.200.129.112:4567/users/latest', function(res){
	var data = '';
	res.setEncoding('utf8');
	res.on('data', function(chunkData){
		data += chunkData;
		// 写入文件
		fs.appendFile('../public/dongnao.html', data, function(err){
			if (err) {
				console.log(err)
			}else{
				console.log('success')
			}
		}); 
	}).on('end', function(){
		console.log('end')
	}).on('error', function(err){
		console.log(err)
	});
})