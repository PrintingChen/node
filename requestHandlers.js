var startHandler = require('./startHandler.js');
var uploadHandlers = require('./uploadHandlers.js');
var showHandler = require('./showHandler.js');

var handle = {}; //路由表（相当于服务单）
handle['/'] = startHandler.start;
handle['/start'] = startHandler.start;
handle['/upload'] = uploadHandlers.upload;
handle['/show'] = showHandler.show;

exports.handle = handle;