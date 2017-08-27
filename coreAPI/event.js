var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('stay', function(){
	setTimeout(function(){
		console.log('Hello stay.')
	}, 5000);
});

event.emit('stay');