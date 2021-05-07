function Todo({ todo, toggleComplete, removeTodo }) {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todo">
      <div className="todo-input">
        <input
          type="checkbox"
          className="check"
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />
        <li>{todo.name}</li>
      </div>
      <button className="close" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
}

export default Todo;
