import React from "react";
import WebCam from "./WebCam";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

class WebCamOfTheDay extends React.Component{
    render() {
        const back = getMenuItemByTag('back');
        return(
            <div>
                <WebCam/>
                <ButtonTemplate
                    key={back.id}
                    id={back.id}
                    width={back.width}
                    height={back.height}
                    svgColor={back.svgColor}
                    textColor={back.textColor}
                    textField={back.textField}
                    icon={back.icon}
                    iconColor={back.iconColor}
                    tag={back.tag}
                    returnState={this.props.returnState}
                />
            </div>
        )
    }
}

export default WebCamOfTheDay;