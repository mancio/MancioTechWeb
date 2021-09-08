import './Recipes.css';
import {getRecipeList} from "./RecipesHandler";

export default function Recipes(){

    const list = getRecipeList();

    return(
        <div>
            <h1 className='cooking-page-title'> Ready for cooking {list.length} recipes?</h1>
            <div className='recipes-list'>
                {list.map(recipe => {
                    return(<div> <p> <img className='cake-picture' src={recipe.picture} alt={recipe.title}/> {recipe.title} </p></div>)
                })}
            </div>
        </div>
    )
}