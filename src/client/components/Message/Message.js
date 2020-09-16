import React from 'react';
import PropTypes from 'prop-types';
import './Messages.css';

function Message({ username, text }) {
  return (
    <div>
      <div className="chat_Body">
        <p className="chat_name"> {username}</p>
        <p className="chat_message ">{text}</p>
      </div>
    </div>
  );
}
Message.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
