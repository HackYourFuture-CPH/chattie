import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((username, text) => (
        <Message username={username} text={text} />
      ))}
    </div>
  );
}

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
