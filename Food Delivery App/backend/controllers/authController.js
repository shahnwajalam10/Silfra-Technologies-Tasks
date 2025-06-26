const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  userModel.findUserByEmail(email, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ msg: "Internal server error" });
    }

    if (result && result.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    userModel.createUser({ name, email, password: hashedPassword }, (err, result) => {
      if (err) return res.status(500).json({ msg: "Failed to create user", error: err });
      res.status(201).json({ msg: "User created successfully" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ msg: "Internal server error" });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }

    const user = result[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};
