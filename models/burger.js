//require orm.js
var orm = require('../config/orm.js');

//orm methods called
var burger = {

  selectAll: function(cb){
    orm.selectAll(function(res){
      cb(res);
    });
  },

  insertOne: function(burger_name, cb){
    orm.insertOne(burger_name, function(res){
      cb(res);
    });
  },

  updateOne: function(burger_id, cb){
    orm.updateOne(burger_id, function(res){
      cb(res);
    });
  }

};


// Export the burger object stuff
module.exports = burger;