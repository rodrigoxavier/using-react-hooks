import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function UseStateAndUseEffectExample() {
    const [counter, setCounter] = useState(0);
    const history = useHistory();

    useEffect(() => {
        document.title = counter.toString();

        setTimeout(() => {
            history.push("/");
        }, 3000);

        return(() => {
            document.title = "React Hooks - Exemplos";
        })
    }, [counter, history])

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </>
    );
}