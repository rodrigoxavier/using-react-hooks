import {useCallback, useState} from 'react';
import PageHeader from '../Components/Header';

const UseCallbackExample: React.FC = () => {
    const [firstEntry, setFirstEntry] = useState(0);
    const [secondEntry, setSecondEntry] = useState(0);
    const [entriesSum, setEntriesSum] = useState(0);

    const sumEntries = () => {
        setEntriesSum(firstEntry + secondEntry);
    }

    const sumEntriesCallbackWithoutDeps = useCallback(() => {
        console.log('Executei withoutDeps');
        setEntriesSum(firstEntry + secondEntry);
    }, []);

    const sumEntriesCallbackWithDeps = useCallback(() => {
        console.log('Executei withDeps');
        setEntriesSum(firstEntry + secondEntry);
    }, [firstEntry, secondEntry]);

    return (
        <>
            <PageHeader backToHome={true} title="useCallback"/>
            <div className="main-centered-div">
                <input type="number" name="firstEntry" value={firstEntry} onChange={e => setFirstEntry(parseInt(e.target.value))}/> &nbsp;
                <span className="app-main-text">+</span> &nbsp;
                <input type="number" name="firstEntry" value={secondEntry} onChange={e => setSecondEntry(parseInt(e.target.value))}/>
            </div>
            <div className="main-centered-div">
                <span className="app-main-text">Soma: </span> &nbsp;
                <span className="app-main-text">{entriesSum}</span> &nbsp;
            </div>
            <div className="main-centered-div">
                <button className="back-button-style" onClick={() => sumEntries()}>Somar normalmente</button>
            </div>
            <div className="main-centered-div">
                <button className="back-button-style" onClick={() => sumEntriesCallbackWithoutDeps()}>Somar useCB sem deps</button>
            </div>
            <div className="main-centered-div">
                <button className="back-button-style" onClick={() => sumEntriesCallbackWithDeps()}>Somar useCB com deps</button>
            </div>
            <div className="main-centered-div">
                <h5 className="app-main-text">Ao clicar no bot??o para executar a soma sem callback, utiliza-se o valor atual das vari??veis de estado.</h5> &nbsp;
            </div>
            <div className="main-centered-div">
                <h5 className="app-main-text">Ao clicar no bot??o para executar a soma com callback, mas SEM array de depend??ncias, utilzia-se o valor das vari??veis carregado no momento do primeiro carregamento (n??o as atualiza ap??s o render)</h5> &nbsp;
            </div>
            <div className="main-centered-div">
                <h5 className="app-main-text">Ao clicar no bot??o para executar a soma com callback, mas COM array de depend??ncias, utilzia-se o valor das vari??veis atualizadas. Ao mudar o valor do estado o callback usa o valor mais recente.</h5> &nbsp;
            </div>
            <div className="main-centered-div">
                <h5 className="app-main-text">Ent??o, ao pedir a soma o c??lculo ?? feito no momento do clique no bot??o.</h5>
            </div>
        </>
    );
}

export default UseCallbackExample;