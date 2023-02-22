import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/author/AuthorPage"
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavLink, Ul, Body } from "./styled";
import { toAuthor, toTask, toTasks } from "./routes";

function App() {

  return (
    <HashRouter>
      <nav>
        <Ul ul>
          <li>
            <StyledNavLink to={toTasks()}>Zadania </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={toAuthor()}>O autorze </StyledNavLink>
          </li>
        </Ul>
        <Body>
          <Switch>
            <Route path={toTask()}>
              <TaskPage />
            </Route>
            <Route path={toTasks()}>
              <TasksPage />
            </Route>
            <Route path={toAuthor()}>
              <AuthorPage />
            </Route>
            <Route path="/">
              <Redirect to={toTasks()} />
            </Route>
          </Switch>
        </Body>
      </nav>
    </HashRouter>
  )
};

export default App;