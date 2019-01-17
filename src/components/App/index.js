import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withFirebase } from '../Firebase';

// import { Provider } from 'react-redux';
// import store from '../../store';

import Navbar from '../Navigation/index.js';
import Recipes from '../../components/Recipes/Recipes';
import AddRecipe from '../../components/Recipes/AddRecipe'
import RecipePage from '../../components/Recipes/RecipePage'
import SignupPage from '../../components/SignUp/index'
import LoginPage from '../../components/LogIn/index'

import '../../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      authUser: null,
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    console.log("auth:", this.state.authUser)
    return (
      // <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar authUser={this.state.authUser}/>
            <div style={{backgroundColor: "#f6f9fc", padding: "1rem 4rem", height: "100vw"}}>
              <Switch>
                <Route exact path="/recipes" component={Recipes} />
                <Route exact path="/recipes/add" component={AddRecipe} />
                <Route exact path="/recipes/:id" component={RecipePage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login" component={LoginPage} />
              </Switch>
            </div>
          </div>
        </Router>
      // </Provider>
    );
  }
}

export default withFirebase(App);
