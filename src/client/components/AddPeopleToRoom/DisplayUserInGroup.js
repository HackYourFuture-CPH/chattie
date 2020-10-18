import React from 'react';
import PropTypes from 'prop-types';
import './AddPeopleToRoom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function DisplayUserInGroup({ addedUsers, onRemoveFromGroup }) {
  if (addedUsers !== 0) {
    return addedUsers.map((user) => (
      <div className="selected-people-wraper" key={user.id + 1}>
        <img src={user.profile_image} alt="users_image" />
        <div>{user.user_name}</div>
        <div role="presentation" onClick={() => onRemoveFromGroup(user.id)}>
          <FontAwesomeIcon icon={faTimesCircle} className="icons-color" />
        </div>
      </div>
    ));
  }
}
DisplayUserInGroup.propTypes = {
  addedUsers: PropTypes.arrayOf(Object).isRequired,
  onRemoveFromGroup: PropTypes.func.isRequired,
};
