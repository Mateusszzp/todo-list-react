import { List, Item, Content, ButtonDone, ButtonRemove } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ButtonRemove>
      </Item>
    ))}
  </List>
);

export default TasksList;