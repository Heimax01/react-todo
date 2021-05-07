import { useState } from "react";
import "./styles.css";

import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    completed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.trim()) {
      addTodo({ ...task, id: uuidv4() });
      setTask({ ...task, name: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="inputContainer">
        <input
          className="inputTask"
          type="text"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button className="submit" type="submit">
          submit
        </button>
      </form>
    </>
  );
}

export default TodoForm;
