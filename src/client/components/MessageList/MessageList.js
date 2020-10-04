import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageList.css';
import ProfileImage from '../ProfileImage/ProfileImage';

// Loop through all the messages in the state and create a Message component
const MessageList = ({ messages }) => {
  const messageComponent = messages.map(({ index, username, message }) => {
    if (index === messages.length - 1) {
      return (
        <>
          <ProfileImage username={username} />
          <Message key={index} username={username} text={message} />
        </>
      );
    }

    return <Message key={index} username={username} text={message} />;
  });

  return <div className="chat-messages__container">{messageComponent}</div>;
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
