import {getScoreAllPlayers, getTheWinner, getTotalPlayers} from "./PlayersHandler";
import './Winner.css';

export default function Winner(){

    const winner = getTheWinner();
    const scoreAllPlayers = getScoreAllPlayers(getTotalPlayers());

    let counter = 0;

    return(
        <div>
            <div className='winner-list'>
                {scoreAllPlayers.map(score => {
                    counter++;
                    return(<p key={counter}> Player {counter}: {score} </p>)
                })}
            </div>
            <p className='winner-list'>The winner is player: {winner} </p>
        </div>
    )
}