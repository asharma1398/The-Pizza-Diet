// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
    
      if (Object.hasOwnProperty.call(ob, key)) {

        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object for all our SQL statement functions
var orm = {
    all: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var query = "INSERT INTO " + table;
    
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";
    
        console.log(query);
    
        connection.query(query, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var query = "UPDATE " + table;
    
        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;
    
        console.log(query);
        connection.query(query, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

module.exports = orm;