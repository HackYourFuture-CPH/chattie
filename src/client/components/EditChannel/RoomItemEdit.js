import React, { useState } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import './EditRoom.style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RoomItemEdit = (props) => {
  const [roomTitle, setRoomTitle] = useState('');
  const channel = props.location.roomItemEditProps[0];
  const { id } = channel;
  const roomInputData = {
    title: roomTitle,
  };
  const handleEditRoom = {
    method: 'PATCH',
    body: JSON.stringify(roomInputData),
  };
  const onEdit = async () => {
    await fetchWithAuth(`/api/channels/${id}`, handleEditRoom);
  };
  return (
    <div className="edit-room">
      <form onSubmit={onEdit}>
        <input
          type="text"
          placeholder={channel.title}
          value={roomTitle}
          onChange={(event) => setRoomTitle(event.target.value)}
        />
        <Link to="/channels">
          <button type="submit" onClick={() => onEdit(id, roomTitle)}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};
RoomItemEdit.propTypes = {
  location: PropTypes.shape({
    roomItemEditProps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
export default RoomItemEdit;
