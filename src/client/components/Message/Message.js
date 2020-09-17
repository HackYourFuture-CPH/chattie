import React from 'react';
import PropTypes from 'prop-types';
import './Messages.css';

function Message({ username, text }) {
  return (
    <div className="chat-message">
      <p className="chat-message__name"> {username}</p>
      <p className="chat-message__text ">{text}</p>
    </div>
  );
}
Message.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
