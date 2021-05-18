import React from "react";
import Iframe from "react-iframe";
import './WebCam.css';

class WebCam extends React.Component{
    render() {
        const webcam = this.props.webcam;
        return(
            <div>
                <Iframe
                    className='webcam'
                    display='initial'
                    url={webcam.src}
                    width={webcam.width}
                    height={webcam.height}
                    frameBorder={webcam.frameBorder}
                    allowFullScreen={webcam.allowFullScreen}
                />
                <div className='webcam-description'>
                    <p>{webcam.title}</p>
                    <p>{webcam.country}</p>
                </div>
            </div>
        )
    }
}

export default WebCam;