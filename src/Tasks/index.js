import "./style.css"


const Tasks = ({tasks,hideDone}) => (
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
        <button className="tasks__remove--button">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;