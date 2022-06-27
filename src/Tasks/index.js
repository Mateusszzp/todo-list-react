import "./style.css"
const Tasks = (props) => (
  <ul className="task__list">
    {props.tasks.map(task => (
      <li
        className={`tasks__display ${task.done && props.hideDoneTasks
            ? "tasks__display--hidden"
            : ""}`}
      >
        <button className="task__done--button">{task.done ? "✔" : ""}
        </button>
        <span className={`list__item ${task.done ?
          "list__item--done" : ""}`}>{task.content}
        </span>
        <button className="task__remove--button">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;