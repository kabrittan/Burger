var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO ?? VALUES ?? = ?";
        connection.query(queryString, [table, column, value], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, objColVal, newValue, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVal, newValue], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
