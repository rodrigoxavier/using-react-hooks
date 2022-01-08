import React, {useEffect, useState} from 'react';
import PageHeader from '../Components/Header';

const UseStateAndUseEffectExample = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter.toString();
        return(() => {
            document.title = "React Hooks - Exemplos";
        })
    }, [counter])

    return (
        <>
            <PageHeader backToHome={true} title="useState e useEffect"/>
            <div className="main-centered-div">
                <h3 className="app-main-text">{counter}</h3> &nbsp;
                <button className="back-button-style" onClick={() => setCounter(counter + 1)}>Incrementar</button>
            </div>
        </>
    );
}

export default UseStateAndUseEffectExample;