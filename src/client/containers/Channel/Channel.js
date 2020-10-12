import React, { useEffect, useState, useContext } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import SendMessageForm from '../../components/MessageForm/SendMessageForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import fetchWithAuth from '../../utils/fetchWithAuth';
import ChannelHeadNav from '../../components/ChannelHeadNav/ChannelHeadNav';
import './Channel.css';

const messageFetchUpdateInterval = 3000;

export default function Channel() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const [channelTitle, setChannelTitle] = useState('');
  const [channelImage, setChannelImage] = useState('');
  const user = useContext(UserContext);
  const [userFromDatabase, setUserFromDatabase] = useState('');

  useEffect(() => {
    const getChannelTitleAndImage = async () => {
      const channel = await fetchWithAuth(`/api/channels/${channelId}`);
      const membersofChannel = await fetchWithAuth(
        `api/channel-members/membersInfo?channelId=${channelId}`,
      );
      const otherMember = membersofChannel.filter(
        (member) => member.id !== userFromDatabase.id,
      );

      if (channel.title) {
        setChannelTitle(channel.title);
      } else {
        setChannelTitle(otherMember[0].userName);
      }

      if (channel.imageUrl) {
        setChannelImage(channel.imageUrl);
      } else {
        setChannelImage(otherMember[0].profileImage);
      }
    };
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
    getChannelTitleAndImage();
    const interval = setInterval(() => {
      fetchMessages();
    }, messageFetchUpdateInterval);
    return () => clearInterval(interval);
  }, [channelId, user, userFromDatabase.id]);

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
      <div className="message-list-send-message-form">
        <ChannelHeadNav
          channelName={channelTitle}
          urlBack="/overview"
          imgUrl={channelImage}
          channelId={channelId}
        />
        <div>There does not seem to be any messages here. Try sending one</div>
        <SendMessageForm channelId={channelId} userId={userFromDatabase.id} />
      </div>
    );
  }
  return (
    <div className="message-list-send-message-form">
      <ChannelHeadNav
        channelName={channelTitle}
        urlBack="/overview"
        imgUrl={channelImage}
        channelId={channelId}
      />
      {messages && (
        <MessageList messages={messages} currentUserEmail={currentUserEmail} />
      )}
      <SendMessageForm channelId={channelId} userId={userFromDatabase.id} />
    </div>
  );
}
