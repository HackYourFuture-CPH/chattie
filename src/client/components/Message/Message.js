import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = (props) => {
  return (
    <div className="chat-message__text">
      <p>{props.text}</p>
    </div>
  );
};
Message.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Message;
