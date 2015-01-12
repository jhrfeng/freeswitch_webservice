var http = require("http");
var url = require("url");

function start(route, handle){

	http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log('request for '+pathname+' recevied\n');
        route(handle, pathname, request, response);
	}).listen(8000);

	console.log('server has started');
}

exports.start = start;