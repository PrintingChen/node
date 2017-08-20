/*使用request爬取数据*/
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');  //解析爬取的html
var iconv = require('iconv-lite'); //处理爬取网页乱码问题

var url = 'https://user.qzone.qq.com/799931425';
function myRequest(url, cb){
	var options = {
		url: url,
		// encoding: null,
		headers: {
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36',
			'cookie': 'pgv_pvi=9285308416; RK=COlOxdpf6E; tvfe_boss_uuid=3494d79c98122939; __Q_w_s_hat_seed=1; __Q_w_s__QZN_TodoMsgCnt=1; pac_uid=1_799931425; o_cookie=799931425; ptui_loginuin=1636619353@qq.com; pgv_info=ssid=s8773661709; pgv_pvid=9305411912; ptisp=cnc; ptcz=dedbd74f75e862680586e8690acd1ee5a6b4861f6ed4da03ecfb2031f619c90e; pt2gguin=o0799931425; uin=o0799931425; skey=@ejPbX3PYS; p_uin=o0799931425; p_skey=9nYiaKmgU7UMjAKx*ao7PoNiqKKUP*tC7dTHZ1w3Gvk_; pt4_token=18hd4CBwDeQ7aOdNdR91f7hKQFaDumO9ZlGNx9JG*CE_; Loading=Yes; qz_screen=1366x768; QZ_FE_WEBP_SUPPORT=1; cpu_performance_v8=20; rv2=80287658EC7BF1E6F5D99A9B0580592DAC095ABADF771B7907; property20=5DBC7ED7E92751223DF6F891E7585A17BB1B44C2CE3292E2A2A26EA74DCCF16335980B7C1B8EAA08'
		}
	}
	request(options, cb);
}

function getContent(url){
	myRequest(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(response.statusCode)
			// var html = iconv.decode(body, 'gbk');
			// var $ = cheerio.load(html);
			fs.appendFile('../public/qq.html', body, function(err){
				if (err) {
					console.log('appendFile:',err)
				}else{
					console.log('appendFile success')
				}
			});
		}else{
			console.log('request error:', error)
		}
	});
}

getContent(url);