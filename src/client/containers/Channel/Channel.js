import React, { useEffect, useState, useContext } from 'react';
import Message from '../../components/Message/Messages';

import SendMessageForm from '../../components/MessageForm/SendMessageForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function Channel() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const user = useContext(UserContext);

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
  const currentUserEmail = user ? user.email : '';

  return (
    <>
      {messages && (
        <Message messages={messages} currentUserEmail={currentUserEmail} />
      )}
      <SendMessageForm />
    </>
  );
}
