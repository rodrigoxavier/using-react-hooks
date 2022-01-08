import React, {useEffect, useState} from 'react';
import PageHeader from '../Components/Header';

const UseStateAndUseEffectExample = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${counter}`;
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
            <div className="main-centered-div">
                <h5 className="app-main-text">Ao clicar em "incrementar" atualiza-se o estado do contador e como ele está no array de dependências, o useEffect é chamado e atualiza o título da página com o contador atual.</h5> &nbsp;
            </div>
            <div className="main-centered-div">
                <h5 className="app-main-text">Ao clicar em voltar, o componente é destruído e chama-se o retorno do useEffect, trocand o título da página para "React hooks - Exemplos"</h5>
            </div>
        </>
    );
}

export default UseStateAndUseEffectExample;