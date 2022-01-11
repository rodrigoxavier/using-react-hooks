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
import React, { useDebugValue } from 'react';

const APPLICATION_THEMES = {
  LIGHT: {
    textColor: "lightblue",
    backgroundColor: "white"
  },
  DARK: {
    textColor: "darkblue",
    backgroundColor: "darkgray"
  }
}

//Creating themecontext here.
const ThemeContext = React.createContext(APPLICATION_THEMES.LIGHT);

function App() {
  return (
    //Here we can variable our theme using light or dark according to rule.
    <ThemeContext.Provider value={APPLICATION_THEMES.LIGHT}>
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
    </ThemeContext.Provider>
  );
}

type ThemeContextData = {
  textColor: string,
  backgroundColor: string
};

export function useThemeContext(): ThemeContextData {
  const themeContext = React.useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useThemeContext must be used within an AppProvider');
  }

  useDebugValue(themeContext.backgroundColor === "white" ? "LIGHT" : "DARK");

  return themeContext;
}

export default App;
