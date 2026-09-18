const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    database: 'vovo4',
    user: 'root',
    password: '1234',
    port: '3306',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool