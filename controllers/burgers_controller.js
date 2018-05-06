var express = require("express");
var routes = express.Router();

var burger = require("../models/burger.js");

routes.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", data);
    });
});

routes.post("/api/burgers", function (req, res) {
    burger.insert(req.body.newBurger, function (results) {
        res.json({ id: result.insertId });
    });
});

routes.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.update(id, function (results) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = routes