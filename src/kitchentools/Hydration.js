import React from "react";
import {verifyInputs} from "./KitchenLogic";
import "./Ktools.css";

export function Hydration(){

    function findElements(pos){

        let flour = parseInt(document.getElementById('hy-flour').value); // pos 0
        let water = parseInt(document.getElementById('hy-water').value); // pos 1
        let hydration = parseInt(document.getElementById('hydration').value); // pos 2

        const input = [flour, water, hydration];

        /*
            formula:
            flour = water / hydration * 100
            water = flour * hydration / 100
            hydration = water / flour * 100
         */


        if(verifyInputs(input, pos)){
            let quantity = 0;
            if(pos === 0){
                quantity = parseInt(Math.round(water / hydration * 100));
                document.getElementById('hy-flour').value = quantity;
            }
            if(pos === 1){
                quantity = parseInt(Math.round(flour * hydration / 100));
                document.getElementById('hy-water').value = quantity;
            }
            if(pos === 2){
                quantity = parseInt(Math.round(water / flour * 100));
                document.getElementById('hydration').value = quantity;
            }

        } else window.alert("Please check inputs");

    }

    return(
        <div className='hydration-calc'>
            <h1>Hydration calculator</h1>
            <p>To discover how much water put in your dough. Remember 1 ml = 1 gr of water</p>
            <p>
                Flour gr: <span><input className='hy-calc-input' type="number" name="flour" id='hy-flour' defaultValue='100'/></span>
                <span><button onClick={() => findElements(0)} className='cooking-tools-button'>FIND FLOUR</button></span>
            </p>
            <p>
                Water gr/ml: <span><input className='hy-calc-input' type="number" name="water" id='hy-water' defaultValue='60'/></span>
                <span><button onClick={() => findElements(1)} className='cooking-tools-button'>FIND WATER</button></span>
            </p>
            <p>
                hydration %: <span><input className='hy-calc-input' type="number" name="hydration" id='hydration' defaultValue='60'/></span>
                <span><button onClick={() => findElements(2)} className='cooking-tools-button'>FIND HYDRATION</button></span>
            </p>
        </div>
    )
}