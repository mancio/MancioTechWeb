import './Recipes.css';
import {getRecipeList, removeTextSpace} from "./RecipesHandler";
import {useHistory} from "react-router-dom";


export default function Recipes(){

    const history = useHistory();

    function openRecipe(title) {
        history.push(window.location.pathname + '/' + removeTextSpace(title));
    }

    const list = getRecipeList();

    return(
        <div>
            <h1 className='cooking-page-title'> Ready for cooking {list.length} recipes?</h1>
            <div className='recipes-list'>
                {list.map(recipe => {
                    return(<div>
                        <table className='table-recipe-titles'>
                            <tr>
                                <th> <img className='cake-picture' src={recipe.picture} alt={recipe.title}/> </th>
                                <th> <button onClick={() => openRecipe(recipe.title)} className='recipe-title-button'> {recipe.title} </button></th>
                            </tr>
                        </table>
                    </div>)
                })}
            </div>
        </div>
    )
}