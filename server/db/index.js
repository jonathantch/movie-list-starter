const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielist'
})

connection.connect();

module.exports = connection;