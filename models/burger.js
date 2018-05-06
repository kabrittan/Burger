var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insert: function (value, callback) {
        orm.insertOne("burgers", "burger_name", value, function (res) {
            callback(res);
        });
    },
    update: function(id, callback){
        orm.updateOne("burgers", "devoured", true, "id", id, function(res){
            callback(res);
        });
    }
}