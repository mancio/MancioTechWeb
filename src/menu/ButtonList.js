import ButtonTemplate from "./ButtonTemplate";
import React from "react";
import {getMenuNoBack} from "./MenuHandler";

class ButtonList extends React.Component{

    render() {
        const menu = getMenuNoBack();
        return(
            <div className='menu'>
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
                        />
                    )
                })}
            </div>
        );
    }
}

export default ButtonList;