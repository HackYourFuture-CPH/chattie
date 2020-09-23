import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageList.css';

// Loop through all the messages in the state and create a Message component
const MessageList = ({ messages }) => {
  return (
    <div className="chat-messages__container">
      {messages.map(({ index, username, message }) => (
        <Message key={index} username={username} text={message} />
      ))}
    </div>
  );
};
MessageList.defaultProps = {
  messages: [],
};
MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

export default MessageList;
