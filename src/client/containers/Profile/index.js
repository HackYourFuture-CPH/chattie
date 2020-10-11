import React, { useContext } from 'react';
import ProfileDetails from '../../components/Profile/ProfileDetails';
import fetchWithAuth from '../../utils/fetchWithAuth';
import { UserContext } from '../../context/userContext';

export default function Profile() {
  const user = useContext(UserContext);

  const userUid = user && user.uid;

  const handleSubmit = async (formDetails) => {
    const getUser = await fetchWithAuth(`/api/users/current?uid=${userUid}`);

    const currentUserId = getUser.id;
    await fetchWithAuth(`/api/users/${currentUserId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDetails),
    });
  };

  return (
    <div className="profile-container">
      {user && (
        <ProfileDetails
          handleSubmit={handleSubmit}
          user={user}
          profileImage={user.profileImage}
          userName={user.userName}
          email={user.email}
          phoneNumber={user.phoneNumber}
        />
      )}
    </div>
  );
}
