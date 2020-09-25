/* eslint-disable react/prop-types */
import React from 'react';

export const UserProfileImage = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="" />
    </div>
  );
};
