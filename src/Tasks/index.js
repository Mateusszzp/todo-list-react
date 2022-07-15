import "./style.css"


const Tasks = (props) => (
  <ul className="tasks__list">
    {props.tasks.map(task => (
      <li key={task.id}
        className={`tasks__display ${task.done && props.hideDoneTasks
          ? "tasks__display--hidden"
          : ""}`}
      >
        <button className="tasks__done--button">{task.done ? "✔" : ""}
        </button>
        <span className={`tasks__item ${task.done ?
          "tasks__item--done" : ""}`}>{task.content}
        </span>
        <button className="tasks__remove--button">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;