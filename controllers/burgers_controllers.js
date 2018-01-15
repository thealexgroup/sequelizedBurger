//require express
var express = require('express');
//require express.Router
var router = express.Router();
//require burger.js
var burger = require('../models/burger.js');


//make sure to hit index if endpoint left blank
router.get('/', function (req, res) {
  res.redirect('/index');
});


//index with all the stuff on it!
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var burgerData = { burgers: data };
    res.render('index', burgerData);
  });
});


// Create a New Burger endpoint
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    //when done go back to index for display
    res.redirect('/index');
  });
});


// Eat a Burger endpoint
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    //when done go back to index for display    
    res.redirect('/index');
  });
});


// Export routes
module.exports = router;