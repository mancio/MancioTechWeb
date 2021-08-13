import './Players.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import React from "react";

export default function Players(){

    const back = getMenuItemByTag('back');

    return(
        <div>
            <div>
                <h1 className='trivial-title'>Welcome to Trivial Questions Game</h1>
                <h2 className='trivial-title'>Set up your game</h2>
                <form className='trivial-setup-box'>
                    <label> Players number: </label>
                    <input className='trivial-input' type="number" name="players" step="1" min='1' required/>
                    <br/>
                    <label> Question Category: </label>
                    <input className='trivial-radio' type='radio' name='question-type' value='all' required/>
                    <label> All </label>
                    <br/>
                    <label> Question difficulty: </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='mix' required/>
                    <label> Mix </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='easy' required/>
                    <label> Easy </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='medium' required/>
                    <label> Medium </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='hard' required/>
                    <label> Hard </label>
                    <br/>
                    <label> Time: </label>
                    <input className='trivial-input' type="number" name="time" step="1" min='1' max='5' required/>
                    <label> Minutes </label>
                    <br/>
                    <input className='trivial-play-button' type="submit" value="PLAY" />
                </form>
            </div>
            <div>
                <ButtonTemplate
                    key={back.id}
                    id={back.id}
                    width={back.width}
                    height={back.height}
                    svgColor={back.svgColor}
                    textColor={back.textColor}
                    textField={back.textField}
                    icon={back.icon}
                    iconColor={back.iconColor}
                    tag='menu'
                />
            </div>
        </div>
    )
}