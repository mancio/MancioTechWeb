import React from "react";
import Iframe from "react-iframe";
import {getGameByTag} from "./WebCamHandler";

class WebCam extends React.Component{
    render() {
        const webcam = getGameByTag('bird');
        return(
            <Iframe
                url={webcam.src}
                width={webcam.width}
                height={webcam.height}
                frameBorder={webcam.frameBorder}
                allowFullScreen={webcam.allowFullScreen}
            />
        )
    }
}

export default WebCam;