const db = require("../config/db");

exports.findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results); // Always send `null` for error and the actual result
  });
};

exports.createUser = (user, callback) => {
  const { name, email, password } = user;
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], callback);
};
