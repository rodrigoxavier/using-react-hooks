import React, {useCallback, useEffect, useState} from 'react';
import PageHeader from '../Components/Header';

const UseCallbackExample = () => {
    const [firstEntry, setFirstEntry] = useState(0);
    const [secondEntry, setSecondEntry] = useState(0);
    const [entriesSum, setEntriesSum] = useState(0);

    const sumEntries = () => {
        setEntriesSum(firstEntry + secondEntry);
    }

    const sumEntriesCallbackNotDeps = useCallback(() => {
        setEntriesSum(firstEntry + secondEntry);
    }, []);

    const sumEntriesCallbackWithDeps = useCallback(() => {
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
                <button className="back-button-style" onClick={() => sumEntriesCallbackNotDeps()}>Somar useCB sem deps</button>
            </div>
            <div className="main-centered-div">
                <button className="back-button-style" onClick={() => sumEntriesCallbackWithDeps()}>Somar useCB com deps</button>
            </div>
        </>
    );
}

export default UseCallbackExample;