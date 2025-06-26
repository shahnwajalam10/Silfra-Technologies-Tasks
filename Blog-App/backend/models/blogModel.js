const db = require('../config/db');

const getAllPosts = (callback) => {
  db.query('SELECT * FROM posts', callback);
};

const getPostById = (id, callback) => {
  db.query('SELECT * FROM posts WHERE id = ?', [id], callback);
};

const createPost = (post, callback) => {
  const { title, content, author } = post;
  db.query('INSERT INTO posts (title, content, author) VALUES (?, ?, ?)', [title, content, author], callback);
};

const deletePost = (id, callback) => {
  db.query('DELETE FROM posts WHERE id = ?', [id], callback);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost
};
