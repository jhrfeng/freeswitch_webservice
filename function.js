var mime = require('mime');

function index(req, res){
	//"text/xml"
	var json = {"test":"helloworld"};
	res.writeHead(200, {"Content-Type":"application/json"});
	res.write('hellowWorld');
	res.end();
}

exports.index = index;