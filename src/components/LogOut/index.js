import React from 'react';

import { withFirebase } from '../Firebase';

const LogOutButton = ({ firebase }) => (
    <button type="button" className="btn btn-danger" onClick={firebase.doSignOut}>
        <i className="fa fa-sign-out"></i>
    </button>
);

export default withFirebase(LogOutButton);