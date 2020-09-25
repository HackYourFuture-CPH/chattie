import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

// chat needs to be aligned to right or left based on the user
const Message = ({ text }) => {
  const isWrittenByUser = true;
  return isWrittenByUser ? (
    <div className="chat-messageContainer justifyEnd">
      <div className="chat-messageBox backgroundBlue">
        <p className="chat-messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="chat-messageContainer justifyStart">
      <div className="chat-messageBox backgroundLight">
        <p className="chat-messageText colorDark">{text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Message;
