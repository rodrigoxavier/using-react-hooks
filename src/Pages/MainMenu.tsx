import MenuButton from "../../src/Components/MenuButton";
import MenuImage from "../Assets/Images/MenuImage.png" 

const MainMenu = () => {
    return (
        <>
            <div className="menu-header">
                <img 
                    src={MenuImage}
                    alt="React Hooks"
                    width={400}>
                </img>
                <p className="app-main-text menu-title">React Hooks - Exemplos</p>
            </div>
            <div className="buttons-view">
                <MenuButton title="useState e useEffect" path="/useStateUseEffect"/>
                <MenuButton title="useContext" path="/"/>
                <MenuButton title="useReducer" path="/"/>
                <MenuButton title="useCallBack" path="/"/>
                <MenuButton title="useMemo" path="/"/>
                <MenuButton title="useRef" path="/"/>
            </div>
        </>
    )
} 

export default MainMenu;
