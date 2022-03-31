import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import Dashicon from "./Dashicon";
import './DashBoard.css'

export default function DashBoard(){

    const backButton = getMenuItemByTag('back');

    return(
        <div>
            <div className='dash-intro'>
                <h3>Here you can write your notes</h3>
                <h4>Text is automatically saved in browser session</h4>
            </div>
            <div className='dashboard'>
                <textarea/>
                <Dashicon/>
            </div>

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
                tag='menu'
            />
        </div>

    )
}