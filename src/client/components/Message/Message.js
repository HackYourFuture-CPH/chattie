/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

export default function Message({
  id,
  profile_image,
  userName,
  message,
  email,
  currentUserEmail,
}) {
  const isCurrentUser = email === currentUserEmail;
  return isCurrentUser ? (
    <li key={id} className="current-user-message">
      <p className="chat-message-text">{message}</p>
    </li>
  ) : (
    <li key={id} className="other-users-message">
      <img src={profile_image} alt={profile_image} />
      <p>{userName}</p>
      <p className="chat-message-text">{message}</p>
    </li>
  );
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  profile_image: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  currentUserEmail: PropTypes.string.isRequired,
};
