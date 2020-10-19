import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

export default function Message({
  id,
  message,
  email,
  profileImage,
  userName,
  currentUserEmail,
}) {
  const isCurrentUser = email === currentUserEmail;
  return isCurrentUser ? (
    <li key={id} className="current-user-message">
      <p className="chat-message-text">{message}</p>
    </li>
  ) : (
    <li key={id} className="other-users-message">
      <div className="messenge-photo">
        <img src={profileImage} alt={profileImage} />
        <p className="chat-message-text">{message}</p>
      </div>
      <p className="user-name">{userName}</p>
    </li>
  );
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  currentUserEmail: PropTypes.string.isRequired,
};
