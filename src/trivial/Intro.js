import Players from "./Players";
import Play from "./Play";
import {useState} from "react";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

export default function Intro(){

    const [play, setPlay] = useState(false);

    const back = getMenuItemByTag('back');

    function checkStatus(value){
        console.log("play value is: " + value);
        setPlay(value);
    }

    return(
        <div>
            { play ? <Play/> : <Players ready={checkStatus}/> }
            <div>
                <ButtonTemplate
                    key={back.id}
                    id={back.id}
                    width={back.width}
                    height={back.height}
                    svgColor={back.svgColor}
                    textColor={back.textColor}
                    textField={back.textField}
                    icon={back.icon}
                    iconColor={back.iconColor}
                    tag='menu'
                />
            </div>
        </div>
    )

}