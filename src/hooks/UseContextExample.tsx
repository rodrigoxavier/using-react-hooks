import {useContext, useEffect, useState} from 'react';
import { useThemeContext } from '../App';
import PageHeader from '../Components/Header';

const UseContextExample = () => {
    const themeContext = useThemeContext();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter.toString();
        return(() => {
            document.title = "React Hooks - Exemplos";
        })
    }, [counter])

    return (
        <>
            <PageHeader backToHome={true} title="useContext"/>
            <div className="main-centered-div" style={{background: themeContext.backgroundColor}}>
                <h3
                    style={{color: themeContext.textColor}}
                >
                    Esse texto está baseado na cor de tema definido no contexto.
                </h3>
            </div>
        </>
    );
}

export default UseContextExample;