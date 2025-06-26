import { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import "../styles.css";

const API_URL = "http://localhost:3000/api/todos";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async (todo) => {
    await axios.post(API_URL, todo);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await axios.put(`${API_URL}/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <h2>To-do List</h2>
      <TodoForm onAdd={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      ))}
    </div>
  );
};

export default Home;
