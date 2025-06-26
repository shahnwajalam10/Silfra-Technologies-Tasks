const Todo = require("../models/todo.model");

exports.getTodos = (req, res) => {
  Todo.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getTodoById = (req, res) => {
  Todo.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.createTodo = (req, res) => {
  Todo.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Todo created", id: result.insertId });
  });
};

exports.updateTodo = (req, res) => {
  Todo.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Todo updated" });
  });
};

exports.deleteTodo = (req, res) => {
  Todo.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Todo deleted" });
  });
};
