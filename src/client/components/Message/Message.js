import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = (props) => {
  return (
    <div className="chat-message">
      <p className="chat-message__name"> {props.currentUser}</p>
      <p className="chat-message__text ">{props.message}</p>
    </div>
  );
};

Message.propTypes = {
  currentUser: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
