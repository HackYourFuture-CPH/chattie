import React, { useState } from 'react';
import RoomForm from '../../components/AddNewRoom/RoomForm';
import '../../components/AddNewRoom/AddNewRoomStyle.css';
import PropTypes from 'prop-types';
import fetchWithAuth from '../../utils/fetchWithAuth';

const AddNewRoom = ({ addedUsers }) => {
  const [roomName, setNewRoom] = useState('');
  const [roomId, setRoomId] = useState('');

  const inputChange = (e) => {
    setNewRoom(e.target.value);
  };

  // send data fucntion
  const createRoom = async (name) => {
    const response = await fetchWithAuth('api/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: name }),
    });
    return response;
  };
  const onCreate = async (event) => {
    event.preventDefault();
    const responseFromServer = await createRoom(roomName);
    setRoomId(responseFromServer.id);
  };

  // Add user of group in server
  if (roomId) {
    addedUsers.forEach((user) => {
      fetchWithAuth('api/channel-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelId: roomId, userId: user.id }),
      });
    });
  }

  // back button that is move to back app people to room page
  const onBackToAddPeople = () => {
    window.location.assign('./add-people');
  };

  return (
    <>
      <RoomForm
        onCreate={onCreate}
        inputChange={(e) => inputChange(e)}
        roomName={roomName}
        roomId={roomId}
        onBackToAddPeople={onBackToAddPeople}
        addedUsers={addedUsers}
      />
    </>
  );
};
AddNewRoom.propTypes = {
  addedUsers: PropTypes.arrayOf(Object).isRequired,
};

export default AddNewRoom;
