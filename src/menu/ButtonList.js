import ButtonTemplate from "./ButtonTemplate";
import React from "react";
import {getMenuNoBack} from "./MenuHandler";
import {genRandomColor} from "../logic/RandomColorGenerator";

class ButtonList extends React.Component{

    render() {
        const menu = getMenuNoBack();

        return(
            <div className='menu-button-list'>
                {menu.map(item => {
                    const randomColor = genRandomColor();
                    return(
                        <ButtonTemplate
                            key={item.id}
                            id={item.id}
                            width={item.width}
                            height={item.height}
                            svgColor={randomColor}
                            textColor={item.textColor}
                            textField={item.textField}
                            icon={item.icon}
                            iconColor={randomColor}
                            tag={item.tag}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ButtonList;