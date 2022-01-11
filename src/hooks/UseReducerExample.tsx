import { useReducer, useEffect, useRef } from 'react';
import PageHeader from '../Components/Header';

interface Timer {
    isRunning: boolean,
    time: number
}

type timerActions = {
    type: "start" | "stop" | "reset" | "tick"
}

const initialState = {
    isRunning: false,
    time: 0
};

let tickInterval: NodeJS.Timer;

const reducer = (state: Timer, action: timerActions) => {
    console.log('Action.type: ', action.type);
    switch (action.type) {
      case "start":
        return { ...state, isRunning: true };
      case "stop":
        return { ...state, isRunning: false };
      case "reset":
        return { isRunning: false, time: 0 };
      case "tick":
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }

const UseReducerExample: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const counterRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        console.log('State: ', state.isRunning);
        if (!state.isRunning) { 
            return; 
        }
        tickInterval = setInterval(() => dispatch({type: 'tick'}), 100);
        return () => {
          clearInterval(tickInterval);
          initialState.time = 0;
        };
      }, [state.isRunning]);

    return (
        <>
            <PageHeader backToHome={true} title="useReducer"/>
            <div className="main-centered-div">
                <button onClick={() => dispatch({ type: 'start' })} className="timer-button">
                    Start
                </button>
                <button onClick={() => dispatch({ type: 'stop' })} className="timer-button">
                    Stop
                </button>
                <button onClick={() => dispatch({ type: 'reset' })} className="timer-button">
                    Reset
                </button>
            </div>
            <div className="main-centered-div">
                <h2 className="app-main-text">Tempo decorrido: </h2> &nbsp;
                <h2 ref={counterRef} className="app-main-text">{state.time / 10}s</h2>
            </div>
        </>
    );
}

export default UseReducerExample;