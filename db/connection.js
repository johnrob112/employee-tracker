const mysql = require("mysql2");

require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username/password,
        user: "test",
        password: "codingisfun",
        database: "tracker",
  },
  console.log("Connected to the company database.")
);

module.exports = db;