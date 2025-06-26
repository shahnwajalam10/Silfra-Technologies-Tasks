const foodModel = require("../models/foodModel");

exports.getFoods = (req, res) => {
  foodModel.getAllFoods((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};
