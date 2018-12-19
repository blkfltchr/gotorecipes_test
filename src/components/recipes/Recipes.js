import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Recipes extends Component {

  render() {
    const { recipes } = this.props;

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
                      <div className="card" style={{width: "255px", margin: "1rem"}} key={recipe.id}>
                        <div className="card-body">
                          <h5 className="card-title">
                            {recipe.title}
                          </h5>
                          <img 
                            className="card-img-top"
                            style={{ height: '216px', width: '216px' }}
                            top width='100%'
                            src={recipe.image}
                            alt={recipe.title} />
                        </div>
                          <Link
                            to={`/recipes/${recipe.id}`}
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fas fa-arrow-circle-right" /> Full recipe
                          </Link>
                      </div>
                    ))}
                    <div className="card" style={{width: "255px", margin: "1rem"}}>
                        <div className="card-body">
                          <h5 className="card-title">
                            Add a recipe
                          </h5>
                          <Link to={`/recipes/add`} style={{textDecoration: "none"}}>
                            <div style={{ height: '216px', width: '216px', border: "1px solid lightgrey", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i 
                                    className="fa fa-plus fa-5x" 
                                    aria-hidden="true"
                                    style={{color: "lightgrey"}}></i>
                                </div>
                            </Link>
                          </div>
                          <Link
                            to={`/recipes/add`}
                            className="btn btn-primary btn-sm">
                            <i className="fas fa-arrow-circle-right" /> Add a recipe
                          </Link>
                      </div>
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
