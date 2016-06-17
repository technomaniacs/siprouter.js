'use strict';

function main(request, remote, server) {

	console.log(request);
	console.log(remote);
	console.log(server);

	server.send(server.makeResponse(request, 180, "Ringing"));
}

// Expose some functions
exports = module.exports = main;
