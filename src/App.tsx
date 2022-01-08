import './App.css';

//Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainMenu from './Pages/MainMenu';
import UseStateAndUseEffectExample from './Hooks/UseStateAndUseEffectExample';
import UseContextExample from './Hooks/UseContextExample';
import UseReducerExample from './Hooks/UseReducerExample';
import UseCallbackExample from './Hooks/UseCallBackExample';
import UseMemoExample from './Hooks/UseMemoExample';
import UseRefExample from './Hooks/UseRefExample';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route
          path={"/"}
          exact
          component={MainMenu}
        />
        <Route
          path={"/useStateUseEffect"}
          exact
          component={UseStateAndUseEffectExample}
        />
        <Route
          path={"/useContext"}
          exact
          component={UseContextExample}
        />
        <Route
          path={"/useReducer"}
          exact
          component={UseReducerExample}
        />
        <Route
          path={"/useCallback"}
          exact
          component={UseCallbackExample}
        />
        <Route
          path={"/useMemo"}
          exact
          component={UseMemoExample}
        />
        <Route
          path={"/useRef"}
          exact
          component={UseRefExample}
        />
      </Switch>
    </Router>
    </>
  );
}

export default App;
