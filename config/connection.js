//Dependencies
var mysql = require("mysql");
var dotenv = ("dotenv");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Fish2015!",
  database: "mysql://hguasfwalyv13rb2:bmwbbmk73dak5ket@tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nnfdmq3uyaou6uh9"
  });
};



connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export our MySQL connection
  module.exports = connection;