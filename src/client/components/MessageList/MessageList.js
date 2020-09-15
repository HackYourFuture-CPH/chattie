import React from 'react';
import Message, { MessageType } from '../Message/Message';
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
MessageList.propTypes = {
  messages: PropTypes.arrayOf(MessageType),
};
MessageList.defaultProps = {
  messages: [],
};
export default MessageList;
