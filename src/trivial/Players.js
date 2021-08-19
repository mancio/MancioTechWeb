import './Players.css';
import React from "react";
import {categories, difficulties, getQuestions, qType, saveJsonToMemory, saveSetUpToMemory} from "./PlayersHandler";

export default function Players({ready}){

    const players = React.createRef();
    const cat = React.createRef();
    const dif = React.createRef();
    const quNumber = React.createRef();
    const time = React.createRef();
    const type = React.createRef();

    async function playGame(e) {
        e.preventDefault();

        getQuestions(quNumber.current.value, cat.current.value, dif.current.value, type.current.value)
            .then(data => {
                saveJsonToMemory(data);
                saveSetUpToMemory(players.current.value, cat.current.value, dif.current.value,
                    quNumber.current.value, time.current.value, type.current.value)
                console.log("trivia json saved");
                console.log(data);
                ready(true);
            })
            .catch( er => {
                console.log(er);
                window.alert("unable to get questions");
            })
    }

    return(
        <div>
            <div>
                <h1 className='trivial-title'>Welcome to Trivial Questions Game</h1>
                <h2 className='trivial-subtitle'>Set up your game</h2>
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
                        <label> Question type: </label>
                        <select ref={type} className='trivial-list' id="type" name="type" required>
                            { qType.map(type => (<option key={type} value={type}>{type}</option>)) }
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
        </div>
    )
}