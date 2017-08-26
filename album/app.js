var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser'); //处理post请求数据
var multer = require('multer');
var session = require('express-session');

require('./dao/dbconnect').connect('mongodb://localhost:27017/user');
global.dbHelper = require('./dao/dbHelper');

var app = express();
// 设置默认的访问目录
app.use(express.static('public'));
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