const db = require("../config/db");

const TodoModel = {
  getAll: (callback) => {
    db.query("SELECT * FROM todos", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM todos WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO todos (title, completed) VALUES (?, ?)", [data.title, data.completed], callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE todos SET title = ?, completed = ? WHERE id = ?", [data.title, data.completed, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM todos WHERE id = ?", [id], callback);
  },
};

module.exports = TodoModel;
