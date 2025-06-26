import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title, completed: false });
      setTitle("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Add new todo..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
