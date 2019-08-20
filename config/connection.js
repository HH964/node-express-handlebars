require("dotenv").config();
const mysql = require('mysql');
const host = process.env.host1;
const port = process.env.port1;
const user = process.env.user999;
const pass = process.env.pass;


var connection = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: pass,
    database: "burgers_db"
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
  });

module.exports = connection;