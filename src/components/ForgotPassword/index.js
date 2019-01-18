import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';

const ForgotPasswordPage = () => {
    return(
        <div>
            <h1>Forgot Your Password?</h1>
            <ForgotPasswordForm />
        </div>
    )
}

const INITIAL_STATE = {
    email: '',
    error: null,
}

class ForgotPasswordFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
          .doPasswordReset(email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
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
        const { email, error } = this.state;

        const isInvalid = email === '';

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
                <button disabled={isInvalid} type="submit" className="btn btn-primary mb-3">Reset My Password</button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const ForgotPasswordLink = () => (
    <p>
      <Link to={'/reset-password'}>Forgot Password?</Link>
    </p>
  );
  
export default ForgotPasswordPage;

const ForgotPasswordForm = withFirebase(ForgotPasswordFormBase);

export { ForgotPasswordForm, ForgotPasswordLink };