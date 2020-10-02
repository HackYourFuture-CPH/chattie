import React, { useEffect, useState, useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
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

  if (messages.length === 0) {
    return (
      <>
        <div>There does not seem to be any messages here. Try sending one</div>
        <SendMessageForm />
      </>
    );
  }
  return (
    <>
      {messages && (
        <MessageList messages={messages} currentUserEmail={currentUserEmail} />
      )}
      <SendMessageForm channelId={channelId} userId={currentUserEmail} />
    </>
  );
}
