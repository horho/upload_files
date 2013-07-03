
function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function') {
		return handle[pathname](pathname);
	} else {
		console.log("No request handler found for " + pathname);
		return "404 - No such file";
	}
}

exports.route = route;
