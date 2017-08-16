var express = require('express');
var path = require('path');
var app = express();
// var route = require('./routers')(app); //路由

//static(root, [options])方法是Express中唯一的内建中间件，负责托管Express应用内的静态资源
//参数root 是指静态资源的所在的根目录
// var root = express.static(__dirname + '/public'); //path.join(__dirname, '/public');
// console.log(root.toString());
/** 调用了static方法会返回一个函数
function serveStatic(req, res, next) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (fallthrough) {
        return next()
      }

      // method not allowed
      res.statusCode = 405
      res.setHeader('Allow', 'GET, HEAD')
      res.setHeader('Content-Length', '0')
      res.end()
      return
    }

    var forwardError = !fallthrough
    var originalUrl = parseUrl.original(req)
    var path = parseUrl(req).pathname

    // make sure redirect occurs at mount
    if (path === '/' && originalUrl.pathname.substr(-1) !== '/'
      path = ''
    }

    // create send stream
    var stream = send(req, path, opts)

    // add directory handler
    stream.on('directory', onDirectory)

    // add headers listener
    if (setHeaders) {
      stream.on('headers', setHeaders)
    }

    // add file listener for fallthrough
    if (fallthrough) {
      stream.on('file', function onFile () {
        // once file is determined, always forward error
        forwardError = true
      })
    }

    // forward errors
    stream.on('error', function error (err) {
      if (forwardError || !(err.statusCode < 500)) {
        next(err)
        return
      }

      next()
    })

    // pipe
    stream.pipe(res)
  }
*/

//使用use方法来注册中间件
// app.use(root);
// app.use(function(req, res, next){
//     console.log('method:'+req.method+',url:'+req.url);
//     next();
// });
// app.use(function(req, res){
//     console.log('hello world.');
// });

//use 方法内部可以对访问的路径进行判断，从而实现简单的路由(在回调函数里面执行)
//use 方法的第一个参数也可以使用路径 但是如果没有找到对应的路径的话 后面的中间件都不会执行了
// app.use(function(req, res, next){
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write('home page');
//         res.end();
//     }else{
//         next();
//     }
// });
//
// app.use(function(req, res, next){
//     if(req.url === '/about'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write('about page');
//         res.end();
//     }else{
//         next();
//     }
// });
//
// app.use(function(req, res){
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.write('404');
//     res.end();
// });

//all(*, cb) 方法 表示所有请求都必须经过该中间件
//参数 * 表示所有有效的路径
// app.all('*', function(req, res, next){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     next();
// });

//get方法的回调函数没有next 所有只要有一个中间件被调用了，后面的中间件都不会被调用了
app.get('/', function(req, res){
    res.send('home page');
});

app.get('/about', function(req, res){
    res.send('about page');
    //重定向
    // res.redirect('http://www.baidu.com');
});

app.get('*', function(req, res){
    res.send('404');
});
app.listen(80, function(){
    console.log('server is runing on port 80.');
});
