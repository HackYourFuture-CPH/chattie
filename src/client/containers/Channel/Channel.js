import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Channel() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `/api/messages?channel_id=${id}`;
        const matchedChannel = await fetch(url).then((res) => res.json());
        setMessages(matchedChannel);
      } catch (err) {
        return <p>{err}</p>;
      }
    };
    fetchMessages();
  }, [id]);
  if (messages.length === 0) {
    return <p>Messages not found for channel with id: {id}</p>;
  }
  return console.log(messages);
}
