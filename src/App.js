import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/author/AuthorPage"
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavLink, Ul, Body } from "./styled";

function App() {

  return (
    <HashRouter>
      <nav>
        <Ul ul>
          <li>
            <StyledNavLink to="/zadania/">Zadania </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/autor">O autorze </StyledNavLink>
          </li>
        </Ul>
        <Body>
          <Switch>
            <Route path="/zadania/:id">
              <TaskPage />
            </Route>
            <Route path="/zadania">
              <TasksPage />
            </Route>
            <Route path="/autor">
              <AuthorPage />
            </Route>
            <Route path="/">
              <Redirect to="/zadania" />
            </Route>

          </Switch>
        </Body>
      </nav>
    </HashRouter>
  )
};

export default App;