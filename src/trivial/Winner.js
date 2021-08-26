import {getTheWinner} from "./PlayersHandler";

export default function Winner(){

    const winner = getTheWinner();

    return(
        <div>
            <p>The winner is player: {winner} </p>
        </div>
    )
}