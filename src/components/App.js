

import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchRecipes from './SearchRecipes';
import  '../styles/index.css';


import RecipeList from './RecipeList';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Recipe Finder</h1>
                <SearchRecipes />
                <RecipeList />
            </div>
        )
    }

}


export default App;