var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Assyla!011609",
        database: "burger_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.log("Error connecting to the dB: " + err.stack);
        return;
    }
    console.log("Connected to dB as " + connection.threadId);
});

module.exports = connection;
