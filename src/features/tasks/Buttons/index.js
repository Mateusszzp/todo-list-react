import { Button } from "./styled"
import { useSelector, useDispatch } from 'react-redux'
import { selectTasks, toggleHideDone } from "../tasksSlice";


const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={setAllDone}
          >
            Ukończ Wszystkie
          </Button>
        </>
      )}
    </div>
  );
}
export default Buttons;