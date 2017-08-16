var http = require('http');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

/*http.get('http://www.baidu.com', function(response){
	var html = '';
	response.on('data', function(data){
		html += data;
	}).on('end', function(){
		fs.appendFile('book.html', html, function(err){
			if (!err) {
				console.log('crawler success');
			}
		});
	}).on('error', function(e){
		console.log('Got error：' + e.message);
	});
});*/


/*http.get('http://101.200.129.112:4567/users/sort-posts', function(response){
	var html = '';
	response.on('data', function(data){
		html += data;
	}).on('end', function(){
		var $ = cheerio.load(html);
		var $all = $('ul#users-container>li>a');
		var name = []; //将名字存放至此数组中
		// for (var i = 0; i < $all.length; i++) {
		// 	name.push($all[i].attribs.href.split('/')[2]);
		// }
		$all.each(function(){
			name.push(this.attribs.href.split('/')[2]);
		});
		fs.appendFile('dn.txt', name, function(err){
			if (!err) {
				console.log('crawler success');
			}
		});
	}).on('error', function(e){
		console.log('Got error：' + e.message);
	});
});
*/