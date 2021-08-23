import {
    getAnswers,
    getCommonQuestionCategory, getCurrentQuestion,
    getPlayerProperty,
    getTotalPlayers,
    setNextPlayer
} from "./PlayersHandler";
import './Play.css'
import {useEffect, useRef, useState} from "react";

export default function Play(){

    const totalPlayers = getTotalPlayers();
    const questionType = getCommonQuestionCategory();

    const [firstSetUp, setFirstSetUp] = useState(true);
    const [answChange, setAnswChange] = useState(false);

    const [state, setState] = useState(
        {
            currentPlayer: 1,
            scorePlayer: 0,
            currentQuestionNumber: 1,
            currentQuestion: "loading",
            answerArray: [],
            questionsLeft: "loading",
            timeLeft: "loading"
        }
    )

    function countDown(){
        setInterval(() => {
            setState(prev => ({
                ...prev,
                timeLeft: state.timeLeft-1
            }))
        },1000)
    }

    useEffect(() => {
        if(firstSetUp){
            const question = getCurrentQuestion(1,1);
            const totQ = getPlayerProperty(1, 'totalQuestions');
            const time = getPlayerProperty(1, 'timeLeft');
            const answers = getAnswers(1, 1)
            setState({
                currentPlayer: 1,
                scorePlayer: 0,
                currentQuestionNumber: 1,
                currentQuestion: question,
                answerArray: answers,
                questionsLeft: totQ-1,
                timeLeft: time
            })
        }
        setFirstSetUp(false);

        countDown();

    },[firstSetUp])



    function switchPlayer(){
        const nextPlayer = setNextPlayer();
        const score = getPlayerProperty(nextPlayer, 'score');
        const currentQuestionNumber = getPlayerProperty(nextPlayer, 'currentQuestionNumber');
        const currentQuestion = getCurrentQuestion(nextPlayer, currentQuestionNumber);
        const totalQuestions = getPlayerProperty(nextPlayer, 'totalQuestions');
        const time = getPlayerProperty(1, 'timeLeft');

        setState(
            {
                currentPlayer: nextPlayer,
                scorePlayer: score,
                currentQuestionNumber: currentQuestionNumber,
                currentQuestion: currentQuestion,
                questionsLeft: totalQuestions - currentQuestionNumber,
                timeLeft: time
            }
        );

        setAnswChange(true);
    }

    return(
        <div>
            <div className='trivial-play-box'>
                <h1> Let's Play! </h1>
                <p> Players in the game: {totalPlayers} </p>
                <p> Question type: {questionType} </p>
                <h2> Question number: {state.currentQuestionNumber}</h2>
                <p> {state.currentQuestion} </p>

                <p> Possible answers: </p>

                <div>
                    {   state.answerArray.map(answer => {
                                return (<p key={answer}>{answer}</p>);
                            })
                    }
                </div>

                <p> Now is playing Player {state.currentPlayer}</p>
                <p> Time Left: {state.timeLeft} </p>
                <p> Questions left: {state.questionsLeft} </p>
            </div>
        </div>
    )
}