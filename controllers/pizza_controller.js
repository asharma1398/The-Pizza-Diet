var express = require("express");
var router = express.Router();

// Import the model (pizzaModel.js) to use its database functions
var pizza = require("../models/pizzaModel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    pizza.all(function(data) {
      var hbsObject = {
        pizza: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/api/pizza", function(req, res) {
    pizza.create([
      "pizza_name", "devoured"
    ], [
      req.body.pizza_name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/pizza/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    pizza.update({
        devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use
module.exports = router;
