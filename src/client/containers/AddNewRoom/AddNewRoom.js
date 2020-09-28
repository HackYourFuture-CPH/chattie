import React, { useState } from 'react';

import RoomForm from '../../components/AddNewRoom/RoomForm';

const AddNewRoom = () => {
  const [roomName, setNewRoom] = useState('');
  const [roomId, setRoomId] = useState('');
  const inputChange = (e) => {
    setNewRoom(e.target.value);
  };

  // send data fucntion
  const createRoom = async (data) => {
    const response = await fetch('api/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    return response.json();
  };
  const onCreate = async (event) => {
    event.preventDefault();
    const responseFromServer = await createRoom(roomName);
    setRoomId(responseFromServer.id);
  };
  return (
    <>
      <RoomForm
        onCreate={onCreate}
        inputChange={(e) => inputChange(e)}
        roomName={roomName}
        roomId={roomId}
      />
    </>
  );
};
export default AddNewRoom;
