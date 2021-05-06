import './ButtonTemplate.css';
import SelectIcon from "./icon/SelectIcon";
import React from "react";

class ButtonTemplate extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div className='list'>
                <SelectIcon name={this.props.icon} iconColor={this.props.iconColor}/>
                <button id={this.props.id} className='menu-button' onClick={()=>this.props.returnState(this.props.tag)}>
                    <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height}>
                        <rect width={this.props.width} height={this.props.height} rx="27.5" fill={this.props.svgColor}/>
                        <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={this.props.textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{this.props.textField}</text>
                    </svg>
                </button>
            </div>
        );
    }
}

export default ButtonTemplate;