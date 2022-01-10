import React, {RefObject, useEffect, useRef, useState} from 'react';
import PageHeader from '../Components/Header';

const UseRefExample = () => {
    const firstInputRef = useRef<HTMLInputElement>(null);
    const secondInputRef = useRef<HTMLInputElement>(null);

    const focusOnInput = (inputToFocus: RefObject<HTMLInputElement>) => {
        inputToFocus.current?.focus();
    }

    return (
        <>
            <PageHeader backToHome={true} title="useRef"/>
            <div className="main-centered-div">
                <input type="text" name="firstInput" ref={firstInputRef} value={firstInputRef.current?.value} /> &nbsp;
                <span className="app-main-text">----------</span> &nbsp;
                <input type="text" name="secondInput" ref={secondInputRef} value={secondInputRef.current?.value}/>
            </div>
            <div className="main-centered-div">
                <button className="back-button-style" onClick={() => focusOnInput(firstInputRef)}>Focar no primeiro input</button>
                <button className="back-button-style" onClick={() => focusOnInput(secondInputRef)}>Focar no segundo input</button>
            </div>
        </>
    );
}

export default UseRefExample;