import {getScoreAllPlayers, getTheWinner, getTotalPlayers} from "./PlayersHandler";

export default function Winner(){

    const winner = getTheWinner();
    const scoreAllPlayers = getScoreAllPlayers(getTotalPlayers());

    let counter = 0;

    return(
        <div>
            <div>
                {scoreAllPlayers.map(score => {
                    counter++;
                    return(<p key={counter}> Player {counter}: {score} </p>)
                })}
            </div>
            <p>The winner is player: {winner} </p>
        </div>
    )
}