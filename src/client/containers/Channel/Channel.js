import React, { useEffect, useState, useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import SendMessageForm from '../../components/MessageForm/SendMessageForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import fetchWithAuth from '../../utils/fetchWithAuth';

const messageFetchUpdateInterval = 3000;

export default function Channel() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const user = useContext(UserContext);
  const [userFromDatabase, setUserFromDatabase] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `/api/messages?channelId=${channelId}`;
        const channelMessages = await fetchWithAuth(url);
        setMessages(channelMessages);
      } catch (err) {
        return <p>{err}</p>;
      }
    };

    fetchMessages();

    const fetchAndSetUserFromDatabase = async () => {
      const users = await fetchWithAuth(`/api/users?email=${user.email}`);

      setUserFromDatabase(users[0]);
    };
    if (user) {
      fetchAndSetUserFromDatabase();
    }

    const interval = setInterval(() => {
      fetchMessages();
    }, messageFetchUpdateInterval);
    return () => clearInterval(interval);
  }, [channelId, user]);

  const currentUserEmail = user ? user.email : '';

  if (!userFromDatabase) {
    return (
      <>
        <div>Loading user</div>
      </>
    );
  }
  if (messages.length === 0) {
    return (
      <>
        <div>There does not seem to be any messages here. Try sending one</div>
        <SendMessageForm channelId={channelId} userId={userFromDatabase.id} />
      </>
    );
  }
  return (
    <>
      {messages && (
        <MessageList messages={messages} currentUserEmail={currentUserEmail} />
      )}
      <SendMessageForm channelId={channelId} userId={userFromDatabase.id} />
    </>
  );
}
