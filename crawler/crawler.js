var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var iconv = require('iconv-lite'); //处理爬取网页乱码问题

http.get('http://101.200.129.112:4567/tags', function(res){
	// var bufferHelper = new BufferHelper();
	var html = '';
	res.setEncoding('utf8');
	res.on('data', function(chunkData){
		html += chunkData;
		// html += iconv.decode(chunkData, 'GBK');
		 // bufferHelper.concat(chunkData);
		// 将抓取的数据写入文件
		// fs.appendFile('public/crawler.html', data, function(err){
		// 	if (err) {
		// 		console.log(err)
		// 	}else{
		// 		console.log('success')
		// 	}
		// }); 
	}).on('end', function(){
		console.log('--------end-----------')
		var $ = cheerio.load(html);
		var $el = $('.tag-item');
		$el.each(function(i, e) {
			// console.log($($el).attr('href'))
			console.log($(e).html())
			fs.appendFile('../public/book.html', "<h3>"+$(e).html()+"</h3>", function(err){
				if (err) {
					console.log(err)
				}else{
					console.log('success')
				}
			});
		});
	}).on('error', function(err){
		console.log(err)
	});
})

function htmlDecode(str) { 
  // 一般可以先转换为标准 unicode 格式（有需要就添加：当返回的数据呈现太多\\\u 之类的时）
  str = unescape(str.replace(/\\u/g, "%u"));
  // 再对实体符进行转义
  // 有 x 则表示是16进制，$1 就是匹配是否有 x，$2 就是匹配出的第二个括号捕获到的内容，将 $2 以对应进制表示转换
  str = str.replace(/&#(x)?(\w+);/g, function($, $1, $2) {
    return String.fromCharCode(parseInt($2, $1? 16: 10));
  });

  return str;
}