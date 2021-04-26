import Tools from "./Tools";
import Chip from "./Chip";

const SelectIcon = (props) => {
    const name = props.name;
    const iconColor = props.iconColor;
    switch (name){
        case "TOOLS":
            return <Tools iconColor={iconColor}/>;
        case "CHIP":
            return <Chip iconColor={iconColor}/>;
        default:
            return <p>NO ICON</p>;
    }
}

export default SelectIcon;
