import React from 'react';
import './AddNewRoomStyle.css';
import ChatGroup from '../AddPeopleToRoom/ChatGroup';
import PropTypes from 'prop-types';
import DisplaypeopleInGroup from './DisplaypeopleInGroup';

const RoomForm = ({
  onCreate,
  inputChange,
  roomName,
  roomId,
  backToAddPeople,
  addUsers,
}) => {
  if (roomId) {
    return <ChatGroup roomId={roomId} roomName={roomName} />;
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
            <button type="submit">Create Room</button>
          </div>
        </form>
        <div className="heading-members-channel">
          <h2>Members of the group</h2>
        </div>
        <div className="container-roomform">
          <DisplaypeopleInGroup addUsers={addUsers} />
        </div>
        <div className="back-button">
          <button type="button" onClick={backToAddPeople}>
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
  backToAddPeople: PropTypes.func.isRequired,
};
export default RoomForm;
