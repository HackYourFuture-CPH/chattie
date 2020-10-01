import React, { useState } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import './EditRoom.style.css';

const EditRoom = () => {
  const [roomTitle, setRoomTitle] = useState('');
  const [roomId, setRoomId] = useState('');
  const roomInputData = {
    title: roomTitle,
  };
  const handleEditRoom = {
    method: 'PATCH',
    body: JSON.stringify(roomInputData),
  };
  const onEdit = async () => {
    await fetchWithAuth(`api/channels/${roomId}`, handleEditRoom);
  };

  return (
    <div className="edit-room">
      <form onSubmit={onEdit}>
        <input
          type="number"
          placeholder="Enter room id"
          value={roomId}
          onChange={(event) => setRoomId(event.target.value)}
        />
        <input
          type="text"
          placeholder="Change room title"
          value={roomTitle}
          onChange={(event) => setRoomTitle(event.target.value)}
        />

        <button type="submit">Confirm change</button>
      </form>
    </div>
  );
};
export default EditRoom;
