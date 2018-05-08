var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.SelectAll(function (data) {
        var hbObj = {
            burger: data
        };
        res.render("index", hbObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        res.json();
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function(results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
