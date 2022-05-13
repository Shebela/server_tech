var express = require('express');
var app = express();
var fs = require("fs");


app.get('/', function (req, res) {
    res.end("Hello " + req.query.name + ", today is " + Date());
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server is running")
})