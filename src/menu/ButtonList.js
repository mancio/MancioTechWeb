import './ButtonList.css';
import ButtonTemplate from "./ButtonTemplate";
import React from "react";
import {getFullMenu} from "./MenuHandler";

class ButtonList extends React.Component{

    render() {
        const menu = getFullMenu();
        return(
            <div>
                {menu.map(item => {
                    return(
                        <ButtonTemplate
                            key={item.id}
                            id={item.id}
                            width={item.width}
                            height={item.height}
                            svgColor={item.svgColor}
                            textColor={item.textColor}
                            textField={item.textField}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            tag={item.tag}
                            returnState={this.props.returnState}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ButtonList;