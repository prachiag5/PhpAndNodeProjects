//var http = require("http");
var MongoClient = require('mongodb').MongoClient;
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var data = "";
var htmldata = "";
app.set("view engine", "jade");

var controller = require("./controllers");
var routeController = require("./routeControllers");
controller.init(app);
routeController.init(app);

// Connect to the db

//var server = http.createServer(app);
app.listen(3000);