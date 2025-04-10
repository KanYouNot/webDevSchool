const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {


	switch (req.url) {
		case '/':
			const htmlPath = path.join("./index.html")
			const htmlContent = fs.readFileSync(htmlPath)
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(htmlContent)
			break;

		case '/style.css':
			const cssPath = path.join("./styles.css")
			const cssContent = fs.readFileSync(cssPath)
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(cssContent)
			break;

		case '/script.js':
			const jsPath = path.join("./script.js")
			const jsContent = fs.readFileSync(jsPath)
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(jsContent)
			break;

		default:
			break;
	}
	res.end();
}).listen(5555, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port 127.0.0.1:5555`);
    }});

//Kacper Ostrówka