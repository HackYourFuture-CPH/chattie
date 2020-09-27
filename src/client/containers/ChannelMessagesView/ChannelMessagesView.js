import React, { useState, useEffect } from 'react';
import MessageList from '../../components/MessageList/MessageList';


function ChannelMessagesView() {
  const [messages, setMessages] = useState([]);


  const getMsg = async () => {
    const response = await fetch('api/messages/');

    const result = await response.json();

    setMessages(result);
  };

  useEffect(() => {
    const interval = setInterval(getMsg, 5000);
    return () => clearInterval(interval);
  },[]);

  return (
    <ul className="container">
      {messages &&
        <MessageList messages={messages} />
      }
    </ul>
  );
}

export default ChannelMessagesView;
