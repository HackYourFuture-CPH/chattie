import React from 'react';
import Message from '../Message/Message';

function MessageList(props) {
  return (
    <div>
      {props.map((username, text) => (
        <Message username={username} text={text} />
      ))}
    </div>
  );
}

export default MessageList;
