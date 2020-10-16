/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddImageToRoom from '../AddImageToRoom/AddImageToRoom';
import DisplayUserInGroup from '../AddPeopleToRoom/DisplayUserInGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid';
import './AddNewRoomStyle.css';

const RoomForm = ({ addedUsers, onSubmit, onRemoveFromGroup }) => {
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
        <div className="header-new-group">
          <div className="back-button">
            <div
              role="presentation"
              onClick={() => window.location.assign('./add-people')}
            >
              <FontAwesomeIcon icon={faAngleLeft} /> Back
            </div>
          </div>
          <div className="font-bold">New group</div>
          <button className="create-group-btn" type="submit">
            Create
          </button>
        </div>

        <div className="form-input">
          <AddImageToRoom onUpload={setUrl} value={url} />
          <input
            type="text"
            placeholder="Add group name"
            className="add-group-input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
      </form>
      <div className="heading-members-channel">
        <p>People in group</p>
      </div>
      <ul className="container-roomform">
        <DisplayUserInGroup
          addedUsers={addedUsers}
          onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
        />
      </ul>
    </div>
  );
};
RoomForm.propTypes = {
  addedUsers: PropTypes.arrayOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRemoveFromGroup: PropTypes.func.isRequired,
};
export default RoomForm;
