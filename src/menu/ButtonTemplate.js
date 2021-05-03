import './ButtonTemplate.css';
import SelectIcon from "./icon/SelectIcon";
import React from "react";
import App from "../App";

class ButtonTemplate extends React.Component{

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.set = this.props;
        this.buttonNumber = this.buttonNumber.bind(this);
    }

    buttonNumber(){
        const id = this.myRef.current.id;
        console.log('id selected: ' + id);
        const app = new App();
        if(app.mounted) {
            app.chooseMenu(id);
        }else {
            console.log("you are calling App with an empty state")
        }

    }

    render() {

        return(
            <div className='list'>
                <SelectIcon name={this.set.icon} iconColor={this.set.iconColor}/>
                <button id={this.set.id} ref={this.myRef} className='menu-button' onClick={this.buttonNumber}>
                    <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={this.set.width} height={this.set.height}>
                        <rect width={this.set.width} height={this.set.height} rx="27.5" fill={this.set.svgColor}/>
                        <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={this.set.textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{this.set.textField}</text>
                    </svg>
                </button>
            </div>
        );
    }
}

export default ButtonTemplate;