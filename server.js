const db = require("./db/connection");
const express = require("express");
// const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Start server after DB connection
function server(){
    db.connect(err => {
        if (err) throw err;
        console.log('Database connected.');
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });


      });
}


module.exports = server;