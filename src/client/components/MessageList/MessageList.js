import React from 'react';
import Message from './Message/Message';
import './MessageList.css';
import PropTypes from 'prop-types';

const MessageList = (props) => {
  return (
    <div className="chat-message__container">
      {props.messages.map(({ username, text }) => (
        <Message username={username} text={text} />
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
