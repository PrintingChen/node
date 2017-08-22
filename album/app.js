var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();
// 设置默认的访问目录
app.use(express.static('public'));
// 设置视图的路径
app.set('views', path.join(__dirname, 'views'));
// 设置网页模板引擎,指定模板文件的后缀名
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.get('/login', function(req, res){
	res.render('login');
});

app.get('/register', function(req, res){
	res.render('register');
});

app.get('/home', function(req, res){
	res.render('home', {'message': 'this is home page.'});
});

app.get('/login', function(req, res){
	res.render('login');
});

app.get('/upload', function(req, res){
	res.render('upload');
});

app.listen(8888, function(){
	console.log('server running on 3000');
});