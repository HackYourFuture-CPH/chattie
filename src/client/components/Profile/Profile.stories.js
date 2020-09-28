import React from 'react';
import ProfileDatails from './ProfileDetails';

const username = 'Victoria Kush';
const email = 'v.kush@email.com';
const profileImage =
  'https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150';

export const profileView = () => (
  <ProfileDatails
    title="Test title"
    userName={username}
    profileImage={profileImage}
    email={email}
  />
);
