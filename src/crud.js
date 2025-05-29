const mysql = require('mysql2');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cars',
	port: '3306'
})
conn.connect(err => {
	if (err){throw err}
	console.log("Connected!");
})
// conn.query("SELECT VERSION()", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 1
// conn.query("INSERT INTO cars (marka, model, rok_produkcji, cena, nr_rejestracyjny) VALUES ('Volkswagen', 'Golf', 2017, 24000, 'RP12445')", (err, results) => {
// 	if (err){throw err}
// 	console.log(results)
// })

// 2
// conn.query("INSERT INTO cars (marka, model, rok_produkcji, cena, nr_rejestracyjny) VALUES ('Volkswagen', 'Golf', 2017, 24000, 'RP12446')", (err, results) => {
// 	if (err){throw err}
// 	console.log(results)
// })
// conn.query("INSERT INTO cars (marka, model, rok_produkcji, cena, nr_rejestracyjny) VALUES ('Volkswagen', 'Golf', 2017, 24000, 'RP12447')", (err, results) => {
// 	if (err){throw err}
// 	console.log(results)
// })
// conn.query("INSERT INTO cars (marka, model, rok_produkcji, cena, nr_rejestracyjny) VALUES ('Volkswagen', 'Golf', 2017, 24000, 'RP12448')", (err, results) => {
// 	if (err){throw err}
// 	console.log(results)
// })

// 3
// conn.query("SELECT * FROM cars", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 4
// conn.query("SELECT * FROM cars WHERE marka = 'toyota'", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 5
// conn.query("SELECT * FROM cars WHERE rok_produkcji > 2018 AND cena < 40000", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 6
// conn.query("SELECT * FROM cars WHERE nr_rejestracyjny = 'RP98765'", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// // 7
// conn.query("UPDATE cars SET cena = 19500 WHERE nr_rejestracyjny = 'RP98765'", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 8
// conn.query("UPDATE cars SET nr_rejestracyjny = 'RP99999' WHERE marka = 'ford' AND model = 'focus'", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 9
// conn.query("UPDATE cars SET cena = (cena*1.1) WHERE marka = 'volkswagen'", (err, results) => {
// 	if (err){throw err}
// 	console.table(results)
// })

// 10
conn.query("DELETE FROM cars WHERE nr_rejestracyjny = 'RP00001'", (err, results) => {
	if (err){throw err}
	console.log(results)
})

conn.end()

// npm init
// npm install mysql2