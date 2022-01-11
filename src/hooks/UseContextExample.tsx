import { useThemeContext } from '../App';
import PageHeader from '../Components/Header';

const UseContextExample = () => {
    const themeContext = useThemeContext();

    return (
        <>
            <PageHeader backToHome={true} title="useContext, hook personalizado e useDebugValue"/>
            <div className="main-centered-div app-main-text" style={{background: themeContext.backgroundColor}}>
                <h3
                    style={{color: themeContext.textColor}}
                >
                    Esse texto está baseado na cor de tema definido no contexto.
                </h3>
            </div>
            <div className="main-centered-div app-main-text" style={{background: themeContext.backgroundColor}}>
                <h3
                    style={{color: themeContext.textColor}}
                >
                    Para receber o thema vindo do App.ts usamos o 'useThemeContext' que é um hook personalizado exportado com o contexto que exitia no momento da criação da aplicação.
                </h3>
            </div>
        </>
    );
}

export default UseContextExample;