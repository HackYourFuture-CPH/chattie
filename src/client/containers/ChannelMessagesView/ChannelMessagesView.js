import React, { useState, useEffect } from 'react';

function ChannelMessagesView() {
  const [messages, setMessages] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/channel_messages');
      const result = await response.json();
      setMessages(result);
    })();
  }, [messages]);

  return (
    <ul className="container">
      {messages &&
        messages.map(({ id, message }) => <li key={id}>{message}</li>)}
    </ul>
  );
}

export default ChannelMessagesView;
