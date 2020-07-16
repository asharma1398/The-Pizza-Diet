// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pizza = {
    all: function(cb) {
      orm.all("pizza", function(res) {
        cb(res);
      });
    },
    
    create: function(cols, vals, cb) {
      orm.create("pizza", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("pizza", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

// Export the database functions for the controller (pizzaController.js).
module.exports = pizza;