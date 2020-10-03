import React, { useContext } from 'react';
import ProfileDetails from '../../components/Profile/ProfileDetails';
import { UserContext } from '../../context/userContext';

export default function Profile() {
  const user = useContext(UserContext);
  const userUid = user && user.uid;

  const handleSubmit = async (formDetails) => {
    const getUser = await fetch(`/api/users/current?uid=${userUid}`);
    const userResponse = await getUser.json();

    const currentUserId = userResponse.id;
    await fetch(`/api/users/${currentUserId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDetails),
    });
  };

  return (
    <div className="profile-container">
      {user && <ProfileDetails handleSubmit={handleSubmit} user={user} />}
    </div>
  );
}
