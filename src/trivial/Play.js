import {
    getCurrentPlayer, getPlayerProperty,
    getTotalPlayers,
    loadSetUpFromMemory,
    setNextPlayer
} from "./PlayersHandler";
import './Play.css'
import {useEffect, useState} from "react";

export default function Play(){

    const totalPlayers = getTotalPlayers();

    const questionType = getPlayerProperty(1, 'json')

    const [state, setState] = useState(
        {
            currentPlayer: 1,
            scorePlayer: 0,
            currentQuestion: 1,
            questionsLeft: 0,
            timeLeft: 0
        }
    )


    function switchPlayer(){
        const nextPlayer = setNextPlayer();
        const score = getPlayerProperty(nextPlayer, 'score');
        const currentQuestion = getPlayerProperty(nextPlayer, 'currentQuestion');
        const totalQuestions = getPlayerProperty(nextPlayer, 'totalQuestions');
        const timeLeft = getPlayerProperty(nextPlayer, 'timeLeft');
        setState(
            {
                currentPlayer: nextPlayer,
                scorePlayer: score,
                currentQuestion: currentQuestion,
                questionsLeft: totalQuestions - currentQuestion,
                timeLeft: timeLeft
            }
        );
    }


    return(
        <div>
            <div className='trivial-play-box'>
                <h1> Let's Play! </h1>
                <p> Players in the game: {totalPlayers} </p>
                <p> Question type: {loadSetUpFromMemory("type")} </p>
                <h2> Question number: {state.currentQuestion}</h2>
                <p> {jsonData.results[0].question} </p>
                <p> Now is playing Player {state.currentPlayer}</p>
                <p> Time Left: {state.timeLeft} </p>
                <p> Questions left: {state.questionsLeft} </p>
            </div>
        </div>
    )
}