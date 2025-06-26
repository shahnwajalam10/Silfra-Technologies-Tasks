const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo.routes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);

module.exports = app;
