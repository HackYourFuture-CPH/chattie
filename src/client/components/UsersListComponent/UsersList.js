/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './UsersListStyle.css';

export default function Userslist({ users }) {
  return (
    <div className="container">
      <div className="wrapper">
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.profile_image} alt={user.profile_image} />
              <span>{user.user_name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Userslist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user_name: PropTypes.string,
      profile_image: PropTypes.string,
    }),
  ).isRequired,
};
