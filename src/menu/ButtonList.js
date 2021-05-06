import './ButtonList.css';
import ButtonTemplate from "./ButtonTemplate";
import React from "react";

class ButtonList extends React.Component{
    constructor(props) {
        super(props);
        this.textColor = '#000000';
        this.menu = [
            {
                id: 0,
                width:250,
                height:55,
                svgColor:'#00ff5f',
                textColor: this.textColor,
                textField:'SITE DESIGN',
                icon: 'TOOLS',
                iconColor: '#00ff5f',
                tag: 'design'
            },
            {
                id: 1,
                width:250,
                height:55,
                svgColor:'#f2fc00',
                textColor: this.textColor,
                textField:'MY STORY',
                icon: 'FACE',
                iconColor: '#f2fc00',
                tag: 'story'
            },
            {
                id: 2,
                width:250,
                height:55,
                svgColor:'#ff0000',
                textColor: this.textColor,
                textField:'MY PROJECTS',
                icon: 'CHIP',
                iconColor: '#ff0000',
                tag: 'projects'
            },
            {
                id: 3,
                width:250,
                height:55,
                svgColor:'#00ccfd',
                textColor: this.textColor,
                textField:'CONTACT ME',
                icon: 'MAIL',
                iconColor: '#00ccfd',
                tag: 'contact'
            },
            {
                id: 4,
                width:250,
                height:55,
                svgColor:'#F600FF',
                textColor: this.textColor,
                textField:'GO BACK',
                icon: 'BACK',
                iconColor: '#f600ff',
                tag: 'back'
            }

        ];
    }

    render() {
        return(
            <div className='buttonList'>
                {this.menu.map(item => {
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
                            returnState={this.props.returnState}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ButtonList;