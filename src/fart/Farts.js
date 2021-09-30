import './Farts.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {FartLogic} from "./FartLogic";

export default function Farts(){

    const backButton = getMenuItemByTag('back');


    function fartClick(){
        const fart = new FartLogic();
        fart.play();
    }

    return(
        <div>
            <h1 className='fart-title'>🤣 🤣 Farting page 🤣 🤣</h1>
            <h3 className='fart-desc'>
                If you ever wonder if a JS library to make your page fart exist....
                well YES!
            </h3>
            <p><a href='http://jsfart.com' rel="noreferrer" target="_blank">CLicK HeRe!</a> to visit the library </p>
            <button onClick={fartClick} className='fart-rand-button'>Random Fart</button>
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