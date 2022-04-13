import React, {useEffect, useState} from "react";
import "./Ktools.css";
import {addAllIngSize, getAllIngSize} from "./KitchenLogic";

export function IngQuantity(){
    const [elID, setElID] = useState(0);
    const [elem, setElem] = useState([]);
    const [full, setFull] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(()=>{
        if (elID >= 2) setFull(true);
    },[elID]);

    const Input = () => {
        const ingName = "ing-name-" + elID;
        const ingSize = "ing-size-" + elID;
        return(
            <p>
                <span><input className='hy-calc-input' type="text" name="ing" key={ingName} id={ingName} defaultValue='name'/></span>
                <span><input className='hy-calc-input' type="number" name="ing" key={ingSize} id={ingSize} defaultValue='0'/></span>
                <span> Quantity (gr, ml, ...)</span>
            </p>
        )
    }

    function addElement(){
        setElID(elID + 1);
        setElem(elem.concat(<Input/>));
    }

    function start(){
        addAllIngSize("ing-size-", elID);
    }

    function result(){
        getAllIngSize().forEach(s => {

        })
    }

    return(
        <div className='hydration-calc'>
            <h1>Ingredients calculator</h1>
            <p>Click the button to add an ingredient space</p>
            <button className='cooking-tools-button' onClick={() => addElement()}>Add Ingredient</button>
            {elem}
            {full && <button className='cooking-tools-button' onClick={() => start()}>Start</button>}
            {done && }
        </div>
    )
}