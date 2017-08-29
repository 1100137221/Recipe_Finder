export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = "FAVORITE_RECIPE";
export const REMOVE_RECIPE =  "REMOVE_RECIPE";

export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items
    };
}

export function favoriteRecipe(recipe) {
    return {
        type: FAVORITE_RECIPE,
        recipe
    }
}

export function removeRecipe(index) {
    return {
        type: REMOVE_RECIPE,
        index
    }
}