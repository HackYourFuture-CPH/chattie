import React from 'react';
import './CreateNewRoomButton.css';

function CreateNewRoomButton() {
  return (
    <div className="new-room-form">
      <div>
        <button className="create-room-btn" type="submit">
          +
        </button>
        <div className="new-room">New Room</div>
      </div>
    </div>
  );
}
export default CreateNewRoomButton;
