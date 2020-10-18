import React from 'react';
import './AddNewRoomStyle.css';
import PropTypes from 'prop-types';
import DisplaypeopleInGroup from './DisplaypeopleInGroup';
import AddImageToRoom from '../AddImageToRoom/AddImageToRoom';

const RoomForm = ({
  onCreate,
  inputChange,
  roomName,
  roomId,
  onBackToAddPeople,
  addedUsers,
}) => {
  if (roomId) {
    window.location.assign(`./channels/${roomId}`);
  }
  if (!roomId) {
    return (
      <div className="main">
        <form onSubmit={onCreate}>
          <div className="form-input">
            <input
              type="text"
              placeholder="please write group name here"
              onChange={inputChange}
              value={roomName}
              required
            />
            <AddImageToRoom />
            <button type="submit">Create Room</button>
          </div>
        </form>
        <div className="heading-members-channel">
          <h2>Members of the group</h2>
        </div>
        <div className="container-roomform">
          <DisplaypeopleInGroup addedUsers={addedUsers} />
        </div>
        <div className="back-button">
          <button type="button" onClick={onBackToAddPeople}>
            Back
          </button>
        </div>
      </div>
    );
  }
};

RoomForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  roomName: PropTypes.string.isRequired,
  onBackToAddPeople: PropTypes.func.isRequired,
};
export default RoomForm;
