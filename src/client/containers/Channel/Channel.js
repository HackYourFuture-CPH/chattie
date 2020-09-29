import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { UserContext } from '../../context/userContext';

export default function Channel() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `/api/messages?channelId=${channelId}`;
        const responce = await fetch(url);
        const matchedChannel = await responce.json();
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
