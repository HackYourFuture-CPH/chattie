import React from 'react';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function DiplayListOFUsers({
  users,
  input,
  renderUserInGroup,
  onRemoveFromGroup,
}) {
  const userSearch = users.filter(
    (user) => (user.user_name || '').toLowerCase().indexOf(input) !== -1,
  );

  const getusersearch = userSearch.map((user) => (
    <div key={user.id} className="wraper">
      <div className="image-name-container">
        <div className="profile-img-container">
          <img
            className="profile-img"
            src={user.profile_image}
            alt="users_image"
          />
        </div>
        <div>{user.user_name}</div>
      </div>

      {user.isAddedUser === true && (
        <div
          className="icon-check-color"
          role="presentation"
          onClick={() => onRemoveFromGroup(user.id)}
        >
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      )}
      {user.isAddedUser === false && (
        <div role="presentation" onClick={() => renderUserInGroup(user.id)}>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      )}
    </div>
  ));
  return getusersearch;
}
DiplayListOFUsers.propTypes = {
  users: PropTypes.arrayOf(Object).isRequired,
  renderUserInGroup: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  onRemoveFromGroup: PropTypes.func.isRequired,
};
