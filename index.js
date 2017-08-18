var server = require('./server.js');
var route = require('./router');
var requireHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requireHandlers.start;
handle['/start'] = requireHandlers.start;
server.start();