import React, { useEffect, useState, useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import SendMessageForm from '../../components/MessageForm/SendMessageForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import fetchWithAuth from '../../utils/fetchWithAuth';
import ChannelHeadNav from '../../components/ChannelHeadNav/ChannelHeadNav';
import useFetch from '../../hooks/useFetch';

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

  const { response: channel } = useFetch(`/api/channels/${channelId}`);
  const { response: channelMembers } = useFetch(
    `api/channel-members/membersInfo?channelId=${channelId}`,
  );
  const currentUserEmail = user ? user.email : '';
  const notCurrentUser = channelMembers
    ? channelMembers.filter((member) => member.email !== currentUserEmail)
    : [];

  if (!userFromDatabase) {
    return (
      <>
        <div>Loading user</div>
      </>
    );
  }
  if (channel?.title === null) {
    return (
      <>
        <ChannelHeadNav
          urlBack="/overview"
          channelName={notCurrentUser[0].userName}
          channelId={channelId}
          imgUrl={notCurrentUser[0].profileImage}
        />
        {messages.length !== 0 ? (
          messages && (
            <MessageList
              messages={messages}
              currentUserEmail={currentUserEmail}
            />
          )
        ) : (
          <>There does not seem to be any messages here. Try sending one</>
        )}
        <SendMessageForm channelId={channelId} userId={userFromDatabase.id} />
      </>
    );
  }
  return (
    <>
      <ChannelHeadNav
        urlBack="/overview"
        channelName={channel.title}
        channelId={channelId}
      />
      {messages.length !== 0 ? (
        messages && (
          <MessageList
            messages={messages}
            currentUserEmail={currentUserEmail}
          />
        )
      ) : (
        <>There does not seem to be any messages here. Try sending one</>
      )}
      <SendMessageForm channelId={channelId} userId={userFromDatabase.id} />
    </>
  );
}
