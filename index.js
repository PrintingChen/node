var server = require('./server.js');
var route = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/say'] = requestHandlers.say;
handle['/upload'] = requestHandlers.upload;
handle['/files'] = requestHandlers.files;
handle['/httpMoudle'] = requestHandlers.httpMoudle;
handle['/urlModule'] = requestHandlers.urlModule;
handle['/pathModule'] = requestHandlers.pathModule;
handle['/globalFunc'] = requestHandlers.globalFunc;
handle['/processModule'] = requestHandlers.processModule;
handle['/querystringModule'] = requestHandlers.querystringModule;
handle['/bufferModule'] = requestHandlers.bufferModule;

server.start(route.route, handle);
