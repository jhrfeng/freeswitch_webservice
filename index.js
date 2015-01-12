var server = require('./server');
var router = require('./router');
var func   = require('./function');

var handle = {}
handle["/index"] = func.index;
server.start(router.route, handle);