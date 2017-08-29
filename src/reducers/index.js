
import {combineReducers} from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE, REMOVE_RECIPE } from '../actions';


function recipes(state=[], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items ;
        default:
            return state ;
    }

}

function favoriteRecipe(state=[], action){
    switch (action.type) {
        case FAVORITE_RECIPE:
            state = [...state, action.recipe];
            return state;
        case REMOVE_RECIPE:
            console.log(action.index);
            console.log(...state.slice(0,action.index));
            console.log(...state.slice(action.index+1));
            state = [ ...state.slice(0,action.index), ...state.slice(action.index+1) ];
            return state;
        default:
            return state ;
    }
}


const rootReducers = combineReducers({ recipes, favoriteRecipe });

export default rootReducers ;