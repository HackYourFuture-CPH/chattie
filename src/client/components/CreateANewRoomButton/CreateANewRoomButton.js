import React from 'react';
import './CreateANewRoomButton.css';

function CreateANewRoomButton() {
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

export default CreateANewRoomButton;
