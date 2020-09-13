import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Channel() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `localhost:3000/api/messages?channel_id=${id}`;
        const matchedChannel = await fetch(url).then((res) => res.json());
        setMessages(matchedChannel);
      } catch (err) {
        return console.error();
      }
    };
    fetchMessages();
  }, [id]);
  if (messages.length === 0) {
    console.log('messages not found', id);
    return <p>Messages not found for channel with id: {id}</p>;
  }
  return console.log(messages);
}
