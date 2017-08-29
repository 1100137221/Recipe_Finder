import React, { Component } from 'react';
import '../styles/index.css';

import {connect} from 'react-redux';
import {favoriteRecipe, removeRecipe} from '../actions';

class RecipeItem extends Component {

    constructor() {
        super();

        this.state = {
            favorited: false
        };
    }

    _favorite(recipe) {
        this.props.favoriteRecipe(recipe);
        this.setState({ favorited: !this.state.favorited  });
    }

    _removeFavorite(index){
        console.log(index);
        this.props.removeRecipe(index);
        this.setState({ favorited: !this.state.favorited  });
    }

    render() { 
        let { recipe , key, index, favoriteButton } = this.props ; 
        
        return (
            <div className="recipe-item">
                {
                    favoriteButton ?
                        this.state.favorited ?
                        <div className="star" onClick={()=>{  this._removeFavorite(index) }}  >&#9733;</div>
                        : 
                        <div className="star" onClick={()=>{  this._favorite(recipe) }}>
                            &#9734;
                        </div>
                    :
                    <div></div>
                }
                
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4 > { recipe.title } </h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img className="recipe-image"
                    src={recipe.thumbnail} alt={recipe.title} />
            </div>
        );
    }
}

export default connect(null, { favoriteRecipe, removeRecipe } )(RecipeItem);