import './App.css';

//Components
import UseStateAndUseEffectExample from './hooks/UseStateAndUseEffectExample.tsx';
import MainMenu from './Pages/MainMenu.tsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
