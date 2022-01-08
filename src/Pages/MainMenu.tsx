import MenuButton from "../../src/Components/MenuButton";
import PageHeader from "../Components/Header";

const MainMenu = () => {
    return (
        <>
            <PageHeader backToHome={false}/>
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
