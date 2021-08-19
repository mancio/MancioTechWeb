import {loadSetUpFromMemory} from "./PlayersHandler";

export default function Play(){

    return(
        <div>
            <p>hello! {loadSetUpFromMemory("players")} are playing</p>
        </div>
    )
}