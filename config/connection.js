// Dependencies
const mysql = require("mysql");

// Connection properties
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Establish connection
connection.connect(function(err) {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for ORM
module.exports = connection;