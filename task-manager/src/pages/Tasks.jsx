import { useState, useRef } from "react";

function Tasks() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    "Complete assignment",
    "Read React notes"
  ]);

  const taskInputRef = useRef();

  const addTask = () => {

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);

    setTask("");

    taskInputRef.current.focus();
  };

  const clearInput = () => {
    setTask("");
    taskInputRef.current.focus();
  };

  return (
    <div className="page">

      <div className="task-input">

        <label>New Task:</label>

        <input
          type="text"
          value={task}
          ref={taskInputRef}
          onChange={(e) => setTask(e.target.value)}
        />

      </div>

      <div className="task-count">
        Tasks: {tasks.length}
      </div>

      <ul className="task-list">

        {tasks.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            {item}
          </li>
        ))}

      </ul>

      <div className="button-container">

        <button onClick={addTask}>
          Add Task
        </button>

        <button onClick={clearInput}>
          Clear Input
        </button>

      </div>

    </div>
  );
}

export default Tasks;