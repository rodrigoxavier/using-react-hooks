import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const MenuButton: React.FC = props => {
    const history = useHistory();
    return (
        <button 
            onClick={() => {history.push("/useStateUseEffect")}}
            className="button-style">
                useState e useEffect
            <img  
                src="https://www.hookseabar.com/restaurants/hook/website/images/header-logo.png"
                alt="React Hooks"
                width={50}>
            </img>
        </button>
    )
}

export default MenuButton;