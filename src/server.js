const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end();
}).listen(5555, "127.0.0.1");
console.log("Started at 127.0.0.1:5555");
