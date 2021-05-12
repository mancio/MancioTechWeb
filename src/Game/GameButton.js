import React from "react";

class GameButton extends React.Component{

    render() {
        return(
            <div>
                <button id={this.props.id} className='menu-button' onClick={()=>this.props.returnState(this.props.tag)}>
                    <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={this.props.svgWidth} height={this.props.svgHeight}>
                        <rect width={this.props.svgWidth} height={this.props.svgHeight} rx="27.5" fill={this.props.buttonColor}/>
                        <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={this.props.textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{this.props.title}</text>
                    </svg>
                </button>
            </div>
        );
    }
}

export default GameButton;