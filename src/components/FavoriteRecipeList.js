

import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';

class FavoriteRecipeList extends Component {
    render() {
        return (
            <div>
                <h4 className="link"><Link to={'/'}>Home</Link></h4>
                <h1>Favorite Recipes:</h1>
                {
                    this.props.favoriteRecipes.map((recipe,index)=>{
                        return (
                            <RecipeItem key={index} recipe={recipe} favoriteButton={false}  ></RecipeItem>
                        )
                    })
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipe
    }
}

export default connect(mapStateToProps,null)(FavoriteRecipeList);