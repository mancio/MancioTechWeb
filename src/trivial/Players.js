import './Players.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import React from "react";
import {categories, difficulties} from "./PlayersHandler";

export default function Players(){

    const back = getMenuItemByTag('back');

    const players = React.createRef();
    const cat = React.createRef();
    const dif = React.createRef();
    const quNumber = React.createRef();
    const time = React.createRef();

    // const [state, setState] = {
    //     players: 1,
    //     category: 'any',
    //     difficulty: 'any',
    //     questionNum: 10,
    //     time: 10
    // }

    function playGame(e) {
        e.preventDefault();
        console.log('selected:');
        console.log('players: ' + players.current.value);
        console.log('category: ' + cat.current.value);
        console.log('difficulty: ' + dif.current.value);
        console.log('question number: ' + quNumber.current.value);
        console.log('time: ' + time.current.value);
    }

    return(
        <div>
            <div>
                <h1 className='trivial-title'>Welcome to Trivial Questions Game</h1>
                <h2 className='trivial-title'>Set up your game</h2>
                <form className='trivial-setup-box' onSubmit={playGame}>
                    <div className='trivial-section'>
                        <label> Players number: </label>
                        <input ref={players} className='trivial-input' type="number" name="players" step="1" min='1' max='10' required/>
                    </div>
                    <div className='trivial-section'>
                        <label> Question Category: </label>
                        <select ref={cat} className='trivial-list' id="categories" name="categories" required>
                            { categories.map(cat => (<option key={cat} value={cat}>{cat}</option>)) }
                        </select>
                    </div>
                    <div className='trivial-section'>
                        <label> Question difficulty: </label>
                        <select ref={dif} className='trivial-list' id="difficulty" name="difficulty" required>
                            { difficulties.map(dif => (<option key={dif} value={dif}>{dif}</option>)) }
                        </select>
                    </div>
                    <div className='trivial-section'>
                        <label> Number of question: </label>
                        <input ref={quNumber} className='trivial-input' type="number" name="question-number" step="1" min='10' max='50' required/>
                    </div>
                    <div className='trivial-section'>
                        <label> Time per question: </label>
                        <input ref={time} className='trivial-input' type="number" name="time-single-question" step="1" min='10' max='60' required/>
                        <label> seconds </label>
                    </div>
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