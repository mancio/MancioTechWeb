import "./BriscolaCounter.css";
import {useState} from "react";
import {cards} from "./ScoreLogic";

export default function BriscolaCounter(){

    const [score, setScore] = useState(0);
    const [comp, setComp] = useState('');

    function sumPoints(points, cardName){
        const newComp = comp + ' ' + cardName;
        setComp(newComp);
        setScore(score + points);
    }

    function resetScore(){
        setComp('');
        setScore(0);
    }

    return(
        <div className='briscola-board-counter'>
            <p>Click on the card to add to the total score</p>
            {cards.filter(obj => obj.briscola > 0).map(obj => {
                return(
                    <button key={obj.name + '-card'} className='card-button-pic' onClick={() => sumPoints(obj.briscola, obj.name)}>
                        <img src={obj.pic} alt='card'/>
                    </button>
                )
            })}
            <p>Total score: [ {comp} ] = {score}</p>
            <button className='primera-reset-bt' onClick={() => resetScore()}>Reset score</button>
        </div>
    )
}