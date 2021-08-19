import {getQuestion, getQuestionByNumber, loadJsonFromMemory, loadSetUpFromMemory} from "./PlayersHandler";
import './Play.css'
import {useEffect, useState} from "react";

export default function Play(){

    const jsonData = loadJsonFromMemory();

    const [state, setState] = useState(
        {
            currentPlayer: 1,
            scorePlayer1: 0,
            scorePlayer2: 0,
            questions: 0,
            timeLeft: 0
        }
    )


    return(
        <div>
            <div className='trivial-play-box'>
                <h1> Let's Play! </h1>
                <p> Players in the game: {loadSetUpFromMemory("players")} </p>
                <p> Question type: {loadSetUpFromMemory("type")} </p>
                <h2> Question: </h2>
                <p>  {jsonData.results[0].question}</p>
                <p> Now is playing Player {state.currentPlayer}</p>
            </div>
        </div>
    )
}