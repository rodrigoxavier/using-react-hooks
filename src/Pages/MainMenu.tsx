import MenuButton from "../../src/Components/MenuButton";

const MainMenu = () => {
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
                <MenuButton/>                
            </div>
        </>
    )
} 

export default MainMenu;
