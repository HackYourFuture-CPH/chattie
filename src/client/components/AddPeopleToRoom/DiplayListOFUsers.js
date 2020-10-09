import React from 'react';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default function DiplayListOFUsers({ users, input, renderUserInGroup }) {
  const userSearch = users.filter(
    (user) => user.user_name.toLowerCase().indexOf(input) !== -1,
  );

  const getusersearch = userSearch.map((user) => (
    <div key={user.id} className="wraper">
      <img className="profile-img" src={user.profile_image} alt="users_image" />
      <div>{user.user_name}</div>
      <div role="presentation" onClick={() => renderUserInGroup(user.id)}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </div>
    </div>
  ));
  return getusersearch;
}
DiplayListOFUsers.propTypes = {
  users: PropTypes.arrayOf(Object).isRequired,
  renderUserInGroup: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
