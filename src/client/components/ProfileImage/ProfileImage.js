import React from 'react';
import useFetch from '../../hooks/useFetch';

const ProfileImage = (username) => {
  const { response: user, loading, error } = useFetch(
    `/api/users?userName=${username}`,
  );
  if (loading) {
    return <>Loading..., please wait!</>;
  }

  if (error) {
    return <>An error has occurred</>;
  }
  return (
    <img className="user-image" src={user.profile_image} alt="user avatar" />
  );
};

export default ProfileImage;
