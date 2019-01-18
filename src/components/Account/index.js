import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import ResetPasswordForm from '../ResetPassword';
import LogOutButton from '../LogOut';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <ResetPasswordForm />
        <LogOutButton />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);