var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');
// var requireHandlers = require('./postHandler.js'); //原生处理post数据
//var requireHandlers = require('./uploadHandler.js'); //formidable处理上传数据

// var handle = {}; //路由表（相当于服务单）
// handle['/'] = requireHandlers.start;
// handle['/start'] = requireHandlers.start;
// handle['/upload'] = requireHandlers.upload;
// handle['/show'] = requireHandlers.show;
// handle['/say'] = requireHandlers.say;

server.start(router.route, requestHandlers.handle);