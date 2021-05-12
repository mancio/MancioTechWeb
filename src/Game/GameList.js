import React from "react";
import {getGameList} from "./GameHandler";
import GameButton from "./GameButton";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

class GameList extends React.Component{
    render() {
        const list = getGameList();
        const backButton = getMenuItemByTag('back');
        return(
            <div>
                {list.map(item =>{
                    console.log(item);
                    return(
                        <GameButton
                            key={item.id}
                            id={item.id}
                            svgWidth={item.svgWidth}
                            svgHeight={item.svgHeight}
                            buttonColor={item.buttonColor}
                            textColor={item.textColor}
                            title={item.title}
                            tag={item.tag}
                            returnState={this.props.returnState}
                        />
                    )
                })}
                <ButtonTemplate
                    key={backButton.id}
                    id={backButton.id}
                    width={backButton.width}
                    height={backButton.height}
                    svgColor={backButton.svgColor}
                    textColor={backButton.textColor}
                    textField={backButton.textField}
                    icon={backButton.icon}
                    iconColor={backButton.iconColor}
                    tag={backButton.tag}
                    returnState={this.props.returnState}
                />
            </div>
        )
    }
}

export default GameList;