import React from "react";
import WebCam from "./WebCam";
import './WebCamOfTheDay.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import Arrow from "./Arrow";
import {getCurrentWebCam, setAnotherWebCam} from "./WebCamHandler";

class WebCamOfTheDay extends React.Component{
    constructor() {
        super();
        this.state = getCurrentWebCam();
        this.changeCam = this.changeCam.bind(this);

    }

    changeCam(direction) {
        setAnotherWebCam(direction);
        this.setState(getCurrentWebCam());
    }

    render() {
        const back = getMenuItemByTag('back');
        return(
            <div>
                <h1 className='webcam-page-title'>Web Cam Of The Day</h1>
                <WebCam webcam={this.state}/>
                <div className='arrows'>
                    <Arrow iconColor={back.iconColor} direction='180' changeCam={this.changeCam}/>
                    <Arrow iconColor={back.iconColor} direction='0' changeCam={this.changeCam}/>
                </div>
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