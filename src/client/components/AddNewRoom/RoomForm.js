/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddImageToRoom from '../AddImageToRoom/AddImageToRoom';
import './AddNewRoomStyle.css';

const RoomForm = ({ addedUsers, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ title, imageUrl: url });
        }}
      >
        <div className="form-input">
          <AddImageToRoom onUpload={setUrl} value={url} />
          <input
            type="text"
            placeholder="please write room name here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <button type="submit">Create Room</button>
        </div>
      </form>
      <div className="heading-members-channel">
        <h2>Members of the room</h2>
      </div>
      <ul className="container-roomform">
        {addedUsers.map(({ id, profile_image, user_name }) => (
          <li key={id} className="wraper-roomform">
            <div>
              <img src={profile_image} alt="users_image" />
            </div>
            <p>{user_name}</p>
          </li>
        ))}
      </ul>
      <div className="back-button">
        <button
          type="button"
          onClick={() => window.location.assign('./add-people')}
        >
          Back
        </button>
      </div>
    </div>
  );
};
RoomForm.propTypes = {
  addedUsers: PropTypes.arrayOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default RoomForm;
