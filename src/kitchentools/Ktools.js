import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import "./Ktools.css";
import {howManyNan} from "./KitchenLogic";

export default function Ktools(){

    const back = getMenuItemByTag('back');

    function findHydration(){

        let flour = parseInt(document.getElementById('hy-flour').value);
        let water = parseInt(document.getElementById('hy-water').value);
        let hydration = parseInt(document.getElementById('hydration').value);

        if (howManyNan(flour,water,hydration) > 1) window.alert('Please check numbers in input');
        else {

        }
    }

    return(
        <div>
            <div className='cooking-tools-title'>
                <h1>Cooking Tools</h1>
                <p>Here you can find some useful cooking calculators</p>
            </div>
            <div className='cooking-calc-box'>
                <div className='hydration-calc'>
                    <h1>Hydration calculator</h1>
                    <p>To discover how much water put in your dough. Remember 1 ml = 1 gr of water</p>
                    <p>Flour gr: <span><input type="number" name="flour" id='hy-flour' defaultValue='100'/></span> </p>
                    <p>Water gr/ml: <span><input type="number" name="water" id='hy-water' defaultValue='60'/></span> </p>
                    <p>hydration %: <span><input type="number" name="hydration" id='hydration' defaultValue='60'/></span> </p>
                    <button onClick={() => findHydration()} className='cooking-tools-button'>FIND RESULT</button>
                </div>
            </div>
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
    )
}