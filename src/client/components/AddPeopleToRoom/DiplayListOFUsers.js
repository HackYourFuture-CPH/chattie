import React from 'react';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';

export default function DiplayListOFUsers({ users, input, addUserInGroup }) {
  const userSearch = users.filter(
    (user) => user.user_name.toLowerCase().indexOf(input) !== -1,
  );

  const getusersearch = userSearch.map((user) => (
    <div key={user.id} className="wraper">
      <img
        className="profile-img"
        key={user.id + 2}
        src={user.profile_image}
        alt="users_image"
      />
      <div key={user.id + 3}>{user.user_name}</div>
      <div
        role="presentation"
        key={user.id + 4}
        className="plus-sign"
        onClick={() => addUserInGroup(user.id)}
      >
        +
      </div>
    </div>
  ));
  return getusersearch;
}
DiplayListOFUsers.propTypes = {
  users: PropTypes.arrayOf(Object).isRequired,
  addUserInGroup: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
