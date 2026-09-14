const mysql2 = require('mysql2/promise')

const pool = mysql2.createPool({
    host: 'localhost',
    database: 'vovo3',
    user: 'root',
    password: '1234',
    port: 3306,
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true
})

module.exports = pool