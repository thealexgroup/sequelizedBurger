//require connection.js file
var connection = require("./connection.js");

//create methods for selecting, inserting, or eating...
var orm = {

  // selectAll method
  selectAll: function(cb) {

    //MySQL Query to select all from burgers
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  // insertOne method
  insertOne: function(burger_name, cb){

  	//get the date and format it for mysql, what a pain
    var timestamp = "";
  	var d = new Date();

  	var year = d.getFullYear();
  	
    var month = (d.getMonth() + 1);
  	if (month < 10 ) { month = ("0" + month);}
    
    var day = d.getDate();
    if (day < 10 ) {day = ("0" + day);}
  	
    var hour = d.getHours();
    if (hour < 10 ) {hour = ("0" + hour);}
  	
    var minute = d.getMinutes();
    if (minute < 10 ) {minute = ("0" + minute);}
  	
    var second = d.getSeconds();
    if (second < 10 ) {second = ("0" + second);}

    timestamp = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);

    //MySQL Query to insert new burger in to burgers table
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  // updateOne method
  updateOne: function(burgerID, cb){

    //MySQL Query to update devoured burger
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        cb(result);
      });

  }

};


// Export the ORM object with methods
module.exports = orm;
