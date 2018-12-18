import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/NavBar';
import Recipes from './components/recipes/Recipes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div style={{backgroundColor: "#f6f9fc", padding: "1rem 4rem", minHeight: "100vw"}}>
              <Switch>
                <Route exact path="/recipes" component={Recipes} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
