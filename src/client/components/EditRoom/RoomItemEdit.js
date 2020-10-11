import React, { useState } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import './EditRoom.style.css';
import { Link } from 'react-router-dom';

const RoomItemEdit = (props) => {
  const [roomTitle, setRoomTitle] = useState('');
  const channel = props.location.roomItemEditProps[0];
  const id = channel.id;
  const editChannel = async (id, title) => {
    await fetchWithAuth(`/api/channels/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
      }),
    });
  };
  return (
    <div className="edit-room">
      <form onSubmit={editChannel}>
        <input
          type="text"
          placeholder={channel.title}
          value={roomTitle}
          onChange={(event) => setRoomTitle(event.target.value)}
        />
        <Link to={'/channels'}>
          <button type="submit" onClick={() => editChannel(id, roomTitle)}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default RoomItemEdit;
