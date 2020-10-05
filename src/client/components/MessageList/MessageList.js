/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import '../Message/Message.css';

const MessageList = ({ messages, currentUserEmail }) => {
  return (
    <ul className="chat-message-container">
      {messages.map(({ id, message, userName, profile_image, email }) =>
        Message({
          id,
          profile_image,
          userName,
          message,
          email,
          currentUserEmail,
        }),
      )}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      profile_image: PropTypes.string,
      message: PropTypes.string,
      email: PropTypes.string,
    }),
  ).isRequired,
  currentUserEmail: PropTypes.string.isRequired,
};
export default MessageList;
