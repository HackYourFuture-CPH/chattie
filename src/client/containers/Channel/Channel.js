import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Channel() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `/api/messages?channelId=${channelId}`;
        const response = await fetch(url);
        const matchedChannel = await response.json();
        setMessages(matchedChannel);
      } catch (err) {
        return <p>{err}</p>;
      }
    };
    fetchMessages();
  }, [channelId]);

  return (
    <ul className="message-list">
      {messages.map(({ id, message }) => (
        <li key={id}>{message}</li>
      ))}
    </ul>
  );
}

export default Channel;
