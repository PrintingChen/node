/*使用request爬取数据*/
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');  //解析爬取的html
var iconv = require('iconv-lite'); //处理爬取网页乱码问题
var mongoose = require('../mongodb_demo/db.js');

var Schema = mongoose.Schema;
var schema = new Schema({
	chapter: {type: String},
	content: {type: String},
	uploadDate: {type: Date},
	isDelete: {type: Boolean}
});
var bookModel = mongoose.model('content', schema);

var url = 'http://wodeshucheng.com/book_14790/4504708.html';
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
			var chapterTitle = $('.h1title h1').text().split(' ')[1];
			var $prevUrl =  $('#pager_prev').attr('href');
			var $nextUrl =  $('#pager_next').attr('href');
			$('#htmlContent').find('.chapter_Turnpage, center').remove();
			var currentContent = $('#htmlContent').text(); //当前页内容
			var chapterContent = new bookModel({
				chapter: chapterTitle,
				content: currentContent,
				uploadDate: new Date(),
				isDelete: 0
			});
			chapterContent.save(function(err, res){
				if (err) {
					console.log('save error:', err)
				}else{
					console.log('save success:', res)
				}
			});
			// fs.appendFile('../public/book.html', content, function(err){
			// 	if (err) {
			// 		console.log('appendFile:',err)
			// 	}else{
			// 		console.log('appendFile success')
			// 	}
			// });
			if ($nextUrl) {
				getContent($nextUrl);
			}
		}else{
			console.log('request error:', error)
		}
	});
}

getContent(url);