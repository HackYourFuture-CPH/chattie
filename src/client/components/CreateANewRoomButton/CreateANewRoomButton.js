import React from 'react';

function CreateANewRoomButton() {
  return (
    <div className="new-room-form">
      <div className="btn-newroom">
        <button classNamebutton="create-room-btn" type="submit">
          +
        </button>
      </div>

      <div className="new-room">New Room</div>
    </div>
  );
}

export default CreateANewRoomButton;
