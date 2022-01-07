import { useHistory } from "react-router-dom";

export default function MainMenu() {
    const history = useHistory();
    return (
        <>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <img 
                    src="https://miro.medium.com/max/768/1*0j4xd4B_o-jxiaM9QYqgWw.png"
                    alt="React Hooks"
                    width={400}>
                </img>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <button 
                    onClick={() => {history.push("/useStateUseEffect")}}
                    style={{margin: "40px", padding: "10px", cursor: "pointer", background: "white", width: "200px"}}>
                        useState e useEffect
                    <img  
                        src="https://www.hookseabar.com/restaurants/hook/website/images/header-logo.png"
                        alt="React Hooks"
                        width={50}>
                    </img>
                </button>
                <button 
                    onClick={() => {history.push("/useStateUseEffect")}}
                    style={{margin: "40px", padding: "10px", cursor: "pointer", background: "white", width: "200px"}}>
                        useContext
                    <img  
                        src="https://www.hookseabar.com/restaurants/hook/website/images/header-logo.png"
                        alt="React Hooks"
                        width={50}>
                    </img>
                </button>
                <button 
                    onClick={() => {history.push("/useStateUseEffect")}}
                    style={{margin: "40px", padding: "10px", cursor: "pointer", background: "white", width: "200px"}}>
                        useCallBack
                    <img  
                        src="https://www.hookseabar.com/restaurants/hook/website/images/header-logo.png"
                        alt="React Hooks"
                        width={50}>
                    </img>
                </button>
                <button 
                    onClick={() => {history.push("/useStateUseEffect")}}
                    style={{margin: "40px", padding: "10px", cursor: "pointer", background: "white", width: "200px"}}>
                        useMemo
                    <img  
                        src="https://www.hookseabar.com/restaurants/hook/website/images/header-logo.png"
                        alt="React Hooks"
                        width={50}>
                    </img>
                </button>
                <button 
                    onClick={() => {history.push("/useStateUseEffect")}}
                    style={{margin: "40px", padding: "10px", cursor: "pointer", background: "white", width: "200px"}}>
                        useRef
                    <img  
                        src="https://www.hookseabar.com/restaurants/hook/website/images/header-logo.png"
                        alt="React Hooks"
                        width={50}>
                    </img>
                </button>
            </div>
        </>
    )
} 
