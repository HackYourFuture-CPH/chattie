import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/messages')
      .then((responseFromApi) => responseFromApi.json())
      .then((jsonData) => setMessages(jsonData));
  });
  return messages.map((message) => (
    <Message currentUser={message.fk_user_id} message={message.message} />
  ));
};

MessageList.defaultProps = {
  messages: [],
};
MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      currentUser: PropTypes.number,
      message: PropTypes.string,
    }),
  ),
};

export default MessageList;
