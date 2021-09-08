import {useParams} from "react-router-dom";
import {replaceTextSpace} from "./RecipesHandler";

export default function SingleRecipe(){

    const params = useParams();
    const recipe = replaceTextSpace(params.tag);

    return(
        <div>
            <p>{pappa}</p>
        </div>
    )
}