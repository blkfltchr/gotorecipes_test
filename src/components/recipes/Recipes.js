import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import AddRecipeCard from './AddRecipeCard';
import RecipeCard from './RecipeCard';

class Recipes extends Component {

  render() {
    const { recipes } = this.props;

    // const lunchRecipes = this.props.recipes.filter(recipe => {
    //   return recipe.meal === "lunch";
    // }) ; 

    if (recipes) {
      return (
        <div className="row">
          <div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <h2>
                    {' '}
                    <i className="fas fa-utensils" /> Recipes{' '}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div style={{display: "flex", flexWrap: "wrap", width: "85vw", margin: "0 auto", justifyContent: "center"}}>
                  {recipes.map(recipe => (
                    <RecipeCard id={recipe.id} recipe={recipe} />  
                  ))}
                  <AddRecipeCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Recipes.propTypes = {
  firestore: PropTypes.object.isRequired,
  recipes: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'recipes' }]),
  connect((state, props) => ({
    recipes: state.firestore.ordered.recipes
  }))
)(Recipes);
