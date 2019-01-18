import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import store from '../../store';

import Navbar from '../Navigation/index.js';
import Recipes from '../../components/Recipes/Recipes';
import AddRecipe from '../../components/Recipes/AddRecipe'
import RecipePage from '../../components/Recipes/RecipePage'
import SignupPage from '../../components/SignUp/index'
import LoginPage from '../../components/LogIn/index'
import ForgotPasswordPage from '../ForgotPassword/index.js';
import AccountPage from '../Account/index.js';

import '../../App.css';

import { withAuthentication } from '../Session';

const App = () => {

    return (
      // <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div style={{backgroundColor: "#f6f9fc", padding: "1rem 4rem", height: "100vw"}}>
              <Switch>
                <Route exact path="/recipes" component={Recipes} />
                <Route exact path="/recipes/add" component={AddRecipe} />
                <Route exact path="/recipes/:id" component={RecipePage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/reset-password" component={ForgotPasswordPage} />
                <Route exact path="/account" component={AccountPage} />
              </Switch>
            </div>
          </div>
        </Router>
      // {/* </Provider> */}
    );
  }

export default withAuthentication(App);
