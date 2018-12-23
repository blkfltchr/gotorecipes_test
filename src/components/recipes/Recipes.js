import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import AddRecipeCard from './AddRecipeCard';
import RecipeCard from './RecipeCard';

class Recipes extends Component {

  state = {
    recipes: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipes !== prevProps.recipes) {
      this.setState({
        recipes: this.props.recipes
      })
    }
  }

  filterAllRecipes = () => {
    let allRecipes = this.state.recipes
    allRecipes = allRecipes.filter((recipe) => {
      return recipe.meal !== ""
    })
    this.setState({
      recipes: allRecipes
    })
    console.log(this.state.recipes)
  }

  filterBreakfastRecipes = () => {
    let breakfastRecipes = this.state.recipes
    breakfastRecipes = breakfastRecipes.filter((recipe) => {
      return recipe.meal === "breakfast"
    })
    this.setState({
      recipes: breakfastRecipes
    })
    console.log(this.state.recipes)
  }

  filterLunchRecipes = () => {
    let lunchRecipes = this.state.recipes
    lunchRecipes = lunchRecipes.filter((recipe) => {
      return recipe.meal === "lunch"
    })
    this.setState({
      recipes: lunchRecipes
    })
    console.log(this.state.recipes)
  }

  filterDinnerRecipes = () => {
    let dinnerRecipes = this.state.recipes
    dinnerRecipes = dinnerRecipes.filter((recipe) => {
      return recipe.meal === "dinner"
    })
    this.setState({
      recipes: dinnerRecipes
    })
    console.log(this.state.recipes)
  }

  render() {
    const { recipes } = this.props;
    console.log("Recipe state", this.state.recipes)
    console.log("Recipe props", recipes)
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
                <button onClick={this.filterBreakfastRecipes}>All</button>
                <button onClick={this.filterBreakfastRecipes}>Breakfast</button>
                <button onClick={this.filterLunchRecipes}>Lunch</button>
                <button onClick={this.filterDinnerRecipes}>Dinner</button>
              </div>
              <div className="row">
                <div style={{display: "flex", flexWrap: "wrap", width: "85vw", margin: "0 auto", justifyContent: "center"}}>
                  {this.state.recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />  
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
