import React from 'react';

import './AddNewRoomStyle.css';

import PropTypes from 'prop-types';

import Room from './Room';

const AddRoom = (props) => {
  const { onFormHandler, inputChange, newRoom, roomId } = props; 
  if (props.roomId) {
    return <Room rooId={roomId} />; // this props will pass to Room component to fetch  users to add in the group
  }
  if (!roomId) {
    return (
      <form onSubmit={onFormHandler}>
        <button type="submit">Add Room</button>
        <input
          type="text"
          placeholder="Add new Room"
          onChange={inputChange}
          value={newRoom}
          required
        />
      </form>
    );
  }
};
AddRoom.PropTypes = {
  newRoom: PropTypes.string.isRequired,
  onFormHandler: PropTypes.func.isRequired,
  roomId: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired,
};
export default AddRoom;
