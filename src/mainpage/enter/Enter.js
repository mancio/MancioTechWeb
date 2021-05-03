import './Enter.css';
import React from "react";

class Enter extends React.Component{

    render() {
        return(
            <button className='enter-button' onClick={this.props.clickEnter}>
                <svg className='Enter' xmlns="http://www.w3.org/2000/svg" width="250" height="55" viewBox="0 0 250 55">
                    <rect id="Rectangle_291" data-name="Rectangle 291" width="250" height="55" rx="27.5" fill="#ff00ec"/>
                    <text className='button-text' id="ENTER" transform="translate(80 38)" fill="#fff" stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em"><tspan x="0" y="0">ENTER</tspan></text>
                </svg>
            </button>
        )
    }
}

export default Enter;