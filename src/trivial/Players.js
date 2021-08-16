import './Players.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import React from "react";
import {categories} from "./PlayersHandler";

export default function Players(){

    const back = getMenuItemByTag('back');

    const players = React.createRef();
    // const [state, setState] = {
    //     players: 1,
    //     category: 'any',
    //     difficulty: 'any',
    //     questionNum: 10,
    //     time: 10
    // }

    function playGame(e) {
        e.preventDefault();

    }

    return(
        <div>
            <div>
                <h1 className='trivial-title'>Welcome to Trivial Questions Game</h1>
                <h2 className='trivial-title'>Set up your game</h2>
                <form className='trivial-setup-box' onSubmit={playGame}>
                    <label> Players number: </label>
                    <input ref={players} className='trivial-input' type="number" name="players" step="1" min='1' max='10' required/>
                    <br/>
                    <label> Question Category: </label>
                    <select className='trivial-categories' id="categories" name="categories" required>
                        { categories.map(cat => (<option key={cat} value={cat}>{cat}</option>)) }
                    </select>
                    <br/>
                    <label> Question difficulty: </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='any' required/>
                    <label> Any </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='easy' required/>
                    <label> Easy </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='medium' required/>
                    <label> Medium </label>
                    <input className='trivial-radio' type='radio' name='question-difficulty' value='hard' required/>
                    <label> Hard </label>
                    <br/>
                    <label> Number of question: </label>
                    <input className='trivial-input' type="number" name="question-number" step="1" min='10' max='50' required/>
                    <br/>
                    <label> Time per question: </label>
                    <input className='trivial-input' type="number" name="time-single-question" step="1" min='10' max='60' required/>
                    <label> seconds </label>
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