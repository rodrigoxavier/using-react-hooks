import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import MenuImage from "../Assets/Images/MenuImage.png" 

type HeaderProps = {
    title?: string;
    backToHome: boolean;
  };

const PageHeader: React.FC<HeaderProps> = props => {
    const history = useHistory();
    return (
        <>
            {props.backToHome && 
                <button 
                    onClick={() => {history.push("/")}}
                    className="back-button-style">
                        <p>Voltar</p>
                </button>
            }
            <div className="header">
                <img 
                    src={MenuImage}
                    alt="React Hooks"
                    width={300}>
                </img>
                <p className="app-main-text title">React Hooks - Exemplos</p>
                {props.title && <p className="app-main-text subtitle">{props.title}</p>}
            </div>
        </>
        
    )
}

export default PageHeader;