import React from "react";
import Iframe from 'react-iframe'
import {getGameByTag} from "./GameHandler";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

class GameFrame extends React.Component{
    render() {
        const gameTag = this.props.gameTag;
        const game = getGameByTag(gameTag);
        const backButton = getMenuItemByTag('back');
        return(
            <div>
                <Iframe
                    url={game.src}
                    width={game.gameWidth}
                    height={game.gameHeight}
                    frameBorder={game.frameBorder}
                    allowFullScreen={game.allowFullScreen}
                />
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
                    tag='game'
                    returnState={this.props.returnState}
                />
            </div>
        )
    }
}

export default GameFrame;