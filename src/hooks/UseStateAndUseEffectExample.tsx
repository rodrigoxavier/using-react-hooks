import React, {useEffect, useState} from 'react';

export default function UseStateAndUseEffectExample() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        
    }, [])

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </>
    );
}