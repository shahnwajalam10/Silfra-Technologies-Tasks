const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        onClick={() => onToggle(todo)}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;
