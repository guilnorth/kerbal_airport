const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'Aeroporto'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;


