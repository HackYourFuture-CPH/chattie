/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './UsersListStyle.css';

export default function Userslist({ users, user, onCreateConversation }) {
  if (!user || !users) {
    return <ul className="user-list" />;
  }
  return (
    <ul className="user-list">
      {users.map(({ id, user_name, profile_image }) => (
        <li
          key={id}
          className="user-item"
          onClick={() => onCreateConversation(id, user)}
        >
          <img src={profile_image} alt={profile_image} />
          <span>{user_name} </span>
        </li>
      ))}
    </ul>
  );
}

Userslist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user_name: PropTypes.string,
      profile_image: PropTypes.string,
    }),
  ).isRequired,
  user: PropTypes.shape({}).isRequired,
  onCreateConversation: PropTypes.func.isRequired,
};
