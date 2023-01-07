import { Button } from "./styled"
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsTasksEveryDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsTasksEveryDone);

  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</Button>
      {areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}>
            Ukończ Wszystkie
          </Button>
        </>
      )}
    </div >
  )
}
export default Buttons;