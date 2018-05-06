var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, data){
            if (err) {
                console.log(err);
            }
            callback(data);
        });
    },
    insertOne: function(table, column, value, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, column, value], function(err, data){
            if (err) {
                console.log(err);
            }
            callback(data);
        });
    },
    updateOne: function(table, changeColumn, newValue, idColumn, id, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(quertyString, [table, changeColumn, newValue, idColumn, id], function(err, data){
            if (err) {
                console.log(err);
            }
            callback(data);
        });
    }
}