import {useParams} from "react-router-dom";
import {
    getRecipeByTitle,
    getRecipeDescKeys,
    getRecipeIngredientKeys,
    isACircleCake,
    replaceTextSpace
} from "./RecipesHandler";
import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
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

    let counter = 1;

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
                                    <td> {key} </td>
                                    <td> {ingredients[key]} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='cake-diameter-part'>
                    {isACircleCake(shape) && <p> Change cake Diameter </p>}
                    <input type='number' step='1' min='10' max='60'/>
                </div>
                <div className='recipe-desc-part'>
                    <ol>
                        {getRecipeDescKeys(description).map(key => {
                            return(
                                <li>{description[key]}</li>
                            )
                        })}
                    </ol>
                </div>
                <div className='recipe-note-part'>
                    <h3> NOTE: </h3>
                    <p>{notes}</p>
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