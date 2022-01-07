import React, {useEffect, useState} from 'react';

export default function UseStateAndUseEffectExample() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter.toString();

        return(() => {
            document.title = "React App";
        })
    }, [counter])

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </>
    );
}