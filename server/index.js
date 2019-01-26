var server = require('ws').Server;
var s = new server({port: 5001});


s.on('connection',function(ws){
	// ws.on('message',function(message){
	// 	console.log("Received: "+message);
	var obj = {lat:25.5941, lng:85.1376};
		ws.send(JSON.stringify(obj));
	// });
});
