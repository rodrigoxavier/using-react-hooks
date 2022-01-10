import MenuButton from "../../src/Components/MenuButton";
import PageHeader from "../Components/Header";

const MainMenu = () => {
    return (
        <>
            <PageHeader backToHome={false}/>
            <div className="buttons-view">
                <MenuButton title="useState e useEffect" path="/useStateUseEffect"/>
                <MenuButton title="useContext e hook personalizado" path="/useContext"/>
                <MenuButton title="useCallback" path="/useCallback"/>
                <MenuButton title="useMemo" path="/useMemo"/>
                <MenuButton title="useRef" path="/useRef"/>
                <MenuButton title="useReducer" path="/useReducer"/>
            </div>
        </>
    )
} 

export default MainMenu;
