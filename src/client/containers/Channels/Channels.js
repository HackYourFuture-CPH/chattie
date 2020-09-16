import React from 'react';

import { UserContext } from '../../context/userContext';

export default function Channels() {
  return (
    <UserContext.Consumer>
      {(user) => {
        const email = user ? user.email : '';
        return <div>This is your private list of channels: {email}.</div>;
      }}
    </UserContext.Consumer>
  );
}
