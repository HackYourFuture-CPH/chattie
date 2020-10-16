import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import AddPeopleToRoomForm from '../../components/AddPeopleToRoom/AddPeopleToRoomForm';
import '../../components/AddPeopleToRoom/AddPeopleToRoom.css';
import RoomForm from '../../components/AddNewRoom/RoomForm';
import Loader from '../../components/Loader/Loader';
import fetchWithAuth from '../../utils/fetchWithAuth';

export default function AddPeopleToRoom() {
  const [users, setUsers] = useState([]); // this is use to control the data from api
  const [addedUsers, setAddedUsers] = useState([]); //  this is use to add user to usersgroup
  const [input, setInput] = useState(''); //  this is use to handle the input from user to search out
  const [toAddRoom, setToAddRoom] = useState(false); //  thi is use to move to next page
  const currentUser = useContext(UserContext);
  const url = 'api/users';
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetchWithAuth(url);
      setUsers(response);
    }
    fetchUsers();
  }, []);

  // Add users in group list by using click
  const renderUserInGroup = (id) => {
    users.forEach((user) => {
      if (user.id === id) {
        setAddedUsers([...addedUsers, user]);
      }
    });
  };

  //  this function is user to remove user from added group of user
  const onRemoveFromGroup = (id) => {
    const removeUserFromGroup = addedUsers.filter((user) => user.id !== id);
    setAddedUsers(removeUserFromGroup);
  };

  // onChangeInput function that will be props to AddNewRoomForm
  const onSearch = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  // this  is function use to pass people to group component
  const onNext = () => {
    if (addedUsers.length !== 0) {
      setToAddRoom(true);
    }
  };

  const createNewRoom = async ({ title, imageUrl }) => {
    const channel = await fetchWithAuth('api/channels', {
      method: 'POST',
      body: JSON.stringify({ title, imageUrl }),
    });
    const requests = addedUsers
      .map(({ id }) => id)
      .concat(currentUser.id)
      .map((id) =>
        fetchWithAuth('api/channel-members', {
          method: 'POST',
          body: JSON.stringify({ channelId: channel.id, userId: id }),
        }),
      );
    await Promise.all(requests);
    window.location.assign(`./channels/${channel.id}`);
  };

  if (!currentUser) {
    return <Loader />;
  }
  if (toAddRoom === true) {
    return (
      <RoomForm
        addedUsers={addedUsers}
        onSubmit={createNewRoom}
        onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
      />
    );
  }
  return (
    <AddPeopleToRoomForm
      onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
      users={users}
      input={input}
      renderUserInGroup={(id) => renderUserInGroup(id)}
      addedUsers={addedUsers}
      onSearch={(event) => onSearch(event)}
      onNext={onNext}
    />
  );
}
