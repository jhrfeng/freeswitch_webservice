function route(handle, pathname, req, res){

	res.setHeader('Access-Control-Allow-Origin', '*');
	if(typeof handle[pathname] === 'function'){
		handle[pathname](req, res);
	}else{
		console.log('no request handle for found '+pathname);
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.write("404 not found");
		res.end();
	}
}

exports.route = route;