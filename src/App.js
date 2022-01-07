import './App.css';
import UseStateAndUseEffectExample from './hooks/UseStateAndUseEffectExample.tsx';
import {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(true);
  const [useEffectVisible, setUseEffectVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 5000)

  return (
    visible ? <UseStateAndUseEffectExample /> : <></>
  );
}

export default App;
