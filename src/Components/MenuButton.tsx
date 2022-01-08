import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import Hook from "../Assets/Images/Hook.png"

type ButtonProps = {
    title: string;
    path: string;
  };

const MenuButton: React.FC<ButtonProps> = props => {
    const history = useHistory();
    return (
        <button 
            onClick={() => {history.push(props.path)}}
            className="button-style">
                <p>{props.title}</p>
            <img  
                src={Hook}
                alt="React Hooks"
                width={50}>
            </img>
        </button>
    )
}

export default MenuButton;