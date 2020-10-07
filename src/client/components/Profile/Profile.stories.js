import React from 'react';
import ProfileDetails from './ProfileDetails';

export default {
  title: 'Profile view',
};

const username = 'Victoria Kush';
const email = 'v.kush@email.com';
const profileImage =
  'https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150';

export const profileView = () => (
  <ProfileDetails
    userName={username}
    profileImage={profileImage}
    email={email}
    buttonText="edit"
    user={email}
    handleSubmit={() => true}
  />
);
