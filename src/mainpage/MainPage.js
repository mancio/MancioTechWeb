import React from "react";
import Title from "./title/Title";
import Pacman from "./pacman/Pacman";
import Enter from "./enter/Enter";

class MainPage extends React.Component{
    render() {
        return(
            <div>
                <Title/> <Pacman/> <Enter/>
            </div>
        )
    }
}

export default MainPage;