const db = require("../config/db");

exports.getAllFoods = (callback) => {
  db.query("SELECT * FROM foods", callback);
};
