import React, {useMemo, useState} from 'react';
import PageHeader from '../Components/Header';

const UseMemoExample = () => {
    const [firstEntry, setFirstEntry] = useState(0);
    const [secondEntry, setSecondEntry] = useState(0);
    const [entriesSum, setEntriesSum] = useState(0);
    
    const sumWithDeps = useMemo(() => firstEntry + secondEntry, [firstEntry, secondEntry]);
    console.log('sumWithDeps: ', sumWithDeps);

    const sumWithoutDeps = useMemo(() => firstEntry + secondEntry, []);
    console.log('sumWithoutDeps: ', sumWithoutDeps);

    const sumEntries = () => {
        setEntriesSum(firstEntry + secondEntry);
    }

    const sumEntriesMemoWithDeps =() => {
        setEntriesSum(sumWithDeps);
    };

    const sumEntriesMemoWithoutDeps =() => {
        setEntriesSum(sumWithoutDeps);
    };

    return (
        <>
            <PageHeader backToHome={true} title="useMemo"/>
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
                <button className="back-button-style" onClick={() => sumEntriesMemoWithoutDeps()}>Somar useMemo sem deps</button>
            </div>
            <div className="main-centered-div">
                <button className="back-button-style" onClick={() => sumEntriesMemoWithDeps()}>Somar useMemo com deps</button>
            </div>
        </>
    );
}

export default UseMemoExample;