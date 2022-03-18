import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import "./Ktools.css";

export default function Ktools(){

    const back = getMenuItemByTag('back');

    function findElements(elToFind){

        let ok = true;

        let flour = parseInt(document.getElementById('hy-flour').value);
        let water = parseInt(document.getElementById('hy-water').value);
        let hydration = parseInt(document.getElementById('hydration').value);

        const allInputs = [flour, water, hydration];

        allInputs.forEach( el => {
            if (el !== elToFind && isNaN(el)) {
                window.alert("Please check input");
                ok = false;
            }
        });




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
                    <p>
                        Flour gr: <span><input type="number" name="flour" id='hy-flour' defaultValue='100'/></span>
                        <span><button onClick={() => findElements('flour')} className='cooking-tools-button'>FIND FLOUR</button></span>
                    </p>
                    <p>
                        Water gr/ml: <span><input type="number" name="water" id='hy-water' defaultValue='60'/></span>
                        <span><button onClick={() => findElements('water')} className='cooking-tools-button'>FIND WATER</button></span>
                    </p>
                    <p>
                        hydration %: <span><input type="number" name="hydration" id='hydration' defaultValue='60'/></span>
                        <span><button onClick={() => findElements('hydration')} className='cooking-tools-button'>FIND HYDRATION</button></span>
                    </p>
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