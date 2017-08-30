var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser'); //处理post请求数据
var multer = require('multer');
var session = require('express-session');

require('./dao/dbconnect').connect('mongodb://localhost:27017/user');
global.dbHelper = require('./dao/dbHelper');

app.use(session({
	//name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
	secret: 'secret', //用它来对session cookie签名，防止篡改
	cookie: { 
		maxAge: 60*1000*30  //设置maxAge是1800000ms，即1800s后session和相应的cookie失效过期
	}
}));

// 设置默认的访问目录
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) {
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;">' + err + '</div>';
    } else {

    }
    next();
});

// 设置视图的路径
app.set('views', path.join(__dirname, 'public/views'));
// 设置网页模板引擎,指定模板文件的后缀名
app.set('view engine', 'html');
app.engine('html', ejs.__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(multer());

// 路由表
require('./routes')(app);

const PORT = 8888;
app.listen(PORT, function(){
	console.log('server running on '+PORT);
});