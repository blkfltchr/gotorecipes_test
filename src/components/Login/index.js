import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { ForgotPasswordLink } from '../ForgotPassword';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';

const LogInPage = () => (
  <div>
      <h1>Log In</h1>
      <LogInForm />
      <ForgotPasswordLink />
      <SignUpLink />
  </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

class LogInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
        password,
        error,
      } = this.state;  

      const isInvalid =
      password === '' ||
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
        <div className="form-group">
                <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                className="form-control"
                placeholder="Password"
                />
            </div>
        <button disabled={isInvalid} type="submit" className="btn btn-primary mb-3">Log In</button>

        {error && <p className="text-danger">{error.message}</p>}
      </form>
    );
  }
}

const LogInLink = () => (
  <p>
    Already have an account? <Link to="/login">Log In</Link>
  </p>
);

const LogInForm = compose(
  withRouter,
  withFirebase,
  )(LogInFormBase);

export default LogInPage;

export { LogInForm, LogInLink };