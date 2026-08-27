// importando a biblioteca a biblioteca mysql2
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "es",
  waitForConnections: true,
  connectAttributes: 10,
  queueLimit: 0
});

module.exports = pool