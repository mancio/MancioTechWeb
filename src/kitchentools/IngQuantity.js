import React, {useEffect, useState} from "react";
import "./Ktools.css";
import {addAllIng, checkIDs, getAllIngNames, getResMap, setAllReadOnly, updateAllIng} from "./KitchenLogic";

export function IngQuantity(){
    const [elID, setElID] = useState(0);
    const [elem, setElem] = useState([]);
    const [elOut, setElOut] = useState([]);
    const [drop, setDrop] = useState([]);
    const [full, setFull] = useState(false);
    const [done, setDone] = useState(false);
    const [result, setResult] = useState(false);

    useEffect(()=>{
        if (elID >= 2) setFull(true);
    },[elID]);

    const Input = () => {
        const ingName = "ing-name-" + elID;
        const ingSize = "ing-size-" + elID;
        return(
            <p>
                <>{elID + 1}: </>
                <span><input className='hy-calc-input' type="text" name={ingName} key={ingName} id={ingName} defaultValue={'name' + (elID + 1)}/></span>
                <span><input className='hy-calc-input' type="number" name={ingSize} key={ingSize} id={ingSize} defaultValue='0'/></span>
                <span> Quantity (gr, ml, ...)</span>
            </p>
        )
    }

    function addElement(){
        setElID(elID + 1);
        setElem(elem.concat(<Input key={elID}/>));
    }

    function start(){
        let options = [];
        addAllIng("ing-name-","ing-size-", elID);
        let pos = 0;
        getAllIngNames().forEach(n => {
            options.push(<option key={pos} value={n}>{n}</option>);
            pos++;
        })
        setDrop(options);
        if(checkIDs(elID)){
            setDone(true);
            setFull(false);
            setAllReadOnly("ing-name-", elID);
            setAllReadOnly("ing-size-", elID);
        } else window.alert("two or more ingredients are repeated pls check");
    }

    function update(){
        let out = [];
        const sel = document.getElementById('ingSel').value;
        updateAllIng(sel, document.getElementById('newing').value)
        getResMap().forEach((value, key) => {
            out.push(
                <p>{key} | {value}</p>
            )
        })
        setElOut(out);
        setFull(false);
        setDone(false);
        setResult(true);
    }

    return(
        <div className='hydration-calc'>
            <h1>Ingredients calculator</h1>
            <p>Click the button to add an ingredient space</p>
            <button className='cooking-tools-button' onClick={() => addElement()}>Add Ingredient</button>
            {elem}
            {full && <button className='cooking-tools-button' onClick={() => start()}>Start</button>}
            {done &&
                <>
                    <select id='ingSel'>{drop}</select>
                    <p>New quantity for this ingredient</p>
                    <input className='hy-calc-input' type="number" name='newing' id='newing' defaultValue='0'/>
                    <button className='cooking-tools-button' onClick={() => update()}>Update All Ingredients</button>
                </>
            }
            {result &&
                <>
                    {elOut}
                </>
            }
        </div>
    )
}