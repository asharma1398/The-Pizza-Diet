// DEPENDENCIES 
// =========================================================================
const mysql = require("mysql");
require("dotenv").config();

// MYSQL CONNECTION
// =========================================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "pizzaDB"
  });

// MYSQL CONNECTION FUNCTION
// =========================================================================
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export connection for our ORM to use.
module.exports = connection;