import React from 'react';
import './AddNewRoomStyle.css';
import PropTypes from 'prop-types';

const RoomForm = (props) => {
  const { onCreate, inputChange, roomName, roomId } = props;
  if (roomId) {
    return `welcome to new room with id ${roomId} and add people in Room `;
  }
  if (!roomId) {
    return (
      <form onSubmit={onCreate}>
        <button type="submit">Add Room</button>
        <input
          type="text"
          placeholder="Add new Room"
          onChange={inputChange}
          value={roomName}
          required
        />
      </form>
    );
  }
};

RoomForm.PropTypes = {
  roomName: PropTypes.string.isRequired,
  onFormHandler: PropTypes.func.isRequired,
  roomId: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired,
};
export default RoomForm;
