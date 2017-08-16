/*
* 目标站点：http://www.wmpic.me/meinv/riben
* 目标数据：图片
* 作者： Stay
* 时间：2017.01.12
*/

var http = require('http');
var request = require('request');
var fs = require('fs');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var querystring = require('querystring');
var path = require('path');

var url = 'http://www.wmpic.me/meinv/riben';
function myRequest(url){
	var options = {
		url: url,
		encoding: null
	};
	var req = request(options, function(error, response, data){
		if (!error && response.statusCode == 200) {
			var html = iconv.decode(data, 'utf8');
			var $ = cheerio.load(html);
			var $img = $('div#mainbox>ul.item_list>li.item_box>div.post>a>img');
			var urlArr = [];
			var name = [];
			$img.each(function(){
				// 图片地址
				var urlImg = $(this).attr('src');
				//图片名称
				var filename = path.basename(urlImg);
				downloadImg(urlImg, filename, function() {
		            console.log(filename + ' done');
		        });
			});
		}
	});
}
//下载图片
var downloadImg = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
    if (err) {
        console.log('err: '+ err);
        return false;
    }
    console.log('res: '+ res);
    request(uri).pipe(fs.createWriteStream('images/'+filename)).on('close', callback);
    });
};
myRequest(url);
