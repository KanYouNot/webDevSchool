const mysql = require('mysql2');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test',
	port: '3306'
})
conn.connect(err => {
	if (err){throw err}
	console.log("Connected!");
})
conn.query("SELECT VERSION()", (err, results) => {
	if (err){throw err}
	console.table(results)
})
conn.end()

// npm init
// npm install mysql2