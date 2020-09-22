import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

// message:{text, senderId,}, userId
// Was the message sent by the current user. If so, add a css class
// here message is object which contains user which need not be logged in and the text message
const Message = ({ message, username }) => {
  return (
    <div className="chat-message__body">
      <p
        className={`chat-message__message ${message.name === username &&
          'chat-message__receiver'}`}
      >
        {message.message}
      </p>
    </div>
  );
};
Message.defaultProps = {
  message: [],
};
Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ),
};
export default Message;
