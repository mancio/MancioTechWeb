import {useParams} from "react-router-dom";
import {
    areaFromDiameter, getNewQuantityText,
    getRecipeByTitle,
    getRecipeDescKeys,
    getRecipeIngredientKeys, ingToFloat,
    isACircleCake,
    replaceTextSpace
} from "./RecipesHandler";
import ButtonTemplate from "../menu/ButtonTemplate";
import React, {useRef, useState} from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import './SingleRecipe.css';

export default function SingleRecipe(){

    const back = getMenuItemByTag('back');

    const params = useParams();
    const recipe = getRecipeByTitle(replaceTextSpace(params.tag));
    const title = recipe.title;
    const ingredients = recipe.ingredients;
    const description = recipe.description;
    const notes = recipe.notes;
    const picture = recipe.picture;
    const shape = recipe.shape;
    const diameter = recipe.diameter;

    const oldArea = areaFromDiameter(ingToFloat(diameter));
    const [newArea, setNewArea] = useState(0);

    const [original, setOriginal] = useState(true);
    const [change, setChange] = useState(false);

    const diaRef = useRef();

    let counter = 1;

    function changeIngSize(){
        setNewArea(areaFromDiameter(ingToFloat(diaRef.current.value)));
        setOriginal(false);
        setChange(true);
        setTimeout(() => {
            setChange(false)
        },500);
    }

    function getIngredient(key){
        if(original) return ingredients[key];
        else if(change) return <>&nbsp; Loading 😋 &nbsp;</>;
        else {
            if(isACircleCake(shape)){
                return getNewQuantityText(newArea, oldArea, ingredients[key]);
            }
        }
    }

    return(
        <div>
            <div className='recipe-panel'>
                <h1>{title}</h1>
                <img src={picture} alt={title}/>
                <table className='ingredients-table'>
                    <tbody>
                        {getRecipeIngredientKeys(ingredients).map((key) => {
                            const ingNum = 'ing'+ counter++;
                            return(
                                <tr key={ingNum} id={ingNum}>
                                    <td>{key}</td>
                                    <td>{getIngredient(key)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='cake-diameter-part'>
                    {isACircleCake(shape) &&
                        <>
                            <p> Change cake Diameter </p>
                            <input ref={diaRef} type='number' step='1' min='10' max='60'/>
                        </>
                    }
                    <br/>
                    <button onClick={changeIngSize} className='button-change-ingredients'> UPDATE </button>
                </div>
                <div className='recipe-desc-part'>
                    <ol>
                        {getRecipeDescKeys(description).map(key => {
                            return(
                                <li key={key} id={key}> {description[key]} </li>
                            )
                        })}
                    </ol>
                </div>
                <div className='recipe-note-part'>
                    <h3> NOTE: </h3>
                    <p> {notes} </p>
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
                tag='recipes'
            />
        </div>
    )
}