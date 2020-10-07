import React from 'react';

import { signOut } from '../../firebase/auth';

const SignOutButton = () => (
  <button className="sign-out-button" type="button" onClick={signOut}>
    Sign Out
  </button>
);

export default SignOutButton;
