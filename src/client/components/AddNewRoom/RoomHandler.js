import React, { useState } from 'react';

import AddRoom from './AddRoom';

const RoomHandler = () => {
  const [newRoom, setNewRoom] = useState('');
  const [roomId, setRoomId] = useState('');
  const inputChange = (e) => {
    setNewRoom(e.target.value);
  };

  // send data fucntion

  async function postData(data) {
    const response = await fetch('http://localhost:3000/api/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    return response.json();
  }
  const onFormHandler = (event) => {
    event.preventDefault();
    postData(newRoom).then((data) => {
      setRoomId(data.id);
    });
  };
  return (
    <>
      <AddRoom
        onFormHandler={onFormHandler}
        inputChange={(e) => inputChange(e)}
        newRoom={newRoom}
        roomId={roomId}
      />
    </>
  );
};
export default RoomHandler;
