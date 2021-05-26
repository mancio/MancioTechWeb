import Tools from "./Tools";
import Chip from "./Chip";
import Mail from "./Mail";
import Face from "./Face";
import Back from "./Back";
import React from "react";
import Game from "./Game";
import Cam from "./Cam";
import Tv from "./Tv";

class SelectIcon extends React.Component{

    constructor(props) {
        super(props);
        this.name = props.name;
        this.iconColor = props.iconColor;
    }

    render() {
        switch (this.name){
            case "TOOLS":
                return <Tools iconColor={this.iconColor}/>;
            case "CHIP":
                return <Chip iconColor={this.iconColor}/>;
            case 'MAIL':
                return <Mail iconColor={this.iconColor}/>;
            case 'FACE':
                return <Face iconColor={this.iconColor}/>;
            case 'GAME':
                return <Game iconColor={this.iconColor}/>;
            case 'CAM':
                return <Cam iconColor={this.iconColor}/>;
            case 'TV':
                return <Tv iconColor={this.iconColor}/>;
            case 'BACK':
                return <Back iconColor={this.iconColor}/>;
            default:
                return <p>NO ICON</p>;
        }
    }
}

export default SelectIcon;
