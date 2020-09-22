import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageList.css';

// Loop through all the messages in the state and create a Message component
const MessageList = ({ messages }) => {
  return (
    <div className="messages" id="messageList">
      {messages.map(({ username, message }) => (
        <Message key={message.id} username={username} message={message} />
      ))}
    </div>
  );
};

MessageList.defaultProps = {
  messages: [],
};
MessageList.propTypes = PropTypes.shape({
  username: PropTypes.string,
  messages: PropTypes.shape({
    name: PropTypes.string,
    message: PropTypes.string,
  }),
});

export default MessageList;
