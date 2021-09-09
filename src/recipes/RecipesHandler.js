import {getRecipesData} from "./RecipeList";

const recipes = getRecipesData();

export const getRecipeList = function (){
    return recipes.results;
}

export const removeTextSpace = function (text){
    return text.replace(/ /g, '_');
}

export const replaceTextSpace = function (text){
    return text.replace(/_/g, ' ');
}

export const getRecipeByTitle = function (title){
    return recipes.results.find((recipe) => recipe.title === title);
}

export const getRecipeIngredientKeys = function (ingredients){
    return Object.keys(ingredients);
}

export const getRecipeDescKeys = function (description){
    return Object.keys(description);
}

export const isACircleCake = function (shape){
    return shape === 'circle';
}