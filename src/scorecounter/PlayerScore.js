import {loadScore, players, saveScore} from "./ScoreLogic";
import "./PlayerScore.css";

export default function PlayerScore(props){

    const playerTag = 'score-card-player-' + props.gametype;

    function resetScore(){
        players.forEach(pl => {
            document.getElementById(playerTag + pl).value = 0;
            saveScore(playerTag + pl, "0");
        })
    }

    function storeScore(playerName, evt){
        saveScore(playerName, evt.target.value.toString());
    }

    function checkScore(playerName){
        return loadScore(playerName) || "0";
    }

    return(
        <div className='player-score-board'>
            {players.map(pl => {
                return (
                    <div key={'pl-' + pl} className='players-score-card'>
                        <label>{'Player ' + pl}</label> &nbsp;
                        <input
                            onChange={(evt) => storeScore(playerTag + pl, evt)}
                            id={playerTag + pl} type="number" defaultValue={checkScore(playerTag + pl)}
                            min="0"
                        />
                    </div>
                )
            })}
            <button className='reset-score-pl-button' onClick={() => resetScore()}>Reset Score</button>
            <p className='score-pl-note'>Score will be automatically saved to Browser cache on every change</p>
        </div>
    )
}