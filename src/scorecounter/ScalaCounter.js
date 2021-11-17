import "./ScalaCounter.css";
import {cards} from "./ScoreLogic";
import {useState} from "react";

export default function ScalaCounter(){

    const [score, setScore] = useState(0);

    function sumPoints(points){
        setScore(score + points);
    }

    function resetScore(){
        setScore(0);
    }

    return(
        <div className='scala-board-counter'>
            <p>Click on the card to add to the total Primera score</p>
            {cards.map(obj => {
                return(
                    <button key={obj.name + '-card'} className='card-button-pic' onClick={() => sumPoints(obj.primera)}><img src={obj.pic} alt='card'/></button>
                )
            })}
            <p>Total score: {score}</p>
            <button onClick={() => resetScore()}>Reset score</button>
        </div>
    )
}