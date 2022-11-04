import { Button } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
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
export default Buttons;