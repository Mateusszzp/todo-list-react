import "./style.css"


const Tasks = ({tasks,hideDone, removeTask}) => (
  <ul className="tasks__list">
    {tasks.map(task => (
      <li key={task.id}
        className={`tasks__display ${
          task.done && hideDone
          ? "tasks__display--hidden"
          : ""}`}
      >
        <button className="tasks__done--button">{task.done ? "✔" : ""}
        </button>
        <span className={`tasks__item ${task.done ?
          "tasks__item--done" : ""}`}>{task.content}
        </span>
        <button 
        className="tasks__remove--button"
        onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;