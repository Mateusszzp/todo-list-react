import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ButtonDone, ButtonRemove } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import  searchQueryParamsName  from '../Search/searchQueryParamsName';
const TasksList = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamsName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id}
          hidden={task.done && hideDone}>
          <ButtonDone
            onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ButtonDone>
          <Content done={task.done}>

            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <ButtonRemove
            onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </ButtonRemove>
        </Item>
      ))}
    </List>
  );
}

export default TasksList;