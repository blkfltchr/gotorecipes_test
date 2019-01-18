import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import ResetPasswordForm from '../ResetPassword';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <ResetPasswordForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);