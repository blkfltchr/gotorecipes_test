import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { LogInLink } from '../LogIn';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
  <div>
      <h1>Sign Up</h1>
      <SignUpForm />
      <LogInLink />
  </div>
);

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/recipes');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;  

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            className="form-control"
            placeholder="Email Address"
            />
        </div>
        <div className="form-row">
            <div className="col">
                <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                className="form-control"
                placeholder="Password"
                />
            </div>
            <div className="col">
                <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                />
            </div>
        </div>
        <button disabled={isInvalid} type="submit" className="btn btn-primary my-3">Sign Up</button>

        {error && <p className="text-danger">{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to="/signup">Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
  )(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };