/*使用request爬取数据*/
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');  //解析爬取的html
var iconv = require('iconv-lite'); //处理爬取网页乱码问题


var url = 'http://wodeshucheng.com/book_14790/3779830.html';
function myRequest(url, cb){
	var options = {
		url: url,
		encoding: null
	}
	request(options, cb);
}

function getContent(url){
	myRequest(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(response.statusCode)
			var html = iconv.decode(body, 'gbk');
			var $ = cheerio.load(html);
			var $prevUrl =  $('#pager_prev').attr('href');
			var $nextUrl =  $('#pager_next').attr('href');
			$('#htmlContent').find('.chapter_Turnpage, center').remove();
			var content = $('#htmlContent').text(); //当前页内容
			fs.appendFile('../public/book.html', content, function(err){
				if (err) {
					console.log('appendFile:',err)
				}else{
					console.log('appendFile success')
				}
			});
			if ($nextUrl) {
				getContent($prevUrl);
			}
		}else{
			console.log('request error:', error)
		}
	});
}

getContent(url);