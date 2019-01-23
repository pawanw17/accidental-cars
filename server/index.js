var server = require('ws').Server;
var s = new server({port: 5001});


s.on('connection',function(ws){
	// ws.on('message',function(message){
	// 	console.log("Received: "+message);
	var obj = {lat:12.82082, lng: 80.038229};
		ws.send(JSON.stringify(obj));
	// });
});