import React from 'react';
import PropTypes from 'prop-types';
import './AddPeopleToRoom.css';

export default function DisplayUserInGroup({ addUsers, onRemoveFromGroup }) {
  if (addUsers !== 0) {
    return addUsers.map((user) => (
      <div className="selectedpeople-wraper" key={user.id + 1}>
        <img key={user.id + 2} src={user.profile_image} alt="users_image" />
        <div key={user.id + 3}>{user.user_name}</div>
        <div
          role="presentation"
          className="x-sign"
          onClick={() => onRemoveFromGroup(user.id)}
        >
          X
        </div>
      </div>
    ));
  }
}
DisplayUserInGroup.propTypes = {
  addUsers: PropTypes.arrayOf(Object).isRequired,
  onRemoveFromGroup: PropTypes.func.isRequired,
};
