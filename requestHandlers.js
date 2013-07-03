var exec = require("child_process").exec;

function start(pathname) {
	console.log("Request for start " + pathname + " page");
	var content = "empty";

	exec("ls -lah", function(error, stdout, stderr) {
		content = stdout;
		});
	return content;
}

function upload(pathname) {
    console.log("Request for upload " + pathname + " page");
		return "Hello Upload";
}

exports.upload = upload;
exports.start = start;
