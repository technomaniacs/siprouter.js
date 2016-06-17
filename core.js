var server = require('./lib/sip');
var main = require('./main');


server.start({
	address: '192.168.56.1',
	port: 5060,
	udp: true,
	tcp: false,
}, function(request, remote) {
	server.send(server.makeResponse(request, 100, "Trying"));
	main(request, remote, server);

});
