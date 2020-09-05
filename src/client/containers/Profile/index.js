import React from 'react';

import { UserContext } from '../../context/userContext';

export default function Profile() {
  return (
    <UserContext.Consumer>
      {(user) => {
        const email = user ? user.email : '';
        return <div>This is your private profile: {email}</div>;
      }}
    </UserContext.Consumer>
  );
}
