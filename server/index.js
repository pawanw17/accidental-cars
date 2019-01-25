var server = require('ws').Server;
var s = new server({port: 5001});


s.on('connection',function(ws){
	// ws.on('message',function(message){
	// 	console.log("Received: "+message);
	var obj = {lat:28.6315, lng:77.2167};
		ws.send(JSON.stringify(obj));
	// });
});
