//require express
var express = require("express");
//require method-override
var methodOverride = require("method-override");
//require body-parser
var bodyParser = require("body-parser");

//port
var port = process.env.PORT || 3000;

//standard express stuff
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//routes using router
var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// listen on port number
app.listen(port);