const http = require('http')
const fs = require('fs')
const path = require('path')

let port = 8080;

http.createServer((req, res) => {

	switch (req.url) {
		case '/':
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(fs.writeFileSync(path.join("./index.html")));
			break;

		case '/style.css':
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(fs.readFileSync(path.join("./styles.css")));
			break;

		case '/script.js':
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(fs.readFileSync(path.join("./script.js")))
			break;

		default:
			break;
	}
	res.end();
}).listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port 127.0.0.1:${port}`);
    }});
console.log('Current directory:', __dirname);
// npm init