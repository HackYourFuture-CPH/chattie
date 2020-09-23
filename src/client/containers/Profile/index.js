/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ProfileDetails from '../../components/Profile/ProfileDetails';
import { UserContext } from '../../context/userContext';

export default function Profile() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="profile-container">
          {user && <ProfileDetails {...user} />}
        </div>
      )}
    </UserContext.Consumer>
  );
}
