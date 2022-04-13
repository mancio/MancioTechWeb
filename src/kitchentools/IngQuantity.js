import React, {useState} from "react";
import "./Ktools.css";

export function IngQuantity(){
    const [elID, setElID] = useState(0);
    const [elem, setElem] = useState([]);

    const Input = () => {
        return(
            <p>
                <span>Enter original </span>
                <span><input className='hy-calc-input' type="number" name="ing" id={"in-" + elID} defaultValue='100'/></span>
                <span><input className='hy-calc-input' type="number" name="ing" id={"out-" + elID}/></span>
                <span>Enter new</span>
            </p>
        )
    }

    function addElement(){
        setElID(elID + 1);
        setElem(elem.concat(<Input/>));
    }

    function calcIngredients(){

    }

    return(
        <div className='hydration-calc'>
            <h1>Ingredients calculator</h1>
            <p>Click the button to add an ingredient space</p>
            <button className='cooking-tools-button' onClick={() => addElement()}>Add Ingredient</button>
            {elem}
            <button className='cooking-tools-button' onClick={() => calcIngredients()}>Calc</button>
        </div>
    )
}