
function route(pathname) {
  console.log("About to route a request for " + pathname);
  if(pathname === "/admin") {
    return admin(pathname); 
  }
  return "Hello World!";
}

exports.route = route;
