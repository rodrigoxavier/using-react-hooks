import './App.css';

//Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainMenu from './Pages/MainMenu';
import UseStateAndUseEffectExample from './Hooks/UseStateAndUseEffectExample';

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
      </Switch>
    </Router>
    </>
  );
}

export default App;
