
import { List, Item, Content, ButtonDone, ButtonRemove } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id}
        hidden={task.done && hideDone}
      >
        <ButtonDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </ButtonDone>

        <Content done={task.done}>
          {task.content}
        </Content>
        <ButtonRemove
          className="tasks__remove--button"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ButtonRemove>
      </Item>
    ))}
  </List>
);

export default Tasks;