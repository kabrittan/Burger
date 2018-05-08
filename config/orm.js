var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, data){
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, data){
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },
    updateOne: function(table, changeColumn, newValue, idColumn, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, changeColumn, newValue, idColumn, id], function(err, data){
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    }
};

module.exports = orm;
