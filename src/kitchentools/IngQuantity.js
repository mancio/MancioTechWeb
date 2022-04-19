import React, {useEffect, useState} from "react";
import "./Ktools.css";
import {
    addAllIng,
    checkIDs,
    clearMap,
    difRatio,
    getAllIngNames, getIngValue,
    getResMap,
    setAllReadOnly,
    updateAllIng
} from "./KitchenLogic";

export function IngQuantity(){
    const [elID, setElID] = useState(0);
    const [elem, setElem] = useState([]);
    const [elOut, setElOut] = useState([]);
    const [drop, setDrop] = useState([]);
    const [add, setAdd] = useState(true);
    const [full, setFull] = useState(false);
    const [done, setDone] = useState(false);
    const [result, setResult] = useState(false);
    const [ratio, setRatio] = useState(0);

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
                <span><input className='hy-calc-input' type="number" name={ingSize} key={ingSize} id={ingSize} defaultValue='1' min='1'/></span>
                <span> Quantity (gr, ml, ...)</span>
            </p>
        )
    }

    function addElement(){
        setElID(elID + 1);
        setElem(elem.concat(<Input key={elID}/>));
    }

    function start(){
        clearMap();
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
        const newVal = document.getElementById('newing').value;
        setRatio(difRatio(getIngValue(sel), newVal));
        if (parseInt(newVal) === 0) window.alert("Cannot be zero pls check");
        else {
            updateAllIng(sel, newVal);
            getResMap().forEach((value, key) => {
                out.push(
                    <p>{key}: {value} gr/ml...</p>
                )
            })
            setElOut(out);
            setAdd(false);
            setFull(false);
            setDone(false);
            setResult(true);
        }
    }

    function reset(){
        setElID(0);
        setElem([]);
        setElOut([]);
        setDrop([]);
        setAdd(true);
        setFull(false);
        setDone(false);
        setResult(false);
        setRatio(0);
        clearMap();

    }

    return(
        <div className='hydration-calc'>
            <h1>Ingredients calculator</h1>
            {add && <p>Click the button to add an ingredient space</p>}
            {result && <p className='cooking-tools-text'>Original</p>}
            {add && <button className='cooking-tools-button' onClick={() => addElement()}>Add Ingredient</button>}
            {elem}
            {full && <button className='cooking-tools-button' onClick={() => start()}>Start</button>}
            {done &&
                <>
                    <select id='ingSel'>{drop}</select>
                    <p>New quantity for this ingredient</p>
                    <input className='hy-calc-input' type="number" name='newing' id='newing' defaultValue='1' min='1'/>
                    <button className='cooking-tools-button' onClick={() => update()}>Update All Ingredients</button>
                </>
            }
            {result &&
                <>
                    <p className='cooking-tools-text'>Updated</p>
                    <p>Difference ratio: {ratio}</p>
                    {elOut}
                </>
            }
            <br/>
            <br/>
            <button className='cooking-tools-button' onClick={() => reset()}>Reset</button>
        </div>
    )
}