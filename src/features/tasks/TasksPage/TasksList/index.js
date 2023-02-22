import { useSelector, useDispatch } from "react-redux";
import { List, Links, Item, Content, ButtonDone, ButtonRemove } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamsName from '../Search/searchQueryParamsName';
import { toTask } from '../../../../routes';
import { useQueryParameters } from '../../queryParameters';

const TasksList = () => {

  const query = useQueryParameters(searchQueryParamsName);
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(state => selectTasksByQuery(state, query));

  return (

    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}>

          <ButtonDone
            onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ButtonDone>

          <Content done={task.done}>
            <Links
              to={toTask({ id: task.id })}>{task.content}
            </Links>
          </Content>

          <ButtonRemove
            onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </ButtonRemove>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;