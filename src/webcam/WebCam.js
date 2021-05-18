import React from "react";
import Iframe from "react-iframe";

class WebCam extends React.Component{
    render() {
        const webcam = this.props.webcam;
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