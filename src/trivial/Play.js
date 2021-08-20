import {
    getCommonQuestionCategory, getCurrentQuestion,
    getPlayerProperty,
    getTotalPlayers,
    setNextPlayer
} from "./PlayersHandler";
import './Play.css'
import {useEffect, useState} from "react";

export default function Play(){

    const totalPlayers = getTotalPlayers();

    const questionType = getCommonQuestionCategory();

    // const cur = getCurrentQuestion(1, 1);

    const [state, setState] = useState(
        {
            currentPlayer: 1,
            scorePlayer: 0,
            currentQuestionNumber: 1,
            currentQuestion: "loading",
            questionsLeft: 0,
            timeLeft: 0
        }
    )

    function switchPlayer(){
        const nextPlayer = setNextPlayer();
        const score = getPlayerProperty(nextPlayer, 'score');
        const currentQuestionNumber = getPlayerProperty(nextPlayer, 'currentQuestionNumber');
        const currentQuestion = getCurrentQuestion(nextPlayer, currentQuestionNumber);
        const totalQuestions = getPlayerProperty(nextPlayer, 'totalQuestions');
        const timeLeft = getPlayerProperty(nextPlayer, 'timeLeft');
        setState(
            {
                currentPlayer: nextPlayer,
                scorePlayer: score,
                currentQuestionNumber: currentQuestionNumber,
                currentQuestion: currentQuestion,
                questionsLeft: totalQuestions - currentQuestionNumber,
                timeLeft: timeLeft
            }
        );
    }




    return(
        <div>
            <div className='trivial-play-box'>
                <h1> Let's Play! </h1>
                <p> Players in the game: {totalPlayers} </p>
                <p> Question type: {questionType} </p>
                <h2> Question number: {state.currentQuestionNumber}</h2>
                <p> {state.currentQuestion} </p>
                <p> Now is playing Player {state.currentPlayer}</p>
                <p> Time Left: {state.timeLeft} </p>
                <p> Questions left: {state.questionsLeft} </p>
            </div>
        </div>
    )
}