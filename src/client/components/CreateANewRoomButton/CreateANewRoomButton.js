import React from 'react';
import './CreateANewRoomButton.css';
import { Link } from 'react-router-dom';

function CreateANewRoomButton() {
  return (
    <div className="new-room-form">
      <Link to="/add-people">
        <button className="create-room-btn" type="submit">
          +
        </button>
      </Link>
      <div className="new-room">New Room</div>
    </div>
  );
}
export default CreateANewRoomButton;
