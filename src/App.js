import React from 'react'
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "obudzić Reacta", done: false },
  { id: 2, content: "zmienić olej w aucie", done: true },
];
const hideDone = false;
function App() {
  return (
    <main>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        exstraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </main>
  );
}
export default App;
